HomeSmart

Descripción
HomeSmart es una solución integral para la gestión de seguridad en el hogar y la automatización de dispositivos inteligentes. Diseñada para ser una plataforma abierta y modular, permite a los usuarios integrar fácilmente cámaras de seguridad, enchufes inteligentes, sensores y otros dispositivos IoT. La aplicación se ejecuta en una laptop con Windows 11 y proporciona una interfaz de orquestación que permite la configuración y el control de los servicios de seguridad.

Funcionalidades
Reconocimiento de Voz: Utiliza la biblioteca vosk para el reconocimiento de comandos de voz que permiten activar protocolos de emergencia.
Notificaciones de Emergencia: Envía mensajes de texto SMS y notificaciones de WhatsApp a contactos predefinidos y servicios de emergencia.
Grabación y Almacenamiento: Graba audio desde el micrófono y almacena las grabaciones de forma segura.
Control de Dispositivos IoT: Gestiona enchufes inteligentes y otros dispositivos IoT para la automatización del hogar.
Monitoreo de la Red: Supervisa la conexión a Internet y gestiona la conectividad en caso de interrupciones.
Escalabilidad: Diseñado para soportar la adición de más cámaras y dispositivos IoT en el futuro.
Modelo de Lenguaje Mini: Preparado para la integración futura de un modelo de lenguaje pequeño para mejorar la funcionalidad y la interacción.
Instalación
Prerrequisitos
Laptop con Windows 11.
Docker y Docker Compose instalados.
Node.js y npm instalados.
Pasos de Instalación
Clona el repositorio del proyecto:

bash
Copiar código
git clone https://github.com/tu_usuario/homeSmart.git
cd homeSmart
Configura los servicios: Ejecuta el script de configuración para preparar el entorno de desarrollo.

bash
Copiar código
./_setup_smartHome.sh
Instala las dependencias de los servicios:

bash
Copiar código
cd stt-service
npm install
cd ../orchestration-service
npm install
cd ../iot-control-service
npm install
cd ../user-management-service
npm install
cd ../recording-service
npm install
cd ../notification-service
npm install
cd ../network-monitor
npm install
cd ..
Inicia los servicios con Docker Compose:

bash
Copiar código
docker-compose up
Accede a la aplicación: La aplicación estará disponible en http://localhost:3000 (o el puerto configurado en docker-compose.yml).

Uso
Configuración Inicial: Una vez que la aplicación esté en funcionamiento, accede a la interfaz de usuario en tu navegador para realizar la configuración inicial.
Comandos de Voz: Utiliza comandos de voz para activar diferentes funciones de la aplicación, como iniciar la grabación o enviar una alerta de emergencia.
Monitoreo: Supervisa el estado de tus dispositivos IoT y la red desde la interfaz de usuario.
Automatización: Configura reglas de automatización para controlar tus dispositivos IoT basándote en eventos específicos.
Contribuciones
¡Contribuciones son bienvenidas! Si deseas colaborar, sigue estos pasos:

Fork el repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y comitéalos (git commit -m 'Agregar nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Por favor, asegúrate de que tus contribuciones sigan las normas de contribución del proyecto.

Requerimientos
Laptop con:
Windows 11
8 GB de RAM
Intel Core i3 o superior
SSD de 256 GB o superior
Conexión a Internet (opcional para algunas funciones).
Dependencias del Proyecto
Docker y Docker Compose para la gestión de contenedores.
Node.js y npm para el entorno de desarrollo de los servicios.
vosk para el reconocimiento de voz.
Twilio API para el envío de SMS.
WhatsApp API para el envío de mensajes.
MQTT para la gestión de dispositivos IoT.
ffmpeg para la grabación de audio.
Licencia
Este proyecto está licenciado bajo la Licencia Pública General de GNU v3.0 - consulta el archivo LICENSE para más detalles.

