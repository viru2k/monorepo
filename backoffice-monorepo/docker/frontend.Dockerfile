# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS build

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json del monorepo
COPY package.json package-lock.json ./

# Instalar dependencias del monorepo
RUN npm install --legacy-peer-deps --ignore-scripts

# Copiar el resto del monorepo
COPY . /app

# Construir la aplicación específica del monorepo
RUN npx nx build backoffice-monorepo --prod

# Etapa 2: Servir la aplicación usando NGINX
FROM nginx:alpine

# Copiar la build de Angular al servidor NGINX
COPY --from=build /app/dist/apps/backoffice-monorepo /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Comando por defecto para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
