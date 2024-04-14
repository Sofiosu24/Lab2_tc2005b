function averages(matriz) {
    let promArr = [];
    for (let fila of matriz) {
        let suma = fila.reduce((acum, val) => acum + val, 0);
        let promedio = suma / fila.length;
        promArr.push(promedio);
    }
    return promArr;
}

function create_matrix() {
    const filas = parseInt(prompt('Ingrese el número de filas de la matriz:'));
    const columnas = parseInt(prompt('Ingrese el número de columnas de la matriz:'));
    let matriz = [];
    for (let i = 0; i < filas; i++){
        let fila = [];
        for(let j = 0; j < columnas; j++){
            fila.push(parseFloat(prompt(`Ingrese el elemento (${i + 1}, ${j + 1}):`)));
        }
        matriz.push(fila);
    }

    const resulados = averages(matriz);
    const resHTML = document.getElementById('resultados');
    resHTML.innerHTML = '<p>Promedios de cada fila:</p>';
    resulados.forEach((promedio, index) => {
        resHTML.innerHTML += `<p>Fila ${index + 1}: ${promedio}</p>`;
    });
}