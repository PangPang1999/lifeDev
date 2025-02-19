function Circle(radius) {
  this.radius = radius; // 实例成员
  this.move = function () {
    // 实例成员
    console.log("Moving the circle");
  };
}

// 将 draw 方法添加到原型中
Circle.prototype.draw = function () {
  console.log("Drawing a circle with radius " + this.radius);
};

const circle = new Circle(5);

// Return instance members
console.log(Object.keys(circle)); // 输出 ['radius', 'move']

// Return all members (instance + prototype)
for (let key in circle) {
  console.log(key);
}
// radius
// move
// draw
