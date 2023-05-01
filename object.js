const student = {
  firstName: "Yin",
  lastName: "Lee" 
};

// READ 
console.log(student['firstName']);
console.log(student.firstName);

// WRITE
student.firstName = "Super Yin";
console.log(student);

// Caution point!
const myKey = 'firstName';
console.log(student.myKey); // BAD: returns undefined!!
console.log(student[myKey]); // GOOD