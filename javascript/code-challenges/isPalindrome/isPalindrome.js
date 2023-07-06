class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  }
  
  function isPalindrome(LL) {
    let current = LL.head;
    let stack = [];
    let stackLength = 0;
    let stackTop = null;
    
    while (current) {
      stack[stackLength] = current.value;
      stackLength++;
      current = current.next;
    }
    
    current = LL.head;
    
    while (stackLength > 0) {
      stackLength--;
      stackTop = stack[stackLength];
      if (stackTop !== current.value) {
        return false;
      }
      current = current.next;
    }
    
    return true;
  }
  
  const ll1 = new LinkedList();
  ll1.addNode('r');
  ll1.addNode('a');
  ll1.addNode('d');
  ll1.addNode('a');
  ll1.addNode('r');
  console.log(isPalindrome(ll1)); // Output: true
  
  const ll2 = new LinkedList();
  ll2.addNode('l');
  ll2.addNode('e');
  ll2.addNode('v');
  ll2.addNode('e');
  ll2.addNode('l');
  console.log(isPalindrome(ll2)); // Output: true
  
  const ll3 = new LinkedList();
  console.log(isPalindrome(ll3)); // Output: true
  
  const ll4 = new LinkedList();
  ll4.addNode('a');
  console.log(isPalindrome(ll4)); // Output: true
  
  const ll5 = new LinkedList();
  ll5.addNode('s');
  ll5.addNode('a');
  ll5.addNode('l');
  ll5.addNode('e');
  ll5.addNode('h');
  console.log(isPalindrome(ll5)); // Output: false
  