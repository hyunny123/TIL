//Happy ->yppah
//대소문자 구분 하지 않는다.
//제일앞과 끝이 같고, 한글자씩 비교!
//2개씩 짝지어 비교 length/2로 범위 정해 반복!

//문자역을반대로 뒤집어서 문자열 비교!

//방법 1
//대소문자 통일
//for문으로 문자열돈다.
//앞과 뒤 짝지어서 확인하기 위해 length/2 횟수
//맨앞과 맨뒷글자부터 비교해서 같으면 Correct 다르면 UnCorrect

// function solution(n) {
//   let answer = "Correct!";
//   n = n.toLowerCase();
//   let alen = n.length;
//   for (let i = 0; i < Math.floor(alen / 2); i++) {
//     if (n[i] != n[alen - i - 1]) return "UnCorrect!";
//   }
//   return answer;
// }

//방법 2
//대소문자 통일
//문자열을 하나씩 떼서 배열로 만들고, reverse로 뒤집기 그리고 join으로 문자열만들기

function solution(n) {
  let answer = "Correct";
  n = n.toLowerCase();
  if (n.split("").reverse("").join("") !== n) return "UnCorrect!";
  return answer;
}

let n = "NooN";
console.log(solution(n));
