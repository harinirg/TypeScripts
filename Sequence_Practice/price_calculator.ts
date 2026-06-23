import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[10]!.trim().split(",");
let totalPrice: number = 0;
let choice: string = "yes";
let index: number = 0;
while (choice === "yes") {
    let price: number = Number(values[index]);
    let quantity: number = Number(values[index + 1]);
    totalPrice = totalPrice + (price * quantity);
    choice = values[index + 2]!;
    index = index + 3;
}
console.log("Total Price: " + totalPrice);