const name = "Arjun_Pathak";
const Number = 45;
console.log(`my name is ${name} and id no. is ${Number}`);

const myName = new String("Arjun Pathak");

console.log(myName.length);
console.log(myName.__proto__);
console.log(myName[4]);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.indexOf("P"));
console.log(myName.charAt(11));
console.log(myName.trim());

const newName = name.substring(0, 5);
console.log(newName);

const newName1 = name.slice(-12, 4);
console.log(newName1);

const newName2 = name.substr(0, 2);
console.log(newName2);

const url = "https://www.youtube.com/watch?v=1g2g3g4g5g6";
const newUrl = url.replace("https://www.", "");
console.log(newUrl);
const newUrl1 = url.replace("?", "??");
console.log(newUrl1);
console.log(url.includes("Youtube"));

console.log(name.split("_"));
console.log(name.bold());

let Name = "Sumant";

console.log(Name.length); //6
console.log(Name.toUpperCase()); //SUMANT
console.log(Name.toLowerCase()); //sumant
console.log(Name.trim()); //Sumant

console.log(Name.slice(1, 4)); //uma

console.log(Name.replace("Sum", "A")); //Aant
console.log(Name.split(""));

const text = "JavaScript"; //4,10
console.log(text.slice(4, 10)); // Script

const msg = "Hello World";
console.log(msg.replace("world", "Arjun Pathak")); //Hello Arjun Pathak
const user = "    Aman    ";
console.log(user.trim());
const sentence = "I love JavaScript";
console.log(sentence.toUpperCase("I love")); //
