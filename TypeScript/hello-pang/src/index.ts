function processEvents(): never {
  while (true) {
    // 持续处理事件（例如监听消息队列）
  }
}

processEvents();
console.log("This will never be reached."); // 永远无法抵达，设置配置文件后发出警告
