FROM node:latest

WORKDIR /app

RUN npm install -g npm@7.7.6
COPY . /app
RUN npm install
RUN cp .env.example .env

RUN node ace migration:run

EXPOSE 5000

ENTRYPOINT [ "npm", "start" ]
