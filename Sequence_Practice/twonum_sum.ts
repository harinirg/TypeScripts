import promptSync from "prompt-sync";
const prompt = promptSync();
let first: number = Number(prompt("Enter first integer: "));
let second: number =Number(prompt("Enter the second: "));
let sum:number = first+second;
console.log("The sum of " + first + " and " + second + " is: " + sum);