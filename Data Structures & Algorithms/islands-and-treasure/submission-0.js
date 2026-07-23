class Solution {
    /**
     * @param {number[][]} grid
     */
    bfs(grid, queue) {
        let rows = grid.length
        let cols = grid[0].length

        let directions = [[0,1], [1,0], [0,-1], [-1,0]];   

        while(queue.length > 0) {
            let [row, col] = queue.shift()

            for(let [directionRow, directionCol] of directions) {
                let newRow = directionRow + row
                let newCol = directionCol + col

                if(newRow < 0 || newRow > rows - 1 || newCol < 0 || newCol > cols - 1 || grid[newRow][newCol] !== Infinity) {
                    continue
                }
                console.log(grid[row][col], newRow , newCol)
                grid[newRow][newCol] = grid[row][col] + 1
                queue.push([newRow, newCol])
            }
        }  
    }

    islandsAndTreasure(grid) {
        let queue = []
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 0) {
                    queue.push([i, j])
                } else if(grid[i][j] === 2 ** 31 -1) {
                    grid[i][j] = Infinity
                }
            }
        }

        this.bfs(grid, queue)

        return grid
    }
}
