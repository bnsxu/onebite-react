//1. Spread 연산자: 흩뿌리다, 펼치다 라는 뜻
//객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
console.log(arr2); 

//Spread
let arr3 = [4, ...arr1 , 5, 6];
console.log(arr3);

let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    a: obj1.a,
    b: obj1.b,
    c: 3,
    d: 4,
}
console.log(obj2);

//Spread
let obj3 = {
    ...obj1,
    c: 3,
    d: 4,
}
console.log(obj3);

//Spread 함수
function funcA(p1, p2, p3){
    console.log(p1, p2, p3);
}
funcA(...arr1);

//2. Rest 매개변수: Rest는 나머지, 나머지 매개변수
//Spread 연산자가 아닌 Rest 매개변수 
function funcB(...rest){
    console.log(rest);
}
funcB(...arr1);

//첫 번째 매개변수를 따로 하고 싶다면
//...rest 뒤에는 추가적인 매개변수가 올 수 없다
function funcB(one, ...rest){
    console.log(rest);
}
funcB(...arr1);