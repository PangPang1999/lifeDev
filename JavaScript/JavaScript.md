> 以学习过 HTML&CSS 为基础

# 工具

## Node

> Homebrew 安装
>
> ```bash
> brew install node # 默认安装最新版本
> ```

## VS Code

> https://code.visualstudio.com
>
> 安装插件：
>
> - Prettier——代码格式工具
> - LiveServer——启用本地服务器，便于在浏览器上查看代码效果
> - indent-rainbow——缩进
> - Material Icon Theme——图标
> - HTML CSS Support
> - CSS Peek
> - Highlight Matching Tag
> - TODO Highlight
>
> setting 文件代码，含代码颜色、自动格式化，见最后

# 入门

## 什么是 JavaScript

**JavaScript 是什么?**

- 当今最流行和广泛使用的编程语言之一。

**JavaScript 能做什么？**

- 可以用于构建完整的网页应用、移动应用、实时网络应用（如聊天和视频流服务）、命令行工具甚至游戏

  **JavaScript 代码在哪里运行？**

- 最初只能在浏览器中运行。每个浏览器都有一个 JavaScript 引擎来执行代码（例如 Firefox 和 Chrome 的引擎）

- 通过 Node.js，JavaScript 也可以在浏览器之外运行，从而使开发者可以用 JavaScript 构建 Web 和移动应用的后端。

**JavaScript 与 ECMA Script 的区别是什么？**

- ECMAScript 是一种规范，定义了 JavaScript 语言的标准。
- JavaScript 是遵循 ECMAScript 规范的编程语言

**Chrome Dev Tool**

Chrome Dev Tool 的 Console 中可以写一些简单 JavaScript 代码。

```javascript
console.log("Hello");
2 + 2;
alert("yo");
```

## 设置开发环境

下载 VS code、插件

安装 Node

## 基础代码

> 将 `<script>` 元素放在 `<body>` 标签的末尾，所有现有元素之后。
>
> 1. **浏览器解析顺序**：浏览器会从上到下解析 HTML 文件。如果将 JavaScript 放在 `<head>` 部分，浏览器可能会先解析和执行 JavaScript，这可能会延迟页面内容的渲染，导致页面加载时显示白屏或空白。
> 2. **与页面元素交互**：JavaScript 通常需要操作页面中的元素（例如显示或隐藏元素）。将脚本放在页面底部，可以确保所有 HTML 元素都已加载和渲染。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <script>
      // This is not my first Javascipt code
      console.log("Hello World"); // 将命令输出到控制台，可用于调试
    </script>
  </body>
</html>
```

- JavaScript 代码写在`<script>`标签内
- `<script>`标签放在`<body>`的最下面

## 分离 JS

> 在 **index.html** 中的 `<script>` 标签内编写的 JavaScript 代码应该提取到一个单独的文件中。
>
> - 更好的代码组织和管理。
>
> - JavaScript 文件可以被多个 HTML 页面复用。
>
> - 页面加载性能提升，因为浏览器可以缓存外部 JS 文件。

```javascript
console.log("Hello World");
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

## Node 环境运行 JS

命令行工具，文件夹路径下，运行

```bash
node index.js
# Hello World
```

# 基础

## 变量

> 变量（Variables）用于暂时存储数据在计算机的内存中。变量给内存中的存储位置一个名称，使用这个名称可以在后续访问该位置的数据。
>
> 在 JavaScript 中，我们使用**`let`**关键字来声明变量。
>
> _在早期，`var` 用得较多，但因为它存在一些问题，现在推荐使用 `let`。_

**声明方式**：`let`

- 默认情况下，声明的变量未初始化时，它的值为 `undefined`

  ```js
  let name;
  console.log(name); // 输出 undefined
  ```

- 可以初始化变量，并给它赋值

  ```js
  let name = "Mosh";
  console.log(name); // 输出 Mosh
  ```

**命名变量的规则**

- 不能是保留关键字（如 `let`、`if`、`var` 等）。如果使用保留关键字，编译时会报错。
- 命名要有意义，避免使用无意义的变量名（如 `x`）。一个好的变量名可以更清晰地表明它代表的含义。
- 不能包含空格或连字符。如果需要多个词，可以使用**驼峰命名法**（camelCase），例如 `firstName`。
- 不能以数字开头。例如，`1stName` 是无效的，正确的方式应该是 `firstName1`。
- 变量名是大小写敏感的，`firstName` 和 `firstname` 被视为不同的变量。

**多个变量声明**

- 多个变量声明：可以在一行中声明多个变量，使用逗号分隔

  ```js
  let firstName, lastName;
  // let firstName = 'Mosh' , lastName;
  ```

- 现代最佳实践是每个变量单独声明在一行，并且每个声明语句后加上分号

  ```js
  let firstName;
  let lastName;
  ```

## 常量

> 在实际应用中，有时我们希望某些值在程序运行过程中保持不变，以避免不小心更改其值引起的错误和 bug。这时，我们使用**常量（Constants）**。
>
> **变量**（`let`）的值可以改变；而**常量**（`const`）的值一旦赋值后就不能再改变。
>
> _在早期，`var` 用得较多，但因为它存在一些问题，现在推荐使用 `const`。_

**声明方式**：`const`

```js
const interestRate = 0.05;
console.log(interestRate); // 输出: 0.05
```

**常量赋值后的限制**

- 一旦声明为常量，常量的值就不能再被修改，如果尝试修改常量的值，程序会抛出错误

  ```js
  const interestRate = 0.3;
  interestRate = 1;
  console.log(interestRate);
  //index.js:2 Uncaught TypeError: Assignment to constant variable.
  ```

**常量的最佳实践**

- 如果你不打算更改一个变量的值，使用 `const` 声明它作为常量是最佳实践。
- 如果需要更改值，则应使用 `let` 来声明变量。

## 原始数据类型

> 在 JavaScript 中，数据类型大致分为两类：
>
> - **原始数据类型（Primitives）**，也称为值类型。
> - **引用数据类型（Reference Types）**，将在后续课程中讲解。

**原始数据类型**

- 字符串（String）：字符串是由一系列字符组成的文本数据。
- 数字（Number）：数字用于表示整数和浮动数。
- 布尔值（Boolean）：布尔值只有两种可能的值：`true` 或 `false`。布尔值常用于逻辑判断。

- 未定义（Undefined）：如果声明了一个变量但没有给它赋值，它的默认值就是 `undefined`。`undefined` 也可以显式地赋值给变量，但这种做法不常见。

- 空值（Null）：`null` 是一个表示“无”或“空”的值。它常用在你想显式清除变量值的场合。

  _示例：假设用户可以选择颜色。如果用户没有做选择，我们将 `selectedColor` 设为 `null`。当用户选择了颜色时，我们可以重新赋值给该变量。_

```js
let name = "Alice"; // 字符串字面量
let age = 30; // 数字字面量
let isApproved = true; // 布尔值字面量
let firstName = undefined;
let selectedColor = null;
```

## 动态类型

（Dynamic Typing）

> #### **静态语言与动态语言的区别**
>
> - **静态语言**：在静态类型语言（如 Java、C++）中，变量的类型在编译时就已经固定，声明变量时必须指定类型，且在后续不能更改。
> - **动态语言**：在动态类型语言（如 JavaScript）中，变量的类型是在运行时根据赋给它的值来决定的，且可以随时更改。这就是 JavaScript 的特点。

当上节代码正在运行时，在 Chrome Dev Tool 中，使用命令更改变量类型

```bash
typeof isApproved
# 'boolean'
```

```bash
isApproved = 1;
typeof isApproved;
# 'number'
```

_下一节引入：原始类型的默认类型是 undefined，而引用类型的默认类型是 object 对象_

```bash
typeof firstName
# 'undefined'
typeof selectedColor
# 'object'
```

## 对象

> #### 引用类型（Reference Types）
>
> 引用类型包括对象（Object）、数组（Array）、函数（Function），这一节讲对象 Object
>
> #### **什么是对象？**
>
> - **定义**：在 JavaScript 中，对象（Object）是引用类型的一种。它类似于现实生活中的对象，比如一个“人”。
> - **现实生活中的例子**：一个人可能有多个属性，比如姓名、年龄、地址等，这些属性共同构成了“人”这个对象的描述。
> - **编程中的应用**：在编程中，如果多个变量是相关的，并且它们描述同一个实体（如“人”），我们可以把这些变量组合到一个对象中，这样代码会更加简洁和清晰。

**如何创建对象**

- **对象字面量**：在 JavaScript 中，使用花括号 `{}` 创建一个对象，这是最常见的对象创建方式，称为“对象字面量”。

  _定义了一个名为 person 的对象，包含两个属性：name 和 age，分别设置为 "Mosh" 和 30。_

  ```js
  let person = {
    name: "Mosh",
    age: 30,
  };
  console.log(person);
  // {name: 'Mosh', age: 30}
  ```

**访问和修改对象的属性**

- **点（.）表示法**：这是访问和修改对象属性最常用的方式。

  ```js
  person.name = "John"; // 修改对象的name属性
  console.log(person.name); // 输出: John
  ```

- **方括号（[]）表示法**：另一种访问和修改对象属性的方式，通常用于动态访问属性，或者当属性名中包含空格或特殊字符时。

  ```js
  person["name"] = "Mary"; // 修改对象的name属性
  console.log(person["name"]); // 输出: Mary
  ```

- **方括号（[]）表示法（间接）**

  ```JS
  let selection = "name";
  //这里的 person[selection] 实际上等同 person[name]
  person[selection] = "Mary";
  console.log(person.name);
  ```

## 数组

> 数组（Array）是用来存储一组有序数据的集合。在 JavaScript 中，数组是一种非常常用的数据结构。你可以用它来表示任何类型的列表，比如购物车中的产品列表、用户选择的颜色列表等。

**创建数组**

在 JavaScript 中，你可以通过数组字面量（`[]`）来创建一个数组。数组字面量是一对方括号，数组中的每个元素用逗号分隔。

- 创建空数组

  ```js
  let selectedColors = []; // 创建一个空数组(使用有意义的命名，而不是 sc )
  console.log(selectedColors); // 输出: []
  ```

- 在创建时赋值

  ```js
  let selectedColors = ["red", "blue"];
  console.log(selectedColors); // 输出: ['red', 'blue']
  ```

**访问数组元素**

每个数组中的元素都有一个索引，索引是从 `0` 开始的。你可以通过索引来访问数组中的元素。

```js
console.log(selectedColors[0]); // 输出: "red"  (访问数组中的第一个元素)
console.log(selectedColors[1]); // 输出: "blue" (访问数组中的第二个元素)
```

**数组是动态的**

JavaScript 的数组是动态的，这意味着数组的长度和元素类型是可以变化的。你可以随时向数组中添加新元素，数组的长度会自动更新。

- 使用`push`添加：默认加到数组最后，会自动更新数组长度

  ```js
  selectedColors.push("white");
  console.log(selectedColors); // 输出 ['red', 'blue', push: 'white']
  ```

- 指定位置添加：添加/修改数组指定为位置的值，若已有值会替换，若数组未达到该长度，会自动拓展，未定义位置默认未`undefined`

  ```js
  selectedColors[9] = "grey";
  console.log(selectedColors[8]); // 输出 undefined
  ```

**数组中的元素可以是不同类型**

与其他编程语言不同，JavaScript 数组中的每个元素不必是相同的数据类型。你可以将字符串、数字、布尔值等不同类型的数据存储在同一个数组中。

```js
selectedColors.push(1); // 向数组中添加数字
console.log(selectedColors);
//输出 ['red', 'blue', 'white', empty × 6, 'grey', 1]
```

**数组的类型**

虽然我们通常将数组视为一种特殊的数据结构，但在 JavaScript 中，数组实际上是一种对象。这意味着数组不仅可以存储数据，还可以拥有一些属性和方法。

```js
console.log(typeof selectedColors); // 输出: "object" (数组的类型是对象)
```

**数组的 `length` 属性**

每个数组都有一个 `length` 属性，表示数组中元素的数量。你可以通过访问 `length` 属性来获取数组的大小。空元素也被视为元素。

```js
console.log(selectedColors.length); // 输出: 11 (数组中有 11 个元素)
```

## 函数

> 函数（Functions）是 JavaScript 中的基本构建块之一。函数是执行任务或计算值的一组语句。通过函数，你可以将重复使用的代码封装起来，使得程序更加简洁和高效。

**函数声明**

在 JavaScript 中，你可以使用 `function` 关键字来声明一个函数。函数通常需要一个名称、圆括号和花括号。

```js
function greet() {
  console.log("Hello World");
}
greet(); // 输出: Hello World
```

- 这里，`greet` 是函数的名称。
- `()` 是圆括号，表示函数参数的位置（可以为空）。
- `{}` 是花括号，包含函数的主体，其中定义了函数的执行内容。

**函数参数（Parameters）**

函数可以接受输入值，我们称之为**参数**。参数在函数内部作为变量使用，可以影响函数的行为。

```js
function greet(name) {
  console.log("Hello " + name);
}
greet("John"); // 输出: Hello John
```

- 在函数声明时，`name` 是函数的**参数（Parameter）**。
- 在调用函数时，`"John"` 是传递给 `name` 参数的**实际值**，我们称之为**实参（Argument）**。

**多个参数**

函数可以有多个参数，参数之间使用逗号分隔。

```js
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greet("John", "Smith"); // 输出: Hello John Smith
```

- `firstName` 和 `lastName` 是函数的两个参数。
- 在调用函数时，我们需要分别为这两个参数传递相应的实参。

**缺少参数的情况**

如果在调用函数时没有为某个参数传递值，JavaScript 会为其默认赋值 `undefined`。

```js
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greet("John"); // 输出: Hello John undefined
```

- 由于缺少 `lastName` 参数，JavaScript 自动将其赋值为 `undefined`。

## 函数类型

> 在 JavaScript 中，函数可以分为执行任务的函数和计算值的函数。我们先来看一个执行任务的函数，它的任务是显示某些内容到控制台。

**任务型函数**

下面这个函数的主要任务就是将某些信息打印到控制台：

```js
function greet() {
  console.log("Hello World");
}
```

这里的 `greet` 函数只是执行任务，即输出“Hello World”到控制台。

**计算型函数**

有时，我们的函数不仅仅执行任务，还需要计算某些值，并将计算结果返回。比如，下面的例子是一个计算平方的函数：

```js
function square(number) {
  return number * number; // 计算并返回数字的平方
}
```

这里的 `square` 函数接受一个参数 `number`，并返回它的平方（`number * number`）。注意，`return` 关键字用于返回计算结果。返回值可以被用来做其他操作。

**函数调用**

我们可以通过调用这个 `square` 函数来获取结果，并将其赋值给变量：

```js
let result = square(5);
console.log(result); // 输出: 25
```

这段代码中，`square(5)` 调用返回了 `25`，然后将其赋给了 `result` 变量，最后通过 `console.log(result)` 输出到控制台。

**直接在调用中使用返回值**

有时我们不需要单独声明一个变量来存储返回值，可以直接在 `console.log` 中调用函数：

```js
console.log(square(5)); // 输出: 25
```

这里，`square(5)` 直接返回结果，并被传递给 `console.log` 打印到控制台。

**函数调用的嵌套**

注意到，`console.log` 本身也是一个函数调用，因为它有一对圆括号，并且我们传递了一个参数给它。这里的 `square(5)` 是作为参数传递给了 `console.log`。

```js
console.log(square(5)); // square(5) 返回 25，然后传给 console.log 打印
```

每个函数调用都会被执行，首先是 `square(5)` 被调用计算平方，接着结果被传递给 `console.log` 来显示。

# 运算符

## 概念

> 在 JavaScript 中，**运算符**是用于与变量和常量一起创建表达式的工具。通过这些表达式，我们可以实现逻辑和算法。

**运算符的分类**：

1. 算术运算符（Arithmetic Operators）
   用于执行数学计算，例如加、减、乘、除。
2. 赋值运算符（Assignment Operators）
   用于给变量赋值，例如将一个值或表达式的结果赋给变量。
3. 比较运算符（Comparison Operators）
   用于比较两个值的大小或关系，例如是否相等、大于或小于。
4. 逻辑运算符（Logical Operators）
   用于执行布尔逻辑操作，例如 AND（且）、OR（或）、NOT（非）。
5. 位运算符（Bitwise Operators）
   用于对数值的二进制位进行操作，例如按位与、按位或、按位异或。

## 算术运算符

> 算术运算符（Arithmetic Operators）用于在 JavaScript 中执行数学计算。这些运算符与数学运算类似，可以对变量和常量进行计算并生成新值。

**基本算术运算符**

- 加法（Addition）：用于两个数相加。

  ```js
  let x = 10;
  let y = 5;
  console.log(x + y); // 输出: 15
  ```

- 减法（Subtraction）：用于两个数相减。

  ```js
  console.log(x - y); // 输出: 5
  ```

- 乘法（Multiplication）：用于两个数相乘。

  ```js
  console.log(x * y); // 输出: 50
  ```

- 除法（Division）：用于两个数相除。

  ```js
  console.log(x / y); // 输出: 2
  ```

- 取余（Remainder of Division）：用于计算两个数相除后的余数。

  ```js
  console.log(x % y); // 输出: 0
  ```

- 指数运算（Exponentiation）

  计算一个数的幂，使用双星号 `**` 表示。

  ```js
  console.log(x ** y); // 输出: 100000（10 的 5 次方）
  ```

**增强的算术运算符**

- 自增运算符（Increment）：用于将变量的值加 1。符号为 `++`，根据符号的位置（前置或后置），行为有所不同。

  - 前置自增（`++x`）： 先将变量的值加 1，然后返回新的值。

    ```js
    let x = 10;
    console.log(++x); // 输出: 11
    ```

    - 后置自增（`x++`）： 先返回变量的当前值，然后再将变量的值加 1。

      ```js
      let x = 10;
      console.log(x++); // 输出: 10
      console.log(x); // 输出: 11
      ```

- **自减运算符（Decrement）**：用于将变量的值减 1。符号为 `--`，也分为前置和后置两种。

  - **前置自减（`--x`）：** 先将变量的值减 1，然后返回新的值。

    ```js
    let x = 10;
    console.log(--x); // 输出: 9
    ```

  - **后置自减（`x--`）：** 先返回变量的当前值，然后再将变量的值减 1。

    ```js
    let x = 10;
    console.log(x--); // 输出: 10
    console.log(x); // 输出: 9
    ```

## 赋值运算符

> **赋值运算符（Assignment Operators）** 用于将值赋给变量。我们已经在之前的示例中看到过简单的赋值运算符，它通过将右侧的值赋给左侧的变量来起作用。

**基本赋值运算符**

- 最常见的赋值运算符是 `=`，它将右侧的值赋给左侧的变量。

  ```js
  let x = 10; // 使用简单赋值运算符，将值 10 赋给变量 x
  ```

**结合算术运算符的赋值**

在上节课中，我们学习了算术运算符（如加法、减法、乘法等）。结合赋值运算符，可以更高效地对变量进行运算并同时更新它的值。

例如：

```js
let x = 10;
// 我们想将 x 的值加 5，然后再赋回 x
x = x + 5;
console.log(x); // 输出: 15
```

虽然这样写是完全可以的，但有一种更简单的方式，即**加法赋值运算符**。

**简化的运算符写法**

通过将算术运算符与赋值运算符结合，我们可以用更短的方式实现相同的功能。例如：

```js
let x = 10;
// 加法赋值
x += 5; // 等同于 x = x + 5
console.log(x); // 输出: 15

// 乘法赋值
x *= 2; // 等同于 x = x * 2
console.log(x); // 输出: 30
```

**支持的组合运算符**

除了加法赋值运算符 `+=`，我们还可以将其他的算术运算符与赋值运算符结合使用：

- **减法赋值运算符** `-=`：用于减去一个值并将结果赋回变量。

  ```js
  x -= 5; // 等同于 x = x - 5
  ```

- **除法赋值运算符** `/=`：用于将变量除以一个值并将结果赋回变量。

  ```js
  x /= 2; // 等同于 x = x / 2
  ```

- **乘法赋值运算符** `*=`：用于将变量乘以一个值并将结果赋回变量。

  ```js
  x *= 3; // 等同于 x = x * 3
  ```

- **取余赋值运算符** `%=`：用于对变量求余数并将结果赋回变量。

  ```js
  x %= 4; // 等同于 x = x % 4
  ```

- **指数赋值运算符** `**=`：用于计算变量的幂并将结果赋回变量。

  ```js
  x **= 2; // 等同于 x = x ** 2
  ```

## 比较运算符

> 比较运算符（Comparison Operators）用于比较两个值的大小或关系。比较运算的结果始终是一个布尔值（Boolean），即 `true` 或 `false`。这些运算符也称为**关系运算符（Relational Operators）**

- 大于（Greater Than）：`>`

  检查一个值是否大于另一个值。

  ```js
  let x = 10;
  console.log(x > 5); // 输出: true
  ```

  在此示例中，`x` 的值是 10，`x > 5` 表示 `x` 是否大于 5。因为条件成立，所以结果是 `true`。

- 大于或等于（Greater Than or Equal To）：`>=`

  检查一个值是否大于或等于另一个值。

  ```js
  console.log(x >= 10); // 输出: true
  ```

  这里，`x` 的值是 10，`x >= 10` 表示 `x` 是否大于或等于 10。条件成立，因此结果是 `true`。

- 小于（Less Than）：`<`

  检查一个值是否小于另一个值。

  ```js
  console.log(x < 5); // 输出: false
  ```

  因为 `x` 的值是 10，不小于 5，所以结果是 `false`。

- 小于或等于（Less Than or Equal To）：`<=`

  检查一个值是否小于或等于另一个值。

  ```js
  console.log(x <= 10); // 输出: true
  ```

  条件成立，因为 `x` 等于 10，结果为 `true`。

## 相等运算符

> JavaScript 中提供了两种相等运算符：**严格相等运算符（Strict Equality Operator）** 和 **宽松相等运算符（Loose Equality Operator）**

**严格相等运算符（`===`）**：要求左右两边的值类型和值本身必须完全相等

- 严格相等

  ```js
  console.log(x === "10"); // 输出: false
  ```

  这里，虽然 `x` 和 `"10"` 的值相同，但数据类型不同（`x` 是数字，`"10"` 是字符串），所以结果是 `false`。

- 严格不相等

  ```js
  console.log(x !== 10); // 输出: false
  ```

  这里，`x` 的值是 10，且类型为数字，与比较值完全一致，因此结果为 `false`。

**宽松相等运算符（`==`）**：在比较前会尝试将两边的值进行类型转换，使其类型一致，然后再比较值。

- 相等（Equality）：`==`

  ```js
  console.log(x == "10"); // 输出: true
  console.log(true == 1); // 输出: true，这里 true 被强制转换为1
  console.log(false == 0); // 输出: true，这里 false 被强制转换为0
  ```

  在此示例中，JavaScript 会将字符串 `"10"` 转换为数字 `10` 进行比较，因此结果是 `true`。

- 不相等（Not Equal To）：`!=`
  ```js
  console.log(x != "5"); // 输出: true
  ```
  因为 `x` 的值是 10，而不是 `"5"`，所以结果为 `true`。

## 三元运算符

> **三元运算符**（Ternary Operator），也叫条件运算符，是 JavaScript 中一个非常简洁且常用的工具，用于根据条件决定赋值或执行操作。

**语法结构**

```js
condition ? expression1 : expression2;
```

- `condition`：一个返回布尔值的条件表达式。
- `expression1`：当 `condition` 为 `true` 时执行的表达式或返回的值。
- `expression2`：当 `condition` 为 `false` 时执行的表达式或返回的值。

**示例：客户类型**

假设我们需要根据客户的积分来确定其类型：如果积分大于或等于 100，则为 "金牌客户"。否则，为 "银牌客户"。

```js
let points = 120; // 声明一个变量，用于记录客户积分
let type = points >= 100 ? "gold" : "silver"; // 使用三元运算符判断客户类型
console.log(type); // 输出: gold
```

在这个例子中，如果 `points >= 100` 为 `true`，将 `type` 设置为 `'gold'`，否则设置为 `'silver'`。

**应用场景**

1. 简单的条件判断并赋值。
2. 需要根据条件选择值或执行轻量逻辑时。

**注意事项**

- 可读性：虽然三元运算符很简洁，但如果逻辑过于复杂，可能会影响代码可读性。可以考虑改用 `if...else` 语句。
- 嵌套使用：_避免嵌套多个三元运算符，以免代码难以维护。若嵌套使用，代码质检会报告异常_

## 逻辑运算符

> **逻辑运算符**用于基于多个条件进行决策。在 JavaScript 中，有三种常用的逻辑运算符：**逻辑与**（AND）、**逻辑或**（OR）、**逻辑非**（NOT）。

**逻辑与运算符（`&&`）**：逻辑与运算符用于检查两个条件是否同时为 `true`。只有当两个操作数都为 `true` 时，结果才为 `true`。

- 基本语法

  ```javascript
  operand1 && operand2;
  ```

  - 当 `operand1` 和 `operand2` 都为 `true` 时，结果为 `true`。
  - 否则，结果为 `false`。

- 示例

  ```javascript
  console.log(true && true); // 输出: true
  console.log(true && false); // 输出: false
  console.log(false && true); // 输出: false
  console.log(false && false); // 输出: false
  ```

- 实际应用：贷款申请

  假设我们正在构建一个贷款审批应用，我们希望检查一个申请人是否同时符合“高收入”和“良好的信用评分”两个条件，才能批准贷款：

  ```javascript
  let highIncome = true; // 高收入
  let goodCreditScore = true; // 良好的信用评分
  
  let eligibleForLoan = highIncome && goodCreditScore; // 贷款批准条件
  
  console.log(eligibleForLoan); // 输出: true
  ```

  在这个例子中，只有当申请人同时符合这两个条件（高收入且良好的信用评分），`eligibleForLoan` 才为 `true`，表示该申请人符合贷款资格。

**逻辑或运算符（`||`）**：逻辑或运算符用于检查至少有一个条件为 `true`，结果便为 `true`。只要有一个操作数为 `true`，结果就是 `true`。

- 基本语法

  ```javascript
  operand1 || operand2;
  ```

  - 当 `operand1` 或 `operand2` 任意一个为 `true` 时，结果为 `true`。
  - 如果两个操作数都为 `false`，结果才为 `false`。

- 示例

  ```js
  console.log(true || true); // 输出: true
  console.log(true || false); // 输出: true
  console.log(false || true); // 输出: true
  console.log(false || false); // 输出: false
  ```

- 实际应用：

  假设一个贷款申请人只要满足以任一条件即可批准贷款，收入较高，或者信用评分较高

  ```js
  let highIncome = true; // 高收入
  let goodCreditScore = false; // 不良信用评分
  
  let eligibleForLoan = highIncome || goodCreditScore; // 贷款批准条件
  
  console.log(eligibleForLoan); // 输出: true
  ```

  在这个例子中，只要申请人满足一个条件（如高收入），就会被批准贷款。

**逻辑非运算符（`!`）**：逻辑非运算符用于取反一个布尔值。如果原值为 `true`，则结果为 `false`；如果原值为 `false`，则结果为 `true`。

- 基本语法

  ```js
  !operand;
  ```

  - 如果 `operand` 为 `true`，结果为 `false`。

  - 如果 `operand` 为 `false`，结果为 `true`。

- 示例

  ```js
  console.log(!true); // 输出: false
  console.log(!false); // 输出: true
  ```

- 实际应用：拒绝贷款

  在贷款审批应用中，如果申请人不符合贷款条件（即 `eligibleForLoan` 为 `false`），我们可以使用逻辑非运算符来判断其是否被拒绝贷款。

  ```js
  let highIncome = false; // 低收入
  let goodCreditScore = false; // 不良信用评分
  
  let eligibleForLoan = highIncome && goodCreditScore; // 贷款批准条件
  let applicationRefused = !eligibleForLoan; // 贷款拒绝
  
  console.log("Eligible for loan: " + eligibleForLoan); // 输出: false
  console.log("Application refused: " + applicationRefused); // 输出: true
  ```

  在此例中，因为 `eligibleForLoan` 为 `false`，使用 `!eligibleForLoan` 后，`applicationRefused` 为 `true`，表示申请被拒绝。

## 逻辑运算符与非布尔值

> 在上一讲中，我们学习了逻辑运算符，并且我们都使用了布尔值（`true` 或 `false`）作为操作数。但是在 JavaScript 中，与许多编程语言不同，**逻辑运算符也可以与非布尔值一起使用**。这非常强大！

**逻辑或运算符（`||`）与非布尔值**

在 JavaScript 中，逻辑运算符不仅限于布尔值。当我们将 非布尔值 与逻辑运算符一起使用时，结果不一定是 `true` 或 `false`。这取决于操作数的值。让我们通过几个例子来理解这一点。

- 示例

  ```js
  console.log(false || true); // 输出: true
  console.log(false || "Mosh"); // 输出: Mosh
  console.log(false || 1); // 输出: 1
  ```

  - 在第一个例子中，第二个操作数是 `true`，因此返回 `true`。

  - 在第二个例子中，第二个操作数是一个字符串 `"Mosh"`，因此返回这个字符串。

  - 在第三个例子中，第二个操作数是数字 `1`，因此返回 `1`。

- 关键点： JavaScript 的逻辑运算符返回的结果不仅限于布尔值，它可能是任何值，这取决于操作数的类型。

**Truthy 和 Falsy 值**

当我们使用逻辑运算符时，JavaScript 会将操作数解释为“**truthy**”（真值）或“**falsy**”（假值）。这些值并不等同于布尔值的 `true` 或 `false`，但它们可以在逻辑运算中起到类似的作用。

- Falsy 值：在 JavaScript 中，有一些值被认为是 **falsy**（假值），它们会在布尔上下文中被转换为 `false`。这些值包括：

  - `undefined`

  - `false`

  - `null`

  - `0`

  - `NaN`

  - `""`（空字符串）

- Truthy 值：任何不是 **falsy** 的值都被认为是 **truthy**（真值）。这包括字符串、非零数字、对象、数组、函数等。

  ```js
  // 示例
  console.log(!!undefined); // 输出: false
  console.log(!!false); // 输出: false
  console.log(!!"Mosh"); // 输出: true
  console.log(!!1); // 输出: true
  console.log(!!{}); // 输出: true
  ```

  - `!!` 是一个将值转换为布尔值的常见技巧。它将值转换为 `true` 或 `false`。

**短路计算（Short-circuiting）**

逻辑运算符的强大之处在于它们的 **短路特性**。当 JavaScript 计算逻辑表达式时，一旦它找到一个确定的结果，它就会停止评估其他操作数。

- 逻辑或（`||`）：_如果左侧的操作数是 truthy，那么结果就是左侧的值，右侧的操作数将不再被计算（短路）。如果左侧是 falsy，那么 JavaScript 会继续评估右侧的操作数。_

- 示例

  ```js
  console.log(false || "Mosh"); // 输出: Mosh
  console.log(false || 1); // 输出: 1
  console.log("Mosh" || "John"); // 输出: Mosh
  ```

  - 在第一个例子中，`false` 是 falsy，因此继续评估右侧的操作数 `"Mosh"`，并返回 `"Mosh"`。

  - 在第二个例子中，`false` 也是 falsy，因此继续评估右侧的 `1`，并返回 `1`。

  - 在第三个例子中，`"Mosh"` 是 truthy，因此立即返回 `"Mosh"`，并且右侧的 `"John"` 被忽略。

**现实世界的应用：默认值**

逻辑运算符非常适合用来设置 默认值。例如，如果用户未选择颜色，我们可以使用一个默认颜色。

- 示例：设置默认颜色

  ```js
  let userColor = "red"; // 用户选择的颜色
  let defaultColor = "blue"; // 默认颜色
  let currentColor = userColor || defaultColor; // 如果没有用户选择颜色，则使用默认颜色
  
  console.log(currentColor); // 输出: red
  ```

  如果用户未选择颜色（例如，`userColor` 为 `undefined`），我们将使用默认颜色。

  ```javascript
  let userColor = undefined; // 用户未选择颜色
  let defaultColor = "blue"; // 默认颜色
  let currentColor = userColor || defaultColor; // 使用默认颜色
  
  console.log(currentColor); // 输出: blue
  ```

## 位运算符

> 在 JavaScript 中，位运算符（bitwise operators）用于按位操作数字的二进制表示。位运算符与逻辑运算符相似，但它们作用于数字的单个位（bit）。

**基本概念**

- 位运算符直接操作数字的二进制位，通过逐个位地进行比较。
- 位与（AND）：仅当两个对应的位都为 `1` 时，结果才为 `1`。
- 位或（OR）：只要两个对应的位中有一个为 `1`，结果就是 `1`。

**位运算符实例**

- 位或运算符（`|`）

  ```js
  let result = 5 | 3; // 位或操作
  console.log(result); // 输出: 7
  ```

  解释：5 的二进制是 `0101`，3 的二进制是 `0011`，经过位或操作后得到 `0111`（即 7）。

- 位与运算符（`&`）

  ```js
  let result = 5 & 3; // 位与操作
  console.log(result); // 输出: 1
  ```

  解释：5 的二进制是 `0101`，3 的二进制是 `0011`，经过位与操作后得到 `0001`（即 1）。

**位运算符的现实应用**

虽然位运算符在日常开发中不常见，但它们有一些特殊的应用场景。例如，我们可以使用位运算符来处理 **权限管理系统**。假设我们要给用户分配权限，如读取、写入和执行权限，可以通过位运算符来实现这些权限的分配与检查。

- 权限管理系统示例：我们可以将每个权限表示为一个二进制位，然后通过位运算符来添加和检查这些权限。

  - 读取权限（readPermission）：`0001`（十进制为 1）
  - 写入权限（writePermission）：`0010`（十进制为 2）
  - 执行权限（executePermission）：`0100`（十进制为 4）

- 示例

  ```js
  // 定义各个权限的二进制表示
  const readPermission = 4; // 0100
  const writePermission = 2; // 0010
  const executePermission = 1; // 0001

  // 用户的权限
  let myPermission = 0; // 初始无权限

  // 给用户添加读取和写入权限
  myPermission = myPermission | readPermission | writePermission;

  console.log(myPermission); // 输出: 6 (0110)
  ```

- 检查权限

  可以使用 位与运算符（`&`） 来检查用户是否拥有某个特定权限。

  ```js
  let message = myPermission & readPermission ? "Yes" : "No";
  console.log(message); // 输出: Yes
  ```

  - 解释：通过使用位与运算符，我们检查 `myPermission` 中是否包含 `readPermission` 权限。如果结果为 `1`，表示用户拥有该权限，输出 `"Yes"`。

- 取消权限

  通过位运算符我们也能取消某个权限，例如，如果我们希望取消读取权限：

  ```js
  myPermission = myPermission & ~readPermission; // 取消读取权限
  console.log(myPermission); // 输出: 2 (0010)
  ```

  - 解释：`~readPermission` 是 `readPermission` 的按位取反操作，表示禁用该权限。通过位与运算符，我们从 `myPermission` 中去除了读取权限。

## 运算符优先级

> 每种运算符都有自己的优先级，优先级较高的运算符会先执行。常见的运算符优先级从高到低大致如下：
>
> 1. **括号** `()`：括号中的表达式最先计算。
> 2. **乘法、除法、取余** `* / %`：这些运算符优先级较高。
> 3. **加法、减法** `+ -`：这些运算符优先级低于乘除运算。
> 4. **比较运算符** `== !== < > <= >=`。
> 5. **逻辑运算符** `&& ||`：这些运算符优先级最低。

- 示例

  ```js
  let result = 3 + 4 * 2;
  console.log(result); // 输出: 11
  ```

  - 解释：这个结果为 `11`，而不是 `14`，因为乘法（`*`）运算符的优先级高于加法（`+`）运算符。因此，首先执行 `4 * 2`，得到 `8`，然后再执行 `3 + 8`，最终结果为 `11`。

- 使用括号明确优先级

  由于不同的运算符有不同的优先级，在处理复杂表达式时，建议使用 **括号** 来明确表达式的计算顺序，以避免因运算符优先级导致的错误。

  ```js
  let result = (3 + 4) * 2;
  console.log(result); // 输出: 14
  ```

  解释：在这个例子中，使用括号强制先执行 `3 + 4`，然后再乘以 `2`，所以最终结果是 `14`。

## Ex1 交换元素

> 下面是最常见的交换方式，如果仅仅是交换数字，还有其他交换方式

```js
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a); // 输出：blue
console.log(b); // 输出：red
```

# 控制流程

## `if` 和 `else` 条件语句

> 两种常见的条件语句：**if 和 else**，以及 **switch 和 case**。本节我们先讨论 `if` 和 `else`，下节将讨论 `switch` 和 `case`。
>
> 假设我们要根据当前的小时数来决定显示不同的问候信息。例如：
>
> - 如果当前小时在早上（0-11 之间），显示 "Good Morning"。
> - 如果是下午（12-17 之间），显示 "Good Afternoon"。
> - 否则显示 "Good Evening"。
>
> 这时我们可以使用 `if` 和 `else` 条件语句来实现这个逻辑。

**基本语法**

1. `if` 语句：首先，我们使用 `if` 关键字，然后在圆括号内添加一个条件表达式。如果条件表达式为 `true`，那么 `if` 语句后面的代码将被执行。

   ```javascript
   if (condition) {
     // 条件为 true 时执行的代码
   }
   ```

2. `else if` 语句：如果 `if` 条件不成立，还可以使用 `else if` 来检查其他条件。

   ```javascript
   if (condition) {
     // 条件为 true 时执行的代码
   } else if (otherCondition) {
     // 第二个条件为 true 时执行的代码
   }
   ```

3. `else` 语句：如果没有其他条件满足，可以使用 `else` 来执行最后的默认操作。

   ```javascript
   if (condition) {
     // 条件为 true 时执行的代码
   } else {
     // 条件为 false 时执行的代码
   }
   ```

**示例：根据时间问候用户**

假设我们已经获取到了当前的小时数，我们想根据不同的小时数来显示不同的问候语。

```js
let hour = 10; // 假设当前时间是上午 10 点

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

- `if` 语句检查当前时间是否在早晨（0 到 11 点之间）。如果是，则输出 "Good Morning"。

- 如果第一个条件不成立，`else if` 语句会检查时间是否在下午（12 到 17 点之间）。如果是，则输出 "Good Afternoon"。

- 如果上述条件都不成立，`else` 语句会执行，输出 "Good Evening"。

- 进一步简化代码：在这个例子中，如果只有单个语句需要执行，我们可以省略大括号 `{}` 来简化代码。

  ```js
  let hour = 10; // 假设当前时间是上午 10 点
  
  if (hour >= 0 && hour < 12) console.log("Good Morning");
  else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
  else console.log("Good Evening");
  ```

## `switch` 和 `case` 条件语句

> 假设我们想要根据用户的角色（比如访客、版主或管理员）显示不同的消息。虽然我们可以使用多个 **if** 和 **else** 语句来实现这个逻辑，但我们也可以使用 **switch** 和 **case** 来使代码更加简洁和清晰。

**基本语法**

1. `switch` 语句：`switch` 语句用于根据一个变量的值执行不同的代码块。

   ```javascript
   switch (variable) {
     case value1:
       // 如果变量的值等于 value1，执行这段代码
       break;
     case value2:
       // 如果变量的值等于 value2，执行这段代码
       break;
     default:
     // 如果变量的值没有匹配到任何 case，执行这段代码
   }
   ```

2. `case` 语句：每个 `case` 用来与 `switch` 中的变量值进行比较。如果相等，则执行对应的代码块。

3. `break` 语句：`break` 用来跳出 `switch` 语句块，防止执行后续的 `case` 语句。如果没有 `break`，`switch` 会继续执行下面的所有语句（即 **fall-through** 行为）。

4. `default` 语句：`default` 是一个可选的语句，用来处理所有没有匹配到任何 `case` 的情况。

**示例：根据用户角色显示信息**

假设我们有一个变量 `role`，它代表当前用户的角色。我们希望根据用户的角色显示不同的消息，比如 Guest、Moderator 或 Admin。使用 `switch` 和 `case` 可以轻松实现：

```js
let role = "guest"; // 假设当前角色是 "guest"

switch (role) {
  case "guest":
    console.log("Guest user");
    break;
  case "moderator":
    console.log("Moderator user");
    break;
  case "admin":
    console.log("Admin user");
    break;
  default:
    console.log("Unknown role");
}
```

- `switch (role)`：我们用 `role` 变量来进行比较。

- `case "guest"`：如果 `role` 是 `"guest"`，输出 `"Guest user"`。

- `case "moderator"`：如果 `role` 是 `"moderator"`，输出 `"Moderator user"`。

- `case "admin"`：如果 `role` 是 `"admin"`，输出 `"Admin user"`。

- `default`：如果 `role` 不是 `"guest"`、`"moderator"` 或 `"admin"`，就输出 `"Unknown role"`。

**`break` 和 `fall-through` 行为**

如果在 `case` 语句中忘记写 `break`，会发生 **fall-through** 行为，即程序会继续执行下一个 `case` 语句。

```js
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest user");
  case "moderator":
    console.log("Moderator user");
  case "admin":
    console.log("Admin user");
  default:
    console.log("Unknown role");
}
```

在这个例子中，即使 `role` 是 `"guest"`，它仍然会输出 `"Guest user"`、`"Moderator user"`、`"Admin user"` 和 `"Unknown role"`。为了避免这种情况，我们需要在每个 `case` 后面加上 `break`，以确保程序在匹配到一个 `case` 后停止。

**用 `if` 和 `else` 实现相同的逻辑**

实际上，使用 `switch` 和 `case` 来实现逻辑并不是唯一的选择，我们也可以使用多个 `if` 和 `else` 来实现相同的功能。比如：

```js
let role = "guest";

if (role === "guest") console.log("Guest user");
else if (role === "moderator") console.log("Moderator user");
else if (role === "admin") console.log("Admin user");
else console.log("Unknown role");
```

- 在这里，我们使用了 严格相等（`===`） 来比较 `role` 的值。如果 `role` 是 `"guest"`，就输出 `"Guest user"`；否则，如果 `role` 是 `"moderator"`，输出 `"Moderator user"`，以此类推。

**`switch` 和 `case` 的优缺点**

- 优点：
  - 当需要比较一个变量与多个值时，`switch` 和 `case` 可以让代码更简洁和直观。
  - 语法清晰，容易理解，尤其是在有多个条件判断的情况下。
- 缺点：
  - 使用 `switch` 时需要为每个 `case` 添加 `break`，否则可能会发生 **fall-through** 行为，导致意外的执行多个 `case`。
  - 相比 `if` 和 `else`，`switch` 语句在某些场景下会显得有些臃肿，特别是当条件较少时。

## `For`循环语句

> 有时我们希望重复某个操作多次，我们可以使用循环（LOOP）来简化。循环在 JavaScript 中有多种类型，所有这些循环的核心作用是：**重复某个操作若干次**。常见的循环有：
>
> - `for` 循环
> - `while` 循环
> - `do while` 循环
> - `for in` 循环
> - `for of` 循环
>
> 这些循环的基本作用相同，但它们的起始和结束方式略有不同。我们从 `for` 循环开始。

**基本语法**

由三个表达式组成，初始表达式、条件表达式、增量表达式

```js
for (initialExpression; condition; incrementExpression) {
  // 循环体
}
```

1. 初始表达式 (`initialExpression`)：用来声明和初始化变量。通常使用 `let` 来声明一个索引变量 `i`，这是 `for` 循环的常见约定。

   ```javascript
   let i = 0;
   ```

2. 条件表达式 (`condition`)：循环会在这个条件为 `true` 时继续执行。

   ```javascript
   i < 5; // 条件：i 小于 5
   ```

3. 增量表达式 (`incrementExpression`)：每次循环结束时，更新变量的值。常见的操作是使用递增操作符。

   ```javascript
   i++; // i 每次增加 1
   ```

**完整示例：**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}
```

- 在第一次执行时，`i` 为 0，满足 `i < 5` 的条件，执行循环体中的代码。
- 执行完循环体后，`i++`，`i` 增加 1，变成 1，再次检查条件。
- 这个过程会重复，直到 `i` 达到 5，此时 `i < 5` 的条件不成立，循环终止。

**输出 i 的值**

为了观察循环的执行过程，我们可以在循环中输出 `i` 的值。

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}
```

**筛选奇数**

假设我们想要输出从 1 到 5 的奇数，可以结合 `if` 语句：

```javascript
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i); // 输出奇数
}
```

**倒序输出**

有时我们需要逆序执行循环，例如输出 5 到 1 的奇数：

```javascript
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i); // 输出奇数
}
```

## `while` 循环语句

> 在上一节中，我们使用 `for` 循环来显示所有的奇数，现在我们将使用 `while` 循环来实现相同的功能。
>
> - 在 `for` 循环中，循环变量（如 `i`）是循环的一部分，而在 `while` 循环中，循环变量需要在循环外部声明。
>
> - `while` 循环的条件判断和执行过程与 `for` 循环类似，适合在循环次数不确定时使用。
> - 在实际开发中，选择使用 `for` 或 `while` 循环通常取决于代码的清晰度和实际需求。

**`while` 循环的基本结构**

```javascript
while (condition) {
  // 循环体
}
```

- `condition`：循环继续执行的条件。只要条件为 `true`，循环就会继续。
- 循环体中的代码会在每次条件为 `true` 时执行。

**将 `for` 循环转换为 `while` 循环**

我们以显示从 1 到 5 的奇数为例，将 `for` 循环转换为 `while` 循环。

- `for` 循环版本：

  ```javascript
  for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i); // 输出奇数
  }
  ```

- 转换为 `while` 循环：

  ```javascript
  let i = 1; // 在循环外部声明 i
  while (i <= 5) {
    if (i % 2 !== 0) console.log(i); // 输出奇数
    i++; // 增加 i
  }
  ```

  1. 声明变量：在 `while` 循环中，`i` 必须在循环外部声明。这与 `for` 循环不同，`for` 循环中的 `i` 只在循环内部有效，而在 `while` 循环中，我们需要在外部提前声明。
  2. 条件表达式：`while` 循环会先检查条件 (`i <= 5`)，如果条件为 `true`，循环体会执行。然后，每次循环结束时，`i` 会增加 1。
  3. 循环执行：在每次迭代中，`i` 会增加 1，直到 `i > 5`，循环停止。

## `do-while` 循环语句

> `do-while` 循环与 `while` 循环类似，但有一个重要的区别：
>
> - 在 `while` 循环中，条件是在每次循环开始之前检查，如果条件为 `false`，循环体不会执行。
> - 在 `do-while` 循环中，循环体会**至少执行一次**，然后再检查条件。

**`do-while` 循环的基本语法**

```javascript
do {
  // 循环体
} while (condition);
```

- `do`：先执行循环体中的代码。
- `condition`：在每次循环结束后检查条件，决定是否继续循环。

**示例：将 `while` 循环转换为 `do-while` 循环**

- `while` 循环版本：

  ```javascript
  let i = 1; // 初始化变量
  while (i <= 5) {
    if (i % 2 !== 0) console.log(i); // 输出奇数
    i++; // 增加 i
  }
  ```

- `do-while` 循环版本：

  ```javascript
  let i = 1; // 初始化变量
  do {
    if (i % 2 !== 0) console.log(i); // 输出奇数
    i++; // 增加 i
  } while (i <= 5);
  ```

**`do-while` 的特点**

即使初始条件为 `false`，`do-while` 循环仍会执行一次。例如：

```javascript
let i = 6; // 初始化变量
do {
  console.log(i); // 输出 i
  i++; // 增加 i
} while (i <= 5); // 条件为 false

//输出结果 6
```

- 执行过程

  1. 首先执行 `do` 块中的代码。

  2. 然后检查 `while` 条件：

     - 如果条件为 `true`，返回第 1 步，继续执行。

     - 如果条件为 `false`，循环终止。

**`do-while` 的适用场景**

虽然在实际编程中很少使用 `do-while` 循环，但在某些情况下它是有用的。例如：

1. 确保用户至少输入一次：

   ```javascript
   let input;
   do {
     input = prompt("Enter a number greater than 10:");
   } while (input <= 10);
   console.log("You entered:", input);
   ```

2. 需要先执行操作，再检查条件：

   ```javascript
   let isRunning = true;
   do {
     console.log("Executing the operation...");
     // 根据某些逻辑更新 isRunning
     isRunning = false; // 模拟终止条件
   } while (isRunning);
   ```

## 无限循环

> **无限循环（Infinite Loops）**
>
> **无限循环概念：**
>
> - **无限循环**是指循环永远不会终止，代码会一直执行，直到强制停止程序。
> - 这种情况通常是由于忘记更新循环条件或条件永远为 `true` 导致的。
>
> **为什么要避免无限循环？**
>
> - 无限循环会占用计算机的 CPU 资源，导致程序无响应，甚至可能导致浏览器或计算机崩溃。
> - 如果不小心创建了无限循环，你可能需要强制关闭浏览器或程序来恢复正常。

**无限循环的常见示例**

1. `while` 循环中的无限循环：

   ```javascript
   let i = 1; // 初始化变量
   while (i <= 5) {
     console.log(i);
     // 忘记更新 i，条件永远为 true
   }
   ```

   - 问题：由于 `i` 没有更新，`i <= 5` 的条件始终为 `true`，导致循环永远不会结束。

2. `do-while` 循环中的无限循环：

   ```javascript
   let x = 1; // 初始化变量
   do {
     console.log(x);
     // 忘记更新 x
   } while (true); // 条件始终为 true
   ```

   - 问题：`while (true)` 保证循环条件一直成立，导致循环永远不会终止。

3. `for` 循环中的无限循环：

   ```javascript
   for (let i = 1; i > 0; i++) {
     console.log(i);
   }
   ```

- 问题：条件 `i > 0` 始终为 `true`，导致循环永远不会结束。

或者：

```javascript
for (;;) {
  console.log("This loop runs forever!");
}
```

- 问题：`for` 循环中没有初始化、条件或更新语句，导致循环无条件执行。

## `for-in` 循环

> **`for-in` 循环概念**
>
> - `for-in` 循环用于遍历对象的属性或数组的索引。
> - 它适用于对象中的所有可枚举属性，但并不适合迭代数组中的元素（有更理想的方法）。

**基本语法**

```javascript
for (let key in object) {
  // 在每次迭代中，key 是对象的一个属性名
}
```

- `key`：循环变量，在每次迭代时会被设置为对象的一个属性名。
- `object`：要遍历的对象。

**对象中的 `for-in`**

1. 定义对象：

   ```javascript
   let person = {
     name: "Mosh",
     age: 30,
   };
   ```

2. 遍历对象的属性：

   ```javascript
   for (let key in person) console.log(key); // 输出属性名
   // name
   // age
   ```

3. 访问属性的值：

   - 可以使用**方括号表示法**来访问属性值，因为属性名是动态的（即变量 `key` 的值）。

     ```javascript
     for (let key in person) {
       console.log(key, person[key]); // 输出属性名和属性值
     }
     
     // name Mosh
     // age 30
     ```

**为什么使用方括号表示法？**

- person 中没有`key`这个属性，而如果写成`person.key`，这个表达式会在运行时间计算，会报错，应该用下面的表达

  示例：

  ```javascript
  for (let key in person) console.log(key, person[key]);
  ```

**数组中的 `for-in`**

虽然 `for-in` 可以用来遍历数组，但它不是最理想的选择。

1. 定义数组：

   ```javascript
   let colors = ["red", "green", "blue"];
   ```

2. 使用索引来访问数组元素：

   ```javascript
   for (let index in colors) console.log(index, colors[index]);
   // 0 red
   // 1 green
   // 2 blue
   ```

**`for-in` 的局限性**

- 不适合遍历数组：
  - `for-in` 遍历的是索引，而不是值。
  - 它可能会遍历数组中非标准的属性（如自定义属性）。
- 更好的选择：`for-of`
  - `for-of` 循环更适合数组，它直接迭代数组的元素，而不是索引。

## `for-of` 循环

> - `for-of` 循环是一种新的（ES6）、更简洁的方式，用于遍历**数组中的元素**。
> - 与 `for-in` 不同，`for-of` 直接访问数组的元素，而不是索引。

**基本语法**

```javascript
for (let element of iterable) {
  // 在每次迭代中，element 是当前迭代的值
}
```

- `element`：循环变量，在每次迭代中保存数组中的一个元素。
- `iterable`：可迭代的对象，例如数组、字符串等。

**数组中的 `for-of`**

1. 定义数组：

   ```javascript
   let colors = ["red", "green", "blue"];
   ```

2. 遍历数组的元素：

   ```javascript
   for (let color of colors) console.log(color); // 输出数组中的元素

   // red
   // green
   // blue
   ```

3. 优点：无需处理索引

   - 在传统的 `for` 或 `for-in` 循环中，我们需要通过索引访问元素。
   - `for-of` 直接提供数组的元素，无需额外处理索引。

## `break` 和 `continue` 关键词

> - **`break`**：终止当前循环，直接跳出循环块。
> - **`continue`**：跳过当前循环的剩余代码，直接进入下一次迭代。使用的较少，可能会被认为是垃圾代码。

**`break`**

- 基本概念：在循环中，`break` 会立即终止循环，不再执行剩余的迭代。

- 示例

  ```javascript
  let i = 0;
  
  while (i <= 10) {
    if (i === 5) break;
  
    console.log(i);
    i++;
  }
  
  //输出 0-4
  ```

  解释：

  - 当 `i` 等于 5 时，`if` 条件为 `true`，执行 `break`。
  - 循环立即终止，不再继续执行。

**`continue`**

- 基本概念：`continue` 会跳过当前循环的剩余部分，直接进入下一次迭代。

- 示例

  ```javascript
  let i = 0;
  
  while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
      i++;
      continue;
    }
  
    console.log(i);
    i++;
  }
  
  //输出 1 3 5 7 9
  ```

  解释：

  - 当 `i` 是偶数时，`continue` 跳过 `console.log(i)`，直接进入下一次迭代。
  - 只有奇数被打印出来。

## Ex1 返回两个数中的较大值

> 编写一个函数：
>
> 1. 接受两个数字作为参数。
> 2. 返回两个数字中的较大值。
>
> 测试此函数时请考虑以下情况：
>
> - 当第一个数字较大时。
> - 当第二个数字较大时。
> - 当两个数字相等时。

```js
function max(a, b) {
  return a > b ? a : b; // 如果 a 比 b 大，返回 a；否则返回 b
}

// 测试函数
console.log(max(5, 10)); // 输出：10
console.log(max(20, 15)); // 输出：20
console.log(max(7, 7)); // 输出：7
```

## Ex2 判断图片是否是横向

> 编写一个函数：
>
> 1. 接受图片的宽度和高度作为参数。
> 2. 如果图片是横向（宽度大于高度），返回 `true`。
> 3. 否则返回 `false`。
>
> **提示：** 避免显式返回 `true` 或 `false`，直接返回表达式的值。

```js
function isLandscape(width, height) {
  return width > height; // 如果宽度大于高度，返回 true；否则返回 false
}

// 测试函数
console.log(isLandscape(1920, 1080)); // 输出：true（横向）
console.log(isLandscape(1080, 1920)); // 输出：false（纵向）
console.log(isLandscape(1000, 1000)); // 输出：false（正方形）
```

## Ex3 实现 FizzBuzz 算法

> 编写一个函数 `fizzBuzz`，接受一个输入值并返回以下结果：
>
> 1. 如果输入值是数字且能被 **3 和 5** 同时整除，返回字符串 `"FizzBuzz"`。
> 2. 如果输入值是数字且能被 **3** 整除，返回字符串 `"Fizz"`。
> 3. 如果输入值是数字且能被 **5** 整除，返回字符串 `"Buzz"`。
> 4. 如果输入值是数字但不能被 3 或 5 整除，返回输入值本身。
> 5. 如果输入值不是数字（例如布尔值、字符串等），返回 `"Not a number"` 或 JavaScript 的特殊值 `NaN`。

```javascript
function fizzBuzz(input) {
  // 检查输入是否为数字
  if (typeof input !== "number") {
    return NaN; // 返回 JavaScript 的特殊值 NaN
  }

  // 检查是否能被 3 和 5 同时整除（优先检查 ）
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }

  // 检查是否能被 3 整除
  if (input % 3 === 0) {
    return "Fizz";
  }

  // 检查是否能被 5 整除
  if (input % 5 === 0) {
    return "Buzz";
  }

  // 返回输入值本身
  return input;
}

// 测试函数
console.log(fizzBuzz(false)); // 输出：NaN
console.log(fizzBuzz("hello")); // 输出：NaN
console.log(fizzBuzz(15)); // 输出："FizzBuzz"
console.log(fizzBuzz(9)); // 输出："Fizz"
console.log(fizzBuzz(10)); // 输出："Buzz"
console.log(fizzBuzz(7)); // 输出：7cc
```

## Ex4 检查车速并计算扣分

> 编写一个函数 `checkSpeed`：
>
> 1. 接收一个参数 `speed`，表示车辆的速度。
> 2. 假设限速为 70 km/h。
> 3. 如果车速在限速及以下，打印 `"Ok"`。
> 4. 每超过限速 5 km/h 记 1 分，使用 `Math.floor` 计算扣分点数。
> 5. 如果扣分超过 12 分，打印 `"License suspended"`，否则打印扣分点数。
>
> 测试此函数时请考虑以下情况：
>
> - 当车速在限速范围内。
> - 当车速略微超速，但未达到扣分点。
> - 当车速超过限速并产生扣分点数。
> - 当扣分超过 12 分时。

```javascript
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  points > 12
    ? console.log("License suspended")
    : console.log("Points:", points);
}

// 测试函数
checkSpeed(70); // 输出：Ok
checkSpeed(71); // 输出：Ok
checkSpeed(75); // 输出：Points：1
checkSpeed(80); // 输出：Points: 2
checkSpeed(130); // 输出：Points: 2
checkSpeed(135); // 输出：License suspended
```

## Ex5 显示数字的奇偶性

> 编写一个函数 `showNumbers`，接收一个参数 `limit`：
>
> 1. 输出从 `0` 到 `limit` 的所有数字。
> 2. 对于每个数字，如果是偶数，显示 `"even"`；如果是奇数，显示 `"odd"`。
>
> 测试此函数时请考虑以下情况：
>
> - `limit` 为 0。
> - `limit` 为正整数。
> - `limit` 为较大的正整数。

```javascript
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "even" : "odd"; // 判断奇偶性
    console.log(i, message);
  }
}

// 测试函数
showNumbers(0); // 输出：0 even
showNumbers(3); // 输出：0 even, 1 odd, 2 even, 3 odd
showNumbers(10); // 输出：0 到 10 的奇偶性
```

## Ex6 统计数组中的 Truthy 值

> 编写一个函数 `countTruthy`：
>
> 1. 接收一个数组作为参数。
> 2. 返回数组中 truthy 值的数量。
>
> **提示：**
>
> - Truthy 值是指在布尔上下文中会被视为 `true` 的值。
> - 常见的 falsey 值包括：
>   - `undefined`
>   - `null `
>   - 空字符串 `""`
>   - `false`
>   - 数字 `0`
>   - `NaN`

```javascript
function countTruthy(array) {
  let count = 0; // 初始化计数器

  // 使用 for-of 循环遍历数组
  for (let value of array) {
    if (value) {
      // 检查值是否为 truthy
      count++; // 如果是 truthy，则计数器加 1
    }
  }

  return count; // 返回计数结果
}

// 测试函数
console.log(
  countTruthy([0, 1, 2, "", false, "hello", undefined, 42])
); // 输出4
console.log(countTruthy([false, 0, null, NaN, undefined, ""])); // 输出：0
console.log(countTruthy([true, "Mosh", 10, [], {}])); // 输出：5
```

## Ex7 显示对象中的字符串属性

> 编写一个函数 `showProperties`：
>
> 1. 接收一个对象作为参数。
> 2. 遍历对象中的所有属性。
> 3. 如果属性的值是字符串类型，显示该属性及其值。
>
> **测试用例：**
>
> - 对象中包含多个数据类型的属性。
> - 只输出值为字符串类型的属性。

```javascript
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

// 测试对象
const movie = {
  title: "Inception",
  releaseYear: 2010,
  rating: 8.8,
  director: "Christopher Nolan",
};

// 测试函数
showProperties(movie);
// 输出：
// title Inception
// director Christopher Nolan
```

## Ex8 求指定范围内的倍数之和

> 编写一个函数 `sum`：
>
> 1. 接收一个参数 `limit`。
> 2. 计算并返回从 `0` 到 `limit` 范围内所有 **3 或 5 的倍数** 之和。
>
> **测试用例：**
>
> - `limit` 为正整数。
> - `limit` 包含多个 3 和 5 的倍数。
> - `limit` 为较小值，例如 0。

```javascript
function sum(limit) {
  let total = 0; // 初始化求和变量

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) total += i;

  return total; // 返回最终的总和
}

// 测试函数
console.log(sum(10)); // 输出：33 （3 + 5 + 6 + 9 + 10）
console.log(sum(0)); // 输出：0
console.log(sum(15)); // 输出：60 （3 + 5 + 6 + 9 + 10 + 12 + 15）
```

## Ex9 计算学生的成绩

> 编写一个函数 `calculateGrade`：
>
> 1. 接收一个数组 `marks`，表示学生在不同科目的分数。
> 2. 首先计算分数的平均值。
> 3. 根据以下表格，将平均分映射到对应的成绩等级：
>
> | 平均分范围 | 成绩 |
> | ---------- | ---- |
> | 90 - 100   | A    |
> | 80 - 89    | B    |
> | 70 - 79    | C    |
> | 60 - 69    | D    |
> | 小于 60    | F    |
>
> **提示：** 使用单一职责原则，将平均值计算与成绩映射分开实现。

```javascript
// 计算数组中数值的平均值
function calculateAverage(array) {
  const sum = array.reduce((acc, value) => acc + value, 0);
  return sum / array.length;
}

// 根据平均分计算成绩等级
function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

// 测试函数
const marks = [85, 90, 78, 92, 88];
console.log(calculateGrade(marks)); // 输出：B
```

## Ex10 显示星星图案

> 编写一个函数 `showStars`：
>
> 1. 接收一个参数 `rows`，表示图案的行数。
> 2. 输出星星图案，其中第 `n` 行包含 `n` 个星星。
>
> **示例：**
>
> 调用 `showStars(5)`，结果应如下：
>
> ```
> *
> **
> ***
> ****
> *****
> ```

```javascript
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    // 外层循环控制行数
    let pattern = ""; // 初始化空字符串
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern); // 打印当前行的星星
  }
}

// 测试函数
showStars(5);
/*
输出：
*
**
***
****
*****
*/
```

## Ex11 显示范围内的素数

> 编写一个函数 `showPrimes`：
>
> 1. 接收一个参数 `limit`，表示显示的素数范围。
> 2. 打印所有从 `2` 到 `limit` 范围内的素数。
>
> **提示：**
>
> - 素数是指只能被 `1` 和自身整除的正整数（如 `2, 3, 5, 7, 11` 等）。
> - 使用单一职责原则，将判断素数的逻辑提取到一个独立函数中。

```javascript
// 判断一个数是否是素数
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false; // 如果有其他因数，返回 false

  return true; // 没有其他因数，返回 true
}

// 打印范围内的所有素数
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number); // 如果是素数，打印该数
}

// 测试函数
showPrimes(10);
/*
输出：
2
3
5
7
*/
```

# 对象

## 概念

> 在之前的课程中，你已经了解了一些关于 **对象** 的知识。对象是键值对（key-value pairs）的集合。当你有多个属性密切相关时，我们可以将它们封装到一个对象中。对象中还可以放入方法。

```js
const circle = {
  radius: 5,
  location: {
    x: 10,
    y: 20,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
```

**面向对象编程 (OOP)**

当我们把属性和方法组织到一个对象中时，这就是 _面向对象编程（Object-Oriented Programming, OOP）_ 的一种表现。在面向对象编程中，我们通常将程序看作是由多个对象组成的，而这些对象通过相互交互来完成某些功能。

在我们的例子中，`circle` 是一个对象，它有一些属性（如 `location`、`radius` 和 `isVisible`）以及一个方法（`draw`）。当我们说到 "调用 `circle` 对象的 `draw` 方法" 时，实际上是在说我们正在调用该对象的一个 **方法**（而不是函数）。

**方法与函数的区别**

在 JavaScript 中，如果一个函数是作为对象的一部分定义的，我们就称它为 **方法**。所以，`circle.draw` 是 `circle` 对象的一个方法。方法与普通函数的主要区别在于：方法是隶属于某个对象的。

**使用点语法访问对象的属性和方法**

一旦我们定义了对象并且为其添加了属性和方法，就可以使用 点语法 来访问它们：

```js
circle.draw();
console.log(circle.location.x); // 输出 10
```

## 工厂函数

> 假设你想要创建两个圆形对象，我们可能会重复相同的代码（这里特指方法的代码），如果在对象中有方法，最好用函数来创建对象

```JS
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(5);
console.log(circle1);
const circle2 = createCircle(10);
console.log(circle2);
```

- `return`：由于代码结果简单，这里省略了`const`定义对象，再由`return`返回对象的步骤，直接在`return`语句中构建对象
- 属性简写：如果属性的`key`等于`value`，如`radius: radius`，可以进行简写

- 方法简写：传统的`methodName: function () {}`，可以简写为`methodName() {}`，这在 ES6 中引入

## 构造函数

> **构造函数**（Constructor Function）。与工厂函数类似，构造函数的任务是创建对象，但其命名约定和实现方式有所不同。两种构建方式没有优劣之分。

**命名约定**

- *工厂函数*的命名：驼峰命名法（Camel Notation）

  - 在工厂函数中，我们使用驼峰命名法，遵循以下规则：
    - 第一个单词的首字母小写。
    - 之后每个单词的首字母大写。

- *构造函数*的命名：帕斯卡命名法（Pascal Notation）
  - 在构造函数中，我们使用帕斯卡命名法，遵循以下规则：
    - 每个单词的首字母都大写。

**构造函数的定义**

我们通过定义一个函数，并使用 `this` 关键字为对象添加属性和方法。

```JS
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
```

## 动态特性

> 在 JavaScript 中，对象是动态的，这意味着我们可以在创建对象后随时添加新的属性或方法，也可以移除现有的属性或方法。

**动态添加属性和方法**

我们可以通过点语法或方括号语法为对象添加新的属性。

```js
const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

console.log(circle);
```

**动态移除属性和方法**

我们可以使用 `delete` 操作符移除对象的属性或方法。

```JS
const circle = {
  radius: 1,
  color: "yellow",
  draw() {},
};

delete circle.color;
delete circle.draw;

console.log(circle);
```

**使用 `const` 创建对象**

在 JavaScript 中，`const` 声明的变量是 **常量**，意味着变量的引用不能被重新分配。

```JS
const circle = {
  radius: 5,
};

circle = {}; // 抛出错误：Assignment to constant variable
```

虽然 `const` 禁止重新赋值变量，但对象的内容是可以修改的，因为对象存储在内存中的引用并未改变。

## `constructor` 属性

> 在 JavaScript 中，每个对象都有一个名为 **`constructor`** 的属性，它引用了用于构造或创建该对象的函数。

**示例：对象的 `constructor` 属性**

```js
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle = new createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log(circle.constructor); // 输出：Object
console.log(another.constructor); // 输出：Circle
```

1. `circle.constructor`:
   - `circle` 是通过工厂函数 `createCircle` 创建的。
   - 工厂函数返回的是一个 对象字面量，因此 `circle.constructor` 的值为内置的 `Object` 构造函数。
2. `another.constructor`:
   - `another` 是通过构造函数 `Circle` 创建的。
   - 因此 `another.constructor` 的值是 `Circle` 函数本身。

**对象字面量与 `Object` 构造函数**

当使用对象字面量（如 `{}`）创建对象时，JavaScript 引擎会在内部使用内置的 `Object` 构造函数。

```js
const obj = {};
// 等价于
const obj = new Object();
```

**内置构造函数**

除了 `Object`，JavaScript 中还有一些其他内置构造函数：

1. `String`：

   - 创建字符串。
   - 推荐使用字符串字面量（单引号、双引号或模板字符串）而不是 `String` 构造函数。

   ```js
   const str1 = "Hello"; // 字符串字面量
   const str2 = new String("Hello"); // 使用构造函数

   console.log(str1.constructor); // 输出：String
   console.log(str2.constructor); // 输出：String
   ```

2. `Boolean`：

   - 创建布尔值。
   - 推荐使用布尔字面量 `true` 或 `false`。

   ```js
   const bool1 = true; // 布尔字面量
   const bool2 = new Boolean(false); // 使用构造函数

   console.log(bool1.constructor); // 输出：Boolean
   console.log(bool2.constructor); // 输出：Boolean
   ```

3. `Number`：

   - 创建数字。
   - 推荐使用数字字面量（如 `42`）而不是 `Number` 构造函数。

   ```js
   const num1 = 42; // 数字字面量
   const num2 = new Number(42); // 使用构造函数
   
   console.log(num1.constructor); // 输出：Number
   console.log(num2.constructor); // 输出：Number
   ```

## 函数是 对象

> 在 JavaScript 中，函数不仅仅是执行某些操作的代码块，它们也是对象。函数本身也有属性和方法，和普通对象一样。

**函数作为对象**

在 JavaScript 中，函数本身是对象。这意味着函数不仅具有执行代码的能力，还拥有一些内置的属性和方法。如方法`call`、`bind`、`apply`，如属性`name`返回函数的名称，`length`返回函数的参数数量。

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

console.log(Circle.name); // 输出：Circle
console.log(Circle.length); // 输出：1
```

**构造函数与函数作为对象**

每个对象都有一个 `constructor` 属性，指向用于创建该对象的函数。在函数的情况下，`constructor` 属性指向 `Function` 构造函数，因为在 JavaScript 中，函数是通过 `Function` 构造函数创建的。

```js
console.log(Circle.constructor); // 输出：function Function() { [native code] }
```

我们可以显式地创建一个函数对象。例如，下面的代码创建了一个 `circle` 函数对象：

```js
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
  `
);

const another = new Circle1(1);
```

**`call`方法 和 `apply`方法**

- 在 JavaScript 中，`call` 方法允许我们显式地设置一个函数的 `this` 上下文。通过 `call` 方法调用构造函数时，它实际上是通过改变 `this` 的上下文来执行函数的代码。而 `return this;` 在构造函数中的作用是返回当前的 `this`，也就是当前的对象。

  - 核心概念
    1. `this` 指向：当你使用 `new` 关键字时，`this` 会指向新创建的对象。而当你使用 `call` 或 `apply` 时，`this` 可以显式地指向你指定的对象。
    2. `return this` 的作用：在构造函数内部使用 `return this;`，意味着返回当前的 `this` 对象，这通常是在构造函数外部不使用 `new` 关键字时的一种显式行为。然而，`call` 方法不依赖于 `return this;` 来创建新的对象，因为 `call` 内部已经将 `this` 显式绑定到了目标对象。
  - 多自己测试

  ```js
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
    return this; // 若没有显示，call方法将返回underfined
  }
  const circle1 = Circle.call({}, 1);
  // 等价于
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
  const circle = new Circle(1);
  // 等价于
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
  const c = {};
  Circle.call(c, 1);
  ```

- `apply` 方法

  `apply` 与 `call` 很相似，唯一的区别在于 **参数传递的方式**。`call` 需要我们逐个传递参数，而 `apply` 允许我们传递一个数组。

  在这里，`apply` 也会将第一个参数作为 **`this`** 上下文传递，并将第二个参数作为函数参数传递。

  ```js
  circle.apply({}, [5]); // 第二个参数是一个数组
  ```

## 值类型与引用类型

> 在 JavaScript 中，数据类型分为两大类：值类型（也称为原始类型）和引用类型。理解它们的区别对于深入掌握 JavaScript 非常重要，尤其是在涉及到原型和继承的部分。
>
> - 值类型的特点是：当你将一个变量赋值给另一个变量时，是复制的值，它们是 独立的。这意味着，如果其中一个变量的值发生了改变，不会影响另一个变量。
> - 引用类型的特点是：当你将一个引用类型的变量赋值给另一个变量时，赋值的是内存地址（即引用），因此 两个变量指向同一个对象，它们之间是 相互关联的。当你通过一个变量修改对象的属性时，另一个变量的值也会受到影响。

**值类型（原始类型）**

值类型是指变量直接存储其值的数据类型。在 JavaScript 中，值类型包括：

- Number（数字）
- String（字符串）
- Boolean（布尔值）
- Symbol（符号，ES6 引入）
- Null（空值）
- Undefined（未定义）

**引用类型（对象）**

引用类型则是指变量存储的是指向数据的 引用 或 地址，而不是数据本身。在 JavaScript 中，引用类型包括：

- Object（对象）
- Function（函数）
- Array（数组）

**值类型与引用类型的行为示例**

- 值类型：

  ```js
  let x = 10;
  let y = x; // 复制 x 的值给 y

  x = 20; // 修改 x 的值

  console.log(x); // 输出 20
  console.log(y); // 输出 10
  ```

  - 在这个例子中，`x` 和 `y` 是 **独立的**。修改 `y` 的值不会影响到 `x`，因为它们存储的是不同的值。

- 引用类型：

  ```js
  let x = { value: 10 };
  let y = x; // 复制 x 的引用给 y
  
  x.value = 20; // 修改 x 的 value 属性
  
  console.log(x.value); // 输出 20
  console.log(y.value); // 输出 20
  ```

  - 在这个例子中，`x` 和 `y` 都引用同一个对象。当通过 `y` 修改对象的 `value` 属性时，`x` 的 `value` 也发生了变化，因为它们指向同一个对象。

**函数传参：值类型与引用类型**

- 值类型作为函数参数

```js
function increase(number) {
  number += 1;
  console.log(number); // 输出增加后的值
}

let num = 10;
increase(num); // 传入 num

console.log(num); // 输出 10，原始值没有改变
```

- 在这个例子中，`number` 是一个值类型（数字）。当我们将 `num` 传递给 `increase` 函数时，实际上是复制了 `num` 的值到 `number` 变量。它们是独立的，所以 `num` 的值没有发生改变。

- 引用类型作为函数参数

  ```js
  function increase(obj) {
    obj.value += 1;
    console.log(obj.value); // 输出增加后的值
  }
  
  let obj = { value: 10 };
  increase(obj); // 传入 obj
  
  console.log(obj.value); // 输出 11，原始对象被修改
  ```

  - 在这个例子中，`obj` 是一个引用类型。当我们将 `obj` 传递给 `increase` 函数时，我们传递的是该对象的引用。函数内部修改对象的 `value` 属性时，外部的 `obj` 也受到了影响，因为它们指向同一个对象。

## 枚举对象的属性

> 在 JavaScript 中，有多种方式可以遍历对象的属性和方法。每种方法都有其特定的用途，理解这些方法之间的差异对于高效地操作对象非常重要。

**`for...in` 循环**

`for...in` 循环是最简单的遍历对象属性（包括方法）的方法之一。

```js
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key, circle[key]);
```

- 工作原理：`for...in` 循环会遍历对象的 所有可枚举属性（包括方法）。`key` 是属性名（例如 `radius` 或 `draw`），`circle[key]` 用于访问该属性的值。

**`for...of` 循环**

`for...of` 循环适用于 可迭代对象（例如数组、字符串、Map）。若对象本身并不可迭代，直接对对象使用 `for...of` 循环会抛出错误。

```js
for (let key of circle) {
  // 错误： "circle 不是可迭代对象"
  console.log(key);
}
```

不过，我们可以使用 `Object.keys()` 或 `Object.entries()` 方法，将对象转换为数组，从而使其可以用 `for...of` 循环进行遍历。

**`Object.keys()` 方法**

输入一个`Object`，能看到许多方法，

`Object.keys()` 方法返回一个包含对象自身所有可枚举属性名的数组。

```js
for (let key of Object.keys(circle)) console.log(key);
```

- 工作原理：`Object.keys(circle)` 会将对象的键（如 `['radius', 'draw']`）转换成一个数组。我们可以使用 `for...of` 循环遍历这个数组。

**`Object.entries()` 方法**

`Object.entries()` 方法返回一个包含对象自身所有可枚举属性 `[key, value]` 对的数组。

```js
for (let entry of Object.entries(circle)) console.log(entry);
```

- 工作原理：`Object.entries(circle)` 将对象转换为一个键值对数组（如 `[['radius', 10], ['draw', function]]`）。每个 `entry` 是一个包含键和值的数组。

**`in` 方法**

可以使用 `in` 操作符检查一个对象是否包含某个特定的属性或方法。这对于在执行某些操作前进行条件检查非常有用。

```js
if ("radius" in circle) console.log("yes"); // 输出：yes
if ("color" in circle) console.log("yes"); //无输出
```

- 工作原理：`in` 操作符用于检查一个特定的属性是否存在于对象中，即使该属性的值为 `undefined`。如果属性存在，则返回 `true`，否则返回 `false`。

## 克隆对象

> 在 JavaScript 中，如果你想要将一个对象的所有属性和方法复制到另一个对象中，可以使用多种方法。这里我们会探讨几种不同的方式，包括传统的 `for...in` 循环、`Object.assign()` 方法以及更简洁的扩展运算符（spread operator）。
>
> **推荐使用：扩展运算符（Spread Operator）**

**`for...in`循环**

这是一个较为传统的方法，我们通过 `for...in` 循环遍历对象的所有属性，并将它们手动复制到一个新的对象中。

```js
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

for (let key in circle) another[key] = circle[key];

console.log(another);
```

- 工作原理：我们遍历 `circle` 对象的所有属性，并将它们复制到 `another` 对象中。这个方法手动复制每个属性，但在现代 JavaScript 中有更简洁的替代方案。

**`Object.assign()` 方法**

- `Object.assign()` 是一种更现代的方式，它可以将一个或多个源对象的所有可枚举属性复制到目标对象中。它返回目标对象。
- 还可以使用 `Object.assign()` 在克隆时添加其他属性到目标对象。例如，可以在克隆时为目标对象添加额外的属性。

```js
const another = Object.assign({}, circle);

// const another = Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );
```

- 工作原理：`Object.assign()` 的第一个参数是目标对象（在这里是一个空对象 `{}`），后续的参数是源对象（这里是 `circle`）。所有源对象的属性会被复制到目标对象，并返回目标对象。

- **_补充_**：`Object.assign()` 是浅拷贝，因此如果源对象中的某个属性是引用类型（如对象或数组），那么目标对象与源对象共享该引用。

  ```js
  const demo = {
    deep: {
      level: 1,
    },
  };
  const copy = Object.assign({}, demo);
  demo.deep.level = 2;
  console.log(copy.deep.level); // 输入2
  ```

**扩展运算符（Spread Operator）**

扩展运算符（`...`）提供了一个非常简洁的方式来复制对象。这是目前最推荐的方式之一，因为它代码简洁且易读。

```js
const circle = {
  radius: 10,
  draw() {
    console.log("绘制圆形");
  },
};

// 使用扩展运算符克隆对象
const another = { ...circle };

console.log(another);
// 输出: { radius: 10, draw: [Function: draw] }
```

- 工作原理：通过扩展运算符 `...`，我们可以将 `circle` 对象中的所有属性“展开”到新对象 `another` 中。这是一种非常简洁和优雅的方式。该方式同样是浅拷贝。

## 垃圾回收

> 在低级语言如 C 或 C++ 中，我们需要手动分配和释放内存。即使是创建一个对象，也需要显式地为它分配内存空间，并在不再需要时释放这部分内存。然而，JavaScript 的内存管理与此不同，它通过自动化的 **垃圾回收机制** 来处理内存的分配和回收。作为开发者，我们不需要手动管理内存，JavaScript 引擎会在后台完成这些操作。

**自动内存分配与回收**

- 内存分配：当我们创建一个对象或变量时，即便是空对象，JavaScript 引擎会自动分配内存。例如，声明一个对象时，内存会在创建对象的同时被分配。

  ```js
  const obj = {
    name: "Circle",
    radius: 10,
  };
  ```

  在这段代码中，内存会在 `obj` 对象被初始化时自动分配，并为该对象的属性（如 `name` 和 `radius`）分配空间。

- 内存回收：当对象不再被任何变量引用时，它会被垃圾回收器标记为可回收，然后释放内存。

## `Math` 对象

> JavaScript 提供了一个非常强大的内置对象 —— **`Math`** 对象，专门用于处理各种数学常数和函数。这个对象包含了许多有用的属性和方法，可以帮助你进行数学运算，比如求最大值、最小值、生成随机数等。Google：javascript math

**`Math` 对象概述**

`Math` 对象是一个内置的全局对象，不需要使用 `new` 关键字来创建它的实例。它包含了许多静态属性和方法，帮助我们处理数学运算。常见用法见[链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- 常用属性：

  - `Math.PI`：表示圆周率常数（π）。

  - `Math.E`：表示自然对数的底数（e）。

  - `Math.LN2`：表示 2 的自然对数。

  - `Math.LN10`：表示 10 的自然对数。

  - `Math.SQRT2`：表示 2 的平方根。

- 常用方法：

  - `Math.abs(x)`：返回数值 `x` 的绝对值。

  - `Math.random()`：返回一个 0 到 1 之间的随机浮动数。

  - `Math.max(...values)`：返回给定数值中的最大值。

  - `Math.min(...values)`：返回给定数值中的最小值。

  - `Math.pow(x, y)`：返回 `x` 的 `y` 次方。

**使用 `Math` 对象**

```js
let x;

// 生成0-1的随机数
// x = Math.random();

//四舍五入
// x = Math.round(1.9);

// 找出最大数
x = Math.max(1, 2, 3, 4, 5);

console.log(x);

// 生成指定区间的随机数（链接也有）
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

## `String`对象

> 在 JavaScript 中，字符串有两种类型：**字符串原始类型**（Primitive String）和**字符串对象**（String Object）
>
> - 原始类型是不可变的，直接访问或修改字符串中的字符时，会创建一个新的字符串。
> - 字符串对象是可以访问方法和属性的，内部 `String` 构造函数会让原始字符串具有方法和属性。
>
> 尽管原始字符串是不可变的，但 JavaScript 引擎在内部会自动将原始字符串封装成字符串对象来调用方法，因此在大多数情况下，我们不需要关心这个细节，直接使用字符串即可。
>
> google: javascript string

**字符串原始类型与字符串对象**

```JS
//String primitive
let message = "hi";

//String object
const another = new String("hi");

console.log(typeof message);  // 输出 "string"
console.log(typeof another);  // 输出 "object"

// 依然可以调用字符串的方法
// message.xxx;

// message 是原始类型字符串，不能直接修改其中的字符。
// 这里的操作是将 message 变量指向了一个新的字符串
message = "hello";
```

**常用字符串方法**

常见用法见[链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```js
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

x = str.split(" "); // 使用" "将字符串切分为数组
console.log(x);

console.log(str);
```

**转义字符（Escape Characters）**

有时候，字符串中需要使用一些特殊字符（例如引号、换行符等），这时我们需要使用转义字符（escape notation），更多见上面提供的链接。

- `\n`：表示换行。
- `\t`：表示制表符。
- `\'`：表示单引号。
- `\"`：表示双引号。
- `\\`：表示反斜杠。

```js
const escapeMessage =
  "It's a beautiful day.\nLet's go for a walk!";
console.log(escapeMessage);
// 输出：
// It's a beautiful day.
// Let's go for a walk!
```

## 模板字面量

> 在 JavaScript 中，**模板字面量**是一种强大且简洁的字符串操作方法。它使得我们可以更加方便地处理多行字符串、动态嵌入表达式以及格式化输出等操作。

**基本语法**

模板字面量由**反引号**（```）而非单引号或双引号定义。

```js
const message = `这是一个模板字面量`;
console.log(message); // 输出: 这是一个模板字面量
```

**格式优势**

模板字面量的一个重要优势是，它允许我们直接输入，而不需要使用转义字符（`\n`）。

```js
const email =
  "Hi John,\nThank you for joining my mailing list.\nRegards,\nMosh";

const message = `Hi John,
Thank you for joining my mailing list.
Regards,
Mosh`;
```

**字符串插值（Placeholders）**

模板字面量的另一个强大功能是**字符串插值**，即我们可以在字符串中动态地嵌入变量、常量或表达式，直接使用 `${}` 语法。

```js
const name = "John";
const message = `Hi ${name},
Thank you for joining my mailing list.
Regards,
Mosh`;
console.log(message);
```

可以在 `${}` 中执行**计算**或者调用**函数**。

**示例（调用函数）：**

```js
function getGreeting(name) {
  return `你好, ${name}!`;
}

const message = `问候消息是: ${getGreeting("Alice")}`;
console.log(message); // 输出: 问候消息是: 你好, Alice!
```

## `Date` 对象

> 在 JavaScript 中，`Date` 是一个内建的对象，用于处理日期和时间。它提供了多种方法，可以让我们方便地操作日期和时间。`Date` 对象是通过 **构造函数** 创建的，可以有不同的方式进行实例化。google: javascript data

**创建 `Date` 对象**

当代码栏仅存在以下代码时，可以控制键盘上下查看不同的 Date 类型（未出现删除部分手动输入）

```js
const date = new Date();
```

常用方法：[链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

```js
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
```

## Ex1

> 创建一个名为 `address` 的对象，该对象包含三个属性：`street`、`city` 和 `zipCode`。
>
> 然后，创建一个名为 `showAddress` 的函数，该函数接受一个 `address` 对象，并显示该对象的所有属性及其对应的值。

```js
// 创建 address 对象
const address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

// 创建 showAddress 函数
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

// 调用 showAddress 函数
showAddress(address);

// 输出
// street a
// city b
// zipCode c
```

## Ex2

> 在本练习中，您需要使用两种不同的函数来初始化 `address` 对象：一种是工厂函数（Factory Function），另一种是构造函数（Constructor Function）。

**工厂函数实现**：返回一个新对象，使用简单的返回语法。

```js
// 工厂函数：createAddress
function createAddress(street, city, zipCode) {
  return {
    // street: street,
    street,
    city,
    zipCode,
  };
}

// 创建 address 对象
const address1 = createAddress("a", "b", "c");

// 输出 address 对象
console.log(address1);

// 输出
// { street: 'a', city: 'b', zipCode: 'c' }
```

**构造函数实现**：使用 `this` 关键字初始化对象，创建时需要使用 `new` 操作符。

```js
// 构造函数：Address
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// 使用 new 操作符创建 address 对象
const address2 = new Address("a", "b", "c");

// 输出 address 对象
console.log(address2);

// 输出
// Address { street: 'a', city: 'b', zipCode: 'c' }
```

## Ex3

> 在本练习中，使用上一个练习中创建的构造函数，创建两个 `address` 对象。接着，编写两个函数来检查对象的相等性：
>
> - `areEqual`：检查两个对象的属性是否完全相等。
> - `areSame`：检查两个对象是否是同一个引用。

```js
// 构造函数：Address
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// 创建两个 address 对象
const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");

// areEqual 函数：检查两个对象的属性是否相等
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// areSame 函数：检查两个对象是否是同一个引用
function areSame(address1, address2) {
  return address1 === address2;
}

// 调用函数并输出结果
console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false

// 如果我们让 address2 引用 address1 对象
const address3 = address1;
console.log(areSame(address1, address3)); // true
```

- `areSame` 函数通过严格等于 (`===`) 运算符判断两个对象是否引用同一个内存地址。
- `areEqual` 函数检查两个对象的属性是否完全相同，返回 `true` 或 `false`。
- 即使两个对象的属性相同，它们也可能是不同的对象，只有当它们引用同一内存位置时，`areSame` 才会返回 `true`。

## Ex4

> 在本练习中，创建一个 `blogPost` 对象，包含以下属性：
>
> - `title`：博客标题
> - `body`：博客内容
> - `author`：作者
> - `views`：博客被浏览的次数
> - `comments`：每个评论包含 `author` 和 `body` 属性
> - `isLive`：一个布尔值，表示博客是否发布。

```js
// 创建 blogPost 对象
const post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10, // 浏览次数
  comments: [
    {
      author: "a",
      body: "b",
    },
    {
      author: "c",
      body: "d",
    },
  ],
  isLive: true,
};

console.log(post);
```

## Ex5

> 在这个练习中，我们将使用构造函数创建一个 `post` 对象。这个构造函数与之前的构造函数有所不同，因为它针对尚未发布的草稿进行初始化。
>
> 假设我们正在构建一个博客引擎，用户正在草拟一篇博客，但还没有发布。在这种情况下，构造函数应如何设计呢？

```js
// 定义 Post 构造函数
function Post(title, body, author) {
  this.title = title; // 标题
  this.body = body; // 内容
  this.author = author; // 作者
  this.views = 0; // 浏览次数，默认初始化为 0
  this.comments = []; // 评论，初始化为空数组
  this.isLive = false; // 是否发布，默认初始化为 false
}

// 创建 Post 对象
const post = new Post(
  "My First Blog Post",
  "This is the body of my blog post.",
  "John Doe"
);

// 输出 Post 对象
console.log(post);
```

## Ex6

> 在这个练习中，我们将模拟 Yelp.com 上的价格范围按钮（例如：便宜、中等、昂贵等）。我们需要使用对象来实现这个功能。请考虑每个对象应该包含哪些属性。

```js
// 创建价格范围数组
const priceRanges = [
  {
    label: "$", // 显示给用户的标签
    tooltip: "Inexpensive", // 鼠标悬停时显示的提示文本
    minPerPerson: 0, // 每人最低价格
    maxPerPerson: 10, // 每人最高价格
  },
  {
    label: "$$", // 显示给用户的标签
    tooltip: "Moderate", // 鼠标悬停时显示的提示文本
    minPerPerson: 11, // 每人最低价格
    maxPerPerson: 30, // 每人最高价格
  },
  {
    label: "$$$", // 显示给用户的标签
    tooltip: "Expensive", // 鼠标悬停时显示的提示文本
    minPerPerson: 31, // 每人最低价格
    maxPerPerson: 60, // 每人最高价格
  },
];

// 模拟餐馆对象数组
const restaurants = [
  { name: "Restaurant A", averagePricePerPerson: 5 },
  { name: "Restaurant B", averagePricePerPerson: 20 },
  { name: "Restaurant C", averagePricePerPerson: 40 },
];
```

# 数组

## 概念

> 数组（Array）是用于存储一组有序数据的集合。在 JavaScript 中，数组是对象类型，因此它们具有多种内建方法来处理元素。我们一般使用 `const` 来声明数组，这意味着数组的引用不可重新赋值，但数组的内容是可以修改的。

```js
const numbers = [3, 4];
numbers = []; // Uncaught TypeError: Assignment to constant variable.
```

## 添加元素

> 向数组中添加元素有多种方式，可以在数组的**最前面**、**中间**或**末尾**添加元素。

```js
const numbers = [3, 4];

// End
numbers.push(5, 6); // 向数组末尾添加 5 和 6

// Beginning
numbers.unshift(1, 2); // 向数组开头添加 1 和 2

// Middle
numbers.splice(2, 0, "a", "b"); // 从索引 2 开始，不删除任何元素，插入 'a' 和 'b'

console.log(numbers);
```

- `push()` 方法用于向数组的末尾添加一个或多个元素，并返回数组的新长度。
- `unshift()` 方法用于将一个或多个元素添加到数组的开头，并返回数组的新长度。
- **`splice()`** 方法可以在数组的任何位置进行添加、删除或替换元素。其基本语法为：`splice(startIndex, deleteCount, item1, item2, ...)`。
  - `startIndex`：指定开始操作的位置。
  - `deleteCount`：指定要删除的元素数量。
  - `item1, item2, ...`：指定要插入的元素。

## 查找原始元素

> 查找数组中的原始元素有多种方式，可以查找元素是否存在、元素的位置，或者从某个特定位置开始查找。

```js
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf("a")); // -1
console.log(numbers.indexOf("1")); // -1
console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(1, 1)); // 3, 从索引1开始扫描

console.log(numbers.lastIndexOf(1)); // 3

console.log(numbers.indexOf(1) !== -1); // true，表示1存在于数组
console.log(numbers.includes(1)); // true，表示1存在于数组
```

- `indexOf()` 方法返回数组中第一个匹配元素的索引。如果元素不存在，返回 `-1`。它还允许你指定一个起始位置，从指定的位置开始查找。
- `lastIndexOf()` 方法返回数组中最后一个匹配元素的索引。如果元素不存在，返回 `-1`。
- `includes()` 方法返回一个布尔值，表示数组是否包含某个元素。与 `indexOf()` 类似，但它返回 `true` 或 `false`，而不是索引值。

## 查找对象元素

> 在数组中查找对象元素时，方法与查找原始类型元素不同，因为对象是引用类型（比如 `Object`、`Array` 等）时，`indexOf()`、`includes()` 等方法会基于引用进行比较，因此即使对象的内容相同，它们也会被认为是不同的对象。为了查找对象元素，我们可以使用 `find()` 或 `findIndex()` 等方法。具体查看[文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
>
> Google: javascript array find

```JS
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" })); // false

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);
```

- `find()` 方法返回数组中第一个符合条件的元素。如果没有找到符合条件的元素，则返回 `undefined`。通过回调函数来定义查找条件。
- `findIndex()` 方法返回数组中第一个符合条件的元素的索引。如果没有找到符合条件的元素，则返回 `-1`。同样，通过回调函数来定义查找条件。
- 回调函数在下一节有介绍

## 箭头函数

> **箭头函数**（Arrow Function）是 JavaScript 中一种简洁的函数定义方式，它使用 `=>` 语法来定义函数。箭头函数的主要特点是语法更简洁，并且它在处理 `this` 关键字时与传统的函数表达式有所不同。
>
> - 箭头函数的语法比传统的函数表达式更简洁。尤其是当需要传递一个简单的回调函数时，箭头函数非常方便。
>
> - 箭头函数还有其他的特点以及对应的限制
>   - 箭头函数没有自己的 `this`，它会从外部作用域继承 `this`。
>   - 箭头函数无法作为构造函数，不能使用 `new` 关键字。
>   - 箭头函数也没有 `arguments` 对象，但可以使用剩余参数 `...args`。

**回调函数（callback）**：一个函数，应该返回 `true` 或 `false`。如果返回 `true`，该元素将包含，如果返回 `false`，该元素会被过滤掉。

```js
callback(element, index);
```

- element：当前处理的元素。
- index（可选）：当前元素的索引。

**基本语法**

```js
const functionName = (param1, param2) => {
  // 函数体
};
```

- 如果函数体只有一行，_可以省略大括号 `{}` 和 `return` 关键字_，直接返回计算结果。
- 如果只有一个参数，圆括号 `()` 可以省略。
- 没有参数时，圆括号必须存在

**基本用法**

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // 输出: 7
```

**示例**

```js
const course = courses.find(function (course) {
  return course.name === "a";
});

// 等价于
const course = courses.find((course) => course.name === "a");
```

## 删除元素

> 向数组中删除元素有多种方式，可以在数组的**最前面**、**中间**或**末尾**删除元素。

```JS
const numbers = [1, 2, 3, 4, 5];

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// Middle
numbers.splice(2, 2);
console.log(numbers);
```

- `pop()`：删除数组末尾的元素并返回该元素。该方法会修改原数组，数组的长度减少 1。
- `shift()`：删除数组开头的元素并返回该元素。与 `pop()` 相似，`shift()` 会修改原数组，数组长度减少 1。
- **`splice()`** 方法可以在数组的任何位置进行添加、删除或替换元素。其基本语法为：`splice(startIndex, deleteCount, item1, item2, ...)`。
  - `startIndex`：指定开始操作的位置。
  - `deleteCount`：指定要删除的元素数量。
  - `item1, item2, ...`：指定要插入的元素。

## 清空数组

> 清空数组的方法有多种，以下是几种常见的方式。在实际开发中，我们通常选择性能最优且易于理解的方法。

```js
let numbers = [1, 2, 3, 4, 5];
let another = numbers;

// Solution 1
// 直接赋值一个空数组
// numbers = []; //

// Solution 2 (推荐)
// 修改数组的长度为 0
numbers.length = 0;

// Solution 3
// 删除所有元素
// numbers.splice(0, numbers.length);

// Solution 4 (性能较差，不推荐)
// 循环删除每个元素
// while (numbers.length > 0) numbers.pop();
```

- 直接赋值一个空数组：这种方式会创建一个新的数组，简洁，会使原数组引用丢失 ,在数组没有其他引用时可以使用。
- 修改数组的长度为：这会修改原数组并清空所有元素。
- 使用 splice 方法删除所有元素：从索引 0 开始删除所有元素，代码有点杂乱。
- 循环删除每个元素：使用 while 循环删除每个元素。性能较差，且不如前两种方法简洁。

## 组合和切割

> 在 JavaScript 中，可以使用数组的 `concat()` 方法将多个数组合并成一个数组，或者使用 `slice()` 方法对数组进行切割。

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
const objArr = [{ id: 1 }];

const combined = first.concat(second);

const slice = combined.slice(2, 4);
const copy = combined.slice(); // 视为拷贝

console.log(slice);
console.log(combined);

const combineObj = combined.concat(objArr);
objArr[0].id = 10;
console.log(combineObj);
```

- `concat()` 方法用于合并多个数组或值，并返回一个新数组。原数组不会被修改。

- `slice(start, end)` 方法用于从数组中返回指定位置的元素，并返回一个新数组。原数组不会被修改。方法从 `start` 索引开始（包含），到 `end` 索引结束（不包括）。

- 对象数组合并：
  - `concat()` 方法不仅可以用于合并普通数组，还可以用于合并对象数组。
  - 在合并后的数组中，我们看到 `objArr[0].id` 被修改成了 10，因为对象是按引用传递的，合并时我们实际上只是将 `objArr` 的引用添加到了 `combined` 中，而并没有复制该对象。（在 对象 克隆对象 一节中有讲到 浅拷贝）

## 拓展运算符（`...`）

> 扩展运算符（`...`）提供了一个非常简洁的方式来复制数组或对象。这是目前最推荐的方式之一，因为它代码简洁且易读。它不仅可以用于数组合并、拷贝，还可以用于对象的拷贝和合并。
>
> _在 对象 克隆对象 一节中有讲到拓展运算符_

```JS
const first = [1, 2, 3];
const second = [4, 5, 6];

// 合并数组和元素
const combined = [...first, "a", ...second, "b"];

// 拷贝
// const copy = combined.slice();
const copy = [...combined];

console.log(combined);
console.log(copy);
```

## 遍历数组

> 在 JavaScript 中，遍历数组是处理数组数据的常见操作。我们可以使用 `for` 循环、`for...of` 循环和 `forEach()` 方法来遍历数组。下面是一些常见的数组遍历方法：

```js
const numbers = [1, 2, 3];

// 使用 for...of 循环遍历数组
for (let number of numbers) {
  console.log(number);
}

// 使用 forEach 方法遍历数组
numbers.forEach(function (number) {
  console.log(number);
});

// 使用箭头函数的 forEach 方法，并获取索引
numbers.forEach((number, index) => console.log(index, number));
```

- `for...of` 循环：是一种简洁的遍历数组的方式，它直接返回数组中的元素，不需要显式使用索引。

- `forEach()` 是数组的一个内建方法，用于遍历数组并对每个元素执行一个回调函数。支持箭头函数，使代码更简洁。

## `join()` 和 `split()`

> `join()` 方法将数组中的所有元素连接成一个字符串，并返回该字符串。可以指定一个分隔符（默认为逗号），如果不指定分隔符，默认使用逗号分隔数组元素。
>
> `split()` 是字符串的方法，用于将一个字符串分割成一个数组。它根据传入的分隔符将字符串分割成多个部分，返回一个新数组。

```js
const numbers = [1, 2, 3];
const result = numbers.join();
console.log(result);

let message = "This is my first message";

// 使用空格分割字符串
const parts = message.split(" ");
console.log(parts);

const conbined = parts.join("-");
console.log(conbined);
```

- `join()` 方法返回一个字符串，数组元素以指定的分隔符连接起来。分隔符是可选的，若不传入，默认用逗号 `,` 作为分隔符。不会改变原始数组。
- `split()` 方法将字符串分割成数组，并返回这个数组。传入的分隔符是必须的，可以是任意字符或正则表达式。

**用途：构建 URL Slug**

在构建 URL 时，空格不能出现在 URL 中。因此，需要将标题（如文章标题）中的空格替换为连字符（`-`）。这常见于创建网站的 URL Slug。

```js
// 假设有一个文章标题
let articleTitle = "Creating arrays in JavaScript";

// 通过 split 和 join 创建 URL Slug
const slug = articleTitle.split(" ").join("-");
console.log(slug);
```

## 排序数组

> 在 JavaScript 中，数组的排序和反转非常常见，提供了两个内建方法：`sort()` 和 `reverse()`。

**排序原始元素**

```js
const numbers = [2, 3, 1];

// 排序数组
numbers.sort();
console.log(numbers);

// 反转数组
numbers.reverse();
console.log(numbers);
```

- `sort()` 方法会将数组中的元素转换成字符串进行排序，因此它适用于数字和字符串的排序。但对于数字数组，它可能并不按数值排序，因为它默认是按字符串的字符编码顺序排序。

- `reverse()` 方法会反转数组的顺序，修改原数组。

**排序对象元素**

当数组元素是对象时，`sort()` 方法默认无法直接按照对象的某个属性进行排序。需要传入一个比较函数来自定义排序规则。

```js
const courses = [
  { id: 1, name: "node.js" },
  { id: 2, name: "javaScript" },
  { id: 3, name: "Python" },
  { id: 4, name: "HTML" },
  { id: 5, name: "css" },
];

courses.sort(function (a, b) {
  // let nameA = a.name;
  // let nameB = b.name;

  // 使用 toUpperCase() 排除大小写敏感
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
```

- 在 `sort()` 方法中，我们传递一个比较函数，它接受两个元素 `a` 和 `b`，然后根据它们的属性（如 `name`）进行排序。
- 比较函数的返回值决定了排序顺序：`-1` 表示 `a` 排在 `b` 前面，`1` 表示 `b` 排在 `a` 前面，`0` 表示 `a` 和 `b` 顺序不变。
- _底层一般使用的是 JavaScript 的快速排序，快速排序通过选择一个“基准”元素，并将数组分割成两部分，左边部分包含所有小于基准的元素，右边部分包含所有大于基准的元素。然后对这两个部分递归地进行排序。当前不必深究。_

**解决大小写排序问题**

JavaScript 的字符串排序是区分大小写的，通常大写字母排在小写字母前面。如果需要不区分大小写地排序字符串，可以使用 `toUpperCase()` 或 `toLowerCase()` 方法来统一大小写。

## 测试数组

> 在 JavaScript 中，`every()` 和 `some()` 是两个非常有用的数组方法，用于检查数组中的元素是否满足某种条件。它们都接受一个回调函数作为参数，并返回布尔值。

```js
const numbers = [1, -1, 2, 3];

//evey()、some() are new method, some old browers may not support

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

const atLeastOnepositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnepositive);
```

- `every()` 方法检查数组中的每个元素是否都满足指定的条件。如果数组中的所有元素都满足条件，返回 `true`；否则，返回 `false`。
- `some()` 方法检查数组中是否至少有一个元素满足指定的条件。如果数组中至少有一个元素满足条件，返回 `true`；否则，返回 `false`。

## 过滤数组

> `filter()` 方法用于创建一个新数组，其中包含所有通过指定测试条件的元素。它接受一个回调函数，回调函数会被应用到数组的每个元素。如果元素满足条件，则该元素将被包含在返回的新数组中。

```js
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });
const filtered = numbers.filter((n) => n >= 0);

console.log(filtered);
```

- `filter()` 方法是用于从数组中筛选出满足某一条件的元素，返回一个新数组。原数组不受影响。
- `array.filter(callback(element, index, array), thisArg)`
  - `callback`：一个函数，测试数组的每个元素，应该返回 `true` 或 `false`。如果返回 `true`，该元素将包含在新数组中；如果返回 `false`，该元素会被过滤掉。
  - `element`：当前处理的数组元素。
  - `index`（可选）：当前元素的索引。
  - `array`（可选）：调用 `filter()` 的数组。
  - `thisArg`（可选）：指定回调函数中的 `this` 值。

## `map()` 方法

> `map()` 方法用于遍历数组并对数组中的每个元素应用回调函数，返回一个新的数组，其中每个元素是原数组元素应用回调函数后的结果。

**基本用法示例**

```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => "<li>" + n + "<li>");
const html = "<ul>" + items.join("") + "<ul>";
console.log(html); // <ul><li>1<li><li>2<li><li>3<li><ul>
```

**生成对象数组**

```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => {
//   const obj = { value: n };
//   return obj;
// });
const items = filtered.map((n) => ({ value: n }));

console.log(items);
```

- `map()` 可以将数组的每个元素转换为任何你想要的格式（如字符串、对象等）。
- 当箭头函数的函数体 是一个对象字面量 时（比如 `{ value: n }`），JavaScript 会将 `{}` 解析为块语法的开始，而不是对象字面量。如果使用`(n) => { value: n }`，函数实际上没有返回一个对象，而是返回了 `undefined`。这是因为 `{ value: n }` 被当做一个块语法来处理，`return` 被隐式地忽略了。需要用`()`包裹返回的对象，这样 JavaScript 会正确地将其解析为一个对象字面量，而不是块语法。

**拓展：链式语法**

```js
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);
// const items = filtered.map((n) => ({ value: n }));

// 链式调用：先过滤、再映射，再过滤，再取出值
const items = numbers
  .filter((n) => n >= 0) // 过滤出大于等于 0 的数字
  .map((n) => ({ value: n })) // 将每个数字映射为对象 { value: n }
  .filter((obj) => obj.value > 1) // 过滤出 value 大于 1 的对象
  .map((obj) => obj.value); // 将对象的 value 属性提取为数组

console.log(items);
```

- 步骤：
  1. 先过滤出大于等于 0 的数字。
  2. 使用 `map()` 将数字转为包含 `value` 属性的对象。
  3. 过滤掉 `value` 小于等于 1 的对象。
  4. 最后提取出 `value` 属性，生成一个新数组。

## `reduce()` 方法

> `reduce()` 方法是数组的一个强大工具，它通过逐步应用回调函数，将数组中的所有元素“归约”成一个单一的值。在计算总和、求最小值、最大值等场景中，`reduce()` 显得尤为简洁和高效。

```js
const numbers = [1, -1, 2, 3];

// old way of writting code
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

// reduce() method
// const sum2 = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
//简化后
const sum2 = numbers.reduce((a, c) => a + c);

console.log(sum2);
```

- `reduce()` 方法接受两个参数：
  1. 回调函数：回调函数有两个参数，`accumulator`（累加器）和 `currentValue`（当前值）。回调函数会在数组的每个元素上依次执行。
  2. 初始值：`reduce()` 的第二个参数。如果我们不提供初始值，`reduce()` 将使用数组的第一个元素作为累加器的初始值。这样会导致第一次执行时，`currentValue` 是数组的第二个元素。
  3. `reduce()` 会返回最终的累加值。
- 每次迭代时，`accumulator` 会累积当前的总和，`currentValue` 是当前正在处理的元素。

## Ex1

> 编写一个函数 `arrayFromRange(min, max)`，该函数接受两个参数 `min` 和 `max`，返回一个数组，数组包含从 `min` 到 `max` 之间的所有整数。若 `max` 小于 `min`，则返回一个空数组。
>
> **实现思路**
>
> 1. 创建空数组：首先创建一个空数组 `output`，用来存储结果。
> 2. 遍历生成范围内的数字：使用 `for` 循环从 `min` 到 `max` 遍历。
> 3. 将数字加入数组：在每次循环中，将当前的 `i` 值加入到 `output` 数组中。
> 4. 返回结果：循环结束后，返回 `output` 数组。

```js
function arrayFromRange(min, max) {
  const output = [];

  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

console.log(arrayFromRange(-10, 5));
```

## Ex2

> 编写一个函数 `includes(array, searchElement)`，该函数模拟 `Array.prototype.includes()` 方法的功能，检查指定的元素是否存在于数组中。如果存在，返回 `true`，否则返回 `false`。
>
> **实现思路**
>
> 1. 遍历数组：使用 `for...of` 循环遍历数组中的每个元素。
> 2. 条件判断：如果当前元素与 `searchElement` 相等，立即返回 `true`。
> 3. 返回 `false`：如果遍历完所有元素后没有找到匹配的元素，返回 `false`。

```js
function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement) return true;
  return false;
}

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 6)); // 输出: false
```

## Ex3

> 编写一个函数 `except(array, excludeArray)`，该函数接受两个数组作为参数：第一个数组 `array` 是原始数组，第二个数组 `excludeArray` 是一个包含需要排除的元素的数组。该函数返回一个新数组，包含原始数组中除去排除元素后的所有元素。
>
> **实现思路**
>
> 1. 初始化输出数组：首先创建一个空数组 `output`，用来存储结果。
> 2. 遍历原始数组：使用 `for...of` 循环遍历原始数组中的每个元素。
> 3. 检查排除元素：检查当前元素是否在排除数组 `excludeArray` 中。如果不在排除数组中，则将该元素添加到 `output` 数组。
> 4. 返回结果：循环结束后，返回 `output` 数组。

```js
function except(array, excludeArray) {
  let output = [];

  for (let element of array)
    if (!excludeArray.includes(element)) output.push(element);
  return output;
}

// 测试
const numbers = [1, 2, 3, 4, 1, 1];
const exclude = [1, 2];

console.log(except(numbers, exclude)); // 输出: [1, 3, 5]
```

## Ex4

> 编写一个函数 `move(array, index, offset)`，该函数接受一个数组 `array`，一个要移动元素的索引 `index`，以及一个偏移量 `offset`，返回一个新数组，表示在偏移后移动的结果。如果偏移量不合法（如超出数组范围），则输出错误信息。
>
> **实现思路**
>
> 1. 初始化数组副本：首先，我们需要确保不修改原始数组，因此使用扩展运算符（`...`）创建原始数组的副本。
> 2. 使用 `splice` 删除元素：使用 `splice` 方法从数组中删除指定索引的元素，并返回被删除的元素。
> 3. 计算目标位置：根据 `index` 和 `offset` 计算目标位置 `position`，并进行基本验证，确保目标位置合法。
> 4. 使用 `splice` 插入元素：将删除的元素通过 `splice` 插入到新数组的计算位置。
> 5. 验证偏移量合法性：确保偏移量不超出数组的边界，如果非法，输出错误信息并返回原数组。

```js
function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position >= array.length) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const item = output.splice(index, 1)[0];

  //[item]是 数组解构 语法，它从 splice() 返回的数组中提取出第一个元素，并将其赋值给 item。
  // const [item] = output.splice(index, 1);
  output.splice(position, 0, item);
  return output;
}

// 测试
const numbers = [1, 2, 3, 4];

console.log(move(numbers, 1, -1)); // 输出: [2, 3, 1, 4]
```

## Ex5

> 编写一个函数 `countOccurrences(array, searchElement)`，该函数接受一个数组和一个搜索元素，返回该元素在数组中出现的次数。实现此功能的一个简单方式是使用循环，另一种方式是使用 `reduce` 方法。
>
> **实现思路**
>
> 1. **使用循环实现**：
>    - 遍历数组，检查每个元素是否等于搜索元素。
>    - 如果相等，增加计数器。
>    - 返回计数器的最终值。
> 2. **使用 `reduce` 实现**：
>    - `reduce` 方法将数组中的所有元素“减少”到一个单一的值，这里我们将其减少到搜索元素出现的次数。
>    - `reduce` 的回调函数有两个参数：累加器 `accumulator` 和当前元素 `currentValue`。
>    - 每次回调时，检查当前元素是否与搜索元素相等，如果相等，则累加器加 1。

**使用循环的基本实现**

```js
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array)
    if (element === searchElement) count++;
  return count;
}

const numbers = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(numbers, 2)); // 输出: 3
```

**使用 `reduce` 的实现**

```js
function countOccurrences(array, searchElement) {
  return array.reduce((acc, cur) => {
    cur === searchElement ? acc + 1 : acc;
  }, 0);
}

// 测试
const numbers = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(numbers, 2)); // 输出: 3
```

## Ex6

> 编写一个函数 `getMax(array)`，该函数接受一个数组并返回该数组中的最大值。如果数组为空，则返回 `undefined`。
>
> **实现思路**
>
> 1. **使用基本的循环实现**：
>    - 首先检查数组是否为空。如果为空，返回 `undefined`。
>    - 初始化 `max` 为数组的第一个元素。
>    - 使用循环遍历数组中的元素，比较每个元素与 `max` 的大小。如果当前元素比 `max` 大，就更新 `max`。
>    - 返回最终的 `max` 值。
> 2. **使用 `reduce` 实现**：
>    - 使用 `reduce` 方法来将数组“缩减”成一个单一的最大值。
>    - `reduce` 方法的回调函数有两个参数：累加器（`accumulator`）和当前元素（`current`）。
>    - 每次回调时，比较 `accumulator` 和 `current` 的大小，返回较大的那个作为新的累加器。

**使用循环的基本实现**

```js
function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let i = 1; i < array.length; i++)
    if (array[i] > max) max = array[i];
  return max;
}
const numbers = [1, 3, 2, 5, 4];

console.log(getMax(numbers)); // 输出: 5
```

**使用 `reduce` 的实现**

```js
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((acc, cur) => (acc > cur ? acc : cur)); // 返回较大的值
}

console.log(getMax([1, 3, 2, 5, 4])); // 输出: 5
```

## Ex7

> 编写一个函数，处理一个电影数组，筛选出 2018 年，评分不低于 4 分的电影
>
> **实现思路**
>
> 1. 筛选电影：使用 `filter()` 方法来筛选
> 2. 排序电影：使用 `sort()` 方法对电影数组按评分进行排序。为了确保按降序排列，需要使用自定义的比较函数。
> 3. 提取电影标题：使用 `map()` 方法提取每部电影的 `title`。
> 4. 返回排序后的电影标题：将排序后的电影标题存储在一个新的数组中，并将其打印出来。

```js
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4) // 过滤
  .sort((a, b) => b.rating - a.rating) // 排序
  .map((m) => m.title); // 提取电影标题

console.log(titles);
```

# 函数

## 函数定义方式

> 在 JavaScript 中，有两种常用的方式来定义函数：**函数声明**（Function Declaration）和**函数表达式**（Function Expression）。这两者之间的主要区别在于它们的语法结构、如何被调用以及它们的作用域行为。让我们深入了解这两种方式。

```js
// Function Declaration
function walk() {
  console.log("walk");
}
walk();

// Anonymous Function Expression
let a = function () {
  console.log("run");
};

// Named Function Expression
let b = function c() {
  console.log("run");
};

a();
let d = a;
d();
```

**函数声明（Function Declaration）**

函数声明是最常见的函数定义方式，通常直接定义一个带有名字的函数。

- 语法：使用 `function` 关键字定义一个有名字的函数。

- 提升（Hoisting）：函数声明会被提升。这意味着函数可以在声明之前被调用。

  ```JS
  walk(); // 正常执行
  function walk() {
    console.log("walk");
  }
  ```

- 

**函数表达式（Function Expression）**

函数表达式是通过将一个函数赋值给变量或常量来定义的函数。函数表达式可以是匿名函数（没有名字）或具名函数（有名字）。

- 匿名函数表达式：这种写法适用于不需要在函数内部递归调用的场景。
- 命名函数表达式：具有一个局部名称，这种写法的优势是可以在函数内部使用 `c()` 进行递归调用，也能在调试时提供更好的信息。

**函数表达式的引用**

通过多个变量引用同一个函数。所有引用的变量指向同一个内存中的函数对象。

---

## 函数定义方式

在 JavaScript 中，有两种常用的方式来定义函数：**函数声明**（Function Declaration）和**函数表达式**（Function Expression）。这两者之间的主要区别在于它们的语法结构、如何被调用以及它们的作用域行为。让我们深入了解这两种方式。

### **1. 函数声明（Function Declaration）**

函数声明是最常见的函数定义方式，通常直接定义一个带有名字的函数。

```js
function walk() {
  console.log("walk");
}
walk(); // 输出 "walk"
```

- **语法**：使用 `function` 关键字定义一个有名字的函数。
- **提升（Hoisting）**：函数声明会被提升。这意味着函数可以在声明之前被调用。
- **特点**：语法简洁，且在作用域中有效，通常用来定义全局或模块级别的函数。

### **2. 函数表达式（Function Expression）**

函数表达式是通过将一个函数赋值给变量或常量来定义的函数。函数表达式可以是匿名函数（没有名字）或具名函数（有名字）。

```js
// 匿名函数表达式
let a = function () {
  console.log("run");
};

a(); // 输出 "run"

// 具名函数表达式
let b = function c() {
  console.log("run");
};

b(); // 输出 "run"
```

#### **匿名函数表达式**

匿名函数表达式是没有名字的函数，通常用于需要临时定义一个函数并立即调用的场景。

```js
let a = function () {
  console.log("run");
};

a(); // 输出 "run"
```

- **用途**：通常用于回调函数或临时功能的定义。
- **缺点**：没有名字，调试时可能不如具名函数方便。

#### **具名函数表达式**

具名函数表达式是具有名字的函数。可以在函数内部调用自己的名字（递归调用），同时在调试时提供更清晰的堆栈跟踪。

```js
let b = function c() {
  console.log("run");
  c(); // 可以在内部递归调用自己
};

b(); // 输出 "run" 后递归调用自身
```

- **优势**：在函数内部可以进行递归调用；调试时能清楚显示函数的名称。

### **3. 函数表达式的引用**

通过多个变量引用同一个函数。所有引用的变量指向内存中的同一个函数对象。

```js
let a = function () {
  console.log("run");
};

let d = a;
d(); // 输出 "run"
```

- **特点**：函数表达式创建的是一个匿名的或具名的函数对象，因此可以通过多个变量或常量引用同一个函数。

### **函数声明 vs 函数表达式的区别**

| 特点                 | 函数声明（Function Declaration） | 函数表达式（Function Expression）    |
| -------------------- | -------------------------------- | ------------------------------------ |
| **语法**             | `function functionName() {}`     | `let functionName = function() {}`   |
| **提升（Hoisting）** | 是，函数会被提升到作用域顶部     | 否，必须在定义之后调用               |
| **是否可以递归调用** | 是                               | 匿名函数不能递归，但具名函数可以递归 |
| **调用时机**         | 可以在函数声明之前调用           | 必须在函数表达式定义之后才能调用     |
| **代码简洁度**       | 简洁                             | 可以灵活定义匿名函数或具名函数表达式 |

### **总结**

- **函数声明**适用于需要在整个作用域中使用的函数，并且它具有提升特性，允许在声明之前调用。
- **函数表达式**则更灵活，可以定义匿名或具名函数，并且可以通过变量或常量引用同一个函数对象。它不支持提升，必须在定义之后才能调用。3

---

# 技巧

> 中级

- 数组解构语法

  ```js
  // const item = output.splice(index, 1)[0];
  //[item]是 数组解构 语法，它从 splice() 返回的数组中提取出第一个元素，并将其赋值给 item。
  const [item] = output.splice(index, 1);
  ```

> 基础

- 箭头+回调函数

  - 回调函数中，默认传入的是元素的值，可以用更简短的方式表达，比如`n`
  - 当返回的是值，且仅有一行时，`return`和`{}`可以省略\*
  - 当返回的是对象时，需要用`()`包裹返回的对象（详细解析见数组 `map()`方法）

  ```js
  // const filtered = numbers.filter(function (value) {
  //   return value >= 0;
  // });
  const filtered = numbers.filter((n) => n >= 0);
  ```

- `!!` 是一个将值转换为布尔值的常见技巧。它将值转换为 `true` 或 `false`。

  ```js
  console.log(!!1); // 输出: true
  ```

- `splice()方法`

  - 2 个参数

    - `startIndex`：指定从哪个索引位置开始进行修改。

    - `deleteCount`：指定要删除的元素数量。

      ```js
      array.splice(startIndex, deleteCount);
      ```

  - 3 个参数

    - `startIndex`：指定从哪个索引位置开始进行修改。

    - `deleteCount`：指定要删除的元素数量。

    - `item1`：要添加到数组的新元素，插入到 `startIndex` 位置。

      ```js
      array.splice(startIndex, deleteCount, item1);
      ```

  - 4 个或更多参数

    - `startIndex`：指定从哪个索引位置开始进行修改。

    - `deleteCount`：指定要删除的元素数量。

    - `item1, item2, ..., itemN`：要插入到数组的新元素，这些元素会依次从 `startIndex` 位置开始插入。

      ```js
      array.splice(startIndex, deleteCount, item1, item2, ..., itemN)
      ```

  - 可将数组元素插入到目标数组

    ```js
    let arr1 = [1, 2, 3];
    let arr2 = [];
    
    // 使用 splice(0, 0) 来将 arr1 的元素插入到 arr2
    arr2.splice(0, 0, ...arr1); // 展开 arr1 的元素并插入到 arr2 的开头
    console.log(arr2); // [1, 2, 3]
    ```
