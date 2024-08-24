//1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1){
    console.log("Falsy");
}

//2. Truthy 한 값: 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t1){
    console.log("Truthy");
}

//3. 활용 사례
function printName(person){
    //null일 경우 조건이 거짓 (|| person === null 추가)
    if(person === undefined){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}
//let person = {name: "이정환"};
let person; //Cannot read properties of undefined
printName(person);

//Falsy의 !person 활용
function printName2(person2){
    if(!person2){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person2.name);
}
let person2 = null;
//let person2 = {name: "이정환"}; //truthy가 되어 출력
printName2(person2);