FROM denoland/deno:2.1.4

EXPOSE 5173

WORKDIR /app

COPY . .

RUN deno install


WORKDIR /app/apps/spa


CMD [ "deno", "task", "start"  ]