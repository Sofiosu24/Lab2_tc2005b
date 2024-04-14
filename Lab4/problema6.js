class torresHanoi {
    constructor(numDiscos) {
        this.numDiscos = numDiscos;
        this.movimientos = [];
    }
    
    solve() {
        this.movimientos = [];
        this.moveDisc(this.numDiscos, 'A', 'C', 'B');
    }

    moveDisc(n, origen, destino, auxiliar) {
        if (n === 1) {
            this.movimientos.push(`Mover disco 1 de ${origen} a ${destino}`);
            return;
        }
        this.moveDisc(n - 1, origen, auxiliar, destino);
        this.movimientos.push(`Mover disco ${n} de ${origen} a ${destino}`);
        this.moveDisc(n - 1, auxiliar, destino, origen);
    }
}

function solveHanoi() {
    const numDiscos = parseInt(document.getElementById('num-discos').value);
    if (isNaN(numDiscos) || numDiscos <= 0) {
      document.getElementById('obtener').innerText = 'Por favor, ingresa un número válido de discos.';
      return;
    }
  
    const hanoi = new torresHanoi(numDiscos);
    hanoi.solve();
  
    const resultadoHTML = hanoi.movimientos.join('<br>');
    document.getElementById('obtener').innerHTML = resultadoHTML;
}