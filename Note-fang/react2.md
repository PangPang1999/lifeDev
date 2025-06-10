# 第一章

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

# 第二章

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
    - 安装`@tanstack/react-query`和`@tanstack/react-query-devtools`。
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
            next: null,
            previous: null,
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
        //   next: string | null;
        //   previous: string | null;
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
            next: null,
            previous: null,
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
      next: string | null;
      previous: string | null;
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

## 28- 练习 - 创建可复用的 API 客户端 (续)

> 简述：此练习要求将项目中多个自定义 Hook 内直接使用 Axios 实例进行数据获取的逻辑，统一封装到一个通用的、可复用的`ApiClient`类中。这个类将提供泛型方法（如`getAll`）来处理不同资源的数据获取，从而减少重复代码并集中管理 API 交互逻辑。

**知识树**

1.  问题背景：
    - 多个数据获取 Hook（`useGenres`, `usePlatforms`, `useGames`）中存在相似的 Axios GET 请求和响应数据提取逻辑。
2.  `ApiClient`类设计：
    - **泛型参数** (`<T>`)：使类能够处理不同类型的数据实体。`T`代表 API 返回的`results`数组中单个元素的类型（如`Genre`, `Platform`, `Game`）。
    - **构造函数**：接收`endpoint: string`作为参数，用于指定该客户端实例操作的具体 API 资源路径。
    - **`getAll`方法**：
        - 泛型：方法本身不再需要泛型参数`T`，因为它由类级别泛型`T`提供。
        - 参数：可选地接收一个`AxiosRequestConfig`对象，用于传递查询参数（如`useGames`中的`params`）。
        - 实现：调用预配置的 Axios 实例（如`axiosInstance`）的`get`方法。
            - URL：使用构造函数中传入的`this.endpoint`。
            - 请求配置：传入可选的`config`参数。
            - 响应类型：`axiosInstance.get<FetchResponse<T>>(...)`，其中`FetchResponse<T>`是之前定义的通用响应结构接口。
            - 数据提取：`.then(res => res.data)`。
        - 确保`this`上下文：使用箭头函数定义`getAll`方法，以保证其内部`this`正确指向`ApiClient`实例。
    - **导出**：导出`ApiClient`类。
3.  Axios 实例管理：
    - 在`apiClient.ts`模块内部创建一个 Axios 实例（`axiosInstance`），配置基础 URL 和 API 密钥等。
    - 不再默认导出此`axiosInstance`，而是由`ApiClient`类内部使用。
4.  改造自定义 Hooks：
    - 在每个 Hook 的顶层创建对应的`ApiClient`实例：
        - `useGenres.ts`: `const apiClient = new ApiClient<Genre>('/genres');`
        - `usePlatforms.ts`: `const apiClient = new ApiClient<Platform>('/platforms/lists/parents');`
        - `useGames.ts`: `const apiClient = new ApiClient<Game>('/games');`
    - 修改`queryFn`：
        - 对于简单 GET（无参数）：`queryFn: apiClient.getAll` (传递方法引用)。
        - 对于带参数 GET（如`useGames`）：
            ```ts
            queryFn: () => apiClient.getAll({
              params: { /* ...gameQuery mapped to API params... */ }
            })
            ```
            这里`apiClient.getAll`被包裹在一个新的箭头函数中，以便传递`params`。
5.  益处：
    - **逻辑集中**：数据获取的核心逻辑（调用 HTTP 客户端、处理响应结构）封装在`ApiClient`中。
    - **减少重复**：各 Hook 不再重复编写 Axios 调用和`.then(res => res.data)`。
    - **类型安全**：通过泛型确保了类型从 API 客户端传递到 Hook。

**代码示例**

1.  `src/services/apiClient.ts` (修改后)

    ```ts
    import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

    export interface FetchResponse<T> {
      count: number;
      next: string | null;
      previous: string | null;
      results: T[];
    }

    const axiosInstance = axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: 'YOUR_API_KEY' // 替换为你的API密钥
      }
    });

    class ApiClient<T> {
      endpoint: string;

      constructor(endpoint: string) {
        this.endpoint = endpoint;
      }

      getAll = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
        return axiosInstance
          .get<FetchResponse<T>>(this.endpoint, config)
          .then(res => res.data);
      };

      // 可以添加 getOne, post, put, delete 等方法
    }

    export default ApiClient;
    ```

2.  `src/hooks/useGenres.ts` (使用新的`ApiClient`)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import ApiClient, { FetchResponse } from '../services/apiClient';
    import genresStatic from '../data/genres';
    // import { Genre } from './interfaces'; // Genre接口现在可以从这里导入或在ApiClient.ts中与FetchResponse一起

    export interface Genre { /* ... */ } // 假设Genre接口定义
    const apiClient = new ApiClient<Genre>('/genres');

    const useGenres = () => {
      return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll, // 直接使用apiClient.getAll
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genresStatic.length, next: null, previous: null, results: genresStatic }
      });
    };
    export default useGenres;
    ```

3.  `src/hooks/useGames.ts` (使用新的`ApiClient`并传递`params`)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import ApiClient, { FetchResponse } from '../services/apiClient';
    import { GameQuery } from '../App';
    // import { Game } from './interfaces';

    export interface Game { /* ... */ } // 假设Game接口定义
    const apiClient = new ApiClient<Game>('/games');

    const useGames = (gameQuery: GameQuery) => {
      return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({ // 调用getAll并传递config对象
          params: {
            genres: gameQuery.genreId, // 注意属性名从gameQuery映射
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        }),
      });
    };
    export default useGames;
    ```

## 29- 练习 - 实现无限查询 (Games)

> 简述：此练习要求将`useGames` Hook 从使用标准`useQuery`（分页或全量获取）改造为使用`useInfiniteQuery`，以实现游戏列表的无限滚动加载功能。这涉及到修改`queryFn`以接受分页参数，并实现`getNextPageParam`函数。

**知识树**

1.  目标：为游戏列表实现“加载更多”或无限滚动效果。
2.  `useInfiniteQuery`替换`useQuery`：
    - 在`useGames.ts`中，将`useQuery`替换为`useInfiniteQuery`。
3.  修改`queryFn`：
    - `queryFn`现在会接收一个包含`pageParam`属性的对象作为参数。`pageParam`代表下一页的标识（通常是页码）。
    - `queryFn`应使用此`pageParam`来构建 API 请求，以获取对应页的数据。RAWG API 使用`page`查询参数进行分页。
    - 为`pageParam`提供一个默认值（如 1），用于首次加载第一页数据。
    - `queryFn: ({ pageParam = 1 }) => apiClient.getAll({ params: { ...gameQueryParams, page: pageParam } })`
4.  实现`getNextPageParam`函数：
    - 参数：`(lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[])`
        - `lastPage`：最近一次成功获取到的页面数据（一个`FetchResponse<Game>`对象）。
        - `allPages`：一个数组，包含所有已成功获取的页面数据。
    - 逻辑：根据`lastPage.next`属性（RAWG API 在响应中提供下一页的 URL 或`null`）来判断是否还有更多页面。
        - 如果`lastPage.next`存在（不为`null`），则表示有下一页。下一页的页码可以通过解析`lastPage.next` URL 中的`page`参数得到，或者简单地返回`allPages.length + 1`（如果 API 页码是连续的且从 1 开始）。
        - 如果`lastPage.next`为`null`，则表示已到达最后一页，应返回`undefined`。
5.  组件适配 (`GameGrid.tsx`)：
    - `useGames` Hook 现在返回`useInfiniteQuery`的查询对象。
    - 解构出`data`, `fetchNextPage`, `hasNextPage`, `isFetchingNextPage`等属性。
    - 渲染数据：`data.pages`是一个数组，每个元素是一页的游戏数据（`FetchResponse<Game>`对象）。需要遍历`data.pages`，再对每个`page.results`进行遍历来渲染游戏卡片。
        - 使用`React.Fragment`为每个页面数据组提供`key`。
    - “加载更多”按钮：
        - `onClick`: 调用`fetchNextPage()`。
        - `disabled`: 当`!hasNextPage`或`isFetchingNextPage`为`true`时。
        - 文本：根据`isFetchingNextPage`显示不同状态。
6.  `FetchResponse`接口更新：
    - 确保`FetchResponse<T>`接口包含`next: string | null`和`previous: string | null`属性，以匹配 RAWG API 的响应结构。

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
        queryFn: ({ pageParam = 1 }) => // queryFn接收pageParam
          apiClient.getAll({
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam, // 将pageParam用于API请求
            },
          }),
        getNextPageParam: (lastPage, allPages) => { // 实现getNextPageParam
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
                  <p key={game.id}>{game.name}</p> // 简化示例
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

## 30- 练习 - 实现无限滚动

> 简述：此练习要求在已实现无限查询的基础上，利用`react-infinite-scroll-component`库将“加载更多”按钮替换为自动的无限滚动加载行为，即当用户滚动到页面底部时自动获取下一页数据。

**知识树**

1.  `react-infinite-scroll-component`库：
    - 用途：一个流行的 React 组件，用于简化无限滚动功能的实现。
    - 安装：`npm install react-infinite-scroll-component`。
2.  集成步骤 (`GameGrid.tsx`)：
    - 导入`InfiniteScroll`组件：`import InfiniteScroll from 'react-infinite-scroll-component';`
    - 包裹列表：使用`<InfiniteScroll>`组件包裹实际渲染游戏列表的容器（如`SimpleGrid`）。
    - **核心 Props 配置**：
        - `dataLength`: (number) **当前已加载并显示的项目总数**。不是 API 返回的总记录数。
            - 计算：`data.pages.reduce((total, page) => total + page.results.length, 0)`。
            - 初始值处理：由于`data`初始可能为`undefined`，计算时需提供默认值，如`data?.pages.reduce(...) || 0`。
        - `hasMore`: (boolean) 指示是否还有更多数据可供加载。直接使用`useInfiniteQuery`返回的`hasNextPage`。
            - 类型处理：`hasNextPage`可能为`boolean | undefined`，而`InfiniteScroll`期望`boolean`。使用`!!hasNextPage`将其转换为严格布尔值。
        - `next`: (function) 当需要加载更多数据时（用户滚动到底部且`hasMore`为`true`），此函数会被调用。应设置为`fetchNextPage`（由`useInfiniteQuery`提供）。
        - `loader`: (ReactNode) 在加载下一页数据时显示的加载指示器（如 Spinner 组件）。
3.  移除手动加载按钮：
    - 由于滚动会自动触发加载，原先的“Load More”按钮不再需要，可以移除。
4.  样式与布局调整：
    - 可能需要调整容器的 padding 等样式，确保无限滚动组件和列表布局正确。
5.  `staleTime`设置（回顾）：
    - 在`useGames` Hook 中为无限查询设置合适的`staleTime`（如 1 分钟），以利用缓存并减少不必要的后台刷新。

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

## 31- 练习 - 简化查询对象

> 简述：此练习旨在优化 React Query 的`queryKey`结构，通过在`gameQuery`对象中仅存储必要的 ID（如`genreId`, `platformId`）而非完整的对象，来简化`queryKey`的复杂性，使其更易读、更高效，并减少因无关对象属性变化导致的不必要缓存失效。

**知识树**

1.  问题背景：
    - 当前`gameQuery`对象中可能存储了完整的`Genre`和`Platform`对象。
    - 当`gameQuery`作为`queryKey`的一部分时，如果`Genre`或`Platform`对象中任何不影响筛选的属性（如`games_count`, `image_background`）发生变化，都会导致`queryKey`变化，从而可能触发不必要的缓存失效和数据重新获取。
2.  优化目标：
    - 在`gameQuery`中只存储对筛选有实际影响的 ID（`genreId`, `platformId`）。
    - 保持`queryKey`简洁和稳定。
3.  重构步骤：
    - **修改`GameQuery`接口** (`App.tsx`或共享位置)：
        - 将`genre: Genre | null`改为`genreId: number | undefined` (或`null`)。
        - 将`platform: Platform | null`改为`platformId: number | undefined` (或`null`)。
        - 使用`undefined`代替`null`作为未选择状态更符合可选属性的语义。
    - **更新`App.tsx`中状态设置逻辑**：
        - 当用户选择类型或平台时，在`setGameQuery`中存储对应的 ID，而非整个对象。
        - `onSelectGenre: (genre) => setGameQuery({ ...gameQuery, genreId: genre.id })`
    - **适配`GenreList.tsx`和`PlatformSelector.tsx`**：
        - 这两个组件可能需要接收`selectedGenreId`和`selectedPlatformId`作为 prop，用于高亮显示当前选中的项。
        - 修改其内部逻辑，比较 ID 而非整个对象。
    - **适配`GameHeading.tsx`**：
        - `GameHeading`之前可能直接从`gameQuery`中的`genre`和`platform`对象获取名称。
        - 现在它只有 ID，需要通过调用`useGenres`和`usePlatforms` Hooks，然后根据 ID 在返回的数据中查找对应的`Genre`和`Platform`对象来获取名称。
    - **适配`useGames.ts`**：
        - `queryFn`中构建 API 请求参数时，使用`gameQuery.genreId`和`gameQuery.platformId`。
4.  益处：
    - `queryKey`更简洁、稳定。
    - 减少因无关数据变化导致的缓存问题。
    - `gameQuery`对象更轻量。

**代码示例**

1.  `App.tsx` (或共享的`GameQuery`接口定义处)

    ```ts
    export interface GameQuery {
      genreId?: number; // 修改为ID
      platformId?: number; // 修改为ID
      sortOrder?: string;
      searchText?: string;
    }
    ```

2.  `App.tsx` (更新`gameQuery`状态的逻辑)

    ```tsx
    // function App() {
    //   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    //   // ...
    //   // <GenreList
    //   //   selectedGenreId={gameQuery.genreId} // 传递ID
    //   //   onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id, searchText: undefined })} // 存储ID
    //   // />
    //   // <PlatformSelector
    //   //   selectedPlatformId={gameQuery.platformId} // 传递ID
    //   //   onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id, searchText: undefined })} // 存储ID
    //   // />
    //   // ...
    // }
    ```

3.  `src/components/GameHeading.tsx` (适配，通过 ID 查找名称)

    ```tsx
    import useGenres, { Genre } from '../hooks/useGenres';
    import usePlatforms, { Platform } from '../hooks/usePlatforms';
    import { GameQuery } from '../App';

    interface Props {
      gameQuery: GameQuery;
    }

    function GameHeading({ gameQuery }: Props) {
      const { data: genresResponse } = useGenres();
      const genre = genresResponse?.results.find(g => g.id === gameQuery.genreId);

      const { data: platformsResponse } = usePlatforms();
      const platform = platformsResponse?.results.find(p => p.id === gameQuery.platformId);

      const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
      // return <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>;
      return <h1>{heading}</h1>;
    }
    ```

## 32- 练习 - 创建查找 Hook

> 简述：此练习旨在将根据 ID 查找特定对象（如 Genre 或 Platform）的重复逻辑封装到各自的自定义 Hook 中（如`useGenre(id)`和`usePlatform(id)`），以提高代码的复用性和可维护性，并解决之前在`GameHeading`等组件中直接查找带来的代码重复问题。

**知识树**

1.  问题背景：
    - 在多个组件（如`GameHeading`, `PlatformSelector`）中，存在根据 ID 从`useGenres`或`usePlatforms`返回的数据中查找特定对象的逻辑。
    - 这种查找逻辑是重复的。
2.  解决方案：创建专门的“查找”Hook。
    - `useGenre(id?: number): Genre | undefined`：接收一个可选的`genreId`，返回对应的`Genre`对象或`undefined`。
    - `usePlatform(id?: number): Platform | undefined`：接收一个可选的`platformId`，返回对应的`Platform`对象或`undefined`。
3.  查找 Hook 的实现：
    - 内部调用对应的列表 Hook（`useGenres`或`usePlatforms`）获取完整数据列表。
    - 使用数组的`find()`方法根据传入的`id`在`data.results`中查找对象。
    - 返回找到的对象或`undefined`。
    - 参数`id`设为可选，因为可能没有选中项（ID 为`undefined`）。
4.  在组件中使用查找 Hook：
    - `GameHeading.tsx`:
        - `const genre = useGenre(gameQuery.genreId);`
        - `const platform = usePlatform(gameQuery.platformId);`
        - 然后直接使用`genre?.name`和`platform?.name`。
    - `PlatformSelector.tsx`:
        - `const selectedPlatform = usePlatform(selectedPlatformId);` (如果需要整个对象)
        - 或者如果仅用于显示名称，可以直接在渲染时查找，但 Hook 更封装。
5.  修复`initialData`与`FetchResponse`类型不匹配问题：
    - 背景：之前修改`FetchResponse`接口添加了`next`等属性后，`useGenres`和`usePlatforms`中使用的静态`initialData`可能不再符合此接口结构（例如，静态数据只是一个纯数组，缺少`count`, `next`, `previous`属性）。
    - 解决方案：
        1.  （临时或不推荐）在 Hook 中构造`initialData`使其符合`FetchResponse`结构：
            `initialData: { count: staticArray.length, results: staticArray, next: null, previous: null }`
        2.  （推荐）修改静态数据文件（如`data/genres.ts`）本身，使其导出的数据直接就是符合`FetchResponse`结构的对象。这样`initialData`可以直接赋值。
            - 从 API 获取一次响应，将其结构复制到静态数据文件中。

**代码示例**

1.  `src/hooks/useGenre.ts` (查找单个 Genre 的 Hook)

    ```ts
    import useGenres, { Genre } from './useGenres';

    const useGenre = (id?: number): Genre | undefined => {
      const { data: genresResponse } = useGenres();
      return genresResponse?.results.find(genre => genre.id === id);
    };

    export default useGenre;
    ```

2.  `src/hooks/usePlatform.ts` (查找单个 Platform 的 Hook)

    ```ts
    import usePlatforms, { Platform } from './usePlatforms';

    const usePlatform = (id?: number): Platform | undefined => {
      const { data: platformsResponse } = usePlatforms();
      return platformsResponse?.results.find(platform => platform.id === id);
    };

    export default usePlatform;
    ```

3.  `src/components/GameHeading.tsx` (使用查找 Hook)

    ```tsx
    import useGenre from '../hooks/useGenre';
    import usePlatform from '../hooks/usePlatform';
    import { GameQuery } from '../App';
    // ...

    function GameHeading({ gameQuery }: Props) {
      const genre = useGenre(gameQuery.genreId);
      const platform = usePlatform(gameQuery.platformId);

      const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
      // return <Heading ...>{heading}</Heading>;
      return <h1>{heading}</h1>;
    }
    ```

4.  `data/genres.ts` (示例：修改静态数据以匹配`FetchResponse`)

    ```ts
    // 之前可能是: export default [ { id: 1, name: "Action" }, ... ];
    // 修改后:
    export default {
      count: 2, // 示例数量
      next: null,
      previous: null,
      results: [
        { id: 4, name: "Action", slug: "action", games_count: 100, image_background: "..." },
        { id: 51, name: "Indie", slug: "indie", games_count: 100, image_background: "..." }
      ]
    };
    ```

    - `useGenres.ts`中`initialData`可直接设为`genresStaticDataFromImport`。

## 33- 练习 - 简化时间计算

> 简述：此练习旨在引入`ms`库来替代手动计算毫秒数（如用于 React Query 的`staleTime`），使得时间相关的配置更易读、更易维护，并减少计算错误。

**知识树**

1.  手动时间计算的问题：
    - 可读性差：如`24 * 60 * 60 * 1000`不如直接表达“24 小时”清晰。
    - 易出错：手动计算可能引入错误。
    - 缺乏注释时难以理解：需要注释来解释魔法数字的含义。
2.  `ms`库：
    - 用途：一个小型 JavaScript 库，用于在人类可读的时间字符串（如`'2 days'`, `'10h'`, `'7d'`）和毫秒数之间进行转换。
    - 安装：`npm install ms`。
    - TypeScript 类型定义：如果库本身不包含类型定义，可能需要安装`@types/ms`：`npm install @types/ms --save-dev`。
3.  使用方法：
    - 导入：`import ms from 'ms';`
    - 转换：调用`ms('时间字符串')`会返回对应的毫秒数。
        - `ms('24h')` -> 86400000
        - `ms('1d')` -> 86400000
        - `ms('10m')` -> 600000
4.  在 React Query 配置中应用：
    - 将原先手动计算的`staleTime`或`cacheTime`值替换为使用`ms`库转换的值。
    - `staleTime: ms('24h')`
5.  益处：
    - **可读性**：配置值直接表达时间单位，一目了然。
    - **准确性**：避免手动计算错误。
    - **简洁性**：代码更清晰。
6.  包体积考量：
    - `ms`库非常小，对最终打包体积影响极小。
    - 如果对包体积有极致要求，可以自行编写简单的工具函数进行时间转换，但`ms`库提供了更全面的格式支持和便利性。

**代码示例**

1.  安装`ms`和其类型定义

    ```bash
    npm install ms
    npm install @types/ms --save-dev
    ```

2.  在自定义 Hook 中使用`ms`库设置`staleTime`

    ```ts
    // src/hooks/useGenres.ts
    import { useQuery } from '@tanstack/react-query';
    import ms from 'ms'; // 导入ms库
    // ... 其他导入

    const useGenres = () => {
      return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        // queryFn: apiClient.getAll,
        staleTime: ms('24h'), // 使用ms库设置24小时
        // initialData: ...
      });
    };
    // export default useGenres;
    ```

    ```ts
    // src/hooks/usePlatforms.ts
    import { useQuery } from '@tanstack/react-query';
    import ms from 'ms';
    // ... 其他导入

    const usePlatforms = () => {
      return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        // queryFn: apiClient.getAll,
        staleTime: ms('24h'), // 使用ms库
        // initialData: ...
      });
    };
    // export default usePlatforms;
    ```

    ```ts
    // src/hooks/useGames.ts
    import { useInfiniteQuery } from '@tanstack/react-query';
    import ms from 'ms';
    // ... 其他导入

    const useGames = (gameQuery: GameQuery) => {
      return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        // queryFn: ...,
        // getNextPageParam: ...,
        staleTime: ms('1h'), // 示例：游戏列表1小时新鲜期
      });
    };
    // export default useGames;
    ```

# ddd

## 06_1. React Query 简介：高级数据获取与缓存

> 简述：本节作为 React Query 学习的开篇，概述了其作为一款强大的服务端状态管理库的核心价值。它旨在简化 React 应用中数据的获取、缓存、同步及更新等复杂操作。课程将系统性地分三个部分深入讲解 React Query 的使用：首先是如何有效地查询数据（涵盖 API 数据获取、错误处理、分页加载、无限滚动以及利用 DevTools 进行调试）；其次是如何变更数据（包括处理 CRUD 操作、实现乐观更新、创建自定义 Hook 及可复用的数据变更服务）；最后，通过一个综合性的项目实践环节，将所学知识应用于已有的 GameHub 项目，为其增加缓存机制和无限滚动功能，并在此过程中持续重构和优化代码库。

**知识树**

1. **React Query 核心定位**：
    - **服务端状态管理 (Server State Management)**：专注于处理来自后端 API 的数据，区别于客户端状态（如 UI 状态）。
    - 主要功能：简化数据获取 (Fetching)、缓存 (Caching)、同步 (Synchronizing) 和更新 (Updating) 服务器状态。
2. **课程内容结构 (三大部分)**：
    - **第一部分：数据查询 (Querying Data)**
        - 使用 React Query 从 API 获取数据。
        - 优雅地处理数据获取过程中的错误。
        - 实现分页 (Pagination) 加载数据。
        - 实现无限滚动 (Infinite Queries) 加载数据。
        - 使用 React Query DevTools 进行查询调试与监控。
    - **第二部分：数据变更 (Mutating Data)**
        - 处理常见的 CRUD (Create, Read, Update, Delete) 操作。
        - 实现乐观更新 (Optimistic Updates) 以提升用户体验。
        - 创建自定义 Hook 和可复用的服务来封装数据变更逻辑。
    - **第三部分：项目实践 (Enhancing GameHub)**
        - 将 React Query 的知识和技能应用于之前构建的 GameHub 项目。
        - 为 GameHub 添加数据缓存功能。
        - 为 GameHub 实现无限滚动浏览游戏列表。
        - 在实践过程中持续进行代码重构和改进，提升代码库质量。
3. **学习目标与预期成果**：
    - 熟练掌握使用 React Query 进行高效、现代化的数据管理。
    - 通过在 GameHub 项目中的实践，显著提升该应用的数据处理能力、用户体验和代码质量。

**代码示例**

_本节为概念性介绍，不涉及具体的 React Query 代码实现。_

---

## 07_2. React Query 解析：为何取代传统数据获取方式

> 简述：本节深入分析了在 React 应用中采用传统的`useState`和`useEffect`组合进行数据获取时普遍存在的若干问题和局限性。这些问题包括：在组件卸载时未能取消进行中的网络请求、数据获取逻辑与 UI 组件紧密耦合导致关注点未能分离、缺乏内置的请求失败自动重试机制、无法自动刷新以同步服务端的数据变更，以及没有有效的客户端缓存策略。本节阐述了 React Query 如何作为一个更简洁、轻量且功能强大的库，系统性地解决了这些痛点，并特别对比了其在数据缓存方面相对于 Redux 的优势和简洁性。

**知识树**

1. **传统数据获取方式回顾 (以 `useState` + `useEffect` 为例)**：
    - **状态管理**：使用 `useState` 来分别管理人获取的数据 (e.g., `data`)、加载状态 (e.g., `isLoading`) 和错误信息 (e.g., `error`)。
    - **副作用执行**：使用 `useEffect` Hook 来触发异步数据获取操作（如 API 调用），并在获取成功或失败后更新相应的状态。
2. **传统数据获取方式的常见问题与局限性**：
    - **请求未有效取消 (Request Cancellation Issue)**：
        - 当组件在数据请求完成前被卸载时，若请求未被取消，其回调仍可能尝试更新已卸载组件的状态，导致 React 警告（"Can't perform a React state update on an unmounted component"）或潜在的内存泄漏。
        - 在 React 18 的严格模式 (Strict Mode) 下，开发环境中组件会经历一次额外的挂载-卸载-再挂载周期，这使得未取消请求的问题更容易暴露（可能导致数据被重复获取）。
    - **关注点未分离 (Lack of Separation of Concerns)**：
        - 数据获取的逻辑（API 调用、状态更新、错误处理）通常直接嵌入在 UI 组件内部，导致组件职责不清、代码冗余。
        - 若其他组件也需要相同的数据或类似的获取逻辑，难以复用，需要复制代码。
    - **无内置失败重试机制 (No Built-in Retry Mechanism)**：
        - 若 API 请求因网络波动等原因暂时失败，传统方式通常直接显示错误，用户需要手动刷新才能重试，用户体验不佳。
    - **无自动数据刷新/同步 (No Automatic Data Refresh/Synchronization)**：
        - 当服务器上的数据发生变化后，已加载到客户端的数据不会自动更新，用户看到的是过时信息，除非手动刷新页面。
    - **无内置客户端缓存 (No Built-in Client-Side Caching)**：
        - 每次组件挂载或需要数据时，都可能重新向服务器发起请求，即使是对于不常变化的数据，也增加了不必要的网络开销和等待时间，影响应用性能。
3. **React Query 的核心价值与解决方案**：
    - **定义**：React Query 是一个专为 React 应用设计的、功能强大的库，用于管理服务器状态（即从 API 获取的数据）的获取、缓存、同步和更新。
    - **针对性解决痛点**：
        - 内置对请求取消的更好支持（虽然具体取消仍需配合`AbortController`，但其生命周期管理有助于此）。
        - 通过其 Hook 机制和设计模式，天然地促进了数据获取逻辑与 UI 组件的分离。
        - 默认提供自动的请求失败重试功能。
        - 支持多种策略的自动数据刷新（如窗口聚焦时、网络重连时、定时刷新等）。
        - 提供强大且可精细配置的客户端缓存机制，显著提升性能和用户体验。
4. **React Query 与 Redux 在数据缓存方面的对比**：
    - **Redux 作为缓存**：许多开发者曾使用 Redux（一个流行的 JavaScript 应用状态管理库）的全局 store 来存储从后端获取的数据，从而间接实现数据缓存。
    - **Redux 的问题**：
        - **复杂性高**：Redux 本身概念较多（actions, reducers, store, dispatch, middleware 等），学习曲线相对陡峭。
        - **模板代码多 (Boilerplate)**：即使使用 Redux Toolkit 等工具简化，仍可能需要编写较多围绕状态管理的代码。
        - **维护与调试**：对于大型应用，Redux 的状态流和异步操作管理可能增加调试和维护的难度。
    - **React Query 的优势**：
        - **更简单、更轻量级**：专注于服务器状态管理，API 设计直观，学习成本相对较低。
        - **更少的模板代码**：实现相同的数据获取和缓存功能，通常代码量远少于 Redux。
        - **专注性**：是为解决服务器状态问题而生，其设计和功能都围绕此核心。
5. **实践建议**：
    - 对于新的 React 项目，如果主要的数据管理需求是围绕服务器状态（API 数据），React Query 通常是比 Redux 更合适、更现代的选择（至少在数据缓存和获取方面）。
    - 对于依赖 Redux 进行数据缓存的旧项目，可以评估使用 React Query 进行替换的可行性，以简化代码库和提升开发效率。

**代码示例**

_本节主要进行概念对比和问题分析，以下为一个**传统数据获取方式的简化示例**（用于说明痛点，非 React Query 代码）：_

TypeScript

```
// 传统数据获取方式示例 (TodoList.tsx - 示意)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoListTraditional = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 问题1: 请求未取消 (若组件卸载)
    // 问题2: 逻辑耦合在组件内
    axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        setTodos(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message); // 问题3: 无自动重试
        setIsLoading(false);
      });
    // 问题4: 无自动刷新
    // 问题5: 无内置缓存
  }, []); // 空依赖数组，仅挂载时获取一次

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
};
```

---

## 08_3. React Query 配置：初始化客户端与 Provider

> 简述：本节介绍在 React 项目中成功安装并基础配置 React Query 库的必要步骤。核心操作包括：首先，通过 npm 或 yarn 等包管理器安装 `@tanstack/react-query` 包；其次，在应用的入口文件（通常是 `main.tsx` 或 `index.tsx`）中，创建一个 `QueryClient` 的全局实例；最后，使用 React Query 提供的 `<QueryClientProvider>` 组件，将这个创建好的 `QueryClient` 实例注入到整个 React 应用的组件树中。这样，应用内的任何组件就都能访问并利用 React Query 提供的强大功能了。

**知识树**

1. **安装 React Query 依赖包**：
    - **命令**：使用 npm 或 yarn 在项目终端中执行安装命令。
      Bash
        ```
        npm install @tanstack/react-query
        ```
        或
        Bash
        ```
        yarn add @tanstack/react-query
        ```
    - **版本指定（讲师提示）**：为了课程学习的一致性，讲师可能会建议安装特定版本（例如，字幕中提到 `5.17.19`）。可以通过 `@version` 后缀指定，如 `npm install @tanstack/react-query@5.17.19`。
2. **核心对象的导入 (在应用的入口文件，如 `src/main.tsx`)**：
    - `QueryClient`: 从 `@tanstack/react-query` 包中导入。这是 React Query 的核心，负责管理所有查询的缓存、状态以及执行查询和变更的逻辑。
    - `QueryClientProvider`: 同样从 `@tanstack/react-query` 包中导入。这是一个 React Context Provider 组件，用于将 `QueryClient` 实例向下传递给应用组件树中的所有子组件。
3. **React Query 初始化与配置流程 (在 `src/main.tsx`)**：

    - **Step 1: 创建 `QueryClient` 实例**：

        - 在 `main.tsx` 文件的顶部（或适当的初始化位置），通过 `new QueryClient()` 来创建一个全局唯一的 `QueryClient` 实例。
          TypeScript

        ```
        import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

        const queryClient = new QueryClient();
        ```

        - `QueryClient` 的构造函数可以接受一个配置对象，用于设置全局的查询默认选项（如 `staleTime`, `cacheTime`, `retry` 等），这部分将在后续课程中详细介绍。

    - **Step 2: 使用 `<QueryClientProvider>` 包裹应用根组件**：
        - 找到应用渲染的根组件（通常是 `<App />`）。
        - 用 `<QueryClientProvider>` 组件将其包裹起来。
    - **Step 3: 将 `QueryClient` 实例传递给 Provider**：

        - 为 `<QueryClientProvider>` 组件设置 `client` prop，并将其值赋为之前创建的 `queryClient` 实例。
          TypeScript

        ```
        // ... (React, ReactDOM imports)
        // import App from './App';
        // import queryClient from './react-query/queryClient'; // 如果单独创建了实例文件

        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <QueryClientProvider client={queryClient}> {/* Provider包裹App */}
              <App />
            </QueryClientProvider>
          </React.StrictMode>,
        );
        ```

4. **配置完成后的效果**：
    - 一旦完成上述配置，应用内部的任何组件都可以通过调用 React Query 提供的 Hooks（如 `useQuery`, `useMutation` 等）来与 `QueryClient` 交互，从而实现数据的获取、缓存、更新以及利用 React Query 的其他高级功能。

**代码示例**

1. 在 `src/main.tsx` 中配置 React Query

    TypeScript

    ```
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 1. 导入核心对象
    import App from './App';
    import './index.css'; // 假设有全局样式

    // 2. 创建 QueryClient 实例
    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        {/* 3. 使用 QueryClientProvider 包裹应用，并传入 client 实例 */}
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>,
    );
    ```

---

## 09_4. React Query 实践：使用`useQuery`获取数据

> 简述：本节详细介绍了如何运用 React Query 的核心 Hook——`useQuery`——来执行数据获取操作，以此替代传统 React 中依赖`useEffect`和`useState`的冗长模式。核心在于为`useQuery`提供两个关键配置项：`queryKey`，作为查询的唯一标识符用于缓存管理；以及`queryFn`，一个返回 Promise 的异步函数，负责实际从后端 API 拉取数据。`useQuery` Hook 会自动管理数据的加载状态、错误状态和最终获取的数据，并将这些信息以一个结构化对象的形式返回给组件，从而极大地简化了组件内部的状态管理和副作用处理。

**知识树**

1. **`useQuery` Hook 简介**：
    - **导入**：`import { useQuery } from '@tanstack/react-query';`
    - **核心作用**：用于从服务端或其他异步来源获取（查询）数据，并管理其整个生命周期（加载、成功、错误、缓存等）。
2. **`useQuery` 的核心配置对象**：
    - **`queryKey: QueryKey` (通常是 `any[]`)**：
        - **必需属性**。一个用于唯一标识此查询的键。React Query 利用此键来进行数据缓存、依赖跟踪和自动重新获取等操作。
        - **格式**：必须是一个数组。数组的第一个元素通常是一个字符串，用以概括描述所查询数据的类型或领域 (e.g., `['todos']`, `['posts']`)。
        - **动态性与参数化**：数组中可以包含后续的元素（字符串、数字、对象等），用以区分同一类型数据的不同查询实例。例如：
            - 获取所有待办事项：`['todos']`
            - 获取已完成的待办事项：`['todos', { completed: true }]`
            - 获取特定 ID 的待办事项：`['todos', todoId]`
        - `queryKey` 的内容会影响缓存。只有当 `queryKey` 完全相同时，React Query 才会认为是同一个查询并尝试使用缓存。
    - **`queryFn: () => Promise<TData>`**：
        - **必需属性**。一个返回 Promise 的函数，该函数负责执行实际的数据获取操作。
        - **返回值**：此 Promise 必须解析 (resolve) 为应用所需的数据 (`TData`)，或者在发生错误时被拒绝 (reject) 并抛出一个错误。
        - **灵活性**：可以使用任何 HTTP 客户端库（如 Axios、浏览器原生的 Fetch API）或任何其他返回 Promise 的异步操作来获取数据。React Query 本身不关心数据是如何获取的，只关心`queryFn`返回的 Promise 的结果。
3. **实现 `queryFn`**：

    - 通常将 API 调用逻辑封装在一个独立的函数中，然后将此函数引用作为 `queryFn` 的值。
      TypeScript

        ```
        // 示例：使用Axios获取待办事项列表
        const fetchTodos = (): Promise<Todo[]> =>
          axios.get<Todo[]>('https://api.example.com/todos').then(response => response.data);

        // 在useQuery配置中使用
        // queryFn: fetchTodos
        ```

    - **数据提取**：`queryFn` 应该返回纯粹的数据，而不是 HTTP 响应对象。例如，使用 Axios 时，通常需要 `.then(response => response.data)` 来提取响应体中的数据。
    - **TypeScript 类型**：为 `queryFn` 明确指定其返回的 Promise 所解析的数据类型 (e.g., `Promise<Todo[]>`)，可以增强代码的类型安全性，并使 React Query 能够推断出 `data` 属性的类型。

4. **`useQuery` 的返回值 (Query Object)**：
    - `useQuery` Hook 返回一个包含查询当前状态和结果的对象。常用的属性包括：
        - `data: TData | undefined`：当查询成功完成时，此属性持有获取到的数据。在数据加载完成前或查询失败时，其值为 `undefined`。
        - `error: TError | null`：当查询失败时，此属性持有错误对象。查询成功或正在加载时，其值为 `null`。
        - `isLoading: boolean`：布尔值，表示查询是否正在进行初次加载（即没有缓存数据可用时）。
        - （还包括 `isFetching`, `isSuccess`, `isError`, `status` 等更多状态属性，将在后续课程中逐步介绍）。
    - **解构赋值**：通常使用对象解构来获取这些属性，例如：`const { data, error, isLoading } = useQuery({ queryKey, queryFn });`
    - **数据重命名**：如果 `data` 这个名称不够语义化，可以在解构时重命名，例如：`const { data: todos, error, isLoading } = useQuery(...);`
5. **替代传统数据获取逻辑**：
    - 引入 `useQuery` 后，组件不再需要手动声明和管理用于存储数据、错误信息和加载状态的 `useState` 变量。
    - 也不再需要使用 `useEffect` Hook 来触发数据获取的副作用。React Query 会自动处理数据获取的触发和生命周期。
6. **处理 `data` 可能为 `undefined` 的情况**：
    - 由于在数据加载完成前或查询失败时 `data` 属性为 `undefined`，在 JSX 中访问 `data` 的属性（如 `data.map(...)`）之前，需要进行空值检查或使用可选链操作符 (`?.`)，以避免运行时错误。
      TypeScript
        ```
        // {data?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        ```
7. **React Query 带来的内置优势**：
    - **自动重试 (Automatic Retries)**：默认情况下，如果 `queryFn` 执行失败（Promise 被拒绝），React Query 会自动尝试重新执行若干次。
    - **自动刷新 (Automatic Refresh)**：可以配置在特定条件下（如窗口重新聚焦、网络重连、组件挂载时）自动重新获取数据。
    - **缓存 (Caching)**：成功获取的数据会被自动存储在缓存中，并根据 `queryKey` 进行索引。在配置的 `staleTime` 内，数据被视为“新鲜”(fresh)；之后变为“过时”(stale)。当再次请求相同 `queryKey` 的数据时，如果缓存数据仍新鲜，将直接从缓存返回；如果过时，可能会先返回过时数据以快速响应 UI，同时在后台重新获取新数据。

**代码示例**

1. 在 `TodoList.tsx` (或任何需要获取数据的组件) 中使用 `useQuery`

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    interface Todo { // 1. 定义数据类型接口
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    }

    // 2. 定义数据获取函数 (queryFn)
    const fetchTodos = async (): Promise<Todo[]> => {
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      return response.data; // queryFn 应返回纯数据
    };

    const TodoListWithReactQuery = () => {
      // 3. 调用 useQuery Hook
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({ // 4. 可选：指定数据和错误类型
        queryKey: ['todos'], // 5. 设置 queryKey
        queryFn: fetchTodos,    // 6. 设置 queryFn
      });

      // 7. 根据状态渲染UI (后续课程会分别处理 error 和 isLoading)
      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return (
        <ul>
          {/* 8. 使用可选链处理可能为undefined的todos */}
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    };

    export default TodoListWithReactQuery;
    ```

    - 此示例中，组件不再需要 `useState` 和 `useEffect` 来管理数据获取。
    - `queryKey: ['todos']` 唯一标识了这个查询。
    - `queryFn: fetchTodos` 提供了获取数据的异步逻辑。
    - `useQuery<Todo[], Error>` 为返回的数据和错误提供了类型信息。

---

## 10_5. React Query 错误处理：类型化与展示

> 简述：本节专注于讲解如何在使用 React Query 的`useQuery` Hook 获取数据时，有效地处理和展示可能发生的错误。核心在于理解`useQuery`返回的查询对象中的`error`属性，并通过为`useQuery`提供第二个泛型参数来明确指定错误对象的类型（例如，在使用 Axios 时，错误通常是 JavaScript 内置`Error`类的实例），从而能够在 TypeScript 环境中安全地访问错误属性（如`error.message`）并在用户界面上进行友好展示。

**知识树**

1. **`useQuery` 返回对象中的 `error` 属性**：
    - 当 `queryFn` 在执行过程中抛出错误，或者返回一个被拒绝 (rejected) 的 Promise 时，React Query 会将这个错误对象赋值给查询结果对象的 `error` 属性。
    - 如果查询成功或仍在进行中，`error` 属性的值为 `null`。
2. **错误对象的默认类型 (`unknown`) 与类型化**：
    - 默认情况下，`error` 属性的 TypeScript 类型是 `unknown`。这是因为 React Query 本身无法预知 `queryFn` 中使用的具体数据获取方式（如 Axios, Fetch API 或其他 HTTP 库）会抛出何种类型的错误对象。
    - **类型化的重要性**：为了能够在代码中安全、准确地访问错误对象的属性（例如，常见的 `message` 属性），需要将 `error` 的类型从 `unknown` 具体化。
    - **通过泛型参数指定错误类型**：`useQuery` Hook 接受多个泛型参数，其中第二个参数 `TError` 用于指定错误对象的类型。
      TypeScript
        ```
        // useQuery<TQueryFnData, TError, TData, TQueryKey>(config)
        // 例如，如果期望错误是标准的Error对象：
        // const { data, error, isLoading } = useQuery<Todo[], Error>({ queryKey, queryFn });
        ```
        当这样指定后，`error` 属性的类型将变为 `Error | null` (或你指定的 `TError | null`)，从而可以在代码中直接访问 `error.message` 等属性，并获得 TypeScript 的类型检查和智能提示。
3. **在组件中处理和展示错误**：
    - 从 `useQuery` 的返回值中解构出 `error` 属性。
    - 在 JSX 中进行条件渲染：
        - 如果 `error` 对象存在（即不为 `null`），则显示错误信息。通常会显示 `error.message` 给用户，或者根据错误类型展示更友好的提示。
          TypeScript
        ```
        // if (error) {
        //   return <p>An error occurred: {error.message}</p>;
        // }
        ```
4. **模拟错误以进行测试**：
    - **方法**：临时修改传递给 `useQuery` 的 `queryFn` 中的 API 请求 URL，使其成为一个无效的地址（例如，在 URL 中添加一个不存在的路径段或一个错误的字符，如字幕中在 URL 中加入 'x'）。
    - **观察行为**：
        - React Query 默认会进行数次自动重试（通常是 3 次）。可以在浏览器的网络(Network)标签页观察到这些重试请求。
        - 当所有重试都失败后，`queryFn` 的 Promise 最终会被拒绝，错误对象会被捕获并赋值给 `error` 属性。
        - 此时，组件中基于 `error` 状态的条件渲染逻辑会被触发，从而在 UI 上显示出错误信息。
5. **应用示例 (在 `App.tsx` 中使用 `TodoList`)**：
    - 为了在浏览器中实际看到 `TodoList` 组件（包含了错误处理逻辑）的运行效果，需要在应用的某个地方（如 `App.tsx`）渲染这个 `TodoList` 组件。

**代码示例**

1. 在 `TodoList.tsx` (或使用 `useQuery` 的组件) 中处理错误并指定错误类型

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios'; // 假设使用Axios

    interface Todo { /* ... */ }

    const fetchTodos = async (): Promise<Todo[]> => {
      // 模拟可能出错的请求 (通过修改URL)
      // const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos_invalid?_limit=10');
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      return response.data;
    };

    const TodoListWithErrorHandling = () => {
      // 1. 为 useQuery 指定第二个泛型参数 Error 来类型化错误对象
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });

      if (isLoading) return <p>Loading...</p>;

      // 2. 如果 error 对象存在，则显示错误信息
      if (error) {
        return <p>An error occurred: {error.message}</p>;
      }

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    };

    export default TodoListWithErrorHandling;
    ```

2. 在 `App.tsx` 中渲染 `TodoListWithErrorHandling` 以便测试

    TypeScript

    ```
    // In src/App.tsx
    import React from 'react';
    import TodoListWithErrorHandling from './react-query/TodoListWithErrorHandling'; // 假设路径

    function App() {
      return (
        <div>
          {/* 其他应用内容 */}
          <TodoListWithErrorHandling />
        </div>
      );
    }

    export default App;
    ```

    - 然后可以通过 `npm run dev` 启动应用，并在浏览器中观察。若要测试错误，可以在 `WorkspaceTodos` 中使用无效 URL。

---

## 11_6. React Query 加载状态：展示加载指示器

> 简述：本节介绍如何利用 React Query 的`useQuery` Hook 返回的`isLoading`状态属性，在数据从服务器获取的过程中向用户展示一个加载指示器（例如，一段提示文本 "Loading..." 或一个视觉上的 Spinner 组件）。`isLoading`是一个布尔值，当查询正在进行且当前没有可用的缓存数据（即首次加载或缓存失效后的重新加载）时，其值为`true`，一旦数据获取成功或失败，它将变为`false`。这使得开发者能够轻松地根据加载状态条件渲染不同的 UI，从而改善用户体验。

**知识树**

1. **`useQuery` 返回对象中的 `isLoading` 属性**：
    - **类型**：`boolean`。
    - **含义**：
        - 当 `isLoading` 为 `true` 时，表示 React Query 当前正在为该查询执行 `queryFn`（即发起网络请求），并且在此期间，没有立即可用的、被认为是“新鲜”或“过时但可接受”的缓存数据来展示给用户。这通常发生在组件首次加载并请求数据时，或者在缓存数据已过期且需要强制重新获取时。
        - 当数据成功获取并存入缓存，或者当数据获取失败并产生错误时，`isLoading` 会变为 `false`。
    - **与 `isFetching` 的区别（简要提及）**：
        - `isFetching` 也是一个布尔值，表示查询的 `queryFn` 当前是否正在执行。它与 `isLoading` 的主要区别在于，即使有缓存数据（可能是过时的）可以显示给用户，只要后台仍在进行数据刷新（例如，因为窗口聚焦或数据已过时），`isFetching` 仍然会是 `true`。而 `isLoading` 更强调的是“用户是否在等待初次数据展现”的状态。
2. **在组件中实现加载指示器的 UI**：

    - 从 `useQuery` 的返回值中解构出 `isLoading` 属性。
    - 在 JSX 中使用条件渲染逻辑：

        - 如果 `isLoading` 为 `true`，则渲染加载指示 UI。这可以是一段简单的文本，如 `<p>Loading...</p>`，或者一个更复杂的视觉元素，如 Chakra UI 的 `<Spinner />` 组件。
        - 如果 `isLoading` 为 `false`，则继续渲染错误信息（如果 `error` 存在）或实际的数据内容。
          TypeScript

        ```
        // const { data: todos, error, isLoading } = useQuery<Todo[], Error>(...);

        // if (isLoading) {
        //   return <p>Loading...</p>; // 或 <Spinner />
        // }

        // if (error) {
        //   return <p>Error: {error.message}</p>;
        // }

        // return (<ul>{todos?.map(...)}</ul>);
        ```

3. **测试加载状态的显示效果**：
    - **正常情况**：对于网络连接良好且 API 响应快速的情况，加载指示器可能只会短暂闪现，甚至难以察觉。
    - **模拟慢速网络**：为了更清晰地观察和调试加载状态的 UI，可以使用浏览器开发者工具（通常在 "Network" 标签页下）提供的网络限流 (Network Throttling) 功能，选择一个预设的慢速网络配置（如 "Slow 3G"）或自定义延迟。这将人为延长 API 请求的响应时间，使得加载指示器有足够的时间显示在屏幕上。
4. **React Query 带来的状态管理简化**：
    - 通过 `useQuery` Hook，React Query 自动并集中管理了与数据获取相关的三个核心状态：实际数据 (`data`)、错误信息 (`error`) 和加载状态 (`isLoading`)。
    - 开发者不再需要在组件内部为这些状态分别声明和维护多个 `useState` 变量，显著简化了组件逻辑，提高了代码的可读性和可维护性。

**代码示例**

1. 在 `TodoList.tsx` (或使用 `useQuery` 的组件) 中添加加载指示器

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Spinner } from '@chakra-ui/react'; // 假设使用Chakra UI的Spinner

    interface Todo { /* ... */ }

    const fetchTodos = async (): Promise<Todo[]> => {
      // 模拟网络延迟以便观察加载状态
      // await new Promise(resolve => setTimeout(resolve, 2000)); // 延迟2秒
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      return response.data;
    };

    const TodoListWithLoading = () => {
      // 1. 从 useQuery 解构出 isLoading
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });

      // 2. 如果 isLoading 为 true，则显示加载指示
      if (isLoading) {
        return <p>Loading...</p>;
        // 或者 return <Spinner size="xl" />; (如果使用Chakra UI)
      }

      if (error) {
        return <p>An error occurred: {error.message}</p>;
      }

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    };

    export default TodoListWithLoading;
    ```

---

## 12_7. React Query 重构：创建自定义查询 Hook

> 简述：本节的核心目标是提升代码的组织性和可复用性，通过将组件内部直接使用`useQuery`进行数据获取的逻辑（包括 API 调用函数、`queryKey`的定义、TypeScript 接口以及`useQuery`本身的调用和配置）提取封装到一个独立的、可复用的自定义 React Hook 中。这种重构实践遵循了“关注点分离”原则，使得 UI 组件更加专注于其本职的视图渲染和用户交互，而将数据获取的复杂细节隔离开来，从而增强了代码的模块化程度、可读性以及在项目中其他地方复用数据获取逻辑的能力。

**知识树**

1. **识别代码中的“关注点未分离”问题**：
    - **现象**：当在 UI 组件（例如，`TodoList.tsx`）中直接使用 `useQuery` Hook 时，所有与特定数据查询相关的配置（如 `queryKey`、`queryFn` 的实现、数据和错误的 TypeScript 类型定义）都散布在该组件文件内。
    - **缺点**：
        - **耦合性高**：数据获取逻辑与 UI 展示逻辑紧密耦合，使得组件职责不够单一。
        - **复用性差**：如果应用中其他组件也需要获取相同类型的数据（例如，另一处也需要待办事项列表），则必须复制粘贴几乎相同的 `useQuery` 调用和相关配置代码，导致冗余和维护困难。
        - **可读性与可维护性下降**：组件文件因包含大量数据获取细节而变得臃肿，核心的 UI 逻辑可能被淹没。
2. **解决方案：创建自定义查询 Hook**：
    - **目的**：将特定资源（如待办事项、帖子等）的数据获取逻辑及其所有相关配置（`queryKey`, `queryFn`, 类型定义）封装在一个专门的、可复用的自定义 Hook 函数中。
    - **命名约定**：自定义 Hook 的名称必须以 `use` 开头，例如 `useTodos`、`usePosts`。
    - **文件组织**：通常将自定义 Hooks 放置在项目 `src` 目录下的一个专门的 `hooks` 文件夹中，每个 Hook 对应一个 `.ts` (或 `.tsx` 如果 Hook 内部返回 JSX，但查询 Hook 通常不返回 JSX) 文件，例如 `src/hooks/useTodos.ts`。
3. **自定义查询 Hook 的实现步骤 (`useTodos.ts` 示例)**：
    - **Step 1: 创建 Hook 文件和函数**：
        - 新建 `useTodos.ts` 文件。
        - 定义并导出一个名为 `useTodos` 的函数：`export const useTodos = () => { ... };` (或 `export default useTodos;`)。
    - **Step 2: 迁移数据获取函数和相关类型定义**：
        - 将原 UI 组件中定义的 `queryFn` (例如 `WorkspaceTodos` 函数) 完整地移动到 `useTodos.ts` 文件内部。
        - 确保 `WorkspaceTodos` 所需的依赖（如 `axios`）和返回数据的 TypeScript 接口（如 `Todo` 接口）也在 `useTodos.ts` 中被正确导入或定义。讲师选择将 `Todo` 接口也一并移入 Hook 文件。
    - **Step 3: 在自定义 Hook 内部调用 `useQuery`**：
        - 在 `useTodos` 函数体内，调用原 UI 组件中使用的 `useQuery` Hook，并传入之前确定的 `queryKey` (e.g., `['todos']`) 和迁移过来的 `queryFn` (e.g., `WorkspaceTodos`)。
        - 确保为 `useQuery` 提供了正确的泛型类型参数 (e.g., `useQuery<Todo[], Error>(...)`)。
    - **Step 4: 返回 `useQuery` 的结果**：
        - `useTodos` Hook 的返回值就是其内部调用的 `useQuery` Hook 的返回值（即包含 `data`, `error`, `isLoading` 等属性的查询对象）。
          TypeScript
        ```
        // src/hooks/useTodos.ts
        // ... (imports for axios, useQuery, Todo interface)
        // const fetchTodos = async (): Promise<Todo[]> => { ... };
        // export const useTodos = () => {
        //   return useQuery<Todo[], Error>({
        //     queryKey: ['todos'],
        //     queryFn: fetchTodos,
        //     // ... (其他如staleTime等配置)
        //   });
        // };
        ```
4. **在 UI 组件中使用自定义查询 Hook**：
    - **导入**：在原 UI 组件（如 `TodoList.tsx`）中，导入新创建的自定义 Hook：`import { useTodos } from '../hooks/useTodos';`。
    - **调用**：像调用普通 Hook 一样调用自定义 Hook，并解构其返回的查询对象以获取所需状态：
      TypeScript
        ```
        // const { data: todos, error, isLoading } = useTodos();
        ```
    - **清理**：移除 UI 组件中原有的 `useQuery` 调用、`queryFn` 定义、相关类型接口定义（如果已移至 Hook 文件）以及不再需要的导入语句。
5. **重构带来的益处**：
    - **高度的关注点分离**：UI 组件 (`TodoList.tsx`) 现在只负责根据从 `useTodos` Hook 获取的状态来渲染视图，不再关心数据是如何获取的。
    - **增强的可复用性**：应用中任何其他需要待办事项列表数据的组件，都可以简单地导入并调用 `useTodos` Hook。
    - **提升的可维护性**：关于待办事项数据获取的所有逻辑（API 端点、数据转换、缓存策略、错误处理细节等）都集中在 `useTodos.ts` 一个地方，便于统一修改和调试。
    - **更简洁的组件代码**：UI 组件的代码量显著减少，逻辑更清晰，更易于理解和测试。

**代码示例**

1. 创建自定义查询 Hook `src/hooks/useTodos.ts`

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    // 1. 定义或导入数据接口 (讲师选择移入此文件)
    export interface Todo {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    }

    // 2. 定义数据获取函数
    const fetchTodos = async (): Promise<Todo[]> => {
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      return response.data;
    };

    // 3. 定义并导出自定义Hook
    const useTodos = () => {
      // 4. 在Hook内部调用 useQuery 并返回其结果
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        // staleTime: 10 * 1000, // 可选：在此处为特定Hook配置staleTime等
      });
    };

    export default useTodos;
    ```

2. 在 `TodoList.tsx` 中使用 `useTodos` 自定义 Hook

    TypeScript

    ```
    // src/react-query/TodoList.tsx (或组件所在路径)
    import React from 'react'; // React通常不再需要显式导入（如果JSX transform配置正确）
    import useTodos from '../hooks/useTodos'; // 1. 导入自定义Hook

    const TodoList = () => {
      // 2. 调用自定义Hook，解构所需状态
      const { data: todos, error, isLoading } = useTodos();

      // 渲染逻辑保持不变，但组件内部不再有数据获取的实现细节
      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>An error occurred: {error.message}</p>;

      return (
        <ul>
          {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    };

    export default TodoList;
    ```

    - 注意：原组件中对 `axios` 和 `useQuery` 的直接导入以及 `Todo` 接口的定义（如果之前在此）都应被移除。

---

## 13_8. React Query 调试：使用 DevTools

> 简述：本节介绍如何为 React Query 集成并使用其官方提供的开发者工具 (DevTools)。这是一个功能强大的浏览器内调试面板，能够在开发过程中直观地展示 React Query 的内部状态，包括当前缓存的所有查询数据、每个查询的详细状态（如是否新鲜、是否正在获取、观察者数量等）、数据内容预览，并允许开发者手动执行一些操作（如重新获取数据、使缓存失效、模拟加载或错误状态），从而极大地简化了基于 React Query 的应用的调试和问题排查过程。

**知识树**

1. **React Query DevTools 简介**：
    - **定位**：一个专门为 React Query 设计的、在开发环境下使用的调试工具。它以一个可交互的浮动面板形式集成到应用页面中。
    - **核心价值**：提供对 React Query 缓存、查询状态和行为的透明化视图，帮助开发者理解数据流、诊断问题并优化查询配置。
2. **安装 DevTools 包**：
    - **命令**：通过 npm 或 yarn 安装 `@tanstack/react-query-devtools` 包。这通常是一个开发依赖 (devDependency)，但在某些项目中也可能作为常规依赖安装。
      Bash
        ```
        npm install @tanstack/react-query-devtools
        # 或者 yarn add @tanstack/react-query-devtools
        ```
3. **在应用中集成和配置 DevTools (通常在 `src/main.tsx`)**：

    - **导入组件**：从 `@tanstack/react-query-devtools` 包中导入 `ReactQueryDevTools` 组件。
      TypeScript
        ```
        import { ReactQueryDevTools } from '@tanstack/react-query-devtools';
        ```
        - **注意导入路径**：确保从正确的包路径导入。字幕中强调，如果编辑器自动完成提示多个同名项，应选择来自 `@tanstack/react-query-devtools` 的那个（通常带有蓝色图标指示为组件）。
    - **放置组件**：将 `<ReactQueryDevTools />` 组件实例放置在 React 应用的组件树中，**必须位于 `<QueryClientProvider>` 组件的内部**，通常放在根 `<App />` 组件之后。
      TypeScript

        ```
        // In src/main.tsx
        // ... (QueryClient, QueryClientProvider, App imports)
        // const queryClient = new QueryClient();

        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevTools initialIsOpen={false} /> {/* 添加DevTools组件 */}
            </QueryClientProvider>
          </React.StrictMode>,
        );
        ```

    - **`initialIsOpen` Prop**：(可选) 可以设置 `initialIsOpen={true}` 使 DevTools 在应用加载时默认展开，或设为 `false` (默认行为) 使其初始处于收起状态。
    - **生产环境自动排除**：React Query DevTools 被设计为在生产构建 (production build) 中自动被移除，因此开发者通常无需担心它会影响最终部署包的大小或行为。

4. **DevTools 面板的主要功能与界面元素**：
    - **触发方式**：应用加载后，屏幕右下角（默认位置）会显示一个 React Query 的 Logo 小图标，点击该图标可以展开或收起 DevTools 面板。
    - **查询列表 (Cache Overview)**：
        - 面板左侧列出当前 React Query 缓存中存在的所有查询，以其 `queryKey` 进行标识和分组。
        - 每个查询条目旁边通常会显示其当前状态的指示（例如，绿色表示数据新鲜 `fresh`，黄色表示数据过时 `stale`，旋转图标表示正在获取 `Workspaceing`，灰色可能表示非活动 `inactive`）。
        - 还会显示该查询的观察者 (Observers) 数量，即当前有多少个组件实例正在使用（订阅）这个查询。
    - **查询详情 (Query Details Pane - 点击某个查询后显示)**：
        - **Query Details Tab**: 显示查询的完整 `queryKey`、观察者数量、最后更新时间等元数据。
        - **Actions Section**: 提供一组可手动触发的操作按钮：
            - `Refetch`: 强制立即重新执行该查询的 `queryFn`。
            - `Invalidate`: 将该查询标记为“过时”(stale)。这通常会触发 React Query 在下次需要该数据或满足其他重新获取条件时去获取最新数据。
            - `Reset`: 将查询重置到其初始状态（可能会清除数据和错误）。
            - `Trigger Loading`: 手动将查询置于加载中 (`isLoading: true`) 状态，方便调试加载 UI。
            - `Trigger Error`: 手动将查询置于错误状态，方便调试错误处理 UI。
        - **Data Explorer Tab**: 以可交互、可折叠的树状视图展示当前该查询缓存中的数据内容。
        - **Query Explorer Tab**: 更详细地展示该查询对象的内部状态和所有属性（如 `status`, `WorkspaceStatus`, `dataUpdatedAt`, `errorUpdatedAt` 等），这对于深入理解查询的生命周期和行为非常有用。
    - **状态解读提示**：
        - `fresh` (新鲜)：数据被认为是当前最新的，在 `staleTime` 过期前，React Query 通常不会因组件挂载或窗口聚焦等事件主动去重新获取它。
        - `stale` (过时)：数据已超过其 `staleTime`，可能不再是最新的。当有新的观察者挂载，或窗口聚焦，或网络重连时，React Query 会尝试在后台重新获取。
        - `inactive` (非活动)：表示当前没有任何组件正在使用（订阅）这个查询。非活动的查询数据会在 `cacheTime` （默认 5 分钟）后从缓存中被垃圾回收（移除）。

**代码示例**

1. 在 `src/main.tsx` 中集成 React Query DevTools

    TypeScript

    ```
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { ReactQueryDevTools } from '@tanstack/react-query-devtools'; // 1. 导入DevTools组件
    import App from './App';
    import './index.css';

    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* 2. 添加DevTools组件实例，通常放在App之后 */}
          {/* initialIsOpen={false} 是默认行为，可以不写，或设为true使其初始展开 */}
          <ReactQueryDevTools initialIsOpen={false} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
    ```

---

## 14_9. React Query 配置：自定义查询默认设置与特性

> 简述：本节深入探讨了如何自定义 React Query 的行为，允许开发者根据应用需求调整其默认设置。配置可以在两个层面进行：一是通过在创建`QueryClient`实例时设置`defaultOptions`来实现全局性的默认配置；二是在调用具体的`useQuery` Hook 时，通过其配置对象来针对单个查询进行个性化设置。讨论的关键配置项包括`retry`（失败请求的重试策略）、`cacheTime`（非活动查询数据在缓存中的保留时长）、`staleTime`（数据被视为“新鲜”状态的持续时长），以及多种控制数据自动重新获取（refetch）行为的开关（如窗口聚焦时、网络重连时、组件挂载时）。

**知识树**

1. **自定义查询配置的层级**：
    - **全局配置 (Global Configuration)**：
        - 在创建 `QueryClient` 实例时，可以向其构造函数传递一个配置对象。
        - 通过该对象的 `defaultOptions.queries` 属性，可以为应用中所有的查询（`useQuery`, `useInfiniteQuery` 等）设置统一的默认行为。
          TypeScript
        ```
        // const queryClient = new QueryClient({
        //   defaultOptions: {
        //     queries: { /* 全局查询默认配置写在这里 */ },
        //   },
        // });
        ```
    - **单个查询配置 (Per-Query Configuration)**：
        - 在调用 `useQuery` Hook 时，其接收的配置对象（第二个参数，如果第一个参数是`queryKey`的话，或者直接是第一个参数对象）中可以直接指定或覆盖全局默认设置。单个查询的配置优先级高于全局配置。
          TypeScript
        ```
        // useQuery({
        //   queryKey: ['myData'],
        //   queryFn: fetchData,
        //   staleTime: 60000, // 此查询的staleTime覆盖全局设置
        // });
        ```
2. **核心可配置项及其默认值与作用**：
    - **`retry: number | boolean | ((failureCount: number, error: TError) => boolean)`**:
        - 定义当查询失败时自动重试的次数或逻辑。
        - 默认值：`3` (即最多重试 3 次)。
        - 可以设为 `false` 来完全禁用自动重试，或设为具体的数字。也可以是一个函数来自定义重试逻辑。
    - **`cacheTime: number`**:
        - 定义当一个查询变为“非活动” (inactive) 状态后，其数据在缓存中保留多长时间（单位：毫秒）才会被垃圾回收。
        - “非活动”状态：指当前没有任何组件实例正在使用（订阅）这个查询（即观察者数量为 0）。
        - 默认值：`5 * 60 * 1000` (5 分钟)。
        - 注意：`cacheTime` 与数据是否“过时”(`staleTime`)是两个独立的概念。即使数据已过时，只要查询仍活动或未超出`cacheTime`，它仍可能存在于缓存中。
    - **`staleTime: number`**:
        - 定义数据从成功获取后，在多长时间内被认为是“新鲜”(fresh)的（单位：毫秒）。
        - 在数据新鲜期内，React Query 通常不会因为组件重新挂载、窗口聚焦等事件而主动触发对该数据的网络重新获取，而是会直接从缓存中返回数据。
        - 一旦超过 `staleTime`，数据即变为“过时”(stale)。过时数据仍然可以从缓存中立即返回给 UI 以保证快速响应，但 React Query 会在后台（满足特定条件时）尝试重新获取最新数据。
        - 默认值：`0` (即数据在获取成功后立即变为过时状态)。这意味着默认情况下，每次组件挂载或窗口聚焦等都会尝试重新获取。
3. **自动重新获取 (Refetch) 数据的触发条件与相关配置**：
    - React Query 默认会在以下几种情况下，如果数据已过时 (`stale`)，则自动尝试重新获取：
        - **`refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")`**:
            - 当浏览器窗口从失焦状态重新获得焦点时，是否重新获取。
            - 默认值：`true`。
        - **`refetchOnReconnect: boolean | "always" | ((query: Query) => boolean | "always")`**:
            - 当网络连接从断开状态恢复正常时，是否重新获取。
            - 默认值：`true`。
        - **`refetchOnMount: boolean | "always" | ((query: Query) => boolean | "always")`**:
            - 当使用该查询的组件首次挂载时，或者因其依赖的 `queryKey` 变化而导致查询重新执行时，是否重新获取数据。
            - 默认值：`true`。
    - 这些行为都可以通过在全局或单个查询配置中将对应选项设置为 `false` 来禁用。
4. **数据返回与后台更新机制**：
    - 当一个查询的数据已过时 (`stale`) 但仍在缓存中 (`cacheTime` 未到期) 时，如果触发了重新获取（例如窗口聚焦）：
        1. React Query 会立即从缓存中返回这个过时的数据给组件，使得 UI 能够快速展现内容。
        2. 同时，它会在后台异步执行 `queryFn` 去获取最新的数据。
        3. 当后台请求成功返回新数据后，React Query 会用新数据更新缓存，并通知所有订阅了该查询的组件数据已更新。
        4. 组件接收到新数据后会重新渲染，展示最新的内容。
5. **讲师的配置偏好与建议**：
    - 认为大多数 React Query 的默认设置在很多场景下是合理的。
    - `staleTime` 是最常需要根据具体数据的特性（如更新频率）进行定制的配置项。对于不经常变化的数据，可以设置一个较长的 `staleTime` (e.g., 几分钟到几小时)，以减少不必要的网络请求。对于需要实时性较高的数据，则可能保持较短的 `staleTime` 或依赖其他重新获取机制。
    - 讲师在课程中选择移除之前在 `QueryClient` 中设置的全局 `defaultOptions`，改为在后续的自定义 Hook 中根据每个查询的具体需求来单独配置 `staleTime` 等选项。

**代码示例**

1. 全局配置 `QueryClient` (示例，在 `src/main.tsx`)

    TypeScript

    ```
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1, // 全局默认重试1次
          staleTime: 10 * 1000, // 全局默认10秒新鲜期
          refetchOnWindowFocus: false, // 全局禁用窗口聚焦时自动刷新
          // cacheTime: 10 * 60 * 1000, // 例如，全局设置10分钟缓存期
        },
      },
    });

    // ... (ReactDOM.render with QueryClientProvider)
    ```

2. 单个查询配置 (示例，在自定义 Hook 如 `src/hooks/useTodos.ts`)

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    // ... (fetchTodos function, Todo interface)

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 60 * 1000, // 此查询的新鲜期设置为1分钟
        refetchOnWindowFocus: true, // 覆盖全局设置，此查询在窗口聚焦时刷新
        // retry: 5, // 此查询的重试次数设为5次
      });
    };

    export default useTodos;
    ```

    - 讲师最终决定移除全局配置，并在具体 Hook 中按需设置 `staleTime`，例如：

    TypeScript

    ```
    // src/hooks/useTodos.ts (讲师后续课程的风格)
    // ...
    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 10 * 1000, // 例如，为todos设置10秒的staleTime
      });
    };
    // ...
    ```

---

## 15_10. React Query 练习：重构 PostList 数据获取

> 简述：这是一个实践练习环节，旨在巩固前面几节课所学习的关于使用 React Query 进行数据获取的知识。练习任务是将一个现有的、采用传统`useState`和`useEffect`方式从后端 API 获取帖子列表（PostList）的 React 组件，重构为使用 React Query 的最佳实践，即通过创建一个自定义查询 Hook (`usePosts`) 来封装数据获取逻辑，并在`PostList`组件中调用此 Hook 来管理数据、加载状态和错误处理。

**知识树**

1. **练习目标与上下文**：
    - **目标组件**：项目中的 `PostList.tsx` 组件，当前使用 `useState` 和 `useEffect` 实现数据获取。
    - **重构任务**：应用 React Query 的模式，将其数据获取逻辑提取到自定义 Hook `usePosts` 中，并更新 `PostList` 组件以使用此 Hook。
2. **重构步骤详解**：

    - **Step 1: 创建自定义 Hook `usePosts.ts` (在 `src/hooks` 目录)**

        1. **定义 `Post` 接口**：如果 `PostList.tsx` 中已存在 `Post` 接口定义，将其迁移到 `usePosts.ts` 文件顶部（或一个共享的 `entities.ts` 文件），并确保导出。

            TypeScript

            ```
            // src/hooks/usePosts.ts 或 src/entities.ts
            export interface Post {
              id: number;
              userId: number;
              title: string;
              body: string;
            }
            ```

        2. **定义数据获取函数 (`WorkspacePosts`)**：在 `usePosts.ts` 中创建一个异步函数，例如 `WorkspacePosts`，负责使用 Axios (或 Fetch API) 从 `/posts` API 端点获取帖子数据。此函数应返回一个解析为 `Post[]` 的 Promise。

            TypeScript

            ```
            // src/hooks/usePosts.ts
            // import axios from 'axios';
            // const fetchPosts = async (): Promise<Post[]> => {
            //   const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10'); // 示例URL
            //   return response.data;
            // };
            ```

            (字幕中是将 Axios 调用直接写在`queryFn`里)

        3. **实现 `usePosts` Hook**：
            - 在 `usePosts` 函数内部调用 `useQuery<Post[], Error>(...)`。
            - `queryKey`: 设置为 `['posts']`。
            - `queryFn`: 设置为 `WorkspacePosts` 函数引用 (或直接在此处定义匿名异步函数)。
            - **(可选) `staleTime`**: 根据帖子数据的更新频率，可以设置一个合适的 `staleTime`，例如 1 分钟 (`1 * 60 * 1000`)。
            - `usePosts` Hook 直接返回 `useQuery` 的结果。
        4. **导出 `usePosts` Hook**。

    - **Step 2: 修改 `PostList.tsx` 组件**

        1. **移除旧的状态和副作用逻辑**：删除原有的 `useState` 调用（用于管理 `posts` 数据、`error` 和 `isLoading` 状态）以及 `useEffect` Hook（用于触发数据获取）。
        2. **导入并调用 `usePosts` Hook**：

            TypeScript

            ```
            // import usePosts from '../hooks/usePosts';
            // const { data: posts, error, isLoading } = usePosts();
            ```

            注意使用解构赋值并可以重命名 `data` 为 `posts` 以保持模板代码的兼容性。

        3. **处理加载状态**：在 JSX 中，如果 `isLoading` 为 `true`，则渲染加载指示器 (e.g., `<p>Loading...</p>`)。
        4. **处理错误状态**：如果 `error` 对象存在，则渲染错误信息 (e.g., `<p>{error.message}</p>`)。注意，由于 `useQuery` 中已指定 `TError` 为 `Error`，所以可以安全访问 `error.message`。
        5. **渲染数据列表**：如果既不加载也不出错，则遍历 `posts` 数组 (记得使用可选链 `posts?.map(...)` 因为 `posts` 在加载完成前可能为 `undefined`) 来渲染每个帖子的信息。
        6. **清理导入**：移除不再需要的 `useState`, `useEffect`, `axios` (如果 `WorkspacePosts` 已移至 Hook) 以及 `Post` 接口（如果已移至 Hook 或`entities`文件）的导入语句。

3. **验证重构结果**：
    - 在应用的主组件 (`App.tsx`) 中，临时将之前显示的 `TodoList` 组件替换为 `PostList` 组件。
    - 启动开发服务器 (`npm run dev`)，在浏览器中打开应用，检查帖子列表是否按预期加载、显示，以及加载状态和错误状态是否能正确处理。
    - 可以使用 React Query DevTools 来观察 `['posts']` 查询的状态和缓存情况。

**代码示例**

1. 创建 `src/hooks/usePosts.ts`

    TypeScript

    ```
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    // 1. 定义Post接口 (或从entities.ts导入)
    export interface Post {
      id: number;
      userId: number;
      title: string;
      body: string;
    }

    // 2. 定义数据获取函数
    const fetchPosts = async (): Promise<Post[]> => {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10'); // 示例URL
      return response.data;
    };

    // 3. 定义并导出usePosts Hook
    const usePosts = () => {
      return useQuery<Post[], Error>({ // 指定数据和错误类型
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 设置1分钟staleTime (示例)
      });
    };

    export default usePosts;
    ```

2. 重构 `src/react-query/PostList.tsx` (假设原组件在此路径)

    TypeScript

    ```
    import React from 'react'; // 通常不再需要显式导入
    import usePosts from '../hooks/usePosts'; // 1. 导入自定义Hook

    const PostList = () => {
      // 2. 调用usePosts Hook，解构状态，并将data重命名为posts
      const { data: posts, error, isLoading } = usePosts();

      // 3. 处理加载状态
      if (isLoading) return <p>Loading...</p>;

      // 4. 处理错误状态
      if (error) return <p>An error occurred: {error.message}</p>;

      // 5. 渲染帖子列表
      return (
        <ul>
          {posts?.map(post => (
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

    - 该组件现在非常简洁，只关注 UI 渲染，数据获取逻辑已完全封装在 `usePosts` Hook 中。

---

---

## 16_11. React Query：参数化查询与层级式 Query Key

> 简述：本节核心内容是如何利用 React Query 实现参数化查询，即根据动态变化的参数（例如用户选择的特定用户 ID）来获取和展示相应的资源子集（例如该用户的所有帖子）。关键技术点在于设计层级式的、能够包含这些动态参数的`queryKey`。当`queryKey`中的参数发生变化时，React Query 会自动识别为一次新的查询，并重新执行数据获取逻辑。同时，本节也演示了如何在 API 请求中有效地传递这些参数。

**知识树**

1.  **参数化查询 (Parameterized Queries) 的需求与场景**：
    - 当需要根据用户的选择或应用状态（如筛选条件、路径参数等）来获取特定数据集时，例如：
        - 显示特定用户发布的帖子。
        - 获取某一分类下的商品列表。
        - 根据搜索关键词查找结果。
2.  **UI 实现用户选择 (以 `PostList` 组件为例)**：
    - 在组件中添加一个 UI 元素（如 HTML 的 `<select>` 下拉列表）允许用户选择参数值（如用户 ID）。
    - 使用 React 的 `useState` Hook 来追踪和管理当前选中的参数值 (e.g., `selectedUserId: number | undefined`)。
    - 当用户通过 UI 更改选择时，更新对应的状态变量。
3.  **将参数传递给自定义查询 Hook**：
    - 修改自定义查询 Hook (e.g., `usePosts`) 的函数签名，使其能够接收动态参数 (e.g., `userId: number | undefined`)。
4.  **设计层级式/动态的 `queryKey`**：
    - **核心原则**：如果一个查询的数据依赖于某个变量，那么这个变量**必须**被包含在 `queryKey` 中。
    - **结构**：`queryKey` 应该设计成能够清晰反映数据层级关系和查询依赖的数组。
        - 示例：获取特定用户 ID 的帖子，`queryKey` 可以是 `['users', userId, 'posts']`。
        - 示例：如果 `userId` 未定义或为 `null`（表示获取所有帖子），`queryKey` 可以是 `['posts']`。
    - **React Query 的行为**：每当 `queryKey` 数组中的任何一个元素的值发生变化时，React Query 就认为这是一个全新的、独立的查询实例，并会重新执行其 `queryFn` 来获取数据。这类似于 `useEffect` Hook 的依赖数组机制。
5.  **在 `queryFn` 中使用参数向后端 API 传递查询条件**：
    - 大多数后端 API 支持通过 URL 查询字符串参数 (Query String Parameters) 来进行数据筛选。例如，JSONPlaceholder API 允许通过 `/posts?userId=1` 来获取 `userId` 为 1 的所有帖子。
    - 在自定义查询 Hook 的 `queryFn` (或其调用的封装了 Axios/Fetch 的 API 客户端方法) 中，将接收到的参数（如 `userId`）作为请求配置的一部分（例如，Axios 的 `params` 对象）传递给后端。
        ```typescript
        // 在 queryFn 内部使用 Axios 发送请求
        // axios.get('/posts', { params: { userId: userId } }); // 如果 userId 存在
        ```
6.  **利用 React Query DevTools 观察参数化查询**：
    - 当用户在 UI 上选择不同的参数值（如切换用户 ID）时，可以在 DevTools 中观察到：
        - 针对每个不同的 `queryKey`（由于参数变化导致），都会创建一个新的查询条目。
        - 例如，可能会看到 `['posts']` (所有帖子), `['users', 1, 'posts']`, `['users', 2, 'posts']` 等多个缓存条目。
        - 可以观察到哪个查询当前是活动的 (有观察者/组件正在使用)，哪个是非活动的 (inactive)。非活动的查询数据在 `cacheTime` 过后会被垃圾回收。
7.  **`queryKey` 结构的优化 (针对可选参数)**：
    - 为了避免在 `queryKey` 中出现 `null` 或 `undefined` (例如，`['users', null, 'posts']` 这种形式可能不够清晰或优雅)，可以在构造 `queryKey` 时使用条件逻辑：
        ```typescript
        // 在自定义查询Hook内部
        // const queryKey = userId ? ['users', userId, 'posts'] : ['posts'];
        // useQuery({ queryKey, queryFn: ... });
        ```
        这样，当 `userId` 未提供时，`queryKey` 就是 `['posts']`，代表获取所有帖子。
8.  **利用缓存提升体验**：
    - 当用户切换回一个之前已经选择过的参数组合时（例如，再次选择用户 1），如果对应的查询数据仍在 React Query 的缓存中并且尚未超过 `staleTime`（或者即使已过时但仍在 `cacheTime` 内），React Query 可以非常快速地从缓存中提供数据，UI 会几乎瞬时更新，避免了不必要的加载指示器和网络延迟。

**代码示例**

1.  修改 `usePosts.ts` (自定义查询 Hook) 以接收 `userId` 并调整 `queryKey` 和 `queryFn`

    ```ts
    // src/hooks/usePosts.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';
    import { Post } from '../entities'; // 假设 Post 接口在 entities.ts

    // 1. Hook 接收 userId 作为可选参数
    const usePosts = (userId: number | undefined) => {
      // 2. 根据 userId 动态构造 queryKey
      const queryKey = userId ? ['users', userId, 'posts'] : ['posts'];

      // 3. queryFn 现在也需要考虑 userId
      const fetchPosts = async (): Promise<Post[]> => {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          // 4. 如果 userId 存在，则作为查询参数传递
          params: {
            userId: userId // API 端点可能是 /posts?userId=...
          }
        });
        return response.data;
      };

      return useQuery<Post[], Error>({
        queryKey: queryKey,
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 1 minute staleTime
      });
    };

    export default usePosts;
    ```

    - **注意**：上述 `params` 对象中，如果 `userId` 是 `undefined`，Axios 通常会忽略这个参数，这符合获取所有帖子的期望。如果 API 要求在 `userId` 未提供时不传递该参数，则可以条件性地构建 `params` 对象。

2.  修改 `PostList.tsx` (UI 组件) 以添加用户选择下拉框并使用参数化的 `usePosts`

    ```tsx
    // src/react-query/PostList.tsx (或组件所在路径)
    import React, { useState } from 'react'; // 1. 导入 useState
    import usePosts from '../hooks/usePosts'; // 导入参数化后的Hook

    const PostList = () => {
      // 2. 添加状态来追踪选中的 userId
      const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

      // 3. 将 selectedUserId 传递给 usePosts Hook
      const { data: posts, error, isLoading } = usePosts(selectedUserId);

      // (模拟用户列表，实际应用中也应从API获取)
      const users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ];

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>An error occurred: {error.message}</p>;

      return (
        <>
          {/* 4. 添加用户选择下拉框 */}
          <select
            className="form-select mb-3" // 假设使用Bootstrap样式
            onChange={(event) => setSelectedUserId(parseInt(event.target.value) || undefined)}
            value={selectedUserId || ''}
          >
            <option value="">All Users</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>

          <ul className="list-group">
            {posts?.map(post => (
              <li key={post.id} className="list-group-item">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      );
    };

    export default PostList;
    ```

---

## 17_12. React Query：实现分页查询

> 简述：本节介绍如何运用 React Query 来实现数据的分页加载功能。核心思路是在 UI 组件中管理当前的页码（`page`）状态，并将此页码连同每页期望的数据量（`pageSize`）封装到一个查询对象（`PostQuery`）中，然后将此查询对象传递给自定义的数据获取 Hook（`usePosts`）。自定义 Hook 会相应地调整其`queryKey`以包含分页信息，并在 API 请求中将分页参数（通常是 `_start` 和 `_limit`，或 `_page` 和 `_limit`）发送给后端。此外，本节还引入了 React Query 的`keepPreviousData`选项，这是一个重要的用户体验优化，可以在切换页面加载新数据时，暂时保留并显示上一页的数据，避免因加载状态切换导致的界面内容跳动。

**知识树**

1.  **分页查询 (Paginated Queries) 的目的与优势**：
    - **目的**：当需要展示大量数据记录时，一次性加载所有数据可能导致初始加载时间过长、消耗过多带宽和客户端资源。分页查询允许按需分批加载数据。
    - **优势**：提升应用的初始加载速度，改善用户体验，减少服务器和客户端的瞬时负载。
2.  **UI 组件中的状态管理 (`PostList.tsx`)**：
    - **`page: number`**：使用 `useState` Hook 来追踪和管理当前用户正在查看的页码，初始值通常为 `1`。
    - **`pageSize: number`**：定义每页显示的数据条目数量。这可以是一个组件内的常量，或者如果允许用户更改每页数量，则也可以是一个 `useState` 管理的状态。本节中设为常量。
3.  **引入查询对象模式 (`PostQuery`)**：
    - **目的**：将所有与特定查询相关的参数（如此处的 `page`, `pageSize`，以及未来可能有的其他筛选、排序条件）封装到一个单一的对象中，使自定义 Hook 的参数传递更简洁和可扩展。
    - **接口定义**：在自定义 Hook 文件 (`usePosts.ts`) 或共享的实体类型文件 (`entities.ts`) 中定义 `PostQuery` 接口，例如：
        ```typescript
        // interface PostQuery {
        //   page: number;
        //   pageSize: number;
        //   // userId?: number; // 如果还保留用户筛选
        // }
        ```
    - **在组件中构造并传递**：`PostList` 组件根据当前的 `page` 和 `pageSize` 状态（或常量）构造一个 `PostQuery` 对象，并将其作为参数传递给 `usePosts` Hook。
4.  **自定义查询 Hook (`usePosts.ts`) 的调整**：
    - **参数变更**：修改 `usePosts` Hook 的函数签名，使其接收一个 `query: PostQuery` 对象作为参数，而不是多个独立的参数。
    - **`queryKey` 包含查询对象**：将整个 `query` 对象（或其能唯一标识查询状态的关键部分）作为 `queryKey` 数组中的一个元素。例如：`queryKey: ['posts', query]`。
        - 当 `query` 对象中的任何属性（如 `page`）发生变化时，由于对象引用或内容的改变，`queryKey` 会随之变化，从而自动触发 React Query 重新执行查询。
    - **`queryFn` 中处理分页参数**：
        - 在 `queryFn`（或其调用的 API 客户端方法）内部，从传入的 `query: PostQuery` 对象中获取 `page` 和 `pageSize`。
        - 根据后端 API 对分页参数的要求，计算并构造相应的查询字符串参数。例如，JSONPlaceholder API 支持 `_start` (起始记录的索引，从 0 开始) 和 `_limit` (每页数量)：
            - `_start = (query.page - 1) * query.pageSize`
            - `_limit = query.pageSize`
        - 或者，某些 API 可能使用 `_page` 和 `_limit`：
            - `_page = query.page`
            - `_limit = query.pageSize`
        - 将这些计算好的分页参数添加到 Axios 请求的 `params` 对象中。
5.  **UI 实现分页导航 (`PostList.tsx`)**：
    - 添加 "Previous" 和 "Next" 按钮。
    - **"Previous" 按钮**：
        - `disabled` 状态：当 `page === 1` (即当前是第一页) 时，禁用此按钮。
        - `onClick` 事件：调用 `setPage(page - 1)` 来导航到上一页。
    - **"Next" 按钮**：
        - `onClick` 事件：调用 `setPage(page + 1)` 来导航到下一页。
        - **最后一页判断的挑战 (针对 JSONPlaceholder)**：JSONPlaceholder API 在其响应中不直接提供总记录数或总页数。因此，简单地判断是否已到达最后一页以禁用 "Next" 按钮比较困难。本节暂时不处理此禁用逻辑。在实际应用中，后端 API 通常会返回这些信息，或者可以通过判断当前页返回的数据量是否小于 `pageSize` 来间接推断。
    - **按钮样式与间距**：可以使用 CSS 类（如 Bootstrap 的 `btn`, `btn-primary`, `my-3` (垂直外边距), `ms-1` (左侧起始外边距)）来美化按钮并调整它们之间的间距。
6.  **用户体验优化 - `keepPreviousData: true`**：
    - **问题**：当用户点击 "Next" 或 "Previous" 按钮切换页面时，如果新页面的数据需要一些时间来加载，UI 可能会短暂地显示加载状态（例如，列表变空并显示 "Loading..."），这会导致屏幕内容发生跳动，影响流畅性。
    - **解决方案**：在调用 `useQuery` (或在 `usePosts` Hook 内部调用 `useQuery` 的地方) 时，在其配置对象中设置 `keepPreviousData: true`。
    - **效果**：当 `keepPreviousData` 为 `true` 时，在因 `queryKey` 变化（如 `page` 改变）而重新获取数据期间，React Query 会继续在 `data` 属性中保留并显示上一页（即前一个 `queryKey` 对应的）数据，直到新数据成功获取。一旦新数据可用，`data` 属性会平滑地更新为新页面的数据。这避免了在数据加载过程中出现内容消失或跳动的情况，提供了更流畅的分页浏览体验。
    - 同时，`isPreviousData: boolean` 属性会变为 `true`，指示当前显示的是旧数据。

**代码示例**

1.  定义 `PostQuery` 接口并修改 `usePosts.ts`

    ```ts
    // src/hooks/usePosts.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';
    import { Post } from '../entities';

    // 1. 定义 PostQuery 接口
    export interface PostQuery {
      page: number;
      pageSize: number;
      // userId?: number; // 如果仍然需要用户筛选
    }

    // 2. usePosts Hook 接收 query 对象作为参数
    const usePosts = (query: PostQuery) => {
      const fetchPosts = async (): Promise<Post[]> => {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            // 3. 根据 query 对象计算并传递分页参数
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
            // userId: query.userId, // 如果有用户筛选
          }
        });
        return response.data;
      };

      return useQuery<Post[], Error>({
        // 4. 将 query 对象作为 queryKey 的一部分
        queryKey: ['posts', query], // 当query的任何属性变化，此key会变化
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 1 minute
        keepPreviousData: true, // 5. 启用 keepPreviousData
      });
    };

    export default usePosts;
    ```

2.  修改 `PostList.tsx` 以实现分页 UI 和逻辑

    ```tsx
    // src/react-query/PostList.tsx
    import React, { useState } from 'react';
    import usePosts, { PostQuery } from '../hooks/usePosts'; // 1. 导入 PostQuery

    const PAGE_SIZE = 10; // 2. 定义每页大小常量

    const PostList = () => {
      const [page, setPage] = useState(1); // 3. 管理当前页码状态

      // 4. 构建 query 对象并传递给 usePosts
      const { data: posts, error, isLoading, isFetching } = usePosts({ page, pageSize: PAGE_SIZE });
      // isFetching 可以用来显示更细致的加载状态，即使在显示旧数据时

      // (错误处理和初始加载状态的UI渲染逻辑保持不变)
      if (isLoading && !posts) return <p>Loading initial posts...</p>; // 初始加载
      if (error) return <p>An error occurred: {error.message}</p>;

      return (
        <>
          <ul className="list-group mb-3"> {/* mb-3 for margin */}
            {posts?.map(post => (
              <li key={post.id} className="list-group-item">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>

          {/* 5. 分页导航按钮 */}
          <div className="my-3"> {/* Vertical margin for button group */}
            <button
              className="btn btn-primary"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <button
              className="btn btn-primary ms-1" // margin-start (left) of 1
              onClick={() => setPage(page + 1)}
              // disabled={!hasNextPage} // JSONPlaceholder无法简单判断最后一页
            >
              Next
            </button>
            {isFetching && <span className="ms-2">Fetching next page...</span>} {/* 更细致的加载提示 */}
          </div>
          <p>Current Page: {page}</p>
        </>
      );
    };

    export default PostList;
    ```

---

## 18_13. React Query：实现无限滚动查询 (`useInfiniteQuery`)

> 简述：本节介绍如何运用 React Query 的`useInfiniteQuery` Hook 来实现“无限滚动”或“加载更多”的数据加载模式。与传统分页查询（每次只显示一页数据）不同，无限滚动会累积显示所有已加载的数据页。`useInfiniteQuery`的核心配置在于提供一个能够根据上一页数据计算下一页请求参数的`getNextPageParam`函数，以及一个能够接收此页面参数来获取数据的`queryFn`。UI 组件通过调用`fetchNextPage`方法来触发加载更多数据，并可以利用`hasNextPage`和`isFetchingNextPage`等状态来控制“加载更多”按钮的可用性和显示加载指示。

**知识树**

1.  **无限滚动 (Infinite Scrolling) / 加载更多 (Load More) 的概念**：
    - **目的**：当用户滚动到列表底部或点击“加载更多”按钮时，动态地在现有数据列表的末尾追加加载新的数据项，而不是替换整个列表。
    - **用户体验**：提供一种连续浏览大量数据的方式，避免了显式的分页导航。
2.  **`useInfiniteQuery` Hook**：
    - **导入**：`import { useInfiniteQuery } from '@tanstack/react-query';`
    - **替换**：用于替代之前分页查询中使用的 `useQuery` Hook。
    - **核心差异**：专门设计用于管理可以无限加载的数据集，它会自动处理页面参数的传递和数据的累积。
3.  **`useInfiniteQuery` 的关键配置选项**：
    - **`queryKey`**: 与 `useQuery` 类似，用于唯一标识查询并进行缓存。通常也需要包含基础查询对象（不含页码，因为页码由 Hook 管理）。
        ```typescript
        // queryKey: ['posts', baseQueryObject], // baseQueryObject 可能包含pageSize, userId等
        ```
    - **`queryFn: ({ pageParam = 1 }) => Promise<TData[]>`**:
        - **参数变化**: `queryFn` 现在会接收一个特殊的对象作为参数，该对象包含一个 `pageParam` 属性。`pageParam` 的初始值（第一页的参数）通常通过 `initialPageParam` 选项设定，或者 `queryFn` 内部可以为其设置一个默认值（如 `pageParam = 1`）。
        - **职责**: `queryFn` 必须使用这个 `pageParam` 来构建 API 请求，以获取对应“页”的数据。例如，如果 `pageParam` 是页码，则可以据此计算 `_start`。
    - **`getNextPageParam: (lastPage: TData[], allPages: TData[][], lastPageParam: TPageParam, allPageParams: TPageParam[]) => TPageParam | undefined | null`**:
        - **必需配置项**。这是一个函数，React Query 会在需要加载下一页数据时调用它，以确定用于下一次 `queryFn` 调用的 `pageParam` 值。
        - **参数**：
            - `lastPage: TData[]`：最近一次成功获取的数据页（即 `queryFn` 返回的结果）。
            - `allPages: TData[][]`：一个二维数组，包含了所有已成功获取的数据页的集合。
            - `lastPageParam: TPageParam`: 获取 `lastPage` 时使用的 `pageParam`。
            - `allPageParams: TPageParam[]`: 获取所有已加载页面所使用的 `pageParam` 的数组。
        - **返回值**：
            - 如果还有下一页数据可供加载，则返回用于获取下一页的 `pageParam` 值（例如，下一个页码 `allPages.length + 1`）。
            - 如果已到达数据列表的末尾，没有更多数据可加载，则必须返回 `undefined` 或 `null`。这将使 `hasNextPage` 状态变为 `false`。
        - **实现示例 (基于 JSONPlaceholder，假设当某页返回空数组时表示无更多数据)**：
            ```typescript
            // getNextPageParam: (lastPage, allPages) => {
            //   return lastPage.length > 0 ? allPages.length + 1 : undefined;
            // }
            ```
    - **`initialPageParam: TPageParam`**: (v5+)
        - 指定第一次调用 `queryFn` 时 `pageParam` 的初始值。
4.  **移除组件内部分页状态管理**：
    - 使用 `useInfiniteQuery` 后，组件自身不再需要通过 `useState` 来管理当前页码 (`page`)，因为分页的逻辑和状态已由 `useInfiniteQuery` Hook 内部处理。
5.  **`useInfiniteQuery` 返回值 (InfiniteQueryObserverResult)**：
    - **`data: InfiniteData<TData> | undefined`**:
        - 数据结构与 `useQuery` 不同。`data` 现在是一个特殊的对象，其类型为 `InfiniteData<TData>`。
        - `data.pages: TData[][]`：一个二维数组，其中每个内部数组代表已加载的一“页”数据。UI 渲染时需要遍历这个二维数组。
        - `data.pageParams: any[]`：一个数组，包含了用于获取 `data.pages` 中每一页数据时所使用的 `pageParam`。
    - **`fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult>`**:
        - 调用此函数来触发获取下一页数据的操作。React Query 会先调用 `getNextPageParam` 来确定下一页的参数，然后用此参数调用 `queryFn`。
    - **`hasNextPage: boolean | undefined`**:
        - 一个布尔值，指示是否还有下一页数据可供加载。其值由 `getNextPageParam` 函数的返回值决定（返回 `undefined` 或 `null` 时为 `false`）。
    - **`isFetchingNextPage: boolean`**:
        - 一个布尔值，表示当前是否正在获取下一页的数据。可用于在“加载更多”按钮上显示加载状态或禁用按钮。
    - （还包括 `fetchPreviousPage`, `hasPreviousPage`, `isFetchingPreviousPage` 等，用于支持双向无限加载，但本节主要关注向后加载更多）。
6.  **UI 实现调整 (`PostList.tsx`)**：
    - **移除分页导航按钮**：删除原有的 "Previous" 和 "Next" 按钮。
    - **添加 "Load More" 按钮**：
        - **文本**：可以根据 `isFetchingNextPage` 状态动态显示 "Load More" 或 "Loading..."。
        - **`onClick` 事件**：调用从 `useInfiniteQuery` 返回的 `fetchNextPage()` 方法。
        - **`disabled` 状态**：当 `!hasNextPage` (没有下一页) 或 `isFetchingNextPage` (正在加载下一页) 时，禁用此按钮。
    - **渲染累积数据**：
        - 需要遍历 `data.pages` (二维数组)。通常使用嵌套的 `map()` 方法：
            - 外层 `map` 遍历 `data.pages`，得到每一页的数据数组 (`pageDataArray`)。
            - 内层 `map` 遍历 `pageDataArray`，得到单个数据项 (`post`) 并渲染。
        - **`key` Prop**: 在外层 `map` 中，为每个代表“页”的容器（例如，`React.Fragment`）提供一个唯一的 `key`。由于 `pageDataArray` 本身是对象，不能直接作 key，可以使用 `map` 的第二个参数 `index` 作为 key，或者如果 `data.pageParams` 与 `data.pages` 对应，可以使用 `data.pageParams[index]`。
            ```tsx
            // {data?.pages.map((pageDataArray, pageIndex) => (
            //   <React.Fragment key={pageIndex}>
            //     {pageDataArray.map(post => (
            //       <li key={post.id}>{/* ...render post... */}</li>
            //     ))}
            //   </React.Fragment>
            // ))}
            ```
7.  **与 `keepPreviousData` 的关系**：
    - `useInfiniteQuery` 本身就是累积数据的，所以 `keepPreviousData` 的概念在这里不完全适用，因为数据总是被添加到现有数据之后。不过，在某些特定场景或版本中，其行为细节可能需要查阅官方文档。通常，`useInfiniteQuery` 的设计目标就是平滑地追加数据。

**代码示例**

1.  修改 `usePosts.ts` 以使用 `useInfiniteQuery`

    ```ts
    // src/hooks/usePosts.ts
    import { useInfiniteQuery } from '@tanstack/react-query'; // 1. 导入 useInfiniteQuery
    import axios from 'axios';
    import { Post, PostQuery } from '../entities'; // PostQuery可能只含pageSize和userId

    // PostQuery 现在可能只包含非分页的筛选条件和pageSize
    // interface PostQuery {
    //   pageSize: number;
    //   userId?: number;
    // }

    // 2. queryFn 接收 pageParam
    const fetchPosts = async ({ pageParam = 1, query }: { pageParam?: number, query: PostQuery }): Promise<Post[]> => {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam! - 1) * query.pageSize, // 使用 pageParam 计算 _start
          _limit: query.pageSize,
          // userId: query.userId,
        }
      });
      return response.data;
    };

    const useInfinitePosts = (query: PostQuery) => {
      return useInfiniteQuery<Post[], Error, Post[], Post[], number>({ // 显式指定泛型
        queryKey: ['posts', query], // queryKey 不再包含动态的page
        // 3. queryFn 现在是一个接收包含 pageParam 的对象的函数
        queryFn: ({ pageParam }) => fetchPosts({ pageParam, query }),
        // 4. 实现 getNextPageParam
        getNextPageParam: (lastPage, allPages) => {
          // 如果 lastPage 有数据 (长度大于0)，则下一页是 allPages.length + 1
          // 否则 (lastPage为空数组，表示没有更多数据了)，返回 undefined
          return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1, // 5. 初始页面参数 (v5+)
        staleTime: 1 * 60 * 1000,
      });
    };

    export default useInfinitePosts; // 重命名Hook以反映其用途
    ```

    - **泛型参数 for `useInfiniteQuery` (v4/v5)**: `useInfiniteQuery<TData, TError, TQueryFnData, TQueryKey, TPageParam>`
        - `TData`: `queryFn`返回的单页数据类型 (e.g., `Post[]`)。
        - `TError`: 错误类型 (e.g., `Error`)。
        - (v5+) `TQueryFnData`: (可以省略，会从 `TData` 推断) `queryFn`返回的 Promise 解析后的类型。
        - (v5+) `TQueryKey`: `queryKey`的类型。
        - `TPageParam`: 传递给`queryFn`和由`getNextPageParam`返回的页面参数类型 (e.g., `number` for page number)。

2.  修改 `PostList.tsx` 以使用 `useInfinitePosts`

    ```tsx
    // src/react-query/PostList.tsx
    import React from 'react'; // 通常不再需要
    import useInfinitePosts from '../hooks/usePosts'; // 1. 导入新的Hook
    import { PostQuery } from '../hooks/usePosts'; // 假设PostQuery也在此

    const PAGE_SIZE = 10;

    const PostListInfinite = () => {
      const query: PostQuery = { pageSize: PAGE_SIZE /*, userId: someUserId */ }; // 2. 构建基础查询对象
      const {
        data,
        error,
        fetchNextPage,    // 3. 获取 fetchNextPage
        hasNextPage,      // 4. 获取 hasNextPage
        isFetchingNextPage, // 5. 获取 isFetchingNextPage
        isLoading,        // 初始加载状态
      } = useInfinitePosts(query);

      if (isLoading) return <p>Loading initial posts...</p>;
      if (error) return <p>An error occurred: {error.message}</p>;

      return (
        <>
          <ul className="list-group mb-3">
            {/* 6. 遍历 data.pages (二维数组) */}
            {data?.pages.map((pageDataArray, pageIndex) => (
              <React.Fragment key={pageIndex}> {/* 为每“页”的数据提供key */}
                {pageDataArray.map(post => (
                  <li key={post.id} className="list-group-item">
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>

          {/* 7. “Load More” 按钮 */}
          {hasNextPage && ( // 仅当有下一页时显示按钮
            <button
              className="btn btn-primary my-3"
              disabled={isFetchingNextPage} // 正在加载下一页时禁用
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </button>
          )}
        </>
      );
    };

    export default PostListInfinite;
    ```

---

## 19_14. React Query 进阶：数据变更 (Mutations) 概览

> 简述：本节标志着 React Query 学习从主要关注数据“读取”操作（Queries）过渡到数据“写入”或“修改”操作（Mutations）。内容预告了接下来将深入探讨的主题，包括如何使用 React Query 来执行创建（Create）、更新（Update）和删除（Delete）等改变服务器状态的动作，如何有效地处理这些变更操作过程中可能发生的错误，如何通过实现乐观更新（Optimistic Updates）来显著提升用户交互的即时反馈和流畅性，以及如何将这些变更逻辑封装到自定义的 Mutation Hooks 中，并构建可复用的服务层来统一管理应用的查询和变更 API 交互。

**知识树**

1.  **从数据查询 (Queries) 到数据变更 (Mutations)**：
    - **Queries (第一部分核心)**：主要负责从服务器或其他数据源读取 (Read) 数据，并进行缓存、同步和状态管理。代表了对服务器状态的“只读”视图。
    - **Mutations (第二部分核心)**：专注于处理那些会改变服务器端数据的操作，即写操作，包括：
        - **C**reate (创建新数据)
        - **U**pdate (修改现有数据)
        - **D**elete (删除数据)
2.  **即将深入探讨的核心主题概览**：
    - **执行基本数据变更 (Performing Basic Mutations)**：
        - 学习如何使用 React Query 提供的机制（主要是 `useMutation` Hook）来发起 POST, PUT, PATCH, DELETE 等类型的 API 请求，以实现数据的增删改。
    - **处理变更过程中的错误 (Handling Mutation Errors)**：
        - 掌握当数据变更操作失败时（例如，服务器返回错误，或网络问题），如何在 React Query 中捕获这些错误，并向用户提供适当的反馈或执行回滚逻辑。
    - **实现乐观更新 (Implementing Optimistic Updates)**：
        - 一种高级用户体验优化技术。其核心思想是：当用户发起一个变更操作时，不等待服务器确认，立即在客户端 UI 上模拟出操作成功后的状态。如果服务器最终确认成功，则一切顺利；如果服务器返回失败，则将 UI 回滚到操作前的状态，并通知用户。这使得应用感觉响应非常迅速。
    - **创建自定义变更 Hook (Creating Custom Mutation Hooks)**：
        - 类似于为查询创建自定义 Hook (如 `useTodos`, `usePosts`)，也将为常见的变更操作（如 `useAddTodo`, `useUpdatePost`）创建自定义 Hook。
        - 目的是封装变更逻辑（API 调用、成功/失败回调、乐观更新配置等），使其与 UI 组件分离，提高代码的模块化和可复用性。
    - **构建可复用的服务层 (Building Reusable Services for Querying and Mutating Data)**：
        - 可能会进一步抽象 API 交互，创建一个服务层（例如，使用类或一组函数），统一封装所有与特定资源（如 todos, posts）相关的 HTTP 请求（包括查询和变更）。自定义 Hooks 则可以调用这些服务。
3.  **学习目标与意义**：
    - 全面掌握使用 React Query 进行服务端数据“写”操作的各种技术和最佳实践。
    - 能够构建出数据交互更健壮、用户体验更流畅、代码结构更清晰的 React 应用。

**代码示例**

_本节为后续内容的概览和引言，不包含具体的 React Query Mutation 代码实现。_

---

## 20_15. React Query 实践：使用`useMutation`执行数据创建

> 简述：本节详细介绍了如何运用 React Query 的核心 Hook——`useMutation`——来执行数据的创建操作，具体通过一个向服务器添加新待办事项（Todo）的示例进行演示。关键在于为`useMutation`提供一个核心的`mutationFn`，这个异步函数负责执行实际的 API POST 请求。`useMutation` Hook 会返回一个包含`mutate`异步方法（用于手动触发数据变更）以及多个状态属性（如`isLoading`/`isPending`, `error`, `data`）的对象。此外，本节还探讨了在数据变更成功后（通过`onSuccess`回调）更新用户界面（主要是本地缓存）的两种主要策略：一是使相关查询的缓存失效（Invalidating Queries），二是在`onSuccess`回调中直接手动更新查询缓存（Updating Query Cache Directly）。

**知识树**

1.  **UI 准备 (以 `TodoForm.tsx` 组件为例)**：
    - 通常包含一个 HTML `<form>` 元素，内有文本输入框 (`<input>`) 和提交按钮 (`<button>`)。
    - 使用 React 的 `useRef` Hook 来获取输入框中用户输入的值，这对于简单表单是一种便捷的方式。
2.  **`useMutation` Hook 简介与核心配置**：
    - **导入**：`import { useMutation, useQueryClient } from '@tanstack/react-query';` (通常也会用到 `useQueryClient` 来操作缓存)。
    - **核心作用**：用于执行任何会改变服务器端数据的异步操作（如 POST, PUT, PATCH, DELETE 请求）。
    - **配置对象参数**：传递给 `useMutation` 的是一个配置对象，其中最重要的属性是：
        - **`mutationFn: (variables: TVariables) => Promise<TData>`**:
            - **必需属性**。一个返回 Promise 的异步函数，负责执行实际的数据变更操作（例如，向 API 发送 POST 请求）。
            - `TVariables`：代表调用 `mutate` 方法时传递给 `mutationFn` 的参数类型（例如，一个不包含 ID 的新 Todo 对象 `NewTodoDto`）。
            - `TData`：代表 `mutationFn` 成功执行后，其返回的 Promise 所解析的数据类型（例如，服务器在创建成功后返回的、包含了新生成 ID 的完整 Todo 对象 `Todo`）。
            - 示例实现 (使用 Axios)：
                ```typescript
                // const addTodoToServer = async (newTodo: NewTodoDto): Promise<Todo> => {
                //   const response = await axios.post<Todo>('/todos', newTodo);
                //   return response.data; // mutationFn 应返回处理后的数据
                // };
                // // 在useMutation配置中：
                // // mutationFn: addTodoToServer,
                ```
3.  **`useMutation` Hook 的返回值 (Mutation Object)**：
    - `useMutation` 返回一个对象，包含了用于触发和追踪变更操作状态的属性和方法：
        - **`mutate: (variables: TVariables, options?: MutateOptions<TData, TError, TVariables, TContext>) => void`** (或返回 Promise 的 `mutateAsync`):
            - 这是用于**手动触发** `mutationFn` 执行的方法。
            - `variables`：传递给 `mutationFn` 的参数（例如，要创建的新 Todo 对象）。
            - `options`：(可选) 可以在单次 `mutate` 调用时覆盖 `useMutation` Hook 级别配置的回调函数 (如 `onSuccess`, `onError`) 或其他行为。
        - `data: TData | undefined`：如果 `mutationFn` 成功，此属性持有其返回的数据。
        - `error: TError | null`：如果 `mutationFn` 失败，此属性持有错误对象。
        - `isLoading: boolean` (在 v4 及更早版本) 或 `isPending: boolean` (在 v5+版本)：布尔值，指示变更操作当前是否正在进行中。
        - （还包括 `isSuccess`, `isError`, `status`, `reset` 等更多状态和方法）。
    - 通常将返回的变更对象赋值给一个变量，如 `const addTodoMutation = useMutation(...);`，然后通过 `addTodoMutation.mutate(...)` 来调用。
4.  **触发数据变更**：
    - 在 `TodoForm.tsx` 的表单 `onSubmit` 事件处理器中：
        1.  阻止表单的默认提交行为 (`event.preventDefault()`)。
        2.  从输入框的 `ref` (例如 `inputRef.current?.value`) 获取用户输入的标题。
        3.  构造一个符合 `TVariables` 类型的数据对象 (例如，一个 `NewTodoDto` 对象，包含 `title`，以及固定的 `userId` 和 `completed: false`)。
        4.  调用 `addTodoMutation.mutate(newTodoDataObject)` 来发起创建请求。
5.  **处理变更成功 (`onSuccess` 回调)**：
    - **目的**：当 `mutationFn` 成功执行（即 Promise 被成功解析）后，需要更新 UI 以反映数据的变化（例如，将新添加的 Todo 项显示在列表中）。
    - **配置**：在传递给 `useMutation` 的配置对象中，可以提供一个 `onSuccess` 回调函数：
        - `onSuccess: (data: TData, variables: TVariables, context?: TContext) => void | Promise<void>`
        - **参数**：
            - `data: TData`：`mutationFn` 成功解析后返回的数据（例如，服务器返回的、包含 ID 的新 Todo 对象）。通常称之为 `savedTodo`。
            - `variables: TVariables`：最初传递给 `mutate` 方法的输入数据（例如，不含 ID 的 `newTodo` 对象）。
            - `context?: TContext`：(主要用于乐观更新) 从 `onMutate` 回调中返回的上下文对象。
    - **更新 UI/缓存的策略**：
        - **策略 1: 缓存失效 (Invalidating Queries)**：
            1.  使用 `useQueryClient()` Hook 获取 `queryClient` 实例。
            2.  在 `onSuccess` 回调中，调用 `queryClient.invalidateQueries({ queryKey: ['todos'] })` (或其他相关的查询键)。
            3.  **效果**：这将标记所有与 `['todos']` 键匹配的活动查询为“过时”(stale)。React Query 随后会自动重新获取这些查询的数据，从而使 UI（如待办事项列表）更新以包含新添加的项。
            4.  **JSONPlaceholder 的局限性**：由于 JSONPlaceholder 是一个伪 API，它实际上并不会在服务器上保存新创建的数据。因此，即使缓存失效并重新获取，新添加的项也不会出现在返回的列表中。讲师提到这一点是为了说明原理。
        - **策略 2: 直接手动更新查询缓存 (Updating Query Cache Directly)**：
            1.  同样需要 `queryClient` 实例。
            2.  在 `onSuccess` 回调中，调用 `queryClient.setQueryData<Todo[]>(queryKey, updaterFn | newData)`。
                - `queryKey`: 要更新的缓存条目的键 (e.g., `['todos']`)。
                - `updaterFn`: 一个函数 `(oldData: Todo[] | undefined) => Todo[]`，它接收当前缓存中的旧数据（可能为 `undefined`），并必须返回更新后的新数据数组。
                - **实现**：通常是将从服务器返回的 `savedTodo` (包含 ID) 添加到 `oldTodos` 数组的开头（或末尾），并返回这个新的数组。
                    ```typescript
                    // queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
                    //   [savedTodoFromServer, ...oldTodos]
                    // );
                    ```
                    注意处理 `oldTodos` 可能为 `undefined` 的情况，可以给其一个默认值空数组 `[]`。
            3.  讲师在课程中演示了这种直接更新缓存的方法，因为它能立即反映变化，尤其是在使用伪 API 时。
6.  **TypeScript 泛型参数的应用**：
    - 为了获得最佳的类型安全和编辑器智能提示，应为 `useMutation` 提供明确的泛型参数：
        - `useMutation<TData, TError, TVariables, TContext>(mutationConfig)`
        - `TData`: `mutationFn` 成功时返回的数据类型 (e.g., `Todo`)。
        - `TError`: `mutationFn` 失败时抛出的错误类型 (e.g., `Error`)。
        - `TVariables`: 调用 `mutate` 时传递给 `mutationFn` 的参数类型 (e.g., `NewTodoDto` 或 `Todo` 的部分类型)。
        - `TContext`: (用于乐观更新) `onMutate` 返回的上下文对象类型。

**代码示例**

1.  创建 `TodoForm.tsx` 并使用 `useMutation`

    ```tsx
    // src/react-query/TodoForm.tsx
    import React, { useRef, FormEvent } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    import { Todo } from '../hooks/useTodos'; // 假设Todo接口在useTodos.ts中并已导出

    // 可以定义一个专门用于创建Todo的DTO (Data Transfer Object)
    // interface NewTodoDto { title: string; userId: number; completed: boolean; }

    const TodoForm = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient(); // 1. 获取 QueryClient 实例

      // 2. 定义 mutationFn
      const addTodoToServer = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
        // Omit<Todo, 'id'> 表示 newTodo 对象除了id外拥有Todo的所有属性
        const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
        return response.data;
      };

      // 3. 使用 useMutation Hook
      const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>({
        mutationFn: addTodoToServer,
        onSuccess: (savedTodo, newTodoClient) => { // 4. onSuccess 回调
          console.log('Successfully added:', savedTodo);

          // 策略1: 缓存失效 (对JSONPlaceholder效果不明显)
          // queryClient.invalidateQueries({ queryKey: ['todos'] });

          // 策略2: 直接更新缓存
          queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
            [savedTodo, ...oldTodos] // 将新保存的todo添加到列表开头
          );

          // (后续课程会在此处添加清空输入框等UI副作用)
        },
        // onError: (error) => { /* ...处理错误... */ } // (将在下一节添加)
      });

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const title = inputRef.current?.value;
        if (title) {
          const newTodoData: Omit<Todo, 'id'> = {
            title,
            userId: 1, // 示例userId
            completed: false,
          };
          addTodoMutation.mutate(newTodoData); // 5. 触发 mutation
          // inputRef.current.value = ''; // (清空输入框操作最好在onSuccess中进行)
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-3">
          {/* (后续课程会添加错误和加载状态显示) */}
          <div className="input-group">
            <input ref={inputRef} type="text" className="form-control" placeholder="Add new todo..." />
            <button className="btn btn-primary" type="submit" disabled={addTodoMutation.isPending}>
              {addTodoMutation.isPending ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      );
    };

    export default TodoForm;
    ```

2.  在 `App.tsx` 中集成 `TodoForm` 和 `TodoList`

    ```tsx
    // In src/App.tsx
    import React from 'react';
    import TodoForm from './react-query/TodoForm'; // 假设路径
    import TodoList from './react-query/TodoList';   // 假设路径

    function App() {
      return (
        <div className="container my-3"> {/* 使用Bootstrap容器和边距 */}
          <TodoForm />
          <hr /> {/* 分隔线 */}
          <TodoList />
        </div>
      );
    }
    export default App;
    ```

---

## 21_16. React Query 变更错误处理：类型化与 UI 反馈

> 简述：本节主要讲解在使用 React Query 的`useMutation` Hook 执行数据变更操作（如创建、更新、删除）时，如何有效地捕获和处理可能发生的错误。与查询（Queries）类似，`useMutation`返回的变更对象中也包含一个`error`属性，用于存储操作失败时产生的错误信息。通过为`useMutation` Hook 提供明确的泛型类型参数（特别是第二个参数`TError`，用于指定错误对象的类型），可以在 TypeScript 环境中更安全地访问错误对象的属性（例如`error.message`），并在用户界面上以适当的方式（如警告框）将错误信息反馈给用户。

**知识树**

1.  **`useMutation` 返回对象中的 `error` 属性**：
    - 当 `useMutation` 配置的 `mutationFn` 在执行过程中抛出错误，或者其返回的 Promise 被拒绝 (rejected) 时，React Query 会将这个错误对象赋值给变更结果对象的 `error` 属性。
    - 如果变更操作成功或尚未开始/正在进行中，`error` 属性的值通常为 `null`。
2.  **错误对象的默认类型 (`unknown`) 与类型化的必要性**：
    - 与 `useQuery` 类似，`useMutation` 返回的 `error` 属性的默认 TypeScript 类型是 `unknown`。这是因为 React Query 无法预知在 `mutationFn` 中使用的具体 API 调用方式会产生何种类型的错误。
    - **类型化的作用**：为了能够在代码中安全地、有类型提示地访问错误对象的具体属性（例如，标准的 `message` 属性，或者特定 HTTP 库如 Axios 可能提供的额外错误信息），必须将 `error` 的类型从 `unknown` 明确化。
    - **通过泛型参数指定错误类型**：`useMutation` Hook 接受多个泛型参数，其中第二个参数 `TError` 就是用来指定错误对象的类型。
        ```typescript
        // useMutation<TData, TError, TVariables, TContext>(mutationConfig)
        // 例如，如果期望错误是标准的JavaScript Error对象：
        // const addTodoMutation = useMutation<Todo, Error, NewTodoDto>({ /* ... */ });
        ```
        当这样指定后，变更对象中的 `error` 属性的类型将变为 `Error | null` (或你指定的 `TError | null`)。这使得你可以直接、安全地访问 `addTodoMutation.error.message` 等属性，并得到 TypeScript 的编译时检查和编辑器的智能提示。
3.  **在 UI 组件中处理和展示变更错误**：
    - 从 `useMutation` 的返回值（例如 `addTodoMutation`）中解构出 `error` 属性。
    - 在 JSX 中使用条件渲染逻辑：
        - 如果 `addTodoMutation.error` 对象存在（即不为 `null`），则在 UI 的适当位置渲染错误提示。这可以是一个简单的文本消息，或者一个更显眼的、带有特定样式的警告框（例如，使用 Bootstrap 的 `alert alert-danger` 类）。
        ```tsx
        // {addTodoMutation.error && (
        //   <div className="alert alert-danger" role="alert">
        //     {addTodoMutation.error.message}
        //   </div>
        // )}
        ```
4.  **模拟错误以进行测试**：
    - **方法**：临时修改传递给 `useMutation` 的 `mutationFn` 中的 API 请求 URL，使其成为一个无效的、会导致服务器返回错误（如 404 Not Found, 500 Internal Server Error）的地址。例如，在 URL 中添加一个不存在的路径段。
    - **观察行为**：
        - 触发变更操作（例如，在 `TodoForm` 中提交表单）。
        - React Query 会执行 `mutationFn`，由于 URL 无效，API 请求将失败。
        - `mutationFn` 的 Promise 会被拒绝，错误对象会被 React Query 捕获并赋值给变更对象的 `error` 属性。
        - 此时，UI 组件中基于 `addTodoMutation.error` 状态的条件渲染逻辑会被触发，从而在页面上显示出相应的错误信息。
        - React Query 默认情况下对 mutation 失败**不会**自动重试（与 query 不同）。

**代码示例**

1.  在 `TodoForm.tsx` 中处理并展示 `useMutation` 的错误

    ```tsx
    // src/react-query/TodoForm.tsx
    import React, { useRef, FormEvent } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    import { Todo } from '../hooks/useTodos'; // 假设Todo接口已导出

    // interface NewTodoDto { title: string; userId: number; completed: boolean; }

    const TodoForm = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient();

      const addTodoToServer = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
        // 为了测试错误，可以临时修改URL:
        // const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos_invalid', newTodo);
        const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
        return response.data;
      };

      // 1. 为 useMutation 指定第二个泛型参数 Error
      const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>({
        mutationFn: addTodoToServer,
        onSuccess: (savedTodo) => {
          queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
            [savedTodo, ...oldTodos]
          );
          // 清空输入框等副作用...
        },
        // onError: (error) => { /* 可以在这里进行额外的错误处理，如日志记录 */ }
      });

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // ... (获取title, 构造newTodoData) ...
        if (inputRef.current?.value) {
            const newTodoData = { title: inputRef.current.value, userId: 1, completed: false };
            addTodoMutation.mutate(newTodoData);
        }
      };

      return (
        <> {/* 使用Fragment包裹表单和可能的错误提示 */}
          {/* 2. 如果 addTodoMutation.error 存在，则显示错误提示 */}
          {addTodoMutation.error && (
            <div className="alert alert-danger" role="alert">
              Failed to add todo: {addTodoMutation.error.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mb-3">
            {/* ... (input group and button, button's disabled and text can depend on addTodoMutation.isPending) ... */}
            <div className="input-group">
                <input ref={inputRef} type="text" className="form-control" placeholder="Add new todo..." />
                <button className="btn btn-primary" type="submit" disabled={addTodoMutation.isPending}>
                {addTodoMutation.isPending ? 'Adding...' : 'Add'}
                </button>
            </div>
          </form>
        </>
      );
    };

    export default TodoForm;
    ```

---

## 22_17. React Query 变更进度：加载状态与 UI 反馈

> 简述：本节主要介绍如何利用 React Query 的`useMutation` Hook 返回的加载状态属性（在 v4 及更早版本中是`isLoading`，在 v5+版本中通常是`isPending`），在数据变更操作（例如，通过 API 提交表单创建新条目）正在进行时，向用户提供即时的视觉反馈。常见的 UI 反馈方式包括：动态地改变提交按钮的文本（例如，从 "Add" 变为 "Adding..."）以及在操作进行中禁用提交按钮，以防止用户发起重复的请求。此外，还演示了在变更操作成功完成后（在`onSuccess`回调中），通过清空相关的输入框来进一步改善用户体验。

**知识树**

1.  **`useMutation` 返回对象中的加载/等待状态属性**：
    - **`isLoading: boolean`** (在 React Query v4 及更早版本中常用此名称)。
    - **`isPending: boolean`** (在 React Query v5+版本中，`isLoading` 通常指首次加载且无数据，而 `isPending` 更准确地表示一个 mutation 或 query 当前正在请求中，无论是否是首次。对于 mutation，`isPending` 是当前推荐使用的状态)。
    - **含义**：这两个属性（根据版本选择合适的）都是布尔值。当 `useMutation` 配置的 `mutationFn`（即实际的 API 请求）正在执行时，其值为 `true`；当 `mutationFn` 执行完成（无论成功或失败）后，其值会变为 `false`。
2.  **在 UI 组件中利用加载/等待状态提供反馈**：
    - 从 `useMutation` 的返回值（例如 `addTodoMutation`）中解构出 `isLoading` (或 `isPending`) 属性。
    - **动态改变按钮文本**：
        - 在渲染提交按钮的文本时，使用条件表达式：
            ```tsx
            // <button type="submit" disabled={addTodoMutation.isPending}>
            //   {addTodoMutation.isPending ? 'Adding...' : 'Add'}
            // </button>
            ```
    - **禁用提交按钮**：
        - 在变更操作进行期间（即 `isLoading`/`isPending` 为 `true` 时），将提交按钮的 `disabled` HTML 属性设置为 `true`。这可以防止用户在请求尚未完成时意外地发起多次相同的请求。
3.  **提升用户体验：操作成功后清空输入字段**：
    - **场景**：当用户成功添加一个新条目（例如，一个新的待办事项）后，通常期望相关的输入字段（如标题输入框）能够自动清空，以便用户可以方便地继续添加下一个条目。
    - **实现位置**：这个操作适合放在 `useMutation` 配置的 `onSuccess` 回调函数中执行。因为 `onSuccess` 确保了只有在 `mutationFn` 成功完成（即 API 请求成功返回）之后，才会执行清空操作。
    - **实现方法**：
        - 如果输入字段是通过 React 的 `useRef` Hook 来引用的（如本课程示例中的 `inputRef`），则可以在 `onSuccess` 回调中访问 `inputRef.current`，并将其 `value` 属性设置为空字符串：
            ```typescript
            // onSuccess: (savedTodo) => {
            //   // ... (更新缓存等逻辑)
            //   if (inputRef.current) { // 确保 ref.current 存在
            //     inputRef.current.value = ''; // 清空输入框
            //   }
            // }
            ```
        - **注意**：在访问 `inputRef.current` 之前，最好进行空值检查 (`if (inputRef.current)`)，因为在极少数情况下（例如组件快速卸载），`current` 可能为 `null`。

**代码示例**

1.  在 `TodoForm.tsx` 中利用 `isPending` (或 `isLoading`) 并清空输入框

    ```tsx
    // src/react-query/TodoForm.tsx
    import React, { useRef, FormEvent } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    import { Todo } from '../hooks/useTodos';

    const TodoForm = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient();

      const addTodoToServer = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
        const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
        return response.data;
      };

      const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>({
        mutationFn: addTodoToServer,
        onSuccess: (savedTodo, newTodoClientVariables) => {
          queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
            [savedTodo, ...oldTodos]
          );

          // 1. 在 onSuccess 回调中清空输入框
          if (inputRef.current) {
            inputRef.current.value = '';
          }
        },
      });

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const title = inputRef.current?.value;
        if (title) {
          const newTodoData: Omit<Todo, 'id'> = { title, userId: 1, completed: false };
          addTodoMutation.mutate(newTodoData);
        }
      };

      return (
        <>
          {addTodoMutation.error && ( /* ...错误提示... */ )}
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
              <input ref={inputRef} type="text" className="form-control" placeholder="Add new todo..." />
              {/* 2. 根据 isPending (或 isLoading) 动态设置按钮文本和禁用状态 */}
              <button
                className="btn btn-primary"
                type="submit"
                disabled={addTodoMutation.isPending} // 使用 isPending (v5+) 或 isLoading (v4)
              >
                {addTodoMutation.isPending ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </>
      );
    };

    export default TodoForm;
    ```

---

## 23_18. React Query 高级技巧：实现乐观更新

> 简述：本节深入探讨了 React Query 中一项旨在显著提升用户感知性能的高级技术——乐观更新 (Optimistic Updates)。其核心思想是，当用户发起一项数据变更操作（如添加新待办事项）时，我们不再被动等待服务器的响应，而是“乐观地”假设该操作会成功，并立即在客户端 UI 上反映出预期的结果。只有当服务器返回错误时，才将 UI 状态回滚到操作之前的样子。这种处理方式使得应用感觉响应极为迅速。实现乐观更新涉及到精巧地运用`useMutation` Hook 提供的`onMutate`、`onError`和`onSuccess`（或`onSettled`）等回调函数，以及一个在这些回调之间传递先前状态的上下文（Context）对象。

**知识树**

1.  **乐观更新 (Optimistic Updates) 的核心概念与目标**：
    - **传统流程**：用户操作 -> 发送请求 -> 等待服务器响应 -> 更新 UI。用户会感知到延迟。
    - **乐观更新流程**：用户操作 -> **立即更新 UI (模拟成功)** -> 发送请求 -> (若成功) 可能用服务器数据精炼 UI / (若失败) **回滚 UI 至原状态**并提示错误。
    - **目标**：通过消除或隐藏网络延迟，使用户感觉应用的交互响应“即时”完成，从而大幅提升用户体验，尤其适用于网络状况不佳或服务端处理耗时较长的场景。
2.  **`useMutation` Hook 中用于乐观更新的关键回调函数**：
    - **`onMutate: async (variables: TVariables) => Promise<TContext | void> | TContext | void`**:
        - **触发时机**：在 `mutationFn` (实际的 API 请求) **执行之前**被同步调用。
        - **核心职责**：
            1.  **(可选) 取消相关查询 (Canceling Queries)**：如果存在可能与本次变更冲突的、正在进行的查询（例如，正在获取待办事项列表的查询），应先取消它们，以防止它们在乐观更新后用旧数据覆盖 UI。可以使用 `await queryClient.cancelQueries({ queryKey: ['todos'] })`。
            2.  **获取先前状态 (Snapshotting Previous Value)**：从缓存中获取当前相关数据在变更之前的状态，并将其保存起来，以便在后续发生错误时用于回滚。例如，`const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);`。
            3.  **乐观地更新缓存 (Optimistically Updating the Cache)**：使用 `queryClient.setQueryData()` 立即修改本地缓存，就像变更操作已经成功完成一样。例如，将用户新输入的待办事项添加到缓存中的待办事项列表的开头。
                ```typescript
                // queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
                //   [newTodoClientSide, ...oldTodos] // newTodoClientSide 是基于用户输入构造的
                // );
                ```
            4.  **返回上下文对象 (Returning Context)**：从此回调函数中返回一个包含先前状态（或其他回滚所需信息）的上下文对象。这个对象将被 React Query 传递给后续的 `onError`、`onSuccess` (v4) 和 `onSettled` 回调函数。
                ```typescript
                // return { previousTodos };
                ```
    - **`onError: (error: TError, variables: TVariables, context?: TContext) => Promise<void> | void`**:
        - **触发时机**：当 `mutationFn` 执行失败（抛出错误或 Promise 被拒绝）时被调用。
        - **核心职责 (回滚)**：如果 `onMutate` 返回了上下文对象，则可以从 `context` 参数中获取之前保存的先前状态，并使用 `queryClient.setQueryData()` 将缓存恢复到该状态，从而实现 UI 的回滚。
            ```typescript
            // if (context?.previousTodos) {
            //   queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
            // }
            ```
    - **`onSuccess: (data: TData, variables: TVariables, context?: TContext) => Promise<void> | void` (在 v4 中用于确认或精炼)**：
        - **触发时机**：当 `mutationFn` 成功执行后被调用。
        - **核心职责 (可选)**：
            - **确认/替换**：如果服务器返回的数据（`data`，例如包含了由服务器生成的 ID 的新 Todo 对象）与 `onMutate` 中乐观更新时使用的客户端构造的数据（`variables` 或从 `context` 中获取）有所不同，此时可以用服务器返回的真实数据来精确更新缓存中的对应条目。
                ```typescript
                // queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
                //   oldTodos.map(todo => (todo === variables ? data : todo)) // 简化的替换逻辑
                // );
                ```
                字幕中的实现是遍历旧 todos，如果某个 todo 与乐观添加的`newTodo`（`variables`）相同，则用服务器返回的`savedTodo`（`data`）替换它。
            - **清理/无需操作**：如果乐观更新的结果与服务器最终确认的结果一致，或者差异不重要，此回调中可能无需执行额外操作。
    - **`onSettled: (data?: TData, error?: TError, variables?: TVariables, context?: TContext) => Promise<void> | void`**:
        - **触发时机**：无论 `mutationFn` 执行成功还是失败，都会在最后被调用。
        - **核心职责**：执行一些清理工作，例如，无论成功或失败，都可能需要重新获取相关的查询数据以确保最终一致性 (`queryClient.invalidateQueries({ queryKey: ['todos'] })`)，但这在纯粹的乐观更新后如果 `onSuccess` 或 `onError` 已妥善处理缓存，则可能不是必需的，或者可以有条件地执行。
3.  **定义上下文对象接口 (`TContext`)**：
    - 为了在 `useMutation` 的泛型参数中正确指定上下文对象的类型，并获得类型安全，通常会为其定义一个接口。
        ```typescript
        // interface AddTodoContext {
        //   previousTodos?: Todo[]; // 使用可选，因为getQueryData可能返回undefined
        // }
        ```
    - 然后在 `useMutation` 的泛型中指定：`useMutation<Todo, Error, NewTodoDto, AddTodoContext>(...)`。
4.  **处理 `queryClient.getQueryData()` 可能返回 `undefined` 的情况**：
    - 在 `onMutate` 中，当使用 `queryClient.getQueryData()` 获取先前状态时，如果缓存中尚无此查询键对应的数据，它会返回 `undefined`。
    - 在构造上下文对象或后续使用 `previousTodos` 时，需要妥善处理这种 `undefined` 的情况（例如，在回滚时，如果 `previousTodos` 是 `undefined`，可能回滚到空数组或不执行回滚）。字幕中是在 `onMutate` 返回时，如果 `previousTodos` 是 `undefined`，则将其处理为空数组 `[]`，以确保 `AddTodoContext` 接口中 `previousTodos` 类型的非可选性（如果接口定义为 `Todo[]` 而非 `Todo[] | undefined`）。

**代码示例**

1.  定义 `AddTodoContext` 接口 (通常与 `useMutation` 定义放在一起)

    ```ts
    interface Todo { id: number; title: string; userId: number; completed: boolean; } // 假设Todo接口
    // interface NewTodoDto { title: string; userId: number; completed: boolean; } // 假设输入类型

    interface AddTodoContext {
      previousTodos?: Todo[]; // 先前的待办事项列表，设为可选以处理初始缓存为空的情况
    }
    ```

2.  在 `useMutation` 配置中实现乐观更新逻辑 (示例片段)

    ```ts
    // 在 TodoForm.tsx 或自定义Hook useAddTodo.ts 中
    // const queryClient = useQueryClient();
    // const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>({
    //   mutationFn: addTodoToServer, // (之前定义的API调用函数)

    //   onMutate: async (newTodoClientSide) => { // newTodoClientSide 是传递给 mutate 的变量
    //     // 1. (可选) 取消可能冲突的查询
    //     await queryClient.cancelQueries({ queryKey: ['todos'] });

    //     // 2. 获取当前缓存快照
    //     const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

    //     // 3. 乐观更新缓存
    //     queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) => [
    //       // 注意：newTodoClientSide 需要一个临时ID才能在列表中正确操作，
    //       // 或者在onSuccess中基于服务器返回的ID进行精确替换。
    //       // 为简化，假设newTodoClientSide结构上可以临时加入列表。
    //       // 更好的做法可能是生成一个临时客户端ID。
    //       // 字幕中是将 newTodo (variables) 直接加入，然后在 onSuccess 中用服务器返回的 savedTodo 替换。
    //       { ...newTodoClientSide, id: Date.now(), completed: false }, // 模拟一个临时Todo对象
    //       ...oldTodos,
    //     ]);

    //     // 4. 返回包含先前状态的上下文对象
    //     return { previousTodos };
    //   },

    //   onError: (error, newTodo, context) => {
    //     // 5. 如果发生错误，使用上下文中的 previousTodos 回滚缓存
    //     if (context?.previousTodos) {
    //       queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
    //     }
    //     // 可以在此添加错误提示逻辑
    //   },

    //   onSuccess: (savedTodoFromServer, newTodoClientSide, context) => {
    //     // 6. (可选但推荐) 用服务器返回的真实数据精确更新缓存
    //     // 这一步确保了如果服务器对数据有所修改（如生成ID，时间戳等），客户端能同步到最新。
    //     // 字幕中的逻辑是找到之前乐观添加的项（通过与newTodoClientSide比较），然后用savedTodoFromServer替换。
    //     queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
    //       oldTodos.map(todo =>
    //         // 这里的比较逻辑需要小心，如果乐观添加时没有唯一标识，可能不易匹配。
    //         // 假设 newTodoClientSide 是乐观更新时添加到列表的那个对象引用或有临时ID
    //         // (此处简化，实际匹配可能更复杂或依赖临时ID)
    //         (todo.title === newTodoClientSide.title && !todo.id) ? savedTodoFromServer : todo
    //       )
    //     );
    //     // 如果 onMutate 中添加的是 newTodoClientSide 的一个副本，且该副本没有 ID，
    //     // 而 savedTodoFromServer 有 ID，那么这个 map 替换逻辑需要确保能正确找到并替换。
    //     // 字幕中的做法是在onSuccess里，直接用savedTodoFromServer替换掉之前用newTodo乐观添加的那个对象。
    //     // 这意味着在onMutate里添加的newTodo（variables）和onSuccess里的newTodo（variables）是同一个对象（或内容相同）。
    //     // 一个更稳妥的onSuccess更新：
    //     // queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) => {
    //     //   const index = oldTodos.findIndex(t => t.title === newTodoClientSide.title && !t.id); // 假设用title和无id来找临时项
    //     //   if (index !== -1) {
    //     //     const updatedTodos = [...oldTodos];
    //     //     updatedTodos[index] = savedTodoFromServer;
    //     //     return updatedTodos;
    //     //   }
    //     //   return [savedTodoFromServer, ...oldTodos.filter(t => t.id !== savedTodoFromServer.id)]; // 或者更简单的，如果ID唯一
    //     // });
    //   },

    //   onSettled: () => {
    //     // 7. (可选) 无论成功或失败，都重新获取'todos'查询以确保最终一致性
    //     // queryClient.invalidateQueries({ queryKey: ['todos'] });
    //     // 对于乐观更新，如果onSuccess/onError已正确处理缓存，onSettled中invalidate可能不是必须的，
    //     // 除非想确保从服务器同步最新状态。
    //   },
    // });
    ```

    - **字幕中 `onSuccess` 的替换逻辑**：字幕中提到的是遍历 `todos.map`，如果 `todo` (遍历项) 与 `newTodo` (传递给 mutation 的原始输入 `variables`) 相同，则用 `savedTodo` (服务器返回的数据 `data`) 替换它。这依赖于 `newTodo` 对象在乐观更新和成功回调之间保持某种可比性或引用关系。

---

## 24_19. React Query 重构：创建自定义变更 Hook (`useAddTodo`)

> 简述：本节课程的核心目标是将之前在`TodoForm`UI 组件中实现的、用于添加新待办事项的复杂`useMutation`逻辑（包括其配置，如`mutationFn`，以及用于乐观更新的`onMutate`、`onError`、`onSuccess`等回调函数）提取并封装到一个可复用的自定义 React Hook——`useAddTodo`中。这种重构实践旨在进一步深化“关注点分离”原则，使得 UI 组件（`TodoForm`）的职责更加纯粹（仅负责视图渲染和用户交互的触发），而将所有与数据变更相关的业务逻辑、API 调用、缓存管理和状态同步等细节都集中到`useAddTodo` Hook 内部。此外，还探讨了如何在自定义 Hook 和调用它的 UI 组件之间，通过回调函数机制来优雅地处理那些与 UI 直接相关的副作用（例如，在添加成功后清空输入框）。

**知识树**

1.  **识别组件职责过重的问题**：
    - **现象**：`TodoForm.tsx` 组件当前不仅包含了表单的 JSX 结构和基本的事件处理，还嵌入了完整的 `useMutation` 调用及其所有复杂的配置项（包括用于实现乐观更新的多个回调函数）。
    - **缺点**：
        - **组件臃肿**：UI 组件因包含大量数据层逻辑而变得难以阅读和维护。
        - **复用性差**：如果应用中其他地方也需要添加待办事项，这套复杂的变更逻辑难以直接复用。
        - **测试困难**：混合了 UI 和数据逻辑的组件更难进行单元测试或集成测试。
2.  **解决方案：创建自定义变更 Hook (Custom Mutation Hook)**：
    - **目的**：将特定资源（如待办事项）的特定变更操作（如添加）及其所有相关逻辑（API 调用、乐观更新配置、缓存交互等）封装在一个专门的、可复用的自定义 Hook 中。
    - **命名约定**：遵循 React Hook 的命名规则，以 `use` 开头，例如 `useAddTodo`。
    - **文件组织**：通常将自定义变更 Hooks 放置在项目 `src` 目录下的 `hooks` 文件夹中，例如 `src/hooks/useAddTodo.ts`。
3.  **`useAddTodo.ts` Hook 的实现步骤**：
    - **Step 1: 创建 Hook 文件和函数**：
        - 新建 `useAddTodo.ts` 文件。
        - 定义并导出一个名为 `useAddTodo` 的函数。
    - **Step 2: 迁移核心变更逻辑**：
        - 将原 `TodoForm.tsx` 组件中与 `useMutation` 相关的所有代码（包括 `useQueryClient()` 的调用、`useMutation` 的调用本身、其配置对象中的 `mutationFn`，以及 `onMutate`, `onError`, `onSuccess`, `onSettled` 等回调函数的实现）完整地移动到 `useAddTodo` Hook 的函数体内。
        - 确保所有相关的 TypeScript 接口定义（如 `Todo`, `AddTodoContext`）也被相应地移入或从正确的位置导入到 `useAddTodo.ts` 中。
    - **Step 3: 处理 UI 相关的副作用 (如清空输入框)**：
        - **问题识别**：像清空输入框 (`inputRef.current.value = ''`) 这样的操作是直接与 UI 元素相关的副作用，将其硬编码在 `useAddTodo` Hook 的 `onSuccess` (或乐观更新的 `onMutate`) 回调中会降低 Hook 的通用性和可复用性（因为其他使用此 Hook 的场景可能没有相同的 `inputRef` 或不需要此行为）。
        - **解决方案：通过回调函数参数化副作用**：
            1.  修改 `useAddTodo` Hook 的函数签名，使其可以接收一个可选的回调函数作为参数，例如 `onAdd?: () => void`。这个回调由 Hook 的调用者（即 UI 组件）提供。
            2.  在 `useAddTodo` Hook 内部，当变更操作成功（例如，在 `onSuccess` 回调中，或者在 `onMutate` 中乐观更新 UI 之后）且适合执行 UI 清理时，检查并调用这个传入的 `onAdd` 回调函数。
                ```typescript
                // // Inside useAddTodo hook's onSuccess (or onMutate for optimistic UI clear)
                // if (onAdd) {
                //   onAdd();
                // }
                ```
                字幕中是将这个 `onAdd()` 调用放在了 `onMutate` 里，在乐观更新缓存之后。
    - **Step 4: 返回 `useMutation` 的结果**：
        - `useAddTodo` Hook 的返回值就是其内部调用的 `useMutation` Hook 的返回值（即包含了 `mutate` 方法、`isLoading`/`isPending`, `error`, `data` 等属性的变更对象）。
        ```typescript
        // // Inside useAddTodo hook
        // const mutation = useMutation(...);
        // return mutation;
        ```
4.  **在 UI 组件 (`TodoForm.tsx`) 中使用自定义变更 Hook**：
    - **导入**：导入新创建的 `useAddTodo` Hook。
    - **调用**：调用 `useAddTodo()`，并可以传递一个实现了 UI 副作用（如清空输入框）的回调函数。
        ```tsx
        // const addTodoMutation = useAddTodo(() => {
        //   if (inputRef.current) {
        //     inputRef.current.value = '';
        //   }
        // });
        ```
    - **使用变更对象**：从 `useAddTodo` 返回的变更对象中获取 `mutate` 方法以及 `isPending` (或 `isLoading`), `error` 等状态，用于触发表单提交和更新 UI。
    - **清理**：移除 `TodoForm.tsx` 中原有的 `useMutation` 调用、相关的回调函数实现、`useQueryClient` 调用（如果只用于此 mutation）以及不再需要的导入。
5.  **代码整洁化与常量提取**：

    - **提取`queryKey`为常量**：在项目中，多个地方（如 `useTodos` Hook 获取数据时、`useAddTodo` Hook 更新缓存时）都可能引用相同的查询键（例如 `['todos']`）。为了避免因手写字符串可能导致的拼写错误，并方便未来统一修改，应将这些查询键提取到项目中一个共享的常量文件中（例如，字幕中建议在 `src/react-query` 目录下创建 `constants.ts`）。

        ```typescript
        // src/react-query/constants.ts
        // export const CACHE_KEY_TODOS = ['todos'];

        // 在 Hooks 中使用:
        // import { CACHE_KEY_TODOS } from './constants';
        // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, ...);
        ```

    - **VS Code "Organize Imports"**：使用编辑器的“组织导入”功能（通常通过命令面板或快捷键触发）可以自动移除组件或 Hook 文件中不再使用的导入语句，保持代码整洁。

6.  **实现“关注点分离”的益处回顾**：
    - **`TodoForm.tsx` (UI 组件)**：职责清晰，主要负责 JSX 结构、表单元素的引用、用户输入的捕获，以及在提交时调用从自定义 Hook 获取的 `mutate` 方法，并处理由 Hook 通过回调传递的 UI 副作用。
    - **`useAddTodo.ts` (自定义 Hook)**：职责集中，封装了所有与“添加待办事项”这一数据变更操作相关的逻辑，包括与 API 的交互、乐观更新的复杂流程、缓存的读取与写入等。

**代码示例**

1.  创建 `src/react-query/constants.ts` (用于存放共享的 Query Keys)
    ```ts
    // src/react-query/constants.ts
    export const CACHE_KEY_TODOS = ['todos'];
    ```
2.  创建 `src/hooks/useAddTodo.ts` (自定义变更 Hook)

    ```ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    import { Todo } from './useTodos'; // 假设Todo接口在useTodos.ts或entities.ts
    import { CACHE_KEY_TODOS } from '../react-query/constants'; // 1. 导入共享的Query Key

    // 上下文接口定义 (用于乐观更新)
    interface AddTodoContext {
      previousTodos?: Todo[];
    }

    // Hook参数，接收一个可选的 onAdd 回调
    interface UseAddTodoOptions {
      onAdd?: () => void;
    }

    const useAddTodo = (options?: UseAddTodoOptions) => {
      const queryClient = useQueryClient();

      const addTodoToServer = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
        const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
        return response.data;
      };

      // 2. useMutation 的所有逻辑都封装在Hook内部
      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>({
        mutationFn: addTodoToServer,

        onMutate: async (newTodoClientSide) => {
          await queryClient.cancelQueries({ queryKey: CACHE_KEY_TODOS });
          const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (oldTodos = []) => [
            { ...newTodoClientSide, id: 0, completed: false }, // 乐观添加，id=0是临时占位
            ...oldTodos,
          ]);

          if (options?.onAdd) { // 3. 在乐观更新后调用 onAdd 回调 (例如清空表单)
            options.onAdd();
          }
          return { previousTodos };
        },

        onSuccess: (savedTodoFromServer, newTodoClientSide) => {
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (oldTodos = []) =>
            // 用服务器返回的真实todo替换掉乐观添加的临时todo
            // 注意：这里的替换逻辑需要精确匹配，字幕中是基于 newTodoClientSide (variables)
            // 如果乐观添加时用了临时ID或不同结构，这里的匹配逻辑会更复杂
            oldTodos.map(todo =>
              (todo.title === newTodoClientSide.title && todo.id === 0) // 假设用title和临时id=0匹配
                ? savedTodoFromServer
                : todo
            )
          );
        },

        onError: (error, newTodo, context) => {
          if (context?.previousTodos) {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
          }
        },
      });
    };

    export default useAddTodo;
    ```

    - _Note on Optimistic Update ID_: 在`onMutate`中乐观添加时，新项通常没有服务器生成的 ID。如果`onSuccess`中需要精确替换，可能需要在`onMutate`时为乐观添加的项赋予一个临时客户端唯一 ID，并在`onSuccess`中基于此临时 ID 查找并替换。字幕中的做法是，`onMutate`中添加的`newTodo`（即`variables`）和`onSuccess`中作为第二个参数接收的`newTodo`（`variables`）是同一个对象或具有可比性，从而在`map`中找到并替换。上述示例中，我在`onMutate`中为乐观添加的项模拟了一个`id: 0`。

3.  修改 `TodoForm.tsx` 以使用 `useAddTodo` Hook

    ```tsx
    // src/react-query/TodoForm.tsx
    import React, { useRef, FormEvent } from 'react';
    // 1. 移除 useMutation, useQueryClient, axios, Todo (如果之前在此定义)
    import useAddTodo from '../hooks/useAddTodo'; // 2. 导入自定义Hook

    const TodoForm = () => {
      const inputRef = useRef<HTMLInputElement>(null);

      // 3. 调用 useAddTodo，并传递 onAdd 回调用于清空输入框
      const addTodoMutation = useAddTodo({
        onAdd: () => {
          if (inputRef.current) {
            inputRef.current.value = ''; // UI副作用由组件处理
          }
        }
      });

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const title = inputRef.current?.value;
        if (title) {
          // 4. 调用 mutate 方法，传递要添加的数据
          addTodoMutation.mutate({ title, userId: 1, completed: false });
          // 清空输入框的逻辑已通过 onAdd 回调移交给了 Hook
        }
      };

      return (
        <>
          {addTodoMutation.error && ( /* ...错误提示... */ )}
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
              <input ref={inputRef} type="text" className="form-control" placeholder="Add new todo..." />
              <button
                className="btn btn-primary"
                type="submit"
                disabled={addTodoMutation.isPending}
              >
                {/* 5. 根据 isPending 状态更新按钮UI */}
                {addTodoMutation.isPending ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </>
      );
    };

    export default TodoForm;
    ```

4.  修改 `useTodos.ts` 以使用常量 `CACHE_KEY_TODOS`

    ```ts
    // src/hooks/useTodos.ts
    // ... (imports for useQuery, axios, Todo interface)
    import { CACHE_KEY_TODOS } from '../react-query/constants'; // 导入常量

    // ... (fetchTodos function)
    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS, // 使用常量
        queryFn: fetchTodos,
        // ...
      });
    };
    export default useTodos;
    ```

---

## 25_20. 代码重构：创建可复用 API 客户端类

> 简述：本节课程旨在通过创建一个通用的、可复用的 `ApiClient` 类来进一步优化项目中数据获取和变更的逻辑，解决在多个自定义 Hook（如 `useTodos` 和 `useAddTodo`）中直接使用 Axios 并重复处理 API 端点和响应数据的模式。这个 `ApiClient` 类被设计为可以针对特定的 API 端点和数据实体类型进行实例化，并提供标准化的方法（如 `getAll()` 用于获取列表，`post()` 用于创建新条目）来执行 HTTP 请求。通过这种封装，可以统一 API 交互方式，使得自定义 Hook 的实现更加简洁、聚焦于 React Query 的配置，并减少了代码的重复度和潜在的维护成本。

**知识树**

1.  **识别代码中的重复模式与“逻辑泄漏”**：
    - **现象**：在 `useTodos.ts` 的 `queryFn` (例如 `fetchTodos`) 和 `useAddTodo.ts` 的 `mutationFn` (例如 `addTodoToServer`) 中，都包含了直接使用 `axios.get()` 或 `axios.post()` 来与特定 API 端点交互，并随后通过 `.then(res => res.data)` 来提取响应数据的类似代码片段。
    - **问题**：
        - **端点 URL 重复**：同一个资源的端点 URL（如 `'/todos'`）可能在多个 Hook 中硬编码或重复出现。
        - **响应处理重复**：从 Axios 响应中提取 `data` 属性的逻辑在多处重复。
        - **关注点混合**：自定义 Hook（其主要职责应是封装 React Query 的查询/变更配置和状态管理）仍然直接承担了底层的 HTTP 请求实现细节。这被认为是“查询逻辑泄漏到 Hook 中”。
2.  **解决方案：封装可复用的 API 客户端 (`ApiClient`)**：
    - **目的**：创建一个抽象层，将所有与特定 API 资源交互的 HTTP 请求逻辑（GET, POST, PUT, DELETE 等）集中管理起来。
    - **文件组织**：在项目中创建一个新的文件夹（例如，字幕中建议在 `src/react-query` 目录下创建 `services` 文件夹），并在其中新建一个 `ApiClient.ts` 文件。
    - **实现方式：使用类 (Class)**：定义一个 `ApiClient<T>` 类，其中 `<T>` 是一个泛型类型参数，代表该客户端实例将要操作的数据实体的类型（例如，`Todo` 类型或 `Post` 类型）。
3.  **`ApiClient<T>` 类的设计与实现**：
    - **共享的 Axios 实例 (可选但推荐)**：
        - 在 `ApiClient.ts` 文件顶部，可以创建一个配置了全局 `baseURL` (例如，`https://jsonplaceholder.typicode.com`) 的 Axios 实例。这个实例将被类内部的所有 HTTP 请求方法共享，避免了在每个方法中重复指定基础 URL。
            ```typescript
            // import axios from 'axios';
            // const axiosInstance = axios.create({
            //   baseURL: 'https://jsonplaceholder.typicode.com',
            // });
            ```
    - **构造函数 (`constructor`)**：
        - 接收一个 `endpoint: string` 作为参数（例如，`'/todos'`, `'/posts'`）。
        - 将此 `endpoint` 存储为类的实例属性 `this.endpoint`，供后续的请求方法使用。
    - **数据获取方法 (示例：`getAll`)**：
        - 定义为类的一个方法，例如 `getAll = async (): Promise<T[]> => { ... }`。
        - **使用箭头函数语法**：这是**非常重要**的一点。将类方法定义为箭头函数（而不是传统的 `getAll() { ... }` 语法）可以确保方法内部的 `this` 关键字在任何调用上下文中都正确地指向 `ApiClient` 类的实例。这对于将方法引用直接传递给 React Query 的 `queryFn` 或 `mutationFn` 至关重要，避免了 `this` 上下文丢失导致 `this.endpoint` 等实例属性变为 `undefined` 的问题。
        - **实现**：使用共享的 `axiosInstance` 发送 GET 请求到 `this.endpoint`。由于 `T` 代表实体类型，此方法期望返回一个 `T` 类型的数组，因此 Axios 请求可以指定泛型 `axiosInstance.get<T[]>(this.endpoint)`。然后，返回 `response.data`。
    - **数据创建方法 (示例：`post`)**：
        - 定义为 `post = async (data: T): Promise<T> => { ... }` (或根据 API 实际行为，参数类型可能是 `Partial<T>` 或特定的 DTO，返回值也可能是 `void` 或其他)。
        - **同样使用箭头函数语法**。
        - **实现**：使用 `axiosInstance.post<T>(this.endpoint, data)` 发送 POST 请求，请求体为传入的 `data` 对象。然后，返回 `response.data`（通常是服务器创建并返回的、可能包含 ID 等信息的完整对象）。
    - **导出 `ApiClient` 类**。
4.  **在自定义 Hooks 中使用新的 `ApiClient`**：
    - **`useTodos.ts` (查询 Hook 示例)**：
        1.  导入 `ApiClient` 类。
        2.  在 Hook 函数体内部（或者在文件模块级别创建一次，如果希望在多个地方复用同一个客户端实例，但通常每个 Hook 会创建自己的实例或接收一个实例）创建一个 `ApiClient` 的实例，并传入特定数据类型和端点：
            ```typescript
            // const apiClient = new ApiClient<Todo>('/todos');
            ```
        3.  移除原先在 Hook 内部直接使用 Axios 的 `fetchTodos` 函数。
        4.  将 `useQuery` 配置中的 `queryFn` 直接设置为 `apiClient.getAll` (注意，是传递方法引用，不是立即调用 `apiClient.getAll()`)。
    - **`useAddTodo.ts` (变更 Hook 示例)**：
        1.  同样导入 `ApiClient` 并创建实例：`const apiClient = new ApiClient<Todo>('/todos');`
        2.  移除原先的 `addTodoToServer` 函数。
        3.  将 `useMutation` 配置中的 `mutationFn`直接设置为 `apiClient.post`。
5.  **解决 `this` 上下文丢失问题的回顾**：
    - **问题场景**：如果 `ApiClient` 的方法（如 `getAll`, `post`）是使用传统函数语法定义的，当把 `apiClient.getAll` 作为方法引用传递给 `queryFn` 时，React Query 在内部调用这个函数时，其内部的 `this` 指向可能不再是 `apiClient` 实例，而是全局对象（浏览器中是 `window`）或 `undefined`（严格模式下），导致访问 `this.endpoint` 出错。
    - **箭头函数方案**：箭头函数没有自己的 `this` 绑定，它会从其词法作用域（即 `ApiClient` 类定义的上下文）捕获 `this` 值。因此，当用箭头函数定义类方法时，无论该方法如何被调用或传递，其内部的 `this` 始终指向正确的类实例。
    - **`.bind()` 方案 (不推荐，但可用)**：可以在传递方法引用时手动绑定 `this` 上下文：`queryFn: apiClient.getAll.bind(apiClient)`。但这比较冗余，箭头函数是更现代和简洁的解决方案。
6.  **UI 反馈调整 (针对乐观更新后的 `TodoForm`)**：
    - **背景**：在之前的课程中，为了在添加待办事项时提供加载反馈，按钮文本会从 "Add" 变为 "Adding..."，并且按钮会被禁用。
    - **乐观更新的影响**：由于乐观更新使得 UI 几乎立即响应用户的添加操作（新项直接出现在列表中），用户不再感知到明显的“等待服务器响应”的过程。
    - **调整建议**：在这种情况下，原先那种显式的“正在添加”的按钮状态（文本变化和禁用）可能显得多余，甚至与乐观更新的即时反馈感相冲突。因此，可以考虑简化 `TodoForm` 中的按钮逻辑，使其文本保持为 "Add"，并且不再在乐观更新期间（即 `addTodoMutation.isPending` 时）禁用按钮，因为 UI 已经“乐观地”完成了操作。

**代码示例**

1.  创建 `src/react-query/services/ApiClient.ts`

    ```ts
    import axios, { AxiosInstance } from 'axios';

    // 1. 创建一个共享的、配置了 baseURL 的 Axios 实例
    const axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    class ApiClient<T> {
      readonly endpoint: string; // endpoint 设为只读属性

      constructor(endpoint: string) {
        this.endpoint = endpoint;
      }

      // 2. 使用箭头函数定义 getAll 方法，以确保 this 指向正确
      getAll = async (): Promise<T[]> => {
        const response = await axiosInstance.get<T[]>(this.endpoint);
        return response.data;
      };

      // 3. 使用箭头函数定义 post 方法
      //    参数 data 类型可以更精确，如 Omit<T, 'id'> 或特定的 DTO
      post = async (data: T | Omit<T, 'id'>): Promise<T> => {
        const response = await axiosInstance.post<T>(this.endpoint, data);
        return response.data;
      };

      // 可以继续添加其他方法，如 getOne, update, delete 等
      // getOne = async (id: number | string): Promise<T> => { ... }
      // update = async (id: number | string, data: Partial<T>): Promise<T> => { ... }
      // delete = async (id: number | string): Promise<void> => { ... }
    }

    export default ApiClient;
    ```

2.  修改 `src/hooks/useTodos.ts` 以使用 `ApiClient`

    ```ts
    import { useQuery } from '@tanstack/react-query';
    // 1. 移除 axios 的直接导入 (如果之前有)
    import ApiClient from '../react-query/services/ApiClient'; // 2. 导入 ApiClient
    import { Todo } from '../entities'; // 假设 Todo 接口在 entities.ts
    import { CACHE_KEY_TODOS } from '../react-query/constants';

    // 3. 创建 ApiClient 实例
    const apiClient = new ApiClient<Todo>('/todos');

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll, // 4. queryFn 直接引用 apiClient.getAll
        staleTime: 10 * 1000,
      });
    };

    export default useTodos;
    ```

3.  修改 `src/hooks/useAddTodo.ts` 以使用 `ApiClient`

    ```ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    // 1. 移除 axios 的直接导入
    import ApiClient from '../react-query/services/ApiClient'; // 2. 导入 ApiClient
    import { Todo } from '../entities';
    import { CACHE_KEY_TODOS } from '../react-query/constants';

    interface AddTodoContext { previousTodos?: Todo[]; }
    interface UseAddTodoOptions { onAdd?: () => void; }

    // 3. 创建 ApiClient 实例
    const apiClient = new ApiClient<Todo>('/todos');

    const useAddTodo = (options?: UseAddTodoOptions) => {
      const queryClient = useQueryClient();

      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>({
        mutationFn: apiClient.post, // 4. mutationFn 直接引用 apiClient.post
        // ... (onMutate, onSuccess, onError 逻辑不变，它们现在依赖 apiClient.post 的行为)
        onMutate: async (newTodoOptimistic) => {
            // ... 乐观更新逻辑
            if (options?.onAdd) options.onAdd(); // 例如，乐观更新后即调用onAdd
            return { /* previousTodos */ };
        },
        onSuccess: (savedTodoFromServer, newTodoClientSide) => {
            // ... 更新缓存逻辑
        },
        onError: (error, newTodo, context) => {
            // ... 回滚逻辑
        },
      });
    };

    export default useAddTodo;
    ```

4.  (可选) 简化 `TodoForm.tsx` 中的按钮（移除加载状态文本变化和禁用）
    ```tsx
    // In src/react-query/TodoForm.tsx
    // ...
    return (
      <>
        {addTodoMutation.error && ( /* ...错误提示... */ )}
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="input-group">
            <input ref={inputRef} /* ... */ />
            <button
              className="btn btn-primary"
              type="submit"
              // 1. 移除 disabled={addTodoMutation.isPending}
              // 2. 按钮文本保持为 'Add'
            >
              Add
            </button>
          </div>
        </form>
      </>
    );
    // ...
    ```

---
