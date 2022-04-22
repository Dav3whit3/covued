FROM node:16.14.2-alpine3.14 as main

RUN npm install --global nodemon
RUN npm install --global concurrently

RUN adduser -S \
--disabled-password \
 master 

WORKDIR /code

RUN chown master -R /code/
RUN chown master -R /usr/local/lib/

USER master

COPY --chown=master:master /src /code/src/
COPY --chown=master:master /public /code/public/
COPY --chown=master:master /server /code/server/

COPY --chown=master:master package.json /code/
COPY --chown=master:master tsconfig.json /code/

COPY --chown=master:master postcss.config.js /code/
COPY --chown=master:master tailwind.config.js /code/

COPY --chown=master:master .env /code/

RUN npm install


# ===== DEV =====
FROM main as express-DEV
CMD npm run express-dev

FROM main as react-DEV
CMD npx concurrently npm:react-start



# ==== PROD =====
FROM main as PROD
CMD npm run start