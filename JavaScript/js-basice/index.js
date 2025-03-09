let x = {};
for (let key in x) {
  console.log(key, "-- before set enumerable true");
}

// 如果需要将 toString 设置为可枚举（不推荐，但仅作演示）
Object.defineProperty(Object.prototype, "toString", {
  enumerable: true,
});

for (let key in x) {
  console.log(key, "-- after set enumerable true");
}
// 输出将包含 "toString"，因为我们将其设置为可枚举
