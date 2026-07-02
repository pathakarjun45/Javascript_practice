const user = [
  { name: "Raja", age: 21 },
  { name: "Ankit", age: 22 },
];

const user1 = user.map(
  (user) => (user = user.name + " is " + user.age + " years old"),
);
console.log(user1);

const students = [
  { name: "Sumant", marks: 90 },
  { name: "Aman", marks: 75 },
  { name: "Rahul", marks: 60 },
];

const stu = students.map((user) => user.name + " scored " + user.marks);

console.log(stu);

const products = [
  { name: "Mobile", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
];
const Items = products.map((user) => user.name + " costs ₹" + user.price);
console.log(Items);

const employees = [
  { name: "Gaurav", salary: 20000 },
  { name: "Arjun Pathak", salary: 200000 },
];
const employe = employees.map(
  (person) => person.name + " earns ₹" + person.salary,
);
console.log(employe);

const Employees = [
  { name: "Aman", salary: 25000 },
  { name: "Rahul", salary: 35000 },
  { name: "Sumant", salary: 30000 },
];
// const employe = employees.map((income)=> ${income.name}+"earns ₹"+ ${income.salary})
const Employe = Employees.map(
  (income) => income.name + " earns ₹" + income.salary,
);
console.log(Employe);

const Products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
];
const proName = Products.map((id) => id.name);
console.log(proName);
const proPrice = Products.filter((rate) => rate.price > 1000);
console.log(proPrice);
