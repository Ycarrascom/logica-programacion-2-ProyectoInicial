let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';


//encapsulacion del evento que quiero que se ejecute
function intentoDeUuario() {
    alert('click desde el boton.');
}