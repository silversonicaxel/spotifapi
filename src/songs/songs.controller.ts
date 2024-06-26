import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto/update-song.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.songsService.findAll(paginationQuery);
  }

  /**
   * Alternative to findAll()
   */
  // @Get()
  // findAll() {
  //   // return 'findAll Songs in Spotifapi';
  //   return this.songsService.findAll();
  // }

  // @Get('IT')
  // findAllItalian() {
  //   return 'findAll Italian Songs in Spotifapi';
  // }

  /**
   * Non standard NestJs usage of response
   */
  // @Get('DE')
  // findAllGerman(@Res() response: Response) {
  //   response.status(200).send('findAll German Songs in Spotifapi');
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `find Song ${id} in Spotifapi`;
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    // return body;
    return this.songsService.create(createSongDto);
  }

  // @Post('IT')
  // @HttpCode(HttpStatus.GONE)
  // createItalian(@Body() body) {
  //   return body;
  // }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    // return `update Song ${id} in Spotifapi`;
    return this.songsService.updateOne(id, updateSongDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    // return `delete Song ${id} in Spotifapi`;
    return this.songsService.deleteOne(id);
  }
}
