import { input1, input2, input3 } from "./input";

function part1(){
    let input = input1;
    let totalPotions = 0;
    for (const letter of input)
    {
        switch(letter) {
            case 'B':
            ++totalPotions;
            break;
            case 'C':
            totalPotions += 3;
            break;
        }
    }
    console.log(totalPotions);
}

function part2(){
    let input = input2;
    let totalPotions = 0;
    for (let i = 0; i < input.length - 1; i += 2)
    {
        const pair: string[] = [input[i], input[i + 1]];
        let numMonsters = 0;
        let numPotions = 0;
        
        for (const monster of pair)
        {
            switch(monster) {
            case 'A':
                ++numMonsters;
                break;
            case 'B':
                ++numPotions;
                ++numMonsters;
                break;
            case 'C':
                numPotions += 3;
                ++numMonsters;
                break;
            case 'D':
                numPotions += 5;
                ++numMonsters;
                break;
            }
        }
        numPotions += (numMonsters > 1 ? 2 : 0);
        totalPotions += numPotions;
    }
    console.log(totalPotions);
}

function part3(){
    let input = input3;
    let totalPotions = 0;
    for (let i = 0; i < input.length - 2; i += 3)
    {
        const trio: string[] = [input[i], input[i + 1], input[i + 2]];
        let numMonsters = 0;
        let numPotions = 0;
        
        for (const monster of trio)
        {
            switch(monster) {
            case 'A':
                ++numMonsters;
                break;
            case 'B':
                ++numPotions;
                ++numMonsters;
                break;
            case 'C':
                numPotions += 3;
                ++numMonsters;
                break;
            case 'D':
                numPotions += 5;
                ++numMonsters;
                break;
            }
        }
        numPotions += (numMonsters > 1 ? (numMonsters == 2 ? 2 : 6) : 0);
        totalPotions += numPotions;
    }
    console.log(totalPotions);
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
