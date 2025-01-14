const color = "red"; // 全局变量

function start() {
  const color = "blue"; // 局部变量，覆盖全局变量
  console.log(color); // 输出 "blue"
}

start();
console.log(color); // 输出 "red"
