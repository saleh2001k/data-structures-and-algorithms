function validateBrackets(string) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const lastOpeningBracket = stack.pop();
      if (bracketPairs[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = {
  validateBrackets,
};

console.log(validateBrackets("{}")); // true
console.log(validateBrackets("{}(){}")); // true
console.log(validateBrackets("()[[Extra Characters]]")); // true
console.log(validateBrackets("(){}[[]]")); // true
console.log(validateBrackets("{}{Code}[Fellows](())")); // true
console.log(validateBrackets("[({}]")); // false
console.log(validateBrackets("(](")); // false
console.log(validateBrackets("{(})")); // false
