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

  header.forEach((head, index) => {
    rowDict[head] = rowArr[index];
  });

  storage.push(rowDict);
});

console.log(storage);
