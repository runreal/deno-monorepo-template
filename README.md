<p align="center">
<img src="image.png " alt="Deno Monorepo Starter Kit" />
</p>


<p align="center">
	<h1 align="center"><b>Deno Monorepo Starter Kit</b></h1>
<p align="center">
    An deno open-source starter kit made by <a href="https://www.runreal.dev">Runreal</a>.
    <br />
    <br />
    <a href="https://github.com/runreal/deno-monorepo-template/issues"><strong>Issues</strong></a> ·
    <a href="#whats-included"><strong>What's included</strong></a> ·
    <a href="#prerequisites"><strong>Prerequisites</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a>
  </p>
</p>


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
│    ├── auth                    # Auth: BetterAuth
│    ├── db                      # Database: Drizzle
│    └── ...
├── deno.jsonc                   # Deno Workspace configuration
├── LICENSE
└── README.md
```

## Prerequisites

- [Deno](https://deno.land/)


## What's included

- [Drizzle](https://drizzle.team/)
- [Hono](https://hono.dev/)
- [Supabase](https://supabase.com/)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Trpc](https://trpc.io/)
- [BetterAuth](https://www.better-auth.com/)

## Getting Started

1. Clone the repository

2. Install the dependencies

```shell
deno install --allow-scripts
```

3. Launch the database

```shell
deno task supabase:start
```

4. Run the migrations

```shell
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
7. Run the tests

```shell
deno test --allow env
```

## Todo

- [ ] Add tests with Vitest (Currently using Deno test)
- [X] Docker images for each app
- [ ] Add documentation website with Astro Starlight
- [ ] Add a NextJS app in the monorepo

## Contributing

Feel free to contribute to this starter kit. If you have any questions, feel free to open an issue.

