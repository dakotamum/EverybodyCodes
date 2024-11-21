import { input1, input2, input3 } from "./input";

function part1(){
    let input = input1;
    const lines = input.split("\n").filter(line => line.trim() !== "");
    let keywords = lines[0].replace("WORDS:", "").trim().split(',').map(word => word.trim());
    let words = lines[1].split(' ');

    let totalFoundWords = 0;

    for (const keyword of keywords)
    {
        for (const word of words)
        {
            if (word.includes(keyword))
            ++totalFoundWords;
        }
    }
    console.log(totalFoundWords);
}

function part2(){
    let input = input2;
    const lines = input.split("\n").filter(line => line.trim() !== "");
    let normalKeywords = lines[0].replace("WORDS:", "").trim().split(',').map(word => word.trim());
    let reversedKeywords = normalKeywords.reverse().map(str => str.split("").reverse().join(""));
    let allKeywords = normalKeywords.concat(reversedKeywords);
    let totalSymbolsFound = 0;

    let temp = [];
    temp.push(lines[1]);

    for (const line of lines.slice(1))
    {
        console.log(line);
        let runeFlags = Array(line.length).fill(false);
        for (let i = 0; i < line.length; i++)
        {
            let currentWord = "";
            for (let j = i; j < line.length; j++)
            {
                currentWord += line[j];
                // does current word match a keyword?
                if (allKeywords.some(keyword => keyword === currentWord))
                {
                    // console.log("found a match: " + currentWord);
                    for (let l = i; l < j + 1; l++)
                        runeFlags[l] = true;
                }
                // does current word exist at start of any keywords and thus still a possible future match?
                if (!allKeywords.some(keyword => keyword.startsWith(currentWord)))
                {
                    currentWord = "";
                    break;
                }
            }
        }
        for (let i = 0; i < runeFlags.length; i++)
        {
            if (runeFlags[i])
                ++totalSymbolsFound;
        }
    }
    console.log(totalSymbolsFound);
}

function part3(){
    let input = input3;
    const horizontalLines = input.split("\n").filter((line: string) => line.trim() !== "");
    let normalKeywords = horizontalLines[0].replace("WORDS:", "").trim().split(',').map((word: string) => word.trim());
    let reversedKeywords = normalKeywords.reverse().map((str: string) => str.split("").reverse().join(""));
    let allKeywords = normalKeywords.concat(reversedKeywords);
    let totalSymbolsFound = 0;

    let temp = [];
    temp.push(horizontalLines[1]);
    
    let runeFlags : boolean[][] = [];
    for (const line of horizontalLines.slice(1))
    {
        runeFlags.push(Array(line.length).fill(false));
    }

    let idx = 0;

    for (const line of horizontalLines.slice(1))
    {
        let dubLine = line + line;
        for (let i = 0; i < dubLine.length; i++)
        {
            let currentWord = "";
            for (let j = i; j < dubLine.length; j++)
            {
                currentWord += dubLine[j];
                // does current word match a keyword?
                if (allKeywords.some((keyword: string) => keyword === currentWord))
                {
                    // console.log("found a match: " + currentWord);
                    for (let l = i; l < j + 1; l++)
                        runeFlags[idx][l % line.length] = true;
                }
                // does current word exist at start of any keywords and thus still a possible future match?
                if (!allKeywords.some((keyword: string) => keyword.startsWith(currentWord)))
                {
                    currentWord = "";
                    break;
                }
            }
        }
        idx++;
    }
    
    let verticalLines: String[] = Array(horizontalLines[1].length).fill("");
    for (let i = 0; i < horizontalLines.slice(1).length; i++)
    {
        for (let j = 0; j < horizontalLines.slice(1)[i].length; j++)
        {
            verticalLines[j] += horizontalLines.slice(1)[i][j];
        }
    }
    
    idx = 0;
    for (const line of verticalLines.slice(1))
    {
        for (let i = 0; i < line.length; i++)
        {
            let currentWord = "";
            for (let j = i; j < line.length; j++)
            {
                currentWord += line[j];
                // does current word match a keyword?
                if (allKeywords.some((keyword: string) => keyword === currentWord))
                {
                    // console.log("found a match: " + currentWord);
                    for (let l = i; l < j + 1; l++)
                        runeFlags[l][idx + 1] = true;
                }
                // does current word exist at start of any keywords and thus still a possible future match?
                if (!allKeywords.some((keyword: string) => keyword.startsWith(currentWord)))
                {
                    currentWord = "";
                    break;
                }
            }
        }
        idx++;
    }

    for (let i = 0; i < runeFlags.length; i++)
    {
        let runes = "";
        for (let j = 0; j < runeFlags[i].length; j++)
        {
            if (runeFlags[i][j])
            {
                ++totalSymbolsFound;
                runes += horizontalLines.slice(1)[i][j];
            }
        }
        console.log(runes);
    }
    console.log(totalSymbolsFound);
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
