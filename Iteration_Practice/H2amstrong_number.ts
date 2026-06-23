import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");

let num = Number(data[11]);
let temp = num;
let sum = 0;
let digits = num.toString().length;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = (temp - digit) / 10;
}
console.log(sum == num);