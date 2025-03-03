let arr = [10, 20, 30];
arr.customProperty = "Custom Value";

for (let index in arr) {
  console.log(index, arr[index]); // 遍历索引和额外属性
}
// 输出
// 0 10
// 1 20
// 2 30
// customProperty Custom Value
