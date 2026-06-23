import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let rating = Number(data[11]!.trim());
console.log("Rounded Rating: " + Math.round(rating));