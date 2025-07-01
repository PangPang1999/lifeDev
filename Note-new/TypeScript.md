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
    {
      let age: number = 25;
    }
    ```

    - 描述：编写过程中，变量 age 无法再变成其他类型比如字符串。使用`tsc index.ts`后，生成文件代码部分变为`var age = 25;`，因为默认使用了 ES5。

## 配置文件

> 简述：介绍如何创建 tsconfig.json 配置文件，并设置关键编译选项。

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

3. 编译流程

    - 保存配置文件后，运行 `tsc` 命令可自动编译项目中所有 .ts 文件
    - 编译结果存放于 outDir 指定的目录

4. 示例介绍

    - 创建配置文件，并修改对应选项
    - 移除之前生成的 `index.js` 文件，创建文件夹 `src` 将 `index.ts` 放入

## 调试

> 简述：介绍如何在 VS Code 中调试 TypeScript 应用。通过启用 Source Map、设置断点、配置 launch.json 以及使用调试工具，开发者可以逐步运行代码、观察变量变化，从而快速定位问题。

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
