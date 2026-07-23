class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set();
      for (let j = 0; j < 9; j++) {
        let val = board[i][j];
        if (row.has(val)) {
          return false;
        } else if (val !== ".") {
          row.add(val);
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      let col = new Set();
      for (let j = 0; j < 9; j++) {
        let val = board[j][i];
        if (col.has(val)) {
          return false;
        } else if (val !== ".") {
          col.add(val);
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      let box = new Set();
      for (let j = 0; j < 9; j++) {
        let rowIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        let colIndex = (i % 3) * 3 + (j % 3);

        let val = board[rowIndex][colIndex];
        if (box.has(val)) {
          return false;
        } else if (val !== ".") {
          box.add(val);
        }
      }
    }



    return true;
  }
}
