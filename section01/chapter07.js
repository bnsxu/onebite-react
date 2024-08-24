//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2; //우선순위가 높다
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; 
console.log(num6); //21

let num7 = (1 + 2) * 10; 
console.log(num7); //30

//3. 복합 대입 연산자 (산술 + 대입)
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 10;
console.log(num8);

//4. 증감 연산자(+, -)
let num9 = 10;
num9++;
console.log(num9); //11 

//전위 연산: 즉시 증감
console.log(++num9); //12

//후위 연산: 라인이 끝나야 증감
console.log(num9++); //12
console.log(num9); //13

//5. 논리 연산자
let or = true || false; //하나만 참이어도 참
let and = true && false;
let not = !true; 

//6. 비교 연산자: 두 개 값을 비교하는 연산자
let comp1 = 1 === 2; 
//== 값의 자료형까지 같은지 비교 안됨
let comp2 = 1 == "1"; 

let comp3 = 1 !== 2; //비동등 비교 연산
console.log(comp1, comp3);

let comp4 = 2 > 1; //2가 1보다 크냐 true
let comp5 = 2 < 1; //1이 2보다 크냐 false

let comp6 = 2 >= 2; //크거나 같냐 true
let comp7 = 2 <= 2; //작거나 같냐 true