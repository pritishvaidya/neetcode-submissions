class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        let set = new Set(nums)

        let longestStreak = 0
        
        for(let number of set) {
            if(!set.has(number - 1)) {
                let currentNumber = number
                let currentStreak = 1

                while(set.has(currentNumber + 1)) {
                    currentNumber++
                    currentStreak++
                }

                longestStreak = Math.max(longestStreak, currentStreak)    
            }
        }

        return longestStreak
    }
}
