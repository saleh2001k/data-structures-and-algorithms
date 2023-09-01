const HashTable = require("./HashTable"); // Make sure to adjust the path as needed

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(19);
  });

  it("should set a key/value in the hashtable", () => {
    hashTable.set("testKey", "testValue");
    const result = hashTable.get("testKey");
    expect(result).toBe("testValue");
  });

  it("should retrieve a value based on a key", () => {
    hashTable.set("testKey", "testValue");
    const result = hashTable.get("testKey");
    expect(result).toBe("testValue");
  });

  it("should return a list of all unique keys in the hashtable", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");
    const keys = hashTable.keys();
    expect(keys).toContain("key1", "key2", "key3");
    expect(keys.length).toBe(3);
  });

  it("should handle a collision within the hashtable", () => {
    hashTable.hash = () => 1;
    hashTable.set("collisionKey1", "value1");
    hashTable.set("collisionKey2", "value2");

    const result1 = hashTable.get("collisionKey1");
    const result2 = hashTable.get("collisionKey2");

    expect(result1).toBe("value1");
    expect(result2).toBe("value2");
  });

  it("should retrieve a value from a bucket with a collision", () => {
    hashTable.hash = () => 1;
    hashTable.set("collisionKey1", "value1");
    hashTable.set("collisionKey2", "value2");

    const result1 = hashTable.get("collisionKey1");
    const result2 = hashTable.get("collisionKey2");

    expect(result1).toBe("value1");
    expect(result2).toBe("value2");
  });

  it("should hash a key to an in-range value", () => {
    const key = "testKey";
    const hashIndex = hashTable.hash(key);
    expect(hashIndex).toBeGreaterThanOrEqual(0);
    expect(hashIndex).toBeLessThan(19);
  });
});
