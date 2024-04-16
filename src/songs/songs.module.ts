import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/songs.entity';
import { Author } from './entities/authors.entity/authors.entity';
import { Event } from '../events/entities/events.entity/events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Author, Event])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
