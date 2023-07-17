function validateBrackets(string) {
  const stack = [];
  const openingBr = ["(", "[", "{"];
  const closingBr = [")", "]", "}"];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (openingBr.includes(char)) {
      stack.push(char);
    } else if (closingBr.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
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
