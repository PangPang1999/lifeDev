# 目录

> ```bash
> 
> find "/Users/fang/Desktop/React" -type f -name "*.srt" -exec sh -c '
> for file; do
>  output="${file%.srt}.txt"
>  sed -n "/^[^0-9]*$/p" "$file" > "$output"
> done
> ' sh {} +
> ```
>
> https://codewithmosh.com/p/the-ultimate-full-stack-javascript-developer-bundle-2024-edition
>  按照mosh的课程顺序学习



### 1. **Getting Started (2分钟)**

1. 欢迎
2. 学习前提

### 2. **Getting Started with React (18分钟)**

1. 什么是React
2. 设置开发环境
3. 创建React应用
4. 项目结构
5. 创建React组件
6. React的工作原理

### 3. **Building Components (1小时)**

1. 介绍
2. 创建ListGroup组件
3. 使用Fragments
4. 渲染列表
5. 条件渲染
6. 处理事件
7. 管理状态
8. 通过Props传递数据
9. 通过Props传递函数
10. 状态 vs Props
11. 传递Children
12. 使用React Dev Tools检查组件
13. 练习：构建按钮组件
14. 练习：显示警告框

### 4. **Styling Components (32分钟)**

1. 介绍
2. 使用Vanilla CSS（传统CSS）
3. 使用CSS Modules
4. 使用CSS-in-JS
5. 关注点分离（Separation of Concerns）
6. 内联样式
7. 流行的UI库
8. 添加图标
9. 练习：使用CSS Modules
10. 构建Like组件

### 5. **Managing Component State (42分钟)**

1. 介绍
2. 理解State Hook
3. 选择State结构
4. 理解严格模式（Strict Mode）
5. 更新数组对象
6. 更新数组
7. 使用Immer简化更新逻辑
8. 更新嵌套对象
9. 保持组件的纯粹性
10. 共享State between 组件
11. 更新对象
12. 练习：构建一个可展开的文本组件

### 6. **Building Forms (71分钟)**

1. 介绍
2. 构建表单
3. 受控组件
4. 访问输入字段
5. 提交表单
6. 使用React Hook Form管理表单
7. 应用表单验证
8. 使用Zod进行基于模式的验证
9. 禁用提交按钮
10. 构建ExpenseForm（费用表单）
11. 构建ExpenseFilter（费用过滤器）
12. 构建ExpenseList（费用列表）
13. 添加费用
14. 集成React Hook Form和Zod

### 7. **Connecting to the Backend (69分钟)**

1. 介绍
2. 理解Effect Hook
3. 理解HTTP请求
4. 使用Async/Await
5. 取消Fetch请求
6. 显示加载指示器
7. 提取可重用的API客户端
8. 创建数据
9. 更新数据
10. 删除数据
11. 处理错误
12. 创建自定义数据获取Hook
13. 提取用户服务（User Service）
14. 提取通用HTTP服务
15. 更新数据
16. 清理Effect
17. Effect依赖关系

### 8. **Project - Building a Video Game Discovery App (3小时)**

1. 我们要构建什么
2. 设置项目
3. 安装Chakra UI
4. 构建导航栏
5. 构建颜色模式切换
6. 实现暗黑模式
7. 创建响应式布局
8. 创建自定义的游戏数据获取Hook
9. 获取游戏数据
10. 获取平台信息
11. 获取游戏的类型（Genres）
12. 显示平台图标
13. 创建游戏卡片
14. 获取优化的图片
15. 改进用户体验，使用加载骨架屏
16. 显示评论分数（Critic Score）
17. 重构：去除重复样式
18. 显示游戏类型（Genres）
19. 按类型过滤游戏
20. 显示加载中的spinner
21. 修复Chakra菜单的问题
22. 按平台过滤游戏
23. 构建排序选择器
24. 构建平台选择器
25. 处理没有图片的游戏
26. 排序游戏
27. 高亮显示所选类型
28. 重构：提取查询对象
29. 自定义Chakra主题
30. 添加表情符号（Emojis）
31. 清理游戏卡片
32. 添加动态标题
33. 提交静态数据
34. 搜索游戏
35. 构建搜索输入框
36. 清理游戏类型
37. 重构游戏网格
38. 部署到Vercel
39. 课程总结
40. 接下来的步骤





# React应用的构建



## 初始化react

1. **两种创建 React 应用的方式**：
   - **Create React App (CRA)**：官方推荐的工具，适合新手和常规项目。
   - **Vite**：越来越受欢迎的工具，速度更快，生成的包体积更小。
2. **使用 Vite 创建 React 应用**：
   - 打开终端，进入项目文件夹，运行 `npm create vite@4.1.0` 创建项目（指定版本 4.1.0 以保证与课程版本一致）。
   - **项目名称**：默认是 `vite-project`，可以修改为你喜欢的名称，如 `react-app`。
   - **选择框架**：使用上下箭头选择 **React**。
   - **选择语言**：选择 **TypeScript**。
3. **安装依赖**：
   - 使用 `cd` 进入项目文件夹，运行 `npm install` 或 `npm i` 安装第三方依赖。
4. **在 VS Code 中打开项目**：
   - 使用 `code .` 命令打开 VS Code。如果该命令无法运行，可以将文件夹拖放到 VS Code 中。
   - 打开嵌入式终端：按 **Ctrl + `** 或通过菜单打开新的终端。
5. **启动开发服务器**：
   - 运行 `npm run dev` 启动开发服务器，访问 **localhost:573**（端口号会根据机器而不同）查看应用。
6. **接下来的步骤**：
   - 在项目成功启动后，下一步是创建第一个 React 组件。





## react项目的基本结构

1. **项目结构**：
   - **node_modules**：存放所有安装的第三方库（例如 React）。你不需要直接操作此文件夹。
   - **public**：存放公共资源（如图片、视频文件等）。
   - **src**：包含源代码，当前项目的主要代码都在这里，`App` 组件是唯一的组件。
   - **index.html**：基础的 HTML 模板，包含一个 `root` 容器用来挂载 React 应用。
   - **package.json**：包含项目信息（如名称、版本等）以及依赖项（如 React 和 React-DOM）和开发依赖项。
   - **tsconfig.json**：TypeScript 配置文件，用于指导 TypeScript 如何编译代码。
   - **vite.config.ts**：Vite 配置文件，管理构建工具设置，通常不需要修改。
2. **重点**：
   - 在 `src` 文件夹下，当前有一个 **App** 组件，我们将重写代码并添加更多组件。
   - `index.html` 里的 `root` 容器会作为 React 应用的挂载点，应用会在此渲染。
   - **package.json** 和 **tsconfig.json** 文件管理依赖和编译配置，通常无需手动更改，除非需要做高级配置。



## 创建react组件

1. **创建 React 组件**：

   - **文件扩展名**：React 组件使用 `.tsx` 扩展名。
   - **组件命名**：遵循 **Pascal 命名法**（每个单词的首字母大写、驼峰命名法），例如 `Message`。

2. **函数组件 vs 类组件**：

   - 推荐使用 **函数式组件**，它们更简洁且易于编写。

     - ```tsx
       function Message(){
         //JSX javascript XML
         return <h1>Hello World</h1>;
       }
       export default Message;
       
       ```

   - 如果维护的是旧项目，可能会使用 **类组件**，可以参考前面的课程学习类组件。

3. **JSX 语法**：

   - **JSX** 是 JavaScript 扩展语法，看起来像 HTML，但实际上它会被编译为 JavaScript 代码（`React.createElement`）。
   - JSX 允许我们在组件中编写 HTML 和 JavaScript 代码。

4. **导出组件**：

   - 创建的组件需要 **默认导出**，以便其他组件或文件可以使用。

5. **动态内容**：

   - JSX 中使用大括号 `{}` 包裹 JavaScript 表达式，可以插入动态数据（例如，变量或函数的返回值）。
   - 可以使用条件语句动态渲染不同的 UI 内容。

6. **热模块替换（HMR）**：

   - Vite 在后台监控文件变化并自动刷新浏览器页面，提升开发效率。



## 虚拟 DOM

1. **组件树与虚拟 DOM**：

   - **组件树**：React 应用的组件结构，例如 `App` 作为根组件，`Message` 作为子组件。
   - **虚拟 DOM**：React 会将组件树转化为虚拟 DOM，虚拟 DOM 与浏览器中的实际 DOM 不同，它是我们组件树的一个轻量级的内存表示，每个节点代表一个组件及其属性。

2. **虚拟 DOM 更新**：

   - 当组件的**状态**或**数据**发生变化时，React 会更新虚拟 DOM 中的节点，反映新的状态。

   - React 会比较新旧虚拟 DOM，识别需要更新的部分，最终将更新反映到实际 DOM 中。

   - > 当组件的 **状态** 或 **数据** 发生变化时，React 会更新虚拟 DOM 中对应的节点，反映新的状态。接着，React 会将当前版本的虚拟 DOM 与之前的版本进行比较，以找出需要更新的节点。然后，React 会将这些节点更新到实际的 DOM 中。

3. **`react-dom` 库**：

   - 虚拟 DOM 和实际 DOM 的更新是由 **react-dom** 库处理的，而不是 React 本身。
   - 在 `index.html` 中，`<script>` 引用了 `main.tsx` 文件，`react-dom` 会将组件树渲染到 `id="root"` 的 DOM 元素中。

4. ##### **ReactDOM 与平台无关性**

   - **ReactDOM**：用于在 Web 浏览器中渲染 React 组件。
   - **React Native**：用于在移动设备上渲染 React 组件。
   - 平台无关性
     - React 本身与具体平台无关，可以在多种环境中使用（Web、移动端、桌面端）。

5. #####  **StrictMode**

   - **StrictMode** 是 React 的内置开发工具组件。
   - 帮助识别潜在问题（如不安全的生命周期方法或不纯的组件）。
   - 不会在生产环境中渲染，且不会影响最终用户体验。

6. ##### **React 的高效性**

   - 虚拟 DOM 比较：
     - React 会将新的虚拟 DOM 与旧的虚拟 DOM 进行对比（称为 Diffing 算法）。
     - 仅更新实际 DOM 中需要修改的部分，减少不必要的操作。
   - **性能优化**：通过虚拟 DOM 和分层更新机制，React 提升了应用性能，尤其适用于大型项目。

------

虚拟 DOM 和 `react-dom` 是 React 的核心技术，它们通过高效地更新组件状态和渲染过程，提升了 React 应用的性能。同时，React 作为平台无关的库，能支持跨平台应用开发，既能在 Web 上运行，也能在移动端和桌面设备上运行。



## React的定位

##### **1. 库（Library）与框架（Framework）的区别**

- **库**：专注于特定功能。开发者调用库提供的功能。例如：React。
- **框架**：提供完整的工具和规则，用于构建完整的应用程序。开发者遵循框架的设计。例如：Angular、Vue。
- **类比**：库是一个独立的工具，而框架是一个包含多种工具的工具箱。

##### **2. React 的定位**

- React 是一个 **专注于用户界面构建的 JavaScript 库**。
- 它最擅长：
  - 创建动态的 UI。
  - 提供组件化开发的能力。

##### **3. 现代应用开发中的其他需求**

React 仅负责 UI 层，现代应用通常还需要处理以下问题：

- **路由**：使用工具如 React Router。
- **HTTP 请求**：如 Axios 或 Fetch API。
- **状态管理**：如 Redux 或 Context API。
- **国际化**：如 i18next。
- **表单验证**：如 Formik 或 React Hook Form。
- **动画**：如 Framer Motion。

##### **4. React 的灵活性**

- **无侵入性**：React 对额外工具没有强制性要求，开发者可以根据需求选择最合适的工具。
- **可扩展性**：React 的生态系统中有许多成熟的第三方工具。

##### **5. 学习路径**

- 本课程的这一部分专注于 React 的核心概念，包括组件、状态、和 JSX。
- 后续课程将深入探讨 React 生态系统中的其他工具（如状态管理、路由等）。



# React 应用的基础概念



## **React 基础概念：打好根基**

1. **构建组件（Building Components）**。
2. **使用 JSX 渲染标记（Rendering Markup with JSX）**。
3. **管理组件的状态（Managing State）**。
4. **通过 Props 向组件传递输入（Passing Input to Components）**。
5. **调试 React 应用（Debugging React Applications）**。

笔记

1. 组件化开发：
   - 学习如何创建函数组件和类组件。
   - 理解组件的生命周期。
2. JSX 渲染：
   - 掌握 JSX 的语法和用法。
   - 理解 JSX 是如何被编译成 JavaScript 的。
3. 状态管理：
   - 学习 `useState` 钩子。
   - 理解状态如何触发组件的重新渲染。
   - 理解--如何在组件中管理动态数据。
4. 传递 Props：
   - 学会通过 Props 向子组件传递数据。
   - 通过属性向组件传递数据，增强组件的可重用性。
   - 理解 Props 的不可变性。
5. 调试技巧：
   - 使用 React Developer Tools。
   - 学习如何通过日志和断点排查问题。







## 组件化开发-创建组件

#### 1. 安装 Bootstrap

- Bootstrap 是一个流行的 CSS 库，用于快速为应用添加样式。
- 在项目中安装 Bootstrap：
  `npm install bootstrap`

#### 2. 引入 Bootstrap

- 删除不需要的 `app.css` 和 `index.css` 文件。
- 在 `main.tsx` 中引入 Bootstrap 样式：
  `import 'bootstrap/dist/css/bootstrap.css';`

#### 3. **创建 ListGroup 组件**

- 创建 `components` 文件夹（推荐做法），并在其中创建 `list-group.tsx` 文件。
- 使用 Pascal 命名法命名组件文件和函数（例如：`ListGroup`）。
- 在 `app.tsx` 中导入并使用 `ListGroup` 组件。

#### 4. **使用 Bootstrap List Group**

- 在 Bootstrap 文档 中找到 **List group** 组件，复制标记并粘贴到组件中。
- 注意：将 `class` 改为 `className`，因为 `class` 是 JavaScript/TypeScript 中的保留字。

#### 5. 格式化代码

- 使用 **Prettier** 格式化代码，确保 JSX 代码按规范格式化。
- 如果格式化失败，手动配置默认格式化工具。

#### 6. **总结**

目前的 **ListGroup** 组件已经渲染成功，但功能较为简单，接下来的课程会逐步增加更多功能，支持动态渲染和显示列表项。

## react只有一个根组件

##### **1. React 组件返回多个元素的限制**

- React 组件只能返回 **一个元素**。
- 如果你尝试返回多个元素，React 会报错。

##### 2. 解决方案：使用 `div` 包裹

- 最常见的做法是使用一个额外的 `div` 元素将多个元素包裹起来。
- 但这种做法会在 DOM 中多出一个 `div` 元素，这通常是不必要的。

##### 3. 更好的做法：使用 `Fragment`

- **Fragment** 不会在 DOM 中添加额外的节点。
- 通过导入 `Fragment`，并用它包裹多个子元素，我们可以避免额外的 DOM 元素。

```
import { Fragment } from "react";

return (
  <Fragment>
    <h1>Heading</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </Fragment>
);
```

##### **4. 更简洁的语法：使用空标签 `<>` 和 `</>`**

- 通过使用 **空标签** `<>` 和 `</>`，React 会自动使用 `Fragment` 来包裹多个元素。
- 无需导入 `Fragment`，代码更简洁。

```
return (
  <>
    <h1>Heading</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </>
);
```

##### **5. 总结**

- **`Fragment`** 是解决 React 返回多个元素的常用方法，它不会在 DOM 中添加额外的节点。
- **空标签**（`<>` 和 `</>`）是 `Fragment` 的简洁语法。



## 动态渲染列表项

##### **1. 动态渲染列表项**

- **问题**：在 JSX 中，我们不能+直接使用 `for` 循环来渲染数据。
- **解决方法**：使用 **`map`** 方法，遍历数组并渲染每个项目。通过返回一个新的 JSX 元素来动态生成列表。

```jsx
function ListGroup() {
  const items = ["London", "Tokyo", "New York"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
```

##### **2. 使用 `map` 方法**

- **`map` 方法**：用于遍历数组，将每个元素转换为一个新的元素。
- 在 `map` 的回调函数中，我们将每个城市名称渲染为一个 `<li>` 元素。

##### **3. 处理警告：唯一的 `key` 属性**

- **React 要求**：当渲染一个列表时，必须为每个子元素指定一个唯一的 `key` 属性，用于标识该元素。
- 在这个例子中，我们可以直接使用 `item`（城市名称）作为 `key`，因为它们本身是唯一的。

```jsx
{items.map(item => <li key={item}>{item}</li>)}
```

##### **4. 为什么需要 `key` 属性？**

- React 使用 `key` 来优化渲染过程，尤其是在添加、删除或更新列表项时，帮助 React 精确地更新 DOM。

------

#### 关键总结

1. **动态渲染列表**：使用 `map` 方法遍历数组，生成动态的 JSX 元素。
2. **唯一 `key` 属性**：确保每个列表项都有一个唯一的 `key`，以便 React 正确更新 DOM。
3. **优化渲染**：`key` 的作用是优化 React 在处理动态变化时的性能。































































# 技巧

1.[babeljs.io/repl ](https://www.babeljs.io/repl )这个网站可以看到JavaScript XML（JavaScript 扩展语法）是如何转换成 JavaScript 的。

```tsx
<h1>Hello World</h1>
```

```js
'use strict"
/*#__PURE__*/ React.createElement("h1", null, "Hello World");
```

2.**命令面板**（按 `Ctrl + Shift + P` / `Cmd + Shift + P`）



1.**Prettier格式化代码**格式化代码时，我们可能会遇到格式化工具冲突。打开 **命令面板**，选择 `Format Document`。然后，选择 **Prettier** 作为默认代码格式化工具。

+ 快捷键：

  - **Mac**：`Shift + Command + P`

  - **Windows**：`Shift + Control + P`

2.通过 `<div>` 将所有元素包裹起来:**命令面板**搜索`wrap with abbreviation`,按 `Enter`，在输入框中输入 `div`，然后按 `Enter`
