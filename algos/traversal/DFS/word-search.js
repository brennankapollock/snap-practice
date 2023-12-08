// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.

// The same letter cell may not be used more than once.

function exist(board, word) {
  // Define a helper function for depth-first search
  function dfs(i, j, k) {
    // If we have matched all characters in the word, return true
    if (k === word.length) {
      return true;
    }

    // Check if the current cell is out of bounds or does not match the word character
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[k]
    ) {
      return false;
    }

    // Temporarily mark the current cell as visited
    const temp = board[i][j];
    board[i][j] = "/";

    // Recursively explore adjacent cells in all four directions
    if (
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1)
    ) {
      // If any of the recursive calls returns true, the word is found
      return true;
    }

    // Backtrack: restore the original value of the current cell
    board[i][j] = temp;
    return false;
  }

  // Iterate through each cell in the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // Start the depth-first search from the current cell
      if (dfs(i, j, 0)) {
        // If the search returns true, the word is found
        return true;
      }
    }
  }

  // If no match is found after exploring all cells, return false
  return false;
}
