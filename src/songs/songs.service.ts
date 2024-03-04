import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find((item) => item.id === id);
  }

  create(body: any) {
    this.songs.push(body);
  }

  updateOne(id: string, body: any) {
    this.songs.push(body);

    const foundSong = this.findOne(id);
    if (foundSong) {
    }
  }

  deleteOne(id: string) {
    this.songs = this.songs.filter((item) => {
      return item.id !== id;
    });
  }
}
