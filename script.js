var imagenes = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png"
];

var indiceImagen = 0;
var intervalo;

function ebullicion1() {
    var imagenContainer2 = document.getElementById('imagenContainer');
    var imagenMostrada2 = document.getElementById('imagenMostrada');

    // Cambia la fuente de la imagen al hacer clic en el botón
    imagenMostrada2.src = "image6.png"; // Reemplaza con la ruta real de tu imagen

    // Cambia el estilo de display para mostrar la imagen
    imagenContainer2.style.display = 'block';
}

function refri() {
    var imagenContainer3 = document.getElementById('imagenContainer');
    var imagenMostrada3 = document.getElementById('imagenMostrada');

    // Cambia la fuente de la imagen al hacer clic en el botón
    imagenMostrada3.src = "image7.png"; // Reemplaza con la ruta real de tu imagen

    // Cambia el estilo de display para mostrar la imagen
    imagenContainer3.style.display = 'block';
}

function destil() {
    var imagenContainer4 = document.getElementById('imagenContainer');
    var imagenMostrada4 = document.getElementById('imagenMostrada');

    // Cambia la fuente de la imagen al hacer clic en el botón
    imagenMostrada4.src = "image8.png"; // Reemplaza con la ruta real de tu imagen

    // Cambia el estilo de display para mostrar la imagen
    imagenContainer4.style.display = 'block';
}

function mate() {
    var imagenContainer5 = document.getElementById('imagenContainer3');
    var imagenMostrada5 = document.getElementById('imagenMostrada3');

    // Cambia la fuente de la imagen al hacer clic en el botón
    imagenMostrada4.src = "image5.png"; // Reemplaza con la ruta real de tu imagen

    // Cambia el estilo de display para mostrar la imagen
    imagenContainer4.style.display = 'block';
}

function iniciarSecuencia() {
    var imagenContainer = document.getElementById('imagenContainer');
    var imagenMostrada = document.getElementById('imagenMostrada');

    // Muestra la primera imagen
    imagenMostrada.src = imagenes[0];
    imagenContainer.style.display = 'block';

    // Inicia la secuencia automáticamente después de 1 segundo
    setTimeout(function() {
        intervalo = setInterval(mostrarSiguienteImagen, 500); // Cambia la imagen cada medio segundo
    }, 200); // Espera 1 segundo antes de iniciar la secuencia
}


function mostrarSiguienteImagen() {
    var imagenMostrada = document.getElementById('imagenMostrada');

    // Cambia la fuente de la imagen al siguiente elemento en el array
    imagenMostrada.src = imagenes[indiceImagen];

    // Incrementa el índice para mostrar la siguiente imagen en el siguiente intervalo
    indiceImagen = (indiceImagen + 1) % imagenes.length;

    // Detiene la secuencia después de mostrar la última imagen
    if (indiceImagen === 0) {
        clearInterval(intervalo);
    }
}
