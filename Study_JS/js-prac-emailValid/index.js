function validate() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "당신의 이메일 주소는 유효합니다.";
    text.style.color = "#4caf50";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "유효한 이메일 주소를 적어주세요!";
    text.style.color = "#f44336";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
  }
}
