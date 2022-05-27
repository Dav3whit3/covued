FROM node:16.14.2-alpine3.14 as main

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run dev