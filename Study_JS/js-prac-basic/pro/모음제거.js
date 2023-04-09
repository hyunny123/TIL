function solution(my_string) {
    let answer = 0;
    let ae = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < my_string.length; i++) {
      if (ae.includes(my_string[i])) {
        answer += my_string[i];
      }
    }
    return answer;
  }