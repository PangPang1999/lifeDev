const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Python" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
];
console.log("Before sorting:", courses);

courses.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log("After sorting:", courses);

// 使用 setTimeout 模拟延迟一秒
// setTimeout(function () {
//   courses.sort(function (a, b) {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
//   });
//   console.log("After sorting:", courses);
// }, 1300); // 1000毫秒 = 1秒
