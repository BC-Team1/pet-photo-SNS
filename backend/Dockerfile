FROM ruby:3.0

RUN apt-get update -qq && apt-get install -y default-mysql-client
RUN mkdir /app

COPY . /app

WORKDIR /app

RUN bundle install