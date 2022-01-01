function order(words){
    const wordsList = words.split(' ');
    const sortedWords = [];
    for (let i = 1; i <= wordsList.length; i++) {
        for (let j = 0; j < wordsList.length; j++) {
            if (wordsList[j].includes(i)) {
                sortedWords.push(wordsList[j])
            }
        }
    }
    return sortedWords.join(' ');
  }


console.log(order("is2 Thi1s T4est 3a")) //, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("")) //, "", "empty input should return empty string" )