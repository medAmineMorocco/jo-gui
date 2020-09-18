FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
RUN npm run build:re7

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html


#docker run -d -it  -p 3000:80 --name jo-copie-docker-2 jo-copie-multi-stage-nginx:latest