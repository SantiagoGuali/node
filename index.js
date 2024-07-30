// importar librerias 
const express = require('express');
const cors = require('cors'); // Importar el paquete cors
const knex = require('./db');
const routes = require('./routes'); // llamando rutas

const app = express(); // Creamos una nueva instancia
const port = 3001;     // puerto de salida

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// También puedes configurar CORS para permitir sólo desde un origen específico
// app.use(cors({
//   origin: 'http://127.0.0.1'
// }));

app.use(express.json());   // Configura tipo de dato JSON

app.use('/api', routes);  // Configura la URL base y rutas

app.listen(port, () => {           // Ejecuta el servidor en el puerto 3000
    console.log(`Servidor corriendo en el puerto ${port}`);
});
