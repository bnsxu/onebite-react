//1. 콜백함수
function main(value){
    //console.log(value);
    console.log(1);
    console.log(1);
    value();
    console.log("end");
}

function sub(){
    console.log("i am sub");
}

//콜백함수
main(sub);

//가능
main(function(){
    console.log("i am sub");
});

//가능
main(() => {
    console.log("i am sub");
});

//2. 콜백함수의 활용
function repeat(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}

function repeatDouble(count){
    for(let idx = 1; idx <= count; idx++){
        //매 반복마다 2를 곱한다
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);

//구조가 흡사한 함수(중복 발생) 콜백함수로 만들기
function repeat2(count, callback){
    for(let idx = 1; idx <= count; idx++){
        //인수로 idx를 넘긴다
        callback(idx);
    }
}
//새로운 콜백함수 전달, 매개변수 idx를 받아 콘솔에 출력
repeat2(5, function(idx){
    console.log(idx);
});

repeat2(5, function(idx){
    console.log(idx * 2);
});

//더 간결하고 싶다면 화살표 함수 사용
repeat2(5, (idx) => {
    console.log(idx * 3);
});