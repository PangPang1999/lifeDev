// 原始方式
// let baseSalary = 3_000;
// let overtime = 10;
// let rate = 20;
// function getWage() {
//   return baseSalary + overtime * rate;
// }

// 字面量创建
let employee = {
  baseSalary: 3_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
console.log("employee.getWage() : ", employee.getWage());

//ES6引入：class
class Employee {
  constructor(baseSalary, overtime, rate) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;
  }

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  }
}

const emp = new Employee(3000, 10, 20);
console.log("emp.getWage() : ", emp.getWage());

class HTMLElement {
  constructor(hidden, innerHTML) {
    this.hidden = hidden;
    this.innerHTML = innerHTML;
  }

  click() {
    console.log("Element clicked");
  }
}

class TextBox extends HTMLElement {
  constructor(hidden, innerHTML, placeholder) {
    super(hidden, innerHTML);
    this.placeholder = placeholder;
  }
}

const textbox = new TextBox(false, "Hello", "Enter text...");
textbox.click(); // 继承父类方法
console.log(textbox.placeholder); // 访问子类属性

class Circle {
  render() {
    console.log("Rendering a circle");
  }
}

class Square {
  render() {
    console.log("Rendering a square");
  }
}

function renderShape(shape) {
  shape.render(); // 无需关心对象的具体类型
}

const circle = new Circle();
const square = new Square();
renderShape(circle); // Rendering a circle
renderShape(square); // Rendering a square
