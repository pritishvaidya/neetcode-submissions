class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binarySearch(nums, target, left, right) {
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] === target) {
                return mid
            } else if(nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return -1
    }

    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left < right) {
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] > nums[right] ) {
                    left = mid + 1
                } else {
                    right = mid
                }
        }

        let pivot = left
        console.log(pivot)

        const result = this.binarySearch(nums, target, 0, pivot - 1)
        if(result !== -1) {
            return result
        }

        return this.binarySearch(nums, target, pivot, nums.length - 1)

    }
}
