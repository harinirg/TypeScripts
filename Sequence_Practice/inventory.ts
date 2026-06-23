import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[8]!.trim().split("|");
let quantities = values[0]!.split(",");
let prices = values[1]!.split(",");
let total = 0;
for (let i = 0; i < quantities.length; i++) {
    total += Number(quantities[i]) * Number(prices[i]);
}
console.log("Inventory Value: " + total);