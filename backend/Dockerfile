FROM node:20.11.1

WORKDIR /app

COPY package*.json ./
RUN npm i

EXPOSE 4200

CMD [ "npm", "run", "start:dev" ]
