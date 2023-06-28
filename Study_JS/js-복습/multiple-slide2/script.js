let mainSlideWrapper = document.querySelector(".slide-wrapper");
let mainSlideContainer = mainSlideWrapper.querySelector("ul");
let mainSlides = mainSlideContainer.querySelectorAll("li");
let mainSlideCount = mainSlides.length;
let mainSlidesPerView = 3;
let currentIdx = 0;
let mainSlideWidth = 200;
let mainSlideMargin = 30;
let prevBtn = mainSlideWrapper.querySelector(".prev");
let nextBtn = mainSlideWrapper.querySelector(".next");

mainSlides.forEach((slide, idx) => {
  slide.style.left = `${idx * (mainSlideWidth + mainSlideMargin)}px`;
});

//슬라이드 이동함수
function moveSlide(num) {
  mainSlideContainer.style.left =
    -num * (mainSlideWidth + mainSlideMargin) + "px";
  currentIdx = num;
  console.log(currentIdx);
}

//좌우 컨트롤 버튼

nextBtn.addEventListener("click", () => {
  if (currentIdx < mainSlideCount - mainSlidesPerView) {
    moveSlide(currentIdx + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
});
