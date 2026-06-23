import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[2]!.trim().split(",");
let weight = Number(values[0]);
let height = Number(values[1]);
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));