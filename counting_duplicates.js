function duplicateCount(text){
    const charCounter = {};
    let duplicatesNumber = 0;

    if (/[a-z0-9]+/gi.test(text)) {
        const chars = (text.toLowerCase()).split('');

        chars.forEach(element => !charCounter[element] ? charCounter[element] = 1 : charCounter[element]++)

        for (const [key, value] of Object.entries(charCounter)) {
            if (value > 1) {duplicatesNumber++}
        }
      return duplicatesNumber;
  }
}

console.log(duplicateCount("")) //0);
console.log(duplicateCount("abcde")) //0);
console.log(duplicateCount("aabbcde")) //2);
console.log(duplicateCount("aabBcde")) //2,"should ignore case");
console.log(duplicateCount("Indivisibility")) //1)
console.log(duplicateCount("Indivisibilities")) //2) //"characters may not be adjacent")
