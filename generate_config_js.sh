#!/bin/sh
echo window.REACT_APP_BACKEND_URL=\"${REACT_APP_BACKEND_URL}\"\; > /usr/share/nginx/html/config.js
cat /usr/share/nginx/html/config.js