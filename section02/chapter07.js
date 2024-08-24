//6가지의 요소 조작 메서드

//1. push: 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
//변환된 길이를 반환한다
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength);

//2. pop: 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2);
console.log(poppedItem);

//push나 pop에 비해 비교적 느리게 동작
//3. shift: 배열에서 맨 앞에 있는 요소를 제거, 변환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

//4. unshift: 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const unshiftLength = arr4.unshift(0);
console.log(unshiftLength, arr4);

//5. slice: 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr5 = [1, 2, 3, 4, 5];
//4가 아닌 +1인 5를 써준다
let sliced = arr5.slice(2, 5);
//끝까지 자른다면 두 번째 인수 생략 가능
let sliced2 = arr5.slice(2);
//뒤에서부터 자른다면 -3, 뒤에서부터 3개 자르기
let sliced3 = arr5.slice(-3);

console.log(sliced);
console.log(sliced2);
console.log(sliced3);
//원본 배열의 값이 바뀌진 않는다
console.log(arr5);

//6. concat: 두 개의 서로 다은 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);