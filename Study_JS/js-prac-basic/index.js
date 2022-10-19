let nullCheck = null;
console.log(typeof nullCheck === null);
console.log(typeof nullCheck);
console.log(nullCheck === null);

//부동 소수점
console.log(0.1 + 0.2); //0.30000000000000004

//컴퓨터는 10진수 소수를 정확하게 다루지 못함.
//컴퓨터로 소수를 표현하는 방식은 IEEE754라는 표준이 널리 사용됨.
//대부분의 프로그래밍 언어에서도 반올림의 오차 존재함.
//계산의 효율성을 위해

//정수도 똑같은 방식으로 처리(부동 소수점)
console.log(20000000000000001 + 20000000000000002); //40000000000000000
console.log(BigInt(20000000000000001 + 20000000000000002)); //40000000000000000n

//number 타입
console.log(typeof NaN); //number

//NaN = 계산 불가능한 연산의 결과값
console.log(1 - "이"); //NaN

const testNaN = NaN;
console.log(testNaN === NaN); // ❌ false

console.log(Number.isNaN(testNaN)); //true
console.log(Object.is(testNaN, NaN)); //true

//-0
console.log(0 === -0); //true

console.log(1 * -0); //-0
console.log(1 - -0); //1

console.log(Object.is(0, -0)); //false

console.log(1 / 0);
//Infinity;
console.log(1 / -0);
//-Infinity;

//parseInt, parseFloat
console.log(parseInt("123")); //123
console.log(parseInt("123", 2)); //1

console.log(parseFloat("12.345")); //12.345

console.log(parseInt("coffee")); //NaN
