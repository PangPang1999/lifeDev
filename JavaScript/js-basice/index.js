function Circle(radius) {
  this.radius = radius;
}

const circle1 = new Circle(5);
// 原始的 toString 方法输出
console.log(circle1.toString()); // 输出：[object Object]
// [object Object]，这是表示该对象的默认字符串表示形式。

// 修改原型中的 toString 方法
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

const circle2 = new Circle(10);
console.log(circle2.toString()); // 输出：Circle with radius 10
