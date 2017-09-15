FROM node

RUN npm install -g \
  sails \
  browserify \
  pm2

RUN apt-get update
RUN apt-get install -y nano

WORKDIR /src

EXPOSE 1337