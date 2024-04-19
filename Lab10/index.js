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
                const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
                response.write(html);
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
