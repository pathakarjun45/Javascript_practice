// In js have many data types, but the most common ones are:
// Number, String, Boolean, symbol, null, undefined, bigint, object, array, function

let numbers = 45;
let Srings = "Rohit Sharma";
let Booleans = true;
let Symbols = Symbol("id");
let nulls = null;
let undefineds;
let bigInts = 9007199254740991n;
let objects = { name: "Rohit", age: 37 };
let arrays = [1, 2, 3, 4, 5];
let functions1 = function () {
  console.log("Hello Mummy");
};

let skills = ["HTML", "CSS", "JavaScript"];
let user = {
  name: "Sumant",
  age: 24,
};
console.log(typeof skills);
console.log(typeof user);
console.log(typeof numbers);
console.log(typeof Srings);
console.log(typeof Booleans);
console.log(typeof Symbols);
console.log(typeof nulls);
console.log(typeof undefineds);
console.log(typeof bigInts);
console.log(typeof objects);
console.log(typeof arrays);
console.log(typeof functions1);

let num = 45;
const nursingId = Symbol("id");
let Bf = {
  name: "Arjun Verma",
  age: 27,
  id: nursingId,
};
let amanchutiya = true;
let name = amanchutiya;
let bigints = 89674536748678945678n;

console.log(name ? "Aman is a chutiya" : "Aman is not a chutiya");
console.log(typeof num);
console.log(typeof nursingId);
console.log(typeof Bf);
console.log(typeof amanchutiya);
console.log(typeof bigints);
