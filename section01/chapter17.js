//1. 배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3];
console.log(arrC);

//문자열, null, 화살표 함수, 객체, 새로운 배열 등 어떤 타입도 저장
let arrD = [
    1, 2, 3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];
console.log(arrD);

//2. 배열 요소 접근
let item1 = arrD[0]; //index: 0부터 시작
let item2 = arrD[1];
console.log(item1);
console.log(item2);

//수정
arrD[0] = "hello";
console.log(arrD);