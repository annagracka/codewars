function squareDigits(num){
    return Number(String(num).split('').map(element => Number(element)**2).join(''));
  }

console.log(squareDigits(654));
console.log(squareDigits(4));
console.log(squareDigits(354));
console.log(squareDigits(123));
console.log(squareDigits(9876543));
