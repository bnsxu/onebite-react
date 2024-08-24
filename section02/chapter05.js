//참조값 0x0000C
let o1 = {name: "이정환"};

//얕은 복사: 참조값 0x0000C
let o2 = o1;

//깊은 복사: 참조값 0x9959D
let o3 = {...o1};

//얕은 비교
console.log(o1 === o2); //true
//같은 객체는 맞지만 참조값이 다르다
console.log(o1 === o3); //false

//깊은 비교 -> JSON.stringify(): 객체를 문자열로 변환하는 기능
console.log(
    JSON.stringify(o1) === JSON.stringify(o3)
);