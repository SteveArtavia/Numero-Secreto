// ESTO ES CODIGO QUE SE REPITE
// let titulo = document.querySelector('h1');
// let parrafo = document.querySelector('p');

// titulo.innerHTML = `Bienvenido al numero secreto`;
// parrafo.innerHTML = `Ingresa un numero del 1 al 10`;

let numeroSecreto = generarNumeroRandom();
let intentos = 1;

function generarNumeroRandom(){
    return Math.floor(Math.random() * 10 + 1);
}

// ESTA FUNCION AUTOMATIZA LOS CODIGOS QUE SE ESTABAN REPITIENDO
const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

const verificarIntento = () => {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        asignarTextoElemento('p',`${numeroDeUsuario < numeroSecreto ? 'es mayor' : 'es menor'}`)
    }
    intentos++;
    limpiarCampo();
    return;
}

mensajesIniciales();

function limpiarCampo(){
    document.getElementById('valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    condicionesIniciales();
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido al numero secreto');
    asignarTextoElemento('p','Ingresa un numero del 1 al 10');
    numeroSecreto = generarNumeroRandom();
    intentos = 1;
}