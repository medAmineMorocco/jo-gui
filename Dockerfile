FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
RUN npm run build

FROM nginx:1.14.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
COPY docker-entrypoint.sh generate_config_js.sh /
RUN chmod +x docker-entrypoint.sh generate_config_js.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

#docker build -t replace-cojo-gui .
#docker run -d -it -e REACT_APP_BACKEND_URL=http://localhost:5000 -p 3000:80 replace-cojo-gui