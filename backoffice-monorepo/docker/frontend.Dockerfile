# Usa una imagen base de Node.js
FROM node:18.20.5

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente del frontend desde el monorepo
COPY ./apps/backoffice /app

# Expon el puerto en el que Angular sirve la app
EXPOSE 4200

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
