const HashTable = require('../HashTable');

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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

// const tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(3);
// tree1.left.left = new TreeNode(4);
// tree1.left.right = new TreeNode(5);

// const tree2 = new TreeNode(2);
// tree2.left = new TreeNode(4);
// tree2.right = new TreeNode(6);
// tree2.left.left = new TreeNode(8);

// const result = tree_intersection(tree1, tree2);
// console.log(result);

module.exports = tree_intersection;
