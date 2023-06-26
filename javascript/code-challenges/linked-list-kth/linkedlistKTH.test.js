const LinkedList = require('./linkedlist');
const CustomNode = require('./node');

describe('LinkedList', () => {
  test('kthFromEnd returns the value k places from the tail of the linked list', () => {
    const ll = new LinkedList();
    ll.head = new CustomNode(1);
    ll.head.next = new CustomNode(3);
    ll.head.next.next = new CustomNode(8);
    ll.head.next.next.next = new CustomNode(2);

    expect(ll.kthFromEnd(0)).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(3);
  });
});
