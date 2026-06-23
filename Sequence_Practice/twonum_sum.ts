import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[13]!.trim().split(",");
let first = Number(values[0]);
let second = Number(values[1]);
console.log("Sum: " + (first + second));