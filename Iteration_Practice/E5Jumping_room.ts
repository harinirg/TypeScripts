import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let room = Number(data[4]!);
for (let i = room; i <= 100; i += 10) {
    console.log(i + " ");
}