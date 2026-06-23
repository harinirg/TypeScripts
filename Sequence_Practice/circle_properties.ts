import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[4]!.trim().split(",");
let radius = Number(values[0]);
let angle = Number(values[1]);
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let sectorArea = (angle / 360) * Math.PI * radius * radius;
let arcLength = (angle / 360) * circumference;
console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Sector Area:", sectorArea);
console.log("Arc Length:", arcLength);