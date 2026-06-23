import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let str = data[12]!.trim();
console.log(str.length);
console.log(str + str);
console.log(str[0]);
console.log(str.substring(0, 3));