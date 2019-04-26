// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:
// const stockPrices = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPrices) => 6 (buying for $5 and selling for $11)

// No "shorting"—
// you need to buy before you can sell.Also, you can 't buy and sell in the same time step—at least 1 minute has to pass.

// *-------------*
// Option#1: Does not show negative profit
// *-------------*
function minMaxPairs(stockPrices) {
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

// console.log(minMaxPairs([5, 3, 1]));

function maxStockProfit(stockPrices) {
  let pairs = minMaxPairs(stockPrices);
  let maxDiff = 0;

  for (let i = 0; i < pairs.length; i++) {
    let firstEle = pairs[i][0];
    let secEle = pairs[i][1];
    let diff = secEle - firstEle;

    if (maxDiff < diff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)


// *-------------*
// Option#2: shows negative profit
// *-------------*

function maxStockProfit2(stockPrices) {
  let min = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currPrice = stockPrices[i];
    let currProfit = currPrice - min;

    if (maxProfit < currProfit) {
      maxProfit = currProfit;
    }

    min = Math.min(min, currPrice);
  }

  return maxProfit;
}

// *-------------*
//   TEST CASES
// *-------------*
const stockPrices = [10, 7, 5, 8, 11, 9];
const stockPrices2 = [3, 5, 4, 3, 2, 6, 1];
const stockPrices3 = [5, 3, 1];
const stockPrices4 = [5, 3, 2, 1];

// console.log(maxStockProfit(stockPrices)); // => 6
// console.log(maxStockProfit(stockPrices2)); // => 4
// console.log(maxStockProfit(stockPrices3)); // => 
// console.log(getMaxProfit(stockPrices3)); // => 
console.log(maxStockProfit2(stockPrices)); // => 6
console.log(maxStockProfit2(stockPrices2)); // => 4
console.log(maxStockProfit2(stockPrices3)); // => -2
console.log(maxStockProfit2(stockPrices4)); // => -1