const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("draw circle with radius " + _radius.get(this));
  }
}
