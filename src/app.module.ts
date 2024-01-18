import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [],
  controllers: [AppController, SongsController],
  providers: [AppService],
})
export class AppModule {}
