import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'Placeholder for Songs in Spotifapi';
  }

  @Get('IT')
  findAllItalian() {
    return 'Placeholder for Italian Songs in Spotifapi';
  }
}
