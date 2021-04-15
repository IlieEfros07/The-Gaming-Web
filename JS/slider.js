var sliderIndex = 0;

showSlides();

setInterval(showSlides, 3000);
function showSlides() {
    var slides = document.getElementsByClassName('slide');

    for (var i =0 ;i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[sliderIndex].style.display = "block";
    sliderIndex++;
    
    
    if (sliderIndex >= slides.length) {
        sliderIndex = 0;
    }

}

