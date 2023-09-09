const tree_intersection = require('./treeHash');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe('tree_intersection', () => {
  it('returns values present in both trees', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);
    tree1.left.left = new TreeNode(4);
    tree1.left.right = new TreeNode(5);

    const tree2 = new TreeNode(2);
    tree2.left = new TreeNode(4);
    tree2.right = new TreeNode(6);
    tree2.left.left = new TreeNode(8);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([2, 4]);
  });

});
