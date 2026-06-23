import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8").split("\n");
let num = Number(data[6]);
if (num < 10000 || num > 99999) {
    console.log("Not a valid number");
} else {
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = (num - digit) / 10;
    }
    console.log(rev);
}