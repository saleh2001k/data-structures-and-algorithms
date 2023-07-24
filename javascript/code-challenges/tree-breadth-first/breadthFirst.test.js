"use strict";

const BinaryTree = require("./BinaryTree");
const Node = require("./node");

describe("BinaryTree", () => {
  const createBT = () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(13);
    tree.root.right.right = new Node(20);
    return tree;
  };

  it('should return an empty array if the tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual([]);
  });

  it('should return an array with elements in breadth-first order', () => {
    const tree = createBT();
    const expected = [10, 5, 15, 3, 7, 13, 20];
    expect(tree.breadthFirst()).toEqual(expected);
  });
});
