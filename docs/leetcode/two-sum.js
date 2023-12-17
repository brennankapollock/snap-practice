// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
  // Create an empty object to store the indices of numbers we have seen so far
  const numIndices = {};

  // Loop through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - nums[i];

    // Check if the complement is already in the numIndices object
    if (numIndices[complement] !== undefined) {
      // If found, return the indices of the two numbers that add up to the target
      return [numIndices[complement], i];
    }

    // If the complement is not found, store the current number and its index in the numIndices object
    // this is putting the number as the key and it's index as the value
    numIndices[nums[i]] = i;
    console.log(numIndices);
  }

  // If no solution is found, return an empty array or handle it as needed
  return [];
}

// Example usage:
const nums = [12, 7, 10, 15];
const target = 22;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (or [1, 0] since the order doesn't matter)
