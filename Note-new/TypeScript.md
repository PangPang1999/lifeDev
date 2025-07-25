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

> 简述：搭建 TypeScript 开发环境需安装 Node.js 和代码编辑器（推荐 VS Code），编写的 TypeScript 文件经编译生成 JavaScript 文件后运行。

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
    5. 其他配置
        - `allowUnreachableCode`：检测抵达不到的代码，发出警告。默认为 true 只变淡不警告，需要手动设置为 false
    6. 继承配置
        - `noImplicitOverride`： 手动设置为 true，避免无意间的重写
    7. 装饰器配置
        - `experimentalDecorators`：手动设置为 true，启用装饰器
    8. 重导入自动解析
        - `moduleResolution`：手动设置为 node，启用自动解析地址，配置完成后可能需要重启 VScode
    9. JavaScript 混用开启
        - `allowJs`：若需要混用 js，手动设置为 true，同时确保 `module` 为 `commonJS`

3. 编译流程

    - 保存配置文件后，运行 `tsc` 命令可自动编译项目中所有 .ts 文件
    - 编译结果存放于 outDir 指定的目录

4. 示例介绍

    - 创建配置文件，并修改对应选项
    - 移除之前生成的 `index.js` 文件，创建文件夹 `src` 将 `index.ts` 放入

5. 运行代码

    1. `tsc` 转译
    2. `node dist/index.js`，运行转译后的 js 代码
    3. 此外，可以使用`&&`合并两个指令（Mac）
        - `tsc && node dist/index.js`

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

> 简述：TS 中 any 类型可接受任何类型的值，但存在风险，需要谨慎处理。使用 Unknown 更安全，稍后介绍。

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
            - 若没有设置返回值时，没有语法错误，根据 `return xxx` 的类型来判断返回值的类型，若没有 `return`，则默认为 `void`，但这样子不规范，应避免这种方式。
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

# Advanced Types

## 类型别名

> 简述：通过使用 TypeScript 的类型 别名（type alias），我们能集中定义对象的结构，避免重复编写相同的代码，保证数据一致性并提升代码的可读性。

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

> 简述：联合类型（Union Types）允许变量或函数参数接受多种类型，通过运行时判断（类型缩小）确定实际类型，从而使用各自特定的方法和属性，对初学者友好。

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

    ```ts
    function kgToLbs(weight: number | string): number {
      if (typeof weight === "number") {
        return weight * 2.2;
      } else {
        return parseInt(weight) * 2.2;
      }
    }

    console.log(kgToLbs(10));
    console.log(kgToLbs("10kg"));
    ```

    - 说明：该函数接受数字或字符串类型的 weight，通过 `typeof` 判断后分别处理，实现公斤转换为磅的功能。由于`10kg`的前面是数组，将转为 10，如果是`kg10`，将变成`NaN`

## 交叉类型

> 简述：通过交叉类型（Intersection Types），我们将多个独立接口合并成一个新类型，确保对象同时满足所有接口的要求。这种方式避免了重复定义，提升了代码一致性与可读性，对初学者非常友好。

**知识树**

1. 交叉类型基础

    - 定义：使用 `&` 将多个类型合并
    - 特点：合并后对象需同时具备所有类型的属性和方法
    - 注意：对于原始类型，交叉类型（如 number & string）通常无实际意义

2. 交叉类型的应用

    - 合成新类型示例：
        - 将 Draggable 与 Resizable 合并为 UIWidget，创建 UIWidget 时，需要具备前两者内所有的属性与方法
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

> 简述：字面量类型（Intersection Types）通过限定变量取值为具体的常量（如特定数字或字符串），帮助开发者精确定义可接受的值，提升类型安全性和代码可读性。

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

> 简述： TypeScript 通过严格空值检查防止 null/undefined 引发错误，通过联合类型（union type）可以显式声明可空类型（Nullable Types）。

**知识树**

1. TypeScript 对 `null`/`undefined` 的默认严格模式

    - 原因：`null` 和 `undefined` 常是导致错误的根源。
    - 实现：`strictNullChecks` 在 `tsconfig.json` 中默认开启（若 `strict` 为 `true`），从而阻止将 `null`/`undefined` 赋给非空类型。

2. 可空类型声明

    - 利用联合类型（如 `string | null`）允许变量或参数为空，但仍然不可传`undefined`

3. 应用逻辑

    - 依据参数是否存在执行不同逻辑，防止运行时错误

4. `tsconfig` 配置

    - `strictNullChecks` 选项确保类型安全，默认开启

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

    - 描述：通过使用联合类型，函数就能安全地同时处理 `string` 和 `null`，当 `name` 是 `string`，执行 `toUpperCase()`，当 `name` 是 `null`，执行其他逻辑。

## 可选链 `?.`

> 简述：TypeScript 的可选链（Optional Chaining）操作符，用于简化空值检查，安全访问对象属性、数组元素及函数调用，防止因 null 或 undefined 导致的运行时错误。

**知识树**

1. 可选属性访问

    - 使用 `?.` 访问对象属性
    - 若对象为 null/undefined，表达式返回 undefined，避免了 `if` 判断

2. 可选元素访问

    - 使用 `?.[]` 安全获取数组元素
    - 避免空数组或未定义数组引发错误

3. 可选调用

    - 使用 `?.()` 调用函数
    - 仅在函数存在时执行调用，否则返回 undefined

**代码示例**

1. 原始判断

    ```ts
    type Customer = {
      birthday: Date;
    };

    // function getCustomer(id: number): Customer | null {
    function getCustomer(id: number): Customer | null | undefined {
      return id === 0 ? null : { birthday: new Date() };
    }

    const customer = getCustomer(0);

    // if (customer !== null) {
    if (customer !== null && customer !== undefined) {
      console.log(customer.birthday);
    }
    ```

2. 可选属性访问示例

    ```ts
    type Customer = {
      birthday: Date;
    };

    function getCustomer(id: number): Customer | null | undefined {
      return id === 0 ? null : { birthday: new Date() };
    }

    const customer = getCustomer(0);
    console.log(customer?.birthday?.getFullYear());
    ```

    - 说明：通过 `?.` 链式调用，即使 customer 或 birthday 为 null/undefined，也不会报错。

3. 可选链访问数组元素

    ```typescript
    const numbers: number[] | null = null;
    // 安全访问第一个元素，如果 numbers 为 null，结果为 undefined
    console.log(numbers?.[0]); // 输出：undefined
    ```

4. 可选链调用类方法

    ```ts
    class Greeter {
      greet(name: string) {
        console.log(`Hello, ${name}!`);
      }
    }

    const greeter: Greeter | null = null;
    // 安全调用方法，如果 greeter 为 null 不会报错
    greeter?.greet("Alice");
    ```

## 空值合并操作符`??`

> 简述：空值合并操作符（??），在处理 null 或 undefined 时提供默认值，能确保代码逻辑精确且安全

**知识树**

1. `falsy`

    - 包含：`null`/`undefined`以及`0`、`false`、‘ ’
    - 问题：`||` 运算符会错误忽略 `0`、空字符串等有效的“假值”

2. 空值合并操作符（`??`）

    - 作用：只将 `null` 和 `undefined` 视为空，其他 `falsy` 值都保留原值。
    - 语法：`a ?? b`
        - 如果 `a` 不为 `null` 或 `undefined`，返回 `a`；否则返回 `b`。
    - 优势：不误判其他 falsy 值

3. 应用场景

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

    - 描述：避免使用 `||`，确保`0`、`''` 等有效数值不被误判为空。
    - `speed: speed ?? 30`等价于：`speed: speed!==null ? speed: 30`

## 断言类型

> 简述：断言类型让开发者告知编译器变量实际的具体类型，从而使用更精确的属性和方法。它仅在编译时生效，不进行任何运行时转换。

**知识树**

1. 类型断言概念

    - 定义：通过断言告知编译器变量的具体类型，超越自动推断
    - 目的：获得更精确的类型信息以便访问专有属性

2. 语法形式

    - as 语法：推荐使用，兼容性更好
    - 尖括号语法：功能相同，但在 JavaScript XML 中不可用
    - 常见操作
        - 指定获取到的元素是什么具体类型，(例如将 `getElementById` 的返回值（`HTMLElement | null`）断言为更具体的 `HTMLInputElement`)

3. 注意事项

    - 仅影响编译期，运行时不做类型转换
    - 错误断言可能导致运行时错误
        - 如果实际值不是你断言的类型，在运行时访问该类型独有的属性或方法时，就会报错。

**代码示例**

1. 使用 as 语法进行类型断言

    ```typescript
    // 获取 id 为 "phone" 的元素，并断言为 HTMLInputElement
    const phone = document.getElementById("phone") as HTMLInputElement;
    console.log(phone.value);
    ```

    - 描述：这里的 as `HTMLInputElement` 只是告诉 TypeScript 编译器：请把 `phone` 当作 `HTMLInputElement` 处理，方便你获取 `phone.value` 等属性。

2. 使用尖括号语法进行类型断言

    ```typescript
    // 使用尖括号语法实现同样效果
    const phone = <HTMLInputElement>document.getElementById("phone");
    console.log(phone.value);
    ```

    - 说明：另一种语法形式实现类型断言，但在包含 JSX 的环境下应避免使用。

## Unknown 类型

> 简述： unknown 与 any 类型有所不同， unknown 强调强制类型缩小以确保类型安全，避免调用不存在的方法导致运行时错误。

**知识树**

1. any 类型

    - 表示任意值，关闭所有类型检查
    - 风险：可任意调用成员，可能隐藏错误

2. unknown 类型

    - 表示未知值，必须缩小（Narrowing）后才能使用
    - 优势：强制类型检查，确保安全性

3. 类型缩小

    - 利用类型守卫（如 `typeof`、`instanceof`）将 unknown 缩小为具体类型
    - 适用于原始类型和自定义对象

4. 编译器行为

    - any 允许任意操作；unknown 阻止直接调用成员，迫使开发者进行类型验证

**代码示例**

1. any 类型示例

    ```typescript
    function render(doc: any) {
      // 无类型检查，随意调用方法
      doc.move();// 如果实际不存在该方法，应用崩溃
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

    - 说明：unknown 强制验证类型后才能调用对应方法，确保类型安全。instanceof 将在后续介绍。

## never 类型

> 简述：never 类型表示永远不会产生值的情况，常用于标识永不返回或总抛异常的函数。它帮助编译器检测不可达代码，保证逻辑正确，对初学者友好。

**知识树**

1. never 类型概念

    - 表示函数永远不会有返回，可能是无限循环，可能是直接抛出异常，不太常用。
    - 与 void 的区别：void 表示没有返回值，但可能正常结束；never 表示函数永不结束
    - 表达意图：在代码层面说明“这里绝不会返回”，比用 `void` 更严谨，也能帮助编译器进行更精准的静态分析。

2. 编译器严格检查

    - `allowUnreachableCode`：检测抵达不到的代码，发出警告。
        - 当 `tsconfig` 配置中 `allowUnreachableCode` 关闭时，能在编译时检测到任何写在 `never` 后面的不可能执行的代码。

3. 小结

    - `never` 在普通业务逻辑中使用不多，但在某些底层框架或特殊流程控制（如死循环、异常终止）中有其价值。
    - 了解 `never` 有助于深入理解 TypeScript 的类型系统和编译器推断过程。

**代码示例**

1. 无限循环示例

    ```typescript
    function processEvents(): never {
      while (true) {
        // 持续处理事件（例如监听消息队列）
      }
    }
    processEvents();
    console.log("This will never be reached."); // 永远无法抵达，设置配置文件后发出警告
    ```

    - 解释：函数通过无限循环永不返回，使用 never 类型明确表达这一点，帮助编译器识别后续代码为不可达。

2. 始终抛异常示例

    ```typescript
    function reject(message: string): never {
      throw new Error(message);
    }
    reject('...);
    console.log("This will never be reached."); // 永远无法抵达，设置配置文件后发出警告
    ```

    - 解释：该函数总是抛出错误，因此永不返回，通过 never 类型使得编译器和开发者清晰认识到调用后的代码不会执行。

# Classes, Interfaces and Object-oriented Programming

## 面向对象编程

> 简述：和其他面向对象的语言一样，Ts 可以通过类与对象、封装、继承、多态及接口抽象现实世界，清晰表达数据和行为，提升代码复用性、可维护性和扩展性。OOP 通常于 FP 对比。

**知识树**

1. 编程范式

    - 定义：编程范式是编写代码的风格或方式。
    - 示例：
        - 面向对象编程（OOP）
        - 函数式编程（FP）
        - 过程式编程
        - 事件驱动编程
        - 面向切面编程

2. 面向对象编程（OOP）

    - 定义：一种以对象为基本单元的编程范式，对象包含数据和操作。
    - 核心概念：
        - 对象：包含数据（状态）和操作（行为）的单元。
        - 类：对象的蓝图或模板，定义了对象的属性和方法。
    - 特点：
        - 封装：将数据和操作封装在对象内部。
        - 继承：类之间可以继承属性和方法。
        - 多态：对象可以以多种形式存在。

3. OOP 与函数式编程（FP）的比较

    - 函数式编程（FP）：
        - 以函数为构建块。
        - 强调不可变性和无副作用。
    - 区别：
        - OOP 侧重于对象和类的组织。
        - FP 侧重于函数的组合和数据的转换。
    - 优缺点：
        - 每种范式在不同场景下有其优势。
        - OOP 适用于模拟现实世界中的实体和交互。
        - FP 适用于数据处理和并发编程。

## 创建类

> 简述：类（Class）定义了事物的抽象特征，是对象的蓝图（Blueprint）或模板 （Template）。用于批量创建具有相同结构和行为的对象。下一节介绍如何创建对象。

**知识树**

1.  类

    - 属性 (Properties):
        - 对象的状态或数据 (e.g., 银行账户的 `id`, `owner`, `balance`)。
    - 方法 (Methods):
        - 对象的行为或操作 (e.g., `deposit`, `withdraw`)。

2.  定义方式

    - 使用 `class` 关键字。
    - 类名遵循帕斯卡命名法 (PascalCase) (e.g., `Account`)。
    - 类体包含在 `{}` 中，包括属性和方法

3.  属性

    - 在类体中直接声明，并指定类型注解。
    - 初始化要求:
        - TypeScript 编译器**默认配置要求**属性在使用前必须被明确赋值（通常在声明时或构造函数中完成），否则报错。技术上可以声明类，new 对象后赋值，但不推荐。

4.  构造函数

    - 目的:
        - 初始化对象。当使用 `new` 创建类实例时自动调用。
    - 定义:
        - 使用 `constructor` 关键字定义的特殊方法。接收参数，用于设置对象的初始状态。
    - 返回类型:
        - 无需也不能显式声明返回类型，它总是隐式返回当前类的一个新实例。
    - `this` 关键字:
        - 在构造函数和方法内部，`this` 指向当前正在创建或操作的对象实例。用于访问或修改实例的属性 (`this.propertyName = value;`)。

5.  方法

    - 定义:
        - 在类内部定义的函数，用于描述对象的行为。可以包含任意业务逻辑，如条件判断、计算、抛出错误等。
    - 语法:
        - `methodName(parameters): returnType { ... }`
    - 访问属性:
        - 方法内部可以使用 `this` 关键字访问和修改当前对象的属性。

**代码示例**

1.  定义类、属性和构造函数

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

2.  添加方法

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
      deposit(amount: number): void {
        // void 表示该方法不返回值
        // 方法内部可以包含逻辑
        if (amount <= 0) {
          throw new Error("Invalid amount"); // 抛出错误处理无效输入
        }
        // 使用 'this' 访问和修改实例属性
        this.balance += amount;
      }
    }
    ```

## 创建对象

> 简述：通过 `new` 操作符基于类，实例化一个对象，可以使用其属性与方法。利用 `instanceof` 能检测对象类型。

**知识树**

1. 对象实例化

    - 使用 `new` 关键字，传入必须参数，创建对象
    - 构造函数调用:
        - `new` 操作符会自动调用类的构造函数 (`constructor`)，并传递参数给构造函数以初始化属性

2. 访问对象成员

    - 对象的属性与方法通过 `对象.成员` 进行访问
    - 类的属性与方法在对象中对应实际数据和行为

3. 运行时对象类型检查 (Runtime Object Type Checking)

    - `typeof` 操作符:
        - 行为:
            - 对原始类型（`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`）返回类型字符串；
            - 对对象（包括由类创建的实例、数组、`null`）返回 `"object"`，对函数返回 `"function"`。
        - 局限性:
            - 不能区分不同类的实例、数组和普通对象，`typeof null` 返回 `"object"`（历史遗留问题）。
        - 适用场景:
            - 区分原始类型和 `"object"`/`"function"`，不适合判断自定义类型。
    - `instanceof` 操作符:
        - 行为:
            - 检查对象原型链上是否有指定构造函数的 `prototype`，返回布尔值。
        - 语法:
            - `object instanceof Constructor`
        - 局限性:
            - 只能判断对象与构造函数的关系，对原始类型无效。
        - 适用场景:
            - 判断对象是否为特定类或其父类的实例，适用于类型守卫。
    - 最佳实践:
        - 判断对象具体类型，用 `instanceof`。
        - 判断原始类型，用 `typeof`。

**代码示例**

1.  创建对象实例与成员访问

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
          throw new Error("Invalid amount"); // 抛出错误处理无效输入
        }
        this.balance += amount;
      }
    }

    // 1. 创建对象实例 (Instantiation)
    // 使用 'new' 调用 Account 类的构造函数，并传入初始值
    let account = new Account(1, "Pang", 0);

    // 2. 访问属性 (Accessing Property)
    console.log("Initial Balance:", account.balance);

    // 3. 调用方法 (Calling Method)
    account.deposit(100);

    // 4. 直接打印对象
    console.log(account);
    ```

2.  `typeof` 与 `instanceof` 对比

    ```typescript
    // (续上例)
    console.log(typeof account); // 输出对象的类型，仅返回 object
    console.log(account instanceof Account); // 输出 true，表示 account 是 Account 类的实例
    ```

    - 描述： `typeof account` 返回 `"object"`，而 `account instanceof Account` 返回 `true`。

## 属性修饰符`readonly` &`?`

> 简述：通过 `readonly` 和 可选属性（`?`）修饰符，可以限制属性赋值时机与必需性性，避免意外修改或未初始化访问。

**知识树**

1. 只读属性（Readonly）

    - 使用 `readonly` 前缀声明，属性只能在构造函数内赋值
    - 在类外或其他方法中再次赋值会导致编译错误

2. 可选属性（Optional）

    - 在属性名后添加 `?` 标记，表示属性可以为 `undefined`
    - 可选属性无需在构造函数中初始化

3. 应用场景

    - `readonly`：适用于标识唯一且不可变的数据，如账户 ID
    - 可选属性：适用于非必需字段，如用户自定义昵称

4. readonly  和可选属性 (?) 的使用

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
          throw new Error("Invalid amount");
        }
        this.balance += amount;
        // this.id = 0; // 编译错误！无法分配到 "id" ，因为它是只读属性。
      }

      setNickname(name: string) {
        this.nickname = name; // 可选属性可以在之后赋值
      }
    }
    ```

## 访问修饰符

> 简述： TypeScript 中的访问修饰符用于控制类成员（属性和方法）的可访问性。通过限制访问，可以增强封装性，防止外部代码直接篡改内部状态。

**知识树**

1.  访问修饰符 (Access Modifiers)

    - TypeScript 提供的关键字，用于设定类成员的可见范围。
    - 主要修饰符：
        - public：默认修饰符，成员可在任何地方被访问
        - private：成员只能在类内被访问
        - protected：在类内及子类中可被访问（稍后介绍）

2.  `public` (公有)

    - 默认修饰符：
        - 如果不显式指定，类成员默认为 `public`。
    - 可访问性：
        - 可以在任何地方访问（类内部、类的实例外部、子类中）。

3.  `private` (私有)

    - 访问：
        - 仅能在定义该成员的类内部访问。不能在类的实例外部或子类中访问。如果需要从外部读取或（受控地）修改私有属性，应提供公共方法（如 Getter/Setter 或其他业务方法）。
    - 主要目的:
        - 封装与信息隐藏
            - 隐藏内部实现细节，强制通过公共接口（方法）交互。
        - 代码健壮性
            - 防止外部代码意外修改内部状态，确保对象状态的一致性（例如，确保余额修改总伴随着交易记录）。
    - 注意:
        - `private` 主要用于代码结构和健壮性，不应用于存储敏感信息（如密码），因为它只在编译时强制执行，运行时可能被绕过。
    - 命名约定:
        - 私有属性通常以下划线 `_` 开头 (e.g., `_balance`)，作为一种编码风格提示。

4.  私有方法

    - 访问修饰符同样可以应用于类的方法。`private` 方法通常是类内部使用的辅助方法，不希望暴露给外部调用者。

**代码示例**

1.  `private` 属性和受控访问

    ```typescript
    class Account {
      readonly id: number;
      owner: string;
      // 使用 private 修饰符，并遵循下划线约定
      private _balance: number;

      constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        // 私有属性可以在类内部访问和赋值
        this._balance = balance;
      }

      deposit(amount: number): void {
        if (amount <= 0) {
          throw new Error("Invalid amount");
        }
        this._balance += amount;
      }

      // 公共方法，用于安全地获取私有属性的值 (Getter)
      getBalance(): number {
        // 可以在此添加权限检查等逻辑
        return this._balance;
      }

      // 私有方法，仅供类内部使用
      private calculate(amount: number): void {
    	...
      }
    }

    let account = new Account(1, "Alice", 1000);

    // account._balance = 2000; // 编译错误！属性“_balance”为私有属性，只能在类“Account”中访问。

    account.deposit(500); // 正确：通过公共方法间接修改私有属性

    // 通过公共 Getter 方法访问余额
    let currentBalance = account.getBalance();
    console.log("Balance retrieved:", currentBalance); // 输出: Balance retrieved: 1500
    ```

## 参数属性

> 简述：TypeScript 的参数属性(Parameter Properties)，允许在构造函数参数上直接使用访问修饰符（`public`, `private`, `protected`）或 `readonly`，从而自动完成类属性的声明和初始化，显著减少样板代码，这是一种简洁的语法糖，。

**知识树**

1.  参数属性 (Parameter Properties)

    - 形式：
        - 在构造函数的参数名前直接添加访问修饰符 (`public`, `private`, `protected`) 或 `readonly` 修饰符。
    - 工作原理
        - 当编译器遇到带有修饰符的构造函数参数时，它会自动在类中创建一个同名的属性。该属性具有参数上指定的修饰符。并自动将传入构造函数的参数值赋给这个新创建的同名属性。

2.  优势

    - 代码简洁: 大幅减少了声明属性和在构造函数中手动赋值所需的代码量。
    - 提高效率: 使类的定义更加紧凑和易读。

3.  组合修饰符

    - 可以在同一个参数上同时使用访问修饰符和 `readonly`。
    - 顺序: 访问修饰符在前，`readonly` 在后 (e.g., `public readonly id: number`)。

4.  代码格式化

    - 当构造函数参数较多时，为了保持代码可读性，建议将每个参数属性放在单独一行。

**代码示例**

1.  **使用参数属性简化类定义**

    ```typescript
    // 传统方式 (冗余)
    /*
    class Account {
      id: number;
      owner: string;
      balance: number;

      constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
      }

      // 省略
    }
    */


    // 使用参数属性 (简洁)
    class Account {
      constructor(
        public readonly id: number, // 创建 public readonly id 属性并初始化
        public owner: string, // 创建 public owner 属性并初始化
        private _balance: number // 创建 private _balance 属性并初始化
      ) {}

      // 省略
    }
    ```

## Getter 与 Setter

> 简述：Getter (`get`) 和 Setter (`set`) 以属性访问的语法来执行方法逻辑。Getter 用于获取属性值（通常是私有属性），Setter 用于设置属性值，常包含验证逻辑，共同增强了类的封装性和数据控制能力。

**知识树**

1.  动机 (Motivation)

    - 直接使用普通方法（如 `getBalance()`）语法上不够直观
    - 期望像访问公共属性一样访问，但同时保留内部控制（如验证）。

2.  Getter 和 Setter

    - 概念：
        - 统称为访问器 (Accessors)，是类中特殊的成员。提供类似属性访问的语法 (`object.property`)，但背后执行的是方法调用。
    - 功能：
        - 为私有属性提供受控的公共访问接口，实现封装和数据验证。

3.  Getter (`get`)

    - 定义: 使用  get  关键字修饰的方法。
    - 目的: 以属性访问的语法 (object.property) 获取值，背后执行方法逻辑。
    - 特性: 无参数，必须有返回值。提供只读访问（若无对应 Setter）。

4.  Setter (`set`)

    - 定义: 使用 `set` 关键字定义的方法，方法名通常与要设置的（逻辑）属性同名。
    - 作用:
        - 当给该“属性”赋值时 (`object.propertyName = newValue`)，Setter 方法会被调用，传入的值作为参数 `value`。
    - 特性:
        - 必须接收一个参数（类型应与“属性”类型一致）。
        - 不能有返回类型注解（隐式返回 `void`）。
    - 最佳实践：
        - 在赋值操作发生时，执行自定义逻辑，最常见的是数据验证。

**代码示例**

1.  使用 Getter 和 Setter 封装私有属性

    ```typescript
    class Account {
      constructor(
        public readonly id: number, // 创建 public readonly id 属性并初始化
        public owner: string, // 创建 public owner 属性并初始化
        private _balance: number // 创建 private _balance 属性并初始化
      ) {}

      // 省略

      get balance(): number {
        return this._balance;
      }

      // 仅作示例，这里的 setter 可能不太合适，因为 balance 通常不应该被直接设置
      set balance(value: number) {
        if (value < 0) {
          throw new Error("Balance cannot be negative.");
        }
        this._balance = value;
      }
    }

    let account = new Account(1, "Alice", 1000);
    console.log(account.balance); // 实际调用 getter 获取余额
    account.balance = 2000; // 使用 setter 设置余额，但这通常不推荐
    ```

## 索引签名

> 简述：在 TypeScript 中，通过(Index Signature)索引签名 `[key: KeyType]: ValueType` 为对象添加 动态 属性，同时保留编译期的类型检查，兼顾 JavaScript 的灵活性与 TypeScript 的严谨性。

**知识树**

1. 动态属性需求

    - JavaScript 允许动态地向对象添加属性。TypeScript 默认强制严格的对象结构（预定义所有属性）。针对某些场景需要动态添加属性，Ts 提供了类型安全的索引签名方式。

2. 索引签名

    - 目的: 为具有动态属性名称的对象提供类型定义。
    - 语法：`[key: KeyType]: ValueType`，`KeyType` 指定键类型，`ValueType` 指定值类型

3. 访问方式

    - 点记法：`obj.prop`（仅在键名是有效的 JavaScript 标识符且在编译时已知时可用，对于动态或非标识符键名不适用。）
    - 方括号记法：`obj["prop"]` / `obj[idx]`来访问或设置属性，因为键通常是动态的或包含特殊字符

4. 类型安全
    - TypeScript 会检查用于索引的键是否符合  KeyType。赋给属性的值是否符合  ValueType。

**代码示例**

1. 动态座位示例

    ```typescript
    class SeatAssignment {
      [seatNumber: string]: string;
    }

    const seats = new SeatAssignment();

    seats.A1 = "Alice";
    seats["A2"] = "Bob";
    seats[`B${3}`] = "Charlie";
    ```

    - 描述：`SeatAssignment` 通过索引签名实现可扩展的「座位 → 姓名」映射，且保持字符串值的类型约束。

## 静态成员

> 简述：静态成员属于类本身，而非类的任何特定实例。 它们用于表示或操作与类整体相关、而非与单个对象实例相关的状态或行为，通常配合 `private` 与 `static get` 使用。

**知识树**

1.  实例成员 vs. 静态成员

    - 实例成员 (Instance Members)
        - 属于类的每个对象实例。每个对象有自己的一份拷贝（属性），方法通过 `this` 访问当前对象的属性。在对象创建 (new) 时初始化。
    - 静态成员 (Static Members)
        - 属于类本身。所有实例共享同一份静态成员。内存中只有一份拷贝。在类定义被加载时初始化，早于任何实例创建。

2.  静态属性/方法 (Static Properties/Methods)

    - 定义
        - 使用 `static` 关键字修饰的属性/方法。
    - 声明方式
        - `static propertyName: type = initialValue;`
        - `static methodName(parameters): returnType { ... }`
    - 目的
        - 存储与类相关、而非与特定实例相关的状态（如全局计数器、配置常量）。
        - 提供与类相关的工具函数或工厂方法，其操作不依赖于任何特定实例的状态。
    - 访问
        - 必须通过类名访问/调用。实例不能直接访问
            - `ClassName.staticPropertyName`
            - `ClassName.staticMethodName(arguments)`

3.  访问控制与静态成员

    - 静态成员同样可以使用访问修饰符 (`public`, `private`, `protected`)。
    - `private static` 成员仅能在类内部通过类名或 `this` (在静态方法内) 访问。
    - 常用于封装类级别的内部状态，并通过公共静态方法（如静态 Getter）提供受控访问。

4.  静态 Getter/Setter

    - 可以使用 `static get` 和 `static set` 定义静态访问器，提供对（通常是私有）静态属性的受控访问。

5.  继承 (Inheritance)补充

    - 静态成员可以被子类继承。
    - 子类可以通过自己的类名访问继承的静态成员 (SubClass.staticMember)。
    - 无多态覆盖：如果子类定义了与父类同名的静态成员（属性或方法），它会隐藏 (shadow)  父类的成员，而非像实例方法那样覆盖。访问时取决于使用哪个类名

**代码示例**

1. 使用静态属性跟踪共享状态

    ```typescript
    class Ride {
      private static _activeRides: number = 0;

      start() {
        Ride._activeRides++;
      }
      stop() {
        Ride._activeRides--;
      }
      static get activeRides() {
        return Ride._activeRides;
      }
    }
    let ride1 = new Ride();
    let ride2 = new Ride();
    ride1.start();
    ride2.start();
    console.log(Ride.activeRides); // Output: 2
    ```

## 继承

> 简述：继承（Inheritance）通过 `extends` 关键字，能让子类（派生类）复用父类（基类）的属性与方法，避免重复代码；子类可添加自身特有成员并借助 `super` 调用父类构造函数。

**知识树**

1. 继承 (Inheritance)

    - 继承是面向对象编程中的一种机制，允许一个类（子类）获取另一个类（父类）的所有（`public`/`protected`）属性和方法，同时可以添加自己特有的功能，减少重复代码。
    - **补充：`protected` 修饰符允许父类成员被子类访问，但不允许外部访问，在继承结构中很有用，但需要按团队需求谨慎使用，一般建议只使用 public 和 private。**

2. 构造函数与参数属性

    - 在构造函数参数前加 `public | private | readonly` 可自动生成并初始化同名属性
    - 若属性已在父类定义，子类构造函数应传参而非再次声明
    - 若只使用父类熟悉，可省略构造函数（也不必写 super）

3. `extends`& `super`关键字

    - `extends`声明继承关系
    - `super` 用于在子类中引用父类，子类通过在构造函数中使用它，来调用父类的构造函数和方法，确保父类的初始化逻辑得到执行。不管父类是否存在属性，只要子类写了构造函数，就必须调用 super，否则报错。

4. 最佳实践

    - 将每个类放在单独的文件中，通过 ES 模块系统进行导入导出，以提高代码的可维护性。

5. 下一节介绍方法重写

**代码示例**

1. Person 与 Student

    ```typescript
    class Person {
      constructor(public firstName: string, public lastName: string) {}

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      walk(): void {
        console.log(`${this.fullName} is walking.`);
      }
    }

    class Student extends Person {
      constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
      }

      // 子类特有的方法
      takeTest(): void {
        console.log(`${this.fullName} (ID: ${this.studentId}) is taking a test.`);
      }
    }

    let student = new Student(1, "John", "Smith");
    // student可以访问Person类的方法和属性，也可以调用Student类特有的方法
    ```

    - 描述：`Student` 继承 `Person`；通过 `super()` 复用父类初始化逻辑，并添加学号与考试方法。

## 方法重写

> 简述：方法重写 (Method Overriding)允许子类提供一个与其父类中已定义的方法（或访问器属性 getter/setter）具有相同名称和签名的特定实现。这使得子类能够改变或扩展继承自父类的行为，以适应自身的特定需求。

**知识树**

1.  方法重写 (Method Overriding)

    - 定义：在子类中重新定义父类中已存在的方法（或访问器），以定制化子类的特定行为。

2.  `override` 关键字：

    - 作用：显式地标记一个方法（或访问器）是对父类成员的重写。
    - 好处：
        - 提高代码清晰度：明确表示该成员意图覆盖父类成员。
        - 编译时检查：如果父类中不存在同名、同签名（或兼容签名）的成员，或者该成员不可重写（例如 `private`），编译器会报错，防止意外错误。

3.  `super` 关键字：

    - 作用：在子类的方法（或访问器）内部，用于调用父类的同名方法（或访问器）的实现。
    - 用途：常用于在重写方法中，基于父类行为进行扩展，而不是完全替换。

4.  `noImplicitOverride` 编译选项：

    - 作用：设置为 `true` 时，强制要求所有重写父类成员的方法或访问器都必须使用 `override` 关键字进行标记，否则编译器会报错。避免无意间的重写（例如，子类偶然定义了与父类同名的方法），增强代码的健壮性和可维护性。

**代码示例**

1.  Teacher 重写 Person 中 `get fullName` 方法

    ```typescript
    class Person {
      constructor(public firstName: string, public lastName: string) {}

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      walk(): void {
        console.log(`${this.fullName} is walking.`);
      }
    }

    class Teacher extends Person {
      override get fullName() {
        return "Professor " + super.fullName;
      }
    }

    let teacher = new Teacher("John", "Doe");
    console.log(teacher.fullName); // Output: Professor John Doe
    ```

## 多态

> 简述：多态（Polymorphism）使得同一接口在不同对象上具有不同实现。通过继承和方法重写，程序可以在运行时动态决定调用哪个具体方法，从而简化条件判断，增强系统的灵活性和可扩展性。

**知识树**

1. 多态的定义

    - 来源：希腊语“poly”（多）与“morph”（形态）
    - 定义：允许同一方法在不同对象中有不同表现；父类引用调用子类重写的方法。

2. 多态的优势

    - 统一接口管理不同子类对象
    - 运行时动态绑定，减少冗长条件判断

3. `TypeScript` vs. `Java`

    - 在 Java 中，多态分为重载（Overloading）与重写（Overriding）
        - 重载：同一类中定义多个同名但参数不同的方法，编译时根据参数类型和数量进行方法选择（静态多态）
        - 重写：子类重新实现父类中已定义的方法，运行时根据对象的实际类型决定调用哪个版本（动态多态）
    - TS 的“重载”只在编译阶段检查类型，最终只有一个实现；不像 Java，运行时会有多个真正的方法体。

4. 开放-封闭原则（Open-Closed Principle）

    - 定义：开闭原则是面向对象设计的一个原则，针对软件实体（类、模块、函数等）
        - 类应对扩展开放（新增子类）
        - 类应对修改封闭（避免修改已有代码，减少错误）
    - 目的/用途：鼓励通过扩展现有代码而非修改现有代码来实现新功能

**代码示例**

1.  演示多态的

    ```typescript
    class Person {
      constructor(public firstName: string, public lastName: string) {}

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      walk(): void {
        console.log(`${this.fullName} is walking.`);
      }
    }

    class Student extends Person {
      constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
      }

      // 子类特有的方法
      takeTest(): void {
        console.log(`${this.fullName} (ID: ${this.studentId}) is taking a test.`);
      }
    }

    class Teacher extends Person {
      override get fullName() {
        return "Professor " + super.fullName;
      }
    }

    printNames([
      new Person("John", "Doe"),
      new Student(1, "Alice", "Smith"),
      new Teacher("Bob", "Johnson"),
    ]);

    function printNames(people: Person[]): void {
      for (const person of people) {
        console.log(person.fullName);
      }
    }
    ```

## 抽象类与抽象方法

> 简述：抽象类（Abstract Classes & Methods）提供统一接口与公共实现但禁止直接实例化；抽象方法仅声明不实现，强制子类给出具体实现，常用于定义模板结构。

**知识树**

1. 抽象类（Abstract Class）

    - 定义：使用  abstract  关键字标记的类
    - 特性：不能被实例化，只能被继承
    - 组成：可以包含普通属性、普通方法、抽象方法的混合

2. 抽象方法（Abstract Method）

    - 定义：使用  abstract  关键字标记的方法
    - 特性：没有实现体，只有方法签名，**必须显式声明返回值为 void**
    - 约束：只能存在于抽象类中，必须由子类实现

3. 抽象类继承关系：

    - 子类必须实现所有抽象方法，否则子类也必须标记为抽象类
    - 子类构造函数必须调用  super()  初始化父类
    - 子类实现抽象方法时应使用  override  关键字

**代码示例**

1. 定义抽象类、抽象方法与实现类

    ```typescript
    abstract class Shape {
      constructor(public color: string) {}
      abstract render(): void; // 抽象方法，无实现
    }

    class Circle extends Shape {
      constructor(public radius: number, color: string) {
        super(color);
      }

      override render(): void {
        console.log("Rendering a circle");
      }
    }
    ```

## 接口

> 简述：接口（Interface）是一种面向对象的设计机制，它定义了一组行为契约，规定了实现者必须提供哪些方法，而不涉及具体的实现细节。接口关注的是“做什么”，而非“怎么做”，通过这种抽象层次的隔离，实现了解耦、多态和灵活扩展

**知识树**

1. 接口定义

    - 接口通过关键字 interface 定义，实现类通过 implements 接口，实现其声明的方法。

2. 接口特点

    - 组成：抽象方法和字段，一般只有抽象方法，不建议写字段，此外字段只能声明类型，不能有实际值
    - 方法：不需要主动修饰，默认抽象
    - 继承：一个接口可以继承另一个接口，默认接收父接口所有属性和方法

3. 快速实现

    - 快捷键：`command`+`.`（缺点是仍然需要手写构造函数）

**代码示例**

1. 接口定义重写与实现

    ```ts
    interface Calendar {
      name: string;
      addEvent(event: any): void;
      removeEvent(event: any): void;
    }

    // 接口继承，CloudCalendar包含Calendar的所有属性和方法
    interface CloudCalendar extends Calendar {
      sync(): void;
    }

    // 实现接口
    class GoogleCalendar implements Calendar {
      constructor(public name: string) {}

      addEvent(): void {
        console.log(`Adding event to Google Calendar`);
      }

      removeEvent(): void {
        console.log(`Removing event from Google Calendar`);
      }
    }
    ```

# Generics

## 需求引入

> 简述：用一个基础 `Key-Value` 类存储整型时，若想存储其他类型（如数字、字符串），会产生代码重复或类型不安全等问题。为了解决这类问题，需要引入泛型。

**知识树**

1. 普通列表的局限

    - 只能固定存储某种类型，无法复用。
    - 若要存储其他类型，需创建新类，代码冗余。

2. 使用 `any` 的问题

    - 存储多类型时，代码冗余且不安全，**无法在编译期发现错误**。
    - 下一节将使用泛型解决这些问题

**代码示例**

1. 非泛型实现导致的问题

    ```typescript
    // 只支持number键和string值的键值对
    class KeyValuePair {
      constructor(public key: number, public value: string) {}
    }

    // 使用时遇到的限制
    const pair = new KeyValuePair(1, "Apple");

    // 错误：key必须是number
    const stringKeyPair = new KeyValuePair("id", "Apple");
    ```

## 泛型类

> 简述：泛型类允许类在定义时不指定具体类型，而在使用时再指定类型参数，从而实现类型安全的复用。

**知识树**

1. 泛型类

    - 语法：
        - 在类名后使用尖括号声明类型参数 `<T>`，类型参数可多个，命名无强制规范（T、U、K、V 常用）
    - 作用：
        - 实例化时指定类型参数

2. 泛型类实例化

    - 显式指定类型参数：`new ClassName<T>()`
    - 多类型参数指定：`new ClassName<T1, T2>()`
    - 类型推断：让编译器自动推断类型

3. 命名约定

    - T (Template)：通用类型参数
    - K (Key)：通常表示键类型
    - V (Value)：通常表示值类型
    - 其他命名：根据语义选择适当的标识符

**代码示例**

1. 多类型参数泛型类

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

## 泛型函数与泛型方法

> 简述：泛型函数允许函数在定义时不指定具体类型，而在调用时由参数决定类型，实现类型安全与高度复用。泛型方法是类中的泛型函数，语法相同，可结合静态/实例用法，提升通用性与类型推断能力。

**知识树**

1. 函数泛型参数

    - 在函数名后用`<T>`声明类型参数，T 可任意命名（如 U、K、V 等）。
    - 参数和返回值可用 T，函数体内 T 由调用时自动推断。

2. 类型安全的复用

    - 泛型函数无需重复定义多个类型版本，避免类型不安全的 any。
    - 同一逻辑可适配任意类型，且类型始终准确贯穿输入与输出。

3. 应用场景

    - 工具函数、转换函数、集合操作等常见于泛型函数。
    - 泛型可扩展为多个类型参数（如`<T, U>`），支持更复杂约束。

4. 类中的泛型方法

    - 类方法可直接加泛型参数，实现类级别的灵活工具（如静态/实例工具方法）。
    - 静态方法更适合“全局工具”，无需创建对象即可用。

**代码示例**

1. 基本泛型函数

    ```typescript
    // 将任意类型值包裹进数组
    function wrapInArray<T>(value: T): T[] {
      return [value];
    }

    const numArray = wrapInArray(123);      // 类型：number[]
    const strArray = wrapInArray("abc");    // 类型：string[]
    ```

    - 描述：`T`自动随传入类型变化，始终保证类型安全和准确。

2. 类中的泛型方法（静态/实例）

    ```typescript
    class ArrayUtils {
      static wrapInArray<T>(value: T): T[] {
        return [value];
      }
    }

    // 无需实例化，直接用
    const arr = ArrayUtils.wrapInArray(true); // boolean[]
    ```

    - 描述：静态方法无需对象，适合工具性质。泛型用法完全一致，类型推断自动进行。

## 泛型接口

> 简述：泛型接口是指接口本身支持类型参数，不限定数据结构具体类型，调用时可指定，适配多种场景，既保证复用性，又保持类型安全。

**知识树**

1. 泛型接口定义

    - 接口名后用`<T>`声明类型参数。
    - 属性、方法可用 T，接口结构通用化。

2. 泛型接口的实际应用

    - 常用于 API 响应结构、通用容器、异步结果包装等。
    - 与泛型函数/类配合，最大化类型推断和安全。

**代码示例**

1. 定义和使用泛型接口

    ```typescript
    interface Result<T> {
      data: T | null;
      error: string | null;
    }

    // 泛型函数返回泛型接口类型
    function fetch<T>(url: string): Result<T> {
      return { data: null, error: null };
    }

    interface User {
      username: string;
    }

    interface Product {
      title: string;
    }

    const userResult = fetch<User>('/api/user');        // Result<User>
    const productResult = fetch<Product>('/api/product'); // Result<Product>
    ```

    - 描述：指定不同 T，接口自动适配不同数据类型，类型推断贯穿始终。

## 泛型约束

> 简述：泛型约束通过 `extends` 限定泛型类型参数的范围，仅允许满足特定类型或结构的类型参与泛型，提高类型安全与表达力。

**知识树**

1. 基本约束

    - 在泛型参数后加 `extends`，限制可用类型。
    - 如：`<T extends number | string>`，T 只能为 number 或 string。

2. 结构约束（形状约束）

    - `extends { name: string }` 只允许带 name 属性的对象。
    - 编译时强制对象具备特定属性结构。

3. 接口约束

    - 通过 `extends SomeInterface`，限定类型必须实现该接口。
    - 强制类型遵循接口契约。

4. 类约束

    - 泛型参数可 extends 某个类。
    - 只接受该类或其子类的实例。

**代码示例**

1. 基本类型约束

    ```typescript
    function echo<T extends number | string>(value: T): T {
      return value;
    }
    // echo(true); // 编译错误
    ```

2. 结构约束

    ```typescript
    function printName<T extends { name: string }>(obj: T): void {
      console.log(obj.name);
    }
    // printName({ name: 'Tom' }); // OK
    // printName({ age: 1 });      // 编译错误
    ```

3. 接口/类约束

    ```typescript
    interface Person { name: string; }
    function greet<T extends Person>(p: T) { console.log(p.name); }

    class Person { constructor(public name: string) {} }
    class Customer extends Person {}

    function showName<T extends Person>(p: T) { console.log(p.name); }

    showName(new Person('Tom'));       // OK
    showName(new Customer('Jerry'));   // OK
    ```

    - 说明：只接受 Person 或其派生类的实例。

## 泛型类与继承

> 简述：泛型类通过类型参数实现通用数据结构，继承时可选择“传递、收紧或固定”类型参数，灵活适应多样场景，既保持扩展性又不丧失类型安全。

**知识树**

1. 泛型类定义

    - 类名后加`<T>`声明类型参数。
    - 内部成员、方法可用 T，数据结构与类型解耦。

2. 泛型成员修饰符

    - `private`成员仅限自身访问，子类无法继承。
    - `protected`成员自身和子类可用，适合受控继承。

3. 泛型类的继承方式

    - 传递类型参数：子类也声明`<T>`，继承父类泛型并继续泛型化。
    - 约束类型参数：子类声明`<T extends ...>`，对子类泛型参数加以限制。
    - 固定类型参数：子类不声明泛型，直接指定具体类型，父类泛型“终结”。

4. 类型约束与成员可访问性

    - 子类需访问父类成员时，需将父类成员设为`protected`。
    - 如需依赖泛型属性（如`name`），需加类型约束（如`T extends { name: string }`）。

**代码示例**

1. 泛型类和辅助接口定义

    ```typescript
    class Store<T> {
      protected _objects: T[] = [];
      add(obj: T) {
        this._objects.push(obj);
      }
    }

    interface Product {
      name: string;
      price: number;
    }
    ```

2. 传递类型参数

    ```typescript
    class CompressibleStore<T> extends Store<T> {
      compress() {
        /* ... */
      }
    }
    const c = new CompressibleStore<Product>();
    ```

    - 说明：子类继续泛型，灵活适配任意类型。

3. 约束类型参数

    ```typescript
    class SearchableStore<T extends { name: string }> extends Store<T> {
      find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name);
      }
    }
    ```

    - 说明：限制 T 必须有`name`属性，确保 find 方法类型安全。

4. 固定类型参数

    ```typescript
    class ProductStore extends Store<Product> {
      filterByCategory(category: string): Product[] {
        return []; // 仅适用于Product
      }
    }
    ```

    - 说明：泛型参数已终结，子类专用于某具体类型。

## keyof 操作符

> 简述：`keyof` 是 TypeScript 的类型操作符，用于生成某个类型所有属性名的联合类型。它让泛型方法或数据结构只允许操作实际存在的属性，实现类型安全的动态访问。

**知识树**

1. keyof 的定义

    - 语法：`keyof T`，返回类型 T 所有属性名的联合字面量类型。

2. 泛型与 keyof 配合

    - 常用于泛型方法参数，让参数只能是目标类型已有属性名，防止拼写错误或非法访问。

3. 动态属性安全访问

    - 结合索引访问（如 `obj[key]`），保证 property 一定是对象已声明属性，编译期校验。
    - 规避 any/unknown 访问导致的运行时错误。

4. 错误捕获与类型推断

    - 非法属性编译时报错，提升 API 可靠性。
    - 支持类型推断，参数智能提示。

**代码示例**

1. 基本用法与类型保护

    ```typescript
    interface Product {
      name: string;
      price: number;
    }

    class Store<T> {
      protected objects: T[] = [];
      add(obj: T) { this.objects.push(obj); }

      find<K extends keyof T>(property: K, value: T[K]): T | undefined {
        return this.objects.find(obj => obj[property] === value);
      }
    }

    const store = new Store<Product>();
    store.add({ name: "A", price: 1 });

    // 正确：只允许 name 或 price
    store.find("name", "A");
    store.find("price", 1);

    // 错误：非 Product 属性，编译报错
    // store.find("category", "x");
    ```

    - 描述：`property` 只能为 `name` 或 `price`，`value` 类型自动推断。

## 映射类型与工具类型

> 简述：映射类型让我们基于现有类型批量动态生成新类型（如只读、可选、可空等），避免重复定义，极大提升类型系统的灵活性与表达力。TypeScript 内置了常用的映射工具类型。

**知识树**

1. 映射类型的写法

    - 结构：`{ [K in keyof T]: ... }`，K 遍历 T 所有属性名。
    - 属性类型可为 `T[K]`（取原始类型）。

2. 典型用法

    - 只读类型：加 `readonly` 前缀，属性不可修改。
    - 可选类型：加 `?` 后缀，属性变为可选。
    - 可空类型：类型加 `| null`，属性可为 null。
    - 泛型参数支持任意对象类型。

3. 内置工具类型

    - `Readonly<T>`：全部属性只读。
    - `Partial<T>`：全部属性可选。
    - `Required<T>`：全部属性必填。
    - `Nullable<T>`（需自定义或用 `T | null`）。
    - 更多见 TypeScript [官方文档](https://www.typescriptlang.org/docs/handbook/utility-types.html)：

**代码示例**

1. 自定义映射类型

    ```typescript
    interface Product {
      name: string;
      price: number;
    }
    type ReadonlyType<T> = { readonly [K in keyof T]: T[K] };
    type OptionalType<T> = { [K in keyof T]?: T[K] };
    type NullableType<T> = { [K in keyof T]: T[K] | null };

    const p: ReadonlyType<Product> = { name: "A", price: 1 };
    p.name = "B"; // 编译错误，属性只读
    ```

2. 使用内置工具类型

    ```typescript
    type ReadonlyProduct = Readonly<Product>;
    type PartialProduct = Partial<Product>;
    ```

    - 描述：官方工具类型等价于自定义映射写法，但更简洁。

# Decorators

## 什么是装饰器

> 简述：装饰器是一种特殊语法，允许为类、属性、方法、参数动态添加元数据或改变其行为。常用于框架（如 Angular、Vue）中，将普通类转化为组件、服务等功能实体。

**知识树**

1. 装饰器本质

    - 本质：函数，用于拦截、扩展或修改类及其成员。
    - 语法：在类、方法、属性、参数前加`@装饰器名`。
    - 作用：注入元数据，动态增强或改变类和成员的行为。

2. 典型用途

    - 自动注册组件、依赖注入、方法拦截、数据校验、自动日志等。
    - 框架：Angular、Vue 等前端框架提供丰富的内建装饰器，非框架项目需手写装饰器。

3. 执行机制

    - TypeScript 编译时将装饰器语法转为 JS 的函数调用，运行时自动执行装饰器函数。
    - 装饰器函数接收被装饰对象（如构造函数、属性名等），可添加、修改、替换属性或方法。

4. 启用条件

    - TypeScript 默认未启用，需在 `tsconfig.json` 中配置 `"experimentalDecorators": true`。

**代码示例**

1. 装饰器基本用法

    ```typescript
    @Component
    class ProfileComponent {}

    // 其中 @Component 是一个函数，接收 ProfileComponent 类进行处理（需手写实现）。
    ```

## 类装饰器

> 简述：类装饰器本质是一个接收构造函数为参数的函数，用于动态增强类的属性和方法。装饰器只在类声明时运行一次，可批量注入功能或元数据，常用于框架式开发。

**知识树**

1. 装饰器函数定义

    - 装饰器本质是函数，**首字母大写**，单参数为类构造函数（类型为`Function`）。
    - 只要参数类型（类装饰器一般命名参数为 constructor）为函数，TypeScript 就能识别为类装饰器。

2. 增强与扩展

    - 装饰器函数内可操作构造函数和其原型，批量添加/修改属性和方法。
    - 所有实例均能访问通过原型添加的成员。

3. 运行时机与机制

    - 类装饰器在类定义阶段自动调用一次（不需实例化）。
    - 编译产物中，TypeScript 自动插入装饰器调用逻辑（如 `__decorate` 工具函数）。

4. 与继承的关系

    - 装饰器增强行为类似继承，但更解耦、更灵活。
    - 可动态为任意类增加横切能力，无需继承层级。

**代码示例**

1. 自定义类装饰器

    ```typescript
    function Component(constructor: Function) {
      console.log("Component decorator called");
      constructor.prototype.uniqueId = Date.now();
      constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
      };
    }

    @Component
    class ProfileComponent {}
    ```

2. 生成代码说明

    ```js
    // 编译后自动插入类似 __decorate([Component], ProfileComponent) 的调用
    // 由此触发装饰器函数
    ```

## 参数化装饰器

> 简述：装饰器工厂允许为装饰器传递参数。本质是返回装饰器函数的高阶函数，实现装饰器灵活配置。常用于框架中批量注入元数据或定制行为。

**知识树**

1. 装饰器工厂定义

    - 工厂函数接受参数，返回一个标准装饰器函数。
    - 典型语法：`@Decorator(args)`。

2. 应用场景

    - 注入元数据（如 selector、路由配置、校验规则等）。
    - 使装饰器通用，可按需传递自定义参数。

3. 工厂与标准装饰器的关系

    - 工厂函数只负责参数收集，不直接操作目标。
    - 返回的内部装饰器函数才实际增强目标（如类、方法等）。

4. 实现步骤

    - 定义工厂类型与参数类型（如 `ComponentOptions`）。
    - 工厂返回标准装饰器函数，内部可访问参数并操作目标对象。

**代码示例**

1. 参数化类装饰器

    ```typescript
    type ComponentOptions = { selector: string };

    function Component(options: ComponentOptions) {
      return (constructor: Function) => {
        constructor.prototype.options = options;
        // 可利用 options 做更多操作
      };
    }

    @Component({ selector: "my-profile" })
    class ProfileComponent {}
    ```

    - 描述：工厂模式支持灵活注入不同配置。

## 多个装饰器的应用与调用顺序

> 简述：可在同一类（或成员）上应用多个装饰器，装饰器按\*\*从下到上（自下而上）\*\*的顺序依次执行，每个装饰器依次包裹目标对象，行为类似函数组合（f(g(x))）。

**知识树**

1. 多装饰器语法

    - 多个装饰器可叠加在同一目标上，逐行书写，先写在下方。
    - 语法：

        ```typescript
        @First
        @Second
        class MyClass {}
        ```

2. 调用顺序

    - 装饰器的执行顺序为自下而上（从最近一行为先）。
    - 数学类比：`@A @B target`，先执行 B，再执行 A，相当于 A(B(target))。

3. 增强与叠加效果

    - 每个装饰器都可增强、修改或替换目标对象。
    - 后执行的装饰器可以基于前一个装饰器的结果继续增强。

**代码示例**

1. 多装饰器定义与应用

    ```typescript
    function Pipe(constructor: Function) {
      console.log("Pipe decorator called");
      constructor.prototype.pipe = true;
    }

    function Component(constructor: Function) {
      console.log("Component decorator called");
      constructor.prototype.component = true;
    }

    @Component
    @Pipe
    class ProfileComponent {}

    // 输出顺序：
    // Pipe decorator called
    // Component decorator called
    ```

    - 描述：先 Pipe，再 Component，装饰器作用依次叠加。

## 方法装饰器

> 简述：方法装饰器用于拦截和增强类中方法，可在调用前后插入逻辑、修改或替换方法实现。其本质是一个带三个参数的函数，操作目标方法的属性描述符。

**知识树**

1. 方法装饰器定义

    - 签名：`(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void`
    - 参数说明：
        - `target`：方法所属对象（原型）。
        - `propertyKey`：方法名。
        - `descriptor`：属性描述符，包含方法本体等元信息。

2. 增强与重写

    - 可直接用`descriptor.value`替换原方法，实现完全重写。
    - 典型增强模式：缓存原方法，执行前后插入逻辑（如日志、校验、权限等），中间调用缓存的原方法
    - 注意：用 `function` 关键字定义新方法，不可用箭头函数，确保 this 正确绑定。

3. 兼容性与灵活性

    - 可支持任意参数类型与数量：用`...args: any[]`收参，`original.apply(this, args)`转发。
    - 通用增强一切方法。

4. 编译配置

    - 如有未使用参数，须关闭 `noUnusedParameters`。

**代码示例**

1. 方法装饰器实现与应用

    ```typescript
    function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
      descriptor.value = function (...args: any) {
        console.log("Before");
        original.call(this, ...args); // 也可以使用 apply，需要手动return
        console.log("After");
      };
    }

    class Person {
      @Log
      say(message: string) {
        console.log("Person says", message);
      }
    }

    const p = new Person();
    p.say("hello");
    // 输出顺序：Before -> Person says hello -> After
    ```

    - 说明：可拦截并增强任何方法，且参数类型灵活。

## 访问器装饰器

> 简述：访问器装饰器用于拦截和增强类的 getter 或 setter，能动态改变访问器的行为，如自动转换、格式化等。本质是接管属性描述符的 `get` 或 `set` 方法。

**知识树**

1. 装饰器函数签名

    - 三参数：`(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void`
    - 与方法装饰器参数完全相同。

2. 核心机制

    - `descriptor.get`（getter）/ `descriptor.set`（setter）是对应的原始函数。
    - 可保存原始 getter/setter，重定义为新函数，实现增强。
    - 新 getter 内可调用原始 getter (`original.call(this)`)，对返回值处理后返回。

3. 类型安全与健壮性

    - `original` 可能为 undefined（编译器角度），可以在 get 处用 `!` 断言消除警告，也可以在调用处使用`?`
    - 应判断返回值类型，防止类型不符导致报错。

4. 常见应用

    - 自动格式化输出（如大写、日期格式化）
    - 自动数据校验、转换
    - 透明增强 getter/setter，无需修改原有逻辑

**代码示例**

1. 大写化 getter 输出的装饰器

    ```typescript
    function Capitalize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const original = descriptor.get!;
      descriptor.get = function() {
        const result = original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
      };
    }

    class Person {
      constructor(public firstName: string, public lastName: string) {}

      @Capitalize
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }

    const p = new Person("tom", "lee");
    console.log(p.fullName); // 输出: TOM LEE
    ```

    - 描述：自动将 getter 返回值转大写，非字符串类型不处理。

## 属性装饰器

> 简述：属性装饰器用于拦截和增强类属性行为，可实现如数据校验、自动格式化等逻辑。其本质是在类定义阶段用元编程手段替换属性的默认存取方式。

**知识树**

1. 属性装饰器定义

    - 语法：
        - 可为参数化装饰器（装饰器工厂）。
    - 装饰器函数签名：
        - `(target: any, propertyKey: string) => void`
    - 区别于方法/访问器装饰器：
        - 没有属性描述符参数，只有两个参数 。
    - 作用
        - 支持接收参数，实现如最小长度校验、格式限制等功能。

2. 通过 `Object.defineProperty` 增强

    - 方式：
        - 在属性装饰器函数内部，使用 `Object.defineProperty` 来重新定义该属性，为其添加自定义的 `get` 和 `set` 访问器。
    - 实现：
        - 定义一个内部变量来存储实际的属性值。
        - 在 `set` 访问器中：执行验证逻辑，如果有效，则更新内部变量。
        - 在 `get` 访问器中：返回内部变量的值。
    - 注意：属性装饰器用 `Object.defineProperty` 拦截属性赋值时，不能像普通类成员那样直接保存和访问属性的值，所以必须在装饰器作用域内声明一个变量，用来存放这个属性的实际数据。

**代码示例**

1. 带最小长度校验的属性装饰器

    ```typescript
    function MinLength(length: number) {
      return function (target: any, propertyKey: string) {
        let value: string;

        const descriptor = {
          get() {
            return value;
          },
          set(newValue: string) {
            if (newValue.length < length)
              throw new Error(
                `${propertyKey} should be at least ${length} characters long.`
              );
            value = newValue;
          },
        };

        Object.defineProperty(target, propertyKey, descriptor);
      };
    }

    class User {
      @MinLength(4)
      password: string;

      constructor(password: string) {
        this.password = password;
      }
    }

    const u = new User("abcd"); // OK
    // u.password = "a";        // 抛出异常
    ```

    - 描述：每次设置 password 都会先执行装饰器校验。

## 参数装饰器

> 简述：参数装饰器用于标记和收集方法参数的元数据，常见于框架内部做依赖注入、参数校验等。应用场景罕见，但为元编程和自动化框架设计提供强大能力。

**知识树**

1. 参数装饰器定义

    - 装饰器函数签名：`(target: any, methodName: string, parameterIndex: number) => void`
    - 三个参数：
        - `target`：方法所属对象（类的原型）。
        - `methodName`：方法名。
        - `parameterIndex`：被装饰参数的位置索引。

2. 功能

    - 局限：
        - 属性装饰器本身不能直接修改属性的初始化方式或值，因为它在属性描述符应用之前执行。
    - 主要用途：
        - 记录元数据（反射元数据 API 常与此结合）。

**代码示例**

1. 元数据收集型参数装饰器

    ```typescript
    type WatchParameter = {
      methodName: string;
      parameterIndex: number;
    };

    // 用于存储元数据的数组 (通常更复杂的元数据反射系统会用到)
    const watchedParameters: WatchParameter[] = [];

    // 1. 定义参数装饰器
    function Watch(target: any, methodName: string, parameterIndex: number) {
      // 2. 记录元数据
      watchedParameters.push({
        methodName,
        parameterIndex,
      });
    }

    class Vehicle {
      move(@Watch speed: number) {}
    }

    // 验证 (装饰器在类定义时执行)
    console.log("Watched Parameters Metadata:", watchedParameters);
    // 输出类似:
    // Watched Parameters Metadata: [ { methodName: 'move', parameterIndex: 0 } ]
    ```

    - 描述：此例标记并收集需“关注”的参数，供后续框架逻辑处理。

# Modules

## 模块化与导入导出

> 简述：模块化通过将代码拆分到多个文件，每个文件作为独立模块，实现高内聚、低耦合，提升可维护性与团队协作效率。TypeScript 用 `export`/`import` 实现模块成员共享。

**知识树**

1. 导出（export）

    - 方式：用 `export` 关键字声明模块外可见的类、接口、函数等。一个文件可导出多个对象。

2. 导入（import）

    - 方式
        - 用 `import { 名称 } from "路径"` 引用其它模块导出内容。路径为相对路径（`./` 当前目录，`../` 上级目录），不写文件扩展名。
    - 命名
        - 可重命名导入防止命名冲突：`import { Circle as MyCircle } from "./shapes"`，默认使用原始名称

3. 快捷键

    - VS Code 支持使用`command+.`实现自动导入、清理未用导入等快捷操作。

**代码示例**

1. `shapes.ts`

    ```typescript
    export class Circle { constructor(public radius: number) {} }
    export class Square { constructor(public size: number) {} }
    ```

2. `index.ts`

    ```typescript
    import { Circle, Square } from "./shapes";

    const c = new Circle(1);
    console.log(c.radius);
    ```

## 模块格式

> 简述：模块格式（Module Formats）是指 JS/TS 项目编译后采用的代码组织和加载方式。现代项目主流为 ES 模块（ESM）和 CommonJS，历史上还有 AMD、UMD 等。TypeScript 支持多种格式，**自动**将 `import`/`export` 语法转换为目标格式。

**知识树**

1. 主流模块格式

    - ESM（ES Modules）：原生支持 `import`/`export`，适用于现代浏览器和新版本 Node.js。
    - CommonJS：Node.js 早期标准，使用 `require()` 和 `module.exports`/`exports`。
    - AMD/UMD：早期浏览器/混合场景方案，已基本被淘汰。

2. TypeScript 配置

    - 在 `tsconfig.json` 的 `module` 字段选择输出格式：`"commonjs"`、`"es2020"`、`"amd"`、`"umd"` 等。
    - 编译器会根据设置自动转换 import/export 语法为对应格式，无需手写。

3. 代码产物差异

    - CommonJS：
        - 导出：`exports.Circle = Circle`
        - 导入：`const shapes = require("./shapes")`
    - ESM：
        - 导出：`export class Circle {}`
        - 导入：`import { Circle } from "./shapes.js"`

4. 场景选择

    - 浏览器/现代 Node.js：推荐使用 ESM
    - 旧 Node.js 项目/某些构建工具：使用 CommonJS
    - 特殊需求才考虑 AMD/UMD

## 默认导出与命名导出

> 简述：**默认导出**用于模块只暴露一个主要对象时，简化导入语法，隐藏内部细节；**命名导出**用于暴露多个对象。两者可共存，用于精细控制模块接口，降低模块间耦合。

**知识树**

1. 默认导出（default export）

    - 语法：`export default 对象`
    - 每个模块只能有一个默认导出
    - 导入时不需花括号，可自定义导入名

2. 命名导出（named export）

    - 语法：`export { 对象 }` 或 `export class/enum/const`
    - 同一模块可导出多个对象
    - 导入时需用花括号，名称需对应

3. 默认导出与命名导出的组合

    - 同一模块可同时存在一个默认导出和多个命名导出
    - 导入时可一行同时引入

**代码示例**

1. storage.ts

    ```typescript
    export default class Store {} // 默认导出
    export enum Format {
      Raw,
      Compressed,
    } // 命名导出
    class Compressor {}
    class Encryptor {}
    ```

2. index.ts

    ```typescript
    import Store, { Format } from "./storage";

    const s = new Store();
    const f = Format.Raw;
    ```

    - 描述：默认导出（无花括号），命名导出（花括号）。

## 通配符导入

> 简述：通配符（Wildcard Import）导入将模块所有导出对象整体引入为一个命名空间，便于批量访问和模块归类，减少冗长的 `import` 语句。

**知识树**

1. 语法与用法

    - 语法：`import * as 命名空间 from "模块路径"`
    - 所有导出成员都成为命名空间对象的属性，通过 `命名空间.成员名` 访问

2. 适用场景

    - 批量使用模块多个成员时，避免多行 import
    - 便于代码归类、命名空间管理

3. 命名空间对象

    - 命名空间对象为只读，不可整体赋值
    - 不含 `default` 成员（如有默认导出不会被包含）
    - 不适合需要频繁重命名成员的场景

**代码示例**

1. `shapes.ts`

    ```typescript
    export class Circle { /* ... */ }
    export class Square { /* ... */ }
    ```

2. `index.ts`

    ```typescript
    import * as Shapes from "./shapes";

    const c = new Shapes.Circle(1);
    const s = new Shapes.Square(2);
    ```

## 重导出

> 简述：重导出（Re-exporting）让一个模块可组合、聚合并统一导出多个子模块内容。实现“包裹式”API 管理，让外部只需从一个入口导入所需成员，提升结构清晰度和可维护性。

**知识树**

1. 概念与动机

    - 将多个子模块成员集中出口，隐藏具体文件结构。
    - 便于模块分层、项目解耦、接口聚合，外部只需“单入口”导入。

2. 结构与实践

    - 子模块（如 `circle.ts`、`square.ts`）分别单独导出类/函数。
    - 目录下设立 `index.ts`，统一导入并重导出子模块内容。

3. 重导出语法

    - 标准方式：
        ```typescript
        import { Circle } from "./circle";
        import { Square } from "./square";
        export { Circle, Square };
        ```
    - 简写（推荐）：
        ```typescript
        export * from "./circle";
        export * from "./square";
        ```

4. 模块/包索引文件

    - 目录下的 `index.ts` 自动被识别为该文件夹的主入口。
    - 导入时只需 `import { Circle } from "./shapes"`，无需写 `/index`（需配置模块解析）。

5. 模块解析配置

    - 在 `tsconfig.json` 中设置 `"moduleResolution": "node"`，保证索引文件自动识别，防止导入错误。
    - 配置完成后可能需要重启 VScode

**代码示例**

1. 目录结构
    ```
    src/
      shapes/
        circle.ts
        square.ts
        index.ts
      index.ts
    ```
2. shapes/circle.ts
    ```typescript
    export class Circle { /* ... */ }
    ```
3. shapes/square.ts
    ```typescript
    export class Square { /* ... */ }
    ```
4. shapes/index.ts
    ```typescript
    export * from "./circle";
    export * from "./square";
    ```
5. 使用方式（index.ts）
    ```typescript
    import { Circle, Square } from "./shapes";
    ```

# Integration with JavaScript

## JavaScript 混用

> 简述：TypeScript 可与现有 JavaScript 文件共存、互相导入，但需适当配置。可渐进式迁移老项目，或与第三方 JS 库集成开发。

**知识树**

1. 支持 JS 文件的配置

    - `tsconfig.json` 中开启 `allowJs: true`，TypeScript 才会编译/检测 `.js` 文件。
    - `.js` 文件不能用 TS 语法（如类型注解）。

2. 模块格式兼容性

    - 若导入 JS 文件遇到 `cannot use import statement outside a module` 错误，多因 `module` 设为 `es` 导致。改为 `commonjs` 解决兼容问题。

3. 导入写法与行为

    - 直接 `import` JS 导出的函数、类、变量等（与 TS 文件一样）。

**代码示例**

1. `tax.js`

    ```javascript
    export function calculateTax(income) {
    	return income * 0.3;
    }
    ```

2. `index.ts`

    ```typescript
    import { calculateTax } from "./tax";

    const t = calculateTax(10000);
    console.log(t);
    ```

3. `tsconfig.json` 关键配置

    ```json
    {
    	"allowJs": true,
    	"module": "commonjs"
    }
    ```

## JavaScript 文件类型检查

> 简述：通过 `checkJs` 配置，TypeScript 可以对 JS 文件进行基本类型检查，帮助早期发现潜在运行时错误。可用特殊注释关闭检查，实现渐进式迁移与局部豁免。

**知识树**

1. 启用类型检查

    - 启用方式：
        - 在 `tsconfig.json` 配置 `"checkJs": true`，TypeScript 对 `.js` 文件做静态分析和基础类型检查。
    - 效果：
        - 报错粒度不如 `.ts` 文件细致，但能发现明显错误（如未传参数、参数类型不符等）。
    - 额外影响
        - 参数未注解时，类型为 `any`，严格模式（如 `noImplicitAny`）下会报错。而 JS 中没有这种方式。有几种方法解决。
            - 取消 `noImplicitAny`（不推荐）
            - 在 JS 文件顶部加注释：`// @ts-nocheck`，本文件跳过所有 TS 检查。

2. 下节介绍 JSDoc 解决方式

**代码示例**

1. `tsconfig.json`

    ```json
    {
    	"allowJs": true,
    	"checkJs": true
    }
    ```

2. `tax.js` 报错/豁免用法

    ```javascript
    // @ts-nocheck

    export function calculateTax(income) {
    	return income * 0.3;
    }
    ```

    - 描述：移除 `@ts-nocheck` 后，如果参数没类型，会因 `noImplicitAny` 报错。

## JSDoc 类型注释

> 简述：JSDoc 是一种特殊注释语法，可为 JavaScript 代码补充类型信息和文档说明，让 TypeScript 实现类型推断与类型检查，提升 JS 代码的安全性与可维护性。

**知识树**

1. JSDoc 基本语法

    - 用 `/** ... */` 注释块，配合 `@param`、`@returns` 等标签标注类型与描述。
    - 类型写在大括号内，如 `{number}`、`{string}`。
    - 例：`@param {number} income`、`@returns {number}`。

2. TypeScript 集成

    - TS 会读取 JSDoc 注释，**在编译期间**实现参数类型检查与代码提示。
    - 没有注解时，参数默认为 `any`，有注解即参与类型推断和检查。

3. 文档与提示增强

    - 功能：JSDoc 可写函数描述、参数说明，IDE 悬浮可见，增强协作与自解释性。
    - 定义：在参数后通过 `@Param parameter - description` 的形式添加描述

**代码示例**

1. `tax.js`

    ```javascript
    /**
     *
     - @param {number} income
     - @returns {number}
     */
    export function calculateTax(income) {
    	return income * 0.3;
    }
    ```

    - 移除 `@ts-nocheck` 后，TS 可识别类型，调用时参数缺失会报错。
    - 悬浮可见参数与函数说明。

## 声明文件

> 简述：声明文件（`.d.ts`）为 JS 文件提供类型信息，不需改动源代码。它描述模块导出内容，让 TypeScript 能类型检查并智能提示，适合渐进迁移、第三方库集成。缺点是必须声明所有模块，缺一不可。

**知识树**

1. 作用与原理

    - 功能：
        - `.d.ts` 文件仅声明类型、不含实现，TS 用于类型推断和校验，**不参与实际代码运行**。
    - 命名：
        - 文件名需与目标 JS 文件一致，如 `tax.js` 配 `tax.d.ts`。
    - 方式：
        - 类似 C/C++ 的头文件，接口与实现分离。

2. 基本语法

    - `declare function`/`declare const`/`declare class` 描述导出内容和类型签名。
    - 需用 `export` 导出声明，匹配实际 JS 模块导出。

3. 缺点

    - **所有要暴露给 TS 的功能都要在 `.d.ts` 文件中声明，否则 TS 视为不存在**。
    - 编译器中的隐式 any 报错依然保持显式，但没有实际影响

4. 使用场景

    - 不想/不能直接修改 JS 源码（如第三方、已有大型 JS 项目）
    - 为第三方/已有 JS 库补充类型信息（可手写、或用工具自动生成）

**代码示例**

1. 配合使用正常编译

    ```javascript
    // `tax.js`
    export function calculateTax(income) {
    	return income * 0.3;
    }

    // `tax.d.ts`
    export declare function calculateTax(income: number): number;
    ```

2. 必须声明所有模块

    ```typescript
    // 如果`tax.js`多加了一个模块
    export function calculateTax(income) {
    	return income * 0.3;
    }
    export function sayHello() {
    	return "Hello!";
    }

    // `tax.d.ts`
    export declare function calculateTax(income: number): number;
    // 若未声明 sayHello，TS 视为 tax 模块无此导出


    // index.ts
    import { calculateTax, sayHello } from "./tax";
    // sayHello 将会报错，TS 视为 tax 模块未导出该成员
    calculateTax(); // 报错，需传 income 参数
    ```

## 第三方 JavaScript 库的类型声明

> 简述：TypeScript 项目引入第三方 JS 库时，需类型声明文件（`.d.ts`），才能获得类型检查与智能提示。可以使用“Definitely Typed”社区维护的 `@types/xxx` 包，获直接使用自带声明的库。

**知识树**

1. 声明文件需求

    - 绝大多数 JS 库本身没有类型声明文件（`.d.ts`），TS 无法类型检查也无智能提示，导入时报错。
    - 注意：类型声明文件只参与开发和编译，不会被打包或部署。

2. 社区声明仓库：Definitely Typed

    - 说明：
        - 大部分主流 JS 库的类型声明由社区统一维护在 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 仓库。
    - 使用方式
        - 通过 npm 安装 `@types/库名`（如 `@types/lodash`），通常作为开发依赖（`-D`即`--save-dev`）。

3. 一体化类型声明

    - 现代 JS/TS 库越来越多自带 `.d.ts`，无需额外安装 `@types/` 包（如 chalk）。

**代码/命令示例**

1. 使用 Lodash（需社区声明）

    ```bash
    npm install lodash
    npm install -D @types/lodash
    # npm install --save-dev @types/lodash
    ```

    ```typescript
    import * as _ from "lodash";
    const arr = [1, 2, 3];
    const copy = _.clone(arr); // 类型自动推断为 number[]
    ```

2. 使用自带声明的库（如 chalk）

    ```bash
    npm install chalk
    ```

    - 描述：无需装 `@types/chalk`，库本身自带 `.d.ts`，位置`node_modules/chalk/index.d.ts`
