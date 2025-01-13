function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

function countMoney(dicount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - dicount);
}

console.log(countMoney(0.1, 20, 30));

// Uncaught SyntaxError: Rest parameter must be last formal parameter
// function test(dicount, ...prices, p) {
//   return null;
// }
