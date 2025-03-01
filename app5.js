// Part 5 Full Circle

const storage = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let csvArr = [];

// let headerKeys = Object.keys(storage[0]);

let headerKeys = [];
for (const key in storage[0]) {
  headerKeys.push(key);
}

headerKeys = headerKeys.map((key) => {
  return key.toUpperCase();
});

csvArr.push(headerKeys.join(","));

storage.forEach((item) => {
  // const values = Object.values(item);
  let values = [];
  for (const key in item) {
    values.push(item[key]);
  }

  csvArr.push(values.join(","));
});

const csvFormat = csvArr.join("\n");

console.log(csvFormat);
