FROM node

RUN npm install -g sails

WORKDIR /src
RUN cd /src

RUN npm install
RUN npm install --save sails-mysql

EXPOSE 1337
