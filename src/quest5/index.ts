import { input1, input2, input3 } from "./input";

function part1() {
  let input = input1;

  const rows = input
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const columns: number[][] = [];
  for (let i = 0; i < rows[0].length; i++) {
    const column: number[] = rows.map((row) => row[i]);
    columns.push(column);
  }

  let roundNum = 0;
  let totalRounds = 10;

  while (roundNum < totalRounds) {
    let clapper = columns[roundNum % columns.length].shift();
    if (clapper === undefined) {
      return;
    }

    let nextColumn = columns[(roundNum + 1) % columns.length];
    let divisor = Math.floor(clapper / nextColumn.length);
    let modulo = clapper % nextColumn.length;
    let isLeftSide = (((divisor % 2 === 0 && modulo != 0) || ( divisor % 2 != 0 && modulo === 0)) ? true : false);
    
    let offSet = clapper % nextColumn.length;
    if (isLeftSide) {
      nextColumn.splice(offSet - 1, 0, clapper);
    } else {
      nextColumn.splice(offSet + 1, 0, clapper);
    }

    let result = parseInt(columns.map((column) => column[0]).join(""));
    console.log(result);

    ++roundNum;
  }
}

function part2() {
  let input = input2;

  const rows = input
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const columns: number[][] = [];
  for (let i = 0; i < rows[0].length; i++) {
    const column: number[] = rows.map((row) => row[i]);
    columns.push(column);
  }

  let roundNum = 0;
  let frequencyMap = new Map<number, number>();

  while (true) {
    let clapper = columns[roundNum % columns.length].shift();
    if (clapper === undefined) {
      return;
    }

    let nextColumn = columns[(roundNum + 1) % columns.length];
    let divisor = Math.floor(clapper / nextColumn.length);
    let modulo = clapper % nextColumn.length;
    let isLeftSide = (((divisor % 2 === 0 && modulo != 0) || ( divisor % 2 != 0 && modulo === 0)) ? true : false);
    
    let offSet = clapper % nextColumn.length;
    if (isLeftSide) {
      nextColumn.splice(offSet - 1, 0, clapper);
    } else {
      nextColumn.splice(offSet + 1, 0, clapper);
    }

    // get first number of each column as a string with no spaces
    let result = parseInt(columns.map((column) => column[0]).join(""));

    if (frequencyMap.has(result) && frequencyMap.get(result) !== undefined)
    {
      frequencyMap.set(result, frequencyMap.get(result)! + 1);
      if (frequencyMap.get(result) == 2024)
      {
        console.log(result * (roundNum + 1));
        break;
      }
    }
    else
      frequencyMap.set(result, 1);

    ++roundNum;
  }
}

function part3() {
  let input = input3;
}

const partNum = process.argv[2];
switch (partNum) {
  case "part1":
    part1();
    break;
  case "part2":
    part2();
    break;
  case "part3":
    part3();
    break;
  default:
    console.log("Invalid part number");
}
