# pho.fyi

### A website showcasing a selling works of art create by (Pho Moon)

<br/>
<br/>

## Getting started with development

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

## To build the app for production

```bash
pnpm build
# or
yarn build
# or
npm run build
```

## To start the App in production mode

```bash
pnpm start
# or
yarn start
# or
npm run start
```

## To lint the app

```bash
pnpm lint
# or
yarn lint
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
