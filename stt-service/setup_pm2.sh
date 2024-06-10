#!/bin/bash

# Nombre del servicio en PM2
SERVICE_NAME="stt-service"

# Ruta al script de la aplicación
APP_SCRIPT="src/app.js"

# Función para verificar si PM2 está instalado
check_pm2_installed() {
    if ! command -v pm2 &> /dev/null
    then
        echo "PM2 no está instalado. Instalando PM2..."
        npm install -g pm2
    else
        echo "PM2 ya está instalado."
    fi
}

# Función para iniciar el servicio con PM2
start_service_with_pm2() {
    echo "Iniciando $SERVICE_NAME con PM2..."
    pm2 start $APP_SCRIPT --name $SERVICE_NAME

    # Guardar la configuración de PM2 para reinicios futuros
    pm2 save

    # Configurar PM2 para iniciar con el sistema
    pm2 startup

    echo "$SERVICE_NAME ha sido configurado para ejecutarse como un daemon."
}

# Función para detener y eliminar el servicio si ya está corriendo
cleanup_existing_service() {
    if pm2 list | grep -q $SERVICE_NAME; then
        echo "Deteniendo y eliminando el servicio existente $SERVICE_NAME en PM2..."
        pm2 delete $SERVICE_NAME
    fi
}

# Ejecutar las funciones
check_pm2_installed
cleanup_existing_service
start_service_with_pm2

echo "Configuración completa."
