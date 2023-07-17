function validateBrackets(string) {
  const stack = [];

  const brackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "{" || string[i] === "(" || string[i] === "[") {
      stack.push(string[i]);
    } else if (string[i] === "}" || string[i] === ")" || string[i] === "]") {
      if (stack[stack.length - 1] === brackets[string[i]]) {
        stack.pop();
      } else {
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
