function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}
let obj = {
  age: 18
};

console.log(isPersonOldEnoughToVote(obj));