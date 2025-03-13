// Implementation Detail
const _radius = new WeakMap();

// Pulic Inteface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("draw circle with radius " + _radius.get(this));
  }
}

// module.exports.Circle = Circle;
// 或者
module.exports = Circle;
