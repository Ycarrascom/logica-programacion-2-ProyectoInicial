/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}    

//encapsulacion del evento que quiero que se ejecute
function verificarIntentp() {
    let numeroDeUsuario = document.getElementById('valorUusuario').value;
    return;
    //alert('click desde el boton.');
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);// no es necesario mostrarlo en consola
    //return numeroSecreto;
    
}


asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');