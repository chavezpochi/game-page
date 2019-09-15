/* FUNCIONES Y VARIABLES PARA MODAL */

// Obtiene el modal
var modal = document.getElementById("myModal");
// Obtiene el <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace click en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
  cerrar();
}

// Cuando el usuario hace click fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cerrar();
  }
}

/* FIN FUNCIONES Y VARIABLES PARA MODAL */

/* FUNCIONES PARA JUEGOS DE LA PAGINA MINIJUEGOS */

// Variable iframe null para minijuegos
var iframe = null;

// Funcion que permite agregar el iframe del juego al modal
function jugar(juego){

    modal.style.display = "block";
    var iframe = crearJuego(juego);
    var padre = document.getElementById("game_drop");
    document.getElementById("modal-content").appendChild(iframe);
}

// Funcion que elimina el juego del modal (para que no siga ejecutandose en segundo plano)
function cerrar(){
    var iframe = document.getElementById("game_drop");
    var padre = iframe.parentNode;
    padre.removeChild(iframe);
}

// Funcion que permite crear el iframe del juego
function crearJuego(juego){
    var iframe = document.createElement("iframe");
    iframe.setAttribute('id', 'game_drop');
    iframe.setAttribute('src', juego);
    iframe.setAttribute('scrolling', 'no');
    iframe.style.width = "50%";
    iframe.style.height = "50%";
    iframe.style.border = "0";
    iframe.style.overflow = "hidden";
    return iframe;
}

/* FIN FUNCIONES PARA JUEGOS DE LA PAGINA MINIJUEGOS */

/* FUNCIONES Y VARIABLES PARA CARRUSEL  */

// Variable que indica donde inicia el slide del carrusel
var slideIndex = 1;

// Funcion que muestra el slide
showSlides(slideIndex);

// Funcion que permite mover el slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funcion que indica el slide actual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Funcion que permite mostrar el slide de acuerdo al parametro
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/* FIN FUNCIONES Y VARIABLES PARA CARRUSEL */
