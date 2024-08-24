//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let one= arr[0];
let two = arr[1];
let three = arr[2];

//구조 분해 할당
let [one2, two2, three2, four2] = arr;
//배열 개수를 넘어도 오류는 나지 않지만 undefined
console.log(one2, two2, three2, four2); //1 2 3 undefined

//2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
}

let name = person.name;
let age = person.age;
let hobby = person.hobby;

//구조 분해 할당
let person2 = {
    name2: "이정환",
    age2: 27,
    hobby2: "테니스",
}

//객체는 {}
let {name2, age2, hobby2} = person2;
console.log(name2, age2, hobby2);

let {
    age2: myAge,
    extra = "hello",
} = person2;
console.log(name2, myAge, hobby2, extra); //이정환 27 테니스 hello

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby}) => {
    console.log(name, age, hobby);
}

func(person); //이정환 27 테니스