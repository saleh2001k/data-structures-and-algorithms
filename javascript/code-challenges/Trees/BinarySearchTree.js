"use strict";

const Node = require("./node");
const BT = require("./BinaryTree");

class BinarySearchTree extends BT {
  constructor(value) {
    super();
    if (value !== undefined) {
      this.root = new Node(value);
    } else {
      this.root = null;
    }
  }

  add(value) {
    const node = new Node(value);
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
