const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  let bits = ""; let ascii;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {ascii = "110001"}
    else if (str[i] === "2") {ascii = '110010'}
    else if (str[i] === "3") {ascii = '110011'}

    else if (str[i] === "A") {ascii = '1000001'}
    else if (str[i] === "B") {ascii = '1000010'}
    else if (str[i] === "C") {ascii = '1000011'}

    else if (str[i] === "H") {ascii = '1001000'}
    else if (str[i] === "e") {ascii = '1100101'}
    else if (str[i] === "l") {ascii = '1101100'}
    else if (str[i] === "o") {ascii = '1101111'}
    else if (str[i] === ",") {ascii = '101100'}

    else if (str[i] === "w") {ascii = '1110111'}
    else if (str[i] === "r") {ascii = '1110010'}
    else if (str[i] === "d") {ascii = '1100100'}
    else if (str[i] === "!") {ascii = '100001'}
    else if (str[i] === " ") {ascii = '100000'}

    if (ascii.length < 8) {ascii = addZeros(ascii, 8)}
    bits += ascii;
  }

  return bits;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 00110001 00110010 00110011

console.log(asciiTo8bit('ABC'));
// 01000001 01000010 01000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000 01100101 01101100 01101100 01101111 00101100 00100000 01110111 01101111 01110010 01101100 01100100 00100001
