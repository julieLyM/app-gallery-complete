FROM node:latest

EXPOSE 4000
WORKDIR /app

VOLUME /app

# COPY ./server.js .

# RUN npm install

CMD ["npm", "run","start"]