const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(val){
    let newElement = new ListNode(val)
    if (this.tail) this.tail.next = newElement
    this.tail = newElement
    if (!this.head) this.head = newElement
  }
  getUnderlyingList(){
    return this.head
  } 
  enqueue(value) {
    this.append(value)
  }
  delHead() {
    if (!this.head) return null
    let deleted = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    return deleted
  }
  dequeue() {
    const removed = this.delHead();
    return removed ? removed.value : null
  }
}

module.exports = {
  Queue
};
