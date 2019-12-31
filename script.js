//var slides = document.getElementsByClassName("main_banner");
//slides[0].style.display = "block";

var slideIndex = 0;
showSlides();
var i;

function myFunction() {
	
	//var elmnt = document.body;
	var x = document.documentElement.scrollTop;
	var y = document.getElementsByClassName("small_icons");
	var z = document.getElementsByClassName("small_icons2");
	var a = document.getElementsByClassName("small_icons3");
	var s = document.getElementsByClassName("small_icons4");
	var d = document.getElementsByClassName("small_icons5");
	
	/*hiding and revealing the first row of info*/
	if(x > 400){ 
				setTimeout(function(){var y = document.getElementsByClassName("small_icons");y[0].style.display = "block";},200);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons");y[1].style.display = "block";},400);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons");y[2].style.display = "block";},600);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons");y[3].style.display = "block";},800);
		} 
	else if(x < 200) {
		
		for(i = 0; i < y.length; i++){
				y[i].style.display = "none";
			}	
		}
	
	/*hiding and revealing the second row of info*/
	if(x > 1100){ 
				setTimeout(function(){var y = document.getElementsByClassName("small_icons2");y[0].style.display = "block";},200);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons2");y[1].style.display = "block";},400);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons2");y[2].style.display = "block";},600);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons2");y[3].style.display = "block";},800);
		} 
	else if(x < 800) {
		
		for(i = 0; i < z.length; i++){
				z[i].style.display = "none";
			}	
		}
		
	/*hiding and revealing the third row of info*/
	if(x > 1600){ 
				setTimeout(function(){var y = document.getElementsByClassName("small_icons3");y[0].style.display = "block";},200);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons3");y[1].style.display = "block";},400);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons3");y[2].style.display = "block";},600);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons3");y[3].style.display = "block";},800);
		} 
	else if(x < 1500) {
		
		for(i = 0; i < a.length; i++){
				a[i].style.display = "none";
			}	
		}
		
	/*hiding and revealing the fourth row of info*/
	if(x > 2100){ 
				setTimeout(function(){var y = document.getElementsByClassName("small_icons4");y[0].style.display = "block";},200);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons4");y[1].style.display = "block";},400);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons4");y[2].style.display = "block";},600);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons4");y[3].style.display = "block";},800);
		} 
	else if(x < 2100) {
		
		for(i = 0; i < s.length; i++){
				s[i].style.display = "none";
			}	
		}
		
	/*hiding and revealing the fifth row of info*/
	if(x > 2700){ 
				setTimeout(function(){var y = document.getElementsByClassName("small_icons5");y[0].style.display = "block";},200);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons5");y[1].style.display = "block";},400);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons5");y[2].style.display = "block";},600);
				setTimeout(function(){var y = document.getElementsByClassName("small_icons5");y[3].style.display = "block";},800);
		} 
	else if(x < 2800) {
		
		for(i = 0; i < d.length; i++){
				d[i].style.display = "none";
			}	
		}
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("main_banner");
  var texts = document.getElementsByClassName("banner_text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	texts[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  texts[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}