import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './authors.entity/authors.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  artistId: string;

  @Column()
  album: string;

  @Column()
  albumId: string;

  @JoinTable()
  @ManyToMany(() => Author, (author) => author.songs, {
    cascade: true,
  })
  authors: Author[];
}
