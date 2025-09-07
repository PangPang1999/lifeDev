// 导入 express 框架的默认导出（核心函数，用于创建服务器）
import express from "express";
// 仅导入类型：Request 和 Response，用于给 req 和 res 添加类型提示
import type { Request, Response } from "express";

// 调用 express() 创建一个应用实例
const app = express();

// 读取环境变量中的 PORT，如果没有则默认使用 3000
const port = process.env.PORT || 3000;

// app.get 表示要处理 GET 请求。
// 第一个参数 "/" 表示网站的根路径，比如 http://localhost:3000/。
// 第二个参数 (req, res) => { ... } 是一个回调函数，当有请求命中这个路由时执行。
// req: Request：请求对象，包含浏览器传过来的信息（如 URL、参数、请求头）。
// res: Response：响应对象，用来把数据返回给客户端。
app.get("/", (req: Request, res: Response) => {
  // 向客户端返回一段文本
  res.send("Hello from the server!");
});

// 开启一个 HTTP 服务器。让它 监听指定的端口号（这里是 port）。
// 当有请求进来（例如浏览器访问 http://localhost:3000/）
// 服务器就能接收到并交给 Express 的路由处理函数去处理。
app.listen(port, () => {
  // 服务器启动后在控制台打印访问地址
  console.log(`Server is running at http://localhost:${port}`);
});
