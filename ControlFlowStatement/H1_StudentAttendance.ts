import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[12]!.split(" ");
let held: number = Number(input[0]);
let attended: number = Number(input[1]);
let medicalcause: string = input[2];
let percentage = (attended/held)*100;
if(percentage>75){
    console.log(percentage+"% Allowed");
}
else{
    if(medicalcause.toUpperCase()=='Y'){
        console.log(percentage+"% Allowed");
    }
    else{
        console.log(percentage+"% Not Allowed");
    }
}