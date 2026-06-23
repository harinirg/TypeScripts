import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let table:number = Number(data[2]!);
for (let i = 1; i <= 10; i++) {
    console.log(table*i+" ");
}