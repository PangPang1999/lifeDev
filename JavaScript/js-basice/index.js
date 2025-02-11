// 字面量创建
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw();

// 工厂创建
// function createCircle(radius) {
//   return {
//     radius,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);
// circle.draw();

//构造函数创建
function Circle(radius) {
  this.radius = radius;
  this.location = {
    x: 1,
    y: 1,
  };
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
another.draw();

/// class 方式创建
class CircleClass {
  constructor(radius) {
    this.radius = radius;
    this.location = {
      x: 1,
      y: 1,
    };
  }
  draw() {
    console.log("draw");
  }
}
const cir = new CircleClass(1);
cir.draw();
console.log("cir.constructor : ", cir.constructor);
