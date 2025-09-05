import OpenAI from "openai";

const OPENAI_API_KEY = "";
const DeepSeek_API_Key = "";

// 创建 OpenAI 客户端
// const client = new OpenAI({
//   apiKey: OPENAI_API_KEY,
// });

// const stream = await client.responses.create({
//   model: "gpt-4.1",
//   input: "Write a story about a robot",
//   temperature: 0.7,
//   max_output_tokens: 250,
//   stream: true,
// });

// // Async iterable stream
// for await (const event of stream) {
//   if (event.delta) process.stdout.write(event.delta);
// }

const client = new OpenAI({
  baseURL: "https://api.deepseek.com/v1",
  apiKey: DeepSeek_API_Key,
});

const stream = await client.chat.completions.create({
  model: "deepseek-chat",
  messages: [{ role: "user", content: "写一个关于机器人的故事" }],
  temperature: 0.7,
  max_tokens: 250,
  stream: true, // 开启流式
});

// 遍历流式响应
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
