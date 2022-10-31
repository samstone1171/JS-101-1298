const student = "sUNny";


const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.substring(1).toLowerCase();
  return `${firstLetter}${remainder}`;
};

console.log(capitalize(student));