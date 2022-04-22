FROM node:16.14.2-alpine3.14 as main

RUN npm install --global concurrently

WORKDIR /client

COPY package.json ./

RUN npm install

COPY . .

CMD npx concurrently npm:react-start