class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for(let index = 0; index < nums.length; index++) {
            const current = nums[index]

            if(hashMap.has(target - current)) {
                const storedIndex = hashMap.get(target - current)
                return index < storedIndex ? [storedIndex, index] : [index, storedIndex]
            } else {
                hashMap.set(nums[index], index)
            }
        }
        return []
    }
}
