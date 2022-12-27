FROM node:lts

WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonの両方をコピー
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000