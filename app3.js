// Part 3 Transforming Data

const inputStr1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const dataArr = inputStr1.split("\n");

let header = dataArr.shift().toLowerCase().split(",");
//lowercase

let storage = [];

dataArr.forEach((row) => {
  let rowArr = row.split(",");
  let rowDict = {};

  rowDict[header[0]] = rowArr[0];
  rowDict[header[1]] = rowArr[1];
  rowDict[header[2]] = rowArr[2];
  rowDict[header[3]] = rowArr[3];

  storage.push(rowDict);
});

console.log(storage);
