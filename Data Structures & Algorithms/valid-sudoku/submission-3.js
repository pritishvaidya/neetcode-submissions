class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: board.length}, (_) => new Set([]))
        const col = Array.from({length: board.length}, (_) => new Set([]))
        const grid = Array.from({length: board.length}, (_) => new Set([]))
        

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                const val = board[i][j]
                if(val === '.') continue

                const gIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
                if(row[i].has(val) || col[j].has(val) || grid[gIndex].has(val)) {
                    return false
                }
                
                row[i].add(val)
                col[j].add(val)
                grid[gIndex].add(val)
            }
        }

        return true
    }
}
