let slideImgs = document.querySelectorAll("img");

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let dots = document.querySelectorAll(".dot");

var counter = 0;

next.addEventListener("click", slideNext);

function slideNext() {
  slideImgs[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImgs.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImgs[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

prev.addEventListener("click", slidePrev);

function slidePrev() {
  slideImgs[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImgs.length - 1;
  } else {
    counter--;
  }
  slideImgs[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

function autoSlide() {
  deletInterval = setInterval(timer, 1000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSlide();

//  마우스 사용시 자동 슬라이더 정지
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

//마우스 벗어났을때 다시 슬라이더 실행
container.addEventListener("mouseout", autoSlide);

// 활성 클래스 추가 및 제거
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

// function switchImage(currentImage) {
//   currentImage.classList.add("active");
//   var imageId = currentImage.getAttribute("attr");
//   if (imageId > counter) {
//     slideImgs[counter].style.animation = "next1 0.5s ease-in forwards";
//     counter = imageId;
//     slideImgs[counter].style.animation = "next2 0.5s ease-in forwards";
//   } else if (imageId == counter) {
//     return;
//   } else {
//     slideImgs[counter].style.animation = "prev1 0.5s ease-in forwards";
//     counter = imageId;
//     slideImgs[counter].style.animation = "prev2 0.5s ease-in forwards";
//   }
//   indicators();
// }
