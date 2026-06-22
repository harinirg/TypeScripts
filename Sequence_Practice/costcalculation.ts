import promptSync from "prompt-sync";

const prompt = promptSync();
let price: number = Number(prompt("Enter the price of the item: "));
let quantity: number = Number(prompt("Enter the quantity: "));
let totalCost: number = price * quantity;
console.log("Total cost: $" + totalCost.toFixed(2));