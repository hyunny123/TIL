//rest-parameter
//...붙이면 파라미터 100만개 들어올 수 있다.
//다른 파라미터 뒤에 써야한다.
function x(...a: number[]) {
  console.log(a);
}
//x(1,5,3,5,6,6)

//...
//array나 오브젝트 옆에 붙이면 괄호 벗겨달라.

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

//destructuring
//생김새 왼쪽 맞춰주고 오른쪽 작명.
//변수이름을 속성이름과 맞춰주는게 편리.
let [w1, w2] = ["안녕", 100];
console.log(w1);

let { student2, age4 } = { student2: true, age4: 20 };
let person = { student2: true, age4: 20 };

function 함수({ student2, age4 }: { student2: boolean; age4: number }) {
  console.log(student2, age4);
}
console.log(함수({ student2: true, age4: 20 }));

//최대수

function maxNum(...a: number[]) {
  let last = 0;
  a.forEach((i) => {
    if (last < i) {
      last = i;
    }
  });
  return last;
}

console.log(maxNum(4, 6, 3, 2));

//Q.
function 함수1({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}

console.log(함수1({ user: "kim", comment: [3, 5, 4], admin: false }));

type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};
function 함수1({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

console.log(함수1({ user: "kim", comment: [3, 5, 4], admin: false }));

//Q

type arr3 = (number | String | boolean)[];

function 함수2([a, b, c]: arr3) {
  console.log(a, b, c);
}

함수2([40, "wine", false]);
