// Write your function here
function computeAverageOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (arr.length != 0) {
        let avg = sum / arr.length;
        return avg;
    } else {
        return 0;
    }
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3