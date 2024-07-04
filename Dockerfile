FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build     # This is an image build step. State of the container after a RUN is committed to a container image.

# FROM statements in docker file is considered as start of the block. 
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html