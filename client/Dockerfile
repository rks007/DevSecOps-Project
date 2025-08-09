<<<<<<< HEAD
# Stage 1: Build React App
=======
>>>>>>> b618d01754b2c63ee9ef65f3a29f2c26a274c3c4
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
<<<<<<< HEAD

# Optional: pass REACT_APP_API as build arg
ARG REACT_APP_API
ENV REACT_APP_API=$REACT_APP_API

=======
ARG REACT_APP_API
ENV REACT_APP_API=$REACT_APP_API
>>>>>>> b618d01754b2c63ee9ef65f3a29f2c26a274c3c4
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine
<<<<<<< HEAD

# 🟢 Copy correct default.conf to override nginx default
COPY default.conf /etc/nginx/conf.d/default.conf

# 🟢 Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

# 🔒 Prevent directory listings and ensure correct permissions
RUN chmod -R 755 /usr/share/nginx/html

=======
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
>>>>>>> b618d01754b2c63ee9ef65f3a29f2c26a274c3c4
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
