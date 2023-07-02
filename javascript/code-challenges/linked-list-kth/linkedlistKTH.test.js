const LinkedList = require('./linkedlist');
const Node = require('./node');

describe('LinkedList', () => {
  test('kthFromEnd returns the value k places from the tail of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(ll.kthFromEnd(0)).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(3);
  });

  test('kthFromEnd throws an error for invalid value of k', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(() => ll.kthFromEnd(-1)).toThrow(Error);
    expect(() => ll.kthFromEnd(4)).toThrow(Error);
  });
});
