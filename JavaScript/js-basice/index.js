function Circle(radius) {
  this.radius = radius;
}
const circle = new Circle(5);
console.log(circle);
console.log(Object.getPrototypeOf(circle));
console.log(Circle.prototype);
console.log(Object.getPrototypeOf(circle) === Circle.prototype); //true

const x = {};
console.log(Object.getPrototypeOf(x) === Object.prototype); //true
