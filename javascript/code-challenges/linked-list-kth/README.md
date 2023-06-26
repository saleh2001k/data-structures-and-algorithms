# Challenge Title
k-th value from the end of a linked list.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Whiteboard](./whb.png)

## Approach & Efficiency
- The approach I took is to use two pointers, `current` and `runner`.
- The `runner` pointer will be moved `k` places ahead of the `current` pointer.
- Then, both pointers will move together until the `runner` pointer reaches the end of the linked list.
- The `current` pointer will be pointing to the `k`th node from the end.
- The time complexity of this approach is O(N), where N is the length of the linked list, as we need to traverse the list once.
- The space complexity is O(1) as we are using a constant amount of extra space for the pointers.

## Solution
To run the code and see examples of it in action, you can follow these steps:

1. Create a new instance of the LinkedList class.
2. Add nodes to the linked list using the `append` or `prepend` methods.
3. Call the `kthFromEnd` method on the linked list instance, passing the desired value of `k` as a parameter.
4. The method will return the value of the node that is `k` places from the tail of the linked list.

Here's an example of how to use the code:

```javascript
// linkedlist.js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // implementation
  }

  kthFromEnd(k) {
    // implementation
  }
}

module.exports = { LinkedList, Node };
```
You can also add additional test cases to cover different scenarios, such as when k is greater than the length of the linked list, when k and the length of the list are the same, when k is not a positive integer, and when the linked list has a size of 1.


```javascript
// linkedlist.test.js
const { LinkedList, Node } = require('./linkedlist');

describe('LinkedList', () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
  });

  describe('kthFromEnd', () => {
    test('returns the value k places from the tail of the linked list', () => {
      // test cases
    });

    test('throws an error when k is greater than the length of the linked list', () => {
      // test cases
    });

    // additional test cases
  });
});
```
Remember to replace the // implementation comments with the actual code for the append and kthFromEnd methods in the LinkedList class, and add appropriate test cases in the linkedlist.test.js file.
