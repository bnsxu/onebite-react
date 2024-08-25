//math 모듈
function add(a, b){
    return a + b;
};

function sub(a, b){
    return a - b;
};

//CJS (Common JS 모듈 시스템)
module.exports = {
    add,
    sub,
};

console.log("---------------");

//ES 모듈은 함수 앞에 export 사용 가능
export function add(a, b){
    return a + b;
};

export function sub(a, b){
    return a - b;
};

//default 기본 값
export default function mul(a, b){
    return a * b;
};

//ESM (ES 모듈 시스템): package.json에 "type":"module" 추가
//CJS는 error 발생: ReferenceError: require is not defined in ES module scope, you can use import instead
export {add, sub};