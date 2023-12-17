// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

function letterCombinations(digits) {
  if (!digits || digits.length === 0) {
    return [];
  }

  // Define the mapping of digits to letters
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // Function to generate letter combinations recursively
  function generateCombinations(index, currentCombination) {
    // Base case: If we've reached the end of the digits, add the current combination
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    // Get the letters corresponding to the current digit
    const letters = digitToLetters[digits[index]];

    // Iterate through the letters and make recursive calls
    for (const letter of letters) {
      generateCombinations(index + 1, currentCombination + letter);
    }
  }

  // Initialize the result array to store the combinations
  const result = [];

  // Start the recursive process from the first digit
  generateCombinations(0, "");

  return result;
}

// Example usage:
const digits = "23";

// Call the letterCombinations function with the input digits
const result = letterCombinations(digits);

// Print the result (all possible letter combinations)
console.log(result);
