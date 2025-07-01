**Prerequisites**

- JavaScript
    - Variables
    - Arrays
    - Objects
    - Functions
    - Arrow Functions
    - Destructuring（解构赋值）

# Start

## 什么是 TypeScript

> 简述：TypeScript 是一种基于 JavaScript 构建的静态类型编程语言，提供类型检查与开发工具支持，帮助开发者提前捕获错误，构建更稳定、易维护的程序。

**知识树**

1. TypeScript 概念与定位

    - 由微软创建，基于 JavaScript
    - 属于静态类型语言，JavaScript 的超集
    - TypeScript 为 JavaScript 超集（兼容全部 JS 代码）

2. TypeScript 核心特性：

    - 静态类型检查：
        - 变量的类型在编译时确定，不允许类型随意变化
        - 可在编译阶段捕获类型相关的错误
    - 增强的工具支持：
        - 编辑器支持自动代码补全、代码重构与提示
        - 提升开发效率和代码质量
    - 提前使用 JavaScript 未来的新特性：
        - TypeScript 会率先实现 JavaScript 尚未普及的特性
        - 经由编译器转换后保证兼容各环境

3. TypeScript 与 JavaScript 的主要差异

    - TypeScript 为静态类型语言，JavaScript 为动态类型语言
    - TypeScript 需经过编译（转译）为 JavaScript 后方可运行于浏览器环境
    - TypeScript 要求开发者代码规范更严格，开发灵活性相对降低，但可靠性提高

4. 为什么使用 TypeScript

    - 弥补 JavaScript 缺乏类型检查的问题
    - 提高大型项目代码的可维护性和稳定性
    - 更早、更高效地发现潜在错误，降低调试成本

5. TypeScript 的缺点与局限

    - 需要额外的编译（转译）步骤，增加开发流程的复杂度
    - 降低了开发的随意性，对于小型或简单项目，可能降低开发速度
    - 对于快速原型开发或敏捷的小型项目，原生 JavaScript 可能更为便捷

## 开发环境

> 简述：搭建 TypeScript 开发环境需安装 Node.js、TypeScript 编译器和代码编辑器（推荐 VS Code），编写的 TypeScript 文件经编译生成 JavaScript 文件后运行。

**知识树**

1. 环境准备

    - 安装 Node.js（包含 npm 工具）
    - 检查安装成功（终端执行 `npm -v` 和 `node -v`）

2. 安装 TypeScript 编译器

    - 全局安装（`sudo npm install -g typescript`）
    - 验证安装（`tsc -v` 查看版本）
    - 遇权限问题时使用管理员权限（Mac/Linux 使用 `sudo`）

3. 开发工具推荐与使用：

    - 推荐使用 VS Code（Visual Studio Code）
        - 支持智能提示与快速反馈代码错误
    - VS Code 快速打开项目方法：
        - 命令行打开（`code .`）——需要安装拓展`
            - `Cmd+Shift+P`打开命令面板 ，输入`Shell Command: Install 'code' command in PATH`进行拓展安装
        - 拖放文件夹至编辑器

## 第一个 Ts 程序

> 简述：通过示例演示 Ts 代码转为 Js 的过程，以及两者的差异

**知识树**

1. 编写与编译 TypeScript 程序：

    - 创建项目目录与文件（`.ts` 为文件后缀）
    - 执行编译命令（`tsc 文件名.ts`）
    - 生成对应的 JavaScript 文件（`.js` 后缀）

2. 转译特点

    - 默认编译为旧版 JavaScript（如使用 `var`）
    - 默认不会保留类型信息
    - 可配置编译选项生成更现代、更优化的 JavaScript 代码（后续讲解）

3. 示例介绍

    - 创建 `hello-pang`文件夹，创建 `index.ts` 文件

**代码示例**

1. `Console`

    ```ts
    console.log("Hello, World!");
    ```

    - 描述：使用`tsc index.ts`后，同目录下生成一个 `index.js` 文件，文件内容两者一模一样

2. 变量声明

    ```ts
    let age: number = 25;
    ```

    - 描述：编写过程中，变量 age 无法再变成其他类型比如字符串。使用`tsc index.ts`后，生成文件代码部分变为`var age = 25;`，因为默认使用了 ES5。

## 配置文件\*

> 简述：Ts 通过 tsconfig.json 配置文件，在编写代码的过程中，提供了许多语法上的帮助，需要理解常用的选项设置。**本节持续更新**。

**知识树**

1. 生成配置文件

    - 项目根目录系，使用命令 `tsc --init` 自动创建 `tsconfig.json`
    - 默认配置项大多处于注释状态，初学者只需关注常用选项

2. 关键选项

    1. 编译配置
        - `target`：指定输出的 ECMAScript 版本
            - es2016 ES5 保证广泛兼容；更高版本生成代码更简洁，但兼容性较低
        - `module`：确定模块系统
            - 默认 `commonJS`，决定模块加载方式,适合大多数 Node.js 环境
    2. 文件路径设置
        - `rootDir`：源文件目录
            - 默认 `./`，建议设置为 `./src` 以区分源代码与其他文件
        - `outDir`：输出目录
            - 常设为 `dist`，用于存放编译后的 JavaScript 文件
    3. 辅助配置选项
        - `removeComments`：编译时移除注释
            - 减小输出文件体积
        - `noEmitOnError`：遇错误不生成输出文件
            - 强制修正错误，确保代码质量
    4. 函数配置
        - `noUnusedParameters`：检测未使用的函数参数，发出警告。
        - `noUnusedLocals`：检测未使用的局部变量，发出警告。
        - `noImplicitReturns`：如果函数可能返回 `undefined`（没有全路径返回），则发出警告。

3. 编译流程

    - 保存配置文件后，运行 `tsc` 命令可自动编译项目中所有 .ts 文件
    - 编译结果存放于 outDir 指定的目录

4. 示例介绍

    - 创建配置文件，并修改对应选项
    - 移除之前生成的 `index.js` 文件，创建文件夹 `src` 将 `index.ts` 放入

5. 运行代码

    1. `tsc` 转译
    2. `node dist/index.js`，运行转译后的 js 代码

## 调试

> 简述：在 VS Code 能够逐步调试 TypeScript 应用。通过启用 Source Map、设置断点、配置 launch.json 以及使用调试工具，开发者可以逐步运行代码、观察变量变化，从而快速定位问题。

**知识树**

1. Source Map（源映射）

    - 概念：将编译后的 JavaScript 代码行号映射回原始 TypeScript 代码，便于调试器定位代码位置。
    - 配置：在 tsconfig.json 中启用 `"sourceMap": true`。

2. 调试配置文件（`launch.json`）

    - 用途：指示 VS Code 如何启动并调试程序。
    - 创建：打开 VScode 调试页签，点击创建`launch.json`，选择 Node.js
    - 配置属性：
        - version：配置文件的版本号，通常为 `"0.2.0"`，保持默认即可。
        - configurations：配置数组，每个对象表示一种调试方式。
        - name：配置名称，调试时显示用，随便写，方便识别。
        - request：调试请求类型。常用`"launch"`表示启动新进程调试
        - type：调试类型，比如 `chrome` 表示用 Chrome 浏览器调试，`node` 表示 Node.js 调试。
        - url：要启动的网页地址，通常指你的本地开发服务器。
        - webRoot：映射源码路径，`${workspaceFolder}` 通常指你的项目根目录。
        - skipFiles：跳过调试的文件（比如 Node.js 内部代码）。
        - program：要调试的入口文件路径。
        - outFiles：指定编译后输出的文件路径，用于源码映射（如 TypeScript 调试）。
    - 手动配置属性
        - preLaunchTask：设置为 `tsc: build - tsconfig.json`，这样每次点击调试按钮时，都会自动编译 TS 代码，确保调试的是最新的 JS 文件。

3. 调试

    - 点击代码左侧设置断点
    - 通过按钮进行步入、下一步等操作
    - 可以设置监控值
    - 同一化多个语言，会挨个轮询，不用刻意换行

**代码示例**

1. 演示代码，在第一行或者第二行打上断点

    ```ts
    let age: number = 25;
    if (age > 18) age = 30;
    console.log(age);
    ```

# Fundamentals

## Ts 基本类型

> 简述：JS 存在五种基本类型与 Object 类型，而 Ts 包含 any、unknown、never、enum、tuple 等特殊类型。本节先介绍 Ts 中的基本类型，其他类型将在后续介绍。

**知识树**

1. 内置原始类型

    - JavaScript 自带：number、string、boolean、null、undefined、object

2. TypeScript 扩展类型

    - 新增：any、unknown、never、enum、tuple

3. TS 类型注解与类型推断

    - 标准写法： `let <变量名> : <变量类型> = <变量值>`
    - 简略写法：`let <变量名> = <变量值>`，类型自行判断，未初始化变量默认为 any

**代码示例**

1. 显式类型注解

    ```ts
    let sales: number = 1000;
    let course: string = "TypeScript";
    let isPublished: boolean = true;
    let level;
    ```

    - 描述：未声明值的 level，默认类型是 any，稍后介绍

2. 类型推断示例

    ```ts
    let sales = 1000;
    let course = "TypeScript";
    let isPublished = true;
    let level;
    ```

    - 描述：利用类型推断可以减少冗余代码，但在某些场景下明确的类型注解有助于提高代码可读性和维护性。

## Any 类型

> 简述：TS 中 any 类型可接受任何类型的值，但存在风险，需要谨慎处理。

**知识树**

1. any 类型

    - 定义：可接受任何类型的值
    - 特性：取消类型检查，失去 TypeScript 的安全性

2. 隐式 any

    - 现象：变量或函数参数未初始化或未声明类型时，默认赋值为 any
    - 问题：破坏类型安全，易引发潜在错误

3. 函数参数隐式 any

    - 现象：未明确声明参数类型导致编译器报错
    - 解决方案：
        - 显式声明参数为 any（明确告知编译器，但牺牲部分类型安全）
        - 或通过 `tsconfig.json` 关闭 noImplicitAny 选项（全局降低类型检查严格性，不推荐）

4. 最佳实践

    - 避免使用 any，保持类型安全
    - 仅在迫不得已时局部使用，并谨慎处理

**代码示例**

1. 隐式 any 导致错误

    ```typescript
    function render(document) {
    	console.log(document);
    }
    ```

    - 描述：未声明 document 类型，触发隐式 any 错误，丧失类型检查优势

2. 显式声明 any 与 tsconfig 配置

    ```typescript
    function render(document: any) {
    	console.log(document);
    }
    ```

    - 描述：显式声明 document 为 any，虽然避免错误，但牺牲了类型安全

    ```json
    {
    	"compilerOptions": {
    		"strict": true,
    		"noImplicitAny": false
    	}
    }
    ```

    - 描述：关闭 noImplicitAny 选项后隐式 any 错误消失，但整体类型安全性降低，不建议使用

## Array 数组

> 简述：TS 中，数组通过类型注解限制数组元素类型，确保类型安全，并享受智能提示的开发优势。

**知识树**

1. JavaScript 数组

    - 动态类型：允许混合不同数据类型

2. TypeScript 数组

    - 静态类型：可通过注解限定元素类型
    - 类型推断：若元素统一，可自动推断

3. 空数组处理

    - 默认 any：空数组无初始类型，可能混入不同类型
    - 显式注解：必须指定类型以保障安全

4. 开发优势

    - 编译期错误检测：及时捕捉类型错误
    - 智能提示：编辑器根据类型提供方法补全

**代码示例**

1. 数组类型注解

    ```typescript
    // 声明数字数组，确保所有元素为 number
    let numbers: number[] = [1, 2, 3];
    ```

    - 显式声明确保数组仅含数字，防止混型错误

2. 空数组显式注解

    ```typescript
    // 定义空数字数组，防止默认 any 类型引入混合类型
    let numbers: number[] = [];
    // numbers.push("hello"); // 错误：不能将字符串加入数字数组
    ```

    - 明确类型避免隐式 any，保障类型安全并支持智能提示

3. 智能提示

    ```ts
    numbers.forEach((n) => {
      // 在这里输入 n. 会看到 number 类型的相关方法和属性
    });
    ```

    - 描述：在 TypeScript 中，对一个已知类型的数组调用方法时，参数的类型会自动推断出来，从而获得智能提示。这在大型项目中对开发效率的提升非常显著。

## Tuple 元组类型

> 简述：TypeScript 中的元组（tuple），即固定长度的数组，每个位置预定义了特定类型。常用于表示成对数据，如键值对，确保编译期类型安全。

**知识树**

1. Tuple 的定义

    - 固定长度数组
    - 每个元素拥有预定义类型

2. 类型约束

    - 编译期校验长度与元素类型
    - 提供智能提示（IntelliSense）增强开发体验

3. 内部实现与局限

    - 实际上为普通 JavaScript 数组
    - 部分数组方法（如 push）可能绕过固定长度检查

4. 开发实践

    - 建议限制元组长度（ `key-value`），避免代码可读性下降

**代码示例**

1. 定义元组

    ```ts
    // 定义一个元组，第一元素为 number 类型的 id，第二元素为 string 类型的 name
    let user: [number, string] = [1, "Alice"];
    ```

    - 解释：user 必须严格包含两个元素，类型依次为 `number` 与 `string`

2. 错误示例

    ```ts
    // 错误示例：超过固定长度会导致编译错误
    let user: [number, string] = [1, "Alice", true]; // Error
    ```

3. 方法局限

    ```ts
    let user: [number, string] = [1, "Alice"];
    // push 方法可绕过元组长度限制，但破坏类型约束
    user.push(100); // 编译器不会报错，但破坏了元组固定长度特性
    ```

    - 解释：元组扩展会导致类型错误，部分数组方法可能违背固定长度设计

## Enum 枚举类型

> 简述：Ts 中，枚举（Enum），用于定义一组相关的命名常量。通常用于表示状态、尺寸、类别等固定值集合。通过枚举，可以提升代码语义化与可维护性。

**知识树**

1. 枚举（Enum）的概念

    - 一组相关常量的集合。
    - 增强代码可读性和语义化。

2. 枚举的定义与用法

    - 使用关键字 `enum` 定义。
    - 使用 Pascal 命名法（大驼峰法）命名枚举与成员。
    - 枚举成员默认从数字 `0` 开始递增赋值，或手动显式赋值。

3. 枚举的值类型

    - 默认：数字类型，自动递增。
    - 显式赋值：
        - 数字类型（自定义起始值）。
        - 字符串类型（每个成员均需明确赋值）。

4. 枚举的编译优化

    - 普通枚举：编译后 JavaScript 代码较复杂。
    - 常量枚举（`const enum`）：编译后 JavaScript 代码优化为内联，更精简高效。

**代码示例**

1. 基础枚举定义与默认赋值

    ```ts
    enum Size {
        Small, // 默认为 0
        Medium,
        Large,
    }
    let mySize: Size = Size.Medium;
    console.log(mySize); // 输出为 1
    ```

    - 描述：默认情况下，初始的第一个枚举数值为 0，后续枚举依次递增，比如`Size.Medium` 实际值为 `1`。

2. 显式赋值的枚举（数字与字符串）

    ```typescript
      // 数字枚举，显式起始值
      enum Size {
    	Small = 1,
    	Medium, // 自动递增为 2
    	Large, // 自动递增为 3
      }

    // 字符串枚举，所有成员需显式赋值
    enum Size {
      Small = "S",
      Medium = "M",
      Large = "L",
    }
    ```

3. 常量枚举（编译优化）

    ```typescript
    const enum Size {
      Small,
      Medium,
      Large,
    }

    let mySize: Size = Size.Medium;
    ```

    - 定义枚举的时候使用了 `const` 关键字，编译后 JavaScript 代码为将更直接的数值引用

4. node 执行编译好的 js 代码

    ```tsc
    tsc
    node dist/index.js
    ```

## Function 函数

> 简述：Ts 中，标准的 Function 函数，需要明确标注返回类型，以及参数类型，此外，还支持可选参数。未避免潜在问题，应在配置文件中开启部分配置，确保编译器严格检查。

**知识树**

1. 函数声明

    - 格式：

        ```ts
        function <函数名>(<参数名>: <参数类型>): 返回值类型{

        }
        ```

    - 参数
        - 应明确规定每个参数的数据类型
    - 返回：
        - 未设置返回值
            - 若没有设置返回值时，没有语法错误，根据 `return xxx` 的类型来判断返回值的类型，若没有 `return`，则默认未 `void`，但这样子不规范，应避免这种方式。
        - 未返回：
            - 若显式设置了返回类型，但没有返回任何内容，则默认返回 `undefined`

2. 函数可选参数

    - 可选参数：
        - 使用问号 `?` 标记允许传入 `undefined`，需额外处理（例如 javaScript 中的判空逻辑`(taxYear || 2022)`）
    - 默认参数（推荐）：赋予初始值，若存在具体输入，则替换掉默认值，既简化代码

3. 严格参数检查

    - TypeScript 要求在调用函数时，参数数量必须与函数声明一致：
        - 不能多也不能少，除非使用可选参数或剩余参数（rest parameters）。
    - 这一点与 JavaScript 不同，能有效避免调用时的参数错误。

4. 编译器严格检查

    - `noUnusedParameters`：检测未使用的函数参数，发出警告。
    - `noUnusedLocals`：检测未使用的局部变量，发出警告。
    - `noImplicitReturns`：如果函数可能返回 `undefined`（没有全路径返回），则发出警告。

**代码示例**

1. 完整注解的函数

    ```typescript
    // calculateTax: 根据收入与税收年份计算税额，返回 number 类型
    function calculateTax(income: number, taxYear: number = 2020): number {
      if (income > 50000) {
        return income * 0.2;
      }
      return income * 0.15;
    }
    ```

    - 解释：income 必须为 number；taxYear 提供默认值，确保即使未传参也有合理值；所有路径均返回 number，防止隐式返回 undefined。

## Object 对象

> 简述：通过对象类型注解，TypeScript 定义对象的结构，确保属性和方法的类型安全，防止动态添加未定义属性，同时支持只读属性`readonly` 防止对象属性被误改，方法签名约束，提升代码健壮性。

**知识树**

1. 对象结构推断与显式注解

    - JavaScript 对象可动态修改
    - TypeScript 默认根据初始值推断对象形状。建议显式注解限制对象结构（即有哪些属性、属性类型如何等），强制初始化必填属性

2. 必填与可选属性

    - 必填属性：初始化时必须提供
    - 可选属性：使用 `?` 标记，但应符合业务逻辑，避免滥用

3. 只读属性

    - `readonly` 修饰符：防止属性在初始化后被修改

4. 方法签名

    - 在对象类型中定义方法的参数和返回类型
    - 使用箭头函数语法指定方法实现

**代码示例**

1. 显式注解对象的基本结构

    ```typescript
    // 员工对象必须含有 id（number）和 name（string）
    let employee: {
      id: number;
      name: string;
    } = {
      id: 1,
      name: "Alice",
    };


    // 错误示例：动态添加未声明属性将报错
    // employee.age = 30; // ❌ 报错， 属性 age 不存在
    ```

2. 只读属性与方法签名

    ```typescript
    let employee: {
      readonly id: number;
      name: string;
    } = {
      id: 1,
      name: "Alice",
    };

    employee.id = 2; // ❌ 报错，id 为只读
    ```

    - 描述：用 `readonly` 修饰符将属性设为只读，初始化之后不能再次修改：

3. 对象中的方法

    ```ts
    let employee: {
      id: number;
      name: string;
      retire: (date: Date) => void; // 明确返回类型为 void
    } = {
      id: 1,
      name: "John",
      retire: (date: Date) => {
        console.log(date);
      },
    };
    ```

    - 描述：可以在类型注解中定义方法签名，明确参数和返回类型
