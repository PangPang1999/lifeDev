function getGreeting(name) {
  return `你好, ${name}!`;
}

const message = `问候消息是: ${getGreeting("Alice")}`;
console.log(message); // 输出: 问候消息是: 你好, Alice!
