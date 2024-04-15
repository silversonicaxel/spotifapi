import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('json', { nullable: true })
  authors: string[];
}
