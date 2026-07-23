class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sortedNums = nums.sort((a, b) => a - b)
        let isDuplicate = false
        for(let index = 0; index < sortedNums.length; index++) {
            if(sortedNums.length !== index - 1 && sortedNums[index + 1] === sortedNums[index]) {
                isDuplicate = true
            }
        }
        return isDuplicate
    }
}
