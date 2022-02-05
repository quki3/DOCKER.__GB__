FROM node:12-alpine

WORKDIR /src

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node","src/index.js"]

