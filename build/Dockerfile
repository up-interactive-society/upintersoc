FROM node

RUN npm install -g \
  sails \
  browserify \
  pm2

RUN apt-get update
RUN apt-get install -y nano

WORKDIR /src/upintersoc

RUN cd /src/upintersoc
RUN npm install
RUN npm install -g forever

EXPOSE 1337