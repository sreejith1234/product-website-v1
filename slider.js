document.addEventListener(
  "DOMContentLoaded",
  function () {
    let slide = document.querySelectorAll(".licuaslide");
    console.log(slide);
    let point = document.querySelectorAll(".point");
    let nextSlide = document.getElementById("nextButton");
    let previousSlide = document.getElementById("previousButton");
    let activeSlide = 0;
    let slideInterval = setInterval(autoSlide, 5000);
    function autoSlide() {
      slide[activeSlide].className = "licuaslide";
      point[activeSlide].className = "point";
      activeSlide = (activeSlide + 1) % slide.length;
      slide[activeSlide].className = "licuaslide active2";
      point[activeSlide].className = "point active";
      /*console.log("slide " + activeSlide);*/
    }
    for (let i = 0; i < point.length; i++) {
      point[i].addEventListener("click", function () {
        for (let k = 0; k < point.length; k++) {
          point[k].className = "point";
          slide[k].className = "licuaslide";
        }
        this.className = "point active";
        slide[i].className = "licuaslide active2";
        clearInterval(slideInterval);
      });
    }
    nextSlide.addEventListener("click", clickNextSlide);
    previousSlide.addEventListener("click", clickPreviousSlide);
    function clickNextSlide() {
      goToSlide(activeSlide + 1);
    }
    function clickPreviousSlide() {
      goToSlide(activeSlide - 1);
    }
    function goToSlide(n) {
      slide[activeSlide].className = "licuaslide";
      point[activeSlide].className = "point";
      activeSlide = (n + slide.length) % slide.length;
      slide[activeSlide].className = "licuaslide active2";
      point[activeSlide].className = "point active";
      clearInterval(slideInterval);
    }
  },
  false
);
