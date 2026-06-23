import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let num: number = Number(lines[7]);
console.log("Number: "+num);

if(num%2!=0){
    num = (num* 3)+1;
}
else{
    num = num/=2;
}
console.log("Number"+num);