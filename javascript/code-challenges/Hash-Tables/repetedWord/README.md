# Repeated Word Finder

This JavaScript function `repeatedWord` finds the first repeated word in a given input string. It handles punctuation and is case-insensitive.

## Algorithm

The algorithm used in the `repeatedWord` function can be summarized as follows:

1. Split the input string into an array of words using a regular expression to match whitespace characters as separators.

2. Create a hash table to store words encountered during the iteration. The hash table is used to keep track of words that have already been seen.

3. Iterate through the array of words:
   - For each word:
     - Remove any punctuation (such as '.', ',', '!', '?') using a regular expression.
     - Convert the word to lowercase to make it case-insensitive.
     - Check if the cleaned and lowercase word exists in the hash table:
       - If it does, return the word as it is the first repeated word found.
       - If it doesn't, add the cleaned word to the hash table.

4. If the loop completes without finding any repeated words, return `null` to indicate that no repeated words were found.

### Approach
The algorithm follows these steps:

1. **Splitting the Input**: The input string is split into an array of words using a regular expression that matches whitespace characters as separators.

2. **Hash Table**: A hash table (hash map) is used to keep track of encountered words. It efficiently checks if a word has been seen before.

3. **Cleaning and Normalization**: Each word is cleaned by removing punctuation (such as '.', ',', '!', '?') and converting it to lowercase for case-insensitive comparison.

4. **Iteration and Check**: The algorithm iterates through the array of words. For each word:
   - It checks if the cleaned and lowercase word exists in the hash table.
   - If the word is already in the hash table, it is returned as the first repeated word.
   - If the word is not in the hash table, it is added to the hash table for future reference.

5. **Return Value**: If the loop completes without finding any repeated words, the algorithm returns `null` to indicate that no repeated words were found.

### Efficiency
- **Time Complexity**: O(n), where n is the number of words in the input string.
- **Space Complexity**: O(n), where n is the number of unique words in the input string.
