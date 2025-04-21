function isOldEnoughToVote(age) {
  // your code here
  if(age>=18){
    return true;
  }else{
      return false;
  }
}
let oldEnough = isOldEnoughToVote(21);
console.log(oldEnough);