import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/songs.entity';
import { Author } from './entities/authors.entity/authors.entity';
import { Event } from '../events/entities/events.entity/events.entity';
import { SONG_FORMATS, SONG_STORES } from './songs.constants';
import { SongStoresFactory } from './factories/song.stores.factory';

class SongLength {}

@Module({
  imports: [TypeOrmModule.forFeature([Song, Author, Event])],
  providers: [
    SongsService,
    { provide: SONG_FORMATS, useValue: ['mp3', 'flac'] },
    SongStoresFactory,
    {
      provide: SONG_STORES,
      useFactory: (storesFactory: SongStoresFactory) => storesFactory.create(),
      inject: [SongStoresFactory],
    },
    { provide: SongLength, useClass: SongLength },
  ],
  controllers: [SongsController],
  exports: [SongsService],
})
export class SongsModule {}
