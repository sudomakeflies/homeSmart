const { Model } = require('vosk');
const fs = require('fs');
const { spawn } = require('child_process');

// Configuración del modelo de reconocimiento de voz
const model = new Model('static/vosk'); // Reemplaza 'path_to_model_directory' con la ruta al directorio del modelo

// Palabra clave para activar el reconocimiento de voz
const palabraClave = 'hardy'; // Puedes cambiar 'jarvis' por cualquier nombre cool que desees

// Función para iniciar el reconocimiento de voz
function iniciarReconocimiento() {
    // Iniciar el proceso de escucha continua
    const procesoEscucha = spawn('node', ['escucha.js']); // Escucha.js es un script separado que escucha el micrófono en segundo plano

    // Manejar la salida del proceso de escucha
    procesoEscucha.stdout.on('data', (data) => {
        // Verificar si la palabra clave se detecta en la salida
        if (data.toString().includes(palabraClave)) {
            console.log(`Palabra clave "${palabraClave}" detectada. Activando reconocimiento de voz.`);
            reconocerVoz(); // Llamar a la función para reconocer voz
        }
    });

    // Manejar errores del proceso de escucha
    procesoEscucha.stderr.on('data', (data) => {
        console.error(`Error en el proceso de escucha: ${data}`);
    });
}

// Función para reconocer voz
function reconocerVoz() {
    // Implementa la lógica de reconocimiento de voz aquí
    console.log('Reconociendo voz...');
}

// Iniciar el reconocimiento de voz
iniciarReconocimiento();
