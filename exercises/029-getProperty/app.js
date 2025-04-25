function getProperty(obj, key) {
  // your code here
  return obj[key];
}
let car = {
  model: 'Toyota'
};
console.log(getProperty(car, 'model'));