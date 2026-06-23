import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let products = data[9]!.trim().split(",");
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}