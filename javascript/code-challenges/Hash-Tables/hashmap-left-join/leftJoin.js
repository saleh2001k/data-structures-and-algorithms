'use strict';

const Hash = require('../HashTable');

function leftJoin(hashTable1, hashTable2) {
    if (!hashTable1 || !hashTable2) return 'Enter two hash tables';

    const keys1 = hashTable1.keys();
    const result = {};

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        result[key] = {
            Synonyms: hashTable1.get(key),
            Antonyms: hashTable2.get(key)
        };
    }

    return result;
}


module.exports = leftJoin;