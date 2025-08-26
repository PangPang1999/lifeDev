¬**Prerequisites**

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

1.  `components/ListGroup.tsx`

    ```tsx
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
    function List() {
      return (
        <h1>Heading</h1>
        <ul><li>A</li></ul>  // ❌ 同级两个根
      );
    }
    ```

2. 用真实元素包裹（有额外 DOM）

    ```tsx
    function List() {
      return (
        <div>
          <h1>Heading</h1>
          <ul><li>A</li></ul>
        </div>
      );
    }
    ```

    - 适合需要容器语义/样式/事件时。

3. 用 Fragment（无额外 DOM）

    ```tsx
    import { Fragment } from 'react';

    function List() {
      return (
        <Fragment>
          <h1>Heading</h1>
          <ul><li>A</li></ul>
        </Fragment>
      );
    }
    ```

    - 渲染结果不多出 `div`；结构更“干净”。

4. 短语法 Fragment（最简洁）

    ```tsx
    function List() {
      return (
        <>
          <h1>Heading</h1>
          <ul><li>A</li></ul>
        </>
      );
    }
    ```

    - **限制**：不能写属性或 `key`。

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
