FROM node:10-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .

USER node

RUN npm install

COPY --chown=node:node . .

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "index.js" ]