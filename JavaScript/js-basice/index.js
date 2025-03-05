let circle = {
  radius: 10,
  draw() {
    console.log("Drawing a circle");
  },
};

let another = {
  radius: 5,
  color: "yellow",
};

// 使用 Object.assign() 合并对象
let merged1 = Object.assign({}, circle, another);
console.log(merged1);

// 使用扩展运算符合并对象
let merged2 = { ...circle, ...another };
console.log(merged2);
