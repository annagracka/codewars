function isIsogram(str){
    let uniqueLetters = true;
    str = str.toLowerCase()
    str.split('').forEach((letter, index) => {
        if (str.lastIndexOf(letter) !== index) uniqueLetters = false;;
    })
    return uniqueLetters;
  }

console.log(isIsogram("Dermatoglyphics")) //true );
console.log(isIsogram("isogram")) //true );
console.log(isIsogram("aba")) //false) //"same chars may not be adjacent" );
console.log(isIsogram("moOse")) //false) //"same chars may not be same case" );
console.log(isIsogram("isIsogram")) //false );
console.log(isIsogram("")) //true) //"an empty string is a valid isogram" );