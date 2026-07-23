class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let first = 0
        let last = nums.length - 1
        while(first <= last) {
            let mid = Math.floor((first + last) / 2)
            if(target === nums[mid]) {
                return mid
            } else if(target <= nums[mid]) {
                last = mid - 1
            } else if(target >= nums[mid]) {
                first = mid + 1
            }
        }

        return -1
    }
}
