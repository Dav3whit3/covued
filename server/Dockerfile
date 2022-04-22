FROM node:16.14.2-alpine3.14 as main

RUN npm install --global nodemon@latest
RUN npm install -g ts-node

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run express-dev