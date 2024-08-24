//단락 평가: 논리연산식에서 첫 번째 피연산자의 값만 출력
function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

//두 번째 함수 호출은 생략
console.log(returnFalse() && returnTrue()); //false
//단락 평가 X, T and T = T, F = F
console.log(returnTrue() && returnFalse()); 

//단락 평가 O
console.log(returnTrue() || returnFalse());

console.log("---------------");

function returnFalsy(){
    console.log("False 함수");
    return undefined;
}

function returnTruthy(){
    console.log("True 함수");
    return 10;
}
console.log(returnTruthy() || returnFalsy()); // True 함수, 10
console.log(returnFalsy() && returnTruthy); //False 함수

console.log("---------------");

//단락 평가 활용 사례
function printName1(person1){
    console.log(person1 && person1.name);
}
printName1(); //undefined

function printName2(person2){
    const name = person2 && person2.name
    console.log(name || "person의 값이 없음");
}
//person2이 undefined라 두 번째 값에 접근하지 않고
printName2();
//person2 && person2.name 첫 번째 값이 Truthy 하기 때문에 두 번째 값으로 넘어간다
printName2({name: "이정환"});