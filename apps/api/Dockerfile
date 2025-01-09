FROM denoland/deno:2.1.4

EXPOSE 3001

WORKDIR /app

COPY . .

RUN deno install


WORKDIR /app/apps/api


CMD [ "deno", "task", "start"  ]