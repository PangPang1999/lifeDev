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

## 1- 简介 (React Query 部分)

> 简述：本节将深入探讨如何使用 React Query 进行数据获取和更新。内容分为三部分：查询数据、变更数据和项目实践，最终目标是为 Game Hub 项目添加缓存和无限滚动功能，并重构代码库。

**知识树**

1.  React Query 核心功能：数据获取与更新。
2.  内容结构：
    - 第一部分：数据查询
        - 从 API 获取数据。
        - 错误处理。
        - 实现分页查询和无限滚动查询。
        - 使用 React Query DevTools 调试查询。
    - 第二部分：数据变更 (Mutations)
        - 处理 CRUD (创建、读取、更新、删除) 操作。
        - 实现乐观更新。
        - 创建自定义钩子和可复用服务进行数据变更。
    - 第三部分：项目实践
        - 将所学技能应用于 Game Hub 项目。
        - 实现缓存和无限滚动。
        - 代码重构与改进。
3.  最终成果：Game Hub 项目具备缓存和无限滚动功能，代码库得到优化。

**代码示例**

（本节无代码）

## 2- React Query 是什么？

> 简述：React Query 是一个强大的库，用于管理 React 应用中的数据获取和缓存。它解决了传统数据获取方式（如使用`useState`和`useEffect`）中存在的请求取消、关注点分离、失败重试、自动刷新和缓存等问题，且相比 Redux 等状态管理库在处理服务端状态时更简单轻量。

**知识树**

1.  传统数据获取方式的问题 (以`useState` + `useEffect`为例)：
    - 请求取消：组件卸载时未取消 HTTP 请求，可能导致内存泄漏或状态更新错误，尤其在严格模式下（组件渲染两次）。
    - 关注点分离缺失：查询逻辑耦合在组件内部，难以复用和模块化。需手动提取到自定义钩子。
    - 无失败重试机制：请求失败后通常直接显示错误，用户体验不佳。
    - 无自动刷新：数据在后端更新后，前端页面除非手动刷新，否则无法看到最新数据。
    - 无内置缓存：频繁请求相同数据会增加服务器负载，影响应用性能。
2.  React Query 的优势：
    - 内置上述问题的解决方案：自动处理请求取消、提供重试机制、支持自动刷新、强大的缓存策略。
    - 简化数据获取逻辑：开发者无需手动编写大量样板代码。
3.  与 Redux 的比较 (用于缓存服务端状态)：
    - Redux：流行的全局状态管理库，常被用作客户端缓存。
        - 缺点：学习曲线陡峭，样板代码多，增加应用复杂度和调试难度。
    - React Query：更专注于服务端状态管理，更简单、轻量。
        - 建议：在新项目中，对于服务端状态的缓存，优先考虑 React Query 而非 Redux。

**代码示例**

1.  传统数据获取 (示例 `TodoList` 组件，展示问题点):

    ```tsx
    // src/react-query/TodoList.tsx (初始版本，展示问题)
    import { useEffect, useState } from 'react';
    import axios from 'axios';

    interface Todo {
      id: number;
      title: string;
      userId: number;
      completed: boolean;
    }

    const TodoList = () => {
      const [todos, setTodos] = useState<Todo[]>([]);
      const [error, setError] = useState('');

      useEffect(() => {
        axios
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .then((res) => setTodos(res.data))
          .catch((err) => setError(err.message));
        // 问题1: 没有取消请求的逻辑
        // 问题2: 查询逻辑在组件内，不易复用
        // 问题3: 没有重试
        // 问题4: 没有自动刷新
        // 问题5: 没有缓存
      }, []);

      if (error) return <p>{error}</p>;

      return (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default TodoList;
    ```

## 3- 设置 React Query

> 简述：安装 React Query 并进行基本配置。需要在应用根组件处创建`QueryClient`实例，并通过`QueryClientProvider`将其提供给整个应用。

**知识树**

1.  安装:
    - 命令: `npm install @tanstack/react-query`
    - （视频中可能指定了版本以保证一致性，如 `@tanstack/react-query@4.29.19`）
2.  核心对象与 Provider:
    - `QueryClient`: React Query 的核心，用于管理和缓存远程数据。
    - `QueryClientProvider`: React 组件，用于将`QueryClient`实例注入到组件树中，使其对所有子组件可用。
3.  配置步骤 (`main.tsx`):
    - 导入 `QueryClient` 和 `QueryClientProvider`。
    - 创建 `QueryClient` 的新实例: `const queryClient = new QueryClient();`。
    - 用 `QueryClientProvider` 包裹根 `App` 组件。
    - 将创建的 `queryClient` 实例通过 `client` prop 传递给 `QueryClientProvider`。

**代码示例**

1.  安装命令 (终端):

    ```bash
    npm install @tanstack/react-query
    # 或指定版本: npm install @tanstack/react-query@4.29.19
    ```

2.  `main.tsx` (或应用入口文件) 配置:

    ```tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 导入
    import App from './App.tsx';
    import './index.css';

    // 创建 QueryClient 实例
    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}> {/* 提供 client */}
          <App />
        </QueryClientProvider>
      </React.StrictMode>,
    );
    ```

## 4- 获取数据

> 简述：使用 React Query 的`useQuery`钩子从后端获取数据。`useQuery`接收一个配置对象，其中包含`queryKey`（用于缓存的唯一标识符）和`queryFn`（执行实际数据获取的函数）。钩子返回一个包含数据、错误、加载状态等属性的查询对象。

**知识树**

1.  `useQuery` 钩子:
    - 从 `@tanstack/react-query` 导入。
    - 基本用法: `useQuery(options)`。
2.  `useQuery` 配置对象 (`options`):
    - `queryKey: QueryKey`: 查询的唯一标识符，用于内部缓存。
        - 类型为数组，例如 `['todos']` 或 `['todos', { completed: true }]`。
        - 第一个元素通常是标识数据类型的字符串。后续元素可用于更细致的区分，如筛选条件。
    - `queryFn: () => Promise<TData>`: 一个返回 Promise 的函数，负责实际获取数据。
        - Promise 应解析为所需数据，或在出错时抛出错误。
        - 可以使用任何 HTTP 客户端 (如 Axios, fetch API)。
        - 通常需要从 HTTP 响应中提取实际数据 (例如 `response.data` for Axios)。
3.  `queryFn` 的类型注解:
    - 为了 TypeScript 的类型安全，应明确`queryFn`返回的 Promise 所解析的数据类型。
    - 例如，使用 Axios 时: `axios.get<Todo[]>('url').then(res => res.data)`，这里 `Todo[]` 是期望的数据类型。
4.  `useQuery` 返回的查询对象:
    - 包含多个属性，如：
        - `data: TData | undefined`: 获取到的数据。初始时或错误时为 `undefined`。
        - `error: TError | null`: 错误对象。成功时为 `null`。
        - `isLoading: boolean`: 是否正在加载数据 (首次加载)。
        - （还有 `isFetching`, `status`, `isSuccess`, `isError` 等更多状态）。
    - 可以直接解构所需属性: `const { data, error, isLoading } = useQuery(...)`。
5.  数据使用:
    - 在组件中使用 `data` 属性渲染数据。
    - 由于 `data` 可能为 `undefined` (例如初始加载或错误时)，在访问其属性或调用其方法 (如 `.map()`) 时，需要使用可选链 (`?.`) 或进行空值检查。
    - 可以通过解构重命名 `data`，例如 `const { data: todos } = useQuery(...)`。
6.  React Query 带来的好处 (回顾):
    - 自动重试失败请求。
    - 自动刷新数据 (可配置)。
    - 内置缓存机制。

**代码示例**

1.  `TodoList.tsx` (使用 `useQuery` 获取数据):

    ```tsx
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    interface Todo {
      id: number;
      title: string;
      // ...其他属性
    }

    // 提取的查询函数
    const fetchTodos = (): Promise<Todo[]> =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data);

    const TodoList = () => {
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({ // 指定数据和错误类型
        queryKey: ['todos'], // 查询键
        queryFn: fetchTodos,  // 查询函数
      });

      // isLoading 和 error 的处理见后续小节

      return (
        <ul>
          {/* 使用可选链，因为 todos 可能为 undefined */}
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default TodoList;
    ```

## 5- 处理错误

> 简述：React Query 的`useQuery`钩子返回的查询对象中包含`error`属性，用于捕获数据获取过程中发生的错误。通过为`useQuery`指定泛型错误类型，可以获得更准确的错误对象类型提示。

**知识树**

1.  `error` 属性:
    - `useQuery` 返回的查询对象包含 `error` 属性。
    - 当 `queryFn` 抛出错误或返回的 Promise 被拒绝时，`error` 属性会被设置为该错误对象。
    - 如果请求成功，`error` 为 `null`。
2.  错误类型:
    - 默认情况下，`error` 属性的类型是 `unknown`，因为 React Query 不知道`queryFn`可能抛出何种类型的错误。
    - 为了获得更好的类型支持，可以在调用 `useQuery` 时指定泛型参数：
        - `useQuery<TData, TError>(options)`
        - `TData`: 数据的类型 (例如 `Todo[]`)。
        - `TError`: 错误的类型 (例如 `Error`，如果使用 Axios，错误通常是 `Error` 接口的实例)。
3.  渲染错误信息:
    - 在组件中检查 `error` 属性是否为真值。
    - 如果存在错误，可以渲染错误信息，例如 `error.message`。
4.  自动重试:
    - React Query 默认会在请求失败时自动重试若干次。错误信息通常在所有重试均失败后才会通过 `error` 属性暴露给组件。

**代码示例**

1.  `TodoList.tsx` (处理并显示错误):

    ```tsx
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    interface Todo { /* ... */ }

    const fetchTodos = (): Promise<Todo[]> =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos') // 模拟错误可改URL
        .then((res) => res.data);

    const TodoList = () => {
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({ // 指定 TError 为 Error
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });

      // isLoading 处理见下一节

      if (error) { // 检查错误
        return <p>Error: {error.message}</p>; // 显示错误消息
      }

      return (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default TodoList;
    ```

2.  在 `App.tsx` 中使用 `TodoList` 以便在浏览器中查看效果:

    ```tsx
    // App.tsx
    import TodoList from './react-query/TodoList';

    function App() {
      return <TodoList />;
    }

    export default App;
    ```

    - 要模拟错误，可以在 `fetchTodos` 函数中将 URL 修改为一个无效的地址。

## 11- 显示加载指示器

> 简述：React Query 的`useQuery`钩子返回的查询对象中包含`isLoading`布尔属性，用于指示数据是否正在进行初始加载。利用此属性可以在数据获取期间向用户显示加载提示。

**知识树**

1.  `isLoading` 属性:
    - `useQuery` 返回的查询对象包含 `isLoading` 属性。
    - 当查询首次执行且数据尚未获取完成时，`isLoading` 为 `true`。
    - 数据获取成功或失败后，`isLoading` 变为 `false`。
    - 注意与 `isFetching` 的区别：`isLoading` 仅指首次加载；`isFetching` 在任何数据获取活动（包括后台刷新）期间都为 `true`。
2.  渲染加载指示器:
    - 在组件中检查 `isLoading` 属性是否为 `true`。
    - 如果是，则渲染加载提示，例如文本 "Loading..." 或一个 Spinner 组件。
3.  模拟慢速网络:
    - 可以使用浏览器开发者工具的网络(Network)标签页中的网络限速功能 (例如 "Slow 3G") 来模拟慢速连接，以便更清晰地观察加载状态。

**代码示例**

1.  `TodoList.tsx` (显示加载指示器):

    ```tsx
    // ... imports and fetchTodos function ...

    const TodoList = () => {
      const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
      });

      if (isLoading) { // 检查是否正在加载
        return <p>Loading...</p>; // 显示加载文本
      }

      if (error) {
        return <p>Error: {error.message}</p>;
      }

      return (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default TodoList;
    ```

## 12- 创建自定义查询钩子

> 简述：将与特定数据获取相关的 React Query 逻辑（包括`useQuery`的调用、`queryKey`的定义、`queryFn`的实现以及相关的类型接口）封装到一个自定义钩子中。这有助于实现关注点分离，使组件代码更简洁，并提高数据获取逻辑的可复用性。

**知识树**

1.  关注点分离:
    - 组件的主要职责是渲染 UI 和处理用户交互。
    - 数据获取逻辑（如何获取、缓存键、错误处理等）应从组件中分离出来。
2.  自定义钩子 (Custom Hook):
    - 以 `use` 开头的 JavaScript 函数，允许在不同组件间共享有状态逻辑。
    - 命名约定：例如，获取 todos 的钩子可以命名为 `useTodos`。
3.  封装内容:
    - 相关的类型接口 (例如 `Todo` 接口)。
    - 实际的数据获取函数 (`queryFn` 的实现，如 `fetchTodos`)。
    - `useQuery` 的调用，包括 `queryKey` 和 `queryFn` 的配置。
    - 自定义钩子直接返回 `useQuery` 的结果 (查询对象)。
4.  使用自定义钩子:
    - 在组件中，导入并调用自定义钩子，例如 `const { data, error, isLoading } = useTodos();`。
    - 组件不再直接与 `useQuery` 或数据获取细节打交道。
5.  优点:
    - 组件更简洁，只关注 UI。
    - 数据获取逻辑集中管理，易于维护和修改。
    - 数据获取逻辑可在多个组件中复用。

**代码示例**

1.  创建 `hooks` 文件夹 (如果尚不存在) 和 `useTodos.ts` 文件:

    ```ts
    // src/hooks/useTodos.ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    // 将 Todo 接口移到这里
    export interface Todo {
      id: number;
      title: string;
      userId: number;
      completed: boolean;
    }

    // 数据获取函数也移到这里
    const fetchTodos = (): Promise<Todo[]> =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data);

    // 自定义钩子
    const useTodos = () => {
      return useQuery<Todo[], Error>({ // 返回 useQuery 的结果
        queryKey: ['todos'],
        queryFn: fetchTodos,
        // staleTime 等配置也可以在这里设置
      });
    };

    export default useTodos;
    ```

2.  `TodoList.tsx` (使用自定义钩子 `useTodos`):

    ```tsx
    // src/react-query/TodoList.tsx
    // 移除了 axios, Todo 接口, fetchTodos 函数的导入和定义
    import useTodos from '../../hooks/useTodos'; // 导入自定义钩子

    const TodoList = () => {
      const { data: todos, error, isLoading } = useTodos(); // 调用自定义钩子

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return (
        <ul>
          {todos?.map((todo) => ( // todo 类型现在由 useTodos 内部的 useQuery 推断
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default TodoList;
    ```

## 13- 使用 React Query DevTools

> 简述：React Query DevTools 是一个用于调试和监控 React Query 查询的强大工具。它作为一个组件集成到应用中，在开发模式下提供一个可视化界面来查看缓存内容、查询状态、手动触发查询操作等。

**知识树**

1.  安装 DevTools:
    - 命令: `npm install @tanstack/react-query-devtools`
2.  集成到应用 (`main.tsx`):
    - 从 `@tanstack/react-query-devtools` 导入 `ReactQueryDevtools` 组件。
        - 注意导入路径，确保选择正确的组件 (通常带有蓝色图标提示，区别于 `@tanstack/react-query` 中的同名类型)。
    - 在 `QueryClientProvider` 内部，通常在 `App` 组件之后，添加 `<ReactQueryDevtools />` 组件。
    - DevTools 仅在开发构建中包含，生产构建时会自动移除。
3.  DevTools 界面与功能:
    - 触发方式：通常在页面角落显示一个 React Query 图标，点击可切换 DevTools 面板的显示/隐藏。
    - 缓存内容查看：
        - 列出当前缓存中的所有查询及其 `queryKey`。
        - 点击某个 `queryKey` 可查看详细信息。
    - 查询详情：
        - `queryKey`。
        - Observers (观察者数量)：正在使用此查询的组件数量。
            - 当组件卸载，观察者数量减少。若减至 0，查询变为 `inactive`。
        - Last Updated (最后更新时间)。
    - 操作按钮：
        - Refetch: 手动重新获取查询数据。
        - Invalidate: 将查询标记为过时 (stale)，通常会导致在下次需要时重新获取。
        - Trigger Loading/Error: 手动模拟加载或错误状态，便于调试 UI。
    - Data Explorer: 显示与当前 `queryKey` 关联的缓存数据内容。
    - Query Explorer: 显示查询对象的完整属性列表，包括状态 (`status`: `loading`, `error`, `success`) 和数据新鲜度 (`dataUpdatedAt`, `isStale()`)。
    - `staleTime`: 查询数据被认为是新鲜的持续时间，默认为 0。
    - `cacheTime`: 非活动查询 (`inactive`) 在被垃圾回收从缓存中移除前保持的时间，默认为 5 分钟。

**代码示例**

1.  安装 DevTools (终端):

    ```bash
    npm install @tanstack/react-query-devtools
    ```

2.  `main.tsx` (集成 DevTools):

    ```tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // 从 devtools 导入
    import App from './App.tsx';
    import './index.css';

    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools /> {/* 添加 DevTools 组件 */}
        </QueryClientProvider>
      </React.StrictMode>,
    );
    ```

## 14- 自定义查询设置

> 简述：React Query 允许通过在创建`QueryClient`时配置`defaultOptions`来全局自定义查询的默认行为，或在单个`useQuery`调用中覆盖这些设置。常用可配置项包括重试次数(`retry`)、缓存时间(`cacheTime`)、数据新鲜期(`staleTime`)以及各种自动重新获取行为的开关。

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
    - `staleTime: number | Infinity`: 数据被认为是新鲜 (fresh) 的持续时间 (毫秒)。
        - 默认值：`0`。数据获取后立即变为过时 (stale)。
        - 过时数据在下次需要时会尝试从后端重新获取，同时可能返回缓存中的过时数据给 UI。
        - 设置为 `Infinity` 表示数据永不过期 (除非手动失效)。
3.  自动重新获取 (Refetching) 行为:
    - React Query 在以下三种情况下默认会自动重新获取过时数据：
        - `refetchOnWindowFocus: boolean`: 窗口重新获得焦点时。默认 `true`。
        - `refetchOnReconnect: boolean`: 网络重新连接时。默认 `true`。
        - `refetchOnMount: boolean`: 组件挂载时 (如果数据已过时)。默认 `true`。
    - 这些行为均可在 `defaultOptions.queries` 或单个 `useQuery` 中配置为 `false` 来禁用。
4.  数据返回策略 (当数据过时):
    - 如果数据已过时 (`staleTime` 已过)，React Query 会尝试从后端获取新数据。
    - 同时，它会立即从缓存中返回当前的过时数据给组件，以快速响应 UI。
    - 当新数据获取成功后，缓存会更新，并通知组件重新渲染以显示最新数据。
5.  按查询配置:
    - 大多数情况下，全局默认设置可能适用。
    - `staleTime` 是最常需要根据具体查询的特性进行单独配置的选项。数据更新不频繁的查询可以设置较长的 `staleTime`。
    - 在 `useQuery` 的配置对象中直接提供这些选项即可覆盖全局默认值。

**代码示例**

1.  全局配置示例 (`main.tsx`):

    ```tsx
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1, // 全局默认重试1次
          cacheTime: 10 * 60 * 1000, // 10分钟缓存时间
          staleTime: 1 * 60 * 1000,  // 1分钟数据新鲜期
          refetchOnWindowFocus: false, // 禁用窗口聚焦时重新获取
          // refetchOnReconnect: true, (默认)
          // refetchOnMount: true, (默认)
        },
      },
    });
    ```

2.  按查询配置示例 (在自定义钩子 `useTodos.ts` 中):
    ```ts
    // src/hooks/useTodos.ts
    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 10 * 60 * 1000, // 此查询的数据新鲜期为10分钟
        // retry: 5, // 可覆盖全局重试次数
      });
    };
    ```
    _视频中最终决定移除全局配置，仅在需要时按查询配置 `staleTime`。_

## 15- 练习：获取数据

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
    - 命令：`npm install @tanstack/react-query`
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
        2.  创建`QueryClient`实例。
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

## 4- 获取数据

> 简述：React Query 使用`useQuery` Hook 来执行数据获取操作。通过配置`queryKey`（用于缓存的唯一标识）和`queryFn`（实际获取数据的函数），`useQuery`会自动处理加载状态、错误、数据缓存及重试等。

**知识树**

1.  `useQuery` Hook：
    - 导入：`import { useQuery } from '@tanstack/react-query';`
    - 用途：用于声明式地获取、缓存和同步异步数据。
    - 配置对象参数：接收一个包含至少`queryKey`和`queryFn`的对象。
2.  `queryKey`：
    - 定义：一个数组，用作查询的唯一标识符，React Query 内部使用它来缓存和管理数据。
    - 结构：
        - 第一个元素通常是描述数据类型的字符串（如`['todos']`）。
        - 可以包含更多元素以区分不同的查询实例（如`['todos', { completed: true }]`或`['todo', todoId]`）。
    - 重要性：`queryKey`的唯一性和稳定性对缓存行为至关重要。
3.  `queryFn`：
    - 定义：一个返回 Promise 的函数，负责实际执行数据获取操作（如 API 调用）。
    - Promise 结果：
        - 成功时：Promise 应 resolve 为获取到的数据。
        - 失败时：Promise 应 reject 或抛出一个错误。
    - 数据提取：通常需要从 HTTP 响应中提取实际数据（如`response.data`）。
    - 可封装性：可以将`queryFn`的逻辑提取到独立的函数中，以提高可读性和复用性。
4.  `useQuery`的返回值：
    - 一个查询对象，包含多个有用的属性，如：
        - `data`: (any | undefined) 查询成功时获取到的数据。
        - `error`: (Error | null) 查询失败时的错误对象。
        - `isLoading`: (boolean) 查询是否正在进行中（首次加载）。
        - `isFetching`: (boolean) 查询是否正在获取数据（包括后台刷新）。
        - `status`: ('loading' | 'error' | 'success') 查询的当前状态。
        - 其他状态和方法：`isSuccess`, `isError`, `refetch`等。
5.  TypeScript 类型支持：
    - 为`axios.get<Todo[]>(...)`等 HTTP 请求库调用指定泛型参数，确保`queryFn`返回的 Promise 类型正确。
    - `useQuery`本身也可以接受泛型参数来指定`data`和`error`的类型，例如`useQuery<Todo[], Error>(...)`。
6.  React Query 的内置优势：
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
3.  模拟慢速网络连接进行测试：
    - 浏览器开发者工具：大多数浏览器（如 Chrome）的 Network（网络）面板提供节流（Throttling）功能，可以选择预设的慢速网络配置（如"Slow 3G"）或自定义。
    - 目的：在开发过程中观察和调试加载状态的 UI 表现。

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

      if (isLoading) return <p>Loading...</p>;
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
    - 安装：`npm install @tanstack/react-query-devtools` (注意包名，视频中可能是旧版名称)。
2.  集成到应用：
    - 导入：`import { ReactQueryDevtools } from '@tanstack/react-query-devtools';` (确保从正确的包路径导入)。
    - 渲染位置：在应用的根组件（如`App`）之后，`QueryClientProvider`内部渲染`ReactQueryDevtools`组件。
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

1.  配置层级：
    - **全局配置**：在创建`QueryClient`实例时，通过`defaultOptions.queries`对象设置所有查询的默认行为。
    - **局部配置**：在调用`useQuery`时，在其配置对象中直接覆盖全局设置或指定特定行为。
2.  常用可配置选项：
    - `retry`: (number | boolean | (failureCount: number, error: TError) => boolean)
        - 定义失败请求的重试次数。默认 3 次。
        - 设为`false`可禁用重试。
    - `cacheTime`: (number)
        - 定义非活动查询（无观察者）在缓存中保留的时长（毫秒）。默认 5 分钟 (`5 * 60 * 1000`)。
        - 超时后，非活动查询的数据会被垃圾回收。
    - `staleTime`: (number)
        - 定义数据在被视为“过时”（stale）之前保持“新鲜”（fresh）的时长（毫秒）。默认 0。
        - 新鲜数据：直接从缓存返回，不触发网络请求。
        - 过时数据：仍会从缓存返回（若存在），但 React Query 会在后台尝试重新获取最新数据。
    - `refetchOnWindowFocus`: (boolean | "always" | ((query: Query) => boolean | "always"))
        - 当浏览器窗口重新获得焦点时，是否自动重新获取过时的数据。默认`true`。
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

> 简述：此练习要求将一个使用传统`useEffect`和`useState`方式获取帖子列表（Posts）的组件，改造成使用 React Query 并通过自定义 Hook (`usePosts`) 来获取数据，应用之前学到的 React Query 核心概念。

**知识树**

1.  练习目标：
    - 创建一个自定义 Hook `usePosts`，封装使用`React Query`获取帖子列表的逻辑。
    - 在`PostList`组件中使用`usePosts` Hook 来获取和展示数据。
    - 处理加载状态和错误状态。
2.  `usePosts.ts` 自定义 Hook 实现：
    - 定义`Post`接口（描述单个帖子对象的结构）。
    - 创建`fetchPosts`函数 (作为`queryFn`)：
        - 使用`axios` (或其他 HTTP 客户端) 从指定 API 端点获取帖子数据。
        - 确保返回一个解析为`Post[]`的 Promise。
    - 在`usePosts`函数内部调用`useQuery<Post[], Error>({...})`：
        - `queryKey`: `['posts']` (或更具体的键)。
        - `queryFn`: `fetchPosts`。
        - 可选配置：设置`staleTime` (如 1 分钟)。
    - 导出`usePosts` Hook。
3.  `PostList.tsx` 组件改造：
    - 移除原有的`useState` (用于`posts`和`error`) 和`useEffect` (用于数据获取)。
    - 导入并调用`usePosts` Hook：`const { data: posts, error, isLoading } = usePosts();`
    - UI 渲染逻辑：
        - 如果`isLoading`为`true`，显示加载指示器。
        - 如果`error`存在，显示错误消息 (`error.message`)。
        - 如果数据加载成功 (`posts`有值)，遍历`posts`数组并渲染列表项。
        - 使用可选链 (`posts?.map(...)`) 处理`posts`可能为`undefined`的情况。
    - 移除未使用的导入。

**代码示例**

1.  `src/hooks/usePosts.ts`

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import axios from 'axios';

    export interface Post {
      id: number;
      title: string;
      body: string;
      userId: number;
    }

    const fetchPosts = (): Promise<Post[]> =>
      axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data);

    const usePosts = () => {
      return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 1 minute
      });
    };

    export default usePosts;
    ```

2.  `src/react-query/PostList.tsx` (改造后)

    ```tsx
    import usePosts from '../hooks/usePosts'; // 导入自定义Hook

    function PostList() {
      const { data: posts, error, isLoading } = usePosts();

      if (isLoading) return <p>Loading posts...</p>;
      if (error) return <p>Error fetching posts: {error.message}</p>;

      return (
        <ul className="list-group">
          {posts?.map(post => (
            <li key={post.id} className="list-group-item">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
    }
    export default PostList;
    ```

## 11- 参数化查询

> 简述：参数化查询允许根据动态参数（如用户 ID）从 API 获取特定子集的数据。在 React Query 中，通过将这些参数包含在`queryKey`中，可以实现当参数变化时自动重新获取数据，并为不同参数组合的数据创建独立的缓存条目。

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
        - `queryKey`应包含`userId`，以便 React Query 能够区分不同用户的帖子数据并进行缓存。
        - 层级化`queryKey`结构：推荐使用类似 API 路径的结构，如`['users', userId, 'posts']`。如果`userId`未定义，则`queryKey`可以是`['posts']`。
        - 当`queryKey`中的任何部分（如此处的`userId`）发生变化时，React Query 会自动重新执行查询。
    - **动态`queryFn`**：
        - `queryFn`（如`fetchPosts`）需要根据传入的`userId`调整 API 请求。
        - 通常通过在 API 请求的 URL 中添加查询参数（如`?userId=1`）或路径参数（如`/users/1/posts`）来实现。
        - Axios 等库允许通过`params`配置对象传递查询参数。
3.  React Query DevTools 观察：
    - 当选择不同用户时，DevTools 中会显示对应`queryKey`的缓存条目。
    - 未被当前`userId`使用的缓存条目会变为`inactive`。
    - 切换回已缓存过的`userId`时，数据会立即从缓存加载，无需网络请求（如果数据未过时）。
4.  `queryKey`结构优化：
    - 避免在`queryKey`中出现`null`或`undefined`等值，可能导致不直观的键名。
    - 可以使用条件逻辑来构造`queryKey`，例如：`userId ? ['users', userId, 'posts'] : ['posts']`。

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
    - **查询对象 (`PostQuery`)**：
        - 创建一个接口（如`PostQuery`）来封装所有查询参数（`page`, `pageSize`, 以及未来可能的其他过滤条件）。
        - 将此查询对象作为参数传递给自定义查询 Hook（如`usePosts`）。
    - **动态`queryKey`**：
        - `queryKey`应包含整个查询对象，以确保查询参数变化时能触发数据重新获取并正确缓存。
        - 示例：`queryKey: ['posts', query]` (其中`query`是`PostQuery`实例)。
    - **动态`queryFn`**：
        - `queryFn`需根据查询对象中的`page`和`pageSize`来构建 API 请求。
        - API 端点通常支持通过查询参数（如`_start`, `_limit` for JSONPlaceholder）来控制分页。
        - 计算`_start`：`(query.page - 1) * query.pageSize`。
    - **UI 交互**：
        - 提供“上一页”和“下一页”按钮。
        - 按钮的`onClick`事件处理器负责更新`page`状态。
        - 禁用逻辑：第一页时禁用“上一页”，最后一页时禁用“下一页”（如果后端 API 提供总记录数信息）。
3.  优化用户体验 (`keepPreviousData`)：
    - 问题：切换页面时，如果新数据加载需要时间，UI 可能会短暂显示加载状态，导致内容跳动。
    - `keepPreviousData: true`：在`useQuery`的配置中设置此选项。
    - 效果：当查询参数变化导致重新获取数据时，React Query 会继续显示上一份有效数据，直到新数据加载完成。新数据加载完成后，UI 会平滑过渡到新数据，避免了加载状态的闪烁和内容跳动。
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
    - `queryFn`: 接收一个包含`pageParam`属性的对象作为参数。`pageParam`是下一页的标识（如页码）。`queryFn`应使用此`pageParam`获取对应页的数据。
        - 初始调用：`pageParam`通常为`undefined`或初始值，`queryFn`应获取第一页数据。
    - `getNextPageParam`: (必需) 一个函数，用于确定如何从最后一页的数据和所有已加载页面的数据中计算出下一页的`pageParam`。
        - 参数：`(lastPage, allPages)`
        - 返回值：下一页的`pageParam`。如果已无更多数据，应返回`undefined`。
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

## 15- 变更数据 (useMutation)

> 简述：`useMutation` Hook 是 React Query 中用于执行数据变更操作（如创建、更新、删除）的核心工具。它接收一个执行实际变更的函数，并返回一个包含触发变更方法及状态属性的对象。

**知识树**

1.  `useMutation` Hook：
    - 导入：`import { useMutation } from '@tanstack/react-query';`
    - 用途：管理异步的、会改变服务器状态的操作。
    - 配置对象参数：接收一个包含至少`mutationFn`的对象。
2.  `mutationFn`：
    - 定义：一个返回 Promise 的函数，负责实际执行数据变更操作（如发送 POST 请求到 API）。
    - 参数：接收一个变量（通常是待提交的数据对象）作为其参数。
    - Promise 结果：
        - 成功时：Promise 应 resolve 为服务器返回的数据（可选，但常用于获取创建/更新后的对象）。
        - 失败时：Promise 应 reject 或抛出一个错误。
3.  `useMutation`的返回值：
    - 一个变更对象，常用属性和方法包括：
        - `mutate`: (函数) 调用此函数来触发变更操作。它接收一个变量作为参数，此变量会传递给`mutationFn`。
        - `mutateAsync`: (函数) 与`mutate`类似，但返回一个 Promise，允许更灵活地处理成功或失败。
        - `data`: (any | undefined) 变更成功时，`mutationFn`的 Promise resolve 的值。
        - `error`: (Error | null) 变更失败时的错误对象。
        - `isLoading`: (boolean) 变更是否正在进行中。
        - `isSuccess`: (boolean) 变更是否已成功完成。
        - `isError`: (boolean) 变更是否已失败。
        - `status`: ('idle' | 'loading' | 'error' | 'success') 变更的当前状态。
        - `reset`: (函数) 将变更状态重置回`idle`。
4.  回调函数：
    - `onSuccess: ( (data, variables, context) => void | Promise<void> ) 变更成功后调用。
        - `data`: `mutationFn`成功时返回的数据。
        - `variables`: 调用`mutate`时传递给`mutationFn`的变量。
        - `context`: 由`onMutate`返回的上下文对象。
    - `onError: ( (error, variables, context) => void | Promise<void> ) 变更失败后调用。
    - `onSettled: ( (dataOrError, error, variables, context) => void | Promise<void> ) 变更无论成功或失败都会调用。
    - `onMutate: ( (variables) => context | Promise<context> ) 在`mutationFn`执行前调用，常用于乐观更新。
5.  与查询缓存的交互：
    - **缓存失效 (Invalidation)**：变更成功后，通常需要使相关的查询缓存失效，以促使 React Query 重新获取最新数据。
        - 使用`useQueryClient` Hook 获取`queryClient`实例。
        - 在`onSuccess`回调中调用`queryClient.invalidateQueries(['queryKeyToInvalidate'])`。
    - **直接更新缓存 (Manual Cache Updates)**：对于某些场景（如 JSONPlaceholder 这类不真实保存数据的 API），或为了更精细的控制，可以在`onSuccess`回调中使用`queryClient.setQueryData(['queryKey'], updateFn)`直接修改缓存中的数据。
        - `updateFn`接收旧的缓存数据，返回新的缓存数据。
6.  TypeScript 类型支持：
    - `useMutation<TData, TError, TVariables, TContext>(...)`
        - `TData`: `mutationFn`成功时返回的数据类型。
        - `TError`: 错误类型。
        - `TVariables`: 调用`mutate`时传递给`mutationFn`的变量类型。
        - `TContext`: `onMutate`返回的上下文对象类型。

**代码示例**

1.  使用`useMutation`添加新的 Todo

    ```tsx
    // ToDoForm.tsx
    import React, { useRef } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Todo } from '../hooks/useTodos'; // 假设Todo接口已定义

    export interface Todo { id: number; title: string; completed: boolean; userId: number; }


    // 模拟的mutationFn
    const addTodoAPI = (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
      return axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => res.data);
    };

    function TodoForm() {
      const titleRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient();

      const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>(
        addTodoAPI, // mutationFn
        {
          onSuccess: (savedTodo, newTodoVariables) => {
            console.log('Todo added successfully:', savedTodo);

            // 方式一：缓存失效 (JSONPlaceholder不适用此方式看到效果)
            // queryClient.invalidateQueries(['todos']);

            // 方式二：直接更新缓存 (适用于JSONPlaceholder)
            queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
              [savedTodo, ...oldTodos] // 将新todo添加到列表顶部
            );
          },
          onError: (error) => {
            console.error('Error adding todo:', error.message);
          }
        }
      );

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (titleRef.current?.value) {
          const newTodoData: Omit<Todo, 'id'> = {
            title: titleRef.current.value,
            completed: false,
            userId: 1, // 示例userId
          };
          addTodoMutation.mutate(newTodoData);
          titleRef.current.value = ''; // 清空输入框
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="input-group">
            <input ref={titleRef} type="text" className="form-control" placeholder="New Todo" />
            <button type="submit" className="btn btn-primary" disabled={addTodoMutation.isLoading}>
              {addTodoMutation.isLoading ? 'Adding...' : 'Add Todo'}
            </button>
          </div>
          {addTodoMutation.isError && <p className="text-danger mt-1">{addTodoMutation.error?.message}</p>}
        </form>
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
    // const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>( /* ... */ );

    // ...
    // {addTodoMutation.isError && (
    //   <div className="alert alert-danger mt-2" role="alert">
    //     {addTodoMutation.error?.message || 'An unexpected error occurred.'}
    //   </div>
    // )}
    // ...
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
    // const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>>(
    //   addTodoAPI,
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

    // ...
    // <button type="submit" className="btn btn-primary" disabled={addTodoMutation.isLoading}>
    //   {addTodoMutation.isLoading ? 'Adding...' : 'Add Todo'}
    // </button>
    // ...
    ```

## 18- 乐观更新 (Optimistic Updates)

> 简述：乐观更新是一种 UI 优化策略，它假设数据变更操作会成功，并立即更新 UI 以反映预期结果，无需等待服务器确认。如果操作最终失败，则回滚 UI 到先前状态。这能显著提升用户感知的应用响应速度。

**知识树**

1.  乐观更新的核心思想：
    - 立即反馈：用户执行操作后，UI 立即更新，仿佛操作已成功。
    - 后台处理：实际的服务器请求在后台异步进行。
    - 成功：服务器确认成功，UI 保持不变（因为它已是最新状态，或用服务器返回的精确数据微调）。
    - 失败：服务器返回错误，UI 回滚到操作前的状态，并通常显示错误信息。
2.  React Query 中实现乐观更新的步骤 (`useMutation`回调)：
    - **`onMutate((newVariables) => context)`**：
        - 在`mutationFn`执行前调用。
        - **立即更新缓存**：使用`queryClient.setQueryData`手动修改相关查询的缓存数据，以模拟成功后的状态。
        - **保存先前状态**：使用`queryClient.getQueryData`获取更新前的缓存数据，并将其作为上下文对象 (`context`) 返回。此上下文将传递给`onError`和`onSuccess`。
        - （可选）取消可能冲突的进行中查询：`queryClient.cancelQueries(['queryKey'])`。
    - **`onError((error, newVariables, context) => void)`**：
        - 当`mutationFn`失败时调用。
        - **回滚缓存**：如果`context`中保存了先前状态，使用`queryClient.setQueryData`将缓存恢复到该先前状态。
    - **`onSuccess((data, newVariables, context) => void)`**：
        - 当`mutationFn`成功时调用。
        - （可选）如果服务器返回的数据比乐观更新时使用的本地数据更准确（如包含服务器生成的 ID），则可以使用服务器返回的`data`再次调用`queryClient.setQueryData`来精确更新缓存。
        - （可选）如果之前在`onMutate`中取消了查询，可以在此重新获取或确保数据一致。
3.  上下文对象 (`context`)：
    - 作用：在`onMutate`, `onError`, `onSuccess`之间传递数据，特别是用于存储回滚所需的前一状态。
    - 类型定义：为`useMutation`的第四个泛型参数`TContext`指定上下文对象的类型接口。
4.  注意事项：
    - 复杂性：乐观更新的实现比标准变更要复杂，需要仔细处理各种状态和回调。
    - 适用场景：适用于那些成功率较高且即时反馈对用户体验提升明显的变更操作。
    - 数据一致性：确保乐观更新的 UI 与服务器最终状态一致，尤其是在并发操作或服务器端逻辑复杂时。

**代码示例**

1.  使用`useMutation`实现乐观更新添加 Todo

    ```tsx
    // ToDoForm.tsx (乐观更新版本)
    import React, { useRef } from 'react';
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Todo } from '../hooks/useTodos';

    export interface Todo { id: number; title: string; completed: boolean; userId: number; }


    interface AddTodoContext { // 上下文对象类型
      previousTodos?: Todo[];
    }

    const addTodoOptimisticAPI = (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
      // 模拟API调用
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 模拟成功或失败
          if (Math.random() > 0.3) { // 70% 成功率
            const savedTodo: Todo = { ...newTodo, id: Date.now() }; // 模拟服务器生成ID
            resolve(savedTodo);
          } else {
            reject(new Error('Failed to add todo on server.'));
          }
        }, 1000);
      });
    };


    function TodoFormOptimistic() {
      const titleRef = useRef<HTMLInputElement>(null);
      const queryClient = useQueryClient();

      const addTodoMutation = useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>(
        addTodoOptimisticAPI,
        {
          onMutate: async (newTodoData) => {
            // 1. 取消可能冲突的查询 (可选)
            await queryClient.cancelQueries(['todos']);

            // 2. 获取当前缓存数据作为先前状态
            const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

            // 3. 乐观地更新缓存
            const optimisticTodo: Todo = {
                ...newTodoData,
                id: Date.now(), // 临时客户端ID，会被服务器ID替换
                completed: false, // 确保默认值
            };
            queryClient.setQueryData<Todo[]>(['todos'], (old = []) => [optimisticTodo, ...old]);

            // 4. 返回包含先前状态的上下文
            return { previousTodos };
          },
          onError: (error, newTodoData, context) => {
            console.error('Optimistic update failed, rolling back:', error.message);
            // 5. 如果有先前状态，则回滚缓存
            if (context?.previousTodos) {
              queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
            }
          },
          onSuccess: (savedTodoFromServer, newTodoData, context) => {
            console.log('Optimistic update succeeded on server.');
            // 6. (可选) 用服务器返回的精确数据更新缓存中的对应项
            //    这里需要更复杂的逻辑来替换临时客户端ID的项
            //    简单起见，如果ID不同，可以重新设置整个列表，或精确查找替换
            queryClient.setQueryData<Todo[]>(['todos'], (old = []) =>
              old.map(todo => todo.id === context?.previousTodos?.find(pt => pt.title === newTodoData.title)?.id // 查找临时项
                               ? savedTodoFromServer // 替换为服务器返回的项
                               : todo)
            );
            // 或者，如果onMutate中添加的临时ID能唯一确定，则：
            // queryClient.setQueryData<Todo[]>(['todos'], (old = []) =>
            //   old.map(todo => todo.id === /* 临时ID */ ? savedTodoFromServer : todo)
            // );
          },
          onSettled: () => {
            // 7. (可选) 无论成功或失败，都重新获取'todos'查询以确保最终一致性
            // queryClient.invalidateQueries(['todos']);
          },
        }
      );
      // ... (handleSubmit和JSX与之前类似, 但UI更新会立即发生)
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (titleRef.current?.value) {
          const newTodoData: Omit<Todo, 'id'> = {
            title: titleRef.current.value,
            completed: false,
            userId: 1,
          };
          addTodoMutation.mutate(newTodoData);
          if (titleRef.current) titleRef.current.value = '';
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-3">
          {/* ... (input and button JSX, button text/disabled state based on addTodoMutation.isLoading) ... */}
           <div className="input-group">
            <input ref={titleRef} type="text" className="form-control" placeholder="New Todo (Optimistic)" />
            <button type="submit" className="btn btn-info" disabled={addTodoMutation.isLoading}>
              {addTodoMutation.isLoading ? 'Adding...' : 'Add Optimistically'}
            </button>
          </div>
          {addTodoMutation.isError && <p className="text-danger mt-1">{addTodoMutation.error?.message}</p>}
        </form>
      );
    }
    export default TodoFormOptimistic;
    ```

## 19- 创建自定义变更 Hook

> 简述：为了提高代码的模块化、可复用性和可维护性，应将与特定数据变更操作相关的`useMutation`逻辑（包括`mutationFn`、回调函数如`onMutate`, `onSuccess`, `onError`等）封装到自定义 Hook 中。

**知识树**

1.  关注点分离的必要性：
    - 问题：直接在 UI 组件中使用复杂的`useMutation`配置（尤其是包含乐观更新逻辑时）会导致组件臃肿，混合了 UI 逻辑和数据管理逻辑。
    - 目标：UI 组件应主要负责渲染和用户交互，数据变更的复杂细节应由专门的 Hook 处理。
2.  自定义变更 Hook 的创建：
    - 命名约定：以`use`开头，后跟动词和操作对象，如`useAddTodo`、`useUpdatePost`。
    - 文件组织：通常放在`hooks`目录下。
    - 实现：
        1.  将原组件中与`useMutation`相关的代码（`mutationFn`、类型定义、回调逻辑、`queryClient`的使用等）移至自定义 Hook。
        2.  自定义 Hook 内部调用`useMutation`。
        3.  自定义 Hook 返回`useMutation`的结果（整个变更对象或其解构后的部分）。
3.  处理 UI 相关的副作用：
    - 问题：自定义 Hook 不应直接操作 UI（如清空输入框），因为它应保持通用和可复用。
    - 解决方案：自定义 Hook 可以接受一个回调函数作为参数（如`onAddSuccess`），在变更成功等特定时机调用此回调，由调用方（UI 组件）在此回调中执行 UI 相关的操作。
4.  共享常量与类型：
    - `queryKey`：应定义为常量并在查询 Hook 和变更 Hook 之间共享，避免硬编码和拼写错误。
    - 数据接口/类型：如`Todo`接口、`AddTodoContext`接口，应定义在共享位置或随 Hook 一起导出，供调用方使用。
5.  优势：
    - **代码复用**：多个组件如果需要执行相同的变更操作，可以复用同一个自定义变更 Hook。
    - **可维护性**：变更逻辑集中管理，修改时只需在一处进行。
    - **可测试性**：自定义 Hook 可以独立于 UI 组件进行测试。
    - **组件简洁**：UI 组件调用自定义 Hook，代码更清晰，职责更单一。

**代码示例**

1.  创建自定义 Hook `useAddTodo.ts`

    ```ts
    // src/hooks/useAddTodo.ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import axios from 'axios';
    // import { Todo } from './useTodos'; // 假设Todo接口从useTodos导入或共享
    // import { CACHE_KEY_TODOS } from '../react-query/constants'; // 假设queryKey常量已定义

    export interface Todo { id: number; title: string; completed: boolean; userId: number; } // 临时定义
    export const CACHE_KEY_TODOS = ['todos']; // 临时定义

    interface AddTodoContext {
      previousTodos?: Todo[];
    }

    // 假设addTodoAPI与之前定义类似
    const addTodoAPI = (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
      return axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => res.data);
    };


    interface UseAddTodoOptions {
      onAdd?: () => void; // UI相关的成功回调
    }

    const useAddTodo = (options?: UseAddTodoOptions) => {
      const queryClient = useQueryClient();

      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>(
        addTodoAPI,
        {
          onMutate: async (newTodoData) => {
            // ... (乐观更新的onMutate逻辑，使用CACHE_KEY_TODOS)
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
            const optimisticTodo: Todo = { ...newTodoData, id: Date.now(), completed: false, userId: 1 };
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (old = []) => [optimisticTodo, ...old]);
            return { previousTodos };
          },
          onSuccess: (savedTodo, newTodoData, context) => {
            // ... (乐观更新的onSuccess逻辑，使用CACHE_KEY_TODOS)
            if (options?.onAdd) {
              options.onAdd(); // 调用UI组件传递的回调
            }
          },
          onError: (error, newTodoData, context) => {
            // ... (乐观更新的onError逻辑，使用CACHE_KEY_TODOS)
            if (context?.previousTodos) {
              queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
            }
          },
        }
      );
    };

    export default useAddTodo;
    ```

2.  在组件中使用自定义变更 Hook `ToDoForm.tsx`

    ```tsx
    // src/react-query/ToDoForm.tsx
    import React, { useRef } from 'react';
    import useAddTodo from '../hooks/useAddTodo'; // 导入自定义Hook

    function TodoFormWithCustomHook() {
      const titleRef = useRef<HTMLInputElement>(null);
      const addTodoMutation = useAddTodo({ // 使用自定义Hook
        onAdd: () => { // UI相关的成功回调
          if (titleRef.current) {
            titleRef.current.value = '';
          }
        }
      });

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (titleRef.current?.value) {
          addTodoMutation.mutate({
            title: titleRef.current.value,
            // completed and userId would be set by API or default in mutationFn
          });
        }
      };
      // ... (JSX与之前类似，使用addTodoMutation的状态)
      return (
         <form onSubmit={handleSubmit} className="mb-3">
          <div className="input-group">
            <input ref={titleRef} type="text" className="form-control" placeholder="New Todo (Custom Hook)" />
            <button type="submit" className="btn btn-success" disabled={addTodoMutation.isLoading}>
              {addTodoMutation.isLoading ? 'Adding...' : 'Add with Hook'}
            </button>
          </div>
          {addTodoMutation.isError && <p className="text-danger mt-1">{addTodoMutation.error?.message}</p>}
        </form>
      );
    }
    export default TodoFormWithCustomHook;
    ```

## 20- 创建可复用的 API 客户端

> 简述：为了进一步分离关注点并减少代码重复，可以创建一个通用的 API 客户端类或模块，封装底层的 HTTP 请求逻辑（如使用 Axios）。自定义查询和变更 Hook 则依赖此 API 客户端来执行实际的网络通信。

**知识树**

1.  API 客户端的职责：
    - 封装 HTTP 请求的细节（如 GET, POST, PUT, DELETE 等）。
    - 处理基础 URL、请求头、错误转换等通用逻辑。
    - 提供类型安全的方法供上层（如自定义 Hooks）调用。
2.  创建 API 客户端类：
    - **构造函数**：接收 API 端点（endpoint）作为参数，用于指定操作的资源路径。
    - **泛型参数** (`<T>`)：使 API 客户端能够处理不同类型的数据实体。`T`代表实体类型（如`Todo`, `Post`）。
    - **方法**：
        - `getAll(): Promise<T[]>`：发送 GET 请求获取资源列表。
        - `post(data: T): Promise<T>` (或 `Omit<T, 'id'>` 作为输入)：发送 POST 请求创建新资源。
        - （可扩展）`get(id: number | string): Promise<T>`、`update(id: number | string, data: Partial<T>): Promise<T>`、`delete(id: number | string): Promise<void>`。
    - **Axios 实例**：
        - 创建一个配置了基础 URL（如`https://jsonplaceholder.typicode.com`）的 Axios 实例，避免在每个请求中重复完整 URL。
        - `axios.create({ baseURL: '...' })`
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
5.  优势：
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

      post = (data: Omit<T, 'id'> | T): Promise<T> => { // 允许传入不带id的对象用于创建
        return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
      };

      // 可以添加更多方法如 getOne, update, delete
    }

    export default ApiClient;
    ```

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
        queryFn: apiClient.getAll, // 使用ApiClient的方法
        staleTime: 10 * 60 * 1000,
      });
    };

    export default useTodos;
    ```

3.  `src/hooks/useAddTodo.ts` (使用 ApiClient)

    ```ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import ApiClient from '../services/apiClient';
    // import { Todo, AddTodoContext } from './interfaces'; // 假设接口已定义
    // import { CACHE_KEY_TODOS } from '../react-query/constants';

    export interface Todo { id: number; title: string; completed: boolean; userId: number; } // 临时定义
    export const CACHE_KEY_TODOS = ['todos']; // 临时定义
    interface AddTodoContext { previousTodos?: Todo[]; } // 临时定义


    const apiClient = new ApiClient<Todo>('/todos');

    interface UseAddTodoOptions {
      onAdd?: () => void;
    }

    const useAddTodo = (options?: UseAddTodoOptions) => {
      const queryClient = useQueryClient();

      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>(
        apiClient.post, // 使用ApiClient的方法
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

> 简述：通过将特定资源（如 Todos）的 API 客户端实例封装在一个专门的服务模块中（如`todoService.ts`），可以消除在多个自定义 Hook 中重复创建和配置 API 客户端实例的问题，进一步提升代码的模块化和可维护性。

**知识树**

1.  问题背景：
    - 在多个自定义 Hook（如`useTodos`, `useAddTodo`）中，都独立创建了针对同一资源（如`/todos`端点）的`ApiClient`实例。
    - 这导致了端点 URL 和实体类型（如`Todo`接口）的重复定义。
2.  解决方案：创建特定资源的服务模块。
    - 文件组织：在`services`目录下为每种资源创建一个服务文件，如`todoService.ts`。
    - 服务模块职责：
        1.  导入`ApiClient`类。
        2.  导入或定义该资源对应的实体接口（如`Todo`接口）。将接口定义移至服务文件，使其成为该资源类型的权威来源。
        3.  在服务模块内部创建并配置一个针对该特定资源的`ApiClient`实例。
            `const todoApiClient = new ApiClient<Todo>('/todos');`
        4.  将此预配置的`ApiClient`实例作为默认对象导出。
            `export default todoApiClient;`
3.  在自定义 Hooks 中使用服务模块：
    - 移除 Hook 内部的`ApiClient`实例化代码。
    - 导入预配置的服务实例：`import todoService from '../services/todoService';`
    - 导入实体接口：`import { Todo } from '../services/todoService';` (如果接口在服务文件中定义并导出)。
    - 使用服务实例的方法：将`queryFn`或`mutationFn`直接设置为服务实例对应的方法引用，如`queryFn: todoService.getAll`。
4.  优势：
    - **单一实例**：特定资源的 API 交互逻辑（端点、类型）集中配置于服务模块，全局共享一个实例。
    - **消除重复**：避免了在多个 Hook 中重复端点 URL 和类型参数。
    - **可维护性**：修改资源端点或相关配置只需在服务模块一处进行。
    - **类型权威**：实体接口定义在服务模块，成为该资源类型的单一真实来源。

**代码示例**

1.  `src/services/todoService.ts`

    ```ts
    import ApiClient from './apiClient'; // 假设ApiClient在同级或上级目录

    // 将Todo接口定义移至此处
    export interface Todo {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    }

    // 创建并导出预配置的ApiClient实例
    const todoService = new ApiClient<Todo>('/todos');
    export default todoService;
    ```

2.  `src/hooks/useTodos.ts` (使用`todoService`)

    ```ts
    import { useQuery } from '@tanstack/react-query';
    import todoService, { Todo } from '../services/todoService'; // 导入服务和接口
    import { CACHE_KEY_TODOS } from '../react-query/constants'; // 假设常量已定义

    const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll, // 使用服务实例的方法
        staleTime: 10 * 60 * 1000,
      });
    };

    export default useTodos;
    ```

3.  `src/hooks/useAddTodo.ts` (使用`todoService`)

    ```ts
    import { useMutation, useQueryClient } from '@tanstack/react-query';
    import todoService, { Todo } from '../services/todoService';
    import { CACHE_KEY_TODOS } from '../react-query/constants';

    interface AddTodoContext { previousTodos?: Todo[]; }
    interface UseAddTodoOptions { onAdd?: () => void; }


    const useAddTodo = (options?: UseAddTodoOptions) => {
      const queryClient = useQueryClient();

      return useMutation<Todo, Error, Omit<Todo, 'id'>, AddTodoContext>(
        (newTodo) => todoService.post(newTodo), // 使用服务实例的方法
        {
          onMutate: async (newTodoData) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
            const optimisticTodo: Todo = { ...newTodoData, id: Date.now(), completed: false, userId: 1 };
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (old = []) => [optimisticTodo, ...old]);
            return { previousTodos };
          },
          onSuccess: (savedTodo, newTodoData, context) => {
            if (options?.onAdd) options.onAdd();
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (old = []) =>
              old.map(todo => {
                const tempOptimisticItem = context?.previousTodos?.find(pt => pt.title === newTodoData.title && !pt.id);
                if (tempOptimisticItem && todo.id === tempOptimisticItem.id) {
                    return savedTodo;
                }
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

## 22- 理解应用分层

> 简述：一个组织良好的 React 应用通常采用分层架构，每一层负责特定的功能。这种分层有助于代码的模块化、可维护性和可扩展性。典型的分层包括 API 客户端、HTTP 服务、自定义 React Query Hooks 以及 UI 组件。

**知识树**

1.  应用分层架构概述：
    - 目的：将复杂应用分解为职责清晰、低耦合的模块。
    - 益处：提高代码可理解性、可维护性、可测试性和可扩展性。
2.  典型分层结构（自底向上）：
    - **API 客户端 (ApiClient)**：
        - 职责：处理底层的 HTTP 请求发送和响应接收。封装了与特定 HTTP 库（如 Axios）的交互细节，如设置基础 URL、请求头、错误处理等。
        - 通用性：设计为可用于访问任何 API 端点。
    - **HTTP 服务 (HTTP Services)**：
        - 职责：基于 API 客户端，为应用中特定类型的资源（如 Todos, Posts, Users）提供专用的数据访问接口。
        - 实现：通常是 API 客户端类的预配置实例，指定了特定资源的端点和数据类型。例如，`todoService`是`ApiClient<Todo>`的实例，配置了`/todos`端点。
        - 关注点：封装了与特定资源相关的 API 交互逻辑。
    - **自定义 React Query Hooks (Custom Hooks)**：
        - 职责：利用 HTTP 服务来获取和变更数据，并集成 React Query 的功能（如缓存管理、状态同步、乐观更新等）。
        - 实现：封装了`useQuery`和`useMutation`的调用，以及相关的`queryKey`、`queryFn`/`mutationFn`和回调逻辑。
        - 关注点：连接 React Query 与数据服务，为 UI 组件提供简洁的数据访问和变更接口。
    - **UI 组件 (Components)**：
        - 职责：负责用户界面的展示和用户交互的响应。
        - 数据交互：通过调用自定义 React Query Hooks 来获取数据和触发数据变更。
        - 关注点：UI 渲染、用户输入处理、调用 Hooks。
3.  分层优势总结：
    - **单一职责原则**：每层专注于其核心任务。
    - **高内聚，低耦合**：层内功能紧密相关，层间依赖清晰明确。
    - **可替换性**：例如，可以更换底层的 HTTP 库（在 API 客户端层修改）而不影响上层逻辑。
    - **可测试性**：各层可以独立进行单元测试或集成测试。

**代码示例**

(本节为架构概念描述，代码已在前面章节中按此分层思想逐步构建。)

- `ApiClient.ts` (底层 HTTP 交互)
- `todoService.ts` (特定资源的服务，使用 ApiClient)
- `useTodos.ts`, `useAddTodo.ts` (自定义 Hooks，使用 todoService，集成 React Query)
- `TodoList.tsx`, `TodoForm.tsx` (UI 组件，使用自定义 Hooks)

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
