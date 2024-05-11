// Set the date we're counting down to
var countDownDate = new Date("May 26, 2024 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the remaining time
  var distance = countDownDate - now;
    
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the countdown
  var countdownElement = document.getElementById("countdown");
  if (distance > 0) {
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    clearInterval(x);
    countdownElement.innerHTML = "EXPIRED";
    // Show cards and hide countdown
    document.getElementById("cards").style.display = "block";
    countdownElement.style.display = "none";
  }
}, 1000);

let currentSlide = 0;
const slides = document.querySelectorAll('.card');

// Hide all slides except the first one
function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Show the current slide
function showSlide() {
    hideAllSlides();
    slides[currentSlide].style.display = 'block';
}

// Show next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

// Automatically switch to the next slide every 2 seconds
setInterval(nextSlide, 2000);

// Show the initial slide
showSlide();
