FROM node:16

WORKDIR /prisma

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm","run","build" ]