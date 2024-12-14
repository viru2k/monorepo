# Usa una imagen base de Node.js
FROM node:18.20.5

# Define el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación desde el monorepo
COPY ./apps/api-backoffice /src

# Expon el puerto en el que NestJS escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
