let slideWrapper = document.querySelector(".slide-wrapper");
let slideContainer = slideWrapper.querySelector(".slide-container");
let slides = slideContainer.querySelectorAll("li");
let slideCount = slides.length;
let prevBtn = slideWrapper.querySelector("#prev");
let nextBtn = slideWrapper.querySelector("#next");

if (slideCount > 1) {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}

function moveSlide(num) {
  slideContainer.style.left = `${-num * 100}%`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);

  if (currentSlideIdx === slideCount - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  //처음이면 이전버튼이 사라지고 , 처음이 아니라면 다시 보이도록
  if (currentSlideIdx === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  //모든 슬라이드에서 active를 제거하고, 지금 보고 있는 슬라이드에 active를 추가
  for (let sl of slides) {
    sl.classList.remove("active");
  }
  slides[currentSlideIdx].classList.add("active");
}

moveSlide(0);

nextBtn.addEventListener("click", () => {
  if (currentSlideIdx < slideCount - 1) {
    moveSlide(currentSlideIdx + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlideIdx > 0) {
    moveSlide(currentSlideIdx - 1);
  }
});


