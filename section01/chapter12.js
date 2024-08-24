//1. 함수 표현식
function funcA(){
    console.log("funcA");
}

//() 호출이 아닌 변수 자체를 담으면 함수 자체가 출력
let varA = funcA;
console.log(varA);

//익명 함수: 변수 값이 아닌 값으로써 함수 이름으로 호출 불가능(선언식이 아닌)
let varB = function funcB(){
    console.log("funcB");
};

//호이스팅 대상이 되지 않음
varB();

//2. 화살표 함수: function을 지우고 ()=>{}
let varC = ()=>{
    return 1;
};
console.log(varC()); //1

//중괄호, return 지워도 가능
let varD = () => 1;
console.log(varD()); //1

//매개변수 선언
let varE = (value) => value + 1;
console.log(varE(10)); //11

//즉시 반환이 아니라면 =>{추가 작업}
let varF = (value) => {
    console.log(value); //10
    return value + 1;
};
console.log(varF(10)); //1