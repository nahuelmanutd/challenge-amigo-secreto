let arrayNombres = [];

function asignarTextoElemento(elementoId,texto) {
    let elementoHTML = document.getElementById(elementoId); //tiene que tener id escrita con comillas

    elementoHTML.innerHTML = texto;
    return;
}

function borrarTexto(){
    return document.getElementById("amigo").value = "";
}

function agregarAmigo() {
    let nombreElegido = document.getElementById("amigo").value; //botón añadir

    if(nombreElegido == "") {
        alert("Ingrese un nombre válido"); //si no se introduce texto
    } else {
        arrayNombres.push(nombreElegido); //agrega el nombre elegido al array
        mostrarListaAmigos();
    }
    borrarTexto();
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""; //limpia la lista antes de agregar
    for(i = 0; i < arrayNombres.length; i++) {
        let li = document.createElement("li"); //crea el elemento <li> en HTML
        li.textContent = arrayNombres[i]; //el contenido de la lista actual va a cambiar a medida que i vaya aumentando
        lista.appendChild(li); //esto asocia <ul> a <li>
    }
}

function sortearAmigo() {
    if (arrayNombres.length === 0) { //verifica que el array no esté vacío
        alert("No hay nombres para sortear.");
        return;
    }

    let generadorDeIndiceAleatorio = Math.floor(Math.random()*arrayNombres.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = arrayNombres[generadorDeIndiceAleatorio]; //sortea el número
}
