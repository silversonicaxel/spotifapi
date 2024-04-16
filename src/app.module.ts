import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongRatingModule } from './song-rating/song-rating.module';

@Module({
  imports: [
    SongsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'spotifapi_user',
      password: 'spotifapi_pass',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // for development only
    }),
    SongRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
