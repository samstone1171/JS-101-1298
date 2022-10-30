const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(student['firstName']);
student['firstName'] = "Super Boris";
console.log(student)

console.log(student.firstName);

const myKey = 'firstName';

console.log(student.myKey); // DOESNT NOT WORK
console.log(student[myKey]); // DOES WORK