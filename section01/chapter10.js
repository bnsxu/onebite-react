//1. for문 [for (초기식; 조건식; 증감식){}]
//초기식: 반복문 내에서만 쓸 수 있는 변수 (Count 변수)
//조건식: 언제까지 반복할 건지 (참:반복/거짓:종료)
//증감식: 반복마다 count 변수인 idx 값을 증가
for (let idx=1; idx <= 10; idx++){
    if(idx % 2 === 0){
        continue;
    }
    console.log(idx);

    //거짓이 아니어도 강제 종료
    if(idx >= 5){
        break;
    }
}