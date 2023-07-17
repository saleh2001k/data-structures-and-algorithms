const BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  test("Can successfully instantiate an empty tree", () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.root).toBeNull();
  });

  test("Can successfully instantiate a tree with a single root node", () => {
    const binarySearchTree = new BinarySearchTree(10);
    expect(binarySearchTree.root.value).toBe(10);
    expect(binarySearchTree.root.left).toBeNull();
    expect(binarySearchTree.root.right).toBeNull();
  });

  test("can successfully add a left child and right child properly to a node", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    expect(binarySearchTree.root.left.value).toBe(5);
    expect(binarySearchTree.root.right.value).toBe(15);
  });

  test("Can successfully return a collection from a pre-order traversal", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(12);
    binarySearchTree.add(20);

    expect(binarySearchTree.preOrder()).toEqual([10, 5, 3, 7, 15, 12, 20]);
  });

  test("Can successfully return a collection from an in-order traversal", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(12);
    binarySearchTree.add(20);

    expect(binarySearchTree.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 20]);
  });

  test("Can successfully return a collection from a post-order traversal", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(12);
    binarySearchTree.add(20);

    expect(binarySearchTree.postOrder()).toEqual([3, 7, 5, 12, 20, 15, 10]);
  });

  // Returns true |	false for the contains method, given an existing or non-existing node value

  test("Contains method returns true for an existing node value", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(12);
    binarySearchTree.add(20);

    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(12)).toBe(true);
    expect(binarySearchTree.contains(20)).toBe(true);
  });

  test("Contains method returns false for a non-existing node value", () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(12);
    binarySearchTree.add(20);

    expect(binarySearchTree.contains(8)).toBe(false);
    expect(binarySearchTree.contains(17)).toBe(false);
    expect(binarySearchTree.contains(25)).toBe(false);
  });
});
