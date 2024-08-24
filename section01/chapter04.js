//1. 변수 선언, 초기화
let age = 27;
console.log(age);

age = 30;
console.log(age);

//중복 선언 불가
let age;

//2. 상수, const로 선언 초기화
const birth = "1997.01.07";

//초기화 후 값을 바꿀 수 없다
birth = "123";

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다
let #name;
let na#me;

//가능
let $_name;

//3-2. 숫자로 시작할 수 없다
//가능
let name1;
let _2name;

//불가능
let 2name; 

//3-3. 예약어를 사용할 수 없다
let if;

//4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a -b;

//판매량일 경우
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;