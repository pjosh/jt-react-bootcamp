FROM node:10.10.0-alpine
MAINTAINER Jobandtalent Team <frontend.team@jobandtalent.com>

LABEL app="design_system" stack.binary="node" stack.version="10.alpine"

WORKDIR /design_system

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile

COPY . .

CMD ["yarn", "storybook"]
EXPOSE 8080
