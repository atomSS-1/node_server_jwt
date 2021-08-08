FROM node:10

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# RUN chmod +x docker-entrypoint.sh  
ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 3000

# CMD ["npm","start"]
