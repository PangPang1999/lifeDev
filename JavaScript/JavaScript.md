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

## JavaScript 概念

**知识树**

1. JavaScript 是什么?

   - 当今最流行和广泛使用的编程语言之一。

2. JavaScript 能做什么？

   - 可以用于构建完整的网页应用、移动应用、实时网络应用（如聊天和视频流服务）、命令行工具甚至游戏

3. JavaScript 代码在哪里运行？

   - 最初只能在浏览器中运行。每个浏览器都有一个 JavaScript 引擎来执行代码（例如 Firefox 和 Chrome 的引擎）

   - 通过 Node.js，JavaScript 也可以在浏览器之外运行，从而使开发者可以用 JavaScript 构建 Web 和移动应用的后端。

4. JavaScript 与 ECMA Script 的区别是什么？

   - ECMAScript 是一种规范，定义了 JavaScript 语言的标准。

   - JavaScript 是遵循 ECMAScript 规范的编程语言

5. Chrome Dev Tool 的基本使用

   Chrome Dev Tool 的 Console 可以用于调试，其中可以写一些简单 JavaScript 代码。

   ```javascript
   console.log("Hello");
   2 + 2;
   alert("yo");
   ```

## 设置开发环境

下载 VS code、插件

安装 Node

## 基础代码

**知识树**

1. 代码结构
   - 单 html 文件中，将 `<script>` 元素放在 `<body>` 标签的末尾，所有元素之后。
2. 浏览器解析顺序
   - 浏览器会从上到下解析 HTML 文件。如果将 JavaScript 放在 `<head>` 部分，浏览器可能会先解析和执行 JavaScript，这可能会延迟页面内容的渲染，导致页面加载时显示白屏或空白。
3. 与页面元素交互
   - JavaScript 通常需要操作页面中的元素（例如显示或隐藏元素）。将脚本放在页面底部，可以确保所有 HTML 元素都已加载和渲染。
4. 快捷指令
   - 空的 HTML 文件中，输入`!`，按下回车生成模版文件

**代码示例**

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
    <script src="index.js">
      console.log("Hello World"); // 将命令输出到控制台
    </script>
  </body>
</html>
```

## 分离 JS

**知识树**

1. JavaScript 代码 分离的优点

   - 更好的代码组织和管理。

   - JavaScript 文件可以被多个 HTML 页面复用。

   - 页面加载性能提升，因为浏览器可以缓存外部 JS 文件。

2. 分离方式

   - 在`<body>`或者`<head>`标签内引用对应的文件

**代码示例**

1. 在`index.html`中引用

   ```js
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

   - 分离出的 js 文件

     ```js
     console.log("Hello World");
     ```

## Node 环境运行 JS

在命令行工具（终端），文件（index.js）所在路径下，运行

```bash
node index.js
# 输出：Hello World
```

# 基础

## 变量基础

> 简述：变量（Variables）用于暂时存储数据在计算机的内存中。变量给内存中的存储位置一个名称，使用这个名称可以在后续访问该位置的数据。在 JavaScript 中，我们使用**`let`**关键字来声明变量。在早期，`var` 用得较多，但因为它存在一些问题，现在需要使用 `let`。

**知识树**

1. 变量声明方式
   - 使用`let`直接声明变量，也可以初始化变量，并给它赋值
   - 默认情况下，声明的变量未初始化时，它的值为 `undefined`
   - 可以使用`let`同时声明多个变量，变量之间用`,`隔开
2. 最佳实践
   - 现代最佳实践是每个变量单独声明在一行，并且每个声明语句后加上分号
3. 命名变量的规则
   - 不能是保留关键字（如 `let`、`if`、`var` 等）。如果使用保留关键字，编译时会报错。
   - 命名要有意义，避免使用无意义的变量名（如 `x`）。一个好的变量名可以更清晰地表明它代表的含义。
   - 不能包含空格或连字符。如果需要多个词，可以使用**驼峰命名法**（camelCase），例如 `firstName`。
   - 不能以数字开头。例如，`1stName` 是无效的，正确的方式应该是 `firstName1`。
   - 变量名是大小写敏感的，`firstName` 和 `firstname` 被视为不同的变量。

**代码示例**

1. 声明变量

   ```js
   let name;
   console.log(name); // 输出 undefined
   ```

2. 声明并赋值

   ```js
   let name = "Mosh";
   console.log(name); // 输出 Mosh
   ```

3. 声明多个变量

   ```js
   let firstName, lastName;
   // 声明 和 赋值 可以组合
   // let firstName = 'Mosh' , lastName;
   ```

4. 最佳实践

   ```js
   let firstName;
   let lastName;
   ```

## 常量基础

> 简述：常量（Constants）是指一旦被赋值就不能再修改的数据。它们用于存储在程序运行过程中不会改变的值。常量提供了代码的可读性和可维护性，防止不小心修改这些值。在 JavaScript 中，我们使用 **`const`** 关键字来声明常量。与变量不同，常量一旦声明并初始化后，不能再赋予新的值，否则会抛出错误。在早期，`var` 用得较多，但因为它存在一些问题，现在需要使用 `let`。

**知识树**

1. 常量声明

   - 使用`const`声明，必须要带值

2. 常量的限制
   - 一旦声明为常量，常量的值就不能再被修改，如果尝试修改常量的值，程序会抛出错误
3. 最佳实践
   - 如果你不打算更改一个变量的值，使用 `const` 声明它作为常量是最佳实践。
   - 如果需要更改值，则应使用 `let` 来声明变量。

**代码示例**

1. 声明常量

   ```js
   const interestRate = 0.05;
   console.log(interestRate); // 输出: 0.05
   ```

2. 常量的限制

   ```js
   const interestRate = 0.3;
   interestRate = 1;
   console.log(interestRate);
   //index.js:2 Uncaught TypeError: Assignment to constant variable.
   ```

## 原始数据类型

> 简述：在 JavaScript 中，数据类型大致分为两类：
>
> - **原始数据类型（Primitives）**，也称为值类型。包含字符串、数字、布尔值、未定义、空值。
> - **引用数据类型（Reference Types）**，包含对象（Object）、数组（Array）、函数（Function），将在之后讲解。

**知识树**

1. 字符串（String）：字符串是由一系列字符组成的文本数据。
2. 数字（Number）：数字用于表示整数和浮动数。
3. 布尔值（Boolean）：布尔值只有两种可能的值：`true` 或 `false`。布尔值常用于逻辑判断。
4. 未定义（Undefined）：`undefined` 是 JavaScript 中的一个原始数据类型，它表示“未初始化”或“没有值”。这与变量声明时的状态相关。如果声明了一个变量但没有给它赋值，它的默认值就是 `undefined`。`undefined` 也可以显式地赋值给变量，但这种做法不常见。
5. 空值（Null）：明 `null` 是一个表示“空对象引用”的特殊类型。它与 `undefined` 不同，`undefined` 是未定义的状态，而 `null` 是显式的空值。
6. 历史遗留问题：使用 `typeof` 运算符检查 `null` 时，返回的类型是 `"object"`。这显然与 `null` 作为原始类型的身份不符，且这一行为至今未被修复，主要是出于向后兼容性考虑。

**代码示例**

```js
let userName = "Alice"; // 字符串字面量
let userAge = 30; // 数字字面量
let isUserApproved = true; // 布尔值字面量
let userFirstName; // 默认是 undefined
let userFavoriteColor = null; // 代表空值

// 类型检查
console.log(typeof userName); // "string"
console.log(typeof userAge); // "number"
console.log(typeof isUserApproved); // "boolean"
console.log(typeof userFirstName); // "undefined"
console.log(typeof userFavoriteColor); // "object"（注意：这是 JavaScript 的历史遗留问题）
```

## 动态类型

> 简述：JavaScript 是一种 **动态类型（Dynamic Typing）语言**，这意味着变量在声明时不需要指定类型，变量的类型可以在运行时动态变化。
>
> - **静态语言**：在静态类型语言（如 Java、C++）中，变量的类型在编译时就已经固定，声明变量时必须指定类型，且在后续不能更改。
> - **动态语言**：在动态类型语言（如 JavaScript）中，变量的类型是在运行时根据赋给它的值来决定的，且可以随时更改。

**代码示例**

```js
let userName = "Alice"; // 字符串字面量
console.log(typeof userName); // "string"
userName = 6;
console.log(typeof userName); // "number"
```

## 对象基础

> 简述：在 JavaScript 中，对象（Object）是引用类型的一种。它用于表示具有多个属性和行为的实体。对象可以包含各种类型的值，包括字符串、数字、布尔值、数组、甚至其他对象。通过使用对象，我们可以将相关的属性和方法组合在一起，简化代码并提升代码的可读性与组织性。

**知识树**

1. 对象创建方式
   - 在 JavaScript 中，使用花括号 `{}` 创建一个对象，这是最常见的对象创建方式，称为“对象字面量”。
2. 对象属性访问和修改的方式
   - 点`.`表示法：最常见的方式，用于访问和修改对象的属性。
   - 方括号`[]`表示法：用于动态访问属性，或当属性名中包含空格或特殊字符时。例如，属性名包含空格或数字时需要使用方括号表示法。
   - 间接访问：方括号也可以通过变量间接访问对象的属性。

**代码示例**

1. 对象创建

   ```js
   let person = {
     name: "Mosh",
     age: 30,
   };
   console.log(person);
   // {name: 'Mosh', age: 30}
   ```

2. 对象的属性的访问和修改

   ```js
   // 点（.）表示法
   person.name = "John";
   console.log(person.name); // 输出: John
   // 方括号（[]）表示法
   person["name"] = "Mary";
   console.log(person["name"]); // 输出: Mary
   // 方括号（[]）表示法（间接）
   let selection = "name";
   //这里的 person[selection] 实际上等同 person[name]
   person[selection] = "Pang";
   console.log(person.name); // 输出: Pang
   ```

## 数组基础

> 简述：数组（Array）是用来存储一组有序数据的集合。在 JavaScript 中，数组是一种非常常用的数据结构。你可以用它来表示任何类型的列表，比如购物车中的产品列表、用户选择的颜色列表等。

**知识树**

1. 数组创建方式

   - 数组可以通过 数组字面量（`[]`）来创建，这是一种非常简洁且常用的方式。
   - 可以创建空数组，也可以在创建时给数组添加元素。

2. 数组元素访问方式

   - 数组是有序的，基于`index`索引来访问，`index`从 `0` 开始。
   - 通过 `[]` 和`index`索引访问数组中的元素，例如`arr[index]`。

3. 数组的动态特性

   - 数组的长度和元素类型是可以变化的。数组的大小在运行时根据元素的添加或删除自动调整。
     - 使用`push`添加元素时，默认加到数组最后，同时数组自动更新长度
     - 指定位置添加元素时，会在数组指定位置进行添加/修改值，若数组未达到该长度，会自动拓展至该长度，未定义位置默认为`undefined`
   - 与其他编程语言不同，JavaScript 数组中的每个元素不必是相同的数据类型。可以将字符串、数字、布尔值等不同类型的数据存储在同一个数组中。

4. 数组的`length`属性

   - 每个数组都有一个 `length` 属性，表示数组中元素的数量。
   - 空元素（如稀疏数组中的空位）也会被计入 `length`， `length`即为返回数组的最大索引 + 1。

5. 数组的类型

   - 在 JavaScript 中，数组本质上是对象（`typeof` 返回的是 `object`），因此数组不仅可以存储数据，还可以拥有对象的方法和属性。

6. 最佳实践

   - 在创建数组时，使用有意义的命名，以便代码更加易于理解和维护。

   - 不要将数组用作关联数据存储（对于需要键值对存储的情况，应使用对象）。

**代码示例**

1. 数组创建

   ```js
   // 创建一个空数组
   let selectedColors = [];
   console.log(selectedColors); // 输出: []
   ```

2. 数组创建时赋值

   ```js
   // 创建数组并初始化元素
   let selectedColors = ["red", "blue"];
   console.log(selectedColors); // 输出: ['red', 'blue']
   ```

3. 元素访问

   ```js
   // 通过索引访问数组中的元素
   console.log(selectedColors[0]); // 输出: "red"  (访问数组中的第一个元素)
   console.log(selectedColors[1]); // 输出: "blue" (访问数组中的第二个元素)
   ```

4. 数组的动态特性

   ```js
   // 创建数组并初始化元素
   let selectedColors = ["red", "blue"];
   console.log(selectedColors); // 输出: ['red', 'blue']

   // 使用`push`方法添加元素到数组末尾
   selectedColors.push("white");
   console.log(selectedColors); // 输出: ['red', 'blue', 'white']

   // 指定位置添加元素：如果位置未达到，数组会自动扩展
   selectedColors[9] = 666;
   console.log(selectedColors[8]); // 输出: undefined (索引 8 没有元素，数组扩展至此)
   console.log(selectedColors[9]); // 输出: 666 (数组的第 9 个元素是 666)
   console.log(selectedColors); // 输出: ['red', 'blue', 'white', empty x 6, 666]
   ```

5. 数组的类型

   ```js
   console.log(typeof selectedColors); // 输出: "object" (数组的类型是对象)
   ```

## 函数基础

> 简述：函数（Functions）是 JavaScript 中的基本构建块之一。函数是执行任务或计算值的一组语句。通过函数，你可以将重复使用的代码封装起来，使得程序更加简洁和高效。

**知识树**

1. 函数声明
   - 使用 `function` 关键字来声明一个函数。函数通常需要一个名称、圆括号`()`和花括号`{}`。
     - 圆括号表示函数参数的位置（可以为空）。
     - 花括号包含函数的主体，其中定义了函数的执行内容。
2. 函数参数（Parameters）
   - 参数（Parameter）：函数定义时的占位符，它在函数声明中定义，用来表示将来传入的值。例如，函数的参数 `name` 只是一个变量名，它不会在函数外部存在，直到函数被调用时，实参才会赋值给它。
   - 实参（Argument）：实际传入函数的值。当我们调用一个函数时，我们把值传递给函数的参数，这些值就是实参。
   - 函数可以有多个参数，参数之间使用逗号分隔。
   - 如果在调用函数时没有为某个参数传递值，JavaScript 会为其默认赋值 `undefined`。

**示例代码**

1. 函数声明

   ```js
   function greet() {
     console.log("Hello World");
   }
   greet(); // 输出: Hello World
   ```

2. 函数参数（Parameters）

   ```js
   function greetWithName(name) {
     console.log("Hello " + name);
   }
   greetWithName("John"); // 输出: Hello John
   function greetWithFullName(firstName, lastName) {
     console.log("Hello " + firstName + " " + lastName);
   }
   greetWithFullName("John", "Smith"); // 输出: Hello John Smith
   greetWithFullName("John"); // 输出: Hello John undefined
   ```

## 函数类型基础

> 简述：在 JavaScript 中，函数可以分为两大类型：执行任务的函数和计算值的函数。前者用于执行某些操作，后者则用于返回计算的结果。
>
> - **命令式编程（Imperative Programming）**：任务型函数更符合命令式编程的特点，因为它们强调通过指令控制程序的行为，执行操作而不一定返回结果。
> - **函数式编程（Functional Programming）**：计算型函数更符合函数式编程的特点。函数式编程强调**纯函数**，即给定相同输入总是返回相同输出，并且尽量避免副作用。计算型函数通常是纯函数，因为它们只关注输入输出，没有副作用。

**知识树**

1. 函数分类
   - 任务型函数：用于执行某些操作，不返回值。
   - 计算型函数：用于执行计算并返回结果。
2. 函数调用
   - 调用函数，若存在返回值，可以声明变量/常量获取结果。
   - 函数调用的嵌套：（具备返回值的）函数可以作为参数传递给另一个函数进行调用，在函数调用中处理返回值，无需额外变量。
     - 从内到外依次执行函数
3. 补充
   - 将 JavaScript 中的函数分为“任务型”和“计算型”并不是一种正式的编程范式。这种分类更多是对函数作用和行为的描述，用来帮助理解不同类型的函数在实际应用中的职责和作用。它与一些编程范式有一定的联系：
     - 命令式编程（Imperative Programming）：任务型函数更符合命令式编程的特点，因为它们强调通过指令控制程序的行为，执行操作而不一定返回结果。
     - 函数式编程（Functional Programming）：计算型函数更符合函数式编程的特点。函数式编程强调 纯函数，即给定相同输入总是返回相同输出，并且尽量避免副作用。计算型函数通常是纯函数，因为它们只关注输入输出，没有副作用。

**代码示例**

1. 任务型函数：没有返回值

   ```js
   function greet() {
     console.log("Hello World");
   }
   greet(); // 输出: Hello World
   ```

2. 计算型函数：返回结果

   ```js
   function square(number) {
     return number * number; // 计算并返回数字的平方
   }
   ```

3. 函数调用：通过调用 `square(5)`，我们得到了返回的结果 `25`，并将其赋给变量 `result`，然后输出到控制台。

   ```js
   let result = square(5);
   console.log(result); // 输出: 25
   ```

4. 直接在调用中使用返回值：`console.log` 本身也是一个函数调用，直接在 `console.log` 中调用 `square(5)`，并将返回值传递给 `console.log` 打印到控制台。

   ```js
   console.log(square(5)); // 输出: 25
   ```

# 运算符

## 概念和分类

> 简述：**运算符**是用于与变量和常量一起创建表达式的工具。通过这些表达式，我们可以实现逻辑和算法。

**知识树**

1. 算术运算符（Arithmetic Operators）
   - 用于执行数学计算，例如加、减、乘、除。
2. 赋值运算符（Assignment Operators）
   - 用于给变量赋值，例如将一个值或表达式的结果赋给变量。
3. 比较运算符（Comparison Operators）
   - 用于比较两个值的大小或关系，例如是否相等、大于或小于。
4. 逻辑运算符（Logical Operators）
   - 用于执行布尔逻辑操作，例如 AND（且）、OR（或）、NOT（非）。
5. 位运算符（Bitwise Operators）
   - 用于对数值的二进制位进行操作，例如按位与、按位或、按位异或。

## 算术运算符

> 简述：算术运算符（Arithmetic Operators）用于在 JavaScript 中执行数学计算。这些运算符与数学运算类似，可以对变量和常量进行计算并生成新值。

**知识树**

1. 基本算术运算符
   - 加法（Addition）：用于两个数相加。
   - 减法（Subtraction）：用于两个数相减。
   - 乘法（Multiplication）：用于两个数相乘。
   - 除法（Division）：用于两个数相除。
   - 取余（Remainder of Division）：`%`用于计算两个数相除后的余数。
   - 指数运算（Exponentiation）：计算一个数的幂，使用双星号 `**` 表示
2. 增强的算术运算符
   - 自增运算符（Increment）
     - 前置自增（`++x`）：先将变量的值加 1，然后返回新的值。
     - 后置自增（`x++`）： 先返回变量的当前值，然后再将变量的值加 1。
   - 自减运算符（Decrement）
     - 前置自减（`--x`）
     - 后置自减（`x--`）

**代码示例**

1. 加法（Addition）

   ```js
   let x = 10;
   let y = 5;
   console.log(x + y); // 输出: 15
   ```

2. 减法（Subtraction）

   ```js
   console.log(x - y); // 输出: 5
   ```

3. 乘法（Multiplication）

   ```js
   console.log(x * y); // 输出: 50
   ```

4. 除法（Division）

   ```js
   console.log(x / y); // 输出: 2
   ```

5. 取余（Remainder of Division）

   ```js
   console.log(x % y); // 输出: 0
   ```

6. 指数运算（Exponentiation）

   ```js
   console.log(x ** y); // 输出: 100000（10 的 5 次方）
   ```

7. 自增运算符（Increment）

   - 前置自增（`++x`）

     ```js
     let x = 10;
     console.log(++x); // 输出: 11
     ```

   - 后置自增（`x++`）

     ```js
     let x = 10;
     console.log(x++); // 输出: 10
     console.log(x); // 输出: 11
     ```

8. 自减运算符（Decrement）

   - 前置自减（`--x`）：先将变量的值减 1，然后返回新的值。

     ```js
     let x = 10;
     console.log(--x); // 输出: 9
     ```

   - 后置自减（`x--`）：先返回变量的当前值，然后再将变量的值减 1。

     ```js
     let x = 10;
     console.log(x--); // 输出: 10
     console.log(x); // 输出: 9
     ```

## 赋值运算符

> 简述：赋值运算符（Assignment Operators）用于将值赋给变量。我们可以通过赋值运算符将一个表达式的结果存储到一个变量中。

**知识树**

1. 基本赋值运算符
   - 简单赋值运算符 `=`，它将右侧的值赋给左侧的变量。
2. 结合算术运算符的赋值
   - 结合赋值运算符，可以更高效地对变量进行运算并同时更新它的值。
3. 简化的运算符写法：通过将算术运算符与赋值运算符结合，我们可以用更短的方式实现相同的功能。
   - 加法赋值 `+=`：将当前值与指定值相加并赋回变量。
   - 减法赋值 `-=`：将当前值与指定值相减并赋回变量。
   - 乘法赋值 `\*=`：将当前值与指定值相乘并赋回变量。
   - 除法赋值 `/=`：将当前值除以指定值并赋回变量
   - 取余赋值 `%=`：将当前值对指定值求余并赋回变量。
   - 指数赋值 `\**=`：将当前值与指定值的幂运算结果赋回变量。

**代码示例**

1. 基本赋值运算符

   ```js
   let x = 10; // 将值 10 赋给变量 x
   ```

2. 结合算术运算符的赋值

   ```js
   let x = 10;
   // 将 x 的值加 5，然后赋回 x
   x = x + 5;
   console.log(x); // 输出: 15
   ```

3. 简化的运算符写法

   - 加法赋值（`+=`）

     ```js
     let x = 10;
     x += 5; // 等同于 x = x + 5
     console.log(x); // 输出: 15
     ```

   - 减法赋值（`-=`）

     ```js
     x -= 5; // 等同于 x = x - 5
     ```

   - 乘法赋值（`*=`）

     ```js
     x *= 3; // 等同于 x = x * 3
     ```

   - 除法赋值（`/=`）

     ```js
     x /= 2; // 等同于 x = x / 2
     ```

   - 取余赋值（`%=`）

     ```js
     x %= 4; // 等同于 x = x % 4
     ```

   - 指数赋值（`**=`）

     ```js
     x **= 2; // 等同于 x = x ** 2
     ```

## 比较运算符

> 简述：比较运算符（Comparison Operators）用于比较两个值的大小或关系。比较运算的结果始终是一个布尔值（Boolean），即 `true` 或 `false`。这些运算符也称为**关系运算符（Relational Operators）**。

**知识树**

1. 大于（Greater Than）：`>`

   - 检查一个值是否大于另一个值。

2. 大于或等于（Greater Than or Equal To）：`>=`

   - 检查一个值是否大于或等于另一个值。

3. 小于（Less Than）：`<`

   - 检查一个值是否小于另一个值。

4. 小于或等于（Less Than or Equal To）：`<=`

   - 检查一个值是否小于或等于另一个值。

**代码示例**

1. 大于（`>`）

   ```js
   let x = 10;
   console.log(x > 5); // 输出: true
   ```

2. 大于或等于（`>=`）

   ```js
   console.log(x >= 10); // 输出: true
   ```

3. 小于（`<`）

   ```js
   console.log(x < 5); // 输出: false
   ```

4. 小于或等于（`<=`）

   ```js
   console.log(x <= 10); // 输出: true
   ```

## 相等运算符

> 简述：JavaScript 中提供了两种相等运算符：**严格相等运算符（Strict Equality Operator）** 和 **宽松相等运算符（Loose Equality Operator）**，它们用于比较两个值是否相等，但判断标准有所不同。

**知识树**

1. 严格相等运算符：`===`
   - 要求左右两边的值类型和值都完全相同。
2. 严格不相等运算符：`!==`
   - 要求左右两边的值类型和值都不相同。
3. 宽松相等运算符：`==`
   - 比较前会进行类型转换，使得两边的值类型一致，然后再进行比较。
4. 宽松不相等运算符：`!=`
   - 比较前会进行类型转换，使得两边的值类型一致，然后再进行不等比较。

**代码示例**

1. 严格相等运算符（`===`）

   ```js
   let x = 10;
   console.log(x === "10"); // 输出: false
   ```

2. 严格不相等运算符（`!==`）

   ```js
   console.log(x !== 10); // 输出: false
   ```

3. 宽松相等运算符（`==`）

   ```js
   console.log(x == "10"); // 输出: true
   console.log(true == 1); // 输出: true
   console.log(false == 0); // 输出: true
   ```

4. 宽松不相等运算符（`!=`）

   ```js
   console.log(x != "5"); // 输出: true
   ```

## 三元运算符

> 简述：三元运算符（Ternary Operator），也叫条件运算符，是 JavaScript 中一个非常简洁且常用的工具，用于根据条件决定赋值或执行操作。

**知识树**

1. 语法结构
   - `condition ? expression1 : expression2`
     - `condition`：返回布尔值的条件表达式
     - `expression1`：当条件为 `true` 时执行的表达式或返回的值
     - `expression2`：当条件为 `false` 时执行的表达式或返回的值
2. 应用场景
   - 简单的条件判断并赋值
   - 根据条件选择值或执行轻量逻辑
3. 注意事项
   - 可读性：虽然三元运算符很简洁，但如果逻辑过于复杂，可能会影响代码可读性。可以考虑改用 `if...else` 语句。
   - 嵌套使用：_避免嵌套多个三元运算符，以免代码难以维护。若嵌套使用，**代码质检**会报告异常_

**代码示例**

1. 简单的三元运算符

   ```js
   let points = 120; // 声明一个变量，用于记录客户积分
   let type = points >= 100 ? "gold" : "silver"; // 使用三元运算符判断客户类型
   console.log(type); // 输出: gold
   ```

2. 嵌套三元运算符

   ```js
   let x = 15;
   let result = x > 10 ? (x < 20 ? "A" : "B") : "C";
   console.log(result); // 输出: A
   ```

   - 这里的三元运算符嵌套判断了 `x` 的值，根据不同条件返回不同的结果。

## 逻辑运算符

> 简述：**逻辑运算符**用于基于多个条件进行决策。在 JavaScript 中，有三种常用的逻辑运算符：**逻辑与**（AND）、**逻辑或**（OR）、**逻辑非**（NOT）。

**知识树**

1. 逻辑与运算符：`&&`
   - 检查两个条件是否同时为 `true`。
   - 只有当两个操作数都为 `true` 时，结果才为 `true`。
2. 逻辑或运算符：`||`
   - 检查至少一个条件为 `true` 时，结果为 `true`。
   - 如果两个操作数都为 `false`，结果为 `false`。
3. 逻辑非运算符：`!`
   - 取反一个布尔值。
   - 如果原值为 `true`，则结果为 `false`；如果原值为 `false`，则结果为 `true`。

**代码示例**

1. 逻辑与运算符（`&&`）

   ```js
   console.log(true && true); // 输出: true
   console.log(true && false); // 输出: false
   console.log(false && true); // 输出: false
   console.log(false && false); // 输出: false
   ```

2. 逻辑或运算符（`||`）

   ```js
   console.log(true || true); // 输出: true
   console.log(true || false); // 输出: true
   console.log(false || true); // 输出: true
   console.log(false || false); // 输出: false
   ```

3. 逻辑非运算符（`!`）

   ```js
   console.log(!true); // 输出: false
   console.log(!false); // 输出: true
   ```

4. 逻辑与实际应用

5. ```js
   let highIncome = true; // 高收入
   let goodCreditScore = true; // 良好的信用评分
   let eligibleForLoan = highIncome && goodCreditScore; // 贷款批准条件
   console.log(eligibleForLoan); // 输出: true
   ```

   - 要求高收入且良好的信用评分

6. 逻辑或实际应用：

   ```js
   let highIncome = true; // 高收入
   let goodCreditScore = false; // 不良信用评分
   let eligibleForLoan = highIncome || goodCreditScore; // 贷款批准条件
   console.log(eligibleForLoan); // 输出: true
   ```

   - 只需满足一个条件即可

## 逻辑运算符与非布尔值

> 简述：在 JavaScript 中，逻辑运算符 不仅可以与布尔值一起使用，还能与非布尔值进行操作。通过这种方式，逻辑运算符返回的结果不仅仅是布尔值，而是根据操作数的类型而有所不同。

**知识树**

1. 逻辑或运算符`||`与非布尔值

   - 当与非布尔值操作时，逻辑运算符的结果可能是这些值本身，而不是 `true` 或 `false`。

2. Truthy 和 Falsy 值：

   - 当我们使用逻辑运算符时，JavaScript 会将操作数解释为“truthy”（真值）或“falsy”（假值）。这些值并不等同于布尔值的 `true` 或 `false`，但它们可以在逻辑运算中起到类似的作用。

   - Falsy 值在布尔上下文中被视为 `false`。这些值包括：

     - `undefined`

     - `false`

     - `null`

     - `0`

     - `NaN`

     - `""`（空字符串）

   - Truthy 值在布尔上下文中被视为 `true`。任何不是 **falsy** 的值都被认为是 **truthy**（真值）。这包括字符串、非零数字、对象、数组、函数等。

3. 短路计算（Short-circuiting）

   - 逻辑运算符会在确定结果后停止评估其他操作数。

4. 现实世界的应用：默认值

   - 使用逻辑运算符为变量设置默认值。

5. 补充

   - `!!` 是一个将值转换为布尔值的常见技巧。它将值转换为 `true` 或 `false`。

**代码示例**

1. 逻辑或运算符（`||`）与非布尔值

   ```js
   console.log(false || true); // 输出: true
   console.log(false || "Mosh"); // 输出: Mosh
   console.log(false || 1); // 输出: 1
   ```

2. Truthy 和 Falsy 值

   ```js
   console.log(!!undefined); // 输出: false
   console.log(!!false); // 输出: false
   console.log(!!"Mosh"); // 输出: true
   console.log(!!1); // 输出: true
   console.log(!!{}); // 输出: true
   ```

3. 短路计算（Short-circuiting）

   ```js
   console.log("Mosh" || "John"); // 输出: Mosh（右侧的 "John" 被忽略）
   ```

   - `"Mosh"` 是 truthy，因此立即返回 `"Mosh"`，并且右侧的 `"John"` 被忽略。

4. 现实世界的应用：

   ```js
   let userColor = undefined; // 用户未选择颜色
   let defaultColor = "blue"; // 默认颜色
   let currentColor = userColor || defaultColor; // 使用默认颜色
   console.log(currentColor); // 输出: blue
   ```

   - 可以使用逻辑运算设置默认值

## 位运算符

> 简述：在 JavaScript 中，位运算符（bitwise operators）用于按位操作数字的二进制表示。位运算符与逻辑运算符相似，但它们作用于数字的单个位（bit）。

**知识树**

1. 位运算符基本概念

   - 位运算符直接操作数字的二进制位，通过逐个位地进行比较。

   - 位与运算符`&`：仅当两个对应的位都为 `1` 时，结果才为 `1`。
   - 位或运算符`|`：只要两个对应的位中有一个为 `1`，结果就是 `1`。
   - 取反操作符`~`：对操作数的每一位进行取反（即 `1` 变为 `0`，`0` 变为 `1`）。

2. 位运算符的应用

   - 权限管理系统
     - 使用位运算符分配与检查权限
     - 位与运算符检查权限
     - 位运算符取消权限

**代码示例**

1. 位与运算符（`&`）

   ```js
   let result = 5 & 3; // 位与操作
   console.log(result); // 输出: 1
   ```

   - 5 的二进制是 `0101`，3 的二进制是 `0011`，经过位与操作后得到 `0001`（即 1）。

2. 位或运算符（`|`）

   ```js
   let result = 5 | 3; // 位或操作
   console.log(result); // 输出: 7
   ```

   - 5 的二进制是 `0101`，3 的二进制是 `0011`，经过位或操作后得到 `0111`（即 7）

3. 权限管理系统应用

   ```js
   // 定义各个权限的二进制表示
   const readPermission = 4; // 0100
   const writePermission = 2; // 0010
   const executePermission = 1; // 0001
   // 用户的权限
   let myPermission = 0; // 初始无权限
   myPermission = myPermission | readPermission | writePermission;
   console.log(myPermission); // 输出: 6 (0110)
   // 检查权限
   let message = myPermission & readPermission ? "Yes" : "No";
   console.log(message); // 输出: Yes
   // 取消权限
   myPermission = myPermission & ~readPermission; // 取消读取权限
   console.log(myPermission); // 输出: 2 (0010)
   ```

## 运算符优先级

> 简述：每种运算符都有自己的优先级，优先级较高的运算符会先执行。理解运算符优先级非常重要，以确保在复杂表达式中得到正确的计算结果。

**知识树**

1. 运算符优先级的顺序

   - 括号 `()`：括号中的表达式最先计算。
   - 乘法、除法、取余 `* / %`：这些运算符优先级较高。
   - 加法、减法 `+ -`：这些运算符优先级低于乘除运算。
   - 比较运算符 `== !== < > <= >=`。
   - 逻辑运算符 `&& ||`：这些运算符优先级最低。

2. 运算符优先级应用
   - 使用括号明确优先级，避免错误。

**代码示例**

1. 运算符优先级示例

   ```js
   let result = 3 + 4 * 2;
   console.log(result); // 输出: 11
   ```

   - 这个结果为 `11`，而不是 `14`，因为乘法（`*`）运算符的优先级高于加法（`+`）运算符。因此，首先执行 `4 * 2`，得到 `8`，然后再执行 `3 + 8`，最终结果为 `11`。

2. 使用括号明确优先级

   ```js
   let result = (3 + 4) * 2;
   console.log(result); // 输出: 14
   ```

   - 在这个例子中，使用括号强制先执行 `3 + 4`，然后再乘以 `2`，所以最终结果是 `14`。

## 交换元素

> 简述：交换两个变量的值是常见的编程操作，主要通过第三个变量实现，而加减法和位运算仅适用于数字。

**知识树**

1. 交换元素最常见的方法
   - 使用第三个变量
2. 加减法交换（仅适用于数字）
3. 位运算交换（仅适用于整数）

**代码示例**

1. 使用第三个变量交换元素（适用于任意数据类型）

   ```js
   let a = "red";
   let b = "blue";

   let temp = a; // 使用临时变量
   a = b;
   b = temp;

   console.log(a); // 输出：blue
   console.log(b); // 输出：red
   ```

2. 加减法交换（仅适用于数字）

   ```js
   let a = 1,
     b = 2;
   a = a + b; // a = 3
   b = a - b; // b = 1
   a = a - b; // a = 2

   console.log(a); // 输出：2
   console.log(b); // 输出：1
   ```

3. 位运算交换（仅适用于整数）

   ```js
   let a = 1,
     b = 2;
   a = a ^ b; // a = 3
   b = a ^ b; // b = 1
   a = a ^ b; // a = 2
   console.log(a); // 输出：2
   console.log(b); // 输出：1
   ```

# 控制流程

## `if` 和 `else` 条件语句

> 简述：`if` 和 `else` 是常见的条件语句，用于根据特定条件执行不同的代码块。在 JavaScript 中，它们帮助我们根据条件判断来控制程序的流程。

**知识树**

1. `if`语句
   - 条件为 `true` 时执行代码
2. `else if`语句
   - 用于检查多个条件
3. `else`语句
   - 默认执行的操作（当所有条件都不满足时）

**代码示例**：

1. `if`语句

   ```js
   if (condition) {
     // 条件为 true 时执行的代码
   }
   ```

2. `else if`语句

   ```js
   if (condition) {
     // 条件为 true 时执行的代码
   } else if (otherCondition) {
     // 第二个条件为 true 时执行的代码
   }
   ```

3. `else`语句

   ```js
   if (condition) {
     // 条件为 true 时执行的代码
   } else {
     // 条件为 false 时执行的代码
   }
   ```

4. 基本 `if` 示例

   ```js
   let hour = 10; // 假设当前时间是上午 10 点
   if (hour >= 6 && hour < 12) {
     console.log("Good Morning");
   }
   ```

   - 假设我们已经获取到了当前的小时数，我们想根据不同的小时数来显示不同的问候语。

5. `if` 与 `else if` 语句示例

   ```js
   let hour = 10; // 假设当前时间是上午 10 点
   if (hour >= 6 && hour < 12) {
     console.log("Good Morning");
   } else if (hour >= 12 && hour < 18) {
     console.log("Good Afternoon");
   }
   ```

6. `if`、`else if` 与 `else` 语句示例

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

7. 简化版代码

   ```js
   let hour = 10; // 假设当前时间是上午 10 点
   if (hour >= 0 && hour < 12) console.log("Good Morning");
   else if (hour >= 12 && hour < 18)
     console.log("Good Afternoon");
   else console.log("Good Evening");
   ```

## `switch` 和 `case` 条件语句

> 简述：`switch` 和 `case` 是常用的条件语句，用于根据一个变量的值执行不同的代码块。相比多个 `if` 和 `else`，`switch` 语句能更简洁地处理多重条件。

**知识树**

1. `switch`语句
   - 根据变量的值执行不同的代码块
2. `case`语句
   - 每个 `case` 与 `switch` 中的变量值进行匹配
3. `break`语句
   - 防止执行后续的 `case` 语句（防止 fall-through）
4. `default`语句
   - 处理所有未匹配到 `case` 的情况
5. `fall-through`行为
   - 忘记 `break` 会导致程序继续执行后续 `case` 的代码
6. 优缺点：
   - 优点：
     - 简洁、直观，适用于需要多个条件判断的情况。
     - 更清晰的语法，尤其是在多个值需要匹配时。
   - 缺点：
     - 忘记 `break` 会导致意外的 **fall-through** 行为。
     - 条件较少时，使用 `switch` 可能显得有些臃肿。

**代码示例**：

1. `switch` 语句的基本用法

   ```js
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

2. 根据用户角色显示消息

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

3. `fall-through` 行为示例（没有使用 `break`）

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

   // Guest user
   // Moderator user
   // Admin user
   // Unknown role
   ```

   - 这里缺少 `break`，导致程序执行了所有 `case` 语句。

4. 用 `if` 和 `else` 实现相同的逻辑

   ```js
   let role = "guest";
   if (role === "guest") console.log("Guest user");
   else if (role === "moderator") console.log("Moderator user");
   else if (role === "admin") console.log("Admin user");
   else console.log("Unknown role");
   ```

## `For`循环语句

> 简述：`for` 循环语句是用于重复执行代码块的一种常见控制结构。它有三部分组成：初始化表达式、条件表达式和增量表达式，通常用于已知循环次数的场景。

**知识树**

1. `for`循环基本结构
   - 包含初始表达式、条件判断、增量表达式，以及循环体
   - 初始表达式 (`initialExpression`)：用于声明和初始化循环变量。通常使用 `let` 来声明一个索引变量 `i`，这是 `for` 循环的常见约定。
   - 条件表达式 (`condition`)：控制循环是否继续，循环会在这个条件为 `true` 时继续执行。
   - 增量表达式 (`incrementExpression`)：每次循环结束时，更新变量的值。常见的操作是使用递增操作符。
   - 循环体：控制循环变量的增减

**代码示例**

1. `for` 循环的基本用法

   ```js
   for (let i = 0; i < 5; i++) {
     console.log("Hello World");
   }
   ```

   - `let i = 0` 初始化 `i` 为 0。
   - `i < 5` 是循环的条件表达式，表示当 `i` 小于 5 时继续执行。
   - `i++` 每次循环结束时，`i` 自增 1。

2. 输出 `i` 的值

   ```js
   for (let i = 0; i < 5; i++) {
     console.log("Hello World", i);
   }
   ```

   - 输出每次循环时的 `i` 的值，帮助观察循环执行过程。

3. 筛选奇数

   ```js
   for (let i = 1; i <= 5; i++) {
     if (i % 2 !== 0) console.log(i); // 输出奇数
   }
   ```

   - 使用 `if` 语句筛选出 `i` 为奇数的值并输出。

4. 倒序输出奇数

   ```js
   for (let i = 5; i >= 1; i--) {
     if (i % 2 !== 0) console.log(i);
   }
   ```

   - 改变初始值、判断和增量，倒序输出

## `while` 循环语句

> 简述：`while` 循环是一种在循环次数不确定时非常有用的控制结构。与 `for` 循环相比，`while` 循环将循环变量的声明放置在循环外部，允许更加灵活的循环控制。`while` 循环适合用于条件驱动的循环，直到条件不再满足时停止执行。

**知识树**

1. `while`循环的基本语法
   - `condition`：判断循环是否继续的条件表达式
   - 循环体：在每次条件满足时执行的代码
2. 与`for`循环的区别
   - `for` 循环适合已知循环次数时使用
   - `while` 循环适合循环次数未知，基于条件判断的场景
3. `while`循环的使用场景
   - 条件驱动的循环
   - 输入验证、文件读取、网络请求等
4. 最佳实践
   - 循环体内的条件判断必须小心，以防止出现死循环（即条件永远为 `true`）。

**代码示例**

1. `while` 循环的基本结构

   ```javascript
   while (condition) {
     // 循环体
   }
   ```

   - `condition`：循环的条件，只有为 `true` 时才会继续循环，通常是布尔表达式。
   - 循环体中的代码会在每次条件为 `true` 时执行，直到条件为 `false`。

2. 将 `for` 循环转换为 `while` 循环

   - `for` 循环版本：显示从 1 到 5 的奇数

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

   - 关键点分析：
     1. 声明变量：`while` 循环要求循环变量在循环外部声明（如 `let i = 1`）。这与 `for` 循环的语法不同，后者通常会在循环内部进行声明。
     2. 条件判断：`while` 循环首先会判断条件 `i <= 5`，如果为 `true`，则执行循环体。如果为 `false`，则跳出循环。
     3. 循环体：每次循环结束时，必须手动更新变量 `i`，如 `i++`。这与 `for` 循环中的自增操作 `i++` 相似，但在 `while` 循环中我们需要显式地处理。

## `do-while` 循环语句

> 简述：`do-while` 循环是 `while` 循环的一种变体，最大的不同在于它总是至少执行一次循环体。无论初始条件是否满足，`do-while` 都会先执行一次循环体，然后再判断条件是否继续循环。它适合那些需要先执行操作后再验证条件的场景。

**知识树**

1. `do-while` 循环的基本语法
   - `do`：先执行循环体。
   - `while`：循环结束后检查条件，决定是否继续执行。
2. `do-while` 与 `while` 循环的区别
   - `while` 循环：在条件为 `false` 时，循环体不会执行一次。
   - `do-while` 循环：条件检查发生在循环体执行之后，确保循环体至少执行一次。
3. `do-while` 循环的应用场景
   - 至少执行一次操作，如用户输入验证。
   - 需要先执行某些操作后再检查条件。
   - 特别适用于那些条件最初不确定的场景。
4. 最佳实践
   - 若不正确更新条件变量，可能会导致死循环。

**代码示例**

1. `do-while` 循环的基本结构

   ```js
   do {
     // 循环体
   } while (condition);
   ```

   - 这里，`condition` 是在每次循环结束后评估的。如果条件为 `true`，则继续执行，否则退出循环。

2. 将 `while` 循环转换为 `do-while` 循环

   - `while` 循环版本：

     ```js
     let i = 1; // 初始化变量
     while (i <= 5) {
       if (i % 2 !== 0) console.log(i); // 输出奇数
       i++; // 增加 i
     }
     ```

   - 转换为 `do-while` 循环：

     ```js
     let i = 1; // 初始化变量
     do {
       if (i % 2 !== 0) console.log(i); // 输出奇数
       i++; // 增加 i
     } while (i <= 5);
     ```

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

  - 分析：
    1. 初始化：`i` 在循环开始前初始化。
    2. 条件检查：与 `while` 循环不同，`do-while` 会首先执行循环体，然后检查条件。如果条件为 `false`，循环会终止。
    3. 执行至少一次：即使 `i` 初始为 `6`，在 `do-while` 中仍会执行一次循环体。

## 无限循环

> 简述：无限循环（Infinite Loop）是指程序中的循环条件永远为 `true`，导致循环无法停止，程序在执行时陷入无尽的重复操作中。无限循环通常是由循环条件的逻辑错误或遗漏导致的，虽然有时被用作特定的控制结构，但它们需要谨慎使用。错误的无限循环可能导致系统资源的耗尽，甚至程序崩溃。

**知识树**

1. 无限循环的定义
   - 循环条件永远为 `true`，导致程序无法退出。
   - 通常由于漏更新循环变量或条件判断错误。
2. 无限循环的危害
   - 消耗过多的 CPU 资源，导致程序卡死。
   - 导致浏览器或计算机崩溃，或导致系统变得无响应。
   - 强制停止程序是唯一的解决方案。
3. 无限循环的常见示例
   - `while` 循环中的无限循环。
   - `do-while` 循环中的无限循环。
   - `for` 循环中的无限循环。
4. 如何避免无限循环
   - 确保循环条件的合理性。
   - 在循环体中适时更新控制变量，避免条件永远成立。
5. 无限循环的应用场景
   - 在某些特定情况下，确实需要使用无限循环（例如：事件监听、服务器的持续运行等）。

**代码示例**

1. `while` 循环中的无限循环

   ```js
   let i = 1; // 初始化变量
   while (i <= 5) {
     console.log(i);
     // 忘记更新 i，条件永远为 true
   }
   ```

   - 问题：在这个示例中，`i` 没有在循环体内更新，因此条件 `i <= 5` 始终为 `true`，导致循环无法终止。

2. `do-while` 循环中的无限循环

   ```js
   let x = 1; // 初始化变量
   do {
     console.log(x);
     // 忘记更新 x
   } while (true); // 条件始终为 true
   ```

   - 问题：`while (true)` 保证条件永远为 `true`，即使循环体中的代码执行多次，条件始终不会改变，从而导致无限循环。

3. `for` 循环中的无限循环

   ```js
   for (let i = 1; i > 0; i++) {
     console.log(i);
   }
   ```

   - 问题：这里，循环条件 `i > 0` 始终为 `true`，即使 `i` 不断递增，条件始终成立，导致循环永远无法退出。

4. 经典的 `for` 循环无限循环形式

   ```js
   for (;;) {
     console.log("This loop runs forever!");
   }
   ```

   - 问题：此代码省略了初始化、条件和更新语句，等同于写了一个没有任何限制条件的无限循环，循环会一直执行下去。

## `for-in` 循环

> 简述：`for-in` 循环用于遍历对象的可枚举属性，或者数组的索引。虽然它在对象属性迭代中非常有效，但在数组迭代中并不是最优选择，它会遍历数组的索引，而不是数组的值，如果数组对象上有额外的可枚举属性，它们也会被遍历到，这会影响数组的遍历效果。

**知识树**

1. `for-in` 基本结构
   - 适用于遍历对象的属性名或数组的索引。
   - 关键字 `in` 用来表示“遍历”的操作。
   - 迭代时，循环变量 (`key`) 会获取每一个属性名或索引。
2. `for-in` 用于对象遍历
   - 可以用来遍历对象的所有可枚举属性。
   - 每次迭代时，循环变量 `key` 会设置为对象的一个属性名。
   - 可以通过 `key` 动态访问属性值。
3. `for-in` 用于数组
   - `for-in` 可以遍历数组，但会遍历所有索引（包括非标准索引），并且不能直接访问数组元素的值。
   - 它不会返回数组元素本身，而是返回索引。
4. `for-in` 的局限性
   - 不适合数组的遍历，可能会返回非标准的属性。
   - 相比之下，`for-of` 更适合用于数组的元素迭代。
5. 使用方括号表示法访问对象属性
   - 由于对象的属性名是动态的，`for-in` 循环中获取的 `key` 必须使用方括号表示法 (`object[key]`) 来访问属性值。

**代码示例**

1. `for-in` 循环的基本语法

   ```js
   for (let key in object) {
     // 在每次迭代中，key 是对象的一个属性名
   }
   ```

   - `key`：循环变量，它在每次迭代中将是对象的一个属性名。
   - `object`：要遍历的对象。

2. `for-in` 在对象中的使用

   - 定义对象

     ```js
     let person = {
       name: "Mosh",
       age: 30,
     };
     ```

   - 遍历对象的属性

     ```js
     for (let key in person) {
       console.log(key); // 输出属性名
     }
     // 输出：
     // name
     // age
     ```

   - 访问属性的值

     ```js
     for (let key in person) {
       console.log(key, person[key]); // 输出属性名和属性值
     }
     // 输出：
     // name Mosh
     // age 30
     ```

3. 使用方括号表示法访问属性

   ```js
   for (let key in person) {
     console.log(key, person[key]); // 正确地输出属性名和值
   }
   ```

   - `key` 是动态的，`person.key` 会查找一个名为 `key` 的属性，而实际的属性名保存在 `key` 变量中。正确的访问方式是通过 `person[key]`，这保证了属性值的正确访问。

4. `for-in` 在数组中的使用

   ```js
   let colors = ["red", "green", "blue"];
   for (let index in colors) {
     console.log(index, colors[index]); // 输出索引和值
   }
   // 输出：
   // 0 red
   // 1 green
   // 2 blue
   ```

   - 使用索引访问数组元素

5. `for-in` 的局限性

   ```js
   let arr = [10, 20, 30];
   arr.customProperty = "Custom Value";
   for (let index in arr) {
     console.log(index, arr[index]); // 会输出索引和自定义属性
   }
   // 输出：
   // 0 10
   // 1 20
   // 2 30
   // customProperty Custom Value
   ```

   - `for-in` 会遍历数组中所有的可枚举属性，包括数组的自定义属性（例如添加到数组对象中的额外属性）

## `for-of` 循环

> 简述：`for-of` 循环是 ES6 引入的语法，专门用于遍历**可迭代对象**（如数组、字符串、Set、Map 等）。与 `for-in` 不同，`for-of` 直接访问数组的元素值，而不是索引，因此它是遍历数组时更理想的选择。

**知识树**

1. `for-of` 基本结构
   - 用于遍历可迭代对象（如数组、字符串、Map、Set 等）的元素。
   - `element` 是循环变量，在每次迭代中保存当前迭代的值。
   - 适用于数组、字符串等序列类型。
2. `for-of` 与 `for-in` 的区别
   - `for-in` 用于遍历对象的属性名或数组的索引。
   - `for-of` 直接访问数组的元素值，更适合用于数组的遍历。
3. `for-of` 的局限性
   - 不能用于遍历对象的属性名。若需要遍历对象属性，仍应使用 `for-in` 循环。

**代码示例**

1. `for-of` 循环的基本语法

   ```js
   for (let element of iterable) {
     // 在每次迭代中，element 是当前迭代的值
   }
   ```

   - `element`：循环变量，在每次迭代中保存可迭代对象的一个元素。
   - `iterable`：可迭代的对象，如数组、字符串、Map 等。

2. 在数组中使用 `for-of`

   ```js
   let colors = ["red", "green", "blue"];
   for (let color of colors) {
     console.log(color);
   }
   // 输出：
   // red
   // green
   // blue
   ```

   - `for-of` 直接访问数组的元素，无需手动处理索引。

3. 在字符串中使用 `for-of`

   ```js
   let word = "hello";
   for (let letter of word) {
     console.log(letter);
   }
   // 输出：
   // h
   // e
   // l
   // l
   // o
   ```

   - 字符串也是可迭代对象，可以使用 `for-of` 循环遍历其每个字符。

4. `for-of` 的局限性：不能用于遍历对象的属性

   ```js
   let person = { name: "Alice", age: 30 };
   // 错误示例
   for (let prop of person) {
     console.log(prop);
   }
   // 会报错，因为 person 是一个普通对象，无法直接用 for-of 遍历属性
   ```

   - `for-of` 无法用于遍历对象的属性名，应使用 `for-in` 来处理对象的属性。

## `break` 和 `continue` 关键词

> 简述：`break` 和 `continue` 是控制循环流程的两个重要关键词。`break` 用于立即终止循环，跳出当前的循环块；而 `continue` 则用于跳过当前迭代的剩余部分，直接进入下一次迭代。虽然这两个关键词在控制循环流程中非常有用，但滥用它们可能会导致代码可读性下降，特别是在复杂的循环结构中。

**知识树**

1. `break` 基本概念
   - 用于终止当前循环，跳出循环体。
   - 适用于 `for`、`while` 和 `do-while` 等循环中。
2. `continue` 基本概念
   - 跳过当前循环中的剩余代码，直接进入下一次循环的迭代。
   - 适用于 `for`、`while` 和 `do-while` 等循环中。
3. 最佳实践
   - 过度使用 `break` 或 `continue` 可能会让循环逻辑变得难以理解，尤其是在复杂的嵌套循环中。
   - 更加清晰的控制结构，如 `if` 判断，通常能替代这些关键字。

**代码示例**

1. `break` 终止循环

   ```js
   let i = 0;
   while (i <= 10) {
     if (i === 5) break;
     console.log(i);
     i++;
   }
   // 输出：
   // 0
   // 1
   // 2
   // 3
   // 4
   ```

   - 解释：当 `i` 等于 5 时，`if` 条件为 `true`，执行 `break` 语句。`break` 语句使得 `while` 循环立即结束，不再执行剩余的循环体。输出仅为 0 至 4。

2. `continue` 跳过当前迭代

   ```js
   let i = 0;
   while (i <= 10) {
     if (i % 2 === 0) {
       i++;
       continue; // 跳过偶数的输出
     }
     console.log(i);
     i++;
   }
   // 输出：
   // 1
   // 3
   // 5
   // 7
   // 9
   ```

   - 解释：在每次迭代中，`if (i % 2 === 0)` 用来检查当前数字是否为偶数。如果是偶数，`continue` 会跳过当前迭代的 `console.log(i)` 部分，直接进行下一次迭代。只有奇数被输出，偶数被跳过。

## 循环总结

> 简述：循环（LOOP）是编程中最常用的控制结构之一，它允许在条件满足的情况下重复执行一段代码。JavaScript 提供了多种循环类型，每种类型适用于不同的情境。理解这些循环的特点、用途及其优缺点，有助于在不同的编程场景中作出最合适的选择。

**知识树**

1. `for` 循环
   - 用途：当你知道循环的次数时，使用 `for` 循环最为合适。
   - 结构：初始化、条件、增量三部分组成。
   - 用法：一般用于索引明确、操作数目固定的场景。
2. `while` 循环

   - 用途：当你不知道循环次数，且希望根据某个条件持续执行时，使用 `while` 循环。
   - 结构：仅包含条件，若条件满足则进入循环体。
   - 用法：适合基于条件变化的循环，尤其是终止条件未知时。

3. `do while` 循环

   - 用途：与 `while` 循环类似，但它至少会执行一次循环体，即使条件最初就不满足。
   - 结构：先执行代码块，再判断条件。
   - 用法：适用于需要保证至少执行一次代码的情况。

4. `for in` 循环

   - 用途：用于遍历对象的属性或数组的索引。
   - 结构：遍历对象属性或数组的键（索引）。
   - 缺点：不适合遍历数组，因为它可能遍历到非数组的属性。

5. `for of` 循环
   - 用途：用于遍历数组或其他可迭代对象的值。
   - 结构：直接获取数组元素，避免了数组索引的干扰。
   - 优点：语法简单且高效，避免了 `for in` 的缺陷。

**代码示例**

1. `for` 循环的基本用法

   ```js
   for (let i = 0; i < 5; i++) {
     console.log(i); // 输出 0, 1, 2, 3, 4
   }
   ```

   - 用途：当已知循环次数时，`for` 循环是最直接的选择。适用于索引值已知并且递增（或递减）的情况。

2. `while` 循环的基本用法

   ```js
   let i = 0;
   while (i < 5) {
     console.log(i); // 输出 0, 1, 2, 3, 4
     i++;
   }
   ```

   - 用途：当循环的条件是动态的，或者循环次数在执行之前未知时，使用 `while` 循环。适用于根据条件持续执行的场景。

3. `do while` 循环的基本用法

   ```js
   let i = 0;
   do {
     console.log(i); // 输出 0, 1, 2, 3, 4
     i++;
   } while (i < 5);
   ```

   - 用途：与 `while` 循环类似，区别在于无论条件是否满足，`do while` 至少执行一次循环体。适合那些需要先执行后判断的场景。

4. `for in` 循环的基本用法（遍历对象）

   ```js
   const obj = { a: 1, b: 2, c: 3 };
   for (let key in obj) {
     console.log(key, obj[key]); // 输出 a 1, b 2, c 3
   }
   ```

   - 用途：`for in` 循环用于遍历对象的所有可枚举属性。由于它遍历的是对象的键，因此它更适用于对象的遍历。

5. `for of` 循环的基本用法（遍历数组）

   ```js
   const arr = [10, 20, 30, 40, 50];
   for (let value of arr) {
     console.log(value); // 输出 10, 20, 30, 40, 50
   }
   ```

   - 用途：`for of` 循环用于遍历数组或其他可迭代对象的值，避免了 `for in` 的缺点。它直接访问数组的元素，简洁且高效。

## Ex1: 返回两个数中的最大值

> **要求**：编写一个函数，接受两个数字作为参数，并返回这两个数字中的最大值。测试该函数，确保其能正确处理不同的输入。

**解法**：

1. Step1：定义函数 `max`，接受两个参数 `a` 和 `b`，使用 `if` 语句比较两者的大小。
2. Step2：优化代码，去除 `else`，直接返回较大的值。
3. Step3：进一步优化，使用条件运算符简化代码，使其更加简洁。

**代码**

```js
// Step 1: 使用 if 语句比较 a 和 b 的大小
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// Step 2: 优化，去掉 else
// function max(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }

// Step 3: 使用条件运算符进一步优化
function max(a, b) {
  return a > b ? a : b;
}

// 测试函数
console.log(max(5, 10)); // 输出 10
console.log(max(20, 10)); // 输出 20
console.log(max(10, 10)); // 输出 10
```

## Ex2 判断图片是否为横向图片

> **要求**：编写一个函数 `isLandscape`，该函数接受两个参数：图片的宽度和高度。如果图片是横向的（即宽度大于高度），返回 `true`；否则，返回 `false`。

**解法**：

1. Step1：使用 `if` 和 `else` 语句，判断宽度是否大于高度，如果是，返回 `true`，否则返回 `false`。
2. Step2：优化代码，使用条件运算符（`? :`），简化 `if` 和 `else` 的逻辑。
3. Step3：进一步优化，直接返回条件表达式的值，而不需要显式返回 `true` 或 `false`。

**代码**

```js
// Step 1: 使用 if 和 else 语句判断
// function isLandscape(width, height) {
//   if (width > height) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Step 2: 使用条件运算符优化
// function isLandscape(width, height) {
//   return width > height ? true : false;
// }

// Step 3: 进一步优化，直接返回条件表达式
function isLandscape(width, height) {
  return width > height; // 直接返回判断结果
}

// 测试函数
console.log(isLandscape(1920, 1080)); // 输出 true (横向图片)
console.log(isLandscape(1080, 1920)); // 输出 false (纵向图片)
```

## Ex3 实现 FizzBuzz 算法

> **要求**：编写一个函数 `fizzBuzz`，接受一个输入并返回一个字符串：
>
> - 如果输入是数字且能被 3 整除，返回 "Fizz"。
> - 如果输入是数字且能被 5 整除，返回 "Buzz"。
> - 如果输入既能被 3 又能被 5 整除，返回 "FizzBuzz"。
> - 如果输入不是数字，返回 "Not a number"。

**代码**

```javascript
function fizzBuzz(input) {
  // Step 1: 检查是否为数字
  if (typeof input !== "number") {
    return "Not a number";
  }

  // Step 2: 检查是否能被 3 和 5 整除
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }

  // Step 3: 检查是否能被 3 整除
  if (input % 3 === 0) {
    return "Fizz";
  }

  // Step 4: 检查是否能被 5 整除
  if (input % 5 === 0) {
    return "Buzz";
  }

  // 如果都不能被 3 或 5 整除，返回原始数字
  return input;
}

// 测试函数
console.log(fizzBuzz(15)); // 输出 'FizzBuzz' (能被 3 和 5 整除)
console.log(fizzBuzz(9)); // 输出 'Fizz' (能被 3 整除)
console.log(fizzBuzz(10)); // 输出 'Buzz' (能被 5 整除)
console.log(fizzBuzz(7)); // 输出 7 (既不能被 3 也不能被 5 整除)
console.log(fizzBuzz("a")); // 输出 'Not a number' (不是数字)
```

## Ex4 检查车速并计算扣分

> **要求**：实现一个 `checkSpeed` 函数，接受一个车速参数并根据车速判断是否超速：
>
> - 如果车速低于或等于限速，输出 "OK"。
> - 如果车速超过限速，根据超速的情况计算罚分（每超速 5 公里，罚 1 分）。
> - 如果罚分超过 12 分，输出 "License Suspended"。
> - 否则，输出当前罚分。

**解法**：

1. Step1：首先，定义一个常量 `speedLimit` 代表限速，以避免代码中的“魔法数字”。
2. Step2：检查车速是否小于等于限速，若是则返回 "OK"。
3. Step3：如果车速超过限速，计算超速的公里数，并根据每 5 公里罚 1 分的规则计算罚分。
4. Step4：如果罚分超过 12 分，则输出 "License Suspended"；否则，输出当前罚分。

**代码**

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
checkSpeed(130); // 输出：Points: 12
checkSpeed(135); // 输出：License suspended
```

## Ex5 显示奇偶数

> **要求**：编写一个函数 `showNumbers`，接受一个参数 `limit`，从 0 开始依次打印每个数字。如果数字是偶数，显示 `even`，否则显示 `odd`。

**解法**：

1. Step1：使用 `for` 循环从 0 遍历到 `limit`，检查每个数字是否为偶数。
2. Step2：用条件运算符判断当前数字是 `even` 还是 `odd`，然后与数字一起打印。

**代码**

```javascript
// 方法 1：直接用 if...else 判断
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//       console.log(i, "even");
//     } else {
//       console.log(i, "odd");
//     }
//   }
// }

// 方法 2：使用条件运算符简化
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "even" : "odd";
    console.log(i, message);
  }
}

// 测试函数
showNumbers(5);
// 输出:
// 0 even
// 1 odd
// 2 even
// 3 odd
// 4 even
// 5 odd
```

## Ex6 统计数组中的 Truthy 值

> **要求**：实现一个函数 `countTruthy`，接受一个数组参数并返回数组中 truthy 值的数量。

**解法**：

1. Step1：初始化一个计数器 `count`，用来记录数组中 truthy 值的数量。
2. Step2：使用 `for...of` 循环遍历数组，对每个元素判断是否为 truthy。如果是，则增加计数器。
3. Step3：返回最终计数器的值。

**代码**

```javascript
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

// 测试函数
const movie = {
  title: "Inception",
  releaseYear: 2010,
  director: "Christopher Nolan",
  rating: 8.8,
};

showProperties(movie);
// 输出:
// title Inception
// director Christopher Nolan
```

## Ex7 显示对象字符串属性

> **要求**：实现一个函数 `showProperties`，接受一个对象参数，并打印所有值为字符串类型的属性及其值。

**解法**：

1. Step1：使用 `for...in` 遍历对象的所有属性。
2. Step2：用 `typeof` 检查属性值是否为字符串类型。如果是，则打印属性名和对应值。

**代码**

```javascript
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

// 测试函数
const movie = {
  title: "Inception",
  releaseYear: 2010,
  director: "Christopher Nolan",
  rating: 8.8,
};

showProperties(movie);
// 输出:
// title Inception
// director Christopher Nolan
```

## Ex8 求指定范围内的倍数之和

> **要求**：实现一个函数 `sum`，接受一个参数 `limit`，返回范围 `0` 到 `limit` 中所有是 `3` 或 `5` 倍数的数字之和。

**解法**：

1. Step1：初始化一个变量 `sum` 用于累加符合条件的数字。
2. Step2：使用 `for` 循环遍历从 `0` 到 `limit` 的所有数字，判断数字是否是 `3` 或 `5` 的倍数。
3. Step3：如果是倍数，将其加到 `sum` 中。
4. Step4：返回最终的 `sum` 值。

**代码**

```javascript
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// 测试函数
console.log(sum(10)); // 输出: 33 (3 + 5 + 6 + 9 + 10)
```

## Ex9 计算学生的成绩

> **要求**：实现一个函数 `calculateGrade`，接受一个数组 `marks`，计算其平均分并返回对应的等级（A-F）。根据以下标准确定等级：
>
> - 平均分 ≥ 90：A
> - 平均分 ≥ 80：B
> - 平均分 ≥ 70：C
> - 平均分 ≥ 60：D
> - 平均分 < 60：F

解法：

1. Step1：首先计算成绩的平均分。将所有成绩加起来，并除以成绩的个数。
2. Step2：根据平均分映射对应的成绩等级。
3. Step3：为了保持代码简洁和符合单一职责原则，将计算平均分和映射等级的功能分别提取成单独的函数。

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

## Ex10 打印星号图案

> **要求**：编写一个函数 `showStars`，接受一个参数 `rows`，表示要打印的行数。每一行的星号数量与行数相同，例如，第一行一个星号，第二行两个星号，以此类推，直到第 `rows` 行为 `rows` 个星号。

**解法**：

1. Step1：使用外层 `for` 循环遍历行数 `rows`，每次迭代代表一行。
2. Step2：在每一行中，使用内层 `for` 循环控制打印星号的数量，星号数量等于当前的行数。
3. Step3：通过 `console.log` 打印每行的星号图案。

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

## Ex11 打印质数

> **要求**：实现两个函数：
>
> 1. `isPrime(number)`：判断一个数字是否是素数。如果是素数，返回 `true`，否则返回 `false`。
> 2. `showPrimes(limit)`：打印从 `2` 到指定 `limit` 范围内的所有素数。

**解法**：

1. Step1：使用 `for` 循环遍历从 2 到 `limit` 的每个数字。
2. Step2：对每个数字，使用另一个 `for` 循环检查是否存在因子（除了 1 和该数本身），如果找到因子则说明该数不是质数。
3. Step3：如果该数没有任何因子，则为质数，打印输出。

```javascript
// 判断一个数是否是素数
function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false; // 如果找到因数，返回 false
  }
  return true; // 没有找到因数，返回 true
}

// 打印范围内的所有素数
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number); // 如果是素数，打印该数
  }
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

# 对象基础

## JS 面向对象编程

> **简述**：对象是 JavaScript 中用于将相关属性和方法封装在一起的核心概念，通常用于组织和操作具有相似特性的实体。OOP 是一种将程序建模为对象集合并通过相互协作实现功能的编程范式。

**知识树**

1. 对象的基本概念
   - 对象是键值对（key-value pairs）的集合，用于描述实体的特性和行为。
   - 属性（Property）：描述对象的状态，可以是基本类型、对象、数组或函数。
   - 方法（Method）：对象中的函数，用于描述对象的行为。
     - 方法依附于对象。
     - 函数独立于对象存在。
2. 创建对象的方式
   - 对象字面量（Object Literal）：最常见的方式，适用于简单的对象。
   - 工厂函数（Factory Function）：通过函数创建对象，以实现复用。
   - 构造函数（Constructor Function）：使用 `new` 操作符创建对象，适用于更复杂的对象。
   - **类 Class（Es6 引入）**：使用 `class` 关键字创建对象和类，提供更清晰的语法和继承机制。（将在后续 ES6 章节学习）
3. 对象的使用
   - 使用点语法（`.`）或方括号语法（`[]`）访问对象的属性和方法。
   - 对象的方法操作其属性，实现行为和状态的结合。
4. 面向对象编程的核心思想
   - 封装：将相关数据（属性）和行为（方法）组织在一个对象中。
   - 抽象：通过对象模型化现实世界的实体。
   - 继承：允许对象基于其他对象扩展功能（将在后续学习）。
   - 多态：对象可以以不同形式表现（将在后续学习）。

**代码示例**

1. 对象基础

   ```js
   // 对象字面量方式创建对象
   const circle = {
     radius: 1, // 属性
     location: { x: 1, y: 1 }, // 嵌套对象
     isVisible: true, // 布尔值
     draw: function () {
       // 方法
       console.log("draw");
     },
   };
   // 访问属性和方法
   console.log(circle.radius); // 输出: 1
   console.log(circle.location.x); // 输出: 1
   circle.draw(); // 输出: draw
   ```

## 工厂函数

> **简述**：工厂函数是一种创建对象的简洁方式，避免重复代码，将对象的属性和方法集中定义在一个地方，从而实现高效的复用和维护。

**知识树**

1. 对象创建问题
   - 使用对象字面量创建多个对象会导致代码重复，特别是当对象中包含逻辑（如方法）时。
   - 代码重复使得维护困难，一处修改需要在多个地方同步更改。
2. 工厂函数的概念
   - 工厂函数是一个函数，用于动态创建对象并返回。
   - 通过参数化工厂函数，可以为每个对象设置独立的属性值。
3. 工厂函数的优化
   - 属性简化：如果属性名和变量名相同，可以省略值，直接写属性名。
   - 方法简化：使用 ES6 简写方法定义。传统的`methodName: function () {}`，可以简写为`methodName() {}`。
4. 工厂函数的优势
   - 复用性：逻辑集中定义，减少代码重复。
   - 可维护性：修复或更新逻辑只需修改工厂函数。

**代码示例**

1. 工厂函数

   ```js
   function createCircle(radius) {
     return {
       radius,
       draw() {
         console.log("draw");
       },
     };
   }
   // 创建对象
   const circle1 = createCircle(1);
   const circle2 = createCircle(2);
   // 访问属性和方法
   console.log(circle1.radius); // 输出: 1
   circle1.draw(); // 输出: draw
   console.log(circle2.radius); // 输出: 2
   circle2.draw(); // 输出: draw
   ```

   - `return`：由于代码结果简单，这里省略了`const`定义对象，再由`return`返回对象的步骤，直接在`return`语句中构建对象
   - `radius` 简写：当属性名和变量名一致时，可直接写 `radius`。
   - 方法 `draw` 的简写：直接写 `draw() {}`，更简洁。

## 构造函数

> **简述**：构造函数是一种创建对象的模式，通过 `new` 操作符动态创建对象。相比工厂函数，构造函数更贴近面向对象编程语言（如 Java、C#）的对象创建方式。

**知识树**

1. 构造函数的命名规范
   - 使用 Pascal 命名法：所有单词首字母大写（如 `Circle`）。
   - 与工厂函数的 Camel 命名法（首单词小写，其余单词首字母大写）区别开来。
2. 构造函数的定义与使用
   - 使用 `this` 关键字初始化属性和方法。
   - 通过 `new` 操作符创建对象：
     - 自动创建一个空对象。
     - 将 `this` 指向该对象。
     - 返回这个新对象。
3. 构造函数的关键特点
   - 没有显式 `return` 语句。
   - 属性和方法通过 `this` 绑定到新创建的对象上。
   - 更贴近传统 OOP 编程风格。
4. 工厂函数与构造函数的对比
   - 工厂函数返回对象；构造函数使用 `this` 初始化属性。
   - 命名规则不同：工厂函数使用 Camel 命名法，构造函数使用 Pascal 命名法。
   - 使用场景根据开发者背景和团队约定而定，两者功能等效。

**代码示例**

1. 构造函数

   ```js
   function Circle(radius) {
     // 使用 `this` 初始化属性
     this.radius = radius;
     // 添加方法
     this.draw = function () {
       console.log("draw");
     };
   }
   // 使用 `new` 创建对象
   const circle1 = new Circle(1);
   const circle2 = new Circle(2);
   // 访问属性和方法
   console.log(circle1.radius); // 输出: 1
   circle1.draw(); // 输出: draw
   console.log(circle2.radius); // 输出: 2
   circle2.draw(); // 输出: draw
   ```

## 对象动态特性

> **简述**：在 JavaScript 中，对象是动态的。这意味着对象创建后可以随时添加或删除属性和方法。即使使用 `const` 声明对象，也只限制对象引用不可更改，而不限制对象内容的修改。

**知识树**

1. 对象的动态特性
   - 对象可以在运行时添加或删除属性和方法。
   - 对象的成员包括属性（存储数据）和方法（实现行为）。
2. `const` 声明的限制
   - `const` 仅限制对象引用不可更改。
   - 对象内部的属性和方法仍然可以被修改或删除。

**代码示例**

1. 动态添加属性和方法

   ```js
   const circle = {
     radius: 5, // 初始属性
   };

   // 动态添加属性
   circle.color = "yellow";

   // 动态添加方法
   circle.draw = function () {
     console.log("Drawing a circle");
   };

   console.log(circle);
   // 输出：{ radius: 5, color: 'yellow', draw: [Function (anonymous)] }
   ```

2. 动态删除属性和方法

   ```js
   // 删除属性
   delete circle.color;

   // 删除方法
   delete circle.draw;

   console.log(circle);
   // 输出：{ radius: 5 }
   ```

3. `const` 声明的行为

```js
const circle = {
  radius: 5,
};

circle.radius = 10; // 可以修改属性
console.log(circle.radius); // 输出：10

// circle = {}; // 错误：不能重新分配对象引用
// Uncaught TypeError: Assignment to constant variable.
```

## `constructor` 属性

> **简述**：JavaScript 中每个对象都有一个 `constructor` 属性，它引用用于创建该对象的构造函数。通过 `constructor` 属性，我们可以查看对象是由哪个构造函数创建的。

**知识树**

1. `constructor` 的定义
   - 所有对象都有一个 `constructor` 属性。
   - 它指向创建该对象的构造函数。
2. 对象的创建方式及其构造函数
   - 对象字面量：由内置的 `Object` 构造函数创建。
   - 自定义构造函数：通过 `new` 操作符和构造函数显式创建。
   - 内置类型构造函数：
     - 字符串：`String`
     - 数字：`Number`
     - 布尔值：`Boolean`
3. 推荐的创建方式
   - 使用字面量语法（如 `{}`、`""`、`[]`）比直接调用构造函数更简洁、更直观。

**代码示例**

1. 使用 `constructor` 查看构造函数

   ```js
   // 使用自定义构造函数
   function createCircle(radius) {
     return {
       radius,
       draw() {
         console.log("draw");
       },
     };
   }
   const circle = new createCircle(1);

   // 使用对象字面量
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("draw");
     };
   }

   const another = new Circle(1);
   console.log(circle.constructor); // 输出: [Function: Object]
   console.log(another.constructor); // 输出: [Function: Circle]
   ```

2. 内置构造函数的行为

   ```js
   // 使用内置构造函数
   const str = new String("Hello");
   console.log(str.constructor); // 输出: [Function: String]

   // 使用字符串字面量
   const strLiteral = "Hello";
   console.log(strLiteral.constructor); // 输出: [Function: String]
   ```

3. 字面量 vs 构造函数

   ```js
   // 数组
   const arrLiteral = [];
   const arrConstructor = new Array();
   console.log(arrLiteral.constructor); // 输出: [Function: Array]
   console.log(arrConstructor.constructor); // 输出: [Function: Array]
   // 数字
   const numLiteral = 42;
   const numConstructor = new Number(42);
   console.log(numLiteral.constructor); // 输出: [Function: Number]
   console.log(numConstructor.constructor); // 输出: [Function: Number]
   ```

## 函数是 对象

> **简述**：在 JavaScript 中，函数本质上是对象。函数不仅可以被调用，还拥有一些内建属性和方法，允许更灵活和动态的操作。

**知识树**

1. 函数的本质

   - 函数是 `Function` 构造函数创建的对象。
   - 函数可以有属性（如 `name`, `length`）和方法（如 `call`, `apply`, `bind`）。

2. 函数的属性

   - `name`：函数的名称。
   - `length`：函数参数的个数。
   - `constructor`：引用创建函数的 `Function` 构造函数。

3. 函数的动态构建

   - 可以通过 `Function` 构造函数动态创建函数。

4. 函数的方法（后续函数章节详细说明）

   - `call()`：调用函数，第一个参数明确指定 `this` 和参数，后续参数传入`this`。
   - `apply()`：与 `call()` 类似，但以数组形式传递参数。
   - `bind()`：返回一个绑定了特定 `this` 值的新函数。

   - _`call()`、`apply()`这些方法一般不直接作用在构造函数上，因为它们的本意是执行一个函数，而构造函数的场景需要结合 `new` 操作符使用。如果直接对构造函数使用 `call()` 或 `apply()`，可能会导致一些问题，例如 `this` 指向问题，或者实例无法继承构造函数的原型方法。`bind()` 在构造函数上的使用也比较少_

**代码示例**

1. 函数的属性

   ```js
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("Draw a circle");
     };
   }

   console.log(Circle.name); // 输出: "Circle"
   console.log(Circle.length); // 输出: 1 (参数个数)
   console.log(Circle.constructor); // 输出: [Function: Function]
   ```

2. 使用 `Function` 构造函数

   ```js
   const Circle = new Function(
     "radius",
     `
     this.radius = radius;
     this.draw = function () {
       console.log("Draw a circle");
     };
   `
   );

   const circle = new Circle(5);
   circle.draw(); // 输出: "Draw a circle"
   ```

3. `call` 、 `apply` 和 `bind` 方法

   ```js
   function greet(greeting, punctuation) {
     console.log(`${greeting}, ${this.name}${punctuation}`);
   }

   const person = { name: "John" };

   // 使用 call
   greet.call(person, "Hello", "!"); // 输出: "Hello, John!"

   // 使用 apply
   greet.apply(person, ["Hi", "."]); // 输出: "Hi, John."

   // 使用 bind
   const sayHi = greet.bind(person, "Hello", "!");
   sayHi(); // 输出: "Hello, John!"
   ```

4. 补充作用于构造函数的情况

   ```js
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("draw");
     };
     return this; // 若没有显式返回this，使用call/apply方法将返回underfined
   }
   const circle1 = Circle.call({}, 1);
   console.log("circle1:", circle1); // 输出 circle1: {radius: 1, draw: ƒ}
   const circle2 = Circle.apply({}, [1]);
   console.log("circle2:", circle2); // 输出 circle1: {radius: 1, draw: ƒ}
   const circle3 = Circle.bind({}, 1);
   console.log("circle3:", circle3);
   // 输出
   // circle3: ƒ Circle(radius) {
   //   this.radius = radius;
   //   this.draw = function () {
   //     console.log("draw");
   //   };
   //   return this; // 若没有显式返回this，使用call/apply方法将返回underfined
   // }
   ```

## 值类型与引用类型

> **简述**：JavaScript 的数据分为两大类：**值类型**（primitives）和**引用类型**（reference types）。它们的存储方式和行为存在根本区别。

**知识树**

1. 值类型（Primitives）
   - 包括：`Number`、`String`、`Boolean`、`Symbol`、`undefined` 和 `null`。
   - 特性：
     - 直接存储在变量中。
     - 通过 值拷贝 进行赋值，拷贝的是实际的值。
     - 每个变量独立存储其值，修改一个变量不会影响另一个。
2. 引用类型（Reference Types）
   - 包括：`Object`、`Array`、`Function`。
   - 特性：
     - 变量存储的是对象的内存地址（引用）。
     - 通过 引用拷贝 进行赋值，多个变量共享同一个内存地址。
     - 修改对象属性时，所有引用都会反映变化。
3. 函数中的行为
   - 传递值类型时，会复制值本身，函数内部的更改不会影响外部变量。
   - 传递引用类型时，会复制内存地址，函数内部修改对象会影响外部对象。

**代码示例**

1. 值类型的拷贝

   ```js
   let x = 10;
   let y = x; // 值拷贝

   y = 20;

   console.log(x); // 输出: 10
   console.log(y); // 输出: 20
   ```

2. 引用类型的拷贝

   ```js
   let x = { value: 10 };
   let y = x; // 引用拷贝

   y.value = 20;

   console.log(x.value); // 输出: 20
   console.log(y.value); // 输出: 20
   ```

3. 函数中的值类型

   ```js
   function increase(number) {
     number++;
   }

   let num = 10;
   increase(num);

   console.log(num); // 输出: 10
   ```

4. 函数中的引用类型

   ```js
   function increase(obj) {
     obj.value++;
   }
   let obj = { value: 10 };
   increase(obj);
   console.log(obj.value); // 输出: 11
   ```

## 枚举对象的属性

> **简述**：JavaScript 中有几种遍历对象的属性和方法的方式，包括 `for...in` 循环、`for...of` 循环结合 `Object.keys()` 和 `Object.entries()` 方法，以及使用 `in` 操作符检查对象是否包含某个属性。这些方法可以帮助开发者有效地访问和操作对象的各个部分。

**知识树**

1. `for...in` 循环
   - 用于遍历对象的所有可枚举属性（包括方法）。
   - 循环时返回的是对象的 键（key）。
2. `for...of` 循环
   - 仅用于遍历 可迭代对象（如数组、字符串、Map 等），不能直接用于对象。
   - 结合 `Object.keys()` 或 `Object.entries()` 可用于对象。
3. `Object.keys()` 方法
   - 返回对象的所有键，以字符串数组的形式。
   - 可以与 `for...of` 循环结合使用。
4. `Object.entries()` 方法
   - 返回对象的所有属性的 键值对，每对以数组形式存储。
   - 结合 `for...of` 循环，可以遍历对象的键值对。
5. `in` 操作符
   - 检查对象是否具有某个属性或方法。

**代码示例**

1. 使用 `for...in` 遍历对象的属性

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 遍历对象的属性
   for (let key in circle) {
     console.log(key); // 输出: radius, draw
     console.log(circle[key]); // 输出: 10, function draw()
   }
   ```

2. 使用 `for...of` 与 `Object.keys()` 结合

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 Object.keys() 获取所有键并与 for...of 循环结合
   for (let key of Object.keys(circle)) {
     console.log(key); // 输出: radius, draw
   }
   ```

3. 使用 `Object.entries()` 遍历对象的键值对

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 Object.entries() 获取所有键值对并遍历
   for (let [key, value] of Object.entries(circle)) {
     console.log(key, value); // 输出: radius 10, draw function draw()
   }
   ```

4. 使用 `in` 操作符检查属性是否存在

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };
   console.log("radius" in circle); // 输出: true
   console.log("color" in circle); // 输出: false
   ```

## 克隆和合并对象

> **简述**：JavaScript 中有多种方式克隆对象或合并多个对象，包括传统的 `for...in` 循环、`Object.assign()` 方法，以及更简洁的扩展运算符（`...`）。

**知识树**

1. 克隆对象的方法
   - `for...in` 循环
   - `Object.assign()` 方法
   - 扩展运算符（Spread Operator）
2. `Object.assign()` 方法
   - 用于将源对象的所有属性复制到目标对象。
   - 可用于克隆单个对象，或者将多个对象合并到一个目标对象中。
3. 扩展运算符（Spread Operator）
   - 用于快速克隆对象或合并对象。
   - 通过将对象的所有属性展开到新对象中，实现浅拷贝。

**代码示例**

1. 使用 `for...in` 循环克隆对象

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 for...in 循环复制对象属性
   let another = {};
   for (let key in circle) {
     another[key] = circle[key];
   }

   console.log(another); // 输出: { radius: 10, draw: function }
   ```

2. 使用 `Object.assign()` 克隆对象

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 Object.assign() 克隆对象
   let another = Object.assign({}, circle);

   console.log(another); // 输出: { radius: 10, draw: function }
   ```

3. 使用扩展运算符（Spread Operator）克隆对象

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用扩展运算符（Spread Operator）克隆对象
   let another = { ...circle };

   console.log(another); // 输出: { radius: 10, draw: function }
   ```

4. 合并多个对象

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };
   let color = {
     color: "yellow",
   };
   // 使用 Object.assign() 合并对象
   let merged1 = Object.assign({}, circle, color);
   console.log(merged1); // 输出: { radius: 10, draw: function, color: 'yellow' }
   // 使用扩展运算符合并对象
   let merged2 = { ...circle, ...color };
   console.log(merged2); // 输出: { radius: 10, draw: function, color: 'yellow' }
   ```

## 垃圾回收

> **简述**：JavaScript 的内存管理与垃圾回收机制与 C/C++ 等低级语言不同，开发者无需手动管理内存分配和回收。JavaScript 自动处理内存，垃圾回收器会定期查找不再使用的变量并释放其占用的内存。

**知识树**

1. 内存管理
   - 在 JavaScript 中，内存管理由引擎自动处理，开发者无需手动分配或释放内存。
2. 垃圾回收
   - 自动回收不再使用的变量和对象的内存。
   - 垃圾回收器根据一些复杂算法在后台运行，判断哪些变量不再使用，并释放它们的内存。
3. 垃圾回收的工作原理
   - 通过引用计数和标记清除等算法确定哪些对象可以被回收。
4. JavaScript 内存分配与释放
   - JavaScript 中的对象、数组、函数等都是动态分配内存的，当这些数据不再被引用时，垃圾回收器会回收它们的内存。

**代码示例**

1. JavaScript 的内存分配

   ```js
   let obj = { name: "JavaScript" }; // 创建一个对象，内存自动分配
   let arr = [1, 2, 3]; // 创建一个数组，内存自动分配
   ```

   - 在 JavaScript 中，像对象和数组这样的数据结构的内存会在创建时自动分配，开发者无需关注内存的具体分配过程。

2. 垃圾回收

   ```js
   let obj = { name: "JavaScript" };
   obj = null; // obj 不再引用原来的对象，垃圾回收器会回收该对象的内存
   ```

   - 当对象和数组不再被引用时，它们的内存会被垃圾回收器自动回收。由于没有其他变量引用该对象，垃圾回收器会自动清除 `obj` 所占用的内存。

## `Math` 对象

> **简述**：JavaScript 提供了一个内置的 **`Math`** 对象，它包含了许多用于数学计算的常数和函数。可以用来执行数学运算，比如求最大值、最小值、生成随机数等。

**知识树**

1. Math 对象简介
   - 内置的数学工具类
   - 提供常见的数学函数和常量
2. 常用属性
   - `Math.PI`: 圆周率常数。
   - 其他数学常量。
3. 常用方法
   - `Math.abs()`: 求绝对值。
   - `Math.random()`: 生成随机数。
   - `Math.max()`: 返回最大值。
   - `Math.min()`: 返回最小值。
4. 应用示例
   - 使用 `Math.random()` 生成区间随机数。
   - 使用 `Math.max()` 和 `Math.min()` 查找最大/最小值。

**代码示例**

1. 生成随机数

   ```js
   console.log(Math.random()); // 生成一个 0 到 1 之间的随机数
   ```

   - `Math.random()` 返回一个 0 到 1 之间的随机小数，每次调用时返回的值不同。

2. 生成区间内的随机数

   ```js
   function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   console.log(getRandomInt(1, 100)); // 生成一个 1 到 100 之间的随机整数
   ```

   - `Math.random()` 生成 0 到 1 之间的数，再通过 `Math.floor()` 使其变成整数，并缩放到你所需的区间。

3. 求最大值和最小值

   ```js
   let numbers = [10, 5, 100, 25];
   console.log(Math.max(...numbers)); // 100
   console.log(Math.min(...numbers)); // 5
   ```

   - `Math.max()` 和 `Math.min()` 可以接受多个参数，返回最大或最小的值。通过展开运算符 `...` 可以直接传递数组中的多个元素。

## `String`对象

> **简述**：JavaScript 中的 **`String`** 对象用于处理文本数据。虽然字符串是原始类型，但 JavaScript 会自动将其包装为对象，允许使用字符串对象的属性和方法。String 对象提供了很多有用的方法，比如查找字符、替换内容、转换大小写等。

**知识树**

1. String 原始类型与对象
   - 字符串可以是原始类型（primitive）或字符串对象（通过 `new String()` 创建）。
   - `typeof` 操作符可以区分这两者：原始字符串返回 `'string'`，字符串对象返回 `'object'`。
2. 常用属性
   - `length`: 获取字符串的字符数。
3. 常用方法
   - `includes()`: 检查字符串是否包含某个子字符串。
   - `startsWith()`: 检查字符串是否以指定子字符串开头。
   - `endsWith()`: 检查字符串是否以指定子字符串结尾。
   - `indexOf()`: 查找子字符串在字符串中的位置。
   - `replace()`: 替换字符串中的内容。
   - `toUpperCase()`: 将字符串转换为大写。
   - `toLowerCase()`: 将字符串转换为小写。
   - `trim()`: 移除字符串两端的空格。
   - `split()`: 按照指定字符将字符串分割成数组。
4. 转义字符
   - `\'`、`\"`、`\n`、`\t`等，处理特殊字符和换行符。
5. 模板字面量（Template Literals）：
   - 使用反引号（```）创建字符串，可以嵌入表达式，支持多行字符串。

**代码示例**

1. 字符串长度

   ```js
   const message = "Hello, World!";
   console.log(message.length); // 输出 13
   ```

   - `length` 返回字符串的字符数。

2. 查找子字符串

   ```js
   const message = "This is my first message.";
   console.log(message.includes("my")); // true
   console.log(message.includes("hello")); // false
   ```

   - `includes()` 检查字符串中是否包含某个子字符串，返回布尔值。

3. 判断字符串开始和结束

   ```js
   const message = "Hello, World!";
   console.log(message.startsWith("Hello")); // true
   console.log(message.endsWith("!")); // true
   ```

   - `startsWith()` 检查字符串是否以指定子字符串开始，`endsWith()` 检查是否以指定子字符串结束。

4. 查找子字符串的索引

   ```js
   const message = "This is my first message.";
   console.log(message.indexOf("my")); // 输出 8
   ```

   - `indexOf()` 返回子字符串第一次出现的位置，如果没有找到则返回 `-1`。

5. 字符串替换

   ```js
   const message = "This is my first message.";
   const newMessage = message.replace("first", "second");
   console.log(newMessage); // "This is my second message."
   ```

   - `replace()` 用于替换字符串中的内容。注意，它返回的是新字符串，不会修改原字符串。

6. 大小写转换

   ```js
   const message = "This is my first message.";
   console.log(message.toUpperCase()); // "THIS IS MY FIRST MESSAGE."
   console.log(message.toLowerCase()); // "this is my first message."
   ```

   - `toUpperCase()` 和 `toLowerCase()` 将字符串转换为大写或小写。

7. 去除空格

   ```js
   const message = "  Hello, World!  ";
   console.log(message.trim()); // "Hello, World!"
   ```

   - `trim()` 移除字符串两端的空格，`trimLeft()` 和 `trimRight()` 分别移除左侧和右侧的空格。

8. 字符串分割

   ```js
   const message = "This is my first message.";
   const words = message.split(" ");
   console.log(words); // ["This", "is", "my", "first", "message."]
   ```

   - `split()` 根据指定的分隔符将字符串拆分成数组。

9. 转义字符

   ```js
   const message = "It's a great day!";
   console.log(message); // "It's a great day!"
   ```

   - 使用 `\'` 作为转义字符来插入引号，`\n` 插入换行符等。

10. 模板字面量

    ```js
    const name = "John";
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // "Hello, John!"
    ```

    - 使用反引号创建字符串，允许嵌入变量或表达式。

## 模板字面量

> **简述**：模板字面量是 JavaScript 中一种更加灵活和简洁的字符串表示方式。与传统的字符串字面量（使用单引号或双引号）相比，模板字面量使用反引号（`` `）定义，支持多行字符串和嵌入表达式，使得字符串的操作更为直观和易读。

**知识树**

1. 定义模板字面量
   - 使用反引号（`` `）包围字符串，而不是使用单引号或双引号。
   - 支持多行字符串，避免了使用换行符（`\n`）来手动拼接多行。
2. 内嵌表达式
   - 可以在模板字面量中嵌入变量和表达式，通过 `${}` 语法将其嵌入字符串中。
   - 支持任何可以产生值的表达式，比如变量、运算、函数调用等。
3. 拼接字符串
   - 通过模板字面量，可以避免传统字符串拼接时使用 `+` 符号，使得代码更清晰易读。
   - 也不需要像传统字符串那样手动处理换行符或特殊字符。
4. 应用场景
   - 模板字面量非常适用于动态生成内容，如发送邮件、构建复杂的 HTML 或生成用户友好的消息。

**代码示例**

1. 多行字符串

   ```js
   const message = `This is my
   first message.`;
   console.log(message);
   // 输出：
   // This is my
   // first message.
   ```

   - 使用反引号直接书写多行字符串，不需要使用 `\n` 或字符串拼接。

2. 插入变量

   ```js
   const name = "John";
   const message = `Hi, ${name}!`;
   console.log(message); // 输出 "Hi, John!"
   ```

   - `${}` 用于插入变量或表达式，允许动态替换字符串中的部分内容。

3. 内嵌表达式

   ```js
   const num1 = 5;
   const num2 = 10;
   const message = `The sum of ${num1} and ${num2} is ${
     num1 + num2
   }.`;
   console.log(message); // 输出：The sum of 5 and 10 is 15.
   ```

   - 在 `${}` 内可以直接嵌入表达式，支持数学运算、函数调用等。

4. 使用函数调用表达式

   ```js
   function getGreeting(name) {
     return `你好, ${name}!`;
   }

   const message = `问候消息是: ${getGreeting("Alice")}`;
   console.log(message); // 输出: 问候消息是: 你好, Alice!
   ```

   - 使用函数调用表达式让字符串内容不仅仅是静态的变量插值，还可以通过函数逻辑进行动态生成。

5. 逃逸字符（Escaping Characters）

   ```js
   const message = `It's a great day!`;
   console.log(message); // 输出：It's a great day!
   ```

   - 使用模板字面量时，直接书写字符串中的特殊字符（如单引号或双引号），不需要使用 `\` 转义。

6. 处理多行格式

   ```js
   const name = "John";
   const message = `Hi ${name},
   
   Thank you for joining our mailing list.
   
   Regards,
   Your Company`;
   console.log(message);
   ```

   - 模板字面量使得构建复杂、格式化良好的字符串变得容易，尤其在处理动态内容（如邮件、消息模板）时，避免了手动拼接和冗余的字符。

## `Date` 对象

> **简述**：JavaScript 中的 `Date` 对象用于处理日期和时间。通过它，开发者可以创建日期对象、获取和设置日期/时间的各个部分，并且可以将日期格式化为不同的字符串表示形式。`Date` 对象在处理时间戳、日期差异、时间格式化等方面非常重要。

**知识树**

1. 创建 Date 对象的方式
   - 不带参数：获取当前日期和时间。
   - 传递字符串：解析特定日期时间格式的字符串。
   - 传递数字：指定自 1970 年 1 月 1 日以来的毫秒数。
   - 传递年月日等数值：通过指定年、月、日等创建日期对象。
2. 获取和设置日期
   - 使用 `.get` 和 `.set` 系列方法来获取和设置日期的各个部分（如年、月、日、小时等）。
3. 转换日期格式
   - `.toDateString()`：返回日期部分的字符串。
   - `.toTimeString()`：返回时间部分的字符串。
   - `.toISOString()`：返回符合 ISO 8601 标准的日期时间字符串，常用于与服务器的数据交互。

**代码示例**

1. 创建 Date 对象

   ```js
   // 当前时间
   const now = new Date();
   console.log("当前时间:", now); // 输出当前的日期和时间

   // 字符串格式日期
   const dateString = new Date("2023-12-31T23:59:59");
   console.log("字符串格式日期:", dateString); // 输出: Sun Dec 31 2023 23:59:59 GMT+0000 (Coordinated Universal Time)

   // 时间戳
   const timestampDate = new Date(1672531199000); // 时间戳（毫秒）
   console.log("时间戳日期:", timestampDate); // 输出: Sat Dec 31 2022 23:59:59 GMT+0000 (Coordinated Universal Time)

   // 传递年、月、日等数字
   const specificDate = new Date(2023, 0, 1); // 2023 年 1 月 1 日
   console.log("年、月、日指定日期:", specificDate); // 输出: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
   ```

2. 获取和设置日期的方法

   ```js
   // 获取年份、月份、日期
   console.log("当前年份:", now.getFullYear()); // 获取当前年份，例如 2023
   console.log("当前月份:", now.getMonth()); // 获取当前月份（从 0 开始的数字）
   console.log("当前日期:", now.getDate()); // 获取当前日期（1-31）

   // 设置日期
   now.setFullYear(2025);
   now.setMonth(6); // 设置为 7 月（注意月份从 0 开始）
   now.setDate(15); // 设置为 15 日
   console.log("修改后的日期:", now); // 输出修改后的日期
   ```

3. 日期格式化方法

   ```js
   // `toDateString()` 返回日期部分的字符串
   console.log("日期字符串:", now.toDateString()); // 输出例如: Thu Jan 01 2025
   // `toTimeString()` 返回时间部分的字符串
   console.log("时间字符串:", now.toTimeString()); // 输出例如: 00:00:00 GMT+0000 (Coordinated Universal Time)
   // `toISOString()` 返回符合 ISO 8601 标准的日期时间字符串
   console.log("ISO 格式日期:", now.toISOString()); // 输出例如: 2025-01-01T00:00:00.000Z
   ```

## Ex1: 显示地址对象的属性

> **要求**：创建一个 `address` 对象，包含 `street`、`city` 和 `zipCode` 三个属性。然后编写一个函数 `showAddress`，该函数接受一个地址对象并显示其所有属性及其对应的值。

**解法**：

1. Step1：创建一个 `address` 对象，包含 `street`、`city` 和 `zipCode` 三个属性，使用对象字面量语法初始化。
2. Step2：创建 `showAddress` 函数，使用 `for...in` 循环遍历 `address` 对象的每个属性，并通过 `console.log` 打印出属性名和对应的值。

**代码**

```js
// Step1: 创建地址对象
const address = {
  street: "123 Main St",
  city: "New York",
  zipCode: "10001",
};

// Step2: 创建函数，显示地址信息
function showAddress(address) {
  for (let key in address) {
    console.log(key + ": " + address[key]);
  }
}

// 调用函数显示地址
showAddress(address);
```

## Ex2: 初始化对象

> **要求**：分别使用工厂函数和构造函数初始化一个地址对象。

**解法**：

1. Step1：使用工厂函数 `createAddress` 来创建一个地址对象，返回一个包含 `street`、`city` 和 `zipCode` 属性的新对象。
2. Step2：使用构造函数 `Address` 来创建一个地址对象，利用 `this` 关键字将地址对象的属性赋值。

**代码**

```js
// Step1: 使用工厂函数创建地址对象
function createAddress(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode,
  };
}

// 使用工厂函数创建一个地址对象
const address1 = createAddress(
  "123 Main St",
  "New York",
  "10001"
);
console.log(address1);

// Step2: 使用构造函数创建地址对象
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// 使用构造函数创建一个地址对象
const address2 = new Address("123 Main St", "New York", "10001");
console.log(address2);
```

## Ex3: 比较对象的相等性

> **要求**：使用构造函数创建两个地址对象，并实现两个函数：`areEqual` 用于检查两个对象的属性是否相等，`areSame` 用于检查两个对象是否引用同一个内存地址。

**解法**：

1. Step1：创建两个地址对象，`address1` 和 `address2`，并用构造函数初始化它们。
2. Step2：实现 `areEqual` 函数，检查两个地址对象的所有属性是否相等；
3. 实现 `areSame` 函数，检查两个地址对象是否指向相同的内存地址。

**代码**

```js
// 构造函数定义
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// 创建两个地址对象
const address1 = new Address("123 Main St", "New York", "10001");
const address2 = new Address("123 Main St", "New York", "10001");

// 检查两个对象是否引用同一内存位置
function areSame(address1, address2) {
  return address1 === address2;
}

// 检查两个对象的属性是否相等
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// 测试 areSame 函数
console.log(areSame(address1, address2)); // false，因为它们是不同的对象
console.log(areSame(address1, address1)); // true，因为它们是同一个对象

// 测试 areEqual 函数
console.log(areEqual(address1, address2)); // true，因为它们的属性相同
```

## Ex4: 创建一个博客帖子对象

> **要求**：创建一个博客帖子对象，包含以下属性：`title`（标题）、`body`（内容）、`author`（作者）、`views`（查看次数）、`comments`（评论列表），其中每个评论包括`author`和`body`，最后还有一个布尔值属性`isLive`（是否发布）。

**解法**：

1. Step1：使用对象字面量语法创建博客帖子对象，给每个属性赋值。
2. Step2：确保`comments`属性是一个数组，包含若干评论对象，每个评论对象有`author`和`body`属性。
3. Step3：设置`isLive`属性为`true`或`false`，表示帖子是否已发布。
4. Step4：在控制台输出帖子对象，检查所有属性和嵌套的评论数组是否正确。

```js
// 创建博客帖子对象
const post = {
  title: "Learning JavaScript",
  body: "This is the body of the blog post. It explains JavaScript fundamentals.",
  author: "John Doe",
  views: 1500,
  comments: [
    { author: "Alice", body: "Great post, really helpful!" },
    {
      author: "Bob",
      body: "Thanks for the explanation, very clear.",
    },
  ],
  isLive: true,
};

// 输出博客帖子对象
console.log(post);
```

## Ex5: 创建一个草稿博客帖子

> **要求**：使用构造函数创建一个博客帖子对象，该对象的属性包括：`title`（标题）、`body`（内容）、`author`（作者）。同时，`views`（查看次数）默认为 `0`，`comments`（评论列表）默认为空数组，`isLive`（是否发布）默认为 `false`，表示帖子尚未发布。

**解法**：

1. Step1：创建一个名为 `Post` 的构造函数，该构造函数接收 `title`、`body` 和 `author` 参数。`views`、`comments`和 `isLive` 在构造时分别初始化为默认值。
2. Step2：在构造函数内部，使用 `this` 来初始化对象的各个属性，并确保默认值设置正确。
3. Step3：创建一个新帖子对象，传入必要的参数并验证初始化结果。

**代码**

```js
// 构造函数创建博客帖子对象
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; // 默认查看次数为 0
  this.comments = []; // 默认评论为空数组
  this.isLive = false; // 默认未发布
}

// 使用构造函数创建一个新帖子
const post1 = new Post(
  "JavaScript Basics",
  "This post covers the basics of JavaScript.",
  "John Doe"
);

// 输出博客帖子对象
console.log(post1);
```

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

## Ex6: 模拟价格范围的对象模型

> **要求**：创建一个表示不同价格范围的对象数组，每个对象代表一种价格范围，并包含以下属性：`label`（显示给用户的标签）、`tooltip`（悬停时显示的提示信息）、`minPerPerson`（每个人的最低餐费）和 `maxPerPerson`（每个人的最高餐费）。这些对象将用于类似 Yelp 这样的应用中进行餐厅过滤。

**解法**：

1. Step1：定义一个 `priceRanges` 数组，数组中每个元素是一个表示价格范围的对象。每个对象包含：`label`、`tooltip`、`minPerPerson` 和 `maxPerPerson` 属性。
2. Step2：通过这些价格范围的属性，可以过滤餐厅列表，显示符合特定价格区间的餐厅。

**代码**

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

> 简述：数组是存储有序数据的集合，在 JavaScript 中是对象类型，提供了丰富的内置方法来操作数据。尽管数组常用 `const` 声明，其内容依然可以修改。

**知识树**

1. 数组的声明与初始化
   - 使用数组字面量：`[]`
   - 使用 `Array` 构造函数：`new Array()`
2. 数组的操作方法
   - 添加和删除元素：`push`、`pop`、`shift`、`unshift`
   - 查找元素：`indexOf`、`includes`、`find`、`findIndex`
   - 过滤、映射与迭代：`filter`、`map`、`forEach`
   - 数组排序与反转：`sort`、`reverse`
3. 数组的特性
   - 动态大小：数组可以动态扩展或缩减。
   - 混合类型：数组可以存储任意类型的数据。
4. 数组与引用
   - 数组是引用类型，直接赋值会共享内存地址。
   - 可以使用扩展运算符或其他方法创建数组副本。

## 添加元素

> **简述**：数组元素的添加可以在**开头**、**中间**或**末尾**进行操作，JavaScript 提供了不同的方法来满足多种需求。

**知识树**

1. 在数组末尾添加元素
   - 使用 `push()` 方法。
   - 返回数组的新长度。
2. 在数组开头添加元素
   - 使用 `unshift()` 方法。
   - 返回数组的新长度。
3. 在数组中间添加元素
   - 使用 `splice()` 方法。
   - 语法：`splice(startIndex, deleteCount, item1, item2, ...)`。
     - `startIndex`：开始操作的索引。
     - `deleteCount`：要删除的元素数量，若为 `0` 则仅插入。
     - `item1, item2, ...`：要插入的元素。

**代码示例**

1. 在数组末尾添加元素

   ```js
   const numbers = [3, 4];
   numbers.push(5, 6); // 添加 5 和 6 到数组末尾
   console.log(numbers); // 输出: [3, 4, 5, 6]
   ```

2. 在数组开头添加元素

   ```js
   const numbers = [3, 4];
   numbers.unshift(1, 2); // 添加 1 和 2 到数组开头
   console.log(numbers); // 输出: [1, 2, 3, 4]
   ```

3. 在数组中间添加元素

   ```js
   const numbers = [1, 2, 5, 6];
   numbers.splice(2, 0, "a", "b"); // 在索引 2 处插入 'a' 和 'b'
   console.log(numbers); // 输出: [1, 2, 'a', 'b', 5, 6]
   ```

## 查找元素

> 简述：数组元素查找包括对**原始类型**和**对象类型**的查找，常用方法有 `indexOf()`、`includes()`、`find()` 和 `findIndex()` 等。对于引用类型的对象，需要基于回调函数进行条件匹配。

**知识树**

1. 查找原始类型元素
   - `indexOf()`：返回第一个匹配元素的索引，若不存在返回 `-1`。
   - `lastIndexOf()`：返回最后一个匹配元素的索引。
   - `includes()`：返回布尔值，表示数组中是否包含某元素。
2. 查找对象类型元素
   - 使用 `find()` 查找符合条件的第一个元素。
   - 使用 `findIndex()` 查找符合条件的元素索引。
   - 对象类型查找需基于回调函数进行逻辑定义。

**代码示例**

1. 查找原始类型元素

   ```js
   const numbers = [1, 2, 3, 1, 4, 1];

   console.log(numbers.indexOf(1)); // 0
   console.log(numbers.indexOf(1, 1)); // 3，从索引 1 开始查找
   console.log(numbers.lastIndexOf(1)); // 5
   console.log(numbers.includes(1)); // true，数组包含 1
   console.log(numbers.indexOf("1")); // -1，类型不匹配
   ```

2. 查找对象类型元素

   ```js
   const courses = [
     { id: 1, name: "a" },
     { id: 2, name: "b" },
   ];
   console.log(courses.includes({ id: 1, name: "a" })); // false，引用类型不同
   const course = courses.find(function (course) {
     return course.name === "a";
   });
   console.log(course); // { id: 1, name: "a" }
   const courseIndex = courses.findIndex(function (course) {
     return course.name === "b";
   });
   console.log(courseIndex); // 1
   ```

   - `includes()` 对对象无效，因其基于引用比较。
   - `find()` 和 `findIndex()` 可通过回调函数匹配特定条件。

## 箭头函数

> **简述**：箭头函数（Arrow Function）是 JavaScript 中一种简洁的函数定义方式，使用 `=>` 语法，具有更直观的语法和特性，尤其在处理回调函数和 `this` 绑定时更为便利。

**知识树**

1. 语法简洁性
   - 可以省略大括号 `{}` 和 `return`，直接返回结果。
   - 单参数时可以省略圆括号 `()`；无参数时必须加圆括号。
2. 特点
   - 继承外部作用域的 `this`，没有自己的 `this`，适用于保持 `this` 的一致性。
   - 没有 `arguments` 对象，可用剩余参数 `...args` 替代。（见函数章节 arguments）
   - 无法作为构造函数，不能用 `new` 调用。
3. 应用
   - 常用于回调函数的简化，提高代码可读性。

**代码示例**

1. 基本语法

   ```js
   // 多参数
   const add = (a, b) => a + b;
   console.log(add(3, 4)); // 输出: 7

   // 单参数（省略括号）
   const square = (x) => x * x;
   console.log(square(5)); // 输出: 25

   // 无参数
   const greet = () => console.log("Hello!");
   greet(); // 输出: Hello!
   ```

2. 继承 `this` 的特性

   ```js
   function Person() {
     this.age = 0;

     // 每秒自动执行一次
     setInterval(() => {
       this.age++; // `this` 继承自 Person
       console.log(this.age);
     }, 1000);
   }

   const p = new Person();
   ```

3. 在回调函数中的应用

   ```js
   const courses = [
     { id: 1, name: "a" },
     { id: 2, name: "b" },
   ];
   // 使用传统函数
   const course1 = courses.find(function (course) {
     return course.name === "a";
   });
   // 使用箭头函数
   const course2 = courses.find((course) => course.name === "a");
   console.log(course1); // { id: 1, name: "a" }
   console.log(course2); // { id: 1, name: "a" }
   ```

## 删除元素

> **简述**：JavaScript 提供多种方法删除数组中的元素，可从数组的**末尾**、**开头**或**中间**删除指定数量的元素。这些方法会直接修改原数组。

**知识树**

1. 从末尾删除
   - 使用 `pop()` 方法，删除并返回数组的最后一个元素。
   - 数组长度减少 1。
2. 从开头删除
   - 使用 `shift()` 方法，删除并返回数组的第一个元素。
   - 数组长度减少 1。
3. 从中间删除
   - 使用 `splice()` 方法，在数组的任意位置删除元素。
   - 语法：`splice(startIndex, deleteCount, item1, item2, ...)`。
     - `startIndex`：开始删除的位置。
     - `deleteCount`：要删除的元素数量。
     - `item1, item2, ...`：（可选）要插入的元素。

**代码示例**

1. 从数组末尾删除元素

   ```js
   const numbers = [1, 2, 3, 4, 5];
   const last = numbers.pop();
   console.log(numbers); // 输出: [1, 2, 3, 4]
   console.log(last); // 输出: 5
   ```

2. 从数组开头删除元素

   ```js
   const numbers = [1, 2, 3, 4, 5];
   const first = numbers.shift();
   console.log(numbers); // 输出: [2, 3, 4, 5]
   console.log(first); // 输出: 1
   ```

3. 从数组中间删除元素

   ```js
   const numbers = [1, 2, 3, 4, 5];
   const removed = numbers.splice(2, 2); // 从索引 2 开始，删除 2 个元素
   console.log(numbers); // 输出: [1, 2, 5]
   console.log(removed); // 输出: [3, 4]
   ```

   - `splice()` 也可用于同时删除和插入元素。

## 清空数组

> 简述：清空数组有多种方法，适用于不同的场景和需求。在实际开发中，选择性能最佳且易读的方法尤为重要。

**知识树**

1. 直接赋值空数组
   - 创建一个新数组并替换旧数组引用。
   - 注意：如果有其他变量引用了原数组，这些变量的内容不会被清空。
2. 修改数组长度
   - 设置 `length = 0` 清空原数组。
   - 推荐：简单高效，适用于需清空原数组的场景。
3. 使用 `splice()`
   - 删除所有元素。
   - 适用于保留原数组引用的场景。
4. 循环删除元素
   - 使用 `while` 循环逐一删除。
   - 不推荐：性能较差，代码冗长。

**代码示例**

1. 直接赋值空数组

   ```js
   let numbers = [1, 2, 3, 4, 5];
   numbers = [];
   console.log(numbers); // 输出: []
   ```

   - 此方法创建了一个新数组，但如果有其他变量引用旧数组，旧数组的内容仍然存在。

2. 修改数组长度

   ```js
   let numbers = [1, 2, 3, 4, 5];
   numbers.length = 0;
   console.log(numbers); // 输出: []
   ```

   - 此方法直接清空原数组，其他引用也会同步更新为空。

3. 使用 `splice()`

   ```js
   let numbers = [1, 2, 3, 4, 5];
   numbers.splice(0, numbers.length);
   console.log(numbers); // 输出: []
   ```

   - 通过 `splice()` 删除所有元素，保留原数组引用。

4. 循环删除元素

   ```js
   let numbers = [1, 2, 3, 4, 5];
   while (numbers.length > 0) {
     numbers.pop();
   }
   console.log(numbers); // 输出: []
   ```

   - 此方法逐一删除元素，但效率较低，代码也不简洁。

## 组合和切割

> 简述：在 JavaScript 中，数组的组合和切割操作常用 `concat()` 和 `slice()` 方法，前者用于合并多个数组或值，后者用于截取数组的指定部分。

**知识树**

1. 组合数组
   - 使用 `concat()` 合并多个数组或值。
   - 不会修改原数组，返回一个新数组。
   - 可合并普通数组或对象数组。
2. 切割数组
   - 使用 `slice(start, end)` 从数组中截取指定部分。
   - 返回一个新数组，原数组不受影响。
   - 省略参数时，默认从头或直到末尾切割（相当于拷贝）。
3. 对象数组的引用
   - `concat()` 合并对象数组时，会按引用传递对象。
   - 修改合并后的对象引用，会影响原对象（即 浅拷贝）。

**代码示例**

1. 组合数组

   ```js
   const first = [1, 2, 3];
   const second = [4, 5, 6];

   const combined = first.concat(second);
   console.log(combined); // 输出: [1, 2, 3, 4, 5, 6]
   ```

   - `concat()` 合并 `first` 和 `second` 数组，生成一个新数组。

2. 切割数组

   ```js
   const combined = [1, 2, 3, 4, 5, 6];
   const slice = combined.slice(2, 4);
   console.log(slice); // 输出: [3, 4]
   ```

   - `slice(start, end)` 截取从索引 `2` 开始（包含）到索引 `4` 结束（不包含）的部分。

3. 对象数组的合并和引用

   ```js
   const objArr = [{ id: 1 }];
   const combined = [1, 2, 3].concat(objArr);
   objArr[0].id = 10;
   console.log(combined); // 输出: [1, 2, 3, { id: 10 }]
   ```

   - 合并对象数组时，`concat()` 仅复制对象的引用，因此修改 `objArr` 的内容会影响合并后的数组。

## 拓展运算符（`...`）

> 简述：扩展运算符（`...`）是一种简洁且强大的语法，用于快速复制、合并数组或对象。它使代码更具可读性，是现代 JavaScript 推荐的最佳实践之一。
>
> _在 对象 克隆对象 一节中有讲到拓展运算符_

**知识树**

1. 数组合并
   - 使用 `...` 将多个数组或单个元素合并到一个新数组中。
   - 不会修改原数组，返回新的数组。
2. 数组复制
   - 使用 `...` 创建数组的浅拷贝。
   - 适用于简单的数组结构。
3. 对象操作
   - 拓展运算符同样适用于对象，用于对象的合并或浅拷贝。

**代码示例**

1. 数组合并

   ```js
   const first = [1, 2, 3];
   const second = [4, 5, 6];

   const combined = [...first, "a", ...second, "b"];
   console.log(combined); // 输出: [1, 2, 3, "a", 4, 5, 6, "b"]
   ```

   - `...` 将 `first` 和 `second` 展开，与单个元素 `"a"` 和 `"b"` 一起合并到新数组中。

2. 数组复制

   ```js
   const combined = [1, 2, 3, 4, 5];
   const copy = [...combined];

   console.log(copy); // 输出: [1, 2, 3, 4, 5]
   ```

   - 使用 `...` 快速生成 `combined` 数组的浅拷贝。

3. 对象合并

   ```js
   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const merged = { ...obj1, ...obj2 };
   console.log(merged); // 输出: { a: 1, b: 3, c: 4 }
   ```

   - 对象的拓展运算符会按照顺序覆盖同名属性，`obj2` 的 `b` 覆盖了 `obj1` 的 `b`。

(开始)

## 遍历数组

> 简述：JavaScript 提供了多种遍历数组的方法，包括 `for` 循环、`for...of` 循环和 `forEach()` 方法。这些方法各有特点，适用于不同场景。

**知识树**

1. `for` 循环
   - 经典遍历方式，支持索引操作。
   - 灵活，但需要手动管理索引。
2. `for...of` 循环
   - 简洁，直接返回数组中的每个元素。
   - 不适用于索引相关操作。
3. `forEach()` 方法
   - 内建方法，用于对数组元素执行回调函数。
   - 支持访问索引，适合简洁遍历。

**代码示例**

1. `for` 循环

   ```js
   const numbers = [1, 2, 3];
   for (let i = 0; i < numbers.length; i++) {
     console.log(i, numbers[i]);
   }
   ```

   - 说明：手动管理索引，可访问数组的索引和值。

2. `for...of` 循环

   ```js
   const numbers = [1, 2, 3];
   for (let number of numbers) {
     console.log(number);
   }
   ```

   - 说明：直接遍历数组元素，代码更简洁。

3. `forEach()` 方法

   ```js
   const numbers = [1, 2, 3];
   // 使用普通函数
   numbers.forEach(function (number) {
     console.log(number);
   });
   // 使用箭头函数
   numbers.forEach((number, index) => console.log(index, number));
   ```

   - 说明：`forEach()` 方法自动迭代数组，并对每个元素执行回调函数。支持访问索引，代码更简洁。

## 数组&字符串转换

> 简述：`join()` 用于将数组元素连接成字符串，`split()` 用于将字符串拆分成数组。两者经常配合使用，例如将字符串转换为数组并重新组合。

**知识树**

1. `join()` 方法
   - 将数组转换为字符串。
   - 可选参数：指定分隔符（默认为逗号 `,`）。
   - 不会改变原数组。
2. `split()` 方法
   - 将字符串拆分为数组。
   - 必须指定分隔符，可以是字符串或正则表达式。
   - 返回一个新数组。
3. 最佳实践
   - 构建 URL

**代码示例**

1. `join()` 用法

   ```js
   const numbers = [1, 2, 3];
   const result = numbers.join(); // "1,2,3"
   console.log(result);

   const joinedWithDash = numbers.join("-"); // "1-2-3"
   console.log(joinedWithDash);
   ```

   - `join()` 将数组元素连接为一个字符串，默认用逗号分隔。

2. `split()` 用法

   ```js
   let message = "This is my first message";

   // 使用空格分割字符串
   const parts = message.split(" "); // ["This", "is", "my", "first", "message"]
   console.log(parts);

   // 将数组重新组合成字符串
   const combined = parts.join("-");
   console.log(combined); // "This-is-my-first-message"
   ```

   - `split()` 根据指定分隔符将字符串拆分为数组。
   - 配合 `join()` 可以对字符串进行重新组合。

3. 构建 URL

   ```js
   // 假设有一个文章标题
   let articleTitle = "Creating arrays in JavaScript";
   // 通过 split 和 join 创建 URL Slug
   const slug = articleTitle.split(" ").join("-");
   console.log(slug);
   ```

   - 在构建 URL 时，空格不能出现在 URL 中。因此，需要将标题（如文章标题）中的空格替换为连字符（`-`）。这常见于创建网站的 URL Slug。

## 排序数组

> 简述：JavaScript 提供 `sort()` 和 `reverse()` 方法用于排序和反转数组。`sort()` 默认按字符串编码顺序排序，对数值排序需提供比较函数。`reverse()` 则直接反转数组顺序。

**知识树**

1. `sort()` 方法
   - 默认按字符串编码顺序排序。
   - 对数值或对象排序需提供自定义比较函数。
   - 会修改原数组。
2. `reverse()` 方法
   - 直接反转数组顺序。
   - 修改原数组。
3. 自定义排序规则
   - 对数值排序：提供比较函数 `(a, b) => a - b`。
   - 对对象排序：通过比较对象的特定属性。
4. 大小写问题
   - 字符串排序默认区分大小写，需通过 `toUpperCase()` 或 `toLowerCase()` 统一处理。

**代码示例**

1. 排序原始元素

   ```js
   const numbers1 = [2, 3, 1];
   const numbers2 = [10, 2, 5];
   const arr = ["c", "a", "b"];

   // 按默认顺序排序
   console.log(numbers1.sort()); // 输出 [1, 2, 3]
   console.log(numbers2.sort()); // 输出 [10, 2, 5]
   console.log(arr.sort()); // 输出 ["a", "b", "c"];

   // 自定义数值排序
   numbers2.sort((a, b) => a - b);
   console.log(numbers2); // 输出 [2, 5, 10]

   // 反转数组
   numbers2.reverse();
   console.log(numbers2); // 输出 [10, 5, 2]
   ```

   - _不同 JavaScript 引擎对 `sort` 的底层实现可能不同，但大多数现代引擎（如 V8、SpiderMonkey）使用的是优化过的 快速排序（QuickSort），代码是表现，实现在底层。_

2. 排序对象元素

   ```js
   const courses = [
     { id: 1, name: "JavaScript" },
     { id: 2, name: "Python" },
     { id: 3, name: "HTML" },
   ];

   // 按 name 属性排序（不区分大小写）
   courses.sort((a, b) => {
     const nameA = a.name.toUpperCase();
     const nameB = b.name.toUpperCase();
     if (nameA < nameB) return -1;
     if (nameA > nameB) return 1;
     return 0;
   });

   console.log(courses);
   ```

   - 在 `sort()` 方法中，我们传递一个比较函数，它接受两个元素 `a` 和 `b`，然后根据它们的属性（如 `name`）进行排序。
   - 比较函数的返回值决定了排序顺序：`-1`（负数） 表示 `a` 排在 `b` 前面，`1` （正数）表示 `b` 排在 `a` 前面，`0` 表示 `a` 和 `b` 顺序不变。
   - _底层一般使用的是 JavaScript 的快速排序，快速排序通过选择一个“基准”元素，并将数组分割成两部分，左边部分包含所有小于基准的元素，右边部分包含所有大于基准的元素。然后对这两个部分递归地进行排序。当前不必深究。_

3. 大小写处理

   ```js
   const courses = [
     { id: 1, name: "node.js" },
     { id: 2, name: "javaScript" },
     { id: 3, name: "Python" },
     { id: 4, name: "HTML" },
     { id: 5, name: "css" },
   ];
   courses.sort(function (a, b) {
     // 使用 toUpperCase() 排除大小写敏感
     let nameA = a.name.toUpperCase();
     let nameB = b.name.toUpperCase();
     if (nameA < nameB) return -1;
     if (nameA > nameB) return 1;
     return 0;
   });
   console.log(courses);
   ```

## 测试数组

> 简述：`every()` 和 `some()` 是 JavaScript 中用于测试数组元素是否满足特定条件的方法。它们接受一个回调函数并返回布尔值，分别检查**所有元素**或**至少一个元素**是否满足条件。

**知识树**

1. `every()` 方法
   - 用于测试数组中**所有元素**是否满足条件。
   - 如果所有元素满足条件，返回 `true`；否则返回 `false`。
   - 遇到不满足条件的元素时会立即终止检查。
2. `some()` 方法
   - 用于测试数组中是否**至少有一个元素**满足条件。
   - 如果存在满足条件的元素，返回 `true`；否则返回 `false`。
   - 遇到满足条件的元素时会立即终止检查。
3. 回调函数
   - `callback(element, index, array)`：
     - `element`：当前被检查的元素。
     - `index`：当前元素的索引（可选）。
     - `array`：被测试的数组（可选）。
   - 回调函数应返回布尔值。

**代码示例**

1. 检查所有元素是否为正数

   ```js
   const numbers = [1, -1, 2, 3];

   const allPositive = numbers.every(function (value) {
     return value >= 0;
   });

   console.log(allPositive); // 输出: false
   ```

   - `every()` 方法会遍历数组并检查是否所有元素都为正数。因为数组中包含 `-1`，所以返回 `false`。

2. 检查是否至少有一个正数

   ```js
   const numbers = [1, -1, 2, 3];

   const atLeastOnePositive = numbers.some(function (value) {
     return value >= 0;
   });

   console.log(atLeastOnePositive); // 输出: true
   ```

   - `some()` 方法会检查数组中是否至少有一个元素为正数。由于存在多个正数（如 `1` 和 `2`），因此返回 `true`。

3. 使用箭头函数简化

   ```js
   const numbers = [1, -1, 2, 3];
   console.log(numbers.every((value) => value >= 0)); // false
   console.log(numbers.some((value) => value >= 0)); // true
   ```

## 过滤数组

> 简述：`filter()` 方法用于根据指定条件筛选数组中的元素，返回一个包含满足条件元素的新数组，而不修改原数组。

**知识树**

1. `filter()` 方法
   - 用于筛选数组中的元素。
   - 返回一个新数组，其中包含所有满足条件的元素。
   - 不会修改原数组。
2. 回调函数
   - `callback(element, index, array)`：
     - `element`：当前处理的数组元素。
     - `index`（可选）：当前元素的索引。
     - `array`（可选）：调用 `filter()` 的数组。
   - 回调函数应返回布尔值，`true` 表示保留元素，`false` 表示过滤掉。
3. 常见用法
   - 过滤正数、负数、特定条件的元素。
   - 结合箭头函数简化代码。

**代码示例**

1. 基本用法：筛选正数

   ```js
   const numbers = [1, -1, 2, 3];

   // 使用传统函数
   const filtered = numbers.filter(function (value) {
     return value >= 0;
   });

   console.log(filtered); // 输出: [1, 2, 3]
   ```

2. 使用箭头函数简化

   ```js
   const numbers = [1, -1, 2, 3];

   // 使用箭头函数
   const filtered = numbers.filter((n) => n >= 0);

   console.log(filtered); // 输出: [1, 2, 3]
   ```

3. 复杂条件筛选

   ```js
   const people = [
     { name: "John", age: 25 },
     { name: "Jane", age: 18 },
     { name: "Jack", age: 30 },
   ];
   // 筛选年龄大于 20 的人
   const adults = people.filter((person) => person.age > 20);
   console.log(adults);
   // 输出: [{ name: "John", age: 25 }, { name: "Jack", age: 30 }]
   ```

## `map()` 方法

> `map()` 方法用于遍历数组并对数组中的每个元素应用回调函数，返回一个新的数组，其中每个元素是原数组元素应用回调函数后的结果。

**知识树**

1. `map()` 方法
   - 遍历数组并对每个元素应用回调函数。
   - 返回一个新的数组，新数组中的每个元素为回调函数的返回值。
   - 不会修改原数组。
2. 回调函数
   - 接受三个参数：
     - `element`：当前元素。
     - `index`（可选）：当前元素的索引。
     - `array`（可选）：调用 `map()` 的数组。
   - 返回值用于生成新数组的元素。
3. 常见用法
   - 将数组元素转换为不同格式（如字符串、对象等）。
4. 注意事项
   - 当回调函数返回对象字面量时，需要用括号包裹对象，以避免语法解析错误。

**代码示例**

1. 基本用法：生成 HTML 列表

   ```js
   const numbers = [1, -1, 2, 3];

   const filtered = numbers.filter((n) => n >= 0);

   const items = filtered.map((n) => `<li>${n}</li>`);
   const html = `<ul>${items.join("")}</ul>`;
   console.log(html);
   // 输出: <ul><li>1</li><li>2</li><li>3</li></ul>
   ```

2. 生成对象数组

   ```js
   const numbers = [1, -1, 2, 3];
   const filtered = numbers.filter((n) => n >= 0);
   const items = filtered.map((n) => ({ value: n }));
   console.log(items);
   // 输出: [{ value: 1 }, { value: 2 }, { value: 3 }]
   //如果省略括号：
   const items = numbers.map((n) => {
     value: n;
   }); // 错误，返回 undefined
   ```

## 链式语法

> 简述：链式语法允许对数组进行多步操作，将多个数组方法（如 `filter()`、`map()` 等）组合在一起，从而以简洁、可读性高的方式实现复杂的数据处理逻辑。

**知识树**

1. 链式调用的定义
   - 将多个数组方法串联使用，每个方法的返回值作为下一个方法的输入。
   - 避免中间变量，代码更加简洁。
2. 常见数组方法
   - `filter()`：筛选数组元素。
   - `map()`：对数组元素进行映射转换。
   - `reduce()`：对数组元素进行累积操作。
3. 优点
   - 简化代码结构，减少中间变量。
   - 提高代码可读性和可维护性。

**代码示例**

1. 基本用法：链式调用

   ```js
   const numbers = [1, -1, 2, 3];
   const items = numbers
     .filter((n) => n >= 0) // 过滤出大于等于 0 的数字
     .map((n) => ({ value: n })) // 将每个数字映射为对象 { value: n }
     .filter((obj) => obj.value > 1) // 筛选 value 大于 1 的对象
     .map((obj) => obj.value); // 提取对象的 value 属性，生成新数组
   console.log(items); // 输出: [2, 3]
   ```

   - 步骤解析：
     1. `filter((n) => n >= 0)`：筛选出大于等于 0 的数字。
     2. `map((n) => ({ value: n }))`：将数字转换为对象形式 `{ value: n }`。
     3. `filter((obj) => obj.value > 1)`：筛选出 `value` 大于 1 的对象。
     4. `map((obj) => obj.value)`：提取 `value` 属性，生成新数组。

## `reduce()` 方法

> 简述：`reduce()` 方法通过迭代数组，将数组中的元素累积为一个单一的值（例如总和、乘积或对象）。适用于计算总和、统计数据、转换数据结构等场景。

**知识树**

1. 基本概念
   - `reduce(callback, initialValue)` 方法接收一个回调函数和一个可选的初始值。
   - 回调函数逐步处理数组元素，将结果累积到 `accumulator` 中。
2. 回调函数参数
   - `accumulator`：累积计算的结果。
   - `currentValue`：当前迭代的数组元素。
   - `currentIndex`（可选）：当前元素的索引。
   - `array`（可选）：调用 `reduce()` 的数组。
3. 初始值
   - 如果提供了初始值，第一次迭代时，`accumulator` 的值为初始值。
   - 如果未提供初始值，数组的第一个元素将作为初始值，迭代从第二个元素开始。
4. 常见用途
   - 数组求和、计算乘积。
   - 查找最大值或最小值。
   - 将数组转换为对象或其他结构。

**代码示例**

1. 数组求和

   ```js
   const numbers = [1, -1, 2, 3];

   // 使用 for 循环
   let sum = 0;
   for (let n of numbers) {
     sum += n;
   }
   console.log(sum); // 输出: 5

   // 使用 reduce()
   const sumWithReduce = numbers.reduce(
     (accumulator, currentValue) => {
       return accumulator + currentValue;
     },
     0
   ); // 初始值为 0
   console.log(sumWithReduce); // 输出: 5
   ```

2. 简化版求和

   ```js
   const numbers = [1, -1, 2, 3];
   const sum = numbers.reduce((a, c) => a + c); // 不提供初始值，默认使用第一个元素作为初始值
   console.log(sum); // 输出: 5
   ```

3. 计算数组乘积

   ```js
   const numbers = [1, 2, 3, 4];
   const product = numbers.reduce((acc, curr) => acc * curr, 1); // 初始值为 1
   console.log(product); // 输出: 24
   ```

4. 转换数组为对象

   ```js
   const people = [
     { id: 1, name: "Alice" },
     { id: 2, name: "Bob" },
     { id: 3, name: "Charlie" },
   ];
   const peopleById = people.reduce((acc, person) => {
     acc[person.id] = person.name;
     return acc;
   }, {});
   console.log(peopleById);
   // 输出: { 1: "Alice", 2: "Bob", 3: "Charlie" }
   ```

## Ex1: 生成数组

> **要求**：编写一个函数 `arrayFromRange`，接收两个参数 `min` 和 `max`，返回一个从 `min` 到 `max` 的所有整数组成的数组。如果 `max < min`，返回空数组。

**解法**：

1. Step1：创建一个空数组 `output` 用于存储结果。
2. Step2：使用 `for` 循环从 `min` 遍历到 `max`，将每个数字添加到 `output` 中。
3. Step3：返回 `output`。

```js
function arrayFromRange(min, max) {
  const output = []; // 初始化空数组

  // 遍历 min 到 max 的范围
  for (let i = min; i <= max; i++) {
    output.push(i); // 将当前数字添加到数组中
  }

  return output; // 返回结果数组
}

// 测试函数
console.log(arrayFromRange(1, 5)); // 输出: [1, 2, 3, 4, 5]
console.log(arrayFromRange(-3, 3)); // 输出: [-3, -2, -1, 0, 1, 2, 3]
console.log(arrayFromRange(5, 1)); // 输出: []
```

## Ex2: 实现 `includes` 方法

> **要求**：编写一个函数 `includes(array, searchElement)`，该函数模拟 `Array.prototype.includes()` 方法的功能，接收一个数组和一个待搜索的元素。如果数组中包含该元素，则返回 `true`；否则返回 `false`。

**解法**：

1. Step1：遍历数组中的每个元素。
2. Step2：比较当前元素是否等于目标搜索元素，如果找到则立即返回 `true`。
3. Step3：遍历结束后仍未找到，返回 `false`。

**代码**

```js
function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true; // 找到元素，立即返回 true
    }
  }
  return false; // 遍历完成，未找到元素
}

// 测试函数
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 2)); // 输出: true
console.log(includes(numbers, 5)); // 输出: false
```

## Ex3: 数组排除特定元素

> **要求**：实现一个函数 `except`，接收一个数组和一个要排除的值数组。返回一个新数组，其中不包含需要排除的值。

**解法**：

1. Step1：创建一个空数组 `output`，用于存储过滤后的元素。
2. Step2：遍历原数组，检查当前元素是否存在于排除数组中。如果不存在，则将其添加到 `output` 中。

**代码**

```js
function except(array, excluded) {
  const output = []; // 用于存储过滤后的结果

  for (let element of array) {
    // 如果元素不在排除数组中，则添加到结果数组
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }

  return output; // 返回结果数组
}

// 测试代码
const numbers = [1, 2, 3, 4];
const excluded = [1, 2];

const result = except(numbers, excluded);
console.log(result); // 输出: [3, 4]
```

## Ex4: 移动数组元素

> **要求**：实现一个函数 `move`，用于在数组中移动指定索引的元素到指定的偏移位置。偏移值可以是正数或负数。若偏移超出数组范围，应返回错误。

**解法**：

1. 克隆数组：使用扩展运算符创建原数组的副本，避免修改原数组。
2. 移除元素：通过 `splice` 方法移除目标元素，并存储以便后续插入。
3. 插入元素：在新的位置将元素插回数组。
4. 验证偏移：在操作前检查目标位置是否有效，若无效则输出错误信息并终止。

**代码**

```js
function move(array, index, offset) {
  const position = index + offset;

  // 偏移范围验证
  if (position < 0 || position >= array.length) {
    console.error("Invalid offset");
    return;
  }

  // 克隆数组
  const output = [...array];

  // 移除元素
  const [element] = output.splice(index, 1);

  // 插入元素到新位置
  output.splice(position, 0, element);

  return output;
}

// 测试代码
const numbers = [1, 2, 3, 4];

console.log(move(numbers, 0, 1)); // 输出: [2, 1, 3, 4]
console.log(move(numbers, 3, -2)); // 输出: [1, 4, 2, 3]
console.log(move(numbers, 1, 4)); // 输出: Invalid offset
console.log(numbers); // 原数组未修改: [1, 2, 3, 4]
```

## Ex5 统计某元素出现次数

> **要求**：实现一个函数 `countOccurrences`，用于统计数组中某个特定元素出现的次数。使用基础循环和 `reduce` 方法实现。

**解法**：

1. 基础实现：
   - 遍历数组，检查每个元素是否等于目标元素。
   - 如果相等，计数器加一。
2. `reduce` 实现：
   - 使用 `reduce` 遍历数组，将累加器用于记录目标元素的出现次数。
   - 在每次回调中，检查当前值是否等于目标元素，更新累加器。

**代码**

```js
// 基础实现
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

// 使用 reduce 实现
function countOccurrencesReduce(array, searchElement) {
  return array.reduce((accumulator, current) => {
    return current === searchElement
      ? accumulator + 1
      : accumulator;
  }, 0);
}

// 测试代码
const numbers = [1, 2, 3, 4, 1, 1, 5];

console.log(countOccurrences(numbers, 1)); // 输出: 3
console.log(countOccurrencesReduce(numbers, 1)); // 输出: 3
```

## Ex6: 获取最大值

> **要求**：实现一个函数 `getMax`，接收一个数组，返回数组中的最大值。如果数组为空，则返回 `undefined`。

**解法**：

1. 基础实现：
   - 检查数组是否为空。如果是，返回 `undefined`。
   - 假设第一个元素是最大值，用 `for` 循环遍历数组，如果发现更大的值则更新最大值。
2. 使用 `reduce` 方法：
   - 用 `reduce` 遍历数组，将累加器维护为当前的最大值。
   - 在每次回调中，比较当前值和累加器，返回较大的值作为新的累加器。

**代码**

```js
// 基础实现
function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

// 使用 reduce 实现
function getMaxReduce(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}

// 测试代码
const numbers = [1, 5, 3, 9, 2];

console.log(getMax(numbers)); // 输出: 9
console.log(getMax([])); // 输出: undefined

console.log(getMaxReduce(numbers)); // 输出: 9
console.log(getMaxReduce([])); // 输出: undefined
```

## Ex7: 按条件筛选

> **要求**：编写代码从电影数组中筛选出特定条件的电影，按评分降序排列，并只输出它们的标题。

**解法**：

1. 过滤电影：
   - 使用 `filter` 筛选出电影的 `year` 为 2021 或更晚，且 `rating` 大于 4。
2. 排序电影：
   - 使用 `sort` 方法按评分降序排列。
3. 提取标题：
   - 使用 `map` 提取每部电影的 `title` 属性。

**代码**

```js
// 定义电影数组
const movies = [
  { title: "a", year: 2021, rating: 4.5 },
  { title: "b", year: 2022, rating: 5 },
  { title: "c", year: 2020, rating: 4.7 },
  { title: "d", year: 2021, rating: 3 },
];

// 筛选、排序并提取标题
const titles = movies
  .filter((m) => m.year >= 2021 && m.rating > 4) // Step 1: 筛选
  .sort((a, b) => b.rating - a.rating) // Step 2: 按评分降序排列
  .map((m) => m.title); // Step 3: 提取标题

console.log(titles); // 输出: ["b", "a"]
```

# 函数

## 函数定义方式

> 简述：JavaScript 提供两种主要的函数定义方式：**函数声明**和**函数表达式**。它们的语法结构、提升行为和适用场景各有不同。

**知识树**

1. 函数声明（Function Declaration）
   - 通过 `function` 关键字定义，带有函数名称。
   - 支持提升（Hoisting）：函数可以在声明之前调用。
   - 适合定义全局或模块级别的函数。
2. 函数表达式（Function Expression）
   - 将函数赋值给变量或常量，分为匿名函数和命名函数。
   - 不支持提升：必须在定义后调用。
   - 命名函数表达式支持递归调用。
3. 匿名函数表达式
   - 没有函数名称，适合简单的回调函数。
4. 命名函数表达式
   - 包含函数名称，便于递归或调试。
   - 错误发生时，堆栈追踪显示为 `命名函数名称`，使得开发者能够更快定位到是哪个函数出了问题。
5. 动态类型
   - 函数可以接受任意数量的参数，并且可以在函数执行时动态地访问这些参数。

**代码示例**

1. 函数声明

   ```js
   // 定义一个函数
   function walk() {
     console.log("walk");
   }

   // 提升行为
   walk(); // 输出: walk
   ```

2. 匿名函数表达式

   ```js
   // 将匿名函数赋值给变量
   let run = function () {
     console.log("run");
   };

   run(); // 输出: run
   ```

3. 命名函数表达式

   ```js
   // 将命名函数赋值给变量
   let sprint = function fastRun() {
     console.log("sprint");
   };

   sprint(); // 输出: sprint
   // fastRun(); // 报错：fastRun 在函数外不可用
   ```

4. 提升对比

   ```js
   // 函数声明的提升
   walk(); // 输出: walk
   function walk() {
     console.log("walk");
   }

   // 函数表达式的无提升
   // run(); // 报错：run is not defined
   let run = function () {
     console.log("run");
   };
   ```

5. 引用共享

   ```js
   let a = function () {
     console.log("shared function");
   };

   let b = a;
   b(); // 输出: shared function
   a(); // 输出: shared function
   ```

6. 动态接收参数

   ```js
   function sum(a, b) {
     return a + b;
   }
   console.log(sum(1, 2)); // 3
   console.log(sum(1)); // NaN，第二个参数为undefined，1 + undefined 得到 NaN
   console.log(sum(1, 2, 3, 4, 5)); //3，多个参数，只读取对应参数位置的参数
   ```

## 参数对象 (`arguments`)

> 简述：`arguments` 是 JavaScript 中一个类数组对象，它包含了传递给函数的所有参数。尽管其外表像数组，但它并不是一个数组，且没有数组的一些方法。可以用于处理可变数量的参数，通常用在没有明确参数个数的函数中。

**知识树**

1. `arguments` 对象
   - 类数组对象，包含函数参数。
   - 不具备数组的方法（如 `forEach`、`map`）。
   - 可以用 `for...of` 循环或 `Array.from()` 转换为数组。
2. 箭头函数与 `arguments`
   - 箭头函数没有自己的 `arguments` 对象。
   - 使用箭头函数时，`arguments` 会从外部作用域继承。
3. `rest` 参数（`...args`）
   - 现代语法，替代 `arguments`，提供更灵活的参数处理。
   - 直接在函数定义时收集所有剩余的参数。

**代码示例**

1. `arguments` 使用示例

   ```js
   function sum() {
     let total = 0;
     console.log(arguments); // 打印 arguments 对象
     for (let value of arguments) {
       total += value;
       console.log(value); // 打印每个参数
     }
     return total;
   }

   console.log(sum(1, 2, 3, 4, 5)); // 输出: 15
   ```

   - `arguments` 在函数内部包含传入的所有参数。
   - 不能直接使用数组的方法，如 `forEach`，但是可以通过 `for...of` 循环来遍历。

2. 箭头函数中的 `arguments`

   ```js
   const arrowFunc = () => {
     console.log(arguments); // 错误：箭头函数没有自己的 arguments
   };

   function regularFunc() {
     console.log(arguments); // 正常工作
   }

   regularFunc(1, 2, 3); // 输出: { '0': 1, '1': 2, '2': 3 }
   arrowFunc(1, 2, 3); // 报错：arguments is not defined
   ```

   - 在箭头函数中，`arguments` 会抛出错误，因为它不会有自己的 `arguments` 对象，而是继承外部作用域的 `arguments`。

3. `rest` 参数替代 `arguments`

   ```js
   function sum(...args) {
     return args.reduce((total, value) => total + value, 0);
   }
   console.log(sum(1, 2, 3, 4, 5)); // 输出: 15
   ```

   - 使用 `...args` 来捕获函数的所有参数，返回一个实际的数组，避免了 `arguments` 的局限性。
   - 通过 `args` 可以直接使用数组的方法，如 `reduce`，更加直观和灵活。

## 剩余参数(`...`)

> 简述：剩余参数（Rest Parameters）是 ES6 引入的功能，它允许函数接收任意数量的参数，并将这些参数收集到一个真正的数组中。与传统的 `arguments` 对象不同，剩余参数是一个数组，因此可以直接使用数组的方法进行操作（如 `reduce`、`map` 等）。

**知识树**

1. 剩余参数定义
   - 使用 `...` 语法收集多余的参数。
   - 收集的参数是一个数组，可以直接使用数组的方法。
2. 应用场景
   - 计算和汇总参数值（如求和、计算总价等）。
   - 使函数可以接收动态数量的参数。
3. 限制
   - 剩余参数必须放在函数参数列表的最后，不能放在其他参数后面。
4. `arguments` 与剩余参数的对比
   - `arguments` 是类数组对象，`rest` 是实际的数组。
   - `arguments` 没有数组的方法，而 `rest` 可以直接使用数组方法。

**代码示例**

1. 基本用法：求和

   ```js
   function sum(...args) {
     return args.reduce((a, b) => a + b, 0); // 使用 reduce 求和
   }

   console.log(sum(1, 2, 3, 4, 5)); // 输出: 15
   ```

   - 在这个例子中，`...args` 将所有传递给 `sum` 函数的参数收集到一个数组 `args` 中。使用 `reduce` 方法对所有参数进行求和。

2. 应用场景：计算总价和折扣

   ```js
   function countMoney(discount, ...prices) {
     const total = prices.reduce((a, b) => a + b, 0); // 计算商品价格总和
     return total * (1 - discount); // 应用折扣并返回最终价格
   }

   console.log(countMoney(0.1, 20, 30)); // 输出: 45
   ```

   - `discount` 是第一个参数，表示折扣。
   - `...prices` 是剩余参数，收集所有传入的价格。
   - 使用 `reduce` 方法计算总和，并应用折扣后返回最终价格。

3. 限制：剩余参数必须是最后一个参数

   ```js
   // 错误示范：`...prices` 必须是最后一个参数
   function test(discount, ...prices, p) {
     return null;
   }
   // Uncaught SyntaxError: Rest parameter must be last formal parameter
   ```

   - 这里 `p` 参数位于剩余参数 `...prices` 后面，会抛出语法错误。
   - 为了避免此错误，确保 `rest` 参数始终位于参数列表的最后。

4. `arguments` 与剩余参数对比

   ```js
   function example() {
     console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
     console.log([...arguments]); // [1, 2, 3]
   }
   example(1, 2, 3);
   ```

   - `arguments` 是类数组对象，不具备数组方法。
   - 使用扩展运算符 `[...arguments]` 可以将 `arguments` 转换为数组，方便使用数组的方法。

## 默认值

> 简述：默认值是在函数的参数中为某些未传递的值提供预设的初始值。这避免了函数在调用时遇到 `undefined` 并且仍然能够正确执行。与使用逻辑运算符（如 `||`）的方式相比，默认值的语法更加简洁和明确。

**知识树**

1. 基本用法
   - 为函数参数设置默认值。
   - 如果未传递参数或参数为 `undefined`，则使用默认值。
2. 传递 `undefined` 的行为
   - 如果传递 `undefined` 作为参数，默认值仍会生效。
3. 最佳实践
   - 将带默认值的参数放在参数列表的最后，避免逻辑上的混乱。
4. 设置默认值时的潜在问题
   - 参数顺序不当可能会导致无法正确使用默认值。

**代码示例**

1. 基本用法：使用默认值

   ```js
   function interest(principal, rate = 3.5, year = 5) {
     return ((principal * rate) / 100) * year;
   }

   console.log(interest(10000)); // 使用默认值: rate = 3.5, year = 5
   console.log(interest(10000, undefined, 5)); // 使用默认值: rate = 3.5, year = 5
   ```

   - `rate = 3.5` 和 `year = 5` 是默认值。如果函数调用时未传递这些参数或传递 `undefined`，则会使用默认值。

2. 注意事项：参数顺序和默认值

   ```js
   function test(principal, rate = 3.5, year) {
     return ((principal * rate) / 100) * year;
   }
   console.log(test(10000, 5)); // NaN
   console.log(test(10000, undefined, 5)); // 1750
   ```

   - 在 `test` 函数中，`year` 没有默认值。当 `rate` 被传递为 `5` 时，`year` 会被视为 `undefined`，导致函数返回 `NaN`。
   - 为了避免这种情况，默认值应放在参数列表的末尾。

## `Getter`&`Setter`

> 简述：在 JavaScript 中，`getter` 和 `setter` 是定义对象属性的特殊方法，用于控制属性的读取和赋值行为。`getter` 用于访问属性值，而 `setter` 用于修改或设置属性值。它们可以使代码更简洁、更具可读性。

**知识树**

1. `getter` 的作用

   - 允许以属性的形式访问对象的方法，而不需要显式调用它。
   - 提高代码的可读性，简化访问。

2. `getter` 的实现

   - 使用 `get` 关键字定义。

   - 可以像属性一样调用，无需显式调用方法。

3. `setter` 的作用

   - 允许以赋值的形式更新对象的属性值，并自动执行额外的逻辑。
   - 提供数据验证或转换的机会。

4. `setter` 的实现

   - 使用 `set` 关键字定义。

   - 必须接收一个参数，该参数表示被赋予的值。

   - 可以在赋值时执行额外的逻辑，例如验证或解析。

5. 使用场景

   - 创建计算属性（如动态生成的值）。
   - 在属性赋值时执行验证或逻辑。
   - 简化对象的外部接口。

6. 注意事项

   - `getter` 必须返回一个值。
   - `setter` 必须接收一个参数作为值。
   - 一旦定义了 `getter` 和 `setter`，对象属性就会变得不可直接操作，而是通过访问器方法控制。

**代码示例**

```js
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // Setter
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// 使用 Getter
console.log(person.fullName); // 输出：Mosh Hamedani

// 使用 Setter
person.fullName = "John Smith";
console.log(person);
// 输出：{ firstName: "John", lastName: "Smith", fullName: [Getter/Setter] }
```

## `Try`&`Catch`

> 简述：`try...catch` 是 JavaScript 中用于处理异常（Exception）的机制。通过 `try` 块捕获异常并在 `catch` 块中处理这些异常，可以让程序更健壮，避免因错误中断执行。

**知识树**

1. 异常抛出（Throwing Exceptions）

   - 使用 `throw` 关键字显式地抛出一个异常。

   - 异常可以是任何类型（如字符串、对象、错误对象等），但推荐使用 `Error` 对象来创建标准化的错误信息。

   - 一旦抛出异常，代码将跳过当前的执行路径，转而进入最近的 `catch` 块。

2. 异常捕获（Catching Exceptions）

   - 使用 `try` 块包裹可能发生错误的代码。
   - 如果代码抛出异常，程序会跳转到与 `try` 块关联的 `catch` 块，并将异常对象作为参数传递给 `catch`。

3. 错误对象

   - JavaScript 提供了 `Error` 构造函数，用于创建错误对象。
   - 常用的错误类型包括：
     - `Error`（通用错误）
     - `TypeError`（类型错误）
     - `ReferenceError`（引用错误）

4. 代码结构：

   ```js
   try {
     // 可能会抛出异常的代码
   } catch (e) {
     // 处理异常的代码
   }
   ```

5. 异常控制流程
   - 捕获异常：`try` 块中的代码一旦抛出异常，后续代码不再执行，直接跳转到 `catch` 块。
   - 处理异常：`catch` 块接收异常对象，通过 `e.message` 获取错误信息。
   - 恢复正常执行：处理完异常后，程序继续执行 `catch` 块之后的代码。

**代码示例**

```js
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    // 检查输入是否为字符串
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }
    // 分割输入并验证是否有两个部分
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error(
        "Invalid full name. Enter a first and last name."
      );
    }
    // 设置 firstName 和 lastName
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  // person.fullName = null;  // 抛出异常：Value is not a string
  person.fullName = ""; // 抛出异常：Invalid full name
} catch (e) {
  alert(e.message); // 在界面上显示错误信息
}
console.log(person); // 输出对象，检查是否修改成功
```

## Scope

> 简述：**作用域**定义了变量、常量或函数在代码中可访问的范围。作用域的分类和规则是 JavaScript 中的重要概念，正确理解作用域有助于编写更高效和可维护的代码。

**知识树**

1. 全局作用域（Global Scope）
   - 变量或常量在代码的任何地方都可以访问。
   - 缺点：容易被意外修改，增加程序出错的风险。
   - 最佳实践：尽量避免定义全局变量。
2. 局部作用域（Local Scope）
   - 变量或常量定义在函数或代码块中，其作用域仅限于该函数或代码块内。
   - 局部作用域有助于减少变量冲突。
3. 块级作用域（Block Scope）
   - 使用 `let` 和 `const` 声明的变量，其作用域限制在最近的 `{}` 内。
   - 不同代码块（如 `if`、`for` 等）中可以定义相同名称的变量，互不干扰。
4. 变量的优先级
   - 局部变量优先于全局变量。
   - 如果函数中有与全局变量同名的变量，函数内部会优先使用局部变量。

**代码示例**

- 全局作用域

  ```js
  const color = "red"; // 全局变量
  function start() {
    console.log(color); // 可以访问全局变量，输出 "red"
  }
  start();
  console.log(color); // 输出 "red"
  ```

- 局部作用域

  ```js
  function start() {
    const message = "hi"; // 局部变量，作用域仅限于 start 函数
    console.log(message); // 输出 "hi"
  }
  start();
  // console.log(message); // 报错：message 未定义
  ```

- 块级作用域

  ```js
  function start() {
    if (true) {
      const blockVariable = "inside block";
      console.log(blockVariable); // 输出 "inside block"
    }
    // console.log(blockVariable); // 报错：blockVariable 未定义
  }
  start();
  ```

- 变量优先级

  ```js
  const color = "red"; // 全局变量
  function start() {
    const color = "blue"; // 局部变量，覆盖全局变量
    console.log(color); // 输出 "blue"
  }
  start();
  console.log(color); // 输出 "red"
  ```

## `Let/Const`&`Var`

> 简述：在 JavaScript 中，可以使用 `let`、`const` 和 `var` 来声明变量。尽管它们都能声明变量，但它们在作用域、提升行为以及全局变量处理上有显著差异

**知识树**

1. `var` 的特点

   1. _避免使用它_
   2. 变量是函数作用域（Function Scope），而非块作用域。
   3. 声明的全局变量会自动添加到全局对象（浏览器中的 `window` 对象）上。
   4. 变量声明会被提升，但初始化不会。

2. `let` 的特点

   - 变量是块作用域（Block Scope），限制在最近的 `{}` 内。
   - 不会将全局变量附加到全局对象上。
   - 声明的变量会被提升，但在初始化之前不可访问（称为暂时性死区（Temporal Dead Zone, TDZ））。

3. `const` 的特点

   - 与 `let` 类似，具有块作用域。
   - 声明时必须初始化，且初始化后不可重新赋值。
   - 对于对象或数组，`const` 确保的是变量的引用地址不可变，但对象内容可以更改。

4. 使用建议

   - 避免使用 `var`，因为它是函数作用域，容易引发错误。
   - 优先使用 `const`，只有在需要改变变量值时使用 `let`。

5. 函数补充

   - 在 global 下声明的函数会自动加到全局对象（浏览器中的 `window` 对象）上，但可以避免

     ```js
     function sayHi() {
       console.log("hi");
     }
     window.sayHi(); // 输出："hi"
     ```

**代码示例**

1. Var 变量是函数作用域，而非块作用域

   ```js
   function start() {
     for (var i = 0; i < 5; i++) {
       console.log(i); // 输出：0, 1, 2, 3, 4
     }
     console.log(i); // 输出：5，`i` 可在循环外访问
   }

   start();
   ```

   如果使用 `let`，循环外访问 `i` 会报错：

   ```js
   function start() {
     for (let i = 0; i < 5; i++) {
       console.log(i); // 输出：0, 1, 2, 3, 4
     }
     console.log(i); // 报错：i 未定义
   }

   start();
   ```

2. `var` 声明的是全局变量（函数），会自动添加到 `window` 对象

   ```js
   var name = "melody"; // 全局变量
   let age = 25; // 全局变量

   console.log(window.name); // 输出："melody"
   console.log(window.age); // 输出：undefined
   ```

3. 变量声明提升

   ```js
   console.log(x); // 输出：undefined（声明提升，但未初始化）
   var x = 10;
   console.log(y); // 报错：y is not defined
   let y = 20;
   ```

## `This`

> 简述：`this` 是 JavaScript 中一个非常常见但容易混淆的概念。它的值取决于函数的调用方式。通过理解 `this` 的行为，我们可以更清楚地掌握 JavaScript 中的对象方法、回调函数以及构造函数的作用。

**知识树**

1. `this` 的含义
   - `this` 指向当前执行上下文的对象。
   - 在对象方法中，`this` 指向调用该方法的对象。（无论是一开始就写下的方法还是后续添加的方法）
   - 在普通函数中，`this` 指向全局对象（在浏览器中是 `window`）
   - 在构造函数中，使用 `new` 操作符创建一个新的空对象，让`this` 指向一个该空对象，随后进行构造函数内的代码执行。
   - 在**回调函数**中， `this` 默认指向全局对象，但可以通过额外参数或绑定方法改变。
   - 在箭头函数中，`this` 的值取决于定义时的上下文，继承自外层作用域。
2. 解决**回调函数**中 `this` 引用问题

   - 在回调函数后，加上`this`参数，但不一定所有方法都适配
   - 在对象中引入`self`或`that`来指向对象中的`this`，在回调函数中引用`self`
   - 使用 `call()` 和 `apply()`：这两个方法可以显式地指定函数执行时的 `this` 值，但它的参数传递方式有所不同。

     - `call` 方法的第一个参数是指定 `this` 的对象，后面的参数则是传递给函数的参数。
     - `apply` 的第一个参数是指定 `this` 的对象，第二个参数是一个数组，它会被传递给函数。

   - 使用 `bind()`：`bind` 方法和 `call`、`apply` 类似，都允许你显式地指定 `this` 值，但不同的是，`bind` 不会立即调用函数，而是返回一个新的函数。
     - `bind` 方法创建了一个新函数，该函数的 `this` 被固定为。可以结合回调函数使用。
     - `bind` 方法的第一个参数是指定 `this` 的对象，后面的参数则是传递给函数的参数。
   - 箭头函数（最优）：箭头函数不会创建自己的 `this`，它会继承外层作用域的 `this`。

**代码示例**

1. 方法调用

   ```js
   const video = {
     title: "a",
     play() {
       console.log(this); // 输出 video 对象
     },
   };
   video.play();
   video.stop = function () {
     console.log(this);
   };
   video.stop();
   ```

2. 普通函数调用

   ```js
   function playVideo() {
     console.log(this);
   }

   playVideo(); // 在浏览器中输出 window 对象
   ```

3. 构造函数调用

   ```js
   function Video(title) {
     this.title = title;
     console.log(this);
   }

   const v = new Video("a"); // 输出新创建的 Video 对象
   ```

4. **回调函数**中的 `this`

   ```js
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       this.tags.forEach(function (tag) {
         console.log(this.title, tag); // this.title 为 undefined，因为 this 指向全局对象
         console.log(this); // 在浏览器中输出 window 对象
       });
     },
   };

   video.showTags();
   ```

5. 在箭头函数中的`this`

   ```js
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       this.tags.forEach((tag) => {
         console.log(this.title, tag); // 箭头函数继承外层的 this
       });
     },
   };
   video.showTags(); // 正常输出标题和标签
   ```

**解决回调函数中 `this` 问题**

1. 传递 `this` 参数（不一定都适用）

   ```js
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       this.tags.forEach(function (tag) {
         console.log(this.title, tag);
       }, this); // 将 this 作为第二个参数传递
     },
   };

   video.showTags(); // 正常输出标题和标签
   ```

2. 在对象中引入`self`或`that`（传统方法，需要理解）

   ```js
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       const self = this; // 引入self
       this.tags.forEach(function (tag) {
         console.log(self.title, tag);
       });
     },
   };

   video.showTags(); // 正常输出标题和标签
   ```

3. 使用 `call()` 和 `apply()`

   ```js
   function playVideo(a, b) {
     console.log(this);
   }

   playVideo.call({ name: "Moth" }, 1, 2);
   playVideo.apply({ name: "Moth" }, [1, 2]);

   playVideo();
   ```

4. 使用 `bind()`

   ```js
   function playVideo(a, b) {
     console.log(this);
   }

   const fn = playVideo.bind({ name: "Moth" });
   fn();
   // 等价
   playVideo.bind({ name: "Moth" })();

   // 结合回调函数使用
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       this.tags.forEach(
         function (tag) {
           console.log(this.title, tag);
         }.bind(this)
       );
     },
   };
   video.showTags();
   ```

5. 使用箭头函数

   ```js
   const video = {
     title: "a",
     tags: ["a", "b", "c"],
     showTags() {
       this.tags.forEach((tag) => {
         console.log(this.title, tag); // 箭头函数继承外层的 this
       });
     },
   };
   video.showTags(); // 正常输出标题和标签
   ```

**补充**

1. 普通函数附加到 `window` 对象

   ```js
   function sayHi() {
     console.log("hi");
   }
   console.log(window.sayHi); // 输出：函数本身
   ```

## Ex1

> **要求**：创建一个函数 `sum`，该函数接受不定数量的参数，并返回它们的和，同时，使其能够接受一个数组，并仍然返回相同的结果。你需要检测传入的参数是否是数组。
>
> **解法**
>
> 1. 使用 Rest 参数
>    使用 Rest 参数 (`...items`) 来接收不定数量的参数。Rest 参数会将所有传入的参数收集到一个数组中。
> 2. 检测是否是数组
>    使用 `Array.isArray()` 方法检查传入的参数是否是一个数组。
> 3. 计算数组元素的和
>    使用 `reduce()` 方法对数组中的每个元素进行求和。
> 4. 处理嵌套数组的情况
>    如果传入的参数是一个数组，且该数组内部包含其他数组，则需要将其展开，避免嵌套。

```js
function some(...items) {
  // 使用一个辅助函数来递归展开数组
  function flatten(arr) {
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        // 如果 curr 是数组，递归展开
        return acc.concat(flatten(curr));
      } else {
        // 否则直接加入到结果数组
        return acc.concat(curr);
      }
    }, []);
  }

  // 展开所有传入的参数
  const flatItems = flatten(items);

  // 计算所有展开元素的总和
  return flatItems.reduce((a, b) => a + b, 0);
}

console.log(some(1, [1, 1], 1)); // 输出: 4
```

**拓展 ES10：`flat()`方法**

```js
function some(...items) {
  // 扁平化一次，仅处理嵌套的数组
  items = items.flat();

  // 计算所有数字的总和
  return items.reduce((a, b) => a + b, 0);
}

console.log(some(1, [1, 1], 1)); // 输出: 4
```

## Ex2

> **要求**：创建一个 `circle` 对象，使用对象字面量语法。这个对象应该有一个 `radius` 属性，既可以读取也可以修改，同时有一个只读的 `area` 属性。你不应该能够从外部设置 `area`，但可以读取它。
>
> **解法**
>
> 1. 创建一个 `circle` 对象
>    使用对象字面量语法创建 `circle` 对象，并添加 `radius` 属性。
> 2. 只读 `area` 属性
>    使用 `getter` 来创建只读属性 `area`，计算其值为圆的面积，公式为 `Math.PI * radius * radius`。
> 3. 不能设置 `area`
>    通过只定义 `getter`，没有 `setter`，确保外部无法修改 `area` 的值。

```js
const circle = {
  radius: 1,
  // 只读属性 - 面积
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area); // 输出圆的面积
circle.radius = 10; // 修改半径
console.log(circle.area); // 输出新的面积
circle.area = 100;
console.log(circle.area); // 无法设置只读属性，输出之前计算的面积
```

## Ex3

> **要求**：我们之前做过一个练习，要求统计数组中某个元素的出现次数。现在需要修改该函数，加入错误处理，确保如果传入的参数不是有效的数组时，能够抛出异常，并且处理这些异常。
>
> **解法**
>
> 1. **验证参数类型**
>    使用 `Array.isArray()` 方法检查第一个参数是否为有效的数组，如果不是，则抛出异常。
> 2. **错误处理**
>    使用 `try...catch` 语句来捕获和处理抛出的异常，并在 `catch` 块中输出错误信息。
> 3. **异常抛出**
>    如果第一个参数不是数组，使用 `throw new Error('Invalid array')` 来抛出异常。

```JS
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  return array.reduce((acc, curr) => {
    return curr === searchElement ? acc + 1 : acc;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}
```

# 对象

## 面向对象编程

> **简述**：面向对象编程是一种以对象为中心的编程范式。它通过封装 (Encapsulation)、抽象 (Abstraction)、继承(Inheritance)和多态(Polymorphism)等概念，帮助程序员更加高效地组织代码，并使代码更具可维护性。

**知识树**

1. 面向对象编程概述
   - 面向对象编程是一种编程范式，围绕“对象”而不是函数进行编程。
   - 支持 OOP 的编程语言有：C#、Java、Ruby、Python、JavaScript 等。
   - 面向对象编程不仅是编程语言或工具，而是一种编程思想，帮助解决程序复杂性问题。
2. OOP 的核心概念
   - 封装：将相关的变量和函数组合成一个“对象”，隐藏对象内部的实现细节，提供简单易用的接口。
   - 抽象：隐藏复杂的实现，暴露必要的功能，简化使用者的操作。
   - 继承：允许新对象继承已有对象的属性和方法，减少代码冗余。
   - 多态：允许不同类型的对象以相同的方式调用相同的方法，减少重复的条件判断。
3. OOP 的优势
   - 通过封装，代码模块化，提高代码的复用性。
   - 通过抽象，减少代码复杂度，提高可维护性。
   - 通过继承，减少冗余代码，增强可扩展性。
   - 通过多态，简化代码，减少繁琐的条件判断。

**代码示例**

1. 封装

   封装将数据和操作这些数据的函数（方法）放在同一个对象中，从而避免了数据和函数之间的混乱。

   ```js
   // 字面量创建
   let employee = {
     baseSalary: 3_000,
     overtime: 10,
     rate: 20,
     getWage: function () {
       return this.baseSalary + this.overtime * this.rate;
     },
   };
   console.log("employee.getWage() : ", employee.getWage());

   //ES6引入：class
   class Employee {
     constructor(baseSalary, overtime, rate) {
       this.baseSalary = baseSalary;
       this.overtime = overtime;
       this.rate = rate;
     }

     getWage() {
       return this.baseSalary + this.overtime * this.rate;
     }
   }

   const emp = new Employee(3000, 10, 20);
   console.log("emp.getWage() : ", emp.getWage());
   ```

   - 通过封装，`baseSalary`、`overtime` 和 `rate` 成为 `Employee` 对象的属性，而 `getWage` 成为其方法。这样，函数不需要参数，因为数据已经封装在对象内部。

2. 抽象

   抽象通过隐藏复杂的实现，只暴露出简单的接口，让使用者无需关心内部实现细节。

   ```js
   class DVDPlayer {
     play() {
       // ...复杂逻辑
       console.log("DVD is playing");
     }
   }

   const player = new DVDPlayer();
   player.play(); // 简单调用，内部的实现细节被隐藏
   ```

   - 在使用 `DVDPlayer` 时，用户只需关心如何调用 `play` 方法，而不必了解播放器内部的复杂操作。

3. 继承

   继承允许子类从父类继承属性和方法，从而避免重复定义相似的代码。

   ```js
   class HTMLElement {
     constructor(hidden, innerHTML) {
       this.hidden = hidden;
       this.innerHTML = innerHTML;
     }

     click() {
       console.log("Element clicked");
     }
   }

   class TextBox extends HTMLElement {
     constructor(hidden, innerHTML, placeholder) {
       super(hidden, innerHTML);
       this.placeholder = placeholder;
     }
   }

   const textbox = new TextBox(false, "Hello", "Enter text...");
   textbox.click(); // 继承父类方法
   console.log(textbox.placeholder); // 访问子类属性
   ```

   - `TextBox` 类继承了 `HTMLElement` 类的属性和方法，避免了重复代码。

4. 多态

   多态让不同的对象可以调用相同的方法，但每个对象的方法行为不同，简化了代码。

   ```js
   class Circle {
     render() {
       console.log("Rendering a circle");
     }
   }
   class Square {
     render() {
       console.log("Rendering a square");
     }
   }
   function renderShape(shape) {
     shape.render(); // 无需关心对象的具体类型
   }
   const circle = new Circle();
   const square = new Square();
   renderShape(circle); // Rendering a circle
   renderShape(square); // Rendering a square
   ```

   - `renderShape` 方法不需要关心传入对象的类型，只需调用 `render` 方法，具体实现由对象自身定义。

## 创建对象

> **简述**：在 JavaScript 中，创建对象有不同的方式，包括使用对象字面量、工厂函数、构造函数，以及 ES6 引入的`class`。每种方法都有其特点，适用于不同的情况。掌握这些方法对编写高效、可维护的代码至关重要。

**知识树**

1. 对象字面量（Object Literal）
   - 用 `{}` 定义对象。
   - 对象包含属性和值，可以是基本数据类型或方法（函数）。
2. 工厂函数（Factory Function）
   - 定义一个普通函数，返回一个新对象。
   - 适用于需要重复创建多个相似对象的场景。
3. 构造函数（Constructor Function）
   - 使用 `this` 关键字创建对象，并通过 `new` 关键字调用。
   - 与类（class）类似，构造函数是创建实例的传统方法。
4. 工厂函数与构造函数的对比
   - 两者都可以用来创建对象，但语法和行为有所不同。
   - 工厂函数通过返回对象创建新实例；构造函数通过 `new` 关键字实例化对象。
5. 类（class）
   - 引入于 ES6，`class` 是一种更简洁的语法糖，用来创建构造函数。
   - `class` 提供了清晰的结构，使代码更具可读性，同时也支持继承和其他面向对象编程的特性。
6. class 与构造函数的对比
   - `class` 提供了更清晰的对象结构，使得代码更加简洁和易读。与传统的构造函数不同，`class` 语法支持更多面向对象的特性，如继承（`extends`）、静态方法（`static`）等。
   - 构造函数依旧在某些项目中使用，但 `class` 是推荐的现代方式，尤其是在 ES6 及以上的 JavaScript 版本中。

**代码示例**

1. 对象字面量

   使用对象字面量语法创建对象，适合对象属性和方法简单的场景。

   ```js
   const circle = {
     radius: 5,
     location: { x: 0, y: 0 },
     draw: function () {
       console.log("Drawing a circle");
     },
   };

   circle.draw(); // 输出 "Drawing a circle"
   ```

   - 对象字面量是最简单的创建对象的方式，其中 `radius` 和 `location` 是属性，`draw` 是方法。

2. 工厂函数

   使用工厂函数创建对象，适合需要根据不同参数生成多个相似对象的情况。

   ```js
   function createCircle(radius) {
     return {
       radius: radius,
       draw: function () {
         console.log("Drawing a circle");
       },
     };
   }

   const circle1 = createCircle(5);
   const circle2 = createCircle(10);
   circle1.draw(); // 输出 "Drawing a circle"
   circle2.draw(); // 输出 "Drawing a circle"
   ```

   - `createCircle` 是一个工厂函数，它返回一个包含属性和方法的对象。
   - 每次调用 `createCircle` 都能创建一个新的圆对象。

3. 构造函数

   使用构造函数和 `new` 关键字创建对象，适用于需要创建具有相同结构但不同属性的多个实例。

   ```js
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("Drawing a circle");
     };
   }

   const circle1 = new Circle(5);
   const circle2 = new Circle(10);
   circle1.draw(); // 输出 "Drawing a circle"
   circle2.draw(); // 输出 "Drawing a circle"
   ```

   - `Circle` 是一个构造函数，`this` 关键字将其绑定到新创建的对象上。
   - 使用 `new` 关键字时，JavaScript 会自动创建一个空对象，并将 `this` 绑定到该对象上，返回该对象。

4. class（类）

   `class` 提供了一个更现代、简洁的方式来创建对象。它是 ES6 引入的一个语法糖，使得构造函数更具可读性，并支持继承和其他面向对象的特性。

   ```js
   class Circle {
     constructor(radius) {
       this.radius = radius;
     }
     draw() {
       console.log("Drawing a circle");
     }
   }
   const circle1 = new Circle(5);
   const circle2 = new Circle(10);
   circle1.draw(); // 输出 "Drawing a circle"
   circle2.draw(); // 输出 "Drawing a circle"
   ```

   - 使用 `class`，可以定义构造函数 `constructor` 和实例方法 `draw`。
   - `new Circle(5)` 创建了一个新的 `Circle` 实例，且通过 `this.radius` 绑定了对象的属性。

## `Constructor`

> 简述：在 JavaScript 中，每个对象都有一个称为 `constructor` 的属性，这个属性引用了用于创建该对象的构造函数。通过了解构造函数的工作原理，可以更好地理解对象是如何在 JavaScript 中被实例化的。

**知识树**

1. constructor 属性
   - 每个对象都有一个 `constructor` 属性。
   - `constructor` 引用的是用于创建该对象的构造函数。
2. 构造函数的作用
   - 构造函数是用来创建对象的函数。
   - 使用构造函数时，JavaScript 引擎会创建并返回一个新对象。
3. 内置构造函数
   - `Object`：用于创建普通对象。
   - `String`：用于创建字符串对象。
   - `Boolean`：用于创建布尔对象。
   - `Number`：用于创建数字对象。
4. 字面量与构造函数的差异
   - 字面量语法（如 `[]`, `{}`, `""`, `true`, `42`）通常比使用构造函数更简洁。
   - 构造函数语法（如 `new Object()`, `new Boolean()`）在实际编码中不常用。

**代码示例**

1. 构造函数的基本概念

   ```js
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("Drawing a circle");
     };
   }

   let circle = new Circle(5);
   console.log(circle.constructor); // Circle
   ```

   - `circle.constructor` 返回的是 `Circle` 函数，说明该对象是通过 `Circle` 构造函数创建的。

2. 对象字面量与构造函数

   ```js
   let obj = {};
   console.log(obj.constructor); // Object
   ```

   - 在使用对象字面量时，内部实际上是通过 `new Object()` 创建的。

3. 内置构造函数

   ```js
   let str = new String("Hello");
   console.log(str.constructor); // String
   ```

   - `new String()` 是通过构造函数创建一个字符串对象，`constructor` 返回 `String`。

4. 使用字面量的简洁性

   ```js
   let bool = true;
   console.log(bool.constructor); // Boolean
   ```

   - 使用字面量（如 `true`）更加简洁，而无需使用 `new Boolean()`。

## 函数是对象

> **简述**：在 JavaScript 中，函数不仅仅是用来执行任务的代码块，它们本质上也是对象。这意味着函数不仅可以有执行代码，还可以拥有属性和方法。

**知识树**

1. 函数是对象
   - 函数本身是 JavaScript 中的对象，可以拥有属性和方法。
2. 函数的成员
   - 每个函数都有一些默认的属性和方法，例如 `name`、`length`、`call`、`bind` 和 `apply`。
3. 函数的构造器
   - 函数的构造器是 `Function`，它用于在 JavaScript 内部创建函数对象。
4. 函数的方法
   - `call()`：调用函数，第一个参数明确指定 `this`，后续参数传入该函数。
   - `apply()`：与 `call()` 类似，但以数组形式传递参数。
   - `bind()`：返回一个绑定了特定 `this` 值的新函数，常用于函数柯里化和绑定事件处理程序。

**代码示例**

1. 函数是对象

   JavaScript 中的函数实际上是对象，可以拥有属性和方法。

   ```js
   function Circle(radius) {
     this.radius = radius;
     this.draw = function () {
       console.log("Drawing a circle");
     };
   }

   const circle = new Circle(5);

   console.log(Circle.name); // 输出 "Circle"，函数的名称
   console.log(Circle.length); // 输出 1，函数的参数个数
   console.log(Circle.constructor); // 输出 Function，指向 Function 构造器
   ```

   - `Circle` 是一个函数对象，`name` 和 `length` 是它的属性，`constructor` 属性指向创建该函数的构造器 `Function`。

2. 使用 `Function` 构造函数

   可以使用 `Function` 构造函数动态创建函数对象。

   ```js
   const Circle = new Function(
     "radius",
     `
     this.radius = radius;
     this.draw = function () {
       console.log("Drawing a circle");
     };
   `
   );

   const circle = new Circle(5);
   circle.draw(); // 输出: "Drawing a circle"
   ```

   - 通过 `Function` 构造函数动态创建的 `Circle` 函数，可以像普通函数一样使用 `new` 关键字来创建对象。

3. `call` 、`apply` 和 `bind` 方法

   `call`、`apply` 和 `bind` 都是 JavaScript 中的函数方法，它们用于修改函数的 `this` 上下文。

   ```js
   function greet(greeting, punctuation) {
     console.log(`${greeting}, ${this.name}${punctuation}`);
   }
   const person = { name: "John" };
   // 使用 call：直接传递参数
   greet.call(person, "Hello", "!"); // 输出: "Hello, John!"
   // 使用 apply：以数组的形式传递参数
   greet.apply(person, ["Hi", "."]); // 输出: "Hi, John."
   // 使用 bind：返回一个新函数，绑定了指定的 this 和参数
   const sayHi = greet.bind(person, "Hello", "!");
   sayHi(); // 输出: "Hello, John!"
   ```

   - `call()`：直接调用函数，参数依次传入。
   - `apply()`：与 `call()` 类似，区别在于参数传递形式为数组。
   - `bind()`：不会立即执行函数，而是返回一个绑定了特定 `this` 的新函数，常用于事件处理。

## 值类型与引用类型

> **简述**：在 JavaScript 中，所有数据类型可以分为两大类：值类型（又称基本类型）和引用类型。理解这两类数据的行为差异是掌握 JavaScript 内存管理、函数调用以及对象操作的基础。值类型的数据直接存储在变量中，而引用类型的数据则存储的是指向数据的引用。

**知识树**

1. 值类型（基本类型）
   - 包括：`number`、`string`、`boolean`、`symbol`、`null`、`undefined`。
   - 值类型的数据是直接存储在变量中的。当复制一个值类型的变量时，实际是将它的值复制到另一个变量中，两个变量之间相互独立。
2. 引用类型（对象类型）
   - 包括：`object`、`array`、`function`。
   - 引用类型的数据存储的是数据在内存中的地址。当复制一个引用类型的变量时，复制的是该对象的内存地址，而不是对象的副本。多个变量会指向同一个对象，修改其中一个变量的内容会影响到其他变量。
3. 值类型与引用类型的行为差异
   - 值类型：复制时复制的是值，两个变量互不影响。
   - 引用类型：复制时复制的是地址（引用），多个变量指向同一个对象，修改其中一个变量会影响到其他变量。

**代码示例**

1. 值类型的行为

   在值类型中，变量存储的是数据的值。复制一个值类型的变量时，两个变量会互不影响。

   ```js
   let x = 10;
   let y = x; // 复制 x 的值到 y
   y = 20; // 修改 y 的值
   console.log(x); // 输出 10，x 不受 y 的影响
   console.log(y); // 输出 20，y 的值已被修改
   ```

   - 在这个例子中，`x` 和 `y` 存储的是值。赋值操作只是复制了值，因此 `x` 和 `y` 是独立的，修改一个不会影响另一个。

2. 引用类型的行为

   在引用类型中，变量存储的是数据的内存地址。复制一个引用类型的变量时，复制的是该对象的内存地址，两个变量指向同一个对象。

   ```js
   let obj1 = { value: 10 };
   let obj2 = obj1; // 复制 obj1 的引用
   obj2.value = 20; // 修改 obj2 的属性
   console.log(obj1.value); // 输出 20，obj1 和 obj2 指向同一个对象
   console.log(obj2.value); // 输出 20，obj2 修改了共享的对象
   ```

   - 在这个例子中，`obj1` 和 `obj2` 指向同一个对象。修改 `obj2` 的属性会影响到 `obj1`，因为它们共享同一个内存地址。

3. 函数中的值类型与引用类型行为

   函数参数的传递也受到值类型与引用类型的影响。值类型的参数在函数内部是独立的，而引用类型的参数则会直接影响外部对象。

   - 值类型参数：

     ```js
     function increase(number) {
       number += 1;
     }

     let num = 10;
     increase(num);
     console.log(num); // 输出 10，num 没有被修改
     ```

     - 在这里，`num` 是一个基本类型（值类型），当它传递给函数时，函数内部的 `number` 是一个独立的副本，修改 `number` 不会影响到外部的 `num`。

   - 引用类型参数：

     ```js
     function increaseObject(obj) {
       obj.value += 1;
     }
     let myObject = { value: 10 };
     increaseObject(myObject);
     console.log(myObject.value); // 输出 11，myObject 的值被修改
     ```

     - 在这个例子中，`myObject` 是引用类型（对象）。传递给函数时，实际上是传递了对象的引用，因此在函数内部修改 `obj` 会直接影响到外部的 `myObject`。

## 属性操作

> **简述**：在 JavaScript 中，对象是动态的，这意味着我们可以在对象创建后随时向其添加新属性，或删除已有属性。这种灵活性使得 JavaScript 与其他语言（如 C# 或 Java）相比更加简洁，特别是在处理动态数据时。理解如何在 JavaScript 中操作对象的属性（如添加、删除和动态访问）是非常重要的。

**知识树**

1. 动态对象
   - JavaScript 中的对象在创建后是动态的，可以随时添加和删除属性。
   - 这使得 JavaScript 适用于需要频繁修改数据的场景。
2. 属性访问方式
   - 点表示法：直接使用 `object.property` 访问对象的属性，简洁且易读。
   - 括号表示法：通过 `object['property']` 动态访问属性，适用于属性名不确定或不符合标识符规则的情况。
3. 删除对象属性
   - 使用 `delete` 操作符可以删除对象中的某个属性，适用于需要移除不必要的属性的情况。
4. 实际应用场景
   - 动态添加属性（如生成的 token）
   - 动态删除属性（如移除敏感数据）

**代码示例**

1. 动态添加属性

   JavaScript 中的对象是动态的，可以在创建后随时添加新属性。

   ```js
   function Circle(radius) {
     this.radius = radius;
   }
   const circle = new Circle(5);
   circle.location = { x: 1, y: 1 }; // 动态添加 location 属性
   console.log(circle); // 输出：Circle { radius: 5, location: { x: 1, y: 1 } }
   ```

2. 使用点表示法访问属性

   点表示法是访问对象属性最常见和简洁的方式。

   ```js
   console.log(circle.location); // 输出：{ x: 1, y: 1 }
   ```

   - 使用点表示法直接访问 `circle` 对象的 `location` 属性，简洁且易于理解。

3. 使用括号表示法访问属性

   当属性名动态生成或不符合标识符规则时，括号表示法非常有用。

   ```js
   circle["center-location"] = { x: 0, y: 0 };
   console.log(circle["center-location"]); // 输出：{ x: 0, y: 0 }
   ```

   当属性名包含特殊字符（如连字符）时，点表示法就不能使用了，这时只能使用括号表示法。

## 遍历对象属性

> **简述**：在 JavaScript 中，遍历对象的属性和方法是常见的操作。我们可以使用不同的方式来访问、过滤和验证对象的属性。常见的方式包括 `for...in` 循环、`Object.keys()` 方法以及 `in` 操作符。理解这些工具如何工作，能帮助我们更灵活地操作对象，特别是在处理动态数据时。

**知识树**

1. `for...in` 循环
   - 用于遍历对象的所有可枚举属性（包括方法）。
   - 循环时返回的是对象的 键（key）。
2. `for...of` 循环
   - 仅用于遍历 可迭代对象（如数组、字符串、Map 等），不能直接用于对象。
   - 结合 `Object.keys()` 或 `Object.entries()` 可用于对象。
3. `Object.keys()` 方法
   - 返回对象的所有键，以字符串数组的形式。
   - 可以与 `for...of` 循环结合使用。
4. `Object.entries()` 方法
   - 返回对象的所有属性的 键值对，每对以数组形式存储。
   - 结合 `for...of` 循环，可以遍历对象的键值对。
5. `in` 操作符
   - 检查对象是否具有某个属性或方法。

**代码示例**

1. 使用 `for...in` 遍历对象的属性

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 遍历对象的属性
   for (let key in circle) {
     console.log(key, circle[key]); // 输出: 10, function draw()
   }

   // 遍历对象的非方法属性
   for (let key in circle) {
     if (typeof circle[key] !== "function")
       console.log(key, circle[key]); // 输出: 10, function draw()
   }
   ```

2. 使用 `for...of` 与 `Object.keys()` 结合

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 Object.keys() 获取所有键并与 for...of 循环结合
   for (let key of Object.keys(circle)) {
     console.log(key); // 输出: radius, draw
   }
   ```

3. 使用 `Object.entries()` 遍历对象的键值对

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };

   // 使用 Object.entries() 获取所有键值对并遍历
   for (let [key, value] of Object.entries(circle)) {
     console.log(key, value); // 输出: radius 10, draw function draw()
   }
   ```

4. 使用 `in` 操作符检查属性是否存在

   ```js
   let circle = {
     radius: 10,
     draw() {
       console.log("Drawing a circle");
     },
   };
   console.log("radius" in circle); // 输出: true
   console.log("color" in circle); // 输出: false
   ```

## 抽象和封装

> **简述**：在面向对象编程中，抽象和封装是非常重要的概念。抽象是指将复杂的实现细节隐藏起来，仅暴露出核心的、简单的接口。而封装则是将数据和操作数据的行为（方法）绑定在一起，避免外部直接修改对象的状态。它们共同提高了代码的安全性、可维护性和可扩展性。

**知识树**

1. 抽象
   - 将复杂的实现细节隐藏，仅暴露出对象的核心功能。
   - 外部与对象的交互仅通过简洁的接口，而不需要了解内部的实现。
2. 封装
   - 将数据和操作数据的行为组合在一起，避免外部代码直接访问对象的内部状态。
   - 通过访问控制（如私有属性和方法），保护对象的状态不被随意修改。
3. 抽象和封装的优势
   - 在实际应用中，封装和抽象通常是一起使用的。封装确保对象内部的安全性，抽象确保外部代码能够简洁、高效地与对象交互。
4. 抽象和封装的实现
   - 封装：通过函数、对象的方法和闭包将内部状态隐藏，提供公共接口进行访问。
   - 抽象：通过简化的接口与隐藏复杂业务逻辑，将外部与对象复杂内部实现隔离。

**代码示例**

1. 封装和抽象：简化对象的交互

   在这个例子中，我们将 `Circle` 对象的 `defaultLocation` 属性和 `computeOptimalLocation` 方法封装在对象内部，只暴露 `draw` 方法供外部使用。

   ```js
   function Circle(radius) {
     this.radius = radius;

     // 私有属性，不应该被外部直接修改
     let defaultLocation = { x: 0, y: 0 }; // 通过闭包封装，外部无法直接访问

     // 公共方法，外部可以通过该方法与对象交互
     this.draw = function () {
       console.log(
         `Drawing a circle at location: x = ${defaultLocation.x}, y = ${defaultLocation.y}`
       );
       this.computeOptimalLocation(); // 内部调用，避免外部直接访问
     };

     // 私有方法，外部无法访问，只供内部使用
     function computeOptimalLocation() {
       console.log("Computing optimal location...");
     }

     // 提供公共接口访问半径
     this.getRadius = function () {
       return this.radius;
     };
   }

   const circle = new Circle(5);
   console.log(circle.getRadius()); // 输出 5
   circle.draw(); // 输出：Drawing a circle at location: x = 0, y = 0 和 Computing optimal location...
   ```

   - 在这个代码中，`defaultLocation` 和 `computeOptimalLocation` 被封装在 `Circle` 对象内部，外部无法直接修改它们。外部只能通过 `draw` 方法与对象交互。

2. 通过封装保护数据

   如果没有封装，外部代码可能修改对象的属性，导致对象状态不一致。例如，修改 `defaultLocation` 会导致不可预测的行为。

   ```js
   circle.defaultLocation = false; // 修改了内部的 defaultLocation 属性
   console.log(circle.defaultLocation); // 输出 false，可能导致不一致的行为
   ```

3. 抽象：隐藏复杂性

   假设 `computeOptimalLocation` 方法现在需要一个参数 `factor`。如果我们将其暴露给外部，所有调用该方法的地方都需要传递新的参数，这增加了外部代码的复杂度。

   ```js
   circle.computeOptimalLocation(5); // 需要传递新的参数
   ```

   但如果 `computeOptimalLocation` 被封装为私有方法，外部无需关心其内部的实现，只需要调用公开接口 `draw` 即可。

   ```js
   this.draw = function () {
     console.log(`Drawing a circle with radius ${this.radius}`);
     // 内部处理：外部无需更改调用代码
     this.computeOptimalLocation(5); // 内部逻辑可以随时调整
   };
   ```

## `Getter`&`Setter`

> **简述**：在 JavaScript 中，`Object.defineProperty` 方法允许我们动态地为对象添加属性，并定义该属性的行为。通过使用 getter 和 setter，我们可以控制属性的访问和修改，同时进行数据验证，确保对象始终处于有效的状态。getter 用于读取属性值，而 setter 用于修改属性值，并可以在修改时加入额外的验证逻辑。

**知识树**

1. `Object.defineProperty` 方法
   - 用于在对象上定义新属性，或者修改现有属性的行为。
   - 可以使用 getter 和 setter 来定义属性的读写行为。
2. getter 和 setter
   - getter：用于获取属性的值，能够控制如何返回该属性值。
   - setter：用于设置属性的值，可以在设置时进行验证或转换。
3. 只读属性
   - 通过只定义 getter，可以创建只能读取而无法修改的属性。
4. 带验证的 setter
   - 使用 setter 时，可以加入验证逻辑，在设置属性值之前检查数据是否有效。

**代码示例**

1. 只读属性：使用 `Object.defineProperty` 定义 getter

   假设我们希望将 `defaultLocation` 设置为只读，不能直接修改其值。我们只定义 getter，而不定义 setter。

   ```js
   "use strict";

   function Circle(radius) {
     this.radius = radius;

     let defaultLocation = { x: 0, y: 0 };

     Object.defineProperty(this, "defaultLocation", {
       get: function () {
         return defaultLocation;
       },
     });
   }

   const circle = new Circle(5);
   console.log(circle.defaultLocation); // 输出：{ x: 0, y: 0 }

   // 尝试修改 defaultLocation 会导致错误
   try {
     circle.defaultLocation = { x: 100, y: 100 }; // TypeError: Cannot set property defaultLocation of #<Circle> which has only a getter
   } catch (e) {
     console.log(e.message); // 输出："Cannot set property defaultLocation of #<Circle> which has only a getter"
   }
   ```

2. 使用 `Object.defineProperty` 定义 getter 和 setter

   假设我们希望提供一个 `defaultLocation` 属性，同时在尝试修改时加入验证逻辑。

   ```js
   "use strict";
   function Circle(radius) {
     this.radius = radius;
     // 私有变量，不能直接被外部访问
     let defaultLocation = { x: 0, y: 0 };
     // 使用 Object.defineProperty 定义 getter 和 setter
     Object.defineProperty(this, "defaultLocation", {
       // getter: 只允许读取 defaultLocation
       get: function () {
         return defaultLocation;
       },
       // setter: 在设置 defaultLocation 时进行验证
       set: function (value) {
         if (!value.x || !value.y) {
           throw new Error("Invalid location");
         }
         defaultLocation = value;
       },
     });
   }
   const circle = new Circle(10);
   console.log(circle.defaultLocation); // 输出：{ x: 0, y: 0 }
   // 尝试修改 defaultLocation，若传入无效值则抛出错误
   try {
     circle.defaultLocation = { x: null, y: 5 }; // 抛出错误
   } catch (e) {
     console.log(e.message); // 输出："Invalid location"
   }
   // 正确修改 defaultLocation
   circle.defaultLocation = { x: 10, y: 10 };
   console.log(circle.defaultLocation); // 输出：{ x: 10, y: 10 }
   ```

## Ex: Stopwatch Object

> **要求**：设计一个可以模拟时钟功能的 `stopwatch` 对象。该对象应包含以下功能：
>
> 1. `start`：开始计时。
> 2. `stop`：停止计时。
> 3. `reset`：重置计时器。
> 4. `duration`：读取计时器的时长，只有在停止计时后才能访问。

**解法**：

1. 使用构造函数创建一个 `Stopwatch` 对象。
2. 定义私有变量 `startTime`、`endTime`、`running` 和 `duration`，用于存储时钟的状态和持续时间。
3. 提供公共方法：
   - `start`：开始计时，且确保不能重复启动。
   - `stop`：停止计时，且确保只能在计时已开始时停止。
   - `reset`：重置计时器状态。
4. 使用 getter 提供只读属性 `duration`，用于访问已记录的计时时长。

**代码**

```js
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
```

# 原型

> 原型和原型继承章节，moth讲的一般，我要重新梳理
>
> 首先是讲清楚继承的概念
>
> 1. 继承的概念
> 2. 原型是什么
> 3. 多级继承的概念
> 4. 自定义/描述符
> 5. 构造器的prototype属性，等于创建对象的`__proto__`属性
> 6. 通过构造器的prototype属性，创建成员变量，先通过临时变量引入，并且添加的位置没有影响
> 7. 遍历属性，`Object.keys`只能遍历instance属性，`in`方法可以遍历所有属性，JS中一般将instance属性，称之为own属性，有方法hasOwnProperty来判断是否是own属性
> 8. 避免修改内置的对象
> 9. 继承，具体操作

## 继承

> **简述**：继承是面向对象编程（OOP）中的核心概念，它使得一个对象能够继承另一个对象的属性和方法，从而实现代码复用。
>
> 
>
> *尽管 JavaScript 在 ES6 中引入了类的概念，但 JavaScript 本质上是基于原型继承的，类的概念只是对原型继承的一种语法糖。*
>
> 
>
> 这节将重点讨论原型继承，类的概念将在后续讲解中详细介绍。

**知识树**

1. 继承的概念
   - 继承是子类从父类获取属性和方法的一种机制，将公共属性和方法放入父类中，避免了重复的代码实现。
   - 继承的关系通过子类继承父类来实现，子类是父类的一种特殊类型。例如，`Circle IS-A Shape`，表示圆形是形状的一种类型。
   - 父类被称为基类或父类（`Base`/`Super`/`Parent`）
   - 子类为派生类或子类（`Derived`/`Sub`/`Child`）

## 原型和原型继承

> **简述**：在 JavaScript 中，我们没有传统的类（class）机制，而是通过对象和原型（prototype）来实现继承。每个对象都与另一个对象（它的原型）相关联，继承其属性和方法。这种机制被称为原型继承，它允许对象共享属性和方法，而不需要直接复制数据。理解原型和原型继承是掌握 JavaScript 面向对象编程的关键。
>
> **这一节注意代码示例**

**知识树**

1. 原型（Prototype）

   - 每个对象都有一个原型（parent），它是该对象的父对象，包含对象继承的属性和方法。
2. 原型继承（Prototypal Inheritance）

   - 当对象访问某个属性或方法时，JavaScript 引擎首先在该对象自身查找，如果找不到，则查找对象的原型，直到找到或到达 `Object` 根对象。
   - 这种机制使得多个对象可以共享相同的方法和属性，而不需要复制。
3. 原型链（Prototype Chain）
   - 通过原型连接的对象链。当访问对象的属性时，JavaScript 会沿着原型链查找，直到找到为止。
4. JavaScript 根对象（ObjectBase）

   - 所有对象的原型链最终都会指向一个共同的祖先对象 `Object`，称为 `ObjectBase`，它是所有对象的根对象。
   - `Object` 没有原型，它是原型链的终点。
5. 获取原型
   - 使用 `Object.getPrototypeOf` 来获取对象的原型。`__proto__` 也可以用于查看和修改对象的原型，但它是过时的属性。
6. 小结
   - 通俗来说，原型就是一个普通的对象

**代码示例**

1. 基本的原型概念：对象和原型

   每个 JavaScript 对象都有一个原型。

   ```js
   const x = {};  // 创建一个空对象
   console.log(x);
   // {}
   // [[Prototype]]: Object
   
   // > constructor: f Object()
   // > hasOwnProperty: f hasOwnProperty()
   // > isPrototypeOf: f isPrototypeOf()
   // > propertyIsEnumerable: f propertyIsEnumerable()
   // > toLocaleString: f toLocaleString()
   // > toString: f toString()
   // > valueOf: f valueOf()
   // > __defineGetter__: f __defineGetter__()
   // > __defineSetter__: f __defineSetter__()
   // > __lookupGetter__: f __lookupGetter__()
   // > __lookupSetter__: f __lookupSetter__()
   // > __proto__: Object
   
   //   > constructor: f Object()
   //   > hasOwnProperty: f hasOwnProperty()
   //   > isPrototypeOf: f isPrototypeOf()
   //   > propertyIsEnumerable: f propertyIsEnumerable()
   //   > toLocaleString: f toLocaleString()
   //   > toString: f toString()
   //   > valueOf: f valueOf()
   //   > __defineGetter__: f __defineGetter__()
   //   > __defineSetter__: f __defineSetter__()
   //   > __lookupGetter__: f __lookupGetter__()
   //   > __lookupSetter__: f __lookupSetter__()
   //     __proto__: null
   
   // > get __proto__: f __proto__()
   // > set __proto__: f __proto__()
   // > get __proto__: f __proto__()
   // > set __proto__: f __proto__()
   ```

   - `[[Prototype]]` 是一个内部属性：
     - `[[Prototype]]` 是 JavaScript 引擎内部使用的一个隐式属性，它并不直接暴露给开发者。这是 JavaScript 引擎用来实现原型链的机制。它指向该对象的原型对象（通常是 `Object.prototype`，除非修改了原型）。
     - 在这里，`[[Prototype]]` 指向了 `Object`，意味着对象 `x` 从内置的 `Object` 原型继承属性和方法。`Object` 原型包括像 `hasOwnProperty`、`toString` 和 `toLocaleString` 这样的方法。
   - `__proto__` 是外部可访问的属性：
     - `__proto__` 是 JavaScript 对象暴露给开发者的一个标准属性。虽然它提供了对 `[[Prototype]]` 的访问，但它是一个显式的、用于操作对象原型链的接口。你可以通过 `obj.__proto__` 来查看或修改对象的原型。
     - 当你看到 `__proto__: Object` 时，这意味着 `x` 的原型是 `Object` 原型，这与 `[[Prototype]]: Object` 的意思是一样的。不过，`__proto__` 还可以用于修改原型链，比如通过给它赋值一个新的对象。

2. 基本的原型概念：对象和原型

   当我们在对象上查找属性或方法时，如果该对象本身没有，就会查找它的原型。

   ```js
   const x = {};  // 创建一个空对象
   console.log(x.toString);  // 访问继承自 Object.prototype 的 toString 方法
   ```

3. 使用 `Object.getPrototypeOf` 获取原型

   使用 `Object.getPrototypeOf` 方法，我们可以安全地获取对象的原型，而不是直接访问过时的 `__proto__`。

   ```js
   const x = {}; // 创建一个空对象
   console.log(Object.getPrototypeOf(x)); // 输出 Object.prototype
   console.log(Object.prototype); // 和上一行输出一致
   console.log(Object.getPrototypeOf(x) === Object.prototype); // true
   // 一般不直接在代码中使用__proto__，这里使用是为了帮助理解
   console.log(Object.getPrototypeOf(x) === x.__proto__); // true
   // 父对象相同时，使用该函数获取prototype，得到的值完全一致
   const y = {}; // 创建一个空对象
   ```

4. 原型链：多个对象共享原型

   每个对象的原型都指向另一个对象，直到原型链的顶端（`Object.prototype`）。多个对象可以共享相同的原型，从而实现继承。

   ```js
   const x = {};
   const y = {};
   console.log(
     Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
   ); // true
   ```

   - `x` 和 `y` 都继承自 `Object.prototype`，它们共享相同的原型。

## 多级继承

## 属性描述符

## 相同

# 技巧

> 高级

- 严格模式
  在代码顶部输入`"use strict";`可以开启严格模式，这是一种好的编程习惯
  ```js
  "use strict";
  ```

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
