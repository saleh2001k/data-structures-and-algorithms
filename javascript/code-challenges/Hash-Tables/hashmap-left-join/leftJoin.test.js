const leftJoin = require('./leftJoin');
const HashTable = require('../HashTable');

describe('leftJoin', () => {
    it('should set and get values correctly', () => {
        const hashTable = new HashTable(10);

        hashTable.set('happy', 'joyful');
        hashTable.set('sad', 'unhappy');
        hashTable.set('angry', 'calm');

        expect(hashTable.get('happy')).toBe('joyful');
        expect(hashTable.get('sad')).toBe('unhappy');
        expect(hashTable.get('angry')).toBe('calm');
    });

    it('should handle empty hash tables', () => {
        const hashTable1 = new HashTable();
        const hashTable2 = new HashTable();

        const result = leftJoin(hashTable1, hashTable2);

        expect(result).toEqual({});
    });

    it('should handle missing hash tables', () => {
        const result = leftJoin(null, new HashTable());

        expect(result).toBe('Enter two hash tables');
    });
});
