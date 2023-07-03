const { LinkedList, Node } = require("./linked-list-zip");

describe("LinkedList zipLists", () => {
  test("should zip two non-empty lists", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);

    const newList = new LinkedList();
    const mergedHead = newList.zipLists(list1, list2);

    let currNode = mergedHead;
    const result = [];
    while (currNode) {
      result.push(currNode.data);
      currNode = currNode.next;
    }

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should handle empty lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const newList = new LinkedList();
    const mergedHead = newList.zipLists(list1, list2);

    expect(mergedHead).toBeNull();
  });

  test("should handle lists of different lengths", () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);

    const newList = new LinkedList();
    const mergedHead = newList.zipLists(list1, list2);

    let currNode = mergedHead;
    const result = [];
    while (currNode) {
      result.push(currNode.data);
      currNode = currNode.next;
    }

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
