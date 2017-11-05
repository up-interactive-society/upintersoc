FROM node

WORKDIR /src/upintersoc

RUN cd /src/upintersoc/frontend
RUN npm install
RUN npm build
RUN cd /src/upintersoc/backend
RUN npm install

EXPOSE 1337
