// 定义基础类 Shape，包含带参数的构造函数，用于初始化 color 属性
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // 调用父类构造函数初始化 color，若没有该行会报错
    this.radius = radius; // 添加 Circle 自有的 radius 属性
  }
  move() {
    console.log("Circle move");
  }
}

// 创建 Circle 实例，并传入 color 和 radius 参数
const c = new Circle("red", 10);
console.log(c); // 对象原型中存在子类的move方法，沿原型链往上一层寻找，存在父类中move方法
console.log(c.__proto__.move); // 子类中move方法
console.log(c.__proto__.__proto__.move); // 父类中move方法
console.log(c.move()); // 输出：Circle move
