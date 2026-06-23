import * as fs from "fs";
const data = fs.readFileSync("input.txt", "utf8").split("\n");
let values:number = Number(data[0]!);
for(let i=1;i<=values;i++){
    console.log(i+" ");
}