"use strict";

const LinkedList = require("./linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    const ASCIISum = key.split("").reduce((accumulator, current) => {
      return accumulator + current.charCodeAt(0);
    }, 0);

    return (ASCIISum * 599) % this.size;
  }

  set(key, value) {
    const hashedKey = this.hash(key);

    if (!this.map[hashedKey]) {
      this.map[hashedKey] = new LinkedList();
    }
    this.map[hashedKey].add({ [key]: value });
  }

  get(key) {
    const hashedKey = this.hash(key);
    if (!this.map[hashedKey]) {
      return `Key not found in the hash table`;
    }

    const found = this.map[hashedKey].find(key);
    return found;
  }

  has(key) {
    const hashedKey = this.hash(key);
    if (!this.map[hashedKey]) {
      return false;
    }
    const found = this.map[hashedKey].find(key);

    return !!found;
  }

  keys() {
    const allKeys = [];
    this.map.forEach((bucket) => {
      if (bucket) {
        const keys = bucket.getKeys();
        allKeys.push(...keys);
      }
    });
    return allKeys;
  }
}

module.exports = HashTable;
