FROM node:latest
COPY backend/ /backend
COPY client/ /client
WORKDIR /backend
RUN npm install
RUN node buildScript.js


CMD ["npm", "start"]