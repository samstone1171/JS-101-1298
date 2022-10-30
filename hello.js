// console.log("Hello 928s");
// console.log('Hello 928s');
// console.log(typeof('Hello 928s'));

// console.log((42).toString());
// console.log(parseInt("42", 10));

// // Binary example (optional)
// console.log(parseInt("101", 10));
// console.log(parseInt("101", 2));

// const student = "Carla";
// let age = 25;

// age += 1;
// console.log(age);

// // student = "Koki"; // NO RE-ASSIGNEMENT FOR CONST
// // console.log(student);

// console.log(`${student} is ${age} years-old next year.`)

const student = "cArLa";

console.log(student[0]);
console.log(student.length);

console.log(student.slice(2)); // from index 2 and after
console.log(student.slice(1, 4)); // from index 1 to index 4 excluded

console.log(student.toUpperCase());
console.log(student.toLowerCase());
// no capitalize in JS!

const students_string = "Song, Mounir, Jan, Soufiane, Josh";
const another_students_string = "Song Mounir Jan Soufiane Josh";

const students = students_string.split(", ");
console.log(students)
console.log(another_students_string.split(" "))

console.log(students.join()); // add commas by default
console.log(students.join(""));