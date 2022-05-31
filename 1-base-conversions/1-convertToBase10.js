// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let base10 = 0;
  let fromRight = 0;

  if (str.includes("0b")) {
    let binary = str.slice(2);

    for (let i = binary.length - 1; i >= 0; i--) {
      let num = Number(binary[i]);

      base10 += (2 ** fromRight) * num;

      fromRight++;
    }
  }

  if (str.includes("0X") || str.includes("0x")) {
    let hexadecimal = str.slice(2);

    for (let i = hexadecimal.length - 1; i >= 0; i--) {
      let num;
      if (hexadecimal[i].toLowerCase() === "f") {num = 15}
      else if (hexadecimal[i].toLowerCase() === "e") {num = 14}
      else if (hexadecimal[i].toLowerCase() === "d") {num = 13}
      else if (hexadecimal[i].toLowerCase() === "c") {num = 12}
      else if (hexadecimal[i].toLowerCase() === "b") {num = 11}
      else if (hexadecimal[i].toLowerCase() === "a") {num = 10}
      else { num = Number(hexadecimal[i])}

      base10 += (16 ** fromRight) * num;

      fromRight++;
    }
  }

  return base10;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914

module.exports = convertToBase10;
