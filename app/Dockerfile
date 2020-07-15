FROM node
WORKDIR /app
COPY package.json package-lock.json app.js ./
RUN npm install
EXPOSE 5000
CMD npm run start