class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0

        let left = 0
        let right = heights.length - 1

        while(left < right) {
            let width = right  - left
            let newArea = width * Math.min(heights[left], heights[right])


            if(heights[left] < heights[right]) {
                left++
            } else if(heights[left] > heights[right]) {
                right--
            } else {
                left++
                right--
            }
            maxArea = Math.max(maxArea, newArea)

        }
        return maxArea
    }
}
