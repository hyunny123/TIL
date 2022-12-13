//엄격모드
//"use strict";

// console.log(this);

//함수안의 this
// function main() {
//   console.log(this);
// }

// main();

//객체의 메서드 함수안의 this
// const object = {
//   name: "pepper",
//   main: function () {
//     console.log(this);
//   },
// };

// object.main();

// const main2 = object.main;
// main2();

//객체 method this
// function main() {
//   console.log(this);
// }

// const object = {
//   name: "pepper",
//   smallObject: {
//     name: "hi",
//     main,
//   },
// };

// object.smallObject.main();

//바인딩
//바인드라는 함수를 어떻게 상관없이 this 값을 넣어준 객체로 고정시킬수 있다.
//계속 새로운 object를 만들어 mainBind함수를 넣고 object.mainBind()를 호출해도
//똑같이 hi가 출력된다.
// function main() {
//   console.log(this);
// }
// const mainBind = main.bind({ name: "hi" });
// mainBind();

// const object = {
//   name: "brandy",
//   color: function () {
//     console.log(this);
//   }.bind({ name: "blonde" }),
// };

// object.color();

const button = document.getElementById("btn");
button.addEventListener("click", function (e) {
  console.log(e.target === this);
});
