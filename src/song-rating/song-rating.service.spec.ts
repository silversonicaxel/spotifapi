import { Test, TestingModule } from '@nestjs/testing';
import { SongRatingService } from './song-rating.service';

describe('SongRatingService', () => {
  let service: SongRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongRatingService],
    }).compile();

    service = module.get<SongRatingService>(SongRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
