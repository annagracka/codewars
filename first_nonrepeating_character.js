function firstNonRepeatingLetter(s) {

    let word = s.toLowerCase()

    for (char in word) {
        if (word.lastIndexOf(word[char]) === Number(char) && word.indexOf(word[char]) === Number(char)) return s[char];
    }
    return ''
  }

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('mnmen')); //'e'