import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values = data[13]!.split(",");
let x = Number(values[0]);
let y = Number(values[1]);
let sum1 = 0;
let sum2 = 0;
for (let i = 1; i < x; i++) {
    if (x % i == 0) {
        sum1 += i;
    }
}
for (let i = 1; i < y; i++) {
    if (y % i == 0) {
        sum2 += i;
    }
}
console.log(sum1 == y && sum2 == x);