const student = "kArThika";

const capitalize = (word) => {
  const firstLetter = word[0].toUppercase();
  const remainder = word.substring(1).toLowercase();
  return `${firstLetter}${remainder}`;
};
console.log(capitalize(student));
const myName = capitalize(student);
console.log(myName);
