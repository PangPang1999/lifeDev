// 添加一个 shuffle 方法到数组的原型
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
};

const arr = [1, 2, 3, 4, 5];
arr.shuffle();
console.log(arr); // 打乱后的数组
