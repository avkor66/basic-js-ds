const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null
  }
  preendAdd(value, node) {
    const newEl = new ListNode(value)
    newEl.next = node
    return newEl
  }
  peekTake() {
    return !this.head
  }
  prepend(value) {
    let newNode = this.preendAdd(value, this.head)
    this.head = newNode
  }
  push(element) {
    this.prepend(element)
  }
  deleteElement() {
    if (!this.head) return null;
    let deleted = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    return deleted;
  }
  pop() {
    const removed = this.deleteElement()
    return removed ? removed.value : null
  }
  peek() {
    if (this.peekTake()) {
      return null;
    }
    return this.head.value;
  }

}

module.exports = {
  Stack
};
