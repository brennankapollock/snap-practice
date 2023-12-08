function rotateLeft(arr, d) {
  // The number of rotations might be more than the length of the array.
  // In such cases, we only need to rotate 'd % arr.length' times.
  d = d % arr.length;

  // Extract the first 'd' elements from the array.
  let removedPart = arr.splice(0, d);

  // Append the removed part to the end of the array.
  arr = [...arr, ...removedPart];

  // Return the rotated array.
  return arr;
}

// Example usage
let originalArray = [1, 2, 3, 4, 5];
let rotations = 4;
let rotatedArray = rotateLeft(originalArray, rotations);
console.log(rotatedArray.join(" ")); // This will print the rotated array as a string of space-separated integers.
