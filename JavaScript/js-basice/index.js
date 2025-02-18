// "use strict";

const person = { name: "Mosh" };
const objectBase = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(
  objectBase,
  "toString"
);
console.log(descriptor);
// {writable: true, enumerable: false, configurable: true, value: f}

// 修改 'name' 属性的描述符
Object.defineProperty(person, "name", {
  writable: false, // 使 'name' 属性只读
  enumerable: false, // 使 'name' 不可枚举
  configurable: false, // 使 'name' 不能被删除
});

// 尝试修改 'name' 属性
person.name = "John"; // 无效，'name' 属性是只读的，严格模式报错
console.log(person.name); // 非严格模式 输出 'Mosh'

// 查看属性描述符
const descriptorName = Object.getOwnPropertyDescriptor(
  person,
  "name"
);
console.log(descriptorName); // 输出 { writable: false, enumerable: false, configurable: false, value: 'Mosh' }

// 修改 'name' 属性，使其不可枚举
Object.defineProperty(person, "name", {
  enumerable: false,
});

// 查看属性描述符
console.log(Object.keys(person)); // 输出空数组 []

// 将 'name' 设置为可枚举
Object.defineProperty(person, "name", {
  enumerable: true,
});

console.log(Object.keys(person)); // 输出 ['name']
