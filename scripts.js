/* FUNCIONES Y VARIABLES PARA MODAL */

// Obtiene el modal
var modal = document.getElementById("myModal");
// Obtiene el <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];
var iframe = null;
// Cuando el usuario clickea el boton, abre el modal

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

function jugar(juego){

    modal.style.display = "block";
    var iframe = crearJuego(juego);
    var padre = document.getElementById("game_drop");
    document.getElementById("modal-content").appendChild(iframe);
}

function cerrar(){
    var iframe = document.getElementById("game_drop");
    var padre = iframe.parentNode;
    padre.removeChild(iframe);
}

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

/* FIN FUNCIONES Y VARIABLES PARA MODAL */

/* FUNCIONES Y VARIABLES PARA CARRUSEL  */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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
