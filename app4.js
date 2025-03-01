// Part 4 Transforming Data

let storage = [
  {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41",
  },
  {
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: "19",
  },
  {
    id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age: "58",
  },
  {
    id: "98",
    name: "Bill",
    occupation: "Doctor’s Assistant",
    age: "26",
  },
];

const removedElement = storage.pop();

const insertElement = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
};

storage.splice(1, 0, insertElement);

const endElement = {
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
};

storage.push(endElement);

console.log(storage);

let ageTotals = 0;

storage.forEach((item) => {
  ageTotals += parseInt(item.age);
});

const avgAge = ageTotals / storage.length;

console.log("Average Age: " + avgAge);
