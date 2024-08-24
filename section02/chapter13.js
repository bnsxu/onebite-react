const promise = new Promise(() => {
    //비동기 작업을 실행하는 함수: executor
    setTimeout(() => {
        console.log("안녕");
    }, 2000);
}); 
// [Prototype]]: Promise [[PromiseState]]: "pending" [[PromiseResult]]: undefined
console.log(promise);


//resolve: 성공 상태
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("안녕");
        resolve("안녕");
    }, 2000);
}); 
//[[Prototype]]: Promise [[PromiseState]]: "fulfilled" [[PromiseResult]]: [[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "안녕"
setTimeout(() => {
    console.log(promise2);
}, 3000);


//reject: 실패 상태
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("안녕");
        reject("왜실패했는지 이유..");
    }, 2000);
}); 
//[[Prototype]]: Promise [[PromiseState]]: "rejected" [[PromiseResult]]: "왜실패했는지 이유.."
setTimeout(() => {
    console.log(promise3);
}, 3000);


//활용 1)
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //const num = 10; //then
        const num = null; //catch

        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject("num이 숫자가 아닙니다");
        }
    }, 2000);
}); 

//then (그 후에): Promise 객체의 메서드인 then 메서드 호출 (비동기 작업이 성공했을 때만 호출)
promise4.then((value) => {
    console.log(value);
})
.catch((error) => { //promise의 chaining
    console.log(error);
});


//활용 2)
function add10(num){
    const promise5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    }); 
    return promise5;
}

add10(0)
.then((result) => {
    console.log(result);
    return add10(result); 
})
.then((result) => {
    console.log(result);
    return add10(result);    
})
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});