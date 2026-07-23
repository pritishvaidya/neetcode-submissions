class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let num of nums) {
            let val = map.get(num) || 0
            map.set(num, val + 1)
        }

        let result = Array.from(map).sort((a, b) => b[1] - a[1])
        return result.map(val => val[0]).slice(0, k)
    }
}
