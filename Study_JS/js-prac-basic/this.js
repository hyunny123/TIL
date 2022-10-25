function Pepper() {
  this.name = "pepper";
  return {
    name: "brandy",
    bark: () => {
      console.log(this.name + "키위새 좋아요");
    },
  };
}
const pepper = new Pepper();
pepper.bark(); //pepper키위새 좋아요

function Brandy() {
  this.name = "pepper";
  return {
    name: "brandy",
    bark: function () {
      console.log(this.name + "키위새 좋아좋아");
    },
  };
}

const brandy = new Brandy();
brandy.bark(); //brandy키위새 좋아좋아

//function을 사용하면 브랜디, ()=>을 사용시 페퍼
//일반 함수는 자신이 종속된 객체를 this로 가르키며, 화살표 함수는 자신이 종속된 인스턴스를 가르틴다.
