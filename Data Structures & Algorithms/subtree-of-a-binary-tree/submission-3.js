/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSameTree = (root, subRoot) => {
            if(root === null && subRoot === null) return true
            if(root === null || subRoot === null) return false

            if(root.val === subRoot.val) {
                return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
            }

            return false
        }

        if(!subRoot) return true
        if(!root) return false

        if(isSameTree(root, subRoot)) return true

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
