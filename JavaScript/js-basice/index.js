const first = [1, 2, 3];
const second = [4, 5, 6];
const objArr = [{ id: 1 }];

// 合并数组和元素
const combined = [...first, "a", ...second, "b"];

// 拷贝
// const copy = combined.slice();
const copy = [...combined];

console.log(combined);
console.log(copy);
