// In js have many data types, but the most common ones are:
// Number, String, Boolean, symbol, null, undefined, bigint, object, array, function
// Data types are divided into two categories:
// 1. Primitive data types: Number, String, Boolean, symbol, null, undefined, bigint
// 2. Non-primitive data types: object, array, function

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     Stack Memory & Heap Memory

// Stack Memory: It is used to store primitive data types (number, string, boolean, null, undefined, symbol, bigint)
// they are only copied by value, if we change the value of one variable, it will not change the value of other variable.

// Heap Memory: It is used to store non-primitive data types (object, array, function)
// they are share the same memory location in heap memory, if we change the value of one variable, it will change the value of other variable also.

let name1 = "Sumant";
let name2 = name1;

name2 = "Arjun Pathak";

console.log(name1);
console.log(name2);

const user1 = {
  name: "Sumant",
};

const user2 = user1;

user2.name = "Arjun";

console.log(user1.name);
console.log(user2.name);

const user3 = {
  name: "Atul",
  age: 30,
};
const user4 = user3;
user4.age = 31;
console.log(user3);
console.log(user4);
