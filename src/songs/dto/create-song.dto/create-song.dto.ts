import { IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly artist: string;

  @IsString()
  readonly artistId: string;

  @IsString()
  readonly album: string;

  @IsString()
  readonly albumId: string;

  @IsString({ each: true })
  readonly authors: string[];
}
