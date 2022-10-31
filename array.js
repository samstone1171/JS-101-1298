// ARRAY CRUD
const students = ['Fred', 'Tash', 'Erika'];

// Create
students.push("Patrik")
console.log(students);

// Read
console.log(students[1]);

// Update
students[1] = "Super Tash";
console.log(students);

// Delete
students.splice(1,1); // removes 1 element from element of index one
// students.splice(1,2); // removes 2 elements from element of index one
console.log(students);

// Iterate
// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});


// Side note: Cut strings into multi line
console.log(`Multi line
string!`);

// That doesn't work:
// console.log('Multi line
// string!');