class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let sortedNums = nums.sort()
        for(let index = 0; index < sortedNums.length; index++) {
            if(sortedNums[index] === sortedNums[index + 1]) {
                index++
            } else {
                return sortedNums[index]
            }
        }
    }
}
