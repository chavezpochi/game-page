/* FUNCIONES Y VARIABLES PARA MODAL */

// Obtiene el modal
var modal = document.getElementById("myModal");
// Obtiene el boton que abre el modal
var btn = document.getElementById("myBtn");
// Obtiene el <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];
// Cuando el usuario clickea el boton, abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace click en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace click fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
