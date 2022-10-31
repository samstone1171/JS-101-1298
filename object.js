const student = {
  firstName: "Hafid",
  lastName: "Qarchi"
};

console.log(student['firstName']);
student['firstName'] = "Super Hafid";
console.log(student['firstName']);

console.log(student.firstName);

const studentKey = 'firstName';
console.log(student.studentKey); // doesn't give "Super Hafid"
console.log(student[studentKey]);