// document.addEventListener("DOMContentLoaded", function () {
//   let app = document.getElementById("todo");
//   let items = document.getElementsByClassName("item");

//   //각 아이템에 이벤트 리스너 등록
//   for (let item of items) {
//     item.addEventListener("click", function () {
//       alert("당신이 누른 할일 : " + item.innerHTML);
//     });
//   }
// });

//이벤트 위임
document.addEventListener("DOMContentLoaded", function () {
  let app = document.getElementById("todo");

  //리스트 아이템의 전체 영역에 이벤트 리스너 등록
  app.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
      let item = e.target;
      alert("당신이 누른 할일 : " + item.innerHTML);
    }
  });
});

//루프에서 클로저 이용
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (i_local) {
      console.log("당신이 선택한 숫자는 : " + i_local);
    })(i),
    3000
  );
}
