# Step 1: Build the application
FROM node:20 AS builder

WORKDIR /app

# For now copying the locally built files over, instead of
# build fresh because we might require other local packages
COPY ./dist ./build

# Potential other way to handle this
# COPY ./package.json ./
# RUN npm i --production
# COPY . .
# RUN npm run build

# Step 2: Set up the production environment
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]