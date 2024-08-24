//async: 어떤 함수를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 변환 해 주는 키워드
async function getData(){
    return {
        name: "이정환",
        id: "winterlood",
    };
}
console.log(getData());

async function getData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        }, 1500);
    });
}
console.log(getData2());

//await: async 함수 내부에서만 사용 가능 한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할
async function printData(){
    const data = await getData2();
    console.log(data);
}
printData();