FROM node:16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
WORKDIR /app
COPY --chown=app:app package*.json .
RUN npm install
COPY --chown=app:app . .
USER app

ENV API_URL=http://api.myapp.com
CMD ["npm", "start"]
