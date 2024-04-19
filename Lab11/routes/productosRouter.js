const express = require('express');
const router = express.Router();

// Ruta para mostrar las promociones
router.get('/promociones', (req, res) => {
    // Simplemente enviamos un mensaje con las promociones
    res.send('¡Descubre nuestras promociones especiales!');
});

// Ruta para mostrar un producto específico (/1)
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    // Consultar una base de datos o algún servicio para obtener el ID del producto
    // Solo se manda un mensaje simple
    const producto = {
        Producto: 'Detalles del producto con ID 1',
        id: productId,
        nombre: "Camiseta básica",
        precio: "$20",
        descripcion: "Una camiseta cómoda y versátil para tu día a día."
    };
    res.send(producto);
});

module.exports = router;
