const HashTable = require("../HashTable");

function repeatedWord(inputStr) {
  const words = inputStr.split(/\s+/);
  const wordTable = new HashTable(words.length);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const cleanedWord = word.replace(/[.,?!]/g, "").toLowerCase();

    if (wordTable.has(cleanedWord)) {
      return cleanedWord;
    } else {
      wordTable.set(cleanedWord, true);
    }
  }

  return null;
}

module.exports = repeatedWord;
