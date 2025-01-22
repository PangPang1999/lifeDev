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

## 动态类型基础

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

**解法**：

1. Step1：计算 `marks` 数组的平均分。
   - 使用循环累加 `marks` 中的分数，然后将总和除以数组长度得到平均值。
   - 抽取一个通用函数 `calculateAverage` 来计算任意数组的平均值。
2. Step2：根据平均分映射到对应的等级。
   - 使用一系列的条件判断语句（`if`）返回对应的等级。
   - 优化代码逻辑，减少冗余条件。

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

## Ex11 检查并打印素数

> **要求**：实现两个函数：
>
> 1. `isPrime(number)`：判断一个数字是否是素数。如果是素数，返回 `true`，否则返回 `false`。
> 2. `showPrimes(limit)`：打印从 `2` 到指定 `limit` 范围内的所有素数。

**解法**：

1. Step1：实现 `isPrime` 函数
   - 使用循环从 `2` 到 `number-1` 检查是否存在能整除 `number` 的因数。
   - 如果找到因数，返回 `false`，否则返回 `true`。
2. Step2：实现 `showPrimes` 函数
   - 遍历从 `2` 到 `limit` 的所有数字。
   - 对每个数字调用 `isPrime` 函数，若为素数则打印。

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

- 提升（Hoisting）：_函数声明会被提升_。这意味着函数可以在声明之前被调用。

  ```JS
  walk(); // 正常执行
  function walk() {
    console.log("walk");
  }
  ```

- 特点：语法简洁，且在作用域中有效，通常用来定义全局或模块级别的函数。

**函数表达式（Function Expression）**

函数表达式是通过将一个函数赋值给变量或常量来定义的函数。函数表达式可以是匿名函数（没有名字）或具名函数（有名字）。

- 匿名函数表达式：这种写法适用于不需要在函数内部递归调用的场景。

- 命名函数表达式：具有一个局部名称，这种写法的优势是可以在函数内部使用 `c()` 进行递归调用，也能在调试时提供更好的信息。

- 无提升（No Hoisting）：必须在定义之后调用

  ```js
  a(); // 报错
  let a = function () {
    console.log("run");
  };
  ```

- 函数表达式的引用

  通过多个变量引用同一个函数。所有引用的变量指向同一个内存中的函数对象。

## 动态类型（2）

> JavaScript 是一种动态语言，函数可以接受任意数量的参数，并且可以在函数执行时动态地访问这些参数。

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // NaN，第二个参数为undefined，1 + undefined 得到 NaN
console.log(sum(1, 2, 3, 4, 5)); //3，多个参数，只读取对应参数位置的参数
```

## 参数对象 (`arguments`)

> 在 JavaScript 中，`arguments` 是一个特殊的对象，它包含了传递给函数的所有参数。虽然它看起来像一个数组，但它实际上并不是一个数组，而是一个类数组对象。它可以通过 `arguments` 来访问所有传递给函数的参数，并且可以用于处理可变数量的参数。

```js
function sum() {
  let total = 0;
  console.log(arguments);
  for (let value of arguments) {
    total += value;
    console.log(value);
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
```

- `arguments` 是一个**类数组**对象，包含了传递给函数的所有参数。它没有数组的一些方法（例如 `forEach`、`map` 等）。通过 `for...of` 循环，我们可以遍历 `arguments` 对象并对每个值进行求和。
- 在 **箭头函数** 中，不能使用 `arguments` 对象。箭头函数没有自己的 `arguments`，它会继承外部作用域的 `arguments`。
- **`rest` 参数**（`...args`）是更现代的替代方案

## 剩余参数(`...`)

> 剩余参数是 ES6 引入的一项功能，它允许你将一个函数的多余参数收集成一个数组。与传统的 `arguments` 对象不同，`rest` 参数是一个真正的数组，可以直接使用数组方法（如 `reduce`、`map` 等）。

**基本用法**

```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0); // 使用 reduce 求和
}

console.log(sum(1, 2, 3, 4, 5)); // 输出 15
```

- 在这个例子中，`...args` 是一个剩余参数，它将所有传递给 `sum` 函数的参数收集到一个名为 `args` 的数组中。然后，我们使用 `reduce` 方法来对所有数字进行求和。

**应用：计算总价和折扣**

```js
function countMoney(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b, 0); // 计算商品价格总和
  return total * (1 - discount); // 应用折扣并返回最终价格
}

console.log(countMoney(0.1, 20, 30)); // 输出 45
```

- `discount` 是第一个参数，用来表示折扣。
- `...prices` 是剩余参数，它收集所有传入的价格信息并将其存储在数组中。
- 使用 `reduce` 方法计算价格总和，并根据折扣计算最终价格。

**限制：剩余参数必须是最后一个参数**

`rest` 参数必须位于函数的参数列表的最后，否则会抛出语法错误。这是因为它会收集所有剩余的参数，如果你在它之后再添加其他参数，会导致语法上的混乱。

```js
// 错误示范：`...prices` 必须是最后一个参数
// Uncaught SyntaxError: Rest parameter must be last formal parameter
function test(discount, ...prices, p) {
  return null;
}
```

- 在这个错误的示例中，`p` 参数位于剩余参数 `...prices` 后面，导致出现语法错误。为了避免这种错误，应该确保 `rest` 参数始终在函数参数列表的最后。

## 默认值

> 默认值是为函数的参数提供初始值的机制。这样，当调用函数时，如果没有传递某个参数或传递的参数是 `undefined`，则该参数将使用默认值。

**基本用法**

在函数定义中，我们可以为某些参数设置默认值，防止它们为 `undefined`。这种方式比使用逻辑运算符（如 `||`）要更加简洁明了。

```js
function interest(principal, rate = 3.5, year = 5) {
  // rate = rate || 3.5;
  // year = year || 5;

  return ((principal * rate) / 100) * year;
}

console.log(interest(10000)); // 使用默认值：rate = 3.5, year = 5
console.log(interest(10000, undefined, 5)); // 使用默认值：rate = 3.5, year = 5
```

- 在上面的例子中，`rate` 和 `year` 都有默认值
- 如果在调用函数时传递了 `undefined` 作为某个参数的值，那么该参数会使用默认值。如果没有传递该参数，JavaScript 也会使用默认值。

**设置默认值时的注意事项**

最佳实践：当为参数设置默认值时，默认值应当放在参数列表的最后。这样，如果某个参数的默认值被触发，后面的参数也能正确使用默认值。如果将默认值放在中间，可能会导致某些参数不按预期工作。

```js
function test(principal, rate = 3.5, year) {
  return ((principal * rate) / 100) * year;
}

console.log(test(10000, 5)); // NaN
console.log(test(10000, undefined, 5)); // Is ugly
// 应将所有的default vule放在最后
```

- 在上面的 `test` 函数中，`year` 参数没有默认值。如果你调用 `test(10000, 5)`，结果是 `NaN`，因为 `year` 被当作 `undefined`，但它没有默认值。

- 为了提高代码可读性，最好将带有默认值的参数放在最后，或者为所有默认值参数设置默认值。

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
