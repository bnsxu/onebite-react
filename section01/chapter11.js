//함수

function greeting(){
    //실행되는 코드
    console.log("너무 졸리다");    
}
//함수를 호출해야 실행
console.log("호출 전");
greeting();
console.log("호출 후");

//직사각형의 넓이
function getArea1(){
    let width = 10;
    let height = 20;
    let area = width * height;
    console.log(area);
}

getArea1(); //200

//매개변수: 매개체 역할을 하는 변수
function getArea2(width, height){
    let area = width * height;
    console.log(area);
}
getArea2(10, 20);
getArea2(30, 20);
getArea2(120, 200);

//return으로 반환
function getArea3(width, height){

    function another(){ //중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;
    return area;
}
let area1 = getArea3(10, 20);
console.log(area1);

//호이스팅: 끌어 올리다 라는 뜻
//선언문을 호출 문보다 아래에 두어도 호출된다