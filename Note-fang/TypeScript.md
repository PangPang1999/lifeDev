## 技巧

# Ts 简介

## 简介

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

## 配置文件

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

## 调试

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

# 内置类型

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

## 原始类型与类型推断

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

## 可空类型

Nullable Types（ `string | null`）

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

### 类

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

### 创建对象

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

## 修饰符

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

## 访问修饰符

> 简述：阐述 TypeScript 中的访问修饰符 (Access Modifiers) (`public`, `private`, `protected`)，它们用于控制类成员（属性和方法）的可访问性。通过限制访问，可以增强封装性，防止外部代码直接篡改内部状态，从而构建更健壮、更易于维护的类。

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

## 参数属性

> 简述：介绍 TypeScript 的参数属性特性(Parameter Properties)，这是一种简洁的语法糖，允许在构造函数参数上直接使用访问修饰符（`public`, `private`, `protected`）或 `readonly`，从而自动完成类属性的声明和初始化，显著减少样板代码。

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

## 索引签名

> 简述：在 TypeScript 中，通过(Index Signature)索引签名 `[key: KeyType]: ValueType` 为对象添加 **动态** 属性，同时保留编译期的类型检查，兼顾 JavaScript 的灵活性与 TypeScript 的严谨性。

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

## 静态成员

> 简述：阐述静态成员 (Static Members)（属性和方法）的概念。**静态成员属于类本身，而非类的任何特定实例。** 它们用于表示或操作与类整体相关、而非与单个对象实例相关的状态或行为，常用于实现共享计数器、工具函数或工厂模式。

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

## 继承

> 简述：继承（Inheritance）通过 `extends` 关键字，让子类复用父类的属性与方法，避免重复代码；子类可添加自身特有成员并借助 `super` 调用父类构造函数。

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

## 方法重写

> **简述**：方法重写 (Method Overriding)允许子类提供一个与其父类中已定义的方法（或访问器属性 getter/setter）具有相同名称和签名的特定实现。这使得子类能够改变或扩展继承自父类的行为，以适应自身的特定需求。

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

## 多态

> **简述**：多态 (Polymorphism)（多种形态）允许将不同子类的对象视为其父类类型进行统一处理，但在运行时，调用同一方法会根据对象的实际子类类型执行各自重写后的特定行为。

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

## 访问修饰符

> 简述：访问修饰符（Access Modifiers）控制类成员的可见范围。TypeScript 提供 **public**、**private**、**protected** 三种修饰符，用于在封装与继承之间取得平衡。

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

## 抽象类与抽象方法

> 简述：抽象类（Abstract Classes & Methods）提供统一接口与公共实现但禁止直接实例化；抽象方法仅声明不实现，强制子类给出具体实现，常用于定义模板结构。

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

## 接口

> 简述：**接口（Interfaces）只描述对象的外形（属性与方法签名），不包含任何实现**；用来声明能力、解耦实现，并支持多重继承。

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

## 泛型

> 简述：泛型是 TypeScript 中一种强大的类型工具，允许创建可重用的组件，使它们能够处理多种类型而非单一类型，提供类型安全性的同时保持代码灵活性和重用性。

**知识树**

1. 泛型基础：

    - 定义：使用类型参数作为占位符，在使用时指定具体类型
    - 解决问题：避免代码重复，同时保持类型安全
    - 命名约定：常用 T、K、V 等简写表示类型参数

2. 泛型类：

    - 定义：使用一个或多个类型参数的类
    - 语法：`class ClassName<T, U> { ... }`
    - 使用：创建实例时提供具体类型或依靠类型推断
    - 应用：处理不同类型数据的通用容器

3. 泛型函数与方法：

    - 定义：使用类型参数的函数或类方法
    - 语法：`function name<T>(param: T): T { ... }`
    - 静态泛型方法：类中的静态方法也可以是泛型
    - 应用：通用数据处理函数，避免代码重复

4. 泛型接口：

    - 定义：包含类型参数的接口
    - 语法：`interface Name<T> { property: T; }`
    - 应用：API 响应类型、通用数据结构定义
    - 实例：Result< T>接口表示包含不同类型数据的 API 结果

5. 泛型约束：

    - 定义：限制类型参数必须满足的条件
    - 语法：`<T extends Constraint>`
    - 约束类型：基本类型、形状、接口、类
    - 应用：确保类型参数具有特定属性或方法

6. 泛型类继承：

    - 泛型传递：子类保持父类泛型性 `class Child<T> extends Parent<T>`
    - 泛型约束：子类对泛型参数添加限制 `class Child<T extends Shape> extends Parent<T>`
    - 泛型固定：子类固定父类泛型类型 `class Child extends Parent<Product>`

7. keyof 操作符：

    - 定义：获取类型的所有属性名作为联合类型
    - 语法：`keyof Type`
    - 应用：类型安全的属性访问，防止访问不存在的属性
    - 结合泛型：`function get<T, K extends keyof T>(obj: T, key: K): T[K]`

8. 类型映射：
    - 定义：基于现有类型创建新类型的技术
    - 语法：`type NewType<T> = { [K in keyof T]: T[K] }`
    - 应用：创建只读、可选或变换后的类型
    - 内置映射类型：Readonly< T>、Partial< T>等

**代码示例**

1. 泛型类

    ```typescript
    // 不使用泛型的键值对类
    class KeyValuePair {
      constructor(public key: number, public value: string) {}
    }

    // 使用泛型的键值对类
    class KeyValuePair<K, V> {
      constructor(public key: K, public value: V) {}
    }

    // 使用泛型类
    const pair1 = new KeyValuePair<number, string>(1, "Apple");
    const pair2 = new KeyValuePair<string, boolean>("isActive", true);

    // 类型推断（无需显式指定类型参数）
    const pair3 = new KeyValuePair(5, "Banana"); // K推断为number，V推断为string
    ```

    - 泛型类允许我们创建处理任何类型数据的通用结构，避免为每种类型组合创建单独的类

2. 泛型函数与方法

    ```typescript
    // 泛型函数
    function wrapInArray<T>(value: T): T[] {
      return [value];
    }

    // 调用泛型函数
    const numbers = wrapInArray(42);        // 返回number[]
    const strings = wrapInArray("Hello");   // 返回string[]

    // 泛型方法
    class ArrayUtils {
      static wrapInArray<T>(value: T): T[] {
        return [value];
      }
    }

    // 调用静态泛型方法
    const booleans = ArrayUtils.wrapInArray(true); // 返回boolean[]
    ```

    - 泛型函数和方法让我们能创建适用于任何类型的通用逻辑，保持类型安全的同时避免代码重复

3. 泛型接口与 API 调用

    ```typescript
    // 泛型结果接口
    interface Result<T> {
      data: T | null;
      error: string | null;
    }

    // 数据模型接口
    interface User {
      username: string;
    }

    interface Product {
      title: string;
    }

    // 泛型API调用函数
    function fetch<T>(url: string): Result<T> {
      // 实际调用API的代码
      return { data: null, error: null };
    }

    // 使用泛型函数获取不同类型的数据
    const userResult = fetch<User>("api/users");
    console.log(userResult.data?.username); // 类型安全访问

    const productResult = fetch<Product>("api/products");
    console.log(productResult.data?.title); // 类型安全访问
    ```

    - 泛型接口使我们能够定义通用数据结构，同时保留类型信息，特别适用于 API 交互

4. 泛型约束

    ```typescript
    // 无约束泛型函数
    function echo<T>(value: T): T {
      return value;
    }

    // 联合类型约束
    function echoNumberOrString<T extends number | string>(value: T): T {
      return value;
    }

    // 形状约束（对象必须有name属性）
    function printName<T extends { name: string }>(obj: T): void {
      console.log(obj.name);
    }

    // 类约束（必须是Person或其子类的实例）
    class Person {
      constructor(public name: string) {}
    }

    function createPerson<T extends Person>(PersonClass: new (name: string) => T, name: string): T {
      return new PersonClass(name);
    }
    ```

    - 泛型约束限制了类型参数的范围，确保类型满足特定要求，提高类型安全性

5. keyof 与类型安全的属性访问

    ```typescript
    // 通用对象存储
    class Store<T> {
      private _objects: T[] = [];

      add(obj: T): void {
        this._objects.push(obj);
      }

      // 使用keyof保证属性名的类型安全
      find<K extends keyof T>(property: K, value: T[K]): T | undefined {
        return this._objects.find(obj => obj[property] === value);
      }
    }

    // 使用示例
    interface Product {
      name: string;
      price: number;
    }

    const store = new Store<Product>();
    store.add({ name: "Phone", price: 999 });

    // 类型安全的属性查找
    const p1 = store.find("name", "Phone");   // 有效
    const p2 = store.find("price", 999);      // 有效
    // const p3 = store.find("category", "Electronics"); // 编译错误：属性不存在
    ```

    - keyof 操作符与泛型结合使用，可以在编译时防止属性访问错误，提高代码质量

6. 类型映射

    ```typescript
    interface Product {
      name: string;
      price: number;
    }

    // 创建只读版本的映射类型
    type ReadOnly<T> = {
      readonly [K in keyof T]: T[K];
    };

    // 创建所有属性可选的映射类型
    type Optional<T> = {
      [K in keyof T]?: T[K];
    };

    // 创建所有属性可为空的映射类型
    type Nullable<T> = {
      [K in keyof T]: T[K] | null;
    };

    // 使用映射类型
    const product: ReadOnly<Product> = {
      name: "Laptop",
      price: 1299
    };

    // product.price = 999; // 错误：属性是只读的

    // TypeScript内置的映射类型
    // Partial<T> - 所有属性变为可选
    // Readonly<T> - 所有属性变为只读
    // Required<T> - 所有属性变为必需
    // 等等...
    ```

    - 类型映射是一种基于现有类型创建新类型的强大技术，可以大幅减少类型定义的重复工作

# 泛型

> 简述：泛型（Generics）是为了解决类型复用和类型安全之间的矛盾。它让我们能够编写既通用又类型安全的代码，避免冗余和类型不安全的写法。

**知识树**

1. 类型重用问题

    - 传统解决方案：为每种类型创建单独实现，导致代码重复
    - 使用 any 的缺陷：失去类型安全性和智能提示

2. 具体案例分析

    - 键值对示例：需要支持不同类型的键和值
    - 重复代码问题：数量不断增长的实现类
    - 类型安全问题：使用 any 会丢失类型信息

3. 通用解决方案的必要性

    - 代码重用：避免为每种类型组合创建新类
    - 类型安全：保持 TypeScript 的类型检查优势
    - 开发体验：保留代码补全和智能提示功能

**代码示例**

1. 非泛型实现导致的问题

```typescript
// 只支持number键和string值的键值对
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

// 使用时遇到的限制
const pair = new KeyValuePair(1, "Apple");
// const stringKeyPair = new KeyValuePair("id", "Apple"); // 错误：key必须是number
```

- 这种实现限制了键值对只能使用特定类型，无法灵活应对不同需求

2. 使用 any 的弊端

```typescript
// 使用any的键值对
class KeyValuePair {
  constructor(public key: any, public value: any) {}
}

const pair = new KeyValuePair(1, "Apple");
// 失去了类型安全和智能提示
// pair.key.toFixed(2); // 运行时可能出错，编译时无警告
// pair.value.toLowerCase(); // 运行时可能出错，编译时无警告
```

- 使用 any 虽然增加了灵活性，但完全牺牲了 TypeScript 的类型检查优势

## 泛型类

> 简述：泛型类允许类在定义时不指定具体类型，而在使用时再指定类型参数，从而实现类型安全的复用。
> **知识树**

1. 泛型类基础定义

    - 语法：在类名后使用尖括号声明类型参数 `<T>`
    - 类型参数可多个，命名无强制规范（T、U、K、V 常用）

2. 类型参数的使用

    - 实例化时指定类型参数
    - 类型推断：大多数情况下可自动推断类型

3. 泛型类实例化

    - 显式指定类型参数：`new ClassName<Type>()`
    - 类型推断：让编译器自动推断类型
    - 多类型参数指定：`new ClassName<Type1, Type2>()`

4. 命名约定

    - T (Type)：通用类型参数
    - K (Key)：通常表示键类型
    - V (Value)：通常表示值类型
    - 其他命名：根据语义选择适当的标识符

**代码示例**

1. 单类型参数泛型类

```typescript
// 使用单个类型参数的泛型类
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}

// 使用数字类型
const numberBox = new Box<number>(10);
const value = numberBox.getValue(); // 返回类型是number

// 使用字符串类型
const stringBox = new Box("Hello"); // 类型参数自动推断为string
```

- 这个示例创建了一个通用容器，可以存储任何类型的值，同时保持完整的类型检查

2. **多类型参数泛型类（重点看这个）**

```typescript
// 使用两个类型参数的键值对泛型类
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// 不同类型组合的键值对
const pair1 = new KeyValuePair<number, string>(1, "Apple");
const pair2 = new KeyValuePair<string, boolean>("isActive", true);

// 使用类型推断
const pair3 = new KeyValuePair(5, "Banana"); // K推断为number，V推断为string
```

- 多类型参数使泛型类更加灵活，能够适应各种类型组合的需求，无需创建多个专用类

## 泛型函数与方法

> 简述：泛型函数让函数在定义时不绑定具体类型，而在调用时由参数类型推断或显式指定，提升了函数的通用性和类型安全。

**知识树**

1. 泛型函数定义

    - 语法：在函数名后加类型参数 `function name<T>()`
    - 参数和返回值可使用该类型参数

2. 泛型方法

    - 类中的方法同样可以定义为泛型
    - 可结合 static 静态方法使用
    - 混合使用：方法可同时使用类的泛型参数和自己的泛型参数

3. 函数类型推断

    - 调用时自动推断：从传递的参数推断类型参数
    - 显式类型指定：在特殊情况下手动指定类型参数
    - 默认类型：TypeScript 2.3+支持默认类型参数

4. 泛型函数应用场景

    - 数据转换：对不同类型数据执行相同转换
    - 工具函数：创建通用的数据处理工具
    - 包装函数：对不同类型数据应用相同包装逻辑

**代码示例**

1. 泛型函数(这个例子：根据传递的参数推断类型参数，并将其包装在同类型的数组中返回)

```typescript
// 创建一个包装数组的泛型函数
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// 使用不同类型调用
const numArray = wrapInArray(42);        // 返回类型: number[]
const strArray = wrapInArray("Hello");   // 返回类型: string[]
const objArray = wrapInArray({id: 1});   // 返回类型: {id: number}[]

// 显式指定类型参数
const explicitArray = wrapInArray<boolean>(true); // 返回类型: boolean[]


// 泛型方法作为类的静态方法
class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

// 使用静态泛型方法
const moreNumbers = ArrayUtils.wrapInArray(100); // 返回类型：number[]
```

- `wrapInArray`函数接收任意类型的参数，并将其包装在同类型的数组中返回

2. 泛型方法（拓展）

```typescript
// 包含泛型方法的工具类
class ArrayUtils {
  // 实例泛型方法
  filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
  }

  // 静态泛型方法
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }

  // 混合类泛型参数和方法泛型参数
  static convert<T, U>(array: T[], converter: (item: T) => U): U[] {
    return array.map(converter);
  }
}

// 使用静态泛型方法
const boolArray = ArrayUtils.wrapInArray(false); // 返回类型: boolean[]

// 使用混合泛型参数的方法
const stringLengths = ArrayUtils.convert(
  ["hello", "world"],
  (s) => s.length
); // 返回类型: number[]
```

3. 这是 2 转换成 js 后的代码

```typescript
class ArrayUtils {
	filter(array, predicate) {
		return array.filter(predicate);
	}

	static wrapInArray(value) {
		return [value];
	}

	static convert(array, converter) {
		return array.map(converter);
	}
}
const arrayUtils = new ArrayUtils();
let arrayUtils1 = arrayUtils.filter([1, 2, 3], (item) => item >= 1);

const boolArray = ArrayUtils.wrapInArray(false);

const stringLengths = ArrayUtils.convert(["hello", "world!"], (s) => s.length);//[5,6]
```

- 泛型方法可以存在于类中，作为实例方法或静态方法，使类的功能更加通用和灵活
- 方法内部实现简洁地利用了数组的内置  filter  和  map  方法

## 泛型接口

> 简述：泛型接口允许接口中的属性类型根据使用场景灵活变化，极大提升了接口的复用性和表达能力。

**知识树**

1. 泛型接口声明

    - 语法：在接口名后添加类型参数 `interface Name<T>`
    - 多类型参数：接口可使用多个类型参数 `interface Name<T, U>`
    - 嵌套类型参数：类型参数可用于嵌套属性类型

2. 泛型接口使用场景

    - API 响应类型：定义包含不同数据类型的通用响应结构
    - 数据容器：创建通用的数据结构(如列表、树等)
    - 通用组件接口：定义可处理不同类型数据的组件属性

3. 实现泛型接口

    - 类实现：类可以实现泛型接口
    - 固定类型：实现时可固定泛型接口的类型参数
    - 传递类型参数：类可以将接口的类型参数传递给自身

4. 函数返回泛型接口

    - 泛型函数创建泛型接口的实例
    - 泛型类型推断与指定
    - 泛型接口作为函数返回类型

**代码示例**

1. 通用 API 响应接口

```typescript
// 定义泛型接口表示API响应结构
interface Result<T> {
  data: T | null;
  error: string | null;
}

// 定义数据模型接口
interface User {
  username: string;
}

interface Product {
  title: string;
}

// 泛型函数模拟API调用
function fetch<T>(url: string): Result<T> {
  // 模拟API调用，实际项目中会使用真实的HTTP请求
  return {
    data: null,
    error: null,
  };
}

// 获取不同类型的数据
const userResult = fetch<User>('api/users'); // 返回类型：Result<User>
console.log(userResult.data?.username); // 安全访问username属性

const productResult = fetch<Product>("api/products"); // 返回类型：Result<Product>
console.log(productResult.data?.title); // 安全访问title属性
```

**解析**：

- 这个例子展示了泛型接口在 API 调用中的应用
- `Result<T>`接口定义了通用的 API 响应结构，`data`字段类型可变，通过泛型参数指定
- `User`和`Product`接口分别定义了不同的数据模型
- `fetch<T>`函数是一个泛型函数，返回指定类型的`Result<T>`
- 调用`fetch<User>`时，返回的结果中`data`字段类型为`User`，编译器知道可以访问`username`属性
- 调用`fetch<Product>`时，返回的结果中`data`字段类型为`Product`，编译器知道可以访问`title`属性
- 使用这种方式可以为不同 API 端点创建类型安全的调用，避免运行时类型错误

2. 泛型数据容器接口(可不看)

```typescript
// 通用集合接口
interface Collection<T> {
  add(item: T): void;
  remove(item: T): boolean;
  getItems(): T[];
  size(): number;
}

// 实现泛型接口的类
class List<T> implements Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  getItems(): T[] {
    return [...this.items];
  }

  size(): number {
    return this.items.length;
  }
}

// 使用不同类型的集合
const numberList = new List<number>();
numberList.add(1);
numberList.add(2);

const stringList = new List<string>();
stringList.add("hello");
```

- 泛型接口可以定义通用数据结构的契约，使实现类能够以类型安全的方式处理不同类型的数据

## 泛型约束

> 简述：泛型约束限制类型参数必须满足的条件，确保在泛型组件中安全访问特定属性或方法，增强类型安全性的同时保持适当的灵活性。

**知识树**

1. 约束基本概念

    - 语法：使用 extends 关键字 `<T extends Constraint>`
    - 目的：限制类型参数必须符合特定条件
    - 位置：可用于泛型类、函数、接口和类型别名

2. 约束类型种类

    - 基本类型约束：限制为特定类型或类型联合
    - 接口约束：限制必须包含特定属性或方法
    - 类约束：限制必须是特定类或其子类
    - 其他泛型约束：约束可以是另一个泛型类型

3. 约束的使用场景

    - 安全属性访问：确保类型有特定属性
    - 方法调用：确保类型有特定方法
    - 继承关系：确保类型继承自特定基类
    - 构造函数：约束必须是可实例化的类

4. 多重约束

    - 组合多个接口：`<T extends Interface1 & Interface2>`
    - 混合类型约束：基本类型和接口结合

**代码示例**

1. 属性约束

```typescript
// 使用接口约束泛型类型必须有name属性
interface Named {
  name: string;
}

// 泛型函数使用约束
function printName<T extends Named>(entity: T): void {
  console.log(entity.name); // 安全，T保证有name属性
}

// 有效调用
printName({ name: "Alice", age: 30 });
printName({ name: "Bob", role: "Admin" });

// 无效调用
// printName({ title: "Mr.", age: 30 }); // 错误：缺少name属性
```

- 这个例子通过约束确保传递给函数的参数必须有 name 属性，编译时就能捕获潜在错误

2. 类约束和构造函数参数

```typescript
// 基类
class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

// 子类
class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} is barking`);
  }
}

// 使用类约束的泛型函数
function createAndMove<T extends Animal>(AnimalClass: new (name: string) => T, name: string): T {
  const animal = new AnimalClass(name);
  animal.move();
  return animal;
}

// 使用
const dog = createAndMove(Dog, "Rex");
dog.bark(); // 可以调用Dog特有的方法

// 基于约束的条件性操作
function makeSound<T extends Animal>(animal: T): void {
  animal.move(); // 所有Animal都可以move

  // 检查是否是Dog实例，以调用特有方法
  if (animal instanceof Dog) {
    animal.bark();
  }
}
```

- 类约束确保类型参数是特定类或其子类，允许安全地访问共享方法，同时支持专用方法的条件性调用

## 泛型约束

简述：泛型约束（Constraints）用于限制类型参数的取值范围，确保泛型代码在编译期就能捕获类型不兼容的问题。

知识树

1. 基本约束
    - 使用 extends 关键字限制类型参数
    - 只允许特定类型或结构的类型参数
2. 结构约束
    - 限定类型参数必须包含某些属性
    - 支持接口、类、字面量类型的约束
3. 继承约束

    - 类型参数必须继承某个类或接口
    - 支持多层级继承
      代码示例

4. 基本约束

```typescript
// 基本泛型函数
function echo<T>(value: T): T {
  return value;
}

// 使用union类型约束
function echo<T extends number | string>(value: T): T {
  return value;
}

// 使用字面量约束
function echo<T extends {name: string}>(value: T): T {
  return value;
}
echo(123); // OK
echo("abc"); // OK
// echo(true); // 编译错误
```

2. 结构约束

```typescript
interface Person { name: string }
function printName<T extends Person>(obj: T) {
  console.log(obj.name);
}
// 有效调用
printName({ name: "Alice", age: 20 });
// 无效调用 // printName({ title: "Mr.", age: 30 }); // 错误：缺少name属性
```

3. 继承约束\类约束

```typescript
class Person { constructor(public name: string) {} }
class Customer extends Person {}
function echo<T extends Person>(value:T): T {
  return value
}
echo(new Customer('a'))
```

**解析**：

- 这个例子展示了各种泛型约束的应用
- `echo`是无约束泛型函数，可以接收任何类型的参数
- `echoNumberOrString`使用联合类型约束，限制参数只能是数字或字符串
- `printName`使用接口约束，要求参数必须有一个`name`属性，这样就可以安全地访问它
- `createPerson`使用类约束，参数必须是`Person`类或其子类的构造函数
- 泛型约束增加了类型安全性，同时保持了泛型的灵活性
- 在前端开发中，约束常用于确保组件接收的数据具有必要的结构

## 泛型类的继承和约束

> 简述：泛型类不仅可以被继承，还可以在子类中传递、限制或固定类型参数，实现更灵活的类型组合和复用。

**知识树**

1. 传递泛型参数

    - 概念：子类保持与父类相同的泛型灵活性
    - 语法：`class Child<T> extends Parent<T>`
    - 使用场景：子类需要与父类处理相同类型的数据

2. 约束泛型参数

    - 概念：子类对父类的泛型参数添加额外限制
    - 语法：`class Child<T extends Constraint> extends Parent< T>`
    - 使用场景：子类需要对类型参数有更严格的要求

3. 固定泛型类型

    - 概念：子类指定父类使用的具体类型
    - 语法：`class Child extends Parent<SpecificType>`
    - 使用场景：子类专注于处理特定类型的数据

4. 复合模式

    - 多层继承：泛型类多级继承的处理
    - 多泛型参数：处理父类有多个类型参数的情况
    - 混合模式：结合上述三种方式的复杂情况

**代码示例**

```typescript
// 基础接口
interface Product {
  name: string;
  price: number;
}

// 泛型存储类
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// 场景1：传递泛型参数给子类
class CompressibleStore<T> extends Store<T> {
  compress(): void {
    console.log("Compressing storage...");
  }
}

// 场景2：约束泛型参数
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name);
  }
}

// 场景3：固定泛型类型
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    // 产品特定的操作
    return [];
  }
}
```

**解析**：

- 这个例子展示了泛型类继承的三种常见场景
- `Store<T>`是基础泛型类，提供存储和添加任意类型对象的功能
- `CompressibleStore<T>`传递泛型参数给父类，保持通用性，同时添加压缩功能
- `SearchableStore<T>`约束泛型参数必须有`name`属性，这样可以安全地实现查找功能
- `ProductStore`固定泛型类型为`Product`，专门处理产品对象，添加产品特有功能
- 这三种场景展示了泛型类继承的灵活性和实用性
- 在实际前端开发中，这种模式常用于创建数据管理层、组件系统或服务层

## keyof 操作符

> 简述：keyof 操作符获取一个类型的所有属性名作为联合类型，结合泛型使用时，可以创建类型安全的属性访问模式，防止运行时由于访问不存在的属性导致的错误。

**知识树**

1. keyof 基础

    - 定义：获取对象类型的所有属性键名
    - 返回类型：字符串字面量类型的联合
    - 语法：`keyof Type`
    - 编译时检查：提供对属性名的静态验证

2. keyof 与泛型结合

    - 语法：`K extends keyof T`
    - 作用：将参数限制为对象的实际属性
    - 应用：类型安全的对象属性访问
    - 错误防护：编译时捕获属性名错误

3. 索引访问类型

    - 定义：使用`T[K]`获取属性的类型
    - 结合 keyof：`T[keyof T]`获取所有可能值的类型
    - 动态类型：属性键决定返回值类型
    - 类型安全：确保属性类型与值类型匹配

4. 高级应用

    - 泛型对象工具函数
    - 类型安全的映射
    - 动态属性访问
    - 属性代理和观察者模式

**代码示例**

1. 基本 keyof 应用

```typescript
// 使用keyof获取对象的属性键
interface User {
  id: number;
  name: string;
  email: string;
}

// keyof User的结果是 "id" | "name" | "email"
type UserKeys = keyof User;

// 类型安全的get函数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// 使用
const user = { id: 1, name: "John", email: "john@example.com" };

// 类型安全的属性访问
const userName = getProperty(user, "name");    // 返回类型: string
const userId = getProperty(user, "id");        // 返回类型: number
// const userAge = getProperty(user, "age");   // 错误: "age"不是"id"|"name"|"email"
```

- 使用 keyof 限制键参数，确保只能访问对象实际存在的属性，编译时就能捕获错误

2. 动态属性查找

```typescript
// 通用存储类使用keyof实现类型安全的查找
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  //T is product
  //keyof T => 'name |'price''
  // 使用keyof实现类型安全的属性查找
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}

// 使用
interface Product {
  id: number;
  name: string;
  price: number;
}

const productStore = new Store<Product>();
productStore.add({ id: 1, name: "Phone", price: 699 });
productStore.add({ id: 2, name: "Laptop", price: 1299 });

// 类型安全的搜索
const phone = productStore.find("name", "Phone");       // 正确: 返回 Product | undefined
const cheap = productStore.find("price", 699);          // 正确: 返回 Product | undefined
// const error = productStore.find("category", "Electronics"); // 错误: "category"不存在于Product
```

- 如果不使用 keyof：`obj[property]`报错：
    - 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "unknown"。
    - 在类型 "unknown" 上找不到具有类型为 "string" 的参数的索引签名。-----索引签名是用来来动态地向对象添加属性的。但在这种情况下，我们不处理动态属性，我们处理的是对象的实际属性
- keyof 作用：
    - 如果我们传递一个不存在的属性，我们会在编译时得到一个错误
    - 传递的属性只能是 T 类型的键或属性之一，可以很好的限制属性
- `find`方法还可以写成：
    ```typescript
    find<K extends keyof T>(property: K, value: T[K]): T | undefined {
    	return this._objects.find(obj => obj[property] === value);
    }
    ```
- 这个例子展示了`keyof`操作符结合泛型的强大功能
- `find`方法使用了泛型参数`K`，它被约束为`keyof T`，意味着它只能是`T`类型的属性名
- 属性值的类型`T[K]`会随着属性名`K`的变化而正确对应
- 当使用`"name"`作为属性名时，编译器知道值的类型必须是`string`
- 当使用`"price"`作为属性名时，编译器知道值的类型必须是`number`
- 尝试使用不存在的属性名会在编译时报错，而不是在运行时崩溃
- 这种模式提供了强大的类型安全保障，尤其适用于处理动态属性的场景

## 类型映射

> 简述：类型映射是一种从现有类型创建新类型的高级技术，使用索引签名和 keyof 遍历并转换原类型的所有属性，可以自动创建只读、可选或其他变体类型。

**知识树**

1. 类型映射基础

    - 定义：基于现有类型变换属性创建新类型
    - 语法：`{ [P in keyof T]: TransformedType }`
    - 遍历：`in`关键字遍历联合类型中的每个成员
    - 工作原理：为源类型的每个属性创建对应的转换属性

2. 属性修饰符

    - 只读：`readonly [P in keyof T]: T[P]`
    - 可选：`[P in keyof T]?: T[P]`
    - 必选：`[P in keyof T]-?: T[P]`
    - 移除只读：`-readonly [P in keyof T]: T[P]`

3. 类型转换

    - 值类型转换：`[P in keyof T]: TransformValue<T[P]>`
    - 联合类型：`[P in keyof T]: T[P] | null`
    - 条件类型：`[P in keyof T]: T[P] extends string ? string[] : T[P]`
    - 递归转换：处理嵌套对象

4. 内置映射类型

    - Partial< T>：所有属性可选
    - Readonly< T>：所有属性只读
    - Required< T>：所有属性必选
    - Record< K, T>：创建带有指定键和值类型的对象类型

**代码示例**

1. 自定义映射类型

```typescript
// 基础接口
interface Product {
  id: number;
  name: string;
  price: number;
}

// 创建只读版本的映射类型
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// 创建可选版本的映射类型
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// 创建可为空版本的映射类型
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// 使用自定义映射类型
type ReadOnlyProduct = ReadOnly<Product>;
type OptionalProduct = Optional<Product>;
type NullableProduct = Nullable<Product>;

// 创建实例
const product: ReadOnlyProduct = {
  id: 1,
  name: "Laptop",
  price: 999
};

// product.price = 899; // 错误：属性是只读的

const partialProduct: OptionalProduct = {
  name: "Phone" // id和price是可选的
};

const nullableProduct: NullableProduct = {
  id: 1,
  name: null, // 可以为null
  price: 599
};
```

**解析**：

- 这个例子展示了如何使用类型映射从现有类型创建新类型
- `ReadOnly<T>`创建一个新类型，其中所有属性都标记为只读
- `Optional<T>`创建一个新类型，其中所有属性都变为可选（添加`?`修饰符）
- `Nullable<T>`创建一个新类型，其中所有属性都可以是原类型或`null`
- 这种方式避免了手动复制和修改原始类型的属性
- 类型映射特别适合在大型前端应用中创建类型变体
- TypeScript 内置了许多实用的映射类型，如`Partial<T>`、`Required<T>`、`Readonly<T>`等

2. 示例

    ```typescript
    interface Product {
    	name: string;
    	price: number;
    }

    type ReadOnlyProduct = {
    	readonly [Property in keyof Product]: Product[Property];
    };

    ```

    - 使用 keyof 操作符来动态获取 Product 类型的属性或键
    - 使用 in 遍历这些键，每次迭代中的 property 将持有这些属性名之一
    - 使用索引签名语法动态添加属性

3. 结合泛型的通用映射类型

```typescript
// 泛型映射类型
type DeepReadOnly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadOnly<T[K]> : T[K];
};

// 复杂对象类型
interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  contacts: {
    email: string;
    phone: string;
  };
}

// 应用递归的只读映射
type ReadOnlyUser = DeepReadOnly<User>;

const user: ReadOnlyUser = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "Boston",
    zipCode: "02101"
  },
  contacts: {
    email: "john@example.com",
    phone: "555-1234"
  }
};

// 以下所有修改尝试都会报错
// user.id = 2;
// user.address.city = "New York";
// user.contacts.email = "new@example.com";
```

- 这个高级示例展示了递归映射类型，可以处理嵌套对象，使所有层级的属性都变为只读

## TypeScript 内置工具类型

> 简述：TypeScript 提供了一系列实用的内置工具类型，使用类型映射和条件类型实现，可以方便地转换现有类型，如创建只读、可选或提取特定属性的类型变体。

**知识树**

1. 属性修饰工具

    - Partial< T>：使所有属性可选
    - Required< T>：使所有属性必需
    - Readonly< T>：使所有属性只读
    - Pick< T, K>：从 T 中选择特定属性 K

2. 联合和交叉工具

    - Exclude< T, U>：从 T 中排除可分配给 U 的类型
    - Extract< T, U>：提取 T 中可分配给 U 的类型
    - Omit< T, K>：从 T 中排除指定属性 K

3. 函数和构造器工具

    - Parameters< T>：获取函数参数类型组成的元组
    - ReturnType< T>：获取函数返回值类型
    - ConstructorParameters< T>：获取构造函数参数类型
    - InstanceType< T>：获取构造函数实例类型

4. 其他工具类型

    - Record<K, T>：创建键类型为 K，值类型为 T 的对象类型
    - NonNullable< T>：从 T 中排除 null 和 undefined
    - ThisType< T>：用于指定 this 上下文类型

**代码示例**

1. 常用工具类型应用

```typescript
// 基础接口
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "regular" | "guest";
}

// Partial - 所有属性变为可选
type PartialUser = Partial<User>;
const userUpdate: PartialUser = {
  name: "John" // 其他属性可省略
};

// Required - 所有属性变为必需
type RequiredUser = Required<User>;
const fullUser: RequiredUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30, // 现在必须提供
  role: "admin"
};

// Readonly - 所有属性变为只读
type ReadonlyUser = Readonly<User>;
const immutableUser: ReadonlyUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  role: "regular"
};
// immutableUser.name = "Bob"; // 错误：只读属性

// Pick - 选择特定属性
type UserCredentials = Pick<User, "email" | "id">;
const credentials: UserCredentials = {
  id: 1,
  email: "john@example.com"
};
```

- 这些内置工具类型大大简化了类型转换任务，无需手动编写映射类型

2. 高级工具类型应用

```typescript
// 基础类型和函数
interface Product {
  id: number;
  name: string;
  category: string;
  price: number | null;
}

function calculateDiscount(price: number, percentage: number): number {
  return price * (1 - percentage / 100);
}

// Record - 创建字典类型
type ProductDictionary = Record<string, Product>;
const productsByCode: ProductDictionary = {
  "A123": { id: 1, name: "Laptop", category: "Electronics", price: 999 },
  "B456": { id: 2, name: "Headphones", category: "Electronics", price: 99 }
};

// Omit - 排除特定属性
type ProductSummary = Omit<Product, "category" | "price">;
const summary: ProductSummary = {
  id: 1,
  name: "Laptop"
};

// NonNullable - 排除null和undefined
type DefinitePrice = NonNullable<Product["price"]>;
// 现在DefinitePrice只是number类型

// Parameters - 获取函数参数类型
type DiscountParams = Parameters<typeof calculateDiscount>;
// 等价于 [price: number, percentage: number]

// ReturnType - 获取函数返回值类型
type DiscountResult = ReturnType<typeof calculateDiscount>;
// 等价于 number
```

- 高级工具类型帮助我们处理更复杂的类型转换，特别是在处理函数类型和类型提取时非常有用

## 疑问与待办

1. **泛型默认值如何设置？**

    - TypeScript 支持为泛型类型参数设置默认值吗？如果支持，如何设置？
    - 例如：`class Container<T = string> { ... }`

2. **泛型递归约束如何实现？**

    - 如何创建引用自身类型的泛型类型？
    - 例如：定义树状结构或嵌套数据结构的类型

3. **条件类型与泛型的结合应用？**

    - 条件类型（`T extends U ? X : Y`）如何与泛型结合使用？
    - 如何创建根据类型条件动态变化的泛型组件？

4. **泛型在 React/Vue 等框架中的最佳实践？**

    - 如何在 React 组件、Hooks 或 Vue 组件中正确使用泛型？
    - 对于状态管理、API 调用等场景，如何设计合适的泛型模式？

**练习题**：

1. 创建一个泛型缓存类（Cache< T>），包含设置、获取和清除缓存的方法，确保类型安全。实现：

    - 方法：`set(key: string, value: T)`、`get(key: string): T | undefined`、`clear(): void`
    - 可选挑战：添加过期时间功能

2. 设计一个泛型表单验证库，包括：

    - 一个`Validator<T>`类，可以验证任何类型的对象
    - 方法支持添加验证规则和验证对象
    - 使用类型映射创建一个类型，表示验证错误（每个字段可能的错误信息）

**术语表 (Glossary)**

- **Generics（泛型）**：允许创建可复用、类型安全的组件的 TypeScript 特性，使用类型参数占位符。
- **Type Parameter（类型参数）**：泛型中用于表示未指定类型的占位符，如`T`、`K`、`V`等。
- **Type Argument（类型实参）**：使用泛型时提供的具体类型，替换类型参数。
- **Type Inference（类型推断）**：TypeScript 自动确定类型参数的实际类型的过程。
- **Generic Constraint（泛型约束）**：使用`extends`关键字限制泛型类型参数必须满足的条件。
- **keyof Operator（keyof 操作符）**：TypeScript 类型操作符，用于获取一个类型的所有属性键的联合类型。
- **Type Mapping（类型映射）**：使用索引签名和 keyof 从现有类型创建新类型的技术。
- **Indexed Access Type（索引访问类型）**：使用`T[K]`形式访问类型的属性类型。
- **Utility Types（实用类型）**：TypeScript 内置的映射类型，如`Partial<T>`、`Readonly<T>`等。
- **Type Alias（类型别名）**：使用`type`关键字创建的类型引用，常用于复杂类型和类型映射。
- **Template Class（模板类）**：C++中与 TypeScript 泛型类对应的概念，是泛型灵感的来源。
- **Type Safety（类型安全）**：确保操作在编译时类型正确，减少运行时错误的特性。

# TypeScript 装饰器

https://www.tslang.cn/docs/handbook/decorators.html Typescript 中文手册

## 1. 简介

> 简述：装饰器是一种特殊类型的声明，可以附加到类声明、方法、访问器、属性或参数上，用于修改或增强类的行为。它们是 JavaScript ES6 之后提案阶段的特性，在 TypeScript 中需要显式启用。

**知识树**

1. **装饰器 (Decorator)**

    - 定义：一种可附加到类及其成员的特殊声明，用于修改或增强其行为。
    - 本质：装饰器本质上是一个函数，在运行时由 JavaScript 引擎调用。
    - 用途：常用于 Angular、Vue 等框架中，例如将普通类转换为特定框架组件。
    - TypeScript 支持：TypeScript 本身不内置装饰器，需要自行创建或使用框架提供的。

2. **启用装饰器**

    - 原因：装饰器是实验性特性，未来标准和实现可能变化。
    - 方法：在 `tsconfig.json` 文件中，将 `experimentalDecorators` 编译选项设置为 `true`。

3. 装饰器常见应用场景

    - 框架集成：Angular 和 Vue 等框架大量使用装饰器
    - 元数据收集：收集类和成员的信息用于后续处理
    - 功能增强：为类添加属性、方法或修改现有实现

4. 装饰器类型

    - 类装饰器：应用于整个类声明
    - 方法装饰器：应用于类的方法
    - 访问器装饰器：应用于 getter/setter
    - 属性装饰器：应用于类的属性
    - 参数装饰器：应用于方法参数

\*\*

## 2. 类装饰器

> 简述：类装饰器 (Class Decorators)在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 类装饰器不能用在声明文件中( `.d.ts`)，也不能用在任何外部上下文中（比如`declare`的类）。

**知识树**

1. **定义类装饰器**
    - 形式：类装饰器表达式会在运行时当作函数被调用
    - 命名约定：通常使用帕斯卡命名法 (PascalCase)。
    - 参数：接收唯一一个参数，即类的构造函数 (`constructor: Function`)。
2. **功能**
    - 修改类：可以在函数内部访问并修改类的原型 (`constructor.prototype`)。
    - 增强类：可以向原型添加新的属性和方法。
    - 调用时机：类装饰器函数在类定义时被 JavaScript 运行时调用一次，而非实例化时。
3. **与继承对比**
    - 相似性：都可以实现向类添加通用功能的目的。
    - 差异：装饰器提供了一种不同的代码组织和复用方式，是工具箱中的另一种选择。
4. **编译后代码**
    - 辅助函数：TypeScript 编译器会生成一个 `__decorate` 辅助函数来处理装饰器的应用逻辑。
    - 调用：在生成的 JavaScript 代码中，`__decorate` 函数会被调用，并将装饰器函数和目标类作为参数传入。

**代码示例**

1. 定义并应用类装饰器

```TypeScript
// 1. 定义装饰器函数
function Component(constructor: Function) {
  console.log('Component decorator called');
  // 2. 修改类的原型，添加新成员
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the DOM');
  };
}

// 3. 应用装饰器
@Component
class ProfileComponent {}

// 4. 验证 (即使不实例化，装饰器也会执行)
// 输出: Component decorator called
```

- 这个 `Component` 装饰器在 `ProfileComponent` 类定义时被调用，并向其原型添加了 `uniqueId` 属性和 `insertInDOM` 方法。

2. 类装饰器的编译结果

```typescript
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		newProperty = "new property";
		hello = "override";
	}
}
@classDecorator
class Greeter {
	property = "property";
	hello: string;
	constructor(m: string) { this.hello = m; }
}
console.log(new Greeter("world"));
```

1. **与第一个例子的核心区别**

    - `@sealed` 装饰器：它接收了 `Greeter` 构造函数，对它和它的原型执行了一些操作 (`Object.seal`)，但**没有返回任何东西**（或者说返回 `undefined`）。当类装饰器不返回值时，它只是对原始类进行某种形式的“原地”修改或观察。
    - `@classDecorator` 装饰器：它接收了 `Greeter` 构造函数，但它**返回了一个全新的类** (`return class extends constructor { ... }`)。

- **关键规则：** 正如文档所说：“**如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。**”

2. **代码逐步解释**

    - **`@classDecorator` 应用到 `Greeter`**：
        - 执行 `classDecorator(Greeter)`。
        - `classDecorator` 函数内部创建并返回了一个新的、匿名的类。我们暂时叫它 `NewGreeter`。
        - 这个 `NewGreeter` 通过 `extends Greeter` 继承了原始的 `Greeter`。
        - `NewGreeter` 还添加了自己的属性 `newProperty = "new property"` 和 `hello = "override"`。
    - **类的替换**：
        - 因为 `classDecorator` 返回了一个值 (`NewGreeter` 类)，所以 TypeScript (和编译后的 JavaScript) **将 `Greeter` 这个名字（标识符）指向了 `NewGreeter`**。
        - 从这一刻起，代码中所有的 `Greeter` 指的**不再是**你原始定义的那个 `Greeter`，而是那个继承了原始 `Greeter` 并添加了新东西的 `NewGreeter`！
    - **`console.log(new Greeter("world"));`**：
        - 你实际上是在 `new NewGreeter("world")`。
        - 执行 `NewGreeter` 的实例化过程：
            - 调用构造函数。因为 `NewGreeter` 没有自己的 `constructor`，它会调用父类（原始 `Greeter`）的 `constructor`。
            - 原始 `Greeter` 的 `constructor("world")` 执行，设置实例的 `hello` 为 `"world"`。
            - 继承来的 `property` 属性被设置为 `"property"`。
            - **重点**：父类构造函数执行完毕后，子类（`NewGreeter`）的**属性初始化**开始执行。
            - `newProperty = "new property"` 执行，实例获得 `newProperty` 属性。
            - `hello = "override"` 执行，将实例的 `hello` 属性从 `"world"` **覆盖**成了 `"override"`。
        - 最终，`console.log` 打印出的实例是 `NewGreeter` 的实例，它包含了继承来的 `property`，被覆盖的 `hello`，以及新增的 `newProperty`。

3. **你可能缺少的前置知识**

    这个例子融合了几个 JavaScript/TypeScript 的核心概念，如果对它们不够熟悉，确实会感到困惑：

    - **类继承 (`extends`)**: 理解子类如何继承父类的属性和方法，以及 `super()` 的调用（虽然这里是隐式的）。
    - **类表达式 (Class Expressions)**: 理解 `class { ... }` 可以像函数表达式一样被赋值和返回。装饰器返回的就是一个类表达式。
    - **装饰器的返回值行为**: 明确知道类装饰器返回新构造函数时的“替换”行为是关键。
    - **类字段初始化顺序**: 知道子类的字段初始化 (`hello = "override"`) 发生在父类构造函数 (`constructor`) 执行之后，这解释了为什么 `hello` 最终是 `"override"`。
    - **JavaScript 变量赋值和引用**: 理解 `@classDecorator` 如何导致 `Greeter` 这个“标签”指向了一个新的东西（返回的类）。

    **总结**

    第二个例子展示了类装饰器更强大的能力：**完全替换原始类**。它通过返回一个继承了原始类的新类来实现这一点。当你使用被这种装饰器修饰过的类时，你实际上是在使用那个返回的、经过修改和增强的新类。

## 3. 参数化装饰器

> 简述：参数化装饰器允许在应用装饰器时传递参数，使其更加灵活和可配置。这通过使用装饰器工厂（Decorator Factory）来实现。

**知识树**

1. **装饰器工厂 (Decorator Factory)**
    - 定义：一个外部函数，它接收参数并返回实际的装饰器函数。
    - 目的：允许在应用装饰器时传入配置值。
2. **实现**
    - 外部函数：接收自定义参数（例如配置对象）。
    - 返回值：返回一个符合特定装饰器签名（如类装饰器、方法装饰器等）的函数。
    - 内部函数：实际的装饰器逻辑，可以访问外部函数传入的参数。
3. **应用**
    - 语法：`@DecoratorFactory(arg1, arg2, ...)`
    - 示例：传递配置对象，如 Angular 中的 `@Component({ selector: 'app-root', ... })`。

**代码示例**

1. 简单参数化装饰器

    ```typescript
    // 参数化装饰器工厂 - 接收一个数字参数
    function component(value: number) {
      // 返回真正的装饰器函数
      return function(constructor: Function) {
        console.log("Component decorator called");
        constructor.prototype.options = value;
      };
    }

    // 使用参数化装饰器
    @component(100)
    class ProfileComponent {
      // 类的实现
    }
    ```

    - 装饰器工厂接收参数并返回配置好的装饰器函数

2. 定义并使用参数化类装饰器

```TypeScript
// 1. 定义配置类型 (可选但推荐)
type ComponentOptions = {
  selector: string;
};

// 2. 定义装饰器工厂
function Component(options: ComponentOptions) {
  // 3. 返回实际的装饰器函数
  return (constructor: Function) => {
    console.log('Component decorator called with options:', options);
    constructor.prototype.options = options; // 使用传入的参数
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log(`Inserting ${options.selector} in the DOM`);
    };
  };
}

// 4. 应用参数化装饰器
@Component({ selector: '#my-profile' })
class ProfileComponent {}

// 验证
// 输出: Component decorator called with options: { selector: '#my-profile' }
const profile = new ProfileComponent();
// @ts-ignore // 忽略TS类型检查，因为 options 是动态添加的
console.log(profile.options); // 输出: { selector: '#my-profile' }
```

- `Component` 现在是一个装饰器工厂，接收一个 `options` 对象。它返回的内部函数才是真正的类装饰器，该函数可以访问并使用 `options`。

## 4. 应用多个装饰器

> 简述：可以为一个目标（类、方法等）应用多个装饰器。它们的执行顺序遵循特定的规则，类似于数学中的函数组合。

**知识树**

1. **应用方式**
    - 语法：将多个装饰器依次写在目标声明之前。
    - 示例：
        ```TypeScript
        @Pipe
        @Component({ selector: '#my-profile' })
        class ProfileComponent {}
        ```
2. **执行顺序**
    - 规则：装饰器函数（或装饰器工厂返回的函数）的执行顺序与书写顺序**相反**。
        1. 由上至下依次对装饰器表达式求值。
        2. 求值的结果会被当作函数，由下至上依次调用。
    - 原理：类似于函数组合 `f(g(x))`，首先执行最内层（离目标最近）的 `g(x)`，其结果再传递给外层的 `f`。
    - 示例：对于上面的 `ProfileComponent`，`Pipe` 装饰器会先执行，然后 `Component` 装饰器（由工厂返回的那个）会执行。

**代码示例**

1. 定义并应用多个类装饰器

```TypeScript
// (假设 Component 装饰器工厂已定义如上节)

// 1. 定义另一个简单的装饰器
function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = () => {
    console.log('Piping data...');
  };
}

// 2. 应用多个装饰器
@Pipe // 先写，后执行
@Component({ selector: '#my-profile' }) // 后写，先执行 (工厂调用先，返回的装饰器后)
class ProfileComponent {}

// 验证执行顺序
// 输出:
// Pipe decorator called
// Component decorator called with options: { selector: '#my-profile' }
```

- 可以看到，尽管 `@Pipe` 写在 `@Component` 上面，但 `Pipe` 函数的日志后打印，说明 `@Component` 工厂返回的装饰器函数先执行，然后才是 `Pipe` 函数。\_（注意：字幕原文解释为 Pipe 先执行，这与通常的函数组合 f(g(x)) -> g 先执行的理解略有出入，但实际打印结果支持 Pipe 后执行。重点是理解其类似函数组合且执行顺序与书写顺序相反）。更准确地说，装饰器工厂本身按书写顺序执行，但它们返回的装饰器函数按相反顺序执行。

2. 多个装饰器执行顺序

    ```typescript
    function f() {
    	console.log("f(): evaluated");
    	return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    		console.log("f(): called");
    	}
    }
    function g() {
    	console.log("g(): evaluated");
    	return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    		console.log("g(): called");
    	}
    }
    class C {
    	@f()
    	@g()
    	method() {}
    }
    //控制台打印结果
    //f(): evaluated
    //g(): evaluated
    //g(): called
    //f(): called

    ```

    1. 由上至下依次对装饰器表达式求值。
    2. 求值的结果会被当作函数，由下至上依次调用。

## 5. 方法装饰器

> 简述：方法装饰器 (Method Decorators)应用于类的方法定义，允许观察、修改或替换方法定义。它在类定义被注册时执行。

**知识树**

1. **定义方法装饰器**

    - 形式：方法装饰器表达式会在运行时当作函数被调用
    - 参数：传入下列 3 个参数：
        1. `target`: 对于静态成员是类的构造函数，对于实例成员是类的原型 (`any`)。
        2. `methodName`: 方法的名称 (`string`)。
        3. `descriptor`: 方法的属性描述符 (`PropertyDescriptor`)。
    - 返回值：如果方法装饰器返回一个值，它会被用作方法的*属性描述符*。

2. **属性描述符 (PropertyDescriptor)**

    - 关键属性：`value` 属性通常包含原始的方法函数。
    - 其他属性：`writable`, `enumerable`, `configurable`。

3. **功能**

    - 观察：读取 `target`, `methodName` 和 `descriptor`。
    - 替换方法：直接修改 `descriptor.value` 为一个新的函数。
    - 增强方法：
        - 保存原始方法：`const original = descriptor.value;`
        - 修改 `descriptor.value` 为一个新函数。
        - 在新函数中：执行前置逻辑、调用原始方法 (`original.call(this, ...args)` 或 `original.apply(this, args)`)、执行后置逻辑。

4. **注意事项**

    - `this` 关键字：在重定义方法时，应使用 `function` 表达式而非箭头函数，以确保 `this` 指向正确的实例。箭头函数会捕获其定义时的 `this`。
    - 参数处理：使用 `...args` (Rest Parameters) 接收任意数量的参数，并使用 `...args` (Spread Syntax) 将它们传递给原始方法，以保持灵活性。
    - `noUnusedParameters`：如果装饰器函数参数 (`target`, `methodName`) 未被使用，可能需要暂时禁用 `tsconfig.json` 中的 `noUnusedParameters` 选项。

**代码示例**

1. 定义并应用方法装饰器以增强方法

```TypeScript
  // 1. 定义方法装饰器
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function; // 获取原始方法

  // 2. 修改 descriptor.value 为新函数
  descriptor.value = function (...args: any) { // 使用 function 表达式和 rest parameters
    console.log('Before calling', methodName);
  // 3. 调用原始方法，并传递参数
    const result = original.call(this, ...args); // 使用 apply 或 call// 使用 apply 或 call
    console.log('After calling', methodName);
    return result; // 返回原始结果
  };
}

class Person {
  @Log // 4. 应用装饰器
  say(message: string) {
    console.log('Person says: ' + message);
  }
}

const person = new Person();
person.say('Hello');

// 输出:
// Before calling say
// Person says: Hello
// After calling say
```

- `Log` 装饰器包裹了 `say` 方法，在原始方法调用前后添加了日志输出。

## 6. 访问器装饰器

> 简述：*访问器装饰器 (Accessor Decorators)*声明在一个访问器的声明之前（紧靠着访问器声明）。 访问器装饰器应用于访问器的  *属性描述符*并且可以用来监视，修改或替换一个访问器的定义。 访问器装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如  `declare`的类）里。

> 注意   TypeScript 不允许同时装饰一个成员的`get`和`set`访问器。取而代之的是，一个成员的所有装饰的必须应用在文档顺序的第一个访问器上。这是因为，在装饰器应用于一个*属性描述符*时，它联合了`get`和`set`访问器，而不是分开声明的。

**知识树**

1. **定义访问器装饰器**
    - 形式：一个函数。
    - 参数：与方法装饰器相同：
        1. `target`: 对于静态成员是类的构造 函数，对于实例成员是类的原型 (`any`)。
        2. `propertyKey` (或 `methodName`): 访问器的名称 (`string`)。
        3. `descriptor`: 访问器的属性描述符 (`PropertyDescriptor`)。
2. **属性描述符 (PropertyDescriptor)**
    - 关键属性：对于 getter 是 `get`，对于 setter 是 `set`。这些属性包含原始的 getter/setter 函数。
    - 注意：访问器没有 `value` 属性。
3. **功能 (以 Getter 为例)**
    - 观察：读取参数。
    - 替换/增强 Getter：
        - 保存原始 Getter：`const original = descriptor.get;`
        - 修改 `descriptor.get` 为一个新的函数 (必须是 `function` 表达式，不能有参数)。
        - 在新函数中：调用原始 Getter (`original?.call(this)`)，处理返回值，然后返回处理后的值。
4. **注意事项**
    - `this` 关键字：与方法装饰器类似，重定义 getter/setter 时使用 `function` 表达式。
    - `original?.call(this)`：使用可选链 (`?.`) 或非空断言 (`!.`) 调用原始 getter/setter，因为 `descriptor.get` 或 `descriptor.set` 的类型可能包含 `undefined`。
    - 类型检查：在处理返回值时，进行类型检查（如 `typeof result === 'string'`）以确保健壮性。

**代码示例**

1. 定义并应用 Getter 装饰器以转换输出

    ```TypeScript
    // 1. 定义访问器装饰器
    function Capitalize(target: any, propertyName: string, descriptor: PropertyDescriptor) {
      const originalGetter = descriptor.get; // 获取原始 getter

    	// 2. 修改 descriptor.get
    	descriptor.get = function () { // 使用 function 表达式
    	  // 3. 调用原始 getter
    	  const result = originalGetter!.call(this);

    	  // 4. 处理并返回结果
    	  return typeof result === "string" ? result.toUpperCase() : result;
    	};
    }

    class Person {
      constructor(public firstName: string, public lastName: string) {}

      @Capitalize // 5. 应用装饰器到 getter
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }

    const person = new Person('john', 'doe');
    console.log(person.fullName); // 输出: JOHN DOE

    const person2 = new Person('jane', 'smith');
    // @ts-ignore // 假设 fullName 可能返回非字符串
    person2.fullName = 123; // getter 不会被直接赋值影响，这里仅为演示
    // @ts-ignore
    console.log(person2.fullName); // 输出: JANE SMITH (因为原始 getter 返回 string)
    ```

- `Capitalize` 装饰器修改了 `fullName` getter，使其返回的字符串值始终为大写。

## 7. 属性装饰器

> 简述：属性装饰器 (Property Decorators)应用于类的属性声明。它主要用于记录关于属性的元数据，但也可以通过巧妙使用 `Object.defineProperty` 来修改属性的行为（例如添加验证）。

**知识树**

1. **定义属性装饰器**
    - 形式：一个函数（或返回函数的工厂）。
    - 参数：接收两个参数：
        1. `target`: 对于静态成员是类的构造函数，对于实例成员是类的原型对象 (`any`)。
        2. `propertyName`: 属性的名称 (`string`)。
    - 注意：没有第三个参数 `descriptor`。
2. **功能局限**
    - 直接修改：属性装饰器本身不能直接修改属性的初始化方式或值，因为它在属性描述符应用之前执行。
    - 主要用途：记录元数据（反射元数据 API 常与此结合）。
3. **通过 `Object.defineProperty` 增强 (高级)**
    - 思路：在属性装饰器函数内部，可以使用 `Object.defineProperty` 来重新定义该属性，为其添加自定义的 `get` 和 `set` 访问器。
    - 实现：
        - 定义一个内部变量来存储实际的属性值。
        - 在 `set` 访问器中：执行验证逻辑，如果有效，则更新内部变量。
        - 在 `get` 访问器中：返回内部变量的值。
    - 参数化：通常需要结合装饰器工厂来传递配置（如最小长度）。
4. 技巧
    - 在`descriptor`这个对象中，如果你按下 `control` + `space` ，我们可以看到描述符对象的所有属性和方法

**代码示例**

1. 定义并应用参数化的属性装饰器以添加长度验证

    ```TypeScript
    // 1. 定义属性装饰器工厂
    function MinLength(length: number) {
      // 2. 返回实际的属性装饰器函数
      return (target: any, propertyName: string) => {
        let value: string; // 内部变量存储实际值

        // 3. 定义新的属性描述符
        const descriptor: PropertyDescriptor = {
          get() {
            return value;
          },
          set(newValue: string) {
            // 4. 在 setter 中添加验证逻辑
            if (newValue.length < length) {
              throw new Error(`${propertyName} should be at least ${length} characters long.`);
            }
            value = newValue; // 验证通过，存储值
          },
          enumerable: true,
          configurable: true,
        };

        // 5. 使用 Object.defineProperty 重新定义属性
        Object.defineProperty(target, propertyName, descriptor);
      };
    }

    class User {
      @MinLength(4) // 6. 应用装饰器
      password!: string; // 使用 ! 避免初始化检查，因为 setter 会处理

      constructor(password: string) {
        this.password = password; // 调用 setter
      }
    }

    const user1 = new User('12345'); // OK
    console.log(user1.password); // 输出: 12345

    try {
      const user2 = new User('123'); // Error
    } catch (e: any) {
      console.error(e.message); // 输出: password should be at least 4 characters long.
    }

    user1.password = 'abc'; // Error
    // 输出: password should be at least 4 characters long.
    ```

- `MinLength` 装饰器工厂创建了一个属性装饰器，该装饰器使用 `Object.defineProperty` 将 `password` 属性替换为一个带有验证逻辑的访问器属性。

## 8. 参数装饰器

> 简述：参数装饰器 (Parameter Decorators)应用于构造函数或方法的参数声明。它们主要用于记录关于参数的元数据，通常与反射（Reflection）库结合使用。这个较少使用

**知识树**

1. **定义参数装饰器**
    - 形式：一个函数。
    - 参数：接收三个参数：
        1. `target`: 对于静态成员是类的构造函数，对于实例成员是类的原型 (`any`)。
        2. `methodName`: 参数所在的方法的名称 (`string` | `symbol` | `undefined`，如果是构造函数参数则为 `undefined`)。
        3. `parameterIndex`: 参数在方法参数列表中的索引 (`number`)。
2. **功能**
    - 观察：可以读取参数所在的位置（类/原型、方法名、参数索引）。
    - 主要用途：**记录元数据**。参数装饰器不能直接修改参数的值或行为，但可以标记参数，供其他机制（如依赖注入框架、验证库）后续使用。
    - 返回值：参数装饰器的返回值会被忽略。

**代码示例**

1. 定义并应用参数装饰器以记录元数据

    ```TypeScript
    // 用于存储元数据的数组 (通常更复杂的元数据反射系统会用到)
    const watchedParameters: { target: any, methodName: string | symbol | undefined, parameterIndex: number }[] = [];

    // 1. 定义参数装饰器
    function Watch(target: any, methodName: string | symbol | undefined, parameterIndex: number) {
      console.log(`Watching parameter at index ${parameterIndex} of method ${String(methodName)} on target`, target);
      // 2. 记录元数据
      watchedParameters.push({
        target: target,
        methodName: methodName,
        parameterIndex: parameterIndex,
      });
    }

    class Vehicle {
      move(@Watch speed: number) { // 3. 应用装饰器到参数
        console.log(`Moving at speed: ${speed}`);
      }

      constructor(@Watch id: string) { // 也可以用于构造函数参数
         console.log(`Vehicle created with ID: ${id}`);
      }
    }

    // 验证 (装饰器在类定义时执行)
    // 输出:
    // Watching parameter at index 0 of method move on target Vehicle { move: [Function] } (或类似的原型对象)
    // Watching parameter at index 0 of method undefined on target class Vehicle { move() ... constructor()... }

    console.log('Watched Parameters Metadata:', watchedParameters);
    // 输出类似:
    // Watched Parameters Metadata: [
    //   { target: Vehicle.prototype, methodName: 'move', parameterIndex: 0 },
    //   { target: [Function: Vehicle], methodName: undefined, parameterIndex: 0 }
    // ]
    ```

- `Watch` 装饰器在参数被定义时执行，并将参数的位置信息记录到一个全局数组中。

# 模块

## 1.创建与使用

> **简述**：模块是将代码分割成独立、可重用单元的基本方式。通过导出（export）模块内的特定成员（如类、函数、变量）并在其他模块中导入（import），可以有效组织代码、避免命名冲突并提高可维护性。

**知识树**

1. **模块化的动机 (Motivation)**
    - 解决单一文件代码增长后的维护难题。
    - 实现代码的逻辑组织、封装与复用。
2. **模块核心交互 (Core Interaction)**
    - **定义模块 (Defining)**: 每个 `.ts` 文件天然是一个模块。
    - **导出成员 (Exporting)**:
        - 目的：暴露模块的公共接口（类、函数、变量、类型等）。
        - 语法：使用 `export` 关键字。
    - **导入成员 (Importing)**:
        - 目的：在当前模块中使用其他模块暴露的接口。
        - 语法：`import { Member1, Member2, ... } from './relative/path/to/module';`
        - 路径规则：通常使用相对路径；**省略 `.ts` 扩展名**。 (`./` 表示同级, `../` 表示上级)。
        - 重命名导入：`import { OriginalName as NewName } from './module';` (用于解决命名冲突)。
3. **编辑器辅助 (Editor Assistance - VS Code)**
    - **智能感知与修复**:
        - 自动添加 `import` 语句。
        - 通过快捷键 (Cmd+. / Ctrl+.) 快速修复未导入或未使用的声明。
    - **代码重构**:
        - 通过快捷键 (Cmd+. / Ctrl+.) 将代码片段（如类、接口）便捷地“移动到新文件”，会创建一个新的 ts 文件。

**代码示例**

1. 导出模块成员 (`shapes.ts`)

    ```TypeScript
    // shapes.ts
    export class Circle {
      constructor(public radius: number) {}
    }

    export class Square {
      constructor(public side: number) {}
    }

    interface IShapeInfo { // 未导出，模块私有
        area: number;
    }
    ```

2. 导入并使用模块成员 (`index.ts`)

    ```TypeScript
    // index.ts
    import { Circle, Square } from './shapes'; // 标准导入
    // import { Circle as MyCircle } from './shapes'; // 重命名导入示例

    const circle = new Circle(1);
    console.log(circle.radius); // 输出: 1

    // const square = new Square(2); // 若未使用，可移除导入
    ```

## 2. 格式与配置

> **简述**：模块格式定义了 JavaScript 代码如何组织成模块以及模块间如何交互（如导出、导入）。TypeScript 编译器可以将遵循 ES Modules 标准的代码转换为不同的目标模块格式（如 CommonJS, AMD, ESNext），以适应不同的运行环境（如 Node.js、旧版浏览器）。

**知识树**

1. **模块格式概述 (Overview)**
    - **定义**: 模块化代码的组织与交互规范。
    - **历史背景**: JavaScript 早期无内置模块系统，社区发展出多种方案 (如 AMD, UMD, CommonJS)。
2. **主要模块格式 (Key Formats)**
    - **ES Modules (ESM / ES6 Modules)**:
        - 现代 JavaScript **官方标准**。
        - 使用 `import` / `export` 关键字。
        - TypeScript 源码**编写时**采用此标准语法。
        - 现代浏览器和 Node.js 广泛支持。
    - **CommonJS (CJS)**:
        - Node.js **传统**模块系统。
        - 使用 `require()` / `module.exports` 或 `exports`。
        - 是 TypeScript 编译**输出**的常见目标格式之一 (尤其是在旧的 `tsconfig.json` 模板中)。
    - **其他**: AMD, UMD, System 等，用于特定场景或兼容旧环境。
3. **TypeScript 编译与配置 (Compilation & Configuration)**
    - **配置 (`tsconfig.json`)**:
        - `compilerOptions.module` 选项决定编译后 **输出** 的 JavaScript 采用哪种模块格式。
        - 常见值: `"CommonJS"`, `"ESNext"`, `"ES2015"`, `"ES2020"`, `"NodeNext"`, `"AMD"`, `"UMD"` 等。
    - **转换 (Translation)**:
        - TypeScript 编译器将开发者编写的 ESM 语法 (`import`/`export`) **翻译**成 `tsconfig.json` 中指定的模块格式。
    - **开发者体验**:
        - 始终使用标准的 ESM 语法编写 TypeScript 代码。
        - 编译器负责处理不同运行环境的模块兼容性问题。

**代码示例**

1. TypeScript 源码 (使用 ESM 语法)

    ```TypeScript
    // logger.ts
    export function log(message: string) { console.log(message); }

    // main.ts
    import { log } from './logger';
    log('Hello from main!');
    ```

2. 编译输出对比 (`tsconfig.json` 中 `module` 设置不同)

    - **当 `"module": "CommonJS"` 时 (示例输出):**

    ```JavaScript
    // dist/logger.js
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.log = void 0;
    function log(message) { console.log(message); }
    exports.log = log; // 使用 exports

    // dist/main.js
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const logger_1 = require("./logger"); // 使用 require()
    (0, logger_1.log)('Hello from main!');
    ```

    - **当 `"module": "ESNext"` 时 (示例输出，基本保留原样):**

    ```JavaScript
    // dist/logger.js
    export function log(message) { console.log(message); } // 保留 export

    // dist/main.js
    import { log } from './logger'; // 保留 import
    log('Hello from main!');
    ```

## 3. 默认导出

> **简述**：默认导出 (`export default`) 用于从一个模块中导出一个主要的、单一的实体（如一个类、函数或对象）。这使得导入该实体时语法更简洁，因为导入时无需使用花括号 `{}`，且可以任意命名。

**知识树**

1. **核心概念与用途 (Core Concept & Purpose)**
    - **定义**: 每个模块最多允许**一个** `export default`。
    - **目的**: 标记并导出模块的**核心**或**唯一**的公开成员。
    - **优点**:
        - 简化导入语句。
        - 清晰表达模块的主要职责。
2. **语法与导入 (Syntax & Importing)**
    - **导出**: `export default Entity;` (Entity 可以是类、函数、对象、值等)
    - **导入**: `import DesiredName from './module';`
        - `DesiredName` 是导入方自定义的任意有效名称。
        - **无需**使用花括号 `{}`。
3. **与命名导出共存 (Coexistence with Named Exports)**
    - 一个模块可以同时包含 `export default` 和 多个 `export { Member }`。
    - **导入语法**: `import DefaultName, { NamedMember1, NamedMember2 } from './module';`
        - 默认导入名在前，命名导入在花括号内，用逗号隔开。
4. **设计原则: 接口最小化 (Design Principle: Minimal Interface)**
    - **封装**: 通过 `export default` 或 `export` 精心选择需要暴露的接口。
    - **隐藏细节**: 模块内部的辅助类、函数、变量若不导出，则对外部不可见。
    - **降低耦合**: 减少模块间的直接依赖，使得内部实现可以自由重构而不破坏外部使用者。

**代码示例**

1. 使用默认导出和命名导出 (`calculator.ts`)

    ```TypeScript
    // calculator.ts

    // 内部辅助函数 (不导出)
    function validateNumber(n: number) {
      if (typeof n !== 'number') throw new Error('Invalid number');
    }

    // 主要功能类 (默认导出)
    export default class Calculator {
      add(a: number, b: number): number {
        validateNumber(a);
        validateNumber(b);
        return a + b;
      }
    }

    // 附加的常量或类型 (命名导出)
    export const VERSION = '1.0';
    export type Operation = '+' | '-';
    ```

2. 导入并使用 (`main.ts`)

    ```TypeScript
    // main.ts
    import Calc, { VERSION, Operation } from './calculator'; // Calc 是自定义名称

    const myCalc = new Calc();
    console.log(`Using Calculator v${VERSION}`); // 使用命名导出
    console.log('Result:', myCalc.add(5, 3));   // 使用默认导出

    const op: Operation = '+'; // 使用命名导出的类型
    console.log('Operation:', op);
    ```

## 4. 通配符导入

> **简述**： (Wildcard Imports)通配符导入 (`import * as name`) 允许将一个模块中所有**命名导出**的成员作为一个对象（命名空间）整体导入。这有助于组织代码，特别是在需要从单个模块引入大量成员时，可以明确它们的来源。

**知识树**

1. **核心概念与语法 (Core Concept & Syntax)**
    - **目的**: 将目标模块的所有**命名导出**聚合到一个单 独的对象中。
    - **语法**: `import * as Namespace from './module';`
        - `*`: 代表所有命名导出。
        - `Namespace`: 自定义的命名空间对象名称。
2. **访问导入成员 (Accessing Members)**
    - 通过 `Namespace.MemberName` 的形式访问原模块导出的成员。
3. **适用场景 (Use Cases)**
    - 当需要从一个模块导入大量命名成员时。
    - 当需要明确区分导入成员的来源，避免潜在的命名冲突时。
4. **与默认导出的关系 (Relation to Default Export)**
    - 通配符导入主要捕获**命名导出**。
    - 如果原模块**同时**有默认导出，该默认导出会作为命名空间对象的一个名为 `default` 的属性存在。
        - 例如: `Namespace.default` 指向原模块的 `export default` 实体。

**代码示例**

1.  导出多个命名成员(`shapes.ts`)

    ```TypeScript
    // shapes.ts
    export class Circle {
      constructor(public radius: number) {}
      getArea() { return Math.PI * this.radius * this.radius; }
    }

    export class Square {
      constructor(public side: number) {}
      getArea() { return this.side * this.side; }
    }

    export const PI = Math.PI;

    // 假设还有一个默认导出（虽然通配符主要针对命名导出）
    // export default function logShape() { console.log("Logging shape..."); }
    ```

2.  使用通配符导入 (`index.ts`)

        ```TypeScript
        // main.ts

    // index.ts

        // 将 shapes.ts 中所有命名导出的成员导入到 Shapes 对象中
        import * as Shapes from './shapes';

        // 通过 Shapes 命名空间访问成员
        const circle = new Shapes.Circle(2);
        const square = new Shapes.Square(3);

        console.log('Circle Area:', circle.getArea());
        console.log('Square Area:', square.getArea());
        console.log('PI value:', Shapes.PI);

        // 如果 shapes.ts 有默认导出，可以通过 Shapes.default 访问
        // Shapes.default(); // 调用默认导出的 logShape 函数 (如果存在)
        ```

## 5. 模块重导出

> **简述**：模块重导出 (Re-exporting)是一种模块组织技巧，允许创建一个“聚合”或“桶”（barrel）模块，该模块本身不编写新的代码，而是将其他多个模块的导出成员集中起来再次导出。这可以简化外部模块的导入语句。本节主要关注重导出的准备工作：代码组织和拆分。

**知识树**

1. **动机**
    - 当项目变大，相关功能被拆分到多个小模块中（例如 `shapes` 文件夹下的 `circle.ts`, `square.ts` 等）。
    - 直接从多个分散的文件中导入成员会导致 `import` 语句冗长且分散。
    - 示例：`import { Circle } from './shapes/circle'; import { Square } from './shapes/square';`
2. **组织结构**
    - 将功能相关的模块文件组织到同一个文件夹（包）中。
    - 示例：创建一个 `shapes` 文件夹，并将 `circle.ts` 和 `square.ts` 放入其中。
3. **模块拆分**
    - 将原本可能在一个大文件中的类、接口等拆分到各自独立的文件中。
    - 目的：提高模块的单一职责和可维护性。
    - 示例：将 `shapes.ts` 中定义的 `Circle` 和 `Square` 类分别移动到 `shapes/circle.ts` 和 `shapes/square.ts` 文件中，并在各自文件中导出。

**代码示例**

1. 拆分前的状态 (`shapes.ts`)

    ```TypeScript
    // shapes.ts (拆分前)
    export class Circle { constructor(public radius: number) {} }
    export class Square { constructor(public side: number) {} }
    ```

2. 创建文件夹并拆分模块
    - 创建文件夹 `src/shapes/`
    - 创建 `src/shapes/circle.ts`:
        ```TypeScript
        // src/shapes/circle.ts
        export class Circle {
          constructor(public radius: number) {}
        }
        ```
    - 创建 `src/shapes/square.ts`:
        ```TypeScript
        // src/shapes/square.ts
        export class Square {
          constructor(public side: number) {}
        }
        ```
    - 删除或清空旧的 `src/shapes.ts` (如果存在)。
3. 拆分后直接导入的问题 (`index.ts`)

    ```TypeScript
    // index.ts (拆分后，未使用重导出)

    // 需要从多个具体文件中导入，比较繁琐
    import { Circle } from './shapes/circle';
    import { Square } from './shapes/square';

    const c = new Circle(1);
    const s = new Square(2);

    console.log(c, s);
    ```

- 这个阶段展示了代码结构的变化，为下一节介绍如何使用重导出解决导入繁琐的问题奠定了基础。

## 6. 模块重导出 2

> **简述**：通过在特定文件（通常是文件夹下的 `index.ts`，称为“桶”或“barrel”文件）中重新导出其他模块的成员，可以创建一个单一的导入源，从而简化其他模块导入这些成员的方式，使得导入路径更短、更集中。

**知识树**

1. **Barrel 文件 (`index.ts`)**
    - 目的：作为文件夹（包）的入口点，集中导出该文件夹内其他模块的公共成员。
    - 命名约定：通常命名为 `index.ts`。
    - 位置：放置在包含多个子模块的文件夹根目录下（如 `shapes/index.ts`）。
2. **重导出语法**

    - **方式一：导入再导出**

        ```TypeScript
        // shapes/index.ts
        import { Circle } from './circle';
        import { Square } from './square';

        export { Circle, Square };
        ```

    - **方式二：直接重导出（更简洁）**
        ```TypeScript
        // shapes/index.ts
        export { Circle } from './circle'; // 从 './circle' 导入 Circle 并立即导出
        export { Square } from './square'; // 从 './square' 导入 Square 并立即导出
        // 也可以合并: export { Circle, Square } from './some_common_module';
        // 甚至导出所有: export * from './another_module'; (导出另一个模块的所有命名导出)
        ```

3. **简化导入**
    - 创建 Barrel 文件后，其他模块只需从该文件夹导入即可，无需指定具体子模块文件。
    - 示例：`import { Circle, Square } from './shapes';` (不再需要 `./shapes/circle` 或 `./shapes/square`)
4. **模块解析配置 (`tsconfig.json`)**
    - `compilerOptions.moduleResolution` 选项：控制 TypeScript 如何查找模块。
        - `"classic"` (旧版默认)：可能无法正确解析文件夹导入（如 `import ... from './shapes'`)。
        - `"node"` (推荐)：模拟 Node.js 的模块解析策略，能够识别文件夹下的 `index.ts` 文件作为模块入口。
    - **建议**：**将 `moduleResolution` 设置为 `"node"`**（或 `"nodenext"`, `"bundler"` 等现代选项）以支持文件夹导入。
5. **优点**
    - 简化外部模块的 `import` 语句。
    - 更好地封装内部模块结构，外部使用者只需关心文件夹（包）提供的接口。
    - 便于维护和重构，文件夹内部文件移动或重命名对外部导入影响较小（只要 `index.ts` 更新即可）。

**代码示例**

1. 创建 Barrel 文件 (`shapes/index.ts`) 使用简洁语法

    ```TypeScript
    // src/shapes/index.ts

    // 直接从子模块导入并导出
    export { Circle } from './circle';
    export { Square } from './square';

    // 如果 circle.ts 和 square.ts 还有其他导出，也可以一起导出
    // export { Circle, CircleHelper } from './circle';
    // export * from './utils'; // 导出 utils.ts 中的所有命名导出
    ```

2. 从 Barrel 文件导入 (`index.ts`)

    ```TypeScript
    // index.ts (位于 src 目录)

    // 导入语句变得简洁，只需指向 shapes 文件夹
    import { Circle, Square } from './shapes';
    // TypeScript (配合 moduleResolution: "node") 会自动查找 ./shapes/index.ts

    const circle = new Circle(10);
    const square = new Square(20);

    console.log('Imported via barrel file:', circle, square);
    ```

3. `tsconfig.json` 配置示例
    ```JSON
    // tsconfig.json
    {
      "compilerOptions": {
        "module": "ESNext", // 或 CommonJS, etc.
        "target": "ES2016",
        "moduleResolution": "node", // 或 nodenext, bundler - 重要！
        "outDir": "./dist",
        "strict": true,
        // ... other options
      }
    }
    ```

# TS in Js

## 1. 简介

> **简述：** 允许在同一个项目中使用 TypeScript 和 JavaScript 代码，这对于逐步迁移现有 JavaScript 项目或利用 JavaScript 生态系统中的库非常有用。本节概述了实现这种混合编码环境的关键技术。

**知识树**

1. **目标：** 在 TypeScript 项目中无缝集成和使用 JavaScript 代码。
2. **核心技术：**
    - 包含并编译 JavaScript 文件。
    - 为 JavaScript 代码添加类型检查。
    - 利用 JSDoc 注释提供类型信息。
    - 使用声明文件 (`.d.ts`) 定义类型。
    - 处理来自 DefinitelyTyped 的第三方库类型定义。

## 2. allowJs 配置

> **简述：** TypeScript 编译器默认不处理 `.js` 文件。通过在 `tsconfig.json` 文件中启用 `allowJs` 选项，可以告知编译器在编译过程中包含并处理项目中的 JavaScript 文件。同时，需要配置正确的模块系统（如 `CommonJS`）以确保代码在 Node.js 等环境中正常运行。

**知识树**

1. **`allowJs` 编译器选项：**
    - 作用：允许 TypeScript 编译器识别、包含并编译项目源目录下的 JavaScript 文件 (`.js`)。
    - 配置位置：`tsconfig.json` 文件中的 `compilerOptions` 部分。
2. **模块系统 (`module`) 配置：**
    - 问题：默认的 `ES2015` 或更高版本的模块系统可能与 Node.js 环境（尤其是在未使用 ES Module 模式时）不兼容，导致 `import` 语句错误。
    - 解决方案：将 `tsconfig.json` 中的 `module` 选项设置为 `"CommonJS"`，使其生成 Node.js 兼容的模块代码。
    - 配置位置：`tsconfig.json` 文件中的 `compilerOptions` 部分。
3. **集成流程：**
    - 在 TypeScript 项目中创建或引入 `.js` 文件。
    - 在 `tsconfig.json` 中设置 `allowJs: true`。
    - 根据运行环境（如 Node.js）调整 `tsconfig.json` 中的 `module` 设置（例如 `"CommonJS"`）。
    - 在 TypeScript 文件 (`.ts`) 中导入 JavaScript 模块。

**代码示例**

1. `tsconfig.json` 配置示例：

    ```JSON
    {
      "compilerOptions": {
        // ... 其他选项
        "allowJs": true,     // 允许编译 JavaScript 文件
        "module": "CommonJS", // 设置模块系统为 CommonJS (适用于 Node.js)
        "outDir": "./dist",  // 指定输出目录
        "rootDir": "./src", // 指定源文件根目录
        // ... 其他选项
      },
      "include": ["src/**/*"] // 确保 src 目录下的所有文件都被包含
    }
    ```

2. 在 TypeScript 文件中导入 JavaScript 模块：

    ```TypeScript
    // index.ts
    import { calculateTax } from './tax'; // 导入 tax.js 中的函数

    const income = 100000;
    const tax = calculateTax(income);
    console.log(`Tax for income ${income} is ${tax}`);
    ```

3. 简单的 JavaScript 模块示例：

    ```JavaScript
    // src/tax.js
    function calculateTax(income) {
      // 这是一个没有类型检查的 JS 函数
      return income * 0.15;
    }

    export { calculateTax };
    ```

---

## 3. checkJs 配置

> **简述：** 通过在 `tsconfig.json` 中启用 `checkJs` 选项，可以让 TypeScript 编译器对项目中的 `.js` 文件进行基本的类型检查。这有助于发现一些潜在的类型错误，例如函数参数隐式具有 `any` 类型。如果需要暂时忽略某个文件的检查，可以使用 `// @ts-nocheck` 注释。

**知识树**

1. **`checkJs` 编译器选项：**
    - 作用：指示 TypeScript 编译器分析和报告 `.js` 文件中的类型错误。
    - 效果：进行基础类型检查，如检测隐式的 `any` 类型、错误的函数调用等。检查程度不如 `.ts` 文件严格，但优于完全不检查。
    - 配置位置：`tsconfig.json` 文件中的 `compilerOptions` 部分，通常与 `allowJs: true` 配合使用。
2. **隐式 `any` 类型问题：**
    - 场景：当启用 `checkJs` 时，如果 JavaScript 函数的参数没有明确的类型信息（通过 JSDoc 或声明文件），编译器可能会报告“参数隐式具有 'any' 类型”的错误（尤其是在 `noImplicitAny` 选项也启用的情况下）。
3. **`// @ts-nocheck` 注释：**
    - 作用：在特定 `.js` 文件的顶部添加此注释，可以告诉 TypeScript 编译器完全跳过对该文件的类型检查。
    - 用途：适用于暂时无法修复所有类型错误、或包含已知无法通过检查的旧代码或第三方代码的文件。
4. **局限性：**
    - 即使启用了 `checkJs`，如果函数参数类型未定义（隐式为 `any`），调用时传入 `undefined`（例如未传参数）可能不会报错，因为 `any` 类型可以接受 `undefined`。这需要更明确的类型定义来解决。

**代码示例**

1. `tsconfig.json` 配置示例：

    ```JSON
    {
      "compilerOptions": {
        // ...
        "allowJs": true,
        "checkJs": true, // 对 .js 文件启用类型检查
        "noImplicitAny": true, // (可选但推荐) 不允许隐式的 any 类型
        // ...
      }
    }
    ```

2. 使用 `// @ts-nocheck` 忽略检查：

    ```JavaScript
    // src/legacy-code.js
    // @ts-nocheck  <-- 添加此行来忽略整个文件的检查

    function oldUntypedFunction(value) {
      // 这个文件包含许多类型问题，暂时不修复
      console.log(value.toUpperCase()); // 如果 value 不是字符串会报错，但 TS 不会检查
    }

    export { oldUntypedFunction };
    ```

3. `checkJs` 发现的错误示例（编译时）：

    ```
    src/tax.js:1:24 - error TS7006: Parameter 'income' implicitly has an 'any' type.

    1 function calculateTax(income) {
                             ~~~~~~
    ```

---

## 4. JSDoc 注释块

> **简述：** JSDoc 是一种使用特殊注释格式为 JavaScript 代码添加文档和类型注解的标准方法。TypeScript 编译器能够识别 JSDoc 注释，从而在启用了 `checkJs` 的情况下，为 JavaScript 代码提供更丰富的类型检查和智能提示。

**知识树**

1. **JSDoc 注释块：**
    - 语法：以 `/**` 开始，以 `*/` 结束。
    - 位置：通常放在函数、变量、类等声明之前。
2. **常用 JSDoc 标签：**
    - `@param {<type>} <name> [description]`：描述函数参数的类型、名称和可选说明。`<type>` 需要用花括号 `{}` 包裹。
    - `@returns {<type>} [description]`：描述函数的返回值类型和可选说明。
    - `@type {<type>}`：为变量或属性指定类型。
    - 描述性文本：可以直接在标签之外或 `@description` 标签后添加更详细的说明。
3. **与 TypeScript 集成：**
    - 前提：`tsconfig.json` 中需要启用 `allowJs: true` 和 `checkJs: true`。
    - 效果：TypeScript 编译器会解析 JSDoc 中的类型信息，进行类型检查。例如，如果 `@param` 指定了类型，调用函数时传入不匹配的类型会报错。IDE（如 VS Code）也能提供基于 JSDoc 的智能提示和文档预览。
4. **优点：**
    - 无需更改 JavaScript 代码本身（只添加注释）。
    - 提供文档和类型信息。
    - 增强了在混合项目中使用 JavaScript 代码的安全性。

**代码示例**

1. 使用 JSDoc 注释的 JavaScript 函数：

    ```JavaScript
    // src/tax.js

    /**
     - Calculates the income tax based on the net salary.
     - @param {number} income - The net salary after expenses. Must be a non-negative number.
     - @returns {number} The calculated income tax. Returns 0 if income is negative.
     */
    function calculateTax(income) {
      if (income < 0) {
        return 0;
      }
      return income * 0.15;
    }

    export { calculateTax };
    ```

2. 在 TypeScript 文件中使用带有 JSDoc 的 JS 函数：

    ```TypeScript
    // index.ts
    import { calculateTax } from './tax';

    // 正确调用
    const tax1 = calculateTax(100000);
    console.log(tax1); // 输出 15000

    // 错误调用 (如果 checkJs 开启，会引发编译错误)
    // const tax2 = calculateTax("invalid input"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

    // 鼠标悬停在 calculateTax 上时，IDE 会显示 JSDoc 信息
    ```

---

## 5. 声明文件 (`.d.ts`)

> **简述：** 声明文件（扩展名为 `.d.ts`）是另一种为 JavaScript 代码提供类型信息的方式，特别适用于不想修改原始 JavaScript 文件（例如第三方库或旧代码）或希望将类型定义与实现分离的情况。它只包含类型声明，不包含具体实现。

**知识树**

1. **声明文件 (`.d.ts`)：**
    - 目的：描述 JavaScript 模块、变量、函数、类等的类型签名（形状）。
    - 命名约定：通常与对应的 JavaScript 文件同名，但扩展名为 `.d.ts`（例如，`tax.js` 对应的声明文件是 `tax.d.ts`）。
    - 内容：只包含类型声明，不包含函数体、变量初始值等实现细节。使用 TypeScript 语法进行声明。
    - 关键字：通常使用 `declare` 关键字来指明这是一个环境声明（ambient declaration），表示其实现存在于别处（对应的 `.js` 文件）。
2. **创建和使用流程：**
    - 为你的 `.js` 文件（例如 `tax.js`）在相同目录下或指定的类型根目录（`typeRoots`）下创建一个同名的 `.d.ts` 文件（`tax.d.ts`）。
    - 在 `.d.ts` 文件中，使用 `declare` 关键字声明 `.js` 文件中导出的变量、函数、类等，并明确它们的类型。
    - 如果 `.js` 文件导出了内容，确保在 `.d.ts` 文件中也使用 `export` 关键字导出相应的声明。
    - TypeScript 编译器会自动查找并使用这些 `.d.ts` 文件来对相应的 JavaScript 代码进行类型检查。
3. **注意事项：**
    - 声明文件必须准确、完整地描述对应 JavaScript 模块导出的所有 API。任何未在 `.d.ts` 文件中声明的导出成员，在 TypeScript 代码中将是不可见的或类型为 `any`。
    - 不需要启用 `checkJs` 选项，因为 TypeScript 主要依赖 `.d.ts` 文件进行类型检查。但仍需启用 `allowJs` 来包含 JS 文件本身。

**代码示例**

1. JavaScript 文件 (`src/tax.js`)：

    ```JavaScript
    // src/tax.js
    function calculateTax(income) {
      return income * 0.15;
    }

    function sayHello(name) {
      console.log(`Hello, ${name}`);
    }

    // 导出了两个函数
    export { calculateTax, sayHello };
    ```

2. 对应的声明文件 (`src/tax.d.ts`)：

    ```TypeScript
    // src/tax.d.ts

    // 声明 calculateTax 函数
    export declare function calculateTax(income: number): number;

    // 声明 sayHello 函数
    export declare function sayHello(name: string): void;

    // 注意：这里必须声明所有从 tax.js 导出的成员
    // 如果 sayHello 没有在这里声明并导出，TypeScript 将无法识别它
    ```

3. 在 TypeScript 文件中使用 (`index.ts`)：

    ```TypeScript
    // index.ts
    import { calculateTax, sayHello } from './tax';

    const tax = calculateTax(50000); // 类型检查通过
    console.log(tax);

    sayHello("Alice"); // 类型检查通过

    // const invalidTax = calculateTax("wrong type"); // 类型错误
    // sayHello(123); // 类型错误
    ```

---

## 6. 第三方 js 库支持 ts

> **简述：** 在 TypeScript 项目中使用纯 JavaScript 编写的第三方库时，编译器可能因为缺少类型信息而报错。可以通过安装社区维护的 DefinitelyTyped 类型定义包（`@types/库名`）或者使用库自带的声明文件（如果提供的话）来解决这个问题，从而获得完整的类型检查和智能提示。

**知识树**

1. **问题：**
    - 许多流行的 JavaScript 库本身是用纯 JavaScript 编写的，没有内置的 TypeScript 类型信息。
    - 直接在 TypeScript 项目中 `import` 这些库会导致编译器错误，提示找不到模块的声明文件。
2. **解决方案 1：DefinitelyTyped (`@types`)**
    - **是什么：** 一个庞大的 GitHub 仓库，由社区维护，包含了成千上万个流行 JavaScript 库的声明文件 (`.d.ts`)。
    - **如何使用：** 通过 npm 或 yarn 安装对应的 `@types` 包。包名通常是 `@types/原库名`。
    - **安装命令：** `npm install @types/库名 --save-dev` 或 `yarn add @types/库名 --dev`。将其安装为开发依赖 (`-D` 或 `--save-dev` / `--dev`)，因为类型定义只在开发和编译时需要，不需要部署到生产环境。
    - **效果：** 安装后，TypeScript 编译器能自动找到并使用这些类型定义，提供类型检查和智能提示。
3. **解决方案 2：库自带声明文件**
    - **趋势：** 随着 TypeScript 越来越流行，许多现代 JavaScript 库的作者会直接在其 npm 包中包含官方的 `.d.ts` 声明文件。
    - **如何判断：** 查看库的 `package.json` 文件中是否有 `types` 或 `typings` 字段指向一个 `.d.ts` 文件，或者直接在 `node_modules` 下的库目录中查找是否存在 `.d.ts` 文件。
    - **优点：** 无需额外安装 `@types` 包，类型定义通常与库版本同步且由官方维护。
4. **总结：**
    - 当引入第三方 JS 库遇到类型问题时，首先检查库本身是否自带声明文件。
    - 如果没有，则尝试从 DefinitelyTyped 安装对应的 `@types` 包。

**代码示例**

1. 安装 Lodash 的类型定义：

    ```Bash
    npm install lodash --save # 安装库本身
    npm install @types/lodash --save-dev # 安装对应的类型定义包
    ```

2. 在 TypeScript 中使用带有类型定义的 Lodash：

    ```TypeScript
    // index.ts
    import * as _ from 'lodash'; // 导入 lodash (因为安装了 @types/lodash，TS 知道其类型)

    const numbers = [1, 2, 3, 4, 5];
    const shuffledNumbers = _.shuffle(numbers); // shuffle 函数有正确的类型提示和检查

    console.log(shuffledNumbers);

    const clonedObject = _.cloneDeep({ name: "Alice" }); // cloneDeep 也有类型提示
    console.log(clonedObject);
    ```

3. 使用自带声明文件的库（例如 Chalk，假设已 `npm install chalk`）：

    ```TypeScript
    // index.ts (假设 Chalk 自带 .d.ts 文件)
    import chalk from 'chalk'; // 直接导入，无需安装 @types/chalk

    console.log(chalk.blue('Hello world!')); // chalk 的方法有类型提示
    ```

# Ts in React

## 1. 项目创建

> **简述：** 本节介绍如何使用 Create React App (CRA) 模板快速创建一个配置好 TypeScript 的 React 项目。了解 `.tsx` 文件与 `.jsx` 的关系，以及项目基本结构。

**知识树**

1. **项目目标:**
    - 构建一个简单的待办事项（Reminders）应用。
    - 演示在 React 中使用 TypeScript 的核心概念。
2. **前提知识:**
    - 假设已了解 React 的基础知识。
    - 本节重点是 TypeScript 在 React 中的应用，而非 React 本身。
3. **创建项目:**
    - 使用 `npx create-react-app <app-name> --template typescript` 命令。
    - `--template typescript` 参数是关键，它会配置好 TypeScript 环境。
4. **项目结构:**
    - 包含 `tsconfig.json` 文件，用于 TypeScript 编译配置。
    - `src` 文件夹包含源代码。
    - 使用 `.tsx` 文件代替 `.jsx` 文件。
        - `.tsx` 文件支持 JSX 语法，同时具备 TypeScript 的类型检查能力。

**代码示例**

1. 创建 React + TypeScript 项目

    ```Bash
    npx create-react-app  RemindersApp --template typescript
    ```

    - 这条命令会初始化一个名为 `RemindersApp` 的 React 项目，并自动配置好 TypeScript。

---

## 2. 添加样式

> **简述：** 本节说明如何在 React + TypeScript 项目中引入并配置 Bootstrap 库，以便快速应用预设样式，美化应用界面。

**知识树**

1. **安装 Bootstrap:**
    - 使用 npm 安装 Bootstrap 包：`npm install bootstrap`。
2. **引入 CSS:**
    - 在项目的入口文件（通常是 `src/index.tsx`）中导入 Bootstrap 的 CSS 文件。
    - 导入路径：`bootstrap/dist/css/bootstrap.css`。
3. **自定义全局样式 (可选):**
    - 修改 `src/App.css` 文件。
    - 可以移除 CRA 默认样式，添加自定义全局样式（如 `body` 的 `padding`）。
4. **测试样式:**
    - 在 `App.tsx` 组件中添加一个使用 Bootstrap 类名的元素（如按钮 `btn btn-primary`）。
    - 运行 `npm start` 启动开发服务器，检查样式是否生效。

**代码示例**

1. 安装 Bootstrap

    ```Bash
    npm install bootstrap
    ```

2. 在 `src/index.tsx` 引入 Bootstrap CSS

    ```TypeScript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import 'bootstrap/dist/css/bootstrap.css'; // 引入 Bootstrap CSS
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    reportWebVitals();
    ```

3. 在 `src/App.css` 添加全局样式

    ```CSS
    /* 清除原有样式 */

    body {
      padding: 1rem; /* 添加一些内边距 */
    }
    ```

4. 在 `App.tsx` 中测试 Bootstrap 按钮

    ```TypeScript
    import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <button className="btn btn-primary">Click me</button>
        </div>
      );
    }

    export default App;
    ```

---

## 3. 创建 `ReminderList` 组件

> **简述：** 本节演示如何创建一个用于显示提醒事项列表的 React 函数组件 (`ReminderList`)。重点在于使用 TypeScript 接口 (`interface`) 来定义组件的 Props 类型，以及如何定义和复用数据模型接口。

**知识树**

1. **创建组件文件:**
    - 在 `src` 目录下创建 `components` 文件夹。
    - 在 `components` 内创建 `ReminderList.tsx` 文件。
2. **使用代码片段 (可选):**
    - 安装 VS Code 插件 "ReactJS Code Snippets"。
    - 使用 `rsf` (React Stateless Function) 快速生成函数组件模板。
3. **定义 Props 接口:**
    - 为组件的 Props 创建一个接口（例如 `ReminderListProps`），这是常见的命名约定。
    - 解决 TypeScript 提示的 `props` 参数隐式具有 `any` 类型的问题。
4. **定义数据模型接口:**
    - 创建描述单个数据项（提醒事项）结构的接口（例如 `Reminder`）。
    - 包含 `id` (number) 和 `title` (string) 属性。
5. **组织和复用接口:**
    - 将通用的数据模型接口（如 `Reminder`）移到单独的目录（如 `src/models`）下的文件中（如 `reminder.ts`）。
    - 使用 `export default interface ...` 导出接口。
    - 在需要的地方导入接口 (`import Reminder from '../models/reminder';`)。
6. **在 Props 接口中使用模型:**
    - 在 `ReminderListProps` 接口中定义一个属性（如 `items`），其类型是模型接口的数组 (`Reminder[]`)。
7. **类型注解 Props:**
    - 在函数组件的参数中，使用定义的 Props 接口进行类型注解：`function ReminderList(props: ReminderListProps)`。
    - 推荐使用对象解构获取 Props：`function ReminderList({ items }: ReminderListProps)`，使代码更简洁。
8. **在组件中使用 Props 数据:**
    - 访问类型化的 Props 数据（如 `items`）。
    - 使用 `.map()` 方法遍历数组，渲染列表项 (`<li>`)。
    - 为列表项设置 `key` 属性（使用 `item.id`）。
    - TypeScript 提供类型检查和智能提示（例如，访问 `item.` 时会提示 `id` 和 `title`）。
9. **在父组件中使用:**
    - 在 `App.tsx` 中导入 `ReminderList` 组件。
    - 创建符合 `Reminder` 接口的数据数组。
    - 将数据数组通过 `items` Prop 传递给 `<ReminderList />` 组件。

**代码示例**

1. 定义 `Reminder` 接口 (`src/models/reminder.ts`)

    ```TypeScript
    export default interface Reminder {
      id: number;
      title: string;
    }
    ```

2. 定义 `ReminderListProps` 接口和组件 (`src/components/ReminderList.tsx`)

    ```TypeScript
    import React from 'react';
    import Reminder from '../models/reminder'; // 导入模型接口

    // 定义 Props 接口
    interface ReminderListProps {
      items: Reminder[]; // items 是一个 Reminder 类型的数组
    }

    // 使用解构和类型注解
    function ReminderList({ items }: ReminderListProps): JSX.Element {
      return (
        <ul>
          {items.map(item => (
            // 访问 item.id 和 item.title 时有类型提示
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      );
    }

    export default ReminderList;
    ```

3. 在 `App.tsx` 中使用 `ReminderList`

    ```TypeScript
    import React from 'react';
    import './App.css';
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder'; // 导入模型接口

    function App() {
      // 创建符合接口的数据
      const reminders: Reminder[] = [
        { id: 1, title: 'TypeScript Basics' },
        { id: 2, title: 'React Components' }
      ];

      return (
        <div className="App">
          {/* 将数据传递给 items Prop */}
          <ReminderList items={reminders} />
        </div>
      );
    }

    export default App;
    ```

---

## 4. 状态管理 (`useState` Hook)

> **简述：** 本节介绍如何在 TypeScript 环境下使用 React 的 `useState` Hook 来管理组件状态。重点是如何为 `useState` 提供泛型参数以明确状态的类型，以及类型推断的应用。

**知识树**

1. **引入 `useState`:**
    - 从 `react` 库中导入 `useState` Hook。
2. **类型化 `useState`:**
    - `useState` 是一个泛型函数。可以通过尖括号 `<>` 提供类型参数，明确指定状态变量的类型。
    - 例如：`useState<Reminder[]>()` 表示状态是一个 `Reminder` 类型的数组。
3. **处理初始值与类型:**
    - 如果不提供初始值，状态类型会被推断为 `T | undefined`（其中 `T` 是泛型类型）。例如 `useState<Reminder[]>()` 的状态类型是 `Reminder[] | undefined`。
    - 为 `useState` 提供一个初始值（如空数组 `[]`）可以避免 `undefined` 类型，使类型更精确。`useState<Reminder[]>([])` 的状态类型就是 `Reminder[]`。
4. **类型推断:**
    - 如果 `useState` 的初始值足以让 TypeScript 推断出类型（如布尔值 `true`、数字 `0`、字符串 `''`），则可以省略泛型参数。
    - 例如：`useState(true)` 会自动推断状态类型为 `boolean`。
    - 对于复杂类型（如对象数组），显式提供泛型通常更清晰。
5. **使用状态:**
    - 使用数组解构从 `useState` 返回值中获取状态变量和更新函数：`const [reminders, setReminders] = useState<Reminder[]>([]);`。
    - 状态变量 (`reminders`) 具有正确的类型，更新函数 (`setReminders`) 接受符合该类型的值。

**代码示例**

1. 在 `App.tsx` 中使用类型化的 `useState`

    ```TypeScript
    import React, { useState } from 'react'; // 导入 useState
    import './App.css';
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder';

    function App() {
      // 使用泛型指定状态为 Reminder 数组，并提供空数组作为初始值
      const [reminders, setReminders] = useState<Reminder[]>([
        // 可以放初始数据，之后会从 API 获取
        { id: 1, title: 'Initial Reminder' }
      ]);

      // 类型推断示例 (可选)
      const [isLoading, setIsLoading] = useState(false); // 类型推断为 boolean

      return (
        <div className="App">
          {/* 将状态变量传递给子组件 */}
          <ReminderList items={reminders} />
        </div>
      );
    }

    export default App;
    ```

---

## 5. 创建后端服务 (`ReminderService`)

> **简述：** 本节演示如何创建一个专门用于处理 API 请求的服务类 (`ReminderService`)。这遵循了关注点分离原则，将数据获取逻辑从 UI 组件中剥离。使用了 Axios 库来发送 HTTP 请求，并利用 TypeScript 定义了服务方法的类型。

**知识树**

1. **关注点分离:**
    - 组件（如 `App.tsx`）应主要负责渲染 UI。
    - API 调用、本地存储等逻辑应封装在单独的服务或模块中。
2. **创建服务文件:**
    - 在 `src` 目录下创建 `services` 文件夹。
    - 在 `services` 内创建 `reminder.ts` 文件 (文件名小写开头，因为默认导出一个实例)。
3. **安装和导入 Axios:**
    - 安装 Axios: `npm install axios`。
    - Axios 自带类型定义文件，无需额外安装 `@types/axios`。
    - 在 `reminder.ts` 中导入 Axios: `import axios from 'axios';`。
4. **创建服务类 (`ReminderService`):**
    - 定义一个类来封装与提醒事项相关的 API 操作。
5. **配置 Axios 实例:**
    - 在类中创建一个 `http` 属性，用于存储配置好的 Axios 实例：`private http = axios.create({...});`。
    - 使用 `axios.create()` 配置基础 URL (`baseURL`) 等公共设置。TypeScript 会提示 `axios.create()` 的配置对象类型 (`AxiosRequestConfig`)。
6. **实现 API 操作方法:**
    - **`getReminders()`:**
        - 使用 `this.http.get()` 发送 GET 请求。
        - `get` 方法是泛型，指定期望返回的数据类型：`this.http.get<Reminder[]>('/todos')`。
        - 方法声明为 `async`，使用 `await` 等待 Promise 解析。
        - 返回 `response.data`。
    - **`addReminder(title: string)`:**
        - 使用 `this.http.post()` 发送 POST 请求。
        - `post` 方法也是泛型，指定期望返回的数据类型（通常是创建后的对象）：`this.http.post<Reminder>('/todos', { title })`。
        - 第二个参数是要发送的数据体。
        - 方法声明为 `async`，使用 `await` 等待响应。
        - 返回 `response.data`。
    - **`removeReminder(id: number)`:**
        - 使用 `this.http.delete()` 发送 DELETE 请求。
        - URL 中包含要删除资源的 ID：`this.http.delete(\`/todos/${id}`)`。
        - `delete` 方法通常不需要指定泛型（除非 API 返回特定结构）。
        - 方法声明为 `async`，使用 `await` 等待响应。
        - 返回 `response.data` (根据 API 设计，可能为空或包含状态信息)。
7. **导出服务实例:**
    - 不直接导出类，而是导出一个该类的实例：`export default new ReminderService();`。
    - 这样，使用者（如组件）可以直接导入并使用该实例，无需每次都 `new` 一个新的服务对象，实现了单例模式。

**代码示例**

1. 安装 Axios

    ```
    npm install axios
    ```

2. 创建 `ReminderService` (`src/services/reminder.ts`)

    ```TypeScript
    import axios from 'axios';
    import Reminder from '../models/reminder'; // 导入模型接口

    class ReminderService {
      // 创建配置好的 Axios 实例
      private http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com' // 设置基础 URL
      });

      // 获取提醒事项列表
      async getReminders(): Promise<Reminder[]> {
        const response = await this.http.get<Reminder[]>('/todos'); // 指定返回类型为 Reminder[]
        return response.data;
      }

      // 添加提醒事项
      async addReminder(title: string): Promise<Reminder> {
        const response = await this.http.post<Reminder>('/todos', { title }); // 指定返回类型为 Reminder
        return response.data;
      }

      // 删除提醒事项
      async removeReminder(id: number): Promise<any> { // 返回类型根据实际 API 决定
        const response = await this.http.delete(`/todos/${id}`);
        return response.data;
      }
    }

    // 导出服务类的实例
    export default new ReminderService();
    ```

---

## 6. 获取数据 (`useEffect` Hook)

> **简述：** 本节展示如何使用 React 的 `useEffect` Hook 在组件加载时调用前面创建的 `ReminderService` 来获取数据，并更新组件状态。强调了 `useEffect` 的依赖数组用法以及处理异步操作的正确方式。

**知识树**

1. **引入 `useEffect` 和服务:**
    - 从 `react` 导入 `useEffect`。
    - 导入之前创建的 `ReminderService` 实例。
2. **使用 `useEffect` 获取数据:**
    - 调用 `useEffect` Hook，传入一个回调函数。
    - 提供一个空依赖数组 `[]` 作为第二个参数，确保该 effect 只在组件首次挂载时运行一次。
3. **处理异步操作:**
    - `useEffect` 的回调函数本身不能是 `async` 函数。
    - 正确做法是在 `useEffect` 内部定义一个 `async` 函数（例如 `loadReminders`）。
    - 在这个 `async` 函数内部调用服务方法 (`reminderService.getReminders()`) 并 `await` 结果。
    - 获取到数据后，调用状态更新函数 (`setReminders`) 更新组件状态。
    - 在 `useEffect` 回调函数的末尾，同步调用这个 `async` 函数 (`loadReminders();`)。
4. **初始化状态:**
    - 在调用 API 获取数据前，可以将 `useState` 的初始值设置为空数组 `[]` 或包含占位/加载状态的数据。
5. **美化列表 (可选):**
    - 在 `ReminderList` 组件中，为 `<ul>` 和 `<li>` 元素添加 Bootstrap 类名 (`list-group`, `list-group-item`) 来改善显示效果。

**代码示例**

1. 在 `App.tsx` 中使用 `useEffect` 获取数据

    ```TypeScript
    import React, { useState, useEffect } from 'react'; // 导入 useEffect
    import './App.css';
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder';
    import reminderService from './services/reminder'; // 导入服务实例

    function App() {
      const [reminders, setReminders] = useState<Reminder[]>([]); // 初始状态为空数组

      // 使用 useEffect 获取数据
      useEffect(() => {
        loadReminders(); // 同步调用异步函数
      }, []); // 空依赖数组，仅在挂载时执行一次

      // 定义异步函数来加载数据
      const loadReminders = async () => {
        const fetchedReminders = await reminderService.getReminders();
        setReminders(fetchedReminders); // 更新状态
      };

      return (
        <div className="App">
          <ReminderList items={reminders} />
        </div>
      );
    }

    export default App;
    ```

2. 在 `ReminderList.tsx` 中添加 Bootstrap 类名

    ```TypeScript
    import React from 'react';
    import Reminder from '../models/reminder';

    interface ReminderListProps {
      items: Reminder[];
    }

    function ReminderList({ items }: ReminderListProps): JSX.Element {
      return (
        // 添加 list-group 类名
        <ul className="list-group">
          {items.map(item => (
            // 添加 list-group-item 类名
            <li className="list-group-item" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    }

    export default ReminderList;
    ```

---

## 7. 实现删除功能

> **简述：** 本节讲解如何在 `ReminderList` 组件中添加删除按钮，并通过回调函数 (`props`) 将删除操作传递给父组件 (`App`) 处理。父组件负责更新状态数组，实现 UI 上的删除效果。

**知识树**

1. **在子组件 (`ReminderList`) 添加按钮:**
    - 在每个列表项 (`<li>`) 中添加一个删除按钮 (`<button>`)。
    - 使用 Bootstrap 类名美化按钮（如 `btn`, `btn-outline-danger`, `rounded-pill`, `mx-2`）。
2. **定义回调 Prop 类型:**
    - 在 `ReminderListProps` 接口中添加一个新的 Prop，用于处理删除操作（例如 `onRemoveReminder`）。
    - 该 Prop 的类型是一个函数，接收要删除项的 `id` (number) 作为参数，返回 `void`：`(id: number) => void`。
3. **在父组件 (`App`) 定义处理函数:**
    - 在 `App` 组件中定义一个函数（例如 `removeReminder`），它接收 `id` (number)。
    - 在此函数内部：
        - 使用 `reminders.filter()` 方法创建一个新的数组，包含所有 `id` 不匹配的提醒事项。
        - 调用 `setReminders()` 使用这个新数组更新状态。
        - _(后续会加入调用 API 删除)_
4. **将处理函数作为 Prop 传递:**
    - 在 `App` 组件渲染 `<ReminderList />` 时，将 `removeReminder` 函数传递给 `onRemoveReminder` Prop。
5. **在子组件 (`ReminderList`) 调用回调:**
    - 在删除按钮上添加 `onClick` 事件处理器。
    - 在 `onClick` 的处理函数中，调用从 Props 接收到的 `onRemoveReminder` 函数，并传入当前项的 `item.id`。
    - 确保从 Props 中解构出 `onRemoveReminder`。
6. **测试:**
    - 点击删除按钮，验证对应项是否从列表中移除。

**代码示例**

1. 更新 `ReminderListProps` 和组件 (`src/components/ReminderList.tsx`)

    ```TypeScript
    import React from 'react';
    import Reminder from '../models/reminder';

    interface ReminderListProps {
      items: Reminder[];
      onRemoveReminder: (id: number) => void; // 添加回调 Prop 类型
    }

    // 解构出 onRemoveReminder
    function ReminderList({ items, onRemoveReminder }: ReminderListProps): JSX.Element {
      return (
        <ul className="list-group">
          {items.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.title}
              <button
                // 调用回调函数，传入 item.id
                onClick={() => onRemoveReminder(item.id)}
                className="btn btn-outline-danger mx-2 rounded-pill">
                Delete
              </button>
            </li>
          ))}
        </ul>
      );
    }

    export default ReminderList;
    ```

2. 更新 `App.tsx` 以处理删除

    ```TypeScript
    import React, { useState, useEffect } from 'react';
    import './App.css';
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder';
    import reminderService from './services/reminder';

    function App() {
      const [reminders, setReminders] = useState<Reminder[]>([]);

      useEffect(() => {
        loadReminders();
      }, []);

      const loadReminders = async () => {
        const fetchedReminders = await reminderService.getReminders();
        setReminders(fetchedReminders);
      };

      // 定义删除处理函数
      const removeReminder = (id: number) => {
        // 更新状态以在 UI 上移除
        setReminders(reminders.filter(reminder => reminder.id !== id));
        // TODO: 调用 API 删除服务器上的数据
      };

      return (
        <div className="App">
          {/* 将 removeReminder 函数传递给子组件 */}
          <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
      );
    }

    export default App;
    ```

---

## 8. 创建 `NewReminder` 表单组件

> **简述：** 本节介绍如何创建一个用于添加新提醒事项的表单组件 (`NewReminder`)。包含表单元素（label, input, button）的设置、使用 `useState` 管理输入框状态（受控组件），以及基本的表单布局。

**知识树**

1. **创建组件文件:**
    - 在 `src/components` 目录下创建 `NewReminder.tsx` 文件。
    - 使用 `rsf` 生成函数组件模板。
2. **类型注解返回值 (可选但推荐):**
    - 为函数组件添加返回类型注解 `: JSX.Element`，确保函数总是返回一个有效的 JSX 元素。
3. **构建表单结构:**
    - 使用 `<form>` 元素作为根元素。
    - 包含 `<label>`、`<input>` (type="text") 和 `<button>` (type="submit")。
    - 使用 Bootstrap 类名进行样式设置 (如 `form-control` for input, `btn`, `btn-primary`, `rounded-pill`, `my-3` for button spacing)。
    - 将 `<label>` 的 `htmlFor` 属性与 `<input>` 的 `id` 属性关联，提升可访问性。
4. **管理输入框状态 (受控组件):**
    - 使用 `useState` 创建一个状态变量（例如 `title`）来存储输入框的值，初始值为空字符串 `''`。
    - 将 `<input>` 的 `value` 属性绑定到 `title` 状态变量。
    - 为 `<input>` 添加 `onChange` 事件处理器。
        - 在 `onChange` 处理函数中，获取事件对象 `e` (其类型会被 TypeScript 推断为 `React.ChangeEvent<HTMLInputElement>`)。
        - 调用 `setTitle(e.target.value)` 更新状态。
5. **在父组件中使用:**
    - 在 `App.tsx` 中导入并渲染 `<NewReminder />` 组件，通常放在列表上方。

**代码示例**

1. 创建 `NewReminder` 组件 (`src/components/NewReminder.tsx`)

    ```TypeScript
    import React, { useState } from 'react';

    function NewReminder(): JSX.Element { // 添加返回类型注解
      // 使用 useState 管理输入框的值
      const [title, setTitle] = useState('');

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value); // 更新状态
      };

      return (
        <form>
          <label htmlFor="title">Reminder</label>
          <input
            value={title} // 绑定 value 到 state
            onChange={handleInputChange} // 处理输入变化
            id="title"
            type="text"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary my-3 rounded-pill">
            Add Reminder
          </button>
        </form>
      );
    }

    export default NewReminder;
    ```

2. 在 `App.tsx` 中使用 `NewReminder`

    ```TypeScript
    import React, { useState, useEffect } from 'react';
    import './App.css';
    import NewReminder from './components/NewReminder'; // 导入新组件
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder';
    import reminderService from './services/reminder';

    function App() {
      const [reminders, setReminders] = useState<Reminder[]>([]);

      // ... (useEffect, loadReminders, removeReminder 函数保持不变)

      return (
        <div className="App">
          <NewReminder /> {/* 在列表上方渲染表单 */}
          <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
      );
    }

    export default App;
    ```

---

## 9. 实现添加功能

> **简述：** 本节完成添加提醒事项的功能。包括处理 `NewReminder` 组件的表单提交事件，通过回调函数将新提醒事项的数据传递给父组件 (`App`)，在父组件中调用 API 服务添加数据，并更新状态以在 UI 上显示新项。同时，添加了简单的输入验证和提交后清空输入框的逻辑。

**知识树**

1. **处理表单提交 (`NewReminder`):**
    - 为 `<form>` 元素添加 `onSubmit` 事件处理器。
    - 定义一个处理提交的函数（例如 `submitForm`）。
    - 该函数接收一个事件对象 `e`，其类型为 `React.FormEvent`。
    - 在函数开头调用 `e.preventDefault()` 阻止表单的默认提交行为（页面刷新）。
2. **定义添加回调 Prop (`NewReminder`):**
    - 创建 `NewReminderProps` 接口。
    - 在接口中定义一个回调 Prop，例如 `onAddReminder`，它接收新提醒事项的 `title` (string) 作为参数，返回 `void`：`(title: string) => void`。
    - 给组件函数添加 `props` 参数并使用接口注解，然后解构出 `onAddReminder`。
3. **在提交时调用回调 (`NewReminder`):**
    - 在 `submitForm` 函数中，调用 `onAddReminder(title)` 将输入的 `title` 传递给父组件。
4. **在父组件 (`App`) 定义添加处理函数:**
    - 在 `App` 组件中定义一个 `async` 函数（例如 `addReminder`），它接收 `title` (string)。
    - 在此函数内部：
        - 调用 `reminderService.addReminder(title)` 并 `await` 结果，获取从服务器返回的新提醒事项对象（包含 `id`）。
        - 调用 `setReminders()` 更新状态，将新获取的 `newReminder` 添加到现有 `reminders` 数组的前面 (`[newReminder, ...reminders]`)。
5. **将添加处理函数作为 Prop 传递 (`App`):**
    - 在 `App` 组件渲染 `<NewReminder />` 时，将 `addReminder` 函数传递给 `onAddReminder` Prop。
6. **添加输入验证 (`NewReminder`):**
    - 在 `submitForm` 函数中，调用回调之前，检查 `title` 是否为空或仅包含空格。如果为空，则直接 `return`，不执行添加操作。
    - `if (!title) return;`
7. **提交后清空输入框 (`NewReminder`):**
    - 在 `submitForm` 函数中，成功调用 `onAddReminder` 回调之后，调用 `setTitle('')` 将输入框状态重置为空字符串。
8. **测试:**
    - 输入内容并点击添加按钮，验证新项是否出现在列表顶部，并且输入框是否清空。
    - 尝试不输入内容点击添加，验证是否没有反应。

**代码示例**

1. 更新 `NewReminder.tsx` 处理提交和回调

    ```TypeScript
    import React, { useState } from 'react';

    // 定义 Props 接口
    interface NewReminderProps {
      onAddReminder: (title: string) => void;
    }

    // 添加 props 参数并解构
    function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
      const [title, setTitle] = useState('');

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };

      // 定义表单提交处理函数
      const submitForm = (e: React.FormEvent) => {
        e.preventDefault(); // 阻止默认提交
        // 基本验证：不允许空标题
        if (!title) return;
        // 调用父组件传递的回调函数
        onAddReminder(title);
        // 清空输入框
        setTitle('');
      };

      return (
        // 绑定 onSubmit 事件
        <form onSubmit={submitForm}>
          <label htmlFor="title">Reminder</label>
          <input
            value={title}
            onChange={handleInputChange}
            id="title"
            type="text"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary my-3 rounded-pill">
            Add Reminder
          </button>
        </form>
      );
    }

    export default NewReminder;
    ```

2. 更新 `App.tsx` 定义并传递添加处理函数

    ```TypeScript
    import React, { useState, useEffect } from 'react';
    import './App.css';
    import NewReminder from './components/NewReminder';
    import ReminderList from './components/ReminderList';
    import Reminder from './models/reminder';
    import reminderService from './services/reminder';

    function App() {
      const [reminders, setReminders] = useState<Reminder[]>([]);

      useEffect(() => {
        loadReminders();
      }, []);

      const loadReminders = async () => {
        try { // 最好加上错误处理
            const fetchedReminders = await reminderService.getReminders();
            setReminders(fetchedReminders);
        } catch (error) {
            console.error("Failed to load reminders:", error);
        }
      };

      const removeReminder = async (id: number) => { // 也可以改为 async
        // 乐观更新 UI
        setReminders(reminders.filter(reminder => reminder.id !== id));
        try {
            await reminderService.removeReminder(id);
        } catch (error) {
            console.error("Failed to remove reminder:", error);
            // 如果删除失败，可能需要恢复状态
            // loadReminders(); // 重新加载数据是一种简单的恢复方式
        }
      };

      // 定义添加处理函数 (async)
      const addReminder = async (title: string) => {
        try {
            const newReminder = await reminderService.addReminder(title);
            // 更新状态，将新项放在最前面
            setReminders([newReminder, ...reminders]);
        } catch (error) {
             console.error("Failed to add reminder:", error);
             // 可以考虑添加用户反馈
        }
      };

      return (
        <div className="App">
          {/* 将 addReminder 函数传递给 NewReminder */}
          <NewReminder onAddReminder={addReminder} />
          <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
      );
    }

    export default App;
    ```

---

笔记已经根据你的要求，按照字幕内容分节整理完毕了。每一节都包含了标题、简述、知识树和相关的代码示例。

这个过程是不是让你对如何使用 TypeScript 构建 React 应用有了更清晰的认识？特别是 Props 类型定义、泛型 Hooks、服务层分离以及组件间通信这些方面。

你觉得这份笔记怎么样？有没有哪些部分你还想深入了解，或者想做一些练习题来巩固一下呢？ 告诉我你的想法！
