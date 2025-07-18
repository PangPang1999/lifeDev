function Message() {
  const name = "Pang";
  if (name) {
    // 使用花括号 {} 嵌入 JavaScript 变量
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
