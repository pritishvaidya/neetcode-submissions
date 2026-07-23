class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = 9
        let row = Array.from({ length: n }, () => new Set())
        let col = Array.from({ length: n }, () => new Set())
        let boxes = Array.from({ length: n }, () => new Set())

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                const val = board[i][j]

                if(val === '.') continue

                if(row[i].has(val)) return false
                row[i].add(val)

                if(col[j].has(val)) return false
                col[j].add(val)

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if(boxes[boxIndex].has(val)) return false
                boxes[boxIndex].add(val)
            }
        }
        return true
    }
}
