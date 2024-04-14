const passwordInput = document.getElementById('inputPassword');
const passwordConfirmar = document.getElementById('confirmaPassword');
const seguraPassword = document.getElementById('passwordSegura');
const mostrarPassword = document.getElementById('mostrar');
const passwordError = document.getElementById('errorPassword')
const passwordForma = document.getElementById('formaPassword');
const passwordLabel = document.getElementById('passwordLabel');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const segura = calcuPassword(password);
    actualizarPassword(segura);
});

mostrarPassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    mostrarPassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

passwordForma.addEventListener('submit', (evento) => {
    const password = passwordInput.value;
    const confPassword = passwordConfirmar.value;

    if(password !== confPassword) {
        evento.preventDefault();
        passwordError.textContent = "El Password no coincide. Intentalo de nuevo";
    }
});

/*Cambia el estilo de las letras de alguna parte del documento con eventos diferentes a onClick.

Cuando el campo de contraseña obtiene el foco, el color del texto del título "Password" cambiará a azul. 
Cuando el campo de contraseña pierde el foco, el color volverá a su valor original.  */
passwordInput.addEventListener('focus', () => {
    passwordLabel.classList.add('focused-label');
    seguraPassword.textContent = "Usa una combinación de letras mayúsculas y minúsculas, números y caracteres especiales (!@#$%^&*()).";
});

passwordInput.addEventListener('blur', () => {
    passwordLabel.classList.remove('focused-label');
    seguraPassword.textContent = ""; 
});

function calcuPassword(password) {
    let segura = 0;

    if (password.length >= 8) {
        segura += 1;
    }

    
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        segura += 1;
    }

    if (password.match(/[0-9]/)) {
        segura += 1;
    }

    if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        segura += 1;
    }

    return segura;
}

function actualizarPassword(segura) {
    let mensaje = '';
    let nomClase = '';

    if(segura === 0) {
        mensaje = 'Débil';
        nomClase = 'seguridad-debil'; 
    } else if(segura === 1 || segura === 2) {
        mensaje = 'Medio';
        nomClase = 'seguridad-media'; 
    } else {
        mensaje = "Alto"
        nomClase = 'seguridad-alta';
    }

    seguraPassword.textContent = `Segura: ${mensaje}`;
    seguraPassword.className = nomClase;
}