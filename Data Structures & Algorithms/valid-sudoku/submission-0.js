class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowHash = Array(9).fill(0).map(index => new Set()) 
        const colHash = Array(9).fill(0).map(index => new Set()) 
        const boxHash = Array(9).fill(0).map(index => new Set()) 

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                const value = board[i][j]
                if(value === '.') {
                    continue
                }
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

                if(rowHash[i].has(value) || colHash[j].has(value) || boxHash[boxIndex].has(value)) {
                    return false
                }
                
                rowHash[i].add(value)
                colHash[j].add(value)
                boxHash[boxIndex].add(value)
            }

           
        }
         return true
    }
}
