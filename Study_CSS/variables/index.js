// const title = document.querySelector("#title");

// const CLICKED = "clicked";

// function clickHandler() {
//   const currentClass = title.className;
//   console.log(currentClass);
//   if (currentClass !== CLICKED) {
//     title.className = CLICKED;
//   } else {
//     title.className = "";
//   }
// }

// function init() {
//   title.addEventListener("click", clickHandler);
// }

// init();

// h1을 클릭시 class가 "btn"->"click"->""의 상태로 바뀜
//문제발생: 기존의 클래스가 사라진다.
//replace 문제를 해결하기위해 classList 사용.

// const title = document.querySelector("#title");

// const CLICKED = "clicked";

// function clickHandler() {
//   const hasClass = title.classList.contains(CLICKED);
//   console.log(hasClass);
//   if (!hasClass) {
//     title.classList.add(CLICKED);
//   } else {
//     title.classList.remove(CLICKED);
//   }
// }

// function init() {
//   title.addEventListener("click", clickHandler);
// }

// init();

//더 간단히 toggle사용
// toggle은 클래스의 유무를 체크해서 없으면 add, 있으면 remove

const title = document.querySelector("#title");

const CLICKED = "clicked";

function clickHandler() {
  title.classList.toggle(CLICKED);
}

function init() {
  title.addEventListener("click", clickHandler);
}

init();
