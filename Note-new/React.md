**Prerequisites**

- JavaScript
- HTML&CSS

# 技巧

## 工具类

1. 查看错误信息：view——problem
2. 快速生成组件：`rafce`（配合 VS code 插件 `ES7+ React/Redux/React-Native snippets`）
3. 浏览器查看组件信息：（配合 Chrome 插件 React Developer Tools
4. Immer 简化更新

## 使用

1. CSS Modules，隔离样式作用域
2. Emmet，加速模版编写
3. `.?`写法替代`if`，`?.` 只在判断“是否为 `null` 或 `undefined`，不会过滤掉 `0`、`false`、`""` 这些 `falsy` 值。通常配合`??`空值合并运算符，即如果前面结果是 `null` 或 `undefined`，就用右边的值（常保持原值不变）。
4. const 仍允许 push 等对引用的操作，const 之后再加 as const 可设置为不可变引用

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

6. 页面展示基本逻辑

    - 首页展示的是文件 `index.html`，其内展示的其实是 `src` 下的 `main.tsx` 文件
    - `main.tsx` 文件中是 `<App />`，其外部的包装，本质上是 React 应用的入口渲染流程

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
    // Message.tsx
    function Message() {// 函数名 Message 遵循 PascalCase 规范
      // 函数返回 JSX，描述 UI
      return <h1>Hello World</h1>;
    }

    // 导出组件以便在其他地方使用
    export default Message;
    ```

2. 在另一个组件中使用它 (`App.tsx`，删除之前所有内容)

    ```TypeScript
    // App.tsx
    import Message from "./Message";// 从 './Message' 文件导入 Message 组件

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
    // Message.tsx
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
    // Message.tsx
    // 错误示例（会报错）
    function App() {
      // ❌ 直接返回两个 h1，会报错
      return (
        <h1>标题</h1>
        <h2>副标题</h2>
      );
    }

    // Message.tsx
    // 正确写法一：用一个父 <div> 包裹：
    function App() {
      return (
        <div>
          <h1>标题</h1>
          <h2>副标题</h2>
        </div>
      );
    }

    // Message.tsx
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

# Building Components

## 准备工作

1. 清理默认样式文件

    - 清空 `App.css`（Vite 自动生成的默认样式）。
    - 删除 `index.css`（同样由 Vite 自动生成，暂不需要）。

2. 安装 Bootstrap

    - 在项目根目录执行以下命令，安装指定版本的 Bootstrap：
        ```bash
        npm i bootstrap@5.2.3
        ```
    - 官网：https://getbootstrap.com

3. 在入口文件引入 Bootstrap

    - 在 `main.tsx` 中添加以下代码，引入 Bootstrap 的样式：
        ```ts
        import "bootstrap/dist/css/bootstrap.css";
        ```

4. 创建组件文件夹

    - 在 `src` 目录下，创建 `components` 文件夹

## 构建列表组件

> 简述：本节用函数式组件封装一个最小可用的“列表视图”，借助 Bootstrap 的现成样式，形成可复用 UI 单元。

**知识树**

1. 组件创建方式

    - 使用 函数式组件（function component） 定义 `ListGroup`
    - 通过 `export default` 导出组件，供其他模块引入

2. 注意事项

    - 在 React/TSX 中使用 `className` 而非 `class` 来设置 CSS 类名
    - 组件文件建议放置在 `components` 目录下，便于结构化管理

**代码示例**

1.  构建列表组件

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      return (
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      );
    }
    export default ListGroup;
    ```

    - 在 `components` 文件夹下创建 `ListGroup.tsx`
    - 在 `main.tsx` 或其他页面中引入并使用该组件
    - 样式引用自 Bootstrap 官方文档：[List group](https://getbootstrap.com/docs/5.3/components/list-group/)

## Fragment

> 简述：JSX 会被编译成函数调用（元素树）。一个组件的 return 必须有单一根节点。当需要并列兄弟节点时，用 Fragment 聚合，避免引入无意义的 DOM。

**知识树**

1. 根节点约束

    - 概念：JSX 表达式必须有一个顶层元素，否则无法编译。

2. 三种解决方式

    - 用 `div`/语义标签包裹（会产生额外 DOM）。
    - 用 `React.Fragment` 包裹（无额外 DOM，可携带 `key`）。
    - 用短语法 `<>...</>`（最简洁，但**不能**加属性或 `key`）。

3. 工程技巧

    - VS Code：**Wrap with Abbreviation** 快速包裹；多光标同步替换标签。

**代码示例**

1. 错误示例：返回多个顶层节点（编译失败）

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      return (
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      );
    }
    export default ListGroup;
    ```

2. 用真实元素包裹（有额外 DOM）

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      return (
        <div>
          <h1>List</h1>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      );
    }
    export default ListGroup;
    ```

    - 适合需要容器语义/样式/事件时。

3. 用 Fragment（无额外 DOM）

    ```tsx
    // components/ListGroup.tsx
    import { Fragment } from 'react';

    function ListGroup() {
      return (
        <Fragment>
          <h1>List</h1>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </Fragment>
      );
    }
    export default ListGroup;
    ```

    - 渲染结果不多出 `div`；结构更“干净”。

4. 短语法 Fragment（最简洁）

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 限制：不能写属性或 `key`。

5. 列表场景需要 `key` 的 Fragment

    ```tsx
    const parts = ['Head', 'Body'];

    function Sections() {
      return parts.map((p, i) => (
        <React.Fragment key={i}>
          <h2>{p}</h2>
          <p>...</p>
        </React.Fragment>
      ));
    }
    ```

    - 必要时用全名 `<React.Fragment>` 以携带 `key`。

## 动态列表渲染

> 简述：用 `Array.map` 把数据映射为 JSX 节点，并用 `{}` 把表达式插入 JSX。每个同层列表子节点要有稳定且唯一的 `key`，以便 React 正确对比与更新。

**知识树**

1. JSX 只接收表达式

    - 不能写语句（`for/while/if`）；可写结果（数组、函数调用、三元表达式）。
    - 插入表达式用 `{}`；多行 JSX 常用 `()` 提升可读性。

2. 用 `map` 生成节点

    - `items.map(item => <li key={item.xx} >{item}</li>)` 返回元素数组。
    - 将数组直接放进父节点：`<ul>{...}</ul>`。
    - 保持单一根节点（必要时用 Fragment）。

3. `key` 的本质与策略

    - 本质：同一父级下节点身份的稳定标识，驱动 diff。
    - 选择：首选后端 `id`；唯一字符串可用值本身；避免索引（会随增删/排序变化）。
    - 作用域：只在同层有效；不会作为 props 传给子组件（若子组件需要，另传）。

4. 常见错误与修复

    - 在 JSX 中写 `for` / 未用 `{}` 包裹表达式 → 报错。
    - `map` 生成项未加 `key` → 控制台警告，潜在错配。
    - 忘记样式类（如 `list-group-item`）→ 样式缺失。

**代码示例**

1. 基础：用 `map` 渲染 + 正确的 `key`（唯一字符串）

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      const items = ["New York", "San Francisco", "Tokyo", "London"];

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item) => (
              <li className="list-group-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 样式来自 Bootstrap：`list-group` / `list-group-item`。

## 条件渲染

> 简述：JSX 只能放“表达式”。若需要条件渲染（Conditional Rendering）时，即根据条件显示/隐藏 UI，应使用三元运算符、逻辑与 `&&`，或提取到变量/函数；当返回多个兄弟节点时用 Fragment 维持单根。

**知识树**

1.  JSX 表达式局限

    - JSX 中不能直接写 `if`；必须用 `{}` 包裹表达式。

2.  四种主流写法

    - 组件级卫语句：`if (cond) return <Empty/>`（清晰，但会导致代码冗余）。
    - 三元：`cond ? <A/> : <B/>` 或 `: null`（显式两分支）。
    - 逻辑与 `&&`：`cond && <A/>`（仅需真分支时最简）。
        - 需要 else 分支时，不要拼接多个 `&&`，请改用三元。
    - 提取：`const message = ...` / `function getMessage(...)`（逻辑复杂时让 JSX 更干净）。

3.  选择指南：

    - 仅需“显示或不显示” → `&&`。
    - 需要“二选一” → 三元。
    - 逻辑复杂/多条件/复用 → 提取到常量或函数（函数可接受参数，返回不同消息）。

**代码示例**

1. 卫语句示例

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      let items = ["New York", "San Francisco", "Tokyo", "London"];
      items = [];

      // 卫语句
      if (items.length === 0)
        return (
          <>
            <h1>List</h1>
            <p>No item found</p>
          </>
        );

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item) => (
              <li className="list-group-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

2. 三元示例和逻辑与 `&&`

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      let items = ["New York", "San Francisco", "Tokyo", "London"];
      items = [];

      return (
        <>
          <h1>List</h1>

          {items.length === 0 ? <p>No item found</p> : null}
          {items.length === 0 && <p>No item found</p>}

          <ul className="list-group">
            {items.map((item) => (
              <li className="list-group-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 两种写法等价，后者相对更简洁

3. 提取示例

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      let items = ["New York", "San Francisco", "Tokyo", "London"];
      items = [];

      const emptyHint = items.length === 0 ? <p>No item found</p> : null;
      const emptyHint2 = () => {
        return items.length === 0 && <p>No item found</p>;
      };

      return (
        <>
          <h1>List</h1>

          {emptyHint}
          {emptyHint2()}

          <ul className="list-group">
            {items.map((item) => (
              <li className="list-group-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 提取既可以使用常量，也可以使用方法，默认使用常量，需要附带参数时选择方法

## 事件处理与类型标注

> 简述：在 React 中，onClick 等事件 prop 一般绑定的是函数引用，回调函数会接收到一个 event 对象（即 React 的合成事件）。如果我们将事件处理逻辑单独定义在组件外部或方法中，并且需要使用 event 参数，在 TypeScript 中就必须为其显式添加类型标注（如 MouseEvent），才能正常使用。

**知识树**

1. 绑定与调用模式

    - 传函数引用：`<button onClick={fn}></button>` 传函数引用，不要写 `fn()`
    - 使用箭头函数：`<button onClick={() => console.log("Clicked")}></button>`

2. 合成事件 event

    - 作用：
        - React 对原生事件做了封装，屏蔽浏览器差异（如 `type` / `target` / `clientX` / `clientY` 等）
    - TS 类型提示：
        - 事件对象需要显式声明类型才能使用
        - 在编辑器中悬停到参数上，可以看到事件对象的具体类型

3. 列表场景

    - 参数：`map((item, index) => ...)` 中 `item` 表示当前项，`index` 表示索引。
    - key 的注意事项：
        - 展示时可以用 `index`，但 `key` 属性不要使用 index，否则在增删或排序时会导致渲染异常。
        - 推荐使用业务唯一标识符作为 `key`，例如 `id`。

**代码示例**

1. 内联与基础事件对象

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      const items = ["New York", "San Francisco", "Tokyo", "London"];

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className="list-group-item"
                key={item}
                onClick={(e) => {
                  console.log("item:", item);
                  console.log("index:", index);
                  console.log("event:", e);
                }}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 仅需简单行为时，内联最直接。

2. 提取函数 + TS 类型注解

    ```tsx
    // components/ListGroup.tsx
    import type { MouseEvent } from "react";

    function ListGroup() {
      const items = ["New York", "San Francisco", "Tokyo", "London"];

      // A) 仅依赖事件对象：可直接“函数引用”
      const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        console.log("clicked at:", e.clientX, e.clientY);
        console.log("target:", (e.target as HTMLLIElement).className);
      };

      // B) 需要额外数据（item）：用闭包/柯里化
      const handleSelect = (item: string) => (e: MouseEvent<HTMLLIElement>) => {
        console.log("selected:", item);
      };

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item) => (
              <li
                className="list-group-item"
                key={item}
                onClick={handleSelect(item)} // 需要携带 item ⇒ 闭包
                // 若只用事件对象，可写：onClick={handleClick}
                // 切记：不要写 onClick={handleClick()} —— 那是“立即调用”
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

## 管理组件状态

> 简述：函数组件里的局部变量不是 React 可观察数据；修改它不会触发渲染。用 useState 声明状态，用其更新器修改，React 才会重渲染并同步 DOM。

**知识树**

1. 传统方式 ❌

    - 直接改局部变量（如 `selectedIndex = index`）
    - 问题：不可观察、不触发渲染

2. `useState` 方式 ✅

    - 语法：`const [state, setState] = useState(initial)`
    - 约定：`state` + `setState` 命名（如 `selectedIndex` / `setSelectedIndex`）
    - 初始值：无选中时用 `Number | null`（比哨兵值 `-1` 更语义化）
        - 如 `useState<number | null>(null);`

3. 条件样式

    - 用三元/模板拼接 `className` 动态加 `active`（Bootstrap）

4. 实例隔离

    - 每个组件实例有独立 state，互不影响

**代码示例**

1. 传统方式 ❌（点击无反应）

    ```tsx
    // components/ListGroup.tsx
    function ListGroup() {
      const items = ["New York", "San Francisco", "Tokyo", "London"];
      let selectedIndex = 0;

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => (selectedIndex = index)}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

2. `useState` 方式 ✅（驱动渲染）

    ```tsx
    // components/ListGroup.tsx
    import { useState } from "react";

    function ListGroup() {
      const items = ["New York", "San Francisco", "Tokyo", "London"];
      const [selectedIndex, setSelectedIndex] = useState(-1);

      return (
        <>
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => setSelectedIndex(index)}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

## 通过 Props 传递数据

> 简述：Props 是组件的输入。用 TypeScript 接口定义可以输入形状，并通过父组件传入，子组件解构使用，从而去除硬编码、提升复用与类型安全。

**知识树**

1. Props 意义

    - 复用同一渲染逻辑（数据驱动 UI）
    - 移除组件内硬编码数据

2. 定义输入形状（TS）

    - 示例：`interface ListGroupProps { items: readonly string[]; heading: string }`
    - 可用 `type`/`Readonly<>` 增强不变性

3. 传递与接收

    - 父 → 子：`<ListGroup items={arr} heading="Cities" />`
    - 子参数：`function ListGroup(props: ListGroupProps)` → `props.xxx`
    - 常用解构：`function ListGroup({ items, heading }: ListGroupProps)`（更直观）

4. 类型检查与约束

    - 缺少必填：编译期报错
    - Props 只读：子组件不可修改父传入的值

5. TypeScript 与 Props 简化

    - Props 简单时，可以直接在函数参数里写内联类型，而不必单独声明接口。
    - 例如：

        ```tsx
        function ProductList({ category }: { category: string }) { ... }
        ```

**代码示例**

1. 定义接口 + 子组件使用

    ```tsx
    // components/ListGroup.tsx
    import { useState } from "react";

    interface ListGroupProps {
      items: string[];
      heading: string;
    }

    function ListGroup(props: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{props.heading}</h1>
          <ul className="list-group">
            {props.items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => setSelectedIndex(index)}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

2. 解构使用

    ```tsx
    // components/ListGroup.tsx
    import { useState } from "react";

    interface ListGroupProps {
      items: string[];
      heading: string;
    }

    function ListGroup({ items, heading }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{heading}</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => setSelectedIndex(index)}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

3. 父组件传入不同数据，多次复用

    ```tsx
    // App.tsx
    import ListGroup from "./components/ListGroup";

    const cities = ["New York", "San Francisco", "Tokyo", "London"];
    const names = ["Alice", "Bob", "Carol"];
    const colors = ["Red", "Green", "Blue"];

    function App() {
      return (
        <>
          <ListGroup items={cities} heading="Cities" />
          <ListGroup items={names} heading="Names" />
          <ListGroup items={colors} heading="Colors" />
          {/* 若漏传必填 props，TS 会报错，防止运行期问题 */}
        </>
      );
    }

    export default App;
    ```

    - 同一组件，不同输入 → 不同展示；类型系统确保传参与使用一致、可靠。

## 通过 Props 传递函数

> 简述：列表项被选中后，可以通过回调型 Prop 通知父组件。父组件决定“选中后做什么”，并借助 TypeScript 显式声明回调签名，获得类型安全与可复用性。

**知识树**

1. 需求与原则

    - 行为因应用而异：过滤、跳转、弹窗……
    - 复用优先：子组件只负责“选中事实”，不耦合后续动作
    - 方案：反转控制（IoC） → 父传入回调

2. 回调命名与签名（TS）

    - 命名约定：事件名以 `on` 开头（如`onSelectItem`）
    - 父级处理器命名：`handleSelectItem`
    - 典型签名：`(item: string) => void`（可扩展为泛型）

3. 使用步骤

    - 子：在 Props 中声明 `onSelectItem`，在点击时调用并传入所选项
    - 父：实现 `handleSelectItem` 并通过 Prop 传给子
    - 优点：缺失必填回调会导致编译期报错，提前发现问题

4. 可选回调

    - 可将回调设为可选，但会失去“强制接入”的静态保障，谨慎使用

**代码示例**

1. 子组件：声明回调 Prop，并在点击时上报

    ```tsx
    // components/ListGroup.tsx
    import { useState } from "react";

    interface ListGroupProps {
      items: string[];
      heading: string;
      onSelectItem: (item: string) => void;
    }

    function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{heading}</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

    - 子组件保持纯粹，提供 渲染 + 选择态管理 + 通知，不做业务决策。

2. 父组件：实现处理器并传入

    ```tsx
    // App.tsx
    import ListGroup from "./components/ListGroup";

    const cities = ["New York", "San Francisco", "Tokyo", "London"];
    const handleSelectItem = (item: string) => {
      console.log(item);
    };

    function App() {
      return (
        <>
          <ListGroup
            items={cities}
            heading="Cities"
            onSelectItem={handleSelectItem}
          />
        </>
      );
    }

    export default App;
    ```

## Props vs State

> 简述：Props 是外部输入、只读；State 是组件内部数据、可变。两者变化都会触发重新渲染，但来源与所有权不同：Props 由父控制，State 由组件自身控制。

**知识树**

1. 定义与类比

    - Props：父 → 子传入的参数；组件不可修改。
    - State：组件内部可变数据；用于描述随时间变化的界面状态。
    - 类比：Props ≈ 函数参数；State ≈ 函数局部变量。

2. 不变性与更新方式

    - Props 不可变：在子组件里“改写 props”既不能更新父组件，也不会触发重渲；下一次渲染还会被父传入的值覆盖。
    - State 可变但需规范更新：必须用 `setXxx(...)`，不可直接赋值或原地修改对象/数组（用新副本更新）。

3. 所有权与数据流

    - Props 由父组件拥有：体现单向数据流（父改 Props→ 子重渲）。
    - State 由当前组件拥有：每个实例独立；通常由用户交互、异步结果或副作用驱动变更。
    - 避免把 Props 盲目拷贝到 State（除非确有派生/缓存需求）。

4. 共同点与实践准则

    - 共同点：Props/State 变化都会触发重新渲染并由 React 同步 DOM。
    - 准则：
        - 纯展示用 Props；需要交互/记忆时用 State。
        - 行为上行：通过回调型 Prop 把“发生了什么”通知父组件；由父决定业务动作。

## 通过 `children` 传递内容

> 简述：`children` 是所有组件通用的输入，用于把任意可渲染内容（文本/JSX）作为子元素传入；在 TS 中用 `ReactNode` 标注，获得灵活与类型安全。

**知识树**

1. 动机

    - 避免 `text` 这类“内容型 prop”的局限（不便长文/富文本）
    - 用法直观：`<Alert>…内容…</Alert>`

2. 类型标注（TS）

    - 方式：`children: ReactNode`（若为纯文本内容，也可以使用 string）
    - children 是 约定俗成 的一个属性名。

**代码示例**

1. 原始传递方式

    ```tsx
    // components/Alert.tsx
    interface AlertProps {
      text: string;
    }

    const Alert = ({ text }: AlertProps) => {
      return <div className="alert alert-primary">{text}</div>;
    };

    export default Alert;

    // App.tsx
    import Alert from "./components/Alert";

    function App() {
      return (
        <>
          <Alert text="Hello World" />
        </>
      );
    }

    export default App;
    ```

    - 缺点：无法传递其他类型信息，而且稍长

2. `children` 传递内容

    ```tsx
    // components/Alert.tsx
    import { ReactNode } from "react";

    interface AlertProps {
      children: ReactNode;
    }

    const Alert = ({ children }: AlertProps) => {
      return <div className="alert alert-primary">{children}</div>;
    };

    export default Alert;


    // App.tsx
    import Alert from "./components/Alert";

    function App() {
      return (
        <>
          <Alert>
            <div>Hello World!</div>{" "}
            <span>This is a primary alert—check it out!</span>
          </Alert>
        </>
      );
    }

    export default App;
    ```

## Ex 构建 button 组件

> 简述：构建组件时，有许多技巧和注意点，通过该练习了解。

**知识树**

1. 流程梳理

    1. 初步
        - 创建 `tsx` 组件文件
        - `rafce` 创建组件模版
        - 使用处初步引用
    2. 改造
        - 组件文件中定义接口，并使用解构接口中定义的参数
        - 使用处传参

2. 技巧

    - 接口的参数，可以在解构时声明默认值---ts 语法
    - 接口参数，可在声明时设置为可选(`?`方式)---ts 语法
    - 接口参数，可以通过`"x1" | "x2" | "x3"`这种方式声明可设置的值，若不符合将会提示---ts 特性

**代码示例**

1. 构建 button 组件

    ```tsx
    // components/Button.tsx
    interface ButtonProps {
      children: string;
      color?: "primary" | "secondary" | "danger";
      onClick: () => void;
    }

    const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
      return (
        <button className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      );
    };

    export default Button;

    // App.tsx
    import Button from "./components/Button";

    function App() {
      return (
        <>
          <Button color="secondary" onClick={() => console.log("Clicked")}>
            Click Me
          </Button>
        </>
      );
    }

    export default App;
    ```

## Ex 设置 Button 事件

> 简述：设置组件事件（点击事件）时，有许多技巧和注意点，通过该练习了解。

**知识树**

1. 流程梳理

    1. 初步
        - 在使用处， Button 上加上 Alert 提醒组件
        - 创建 useState 与 点击事件，设置点击时展示 Alert
    2. 改造（本节）
        - 添加 Alert 关闭按钮（bootstrap）并设置点击事件由外部传入
        - 在使用处设置点击关闭按钮的事件（useState 方法）传入

2. 特点

    - 通过传递 useState 方法，在将组件内的事件与外部属性关联

**代码示例**

1. 设置 Button 事件

    ```tsx
    // components/Alert.tsx
    import { ReactNode } from "react";

    interface AlertProps {
      children: ReactNode;
      onClose: () => void;
    }

    const Alert = ({ children, onClose }: AlertProps) => {
      return (
        <div className="alert alert-primary alert-dismissible">
          {children}
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
      );
    };

    export default Alert;

    // App.tsx
    import { useState } from "react";
    import Alert from "./components/Alert";
    import Button from "./components/Button";

    function App() {
      const [alertVisible, setAlertVisibility] = useState(false);

      return (
        <>
          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
          )}
          <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
        </>
      );
    }

    export default App;
    ```

# Styling Components

## 原生 CSS 样式化组件

> 简述：可以选择不依赖框架，使用原生（vanilla，平凡的）CSS 来修饰组件

**知识树**

1.  原生 CSS 应用流程：

    - 创建 CSS 文件：例如，为`ListGroup`组件创建`ListGroup.css`。
    - 导入 CSS 文件：在对应的组件文件（如`ListGroup.tsx`）顶部导入 CSS 文件：`import './ListGroup.css';`。
    - 定义样式规则：在 CSS 文件中编写标准的 CSS 类和样式。

2.  CSS 文件组织与内聚性

    - 内聚性原则 (Cohesion)
        - 相关联的事物应彼此靠近，不相关的事物应分离。组件的 TSX 文件和其样式 CSS 文件高度相关。
    - 推荐方案一 (组件旁)：
        - 将`ListGroup.css`与`ListGroup.tsx`置于同一目录下。
        - 优点：复用组件时，只需复制包含 TSX 和 CSS 的单个组件相关文件集。
    - 推荐方案二 (组件文件夹，更佳)
        - 为每个组件创建一个独立文件夹，如`components/ListGroup/`，内部包含`ListGroup.tsx`和`ListGroup.css`。
        - 可以进一步创建一个`index.ts`文件引入组件并暴露，由于`index.ts`是文件夹未指定文件时的默认访问文件，因此在组件导入处，导入文件夹即可找到对应的组件
            - 优点：进一步封装组件所有相关资源。

**代码示例**

1. 原生 CSS 样式化组件（注释掉 `main.tsx` 中的 bootstrap 引用）

    ```tsx
    // components/ListGroup/ListGroup.tsx
    import { useState } from "react";
    import "./ListGroup.css";

    interface ListGroupProps {
      items: string[];
      heading: string;
      onSelectItem: (item: string) => void;
    }

    function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{heading}</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;

    // components/ListGroup/ListGroup.css
    .list-group {
      list-style: none;
      padding: 0;
    }

    // components/ListGroup/index.ts
    import ListGroup from "./ListGroup";

    export default ListGroup;

    // App.tsx
    import ListGroup from "./components/ListGroup/ListGroup";

    const cities = ["New York", "San Francisco", "Tokyo", "London"];
    const handleSelectItem = (item: string) => {
      console.log(item);
    };

    function App() {
      return (
        <>
          <ListGroup
            items={cities}
            heading="Cities"
            onSelectItem={handleSelectItem}
          />
        </>
      );
    }

    export default App;
    ```

## CSS Modules

> 简述：当同个组件中，同一个 class 被重复定义不同的样式，会导致冲突问题，使用 CSS Modules，能避免该问题的发生

**知识树**

1.  原生 CSS 的局限性

    - 全局作用域：所有 CSS 类名共享同一命名空间，容易在不同组件或样式表中产生命名冲突。
    - 问题示例：
        - 以上一节为基础，当在 `App.css` 中定义了`.list-group` 相关内容，并在 `App.tsx` 中引入后，原样式出现变化

2.  CSS Modules 定义与优势

    - 定义：一种 CSS 文件规范，其中所有类名和动画名默认都是局部作用域的。
    - 工作原理：构建工具（如 Vite, Webpack）在编译时会将 CSS Modules 中的类名转换为唯一的哈希字符串。
    - 优势：从根本上避免了 CSS 类名冲突，允许在不同文件中使用相同的类名而互不影响，增强了样式的模块化和可维护性。

3.  使用 CSS Modules 步骤

    - 文件命名：将 CSS 文件名修改为`[name].module.css`格式，例如`ListGroup.module.css`。
    - 导入：在组件文件中，以对象形式导入 CSS Modules：`import styles from './ListGroup.module.css';`。
    - 在 JSX 中应用类名：
        - 点符号访问：如果类名符合 CSS Modules 命名规范（驼峰式`listGroup`），使用`className={styles.listGroup}`。
        - 方括号访问：如果类名包含特殊字符（如连字符`list-group`），使用`className={styles['list-group']}`。

4.  应用多个 CSS Modules 类名

    - 方法
        - 将多个来自`styles`对象的类名（即编译后的唯一字符串）放入一个数组中，然后使用数组的`join(' ')`方法将它们合并为一个空格分隔的字符串。
    - 示例
        - `className={[styles.listGroup, styles.container].join(" ")}`。

**代码示例**

1. 使用 CSS Modules 示例

    ```tsx
    // components/ListGroup/ListGroup.tsx
    import { useState } from "react";
    import styles from "./ListGroup.module.css";

    interface ListGroupProps {
      items: string[];
      heading: string;
      onSelectItem: (item: string) => void;
    }

    function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{heading}</h1>
          <ul className={[styles.listGroup, styles.container].join(" ")}>
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;

    // ListGroup.module.css
    .listGroup {
      list-style: none;
      padding: 0;
    }

    .container {
      background: yellow;
    }

    // App.css
    .list-group {
      background: red;
    }
    ```

## CSS-in-JS

> 简述： 在 TS/JS 中可以直接定义“带样式的组件”。样式与逻辑同文件、作用域天然隔离，并可随 props/state 动态变化。

**知识树**

1. 特点

    - 共址：样式与组件同文件，删除即清理
    - 作用域：不与全局 CSS 冲突
    - 动态化：根据 props/state 计算样式
    - 缺陷：无法像 CSS Modules 那样做到解决冲突

2. 流行库：

    - `styled-components` (本节演示)
    - `Emotion`
    - `Polished` (通常作为辅助库)

3. `styled-components` 使用入门

    - 安装
        - `npm install styled-components`
        - 若导入后提示`Could not find...`，安装`npm install @types/styled-components`
    - 导入
        - `import styled from 'styled-components';`
    - 创建样式化组件示例

        ```tsx
        const StyledHtmlElement = styled.htmlElementTag`
        	CSS rules
        `;

        // example
        const List = styled.ul`
        list-style: none;
        padding: 0;
        `;
        ```

        - 返回值：一个新的 React 组件，该组件渲染指定的 HTML 标签并自动应用定义的样式。

    - 使用
        - 在 JSX 中用创建的样式化组件替换原生 HTML 标签。
        - 例如，用`<List>`替换`<ul>`，用`<ListItem>`替换`<li>`。
        - 不再需要`className` 来应用这些核心样式。

4. 基于 Props 的动态样式

    - 样式化组件可以接受接口，主要由两种配合接口的方式
    - 方式一：
        - 创建时使用模板字面量插值 `${}` 和箭头函数，对属性进行处理
    - 方式二
        - 在组件使用处，使用接口中的属性（具备代码提示补全）

**代码示例**

1. 演示使用（将上一节的代码回退之后，即复原`ListGroup.css`以及`ListGroup.tsx`内相关代码，在此基础进行修改）

    ```tsx
    // components/ListGroup/ListGroup.tsx
    import { useState } from "react";
    import "./ListGroup.css";
    import styled from "styled-components";

    const List = styled.ul`
      list-style: none;
      padding: 0;
    `;

    interface ListItemProps {
      active: boolean;
    }
    const ListItem = styled.li<ListItemProps>`
      padding: 5px 0;
      background: ${(props) => (props.active ? "blue" : "none")};
    `;

    interface ListGroupProps {
      items: string[];
      heading: string;
      onSelectItem: (item: string) => void;
    }

    function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

      return (
        <>
          <h1>{heading}</h1>
          <List className="list-group">
            {items.map((item, index) => (
              <ListItem
                active={index === selectedIndex}
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
          >
                {item}
              </ListItem>
            ))}
          </List>
        </>
      );
    }
    export default ListGroup;
    ```

## 分离关注点

> 简述：分离关注点的核心是“按职责拆分、以接口协作”。它不关心代码是否在同一文件。只要模块职责清晰、实现被接口隔离，CSS-in-JS 并不违背该原则。

**知识树**

1. 定义与目标

    - 定义：将系统按单一关注点/职责拆分为模块；模块内部自洽，对外只经由接口交互。
    - 目标：降低耦合、提升可读性/可测试性/可复用性。

2. 模块化的收益

    - 独立开发与测试：模块可替换、可演进。
    - 复用与组合：小模块通过清晰接口被安全复用。
    - 风险隔离：实现细节隐藏在边界之内。

3. 接口与封装

    - 原则：隐藏实现，最小接口；输入/输出可预测，不泄漏内部细节。
    - React 映射：props 即接口，组件内部为实现。
        - 设计方式：
            - 最小必要字段；命名语义化；输入不可变（只读）；事件以 `onX` 命名、处理器以 `handleX` 命名。 -（参数定义与使用示例）
            - `items: ReadonlyArray<T>`：渲染数据；只读，组件不修改。
            - `selectedId?: string | number`：受控选中态；可选。
            - `onSelect?: (id: string | number) => void`：事件回调，仅上报意图/最小信息。
            - `heading?: ReactNode`：展位内容，提升可组合性。
        - 效果：消费者只关心接口，不关心实现放在几个文件、用了何种样式方案。

4. CSS-in-JS 与 SoC 的关系辨析

    - SoC 关注“逻辑职责的划分”，而非“代码物理位置”。CSS-in-JS 是物理共址，逻辑分离的一种实现。

## 内联样式

> 简述：在 JSX 中给元素的 style 传入对象即可设置样式（JS 对象而非字符串）。能用，但因可读性/复用性差，只作为特例兜底。

**知识树**

1. 定义与语法

    - 定义：组件中存`style`属性， 可设置样式。
    - 示例：`<ul style={{ backgroundColor: "yellow" }}>`
    - 驼峰命名：与传统 JS 不同，TS 中命名将`-`分隔改为了驼峰

2. 权重与限制

    - 一般优先于类选择器，但不如 `!important`；且无法表达伪类/媒体查询。

**代码示例**

1. 内联示例

    ```tsx
    // components/ListGroup/ListGroup.tsx
    import { useState } from "react";
    import "./ListGroup.css";

    interface ListGroupProps {
      items: string[];
      heading: string;
      onSelectItem: (item: string) => void;
    }

    function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

      return (
        <>
          <h1>{heading}</h1>
          <ul className="list-group" style={{ backgroundColor: "yellow" }}>
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
          >
                {item}
              </li>
            ))}
          </ul>
        </>
      );
    }
    export default ListGroup;
    ```

## UI 组件与样式库选型

> 简述：UI 库的目标是更快、更一致地交付界面。选型取决于设计语言、可定制性、可访问性与团队习惯。

**知识树**

1. 代表库速览（特点与取舍）

    - Bootstrap
        - 成熟稳定、类名语义固定，学习成本低，风格同质化，深度定制需覆盖变量/样式。
    - MUI (Material UI)
        - 完整实现 Material Design，组件丰富，主题能力强，默认风格显著
    - Tailwind CSS
        - 零 JS、原子化、按需产物，性能与一致性易控
    - DaisyUI
        - Tailwind 插件，提供语义化组件类（如 `alert`/`avatar`），受 Tailwind 约束。
    - Chakra UI（推荐）
        - React 组件库，基于 Tailwind 开发，API 简洁、可访问性良好、定制直观，容易上手。

## 在 React 中使用图标

> 简述：`react-icons` 将多家图标库聚合为可复用的 React 组件。按需导入、像普通组件一样使用，并通过 props 快速定制大小与颜色。

**知识树**

1. 安装与检索
    - 命令：`npm i react-icons@5.5.0`
    - 官网：
        - https://react-icons.github.io/react-icons/
        - 在官网搜索图标并确认前缀（如 `ai`、`bs` 等）。
2. 按需导入：

    - 基于前缀从子包导入（如 `react-icons/bs`），避免从根包导入以减小体积。

3. 使用与定制：

    - 组件化使用：`<BsFillCalendarFill />`
    - 常用 props：`size`、`color`、`className`、`style`

**代码示例**

1. 基本使用与定制

    ```tsx
    // App.tsx
    import { BsFillCalendarFill } from "react-icons/bs";

    export default function App() {
      return (
        <div>
          {/* 默认 */}
          <BsFillCalendarFill />

          {/* 定制大小与颜色 */}
          <BsFillCalendarFill size={24} color="red" />

          {/* 使用 className / style */}
          <BsFillCalendarFill className="icon" style={{ marginLeft: 8 }} />
        </div>
      );
    }
    ```

## Ex 用 CSS Modules 美化 Button

> 简述：通过使用 CSS Modules 来练习美化 Button，增加对 CSS Modules 的熟练度

**代码示例**

1. 示例

    ```tsx
    // components/Button/Button.module.css
    .btn {
      padding: 10px 20px;
      border-radius: 5px;
      border: 0;
    }

    .btn-primary {
      background-color: #0d6efd;
      color: white;
    }


    // components/Button/Button.tsx
    .list-group {
      list-style: none;
      padding: 0;
    }

    // components/Button/index.ts
    import Button from "./Button";

    export default Button;

    // App.tsx
    import Button from "./components/Button";

    function App() {
      return <Button onClick={() => {}}>Click Me</Button>;
    }

    export default App;
    ```

## Ex 构建一个可复用 Like 组件

> 简述：通过构建一个可复用 Like 组件（通常数据其实是有后台传入，这里仅作演示），增加对 useState 的理解

**代码示例**

1. 示例

    ```tsx
    // Like.tsx
    import { useState } from "react";
    import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

    interface Props {
      onClick: () => void;
    }

    const Like = ({ onClick }: Props) => {
      const [status, setStatus] = useState(false);

      const toggle = () => {
        setStatus(!status);
        onClick();
      };

      if (status) return <AiFillHeart color="#ff6b81" size={25} onClick={toggle} />;
      return <AiOutlineHeart color="#ff6b81" size={25} onClick={toggle} />;
    };

    export default Like;

    // App.tsx
    .list-group {
      background: red;
    }
    ```

# Managing Component State

## 理解 State Hook

> 简述：`useState` 为函数组件提供状态。更新异步批处理（事件后统一生效），状态存于 React 内部而非函数局部，Hook 必须在组件顶层按固定顺序调用。

**知识树**

1.  `useState` Hook 基础

    - 功能：允许函数组件拥有并管理自身的状态。
    - 返回：一个包含当前状态值和状态更新函数的数组 `[state, setState]`。

2.  状态更新的异步性

    - 机制：调用`setState`函数（如`setIsVisible(true)`）不会立即改变状态值并同步触发重渲染。
    - 原因：性能优化。React 会将短时间内发生的多个状态更新进行批处理（batching），然后在事件处理函数执行完毕后，一次性应用所有更新并执行一次重渲染，以减少不必要的渲染次数。
    - 表现：在`setState`调用之后立即访问状态变量，获取到的仍是旧值。

3.  状态的存储位置

    - 外部存储：通过`useState`声明的状态实际上存储在 组件之外，而非组件函数的作用域内。
    - 原因：组件函数每次渲染时都会重新执行，其内部的局部变量会在函数执行完毕后销毁。为了在多次渲染间保持状态，React 必须将状态存储在组件实例之外。

4.  Hooks 的调用规则：

    - 规则一：只能在函数组件的顶层调用 Hooks。
    - 规则二：不能在循环、条件语句或嵌套函数中调用 Hooks。
    - 原因：React 依赖于 Hooks 在每次渲染时的固定调用顺序来正确地将内部存储的状态与对应的`useState`调用关联起来。状态变量名（如`isVisible`）是组件内部的标识符，React 本身不通过名称识别状态，而是通过调用顺序。
    - 硬性规则：违反它们不会立刻触发语法错误，但会导致 Hook 顺序/数量在不同渲染间不一致，从而引发状态错位、难以复现的 bug，在开发模式下 React 还会直接报错

**代码示例**

1.  异步状态更新演示

    ```ts
    import { useState } from "react";
    import Like from "./components/Like";

    function App() {
      const [isVisible, setIsVisible] = useState(false);

      const handleClick = () => {
        setIsVisible(true);
        console.log(isVisible);
      };

      return <Like onClick={handleClick} />;
    }

    export default App;
    ```

    - 点击按钮后，控制台输出的`isVisible`是更新前的值。

## 选择 State 结构

> 简述：合理设计组件的状态结构是提升代码可维护性和性能的关键。核心原则包括避免冗余、组织关联数据及保持结构扁平。

**知识树**

1.  避免冗余状态：

    - 定义：如果一个状态值可以由其他现有状态或 props 计算得出，则该状态是冗余的。
    - 示例：`fullName`可以由`firstName`和`lastName`计算得到，无需单独存储为状态。
    - 实践：在渲染期间（JSX 中或组件函数体内的局部变量）派生值通过计算获取，而不是将其设为独立状态。

2.  组织关联状态变量

    - 场景：当多个状态变量在逻辑上属于同一个实体或概念时。
    - 方法：将这些关联变量组合成一个对象，作为单一状态进行管理。
    - 示例：将`firstName`和`lastName`合并为`person: { firstName: string, lastName: string }`状态对象。
    - 对比：将`person`对象与独立的`isLoading`状态分开管理，因为它们代表不同关注点（用户数据 vs 页面加载状态）。

3.  避免深度嵌套的状态结构

    - 问题：深度嵌套的对象在进行用新副本更新时，逻辑会变得非常复杂和冗长。
    - 建议：尽可能保持状态结构的扁平化。如果必须嵌套，层级不宜过深。
    - 影响：更新深层嵌套属性需要逐层创建新对象副本，增加了代码量和出错风险。

**代码示例**

1.  避免冗余状态

    ```ts
    // App.tsx
    import { useState } from "react";

    function App() {
      const [firstName, setFirstName] = useState("John");
      const [lastName, setLastName] = useState("Doe");
      const fullName = firstName + " " + lastName;

      return <div>{fullName}</div>;
    }

    export default App;
    ```

2.  组织关联状态

    ```ts
    // App.tsx
    import { useState } from "react";

    function App() {
      // const [firstName, setFirstName] = useState("John");
      // const [lastName, setLastName] = useState("Doe");
      const [person, setPerson] = useState({ firstName: "John", lastName: "Doe" });
      const [isLoading, setIsLoading] = useState(false);
      const fullName = person.firstName + " " + person.lastName;

      return (
        <div>
          {fullName}
          {isLoading && <p>Loading...</p>}
        </div>
      );
    }

    export default App;
    ```

## 保持组件纯粹

> 简述：React 组件应设计为纯函数 (Pure Function) ，即对于相同的输入（props），总是返回相同的输出（JSX），并且在渲染过程中不产生副作用。

**知识树**

1.  纯函数定义：

    - 给定相同的输入参数，总是返回相同的结果。

2.  维持组件纯粹性的关键：

    - 渲染阶段禁止副作用
        - 在组件函数执行并返回 JSX 的过程里，不要改写本次渲染开始前已存在的任何可变引用或外部资源
    - 只允许改动本次渲染内“新建”的值
        - 渲染过程中新创建的对象/数组/Map/Set 等属于当前渲染的局部产物，可以在返回 JSX 前自由读写；它们尚未被外部共享，不会破坏纯粹性。

**代码示例**

1.  不纯组件示例 (修改外部变量)

    ```ts
    // Message.tsx
    let count = 0;

    function Message() {
      count++;
      return <h1>Message {count}</h1>;
    }

    export default Message;

    // App.tsx
    import { useState } from "react";
    import Message from "./Message";

    function App() {
      return (
    	<div>
    	  <Message />
    	  <Message />
    	  <Message />
    	</div>
      );
    }

    export default App;
    ```

    - 每次渲染`Message`都会改变`count`，导致相同复用产生不同输出。

## 理解 Strict Mode

> 简述：React 的`StrictMode`是一个开发模式下的辅助工具，它通过在开发环境中对组件进行额外检查（如双重渲染）来帮助开发者识别和修复潜在问题，特别是与副作用和不纯组件相关的问题。

**知识树**

1.  `React.StrictMode` 组件

    - 用途：一个不显示任何 UI 的包装组件；只在开发模式开启额外检查。
    - 激活位置：通常在应用的根组件（如`App`）外层包裹，位于`main.tsx`或`index.js`中。

2.  核心行为

    - 双调用（开发态）：函数组件体、`useState` 初始器等会被调用两次，首轮结果丢弃，仅采用第二次。
    - Effect 复挂：`useEffect` 会经历“挂载 → 清理 → 再挂载”，用于校验清理逻辑。
    - 日志现象：控制台常见一深一浅（灰）两条日志，对应两次执行。

3.  影响范围

    - 开发环境下默认启动，打包到生产后只渲染一次。

**代码示例**

1. Strict Mode 演示（通过不纯示例）

    ```ts
    // Message.tsx
    let count = 0;

    function Message() {
      console.log("Message rendered: " + count);
      count++;
      return <h1>Message {count}</h1>;
    }

    export default Message;

    // App.tsx
    import Message from "./Message";

    function App() {
      return (
        <div>
          <Message />
        </div>
      );
    }

    export default App;
    ```

## 更新对象

> 简述：当 state 是对象或数组时，不要原地改；必须创建新对象/新数组传给 `setState`，React 才能识别变化并重新渲染。

**知识树**

1. 核心规则

    - 不可变性 (Immutability) 原则：
        - state 视为只读，直接修改无法触发渲染，不应直接修改其内容。
    - 原因：
        - React 通过比较对象（或数组）的引用来判断状态是否发生变化。如果直接修改原对象，其引用保持不变，React 可能无法检测到变化，从而不触发组件的重新渲染。

2. 更新对象流程：

    - 创建新对象：生成一个全新的 JavaScript 对象。
    - 复制属性：将原状态对象的所有属性复制到新对象中。
    - 修改属性：在新对象上修改需要更新的属性值。
    - 更新状态：调用状态更新函数（如`setDrink`），并将这个新创建和修改后的对象作为参数传入。

3. 展开运算符 (`...`) 简化更新

    - 功能：展开运算符可以方便地将一个对象的所有可枚举自有属性复制到另一个新对象中。
    - 语法：`const newObject = { ...oldObject, propertyToUpdate: newValue };`
        - `...oldObject`：将`oldObject`的属性浅拷贝到新对象。
        - `propertyToUpdate: newValue`：在新对象上设置或覆盖指定的属性。属性的顺序很重要，后写的会覆盖先写的同名属性。

4. 避免直接修改：

    - 错误做法：`drink.price = 6; setDrink(drink);`
    - 后果：即使`drink`对象的内容变了，但`drink`变量的引用未变，React 不会识别为状态更新。

5. 深层数据注意

    - 展开运算符是浅拷贝；嵌套对象也要逐层复制：`{ ...p, nested: { ...p.nested, x: 1 } }`。

**代码示例**

1. 对象：错误 vs 正确

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [drink, setDrink] = useState({
        title: "Americano",
        price: 5,
      });

      // ❌ 错误：原地修改 + 引用不变
      const bad = () => {
        drink.price = drink.price + 1;
        setDrink(drink);
        console.log(drink);
      };

      // ✅ 正确：创建新对象（引用变了）
      const good = () => {
        setDrink((d) => ({ ...d, price: d.price + 1 }));
        console.log(drink);
      };

      return (
        <div>
          <div>
            {drink.title} : ${drink.price}
          </div>
          <button onClick={bad}>BAD UPDATE</button>
          <button onClick={good}>GOOD UPDATE</button>
        </div>
      );
    }

    export default App;
    ```

    - 说明：`bad` 不更新；`good` 正常更新。

## 更新嵌套对象

> 简述：更新嵌套对象状态时，不可变性原则要求从根对象到被修改属性路径上的每一个对象都必须是新的实例。展开运算符的浅拷贝特性在此场景下需要特别注意。

1.  展开运算符浅拷贝特性

    - 行为
        - 当使用展开运算符 (`...`) 复制一个对象时，如果该对象的属性值本身也是对象或数组，则新对象中对应属性将持有对原始嵌套对象或数组的引用，而非其内容的深拷贝。
    - 影响
        - 直接修改通过浅拷贝获得的嵌套对象引用，仍然会修改原始状态树中的该部分，违背不可变性。

2.  更新嵌套对象规则

    - 要更新一个深层嵌套的属性，必须确保从状态的根对象到该属性所在的最内层对象的路径上，每一个层级的对象都是新创建的副本。

3.  更新嵌套对象的步骤

    - 创建新的顶层对象副本，使用展开运算符复制原顶层对象属性。
    - 对于包含待更新属性的那个嵌套对象属性，赋值为一个新的对象。
    - 在这个新的嵌套对象内部，再次使用展开运算符复制原嵌套对象的属性。
    - 最后，修改目标属性的值。

4.  深度嵌套的复杂性

    - 结构越深，用新副本更新的逻辑越复杂，代码越冗长，越容易出错。
    - 再次强调了尽可能保持状态结构扁平化的重要性。

**代码示例**

1.  更新嵌套对象状态

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [customer, setCustomer] = useState({
        name: "John",
        address: {
          city: "New York",
          zipCode: "10001",
        },
      });

      const handleUpdateZipCode = () => {
        setCustomer({
          ...customer,
          address: {
            ...customer.address,
            zipCode: "10002",
          },
        });
      };

      return (
        <div>
          <p>{customer.name}</p>
          <p>
            {customer.address.city}, {customer.address.zipCode}
          </p>
          <button onClick={handleUpdateZipCode}>Update Zip Code</button>
        </div>
      );
    }

    export default App;
    ```

## 更新数组

> 简述：在 React 中管理数组类型的状态时，需要遵循不可变性原则。对数组的增、删、改操作都应通过创建并返回一个全新的数组实例来完成，而非直接修改原数组。

**知识树**

1.  数组状态的不可变性

    - 禁止直接修改：不应使用会改变原数组的内置方法（如 `push`, `pop`, `splice`, `sort` 直接作用于状态数组）。
    - 原因：与对象类似，React 依赖数组引用的变化来检测状态更新。

2.  用新副本更新数组的常用方法

    - 添加元素：
        - 使用展开运算符 (`...`) 创建新数组，并在末尾（或开头）添加新元素。
        - `setTags(prevTags => [...prevTags, 'newTag']);` (添加到末尾)
        - `setTags(prevTags => ['newTag', ...prevTags]);` (添加到开头)
    - 删除元素：
        - 使用数组的 `filter()` 方法。它会返回一个包含所有满足条件元素的新数组，原数组不变。
        - `setTags(prevTags => prevTags.filter(tag => tag !== 'tagToRemove'));`
    - 更新元素：
        - 使用数组的 `map()` 方法。它会遍历原数组，对每个元素应用一个函数，并返回一个包含函数返回值的新数组。
        - 在回调函数中，如果当前元素是需要更新的元素，则返回更新后的值（或新对象）；否则，返回原元素。
        - `setTags(prevTags => prevTags.map(tag => (tag === 'oldTag' ? 'updatedTag' : tag)));`

**代码示例**

1.  添加、删除和更新元素

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [tags, setTags] = useState(["happy", "sad", "angry"]);

      const handleClick = () => {
        // Add
        setTags([...tags, "excited"]);

        // Remove
        // setTags(tags.filter((tag) => tag !== "sad"));

        // Update
        // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
      };

      return (
        <div>

          <button onClick={handleClick}>Click Me</button>
        </div>
      );
    }

    export default App;
    ```

## 更新对象数组

> 简述：当状态是一个包含对象的数组，并且需要更新数组中某个对象的属性时，应结合使用数组的`map`方法和对象的展开运算符，以确保整个更新过程的不可变性。

**知识树**

1.  场景

    - 状态为一个对象数组，例如 `bugs = [{ id: 1, title: 'Bug A', fixed: false }, ...]`。需要修改其中一个对象的属性（如将某个 bug 的`fixed`状态设为`true`）。

2.  `map()` 回调函数逻辑：

    - 参数：回调函数接收数组中的当前对象（如 `bug`）作为参数。
    - 条件判断：
        - 检查当前对象是否是需要更新的目标对象（通常通过 `id` 或其他唯一标识符判断）。
        - 如果是目标对象：
            - 创建一个新的对象副本。
            - 使用展开运算符 (`...`) 复制原目标对象的所有属性到新副本中。
            - 在新副本上修改需要更新的属性值。
            - 返回这个新的、已修改的对象副本。
        - 如果不是目标对象：
            - 直接返回原始对象（保持其引用不变）。

3.  结果

    - `map()` 方法返回一个全新的数组。
    - 这个新数组中，未被修改的对象仍然是原数组中对应对象的引用。
    - 被修改的对象则是一个全新的对象实例，其属性已更新。

4.  关于内存泄露的考虑

    - `map` 产生了新数组；旧数组只要不再被引用（比如不在变量里、不被闭包/全局持有），JS 引擎就会把它垃圾回收。保留下来的只是“被新数组继续引用的那些对象”。

**代码示例**

1.  更新对象数组中的特定对象

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", isClosed: false },
        { id: 2, title: "Bug 2", isClosed: false },
      ]);

      const handleClick = () => {
        setBugs(
          bugs.map((bug) => (bug.id === 1 ? { ...bug, isClosed: true } : bug))
        );
      };

      return (
        <div>
          <ul>
            {bugs.map((bug) => (
              <li key={bug.id}>
                {bug.title} {bug.isClosed ? "(Closed)" : "(Open)"}
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>UPDATE</button>
        </div>
      );
    }

    export default App;
    ```

## 使用 Immer 简化更新

> 简述：在更新对象或数组时手动使用 `map`、`filter`、展开运算符会显得冗长。Immer 提供 `produce`，让我们像直接修改对象那样写代码，库会在底层生成不可变的副本。

**知识树**

1. 背景问题

    - React 的 state 必须视为不可变。
    - 手动更新对象/数组 → 代码重复，层级深时尤其繁琐。

2. Immer 库：

    - 目的：简化不可变状态管理。
    - 核心函数：`produce`。
    - 安装：`npm install immer@10.1.1`。

3. `produce`函数用法

    - 导入：`import { produce } from 'immer';`
    - 基本签名：`produce(currentState, recipeFunction)` 或在 React `setState`中 `setState(produce(recipeFunction))`。
    - `recipeFunction` (配方函数)：一个回调函数，接收一个`draft`（草稿）版本的当前状态作为参数。

4. `draft`（草稿状态）

    - 特性：`draft`是一个特殊代理对象，允许在`recipeFunction`内部对其进行直接“修改”（如属性赋值、数组`push`等），就好像它是一个可变对象一样。
    - 底层机制：
        - Immer 会追踪在`draft`上进行的所有操作。
        - Immer 根据这些操作，在函数执行完毕后，自动生成一个符合不可变性原则的、全新的下一状态。
        - 如果`recipeFunction`没有对`draft`做任何修改，`produce`会返回原始状态，避免不必要的更新。

5. 特点与注意

    - 优点：写法简洁、可读性好，避免层层展开。
    - 注意：只在 `produce` 回调里“修改” draft，其他地方仍要遵守不可变规则。
    - Immer 内部会创建新引用，旧 state 仍可被垃圾回收，不会内存泄漏。

**代码示例**

1. 使用 `map` 的传统写法（繁琐）

    ```tsx
    // ❌ 繁琐：需要手动展开
    setBugs(bugs.map(b => (b.id === 1 ? { ...b, isClosed: true } : b)));
    ```

2. 使用 Immer 简化写法

    ```tsx
    // App.tsx
    import { useState } from "react";
    import { produce } from "immer";

    function App() {
      const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", isClosed: false },
        { id: 2, title: "Bug 2", isClosed: false },
      ]);

      const handleClick = () => {
        setBugs(
          // bugs.map((bug) => (bug.id === 1 ? { ...bug, isClosed: true } : bug))
          produce((draft) => {
            // 使用produce，传入一个操作draft的函数
            const bug = draft.find((bug) => bug.id === 1);
            if (bug) {
              bug.isClosed = true;
            }
          })
        );
      };

      return (
        <div>
          <ul>
            {bugs.map((bug) => (
              <li key={bug.id}>
                {bug.title} {bug.isClosed ? "(Closed)" : "(Open)"}
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>UPDATE</button>
        </div>
      );
    }

    export default App;
    ```

    - 说明：`produce` 返回一个新数组，只有修改过的元素是新对象，其余保持原引用。React 识别新数组引用 → 触发渲染。

## 组件间共享状态

简述：当多个组件需要共享同一份数据时，应把状态提升到它们最近的共同父组件，再通过 props 下发数据和回调，确保它们始终保持同步。

**知识树**

1. 场景

    - 例如电商应用：导航栏显示购物车内商品数量，购物车组件显示购物车明细。
    - 两者都依赖同一份购物车数据 → 状态应放在它们的共同父组件（App）。

2. 状态提升的步骤

    - 在父组件中用 `useState` 声明共享状态。
    - 子组件需要数据：通过 props 接收（如 `cartItems` 或 `cartItemsCount`）。
    - 子组件需要修改数据：通过 props 接收回调（如 `onClear`）。

3. 状态更新的责任原则

    - 谁持有 state，谁负责更新。
    - 子组件不能直接改 props，只能调用父组件传来的函数通知父组件。

**代码示例**

1. 父组件管理共享状态

    ```tsx
    // App.tsx
    import { useState } from "react";
    import NavBar from "./components/NavBar";
    import Cart from "./components/Cart";

    function App() {
      const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

      return (
        <div>
          <NavBar cartItemsCount={cartItems.length} />
          <Cart cartItems={cartItems} onClearCart={() => setCartItems([])} />
        </div>
      );
    }

    export default App;
    ```

2. 导航栏组件只关心数量

    ```tsx
    // NavBar.tsx
    interface Props {
      cartItemsCount: number;
    }

    const NavBar = ({ cartItemsCount }: Props) => {
      return (
        <>
          <div>NavBar: {cartItemsCount} items</div>
        </>
      );
    };

    export default NavBar;
    ```

3. 购物车组件关心明细和清空操作

    ```tsx
    // Cart.tsx
    interface Props {
      cartItems: string[];
      onClearCart: () => void;
    }

    const Cart = ({ cartItems, onClearCart }: Props) => {
      return (
        <>
          <div>Cart</div>
          <ul>
            {cartItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button onClick={onClearCart}>UPDATE</button>
        </>
      );
    };

    export default Cart;
    ```

    - 点击 Clear → 父组件更新 state → 导航栏和购物车组件同时更新，始终保持同步。

## Ex 更新状态

> 简述：本节通过三个具体练习，巩固在 React 中对嵌套对象、对象内数组以及对象数组中特定对象属性进行不可变更新的操作技巧。

**练习**

1.  练习 1：更新嵌套对象的属性

    - 场景：`game = { id: number, player: { name: string } }`，更新`player.name`。
    - 核心：同时创建新的`game`对象和新的`player`对象。

2.  练习 2：更新对象内数组的属性 (添加元素)

    - 场景：`pizza = { name: string, toppings: string[] }`，向`toppings`数组添加新元素。
    - 核心：创建新的`pizza`对象和新的`toppings`数组。

3.  练习 3：更新对象数组中特定对象的属性
    - 场景：`cart = { discount: number, items: Array<{id: number, title: string, quantity: number}> }`，更新`items`数组中特定`id`的对象的`quantity`。
    - 核心：创建新的`cart`对象，并使用`map`方法生成新的`items`数组，其中目标对象被替换为新的、已更新的副本。

**代码示例**

1. 练习 1

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [game, setGame] = useState({
        id: 1,
        player: { name: "Alice" },
      });

      const updatePlayerName = () => {
        setGame((prevGame) => ({
          ...prevGame,
          player: { ...prevGame.player, name: "Bob" },
        }));
      };

      return (
        <div>
          <h1>Game ID: {game.id}</h1>
          <h2>Player: {game.player.name}</h2>
          <button onClick={updatePlayerName}>Change Player Name</button>
        </div>
      );
    }

    export default App;
    ```

2. 练习 2

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [pizza, setPizza] = useState({
        name: "Margherita",
        toppings: ["Mushroom"],
      });

      const addTopping = () => {
        setPizza((prevPizza) => ({
          ...prevPizza,
          toppings: [...prevPizza.toppings, "Cheese"],
        }));
      };

      return (
        <div>
          <h1>{pizza.name} Pizza</h1>
          <ul>
            {pizza.toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
          <button onClick={addTopping}>Add Olives</button>
        </div>
      );
    }

    export default App;
    ```

3. 练习 3

    ```tsx
    // App.tsx
    import { useState } from "react";

    function App() {
      const [cart, setCart] = useState({
        discount: 10,
        items: [
          { id: 1, title: "Apple", quantity: 2 },
          { id: 2, title: "Banana", quantity: 3 },
        ],
      });

      const updateQuantity = (id: number, newQuantity: number) => {
        setCart((prevCart) => ({
          ...prevCart,
          items: prevCart.items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
        }));
      };

      return (
        <div>
          <h1>Shopping Cart</h1>
          {cart.items.map((item) => (
            <div key={item.id}>
              <p>
                {item.title}: {item.quantity}
              </p>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                Increase Quantity
              </button>
            </div>
          ))}
        </div>
      );
    }

    export default App;
    ```

## Ex 构建 ExpandableText 组件

> 简述：此练习旨在综合运用 React 的状态管理、props、条件渲染和事件处理知识，构建一个可展开/收起的文本组件，该组件能根据设定的最大字符数自动截断长文本，并提供“更多”/“更少”按钮进行切换。

**练习**

1. 题干

    - 编写一个 ExpandableText 组件，用于展示可能过长的文本。组件接收一个 children（字符串）和一个可选的 maxChars（最大显示字符数，默认 100）。

2. 功能要求

    - 当文本长度小于等于 maxChars 时，直接完整显示；
    - 当文本超出 maxChars 时，默认截断并在末尾显示 ..；
    - 提供一个按钮，可在 展开完整文本 和 收起部分文本 之间切换，按钮文字随状态显示 more/less。

**代码示例**

1. 构建 ExpandableText 组件

    ```tsx
    // ExpandableText.tsx
    import { useState } from "react";

    interface Props {
      children: string;
      maxChars?: number;
    }

    const ExpandableText = ({ children, maxChars = 100 }: Props) => {
      const [isExpanded, setIsExpanded] = useState(false);

      if (children.length <= maxChars) return <p>{children}</p>;

      const text = isExpanded ? children : children.substring(0, maxChars) + "..";

      return (
        <p>
          {text}
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
      >
            {isExpanded ? "less" : "more"}
          </button>
        </p>
      );
    };

    export default ExpandableText;

    // App.tsx
    import { useState } from "react";
    import ExpandableText from "./components/ExpandableText";

    function App() {
      const [cart, setCart] = useState({
        discount: 10,
        items: [
          { id: 1, title: "Apple", quantity: 2 },
          { id: 2, title: "Banana", quantity: 3 },
        ],
      });

      const updateQuantity = (id: number, newQuantity: number) => {
        setCart((prevCart) => ({
          ...prevCart,
          items: prevCart.items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
        }));
      };

      return (
        <div>
          <ExpandableText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
            delectus in sit inventore, eaque eos suscipit exercitationem qui
            expedita architecto magnam ratione asperiores unde enim! Accusantium
            consequatur ab obcaecati asperiores. Nemo, fuga! Sequi, quasi blanditiis
            repellat natus dolorum eveniet ratione necessitatibus doloremque vel
            labore debitis et iste consequatur neque provident facilis distinctio
            culpa quibusdam odio ad voluptas pariatur architecto? Unde ea hic
            corporis expedita eius, quia vero quo dignissimos voluptatibus, corrupti
            natus qui voluptas similique magni provident debitis quaerat nulla,
            maiores repellat iure inventore. Ut, fugit? Vero repellat dolore
            accusantium quae odit magni illum numquam, natus non soluta, illo
            voluptatem!
          </ExpandableText>
        </div>
      );
    }

    export default App;
    ```

# Building Forms

## 构建基础表单

> 简述：构建 HTML 表单结构是实现用户输入功能的第一步。利用 CSS 框架（如 Bootstrap）可以快速美化表单，Emmet 等工具可加速标记编写。全局 CSS 可用于调整整体布局。

**知识树**

1. 表单基本结构

    - `<form>`：表单容器，包含所有输入与提交按钮。
    - `<div>`：字段组容器，常用 `mb-3` 添加下边距。
    - `<label>`：描述输入字段，`htmlFor` 绑定到对应输入的 `id`。
    - `<input>`：输入控件，常见类型：`text`、`number`，配合 `form-control` 类。
    - `<button type="submit">`：提交按钮，配合 `btn btn-primary` 类。

2. Bootstrap 样式辅助

    - `.form-label`：美化标签。
    - `.form-control`：统一输入框样式。
    - `.btn.btn-primary`：主要按钮风格。
    - `.mb-3`：字段组之间增加下边距。

3. Emmet 快捷生成

    - 例：`div.mb-3>label.form-label+input.form-control` → 快速生成一个字段组。
    - 例：`button.btn.btn-primary[type=submit]{Submit}` → 快速生成提交按钮。

4. 全局样式调整

    - 取消 main.tsx 中对 bootstap 引用的注释，或者重新引用 bootstrap
    - 在 `index.css` 中对 `body` 设置 `padding`，避免表单紧贴屏幕边缘。
    - 在 `main.tsx` 中导入 `bootstrap/dist/css/bootstrap.css` 与全局样式文件。

**代码示例**

1.  表单组件结构 (`Form.tsx`)

    ```tsx
    // components/Form.tsx
    const Form = () => {
      return (
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input id="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;


    // App.tsx
    import Form from "./components/Form";

    function App() {
      return (
        <div>
          <Form></Form>
        </div>
      );
    }

    export default App;
    ```

2.  全局 CSS (`index.css`) 与导入 (`main.tsx`)

    ```tsx
    // index.css
    body {
      padding: 20px;
    }

    // main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import 'bootstrap/dist/css/bootstrap.css'; // 导入Bootstrap
    import './index.css'; // 导入全局CSS

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```

## `onSubmit` 处理表单提交

> 简述：HTML 表单在提交时会默认刷新页面并向服务器发送请求。在 React 中需要通过 `event.preventDefault()` 阻止默认行为，再执行自定义逻辑（如打印日志或发送请求）。事件对象需标注为 `React.FormEvent`。

**知识树**

1. 表单的默认行为

    - 提交 `<form>` 会触发 页面刷新 + 表单数据提交到服务器。
    - 在 React SPA（Single Page Application） 中不需要这种行为，否则会导致页面重载。

2. 阻止默认提交

    - 使用事件对象 `event.preventDefault()`。
    - 这样表单提交不会刷新页面，可以在前端处理逻辑。
    - 表单默认刷新导致的问题：
        - 状态丢失：比如你购物车、登录状态、用户输入的其它内容，全都会因为刷新而清空。
        - 体验变差：页面白屏 → 重新加载所有 JS/CSS → 再渲染，明显卡顿。
        - 失去 SPA 的优势：如果每次提交都要全页刷新，那就和传统页面没区别了。

3. 提交事件绑定

    - 方式
        - 在`<form>`的 `onSubmit` 参数中接收一个函数或者写一个内联函数，作为提交之后的动作，函数默认会接收 `event` 参数，类型为 `React.FormEvent<HTMLFormElement>`。
    - 示例
        - 表单元素 `<form onSubmit={handleSubmit}>`。
        - `handleSubmit` 接收 `event` 参数，类型为 `React.FormEvent<HTMLFormElement>`，需要标注（Ts 语法），否则无法使用。
    - 注意：
        - 事件函数要引用，不要调用，即 `onSubmit={handleSubmit}` 而不是 `onSubmit={handleSubmit()}`。

4. 最佳实践

    - 简单场景可用内联函数，复杂逻辑应提取成独立函数。
    - 表单数据获取与提交逻辑可写在 `handleSubmit` 内，后续可扩展为调用后端 API。

**代码示例**

1. 内联写法（初学示例）

    ```tsx
    // components/Form.tsx
    const Form = () => {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}
    >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input id="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;


    // App.t
    import Form from "./components/Form";

    function App() {
      return (
        <div>
          <Form></Form>
        </div>
      );
    }

    export default App;
    ```

2. 独立函数写法（推荐）

    ```tsx
    // components/Form.tsx
    import { FormEvent } from "react";

    const Form = () => {
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
      };

      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input id="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

## `useRef` 访问输入字段值

> 简述：`useRef` Hook 提供了一种直接访问 DOM 元素（如输入字段）的方式，从而可以在表单提交时读取其当前值。这是一种非受控组件的实现方式。

**知识树**

1.  `useRef` 的作用与初始化

    - 作用：
        - `useRef(initialValue)` 返回一个包含 `.current` 属性的对象。将其绑定到 JSX 元素的 `ref` 上后，`.current` 就会指向该 DOM 节点。组件挂载后，你可以在任何时机通过 `nameRef.current?.value` 读取输入值。
    - 初始化
        - `useRef<T>(null)`，初始为 `null`，渲染完成后 React 会把 `.current` 指向对应的 DOM 节点。`T`为泛形写法，常用`HTMLInputElement`、`HTMLTextAreaElement`、`HTMLButtonElement`等，泛型指定的是`useRef`的`current`属性的类型，必须指定类型后，才能使用该属性。
    - 示例
        - `ref`：`const nameRef = useRef<HTMLInputElement>(null);`
    - 绑定到 DOM 元素
        - 在 JSX 中通过 `ref={nameRef}` 绑定到 `<input>`。
    - 为什么初始值是 `null`
        - 初次渲染时 DOM 还不存在，所以 `.current` 只能设为 `null`。渲染完成后 React 会赋上对应的 DOM 节点，卸载时再重置为 `null`。这只是 React 的设计选择，无需纠结。

2.  空值检查

    - 在使用使用`useRef.current` 的 value 属性之前，需要先进行空值检查，可以使用 `if` 或者`.?`语法实现

3.  封装输入值对象

    - 提交时将多个输入值组织成对象，方便后续发送到后端。
    - 数字类输入值需 `parseInt` 或 `Number()` 转换，如`ageRef.current.value` 的类型是 `string | undefined`

**代码示例**

1. 使用 useRef 获取输入值

    ```tsx
    // components/Form.tsx
    import { FormEvent, useRef } from "react";

    const Form = () => {
      const nameRef = useRef<HTMLInputElement>(null);
      const ageRef = useRef<HTMLInputElement>(null);
      const person = {
        name: "",
        age: 0,
      };

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // 传统 if
        // if (nameRef.current !== null) person.name = nameRef.current.value;
        // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

        person.name = nameRef.current?.value ?? person.name;
        person.age = parseInt(ageRef.current?.value ?? person.age.toString());
        console.log(person);
      };

      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input ref={ageRef} id="age" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

    - 点击提交时，`person` 对象会在控制台输出，如 `{ name: "John", age: 20 }`。

## `state` 受控组件

> 简述：通过 `useState` 将输入字段的值存储到 React 状态中，并在输入变化时更新状态。再把输入的 `value` 属性绑定到 state，实现 React 作为唯一数据源。这种方式称为受控组件。

**知识树**

1. 与非受控组件的区别

    - 非受控：用 `useRef` 直接读 DOM 的 `.value`。
    - 受控：用 `useState` 保存输入值，每个输入都必须同时绑定 `value` 和 `onChange`，由 React state 完全控制。

2. 状态与事件绑定（必做两步）

    - 定义状态：`const [person, setPerson] = useState({ name: "", age: "" });`
    - 每个输入字段：
        - `value={person.name}`（显示由 state 决定）
        - `onChange={e => setPerson({ ...person, name: e.target.value })}`（输入时更新 state）
    - TS 注意：`e.target.value` 始终是字符串，数字需要 `parseInt` 或 `Number()` 转换。

3. 性能与选择

    - 缺点：每次输入都会触发组件重渲染。
    - 大部分场景性能足够；如果表单特别复杂且性能成问题，可以考虑用 `useRef`（非受控）。

**代码示例**

1. 使用 state 管理表单输入

    ```tsx
    // components/Form.tsx
    import { FormEvent, useState } from "react";

    const Form = () => {
      const [person, setPerson] = useState({
        name: "",
        age: 0,
      });

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
      };

      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={(event) =>
                setPerson({ ...person, name: event.target.value })
              }
              value={person.name}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              onChange={(event) =>
                setPerson({ ...person, age: parseInt(event.target.value) })
              }
              value={person.age || ""}
              id="age"
              type="number"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

    - 输入框的值完全由 state 控制，保证数据和 UI 始终同步。

## React Hook Form 简化表单管理

> 简述：在复杂表单中，给每个输入手动绑定 `value` 和 `onChange` 很繁琐。**React Hook Form** 提供 `useForm` Hook，通过 `register` 自动管理输入值，避免重复代码，并在提交时直接拿到表单数据。

**知识树**

1. 为什么需要 React Hook Form

    - 用 `useState` 管理多个输入：每个字段都要写 `value` 和 `onChange`。
    - 输入一多 → 代码重复、容易出错。
    - React Hook Form 自动收集输入值，减少样板代码。

2. 基本用法

    - 安装：`npm i react-hook-form`
    - 导入：`import { useForm } from "react-hook-form";`
    - 调用：`const { register, handleSubmit } = useForm();`
        - 常用属性：
            - `register`：绑定输入字段
                - `register("字段名")` 会返回 `onChange`、`onBlur`、`ref` 等属性
            - `handleSubmit`：处理表单提交
    - 绑定：通过 `{...register("字段名")}` 展开绑定到 `<input>`。

3. 表单提交流程

    - 绑定提交事件：在 `<form>` 上使用 `onSubmit={handleSubmit(函数)}`，其中的 `handleSubmit` 来自 `useForm()`。
    - 接收数据：传入的函数会得到一个对象，包含表单中所有字段的值，一般命名为 `data`。
    - 函数位置：建议将提交函数单独定义，而不是直接写在 JSX 内联，提高可读性和可维护性。
    - TypeScript 类型：提交函数的参数类型默认为 `FieldValues`，可根据实际字段定义更精确的类型。

4. 特点与优势

    - 使用 ref 获取值 → 输入时不会强制触发 re-render，性能更好。
    - 代码更简洁：不用再写 `useState`、不用管理每个输入的 `value` 和 `onChange`。
    - 可扩展：支持验证、错误处理、默认值、重置等功能。

**代码示例**

1. 使用 React Hook Form 管理表单

    ```tsx
    // components/Form.tsx
    import { useForm, FieldValues } from "react-hook-form";

    const Form = () => {
      // 查看有哪些方法
      // const form = useForm();
      // console.log(form);

      // 查看 register 注册之后的属性
      // const { register } = useForm();
      // console.log(register("name"));

      const { register, handleSubmit } = useForm();

      const onSubmit = (data: FieldValues) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              className="form-control"
              {...register("age")}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

    - 相比用 `useState`，这里无需管理 `value` 和 `onChange`，代码更简洁。

## 表单验证（React Hook Form）

> 简述：React Hook Form 内置表单验证机制。通过在 `register` 时传入校验规则，结合 `formState.errors`，即可实现必填、最小长度等校验，并在表单无效时阻止提交。

**知识树**

1. 验证规则定义

    - 在 `register("字段名", { ...规则 })` 中传入验证条件。
    - 常见规则：
        - `required: true` → 必填
        - `minLength: n` → 字符长度下限
        - `maxLength: n` → 字符长度上限
        - 还可定义 `pattern` 或 `validate` 自定义规则。
    - 效果：仅提交无效，提示需要手写判断

2. 错误状态捕获

    - `useForm` 返回 `formState` 对象，包含 `errors`。
    - `errors` 以字段名为键，值包含 `{ type, message, ... }`。
    - 提交时若不满足规则，`handleSubmit` 不会执行回调，而是填充 `errors`。

3. 错误消息展示

    - 使用条件渲染判断 `errors.字段名?.type`。
    - 可通过可选链 `?.` 避免 `errors` 为空时报错。
    - 在 UI 上配合 `text-danger` 类显示红色提示。

4. TypeScript 类型安全

    - 定义接口表示表单结构，例如：
        ```ts
        interface FormData {
          name: string;
          age: number;
        }
        ```
    - 在 `useForm<FormData>()` 中传入泛型。
    - 好处：`errors.name` / `errors.age` 在编辑器里有智能提示。

5. 原生校验补充

    - 可以在 input 中直接添加`required`、`minLength={3}`等字段实现原生校验，缺点是原生样式不太美观

**代码示例**

1. 带验证的表单

    ```tsx
    // components/Form.tsx
    import { useForm, FieldValues } from "react-hook-form";

    interface FormData {
      name: string;
      age: number;
    }

    const Form = () => {
      // const { formState } = useForm();
      // 查看错误信息
      // console.log(formState.errors);

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

      const onSubmit = (data: FieldValues) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name?.type === "required" && (
              <p className="text-danger">Name is required.</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-danger">Name must be at least 3 characters.</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              className="form-control"
              {...register("age", { required: true, min: 18 })}
            />
            {errors.age?.type === "required" && (
              <p className="text-danger">Age is required.</p>
            )}
            {errors.age?.type === "min" && (
              <p className="text-danger">Age must be at least 18.</p>
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

    - 点击提交后，当输入为空或不符合规则时，会在输入下方显示错误提示，并阻止提交。
    - `errors` 根据表单结构自动补全，提高开发效率和安全性。

## 基于 Schema 的表单验证（Zod + React Hook Form）

> 简述：当表单字段和规则增多时，把验证规则分散在 JSX 中会很乱。可以用 Zod（其他如 Joi、yup ）依赖， 定义统一的 schema，再通过 `zodResolver` 与 React Hook Form 结合，把所有规则集中管理。

**知识树**

1. 为什么用 Schema 验证

    - 避免验证规则分散在各个 `register` 调用中。
    - 所有规则集中在一个 schema 对象里，代码更清晰。
    - Zod 支持链式规则、默认错误提示和自定义消息。

2. 定义 Schema

    - 官网：http://zod.dev/
    - 安装：`npm i zod`
    - 导入：`import { z } from "zod";`
    - 示例：
        ```ts
        const schema = z.object({
          name: z.string().min(3, { message: "Name must be at least 3 characters." }),
          age: z.number().min(18, { message: "Age must be at least 18." }),
        });
        ```
    - 替换掉接口
        ```ts
        // 从 schema 推导类型
        type FormData = z.infer<typeof schema>;
        ```

3. 集成 React Hook Form

    - 安装解析器：`npm i @hookform/resolvers`
    - 导入：`import { zodResolver } from "@hookform/resolvers/zod";`
    - 在 `useForm` 配置中加入 `resolver: zodResolver(schema)`。示例：
        ```tsx
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<FormData>({ resolver: zodResolver(schema) });
        ```
    - 删除 `register` 中的手写规则，所有验证交给 schema。

4. 错误处理与提示

    - UI 直接渲染
        - `{errors.name?.message}`，不用再写多个分支。
    - 数值转换
        - `valueAsNumber: true` 让输入值转为数字，避免字符串类型错误（React Hook Form）
    - 可定制提示
        - 通过 `message` 修改默认提示，如`.min(18, { message: "Age must be at least 18." }),`。
    - `schema.refine(checkFn, { message })`（新版本）
        - `checkFn` → 一个函数，接收当前字段的值，返回 `true` / `false`。
        - `{ message }` → 当校验失败时，要返回的错误提示。

**代码示例**

1. 使用 Zod + React Hook Form 统一验证

    ```tsx
    // components/Form.tsx
    import { useForm, FieldValues } from "react-hook-form";
    import { z } from "zod";
    import { zodResolver } from "@hookform/resolvers/zod";

    const schema = z.object({
      name: z.string().min(3, { message: "Name must be at least 3 characters." }),
      age: z
        .number()
        .refine((val) => typeof val === "number", {
          message: "Age must be a number",
        })
        .min(18, { message: "Age must be at least 18." }),
    });

    type FormData = z.infer<typeof schema>;

    const Form = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({ resolver: zodResolver(schema) });

      const onSubmit = (data: FieldValues) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              {...register("name")}
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              className="form-control"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      );
    };

    export default Form;
    ```

## 禁用无效表单的提交按钮

> 简述：简述：React Hook Form 提供 `formState.isValid` 标识表单整体是否有效。可将它绑定到提交按钮的 `disabled` 属性，确保用户只能在所有字段通过验证后才能提交。

**知识树**

1. 表单有效性状态

    - `formState.errors`：存储各字段错误。
    - `formState.isValid`：布尔值，表示整个表单是否通过验证。

2. 验证模式（`isValid` 的值依赖于表单验证模式）

    - `mode: "onSubmit"`（默认）：提交时才校验 → 初始按钮总是禁用。
    - `mode: "onChange"`：输入时实时校验 → 输入合格后按钮立即启用。
    - `mode: "onBlur"`：失去焦点时校验。

3. 按钮控制逻辑

    - `<button disabled={!isValid}>`
    - 表单未通过验证 → 禁用按钮。
    - 全部验证通过 → 按钮启用。

4. 使用场景

    - 登录 / 注册 / 支付等关键表单，避免用户提交无效数据。
    - 提升用户体验，减少后端无效请求。

**代码示例**

1. 禁用无效提交按钮

    ```tsx
    // components/Form.tsx
    import { useForm, FieldValues } from "react-hook-form";
    import { z } from "zod";
    import { zodResolver } from "@hookform/resolvers/zod";

    const schema = z.object({
      name: z.string().min(3, { message: "Name must be at least 3 characters." }),
      age: z
    	.number({
          error: (issue) =>
            issue.input === undefined ||
            issue.input === null ||
            Number.isNaN(issue.input)
              ? "Age is required."
              : "Age must be a number.",
        })
        .min(18, { message: "Age must be at least 18." }),
    });

    type FormData = z.infer<typeof schema>;

    const Form = () => {
      const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange", // 实时校验
      });

      const onSubmit = (data: FieldValues) => {
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              {...register("name")}
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              className="form-control"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>
          <button disabled={!isValid} className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    };

    export default Form;
    ```

    - 初始状态下按钮禁用，只有当 `name` 和 `age` 都满足规则后才启用。

## Project 费用追踪器

> 简述：迷你的费用追踪应用，旨在综合运用 React 基础知识、表单处理、状态管理和组件化思想，实现添加、展示、筛选和删除费用的功能。

**知识树**

1.  核心功能模块：
    - 费用添加表单 (Expense Form)：
        - 字段：描述、金额、类别。
        - 校验：所有字段必填，金额有效性等。
        - 提交：添加新费用到列表，并清空表单。
    - 费用列表 (Expense List)：
        - 展示：以表格形式显示所有费用条目（描述、金额、类别）。
        - 操作：提供删除单条费用的按钮。
        - 汇总：显示当前列表的总金额。
    - 费用筛选器 (Expense Filter)：
        - 功能：按类别筛选费用列表。
        - UI：一个下拉选择框，包含所有可用类别及“所有类别”选项。
        - 联动：筛选结果实时更新费用列表和总金额。

### 费用列表

**代码示例**

1. `ExpenseList.tsx`

    ```tsx
    // expense-tracker/components/ExpenseList.tsx
    interface Expense {
      id: number;
      description: string;
      amount: number;
      category: string;
    }

    interface ExpenseListProps {
      expenses: Expense[];
      onDelete: (id: number) => void;
    }

    function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
      if (expenses.length === 0) return null;

      const totalAmount = expenses.reduce(
        (acc, expense) => acc + expense.amount,
        0
      );

      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>{/* For delete button */}</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
              >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${totalAmount.toFixed(2)}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      );
    }

    export default ExpenseList;
    ```

2. `App.tsx`

    ```tsx
    // App.tsx
    import { useState } from "react";
    import ExpenseList from "./expense-tracker/components/ExpenseList";

    function App() {
      const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Transportation" },
      ]);

      return (
        <div>
          <ExpenseList
            expenses={expenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      );
    }

    export default App;
    ```

### 费用筛选器

**代码示例**

1. `ExpenseFilter.tsx`

    ```tsx
    // expense-tracker/components/ExpenseFilter.tsx
    const categories = ["Groceries", "Utilities", "Entertainment"];

    interface ExpenseFilterProps {
      onSelectCategory: (category: string) => void;
    }

    function ExpenseFilter({ onSelectCategory }: ExpenseFilterProps) {
      return (
        <select
          className="form-select mb-3"
          onChange={(event) => onSelectCategory(event.target.value)}
    >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      );
    }
    export default ExpenseFilter;
    ```

2. `App.tsx`

    ```tsx
    // App.tsx
    import { useState } from "react";
    import ExpenseList from "./expense-tracker/components/ExpenseList";
    import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

    function App() {
      const [selectedCategory, setSelectedCategory] = useState("");
      const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Transportation" },
      ]);

      const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

      return (
        <div>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      );
    }

    export default App;
    ```

### 费用添加表单

**代码示例**

1. `ExpenseForm.tsx`

    ```tsx
    // expense-tracker/components/ExpenseForm.tsx
    import { categories } from "../../App";

    function ExpenseForm() {
      return (
        <form className="mb-3">
          {" "}
          {/* Added margin to the form itself */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input id="description" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input id="amount" type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select id="category" className="form-select">
              <option value=""></option> {/* Empty default option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }
    export default ExpenseForm;
    ```

2. `App.tsx`

    ```tsx
    // App.tsx
    import { useState } from "react";
    import ExpenseList from "./expense-tracker/components/ExpenseList";
    import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
    import ExpenseForm from "./expense-tracker/components/ExpenseForm";

    export const categories = [
      "Groceries",
      "Utilities",
      "Entertainment",
      "Transportation",
    ];

    function App() {
      const [selectedCategory, setSelectedCategory] = useState("");
      const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Transportation" },
      ]);

      const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

      return (
        <div>
          <div className="mb-5">
            <ExpenseForm />
          </div>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      );
    }

    export default App;
    ```

### 集成 React Hook Form 与 Zod

**代码示例**

1. `categories.ts`

    ```tsx
    // expense-tracker/categories.ts
    const categories = [
      "Groceries",
      "Utilities",
      "Entertainment",
      "Transportation",
    ] as const;

    export default categories;
    ```

2. `ExpenseForm.tsx`

    ```tsx
    // expense-tracker/components/ExpenseForm.tsx
    import { z } from "zod";
    import { zodResolver } from "@hookform/resolvers/zod";
    import { useForm } from "react-hook-form";
    import categories from "../categories";

    const schema = z.object({
      description: z
        .string()
        .min(3, { message: "Description should be at least 3 characters." }),
      amount: z
        .number({
          error: (issue) =>
            issue.input === undefined ||
            issue.input === null ||
            Number.isNaN(issue.input)
              ? "Amount is required."
              : "Amount must be a number.",
        })
        .min(0.01, { error: "Amount must be at least 0.01." })
        .max(100_000, { error: "Amount cannot exceed 100,000." }),
      category: z.enum(categories, {
        error: (issue) =>
          issue.input == null || issue.input === ""
            ? "Category is required."
            : "Invalid category.",
      }),
    });

    type ExpenseFormData = z.infer<typeof schema>;

    function ExpenseForm() {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

      return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select {...register("category")} id="category" className="form-select">
              <option value=""></option> {/* Empty default option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }
    export default ExpenseForm;
    ```

3. `App.tsx`

    ```tsx
    // App.tsx
    import { useState } from "react";
    import ExpenseList from "./expense-tracker/components/ExpenseList";
    import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
    import ExpenseForm from "./expense-tracker/components/ExpenseForm";
    import categories from "./expense-tracker/categories";

    function App() {
      const [selectedCategory, setSelectedCategory] = useState("");
      const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Transportation" },
      ]);

      const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

      return (
        <div>
          <div className="mb-5">
            <ExpenseForm />
          </div>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      );
    }

    export default App;
    ```

### 添加费用

> 简述：实现将通过`ExpenseForm`提交的有效费用数据添加到`App`组件管理的费用列表中的功能，并确保在提交后清空表单。

**代码示例**

1. `ExpenseForm.tsx`

    ```tsx
    // expense-tracker/components/ExpenseForm.tsx
    import { z } from "zod";
    import { zodResolver } from "@hookform/resolvers/zod";
    import { useForm } from "react-hook-form";
    import categories from "../categories";

    const schema = z.object({
      description: z
        .string()
        .min(3, { message: "Description should be at least 3 characters." }),
      amount: z
        .number({
          error: (issue) =>
            issue.input === undefined ||
            issue.input === null ||
            Number.isNaN(issue.input)
              ? "Amount is required."
              : "Amount must be a number.",
        })
        .min(0.01, { error: "Amount must be at least 0.01." })
        .max(100_000, { error: "Amount cannot exceed 100,000." }),
      category: z.enum(categories, {
        error: (issue) =>
          issue.input == null || issue.input === ""
            ? "Category is required."
            : "Invalid category.",
      }),
    });

    type ExpenseFormData = z.infer<typeof schema>;

    interface Props {
      onSubmit: (data: ExpenseFormData) => void;
    }

    function ExpenseForm({ onSubmit }: Props) {
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

      return (
        <form
          onSubmit={handleSubmit((date) => {
            reset();
            onSubmit(date);
          })}
    >
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select {...register("category")} id="category" className="form-select">
              <option value=""></option> {/* Empty default option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }
    export default ExpenseForm;
    ```

2. `App.tsx`

    ```tsx
    // App.tsx
    import { useState } from "react";
    import ExpenseList from "./expense-tracker/components/ExpenseList";
    import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
    import ExpenseForm from "./expense-tracker/components/ExpenseForm";

    function App() {
      const [selectedCategory, setSelectedCategory] = useState("");
      const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Transportation" },
      ]);

      const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

      return (
        <div>
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(expense) =>
                setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
              }
            />
          </div>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      );
    }

    export default App;
    ```

# Connecting to the Backend

## Effect Hook

> 简述：React 组件必须是纯函数，不能在渲染时修改外部环境。凡是操作 DOM、调用接口、读写 localStorage 等副作用代码，都应该放在 `useEffect` 中执行，它会在组件渲染完成后运行。

**知识树**

1. 为什么需要 `useEffect`

    - 组件渲染：同样输入 → 必须产出同样 JSX。
    - 副作用：修改 DOM、发请求、存储数据 → 会改变外部世界，不应放在渲染函数中。
    - `useEffect`：让副作用在渲染后执行，保持渲染阶段纯净。

2. 基本用法

    - 语法：`useEffect(() => { /* 副作用代码 */ });`
    - 默认：每次渲染后都会执行。
    - 常见场景：设置焦点、修改标题、请求数据、操作缓存。

3. 使用规则

    - 只能在组件顶层调用，不能放在 if/for/函数里。
    - 可以在同一组件里多次使用，React 会按顺序依次执行。
    - 每个 effect 只做一类事情，职责清晰。

4. 特点

    - 与 `useState`、`useRef` 一样，是 Hook → 调用顺序必须固定。
    - 执行时机：组件渲染后 → DOM 已完成更新，适合写外部操作。

**代码示例**

1. 输入框自动聚焦 + 修改页面标题

    ```tsx
    import { useEffect, useRef } from "react";

    function App() {
      const ref = useRef<HTMLInputElement>(null);

      // 聚焦输入框
      useEffect(() => {
        if (ref.current) ref.current.focus();
      });

      // 修改页面标题
      useEffect(() => {
        document.title = "My App";
      });

      return (
        <div>
          <input ref={ref} type="text" className="form-control" />
        </div>
      );
    }

    export default App;
    }
    ```

    - 第一个 `useEffect` 让输入框自动获取焦点。第二个 `useEffect`设置页面标题。
    - React 会在渲染完成后依次执行这两个副作用。

## useEffect 的依赖数组

> 简述：`useEffect` 默认在每次渲染后执行。通过第二个参数——依赖数组，可以控制副作用运行的时机，避免无限循环或无效请求。

**知识树**

1. 默认行为

    - `useEffect(fn)`：每次渲染后都会执行 `fn`。
    - 若 `fn` 内部更新 state → 触发重新渲染 → 再次执行 effect → 可能陷入无限循环。

2. 依赖数组的三种用法

    - 省略依赖：`useEffect(fn)` → 每次渲染后运行。
    - 空数组 `[]`：只在组件挂载时运行一次（常用于初始化请求）。
    - 指定依赖 `[a, b]`：仅当 `a` 或 `b` 的值变化时重新运行。

3. 应用场景

    - `[]`：页面加载时请求一次数据。
    - `[category]`：当分类、搜索词等参数改变时重新加载数据。
    - 无依赖：调试时打印日志、或需要在每次渲染后运行的代码。

4. 注意事项

    - 写成 `[]` → 依赖更新不会触发 effect。
    - 忘写依赖 → effect 每次都跑，容易过度执行。
    - 在 Strict Mode（开发环境） 下，effect 会运行两次，用于测试副作用是否安全，生产环境只会运行一次。

5. Strict Mode

    - 由于测试环境默认开始严格模式，输出会重复两遍，正式环境无影响

**代码示例**

1. 根据依赖（分类）变化重新运行

    ```tsx
    // components/ProductList.tsx
    import { useEffect, useState } from "react";

    const ProductList = ({ category }: { category: string }) => {
      const [products, setProducts] = useState<string[]>([]);

      useEffect(() => {
        console.log("Fetching products in ", category);
        setProducts(["Clothing", "Household"]);
      }, [category]);

      return <div>ProductList</div>;
    };
    export default ProductList;


    // App.tsx
    import { useEffect, useRef, useState } from "react";
    import ProductList from "./components/ProductList";

    function App() {
      const [category, setCategory] = useState("");

      return (
        <div>
          <select
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
      >
            <option value="">Select</option>
            <option value="clothing">Clothing</option>
            <option value="household">Household</option>
          </select>

          <ProductList category={category} />
        </div>
      );
    }

    export default App;
    ```

    - 初始：不选分类 → 打印 `Fetching products in`。
    - 选择 Clothing → 打印 `Fetching products in clothing`。
    - 切换 Household → 打印 `Fetching products in household`。

## useEffect 的清理函数

> 简述：某些副作用需要在组件卸载或依赖变化时撤销或清理。在 `useEffect` 中返回一个函数即可实现清理逻辑，常见于断开连接、取消订阅、关闭定时器、销毁 UI 等场景。

**知识树**

1. 为什么要清理

    - 副作用常是“持续性的”，例如 WebSocket、事件监听、定时器。
    - 不清理 → 重复连接、多次订阅、内存泄漏。
    - 清理的目标：撤销或还原副作用带来的改变。

2. 用法

    - `useEffect(() => { 执行副作用; return () => { 清理副作用 }; }, [依赖]);`
    - 副作用函数可以选择返回清理函数；若无持续性副作用可省略。

3. 触发时机

    - 组件卸载时：React 会调用清理函数。
    - 依赖更新时：在运行新 effect 前，先执行旧的清理函数。

**代码示例**

1. 模拟聊天连接与断开

    ```tsx
    // App.tsx
    import { useEffect } from "react";

    const connect = () => console.log("connecting");
    const disconnect = () => console.log("disconnecting");

    function App() {
      useEffect(() => {
        connect();
        return () => disconnect();
      });

      return <div></div>;
    }

    export default App;
    ```

    - 挂载时：打印 "Connecting..."。
    - 卸载或重新挂载时：打印 "Disconnecting..."。

2. 清理定时器

    ```tsx
    // components/Timer.tsx
    import { useEffect } from "react";

    function Timer() {
      useEffect(() => {
        const id = setInterval(() => {
          console.log("tick:", Date.now());
        }, 1000);
        return () => clearInterval(id); // 清理：停止定时器
      }, []);

      return <div>Timer is running (check console)</div>;
    }

    export default Timer;

    // components/BadTimer.tsx
    import { useEffect } from "react";

    export default function BadTimer() {
      useEffect(() => {
        const id = setInterval(() => {
          console.log("tick from BadTimer", Date.now());
        }, 1000);
        // ❌ 没有清理
      }, []);

      return <div>BadTimer mounted</div>;
    }

    // App.tsx
    import { useState } from "react";
    import Timer from "./components/Timer";

    function App() {
      const [show, setShow] = useState(true);

      return (
        <div>
          <button onClick={() => setShow((s) => !s)}>
            {show ? "Unmount Timer" : "Mount Timer"}
          </button>
          {show && <Timer />}
        </div>
      );
    }

    export default App;
    ```

    - 若不清理定时器，组件卸载后定时器还会继续运行，造成内存泄漏。

## useEffect 获取远程数据

> 简述：组件加载时常需从服务端获取数据。应在 `useEffect` 中发起请求，避免渲染时产生副作用。推荐用 axios 发请求，并配合 TypeScript 接口定义数据类型，获得智能提示和类型安全。

**知识树**

0. 本节数据来源

    - https://jsonplaceholder.typicode.com/
    - 提供用户、帖子、评论、相册等测试数据。

1. 数据获取的基本流程

    - 定义状态：用 `useState` 创建用于存储数据的状态变量
    - 副作用触发：在 `useEffect` 中发起网络请求
    - 响应处理：通过 `setState` 更新 UI
    - 渲染：使用 `.map()` 遍历数据，动态生成组件元素

2. 异步通信：`axios` 与 `fetch` 的选择

    - `fetch` 是浏览器内置的原生 API，语法较原始
    - `axios` 是第三方库，优势包括：
        - 默认自动解析 JSON
        - 更好的错误处理与请求拦截
        - 支持请求取消、超时设置等扩展功能

3. 使用 axios 请求数据

    - 安装：`npm i axios`
    - 导入：`import axios from "axios";`
    - 基本调用：`axios.get(url).then(res => { ... })`
    - `axios.get<T>()`：可传入泛型 `T` 指定返回数据类型。

4. TypeScript 类型支持

    - 通过定义接口，将其传入泛型，能避免访问不存在，或者没必要访问的属性，并提供智能提示

5. 避免无限循环

    - 在 `useEffect` 的依赖数组里写 `[]`，确保只执行一次。
    - 若缺少 `[]`，`setState` 会触发重新渲染 → effect 又执行 → 无限请求。

**代码示例**

1. 获取用户列表并渲染

    ```tsx
    // App.tsx
    import { useEffect, useState } from "react";
    import axios from "axios";

    interface User {
      id: number;
      name: string;
    }

    function App() {
      const [users, setUsers] = useState<User[]>([]);

      useEffect(() => {
        axios
          .get<User[]>("https://jsonplaceholder.typicode.com/users")
          .then((res) => setUsers(res.data));
      }, []);

      return (
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
    ```

    - 页面加载时只请求一次。
    - 使用接口 `User` 约束数据结构，编辑器可提示 `.id`、`.name` 等属性。
    - 渲染列表时自动更新 UI。

## 理解 Axios 的 GET 请求

> 简述：`axios.get()` 会发出一次 HTTP 请求。HTTP 消息由 headers（元信息） 和 body（数据） 组成。用浏览器 DevTools 的 Network 面板可直观看到请求方法、URL、状态码、请求/响应头与响应体（Preview/Response）。

**知识树**

1. HTTP 是什么

    - 浏览器与服务器通信的协议
    - 访问网站/接口本质是发 HTTP 请求，收 HTTP 响应

2. Axios GET 做了什么

    - 生成并发送 `GET /endpoint` 请求
    - 等待服务器返回响应（状态码、headers、body）

3. 在 DevTools 里如何看

    - Network → 过滤 Fetch/XHR
    - 选中请求 → Headers（URL、Method、Status、Request/Response Headers）
    - Preview（结构化查看体）与 Response（原始文本）
    - React 18 开发环境启用 StrictMode 时，副作用会二次触发，可能看到重复请求（仅开发环境）

4. HTTP 消息结构（最常用）

    - 请求：`Method + URL`、Request Headers（如 `Accept`、`Authorization`）、Request Body（GET 一般无体）
    - 响应：Status（如 200）、Response Headers（如 `Content-Type`、`Cache-Control`）、Response Body（JSON/文本/二进制）

## useEffect 中的错误处理

> 简述：网络请求可能失败（网络中断、服务端宕机、URL 错误等）。在请求 Promise 链上使用 `.catch` 捕获错误，并结合 `useState` 保存错误信息，在界面中动态展示提示，避免空白页面。

**知识树**

1. 为什么要处理错误

    - 请求可能失败：网络断开、接口错误等。
    - 不处理：控制台报错，用户只看到空白或卡死。
    - 正确做法：捕获错误 → 存入状态 → UI 反馈。

2. Promise 的错误捕获

    - `axios.get(...).then(...).catch(err => {...})`。
    - `catch` 回调接收错误对象，常见属性：`message`、`code`、`response`。

3. 示例处理流程

    - 定义一个 `error` 状态变量（初始为空字符串）。
    - `.catch` 时调用 `setError(err.message)`。
    - 在渲染函数中使用条件渲染：`{error && <p>...</p>}`。

**代码示例**

1. 错误处理与提示

    ```tsx
    // App.tsx
    import { useEffect, useState } from "react";
    import axios from "axios";

    interface User {
      id: number;
      name: string;
    }

    type Status = "idle" | "loading" | "success" | "error";

    function App() {
      const [status, setStatus] = useState<Status>("idle");
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");

      useEffect(() => {
        axios
          .get<User[]>("https://jsonplaceholder.typicode.com/Xusers") // 故意写错
          .then((res) => {
            setUsers(res.data);
            setStatus("success");
          })
          .catch((err) => {
            setError(err.message);
            setStatus("error");
          });
      }, []);

      return (
        <>
          <h1>Users</h1>
          {status === "error" && <p className="text-danger">{error}</p>}
          {status === "success" && (
            <ul>
              {users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          )}
        </>
      );
    }

    export default App;
    ```

    - 当请求失败时 → `setError` 保存错误信息 → 页面渲染红色错误提示。
    - 当请求成功时 → 渲染用户列表。

## useEffect 中使用 async/await

> 简述：请求返回的是 Promise，可以用 `async/await` 代替 `then/catch`。在 `useEffect` 中不能直接写 `async`，必须在内部定义一个异步函数并调用，再配合 `try/catch` 处理错误。

**知识树**

4. 对比与取舍

    - `then/catch` 写法更简洁。
    - `async/await` 可读性好，但需要额外函数、`try/catch`、类型断言。
    - 两种写法都正确，按团队习惯选择。

5. useEffect 的限制

    - React 不允许直接传 `async` 函数给 `useEffect`。
    - 解决办法：在 `useEffect` 内部定义一个异步函数并调用。

6. 错误处理

    - 异步代码需配合 `try/catch` 捕获错误。
    - TypeScript 中 `catch` 的 `error` 默认是 `unknown`。
    - 需要用 `error as AxiosError` 显式断言类型。

**代码示例**

1. async/await 写法

    ```tsx
    // App.tsx
    import { useEffect, useState } from "react";
    import axios, { AxiosError } from "axios";

    interface User {
      id: number;
      name: string;
    }

    type Status = "idle" | "loading" | "success" | "error";

    function App() {
      const [status, setStatus] = useState<Status>("idle");
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");

      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const res = await axios.get<User[]>(
              "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(res.data);
            setStatus("success");
          } catch (err) {
            setError((err as AxiosError).message);
            setStatus("error");
          }
        };

        fetchUsers();
      }, []);

      return (
        <>
          <h1>Users</h1>
          {status === "error" && <p className="text-danger">{error}</p>}
          {status === "success" && (
            <ul>
              {users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          )}
        </>
      );
    }

    export default App;
    ```

    - `useEffect` 内部定义 `fetchUsers` 异步函数并调用。
    - `try/catch` 捕获请求失败，错误信息显示在界面上。
    - 相比 `then/catch`，代码更线性，但更啰嗦。
