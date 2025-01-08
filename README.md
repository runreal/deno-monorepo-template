# Deno Monorepo Starter kit

Fully type safe mono repo starter kit with Deno, React, Vite, Tanstack Router, Tanstack Query, Hono, Trpc, Drizzle, Supabase, and more.

## Directory Structure

`├──` [`apps`]
`  ├──` [`api`] : Hono + Trpc
`  ├──` [`spa`] : React + Vite + Tanstack Router + Tanstack Query + Trpc
`  ├──` [`supabase`] : Supabase
`├──` [`packages`]
`  ├──` [`db`] : Drizzle
`  ├──` [`add`] : Simple lib

## quickstart

Install the dependencies

```shell
deno install --allow-scripts
```

Launch the api server

```shell
deno task dev:api
```

Launch the frontend

```shell
deno task dev:web
```

