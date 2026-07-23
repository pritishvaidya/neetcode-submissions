class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 0) {
            return []
        }

        const map = new Map()
        const result = []

        for(let index = 0; index < nums.length; index++) {
            const value = nums[index]

            if(map.has(value)) {
                let mapVal = map.get(value)
                map.set(value, mapVal + 1)
            } else {
                map.set(value, 1)
            }
            
        }

        const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);

        for(let i = 0; i < k; i++) {
         result.push(sortedEntries[i][0])
        }

        return result
    }
}
