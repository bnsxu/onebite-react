function task(){
    setTimeout(() => {
        console.log("안녕하세요");
    }, 3000);
}
task();

function add(a, b){
    setTimeout(() => {
        const sum = a + b; //3
        console.log(sum);
    }, 3000);
}
add(1, 2);

//add 함수를 바깥에서 사용하기
function add2(a, b, callback){
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}

add2(1, 2, (value) => {
    console.log(value);
});

//음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        //인수로 비동기 작업의 결과 값을 전달
        callback(food);
    }, 3000);
}

//2초 동안 음식을 식히는..
function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

//냉동..
function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        //인덴트(indent) 들여쓰기: 콜백 지옥
        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});