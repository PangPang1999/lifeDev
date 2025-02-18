"use strict";

const myArray = [];
console.log("myArray : ", myArray); // 最后一行 [[Prototype]]: Array(0)
// 相当于 console.log(myArray.__proto__);
console.log(
  "Object.getPrototypeOf(myArray) : ",
  Object.getPrototypeOf(myArray)
); // 最后一行 [[Prototype]]: Object
// 相当于 console.log(myArray.__proto__.__proto__);

// 以下代码帮助理解
console.log(
  "Object.getPrototypeOf(myArray) === Array.prototype : ",
  Object.getPrototypeOf(myArray) === Array.prototype
); //true
console.log(
  "Object.getPrototypeOf(Object.getPrototypeOf(myArray)) : ",
  Object.getPrototypeOf(Object.getPrototypeOf(myArray))
); // 得到了Object.prototype
console.log(
  "Object.getPrototypeOf(Object.getPrototypeOf(myArray)) === Object.prototype : ",
  Object.getPrototypeOf(Object.getPrototypeOf(myArray)) ===
    Object.prototype
); // true

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(5);

console.log(circle); // 输出 circle 对象，包含属性 radius
console.log(Object.getPrototypeOf(circle)); // 查看 Circle 构造函数的原型：Circle.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(circle))); // 查看 Circle.prototype 的原型：Object.prototype
