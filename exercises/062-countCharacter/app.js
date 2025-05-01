function countCharacter(str, char) {
    // your code here
    return str.split(char).length - 1
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
