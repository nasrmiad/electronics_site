//var slides = document.getElementsByClassName("main_banner");
//slides[0].style.display = "block";

var slideIndex = 0;
showSlides2();
var i;

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("PCB_slides");
  //var texts = document.getElementsByClassName("banner_text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	//texts[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  //texts[slideIndex-1].style.display = "block";
  setTimeout(showSlides2, 4000); // Change image every 2 seconds
}