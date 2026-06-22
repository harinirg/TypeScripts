import promptSync from "prompt-sync";

const prompt = promptSync();

let income: number = Number(prompt("Enter your monthly income: "));
let expensesInput: string = prompt("Enter your expenses (space-separated): ");
let expenses = expensesInput.split(" ");
let total: number = 0;
for (let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i]);
}
let remainingBudget: number = income - total;
console.log("Remaining budget: $" + remainingBudget.toFixed(2));