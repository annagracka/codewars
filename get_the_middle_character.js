function getMiddle(s) {
    return (s.length % 2 !== 0
        ? s.substring(s.length / 2, s.length / 2 + 1)
        : s.substring(s.length / 2 - 1, s.length / 2 + 1))
}


console.log(getMiddle("test")) //,"es");
console.log(getMiddle("testing")) //,"t");
console.log(getMiddle("middle")) //,"dd");
console.log(getMiddle("A")) //,"A");