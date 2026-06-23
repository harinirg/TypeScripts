import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let age: number = Number(lines[6]);
console.log("Age: "+age);
if(age<20){
    if(age>0 && age<=10){
        console.log("Cartoon club");
    }
    else if(age>10){
        console.log("Teens club");
    }
    else{
        console.log("Invalid age");
    }
}
else{
    console.log("Not allowed");
}