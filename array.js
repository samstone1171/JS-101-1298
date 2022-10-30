// ARRAY CRUD
const students = ['Ayaka', 'Alison', 'Andre'];

// Create
students.push("Alex");
console.log(students);

// Read
console.log(students[1]);

// Update
students[1] = "Super Alison";
console.log(students);

// Delete
// students.splice(1, 2); // delete 2 elements from index 1
// students.splice(3, 1); // delete the elements of index 3
// students.splice(1); // delete all elements from index 1
console.log(students);

// Iterate
// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// students.forEach((student, index, array) => {
//   console.log(`${index + 1} - ${student} is amazing! (selected in ${array})`);
// });


// Side note: Cut strings into multi line

// console.log("I am 
//   multi line"); NOT OK

console.log(`I am 
multi line`);a