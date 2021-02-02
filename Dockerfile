FROM node:alpine3.12

RUN npm install -g serve

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "serve", "-s", "build" ]