// package.json에 "start": "node src/index.js" 추가

//CJS
const moduleData =  require("./math");

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

//구조 분해 할당
const {add, sub} = require("./math");

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

console.log("---------------");

//ESM
import {add, sub} from "./math.js";

//기본 값은 {} 없이 불러줘야 한다
//import mul from "./math.js";
import mul, {add, sub} from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));





//npm run start