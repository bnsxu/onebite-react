//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

//특정 날짜, 시간 기준 (. , / , -)
let date2 = new Date("1997-01-07");
console.log(date2);

//시간
let date3 = new Date(1997, 01, 07, 23, 59, 59);
console.log(date3);

//2. 타임 스탬프: 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자 값
//UTC: 1970.01.01 00시 00분 00초
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
//자바스크립트는 1월이 0부터 시작하기 때문에 +1
let month = date1.getMonth() + 1; 
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

//4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

//5. 시간을 여러 포맷으로 출력하기
//시간 제외, 날짜만 출력
console.log(date1.toDateString())
//우리나라 현지화 포맷
console.log(date1.toLocaleString());