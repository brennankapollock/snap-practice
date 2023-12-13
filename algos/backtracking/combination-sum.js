// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

function combinationSum2(candidates, target) {
  const result = [];

  // Sort the candidates to handle duplicates and optimize the backtracking process
  candidates.sort((a, b) => a - b);

  function backtrack(start, target, currentCombination) {
    if (target === 0) {
      // If the target is reached, add the current combination to the result
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates to avoid duplicate combinations
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      // Skip if the current candidate is greater than the remaining target
      if (candidates[i] > target) {
        break;
      }

      // Choose the current candidate and make a recursive call
      currentCombination.push(candidates[i]);
      backtrack(i, target - candidates[i], currentCombination);

      // Backtrack by removing the last chosen candidate
      currentCombination.pop();
    }
  }

  // Start the backtracking process from the first candidate
  backtrack(0, target, []);

  return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;

// Call the combinationSum2 function with the input candidates and target
const result = combinationSum2(candidates, target);

// Print the result (list of unique combinations)
console.log(result);
