import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let cost: number= Number(lines[4]);
console.log("Mobile cose: "+cost);
if(cost<=15000){
    console.log("Mobile chosen is within the budget");
}
else{
    console.log("Mobile chosen is beyond the budget");
}