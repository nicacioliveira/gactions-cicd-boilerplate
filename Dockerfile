FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY package*.json ./

EXPOSE 8080

RUN yarn install --production

CMD yarn start
