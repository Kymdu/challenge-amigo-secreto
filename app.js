let amigos = [];
let listarAmigos = document.getElementById('listaAmigos');
let inputNombre = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
let numeroMaximo = 0;

function limpiarCaja(){
    inputNombre.value = '';
    inputNombre.focus();
}
function limpiarLista(){
    amigos = [];
    listarAmigos.innerHTML = "";
}
function listaDeAmigos(){
    listarAmigos.innerHTML = "";
    amigos.forEach((elemento) => {
        listarAmigos.innerHTML += `<p>${elemento}</p>`;
    });
}
function agregarAmigo(){
    let nombre = inputNombre.value;
    resultado.innerHTML = '';
    let filtroLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;    
    if ( amigos.includes(nombre) ){
        alert("nombre repetido, ingrese otro");
    }
    else if( filtroLetras.test(nombre) && (nombre.trim() !== '') ){
        amigos.push(nombre.toLowerCase());
        document.getElementById('sorteo').removeAttribute('disabled');
    } 
    else{
        alert("Ingresa un nombre válido!");
    }
    listaDeAmigos();
    limpiarCaja();
}
function sortearAmigo(){
    numeroMaximo = amigos.length;
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo);
    if( numeroMaximo < 1 ){
        alert("Ingresa nombres a la lista");
        document.getElementById('sorteo').setAttribute('disabled', true);
    }
    else{
    let amigoElegido = amigos[numeroAleatorio];
    limpiarLista();
    resultado.innerHTML= `El amigo elegido es ${amigoElegido}`;
    }
}