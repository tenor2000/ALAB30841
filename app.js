// Part 1 Refactoring Old Code

// Used String.methods() with permission... makes easy and efficient.

const inputStr1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const dataArr = inputStr1.split("\n");

// Old Code

// for (const row of dataArr) {
//   console.log(
//     row.split(",")[0],
//     row.split(",")[1],
//     row.split(",")[2],
//     row.split(",")[3]
//   );
// }

dataArr.forEach((row) => {
  let rowArr = row.split(",");
  console.log(rowArr[0], rowArr[1], rowArr[2], rowArr[3]);
});
