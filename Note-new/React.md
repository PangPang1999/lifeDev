**Prerequisites**

- JavaScript
- HTML&CSS

# Start

## 什么是 React？

> 简述：React 是用于构建动态、交互式用户界面的 JavaScript 库。它通过“组件”将页面拆分为可复用模块，简化了前端开发复杂性，是现代前端主流技术。

**知识树**

0. 什么是 DOM

    - DOM，即 Document Object Model，意思是网页其实是一个树状结构，分为一个个节点，每个节点都代表着文档的一部分，例如元素、属性或文本。比如每一个网页都属于一个个节点，而网页中的元素、文本，属性、注释等，也是一个个节点。这种结构允许我们通过遍历节点来访问和操作文档的任何部分。DOM 使得 JavaScript 以及其他脚本语言能够访问网页、修改网页比如结构样式和响应用户事件

1. React 定义与作用

    - JavaScript 库，专注于“视图层”开发（UI）
    - 用于构建动态、交互、响应式网页

2. 核心优势

    - 组件化开发：将页面拆分为小型、独立、可复用的“组件”
    - 声明式编程：描述“界面应有的样子”，由 React 负责更新 DOM
    - 高效渲染：自动高效地更新、同步 DOM（虚拟 DOM 技术）

3. 对比传统开发

    - 原生 JS（Vanilla JS）：直接操作 DOM，复杂且易错
    - React：只需描述组件结构和状态，无需关心 DOM 操作细节

4. 组件树结构

    - 应用 = 组件树（根节点 App，分支为各个 UI 模块）
    - 组件可组合、可嵌套，组织代码更清晰、可维护性更强

5. 例子描述

    - 网页分为导航栏、侧边栏、内容区、卡片、点赞按钮等，都可独立为组件，灵活组合构建复杂页面。

## 环境准备与工具推荐

> 简述：React 开发需 Node.js 运行环境与现代代码编辑器（如 VS Code），推荐配合自动格式化插件提升开发体验。

**知识树**

1. Node.js 版本检查与安装

    - 打开终端输入 `node -v` 查看 Node.js 版本
    - 版本偏旧影响极小，建议 Node16 以上，如 19.6，使用 homebrew 安装或者前往官网

2. 编辑器选择与设置

    - 推荐 Visual Studio Code (VS Code)，安装 Prettier 插件，建议开启 formatOnSave

## React 项目创建工具

> 简述：新建 React 项目推荐使用 Vite（现代、极快），替代传统 Create React App，流程简单、高效，适合 TS/JS 项目。

**知识树**

1. 工具选择

    - Create React App（CRA）：React 官方传统工具，较慢、已逐步被淘汰
    - Vite：新一代前端构建工具，速度极快、配置灵活、生态完善

2. Vite 创建项目流程

    1. 新建项目命令：
        - 推荐使用和我同版本`npm create vite@4.1.0`
        - 安装最新版本命令：`npm create vite@latest`
    2. 选择项目名称（如 react-app）
    3. 选择框架（React）
    4. 选择语言（TypeScript 推荐，或 JavaScript）
    5. 进入目录安装依赖：
        - `cd react-app`，`npm install`
    6. 启动开发服务器：
        - `npm run dev`
    7. 浏览器访问提示地址，查看效果
        - 一般为`http://localhost:5173`

## React/Vite 项目结构

> 简述：React/Vite 项目由依赖目录、资源目录、源码目录、配置文件等核心部分组成，结构清晰，易于维护。

**知识树**

1. 依赖管理

    - `node_modules`：第三方库和工具，无需手动修改

2. 静态资源

    - `public/`：静态资源（如图片、视频），最终直接映射到网站根目录

3. 源代码

    - `src/`：项目源代码，主要开发区域。初始包含 `App` 组件，通常一切从这里开始

4. 入口文件与挂载

    - `index.html`：网页模板，包含唯一的 `<div id="root">`，React 应用挂载点
    - `<script src="/src/main.tsx">`：应用入口脚本

5. 项目配置

    - `package.json`：项目元数据、依赖、脚本、版本管理等
        - `dependencies`：生产环境依赖（如 react）
        - `devDependencies`：开发环境依赖（如类型声明、构建工具）
    - `tsconfig.json`：TypeScript 编译配置，通常不用更改
    - `vite.config.ts`：Vite 构建与开发配置，通常不用更改

## React 函数组件与 JSX

> 简述：现代 React 推荐函数式组件，配合 JSX 语法，能用类 HTML 方式声明动态 UI，并轻松复用、组合与条件渲染。

**知识树**

1. `.ts` 与 `.tsx`

    - 区别：
        - `.ts`：仅支持标准 TypeScript 语法。不能直接写 JSX。
        - `.tsx`：支持 TypeScript 和 JSX 语法混写。所有 React 组件文件必须用 `.tsx`。
    - 组件命名：PascalCase（每个单词首字母大写，如 `Message`、`App`）。

2. 创建 React 组件方式

    - JavaScript（历史用法）：类组件
        - 早期需继承 `React.Component`，用 `render()` 方法返回 JSX。
        - 现在已基本被淘汰，仅极少旧代码使用。
    - Function（主流推荐）：函数组件
        - 直接写为普通函数，返回 JSX。代码简洁、易读、可用 Hooks。
        - 推荐使用 `export default` 导出。

3. JSX (JavaScript XML) 语法

    - 语法扩展，允许在 JS/TS 中用 HTML 形态声明 UI。可在 babeljs.io 查看转换（左边报错不用管，右边因版本可能有差异）
    - JSX 最终会被 Babel/TS 编译为 JS 调用。

4. 动态内容与条件渲染

    - 方式：
        - 用 `{}` 在 JSX 内嵌 JS 表达式（变量、函数、三元表达式等）。
    - 表达式：
        - 能产生值的代码片段（如 `1+1`、`name`、`getName()`）。
    - 补充：
        - 条件渲染用三元表达式或逻辑运算符（`&&`），JSX 不支持 if 语句，但可以提前在函数体用 if 处理后再 return。

5. 导入与导出

    - 导出：`export default ComponentName;`
    - 导入：`import ComponentName from './ComponentPath';`

6. 使用组件

    - 像 HTML 标签一样使用，必须大写（PascalCase）。
    - 必须闭合：如 `<Message />`，推荐自闭合和清晰嵌套。
    - 只能返回一个根节点。多个同级元素需用父元素包裹（可用 `<></>` Fragment 简写）。

7. 热更新体验

    - Vite（及大多数现代脚手架）内置 HMR（Hot Module Replacement），保存代码自动刷新，无需手动重启服务。

**代码示例**

1. 创建一个简单的组件 (`Message.tsx`)

    ```TypeScript
    // 函数名 Message 遵循 PascalCase 规范
    function Message() {
      // 函数返回 JSX，描述 UI
      return <h1>Hello World</h1>;
    }

    // 导出组件以便在其他地方使用
    export default Message;
    ```

2. 在另一个组件中使用它 (`App.tsx`，删除之前所有内容)

    ```TypeScript
    // 从 './Message' 文件导入 Message 组件
    import Message from "./Message";

    function App() {
      return (
        <div>
          {/*像 HTML 标签一样使用 Message 组件*/}
          <Message />
        </div>
      );
    }

    export default App;
    ```

3. 使用动态内容(`Message.tsx`)

    ```TypeScript
    function Message() {
      const name = "Pang";
      if (name) {
        // 使用花括号 {} 嵌入 JavaScript 变量
        return <h1>Hello {name}</h1>;
      }
      return <h1>Hello World</h1>;
    }

    export default Message;
    ```

4. 不能直接返回多个同级元素

    ```ts
    // 错误示例（会报错）：
    function App() {
      // ❌ 直接返回两个 h1，会报错
      return (
        <h1>标题</h1>
        <h2>副标题</h2>
      );
    }

    // 正确写法一：用一个父 <div> 包裹：
    function App() {
      return (
        <div>
          <h1>标题</h1>
          <h2>副标题</h2>
        </div>
      );
    }

    // 正确写法二：用 Fragment 包裹（推荐、不会多生成 DOM 节点）：
    function App() {
      return (
        <>
          <h1>标题</h1>
          <h2>副标题</h2>
        </>
      );
    }
    ```

## React 工作机制

> 简述：React 会把组件树转换成虚拟 DOM（内存中的树状 JS 对象），再通过 `react-dom` 等库，把变化高效同步到浏览器实际 DOM，实现性能优化和跨平台渲染。

**知识树**

1. 组件树与虚拟 DOM

    - 组件树：App 作为根，Message 为子，整体是一棵树
    - 虚拟 DOM：React 用 JS 对象在内存里表示这棵组件树，每个节点代表一个组件和其状态

2. 渲染与更新流程

    - 首次渲染：React 构建虚拟 DOM，利用 `react-dom` 挂载到 HTML（如 `<div id="root">`）
    - 更新流程：组件数据变更时，先更新虚拟 DOM，再对比前后两个虚拟 DOM，只更新发生变化的实际 DOM 节点

3. 平台无关性

    - React 自身只负责 UI 逻辑与虚拟 DOM，不关心底层是网页、移动、桌面
    - react-dom 让 React 能渲染到浏览器 DOM
    - react-native 让 React 渲染到原生 App

4. 严格模式（见 main.tsx）

    - `<StrictMode>` 是内置组件，不会渲染任何 UI，用于开发时捕获潜在问题（如不安全的生命周期、弃用 API 等）

5. 项目依赖

    - `react`：组件/虚拟 DOM 核心库
    - `react-dom`：负责将组件树渲染/更新到实际 DOM

## React：库 vs 框架

> 简述：React 是“库”，专注于 UI；Angular/Vue 是“框架”，提供完整应用结构。库=单一工具，框架=工具箱+规范。

**知识树**

1. 库（Library）

    - 只解决特定问题（如 UI 渲染），你控制流程，按需调用
    - React 就是库，只管 UI 视图，其他功能需配合其它库
    - 灵活、可组合、不绑定技术选型

2. 框架（Framework）

    - 一整套开发规范与工具，框架控制流程（反转控制）
    - 提供路由、状态管理、数据流、HTTP、表单、动画等“全家桶”
    - Angular、Vue 等属于框架，结构更完整但扩展性受限

3. 现代 React 项目

    - 除 UI，还需引入其他库：路由（react-router）、数据请求（axios/swr）、状态管理（redux/zustand）、表单校验（formik/react-hook-form）、动画（framer-motion）等
    - React “不对这些有强制要求”，让你按需选型，避免冗余

4. 先介绍接触，part2 介绍其他
