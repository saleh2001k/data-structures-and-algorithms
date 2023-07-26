// "use strict";

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//     this.results = [];
//   }
// }

// function fizzBuzz(number) {
//   const fizz = number % 3 === 0 ? "fizz" : "";
//   const buzz = number % 5 === 0 ? "buzz" : "";

//   const result = fizz || buzz ? `${fizz}${buzz}` : number.toString();

//   return result;
// }

// class FizzBuzzTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value, parentValue) {
//     const newNode = new Node(value);

//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       const parentNode = this.findNode(parentValue, this.root);
//       if (parentNode) {
//         parentNode.children.push(newNode);
//       } else {
//         throw new Error("Parent node not found.");
//       }
//     }
//     newNode.results.push(fizzBuzz(value));
//   }

//   findNode(value, node) {
//     if (!node) return null;
//     if (node.value === value) return node;

//     let result = null;
//     for (const child of node.children) {
//       result = this.findNode(value, child);
//       if (result) break;
//     }
//     return result;
//   }

//   traverseDFS(node = this.root) {
//     if (!node) return;
//     for (const child of node.children) {
//       this.traverseDFS(child);
//     }
//   }
// }

// module.exports = FizzBuzzTree;


"use strict";

function createNode(value) {
  return {
    value: value,
    children: [],
    results: [],
  };
}

function fizzBuzz(number) {
  const fizz = number % 3 === 0 ? "fizz" : "";
  const buzz = number % 5 === 0 ? "buzz" : "";

  const result = fizz || buzz ? `${fizz}${buzz}` : number.toString();

  return result;
}

function FizzBuzzTree() {
  const tree = {
    root: null,

    insert(value, parentValue) {
      const newNode = createNode(value);

      if (!tree.root) {
        tree.root = newNode;
      } else {
        const parentNode = tree.findNode(parentValue, tree.root);
        if (parentNode) {
          parentNode.children.push(newNode);
        } else {
          throw new Error("Parent node not found.");
        }
      }
      newNode.results.push(fizzBuzz(value));
    },

    findNode(value, node) {
      if (!node) return null;
      if (node.value === value) return node;

      let result = null;
      for (const child of node.children) {
        result = tree.findNode(value, child);
        if (result) break;
      }
      return result;
    },

    traverseDFS(node = tree.root) {
      if (!node) return;
      for (const child of node.children) {
        tree.traverseDFS(child);
      }
    },
  };

  return tree;
}

module.exports = FizzBuzzTree;
