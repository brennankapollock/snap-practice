// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"

// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

function numDecodings(s) {
  const n = s.length;

  // Initialize an array to store the number of ways to decode up to each index
  const dp = new Array(n + 1).fill(0);

  // There is one way to decode an empty string
  dp[0] = 1;

  // Check each digit in the string
  for (let i = 1; i <= n; i++) {
    // Single digit case
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    // Two-digit case
    if (i > 1 && s[i - 2] !== "0" && parseInt(s.substring(i - 2, i)) <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

// Example usage:
const s = "11106";

// Call the numDecodings function with the input string
const result = numDecodings(s);

// Print the result (number of ways to decode the string)
console.log(result);
