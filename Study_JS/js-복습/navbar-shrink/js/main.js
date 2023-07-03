/*


*/

let mainHeader = document.querySelector("#main-header");
let logo = document.querySelector("#logo");
let big = "images/logo-shrink.svg";
let small = "images/logo.svg";
let excuted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    if (excuted == false) {
      mainHeader.classList.add("shrink");
      switchImg(big);
      excuted = true;
    }
  } else {
    if (excuted == true) {
      mainHeader.classList.remove("shrink");
      switchImg(small);
      excuted = false;
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
