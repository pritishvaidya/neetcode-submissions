class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowLength = matrix[0].length
        const colLength = matrix.length

        let first = 0
        let last = (rowLength * colLength) - 1

        while(first <= last) {
            let mid = Math.floor((first + last) / 2)
            let row = Math.floor(mid / rowLength)
            let col = mid % rowLength

            if(matrix[row][col] === target) {
                return true
            } else if (matrix[row][col] < target) {
                first = mid + 1
            } else if (matrix[row][col] > target) {
                last = mid - 1
            }
        }

        return false
    }
}
