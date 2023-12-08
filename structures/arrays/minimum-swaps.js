// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
// You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
  // Get length of the array
  const n = arr.length;

  // Initalize a variable to hold all swaps
  let swaps = 0;

  // Create a dictionary to store the index of each element in the array
  const indexDict = {};

  // Loop through all elements in the array
  arr.forEach((element, i) => {
    indexDict[element] = i;
  });

  console.log(indexDict);

  // Loop through the array
  for (let i = 0; i < n; i++) {
    // Check if the element is at its correct position
    if (arr[i] !== i + 1) {
      // Swap the current element with the element at its correct position
      const correctPosition = indexDict[i + 1];
      [arr[i], arr[correctPosition]] = [arr[correctPosition], arr[i]];
      indexDict[arr[i]] = i;
      indexDict[arr[correctPosition]] = correctPosition;
      swaps++;
    }
  }

  return swaps;
}

// Example usage
const arr = [4, 3, 1, 2];
const result = minimumSwaps(arr);
console.log(result);
