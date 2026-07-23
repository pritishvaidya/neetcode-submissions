class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProduct = 1
        let result = Array.from({ length: nums.length }).fill(1)

        for(let i = 0; i < nums.length; i++) {
            result[i] = leftProduct
            leftProduct = leftProduct * nums[i] 
        }

        let rightProduct = 1
        for(let j = nums.length - 1; j >= 0; j--) {
            result[j] = rightProduct * result[j]
            rightProduct = rightProduct * nums[j]
        }

        return result
    }
}
