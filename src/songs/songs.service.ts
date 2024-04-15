import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/songs.entity';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto/update-song.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepo: Repository<Song>,
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

  create(dto: CreateSongDto) {
    const song = this.songRepo.create(dto);
    return this.songRepo.save(song);
  }

  async updateOne(id: string, dto: UpdateSongDto) {
    const song = await this.songRepo.preload({
      id: +id,
      ...dto,
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
}
