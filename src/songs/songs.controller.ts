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
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'findAll Songs in Spotifapi';
  }

  /**
   * Alternative to findAll()
   */
  @Get()
  findAllPaginated(@Query() pagination) {
    const { limit, offset } = pagination;
    return `findAllPaginated Songs with limit ${limit} and offset ${offset} in Spotifapi`;
  }

  @Get('IT')
  findAllItalian() {
    return 'findAll Italian Songs in Spotifapi';
  }

  /**
   * Non standard NestJs usage of response
   */
  @Get('DE')
  findAllGerman(@Res() response: Response) {
    response.status(200).send('findAll German Songs in Spotifapi');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find Song ${id} in Spotifapi`;
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
    return `update Song ${id} in Spotifapi`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return `delete Song ${id} in Spotifapi`;
  }
}
