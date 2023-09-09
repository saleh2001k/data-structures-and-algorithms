# Tree Intersection Algorithm

## Overview

The Tree Intersection algorithm is used to find common values present in two binary trees. It utilizes a HashTable data structure to efficiently track values from the first tree and then checks if those values also exist in the second tree. This algorithm is useful in scenarios where you need to identify common elements between two sets of data represented as binary trees.

## Algorithm Approach

The algorithm follows these key steps:

1. Create a HashTable to store values from the first binary tree.
2. Traverse the first binary tree and populate the HashTable with each node's value as a key.
3. Traverse the second binary tree and check if each node's value exists in the HashTable.
4. If a value is found in both trees, it is added to the result Set.
5. Convert the result Set to an array and return it.

## Efficiency

- **Time Complexity**: The time complexity of this algorithm is O(N + M), where N is the number of nodes in the first tree, and M is the number of nodes in the second tree. This is because we need to traverse both trees once to populate the HashTable and check for common values.

- **Space Complexity**: The space complexity is O(N) for the HashTable, where N is the number of unique values in the first tree. In the worst case, if there are no common values between the trees, the space complexity is O(N).

## Solution

```javascript
function tree_intersection(tree1, tree2) {
  const hashTable = new HashTable();
  const result = new Set();

  function populateHashTable(node) {
    if (node) {
      const key = node.value.toString();
      hashTable.set(key, true);
      populateHashTable(node.left);
      populateHashTable(node.right);
    }
  }

  function checkIntersection(node) {
    if (node) {
      const key = node.value.toString();
      if (hashTable.has(key)) {
        result.add(node.value);
      }
      checkIntersection(node.left);
      checkIntersection(node.right);
    }
  }

  populateHashTable(tree1);
  checkIntersection(tree2);

  return Array.from(result);
}
```
