# Tree max

### Whiteboard:

![wh](wh.png)

### Approach & Efficiency:

The provided code defines a tree data structure called FizzBuzzTree. The tree consists of nodes, and each node contains a value, a list of children nodes, and a list to store the results of the "FizzBuzz" operation. The "FizzBuzz" operation is a function that, given a number, returns "fizz" if the number is divisible by 3, "buzz" if divisible by 5, "fizzbuzz" if divisible by both 3 and 5, and the number itself as a string if none of these conditions are met.

The FizzBuzzTree class allows you to insert new nodes with values, setting them as children of existing nodes. The tree can be traversed using Depth-First Search (DFS) to process and retrieve the results of the "FizzBuzz" operation for each node.

#### Big O:

Time complexity = O(n)
Space complexity = O(n)

### Solution:

```javascript
 breadthFirst() {
    if (!this.root) {
      return []; //An empty array if the tree is empty
    }
    let result = [];
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
```

### Test:

![test](image.png)
