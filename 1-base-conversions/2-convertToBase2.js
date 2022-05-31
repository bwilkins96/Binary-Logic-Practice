// Convert the integers in the console.logs below to base 2

/******************************************************************************/
const convertToBase10 = require('./1-convertToBase10');

const convertToBase2 = element => {
  let binary = "0b"; let power2Arr = []; let num;

  if (typeof element === 'string') {
    num = convertToBase10(element);
  } else if (typeof element === 'number') {
    num = element;
  }

  for (let e = 0; 2 ** e <= element; e++) {
    power2Arr.unshift(2 ** e);
  }

  power2Arr.forEach( ele => {
    if (num - ele >= 0) {
      num -= ele;
      binary += "1";
    } else {
      binary += "0";
    }
  });

  return binary;
};

/******************************************************************************/

console.log('\n------\n')
console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
