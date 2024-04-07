function counter() {
    let entrada = document.getElementById('numEntrada').value
    let nums = entrada.split(',').map(Number);

    let contNegativo = 0;
    let contCero = 0;
    let contPositivo = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] < 0){
            contNegativo++;
        } else if (nums[i] === 0){
            contCero++;
        } else {contPositivo++;}
    }

    let contador = document.getElementById('contador')
    contador.innerHTML = "<p>Cantidad de números negativos: " + contNegativo + "</p>" +
                         "<p>Cantidad de 0's: " + contCero + "</p>" +
                         "<p>Cantidad de números positivos: " + contPositivo + "</p>";
}

