import { Module } from '@nestjs/common';
import { SongRatingService } from './song-rating.service';
import { SongsModule } from 'src/songs/songs.module';

@Module({
  imports: [SongsModule],
  providers: [SongRatingService],
})
export class SongRatingModule {}
