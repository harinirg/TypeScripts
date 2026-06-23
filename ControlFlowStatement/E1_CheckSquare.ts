import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let length: number = Number(lines[0][0]); 
let breadth: number = Number(lines[0][2]); 
console.log("Length is "+length);
console.log("Breadth is "+breadth);
if(length==breadth){
    console.log("Square")
}
else{
    console.log("Not a Square");
}
