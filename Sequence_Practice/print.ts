import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
const values = data[14]!.trim().split(",");
console.log("Name:", values[0]);
console.log("Age:", Number(values[1]));
console.log("Favorite Color:", values[2]);