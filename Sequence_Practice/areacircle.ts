import * as fs from "fs";
const data = fs.readFileSync("./Sequence_Practice/input.txt", "utf8").split("\n");
let radius = Number(data[0]!.trim());
const pi = 3.14;
let area = pi * radius * radius;
console.log(area);