let header = document.querySelector("header");
let subMenu = document.querySelectorAll("nav ul ul");
let mainMenu = document.querySelectorAll("nav > ul > li");

let headerHeight = header.offsetHeight;
let subMenuHeight = 0;

subMenu.forEach((item) => {
  if (item.offsetHeight > subMenuHeight) {
    subMenuHeight = item.offsetHeight;
  }
});
console.log(subMenuHeight);

let headerTotalHeight = `${header.offsetHeight + subMenuHeight}px`;

mainMenu.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    header.style.height = headerTotalHeight;
  });
  item.addEventListener("mouseout", (e) => {
    header.style.height = `${headerHeight}px`;
  });
});
