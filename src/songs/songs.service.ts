import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/songs.entity';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto/update-song.dto';
import { Author } from './entities/authors.entity/authors.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepo: Repository<Song>,
    @InjectRepository(Author)
    private readonly authorRepo: Repository<Author>,
  ) {}

  findAll() {
    return this.songRepo.find({ relations: { authors: true } });
  }

  async findOne(id: string) {
    const song = await this.songRepo.findOne({
      where: { id: +id },
      relations: { authors: true },
    });

    if (!song) {
      throw new NotFoundException(`song ${id} not found`);
    }

    return song;
  }

  async create(dto: CreateSongDto) {
    const authors = await Promise.all(
      dto.authors.map((name) => this.#preloadAuthorByName(name)),
    );

    const song = this.songRepo.create({
      ...dto,
      authors,
    });
    return this.songRepo.save(song);
  }

  async updateOne(id: string, dto: UpdateSongDto) {
    const authors =
      dto.authors &&
      (await Promise.all(
        dto.authors.map((name) => this.#preloadAuthorByName(name)),
      ));

    const song = await this.songRepo.preload({
      id: +id,
      ...dto,
      authors,
    });

    if (!song) {
      throw new NotFoundException(`song ${id} not found`);
    }

    return this.songRepo.save(song);
  }

  async deleteOne(id: string) {
    const song = await this.findOne(id);
    return this.songRepo.remove(song);
  }

  async #preloadAuthorByName(name: string): Promise<Author> {
    const author = await this.authorRepo.findOne({
      where: { name },
    });

    if (author) {
      return author;
    }

    return this.authorRepo.create({ name });
  }
}
