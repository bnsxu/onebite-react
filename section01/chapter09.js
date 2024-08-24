//1. if 조건문 (if문: if~else) [if(조건식){}]
let num1 = 10;
if(num1 >= 10){
    console.log("num은 10 이상입니다");
}

//조건이 거짓일 때
let num2 = 9;
if(num2 >= 10){
    console.log("조건이 참 입니다!");
}else{
    console.log("조건이 거짓입니다");
}

//조건문 추가
let num3 = 9;
if(num3 >= 10){
    console.log("조건이 참 입니다!");
}else if(num3 >= 5){
    console.log("num은 5 이상입니다");
}else{
    console.log("조건이 거짓입니다");
}

//2. Switch문
//-> if문과 기능 자체는 동일, 다수의 조건을 처리할 때 if보다 더 직관적이다
let animal = "tiger";

switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    //일치하는 케이스가 없을 때
    default:{
        console.log("그런 동물은 전 모릅니다");
    }
}