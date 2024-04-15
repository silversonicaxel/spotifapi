import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/songs.entity';
import { Author } from './entities/authors.entity/authors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Author])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
