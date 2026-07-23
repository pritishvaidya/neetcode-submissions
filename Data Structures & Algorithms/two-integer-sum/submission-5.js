class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let index = 0; index < nums.length; index++) {
            const val = target - nums[index]
            if(map.has(val)) {
                return val < nums[index] ? [map.get(val), index] : [index, map.get(val)]
            }
            map.set(nums[index], index)
        }
    }
}
