import { Injectable } from '@nestjs/common';
import { SongsService } from 'src/songs/songs.service';

@Injectable()
export class SongRatingService {
  constructor(private readonly songService: SongsService) {}
}
