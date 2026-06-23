import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let num: number = Number(lines[2]);
console.log("Number: "+num);
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}