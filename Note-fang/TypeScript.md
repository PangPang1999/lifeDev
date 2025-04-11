## 技巧

# Ts 是什么

## TypeScript 简介与特性

> 简述：TypeScript 是一种基于 JavaScript 构建的静态类型编程语言，提供类型检查与开发工具支持，帮助开发者提前捕获错误，构建更稳定、易维护的程序。

**知识树**

1. TypeScript 概念与定位

   - 由微软创建，基于 JavaScript
   - 属于静态类型语言，JavaScript 的超集
   - 所有 JavaScript 代码都兼容 TypeScript

2. 为什么使用 TypeScript

   - 弥补 JavaScript 缺乏类型检查的问题
   - 提高大型项目代码的可维护性和稳定性
   - 更早、更高效地发现潜在错误，降低调试成本

3. TypeScript 核心特性：

   - 静态类型检查：
     - 变量的类型在编译时确定，不允许类型随意变化
     - 可在编译阶段捕获类型相关的错误
   - 增强的工具支持：
     - 编辑器支持自动代码补全、代码重构与提示
     - 提升开发效率和代码质量
   - 提前使用 JavaScript 未来的新特性：
     - TypeScript 会率先实现 JavaScript 尚未普及的特性
     - 经由编译器转换后保证兼容各环境

4. TypeScript 与 JavaScript 的主要差异

   - TypeScript 为静态类型语言，JavaScript 为动态类型语言
   - TypeScript 需经过编译（转译）为 JavaScript 后方可运行于浏览器环境
   - TypeScript 要求开发者代码规范更严格，开发灵活性相对降低，但可靠性提高

5. TypeScript 的缺点与局限

   - 需要额外的编译（转译）步骤，增加开发流程的复杂度
   - 降低了开发的随意性，对于小型或简单项目，可能降低开发速度
   - 对于快速原型开发或敏捷的小型项目，原生 JavaScript 可能更为便捷

## TypeScript 开发环境搭建与工作流程

> 简述：搭建 TypeScript 开发环境需安装 Node.js、TypeScript 编译器和代码编辑器（推荐 VS Code），编写的 TypeScript 文件经编译生成 JavaScript 文件后运行。

**知识树**

1. 环境准备

   - 安装 Node.js（包含 npm 工具）
   - 检查安装成功（终端执行 `npm -v` 和 `node -v`）

2. 安装 TypeScript 编译器

   - 全局安装（`sudo npm install -g typescript`）
   - 验证安装（`tsc -v` 查看版本）
   - 遇权限问题时使用管理员权限（Mac/Linux 使用 `sudo`）

3. 编写与编译 TypeScript 程序：

   - 创建项目目录与文件（`.ts` 为文件后缀）
   - 执行编译命令（`tsc 文件名.ts`）
   - 生成对应的 JavaScript 文件（`.js` 后缀）

4. TypeScript 基础语法与特点：

   - TypeScript 为 JavaScript 超集（兼容全部 JS 代码）
   - 使用类型注解（`: 类型`）声明变量类型
   - 编译后移除类型注解，仅保留纯 JavaScript 代码

5. 开发工具推荐与使用：

   - 推荐使用 VS Code（Visual Studio Code）
     - 内置终端快速编译（`Ctrl + ~` 或 `Ctrl + ``）
     - 支持智能提示与快速反馈代码错误
   - VS Code 快速打开项目方法：
     - 命令行打开（`code .`）
     - 拖放文件夹至编辑器

6. TypeScript 默认编译行为

   - 默认编译为旧版 JavaScript（如使用 `var`）
   - 默认不会保留类型信息
   - 可配置编译选项生成更现代、更优化的 JavaScript 代码（后续讲解）

## TypeScript 配置文件与编译选项

> 简述：本节讲解如何创建 tsconfig.json 配置文件，并介绍关键编译选项的作用，帮助初学者定制编译行为、组织源代码和生成输出文件。

**知识树**

1. 生成配置文件

   - 使用命令 `tsc --init` 自动创建 tsconfig.json
   - 默认配置项大多处于注释状态，初学者只需关注常用选项

2. 关键编译选项

   - **target**：指定输出的 ECMAScript 版本
     -es2016 ES5 保证广泛兼容；更高版本生成代码更简洁，但兼容性较低
   - **module**：确定模块系统
     - 默认 commonJS，决定模块加载方式,适合大多数 Node.js 环境

3. 文件路径设置

   - **rootDir**：源文件目录
     - 默认 "./"，建议设置为 "./src" 以区分源代码与其他文件
   - **outDir**：输出目录
     - 常设为 "dist"，用于存放编译后的 JavaScript 文件

4. 辅助配置选项

   - **removeComments**：编译时移除注释
     - 减小输出文件体积
   - **noEmitOnError**：遇错误不生成输出文件
     - 强制修正错误，确保代码质量

5. 编译流程

   - 保存配置文件后，运行 `tsc` 命令可自动编译项目中所有 .ts 文件
   - 编译结果存放于 outDir 指定的目录

**代码示例**

1. 生成配置文件命令

   ```bash
   tsc --init
   ```

   - 自动创建 tsconfig.json 文件

2. 常用配置示例

   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "rootDir": "./src",
       "outDir": "./dist",
       "removeComments": true,
       "noEmitOnError": true
     }
   }
   ```

   - 配置各选项说明见上

## TypeScript 调试（VS Code）

> 简述：本节介绍如何在 VS Code 中调试 TypeScript 应用。通过启用 Source Map、设置断点、配置 launch.json 以及使用调试工具，开发者可以逐步运行代码、观察变量变化，从而快速定位问题。

**知识树**

1. Source Map（源映射）

   - 概念：将编译后的 JavaScript 代码行号映射回原始 TypeScript 代码，便于调试器定位代码位置。
   - 配置：在 tsconfig.json 中启用 `"sourceMap": true`。

2. 调试配置（launch.json）

   - 用途：指示 VS Code 如何启动并调试程序。
   - 配置项：
     - `"program"`：指定入口文件（如 index.ts）。
     - `"preLaunchTask"`：调试前自动运行的构建任务（如 TSC: build - tsconfig.json）。
     - `"outFiles"`：指定编译输出文件路径，确保 Source Map 有效映射。

3. 断点（Breakpoint）

   - 作用：在代码特定行暂停执行，便于逐行调试和监控变量状态。

4. 调试工具与操作

   - 工具：
     - **Step Over**：执行当前行（快捷键 F10）。
     - **Step Into**：进入函数内部（快捷键 F11）。
     - **Step Out**：退出当前函数（快捷键 Shift+F11）。
     - **Restart**、**Stop**：重启或终止调试会话。
   - 面板：
     - **Variables**：显示当前变量及其值。
     - **Watch**：自定义监控感兴趣的变量。

**调试步骤**

1. **启用 Source Map**

   - 修改 tsconfig.json，在 compilerOptions 中设置：
     ```json
     {
       "compilerOptions": {
         "sourceMap": true
         // 其他选项...
       }
     }
     ```
   - 重新编译项目，生成 .js.map 文件。此文件用于映射 TypeScript 与生成的 JavaScript 代码。

2. **设置断点**

   - 打开 index.ts，在希望暂停的代码行点击行号插入断点（例如在变量赋值或关键逻辑处）。

3. **配置调试环境**

   - 打开 VS Code 的调试面板，点击“创建 launch.json 文件”。
   - 选择 Node.js 环境，VS Code 会自动生成默认的 launch.json 文件。
   - 修改 launch.json，确保包含以下配置：
     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch Program",
           "program": "${workspaceFolder}/src/index.ts",
           "preLaunchTask": "TSC: build - tsconfig.json",
           "outFiles": ["${workspaceFolder}/**/*.js"]
         }
       ]
     }
     ```
   - 注意：preLaunchTask 中的字符串必须严格匹配任务名称，包括空格和符号。

4. **启动调试**

   - 在调试面板中选择“Launch Program”配置，并启动调试（点击开始按钮或按 F5）。
   - 程序将在断点处暂停，此时可通过调试工具逐行执行代码。

5. **使用调试工具**

   - 利用 Step Over（F10）逐行执行代码，观察变量变化。
   - 若涉及函数调用，可使用 Step Into（F11）进入函数内部，或 Step Out（Shift+F11）退出函数。
   - 在 Variables 窗口中查看当前作用域的所有变量；若需要监控特定变量，可在 Watch 窗口添加（例如添加 age 变量）。

6. **结束调试**

   - 调试完毕后，点击停止按钮结束调试会话，或者重启调试进行代码修改后再次测试。

**代码示例**

1. **tsconfig.json 配置启用 Source Map**

   ```json
   {
     "compilerOptions": {
       "sourceMap": true
       // 其他选项...
     }
   }
   ```

2. **launch.json 调试配置**

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Launch Program",
         "program": "${workspaceFolder}/src/index.ts",
         "preLaunchTask": "TSC: build - tsconfig.json",
         "outFiles": ["${workspaceFolder}/**/*.js"]
       }
     ]
   }
   ```

3. **在 index.ts 中设置断点调试**

   ```typescript
   let age = 20; // 在此行设置断点
   age += 5;
   console.log(age);
   ```

> 备注：调试过程中需确保所有配置项（如文件路径和构建任务名称）准确无误，细节决定调试能否成功。

# TypeScript 内置类型

> 简述：本节介绍 TypeScript 内置类型的基本概念，包括 any 类型、数组、元组、枚举、函数与对象

**知识树**

1. Any 类型

   - 概念：允许变量接受任意类型的值，灵活但缺乏严格类型检查。

2. 数组（Arrays）

   - 概念：存储同一类型元素的集合，可通过泛型定义元素类型。

3. 元组（Tuples）

   - 概念：固定长度且各元素类型已知的数组，适用于存储异构数据。

4. 枚举（Enums）

   - 概念：定义一组命名常量，提高代码的可读性和维护性。

5. 函数（Functions）

   - 概念：支持参数和返回值类型定义，确保调用时类型安全。

6. 对象（Objects）

   - 概念：利用接口或类型别名描述数据结构，提供结构化数据定义。

**代码示例**

1. 定义 Any 类型与数组

   ```typescript
   let anyValue: any = "Hello";
   let numberArray: number[] = [1, 2, 3];
   ```

2. 定义元组与枚举

   ```typescript
   let tuple: [string, number] = ["Alice", 30];
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   let move: Direction = Direction.Up;
   ```

3. 定义函数与对象

   ```typescript
   function add(x: number, y: number): number {
     return x + y;
   }

   interface Person {
     name: string;
     age: number;
   }

   let person: Person = { name: "Bob", age: 25 };
   ```

## TypeScript 原始类型与类型推断

> 简述：本节介绍 TypeScript 内置的原始类型及其扩展类型，并阐述如何利用类型注解和类型推断简化代码，提升可读性和安全性。

**知识树**

1. 内置原始类型

   - JavaScript 自带：number、string、boolean、null、undefined、object

2. TypeScript 扩展类型

   - 新增：any、unknown、never、enum、tuple

3. 类型注解与类型推断

   - 显式声明：通过语法 `let variable: type` 明确标注变量类型
   - 类型推断：根据变量初始值自动识别类型（未初始化变量默认为 any）

4. 数字可读性增强

   - 使用下划线分隔数字：提高大数字的可读性

**代码示例**

1. 显式类型注解

   ```typescript
   let sales: number = 1_000_000; // 显示声明 sales 为 number 类型
   let course: string = "TypeScript"; // 显示声明 course 为 string 类型
   let isPublished: boolean = true; // 显示声明 isPublished 为 boolean 类型
   ```

2. 类型推断示例

   ```typescript
   let sales = 1_000_000; // 编译器自动推断为 number 类型
   let course = "TypeScript"; // 编译器自动推断为 string 类型
   let level; // 未初始化，默认类型为 any
   ```

> 备注：利用类型推断可以减少冗余代码，但在某些场景下明确的类型注解有助于提高代码可读性和维护性。

## Any 类型

> 简述：介绍 any 类型的概念及风险，帮助初学者理解类型检查的重要性，并说明如何处理隐式 any 问题。

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
     - 或通过 tsconfig.json 关闭 noImplicitAny 选项（全局降低类型检查严格性，不推荐）

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

   - 解释：未声明 document 类型，触发隐式 any 错误，丧失类型检查优势

2. 显式声明 any 与 tsconfig 配置

   ```typescript
   function render(document: any) {
     console.log(document);
   }
   ```

   - 解释：显式声明 document 为 any，虽然避免错误，但牺牲了类型安全

   ```json
   {
     "compilerOptions": {
       "strict": true,
       "noImplicitAny": false
     }
   }
   ```

   - 解释：关闭 noImplicitAny 选项后隐式 any 错误消失，但整体类型安全性降低，不建议全局使用

## Array 数组

> 简述：讲解数组在 JavaScript 与 TypeScript 中的表现。重点在于通过类型注解限制数组元素类型，确保类型安全，并享受智能提示的开发优势。

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

3. 智能提示的好处

   - 在 TypeScript 中，对一个已知类型的数组调用方法时，参数的类型会自动推断出来，从而获得**智能提示**：
     ```ts
     numbers.forEach((n) => {
       // 在这里输入 n. 会看到 number 类型的相关方法和属性
     });
     ```
   - 这在大型项目中对**开发效率**的提升非常显著。

## Tuple 元组类型

> 简述：介绍 TypeScript 中的元组（tuple）概念，即固定长度的数组，每个位置预定义了特定类型。常用于表示成对数据，如键值对，确保编译期类型安全。

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

   - 适用于存储固定两值数据（例如 id 与 name）
   - 建议限制元组长度，避免代码可读性下降

**代码示例**

1. 定义元组

   ```typescript
   // 定义一个元组，第一元素为 number 类型的 id，第二元素为 string 类型的 name
   let user: [number, string] = [1, "Alice"];
   ```

   - 解释：user 必须严格包含两个元素，类型依次为 number 与 string

2. 错误示例与方法局限

   ```typescript
   // 错误示例：超过固定长度会导致编译错误
   let user: [number, string] = [1, "Alice", true]; // Error

   // push 方法可绕过元组长度限制，但破坏类型约束
   user.push(100); // 编译器不会报错，但破坏了元组固定长度特性
   ```

   - 解释：元组扩展会导致类型错误，部分数组方法可能违背固定长度设计，应谨慎使用

## Enum 枚举类型

> 简述：枚举（Enum）是一种 TypeScript 内置类型，用于定义一组相关的命名常量。通常用于表示状态、尺寸、类别等固定值集合。通过枚举，可以提升代码语义化与可维护性。

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

```typescript
enum Size {
  Small, // 默认值为 0
  Medium, // 默认值为 1
  Large, // 默认值为 2
}

let mySize: Size = Size.Medium;
```

- `Size.Medium` 实际值为 `1`。

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

- 定义枚举的时候使用了 `const` 关键字，编译后 JavaScript 代码为更直接的数值引用：

  ```javascript
  let mySize = 1; // Size.Medium
  ```

4. node 执行编译好的 js 代码

   ```tsc
   tsc
   node dist/index.js
   ```

**最佳实践**

- 优先使用常量枚举提升运行性能。
- 使用枚举代表清晰、稳定的有限值集合。

## Function 函数

> 简述：讲解 TypeScript 中如何通过明确的类型注解和编译器设置，防止函数常见错误。包括参数与返回值的严格类型约束、参数数量校验、以及启用编译器选项以检测未使用变量或隐式返回，确保函数行为符合预期。

**知识树**

1. 函数类型注解(**显式注解**你的函数：包括参数类型和返回类型。)

   - **参数类型**：明确规定每个参数的数据类型
   - **返回类型**：
     - 有返回值：规定函数必须返回的值类型，避免隐式返回 undefined
     - 无返回值： void

2. 编译器严格检查

   - noUnusedParameters：检测未使用的函数参数
   - noUnusedLocals：检测未使用的局部变量
   - noImplicitReturns：如果函数可能返回 `undefined`（没有全路径返回），则发出警告。

3. 参数默认值与可选参数

   - 可选参数：
     - 使用问号（?）标记允许传入 undefined，需额外处理（例如 javaScript 中的判空逻辑`(taxYear || 2022)`）
   - 默认参数：赋予初始值，既简化代码又避免 undefined

4. 严格参数检查

   - TypeScript 要求在调用函数时，参数数量必须与函数声明一致：
     - 不能多也不能少，除非使用可选参数或剩余参数（rest parameters）。
   - 这一点与 JavaScript 不同，能有效避免调用时的参数错误。

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

2. 未覆盖所有代码路径的错误示例

   ```typescript
   // taxYear 为可选参数，需手动处理 undefined 情况
   function faultyTax(income: number, taxYear?: number): number {
     if ((taxYear || 2022) < 2022) {
       return income * 0.2;
     }
     // 未处理其他情况，可能返回 undefined
     // faultyTax: 漏掉返回值导致 noImplicitReturns 警告
   }
   ```

   - 解释：缺少返回语句会触发编译器警告，提醒开发者修正所有代码路径，确保类型安全。

3. 函数类型注解

   - **写法**：在参数列表和函数体之间用冒号 `:` 指明返回类型：
     ```ts
     function calculateTax(income: number): number {
       return income * 0.2;
     }
     ```
   - 无返回值：使用 `void`：
     ```ts
     function log(message: string): void {
       console.log(message);
     }
     ```

4. 参数默认值与可选参数

   - **可选参数**：在参数名后加 `?`，表示此参数可以省略：
     ```ts
     function calculateTax(income: number, taxYear?: number): number {
       if (taxYear && taxYear < 2022) return income * 1.2;
       return income * 1.3;
     }
     ```
   - **默认值参数**：在参数声明处直接赋初值，如果未传递该参数，则使用默认值：
     ```ts
     function calculateTax(income: number, taxYear = 2022): number {
       if (taxYear < 2022) return income * 1.2;
       return income * 1.3;
     }
     ```

## Object 对象

> 简述：通过对象类型注解，TypeScript 定义对象的结构，确保属性和方法的类型安全，防止动态添加未定义属性，同时支持只读属性`readonly` 防止对象属性被误改，方法签名约束，提升代码健壮性。

**知识树**

1. 对象结构推断与显式注解

   - JavaScript 对象可动态修改
   - TypeScript 根据初始值推断对象形状
   - 显式注解限**制对象结构**（即有哪些属性、属性类型如何等），强制初始化必填属性

2. 必填与可选属性

   - 必填属性：初始化时必须提供
   - 可选属性：使用 `?` 标记，但应符合业务逻辑（如员工必须有名字）

3. 只读属性

   - `readonly` 修饰符：防止属性在初始化后被修改

4. 方法签名

   - 在对象类型中定义方法的参数和返回类型
   - 使用箭头函数语法指定方法实现

**代码示例**

1. 显式注解对象的基本结构

   ```typescript
   // 员工对象必须含有 id（number）和 name（string）
   let employee: { id: number; name: string } = {
     id: 1,
     name: "Alice",
   };

   // 错误示例：动态添加未声明属性将报错
   // employee.age = 30; // ❌ 报错， 属性 age 不存在
   ```

2. 只读属性与方法签名

   1. 用 `readonly` 修饰符将属性设为只读，初始化之后**不能**再次修改：

   ```typescript
   let employee: { readonly id: number; name: string } = {
     id: 1,
     name: "John",
   };
   employee.id = 2; // ❌ 报错，id 为只读
   ```

3. 对象中的方法

- 可以在类型注解中定义方法签名，明确参数和返回类型：
  ```ts
  let employee: {
    id: number;
    name: string;
    retire: (date: Date) => void;
  } = {
    id: 1,
    name: "John",
    retire: (date: Date) => {
      console.log(`Retired on ${date}`);
    },
  };
  ```

# 高级类型

> 简述：介绍 TypeScript 中的高级类型特性，帮助初学者构建灵活且安全的类型系统，包括类型别名、联合类型、交叉类型、类型缩小、可空类型、以及 unknown 和 never 类型。

**知识树**

1. 类型别名（Type Alias）

   - 重用类型，简化代码结构

2. 联合类型（Union Types）

   - 使用 `|` 组合多种可能类型，表达多样性

3. 交叉类型（Intersection Types）

   - 使用 `&` 合并多个类型，形成更严格的约束

4. 高级类型处理

   - 类型缩小（Type Narrowing）：利用类型守卫（如 `typeof`、`instanceof`）区分不同类型
   - 可空类型：处理 `null` 与 `undefined` 的情况，确保代码健壮性
   - unknown 类型：比 any 更安全，用于描述不确定的值
   - never 类型：用于标识永远不会返回或永远抛出错误的代码路径

**代码示例**

1. 定义类型别名、联合类型与交叉类型

   ```typescript
   // 类型别名：定义基本对象结构
   type Person = {
     name: string;
     age: number;
   };

   // 交叉类型：扩展 Person 对象，添加额外属性
   type Employee = Person & {
     employeeId: number;
   };

   // 联合类型：限定状态的取值范围
   type Status = "active" | "inactive" | "pending";
   ```

   - 说明：通过类型别名减少重复代码；交叉类型确保扩展后对象同时满足多个类型；联合类型约束变量只能是几种固定值之一。

2. 类型缩小及 unknown、never 类型处理

   ```typescript
   function processValue(value: unknown) {
     if (typeof value === "string") {
       console.log(value.toUpperCase());
     } else if (typeof value === "number") {
       console.log(value.toFixed(2));
     } else {
       // 利用 never 类型确保所有分支都已处理
       const exhaustiveCheck: never = value;
       console.error("Unhandled type:", exhaustiveCheck);
     }
   }
   ```

   - 说明：通过类型守卫实现类型缩小，针对不同类型采取不同处理方式；当遇到未预期的类型时，never 类型将触发编译错误，从而保证代码完整性和安全性。

## 类型别名

Type Aliases

> 简述：通过使用 TypeScript 的**类型别名**（type alias），我们能集中定义对象的结构，避免重复编写相同的代码，保证数据一致性并提升代码的可读性。

**知识树**

1. 对象结构问题

   - 重复编写相同结构
   - 对象属性不统一
   - 代码维护困难

2. 类型别名（Type Alias）

   - 定义自定义类型的方式
   - 使用 **`type`** 关键字
   - 命名采用 PascalCase（如 Employee）

3. 类型别名的优点

   - 集中管理对象结构
   - 避免代码重复
   - 保证各对象的一致性

4. 实践应用

   - 定义类型别名
   - 使用类型注解创建对象

**代码示例**

1. 定义类型别名

   ```typescript
   type Employee = {
     name: string;
     id: number;
     department?: string; // 可选属性
   };
   ```

   - 说明：通过类型别名定义了 Employee 类型，描述了员工对象的标准结构。

2. 使用类型别名创建对象

   ```typescript
   const employee1: Employee = {
     name: "Alice",
     id: 101,
     department: "Engineering",
   };

   const employee2: Employee = {
     name: "Bob",
     id: 102,
   };
   ```

   - 说明：通过 Employee 类型注解，确保所有员工对象结构一致，避免重复定义和结构不统一的问题。

## 联合类型

Union Types

> 简述：联合类型允许变量或函数参数接受多种类型，通过运行时判断（类型缩小）确定实际类型，从而使用各自特定的方法和属性，对初学者友好。

**知识树**

1. 联合类型

   - 定义：使用 `|` 分隔多个类型，变量可以是其中任一类型

2. 类型缩小

   - 定义：通过条件判断（如 `typeof`）确定联合类型的具体类型
   - 原理：仅暴露所有类型共有的方法和属性，需缩小后才能访问专有成员

3. 应用场景

   - 函数参数或返回值中使用联合类型，可以灵活地传递多种类型的参数或返回多种类型的值
   - 灵活处理用户输入与数据格式转换

4. 编译器行为

   - 联合类型用于编译时类型检查，生成的 JavaScript 代码中不体现

**代码示例**

1. 联合类型与类型缩小应用

   ```typescript
   function kgToLbs(weight: number | string): number {
     if (typeof weight === "number") {
       // 当 weight 为 number 时，直接计算
       return weight * 2.20462;
     } else {
       // 当 weight 为 string 时，先转换为整数，再计算
       return parseInt(weight) * 2.20462;
     }
   }
   ```

   - 说明：该函数接受数字或字符串类型的 weight，通过 `typeof` 判断后分别处理，实现公斤转换为磅的功能。

## 交叉类型

Intersection Types

> 简述：通过交叉类型，我们将多个独立接口合并成一个新类型，确保对象同时满足所有接口的要求。这种方式避免了重复定义，提升了代码一致性与可读性，对初学者非常友好。

**知识树**

1. 交叉类型基础

   - 定义：使用 `&` 将多个类型合并
   - 特点：合并后对象需同时具备所有类型的属性和方法
   - 注意：对于原始类型，交叉类型（如 number & string）通常无实际意义

2. 交叉类型的应用

   - 合成新类型：将 Draggable 与 Resizable 合并为 UIWidget
   - 优点：集中管理对象结构，防止重复代码，提高类型安全
   - 与联合类型形成对照：联合类型偏“多选一”，交叉类型则偏“多重叠加”。

3. 实践案例

   - 定义 UIWidget 类型，确保对象同时实现拖动和调整大小的功能
   - 通过类型注解明确对象结构，便于维护和扩展

**代码示例**

1. 定义基础类型别名

   ```typescript
   type Draggable = {
     drag: () => void;
   };

   type Resizable = {
     resize: () => void;
   };
   ```

2. 合成交叉类型并实现对象

   ```typescript
   type UIWidget = Draggable & Resizable;

   const textBox: UIWidget = {
     drag: () => {
       console.log("Dragging the text box...");
     },
     resize: () => {
       console.log("Resizing the text box...");
     },
   };
   ```

   - 说明：textBox 对象实现了 UIWidget 类型的所有要求，即同时具备拖动和调整大小的能力，从而展示了交叉类型的实际应用。

## 字面量类型

Intersection Types

> 简述：字面量类型通过限定变量取值为具体的常量（如特定数字或字符串），帮助开发者精确定义可接受的值，提升类型安全性和代码可读性。

**知识树**

1. 字面量类型概念

   - 限定变量只能取某个具体值，而非任意数值或字符串

2. 字面量类型 + 联合类型

   - 将多个字面量组合成联合类型，允许变量取多个固定值

3. 使用类型别名简化代码

   - 使用 `type` 定义自定义字面量类型，便于复用与维护

4. 字面量类型的扩展

   - 数字和字符串字面量均可使用，提供灵活的类型定义

**代码示例**

1. 使用字面量类型定义变量

   ```typescript
   // 限定数量只能是 50 或 100
   let quantity: 50 | 100 = 50;
   ```

2. 使用类型别名简化代码

   ```typescript
   // 定义 Quantity 类型
   type Quantity = 50 | 100;
   let quantity: Quantity = 50;

   // 定义 Metric 类型，只允许 'centimeter' 或 'inch'
   type Metric = "centimeter" | "inch";
   let unit: Metric = "inch";
   ```

   - 说明：通过自定义类型别名，将字面量组合为联合类型，保证变量只能接受预定义的具体值。

## 可空类型（ `string | null`）

Nullable Types

> 简述：阐明 TypeScript 如何通过严格空值检查防止 null/undefined 引发错误，并利用联合类型（union type）显式声明可空类型，确保代码健壮性。

**知识树**

1. TypeScript 对 `null`/`undefined` 的默认严格模式

   - **原因**：`null` 和 `undefined` 常是导致错误的根源。
   - **实现**：`strictNullChecks` 在 `tsconfig.json` 中默认开启（若 `strict` 为 `true`），从而阻止将 `null`/`undefined` 赋给非空类型。

2. 可空类型声明

   - 利用联合类型（如 `string | null`）允许变量或参数为空

3. 应用逻辑

   - 依据参数是否存在执行不同逻辑，防止运行时错误

4. tsconfig 配置

   - `strictNullChecks` 选项确保类型安全，建议始终开启

**代码示例**

1. 用联合类型显式允许 `null`/`undefined`

   ```typescript
   function greet(name: string | null): void {
     if (name) {
       console.log(name.toUpperCase());
     } else {
       console.log("Hola");
     }
   }
   ```

   - 这样，函数就能安全地同时处理 `string` 和 `null`：
     - 当 `name` 是 `string`，执行 `toUpperCase()`；
     - 当 `name` 是 `null`，执行其他逻辑。

2. `tsconfig.json` 严格空值检查配置

   ```json
   {
     "compilerOptions": {
       "strict": true,
       "strictNullChecks": true
     }
   }
   ```

   - 说明：保持 strictNullChecks 开启，确保所有变量都严格遵循可空类型约束。

## 可选链 `?.`

Optional Chaining

> 简述：介绍 TypeScript 的可选链操作符，用于简化空值检查，安全访问对象属性、数组元素及函数调用，防止因 null 或 undefined 导致的运行时错误。

**知识树**

1. 空值问题

   - null/undefined 常导致运行时错误

2. 可选属性访问

   - 使用 `?.` 访问对象属性
   - 若对象为 null/undefined，表达式返回 undefined

3. 可选元素访问

   - 使用 `?.[]` 安全获取数组元素
   - 避免空数组或未定义数组引发错误

4. 可选调用

   - 使用 `?.()` 调用函数
   - 仅在函数存在时执行调用，否则返回 undefined

5. 应用场景与代码简化

   - 处理可能为空的对象、数组和函数
   - 提升代码可读性与健壮性

**代码示例**

1. 可选属性访问示例

   ```typescript
   interface Customer {
     birthday?: Date;
   }

   function getCustomer(id: number): Customer | null | undefined {
     return id === 0 ? null : { birthday: new Date() };
   }

   const customer = getCustomer(0);
   console.log(customer?.birthday?.getFullYear());
   ```

   - 说明：通过 `?.` 链式调用，即使 customer 或 birthday 为 null/undefined，也不会报错。

2. 可选元素访问与可选调用示例

   ```typescript
   // 可选元素访问：访问数组第一个元素
   const customers: Customer[] | null = null;
   console.log(customers?.[0]);

   // 可选调用：安全调用可能为 null 的函数
   const log: ((msg: string) => void) | null = null;
   log?.("Hello, world!");
   ```

   - 说明：使用 `?.[0]` 和 `?.()` 分别处理数组和函数的空值问题，保证安全调用。

## 空值合并操作符`??`

> 简述：利用空值合并操作符（??），在处理 null 或 undefined 时提供默认值，确保代码逻辑精确且安全，对初学者友好。

**知识树**

1. 空值问题

   - 常见错误来源：null 与 undefined
   - 传统判断：使用 if 检查是否为 null

2. falsy

   - 包含：`null`/`undefined`以及`0`、`false`、‘ ’
   - 问题：|| 运算符会错误忽略 0、空字符串等有效的“假值”

3. 空值合并操作符（??）

   - **语法**：`a ?? b`
     - 如果 `a` 不为 `null` 或 `undefined`，返回 `a`；否则返回 `b`。
   - 优势：不误判其他 falsy 值

4. 应用场景

   - 用户输入缺失时设定默认值
   - 对象属性初始化及安全访问

**代码示例**

1. 使用空值合并操作符为变量提供默认值

   ```typescript
   let speed: number | null = null;
   // 如果 speed 为 null 或 undefined，则使用默认值 50
   const actualSpeed = speed ?? 50;
   console.log(actualSpeed); // 输出 50
   ```

   - 说明：避免使用 ||，确保`0`、‘ ’ 等有效数值不被误判为空。
   - `speed: speed ?? 30`等价于：`speed: speed!==null ? speed: 30`

2. 在对象初始化中使用空值合并

   ```typescript
   interface Car {
     speed: number;
   }

   function createCar(userSpeed: number | null): Car {
     return {
       // 若 userSpeed 为 null 或 undefined，则使用默认速度 60
       speed: userSpeed ?? 60,
     };
   }

   console.log(createCar(null).speed); // 输出 60
   console.log(createCar(0).speed); // 输出 0，0 为有效值
   ```

   - 说明：通过空值合并操作符，安全处理用户输入的空值问题，既保留 0 等有效值，又提供合理默认值。

## 类型断言

> 简述：类型断言让开发者告知编译器变量实际的具体类型，从而使用更精确的属性和方法。它仅在编译时生效，不进行任何运行时转换。

**知识树**

1. 类型断言概念

   - 定义：通过断言告知编译器变量的具体类型，超越自动推断
   - 目的：获得更精确的类型信息以便访问专有属性

2. 语法形式

   - as 语法：推荐使用，兼容性更好
   - 尖括号语法：功能相同，但在 JSX 中不可用

3. 应用场景

   - **DOM 操作**：指定获取到的元素是什么具体类型，(例如将 getElementById 的返回值（HTMLElement | null）断言为更具体的 HTMLInputElement)
   - 高级类型处理：在联合类型中细化类型

4. 注意事项

   - 仅影响编译期，运行时不做类型转换
   - 错误断言可能导致运行时错误

**代码示例**

1. 使用 as 语法进行类型断言

   ```typescript
   // 获取 id 为 "phone" 的元素，并断言为 HTMLInputElement
   const phone = document.getElementById("phone") as HTMLInputElement;
   console.log(phone.value);
   ```

   - 说明：通过断言，将可能较宽泛的 HTMLElement | null 明确为 HTMLInputElement，从而访问 input 特定的 value 属性。

2. 使用尖括号语法进行类型断言

   ```typescript
   // 使用尖括号语法实现同样效果
   const phone = <HTMLInputElement>document.getElementById("phone");
   console.log(phone.value);
   ```

   - 说明：另一种语法形式实现类型断言，但在包含 JSX 的环境下应避免使用。

## Unknown 类型

> 简述：解释 any 与 unknown 类型的区别，强调 unknown 强制类型缩小以确保类型安全，避免调用不存在的方法导致运行时错误。

**知识树**

1. any 类型

   - 表示任意值，关闭所有类型检查
   - 风险：可任意调用成员，可能隐藏错误

2. unknown 类型

   - 表示未知值，必须缩小后才能使用
   - 优势：强制类型检查，确保安全性

3. 类型缩小

   - 利用类型守卫（如 typeof、instanceof）将 unknown 缩小为具体类型
   - 适用于原始类型和自定义对象

4. 编译器行为

   - any 允许任意操作；unknown 阻止直接调用成员，迫使开发者进行类型验证

**代码示例**

1. any 类型示例

   ```typescript
   function render(doc: any) {
     // 无类型检查，随意调用方法
     doc.move();
     doc.fly();
   }
   ```

   - 说明：使用 any 后，编译器不检查方法是否存在，存在运行时风险。

2. unknown 类型与类型缩小

   ```typescript
   function render(doc: unknown) {
     if (typeof doc === "string") {
       // 缩小为 string，调用字符串方法安全
       console.log(doc.toUpperCase());
     } else if (doc instanceof HTMLInputElement) {
       // 缩小为 HTMLInputElement，访问特定属性
       console.log(doc.value);
     } else {
       console.error("Unsupported type");
     }
   }
   ```

   - 说明：unknown 强制验证类型后才能调用对应方法，确保类型安全。

## never 类型

> 简述：never 类型表示永远不会产生值的情况，常用于标识永不返回或总抛异常的函数。它帮助编译器检测不可达代码，保证逻辑正确，对初学者友好。

**知识树**

1. never 类型概念

   - 表示函数**永远不会有返回**，要么是**无限循环**，要么是**直接抛出异常**。
   - 与 void 的区别：void 表示没有返回值，但可能正常结束；never 表示函数永不结束

2. 用途

   - **配合编译选项**：当 `allowUnreachableCode` 关闭时，能在编译时检测到任何写在 `never` 后面的不可能执行的代码。
   - **表达意图**：在代码层面说明“这里绝不会返回”，比用 `void` 更严谨，也能帮助编译器进行更精准的静态分析。

3. tsconfig 配置

   - allow unreachable code 选项影响不可达代码检测
   - 建议在严格模式下使用 never 类型

4. 小结

   - `never` 在普通业务逻辑中使用不多，但在某些**底层框架**或**特殊流程控制**（如死循环、异常终止）中有其价值。
   - 与联合类型搭配时（如 `string | never`），也能体现更严格的类型约束。
   - 了解 `never` 有助于深入理解 TypeScript 的类型系统和编译器推断过程。

**代码示例**

1. 无限循环示例

   ```typescript
   function processEvents(): never {
     while (true) {
       // 持续处理事件（例如监听消息队列）
     }
     // 这里的代码永远不会执行
   }
   ```

   - 解释：函数通过无限循环永不返回，使用 never 类型明确表达这一点，帮助编译器识别后续代码为不可达。

2. 始终抛异常示例

   ```typescript
   function reject(message: string): never {
     throw new Error(message);
   }
   ```

   - 解释：该函数总是抛出错误，因此永不返回，通过 never 类型使得编译器和开发者清晰认识到调用后的代码不会执行。

# 面向对象编程（OOP）

> 简述：本节讲解面向对象编程（OOP）的核心概念及其在 TypeScript 中的实现方式。通过类与对象、封装、继承、多态及接口抽象现实世界，清晰表达数据和行为，提升代码复用性、可维护性和扩展性。

**知识树**

1. **编程范式**

   - 定义：编程范式是编写代码的风格或方式。
   - 示例：
     - 面向对象编程（OOP）
     - 函数式编程（FP）
     - 过程式编程
     - 事件驱动编程
     - 面向切面编程

2. **面向对象编程（OOP）**

   - 定义：一种以对象为基本单元的编程范式，对象包含数据和操作。
   - 核心概念：
     - **对象**：包含数据（状态）和操作（行为）的单元。
     - **类**：对象的蓝图或模板，定义了对象的属性和方法。
   - 特点：
     - 封装：将数据和操作封装在对象内部。
     - 继承：类之间可以继承属性和方法。
     - 多态：对象可以以多种形式存在。

3. **OOP 与函数式编程（FP）的比较**

   - **函数式编程（FP）**：
     - 以函数为构建块。
     - 强调不可变性和无副作用。
   - **区别**：
     - OOP 侧重于对象和类的组织。
     - FP 侧重于函数的组合和数据的转换。
   - **优缺点**：
     - 每种范式在不同场景下有其优势。
     - OOP 适用于模拟现实世界中的实体和交互。
     - FP 适用于数据处理和并发编程。

4. 封装（Encapsulation）

   - 隐藏数据操作细节，只暴露外部接口，外界通过接口访问对象，而不直接修改内部数据
   - 访问修饰符（Modifiers）：限定类成员的可见性
     - `public`：默认公开，外部可访问
     - `private`：仅限类内部访问
     - `readonly`：只读属性，构造时赋值
     - `static`：静态成员，属于类本身
   - 特殊成员
     - 静态成员（Static Members）：类级别共享数据与方法
     - 存取器（getter & setter）：控制属性访问逻辑
     - 索引签名（Index Signatures）：定义动态属性

5. 继承（Inheritance）

   - 子类继承父类的特性并扩展
   - `extends` 关键字实现继承
   - 继承细节
     - 构造函数继承：子类调用父类构造器 `super()`
     - 方法重写（Override）：子类重新定义父类方法

6. 多态（Polymorphism）

   - 继承产生多个类，对同一方法有不同实现
     - 示例：Cat 和 Dog 继承自 Animal，但各自实现不同的 eat 方法
   - 多种对象共享统一接口，不同实现根据类型自动选择
   - 强调“对接口编程，而非对实现编程”

7. 抽象类与接口

   - 抽象类（Abstract Class）
     - 提供基础实现和抽象方法，不可实例化
     - 子类必须实现抽象方法
   - 接口（Interface）
     - 类与对象结构的约束，**强调结构与规范**，不包含实现
     - 类可实现多个接口，增强结构约束与类型安全
     - 接口支持类与对象的结构化设计，强化类型约束

**代码示例**

1. **封装与修饰符**

   ```typescript
   class Person {
     private name: string;
     readonly age: number;

     constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
     }

     greet(): void {
       console.log(`Hello, I'm ${this.name}`);
     }
   }

   const alice = new Person("Alice", 30);
   alice.greet();
   ```

   - 定义类，创建实例并调用方法。
   - name 属性为私有，仅在类内部访问，age 为只读属性，构造时赋值后不可更改。

2. 继承与多态

   ```typescript
   abstract class Animal {
     abstract makeSound(): void;
   }

   class Cat extends Animal {
     makeSound(): void {
       console.log("Meow");
     }
   }

   class Dog extends Animal {
     makeSound(): void {
       console.log("Woof");
     }
   }

   const animals: Animal[] = [new Cat(), new Dog()];
   animals.forEach((animal) => animal.makeSound());
   ```

   - 不同类继承相同抽象类，实现各自的行为。

3. 接口的实现

   ```typescript
   interface Drawable {
     draw(): void;
   }

   class Circle implements Drawable {
     draw(): void {
       console.log("Drawing a circle");
     }
   }

   class Square implements Drawable {
     draw(): void {
       console.log("Drawing a square");
     }
   }

   const shapes: Drawable[] = [new Circle(), new Square()];
   shapes.forEach((shape) => shape.draw());
   ```

   - 接口定义结构约束，实现类提供具体方法。
