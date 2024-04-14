function geneRandom() {
    return [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
}

function askQuest() {
    let nums = geneRandom();
    let resulado = nums[0] + nums[1];
    let resUsuario = prompt('¿Cuál es la suma de ' + nums[0] + '+' + nums[1] + '?')

    return [resulado, resUsuario];
}

//askQuest();

function checkQuest() {
    let i_tiempo = new Date();
    let preguntar = askQuest();
    let respuesta = document.getElementById("resultado");
    let f_tiempo = new Date();
    let r_tiempo = (f_tiempo - i_tiempo) / 1000; 

        if (parseInt(preguntar[1]) === preguntar[0]) {
        respuesta.innerHTML = '<p>Respuesta correcta. Tiempo de respuesta: ' + r_tiempo + ' segundos.</p>';
    }
    else {
        respuesta.innerHTML = '<p>Respuesta incorrecta. Tiempo de respuesta: ' + r_tiempo + ' segundos.</p>';
    }
}

checkQuest();