FROM node:8

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

RUN npm install && ng serve --host 0.0.0.0
