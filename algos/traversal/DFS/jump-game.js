// Given an array of non-negative integers arr, you are initially positioned at start index of the array.
// When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

// Notice that you can not jump outside of the array at any time.

function canReach(arr, start) {
  const n = arr.length;
  const visited = new Array(n).fill(false);

  function dfs(index) {
    // Base case: If the index is out of bounds or already visited, return false
    if (index < 0 || index >= n || visited[index]) {
      return false;
    }

    // If the value at the current index is 0, return true
    if (arr[index] === 0) {
      return true;
    }

    // Mark the current index as visited
    visited[index] = true;

    // Explore both jump possibilities: i + arr[i] and i - arr[i]
    return dfs(index + arr[index]) || dfs(index - arr[index]);
  }

  // Start the DFS from the given start index
  return dfs(start);
}

// Example usage:
const arr = [4, 2, 3, 0, 3, 1, 2];
const start = 5;

// Call the canReach function with the array and start index
const result = canReach(arr, start);

// Print the result (true if you can reach any index with value 0, otherwise false)
console.log(result);
