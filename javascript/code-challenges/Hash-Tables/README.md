# Hash Table 

![alt](hash.gif)


## Hash Table Overview

The provided code implements a basic hash table with the following methods:

- `hash(key)`: Calculates a hash index for a given key based on ASCII values of its characters.
- `set(key, value)`: Sets a key-value pair in the hash table.
- `get(key)`: Retrieves the value associated with a key.
- `has(key)`: Checks if a key exists in the hash table.
- `keys()`: Retrieves all unique keys in the hash table.

## Approach & Efficiency

1. **`hash(key)`**
   - Time Complexity: O(n), where n is the length of the key.

2. **`set(key, value)`**
   - Average-Case Time Complexity: O(1) for setting a key-value pair.
   - Worst-Case Time Complexity: O(n) in case of many collisions at the same index.

3. **`get(key)`**
   - Average-Case Time Complexity: O(1) for retrieving a value.
   - Worst-Case Time Complexity: O(n) in case of many collisions at the same index.

4. **`has(key)`**
   - Average-Case Time Complexity: O(1) for key existence check.
   - Worst-Case Time Complexity: O(n) in case of many collisions at the same index.

5. **`keys()`**
   - In the worst case (when all keys are unique), it can be O(n), where n is the total number of key-value pairs in the hash table.

Overall, the efficiency of the hash table operations heavily depends on the quality of the hash function and the degree of collisions. In the average case, with a good hash function, these operations are efficient (O(1)). However, in the worst case, when there are many collisions, the efficiency can degrade to O(n) for some operations. Choosing an appropriate hash function and handling collisions effectively are essential for maintaining good performance in a hash table.
