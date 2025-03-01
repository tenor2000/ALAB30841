// Part 2: Expanding Functionality

const inputStr1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const dataArr = inputStr1.split("\n");

let storageArr = [];

dataArr.forEach((row) => {
  let rowString = row.split(",");
  let rowArr = [rowString[0], rowString[1], rowString[2], rowString[3]];
  storageArr.push(rowArr);
});

console.log(storageArr);
