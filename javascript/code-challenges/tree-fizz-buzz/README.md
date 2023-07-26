# tree-fizz-buzz

### Whiteboard:

![wh](wh.png)

### Approach & Efficiency:



#### Big O:

Time complexity = O(n)
Space complexity = O(n)

### Solution:

```javascript
 function fizzBuzz(number) {
  const fizz = number % 3 === 0 ? "fizz" : "";
  const buzz = number % 5 === 0 ? "buzz" : "";

  const result = fizz || buzz ? `${fizz}${buzz}` : number.toString();

  return result;
}

class FizzBuzzTree {
  constructor() {
    this.root = null;
  }

  insert(value, parentValue) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = this.findNode(parentValue, this.root);
      if (parentNode) {
        parentNode.children.push(newNode);
      } else {
        throw new Error("Parent node not found.");
      }
    }
    newNode.results.push(fizzBuzz(value));
  }

  findNode(value, node) {
    if (!node) return null;
    if (node.value === value) return node;

    let result = null;
    for (const child of node.children) {
      result = this.findNode(value, child);
      if (result) break;
    }
    return result;
  }

  traverseDFS(node = this.root) {
    if (!node) return;
    for (const child of node.children) {
      this.traverseDFS(child);
    }
  }
}


```

### Test:

![test](image.png)