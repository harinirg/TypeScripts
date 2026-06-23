import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
let n = Number(data[5]!);
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log(oddSum + " " + evenSum);