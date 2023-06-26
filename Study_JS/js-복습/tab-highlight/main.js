/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

let highlight = document.querySelector(".highlight");
let tabMenu = document.querySelectorAll(".tab-menu li");
let tabContent = document.querySelectorAll("#tab-content > div");

tabMenu.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let targetLeft = e.target.offsetLeft;
    let targetWidth = e.target.offsetWidth;
    highlight.style.left = `${targetLeft}px`;
    highlight.style.width =`${targetWidth}px`;
   
    for(let tc of tabContent){
        tc.style.display ="none";

    }
    tabContent[idx].style.display = "block";
  });
});
