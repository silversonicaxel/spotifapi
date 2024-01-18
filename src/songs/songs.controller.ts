import { Controller, Get, Param } from '@nestjs/common';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Placeholder for Song ${id} in Spotifapi`;
  }
}
