import { input1, input2, input3 } from "./input";

function part1(){
    let input = input1;
    let nails : number[] = input.split('\n').map(line => parseInt(line.trim(), 10));
    let minHeight = Math.min(...nails);
    let totalHits = nails.reduce((sum, num) => sum + (num - minHeight), 0); 
    console.log(totalHits);
}

function part2(){
    let input = input2;
    let nails : number[] = input.split('\n').map(line => parseInt(line.trim(), 10));
    let minHeight = Math.min(...nails);
    let totalHits = nails.reduce((sum, num) => sum + (num - minHeight), 0); 
    console.log(totalHits);
}

function part3(){
    let input = input3;
    let nails = input.split('\n').map(line => parseInt(line.trim(), 10)).sort((a, b) => a - b);
    let med = nails[nails.length / 2];
    let totalHits = nails.reduce((sum, num) => sum + (Math.abs(num - med)), 0); 
    console.log(totalHits);
}

const partNum = process.argv[2];
switch (partNum) {
    case 'part1':
        part1();
        break;
    case 'part2':
        part2();
        break;
    case 'part3':
        part3();
        break;
    default:
    console.log("Invalid part number");
}
