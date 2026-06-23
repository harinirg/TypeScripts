import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[13]!.split(" ");

let month: number = Number(input[0]);
let year: string = input[1];
function isLeapYear(year: number): boolean{
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
switch(month){
    case 1:
        console.log("January "+year+" has 31 days");
        break;
    case 2:
        if(isLeapYear(year)){
            console.log("February "+year+" has 29 days");
        }
        else{
            console.log("February "+year+" has 28 days");
        }
        break;
    case 3:
        console.log("March "+year+" has 31 days");
        break;
    case 4:
        console.log("April "+year+" has 30 days");
        break;
    case 5:
        console.log("May "+year+" has 31 days");
        break;
    case 6:
        console.log("June "+year+" has 30 days");
        break;
    case 7:
        console.log("July "+year+" has 31 days");
        break;
    case 8:
        console.log("August "+year+" has 31 days");
        break;
    case 9:
        console.log("September "+year+" has 30 days");
        break;
    case 10:
        console.log("October "+year+" has 31 days");
        break;
    case 11:
        console.log("November "+year+" has 30 days");
        break;
    case 12:
        console.log("December "+year+" has 31 days");
        break;
    default:
        console.log("Invalid month");
        break;
}