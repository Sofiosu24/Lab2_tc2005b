const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); // Le permite a la petición avanzar hacia el siguiente middleware
});

// Ruta de inicio
app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send('Bienvenido a nuestra tienda de ropa en línea.');
});

// Ruta de formulario de contacto
app.get('/contacto', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './contacto.html'), 'utf8');
    response.write(html);
});

app.post('/contacto', (request, response, next) => {
    const { nombre, email, mensaje } = request.body;
    const newData = `Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}\n`;
    fs.appendFile(path.resolve(__dirname, './contactos.txt'), newData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).send('Error interno del servidor.');
        } else {
            console.log('Datos guardados correctamente.');
            response.send('Datos recibidos y guardados correctamente.');
        }
    });
});

// Ruta de catálogo de productos
app.get('/catalogo', (req, res) => {
    // Consultar una base de datos o algún servicio para obtener los productos
    // Solo envía un mensaje simple
    res.send('Aquí se mostrarán nuestros productos pronto. ¡Vuelve pronto!');
});

// Rutas adicionales relacionadas con productos, por ejemplo:
const productosRouter = require('./routes/productosRouter');
app.use('/productos', productosRouter);

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('¡Página no encontrada!');
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}.`);
});
