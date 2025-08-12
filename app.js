//Crea la lista de los nombres comenzando vacía.
let arrayNombres = [];

//Borra el nombre luego de ingresarlo.
function borrarTexto(){
    return document.getElementById("amigo").value = "";
}

//Agrega el nombre ingresado a la lista, en caso de que no haya nada escrito, se muestra una alerta.
function agregarAmigo() {
    let nombreElegido = document.getElementById("amigo").value; //botón añadir

    if(nombreElegido == "") {
        alert("Ingrese un nombre válido");
    } else {
        arrayNombres.push(nombreElegido);
        mostrarListaAmigos();
    }
    borrarTexto();
}

//Agrega los nombres en la lista bajo la caja de texto.
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";
    for(i = 0; i < arrayNombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = arrayNombres[i];
        lista.appendChild(li);
    }
}

//Sortea el número aleatorio y, en caso de que no haya ninguno escrito, muestra una alerta.
function sortearAmigo() {
    if (arrayNombres.length === 0) { //verifica que el array no esté vacío
        alert("No hay nombres para sortear.");
        return;
    }

    let generadorDeIndiceAleatorio = Math.floor(Math.random()*arrayNombres.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = arrayNombres[generadorDeIndiceAleatorio];
}

