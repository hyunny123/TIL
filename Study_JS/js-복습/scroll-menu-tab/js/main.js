document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelectorAll("#top_menu li a");
  let section = document.querySelectorAll("#contents > section");

  menu.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let targetId = e.target.getAttribute("href");
      let targetOST = document.querySelector(targetId).offsetTop;
      window.scrollTo({ left: 0, top: targetOST, behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    let scTop = window.scrollY;
    section.forEach((sec, idx) => {
      if (sec.offsetTop <= scTop) {
        for (let m of menu) {
          m.classList.remove("on");
        }
        menu[idx].classList.add("on");
      }
    });
  });
});
