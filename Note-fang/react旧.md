# React 应用的构建

## 初始化 react

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

## react 项目的基本结构

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

## 创建 react 组件

1. **创建 React 组件**：

    - **文件扩展名**：React 组件使用 `.tsx` 扩展名。
    - **组件命名**：遵循 **Pascal 命名法**（每个单词的首字母大写、驼峰命名法），例如 `Message`。

2. **函数组件 vs 类组件**：

    - 推荐使用 **函数式组件**，它们更简洁且易于编写。

```tsx
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

4. **ReactDOM 与平台无关性**

    - **ReactDOM**：用于在 Web 浏览器中渲染 React 组件。
    - **React Native**：用于在移动设备上渲染 React 组件。
    - 平台无关性
        - React 本身与具体平台无关，可以在多种环境中使用（Web、移动端、桌面端）。

5. **StrictMode**

    - **StrictMode** 是 React 的内置开发工具组件。
    - 帮助识别潜在问题（如不安全的生命周期方法或不纯的组件）。
    - 不会在生产环境中渲染，且不会影响最终用户体验。

6. **React 的高效性**

    - 虚拟 DOM 比较：
        - React 会将新的虚拟 DOM 与旧的虚拟 DOM 进行对比（称为 Diffing 算法）。
        - 仅更新实际 DOM 中需要修改的部分，减少不必要的操作。
    - **性能优化**：通过虚拟 DOM 和分层更新机制，React 提升了应用性能，尤其适用于大型项目。

---

虚拟 DOM 和 `react-dom` 是 React 的核心技术，它们通过高效地更新组件状态和渲染过程，提升了 React 应用的性能。同时，React 作为平台无关的库，能支持跨平台应用开发，既能在 Web 上运行，也能在移动端和桌面设备上运行。

## React 的定位

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

## react 只有一个根组件

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
{
	items.map((item) => <li key={item}>{item}</li>);
}
```

##### **4. 为什么需要 `key` 属性？**

- React 使用 `key` 来优化渲染过程，尤其是在添加、删除或更新列表项时，帮助 React 精确地更新 DOM。

---

#### 关键总结

1. **动态渲染列表**：使用 `map` 方法遍历数组，生成动态的 JSX 元素。
2. **唯一 `key` 属性**：确保每个列表项都有一个唯一的 `key`，以便 React 正确更新 DOM。
3. **优化渲染**：`key` 的作用是优化 React 在处理动态变化时的性能。

---

## 条件渲染

Conditional Rendering

> 简述：
> 条件渲染是根据条件判断来动态渲染不同内容的一种技术。在 React 中，我们通常通过 `if` 语句、三元运算符（`? :`）以及逻辑与运算符（`&&`）来实现条件渲染。

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
    return (
    	<ul>
    		{items.map((item) => (
    			<li>{item}</li>
    		))}
    	</ul>
    );
    ```

2. **使用三元运算符进行条件渲染**

    - **原理**：三元运算符根据 `condition` 的真假返回不同的 JSX 元素，常用于较简单的条件判断。
    - **用法**：适合在 JSX 中快速进行条件渲染，语法简洁。

    ```jsx
    {
    	items.length === 0 ? (
    		<p>No items found</p>
    	) : (
    		<ul>
    			{items.map((item) => (
    				<li>{item}</li>
    			))}
    		</ul>
    	);
    }
    ```

    解释：

    - 如果 `items.length === 0` 为 `true`，则渲染 `<p>No items found</p>`。
    - 否则渲染 `ul` 列表。

3. **使用逻辑与（`&&`）运算符进行条件渲染**

    - **原理**：如果左侧条件为 `true`，则渲染右侧的内容；如果左侧条件为 `false`，则直接返回 `false`，不会渲染右侧的内容。
    - **用法**：适合用来渲染 **条件成立时** 才出现的内容，语法最简洁。

    ```jsx
    {
    	items.length === 0 && <p>No items found</p>;
    }
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
    {
    	items.length === 0 && <p>No items found</p>;
    }
    ```

---

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
    	console.log("Clicked");
    };

    return (
    	<ul>
    		{items.map((item) => (
    			<li
    				key={item}
    				className="list-group-item"
    				onClick={handleClick}
    			>
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
    		{items.map((item) => (
    			<li
    				key={item}
    				className="list-group-item"
    				onClick={() => handleClick(item)}
    			>
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
    			<li
    				key={item}
    				className="list-group-item"
    				onClick={() => handleClick(item, index)}
    			>
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
    	console.log("Item clicked:", item);
    };

    return (
    	<ul>
    		{items.map((item, index) => (
    			<li
    				key={item}
    				className="list-group-item"
    				onClick={(e) => handleClick(item, e)}
    			>
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
    	console.log("Item clicked:", item);
    };

    return (
    	<ul>
    		{items.map((item) => (
    			<li
    				key={item}
    				className="list-group-item"
    				onClick={() => handleClick(item)}
    			>
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

## 动态列表高亮与状态管理

### 一、课程目标

- 实现列表项点击高亮效果
- 学习 React 组件状态管理
- 掌握 useState 钩子的使用

### 二、核心知识点

1. 条件渲染与动态类名

```jsx
// 动态添加active类实现高亮
<li
  className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
>
```

2. useState 状态管理

```jsx
import { useState } from "react";

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
					className={
						selectedIndex === index
							? "list-group-item active"
							: "list-group-item"
					}
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

1. useState 工作机制

- **状态声明**：`const [var, setVar] = useState(initialValue)`
- 返回数组包含两个元素：
    - 状态变量：当前状态值
    - 状态更新函数：用于修改状态
- 示例分析：
    ```jsx
    const [selectedIndex, setSelectedIndex] = useState(-1);
    ```
    - 初始值设为-1 表示默认无选中项
    - setSelectedIndex 调用会触发组件重新渲染

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

2. 检查是否正确定义状态变量
3. 确认使用`setSelectedIndex`而非直接修改
4. 验证事件绑定是否正确使用箭头函数
5. 确保导入了 useState 钩子

6. 为什么需要 useState？

- 直接修改局部变量无法触发重新渲染
- React 需要通过状态更新机制追踪变化

### 五、扩展练习

1. 实现双击取消选中功能
2. 添加不同状态下的样式（如 hover 效果）
3. 创建可复用的高亮列表组件
4. 尝试使用 useReducer 替代 useState 管理状态

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

- 类组件中的 setState 方法
- 其他常用 Hook：useEffect、useContext
- 状态管理库：Redux、MobX
- 不可变数据的重要性

通过本课学习，学生可以掌握 React 组件状态管理的基本原理，理解 Hook 在函数式组件中的应用，并能够实现动态交互效果。重点需要理解状态驱动 UI 更新的核心思想，这是 React 编程范式的关键所在。

### React 组件复用技术：Props 与 TypeScript 接口

#### 核心知识点

**1. 组件复用的必要性**

- 问题场景：当需要展示不同类型列表 （城市/姓名/颜色）时，避免为每个类型创建独立组件
- 解决方案：通过 props 实现组件通用化

**2. Props 核心概念**

- 类比函数参数：组件接收外部输入的方式
- 动态内容传递：
    - 列表数据（items 数组）
    - 标题内容（heading 字符串）

**3. TypeScript 接口应用**

```typescript
typescript
interface Props {
  items: string[];
  heading: string;
}
```

- 类型安全保障：定义组件接收参数的形状（Shape）
- 编译时检查：自动检测缺失/类型错误的 props

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

1. **Props 工作机制**

    - 父组件传参方式：

    ```jsx
    jsx
    <ListGroup items={cities} heading="Cities" />
    ```

    - 动态/静态值传递：
        - 动态数据使用`{}`包裹变量
        - 静态字符串可直接使用引号

2. **TypeScript 核心优势**

    - 类型安全：防止错误类型数据传递
    - 智能提示：IDE 自动补全 props 属性
    - 错误预警：编译阶段捕获 props 缺失

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
2. **TypeScript 进阶技巧**
    - 泛型组件：`function GenericList<T>({ items }: { items: T[] })`
    - 类型复用：通过`export`共享接口定义
3. **调试技巧**
    - 控制台检查 props：`console.log(props)`
    - React DevTools 可视化 props 传递

## 组件复用与 Props 使用

### 一、课程目标

- 理解组件复用的重要性
- 掌握 Props 的基本用法
- 学习 TypeScript 接口定义
- 实现通用列表组件

### 二、核心知识点

#### 1. Props 基础概念

- 组件输入参数
- 类比函数参数
- 实现组件复用

#### 2. TypeScript 接口定义

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

#### 2. Props 使用最佳实践

1. 明确组件输入接口
2. 使用 TypeScript 类型检查
3. 合理设计 Prop 类型
4. 保持 Prop 的不可变性

#### 3. 解构赋值优势

- 代码简洁性
- 可读性提升
- 减少重复代码
- 明确依赖关系

### 五、常见问题解决

#### 1. Props 传递失败排查

1. 检查接口定义
2. 验证 Prop 类型
3. 确认父组件传递
4. 查看控制台警告

#### 2. TypeScript 类型错误处理

- 类型缺失提示
- 类型不匹配警告
- 可选参数处理
- 默认值设置

### 六、扩展练习

1. 添加可选 Prop 参数
2. 实现复杂数据结构传递
3. 创建带默认值的 Props
4. 实现 Prop 类型验证

### 七、关键代码对比

| 传统方式                    | 改进方案                                 |
| --------------------------- | ---------------------------------------- |
| `function ListGroup(props)` | `function ListGroup({ items, heading })` |
| `props.items.map()`         | `items.map()`                            |
| 硬编码内容                  | 动态 Prop 传递                           |
| 无类型检查                  | TypeScript 接口约束                      |

### 八、最佳实践建议

1. 保持 Props 的纯净性
2. 合理划分组件职责
3. 使用 PropTypes 或 TypeScript
4. 避免过度抽象
5. 文档化组件接口

### 九、知识延伸

- 组件组合模式
- Context API
- 高阶组件
- Render Props 模式
- 组件设计模式

## 组件事件通信与回调函数

### 一、课程目标

- 实现子组件事件通知父组件
- 掌握回调函数传递模式
- 学习 TypeScript 函数类型定义
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

#### 2. TypeScript 类型检查

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
4. 添加 JSDoc 注释说明

```typescript
/**
 - 当列表项被选中时触发
 - @param item 被选中的项目内容
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

1. 检查 props 传递链路
2. 验证函数引用是否相同
3. 使用开发工具事件追踪
4. 添加 console.log 调试

#### 2. 性能优化

- 使用 useCallback 避免重复渲染

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
| Context 传递 | 深层嵌套组件 |
| Redux Action | 全局状态管理 |

### 九、实战演练

1. 实现带删除功能的列表
2. 创建多选列表组件
3. 开发分页器组件
4. 构建表单验证系统

## React 中的 Props 与 State

#### 重点总结

| **特性**     | **Props**            | **State**                  |
| ------------ | -------------------- | -------------------------- |
| **数据来源** | 父组件传递           | 组件内部初始化             |
| **可变性**   | 不可变（只读）       | 可变（通过`setState`更新） |
| **作用**     | 组件间通信、配置     | 管理组件内部动态数据       |
| **触发渲染** | 父组件传递新值时触发 | 调用`setState`时触发       |

#### 难点解析

1. **为什么 props 不可变？**
   React 遵循单向数据流原则，props 的不可变性保证了数据传递的清晰性和可预测性。若子组件修改 props，会导致数据源混乱，破坏组件层级关系。
2. **何时使用 props vs state？**
    - **Props**：当数据需要从父组件传递到子组件时（如配置参数、静态内容）。
    - **State**：当数据需要随用户交互或时间变化时（如表单输入、动态列表）。
3. **共同触发渲染的机制**
   React 通过对比新旧 props/state 的差异，决定是否重新渲染组件。这是 React 高效更新 UI 的核心机制。

---

#### 举一反三

1. **实际场景应用**

    - **表单组件**：用`state`管理输入框的值（如`inputValue`），用`props`接收提交回调函数（如`onSubmit`）。
    - **动态列表**：父组件通过`props`传递列表数据，子组件用`state`管理选中项。

2. **反模式警示**

    ```jsx
    jsx;
    // 错误！直接修改props
    function BadComponent({ title }) {
    	title = "New Title"; // 反模式
    	return <h1>{title}</h1>;
    }
    ```

    正确做法：若需基于 props 派生数据，应通过计算或使用`state`/`useEffect`处理。

3. **进阶思考**

    - **状态提升**：若多个组件需要共享同一数据，应将 state 提升至共同父组件，通过 props 下发。
    - **状态管理库**：复杂应用中使用 Redux 或 Context API 解决深层组件间状态传递问题。

---

#### 总结

理解 props 和 state 的差异是掌握 React 数据流的关键。props 是组件间的“沟通桥梁”，state 是组件的“记忆单元”，二者协同工作，构建出

## 实现可接收子组件的 Alert 组件

### 课程重点

1. 组件接收 children 属性的实现方式
2. ReactNode 类型的使用
3. 组件开发的 TypeScript 类型定义
4. 快捷开发工具的使用技巧

### 教学步骤

#### 一、创建基础组件

```tsx
tsx
// alert.tsx
interface Props {
  children: string;
  onClose: () => void;
}
function Alert({ children, onClose }: Props) {
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

#### 三、升级为 children 属性

```tsx
tsx
// alert.tsx（优化版）
interface Props {
  children: string;
  onClose: () => void;
}
function Alert({ children, onClose }: Props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}
```

### 核心知识点

#### 1. children 属性

- 特殊属性：所有组件默认支持的 prop
- 优势：
    - 支持传递复杂内容（HTML 元素、组件等）
    - 更符合 HTML 原生语法习惯
    - 提升组件灵活性

#### 2. 类型定义

| 类型         | 适用场景                 | 示例              |
| ------------ | ------------------------ | ----------------- |
| string       | 纯文本内容               | "Hello"           |
| ReactNode    | 包含 HTML/组件的复杂内容 | `<span>Hi</span>` |
| ReactElement | 单个 React 元素          | `<MyComponent />` |

#### 3. 组件开发技巧

- 快捷代码片段：使用 VS Code 的 React Native Tools 扩展
    - 输入`rfc`快速生成函数组件模板
- 组件解构：推荐使用对象解构语法

```tsx
tsx
export const Alert = ({ children }: Props) => { ... }
```

### 难点解析

**为什么使用 ReactNode 而不是 string？**

- 扩展性：允许传递任意 React 可渲染内容
- 类型安全：TypeScript 会校验传入内容的合法性
- 兼容性：支持文本、元素、组件混合内容

### 举一反三

**扩展 Alert 组件功能**

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

1. 优先使用 children 而非自定义 prop 传递内容
2. 复杂组件应使用 TypeScript 接口明确定义 props
3. 保持组件职责单一，通过组合实现复杂功能
4. 使用 className 库（如 classnames）处理动态类名

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
2. TypeScript React 插件
3. ES7+ React/Redux Snippets
4. 浏览器 React DevTools

通过本课学习，可以掌握 React 组件设计的关键模式，实现灵活可复用的 UI 组件，为后续复杂组件开发打下坚实基础。

## 可复用的 React 按钮组件

> 简述：在这一节中，我们构建了一个可重用的 React 按钮组件，学习了如何动态地设置按钮的文本、颜色和点击事件处理器。通过这个例子，我们掌握了如何使用 props 来增强组件的灵活性，如何使用 TypeScript 为组件提供类型检查，避免潜在的 bug。

**知识树**

1. React 组件的基本结构
    - 使用 `function` 或 `arrow function` 定义组件。
    - 使用 `props` 传递数据给组件。
2. 动态内容传递
    - 使用 `children` prop 来传递按钮文本。
    - 利用接口（interface）定义 prop 的类型。
3. 事件处理
    - 将按钮的 `onClick` 事件通过 props 传递给父组件，并在按钮点击时触发外部函数。
4. 动态 CSS 类
    - 使用 props 动态更改按钮颜色。
    - 设置默认 props 值，确保组件的稳定性和可复用性。
    - 使用 TypeScript 的字符串字面量类型限制 props 值范围，避免无效输入。

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

1. 在 App 组件中使用按钮组件

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
- **动态 CSS 类**：通过 `color` prop，我们能够动态地控制按钮的外观，用户可以自由选择不同的按钮颜色。
- **默认值和类型限制**：通过 TypeScript，设置了按钮的 `color` 属性为受限的几种颜色选项，避免了使用无效值的错误；同时也为 `color` 设置了默认值，减少了使用时的繁琐。

这段代码和讲解展示了如何构建一个简单、可重用且类型安全的 React 组件。

## 第三章练习

> 本节课的目标是通过一个简单的示例，帮助大家理解如何在 React 中使用状态管理、事件处理以及如何控制组件的可见性。我们将通过实现一个可以显示和关闭的 Bootstrap 样式的警告框（alert）组件，来练习这些核心概念。

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

# 第 4 章-css

## 第 2 节-原生 CSS

> 简述：在这一节中，我们探讨了如何使用原生 CSS 来为 React 组件添加样式。尽管有许多优秀的 CSS 框架（如 Bootstrap 或 Material UI）可供使用，本节介绍了手动编写 CSS 的方式，帮助你理解如何通过原生 CSS 对组件进行样式化。

**知识树**

1. **原生 CSS 的使用**
    - 在项目中直接使用 CSS 文件。
    - 如何在 React 组件中导入和使用 CSS。
2. **CSS 文件组织结构**
    - 将 CSS 文件与组件文件放在同一目录下，便于组件的复用。
    - 如何通过创建`index.ts`文件优化文件引用结构。
3. **样式化 React 组件**
    - 使用简单的 CSS 规则来移除默认样式并添加自定义样式。
    - 使用类选择器为组件应用样式。
4. **提升项目结构**
    - 在项目中使用结构化的方式组织组件和样式文件。

**代码示例**

1. 创建 CSS 文件并导入到组件中

```css
/* listgroup.css */
.list-group {
  list-style: none;
  padding: 0;
}
```

1. 在组件中使用 CSS 文件

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

1. 更新 App 组件

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

- **原生 CSS 的应用**：在 React 中使用纯 CSS 进行样式设置。尽管有许多 CSS 框架，我们仍可以通过手动编写 CSS 来完全控制组件的样式。
- **文件组织**：我们将组件的样式文件与组件本身放在一起，这有助于组件的重用性和项目的模块化。如果不希望文件耦合过紧密，也可以将样式文件放入专门的`styles`目录中。
- **优化组件结构**：通过在组件文件夹中添加`index.ts`，可以简化导入路径，使得在项目中引用组件时更加简洁。
- **简单的样式设置**：通过简单的 CSS 规则，可以快速去除默认样式并添加个性化的设计。

## 第 3 节：解决 CSS 冲突的 CSS 模块

（CSS Modules）

> 简述：在这一节中，我们讨论了使用 CSS 模块来避免 CSS 类名冲突的问题。通过将 CSS 样式局部化，我们可以在不同的文件中使用相同的类名，而不必担心它们相互冲突。CSS 模块使得样式的作用域仅限于组件，增加了代码的可维护性和模块化。

**知识树**

1. CSS 类名冲突问题
    - 当多个 CSS 文件中有相同的类名时，可能会出现样式冲突，导致 UI 异常。
2. CSS 模块的工作原理
    - CSS 模块通过将类名局部化，确保每个类名在组件中唯一。
    - 通过文件重命名 `.module.css` 来启用 CSS 模块功能。
3. 如何在 React 组件中使用 CSS 模块
    - 将 CSS 模块文件导入为 JavaScript 对象。
    - 使用对象的属性来访问类名，避免传统 CSS 中的全局作用域问题。
4. 自动生成唯一的 CSS 类名
    - 工具（如 Vite）会自动为每个 CSS 类名添加唯一的标识符，避免类名冲突。

**代码示例**

1. 创建 CSS 模块文件

    > **CSS 模块的工作原理**
    > 为了解决样式冲突，将 `listgroup.css` 文件重命名为 `listgroup.module.css`，以便启用 CSS 模块的功能。当使用 CSS 模块时，Vite 等打包工具会为每个类名生成唯一的标识符，避免了样式冲突。通过这个方式，不同组件中的同名类不会相互干扰。
    >
    > CSS 类名中包含连字符（例如 `list-group`）时，className 的写法为`<ul className={styles['list-group']}>`

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

2. 在 React 组件中使用 CSS 模块

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

3. 处理多个 CSS 类

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

- **CSS 模块的优势**：通过将每个 CSS 类局部化，避免了类名冲突，增强了代码的可维护性。
- **局部化类名**：通过使用对象的属性引用 CSS 类名，并通过文件扩展名 `.module.css` 启用模块化。
- **自动生成唯一类名**：使用工具（如 Vite）自动处理类名冲突问题，确保每个类名在整个项目中唯一。

---

## 第 4 节：将样式与组件逻辑融合

CSS in JS

> 简述：在这一节中，我们介绍了 CSS in JS 的概念，这种方式允许我们将样式与组件逻辑放在同一个文件中。这种方法带来了样式的局部作用域、更加便捷的代码维护和基于 props 或 state 动态更新样式的能力。

**知识树**

1. **CSS in JS 的概念**
    - 通过将 CSS 写入 JavaScript 文件中，样式和组件逻辑可以紧密结合。
    - 样式与组件一起打包，减少了样式外部依赖。
2. **CSS in JS 的优点**
    - 样式局部化，避免冲突。
    - 组件逻辑与样式紧密耦合，增强了组件的可重用性。
    - 基于组件的 props 和 state 动态修改样式。
3. **Styled Components 的使用**
    - 使用`styled-components`库可以在 JavaScript 文件中创建样式化的 React 组件。
    - 样式通过模板字符串进行定义，并且可以根据组件的 props 动态应用不同样式。
4. **类型安全和 props 管理**
    - 使用 TypeScript 对组件的 props 进行类型定义，确保动态样式的正确性。

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

- **CSS in JS 的优势**：将样式与组件逻辑放在同一个文件中，便于维护和复用。
- **动态样式**：可以通过组件的 props 来动态控制样式，使得样式更加灵活。
- **类型安全**：使用 TypeScript 对 props 进行类型定义，确保组件的样式和行为符合预期。

通过这两种方式（CSS 模块和 CSS in JS），我们可以更加灵活、模块化地为 React 组件添加样式，避免了全局样式冲突和冗余的样式管理。

---

## 第 4 节：CSS in JS - 将样式与组件逻辑融合

> 简述：在这一节中，我们介绍了 CSS in JS 的概念，这种方式允许我们将样式与组件逻辑放在同一个文件中。这种方法带来了样式的局部作用域、更加便捷的代码维护和基于 props 或 state 动态更新样式的能力。

**知识树**

1. **CSS in JS 的概念**
    - 通过将 CSS 写入 JavaScript 文件中，样式和组件逻辑可以紧密结合。
    - 样式与组件一起打包，减少了样式外部依赖。
2. **CSS in JS 的优点**
    - 样式局部化，避免冲突。
    - 组件逻辑与样式紧密耦合，增强了组件的可重用性。
    - 基于组件的 props 和 state 动态修改样式。
3. **Styled Components 的使用**
    - 使用`styled-components`库可以在 JavaScript 文件中创建样式化的 React 组件。
    - 样式通过模板字符串进行定义，并且可以根据组件的 props 动态应用不同样式。
4. **类型安全和 props 管理**
    - 使用 TypeScript 对组件的 props 进行类型定义，确保动态样式的正确性。

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

关键概念总结\*\*

- **CSS in JS 的优势**：将样式与组件逻辑放在同一个文件中，便于维护和复用。
- **动态样式**：可以通过组件的 props 来动态控制样式，使得样式更加灵活。
- **类型安全**：使用 TypeScript 对 props 进行类型定义，确保组件的样式和行为符合预期。

通过这两种方式（CSS 模块和 CSS in JS），我们可以更加灵活、模块化地为 React 组件添加样式，避免了全局样式冲突和冗余的样式管理。

## 第 5-9 节

#### **第 1 节：关注点分离原则（Separation of Concerns）**

##### **概述**

关注点分离（SoC）是软件工程中的一个重要设计原则，建议我们将程序分为不同的模块，每个模块处理特定的功能，而不是将所有内容都放在一起。这样可以使程序更具模块化，便于理解、维护和修改。

##### **模块化的优势**

- **独立构建与测试**：模块化程序允许我们独立地构建和测试各个模块，也能方便地将模块重用到其他程序中。
- **单一责任**：每个模块只关注一个功能。比如，在餐馆里，厨师负责做饭，服务员负责点单。模块化程序也遵循这个逻辑，每个模块承担特定的职责。
- **简化复杂性**：模块内部的实现细节通常是隐藏的，暴露给外部的是一个清晰的接口。类似于电视遥控器，虽然遥控器本身有很多复杂的操作，但用户只需要按按钮，接口简单易用。

##### **关于 CSS-in-JS 和关注点分离**

一些人认为将 CSS 和 JavaScript 混合在一起违反了关注点分离原则，因为我们将所有内容放在同一个文件中。然而，关注点分离的核心并不是文件是否合并，而是模块化：每个模块应该处理特定的功能，并通过清晰的接口与外界交互。在 React 中，CSS-in-JS 的实现方式仍然遵循了这一原则，因为它把样式的复杂性隐藏在了组件的接口后面。

#### **第 2 节：内联样式和推荐的样式方法**

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

#### **第 3 节：使用 React Icons 添加图标**

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

#### **第 4 节：按钮组件练习**

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

2. **导入样式**：在按钮组件的 TypeScript 文件中导入 CSS 模块并应用样式。`

`className={[styles.btn, styles["btn-" + color]].join(" ")}

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

# 第 5 章-状态的最佳实践

知识树

1. **State 更新的异步性**
    - React 更新 State 是异步的，不会立即更新。
    - React 将多个 State 更新合并，批量执行，以提高性能。
2. **State 存储位置**
    - React 的 State 存储在组件外部，在内存中保存，直到组件不再可见。
    - State 的生命周期与组件的渲染周期同步。
3. **State Hook 的使用约束**
    - React 的 Hooks 只能在组件的最顶层使用，不能在条件语句、循环或嵌套函数中调用。
    - 这确保了 Hooks 调用的顺序一致性，避免了状态映射错误。
4. **最佳实践：选择 State 结构**
    - 避免使用冗余的 State 变量，例如计算属性（如 full name）。
    - 将相关的 State 变量放在一个对象中，以便于管理。
    - 避免使用深层嵌套的结构，应尽量保持状态结构的扁平化，以简化更新逻辑。
5. **State 的不可变性**
    - 使用 React 时，State 对象应视为不可变的，避免直接修改对象的属性。
    - 应通过创建新的对象来更新 State，保持 State 的独立性和可预测性。
6. **处理数组和对象的 State 更新**
    - 对数组和对象的更新，避免直接修改它们，使用新的数组或对象来触发渲染。

## **1. React 状态更新是异步的**

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

## **2. 状态存储在组件外部**

- React 将状态变量存储在 **组件外部**，它会保留这些状态，直到组件不再显示时，React 会自动清理这些状态。
- 状态的更新不会丢失，因为状态是存在内存中的，而不是存储在函数的作用域内。

**示例：**

```tsx
const [isLoading, setIsLoading] = useState(false);
```

## **3. Hooks 使用规则：只能在组件的顶层使用**

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

## **4. 状态结构最佳实践**

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

## **5. 纯函数和 React 组件的纯度**

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

## **6. 使用 React 的 Strict Mode 识别不纯函数**

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

## **7. 数组 State 的不可变性：添加、删除和更新元素**

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

## **8.更新嵌套对象中的属性**

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
		zipCode: "10001",
	},
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

## 8.添加、删除和更新元素

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

## **10.使用 Immer 库简化不可变更新**

> 简述：在这一节中，我们学习了如何使用 Immer 库来简化对数组和对象的不可变更新操作。通过 Immer，我们可以在不直接修改原始数据的情况下，通过代理对象进行修改，这使得更新逻辑更加简洁和直观。

##### 知识树

1. **Immer 库简介**
    - Immer 是一个用于简化不可变数据结构更新的库。它使用 JavaScript 的`Proxy`机制，使得我们可以像修改可变数据一样修改不可变数据。
2. **不可变数据更新的复杂性**
    - 在传统的 React 中，我们通常需要使用`map`或`filter`等方法来创建新数组或对象，并进行修改。这样的方式虽然能保证数据的不可变性，但代码变得冗长且难以管理。
3. **使用 Immer 的`produce`函数**
    - Immer 的核心功能是`produce`函数。我们通过传递一个“草稿对象”（draft）给`produce`，在这个对象上进行修改，Immer 会在后台创建一个新的不可变数据结构，并应用这些更改。
4. **提高代码简洁性**
    - 使用`produce`，我们无需担心手动克隆数据，也不需要创建深拷贝。通过修改草稿对象，Immer 会在后台处理数据的更新。
5. **简化对象和数组的更新逻辑**
    - 通过使用 Immer，我们可以直接修改对象或数组中的内容，而不需要创建中间副本。这个过程类似于直接操作可变对象，但始终保持数据不可变性。

##### 代码示例

1. **安装 Immer**：首先，我们需要安装 Immer 库：

    ```bash
    npm install immer@9.0.19
    ```

2. **使用 Immer 简化数组更新**

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

1. **Immer 库的核心功能**：
    - `produce`函数是 Immer 的核心。它允许我们像操作普通对象一样修改不可变数据结构。通过`draft`代理对象，我们可以直接修改数据，Immer 会负责创建更新后的新对象。
2. **不可变数据更新的简化**：
    - 使用`produce`，我们无需手动创建对象副本。我们直接操作`draft`，这样代码更加简洁和可读。同时，数据始终保持不可变性，避免了直接修改原数据的副作用。
3. **在 React 中的应用**：
    - 在 React 中，使用 Immer 可以简化对数组或对象的更新，避免了使用`map`、`filter`等手动处理数据的繁琐逻辑。这对于管理复杂状态和大型应用非常有用。
4. **性能与优化**：
    - Immer 内部通过`Proxy`机制跟踪对数据的修改，这样只有实际更改的部分会被更新，确保性能优化。它的设计使得更新操作非常高效，同时不牺牲代码的可读性。

##### 深入分析

- **性能问题**：
    - 虽然`produce`使得不可变更新变得更加简单，但每次调用`produce`时都会生成一个新的数据对象，这意味着 Immer 会为每次更新创建副本。对于频繁更新的大型数据结构，可能会引起性能问题。为此，Immer 做了许多优化，但仍然需要在性能要求较高的场景下进行评估。
- **复杂数据结构**：
    - Immer 特别适用于处理嵌套的对象或数组更新，它通过浅拷贝和代理来管理嵌套层级，避免了深拷贝的复杂性。对于需要频繁更新的数据结构，Immer 大大简化了代码并提高了效率。
- **可维护性和代码清晰度**：
    - 使用 Immer 可以让代码更简洁，避免了传统方式中需要手动创建副本和使用`map`等方法的冗长代码。尤其是在处理嵌套结构时，Immer 提供了一种更自然、更易理解的方式来管理不可变数据。

##### 总结

Immer 库通过`produce`函数为 React 开发者提供了一种简单、高效的方式来管理不可变数据。它通过代理机制简化了复杂数据的更新逻辑，避免了手动管理副本的繁琐操作，提升了代码的可读性和可维护性。在实际开发中，使用 Immer 可以大大简化数组和对象的不可变更新，特别是在状态更新频繁的场景中。

## 11. 组件间共享状态

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

---

**总结**

1. **更新数组**：在 React 中，我们不能直接修改数组，而是应该创建一个新的数组并将更新后的数组传递给 `setState`。常用的方法包括使用扩展运算符、`filter`、`map` 等。
2. **更新数组中的对象**：对于数组中的对象，使用 `map` 方法可以遍历并更新特定对象，而不会修改原始数组。
3. **Immer 库的使用**：Immer 库简化了不可变数据的更新，允许我们直接在草稿对象上进行修改，减少了手动复制对象的复杂度。
4. **状态提升**：通过将共享状态提升到父组件，多个子组件可以共享和同步状态，确保数据的一致性。

这些技巧和最佳实践将有助于我们编写更清晰、更高效、更易维护的 React 应用。

## 12. 共享组件状态 - 提升组件之间的同步

> 简述：在这一节中，我们讨论了如何在 React 应用中共享状态，特别是在多个组件之间同步状态。通过“提升状态”这一概念，我们可以将状态提升到共同的父组件，然后通过`props`将状态传递给子组件，确保不同组件之间的状态保持一致。

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
5. **确保状态和 UI 的同步**
    - 在不同的组件之间共享和更新状态时，确保 UI 能够实时响应状态变化，避免不同组件之间的状态不同步。

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

1. **NavBar 组件**

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

1. **Cart 组件**

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
3. **状态更新与 UI 同步**：
    - 当状态更新时，React 会自动重新渲染相关的组件。在共享状态的情况下，只要父组件的状态发生变化，所有依赖于该状态的子组件都会重新渲染。
4. **清空购物车**：
    - 购物车组件提供了一个清空购物车的按钮。该按钮并不直接修改父组件的状态，而是通过`onClear`回调通知父组件清空购物车。

##### 深入分析

- **性能优化**：在实际应用中，提升状态的过程可能涉及到多个组件的重新渲染。为了避免不必要的渲染，我们可以利用 React 的`useMemo`或`React.memo`来优化那些不需要每次都重新渲染的组件。
- **数据流**：在 React 中，数据流从父组件流向子组件（单向数据流）。这种设计使得状态管理变得更加可预测和易于调试。通过提升状态到父组件，我们可以更好地控制哪些组件应当在状态更新时重新渲染。
- **可扩展性**：当应用规模增大时，状态管理可能会变得复杂。此时，可能需要引入如`useReducer`或全局状态管理库（如 Redux、Context API）来管理更复杂的状态或跨组件的状态共享。

通过提升状态并使用`props`传递，我们能够高效地管理 React 应用中的组件间同步，确保 UI 与状态的一致性，并为组件的复用和可维护性提供坚实的基础。

#### 13.Exercise

> 一个可以展开和收缩的文本框

## 13. 练习 - 使用 React 实现状态管理与组件交互

> 简述：在这一节中，我们提供了一系列的练习，涵盖了 React 中状态更新和组件间交互的实际应用。通过这些练习，你将学习如何在 React 中进行状态管理、如何使用不可变操作来更新状态，以及如何构建动态和交互式组件。

### 知识树

1. **不可变状态更新**
    - 在 React 中，避免直接修改对象或数组的属性，而是使用不可变的方式更新状态。通过`setState`或`useState`等方法更新状态，并返回一个新的对象或数组。
2. **使用`produce`简化状态更新**
    - 使用`Immer`库的`produce`函数简化不可变状态的更新逻辑。`produce`使得在不可变数据结构中修改数据变得简单和直观。
3. **React 组件的状态管理**
    - 使用`useState`管理组件的局部状态，确保每次状态更新时，组件能根据新的状态重新渲染 UI。
    - 通过父组件与子组件之间的`props`传递共享状态，确保不同组件间的状态同步。
4. **处理复杂数据结构的状态更新**
    - 在更新复杂数据结构（如嵌套对象或数组）时，要确保数据的不可变性。可以使用`map`、`filter`等方法来更新数组，或者使用`spread`操作符和深拷贝技术来更新对象。
5. **实现可扩展的动态组件**
    - 设计可配置的组件，允许通过`props`传递动态值，并基于这些值渲染不同的 UI 内容。
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

1. **在 App 中使用 ExpandableText 组件**

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
    - 在 React 中，避免直接修改对象或数组。使用`setState`或`useState`时，需要确保返回新的对象或数组。
    - 使用`spread`操作符或`map`方法创建新副本，并修改必要的部分。
2. **使用`produce`简化不可变更新**：
    - Immer 库通过`produce`函数简化了不可变数据的更新操作。我们可以像修改普通对象一样修改不可变数据，Immer 会确保返回一个新对象，并保持原数据的不可变性。
3. **组件状态管理**：
    - 使用`useState`管理组件的局部状态。状态的变化会触发组件的重新渲染，更新 UI。
    - 通过`props`在父子组件之间传递共享状态，确保不同组件之间的数据同步。
4. **动态组件与用户交互**：
    - 通过`props`传递动态值，设计可配置的组件（如`ExpandableText`）。组件的行为可以根据`props`和`state`的变化进行调整。

通过这些练习，你可以在实际的 React 开发中更好地掌握不可变状态管理、组件间的数据传递以及交互式组件的实现。这些基础技能将为你构建更复杂的应用打下坚实的基础。

# 第 6 章-构建表单

- 重点总结：

    1. **使用 `useState` 管理表单数据：** 通过使用 `useState` 管理表单中的数据，我们可以保持表单项与 React 状态同步。
    2. **`onChange` 事件：** `onChange` 用来监听用户输入，并更新状态，确保表单数据实时更新。
    3. **受控组件：** 使用 `value` 属性将表单元素的状态交给 React 管理，避免 DOM 直接管理元素状态，从而确保数据的统一和一致性。
    4. **性能与优化：** 在大多数情况下，使用 `useState` 管理表单状态足够了，只有在性能出现问题时，才需要考虑 `useRef` 或其他优化方案。
    5. **初始化值：** 确保状态有合理的初始化值，避免 `undefined` 错误。

- **React 项目：构建一个费用追踪器**

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

- 首先，我们需要在项目中创建一个新的 React 组件，命名为 `Form`。这个组件的功能是渲染一个表单。

- 在 React 中，我们通常使用函数组件来构建组件，所以我们将使用 `function` 来定义这个组件。

    ```tsx
    const Form = () => {
      return (
        <form>
          {/* 这里将放置表单的内容 */}
        </form>
      );
    };
    ```

#### 2. 使用 Bootstrap 类优化表单样式

- 为了让表单有现代感且美观，我们将使用 Bootstrap 提供的一些实用类（utility classes），如 `form-label` 和 `form-control`，来简化样式的处理。
- 我们将为每个输入框和标签提供合适的布局，并为每个输入框设置必要的属性。

#### 3. 利用 VS Code 代码片段

- 为了提高开发效率，VS Code 提供了自动补全的功能，利用快捷键 `Tab`，我们可以自动生成 HTML 标签结构，这样就不需要手动编写大量的 HTML 代码。

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

- 为了让表单内容不那么紧贴屏幕的边缘，我们将在全局的 CSS 文件中添加一些样式。

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

    在 React 中，处理表单提交时需要通过 `event.preventDefault()` 来阻止默认的表单提交行为，以便在前端处理提交的逻辑。

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

---

### 重点与难点总结：

1. **Bootstrap 的实用类：** 通过 `form-label` 和 `form-control` 类，可以极大地简化样式的设置，提高开发效率。
2. **输入框的类型：** 设置输入框的类型为 `number`，确保只能输入数字，这对于表单验证非常重要。
3. **提交事件处理：** 表单提交的事件需要通过 `preventDefault()` 来防止页面刷新，确保前端能控制数据提交的流程。

### 扩展与反思：

- **表单验证：** 本次课程并未涉及表单验证的部分，实际开发中，我们可能需要对输入进行进一步的验证，如检查文本框是否为空，数字是否为有效值等。
- **组件复用：** 如果表单项比较复杂，可以考虑将表单元素（如输入框和标签）抽象成独立的组件，以便更好地管理和复用。

这次课堂为我们展示了如何结合 React 和 Bootstrap 创建一个简单的表单，并通过简单的样式调整和功能实现来提高用户体验。

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

- 在 React 中，`useState` 是用来管理组件内部状态的钩子，而 `useRef` 则用于引用 DOM 元素。在本课中，我们将使用 `useRef` 来引用表单中的输入字段，并在表单提交时读取其值。

    **步骤：**

    - 首先需要从 React 中引入 `useRef`：

        ```tsx
        import { useRef } from 'react';
        ```

    - 然后，我们调用`useRef`钩子，并传入初始值（通常传入` null` ）。

        ```tsx
        const nameRef = useRef(null);  // 引用姓名输入框
        const ageRef = useRef(null);   // 引用年龄输入框
        ```

#### 2. 关联 `ref` 和 DOM 元素

- `useRef` 返回一个包含 `current` 属性的对象，该属性引用了 DOM 元素。我们将这个对象与实际的 DOM 元素（如输入框）关联，通过在输入框上设置 `ref` 属性来完成。

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

- 由于 `useRef` 钩子可以引用任何 DOM 元素（不仅仅是输入框），TypeScript 编译器无法确定 `ref` 对象的类型，这可能导致类型错误。为了让编译器知道我们引用的是一个 HTML 输入框，需要在调用 `useRef` 时明确指定类型。

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

- 你可能会好奇，为什么我们每次都要将 `ref` 对象初始化为 `null`？这是因为在 React 渲染组件时，DOM 节点是在渲染后才创建的，因此 `ref` 对象的 `current` 属性在组件初始渲染时并没有引用任何 DOM 元素。为了确保类型安全，`ref` 对象的初始值应为 `null`。

    **原因解释：**

    - 在组件渲染时，`ref` 的 `current` 属性会引用对应的 DOM 元素；而在渲染前，它的值是 `null`。
    - 如果没有传入初始值，`current` 会变成 `undefined`，这可能导致后续的问题。

#### 7. 设计上的问题

- 尽管每个 `ref` 对象都需要初始化为 `null`，这在某些开发者看来可能显得不太美观。因为 React 本身应该处理这部分初始化工作，而不需要开发者显式地传入 `null`。
- 然而，这种设计是 React 当前的实现方式，尽管这可能并不完美，但我们只能按照这种方式进行开发。

#### 重点总结：

1. **使用 `useRef` 管理 DOM 引用：** `useRef` 可以帮助我们引用 DOM 元素，避免使用传统的 DOM 操作方式。
2. **类型安全：** 在 TypeScript 中，需要明确指定 `useRef` 的类型，否则会报类型错误。
3. **表单提交数据：** 使用 `ref` 读取输入框的值，构建表单数据对象，并处理数据类型转换（如将字符串转换为数字）。
4. **初始化 `ref` 为 `null` 的必要性：** 在 React 中，初始化 `ref` 为 `null` 是一种最佳实践，确保代码在渲染过程中类型一致。

### 扩展与反思：

- **更复杂的表单处理：** 当表单变得更复杂时，可能会涉及多个输入框的校验和条件渲染，`useRef` 也可以帮助我们管理这些动态变化的 DOM 引用。
- **是否使用 `useState` 替代 `useRef`？** 在很多情况下，如果我们不需要直接操作 DOM 元素，可能会选择使用 `useState` 来管理表单数据，但 `useRef` 在需要直接操作 DOM 时提供了极大的便利。

通过本次课，我们掌握了 `useRef` 钩子的基本用法，并深入理解了它在 React 中管理 DOM 引用的独特优势。

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

    - 在这种模式下，表单元素的状态由 React 管理，而不是浏览器的 DOM。
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

1. **使用 `useState` 管理表单数据：** 通过使用 `useState` 管理表单中的数据，我们可以保持表单项与 React 状态同步。
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
    - `ref`: 引用输入框 DOM 节点

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
- **简单易用：** `react-hook-form` 提供了简单的 API，可以非常快速地构建表单。

#### 8. 下一步：表单验证

- 在构建表单时，通常还需要添加表单验证逻辑。在接下来的课程中，我们将学习如何使用 `react-hook-form` 实现表单验证，确保用户输入的数据是有效的。

### 重点总结：

1. **`react-hook-form` 简化表单管理：** 通过 `useForm` 和 `register` 方法，可以轻松管理复杂表单，而无需手动处理每个输入字段的 `onChange` 和 `value` 属性。
2. **性能提升：** 由于表单状态是通过引用对象管理，避免了每次输入时重新渲染组件，提高了性能。
3. **TypeScript 支持：** 通过 `FieldValues` 类型，`react-hook-form` 可以更好地与 TypeScript 配合，确保表单数据的类型安全。
4. **快速构建表单：** `react-hook-form` 使得构建表单变得更加简单且高效，减少了冗余的代码。

### 扩展与反思：

- **复杂表单的处理：** `react-hook-form` 在处理包含多个字段和动态验证的复杂表单时，表现得尤为高效。通过简洁的 API，你可以轻松实现复杂的表单逻辑。
- **与其他库的集成：** `react-hook-form` 可以与第三方 UI 库（如 Material-UI、Ant Design）集成，进一步提高开发效率。

通过本次课，我们掌握了如何使用 `react-hook-form` 来快速简化表单管理，并准备好进一步探索表单验证的内容。

## 6.使用 react-hook-form 进行表单验证

在本节课中，我们将进一步学习如何使用**react-hook-form**来为表单应用验证规则，确保用户在提交表单时填写有效数据。通过为输入字段注册验证规则，我们不仅可以减少重复代码，还能轻松地向用户展示错误信息，提升用户体验。

---

#### 1. 应用验证规则的背景

- **需求**：确保用户在提交表单时填写了必填字段，并且输入满足一定的最小长度要求。
- **好处**：只有当表单数据满足所有验证条件时，才会调用提交处理函数，从而避免错误数据的提交。

---

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
    - 如果输入字符少于 3 个，则错误类型将为 `minLength`。

- **注意**：当验证不通过时，react-hook-form 将不会调用提交处理函数，这样我们可以通过错误信息告知用户需要修正数据。

---

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

---

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

- **样式设置**：使用 Bootstrap 的 `text-danger` 类，将错误文本渲染为红色，提升视觉效果。

---

#### 5. 使用 TypeScript 接口定义表单数据结构

- **问题背景**：当前 TypeScript 无法自动识别表单中字段的名称，影响自动补全与类型安全。

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

---

#### 6. 综合示例代码

下面是一个综合示例，展示如何用 react-hook-form 应用验证规则、显示错误信息以及确保类型安全：

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

---

#### 7. 总结与扩展思考

- **验证规则的应用**：通过在 `register` 方法中传入验证规则，可以轻松地为每个输入字段设置必填、最小长度等规则，且仅当表单有效时才调用提交处理函数。
- **错误信息处理**：利用 `formState.errors` 及条件渲染，可以直观地向用户展示各个输入字段的验证错误。使用可选链保证代码健壮性，同时配合 Bootstrap 类使错误信息更具可读性。
- **类型安全**：使用 TypeScript 接口定义表单数据的结构，不仅改善了开发体验（自动补全），也提高了代码的可靠性。
- **扩展应用**：后续可以结合更多的验证规则（例如正则表达式匹配、自定义验证器等），以及如何利用 react-hook-form 的其它 API 来实现更复杂的表单逻辑与错误处理。

这节课展示了 react-hook-form 如何大幅简化表单验证与错误处理的工作，让我们能够更专注于业务逻辑，而不必为每个输入字段编写冗余代码。

## 7.使用 Zod 与 React Hook Form 进行 Schema 验证

随着表单的复杂度不断提升，将验证规则分散写在 JSX 中会变得冗长且难以维护。这时，我们可以采用**Schema-based Validation**（基于模式的验证）的方法，将所有的验证规则集中定义在一个 Schema 中。本文介绍了如何使用流行的验证库 **Zod** 与 **react-hook-form** 相结合，简化表单验证的流程。还有 joi、yup 验证库

---

#### 1. 为什么使用 Schema 验证？

- **代码集中**：将所有验证规则统一写在一个 Schema 中，避免在各个输入字段中重复书写内联验证逻辑。
- **易于维护**：当表单变得复杂时，所有验证规则集中管理，便于修改和扩展。
- **类型推导**：Zod 不仅定义验证规则，还可以推导出与之对应的 TypeScript 类型，消除手写接口时的冗余和错误。

---

#### 2. 使用 Zod 定义 Schema

```
npm i zod@3.20.6
```

1. **导入 Zod**：在文件顶部引入 Zod 库。

    ```tsx
    import { z } from 'zod';
    ```

2. **定义表单 Schema**：使用 `z.object` 定义表单中各字段的验证规则。

    - **name 字段**：必须为字符串且至少 3 个字符。
    - **age 字段**：必须为数字，可以设定最小值（例如，必须大于 0）。

    **示例代码：**

    ```tsx
    const schema = z.object({
      name: z.string().min(3, { message: "Name must be at least 3 characters." }),
      age: z.number().min(18, { message: "Age must be at least 18." }),
    });
    ```

3. **提取 TypeScript 类型**：利用 `z.infer` 从 Schema 中自动生成表单数据类型，避免手动编写接口。

    ```tsx
    type FormData = z.infer<typeof schema>;
    ```

---

#### 3. 与 React Hook Form 集成

1. 安装解析器：通过终端安装 `@hookform/resolvers`包，该包为各种 Schema 验证库（如 Zod、Yup、Joi 等）提供解析器支持。

    ```bash
    npm install @hookform/resolvers
    ```

2. 导入 Zod 解析器：在文件顶部引入 Zod 解析器。

    ```tsx
    import { zodResolver } from '@hookform/resolvers/zod';
    ```

3. 调用 useForm：在调用 `useForm`时，将 `resolver`配置项设置`zodResolver(schema)`

    ，这样`react-hook-form`会依据`Schema`自动进行验证。

    ```tsx
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: zodResolver(schema)
    });
    ```

---

#### 4. 调整输入字段注册与错误处理

1. **移除内联验证规则**：由于所有验证规则都已在 Schema 中定义，注册时无需再传入验证对象。

    ```tsx
    <input {...register("name")} type="text" />
    <input {...register("age", { valueAsNumber: true })} type="number" />
    ```

    - **valueAsNumber**：对于 age 输入，由于 HTML 输入框返回的总是字符串，传递 `{ valueAsNumber: true }` 让 react-hook-form 将其转换为数字。

2. **显示错误信息**：利用 `formState.errors`，在对应输入字段下方显示验证错误。

    - 通过 `errors.<field>?.message` 动态读取错误提示消息。
    - 使用 Bootstrap 的 `text-danger` 类使错误信息以红色显示。

    **示例代码：**

    ```tsx
    {errors.name && <p className="text-danger">{errors.name.message}</p>}
    {errors.age && <p className="text-danger">{errors.age.message}</p>}
    ```

---

#### 5. 综合示例

下面是一个完整的示例，展示了如何将 Zod 与 react-hook-form 集成来进行 Schema 验证，同时自动生成错误提示：

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

---

#### 6. 总结与扩展

- **集中式验证规则**：通过 Schema（例如使用 Zod）将所有验证规则集中管理，避免在 JSX 中散布大量内联验证代码。
- **自动类型推导**：利用 Zod 的 `z.infer` 特性自动生成 TypeScript 类型，提升代码一致性和开发体验。
- **集成解析器**：通过 `zodResolver` 与 react-hook-form 无缝集成，使得表单验证既高效又具备良好的性能。
- **自定义错误信息**：可在 Schema 中定制错误提示信息，提升用户体验；对于数字字段，注意使用 `valueAsNumber` 来正确处理类型转换。

**扩展阅读**：由于 Zod 功能丰富，上述内容只是基础应用。若需深入了解更多高级功能（如自定义验证规则、嵌套对象验证等），建议查阅 [Zod 官方文档](https://zod.dev/)。

通过本节课，我们学会了如何利用 Zod 和 react-hook-form 进行 Schema-based 验证，使得表单验证代码更简洁、集中且易于维护，同时还能获得良好的 TypeScript 类型支持。

## 项目：费用追踪器项目扩展与高级功能

在本节中，我们将实现一个简单的“Expense List”（支出列表）组件。我们从创建基本的表格结构开始，然后逐步加入功能，如删除支出项和计算总支出。最后，我们将确保组件的可复用性，并通过父组件传递数据和事件。

### **1. 组件结构与文件夹组织**

- **组织文件夹结构**：为整个项目创建一个模块化结构，将相关组件放置在同一文件夹内，便于管理和扩展。创建 expense tracker 文件夹，并在其中添加一个 components 子文件夹，里面存放所有与“支出跟踪”相关的组件。

```
src/
└── expense-tracker/
    └── components/
        └── ExpenseList.tsx
```

### **2. 创建 ExpenseList 组件**

**1. 定义组件基础结构**：在 ExpenseList.tsx 中，首先创建一个返回支出数据的表格结构。使用 Bootstrap 提供的表格样式 table 和 table-bordered 来创建一个有边框的表格。

**代码示例**：

```tsx
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
          <td>Total</td>
          <td>
            ${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}
          </td>
          <td colSpan={2}></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
```

**2. 解释**：

- **Expense 接口**：定义了每个支出的结构，包括 id, description, amount, 和 category。

- **ExpenseListProps 接口**：用于定义组件的 props，接收 expenses（支出数据）和 onDelete（删除事件回调）

- **onDelete 回调**：当点击删除按钮时，我们通过 onDelete 回调向父组件传递当前支出的 id，以便父组件处理删除逻辑。

**3. 父组件：传递数据和事件**

1. **在 App 组件中管理状态**：父组件管理支出列表的状态，并传递到 ExpenseList 组件。

**代码示例**：

```tsx
import React, { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, description: 'Electricity Bill', amount: 100, category: 'Utilities' },
    { id: 3, description: 'Internet', amount: 30, category: 'Utilities' },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
```

2. **解释**：

- 使用 useState 来管理支出数据，每个支出是一个包含 id, description, amount, 和 category 的对象。
- handleDelete 函数负责从支出列表中删除指定 id 的支出项。
- 将 expenses 和 handleDelete 作为 props 传递给 ExpenseList 组件。

**4. 显示总支出**

- **计算总支出**：在表格的 tfoot 部分，我们使用 reduce 方法计算所有支出的总额。
- reduce 方法：对 expenses 数组进行累加，计算出所有支出的总额。
- toFixed(2)：将总额格式化为保留两位小数的字符串。

**代码说明**：

```tsx
<tfoot>
  <tr>
    <td>Total</td>
    <td>
      ${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}
    </td>
    <td colSpan={2}></td>
  </tr>
</tfoot>
```

**5. 删除功能**

1. **删除支出项**：通过 onDelete 回调，将 id 传递给父组件，父组件通过 setExpenses 更新状态，从而移除指定的支出项。

**代码示例**：

```tsx
const handleDelete = (id: number) => {
  setExpenses(expenses.filter((expense) => expense.id !== id));
};
```

2. **删除后的效果**：当点击删除按钮时，支出项会从列表中移除，同时总支出会实时更新。

**6. 优化：如果没有支出则不渲染表格**

1. **条件渲染表格**：当支出列表为空时，我们不需要渲染表格，可以返回 null。

**代码示例**：

```
if (expenses.length === 0) return null;
```

2. **效果**：当所有支出项被删除后，表格会消失，保持界面的简洁。

**7. 测试与总结**

1. **测试**：通过传递一些假数据到 App 组件，测试删除功能和总支出的计算。

2. **总结**：

    - 我们成功创建了一个可复用的 ExpenseList 组件，能够显示支出数据、计算总支出并处理删除操作。

    - ExpenseList 组件通过 props 接收数据和事件，保持了与父组件的解耦。

    - 通过 reduce 计算总支出，并根据支出数量条件渲染表格，提升用户体验。

下一步我们将继续实现更多功能，例如支出过滤等。

### **3. Expense Filter 组件**

**1. 目标与功能**

- **目标**：实现一个下拉选择框，根据支出的类别进行过滤。

- **功能**：

    - 显示“所有类别”选项以及若干硬编码（后续可动态化）的分类选项（例如：groceries、utilities、entertainment）。

    - 当用户选择某一类别时，通过 onSelectCategory 回调通知父组件，父组件据此更新展示的支出列表。

**2. 组件结构与代码**

**ExpenseFilter.tsx 示例代码：**

```tsx
import React from 'react';

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ onSelectCategory }) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="groceries">Groceries</option>
      <option value="utilities">Utilities</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
```

**3. 父组件中的整合**

- 在父组件中，我们使用 useState 保存当前选中的类别（例如：selectedCategory）。

- 根据 selectedCategory 计算出 **visibleExpenses**：

- 如果用户选择了一个具体的类别，则过滤出该类别的支出；

- 如果未选或选空字符串，则显示所有支出。

**示例逻辑：**

```tsx
const visibleExpenses = selectedCategory
  ? expenses.filter(e => e.category === selectedCategory)
  : expenses;
```

### **4. Expense Form 组件**

**1. 目标与功能**

- **目标**：构建一个用于添加新支出的表单组件。
- **功能**：
    - 表单包含三个字段：描述（description）、金额（amount）以及分类（category）。
    - 分类选项从全局的 categories 模块中导入，保证不同组件间的一致性，避免硬编码重复。
    - 使用 **react-hook-form** 处理表单状态，并结合 **Zod** 实现 Schema-Based 验证。
    - 当表单验证通过后，通过回调（例如 onSubmit）将新支出数据传递给父组件，并在提交后重置表单。

**2. 文件结构与全局数据**

- **全局数据**：为避免组件间相互依赖的加载顺序问题，将所有类别数据放到一个单独的模块中（例如：categories.ts），然后在 Expense Filter 与 Expense Form 中导入使用。

**categories.ts 示例：**

```tsx
const categories = ['groceries', 'utilities', 'entertainment'] as const;
export default categories;
```

**3. 构建 Expense Form 组件**

**3.1 表单基础结构**

- 包含三个字段的表单：

    - **描述**：文本输入，配有 label 与 Bootstrap 样式（form-control）。

    - **金额**：数字输入，类型为 number；注意 HTML 输入返回字符串，需通过 react-hook-form 配置转换为数字。

    - **分类**：下拉选择框，选项动态生成自 categories 模块。

**3.2 使用 react-hook-form 与 Zod 实现验证**

**验证规则使用 Zod 定义 Schema：**

- **描述**：字符串，最小长度 3，错误信息可自定义。

- **金额**：数字，设定最小值，且在注册时使用 { valueAsNumber: true } 确保转换。

- **分类**：通过 z.enum 限定其值仅为 categories 数组中的一个。

**ExpenseForm.tsx 示例代码：**

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

// 使用 Zod 定义表单 Schema
const schema = z.object({
  description: z.string().min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1, { message: "Amount must be at least 1." }),
  category: z.enum(categories, { errorMap: () => ({ message: "Category is required." }) }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: ExpenseFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">Description</label>
        <input id="description" className="form-control" {...register("description")} />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="amount">Amount</label>
        <input id="amount" type="number" className="form-control" {...register("amount", { valueAsNumber: true })} />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="category">Category</label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
```

**4. 父组件整合：处理过滤与添加新支出**

在父组件（例如 App.tsx）中，我们将整合 Expense Filter、Expense Form 以及 Expense List 组件：

1.  **状态管理**：

    - **expenses**：存储所有支出数据。

        - **selectedCategory**：当前选中的过滤类别。

2.  **数据过滤**：

- 计算 visibleExpenses，若 selectedCategory 有值，则使用 expenses.filter 筛选，否则显示全部支出。

3. **新增支出**：

- Expense Form 提交后，父组件通过回调（例如 onSubmit）获取新支出数据，使用 setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]) 更新状态。

**App.tsx 示例代码：**

```tsx
import React, { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: 'Groceries', amount: 50, category: 'groceries' },
    { id: 2, description: 'Electricity Bill', amount: 100, category: 'utilities' },
    { id: 3, description: 'Movie Tickets', amount: 30, category: 'entertainment' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddExpense = (newExpense: any) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  // 根据选中的过滤条件计算显示的支出
  const visibleExpenses = selectedCategory
    ? expenses.filter(exp => exp.category === selectedCategory)
    : expenses;

  return (
    <div className="container mt-4">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={handleAddExpense} />
      <div className="my-3">
        <ExpenseFilter onSelectCategory={handleFilter} />
      </div>
      {visibleExpenses.length > 0 ? (
        <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
};

export default App;
```

**三、总结与思考**

1.  **模块化设计**：将应用按功能拆分到独立文件夹（如 expense-tracker），使得项目结构清晰、便于维护。

2.  **组件职责单一**：

    - **Expense Filter**：只负责展示筛选器和传递用户选择，不管理数据。

        - **Expense Form**：专注于数据录入和验证，利用 react-hook-form 与 Zod 集中管理验证规则和错误提示。

        - **Expense List**：负责展示支出数据和总额计算，同时通过回调通知父组件删除操作。

3.  **状态管理与数据流**：父组件统一管理支出列表和过滤条件，通过回调函数与子组件通信，实现数据更新和动态过滤。

4.  **验证与类型安全**：结合 Zod 与 react-hook-form，不仅大幅减少冗余代码，还提供了友好的错误信息与强类型支持。

5.  **最佳实践**：避免为可以从现有状态计算的数据（如 visibleExpenses）创建额外的 state，确保状态简洁且一致。

通过本节课，你不仅学会了如何构建支出过滤器和表单组件，还掌握了在实际项目中如何组织模块、管理状态、处理表单验证以及组件间的通信。接下来，你可以继续探索如何进一步扩展功能（如更复杂的过滤、多条件筛选等），并优化用户体验。

**项目最终实现与总结**

通过本节的内容，我们实现了一个完整的费用追踪器应用。这个应用支持：

- 添加新的费用项；

- 删除费用项；

- 按类别筛选费用；

- 动态计算和显示费用总计；

- 表单验证和处理（使用 React Hook Form 和 Zod）。

这不仅帮助你理解了 React 的基本概念，还展示了如何在实际应用中管理复杂的状态、表单和数据验证。

# 第 7 章-连接后端与 Effect Hook 的实践

React 作为构建前端用户界面的库，不仅仅关注页面渲染，还需要与后端系统配合，处理业务逻辑、数据管理以及安全验证等任务。本节内容主要讲解了如何在 React 中通过副作用（side effects）连接后端，以及如何正确使用 Effect Hook（useEffect）来处理这些副作用。

---

## 1. 前端与后端的角色分工

- **前端（React 应用）**：
    - 负责用户交互和界面展示
    - 通过调用后端 API 来获取或提交数据
- **后端**：
    - 充当应用的“引擎”，处理业务逻辑、数据管理、安全验证（如身份认证与授权）
    - 常见的后端技术栈：Express、Django、Ruby on Rails、Spring、ASP.NET Core 等

> **提示**：虽然后端的构建超出了本课程范围，但作为 React 开发者，了解如何与后端交互至关重要。

---

## 2. React 组件的纯函数原则与副作用问题

- **纯函数原则**：
    - React 组件应尽可能是纯函数：对相同输入返回相同输出，不产生副作用
    - 渲染逻辑（JSX 返回值）应独立于那些会影响外部环境（例如修改 DOM、存储数据、发起网络请求）的代码
- **何为副作用**：
    - 任何改变组件外部状态或与外部系统交互的操作，例如操作 DOM、调用浏览器 API（如 localStorage）、发起网络请求等
    - 为了保持组件纯粹性，这些操作需要被隔离出来

---

## 3. Effect Hook（useEffect）的核心理念

### 3.1. 基本用途

- **用法**：

    - `useEffect` 用于在组件渲染完成后执行副作用代码

    - 其基本语法：

        ```jsx
        useEffect(() => {
        	// 副作用代码
        });
        ```

    - 默认情况下，每次组件渲染后都会执行该副作用

- **实际场景**：

    - 例如：在组件加载后给某个输入框设置自动聚焦

### 3.2. 示例：给输入框设置焦点

- **问题场景**：直接在渲染逻辑中调用 DOM 操作（如 `input.focus()`）会破坏组件纯性
- **解决方案**：借助 `useRef` 获取 DOM 节点，并将副作用操作放入 `useEffect` 中

```jsx
import React, { useEffect, useRef } from "react";

function App() {
	// 使用 useRef 获取 input 元素的引用
	const inputRef = useRef(null);

	// 利用 useEffect 在组件渲染完成后设置焦点
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []); // 空依赖数组，确保只在首次渲染时执行

	return <input className="form-control" ref={inputRef} />;
}

export default App;
```

> **思考**：将 DOM 操作放入 `useEffect` 中，可以确保这些副作用在渲染完成后才执行，保证了组件的纯函数特性。

---

## 4. Effect Hook 的高级应用与常见问题

### 4.1. 多个副作用分离处理

- 分离职责：
    - 在同一个组件中，可以调用多次 `useEffect` 分别处理不同的副作用
    - 例如：
        - 一个 `useEffect` 用于聚焦输入框
        - 另一个 `useEffect` 用于修改文档标题
- **执行顺序**：React 会按照代码中出现的顺序依次执行这些 effect

### 4.2. 依赖数组与执行控制

- 无依赖数组：
    - 省略依赖数组会导致每次渲染后都执行副作用
- 空依赖数组 `useEffect(callback, [])`
    - 仅在组件首次渲染后执行一次副作用，适合只需初始化一次的逻辑
- 带依赖项的数组 `[dep1, dep2, ...]`：
    - 只有当依赖的变量（可以是 props 或 state）发生变化时，才重新执行副作用

#### 示例：根据选中分类获取产品数据

**组件：ProductList**

```jsx
import React, { useEffect, useState } from "react";

function ProductList({ category }) {
	// 声明产品状态，明确指定为字符串数组以避免类型推断错误
	const [products, setProducts] = useState([]);

	// 根据 category 变化来执行副作用（如网络请求）
	useEffect(() => {
		console.log(
			`Fetching products in ${category ? category : "default"} category`
		);
		// 模拟从服务器获取产品数据
		if (category) {
			setProducts([`${category} Product1`, `${category} Product2`]);
		} else {
			setProducts([]);
		}
	}, [category]); // 依赖数组中包含 category，确保当其变化时 effect 重新执行

	return (
		<div>
			<h2>Products: {category || "All"}</h2>
			<ul>
				{products.map((p, index) => (
					<li key={index}>{p}</li>
				))}
			</ul>
		</div>
	);
}

export default ProductList;
```

**主组件：App**

```jsx
import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
	// 使用 state 保存当前选中的分类
	const [category, setCategory] = useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	return (
		<div>
			<select className="form-select" onChange={handleChange}>
				<option value="">Select Category</option>
				<option value="clothing">Clothing</option>
				<option value="household">Household</option>
			</select>
			<ProductList category={category} />
		</div>
	);
}

export default App;
```

> **关键点**：
>
> -   如果将依赖数组错误设置为空数组（`[]`），则即使用户改变分类，也不会重新获取产品数据；
> -   正确传入依赖（如 `[category]`）可以保证副作用在相关数据变化时重新执行。

### 4.3. 避免无限循环问题

- 问题描述：
    - 在 effect 内部调用更新状态的方法（例如 `setProducts`），若依赖数组未配置好，会触发组件重新渲染，从而重复执行 effect，形成无限循环

```tsx
        useEffect(() => {
          // 错误示例：每次更新 state 导致 Effect 再次运行
          setProducts(["product1", "product2"]);
        });
```

- 解决方案：
    - 使用依赖数组来限定 effect 执行的条件，确保状态更新不会无条件触发副作用

### 4.4. 开发模式下的双重执行现象

- Strict Mode 影响：
    - React 的严格模式在开发时会对组件进行双重渲染，以便发现潜在问题
    - 导致某些 effect（例如数据获取）可能执行两次，但这只在开发环境下发生
    - 在生产模式下，此行为不会存在

### Effect Hook 使用总结

1. **执行时机**

    - 默认：每次渲染后执行（无依赖数组）。
    - 仅首次：传递空数组 [] 后只在初次渲染时执行一次。
    - 根据依赖：当依赖数组中的变量发生变化时执行。

2. **最佳实践**

    1. **拆分副作用**：将不同责任的副作用分成多个 useEffect 调用，提高代码的可读性和维护性。
    2. **控制依赖**：正确设置依赖数组，避免无限循环和不必要的重新执行。
    3. **关注开发环境差异**：了解 React StrictMode 下 Effect 的双重调用现象，确保在生产环境中副作用按预期执行。
    4. **避免在 Effect 内直接操作渲染逻辑**：所有副作用代码应与 JSX 渲染分离，确保组件的纯函数特性。

3. **扩展问题**

    - 复杂副作用的管理：

        - 在大型应用中，可以考虑封装自定义 hooks，将常见的副作用逻辑模块化

    - 异步请求与数据一致性：

        - 当涉及多个并发异步请求时，如何处理数据合并、错误捕获与取消请求，是更高级的课题（可考虑 Redux Saga、React Query 等方案）

    - 调试与生产环境差异：
        - 注意开发环境中严格模式对 effect 执行次数的影响，确保在生产构建时副作用逻辑正常工作

## 5. Effect Hook 的清理副作用

### 1. 副作用与清理需求

- **副作用场景**
    在某些情况下，我们需要在组件挂载后建立外部连接（例如：连接聊天服务器、订阅消息、显示模态框或发起网络请求）。
- **为什么需要清理**
    当组件卸载时（例如用户离开页面或组件重新渲染时），应当取消这些副作用以防止内存泄漏或无用操作（例如断开聊天服务器连接、取消订阅、关闭模态框或中止未完成的请求）。

### 2. 清理函数的使用

- **基本原理**
    在 `useEffect` 中，我们可以返回一个函数，此函数在组件卸载或者在下次 effect 执行之前运行，从而起到清理的作用。

- **示例说明**
    假设我们有一个聊天组件，当组件挂载时连接聊天服务器，当组件卸载时断开连接：

    ```jsx
    import React, { useEffect } from "react";

    function ChatComponent() {
    	// 模拟连接聊天服务器
    	const connect = () => console.log("Connecting to chat server...");
    	// 模拟断开聊天服务器
    	const disconnect = () =>
    		console.log("Disconnecting from chat server...");

    	useEffect(() => {
    		connect();
    		// 返回清理函数，当组件卸载时断开连接
    		return () => {
    			disconnect();
    		};
    	}, []); // 空依赖数组确保只在挂载和卸载时执行

    	return <div>Chat Component</div>;
    }

    export default ChatComponent;
    ```

- **开发模式中的双重渲染**
    在 React 的严格模式（或开发环境中的“streak 模式”）下，组件会被渲染两次：

    - 第一次挂载时执行 `connect`
    - 在第二次渲染之前，先卸载第一次渲染的组件（触发清理函数执行），然后再重新挂载
        这解释了为什么在控制台中可能会看到依次输出 "Connecting"、"Disconnecting"、"Connecting" 的现象。

---

## 6. 使用 Axios 进行数据获取

### 1. 背景与使用场景

- **模拟后台**
    使用 [jsonplaceholder](https://jsonplaceholder.typicode.com/) 提供的假数据接口，演示如何获取用户数据。
- **为什么使用 Axios？**
    虽然浏览器自带 `fetch` 方法，但很多开发者（包括讲师）倾向于使用 Axios 来简化请求处理和错误处理。

### 2. Axios 基础调用及 Promise 处理

- **请求方法**

    - 调用 `axios.get(url)` 返回一个 Promise 对象，该 Promise 包含请求完成后的响应数据。
    - 使用 `.then()` 方法处理 Promise 结果，获取响应对象中的 `data` 属性。

- **示例代码**

    ```jsx
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    // 定义用户数据接口（仅使用 id 与 name 属性）
    interface User {
      id: number;
      name: string;
    }

    function App() {
      // 声明 users 状态并显式指定类型为 User 数组
      const [users, setUsers] = useState<User[]>([]);

      useEffect(() => {
        // 发送 GET 请求获取用户数据
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            // 可以通过类型提示获得自动补全，例如 response.data[0].name
            setUsers(response.data);
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      }, []); // 空依赖数组确保仅在组件首次挂载时调用

      return (
        <div>
          <h1>User List</h1>
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

### 3. TypeScript 与状态类型推断

- **问题背景**
    当初始状态为 `[]` 时，TypeScript 无法推断数组中存储的对象类型，从而导致缺乏代码补全（autocompletion）和类型检查。
- **解决方案**
    通过在 `useState` 调用中指定泛型 `<User[]>`，确保后续对用户数据的操作具有正确的类型提示。

### 4. 避免无限循环问题

- **依赖数组的重要性**
    在 effect 中调用 `setUsers` 会触发组件重新渲染。如果不传入依赖数组或者错误地指定依赖，会导致 effect 反复执行，进而不断发送请求。
- 正确使用
    - 空依赖数组 `[]`：确保 effect 只在组件挂载时执行一次。
    - 当 effect 依赖某些状态或 props 时，应当将它们放入依赖数组中，确保仅在这些值变化时重新执行。

---

## 7. HTTP 请求的原理与调试

### 1. HTTP 协议基础

- 请求与响应
    - **请求**：浏览器或 Axios 发出 HTTP 请求，请求中包含 URL、请求方法（如 GET、POST 等）、请求头以及必要时的请求体。
    - **响应**：服务器返回响应，其中包含状态码、响应头以及响应体（例如 JSON 格式的数据）。

### 2. 使用开发者工具调试

- **Network 面板**
    - 过滤 XHR 请求（XMLHttpRequest）或 fetch 请求，可以查看 Axios 发出的请求详情。
    - 查看请求 URL、方法、请求头以及服务器返回的响应数据。
    - 通过 Headers 和 Preview 选项，了解请求的元数据和响应体的格式。
- **双重请求现象**
    - 在严格模式下，可能会看到重复请求现象（例如两个 GET 请求），这与 React 的开发模式双重渲染有关，但在生产环境中不会发生。

---

### 总结与最佳实践

- **清理副作用**
    - 在 `useEffect` 中返回清理函数，确保组件卸载时撤销副作用操作。
    - 常见应用场景包括断开服务器连接、取消订阅、隐藏模态框或中止网络请求。
- **数据获取与类型安全**
    - 使用 Axios 简化异步数据获取，并通过 Promise 的方式处理请求结果。
    - 利用 TypeScript 定义数据接口和状态类型，增强代码的安全性和开发体验。
- **依赖数组的正确使用**
    - 必须为 effect 提供合适的依赖数组，否则容易导致无限循环或重复请求。
- **调试与理解 HTTP**
    - 熟悉浏览器开发者工具中的 Network 面板，有助于理解 HTTP 请求的过程和数据传输细节。

下面是一份整理后的课堂笔记，采用 Markdown 格式，详细记录了讲师关于 Promise 异步处理（then/catch 与 async/await）、请求取消以及加载状态管理的讲解内容，并附有代码示例和深入解析：

---

## 8. Effect Hook 中的异步操作与 Promise 处理

本节内容主要讲解了以下几个关键主题：

1. Promise 处理方式的比较：then/catch 与 async/await
2. 在 Effect Hook 中使用 async/await 的注意事项
3. 异步请求取消的最佳实践（使用 AbortController）
4. 加载状态的管理和加载指示器的实现

---

### 1. Promise 的两种处理方式

在进行异步数据请求时，讲师首先介绍了两种常见的方式：

#### 1.1 then/catch 方式

- **特点**：

    - 代码较为简洁，直接调用 `axios.get()` 后，通过 `then` 处理成功结果，通过 `catch` 处理错误。
    - 无需额外包装函数，逻辑清晰。

- **示例代码**：

    ```jsx
    useEffect(() => {
    	axios
    		.get(url)
    		.then((response) => {
    			setUsers(response.data);
    			setLoading(false);
    		})
    		.catch((error) => {
    			setError(error.message);
    			setLoading(false);
    		});
    }, []);
    ```

#### 1.2 async/await 方式

- **特点**：

    - 代码看起来像同步代码，更符合直线思维，但在 Effect Hook 中使用时存在一些限制和额外复杂性。

- **主要问题**：

    - 不能直接将 async 函数传给 `useEffect`，因此需要在 effect 内部定义一个 async 函数，再调用它。
    - 必须用 try/catch 捕获异常，且在 TypeScript 环境中，需要使用类型断言（as AxiosError）来明确 error 对象的类型，因为 catch 块中不能直接注释 error 的类型。

- **示例代码**：

    ```jsx
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get<User[]>(url);
          setUsers(response.data);
        } catch (error) {
          // 使用类型断言明确 error 类型（AxiosError）
          const err = error as AxiosError;
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }, []);
    ```

- **讲师观点**：
    尽管 async/await 方式使代码看起来更为线性，但需要额外定义内部函数、书写 try/catch 块以及处理类型断言，整体代码显得冗长。讲师更倾向于使用 then/catch 的写法。

---

### 2. 异步请求取消与清理

#### 2.1 背景说明

- 在组件中发起异步请求时，如果用户在数据返回前离开当前页面，就没有必要处理请求结果，反而可能引发内存泄漏或错误。
- 最佳实践是利用 Effect Hook 的清理机制，在组件卸载时取消正在进行的请求。

#### 2.2 使用 AbortController 取消请求

- **AbortController**：

    - 是浏览器内置的 API，可用于取消异步操作（如 fetch 请求）。
    - 在 Axios 中可以通过传递配置项 `signal` 来使用。

- **示例代码**：

    ```jsx
    useEffect(() => {
      const controller = new AbortController();

      axios.get<User[]>(url, { signal: controller.signal })
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          // 判断是否是取消错误
          if (axios.isCancel(error)) {
            return;
          }
          setError(error.message);
          setLoading(false);
        });

      // 清理函数：组件卸载时取消请求
      return () => {
        controller.abort();
      };
    }, []);
    ```

- **注意事项**：

    - 在 React 开发模式（严格模式或 streak 模式）下，由于组件会被渲染两次，可能会看到请求被取消后重新发起的现象。但这仅存在于开发环境中，生产环境不会受到影响。

---

### 3. 加载状态的管理

#### 3.1 为什么需要 4 加载指示器？

- 异步操作（如数据获取）可能需要一定时间完成，在此期间显示加载指示器（Loader）能提升用户体验，告知用户数据正在加载中。

#### 3.2 如何实现加载状态

- **状态管理**：

    - 使用 `useState` 定义一个状态变量 `isLoading`（初始值为 `false`）。
    - 在发起请求前将 `isLoading` 设为 `true`，请求完成或失败后再设置回 `false`。

- **示例代码（then/catch 方式）**：

    ```jsx
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios.get<User[]>(url)
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
    ```

- **关于 Promise.finally**：

    - 虽然 Promise 的 finally 方法可以在 promise settle 时执行一次 `setLoading(false)`，但讲师提到在 streak 模式下 finally 的行为存在问题，所以建议在 then 和 catch 块中分别设置加载状态。

#### 3.3 在 UI 中展示加载指示器

- 利用 Bootstrap 内置的 `spinner-border` 类实现加载动画，通过条件渲染确保只有在 `isLoading` 为 true 时显示：

    ```jsx
    return (
    	<div>
    		{isLoading && <div className="spinner-border" role="status"></div>}
    		<h1>User List</h1>
    		<ul>
    			{users.map((user) => (
    				<li key={user.id}>{user.name}</li>
    			))}
    		</ul>
    	</div>
    );
    ```

---

4. 总结与最佳实践

- **Promise 处理方式**：
    - then/catch 方式代码简洁且直观；async/await 虽然写法线性，但在 Effect Hook 中使用需要额外包装和错误类型处理，整体显得冗长。
- **请求取消**：
    - 使用 AbortController 进行请求取消是防止组件卸载后依然处理数据的重要手段。
    - 清理函数（return 语句中的函数）在组件卸载时被调用，确保异步请求被中断。
- **加载状态管理**：
    - 发起请求前设定 loading 状态为 true，请求成功或失败后再将其设为 false。
    - 通过条件渲染加载动画，提升用户体验。
- **开发注意事项**：
    - 在严格模式（streak 模式）下，组件可能被渲染两次，导致请求发送或取消行为看起来不一致，但这只影响开发调试阶段。
    - 在 TypeScript 环境下，使用 async/await 需要注意 catch 块中 error 对象的类型问题，可通过类型断言解决。

## 9. 数据删除、创建与更新及 UI 优化

在本节内容中，我们将讲解如何在 React 应用中实现对数据的删除、添加与更新操作。主要内容包括：

- **删除数据**：在每个用户项前添加删除按钮，通过乐观更新先行修改 UI，再调用服务器接口，如果出错则回滚；
- **添加数据**：在页面顶部添加“新增”按钮，实现创建新用户（同样采用乐观更新的策略）；
- **更新数据**：在每个用户项中添加“更新”按钮，通过修改用户对象来更新 UI，同时调用服务器接口进行数据持久化；
- **UI 调整与优化**：使用 Bootstrap 的 List Group、Flex 布局等工具美化页面，解决 JSX 中相邻元素间空白被移除的问题。

---

### 1. 删除数据

#### 1.1 UI 调整

- **添加删除按钮**
    在每个用户列表项前添加一个删除按钮，使用 Bootstrap 样式：
    - 按钮使用 `btn` 与 `btn-outline-danger` 类
    - 由于 JSX 编译时会移除相邻元素间的空白，为确保按钮与文本间有间距，需要将空白包裹在花括号中
- **列表样式优化**
    将原本的无序列表转换为 Bootstrap 的 List Group：
    - `<ul>` 设置 `className="list-group"`
    - 每个 `<li>` 设置 `className="list-group-item"`
- **Flex 布局实现左右分布**
    为每个列表项添加 `d-flex justify-content-between` 类，使得用户名始终靠左、操作按钮靠右。

#### 1.2 删除功能实现

采用**乐观更新**思路：

1. **更新 UI**：先将用户从状态中移除，立刻反馈给用户。
2. **调用服务器**：使用 `axios.delete` 发送删除请求，将用户 id 附加在 URL 后。
3. **错误处理**：如果服务器返回错误，使用事先保存的“原始用户列表”恢复 UI，并通过 `setError` 显示错误信息。

##### 示例代码

```jsx
// 假设已定义 User 接口和相关状态：users, setUsers, error, setError
function deleteUser(user) {
	// 保存删除前的原始用户列表，用于错误恢复
	const originalUsers = [...users];

	// 乐观更新：先在 UI 中移除该用户
	setUsers(users.filter((u) => u.id !== user.id));

	// 调用服务器删除数据
	axios
		.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
		.catch((error) => {
			// 出现错误时，显示错误信息并恢复原始数据
			setError(error.message);
			setUsers(originalUsers);
		});
}

// 在渲染列表时，每个列表项：
<li key={user.id} className="list-group-item d-flex justify-content-between">
	<span>{user.name}</span>
	<div>
		{/* 更新按钮和删除按钮放在一个容器中，便于左右对齐 */}
		<button
			onClick={() => updateUser(user)}
			className="btn btn-outline-secondary me-2"
		>
			Update
		</button>
		<button
			onClick={() => deleteUser(user)}
			className="btn btn-outline-danger"
		>
			Delete
		</button>
	</div>
</li>;
```

---

### 2. 添加数据

#### 2.1 UI 与交互

- 在用户列表上方添加一个按钮，点击后触发添加新用户的操作。
- 实际开发中通常会使用表单采集数据，但这里为了聚焦核心逻辑，直接通过按钮和硬编码值创建用户。

#### 2.2 添加功能实现

同样采用乐观更新：

1. **更新 UI**：先将新用户添加到当前列表中（例如放在数组头部或尾部）。
2. **调用服务器**：使用 `axios.post` 提交新用户数据到服务器端，服务器生成新的 id 后返回。
3. **更新状态**：将返回的保存后用户（包含生成的 id）替换掉原有的用户数据。
4. **错误处理**：如果请求失败，恢复原始列表并显示错误信息。

#### 示例代码

```jsx
function addUser() {
	// 保存当前的用户列表，用于错误恢复
	const originalUsers = [...users];

	// 创建新用户对象，实际项目中属性应来自表单输入
	const newUser = {
		name: "mush",
	};

	// 乐观更新：先更新 UI，将新用户添加到列表中
	setUsers([newUser, ...users]);

	// 调用服务器创建新用户
	axios
		.post("https://jsonplaceholder.typicode.com/users", newUser)
		.then(({ data: savedUser }) => {
			// 返回的保存用户数据中会包含生成的 id
			// 刷新列表，将新用户替换为保存后的用户对象
			setUsers([savedUser, ...users]);
		})
		.catch((error) => {
			setError(error.message);
			setUsers(originalUsers);
		});
}
```

> **注意**：由于使用了假的后端 jsonplaceholder，可能会出现多个用户拥有相同 id 的情况，此时在 JSX 渲染时会报“遇到重复 key”的警告。在真实应用中，新生成的 id 应确保唯一性。

---

### 3. 更新数据

#### 3.1 UI 布局优化

- **对齐问题**：原本在列表项中直接渲染用户名、更新按钮和删除按钮时，因用户名长度不同可能导致布局不统一。
- **解决方法**：将更新与删除按钮包装在一个容器 `<div>` 中，使列表项只分成两部分：左侧的用户名和右侧的按钮容器。
- **额外样式**：在按钮间添加水平边距（如 Bootstrap 的 `me-2`）以保持间距。

#### 3.2 更新功能实现

同样采用乐观更新：

1. **更新 UI**：使用 `Array.map` 遍历用户列表，将目标用户替换为更新后的用户对象（例如在名字后追加一个感叹号）。
2. **调用服务器**：使用 `axios.patch`（或 put）提交更新请求。这里使用 patch 方法更新部分属性。
3. **错误处理**：请求出错时，通过保存的原始用户列表恢复 UI，并显示错误信息。

#### 示例代码

```jsx
function updateUser(user) {
	// 保存更新前的原始用户列表
	const originalUsers = [...users];

	// 创建更新后的用户对象，示例中为在名字后追加感叹号
	const updatedUser = { ...user, name: user.name + "!" };

	// 乐观更新：先在 UI 中更新数据
	setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

	// 调用服务器更新数据，使用 patch 方法更新部分字段
	axios
		.patch(
			`https://jsonplaceholder.typicode.com/users/${user.id}`,
			updatedUser
		)
		.catch((error) => {
			setError(error.message);
			setUsers(originalUsers);
		});
}
```

---

4. 总结与最佳实践

- **乐观更新 vs. 悲观更新**
    - 乐观更新：先更新 UI 再调用服务器，能给用户更快的反馈；但如果服务器出错需要回滚数据。
    - 悲观更新：先等待服务器返回成功后再更新 UI，用户体验稍慢。
    - 讲师推荐使用乐观更新以提升页面响应速度。
- **错误处理与恢复**
    - 每个操作（删除、添加、更新）都需要在调用服务器时捕获异常，提示错误信息并恢复原始状态，保证数据一致性。
- **UI 布局优化**
    - 使用 Bootstrap 的 List Group 和 Flex 布局（`d-flex`、`justify-content-between`）有效解决了元素对齐与空白问题。
    - 当多个操作按钮在同一行中时，建议将它们放在单独的容器中，确保整体布局稳定统一。
- **请求 URL 及接口问题**
    - 使用 jsonplaceholder 作为模拟后端时，需注意生成数据的局限性（例如重复 id 等问题），在真实应用中应确保接口返回数据的正确性与唯一性。

## 10. axios

### 1.axios 的基础与特点

- **基于 Promise**
    axios 是一个基于 Promise 的 HTTP 客户端，它支持在浏览器和 Node.js 环境中发起请求。所有请求（如 GET、POST、PATCH、DELETE 等）都会返回一个 Promise，这使得我们可以使用 then/catch 链式调用或 async/await 语法来处理异步操作。
- **简洁的 API**
    axios 提供了简洁易用的 API，帮助开发者更方便地配置请求参数、请求头以及处理响应数据。

---

### 2. axios 的基本用法

#### 2.1 GET 请求

- **基本用法**

    ```jsx
    axios
    	.get("https://jsonplaceholder.typicode.com/users")
    	.then((response) => {
    		// response.data 包含了服务器返回的数据
    		setUsers(response.data);
    	})
    	.catch((error) => {
    		setError(error.message);
    	});
    ```

    - 响应对象

        ：返回的

        ```
        response
        ```

        对象包含多个属性：

        - `data`：实际返回的数据
        - `status`：HTTP 状态码
        - `headers`：响应头
        - `config`：请求配置信息

- **类型安全**（TypeScript）
    可以在请求时指定泛型来获得更好的类型推断：

    ```tsx
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      });
    ```

#### 2.2 POST 请求（创建数据）

- 用法

    ```jsx
    axios
    	.post("https://jsonplaceholder.typicode.com/users", newUser)
    	.then(({ data: savedUser }) => {
    		// 这里解构 response 返回的 data，并重命名为 savedUser
    		setUsers([savedUser, ...users]);
    	})
    	.catch((error) => {
    		setError(error.message);
    		// 错误时恢复原始用户列表
    		setUsers(originalUsers);
    	});
    ```

    - POST 请求一般用于创建数据，服务器生成新对象的 id 后返回保存后的数据。

#### 2.3 DELETE 请求（删除数据）

- 用法

    ```jsx
    axios
    	.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    	.catch((error) => {
    		setError(error.message);
    		// 恢复原始数据
    		setUsers(originalUsers);
    	});
    ```

    - DELETE 请求用于从服务器删除资源，一般不需要返回数据，因此通常只关心错误处理。

#### 2.4 PATCH 请求（部分更新数据）

- 用法

    ```jsx
    axios
    	.patch(
    		`https://jsonplaceholder.typicode.com/users/${user.id}`,
    		updatedUser
    	)
    	.catch((error) => {
    		setError(error.message);
    		setUsers(originalUsers);
    	});
    ```

    - PATCH 用于更新资源的部分属性，与 PUT（整体替换）相比，更适合仅更新部分字段的场景。

---

### 3. axios 的错误处理

- **Promise 错误捕获**
    使用 then/catch 链式调用来处理成功和失败情况：

    ```jsx
    axios
    	.get(url)
    	.then((response) => {
    		/* 处理成功 */
    	})
    	.catch((error) => {
    		// error 是 AxiosError 类型对象，包含 message、response、code 等属性
    		setError(error.message);
    	});
    ```

- **TypeScript 中的类型断言**
    在 async/await 写法中，由于 catch 捕获的 error 类型为 unknown，需要使用类型断言：

    ```tsx
    try {
      const response = await axios.get<User[]>(url);
      setUsers(response.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    ```

- **判断取消请求**
    axios 还提供了辅助方法 `axios.isCancel(error)` 来判断错误是否由于请求被取消，从而避免误处理取消的错误：

    ```jsx
    .catch(error => {
      if (axios.isCancel(error)) return;
      setError(error.message);
    });
    ```

---

### 4. axios 与请求取消（AbortController）

- **AbortController 作用**
    当组件卸载或用户导航离开页面时，如果请求还未完成，利用 AbortController 可以取消请求，防止异步操作完成后更新已卸载组件。

- **使用方式**

    1. 创建 AbortController 实例：

        ```jsx
        const controller = new AbortController();
        ```

    2. 将

        ```
        controller.signal
        ```

        传入 axios 请求配置中：

        ```jsx
        axios.get(url, { signal: controller.signal })
          .then(...)
          .catch(...);
        ```

    3. 在 effect 的清理函数中调用

        ```
        controller.abort()
        ```

        取消请求：

        ```jsx
        return () => {
        	controller.abort();
        };
        ```

    - **注意**：在开发模式中（如 React 严格模式），组件可能会被渲染两次，导致请求被取消后重新发起，但在生产环境中不会有这种现象。

---

### 5. axios 与乐观更新

- **乐观更新思路**
    在删除、添加或更新操作中，我们先立即更新 UI（例如删除用户项或显示新添加的用户），然后再调用 axios 发起请求。如果服务器请求失败，则回滚到原始状态，并显示错误信息。

- **示例**
    删除用户的乐观更新：

    ```jsx
    function deleteUser(user) {
    	const originalUsers = [...users];
    	setUsers(users.filter((u) => u.id !== user.id)); // 先更新 UI

    	axios
    		.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    		.catch((error) => {
    			setError(error.message);
    			setUsers(originalUsers); // 请求失败时回滚
    		});
    }
    ```

    添加和更新操作也是类似的模式，先修改状态，再调用 axios 请求，并在失败时进行错误处理和状态恢复。

---

### 6. axios 与 async/await 在 useEffect 中的使用

- **问题描述**
    在 React 的 useEffect 中不能直接传入 async 函数，因此我们通常在 effect 内部定义一个 async 函数来调用 axios 请求。

- **示例代码**

    ```jsx
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get<User[]>(url);
          setUsers(response.data);
        } catch (error) {
          const err = error as AxiosError;
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }, []);
    ```

    - 这种写法使得代码逻辑看起来更像同步代码，但同时增加了 try/catch 以及内部函数的嵌套，可能导致代码显得冗长。

---

### 7. 总结

- **axios 作为 HTTP 客户端**：
    提供了简单、统一的 API 来处理所有 HTTP 请求，并基于 Promise 进行异步操作。
- **请求方法**：
    - `axios.get` 用于获取数据
    - `axios.post` 用于创建数据
    - `axios.delete` 用于删除数据
    - `axios.patch` 用于部分更新数据
- **错误处理与请求取消**：
    - 利用 then/catch 或 async/await + try/catch 处理错误
    - 使用 AbortController 及 axios 的配置项（signal）来取消请求，确保组件卸载时不会继续处理响应
- **乐观更新**：
    先更新 UI 状态，再调用 axios 发起请求；若请求失败则回滚到原始状态，从而提高用户体验。

通过这些细节，你可以更好地掌握 axios 的使用方法，并在实际开发中合理运用这些模式来构建健壮的、响应迅速的 React 应用。

## 11.项目重构与优化实战

这门课程以一个已经实现了基本 CRUD 操作的用户管理案例为起点，逐步优化和重构代码，使得组件不再直接关心 HTTP 细节，而是将所有与后端交互的逻辑封装在独立的服务层中。同时，还利用自定义 Hook 将数据获取的逻辑抽离出来，达到高内聚、低耦合的目的。

---

### 1. 初步问题与重构动机

在最初的实现中，App 组件中直接包含了大量的 HTTP 请求逻辑，存在以下问题：

- **重复的后端 URL 配置**
    - 多处硬编码了同一个基本 URL，使得修改和维护变得低效。
- **组件职责混杂**
    - UI 组件不仅负责展示和用户交互，还承担了 HTTP 请求（包括 GET、POST、PATCH、DELETE）的具体实现、取消请求（AbortController）以及错误处理的逻辑。
    - 这种“厨师兼采购员”的设计使得组件变得臃肿且难以复用。
- **请求逻辑重复**
    - 删除、添加、更新等操作的 HTTP 请求逻辑在组件中重复出现，若未来需要在其他地方使用相同逻辑，将面临大量代码复制和维护成本。
- **难以扩展**
    - 如果后续需要实现更多实体（例如 posts、comments 等）的数据交互，每个组件都需要重复实现类似的 HTTP 请求逻辑。

为了解决上述问题，讲师提出了两大重构思路：

1. **服务层抽取**
    - 将所有 HTTP 请求的配置和逻辑集中到一个单独的模块中，创建统一的 API 客户端以及针对用户数据的服务模块。
2. **逻辑复用与泛型封装**
    - 利用 TypeScript 的泛型机制，构造一个通用的 HTTP 服务类，以便针对不同实体创建对应的服务实例。
    - 将数据获取的逻辑抽象为自定义 Hook，使得各个组件只需关心数据状态和展示，而无需重复编写请求代码。

---

### 2. 创建统一 API 客户端

#### 2.1. 目标与优势

- **目标**：集中管理后端的基本 URL、请求头等配置，避免在各处硬编码相同内容。

- 优势

    ：

    - 配置集中、易于维护。
    - 可以统一添加诸如 API key、认证信息等全局请求头。
    - 后续更换 HTTP 库或修改配置时，只需更改这一处代码。

#### 2.2. 实现步骤

在项目的 `src` 文件夹下创建一个 `services` 目录，然后新建文件 `api-client.ts`。

```ts
// services/api-client.ts
import axios, { AxiosInstance, AxiosError } from 'axios';

// 创建自定义配置的 Axios 实例
const apiClient: AxiosInstance = axios.create({
  // 注意：这里去掉了具体的资源路径，仅保留后端基本 URL
  baseURL: 'https://jsonplaceholder.typicode.com'
  // 可选：如果后端要求全局的请求头，可以在此添加，例如：
  // headers: { 'x-api-key': 'your_api_key_here' }
});

// 同时导出 Axios 的 CancelledError（或其他错误类型）便于统一处理
export { AxiosError as CancelledError };

export default apiClient;
```

在后续代码中，所有 HTTP 请求均由这个 `apiClient` 发起，确保了配置的统一和集中管理。

---

### 3. 将 HTTP 请求逻辑抽象为用户服务

#### 3.1. 服务模块设计

**目的**：
将与用户相关的 HTTP 请求（获取全部用户、删除用户、添加用户、更新用户）封装到一个单独的模块中，使得组件只需调用服务提供的接口，而不必关心具体的请求细节。

#### 3.2. 创建 `user-service.ts`

在 `services` 文件夹下，新建 `user-service.ts`，代码示例如下：

```ts
// services/user-service.ts
import apiClient, { CancelledError } from './api-client';

// 定义 User 接口，记录需要用到的属性
export interface User {
  id: number;
  name: string;
  // ... 其他属性
}

// 为了隐藏 HTTP 请求的实现细节，我们将取消请求的逻辑封装起来
class UserService {
  // 获取所有用户。返回一个对象包含 promise 和 cancel 方法
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal
    });
    return {
      request,
      cancel: () => controller.abort()
    };
  }

  // 删除用户，传入用户 id
  deleteUser(id: number) {
    return apiClient.delete(`/users/${id}`);
  }

  // 添加（创建）用户，传入用户对象
  createUser(user: Partial<User>) {
    return apiClient.post<User>('/users', user);
  }

  // 更新用户，传入更新后的用户对象
  updateUser(user: User) {
    return apiClient.patch<User>(`/users/${user.id}`, user);
  }
}

// 导出 UserService 的实例，方便组件调用
export default new UserService();
```

通过这种封装，组件不再直接操作 `apiClient`，而是通过 `UserService` 进行所有用户数据相关的 HTTP 请求。这样可以保证业务逻辑和 HTTP 细节相互分离。

---

### 4. 构造通用 HTTP 服务类（泛型封装）

#### 4.1. 重复代码问题

在未来如果需要处理其他实体（如 posts、comments 等），会发现各自的服务模块实现大同小异。为了解决这一问题，我们利用 TypeScript 的泛型机制构造一个通用 HTTP 服务类。

#### 4.2. 创建 `HTTP-service.ts`

在 `services` 文件夹下新建 `HTTP-service.ts`：

```ts
// services/HTTP-service.ts
import apiClient from './api-client';

// 定义一个接口，确保所有实体都有 id 属性
export interface Entity {
  id: number;
}

class HTTPService<T extends Entity> {
  // 每个服务实例都绑定一个特定的 endpoint
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // 获取所有数据
  getAll() {
    return apiClient.get<T[]>(this.endpoint);
  }

  // 删除数据，id 作为参数
  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  // 创建数据，传入一个部分类型的数据
  create(entity: Partial<T>) {
    return apiClient.post<T>(this.endpoint, entity);
  }

  // 更新数据，传入完整的实体对象
  update(entity: T) {
    return apiClient.patch<T>(`${this.endpoint}/${entity.id}`, entity);
  }
}

// 导出一个工厂函数，方便根据 endpoint 创建服务实例
export function createHTTPService<T extends Entity>(endpoint: string) {
  return new HTTPService<T>(endpoint);
}
```

#### 4.3. 重构 UserService

在 `user-service.ts` 中，我们只需要利用上面的工厂函数生成一个针对用户的服务实例：

```ts
// services/user-service.ts（重构后）
import { createHTTPService, Entity } from './HTTP-service';

export interface User extends Entity {
  id: number;
  name: string;
  // 其他属性……
}

// 通过泛型工厂函数创建针对 '/users' 的服务实例
export default createHTTPService<User>('/users');
```

这样，通用 HTTP 服务的所有方法（getAll、delete、create、update）都能直接复用，而不用为每种实体重复编写代码。

---

### 5. 提取数据获取逻辑为自定义 Hook

#### 5.1. 动机与背景

在初始实现中，无论是列表展示还是下拉框组件，都需要编写类似如下的逻辑：

- 定义 `users`、`error` 和 `isLoading` 等状态
- 在 `useEffect` 中发起 HTTP 请求获取数据
- 处理请求取消、错误捕获以及加载状态

这种代码在多个组件中重复出现，不利于维护与复用。

#### 5.2. 创建自定义 Hook `useUsers`

在 `src/hooks` 文件夹下创建 `useUsers.ts`：

```ts
// hooks/useUsers.ts
import { useState, useEffect } from 'react';
import UserService, { User } from '../services/user-service';
import { CancelledError } from '../services/api-client';

interface UseUsersReturn {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    // 从用户服务中获取请求对象和取消方法
    const { request, cancel } = UserService.getAllUsers();

    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // 如果请求被取消则不做处理
        if (err instanceof CancelledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      // 调用取消方法，隐藏实现细节
      cancel();
    };
  }, []);

  return { users, setUsers, error, setError, isLoading, setLoading };
}
```

#### 5.3. 在组件中使用自定义 Hook

在 App 组件中，我们只需调用 `useUsers` 即可获取所有用户及其相关状态，而无需再重复编写请求逻辑：

```tsx
// App.tsx
import React from 'react';
import { useUsers } from './hooks/useUsers';

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  return (
    <div>
      {isLoading && <div className="spinner-border" role="status"></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <h1>User List</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            <span>{user.name}</span>
            <div>
              {/* 按钮操作（删除、更新等）的实现可以继续使用 UserService */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

通过这个自定义 Hook，我们实现了逻辑的复用，使得未来在其他组件中也可以直接调用 `useUsers` 来获取用户数据，而不必重复相同的状态管理和副作用代码。

---

### 6. 项目整体架构与优化思路总结

#### 6.1. 项目结构

```
src/
├── hooks/
│   └── useUsers.ts          // 自定义 Hook，用于封装用户数据获取逻辑
├── services/
│   ├── api-client.ts        // 统一的 API 客户端配置，集中管理后端 URL 与请求头
│   ├── HTTP-service.ts      // 通用 HTTP 服务类，利用泛型封装常用 HTTP 方法
│   └── user-service.ts      // 针对 User 数据的具体服务，利用通用 HTTP 服务实例化
├── App.tsx                  // 主要 UI 组件，负责展示和交互，调用自定义 Hook 获取数据
└── ...                      // 其他组件或资源
```

#### 6.2. 优化思路与设计理念

- **分离关注点**
    - **UI 与业务逻辑分离**：App 组件不再关心 HTTP 请求的具体实现，而专注于展示和用户交互。所有 HTTP 请求细节由服务层（UserService 和 HTTPService）封装。
    - **隐藏实现细节**：例如取消请求的逻辑（AbortController）被封装在服务中，组件只需要调用 cancel 方法，无需了解内部实现。
- **模块化与复用**
    - **统一 API 客户端**：避免重复硬编码后端 URL，使得配置变得集中统一，易于维护。
    - **通用服务类**：通过泛型和约束机制构造通用的 HTTP 服务类，实现对多种实体数据的复用，减少重复代码。
    - **自定义 Hook**：将数据获取、状态管理和副作用逻辑抽取到自定义 Hook 中，使得相同功能可以在多个组件中复用。
- **错误处理与乐观更新策略**
    - 各种操作（删除、添加、更新）的实现都采用了乐观更新——先修改 UI，再调用后端接口，如果出错则回滚，保证了用户体验的流畅性。
    - 统一的错误处理机制使得后续调试和扩展更加简单、可靠。
- **TypeScript 的应用**
    - 利用 TypeScript 接口和泛型提供类型安全保障，防止因数据类型不匹配引发的问题。
    - 对通用服务类的设计添加类型约束（如要求实体必须包含 id 属性），使得代码更加健壮。

#### 6.3. 项目实现流程总结

1. **创建 API 客户端**
    - 在 `api-client.ts` 中配置 Axios 实例，集中管理后端 URL 与全局请求头。
2. **构建用户服务**
    - 在 `user-service.ts` 中封装所有用户相关的 HTTP 请求方法（getAllUsers、deleteUser、createUser、updateUser），并隐藏请求取消的细节。
3. **构造通用 HTTP 服务类**
    - 在 `HTTP-service.ts` 中利用泛型创建一个可复用的 HTTP 服务类，通过工厂函数 `createHTTPService` 生成针对特定实体（如 User）的服务实例。
4. **抽取数据获取逻辑为自定义 Hook**
    - 在 `useUsers.ts` 中封装了用户数据获取、状态管理（users、error、loading）以及请求取消逻辑，供任意组件调用。
5. **组件中使用服务与 Hook**
    - App 组件调用 `useUsers` 获取数据，并通过服务方法（如 delete、update、create）实现对用户数据的操作，从而使得组件逻辑清晰，关注点单一。

---

### 7. 总结

通过本次项目重构，我们实现了以下目标：

- **代码复用**：通过通用 HTTP 服务和自定义 Hook，有效避免了重复代码，使得相似功能模块能够横向复用。
- **关注点分离**：UI 组件不再处理与 HTTP 请求、取消机制以及错误处理相关的细节，而专注于渲染与交互。
- **高内聚低耦合**：所有与后端交互的逻辑均封装在服务层，组件仅作为消费层，便于后续维护和扩展。
- **类型安全**：利用 TypeScript 的泛型和接口，确保数据操作过程中类型正确，从而减少运行时错误。

这套优化方案不仅提升了代码的可读性和可维护性，也为构建更大规模、更复杂的 React 应用提供了坚实的架构基础。未来，如果需要支持更多实体、更多操作或更复杂的业务逻辑，只需在此基础上进行扩展即可，而无需改动 UI 组件本身。

# React 与后端交互

**学习计划**

1. **React 与后端交互简介**：了解前端与后端的角色，以及为什么 React 应用需要连接后端。
2. **理解 `useEffect` Hook**：学习 `useEffect` 的作用，特别是在处理副作用（如 API 请求）时的重要性。
3. **`useEffect` 的依赖项**：掌握如何通过依赖项数组控制 `useEffect` 的执行时机，避免不必要的重复执行和无限循环。
4. **`useEffect` 清理函数**：学习如何在组件卸载或 Effect 重新运行前执行清理操作，例如取消网络请求。
5. **获取数据 (Fetching Data)**：使用 Axios 库从服务器获取数据，并了解 Promise 的基本使用。
6. **理解 HTTP 请求**：深入了解 Axios 在底层是如何通过 HTTP 协议与服务器通信的。
7. **错误处理**：学习如何在 API 请求过程中捕获和处理可能发生的错误。
8. **使用 `async/await`**：探索一种更简洁的方式来处理异步操作和 Promise。
9. **取消 Fetch 请求**：学习如何使用 `AbortController` 来取消不再需要的网络请求。
10. **显示加载指示器**：在数据加载过程中向用户提供反馈，提升用户体验。
11. **删除数据**：实现通过 API 从服务器删除数据的功能，并同步更新 UI。
12. **创建数据**：实现通过 API 向服务器发送新数据的功能，并同步更新 UI。
13. **更新数据**：实现通过 API 修改服务器上现有数据的功能，并同步更新 UI。
14. **提取可重用的 API 客户端**：学习如何将 Axios 的配置提取到一个单独的模块中，方便复用和管理。
15. **提取用户服务 (User Service)**：将与用户数据相关的 API 操作封装成一个专门的服务模块，使组件代码更简洁。
16. **创建通用的 HTTP 服务**：进一步抽象，创建一个通用的 HTTP 服务类，可以处理不同类型数据的 CRUD 操作。
17. **创建自定义数据获取 Hook**：学习如何将数据获取的通用逻辑（包括状态管理、Effect 和 API 调用）封装成自定义 Hook，以便在多个组件中复用。

## 1. 从 React 到后端连接

> **简述：**  
> 后端（Backend）是运行在服务器上的“引擎”，负责处理应用的业务逻辑、数据存储与安全（如认证、授权）等核心功能。前端（如 React）专注于用户界面展现，而与后端建立稳定、高效的通信，是前后端分离架构下现代 Web 应用的基础。

---

**知识树**

1. **后端及其核心职责**

    - **定义**：服务器端的运行环境，接收和处理客户端请求
    - **关键功能**：
        - 业务逻辑处理
        - 数据库读写与管理
        - 用户认证（Authentication）与授权（Authorization）
        - 安全、日志与性能监控

2. **常见后端框架与语言**

    - Node.js（Express）：轻量、灵活，适合与 React 搭配
    - Python（Django、Flask）：快速开发，适合数据密集型应用
    - Ruby（Rails）：注重开发效率，适合初创项目
    - Java（Spring Boot）：强大、企业级支持
    - C#（ASP.NET Core）：跨平台、微软生态

3. **前后端通信基础**

    - 使用 HTTP 协议发送请求（GET, POST, PUT, DELETE）
    - 使用 `fetch` 或 `axios` 等库进行异步数据获取
    - 通过 REST 或 GraphQL API 进行结构化通信
    - 配合状态管理工具（如 Redux）处理异步数据流

4. **在 React 中发起请求**

    - **原生 fetch API**
    - **第三方库 axios**
    - **异步模式**：Promise 与 async/await
    - **常见实践**：
        - 请求前后 loading 状态管理
        - 全局或局部错误处理
        - 与 React Hooks（useEffect、useState）结合
        - 请求取消（AbortController）与防抖、节流

---

**代码示例**

1. **使用 fetch 发送 GET 请求**（TypeScript）

```typescript
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

2. **使用 axios 发送 POST 请求**（TypeScript）

```typescript
import axios from 'axios';

interface NewUser {
  name: string;
  email: string;
}

async function createUser(user: NewUser): Promise<void> {
  try {
    const response = await axios.post('https://api.example.com/users', user);
    console.log('User created:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// 调用示例
createUser({ name: 'Alice', email: 'alice@example.com' });
```

## 2. 理解 `useEffect` Hook

> 在 React 中，函数组件应保持纯净——相同输入始终产生相同输出，不在渲染阶段产生副作用。但有时我们需要做一些“渲染之外”的操作，如访问本地存储、网络请求或手动操作 DOM。`useEffect` 钩子就是为此而生：它让你在组件渲染后集中管理这些副作用，保持组件主体逻辑的纯粹。

**知识树**

1. 纯函数与副作用

    - **纯函数定义**：相同输入，始终返回相同输出，且无副作用

        - React 要求组件本身为纯函数：不能在 render 阶段执行如 DOM 操作、API 请求、localStorage 写入等副作用

    - **副作用**：
        - 定义：组件渲染之外的任何操作，会改变组件外部的状态或环境
        - 示例
            - 写入或读取 `localStorage`
            - 发送网络请求（fetch、axios）
            - 操作 DOM（聚焦、添加事件监听）
        - 副作用与渲染无关：它们不直接返回 JSX 结构。

2. Effect Hook 的核心作用

    - **功能**：
        - 允许我们在组件渲染之后执行副作用（after render）
        - 替代 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 等生命周期方法
        - `useEffect` 的调用会在 **DOM 更新完成后** 触发，确保不会阻塞渲染流程
    - **调用规则**：
        - 只能在组件顶层调用，不能置于条件、循环或嵌套函数中
        - 可多次调用以分离不同职责

3. **依赖项 & 执行时机**

    - **无依赖数组**：每次渲染后均执行
    - **空数组 `[]`**：仅在组件首次挂载后执行一次
    - **有依赖数组**：当数组中任一值发生变化时执行

4. **多个 Effect 的组织**

    - 将不同副作用拆分到不同的 `useEffect`
    - React 会按书写顺序，在渲染后依次运行各个 Effect

5. **常见使用场景**

    - **DOM 操作**：如自动聚焦输入框
    - **页面元信息**：更新 `document.title`
    - **网络交互**：数据的拉取与提交
    - **浏览器 API**：定时器、事件监听、存储等

6. **与 `useRef` 结合使用示例**

    - 获取 DOM 元素的引用以进行操作（如聚焦输入框）。
    - 将直接的 DOM 操作（副作用）移入 `useEffect`。

**代码示例**

1. 使用 `useEffect` 聚焦输入框和修改文档标题

    ```TypeScript
    import React, { useEffect, useRef } from 'react';

    function App() {
      const inputRef = useRef<HTMLInputElement>(null);

      // 副作用1: 组件渲染后聚焦输入框
      useEffect(()
        if (inputRef.current) {
          inputRef.current.focus();// 副作用：设置焦点
        }
      }); // 空依赖数组 → 只在首次渲染时执行

      // 副作用2: 组件渲染后修改文档标题
      useEffect(() => {
        document.title = 'My App';
      });

      return (
        <div>
          <input ref={inputRef} type="text" className="form-control" />
        </div>
      );
    }

    export default App;
    ```

    - 在这个例子中，我们定义了两个 `useEffect`。第一个用于在组件加载后自动聚焦到输入框。第二个用于设置网页的标题。这两个都是在组件渲染完成后执行的副作用操作。

## 3. `useEffect` 的依赖项

> 简述：React 的 useEffect 默认在每次组件渲染后执行，但我们可以通过依赖项数组精准控制副作用的触发时机，从而避免不必要的更新或无限循环。

**知识树**

1. **`useEffect` 的默认行为**

    - 如果没有提供第二个参数（依赖项数组），Effect 函数会在每次组件渲染完成后执行。

2. **依赖项数组的作用（第二个参数）**

    - `useEffect(callback)` → 默认每次渲染后都执行
    - `useEffect(callback, [])` → 只在**首次挂载时执行一次**（componentDidMount 等价）
    - `useEffect(callback, [value])` → 仅当 `value` 发生变化时才重新执行副作用
    - 可以传多个依赖项，React 会追踪每一项的变化

3. **为什么需要依赖项？**

    - **避免无限循环**：
        - 场景：在 Effect 中更新了 state，这会导致组件重新渲染。
        - 如果 Effect 在每次渲染后都执行，就会形成**问题根源：副作用 → 状态更新 → 再次渲染 → 再次副作用**
        - 使用空数组 `[]` 可以让 Effect 只执行一次，打破循环。
    - **性能优化**：只在必要时执行 Effect，避免不必要的计算或 API 调用。
    - **逻辑控制**：精确控制 Effect 何时响应数据的变化。

4. **React 严格模式与副作用执行两次的问题**

    - 在开发模式下，React 的 **Strict Mode** 会**故意触发双重渲染**以发现潜在问题
    - 表现：组件首次加载时副作用执行两次，实际生产环境中不会出现
    - 本质是：React 会 mount → unmount → mount 再触发一次副作用，目的是确保副作用代码具备幂等性

5. **传参方式优化：props 解构与类型注解**

    - 简洁方式：使用内联类型注解而非独立定义接口（适合简单组件）
      `function ProductList({ category }: { category: string }) { ... }`

**代码示例**

1. `useEffect` 根据依赖项变化执行（根据分类获取产品）

    ```TypeScript
    import React, { useEffect, useState } from 'react'

    const ProductList = ({ category }: { category: string }) => {
    	const [products, setProducts] = useState<string[]>([]);
    	useEffect(() => {
    		console.log('Fetching products in ', category);
    		setProducts(['Clothing', 'Household']);
    	}, [category]);

    	return (
    		<div>ProductList</div>
    	)

    }
    export default ProductList
    ```

    - 在这个例子中，`ProductList` 组件的 `useEffect` 依赖于 `category` prop。当 `App` 组件中的 `selectedCategory` 状态改变时，`ProductList` 会接收到新的 `category` prop，导致其 `useEffect` 重新执行，从而获取新分类下的产品。

2. 依赖响应变化

```TypeScript
<select onChange={e => setCategory(e.target.value)}>
  <option value="">Select</option>
  <option value="clothing">Clothing</option>
  <option value="household">Household</option>
</select>

<ProductList category={category} />

```

## 4. `useEffect` 清理函数

> 简述：`useEffect` 可以返回一个可选的清理函数 (cleanup function)。这个函数会在组件从 UI 中移除（卸载）之前执行，或者在下一次 Effect 即将重新运行之前执行。它的主要作用是进行必要的清理工作，比如取消订阅、清除定时器或断开网络连接，以防止内存泄漏和不必要的行为。

**知识树**

1.  1. **清理函数的必要性与场景**
    - 原因: 某些副作用操作会创建需要手动管理的资源或订阅。如果不进行清理，可能导致内存泄漏、性能问题或意外行为。
    - 典型场景:
        - **网络连接**: 如 WebSocket 连接，在组件不再需要时应主动断开。
        - **事件订阅**: 如手动添加的  window  事件监听器 (addEventListener)，在组件卸载时应移除 (removeEventListener)。
        - **定时器**: 如  setInterval  或  setTimeout，在组件卸载时应使用  clearInterval  或  clearTimeout  清除。
        - **数据获取**: 正在进行的 API 请求，在组件卸载或不再需要数据时，可能需要中止 (abort) 请求。
        - **第三方库的初始化/销毁**: 一些库可能需要显式的销毁方法。
2.  **清理函数的语法**

    - 在 `useEffect` 的 callback 中 **返回一个函数**，即为清理函数

    ```TypeScript
    useEffect(() => {
      // 副作用代码，例如：
      // connectToServer();

      return () => {
        // 清理代码，例如：
        // disconnectFromServer();
      };
    }, [dependencies]);
    ```

3.  **开发模式的双重行为（React Strict Mode）**

    - 在开发环境中，React 的 **Strict Mode** 会：
        1. 先挂载组件（调用副作用）
        2. 然后立即卸载（调用清理函数）
        3. 再重新挂载（再次执行副作用）
    - 目的：检测副作用是否具备**幂等性与可清理性**
    - 表现：控制台输出：`connecting → disconnecting → connecting`

4.  **副作用生命周期全景图**

```scss
Mount → useEffect() → [setup]
                    ↓
        (optional dependencies change)
                    ↓
             cleanup()
                    ↓
             useEffect() again
                    ↓
              ...
          Unmount → cleanup()
```

**代码示例**

1.  模拟连接和断开聊天服务器

    ```TypeScript

    ```

function connect() {
console.log("Connecting...");
}

function disconnect() {
console.log("Disconnecting...");
}

useEffect(() => {
connect();
return () => {
disconnect();
};
}, []);

    ```

2. React 严格模式下控制台输出

```
Connecting...
Disconnecting...
Connecting...

```

- 第一条：初次挂载副作用执行
- 第二条：组件被卸载（模拟）
- 第三条：重新挂载副作用执行

**核心洞察**

- 清理副作用 = 用于还原外部世界状态的函数（不影响 UI 渲染本身）
- 所有“**打开型副作用**”都应“**对称关闭**”
- `useEffect` 的返回值是生命周期钩子的现代范式 —— 精准控制资源与行为

## 5.异步数据获取

> 简述：React 中常用 `useEffect` 结合异步工具（如 `axios`）向后端请求数据，并通过状态管理将其渲染在组件中。配合 TypeScript 可获得更高的类型安全性和开发体验。

**知识树**

1. **数据获取的基本流程**

    - 定义状态：用 `useState` 创建用于存储数据的状态变量
    - 副作用触发：在 `useEffect` 中发起网络请求
    - 响应处理：通过 `setState` 更新 UI
    - 渲染：使用 `.map()` 遍历数据，动态生成组件元素

2. **异步通信：axios 与 fetch 的选择**

    - `fetch` 是浏览器内置的原生 API，语法较原始
    - `axios` 是第三方库，优势包括：
        - 默认自动解析 JSON
        - 更好的错误处理与请求拦截
        - 支持请求取消、超时设置等扩展功能
    - 安装方式：
        ```bash
        npm install axios
        ```

3. **异步操作与 Promise**

    - 网络请求是异步的（不会立即完成）。
    - `axios.get()` 或 `fetch()` 返回一个 `Promise` 对象。
    - `Promise`：代表一个异步操作最终完成（ resolved）或失败（rejected）的结果。
    - 处理 Promise：
        - `.then(response => { /* 处理成功响应 */ })`：当 Promise 成功解决时执行。
        - `.catch(error => { /* 处理错误 */ })`：当 Promise 被拒绝时执行 (后续章节详述)。
        - `.finally(() => { /* 无论成功失败都执行 */ })`：(后续章节详述)。

4. **TypeScript 类型注解：接口定义与泛型传入**

    - 为响应数据定义接口，确保属性访问的准确性和开发效率
        ```ts
        interface User {
          id: number;
          name: string;
        }
        ```
    - 使用泛型告诉 axios 返回的类型：
        ```ts
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        ```
    - 对状态变量也加类型注解，防止推导失败：
        ```ts
        const [users, setUsers] = useState<User[]>([]);
        ```

5. **开发者体验优化：类型推导与自动补全**

    - 使用接口约束数据结构 → 编辑器自动提示字段名
    - 提高开发效率，避免访问不存在属性带来的运行时错误

---

**代码示例**

```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      });
  }, []); // 依赖项为空 → 只在初次渲染时执行

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

**核心洞察**

- 异步请求是副作用的一种，应当封装在 `useEffect` 中进行统一管理
- 类型系统（接口 + 泛型）是构建可维护前端代码的关键
- 依赖项数组控制副作用频率，避免因状态更新引发循环调用
- 整个流程体现 React 编程范式：**数据驱动 + 副作用隔离 + 类型约束**

## 6. Axios

> 简述：当我们使用 `axios.get()` 发送请求时，本质上是通过 HTTP 协议与服务器通信。理解 HTTP 的基本结构和请求过程，有助于编写更可靠的前端代码。

---

**知识树**

1. **HTTP 协议概述**

    - **HTTP**（Hypertext Transfer Protocol）：超文本传输协议，Web 的核心通信标准
    - 前端与后端的交互通过 HTTP 请求（Request）与响应（Response）完成
    - 一个典型的访问网站流程：
        - 浏览器发出 **HTTP 请求** →
        - 服务器返回 **HTTP 响应**（包含 HTML、CSS、JS、图片等资源）

2. **Axios 本质：封装了 HTTP 请求**

    - 调用 `axios.get(url)` 实际上是向服务器发起一个 **HTTP GET 请求**
    - GET 方法用于“读取”数据（而非修改）
    - Axios 使用浏览器内置的 **XMLHttpRequest** 或 **Fetch API** 作为底层通信机制

3. **请求与响应的结构：Headers 和 Body**

    - HTTP 报文分为两个主要部分：
        - **Headers（头部）**：描述信息，如请求方式、内容类型、认证信息、服务器标识等
        - **Body（主体）**：传输的实际数据内容（可为空，视请求类型而定）

4. **浏览器调试：观察真实请求**

    - 打开 DevTools → Network → 选择 `Fetch/XHR` 筛选器
    - 选择请求后查看以下信息：
        - **Request Headers**：请求的元数据（URL、方法、来源、用户代理等）
        - **Response Headers**：服务器返回的元数据（缓存策略、内容类型等）
        - **Preview Tab**：格式化后的响应数据（如 JSON 用户列表）
        - **Response Tab**：原始响应文本（通常为 JSON 字符串）

5. **Strict Mode 的影响**

    - 观察中可能看到多个相同请求，这是因为：
        - React 开发环境默认启用 **Strict Mode**
        - React 会“模拟卸载与重挂载”组件以检测副作用清理逻辑
        - 因此 `useEffect` 会执行两次，产生两个相同请求（仅在开发环境）

6. **准备工作：为后续操作奠定基础**

    - 当前只演示了 `GET` 请求
    - 后续将介绍 `POST`、`PUT`、`DELETE` 等请求方法，支持数据创建、更新、删除等操作

---

**核心概念图示**

```
axios.get("https://...") → 发送 HTTP GET 请求
          ↓
     请求 Headers:
     - Method: GET
     - URL: https://...
     - Accept: application/json
          ↓
     响应 Headers:
     - Content-Type: application/json
     - Status: 200 OK
          ↓
     响应 Body:
     [
       { id: 1, name: "John" },
       ...
     ]
```

---

**核心洞察**

- **Axios 是 HTTP 请求的“语法糖”，HTTP 本身才是通信的实质**
- 了解 Headers 和 Body 的区分，有助于调试、性能优化、认证处理等高级用法
- **观察请求流量（DevTools）是前端开发的重要技能**
- 明确客户端行为对服务端响应的影响，是构建可靠系统的基础

## 6. 理解 HTTP 请求

> 简述：HTTP (Hypertext Transfer Protocol) 是互联网上数据通信的基础协议。当我们使用 `axios.get()` 这类方法获取数据时，实际上是在向服务器发送一个 HTTP 请求。本节将帮助你了解 HTTP 请求的基本构成和如何在浏览器开发者工具中观察这些请求。

**知识树**

1. **HTTP (Hypertext Transfer Protocol)**
    - 定义：一种用于在网络上传输超文本（如 HTML、JSON 数据等）的应用层协议。
    - Web 的基础：浏览器通过 HTTP 请求从 Web 服务器获取网页内容。
2. **HTTP 请求-响应模型**
    - 客户端（如浏览器或我们的 React 应用）发送一个 HTTP 请求到服务器。
    - 服务器处理该请求，并返回一个 HTTP 响应给客户端。
3. **观察 HTTP 请求（浏览器开发者工具）**
    - **Network Tab (网络面板)**：
        - 显示页面加载过程中发起的所有网络请求。
        - 可以按类型过滤请求，例如 `Workspace/XHR` (XMLHttpRequest)，这类通常是我们的 API 请求。
    - **Strict Mode 的影响**：在开发模式下，由于 Strict Mode，可能会看到对同一端点的两次请求。
4. **HTTP 请求/响应的主要组成部分**
    - **Headers (头部)**：
        - 包含元数据（关于请求或响应本身的信息）。
        - **通用头部 (General Headers)**：
            - `Request URL`: 请求的目标端点地址。
            - `Request Method`: HTTP 方法，如 `GET` (获取数据), `POST` (创建数据), `PUT` (替换数据), `DELETE` (删除数据) 等。
            - `Status Code` (在响应中): 表示请求的结果，如 `200 OK` (成功), `404 Not Found` (未找到), `500 Internal Server Error` (服务器内部错误) 等。
        - **请求头部 (Request Headers)**：客户端发送给服务器的额外信息（如 `User-Agent`, `Accept`, `Authorization`）。
        - **响应头部 (Response Headers)**：服务器返回给客户端的额外信息（如 `Content-Type`, `Content-Length`, `Set-Cookie`）。
    - **Body (主体)**：
        - 包含实际传输的数据。
        - 对于 `GET` 请求，请求体通常为空，数据通过 URL 参数传递。
        - 对于 `POST` 或 `PUT` 请求，请求体包含要发送给服务器的数据（如 JSON）。
        - 响应体包含服务器返回的数据（如 HTML 页面、JSON 数据）。
5. **在开发者工具中查看具体请求信息**
    - **Headers Tab**: 查看请求和响应的头部信息。
    - **Preview Tab**: 以格式化（通常是易读）的方式预览响应数据（如 JSON）。
    - **Response Tab**: 以纯文本形式查看原始的响应主体。

**代码示例**

(本节主要为概念理解，代码侧重于前一节的 `axios.get()` 调用，以下是如何在浏览器中观察该调用的网络活动)

1. 触发网络请求的代码 (复用上一节的示例)

    ```TypeScript
    // (来自上一节 UserList 组件的 useEffect)
    useEffect(() => {
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    ```

    - **如何观察**：
        1. 运行包含此组件的 React 应用。
        2. 在浏览器中打开开发者工具 (通常按 F12)。
        3. 切换到 "Network" (网络) 面板。
        4. 可能需要刷新页面以捕获初始加载的请求。
        5. 在筛选器中输入 `users` 或选择 `Workspace/XHR` 来找到发往 `jsonplaceholder.typicode.com/users` 的请求。
        6. 点击该请求，即可在右侧或下方看到 "Headers", "Preview", "Response" 等标签页，其中包含了请求和响应的详细信息。

## 7.异步错误处理

> 简述：网络请求并非总是成功，可能因服务器异常、断网、权限问题等失败。前端应当使用 `catch` 或 `try/catch` 机制捕获并优雅处理错误，提供清晰的用户反馈，避免空白屏幕或未处理异常。

---

**知识树**

1. **错误产生的可能性**

    - 断网（Network Error）
    - 接口地址错误或拼写错误（404 Not Found）
    - 权限或认证失败（401 Unauthorized / 403 Forbidden）
    - 服务器内部错误（500 Internal Server Error）
    - 请求超时或响应不符合预期格式

2. **Promise 错误捕获机制：`.catch()` 方法**

    - 所有异步请求返回 Promise，可链式调用 `.catch()` 捕获错误
    - `.catch(err => { ... })` 中 `err` 为错误对象，可访问其 `message`、`code`、`response` 等字段
    - 建议与 `.then()` 写在同一链中，逻辑清晰、语法一致

3. **Axios 错误对象详解**
    - 当使用 Axios 发送的请求失败时，传递给 `.catch()` 回调的 `error` 对象通常是一个 Axios 特有的错误对象 (可以通过 `error.isAxiosError` 判断)。
    - **关键属性**:
        - `error.message`: 字符串，对错误的文本描述 (例如 "Request failed with status code 404", "Network Error")。这是向用户展示错误信息时常用的来源。
        - `error.response`: 如果错误是一个 HTTP 错误 (即服务器返回了 4xx 或 5xx 状态码)，此属性会包含服务器的响应对象。
            - `error.response.data`: 服务器返回的错误详情 (可能是 JSON 对象)。
            - `error.response.status`: HTTP 错误状态码。
            - `error.response.headers`: 服务器的响应头。
        - `error.request`: 如果请求已发出但服务器没有响应 (例如网络错误)，此属性会包含生成该请求的 XMLHttpRequest 实例 (在浏览器中) 或 http.ClientRequest 实例 (在 Node.js 中)。
        - `error.code`: Axios 定义的特定错误代码字符串 (例如 `ERR_NETWORK`, `ECONNABORTED` 表示超时)。
        - `error.config`: 导致此错误的请求配置对象。
4. **进阶建议（可选）**

    - 错误分类：区分客户端错误、服务器错误、Axios 内部错误
    - 提供“重试”按钮或“刷新页面”功能
    - 对于响应体中包含错误信息的情况（如 400/422），可从 `error.response.data.message` 提取更具业务意义的提示

---

**代码示例**

```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/invalid-endpoint')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setError(err.message); // 或者使用 err.response?.data?.message 更详细
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
```

---

**核心洞察**

- 所有真实世界的应用都必须具备 **容错能力**
- 错误捕获不仅是技术问题，更是用户体验设计的一部分
- TypeScript 强类型配合 Axios 泛型，可避免访问 `undefined` 字段
- 把错误当作**流程的一部分而非异常状态**来对待，是专业前端开发的标志

## 8.使用 `async/await`

> 简述：`async/await` 提供了一种更线性、同步风格的异步写法，有助于提升代码的可读性。但在 React 的 `useEffect` 中使用它时，需要额外的结构包裹，尤其在 TypeScript 项目中会面临类型断言等复杂性。

---

**知识树**

1. **`async/await` 的目的**
    - 简化异步代码的编写和阅读。
    - 使异步代码看起来更像同步代码的执行流程。
2. **`async/await` 语法基础**
    - **`async` 关键字**:
        - 用途: 用于声明一个异步函数。可以放在函数声明 (`async function myFunction() {}`)、函数表达式 (`const myFunction = async function() {}`) 或箭头函数 (`const myFunction = async () => {}`) 之前。
        - 行为:
            - `async` 函数总是隐式地返回一个 Promise。
            - 如果 `async` 函数内部显式 `return` 一个值，这个值会被 Promise.resolve() 包装。
            - 如果 `async` 函数内部抛出一个错误，这个错误会被 Promise.reject() 包装。
    - **`await` 关键字**:
        - 使用限制: **只能**在 `async` 函数内部使用。
        - 用途: 放置在一个返回 Promise 的表达式之前 (e.g., `const result = await somePromiseReturningFunction();`)。
        - 行为:
            - 它会暂停 `async` 函数的执行，等待 Promise 被解决 (resolved) 或拒绝 (rejected)。
            - 如果 Promise resolved，`await` 返回 Promise 的结果值。
            - 如果 Promise rejected，`await` 会抛出错误（就像 `throw` 语句一样），这个错误可以被 `try...catch` 捕获。
3. **使用 `async/await` 进行数据获取的流程**

    - **代码结构**: 异步操作序列看起来更像传统的同步代码，从上到下执行，减少了 `.then()` 回调的嵌套（所谓的 "回调地狱"）。
    - **错误处理**: 使用标准的 `try...catch...finally` 语句块来捕获由 `await` 表达式（当 Promise 被拒绝时）抛出的错误，以及执行清理操作。

4. **为什么使用 `async/await`**

    - 替代 `.then().catch()` 方式，实现“同步式语法”处理异步逻辑
    - 更线性、便于阅读（尤其当副作用逻辑较长时）
    - 配合 `try/catch` 实现更清晰的错误处理路径

5. **React useEffect 不接受 async 函数的原因**

    - `useEffect(fn)` 要求 `fn` 返回：
        - `void`（无返回值），或
        - 一个 **清理函数（非 Promise）**
    - `async` 函数默认返回一个 Promise，因此不能直接传给 `useEffect`

    ✅ 合法：`useEffect(() => { ... })`  
    ❌ 不合法：`useEffect(async () => { ... })`

6. **对比：`.then/.catch` vs `async/await`**

| 方面                | `.then/.catch`               | `async/await`                                          |
| ------------------- | ---------------------------- | ------------------------------------------------------ |
| 可读性              | 简洁，适合简单逻辑           | 更线性，适合复杂逻辑                                   |
| 错误处理            | 使用 `.catch()` 统一处理错误 | 需要使用 `try/catch` 块包裹                            |
| React 中的用法      | 可直接用于 `useEffect`       | 需在 `useEffect` 中定义并调用 async 函数               |
| TypeScript 错误处理 | 通常不需断言                 | `catch` 中的 error 是 `unknown`，需断言为 `AxiosError` |
| 结构与可维护性      | 扁平、紧凑                   | 嵌套较多，代码变长，维护成本略高                       |

代码：

1. 内部定义 async 函数并立即调用

```tsx
useEffect(() => {
  const fetchUsers = async () => {
	try {
	  const response = await axios.get<User[]>('...');
	  setUsers(response.data);
	} catch (error) {
	  const err = error as AxiosError;
	  setError(err.message);
	}
  };

  fetchUsers();
}, []);
```

2. **TypeScript 中的错误对象类型问题**

    - `catch (error)` 中，TypeScript 默认将 `error` 类型标记为 `unknown`
    - 无法直接访问 `error.message` → 需要断言为特定错误类型

    ```tsx
    catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    ```

    - `AxiosError` 类型需从 `axios` 模块手动导入：

    ```ts
    import { AxiosError } from 'axios';
    ```

**推荐实践**

- 简单请求（如单一 `GET`）：**使用 `.then/.catch()` 简洁高效**
- 复杂请求（多步逻辑、多个异步调用）：`async/await + try/catch` 更清晰
- 在 `useEffect` 中不要直接使用 `async () => {}`，应定义内部函数
- 类型断言必要时使用，但应避免滥用

---

**核心洞察**

- `async/await` 是语法糖，它不会改变 **Promise 的本质机制**
- 在 React 的 Hooks 中应用 `async/await` 时必须考虑其执行时机与结构
- **函数结构的简洁性 ≠ 逻辑的弱化**：理解 React 的规则（如不能让 `useEffect` 返回 Promise）是重中之重
- TypeScript 的 “unknown” 类型是为了避免错误假设 —— 类型安全不应妥协，可通过断言保持兼容性

## 9. 取消 Fetch

> 简述：在 React 中，组件卸载时如果异步请求尚未完成，可能导致状态更新错误或内存泄漏。为避免这种情况，使用 `AbortController` 在 `useEffect` 中注册清理函数，实现异步请求的主动取消。

**知识树**

1. **问题背景：组件卸载后请求仍在执行**

    - 异步请求在 `useEffect` 中发起，若组件卸载后仍未返回，可能导致试图对已卸载组件进行状态更新，引发错误或警告。
    - 特别在 React 18 的严格模式下（组件会“mount → unmount → mount”），此类问题更频繁。

2. **解决方案：使用 AbortController 取消请求**

    - `AbortController` 是现代浏览器提供的内建 API，用于主动取消异步操作（如 `fetch`、`axios` 请求）。
    - 创建方式：`const controller = new AbortController();`
    - 请求时传入 `signal`: `axios.get(url, { signal: controller.signal })`
    - 取消请求：调用 `controller.abort()`

3. **将清理逻辑封装进 useEffect 返回值**

    - 在 `useEffect` 中返回一个函数（清理函数），React 会在组件卸载或依赖变化时自动调用它。
    - 在该函数中执行 `controller.abort()` 即可取消未完成的请求。

4. **处理取消错误（axios-specific）**

    - Axios 中，取消请求会抛出一个 `CanceledError` 实例。
    - 需要在 `catch` 块中识别并忽略这种特定错误，以防止用户看到无意义的报错。

---

**代码示例**

1. 使用 `AbortController` 取消异步请求

    ```tsx
    import { useEffect, useState } from "react";
    import axios, { CanceledError } from "axios";

    function UserList() {
      const [users, setUsers] = useState([]);
      const [error, setError] = useState("");

      useEffect(() => {
        const controller = new AbortController();

        axios
          .get("/api/users", { signal: controller.signal })
          .then(res => setUsers(res.data))
          .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });

        return () => controller.abort(); // 清理函数：取消请求
      }, []);

      return (
        <div>
          {error && <p>{error}</p>}
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    ```

    - 请求在组件卸载或依赖变更时被取消。
    - 若请求已被取消，不更新错误状态，防止用户看到“取消”异常。

2. 网络行为验证说明

    ```txt
    网络面板观察：
    - 每次组件挂载都会触发一次请求；
    - 若组件在请求返回前被卸载，则前一次请求被 cancel；
    - 清理函数 controller.abort() 被自动调用，Axios 抛出 CancelledError。
    ```

## 10.添加 loading

> 简述：异步请求期间展示加载状态是一种良好的用户体验实践。通过 `useState` 追踪 `isLoading` 状态，并在数据请求开始与结束时切换，配合条件渲染和样式即可完成加载提示功能。

---

**知识树**

1. **异步流程中控制 loading 状态**

    - 不要在 `axios.get()` 之后立即设置 `isLoading = false`，因为请求是异步的。
    - 应在 `.then()` 和 `.catch()` 中分别设置为 `false`。
    - 或使用 `.finally()` 实现统一回调（React 18 Strict Mode 中可能失效）。

2. **条件渲染加载指示器**

    - 使用逻辑表达式 `{isLoading && <Spinner />}` 控制展示。
    - 可使用 Bootstrap 样式类如 `spinner-border` 快速构建指示器。

3. **开发调试技巧**

    - 使用浏览器 DevTools 的 Network Throttling 人为降低网络速度，验证加载指示器的可视性。

**代码示例**

1. 使用 `isLoading` 控制加载状态（不使用 finally）

    ```tsx
    import { useState, useEffect } from "react";
    import axios from "axios";

    function UserList() {
      const [users, setUsers] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");

      useEffect(() => {
        setIsLoading(true);

        axios
          .get("/api/users")
          .then(res => {
            setUsers(res.data);
            setIsLoading(false);
          })
          .catch(err => {
            setError(err.message);
            setIsLoading(false);
          });
      }, []);

      return (
        <div>
          {isLoading && <div className="spinner-border"></div>}
          {error && <p>{error}</p>}
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    ```

    - `isLoading` 为 true 时渲染 spinner，数据加载完成后消失。

2. 使用 `.finally()` 简化 loading 控制（⚠️ Strict Mode 下可能无效）

    ```tsx
    useEffect(() => {
      setIsLoading(true);

      axios
        .get("/api/users")
        .then(res => setUsers(res.data))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false)); // 所有情况都关闭 loading
    }, []);
    ```

    - 结构更简洁，逻辑集中，但 React 18 Strict 模式下不稳定，建议慎用。

## 11.删除数据

> 简述：删除数据时，React 应用可采用乐观更新策略，即先更新 UI，再发起服务器请求，提升响应速度。失败时回滚到原始状态，并反馈错误信息。

---

**知识树**

1. **删除逻辑的两种实现策略**

    - **乐观更新**（推荐）：
        - 立即从 UI 中移除数据。
        - 异步调用服务器删除 API。
        - 若失败则恢复 UI。
    - **悲观更新**：
        - 等待服务器响应成功后再更新 UI。
        - 更保守但交互体验较差。

2. **错误处理与回滚机制**

    - 请求失败时设置错误状态（如 `setError(err.message)`）。
    - 使用一个变量（如 `originalUsers`）缓存原始数据用于回滚。

3. **是否处理 Promise 的 `.then()` 或 `.finally()`**

    - 若无后续 UI 更新需求，可省略 `.then()`。
    - `.finally()` 本可统一处理清理逻辑，但在 React 18 的 Strict 模式中可能失效。

---

**代码示例**

1. 列表结构 + 删除按钮（Flex 布局优化）

    ```tsx
    <ul className="list-group">
      {users.map(user => (
        <li key={user.id} className="list-group-item d-flex justify-content-between">
          {user.name}
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteUser(user)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    ```

2. 删除逻辑（乐观更新 + 回滚）

    ```tsx
    const deleteUser = (user: User) => {
      const originalUsers = [...users];
      setUsers(users.filter(u => u.id !== user.id));

      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .catch(err => {
          setError(err.message);
          setUsers(originalUsers); // 回滚 UI
        });
    };
    ```

## 12. 创建数据

> 简述：在添加数据时，使用乐观更新策略可以立即在 UI 中展示新项，从而提升交互流畅性。请求成功后使用服务端返回的对象更新状态，失败则回滚并提示错误。

---

**知识树**

1. **发送 POST 请求保存数据**

    - 使用 `axios.post(url, newUser)` 将数据提交至服务端。
    - 成功时获取服务端生成的 ID，并将响应数据合并入 UI。

2. **异常处理与回滚机制**

    - 在请求失败时：
        - 调用 `setError(error.message)` 显示错误信息；
        - 使用 `setUsers(originalUsers)` 恢复原始 UI 状态。

---

**代码示例**

1. 添加按钮 + 调用创建函数

    ```tsx
    <button className="btn btn-primary mb-3" onClick={addUser}>
      Add User
    </button>
    ```

2. 实现乐观创建逻辑 + 回滚

    ```tsx
    const addUser = () => {
      const originalUsers = [...users];

      const newUser = { id: 0, name: "Mosh" };
      setUsers([newUser, ...users]);

      axios
        .post("https://jsonplaceholder.typicode.com/users", newUser)
        .then(({ data: savedUser }) =>
          setUsers([savedUser, ...users])
        )
        .catch(err => {
          setError(err.message);
          setUsers(originalUsers); // 回滚
        });
    };
    ```

## 13.更新数据

> 简述：在 React 中更新数据时，采用乐观更新策略可以在用户操作后立即更新 UI，再通过异步调用服务端持久化更改。若请求失败，则回滚到原始状态。此策略提高了交互的响应性和体验质量。

---

**知识树**

1. **发送 PATCH 请求同步后端**

    - 使用 `axios.patch(url, updatedUser)` 向服务器提交更改。
    - **HTTP PUT vs. PATCH**
        - **`PUT`**：通常用于**替换**目标资源**全部**内容。如果只发送部分数据，未发送的字段可能会被清空或设为默认值（取决于后端实现）。
        - **`PATCH`**：通常用于对资源进行**部分修改**。只发送需要更改的字段。
        - 选择哪个方法取决于后端 API 的设计和支持。如果只更新单个属性，`PATCH` 更语义化。

2. **处理异常与回滚机制**

    - 保存原始数据列表 `originalUsers`。
    - 请求失败时使用 `setUsers(originalUsers)` 回滚 UI。
    - 使用 `setError(error.message)` 提示用户错误信息。

3. **语法优化：结构解构与命名规范**

    - 通过变量命名优化代码可读性，如 `updatedUser` 代替嵌套更新逻辑。

---

**代码示例**

1. 更新按钮与布局容器（保持按钮整齐）

    ```tsx
    <ul className="list-group">
      {users.map(user => (
        <li key={user.id} className="list-group-item d-flex justify-content-between">
          {user.name}
          <div>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => updateUser(user)}
            >
              Update
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
    ```

2. 更新逻辑（乐观更新 + 回滚）

    ```tsx
    const updateUser = (user: User) => {
      const originalUsers = [...users];

      const updatedUser = { ...user, name: user.name + "!" };
      setUsers(
        users.map(u => (u.id === user.id ? updatedUser : u))
      );

      axios
        .patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser)
        .catch(err => {
          setError(err.message);
          setUsers(originalUsers); // 回滚原始列表
        });
    };
    ```

## 14.封装 Axios

> 简述：随着组件内异步请求代码的增多，重复使用的 URL 和 Axios 实例可能造成维护困难。通过封装统一的 API 客户端模块，可实现更清晰的结构、更少的重复代码和更好的跨模块可复用性。

**知识树**

1. **问题识别：代码中的重复**

    - 表现：后端 API 的基础 URL (Base URL) 在多个地方被硬编码和重复使用。
    - 弊端：
        - 难以维护：如果 URL 变更，需要修改多处。
        - 容易出错：手动修改时可能遗漏或产生不一致。

2. **解决方案：创建专用的 API 客户端模块**
    - 目的：集中管理 HTTP 请求的默认配置。
    - 步骤：
        - 创建 `services` 文件夹：用于存放提供应用功能的非 UI 模块。
        - 创建 `api-client.ts` 文件：专门用于定义 API 客户端。
3. **实现 API 客户端**
    - 导入 `axios`：作为 HTTP 请求的基础库。
    - 使用 `axios.create()` 方法：
        - 作用：创建一个新的 `axios` 实例，可以拥有自定义的配置。
        - 配置项：
            - `baseURL`: 设置所有请求的基础 URL。例如：`https://jsonplaceholder.typicode.com`。这样，在具体请求时只需提供相对路径 (如 `/users`)。
            - `headers` (可选): 设置所有请求都会携带的 HTTP 头。例如，用于传递 API 密钥。
    - 导出配置好的实例：
        - 使用 `export default` 将创建的 `axios` 实例作为模块的默认导出，方便其他模块导入和使用。
4. **处理错误类型 (CanceledError)**
    - 问题：原组件中直接从 `axios` 导入了 `CanceledError`。为了减少对 `axios` 的直接依赖，并保持接口一致性。
    - 解决方案：在 `api-client.ts` 中从 `axios` 导入 `CanceledError`，然后将其作为命名导出 (`export { CanceledError }`)。
5. **在应用中使用 API 客户端**
    - 导入 API 客户端：在需要发起请求的组件（如 `App.tsx`）中，导入 `api-client.ts` 导出的实例。
    - 替换直接的 `axios` 调用：将原先所有直接使用 `axios` (如 `axios.get()`, `axios.post()`) 的地方，替换为使用导入的 API 客户端实例 (如 `apiClient.get()`, `apiClient.post()`)。
    - 更新 `CanceledError` 的导入：从 `api-client.ts` 导入 `CanceledError`。
6. **效果** - 代码更简洁：消除了重复的 `baseURL`。 - 可维护性增强：修改 `baseURL` 只需在一处进行。 - 封装性更好：组件不直接依赖 `axios` 的具体配置。
   **代码示例**

7. 创建 API 客户端 (`src/services/api-client.ts`)

    ```TypeScript
    import axios, { CanceledError } from "axios";

    // 创建一个 Axios 实例，并配置基础 URL
    const apiClient = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com", // 示例后端 URL
      // headers: { // 如果需要，可以在这里设置通用的请求头
      //   'api-key': 'YOUR_API_KEY'
      // }
    });

    // 默认导出配置好的客户端实例
    export default apiClient;
    // 命名导出 CanceledError，方便其他地方统一引用
    export { CanceledError };
    ```

    - 这里我们创建了一个名为 `apiClient` 的 `axios` 实例，并设定了 `baseURL`。这意味着以后使用 `apiClient` 发起请求时，如果请求路径是 `/users`，它会自动拼接成 `https://jsonplaceholder.typicode.com/users`。我们还从 `axios` 导入并重新导出了 `CanceledError`，这样其他模块就可以从我们的 `api-client` 模块获取它，而不是直接从 `axios` 获取。

8. 在组件中使用 API 客户端 (例如 `App.tsx`)

    ```TypeScript
    // 移除: import axios, { CanceledError } from 'axios';
    // 替换为:
    import apiClient, { CanceledError } from "./services/api-client"; // 假设在 src 目录下
    import { useEffect, useState } from "react";

    interface User {
      id: number;
      name: string;
    }

    function App() {
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");

      useEffect(() => {
        // 原来的写法: axios.get("https://jsonplaceholder.typicode.com/users")
        // 修改后:
        apiClient
          .get<User[]>("/users") // 只需提供相对路径
          .then((res) => setUsers(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          });
      }, []);

      // ... 其他请求如 post, delete, patch 类似地修改 ...
      // 例如，删除用户:
      const deleteUser = (user: User) => {
        // 原来的写法: axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
        // 修改后:
        apiClient
          .delete("/users/" + user.id)
          .then(() => {
            setUsers(users.filter(u => u.id !== user.id));
          })
          .catch(err => setError(err.message));
      };

      return (
        // JSX
        <>
          {error && <p className="text-danger">{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} <button onClick={() => deleteUser(user)}>Delete</button></li>
            ))}
          </ul>
        </>
      );
    }

    export default App;
    ```

    - 在组件中，我们不再直接导入和使用 `axios`，而是导入我们创建的 `apiClient`。注意，在调用 `apiClient.get`, `apiClient.delete` 等方法时，我们只传入了端点的相对路径，如 `/users` 或 `/users/1`。

## 15.提取用户服务 (User Service)

> 简述：React 组件的职责应聚焦于 UI 渲染和交互逻辑，而非承担 API 请求的细节。将所有 HTTP 调用封装到专用的 `UserService` 中，可实现更好的关注点分离、代码复用和可维护性。

**知识树**

1. **问题识别：组件职责过重**

    - App 组件直接操作：
        - `axios` 请求方法（`get`, `post`, `patch`, `delete`）；
        - 请求取消控制器 `AbortController`；
        - API 地址路径；
    - 表现为业务逻辑与通信逻辑混杂，耦合严重。

2. **解决方案：封装为用户服务模块**

    - 创建 `services/user-service.ts` 文件；
    - 创建 `UserService` 类：
        - 封装所有用户相关的网络请求方法，包括：
            - 获取所有用户；
            - 添加用户；
            - 更新用户；
            - 删除用户；
        - 组件中通过调用服务方法完成数据交互，隐藏实现细节。
    - 导出 `UserService` 的实例：
        - 使用 `export default new UserService();`，使得其他模块可以直接导入并使用这个单例。

3. **增强封装：返回请求和取消方法的组合对象**

    - `getAllUsers()` 方法不直接返回 Promise；
    - 而是返回 `{ request, cancel }`：
        - `request`: 异步调用对象；
        - `cancel`: 可中止请求的函数；
    - 组件通过结构赋值使用 `cancel()`，无需了解 `AbortController` 的存在。

4. **接口类型与职责归属**

    - 用户接口类型 `User` 应定义在 `user-service.ts` 中；
    - 并导出供其他模块复用。

5. **在组件中使用用户服务**

    - 导入 `userService` 和 `User` 接口：在 `App.tsx` 中导入。
    - 移除对 `apiClient` 的直接使用：组件不再直接调用 `apiClient`。
    - 调用 `userService` 的方法：
        - 获取用户：`userService.getAllUsers()`。然后解构返回的对象以获取 `request` 和 `cancel`。
        - 删除用户：`userService.deleteUser(user.id)`。
        - 创建用户：`userService.createUser(newUser)`。
        - 更新用户：`userService.updateUser(updatedUser)`。

6. **组件层逻辑简化**

    - 不再导入 `axios` 或 `apiClient`；
    - 所有 HTTP 交互通过 `userService` 完成；
    - 组件只处理 UI 和状态更新逻辑，职责单一。

7. **服务模块的复用性**

    - `userService` 可在任何需要用户数据的组件中复用；
    - 便于未来迁移（如迁移至 GraphQL、变更 API 路径）；
    - 测试更友好，可被 mock。

---

**代码示例**

1. `user-service.ts` 示例结构

    ```ts
    // services/user-service.ts
    import apiClient, { CanceledError } from "./api-client";

    export interface User {
      id: number;
      name: string;
    }

    class UserService {
      getAllUsers() {
        const controller = new AbortController();

        const request = apiClient.get<User[]>("/users", {
          signal: controller.signal,
        });

        return {
          request,
          cancel: () => controller.abort(),
        };
      }

      deleteUser(id: number) {
        return apiClient.delete(`/users/${id}`);
      }

      createUser(user: User) {
        return apiClient.post("/users", user);
      }

      updateUser(user: User) {
        return apiClient.patch(`/users/${user.id}`, user);
      }
    }

    export default new UserService();
    ```

2. `App.tsx` 中调用服务模块替代直接请求

    ```tsx
    import userService, { User } from "./services/user-service";

    // 获取用户
    const { request, cancel } = userService.getAllUsers();
    request
      .then(res => setUsers(res.data))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // 删除用户
    userService.deleteUser(user.id).catch(...);

    // 添加用户
    userService.createUser(newUser).then(...).catch(...);

    // 更新用户
    userService.updateUser(updatedUser).catch(...);
    ```

3. 提取前代码

```typescript
import axios, { CanceledError } from "axios";
interface User {
	id: number;
	name: string;
}
function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		const controller = new AbortController();
		axios
		.get<User[]>("https://jsonplaceholder.typicode.com/users",{ signal: controller.signal })
		.then((res) => {
			setUsers(res.data);
			setIsLoading(false);
		})
		.catch((err) => {
			if (err instanceof CanceledError) return;
			console.log(err);
			setError(err.message);
			setIsLoading(false);
		});
		return () => controller.abort()
	}, []);
}

```

4. 创建用户服务 (`src/services/user-service.ts`)

    ```typescript
    //user-service.ts
    import apiClient from "./api-client";// 导入上一节创建的 API 客户端

    // 将 User 接口移到这里并导出
    export interface User {
    	id: number;
    	name: string;
    }

    class UserService {
    	getAllUsers() {
    		const controller = new AbortController(); // 用于取消请求
    		const request = apiClient.get<User[]>("/users", {// 使用 apiClient 发送 GET 请求
    			signal: controller.signal,
    		});
    		 // 返回请求本身和取消函数
    		return { request, cancel: () => controller.abort() };
    	}

    	deleteUser(id: number) {
    		return apiClient.delete("/users/" + id); // 使用 apiClient 发送 DELETE 请求
    	}

    	// 假设创建用户时，后端需要一个 User 对象 (不含 id)，并返回创建好的 User 对象 (含 id)
    	createUser(user: Omit<User, 'id'>) { // Omit<User, 'id'> 表示一个没有 id 属性的 User 对象
    		return apiClient.post<User>("/users", user); // 使用 apiClient 发送 POST 请求
    	}

    	// 假设更新用户时，后端需要一个完整的 User 对象
    	updateUser(user: User) {
    		return apiClient.patch<User>("/users/" + user.id, user); // 使用 apiClient 发送 PATCH 请求
    	}
    }

    // 导出 UserService 的一个实例，使其成为单例
    export default new UserService();
    ```

    - `UserService` 类封装了所有与用户相关的 API 调用。例如，`getAllUsers` 方法内部处理了 `AbortController` 的创建和信号传递，并返回一个包含 `request` Promise 和 `cancel` 方法的对象。其他方法如 `deleteUser`, `createUser`, `updateUser` 则直接返回 `apiClient` 相应操作的 Promise。`User` 接口也在这里定义和导出。

5. 创建 API 客户端 (`src/services/api-client.ts`)

    ```typescript

    	import axios, { CanceledError } from "axios";
    	 // 创建一个 Axios 实例，并配置基础 URL
    	const apiClient = axios.create({
    		baseURL: "https://jsonplaceholder.typicode.com/",// 示例后端 URL
    		// headers: { // 如果需要，可以在这里设置通用的请求头
    		//   'api-key': 'YOUR_API_KEY'
    		// }
    	});
    	// 默认导出配置好的客户端实例
    	export default apiClient;
    	// 命名导出 CanceledError，方便其他地方统一引用
    	export { CanceledError };
    ```

    - 这里我们创建了一个名为 `apiClient` 的 `axios` 实例，并设定了 `baseURL`。这意味着以后使用 `apiClient` 发起请求时，如果请求路径是 `/users`，它会自动拼接成 `https://jsonplaceholder.typicode.com/users`。我们还从 `axios` 导入并重新导出了 `CanceledError`，这样其他模块就可以从我们的 `api-client` 模块获取它，而不是直接从 `axios` 获取。

6. 在组件中使用 API 客户端 (例如 `App.tsx`)

    ```TypeScript
    import userService, { User } from "./services/user-service"; // 导入用户服务和 User 接口
    // 不再需要: import apiClient from "./services/api-client";
    import { CanceledError } from "./services/api-client"; // CanceledError 仍从 api-client 导入或 axios
    import { useEffect, useState } from "react";

    function App() {
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
        setIsLoading(true);
        const { request, cancel } = userService.getAllUsers(); // 调用服务获取数据
        request
          .then((res) => {
            setUsers(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false);
          });

        return () => cancel(); // 组件卸载时调用取消函数
      }, []);

      const deleteUserHandler = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id));

        userService.deleteUser(user.id)
          .catch(err => {
            setError(err.message);
            setUsers(originalUsers); // 发生错误时回滚状态
          });
      };

      const addUserHandler = () => {
        const originalUsers = [...users];
        const newUser = { name: "New User " + Date.now() }; // 假设 id 由后端生成

        userService.createUser(newUser)
          .then(res => setUsers([res.data, ...users])) // res.data 是后端返回的包含 id 的用户对象
          .catch(err => {
            setError(err.message);
            setUsers(originalUsers);
          });
      };

      const updateUserHandler = (user: User) => {
        const originalUsers = [...users];
        const updatedUser = { ...user, name: user.name + " Updated" };
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));

        userService.updateUser(updatedUser)
          .catch(err => {
            setError(err.message);
            setUsers(originalUsers);
          });
      };


      return (
        <>
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <div className="spinner-border"></div>}
          <button className="btn btn-primary mb-3" onClick={addUserHandler}>Add User</button>
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item d-flex justify-content-between">
                {user.name}
                <div>
                  <button className="btn btn-outline-secondary mx-1" onClick={() => updateUserHandler(user)}>Update</button>
                  <button className="btn btn-outline-danger" onClick={() => deleteUserHandler(user)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      );
    }

    export default App;
    ```

    - 组件现在通过导入的 `userService` 实例来调用其方法（如 `getAllUsers`, `deleteUser` 等），而不再直接与 `apiClient` 或 HTTP 请求的底层细节打交道。获取用户列表的逻辑也相应调整，以使用从 `userService.getAllUsers()` 返回的 `request` 和 `cancel`。

## 16.创建通用的 HTTP 服务

> 简述：通用 HTTP 服务是一个可重用的类，它使用 TypeScript 泛型来处理不同数据类型的 HTTP 操作（如获取全部、创建、删除、更新）。通过将端点（endpoint）作为参数传递给其构造函数或创建函数，可以为应用中任何类型的资源（如用户、帖子、评论等）快速生成一个具体的数据服务，从而极大减少了为每种资源编写相似服务类的重复代码。

---

**知识树**

1. **问题识别：多个服务代码重复**

    - `UserService`、`PostService` 等结构雷同，仅请求路径与数据类型不同。
    - 重复代码不易维护，增加修改成本。

2. **解决方案：抽象为泛型服务类**

    - 使用 TypeScript 的泛型参数 `<T>` 创建通用的 `HttpService<T>`；
    - 方法包含：`getAll()`, `create(entity: T)`, `update(entity: T)`, `delete(id: number)`；
    - 类通过构造函数接收 `endpoint` 参数，用于组合请求 URL。

3. **设计关键点**

    - **泛型参数 T**：表示服务操作的数据类型；
    - **泛型约束 `T extends Entity`**：确保 `update()` 操作中可访问 `id` 属性；
    - **Entity 接口**：提供结构约束（如 `{ id: number }`）；
    - **构造函数注入端点**：将每个资源的路径 (`/users`, `/posts`) 作为参数传入，确保服务复用性；
    - **封装实例工厂 `create()`**：避免导出硬编码服务实例。

4. **实现通用 HTTP 服务类 (`HttpService`)**

    - **泛型参数 (`<T>`)**:
        - 类定义：`class HttpService<T>`。`T` 代表服务将要处理的数据实体的类型（如 `User`, `Post`）。
        - 方法定义：在需要返回或接收特定类型数据的方法中使用 `T`。例如 `getAll(): Promise<T[]>`, `create(entity: T): Promise<T>`。
    - **端点 (`endpoint`) 管理**:
        - 属性：类中包含一个 `endpoint: string` 属性。
        - 构造函数：`constructor(endpoint: string)`，用于在创建服务实例时传入该服务对应的 API 端点 (e.g., `/users`, `/posts`)。
    - **通用 CRUD 方法**:
        - `getAll<R = T>()`: 获取资源列表。使用泛型参数 `R` (默认为 `T`) 使得返回类型可以更灵活。内部调用 `apiClient.get<R[]>(this.endpoint)`。
            - 注意：视频中 `getAll` 的泛型定义为 `getAll<T>()`，这里写 `getAll<R = T>()` 是一种更通用的写法，允许在调用时覆盖泛型类型，如果需要返回的数据结构与服务实例的 `T` 不同，但通常情况下 `R` 会是 `T`。为了与视频保持一致，笔记将使用 `getAll<T>()`。
        - `delete(id: number)`: 删除指定 ID 的资源。内部调用 `apiClient.delete(`this.endpoint/{id}`)`。
        - `create<E = T>(entity: E)`: 创建新资源。`E` 是传入实体的类型。内部调用 `apiClient.post<T>(this.endpoint, entity)`。
        - `update<E extends { id: number } = T extends { id: number } ? T : any>(entity: E)`: 更新资源。
            - **类型约束 (`T extends Entity` 或 `entity: { id: number }`)**: 为了在 `update` 方法中安全地访问 `entity.id`，需要对泛型 `T` (或参数 `entity` 的类型) 添加约束，确保它拥有一个 `id: number` 属性。
            - 定义一个 `Entity` 接口：`interface Entity { id: number; }`，然后约束 `T extends Entity`。
            - 内部调用 `apiClient.patch<T>(`this.endpoint/{entity.id}`, entity)`。
    - **请求取消逻辑的封装 (针对 `getAll`)**:
        - 与 `UserService` 类似，`getAll<T>()` 方法返回 `{ request, cancel }` 对象。

5. **重构 `user-service.ts`**

    - 删除原有的 `UserService` 类实现。
    - 导入 `http-service.ts` 中的 `createHttpService` 工厂函数。
    - 导入（或重新定义）`User` 接口。
    - 调用 `createHttpService<User>('/users')` 来创建一个专门处理用户数据的服务实例，并将其导出。

6. **更新组件中的方法调用 (如果方法名有变动)**

    - 如果通用服务中的方法名与之前特定服务中的方法名不同 (e.g., `getAllUsers` 变为 `getAll`)，需要在组件中更新调用。
    - 为泛型方法提供类型参数：调用泛型方法时（如 `getAll<User>()`），需要明确指定类型参数。

7. **命名一致性与迁移成本降低**

    - 所有服务方法统一命名（如 `create`, `update`, `getAll`, `delete`）；
    - 若迁移到 GraphQL 或替换请求库，只需修改底层 HttpService 实现，无需改动使用方式。

**代码示例**

1.  通用 `HttpService<T>` 封装

    ````typescript
    // services/http-service.ts
    import apiClient from "./api-client";

    // 定义一个实体接口，约束泛型 T 必须有 id 属性，用于 update 和 deleteById 等操作
    interface Entity {
    id: number;
    }

        class HttpServic{ // T 现在被约束为必须符合 Entity 接口
        	private endpoint: string;

        	constructor(endpoint: string) {
        		this.endpoint = endpoint;
        	}

          getAll<T>() {
            const controller = new AbortController();
            const request = apiClient.get<T[]>(this.endpoint, {
              signal: controller.signal,
            });

            return { request, cancel: () => controller.abort() };
          }

          create(entity: T) {
            return apiClient.post(this.endpoint, entity);
          }

    //为了在 `update` 方法中安全地访问 `entity.id`，需要对泛型 `T` (或参数 `entity` 的类型) 添加约束，确保它拥有一个 `id: number` 属性。
    update<T extends Entity>((entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
    }

          delete(id: number) {
            return apiClient.delete(`${this.endpoint}/${id}`);
          }
        }

        //以前是export default new HttpService('/user') 导出该类的示例
        //现在是导出一个函数开创建该类的实例
        const create = (endpoint: string) =>
          new HttpService(endpoint);

        export default create;
        ```

    ````

2.  基于泛型构造具体服务实例

    ```ts
    // services/user-service.ts
    import create from "./http-service";

    export interface User {
      id: number;
      name: string;
    }

    export default create<User>("/users");
    ```

3.  在组件中使用泛型服务

    ```ts
    import userService, { User } from "./services/user-service";

    const { request, cancel } = userService.getAll<User>();
    request.then(res => setUsers(res.data)).catch(...);

    userService.create(newUser).then(...);
    userService.update(updatedUser).catch(...);
    userService.delete(user.id).catch(...);
    ```

## 17.提取可复用逻辑为自定义 Hook：`useUsers`

> 简述：当多个组件需要重复使用相同的状态逻辑（如数据获取、错误处理、加载状态），可以将逻辑封装为自定义 Hook。自定义 Hook 本质上是一个函数，遵循命名约定 `useX`，用于共享 `state` 和 `effect` 等 React 内部机制。

**知识树**

1. **问题识别：跨组件逻辑重复**

    - 多个组件需要需要获取和展示用户列表，它们将重复以下逻辑：：
        - `users` 状态；
        - `isLoading` 加载状态；
        - `error` 错误信息；
        - `useEffect` 发起请求；
    - 会导致代码重复、维护困难。

2.
3. **解决方案：创建自定义 Hook (e.g., `useUsers`)**
    - 目的：封装通用的数据获取、状态管理和副作用逻辑，使其可以在不同组件间共享。
    - 命名约定：自定义 Hook 的名称通常以 `use` 开头 (e.g., `useUsers`, `useDataFetching`)。
    - 步骤：
        - 创建 `hooks` 文件夹（约定俗成，用于存放自定义 Hooks）。
        - 在 `hooks` 文件夹下创建 `useUsers.ts` 文件。
4. **实现自定义 Hook (`useUsers`)**
    - 定义一个普通函数：`function useUsers() { ... }`。
    - **内部逻辑迁移**：将原组件中与数据获取相关的逻辑移入此函数：
        - `useState` 声明：`users`, `error`, `isLoading` 及其对应的 `set` 函数。
        - `useEffect` Hook：包含数据请求的完整逻辑 (调用 `userService.getAll()`、处理响应、错误、加载状态，以及返回清理函数 `cancel`)。
    - **依赖项导入**：确保 Hook 内部导入了所有必要的依赖，如 `useState`, `useEffect`, `userService`, `User` 接口, `CanceledError`。
    - **返回值**：Hook 函数需要返回组件所需要的数据和操作函数。通常返回一个对象，包含：
        - 数据：`users`
        - 状态：`error`, `isLoading`
        - 操作数据的函数 (如果需要从组件外部修改状态)：`setUsers`, `setError` (根据实际需求，并非所有 setter 都必须返回)。
5. **在组件中使用自定义 Hook**
    - 导入自定义 Hook：`import useUsers from './hooks/useUsers';`。
    - 调用 Hook：在组件函数体顶层调用 `const { users, error, isLoading, setUsers, setError } = useUsers();`。
    - 使用返回的值：就像直接在组件中声明的状态和函数一样使用它们。
6. **自定义 Hook 的泛型化 (进阶)**
    - 虽然本节的 `useUsers` 是特定的，但可以进一步将自定义 Hook 设计为通用的 `useDataFetching(serviceMethod)`，接收一个服务方法作为参数，使其能用于获取任何类型的数据。本节重点是 `useUsers` 的创建。
7. **效果**

    - 逻辑复用：数据获取和相关状态管理的逻辑只需编写一次，即可在多个组件中使用。
    - 组件简化：组件代码变得更简洁，更专注于 UI 展示和特定交互，因为它将数据获取的复杂性委托给了 Hook。
    - 可测试性：自定义 Hook 本质上是函数，可以独立于组件进行测试。
    - 关注点分离：进一步将数据获取的关注点从组件中分离出来。

8. **自定义 Hook 的优势**

    - 关注点清晰（可测试性强）；
    - 状态可控（外部仍可通过 `setUsers` 调整）；
    - 逻辑抽象（仅暴露必要的状态，不暴露实现细节）；
    - 与组件生命周期自动绑定。

---

**代码示例**

1. 创建自定义 Hook (`src/hooks/useUsers.ts`)

    ```TypeScript
    import { useState, useEffect } from "react";
    import userService, { User } from "../services/user-service"; // 确保路径正确
    import { CanceledError } from "../services/api-client"; // 或从 axios 导入

    const useUsers = () => {
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
        setIsLoading(true);
        const { request, cancel } = userService.getAll(); // 获取所有用户
        request
          .then((res) => {
            setUsers(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) {
              // 如果请求被取消，通常不需要设置错误状态或停止加载（除非特定逻辑需要）
              // 可以选择在这里 return，或者根据需求处理
              // setIsLoading(false); // 取消时也应停止加载
              return;
            }
            setError(err.message);
            setIsLoading(false);
          });

        // 清理函数，在组件卸载或 effect 重新运行时执行
        return () => {
          cancel();
          // console.log("Request cancelled by cleanup");
        };
      }, []); // 空依赖数组，表示此 effect 只在组件挂载和卸载时运行一次

      // 返回组件可能需要用到的状态和更新函数
      return { users, error, isLoading, setUsers, setError, setIsLoading };
    };

    export default useUsers;
    ```

    - `useUsers` Hook 封装了获取用户数据所需的所有状态（`users`, `error`, `isLoading`）和副作用（`useEffect` 中的数据请求逻辑）。它返回一个包含这些状态和它们的更新函数的对象，供使用此 Hook 的组件消费。

2. 在组件中使用自定义 Hook

    ```tsx
    // App.tsx
    import useUsers from "./hooks/use-users";

    const { users, error, isLoading, setUsers, setError } = useUsers();

    // 可继续使用 setUsers() 处理 create / update / delete 逻辑
    ```

React 项目

# 技巧

1.[babeljs.io/repl ](https://www.babeljs.io/repl)这个网站可以看到 JavaScript XML（JavaScript 扩展语法）是如何转换成 JavaScript 的。

```tsx
<h1>Hello World</h1>
```

```js
'use strict"
/*#__PURE__*/ React.createElement("h1", null, "Hello World");
```

2.**命令面板**（按 `Ctrl + Shift + P` / `Cmd + Shift + P`）

1.**Prettier 格式化代码**格式化代码时，我们可能会遇到格式化工具冲突。打开 **命令面板**，选择 `Format Document`。然后，选择 **Prettier** 作为默认代码格式化工具。

- 快捷键：

    - **Mac**：`Shift + Command + P`

    - **Windows**：`Shift + Control + P`

        2.通过 `<div>` 将所有元素包裹起来:**命令面板**搜索`wrap with abbreviation`,按 `Enter`，在输入框中输入 `div`，然后按 `Enter`

        2.**快捷创建**：使用 VSCode 的 React 代码片段（rfc）快速生成函数式组件模板

安装 vscode 扩展`ES7`,在`.tsx`文件中输入`rafce`可以快速输出

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

4.vscode 中标签快捷键`div.mb-3>label.form-label+input.form-control`

```js
<div className="mb-3">
	<label className="form-label" htmlFor="name">
		Name
	</label>
	<input className="form-control" id="name" />
</div>
```

# 目录

> https://codewithmosh.com/p/the-ultimate-full-stack-javascript-developer-bundle-2024-edition
> 按照 mosh 的课程顺序学习

    ### 1. **Getting Started (2 分钟)**

    1. 欢迎
    2. 学习前提

    ### 2. **Getting Started with React (18 分钟)**

    3. 什么是 React
    4. 设置开发环境
    5. 创建 React 应用
    6. 项目结构
    7. 创建 React 组件
    8. React 的工作原理

    ### 3. **Building Components (1 小时)**

    9. 介绍
    10. 创建 ListGroup 组件
    11. 使用 Fragments
    12. 渲染列表
    13. 条件渲染
    14. 处理事件
    15. 管理状态
    16. 通过 Props 传递数据
    17. 通过 Props 传递函数
    18. 状态 vs Props
    19. 传递 Children
    20. 使用 React Dev Tools 检查组件
    21. 练习：构建按钮组件
    22. 练习：显示警告框

    ### 4. **Styling Components (32 分钟)**

    23. 介绍
    24. 使用 Vanilla CSS（传统 CSS）
    25. 使用 CSS Modules
    26. 使用 CSS-in-JS
    27. 关注点分离（Separation of Concerns）
    28. 内联样式
    29. 流行的 UI 库
    30. 添加图标
    31. 练习：使用 CSS Modules
    32. 构建 Like 组件

    ### 5. **Managing Component State (42 分钟)**

    33. 介绍
    34. 理解 State Hook
    35. 选择 State 结构
    36. 理解严格模式（Strict Mode）
    37. 更新数组对象
    38. 更新数组
    39. 使用 Immer 简化更新逻辑
    40. 更新嵌套对象
    41. 保持组件的纯粹性
    42. 共享 State between 组件
    43. 更新对象
    44. 练习：构建一个可展开的文本组件

    ### 6. **Building Forms (71 分钟)**

    45. 介绍
    46. 构建表单
    47. 受控组件
    48. 访问输入字段
    49. 提交表单
    50. 使用 React Hook Form 管理表单
    51. 应用表单验证
    52. 使用 Zod 进行基于模式的验证
    53. 禁用提交按钮
    54. 构建 ExpenseForm（费用表单）
    55. 构建 ExpenseFilter（费用过滤器）
    56. 构建 ExpenseList（费用列表）
    57. 添加费用
    58. 集成 React Hook Form 和 Zod

    ### 7. **Connecting to the Backend (69 分钟)**

    59. 介绍
    60. 理解 Effect Hook
    61. 理解 HTTP 请求
    62. 使用 Async/Await
    63. 取消 Fetch 请求
    64. 显示加载指示器
    65. 提取可重用的 API 客户端
    66. 创建数据
    67. 更新数据
    68. 删除数据
    69. 处理错误
    70. 创建自定义数据获取 Hook
    71. 提取用户服务（User Service）
    72. 提取通用 HTTP 服务
    73. 更新数据
    74. 清理 Effect
    75. Effect 依赖关系

    ### 8. **Project - Building a Video Game Discovery App (3 小时)**

    76. 我们要构建什么
    77. 设置项目
    78. 安装 Chakra UI
    79. 构建导航栏
    80. 构建颜色模式切换
    81. 实现暗黑模式
    82. 创建响应式布局
    83. 创建自定义的游戏数据获取 Hook
    84. 获取游戏数据
    85. 获取平台信息
    86. 获取游戏的类型（Genres）
    87. 显示平台图标
    88. 创建游戏卡片
    89. 获取优化的图片
    90. 改进用户体验，使用加载骨架屏
    91. 显示评论分数（Critic Score）
    92. 重构：去除重复样式
    93. 显示游戏类型（Genres）
    94. 按类型过滤游戏
    95. 显示加载中的 spinner
    96. 修复 Chakra 菜单的问题
    97. 按平台过滤游戏
    98. 构建排序选择器
    99. 构建平台选择器
    100. 处理没有图片的游戏
    101. 排序游戏
    102. 高亮显示所选类型
    103. 重构：提取查询对象
    104. 自定义 Chakra 主题
    105. 添加表情符号（Emojis）
    106. 清理游戏卡片
    107. 添加动态标题
    108. 提交静态数据
    109. 搜索游戏
    110. 构建搜索输入框
    111. 清理游戏类型
    112. 重构游戏网格
    113. 部署到 Vercel
    114. 课程总结
    115. 接下来的步骤
