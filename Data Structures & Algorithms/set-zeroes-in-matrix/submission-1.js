class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let hasRowZero = matrix[0].includes(0)
        let hasColZero = matrix.find(element => element[0] === 0) 

        for(let i = 1; i < matrix.length; i++) {
            for(let j = 1; j < matrix[i].length; j++) {
                if(matrix[i][j] === 0) {
                    matrix[0][j] = 0
                    matrix[i][0] = 0
                }
            }
        }

        for(let i = 1; i < matrix.length; i++) {
            for(let j = 1; j < matrix[i].length; j++) {
                if(matrix[0][j] === 0 || matrix[i][0] === 0) {
                    matrix[i][j] = 0
                }
            }
        }

        if(hasRowZero) {
            for(let index = 0; index < matrix[0].length; index++) {
                matrix[0][index] = 0
            }
        }

        if(hasColZero) {
            for(let index = 0; index < matrix.length; index++) {
                matrix[index][0] = 0
            }
        }
    }
}
