FROM ruby:2.7.2-alpine3.12

WORKDIR /rails-api-and-vuecli

RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache \
      build-base \
      libxml2-dev \
      libxslt-dev \
      postgresql \
      postgresql-dev

COPY Gemfile Gemfile.lock ./

RUN bundle install && \
    mkdir -p tmp/sockets

COPY . ./
