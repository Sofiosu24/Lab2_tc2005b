const precioProducto = {
    pantalon: {precio: 216, descuento: 0.20},
    camisa: {precio: 265, descuento: 0.12},
    vestido: {precio:513, descuento: 0.23}
};

const iva_ = 0.16;

const ingresaPantalon = document.getElementById("pantalon");
const ingresaCamisa = document.getElementById("camisa");
const ingresaVestido = document.getElementById("vestido");

const calcuSuboriginal = document.getElementById("sub_original");
const calcuSubtotal = document.getElementById("subtotal");
const calcurebaja = document.getElementById("rebaja")
const calcuIVA = document.getElementById("iva");
const calcuTotal = document.getElementById("total");

function actualizarTotal() {
    const contarPantalon = parseInt(ingresaPantalon.value);
    const contarCamisa = parseInt(ingresaCamisa.value);
    const contarVestido = parseInt(ingresaVestido.value);

    const sub_original = (contarPantalon * precioProducto.pantalon.precio) + 
                             (contarCamisa * precioProducto.camisa.precio) + 
                             (contarVestido * precioProducto.vestido.precio);

    const subtotal = (contarPantalon * (precioProducto.pantalon.precio * (1 - precioProducto.pantalon.descuento))) + 
                     (contarCamisa * (precioProducto.camisa.precio * (1 - precioProducto.camisa.descuento))) + 
                     (contarVestido * (precioProducto.vestido.precio * (1 - precioProducto.vestido.descuento)));

    const rebaja = (contarPantalon * (precioProducto.pantalon.precio * (precioProducto.pantalon.descuento))) + 
                   (contarCamisa * (precioProducto.camisa.precio * (precioProducto.camisa.descuento))) + 
                   (contarVestido * (precioProducto.vestido.precio * (precioProducto.vestido.descuento)));

    const iva = subtotal + iva_;

    const total = subtotal + iva;

    calcuSuboriginal.textContent = `Subtotal original: $${sub_original.toFixed(2)}`;
    calcuSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    calcurebaja.textContent = `Descuento: $${rebaja.toFixed(2)}`;
    calcuIVA.textContent = `IVA: $${iva.toFixed(2)}`;
    calcuTotal.textContent = `Total: $${total.toFixed(2)}`;    
}

ingresaPantalon.addEventListener('input', actualizarTotal);
ingresaCamisa.addEventListener('input', actualizarTotal);
ingresaVestido.addEventListener('input', actualizarTotal);