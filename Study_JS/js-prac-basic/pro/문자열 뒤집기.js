function solution(my_string) {
  const split_word = my_string.split("");
  const reverse_word = split_word.reverse();
  const answer = reverse_word.join("");
  return answer;
}
