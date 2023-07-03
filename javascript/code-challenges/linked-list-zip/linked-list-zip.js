class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let currNode = this.head;
        while (currNode.next) {
          currNode = currNode.next;
        }
        currNode.next = newNode;
      }
    }
  
    zipLists(list1, list2) {
      if (!list1.head) {
        return list2.head;
      }
      if (!list2.head) {
        return list1.head;
      }
  
      const newList = new LinkedList();
      let curr1 = list1.head;
      let curr2 = list2.head;
  
      while (curr1 && curr2) {
        newList.append(curr1.data);
        newList.append(curr2.data);
        curr1 = curr1.next;
        curr2 = curr2.next;
      }
  
      while (curr1) {
        newList.append(curr1.data);
        curr1 = curr1.next;
      }
  
      while (curr2) {
        newList.append(curr2.data);
        curr2 = curr2.next;
      }
  
      return newList.head;
    }
  }
  
  module.exports = { Node, LinkedList };
  