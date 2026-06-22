import promptSync from "prompt-sync";

const prompt = promptSync();

let totalPrice: number = 0;
let choice: string = "yes";
let itemNumber: number = 1;

while (choice.toLowerCase() === "yes") {
    let price: number = Number(prompt("Enter the price of item "+itemNumber));
    let quantity: number = Number(prompt("Enter the quantity of item"+ itemNumber));
    totalPrice = totalPrice + (price * quantity);
    choice = prompt("Do you want to enter another item? (yes/no): ");
    itemNumber++;
}
console.log("Total Price: " + totalPrice);