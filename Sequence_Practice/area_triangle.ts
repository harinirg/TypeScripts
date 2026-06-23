import promptSync from "prompt-sync";

const prompt = promptSync();
let a: number = Number(prompt("Enter side a: "));
let b: number = Number(prompt("Enter side b: "));
let c: number = Number(prompt("Enter side c: "));

if (a + b > c && a + c > b && b + c > a) {
    let s: number = (a + b + c) / 2;
    let area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of the triangle: " + area);
} 
else {
    console.log("Error: The given sides do not form a valid triangle.");
}