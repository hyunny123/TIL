class Person1 {
  //   data = 0;
  //data.number = 0;
  //TSconstructor()는 필드값에 aa가 미리 있어야 this.aa가 가능.
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  P1(a: string) {
    console.log("good" + a);
  }
}
let P1 = new Person1("lee");
let P2 = new Person1("park");

console.log(P2);

Person1.prototype.P1 = function () {};

//Q

class Car1 {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}
let car1 = new Car1("소나타", 3000);

console.log(car1);
console.log(car1.tax());
