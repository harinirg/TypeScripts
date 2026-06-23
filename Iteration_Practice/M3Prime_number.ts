import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
let num = Number(data[7]!);
let count = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Yes");
} else {
    console.log("No");
}