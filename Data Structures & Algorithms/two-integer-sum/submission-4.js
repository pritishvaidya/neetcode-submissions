class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let index = 0; index < nums.length; index++) {
            if(map.has(target - nums[index])) {
                const mapIndex = map.get(target - nums[index])
                return mapIndex > index ? [index, mapIndex] : [mapIndex, index]
            } else {
                map.set(nums[index], index)
            }
        }
    }
}
