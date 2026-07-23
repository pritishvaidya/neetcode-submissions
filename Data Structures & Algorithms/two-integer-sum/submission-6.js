class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++) {
            let num = nums[i]

            if(map.has(target - num)) {
                let j = map.get(target - num)
                return i > j ? [i, j] : [j, i]
            } else {
                map.set(num, i)
            }
        }
    }
}
