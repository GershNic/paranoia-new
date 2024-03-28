var slides = document.getElementsByClassName("slide");

function changeSlide(slideNumber, displayType = "block") {
    if(slideNumber > countOfSlides) return;

    let slideBefore = slides[slideNumber - 1];
    let slideNew = slides[slideNumber];

    slideBefore.style.display = "none";
    slideNew.style.display = displayType;
}

let countOfSlides = 5; // 6
let currentSlide = 0;

// Slide change events

let startButton = document.getElementById("start-button");
let blinkSlide = document.querySelector(".paranoia_slide");

startButton.addEventListener("click", function() {
  let slideColor = blinkSlide.style.backgroundColor;

  if(slideColor != "white") {
      blinkSlide.style.backgroundColor = "white";
      return;
  }

  blinkSlide.style.backgroundColor = "black";
});

function changeSlideBtn() {
    currentSlide += 1;

    if(currentSlide == 4) {
        changeSlide(currentSlide);
    }

    changeSlide(currentSlide, "grid");
}



const texts = document.querySelectorAll('.move_text');

texts.forEach(element => {
    element.addEventListener("mouseup", function(e) {
        element.style.animationPlayState = "paused";
    })
});

const figures = document.querySelectorAll('.figure');
var moving = false;


figures.forEach(element => {
    element.addEventListener("mousedown", initialClick, false);
});


function move(e){

    var newX = e.clientX - 10;
    var newY = e.clientY - 10;
  
    image.style.left = newX + "px";
    image.style.top = newY + "px";
  
    
  }
  
  function initialClick(e) {
  
    if(moving){
      document.removeEventListener("mousemove", move);
      moving = !moving;
      return;
    }
    
    moving = !moving;
    image = this;
  
    document.addEventListener("mousemove", move, false);
  
  }

  document.addEventListener("touchstart", function (e) {
    var mouseEvent = new MouseEvent("mousedown");
    document.dispatchEvent(mouseEvent);
  }, false);
  
  document.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    document.dispatchEvent(mouseEvent);
  }, false);