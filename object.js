const User = {
  name: "Ankit",
  age: 22,
  city: "Delhi",
  country: "India",
};
User.age = 25;
// console.log(User.name);
// console.log(User.country);
// console.log(User["city"]);
// console.log(User.age);

const city = {
  name: "delhi",
  NoOfPopulation: 2000000,
  famousFor: "monuments",
};
// console.log(city.NoOfPopulation);

const car = {
  name: "BMW",
  model: "X5",
  year: 2020,
};
// console.log(car.name);

const flatmate = [
  {
    name: "Arjun Pathak",
    age: 24,
  },
  {
    name: "Arjun verma",
    age: 28,
  },

  {
    name: "Harsh",
    age: 20,
  },
];
console.log(flatmate[2].name);
console.log(flatmate[0].age);

const fruits = ["apple", "mango", "banana"];
console.log(fruits[1]);

const person = {
  name: "Gaurav",
  age: 24,
  city: "delhi",
  Hobbies: ["coding", "gaming", "traveling"],
};
console.log(person.Hobbies[1]);

const firstName = "firstName";
const lastName = "lastName";

const name = {
  [firstName]: "John",
  [lastName]: "Doe",
};
console.log(name.firstName);

const student = {
  name: "Gaurav",
  age: 19,
  city: "Ayodhya",
  hobbies: ["anothersMatterTaxing", "hateStudying", "traveling"],
};
console.log(student.hobbies[0]);

const users = [
  { name: "Raja", age: 21 },
  { name: "Ankit", age: 22 },
  { name: "Gaurav", age: 18 },
  { name: "Aagu", age: 20 },
];
console.log(users[2].name);

// const user = [
//   { name: "Raja", age: 21 },
//   { name: "Ankit", age: 22 },
// ];

// const user1 = user.map(
//   (user) => (user = user.name + " is " + user.age + " years old"),
// );
// console.log(user1);

// const students = [
//   { name: "Sumant", marks: 90 },
//   { name: "Aman", marks: 75 },
//   { name: "Rahul", marks: 60 },
// ];

// const stu = students.map((user) => user.name + " scored " + user.marks);

// console.log(stu);

// const products = [
//   { name: "Mobile", price: 20000 },
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
// ];
// const Items = products.map((user) => user.name + " costs ₹" + user.price);
// console.log(Items);

// const employees = [
//   { name: "Gaurav", salary: 20000 },
//   { name: "Arjun Pathak", salary: 200000 },
// ];
// const employe = employees.map(
//   (person) => person.name + " earns ₹" + person.salary,
// );
// console.log(employe);
