//1. Number Type
let num = 27; //정수
let num2 = 1.5; //실수
let num3 = -20; //음수

console.log(num + num2); //덧셈
console.log(num - num2); //뺄셈
console.log(num * num2); //곱셈
console.log(num / num2); //나누기
console.log(num % num2); //나머지

let inf = Infinity; //양의 무한대
let mInf = -Infinity; //음의 무한대

let nan = NaN; //수치 연산이 실패했을 때 결과 값
console.log(1 * "hello"); //NaN

//2. String Type: "", ''로 감싸준다
let myName = "이정환"; 
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);

//백틱: `${}` => 템플릿 리터럴 문법
let introduceTest = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceTest);

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다): 명시적으로 변수에 할당해 줘야 하는 값
let empty = null;

//5. Undefined Type: 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값
undefined
let none;
console.log("none");