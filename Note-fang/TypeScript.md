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
    - 访问修饰符（Modifiers）：限定类成员的可见性 - public: 公有，任何地方均可访问（默认）。 - private: 私有，仅限在定义该成员的类内部访问。 - protected: 受保护，类内部及其子类可以访问。 - readonly (特定语言特性，如 TS/C#): 只读，仅可在声明时或构造函数中赋值。 - static: 静态，成员属于类本身而非类的实例，通过类名直接访问。
    - 特殊成员
        - 静态成员（Static Members）：类级别共享数据与方法
        - 存取器（getter & setter）：  提供对私有或受保护属性的受控访问（读取/写入）机制。
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

### 类：对象的蓝图

**知识树**

1.  **面向对象基础**

    - 核心是对象 (Object)。
    - 创建对象需要先定义类 (Class)。

2.  **类 (Class) 的概念**

    - 对象的蓝图 (Blueprint) 或模板 (Template)。
    - 用于批量创建具有相同结构和行为的对象。
    - 定义了事物的抽象特征：
        - **属性 (Properties)**: 对象的状态或数据 (e.g., 银行账户的 `id`, `owner`, `balance`)。
        - **方法 (Methods)**: 对象的行为或操作 (e.g., `deposit`, `withdraw`)。

3.  **类定义 (TypeScript)**

    - 使用 `class` 关键字。
    - 类名遵循帕斯卡命名法 (PascalCase) (e.g., `Account`)。
    - 类体包含在 `{}` 中。

4.  **属性 (Properties)**

    - 在类体中直接声明，并指定类型注解。
        - `propertyName: type;` (e.g., `id: number;`, `owner: string;`, `balance: number;`)
    - **初始化要求**: TypeScript 编译器要求属性在使用前必须被明确赋值（通常在声明时或构造函数中完成），否则会报错 ("Property has no initializer and is not definitely assigned in the constructor")。

5.  **构造函数 (Constructor)**

    - **目的**: 初始化对象。当使用 `new` 创建类实例时自动调用。
    - **定义**: 使用 `constructor` 关键字定义的特殊方法。
    - **参数**: 可以接收参数，用于设置对象的初始状态。
    - **返回类型**: 无需也不能显式声明返回类型，它总是隐式返回当前类的一个新实例。
    - **`this` 关键字**: 在构造函数和方法内部，`this` 指向当前正在创建或操作的对象实例。用于访问或修改实例的属性 (`this.propertyName = value;`)。

6.  **方法 (Methods)**

    - **定义**: 在类内部定义的函数，用于描述对象的行为。
    - **语法**: `methodName(parameters): returnType { ... }` (e.g., `deposit(amount: number): void { ... }`)。
    - **访问属性**: 方法内部可以使用 `this` 关键字访问和修改当前对象的属性。
    - **逻辑**: 可以包含任意业务逻辑，如条件判断、计算、抛出错误等。

7.  **TypeScript 与 JavaScript 编译**
    - TypeScript 的类属性声明（带类型注解）主要是为了编译时类型检查，在编译到 ES5 或更早版本的 JavaScript 时，这些显式声明可能不会直接出现在 JS 代码中。
    - 属性的实际创建和初始化通常发生在 JavaScript 的构造函数内部。
    - 类型注解（参数类型、返回类型）会被移除。
    - 类的基本结构（`class` 关键字、构造函数、方法）会保留（根据目标 JS 版本转换为相应的语法，如 ES6 class 或构造函数原型模式）。

**代码示例**

1.  **定义类、属性和构造函数**

    ```typescript
    // 定义一个银行账户类 (Account)
    class Account {
        // 属性声明 (Properties) - 定义对象状态
        id: number;
        owner: string;
        balance: number;

        // 构造函数 (Constructor) - 初始化对象
        // 参数用于接收初始值
        constructor(id: number, owner: string, balance: number) {
            // 使用 'this' 关键字引用当前实例，并为属性赋值
            this.id = id;
            this.owner = owner;
            this.balance = balance;
        }
    }
    ```

    - `class Account { ... }` 定义了一个名为 `Account` 的类。
    - `id: number;`, `owner: string;`, `balance: number;` 声明了三个属性及其类型。
    - `constructor(...) { ... }` 是构造函数，接收 `id`, `owner`, `balance` 作为参数，并使用 `this` 将这些值赋给新创建对象的对应属性。

2.  **添加方法**

    ```typescript
    class Account {
        id: number;
        owner: string;
        balance: number;

        constructor(id: number, owner: string, balance: number) {
            this.id = id;
            this.owner = owner;
            this.balance = balance;
        }

        // 方法 (Method) - 定义对象行为
        deposit(amount: number): void { // void 表示该方法不返回值
            // 方法内部可以包含逻辑
            if (amount <= 0) {
                throw new Error('Invalid amount'); // 抛出错误处理无效输入
            }
            // 使用 'this' 访问和修改实例属性
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}`);
        }
    }

    // (后续章节会讲如何创建和使用对象实例)
    // let myAccount = new Account(1, 'Alice', 1000);
    // myAccount.deposit(500);
    ```

    - `deposit(amount: number): void { ... }` 定义了一个名为 `deposit` 的方法。
    - 它接收一个 `amount` 参数（类型为 `number`），返回类型为 `void`。
    - 方法内部首先检查 `amount` 是否有效，然后通过 `this.balance += amount;` 修改当前对象的 `balance` 属性。

### 创建与使用对象

> 简述：通过 `new` 操作符在 TypeScript 中基于类实例化一个对象，使用其属性与方法，并利用 `instanceof` 检测对象类型。

**知识树**

1. **对象实例化**

    - 使用 `new` 关键字创建对象：`const account = new Account(1, "Mosh", 0);`
    - **构造函数调用**: `new` 操作符会自动调用类的构造函数 (`constructor`)。
    - 传递参数给构造函数以初始化属性

2. **访问对象成员**

    - 对象的属性与方法通过“对象.成员”进行访问
    - 类的属性与方法在对象中对应实际数据和行为

3. **运行时对象类型检查 (Runtime Object Type Checking)**

    - **`typeof` 操作符**:
        - **行为**: 对于任何由类创建的对象（以及数组、`null` 等），`typeof` 均返回字符串 `"object"`。
        - **局限性**: 不能区分不同类的实例。对于自定义对象的具体类型判断无效。
        - **适用场景**: 主要用于区分原始类型（`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`）和 `"object"` 或 `"function"`。
    - **`instanceof` 操作符**:
        - **行为**: 检查一个对象在其原型链上是否存在指定构造函数的 `prototype` 属性。返回布尔值 (`true` 或 `false`)。
        - **语法**: `object instanceof ClassName`
        - **目的**: 判断一个对象是否是某个特定类（或其父类）的实例。
        - **适用场景**: 在需要根据对象的具体类类型执行不同逻辑时（如类型守卫 Type Guards），应使用 `instanceof` 而非 `typeof`。

4. **终端编译与执行**

    - 命令示例：`tsc && node dist/index.js`
    - 输出：对象属性与方法的运行结果，印证代码执行过程

**代码示例**

1.  **创建对象实例与成员访问**

    ```typescript
    class Account {
        id: number;
        owner: string;
        balance: number;

        constructor(id: number, owner: string, balance: number) {
            this.id = id;
            this.owner = owner;
            this.balance = balance;
        }

        deposit(amount: number): void {
            if (amount <= 0) {
                throw new Error('Invalid amount');
            }
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }

    // 1. 创建对象实例 (Instantiation)
    // 使用 'new' 调用 Account 类的构造函数，并传入初始值
    let account = new Account(1, 'Mosh Hamedani', 0);

    // 2. 访问属性 (Accessing Property)
    console.log("Initial Balance:", account.balance); // 输出: Initial Balance: 0

    // 3. 调用方法 (Calling Method)
    account.deposit(100); // 输出: Deposited 100. New balance: 100

    // 4. 直接打印对象
    console.log(account); // 输出: Account { id: 1, owner: 'Mosh Hamedani', balance: 100 } (具体格式可能因环境而异)
    ```

    - 演示了如何使用 `new Account(...)` 创建 `account` 对象，并通过 `account.balance` 访问属性和 `account.deposit(100)` 调用方法。

2.  **`typeof` 与 `instanceof` 对比**

    ```typescript
    // (续上例)
    let account = new Account(1, 'Mosh Hamedani', 0);

    // 使用 typeof 检查对象类型
    console.log(typeof account); // 输出: "object"
    // typeof 无法区分 Account 实例和其他对象 (如数组、普通对象字面量)

    // 使用 instanceof 检查对象是否为特定类的实例
    console.log(account instanceof Account); // 输出: true
    // instanceof 确认 account 是由 Account 类创建的

    // 示例：类型守卫 (Type Guard)
    function processItem(item: any) {
        if (item instanceof Account) {
            // item 在这个代码块中被 TypeScript 识别为 Account 类型
            console.log("Processing Account:", item.owner);
        } else {
            console.log("Item is not an Account instance.");
        }
    }

    processItem(account); // 输出: Processing Account: Mosh Hamedani
    processItem({ id: 2, owner: 'Jane', balance: 50 }); // 输出: Item is not an Account instance.
    ```

    - 展示了 `typeof account` 返回 `"object"`，而 `account instanceof Account` 返回 `true`，明确了两者的区别。
    - `instanceof` 更适用于判断自定义对象的具体类型，尤其在类型守卫场景中。

## 修饰符：只读与可选属性

> 简述：通过 `readonly` 和 可选属性（`?`）修饰符，限制属性赋值时机与必需性，从而提高代码健壮性，避免意外修改或未初始化访问。

**知识树**

1. **只读属性（Readonly）**

    - 使用 `readonly` 前缀声明，属性只能在构造函数内赋值
    - 在类外或其他方法中再次赋值会导致编译错误

2. **可选属性（Optional）**

    - 在属性名后添加 `?` 标记，表示属性可以为 `undefined`
    - 可选属性无需在构造函数中初始化

3. **错误示例**

    - 非只读属性：可在任意位置修改 `id`，易引入逻辑缺陷
    - 必需属性：若无初始值，编译时报错

4. **应用场景**

    - `readonly`：适用于标识唯一且不可变的数据，如账户 ID
    - 可选属性：适用于非必需字段，如用户自定义昵称

**代码示例**

1. readonly  和可选属性 (?) 的使用

    ```typescript
    class Account {
        // readonly 属性：id 在初始化后不可更改
        readonly id: number;
        owner: string;
        balance: number;
        // 可选属性：nickname 可能存在，也可能不存在
        nickname?: string;

        constructor(id: number, owner: string, balance: number) {
            this.id = id; // readonly 属性可以在构造函数中赋值
            this.owner = owner;
            this.balance = balance;
            // nickname 是可选的，无需在此处初始化
        }

        deposit(amount: number): void {
            if (amount <= 0) {
                throw new Error('Invalid amount');
            }
            this.balance += amount;
            // this.id = 0; // 编译错误！无法分配到 "id" ，因为它是只读属性。
        }

        setNickname(name: string) {
            this.nickname = name; // 可选属性可以在之后赋值
        }
    }

    let account = new Account(1, 'Mosh Hamedani', 0);

    // account.id = 2; // 编译错误！无法分配到 "id" ，因为它是只读属性。

    console.log(account); // 输出可能包含 id, owner, balance, 但 nickname 为 undefined (如果未设置)
    account.setNickname("Mosh's Main Account");
    console.log(account); // 输出会包含 nickname 的值
    ```

    - `id`  属性使用  `readonly`  修饰，只能在构造函数中赋值。尝试在  `deposit`  方法或外部修改  `id`  会导致编译错误。
    - `nickname`  属性使用  `?`  标记为可选，构造函数中没有初始化它。之后可以通过  `setNickname`  方法为其赋值。

## 访问修饰符 (Access Modifiers)

> 简述：阐述 TypeScript 中的访问修饰符 (`public`, `private`, `protected`)，它们用于控制类成员（属性和方法）的可访问性。通过限制访问，可以增强封装性，防止外部代码直接篡改内部状态，从而构建更健壮、更易于维护的类。

**知识树**

1.  **访问控制需求**

    - 直接修改对象内部状态（如 `balance`）可能绕过必要的业务逻辑（如记录交易），破坏数据一致性或对象不变量。
    - 需要机制来限制对类成员的直接访问。

2.  **访问修饰符 (Access Modifiers)**

    - TypeScript 提供的关键字，用于设定类成员的可见范围。
    - 主要修饰符：
        - **public**：默认修饰符，成员可在任何地方被访问
        - **private**：成员只能在类内被访问
        - **protected**：在类内及子类中可被访问（稍后介绍）

3.  **`public` (公有)**

    - **默认修饰符**: 如果不显式指定，类成员默认为 `public`。
    - **可访问性**: 可以在任何地方访问（类内部、类的实例外部、子类中）。
    - 显式 `public` 关键字通常可省略。

4.  **`private` (私有)**

    - **可访问性**: 仅能在**定义该成员的类内部**访问。
    - **限制**: 不能在类的实例外部或子类中访问。
    - **主要目的**:
        - **封装与信息隐藏**: 隐藏内部实现细节，强制通过公共接口（方法）交互。
        - **代码健壮性**: 防止外部代码意外修改内部状态，确保对象状态的一致性（例如，确保余额修改总伴随着交易记录）。
        - **注意**: `private` 主要用于代码结构和健壮性，**不应用于存储敏感信息**（如密码），因为它只在编译时强制执行，运行时可能被绕过。
    - **命名约定**: 私有属性通常以下划线 `_` 开头 (e.g., `_balance`)，作为一种编码风格提示。

5.  **访问私有成员**

    - 如果需要从外部读取或（受控地）修改私有属性，应提供公共方法（如 Getter/Setter 或其他业务方法）。

6.  **修饰符应用于方法**
    - 访问修饰符同样可以应用于类的方法。
    - `private` 方法通常是类内部使用的辅助方法，不希望暴露给外部调用者。

**代码示例**

1.  **`private` 属性和受控访问**

    ```typescript
    class Account {
        readonly id: number;
        owner: string;
        // 使用 private 修饰符，并遵循下划线约定
        private _balance: number;
        // (假设有一个用于记录交易的私有数组)
        // private _transactions: Transaction[] = [];

        constructor(id: number, owner: string, balance: number) {
            this.id = id;
            this.owner = owner;
            // 私有属性可以在类内部访问和赋值
            this._balance = balance;
        }

        deposit(amount: number): void {
            if (amount <= 0) {
                throw new Error('Invalid amount');
            }
            // 在方法内部可以访问私有属性
            // this.recordTransaction(amount); // 假设调用私有方法记录交易
            this._balance += amount;
            console.log(`Deposit successful. Current balance: ${this._balance}`);
        }

        // 公共方法，用于安全地获取私有属性的值 (Getter)
        getBalance(): number {
            // 可以在此添加权限检查等逻辑
            return this._balance;
        }

        // 私有方法，仅供类内部使用
        private recordTransaction(amount: number): void {
            console.log(`Recording transaction for amount: ${amount}`);
            // ... 添加交易记录到 _transactions 数组的逻辑 ...
        }
    }

    let account = new Account(1, 'Alice', 1000);

    // account._balance = 2000; // 编译错误！属性“_balance”为私有属性，只能在类“Account”中访问。

    account.deposit(500); // 正确：通过公共方法间接修改私有属性

    // 通过公共 Getter 方法访问余额
    let currentBalance = account.getBalance();
    console.log("Balance retrieved:", currentBalance); // 输出: Balance retrieved: 1500

    // account.recordTransaction(100); // 编译错误！属性“recordTransaction”为私有属性，只能在类“Account”中访问。
    ```

    - `_balance` 被声明为 `private`，外部无法直接访问或修改。
    - `deposit` 方法在类内部可以访问和修改 `_balance`。
    - `getBalance` 方法提供了一个公共的、只读的途径来获取余额。
    - `recordTransaction` 方法是 `private` 的，只能在 `Account` 类内部（如 `deposit` 方法中）调用。

(开始)

## 参数属性 (Parameter Properties)

> 简述：介绍 TypeScript 的参数属性特性，这是一种简洁的语法糖，允许在构造函数参数上直接使用访问修饰符（`public`, `private`, `protected`）或 `readonly`，从而自动完成类属性的声明和初始化，显著减少样板代码。

**知识树**

1.  **传统构造函数初始化的问题**

    - 重复性高：需要在类体中声明属性，然后在构造函数中接收同名参数，并编写 `this.propertyName = parameterName;` 的赋值语句。

2.  **参数属性 (Parameter Properties) - 解决方案**

    - TypeScript 提供的一种简化语法。
    - **核心机制**: 在构造函数的参数名前直接添加访问修饰符 (`public`, `private`, `protected`) 或 `readonly` 修饰符。

3.  **工作原理**

    - 当编译器遇到带有修饰符的构造函数参数时，它会自动执行以下操作：
        - 在类中创建一个同名的属性。
        - 该属性具有参数上指定的修饰符（访问级别和/或只读性）。
        - 自动将传入构造函数的参数值赋给这个新创建的同名属性。

4.  **优势**

    - **代码简洁**: 大幅减少了声明属性和在构造函数中手动赋值所需的代码量。
    - **提高效率**: 使类的定义更加紧凑和易读。

5.  **组合修饰符**

    - 可以在同一个参数上同时使用访问修饰符和 `readonly`。
    - **顺序**: 访问修饰符在前，`readonly` 在后 (e.g., `public readonly id: number`)。

6.  **代码格式化**
    - 当构造函数参数较多时，为了保持代码可读性，建议将每个参数属性放在单独一行。

**代码示例**

1.  **使用参数属性简化类定义**

    ```typescript
    // 传统方式 (冗余)
    /*
    class Account_Old {
        readonly id: number;
        owner: string;
        private _balance: number;

        constructor(id: number, owner: string, balance: number) {
            this.id = id;
            this.owner = owner;
            this._balance = balance;
        }

        getBalance(): number {
            return this._balance;
        }
    }
    */

    // 使用参数属性 (简洁)
    class Account {
        // 无需在此显式声明 id, owner, _balance 属性

        // 直接在构造函数参数前添加修饰符
        constructor(
            public readonly id: number, // 创建 public readonly id 属性并初始化
            public owner: string,       // 创建 public owner 属性并初始化
            private _balance: number     // 创建 private _balance 属性并初始化
        ) {
            // 编译器会自动完成 this.id = id, this.owner = owner, this._balance = balance 的操作
            // 构造函数体可以为空，或只包含其他逻辑
        }

        // 方法仍然照常定义
        getBalance(): number {
            // 可以访问由参数属性创建的私有成员 _balance
            return this._balance;
        }

        deposit(amount: number): void {
             if (amount <= 0) {
                throw new Error('Invalid amount');
            }
            this._balance += amount;
        }
    }

    // 创建对象的方式不变
    let account = new Account(1, 'Bob', 2000);

    console.log(account.id);      // 输出: 1 (访问 public readonly 属性)
    console.log(account.owner);   // 输出: Bob (访问 public 属性)
    // console.log(account._balance); // 编译错误！_balance 是私有的
    console.log(account.getBalance()); // 输出: 2000 (通过公共方法访问)

    account.owner = 'Robert'; // 可以修改 public 属性
    // account.id = 2; // 编译错误！id 是 readonly 的

    account.deposit(500);
    console.log(account.getBalance()); // 输出: 2500
    ```

    - 对比注释掉的 `Account_Old` 类，`Account` 类使用了参数属性，代码量显著减少。
    - 构造函数参数 `public readonly id: number` 直接创建了一个公有的、只读的 `id` 属性，并用传入的第一个参数初始化它。
    - `public owner: string`

## Getter 与 Setter

> 简述：阐述 Getter (`get`) 和 Setter (`set`) 访问器，它们允许以属性访问的语法来执行方法逻辑。Getter 用于获取属性值（通常是私有属性），Setter 用于设置属性值，常包含验证逻辑，共同增强了类的封装性和数据控制能力。

**知识树**

1.  **动机 (Motivation)**

    - 需要从外部访问（读取/写入）类的私有属性。
    - 直接使用普通方法（如 `getBalance()`）语法上不够直观（方法调用 `()` vs. 属性访问）。
    - 期望像访问公共属性一样访问，但同时保留内部控制（如验证）。

2.  **访问器 (Accessors)**

    - Getter 和 Setter 的统称，是类中特殊的成员。
    - 提供类似属性访问的语法 (`object.property`)，但背后执行的是方法调用。
    - 主要目的：为私有属性提供受控的公共访问接口，实现封装和数据验证。

3.  **Getter (`get`)**

    - 定义: 使用  get  关键字修饰的方法。
    - 目的: 以属性访问的语法 (object.property) 获取值，背后执行方法逻辑。
    - 特性: 无参数，必须有返回值。
    - 效果: 提供只读访问（若无对应 Setter）。

4.  **Setter (`set`)**

    - **定义**: 使用 `set` 关键字定义的方法，方法名通常与要设置的（逻辑）属性同名。
        - `set propertyName(value: type) { ... }`
    - **作用**: 当给该“属性”赋值时 (`object.propertyName = newValue`)，Setter 方法会被调用，传入的值作为参数 `value`。
    - **特性**:
        - 必须接收**一个**参数（类型应与“属性”类型一致）。
        - 不能有返回类型注解（隐式返回 `void`）。
    - **核心价值**: 在赋值操作发生时，执行自定义逻辑，最常见的是**数据验证**。

5.  **与私有属性结合**
    - Getter 和 Setter 通常与一个内部的私有属性（如 `_balance`）配合使用。
    - Getter 不接受参数，Setter 必须接受一个参数。
    - Getter 和 Setter 对外的名称 (`accessorName`) 必须相同。
    - 并非所有属性都需要 Setter。在某些场景下（如 `Account` 的 `balance`），只应通过特定方法（如 `deposit`）修改状态，以确保业务规则的执行。

**代码示例**

1.  **使用 Getter 和 Setter 封装私有属性**

    ```typescript
    class Account {
        readonly id: number;
        owner: string;
        private _balance: number; // 私有属性存储实际余额

        constructor(id: number, owner: string, balance: number) {
            this.id = id;
            this.owner = owner;
            // 初始化私有余额，可能也需要验证
            if (balance < 0) throw new Error("Initial balance cannot be negative.");
            this._balance = balance;
        }

        deposit(amount: number): void {
            if (amount <= 0) {
                throw new Error('Deposit amount must be positive.');
            }
            this._balance += amount;
        }

        // Getter for balance
        // 允许以 account.balance 的方式读取余额
        get balance(): number {
            // 可以添加读取权限控制等逻辑
            return this._balance;
        }

        // Setter for balance (示例，但在银行账户场景下通常不直接设置余额)
        // 允许以 account.balance = newValue 的方式尝试设置余额
        set balance(value: number) {
            console.log("Setter called for balance."); // 演示 Setter 被调用
            // 在 Setter 中进行验证
            if (value < 0) {
                throw new Error('Balance cannot be negative.');
            }
            // 验证通过后才更新内部私有属性
            this._balance = value;
        }
    }

    let account = new Account(1, 'Alice', 1000);

    // 使用 Getter 读取余额 (像访问属性一样)
    console.log("Current Balance (via Getter):", account.balance); // 输出: 1000

    // 尝试使用 Setter 设置余额 (像给属性赋值一样)
    try {
        account.balance = 1500; // 调用 set balance(1500)
        console.log("New Balance (after Setter):", account.balance); // 输出: Setter called... New Balance...: 1500

        account.balance = -50; // 调用 set balance(-50)，会抛出错误
    } catch (error: any) {
        console.error("Error setting balance:", error.message); // 输出: Error setting balance: Balance cannot be negative.
    }

    // 如果移除 Setter，则 account.balance = ... 会导致编译错误（属性只读）
    // 在银行账户场景中，通常只提供 deposit/withdraw 方法修改余额，
    // 因此可能只保留 Getter，不提供 Setter，使余额对外表现为只读。
    ```

    - `get balance()` 允许使用 `account.balance` 读取内部的 `_balance`。
    - `set balance(value)` 允许使用 `account.balance = newValue` 来尝试设置 `_balance`，并在赋值前执行验证逻辑。
    - 如果移除 `set balance(...)`，则 `account.balance` 变为只读。

Thought for a couple of seconds

(开始)

## Index Signature（索引签名）

> 简述：在 TypeScript 中，通过索引签名 `[key: KeyType]: ValueType` 为对象添加 **动态** 属性，同时保留编译期的类型检查，兼顾 JavaScript 的灵活性与 TypeScript 的严谨性。

**知识树**

1. **动态属性需求**

    - JavaScript 允许动态地向对象添加属性。
    - TypeScript 默认强制严格的对象结构（预定义所有属性）。
    - 某些场景需要动态添加属性（如配置对象、字典、映射未知键值对等）。

2. **索引签名语法**

    - **目的**: 为具有动态属性名称的对象提供类型定义。
    - 语法：`[key: KeyType]: ValueType`
        - 作用：允许使用 **方括号**（`[]`）添加/读取任意键
        - KeyType：索引（键），必须为 string | number | symbol（会自动转成字符串）
        - ValueType: 通过该索引访问到的值的类型

3. **访问方式**

    - **点记法**：`obj.prop`（仅在键名是有效的 JavaScript 标识符且在编译时已知时可用，对于动态或非标识符键名不适用。）
    - **方括号记法**：`obj["prop"]` / `obj[idx]`来访问或设置属性，因为键通常是动态的或包含特殊字符
    - **类型安全**: TypeScript 会检查：
        - 用于索引的键是否符合  KeyType。
        - 赋给属性的值是否符合  ValueType。

4. **优势**

    - 结合了 JavaScript 的动态属性灵活性和 TypeScript 的类型安全。
    - 避免为大量或未知的属性名进行冗余的显式声明。

**代码示例**

1. **SeatAssignment 类与动态座位**

    ```typescript
    class SeatAssignment {
      // 键为座位号（string 或 number），值为观众姓名（string）
      [seatNumber: string]: string;
    }

    const seats = new SeatAssignment();

    // 动态分配座位
    seats.A1 = "Alice";
    seats["A2"] = "Bob";
    seats[`B${3}`] = "Charlie"; // 支持任意字符串键

    // 编译错误示例：值类型必须是 string
    // seats.A4 = 42; // ❌ 不能将 number 赋给 string
    ```

    - 描述：`SeatAssignment` 通过索引签名实现可扩展的「座位 → 姓名」映射，且保持字符串值的类型约束。

(开始)

## 静态成员 (Static Members)

> 简述：阐述静态成员（属性和方法）的概念。静态成员属于类本身，而非类的任何特定实例。它们用于表示或操作与类整体相关、而非与单个对象实例相关的状态或行为，常用于实现共享计数器、工具函数或工厂模式。

**知识树**

1.  **实例成员 vs. 静态成员**

    - **实例成员 (Instance Members)**: 属于类的每个对象实例。每个对象有自己的一份拷贝（属性），方法通过 `this` 访问当前对象的属性。在对象创建 (new) 时初始化。
    - **静态成员 (Static Members)**: 属于类本身。所有实例共享同一份静态成员。内存中只有一份拷贝。在类定义被加载时初始化，早于任何实例创建。

2.  **静态属性 (Static Properties)**

    - **定义**: 使用 `static` 关键字修饰的属性。
        - `static propertyName: type = initialValue;`
    - **目的**: 存储与类相关、而非与特定实例相关的状态（如全局计数器、配置常量）。
    - **访问**: 必须通过**类名**访问，而不是实例名。。实例不能直接访问。
        - `ClassName.staticPropertyName`
    - **初始化**: 可在声明时直接初始化。
    - **`this` 关键字**: 在实例方法中，`this` 指向当前实例，不能直接访问静态属性（需通过 `ClassName.staticPropertyName`）。

3.  **静态方法 (Static Methods)**

    - **定义**: 使用 `static` 关键字修饰的方法。
        - `static methodName(parameters): returnType { ... }`
    - **目的**: 提供与类相关的工具函数或工厂方法，其操作不依赖于任何特定实例的状态。
    - **访问**: 必须通过**类名**调用。
        - `ClassName.staticMethodName(arguments)`
    - **`this` 关键字**: 在静态方法内部，`this` 指向**类本身**（构造函数），而非实例。可以用来访问其他静态成员 (`this.staticPropertyName`) 或调用其他静态方法 (`this.staticMethodName()`)。

4.  **访问控制与静态成员**

    - 静态成员同样可以使用访问修饰符 (`public`, `private`, `protected`)。
    - `private static` 成员仅能在类内部通过类名或 `this` (在静态方法内) 访问。
    - 常用于封装类级别的内部状态，并通过公共静态方法（如静态 Getter）提供受控访问。

5.  **静态 Getter/Setter**

    - 可以使用 `static get` 和 `static set` 定义静态访问器，提供对（通常是私有）静态属性的受控访问。

6.  **关键要点**

    - 静态成员通过  `类名.成员`  访问（非  `this.`）
    - 私有静态属性命名前加下划线（\_）作区分
    - 静态 getter 同样需加  `static`  关键字

7.  **交互规则 (Interaction Rules)**

    - **静态方法内部**:
        - **可以**直接访问其他静态成员（属性或方法）(使用  ClassName.  或  this.)。
        - **不能**直接访问实例成员（属性或方法），因为没有特定的实例上下文 (this  指向类，而非对象)。
    - **实例方法内部**:
        - **可以**直接访问实例成员 (使用  this.)。
        - **可以**访问静态成员 (必须使用  ClassName.)。

8.  **访问控制与封装 (Access Control & Encapsulation)**

    - 静态成员同样可使用  public, private, protected  修饰符。
    - private static  成员仅能在类内部通过类名或静态方法内的  this  访问。
    - 常结合静态 Getter (static get) / Setter (static set) 对私有静态属性提供受控访问，增强封装性。

9.  **继承 (Inheritance)**
    - 静态成员**可以被子类继承**。
    - 子类可以通过自己的类名访问继承的静态成员 (SubClass.staticMember)。
    - **无多态覆盖**: 如果子类定义了与父类同名的静态成员（属性或方法），它会**隐藏 (shadow)**  父类的成员，而非像实例方法那样覆盖。访问时取决于使用哪个类名 (BaseClass.staticMember vs SubClass.staticMember)。

**代码示例**

10. **使用静态属性跟踪共享状态**

    ```typescript
    class Ride {
        // private static _activeRides: number = 0; // 私有静态属性，存储活动行程数

        // 实例方法：启动行程
        start(): void {
            Ride._activeRides++; // 通过类名访问和修改静态属性
            console.log(`Ride started. Active rides: ${Ride._activeRides}`);
        }

        // 实例方法：停止行程
        stop(): void {
            Ride._activeRides--; // 通过类名访问和修改静态属性
            console.log(`Ride stopped. Active rides: ${Ride._activeRides}`);
        }

        // 公共静态 Getter：提供对私有静态属性的只读访问
        static get activeRides(): number {
            return Ride._activeRides;
        }

        // 私有静态属性，存储活动行程数，并初始化为 0
        private static _activeRides: number = 0;
    }

    // 创建实例
    let ride1 = new Ride();
    ride1.start(); // 输出: Ride started. Active rides: 1

    let ride2 = new Ride();
    ride2.start(); // 输出: Ride started. Active rides: 2

    // 通过静态 Getter 访问共享状态
    console.log("Total active rides:", Ride.activeRides); // 输出: Total active rides: 2

    ride1.stop(); // 输出: Ride stopped. Active rides: 1
    console.log("Total active rides:", Ride.activeRides); // 输出: Total active rides: 1

    // Ride._activeRides = 10; // 编译错误！属性“_activeRides”为私有属性，只能在类“Ride”中访问。
    // console.log(ride1.activeRides); // 编译错误！属性“activeRides”在类型“Ride”上不存在。应改为 Ride.activeRides。
    ```

    - `_activeRides` 是 `private static` 属性，用于在所有 `Ride` 实例间共享活动行程计数。
    - `start` 和 `stop` 方法通过 `Ride._activeRides` 访问和修改这个共享计数。
    - `static get activeRides()` 提供了一个公共的、只读的方式来获取当前活动行程总数，通过 `Ride.activeRides` 访问。
    - 直接访问 `Ride._activeRides` 或通过实例访问 `activeRides` 都会导致编译错误，强制了封装和正确的访问方式。

    ```typescript
    	class AppConfig {
    	    // 私有静态属性：存储配置信息
    	    private static _instanceCount: number = 0;
    	    private static readonly _apiUrl: string = "https://api.example.com";

    	    // 公共静态属性：应用名称 (常量)
    	    public static readonly AppName: string = "My Awesome App";

    	    // 实例属性
    	    private instanceId: number;

    	    constructor() {
    	        AppConfig._instanceCount++; // 静态方法内部可以访问静态属性
    	        this.instanceId = AppConfig._instanceCount; // 实例方法可以访问静态属性 (通过类名)
    	        console.log(`AppConfig instance #${this.instanceId} created.`);
    	    }

    	    // 静态 Getter：获取 API URL
    	    static get ApiUrl(): string {
    	        // console.log(this.instanceId); // 错误！静态方法不能访问实例属性
    	        return this._apiUrl; // 静态方法内部 this 指向类，可以访问其他静态成员
    	    }

    	    // 静态方法：获取当前实例数量
    	    static getInstanceCount(): number {
    	        return this._instanceCount;
    	    }

    	    // 实例方法：显示实例信息
    	    displayInfo(): void {
    	        console.log(`Instance ID: ${this.instanceId}`);
    	        // 实例方法可以访问静态成员
    	        console.log(`App Name: ${AppConfig.AppName}`);
    	        console.log(`API URL: ${AppConfig.ApiUrl}`); // 通过静态 Getter 访问
    	    }

    	    // static utilityMethod() {
    	    //     this.displayInfo(); // 错误！静态方法不能直接调用实例方法
    	    // }
    	}

    	// 访问静态属性和方法 (无需创建实例)
    	console.log("Application Name:", AppConfig.AppName); // 输出: My Awesome App
    	console.log("API Endpoint:", AppConfig.ApiUrl);    // 输出: https://api.example.com
    	console.log("Initial Instance Count:", AppConfig.getInstanceCount()); // 输出: 0

    	// 创建实例
    	let config1 = new AppConfig(); // 输出: AppConfig instance #1 created.
    	let config2 = new AppConfig(); // 输出: AppConfig instance #2 created.

    	// 通过实例调用实例方法
    	config1.displayInfo();
    	/* 输出:
    	   Instance ID: 1
    	   App Name: My Awesome App
    	   API URL: https://api.example.com
    	*/

    	// 再次访问静态方法获取更新后的计数
    	console.log("Current Instance Count:", AppConfig.getInstanceCount()); // 输出: 2

    	// AppConfig._instanceCount = 10; // 错误！属性“_instanceCount”为私有属性...
    	// config1.AppName = "New Name"; // 错误！无法分配到 "AppName" ，因为它是只读属性。
    	// console.log(config1.ApiUrl); // 错误！属性“ApiUrl”在类型“AppConfig”上不存在。静态成员需用类名访问。

    	// --- 继承示例 ---
    	class ExtendedConfig extends AppConfig {
    	    // 隐藏父类的静态属性 (虽然不推荐这样做)
    	    public static readonly AppName: string = "My Extended App";

    	    // 新的静态方法
    	    static showParentAppName() {
    	        // 可以通过 super 访问父类的静态成员 (虽然不常见，且 TS/JS 中 super 对静态成员的支持有限且易混淆，通常直接用父类名)
    	        // console.log("Parent App Name (via super?):", super.AppName); // TS 对 super 访问静态属性支持不直接
    	        console.log("Parent App Name (via Base Class Name):", AppConfig.AppName);
    	    }
    	}

    	console.log("Extended App Name:", ExtendedConfig.AppName); // 输出: My Extended App (子类隐藏了父类的)
    	console.log("Extended API URL (inherited):", ExtendedConfig.ApiUrl); // 输出: https://api.example.com (继承了父类的)
    	ExtendedConfig.showParentAppName(); // 输出: Parent App Name (via Base Class Name): My Awesome App

    ```

## 继承（Inheritance）

> 简述：通过 `extends` 关键字，让子类复用父类的属性与方法，避免重复代码；子类可添加自身特有成员并借助 `super` 调用父类构造函数。

**知识树**

1. **继承 (Inheritance)**

    - **定义**：继承是面向对象编程中的一种机制，允许一个类（子类）获取另一个类（父类）的所有属性和方法，同时可以添加自己特有的功能。
    - **目的/用途**：
        - 继承的主要目的是代码复用，减少重复代码。
        - 在前端开发中，继承可以用来构建具有层次结构的组件系统，使通用功能只需编写一次，特定功能可以在子类中定制，提高开发效率和代码可维护性。\
    - 基本语法：

        ```typescript
        // 父类/基类/超类
        class Parent {
          // 属性和方法定义
        }

        // 子类/派生类
        class Child extends Parent {
          // 额外的属性和方法定义

          constructor(/* 参数 */) {
            super(/* 父类构造函数所需参数 */);
            // 子类构造函数的其他初始化代码
          }
        }

        ```

2. **super 关键字**

    - 定义：super 是一个特殊关键字，用于在子类中引用父类。
    - 目的/用途：super 允许子类调用父类的构造函数和方法，确保父类的初始化逻辑得到执行，同时可以扩展或重写父类的功能。
    - 基本语法：

        ```typescript
        class Child extends Parent {
            constructor(/* 参数 */) {
              // 调用父类构造函数
              super(/* 父类构造函数所需参数 */);
            }

            someMethod() {
              // 调用父类的同名方法
              super.someMethod();
              // 子类特有的逻辑
            }
        }

        ```

3. **语法关键点**

    - `extends`：声明继承关系
    - `super()`：在子类构造函数中调用父类构造函数；
        - 构造函数中的 super 调用是必须的：在子类构造函数中，必须调用 super()，而且必须在使用 this 关键字之前调用。
        - 参数属性与继承：子类可访问父类 `public` / `protected` 成员，无法访问 `private` 成员
        - 方法重写： **在实例方法中**: super.methodName()  可以调用父类的同名方法。来重写（覆盖）父类的实现，为特定子类提供定制化的行为。
        - 代码组织：最佳实践是将每个类放在单独的文件中，通过 ES 模块系统进行导入导出，以提高代码的可维护性。

4. 疑问与待办

    1. 如何处理多重继承？
        - TypeScript（和 JavaScript）不支持真正的多重继承（一个类直接继承多个类）。当需要多个类的功能时，应该考虑使用接口（interfaces）和组合模式。
    2. protected 修饰符在继承中的应用？
        - 课程中没有详细讨论 protected 修饰符，它允许父类成员被子类访问，但不允许外部访问，在继承结构中很有用。
    3. 如何在模块化项目中正确组织类文件？
        - 课程提到了应该将每个类放在单独的文件中，但需要先了解模块系统。这个问题值得在后续课程中关注。

5. **参数属性（Parameter Property）**

    - 在构造函数参数前加 `public | private | readonly` 可自动生成并初始化同名属性
    - 若属性已在父类定义，子类构造函数应传参而非再次声明

**代码示例**

1. **Person 与 Student**

    ```typescript
    // 父类 (Base Class)
    class Person {
        // 使用参数属性简化定义和初始化
        constructor(public firstName: string, public lastName: string) {}

        // Getter 方法
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        // 普通方法
        walk(): void {
            console.log(`${this.fullName} is walking.`);
        }
    }

    // 子类 (Derived Class) 继承自 Person
    class Student extends Person {
        // 子类构造函数
        // studentId 是子类特有属性，使用参数属性
        // firstName, lastName 用于传递给父类构造函数，不加修饰符
        constructor(public studentId: number, firstName: string, lastName: string) {
            // 必须调用 super() 来初始化父类部分
            super(firstName, lastName); // 将参数传递给 Person 的构造函数
        }

        // 子类特有的方法
        takeTest(): void {
            console.log(`${this.fullName} (ID: ${this.studentId}) is taking a test.`);
        }
    }

    // 创建子类实例
    let student = new Student(1, 'John', 'Smith');

    // 访问继承的成员
    console.log(student.fullName); // 输出: John Smith (来自 Person 的 getter)
    student.walk();              // 输出: John Smith is walking. (来自 Person 的方法)

    // 访问子类特有的成员
    console.log(student.studentId); // 输出: 1
    student.takeTest();           // 输出: John Smith (ID: 1) is taking a test.
    ```

    - 描述：`Student` 继承 `Person`；通过 `super()` 复用父类初始化逻辑，并添加学号与考试方法。

好的，我们来根据字幕和笔记格式，补全关于 TypeScript 方法重写的笔记。

## 方法重写 (Method Overriding)

> **简述**：方法重写允许子类提供一个与其父类中已定义的方法（或访问器属性 getter/setter）具有相同名称和签名的特定实现。这使得子类能够改变或扩展继承自父类的行为，以适应自身的特定需求。

**知识树**

1.  **方法重写 (Method Overriding)**：
    - 定义：在子类中重新定义父类中已存在的方法（或访问器），以改变其行为。
    - 目的：定制化子类的特定行为，同时保持继承关系。
2.  **`override` 关键字**：
    - 作用：显式地标记一个方法（或访问器）是对父类成员的重写。
    - 好处：
        - 提高代码清晰度：明确表示该成员意图覆盖父类成员。
        - 编译时检查：如果父类中不存在同名、同签名（或兼容签名）的成员，或者该成员不可重写（例如 `private`），编译器会报错，防止意外错误。
3.  **`super` 关键字**：
    - 作用：在子类的方法（或访问器）内部，用于调用父类的同名方法（或访问器）的实现。
    - 用途：常用于在重写方法中，基于父类行为进行扩展，而不是完全替换。
4.  **`noImplicitOverride` 编译选项**：
    - 位置：`tsconfig.json` 文件中的 `compilerOptions`。
    - 作用：设置为 `true` 时，强制要求所有重写父类成员的方法或访问器都必须使用 `override` 关键字进行标记，否则编译器会报错。
    - 目的：避免无意间的重写（例如，子类偶然定义了与父类同名的方法），增强代码的健壮性和可维护性。

**代码示例**

1.  **定义基类和可被重写的方法**

    ```typescript
    // 基类 Person
    class Person {
        constructor(public firstName: string, public lastName: string) {}

        // 定义一个 getter，可以被子类重写
        get fullName(): string {
            console.log("Executing Person's fullName getter");
            return `${this.firstName} ${this.lastName}`;
        }

        // 普通方法也可以被重写
        displayInfo(): void {
            console.log(`Name: ${this.fullName}`);
        }
    }
    ```

    - 定义了一个 `Person` 类，包含 `firstName`、`lastName` 属性和一个 `fullName` getter。这个 getter 是后续子类重写的对象。

2.  **使用 `override` 和 `super` 重写方法**

    ```typescript
    // 子类 Teacher 继承 Person
    class Teacher extends Person {
        // Teacher 类没有定义自己的构造函数，
        // 因此它会自动继承并使用 Person 类的构造函数。

        // 使用 'override' 关键字显式重写 fullName getter
        override get fullName(): string {
            console.log("Executing Teacher's overridden fullName getter");
            // 使用 'super.fullName' 调用父类 Person 的 fullName getter 实现
            // 并在其结果前添加 "Professor" 前缀
            return `Professor ${super.fullName}`;
        }

        // 重写普通方法
        override displayInfo(): void {
            console.log("Executing Teacher's overridden displayInfo method");
            // 可以直接调用重写后的 getter，或者也使用 super 调用父类方法
            // Option 1: Use the overridden getter
            console.log(`Teacher Info: ${this.fullName}`);
            // Option 2: Call parent's method using super (if needed)
            // super.displayInfo(); // Uncomment this to also call Person's displayInfo
        }
    }

    // --- 启用 noImplicitOverride ---
    // 在 tsconfig.json 文件中确保设置:
    // {
    //   "compilerOptions": {
    //     // ... 其他选项
    //     "noImplicitOverride": true
    //     // ...
    //   }
    // }
    // 如果没有 'override' 关键字且启用了 noImplicitOverride，编译器将报错。

    // --- 实例化和使用 ---
    const teacher = new Teacher('John', 'Smith');

    // 调用 teacher 实例的 fullName getter
    // 这将执行 Teacher 类中重写的版本
    console.log(teacher.fullName);
    // 输出:
    // Executing Teacher's overridden fullName getter
    // Executing Person's fullName getter  (因为 Teacher 的 fullName 调用了 super.fullName)
    // Professor John Smith

    console.log("---");

    // 调用 teacher 实例的 displayInfo 方法
    // 这将执行 Teacher 类中重写的版本
    teacher.displayInfo();
    // 输出:
    // ---
    // Executing Teacher's overridden displayInfo method
    // Executing Teacher's overridden fullName getter
    // Executing Person's fullName getter
    // Teacher Info: Professor John Smith
    ```

    - `Teacher` 类继承自 `Person`。
    - 使用 `override` 关键字明确指出 `fullName` getter 是对父类 `Person` 中同名 getter 的重写。
    - 在 `Teacher` 的 `fullName` 实现中，`super.fullName` 被用来调用 `Person` 类的原始 `fullName` getter，获取基础全名，然后在其前面加上 "Professor " 前缀。
    - 同样，`displayInfo` 方法也被重写，演示了普通方法的重写。
    - 注释中强调了需要在 `tsconfig.json` 中启用 `noImplicitOverride: true` 来强制使用 `override` 关键字，这是推荐的最佳实践。
    - 实例化 `Teacher` 并调用 `fullName` 和 `displayInfo` 会执行子类中重写后的版本。

## 多态 (Polymorphism)

> **简述**：多态（多种形态）允许将不同子类的对象视为其父类类型进行统一处理，但在运行时，调用同一方法会根据对象的实际子类类型执行各自重写后的特定行为。

**知识树**

1. **定义**

    - Poly（多）+ Morph（形态）= 多态
    - 对象在运行时可表现为多种不同的形态

2. 目的/用途

    - 灵活和可扩展:允许使用父类类型引用调用子类特有的实现
    - 多态使组件系统能够根据不同子类提供不同的行为，同时保持统一的接口，大大提高了代码的重用性和扩展性。

3. 实现机制:

    - 使用继承（Inheritance）和方法重写（Override）实现
    - 子类重写父类的方法，不同子类对象调用同一方法时表现不同

4. **实际应用**:

    - 不同对象共享同一接口，可统一调用
    - 新增对象类型时，无需修改现有代码，即可扩展功能

5. **开放-封闭原则（Open-Closed Principle）**

    - 定义：开闭原则是面向对象设计的一个原则，针对软件实体（类、模块、函数等）
        - 类应对扩展开放（新增子类）
        - 类应对修改封闭（避免修改已有代码，减少错误）
    - 目的/用途：鼓励通过扩展现有代码而非修改现有代码来实现新功能

6. 使用 override 关键字

    - 使用 override 关键字显式声明重写父类方法，编译器会检查父类中是否真的存在该方法
    - 如果没有使用 override 关键字（如 BadTeacher 类），当父类方法名变更时编译器不会发出警告
    - 这种情况会导致多态行为被破坏，因为子类方法不再重写父类方法，而是定义了一个全新的方法
    - 使用 override 关键字是维护多态行为稳定性的重要实践

7. 关键点与注意事项

    1. 多态的本质：多态让我们能够统一处理不同类型的对象，只要它们继承自同一个基类或实现同一个接口，大大简化了代码设计。
    2. "是一个"关系：继承应该表示"是一个"关系（如教师"是一个"人），这是实现有意义多态的基础。
    3. 开闭原则在实践中：虽然开闭原则是理想目标，但在实际开发中不可能完全做到。它应被视为一种指导原则，帮助我们设计更易维护的代码。
    4. override 关键字的重要性：始终使用 override 关键字标记重写的方法，这不仅是一种文档化方式，更是防止因基类变化导致多态行为被破坏的保障。
    5. 多态与组件设计：在前端框架（如 React、Vue）中，多态是构建可复用组件体系的基础。基础组件定义通用接口，特定组件通过继承和重写提供特定行为。
    6. TypeScript 类型系统的优势：TypeScript 的静态类型检查使多态行为更加安全可靠，能在编译时捕获潜在问题。

8. 疑问与待办

    1. 多态与接口：课程主要展示了通过类继承实现的多态，那么通过接口（interfaces）如何实现多态？两种方式有什么优缺点？
    2. React/Vue 中的多态应用：如何在现代前端框架中应用多态原则创建组件继承体系？
    3. 动态多态 vs 静态多态：TypeScript 是否支持编译时（静态）多态，如泛型和方法重载？它与运行时（动态）多态有何区别？

**代码示例**

1.  \*\*基类和子类

    ```typescript
    class Person {
        constructor(public firstName: string, public lastName: string) {}
        get fullName(): string { return `${this.firstName} ${this.lastName}`; }
    }

    class Teacher extends Person {
        override get fullName(): string { return `Professor ${super.fullName}`; }
    }

    class Principal extends Person {
        override get fullName(): string { return `Principal ${super.fullName}`; }
    }
    // (假设还有 Student 类)
    class Student extends Person {} // 未重写，使用基类实现
    ```

2.  **演示多态的函数**

    ```typescript
    function printNames(people: Person[]): void { // 接收 Person 数组
        console.log("--- Printing Names ---");
        for (const person of people) {
            // 多态发生点: person.fullName 调用
            // 运行时决定调用哪个类的 fullName 实现   调用的是各自子类的具体实现
            console.log(person.fullName);
        }
        console.log("----------------------");
    }

    // 将不同子类的对象放入一个 Person 类型的数组中
    // 这是多态的前提：父类引用(数组元素类型Person)指向子类对象(student, teacher, principal)
    // 父类引用指向不同子类实例
    const peopleList: Person[] = [
        new Student('John', 'Doe'),    // 指向 Student
        new Teacher('Jane', 'Smith'),  // 指向 Teacher
        new Principal('Mary', 'Major') // 指向 Principal
    ];

    printNames(peopleList);
    // 输出:
    // --- Printing Names ---
    // John Doe
    // Professor Jane Smith
    // Principal Mary Major
    // ----------------------
    ```

- 关键在于  printNames  函数内部的  person.fullName  调用：虽然  person  的静态类型是  Person，但实际执行的是运行时  person  所引用的具体对象（Student, Teacher, Principal）的  fullName  方法。

## 访问修饰符（Access Modifiers）

> 简述：访问修饰符控制类成员的可见范围。TypeScript 提供 **public**、**private**、**protected** 三种修饰符，用于在封装与继承之间取得平衡。

**知识树**

1. **public（默认）**

    - 成员在任何地方可访问

2. **private**

    - 仅在声明类内部可访问
    - **不**被子类继承

3. **protected**

    - 在声明类内部和所有子类内部可访问
    - 外部无法访问

4. **设计考量**

    - 使用 private 和 protected 保护内部实现细节，防止随意调用
    - 滥用 protected 会导致子类耦合，通常优先使用 private

**代码示例**

1. **private：外部与子类均不可访问**

    ```typescript
    class Person {
        private walk() {
            console.log("walking");
        }
    }

    const p = new Person();
    // p.walk(); // ❌ 编译错误

    class Student extends Person {
        study() {
            // this.walk(); // ❌ 编译错误
        }
    }
    ```

2. **protected：子类可访问，外部不可**

    ```typescript
    class Person {
        protected walk() {
            console.log("walking");
        }
    }

    class Student extends Person {
        study() {
            this.walk(); // ✅ 子类内部可调用
        }
    }

    const s = new Student();
    // s.walk(); // ❌ 外部无法调用
    ```

3. **public：任何地方可访问**

    ```typescript
    class Person {
        public talk() {
            console.log("talking");
        }
    }

    const p = new Person();
    p.talk(); // ✅
    ```

**实践指南**

- 默认使用 public 暴露真正需要的接口；
- 使用 private 隐藏实现细节；
- 仅在确需让子类复用时才用 protected，避免过度耦合；
- 定期重构，确保访问级别仍符合设计初衷。

## 抽象类与抽象方法（Abstract Classes & Methods）

> 简述：抽象类提供统一接口与公共实现但禁止直接实例化；抽象方法仅声明不实现，强制子类给出具体实现，常用于定义模板结构。

**知识树**

1. 抽象类（Abstract Class）

    - 定义：使用  abstract  关键字标记的类
    - 特性：不能被实例化，只能被继承
    - 组成：可以包含普通属性、普通方法、抽象方法的混合
    - 用途：定义通用结构与行为，强制子类遵循特定模式

2. 抽象方法（Abstract Method）

    - 定义：使用  abstract  关键字标记的方法
    - 特性：没有实现体，只有方法签名
    - 语法：以分号结尾，必须明确声明返回类型
    - 约束：只能存在于抽象类中，必须由子类实现

3. 抽象类继承关系：

    - 子类必须实现所有抽象方法，否则子类也必须标记为抽象类
    - 子类构造函数必须调用  super()  初始化父类
    - 子类实现抽象方法时应使用  override  关键字

4. **使用场景**

    - 不同子类共享公共字段/行为但核心算法各异
    - 定义模板方法模式的框架

5. **设计考量**

    - 抽象类 vs 接口：抽象类可含状态与实现；接口仅约定签名
    - 抽象类像“未烹饪的配方”，防止误用

**代码示例**

1. **定义抽象类与抽象方法**

    ```typescript
    abstract class Shape {
        constructor(public color: string) {}
        abstract render(): void; // 抽象方法，无实现
    }
    ```

2. **子类实现抽象方法**

    ```typescript
    class Circle extends Shape {
        constructor(public radius: number, color: string) {
            super(color);
        }

        override render(): void {
            console.log("Rendering a circle");
            // 真实绘制算法...
        }
    }

    const shapes: Shape[] = [
        new Circle(10, "red"),
        // new Shape("blue"); // ❌ 无法实例化抽象类
    ];

    for (const s of shapes) s.render();
    ```

3. **多形态协作示例**

    ```typescript
    class Rectangle extends Shape {
        constructor(public width: number, public height: number, color: string) {
            super(color);
        }

        override render(): void {
            console.log("Rendering a rectangle");
        }
    }

    shapes.push(new Rectangle(20, 15, "green"));
    shapes.forEach(s => s.render());
    ```

---

## 接口（Interfaces）

> 简述：**接口只描述对象的外形（属性与方法签名），不包含任何实现**；用来声明能力、解耦实现，并支持多重继承。

**知识树**

1. 接口基础

    - 定义：描述对象结构的类型声明
    - 特点：只包含成员签名，不包含实现
    - 语法：使用`interface`关键字声明
    - 编译特性：纯 TypeScript 概念，编译后完全移除

2. 接口与抽象类对比

    - 相似点：都能定义对象应遵循的结构
    - 区别一：接口仅定义结构只能声明，抽象可包含状态与部分实现
    - 区别二：接口编译后无输出，抽象类编译为普通 JavaScript 类
    - 区别三：抽象类只能单继承；接口可多重实现
    - 选择标准：无共享实现用接口；有共享实现用抽象类

3. 接口继承

    - 概念：接口可以扩展其他接口
    - 语法：使用`extends`关键字
    - 特性：一个接口可继承多个接口
    - 用途：构建接口层次结构，扩展现有接口

4. 类实现接口

    - 概念：类可声明实现一个或多个接口
    - 语法：使用`implements`关键字
    - 约束：类必须提供接口所有成员的具体实现
    - 多重实现：一个类可实现多个接口

5. 接口最佳实践
    - 命名约定：有些开发者使用`I`前缀，官方不推荐
    - 设计原则：保持接口小而专注，遵循单一职责
    - 应用场景：API 类型、组件属性、服务契约
    - 声明合并：同名接口定义会合并（独特特性）

**代码示例**

1. 接口基础定义

    ```typescript
    // 定义日历接口
    interface Calendar {
      name: string;
      addEvent(event: any): void;
      removeEvent(event: any): void;
    }
    ```

    - 接口定义了日历对象应具有的属性和方法，但不包含实现细节

2. 接口与抽象类对比

    ```typescript
    // 使用抽象类
    abstract class CalendarClass {
      constructor(public name: string) {}
      abstract addEvent(event: any): void;
      abstract removeEvent(event: any): void;
    }

    // 使用接口（更简洁）
    interface CalendarInterface {
      name: string;
      addEvent(event: any): void;
      removeEvent(event: any): void;
    }
    ```

    - 抽象类版本会编译为 JavaScript 类，接口完全不生成 JavaScript 代码

3. 接口继承

    ```typescript
    interface Calendar {
      name: string;
      addEvent(event: any): void;
      removeEvent(event: any): void;
    }

    interface CloudCalendar extends Calendar {
      sync(): void;
    }
    ```

    - CloudCalendar 继承 Calendar 的所有成员，并添加了 sync 方法

4. 类实现接口

    ```typescript
    class GoogleCalendar implements Calendar {
      constructor(public name: string) {}

      addEvent(event: any): void {
        console.log(`Adding event to Google Calendar`);
      }

      removeEvent(event: any): void {
        console.log(`Removing event from Google Calendar`);
      }
    }
    ```

    - GoogleCalendar 类实现了 Calendar 接口，提供了所有必需成员的具体实现

5. 多重继承与实现

    ```typescript
    interface Syncable {
      sync(): void;
    }

    class OutlookCalendar implements Calendar, Syncable {
      constructor(public name: string) {}

      addEvent(event: any): void {
        console.log(`Adding event to Outlook`);
      }

      removeEvent(event: any): void {
        console.log(`Removing event from Outlook`);
      }

      sync(): void {
        console.log(`Syncing Outlook calendar`);
      }
    }
    ```

    - 一个类可以同时实现多个接口，必须提供所有接口的所有成员实现
