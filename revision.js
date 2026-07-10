// Variables
// Data Types
// Type Conversion
// Comparison
// String (replace, slice, trim, includes)

// Variables
let name = "Arjun";
const stu = "Arjun Pathak";
var stud = "Arjun ji";

var stud = "Atul";
console.log(name, stu, stud);

// Data types are 2 types primitive non primitive data type.
let A = "Sting";
console.log(typeof A);
let b = 45;
console.log(typeof b);
let c = true;
console.log(typeof c);
let d = null;
console.log(typeof d);
let e;
console.log(typeof e);
let f = 2234444443n;
console.log(typeof f);
let g = Symbol("123");
console.log(typeof g);
const list = [Array, name, 12];
console.log(typeof list);
const obj = {
  name: "Arjun Pathak",
  age: 23,
};
console.log(typeof obj);

function stud1() {
  console.log("Pathak ji");
}
console.log(typeof stud1);
console.log(stud1);

// type conversion
let n = 7;
let m = "5";
let o = n + m;
console.log(o);
console.log(typeof o);

//Comparison
console.log(5 === "5");
console.log(0 >= null);

// string (replace, slice, trim, includes)

const person = new String(" Amit");
console.log(person.includes("A"));
console.log(person.replace("Amit", "Anay"));
console.log(person.slice(0, 3));
console.log(person.trim());
