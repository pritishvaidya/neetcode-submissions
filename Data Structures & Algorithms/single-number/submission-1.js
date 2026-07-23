class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let set = new Set()
        for(let num of nums) {
            if(set.has(num)) {
                set.delete(num)
            } else {
                set.add(num)
            }
        }

        return Array.from(set)[0]
    }
}
