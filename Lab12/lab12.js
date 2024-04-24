const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Laboratorio 12: HTML dinámico");
    response.end(); 
});

app.get('/test_ejs', (request, response, next) => {
    response.render('lab12'); 
});

app.get('/novelas_ejs', (request, response, next) => {
    let novela = []
    novela.push("La Seleccion");
    novela.push("La Corona Roja");
    novela.push("Maravilloso Desastre");
    novela.push("Firelight");
    novela.push("Maldito Romeo");

    response.render('lab12_1',{
        novela: novela
    }); 
});

const contactoRouter = require('./routes/contacto');
app.use('/', contactoRouter);

const acercaRouter = require('./routes/acerca');
app.use('/', acercaRouter);

app.use((req, res, next) => {
    res.status(404).send('¡Página no encontrada!');
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);