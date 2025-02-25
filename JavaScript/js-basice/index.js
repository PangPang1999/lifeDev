function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("Duplicating " + this.constructor.name);
};

// 定义 Circle 构造函数
function Circle(radius) {
  Shape.call(this); // 在子类中调用父类的属性
  this.radius = radius;
}

// 定义 Square 构造函数
function Square(side) {
  Shape.call(this); // 在子类中调用父类的属性
  this.side = side;
}

console.log(Object.create(Shape.prototype));
console.log(Object.create(Shape.prototype).constructor);
console.log(Shape.prototype.constructor);
console.log(Shape.prototype);
console.log(Circle.prototype);

// 让 Circle 继承自 Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
  console.log("Drawing circle with radius " + this.radius);
};
console.log(Circle.prototype.constructor);

// 让 Square 继承自 Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
  console.log("Drawing square with side " + this.side);
};

const circle = new Circle(5);
const square = new Square(5);

// circle.duplicate(); // Duplicating Circle
// circle.draw(); // Drawing circle with radius 5
// square.duplicate(); // Duplicating Square
// square.draw(); // Drawing square with radius 5

// console.log(circle);
// console.log(square);
// console.log(circle.constructor);
