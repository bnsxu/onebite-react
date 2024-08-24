//스코프: 전역(전체 영역) 스코프(특정 영역) / 지역 스코프
//전역 스코프: 전체 영역에서 접근 가능
//지역 스코프: 특정 영역세먼 접근 가능

//전역 스코프
let a = 1;

function funcA(){
    //지역 스코프
    let b = 2;
    console.log(a);

    //지역 스코프
    function funcB(){
    }
}

funcA();
console.log(b); //b is not defined

//함수도 변수처럼 지역 스코프를 갖게 된다 
//함수는 예외적으로 조건문, 반복문 안에서는 지역 스코프를 갖지 않는다
funcB();

if(true){
    //지역 스코프
    let c = 1;
}
console.log(c); //c is not defined

for(let i = 0; i < 10; i++){
    let d = 1;
}
console.log(d); //d is not defined