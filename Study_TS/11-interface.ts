//interface

type Square = { color: string; width: number };
interface Square1 {
  color: string;
  width: number;
}

//interface vs type
//차이점: interface 중복선언 가능
//차이점: type 중복선언 불가능
//다른 사람들이 많이 이용할 거 같으면 object타입결정시 interface 사용하기
//장점: extends로 복사가능

let student: Student = { name: "kim" };
let teacher: Teacher = { name: "lee", age: 30 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  //   name: string;
  age: number;
}

let square: Square = { color: "red", width: 100 };
let square1: Square1 = { color: "blue", width: 100 };

//type에서도 extends와 비슷한 기능 => & (intersection type)
//두 타입을 전부 만족하는 타입을 만들어주기.

type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

let Miya: Cat & Animal2 = { age: 10, name: "lee" };
//practice
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
//practice
interface Cart {
  product: string;
  price: number;
}

// let 장바구니: Cart[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];

//practice
// { product : '청소기', price : 7000, card : false }

interface Cart {
  product: string;
  price: number;
}
interface NewCart extends Cart {
  card: boolean;
}

//practice
interface Mathobj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj: Mathobj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
