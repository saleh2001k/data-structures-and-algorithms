const fizzBuzzTree = require('./fizzBuzzTree'); 

describe('FizzBuzzTree', () => {
  it('should insert and traverse the tree correctly', () => {
    const myTree = new fizzBuzzTree();

    myTree.insert(1, null);
    myTree.insert(2, 1);
    myTree.insert(3, 1);
    myTree.insert(4, 2);
    myTree.insert(5, 2);
    myTree.insert(6, 3);
    myTree.insert(7, 3);
    myTree.insert(15, 5);

    expect(myTree.root.value).toBe(1);
    expect(myTree.root.children[0].value).toBe(2);
    expect(myTree.root.children[1].value).toBe(3);
    expect(myTree.root.children[0].children[0].value).toBe(4);
    expect(myTree.root.children[0].children[1].value).toBe(5);
    expect(myTree.root.children[1].children[0].value).toBe(6);
    expect(myTree.root.children[1].children[1].value).toBe(7);
    expect(myTree.root.children[0].children[1].children[0].value).toBe(15);
  });

  it('should correctly apply FizzBuzz to tree nodes', () => {
    const myTree = new fizzBuzzTree();

    myTree.insert(1, null);
    myTree.insert(2, 1);
    myTree.insert(3, 1);
    myTree.insert(4, 2);
    myTree.insert(5, 2);
    myTree.insert(6, 3);
    myTree.insert(7, 3);
    myTree.insert(15, 5); 

    expect(myTree.root.results).toEqual(['1']);
    expect(myTree.root.children[0].results).toEqual(['2']);
    expect(myTree.root.children[1].results).toEqual(['fizz']);
    expect(myTree.root.children[0].children[0].results).toEqual(['4']);
    expect(myTree.root.children[0].children[1].results).toEqual(['buzz']);
    expect(myTree.root.children[1].children[0].results).toEqual(['fizz']);
    expect(myTree.root.children[1].children[1].results).toEqual(['7']);
    expect(myTree.root.children[0].children[1].children[0].results).toEqual(['fizzbuzz']);
  });
  it('should handle invalid parent node value', () => {
    const myTree = new fizzBuzzTree();
    myTree.insert(1, null);
    expect(() => myTree.insert(2, 42)).toThrow(Error);
  });

  it('should correctly handle an empty tree', () => {
    const myTree = new fizzBuzzTree();

    expect(myTree.root).toBeNull();
    myTree.traverseDFS(); 
  });

});