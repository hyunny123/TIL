let slideWrapper = document.querySelector(".slide-wrapper");
let slideContainer = slideWrapper.querySelector(".slide-container");
let slides = slideContainer.querySelectorAll("li");
let slideCount = slides.length;
let currentSlideIdx = 0;
let pager = slideWrapper.querySelector(".pager");
let timer;
let pagerHTML = "";
let prevBtn = slideWrapper.querySelector("#prev");
let nextBtn = slideWrapper.querySelector("#next");

if (slideCount > 1) {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    pagerHTML += `<a href="">${index}</a>`;
  });
}
pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll("a");

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

  //모든 페이저에서 active를 제거하고, 현재 슬라이드 번호의 pager에 active 추가
  for (let pb of pagerBtn) {
    pb.classList.remove("active");
  }
  pagerBtn[currentSlideIdx].classList.add("active");
}

moveSlide(0);

//버튼 클릭시 슬라이드 무브
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

//페이저로 슬라이드 이동
/*
페이저 버튼을 클릭하면
링크의 기본 속성 막기
moveSlide에 클릭한 그 요소의 인덱스 번호를 넘긴다.
*/

pagerBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    moveSlide(idx);
  });
});

//자동 슬라이드
function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 3000);
}

autoSlide();
//마우스가 slideWrapper에 over 하거나 out했을시 자동슬라이드 멈추기

slideWrapper.addEventListener("mouseover", () => {
  clearInterval(timer);
});

slideWrapper.addEventListener("mouseout", () => {
  autoSlide();
});
