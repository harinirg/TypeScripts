import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
console.log("Game Score: " + data[7]!.trim());