// console.log("Hello #1190");
// console.log(typeof(12));
// console.log(typeof(13.4));
// console.log(typeof(true));
// console.log(typeof("hello"));

// // (12).toString()
// console.log(typeof((12).toString()));
// // parseInt("13", 10);
// console.log(typeof(parseInt("13", 10)));
// console.log(parseInt("101", 10));

// Count in binary
// 0 => 0
// 1 => 1
// 10 => 2
// 11 => 3
// 100 => 4
// 101 => 5
// console.log(parseInt("101", 2));

const student = "dOnAld"; // cannot be re-assigned
let age = 21; // can be re-assigned

console.log(`${student} is ${age} years-old.`);
age += 1;
console.log(age);
// student = "Super Donald"; //DOESN'T WORK
// console.log(student);
console.log(`${student} is ${age} years-old next year.`);

console.log(student.toLowerCase());
console.log(student.toUpperCase());
// no capitalize in JS!!

console.log(student.length);
console.log(student[0]);

console.log(student.slice(1)); //from index 1 to the end
console.log(student.slice(1, 3)); //from index 1 to index 3 excluded
console.log(student.substring(1, 3)); //from index 1 to index 3 excluded

const students_string = "Joe,Daniel,Ryo,Andrew";
const students_array = students_string.split(",");
console.log(students_array);
console.log(students_array.join()); // JS .join add commas by default!
console.log(students_array.join(""));
console.log(students_array.join("="));

console.log(`Multi
line
string`);

// console.log("Multi
// line
// string"); // DOESN'T WORK