function Stopwatch() {
  this.startTime = 0; // 记录开始时间
  this.endTime = 0; // 记录结束时间
  this.running = false; // 是否正在计时
  this.duration = 0; // 记录持续时间
}

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started"); // 如果已经启动，则抛出错误
  }
  this.running = true;
  this.startTime = new Date(); // 设置开始时间为当前时间
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch has not started yet"); // 如果未启动，则抛出错误
  }
  this.running = false;
  this.endTime = new Date(); // 设置结束时间为当前时间
  this.duration = (this.endTime - this.startTime) / 1000; // 计算持续时间，单位为秒
};

Stopwatch.prototype.reset = function () {
  this.startTime = 0;
  this.endTime = 0;
  this.running = false;
  this.duration = 0; // 重置时长
};

const stopwatch = new Stopwatch();

stopwatch.start(); // 启动计时器
setTimeout(() => {
  stopwatch.stop(); // 停止计时器
  console.log(stopwatch.duration); // 输出计时器时长，例如 2 秒
  stopwatch.reset(); // 重置计时器
}, 2000);
