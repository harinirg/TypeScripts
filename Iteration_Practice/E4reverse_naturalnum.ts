import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values:number = Number(data[3]!);
let sum:number=0;
for(let i=values;i>=1;i--){
    console.log(i+" ");
    sum+=i;
}
console.log(sum);