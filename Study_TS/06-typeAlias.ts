//type alias(타입 변수)

type Animal = string | number | undefined;

let animal: Animal = 123;

//let animalList:{ name: string; age: number }={ name: "mong", age: 2 };
type AnimalList = { name: string; age: number };

let animalList: AnimalList = { name: "mong", age: 2 };

//const : 값이 변하지 않는 변수
//하지만 object 자료에서는 const를 넣어도 object 내부 마음대로 변경가능.
//readonly 사용시 object 자료 수정 막을수 있음. 수정시 에러.
type GirlFriend = { readonly name: string };

const girl: GirlFriend = { name: "Amber" };

//girl.name = "billy"; //readonly라서 에러남.

//type 변수
//1.uniontype으로 합치기
type PName = string;
type PAge = number;
type PersonList = PName | PAge;

//2. & 연산자로 object 타입합치기
type PositionX = { x: number };
type PositionY = { y: number };
//{x:number,y:number}
type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

//주의!! 같은 이름의 type 변수 재저의 불가능!!

type Recharging = { color: string; size: number; readonly position: number[] };
type AList = { name: string; phone: number; email: string };
type Adult = { name: string; email?: string; phone: number; adult: boolean };
