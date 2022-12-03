# pho.fyi

### A website showcasing a selling works of art create by (Pho Moon)

<br/>
<br/>

## Getting started with development

```bash
pnpm dev
# or
npm run dev
```

## To build the app for production

```bash
pnpm build
# or
npm run build
```

## To start the App in production mode

```bash
pnpm start
# or
npm run start
```

## To lint the app

```bash
pnpm lint
# or
npm run lint
```

<br/>
<br/>

### Open

[http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>
<br/>
<br/>

## Migrations and schema evolution

Update your schema found in prisma/schema.prisma

Then process the schema with the following command

```bash
  npx prisma migrate dev --name [new-model-name]
  # or
  pnpm prisma migrate dev --name [new-model-name]
```

This command will create a new sql migration file
apply the generated sql migration to the database
the regenerate the prisma client

## Database introspection - Create a schema based on your database

```bash
  npx prisma db pull
  # or
  pnpm prisma db pull
```

## Database baseline create an inital migration

```bash
  npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql
  # or
  pnpm prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql
```

After this is completet review the migration to make sure everything is ok

Next mark the migration as applied

```bash
  npx prisma migrate resolve --applied init
  # or
  pnpm prisma migrate resolve --applied init
```

## Prisma client generation

After introspection and database baseline, you can generate the client with the following.

```bash
  npx prisma generate
  #or
  pnpm prisma generate
```

After the client is generated you can use it the following way

```javascript
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
```
