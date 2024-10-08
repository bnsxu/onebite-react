//5가지의 요소 순회 및 탐색 메서드
//1. forEach: 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr = [1, 2, 3];

//매 반복문마다 콜백함수 호출 (현재 요소 값, 현재 반복 카운트, 전체 배열 값)
arr.forEach(function(item, idx, arr){
    console.log(idx, item *2);
});

let doubledArr = [];
arr.forEach((item)=>{
    doubledArr.push(item * 2);
});
console.log(doubledArr);

//2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude); //true

//3. indexOf: 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); //1

console.log("indexOf / findIndex 차이점: ");
//indexOf는 원시 타입 값이 아닌 객체 타입의 값이 저장된 배열에서는 정확한 위치를 찾을 수 없다
let ObjectArr = [
    {name: "이정환"},
    {name: "홍길동"},
];
console.log(
    ObjectArr.indexOf({name: "이정환"})
); //-1

//객체 타입은 findIndex
console.log(
ObjectArr.findIndex((item) => item.name === "이정환"));
console.log("-------------------------");

//값이 여러 개라면 가장 첫 번째로 찾아낸 요소 반환
let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2);
console.log(index2); //0

//존재하지 않으면 -1을 반환 
let index3 = arr4.indexOf(20);
console.log(index3); //-1

//4. findIndex: 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1, 2, 3];
//콜백함수 만족: 참을 반환한다
const findedIndex = arr5.findIndex((item)=>{
    if(item ===2) return true;
});
console.log(findedIndex);

//더 간결하게
const findedIndex2 = arr5.findIndex((item)=> item % 2 !== 0);
console.log(findedIndex2);

//5. find: 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr6 = [
    {name: "이정환"},
    {name: "홍길동"},
];

const finded = arr6.find(
    (item) => item.name === "이정환"
    );
console.log(finded);