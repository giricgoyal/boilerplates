FROM node:13-alpine

RUN apk update && apk add --no-cache nmap && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      chromium \
      harfbuzz \
      "freetype>2.8" \
      ttf-freefont \
      nss

ENV NODE_ENV production

RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app

COPY --chown=node:node . .

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN apk update || : && apk add python
RUN yarn --production --silent
RUN yarn run build
RUN mkdir dist/tmp

EXPOSE 9000

CMD node dist/app.js
