FROM node:alpine3.15 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/proyecto-frontend-peru /usr/share/nginx/html

# se crea la imagen usando el Dockerfile
# docker build -t proyecto-frontend-peru .
