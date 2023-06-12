let header = document.querySelector("header");
let mainMenu = document.querySelectorAll("nav >ul >li");
let headerHeight = header.offsetHeight;

mainMenu.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.preventDefault();
    //서브메뉴 길이
    let subMenuHeight = e.currentTarget.querySelector("ul").offsetHeight;
    console.log(subMenuHeight);

    let totalHeight = headerHeight + subMenuHeight + 30;

    header.style.height = `${totalHeight}px`;
  });

  item.addEventListener("mouseout", (e) => {
    e.preventDefault();
    header.style.height = `${headerHeight}px`;
  });
});
