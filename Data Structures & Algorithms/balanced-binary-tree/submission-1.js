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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true
        if(root) {
            const dfs = (node) => {
                if(!node) return 0
                let left = dfs(node.left)
                let right = dfs(node.right)

                if(Math.abs(right - left) > 1) {
                    isBalanced = false
                }

                return Math.max(left, right) + 1
            }
            dfs(root)
        }

        return isBalanced
    }
}
