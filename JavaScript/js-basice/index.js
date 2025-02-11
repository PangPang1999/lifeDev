function Circle(radius) {
  this.radius = radius;
}
const circle = new Circle(5);
circle.location = { x: 1, y: 1 }; // 动态添加 location 属性
console.log(circle); // 输出：Circle { radius: 5, location: { x: 1, y: 1 } }

console.log(circle.location); // 输出：{ x: 1, y: 1 }
circle["center-location"] = { x: 0, y: 0 };
console.log(circle["center-location"]); // 输出：{ x: 0, y: 0 }
