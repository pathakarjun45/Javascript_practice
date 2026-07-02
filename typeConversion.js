// In type Conversion we can convert one data type to another data type and it is of two types
// 1. Implicit type conversion
// 2. Explicit type conversion
//example of Implicit type conversion
let a = 5;
let b = "10";
let c = a + b;
console.log(c);
console.log(typeof c);

// example of Explicit type conversion
let x = "100";
let conX = Number(x);
console.log(conX);
console.log(typeof conX);

let num = "45abc";

let conNumber = Number(num);
console.log(conNumber);
console.log(typeof conNumber);

let str = 234;
let conString = String(str);

console.log(typeof conString);
console.log(conString);

let bool = false;
let conBool = Number(bool);
console.log(conBool);
console.log(typeof conBool);

let date = new Date();

const dateString = String(date);
console.log(typeof dateString);
console.log(dateString);

// example of parseInt and parseFloat
let intString = "123.45";
let parsedInt = parseInt(intString);
console.log(typeof parsedInt);
console.log(parsedInt);

let floatString = "123.45";
let parsedFloat = parseFloat(floatString);
console.log(typeof parsedFloat);
console.log(parsedFloat);

console.log(Number("123")); // 123 because it is a valid number string.
console.log(Number("abc")); // NaN because it is not a valid number string.

console.log(String(123)); // "123" because it converts number to string.
console.log(String(1234454.345)); // "1234454.345" because it converts number to string.

console.log(Boolean(1)); // true because 1 is a truthly value
console.log(Boolean(0)); // false because 0 is a falsy value

console.log(Boolean("")); // false because empty sring is a falsy value.
console.log(Boolean("Sumant")); // true because non-empty string is a truthly value.

console.log(Number(true)); // 1 because true is a truthy value
console.log(Number(false)); // 0 because false is a falsy value
console.log(String(null)); // "null" because it converts null to string

console.log(Boolean(undefined)); // false because it is a falsy value.

console.log(Number("")); // 0 because empty sring is a zero value.

//################################## Operations #########################################

let num1 = 10;
let num2 = 30;
let add = num1 + num2;
console.log(add);
console.log(typeof add);

console.log("10" + 20); // 1020 because it is a string concatenation
console.log(10 - 5); // 5 because it is a numeric subtraction
console.log(10 * 5); // 50 because it is a numeric multiplication
console.log(10 % 5); // 0 because it is a numeric modulus

console.log(1 + true); // 2 because true is converted to 1 and then added to 1
console.log(1 + false); // 1 because false is converted to 0 and then added to 1

console.log(3 + ((4 * 5) % 3)); // 5 because multiplication and modulus have higher precedence than addition
console.log(3 + (4 * 5) / 2); // 13 because multiplication and division have higher precedence than addition

console.log(+""); // 0 because empty string is converted to 0
console.log(+"123"); // 123 because string is converted to number
console.log(+"abc"); // NaN because string is not a valid number

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101 because it is incremented by 1
gameCounter--;
console.log(gameCounter); // 100 because it is decremented by 1

let e = 5;

console.log(e++); // 5 because it is post-incremented
console.log(e); // 6 because it is incremented by 1

//Postfix operator (e++) returns the value before incrementing, while the prefix operator (++d) returns the value after incrementing.
//Examples

let d = 5;

console.log(++d); // 6 because it is pre-incremented
console.log(d); // 6 because it is incremented by 1

let f = 5;
let g = 9;
console.log(f++);
console.log(f);
console.log(++g);
console.log(g);
