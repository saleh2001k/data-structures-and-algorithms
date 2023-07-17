# stack-queue-brackets

### Whiteboard:

![wh](wh.png)

### Approach & Efficiency:

This code is designed to match and pair opening and closing brackets. It does this by keeping track of their index numbers and connecting them when a matching pair is found. If all brackets are successfully paired and removed from the main stack, it indicates that they have been joined together. However, if there are any remaining brackets in the stack, it means there are some brackets that are not paired and are considered "lonely."

#### Big O:

The time complexity is O(N)
The space complexity is O(N)

### Solution:

```javascript
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
```

### Test:

![test](image-1.png)