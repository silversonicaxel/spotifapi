import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'spotifapi_user',
  password: 'spotifapi_pass',
  database: 'postgres',
  entities: [],
  migrations: [],
});
