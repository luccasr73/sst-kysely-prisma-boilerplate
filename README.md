# sst-kysely-prisma-boilerplate

## requirements
Node 16.x
NPM 9.x
Recommendation: use [https://volta.sh/](Volta) NODE and NPM version are pinned on package.json

## Running Prisma
- create a `.env.dev` inside `src/packages/prisma` and add `DATABASE_URL`
- run `npm run db:push:dev` to sync your dev db
- create your prod `.env` and migration/push scripts

## Configure secrets
DB connection inside functions is powered by SST secrets, these secrets need to be configured before deploy function
```
npx sst secrets set DATABASE_NAME value
npx sst secrets set DATABASE_USER value
npx sst secrets set DATABASE_HOST value
npx sst secrets set DATABASE_PASS value
```
read more about secrets on SST docs https://docs.sst.dev/config#secrets

## Running project

    npm run sst dev
