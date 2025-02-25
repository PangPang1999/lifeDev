function Cat(name, age) {
  this.name = name;
  this.age = age;
}
const cat = new Cat("JOJO", 5);
console.log(cat); // 输出 Cat {name: 'JOJO', age: 5}
console.log(cat.constructor);
// 输出
// ƒ Cat(name, age) {
//   this.name = name;
//   this.age = age;
// }

console.log(Cat.prototype); // 自行查看
console.log(Cat.prototype.constructor);
// 输出
// ƒ Cat(name, age) {
//   this.name = name;
//   this.age = age;
// }
