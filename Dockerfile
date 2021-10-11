FROM node:lts-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

FROM node:lts-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app/ ./

EXPOSE 3000

CMD [ "npm", "start" ]
