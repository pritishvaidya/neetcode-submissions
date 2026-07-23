class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a,b) => a-b)
        let results = []
        for(let i = 0; i < sortedNums.length; i++) {
            if(i > 0 && sortedNums[i-1] === sortedNums[i]) continue;

            let left = i+1
            let right = sortedNums.length - 1

            while(left < right) {
                const sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
                if(sum === 0) {
                    results.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                    left++
                    right--

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if(sum < 0) {
                    left++
                } else {
                    right--
                }
            } 
        }

        return results
    }
}
