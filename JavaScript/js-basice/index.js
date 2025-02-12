function Stopwatch() {
  let startTime = 0; // 记录开始时间
  let endTime = 0; // 记录结束时间
  let running = false; // 是否正在计时
  let duration = 0; // 记录持续时间

  // 获取当前计时器的持续时间
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration; // 返回时长
    },
  });

  // 启动计时器
  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started"); // 如果已经启动，则抛出错误
    }
    running = true;
    startTime = new Date(); // 设置开始时间为当前时间
  };

  // 停止计时器
  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch has not started yet"); // 如果未启动，则抛出错误
    }
    running = false;
    endTime = new Date(); // 设置结束时间为当前时间
    duration = (endTime - startTime) / 1000; // 计算持续时间，单位为秒
  };

  // 重置计时器
  this.reset = function () {
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0; // 重置时长
  };
}

const stopwatch = new Stopwatch();

stopwatch.start(); // 启动计时器
setTimeout(() => {
  stopwatch.stop(); // 停止计时器
  console.log(stopwatch.duration); // 输出计时器时长，例如 2 秒
  stopwatch.reset(); // 重置计时器
}, 2000);
