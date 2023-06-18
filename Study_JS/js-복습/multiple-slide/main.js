let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 200;
let slideMargin = 30;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

makeClone();

function makeClone() {
  for (var i = 0; i < slideCount; i++) {
    //a.cloneNode(),a.cloneNode(true)
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    //a.appendChild(b)
    slides.appendChild(cloneSlide);
  }
  //5-4-3-2-1
  for (var i = slideCount - 1; i >= 0; i--) {
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    //a.prepend(b)
    slides.prepend(cloneSlide);
  }
  //전체너비를 구해서 ul너비 지정하는 함수
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  var currentSlides = document.querySelectorAll(".slides li");
  var newSlideCount = currentSlides.length;

  var newWidth =
    (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  slides.style.width = newWidth;
}
//슬라이드가 중앙으로 이동
function setInitialPos() {
  var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  //slides {transform:translateX(-1000px);}
  slides.style.transform = "translateX(" + initialTranslateValue + "px)";
}

//이전다음버튼
nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
}
