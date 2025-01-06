const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// const another = {};
// for (let key in circle) another[key] = circle[key];
// const another = Object.assign({}, circle);
const another = { ...circle };

console.log(another);

const demo = {
  deep: {
    level: 1,
  },
};
// const copy = Object.assign({}, demo);
const copy = { ...demo };

demo.deep.level = 2;
console.log(copy.deep.level);
