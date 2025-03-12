> 以学习过 HTML&CSS 为基础

# 入门

## JavaScript 概念

> **简述**：JavaScript 是目前最流行的编程语言之一，它可以用于构建网页、移动应用、游戏等。它最初只能在浏览器中运行，但通过 Node.js 也可以运行在服务器端。JavaScript 遵循 ECMAScript 规范，而 Chrome 开发者工具的 Console 可以用来调试和执行 JavaScript 代码。

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

    - Chrome Dev Tool 的 Console 可以用于调试，其中可以写一些简单 JavaScript 代码。

    ```javascript
    // 试试一行一行的输入到浏览器控制台
    console.log("Hello");
    2 + 2;
    alert("yo");
    ```

## 设置开发环境

> **简述**：在开始学习 JavaScript 之前，需要搭建一个合适的开发环境。在学习过程中，为了避免兼容问题，建议安装各类最新的稳定版本。

1. 安装 Node

    - Mac
        - 安装 homebrew，homebrew 官网：https://brew.sh/
        - 使用 homebrew 安装 node ，控制台运行 `brew install node`
    - windows
        - 手动下载 node，node 官网：https://nodejs.org/en，选择一个LTS版本下载安装

2. 安装 Visual Studio Code

    - 官网：https://code.visualstudio.com/Download

3. 安装 Visual Studio Code 插件

    - Prettier
    - Live Server

4. Chrome

    - https://www.google.com/chrome/dev/next-steps.html?statcb=0&installdataindex=empty&defaultbrowser=0#
    - 点击蓝色的`[click here to retry]`

## 基础代码

> **简述**：编写 JavaScript 代码时，需要注意代码的结构和浏览器的解析顺序。通常，将 `<script>` 标签放在 `<body>` 末尾可以避免页面渲染延迟，同时确保 JavaScript 能够正确操作页面元素。

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
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<script>
			console.log("Hello World"); // 将命令输出到控制台
		</script>
	</body>
</html>
```

## 分离 JS

> **简述**：在开发过程中，将 JavaScript 代码从 HTML 文件中分离出来，有助于提高代码的可维护性和复用性。此外，外部 JS 文件可以被浏览器缓存，从而提升页面的加载性能。

**知识树**

1. JavaScript 代码 分离的优点

    - 更好的代码组织和管理。
    - JavaScript 文件可以被多个 HTML 页面复用。
    - 页面加载性能提升，因为浏览器可以缓存外部 JS 文件。

2. 分离方式

    - 在`<body>`或者`<head>`标签内引用对应的文件

**代码示例**

1. 在`index.html`中引用

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

    - 分离出的 js 文件

        ```js
        console.log("Hello World");
        ```

## Node 环境运行 JS

> **简述**：Node.js 允许在浏览器之外运行 JavaScript 代码，使其可以用于服务器端开发、脚本自动化等。通过命令行工具，可以直接执行 JavaScript 文件。

**运行方式**

1. 打开命令行工具（终端）。

2. 进入包含 JavaScript 文件 (`index.js`) 的目录。

3. 运行以下命令执行 JavaScript 代码：

    ```bash
    node index.js
    ```

4. 预期输出：

    ```bash
    Hello World
    ```

# 基础

## 变量基础

> **简述**：变量（Variables）用于暂时存储数据在计算机的内存中。变量给内存中的存储位置一个名称，使用这个名称可以在后续访问该位置的数据。在 JavaScript 中，**我们使用`let`关键字来声明变量**。在早期，`var` 用得较多，但因为它存在一些问题，现在需要使用 `let`。

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

> **简述**：常量（Constants）是指一旦被赋值就不能再修改的数据。它们用于存储在程序运行过程中不会改变的值。常量提供了代码的可读性和可维护性，防止不小心修改这些值。在 JavaScript 中，我们使用 **`const`** 关键字来声明常量。与变量不同，常量一旦声明并初始化后，不能再赋予新的值，否则会抛出错误。在早期，`var` 用得较多，但因为它存在一些问题，现在需要使用 `let`。

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
    //index.js:2 Uncaught TypeError: Assignment to constant variable.
    ```

## 原始数据类型

> **简述**：原始数据类型（Primitive Types）是 JavaScript 最基本的数据单位，存储的是值本身，而不是引用。JavaScript 提供了五种原始数据类型：字符串（String）、数字（Number）、布尔值（Boolean）、未定义（Undefined）和空值（Null）。这些类型用于表示文本、数值、逻辑状态及变量的特殊状态。

**知识树**

1. 字符串（String）

    - 由字符组成的文本数据，必须使用引号包裹
    - 表示方式：
        - 单引号（`'...'`）
        - 双引号（`"..."`）
        - 反引号（`` `...` ``，模板字符串，后续会单独讲解）

2. 数字（Number）

    - JavaScript 只有一种 `Number` 类型，表示整数和浮点数
    - 特殊值：
        - `Infinity`（正无穷大）、`-Infinity`（负无穷大）
        - `NaN`（Not-a-Number，非法数学运算结果）

3. 布尔值（Boolean）

    - 逻辑判断时使用
    - 只有两个值：`true` 和 `false`
    - 隐式类型转换：
        - 这些值会被转换为 `false`：`0`、`""`（空字符串）、`null`、`undefined`、`NaN`
        - 其他值转换为 `true`

4. 未定义（Undefined）

    - 变量声明但未赋值时，默认值为 `undefined`
    - 访问对象中不存在的属性时，也会返回 `undefined`
    - `undefined` 也可以被显式赋值，但通常不推荐

5. 空值（Null）

    - 代表“空对象引用”
    - `null` 和 `undefined` 的区别：
        - `undefined`：变量存在但没有值
        - `null`：变量有意设为空

6. 历史遗留问题

    - `typeof null === "object"`：JavaScript 早期实现的 bug，至今未修复，主要是为了向后兼容

**代码示例**

1. 字符串

    ```js
    let userName = "Alice";
    let greeting = `Hello, ${userName}!`; // 模板字符串，后续会单独讲解
    ```

    - 字符串可以用不同类型的引号表示，模板字符串支持变量插值

2. 数字

    ```js
    let userAge = 30;
    let pi = 3.14;
    let infinityValue = Infinity;
    let notANumber = NaN;
    ```

    - JavaScript 没有区分整数和浮点数，`NaN` 代表非法数值

3. 布尔值

    ```js
    let isLoggedIn = true;
    let hasPermission = false;
    ```

    - 用于逻辑判断，`true` 和 `false` 是唯一的可能值

4. 未定义

    ```js
    let userFirstName;
    console.log(userFirstName); // undefined
    ```

    - 变量未赋值时默认是 `undefined`

5. 空值

    ```js
    let userFavoriteColor = null;
    console.log(typeof userFavoriteColor); // "object"（历史遗留问题）
    ```

    - `null` 代表“空对象引用”，但 `typeof` 返回 `"object"` 是 JavaScript 的 bug

## 动态类型

> **简述**：JavaScript 是一种 **动态类型（Dynamic Typing）语言**，这意味着变量在声明时**不需要指定类型**，变量的类型**可以在运行时根据赋值动态变化**。
>
> -   **静态语言**（如 Java、C++）：变量的类型在**编译时**就已经固定，声明变量时必须指定类型，且后续不能更改。
> -   **动态语言**（如 JavaScript、Python）：变量的类型在**运行时**根据赋值决定，且可以随时更改。

**知识树**

1. 动态类型的特点

    - 变量不需要指定类型，可随时更改类型。
    - 赋值时，JavaScript 自动推断类型。
    - `typeof` 操作符可用于检查变量的当前类型。

2. 可能带来的问题

    - 由于类型可以随意更改，可能会导致意外的类型错误。
    - 运行时动态类型转换可能会导致隐式类型转换问题（如字符串拼接、数学运算）。

**代码示例**

1. 变量类型的动态变化

    ```js
    let userName = "Alice"; // 初始类型为字符串
    console.log(typeof userName); // "string"

    userName = 6; // 重新赋值为数字
    console.log(typeof userName); // "number"
    ```

    - JavaScript 会根据赋值自动更改变量类型，最初 `userName` 是 `string`，后来变成 `number`。

2. 意外的隐式类型转换

    ```js
    let value = "5" + 2; // 字符串拼接
    console.log(value); // "52"
    console.log(typeof value); // "string"

    let result = "5" - 2; // 数字运算
    console.log(result); // 3
    console.log(typeof result); // "number"
    ```

    - `+` 号会触发字符串拼接，而 `-` 号会触发数学计算，这种隐式类型转换可能导致意外结果。

## 对象基础

> **简述**：对象（Object）是 JavaScript 中的引用类型，用于存储多个相关的属性和数据。对象由键值对（key-value pair）组成，每个键（属性名）都映射到一个特定的值。对象可以存储字符串、数字、布尔值、数组、甚至其他对象，是 JavaScript 中最重要的数据结构之一。

**知识树**

1. 对象创建方式

    - 使用花括号 `{}` 创建对象，这是最常见的方式，称为对象字面量（Object Literal）。

2. 对象属性访问和修改的方式

    - 点 `.` 表示法：最常见的方式，适用于标准属性名。
    - 方括号 `[]` 表示法：适用于动态访问属性，或当属性名包含特殊字符（如空格、数字等）时。
    - 间接访问：使用变量存储属性名，再通过方括号访问。

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

    - 对象由键值对组成，name 和 age 是对象的属性。

2. 对象的属性的访问和修改

    ```js
    // 点 . 表示法
    person.name = "John";
    console.log(person.name); // 输出: John

    // 方括号 [] 表示法
    person["name"] = "Mary";
    console.log(person["name"]); // 输出: Mary

    // 方括号 [] 表示法（间接访问）
    let selection = "name";
    person[selection] = "Pang";
    console.log(person.name); // 输出: Pang
    ```

    - `person.name` 等同于 `person["name"]`，但方括号表示法更灵活，适用于动态属性名。
    - `person[selection] = "Pang"` 等价于 `person["name"] = "Pang"`，这种方式适用于变量存储属性名的情况。

## 数组基础

> **简述**：数组（Array）是 JavaScript 中用于存储有序数据的集合。数组可以包含不同类型的元素，并且支持动态扩展。常见的应用场景包括购物车列表、用户选择的颜色列表、数据表等。与某些静态类型语言不同，JavaScript 数组的长度和元素类型可以在运行时动态变化。

**知识树**

1. 数组创建方式

    - 使用 数组字面量（`[]`） 创建数组，最常见且简洁。
    - 可以创建空数组，也可以在创建时初始化元素。

2. 数组元素访问方式

    - **索引（index）访问**：数组是基于索引（0-based）存储数据的，索引从 `0` 开始。
    - 访问方式：`arr[index]`，返回指定索引的元素。

3. 数组的动态特性

    - **长度可变**：数组的大小会根据元素的添加（`push()`）或删除（`pop()`）自动调整。
    - **任意索引赋值**：如果指定的索引大于当前数组长度，JavaScript 会自动扩展数组，并在未定义的位置填充 `undefined`。
    - **数组中的元素可以是不同数据类型**（如 string、number、boolean）。

4. 数组的`length`属性

    - `length` 表示数组中元素的数量，即数组的最大索引 + 1。
    - JavaScript 不会阻止稀疏数组（即数组中存在空位），但 `length` 仍会计入这些空位。

5. 数组的类型

    - 在 JavaScript 中，数组本质上是对象（`typeof` 返回的是 `object`），数组不仅可以存储数据，还拥有对象的方法和属性。

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

5. 数组的 `length` 属性

    ```js
    let numbers = [1, 2, 3];
    console.log(numbers.length); // 输出: 3

    numbers[5] = 99;
    console.log(numbers.length); // 输出: 6
    console.log(numbers); // 输出: [1, 2, 3, empty × 2, 99]
    ```

6. 数组的类型

    ```js
    console.log(typeof selectedColors); // 输出: "object" (数组的类型是对象)
    ```

## 函数基础

> **简述**：函数（Function）是 JavaScript 中的基本构建块，用于执行特定的任务或计算值。函数可以封装重复的代码，使程序更加简洁、可复用、易维护。在 JavaScript 中，函数也是对象。

**知识树**

1.  函数声明

    - 使用 `function` 关键字定义一个函数，语法结构包括：
        - 函数名称（可选但推荐命名）
        - 圆括号表示函数参数的位置（可以为空）。
        - 花括号包含函数的主体，其中定义了函数的执行内容。

2.  函数参数（Parameters）

    - 参数（Parameter）：函数定义时的占位符，表示未来传入的值。
    - 实参（Argument）：函数调用时实际传递的值。
    - 多个参数使用逗号 , 分隔，参数数量没有限制。
    - 默认值：如果函数被调用时缺少参数，那么未传递的参数值默认为 undefined。

3.  返回值

    - 函数可以使用 return 关键字返回一个值，返回值可以是任意数据类型。
    - 没有 return 语句的函数默认返回 undefined。

**示例代码**

1.  函数声明

    ```js
    // 函数声明（无参函数）
    function greet() {
    	console.log("Hello World");
    }
    greet(); // 输出: Hello World

    // 函数表达式，
    const greetVar = function () {
    	console.log("Hello World");
    };
    greetVar(); // 输出: Hello World
    ```

    - 第一种方式，必须要给函数命名，名称在整个作用域内都是可见的。
    - 第二种方式，函数可以是匿名的（即没有名称），但它被赋值给变量 greetVar，可以通过变量来调用它。

2.  函数参数（Parameters）

    ```js
    //函数参数
    function greetWithName(name) {
    	console.log("Hello " + name);
    }
    greetWithName("John"); // 输出: Hello John

    // 多个参数
    function greetWithFullName(firstName, lastName) {
    	console.log("Hello " + firstName + " " + lastName);
    }
    greetWithFullName("John", "Smith"); // 输出: Hello John Smith
    greetWithFullName("John"); // 输出: Hello John undefined
    ```

    - 如果缺少参数，未传递的参数默认为 undefined。

3.  函数返回值

    ```js
    function add(a, b) {
    	return a + b;
    }
    let result = add(5, 3);
    console.log(result); // 输出: 8
    ```

## 函数类型基础

> **简述**：在 JavaScript 中，函数可以分为两大类型：执行任务的函数和计算值的函数。前者用于执行某些操作，后者则用于返回计算的结果。

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

> **简述**：算术运算符（Arithmetic Operators）用于在 JavaScript 中执行数学计算。这些运算符与数学运算类似，可以对变量和常量进行计算并生成新值。

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

> **简述**：赋值运算符（Assignment Operators）用于将值赋给变量。我们可以通过赋值运算符将一个表达式的结果存储到一个变量中。

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

> **简述**：比较运算符（Comparison Operators）用于比较两个值的大小或关系。比较运算的结果始终是一个布尔值（Boolean），即 `true` 或 `false`。这些运算符也称为**关系运算符（Relational Operators）**。

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

> **简述**：JavaScript 中提供了两种相等运算符：**严格相等运算符（Strict Equality Operator）** 和 **宽松相等运算符（Loose Equality Operator）**，它们用于比较两个值是否相等，但判断标准有所不同。

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

> **简述**：三元运算符（Ternary Operator），也叫条件运算符，是 JavaScript 中一个非常简洁且常用的工具，用于根据条件决定赋值或执行操作。

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

> **简述**：**逻辑运算符**用于基于多个条件进行决策。在 JavaScript 中，有三种常用的逻辑运算符：**逻辑与**（AND）、**逻辑或**（OR）、**逻辑非**（NOT）。

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

    ```js
    let highIncome = true; // 高收入
    let goodCreditScore = true; // 良好的信用评分
    let eligibleForLoan = highIncome && goodCreditScore; // 贷款批准条件
    console.log(eligibleForLoan); // 输出: true
    ```

    - 要求高收入且良好的信用评分

5. 逻辑或实际应用：

    ```js
    let highIncome = true; // 高收入
    let goodCreditScore = false; // 不良信用评分
    let eligibleForLoan = highIncome || goodCreditScore; // 贷款批准条件
    console.log(eligibleForLoan); // 输出: true
    ```

    - 只需满足一个条件即可

## 逻辑运算符与非布尔值

> **简述**：逻辑运算符不仅可用于布尔值运算，还能与非布尔值操作，其结果依赖于操作数的真值（truthy/falsy）状态。这一特性使得逻辑运算符在默认值设置和短路计算中非常有用。

**知识树**

1. 逻辑或运算符`||`与非布尔值

    -返回第一个 truthy 的操作数；若没有 truthy 值，则返回最后一个操作数。

2. Truthy 和 Falsy 值：

    - Falsy 值：在布尔上下文中被视为 `false` 的值，如：`undefined`、`false`、`null`、`0`、`NaN`、`""`（空字符串）。
    - Truthy 值：所有非 falsy 的值（例如非空字符串、非零数字、对象、数组、函数等）。

3. 短路计算（Short-circuiting）

    - 逻辑运算符会在确定结果后停止评估其他操作数。

4. 现实世界的应用：默认值

    - 使用逻辑运算符为变量设置默认值。

5. 布尔值转换

    - `!!` 运算符可以将任意值强制转换为布尔值，常用于检查变量是否存在或条件判断。

**代码示例**

1. 逻辑或运算符（`||`）与非布尔值

    ```js
    console.log(false || true); // 输出: true
    console.log(false || "Mosh"); // 输出: Mosh
    console.log(false || 1); // 输出: 1
    ```

    - 逻辑或运算符返回第一个 truthy 的值；若都为 falsy，则返回最后一个操作数。

2. Truthy 和 Falsy 值

    ```js
    console.log(!!undefined); // 输出: false
    console.log(!!false); // 输出: false
    console.log(!!"Mosh"); // 输出: true
    console.log(!!1); // 输出: true
    console.log(!!{}); // 输出: true
    ```

    - `!!` 将值转换为布尔值，便于判断其真值或假值。

3. 短路计算（Short-circuiting）

    ```js
    console.log("Mosh" || "John"); // 输出: Mosh（右侧的 "John" 被忽略）
    ```

    - `"Mosh"` 是 truthy，因此立即返回 `"Mosh"`，并且右侧的 `"John"` 被忽略。

4. 现实世界的应用：默认值

    ```js
    let userColor = undefined; // 用户未选择颜色
    let defaultColor = "blue"; // 默认颜色
    let currentColor = userColor || defaultColor; // 使用默认颜色
    console.log(currentColor); // 输出: blue
    ```

    - 当 userColor 为 falsy 时，逻辑或运算符返回 defaultColor。

## 位运算符

> **简述**：在 JavaScript 中，位运算符（bitwise operators）用于按位操作数字的二进制表示。位运算符与逻辑运算符相似，但它们作用于数字的单个位（bit）。

**知识树**

1. 位运算符基本概念

    - 位运算符直接操作数字的二进制位，通过逐个位地进行比较。
    - 位与运算符`&`：仅当两个对应的位都为 `1` 时，结果才为 `1`。
    - 位或运算符`|`：只要两个对应的位中有一个为 `1`，结果就是 `1`。
    - 取反操作符`~`：对操作数的每一位进行取反（即 `1` 变为 `0`，`0` 变为 `1`）。

2. 位运算符的应用

    - 权限管理系统
        - 利用位运算符分配、检查和取消权限。
        - 使用位与运算符检查权限是否存在。
        - 使用位或运算符添加权限，使用取反和位与运算符取消权限。

**代码示例**

1. 位与运算符（`&`）

    ```js
    // 位与操作前，5 转换为 32 位整数为 000...0101，
    // 3 转换为 32 位整数为 000...0011
    let result = 5 & 3;
    console.log(result); // 输出: 1  (二进制：0001)
    ```

    - 解释：只有对应位都为 1 时，结果才为 1。

2. 位或运算符（`|`）

    ```js
    // 位或操作：5 为 0101，3 为 0011，结果为 0111（二进制），即 7
    let result = 5 | 3;
    console.log(result); // 输出: 7
    ```

    - 解释：只要两个对应位中有一个为 1，则结果为 1。

3. 权限管理系统应用

    ```js
    // 定义权限的二进制表示（注意：实际值经过转换为 32 位整数）
    const readPermission = 4; // 二进制：0100
    const writePermission = 2; // 二进制：0010
    const executePermission = 1; // 二进制：0001

    // 用户的权限初始为 0（无权限）
    let myPermission = 0;
    // 使用位或操作添加读取和写入权限
    myPermission = myPermission | readPermission | writePermission;
    console.log(myPermission); // 输出: 6 (二进制：0110)

    // 检查是否具有读取权限
    let message = myPermission & readPermission ? "Yes" : "No";
    console.log(message); // 输出: Yes

    // 使用取反操作符和位与操作取消读取权限
    myPermission = myPermission & ~readPermission;
    console.log(myPermission); // 输出: 2 (二进制：0010)
    ```

## 运算符优先级

> **简述**：每种运算符都有自己的优先级，优先级较高的运算符会先执行。理解运算符优先级非常重要，以确保在复杂表达式中得到正确的计算结果。为提高代码可读性，建议在不确定时使用括号明确表达式求值顺序。

**知识树**

1. 运算符优先级的顺序

    - 括号 `()`：括号中的表达式最先计算。
    - 一元运算符：例如逻辑非 `!`、正号 `+`、负号 `-`（优先级通常高于乘除运算）。
    - 乘法、除法、取余 `* / %`：这些运算符优先级较高。
    - 加法、减法 `+ -`：优先级低于乘除运算。
    - 比较运算符 `== !== < > <= >=`：用于比较值的大小或相等性。
    - 逻辑运算符 `&& ||`：优先级较低，通常用于逻辑判断。
    - 赋值运算符 `=`：右结合运算符（右侧先计算）。

2. 结合性（Associativity）

    - 同一优先级的运算符根据结合性决定求值顺序。例如，加法和乘法是左结合，而赋值运算符是右结合。
    - 在表达式中，若运算符具有相同优先级，则按照结合性（从左到右或从右到左）求值。

3. 运算符优先级应用

    - 使用括号明确优先级，避免因运算顺序引起的错误或歧义。
    - 在书写复杂表达式时，建议加上括号，即使按照默认优先级计算也能提高代码的可读性。

**代码示例**

1. 运算符优先级示例

    ```js
    let result = 3 + 4 * 2;
    console.log(result); // 输出: 11
    ```

    - 解释：乘法 `4 * 2` 先计算得到 `8`，然后再执行加法 `3 + 8`，结果为 `11`。

2. 使用括号明确优先级

    ```js
    let result = (3 + 4) * 2;
    console.log(result); // 输出: 14
    ```

    - 解释：括号强制先执行 `3 + 4` 得到 `7`，再乘以 `2` 得到 `14`。

3. 结合性示例

    ```js
    // 左结合：先计算 1 - 2，再计算结果 - 3
    let result = 1 - 2 - 3; // 实际计算为 ((1 - 2) - 3)

    let a, b, c;
    // 右结合：先计算 c = 5，再计算 b = (c = 5)，最后计算 a = (b = (c = 5))
    a = b = c = 5;

    // 在 ES2016 中引入的指数运算符（**）是右结合的：
    let exp = 2 ** (3 ** 2); // 实际计算为 2 ** (3 ** 2) = 2 ** 9 = 512
    // 三目运算符也是右结合
    let x = true ? false : true ? 1 : 2; // 解析为 true ? false : (true ? 1 : 2)
    ```

    - 当运算符是左结合时，表达式会从左向右求值。例如，减法（-）和除法（/）都是左结合的：
    - 当运算符是右结合时，表达式会从右向左求值。最典型的例子是赋值运算符（=）。例如：

## 交换元素

> **简述**：交换两个变量的值是常见的编程操作，常用的方法包括使用第三个变量、加减法交换以及位运算交换。需要注意的是，加减法和位运算交换仅适用于数字，而 ES6 的解构赋值提供了一种更简洁且通用的交换方式。

**知识树**

1. 使用第三个变量

    - 最传统且通用的方法，适用于所有数据类型。

2. 加减法交换（仅适用于数字）

    - 利用加法和减法操作实现交换，但可能存在溢出风险，且只适用于数值类型。

3. 位运算交换（仅适用于整数）

    - 利用按位异或（^）实现交换，仅适用于整数，局限于处理整数数据。

4. **ES6 解构赋值交换**

    利用解构赋值语法进行交换，语法简洁，适用于所有数据类型，是现代推荐的写法。

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
    let a = 1;
    let b = 2;

    a = a + b; // a = 3
    b = a - b; // b = 1
    a = a - b; // a = 2

    console.log(a); // 输出：2
    console.log(b); // 输出：1
    ```

3. 位运算交换（仅适用于整数）

    ```js
    let a = 1;
    let b = 2;

    a = a ^ b; // a = 3
    b = a ^ b; // b = 1
    a = a ^ b; // a = 2
    console.log(a); // 输出：2
    console.log(b); // 输出：1
    ```

4. ES6 解构赋值交换（推荐方法）

    ```js
    let a = "red";
    let b = "blue";

    [a, b] = [b, a];
    console.log(a); // 输出：blue
    console.log(b); // 输出：red
    ```

# 控制流程

## `if` 和 `else` 条件语句

> **简述**：`if` 和 `else` 是控制程序流程的基本条件语句，用于根据条件判断执行不同的代码块。使用这些语句可以使程序在满足不同条件时采取不同的行为，从而实现灵活的逻辑控制。建议始终使用大括号 `{}` 来包裹代码块，以保证代码的健壮性和可维护性。

**知识树**

1. `if`语句

    - 当条件表达式为 `true` 时，执行对应的代码块。

2. `else if`语句

    - 用于检查多个条件，按照顺序依次判断，直到有一个条件为 `true`。

3. `else`语句

    - 当所有条件都不满足时，执行默认操作。

4. 最佳实践

    - 使用大括号 `{}` 包裹代码块，即使只有一条语句。
    - 对复杂条件表达式，考虑拆分成多个变量以提高可读性。
    - 尽量使用严格相等 `===` 来进行比较，避免**隐式类型转换**的问题。

**代码示例**：

1. `if`语句

    ```js
    if (condition) {
    	// 条件为 true 时执行的代码
    }
    ```

    - 说明：当 condition 为 true 时，执行大括号内的代码块。

2. `else if`语句

    ```js
    if (condition) {
    	// 条件为 true 时执行的代码
    } else if (otherCondition) {
    	// 当第一个条件为 false，且 otherCondition 为 true 时执行的代码
    }
    ```

    - 说明：用于依次判断多个条件，执行第一个满足条件的代码块。

3. `else`语句

    ```js
    if (condition) {
    	// 条件为 true 时执行的代码
    } else {
    	// 条件为 false 时执行的代码
    }
    ```

    - 说明：如果前面的所有条件都不满足，则执行 else 代码块中的内容。

4. 基本 `if` 示例

    ```js
    let hour = 10; // 假设当前时间是上午 10 点
    if (hour >= 6 && hour < 12) {
    	console.log("Good Morning");
    }
    ```

    - 说明：当 hour 在 6 到 12 之间时，输出 "Good Morning"。

5. `if` 与 `else if` 语句示例

    ```js
    let hour = 10; // 假设当前时间是上午 10 点
    if (hour >= 6 && hour < 12) {
    	console.log("Good Morning");
    } else if (hour >= 12 && hour < 18) {
    	console.log("Good Afternoon");
    }
    ```

    - 说明：依次判断不同时间段，输出相应的问候语。

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

    - 说明：通过 if、else if 和 else 语句实现完整的条件分支，覆盖所有可能的情况。

7. 简化版代码

    ```js
    let hour = 10; // 假设当前时间是上午 10 点
    if (hour >= 0 && hour < 12) console.log("Good Morning");
    else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
    else console.log("Good Evening");
    ```

## `switch` 和 `case` 条件语句

> **简述**：简述：`switch` 和 `case` 语句用于根据变量的值执行不同的代码块。相比多个 `if-else` 语句，`switch` 语句在处理多个可能的离散值时更加清晰直观。但是需要注意，`switch` 使用的是严格相等 (`===`) 进行匹配，不会进行类型转换。

**知识树**

1. `switch`语句

    - `switch` 语句根据变量的值执行匹配的 `case` 代码块。

2. `case`语句

    - 每个 `case` 语句用于匹配 `switch` 中的变量值，并执行相应代码。

3. `break`语句

    - 阻止 `switch` 语句继续执行后续 `case` 代码块，防止 `fall-through`。

4. `default`语句

    - 处理所有未匹配的情况，建议始终添加 `default` 分支以提高健壮性。

5. `fall-through`行为

    - 如果 `case` 语句没有 `break`，则程序会继续执行下一个 `case` 语句。

6. `switch` vs `if-else`

    - `switch` 适用于 变量有多个可能具体值 的情况，如用户角色、键盘输入等。
    - `if-else` 适用于 范围判断 或 复杂逻辑判断。

**代码示例**：

1. `switch` 语句的基本用法

    ```js
    switch (variable) {
    	case value1:
    		// 变量等于 value1 时执行
    		break;
    	case value2:
    		// 变量等于 value2 时执行
    		break;
    	default:
    	// 变量未匹配任何 case 时执行
    }
    ```

2. 严格相等 (`===`) 匹配机制

    ```js
    switch (5) {
    	case "5":
    		console.log("Matched!");
    		break;
    	default:
    		console.log("Not Matched!");
    }
    ```

    - 输出：`Not Matched!`（因为 `5` 是 `number`，`"5"` 是 `string`，二者不同）

3. 根据用户角色显示消息

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

4. `fall-through` 行为示例（没有使用 `break`）

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

    - 这里缺少 `break`，导致所有 `case` 代码块被依次执行。

5. 正确利用 fall-through 行为（权限继承）

    ```js
    let level = "gold";

    switch (level) {
    	case "bronze":
    		console.log("Bronze benefits");
    	case "silver":
    		console.log("Silver benefits");
    	case "gold":
    		console.log("Gold benefits");
    	case "platinum":
    		console.log("Platinum benefits");
    		break;
    	default:
    		console.log("No benefits");
    }
    ```

    - `gold` 级别将继承 `silver` 和 `bronze` 的权限信息。

6. `switch` vs `if-else` 语句

    ```js
    let role = "guest";
    if (role === "guest") console.log("Guest user");
    else if (role === "moderator") console.log("Moderator user");
    else if (role === "admin") console.log("Admin user");
    else console.log("Unknown role");
    ```

    - `if-else` 适用于范围判断和复杂逻辑判断，而 `switch` 适用于多个值的匹配。

## `For`循环语句

> **简述**：`for` 循环是一种用于**重复执行代码块**的控制结构。它由**初始化表达式**、**条件表达式**和**增量表达式**组成，通常用于**已知循环次数**的场景。`for` 语句提供了一种简洁的方式来控制循环变量。

**知识树**

1. `for` 循环基本结构

    - 初始化 (`initialExpression`)：用于声明和初始化循环变量，通常使用 `let` 关键字。
    - 条件 (`condition`)：控制循环是否继续执行，当条件为 `false` 时停止循环。
    - 增量 (`incrementExpression`)：在每次迭代结束时更新循环变量。
    - 循环体：包含要执行的代码块。

2. `for` 循环的执行顺序

    - ① 执行初始化表达式
    - ② 检查条件表达式
    - ③ 如果条件为 `true`，执行循环体
    - ④ 执行增量表达式
    - ⑤ 回到 ② 继续检查条件

3. 常见变体

    - 省略某些部分
    - 无限循环
    - 多变量控制

**代码示例**

1. `for` 循环的基本用法

    ```js
    for (let i = 0; i < 5; i++) {
    	console.log("Hello World");
    }
    ```

    - 执行流程：
        - `i = 0`
        - `i < 5` (true) → 运行 `console.log`
        - `i++`，`i = 1`
        - `i < 5` (true) → 运行 `console.log`
        - `i++`，`i = 2`（重复直到 `i = 5`，循环结束）

2. 输出 `i` 的值

    ```js
    for (let i = 0; i < 5; i++) {
    	console.log("Hello World", i);
    }
    ```

    - 说明：每次迭代时输出当前 `i` 的值，观察循环执行过程。

3. 筛选奇数

    ```js
    for (let i = 1; i <= 5; i += 2) {
    	console.log(i); // 输出奇数
    }
    ```

    - 说明：使用 `i += 2` 直接遍历奇数，避免 `if` 语句，提高效率。

4. 倒序输出奇数

    ```js
    for (let i = 5; i >= 1; i -= 2) {
    	console.log(i);
    }
    ```

    - 说明：循环变量 `i` 递减，每次减少 `2`，倒序输出奇数。

5. 省略某些部分

    ```js
    let i = 0;
    for (; i < 5; i++) {
    	console.log(i);
    }
    ```

    - 说明：初始化变量 `i` 在 `for` 循环外部定义，依然可以使用 `for` 语句。

6. 无限循环

    ```js
    for (;;) {
    	console.log("Infinite Loop");
    	// break; // 防止程序崩溃，保存查看效果后请迅速取消该行注释并保存，否则重新打开页签
    }
    ```

    - 说明：省略所有部分的 `for` 语句是一个无限循环，通常需要 `break` 终止。

7. 多变量控制

    ```js
    for (let i = 0, j = 5; i <= j; i++, j--) {
    	console.log(i, j);
    }
    ```

    - 说明：for 语句可以控制多个变量同时变化。

## `while` 循环语句

> **简述**：`while` 循环是一种**条件驱动**的循环结构，适用于循环次数**不确定**的情况。它在每次迭代前都会检查条件，只有当条件为 `true` 时才会继续执行循环体。相比 `for`，`while` 提供了更灵活的循环控制，但需要手动更新循环变量，以防止出现**死循环**。

**知识树**

1. `while`循环的基本语法

    - `while (condition)` 先检查条件，满足则执行循环体。
    - 需要手动更新循环变量，否则会导致无限循环。

2. `while` vs `for`

    - `for` 适用于 已知循环次数 的情况。
    - `while` 适用于 基于条件控制 、循环次数未知的情况。

3. 无限循环与终止

    - `while (true)` 可用于服务器监听请求等场景，需要 `break` 语句手动终止。

4. 最佳实践

    - `while` 语句必须显式更新循环变量，防止死循环。

**代码示例**

1. `while` 循环的基本结构

    ```javascript
    while (condition) {
    	// 只要 condition 为 true，就会执行循环体
    }
    ```

    - `condition` 是循环的条件，只有 `true` 时才会继续执行循环体。
    - 循环体会重复执行，直到 `condition` 变为 `false`。

2. 将 `for` 循环转换为 `while` 循环

    - `for` 版本：

        ```javascript
        for (let i = 1; i <= 5; i++) {
        	if (i % 2 !== 0) console.log(i); // 输出奇数
        }
        ```

    - 等价的 `while` 版本：

        ```javascript
        let i = 1; // 在循环外部声明 i
        while (i <= 5) {
        	if (i % 2 !== 0) console.log(i); // 输出奇数
        	i++; // 增加 i
        }
        ```

    - 区别：
        - `while` 版本需要手动初始化变量 `i`。
        - `while` 版本需要手动更新变量 `i++`，否则会进入死循环。

3. 使用 `while` 验证用户输入

    ```js
    let input;
    while (!input) {
    	input = prompt("请输入您的姓名：");
    }
    console.log("欢迎, " + input);
    ```

    - 作用：确保用户输入一个值，否则继续提示输入。

## `do-while` 循环语句

> **简述**：`do-while` 是 `while` 的变体，它的最大特点是**至少执行一次循环体**。即使初始条件不满足，`do-while` 仍然会执行循环体一次，然后再检查条件，决定是否继续执行。适用于需要先执行某些操作，再决定是否重复执行的场景，如用户输入验证、菜单系统等。

**知识树**

1. `do-while` 循环的基本语法

    - `do` 先执行循环体一次，再评估 `while(condition)` 是否继续执行。
    - 即使 `condition` 一开始是 `false`，循环体仍然会执行一次。

2. `do-while` vs `while`

    - `while`：先检查条件，可能 **0 次** 执行循环体。
    - `do-while`：**至少执行 1 次** 循环体，然后检查条件。

3. 适用场景

    - 用户输入验证（确保用户至少输入一次）。
    - 菜单系统（用户必须至少查看菜单一次）。
    - 必须先执行一次的循环逻辑。

4. 避免 `do-while` 的陷阱

    - 由于 `do-while` **至少执行一次**，如果初始条件不满足，可能会导致不必要的执行。
    - 若条件更新不正确，可能会进入**死循环**。

**代码示例**

1. `do-while` 循环的基本结构

    ```js
    do {
    	// 先执行一次循环体
    } while (condition);
    ```

    - `do` 先执行循环体。
    - `condition` 决定循环是否继续执行。

2. `while` vs `do-while`

    - `while` 版本：

        ```js
        let i = 1;
        while (i <= 5) {
        	console.log(i); // 输出 1~5
        	i++;
        }
        ```

    - `do-while` 版本

        ```js
        let i = 1;
        do {
        	console.log(i); // 输出 1~5
        	i++;
        } while (i <= 5);
        ```

3. 用户输入验证

    ```js
    let input;
    do {
    	input = prompt("请输入一个大于 10 的数字：");
    } while (input <= 10);
    console.log("你输入的有效数字是：" + input);
    ```

    - 先执行 `prompt()`，然后检查条件，确保用户输入有效数据。

4. `do-while` 的陷阱

    ```js
    let number = 100;
    do {
    	console.log("执行一次，即使条件不满足");
    } while (number < 10);
    ```

    - 即使 `number < 10` 不满足，仍然会执行一次。

5. 防止 `do-while` 进入死循环

    ```js
    let i = 1;
    do {
    	console.log(i);
    	i++; // 确保 `i` 递增，否则死循环
    } while (i <= 5);
    ```

## 无限循环

> 简述：无限循环（Infinite Loop）是循环条件始终为 `true`，导致代码不断重复执行，**无法自行终止**。它可能是**程序错误**（如遗漏更新变量）导致的，也可能是**刻意设计**（如服务器监听事件）。错误的无限循环会导致系统资源耗尽，甚至让程序崩溃，因此需要谨慎使用。

**知识树**

1. 无限循环的类型

    - 非预期的无限循环（Bug）：代码逻辑错误，如条件判断失效或变量未更新。
    - 有意的无限循环（设计）：用于服务器监听、事件轮询等，需要 `break` 或 `return` 退出。

2. 无限循环的危害

    - 消耗过多 CPU 资源，导致程序运行缓慢或无响应。
    - 浏览器或计算机崩溃，尤其在 JavaScript 主线程环境下。
    - 阻塞事件循环，导致 UI 交互失效（浏览器冻结）。

3. 常见无限循环示例

    - `while` 循环中的无限循环
    - `do-while` 循环中的无限循环
    - `for` 循环中的无限循环

4. 如何避免无限循环

    - 确保循环变量正确更新，避免条件始终为 `true`。
    - 设置合理的退出条件（如 `break`）。
    - 调试时限制最大循环次数，防止代码卡死。

**代码示例**

1.  `while` 循环中的无限循环

    ```js
    let i = 1; // 初始化变量
    while (i <= 5) {
    	console.log(i);
    	// i 没有更新，导致条件永远为 true
    }
    ```

    - 修正方案：

        ```js
        let i = 1;
        while (i <= 5) {
        	console.log(i);
        	i++; // 让 i 递增，最终达到退出条件
        }
        ```

2.  `do-while` 循环中的无限循环

    ```js
    let x = 1;
    do {
    	console.log(x);
    	// x 没有更新，导致条件永远为 true
    } while (true);
    ```

    - 修正方案：

        ```js
        let x = 1;
        do {
        	console.log(x);
        	x++; // 确保 x 在某个时刻会使条件变为 false
        } while (x <= 5);
        ```

3.  `for` 循环中的无限循环

    ```js
    for (let i = 1; i > 0; i++) {
    	console.log(i); // i 不断递增，i > 0 永远为 true，导致永远不会退出。
    }
    ```

    - 修正方案：

        ```js
        for (let i = 1; i <= 5; i++) {
        	console.log(i);
        }
        ```

4.  经典的 `for` 循环无限循环形式

    ```js
    for (;;) {
    	console.log("This loop runs forever!"); // 这里省略了初始化、条件和更新，导致无限循环。
    }
    ```

    - 正确用法（有意设计的无限循环）：

        ```js
        for (;;) {
        	console.log("Running...");
        	if (Math.random() > 0.8) break; // 在某个随机点退出
        }
        ```

## `for-in` 循环

> **简述**：`for-in` 循环用于遍历对象的**可枚举属性**，适用于获取对象的**属性名**，而不直接获取属性值。此外，`for-in` 也可以用于遍历数组的**索引**，但由于它可能遍历非标准索引，因此在数组遍历时并不推荐使用。

**知识树**

1. `for-in` 的基本结构

    - 适用于遍历对象的属性名或数组的索引。
    - `key` 代表对象的一个属性名或数组的索引。

2. `for-in` 用于对象遍历

    - `for-in` 遍历对象的所有可枚举属性。
    - 迭代时，循环变量 `key` 代表对象的属性名。

3. `for-in` 用于数组遍历

    - `for-in` 适用于遍历数组的索引，但不会直接获取数组元素的值。
    - 可能会遍历数组的非标准索引，如手动添加的额外属性。

4. 避免 `for-in` 误用

    - 在对象遍历时，使用方括号 `object[key]` 访问属性值。
    - 在数组遍历时，若数组包含额外的自定义属性，`for-in` 可能会遍历这些属性。

**代码示例**

1. `for-in` 遍历对象

    ```js
    let person = {
    	name: "Mosh",
    	age: 30,
    };

    for (let key in person) {
    	console.log(key, person[key]); // 输出属性名和属性值
    }
    // 输出
    // name Mosh
    // age 30
    ```

2. 使用 `for-in` 访问对象属性值

    ```js
    for (let key in person) {
    	console.log(key, person[key]); // 访问对象属性值
    }
    ```

    - 说明：`key` 是字符串，不能直接用 `person.key` 访问属性值，必须使用 `person[key]`。

3. `for-in` 遍历数组索引

    ```js
    let colors = ["red", "green", "blue"];
    for (let index in colors) {
    	console.log(index, colors[index]); // 输出索引和值
    }
    // 输出
    // 0 red
    // 1 green
    // 2 blue
    ```

4. `for-in` 遍历数组的非标准索引

    ```js
    let arr = [10, 20, 30];
    arr.customProperty = "Custom Value";

    for (let index in arr) {
    	console.log(index, arr[index]); // 遍历索引和额外属性
    }
    // 输出
    // 0 10
    // 1 20
    // 2 30
    // customProperty Custom Value
    ```

    - 说明：`for-in` 不仅会遍历数组的索引，还会遍历手动添加的属性，这可能导致非预期行为。

## `for-of` 循环

> 简述：`for-of` 循环是 ES6 引入的一种专门用于遍历可迭代对象（如数组、字符串、Set、Map 等）的语法。与 `for-in` 不同，`for-of` 直接访问可迭代对象的元素值，而不是索引或属性名，因此在遍历数组或字符串时更加直观和高效。

**知识树**

1. `for-of` 基本结构

    - 适用于遍历可迭代对象（iterable），如数组、字符串、Map、Set 等。
    - 直接访问元素值，而非索引或属性名。

2. `for-of` 与 `for-in` 的区别

    - `for-in` 适用于遍历对象的属性名或数组的索引。
    - `for-of` 适用于遍历数组或其他可迭代对象的元素值。

3. `for-of` 的局限性

    - 不能遍历普通对象，因为对象默认不可迭代。
    - 如果需要遍历对象的属性，应使用 for-in 或 其他方法 进行遍历。

**代码示例**

1. `for-of` 循环的基本语法

    ```js
    for (let element of iterable) {
    	// 在每次迭代中，element 是当前迭代的值
    }
    ```

    - `element`：循环变量，存储当前迭代的元素值。
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

    - `for-of` 遍历字符串时，每次迭代返回一个字符。

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

> **简述**：`break` 和 `continue` 是用于控制循环流程的两个关键词。`break` 用于**立即终止**循环并跳出当前循环体，而 `continue` 则用于**跳过**当前循环的剩余部分，直接进入下一次循环的迭代。虽然这两个关键词非常强大且实用，但不当使用可能使代码结构复杂且难以维护，尤其在嵌套循环中更容易降低代码的可读性和可维护性。

**知识树**

1. `break` 基本概念

    - 用于终止当前循环，跳出整个循环体，后续的代码将不会再执行。
    - 适用于 `for`、`while` 和 `do-while` 等循环结构。

2. `continue` 基本概念

    - 用于跳过当前迭代的剩余代码，并直接进入下一次循环的迭代。
    - 同样适用于 `for`、`while` 和 `do-while` 等循环结构。

3. 最佳实践

    - 避免过度依赖 `break` 或 `continue`，尤其在复杂或多层嵌套的循环中。过多的使用可能会让循环逻辑难以追踪和理解。
    - 尽量使用更清晰的控制结构（例如 `if` 判断），有时可以替代这些控制语句，让代码更具可读性。
    - 在嵌套循环中，可以使用标签（label）来精确控制 `break` 或 `continue`，从而增强代码的可读性，这在早在 ES3 中引入。

**代码示例**

1. `break` 终止循环

    ```js
    let i = 0;
    while (i <= 10) {
    	if (i === 5) break; // 当 i 等于 5 时终止循环
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

    - 解释：当 `i` 达到 5 时，`if` 条件为真，`break` 被执行，循环立即终止。后续的 `console.log(i)` 语句不会再被执行，输出的结果为 0 至 4。

2. `continue` 跳过当前迭代

    ```js
    let i = 0;
    while (i <= 10) {
    	if (i % 2 === 0) {
    		i++;
    		continue; // 跳过偶数，直接进入下次迭代
    	}
    	console.log(i); // 输出奇数
    	i++;
    }
    // 输出：
    // 1
    // 3
    // 5
    // 7
    // 9
    ```

    - 解释：`if (i % 2 === 0)` 检查 `i` 是否为偶数，如果是偶数，则通过 `continue` 跳过当前迭代。`continue` 会使得当前迭代剩余的代码不再执行，直接进入下一次迭代。结果是输出奇数值，偶数被跳过。

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
> -   如果输入是数字且能被 3 整除，返回 "Fizz"。
> -   如果输入是数字且能被 5 整除，返回 "Buzz"。
> -   如果输入既能被 3 又能被 5 整除，返回 "FizzBuzz"。
> -   如果输入不是数字，返回 "Not a number"。

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
> -   如果车速低于或等于限速，输出 "OK"。
> -   如果车速超过限速，根据超速的情况计算罚分（每超速 5 公里，罚 1 分）。
> -   如果罚分超过 12 分，输出 "License Suspended"。
> -   否则，输出当前罚分。

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
> -   平均分 ≥ 90：A
> -   平均分 ≥ 80：B
> -   平均分 ≥ 70：C
> -   平均分 ≥ 60：D
> -   平均分 < 60：F

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

# 对象

## 对象的概念

> **简述**：对象是 JavaScript 中用于将相关属性和方法封装在一起的核心概念，通常用于组织和操作具有相似特性的实体。

**知识树**

1. 对象的基本概念

    - 对象是键值对（key-value pairs）的集合，表示现实世界的实体。
    - 属性（Property）：描述对象的状态，值可以是基本数据类型、对象、数组或函数。
    - 方法（Method）：对象中的函数，用于描述对象的行为。
        - 方法（Method）依附于对象。
        - 函数（Function）独立于对象存在。

2. 创建对象的方式

    - 对象字面量（Object Literal）：最常见的方式，适用于简单的对象。
    - 工厂函数（Factory Function）：使用函数返回对象，以实现复用。
    - 构造函数（Constructor Function）：使用 `new` 关键字创建对象，适用于更复杂的对象。

3. 对象的使用

    - 访问对象的属性和方法
        - 点语法（`.`）：`object.property`
        - 方括号语法（`[]`）：`object["property"]`
    - 修改、添加和删除对象的属性

4. 面向对象编程

    - 以对象为核心的编程范式，将数据和操作封装在对象中，使代码更结构化、可复用、易维护。
    - 更高级的对象创建方式（如 class 语法）将在 ES6 章节详细讲解。

**代码示例**

1. 对象基础

    ```js
    // 通过对象字面量创建对象
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

> **简述**：工厂函数是一种创建对象的方式，通过封装对象创建逻辑来避免代码重复，提高代码复用性和易维护性。

**知识树**

1. 对象创建问题

    - 当使用对象字面量创建多个对象时，容易导致代码重复，尤其是在对象包含方法时。
    - 当需要修改对象逻辑时，必须在多个地方同步修改，容易出错。

2. 工厂函数的概念

    - 工厂函数是一个返回新对象的函数。
    - 通过参数化工厂函数，可以为每个对象设置独立的属性值。

3. 工厂函数的优化

    - 属性简化：如果属性名和变量名相同，可以省略值，直接写属性名。
    - 方法简化：使用 ES6 简写方法定义。传统的`methodName: function () {}`，可以简写为`methodName() {}`。

4. 工厂函数的优势

    - 复用性：集中定义对象创建逻辑，减少重复代码。
    - 可维护性：修改逻辑时只需更新工厂函数。

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

## 对象动态特性&属性操作

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

> **简述**：在 JavaScript 中，每个对象都有一个 constructor 属性，该属性引用了用于创建该对象的构造函数。

**知识树**

1. `constructor` 的定义

    - 每个对象都有一个 `constructor` 属性（继承而来，并非直接拥有）。
    - `constructor` 属性指向创建该对象时使用的构造函数。

2. 对象的创建方式及其构造函数

    - 对象字面量：通过 `{}`、`""`、`[]` 等字面量语法创建的对象，其 `constructor` 属性默认指向内置构造函数（如 `Object`、`String`、`Array`）。
    - 自定义构造函数：使用 `new` 操作符和自定义函数创建的对象，其 `constructor` 属性指向该自定义构造函数。
    -
    - 工厂函数：通过函数返回一个对象。直接返回的对象字面量的 `constructor` 属性通常指向内置的 `Object`，而不是工厂函数本身。

3. 推荐的创建方式

    - 对于内置类型，推荐使用字面量语法，因为它更简洁直观，并自动使用相应的内置构造函数。
    - 对于自定义对象，建议使用构造函数或工厂函数；但如果采用工厂函数并希望返回对象拥有自定义的 constructor 属性，则需要在函数中做特殊处理。

**代码示例**

1. 使用构造函数创建对象

    ```js
    // 使用构造函数
    function Circle(radius) {
    	this.radius = radius;
    	this.draw = function () {
    		console.log("draw");
    	};
    }

    const circle = new Circle(1);
    console.log(circle.constructor); // 输出: [Function: Circle]
    ```

    - 说明：通过 `new Circle(1)` 创建的对象，其 `constructor` 指向 `Circle` 函数。

2. 内置构造函数的行为

    ```js
    // 使用内置构造函数
    const str = new String("Hello");
    console.log(str.constructor); // 输出: [Function: String]

    // 使用字符串字面量
    const strLiteral = "Hello";
    console.log(strLiteral.constructor); // 输出: [Function: String]
    ```

    - 说明：无论使用构造函数还是字面量语法创建字符串，其 `constructor` 均为内置的 `String` 函数。

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

    - 说明：使用字面量语法创建的数组和数字，其 `constructor` 属性分别指向内置的 `Array` 和 `Number` 构造函数。

## 函数是 对象

> 简述：在 JavaScript 中，函数不仅是可调用的代码块，而且本质上是对象。它们拥有内建的属性和方法，使得函数可以像普通对象那样被操作、传递和扩展，从而支持动态和灵活的编程模式。

**知识树**

1. 函数的本质

    - 函数是 `Function` 构造函数创建的对象。
    - 作为对象，函数可以拥有属性和方法，并且可以像数据一样被赋值、传递和返回。

2. 函数的常见属性

    - `name`：表示函数的名称。
    - `length`：表示函数参数的个数。
    - `constructor`：指向创建函数的 Function 构造函数。

3. 函数的动态构建

    - 动态修改：函数作为对象，可以在运行时被动态修改（例如添加或修改属性），使其具备更灵活的特性。一般不推荐在构造函数上使用这种方式
    - 动态生成：可以利用 Function 构造函数在运行时根据字符串生成新的函数对象。这种方式属于动态生成代码，而不是修改已有函数，但它也体现了 JavaScript 的灵活性。（注意：这种方法可能涉及安全性和性能问题，通常建议谨慎使用。）

4. 函数的方法（后续函数章节详细说明）

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

2. 函数动态修改

    ```js
    // 定义一个简单的函数
    function greet(name) {
    	console.log("Hello, " + name + "!");
    }

    // 动态添加一个属性
    greet.language = "English";

    // 动态添加一个方法
    greet.info = function () {
    	console.log("This function greets someone in " + greet.language);
    };

    // 调用函数
    greet("Alice"); // 输出: Hello, Alice!

    // 访问动态添加的属性
    console.log(greet.language); // 输出: English

    // 调用动态添加的方法
    greet.info(); // 输出: This function greets someone in English
    ```

3. `Function` 构造函数动态生成函数

    ```js
    // 使用 Function 构造函数动态生成一个计算两个数字之和的函数
    const sumFunction = new Function("a", "b", "return a + b;");

    // 调用动态生成的函数
    console.log(sumFunction(3, 5)); // 输出: 8
    ```

## 原始类型与引用类型

> **简述**：JavaScript 中的数据分为两大类：原始类型（也称为值类型）和引用类型。这两种类型在存储方式和赋值行为上有根本区别。原始类型直接保存数据本身，而引用类型保存的是对数据的引用，因此在赋值和函数传参时表现出不同的行为。

**知识树**

1. 原始类型（Primitive types）

    - 包括：`Number`、`String`、`Boolean`、`Symbol`、`undefined` 和 `null`。
    - 特性：
        - 直接存储在变量中。
        - 赋值时执行值拷贝，即拷贝实际的值。
        - 每个变量独立保存自己的值，修改一个变量不会影响另一个。

2. 引用类型（Reference Types）

    - 包括：`Object`、`Array`、`Function`。
    - 特性：
        - 变量存储的是对象的引用（内存地址）。
        - 赋值时复制的是引用，多个变量可能指向同一对象。
        - 修改对象的属性会影响所有指向该对象的变量。

3. 函数中的行为

    - 传递原始类型：复制的是实际值，函数内部对参数的修改不会影响外部变量。
    - 传递引用类型：复制的是引用，函数内部修改对象属性会反映到外部对象上。

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

> **简述**：JavaScript 中有多种遍历对象属性的方法，包括 `for...in` 循环、`for...of` 循环结合 `Object.keys()` 与 `Object.entries()` 方法，以及使用 in 操作符来检查对象是否包含某个属性。这些方法能帮助开发者有效地访问和操作对象的各个部分。

**知识树**

1. `for...in` 循环

    - 遍历对象所有可枚举的属性，返回属性名（键）。
    - 通过 `object[key]` 访问对应的值。

2. `for...of` 循环

    - 普通对象本身不可直接迭代，但可通过 `object.keys()`得到属性名数组，或 `Object.entries()` 得到键值对数组，再用 `for...of` 遍历。

3. `Object.keys()` 方法

    - 返回对象自身所有属性名组成的数组，适合用来遍历对象的键。

4. `Object.entries()` 方法

    - 返回对象自身所有属性的键值对组成的二维数组，便于同时访问键和值。

5. `in` 操作符

    - 用于检查对象中是否包含某个属性，返回布尔值。

6. 说明

    - `for...in`、`for...of` 在控制流程章节已经提及，这里补充了 Objcet 的几个方法及 `in` 操作符

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

> **简述**：在 JavaScript 中，有多种方法可以克隆对象或合并多个对象。常见的方法包括使用传统的 `for...in` 循环、`Object.assign()` 方法以及扩展运算符（`...`）。这些方法实现的都是浅拷贝，即只复制对象的第一层属性，对于嵌套对象只复制引用。

**知识树**

1. 克隆和合并对象的方法

    - 使用 `for...in` 循环遍历对象的可枚举属性，然后手动复制到新对象中。
    - 使用 Object.assign() 方法，将一个或多个源对象的可枚举自有属性复制到目标对象中。
    - 使用扩展运算符（Spread Operator）将对象的属性展开到一个新的对象中。
    - 合并对象时，后面的属性会覆盖前面的属性（覆盖顺序从左至右）。

2. `Object.assign()` 方法

    - 将源对象的所有可枚举自有属性复制到目标对象中。
    - 可用于克隆单个对象，也可用于将多个对象合并到一个目标对象中。

3. 扩展运算符（Spread Operator）

    - 快速展开对象的属性到新对象中，实现浅拷贝。
    - 语法上更简洁，易读性更好。

4. 说明

    - `for in`、 `Object.assign()` 、扩展运算符三者都可以拷贝对象的可枚举的自有属性
    - `for in`还可以拷贝可枚举的原型属性
    - 这里涉及继承相关知识，将在对应章节讲解。

**代码示例**

1. 使用 `for...in` 循环克隆对象

    ```js
    let circle = {
    	radius: 10,
    	draw() {
    		console.log("Drawing a circle");
    	},
    };

    let another = {};
    for (let key in circle) {
    	another[key] = circle[key];
    }

    console.log(another); // 输出: { radius: 10, draw: [Function: draw] }
    ```

    - 说明：使用 for...in 循环手动复制对象的每个属性。这种方法实现的是浅拷贝，对于嵌套对象仅复制引用。

2. 使用 `Object.assign()` 克隆对象

    ```js
    let circle = {
    	radius: 10,
    	draw() {
    		console.log("Drawing a circle");
    	},
    };

    let another = Object.assign({}, circle);

    console.log(another); // 输出: { radius: 10, draw: [Function: draw] }
    ```

    - 说明：Object.assign() 复制的是对象的可枚举自有属性，实现浅拷贝。

3. 使用扩展运算符（Spread Operator）克隆对象

    ```js
    let circle = {
    	radius: 10,
    	draw() {
    		console.log("Drawing a circle");
    	},
    };

    let another = { ...circle };

    console.log(another); // 输出: { radius: 10, draw: [Function: draw] }
    ```

4. 合并多个对象

    ```js
    let circle = {
    	radius: 10,
    	draw() {
    		console.log("Drawing a circle");
    	},
    };

    let another = {
    	radius: 5,
    	color: "yellow",
    };

    // 使用 Object.assign() 合并对象
    let merged1 = Object.assign({}, circle, another);
    console.log(merged1);

    // 使用扩展运算符合并对象
    let merged2 = { ...circle, ...another };
    console.log(merged2);
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

    - 使用反引号创建字符串，可以嵌入表达式，支持多行字符串。

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

> **简述**：模板字面量是 JavaScript 中一种更加灵活和简洁的字符串表示方式。与传统的字符串字面量（使用单引号或双引号）相比，模板字面量使用反引号定义，支持多行字符串和嵌入表达式，使得字符串的操作更为直观和易读。

**知识树**

1. 定义模板字面量

    - 使用反引号包围字符串，而不是使用单引号或双引号。
    - 支持多行字符串，避免了使用换行符（`\n`）来手动拼接多行。

2. 内嵌表达式

    - 可以在模板字面量中嵌入变量和表达式，通过 `${}` 语法将其嵌入字符串中。
    - 支持任何可以产生值的表达式，比如变量、运算、函数调用等。

3. 拼接字符串

    - 通过模板字面量，可以避免传统字符串拼接时使用 `+` 符号，使得代码更清晰易读。
    - 也不需要像传统字符串那样手动处理换行符或特殊字符。

4. 应用场景

    - 模板字面量非常适用于动态生成内容，如发送邮件、构建复杂的 HTML 等。

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
    const message = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
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

6. 处理复杂格式

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
const address1 = createAddress("123 Main St", "New York", "10001");
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
	body:
		"This is the body of the blog post. It explains JavaScript fundamentals.",
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

> 简述：数组是存储有序数据的集合。在 JavaScript 中，数组是一种特殊的对象，提供了丰富的内置方法来操作数据。尽管数组常用 const 声明，其内部内容依然可以修改。

**知识树**

1. 数组的声明与初始化

    - 使用数组字面量：`[]` 是最推荐的创建方式，直观且无意外空位。
    - 使用 `Array` 构造函数：`new Array()` 会根据参数的数量产生不同结果（如 `new Array(5)` 创建一个具有 5 个空位的数组）。

2. 数组的操作方法

    - 添加和删除元素：`push`、`pop`、`shift`、`unshift`
    - 查找元素：`indexOf`、`includes`、`find`、`findIndex`
    - 过滤、映射与迭代：`filter`、`map`、`forEach`
    - 数组排序与反转：`sort`、`reverse`

3. 数组的特性

    - 动态大小：数组可以动态扩展或缩减。
    - 混合类型：数组允许存储任意类型的数据，但实际开发中最好保持一致性。
    - 动态 length：数组的 length 属性总等于最高索引加 1，且数组可以是稀疏的。

4. 数组与引用

    - 数组是引用类型，直接赋值会复制引用（共享同一内存地址）。
    - 创建数组副本时，常用扩展运算符（`...`）实现浅拷贝；但对于嵌套对象，只复制第一层，深拷贝需要专门方法。
    - 使用 `const` 声明数组时，变量引用不可改变，但数组内容可修改。

**代码示例**

1. 数组的声明与初始化

    ```js
    // 数组字面量
    const arr1 = [1, 2, 3];
    // 使用构造函数（注意 new Array(5) 的特殊性）
    const arr2 = new Array(5); // 创建一个有 5 个空位的数组
    console.log(arr1); // 输出: [1, 2, 3]
    console.log(arr2); // 输出: [ <5 empty items> ]
    ```

## 添加元素

> **简述**：数组元素的添加可以在数组的开头、中间或末尾进行。这些方法会直接修改原数组，而不是返回一个新数组。JavaScript 提供了多种内置方法，以满足不同场景下对数组进行扩展的需求。

**知识树**

1. 在数组末尾添加元素

    - 使用 `push()` 方法，在数组末尾添加一个或多个元素。
    - 返回数组的新长度。

2. 在数组开头添加元素

    - 使用 `unshift()` 方法，在数组开头添加一个或多个元素。
    - 返回数组的新长度。

3. 在数组中间添加元素

    - 使用 `splice()` 方法实现插入操作。
    - 语法：`splice(startIndex, deleteCount, item1, item2, ...)`。
        - `startIndex`：开始操作的索引。
        - `deleteCount`：要（右）删除的元素数量；若为 `0` 则表示不删除，仅插入。
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

> **简述**：数组元素的查找方法允许我们在数组中搜索原始类型和引用类型的元素。常用的方法包括 `indexOf()`、`lastIndexOf()`、`includes()`、`find()` 和 `findIndex()`。前几种方法基于严格相等比较，适合原始类型；而对于引用类型，由于对象比较采用引用相等，通常需要使用接受**回调函数**的 `find()` 和 `findIndex()` 来定义自定义的匹配逻辑。

**知识树**

1. 查找原始类型元素

    - `indexOf()`：返回数组中第一个匹配元素的索引；若未找到则返回 `-1`。它使用严格相等（`===`）比较。
    - `lastIndexOf()`：返回数组中最后一个匹配元素的索引，同样基于严格相等。
    - `includes()`：返回布尔值，表示数组是否包含某元素，同样采用严格比较，区分数据类型。

2. 回调函数(`callback`)

    - 回调函数是将一个函数作为参数传递给另一个函数，让后者在适当时机调用传入的函数，从而实现自定义逻辑。

3. 查找对象类型元素

    - `find()`：接受一个回调函数，依次将数组中的每个元素传入该函数，并返回第一个使函数返回 `true` 的元素。适用于基于对象属性进行条件匹配。
    - `findIndex()`：与 `find()` 类似，但返回匹配元素的索引；若无匹配项，则返回 `-1`。
    - 说明：由于对象比较基于引用，即使两个对象的内容相同，不同引用也被视为不同。

4. 注意事项

    - 这些方法仅在数组的第一层进行比较（浅比较），不会对嵌套对象进行深层比较。
    - 对于对象类型元素，直接使用 `indexOf()` 或 `includes()` 通常无法匹配具有相同内容但不同引用的对象；需要使用 `find()` 或 `findIndex()` 配合自定义回调函数来实现条件匹配。

**代码示例**

1. 查找原始类型元素

    ```js
    const numbers = [1, 2, 3, 1, 4, 1];

    console.log(numbers.indexOf(1)); // 输出: 0
    console.log(numbers.indexOf(1, 1)); // 输出: 3，从索引 1 开始查找
    console.log(numbers.lastIndexOf(1)); // 输出: 5
    console.log(numbers.includes(1)); // 输出: true
    console.log(numbers.indexOf("1")); // 输出: -1，因为 "1" 与 1 类型不同
    ```

2. 查找对象类型元素

    ```js
    const courses = [
    	{ id: 1, name: "a" },
    	{ id: 2, name: "b" },
    ];

    // includes() 无法匹配具有相同内容但不同引用的对象
    console.log(courses.includes({ id: 1, name: "a" })); // 输出: false

    // 使用 find() 根据条件查找对象
    const courseA = courses.find(function (course) {
    	return course.name === "a";
    });
    console.log(courseA); // 输出: { id: 1, name: "a" }

    // 使用 findIndex() 查找符合条件的对象索引
    const indexB = courses.findIndex(function (course) {
    	return course.name === "b";
    });
    console.log(indexB); // 输出: 1
    ```

    - 说明：当调用 `courses.find(callback)` 时，`find()` 会遍历数组中的每个元素，将它们传给回调函数，并返回第一个使回调返回 `true` 的元素；`findIndex()` 则返回该元素的索引。由于对象比较是基于引用，即使两个对象内容相同，不同引用也被视为不同。

## 箭头函数基础

> **简述**：箭头函数（Arrow Function）是 JavaScript 中一种简洁的函数定义方式，使用 `=>` 语法，具有更直观的语法和特性，

**知识树**

1. 语法简洁性

    - 可以省略大括号 `{}` 和 `return`，直接返回结果。
    - 单参数时可以省略圆括号 `()`；无参数时必须加圆括号。

2. 应用
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

2. 在回调函数中的应用

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
    - 适用于简单的数组结构

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

> 简述：`every()` 和 `some()` 是 JavaScript 中用于测试数组元素是否满足特定条件的方法。它们接受一个**回调函数**并返回布尔值，分别检查所有元素或至少一个元素是否满足条件。

**知识树**

1.  `every()` 方法

    - 用于测试数组中所有元素是否满足条件。
    - 如果所有元素满足条件，返回 `true`；否则返回 `false`。
    - 遇到不满足条件的元素时会立即终止检查。

2.  `some()` 方法

    - 用于测试数组中是否至少有一个元素满足条件。
    - 如果存在满足条件的元素，返回 `true`；否则返回 `false`。
    - 遇到满足条件的元素时会立即终止检查。

**代码示例**

1.  检查所有元素是否为正数

    ```js
    const numbers = [1, -1, 2, 3];

    const allPositive = numbers.every(function (value) {
    	return value >= 0;
    });

    console.log(allPositive); // 输出: false
    ```

    - `every()` 方法会遍历数组并检查是否所有元素都为正数。因为数组中包含 `-1`，所以返回 `false`。

2.  检查是否至少有一个正数

    ```js
    const numbers = [1, -1, 2, 3];

    const atLeastOnePositive = numbers.some(function (value) {
    	return value >= 0;
    });

    console.log(atLeastOnePositive); // 输出: true
    ```

    - `some()` 方法会检查数组中是否至少有一个元素为正数。由于存在多个正数（如 `1` 和 `2`），因此返回 `true`。

3.  使用箭头函数简化

    ```js
    const numbers = [1, -1, 2, 3];
    console.log(numbers.every((value) => value >= 0)); // false
    console.log(numbers.some((value) => value >= 0)); // true
    ```

## 过滤数组

> 简述：`filter()` 方法用于根据指定条件筛选数组中的元素，应用回调函数，返回一个包含满足条件元素的新数组，而不修改原数组。

**知识树**

1. `filter()` 方法

    - 用于筛选数组中的元素。
    - 返回一个新数组，其中包含所有满足条件的元素。
    - 不会修改原数组。

2. 常见用法

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

> `map()` 方法用于遍历数组并对数组中的每个元素，应用回调函数，返回一个新的数组，其中每个元素是原数组元素应用回调函数后的结果。

**知识树**

1. `map()` 方法

    - 遍历数组并对每个元素应用回调函数。
    - 返回一个新的数组，新数组中的每个元素为回调函数的返回值。
    - 不会修改原数组。

2. 常见用法

    - 将数组元素转换为不同格式（如字符串、对象等）。

3. 注意事项

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
    - 此处回调函数（`callback`）有两个必须的参数
        - `accumulator`（累加器）：存储前一次迭代计算的结果。
        - `currentValue`（当前元素）：当前正在处理的数组元素。
    - `reduce()` 会对数组的每个元素执行 `callback`，并返回最终累积的值。

2. 初始值

    - 如果提供了初始值，第一次迭代时，`accumulator` 的值为初始值。
    - 如果未提供初始值，数组的第一个元素将作为初始值，迭代从第二个元素开始。

3. 常见用途

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
    const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
    	return accumulator + currentValue;
    }, 0); // 初始值为 0
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
		return current === searchElement ? accumulator + 1 : accumulator;
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

    - 剩余参数必须放在函数参数列表的最后，不能放在其他参数前面。

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

> 简述：默认值是在函数的参数中为某些未传递的值提供预设的初始值。这避免了函数在调用时遇到 `undefined` 并且仍然能够正确执行。与使用逻辑运算符（如 `||`）的方式相比，默认值的语法更加简洁和明确，该方式在 es6 引入。

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
    console.log(interest(10000, undefined, 10)); // 使用默认值: rate = 3.5
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

3. ES6 之前的做法

    ```js
    function interest(principal, rate, year) {
    	rate = rate || 3.5; // 如果 rate 没传，使用 3.5
    	year = year || 5; // 如果 year 没传，使用 5
    	return ((principal * rate) / 100) * year;
    }

    console.log(interest(1000)); // 使用默认值，输出 175
    ```

## `Getter`&`Setter`

> **简述**：简述：`在JavaScript中`，`getter` 和 `setter` 是特殊函数，用于拦截对象属性的读取与赋值操作。主要用于计算属性、数据校验与封装内部状态。ES6 前仅支持对象字面量定义，ES6 后新增 `class` 方式定义。

**知识树**

1. `getter` 用途

    - 用属性方式访问计算结果，提升可读性（例如 `obj.fullName` 而不是 `obj.getFullName()`）。
    - 封装逻辑，防止直接访问内部数据。

2. `getter` 实现规则

    - 用 `get` 关键字定义。
    - 无参数，必须返回一个值。

3. `setter` 用途

    - 用赋值语法执行数据校验或逻辑操作（例如 `obj.fullName = "John Doe"`）。
    - 控制数据有效性及状态更新。

4. `setter` 实现规则

    - 用 `set` 关键字定义。
    - 必须接收一个参数，无返回值。

5. 使用限制与注意事项

    - ES6 前仅在字面量对象使用；ES6 后可用于 `class`。
    - 仅定义 `getter` 时属性为只读。
    - 避免 `getter` 或 `setter` 内直接访问同名属性，否则引发无限递归。
        - 解决方式：使用私有变量存储（如 `_prop` 或 `#prop` ）。

6. 常见使用场景

    - 计算属性（如拼接全名）。
    - 数据校验（如限制数据类型或取值范围）。
    - 封装内部状态，防止外部直接修改。

**代码示例**

1. 对象字面量定义 `getter` 与 `setter`

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

2. 只读计算属性（仅定义 `getter`）

    ```js
    const rectangle = {
    	width: 10,
    	height: 5,

    	// 只读属性 area，根据 width 和 height 计算矩形面积
    	get area() {
    		return this.width * this.height;
    	},
    };

    console.log(rectangle.area); // 输出: 50

    // 尝试赋值将不会生效，因为没有对应的 setter
    rectangle.area = 100;
    console.log(rectangle.area); // 依然输出: 50
    ```

3. 演示无限递归问题及其解决方案

    ```js
    const person = {
    	// firstName: "Mosh",
    	_firstName: "Mosh",

    	get firstName() {
    		// return this.firstName;
    		return this._firstName;
    	},
    };

    console.log(person._firstName);
    ```

    - 这段代码会报错，是因为 `firstName` 属性同时被定义为数据属性和 `getter` 方法，`getter` 方法中使用 `this.firstName` 造成了无限递归。

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
			throw new Error("Invalid full name. Enter a first and last name.");
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

## This

> **简述**：`this` 是 JavaScript 中的一个特殊关键字，它在函数调用时动态确定指向的对象，取决于函数调用的方式和上下文环境。

**知识树**

1.  `this` 的基本含义：

    - `this` 是函数内部的一个特殊对象引用
    - 具体指向在调用函数时确定，而非定义时确定（称为动态绑定）

2.  `this` 的绑定规则：

    - 作为对象方法调用：指向调用该方法的对象
    - 作为普通函数调用（未绑定对象时）：
        - 非严格模式下指向全局对象（浏览器中为 `window`，Node 环境中为 `global`）
        - 严格模式 (`'use strict'`) 下为 `undefined`
    - 作为回调函数调用：默认指向全局对象 `Window`，可手动绑定为特定对象。

3.  构造函数中的 `this`：

    - 使用 `new` 操作符调用构造函数时，`this` 会自动指向新创建的空对象
    - 忘记使用 `new` 操作符时，构造函数内的 `this` 会指向全局对象（严格模式下为 `undefined`）
    - 操作 DOM 时情况有所不同，`this` 通常会自动绑定到触发事件的 DOM 元素，而不是 `window`

4.  严格模式（strict mode）：

    - 启用方式：在脚本顶部添加 `'use strict';`
    - 作用：
        - 强化语法检查，避免隐式全局变量
        - 独立调用函数时，`this` 指向变为 `undefined`

5.  `this` 的指向特殊情况：

    - 箭头函数中的`this`：继承定义时所在作用域的`this`，不会创建自己的`this`。
    - 独立函数调用（如直接函数调用或方法引用调用），`this` 指向全局对象或 `undefined`

**代码示例**

1.  对象方法中`this`

    ```js
    const person = {
    	name: "Alice",
    	greet() {
    		console.log(this);
    	},
    };
    person.greet(); // 输出：person 对象本身

    function Circle(radius) {
    	this.radius = radius;
    	this.draw = function () {
    		console.log(this);
    	};
    }

    const c = new Circle(5);
    c.draw(); // 输出：c 对象本身
    ```

2.  普通函数中的`this`

    ```js
    function sayHello() {
    	console.log(this);
    }
    sayHello(); // 浏览器中输出 window
    ```

3.  回调函数中的`this`

    ```js
    const user = {
    	name: "Bob",
    	tags: ["js", "vue"],
    	showTags() {
    		this.tags.forEach(
    			function (tag) {
    				console.log(this.name, tag);
    			}.bind(this)
    		); // 明确指定 this 为 user 对象
    	},
    };
    user.showTags(); // 输出：'Bob js' 和 'Bob vue'

    this.name = "testName"; // 修改全局的 name 属性

    const user2 = {
    	name: "Bob",
    	tags: ["js", "vue"],
    	showTags() {
    		this.tags.forEach(function (tag) {
    			console.log(this.name, tag);
    		}); // 未指定this
    	},
    };
    user2.showTags(); // 输出：'testName js' 和 'testName vue'

    //补充：DOM 事件处理
    const btn = document.getElementById("myButton");
    btn.addEventListener("click", function () {
    	console.log(this); // 输出：点击事件的目标元素，即 btn
    });
    ```

4.  构造函数中的`this`

    - 非严格模式下

        ```js
        //
        function Person(name, age) {
        	this.name = name;
        	this.age = age;
        }

        const p = Person("Alice", 25);
        console.log(p); // 输出: undefined，因为函数没有返回值
        console.log(window.name); // 输出: "Alice"，全局对象被修改
        ```

    - 在严格模式下

        ```js
        "use strict";
        function Person(name, age) {
        	this.name = name; // 这里会报错，因为 this 是 undefined
        	this.age = age;
        }

        Person("Bob", 30); // 报错: Cannot set property 'name' of undefined
        ```

5.  箭头函数的`this`

    ```js
    const obj = {
    	name: "Bob",
    	tags: ["a", "b"],
    	showTags() {
    		this.tags.forEach((tag) => {
    			console.log(this.name, tag); // 'Bob a', 'Bob b'
    		});
    	},
    };
    obj.showTags();
    ```

6.  独立函数调用

    ```js
    function Circle(radius) {
    	this.radius = radius;
    	this.draw = function () {
    		console.log(this);
    	};
    }

    const c = new Circle(10);
    c.draw(); // 输出：Circle 实例对象

    const draw = c.draw;
    draw(); // 非严格模式下输出：window (浏览器环境)
    // 严格模式下输出：undefined
    ```

## Call & Apply & Bind

> **简述**：`call`、`apply`和`bind` 是用来显式绑定函数调用时的`this`，解决函数调用环境不确定的问题。掌握它们可以灵活控制函数执行的上下文，尤其适用于**回调**场景。

**知识树**

1. `call` 方法

    - 立即执行函数并指定`this`，参数逐个传入。

2. `apply` 方法

    - 功能与`call`类似，参数以数组形式传入。

3. `bind` 方法

    - 返回一个绑定好`this`的新函数，稍后调用。
    - 经常用来提前定义回调函数的执行环境。

4. 适用场景

    - 明确指定函数执行环境。
    - 解决回调函数内`this`错乱问题。
    - 借用方法实现类似继承或方法复用功能。

**代码示例**

1. `call`与`apply`基础用法

    ```js
    function greet(greeting, punctuation) {
    	console.log(greeting + ", " + this.name + punctuation);
    }

    const user = { name: "Alice" };

    greet.call(user, "Hi", "!"); // 输出：Hi, Alice!
    greet.apply(user, ["Hello", "."]); // 输出：Hello, Alice.
    ```

2. 用`bind`绑定`this`

    - 这里使用了回调函数，若不绑定，默认指向 `Windows`

    ```js
    const user = {
    	name: "Bob",
    	tags: ["js", "vue"],
    	showTags() {
    		this.tags.forEach(
    			function (tag) {
    				console.log(this.name, tag);
    			}.bind(this)
    		); // 明确指定 this 为 user 对象
    	},
    };

    user.showTags(); // 输出：'Bob js' 和 'Bob vue'
    ```

3. 箭头函数 vs `bind`（推荐使用箭头函数）

    ```js
    const user = {
    	name: "Bob",
    	tags: ["js", "vue"],
    	showTags() {
    		this.tags.forEach((tag) => {
    			console.log(this.name, tag); // 箭头函数自动继承外层的 this
    		});
    	},
    };

    user.showTags(); // 输出：'Bob js' 和 'Bob vue'
    ```

4. 用`call`、`apply` 或 `bind` 调用构造函数

    ```js
    function Person(name, age) {
    	this.name = name;
    	this.age = age;

    	return this; // 若没有显式返回this，使用call/apply方法将返回underfined
    }

    const p1 = new Person("Alice", 25);
    const p2 = Person.call({}, "Bob", 30); // 等价于 new Person，但需提供一个空对象{}
    const p3 = Person.apply({}, ["Charlie", 30]);
    const p4 = Person.bind({}, "Nancy", 28);

    console.log(p1); // {name: 'Alice', age: 25}
    console.log(p2); // {name: 'Bob', age: 30}，注意此处须显式返回，否则为undefined
    console.log(p3); // {name: 'Charlie', age: 30}，注意此处须显式返回，否则为undefined
    console.log(p4()); // {name: 'Nancy', age: 28}，，注意此处须显式返回并主动调用
    ```

    - 注意：使用`call`或`apply`调用构造函数时，必须显式返回`this`对象，否则为`undefined`。

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
> 1. 验证参数类型
>    使用 `Array.isArray()` 方法检查第一个参数是否为有效的数组，如果不是，则抛出异常。
> 2. 错误处理
>    使用 `try...catch` 语句来捕获和处理抛出的异常，并在 `catch` 块中输出错误信息。
> 3. 异常抛出
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

# 面向对象编程

## 概念

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

## 抽象和封装

> **简述**：在面向对象编程中，抽象和封装是非常重要的概念。抽象是指将复杂的实现细节隐藏起来，仅暴露出核心的、简单的接口。而封装则是将数据和操作数据的行为（方法）绑定在一起，避免外部直接修改对象的状态。它们共同提高了代码的安全性、可维护性和可扩展性。

**知识树**

1. 抽象

    - 目的：隐藏复杂实现细节，仅暴露必要的、简洁的接口给用户。
    - 实现：设计简洁的 API，将复杂业务逻辑封装在内部模块中，对外只暴露核心功能。

2. 封装

    - 定义：将数据和操作数据的行为绑定在一起，并隐藏对象的内部状态，防止外部直接访问或修改。
    - 实现方式：
        - 对象属性封装：使用私有属性（如 `_prop` 或 ES2022 中的 `#prop`）保护内部数据。
        - 闭包封装：利用闭包将内部状态定义为局部变量（使用 let 或 const），只通过公开方法（如构造函数中返回的接口）来访问。例如，封装的核心思想可以归结为“将 `this` 中的属性用 let 声明为局部变量，通过闭包提供访问接口”。

3. 抽象与封装的优势

    - 提高代码安全性和可维护性。
    - 简化外部交互接口，降低使用复杂性。
    - 有助于实现模块化设计，便于测试和扩展。

**代码示例**

1.  封装和抽象：简化对象的交互

    - 在这个例子中，我们将 `Circle` 对象的 `defaultLocation` 属性和 `computeOptimalLocation` 方法封装在对象内部，只暴露 `draw` 方法供外部使用。

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
    		computeOptimalLocation(); // 内部调用，避免外部直接访问
    	};

    	// 私有方法，外部无法访问，只供内部使用
    	let computeOptimalLocation = function () {
    		console.log("Computing optimal location...");
    	};
    }

    const circle = new Circle(5);
    circle.draw(); // 输出：Drawing a circle at location: x = 0, y = 0 和 Computing optimal location...

    console.log(circle.defaultLocation); // undefined
    circle.computeOptimalLocation(); // Uncaught TypeError
    ```

    - 在这个代码中，`defaultLocation` 和 `computeOptimalLocation` 被封装在 `Circle` 对象内部，外部无法直接修改它们。外部只能通过 `draw` 方法与对象交互。

2.  通过封装保护数据

    - 如果没有封装，外部代码可能修改对象的属性，导致对象状态不一致。例如，修改 `defaultLocation` 会导致不可预测的行为。

    ```js
    circle.defaultLocation = false; // 修改了内部的 defaultLocation 属性
    console.log(circle.defaultLocation); // 输出 false，可能导致不一致的行为
    ```

3.  抽象：隐藏复杂性

    - 假设 `computeOptimalLocation` 方法现在需要一个参数 `factor`。如果我们将其暴露给外部，所有调用该方法的地方都需要传递新的参数，这增加了外部代码的复杂度。

    ```js
    circle.computeOptimalLocation(5); // 需要传递新的参数
    ```

    - 但如果 `computeOptimalLocation` 被封装为私有方法，外部无需关心其内部的实现，只需要调用公开接口 `draw` 即可。

    ```js
    this.draw = function () {
    	console.log(`Drawing a circle with radius ${this.radius}`);
    	// 内部处理：外部无需更改调用代码
    	this.computeOptimalLocation(5); // 内部逻辑可以随时调整
    };
    ```

## 属性描述符

> **简述**：属性描述符（Property Descriptor）用于精细控制 JavaScript 对象属性的行为，如读写、枚举和配置权限。通过 `Object.defineProperty` 可实现对属性更灵活的封装和保护，超出一般属性定义的能力范围。

**知识树**

1. `Object.defineProperty`方法

    - 作用：定义或修改对象的单个属性及其行为。
    - 参数：
        - 对象本身
        - 属性名
        - 属性描述符对象（Descriptor）

2. 属性描述符类型

    - 数据描述符（控制属性值本身）：
        - `value`：属性初始值。
        - `writable`：是否允许修改属性值（默认`false`）。
        - `enumerable`：是否允许属性枚举（如`for...in`）（默认`false`）。
        - `configurable`：是否允许重新定义或删除属性（默认`false`）。
    - 访问描述符（控制属性的访问方式）：
        - `get`：读取属性时调用的函数，无参数，必须返回值。
        - `set`：设置属性时调用的函数，接收单一参数（赋值的新值），无返回值。
        - 同样具有`enumerable`和`configurable`，但**不包含**`value`和`writable`。

3. 注意事项

    - 同一属性不可同时设置数据描述符与访问描述符，否则报错。
    - 描述符一旦设置`configurable: false`后，无法修改或删除该属性描述符（但`writable`为`true`时值仍可修改）。
    - 默认创建属性（如`obj.prop = 1`）时，描述符均为`true`（除显式定义外）。

4. 辅助方法

    - `Object.getOwnPropertyDescriptor(obj, prop)`：
        - 获取指定对象属性的描述符，常用于调试或验证属性配置。

5. `Object.defineProperty`与`getter`/`setter`对比
    - 定义位置：
        - Getter/Setter：ES6 前仅对象字面量，ES6 后扩展至类。
        - `defineProperty`：任意对象、函数或类均可使用，更广泛。
    - 使用体验：
        - Getter/Setter 语法更直观、清晰。
        - `defineProperty`更灵活全面，适用于高级封装与严格控制。

**代码示例**

1. 数据描述符示例（定义只读、不可枚举、不可配置属性）

    ```js
    const config = {};

    Object.defineProperty(config, "VERSION", {
    	value: "1.0.0",
    	writable: false, // 只读
    	enumerable: false, // 不可枚举
    	configurable: false, // 不可删除或重新定义
    });

    console.log(config.VERSION); // 输出: 1.0.0
    config.VERSION = "2.0.0"; // 无效赋值
    console.log(config.VERSION); // 仍输出: 1.0.0

    console.log(Object.keys(config)); // 输出: []
    ```

2. 访问描述符示例（封装私有状态，进行数据校验）

    ```js
    function User(initialAge) {
    	let _age = initialAge; // 私有状态

    	Object.defineProperty(this, "age", {
    		get() {
    			return _age;
    		},
    		set(newAge) {
    			if (typeof newAge !== "number" || newAge < 0) {
    				throw new Error("年龄必须为非负数");
    			}
    			_age = newAge;
    		},
    		enumerable: true,
    		configurable: false,
    	});
    }

    const user = new User(25);
    console.log(user.age); // 输出: 25

    user.age = 30;
    console.log(user.age); // 输出: 30

    // user.age = -5; // 抛出错误：年龄必须为非负数
    ```

3. 使用`getOwnPropertyDescriptor`检查属性配置

    ```js
    const book = {
    	title: "JavaScript Guide",
    };

    const descriptor = Object.getOwnPropertyDescriptor(book, "title");
    console.log(descriptor);
    // 输出：{ value: 'JavaScript Guide', writable: true, enumerable: true, configurable: true }
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

## 继承

> **简述**：继承是面向对象编程（OOP）的核心机制，通过继承，子类可以从父类中获取属性和方法，实现代码复用与多态。需要注意的是，JavaScript 的继承基于原型链机制，ES6 `class` 语法仅为其提供了一层更友好的抽象。

**知识树**

1. 构造函数与类的概念

    - 概念说明：
        - 在 JavaScript 中，构造函数相当于其他语言中的“类”。“类”原本指的是“种类”，用于描述具有相同特性和行为的一组对象。
        - 为了便于理解，这里我们用‘类’来统一描述构造函数
    - 注意事项：
        - 这里讨论的“类”指的是传统基于构造函数和原型链的实现方式，并不是 ES6 中通过 class 关键字引入的语法糖。

2. 继承的概念

    - 概念：
        - 继承是一种机制，通过子类继承父类的属性和方法，实现代码复用和多态。
        - “IS-A” 关系：例如，Circle 是一种 Shape，说明圆形类继承自形状类。
    - 优势：
        - 提高代码复用性和模块化设计。
        - 支持方法重写，从而实现多态性。
    - 别称
        - 父类被称为基类或父类（`Base`/`Super`/`Parent`）
        - 子类为派生类或子类（`Derived`/`Sub`/`Child`）

3. 继承的实现机制

    - 原型链机制：JS 中，实例通过内部的 `[[Prototype]]` 指向父对象，沿着原型链查找所需属性与方法。
    - 动态继承：原型链是动态的，父对象的修改会影响所有继承它的实例。

- 设计思想与注意事项

    - 方法重写与多态：子类可以重写父类方法，实现行为的定制和扩展。
    - 组合优于继承：在某些场景下，应考虑使用组合 Mixins（composition）而非继承，以提高代码的灵活性和可维护性。

## 原型和原型继承

> **简述**：在 JavaScript 中，继承是通过构造函数和原型链实现的。当使用构造函数创建对象时，该对象的内部 `[[Prototype]]`（可通过 `Object.getPrototypeOf()` 获取）被设置为构造函数的 `prototype` 属性。通过这种原型链机制，多个对象能够共享属性和方法，实现代码复用和动态继承。

**知识树**

1.  对象的原型

    - 每个 JavaScript 对象都有一个内部属性 `[[Prototype]]`，这是 JavaScript 引擎用于实现原型链的抽象机制。开发者可以通过 `Object.getPrototypeOf()` 或非标准的 `__proto__` 属性来访问它。

2.  `__proto__` VS `Object.getPrototypeOf()`

    - `__proto__` ：
        - `__proto__` 是一个由浏览器实现的访问器属性，用于查看或修改对象的原型。虽然它在 ES6 中被标准化为可选特性，但由于其历史遗留问题和潜在的性能问题，仍然不建议在实际开发中使用。尽管如此，出于演示方便，常在学习中使用 `__proto__` 来表示对象的原型。
    - `Object.getPrototypeOf()`：
        - `Object.getPrototypeOf()` 是标准的、推荐的方法，用于获取对象的原型。

3.  构造函数的 `prototype` 属性

    - 概念：
        - 每个构造函数都有一个 prototype 属性，它是一个对象，用于定义由该构造函数创建的新实例共同拥有的属性和方法。
    - 用法：
        - 当使用 `new Constructor()` 创建新对象时，新对象的内部原型（即 `[[Prototype]]` 或 `__proto__`）会指向 `Constructor.prototype`。
    - 默认情况：
        - 一个构造函数的 `prototype` 属性（一个对象）包含一个属性：`constructor`，指向构造函数本身。此外，`Constructor.prototype` 的 `[[Prototype]]` 指向 `Object.prototype`。

4.  原型链（Prototype Chain）

    - 概念：
        - 原型链是通过原型连接的对象链。每个对象的 `[[Prototype]]` 指向其构造函数的 `prototype` 属性，而构造函数的 `prototype` 属性本身也是一个对象，它的 `[[Prototype]]` 又指向其父构造函数的 `prototype` 属性，依此类推，直到 `Object.prototype`，其 `[[Prototype]]` 为 `null`，这是原型链的终点。
    - 示例：
        - 例如，`String.prototype` 的 `[[Prototype]]` 指向 `Object.prototype`，因此 `String` 实例可以访问 `Object.prototype` 上的方法，如 `toString()`。

5.  原型继承（Prototypal Inheritance）

    - 概念：
        - 当访问一个对象的属性或方法时，JavaScript 引擎会首先在对象自身查找，如果找不到，则会沿着原型链向上查找，直到找到该属性或方法，或者到达原型链的顶端（`Object.prototype`）。
    - 优点与影响：
        - 这种机制使得多个构造函数可以共享相同的方法和属性，而不需要在每个构造函数中重复定义。此外，原型继承是动态的，如果修改了原型链上的属性或方法，所有继承该原型的对象都会受到影响。

6.  继承成员

    - 继承成员（Inherited Members）指的是一个对象并非直接在自身上定义的属性和方法，而是通过原型链从它的父对象（或者更高层的祖先对象）中继承而来的。
    - 这里的父对象，指的是父构造函数的 `prototype` 属性。例如，`String` 实例继承自 `String.prototype`，而 `String.prototype` 又继承自 `Object.prototype`。

7.  JavaScript 根构造函数（ObjectBase）

    - 所有构造函数的原型链最终都会指向一个共同的祖先构造函数 `Object`，称为 `ObjectBase`，它是所有构造函数的根构造函数。先祖对象，也就是`Object.prototype`
    - `Object.prototype` 没有原型`[[Prototype]]`，它是原型链的终点。

8.  原型继承示例（不同软件展示可能有差异，使用 Obsidian）

    - 从通俗的角度来看，是构造函数之间的继承，实际上，是构造函数的原型（`__proto__`）之间的继承

    ```js
    		  arr ("abc")
    			  │
    			  ▼
    	   arr.__proto__  →  String.prototype
    								  │
    								  ▼
    				   String.prototype.__proto__  →  Object.prototype
    														  │
    														  ▼
    											 Object.prototype.__proto__  →  null
    ```

```mermaid
classDiagram
    class arr {
        + value: "abc"
    }

    class StringPrototype {
        + __proto__: Object.prototype
    }

    class ObjectPrototype {
        + __proto__: null
    }

    arr -->|__proto__| StringPrototype
    StringPrototype -->|__proto__| ObjectPrototype
    ObjectPrototype -->|__proto__| null
```

**代码示例**

1. 每个 JavaScript 对象都有一个原型。

    ```js
    const x = {}; // 创建一个空对象
    console.log(x);
    //{} 展开后，看到[[Prototype]] Object，指这对象的属性和方法，来自Object

    const str = "abc";
    console.log(str.__proto__); // 输出 String{...}，，指这对象的属性和方法，来自String
    ```

2. 构造函数的 `prototype` 属性

    ```js
    const x = {}; // 创建一个空对象
    console.log(x);
    //{} 展开后，看到[[Prototype]] Object，指这对象的属性和方法，来自Object

    const str = "abc";
    console.log(str.__proto__); // 输出 String{...}，，指这对象的属性和方法，来自String

    console.log(x.__proto__ === Object.prototype); // 输出：true
    console.log(arr.__proto__ === String.prototype); // 输出：true
    ```

3. 原型链（Prototype Chain）

    ```js
    const x = {}; // 创建一个空对象
    console.log(x);
    //{} 展开后，看到[[Prototype]] Object，指这对象的属性和方法，来自Object

    const str = "abc";
    console.log(str.__proto__); // 输出 String{...}，，指这对象的属性和方法，来自String，展开可以看到 [[Prototype]] Object ，指这对象 str.__proto__，也就是 String.prototype 的属性和方法，来自Object

    const n = 1;
    console.log(n.__proto__); // 输出 Number{...}，，指这对象的属性和方法，来自Number，展开可以看到 [[Prototype]] Object ，指这对象 n.__proto__，也就是 Number.prototype 的属性和方法，来自Object

    console.log(str.__proto__.__proto__ === Object.prototype); // 输出：true
    console.log(n.__proto__.__proto__ === Object.prototype); // 输出：true
    ```

4. 原型链关系（不同软件展示可能有差异，使用 Obsidian）

    ```js
    x = {}                   str = "abc"                       n = 1
    │                            │                                │
    ▼                            ▼                                ▼
    x.__proto__          str.__proto__                n.__proto__
    │                            │                                │
    │                            │                                │
    │                            │                                │
    │                            ▼                                ▼
    │                String.prototype.__proto__    Number.prototype.__proto__
    │                            │                                │
    │                            │                                │
    │                            ▼                                │
    └─────> Object.prototype <───────┘
    ```

5. 原型继承

    - 这里 `x` 使用了来自`Object`的`toString()`方法

    ```js
    const x = {}; // 创建一个空对象

    console.log(x.toString()); // 输出 [object Object]
    console.log(x.play()); // Uncaught TypeError: x.play is not a function
    ```

    - JavaScript 对象默认的 `toString` 方法返回的是 `[object Object]`

6. `Object.getPrototypeOf`

```js
const x = {}; // 创建一个空对象
console.log(Object.getPrototypeOf(x)); // 现代方式
console.log(x.__proto__); // 过时的方式，不要在实际开发中使用

console.log(Object.getPrototypeOf(x) === x.__proto__); // true
```

## 多级继承

> **简述**：在 JavaScript 中，原型继承不仅可以实现简单的继承关系，还支持多层级继承。通过原型链，JavaScript 对象可以继承多层父类的属性和方法。这种多层级继承机制允许对象不仅继承自其直接父类，还可以进一步继承从根对象（`Object.prototype`）传下来的方法和属性。

**知识树**

1. 多层级原型继承

    - 概念：
        - 每个对象的原型指向他的构造函数的`prototype`属性，而这个`prototype`属性也是一个对象，指向其构造函数的`prototype`属性。直到最终指向 `Object.prototype`，即原型链的根对象。
    - 解释：
        - 构造函数 String 的属性`String.prototype` 的构造函数是 `Object`。

2. 自定义构造函数的原型继承

    - 概念：
        - 使用自定义构造函数创建的对象，也具有原型继承关系。对象的原型指向构造函数的`prototype`属性，进一步继承自 `Object.prototype`。
    - 控制台显示歧义：
        - 对于任何自定义构造函数来说，其创建的实例的内部原型指向构造函数的 `prototype`，而这个 `prototype` 本身是一个普通对象，其内部原型又指向 `Object.prototype`，这就是控制台显示“`[[Prototype]]: Object`” 的原因。除内置构造函数外，其余显示为 `Object`。

3. 对象继承层级的可视化

    - 可以通过开发者工具的 `prototype` 属性查看对象的继承关系，理解对象在内存中的原型链结构。

**代码示例**

1. 原型链：`String`的原型继承

    通过访问字符串对象的原型，您可以看到它继承自 `String.prototype`，而 `String.prototype` 又继承自 `Object.prototype`。

    ```js
    const str = "abc";
    console.log(str.__proto__); // 输出 String{...}，，指这对象的属性和方法，来自String，展开可以看到 [[Prototype]] Object ，指这对象 str.__proto__，也就是 String.prototype 的属性和方法，来自Object
    console.log(str.__proto__.__proto__ === Object.prototype); // true
    ```

    - `str` 对象继承自 `String.prototype`，后者又继承自 `Object.prototype`。因此，字符串不仅具有字符串特有的方法，还可以访问 `Object` 原型中的方法。

2. 自定义构造函数的原型继承

    使用自定义构造函数创建的对象也遵循原型继承。例如，我们创建一个 `Circle` 构造函数，并查看新创建对象的原型链。

    ```js
    function Circle(radius) {
    	this.radius = radius;
    }
    const circle = new Circle(5);
    console.log(circle); // 输出 circle 对象，展开后，[[Prototype]]显示为Object，因为 Circle.prototype 本身也是一个对象，除内置构造函数外，其余显示为Object
    console.log(circle.__proto__ === Circle.prototype); // true
    console.log(Circle.prototype.__proto__ === Object.prototype); // true
    ```

    - `circle`对象继承自`circleBase`，`circleBase`继承自`objectBase`

## 实例成员与原型成员

> **简述**：在 JavaScript 中，每个对象既拥有通过构造函数或直接赋值创建的**实例成员**，又可以通过其原型链共享来自构造函数 `prototype` 对象的**原型成员**。实例成员是对象自身的属性和方法，它们在每个实例中单独存在，因此适合存储每个实例独有的数据；而原型成员则在所有实例之间共享，既节约内存，又使得对方法的修改能够在所有实例中生效。理解这两者的区别，对于合理组织代码、实现高效的对象复用和内存管理至关重要。

**知识树**

1. 成员之间的区分

    - 自有成员（Own Members）：
        - 指直接定义在对象自身上的属性和方法（例如在构造函数中使用 `this.xxx` 或通过 `obj.prop = ...` 添加的成员）。
        - 每个对象都有自己的副本，适用于存储独立的、实例特有的数据。
    - 实例成员（Instance Members）：
        - 强调通过构造函数初始化并直接存储在对象上的成员，与自有成员本质上是相同的，但侧重描述在实例化时产生的独有数据。
    - 继承成员（Inherited Members）：
        - 指不直接定义在对象自身，而是通过原型链继承而来的成员。当对象访问不存在于自身的属性时，会沿着原型链查找这些成员。
    - 原型成员（Prototype Members）：
        - 指定义在构造函数 `prototype` 对象上的成员，这些成员被所有实例共享，是继承成员的一部分。

2. 通过 `.prototype` 添加方法

    - 定义共享方法：
        - 将构造函数的行为（方法）添加到 prototype 上，避免每个实例都创建一份相同函数。
    - 共享性与修改性：
        - 无论实例何时创建，只要 prototype 中的方法发生更改，所有实例都会受到影响。
    - 注意：
        - 避免在 prototype 中添加引用类型属性，因为这会导致所有实例共享同一引用，易引发副作用。

3. 原型方法与实例方法的互相调用

    - 属性查找机制：当实例调用方法时，首先查找自身的属性，若不存在则沿着原型链查找。
    - 重写与覆盖：实例成员可覆盖原型成员，实现方法重写；同时，原型方法内部也可以通过 this 访问实例成员，从而实现复合行为。

4. 性能与内存优化

    - 将方法定义在 prototype 上可大幅减少内存消耗，因为每个实例共享同一方法实现。
    - 实例成员适合存储独立状态，但若涉及大对象或数组等引用类型时，应谨慎设计，避免不必要的重复。

5. 成员示例

    ```js
    function Circle(radius) {
    	this.radius = radius; // 实例成员&自有成员
    }
    Circle.prototype.color = "red"; // 原型成员&继承成员

    const circle = new Circle(5);
    circle.position = { x: 1, y: 2 }; // 自有成员

    console.log(circle.toString()); // 继承成员，toString方法继承自Object.prototype
    ```

**代码示例**

1. 实例方法与资源浪费

    ```js
    function Circle(radius) {
    	this.radius = radius;
    	this.draw = function () {
    		console.log("Drawing a circle with radius " + this.radius);
    	};
    }
    const circle1 = new Circle(5);
    const circle2 = new Circle(10);

    // 每个实例都有自己的 radius 属性、draw 方法
    console.log(circle1);
    console.log(circle2);
    ```

    - `circle1` 和 `circle2` 各自有独立的 `draw` 方法，这会导致内存的浪费，因为方法功能是相同的。

2. 实例方法与原型方法的区分

    ```js
    function Circle(radius) {
    	this.radius = radius;
    }

    Circle.prototype.draw = function () {
    	console.log("Drawing a circle with radius " + this.radius);
    };

    const circle1 = new Circle(5); // radius独有，但是draw()方法共享一个
    const circle2 = new Circle(10); //  radius独有，但是draw()方法共享一个

    // 调用实例方法
    circle1.draw(); // 输出：Drawing a circle with radius 5
    circle2.draw(); // 输出：Drawing a circle with radius 10
    ```

    - `draw` 方法已经移到 `Circle.prototype` 上，所有 `Circle` 构造函数的 实例 都共享这一个方法，从而节省了内存。
    - 这里 `radius` 是实例成员，`draw` 方法是原型成员。

3. 重写 `toString` 方法

    ```js
    function Circle(radius) {
    	this.radius = radius;
    }

    const circle1 = new Circle(5);
    // 原始的 toString 方法输出
    console.log(circle1.toString()); // 输出：[object Object]
    // [object Object]，这是表示该对象的默认字符串表示形式。

    // 修改原型中的 toString 方法
    Circle.prototype.toString = function () {
    	return "Circle with radius " + this.radius;
    };

    const circle2 = new Circle(10);
    console.log(circle2.toString()); // 输出：Circle with radius 10
    ```

    - JavaScript 对象默认的 `toString` 方法返回的是 `[object Object]`。我们可以通过修改 `Circle.prototype` 上的 `toString` 方法来改变 `Circle` 对象的字符串表示。

4. 实例方法调用原型方法

    ```js
    function Circle(radius) {
    	this.radius = radius;
    }

    Circle.prototype.move = function () {
    	console.log("Moving the circle");
    };

    Circle.prototype.draw = function () {
    	this.move(); // 调用原型中的 move 方法
    	console.log("Drawing a circle with radius " + this.radius);
    };

    const circle = new Circle(5);
    circle.draw(); // 输出：Moving the circle
    // 输出：Drawing a circle with radius 5
    ```

    - 在这个例子中，`draw` 方法是实例方法，它调用了原型中的 `move` 方法。

5. 原型方法调用实例方法

    反之，原型方法也可以调用实例方法。例如，`move` 方法中调用实例方法 `draw`：

    ```js
    function Circle(radius) {
    	this.radius = radius;
    }

    Circle.prototype.move = function () {
    	console.log("Moving the circle");
    	this.draw(); // 调用实例方法
    };

    const circle = new Circle(5);
    circle.move(); // 输出：Moving the circle
    // 输出：Drawing a circle with radius 5
    ```

    - 在这个例子中，`move` 方法是定义在原型中的，它调用了实例方法 `draw`。

## 实例成员与原型成员的迭代

> **简述**：在 JavaScript 中，对象的属性可以分为实例成员和原型成员。通过 `Object.keys` 和 `for...in` 循环，我们可以访问这些成员，但需要了解它们各自的行为差异。

**知识树**

1. `Object.keys` 方法

    - 仅返回对象的自有、可枚举属性，不包括继承的属性。
    - 无论继承的属性是否为可枚举，都不会返回

2. `for...in` 循环

    - 遍历对象所有可枚举属性（包括继承的原型成员）。

3. `hasOwnProperty` 方法

    - 判断属性是否是对象自身的，而非继承自原型链的。

4. 枚举性与属性控制

    - 通过 `Object.defineProperty` 设置属性的 `enumerable` 特性，可以使某些默认不可枚举的属性（如 `toString`）变为可枚举。

**代码示例**

1. `Object.keys` 只返回实例成员

    使用 `Object.keys` 获取对象的所有键名时，它只返回实例成员，不包括原型成员。

    ```js
    function Circle(radius) {
    	this.radius = radius; // 实例成员
    	this.move = function () {
    		// 实例成员
    		console.log("Moving the circle");
    	};
    }

    // 将 draw 方法添加到原型中
    Circle.prototype.draw = function () {
    	console.log("Drawing a circle with radius " + this.radius);
    };

    const circle = new Circle(5);

    // Return instance members
    console.log(Object.keys(circle)); // 输出 ['radius', 'move']
    ```

2. `for...in` 循环返回实例和原型成员

    ```js
    // Return all members (instance + prototype)
    for (let key in circle) {
    	console.log(key);
    }
    // radius
    // move
    // draw
    ```

    - `for...in` 循环会遍历对象的所有可枚举属性，包括实例成员和原型成员。

3. `hasOwnProperty` 方法区分自有成员和原型成员

    ```js
    console.log(circle.hasOwnProperty("radius")); // 输出 true，radius 是自有成员
    console.log(circle.hasOwnProperty("draw")); // 输出 false，draw 是原型成员
    ```

    - `circle.hasOwnProperty('radius')` 返回 `true`，因为 `radius` 是直接在 `circle` 对象上定义的自有成员。
    - `circle.hasOwnProperty('draw')` 返回 `false`，因为 `draw` 是从 `Circle.prototype` 继承来的原型成员。

4. 枚举性与属性控制

    ```js
    let x = {};
    for (let key in x) {
    	console.log(key, "-- before set enumerable true");
    }

    // 如果需要将 toString 设置为可枚举（不推荐，但仅作演示）
    Object.defineProperty(Object.prototype, "toString", {
    	enumerable: true,
    });

    for (let key in x) {
    	console.log(key, "-- after set enumerable true");
    }
    // 输出将包含 "toString"，因为我们将其设置为可枚举
    ```

## 不要修改内置对象的原型

> **简述**：JavaScript 是一种动态语言，允许开发者轻松地扩展对象的原型。然而，修改内置对象的原型，特别是像 `Array`、`Object`、`String` 等内置对象，是不推荐的做法。虽然它提供了方便性，但可能导致意想不到的错误和兼容性问题，特别是在使用第三方库时。如果多个地方修改了同一个内置对象的原型，可能会造成冲突，导致调试困难。

**知识树**

1. 修改内置对象的原型的风险

    - 修改 JavaScript 内置对象（如 `Array`、`String`、`Object`）的原型可能导致意外冲突。
    - 如果多个库或模块修改了相同的原型方法，会导致不兼容性和难以调试的错误。

2. 原型污染（Prototype Pollution）

    - 修改内置对象的原型可能导致“原型污染”，即外部修改了全局对象或内置对象的行为，影响到整个应用。

3. 避免修改内置对象的建议

    - 不要覆盖、添加或删除 JavaScript 内置对象的原型方法。
    - 如果需要扩展功能，考虑创建自定义函数或使用类，而不是修改现有的内置对象。

4. 可能的兼容性问题

    - JavaScript 引擎或其他第三方库可能会在未来版本中修改或增强这些原型方法，导致不兼容的问题。

**代码示例**

1. 修改内置对象的原型：添加 `shuffle` 方法

    假设你想向所有数组对象添加 `shuffle` 方法，用于打乱数组中的元素。虽然可以通过修改 `Array.prototype` 来实现，但这种做法不推荐。

    ```js
    // 添加一个 shuffle（洗牌） 方法到数组的原型
    Array.prototype.shuffle = function () {
    	for (let i = this.length - 1; i > 0; i--) {
    		const j = Math.floor(Math.random() * (i + 1));
    		[this[i], this[j]] = [this[j], this[i]];
    	}
    };

    const arr = [1, 2, 3, 4, 5];
    arr.shuffle();
    console.log(arr); // 打乱后的数组
    ```

    - 虽然这段代码在当前环境下有效，但是这样做会导致潜在的风险：其他库也可能扩展 `Array.prototype`，而导致行为不一致，调试困难。

2. 修改内置对象的原型可能带来的冲突

    如果你和其他开发者或者使用的第三方库同时修改了 `Array.prototype`，可能会导致无法预见的冲突。

    ```js
    // 假设在另一个地方，另一个库也扩展了 Array.prototype
    Array.prototype.shuffle = function () {
    	console.log("Shuffling...");
    };

    const arr = [1, 2, 3, 4];
    arr.shuffle(); // 不同的实现会导致不一致的行为
    ```

    - 在这个例子中，`shuffle` 方法的实现会因为覆盖而产生冲突。如果有其他库对 `shuffle` 方法做了修改，可能导致整个应用的异常行为。

3. 避免修改内置对象的正确做法：使用独立函数

    为避免对内置对象的修改，可以创建自己的函数或类，而不是直接修改原型。例如，你可以为数组创建一个单独的函数来打乱数组：

    ```js
    function shuffleArray(arr) {
    	for (let i = arr.length - 1; i > 0; i--) {
    		const j = Math.floor(Math.random() * (i + 1));
    		[arr[i], arr[j]] = [arr[j], arr[i]];
    	}
    }

    const arr = [1, 2, 3, 4];
    shuffleArray(arr);
    console.log(arr); // 打乱后的数组
    ```

    - 这样，避免了修改原生数组对象的原型，确保了应用的兼容性和稳定性。

## Ex: Stopwatch Object

> **要求**：设计一个可以模拟时钟功能的 `stopwatch` 对象（见对象章节练习）。
>
> 1. 将`start`、`stop`、`reset`和`duration`放入`prototype`中
>
> >

**代码**

- 这是一个提前优化导致坏影响的示范

    ```js
    function Stopwatch() {
    	this.startTime = 0; // 记录开始时间
    	this.endTime = 0; // 记录结束时间
    	this.running = false; // 是否正在计时
    	this.duration = 0; // 记录持续时间
    }

    Stopwatch.prototype.start = function () {
    	if (this.running) {
    		throw new Error("Stopwatch has already started"); // 如果已经启动，则抛出错误
    	}
    	this.running = true;
    	this.startTime = new Date(); // 设置开始时间为当前时间
    };

    Stopwatch.prototype.stop = function () {
    	if (!this.running) {
    		throw new Error("Stopwatch has not started yet"); // 如果未启动，则抛出错误
    	}
    	this.running = false;
    	this.endTime = new Date(); // 设置结束时间为当前时间
    	this.duration = (this.endTime - this.startTime) / 1000; // 计算持续时间，单位为秒
    };

    Stopwatch.prototype.reset = function () {
    	this.startTime = 0;
    	this.endTime = 0;
    	this.running = false;
    	this.duration = 0; // 重置时长
    };

    const stopwatch = new Stopwatch();

    stopwatch.start(); // 启动计时器
    setTimeout(() => {
    	stopwatch.stop(); // 停止计时器
    	console.log(stopwatch.duration); // 输出计时器时长，例如 2 秒
    	stopwatch.reset(); // 重置计时器
    }, 2000);
    ```

# 原型继承

## 原型继承与共享方法

> **简述**：利用原型继承，我们可以将多个构造函数中共有的方法抽取到一个父构造函数（的 `prototype` 属性）上，让不同的子构造函数的 实例 共享同一份实现，从而避免重复定义，提高内存效率和代码的可维护性。

**知识树**

1. 继承需求

    - 当多个构造函数需要具备相同功能时，继承可以让它们共享同一个方法的实现，从而避免重复定义。
    - 如果方法在不同构造函数的 `prototype` 属性上重复定义，则每个构造函数各自拥有一份该方法的拷贝，这不仅会增加内存消耗，还会增加维护成本（例如，修改方法时需要同步更新多个地方）。

2. `Object.create()`方法

    - 概念：
        - `Object.create()` 方法的作用是创建一个新的对象，并将该对象的内部 `[[Prototype]]` 设置为指定的原型对象（`proto`）。
    - 语法：`Object.create(proto, [propertiesObject])`
        - `proto`（必填）：作为新创建对象的原型，可以是对象或 `null`。如果为 `null`，则新对象的 `[[Prototype]]` 为 null，即没有原型。
        - `propertiesObject`（可选）：一个对象，用于定义新对象自身的属性。这些属性通过属性描述符（`configurable`、`enumerable`、`writable` 等）定义。
        - 返回值：一个以指定对象作为原型的新对象。
    - 示例 1：` Object.create(Shape.prototype);`
        - 这段代码将返回一个以 `Shape.prototype` 为原型的新对象。该新对象本身没有属性，但可以通过原型链访问 `Shape.prototype` 上的属性和方法。
    - 示例 2：`Object.create(null, { foo: { value: 'bar', writable: true } });`
        - 这段代码将返回一个没有原型（`[[Prototype]]` 为 `null`）的新对象，并定义了一个自身的属性 `foo`，其值为 `'bar'`。

3. 继承方式（示例 `Circle` 继承自 `Shape`）

    1. 通过 `Object.create(Parent.prototype)` 重设子构造函数的 `prototype` 属性
        ```js
        Circle.prototype = Object.create(Shape.prototype);
        ```
        - 这一步的目的是将 `Circle.prototype` 的原型设置为 `Shape.prototype`，从而实现原型继承。
    2. 修正子构造函数的 `constructor` 属性，确保其指向自身。
        ```js
        Circle.prototype.constructor = Circle;
        ```
        - 这一步的目的是修复 `constructor` 属性，使其指向 `Circle` 而不是 `Shape`。

4. 继承方式阐述

    - 使用 `Object.create()` ：
        1. 隔离原型链：
            - 使用 `Object.create(Shape.prototype)` 创建一个新对象，并将 `Circle.prototype` 设置为该对象的引用。这样，`Circle.prototype` 的原型是 `Shape.prototype`，但 `Circle.prototype` 本身是一个独立的对象。
            - 这种设计确保了在 `Circle.prototype` 上的修改不会影响到 `Shape.prototype`，而在 `Shape.prototype` 上的修改会动态影响 `Circle.prototype`。
        2. 避免直接赋值的副作用：
            - 如果直接写 `Circle.prototype = Shape.prototype;`，那么 `Circle.prototype` 和 `Shape.prototype` 将指向同一个对象。对 `Circle.prototype` 的任何修改都会直接影响到 `Shape.prototype`，这会导致意外的副作用。
        3. 修复 `constructor` 属性：
            - 直接赋值会导致 `Circle.prototype.constructor` 仍然指向 `Shape`，因此需要手动修正为 `Circle`。
    - 修正 `constructor` 属性的原因：
        - 使用 `Object.create(Shape.prototype)` 创建的对象，其 `constructor` 属性继承自 `Shape.prototype`，指向 `Shape`。
        - 这会导致通过 `Circle` 创建的实例调用 `constructor` 属性时，指向 `Shape` 而不是 `Circle`，因此需要手动修正为 `Circle`。
    - 方法添加：
        - 在子构造函数的 `prototype` 属性上添加方法前，需要先继承父构造函数的 `prototype`。
        - 如果先添加方法再继承，`prototype` 被替换后，先前定义在 `prototype` 属性上的方法会丢失。
    - 等价
        ```js
        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;
        // 等价于
        Circle.prototype.__proto__ = Shape.prototype; // 不推荐直接使用 __proto__
        ```

5. 属性为什么不建议挂载在 `prototype` 上

    - 每个对象的属性值是独立的，放在 prototype 中，修改一个变量属性值，所有变量均改变

**代码示例**

1. 继承需求：两个构造函数在原型属性上定义了重复方法

    ```js
    // 定义 Circle 构造函数
    function Circle(radius) {
    	this.radius = radius;
    }
    // 通用方法
    Circle.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };
    // 独有方法，Circle 的绘制依赖于半径
    Circle.prototype.draw = function () {
    	console.log("Drawing circle with radius " + this.radius);
    };

    // 定义 Square 构造函数
    function Square(side) {
    	this.side = side;
    }
    // 通用方法
    Square.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };
    // 独有方法，Square 的绘制依赖于边长
    Square.prototype.draw = function () {
    	console.log("Drawing square with side " + this.side);
    };

    const circle = new Circle(5);
    const square = new Square(10);

    circle.duplicate(); // Duplicating Circle
    circle.draw(); // Drawing circle with radius 5
    square.duplicate(); // Duplicating Square
    square.draw(); // Drawing square with radius 10
    ```

2. 继承方法

    ```js
    // 定义 Shape构造函数
    function Shape() {}
    Shape.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius) {
    	this.radius = radius;
    }

    // 定义 Square 构造函数
    function Square(side) {
    	this.side = side;
    }

    // 让 Circle 继承自 Shape
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;
    Circle.prototype.draw = function () {
    	console.log("Drawing circle with radius " + this.radius);
    };

    // 让 Square 继承自 Shape
    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;
    Square.prototype.draw = function () {
    	console.log("Drawing square with side " + this.side);
    };

    const circle = new Circle(5);
    const square = new Square(10);

    circle.duplicate(); // Duplicating Circle
    circle.draw(); // Drawing circle with radius 5
    square.duplicate(); // Duplicating Square
    square.draw(); // Drawing square with radius 10
    ```

3. 属性为什么不建议挂载在 `prototype` 上

    ```js
    function Shape() {}
    Shape.prototype.color = "red";

    const shape1 = new Shape();
    const shape2 = new Shape();

    console.log(shape1.color); // 输出: red
    console.log(shape2.color); // 输出: red

    Shape.prototype.color = "blue";

    console.log(shape1.color); // 输出: blue
    console.log(shape2.color); // 输出: blue
    ```

## 使用父类属性

> **简述**：在继承关系中，若想要在子构造函数中调用父构造函数中的属性，通常使用 `call()` 或 `apply()` 方法来实现。

**知识树**

1.  `call()` 和 `apply()`：

    - 这两个方法可以显式地指定函数执行时的 `this` 值，但它的参数传递方式有所不同。
    - `call` 方法的第一个参数是指定 `this` 的对象，后面的参数则是传递给函数的参数。
    - `apply` 的第一个参数是指定 `this` 的对象，第二个参数是一个数组，它会被传递给函数。

2.  构造函数中的 `this`：

    - `this` 是指向当前实例对象的指针，子类构造函数通过 `call()` 或 `apply()` 继承父类的 `this`。

**代码示例**

- `Shape.call(this, color);`

    1. call() 将 this 指向 circle 实例。
    2. 然后，将 "red" 作为 color 传递给 Shape 构造函数。
    3. 在 Shape 构造函数中，this.color = color 这行代码将 "red" 赋值给了 circle 实例的 color 属性。

    ```js
    // 定义 Shape构造函数
    function Shape(color) {
    	this.color = color;
    }
    Shape.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius, color) {
    	Shape.call(this, color);
    	this.radius = radius;
    }

    // 让 Circle 继承自 Shape
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;
    Circle.prototype.draw = function () {
    	console.log("Drawing circle with radius " + this.radius);
    };

    const circle = new Circle(5, "red");
    console.log(circle.color); // 输出 red
    ```

- `Shape(color);`补充

    - 若将`Shape.call(this, color);` 替换为 `Shape(color);` ，这样的调用没有明确指定 this，因此 this 默认指向全局对象（在浏览器中是 window）。

## 封装继承方法

> **简述**：中间函数继承，是一种将继承关系设置逻辑，提取到一个独立函数中的方法，旨在简化继承设置，避免重复代码并减少出错的概率。通过这个方法，我们可以避免为每个子类手动设置继承链。

**知识树**

1. 手动设置继承链的问题：

    - 手动设置继承链（如通过直接操作 `prototype`）会导致代码重复，并且容易出错。
    - 这种方式随着子类数量增加，可能使得代码变得混乱且冗长。

2. 中间函数继承：

    - 通过创建一个函数（如 `extend()`），可以将继承链的设置逻辑提取到一个可复用的地方，从而简化代码。
    - 这个函数接受子构造函数和父类构造函数作为参数，自动设置继承链。

3. 使用中间函数的优点：

    - 重复代码减少，维护更加简便。
    - 可避免错误地手动设置继承链。
    - 使继承操作变得更加抽象，提升代码的可读性和可维护性。

**代码示例**

1. 使用 extend 函数

    ```js
    function extend(Child, Parent) {
    	Child.prototype = Object.create(Parent.prototype); // 设置继承链
    	Child.prototype.constructor = Child; // 修正 constructor 指向子类
    }

    // 定义 Shape构造函数
    function Shape() {}
    Shape.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius, color) {
    	Shape.call(this, color);
    	this.radius = radius;
    }

    // 定义 Square 构造函数
    function Square(side) {
    	this.side = side;
    }

    // 使用 extend 函数设置继承
    extend(Circle, Shape);
    Circle.prototype.draw = function () {
    	console.log("Drawing circle with radius " + this.radius);
    };

    // 使用 extend 函数设置继承
    extend(Square, Shape);
    Square.prototype.draw = function () {
    	console.log("Drawing square with side " + this.side);
    };

    const circle = new Circle(5, "red");
    const square = new Square(10);

    circle.duplicate(); // Duplicating Circle
    circle.draw(); // Drawing circle with radius 5
    square.duplicate(); // Duplicating Square
    square.draw(); // Drawing square with radius 10
    ```

## 方法重写

> **简述**：方法重写是面向对象编程中一种重要的技巧，它允许子类重定义父类的方法。在 JavaScript 中，方法重写是通过覆盖继承自父类的函数来实现的。通过这种方式，子类可以根据需求调整父类方法的行为。同时，子类仍然可以在需要时调用父类的实现。

**知识树**

1. 方法重写的概念：

    - 方法重写是指在子类中重新定义从父类继承的方法。
    - 通过方法重写，子类可以修改父类方法的行为，以适应不同的需求。

2. 方法重写的应用：

    - 在子类中定义与父类相同名称的方法，JavaScript 会使用子类的实现覆盖父类的实现。
    - 需要注意，方法重写通常会在继承链中发生，子类的方法会优先被调用。

3. 调用父类的方法：

    - 子类重写父类方法时，如果需要调用父类的实现，可以使用 super 关键字（在现代 JavaScript 中）或使用 call() 方法手动调用。
    - 通过 super 或 call()，子类可以调用父类的具体实现，并将当前对象的 this 作为上下文传递给父类方法。

4. 注意事项：

    - 子类重写方法时，需要确保在修改原有方法的逻辑后，可以调用父类方法来保证正确的继承行为。
    - 使用 call() 时，要特别注意方法的 this 上下文，确保父类方法接收到正确的对象上下文。

**代码示例**

1. 方法重写

    ```js
    function extend(Child, Parent) {
    	Child.prototype = Object.create(Parent.prototype); // 设置继承链
    	Child.prototype.constructor = Child; // 修正 constructor 指向子类
    }

    // 定义 Shape构造函数
    function Shape(color) {
    	this.color = color;
    }
    Shape.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius) {
    	this.radius = radius;
    }

    // 让 Circle 继承自 Shape
    extend(Circle, Shape);
    // 重写 duplicate 方法
    Circle.prototype.duplicate = function () {
    	console.log("Duplicating circle with radius " + this.radius);
    };

    const circle = new Circle(5);
    console.log(circle.duplicate()); // 输出 Duplicating circle with radius 5
    ```

2. 调用父类的方法

    ```js
    function extend(Child, Parent) {
    	Child.prototype = Object.create(Parent.prototype); // 设置继承链
    	Child.prototype.constructor = Child; // 修正 constructor 指向子类
    }

    // 定义 Shape构造函数
    function Shape(color) {
    	this.color = color;
    }
    Shape.prototype.duplicate = function () {
    	console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius) {
    	this.radius = radius;
    }

    // 让 Circle 继承自 Shape
    extend(Circle, Shape);
    // 重写 duplicate 方法
    Circle.prototype.duplicate = function () {
    	Shape.prototype.duplicate.call(this);

    	console.log("Duplicating circle with radius " + this.radius);
    };

    const circle = new Circle(5);
    console.log(circle.duplicate());
    // 输出
    // Duplicating Circle
    // Duplicating circle with radius 5
    ```

## 多态性

> **简述**：多态性是面向对象编程中一个非常强大且关键的概念，意味着“多种形态”。在 JavaScript 中，多态性允许一个方法根据不同的对象类型表现出不同的行为。这使得代码更加灵活、简洁，并且易于扩展和维护。

1. 多态性的定义：

    - 多态性源自希腊语，“poly” 意味着“多”，“morph” 意味着“形态”。在编程中，它指的是同一操作作用于不同类型的对象时，表现出不同的行为。
    - 多态性使得同一方法可以在不同的对象中有不同的实现，从而增强代码的灵活性和可维护性。

2. 多态性的实现：

    - 通过方法重写，子类可以根据自己的需要改变父类的方法实现，从而形成多种不同的行为。
    - 多态性让你可以使用同一方法名调用不同类的实现，而不需要关心具体的实现细节。

3. 多态性的优势：

    - 简化代码：多态性可以使代码更简洁，不需要写多个条件语句来处理不同类型的对象。
    - 增强灵活性：同一方法在不同的对象中有不同的表现，可以根据对象的类型自动选择正确的实现。
    - 可扩展性：新的子类可以在不修改现有代码的情况下轻松添加到现有系统中，并且可以自然地继承父类的多态行为。

**知识树**

1. 基本的多态性实现

    ```JS
    function extend(Child, Parent) {
      Child.prototype = Object.create(Parent.prototype); // 设置继承链
      Child.prototype.constructor = Child; // 修正 constructor 指向子类
    }

    // 定义 Shape构造函数
    function Shape(color) {
      this.color = color;
    }
    Shape.prototype.duplicate = function () {
      console.log("Duplicating " + this.constructor.name);
    };

    // 定义 Circle 构造函数
    function Circle(radius) {
      this.radius = radius;
    }

    // 让 Circle 继承自 Shape
    extend(Circle, Shape);
    // 重写 duplicate 方法
    Circle.prototype.duplicate = function () {
      console.log("Duplicating circle with radius " + this.radius);
    };

    function Square(side) {
      this.side = side;
    }

    extend(Square, Shape); // 设置继承链

    // 子类重写父类的方法
    Square.prototype.duplicate = function () {
      console.log("Duplicating square with side " + this.side);
    };

    const circle = new Circle(5);
    const square = new Square(10);

    const shapes = [circle, square];
    shapes.forEach(function (shape) {
      shape.duplicate(); // 根据对象类型自动调用不同的 duplicate 方法
    });
    // 输出：
    // Duplicating circle with radius 5
    // Duplicating square with side 10

    ```

## 继承的局限性

> **简述**：继承是面向对象编程中常用的代码复用手段，但在多层继承的结构中，它可能会导致代码复杂和脆弱。尤其是当新对象加入时，继承链可能变得不清晰且难以维护。在这种情况下，组合作为继承的替代方案，提供了更加灵活且易于管理的代码重用方式。

**知识树**

1. 继承的局限性：

    - 继承链的复杂性：当继承结构变得复杂时，问题随之而来。以动物对象为例，假设我们有一个 `Animal` 类，包含 `eat()` 和 `walk()` 方法。若我们加入一个 `Goldfish` 对象，从 `Animal` 继承而来，它继承了 `walk()` 方法，但金鱼不能走路，只能游泳，这就造成了继承链的设计不合理。
        ```js
        Animal (eat、walk)
        ├── Person
        ├── Dog
        └── Goldfish（不符合，需要调整结构）
        ```
    - 解决方案：一种常见的解决方法是引入中间层次的继承结构，例如 `Mammal`（哺乳动物）和 `Fish`（鱼类）。
        ```js
        Animal (eat)
        ├── Mammal (walk)
        │   ├── Person
        │   └── Dog
        └── Fish (swim)
            └── Goldfish
        ```
    - 复杂性加剧：这种多层继承关系可能导致在未来每次需要新增对象时，继承结构的修改变得越来越脆弱，代码的扩展性受限，管理起来困难重重。

2. 组合引入

    - **组合优于继承**：相较于继承，组合通过将对象的功能模块化，并在需要时进行组合，提供了一种灵活且易于扩展的方式。组合不依赖于固定的层次结构，而是通过独立的对象协作来完成目标。
    - 将特征封装为独立对象：我们可以将动物的各种行为或特性封装为独立的对象。例如，canWalk、canEat 和 canSwim 可以分别定义不同的特性，表示能走、能吃和能游泳的能力。然后，通过组合这些能力对象，来构建不同的动物。
    - JavaScript 中，我们可以使用混入（mixin）来实现组合。

        ```js
        canEat (eat)
        canWalk (walk)
        canSwim (swim)

        Person (组合两个对象)
        ├── canEat (eat)
        └── canWalk (walk)

        Fish (组合两个对象)
        ├── canEat (eat)
        └── canSwim (swim)
        ```

## Mixins

> **简述**：Mixins 是一种将多个对象的功能组合到一个目标对象中的技术。通过将不同的功能合并到一个对象，我们能够实现代码复用、模块化功能扩展以及更灵活的对象功能组合。`Object.assign()` 是实现 `Mixins` 的常用方法，它可以将多个源对象的属性和方法复制到目标对象中。通过这种方式，我们可以增强对象的功能，而不需要通过继承来创建复杂的类层次结构。

**知识树**

1. 使用 `Object.assign()` 组合对象

    - `Object.assign()` 方法用于将多个源对象的属性和方法合并到一个目标对象中。目标对象将获得所有源对象的属性和方法，支持快速实现代码复用和功能扩展。

2. 使用构造函数与原型链继承

    - 通过构造函数的原型和 `Object.assign()` 的结合，可以为实例对象动态添加功能，这使得对象能够继承多个功能，而不需要显式的类继承。

3. `mixin` 函数简化对象组合

    - 通过定义通用的 `mixin` 函数，多个源对象的功能可以被灵活地合并到目标对象中，简化代码并提升可维护性和可扩展性。

**代码示例**

1. 对象字面量与方法定义

    ```js
    const canEat = {
    	eat: function () {
    		this.hunger--;
    		console.log("eating");
    	},
    };

    const canWalk = {
    	walk: function () {
    		console.log("walking");
    	},
    };
    ```

2. 使用 `Object.assign()` 组合对象

    ```js
    const canEat = {
    	eat: function () {
    		this.hunger--;
    		console.log("eating");
    	},
    };

    const canWalk = {
    	walk: function () {
    		console.log("walking");
    	},
    };

    const person = Object.assign({}, canEat, canWalk);
    console.log(person); // { eat: [Function: eat], walk: [Function: walk] }
    ```

3. 使用构造函数与原型链继承

    ```js
    const canEat = {
    	eat: function () {
    		this.hunger--;
    		console.log("eating");
    	},
    };
    const canWalk = {
    	walk: function () {
    		console.log("walking");
    	},
    };
    const canSwim = {
    	swim: function () {
    		console.log("swimming");
    	},
    };

    function Person() {}
    Object.assign(Person.prototype, canEat, canWalk);
    console.log(new Person()); //   查看对象原型，可以找到 eat、walk 方法

    function Goldfish() {}
    Object.assign(Goldfish.prototype, canEat, canSwim);
    console.log(new Goldfish()); //   查看对象原型，可以找到 swim 方法
    ```

4. `mixin` 函数简化对象组合

    ```js
    function mixin(target, ...sources) {
        Object.assign(target, ...sources);
    }

    ...

    mixin(Person.prototype, canEat, canWalk);
    const personWithMixin = new Person();
    console.log(personWithMixin); // Person { eat: [Function: eat], walk: [Function: walk] }
    ```

## Ex:1 Inheritance Exercise

> **要求**：设计两个对象，`HtmlElement` 和 `HtmlSelectElement`，后者表示下拉选择框（`dropdown list`）。`HtmlSelectElement` 继承自 `HtmlElement`，并且需要正确设置原型链，使得子类可以继承父类的方法，同时实现自定义的功能。
>
> **解法**：
>
> 1. **Step1**：定义一个构造函数 `HtmlElement`，添加 `click` 方法，并在其原型上添加 `focus` 方法。
> 2. **Step2**：定义一个构造函数 `HtmlSelectElement`，为 `HtmlSelectElement` 添加自己的属性（如 `items`）和方法（如 `addItem`、`removeItem`）。
> 3. **Step3**：手动将 HtmlSelectElement 原型设置为 `HtmlElement` ，从而让 `HtmlSelectElement` 继承 `HtmlElement` 的方法。

- 目标结构展示

    ```js
    HtmlSelectElement实例
    ├── addItem()
    ├── items
    ├── removeItem()
    ├── [[Prototype]]
    	├── click()
    	└── [[Prototype]]
    		└── focus()
    ```

- 代码示例

    ```js
    function HtmlElement() {
    	this.click = function () {
    		console.log("clicked");
    	};
    }

    HtmlElement.prototype.focus = function () {
    	console.log("focused");
    };

    function HtmlSelectElement(items = []) {
    	this.items = items;

    	this.addItem = function (item) {
    		this.items.push(item);
    	};

    	this.removeItem = function (item) {
    		this.items.splice(this.items.indexOf(item), 1);
    	};
    }

    // 继承设置，但是这里无法满足需求，丢失了 click 方法
    // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
    // 为实现要求，需要采用继承实例的方式
    HtmlSelectElement.prototype = new HtmlElement();
    // 调整 constructor
    HtmlSelectElement.prototype.constructor = HtmlSelectElement;

    // 测试代码
    const selectElement = new HtmlSelectElement(["Option1", "Option2"]);

    selectElement.addItem("Option3");
    console.log(selectElement.items); // 输出: ["Option1", "Option2", "Option3"]

    selectElement.removeItem("Option1");
    console.log(selectElement.items); // 输出: ["Option2", "Option3"]

    // 继承自 HtmlElement 的方法
    selectElement.click(); // 输出: clicked
    selectElement.focus(); // 输出: focused
    ```

## Ex:2 Polymorphism Exercise

> **要求**：设计两个对象：`HtmlImageElement` 和 `HtmlSelectElement`，它们都继承自 `HtmlElement`。 他们都有 `render` 方法，但是形式不同
> **解法**：在上述代码继承上，分别在两个构造函数上添加同名方法 `render`

- 代码示例

    ```js
    function HtmlElement() {
    	this.click = function () {
    		console.log("clicked");
    	};
    }

    HtmlElement.prototype.focus = function () {
    	console.log("focused");
    };

    function HtmlSelectElement(items = []) {
    	this.items = items;

    	this.addItem = function (item) {
    		this.items.push(item);
    	};

    	this.removeItem = function (item) {
    		this.items.splice(this.items.indexOf(item), 1);
    	};

    	this.render = function () {
    		return `
    <select>${this.items
    			.map(
    				(item) => `
      <option>${item}</option>`
    			)
    			.join("")}
    </select>`;
    	};
    }

    HtmlSelectElement.prototype = new HtmlElement();
    // 调整 constructor
    HtmlSelectElement.prototype.constructor = HtmlSelectElement;

    function HtmlImageElement(src) {
    	this.src = src;
    	this.render = function () {
    		return `<img src ="${this.src}" />`;
    	};
    }

    HtmlImageElement.prototype = new HtmlElement();
    HtmlImageElement.prototype.constructor = HtmlImageElement;

    const selectElement = new HtmlSelectElement(["Option1", "Option2"]);
    console.log(selectElement.render());
    // 输出
    // <select>
    //   <option>Option1</option>
    //   <option>Option2</option>
    // </select>

    const imageElement = new HtmlImageElement();
    console.log(imageElement.render());
    // 输出：<img src ="undefined" />
    imageElement.src = "http://";
    console.log(imageElement.render());
    // 输出：<img src ="http://" />
    ```

# ES6 Class

## `Classes`

> **简述**：在 ES6 引入的类（class）是一种创建对象和继承的新语法，但本质仍是原型继承的语法糖，本身并未引入传统面向对象语言中真正意义上的类机制。
>
> > 学习此节前，确保自己已经对原型、继承的关系十分熟悉

**知识树**

1. class 的概念

    - 类实际上是构造函数的语法糖，typeof class 返回 "function"
    - 默认开启严格模式，增强代码的安全性

2. class 的结构

    - 类体 `{}` 内定义类成员（属性、方法）
    - 成员类型：
        - 实例成员：在 constructor 中定义，仅实例可访问
        - 原型成员：在类体内定义的方法，不同实例共享，通过原型链访问

3. constructor 构造函数

    - 初始化实例成员，类实例化时自动调用
    - 每个类只能有一个 constructor，若未定义则自动生成空构造函数

4. class 与 new 操作符

    - 用于实例化类，创建类的实例对象
    - 使用类时不加 new 会直接报错，区别于传统构造函数（后者返回 undefined）
    - 原因在于类默认启用严格模式

5. class 中的 this 关键字

    - 在类方法中，独立调用时 this 为 undefined

**代码示例**

1. class 替代构造函数

    ```js
    // 传统构造函数方式
    // function Circle(radius) {
    //   this.radius = radius;

    //   this.draw = function () {
    //     console.log("draw");
    //   };
    // }

    // ES6 类方式
    class Circle {
    	// {} 内称为该class 的 body

    	//使用 constructor 初始化实例
    	constructor(radius) {
    		//  定义实例成员
    		this.radius = radius;
    		this.move = function () {};
    	}

    	//  定义原型方法（共享）
    	draw() {
    		console.log("draw");
    	}
    }

    const c = new Circle(1);
    console.log(c); // 实例对象，含 radius 和 move 方法
    c.draw(); // 调用原型方法 draw

    console.log(typeof Circle); // "function"，验证类本质仍是函数
    ```

2. new 操作符

    ```js
    // 传统构造函数方式
    function Circle(radius) {
    	this.radius = radius;
    }

    const c = new Circle(5);
    console.log(c); // 输出 c 对象

    const c1 = Circle(5);
    console.log(c1); // 输出 undefined

    // ES6 类方式
    class Square {
    	constructor(side) {
    		this.side = side;
    	}
    }

    const s = new Square(1);
    console.log(s); // 输出 s 对象

    const s1 = Square(1); // 直接报错 Uncaught TypeError: Class constructor Square cannot be invoked without 'new'
    ```

3. 类中的 `this` 默认使用严格模式：

    ```js
    // "use strict";

    // 类
    class Circle {
    	constructor(radius) {
    		this.radius = radius;
    	}

    	draw() {
    		console.log(this);
    	}
    }

    const c = new Circle(5);
    c.draw(); // 输出：Circle 实例对象

    const draw = c.draw;
    draw(); // 输出：undefined (因为类体默认启用严格模式)

    // 原始构造函数
    function Square(side) {
    	this.side = side;
    	this.duplicate = function () {
    		console.log(this);
    	};
    }

    const c1 = new Square(10);
    c1.duplicate(); // 输出：Square 实例对象

    const duplicate = c1.duplicate;
    duplicate(); // 非严格模式下输出：window (浏览器环境)
    // 严格模式下输出：undefined
    ```

    - 类的定义体默认启用严格模式，独立调用类的方法时，`this` 默认是 `undefined`。

## `Hoisting`

> **简述**：提升（Hoisting）是 JavaScript 的一种特性，会在代码执行前自动将函数或变量声明提前到所在作用域的顶部，但不同的声明方式（如函数声明、函数表达式、类声明和类表达式）提升行为不同。

**知识树**

1. 提升的概念

    - 在代码实际执行前，JS 会自动将声明提前到当前作用域顶部（注意：仅声明本身，不含赋值）

2. 函数声明（Function Declaration）

    - 会被完全提升到作用域顶部，因此可在声明前调用而不会出错
    - 不需要末尾分号 `;`，即便加上， prettier 格式化之后将消除

3. 函数表达式（Function Expression）

    - 不会提升，仅变量声明被提升，函数本身的赋值操作不会提升
    - 使用变量或常量存储函数，表达式末尾需加分号 `;`（惯例），即便不加，prettier 格式化之后将加上
    - 在定义前调用会报错（未初始化）

4. 类声明与类表达式（Class Declaration & Expression）

    - 类声明和类表达式均不会提升，必须先定义再使用
    - 相较于类表达式，推荐使用类声明语法

**代码示例**

1. 函数声明与提升

    ```js
    sayHello(); // 输出正常：'Hello'

    // 函数声明（Function Declaration）
    function sayHello() {
    	console.log("Hello");
    }
    ```

    - 函数声明在定义前调用不会报错，因为已被提升到顶部。

2. 函数表达式与非提升

    ```js
    sayGoodbye(); // 报错：sayGoodbye is not defined

    // 函数表达式（Function Expression）
    const sayGoodbye = function () {
    	console.log("Goodbye");
    };
    ```

    - 表达式未提升，调用时变量未初始化，因此报错。

3. 类声明与类表达式的非提升特性

    ```js
    const c = new Circle(); // 报错：Cannot access 'Circle' before initialization

    // 类声明（Class Declaration）
    class Circle {}

    const square = new Square(); // 报错：Cannot access 'Square' before initialization

    // 类表达式（Class Expression）
    const Square = class {};
    ```

    - 类声明和类表达式均不提升，必须定义后使用。

## `Static & Instance Methods`

> **简述**：实例方法属于对象实例，可以访问实例数据；静态方法属于类本身，用于实现通用工具功能，不涉及实例数据。ES6 并没有引入静态方法这一概念，而是通过 class 语法使得定义静态方法变得更加正式和直观。

**知识树**

1. 实例方法（Instance Methods）

    - 属于具体实例对象，通过实例调用
    - 可访问实例的数据和方法
    - 原型方法也属于实例方法

2. 静态方法（Static Methods）

    - 属于类，通过类名调用
    - 不能访问实例数据或方法
    - 常用于通用工具函数封装

3. static 关键字

    - 修饰方法，使之成为静态方法
    - 只能由类调用，实例调用则报错

4. 常见用途：

    -工具函数（类型转换、数据校验、对象创建、通用计算等）

5. 概念辨析

    - 实例方法 ≠ 实例成员属性（实例属性由构造函数创建直接存储于实例）
    - 原型方法属于实例方法，但存储于原型链上，由所有实例共享

**代码示例**

1. 实例方法与静态方法对比：

    ```js
    class Circle {
    	constructor(radius) {
    		this.radius = radius;
    	}

    	// 实例方法（对象拥有）
    	draw() {
    		console.log("draw circle with radius", this.radius);
    	}

    	// 静态方法（类拥有）
    	static parse(jsonString) {
    		console.log("$", this.radius); // 在静态方法中无法访问实例数据，将输出 $ undefined
    		const jsonObj = JSON.parse(jsonString);
    		return new Circle(jsonObj.radius);
    	}
    }

    const c = new Circle(5);
    c.draw();
    // 输出：draw circle with radius 5
    // c.parse(); 报错：c.parse is not a function

    const json = '{"radius":10}';
    const c2 = Circle.parse(json);
    console.log(c2);
    // 输出：
    // $ undefined
    // Circle { radius: 10 }
    // c2.parse(json); // 报错：Uncaught TypeError: c2.parse is not a function
    ```

    - `draw()`： 实例方法，操作具体对象。
    - `parse()` ：静态方法，解析 JSON，创建实例对象。

2. 工具类的典型应用（如 Math 对象）：

    ```js
    class MyMath {
    	static abs(value) {
    		return value >= 0 ? value : -value;
    	}
    }

    console.log(MyMath.abs(-7)); // 输出：7
    ```

    - 静态方法用于封装通用工具函数，无需创建对象即可直接使用。

## `Private Members in Classes`

> 简述：私有成员是类中不能从外部直接访问的属性或方法，用于隐藏内部实现细节，降低代码复杂性，实现对象的抽象性和安全性。

**知识树**

1. 私有成员（Private Members）：

    - 用于隐藏类的内部细节，避免外部直接访问。
    - 增强类的封装性，实现更好的抽象。

2. 伪私有（约定式）实现方法：

    - 使用下划线 `_` 作为前缀（如 `_radius`）。
    - 仅为开发人员之间的约定，并不是真正私有。
    - 不推荐使用，因为外部仍然可以访问。

3. 使用 Symbol 实现私有成员：

    - Symbol 为 ES6 中新增的原始数据类型，每次调用都会生成唯一标识符。
    - 使用 Symbol 作为对象的属性或方法名，有效避免外部直接访问。

    - 创建方法：
        - `Symbol()`：调用函数生成唯一标识符。
        - 不使用 `new` 关键字，否则报错。
    - 访问方法：
        - 使用方括号 `[]` 表达式访问，点 `.` 无法访问 Symbol 属性。
        - 外部通过常规方式无法直接获取 Symbol 属性。

4. 使用 WeakMap 实现私有成员：

    - WeakMap 是一种特殊的 Map，键必须为对象类型。
    - 键的引用为弱引用，当键对象不再被使用时，自动垃圾回收。
    - 每个私有属性或方法建议单独使用一个 WeakMap 存储，更清晰。
    - 配合模块化（后续讲解），私有属性实现真正无法被外部访问。

    - 方法说明：
        - `set(key, value)`：设置私有成员，`key` 通常是类实例对象。
        - `get(key)`：获取私有成员的值。
    - 箭头函数与 `this`：
        - 当在 WeakMap 中定义私有方法时，建议使用箭头函数，使得内部的 `this` 指向类实例本身。

5. ES2022 `#`

    - 使用 `#` 前缀声明私有属性和方法，是语言内置的私有机制。
    - 只有在类内部才能访问，外部访问会报错，从而保护对象状态。

**代码示例**

1. 使用 Symbol 实现私有成员：

    ```js
    const _radius = Symbol(); // 创建Symbol类型的私有属性
    const _draw = Symbol(); // 创建Symbol类型的私有方法

    class Circle {
    	constructor(radius) {
    		this[_radius] = radius; // 使用Symbol设置私有属性
    	}

    	[_draw]() {
    		// 使用Symbol定义私有方法
    		console.log("Drawing with radius:", this[_radius]);
    	}

    	drawPublic() {
    		this[_draw](); // 在类内部调用私有方法
    	}
    }

    const c = new Circle(10);
    c.drawPublic(); // 正常调用公有方法，输出私有方法内容

    console.log(c._radius); // undefined，无法直接访问
    console.log(Object.getOwnPropertyNames(c)); // []

    // 可通过此方式访问，但通常不使用
    console.log(Object.getOwnPropertySymbols(c)); // [Symbol()]
    const key = Object.getOwnPropertySymbols(c)[0];
    console.log(c[key]); // 10
    ```

    - 使用 Symbol 有效避免了常规访问方式，提供了简单的私有成员实现。

2. 使用 WeakMap 实现私有属性和方法（推荐）：

    ```js
    const _radius = new WeakMap(); // 私有属性 WeakMap
    const _move = new WeakMap(); // 私有方法 WeakMap

    class Circle {
    	constructor(radius) {
    		_radius.set(this, radius); // 存储实例与私有属性的对应关系

    		_move.set(this, () => {
    			// 存储实例与私有方法（箭头函数）的对应关系
    			console.log("move", this);
    		});
    	}

    	draw() {
    		console.log("draw radius:", _radius.get(this)); // 内部访问私有属性
    		_move.get(this)(); // 调用私有方法
    	}
    }

    const c = new Circle(5);
    c.draw(); // 正常调用输出draw和move的内容

    console.log(c.radius); // undefined，无法直接访问私有属性
    console.log(c.move); // undefined，无法直接访问私有方法
    ```

    - 通过 WeakMap 存储私有数据，结合箭头函数完美解决 `this` 指向问题，提供真正的私有成员。

3. 使用单个 WeakMap 存储多个私有成员（不推荐，但可选）：

    ```js
    const _privateProps = new WeakMap();

    class Circle {
    	constructor(radius) {
    		_privateProps.set(this, {
    			radius, // 私有属性
    			move: () => {
    				// 私有方法（箭头函数）
    				console.log("move", this);
    			},
    		});
    	}

    	draw() {
    		const props = _privateProps.get(this);
    		console.log("draw radius:", props.radius); // 访问私有属性
    		props.move(); // 调用私有方法
    	}
    }

    const c = new Circle(3);
    c.draw(); // 正常调用输出draw和move内容

    console.log(c.radius); // undefined，无法访问
    ```

    - 虽然可用单一 WeakMap，但不建议，因为代码易混乱且难以维护。

4. 使用 ES2022 `#` 语法实现私有成员：

    ```js
    class Person {
    	// 使用 # 定义私有属性
    	#name;

    	constructor(name) {
    		this.#name = name;
    	}

    	// 公共方法用于访问私有属性
    	getName() {
    		return this.#name;
    	}
    }

    const p = new Person("Alice");
    console.log(p.getName()); // 输出: "Alice"
    // console.log(p.#name); // 报错：无法从类外部访问私有属性
    ```

## `Setter & Getter in Classes`

> 简述：ES6 引入的类语法支持 `setter` 和 `getter` 特殊方法，使得访问或修改属性时可自动触发逻辑，从而实现数据封装、校验和计算。相比构造函数，只能在类和对象字面量中定义。

**知识树**

1. 核心作用

    - 封装属性访问逻辑。
    - 实现数据校验和约束。

2. 使用限制与注意事项

    - 只能定义在类或对象字面量中，不适用于传统构造函数。
    - 若只定义 `getter`，属性为只读；若只定义 `setter`，属性为只写（极少用）。

3. 与 `Object.defineProperty` 对比（in Classes）

    - 使用便捷性：
        - 类中直接使用 `getter/setter` 更直观。
        - `defineProperty` 语法繁琐，但功能更强。
    - 应用场景差异：
        - 一般属性逻辑封装推荐使用类的 `getter/setter`。
        - 复杂或动态定义属性时推荐使用 `defineProperty`。
    - 灵活度：
        - `defineProperty`可精确控制属性特性（如`enumerable`、`configurable`）。
        - 类中的`getter/setter`默认均为可枚举、可配置。

4. 私有属性封装方式（配合 getter/setter）
    - 使用命名约定（`_prop`）表示私有属性（仍可外部访问）。
    - 使用 ES2022 私有字段（`#prop`）实现真正私有（不可外部访问）。
    - 使用 `WeakMap` 存储私有数据，完全封装内部状态（安全性高）。

**代码示例**

1. 类中定义 Getter 和 Setter（使用`WeakMap`封装私有数据）

    ```js
    const _radius = new WeakMap();

    class Circle {
    	constructor(radius) {
    		if (radius <= 0) throw new Error("半径需为正数");
    		_radius.set(this, radius);
    	}

    	get radius() {
    		return _radius.get(this);
    	}

    	set radius(value) {
    		if (value <= 0) throw new Error("半径需为正数");
    		_radius.set(this, value);
    	}

    	get area() {
    		return Math.PI * this.radius ** 2;
    	}
    }

    const c = new Circle(10);
    console.log(c.radius); // 输出: 10
    console.log(c.area); // 输出面积

    c.radius = 15;
    console.log(c.radius); // 更新为15
    ```

2. 类中使用`Object.defineProperty`（复杂场景或精细控制属性行为）

    ```js
    class Person {
    	constructor(name) {
    		let _name = name;

    		Object.defineProperty(this, "name", {
    			get() {
    				return _name;
    			},
    			set(value) {
    				if (typeof value !== "string") {
    					throw new Error("姓名必须是字符串");
    				}
    				_name = value;
    			},
    			enumerable: true,
    			configurable: false,
    		});
    	}
    }

    const p = new Person("Alice");
    console.log(p.name); // 输出: Alice
    p.name = "Bob";
    console.log(p.name); // 输出: Bob
    ```

## Inheritance

> 简述：继承是面向对象编程的重要概念，它允许我们基于已有的类创建新类，从而重用代码，减少冗余。通过 class 语法和 extends 关键字，继承变得简单直观。此外，super 关键字用于调用父类的构造函数或方法，确保子类正确继承父类的属性和行为。

**知识树**

1. Class 中继承的实现：

    - 使用 extends 关键字继承父类的方法和属性。
    - 子类会自动继承父类的方法，无需额外设置原型。

2. `super` 关键字：

    - 若父类存在属性，在子类的构造函数中，必须先调用 `super()`，否则会报错。
    - 使用 `super` 关键字，可以在子类中调用父类方法

3. 方法重写

    - 在子类中，重写父类的方法后，会优先调用子类同名方法（原型链机制）

**代码示例**

1. Class 继承

    ```js
    // 定义基础类 Shape，包含 move 方法
    class Shape {
    	move() {
    		console.log("move");
    	}
    }

    // 定义子类 Circle，继承 Shape，并新增 draw 方法
    class Circle extends Shape {
    	draw() {
    		console.log("draw");
    	}
    }

    // 创建 Circle 实例，并调用继承和自身的方法
    const c = new Circle();
    c.move(); // 调用继承自 Shape 的 move 方法
    c.draw(); // 调用 Circle 自己的 draw 方法
    ```

2. 使用 `super` 关键字

    ```js
    // 定义基础类 Shape，包含带参数的构造函数，用于初始化 color 属性
    class Shape {
    	constructor(color) {
    		this.color = color;
    	}
    	move() {
    		console.log("move");
    	}
    }

    class Circle extends Shape {
    	constructor(color, radius) {
    		super(color); // 调用父类构造函数初始化 color，若没有该行会报错
    		this.radius = radius; // 添加 Circle 自有的 radius 属性
    	}
    	draw() {
    		super.move(); // 使用super可以调用父类方法
    		console.log("draw");
    	}
    }

    // 创建 Circle 实例，并传入 color 和 radius 参数
    const c = new Circle("red", 10);
    console.log(c.color); // 输出: red
    console.log(c.radius); // 输出: 10
    ```

3. 重写

```js
// 定义基础类 Shape，包含带参数的构造函数，用于初始化 color 属性
class Shape {
	constructor(color) {
		this.color = color;
	}
	move() {
		console.log("move");
	}
}

class Circle extends Shape {
	constructor(color, radius) {
		super(color); // 调用父类构造函数初始化 color，若没有该行会报错
		this.radius = radius; // 添加 Circle 自有的 radius 属性
	}
	move() {
		super.move(); // 使用super可以调用父类方法
		console.log("Circle move");
	}
}

// 创建 Circle 实例，并传入 color 和 radius 参数
const c = new Circle("red", 10);
console.log(c); // 对象原型中存在子类的move方法，沿原型链往上一层寻找，存在父类中move方法
console.log(c.__proto__.move); // 子类中move方法
console.log(c.__proto__.__proto__.move); // 父类中move方法
console.log(c.move()); // 输出：Circle move
```

## ES6 Module

# 技巧

## 高级

- 严格模式
    在代码顶部输入`"use strict";`可以开启严格模式，这是一种好的编程习惯

    ```js
    "use strict";

    ```

- Babel
    使用改技术可以将 ES6 以上的 js 代码转为 所有浏览器都能理解的 es5 代码，网址：https://babeljs
    .io/

## 中级

- 数组解构语法

    ```js
    // const item = output.splice(index, 1)[0];
    //[item]是 数组解构 语法，它从 splice() 返回的数组中提取出第一个元素，并将其赋值给 item。
    const [item] = output.splice(index, 1);
    ```

- 隐式类型转换
    - 基础
        - 这些值会被转换为 `false`：`0`、`""`（空字符串）、`null`、`undefined`、`NaN`
        - 其他值转换为 `true`
    - 注意
        - `+` 号会触发字符串拼接，而 `-` 号会触发数学计算，这种隐式类型转换可能导致意外结果。

## 基础

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

- 结构语法交换变量
