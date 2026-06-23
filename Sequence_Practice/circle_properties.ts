import promptSync from "prompt-sync";

const prompt = promptSync();
let radius: number = Number(prompt("Enter the radius of the circle: "));
let angle: number = Number(prompt("Enter the angle in degrees (for sector area): "));
let diameter: number = 2 * radius;
let circumference: number = 2 * Math.PI * radius;
let sectorArea: number = (angle / 360) * Math.PI * radius * radius;
let arcLength: number = (angle / 360) * circumference;
console.log("Radius: " + radius);
console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference);
console.log("Sector Area for " + angle + " degrees: " + sectorArea);
console.log("Arc Length for " + angle + " degrees: " + arcLength);