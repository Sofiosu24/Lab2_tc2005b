function reverse(numero) {
    let digitos = String(numero).split('');
    let numInvertido = digitos.reverse(). join('');
    
    return parseInt(numInvertido);
}

function calcuReverse() {
    let numero = document.getElementById("numero").value;
    if(!isNaN(numero)) {
        let numInverso = reverse(parseInt(numero));
        document.getElementById('invertir').innerText = "El inverso de " + numero + " es: " + numInverso;
    } else {
        document.getElementById('invertir').innerText = "Por favor, ingrese un número válido.";
    }
}