import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let birthYear = Number(data[6]!.trim());
let age = new Date().getFullYear() - birthYear;
console.log("Age: " + age);