// we are given an array or list of elements
// we need to find or calculate something among all contiguous subarrays of a given size

// the queue can keep track of the elements in the current window
// adding new ones to the end and removing old ones from the front

// Given an array of integers and a number x, determine the smallest subarray with a sum greater than the given value.

// Import the 'deque' class from the 'collections' module (not directly available in JavaScript)
// In JavaScript, we can use arrays and methods like shift and push to achieve similar functionality
// However, JavaScript does not have a direct equivalent to Python's deque.
// The code will use an array to simulate the behavior of a deque.
// Note: JavaScript does not have an 'import' statement like Python.
// Also, 'float('inf')' in Python can be represented by 'Number.POSITIVE_INFINITY' in JavaScript.
// 'Number.POSITIVE_INFINITY' is a special value representing positive infinity.

// Function to find the smallest subarray with a sum greater than or equal to the target
function smallestSubarrayWithSum(arr, target) {
  // Initialize a queue (using an array for simplicity)
  const queue = [];

  // Initialize variables for the minimum length, current sum, and set it to positive infinity
  let minLength = Number.POSITIVE_INFINITY;
  let currentSum = 0;

  // Iterate through the array
  for (const num of arr) {
    // Enqueue the current number
    queue.push(num);

    // Update the current sum
    currentSum += num;

    // Check if the current sum is greater than the target
    while (currentSum >= target) {
      // Update the minimum length
      minLength = Math.min(minLength, queue.length);

      // Dequeue the leftmost element and subtract its value from the current sum
      currentSum -= queue.shift();
    }
  }

  // If minLength is still positive infinity, no subarray was found, return -1
  return minLength !== Number.POSITIVE_INFINITY ? minLength : -1;
}

// Example usage:
const arr = [1, 4, 45, 6, 0, 19];
const target = 51;

// Call the smallestSubarrayWithSum function with the array and target
const result = smallestSubarrayWithSum(arr, target);

// Print the result (minimum length of subarray with sum greater than or equal to the target)
console.log(result);

// this approach uses O(n) time and O(n) space.
