const now = new Date(); // 当前的日期和时间
const data1 = new Date("January 1, 2025 00:00:00"); // 2025年1月1日00:00:00
const data2 = new Date(2025, 0, 1, 12, 30, 0); // 2025年1月1日12:30:00

now.setFullYear(1999); // 修改时间年份

let x;
x = now.toDateString(); // 转换时间格式
x = now.toTimeString(); // 转换时间格式
x = now.toISOString(); // 最常见的前后端传递时间格式

x = now.getDate(); // 获取时间 日 信息
console.log(x);
