# Node v7 as the base image to support ES6
FROM node:8.9.4
ENV HOME=/home/ez-auth
COPY package.json $HOME/ez-auth/
COPY src/ $HOME/ez-auth/src
WORKDIR $HOME/ez-auth
RUN npm install
COPY ../ez-csf $HOME/ez-auth/node_modules
EXPOSE 5000
CMD ["npm", "start"]