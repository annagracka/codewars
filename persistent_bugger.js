function persistence(num, count) {
    count = count || 0;
    if (num < 10) return count;
    else {
        const splitNumbers = String(num).split('');
        const multiplyResult = splitNumbers.reduce((prev, curr) => Number(prev) * Number(curr))
        return persistence(multiplyResult, count + 1);
    }
 }


console.log(persistence(39)) //,3);
console.log(persistence(4)) //,0);
console.log(persistence(25)) //,2);
console.log(persistence(999)) //,4)