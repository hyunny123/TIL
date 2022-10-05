const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");

const path1 = document.querySelector(".path2");
const path2 = document.querySelector(".path3");
const path3 = document.querySelector(".path4");

const path1Length = path1.getTotalLength();
const path2Length = path2.getTotalLength();
const path3Length = path3.getTotalLength();

//path1 length를 getTotalLength 함수로 가져옴.
//이를 stroke-dasharray와 stroke-dashoffset으로 설정.
path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = calcDashoffset(
  window.innerHeight * 0.8,
  content1,
  path1Length
);

path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = calcDashoffset(
  window.innerHeight * 0.8,
  content2,
  path2Length
);

path3.style.strokeDasharray = path3Length;
path3.style.strokeDashoffset = calcDashoffset(
  window.innerHeight * 0.8,
  content3,
  path3Length
);

//ratio를 구하고 그로 dashoffset value를 반환시켜주는데
//value가 path 밑에서는 0이 아닌  -값으로 초과되버리고
//반대로 path 맨위에선 length 보다 더 큰값이 되버리기 때문에
//조건을 걸어줘 value가 0애서 length 사이값만 갖도록 해줌.

function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;
  return value < 0 ? 0 : value > length ? length : value;
}

//window에 scroll 함수 선언
//스크롤이 변할때마다 stroke-dashoffset값을 바꿔주기위한
//calcDashoffset 함수를 따로 뺴서 선언

function scrollHandler() {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length);
  path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length);
  path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length);
}
window.addEventListener("scroll", scrollHandler);
