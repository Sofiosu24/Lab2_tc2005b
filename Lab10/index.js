const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/":
            response.setHeader('Content-Type', 'text/plain');
            response.write("Bienvenido a la página de inicio.");
            response.end();
            break;
        case "/formulario":
            if (request.method === "GET") {
                response.setHeader('Content-Type', 'text/html');
                response.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Formulario de Ejemplo</title>
                    </head>
                    <body>
                        <h1>Formulario de Ejemplo</h1>
                        <form action="/formulario" method="post">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required><br>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required><br>
                            <button type="submit">Enviar</button>
                        </form>
                    </body>
                    </html>
                `);
                response.end();
            } else if (request.method === "POST") {
                let body = [];
                request
                    .on('data', chunk => {
                        body.push(chunk);
                    })
                    .on('end', () => {
                        body = Buffer.concat(body).toString();
                        fs.appendFile(path.resolve(__dirname, './datos.txt'), body + '\n', (err) => {
                            if (err) throw err;
                            console.log('Datos guardados correctamente.');
                        });
                        response.setHeader('Content-Type', 'text/plain');
                        response.write('Datos recibidos y guardados correctamente.');
                        response.end();
                    });
            }
            break;
        case "/test":
            response.setHeader('Content-Type', 'text/plain');
            response.write("Esta es una ruta de prueba.");
            response.end();
            break;
        default:
            response.statusCode = 404;
            response.end();
            break;
    }
});

server.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000.');
});
