// 1. Lấy 1 phần tử cần thiết
// import { myVar } from "./named.js";

// console.log(myVar);

// 2. Lấy 1 số phần tử cần thiết
// import { myFunction, myVar } from "./named.js";

// console.log(myVar);
// myFunction();

// 3. Lấy tất cả các phần tử
import * as name from "./named.js";

console.log(name.myVar);
name.myFunction();

// 4. import default
import df from "./default.js";

console.log(df);
