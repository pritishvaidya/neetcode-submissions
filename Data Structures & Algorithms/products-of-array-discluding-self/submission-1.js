class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = Array(nums.length).fill(1)

        let p = 1
        for(let i = 0; i < nums.length; i++) {
            result[i] = result[i] * p
            p = p * nums[i]
        }

        let s = 1
        for(let j = nums.length - 1; j >= 0; j--) {
            result[j] = result[j] * s
            s = s * nums[j]
        }

        return result
    }
}
