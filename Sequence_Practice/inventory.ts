import promptSync from "prompt-sync";

const prompt = promptSync();

let quantitiesInput: string = prompt("Enter quantities of products (comma-separated): ");
let pricesInput: string = prompt("Enter prices of products (comma-separated): ");
let quantities = quantitiesInput.split(",");
let prices = pricesInput.split(",");
let totalValue: number = 0;
for (let i = 0; i < quantities.length; i++) {
    totalValue += Number(quantities[i]) * Number(prices[i]);
}
console.log("Total value of the inventory: " + totalValue.toFixed(2));