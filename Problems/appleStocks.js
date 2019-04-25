// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:
// const stockPrices = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPrices) => 6 (buying for $5 and selling for $11)

// No "shorting"—
// you need to buy before you can sell.Also, you can 't buy and sell in the same time step—at least 1 minute has to pass.

function maxStockProfit(stockPrices) {
  let minMaxPairs = [];
  let min = stockPrices[0];
  let minId = 0;
  let max = stockPrices[0];
  let maxId = 0;

  for (let i = 1; i < stockPrices.length; i++) {
    let stockPrice = stockPrices[i];

    if (stockPrice < min) {
      if (maxId > minId) {
        minMaxPairs.push([min, max]);
      }

      min = stockPrice;
      minId = i;
      max = stockPrice;
      maxId = i;
    } else if (stockPrice > max) {
      max = stockPrice;
      maxId = i;
    }
  }

  if (maxId > minId) minMaxPairs.push([min, max]);

  return minMaxPairs;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(log(n))
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(maxStockProfit(stockPrices)); // => 