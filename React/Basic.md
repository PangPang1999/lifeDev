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





___

## 条件渲染

Conditional Rendering

> 简述：
>  条件渲染是根据条件判断来动态渲染不同内容的一种技术。在 React 中，我们通常通过 `if` 语句、三元运算符（`? :`）以及逻辑与运算符（`&&`）来实现条件渲染。

**知识树**

1. **`if` 语句**

   - **原理**：`if` 语句用于判断某个条件是否成立，如果成立则执行一个块的代码，否则执行另一个块的代码。
   - **用法**：通常用来处理较为复杂的逻辑，或者需要多个条件的情况下。

2. **三元运算符（`? :`）**

   - 原理：三元运算符是 JavaScript 中的一个简写方式，可以根据条件返回不同的值。它的结构是：

     ```
     condition ? expr1 : expr2
     ```

     。

     - 如果 `condition` 为 `true`，返回 `expr1`。
     - 如果 `condition` 为 `false`，返回 `expr2`。

   - **用法**：适用于简单的条件判断，特别是在 JSX 中进行快速条件渲染时非常常用。

3. **逻辑与运算符（`&&`）**

   - 原理：逻辑与运算符在 JavaScript 中的运作方式是：
     - 如果左侧条件为 `true`，返回右侧表达式的值。
     - 如果左侧条件为 `false`，则直接返回 `false`，不再执行右侧的表达式。
   - **用法**：适合渲染条件成立时才显示的内容。常用于 JSX 中简洁的条件渲染。

4. **提取复杂逻辑**

   - **原理**：当条件判断变得复杂时，可以将逻辑提取到外部常量或函数中，避免将过多逻辑写在 JSX 内部，从而提高代码的可读性和可维护性。
   - **用法**：适合复杂的条件渲染逻辑，将逻辑提取到变量或函数中。

**代码示例**

1. **使用 `if` 语句进行条件渲染**

   - **原理**：使用 `if` 语句判断条件，若条件为 `true`，则渲染内容；否则返回其他内容或空值。
   - **用法**：适用于需要处理多个条件的情况。

   ```jsx
   if (items.length === 0) {
     return <p>No items found</p>;
   }
   return <ul>{items.map(item => <li>{item}</li>)}</ul>;
   ```

2. **使用三元运算符进行条件渲染**

   - **原理**：三元运算符根据 `condition` 的真假返回不同的 JSX 元素，常用于较简单的条件判断。
   - **用法**：适合在 JSX 中快速进行条件渲染，语法简洁。

   ```jsx
   {items.length === 0 ? <p>No items found</p> : <ul>{items.map(item => <li>{item}</li>)}</ul>}
   ```

   解释：

   - 如果 `items.length === 0` 为 `true`，则渲染 `<p>No items found</p>`。
   - 否则渲染 `ul` 列表。

3. **使用逻辑与（`&&`）运算符进行条件渲染**

   - **原理**：如果左侧条件为 `true`，则渲染右侧的内容；如果左侧条件为 `false`，则直接返回 `false`，不会渲染右侧的内容。
   - **用法**：适合用来渲染 **条件成立时** 才出现的内容，语法最简洁。

   ```jsx
   {items.length === 0 && <p>No items found</p>}
   ```

   解释：

   - 如果 `items.length === 0` 为 `true`，则渲染 `<p>No items found</p>`。
   - 如果条件为 `false`，则不渲染任何内容。

4. **提取逻辑到常量**

   - **原理**：将条件渲染的逻辑提取到一个常量中，使得 JSX 更加简洁易读。
   - **用法**：适用于复杂的条件渲染，避免把大量的条件判断写在 JSX 中。

   ```jsx
   const message = items.length === 0 ? <p>No items found</p> : null;
   return (
     <div>
       <h1>List</h1>
       {message}
     </div>
   );
   ```

5. **提取逻辑到函数**

   - **原理**：将复杂的渲染逻辑提取到一个函数中，函数可以接收参数来返回不同的渲染结果。
   - **用法**：适合需要根据不同条件动态渲染不同内容的情况。

   ```jsx
   const getMessage = () => {
     return items.length === 0 ? <p>No items found</p> : null;
   };
   return (
     <div>
       <h1>List</h1>
       {getMessage()}
     </div>
   );
   ```

6. **使用逻辑与（&&）的简化写法**

   - **原理**：可以通过逻辑与运算符在条件成立时渲染内容，省去 `null` 和三元运算符，使代码更加简洁。
   - **用法**：适合简单的条件渲染，避免冗余的 `null`。

   ```jsx
   {items.length === 0 && <p>No items found</p>}
   ```

------

#### 关键总结

1. **条件渲染的常用方法**：
   - `if` 语句：适用于复杂条件渲染。
   - 三元运算符：用于简单条件判断，语法简洁。
   - 逻辑与（&&）运算符：当条件成立时渲染，最简洁的条件渲染方法。
2. **代码清晰度**：
   - 复杂的条件渲染逻辑可以提取到常量或函数中，保持 JSX 简洁易读。
3. **最佳实践**：
   - 使用逻辑与（&&）进行简洁条件渲染，避免显式返回 `null`。







## 点击事件

> 简述： 在 React 中，处理点击事件通常是通过设置元素的 `onClick` 属性来完成的。可以在事件触发时执行一个箭头函数，也可以将事件处理逻辑提取到组件的独立函数中。在使用 TypeScript 时，还可以为事件参数提供类型注解，确保代码的类型安全。

**知识树**

1. **React 中的事件处理**
   - `onClick` 属性
   - 内联箭头函数与事件处理函数
   - 事件对象：`SyntheticEvent` 和跨浏览器兼容性
2. **TypeScript 中的事件处理**
   - 类型注解：如何为事件参数提供类型安全
   - `MouseEvent` 类型
   - 自动补全与类型检查
3. **实践中的事件处理**
   - 在 JSX 中处理点击事件
   - 提取事件处理逻辑到函数中

**代码示例**

1. **基本的点击事件处理**

   在 JSX 中为每个元素添加 `onClick` 属性，使用箭头函数处理点击事件：

   ```javascript
   const handleClick = () => {
     console.log('Clicked');
   };
   
   return (
     <ul>
       {items.map(item => (
         <li key={item} className="list-group-item" onClick={handleClick}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - `onClick` 绑定了一个箭头函数，当点击列表项时，控制台输出 `'Clicked'`。

2. **输出被点击的项**

   如果希望输出被点击的列表项，可以直接在 `onClick` 事件处理器中传递该项：

   ```javascript
   const handleClick = (item) => {
     console.log(item);
   };
   
   return (
     <ul>
       {items.map(item => (
         <li key={item} className="list-group-item" onClick={() => handleClick(item)}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - 点击每个列表项时，控制台会显示对应的项。

3. **输出项的索引**

   可以在 `map` 函数中添加第二个参数（索引），以便输出项的索引：

   ```javascript
   const handleClick = (item, index) => {
     console.log(`Item: ${item}, Index: ${index}`);
   };
   
   return (
     <ul>
       {items.map((item, index) => (
         <li key={item} className="list-group-item" onClick={() => handleClick(item, index)}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - 点击每个项时，控制台会显示项及其在数组中的索引。

4. **事件对象：`SyntheticEvent`**

   如果需要访问事件对象，可以将事件对象作为参数传递给事件处理函数：

   ```javascript
   const handleClick = (item, event) => {
     console.log(event);
     console.log('Item clicked:', item);
   };
   
   return (
     <ul>
       {items.map((item, index) => (
         <li key={item} className="list-group-item" onClick={(e) => handleClick(item, e)}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - 控制台输出的 `event` 对象是 React 的 `SyntheticEvent` 类型，提供了一些常用的事件属性（如 `clientX`、`clientY`、`target` 等）。

5. **TypeScript 中的类型注解**

   在 TypeScript 中，我们可以为事件处理函数的参数添加类型注解：

   ```typescript
   import { MouseEvent } from 'react';
   
   const handleClick = (item: string, event: MouseEvent) => {
     console.log(item, event);
   };
   
   return (
     <ul>
       {items.map((item, index) => (
         <li key={item} className="list-group-item" onClick={(e) => handleClick(item, e)}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - 在 `handleClick` 函数中，我们为 `event` 参数添加了 `MouseEvent` 类型，这样 TypeScript 就能够提供类型检查和自动补全功能。

6. **提取事件处理逻辑到函数中**

   如果事件处理逻辑较为复杂，建议将事件处理代码提取到组件外部的函数中，而不是直接写在 JSX 中：

   ```javascript
   const handleClick = (item) => {
     // 更复杂的逻辑
     console.log('Item clicked:', item);
   };
   
   return (
     <ul>
       {items.map(item => (
         <li key={item} className="list-group-item" onClick={() => handleClick(item)}>
           {item}
         </li>
       ))}
     </ul>
   );
   ```

   - 这种方式使得 JSX 更加简洁，且便于维护和扩展。

**总结**

- 在 React 中处理点击事件，通常使用 `onClick` 属性绑定事件处理函数。
- 可以选择在 `onClick` 中使用箭头函数，或者将事件处理函数提取到组件外部。
- TypeScript 提供了事件对象的类型注解，使得代码更加安全且易于维护。
- 使用 React 的 `SyntheticEvent` 类，可以处理跨浏览器兼容性问题，提供一致的事件对象。





### 

## 动态列表高亮与状态管理

### 一、课程目标

- 实现列表项点击高亮效果
- 学习React组件状态管理
- 掌握useState钩子的使用

### 二、核心知识点

1. 条件渲染与动态类名

```jsx
// 动态添加active类实现高亮
<li 
  className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
>
```

2. useState状态管理

```jsx
import { useState } from 'react';

function ListGroup() {
  // 声明状态变量
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // 事件处理
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li 
          key={item}
          className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
          onClick={() => handleClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

### 三、重点解析

1. useState工作机制

- **状态声明**：`const [var, setVar] = useState(initialValue)`
- 返回数组包含两个元素：
  - 状态变量：当前状态值
  - 状态更新函数：用于修改状态
- 示例分析：
  ```jsx
  const [selectedIndex, setSelectedIndex] = useState(-1);
  ```
  - 初始值设为-1表示默认无选中项
  - setSelectedIndex调用会触发组件重新渲染

2. 事件处理注意事项

- 必须使用箭头函数传递参数：
  ```jsx
  onClick={() => handleClick(index)}
  ```
- 直接调用`onClick={handleClick(index)}`会导致：
  - 立即执行函数
  - 无法正确传递事件对象

3. 组件状态独立性

- 相同组件的不同实例各自维护独立状态
- 示例场景：
  ```jsx
  <ListGroup />
  <ListGroup />
  ```
  - 两个列表的高亮状态相互独立

### 四、常见问题解决

1. 点击无反应排查步骤

1. 检查是否正确定义状态变量
2. 确认使用`setSelectedIndex`而非直接修改
3. 验证事件绑定是否正确使用箭头函数
4. 确保导入了useState钩子

2. 为什么需要useState？

- 直接修改局部变量无法触发重新渲染
- React需要通过状态更新机制追踪变化

### 五、扩展练习

1. 实现双击取消选中功能
2. 添加不同状态下的样式（如hover效果）
3. 创建可复用的高亮列表组件
4. 尝试使用useReducer替代useState管理状态

### 六、关键代码对比

| 错误实现                 | 正确实现                                                 |
| ------------------------ | -------------------------------------------------------- |
| `let selectedIndex = -1` | `const [selectedIndex, setSelectedIndex] = useState(-1)` |
| `selectedIndex = index`  | `setSelectedIndex(index)`                                |
| `onClick={handleClick}`  | `onClick={() => handleClick(index)}`                     |

### 七、最佳实践

1. 状态变量命名使用语义化名称
2. 保持状态更新函数的纯函数特性
3. 复杂状态建议使用对象形式
4. 多组件共享状态考虑状态提升

### 八、知识延伸

- 类组件中的setState方法
- 其他常用Hook：useEffect、useContext
- 状态管理库：Redux、MobX
- 不可变数据的重要性



通过本课学习，学生可以掌握React组件状态管理的基本原理，理解Hook在函数式组件中的应用，并能够实现动态交互效果。重点需要理解状态驱动UI更新的核心思想，这是React编程范式的关键所在。







### React组件复用技术：Props与TypeScript接口

#### 核心知识点

**1. 组件复用的必要性**

- 问题场景：当需要展示不同类型列表 （城市/姓名/颜色）时，避免为每个类型创建独立组件
- 解决方案：通过props实现组件通用化

**2. Props核心概念**

- 类比函数参数：组件接收外部输入的方式
- 动态内容传递：
  - 列表数据（items数组）
  - 标题内容（heading字符串）

**3. TypeScript接口应用**

```typescript
typescript
interface Props {
  items: string[];
  heading: string;
}
```

- 类型安全保障：定义组件接收参数的形状（Shape）
- 编译时检查：自动检测缺失/类型错误的props

**4. 参数解构实践**

```typescript
typescript
function ListGroup({ items, heading }: Props) {
  // 组件逻辑
}
```

- 优势：避免重复的`props.`前缀
- 最佳实践：直接在函数参数中解构

#### 重点解析

1. **Props工作机制**

   - 父组件传参方式：

   ```jsx
   jsx
   <ListGroup items={cities} heading="Cities" />
   ```

   - 动态/静态值传递：
     - 动态数据使用`{}`包裹变量
     - 静态字符串可直接使用引号

2. **TypeScript核心优势**

   - 类型安全：防止错误类型数据传递
   - 智能提示：IDE自动补全props属性
   - 错误预警：编译阶段捕获props缺失

#### 难点突破

1. **接口设计原则**

   - 可扩展性：未来可添加新属性（如`onSelectItem`）
   - 语义化命名：推荐使用`ComponentNameProps`格式

2. **解构语法陷阱**

   - 默认值设置：

   ```typescript
   typescript
   function ListGroup({ items = [], heading = "默认标题" }: Props) 
   ```

   - 可选属性处理：`interface Props { items?: string[] }`

#### 举一反三

1. **扩展应用场景**

```typescript
typescript
// 支持复杂数据对象
interface ListItem {
  id: number;
  text: string;
}

interface Props {
  items: ListItem[];
  heading: string;
  onSelect?: (item: ListItem) => void;
}
```

1. **样式定制化**

```jsx
jsx
// 添加className prop
<ListGroup className="special-list" ... />
```

1. **渲染优化**

```typescript
typescript
// 条件渲染辅助函数
const renderEmptyState = () => (
  <p>当前没有数据可供显示</p>
)
```

#### 最佳实践总结

1. **组件设计原则**
   - 单一职责：每个组件专注一个功能
   - 开放封闭：对扩展开放，对修改关闭
2. **TypeScript进阶技巧**
   - 泛型组件：`function GenericList<T>({ items }: { items: T[] })`
   - 类型复用：通过`export`共享接口定义
3. **调试技巧**
   - 控制台检查props：`console.log(props)`
   - React DevTools可视化props传递

------

通过本课学习，你将掌握创建高复用性React组件的核心方法，并学会使用TypeScript构建类型安全的组件接口，为后续学习复杂组件开发打下坚实基础







以下是整理后的React课程内容（翻译+课堂笔记）：

====================================================================
## 组件复用与Props使用

### 一、课程目标
- 理解组件复用的重要性
- 掌握Props的基本用法
- 学习TypeScript接口定义
- 实现通用列表组件

### 二、核心知识点

#### 1. Props基础概念
- 组件输入参数
- 类比函数参数
- 实现组件复用

#### 2. TypeScript接口定义
```typescript
interface Props {
  items: string[];
  heading: string;
}
```

#### 3. 组件参数传递
```jsx
<ListGroup items={cities} heading="Cities" />
```

#### 4. 参数解构
```jsx
function ListGroup({ items, heading }: Props) {
  // 组件实现
}
```

### 三、完整示例代码

```typescript
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index 
                ? "list-group-item active" 
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

### 四、重点解析

#### 1. 组件复用设计原则
- 单一职责原则
- 开放封闭原则
- 数据驱动原则

#### 2. Props使用最佳实践
1. 明确组件输入接口
2. 使用TypeScript类型检查
3. 合理设计Prop类型
4. 保持Prop的不可变性

#### 3. 解构赋值优势
- 代码简洁性
- 可读性提升
- 减少重复代码
- 明确依赖关系

### 五、常见问题解决

#### 1. Props传递失败排查
1. 检查接口定义
2. 验证Prop类型
3. 确认父组件传递
4. 查看控制台警告

#### 2. TypeScript类型错误处理
- 类型缺失提示
- 类型不匹配警告
- 可选参数处理
- 默认值设置

### 六、扩展练习
1. 添加可选Prop参数
2. 实现复杂数据结构传递
3. 创建带默认值的Props
4. 实现Prop类型验证

### 七、关键代码对比

| 传统方式                    | 改进方案                                 |
| --------------------------- | ---------------------------------------- |
| `function ListGroup(props)` | `function ListGroup({ items, heading })` |
| `props.items.map()`         | `items.map()`                            |
| 硬编码内容                  | 动态Prop传递                             |
| 无类型检查                  | TypeScript接口约束                       |

### 八、最佳实践建议
1. 保持Props的纯净性
2. 合理划分组件职责
3. 使用PropTypes或TypeScript
4. 避免过度抽象
5. 文档化组件接口

### 九、知识延伸
- 组件组合模式
- Context API
- 高阶组件
- Render Props模式
- 组件设计模式

====================================================================

通过本课学习，学生可以掌握React组件复用的核心方法，理解Props在组件通信中的重要作用，并能够设计出灵活可复用的组件。重点需要理解组件设计原则和TypeScript类型系统的结合使用，这是构建大型React应用的基础。





以下是翻译后的内容与课堂笔记：

====================================================================
## 组件事件通信与回调函数

### 一、课程目标
- 实现子组件事件通知父组件
- 掌握回调函数传递模式
- 学习TypeScript函数类型定义
- 构建可复用交互组件

### 二、核心知识点

#### 1. 事件通信机制
```typescript
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // 事件触发
  const handleClick = (item: string) => {
    onSelectItem(item);
  };
}
```

#### 2. 父组件实现
```tsx
function App() {
  const cities = ["New York", "Paris", "Tokyo"];
  
  const handleSelectItem = (item: string) => {
    console.log("Selected:", item);
  };

  return (
    <ListGroup 
      items={cities} 
      heading="Cities"
      onSelectItem={handleSelectItem}
    />
  );
}
```

### 三、实现步骤
1. 定义回调接口
2. 声明函数类型属性
3. 子组件触发回调
4. 父组件处理事件

### 四、重点解析

#### 1. 回调函数设计原则
- 命名规范：`on[EventName]`
- 类型明确：参数和返回类型
- 单向数据流：子组件不修改数据
- 最小暴露原则：仅传递必要参数

#### 2. TypeScript类型检查
```typescript
// 函数类型定义
onSelectItem: (item: string) => void;

// 未传递回调时的编译错误提示
// Error: Missing required prop 'onSelectItem'
```

#### 五、最佳实践
1. 保持回调函数纯净
2. 使用箭头函数保持上下文
3. 合理处理事件冒泡
4. 添加JSDoc注释说明
```typescript
/**
 * 当列表项被选中时触发
 * @param item 被选中的项目内容
 */
onSelectItem: (item: string) => void;
```

### 六、扩展应用

#### 1. 多参数回调
```tsx
// 子组件
onSelectItem(index: number, value: string) => void

// 父组件
handleSelectItem = (index: number, value: string) => {
  // 处理逻辑
}
```

#### 2. 异步回调模式
```tsx
const handleSelectItem = async (item: string) => {
  const response = await fetch(`/api/${item}`);
  // 处理异步结果
}
```

### 七、常见问题解决

#### 1. 回调未触发排查
1. 检查props传递链路
2. 验证函数引用是否相同
3. 使用开发工具事件追踪
4. 添加console.log调试

#### 2. 性能优化
- 使用useCallback避免重复渲染
```tsx
const handleSelectItem = useCallback((item: string) => {
  // 处理逻辑
}, [dependencies]);
```

### 八、设计模式扩展

| 模式         | 适用场景     |
| ------------ | ------------ |
| 基础回调     | 简单事件通知 |
| 发布订阅     | 跨组件通信   |
| Context传递  | 深层嵌套组件 |
| Redux Action | 全局状态管理 |

### 九、实战演练
1. 实现带删除功能的列表
2. 创建多选列表组件
3. 开发分页器组件
4. 构建表单验证系统

====================================================================

通过本课学习，学生可以掌握React组件间通信的核心机制，理解"props向下，事件向上"的数据流模式，并能够设计出灵活可复用的交互组件。重点需要理解回调函数在组件解耦中的重要作用，这是构建复杂React应用的基础能力。









## React中的Props与State

#### 重点总结

| **特性**     | **Props**            | **State**                  |
| ------------ | -------------------- | -------------------------- |
| **数据来源** | 父组件传递           | 组件内部初始化             |
| **可变性**   | 不可变（只读）       | 可变（通过`setState`更新） |
| **作用**     | 组件间通信、配置     | 管理组件内部动态数据       |
| **触发渲染** | 父组件传递新值时触发 | 调用`setState`时触发       |

#### 难点解析

1. **为什么props不可变？**
   React遵循单向数据流原则，props的不可变性保证了数据传递的清晰性和可预测性。若子组件修改props，会导致数据源混乱，破坏组件层级关系。
2. **何时使用props vs state？**
   - **Props**：当数据需要从父组件传递到子组件时（如配置参数、静态内容）。
   - **State**：当数据需要随用户交互或时间变化时（如表单输入、动态列表）。
3. **共同触发渲染的机制**
   React通过对比新旧props/state的差异，决定是否重新渲染组件。这是React高效更新UI的核心机制。

------

#### 举一反三

1. **实际场景应用**

   - **表单组件**：用`state`管理输入框的值（如`inputValue`），用`props`接收提交回调函数（如`onSubmit`）。
   - **动态列表**：父组件通过`props`传递列表数据，子组件用`state`管理选中项。

2. **反模式警示**

   ```jsx
   jsx
   // 错误！直接修改props
   function BadComponent({ title }) {
     title = "New Title"; // 反模式
     return <h1>{title}</h1>;
   }
   ```

   正确做法：若需基于props派生数据，应通过计算或使用`state`/`useEffect`处理。

3. **进阶思考**

   - **状态提升**：若多个组件需要共享同一数据，应将state提升至共同父组件，通过props下发。
   - **状态管理库**：复杂应用中使用Redux或Context API解决深层组件间状态传递问题。

------

#### 总结

理解props和state的差异是掌握React数据流的关键。props是组件间的“沟通桥梁”，state是组件的“记忆单元”，二者协同工作，构建出





## 实现可接收子组件的Alert组件

### 课程重点

1. 组件接收children属性的实现方式
2. ReactNode类型的使用
3. 组件开发的TypeScript类型定义
4. 快捷开发工具的使用技巧

### 教学步骤

#### 一、创建基础组件

```tsx
tsx
// alert.tsx
interface Props {
  children: string;
}

export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
```

#### 二、使用组件

```tsx
tsx
// App.tsx
function App() {
  return (
    <div>
      <Alert text="Hello World" />
    </div>
  );
}
```

#### 三、升级为children属性

```tsx
tsx
// alert.tsx（优化版）
interface Props {
  children: ReactNode;  // [!code ++]
}

export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
tsx
// App.tsx（优化版）
function App() {
  return (
    <div>
      <Alert>
        Hello <strong>World</strong>!  // 支持富文本内容
      </Alert>
    </div>
  );
}
```

### 核心知识点

#### 1. children属性

- 特殊属性：所有组件默认支持的prop
- 优势：
  - 支持传递复杂内容（HTML元素、组件等）
  - 更符合HTML原生语法习惯
  - 提升组件灵活性

#### 2. 类型定义

| 类型         | 适用场景                | 示例              |
| ------------ | ----------------------- | ----------------- |
| string       | 纯文本内容              | "Hello"           |
| ReactNode    | 包含HTML/组件的复杂内容 | `<span>Hi</span>` |
| ReactElement | 单个React元素           | `<MyComponent />` |

#### 3. 组件开发技巧

- 快捷代码片段：使用VS Code的React Native Tools扩展
  - 输入`rfc`快速生成函数组件模板
- 组件解构：推荐使用对象解构语法

```tsx
tsx
export const Alert = ({ children }: Props) => { ... }
```

### 难点解析

**为什么使用ReactNode而不是string？**

- 扩展性：允许传递任意React可渲染内容
- 类型安全：TypeScript会校验传入内容的合法性
- 兼容性：支持文本、元素、组件混合内容

### 举一反三

**扩展Alert组件功能**

```tsx
tsx
interface Props {
  variant?: 'primary' | 'success' | 'danger';
  children: ReactNode;
}

export const Alert = ({ variant = 'primary', children }: Props) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};
```

**组合使用示例**

```tsx
tsx
<Alert variant="success">
  <Icon name="check" />
  <span>操作成功！</span>
  <Button onClick={handleClose}>确定</Button>
</Alert>
```

### 最佳实践建议

1. 优先使用children而非自定义prop传递内容
2. 复杂组件应使用TypeScript接口明确定义props
3. 保持组件职责单一，通过组合实现复杂功能
4. 使用className库（如classnames）处理动态类名

### 常见问题排查

**类型错误处理：**

```tsx
tsx
// 错误：类型不匹配
<Alert>{123}</Alert> 

// 正确：显式转换为字符串
<Alert>{String(123)}</Alert>
```

**空内容处理：**

```tsx
tsx
interface Props {
  children?: ReactNode; // 添加可选标识
}
```

### 开发工具推荐

1. VS Code React Refactor 扩展
2. TypeScript React插件
3. ES7+ React/Redux Snippets
4. 浏览器React DevTools

通过本课学习，可以掌握React组件设计的关键模式，实现灵活可复用的UI组件，为后续复杂组件开发打下坚实基础。



## 可复用的React按钮组件

> 简述：在这一节中，我们构建了一个可重用的React按钮组件，学习了如何动态地设置按钮的文本、颜色和点击事件处理器。通过这个例子，我们掌握了如何使用props来增强组件的灵活性，如何使用TypeScript为组件提供类型检查，避免潜在的bug。

**知识树**

1. React组件的基本结构
   - 使用 `function` 或 `arrow function` 定义组件。
   - 使用 `props` 传递数据给组件。
2. 动态内容传递
   - 使用 `children` prop 来传递按钮文本。
   - 利用接口（interface）定义prop的类型。
3. 事件处理
   - 将按钮的 `onClick` 事件通过props传递给父组件，并在按钮点击时触发外部函数。
4. 动态CSS类
   - 使用props动态更改按钮颜色。
   - 设置默认props值，确保组件的稳定性和可复用性。
   - 使用TypeScript的字符串字面量类型限制props值范围，避免无效输入。

**代码示例**

1. 创建按钮组件

```tsx
// button.tsx
import React from 'react';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color = 'primary', children, onClick }) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

1. 在App组件中使用按钮组件

```tsx
// App.tsx
import React from 'react';
import Button from './button';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

export default App;
```

**关键概念总结**

- **组件结构**：我们使用了简单的函数组件形式，确保组件清晰并便于维护。
- **动态内容**：通过 `children` prop，可以使按钮的文本内容灵活传递，从而提高组件的复用性。
- **事件处理**：通过 `onClick` prop，我们能够把事件处理逻辑从按钮组件中分离出来，确保它在父组件中被管理，这使得按钮组件更加灵活。
- **动态CSS类**：通过 `color` prop，我们能够动态地控制按钮的外观，用户可以自由选择不同的按钮颜色。
- **默认值和类型限制**：通过TypeScript，设置了按钮的 `color` 属性为受限的几种颜色选项，避免了使用无效值的错误；同时也为 `color` 设置了默认值，减少了使用时的繁琐。

这段代码和讲解展示了如何构建一个简单、可重用且类型安全的React组件。





## 第三章练习

>  本节课的目标是通过一个简单的示例，帮助大家理解如何在 React 中使用状态管理、事件处理以及如何控制组件的可见性。我们将通过实现一个可以显示和关闭的 Bootstrap 样式的警告框（alert）组件，来练习这些核心概念。

#### 步骤 1：创建基础 alert 组件

1. **添加 Alert 组件** 在 `App.tsx` 中，首先添加一个基本的 alert 组件。此时，alert 只是静态显示在页面上，不涉及任何交互。

   ```tsx
   <div className="alert alert-primary" role="alert">
       My alert
   </div>
   ```

2. **显示与隐藏控制** 初始状态下，我们希望 alert 是隐藏的，只有点击按钮时才显示。为了实现这一点，我们需要在 `App.tsx` 中使用 React 的 `useState` 钩子来控制 alert 的可见性。

   ```tsx
   const [alertVisible, setAlertVisibility] = useState(false);
   ```

3. **条件渲染 Alert** 使用 `alertVisible` 状态来控制 alert 组件的显示和隐藏。当 `alertVisible` 为 `true` 时，alert 会显示；否则，它会被隐藏。

   ```tsx
   {alertVisible && (
       <div className="alert alert-primary" role="alert">
           My alert
       </div>
   )}
   ```

#### 步骤 2：实现按钮触发 alert 显示

1. **点击按钮显示 alert** 创建一个按钮，当按钮被点击时，调用 `setAlertVisibility(true)` 来显示 alert。

   ```tsx
   <button onClick={() => setAlertVisibility(true)}>显示警告</button>
   ```

   这样，点击按钮时，alert 会显示出来，React 会重新渲染组件来反映状态变化。

#### 步骤 3：添加关闭按钮

1. **添加关闭按钮** 按照 Bootstrap 的要求，警告框组件需要一个关闭按钮。我们可以将其嵌入到 `alert` 组件中，并使用相应的 Bootstrap 类来进行样式设置。使用 `alert-dismissible` 类和关闭按钮的样式。

   ```tsx
   <div className="alert alert-primary alert-dismissible" role="alert">
       My alert
       <button type="button" className="btn-close" aria-label="Close"></button>
   </div>
   ```

2. **将类名更改为 `className`** 由于 JSX 语法要求使用 `className` 来设置类名，而不是 `class`，需要进行相应的更改。

   ```tsx
   <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
   ```

#### 步骤 4：处理关闭事件

1. **传递关闭事件** 我们需要在 `Alert` 组件中为关闭按钮添加 `onClose` prop。父组件会通过这个 prop 将关闭的逻辑传递给子组件。

   ```tsx
   interface AlertProps {
       onClose: () => void;
   }
   
   const Alert: React.FC<AlertProps> = ({ onClose }) => {
       return (
           <div className="alert alert-primary alert-dismissible" role="alert">
               My alert
               <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
           </div>
       );
   };
   ```

2. **在父组件中处理关闭事件** 在 `App.tsx` 中，父组件传递一个处理关闭事件的函数。在点击关闭按钮时，这个函数会被调用，进而设置 `alertVisible` 为 `false`，使警告框隐藏。

   ```tsx
   const handleClose = () => {
       setAlertVisibility(false);
   };
   
   <Alert onClose={handleClose} />
   ```

3. **完整实现** 现在，点击按钮时显示 alert，点击关闭按钮时隐藏 alert，完成了这个交互。

   ```tsx
   const App = () => {
       const [alertVisible, setAlertVisibility] = useState(false);
   
       const handleClick = () => {
           setAlertVisibility(true);
       };
   
       const handleClose = () => {
           setAlertVisibility(false);
       };
   
       return (
           <div>
               <button onClick={handleClick}>显示警告</button>
               {alertVisible && <Alert onClose={handleClose} />}
           </div>
       );
   };
   
   ```

   Button.tsx

   ```tsx
   interface Props {
     onBtnClick: () => void;
   }
   function button({ onBtnClick }: Props) {
     return (
       <>
         <button type="button" className="btn btn-primary" onClick={onBtnClick}>
           Show live alert
         </button>
       </>
     );
   }
   export default button;
   ```

   

#### 总结

- 本节课通过实现一个简单的可关闭的警告框，帮助我们掌握了如何在 React 中管理状态（`useState`）、如何处理用户事件（如按钮点击），以及如何通过传递 props 实现组件之间的交互。
- 通过这个练习，我们进一步理解了 React 的渲染机制和状态更新的过程，以及如何将状态变化传递到子组件中进行处理。

#### 延伸思考

- **优化与扩展**：在实际开发中，我们可以通过使用 `useReducer` 来管理更复杂的状态，特别是当组件的状态变得复杂时。
- **UI 组件复用**：我们可以将 `Alert` 组件提取到单独的文件中，并根据需要在其他地方复用，同时允许不同的 alert 类型和颜色（通过传递不同的 props 来实现）。

通过这次练习，不仅学会了如何在 React 中管理状态、处理事件，还通过实际的代码实现深刻理解了 React 的组件化开发思想。





# 第四章



## 第2节-原生CSS

> 简述：在这一节中，我们探讨了如何使用原生CSS来为React组件添加样式。尽管有许多优秀的CSS框架（如Bootstrap或Material UI）可供使用，本节介绍了手动编写CSS的方式，帮助你理解如何通过原生CSS对组件进行样式化。

**知识树**

1. **原生CSS的使用**
   - 在项目中直接使用CSS文件。
   - 如何在React组件中导入和使用CSS。
2. **CSS文件组织结构**
   - 将CSS文件与组件文件放在同一目录下，便于组件的复用。
   - 如何通过创建`index.ts`文件优化文件引用结构。
3. **样式化React组件**
   - 使用简单的CSS规则来移除默认样式并添加自定义样式。
   - 使用类选择器为组件应用样式。
4. **提升项目结构**
   - 在项目中使用结构化的方式组织组件和样式文件。

**代码示例**

1. 创建CSS文件并导入到组件中

```css
/* listgroup.css */
.list-group {
  list-style: none;
  padding: 0;
}
```

1. 在组件中使用CSS文件

```tsx
// listgroup.tsx
import React from 'react';
import './listgroup.css';

const ListGroup: React.FC = () => {
  return (
    <ul className="list-group">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default ListGroup;
```

1. 优化文件结构与引用

```tsx
// index.ts
import ListGroup from './listgroup';
export default ListGroup;
```

1. 更新App组件

```tsx
// App.tsx
import React from 'react';
import ListGroup from './components/listgroup';

const App: React.FC = () => {
  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;
```

**关键概念总结**

- **原生CSS的应用**：在React中使用纯CSS进行样式设置。尽管有许多CSS框架，我们仍可以通过手动编写CSS来完全控制组件的样式。
- **文件组织**：我们将组件的样式文件与组件本身放在一起，这有助于组件的重用性和项目的模块化。如果不希望文件耦合过紧密，也可以将样式文件放入专门的`styles`目录中。
- **优化组件结构**：通过在组件文件夹中添加`index.ts`，可以简化导入路径，使得在项目中引用组件时更加简洁。
- **简单的样式设置**：通过简单的CSS规则，可以快速去除默认样式并添加个性化的设计。





## 第3节：解决CSS冲突的CSS模块

（CSS Modules）

> 简述：在这一节中，我们讨论了使用CSS模块来避免CSS类名冲突的问题。通过将CSS样式局部化，我们可以在不同的文件中使用相同的类名，而不必担心它们相互冲突。CSS模块使得样式的作用域仅限于组件，增加了代码的可维护性和模块化。

**知识树**

1. CSS类名冲突问题
   - 当多个CSS文件中有相同的类名时，可能会出现样式冲突，导致UI异常。
2. CSS模块的工作原理
   - CSS模块通过将类名局部化，确保每个类名在组件中唯一。
   - 通过文件重命名 `.module.css` 来启用CSS模块功能。
3. 如何在React组件中使用CSS模块
   - 将CSS模块文件导入为JavaScript对象。
   - 使用对象的属性来访问类名，避免传统CSS中的全局作用域问题。
4. 自动生成唯一的CSS类名
   - 工具（如Vite）会自动为每个CSS类名添加唯一的标识符，避免类名冲突。

**代码示例**

1. 创建CSS模块文件

   > **CSS 模块的工作原理**
   > 为了解决样式冲突，将 `listgroup.css` 文件重命名为 `listgroup.module.css`，以便启用 CSS 模块的功能。当使用 CSS 模块时，Vite 等打包工具会为每个类名生成唯一的标识符，避免了样式冲突。通过这个方式，不同组件中的同名类不会相互干扰。
   >
   >  CSS 类名中包含连字符（例如 `list-group`）时，className的写法为`<ul className={styles['list-group']}>`

```css
/* listgroup.module.css */
.listGroup {
  list-style: none;
  padding: 0;
}
/* ------------------- */
.list-group {
    list-style: none;
    padding: 0;
}
<ul className={styles['list-group']}>
```

2. 在React组件中使用CSS模块

> 在 TypeScript 文件中，我们不再直接导入 CSS 类，而是将其作为一个 JavaScript 对象导入。每个类名将作为对象的一个属性。

```tsx
// listgroup.tsx
import React from 'react';
import styles from './listgroup.module.css';

const ListGroup: React.FC = () => {
  return (
    <ul className={styles.listGroup}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default ListGroup;
```

3. 处理多个CSS类

```tsx
// listgroup.tsx
const ListItem: React.FC = () => {
  return (
    <li className={[styles.listGroup, styles.container].join(' ')}>
      Item 1
    </li>
  );
}
```

**关键概念总结**

- **CSS模块的优势**：通过将每个CSS类局部化，避免了类名冲突，增强了代码的可维护性。
- **局部化类名**：通过使用对象的属性引用CSS类名，并通过文件扩展名 `.module.css` 启用模块化。
- **自动生成唯一类名**：使用工具（如Vite）自动处理类名冲突问题，确保每个类名在整个项目中唯一。

------

## 第4节：将样式与组件逻辑融合

CSS in JS 

> 简述：在这一节中，我们介绍了CSS in JS的概念，这种方式允许我们将样式与组件逻辑放在同一个文件中。这种方法带来了样式的局部作用域、更加便捷的代码维护和基于props或state动态更新样式的能力。

**知识树**

1. **CSS in JS的概念**
   - 通过将CSS写入JavaScript文件中，样式和组件逻辑可以紧密结合。
   - 样式与组件一起打包，减少了样式外部依赖。
2. **CSS in JS的优点**
   - 样式局部化，避免冲突。
   - 组件逻辑与样式紧密耦合，增强了组件的可重用性。
   - 基于组件的props和state动态修改样式。
3. **Styled Components的使用**
   - 使用`styled-components`库可以在JavaScript文件中创建样式化的React组件。
   - 样式通过模板字符串进行定义，并且可以根据组件的props动态应用不同样式。
4. **类型安全和props管理**
   - 使用TypeScript对组件的props进行类型定义，确保动态样式的正确性。

**代码示例**

1. 安装`styled-components`库

```bash
npm install styled-components
npm install @types/styled-components
```

1. 在组件中使用`styled-components`

```tsx
// listgroup.tsx
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<{ active: boolean }>`
  padding: 5px;
  background-color: ${props => (props.active ? 'blue' : 'none')};
`;

const ListGroup: React.FC = () => {
  const selectedIndex = 1; // 示例：假设第二项被选中

  return (
    <List>
      <ListItem active={selectedIndex === 1}>Item 1</ListItem>
      <ListItem active={selectedIndex === 2}>Item 2</ListItem>
      <ListItem active={selectedIndex === 3}>Item 3</ListItem>
    </List>
  );
}

export default ListGroup;
```

**关键概念总结**

- **CSS in JS的优势**：将样式与组件逻辑放在同一个文件中，便于维护和复用。
- **动态样式**：可以通过组件的props来动态控制样式，使得样式更加灵活。
- **类型安全**：使用TypeScript对props进行类型定义，确保组件的样式和行为符合预期。

通过这两种方式（CSS模块和CSS in JS），我们可以更加灵活、模块化地为React组件添加样式，避免了全局样式冲突和冗余的样式管理。









------

## 第4节：CSS in JS - 将样式与组件逻辑融合

> 简述：在这一节中，我们介绍了CSS in JS的概念，这种方式允许我们将样式与组件逻辑放在同一个文件中。这种方法带来了样式的局部作用域、更加便捷的代码维护和基于props或state动态更新样式的能力。

**知识树**

1. **CSS in JS的概念**
   - 通过将CSS写入JavaScript文件中，样式和组件逻辑可以紧密结合。
   - 样式与组件一起打包，减少了样式外部依赖。
2. **CSS in JS的优点**
   - 样式局部化，避免冲突。
   - 组件逻辑与样式紧密耦合，增强了组件的可重用性。
   - 基于组件的props和state动态修改样式。
3. **Styled Components的使用**
   - 使用`styled-components`库可以在JavaScript文件中创建样式化的React组件。
   - 样式通过模板字符串进行定义，并且可以根据组件的props动态应用不同样式。
4. **类型安全和props管理**
   - 使用TypeScript对组件的props进行类型定义，确保动态样式的正确性。

代码示例

##### **步骤 1：安装和使用 styled-components**

1. **安装 styled-components**
    在项目中使用 `styled-components` 库来实现 CSS-in-JS。首先，我们需要安装 `styled-components` 库及其类型定义。

   ```bash
   npm install styled-components
   npm install @types/styled-components
   ```

2. **创建样式化组件**
    使用 `styled-components` 来创建具有样式的 React 组件。我们可以直接在 JavaScript 或 TypeScript 文件中定义样式。

   ```tsx
   import styled from 'styled-components';
   
   const ListGroup = styled.ul`
       list-style: none;
       padding: 0;
   `;
   
   const ListItem = styled.li`
       padding: 8px;
   `;
   ```

3. **使用样式化组件**
    在 JSX 中直接使用这些样式化组件，而不再使用传统的 `className`。

   ```tsx
   <ListGroup>
       <ListItem>Item 1</ListItem>
       <ListItem>Item 2</ListItem>
   </ListGroup>
   ```

##### **步骤 2：根据组件的状态或属性动态应用样式**

1. **动态样式**
    可以根据组件的状态或 props 动态地改变样式。例如，我们可以根据选中的列表项动态应用背景色。

   ```tsx
   const ListItem = styled.li`
       padding: 8px;
       background: ${props => props.active ? 'blue' : 'none'};
   `;
   ```

2. **定义 props 类型**
    使用 TypeScript 定义组件的 props 类型，以便更好地支持类型检查和自动补全。

   ```tsx
   interface ListItemProps {
       active: boolean;
   }
   
   const ListItem = styled.li<ListItemProps>`
       padding: 8px;
       background: ${props => props.active ? 'blue' : 'none'};
   `;
   ```

完整代码：

```tsx
import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 8px;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectedIndex: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedIndex }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1>{heading}</h1>

      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedIndex(item);
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



关键概念总结**

- **CSS in JS的优势**：将样式与组件逻辑放在同一个文件中，便于维护和复用。
- **动态样式**：可以通过组件的props来动态控制样式，使得样式更加灵活。
- **类型安全**：使用TypeScript对props进行类型定义，确保组件的样式和行为符合预期。

通过这两种方式（CSS模块和CSS in JS），我们可以更加灵活、模块化地为React组件添加样式，避免了全局样式冲突和冗余的样式管理。





## 第5-9节

#### **第1节：关注点分离原则（Separation of Concerns）**

##### **概述**

关注点分离（SoC）是软件工程中的一个重要设计原则，建议我们将程序分为不同的模块，每个模块处理特定的功能，而不是将所有内容都放在一起。这样可以使程序更具模块化，便于理解、维护和修改。

##### **模块化的优势**

- **独立构建与测试**：模块化程序允许我们独立地构建和测试各个模块，也能方便地将模块重用到其他程序中。
- **单一责任**：每个模块只关注一个功能。比如，在餐馆里，厨师负责做饭，服务员负责点单。模块化程序也遵循这个逻辑，每个模块承担特定的职责。
- **简化复杂性**：模块内部的实现细节通常是隐藏的，暴露给外部的是一个清晰的接口。类似于电视遥控器，虽然遥控器本身有很多复杂的操作，但用户只需要按按钮，接口简单易用。

##### **关于 CSS-in-JS 和关注点分离**

一些人认为将 CSS 和 JavaScript 混合在一起违反了关注点分离原则，因为我们将所有内容放在同一个文件中。然而，关注点分离的核心并不是文件是否合并，而是模块化：每个模块应该处理特定的功能，并通过清晰的接口与外界交互。在 React 中，CSS-in-JS 的实现方式仍然遵循了这一原则，因为它把样式的复杂性隐藏在了组件的接口后面。

#### **第2节：内联样式和推荐的样式方法**

##### **内联样式**

- 内联样式的使用：在 React 中，我们可以直接在 HTML 元素中使用 `style`属性设置样式。例如：

  ```tsx
  <div style={{ backgroundColor: 'yellow' }}></div>
  ```

  这种方式不推荐广泛使用，因为它使代码难以阅读和维护。它更适合非常特定的样式应用。

##### **CSS 库**

目前有许多 UI 库可以帮助我们快速构建美观且现代化的应用。比如：

- **Bootstrap**：提供了大量现成的组件，易于使用，快速构建应用。
- **Material UI**：一个实现了 Google Material Design 的开源 React 组件库。
- **Tailwind CSS**：一个实用优先的 CSS 库，提供了大量小的 utility 类来样式化我们的组件，而不是完整的组件。
- **Daisy UI**：基于 Tailwind CSS，提供了完整的组件而不是小的 utility 类。
- **Chakra UI**：构建于 Tailwind 基础上的一个 React 组件库，易于学习，适合快速构建应用。

这些库帮助我们避免手动编写样式，提高开发效率，减少重复劳动。

#### **第3节：使用 React Icons 添加图标**

##### **React Icons 简介**

React Icons 是一个流行的图标库，包含了多个图标库，如 Ant Design Icons、Bootstrap Icons、Box Icons 等。我们可以通过 React 组件的形式使用这些图标，并且支持自定义大小、颜色等属性。

##### **使用方法**

1. **安装 React Icons** 在项目中安装 `react-icons` 包：

   ```bash
   npm install react-icons
   ```

2. **使用图标** 搜索并选择想要的图标，例如日历图标（Calendar）：

   - 进入 React Icons 官网，选择一个图标。

   - 使用对应的库前缀和图标名称导入：

     ```tsx
     import { AiOutlineCalendar } from 'react-icons/ai';
     
     const MyComponent = () => {
         return <AiOutlineCalendar />;
     };
     ```

3. **自定义图标** 我们可以通过 props 自定义图标的颜色、大小等：

   ```tsx
   <AiOutlineCalendar color="red" size={30} />
   ```

#### **第4节：按钮组件练习**

##### **任务**：使用 CSS 模块样式化按钮组件

1. **创建样式文件**：为按钮组件创建一个 `button.module.css` 文件，其中包含基本按钮样式和不同颜色的按钮样式。

   ```css
   /* button.module.css */
   .btn {
       padding: 10px 20px;
       border-radius: 5px;
       cursor: pointer;
   }
   
   .btn-primary {
       background-color: blue;
       color: white;
   }
   
   .btn-secondary {
       background-color: gray;
       color: white;
   }
   ```

2. **导入样式**：在按钮组件的 TypeScript 文件中导入 CSS 模块并应用样式。

   > <button className={`btn btn-${color}`} onClick={onClick}>
   >
   > classname有多个时的两种写法：
   >
   > ```tsx
   > className={`${styles.btn} ${styles[`btn-${color}`]}`}
   > 
   > className={[styles.btn, styles["btn-" + color]].join(" ")}
   > ```
   >
   > 

   ```tsx
   import styles from './button.module.css';
   
   const Button = ({ color = 'primary', onClick, children }) => {
       return (
           <button
               className={`${styles.btn} ${styles[`btn-${color}`]}`}
               onClick={onClick}
           >
               {children}
           </button>
       );
   };
   ```

##### **任务 2：实现 Like 组件**

1. **创建 Like 组件**：实现一个可点击的心形图标，点击时图标会改变状态（从空心变为实心）。

   ```tsx
   import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
   import { useState } from 'react';
   
   const Like = ({ onClick }) => {
       const [status, setStatus] = useState(false);
   
       const toggleStatus = () => {
           setStatus(!status);
           onClick();  // 通知父组件
       };
   
       return (
           <div onClick={toggleStatus}>
               {status ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
           </div>
       );
   };
   ```

2. **父组件使用**：

   ```tsx
   const App = () => {
       const handleLikeClick = () => {
           console.log('Like button clicked!');
       };
   
       return <Like onClick={handleLikeClick} />;
   };
   ```

##### **总结**

通过这些练习，我们学会了如何使用不同的样式技术（如 CSS 模块、React Icons）以及如何构建可复用的组件。这些技术和工具的使用将大大提升开发效率，帮助我们构建更加模块化和可维护的应用程序。







# 第5章-状态的最佳实践

知识树

1. **State更新的异步性**
   - React更新State是异步的，不会立即更新。
   - React将多个State更新合并，批量执行，以提高性能。
2. **State存储位置**
   - React的State存储在组件外部，在内存中保存，直到组件不再可见。
   - State的生命周期与组件的渲染周期同步。
3. **State Hook的使用约束**
   - React的Hooks只能在组件的最顶层使用，不能在条件语句、循环或嵌套函数中调用。
   - 这确保了Hooks调用的顺序一致性，避免了状态映射错误。
4. **最佳实践：选择State结构**
   - 避免使用冗余的State变量，例如计算属性（如full name）。
   - 将相关的State变量放在一个对象中，以便于管理。
   - 避免使用深层嵌套的结构，应尽量保持状态结构的扁平化，以简化更新逻辑。
5. **State的不可变性**
   - 使用React时，State对象应视为不可变的，避免直接修改对象的属性。
   - 应通过创建新的对象来更新State，保持State的独立性和可预测性。
6. **处理数组和对象的State更新**
   - 对数组和对象的更新，避免直接修改它们，使用新的数组或对象来触发渲染。



### **1. React 状态更新是异步的**

- **异步更新**：React 的 `useState` 钩子用于管理组件状态，但状态更新是 **异步的**，并不会立即生效。
- **为什么异步**：当事件处理函数中有多个状态更新时，React 会批量处理这些更新，以避免频繁的重新渲染，提高性能。例如，当点击按钮更新多个状态变量时，React 会将这些更新合并，并在事件处理器完成后一起应用，而不是立即更新状态。

**示例：**

```tsx
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);  // 输出的将是旧值，因更新是异步的
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
      <p>{isVisible ? 'Visible' : 'Hidden'}</p>
    </div>
  );
};

export default App;

```

- **性能优化**：批量更新状态并减少不必要的重渲染。

#### **2. 状态存储在组件外部**

- React 将状态变量存储在 **组件外部**，它会保留这些状态，直到组件不再显示时，React 会自动清理这些状态。
- 状态的更新不会丢失，因为状态是存在内存中的，而不是存储在函数的作用域内。

**示例：**

```tsx
const [isLoading, setIsLoading] = useState(false);
```

#### **3. Hooks 使用规则：只能在组件的顶层使用**

- React 的 Hook（包括 `useState`）要求我们在 **组件的顶层** 使用它们，不能在条件语句、循环或嵌套函数中使用，因为这些结构会影响状态钩子调用的顺序，而 React 依赖于这些钩子的调用顺序来正确地映射状态变量。。
- 这样做的目的是确保每次组件渲染时，React 能够按顺序正确地应用所有的 Hook。

**错误示例：**

```tsx
if (someCondition) {
  const [state, setState] = useState(false);  // 错误：不应在条件语句中调用 Hook
}
```

**正确示例：**

```tsx
const [state, setState] = useState(false);  // 正确：在顶层调用
```

#### **4. 状态结构最佳实践**

- **避免冗余状态**：对于像全名这样的变量，可以直接通过现有的 `firstName` 和 `lastName` 来计算，而不必单独使用 `fullName` 状态。

  ```tsx
  // 不需要 `fullName` 状态
  <p>{firstName} {lastName}</p>
  ```

- **将相关状态组合在对象中**：如果状态变量是相关的，可以将它们组合在一个对象中。例如，`firstName` 和 `lastName` 可以存储在一个 `person` 对象中。

  ```tsx
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  ```

- **避免深度嵌套的状态结构**：深度嵌套的结构会导致状态更新时的复杂性增加，建议使用扁平化的结构。

  ```tsx
  // 避免深度嵌套，如 `address.street.city.zip`
  // 使用扁平化结构来简化状态更新
  ```

#### **5. 纯函数和 React 组件的纯度**

- **纯函数**：一个纯函数在相同的输入下，总是返回相同的输出。React 期望组件是纯函数。
- **React 组件的纯度**：当组件接收到相同的 props 时，它应该始终返回相同的 JSX 输出。React 通过跳过未改变的组件的重新渲染来提高性能。

**如何保持组件纯净**：

- 不要在渲染阶段改变状态或副作用。比如，避免在渲染过程中修改变量。

**不纯组件示例：**

```tsx
let count = 0;
const Message = () => {
  count++;  // 不推荐在渲染阶段修改 count
  return <div>Message {count}</div>;
};
```

**纯组件示例：**

```tsx
const Message = () => {
  const count = 0;  // 在渲染阶段定义变量
  return <div>Message {count}</div>;
};
```

#### **6. 使用React的Strict Mode识别不纯函数**

- **严格模式**：React 的严格模式会在开发环境下每个组件渲染两次，用于检测潜在问题，如不纯的组件。严格模式只在开发模式下启用，生产模式下不会影响。

**示例：**

- 在开发模式下，React 会重新渲染组件以检查潜在的副作用问题。

```tsx
// App.tsx
import React from 'react';

// 示例：每次渲染都会改变内容，导致不纯函数
const Message: React.FC<{ count: number }> = ({ count }) => {
  console.log('Message rendered'); // 每次渲染都会调用
  return <p>Message {count}</p>;
};

const App: React.FC = () => {
  return (
    <div>
      <Message count={1} />
      <Message count={2} />
    </div>
  );
};

// 在开发模式下，React严格模式会多次渲染组件，以检查不纯组件。
// 这里，Message组件会在每次渲染时输出"Message rendered"，
// 因为我们没有正确地保持纯函数的特性。

export default App;

```

#### **7. 数组State的不可变性：添加、删除和更新元素**

- **对象和数组的不可变性**：在 React 中，应该将对象和数组视为不可变的，这意味着我们不能直接修改它们，而是需要创建一个新的对象或数组。

**示例：**

```tsx
const [drink, setDrink] = useState({ title: 'Coke', price: 5 });

// 错误：直接修改状态对象
drink.price = 6;
setDrink(drink);

// 正确：创建新的对象
const handleClick = () =>{
  const newDrink = {
    title:drink.title,
    price:6
  }
  setDrink(newDrink)
}
// 更好：正确：创建新的对象
setDrink({ ...drink, price: 6 });
```

- **数组的不可变性**：对于数组，使用类似 `push`、`filter` 或 `map` 的方法时，应该创建新的数组，而不是直接修改原数组。

**示例：**

```tsx
const [tags, setTags] = useState(['happy', 'exciting']);

// 错误：直接修改数组
tags.push('new tag');
setTags(tags);

// 正确：创建新的数组
setTags([...tags, 'new tag']);
```

**总结：**

1. React 状态更新是异步的，并且是批量处理的，以优化性能。
2. 状态应该存储在组件外部，并且仅能在顶层使用 `useState`。
3. 使用状态时，避免冗余变量和深度嵌套的结构，最好使用扁平化的结构。
4. 保持组件的纯度，避免在渲染阶段修改状态。
5. 严格模式用于开发环境，帮助发现不纯的组件。
6. 对象和数组应该视为不可变的，修改时需要创建新对象。

通过这些最佳实践，我们能够更好地组织和管理 React 中的状态，使代码更加清晰、易于维护。









#### **8.更新嵌套对象中的属性**

> 在这个更复杂的示例中，我们使用 `useState` 钩子来管理一个 `customer` 对象。这个对象有两个属性：`name` 和 `address`。`address` 是一个嵌套对象，包含 `city`（城市）和 `zipCode`（邮政编码）属性。
>
> 假设我们想通过点击事件更新 `zipCode`。在这个过程中，我们将面临更新嵌套对象状态的挑战，尤其是如何确保我们不直接修改原始状态，而是创建新的独立副本。

**问题：浅拷贝的局限性**

在 JavaScript 中，使用扩展运算符（spread operator）对对象进行拷贝时，是 **浅拷贝**。这意味着，如果对象中包含嵌套的对象，那么嵌套对象的引用将被共享。举例来说，假如我们有一个 `customer` 对象，包含一个 `address` 对象，拷贝 `customer` 对象时，`address` 仍然指向同一个内存地址。这样，修改 `address` 时会影响所有通过扩展运算符创建的 `customer` 对象。

**示例：**

```javascript
const customer = {
    name: "John Doe",
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

// 使用扩展运算符创建新的 customer 对象
const newCustomer = { ...customer };
```

此时，`newCustomer.address` 和 `customer.address` 指向的是同一个内存地址。

**解决方法：创建独立副本**

为了避免共享引用导致的问题，我们需要确保更新后的对象与原对象完全独立。这就要求我们在更新嵌套对象时，不仅要拷贝外层对象，还要为嵌套的对象创建新的副本。

##### **步骤：**

1. **拷贝 `customer` 对象**：首先，我们使用扩展运算符创建 `customer` 的副本。
2. **为 `address` 创建新对象**：我们为 `customer.address` 创建一个新的对象，这样就避免了共享引用的问题。
3. **更新 `zipCode`**：在新的 `address` 对象中，修改 `zipCode`。

**示例：**

```tsx
const [customer, setCustomer] = useState({
    name: "John Doe",
    address: {
        city: "New York",
        zipCode: "10001"
    }
});

const handleUpdateZipCode = () => {
    setCustomer(prevCustomer => ({
        ...prevCustomer,  // 创建新的 customer 对象
        address: {        // 为 address 创建新的对象
            ...prevCustomer.address,  // 拷贝原 address 对象
            zipCode: "10002"  // 更新 zipCode
        }
    }));
};
```

- **`...prevCustomer`**：拷贝 `customer` 对象的属性（如 `name`）。
- **`...prevCustomer.address`**：拷贝 `address` 对象的属性。
- **`zipCode: "10002"`**：修改 `zipCode` 的值。

**避免深层嵌套结构**

我们在处理复杂的状态对象时，应该尽量避免深层嵌套结构，因为深度嵌套会导致更新逻辑变得更加复杂。如果对象的嵌套层级过深，每次更新时都需要层层复制，增加了开发和维护的难度。

**推荐做法：使用扁平化结构**

将相关的属性组合到更平坦的结构中，以简化更新逻辑。相比深度嵌套的对象，扁平化结构在更新时更为直观和简便。

**不推荐的深层嵌套结构：**

```tsx
const [customer, setCustomer] = useState({
    name: "John",
    contact: {
        address: {
            city: "New York",
            zipCode: "10001"
        }
    }
});
```

**推荐的扁平化结构：**

```tsx
const [customer, setCustomer] = useState({
    name: "John",
    city: "New York",
    zipCode: "10001"
});
```

**总结**

1. **浅拷贝的局限性**：扩展运算符做的是浅拷贝，嵌套对象会共享引用，导致潜在问题。
2. **创建新对象**：为了避免状态更新中的副作用，我们需要确保嵌套对象的每一层都是新的对象。
3. **避免深层嵌套结构**：深度嵌套的结构会导致状态更新逻辑复杂，建议使用扁平化结构来简化更新过程。

通过这些方法，您可以更有效地管理 React 中的状态，确保数据的独立性与可维护性，同时避免常见的错误。









#### 8.添加、删除和更新元素

```tsx
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['happy', 'exciting']);

  const addTag = () => {
    setTags(prevTags => [...prevTags, 'newTag']); // 添加新标签
  };

  const removeTag = () => {
    setTags(prevTags => prevTags.filter(tag => tag !== 'happy')); // 删除标签
  };

  const updateTag = () => {
    setTags(prevTags =>
      prevTags.map(tag => (tag === 'exciting' ? 'excited' : tag)) // 更新标签
    );
  };

  return (
    <div>
      <button onClick={addTag}>Add Tag</button>
      <button onClick={removeTag}>Remove Tag</button>
      <button onClick={updateTag}>Update Tag</button>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default App;

```



#### **9. 更新对象数组**

在处理包含对象的数组时，我们同样不应直接修改数组或其中的对象。每次更新都应该创建新的数组或对象，并且更新相关字段。

##### **如何更新数组中的对象**

1. **使用 `map` 方法更新数组中的对象**：假设我们有一个包含多个 bug 对象的数组，每个对象都有 `id`、`title` 和 `fixed` 等属性。如果我们想更新第一个 bug 对象的 `fixed` 属性为 `true`，我们可以使用 `map` 方法来处理这个更新。

   **示例：**

   ```tsx
   const [bugs, setBugs] = useState([
       { id: 1, title: "Bug 1", fixed: false },
       { id: 2, title: "Bug 2", fixed: false }
   ]);
   
   const handleFixBug = () => {
       setBugs(bugs.map(bug => 
           bug.id === 1 ? { ...bug, fixed: true } : bug
       ));
   };
   ```

2. **注意**：在这种情况下，我们不需要创建每个 bug 的副本，只需要更新对应 `id` 的 bug 对象即可。



#### **10.使用Immer库简化不可变更新**

> 简述：在这一节中，我们学习了如何使用Immer库来简化对数组和对象的不可变更新操作。通过Immer，我们可以在不直接修改原始数据的情况下，通过代理对象进行修改，这使得更新逻辑更加简洁和直观。

##### 知识树

1. **Immer库简介**
   - Immer是一个用于简化不可变数据结构更新的库。它使用JavaScript的`Proxy`机制，使得我们可以像修改可变数据一样修改不可变数据。
2. **不可变数据更新的复杂性**
   - 在传统的React中，我们通常需要使用`map`或`filter`等方法来创建新数组或对象，并进行修改。这样的方式虽然能保证数据的不可变性，但代码变得冗长且难以管理。
3. **使用Immer的`produce`函数**
   - Immer的核心功能是`produce`函数。我们通过传递一个“草稿对象”（draft）给`produce`，在这个对象上进行修改，Immer会在后台创建一个新的不可变数据结构，并应用这些更改。
4. **提高代码简洁性**
   - 使用`produce`，我们无需担心手动克隆数据，也不需要创建深拷贝。通过修改草稿对象，Immer会在后台处理数据的更新。
5. **简化对象和数组的更新逻辑**
   - 通过使用Immer，我们可以直接修改对象或数组中的内容，而不需要创建中间副本。这个过程类似于直接操作可变对象，但始终保持数据不可变性。

##### 代码示例

1. **安装 Immer**：首先，我们需要安装 Immer 库：

   ```bash
   npm install immer@9.0.19
   ```

2. **使用Immer简化数组更新**

```tsx
// App.tsx
import React, { useState } from 'react';
import produce from 'immer';

const App: React.FC = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  // 标记第一个Bug为已修复
  const fixFirstBug = () => {
    setBugs(produce(draft => {
      const bug = draft.find(b => b.id === 1);
      if (bug) {
        bug.fixed = true;
      }
    }));
  };

  return (
    <div>
      <button onClick={fixFirstBug}>Fix First Bug</button>
      <div>
        {bugs.map(bug => (
          <p key={bug.id}>
            {bug.title} - {bug.fixed ? 'Fixed' : 'New'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
```

##### 关键概念总结

1. **Immer库的核心功能**：
   - `produce`函数是Immer的核心。它允许我们像操作普通对象一样修改不可变数据结构。通过`draft`代理对象，我们可以直接修改数据，Immer会负责创建更新后的新对象。
2. **不可变数据更新的简化**：
   - 使用`produce`，我们无需手动创建对象副本。我们直接操作`draft`，这样代码更加简洁和可读。同时，数据始终保持不可变性，避免了直接修改原数据的副作用。
3. **在React中的应用**：
   - 在React中，使用Immer可以简化对数组或对象的更新，避免了使用`map`、`filter`等手动处理数据的繁琐逻辑。这对于管理复杂状态和大型应用非常有用。
4. **性能与优化**：
   - Immer内部通过`Proxy`机制跟踪对数据的修改，这样只有实际更改的部分会被更新，确保性能优化。它的设计使得更新操作非常高效，同时不牺牲代码的可读性。

##### 深入分析

- **性能问题**：
  - 虽然`produce`使得不可变更新变得更加简单，但每次调用`produce`时都会生成一个新的数据对象，这意味着Immer会为每次更新创建副本。对于频繁更新的大型数据结构，可能会引起性能问题。为此，Immer做了许多优化，但仍然需要在性能要求较高的场景下进行评估。
- **复杂数据结构**：
  - Immer特别适用于处理嵌套的对象或数组更新，它通过浅拷贝和代理来管理嵌套层级，避免了深拷贝的复杂性。对于需要频繁更新的数据结构，Immer大大简化了代码并提高了效率。
- **可维护性和代码清晰度**：
  - 使用Immer可以让代码更简洁，避免了传统方式中需要手动创建副本和使用`map`等方法的冗长代码。尤其是在处理嵌套结构时，Immer提供了一种更自然、更易理解的方式来管理不可变数据。

##### 总结

Immer库通过`produce`函数为React开发者提供了一种简单、高效的方式来管理不可变数据。它通过代理机制简化了复杂数据的更新逻辑，避免了手动管理副本的繁琐操作，提升了代码的可读性和可维护性。在实际开发中，使用Immer可以大大简化数组和对象的不可变更新，特别是在状态更新频繁的场景中。

#### 11. 组件间共享状态

当我们需要在多个组件之间共享状态时，可以使用 **状态提升（Lifting State Up）** 的概念。通过将共享状态提升到它们的共同父组件，父组件就可以通过 `props` 将状态传递给子组件。

##### **共享状态的基本步骤**

1. **在父组件中管理状态**：我们将共享的状态放在最接近两个组件的共同父组件中。

   **示例：**

   ```tsx
   const App = () => {
       const [cartItems, setCartItems] = useState([{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]);
   
       return (
           <div>
               <NavBar cartItemsCount={cartItems.length} />
               <Cart cartItems={cartItems} />
           </div>
       );
   };
   ```

2. **通过 `props` 传递状态**：在父组件中，使用 `props` 将状态传递给子组件。父组件负责管理和更新状态，而子组件则通过 `props` 接收该状态并展示。

   **NavBar 组件**：

   ```tsx
   const NavBar = ({ cartItemsCount }) => {
       return <div>Cart items: {cartItemsCount}</div>;
   };
   ```

   **Cart 组件**：

   ```tsx
   const Cart = ({ cartItems }) => {
       return (
           <ul>
               {cartItems.map(item => (
                   <li key={item.id}>{item.name}</li>
               ))}
           </ul>
       );
   };
   ```

3. **更新状态**：为了允许子组件更新状态，我们需要通过 `props` 将更新状态的函数传递给它们。

   **示例：**

   ```tsx
   const Cart = ({ cartItems, onClear }) => {
       return (
           <div>
               <ul>
                   {cartItems.map(item => (
                       <li key={item.id}>{item.name}</li>
                   ))}
               </ul>
               <button onClick={onClear}>Clear Cart</button>
           </div>
       );
   };
   ```

4. **在父组件中处理状态更新**：父组件负责实现 `onClear` 方法，并通过 `props` 传递给 `Cart` 组件。

   **示例：**

   ```tsx
   const App = () => {
       const [cartItems, setCartItems] = useState([{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]);
   
       const handleClearCart = () => {
           setCartItems([]);
       };
   
       return (
           <div>
               <NavBar cartItemsCount={cartItems.length} />
               <Cart cartItems={cartItems} onClear={handleClearCart} />
           </div>
       );
   };
   ```

5. **同步更新**：通过将 `cartItems` 的更新传递给 `NavBar` 和 `Cart` 组件，我们确保了它们在 UI 中保持同步。当用户点击 `Clear Cart` 按钮时，购物车的状态会被清空，且所有相关组件会根据新的状态重新渲染。

------

**总结**

1. **更新数组**：在 React 中，我们不能直接修改数组，而是应该创建一个新的数组并将更新后的数组传递给 `setState`。常用的方法包括使用扩展运算符、`filter`、`map` 等。
2. **更新数组中的对象**：对于数组中的对象，使用 `map` 方法可以遍历并更新特定对象，而不会修改原始数组。
3. **Immer 库的使用**：Immer 库简化了不可变数据的更新，允许我们直接在草稿对象上进行修改，减少了手动复制对象的复杂度。
4. **状态提升**：通过将共享状态提升到父组件，多个子组件可以共享和同步状态，确保数据的一致性。

这些技巧和最佳实践将有助于我们编写更清晰、更高效、更易维护的 React 应用。





#### 12. 共享组件状态 - 提升组件之间的同步

> 简述：在这一节中，我们讨论了如何在React应用中共享状态，特别是在多个组件之间同步状态。通过“提升状态”这一概念，我们可以将状态提升到共同的父组件，然后通过`props`将状态传递给子组件，确保不同组件之间的状态保持一致。

##### 知识树

1. **提升状态（Lifting State Up）**
   - 当多个子组件需要共享状态时，应该将状态提升到它们的最近公共父组件。
   - 父组件通过`props`将共享的状态传递给子组件，确保各子组件间同步。
2. **组件通信：传递状态和回调函数**
   - 父组件通过`props`将状态传递给子组件。
   - 子组件不能直接修改父组件的状态，而是通过父组件传递的回调函数来通知父组件进行状态更新。
3. **使用`props`传递数据**
   - 当只需要访问状态的部分数据时，可以将数据进行筛选或计算后传递。
   - 当需要完整的状态信息时，可以将整个状态传递给子组件。
4. **控制状态的更新**
   - 状态更新应该由拥有状态的组件负责。例如，购物车组件通过传递`onClear`回调函数来清空购物车。
5. **确保状态和UI的同步**
   - 在不同的组件之间共享和更新状态时，确保UI能够实时响应状态变化，避免不同组件之间的状态不同步。

##### 代码示例

1. **提升状态的共享**

```tsx
// App.tsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import Cart from './Cart';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    'Product 1',
    'Product 2'
  ]);

  return (
    <div>
      {/* 通过props传递购物车项数量到导航栏 */}
      <NavBar cartItemsCount={cartItems.length} />
      
      {/* 通过props传递购物车项到购物车组件 */}
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App;
```

1. **NavBar组件**

```tsx
// NavBar.tsx
import React from 'react';

interface NavBarProps {
  cartItemsCount: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartItemsCount }) => {
  return (
    <nav>
      <h1>Shopping Cart ({cartItemsCount})</h1>
    </nav>
  );
};

export default NavBar;
```

1. **Cart组件**

```tsx
// Cart.tsx
import React from 'react';

interface CartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onClear }) => {
  return (
    <div>
      <ul>
        {cartItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </div>
  );
};

export default Cart;
```

##### 关键概念总结

1. **提升状态（Lifting State Up）**：当多个子组件需要共享同一状态时，应该将该状态提升到最近的公共父组件。父组件通过`props`将状态和回调函数传递给子组件，以保证多个子组件状态的一致性。
2. **父子组件通信**：
   - 父组件通过`props`传递状态数据给子组件。子组件不能直接修改父组件的状态，而是通过调用父组件传递的回调函数来更新状态。
   - 如果子组件只需要状态的一部分数据，可以通过计算后传递该数据，例如只传递购物车的数量，而不是整个购物车列表。
3. **状态更新与UI同步**：
   - 当状态更新时，React会自动重新渲染相关的组件。在共享状态的情况下，只要父组件的状态发生变化，所有依赖于该状态的子组件都会重新渲染。
4. **清空购物车**：
   - 购物车组件提供了一个清空购物车的按钮。该按钮并不直接修改父组件的状态，而是通过`onClear`回调通知父组件清空购物车。

##### 深入分析

- **性能优化**：在实际应用中，提升状态的过程可能涉及到多个组件的重新渲染。为了避免不必要的渲染，我们可以利用React的`useMemo`或`React.memo`来优化那些不需要每次都重新渲染的组件。
- **数据流**：在React中，数据流从父组件流向子组件（单向数据流）。这种设计使得状态管理变得更加可预测和易于调试。通过提升状态到父组件，我们可以更好地控制哪些组件应当在状态更新时重新渲染。
- **可扩展性**：当应用规模增大时，状态管理可能会变得复杂。此时，可能需要引入如`useReducer`或全局状态管理库（如Redux、Context API）来管理更复杂的状态或跨组件的状态共享。

通过提升状态并使用`props`传递，我们能够高效地管理React应用中的组件间同步，确保UI与状态的一致性，并为组件的复用和可维护性提供坚实的基础。







#### 13.Exercise



>  一个可以展开和收缩的文本框





## 第9节：练习 - 使用React实现状态管理与组件交互

> 简述：在这一节中，我们提供了一系列的练习，涵盖了React中状态更新和组件间交互的实际应用。通过这些练习，你将学习如何在React中进行状态管理、如何使用不可变操作来更新状态，以及如何构建动态和交互式组件。

### 知识树

1. **不可变状态更新**
   - 在React中，避免直接修改对象或数组的属性，而是使用不可变的方式更新状态。通过`setState`或`useState`等方法更新状态，并返回一个新的对象或数组。
2. **使用`produce`简化状态更新**
   - 使用`Immer`库的`produce`函数简化不可变状态的更新逻辑。`produce`使得在不可变数据结构中修改数据变得简单和直观。
3. **React组件的状态管理**
   - 使用`useState`管理组件的局部状态，确保每次状态更新时，组件能根据新的状态重新渲染UI。
   - 通过父组件与子组件之间的`props`传递共享状态，确保不同组件间的状态同步。
4. **处理复杂数据结构的状态更新**
   - 在更新复杂数据结构（如嵌套对象或数组）时，要确保数据的不可变性。可以使用`map`、`filter`等方法来更新数组，或者使用`spread`操作符和深拷贝技术来更新对象。
5. **实现可扩展的动态组件**
   - 设计可配置的组件，允许通过`props`传递动态值，并基于这些值渲染不同的UI内容。
   - 使用`useState`控制组件的内部状态，如展开/折叠的状态，处理用户交互事件。

### 代码示例

1. **更新嵌套对象的状态**

```tsx
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [game, setGame] = useState({
    id: 1,
    player: { name: 'Alice' },
  });

  const updatePlayerName = () => {
    setGame(prevGame => ({
      ...prevGame,
      player: { ...prevGame.player, name: 'Bob' },
    }));
  };

  return (
    <div>
      <h1>Game ID: {game.id}</h1>
      <h2>Player: {game.player.name}</h2>
      <button onClick={updatePlayerName}>Change Player Name</button>
    </div>
  );
};

export default App;
```

1. **添加新配料到披萨对象**

```tsx
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [pizza, setPizza] = useState({
    name: 'Margherita',
    toppings: ['Tomato', 'Cheese'],
  });

  const addTopping = () => {
    setPizza(prevPizza => ({
      ...prevPizza,
      toppings: [...prevPizza.toppings, 'Olives'],
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
};

export default App;
```

1. **更新购物车中物品的数量**

```tsx
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [cart, setCart] = useState({
    discount: 10,
    items: [
      { id: 1, title: 'Apple', quantity: 2 },
      { id: 2, title: 'Banana', quantity: 3 },
    ],
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      ),
    }));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items.map(item => (
        <div key={item.id}>
          <p>{item.title}: {item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
        </div>
      ))}
    </div>
  );
};

export default App;
```

1. **实现可展开的文本组件**

```tsx
// ExpandableText.tsx
import React, { useState } from 'react';

interface ExpandableTextProps {
  children: string;
  maxChars: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, maxChars }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const text = isExpanded ? children : `${children.slice(0, maxChars)}...`;

  return (
    <div>
      <p>{text}</p>
      {children.length > maxChars && (
        <button onClick={handleToggle}>
          {isExpanded ? 'Less' : 'More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
```

1. **在App中使用ExpandableText组件**

```tsx
// App.tsx
import React from 'react';
import ExpandableText from './ExpandableText';

const App: React.FC = () => {
  return (
    <div>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ExpandableText>
    </div>
  );
};

export default App;
```

### 关键概念总结

1. **不可变更新**：
   - 在React中，避免直接修改对象或数组。使用`setState`或`useState`时，需要确保返回新的对象或数组。
   - 使用`spread`操作符或`map`方法创建新副本，并修改必要的部分。
2. **使用`produce`简化不可变更新**：
   - Immer库通过`produce`函数简化了不可变数据的更新操作。我们可以像修改普通对象一样修改不可变数据，Immer会确保返回一个新对象，并保持原数据的不可变性。
3. **组件状态管理**：
   - 使用`useState`管理组件的局部状态。状态的变化会触发组件的重新渲染，更新UI。
   - 通过`props`在父子组件之间传递共享状态，确保不同组件之间的数据同步。
4. **动态组件与用户交互**：
   - 通过`props`传递动态值，设计可配置的组件（如`ExpandableText`）。组件的行为可以根据`props`和`state`的变化进行调整。

通过这些练习，你可以在实际的React开发中更好地掌握不可变状态管理、组件间的数据传递以及交互式组件的实现。这些基础技能将为你构建更复杂的应用打下坚实的基础。





# 第6章：构建表单

- 重点总结：

  1. **使用 `useState` 管理表单数据：** 通过使用 `useState` 管理表单中的数据，我们可以保持表单项与React状态同步。
  2. **`onChange` 事件：** `onChange` 用来监听用户输入，并更新状态，确保表单数据实时更新。
  3. **受控组件：** 使用 `value` 属性将表单元素的状态交给 React 管理，避免 DOM 直接管理元素状态，从而确保数据的统一和一致性。
  4. **性能与优化：** 在大多数情况下，使用 `useState` 管理表单状态足够了，只有在性能出现问题时，才需要考虑 `useRef` 或其他优化方案。
  5. **初始化值：** 确保状态有合理的初始化值，避免 `undefined` 错误。

- 

  

**React 项目：构建一个费用追踪器**

在这部分课程中，我们通过构建一个费用追踪器来学习 React 中的表单处理、状态管理、数据验证和其他功能。以下是课程的关键要点和相关的代码实现步骤。

## 1. **构建表单结构**

首先，我们在 `main.tsx` 中引入 Bootstrap 样式并创建一个基本的表单组件。表单包括三个输入字段：`name`、`age` 和 `category`。

**步骤**：

- 创建一个新的 `form` 组件，使用 Bootstrap 的类（如 `form-control` 和 `form-label`）来构建表单样式。
- 使用 `type="number"` 来限制 `age` 输入框只能接受数字。
- 添加一个提交按钮并通过 `onSubmit` 事件处理表单的提交。

```tsx
// Form.tsx
import React, { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({ name: '', age: '', category: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="number"
          id="age"
          className="form-control"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          className="form-select"
          value={person.category}
          onChange={(e) => setPerson({ ...person, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
```

#### 1. 创建表单组件

- 首先，我们需要在项目中创建一个新的React组件，命名为 `Form`。这个组件的功能是渲染一个表单。

- 在React中，我们通常使用函数组件来构建组件，所以我们将使用 `function` 来定义这个组件。

  ```tsx
  const Form = () => {
    return (
      <form>
        {/* 这里将放置表单的内容 */}
      </form>
    );
  };
  ```

#### 2. 使用Bootstrap类优化表单样式

- 为了让表单有现代感且美观，我们将使用Bootstrap提供的一些实用类（utility classes），如 `form-label` 和 `form-control`，来简化样式的处理。
- 我们将为每个输入框和标签提供合适的布局，并为每个输入框设置必要的属性。

#### 3. 利用VS Code代码片段

- 为了提高开发效率，VS Code 提供了自动补全的功能，利用快捷键 `Tab`，我们可以自动生成HTML标签结构，这样就不需要手动编写大量的HTML代码。

  例如：

  ```html
  <div className="mb-3">
    <label className="form-label" htmlFor="name">Name</label>
    <input className="form-control" id="name" />
  </div>
  ```

  在上述结构中：

  - `form-label` 用于给标签元素添加样式。
  - `form-control` 是输入框的样式类。
  - `htmlFor` 属性用于链接标签和输入框，使得点击标签时输入框能够获得焦点。

#### 4. 添加全局样式

- 为了让表单内容不那么紧贴屏幕的边缘，我们将在全局的CSS文件中添加一些样式。

- 在项目中的 `src` 文件夹下创建一个 `index.css` 文件，并为 `body` 元素添加一些内边距，使得表单内容看起来不那么拥挤。

  ```css
  body {
    padding: 20px;
  }
  ```

- 在 `main.tsx` 文件中导入这个 `index.css` 文件。

#### 5. 添加多个表单字段

- 在表单中，我们将添加两个输入框：

  - 第一个输入框是用于输入名字的文本框。
  - 第二个输入框是用于输入数字的文本框，类型设置为 `number`，确保用户只能输入数字。

  代码示例如下：

  ```tsx
  <div className="mb-3">
    <label className="form-label" htmlFor="name">Name</label>
    <input className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label className="form-label" htmlFor="age">Age</label>
    <input className="form-control" type="number" id="age" />
  </div>
  ```

- 在浏览器中，用户将看到一个“Name”字段和一个“Age”字段，并且“Age”字段将只能接受数字输入。

#### 6. 添加提交按钮

- 接下来，我们需要在表单中添加一个提交按钮。这个按钮的类使用 `btn` 和 `btn-primary`，并且设置类型为 `submit`。

  代码示例如下：

  ```tsx
  <button type="submit" className="btn btn-primary">Submit</button>
  ```

- 这将显示一个提交按钮，用户点击后可以提交表单。

#### 7. 测试表单

- 在 `App` 组件中，我们需要引入并渲染 `Form` 组件，来检查表单是否正确显示。

  例如：

  ```tsx
  import { Form } from './Form';
  
  const App = () => {
    return (
      <div>
        <Form />
      </div>
    );
  };
  ```

- 渲染后，表单将显示在浏览器中。

#### 8. 处理表单提交

- 最后，我们需要处理表单的提交事件。我们将为表单添加一个 `onSubmit` 事件处理函数，这样用户点击提交按钮时可以执行相关操作。

  在React中，处理表单提交时需要通过 `event.preventDefault()` 来阻止默认的表单提交行为，以便在前端处理提交的逻辑。

  示例代码：

  ```tsx
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 处理提交逻辑
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* 这里是表单的内容 */}
    </form>
  );
  ```

------

### 重点与难点总结：

1. **Bootstrap的实用类：** 通过 `form-label` 和 `form-control` 类，可以极大地简化样式的设置，提高开发效率。
2. **输入框的类型：** 设置输入框的类型为 `number`，确保只能输入数字，这对于表单验证非常重要。
3. **提交事件处理：** 表单提交的事件需要通过 `preventDefault()` 来防止页面刷新，确保前端能控制数据提交的流程。

### 扩展与反思：

- **表单验证：** 本次课程并未涉及表单验证的部分，实际开发中，我们可能需要对输入进行进一步的验证，如检查文本框是否为空，数字是否为有效值等。
- **组件复用：** 如果表单项比较复杂，可以考虑将表单元素（如输入框和标签）抽象成独立的组件，以便更好地管理和复用。

这次课堂为我们展示了如何结合React和Bootstrap创建一个简单的表单，并通过简单的样式调整和功能实现来提高用户体验。

## 2. **使用 `useRef` 获取 DOM 元素的值**

除了使用 `state` 来存储表单数据，还可以使用 React 的 `useRef` hook 来获取 DOM 元素的引用，并读取它们的值。

```tsx
import React, { useRef } from 'react';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name:  '',
    age: 0, 
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current && ageRef.current) {
      person.name = nameRef.current.value
      person.age = parseInt(ageRef.current.value, 10) // 使用parseInt将字符串转换为数字
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input ref={nameRef} type="text" />
      </div>
      <div>
        <label>Age</label>
        <input ref={ageRef} type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```

 也可以写成：提交表单并构建数据对象

- 通常，在提交表单时，我们会将表单的数据发送到服务器。为了模拟这个过程，我们将创建一个包含姓名和年龄的对象，并将输入框的值赋给对象的属性。

  **示例：**

  ```tsx
  const person = {
    name: nameRef.current?.value || '',
    age: parseInt(ageRef.current?.value, 10) || 0,  // 使用parseInt将字符串转换为数字
  };
  console.log(person);  // 输出最终的person对象
  ```

#### 1. 引入 `useRef` 钩子

- 在React中，`useState` 是用来管理组件内部状态的钩子，而 `useRef` 则用于引用DOM元素。在本课中，我们将使用 `useRef` 来引用表单中的输入字段，并在表单提交时读取其值。

  **步骤：**

  - 首先需要从React中引入 `useRef`：

    ```tsx
    import { useRef } from 'react';
    ```

  - 然后，我们调用`useRef`钩子，并传入初始值（通常传入`
    null` ）。

    ```tsx
    const nameRef = useRef(null);  // 引用姓名输入框
    const ageRef = useRef(null);   // 引用年龄输入框
    ```

#### 2. 关联 `ref` 和 DOM 元素

- `useRef` 返回一个包含 `current` 属性的对象，该属性引用了DOM元素。我们将这个对象与实际的DOM元素（如输入框）关联，通过在输入框上设置 `ref` 属性来完成。

  **示例：**

  ```tsx
  <input ref={nameRef} type="text" />
  <input ref={ageRef} type="number" />
  ```

#### 3. 读取 `ref` 的值

- 当表单提交时，我们需要读取输入框的值。可以通过访问 `nameRef.current.value` 或 `ageRef.current.value` 来获取相应的值。

  **示例：**

  ```tsx
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);  // 输出姓名输入框的值
    console.log(ageRef.current.value);   // 输出年龄输入框的值
  };
  ```

#### 4. 处理 TypeScript 错误

- 由于 `useRef` 钩子可以引用任何DOM元素（不仅仅是输入框），TypeScript编译器无法确定 `ref` 对象的类型，这可能导致类型错误。为了让编译器知道我们引用的是一个HTML输入框，需要在调用 `useRef` 时明确指定类型。

  **修复方法：**

  ```tsx
  const nameRef = useRef<HTMLInputElement>(null);  // 指定类型为HTMLInputElement
  const ageRef = useRef<HTMLInputElement>(null);   // 同上
  ```

#### 5. 提交表单并构建数据对象

- 通常，在提交表单时，我们会将表单的数据发送到服务器。为了模拟这个过程，我们将创建一个包含姓名和年龄的对象，并将输入框的值赋给对象的属性。

  **示例：**

  ```tsx
  const person = {
    name: nameRef.current?.value || '',
    age: parseInt(ageRef.current?.value, 10) || 0,  // 使用parseInt将字符串转换为数字
  };
  console.log(person);  // 输出最终的person对象
  ```

#### 6. 为什么要初始化 `ref` 为 `null`

- 你可能会好奇，为什么我们每次都要将 `ref` 对象初始化为 `null`？这是因为在React渲染组件时，DOM节点是在渲染后才创建的，因此 `ref` 对象的 `current` 属性在组件初始渲染时并没有引用任何DOM元素。为了确保类型安全，`ref` 对象的初始值应为 `null`。

  **原因解释：**

  - 在组件渲染时，`ref` 的 `current` 属性会引用对应的DOM元素；而在渲染前，它的值是 `null`。
  - 如果没有传入初始值，`current` 会变成 `undefined`，这可能导致后续的问题。

#### 7. 设计上的问题

- 尽管每个 `ref` 对象都需要初始化为 `null`，这在某些开发者看来可能显得不太美观。因为React本身应该处理这部分初始化工作，而不需要开发者显式地传入 `null`。
- 然而，这种设计是React当前的实现方式，尽管这可能并不完美，但我们只能按照这种方式进行开发。

#### 重点总结：

1. **使用 `useRef` 管理DOM引用：** `useRef` 可以帮助我们引用DOM元素，避免使用传统的DOM操作方式。
2. **类型安全：** 在TypeScript中，需要明确指定 `useRef` 的类型，否则会报类型错误。
3. **表单提交数据：** 使用 `ref` 读取输入框的值，构建表单数据对象，并处理数据类型转换（如将字符串转换为数字）。
4. **初始化 `ref` 为 `null` 的必要性：** 在React中，初始化 `ref` 为 `null` 是一种最佳实践，确保代码在渲染过程中类型一致。

### 扩展与反思：

- **更复杂的表单处理：** 当表单变得更复杂时，可能会涉及多个输入框的校验和条件渲染，`useRef` 也可以帮助我们管理这些动态变化的DOM引用。
- **是否使用 `useState` 替代 `useRef`？** 在很多情况下，如果我们不需要直接操作DOM元素，可能会选择使用 `useState` 来管理表单数据，但 `useRef` 在需要直接操作DOM时提供了极大的便利。

通过本次课，我们掌握了 `useRef` 钩子的基本用法，并深入理解了它在React中管理DOM引用的独特优势。

## 4. **使用 `useState` 管理表单数据**

```tsx

import React from "react";
import { useRef, useState } from "react";
const Form = () => {

  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
          type="text"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          onChange={(e) => {
            setPerson({ ...person, age: parseInt(e.target.value) });
          }}
          type="number"
          value={person.age}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

```



1. 使用 `useState` 管理表单数据

- 除了使用 `useRef` 获取输入框的值，React 还提供了 `useState` 钩子，可以用来管理表单中数据的状态。在本课中，我们将使用 `useState` 钩子来替代 `useRef`，通过更新状态来处理表单数据。

  **步骤：**

  - 首先，我们需要使用 `useState` 来创建一个 `person` 对象，包含 `name` 和 `age` 两个属性，并初始化这些值。

    ```tsx
    const [person, setPerson] = useState({ name: '', age: '' });
    ```

  - `person` 是存储表单数据的对象，`setPerson` 是用来更新该对象的函数。

#### 2. 处理输入框的 `onChange` 事件

- React 提供了 `onChange` 事件处理程序，允许我们在用户输入时实时更新状态。每次用户输入一个字符时，`onChange` 事件都会被触发，从而更新相应的状态。

  **示例：**

  ```tsx
  <input
    type="text"
    value={person.name}
    onChange={(event) => {
      setPerson({ ...person, name: event.target.value });
    }}
  />
  ```

  在这个代码中：

  - 我们使用 `value={person.name}` 让输入框的值始终与 `person.name` 保持同步。
  - `onChange` 事件每次触发时，调用 `setPerson` 更新 `person` 对象中的 `name` 属性。

#### 3. 处理年龄字段的 `onChange` 事件

- 对于 `age` 字段，使用相同的方式来更新状态，但是由于 `age` 属性的值应该是一个数字，因此我们需要将输入框的值转换为数字。

  **示例：**

  ```tsx
  <input
    type="number"
    value={person.age}
    onChange={(event) => {
      setPerson({ ...person, age: parseInt(event.target.value, 10) });
    }}
  />
  ```

  在此代码中：

  - 我们通过 `parseInt()` 将输入框的值转换为整数。

#### 4. 提交表单

- 在表单提交时，我们只需直接将 `person` 对象打印到控制台。

  **示例：**

  ```tsx
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(person);
  };
  ```

  每次提交表单时，我们将当前 `person` 对象打印出来。

#### 5. 性能考虑

- 需要注意的是，使用 `useState` 时，每次用户输入时，组件会重新渲染。对于简单的表单来说，这通常不是问题，但如果表单非常复杂且包含大量输入字段，可能会导致性能问题。

  - 对于大多数表单而言，这种性能损失并不明显。
  - 如果在极端情况下发现性能瓶颈，可以考虑使用 `useRef` 来替代 `useState`，避免每次输入时都触发组件重渲染。

  **建议：** 永远不要过早地做性能优化，如果没有明显的性能问题，不要急于改变代码。

#### 6. 控制组件与非控制组件

- 由于我们将 `value` 属性设置为 `person.name` 和 `person.age`，使得输入框的值完全由 React 控制，这种方式叫做**受控组件**（controlled component）。

  - 在这种模式下，表单元素的状态由 React 管理，而不是浏览器的DOM。
  - 受控组件的优点是所有的表单数据都存储在 React 状态中，容易进行统一的管理和验证。

  **示例：**

  ```tsx
  <input
    type="text"
    value={person.name}   // 受控
    onChange={(event) => setPerson({ ...person, name: event.target.value })}
  />
  ```

#### 7. 解决表单初始化问题

- 如果我们在初始化时不为 `person` 对象的属性提供默认值，可能会出现 `undefined` 或空值的问题。

  - 我们应该确保 `name` 和 `age` 属性在初始时有合理的默认值（如空字符串或数字零），以避免表单状态未定义的错误。

  **示例：**

  ```tsx
  const [person, setPerson] = useState({ name: '', age: 0 });
  ```

#### 重点总结：

1. **使用 `useState` 管理表单数据：** 通过使用 `useState` 管理表单中的数据，我们可以保持表单项与React状态同步。
2. **`onChange` 事件：** `onChange` 用来监听用户输入，并更新状态，确保表单数据实时更新。
3. **受控组件：** 使用 `value` 属性将表单元素的状态交给 React 管理，避免 DOM 直接管理元素状态，从而确保数据的统一和一致性。
4. **性能与优化：** 在大多数情况下，使用 `useState` 管理表单状态足够了，只有在性能出现问题时，才需要考虑 `useRef` 或其他优化方案。
5. **初始化值：** 确保状态有合理的初始化值，避免 `undefined` 错误。

### 扩展与反思：

- **表单验证：** 受控组件的方式非常适合表单验证，因为你可以随时访问和更新表单数据。可以结合 `useEffect` 来进行动态验证，或者在表单提交前进行统一的验证。
- **复杂表单的优化：** 对于包含大量字段的表单，可以使用 `useReducer` 替代 `useState` 来管理状态，提供更强大的控制力。

通过本次课，我们掌握了如何通过 `useState` 管理表单数据，理解了受控组件的概念，并学习了如何优化表单的性能。







## 5.**表单数据验证**

```tsx
import React from "react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
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
        <input {...register("name")} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input {...register("age")} type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
```



#### 1. 使用 `react-hook-form` 简化表单管理

- 在处理复杂表单时，使用 `useState` 钩子来管理每个输入字段的值可能会变得繁琐且容易出错，因为每个输入字段都需要设置 `onChange` 和 `value` 属性。为了减少代码量并简化表单管理，我们可以使用一个流行的库——**react-hook-form**。

#### 2. 安装 `react-hook-form`

- 首先，通过终端安装 react-hook-form：

  ```bash
  npm install react-hook-form@7.43
  ```

#### 3. 使用 `useForm` 钩子

- 在组件中，我们通过引入 `react-hook-form` 库中的 `useForm` 钩子来简化表单操作。

  ```tsx
  import { useForm } from 'react-hook-form';
  ```

- 调用 `useForm` 时，它会返回一个包含多个属性和方法的对象，其中最重要的方法之一是 `register`，用于注册表单输入字段。其他有用的方法包括：`reset`、`setValue`、`setError` 等，用于编程方式管理表单的状态。

  **示例：**

  ```tsx
  const { register, handleSubmit } = useForm();
  ```

#### 4. 注册输入字段

- 使用 `register` 方法注册表单输入字段，`register` 接收字段名作为参数，并返回一个包含多种属性的对象。这些属性可以直接 spread 到输入框中，而不需要手动设置 `onChange` 和 `value`。

  **示例：**

  ```tsx
  <input {...register("name")} />
  <input {...register("age")} />
  ```

- `register` 返回的对象包含如下属性：

  - `name`: 字段名
  - `onChange`: 处理输入变化
  - `onBlur`: 处理失去焦点事件
  - `ref`: 引用输入框DOM节点

  这样，`react-hook-form` 会通过引用对象来管理输入框的状态，避免了传统的重新渲染。

#### 5. 提交表单

- `react-hook-form` 提供了一个 `handleSubmit` 方法，用于处理表单提交。你只需将提交处理函数传递给 `handleSubmit` 即可。

  **示例：**

  ```tsx
  const onSubmit = (data) => {
    console.log(data);  // 提交表单时，输出表单数据
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("age")} />
      <button type="submit">Submit</button>
    </form>
  );
  ```

- 在这里，`onSubmit` 函数会接收一个 `data` 对象，包含表单的所有数据。提交时，`react-hook-form` 会自动调用 `onSubmit`。

#### 6. 使用 TypeScript 管理数据类型

- 当使用 TypeScript 时，`handleSubmit` 接收的数据默认类型为 `any`。为了让 TypeScript 正确推断数据类型，我们可以使用 `FieldValues` 类型来指定提交数据的结构。

  **示例：**

  ```tsx
  import { FieldValues } from 'react-hook-form';
  
  const onSubmit = (data: FieldValues) => {
    console.log(data);  // 提交的表单数据
  };
  ```

  通过 `FieldValues` 类型，TypeScript 会正确推断 `data` 参数的类型，避免类型错误。

#### 7. 优势总结

- **减少冗余代码：** 使用 `react-hook-form` 可以减少每个表单字段需要编写的冗余代码，不再需要为每个字段手动编写 `onChange` 和 `value` 属性。
- **无需手动管理状态：** `react-hook-form` 自动管理输入字段的状态，避免了复杂的状态管理代码。
- **性能优化：** 由于 `react-hook-form` 使用引用对象管理表单输入，避免了组件的重复渲染，提供了更高的性能。
- **简单易用：** `react-hook-form` 提供了简单的API，可以非常快速地构建表单。

#### 8. 下一步：表单验证

- 在构建表单时，通常还需要添加表单验证逻辑。在接下来的课程中，我们将学习如何使用 `react-hook-form` 实现表单验证，确保用户输入的数据是有效的。

### 重点总结：

1. **`react-hook-form` 简化表单管理：** 通过 `useForm` 和 `register` 方法，可以轻松管理复杂表单，而无需手动处理每个输入字段的 `onChange` 和 `value` 属性。
2. **性能提升：** 由于表单状态是通过引用对象管理，避免了每次输入时重新渲染组件，提高了性能。
3. **TypeScript 支持：** 通过 `FieldValues` 类型，`react-hook-form` 可以更好地与 TypeScript 配合，确保表单数据的类型安全。
4. **快速构建表单：** `react-hook-form` 使得构建表单变得更加简单且高效，减少了冗余的代码。

### 扩展与反思：

- **复杂表单的处理：** `react-hook-form` 在处理包含多个字段和动态验证的复杂表单时，表现得尤为高效。通过简洁的API，你可以轻松实现复杂的表单逻辑。
- **与其他库的集成：** `react-hook-form` 可以与第三方UI库（如 Material-UI、Ant Design）集成，进一步提高开发效率。

通过本次课，我们掌握了如何使用 `react-hook-form` 来快速简化表单管理，并准备好进一步探索表单验证的内容。



## 6.使用react-hook-form进行表单验证

在本节课中，我们将进一步学习如何使用**react-hook-form**来为表单应用验证规则，确保用户在提交表单时填写有效数据。通过为输入字段注册验证规则，我们不仅可以减少重复代码，还能轻松地向用户展示错误信息，提升用户体验。

------

#### 1. 应用验证规则的背景

- **需求**：确保用户在提交表单时填写了必填字段，并且输入满足一定的最小长度要求。
- **好处**：只有当表单数据满足所有验证条件时，才会调用提交处理函数，从而避免错误数据的提交。

------

#### 2. 注册输入字段并添加验证规则

- **注册方法**：在调用 `register` 方法时，可以传入第二个参数对象来指定验证规则。

- **示例**：为 `name` 字段设置 `required: true` 和 `minLength` 验证规则。

  ```tsx
  <input 
    {...register("name", { required: true, minLength: 3 })} 
    type="text" 
  />
  ```

- **效果**：

  - 如果用户未输入任何内容，验证错误的类型将为 `required`；
  - 如果输入字符少于3个，则错误类型将为 `minLength`。

- **注意**：当验证不通过时，react-hook-form 将不会调用提交处理函数，这样我们可以通过错误信息告知用户需要修正数据。

------

#### 3. 获取和查看验证错误

- **formState**：在使用 `useForm` 时，会返回一个对象，其中包含 `formState` 属性，它记录了验证状态、错误信息等。

- **检查错误对象**：通过 `formState.errors` 可以看到当前表单中每个字段的错误信息。

  ```tsx
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  ```

- **错误示例**：

  - 如果没有填写 `name` 字段，`errors.name.type` 会是 `"required"`；
  - 如果填写字符不足，则 `errors.name.type` 会是 `"minLength"`。

------

#### 4. 显示错误提示信息

- **条件渲染错误信息**：在输入框下方使用条件表达式，根据 `errors` 对象的内容来显示相应的错误提示。

- **使用可选链（optional chaining）**：防止因访问不存在的属性而报错。

  **示例**：

  ```tsx
  {errors.name?.type === 'required' && (
    <p className="text-danger">Name field is required.</p>
  )}
  {errors.name?.type === 'minLength' && (
    <p className="text-danger">Name must be at least 3 characters.</p>
  )}
  ```

- **样式设置**：使用Bootstrap的 `text-danger` 类，将错误文本渲染为红色，提升视觉效果。

------

#### 5. 使用TypeScript接口定义表单数据结构

- **问题背景**：当前TypeScript无法自动识别表单中字段的名称，影响自动补全与类型安全。

- **解决方案**：在组件外部定义一个接口，明确表单数据的结构。

  **示例**：

  ```tsx
  interface FormData {
    name: string;
    age: number;
  }
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  ```

- **好处**：

  - 在使用 `errors` 或提交数据时，编辑器会提供自动补全；
  - 能够在编译期间捕捉数据类型不匹配的错误，提高代码的健壮性。

------

#### 6. 综合示例代码

下面是一个综合示例，展示如何用react-hook-form应用验证规则、显示错误信息以及确保类型安全：

```tsx
import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';

interface FormData {
  name: string;
  age: number;
}

const MyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name输入框 */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          id="name" 
          className="form-control"
          type="text"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === 'required' && (
          <p className="text-danger">Name field is required.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">Name must be at least 3 characters.</p>
        )}
      </div>

      {/* Age输入框 */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          id="age" 
          className="form-control"
          type="number"
          {...register("age", { required: true })}
        />
        {errors.age?.type === 'required' && (
          <p className="text-danger">Age field is required.</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default MyForm;
```

------

#### 7. 总结与扩展思考

- **验证规则的应用**：通过在 `register` 方法中传入验证规则，可以轻松地为每个输入字段设置必填、最小长度等规则，且仅当表单有效时才调用提交处理函数。
- **错误信息处理**：利用 `formState.errors` 及条件渲染，可以直观地向用户展示各个输入字段的验证错误。使用可选链保证代码健壮性，同时配合Bootstrap类使错误信息更具可读性。
- **类型安全**：使用TypeScript接口定义表单数据的结构，不仅改善了开发体验（自动补全），也提高了代码的可靠性。
- **扩展应用**：后续可以结合更多的验证规则（例如正则表达式匹配、自定义验证器等），以及如何利用react-hook-form的其它API来实现更复杂的表单逻辑与错误处理。

这节课展示了react-hook-form如何大幅简化表单验证与错误处理的工作，让我们能够更专注于业务逻辑，而不必为每个输入字段编写冗余代码。



# 7.使用Zod与React Hook Form进行Schema验证

随着表单的复杂度不断提升，将验证规则分散写在JSX中会变得冗长且难以维护。这时，我们可以采用**Schema-based Validation**（基于模式的验证）的方法，将所有的验证规则集中定义在一个Schema中。本文介绍了如何使用流行的验证库 **Zod** 与 **react-hook-form** 相结合，简化表单验证的流程。还有joi、yup验证库

------

#### 1. 为什么使用Schema验证？

- **代码集中**：将所有验证规则统一写在一个Schema中，避免在各个输入字段中重复书写内联验证逻辑。
- **易于维护**：当表单变得复杂时，所有验证规则集中管理，便于修改和扩展。
- **类型推导**：Zod不仅定义验证规则，还可以推导出与之对应的TypeScript类型，消除手写接口时的冗余和错误。

------

#### 2. 使用Zod定义Schema

```
npm i zod@3.20.6
```



1. **导入Zod**：在文件顶部引入Zod库。

   ```tsx
   import { z } from 'zod';
   ```

2. **定义表单Schema**：使用 `z.object` 定义表单中各字段的验证规则。

   - **name 字段**：必须为字符串且至少3个字符。
   - **age 字段**：必须为数字，可以设定最小值（例如，必须大于0）。

   **示例代码：**

   ```tsx
   const schema = z.object({
     name: z.string().min(3, { message: "Name must be at least 3 characters." }),
     age: z.number().min(18, { message: "Age must be at least 18." }),
   });
   ```

3. **提取TypeScript类型**：利用 `z.infer` 从Schema中自动生成表单数据类型，避免手动编写接口。

   ```tsx
   type FormData = z.infer<typeof schema>;
   ```

------

#### 3. 与React Hook Form集成

1. 安装解析器：通过终端安装 `@hookform/resolvers`包，该包为各种Schema验证库（如Zod、Yup、Joi等）提供解析器支持。

   ```bash
   npm install @hookform/resolvers
   ```

2. 导入Zod解析器：在文件顶部引入Zod解析器。

   ```tsx
   import { zodResolver } from '@hookform/resolvers/zod';
   ```

3. 调用useForm：在调用 `useForm`时，将 `resolver`配置项设置`zodResolver(schema)`

   ，这样`react-hook-form`会依据`Schema`自动进行验证。

   ```tsx
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
     resolver: zodResolver(schema)
   });
   ```

------

#### 4. 调整输入字段注册与错误处理

1. **移除内联验证规则**：由于所有验证规则都已在Schema中定义，注册时无需再传入验证对象。

   ```tsx
   <input {...register("name")} type="text" />
   <input {...register("age", { valueAsNumber: true })} type="number" />
   ```

   - **valueAsNumber**：对于age输入，由于HTML输入框返回的总是字符串，传递 `{ valueAsNumber: true }` 让react-hook-form将其转换为数字。

2. **显示错误信息**：利用 `formState.errors`，在对应输入字段下方显示验证错误。

   - 通过 `errors.<field>?.message` 动态读取错误提示消息。
   - 使用Bootstrap的 `text-danger` 类使错误信息以红色显示。

   **示例代码：**

   ```tsx
   {errors.name && <p className="text-danger">{errors.name.message}</p>}
   {errors.age && <p className="text-danger">{errors.age.message}</p>}
   ```

------

#### 5. 综合示例

下面是一个完整的示例，展示了如何将Zod与react-hook-form集成来进行Schema验证，同时自动生成错误提示：

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 定义表单Schema
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z.number().min(18, { message: "Age must be at least 18." }),
});

// 自动推导表单数据类型
type FormData = z.infer<typeof schema>;

const MyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name 输入框 */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          id="name" 
          className="form-control"
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      
      {/* Age 输入框 */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          id="age" 
          className="form-control"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default MyForm;
```

------

#### 6. 总结与扩展

- **集中式验证规则**：通过Schema（例如使用Zod）将所有验证规则集中管理，避免在JSX中散布大量内联验证代码。
- **自动类型推导**：利用Zod的 `z.infer` 特性自动生成TypeScript类型，提升代码一致性和开发体验。
- **集成解析器**：通过 `zodResolver` 与react-hook-form无缝集成，使得表单验证既高效又具备良好的性能。
- **自定义错误信息**：可在Schema中定制错误提示信息，提升用户体验；对于数字字段，注意使用 `valueAsNumber` 来正确处理类型转换。

**扩展阅读**：由于Zod功能丰富，上述内容只是基础应用。若需深入了解更多高级功能（如自定义验证规则、嵌套对象验证等），建议查阅 [Zod官方文档](https://zod.dev/)。

通过本节课，我们学会了如何利用Zod和react-hook-form进行Schema-based验证，使得表单验证代码更简洁、集中且易于维护，同时还能获得良好的TypeScript类型支持。









## 项目：费用追踪器项目扩展与高级功能



在前面，我们已经完成了费用列表和基本的表单功能。接下来，我们将继续扩展功能，添加一些更复杂的功能，如数据过滤、状态管理、条件渲染以及使用 React Hook Form 进行更高级的表单操作。



**1. 费用列表组件 (ExpenseList)**



费用列表组件的目标是渲染一张表格，显示用户的费用信息。在此组件中，我们接收一个包含费用数据的 expenses 数组并将其显示在表格中。



**步骤**：

​	•	创建一个表格，表格中包括 description（描述）、amount（金额）、category（类别）以及 delete（删除按钮）等列。

​	•	使用 map 方法遍历 expenses 数组，动态生成表格的行。

​	•	为每一行添加一个删除按钮，点击时调用父组件传递的 onDelete 回调函数。

```
// ExpenseList.tsx
import React from 'react';

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

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
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
          <td colSpan={3}>Total</td>
          <td>{expenses.reduce((acc, expense) => acc + expense.amount, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
```

**2. 费用过滤器 (ExpenseFilter)**



为了方便用户按类别筛选费用，我们创建了一个费用过滤器组件。这个组件允许用户选择一个类别，表单根据选择的类别动态更新显示的费用项。



**步骤**：

​	•	使用 select 元素显示所有的费用类别。

​	•	当用户选择一个类别时，更新父组件中的 selectedCategory 状态。

​	•	根据选中的类别动态过滤费用列表。

```
// ExpenseFilter.tsx
import React from 'react';

interface ExpenseFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ categories, onSelectCategory }) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
```

**3. 父组件中的状态管理与数据过滤**



在父组件中，我们需要维护费用数据（expenses）和当前选择的类别（selectedCategory）。当用户选择类别时，我们根据选择的类别过滤费用列表。



**步骤**：

​	•	使用 useState 管理费用数据和选中的类别。

​	•	根据 selectedCategory 对费用数据进行筛选，传递给 ExpenseList 组件。

​	•	使用 onDelete 方法从费用列表中删除费用项。

```
// App.tsx
import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

const categories = ['groceries', 'utilities', 'entertainment'];

const App: React.FC = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'groceries' },
    { id: 2, description: 'Electric Bill', amount: 100, category: 'utilities' },
    { id: 3, description: 'Cinema Ticket', amount: 20, category: 'entertainment' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="container mt-4">
      <ExpenseFilter categories={categories} onSelectCategory={handleCategoryChange} />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
```

**4. 动态更新表单与费用数据**



在表单组件中，用户可以添加新的费用项。当用户提交表单时，我们会创建一个新的费用项并将其添加到现有的费用列表中，同时重置表单。



**步骤**：

​	•	创建一个费用表单（ExpenseForm）组件，接受 onSubmit 回调函数来添加新的费用项。

​	•	在父组件中管理费用数据，并使用 onSubmit 更新费用列表。

```
// ExpenseForm.tsx
import React, { useState } from 'react';

interface ExpenseFormProps {
  onSubmit: (expense: { description: string; amount: number; category: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ description, amount, category });
    setDescription('');
    setAmount(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
```

**5. 父组件整合：添加新的费用项**



在父组件中，我们需要添加一个 onSubmit 处理方法，处理表单提交并将新的费用项添加到 expenses 数组中。

```
// App.tsx (continued)
import ExpenseForm from './components/ExpenseForm';

const App: React.FC = () => {
  // Existing state and functions
  const handleSubmit = (expense: { description: string; amount: number; category: string }) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <div className="container mt-4">
      <ExpenseFilter categories={categories} onSelectCategory={handleCategoryChange} />
      <ExpenseForm onSubmit={handleSubmit} />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
```

**6. 项目最终实现与总结**



通过本节的内容，我们实现了一个完整的费用追踪器应用。这个应用支持：

​	•	添加新的费用项；

​	•	删除费用项；

​	•	按类别筛选费用；

​	•	动态计算和显示费用总计；

​	•	表单验证和处理（使用 React Hook Form 和 Zod）。



这不仅帮助你理解了 React 的基本概念，还展示了如何在实际应用中管理复杂的状态、表单和数据验证。

























































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



2.**快捷创建**：使用VSCode的React代码片段（rfc）快速生成函数式组件模板

安装vscode扩展`ES7`,在`.tsx`文件中输入`rafce`可以快速输出

```tsx
import React from 'react'
const Alert = () => {
  return (
    <div>
    </div>
  )
}
export default Alert
```

3.bootstrap

4.vscode中标签快捷键`div.mb-3>label.form-label+input.form-control`

```js
<div className="mb-3">
  <label className="form-label" htmlFor="name">Name</label>
  <input className="form-control" id="name" />
</div>

```

