class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let maxArea = 0

        while(l < r) {
            let w = r - l
            let h = Math.min(heights[l], heights[r])
            let a = w * h
            maxArea = Math.max(maxArea, a)

            if(heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }

        return maxArea
    }
}
