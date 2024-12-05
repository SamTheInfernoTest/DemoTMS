FROM node:22-alpine

WORKDIR /frontend

COPY *.json .

RUN npm install

COPY . .

EXPOSE 2000

CMD ["npm","run", "dev"]
