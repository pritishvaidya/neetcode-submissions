/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let current = head
        let previous = current
        let index = 0
        let length = 0

        while(current) {
            current = current.next
            length++
        }
        current = head

        if(n === length) {
            return head.next
        }

        while(current) {
            if(index === length - n) {
                previous.next = current.next
            }
            previous = current
            current = current.next
            index++
        }

        return head
    }
}
