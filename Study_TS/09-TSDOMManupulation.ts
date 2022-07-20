let sub = document.querySelector("#title");
if (sub != null) {
  sub.innerHTML = "hello hyunny";
}

//html 조작시 narrowing 하는 방법
//instanceof 연산자

if (sub instanceof Element) {
  sub.innerHTML = "hello hyunny!!";
}

//as로 사기치기 : 무조건 as 뒤에 걸로 간주하기
let sub1 = document.querySelector("#title1") as Element;

//오브젝트에 붙이는 ?.
//1. 제목에 innerHTML있으면 출력
//2. 없으면 undefined(optional chaining)
if (sub1?.innerHTML != undefined) {
  sub1.innerHTML = "happy to meet you";
}

//config.json에서 strict 모드 주석처리 (왠만하면 쓰지마~!)

//<a></a>tag의 href속성내용을 바꿔보자.
let siteLink = document.querySelectorAll(".naver");
// if (siteLink instanceof HTMLAnchorElement) {
//   siteLink.href = "https://kakao.com";
// }

siteLink.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

//Element 타입에는
//HTMLAnchorElement 타입
//HTMLHeadingElelmet 타입
//HTMLButtonElement 타입

let buttonclick = document.querySelector("#button");
//버튼에 addEventListneer 가능하면 오케 아니면 undefined
buttonclick?.addEventListener("click", function () {
  console.log("클릭클릭!!");
});

let imgChange = document.querySelector("#image");
if (imgChange instanceof HTMLImageElement) {
  imgChange.src = "./img/js.png";
}
