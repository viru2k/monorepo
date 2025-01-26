# Usa una imagen base de Node.js
FROM node:18.20.5

# Define el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia el package.json y package-lock.json
COPY ./apps/api-backoffice/package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente del backend
COPY ./apps/api-backoffice /src

# Construye la aplicación
RUN npm run build

# Expon el puerto en el que NestJS escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
