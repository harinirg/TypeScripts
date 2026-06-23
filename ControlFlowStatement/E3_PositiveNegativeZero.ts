import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let num: number = Number(lines[2]);
console.log("Numner: "+num);
if(num<0){
    console.log("Negaive");
}
else if(num>0){
    console.log("Positive");
}
else{
    console.log("Zero");
}