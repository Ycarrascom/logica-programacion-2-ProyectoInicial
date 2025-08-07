/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;

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
    return Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);// no es necesario mostrarlo en consola
    //return numeroSecreto;
    
}


asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');