# Stuck

## `sort()`

问题：两次输出相同

已知：`sort()` 会直接修改原数组，而不是返回一个新的数组

解释：

1. 问题的关键在于，控制台打印引用类型时，可能显示的是引用的最新状态，而不是打印时的快照。使用 Safari 浏览器时，可以看到输出的快照，两次输出不一致，但是展开后显示便相同了，这个问题与浏览器有关。
2. 当设置一个定时器后，2 秒后再执行 sort 排序并打印，第一次是输出便为原始排序了。

```js
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Python" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
];
console.log(courses);

courses.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);
```
