# Usa una imagen base de Node.js
FROM --platform=linux/amd64 node:18.20.5

# Define el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./


# Actualiza npm a la última versión estable recomendada
RUN npm install -g npm@10.9.2

# Limpia el caché de npm para evitar posibles conflictos
RUN npm cache clean --force

# Instala las dependencias
RUN npm install --ignore-scripts

# Copia el código fuente de la aplicación desde el monorepo
COPY ./apps/api-backoffice /src

# Expon el puerto en el que NestJS escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]




