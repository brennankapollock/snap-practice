// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Define a function named maxProfit that takes an array of prices as input
var maxProfit = function (prices) {
  // Initialize variables to represent the buy and sell dates, and the maximum profit
  let left = 0; // buy date
  let right = 1; // sell date
  let max_profit = 0;

  // Loop through the prices array until the end
  while (right < prices.length) {
    // Check if the price on the buy date is less than the price on the sell date
    if (prices[left] < prices[right]) {
      // Calculate the profit by subtracting the buy date price from the sell date price
      let profit = prices[right] - prices[left];

      // Update the maximum profit using Math.max function
      max_profit = Math.max(max_profit, profit);
    } else {
      // If the buy date price is greater than or equal to the sell date price, update the buy date
      left = right;
    }

    // Move to the next sell date
    right++;
  }

  // Return the maximum profit achieved
  return max_profit;
};

prices = [7, 1, 5, 3, 6, 4];
const answer = maxProfit(prices);
console.log(answer);
