//동기
console.log(1);
console.log(3);

//특정 시간이 지난 이후에 비동기 실행
console.log(1);

//setTimeout: 첫 번째 인수는 콜백함수, 두 번째 인수는 대기하는 숫자 값
//Web APIs에 콜백함수와 같이 넘겨준다
setTimeout(()=>{
    console.log(2);
}, 3000);

console.log(3);

//자바스크립트 엔진에는 쓰레드가 1개밖에 없음
//비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행됨