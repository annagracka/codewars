var moveZeros = function (arr) {
  let counter = 0;
  arr.forEach(function(elem) {if (elem === 0) counter++});
  const arrWithoutZero = arr.filter(elem => elem !== 0);
  while (counter > 0) {
    arrWithoutZero.push(0);
    counter--;
  }
  return arrWithoutZero;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
