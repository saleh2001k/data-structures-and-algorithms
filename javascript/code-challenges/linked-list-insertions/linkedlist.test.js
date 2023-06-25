const LinkedList = require('./linkedlist');

// Unit tests
describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should append a node to the end of the linked list', () => {
    linkedList.append(1);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":1,"next":null}');
  });

  it('should append multiple nodes to the end of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":1,"next":{"value":2,"next":{"value":3,"next":null}}}');
  });

  it('should insert a node before a node located in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(2, 5);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":1,"next":{"value":5,"next":{"value":2,"next":{"value":3,"next":null}}}}');
  });

  it('should insert a node before the first node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(1, 7);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":7,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":null}}}}');
  });

  it('should insert a node after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(2, 9);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":1,"next":{"value":2,"next":{"value":9,"next":{"value":3,"next":null}}}}');
  });

  it('should insert a node after the last node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(3, 4);
    expect(JSON.stringify(linkedList.head)).toBe('{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4,"next":null}}}}');
  });
});
