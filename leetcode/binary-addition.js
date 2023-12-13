// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a, b) {
  let result = "";
  let carry = 0;

  // Start from the rightmost digits of both strings
  let i = a.length - 1;
  let j = b.length - 1;

  // Iterate until you reach the leftmost digit of both strings or there's a carry
  while (i >= 0 || j >= 0 || carry > 0) {
    // Get the current digits at indices i and j (or 0 if already reached the leftmost digit)
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    // Calculate the sum of the current digits and the carry
    const sum = digitA + digitB + carry;

    // Append the least significant bit of the sum to the result string
    result = (sum % 2) + result;

    // Update the carry for the next iteration
    carry = Math.floor(sum / 2);

    // Move to the next leftmost digits
    i--;
    j--;
  }

  return result;
}

// Example usage:
const a = "1010";
const b = "1011";

// Call the addBinary function with the binary strings
const result = addBinary(a, b);

// Print the result (sum of binary strings)
console.log(result);
