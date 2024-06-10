# Dockerfile para iot-control-service

# Usar una imagen base de Node.js
FROM node:16

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .
COPY ./src/*.js ./

# Exponer el puerto (si es necesario para tu servicio)
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["node", "src/main.js"]  # Asegúrate de que 'main.js' sea el archivo principal de tu aplicación
