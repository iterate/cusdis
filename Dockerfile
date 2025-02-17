FROM node:18-alpine as builder

VOLUME [ "/data" ]

ARG DB_TYPE=sqlite
ENV DB_TYPE=$DB_TYPE

RUN apk add --no-cache python3 py3-pip make gcc g++ bash

COPY . /app

COPY package.json yarn.lock /app/

WORKDIR /app

RUN echo $PATH
RUN npm install -g pnpm
RUN /bin/bash -c "yarn install --frozen-lockfile && npx browserslist@latest --update-db"
RUN npm run build:without-migrate

FROM node:18-alpine as runner

# Install bash in the runner stage
RUN apk add --no-cache bash

ENV NODE_ENV=production
ARG DB_TYPE=sqlite
ENV DB_TYPE=$DB_TYPE

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY . /app

EXPOSE 3000/tcp

#Check the Bash Installation
RUN which bash

CMD ["npm", "run", "start:with-migrate"]
