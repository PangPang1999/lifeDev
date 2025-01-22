// 判断一个数是否是素数
function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false; // 如果找到因数，返回 false
  }
  return true; // 没有找到因数，返回 true
}

// 打印范围内的所有素数
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number); // 如果是素数，打印该数
  }
}

// 测试函数
showPrimes(10);
/*
输出：
2
3
5
7
*/
