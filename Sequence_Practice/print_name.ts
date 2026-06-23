import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
console.log("Hello, " + data[12]!.trim() + "!");