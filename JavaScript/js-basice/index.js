"use strict";

function Circle(radius) {
  this.radius = radius;

  // 私有变量，不能直接被外部访问
  let defaultLocation = { x: 0, y: 0 };

  // 使用 Object.defineProperty 定义 getter 和 setter
  Object.defineProperty(this, "defaultLocation", {
    // getter: 只允许读取 defaultLocation
    get: function () {
      return defaultLocation;
    },
    // setter: 在设置 defaultLocation 时进行验证
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // 输出：{ x: 0, y: 0 }

// 尝试修改 defaultLocation，若传入无效值则抛出错误
try {
  circle.defaultLocation = { x: null, y: 5 }; // 抛出错误
} catch (e) {
  console.log(e.message); // 输出："Invalid location"
}

// 正确修改 defaultLocation
circle.defaultLocation = { x: 10, y: 10 };
console.log(circle.defaultLocation); // 输出：{ x: 10, y: 10 }
