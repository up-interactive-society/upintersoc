FROM node

RUN npm install -g sails
RUN npm install -g forever

WORKDIR /src/upintersoc

RUN cd /src/upintersoc
RUN npm install
RUN npm install --save sails-mysql

EXPOSE 1337
