FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN yarn build
EXPOSE 4000 
CMD ["yarn","start:prod"]