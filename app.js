/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}    

//encapsulacion del evento que quiero que se ejecute
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log(typeof(numeroDeUsuario))
   // console.log(numeroDeUsuario);
   // console.log(numeroDeUsuario === numeroSecreto);//booleano de forma implicita
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, has adivinado el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{ 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor, intenta de nuevo!');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor, intenta de nuevo!');
        }
        intentos++
        limpiarCaja();
    }
    return;
    //alert('click desde el boton.');
}

function limpiarCaja() {
   // let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = ''; 
   document.querySelector('#valorUsuario').value = '';
}    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listNumerosSorteados);
    //si el numero genarado ya esta incluido en la lista
    if (listNumerosSorteados.includes(numeroGenerado)) {
        //llamamos a la funcion de nuevo
        return generarNumeroSecreto();
    } else {
        listNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    //return numeroSecreto;
    
}

function reiniciarJuego() {
//limpiarCaja();
    limpiarCaja();

//indicar mensaje de intervalo de numeros
   condicionesIniciales();
//generar el numero aleatorio lo volvemos a invocar desde la variable
//deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
//inicializar los intentos
  
}    

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;

}
condicionesIniciales();

for (let i = 0; i < 10; i++) {
    let numero = generarNumeroSecreto();
    while (numerosSorteados.includes(numero)) {
        numero = generarNumeroSecreto();
    }
    numerosSorteados.push(numero);
}