// ARRAY CRUD
const students = ['Phu', 'Cai', 'Joyce'];

// Create
students.push("Guy");
console.log(students);

// Read
console.log(students[1]);

// Update
students[1] = "Super Cai";
console.log(students);

// Delete
// students.splice(1,1); // remove from index 1, 1 element
students.splice(1,2); // remove from index 1, 2 elements
console.log(students);

// Iterate
// JS arrow function: () => {}
// students.forEach(() => {});
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

const sentences = students.map((student) => {
  return `${student} is amazing!`;
});

console.log(sentences);