import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[3]!.trim().split(",");
let income = Number(values[0]);
let expenses = values[1]!.split(" ");
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i]);
}
console.log("Remaining Budget: " + (income - total));