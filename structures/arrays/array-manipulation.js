// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive.
// Once all operations have been performed, return the maximum value in the array.

function arrayManipulation(n, queries) {
  // Initialize an array of zeros with length n+1 (1-indexed)
  const arr = Array(n + 1).fill(0);

  // Perform operations on the array based on the given queries
  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i];
    // Add the value to the start index
    arr[start - 1] += value;
    // Subtract the value from the element after the end index
    arr[end] -= value;
  }

  // Find the maximum value in the array after the operations
  let max = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
  }

  return max;
}

// Example usage
const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];
const result = arrayManipulation(n, queries);
console.log(result);
