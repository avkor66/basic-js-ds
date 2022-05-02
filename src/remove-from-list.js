const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const arr = []
  let list = l

  for (;list.next !== null;) {
    arr.push(list.value)
    list = list.next
  } arr.push(list.value)

  const newArr = arr.filter(el => el !== k)

  return newArr.reverse().reduce((accumulation, currency) => {
    if (accumulation) {
      const node = new ListNode(currency)
      node.next = accumulation
      return node
    }
    return new ListNode(currency);
  }, null)
}

module.exports = {
  removeKFromList
};
