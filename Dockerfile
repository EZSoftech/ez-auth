# Node v7 as the base image to support ES6
FROM node:8.9.4

ENV APP_HOME /srv/
RUN mkdir -p $APP_HOME

# Bundle app
COPY package.json $APP_HOME
COPY bin/ $APP_HOME/bin/
COPY dist/ $APP_HOME/dist/
COPY config/ $APP_HOME/config/
COPY gulpfile.js $APP_HOME/gulpfile.js
COPY tsconfig.json $APP_HOME/tsconfig.json

WORKDIR $APP_HOME

#RUN mkdir -p ~/.ssh && cp config/id_rsa ~/.ssh/id_rsa && chmod 600 ~/.ssh/id_rsa && ssh-keyscan -t ed25519 gitswarm.powerschool.com >> ~/.ssh/known_hosts
RUN npm install

ENV PATH=$PATH:$APP_HOME/node_modules/.bin
EXPOSE 8082
CMD ["gulp"]
