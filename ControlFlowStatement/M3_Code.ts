import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const values = lines[8]!.split(" ");
const code = Number(values[0]);
switch (code) {
    case 1:
        const num1 = Number(values[1]);
        const num2 = Number(values[2]);
        console.log(num1 + num2);
        break;

    case 2:
        const int1 = Number(values[1]);
        const int2 = Number(values[2]);
        console.log(int1 * int2);
        break;

    case 3:
        const str1 = values[1];
        const str2 = values[2];
        console.log(str1! + str2!);
        break;

    default:
        console.log("Invalid Code");
}