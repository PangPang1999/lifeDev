const numbers = [1, 2, 3];
const result = numbers.join();
console.log(result);

let message = "This is my first message";

// 使用空格分割字符串
const parts = message.split(" ");
console.log(parts);

const conbined = parts.join("-");
console.log(conbined);

// 假设有一个文章标题
let articleTitle = "Creating arrays in JavaScript";

// 通过 split 和 join 创建 URL Slug
const slug = articleTitle.split(" ").join("-");
console.log(slug);
