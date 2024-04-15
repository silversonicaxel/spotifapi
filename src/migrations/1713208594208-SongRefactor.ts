import { MigrationInterface, QueryRunner } from 'typeorm';

export class SongRefactor1713208594208 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "songs" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "songs" RENAME COLUMN "title" TO "name"`,
    );
  }
}
