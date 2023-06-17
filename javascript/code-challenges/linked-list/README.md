## Linked List Implementation


![Linked List](Singlelinkedlist.png)

### Approach & Efficiency

- The approach taken is to create a `Node` class representing a single node in the linked list.
- The `LinkedList` class is implemented to manage the linked list by having a `head` property to keep track of the first node.
- The `insert` method adds a new node to the end of the list by traversing to the last node.
- The `includes` method checks if a value exists in the linked list by traversing through each node.
- The `toString` method converts the linked list into a string representation.
- The time complexity of the `insert` method is O(n) as it requires traversing to the last node.
- The time complexity of the `includes` method is also O(n) as it may require traversing the entire list.
- The space complexity is O(1) as the memory usage does not depend on the size of the linked list.

### Solution

Here's an example of running the code and seeing it in action:

```javascript
const LinkedList = require("./linked-list");

const myLinkedList = new LinkedList();
myLinkedList.insert("c");
myLinkedList.insert("b");
myLinkedList.insert("a");

console.log(myLinkedList.toString()); // Output: "c -> b -> a -> NULL"

console.log(myLinkedList.includes("b")); // Output: true
console.log(myLinkedList.includes("d")); // Output: false
```
