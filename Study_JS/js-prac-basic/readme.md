### 부동 소수점

console.log(0.1 + 0.2); //0.30000000000000004

- 컴퓨터는 10진수 소수를 정확하게 다루지 못함.
- 컴퓨터로 소수를 표현하는 방식은 IEEE754라는 표준이 널리 사용됨.
- 대부분의 프로그래밍 언어에서도 반올림의 오차 존재함.
- 계산의 효율성을 위해

- 정수도 똑같은 방식으로 처리(부동 소수점)

```
console.log(20000000000000001 + 20000000000000002);
//40000000000000000
console.log(BigInt(20000000000000001 + 20000000000000002));
//40000000000000000n
```

### number 타입

console.log(typeof NaN); //number

### NaN = 계산 불가능한 연산의 결과값

console.log(1 - "이"); //NaN

- NaN은 자기 자신과 같지 않은 값.

```

const testNaN = NaN;
console.log(testNaN === NaN); // ❌ false

console.log(Number.isNaN(testNaN)); //true
console.log(Object.is(testNaN, NaN)); //true

```

어떤 값이 NaN인지 판별하기 위해서는 일반적인 비교연산자 대신, Number.isNaN or Object.is 함수를 사용하는게 좋다.

### -0

0와 -0은 별개의 값이지만, 비교연산을 해보면 true로 나옴.

```
console.log(0 === -0); //true

console.log(1 * -0); //-0
console.log(1 - -0); //1

```

거의 모든 경우에 0과 같다는 걸로 간주된다.
📛 예외 Object.is 함수는 0과 -0을 다른 값으로 취급.

```
console.log(Object.is(0, -0)); //false

```

그리고 0이 아닌 어떤수를 0 혹은 -0으로 나눌때 결과 값다름

```
console.log(1 / 0);
//Infinity;
console.log(1 / -0);
//-Infinity;
```

### parseInt, parseFloat

- 문자열을 number타입으로 변경

function even(num){
if(num % 2 ===0){
console.log("even")
}else{
console.log("odd")
}
}
