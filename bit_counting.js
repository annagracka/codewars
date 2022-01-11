var countBits = function(n) {

    let binaryNum = []
    let result = n;

    if (n === 0) return 0;

    while (result !== 0) {

        if (result % 2 !== 0) {
            result = Math.floor(result / 2);
            binaryNum.unshift(1);
        }

        else {
            result = (result / 2);
            binaryNum.unshift(0);
        }
    }
    return binaryNum.reduce((prev, curr) => prev + curr);
  };

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2
