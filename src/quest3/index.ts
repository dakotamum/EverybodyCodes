import { input1, input2, input3 } from "./input";

function part1(){
    let input = input1;
    const lines = input.split("\n").filter(line => line.trim() !== "");
    let holeMap : number[][] = [];
    for (let i = 0; i < lines.length; i++)
    {
        let holeLine : number[] = [];
        for (let j = 0; j < lines[i].length; j++)
        {
            if (lines[i][j] === '#')
                holeLine.push(1);
            else
                holeLine.push(0);
        }
        holeMap.push(holeLine);
    }

    let madeChanges : boolean = false;
    let currentLevel : number = 1;
    do {
        madeChanges = false;
        for (let i = 0; i < holeMap.length; i++) {
            for (let j = 0; j < holeMap[i].length; j++)
            {
                if (holeMap[i][j] === currentLevel)
                {
                    if (holeMap[i - 1][j] >= currentLevel && holeMap[i + 1][j] >= currentLevel && holeMap[i][j - 1] >= currentLevel && holeMap[i][j + 1] >= currentLevel)
                    {
                        ++holeMap[i][j];
                        madeChanges = true;
                    }
                }
            }
        }
        ++currentLevel;
    } while(madeChanges);

    let blocksDug : number = 0;

    for (let i = 0; i < holeMap.length; i++)
    {
        for (let j = 0; j < holeMap[i].length; j++)
        {
            blocksDug += holeMap[i][j];
        }
    }
    console.log(blocksDug);
}

function part2(){
    let input = input2;
    const lines = input.split("\n").filter(line => line.trim() !== "");
    let holeMap : number[][] = [];
    for (let i = 0; i < lines.length; i++)
    {
        let holeLine : number[] = [];
        for (let j = 0; j < lines[i].length; j++)
        {
            if (lines[i][j] === '#')
                holeLine.push(1);
            else
                holeLine.push(0);
        }
        holeMap.push(holeLine);
    }

    let madeChanges : boolean = false;
    let currentLevel : number = 1;
    do {
        madeChanges = false;
        for (let i = 0; i < holeMap.length; i++) {
            for (let j = 0; j < holeMap[i].length; j++)
            {
                if (holeMap[i][j] === currentLevel)
                {
                    if (holeMap[i - 1][j] >= currentLevel && holeMap[i + 1][j] >= currentLevel && holeMap[i][j - 1] >= currentLevel && holeMap[i][j + 1] >= currentLevel)
                    {
                        ++holeMap[i][j];
                        madeChanges = true;
                    }
                }
            }
        }
        ++currentLevel;
    } while(madeChanges);

    let blocksDug : number = 0;

    for (let i = 0; i < holeMap.length; i++)
    {
        for (let j = 0; j < holeMap[i].length; j++)
        {
            blocksDug += holeMap[i][j];
        }
    }
    console.log(blocksDug);
}

function part3(){
    let input = input3;
    const lines = input.split("\n").filter(line => line.trim() !== "");
    let holeMap : number[][] = [];
    for (let i = 0; i < lines.length; i++)
    {
        let holeLine : number[] = [];
        for (let j = 0; j < lines[i].length; j++)
        {
            if (lines[i][j] === '#')
                holeLine.push(1);
            else
                holeLine.push(0);
        }
        holeMap.push(holeLine);
    }
    for (let i = 0; i < holeMap.length; i++)
    {
        holeMap[i].unshift(0);
        holeMap[i].push(0);
    }
    holeMap.unshift(Array(holeMap[0].length).fill(0));
    holeMap.push(Array(holeMap[0].length).fill(0));

    let madeChanges : boolean = false;
    let currentLevel : number = 1;
    do {
        madeChanges = false;
        for (let i = 0; i < holeMap.length; i++) {
            for (let j = 0; j < holeMap[i].length; j++)
            {
                if (holeMap[i][j] === currentLevel)
                {
                    if (holeMap[i - 1][j] >= currentLevel && holeMap[i + 1][j] >= currentLevel && holeMap[i][j - 1] >= currentLevel && holeMap[i][j + 1] >= currentLevel
                        && holeMap[i - 1][j - 1] >= currentLevel && holeMap[i - 1][j + 1] >= currentLevel && holeMap[i + 1][j - 1] >= currentLevel && holeMap[i + 1][j + 1] >= currentLevel)
                    {
                        ++holeMap[i][j];
                        madeChanges = true;
                    }
                }
            }
        }
        ++currentLevel;
    } while(madeChanges);

    let blocksDug : number = 0;

    for (let i = 0; i < holeMap.length; i++)
    {
        for (let j = 0; j < holeMap[i].length; j++)
        {
            blocksDug += holeMap[i][j];
        }
    }
    console.log(blocksDug);
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
