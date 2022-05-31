// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const convertToBase10 = require('./1-convertToBase10');


const convertToBase16 = element => {
  let hexadecimal = "0x"; let power2Arr = []; let num;

  if (typeof element === 'string') {
    num = convertToBase10(element);
  } else if (typeof element === 'number') {
    num = element;
  }

  for (let e = 0; 16 ** e <= element; e++) {
    power2Arr.unshift(16 ** e);
  }

  power2Arr.forEach( ele => {
    if (num / ele >= 0) {
      let times = Math.floor(num / ele)
      num -= (ele * times);

      if (times === 15) {hexadecimal += "f"}
      else if (times === 14) {hexadecimal += "e"}
      else if (times === 13) {hexadecimal += "d"}
      else if (times === 12) {hexadecimal += "c"}
      else if (times === 11) {hexadecimal += "b"}
      else if (times === 10) {hexadecimal += "a"}
      else {hexadecimal += times.toString();}

    } else {
      hexadecimal += "0";
    }
  });

  return hexadecimal;
};

/******************************************************************************/
console.log('\n------\n')
console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
