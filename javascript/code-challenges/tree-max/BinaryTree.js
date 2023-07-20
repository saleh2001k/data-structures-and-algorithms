"use strict";

const Node = require("./node");
class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  
  // the method to find the maximum value in the tree
  findMax() {
    let max = this.root.value;
    let traverse = (node) => {
      if (node.value > max) max = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }
}



//log some examples for the findMax methode 


let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(13);
tree.root.right.right = new Node(20);


console.log(tree.findMax());

module.exports = BinaryTree;
