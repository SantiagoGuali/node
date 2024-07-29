const express = require('express');
const knex = require('./db');
const routes = require('./routes'); //llamando rutas

const app = express(); //nueva instancia
const port = 3001;     //puerto de salida

app.use(express.json());   //configura tipo de dato json

//servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

//URL base y rutas 
app.use('/api', routes);

//404
app.use((req, res, next) => {
    res.status(404).send('page not found');
});

//errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(port, () => { //API por el puerto 3001
    console.log(`Servidor corriendo en el puerto ${port}`);
});