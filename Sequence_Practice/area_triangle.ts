import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[1]!.trim().split(",");
let a = Number(values[0]);
let b = Number(values[1]);
let c = Number(values[2]);
if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of triangle: " + area);
} else {
    console.log("Invalid triangle");
}