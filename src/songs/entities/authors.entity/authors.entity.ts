import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Song } from '../songs.entity';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Song, (song) => song.authors)
  songs: Song[];
}
