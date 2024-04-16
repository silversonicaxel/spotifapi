## Description

spotifapi is a [Nest](https://github.com/nestjs/nest) project for learning purposes.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

```bash
$ docker-compose up-d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# generate manually a migration
npx typeorm migration:create src/migrations/SongRefactor

# compile project first
npm run build

# run migration(s)
npx typeorm migration:run -d dist/typeorm-cli.config

# revert migration(s)
npx typeorm migration:revert -d dist/typeorm-cli.config

# generate via TypeOrm a migration (instead of you)
npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config
```
