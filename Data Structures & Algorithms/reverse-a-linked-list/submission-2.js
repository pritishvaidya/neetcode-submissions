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
     * @return {ListNode}
     */
    reverseList(head) {
        let p = head

        if(!p || !p.next) {
            return p
        }

        let newHead = this.reverseList(p.next)
        p.next.next = p
        p.next = null

        return newHead
    }
}
