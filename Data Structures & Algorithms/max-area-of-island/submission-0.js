class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    dfs(grid, row, col) {
        let maxCount = 0
        if(row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1 || grid[row][col] === 0) {
            return maxCount 
        }

        grid[row][col] = 0;
        let count1 = this.dfs(grid, row, col - 1)
        let count2 = this.dfs(grid, row, col + 1)
        let count3 = this.dfs(grid, row - 1, col)
        let count4 = this.dfs(grid, row + 1, col)
        
        maxCount = 1 + count1 + count2 + count3 + count4
        return maxCount
    }


    maxAreaOfIsland(grid) {     
        let area = 0   
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) {
                    area = Math.max(area, this.dfs(grid, i, j))
                }
            }
        }

        return area
    }
}
