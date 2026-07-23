class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0
        let bottom = matrix.length - 1

        function getMid() {
        while(top <= bottom) {
            let mid = Math.floor((top + bottom) / 2)
            if(matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
               return mid 
            } else if(matrix[mid][0] <= target) {
                top = mid + 1
            } else {
                bottom = mid - 1
            }
        }
        return -1
        }

        
        const first = getMid()

        
        if(first === -1) {
            return false
        } else {
            let left = 0
            let right = matrix[first].length -1
            while(left <= right) {
                let mid = Math.floor((left + right) / 2)
                if(target === matrix[first][mid]) {
                    return true
                } else if(target < matrix[first][mid]) {
                    right = mid - 1 
                } else {
                    left = mid + 1
                }
             }
        }

        return false
    }
}
