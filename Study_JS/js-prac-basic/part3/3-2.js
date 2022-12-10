function solution(i) {
  let answer = "Yes!";
  i = i.toLowerCase().replace(/[^a-z]/g, "");
  if (i.split("").revese().join() !== i) {
    return "No!";
  }
  return answer;
}

let word = "hello;World;Dlrow;Olleh";
console.log(solution(word));
