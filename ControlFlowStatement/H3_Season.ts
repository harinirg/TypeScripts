import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[14]!.split(" ");
let month: number= Number(input[0]);
if(month>=1 && month<=12){
    if(month>=3 && month<=5)
        console.log("Spring");
    else if(month>=6 && month<=8)
        console.log("Summer");
    else if(month>=9 && month<=11)
        console.log("Autumn");
    else if(month>=12 && month<=2)
        console.log("Winter");
}
else{
    console.log("Invalid month");
}