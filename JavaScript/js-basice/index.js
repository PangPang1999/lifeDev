function Person(name) {
  // 直接在实例上定义的属性
  this.name = name;
}
const p = new Person("Alice");
console.log(p.hasOwnProperty("name")); // true
