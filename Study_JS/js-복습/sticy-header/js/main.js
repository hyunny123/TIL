let pageHeader = document.querySelector(".page-header");
let pageHeaderost = pageHeader.offsetTop; //pageHeader가 상단에 떨어진 거리 저장

window.addEventListener("scroll", () => {
  if (window.scrollY > pageHeaderost) {
    pageHeader.classList.add("sticky");
  } else {
    pageHeader.classList.remove("sticky");
  }
});
