function Circle(radius) {
  this.radius = radius;

  // 私有属性，不应该被外部直接修改
  // this.defaultLocation = { x: 0, y: 0 };
  let defaultLocation = { x: 0, y: 0 };

  // 公共方法，外部可以通过这个方法与对象交互
  this.draw = function () {
    console.log(
      `Drawing a circle at location: x = ${defaultLocation.x}, y = ${defaultLocation.y}`
    );
    this.computeOptimalLocation();
  };

  // 私有方法，内部使用，不暴露给外部
  // this.computeOptimalLocation = function () {
  function computeOptimalLocation() {
    console.log("Computing optimal location...");
  }

  // 提供公共接口访问圆的半径
  this.getRadius = function () {
    return this.radius;
  };
}

const circle = new Circle(5);
console.log(circle.getRadius()); // 输出 5
circle.draw(); // 输出：Drawing a circle at location: x = 0, y = 0 和 Computing optimal location...
