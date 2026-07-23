class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set(nums)
        return Array.from(nums).length !== set.size
    }
}
