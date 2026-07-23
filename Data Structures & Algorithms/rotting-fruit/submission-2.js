class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    bfs(grid, queue, freshcount) {
    let minutes = 0;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (queue.length > 0 && freshcount > 0) {
        let size = queue.length; // Capture current level size

        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift();

            for (let [dr, dc] of directions) {
                let nr = dr + row;
                let nc = dc + col;

                if (
                    nr >= 0 && nc >= 0 && 
                    nr < grid.length && nc < grid[0].length && 
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2; // Rotten the fresh orange
                    freshcount--;
                    queue.push([nr, nc]); // Add newly rotten orange to the queue
                }
            }
        }

        minutes++; // Increment time only after processing the entire level
    }

    return freshcount === 0 ? minutes : -1;
}


    orangesRotting(grid) {
        let queue = []
        let freshcount = 0
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 2) {
                    queue.push([i, j])
                } else if(grid[i][j] === 1) {
                    freshcount++
                }
            }
        }

        if (freshcount === 0) return 0;

        const minutes = this.bfs(grid, queue, freshcount)
        return minutes
    }
}
