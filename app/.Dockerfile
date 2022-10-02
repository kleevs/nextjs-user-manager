FROM node

RUN npm -g install pnpm

WORKDIR /src/app

COPY . .
RUN pnpm install

CMD [ "npm", "start" ]