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
    console.log("******************** Round: ", roundNum + 1);
    let clapper = columns[roundNum % columns.length].shift();
    if (clapper === undefined) {
      return;
    }

    let nextColumn = columns[(roundNum + 1) % columns.length];
    let isLeftSide: boolean = Math.floor(clapper / nextColumn.length) % 2 === 0;
    let offSet = clapper % nextColumn.length;
    if (isLeftSide) {
      nextColumn.splice(offSet - 1, 0, clapper);
      console.log("is left side!");
    } else {
      nextColumn.splice(nextColumn.length - offSet + 1, 0, clapper);
      console.log("is right side!");
    }
    console.log(nextColumn);

    // get first number of each column as a string with no spaces
    let result = columns.map((column) => column[0]).join("");
    console.log(result);

    ++roundNum;
  }
}

function part2() {
  let input = input2;
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
