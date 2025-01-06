let x;

// 生成0-1的随机数
// x = Math.random();

//四舍五入
// x = Math.round(1.9);

// 找出最大数
x = Math.max(1, 2, 3, 4, 5);

console.log(x);

// 生成指定区间的随机数（链接也有）
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
