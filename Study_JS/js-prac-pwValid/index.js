let pswrd = document.getElementById("pswrd");
let toggleBtn = document.getElementById("toggleBtn");

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  //소문자 유효성 체크
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }
  //대문자 유효성 체크
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  //숫자 유효성 체크
  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }
  //특수문자 유효성 체크
  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
  //길이 유효성 체크
  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

//클릭시 비밀번호 보여주기 다시 비밀번호로 바꾸기
toggleBtn.onclick = function () {
  if (pswrd.type === "password") {
    pswrd.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    pswrd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};
