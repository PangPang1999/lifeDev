const str = " abc 456 789 ";

let x;

x = str.length; // 输出字符串长度（含空）
x = str[0]; // 输出字符串第1位的字段（索引从0开始）
x = str[4];
x = str.includes("789"); // 判断字符串是否包含789
x = str.includes("999");
x = str.startsWith("abc"); // 判断字符串是否以abc开头
x = str.startsWith("ccc");
x = str.endsWith("9"); // 判断字符串是否以9结尾
x = str.indexOf("89"); // 计算字符串中 89 第一次出现的位置
x = str.replace("789", "999"); // 将字符串中的789替换为999，并将生成的字符串返回，不影响原字符串
x = str.toUpperCase(); // 将字符串小写替换大写，并将生成的字符串返回，不影响原字符串
x = str.trim(); // 去除字符串前后空格
x = str.trimLeft();
x = str.trimRight();

x = str.split(" "); // 将字符串使用的" "切分位数组
console.log(x);

console.log(str);
