# Left Join Hash Tables

This JavaScript function `leftJoin` performs a left join operation on two hash tables. It combines data from two hash tables into a new object based on matching keys. If a key is present in the first hash table and absent in the second, it will still appear in the result.

## Algorithm

The algorithm used in the `leftJoin` function can be summarized as follows:

1. Check if both `hashTable1` and `hashTable2` are provided. If not, return a message indicating that two hash tables are required.

2. Get the keys from `hashTable1` using the `keys` method.

3. Initialize an empty result object to store the combined data.

4. Iterate through the keys obtained from `hashTable1`:
   - For each key, create an entry in the result object.
   - Populate the entry with two properties: "Synonyms" and "Antonyms."
   - The "Synonyms" property is assigned the value of `hashTable1.get(key)`.
   - The "Antonyms" property is assigned the value of `hashTable2.get(key)`.

5. After processing all keys, return the result object containing the combined data.

## Approach

The algorithm follows these steps:

1. **Input Validation**: Check if both `hashTable1` and `hashTable2` are provided. If either of them is missing, return an error message.

2. **Key Extraction**: Use the `keys` method of `hashTable1` to obtain an array of keys.

3. **Result Object**: Initialize an empty object `result` to store the combined data.

4. **Iteration**: Iterate through the keys obtained from `hashTable1`. For each key:
   - Create an entry in the `result` object with the key as the property name.
   - Populate the entry with two properties: "Synonyms" and "Antonyms."
   - Retrieve the synonym value from `hashTable1` and assign it to "Synonyms."
   - Retrieve the antonym value from `hashTable2` and assign it to "Antonyms."

5. **Return Value**: After processing all keys, return the `result` object containing the combined data.

## Efficiency

- **Time Complexity**: O(n), where n is the number of keys in `hashTable1`.
- **Space Complexity**: O(n), where n is the number of keys in `hashTable1`. The space complexity is determined by the size of the `result` object, which stores the combined data.
