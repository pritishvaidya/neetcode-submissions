class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    dfs(grid, row, col) {
            if(row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1 || grid[row][col] === "0") {
                return 0;
            }

            grid[row][col] = "0"
            this.dfs(grid, row, col - 1)
            this.dfs(grid, row, col + 1)
            this.dfs(grid, row - 1, col)
            this.dfs(grid, row + 1, col)

            return 1
        }   

    numIslands(grid) {
        let count = 0

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                count = count + this.dfs(grid, i, j)
            }
        }

        return count
    }
}
