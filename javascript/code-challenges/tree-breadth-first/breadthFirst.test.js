"use strict";

const { breadthFirst } = require("./BinaryTree"); 
const Node = require("./node");

describe("breadthFirst", () => {
  const createBT = () => {
    let tree = new Node(10);
    tree.left = new Node(5);
    tree.right = new Node(15);
    tree.left.left = new Node(3);
    tree.left.right = new Node(7);
    tree.right.left = new Node(13);
    tree.right.right = new Node(20);
    return tree;
  };

  it('should return an empty array if the tree is empty', () => {
    const tree = null;
    expect(breadthFirst(tree)).toEqual([]);
  });

  it('should return an array with elements in breadth-first order', () => {
    const tree = createBT();
    const expected = [10, 5, 15, 3, 7, 13, 20];
    expect(breadthFirst(tree)).toEqual(expected);
  });
});
