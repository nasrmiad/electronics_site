//var slides = document.getElementsByClassName("main_banner");
//slides[0].style.display = "block";

var slideIndex2 = 0;
showSlides3();
var i;

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("solar_slides");
  //var texts = document.getElementsByClassName("banner_text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	//texts[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  //texts[slideIndex-1].style.display = "block";
  setTimeout(showSlides3, 4000); // Change image every 2 seconds
}