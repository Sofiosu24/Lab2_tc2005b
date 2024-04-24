const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

let datosContacto = [];

router.get('/contacto', (req, res) => {
    res.render('contacto', { datosContacto: datosContacto });
});

router.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    datosContacto.push({ nombre, email, mensaje });
    res.redirect('/contacto');
});

module.exports = router;
