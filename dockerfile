FROM node:10

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install
RUN npm start
COPY . .

EXPOSE 3000
