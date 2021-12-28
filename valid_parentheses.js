function validParentheses(parens) {

    while (parens.length > 0) {

            if (parens.startsWith(")") || parens.endsWith("(") || parens.length % 2 !== 0) return false;
            
            const brackets = /(\(\))/g;
            parens = parens.replace(brackets, '');

    } return true;
}

console.log((validParentheses( "(" ))) //, false));
console.log(validParentheses( ")" )) //, false));
console.log(validParentheses( "" )) //, true));
console.log(validParentheses( "(())((()())())" )) //, true));
console.log(validParentheses( "())" )) //, false));
