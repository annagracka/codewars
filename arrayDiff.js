function arrayDiff(a, b) {
const unique = a.filter(element => !b.includes(element));
    a = unique
   return a;
}

console.log(arrayDiff([], [4,5])) //[], "a was [], b was [4,5]");
console.log(arrayDiff([1,3,4,2], [2,3,1])) //[4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], [])) //[1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,2,3], [1,2])) //[3], "a was [1,2,3], b was [1,2]")