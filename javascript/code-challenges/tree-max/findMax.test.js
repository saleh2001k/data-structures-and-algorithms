const BinaryTree = require("./BinaryTree");
const Node = require("./node");

describe("BinaryTree", () => {
  test("findMax should return the maximum value in the tree", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(13);
    tree.root.right.right = new Node(20);

    expect(tree.findMax()).toBe(20);
  });

  test("findMax should return the maximum value if the tree have one value", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree.findMax()).toBe(10);
  });

  test("findMax should return the maximum value if the values is negative", () => {
    let tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-5);
    tree.root.right = new Node(-15);
    tree.root.left.left = new Node(-3);
    tree.root.left.right = new Node(-7);
    tree.root.right.left = new Node(-13);
    tree.root.right.right = new Node(-20);

    expect(tree.findMax()).toBe(-3);
  });
});
