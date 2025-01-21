// ESTO ES CODIGO QUE SE REPITE
// let titulo = document.querySelector('h1');
// let parrafo = document.querySelector('p');

// titulo.innerHTML = `Bienvenido al numero secreto`;
// parrafo.innerHTML = `Ingresa un numero del 1 al 10`;

let numeroSecreto = generarNumeroRandom();
let intentos = 1;
let numeroMaximo = 5;

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

    if(validacionDeEntrada(numeroDeUsuario)){
        return;
    }

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        asignarTextoElemento('p',`${numeroDeUsuario < numeroSecreto ? `El numero secreto es mayor a ${numeroDeUsuario}` : `El numero secreto es menor a ${numeroDeUsuario}`}`)
    }
    intentos++;
    dificultad(numeroMaximo);
    limpiarCampo();
    return;
}

function validacionDeEntrada(valorDeInput){
    if(isNaN(valorDeInput)){
        asignarTextoElemento('p','Debes ingresar un número válido');
        return true;
    }else{
        if(valorDeInput > 10){
            asignarTextoElemento('p',`Debes ingresar un número del 1 al 10`);
            limpiarCampo();
            return true;
        }else if(valorDeInput === 0){
            asignarTextoElemento('p',`Debes ingresar un número del 1 al 10`);
            limpiarCampo();
            return true;
        }else{
            return false;
        }
    }
}

document.getElementById('valorUsuario').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        verificarIntento();
    }
})

condicionesIniciales();

function limpiarCampo(){
    document.getElementById('valorUsuario').value = '';
    return;
}

function reiniciarJuego(){
    limpiarCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    condicionesIniciales();
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido al numero secreto');
    asignarTextoElemento('p','Ingresa un numero del 1 al 10');
    numeroSecreto = generarNumeroRandom();
    intentos = 1;
    return;
}

function dificultad(numeroMaximo) {
    if(intentos > numeroMaximo){
        alert(`fallaste ${intentos - 1} intentos, juega de nuevo`);
        reiniciarJuego();
        condicionesIniciales();
    }
}

