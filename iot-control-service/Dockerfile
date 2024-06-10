# Usar la imagen base de Node.js
FROM node:14

# Crear el directorio de la aplicación en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# o si los archivos están en subdirectorios específicos
COPY ./src/*.js ./


# Comando para iniciar la aplicación
CMD ["node", "iot-control-service.js"]
