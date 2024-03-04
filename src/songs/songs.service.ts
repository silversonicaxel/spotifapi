import { Injectable, NotFoundException } from '@nestjs/common';
import { Song } from './entities/songs.entity';

@Injectable()
export class SongsService {
  private songs: Song[] = [
    {
      id: '1',
      name: 'Whatever',
      artist: 'Oasis',
      artistId: '',
      album: '',
      albumId: '',
    },
  ];

  #findIndex(id: string) {
    const songIndex = this.songs.findIndex((item) => item.id === id);

    if (!songIndex) {
      throw new NotFoundException(`song ${id} not found`);
    }

    return songIndex;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    const song = this.songs.find((item) => item.id === id);

    if (!song) {
      throw new NotFoundException(`song ${id} not found`);
    }

    return song;
  }

  create(body: any) {
    this.songs.push(body);
  }

  updateOne(id: string, body: Song) {
    const foundSongIndex = this.#findIndex(id);
    if (foundSongIndex) {
      this.songs[foundSongIndex] = body;
    }
  }

  deleteOne(id: string) {
    this.songs = this.songs.filter((item) => {
      return item.id !== id;
    });
  }
}
