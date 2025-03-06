const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// includes() 无法匹配具有相同内容但不同引用的对象
console.log(courses.includes({ id: 1, name: "a" })); // 输出: false

// 使用 find() 根据条件查找对象
const courseA = courses.find(function (course) {
  return course.name === "a";
});
console.log(courseA); // 输出: { id: 1, name: "a" }

// 使用 findIndex() 查找符合条件的对象索引
const indexB = courses.findIndex(function (course) {
  return course.name === "b";
});
console.log(indexB); // 输出: 1
