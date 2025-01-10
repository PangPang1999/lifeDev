const numbers = [1, -1, 2, 3];

// old way of writting code
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

// reduce() method
// const sum2 = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
//简化后
const sum2 = numbers.reduce((a, c) => a + c);

console.log(sum2);
