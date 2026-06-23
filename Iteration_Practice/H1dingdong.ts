import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values = data[10]!.split(",");
let start = Number(values[0]);
let end = Number(values[1]);
let result = "";
for (let i = start; i <= end; i++) {
    if (i % 10 == 0) {
        result += "dong ";
    } else if (i % 5 == 0) {
        result += "ding ";
    } else {
        result += i + " ";
    }
}
console.log(result.trim());