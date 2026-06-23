import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[5]!.trim().split(",");
let price = Number(values[0]);
let quantity = Number(values[1]);
console.log("Total Cost: " + (price * quantity));