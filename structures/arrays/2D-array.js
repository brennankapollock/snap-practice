// Define a function that takes a 2D array as an argument
function maxHourglassSum(arr) {
  // Initialize maxSum with a very small number to ensure it's smaller than any possible hourglass sum
  let maxSum = -Infinity;

  // Loop over each row of the array except the last two, because an hourglass extends two rows down
  for (let i = 0; i < 4; i++) {
    // Loop over each column of the array except the last two, because an hourglass extends two columns to the right
    for (let j = 0; j < 4; j++) {
      // Calculate the sum of the current hourglass:
      // top row of the hourglass
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        // middle value of the hourglass
        arr[i + 1][j + 1] +
        // bottom row of the hourglass
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      // Check if the current hourglass sum is greater than the current maximum
      if (sum > maxSum) {
        // Update the maximum sum with the current hourglass sum
        maxSum = sum;
      }
    }
  }

  // Return the maximum hourglass sum after checking all hourglasses
  return maxSum;
}

// Example 2D array
let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

// Call the function with the example array and log the result to the console
console.log(maxHourglassSum(arr));
