import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values = data[1]!.trim().split(",");
let m: number = Number(values[0]);
let n: number = Number(values[1]);
let result: number = Math.pow(m, n);
console.log(result);