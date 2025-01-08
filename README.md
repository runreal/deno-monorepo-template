# Deno Monorepo Starter Kit

Fully type safe mono repo starter kit with Deno, React, Vite, Tanstack Router, Tanstack Query, Hono, Trpc, Drizzle, Supabase, and more.

## Directory Structure

```
.
├── apps                         # Apps
│    ├── api                     # Hono + Trpc
│    ├── supabase                # Supabase
│    ├── spa                     # React + Vite + Tanstack Router + Tanstack Query + Trpc
│    └── ...
├── packages                     # Shared packages between apps
│    ├── lib                     # Simple lib
│    ├── db                      # Database: Drizzle
│    └── ...
├── deno.jsonc                   # Deno Workspace configuration
├── LICENSE
└── README.md
```

## Pre-requisites

- [Deno](https://deno.land/)


## What's included

- [Drizzle](https://drizzle.team/)
- [Hono](https://hono.dev/)
- [Supabase](https://supabase.com/)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Trpc](https://trpc.io/)

## Getting Started

1. Clone the repository

2. Install the dependencies

```shell
deno install --allow-scripts
```

3. Launch the database

```shell
deno task db:start
```

4. Run the migrations

```shell
cd packages/db
deno task db:migrate
```

5. Launch the api server

```shell
deno task dev:api
```

6. Launch the frontend

```shell
deno task dev:web
```

## Todo

- [ ] Add tests with Vitest
- [ ] Docker images for each app
- [ ] Add documentation website with Astro Starlight
- [ ] Add a NextJS app in the monorepo

## Contributing

Feel free to contribute to this starter kit. If you have any questions, feel free to open an issue.

