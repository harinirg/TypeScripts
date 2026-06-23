import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let input: number = lines[9]!.split(" ");
let total: number = Number(input[0]);
let rabbit: number = Number(input[1]);
let deer: number = Number(input[2]);
let birds: number = Number(input[3]);
let squirrels: number = Number(input[4]);

console.log("Total animals: "+total);
console.log("Rabbit: "+rabbit);
console.log("Deer: "+deer);
console.log("Birds: "+birds);
console.log("Squirrels: "+squirrels);

let count: number = rabbit + deer + birds + squirrels;
console.log(count);
if(count>total){
    console.log("Counted wrongly")
}
else if(count<total){
    console.log("Baby lion is mischievous")
}
else{
    console.log("Baby lion is well behaved")
}