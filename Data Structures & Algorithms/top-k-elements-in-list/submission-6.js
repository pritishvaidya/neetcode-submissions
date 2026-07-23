class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = new Map()
        let arr = Array.from({ length: nums.length + 1 }, () => [])

        for(let i = 0; i < nums.length; i++) {
            let val = nums[i]
            if(m.has(val)) {
                m.set(val, m.get(val) + 1)
            } else {
                m.set(val, 1)
            }
        }

        for(let [k, v] of m.entries()) {
            arr[v].push(k)
        }

        console.log(arr)

        return arr.flat().slice(-k)
    }
}
