// 조건문으로 타입만들기 && infer

// 조건문으로 타입만들기

//삼항 연산자
3 > 1 ? console.log("맞음") : console.log("아님");

//<> 일반 타입변수에도 사용가능
//파라미터로 string을 넣으면 string을 남겨주고 그게 아니면 unknown 남겨주기
//1.typeif문은 삼항연산자로
//2.조건식은 extends 사용
type Age<T> = T extends string ? string : unknown;

let a1: Age<string>; //age는 string 타입
let a2: Age<number>; //age는 unknown 타입

//조건문으로 이런타입을 만들어보기
//파라미터로 array타입을 입력하면 array 첫자료의 타입을 남김
//array 타입말고 다른거 입력하며 any남김
//내가 쓴답
//type FirstItem<T> = T extends string[] ? string : any;
//정답

type FirstItem<T> = T extends any[] ? T[0] : any;

let age11: FirstItem<string[]>;
let age22: FirstItem<number>;

//infer

type Person<T> = T extends string ? string : unknown;
//조건문에서 쓸수 있는 infer: 타입을 왼쪽에서 추출
type 타입추출<T> = T extends () => infer R ? R : unknown;

type a = 타입추출<() => void>;

type b = ReturnType<() => void>;
//Ex01
type SecondItem<T> = T extends [string, ...any] ? T[0] : unknown;
//Ex02
type 뽑기<T> = T extends (X: infer R) => any ? R : any;
type a1 = 뽑기<(x: number) => void>;
