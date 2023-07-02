/*
header
로고
큰 로고 변수
작은 로고 변수

윈도우에서 스크롤할때 할일
만약 스크롤 거리가 0보다 클때는 shink 클래스를 포함하고 있지 않다면 
shrink를 더하고 큰 로고 보여주기
아니면 또 shink를 포함하고 있으면 작은 로고 보여줘

switchImg 함수를 만들어서 hide클래스를 추가하고 
시간마다 이미지가 바뀌고 hide 클래스가 사라지게

*/

let mainHeader = document.querySelector("#main-header");
let logo = document.querySelector("#logo");
let big = "images/logo-shrink.svg";
let small = "images/logo.svg";

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    if (!mainHeader.classList.contains("shrink")) {
      mainHeader.classList.add("shrink");
      switchImg(big);
    }
  } else {
    if (mainHeader.classList.contains("shrink")) {
      mainHeader.classList.remove("shrink");
      switchImg(small);
    }
  }
});

function switchImg(newImgPath) {
  logo.classList.add("hide");
  setTimeout(() => {
    logo.setAttribute("src", newImgPath);
    logo.classList.remove("hide");
  }, 300);
}
