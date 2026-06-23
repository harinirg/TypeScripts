import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let age: number = Number(lines[3]);
console.log("Age: "+age);
if(age>=4){
    console.log("Eligible");
}
else{
    console.log("Not eligible");
}