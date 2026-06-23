import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values = data[12]!.trim().split(" ");
let min = 101;
let max = 0;
let sum = 0;
let count = 0;
for (let i = 0; i < values.length; i++) {
    let price = Number(values[i]);
    if (price == -1) {
        break;
    }
    if (price < min) {
        min = price;
    }
    if (price > max) {
        max = price;
    }
    if (price >= 5 && price <= 30) {
        sum += price;
        count++;
    }
}
console.log("Minimum Price: " + min);
console.log("Maximum Price: " + max);
console.log("Average: " + (sum / count));