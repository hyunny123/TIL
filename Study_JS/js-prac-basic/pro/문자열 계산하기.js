function solution(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
  return arr[0];
}


// 다른 답
function solution(my_string) {
    const calc = (a, b) => {
      return operator === "+" ? a + b : a - b;
    };
  
    let operator = "";
    return my_string.split(" ").reduce((acc, cur) => {
      if (!+cur) {
        operator = cur;
        return acc;
      }
      if (!operator) return acc + +cur;
      if (operator && !isNaN(+cur)) return calc(acc, +cur);
    }, 0);
  }
