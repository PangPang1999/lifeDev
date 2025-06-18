# 第一章

技巧
commond+g :31 可以跳到 31 行
commond+p 查找文件
commond+T 查找方法名

## 1- 简介

> 简述：本课程是 React 终极课程的第二部分，将探讨中级主题，如使用 React Query 管理和缓存数据、使用 Zustand 进行全局状态管理以及使用 React Router 进行路由。课程将继续完善第一部分构建的 Game Hub 项目。

**知识树**

1.  课程定位：React 终极课程第二部分，中级水平。
2.  核心技术栈扩展：
    - React Query：数据管理与缓存。
    - Zustand：全局状态管理。
    - React Router：路由。
3.  项目增强 (Game Hub)：
    - 添加缓存机制以提升性能。
    - 实现无限滚动加载新游戏。
    - 添加游戏详情页面。
4.  学习目标：
    - 构建健壮且可扩展的 React 和 TypeScript Web 应用。
    - 完成一个可用于作品集展示的项目。

**代码示例**

（本节无代码）

## 2- 先决条件

> 简述：学习本课程需要掌握 React 和 TypeScript 的基础知识，包括组件构建、样式、状态管理和后端服务调用。建议先完成本系列课程的第一部分。

**知识树**

1.  前置知识：
    - React 基础：
        - 组件构建。
        - 组件样式化。
        - 组件状态管理。
    - TypeScript 基础。
    - 后端服务调用。
2.  课程衔接：本课程是系列课程的第二部分，基于第一部分所授内容。

**代码示例**

（本节无代码）

## 3- 你将学到什么

> 简述：本课程将涵盖三个核心主题：使用 React Query 进行数据管理和缓存，使用 Zustand 进行全局状态管理，以及使用 React Router 实现多页面应用路由。

**知识树**

1.  React Query (数据管理与缓存)：
    - 替代 `useEffect` 进行数据获取、错误处理和加载状态管理。
    - 内置功能：缓存、自动重试、自动刷新。
    - 高级查询：分页查询、无限滚动查询。
    - 项目应用：为 Game Hub 添加缓存和无限滚动。
2.  全局状态管理 (Zustand)：
    - React 内置工具：Reducers, Context, Providers。
    - Zustand：一个流行的轻量级状态管理库。
    - （本课程不涉及 Redux，因其已有专门课程，且现代工具使其不再是必需品）。
3.  路由 (React Router)：
    - 构建多页面应用程序。
    - 项目应用：为 Game Hub 添加游戏详情页面。

**代码示例**

（本节无代码）

## 4- 如何学习本课程

> 简述：高效学习本课程的建议：完整观看、做笔记、课后练习、完成习题、遇到问题时积极搜索或在论坛提问，并多加实践。

**知识树**

1.  学习方法：
    - 完整观看：按顺序学习，每节课都有新内容。
    - 笔记记录：记录关键点，帮助记忆。
    - 课后复现：动手操作，巩固理解。
    - 完成练习：强化概念，体验乐趣。
2.  问题解决：
    - 正视困难：遇到问题是学习过程的正常部分。
    - 自主搜索：遇到错误或不理解之处，先尝试 Google 搜索。
    - 论坛求助：若搜索无果，可在 `forum.codewithmosh.com` 提问。
    - 互助学习：参与论坛讨论，帮助他人亦能加深自身理解。
3.  实践核心：多编码、多实验，熟能生巧。

**代码示例**

（本节无代码）

## 5- 源代码

> 简述：课程提供四个 GitHub 仓库：`playground-starter` (用于独立概念探索的空项目)、`playground-finish` (概念探索的完整代码)、`game-hub-starter` (第一部分结束时的 Game Hub 项目，作为本课程起点) 和 `game-hub-finish` (本课程结束时的 Game Hub 完整项目，包含每节课的 commit)。

**知识树**

1.  GitHub 仓库：
    - `playground-starter`: 基础空项目，用于隔离学习新概念。
    - `playground-finish`: `playground-starter` 的完成版，包含视频演示代码。
    - `game-hub-starter`: 第一部分课程结束时的 Game Hub 项目，作为本部分课程的起点。
        - 建议克隆此仓库以保证与课程内容一致。
    - `game-hub-finish`: 第二部分课程结束时的 Game Hub 项目最终代码。
        - 每个课程对应一个 commit，commit message 与课程名称相同，便于查找特定课程的代码。
2.  `game-hub-starter` 项目设置步骤：
    - 克隆仓库。
    - 运行 `npm install` 安装依赖。
    - 在 `rawg.io` 注册并获取 API 密钥。
    - 将 API 密钥添加到项目指定文件 (通常是 `.env` 或配置文件，具体查看 `README.md`)。
    - 运行 `npm run dev` 启动开发服务器。

**代码示例**

1.  `game-hub-starter` 设置命令 (终端中):
    ```bash
    # git clone <repository_url> # 克隆 game-hub-starter 仓库
    # cd game-hub-starter
    npm install
    # (根据 README 指引配置 API 密钥)
    npm run dev
    ```

# 第二章- React Query

## 1- 简介

> 简述：本节将深入探讨使用 React Query 库进行数据获取和更新的核心机制。内容分为数据查询、数据变更及项目实践三部分，旨在全面掌握 React Query 在构建复杂应用中的数据交互能力。

**知识树**

1.  React Query 核心功能：管理 React 应用中的异步数据（获取、缓存、同步、更新）。
2.  学习路径规划：
    - **第一部分：数据查询 (Querying Data)**
        - 从 API 获取数据。
        - 错误处理机制。
        - 实现分页查询。
        - 实现无限滚动查询 (Infinite Queries)。
        - 使用 React Query DevTools 进行调试。
    - **第二部分：数据变更 (Mutating Data)**
        - 处理 CRUD (创建、读取、更新、删除) 操作。
        - 实现乐观更新 (Optimistic Updates)。
        - 创建自定义 Hooks 和可复用服务进行数据变更。
    - **第三部分：项目实践**
        - 将所学知识应用于 Game Hub 项目。
        - 实现缓存和无限滚动功能。
        - 代码重构与改进。

**代码示例**

(本节为介绍性内容，无特定代码示例)

## 2- React Query 是什么

> 简述：React Query 是一个强大的库，专门用于简化 React 应用中数据获取、缓存、同步和更新服务器状态的复杂性，解决了传统`useEffect` + `useState`方式带来的诸多问题。

1. todolist 的缺点：
    1. 没有清除请求，=》没有取消请求，如果组件被卸载（strict mode)
    2. 没有做到组件化，将可复用组件分离出来=>提取查询逻辑，并将其封装在一个钩子函数中
    3. 没有重试失败的请求
    4. 没有自动刷新
    5. 没有缓存
2. react query 的作用：获取和缓存数据

**知识树**

1.  传统数据获取方式 ( `useEffect` + `useState` ) 的问题：
    - **请求取消处理缺失**：组件卸载时未取消进行中的 HTTP 请求，可能导致状态更新到已卸载组件的警告，并在严格模式下（双重渲染）获取两次数据。
    - **关注点未分离**：数据查询逻辑直接嵌入组件，导致代码重复，难以复用和维护。解决方案是提取到自定义 Hook 中。
    - **缺乏失败重试机制**：请求失败后通常直接显示错误，用户体验不佳。
    - **无自动刷新**：服务器数据更新后，客户端数据不会自动同步，除非手动刷新页面。
    - **无内置缓存**：每次需要数据时都需重新从服务器获取，影响性能。
2.  缓存 (Caching) 概念：
    - 定义：将数据存储在易于快速访问的位置（如客户端浏览器内存），以备将来高效使用。
    - 目的：减少对服务器的请求，提升应用性能和响应速度。
3.  React Query 的核心价值：
    - 解决上述所有问题：提供内置的请求取消、关注点分离（通过其 Hook 结构）、自动重试、自动刷新和强大的缓存机制。
4.  React Query vs. Redux (用于缓存)：
    - Redux：一个通用的 JavaScript 应用状态管理库，常被用作客户端缓存。
        - 缺点：学习曲线陡峭，样板代码多，可能增加应用复杂度和调试难度。
    - React Query：专注于服务器状态管理，更轻量、简单。
        - 优势：对于数据获取和缓存场景，通常比 Redux 更直接和高效。
    - 建议：在新项目中，优先考虑使用 React Query 进行服务器状态管理和缓存，而非 Redux。

**代码示例**

1.  传统数据获取方式 (存在问题的示例)

    ```tsx
    // ToDoList.tsx (传统方式)
    import { useEffect, useState } from 'react';
    import axios from 'axios';

    interface Todo {
      id: number;
      title: string;
      completed: boolean;
    }

    function TodoListTraditional() {
      const [todos, setTodos] = useState<Todo[]>([]);
      const [error, setError] = useState('');

      useEffect(() => {
        axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .then(res => setTodos(res.data))
          .catch(err => setError(err.message));
        // 问题1: 未取消请求
        // 问题2: 查询逻辑在组件内
        // 问题3: 无重试
        // 问题4: 无自动刷新
        // 问题5: 无缓存
      }, []);

      if (error) return <p>{error}</p>;

      return (
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
    ```

## 3- 设置 React Query

> 简述：集成 React Query 到项目中需要安装相关包，并使用`QueryClient`和`QueryClientProvider`在应用的根级别进行配置，为整个应用提供 React Query 的功能。

**知识树**

1.  安装 React Query：
    - 命令：`npm install @tanstack/react-query@4.28.0`
    - 版本锁定：为保证教程一致性，可安装特定版本，如 `@tanstack/react-query@4.28.0`。
2.  核心组件与对象：
    - `QueryClient`：
        - 定义：React Query 的核心对象，负责管理查询的缓存、状态以及执行查询和变更的逻辑。
        - 实例化：`const queryClient = new QueryClient();`
    - `QueryClientProvider`：
        - 定义：一个 React Context Provider 组件，用于将`QueryClient`实例提供给其后代组件。
        - 用法：在应用的根组件（如`App`）外层包裹此 Provider，并通过`client` prop 传入`QueryClient`实例。
3.  配置步骤：
    - 在项目主入口文件（如`main.tsx`或`index.js`）中：
        1.  导入`QueryClient`和`QueryClientProvider`：
            `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';`
        2.  创建`QueryClient`新实例: `const queryClient = new QueryClien
        3.  使用`QueryClientProvider`包裹根应用组件，并将`queryClient`实例通过`client` prop 传递。

**代码示例**

1.  在`main.tsx`中配置 React Query

    ```tsx
    // src/main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import App from './App';

    // 1. 创建QueryClient实例
    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        {/* 2. 使用QueryClientProvider包裹App，并传入client */}
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );
    ```

## 4- useQuery 获取数据

> 简述：React Query 使用`useQuery` Hook 来执行数据获取操作。通过配置`queryKey`（用于缓存的唯一标识）和`queryFn`（实际获取数据的函数），`useQuery`会自动处理加载状态、错误、数据缓存及重试等。

**知识树**

1.  `useQuery` Hook：
    - 导入：`import { useQuery } from '@tanstack/react-query';`
    - 用途：用于声明式地获取、缓存和同步异步数据。
    - 配置对象参数：接收一个包含至少`queryKey`和`queryFn`的对象。
2.  `queryKey`：

    - 定义：一个数组，查询键用于唯一标识和缓存一次数据请求，React Query 内部使用它来缓存和管理数据。同时，它也允许你手动与缓存交互，例如在数据变更后更新缓存或手动使某些查询失效。
    - 结构：
        - 第一个元素通常是描述数据类型的字符串（如`['todos']`）。
        - 可以包含更多元素以区分不同的查询实例（如`['todos', { completed: true }]`或`['todo', todoId]`）。

3.  `queryKey`用法和特点：

    1.  唯一标识 ：
        - queryKey 必须是唯一的，用于区分不同的查询数据。
        - React Query 内部使用 queryKey 来存储和检索缓存数据。
    2.  格式 ：
        - queryKey 必须是一个数组。
        - 数组的元素可以是字符串、数字或可序列化的对象。
    3.  简单用法 (常量数组) ：

        - 适用于通用的列表或非层级资源。
        - 例如： ['todos'] 用于获取所有待办事项， ['something', 'special'] 用于其他特定数据。

        ```
        useQuery({ queryKey: ['todos'], queryFn: 
        fetchTodos });
        useQuery({ queryKey: ['something', 
        'special'], queryFn: 
        fetchSomethingSpecial });
        ```

    4.  带变量的数组键 ：

        - 当查询需要额外信息来唯一描述数据时使用。
        - 适用于层级或嵌套资源，通常传递 ID、索引或其他参数。
        - 也适用于带有额外参数的查询，通常传递一个包含选项的对象。
        - 例如：
            - 获取单个 todo： ['todo', 5] (5 是 todo 的 ID)
            - 获取预览格式的单个 todo： ['todo', 5, { preview: true }]
            - 获取已完成的 todos 列表： ['todos', { type: 'done' }]

        ```
        // 获取 ID 为 5 的 todo
        useQuery({ queryKey: ['todo', 5], queryFn: 
        () => fetchTodoById(5) });

        // 获取已完成的 todos，并按名称排序
        useQuery({ queryKey: ['todos', { type: 
        'done', sortBy: 'name' }], queryFn: 
        fetchFilteredTodos });
        ```

    5.  作为查询函数的依赖项 ：

        - queryKey 的行为类似于 React useEffect Hook 的依赖数组。 2
        - 如果你的查询函数依赖于某个变量，那么这个变量 必须 包含在 queryKey 中。 2
        - 当 queryKey 中的任何依赖变量发生变化时，React Query 会自动重新获取数据（取决于 staleTime 等配置）。 1 2

        ```
        function Todos({ todoId }) {
          const result = useQuery({
            queryKey: ['todos', todoId], // todoId 
            是依赖项
            queryFn: () => fetchTodoById(todoId),
          });
        }
        ```

    6.  确定性哈希 ：

        - queryKey 会被确定性地哈希。这意味着对象中键的顺序不影响最终的哈希值。
        - 例如， ['todos', { status, page }] 和 ['todos', { page, status }] 会被认为是相同的键。
        - 但是，数组中元素的顺序 确实 重要。 ['todos', status, page] 和 ['todos', page, status] 是不同的键。

    7.  与 useInfiniteQuery 的区别 ：

        - 不能为 useQuery 和 useInfiniteQuery 使用相同的 queryKey ，因为它们共享同一个查询缓存，但无限查询的数据结构与普通查询不同。

        ```
        // 正确的做法
        useQuery({ queryKey: ['todos'], queryFn: 
        fetchTodos });
        useInfiniteQuery({ queryKey: 
        ['infiniteTodos'], queryFn: 
        fetchInfiniteTodos });
        ```

    8.  手动交互 ：
        - queryKey 对于手动与缓存交互（如 invalidateQueries , setQueryData ）至关重要。这些方法通常支持模糊匹配 queryKey 。
            总而言之， queryKey 是 React Query 中用于数据缓存、自动刷新和手动缓存管理的核心机制。合理地组织和使用 queryKey 对于构建高效、可维护的 React Query 应用非常重要。
        - 重要性：`queryKey`的唯一性和稳定性对缓存行为至关重要。

4.  `queryFn`：
    - 定义：一个返回 Promise 的函数，负责实际执行数据获取操作（如 API 调用）。
    - Promise 结果：
        - 成功时：Promise 应 resolve 为获取到的数据。
        - 失败时：Promise 应 reject 或抛出一个错误。
    - 数据提取：通常需要从 HTTP 响应中提取实际数据（如`response.data`）。
    - 可封装性：可以将`queryFn`的逻辑提取到独立的函数中，以提高可读性和复用性。
5.  `useQuery`的返回值：
    - 一个查询对象，包含多个有用的属性，如：
        - `data`: (any | undefined) 查询成功时获取到的数据。
        - `error`: (Error | null) 查询失败时的错误对象。
        - `isLoading`: (boolean) 查询是否正在进行中（首次加载）。
        - `isFetching`: (boolean) 查询是否正在获取数据（包括后台刷新）。
        - `status`: ('loading' | 'error' | 'success') 查询的当前状态。
        - 其他状态和方法：`isSuccess`, `isError`, `refetch`等。
    - 可以直接解构所需属性: `const { data, error, isLoading } = useQuery(...)`。
6.  TypeScript 类型支持：
    - 为`axios.get<Todo[]>(...)`等 HTTP 请求库调用指定泛型参数，确保`queryFn`返回的 Promise 类型正确。
    - `useQuery`本身也可以接受泛型参数来指定`data`和`error`的类型，例如`useQuery<Todo[], Error>(...)`。
7.  React Query 的内置优势：
    - 自动重试：默认情况下，失败的请求会自动重试若干次。
    - 自动刷新：可配置在特定条件下（如窗口聚焦、网络重连）自动重新获取数据。
    - 缓存：获取的数据会自动缓存，后续对相同`queryKey`的请求可能直接从缓存读取。

**代码示例**

1.  使用`useQuery`获取 Todos 列表

    ```tsx
    // ToDoList.tsx
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    interface Todo {
      id: number;
      title: string;
      completed: boolean;
    }

    // 封装的queryFn
    const fetchTodos = (): Promise<Todo[]> =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data);

    function TodoList() {
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todos'], // 唯一查询键
        queryFn: fetchTodos, // 获取数据的函数
      });

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      return (
        <ul>
          {/* 使用可选链，因为todos在加载完成前可能为undefined */}
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
    export default TodoList;
    ```

## 5- 处理错误

> 简述：`useQuery` Hook 返回的查询对象中包含`error`属性，用于捕获和处理数据获取过程中发生的错误。通过为`useQuery`指定错误类型，可以获得更好的 TypeScript 类型支持。

需要为`useQuery`指定错误类型

**知识树**

1.  `error`属性：
    - 来源：`useQuery`返回的查询对象的一部分。
    - 值：
        - 如果查询成功，`error`为`null`。
        - 如果查询失败（`queryFn`返回的 Promise 被 reject 或抛出错误），`error`将持有该错误对象。
2.  错误类型：
    - 默认类型：`useQuery`默认将`error`的类型推断为`unknown`，因为 React Query 无法预知`queryFn`可能抛出的具体错误类型。
    - 指定错误类型：通过`useQuery`的泛型参数可以显式指定错误类型。
        - `useQuery<TData, TError>(...)`
        - `TError`：期望的错误对象类型。例如，如果使用 Axios，错误通常是`Error`的实例或 Axios 特有的错误类型。
        - 示例：`useQuery<Todo[], Error>({...})`，此时`error`属性的类型将是`Error | null`。
3.  在 UI 中显示错误：
    - 条件渲染：检查`error`属性是否存在，如果存在，则显示错误信息（如`error.message`）。
    - 示例：`if (error) return <p>{error.message}</p>;`

**代码示例**

1.  处理并显示`useQuery`中的错误

    ```tsx
    // ToDoList.tsx (部分，已在上一节示例中包含错误处理)
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    interface Todo { /* ... */ }

    const fetchTodosWithError = (): Promise<Todo[]> => {
      // 模拟一个可能失败的请求
      return axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/non-existent-todos') // 错误的URL
        .then(res => res.data);
    };

    function TodoListWithErrorHandling() {
      // 指定数据类型为Todo[], 错误类型为Error
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todosErrorDemo'],
        queryFn: fetchTodosWithError,
      });

      if (isLoading) return <p>Loading...</p>;

      // 检查error属性并显示错误消息
      if (error) return <p>Error fetching todos: {error.message}</p>;

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
    export default TodoListWithErrorHandling;
    ```

## 6- 显示加载指示器

> 简述：`useQuery` Hook 返回的查询对象中的`isLoading`属性是一个布尔值，用于指示数据是否正在首次加载。利用此属性可以方便地在 UI 中显示加载状态（如文本提示或加载动画）。

**知识树**

1.  `isLoading`属性：
    - 来源：`useQuery`返回的查询对象的一部分。
    - 含义：
        - `true`：查询正在进行中，且当前没有缓存数据可用（通常是首次加载）。
        - `false`：查询已完成（成功或失败），或正在后台刷新但有缓存数据可用。
    - 区别于`isFetching`：
        - `isLoading`：仅在没有数据且正在获取时为`true`。
        - `isFetching`：只要有网络请求在进行（包括首次加载和后台刷新）就为`true`。
2.  在 UI 中显示加载状态：
    - 条件渲染：检查`isLoading`属性，如果为`true`，则渲染加载指示器。
    - 示例：`if (isLoading) return <p>Loading...</p>;`

**代码示例**

1.  显示加载指示器

    ```tsx
    // ToDoList.tsx (部分，已在之前示例中包含加载状态处理)
    import { useQuery } from '@tanstack/react-query';
    // ... (axios, Todo interface, fetchTodos function)

    function TodoListWithLoadingIndicator() {
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todosLoadingDemo'],
        // queryFn: fetchTodos, // 假设fetchTodos已定义
      });

      // 检查isLoading属性并显示加载文本
      if (isLoading) return <p>Loading, please wait...</p>;

      if (error) return <p>Error: {error.message}</p>;

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
    ```

## 7- 创建自定义查询 Hook

> 简述：为了实现关注点分离和代码复用，应将与特定数据获取相关的`useQuery`逻辑封装到自定义 Hook 中。这个自定义 Hook 将负责数据获取的细节，并返回查询结果，使组件本身只关注 UI 渲染。

**知识树**

1.  关注点分离原则：
    - 问题：直接在组件中使用`useQuery`会将数据获取逻辑与 UI 渲染逻辑耦合。
    - 解决方案：将数据获取逻辑（包括`queryKey`定义、`queryFn`实现、`useQuery`调用）提取到一个独立的自定义 Hook 中。
2.  自定义 Hook 的创建：
    - 命名约定：以`use`开头，例如`useTodos`、`usePosts`。
    - 文件组织：通常将自定义 Hooks 放在项目的一个专用`hooks`目录下。
    - 实现：
        1.  定义`queryFn`（数据获取函数），可以放在 Hook 文件内部或从服务层导入。
        2.  在自定义 Hook 内部调用`useQuery`，传入`queryKey`和`queryFn`。
        3.  自定义 Hook 返回`useQuery`的结果（整个查询对象或其解构后的部分属性）。
3.  在组件中使用自定义 Hook：
    - 导入自定义 Hook。
    - 像调用普通 Hook 一样调用它，获取数据、错误和加载状态。
    - `const { data, error, isLoading } = useTodos();`
4.  优势：
    - **代码复用**：多个组件如果需要相同的数据，可以复用同一个自定义 Hook。
    - **可维护性**：数据获取逻辑集中管理，修改时只需在一处进行。
    - **可测试性**：自定义 Hook 可以独立于 UI 组件进行测试。
    - **组件简洁**：UI 组件不再关心数据获取的细节，只负责消费数据。
5.  接口/类型定义的位置：
    - 与数据相关的接口（如`Todo`接口）通常也应移至自定义 Hook 文件或更通用的类型定义文件中，以保持内聚性。

**代码示例**

1.  创建自定义 Hook `useTodos.ts`

    ```ts
    // src/hooks/useTodos.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    export interface Todo { // 将接口定义移至此处
      id: number;
      title: string;
      completed: boolean;
    }

    const fetchTodos = (): Promise<Todo[]> =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data);

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });
    };

    export default useTodos;
    ```

2.  在组件中使用自定义 Hook `TodoList.tsx`

    ```tsx
    // src/components/TodoList.tsx
    import useTodos from '../hooks/useTodos'; // 导入自定义Hook

    function TodoList() {
      const { data: todos, error, isLoading } = useTodos(); // 使用自定义Hook


      if (error) return <p>{error.message}</p>;

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
    export default TodoList;
    ```

## 8- 使用 React Query DevTools

> 简述：React Query DevTools 是一个浏览器内嵌的开发工具，用于在开发过程中检查、调试和监控 React Query 的缓存状态、查询行为和性能，极大地便利了开发工作。

**知识树**

1.  React Query DevTools：
    - 类型：一个 React 组件，集成到应用中以提供调试界面。
    - 安装：`npm install @tanstack/react-query-devtools@4.28`
2.  集成到应用： (`main.tsx`):
    - 导入：`import { ReactQueryDevtools } from '@tanstack/react-query-devtools';` (通常带有蓝色图标提示
    - 渲染位置：在 `QueryClientProvider` 内部，通常在 `App` 组件之后，添加 `<ReactQueryDevtools />` 组件。
    - `<ReactQueryDevtools initialIsOpen={false} />` ( `initialIsOpen` 可选，控制初始是否展开)。
    - 仅限开发模式：DevTools 组件通常只在开发构建中包含，生产构建会自动移除。
3.  DevTools 界面与功能：
    - 触发图标：集成后，页面角落通常会出现一个 React Query 图标，点击可切换 DevTools 面板的显示/隐藏。
    - 缓存内容查看：
        - 显示所有当前缓存的查询，按`queryKey`组织。
        - 点击特定`queryKey`可查看详细信息。
    - 查询详情：
        - `Query Key`：当前查询的键。
        - `Observers`：正在使用此查询的组件数量。当组件卸载，观察者数量减少；若降至 0，查询变为`inactive`。
        - `Last Updated`：查询数据最后更新的时间。
        - `Status`：查询状态（`fresh`, `stale`, `fetching`, `paused`, `inactive`）。
    - 操作按钮：
        - `Refetch`：手动触发重新获取该查询的数据。
        - `Invalidate`：将查询标记为过时，下次访问或特定条件下会重新获取。
        - 模拟状态：触发`Loading`状态或`Error`状态，便于调试 UI 在这些情况下的表现。
    - 数据查看器 (`Data Explorer`)：以结构化形式展示当前查询缓存的数据。
    - 查询状态 (`Query Explorer`)：显示查询对象的内部属性和状态，如`staleTime`, `cacheTime`等。
4.  `inactive`查询与垃圾回收：
    - 当一个查询没有活动的观察者（即没有组件正在使用它）时，它变为`inactive`。
    - `inactive`的查询在`cacheTime`（默认 5 分钟）后会被垃圾回收，从缓存中移除。

**代码示例**

1.  在`main.tsx`中集成 React Query DevTools

    ```tsx
    // src/main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // 导入DevTools
    import App from './App';

    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} /> {/* 添加DevTools组件 */}
        </QueryClientProvider>
      </React.StrictMode>
    );
    ```

## 9- 自定义查询设置

> 简述：React Query 允许通过在`QueryClient`层面进行全局配置，或在单个`useQuery`调用时进行局部配置，来调整查询的默认行为，如重试次数、缓存时间、数据新鲜度以及自动刷新策略。

**知识树**

1.  全局默认设置 (`QueryClient` 构造函数):
    - 在 `new QueryClient(options)` 时传入配置对象。
    - `defaultOptions`: 对象，包含针对不同操作类型的默认设置。
        - `queries`: 对象，用于配置所有查询的默认行为。
2.  常用查询配置项 (`defaultOptions.queries` 或 `useQuery` 选项):
    - `retry: number | boolean | (failureCount: number, error: TError) => boolean`: 失败重试次数。
        - 默认值：`3`。
        - 设置为 `false` 或 `0` 可禁用重试。
    - `cacheTime: number`: 非活动 (inactive) 查询结果在缓存中保留的时间 (毫秒)。
        - 默认值：`5 * 60 * 1000` (5 分钟)。
        - 非活动查询指没有组件正在观察 (使用) 的查询。
    - `staleTime`: (number)
        - 定义数据在被视为“过时”（stale）之前保持“新鲜”（fresh）的时长（毫秒）。默认 0。
        - 新鲜数据：直接从缓存返回，不触发网络请求。
        - 过时数据：仍会从缓存返回（若存在），但 React Query 会在后台尝试重新获取最新数据。
    - `refetchOnWindowFocus`: (boolean | "always" | ((query: Query) => boolean | "always"))
        - 当浏览器窗口重新获得焦点时，是否自动重新获取过时的数据。默认`true`。]
    - `refetchOnReconnect`: (boolean | "always" | ((query: Query) => boolean | "always"))
        - 当网络连接恢复时，是否自动重新获取过时的数据。默认`true`。
    - `refetchOnMount`: (boolean | "always" | ((query: Query) => boolean | "always"))
        - 当组件挂载时，如果数据已过时，是否自动重新获取。默认`true`。
3.  数据新鲜度与后台更新：
    - 当数据过时 (`staleTime`已过) 且触发了重新获取条件（如窗口聚焦、组件挂载），React Query 会：
        1.  立即从缓存返回过时数据给 UI（如果缓存存在），保证快速响应。
        2.  在后台发起网络请求获取最新数据。
        3.  获取到新数据后，更新缓存，并通知组件数据已更新，触发组件重渲染以显示最新数据。
4.  配置策略：
    - 全局配置适用于应用大部分查询的通用行为。
    - 局部配置用于针对特定查询调整行为，例如，不常变化的数据可以设置较长的`staleTime`。
    - 视频作者建议通常只需在局部按需配置`staleTime`，其他默认值多数情况下适用。

**代码示例**

1.  全局配置`QueryClient`

    ```tsx
    // src/main.tsx
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1, // 全局设置重试次数为1
          cacheTime: 10 * 60 * 1000, // 10分钟缓存时间
          staleTime: 1 * 60 * 1000,  // 1分钟数据新鲜期
          refetchOnWindowFocus: false,
        },
      },
    });

    // ... (QueryClientProvider setup)
    ```

2.  局部配置`useQuery` (在自定义 Hook 中)

    ```ts
    // src/hooks/useTodos.ts
    import { useQuery } from '@tanstack/react-query';
    // ... (Todo interface, fetchTodos function)

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 10 * 60 * 1000, // 此查询的数据10分钟内保持新鲜
        // retry: 5, // 可在此处覆盖全局重试设置
      });
    };
    export default useTodos;
    ```

## 10- 练习 - 获取数据

> 简述：练习将前面学到的 React Query 知识应用于一个新的场景：创建一个自定义钩子`usePosts`来获取帖子列表数据，并在`PostList`组件中使用该钩子，替换原有的`useState`和`useEffect`实现。

**知识树**

1.  目标组件: `src/react-query/PostList.tsx` (初始为传统数据获取方式)。
2.  任务步骤:
    - 创建自定义钩子 `src/hooks/usePosts.ts`。
    - 在 `usePosts.ts` 中:
        - 定义 `Post` 接口 (包含 `id`, `title`, `body`, `userId`)。
        - 实现 `fetchPosts` 函数，使用 Axios 从 `https://jsonplaceholder.typicode.com/posts` 获取帖子数据。
        - 调用 `useQuery<Post[], Error>()`：
            - `queryKey: ['posts']`。
            - `queryFn: fetchPosts`。
            - (可选) 设置 `staleTime` (例如 1 分钟：`1 * 60 * 1000`)。
        - 导出 `usePosts` 钩子。
    - 修改 `PostList.tsx`:
        - 移除原有的 `useState` (用于 `posts` 和 `error`) 和 `useEffect`。
        - 调用 `usePosts()` 获取 `data: posts`, `error`, `isLoading`。
        - 根据 `isLoading` 和 `error` 状态渲染加载提示或错误信息。
        - 使用 `posts` 数据渲染列表。注意处理 `posts` 可能为 `undefined` 的情况 (使用可选链 `?.`)。
3.  测试:
    - 修改 `App.tsx`，将 `TodoList` 替换为 `PostList` 以在浏览器中查看结果。

**代码示例**

1.  `src/hooks/usePosts.ts`:

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    export interface Post { // Post 接口定义
      id: number;
      title: string;
      body: string;
      userId: number;
    }

    const fetchPosts = (): Promise<Post[]> =>
      axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data);

    const usePosts = () => {
      return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 1分钟 staleTime
      });
    };

    export default usePosts;
    ```

2.  `src/react-query/PostList.tsx` (使用 `usePosts`):

    ```tsx
    // 移除了 axios, Post 接口, fetchPosts 的导入和定义
    import usePosts from '../../hooks/usePosts'; // 导入自定义钩子

    const PostList = () => {
      const { data: posts, error, isLoading } = usePosts();

      if (isLoading) return <p>Loading posts...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
    };

    export default PostList;
    ```

3.  `App.tsx` (用于测试):

    ```tsx
    // import TodoList from './react-query/TodoList';
    import PostList from './react-query/PostList'; // 替换为 PostList

    function App() {
      // return <TodoList />;
      return <PostList />;
    }

    export default App;
    ```

## 11- 参数化查询

> 简述：参数化查询允许根据动态参数（如用户 ID）从 API 获取特定子集的数据。在 React Query 中，通过将这些参数包含在`queryKey`中，可以实现当参数变化时自动重新获取数据，并为不同参数组合的数据创建独立的缓存条目。

1.声明一个 userId 状态变量来跟踪所选用户 2.为 select 添加 onChange 事件，将选择的变量 userId 传递给 usePost
3.usePost 接收 userId ，并修改唯一的缓存键，供了 userId 来动态地生成一个合适的查询键

**知识树**

1.  场景需求：根据用户选择（如从下拉列表中选择用户）来筛选和显示特定用户相关的帖子。
2.  实现步骤：
    - **UI 交互**：
        - 添加一个`<select>`下拉列表，用于用户选择用户 ID。
        - 使用`useState`管理当前选中的`userId`。
        - 处理`<select>`的`onChange`事件，更新`userId`状态。
    - **自定义 Hook 参数化**：
        - 修改`usePosts`（或类似）自定义 Hook，使其接受`userId`作为参数。
        - `userId`参数可以是数字或`undefined`（表示未选择用户，获取所有帖子）。
    - **动态`queryKey`**：
        - 根据 `userId` 动态构建 `queryKey` ，确保不同查询有不同的缓存键
        - 层级化`queryKey`结构：推荐使用类似 API 路径的结构(`user/1/posts`)，如`['users', userId, 'posts']`。如果`userId`未定义，则`queryKey`可以是`['posts']`。
        - 当`queryKey`中的任何部分（如此处的`userId`）发生变化时，React Query 会自动重新执行查询。
    - **动态`queryFn`**：
        - `queryFn`（如`fetchPosts`）需要根据传入的`userId`调整 API 请求。
        - 在 `queryFn` 中调用此函数，注意使用箭头函数包装以延迟执行
        - 使用 `Axios` 的 `params` 配置对象传递查询参数，自动转换为 URL 查询字符串（如 ?userId=1 ）来实现。
3.  React Query DevTools 观察：
    - 当选择不同用户时，DevTools 中会显示对应`queryKey`的缓存条目。
    - 未被当前`userId`使用的缓存条目会变为`inactive`。
    - 切换回已缓存过的`userId`时，数据会立即从缓存加载，无需网络请求（如果数据未过时）。
4.  `queryKey`结构优化：
    - 避免在`queryKey`中出现`null`或`undefined`等值，可能导致不直观的键名。
    - 可以使用条件逻辑来构造`queryKey`，例如：`userId ? ['users', userId, 'posts'] : ['posts']`。
5.  React Query 缓存机制观察
    - 不同 userId 的查询会创建不同的缓存条目，可在 React Query DevTools 中观察
    - 当切换用户时，之前的缓存条目会变为 inactive 状态但仍保留在缓存中
    - 再次选择相同用户时，如果缓存未过期，数据会立即从缓存加载，无需发起新的网络请求
    - 默认情况下，缓存数据会在一段时间后标记为过时（stale），可通过 staleTime 配置

**代码示例**

1.  `PostList.tsx` (添加用户选择下拉框和状态)

    ```tsx
    import React, { useState } from 'react';
    import usePosts from '../hooks/usePosts'; // 假设usePosts已修改为接受userId

    function PostList() {
      const [userId, setUserId] = useState<number | undefined>();
      const { data: posts, error, isLoading } = usePosts(userId); // 传递userId

      const users = [1, 2, 3]; // 示例用户ID列表

      return (
        <>
          <select
            className="form-select mb-3"
            onChange={(e) => setUserId(parseInt(e.target.value) || undefined)}
            value={userId || ''}
          >
            <option value="">All Users</option>
            {users.map(id => <option key={id} value={id}>User {id}</option>)}
          </select>

          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <ul className="list-group">
            {posts?.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
          </ul>
        </>
      );
    }
    export default PostList;
    ```

2.  `usePosts.ts` (修改为接受`userId`并动态构建`queryKey`和`queryFn`)

    ```ts
    // src/hooks/usePosts.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Post } from './interfaces'; // 假设Post接口已定义

    export interface Post { id: number; title: string; userId: number; body: string; }


    const fetchPosts = (userId?: number): Promise<Post[]> => {
      const endpoint = 'https://jsonplaceholder.typicode.com/posts';
      // 根据userId添加查询参数
      const params = userId ? { userId } : {};
      return axios.get<Post[]>(endpoint, { params }).then(res => res.data);
    };

    const usePosts = (userId?: number) => {
      // 动态queryKey
      const queryKey = userId ? ['users', userId, 'posts'] : ['posts'];

      return useQuery<Post[], Error>({
        queryKey: queryKey,
        queryFn: () => fetchPosts(userId), // queryFn现在依赖userId
        //注意使用箭头函数包装以延迟执行
        staleTime: 1 * 60 * 1000, // 1 minute
      });
    };

    export default usePosts;
    ```

## 12- 分页查询

> 简述：分页查询是将大量数据分割成较小、可管理的“页”进行加载的技术。React Query 支持通过动态调整`queryKey`和`queryFn`中的分页参数（如页码、每页大小）来实现分页，并提供了`keepPreviousData`选项以优化用户体验。

**知识树**

1.  分页查询概念：
    - 目的：提高大数据集加载性能和用户体验。
    - 参数：通常涉及`page`（当前页码）和`pageSize`（每页记录数）。
2.  React Query 实现分页：
    - **状态管理**：
        - 使用`useState`管理当前页码 (`page`)。
        - 页面大小 (`pageSize`) 可以是常量或另一个状态变量（如果允许用户更改）。
    - **查询参数封装 (`PostQuery`)**：
        - 创建一个接口（如`PostQuery`）来封装所有查询参数（`page`, `pageSize`, 以及未来可能的其他过滤条件）。
        - 将此查询对象作为参数传递给自定义查询 Hook（如`usePosts`）。
    - **查询键(queryKey)设计`**：
        - `queryKey`应包含整个查询对象，以确保查询参数变化时能触发数据重新获取并正确缓存。
        - 示例：`queryKey: ['posts', query]` (其中`query`是`PostQuery`实例)。
    - **动态`queryFn`**：
        - `queryFn`需根据查询对象中的`page`和`pageSize`来构建 API 请求。
        - API 端点通常支持通过查询参数（如`_start`, `_limit` for JSONPlaceholder）来控制分页。
        - 计算`_start`：`(query.page - 1) * query.pageSize`。
    - **分页导航 UI 实现**：
        - 提供“上一页”和“下一页”按钮。
        - 按钮的`onClick`事件处理器负责更新`page`状态。
        - 禁用逻辑：第一页时禁用“上一页”，最后一页时禁用“下一页”（如果后端 API 提供总记录数信息）。
3.  优化用户体验 (`keepPreviousData`)：
    - 保留前一页数据：使用 `keepPreviousData` 属性避免加载状态闪烁
    - 无缝过渡：在新数据加载完成前显示当前页数据
    - 加载状态处理：适当处理加载和错误状态
    - `isPreviousData`：`useQuery`返回的查询对象中会包含此布尔属性，指示当前显示的是否为先前的数据。
4.  API 限制：
    - JSONPlaceholder 等模拟 API 可能不提供总记录数，使得难以判断是否到达最后一页。真实 API 应提供此信息。

**代码示例**

1.  `usePosts.ts` (修改为支持分页查询对象)

    ```ts
    // src/hooks/usePosts.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Post } from './interfaces';

    export interface Post { id: number; title: string; userId: number; body: string; }


    export interface PostQuery { // 查询对象接口
      page: number;
      pageSize: number;
      // userId?: number; // 可以扩展其他过滤条件
    }

    const fetchPosts = (query: PostQuery): Promise<Post[]> => {
      const params = {
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
        // userId: query.userId // 如果有userId
      };
      return axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', { params })
        .then(res => res.data);
    };

    const usePosts = (query: PostQuery) => {
      return useQuery<Post[], Error>({
        queryKey: ['posts', query], // queryKey包含整个查询对象
        queryFn: () => fetchPosts(query),
        staleTime: 1 * 60 * 1000,
        keepPreviousData: true, // 保持先前数据直到新数据加载完成
      });
    };

    export default usePosts;
    ```

2.  `PostList.tsx` (实现分页 UI 和逻辑)

    ```tsx
    import React, { useState } from 'react';
    import usePosts, { PostQuery } from '../hooks/usePosts'; // 导入PostQuery

    function PostListPaginated() {
      const pageSize = 10;
      const [page, setPage] = useState(1);

      // 构建查询对象
      const postQuery: PostQuery = { page, pageSize };
      const { data: posts, error, isLoading, isPreviousData } = usePosts(postQuery);

      return (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <ul className="list-group">
            {posts?.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
          </ul>
          <div className="mt-3">
            <button
              className="btn btn-primary me-1" // me-1 for margin-end
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              // disabled={!hasNextPage} // 理想情况下应有此逻辑
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
            {isPreviousData && <span> (Loading next page...)</span>}
          </div>
        </>
      );
    }
    export default PostListPaginated;
    ```

## 13- 无限查询 (Infinite Queries)

> 简述：无限查询（或无限滚动）是一种数据加载模式，用户滚动到列表底部或点击“加载更多”按钮时，动态加载并追加下一页数据，而不是替换整个列表。React Query 通过`useInfiniteQuery` Hook 支持此模式。

**知识树**

1.  `useInfiniteQuery` Hook：
    - 替换`useQuery`：用于实现无限滚动或“加载更多”功能。
    - 核心差异：
        - 数据结构：`data`属性不再是简单的数组，而是一个包含`pages`和`pageParams`的对象。
            - `data.pages`: 一个数组，每个元素是某一页获取到的数据数组。
            - `data.pageParams`: 一个数组，记录了用于获取每一页数据的参数。
        - 分页参数管理：由`useInfiniteQuery`内部管理，不再需要组件自身维护`page`状态。
2.  `useInfiniteQuery`配置：
    - `queryKey`: 与`useQuery`类似，但通常不直接包含分页参数，因为分页由 Hook 内部处理。
    - `queryFn`: 接收一个包含`pageParam`属性的对象作为参数。`pageParam`是下一页的标识（如页码）。`queryFn`应使用此 pageParam`获取对应页的数据。
        - 初始调用：`pageParam`通常为`undefined`或初始值，`queryFn`应获取第一页数据。
    - `getNextPageParam`: (必需) 一个函数，用于确定如何从最后一页的数据和所有已加载页面的数据中计算出下一页的`pageParam`。
        - 参数：`(lastPage, allPages)`
        - 返回值：下一页的`pageParam`。如果已无更多数据，应返回`undefined`。`lastPage.length>0 ? allPages.length+1:undefined`
3.  `useInfiniteQuery`返回值：
    - 除了`data`, `error`, `isLoading`等，还包含：
        - `fetchNextPage`: (函数) 调用此函数会触发获取下一页数据。
        - `hasNextPage`: (boolean) 指示是否还有更多数据可供加载（基于`getNextPageParam`的返回值是否为`undefined`）。
        - `isFetchingNextPage`: (boolean) 指示是否正在获取下一页数据。
4.  UI 实现：
    - 渲染数据：遍历`data.pages`数组，再对每个`page`（本身是数据数组）进行遍历以渲染列表项。
    - “加载更多”按钮：
        - `onClick`: 调用`fetchNextPage()`。
        - `disabled`: 当`!hasNextPage`或`isFetchingNextPage`为`true`时禁用。
        - 文本：可根据`isFetchingNextPage`显示不同文本（如“加载中...”）。
5.  与传统分页的区别：
    - 数据追加：无限查询是追加数据，而传统分页是替换当前页数据。
    - 用户体验：更适合内容流式消费的场景。

**代码示例**

1.  `usePosts.ts` (修改为使用`useInfiniteQuery`)

    ```ts
    // src/hooks/usePosts.ts
    import { useInfiniteQuery } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Post, PostQuery } from './interfaces'; // PostQuery不再直接需要page

    export interface Post { id: number; title: string; userId: number; body: string; }

    interface FetchPostsParams {
      pageParam?: number; // pageParam由useInfiniteQuery提供
      pageSize: number;
      // userId?: number;
    }

    const fetchPosts = async ({ pageParam = 1, pageSize }: FetchPostsParams): Promise<Post[]> => {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * pageSize,
          _limit: pageSize,
        },
      });
      return response.data;
    };

    // PostQuery现在只包含pageSize等固定参数
    export interface InfinitePostQuery {
        pageSize: number;
        // userId?: number;
    }

    const usePostsInfinite = (query: InfinitePostQuery) => {
      return useInfiniteQuery<Post[], Error, Post[], Post[], number>({ // 明确泛型参数
        queryKey: ['posts', query], // queryKey可以包含固定参数
        queryFn: ({ pageParam }) => fetchPosts({ pageParam, pageSize: query.pageSize }),
        getNextPageParam: (lastPage, allPages) => {
          // lastPage是最近获取的一页数据
          // allPages是所有已获取页面的数据数组
          return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
        staleTime: 1 * 60 * 1000,
        // keepPreviousData不适用于useInfiniteQuery，其行为已内置
      });
    };

    export default usePostsInfinite;
    ```

2.  `PostList.tsx` (实现无限滚动 UI)

    ```tsx
    import React from 'react';
    import usePostsInfinite, { InfinitePostQuery } from '../hooks/usePostsInfinite';

    function PostListInfinite() {
      const postQuery: InfinitePostQuery = { pageSize: 10 };
      const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      } = usePostsInfinite(postQuery);

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      return (
        <>
          <ul className="list-group">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}> {/* 为每页数据组提供key */}
                {page.map(post => (
                  <li key={post.id} className="list-group-item">{post.title}</li>
                ))}
              </React.Fragment>
            ))}
          </ul>
          <div className="mt-3">
            <button
              className="btn btn-primary"
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
            </button>
          </div>
        </>
      );
    }
    export default PostListInfinite;
    ```

## 14- 第二部分：变更数据

> 简述：本节预告将进入 React Query 的第二核心部分——数据变更（Mutations）。内容将覆盖执行创建、更新、删除等操作，处理变更错误，实现乐观更新，以及创建自定义变更 Hook 和可复用服务。

**知识树**

1.  数据变更 (Mutations) 概念：
    - 指任何改变服务器端数据的操作，如创建新记录、更新现有记录或删除记录 (CRUD 中的 CUD)。
2.  React Query 中的数据变更：
    - 与查询 (Queries) 相对，查询主要用于读取数据。
    - 使用`useMutation` Hook 来执行变更操作。
3.  本部分学习重点：
    - **执行变更**：如何使用`useMutation`发送 POST, PUT, DELETE 等请求。
    - **处理变更错误**：捕获和响应变更操作失败的情况。
    - **乐观更新 (Optimistic Updates)**：在服务器确认成功前，预先更新 UI，以提升用户感知性能。失败时需回滚 UI。
    - **自定义变更 Hook**：封装与特定变更操作相关的`useMutation`逻辑，提高复用性和可维护性。
    - **构建可复用服务**：创建抽象的服务层来处理 API 交互，供查询和变更 Hook 使用。

**代码示例**

(本节为过渡性内容，无特定代码示例)

## 15- 数据变更（Mutating Data）

> **简述：**  
> 数据变更（Mutation）是指向后端发送“写”操作（如创建、更新、删除）以修改服务器端数据，并将变更结果同步到本地缓存与界面。React Query 提供了 `useMutation` 钩子，用于封装发送请求、处理回调以及自动维护缓存的操作。本节将讲解如何使用 `useMutation` 实现新增 To-Do 项目、验证输入、处理请求回调，并示范两种常见的本地缓存更新策略：失效缓存（invalidate）与直接修改缓存（setQueryData）。

---

**知识树**

1. **表单与组件准备**  
   1.1 引入 React 的 `useRef` 获取输入值  
   1.2 通过 `<form>` 的 `onSubmit` 监听提交并阻止浏览器默认行为  
   1.3 UI 层面：简单输入框 + 按钮，不关注样式，只关注功能逻辑
2. **定义与导出 ToDo 接口**  
   2.1 在 `useTodos.ts`（或类似文件）中定义 `interface ToDo { userId: number; id: number; title: string; completed: boolean; }`  
   2.2 将 `ToDo` 通过 `export` 导出，以便表单组件与其他钩子引用类型
3. **使用 `useMutation` 发送写请求**  
   3.1 引入 `useMutation`：`import { useMutation } from '@tanstack/react-query'`  
   3.2 定义 mutation function：  
     3.2.1 参数类型为 `ToDo`（要发送给后端的对象）  
     3.2.2 使用 `axios.post<ToDo>(url, todo)` 向服务器发送 POST 请求  
   3.3 在表单组件中调用 `useMutation<ToDo, Error, ToDo>(mutationFn)`：  
     3.3.1 第一个泛型：后端返回数据类型（即保存后带 `id` 的 `ToDo`）  
     3.3.2 第二个泛型：错误类型（可以用 `unknown` / `Error`）  
     3.3.3 第三个泛型：变量类型（也就是发送给后端的 `ToDo`）
4. **触发 `mutate` 方法并做输入校验**  
   4.1 从 `useMutation` 返回一个对象，例如 `const addToDoMutation = useMutation(...)`  
   4.2 在 `onSubmit` 回调中：  
     4.2.1 调用 `e.preventDefault()` 阻止表单默认刷新页面  
     4.2.2 通过 `ref.current?.value` 读取输入框值，并判断是否存在非空字符串  
     4.2.3 构建 `newToDo: ToDo` 对象（不必带 `id`，后端会自动生成；同时 `completed` 默认为 `false`、`userId` 固定为 1）  
     4.2.4 调用 `addToDoMutation.mutate(newToDo)` 触发请求
5. **处理请求回调：`onSuccess`, `onError`, `onSettled`**  
   5.1 在调用 `useMutation` 时传入回调配置对象：

    ```ts
    useMutation<ToDo, Error, ToDo>(mutationFn, {
      onSuccess: savedToDo => { /* 成功时拿到后端返回的 savedToDo */ },
      onError: error => { /* 请求出错时处理，比如显示提示 */ },
      onSettled: () => { /* 无论成功或失败都会调用，可用于清理或隐藏加载状态 */ }
    });
    ```

    5.2 **泛型的重要性**：指定了 `onSuccess` 回调中 `savedToDo` 的类型，增强类型检查  
     5.3 `variables` 参数：`onSuccess` 的第二个参数可接收传入的 `newToDo`，便于在回调中做对比或日志

6. **本地缓存更新策略**  
   6.1 **方式一：失效（Invalidate）缓存**  
     6.1.1 引入 `useQueryClient`：`const queryClient = useQueryClient()`  
     6.1.2 在 `onSuccess` 回调中调用 `queryClient.invalidateQueries({ queryKey: ['todos'] })`  
     6.1.3 React Query 会将匹配 `['todos']`（开头或完全相等）的所有查询标记为「过期」，下一次组件渲染 / 聚焦浏览器时会重新发起 GET 请求  
     6.1.4 注意：对于测试接口（如 JSON Placeholder），POST 后数据不持久化，因此失效缓存无法立刻在列表中看到效果，但在真实 API 中可用于数据一致性

    6.2 **方式二：直接更新缓存（SetQueryData）**  
       6.2.1 同样通过 `useQueryClient()` 拿到 `queryClient` 实例  
       6.2.2 在 `onSuccess` 回调中调用 `queryClient.setQueryData<ToDo[]>(['todos'], old => { … })`  
       6.2.3 `old` 可能为 `undefined`，因此需用 `old ?? []` 确保存在数组  
       6.2.4 返回一个新的数组：`[savedToDo, ...oldTodos]`，以不可变方式将新项插入列表开头  
       6.2.5 该方法避免额外的网络请求，适合多数场景下的新增、删除、更新等“即时”反馈

7. **测试验证与调试**  
   7.1 **无输入时阻断请求**  
     在 DevTools Network 面板确认，没有发起 POST 请求  
   7.2 **带输入时正常提交**  
     确认 Network 面板出现 POST 请求，并返回 201 状态与带 `id` 的新对象  
   7.3 **缓存更新观察**  
     若使用直接更新缓存，可在浏览器界面上即时看到新项；若失效缓存，则需要重新获取列表才能看到（或聚焦切回页面触发 refetch）

**代码示例要点**

1. **泛型与类型安全**

    - `useMutation<ToDo, Error, ToDo>`：第一个为后端返回类型，第二个为错误类型，第三个为传入参数类型。这样能在 `onSuccess(savedToDo)` 中直接拿到完整的 `ToDo` 对象。
    - `useQuery<ToDo[], Error>`：第一个为查询返回类型，第二个为错误类型。保持类型一致，避免类型报错。

2. **可空校验与可选链**

    - `inputRef.current?.value?.trim()`：使用可选链避免 `current` 为 `null` 时引发异常
    - 依赖简明逻辑：如果 `value` 为空字符串，直接 `return`，不触发网络请求

3. **回调中更新缓存的两种方式**

    - **失效缓存（invalidateQueries）**
        ```ts
        queryClient.invalidateQueries({ queryKey: ['todos'] });
        ```
        优点：最简洁的全量自动刷新；缺点：会发起额外的 GET 请求
    - **直接修改缓存（setQueryData）**
        ```ts
        queryClient.setQueryData<ToDo[]>(['todos'], (oldTodos = []) => {
          return [savedToDo, ...oldTodos];
        });
        ```
        优点：无需额外网络请求，体验更流畅；缺点：需要手动管理更新逻辑（深拷贝或合并）

4. **回调函数的时机**

    - `onSuccess`：只有请求成功时才会调用
    - `onError`：请求失败时调用，可用于展示错误信息
    - `onSettled`：无论成功或失败都会调用，适合做“清除加载态”“关闭弹窗”等收尾工作

5. **开发环境与测试**

    - JSON Placeholder（`https://jsonplaceholder.typicode.com/`）为假数据库，POST 后不持久化，所以使用“失效缓存”时看不到真实效果，但示例逻辑是与真实 API 完全一致的。
    - 浏览器 DevTools Network 面板可以验证：
        - 空输入时，不会出现 POST 请求
        - 有输入时，会出现一个 POST 请求及后续自动触发的 GET 请求（若失效缓存）

---

通过上述步骤，你可以掌握 React Query 中数据变更的完整流程：从表单准备到调用 `useMutation`，再到通过回调更新本地缓存或失效缓存，实现与后端数据的有效同步。

## 15- 变更数据 (useMutation)

> 简述：`useMutation` Hook 是 React Query 中用于执行数据变更操作（如创建、更新、删除）的核心工具。它接收一个执行实际变更的函数，并返回一个包含触发变更方法及状态属性的对象。

**知识树**

1.  `useMutation` Hook：

    - 导入：`import { useMutation } from '@tanstack/react-query';`
    - 用途：管理异步的、会改变服务器状态的操作。
    - 配置对象参数：接收一个包含至少`mutationFn`的对象。

    ```ts
    const mutation = useMutation<
      TData,        // 后端返回的数据类型
      TError,       // 可能抛出的错误类型
      TVariables,   // 传入 mutationFn 的变量类型
      TContext      // （可选）onMutate 返回并供 onError 回滚的上下文类型
    >(
      mutationFn,   // 必填：定义如何向后端发起请求
      {            // 可选：各种回调的配置对象
        onMutate, onSuccess, onError, onSettled
      }
    );
    ```

2.  `mutationFn`：
    - 定义：一个函数，签名 `(variables: TVariables) => Promise<TData>`。
        - `variables`：调用 `mutate(variables)` 时传入的参数。
        - 函数内部通常使用 `axios.post`、`axios.put` 等发送请求并返回一个 `Promise`。
    - Promise 结果：
        - 成功时：Promise 应 resolve 为服务器返回的数据（可选，但常用于获取创建/更新后的对象）。
        - 失败时：Promise 应 reject 或抛出一个错误。
3.  **第二个参数（配置对象）**：可选属性：回调函数：
    - `onSuccess: ( (data, variables, context) => void | Promise<void> ) 变更成功后调用。
        - `data`: `mutationFn`成功 时返回的数据。
        - `variables`: 调用`mutate`时传递给`mutationFn`的变量。
        - `context`: 由`onMutate`返回的上下文对象。
    - `onError: ( (error, variables, context) => void | Promise<void> ) 请求失败时调用，可利用 `context` 回滚。
    - `onSettled: ( (dataOrError, error, variables, context) => void | Promise<void> ) 无论成功或失败都会执行，适合清理或隐藏加载态。
    - `onMutate: ( (variables) => context | Promise<context> ) 在`mutationFn`执行前调用，常用于乐观更新。在请求发起前执行，可返回上下文用于后续回滚。
4.  **回调函数详解**
    - **onMutate**：
        - 在请求发起前被调用，常用于乐观更新：先修改本地缓存，然后在 `onError` 中回滚。
        - 返回值类型 `TContext`，会传递给后续的 `onError` 或 `onSettled`。
    - **onSuccess**：
        - 请求成功后调用，参数：`(data: TData, variables: TVariables, context?: TContext)`。
        - 推荐在此处调用 `queryClient.setQueryData` 或 `invalidateQueries` 更新缓存。
    - **onError**：
        - 请求失败后调用，参数：`(error: TError, variables: TVariables, context?: TContext)`。
        - 若使用乐观更新，可在此通过 `context` 回滚到原始状态。
        - ` context`是一个对象，用于在回调函数之间传递数据
    - **onSettled**：
        - 请求完成（成功或失败）后都会执行，适合收尾操作，如隐藏加载指示或重置表单。
5.  `useMutation`的返回值：
    - 一个变更对象，常用属性和方法包括：
        - `mutate`: (函数) 调用此函数来触发变更操作。它接收一个变量作为参数，此变量会传递给`mutationFn`。
        - `mutateAsync`: (函数) 与`mutate`类似，但返回一个 Promise，允许更灵活地处理成功或失败。方便 `async/await`。
        - `data: TData | undefined`：变更成功时，`mutationFn`的 Promise resolve 的值。
        - `error: TError | null`：变更失败时的错误对象。
        - `isLoading: boolean`：变更是否正在进行中。
        - `isSuccess: (boolean)`： 变更是否已成功完成。
        - `isError: boolean`：变更是否已失败。
        - `status: 'idle' | 'loading' | 'error' | 'success'`：变更的当前状态。
        - `reset`: (函数) 将变更状态重置回`idle`。
6.  与查询缓存的交互：
    - **缓存失效 (Invalidation)**：变更成功后，通常需要使相关的查询缓存失效，以促使 React Query 重新获取最新数据。
        - 使用`useQueryClient` Hook 获取`queryClient`实例。
        - 在`onSuccess`回调中调用`queryClient.invalidateQueries(['queryKeyToInvalidate'])`。
    - **直接更新缓存 (Manual Cache Updates)**：对于某些场景（如 JSONPlaceholder 这类不真实保存数据的 API），或为了更精细的控制，可以在`onSuccess`回调中使用`queryClient.setQueryData(['queryKey'], updateFn)`直接修改缓存中的数据。
        - `updateFn`接收旧的缓存数据，返回新的缓存数据。
7.  TypeScript 类型支持：
    - `useMutation<TData, TError, TVariables, TContext>(...)`
        - `TData`: `mutationFn`成功时返回的数据类型。
        - `TError`: 错误类型。
        - `TVariables`: 调用`mutate`时传递给`mutationFn`的变量类型。
        - `TContext`: `onMutate`返回的上下文对象类型。
8.  整体数据流分析
    1.  数据获取 ： useTodos Hook 使用 React Query 的 useQuery 从 API 获取待办事项列表
    2.  数据展示 ：TodoList 组件使用 useTodos 获取数据并渲染列表
    3.  数据添加 ：TodoForm 组件使用 React Query 的 useMutation 添加新的待办事项
    4.  缓存更新 ：成功添加后，直接更新 React Query 的缓存，无需重新获取数据
9.  技术亮点
    1.  类型安全 ：使用 TypeScript 接口和泛型确保类型安全
    2.  状态管理 ：使用 React Query 管理服务器状态，包括加载状态、错误处理和缓存
    3.  优化性能 ：通过直接更新缓存减少不必要的网络请求
    4.  关注点分离 ：将数据获取逻辑封装在自定义 Hook 中，与 UI 组件分离
10. **常见用法场景**
    - **创建（Create）**：提交表单后发起 `POST` 请求，将新项插入数据库，并更新 UI。
    - **更新（Update）**：发送 `PUT`/`PATCH` 请求，将局部字段修改为新值。
    - **删除（Delete）**：调用 `DELETE` 请求后从本地列表中移除对应项。
11. **注意事项**
    - **类型安全**：务必在调用 `useMutation` 时指定泛型，以保证回调参数类型正确。
    - **空值与可空链**：当使用 `ref.current?.value` 时，若 `current` 为 `null`，需防止直接传 `undefined` 给 `mutate`。
    - **不可变更新**：在回调（如 `onSuccess`）中更新缓存时，切勿修改原始数组，需返回新数组。
    - **乐观更新风控**：若要在提交前就更新 UI，需在 `onMutate` 中先修改缓存并在 `onError` 时回滚；否则可直接在 `onSuccess` 中更新。
    - **真实 API vs JSON Placeholder**：示例中使用 JSON Placeholder，POST 后服务器并不真正保存数据，因此“失效缓存”方式在示例中不能立即看到新增效果，但在真实后端中是完全正确的做法。

**代码示例**

1. **导出 ToDo 接口**

    ```ts
    // useTodos.ts
    export interface ToDo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }
    ```

2. 使用`useMutation`添加新的 Todo

```tsx
    // ToDoForm.tsx
    import React, { useRef } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Todo } from '../hooks/useTodos'; // 假设Todo接口已定义

    export interface Todo { id: number; title: string; completed: boolean; userId: number; }

    function TodoForm() {
      const titleRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient();// 1. 获取 QueryClient 实例

    // 2. 使用 useMutation Hook
    const addTodo = useMutation(
    // 3. 定义 mutationFn
      mutationFn: (todo: Todo) =>//mutationFn 接收一个 Todo 对象，发送到服务器，并返回响应数据
        axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),//<Todo>表示期望服务器返回的数据类型是 Todo 。
        onSuccess: (savedTodo, newTodo) => {
          console.log('Todo added successfully:', savedTodo);
        	// 方式一：缓存失效 (JSONPlaceholder不适用此方式看到效果)
        	// queryClient.invalidateQueries(['todos']);

        	// 方式二：直接更新缓存 (适用于JSONPlaceholder)
        	queryClient.setQueryData<Todo[]>(
        	  ['todos'],
        	  (todos) => [savedTodo, ...(todos || [])]
        	// 将新todo添加到列表顶部
        	// - 接收当前缓存中的todos数组
        	// - 将新添加的todo ( savedTodo ) 放在数组的最前面
        	// - 使用展开运算符 ( ... ) 将原有的todos数组展开
        	// - 使用 (todos || []) 确保即使缓存中没有数据也不会出错
        	);
        	if(titleRef.cueernt) titleRef.current.value = "";
        },
        onError: (error) => {
        	console.error('Error adding todo:', error.message);
        }
    );

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// 5. 触发 mutationFn
		if ((ref.current && ref.current.value) {
			addTodo.mutate({
			id: 0,
			title: titleRef.current.value,
			completed: false,
			userId: 1, // 示例 userId
			});
	    }
	};

	return (
		<>
			{addTodo.error && (
				<div className="alert alert-danger">{addTodo.error.message}</div>
			)}
			<form className="row mb-3" onSubmit={handleSubmit}>
				<div className="col">
					<input ref={titleRef} type="text" className="form-control" />
					</div>
					<div className="col">
					<button disabled={addTodo.isLoading} className="btn btn-primary">
					{addTodo.isLoading ? "Adding..." : "Add"}
					</button>
				</div>
			</form>
		</>
		);
	}
	export default TodoForm;
```

## 16- 处理变更错误

> 简述：`useMutation` Hook 返回的变更对象中包含`error`属性和`isError`布尔值，用于捕获和指示变更操作是否失败。通过这些属性，可以在 UI 中向用户显示错误信息。

**知识树**

1.  错误相关的属性：
    - `error`: (TError | null) 如果变更操作失败，此属性将持有错误对象。`TError`是在`useMutation`泛型中指定的错误类型。
    - `isError`: (boolean) 如果变更操作失败，此值为`true`。
2.  在 UI 中显示错误：
    - 条件渲染：根据`addTodoMutation.isError`（或直接检查`addTodoMutation.error`是否为真值）来决定是否显示错误提示。
    - 错误消息：通常显示`addTodoMutation.error.message`。
3.  TypeScript 类型注解：
    - 在`useMutation<TData, TError, TVariables, TContext>`中正确指定`TError`泛型参数（如`Error`），可以确保`error`属性具有正确的类型，从而安全访问其`message`等属性。
    - 如果`TError`默认为`unknown`，则在访问`error.message`前可能需要类型断言或类型守卫。

**代码示例**

1.  在`ToDoForm.tsx`中显示变更错误 (已在上一节示例中包含)

    ```tsx
    // ToDoForm.tsx (相关部分)
    const addTodo = useMutation<Todo, Error,Todo>( /* ... */ );

    ...
    {addTodo.isError && (
    	 <div className="alert alert-danger">{addTodo.error.message}</div>
    )}
    ...
    ```

    - 当`addTodoMutation.isError`为`true`时，显示一个包含错误消息的警告框。
    - 使用可选链`?.`安全访问`message`，并提供备用消息。

## 17- 显示变更进度

> 简述：`useMutation` Hook 返回的变更对象中的`isLoading`属性是一个布尔值，用于指示变更操作是否正在进行中。利用此属性可以在 UI 中显示加载状态，例如禁用提交按钮或改变按钮文本。

**知识树**

1.  `isLoading`属性：
    - 来源：`useMutation`返回的变更对象的一部分。
    - 含义：
        - `true`：变更操作（如 API 请求）正在执行，尚未完成（成功或失败）。
        - `false`：变更操作已完成或尚未开始。
2.  在 UI 中显示进度：
    - **按钮文本**：根据`isLoading`状态动态改变提交按钮的文本。
        - 示例：`{addTodoMutation.isLoading ? 'Adding...' : 'Add'}`
    - **按钮禁用**：在`isLoading`为`true`时禁用提交按钮，防止用户重复提交。
        - 示例：`disabled={addTodoMutation.isLoading}`
    - **清空输入框**：变更成功后（在`onSuccess`回调中），清空表单输入字段，为下一次输入做准备。

**代码示例**

1.  在`ToDoForm.tsx`中显示变更进度和清空输入框 (已在第 15 节示例中包含)

```tsx
    // ToDoForm.tsx (相关部分)
    // const addTodo = useMutation<Todo, Error,Todo>(
    //   mutationFn,
    //   {
    //     onSuccess: (savedTodo) => {
    //       // ... (缓存更新逻辑)
    //       if (titleRef.current) {
    //         titleRef.current.value = ''; // 清空输入框
    //       }
    //     },
    //     // ...
    //   }
    // );

//...
	<button disabled={addTodo.isLoading} className="btn btn-primary">
		{addTodo.isLoading ? "Adding..." : "Add"}
	</button>
    // ...
```

## 18- 乐观更新

> **简述：**  
> 乐观更新（Optimistic Update）是一种前端优化策略。假设后端请求通常会成功，不等待后端响应，立即在 UI 中展示更新效果，使用户感受到瞬间响应。若请求成功，则同步后端返回的实际数据；若失败，则回滚至请求前的状态。React Query 使用 `onMutate`、`onSuccess` 和 `onError` 三个回调函数，结合上下文（context）机制，实现安全可靠的乐观更新。

---

**知识树**

1.  **本节重点知识**

    1.  **乐观更新定义及用途**

        - 定义：请求发起时即立即修改本地状态与 UI，而非等待后端响应。
        - 目的：提升用户交互体验，获得瞬时响应效果。

    2.  **React Query 乐观更新实现方式**

        - 核心回调函数：
            - **onMutate**：请求发起前立即执行（用于即时修改缓存）。
            - **onSuccess**：请求成功时执行（替换本地数据为真实数据）。
            - **onError**：请求失败时执行（回滚到更新前状态）。
        - 使用上下文（context）对象传递中间状态。

2.  **核心 API 与回调函数详解**

    1.  **onMutate** 回调函数

        - 执行时机：在请求函数（mutationFn）执行前。
        - 作用：
            - 即时更新 UI（修改 query 缓存）。
            - 创建并返回上下文对象（用于后续回滚）。
        - 参数：`onMutate: (variables: TVariables) => TContext | Promise<TContext>`
            - `variables`：调用 mutation 时传入的数据（如新增的 todo 项目）。
        - 返回 `context`（上下文对象），包含更新前的数据（用于失败时回滚）。

    2.  **onSuccess** 回调函数

        - 执行时机：请求成功、服务器返回数据后。
        - 作用：
            - 更新本地缓存，以服务端返回数据为准。
        - 参数：`onSuccess: (data: TData, variables: TVariables, context?: TContext) => void`
            - `data`：服务器返回数据（如新增 todo 项，含真实 ID）。
            - `variables`：提交请求时传入的数据（乐观 UI 中临时数据）。
            - `context`：可选，上下文对象。

    3.  **onError** 回调函数
        - 执行时机：请求失败时触发。
        - 作用：
            - 回滚本地缓存到请求前的状态（利用 context）。
        - 参数：`onError: (error: TError, variables: TVariables, context?: TContext) => void`
            - `error`：请求失败的错误信息。
            - `variables`：调用 mutation 时传入的数据。
            - `context`：包含更新前缓存状态的上下文对象，用于回滚。

3.  **上下文（Context）机制**

    1.  **用途**

        - 保存 mutation 请求前的缓存数据（旧数据）。
        - 传递给 `onError` 回调，用于失败时安全回滚。

    2.  **实现步骤**

        - 定义明确的上下文类型接口：
            ```ts
            interface AddTodoContext {
              previousTodos: ToDo[];
            }
            ```
        - 在 `onMutate` 中返回此上下文：
            ```ts
            onMutate: async (newTodo) => {
              const previousTodos = queryClient.getQueryData<ToDo[]>(['todos']) || [];
              queryClient.setQueryData(['todos'], [newTodo, ...previousTodos]);
              return { previousTodos };
            }
            ```
        - 在 `onError` 中使用此上下文回滚数据：
            ```ts
            onError: (error, newTodo, context) => {
              if (context?.previousTodos) {
                queryClient.setQueryData(['todos'], context.previousTodos);
              }
            }
            ```

4.  **教师示例实现思路与顺序（回忆用）**

    - **步骤一（onMutate 实现）**
        - 创建上下文对象，保存请求前数据；
        - 立即修改缓存，优化用户体验。
    - **步骤二（onSuccess 实现）**
        - 成功时，用真实返回数据替换临时数据（如更新真实 ID）；
        - 使用 `.map()` 方法找到并替换临时数据。
    - **步骤三（onError 实现）**
        - 失败时，通过上下文回滚数据至原状态。

---

**完整代码示例**

```tsx
import React, { useRef } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from './useTodos';

// 接口 URL
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// Mutation 函数（发送请求到后端）
const addToDoRequest = async (newToDo: ToDo): Promise<ToDo> => {
  const response = await axios.post<ToDo>(TODOS_URL, newToDo);
  return response.data;
};

// 定义上下文接口
interface AddTodoContext {
  previousTodos: ToDo[];
}

export const ToDoForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // 使用 useMutation 并定义回调（带上下文类型）
  const addToDoMutation = useMutation<ToDo, Error, ToDo, AddTodoContext>(
    addToDoRequest,
    {
      // 1. onMutate：请求前立即更新 UI
      onMutate: (newToDo) => {
        // 获取更新前缓存
        const previousTodos = queryClient.getQueryData<ToDo[]>(['todos']) || [];

        // 立即更新缓存（乐观更新）
        queryClient.setQueryData(['todos'], [newToDo, ...previousTodos]);

        // 返回上下文对象供失败时回滚
        return { previousTodos };
      },

      // 2. onSuccess：用真实返回数据替换临时数据
      onSuccess: (savedToDo, newToDo) => {
        queryClient.setQueryData<ToDo[]>(['todos'], (todos = []) =>
          todos.map((todo) =>
            todo === newToDo ? savedToDo : todo
          )
        );
      },

      // 3. onError：失败时回滚到更新前状态
      onError: (error, newToDo, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(['todos'], context.previousTodos);
        }
        console.error('创建失败：', error.message);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = inputRef.current?.value.trim();
    if (!title) return;

    const newToDo: ToDo = {
      userId: 1,
      id: Date.now(), // 临时 ID，用于 UI
      title,
      completed: false,
    };

    addToDoMutation.mutate(newToDo);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      {addToDoMutation.error && (
        <div className="alert alert-danger">
          错误：{addToDoMutation.error.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="输入新的待办事项"
        />
        <button type="submit" disabled={addToDoMutation.isLoading}>
          添加
        </button>
      </form>
    </>
  );
};
```

---

**注意事项与总结**

- **务必实现回滚机制**：乐观更新必然伴随失败风险，必须确保能回滚。
- **临时数据与真实数据替换**：必须在 `onSuccess` 中将临时数据替换为后端返回的数据，以保证数据准确性（如真实 ID）。
- **明确上下文类型**：定义明确的上下文接口并传入泛型，保证类型安全。

---

**教师实现步骤快速回忆（编程时参考）**

① 在 `onMutate` 里即时更新 UI → 创建上下文并返回  
② 在 `onSuccess` 中替换临时数据为真实数据  
③ 在 `onError` 中使用上下文数据安全回滚到初始状态  
④ 注意泛型定义明确上下文类型（`useMutation<TData, TError, TVariables, TContext>`）

通过上述详细笔记，即可清晰掌握和回忆 React Query 中乐观更新的实现方法。

## 19- 创建自定义变更 Hook

> **简述：**  
> 当 React 组件同时包含 UI 渲染和数据请求的逻辑时，组件变得复杂且难以维护。为提高代码的模块化、可维护性，我们应将数据管理逻辑抽离为自定义的 hook。这样组件可以专注于 UI 呈现，而 hook 则负责数据逻辑，实现职责分离（separation of concerns）。本节以新增 Todo 为例，展示如何创建并使用自定义 Mutation Hook。

---

**知识树**

1. **本节重点知识**

    1. **自定义 Hook 概念与意义**
        - 自定义 Hook：一种抽取组件间共享逻辑的机制，命名需以 `use` 开头。
        - 优势：提高组件的专一性、易于维护、促进代码复用。
    2. **组件与 Hook 职责分离**

        - 组件（UI）：处理渲染、交互、状态更新。
        - Hook（数据逻辑）：封装数据请求、缓存管理、乐观更新、错误处理等。

2. **自定义 Mutation Hook 创建步骤**

    1. **抽取代码到独立 Hook**

        - 创建新文件：如 `useAddTodo.ts`。
        - 抽取 Mutation 逻辑、`useQueryClient` 和回调函数 (`onMutate`、`onSuccess`、`onError`) 到新 Hook。

    2. **明确 Hook 职责（数据管理）**

        - Hook 中避免任何直接操作 UI 的逻辑（如 DOM 操作或 React refs）。
        - UI 更新逻辑（如清空输入框）交由组件执行。

    3. **提供回调接口给组件**

        - 在 Hook 中定义回调函数参数，让组件决定何时、如何更新 UI：

        ```ts
        function useAddTodo(onAdd: () => void) { ... }
        ```

    4. **返回 Mutation 对象**

        - Hook 返回 Mutation 对象供组件使用：

        ```ts
        const mutation = useMutation(...);
        return mutation;
        ```

    5. **定义共享的常量（缓存键）**

        - 避免缓存键重复与拼写错误，将缓存键定义到独立的常量文件：

        ```ts
        // constants.ts
        export const CACHE_KEY_TODOS = ['todos'];
        ```

    6. **优化泛型类型与上下文（Context）接口**

        - 将上下文接口定义在 Hook 文件中，明确类型。

3. **代码重构与职责分离的完整过程**

    **教师实现顺序：**

    - 创建 `useAddTodo` Hook 文件。
    - 从组件抽取数据管理逻辑到 Hook。
    - Hook 接受回调函数参数，由组件决定 UI 逻辑。
    - Hook 返回 Mutation 对象给组件调用。
    - 提取公共缓存键到常量文件中。
    - 组织 import，去除冗余导入。

---

**完整代码示例**

步骤一：定义缓存键常量

```ts
// react-query/constants.ts
export const CACHE_KEY_TODOS = ['todos'];
```

步骤二：创建自定义 Hook (`useAddTodo.ts`)

```tsx
// hooksuseAddTodo.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ToDo } from './useTodos';
import { CACHE_KEY_TODOS } from '../constants';

// 上下文类型
interface AddTodoContext {
  previousTodos: ToDo[];
}

// mutation 函数
const addToDoRequest = async (newToDo: ToDo): Promise<ToDo> => {
  const response = await axios.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newToDo);
  return response.data;
};

// 自定义 Hook
export const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ToDo, Error, ToDo, AddTodoContext>(
    addToDoRequest,
    {
      onMutate: (newToDo) => {
        const previousTodos = queryClient.getQueryData<ToDo[]>(CACHE_KEY_TODOS) || [];

        queryClient.setQueryData(CACHE_KEY_TODOS, [newToDo, ...previousTodos]);

        return { previousTodos };
      },
      onSuccess: (savedToDo, newToDo) => {
        queryClient.setQueryData<ToDo[]>(CACHE_KEY_TODOS, (todos = []) =>
          todos.map((todo) => (todo === newToDo ? savedToDo : todo))
        );

        onAdd(); // 通知组件完成数据更新后的 UI 操作
      },
      onError: (_error, _newToDo, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(CACHE_KEY_TODOS, context.previousTodos);
        }
      },
    }
  );

  return mutation;
};
```

步骤三：组件调用自定义 Hook (`ToDoForm.tsx`)

```tsx
// ToDoForm.tsx
import React, { useRef } from 'react';
import { useAddTodo } from './hooks/useAddTodo';

export const ToDoForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 调用自定义 Hook 并提供 UI 更新回调
  const addToDoMutation = useAddTodo(() => {
    if (inputRef.current) {
      inputRef.current.value = ''; // UI更新逻辑
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = inputRef.current?.value.trim();
    if (!title) return;

    const newToDo = {
      userId: 1,
      id: Date.now(), // 临时ID
      title,
      completed: false,
    };

    addToDoMutation.mutate(newToDo);
  };

  return (
    <>
      {addToDoMutation.error && (
        <div className="alert alert-danger">
          错误：{addToDoMutation.error.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="输入新的待办事项"
        />
        <button type="submit" disabled={addToDoMutation.isLoading}>
          添加
        </button>
      </form>
    </>
  );
};
```

---

**注意事项与总结**

- **职责明确**：
    - Hook 专注数据管理逻辑（网络请求、缓存更新）。
    - 组件专注 UI 呈现和用户交互逻辑。
- **避免 UI 依赖**：
    - Hook 内部不能直接访问 DOM 或 UI 状态，如 React refs。
    - UI 操作通过回调函数传递给 Hook，更具通用性。
- **使用统一常量管理缓存键**：
    - 防止拼写错误，便于统一维护。

---

**教师实现步骤快速回忆（编程时参考）**

① 创建 `useAddTodo` Hook 文件 → 提取 Mutation 与缓存逻辑  
② Hook 提供 UI 操作回调，组件传入更新 UI 的具体逻辑  
③ Hook 返回 Mutation 对象给组件调用  
④ 提取缓存键到统一常量文件  
⑤ 优化 imports，去除冗余导入

通过以上笔记，可深入理解并熟练使用 React Query 自定义 Hook 模式，有效管理数据逻辑与 UI 分离。

## 20- 创建可复用的 API 客户端

> 简述：为了进一步分离关注点并减少代码重复，可以创建一个通用的 API 客户端类或模块，封装底层的 HTTP 请求逻辑（如使用 Axios）。自定义查询和变更 Hook 则依赖此 API 客户端来执行实际的网络通信。

**知识树**

1.  API 客户端的职责：
    - 封装 HTTP 请求的细节（如 GET, POST, PUT, DELETE 等）。
    - 处理基础 URL、请求头、错误转换等通用逻辑。
    - 提供类型安全的方法供上层（如自定义 Hooks）调用。
2.  创建 API 客户端类：
    - **Axios 实例**：
        - 创建一个配置了基础 URL（如`https://jsonplaceholder.typicode.com`）的 Axios 实例，避免在每个请求中重复完整 URL。
        - `axios.create({ baseURL: '...' })
    - **APIClient 类封装请求逻辑**：
        - **构造函数**：接收 API 端点（endpoint）作为参数，用于指定操作的资源路径。
        - 封装 `getAll`、`post` 等通用 HTTP 方法。
        - 使用泛型参数保证类型安全与通用性。
3.  解决`this`上下文问题：
    - 问题：当 API 客户端类的方法作为回调（如`queryFn`或`mutationFn`）传递给 React Query 时，方法内部的`this`可能丢失其指向类实例的上下文，导致`this.endpoint`等属性为`undefined`。
    - 解决方案：
        - **箭头函数**：在类中使用箭头函数定义方法。箭头函数不绑定自身的`this`，会捕获其词法作用域（即类实例）的`this`。这是推荐的方式。
        - `bind`方法：在传递方法引用时使用`.bind(apiClientInstance)`，显式绑定`this`上下文。较繁琐。
4.  在自定义 Hooks 中使用 API 客户端：
    - 在自定义 Hook（如`useTodos`, `useAddTodo`）的顶层创建 API 客户端的实例，传入特定端点和实体类型。
    - `const apiClient = new ApiClient<Todo>('/todos');`
    - 将 API 客户端的方法引用作为`queryFn`或`mutationFn`传递给`useQuery`或`useMutation`。
    - `queryFn: apiClient.getAll`
    - `mutationFn: apiClient.post`
5.  实现步骤
    - 步骤 ①：创建统一 Axios 实例，设置 baseURL。
    - 步骤 ②：封装 APIClient 类，抽取 Axios 请求与数据解析逻辑。
    - 步骤 ③：泛型定义优化，定义通用数据接口。
    - 步骤 ④：解决方法调用时 this 丢失问题，使用箭头函数。
    - 步骤 ⑤：更新 Hook 中调用逻辑，改为调用 APIClient 实例方法。
6.  优势：
    - **代码复用**：HTTP 请求逻辑集中在 API 客户端，避免在每个 Hook 中重复。
    - **可维护性**：修改 API 基础 URL 或通用请求逻辑只需在 API 客户端一处进行。
    - **关注点分离**：自定义 Hooks 专注于 React Query 的集成和特定业务逻辑，API 客户端专注于网络通信。
    - **可测试性**：API 客户端可以独立测试。

**代码示例**

1.  `src/services/apiClient.ts` (可复用的 API 客户端)

    ```ts
    import axios, { AxiosInstance } from 'axios';

    const axiosInstance: AxiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    class ApiClient<T> {
      endpoint: string;

      constructor(endpoint: string) {
        this.endpoint = endpoint;
      }

      // 使用箭头函数确保this上下文正确
      getAll = (): Promise<T[]> => {
        return axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
      };

      post = (data: T) =>{ // 允许传入不带id的对象用于创建
        return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
      };

      // 可以添加更多方法如 getOne, update, delete
    }

    export default ApiClient;
    ```

    - **解析：**
        - `getAll` 返回数组类型数据。
        - `post` 接收单个数据项并返回新增的数据。
        - 箭头函数确保 `this` 正确绑定。

2.  `src/hooks/useTodos.ts` (使用 ApiClient)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import ApiClient from '../services/apiClient'; // 导入ApiClient
    // import { Todo } from './interfaces';
    // import { CACHE_KEY_TODOS } from '../react-query/constants';

    export interface Todo { id: number; title: string; completed: boolean; userId: number; } // 临时定义
    export const CACHE_KEY_TODOS = ['todos']; // 临时定义


    const apiClient = new ApiClient<Todo>('/todos'); // 创建ApiClient实例

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll, // 使用ApiClient的方法，方法引用，不调用
        staleTime: 10 * 60 * 1000,
      });
    };

    export default useTodos;
    ```

    **优化点：**

    - 去除 Axios 依赖和重复数据解析逻辑。
    - `queryFn` 直接引用 APIClient 方法。

3.  `src/hooks/useAddTodo.ts` (使用 ApiClient)

    ```ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import ApiClient from '../services/apiClient';
    // import { CACHE_KEY_TODOS } from '../react-query/constants';

    export interface Todo { id: number; title: string; completed: boolean; userId: number; } // 临时定义
    export const CACHE_KEY_TODOS = ['todos']; // 临时定义
    interface AddTodoContext { previousTodos?: Todo[]; } // 临时定义上下文用于乐观更新


    const apiClient = new ApiClient<Todo>('/todos');


    const useAddTodo = (onAdd: () => void) => {
      const queryClient = useQueryClient();

      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>(
        apiClient.post, // 直接引用 APIClient post 方法
        {
          onMutate: async (newTodoData) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
            const optimisticTodo: Todo = { ...newTodoData, id: Date.now(), completed: false, userId: 1 };
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (old = []) => [optimisticTodo, ...old]);
            return { previousTodos };
          },
          onSuccess: (savedTodo, newTodoData, context) => {
            if (options?.onAdd) options.onAdd();
            // 乐观更新成功后的缓存调整逻辑...
             queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (old = []) =>
              old.map(todo => {
                // 尝试找到乐观添加的项（可能通过比较title等非ID属性，或如果在onMutate中生成了唯一临时ID）
                // 这是一个简化的例子，实际场景可能需要更健壮的匹配逻辑
                const tempOptimisticItem = context?.previousTodos?.find(pt => pt.title === newTodoData.title && !pt.id); // 假设乐观项没有服务器ID
                if (tempOptimisticItem && todo.id === tempOptimisticItem.id) { // 如果能匹配上临时ID
                    return savedTodo;
                }
                // 如果乐观更新时是直接替换了某个ID，或者服务器返回的ID与乐观更新时使用的ID一致
                if (todo.id === savedTodo.id) {
                    return savedTodo;
                }
                return todo;
              })
            );
          },
          onError: (error, newTodoData, context) => {
            if (context?.previousTodos) {
              queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
            }
          },
        }
      );
    };

    export default useAddTodo;
    ```

## 21- 创建可复用的 HTTP 服务

> **简述：**  
> 为消除各 Hook 中重复实例化 APIClient 的问题，本节将把 Todo 相关的接口和数据类型统一抽取到单独的 Service 文件中，以单例模式导出，保证全应用只使用同一个 API 客户端实例和类型定义，从而提升可维护性和减少出错风险。

---

**知识树**

1. **问题概述：Endpoint 与类型重复**

    - 多处硬编码 `'/todos'` 容易拼写错误
    - ToDo 接口在多个模块中定义，产生耦合和重复

2. **单例 Service 模式**

    - 在 `services/todoService.ts` 中：
        - 导入通用 `APIClient`
        - 定义并导出单例 `todoService` 实例

3. **类型迁移与统一**

    - 将 `interface ToDo` 从 Hook 文件移动到 `todoService.ts`
    - 在各处统一从 `todoService` 导入 `ToDo` 类型

4. **Hook 文件的精简改造**

    - **useTodos.ts**：移除对 `APIClient` 的直接依赖，改为引用 `todoService.getAll`
    - **useAddTodo.ts**：移除 `todosClient` 实例化，改用 `todoService.post`

5. **维护与复用优势**

    - 单一文件管理所有 Todo API 接口和类型
    - 拼写错误或修改路径只需在一处更新
    - Hook 更加专注于缓存和逻辑，不关心底层请求细节

---

**代码示例**

1. **`services/todoService.ts`：创建并导出单例**

    ```ts
    // services/todoService.ts
    import { APIClient } from './apiClient';

    // 数据类型统一定义
    export interface ToDo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }

    // 单例 Service 实例，负责所有 /todos 接口调用
    const todoService = new APIClient<ToDo>('/todos');

    export default todoService;
    ```

2. **`useTodos.ts`：使用统一 Service**

    ```ts
    // useTodos.ts
    import { useQuery } from '@tanstack/react-query';
    import todoService, { ToDo } from './services/todoService';

    export const useTodos = () =>
      useQuery<ToDo[]>({
        queryKey: ['todos'],
        queryFn: todoService.getAll,  // 直接引用 Service 方法
      });
    ```

3. **`useAddTodo.ts`：Mutation 时引用同一 Service**

    ```ts
    // useAddTodo.ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import todoService, { ToDo } from './services/todoService';
    import { CACHE_KEY_TODOS } from '../constants';

    interface AddTodoContext {
      previousTodos: ToDo[];
    }

    export const useAddTodo = (onAdd: () => void) => {
      const queryClient = useQueryClient();

      return useMutation<ToDo, Error, ToDo, AddTodoContext>(
        todoService.post,  // 直接使用 Service 的 post 方法
        {
          onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData<ToDo[]>(CACHE_KEY_TODOS) || [];
            queryClient.setQueryData(CACHE_KEY_TODOS, [newTodo, ...previousTodos]);
            return { previousTodos };
          },
          onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<ToDo[]>(CACHE_KEY_TODOS, (todos = []) =>
              todos.map(todo => (todo === newTodo ? savedTodo : todo))
            );
            onAdd();
          },
          onError: (_err, _new, context) => {
            if (context?.previousTodos) {
              queryClient.setQueryData(CACHE_KEY_TODOS, context.previousTodos);
            }
          },
        }
      );
    };
    ```

> **备注：**
> 通过这种单例 Service 的方式，所有与 `/todos` 交互的逻辑都在 `todoService.ts` 中集中管理；
> Hook 中只需关注缓存与回调，减少重复代码；
> 未来若需扩展更多 HTTP 方法（如 `update`, `delete`），可统一在 `todoService.ts` 中添加。

## 22- 理解应用的架构层次

> **简述：**  
> 应用通常由多层架构组成，每层只负责自己的职能，形成清晰、可维护的系统。底层是 **API 客户端**，负责所有 HTTP 请求；上层是 **HTTP 服务**，为特定资源（如 ToDo、Post）提供封装；再往上是 **自定义 React Query 钩子**，集中管理缓存与请求逻辑；最上层是 **组件**，专注于 UI 渲染和用户交互。通过层次分明的设计，可有效降低耦合、减少重复、提升扩展性。

---

**知识树**

1. **API 客户端层（API Client）**

    - 封装通用的 Axios 实例
    - 提供基础的 HTTP 方法（`getAll`、`post`、`put`、`delete` 等）
    - 只关注底层请求与响应解析

2. **服务层（HTTP Service）**

    - 针对特定资源创建单例客户端
    - 定义资源接口 `ToDo`、`Post` 等类型
    - 对外暴露 `getAll()`、`post()` 等方法

3. **钩子层（Custom Hooks）**

    - 使用 React Query 的 `useQuery`、`useMutation`
    - 处理缓存管理、乐观更新、错误回滚
    - 仅调用服务层，无需关注底层细节

4. **表现层（Components）**

    - 调用自定义钩子获取或变更数据
    - 负责渲染列表、表单及错误提示
    - 完全专注于 UI 逻辑与用户交互

---

**代码示例**

1. **服务层 + 钩子层**

    ```ts
    // services/todosService.ts
    import { APIClient } from './apiClient';

    export interface ToDo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }

    // 单例 Service，专注 /todos 端点
    const todosService = new APIClient<ToDo>('/todos');
    export default todosService;
    ```

    ```ts
    // hooks/useTodos.ts
    import { useQuery } from '@tanstack/react-query';
    import todosService, { ToDo } from '../services/todosService';

    // 查询所有 ToDo
    export const useTodos = () =>
      useQuery<ToDo[]>({
        queryKey: ['todos'],
        queryFn: todosService.getAll,  // 直接引用，不调用
      });
    ```

2. **表现层（组件）**

    ```tsx
    // components/TodosList.tsx
    import React from 'react';
    import { useTodos } from '../hooks/useTodos';

    export const TodosList: React.FC = () => {
      const { data: todos, isLoading, isError, error } = useTodos();

      if (isLoading) return <p>加载中...</p>;
      if (isError) return <p>错误：{error.message}</p>;

      return (
        <ul>
          {todos!.map(todo => (
            <li key={todo.id}>
              #{todo.id} — {todo.title}
            </li>
          ))}
        </ul>
      );
    };
    ```

    - 组件仅调用 `useTodos`，专注于渲染与状态显示，完全不关心请求细节。

---

通过以上分层与示例，可清晰回忆并实践“底层请求 → 服务封装 → 钩子管理 → 组件渲染”的架构模式，实现高内聚、低耦合的应用设计。

## 23- 第三部分：项目实战

> 简述：本节预告将进入 React Query 学习的第三阶段——项目实战。通过将前面学到的数据查询和变更知识应用于“Game Hub”项目，实现缓存和无限滚动等高级功能，并在此过程中进行代码重构和改进。

**知识树**

1.  项目实战目标：
    - 应用 React Query 知识增强现有项目（Game Hub）。
    - 巩固数据查询、数据变更、缓存管理、自定义 Hook 等概念。
2.  核心功能实现：
    - **缓存 (Caching)**：利用 React Query 的缓存机制优化 Game Hub 的数据加载性能。
    - **无限滚动 (Infinite Scroll)**：为游戏列表等长列表实现无限滚动加载，提升用户体验。
3.  学习过程：
    - 通过具体练习逐步将 React Query 集成到 Game Hub 项目中。
    - 在实践中进行代码重构，提升代码质量和组织结构。
4.  预期成果：
    - 一个功能更完善、性能更优的 Game Hub 项目。
    - 更深入地理解 React Query 在真实项目中的应用。

**代码示例**

(本节为过渡性内容，无特定代码示例)

## 24- 练习 - 获取游戏类型 (Genres)

> 简述：此练习要求将 Game Hub 项目中原先使用静态数据加载游戏类型（Genres）的`useGenres` Hook，改造为使用 React Query 从后端 API 获取数据，并利用 React Query 的`initialData`特性优化首次加载体验。

**知识树**

1.  练习背景与目标：
    - 原`useGenres` Hook：使用项目内嵌的静态`genres.ts`数据。
    - 改造目标：改为通过 API 请求获取游戏类型，并使用 React Query 管理此数据。
    - 性能优化考虑：虽然 API 获取更动态，但游戏类型数据变化不频繁，仍需考虑加载性能。
2.  React Query 设置 (回顾)：
    - 安装`npm install @tanstack/react-query@4.28.0 @tanstack/react-query-devtools@4.28.0`
    - 在`main.tsx`中配置`QueryClient`和`QueryClientProvider`，并添加`ReactQueryDevtools`。
3.  改造`useGenres.ts` Hook：
    - **移除静态数据依赖**：不再直接返回静态数据。
    - **API 客户端**：利用项目中已有的`apiClient`实例（通常在`src/services/apiClient.ts`中配置了基础 URL 和 API 密钥）。
    - **`useQuery`调用**：
        - `queryKey`: `['genres']`。
        - `queryFn`: 一个调用`apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data)`的函数。
            - 注意：RAWG API 返回的数据通常包裹在一个对象中，如`{ count: number, next: string | null, previous: string | null, results: Genre[] }`。因此，`queryFn`需要返回`res.data`，而`useQuery`的`TData`泛型应为`FetchResponse<Genre>`。
        - `staleTime`: 设置一个较长的`staleTime`（如 24 小时），因为游戏类型数据不常变。
            `staleTime: 24 * 60 * 60 * 1000, // 24 hours`
        - `initialData`: 使用原先的静态`genres`数据作为初始数据。
            - `initialData: staticGenresData` (其中`staticGenresData`需要符合`FetchResponse<Genre>`的结构，即包含`count`和`results`等属性)。
            - 如果静态数据只是`Genre[]`数组，需要将其包装成`{ count: staticGenresArray.length, results: staticGenresArray, next: null, previous: null }`。
    - **类型定义**：确保`Genre`接口和`FetchResponse<T>`接口已定义并正确使用。
4.  组件 (`GenreList.tsx`) 适配：
    - `useGenres` Hook 现在返回 React Query 的查询对象。
    - 解构`data`, `isLoading`, `error`。
    - 渲染时，实际的游戏类型数组位于`data.results`。
    - 处理`data`可能为`undefined`的情况（使用可选链`?.`）。
5.  调试与验证：
    - 运行应用，检查游戏类型是否正常加载。
    - 使用 React Query DevTools 观察`genres`查询的状态、缓存数据和`staleTime`。
    - 由于设置了`initialData`，首次加载时不应有网络请求去获取 genres，而是直接使用初始数据。后续如果数据过时且触发刷新条件，才会发起网络请求。

**代码示例**

1.  `src/hooks/useGenres.ts` (改造后)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import apiClient from '../services/apiClient';
    import genresStatic from '../data/genres'; // 导入静态数据
    import { FetchResponse } from './useData'; // 假设FetchResponse接口已定义

    export interface Genre {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }

    const useGenres = () => {
      return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () =>
          apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: { // 确保initialData结构匹配FetchResponse
            count: genresStatic.length,
            results: genresStatic
        }
      });
    };

    export default useGenres;
    ```

    - `FetchResponse` 接口示例:
        ```ts
        // 假设在 useData.ts 或 apiClient.ts 中定义
        // export interface FetchResponse<T> {
        //   count: number;
        //   results: T[];
        // }
        ```

2.  `src/components/GenreList.tsx` (适配)

    ```tsx
    import useGenres from '../hooks/useGenres';
    // ... 其他导入

    function GenreList(/* ...props... */) {
      const { data, isLoading, error } = useGenres();

      if (error) return null; // 或显示错误信息
      if (isLoading) return <Spinner />; // 假设Spinner组件已存在

      return (
        // ...
        //   {data?.results.map((genre) => ( // 注意访问 data.results
        //     <ListItem key={genre.id} /* ... */ >
        //       {/* ... */}
        //       {genre.name}
        //     </ListItem>
        //   ))}
        // ...
      );
    }
    ```

## 25- 练习 - 获取平台 (Platforms)

> 简述：此练习要求参照获取游戏类型（Genres）的改造方法，将 Game Hub 项目中原先使用静态数据加载游戏平台（Platforms）的`usePlatforms` Hook，也改造为使用 React Query 从后端 API 获取数据，并同样利用`initialData`优化首次加载。

**知识树**

1.  练习目标与步骤：与上一个练习（获取 Genres）类似。
    - 改造`usePlatforms.ts` Hook。
    - 使用 React Query 的`useQuery`。
    - 从 API (`/platforms/lists/parents`端点获取父级平台) 获取数据。
    - 设置合适的`staleTime`。
    - 使用静态平台数据作为`initialData`。
    - 适配使用此 Hook 的组件（如`PlatformSelector.tsx`）。
2.  `usePlatforms.ts` Hook 改造要点：
    - `queryKey`: `['platforms']`。
    - `queryFn`: 调用`apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data)`。
        - 端点`/platforms/lists/parents`用于获取顶级平台，避免获取所有子平台版本。
    - `staleTime`: 设置较长，如 24 小时。
    - `initialData`: 使用静态`platforms`数据，并确保其结构符合`FetchResponse<Platform>`。
3.  类型定义：
    - `Platform`接口。
    - 复用`FetchResponse<T>`接口。
4.  组件适配 (`PlatformSelector.tsx`)：
    - `usePlatforms` Hook 返回 React Query 查询对象。
    - 解构`data`, `isLoading`, `error`。
    - 渲染时，平台数组位于`data.results`。
    - 处理`data`可能为`undefined`的情况。

**代码示例**

1.  `src/hooks/usePlatforms.ts` (改造后)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import apiClient from '../services/apiClient';
    import platformsStatic from '../data/platforms'; // 导入静态平台数据
    import { FetchResponse } from './useData'; // 假设FetchResponse接口已定义

    export interface Platform {
      id: number;
      name: string;
      slug: string;
    }

    const usePlatforms = () => {
      return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () =>
          apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents') // 获取父级平台
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: { // 确保initialData结构匹配FetchResponse
            count: platformsStatic.length,
            results: platformsStatic
        }
      });
    };

    export default usePlatforms;
    ```

2.  `src/components/PlatformSelector.tsx` (适配)

    ```tsx
    import usePlatforms from '../hooks/usePlatforms';
    // ... 其他导入

    function PlatformSelector(/* ...props... */) {
      const { data, error } = usePlatforms(); // isLoading可能不需要，因为有initialData

      if (error) return null;

      return (
        // ...
        //   {data?.results.map((platform) => ( // 注意访问 data.results
        //     <MenuItem key={platform.id} /* ... */ >
        //       {platform.name}
        //     </MenuItem>
        //   ))}
        // ...
      );
    }
    ```

## 26- 练习 - 获取游戏 (Games)

> 简述：此练习要求将 Game Hub 项目中原用于获取游戏列表的自定义 Hook `useData`（一个通用的数据获取 Hook），替换为直接在`useGames` Hook 中使用 React Query 的`useQuery`，并移除不再需要的`useData` Hook。

**知识树**

1.  练习目标：
    - 在`useGames.ts` Hook 中直接使用`useQuery`来获取游戏数据。
    - 移除项目中对旧的`useData.ts` Hook 的依赖。
    - 最终删除`useData.ts`文件。
2.  `useGames.ts` Hook 改造：
    - 移除对`useData`的调用。
    - 直接调用`useQuery<FetchResponse<Game>, Error>({...})`：
        - `queryKey`: `['games', gameQuery]`。`gameQuery`是包含所有过滤和排序参数的对象，将其作为`queryKey`的一部分可以确保参数变化时重新获取并正确缓存。
        - `queryFn`: 一个调用`apiClient.get<FetchResponse<Game>>('/games', { params: gameQueryParameters })`的函数。
            - `gameQueryParameters`需要从`gameQuery`对象转换成 API 期望的查询参数格式（如`genres`, `platforms`, `ordering`, `search`等）。
        - （可选）设置`staleTime`。
    - 类型定义：确保`Game`接口和`FetchResponse<Game>`类型正确。
3.  组件适配 (`GameGrid.tsx`)：
    - `useGames` Hook 现在返回 React Query 查询对象。
    - 解构`data`, `isLoading`, `error`。
    - 游戏列表位于`data.results`。
    - 处理错误显示 (`error.message`)。
4.  清理工作：
    - **`FetchResponse`接口迁移**：原`FetchResponse<T>`接口定义在`useData.ts`中。由于`useData.ts`将被删除，需将此接口移至一个更合适的位置，如`apiClient.ts`或一个专门的类型定义文件，并更新所有引用此接口的导入路径。
    - **删除`useData.ts`**：在确认所有依赖都已移除后，安全删除该文件。
    - **构建检查**：运行 TypeScript 编译器（如`npm run build`或`tsc --noEmit`）确保所有类型引用都已正确更新，没有编译错误。
5.  修复潜在问题：
    - 视频中提到，在改造过程中，发现游戏按平台筛选时参数名错误（应为`parent_platforms`而非`platforms`），需在`useGames`的`queryFn`中正确映射。

**代码示例**

1.  `src/hooks/useGames.ts` (改造后)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import apiClient, { FetchResponse } from '../services/apiClient'; // 导入FetchResponse
    import { GameQuery } from '../App'; // 假设GameQuery接口在App.tsx或共享位置

    export interface Platform { id: number; name: string; slug: string; } // 确保Platform接口可用
    export interface Game {
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[]; // 游戏对象中平台的数据结构
      metacritic: number;
      rating_top: number; // 用于评分显示
    }

    const useGames = (gameQuery: GameQuery) => {
      return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
          apiClient
            .get<FetchResponse<Game>>('/games', {
              params: { // 将gameQuery映射到API参数
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id, // 注意参数名
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
              },
            })
            .then(res => res.data),
        // staleTime: ... // 可选
      });
    };

    export default useGames;
    ```

2.  `src/components/GameGrid.tsx` (适配)

    ```tsx
    import useGames from '../hooks/useGames';
    // ... 其他导入

    function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
      const { data, error, isLoading } = useGames(gameQuery);

      if (error) return <p>{error.message}</p>;
      // ... (isLoading处理和渲染 data.results)
      // return (
      //   <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
      //     {isLoading && skeletons.map(s => <GameCardContainer key={s}><GameCardSkeleton /></GameCardContainer>)}
      //     {data?.results.map((game) => (
      //       <GameCardContainer key={game.id}>
      //         <GameCard game={game} />
      //       </GameCardContainer>
      //     ))}
      //   </SimpleGrid>
      // );
    }
    ```

3.  `src/services/apiClient.ts` (迁移`FetchResponse`接口)

    ```ts
    import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

    export interface FetchResponse<T> { // 将接口定义移至此处
      count: number;
      //next: string | null;
      //previous: string | null;
      results: T[];
    }

    const axiosInstance = axios.create({ /* ... */ });
    // class ApiClient ...
    export default axiosInstance; // 或者导出ApiClient类实例
    ```

## 27- 练习 - 移除重复接口

> 简述：此练习旨在通过将重复定义的`Platform`接口统一到其最相关的模块（如`usePlatforms.ts`）并导出，然后在其他使用到该接口的地方进行导入，来消除代码中的冗余类型定义，提高代码的可维护性。

**知识树**

1.  问题识别：
    - `Platform`接口在多个文件中被重复定义（如`useGames.ts`和`usePlatforms.ts`）。
2.  解决方案：单一来源原则 (Single Source of Truth)
    - 选择一个最合适的模块作为`Platform`接口的权威定义源。通常是与该数据类型最紧密相关的 Hook 或服务模块，例如`usePlatforms.ts`（因为它专门用于获取平台数据）。
    - 在该源模块中导出`Platform`接口。
    - 在所有其他需要此接口的文件中，删除本地定义，改为从源模块导入。
3.  重构步骤：
    1.  确定`Platform`接口的权威源文件（如`usePlatforms.ts`）。
    2.  在该文件中确保`Platform`接口已定义并使用`export`关键字导出。
        `export interface Platform { id: number; name: string; slug: string; }`
    3.  查找项目中所有其他对`Platform`接口的定义或引用。
        - VS Code 等编辑器提供“Find All References”功能。
    4.  逐个修改引用点：
        - 删除文件内的本地`Platform`接口定义。
        - 添加导入语句从权威源文件导入`Platform`接口。
            `import { Platform } from './usePlatforms';` (路径根据实际文件结构调整)
    5.  清理未使用的导入：在修改完成后，使用编辑器的“Organize Imports”功能移除多余的导入语句。
    6.  构建检查：运行 TypeScript 编译，确保所有类型引用正确无误。
4.  益处：
    - **可维护性**：修改接口定义只需在一处进行。
    - **一致性**：确保整个应用对同一数据类型的理解是一致的。
    - **代码简洁**：减少重复代码。

**代码示例**

1.  `src/hooks/usePlatforms.ts` (作为`Platform`接口的权威源)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    // ... 其他导入

    export interface Platform { // 导出Platform接口
      id: number;
      name: string;
      slug: string;
    }

    // const usePlatforms = () => { /* ... */ };
    // export default usePlatforms;
    ```

2.  `src/hooks/useGames.ts` (导入并使用`Platform`接口)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import { Platform } from './usePlatforms'; // 从usePlatforms导入
    // ... 其他导入

    export interface Game {
      // ...
      parent_platforms: { platform: Platform }[]; // 使用导入的Platform接口
      // ...
    }

    // const useGames = (gameQuery: GameQuery) => { /* ... */ };
    // export default useGames;
    ```

3.  其他可能引用`Platform`的组件 (如`PlatformIconList.tsx`, `PlatformSelector.tsx`, `App.tsx`) 也应类似地修改导入。

## 28- 创建可复用的 APIClient 类

> **简述：**  
> 在多个 Hook 中重复编写 `apiClient.get(...).then(res => res.data)`，既冗余又易出错。通过封装一个通用的、支持泛型与可选请求配置的 `APIClient` 类，将所有数据获取逻辑集中管理，各 Hook 只需实例化并调用 `getAll`，即可大幅简化代码并统一错误场景处理。

---

**知识树**

1. **识别问题：重复数据获取逻辑**

    - 每个 Hook 都需导入 `apiClient`、手动调用 `.get(...)`，并提取 `res.data`。
    - 接口变动或增加参数时，多处需同步修改。

2. **设计通用 APIClient 类**

    - **构造函数**：接收并保存 `endpoint`（如 `/genres`、`/platforms`、`/games`）。
    - **泛型支持**：`APIClient<T>`，`T` 表示资源类型，保证类型安全。
    - **箭头函数方法**：
        ```ts
        getAll = (config?: AxiosRequestConfig) => Promise<FetchResponse<T>>
        ```
        - 使用箭头函数避免 `this` 丢失。
        - 接收可选的 `config`（如 `params`），满足分页或过滤需求。

3. **统一分页响应接口**

    - 定义 `FetchResponse<T>`：
        ```ts
        interface FetchResponse<T> {
          count: number;
          next: string | null;
          previous: string | null;
          results: T[];
        }
        ```
    - `getAll` 方法直接返回解析后的 `FetchResponse<T>`，Hook 无需再调用 `.then`。

4. **Hook 中的简化使用**

    - 在各 Hook 顶部实例化对应客户端：
        ```ts
        const genresClient = new APIClient<Genre>('/genres');
        ```
    - 直接将 `queryFn` 设为 `genresClient.getAll` 或带 `params` 的箭头函数。

5. **逐个更新 Hook**

    - **useGenres**：`queryFn: () => genresClient.getAll()`
    - **usePlatforms**：`queryFn: () => platformsClient.getAll()`
    - **useGames**：`queryFn: () => gamesClient.getAll({ params: gameQuery })`

---

**代码示例**

1. **定义 `APIClient` 类**

    ```ts
    // services/apiClient.ts
    import axios, { AxiosRequestConfig } from 'axios';

    // 创建基础 Axios 实例
    const axiosInstance = axios.create({
      baseURL: 'https://api.example.com',
    });

    // 通用分页响应接口
    export interface FetchResponse<T> {
      count: number;
      next: string | null;
      previous: string | null;
      results: T[];
    }

    // 可复用 APIClient 类
    export class APIClient<T> {
      constructor(private endpoint: string) {}

      // 获取所有资源，支持可选请求配置
      getAll = (config?: AxiosRequestConfig) =>
        axiosInstance
          .get<FetchResponse<T>>(this.endpoint, config)
          .then(res => res.data);
    }
    ```

2. **更新 `useGenres` Hook**

    ```ts
    // hooks/useGenres.ts
    import { useQuery } from '@tanstack/react-query';
    import { APIClient, FetchResponse } from '../services/apiClient';
    import { Genre, staticGenres } from '../data/genres';

    const genresClient = new APIClient<Genre>('/genres');

    export function useGenres() {
      return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () => genresClient.getAll(),
        initialData: {
          count: staticGenres.length,
          next: null,
          previous: null,
          results: staticGenres,
        },
        staleTime: 1000 * 60 * 60 * 24,
      });
    }
    ```

3. **更新 `usePlatforms` Hook**

    ```ts
    // hooks/usePlatforms.ts
    import { useQuery } from '@tanstack/react-query';
    import { APIClient, FetchResponse } from '../services/apiClient';
    import { Platform, staticPlatforms } from '../data/platforms';

    const platformsClient = new APIClient<Platform>('/lists/parents');

    export function usePlatforms() {
      return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => platformsClient.getAll(),
        initialData: {
          count: staticPlatforms.length,
          next: null,
          previous: null,
          results: staticPlatforms,
        },
        staleTime: 1000 * 60 * 60 * 24,
      });
    }
    ```

4. **更新 `useGames` Hook**

    ```ts
    // hooks/useGames.ts
    import { useQuery } from '@tanstack/react-query';
    import { APIClient, FetchResponse } from '../services/apiClient';
    import { Game } from '../data/games';

    const gamesClient = new APIClient<Game>('/games');

    export function useGames(gameQuery: Record<string, any>) {
      return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => gamesClient.getAll({ params: gameQuery }),
      });
    }
    ```

---

> **总结：**
>
> -   **高内聚低耦合**：将所有网络请求与数据解析集中在 `APIClient` 类；
> -   **类型安全**：通过泛型与 `FetchResponse<T>`，保证返回数据的准确性；
> -   **简洁 Hook**：Hook 只关心调用 `getAll` 方法，删除重复代码，提高可维护性。

## 29- 实现无限加载（Infinite Queries）

> **简述：**  
> 无限加载模式让用户无需手动翻页，通过“加载更多”按钮动态请求下一页数据。React Query 提供 `useInfiniteQuery` 钩子，内置分页参数管理、缓存拼接与结束条件，帮助我们轻松实现不断加载新数据的体验。

**知识树**

1. **`useInfiniteQuery` 与分页参数**

    - **用途区别**：
        - `useQuery` 只能一次性获取单页数据；
        - `useInfiniteQuery` 支持多页加载、自动拼接。
    - **`pageParam` 参数**：
        - 钩子在第一次调用时传 `undefined`，可在 `queryFn` 中设默认值（如 `=1`）；
        - 后续调用由 `getNextPageParam` 返回的新页码决定。

2. **查询函数（`queryFn`）实现**

    - 接收解构的 `pageParam`：
        ```ts
        queryFn: ({ pageParam = 1 }) =>
          apiClient.getAll({ params: { ...gameQuery, page: pageParam } })
        ```
    - `queryFn`现在会接收一个包含`pageParam`属性的对象作为参数。`pageParam`代表下一页的标识（通常是页码）。
    - RAWG API 使用`page`查询参数进行分页。将分页页码通过 `params.page` 传给后端；
    - 返回值类型为泛型 `FetchResponse<T>`，包含 `{ count, next, previous, results }`。

3. **下一页参数计算（`getNextPageParam`）**

    - 签名：`(lastPage, allPages) => number | undefined`
    - `lastPage`：最近一次请求返回的分页响应；
    - `allPages`：至今已加载的所有页数据数组；
    - **返回逻辑**：
        - 若 `lastPage.next` 为 truthy（后端指示还有更多页），返回 `allPages.length + 1`；
        - 否则返回 `undefined`，React Query 自动停止后续请求。

4. **组件渲染与“加载更多”交互 (`GameGrid.tsx`)**

    - **渲染多页数据**：
        ```tsx
        data.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.results.map(game => <GameCard key={game.id} game={game} />)}
          </React.Fragment>
        ))
        ```
    - **解构额外返回值**：
        ```ts
        const { fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(...);
        ```
    - **加载更多按钮**：
        - 条件渲染：`{hasNextPage && <Button ...>...</Button>}`；
        - 动态文案：加载中时显示“加载中…”，否则“加载更多”；
        - 点击触发：`onClick={() => fetchNextPage()}`。
        - `disabled`: 当`!hasNextPage`或`isFetchingNextPage`为`true`时。
    - **布局优化**：使用容器（如 `Box`）统一设置 `padding`，为按钮添加 `margin-top`。

---

**代码示例**

1.  `src/hooks/useGames.ts` (改造为`useInfiniteQuery`)

    ```ts
    import { useInfiniteQuery } from '@tanstack/react-query'; // 导入useInfiniteQuery
    import ApiClient, { FetchResponse } from '../services/apiClient';
    import { GameQuery } from '../App';
    // import { Game } from './interfaces';

    export interface Game { /* ... */ }
    const apiClient = new ApiClient<Game>('/games');

    const useGames = (gameQuery: GameQuery) => {
      return useInfiniteQuery<FetchResponse<Game>, Error>({ // 使用useInfiniteQuery
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => //① queryFn 接收 pageParam，默认 1
          apiClient.getAll({
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam, // 将pageParam用于API请求
            },
          }),
       // ② getNextPageParam 计算下一页或停止
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next ? allPages.length + 1 : undefined;
        },
        // staleTime: ... // 可选
      });
    };

    export default useGames;
    ```

2.  `src/components/GameGrid.tsx` (适配无限查询)

    ```tsx
    import React from 'react'; // 导入React以使用Fragment
    import useGames from '../hooks/useGames';
    // ... 其他导入 (Spinner, GameCardContainer, GameCard)
    // import { Box } from '@chakra-ui/react'; // 用于包裹和添加padding

    function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
      const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      } = useGames(gameQuery);

      // ... (skeletons, error, isLoading处理)

      return (
        // <Box padding="10px"> {/* 使用Box或Fragment包裹 */}
        <>
          {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}> */}
            {/* {isLoading && skeletons.map(s => <GameCardContainer key={s}><GameCardSkeleton /></GameCardContainer>)} */}
            {data?.pages.map((page, index) => ( // 遍历pages
              <React.Fragment key={index}>
                {page.results.map((game) => ( // 遍历每个page的results
                  // <GameCardContainer key={game.id}>
                  //   <GameCard game={game} />
                  // </GameCardContainer>
                   <GameCard key={game.id} game={game} /> // 简化示例
                ))}
              </React.Fragment>
            ))}
          {/* </SimpleGrid> */}
          {hasNextPage && ( // 仅当有下一页时显示按钮
            <button
              className="btn btn-primary mt-3" // Chakra UI: <Button onClick={() => fetchNextPage()} marginY={5}>
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
          )}
        </>
        // </Box>
      );
    }
    ```

## 30- 实现无限滚动（Implementing Infinite Scroll）

> **简述：**  
> 无限滚动让用户在浏览列表时，无需手动点击“加载更多”，页面滚动到底部时自动请求下一页数据。结合 `useInfiniteQuery` 与第三方库 `react-infinite-scroll-component`，我们只需配置加载项统计、判断是否还有更多、以及触发加载回调，即可轻松实现滚动加载的用户体验。

**知识树**

1.  `react-infinite-scroll-component`库：
    - 用途：一个流行的 React 组件，用于简化无限滚动功能的实现。
    - 安装：`npm install react-infinite-scroll-component`。
2.  集成步骤 (`GameGrid.tsx`)：
    - 导入`InfiniteScroll`组件
    - 包裹列表：使用`<InfiniteScroll>`组件包裹实际渲染游戏列表的容器（如`SimpleGrid`）。
    - **核心 Props 配置**：
        - `dataLength`: (number) **当前已加载并显示的项目总数**。不是 API 返回的总记录数。
            - 计算：`data.pages.reduce((total, page) => total + page.results.length, 0)`。
            - 初始值处理：由于`data`初始可能为`undefined`，计算时需提供默认值，如`data?.pages.reduce(...) || 0`。
        - `hasMore`: (boolean) 指示是否还有更多数据可供加载。直接使用`useInfiniteQuery`返回的`hasNextPage`。
            - 类型处理：`hasNextPage`可能为`boolean | undefined`，而`InfiniteScroll`期望`boolean`。使用`!!hasNextPage`将其转换为严格布尔值。
        - `next`: (function) 当需要加载更多数据时（用户滚动到底部且`hasMore`为`true`），此函数会被调用。应设置为`fetchNextPage`（由`useInfiniteQuery`提供）。
        - `loader`: (ReactNode) 在加载下一页数据时显示的加载指示器（如 Spinner 组件）。
3.  **计算 `dataLength`**

    - 使用 `data.pages`（由 `useInfiniteQuery` 提供）
    - `reduce` 汇总所有页的 `results.length`：

    ```ts
    const total = data?.pages.reduce((sum, page) => sum + page.results.length, 0 ) ||  0;
    ```

**代码示例**

1.  `src/components/GameGrid.tsx` (集成`react-infinite-scroll-component`)

    ```tsx
    import React from 'react';
    import InfiniteScroll from 'react-infinite-scroll-component'; // 导入
    import useGames from '../hooks/useGames';
    // ... 其他导入 (Spinner, GameCardContainer, GameCard, SimpleGrid)
    // import { Box } from '@chakra-ui/react';

    function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
      const {
        data,
        error,
        // isLoading, // isLoading主要用于初始加载，无限滚动中isFetchingNextPage更相关
        fetchNextPage,
        hasNextPage,
        // isFetchingNextPage, // loader prop会处理加载状态显示
      } = useGames(gameQuery);

      const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0
      ) || 0;

      if (error) return <p>{error.message}</p>;
      // 初始加载状态仍可由useGames的isLoading处理，或直接依赖InfiniteScroll的初始渲染
      // if (isLoading && fetchedGamesCount === 0) return <Spinner />; // 避免在已有数据时显示全局Spinner

      return (
        <InfiniteScroll
          dataLength={fetchedGamesCount} // 当前已加载的项目数
          hasMore={!!hasNextPage} // 是否还有更多数据
          next={fetchNextPage} // 加载下一页的函数
          loader={<Spinner />} // 加载指示器
        >
          {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px"> */}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  // <GameCardContainer key={game.id}>
                  //   <GameCard game={game} />
                  // </GameCardContainer>
                  <p key={game.id}>{game.name}</p> // 简化示例
                ))}
              </React.Fragment>
            ))}
          {/* </SimpleGrid> */}
        </InfiniteScroll>
      );
    }
    ```

## 31- 练习 - 简化游戏查询对象

> **简述：**  
> 原先将选中的 `genre` 与 `platform` 对象整体存入 `gameQuery`，导致 React Query 的 `queryKey` 过于臃肿，也增加了序列化风险。我们只需保留它们的 `id`，将查询参数由 `{ genre, platform }` 变更为 `{ genreId?, platformId? }`，并在需要显示名称的组件中通过相应的 Hook 查回完整对象，再读取其 `.name`。

---

**知识树**

1. **评估影响范围**

    - 查找 `GameQuery` 接口及所有引用：
        - `App.tsx`（状态定义与传参）
        - `GameHeading.tsx`（名称展示）
        - `useGames.ts`（查询参数）

2. **更新 `GameQuery` 接口**

    - 在 `App.tsx`（或单独类型文件）中将原有：
        ```ts
        interface GameQuery {
          genre?: Genre;
          platform?: Platform;
          // …
        }
        ```
        改为：
        ```ts
        interface GameQuery {
          genreId?: number;
          platformId?: number;
          // 其他筛选条件保持不变
        }
        ```

3. **修改 `App.tsx` 级别状态与传参**

    - 组件状态：
        ```ts
        // ❌ 旧
        const [gameQuery, setGameQuery] = useState<GameQuery>({ genre: undefined, platform: undefined });
        // ✅ 新
        const [gameQuery, setGameQuery] = useState<GameQuery>({ genreId: undefined, platformId: undefined });
        ```
    - 回调时只存入 `.id`：
        ```ts
        // 选中某一分类后
        onSelect={genre => setGameQuery(q => ({ ...q, genreId: genre.id }))}
        // 选中某一平台后
        onSelect={platform => setGameQuery(q => ({ ...q, platformId: platform.id }))}
        ```

4. **修改名称展示组件 (`GameHeading.tsx`)**

    - 不再从 `gameQuery` 中拿 `.name`，而使用 Hook 查询并查找对应对象：

        ```tsx
        // 导入数据 Hook
        const { data: genres } = useGenres();
        const selectedGenre = genres?.results.find(g => g.id === gameQuery.genreId);

        <Heading>
          {selectedGenre?.name || 'All Games'}
        </Heading>
        ```

    - 平台同理，使用 `usePlatforms()` 查找 `platformId` 对应对象。

5. **修改查询 Hook (`useGames.ts`)**

    - 在调用 `apiClient.getAll` 时，只传入 `genreId` 和 `platformId` 作为 `params`：
        ```ts
        queryFn: () =>
          gamesClient.getAll({
            params: {
              page: pageParam,
              genre: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              // …其他参数
            }
          })
        ```

6. **验证与重构**

    - 确认所有组件与 Hook 编译无误；
    - 运行应用，选择分类与平台时，React Query DevTools 中的 `queryKey` 简化为 `['games', { genreId: 4, platformId: 1, … }]`；
    - 界面展示和筛选功能保持一致。

---

**代码示例**

1. **App.tsx**

    ```tsx
    import React, { useState } from 'react';
    import { GenreList } from './components/GenreList';
    import { PlatformSelector } from './components/PlatformSelector';
    import { GameGrid } from './components/GameGrid';

    interface GameQuery {
      genreId?: number;
      platformId?: number;
      // … 其他筛选字段
    }

    export const App: React.FC = () => {
      const [gameQuery, setGameQuery] = useState<GameQuery>({});

      return (
        <>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelect={genre => setGameQuery(q => ({ ...q, genreId: genre.id }))}
          />
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelect={platform => setGameQuery(q => ({ ...q, platformId: platform.id }))}
          />
          <GameGrid gameQuery={gameQuery} />
        </>
      );
    };
    ```

2. **GameHeading.tsx**

    ```tsx
    import React from 'react';
    import { useGenres } from '../hooks/useGenres';
    import { usePlatforms } from '../hooks/usePlatforms';

    interface Props {
      gameQuery: { genreId?: number; platformId?: number };
    }

    export const GameHeading: React.FC<Props> = ({ gameQuery }) => {
      const { data: genreData } = useGenres();
      const { data: platData } = usePlatforms();

      const genre = genreData?.results.find(g => g.id === gameQuery.genreId);
      const platform = platData?.results.find(p => p.id === gameQuery.platformId);

      return (
        <h2>
          {genre?.name || 'All Genres'} Games on {platform?.name || 'All Platforms'}
        </h2>
      );
    };
    ```

3. **useGames.ts（Infinite 或普通 Query）**

    ```ts
    import { useInfiniteQuery } from '@tanstack/react-query';
    import { APIClient, FetchResponse } from '../services/apiClient';
    import { Game } from '../data/games';

    const gamesClient = new APIClient<Game>('/games');

    export function useInfiniteGames(gameQuery: {
      genreId?: number;
      platformId?: number;
      // …
    }) {
      return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
          gamesClient.getAll({
            params: {
              page: pageParam,
              genre: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
            },
          }),
        getNextPageParam: (lastPage, allPages) =>
          lastPage.next ? allPages.length + 1 : undefined,
      });
    }
    ```

---

> **效果验证：**
>
> -   React Query DevTools 中 `queryKey` 仅含基本类型 `number`，可序列化且更易缓存命中；
> -   组件仍能根据 `genreId`/`platformId` 通过 Hook 查回名称并正确渲染；
> -   筛选行为和分页、无限加载等功能不变。

## 32- 练习 - 封装 ID 查找 Hook

> **简述：**  
> 在多个组件中使用相同的“根据 ID 在列表中查找对象”逻辑会导致重复代码。通过创建通用的 `usePlatform(id)` 与 `useGenre(id)` Hook，可将此逻辑集中管理，组件只需调用 Hook 即可获取对应对象，提高复用性和可维护性。

---

**知识树**

1. **场景与动机**

    - 多处组件（如 `GameHeading`、`PlatformSelector`）中都需根据 `platformId` 或 `genreId` 查找完整对象。
    - 重复 `find` 代码影响维护，抽取为 Hook 能简化组件。

2. **Hook 设计原则**

    - **单一职责**：只负责从缓存列表中查找并返回对象，不涉及 UI。
    - **参数可选**：接受 `id?: number`，支持未选中时返回 `undefined`。
    - **调用依赖**：内部调用已有的 `usePlatforms()` 或 `useGenres()`，不重复请求。

3. **实现要点**

    - 从相应的列表 Hook 中获得数据：`const { data } = usePlatforms()`
    - 使用可选链获取 `data.results`，再执行 `find(item => item.id === id)`
    - 直接返回查找到的对象或 `undefined`

4. **组件中使用**

    - **GameHeading**：
        ```tsx
        const genre = useGenre(gameQuery.genreId);
        const platform = usePlatform(gameQuery.platformId);
        <h2>
          {genre?.name || 'All Genres'} Games on {platform?.name || 'All Platforms'}
        </h2>
        ```
    - **PlatformSelector**：
        ```tsx
        const selected = usePlatform(selectedPlatformId);
        // 然后使用 selected?.name 控制高亮或其他 UI
        ```

5. **静态数据一致性校验**

    - 确保 `data/genres.ts` 和 `data/platforms.ts` 中的静态 `initialData` 格式与后端分页响应接口 `FetchResponse<T>` 保持一致（包含 `count`、`next`、`previous`、`results`），避免初始缓存类型不匹配错误。

---

**代码示例**

1. **`usePlatform.ts`**

    ```ts
    // hooks/usePlatform.ts
    import { usePlatforms } from './usePlatforms';
    import { Platform } from '../data/platforms';

    export function usePlatform(platformId?: number): Platform | undefined {
      const { data } = usePlatforms();
      return data?.results.find(p => p.id === platformId);
    }
    ```

2. **`useGenre.ts`**

    ```ts
    // hooks/useGenre.ts
    import { useGenres } from './useGenres';
    import { Genre } from '../data/genres';

    export function useGenre(genreId?: number): Genre | undefined {
      const { data } = useGenres();
      return data?.results.find(g => g.id === genreId);
    }
    ```

3. **组件调用示例**

    ```tsx
    // components/GameHeading.tsx
    import React from 'react';
    import { useGenre } from '../hooks/useGenre';
    import { usePlatform } from '../hooks/usePlatform';

    interface Props { gameQuery: { genreId?: number; platformId?: number } }

    export const GameHeading: React.FC<Props> = ({ gameQuery }) => {
      const genre = useGenre(gameQuery.genreId);
      const platform = usePlatform(gameQuery.platformId);

      return (
        <h2>
          {genre?.name || 'All Genres'} Games on {platform?.name || 'All Platforms'}
        </h2>
      );
    };
    ```

    ```tsx
    // components/PlatformSelector.tsx
    import React from 'react';
    import { usePlatform } from '../hooks/usePlatform';

    interface Props { selectedPlatformId?: number; /* … */ }

    export const PlatformSelector: React.FC<Props> = ({ selectedPlatformId, /* … */ }) => {
      const selected = usePlatform(selectedPlatformId);

      return (
        <option /* … */>
          {selected?.name || 'All Platforms'}
        </option>
      );
    };
    ```

## 33- 练习 - 简化时间计算

> 简述：此练习旨在引入`ms`库来替代手动计算毫秒数（如用于 React Query 的`staleTime`），使得时间相关的配置更易读、更易维护，并减少计算错误。

**知识树**

1.  `ms`库：
    - 安装：`npm i -D @types/ms`。
    - TypeScript 类型定义：如果库本身不包含类型定义，可能需要安装`@types/ms`：`npm install @types/ms --save-dev`。
2.  使用方法：
    - 导入：`import ms from 'ms';`
    - 转换：调用`ms('时间字符串')`会返回对应的毫秒数。
        - `ms('24h')` -> 86400000
        - `ms('1d')` -> 86400000
        - `ms('10m')` -> 600000
3.  在 React Query 配置中应用：
    - 将原先手动计算的`staleTime`或`cacheTime`值替换为使用`ms`库转换的值。
    - `staleTime: ms('24h')`

# 第三章-全局状态管理

> **简述：**  
> 本节介绍在 React 应用中管理全局状态的核心理念与工具，包括使用 `useReducer` 合并与简化逻辑、通过 React Context 共享数据、Context 与 Redux 的对比，以及新兴库 Zustand（译作 Zostant）的基本用法。无论你是刚接触全局状态管理，还是已有经验，这一节都将帮助你理解何时使用何种方案。

---

**知识树**

1. **Reducer 合并状态逻辑**

    - **用途**：将复杂的组件内多重 `useState` 或状态操作，统一到一个 `reducer(state, action)` 函数中管理。
    - **核心概念**：
        - `state`：当前状态；
        - `action`：描述状态变更意图的对象，通常有 `type` 与 `payload`；
        - **纯函数**：`reducer` 不应有副作用，返回新状态。
    - **使用场景**：状态逻辑高度关联、需要根据多种 action 更新状态时。

- **React Context**
    - **优点**：逻辑集中、易于测试、支持“乐观更新”“批量更新”等复杂场景。

2. **React Context 数据共享**

    - **用途**：在组件树中提供全局可读写的数据，无需层层传递 props。
    - **使用方式**：

        1. 创建 Context：`const MyContext = createContext(defaultValue)`；
        2. 提供数据：`<MyContext.Provider value={…}>`；
        3. 获取数据：`useContext(MyContext)` 或 `<MyContext.Consumer>`。

    - **常见误区**：
        - 误用场景：频繁更新的大量状态会导致过多重渲染；
        - 与本地状态的边界：不应将所有状态都放入 Context，否则失去组件局部状态的优势。
    - **Provider 与 Consumer**：
        - `MyContext.Provider` 包裹应用或局部区域；
        - 任何子孙组件使用 `useContext(MyContext)` 获取共享数据。
    - **何时使用**：主题（theme）、认证（auth）、语言（i18n）等“静态”或少量更新的全局数据；不适合频繁更新的大量状态。

3. **Context vs Redux**

    - **相同点**：都可实现跨组件状态共享。
    - **不同点**：
        - Context 自带、无额外依赖、适合中小型场景,但缺少中间件与调试工具；；
        - Redux 生态完善（中间件、DevTools、划分 Slice）、适合大型复杂应用。时间旅行调试、严格的单一 store；
    - **误区澄清**：Context 并非 Redux 替代品，它解决的是组件层级传递，而 Redux 专注状态管理与可预测性。

4. **Zustand（Zostant）简介**
    - **概述**：一个极简的全局状态管理库，基于 hooks，零样板代码。
    - **特性**：
        - 轻量：API 极简，性能优化（选择性订阅）；
        - 可组合：支持将多个 store 划分到不同模块；
        - 易上手：更接近 React Hooks 语法，无需 Provider 包裹。
        - 只需调用 Hook、基于闭包存储状态、内置中间件支持持久化与订阅。
    - **使用场景**：希望在保证简单性的同时，又需要集中管理和跨组件实时响应的状态。

## 1- 全局状态管理概览

> 简述：全局状态管理是指在整个 React 应用的不同组件层级间共享和维护数据状态的技术，它超越了单个组件内部的局部状态管理。

**知识树**

1.  全局状态与局部状态：
    - 局部状态：数据仅在单个组件内部使用和管理（如通过`useState`, `useReducer`）。
    - 全局状态：数据需要在多个组件间共享，这些组件可能不在直接的父子关系中。
2.  本节核心技术与概念：
    - **Reducer**：一种用于整合和集中化组件状态更新逻辑的函数模式。
    - **React Context**：React 内置的机制，用于在组件树中跨层级传递数据，避免 props 逐层传递（prop drilling）。
    - **Zustand**：一个轻量级、灵活的第三方全局状态管理库。
3.  学习目标：
    - 理解 Reducer 在状态管理中的作用和实现方式。
    - 掌握 React Context 的正确使用场景、优点和潜在的性能考量。
    - 辨析 React Context 与 Redux 等专门状态管理库的关系和适用范围。
    - 了解 Zustand 作为一种现代全局状态管理方案的特点和用法。

## 2- 使用 Reducer 整合状态逻辑

> **简述：**  
> 当组件内的状态更新逻辑日渐复杂时，直接使用多处的 `useState` 和局部更新会导致维护困难。**Reducer** 模式通过将所有状态变更集中到一个纯函数（reducer）中，实现状态更新逻辑的统一管理和可预测性。配合 React 的 `useReducer` 钩子，可以让组件只负责渲染和触发动作（dispatch），而所有“如何更新”都在 reducer 中集中定义。

---

**知识树**

1. **Reducer 概念**

    - **定义**：接收当前状态和一个“动作”（action），返回下一个状态的纯函数。
    - **形式**：`(state, action) => newState`
        - `state`：组件在动作发生前的状态。
        - `action`：一个描述发生了什么的对象，通常至少包含一个`type`属性（字符串类型））来标识动作类型，也可以包含其他附加数据（payload）。
        - `newState`：Reducer 根据当前状态和动作计算出的新状态。Reducer 必须是纯函数，不应直接修改`currentState`，而是返回一个全新的状态对象。
    - **优点**：集中管理状态更新逻辑、可预测、易于测试和复用。

2. **Action 对象**

    - **基本结构**：具有 `type` 字段（通常是字符串或字面量联合类型），可选地携带 `payload`。
    - **类型定义**：
        ```ts
        interface Action {
          type: 'increment' | 'reset';
          // payload?: any;
        }
        ```
    - **字面量联合**：使用 TypeScript 联合类型限制有效 `type`，避免拼写错误。

3. **`useReducer` 钩子用法**

    - **签名**：`const [state, dispatch] = useReducer(reducer, initialState)`
    - **参数**：
        - `reducer`：纯函数，负责根据 action 计算新状态。
        - `initialState`：初始状态值。
    - **返回值**：
        - `state`：当前状态；
        - `dispatch`：触发 action 的函数，用于向 Reducer 派发（dispatch）一个 action 对象。调用方式 `dispatch({ type: '...' })`。会触发 Reducer 函数的执行。

4. **Reducer 文件组织**

    - 创建独立的 `counterReducer.ts`：
        - 导出 reducer 函数；
        - 定义并导出 `Action` 接口和可能的 action 类型。
    - 在组件中只导入 reducer 与类型，不含状态逻辑。

5. **组件中触发 Action**

    - 在按钮或事件处理器中调用 `dispatch`，传入具 `type` 的 action 对象。
    - 不直接使用 `setState`，所有更新通过 reducer 统一进行。

6. **TypeScript 增强**

    - 为 reducer 的参数和返回值添加类型注解，确保编译期类型安全；
    - 使用 **字面量联合类型** 防止无效 action：
        ```ts
        type CounterAction = { type: 'increment' } | { type: 'reset' };
        ```

**代码示例**

1.  计数器 Reducer (`counterReducer.ts`)

    ```ts
    // src/reducers/counterReducer.ts
    interface Action {
      type: 'INCREMENT' | 'RESET'; // 使用联合类型约束action type
    }

    // Reducer函数
    function counterReducer(state: number, action: Action): number {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'RESET':
          return 0;
        default:
          return state; // 对于未识别的action，返回原状态
      }
    }

    export default counterReducer;
    ```

2.  在组件中使用 Reducer (`Counter.tsx`)

    ```tsx
    // src/components/Counter.tsx
    import { useReducer } from 'react';
    import counterReducer from '../reducers/counterReducer';

    function Counter() {
      // 使用useReducer Hook
      // 第一个参数是reducer函数，第二个是初始状态
      const [count, dispatch] = useReducer(counterReducer, 0);

      return (
        <div>
          <p>Count: {count}</p>
          {/* 点击按钮时，dispatch一个action对象 */}
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
        </div>
      );
    }

    export default Counter;
    ```

3.  reducer 是一个纯函数

```ts
// 纯 reducer：返回新状态，不修改原始 state
function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

// 非纯写法（不推荐）：直接修改 state 或产生副作用
function badReducer(state: { count: number }, action: any) {
  switch (action.type) {
    case 'increment':
      state.count += 1;       // 修改了原对象
      console.log(state.count); // 输出副作用
      return state;
    default:
      return state;
  }
}
```

在这里，“纯函数”有两个核心含义：

1. **相同输入必得相同输出**  
   给定完全相同的参数——在 reducer 里就是相同的 `state` 和相同的 `action`——函数总会返回相同的结果，不会因为外部环境的不同而改变。例如：

    ```ts
    // 纯函数：相同参数，永远返回相同值
    function add(a: number, b: number): number {
      return a + b;
    }
    ```

2. **没有副作用**  
   函数内部不会修改外部变量、不会产生网络请求、不会读写浏览器存储、也不会调用 `Date.now()`、`Math.random()` 等会导致结果不稳定的 API。它只是根据输入计算输出，并且**不会改变传入的参数**（避免直接修改 `state` 对象）：

    ```ts
    // 非纯函数：修改了外部变量 x
    let x = 0;
    function impureIncrement() {
      x += 1;
      return x;
    }

    // 非纯函数：修改了传入的数组
    function impurePush(arr: number[], value: number) {
      arr.push(value);
      return arr;
    }
    ```

在 reducer 的上下文里，这意味着：

- **不直接修改 `state`**，而是返回一个全新的状态值或对象。
- **仅依赖于传入的 `state` 和 `action`** 来计算新状态，不读取或修改组件外的任何数据。

这样做好处是：

- **可预测**：给定同样的当前状态和动作，你总能预先知道下一个状态是什么。
- **易于测试**：只需给 reducer 输入各种状态+动作组合，就能断言输出。
- **调试友好**：配合时间旅行调试（time-travel debugging）等工具时，状态变化始终可回溯、可重复。

## 3- 创建复杂 Action

> 简述：当不同的用户动作（Actions）需要携带不同结构或类型的附加数据（payload）时，应为每种动作定义专门的、具有明确 payload 结构的 Action 接口。通过 TypeScript 的联合类型，可以将这些具体的 Action 接口组合成一个总的 Action 类型，供 Reducer 进行类型安全的处理。

**知识树**

1.  Action Payload 的需求：
    - 某些 Action（如添加任务）需要额外数据（如任务内容）。
    - 另一些 Action（如删除任务）可能需要不同类型的数据（如任务 ID）。
    - 还有些 Action（如重置）可能不需要任何额外数据。
2.  为不同 Action 定义独立接口：
    - 每个接口描述一种特定类型的 Action。
    - 包含一个`type`属性，其值为唯一的字符串字面量（如`'ADD_TASK'`）。
    - 包含该 Action 特有的`payload`属性（或直接将 payload 字段作为接口属性）。
    - 示例：
        ```typescript
        interface AddTaskAction {
          type: 'ADD_TASK';
          payload: { id: number; title: string; }; // 或直接 task: Task;
        }
        interface DeleteTaskAction {
          type: 'DELETE_TASK';
          payload: { taskId: number; }; // 或直接 taskId: number;
        }
        ```
3.  创建 Action 联合类型：
    - 使用 TypeScript 的联合操作符 `|` 将所有具体的 Action 接口合并为一个总的 Action 类型。
    - `type TaskAction = AddTaskAction | DeleteTaskAction;`
    - Reducer 函数的`action`参数类型应为此联合类型。
4.  Reducer 中处理类型化的 Action：
    - 当在 Reducer 中使用`switch (action.type)`或`if (action.type === '...')`时，TypeScript 编译器能够在该分支内进行类型收窄（Type Narrowing）。
    - 这意味着在特定`case`或`if`块中，`action`对象会被识别为对应的具体 Action 接口类型，从而可以安全地访问其特有的`payload`属性，并获得类型提示。
5.  Dispatching 类型化的 Action：
    - 在组件中调用`dispatch`函数时，传递的 action 对象必须符合联合类型中某个具体 Action 接口的结构。TypeScript 会对此进行检查。

**代码示例**

1.  定义任务相关的 Action 接口和联合类型 (`tasksReducer.ts` 或类型定义文件)

    ```ts
    // src/reducers/tasksReducer.ts (或 types.ts)
    export interface Task {
      id: number;
      title: string;
    }

    export interface AddTaskAction {
      type: 'ADD';
      task: Task; // payload直接作为属性
    }

    export interface DeleteTaskAction {
      type: 'DELETE';
      taskId: number; // payload直接作为属性
    }

    // Action联合类型
    export type TaskAction = AddTaskAction | DeleteTaskAction;
    ```

2.  `tasksReducer.ts` 实现

    ```ts
    // src/reducers/tasksReducer.ts
    // (假设Task和TaskAction接口已导入或在此定义)

    function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
      switch (action.type) {
        case 'ADD':
          // 在此分支，action被识别为AddTaskAction类型
          // 可以安全访问 action.task
          return [...tasks, action.task];
        case 'DELETE':
          // 在此分支，action被识别为DeleteTaskAction类型
          // 可以安全访问 action.taskId
          return tasks.filter(task => task.id !== action.taskId);
        default:
          return tasks;
      }
    }
    export default tasksReducer;
    ```

3.  组件中 Dispatch 复杂 Action (`TaskList.tsx`)

    ```tsx
    // src/components/TaskList.tsx
    import { useReducer } from 'react';
    import tasksReducer, { Task, TaskAction } from '../reducers/tasksReducer';

    function TaskList() {
      const [tasks, dispatch] = useReducer(tasksReducer, []);

      const handleAddTask = () => {
        const newTask: Task = { id: Date.now(), title: `Task ${Date.now()}` };
        dispatch({ type: 'ADD_TASK', task: newTask }); // 派发AddTaskAction
      };

      const handleDeleteTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', taskId: taskId }); // 派发DeleteTaskAction
      };
      // ... (渲染逻辑)
      return (
          <div>
              <button onClick={handleAddTask}>Add Task</button>
              <ul>
                  {tasks.map(task => (
                      <li key={task.id}>
                          {task.title}
                          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                      </li>
                  ))}
              </ul>
          </div>
      );
    }
    export default TaskList;
    ```

## 4- Reducer 练习 - 登录

> 简述：此练习通过实现一个管理用户登录和登出状态的 Reducer (`authReducer`)，来实践定义不同类型的 Action（一个带用户名 payload 的登录 Action，一个不带 payload 的登出 Action），并在`LoginStatus`组件中使用`useReducer` Hook 来驱动 UI 变化。

**知识树**

1.  需求分析：
    - 状态：当前登录的用户名（字符串类型）。若为空字符串，则表示用户未登录。
    - 动作：
        - 登录 (Login)：需要提供用户名。
        - 登出 (Logout)：无需额外数据。
2.  Action 类型定义 (`authReducer.ts` 或类型文件)：
    - `LoginAction`:
        - `type: 'LOGIN';`
        - `username: string;` (payload)
    - `LogoutAction`:
        - `type: 'LOGOUT';`
    - `AuthAction` (联合类型): `LoginAction | LogoutAction;`
3.  `authReducer.ts` 实现：
    - `state`参数类型: `string`。
    - `action`参数类型: `AuthAction`。
    - 返回类型: `string`。
    - 逻辑：
        - `if (action.type === 'LOGIN')`: 返回 `action.username`。
        - `if (action.type === 'LOGOUT')`: 返回 `''` (空字符串表示登出)。
        - `default` (或 `else`): 返回当前 `state`。
4.  `LoginStatus.tsx` 组件实现：
    - 使用`useReducer(authReducer, '')`初始化状态和`dispatch`函数。
        - 初始状态为空字符串，表示未登录。
    - 登录按钮的`onClick`处理器：
        - `dispatch({ type: 'LOGIN', username: 'mosh.hammedani' });`
    - 登出按钮的`onClick`处理器：
        - `dispatch({ type: 'LOGOUT' });`
    - UI 根据当前`user`状态（即`useReducer`返回的`state`）条件渲染不同的内容（如欢迎信息或登录链接）。

**代码示例**

1.  `src/reducers/authReducer.ts`

    ```ts
    export interface LoginAction {
      type: 'LOGIN';
      username: string;
    }

    export interface LogoutAction {
      type: 'LOGOUT';
    }

    export type AuthAction = LoginAction | LogoutAction;

    function authReducer(state: string, action: AuthAction): string {
      switch (action.type) {
        case 'LOGIN':
          return action.username;
        case 'LOGOUT':
          return '';
        default:
          return state;
      }
    }

    export default authReducer;
    ```

2.  `src/components/LoginStatus.tsx`

    ```tsx
    import { useReducer } from 'react';
    import authReducer from '../reducers/authReducer';

    function LoginStatus() {
      const [user, dispatch] = useReducer(authReducer, ''); // 初始状态为空字符串

      if (user) { // 如果user非空，则已登录
        return (
          <>
            <div>User: {user}</div>
            <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
          </>
        );
      }
      return (
        <button onClick={() => dispatch({ type: 'LOGIN', username: 'mosh.hammedani' })}>
          Login
        </button>
      );
    }

    export default LoginStatus;
    ```

## 5- React Context 共享状态

> **简述：**  
> 当多个组件需要访问同一份状态时（如任务列表和导航栏都要读写任务数据），逐层通过 props 传递会导致“属性钻孔”（prop drilling），使代码臃肿、难维护。React Context 提供了跨层级共享数据的能力；配合自定义 Provider 和 `useContext` 钩子，可让任意子组件直接读取或更新上下文中的状态。

---

**知识树**

1. **Prop Drilling 问题与状态提升**

    - 传统做法：将状态提升（lift state up）到最近共同父组件，通过 props 逐层传递。
    - 缺点：当组件层级深且中间层不需要该状态时，仍需负责转发 props，难以维护。

2. **Context 的基本概念**

    - `createContext<T>(defaultValue)`：创建一个带类型的上下文对象。
    - `Context.Provider`：用来包装组件树，并通过 `value` 属性提供共享数据。
    - `useContext(Context)`：在任意子组件中读取 Provider 提供的 `value`。

3. **TypeScript 中 Context 类型定义**

    - 定义共享数据的接口（如 `TasksContextType` 包含 `tasks: Task[]` 与 `dispatch: Dispatch<TaskAction>`）。
    - 在 `createContext` 时以类型参数标注（并使用 `as` 绕过默认值校验）。

4. **实现步骤**

    1. **将状态提升到最近的父组件中，例如 App**：在 `App.tsx` 中用 `useReducer` 管理 `tasks` 与 `dispatch`，代替局部组件状态。
    2. **创建 Context 模块**：

        - 在 `state-management/context/tasksContext.ts` 中：
            - 导入 `createContext`、`Dispatch`。
            - 定义 `TasksContextType` 接口；
            - 调用 `createContext<TasksContextType>( {} as TasksContextType )`；
            - 导出 `TasksContext` 与（可选）Provider 包装组件。

    3. **在 App 中提供 Context**：

        ```tsx
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
        ```

        `value={{ tasks, dispatch}}是用来替换默认值的

    4. **在子组件中消费 Context**：

        - 在 `TaskList.tsx` 和 `NavBar.tsx` 中：
            ```ts
            const { tasks, dispatch } = useContext(TasksContext);
            ```
        - `TaskList` 使用 `dispatch({ type: 'add'… })` 或 `dispatch({ type: 'delete', taskId })`；
        - `NavBar` 只关注 `tasks.length`，无需 `dispatch`。

5. **注意事项与最佳实践**

    - **默认值问题**：`createContext` 的默认值只在没有 Provider 时生效，实际项目中可传 `null` 并在 `useContext` 时校验。
    - **避免过度使用 Context**：仅在真正需要跨多层时使用，局部或父子组件直接传 props 更简单。
    - **性能优化**：Context 值改变会导致所有消费该 Context 的子组件重新渲染，必要时可拆分多个 Context 或使用 memoization。

---

**代码示例**

1. **创建 Context（`state-management/context/tasksContext.ts`）**

    ```ts
    import { createContext, Dispatch } from 'react';
    import { Task, TaskAction } from '../reducers/tasksReducer';

    // 定义 Context 数据类型
    export interface TasksContextType {
      tasks: Task[];
      dispatch: Dispatch<TaskAction>;
    }

    // 创建 Context，使用 as 绕过默认值校验
    export const TasksContext = createContext<TasksContextType>(
      {} as TasksContextType
    );
    ```

2. **在 App 中提供 Context（`App.tsx`）**

    ```tsx
    import React, { useReducer } from 'react';
    import { tasksReducer, Task } from './state-management/reducers/tasksReducer';
    import { TasksContext } from './state-management/context/tasksContext';
    import { NavBar } from './components/NavBar';
    import { TaskList } from './components/TaskList';

    export const App: React.FC = () => {
      const [tasks, dispatch] = useReducer(tasksReducer, [] as Task[]);

      return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
      );
    };
    ```

3. **在 TaskList 中消费 Context（`TaskList.tsx`）**

    ```tsx
    import React, { useContext } from 'react';
    import { TasksContext } from '../state-management/context/tasksContext';

    export const TaskList: React.FC = () => {
      const { tasks, dispatch } = useContext(TasksContext);

      return (
        <div>
          <button
            onClick={() =>
              dispatch({
                type: 'add',
                task: { id: Date.now(), title: `Task ${Date.now()}` },
              })
            }
          >
            添加任务
          </button>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {task.title}
                <button
                  onClick={() =>
                    dispatch({ type: 'delete', taskId: task.id })
                  }
                >
                  删除
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    ```

4. **在 NavBar 中消费 Context（`NavBar.tsx`）**

    ```tsx
    import React, { useContext } from 'react';
    import { TasksContext } from '../state-management/context/tasksContext';

    export const NavBar: React.FC = () => {
      const { tasks } = useContext(TasksContext);

      return (
        <nav>
          <p>任务数量：{tasks.length}</p>
        </nav>
      );
    };
    ```

## 6- Context 共享用户状态

> **简述：**  
> 当应用中多个组件都需要访问或修改“当前用户”（如 `LoginStatus`、`TaskList` 等），直接在局部组件中使用 `useState` 并通过 props 逐层传递会导致代码臃孔。React Context 可让我们将“当前用户”及其更新函数提升到祖先组件，并在任意后代组件中直接读取或派发动作，消除 prop drilling。

---

**知识树**

1. **状态提升（Lifting State Up）**

    - 原始：`LoginStatus` 里用 `useState<string>` 存储 `currentUser`。
    - 提升：剪切到 `App.tsx`，改为 `useReducer(authReducer, '')`（或 `useState`），让更高层负责管理。

2. **定义 Context 类型**

    - 创建接口 `AuthContextType`，包含：
        - `currentUser: string`
        - `dispatch: Dispatch<AuthAction>`（来自 `authReducer` 的 action 派发函数）
    - 在 `authReducer.ts` 中导出 `AuthAction` 类型供 Context 使用。

3. **创建并导出 Context**

    - 在 `state-management/context/authContext.ts`：
        ```ts
        export const AuthContext = createContext<AuthContextType>(
          {} as AuthContextType
        );
        ```

4. **在 App 中提供 Context**

    - 用 `<AuthContext.Provider value={{ currentUser, dispatch }}>` 包裹组件树，向下传递状态与派发函数。

5. **消费 Context**

    - 在任意子组件（如 `LoginStatus`、`TaskList`）中：
        ```ts
        const { currentUser, dispatch } = useContext(AuthContext);
        ```
    - `LoginStatus` 可调用 `dispatch({ type: 'login', userName })` 或 `dispatch({ type: 'logout' })`；
    - `TaskList` 可读取 `currentUser` 用于个性化渲染，或不取用 `dispatch`。

6. **注意事项**

    - **默认值**：`createContext` 的默认值仅在未被 Provider 包裹时生效，实际项目可传 `null` 并在消费端校验。
    - **性能**：Context 更新会触发所有消费该 Context 的组件重渲染，可按需拆分多个 Context 或使用 memo 优化。

---

**代码示例**

1. **创建 Auth Context**

    ```ts
    // state-management/context/authContext.ts
    import { createContext, Dispatch } from 'react';
    import { AuthAction } from '../reducers/authReducer';

    // Context 中共享的类型
    export interface AuthContextType {
      currentUser: string;
      dispatch: Dispatch<AuthAction>;
    }

    // 创建 Context，使用类型断言绕过默认值校验
    export const AuthContext = createContext<AuthContextType>(
      {} as AuthContextType
    );
    ```

2. **在 App 中提供 Context**

    ```tsx
    // App.tsx
    import React, { useReducer } from 'react';
    import { authReducer } from './state-management/reducers/authReducer';
    import { AuthContext } from './state-management/context/authContext';
    import { LoginStatus } from './components/LoginStatus';
    import { TaskList } from './components/TaskList';

    export const App: React.FC = () => {
      // 提升后在 App 里管理当前用户状态
      const [currentUser, authDispatch] = useReducer(authReducer, '');

      return (
        <AuthContext.Provider value={{ currentUser, dispatch: authDispatch }}>
          <LoginStatus />
          <TaskList />
        </AuthContext.Provider>
      );
    };
    ```

3. **LoginStatus 消费 Context**

    ```tsx
    // components/LoginStatus.tsx
    import React, { useContext } from 'react';
    import { AuthContext } from '../state-management/context/authContext';

    export const LoginStatus: React.FC = () => {
      const { currentUser, dispatch } = useContext(AuthContext);

      return currentUser ? (
        <>
          <p>当前用户：{currentUser}</p>
          <button onClick={() => dispatch({ type: 'logout' })}>
            登出
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: 'login', userName: 'mosh.hammedani' })
          }
        >
          登录
        </button>
      );
    };
    ```

4. **TaskList 读取当前用户**

    ```tsx
    // components/TaskList.tsx
    import React, { useContext } from 'react';
    import { AuthContext } from '../state-management/context/authContext';

    export const TaskList: React.FC = () => {
      const { currentUser } = useContext(AuthContext);

      return (
        <div>
          <p>当前用户（来自 Context）：{currentUser || '未登录'}</p>
          {/* 其他任务列表 UI */}
        </div>
      );
    };
    ```

---

> **总结：**
>
> -   **提取状态** 到 `App` 并用 `useReducer` / `useState` 管理；
> -   **创建 Context** 定义共享数据结构；
> -   **Provider** 提供 `value` 给上下文；
> -   **消费** 用 `useContext` 在任意后代组件中读取或派发更新。  
>      这样即可在整个组件树中无缝共享“当前用户”状态，避免层层传 props。

## 7- React DevTools 调试

> **简述：**  
> 在开发中，除了 Redux、React Query 等外部库，Context 也是常用的状态共享手段。React DevTools 的 **Components** 面板能够直观地展示各级 Provider 所提供的 Context 值，帮助你实时观察状态变化，快速定位问题。

---

**知识树**

1. **打开 Components 面板**

    - 在 Chrome DevTools 中切换到 “Components” 选项卡；
    - 左侧树状结构展示整个 React 组件树。

2. **查看 Context Providers**

    - 在组件树顶部会列出所有 **Context Providers**，包括第三方库（如 React Query）和自定义的 Context；
    - 每个 Provider 节点下方会显示它的 `value`（即 `Provider value={...}` 中的对象）。

3. **监控 Context 值变化**

    - 选择对应的 Provider 节点：右侧 **Props** 窗格会显示当前 `value` 对象的所有属性；
    - 对登录状态的 Context：可见 `currentUser` 与 `dispatch`；登录或登出时 `currentUser` 实时更新；
    - 对任务列表的 Context：可见 `tasks` 数组与 `dispatch`；添加或删除任务时数组变化立刻反映。

4. **在子组件中定位 Context**

    - 也可以选中消费 Context 的组件（如 `LoginStatus` 或 `TaskList`），右侧 **Hooks** 窗格（需安装 React DevTools Hooks 插件）会展示 `useContext` 返回的值；
    - 通过查看 Hooks 面板下的 `useContext(YourContext)`，能直接看到该组件消费的 Context 数据快照。

5. **调试小技巧**

    - **搜索 Context**：在组件树上方的过滤框输入 Context 名称（如 `AuthContext`），快速定位对应 Provider；
    - **高亮更新**：勾选 “⚛️ Highlight updates” 可在状态变化时高亮渲染的组件，直观感受更新范围；
    - **记录快照**：在 Profiler 面板录制交互，检视各次渲染时 Context 值的快照，便于回溯问题。

---

> **总结：**  
> 利用 React DevTools 的 Components 与 Hooks 面板，你可以：
>
> 1. 直观查看各级 Context 提供的 `value`；
> 2. 实时监控 `value` 对象的属性变化；
> 3. 快速定位状态更新引发的组件渲染，极大提升调试效率。

## 8- 创建可复用的自定义 Provider

> **简述：**  
> 当一个组件树中需要提供同一份 Context 状态与派发函数时，将 Context.Provider 与状态管理逻辑提取到一个自定义 Provider 组件中，可以让 App 组件更简洁，增强模块化和可复用性。自定义 Provider 组件内部维护状态，并在其 `value` 中统一传递给后代。

---

**知识树**

1. **为何需要自定义 Provider**

    - **命名冲突**：在 App 中同时维持多种状态（如任务和用户），需要分别命名多种 `dispatch`；
    - **职责单一**：App 组件只负责组装页面，自定义 Provider 专注管理一类状态；
    - **可复用性**：将 Provider 与状态逻辑打包，可在不同项目或不同位置复用。

2. **自定义 Provider 组件结构**  
   2.1 **文件与组件命名**：

    - 新建 `authProvider.tsx`，组件名 `AuthProvider`；  
       2.2 **状态管理迁移**：
    - 将原 App 中的 `useReducer(authReducer, '')` 剪切至 Provider 内部；  
       2.3 **Context.Provider 包装**：
    - 在返回的 JSX 中，用 `<AuthContext.Provider value={{ currentUser, dispatch }}>` 包裹 `children`；

3. **Props 类型定义**

    - 定义接口 `AuthProviderProps`：
        ```ts
        interface AuthProviderProps {
          children: ReactNode;
        }
        ```
    - `children: ReactNode` 确保能够接收任意 React 元素。

4. **App 中调用自定义 Provider**

    - 用 `<AuthProvider>…</AuthProvider>` 替换原先的 `<AuthContext.Provider>`；
    - App 更加简洁，仅关注 Provider 嵌套与组件排列。

5. **多 Provider 组合**

    - 对于多种全局状态（如 Task、Auth），可分别创建 `TaskProvider`、`AuthProvider`，并在 App 中按需嵌套。

---

**代码示例**

1. **`authProvider.tsx`**

    ```tsx
    // state-management/context/authProvider.tsx
    import React, { ReactNode, useReducer } from 'react';
    import { AuthContext } from './authContext';
    import { authReducer, AuthAction } from '../reducers/authReducer';

    // Props 接口：接收任意子组件
    interface AuthProviderProps {
      children: ReactNode;
    }

    // 自定义 Provider 组件
    export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
      // 在 Provider 内部管理用户状态
      const [currentUser, dispatch] = useReducer(authReducer, '');

      return (
        <AuthContext.Provider value={{ currentUser, dispatch }}>
          {children}
        </AuthContext.Provider>
      );
    };
    ```

2. **更新 `App.tsx`**

    ```tsx
    // App.tsx
    import React from 'react';
    import { AuthProvider } from './state-management/context/authProvider';
    import { TasksProvider } from './state-management/context/tasksProvider';
    import { LoginStatus } from './components/LoginStatus';
    import { TaskList } from './components/TaskList';

    export const App: React.FC = () => {
      return (
        // 嵌套多个 Provider，按需组合
        <AuthProvider>
          <TasksProvider>
            <LoginStatus />
            <TaskList />
          </TasksProvider>
        </AuthProvider>
      );
    };
    ```

---

**注意事项与总结**

- **职责清晰**：Provider 组件只做状态管理与 Context 提供，子组件只消费；
- **ReactNode**：`children` 类型必须为 `ReactNode`，否则可能无法接收 JSX；
- **组合灵活**：可按功能拆分多个 Provider，无需在单个组件中混杂多种状态；
- **模块化复用**：将自定义 Provider 及其 Context 一起打包，可轻松移植到其他项目。

---

**实施步骤回顾**

1. 在 `context` 目录新建 `authProvider.tsx`。
2. 定义 `AuthProviderProps` 接口，标注 `children: ReactNode`。
3. 将 `useReducer(authReducer, '')` 从 App 剪切到 Provider 内。
4. 在组件返回值中，用 `<AuthContext.Provider value={{…}}>` 包裹 `{children}`。
5. 在 App 中替换为 `<AuthProvider>…</AuthProvider>`，并按需嵌套其他 Provider。

## 9- 创建用于访问 Context 的自定义 Hook

> **简述：**  
> 当你多次在各个组件中调用 `useContext(SomeContext)` 时，会反复书写相同的导入与钩子调用逻辑。通过为每个 Context 编写一个专用的自定义 Hook（如 `useAuth`），可以进一步简化组件代码，让你只需调用 `useAuth()` 即可访问 Context 值，提升可读性和可维护性。

---

**知识树**

1. **动机与场景**

    - 避免在多个组件中反复导入 `useContext` 和 `SomeContext`；
    - 提升代码可读性：组件只需关注业务逻辑，不必关心 Context 的来源；
    - 便于重构：若 Context 文件路径或名称变化，只需在自定义 Hook 中调整一次。

2. **自定义 Hook 定义**

    - Hook 名称需以 `use` 开头，如 `useAuth`、`useTasks`；
    - 函数内部调用 `useContext(AuthContext)` 并返回其值；
    - 可在自定义 Hook 中添加额外校验（如检查是否在 Provider 范围内使用）。

3. **类型注解（TypeScript）**

    - 自定义 Hook 的返回值类型与 Context 的 `value` 类型保持一致；
    - 如果 Context 类型可能为 `null`，可在 Hook 中抛出错误或返回默认值，以保证调用组件安全。

4. **组件中使用**

    - 在组件顶部直接调用 `const { currentUser, dispatch } = useAuth();`；
    - 不再需要手动导入 `AuthContext` 与 `useContext`。

5. **最佳实践**

    - 对每个自定义 Context 都编写对应的 Hook（如 `useAuth`, `useTasks`）；
    - 在 Hook 内可统一处理错误边界（如在 Provider 之外调用时抛错）；
    - 将所有 Context-Hook 文件统一放在 `hooks/` 目录，保持项目结构清晰。

---

**代码示例**

1. **自定义 Hook：`useAuth.ts`**

    ```ts
    // hooks/
    import { useContext } from 'react';
    import { AuthContext } from '../state-management/context/authContext';

    /**
     - 自定义 Hook：用于访问 AuthContext 的值
     */
    export function useAuth() {
      const context = useContext(AuthContext);
      if (!context) {
        // 如果未在 AuthProvider 范围内使用，可抛出错误
        throw new Error('useAuth 必须在 AuthProvider 内使用');
      }
      return context;
    }
    ```

2. **组件中使用：`LoginStatus.tsx`**

    ```tsx
    // components/LoginStatus.tsx
    import React from 'react';
    import { useAuth } from '../hooks/useAuth';

    export const LoginStatus: React.FC = () => {
      const { currentUser, dispatch } = useAuth();

      return currentUser ? (
        <>
          <p>当前用户：{currentUser}</p>
          <button onClick={() => dispatch({ type: 'logout' })}>
            登出
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: 'login', userName: 'mosh.hammedani' })
          }
        >
          登录
        </button>
      );
    };
    ```

3. **其他消费组件同理**

    ```tsx
    // components/TaskList.tsx
    import React from 'react';
    import { useAuth } from '../hooks/useAuth';

    export const TaskList: React.FC = () => {
      const { currentUser } = useAuth();

      return <p>当前用户（来自 Context）：{currentUser || '未登录'}</p>;
    };
    ```

---

> **总结：**  
> 自定义访问 Context 的 Hook 是一种优雅的封装，能够将 Context 的导入、类型验证和边界处理统一到一个文件，让你的组件代码更专注于业务逻辑，提升项目一致性和可维护性。

## 10- 为任务列表创建可复用的 Provider 与 Hook

> **简述：**  
> 将任务状态与派发函数从 App 组件中剥离，封装到一个自定义的 `TasksProvider` 中，并提供一个 `useTasks` Hook，方便在任意后代组件中读取或更新任务列表，避免在 App 中维护多种状态、避免 prop drilling，让组件职责更聚焦、结构更清晰。

---

**知识树**

1. **提取状态管理逻辑到 Provider**

    - 在 `state-management/context` 目录下创建 `tasksProvider.tsx`。
    - 将原来在 App 组件中对任务使用 `useReducer(tasksReducer, [])` 的逻辑剪切到 Provider 内部。
    - Provider 内部维护 `tasks: Task[]` 与 `dispatch: Dispatch<TaskAction>`。

2. **封装自定义 Provider 组件**

    - 定义 `TasksProviderProps` 接口：
        ```ts
        interface TasksProviderProps {
          children: ReactNode;
        }
        ```
    - 在 `TasksProvider` 内部：
        ```tsx
        const [tasks, dispatch] = useReducer(tasksReducer, []);
        return (
          <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
          </TasksContext.Provider>
        );
        ```

3. **在 App 中使用 Provider**

    - 用 `<TasksProvider>…</TasksProvider>` 替换原先的 `<TasksContext.Provider>`。
    - App 组件无需再直接管理任务状态，只需关注页面布局与 Provider 嵌套。

4. **创建自定义 Hook：`useTasks`**

    - 在 `hooks/useTasks.ts` 中：

        ```ts
        import { useContext } from 'react';
        import { TasksContext } from '../state-management/context/tasksContext';

        export function useTasks() {
          const context = useContext(TasksContext);
          if (!context) {
            throw new Error('useTasks 必须在 TasksProvider 内使用');
          }
          return context;
        }
        ```

    - Hook 内部封装 `useContext` 调用，并可自行做边界检查。

5. **在消费组件中调用**

    - **TaskList**：
        ```tsx
        const { tasks, dispatch } = useTasks();
        ```
    - 其他需要读写任务的组件同样调用 `useTasks()`。

6. **优点总结**

    - **模块化**：Provider 与 Hook 合为一体，易于移植与复用。
    - **职责清晰**：Provider 组件专注提供状态，消费组件只关注业务。
    - **消除 Prop Drilling**：任意后代都能直接访问任务状态与 dispatch。

---

**代码示例**

1. **`tasksProvider.tsx`：自定义 Provider**

    ```tsx
    // state-management/context/tasksProvider.tsx
    import React, { ReactNode, useReducer } from 'react';
    import { TasksContext } from './tasksContext';
    import { tasksReducer, Task, TaskAction } from '../reducers/tasksReducer';

    // Props 接口：接收子节点
    interface TasksProviderProps {
      children: ReactNode;
    }

    // 自定义 Provider 组件
    export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
      // 在 Provider 内部维护任务状态
      const [tasks, dispatch] = useReducer<Task[], TaskAction>(tasksReducer, []);

      return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
          {children}
        </TasksContext.Provider>
      );
    };
    ```

2. **`useTasks.ts`：自定义 Hook**

    ```ts
    // hooks/useTasks.ts
    import { useContext } from 'react';
    import { TasksContext } from '../state-management/context/tasksContext';

    /**
     - Hook：用于访问 TasksContext
     */
    export function useTasks() {
      const context = useContext(TasksContext);
      if (!context) {
        throw new Error('useTasks 必须在 TasksProvider 内使用');
      }
      return context;
    }
    ```

3. **更新 `App.tsx`**

    ```tsx
    // App.tsx
    import React from 'react';
    import { AuthProvider } from './state-management/context/authProvider';
    import { TasksProvider } from './state-management/context/tasksProvider';
    import { LoginStatus } from './components/LoginStatus';
    import { TaskList } from './components/TaskList';

    export const App: React.FC = () => (
      <AuthProvider>
        <TasksProvider>
          <LoginStatus />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    );
    ```

4. **消费示例：`TaskList.tsx`**

    ```tsx
    // components/TaskList.tsx
    import React from 'react';
    import { useTasks } from '../hooks/useTasks';

    export const TaskList: React.FC = () => {
      const { tasks, dispatch } = useTasks();

      return (
        <div>
          <button
            onClick={() =>
              dispatch({
                type: 'add',
                task: { id: Date.now(), title: `Task ${Date.now()}` },
              })
            }
          >
            添加任务
          </button>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => dispatch({ type: 'delete', taskId: task.id })}>
                  删除
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    ```

---

> **注意事项：**
>
> -   **Provider 嵌套顺序**：确保 `TasksProvider` 在消费组件之外覆盖整个树；
> -   **性能考虑**：Context 更新会引起所有消费组件重渲染，可按需拆分多个 Context 或使用 `React.memo` 优化。
> -   **一致性**：自定义 Hook 可统一处理边界检查，避免误用。

## 11- 组织代码

> **简述：**  
> 随着功能增长，相关文件零散分布会降低代码可读性与维护效率。将同一领域（如任务管理）的 Reducer、Context、Provider、Hook 和组件聚合到同一目录，并通过 `index.ts` 暴露公共接口，私有实现隐藏在内部，可以构建清晰、模块化且易演进的代码结构。

---

**知识树**

1. **为什么要模块化（Package）**

    - **关注点聚合**：将相同功能相关的文件放在一个目录下，快速定位并理解整个功能模块。
    - **隐藏实现细节**：只向外暴露必要的接口，内部实现可随意重构而不影响调用方。
    - **简化导入路径**：在根目录中只需 `import { TasksProvider, TaskList } from './tasks'`，而无需具体指向每个文件。

2. **模块内部的文件分工**

    - **实现文件（私有）**：例如 `tasksReducer.tsx`、`tasksContext.tsx`；不向外部直接暴露。
    - **公共组件（公共接口）**：如 `TaskList.tsx`、`TasksProvider.tsx`；在 `index.ts` 中统一导出。
    - **辅助 Hook**：如 `useTasks`（可根据使用频率决定是否独立文件或内嵌于组件）。

3. **`index.ts` 的作用**

    - **统一导出**：仅将模块的公共 API（组件、Hook、类型）导出；
    - **隔离引用**：调用方无需知道底层文件名或目录结构，只需从模块根导入。

4. **隐藏私有实现**

    - **Reducer 与 Context**：不在模块根暴露，放在子文件并不导出；
    - **Hook 内联**：如果某个 Hook 只在单个组件内部使用，可内联到组件文件中，减少文件数量。

5. **导航与查找技巧**

    - **文件查找（Command / Ctrl+P）**：快速打开文件。
    - **符号查找（Command / Ctrl+T）**：根据函数、类型名定位实现，即使不在独立文件也能找到。

6. **模块演进与重构**

    - 内部实现可以随意调整（用其他状态管理库、重写 Reducer 等），只要 `index.ts` 中暴露的接口不变，调用方不受影响。
    - 当需要新增公共 API 时，只需在 `index.ts` 增加相应导出；当移除或重命名时，自动编译报错，提醒调用方更新依赖。

---

**代码示例**

1. **重构前结构（散落各处）**

    ```
    src/
    ├─ context/
    │  └─ tasksContext.ts
    ├─ reducers/
    │  └─ tasksReducer.ts
    ├─ hooks/
    │  └─ useTasks.ts
    ├─ components/
    │  ├─ TaskList.tsx
    │  └─ TasksProvider.tsx
    └─ App.tsx
    ```

2. **重构后结构（模块化）**

    ```
    src/
    ├─ tasks/
    │  ├─ index.ts            # 公共接口：TaskList, TasksProvider
    │  ├─ tasksContext.ts     # 私有实现
    │  ├─ tasksProvider.tsx   # 公共组件
    │  ├─ tasksReducer.ts     # 私有实现（已内联到 provider 中可选）
    │  ├─ TaskList.tsx        # 公共组件
    │  └─ useTasks.ts         # Hook（可内联）
    ├─ App.tsx
    ```

3. **`tasks/index.ts`（统一导出）**

    ```ts
    // tasks/index.ts
    export { default as TasksProvider } from "./TasksProvider";
    export { default as TaskList } from "./TaskList";
    // 如有更多公共导出 (e.g., types or hooks)，在此添加
    ```

4. **调用方只需**

    ```ts
    // App.tsx
    import React from 'react';
    import { TasksProvider, TaskList } from './tasks';

    export const App: React.FC = () => (
      <TasksProvider>
        <TaskList />
      </TasksProvider>
    );
    ```

---

**注意事项与实践**

- **私有实现不暴露**：未在 `index.ts` 导出的文件和类型视为内部实现，可随时重构。
- **模块根导入**：上层只需 `import { X } from '.../tasks'`，避免修改内部路径。
- **保持一致性**：不同功能域（如 `auth`、`game`）各自一个目录，统一采用相同的模块化规范。
- **适度拆分**：当模块过大或子功能复杂时，可进一步细分子目录，但入口仍由顶层 `index.ts` 统一导出。

## 12- 按功能域组织代码

> **简述：**  
> 随着项目规模增大，按技术类型（Reducer、Context、Hook）分散文件会让功能相关的代码散落各处，难以维护。最佳做法是按 **功能域**（Feature）划分，将同一功能的 Reducer、Context、Provider、Hook、组件集中到同一文件夹，并通过该文件夹的 `index.ts` 或直接默认导出其公共接口，对外提供统一模块，内部隐藏实现细节。

---

**知识树**

1. **功能域概念**

    - **功能域（Feature）**：应用中的独立业务单元，如“认证”（auth）、“计数器”（counter）、“任务列表”（tasks）等；
    - 按功能域组织代码，可快速定位一项功能所需的所有构件，增强可读性与模块边界。

2. **重构步骤**

    1. **创建功能文件夹**：在 `state-management/` 下新增 `auth/`、`counter/`、`tasks/` 目录。
    2. **移动相关文件**：将对应功能的 Context、Reducer、Provider、Hook、组件等文件剪切到新文件夹中。
    3. **合并内部实现**：对于只在包内部使用的 Reducer，可内联到 Provider 文件中并取消导出。
    4. **调整导入路径**：修改所有引用位置，统一从功能文件夹根引入。

3. **公共接口与隐藏实现**

    - **公共文件**：如 `AuthProvider.tsx`、`useAuth.ts`、`LoginStatus.tsx`；在文件夹根通过 `index.ts` 或直接导出；
    - **私有实现**：如 `authReducer.ts`、`authContext.ts`；不在根导出，仅在 Provider 内部引用。

4. **最终目录结构**

    ```
    src/
    └─ state-management/
       ├─ auth/
       │  ├─ authContext.ts        // 私有
       │  ├─ authProvider.tsx      // 公共
       │  ├─ authReducer.ts        // (可内联) 私有
       │  ├─ useAuth.ts            // 公共 Hook
       │  ├─ LoginStatus.tsx       // 公共组件
       │  └─ index.ts              // (可选) 统一导出
       ├─ counter/
       │  ├─ counterReducer.ts     // 私有
       │  ├─ Counter.tsx           // 公共组件
       │  └─ index.ts              // 导出 Counter
       └─ tasks/
          ├─ tasksProvider.tsx     // 公共
          ├─ useTasks.ts           // 公共 Hook
          ├─ TaskList.tsx          // 公共组件
          ├─ tasksContext.ts       // 私有
          └─ index.ts              // 统一导出 TasksProvider, TaskList
    ```

```
src/
├── state-management/
│   ├── auth/
│   │   ├── authContext.ts          # ❌ 私有实现，不会在 index.ts 导出
│   │   ├── authProvider.tsx        # ✅ 自定义 Provider（内部包含 reducer 逻辑）
│   │   ├── useAuth.ts              # ✅ 自定义 Hook（封装 useContext(AuthContext)）
│   │   ├── LoginStatus.tsx         # ✅ 登录组件，消费 useAuth()
│   │   └── index.ts                # ✅ 只导出公共 API：AuthProvider, useAuth, LoginStatus
│   │
│   ├── counter/
│   │   ├── Counter.tsx             # ✅ 计数器组件
│   │   └── counterReducer.ts       # ✅ 计数器状态的 reducer（私有或通过 index.ts 导出）
│   │
│   └── tasks/
│       ├── tasksProvider.tsx       # ✅ 自定义 Provider（内部包含 reducer 逻辑）
│       ├── TaskList.tsx            # ✅ 任务列表组件
│       ├── tasksContext.ts         # ❌ 私有 Context 定义
│       ├── useTasks.ts             # ✔️（可选）自定义 Hook，封装 useContext(TasksContext)
│       └── index.ts                # ✅ 只导出公共 API：TasksProvider, TaskList, useTasks
│
├── App.tsx                         # 只从各模块根目录导入
└── ...
```

---

---

**代码示例**

1. **`state-management/auth/index.ts`（统一导出）**

    ```ts
    export { AuthProvider } from './authProvider';
    export { useAuth } from './useAuth';
    export { LoginStatus } from './LoginStatus';
    ```

2. **`App.tsx` 中引用**

    ```tsx
    import React from 'react';
    import { AuthProvider, LoginStatus } from './state-management/auth';
    import { Counter } from './state-management/counter';
    import { TasksProvider, TaskList } from './state-management/tasks';

    export const App: React.FC = () => (
      <AuthProvider>
        <Counter />
        <TasksProvider>
          <LoginStatus />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    );
    ```

> **要点回顾：**
>
> -   **按功能域**（而非技术类型）划分目录，聚焦业务逻辑；
> -   在模块根通过 `index.ts` 或直接默认导出公共 API，隐蔽实现细节；
> -   内部实现（Reducer、Context）可灵活移动或重写，调用方不受影响。

## 13- 分割 Context 的原则

> **简述：**  
> React Context 在其值变化时，会导致所有消费该 Context 的组件重新渲染。为了避免不必要的渲染，Context 应当只保存高度相关、会一起变化的数据。通过将职责单一化的 Context（如 `AuthContext`、`TasksContext`）拆分开来，可以显著提升应用的性能和可维护性。

---

**知识树**

1. **Context 重渲染原理**

    - 任何传入 `Provider value` 的值变化，都会触发该 Context 下所有消费组件的重新渲染。
    - 无差别更新可能导致大量无意义渲染，影响性能。

2. **单一职责原则**

    - 每个 Context 只管理一类数据：
        - `AuthContext` → 当前用户信息
        - `TasksContext` → 任务列表及更新方法
    - 确保在数据无需变化时，不影响无关组件。

3. **拆分 Context 示例**

    ```ts
    // AuthContext.ts
    export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

    // TasksContext.ts
    export const TasksContext = createContext<TasksContextType>({} as TasksContextType);
    ```

    - `NavBar` 只订阅 `AuthContext`，只有用户变化时才重渲染；
    - `TaskList` 只订阅 `TasksContext`，只有任务列表变化时才重渲染。

4. **过度拆分的风险**

    - 将状态与其更新函数强行拆成两个 Context（`TasksStateContext` + `TasksDispatchContext`），会造成：
        - 组件树中 Provider 数剧倍增长，结构混乱；
        - 更新函数和状态往往密不可分，分离后使用复杂度反而增加。

5. **状态与派发函数应同属一 Context**

    - 对于密切相关的数据（如 `tasks`）及其更新方法（`dispatch`），应一起放在同一个 Context，保证一致性与易用性。

6. **实战建议**

    - 根据实际场景拆分 Context，不要一味追求细粒度；
    - 在性能调优时，可使用 `React.memo` 或 `useMemo` 辅助优化子组件；
    - 保持 Context 数量适中，每个 Context 都有明确的业务边界。

---

> **核心要点：**
>
> -   **职责单一**：Context 应只保存一类高度相关的数据。
> -   **按需订阅**：消费组件只订阅所需 Context，避免不相关更新。
> -   **避免过度拆分**：状态与更新方法合并使用，减少 Provider 数量和调用复杂度。

## 14- 何时使用 React Context

> 简述：  
> React Context 适用于在组件树中跨层级共享**客户端状态**（如当前用户、UI 主题、选中筛选条件等），而不适合用来管理**服务器状态**（从后端获取的数据）。在需要全局、可预测地存取和更新本地 UI 状态时，可结合 `useState`/`useReducer` 与 Context；对于频繁变化或分页缓存的服务器数据，应交由 React Query 等专用工具处理。

---

**知识树**

1. **区分服务器状态与客户端状态**

    - 服务器状态（Server State）：后端 API 返回的数据，典型例子有列表、详情、分页结果。
    - 客户端状态（Client State）：仅存在于 UI 层面，反映用户交互或全局偏好，如当前用户、主题、选中筛选条件等。

2. **何时避免使用 Context 管理服务器状态**

    - 会产生大量 Context：每种资源（genres、platforms、games、…）都需一个 Context，导致组件树过度复杂。
    - 功能重复造轮子：Context 本身不具备缓存、失效、重试、分页等机制，要自行实现成本高。
    - 推荐方案：使用 React Query、SWR 等专门的服务器状态管理库，让它们负责数据获取与缓存。

3. **何时使用 Context 管理客户端状态**

    - 需要在多个、深层组件间共享的小规模 UI 状态。
    - 状态更新逻辑简单，可直接用 `useState`；或更新逻辑复杂、多处分散时，可用 `useReducer` 集中管理。
    - 在 Context 外层提升状态，对子组件进行“直接注入”，无须层层 Prop Drilling。

4. **选择 `useState` 还是 `useReducer`**

    - **`useState`**：适合简单的布尔、字符串、数字，或少量相关字段；更新逻辑单一。
    - **`useReducer`**：适合逻辑复杂、多个操作类型、需要按动作（action）分支处理的场景；可将所有更新逻辑集中到 reducer 函数中。

5. **Context 的单一职责原则**

    - 一个 Context 应只存储一类高度相关的数据（如“认证信息”或“任务列表”），且这部分数据会一起变化。
    - 拆分 Context 可减少无关组件的重复渲染，但过度拆分（状态与 dispatch 分开、每个字段分开）会增加复杂度，不推荐。

6. **何时考虑使用专用状态管理工具**

    - 当 Context 细分后仍出现大量无效渲染，或数据更新与订阅需求复杂（部分订阅、异步派发、持久化等）。
    - 可选方案：Redux、MobX、Recoil、XState、Zustand 等，它们支持选择性订阅、挂载中间件、易于调试和测试。
    - 推荐场景：大型应用、状态变动频繁且来源多样、需要时间旅行调试或严格可预测的状态流。

---

> **核心建议：**
>
> -   **服务器数据** → 使用 React Query 等专用工具；
> -   **客户端 UI 状态** → 用 `useState`/`useReducer` + Context；
> -   **Context 内容** → 保持单一职责，避免一 Context 跨越多种功能；
> -   **性能权衡** → 若 Context 导致过多重渲染，再考虑拆分或引入更细粒度的状态管理库。

| 状态类型           | 推荐方案      | 示例                   | 优势                             |
| ------------------ | ------------- | ---------------------- | -------------------------------- |
| 服务器状态         | React Query   | 产品列表、用户订单     | 自动缓存、错误处理、数据自动更新 |
| 客户端状态         | React Context | 当前用户、主题         | 简单易用，减少组件层级传递复杂度 |
| 本地简单状态       | useState      | 弹窗开关状态           | 实现简单、代码精简               |
| 本地复杂状态       | useReducer    | 购物车逻辑             | 集中管理逻辑、维护性高           |
| 复杂客户端状态管理 | Zustand 等库  | 全局设置、复杂交互状态 | 性能高效、简洁且易于维护         |

## 15- Context vs Redux 对比

> **简述：**  
> 虽然 React Context 与 Redux 都能实现跨组件共享状态，但二者定位不同：**Context** 只是用于在组件树中“运输”数据，不提供内置的存储、缓存或中间件支持；**Redux** 则是一个完整的状态管理库，提供集中式存储、可撤销操作、日志记录、跨框架解耦以及强大的调试工具。选择何者，需要基于项目实际需求，而非盲目跟风。

---

**知识树**

1. **什么是 Redux**

    - **集中式 Store**：所有应用状态都保存在一个全局 store 中；
    - **Action & Reducer**：通过 `dispatch(action)` 修改状态；
    - **避免 Prop Drilling**：组件从 store 中直接获取所需状态，无需层层传递。

2. **Context 的定位**

    - **运输工具**：`Context.Provider` 只是将状态通过树状结构传递给后代组件，只是一种在应用程序中传输和共享状态的方式；
    - **不负责存储或更新**：需要配合 `useState` 或 `useReducer` 等钩子来管理实际状态。

3. **Redux 的优势**

    - **服务器状态缓存与持久化**：可将 server state 缓存并持久化保存在 localStorage，以便在刷新时重载它
    - 组件可以选择某些数据片段 并仅在这些值更改时重新渲染、撤销操作、使用中间件来记录每个操作 、使应用程序与 react 解耦、可以看到随时间推移的状态变化
    - **中间件与日志**：可拦截所有 action，记录日志、做异步处理（thunk、saga 等）；
    - **时间旅行调试**：Redux DevTools 支持查看历史 state 列表、撤销重做等；
    - **跨框架解耦**：组件与框架无关，可在 React、Angular、Vue 等间复用。

4. **Redux 的复杂度**

    - **样板代码多**：需配置 store、编写 action creator、定义 reducer、连接组件；
    - **学习曲线陡**：需理解 middleware、selector、thunk/saga 等概念；
    - **过度使用风险**：若业务不需要撤销、日志或大规模共享，Redux 反而增加不必要的复杂度。

5. **现代替代方案**

    - **React Query**：专注**服务器状态**管理，自动缓存、刷新、错误重试；
    - **React Context + `useReducer`/`useState`**：足以管理大多数**客户端状态**；
    - **Zustand**（或其他轻量状态库）：在需要更细粒度订阅或跨 Context 性能优化时使用，简单高效。

6. **选型蓝图**

    - **先定义问题**：是否需要撤销、全局日志、中间件等高级功能？
    - **服务器状态**：优先选 React Query，避免自建缓存层；
    - **简单客户端状态**：`useState` + Context；
    - **复杂客户端状态**：`useReducer` + Context；
    - **性能优化或更强大功能**：可引入 Zustand，但除非真正需要，不必使用 Redux。

---

> **要点回顾：**
>
> -   **Context ≠ 状态管理库**，它只是共享现有状态的管道；
> -   **Redux** 功能强大但引入大量样板与复杂性；
> -   **优先根据业务需求选型**：现代前端已有更轻量、高效的替代方案。

## 16- Zustand 状态管理

> Zustand 是一个轻量、快速、可扩展的状态管理库。它利用自定义 Hook 的方式，提供一个中心化的“Store”来存储和管理应用状态。其核心思想是将状态（state）和更新状态的逻辑（actions）封装在一起，使得组件可以不通过 Props 或 Context，直接订阅和修改共享状态，极大地简化了跨组件状态管理的复杂性。

**知识树**

2. **核心概念**

    - **Store**: 一个封装了状态 (state) 和动作 (actions) 的对象，由 `create` 函数生成。它本质上是一个自定义 Hook。
    - **State**: 应用中需要被管理的数据。
    - **Action**: 用于修改状态的函数。

3. **安装**：`npm install zustand`
4. **创建 Store (store.ts)**

    - **第一步：定义 Store 形态 (Shape)**
        - 使用 TypeScript 的 `interface` 来精确描述 Store 的结构。
        - 此接口应包含所有状态属性和动作方法的类型定义。
            - **状态属性**: 例如 `counter: number`。
            - **动作方法**: 例如 `increment: () => void`。
    - **第二步：使用 `create` 函数**
        - 从 `zustand` 库中导入 `create` 函数。
        - `create` 是一个泛型函数，需要传入 Store 的 `interface` 作为类型参数，以实现完整的类型安全：`create<CounterStore>(...)`。
        - 此函数调用后会返回一个可供组件使用的自定义 Hook。
    - **第三步：实现 Store 逻辑**
        - `create` 函数接收一个回调函数作为其唯一参数。
        - 此回调函数的签名为 `(set, get) => ({...})`。
            - `set`: 更新状态的核心函数。
            - `get`: (本例未用) 用于在动作内部获取当前最新状态的函数。
        - 回调函数必须返回一个对象，该对象是 Store 的具体实现，包括：
            - **状态初始值**: 为 `interface` 中定义的每个状态属性提供初始值。
            - **动作具体实现**: 实现 `interface` 中定义的每个动作方法。
    - **第四步：导出自定义 Hook**
        - 将 `create` 函数的返回值存储在一个常量中，并使用命名导出 `export const ...`。
        - 这种方式有利于在其他组件中进行清晰、快捷的自动导入。

5. **状态更新机制**

    - **`set` 函数**: Store 中修改状态的唯一途径。
    - **工作模式**: `set` 函数接收一个回调 `(state) => (partialState)`。
        - `state`: 当前的完整状态对象。
        - `partialState`: 一个包含**待更新字段**的对象。
        - 示例：`set(state => ({ counter: state.counter + 1 }))`。
    - **自动合并 (Shallow Merge)**
        - Zustand 会自动将 `partialState` 对象与当前状态进行浅合并。
        - 开发者**无需**手动扩展旧状态（如 `...state`），只需提供变化的属性即可，这简化了更新逻辑。
    - **无依赖更新**: 如果状态更新不依赖于前一个状态，可以直接传入一个对象，例如 `set({ counter: 0 })`

6. **在 React 组件中使用 Store**

    - **导入 Hook**: 在需要使用共享状态的组件中，导入创建好的自定义 Hook。
    - **调用 Hook**: 在组件函数体顶层调用 Hook 以访问 Store。
        - `const store = useCounterStore();`
    - **订阅与选择 (Selection)**
        - Hook 的返回值是整个 Store 对象。
        - 推荐使用对象解构来获取组件所需的特定状态和动作。
            - `const { counter, increment } = useCounterStore();`
        - 组件仅会订阅并响应其所解构出的状态片段的变化，从而实现自动的性能优化。
    - **UI 绑定**
        - 将状态值用于渲染：`<p>{counter}</p>`。
        - 将动作函数绑定到事件处理器：`onClick={increment}`。

7. **Zustand 的优势**

    1. `轻量级` Zustand 的体积非常小，只有 1kb 左右。
    2. `简单易用` Zustand 不需要像 Redux，去通过`Provider`包裹组件，Zustand 提供了简洁的 API，能够快速上手。
    3. `易于集成` Zustand 可以轻松的与 React 和 Vue 等框架集成。(Zustand 也有 Vue 版本)
    4. `扩拓展性` Zustand 提供了中间件的概念，可以通过插件的方式扩展功能，例如(持久化,异步操作，日志记录)等。
    5. `无副作用` Zustand 推荐使用  `immer`库处理不可变性， 避免不必要的副作用。

8. 深层次状态处理
    - Zustand 会合并第一层的 state，但是对于深层次的状态更新，需要手动合并状态

---

**代码示例**

1. **创建 Store (`src/counter/store.ts`)**

    - 定义 Store 的数据结构和行为，并利用 `create` 函数生成自定义 Hook。

    ```TypeScript
    import { create } from 'zustand';

    // 1. 使用 interface 定义 Store 的形态
    interface CounterStore {
      counter: number;
      increment: () => void;
      reset: () => void;
    }

    // 2. 使用 create 函数创建 Store，它会返回一个 Hook,传入一个函数，返回一个对象
    /**
    *
    - @param set 用于更新状态
    - @param get 用于获取状态
    - @returns 返回一个对象，对象中的方法可以用于更新状态
    - */
    const useCounterStore = create<CounterStore>((set) => ({
      // 3. 定义初始状态
      counter: 0,

      // 4. 定义更新状态的 actions
      increment: () => {
        // set 函数接收一个函数，用于计算下一个状态
        // Zustand 会自动合并状态，无需展开运算符 `...`
        set((state) => ({ counter: state.counter + 1 }));
      },

      reset: () => {
        // 对于不依赖旧状态的更新，可以直接传入一个对象
        set({ counter: 0 });
      },
    }));
    export default useCounterStore;
    ```

2. **在主组件中使用 Store (`src/counter/Counter.tsx`)**

    - 替换原有的 `useReducer` 逻辑，直接调用 `useCounterStore` Hook 获取状态和动作。

    ```TypeScript
    import { useCounterStore } from './store';

    const Counter = () => {
      // 调用 Hook 并解构出所需的状态和方法
      const { counter, increment, reset } = useCounterStore();

      return (
        <div>
          {/* 将状态绑定到视图 */}
          <p>{counter}</p>
          {/* 将方法绑定到事件 */}
          <button onClick={increment} className="btn btn-primary mx-1">
            Increment
          </button>
          <button onClick={reset} className="btn btn-secondary mx-1">
            Reset
          </button>
        </div>
      );
    };

    export default Counter;
    ```

3. **在其他组件中共享状态 (`src/NavBar.tsx`)**

    - 在任意其他组件中调用同一个 Hook，可以访问到同步的状态。组件可以选择只获取它关心的部分。

    ```TypeScript
    import { useCounterStore } from './counter/store';

    const NavBar = () => {
      // 在此组件中，我们只关心 counter 的值，不关心 action
      // 组件只会订阅 counter 的变化
      const { counter } = useCounterStore();

      return (
        <nav>
          Tasks Counter: {counter}
        </nav>
      );
    };

    export default NavBar;
    ```

4. 深层次状态处理

    - 注意：如果不进行状态合并，其他状态会丢失。每次更新都需要手动合并状态，这在实际开发中会变得很繁琐。

    ```TypeScript
    import { create } from 'zustand'

    interface User {
        gourd: {
            oneChild: string,
            twoChild: string,
            threeChild: string,
            fourChild: string,
            fiveChild: string,
            sixChild: string,
            sevenChild: string,
        },
        updateGourd: () => void
    }

    // 创建 store
    const useUserStore = create<User>(((set) => ({
        // 初始化葫芦娃状态
        gourd: {
            oneChild: '大娃',
            twoChild: '二娃',
            threeChild: '三娃',
            fourChild: '四娃',
            fiveChild: '五娃',
            sixChild: '六娃',
            sevenChild: '七娃',
        },
        // 更新方法
        updateGourd: () => set((state) => ({
            gourd: {
                // ...state.gourd,  // 需要手动合并状态
                oneChild: '大娃-超进化',
            }
        }))
    })))

    export default useUserStore;
    ```

## 16.1- 使用 immer 中间件

1. 安装：`npm install immer`
2. immer 原理剖析
   immer.js 通过 Proxy 代理对象的所有操作，实现不可变数据的更新。当对数据进行修改时，immer 会创建一个被修改对象的副本，并在副本上进行修改，最后返回修改后的新对象，而原始对象保持不变。这种机制确保了数据的不可变性，同时提供了直观的修改方式。

3. immer 的核心原理基于以下两个概念：

    1. 写时复制 (Copy-on-Write)
        - 无修改时：直接返回原对象
        - 有修改时：创建新对象
    2. 惰性代理 (Lazy Proxy)
        - 按需创建代理
        - 通过 Proxy 拦截操作
        - 延迟代理创建

**代码示例:**

1. 工作流程

```ts
	type Draft<T> = {
	  -readonly [P in keyof T]: T[P];
	};

	function produce<T>(base: T, recipe: (draft: Draft<T>) => void): T {
	  // 用于存储修改过的对象
	  const modified: Record<string, any> = {};

	  const handler = {
	    get(target: any, prop: string) {
	      // 如果这个对象已经被修改过，返回修改后的对象
	      if (prop in modified) {
	        return modified[prop];
	      }

	      // 如果访问的是对象，则递归创建代理
	      if (typeof target[prop] === 'object' && target[prop] !== null) {
	        return new Proxy(target[prop], handler);
	      }
	      return target[prop];
	    },
	    set(target: any, prop: string, value: any) {
	      // 记录修改
	      modified[prop] = value;
	      return true;
	    }
	  };

	  // 创建代理对象
	  const proxy = new Proxy(base, handler);

	  // 执行修改函数
	  recipe(proxy);

	  // 如果没有修改，直接返回原对象
	  if (Object.keys(modified).length === 0) {
	    return base;
	  }

	  // 创建新对象，只复制修改过的属性
	  return JSON.parse(JSON.stringify(proxy))
	}

	// 使用示例
	const state = {
	  user: {
	    name: '张三',
	    age: 25
	  }
	};

	const newState = produce(state, draft => {
	  draft.user.name = '李四';
	  draft.user.age = 26;
	});

	console.log(state);     // { user: { name: '张三', age: 25 } }
	console.log(newState);  // { user: { name: '李四', age: 26 } }
```

    注意：这是一个简化实现，没有考虑数组的情况和深层次的代理，只实现了其核心思想。

2.  基础用法：

    ```TypeScript
    import { produce } from 'immer'

    const data = {
     user: {
       name: '张三',
       age: 18
     }
    }

    // 使用 produce 创建新状态
    const newData = produce(data, draft => {
     draft.user.age = 20  // 直接修改 draft
    })

    console.log(newData, data)
    // 输出:
    // { user: { name: '张三', age: 20 } }
    // { user: { name: '张三', age: 18 } }
    ```

3.  在 Zustand 中使用

    ```TypeScript
    import { create } from 'zustand'
    import { immer } from 'zustand/middleware/immer'

    // 注意：使用 immer 中间件时的特殊结构
    const useUserStore = create<User>()(immer(((set) => ({
        gourd: {
            oneChild: '大娃',
            twoChild: '二娃',
            threeChild: '三娃',
            fourChild: '四娃',
            fiveChild: '五娃',
            sixChild: '六娃',
            sevenChild: '七娃',
        },
        updateGourd: () => set((state) => {
            // 直接修改状态，无需手动合并
            state.gourd.oneChild = '大娃-超进化'
            state.gourd.twoChild = '二娃-谁来了'
            state.gourd.threeChild = '三娃-我来了'
        })
    }))))
    ```

## 17- 练习：使用 Zustand 管理认证状态

> 本节应用 Zustand 的核心概念来创建一个新的 Store，专门用于管理和共享用户的认证状态。其过程包括定义 Store 的形态、实现登录和登出逻辑，并以此重构现有组件，最终移除旧的、基于 Context 和 Reducer 的状态管理代码，从而简化整个应用的结构。

**知识树**

1. **练习目标与范围**

    - **核心任务**: 创建一个 `AuthStore` 来全局管理用户登录状态。
    - **管理内容**:
        - 当前登录的 `user` (string)。
        - `login` 动作。
        - `logout` 动作。
    - **重构目标**: 替换掉原有的认证状态管理方案，并清理相关冗余代码。

2. **创建认证 Store (`auth/store.ts`)**

    - **定义接口 (`AuthStore`)**:
        - `user: string`: 用户名。
        - `login: (username: string) => void`: 登录方法。
        - `logout: () => void`: 登出方法。
    - **实现 Store**:
        - 使用 `create<AuthStore>((set) => ({...}))` 结构。
        - **初始状态**: 设置 `user` 的初始值为空字符串 `''`。
        - **动作实现**:
            - `login: (username) => set({ user: username })`。
            - `logout: () => set({ user: '' })`。
    - **`set` 函数的简化应用**:
        - 由于 `login` 和 `logout` 的新状态不依赖于旧状态，因此可以直接向 `set` 函数传递一个包含更新后状态的对象，而无需使用 `(state) => ({...})` 的回调形式。这使得代码更简洁。

3. **应用重构流程**

    - **第一步：替换组件内的状态逻辑 (`LoginStatus.tsx`, `TaskList.tsx`)**
        - 删除对旧的自定义认证 Hook (如 `useAuth`) 的引用。
        - 导入并调用新的 `useAuthStore` Hook。
        - 通过解构从 `useAuthStore` 获取 `user`, `login`, `logout`。
        - 将原先通过 `dispatch` 触发的事件，改为直接调用 `login(username)` 和 `logout()`。
    - **第二步：清理应用根组件 (`App.tsx`)**
        - Zustand 无需 `Provider`。因此，直接移除旧的 `AuthProvider` 的导入语句。
        - 在 JSX 中，删除包裹应用组件树的 `<AuthProvider>` 标签。
        - 此步骤显著简化了组件树的嵌套层级。
    - **第三步：删除废弃文件**
        - 完成重构后，原有的 `Context`、`Provider`、`Reducer` 以及自定义 `Hook` 文件均可被安全删除。

4. **重构后的收益**

    - **中心化逻辑**: 所有认证逻辑都聚合在 `auth/store.ts` 中，易于维护。
    - **简化的 API**: 组件交互从 `dispatch` 变为类型安全、意图明确的函数调用 (`login()`, `logout()`)。
    - **简化的组件树**: 移除了 Provider 使根组件更干净、易读。
    - **代码精简**: 整体代码量减少，消除了状态管理所需的模板代码。

---

**代码示例**

1. **创建认证 Store (`src/auth/store.ts`)**

    - 封装所有与用户认证相关的状态和逻辑。

    ```TypeScript
    import { create } from 'zustand';

    interface AuthStore {
      user: string;
      login: (username: string) => void;
      logout: () => void;
    }

    export const useAuthStore = create<AuthStore>((set) => ({
      user: '',
      login: (username) => set({ user: username }),
      logout: () => set({ user: '' }),
    }));
    ```

2. **重构登录状态组件 (`src/auth/LoginStatus.tsx`)**

    - 用 `useAuthStore` 替换旧的 Hook，并直接调用 `login` 和 `logout` 方法。

    ```TypeScript
    import { useAuthStore } from './store';

    const LoginStatus = () => {
      // 1. 调用新的 Zustand Hook
      const { user, login, logout } = useAuthStore();

      if (user)
        return (
          <>
            <div>
              <span className="mx-2">{user}</span>
              {/* 2. 直接调用 logout 方法 */}
              <a onClick={() => logout()} href="#">
                Logout
              </a>
            </div>
          </>
        );
      return (
        <div>
          {/* 3. 直接调用 login 方法 */}
          <a onClick={() => login('mosh.hamedani')} href="#">
            Login
          </a>
        </div>
      );
    };

    export default LoginStatus;
    ```

3. **重构应用根组件 (`src/App.tsx`)**

    - 移除不再需要的 `AuthProvider`，简化组件树。

    ```TypeScript
    // 旧的 AuthProvider 导入被删除
    // import AuthProvider from './auth/AuthProvider';
    import TaskList from './tasks/TaskList';
    import LoginStatus from './auth/LoginStatus';

    function App() {
      return (
        // AuthProvider 包裹层被移除
        <>
          <LoginStatus />
          <TaskList />
        </>
      );
    }

    export default App;
    ```

## 18- 使用选择器防止不必要的渲染

> Zustand 允许通过“选择器 (Selector)”函数来优化组件的渲染行为。默认情况下，组件会订阅整个 Store 的变化，导致任何状态更新都会触发其重新渲染。使用选择器，组件可以精确声明其依赖的状态片段，从而仅在该特定数据发生变化时才重新渲染，有效避免了不必要的性能开销。

**知识树**

1. **问题背景：默认订阅行为**

    - **默认机制**: 当组件调用 `useStore()` 时，它会订阅整个 Store 对象。
    - **触发条件**: Store 中**任何**一个属性的值发生变化，都会通知所有订阅了该 Store 的组件进行重新渲染。
    - **性能隐患**: 一个组件即便只使用了 Store 中的属性 `A`，但当 Store 中不相关的属性 `B` 改变时，该组件依然会进行一次无效的重新渲染。

2. **核心概念：选择器 (Selector)**

    - **定义**: 选择器是一个函数，作为 `useStore` Hook 的第一个参数传入。
    - **作用**: 从完整的 Store 状态中，精确地挑选（select）出组件真正依赖的数据。
    - **目的**: 将组件的订阅目标从“整个 Store 对象”缩小为“特定的数据值”。

3. **选择器的工作机制**

    - **语法**: `const selectedState = useStore(state => state.desiredProperty);`
    - **执行流程**:
        1. 组件调用 `useStore` 并传入选择器函数。
        2. Zustand 不再返回整个 Store 对象，而是返回选择器函数的**执行结果**。
        3. 每当 Store 发生变化时，Zustand 会重新执行该选择器函数。
        4. Zustand 会使用**严格相等 (`===`)** 来比较本次选择器的返回值与上一次的返回值。
        5. **仅当**两次返回值不相等时，Zustand 才会触发该组件的重新渲染。
    - **结果**: 组件的渲染与它所依赖的数据片段被精确地绑定在了一起。

4. **选择器的优势与应用**

    - **性能优化**: 从根本上杜绝了因不相关状态更新而导致的组件重渲染。
    - **精确订阅**: 让组件只对自己关心的数据变化做出反应，实现了更细粒度的控制。
    - **代码意图明确**: 通过选择器，可以清晰地看出组件到底依赖 Store 中的哪一部分数据。

---

**代码示例**

1. **扩展 Store (`src/counter/store.ts`)**

    - 为 Store 增加一个新属性 `max`，并修改 `reset` 方法来更新它，以便于演示不相关的状态更新。

    ```TypeScript
    import { create } from 'zustand';

    interface CounterStore {
      counter: number;
      max: number; // 新增属性
      increment: () => void;
      reset: () => void; // 修改此方法的功能用于演示
    }

    export const useCounterStore = create<CounterStore>((set) => ({
      counter: 0,
      max: 5, // 初始值
      increment: () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      // 为了演示，让 reset 更新 max 而非 counter
      reset: () => {
        set({ max: 10 });
      },
    }));
    ```

2. **未优化的组件 (`src/NavBar.tsx` - 无选择器)**

    - 此实现会导致 `NavBar` 在 `max` 属性变化时也重新渲染，尽管它只使用了 `counter`。

    ```TypeScript
    import { useCounterStore } from './counter/store';

    const NavBar = () => {
      // 通过解构获取，组件订阅了整个 store 对象
      const { counter } = useCounterStore();

      console.log('Render Nav Bar');

      return (
        <nav>
          Tasks Counter: {counter}
        </nav>
      );
    };
    ```

    - **行为**: 调用 `increment()` 和 `reset()` 都会在控制台打印 "Render Nav Bar"。

3. **优化后的组件 (`src/NavBar.tsx` - 使用选择器)**

    - 通过传入选择器函数，组件只订阅 `counter` 属性的变化。

    ```TypeScript
    import { useCounterStore } from './counter/store';

    const NavBar = () => {
      // 传入一个选择器函数，直接获取 counter 的值
      // 组件现在只订阅 counter 的变化
      const counter = useCounterStore(state => state.counter);

      console.log('Render Nav Bar');

      return (
        <nav>
          Tasks Counter: {counter}
        </nav>
      );
    };
    ```

    - **行为**: 只有调用 `increment()` 会打印 "Render Nav Bar"。调用 `reset()` 时，由于 `counter` 的值未变，组件不会重新渲染。## 19- 使用 Zustand DevTools 检查状态

## 19- 使用 Zustand DevTools 检查 Store

> 为了在开发过程中方便地调试和观察 Zustand Store 的状态，可以集成 `simple-zustand-devtools` 库。该库能将 Store 的状态和行为连接到 React 开发者工具，允许开发者实时检查状态值、跟踪变更，从而极大地提高了调试效率。此功能应仅在开发环境中启用。

**知识树**

1. **核心目的：Store 的内省与调试**

    - **需求**: 在应用运行时，需要一个可视化界面来实时监控 Store 的内部数据。
    - **解决方案**: 使用 `simple-zustand-devtools` 库，它充当 Zustand 和 React DevTools 扩展之间的桥梁。

2. **集成步骤**

    - **第一步：安装依赖**
        - **主工具库**: `npm install simple-zustand-devtools`。
        - **Node 类型定义 (为解决 TypeScript 编译错误)**: `npm install -D @types/node`。
            - **原因**: 集成代码需要读取 `process.env.NODE_ENV` 环境变量来判断当前是否为开发模式。在标准的客户端 TypeScript 环境中，`process` 是 Node.js 的全局对象，其类型定义并非内置，因此需要手动安装 `@types/node` 以供 TypeScript 编译器识别。
    - **第二步：在 Store 文件中挂载工具**
        - **位置**: 在创建 Store Hook 之后， 导出之前。
        - **导入**: 从 `simple-zustand-devtools` 中导入 `mountStoreDevtools` 函数。
        - **条件性执行**: 必须将挂载逻辑包裹在 `if (process.env.NODE_ENV === 'development')` 条件块内。
            - **目的**: 确保 DevTools 的相关代码只在开发环境中执行，不会被打包进最终的生产版本，避免不必要的性能损耗和代码暴露。
            - `process.env.NODE_ENV` 是由 Vite 或 Create React App 等构建工具在构建流程中自动注入的环境变量。
        - **调用 `mountStoreDevtools`**:
            - **函数签名**: `mountStoreDevtools(storeName, useStoreHook)`。
            - **参数一 `storeName` (string)**: 一个自定义的字符串，将作为此 Store 在 React DevTools 中显示的名称。
            - **参数二 `useStoreHook` (function)**: 要进行调试的 Zustand Store Hook 本身。

3. **在浏览器中查看**

    - **前提**: 浏览器已安装 React Developer Tools 扩展。
    - **操作流程**:
        1. 打开浏览器开发者工具，并切换到 "Components" 标签页。
        2. 在左侧的组件树中，会看到一个名为 `DevTools` 的虚拟节点。
        3. 展开此节点，即可找到以 `storeName` 命名的 Store。
        4. 选中该 Store，即可在右侧面板中看到其当前所有状态属性和方法的实时快照。当应用内发生交互导致状态变更时，此处的视图会自动更新。

---

**代码示例**

1. **在 Store 文件中集成 DevTools (`src/counter/store.ts`)**

    - 在创建完 `useCounterStore` 后，添加条件判断逻辑来挂载开发工具。

    ```TypeScript
    import { create } from 'zustand';
    // 1. 从库中导入 mountStoreDevtools 函数
    import { mountStoreDevtools } from 'simple-zustand-devtools';

    interface CounterStore {
      counter: number;
      max: number;
      increment: () => void;
      reset: () => void;
    }

    // 创建 Store Hook 的代码保持不变
    export const useCounterStore = create<CounterStore>((set) => ({
      counter: 0,
      max: 5,
      increment: () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      reset: () => {
        set({ max: 10 });
      },
    }));

    // 2. 检查是否处于开发环境
    if (process.env.NODE_ENV === 'development') {
      // 3. 如果是，则挂载 DevTools
      mountStoreDevtools('Counter Store', useCounterStore);
    }
    ```

    - **说明**: 上述代码被添加到 Store 定义文件的末尾。它不会改变 Store 的任何功能，仅在开发模式下附加了调试能力。

## 21- 练习：选择正确的状态管理方案

> 本节对一个现有项目（Game Hub）的状态管理方式进行诊断。通过分析当前基于 `useState` 和 Props 传递的实现，识别出“属性钻探 (Prop Drilling)”和“更新逻辑分散”两大核心问题。在评估了 `React Context` 和 Zustand 两种解决方案后，阐明了为何 `Context` 会引发不必要的渲染性能问题，并最终论证了 Zustand 因其内置的选择器（Selector）机制而成为更优越的选择。

**知识树**

1. **现状诊断：识别当前实现的问题**

    - **分析对象**: `gameQuery` 对象，一个用于存储游戏列表筛选条件（如类型、平台、排序等）的状态。
    - **当前实现**: 在根组件 `App` 中使用 `useState` 进行管理，并通过 props 将状态和更新函数向下传递。
    - **问题一：属性钻探 (Prop Drilling)**
        - **表现**: props (如 `onSearch` 回调) 被迫经过多个中间组件（如 `NavBar`）传递，而这些中间组件本身并不需要使用它们，其唯一目的是将 props 送达深层子组件（如 `SearchInput`）。
        - **负面影响**: 造成组件间的高度耦合，使得代码难以维护和重构。
    - **问题二：更新逻辑分散 (Scattered Logic)**
        - **表现**: 修改 `gameQuery` 对象不同属性的逻辑（如 `setGenreId`, `setPlatformId`）散布在根组件的多个不同位置。
        - **负面影响**: 缺乏一个集中的地方来管理状态变更和执行相关的业务规则，导致代码可读性差且难以维护。

2. **解决方案评估与权衡**

    - **备选方案 A：`useReducer` + `React Context`**
        - **优点**:
            - `useReducer` 可以将所有更新逻辑集中到一个 reducer 函数中，解决“逻辑分散”问题。
            - `Context` 可以将 `gameQuery` 对象和 `dispatch` 函数直接提供给组件树中的任何组件，解决“属性钻探”问题。
        - **致命缺陷：导致不必要的重新渲染**
            - **根本原因**: React Context 本身缺乏选择器（Selector）机制。当 Context 的值（`gameQuery` 对象）发生任何变化时，所有消费该 Context 的组件都会无差别地重新渲染。
            - **具体示例**: 用户选择了一个新的游戏类型（`genreId` 改变），不仅 `GenreList` 会更新，`PlatformSelector`、`SortSelector` 等所有消费该 Context 的组件也会被强制重新渲染，即使它们的数据依赖并未改变。这造成了显著的性能浪费。
    - **备选方案 B：专业状态管理库 (以 Zustand 为例)**
        - **综合优势**: 能够解决所有已识别问题，同时规避了 `Context` 的性能缺陷。
        - **如何解决问题**:
            - **解决属性钻探**: 任何组件都可以通过调用 `useStore()` Hook 直接访问状态，无需 props。
            - **解决逻辑分散**: 所有更新逻辑都统一封装在 Store 的 actions 中。
            - **解决不必要渲染**: 这是 Zustand 的核心优势。它内置了**选择器**功能，允许组件只订阅其需要的特定状态片段。例如，`PlatformSelector` 可以只订阅 `gameQuery.platformId` 的变化，当 `genreId` 变化时，它将不会重新渲染。

3. **最终决策**

    - **选定方案**: Zustand。
    - **决策理由**: 相较于 `Context` 方案，Zustand 在解决了代码结构问题的同时，通过其核心的选择器机制提供了细粒度的渲染控制，避免了性能陷阱。其 API 简洁，模板代码少，是解决此类复杂共享状态问题的理想选择。

---

**代码示例**

1. **问题结构的概念性描述**

    - 以下伪代码展示了在重构前，`App` 组件中存在的问题。

    ```TypeScript
    // App.tsx - 问题诊断

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({});

      // 问题2: 更新逻辑分散在各处
      const handleSelectGenre = (genre: Genre) => {
        setGameQuery({ ...gameQuery, genreId: genre.id });
      };

      const handleSelectPlatform = (platform: Platform) => {
        setGameQuery({ ...gameQuery, platformId: platform.id });
      };

      const handleSearch = (searchText: string) => {
        setGameQuery({ ...gameQuery, searchText });
      };

      return (
        <div>
          {/* 问题1: 属性钻探 (Prop Drilling)
            onSearch 被传递给 NavBar，但 NavBar 自身并不使用它，
            只是为了进一步传递给 SearchInput 组件。
          */}
          <NavBar onSearch={handleSearch} />

          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={handleSelectGenre}
          />
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={handleSelectPlatform}
          />
        </div>
      );
    }
    ```

## 22- 练习：设置 Zustand Store

> 本节是重构项目状态管理的第一步：为 `gameQuery` 对象建立一个专用的 Zustand Store。此过程包括定义 Store 的接口、设计并实现用于更新各个查询参数的 Actions，并特别区分了不同 Action（如 `setSearchText` 和 `setGenreId`）之间不同的业务逻辑。此步骤将所有与 `gameQuery` 相关的状态逻辑集中到一个文件中，为后续的组件重构奠定了基础。

**知识树**

1. **准备工作与文件结构**

    - **依赖安装**: `npm install zustand`。
    - **文件创建**: 在 `src` 目录下新建 `store.ts`，作为应用客户端状态的中心枢纽。

2. **步骤一：定义 Store 的形态与结构**

    - **集中化 `GameQuery` 类型**:
        - 将原先定义在组件（`App.tsx`）中的 `GameQuery` 接口迁移至 `store.ts`。
        - **设计原则**: Store 是状态的“唯一真理之源”，因此相关的类型定义应与 Store 的实现内聚在一起。
        - **封装实现**: 移除 `GameQuery` 接口的 `export` 关键字，使其成为 `store.ts` 模块的私有类型，因为外部组件无需关心其具体结构，只需通过 Store 的 actions 与之交互。
    - **设计精细化的 Actions**:
        - 放弃单一、笼统的 `setGameQuery` 方法，转而为每个状态变更创建语义明确的独立 action。
            - `setSearchText`
            - `setGenreId`
            - `setPlatformId`
            - `setSortOrder`
        - **设计理由**: 不同的用户操作可能对应不同的业务规则。例如，执行文本搜索时可能需要清空其他过滤器，而选择游戏类型时则需要保留其他过滤器。精细化的 action 使这些不同的逻辑能够被清晰地封装和实现。

3. **步骤二：实现 Store 的核心逻辑**

    - **初始化状态**: 将 `gameQuery` 的初始值设为空对象 `{}`。为了通过 TypeScript 类型检查，需将 `GameQuery` 接口中所有非必需的属性设为可选（`?`）。
    - **实现 Actions**:
        - **`setSearchText` (特殊逻辑)**:
            - **业务规则**: 当用户输入文本进行搜索时，应重置游戏类型、平台等其他筛选条件，以确保搜索结果的广度。
            - **实现方式**: `set({ gameQuery: { searchText } })`。这个操作用一个只包含 `searchText` 的新对象**完全替换**了旧的 `gameQuery` 对象，从而达到了清除其他属性的目的。
        - **其他 Actions (`setGenreId`, `setPlatformId`, etc.) (标准逻辑)**:
            - **业务规则**: 当用户更新单个筛选条件时，必须保留 `gameQuery` 中所有其他已存在的条件。
            - **实现方式**: `set(store => ({ gameQuery: { ...store.gameQuery, genreId } }))`。
            - **关键技术**: 必须使用展开运算符 (`...store.gameQuery`) 来浅拷贝旧的 `gameQuery` 对象，以继承其所有属性，然后再设置或覆盖当前需要更新的属性。

4. **步骤三：导出 Hook 与重构说明**

    - **创建并导出**: 将 `create` 函数返回的 Hook 赋值给一个常量 `useGameQueryStore`，并将其作为模块的默认导出。
    - **关于中间破损状态**: 在一个多阶段的重构任务中，完成单个阶段（如本节创建 Store）可能会导致应用暂时无法编译或运行。这是一个正常的中间状态。应在完成所有相关重构步骤、使应用恢复正常工作后，再进行代码提交。

---

**代码示例**

1. **创建游戏查询 Store (`src/store.ts`)**

    - 此文件包含了 `GameQuery` 的类型定义、Store 的接口定义以及完整的 Store 实现。

    ```TypeScript
    import { create } from 'zustand';

    // 将 GameQuery 接口移至此处并设为私有
    interface GameQuery {
      genreId?: number;
      platformId?: number;
      sortOrder?: string;
      searchText?: string;
    }

    // 定义 Store 的完整形态
    interface GameQueryStore {
      gameQuery: GameQuery;
      setSearchText: (searchText: string) => void;
      setGenreId: (genreId: number) => void;
      setPlatformId: (platformId: number) => void;
      setSortOrder: (sortOrder: string) => void;
    }

    const useGameQueryStore = create<GameQueryStore>((set) => ({
      gameQuery: {},
      setSearchText: (searchText) => set({ gameQuery: { searchText } }),
      setGenreId: (genreId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
      setPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
      setSortOrder: (sortOrder) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    }));

    export default useGameQueryStore;
    ```

## 23- 练习：移除 Props 并使用 Store

> 本节执行一次全面的应用重构，将所有组件从依赖 Props 传递 `gameQuery` 状态的方式，切换为直接从 Zustand Store 中获取。此过程系统性地移除了组件间的 Props 依赖，消除了属性钻探，并根据每个组件的具体需求，应用了不同的选择器（Selector）策略来优化性能。最终，应用实现了状态逻辑的完全集中化和组件的高度解耦。

**知识树**

1. **重构目标与核心原则**

    - **目标**: 彻底消除 `gameQuery` 相关的属性钻探，使每个组件都能独立地从 `useGameQueryStore` 获取其所需的状态和方法。
    - **核心原则**:
        - **自上而下移除 Props**: 从根组件 (`App.tsx`) 开始，删除所有向子组件传递的 `gameQuery` 相关 props。
        - **组件内自给自足**: 在每个子组件内部，直接调用 `useGameQueryStore` Hook，并通过选择器获取其所需的数据。
        - **按需精确订阅**: 为每个组件量身定制选择器，确保它只订阅其渲染所必须的状态片段，从而将不必要的重新渲染降至最低。

2. **系统性重构流程**

    - **第一步：简化根组件 (`App.tsx`)**
        - 移除 `useState` 对 `gameQuery` 的管理。
        - 删除所有向子组件传递 `gameQuery` 及其更新函数的 props。根组件的职责简化为布局。
    - **第二步：逐个重构消费组件**
        - **通用模式**:
            1. 在组件文件中，删除 `Props` 接口或类型定义。
            2. 从组件的函数签名中移除 `props` 参数。
            3. 在组件函数体内，调用 `useGameQueryStore` 并传入一个或多个选择器，以获取所需的状态值或 action 函数。
            4. 清理文件中不再需要的 `import` 语句。
    - **第三步：将状态依赖推入自定义 Hook**
        - 对于 `GameGrid` 组件，其数据获取逻辑位于 `useGames` Hook 中。因此，将获取 `gameQuery` 的责任从 `GameGrid` 组件转移到 `useGames` Hook 内部。
    - **第四步：编译、测试与验证**
        - 确保所有文件编译通过。
        - 全面测试应用功能，验证状态变更（如选择类型、平台、排序、搜索）的行为是否与重构前一致，并符合 Store 中定义的逻辑（如搜索时清空其他过滤器）。

3. **选择器（Selector）的应用策略**

    - **策略一：只选择 Action 函数（最高性能）**
        - **场景**: 组件仅需触发一个动作，而其自身的渲染不依赖于 Store 中的任何状态。
        - **示例**: `SearchInput.tsx` 只需调用 `setSearchText` 函数。
        - **实现**: `const setSearchText = useGameQueryStore(s => s.setSearchText);`
        - **效果**: 由于函数引用在 Store 初始化后是稳定的，该组件将**永远不会**因为 Store 的状态变化而重新渲染。
    - **策略二：选择特定的状态片段**
        - **场景**: 组件的渲染依赖于 Store 中某个或某几个特定的值。
        - **示例**: `GenreList.tsx` 的渲染依赖于 `gameQuery.genreId`。
        - **实现**: `const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);`
        - **效果**: 该组件**仅在** `genreId` 的值发生变化时重新渲染，完全忽略 `platformId` 等其他无关属性的变化。
    - **策略三：选择整个状态对象（有意为之）**
        - **场景**: 一个 Hook 或组件的逻辑依赖于整个状态对象的**任何**变化。
        - **示例**: `useGames` 自定义 Hook，它需要根据 `gameQuery` 中的任何筛选条件变化来重新获取游戏数据。
        - **实现**: `const gameQuery = useGameQueryStore(s => s.gameQuery);`
        - **效果**: `gameQuery` 对象中的任何属性发生变化，都会导致该 Hook 重新执行，从而触发对后端的 API 调用。这是符合业务需求的正确设计。

4. **重构收益总结**

    - **代码量锐减**: 删除了大量 `Props` 接口、参数定义及组件间的传递代码。
    - **组件解耦**: 组件不再依赖父组件提供状态，可以被轻松地移动或复用。
    - **逻辑集中**: 所有与 `gameQuery` 相关的状态管理逻辑都集中在 `store.ts` 中，清晰且易于维护。
    - **性能优化**: 通过精确使用选择器，避免了因 `Context` 或粗放式状态订阅而导致的大量无效渲染。

---

**代码示例**

1. **`App.tsx` (重构后)**

    - 移除了所有状态管理逻辑，变为一个纯粹的布局组件。

    ```TypeScript
    function App() {
      return (
        <Grid>
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading />
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector />
                <SortSelector />
              </HStack>
            </Box>
            <GameGrid />
          </GridItem>
        </Grid>
      );
    }
    ```

2. **`SearchInput.tsx` (策略一：仅选择 Action)**

    ```TypeScript
    const SearchInput = () => {
      const ref = useRef<HTMLInputElement>(null);
      const setSearchText = useGameQueryStore(s => s.setSearchText);

      return (
        <form onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
        }}>
          {/* ... */}
        </form>
      );
    };
    ```

3. **`GenreList.tsx` (策略二：选择特定值和 Action)**

    ```TypeScript
    const GenreList = () => {
      const { data, isLoading, error } = useGenres();
      const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
      const setGenreId = useGameQueryStore(s => s.setGenreId);

      // ...

      return (
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <Button
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => setGenreId(genre.id)}
                // ...
              >
                {genre.name}
              </Button>
            </ListItem>
          ))}
        </List>
      );
    };
    ```

4. **`useGames.ts` (策略三：选择整个对象)**

    ```TypeScript
    const useGames = () => {
      const gameQuery = useGameQueryStore(s => s.gameQuery);

      return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery], // gameQuery 作为 queryKey 的一部分
        queryFn: ({ pageParam = 1 }) =>
          apiClient.getAll({
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam,
            },
          }),
        // ...
      });
    };
    ```
