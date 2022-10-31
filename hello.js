// console.log("Hello batch #1017");
// console.log(typeof("Hello batch #1017"));
// console.log(typeof(42));
// console.log(typeof(3.14));
// console.log(typeof(true));

// console.log((42).toString());
// console.log(parseInt("42", 10)); 

// Count in binary
// 000 -> 0
// 001 -> 1
// 010 -> 2
// 011 -> 3
// 100 -> 4
// 101 -> 5
// console.log(parseInt("101", 2)); 
// console.log(parseInt("101", 10)); 

const student = "Sammy";
// let age = 76;

// console.log(`${student} is ${age} years-old.`);
// age += 1 // let var can be re-assigned!
// console.log(`${student} is ${age} years-old in a year.`);

// student = "Mo"; // const var cannot be re-assigned!
// console.log(`${student} is ${age} years-old in a year.`);

console.log(student[0]);
console.log(student.length);

console.log(student.slice(1)); // returns all char from index 1
console.log(student.slice(0, 3)); // returns all char from index 0 to index 3 excluded
console.log(student.substring(0, 3));

console.log(student.toUpperCase());
console.log(student.toLowerCase());

const students_string = "Keita, Sunny, Yumi, Fred";
console.log(students_string.split()); // not splitting and store in an array
console.log(students_string.split(", "));

const students = students_string.split(", ");

console.log(students.join()); // creates a string with comma separated values
console.log(students.join("~"));