import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[15]!.split(" ");
let amount: number = Number(input[0]);
let tax: number = 0;
if (amount <= 250000) {
    console.log("You are exempted from tax");
}
else if (amount <= 500000) {
    tax = (amount - 250000) * 0.10;
    console.log(tax);
}
else if (amount <= 1200000) {
    tax = (250000 * 0.10) + (amount - 500000) * 0.20;
    console.log(tax);
}
else {
    tax = (250000 * 0.10) + (700000 * 0.20) + (amount - 1200000) * 0.30;
    console.log(tax);
}
