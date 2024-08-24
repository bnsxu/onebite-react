//1. 상수 객체: 상수에 저장해 놓은 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

//새로운 값은 할당하지 못한다
//animal = 123;

//프로퍼티는 추가, 수정, 삭제 조작 가능
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

console.log(animal);

//2. 메서드: 값이 함수인 프로퍼티를 말한다
//메서드로서 객체의 동작을 정의한다

const person = {
    name: "이정환",
    //함수를 저장한 프로퍼티
    //익명함수
    sayHi1: function(){
        console.log("안녕");
    },
    //화살표 함수
    sayHi2: ()=>{
        console.log("안녕");
    },

    //메서드 선언
    sayHi3(){
        console.log("안녕");
    },
};

person.sayHi1(); //안녕
person["sayHi1"]();
person.sayHi2(); //안녕
person.sayHi3(); //안녕