import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let input: number = lines[10]!.split(" ");
let name: string = input[0];
let items: number = Number(input[1]);
let cost: number = 0;
if(items<10){
    cost = 12 * items;
}
else if(items>=10 && items<=99){
    cost = 10 * items;
}
else if(items>=100){
    cost = 7 * items;
}
console.log("Cost: "+cost);