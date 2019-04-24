// You are given two non-empty linked lists representing
// two non-negative integers. The digits are stored in
// reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any
// leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0);
  let head = list;
  let carry = 0;

  while (l1 || l2) {
      if (l1) list.val += l1.val;
      if (l2) list.val += l2.val;

      if (list.val >= 10) {
          carry = 1;
          list.val = list.val % 10;
      }

      if ((l1 && l1.next) || (l2 && l2.next) || carry === 1) {
          list.next = new ListNode(carry);
          carry = 0;
          list = list.next;
      }

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }

  return head;
};

// Runtime: 128 ms, faster than 74.14% of JavaScript
// online submissions for Add Two Numbers.
// Memory Usage: 39 MB, less than 17.78% of
// JavaScript online submissions for Add Two Numbers.