import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

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

  /**
   * Non standard NestJs usage of response
   */
  @Get('DE')
  findAllGerman(@Res() response: Response) {
    response.status(200).send('Placeholder for German Songs in Spotifapi');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Placeholder for Song ${id} in Spotifapi`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Post('IT')
  @HttpCode(HttpStatus.GONE)
  createItalian(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body) {
    return `Placeholder for Song ${id} in Spotifapi`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return `Placeholder for Song ${id} in Spotifapi`;
  }
}
