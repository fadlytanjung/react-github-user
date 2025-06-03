# Stage 1: Build the app
FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built app to nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
