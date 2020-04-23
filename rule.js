console.log("Hello JS");
console.error("Error!");
console.warn("Warning!");

// let => values can be reassigned
// const => values are constant / values cannot be changed.
const age = 22;
console.log(age);

let score;
score = 10;
console.log(score);

// String, Numbers, Boolean, null, undefined
const name = "Zek";
// const age = 22;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

// Concatenation
console.log("My name is " + name + " and I'm " + age + " years old");

// Template String
const hello = 'My name is ${name} and I am ${age} years old'; //.. Will be checked
const hello1 = "My name is ${name} and I'm ${age} years old"; //.. This one as well
console.log(hello1);

const s = 'Hello World';
const ss = 'Technology, Computers, Server, Client, Markup_Language';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLowerCase());
console.log(s.split(''));
console.log(ss.split(', '));

// Arrays - variables that hold multiple variables

const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['Apples', 'Bannana', 'Orange'];

fruits[3] = 'Grapes';
fruits.push('Mangos');
fruits.unshift('Strawberries');

console.log(fruits.indexOf('Orange'));
console.log(fruits);

