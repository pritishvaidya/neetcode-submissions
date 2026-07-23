class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxRectangle = 0
        heights.push(0)

        for(let index = 0; index < heights.length; index++) {
            while(stack.length > 0 && heights[index] < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()]
                const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1
                maxRectangle = Math.max(maxRectangle, height * width)
            }
            stack.push(index)
        }

        return maxRectangle
    }
}
