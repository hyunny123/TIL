//7의 개수
//정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return

//[7, 77, 17]에는 7이 4개 있으므로 4를 return
//[10, 29]에는 7이 없으므로 0을 return

function solution(array) {
  const answer = array.join("").split("");
  return answer.filter((el) => el === "7").length;
}

//조인을 하면 "77717"이되구요 이상태에서 split("7")을하면 [" "," "," ","1"," "] 해서
//길이가 5인 배열이 됩니다. 그래서 -1 해주는거 같네욤
function solution(array) {
  return array.join("").split("7").length - 1;
}

function solution(array) {
  return array
    .join()
    .split("")
    .filter((el) => {
      return el == "7";
    }).length;
}
