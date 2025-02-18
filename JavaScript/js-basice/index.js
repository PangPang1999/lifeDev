"use strict";

const x = {}; // 创建一个空对象
console.log(Object.getPrototypeOf(x)); // 输出 Object.prototype
console.log(Object.prototype); // 和上一行输出一致
console.log(Object.getPrototypeOf(x) === Object.prototype); // true

// 一般不直接在代码中使用__proto__，这里使用是为了帮助理解
console.log(Object.getPrototypeOf(x) === x.__proto__); // true
// 父对象相同时，使用该函数获取prototype，得到的值完全一致
const y = {}; // 创建一个空对象
console.log(
  Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
); // true

// {}
// [[Prototype]]: Object

// > constructor: f Object()
// > hasOwnProperty: f hasOwnProperty()
// > isPrototypeOf: f isPrototypeOf()
// > propertyIsEnumerable: f propertyIsEnumerable()
// > toLocaleString: f toLocaleString()
// > toString: f toString()
// > valueOf: f valueOf()
// > __defineGetter__: f __defineGetter__()
// > __defineSetter__: f __defineSetter__()
// > __lookupGetter__: f __lookupGetter__()
// > __lookupSetter__: f __lookupSetter__()
// > __proto__: Object

//   > constructor: f Object()
//   > hasOwnProperty: f hasOwnProperty()
//   > isPrototypeOf: f isPrototypeOf()
//   > propertyIsEnumerable: f propertyIsEnumerable()
//   > toLocaleString: f toLocaleString()
//   > toString: f toString()
//   > valueOf: f valueOf()
//   > __defineGetter__: f __defineGetter__()
//   > __defineSetter__: f __defineSetter__()
//   > __lookupGetter__: f __lookupGetter__()
//   > __lookupSetter__: f __lookupSetter__()
//     __proto__: null

// > get __proto__: f __proto__()
// > set __proto__: f __proto__()
// > get __proto__: f __proto__()
// > set __proto__: f __proto__()

// console.log(x.toString());

function Circle(radius) {
  this.radius = radius;
}
const c = new Circle(1);
console.log(c);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(c)));
