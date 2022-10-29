//대소문자 변경
function result(a) {
  let answer = "";
  for (let x of a) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(result("hAPPY dAY"));
