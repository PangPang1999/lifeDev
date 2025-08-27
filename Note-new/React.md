¬**Prerequisites**

- JavaScript
- HTML&CSS

# 技巧

1. 查看错误信息：view——problem
2. 快速生成组件：`rafce`（配合 VS code 插件 `ES7+ React/Redux/React-Native snippets`）
3. 浏览器查看组件信息：（配合 Chrome 插件 React Developer Tools

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
    - State 可变但需规范更新：必须用 `setXxx(...)`，不可直接赋值或原地修改对象/数组（保持不可变更新）。

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
