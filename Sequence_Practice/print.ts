import promptSync from "prompt-sync";
const prompt = promptSync();
let name: string = prompt("Enter your name: ");
let age: number = Number(prompt("Enter age: "));
let color: string=prompt("Enter the color:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite color:",color);
