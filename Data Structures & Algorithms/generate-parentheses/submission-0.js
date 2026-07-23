class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []

        const backtrack = (current, open, close, ) => {
            // Base case
            if(current.length === 2 * n) {
                result.push(current)
                return;
            }

            if(open < n) {
                backtrack(current + '(', open+1, close)
            }
            
            if(open > close) {
                backtrack(current + ')', open, close+1)
            }
        }
        
        backtrack("", 0, 0)
        return result
    }
}
