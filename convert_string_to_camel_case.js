function toCamelCase(str){
    if (str.length > 0) {
        const wordsList = str.toLowerCase().split(/\W|\_/gi)
        for (i in wordsList) {
            wordsList[i]  = wordsList[i].charAt(0).toUpperCase() + wordsList[i].slice(1);
            str = wordsList.join('').replace(wordsList[0].charAt(0)) //str.charAt(0));
        };
    } return str;
}


console.log(toCamelCase('')) //) //'') //"An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) //) //"theStealthWarrior") //"toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")) //) //"TheStealthWarrior") //"toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")) //) //"ABC") //"toCamelCase('A-B-C') did not return correct value")
