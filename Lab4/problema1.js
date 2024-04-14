function createTable() {

    //Entrada para ingresar un número con promt
    let num = prompt('Ingresa un número: ', '')
    num = parseInt(num);

    //Veridicar que el dato que se ingreso sea mayor a 1
    if (isNaN(num) || num <= 0) {
        document.write("<p>Por favor ingrese un número válido mayor que cero.</p>");
        return;
    }

    document.write("<h2>Problema 1: Tabla de Cuadrados y Cubos hasta " + num + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (let i = 1; i <= num; i++) {
        let cuadrado = i * i;
        let cubo = i * i * i;
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }

    document.write("</table>");
}

createTable();