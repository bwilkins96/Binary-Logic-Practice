// Translate the binary sequences in the
// console.logs below to 8-bit trans strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  let translated = ""; let trans;
  const bitArr = binaryStringToArray(str);

  for (let i = 0; i < bitArr.length; i++) {
    if (bitArr[i] === "01000001") {trans = 'A'}
    else if (bitArr[i] === "01000010") {trans = 'B'}
    else if (bitArr[i] === "01000011") {trans = 'C'}

    else if (bitArr[i] === "01100001") {trans = 'a'}
    else if (bitArr[i] === "01100010") {trans = 'b'}
    else if (bitArr[i] === "01100011") {trans = 'c'}

    else if (bitArr[i] === "01001000") {trans = 'H'}
    else if (bitArr[i] === "01100101") {trans = 'e'}
    else if (bitArr[i] === "01101100") {trans = 'l'}
    else if (bitArr[i] === "01101111") {trans = 'o'}

    else if (bitArr[i] === "00101100") {trans = ','}
    else if (bitArr[i] === "00100000") {trans = ' '}

    else if (bitArr[i] === "01110111") {trans = 'w'}
    else if (bitArr[i] === "01110010") {trans = 'r'}
    else if (bitArr[i] === "01100100") {trans = 'd'}
    else if (bitArr[i] === "00100001") {trans = '!'}

    translated += trans;
  }

  return translated;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
