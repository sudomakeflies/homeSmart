const vosk = require('vosk');
const fs = require('fs');
const mic = require('mic');
const { exec } = require('child_process');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MODEL_PATH = "path/to/model";  // Cambia esto a la ruta de tu modelo Vosk
const SAMPLE_RATE = 16000;
const KEYWORD = "Fenix";

if (!fs.existsSync(MODEL_PATH)) {
  console.error(`Modelo no encontrado en: ${MODEL_PATH}`);
  process.exit(1);
}

const model = new vosk.Model(MODEL_PATH);

const micInstance = mic({
  rate: SAMPLE_RATE,
  channels: '1',
  debug: false,
  exitOnSilence: 6
});

const micInputStream = micInstance.getAudioStream();
const recognizer = new vosk.Recognizer({ model: model, sampleRate: SAMPLE_RATE });

// Función para manejar la palabra clave
const handleKeyword = () => {
  console.log('Palabra clave detectada: Fenix');
  // Aquí puedes añadir la lógica para manejar la activación por palabra clave.
  // Por ejemplo, enviar una notificación o activar otro proceso.
  
};

micInputStream.on('data', (data) => {
  if (recognizer.acceptWaveform(data)) {
    const result = recognizer.result();
    if (result.text.includes(KEYWORD.toLowerCase())) {
      handleKeyword();
    }
  } else {
    console.log(recognizer.partialResult());
  }
});

micInputStream.on('error', (err) => {
  console.error('Error en el micrófono:', err);
});

micInstance.start();

// Endpoint para verificación
app.get('/status', (req, res) => {
  res.send('STT Service is running and listening for the keyword.');
});

app.listen(PORT, () => {
  console.log(`STT Service running on port ${PORT}`);
});
