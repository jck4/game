FROM node:current-alpine3.10

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

# Exports
EXPOSE 8080

CMD [ "npm", "run", "start.dev" ]