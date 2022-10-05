FROM node:16

RUN npm -g install pnpm

WORKDIR /src

COPY . .
RUN pnpm install

CMD [ "npm", "run", "storybook" ]