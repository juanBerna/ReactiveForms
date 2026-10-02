# --- ETAPA 1: Construcción ---
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

# --- ETAPA 2: Servir con Nginx ---
FROM nginx:alpine
COPY --from=build /app/dist/reactive-forms-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
