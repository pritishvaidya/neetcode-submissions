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
     * @return {void}
     */
    reorderList(head) {
        let current = head
        let index = 0
        let map = new Map()

        while(current) {
            map.set(index, current.val)
            current = current.next
            index++
        }
        current = head
        index = 0

        while(current) {
            if(index % 2 === 0) {
                current.val = map.get(index / 2)
            }  else {
                current.val = map.get(map.size - Math.ceil(index / 2))
            }
            index++
            current = current.next
        }
    }

}
