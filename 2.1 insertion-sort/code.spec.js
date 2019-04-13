let { sort } = require("./code.js");

console.group("sort")
let arr = [41, 59, 26, 41, 58];

console.log("original:");
console.dir(arr);

sort(arr);

console.log("sorted:");
console.dir(arr);

let expect = [26, 41, 41, 58, 59];
console.log("is correct:");
console.log(expect.every((v, i)=> v == arr[i]));

console.groupEnd("sort")
