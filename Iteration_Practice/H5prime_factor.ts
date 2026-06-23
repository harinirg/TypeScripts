import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let num = Number(data[14]);
for (let i = 2; i <= num; i++) {
    while (num % i == 0) {
        console.log(i);
        num = num / i;
    }
}