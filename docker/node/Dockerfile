FROM node:14.12.0-alpine3.12

WORKDIR /rails-api-and-vuecli/front

RUN apk update && \
    npm install -g @vue/cli

COPY /front/package.json ./

RUN npm install

CMD ["npm", "run", "serve"]
