明白了。我将为你撰写一份详细的中文项目文档，围绕 GitHub 上的 "[https://github.com/mosh-hamedani/game-hub](https://github.com/mosh-hamedani/game-hub)" 项目，重点聚焦于 React/TypeScript 的实践学习，包括：

- 项目的整体结构
- 核心技术点
- 主要代码模块解析
- 与课程视频（约 3 小时）配套的学习建议：如何高效安排看视频、敲代码和做笔记的时间；如何跟着视频有效学习，提升 TypeScript 与 React 的实战能力

完成后我会通知你，文档中将包含结构清晰的模块讲解和适用于工程师学习的实践方法建议。

## GameHub 项目学习文档

### 项目简介和结构概览

**项目简介：**GameHub 是一个电子游戏发现平台，用户可以通过该网站按平台、游戏类型等条件筛选和搜索新游戏。这个项目源自 Mosh Hamedani 的 React 实战课程，是一个练习 React 和 TypeScript 的完整项目。在此项目中，你将学习构建一个响应式的前端应用，包括游戏列表展示、筛选搜索功能，以及夜间模式切换等实用特性。

**主要功能：**本项目具备以下功能特色：

- **游戏筛选和搜索：**用户可以按照关键词搜索游戏，或通过选择游戏平台和游戏类型来过滤游戏列表，使得用户能够快速找到符合偏好的游戏。
- **分类筛选：**提供按*游戏类型*（Genre）和*游戏平台*筛选的侧边栏，支持多条件组合筛选游戏列表。
- **排序与分页：**支持按评价、发布日期等条件对游戏列表进行排序。此外，游戏列表默认分页加载，支持“加载更多”或无限滚动查看更多游戏。
- **游戏详情：**点击任意游戏卡片可以查看游戏详情页面，展示该游戏的详细信息（描述、评分、预告视频、截图等）。
- **深色/浅色模式：**应用支持一键切换深色和浅色主题，利用 Chakra UI 提供的外观切换功能，提升用户体验。

**项目结构：**项目使用 **Vite** 构建工具初始化，源码主要位于 `src/` 目录下，结构清晰且遵循组件化设计思想。核心目录和文件包括：

```bash
src/
├─ main.tsx              # 应用入口，创建 Root 根组件并注入页面
├─ App.tsx               # 应用根组件，配置全局布局和路由
├─ components/           # 通用组件目录（导航栏、游戏卡片等）
│   ├─ NavBar.tsx        # 导航栏组件（含搜索框、主题切换）
│   ├─ GameGrid.tsx      # 游戏网格列表组件（主要内容区域）
│   ├─ GameCard.tsx      # 单个游戏卡片组件（显示游戏封面等信息）
│   ├─ GenreList.tsx     # 游戏类型列表组件（侧边筛选栏）
│   ├─ PlatformSelector.tsx  # 平台筛选下拉组件
│   ├─ SortSelector.tsx      # 排序选项下拉组件
│   └─ ...               # 其他可复用组件
├─ pages/                # 页面级组件（如果有多页面，比如游戏详情页）
│   └─ GameDetail.tsx    # 游戏详情页面组件
├─ hooks/                # 自定义 Hook（如 useGames 用于获取游戏数据等）
├─ services/             # 服务模块（如 API 客户端配置）
│   └─ api-client.ts     # Axios 实例配置，用于与 RAWG 游戏API通信
├─ store/                # 全局状态管理（如 Zustand 状态仓库定义）
│   └─ useGameQueryStore.ts # 使用 Zustand 定义的游戏查询状态
└─ types/                # TypeScript 类型定义（如游戏数据接口定义等）
```

以上结构可能会根据实际实现略有调整，但大体包含了应用初始化、组件、状态管理和服务等模块。通过清晰的目录划分，初学者可以快速找到相关代码的位置。例如，`main.tsx` 加载根组件 `App.tsx`，而大部分 UI 由 `components/` 内的子组件组成；数据获取通过 `hooks/` 中的自定义 Hook 封装，状态共享通过 `store/` 中的 Zustand 全局状态来实现。

### 主要技术栈说明

本项目采用了现代前端开发的主流技术栈，涵盖库和工具包括 **React、TypeScript、Vite、Chakra UI、Zustand** 等。下面对各项技术及其在项目中的作用做简要说明：

1. **React 18：**React 是一个用于构建用户界面的 JavaScript 库。在本项目中，我们使用 React 来构建组件化的界面，将页面拆分为可重用的组件（如导航栏、筛选菜单、游戏卡片等），并通过 React 的声明式 UI 和状态机制来管理界面更新。React 18 提供了更高效的渲染机制，让应用在更新大量数据时性能更佳。
2. **TypeScript：**TypeScript 是在 JavaScript 基础上添加静态类型的编程语言。项目全程采用 TypeScript 编写，使我们在开发时就能捕获许多错误，并获得更智能的 IDE 提示。本项目为游戏数据、筛选选项等定义了明确的接口（interface）和类型，有助于提高代码的可读性和可靠性。例如，定义 `Game`、`Genre` 等接口来约束 API 返回的数据结构，能确保组件在访问这些数据时有正确的属性和类型提示。
3. **Vite：**Vite 是一种现代前端构建工具，提供极速的开发服务器和构建体验。相较于传统的构建工具（如 Webpack），Vite 在本项目中让我们享受更快的热更新和更简洁的配置。通过 Vite，我们可以快速启动开发环境 (`npm run dev`) 查看项目运行效果，并在保存代码时即时看到变更，无需长时间等待编译。这极大提高了开发效率，尤其适合练习和课堂项目。
4. **Chakra UI：**Chakra UI 是一个简单、模块化且易用的 React 组件库，提供了构建 React 应用所需的常用组件和样式解决方案。在 GameHub 项目中，Chakra UI 扮演重要角色：

    - 提供**现成的 UI 组件**：我们使用 Chakra 的布局组件（如 `Grid`, `Flex`, `Box`）、表单组件（如 `Input` 输入框用于搜索）、数据展示组件（如 `Image` 图像显示游戏封面、`Badge` 显示分级等）来快速构建界面。
    - **响应式设计和样式方便性**：Chakra 内置响应式设计属性，例如使用 `Show`/`Hide` 组件或直接在栅格布局中指定不同屏幕尺寸的显示行为。本项目利用这些特性实现了在大屏幕上显示侧边栏（类型列表），小屏幕上隐藏侧边栏的响应式布局。此外，Chakra 提供的样式道具（style props）让我们无需编写繁琐的 CSS 即可调整外观，如 `p={4}` 控制内边距、`backgroundColor` 设置背景等，保持样式的一致和可维护。
    - **主题和深色模式**：Chakra 自带主题定制和 `ColorModeProvider`，使得实现深色/浅色模式切换非常容易。在 `NavBar` 中通过 Chakra 的 `useColorMode` Hook 和 `IconButton` 实现主题切换按钮，切换时 Chakra 会自动应用对应的调色板，保证深色模式下的视觉一致性。

5. **Zustand：**Zustand 是一个轻量级且快速的 React 状态管理库，提供基于 hooks 的简单 API 来管理全局状态。在本项目中，Zustand 被用于管理全局的查询条件状态（例如当前选中的**游戏类型**、**平台**、**排序方式**、**搜索关键字**等）。使用 Zustand 有以下好处：

    - **简洁的全局状态管理：**相比 Redux 等，Zustand 更轻便，无需样板代码。我们可以通过 `create()` 函数快速定义一个状态仓库（store）。例如本项目创建了一个 `useGameQueryStore`，内部包含 `gameQuery` 对象和更新函数。当用户在 UI 上更改筛选条件（如选择不同类型或输入搜索词）时，调用 store 提供的 setter 更新状态。所有使用该状态的组件都会自动响应更新，无需通过繁琐的 prop 层层传递。
    - **解耦组件通信：**NavBar、GenreList 等不同组件可以独立地读写 Zustand 的状态。例如，搜索框组件更新搜索关键字，游戏列表组件就能从 Zustand 中读取新的搜索词并触发数据刷新。这种解耦让组件间依赖降低，也让代码更清爽易懂。
    - **配合 React 开发者工具：**Zustand 还兼容 React DevTools，可方便地调试查看当前全局状态，有助于开发者理解应用状态随操作的变化。

除了上述核心栈，本项目还使用了一些辅助库和工具：

- **React Router：**用于配置路由，实现从游戏列表页导航到游戏详情页等功能，打造单页应用路由体验。
- **Axios：**用于进行 HTTP 请求的数据获取库。项目通过 Axios 调用 [RAWG 游戏数据 API](https://rawg.io/apidocs) 获取游戏列表和详情数据。Axios 易于使用且支持拦截器、取消请求等功能，在项目中通过 `api-client.ts` 封装。
- **React Hook Form / Zod（可选）：**课程中提及使用 React Hook Form 处理表单、Zod 进行表单校验。如果项目中涉及表单（例如订阅、登录等），可以运用这些库。但在 GameHub 项目里搜索框较为简单，主要是即时搜索，没有复杂表单场景，因此这部分并非项目重点。

综上，GameHub 项目综合运用了以上技术栈，打造了一个现代化的 React 应用。通过实践这些技术，你将学会如何在真实项目中搭配使用它们，从构建界面到管理状态，再到调用后端 API，每一部分都有对应的工具简化开发。

### 核心代码模块解析

下面我们深入解析 GameHub 项目的核心代码模块，包括页面布局、主要组件划分、全局状态管理及数据获取逻辑等，帮助你理解项目的实现细节。

#### 1. 应用入口与全局配置

应用的入口文件是 **`main.tsx`**（或 `main.jsx`，但本项目使用 TS），其中主要代码包括：

- 挂载 React 应用到页面根节点。使用 ReactDOM 的 `createRoot(...).render(<App />)` 将根组件渲染到 `index.html` 提供的挂载点上。
- 引入 **ChakraProvider** 和全局样式：通常我们会用 Chakra UI 的 `ChakraProvider` 包裹 `<App>`，以启用 Chakra 的主题和样式支持。如果需要支持深色模式持久化，Chakra 还提供 `ColorModeScript` 注入到页面。
- （可选）BrowserRouter 路由：如果使用 React Router，多页面导航，则需要用 `<BrowserRouter>` 包裹 `<App>`，在内部定义路由。这样 `App` 及其子组件就能使用路由功能。

示例代码片段（仅示意布局，可能并非项目原文）：

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ChakraProvider>
    {/* 注入ColorModeScript确保页面初始颜色模式正确 */}
    <ColorModeScript initialColorMode="light" />
    <App />
  </ChakraProvider>
);
```

上述代码在渲染应用时，已经为后续组件提供了 Chakra UI 的主题上下文，使得我们可以在任意深度的组件中使用 Chakra 的 UI 组件和样式。同时，如果项目使用 React Router，那么 `App` 内会定义具体的路由结构。

#### 2. 页面布局和路由结构

**App.tsx** 作为应用的根组件，通常负责定义应用的总体布局和页面路由。根据 GameHub 的功能，我们可以推测 App.tsx 主要做了两件事：

1. **全局布局：**使用 Chakra UI 的布局组件将页面分为导航栏、侧边栏和主内容区。例如，使用 Chakra 的 `Grid` 布局将界面分为两列：左侧列作为类型筛选菜单（在桌面屏幕显示，移动设备隐藏），右侧列作为主要内容显示游戏列表。另外还有顶部的导航栏。Chakra 提供的 `Grid` 和 `GridItem` 组件可以通过 `templateAreas`、`templateColumns` 等属性直观地定义布局区域。如：

    ```tsx
    <Grid templateAreas={{
            base: `"main"`,        // 移动设备: 只一列显示main
            lg: `"aside main"`     // 桌面设备: 左侧aside,右侧main
          }}
          templateColumns={{
            base: "1fr",
            lg: "250px 1fr"        // 桌面时左侧固定宽度，右侧自适应
          }}
          >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList /* 游戏类型列表侧边栏 */ />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* 主内容区域包括导航栏和游戏网格 */}
        <NavBar /* 顶部导航栏，含搜索和主题切换 */ />
        <GameGrid /* 游戏卡片网格列表 */ />
      </GridItem>
    </Grid>
    ```

    上述布局代码含义为：在**大屏**(large, 即 `lg` 断点)以上时，显示一个名为`aside`的侧边栏区域和`main`的主区域；在小屏（base）时只显示`main`区域（`Show`组件会在小屏自动隐藏侧边栏）。侧边栏固定宽度约 250px 用于放置 `GenreList` 组件，而主区域自适应剩余空间用于展示导航栏和游戏列表。这种布局确保了响应式：宽屏下方便筛选，窄屏下保证内容可用。

2. **路由配置：**如果项目有游戏详情页面，`App.tsx` 可能使用 React Router 的 `<Routes>` 和 `<Route>` 来定义路由，例如：

    ```tsx
    import { Routes, Route } from 'react-router-dom';
    ...
    <Routes>
      <Route path="/" element={ <MainPageLayout /> } />
      <Route path="/games/:id" element={ <GameDetail /> } />
    </Routes>
    ```

    其中 `MainPageLayout` 可能包含上述布局（NavBar, GenreList, GameGrid），而 `GameDetail` 则对应单独的游戏详情展示组件。当用户点击某游戏卡片跳转到 `/games/某个游戏ID` 时，加载 `GameDetail` 组件显示详情。通过 React Router 的配置，应用可以在单页中实现多页面的切换，URL 改变时加载不同组件。

**导航栏 (NavBar)：**导航栏通常放在页面顶端，包含项目标题、搜索框以及主题切换按钮等。在 GameHub 中，`NavBar` 组件的关键功能有：

- **搜索框：**使用 Chakra 的 `Input` 或 `InputGroup` 组件实现。当用户在搜索框输入文本后，可以实时更新 Zustand 全局状态中的搜索关键字，触发游戏列表按照该关键词过滤。实现上，可以给 Input 绑定一个本地 state 或直接用 Zustand 存储，在 `onChange` 时更新 store 中的 `searchText`。如果希望在按下 Enter 或点击搜索按钮时再触发搜索，可用 `<form>` 包裹 Input 来提交。
- **主题切换：**利用 Chakra 提供的 `useColorMode` Hook 获取当前主题模式和切换函数。如：
    ```tsx
    const { colorMode, toggleColorMode } = useColorMode();
    ```
    然后使用一个 `IconButton` 来呈现图标（太阳/月亮），点击时调用 `toggleColorMode()` 切换主题。Chakra 会自动根据 `colorMode` 切换全局样式，比如背景色、文字颜色等（如果使用了 Chakra 默认提供的配色）。

导航栏也可以包含项目名称/logo，放在左侧明显位置，提升品牌感。此外，在移动端，NavBar 可能集成一个菜单按钮以便将 GenreList 等侧边栏内容折叠进抽屉式菜单，但该项目的侧边栏在移动端可能直接不展示以保持简洁。

#### 3. 核心组件划分

GameHub 将界面拆分成多个可复用、职责单一的组件，有助于我们分别关注各自的逻辑。以下是项目中的核心组件及其作用解析：

- **GenreList（游戏类型列表）：**这是左侧侧边栏组件（仅桌面端显示）。GenreList 在加载时会通过 API 获取游戏类型的列表，并渲染为一个垂直的列表（例如 Chakra 的 `List` 和 `ListItem` 组件），列出各种游戏类型（动作、策略、射击等）。每一项可点击，点击时：
    - 更新 Zustand 全局状态中的当前类型选项（如存储所选 genre 的 ID 或名称）。
    - 然后触发游戏列表重新根据该类型加载数据。
        GenreList 组件需要考虑当前选中的类型高亮显示，以便用户知道目前过滤条件（可以通过 Chakra 的样式或者简易高亮，比如选中项使用粗体文本或不同背景）。
- **PlatformSelector（游戏平台选择）：**通常实现为一个下拉菜单 (`Select` 组件) 或一组按钮，允许用户选择游戏平台（PC, PlayStation, Xbox, Nintendo 等）。平台列表同样可以通过调用 RAWG API 获取（RAWG 提供 `/platforms` 列表）。PlatformSelector 加载这些平台选项，并在用户选择某个平台时，将选择结果存入 Zustand 全局状态中（如存储选中的 platform ID）。选择变化会导致游戏列表按照新平台过滤。若使用 Chakra 的 `Menu` 或 `Select`，可以方便实现下拉效果。
- **SortSelector（排序选择）：**用于选择游戏列表的排序顺序。例如可以按 `Released Date（发布日期）`、`Name（名称）`、`Rating（评分）`等排序。SortSelector 可以用 Chakra 的 `Menu` 菜单组件实现一个排序选项列表。当用户选择不同排序规则时，同样将该值更新到 Zustand 的状态中（如 `sortOrder: 'name' or '-added'` 等，对应 RAWG API 支持的排序参数），触发游戏列表更新。UI 上通常显示当前排序方式，例如一个下拉框显示“排序：评分从高到低”等。
- **GameGrid（游戏网格列表）：**主内容区域核心组件。GameGrid 根据当前查询条件，从 Zustand 获取用户所选的 genre、platform、search、sort 等，然后通过**自定义 Hook**（如 `useGames`）获取相应的游戏数据列表。GameGrid 内部：
    - 在初次渲染或筛选条件更改时，显示 **加载状态**（Loading）。可以使用 Chakra 的 `Spinner` 或者使用**Skeleton 骨架屏**。项目中常用 Skeleton 来占位：例如先渲染若干个 `GameCardSkeleton` 组件（它可能是一个样式和尺寸与 GameCard 相同的骨架，占位灰块），让用户感知正在加载。数据加载完成后再替换为真实 GameCard。
    - 数据加载完成后，GameGrid 使用 Chakra 的 `SimpleGrid` 或 `Wrap` 等网格布局，将每个游戏用 **GameCard** 组件渲染。典型地，可以设置每行显示的卡片数（例如在大屏上一行 4 个卡片，小屏一行 2 个等，Chakra 的响应式属性可以轻松做到：如 `<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>`）。
    - 若启用了分页或无限滚动：GameGrid 底部可以显示一个“加载更多”按钮或自动触发下一页加载。当用户点击“加载更多”时，通过自定义 Hook 请求下一页数据并与已有数据合并。使用 React Query 时甚至可以自动处理分页逻辑。**注意：**课程基础部分可能以简单方式实现加载更多，例如按钮点击后增加 page 参数再 fetch；进阶部分才引入 React Query 的无限加载功能。
- **GameCard（游戏卡片）：**用于展示单个游戏的信息。每个 GameCard 可能包括游戏的**封面图**、**标题**、**评分**、以及一些标识（例如是否热门、新发布等）。在实现上，GameCard 可以用 Chakra 的 `Card` 或简单的 `Box` 加上阴影、圆角等样式来呈现卡片效果。内部使用 Chakra 的 `Image` 加载游戏封面（RAWG API 通常提供图片 URL），用 `Heading`, `Text` 显示名称和其他信息。为了表示评分，课程中可能教了一种简单实现：用不同颜色的 **Badge** 或 **进度条** 表示评分高低（例如分数 > 90 标绿，60-90 黄，<60 红）。GameCard 组件关注于展示数据，不包含过多业务逻辑。点击卡片时，如果有详情页面，会导航到 `GameDetail` 路由。
    > 代码提示：GameCard 组件可能接收一个 `Game` 对象作为 prop，然后从中读取 `game.name`, `game.background_image`（封面 URL）, `game.metacritic`（评分）等属性来展示。
- **GameDetail（游戏详情页）：**当实现路由时，点击 GameCard 导航至详情页，该组件负责展示单个游戏的详细信息。进入该页面时，需要根据 URL 参数中的游戏 ID 发起 API 请求获取该游戏的详情数据（RAWG 提供 `/games/{id}` 接口获取详情）。GameDetail 页面可能展示：游戏名称、描述、评级、发布商、以及预告视频播放器、截图画廊等丰富内容。考虑到课程**基础部分**重点在列表页，详情页也许在**进阶课程**才完整实现，但我们可简单了解其结构：GameDetail 可以使用 Chakra 的 `Stack` 或 `Flex` 布局纵向排列信息，顶端是大图或视频，其下是文字内容。为了不让初学者困惑，详情页的实现可暂不深究，但路由与数据获取逻辑类似于前述，只是针对单个游戏 ID。

上述组件一起构成了 GameHub 的前端界面。各组件职责单一、通过 props 和全局状态串联：

- 顶层 App 通过 **props** 向下传递必要的数据或回调（例如 NavBar 中可能需要知道当前选中的平台名称用于显示在移动端，可以从 Zustand 获取或通过 props 传入）。
- 组件之间通过 **Zustand** 共享筛选状态，不直接相互依赖。例如 GenreList/PlatformSelector 只负责更新状态，GameGrid 监听状态变化并刷新数据。
- 这样的架构让新增或修改功能很方便：比如要新增一个筛选条件“标签(tag)”，可以新增 TagSelector 组件，同样写入 Zustand 状态，修改 useGames 请求添加对应参数，UI 上 GameGrid 自动使用新条件获取数据。

#### 4. 全局状态管理（Zustand 实现）

正如前文技术栈所述，本项目用 **Zustand** 管理查询状态，我们在此更具体地看看状态结构和使用方式。假设在 `src/store/useGameQueryStore.ts` 定义了 Zustand store，如下（代码简化示意）：

```ts
import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (text: string) => void;
}

export const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},  // 初始没有任何过滤
  setGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (order) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder: order } })),
  setSearchText: (text) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, searchText: text } }))
}));
```

以上是一个可能的 Zustand 状态定义。在这个 store 中：

- `gameQuery` 对象保存了所有筛选条件（类型 ID、平台 ID、排序方式、搜索关键字）。我们用可选属性使其可灵活组合。
- 提供了若干 setter 函数用于更新相应字段。例如用户选择了类型 ID 5，则调用 `useGameQueryStore.getState().setGenre(5)` 或在组件内 `useGameQueryStore()[1].setGenre(5)`（Zustand 支持直接解构 actions）。这些 setter 内部通过 `set` 更新 state，并保留其他未变动的字段（...state.gameQuery 部分）。
- 当这些状态更新时，所有使用 `useGameQueryStore` 订阅了对应字段的组件都会自动重新渲染。例如 GameGrid 组件可能这样使用 Zustand：
    ```tsx
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    ```
    这样每当 `gameQuery` 对象的任一属性更新，GameGrid 都能得到新值，进而触发新的数据请求。

**在组件中的使用：**组件可以从 store 获取需要的值和方法：

- GenreList 中获取 `setGenre` 方法，当点击某个类型时调用它，并把当前选中类型高亮。
- PlatformSelector 获取 `setPlatform` 方法，SortSelector 获取 `setSortOrder` 方法，NavBar 获取 `setSearchText` 方法等等，分别在用户与 UI 交互时调用。
- GameGrid 获取整个 `gameQuery` 对象和可能的各 setter（如果 GameGrid 也支持比如重置过滤等功能）。但通常 GameGrid 主要读取 `gameQuery` 内容，然后将之用于数据请求参数。

通过 Zustand，全局筛选条件的更新和读取就变得简单明了。例如，在 NavBar 搜索框的 `onChange` 事件中，我们直接调用 `setSearchText(e.target.value)`，GameGrid 就会自动拿到更新后的 `searchText` 从而发起新请求，无需自上而下传递该值。这种**单一数据源**（Zustand store）的模式有效避免了 React 组件的层层传参，提升了状态管理效率和代码可维护性。

#### 5. 数据获取与 API 调用逻辑

GameHub 的数据来源是 [RAWG 视频游戏数据库 API](https://rawg.io/apidocs)。该项目通过调用 RAWG 提供的 HTTP 接口来获取游戏信息。数据获取部分的代码主要涉及 **Axios 实例配置**、**自定义 Hook 封装请求**、**加载与错误处理** 等，下面逐一说明：

- **Axios API 客户端 (`api-client.ts`)：**为了方便重复调用，项目创建了一个 Axios 实例作为通用 API 客户端。代码形式类似：

    ```ts
    import axios from 'axios';

    export default axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: '<你的 RAWG API Key>'
      }
    });
    ```

    以上代码使用 `axios.create` 创建了一个 Axios 实例，并设置了基础 URL（RAWG API 的根地址）和默认的查询参数 `key`（即 API 密钥）。这样一来，项目中所有通过该实例发起的请求都会自动附加 API 密钥，不必每次调用时手动添加。我们可以将这个实例默认导出为 `apiClient`（默认导出在引入时可以重命名），因此在别处直接 `import apiClient from './services/api-client'` 使用。

    > **提示：**实际项目中，敏感的 API Key 通常不直接硬编码，而是放入环境变量（如 `.env` 文件）并通过 `import.meta.env` 读取。但出于课程教学方便，此处直接在代码中配置了 key。请确保在提交代码前移除或保护你的 API 密钥。

- **自定义 Hook (`useGames`)：**在 React 中获取数据通常通过 `useEffect` + `useState` 或者使用 React Query 等库。本项目基础部分可能展示了如何编写自己的 Hook 来封装数据获取逻辑。例如 `useGames` Hook 可能的实现流程：

    1. 定义本地状态如 `games`（游戏列表数据数组）、`error`（错误信息）、`isLoading`（加载状态）。
    2. 使用 `useEffect` 监听 [Zustand store](https://chatgpt.com/c/6825a137-c470-800f-98fb-2a73f247dd57?model=gpt-4o#4-%E5%85%A8%E5%B1%80%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86zustand%E5%AE%9E%E7%8E%B0) 中 `gameQuery` 的变化，每当筛选条件变动，就发起新的请求。也可能在初次加载组件时发起默认请求。
    3. 在 `useEffect` 中调用 `apiClient.get('/games', { params: {/* 根据gameQuery拼接 */} })` 来获取游戏列表。参数包括:

        - `genres`: 当前选中类型的 ID（如 `gameQuery.genreId`）。
        - `parent_platforms`: 当前选中平台 ID（RAWG API 中用 `parent_platforms` 这个参数来筛选平台）。
        - `ordering`: 当前排序方式（RAWG 接受如 `-metacritic` 表示按评分降序）。
        - `search`: 搜索关键词。
        - `page`: 分页页码（默认 1，加载更多时加 1）。
        - 由于前面 axios 实例已经携带了 `key`，这里不需要重复提供。

    4. 将获取到的数据保存到 `games` 状态，关闭 `isLoading`，如有错误则设置 `error` 状态。
    5. 返回这些状态值，以便组件使用。也可以直接返回 `games` 列表，错误和加载状态通过其他方式获取。
       伪代码演示 `useGames`（初版）：

    ```ts
    import { useState, useEffect } from 'react';
    import apiClient from '../services/api-client';
    import { useGameQueryStore } from '../store/useGameQueryStore';
    import { Game } from '../types';  // 假定有 Game 接口

    interface FetchGamesResponse {
      count: number;
      results: Game[];
    }

    const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setLoading] = useState(false);
      const gameQuery = useGameQueryStore(s => s.gameQuery);  // 订阅筛选条件

      useEffect(() => {
        setLoading(true);
        setError('');
        const controller = new AbortController();  // 用于取消请求

        apiClient
          .get<FetchGamesResponse>('/games', {
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText
            },
            signal: controller.signal  // 将 abort controller 关联以便取消
          })
          .then(res => {
            setGames(res.data.results);
            setLoading(false);
          })
          .catch(err => {
            if (err.name === "CanceledError") return; // 请求取消，忽略错误
            setError(err.message || '数据获取失败');
            setLoading(false);
          });

        // effect清理函数：组件卸载或gameQuery变化前取消前一次请求
        return () => controller.abort();
      }, [gameQuery]);

      return { games, error, isLoading };
    };
    export default useGames;
    ```

    在上面的实现中，`useGames` 通过监听 `gameQuery`（包括类型、平台、排序、搜索等）变化来自动重新获取数据。它返回了当前的游戏数组、加载状态和错误信息。组件如 `GameGrid` 就可以使用该 Hook：

    ```tsx
    const { games, error, isLoading } = useGames();
    ```

    如此一来，GameGrid 能根据 `isLoading` 决定是否展示骨架屏/Spinner，根据 `error` 决定是否显示错误消息（比如一个警示的 `Alert`），根据 `games` 来渲染游戏卡片列表。

- **错误处理和边界情况：**项目实现中会考虑各种数据获取的边界情况，例如：
    - 网络或服务器错误时，在界面显示错误提示（使用 Chakra 的 `Alert` 组件显示红色警告条等）。
    - 当筛选条件导致没有任何游戏结果时，友好地显示 “没有找到符合条件的游戏” 提示。
    - 加载过程中禁用某些交互（例如加载未完成前，不重复触发加载更多）。
    - 使用 Axios 的取消功能（AbortController）确保在组件卸载或新请求发起时中止前一次未完成请求，避免竞争条件和内存泄露。
- **分页加载（进阶）：**基础版的 `useGames` 可能一次只取固定数量（比如 20 条）游戏。如果需要实现“加载更多”或无限滚动，需要维护当前页码并在用户触发加载时调用下一页。进阶课程中，Mosh 可能引入 **React Query** 来简化分页和缓存。本项目的改进版本使用 `useInfiniteQuery` 实现了自动分页——React Query 会帮我们缓存每页结果并提供 `fetchNextPage` 方法。然而，如果你刚接触这些概念，可以首先用简单的手工分页逻辑理解原理，再学习使用 React Query 等工具提升性能和开发效率。

**小结：**数据获取模块将前端组件与后端数据源连接起来。在 GameHub 中，通过封装 Axios 实例和 `useGames` 等 Hook，我们达到了关注点分离——组件负责渲染，Hook 负责获取数据。这种模式是 React 开发中的最佳实践之一。当后续需要对接不同 API 或增加数据处理，如对原始数据进行加工（比如筛除无封面图的游戏等），也可以在 Hook 中统一处理，保持组件的简洁。

### 推荐的学习路径

GameHub 项目配套有约 3 小时长的教学视频。为了高效地通过该项目学习 React 和 TypeScript，下面提供一个推荐的学习路径和方法：

- **合理安排视频观看节奏：**不要一次性快速看完 3 小时视频，建议将课程拆分成多个小节进行消化。比如每天/每次专注观看 30-60 分钟。在观看过程中可以每隔一小节暂停一下，回顾刚才讲解的内容。这样分段学习可以让你有充足时间思考消化，而不是信息过载。此外，可以根据课程章节（例如 React 基础、项目初始化、添加筛选功能等）拆分到不同学习日，确保每一部分都真正掌握。
- **循序渐进地跟着视频编码：**初学者常问是否应该一边看视频一边编码。我们的建议是：**分阶段同步编程**。对于演示概念性的片段（如 React 理念讲解、工具配置），可以先看懂再动手。而当进入实战编码环节（例如编写组件或实现功能）时，鼓励你**暂停视频自己尝试敲代码**。具体节奏可以是：
    - **观看演示，理解思路：**先看老师示范一遍功能的开发过程，不急于打字，重点领会为什么要这么做。
    - **视频暂停，模仿实践：**然后暂停视频，按照刚才的思路自己实现同样的功能。尽量不去拷贝粘贴代码，而是凭记忆和理解写出来。如果遇到记不清的细节，再回放视频对照。
    - **对比调试：**完成后继续播放视频，将自己的代码与视频中的最终实现比对，找出差异。如果有错误，就尝试自行调试解决，实在解决不了再从视频获取提示。这样主动解决问题的过程非常重要，它能训练调试能力，使你印象深刻。
- **有效的笔记记录：**学习过程中养成做笔记的习惯会极大提高收获。对于 React/TypeScript 实战，建议笔记重点关注：
    - **概念要点：**记录下每个新概念的简单解释和用途，比如“Zustand：轻量状态管理库，用于...”、“Chakra UI Show 组件：根据断点条件显示/隐藏元素”等。短语化地记下这些知识点，便于日后快速回顾。
    - **关键代码片段：**对于比较重要或复杂的代码，可以截图或手动抄写简化版本进笔记，并标注注释说明其作用。例如记录下 `useGames` Hook 的伪代码流程，同时注释每步在做什么。这比单纯看代码记忆效果更好。
    - **踩坑和调试心得：**当你在实现过程中遇到了 bug 或疑难（比如某个 Chakra 组件样式不生效、状态更新没触发 UI 变化等），把问题和最终的解决办法写下来。下次遇到类似情况可以快速参考避免，再次巩固记忆。
    - **使用结构化格式：**笔记中可以使用 Markdown 列表、有序步骤等格式，让内容层次分明。比如列出“项目初始化步骤 1-2-3”、“实现筛选功能的思路要点”等。清晰的格式有助于大脑构建知识结构，也方便日后查找特定内容。
- **充分利用视频学习技巧：**在观看教学视频时，可以运用一些技巧提升效率和理解：
    - **调整播放速度：**对于你已经比较熟悉的内容（比如基础 JavaScript 语法、简单的 JSX 用法），可以考虑将视频播放速度调到 1.25x 或 1.5x，加快略过。但对于关键难点（如 Zustand 用法、TypeScript 泛型等），建议放慢甚至反复观看，确保听清每一句讲解。
    - **做好时间标记：**如果某段讲解一遍没听懂，不妨在笔记中记录下视频时间点，方便稍后回放。一些平台也允许添加书签或备注，可标记“这里老师解释了 useEffect 的依赖数组原理”之类，以便日后温习。
    - **结合官方文档：**视频中展示的库（React、Chakra UI、Zustand 等）都有官方文档。遇到感兴趣或一时消化不了的内容，可以**暂停视频查阅文档**。例如看到 Chakra 的某组件用法不甚理解时，打开 Chakra UI 文档查看该组件的属性列表和示例，会有助于理解视频里的代码如何来的。官方文档通常有更详细的说明和示例，和视频结合能达到事半功倍的效果。
    - **实践中带着问题看：**在真正上手编码后再回看视频，你会带着具体问题和背景知识去看，这时候理解会更深。例如第一次看可能觉得 Zustand 很简单，自己实现时可能踩坑，再回来看讲解会发现之前忽略的小细节。

总之，学习这门课程和项目要讲求节奏和方法——主动思考，多动手实践，善用笔记和资料。通过**“看-停-写-想-对比”**的循环，你将不仅仅复制了项目，更真正掌握 React 与 TypeScript 开发的精髓。

### 最佳实践建议

在完成 GameHub 项目并学习相关课程内容后，你可以从中提炼出许多前端开发的最佳实践。下面是一些建议，可帮助前端工程师通过该项目提升 React/TypeScript 技能：

- **组件化思维与解耦：**认真体会项目如何进行组件拆分和组合。GameHub 将不同功能区域划分为独立组件（筛选菜单、游戏列表、导航栏等），并通过 props 或全局状态串联。这体现了**单一职责原则**和解耦的思想。今后开发时，应尽量将 UI 和逻辑拆分到小而可复用的组件中，提升代码可读性和复用率。
- **TypeScript 类型设计：**查看项目源码中定义的接口类型，例如 `Game`、`Genre`、`Platform` 等。这些类型严格对应 API 返回的数据结构，让我们在使用这些数据时有完善的自动提示和错误检查。这是提升代码质量的关键一步。建议多练习根据后端 API 或需求定义 TypeScript 接口类型，并充分利用类型系统（例如联合类型、枚举、泛型等）来约束组件的 props 和状态。良好的类型设计能极大减少运行时错误。
- **状态管理最佳实践：**通过该项目，你将了解在 React 中管理全局和局部状态的不同方式。Zustand 的使用展示了比 Redux 更轻巧的选择，而没有直接使用仅组件内部 `useState` 也是为了避免复杂场景下的**props drilling**（属性逐层传递）。最佳实践是在简单场景用好组件自身状态，在跨组件共享场景选用合适的全局状态库，并避免不必要的复杂性。还要注意**不可变数据**、**纯函数更新**等原则，保证状态更新可预测。无论使用 Zustand、Redux 还是 Context，都要遵循让数据单向流动、最小化状态粒度的理念。
- **关注代码清洁与结构：**项目虽然不大，但目录组织和代码风格都很规范。例如，把所有服务请求封装在 `services/` 中，将状态管理放在 `store/` 中。这样的分层思想是企业级开发的基础。建议在自己的项目中也养成**分层分目录**的习惯：UI 组件、业务逻辑、工具函数分开放，避免杂糅。另外，注意代码命名和格式——清晰的变量名、合理的注释、统一的代码风格（可借助 Prettier/ESLint 工具）都是专业开发者应具备的素养。良好的代码结构和风格会让协作和后期维护事半功倍。
- **充分利用 UI 库提高效率：**Chakra UI 等组件库提供了大量开箱即用的组件和样式方案。在项目中我们几乎没写多少 CSS，就实现了精美且响应式的界面。这说明善用 UI 库能够大幅提升开发效率，同时也保证了在无障碍和一致性方面的质量（Chakra 默认符合无障碍标准）。在学习时，可以多研究项目里 Chakra 组件的用法，理解它提供的各种**样式 prop**和**响应式机制**。这是在实践中学习 UI 库的好机会。未来做项目时，优先考虑使用成熟的组件库，避免重复造轮子，但也要知道如何根据需求自定义样式。
- **学习性能优化思路：**GameHub 项目中包含一些性能优化的小细节，例如：
    - 使用 **Skeleton** 组件提升感知性能（在数据尚未加载时先渲染占位）。
    - 合理拆分组件，避免不必要的重复渲染（例如只让 GameCard 关注自身内容改变，而筛选栏改变不重新渲染整个列表容器）。
    - Zustand 默认提供的浅比较（对于 useStore 的选择器，可以有效避免无关状态变化导致组件重渲染）。  
         这些实践教会我们在 React 开发中时刻关注应用性能和用户体验。建议在完成基础功能后，尝试思考并测试：如何减少渲染次数？网络请求能否缓存？大型列表是否需要虚拟化？这些都是进阶可以探索的方向。
- **巩固与扩展练习：**完成项目只是第一步，要真正提升技能，必须通过举一反三的练习来强化。可以尝试给 GameHub 项目增加或修改一些功能作为练习：
    - **添加新筛选项：**比如增加按照游戏发行商过滤，或者增加“仅显示免费游戏”等开关。为此需要阅读 RAWG 文档找到相应参数，并在 UI 上增添组件，修改 Zustand 和 useGames 逻辑。这是很好的综合练习。
    - **引入新技术：**如果基础部分未使用 React Query，可以尝试将数据获取改用 React Query 来管理缓存和请求状态，体验两种方式的异同。或者尝试把 Zustand 换成 React Context + useReducer 来实现同样的功能，以理解不同状态管理方法的优劣。
    - **优化样式和交互：**运用 Chakra UI 的定制能力调整项目配色，或添加一些交互动效（比如卡片悬停放大、点击涟漪效果等，Chakra 的样式体系可以实现 CSS 伪类）。这些改进可以提升审美和 CSS 功底。
    - **撰写测试：**如有精力，给关键逻辑添加一些单元测试或集成测试（比如用 React Testing Library 测试筛选交互是否正确触发 API 调用）。测试是高级技能，但对巩固理解非常有益。
- **持续学习和参考官方资源：**前端技术日新月异，保持学习习惯十分重要。本项目涉及的 React 和 TypeScript 基础是构建更复杂应用的根基。建议在项目之余，多阅读 React 和 TS 的官方文档和社区教程，加深对原理的理解。例如了解 React 的渲染机制、Hooks 的内部原理，TypeScript 的高级类型技巧等等。在实践中遇到问题时，多查阅官方文档或社区回答，这不仅解决问题还能学到新知识。

通过上述这些实践和主动思考，你将在完成 GameHub 项目后，对 React 组件设计、状态管理、TypeScript 应用、以及前端工程化有一个全方位的提升。从模仿走向创新，逐步具备自行设计并开发前端项目的能力。祝你在学习过程中不断收获进步，早日成为一名熟练的 React/TypeScript 前端开发者！# GameHub 项目学习笔记

## 1. 项目概览：游戏发现应用

> 简述：本节介绍我们将共同构建一个名为 "GameHub" 的视频游戏发现应用的概览。它是一个模仿热门游戏平台 ROG 的简化版，旨在整合并实践课程所学知识，用于发现、筛选和排序视频游戏，并包含如亮/暗模式切换、加载骨架屏等现代 Web 应用的常见用户界面模式。项目将采用实践驱动、代码引导设计的迭代式开发方法。

**知识树**

1. 项目目标：构建一个视频游戏发现 Web 应用 (GameHub)。
2. 核心特性（UI 模式）：
    - 亮色/暗色模式切换。
    - 游戏搜索功能。
    - 按类型 (Genre) 筛选游戏。
    - 加载状态指示 (Loading Skeletons)。
    - 按平台 (Platform) 筛选游戏。
    - 游戏排序功能。
3. 开发方法论：
    - **实践驱动 (Hands-on & Pragmatic)**：不进行过多的预先设计，直接动手编码。
    - **代码引导设计 (Let the code direct the design)**：通过编码过程驱动和完善设计。
    - **迭代式开发 (Iterative Approach)**：编写少量代码实现初步功能，然后逐步重构和改进。
4. 最终产品愿景：一个功能实用、包含多种现代 UI 模式的 Web 应用，作为所学知识的综合实践。

**代码示例**

_本节为项目介绍，不包含具体代码实现。_

---

## 3. 项目初始化与版本控制

> 简述：本节介绍如何使用 Vite 这一现代前端构建工具快速创建一个新的 React 项目，并选用 TypeScript 作为开发语言。同时，引入 Git 作为版本控制系统，对项目的初始状态进行版本记录，为后续的迭代开发打下基础。

**知识树**

1. **Vite (前端构建工具)**：
    - 作用：用于快速创建和构建现代 Web 项目，提供高效的开发服务器和打包优化。
    - 创建命令：`npm create vite@latest <project-name>` (字幕中为 `viet at version`，通常使用 `vite@latest` 或指定版本如 `vite@4.0.0`)。
    - 技术选型：选择 React 框架和 TypeScript 语言。
2. **项目基本操作流程**：
    - `cd <project-folder>`：切换到项目目录。
    - `npm install`：安装项目所需的所有依赖包。
    - `npm run dev`：启动本地开发服务器，在浏览器中预览和调试应用。
3. **Git (版本控制系统)**：
    - 作用：跟踪和管理代码的变更历史，方便协作和版本回溯。
    - `git init`：在项目根目录初始化一个新的 Git 本地仓库。
    - `git add .`：将当前目录下所有新建、修改的文件添加到 Git 的暂存区。
    - `git commit -m "Descriptive message"`：将暂存区的内容提交到本地仓库，形成一个版本快照，并附带一条描述本次提交内容的说明信息。

**代码示例**

1. 使用 Vite 创建项目 (以 `game-hub` 为例)

    ```Bash
    npm create vite@latest game-hub -- --template react-ts
    cd game-hub
    npm install
    npm run dev
    ```

    - `-- --template react-ts` 是 Vite CLI 的一个参数，用于直接指定使用 React 和 TypeScript 的项目模板。

2. Git 基本初始化操作

    ```
    git init
    git add .
    git commit -m "Initial commit"
    ```

    - 这是任何新项目启用版本控制的标准起手式。

---

## 4. UI 库集成：Chakra UI

> 简述：本节介绍如何在项目中集成 Chakra UI，它是一个提供一系列美观、可复用且易于定制的 React 组件库，能够帮助开发者快速构建具有现代感的用户界面。配置的核心在于通过`ChakraProvider`将 Chakra 的主题和上下文提供给整个应用。

**知识树**

1. **Chakra UI (React 组件库)**：
    - 特点：提供丰富的预设组件，设计风格现代，易于实现定制化主题，与项目设想的视觉风格接近。
    - 备选方案：Bootstrap, Material UI, Tailwind CSS 等。
2. **安装 Chakra UI 及其依赖 (针对 Vite 项目)**：
    - 命令：`npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`
3. **配置 `ChakraProvider`**：
    - 位置：在应用的入口文件 `main.tsx` 中。
    - 操作：
        - 从 `@chakra-ui/react` 导入 `ChakraProvider`。
        - 用 `<ChakraProvider>` 组件包裹应用的根组件 (`<App />`)。
    - 作用：为应用内的所有 Chakra UI 组件提供必要的主题信息和上下文。
4. **验证安装**：
    - 在 `App.tsx` 中导入并使用一个 Chakra UI 组件（如 `Button`）。
    - 移除 Vite 项目模板中 `index.css` 的默认样式，以避免与 Chakra UI 的样式冲突，确保组件展现其预期的外观。
5. **提交代码变更 (Git)**：
    - 使用 VS Code 的 Source Control 面板或命令行审查已修改的文件。
    - 提交有意义的 commit message，如 "Install Chakra UI"。
    - `git log --oneline`：查看简洁的提交历史。

**代码示例**

1. 安装 Chakra UI 依赖

    ```
    npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
    ```

2. 配置 `ChakraProvider` (在 `src/main.tsx`)

    ```tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { ChakraProvider } from '@chakra-ui/react'; // 1. 导入
    import App from './App';
    import './index.css'; // 确保这里的CSS不会与Chakra冲突

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <ChakraProvider> {/* 2. 包裹App组件 */}
          <App />
        </ChakraProvider>
      </React.StrictMode>,
    );
    ```

3. 在 `App.tsx` 中测试 `Button` 组件

    ```TypeScript
    import { Button } from '@chakra-ui/react'; // 导入Button

    function App() {
      // 移除原有的Vite模板代码
      return (
        <Button colorScheme="blue">Click Me</Button> // 使用Chakra Button
      );
    }

    export default App;
    ```

## 5. 响应式布局：Grid 与断点

> 简述：本节介绍如何使用 Chakra UI 的`Grid`和`GridItem`组件来构建应用的整体页面骨架。核心在于利用`templateAreas`属性定义网格布局的区域，并通过对象形式为不同屏幕尺寸（断点）指定不同的布局模板，从而实现响应式设计。同时，`Show`组件用于根据屏幕尺寸条件性地渲染某些布局元素。

**知识树**

1. **Chakra UI `Grid` 组件**：
    - 详见：style-system -> Responsive Styles
    - 作用：一个强大的布局工具，功能类似 CSS Grid。
    - `templateAreas` 属性：用于定义网格的区域划分。
        - 字符串语法：用双引号内的字符串定义每一行，区域名用空格隔开。如：`"nav nav" "aside main"`。
        - 对象语法（响应式）：键为断点名 (`base`, `sm`, `md`, `lg`, `xl`)，值为对应断点的 `templateAreas` 字符串。
2. **Chakra UI `GridItem` 组件**：
    - 作用：放置在`Grid`内部，并使用`area`属性指定其所占据的网格区域。
3. **Chakra UI `Show` 组件**：
    - 作用：条件渲染组件，根据当前屏幕尺寸是否满足指定断点条件来决定是否渲染其子元素。
    - `above` 属性：当屏幕宽度大于等于指定断点时渲染子元素 (e.g., `above="lg"` 表示仅在`lg`及更大屏幕显示)。
    - `below` 属性：当屏幕宽度小于指定断点时渲染子元素。
4. **响应式断点 (Breakpoints)**：
    - Chakra UI 预设了一套断点，如`base` (默认，通常指移动端), `sm`, `md`, `lg` (通常指笔记本电脑), `xl`等。
    - 这些断点允许开发者为不同设备尺寸提供定制化的用户体验。
5. **测试方法**：使用浏览器的开发者工具（如 Chrome DevTools）切换设备模式，观察布局在不同屏幕尺寸下的变化。

**代码示例**

1. 在 `App.tsx` 中使用 `Grid` 创建响应式布局

    ```TypeScript
    import { Grid, GridItem, Show } from '@chakra-ui/react';

    function App() {
      return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`, // 移动端：导航栏占满一行，主内容区占满一行
            lg: `"nav nav" "aside main"`, // 大屏幕 (lg及以上)：导航栏跨两列，下方是侧边栏和主内容区
          }}
          // 可以添加 templateColumns, templateRows, gap 等Grid属性进行更细致的控制
        >
          {/* 导航栏区域 */}
          <GridItem area="nav" /* bg="coral" (临时背景色) */ >
            {/* NavBar component will go here */}
            Nav
          </GridItem>

          {/* 侧边栏区域 - 仅在大屏幕显示 */}
          <Show above="lg">
            <GridItem area="aside" /* bg="gold" (临时背景色) */ >
              Aside
            </GridItem>
          </Show>

          {/* 主内容区域 */}
          <GridItem area="main" /* bg="dodgerblue" (临时背景色) */ >
            {/* GameGrid component will go here */}
            Main
          </GridItem>
        </Grid>
      );
    }

    export default App;
    ```

    - `templateAreas`通过对象定义了两种布局：`base`用于移动端和小屏幕，`lg`用于大屏幕。
    - `Show above="lg"`确保了侧边栏 (`aside`) 只在屏幕宽度达到或超过 Chakra UI 定义的`lg`断点时才会被渲染。

---

## 6. 构建导航栏：基础结构与图片引入

> 简述：本节介绍如何创建一个独立的导航栏组件 (`NavBar`)，并在其中使用 Chakra UI 的`HStack`组件进行水平布局。核心知识点是如何在 Vite + React 项目中正确地导入和使用本地图片资源，例如应用的 Logo。

**知识树**

1. 技术选型思考
    - 使用 `HStack` 实现横向布局，而不是 `Flex`
    - Chakra 把布局与语义组件（如 `Image`, `Text`）结合 ➝ 写法更直观
2. **组件化开发**：
    - 创建新组件文件：在 `src/components` 目录下新建 `NavBar.tsx`。
    - 单一职责原则：将导航栏的逻辑和视图封装在独立的组件中。
3. **Chakra UI `HStack` 组件**：
    - 作用：一个用于实现其子元素水平方向等间距排列的布局组件，是`Horizontal Stack`的缩写。
4. **图片资源处理 (Vite + React)**：
    - 存放位置：将图片（如 `logo.webp`）放置在 `src/assets` 目录下。
    - **导入方式**：本地图片资源不能直接使用相对路径字符串，需要像 JavaScript 模块一样通过 `import` 语句导入到组件中。
      TypeScript
        ```
        import logoSrc from '../assets/logo.webp';
        ```
    - 使用方式：将导入的图片变量赋值给 Chakra UI `Image` 组件的 `src` 属性。
5. **Chakra UI `Image` 组件**：
    - `src`: 设置图片来源，可使用 `import` 导入的图片变量。
    - `boxSize`: 便捷属性，用于设置图片的宽度和高度 (e.g., `"60px"`)。
6. **小步快跑开发原则**：
    - 一次只关注一小部分功能，确保其正常工作后再进行下一步。
    - 避免试图一次性完成过多任务。
7. **集成组件**：将创建好的`NavBar`组件放置到`App.tsx`中`GridItem`的`nav`区域。
8. **清理调试代码**：移除之前用于布局占位的临时背景色。

**代码示例**

1. 创建 `NavBar.tsx` (在 `src/components/NavBar.tsx`)

    ```TypeScript
    import { HStack, Image, Text } from '@chakra-ui/react'; // Text是临时占位
    import logoSrc from '../assets/logo.webp'; // 1. 导入图片

    const NavBar = () => {
      return (
        <HStack>
          <Image src={logoSrc} boxSize="60px" /> {/* 2. 使用导入的图片 */}
          {/* Later, SearchBox and ColorModeSwitch will be added here */}
          {/* <Text>NavBar</Text> // 临时文本，后续会被替换 */}
        </HStack>
      );
    };

    export default NavBar;
    ```

    - `logoSrc` 是导入图片后得到的变量，可以直接用于 `Image` 组件。

2. 在 `App.tsx` 中使用 `NavBar`

    ```TypeScript
    // ... (其他 imports)
    import NavBar from './components/NavBar'; // 导入NavBar

    function App() {
      return (
        <Grid /* ... templateAreas ... */ >
          <GridItem area="nav"> {/* 移除临时背景色 */}
            <NavBar /> {/* 替换占位文本为NavBar组件 */}
          </GridItem>
          {/* ... 其他GridItem ... */}
        </Grid>
      );
    }

    export default App;
    ```

---

## 7. 主题定制：实现暗色模式

> 简述：本节介绍如何利用 Chakra UI 强大的主题定制能力来实现应用的暗色模式。核心步骤包括创建一个自定义主题配置文件，设置初始颜色模式，并将此主题应用到整个应用。同时，使用`ColorModeScript`确保颜色模式的正确初始化和持久化。

**知识树**

1. **Chakra UI 颜色模式 (Color Mode)**：
    - 内置支持：提供开箱即用的亮色 (light) 和暗色 (dark) 模式切换功能。
    - 持久化：Chakra UI 使用浏览器的 `localStorage` 来存储用户选择的颜色模式，以便在后续访问时保持一致。
2. **自定义主题**：
    - 创建主题文件：在 `src` 目录下新建 `theme.ts`。
    - `extendTheme` 函数：从 `@chakra-ui/react` 导入，用于基于默认主题进行扩展或覆盖。
    - `ThemeConfig` 接口：用于类型化主题配置对象，确保配置项正确。
        - `initialColorMode`: `'light' | 'dark' | 'system'`，用于设定应用加载时的初始颜色模式。
        - `useSystemColorMode`: `boolean`，决定是否遵循操作系统的颜色模式偏好。
3. **配置流程**：
    - **在 `theme.ts` 中**：
        1. 定义一个符合 `ThemeConfig` 接口的 `config` 对象，设置 `initialColorMode: 'dark'`。
        2. 调用 `extendTheme({ config })` 来创建一个包含此配置的新主题对象。
        3. 导出此主题对象。
    - **在 `main.tsx` 中**：
        1. 导入创建的自定义 `theme` 对象。
        2. 将此 `theme` 对象传递给 `<ChakraProvider>` 组件的 `theme` prop。
        3. 从 `@chakra-ui/react` 导入 `<ColorModeScript />` 组件。
        4. 在 `<ChakraProvider>` 内部、`<App />` 组件之前，添加 `<ColorModeScript />`，并将其 `initialColorMode` prop 设置为 `theme.config.initialColorMode`。
4. **`ColorModeScript` 组件**：
    - 作用：确保在应用的主要 JavaScript 包加载和执行之前，HTML 文档上就设置了正确的颜色模式类名。这可以防止在加载深色模式时页面短暂闪烁成浅色模式的问题。
5. **测试与重置**：
    - 刷新浏览器查看效果。
    - 如果需要重置（例如之前已存在 localStorage 中的设置），可以在浏览器开发者工具的 "Application" -> "Local Storage" 中找到并删除 `chakra-ui-color-mode`键值对，然后刷新页面。

**代码示例**

1. 创建自定义主题 (在 `src/theme.ts`)

    - 自定义 Chakra 默认主题，实现初始深色模式，搜索 color mode：

    ```TypeScript
    import { extendTheme, ThemeConfig } from '@chakra-ui/react';

    // 1. 定义主题配置
    const config: ThemeConfig = {
      initialColorMode: 'dark',  // 设置初始颜色模式为暗色
      useSystemColorMode: false, // 不强制使用系统颜色模式
    };

    // 2. 使用配置扩展主题
    const theme = extendTheme({ config });

    // 3. 导出主题
    export default theme;
    ```

2. 应用自定义主题和 `ColorModeScript` (在 `src/main.tsx`)

    ```TypeScript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'; // 1. 导入 ColorModeScript
    import App from './App';
    import theme from './theme'; // 2. 导入自定义主题
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <ChakraProvider theme={theme}> {/* 3. 应用自定义主题 */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {/* 4. 添加ColorModeScript */}
          <App />
        </ChakraProvider>
      </React.StrictMode>,
    );
    ```

---

## 8. 构建颜色模式切换器

> 简述：本节介绍如何创建一个用户界面元素——颜色模式切换开关 (`ColorModeSwitch`)。该组件允许用户在应用的亮色和暗色主题之间进行手动切换。核心技术点是使用 Chakra UI 提供的`useColorMode` Hook 来获取当前颜色模式并触发模式切换，以及使用`Switch`组件作为交互元素。

**知识树**

1. **Chakra UI `useColorMode` Hook**：
    - 作用：一个自定义 React Hook，用于访问和控制 Chakra UI 的颜色模式。
    - 返回值：一个对象，包含：
        - `colorMode`: 字符串，表示当前颜色模式 (`'light'` 或 `'dark'`)。
        - `toggleColorMode`: 函数，调用时会切换颜色模式。
2. **Chakra UI `Switch` 组件**：
    - 作用：一个标准的开关组件，用于布尔状态的切换。
    - `isChecked` prop: 布尔值，控制开关的选中状态。在本例中，其值根据当前是否为暗色模式 (`colorMode === 'dark'`) 动态设定。
    - `onChange` prop: 函数，在开关状态改变时触发。在本例中，直接传入从`useColorMode` Hook 获取的`toggleColorMode`函数。
    - `colorScheme` prop: 字符串，用于设定开关的颜色主题 (e.g., `"green"`)，使其在不同背景下更易辨识。
3. **组件实现 (`ColorModeSwitch.tsx`)**：
    - 在 `src/components` 目录下创建新组件。
    - 使用 `HStack` 布局，将 `Switch` 组件和描述性文本（如 "Dark Mode"）水平排列。
    - 调用 `useColorMode()` 获取 `colorMode` 和 `toggleColorMode`。
    - 将获取的值绑定到 `Switch` 组件的相应 props 上。
4. **集成到导航栏 (`NavBar.tsx`)**：

    - 将 `ColorModeSwitch` 组件添加到 `NavBar` 中。
    - 使用 `HStack` 的 `justifyContent="space-between"` 属性，将 Logo 和颜色模式切换器分别推向导航栏的两端。
    - 为 `NavBar` 的 `HStack` 添加 `padding` 属性，以增加导航栏内容与屏幕边缘的间距，改善视觉效果。

5. **清理调试样式**：移除之前在`App.tsx`中为`aside`和`main`区域设置的临时背景色，以便更好地观察颜色模式切换效果。

**代码示例**

2. 创建 `ColorModeSwitch.tsx` (在 `src/components/ColorModeSwitch.tsx`)

    ```TypeScript
    import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

    const ColorModeSwitch = () => {
      const { colorMode, toggleColorMode } = useColorMode(); // 1. 使用Hook获取状态和方法

      return (
        <HStack>
          <Switch
            colorScheme="green" // 2. 设置颜色方案
            isChecked={colorMode === 'dark'} // 3. 根据当前模式决定开关状态
            onChange={toggleColorMode} // 4. 状态改变时调用切换方法
          />
          <Text whiteSpace="nowrap">Dark Mode</Text> {/* 使用 whiteSpace="nowrap" 防止文本换行 */}
        </HStack>
      );
    };

    export default ColorModeSwitch;
    ```

3. 将 `ColorModeSwitch` 集成到 `NavBar.tsx`

    ```TypeScript
    import { HStack, Image } from '@chakra-ui/react';
    import logo from '../assets/logo.webp';
    import ColorModeSwitch from './ColorModeSwitch'; // 1. 导入组件

    const NavBar = () => {
      return (
        // 2. 使用 justifyContent 和 padding 调整布局
        <HStack justifyContent="space-between" padding="10px">
          <Image src={logo} boxSize="60px" />
          <ColorModeSwitch /> {/* 3. 添加组件 */}
        </HStack>
      );
    };

    export default NavBar;
    ```

## 9. 数据获取：从 API 获取游戏列表

> 简述：本节介绍如何从外部 API (RAWG.io) 获取视频游戏数据并在应用中展示。核心技术包括使用 Axios 库发送 HTTP 请求，创建并配置一个专门的 API 客户端模块，定义 TypeScript 接口来规范化 API 响应和游戏数据的结构，以及在 React 组件中使用`useState`和`useEffect` Hooks 来管理异步获取的数据、加载状态和潜在的错误。

**知识树**

2. **RAWG.io API**：

    - 作用：一个提供丰富视频游戏信息的第三方 API。
    - 准备：需要注册账户并获取 API Key。API Key 用于认证请求。

3. **Axios (HTTP 客户端库)**：

    - 作用：一个基于 Promise 的库，用于在浏览器和 Node.js 中发送 HTTP 请求。
    - 安装：`npm install axios`。

4. **API 客户端模块 (`src/services/api-client.ts`)**：

    - 目的：集中管理 API 请求的配置，如基础 URL 和通用参数（如 API Key）。
    - 实现：
        - 使用 `axios.create()` 创建一个 Axios 实例。
        - `baseURL`: 设置为 RAWG API 的基础路径 (e.g., `https://api.rawg.io/api`)。
        - `params`: 设置一个包含 `key` 属性的对象，其值为你的 API Key。这样，所有通过此实例发送的请求都会自动携带 API Key 作为查询参数。
        - 默认导出此配置好的 Axios 实例。
        - **安全提示**：API Key 不应直接硬编码在源代码中并提交到公共仓库。实际项目中应使用环境变量等更安全的方式管理。

5. **TypeScript 接口 (Data Contracts)**：

    - 目的：为从 API 获取的数据定义清晰的类型结构，增强代码的可维护性和类型安全。
    - `Game` 接口：描述单个游戏对象的核心属性 (初期如 `id`, `name`；后续可扩展)。
    - `WorkspaceGamesResponse` 接口：描述 `/games` API 端点返回的 JSON 对象的结构，通常包含 `count` (总条目数) 和 `results` (游戏对象数组)。

6. **React 组件中的数据获取逻辑 (`GameGrid.tsx`)**：

    - `useState` Hook：
        - `games`: `Game[]` 类型，用于存储从 API 获取的游戏列表，初始值为空数组。
        - `error`: `string` 类型，用于存储数据获取过程中可能发生的错误信息，初始值为空字符串。
    - `useEffect` Hook：
        - 用于在组件首次渲染后执行数据获取这一副作用操作。
        - 依赖数组 `[]` (空数组)：确保副作用仅在组件挂载 (mount) 时执行一次。
        - 逻辑：
            - 调用 `apiClient.get<FetchGamesResponse>('/games')` 发送 GET 请求。
            - 使用泛型 `<FetchGamesResponse>` 告知 Axios 期望的响应数据结构。
            - `.then(response => setGames(response.data.results))`: 请求成功时，用响应中的游戏列表更新`games`状态。
            - `.catch(error => setError(error.message))`: 请求失败时，用错误信息更新`error`状态。

7. **数据渲染与错误处理**：

    - 在组件的 JSX 中，遍历 `games` 数组，将每个游戏的信息（如名称）渲染到页面上（初期使用简单的 `<ul>` 和 `<li>`）。
    - 条件渲染 `error` 状态，当有错误发生时显示错误信息。

**代码示例**

2. 创建 `api-client.ts` (在 `src/services/api-client.ts`)

    - 获取 RAWG.io API-key：https://rawg.io/@fangrr4/apikey

    ```TypeScript
    import axios from 'axios';

    // !!! 警告：API Key 不应直接硬编码。此处为教学简化。!!!
    // !!! 在实际项目中，请使用环境变量。!!!
    const API_KEY = 'a841d5a4ef7b426f9432d3ffd1989b69'; // 替换为你的真实API Key

    export default axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: API_KEY,
      },
    });
    ```

3. 定义数据接口 (可在 `GameGrid.tsx` 内，或更佳实践是放在如 `src/entities.ts` 的独立文件中)

    ```TypeScript
    export interface Game { // 确保导出，如果后续要在其他地方使用
      id: number;
      name: string;
      // 后续会添加更多属性，如 background_image
    }

    export interface FetchGamesResponse { // 确保导出
      count: number;
      results: Game[];
      // next: string | null;
      // previous: string | null;
    }
    ```

4. 在 `GameGrid.tsx` 中获取并展示游戏 (在 `src/components/GameGrid.tsx`)

    ```TypeScript
    import { useEffect, useState } from 'react';
    import apiClient from '../services/api-client'; // 1. 导入API客户端
    import { Game, FetchGamesResponse } from './interfaces'; // 2. 假设接口已移到单独文件或在此定义
    import { Text } from '@chakra-ui/react'; // 用于显示错误

    const GameGrid = () => {
      const [games, setGames] = useState<Game[]>([]); // 3. 初始化状态
      const [error, setError] = useState('');

      useEffect(() => {
        // 4. 发起API请求
        apiClient
          .get<FetchGamesResponse>('/games') // 使用泛型指定响应类型
          .then(res => {
            setGames(res.data.results); // 5. 更新游戏数据
          })
          .catch(err => {
            setError(err.message); // 6. 更新错误状态
          });
      }, []); // 7. 空依赖数组，仅执行一次

      return (
        <>
          {error && <Text color="red.500">{error}</Text>} {/* 显示错误信息 */}
          <ul>
            {games.map(game => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        </>
      );
    };

    export default GameGrid;
    ```

---

## 10. 代码重构：创建自定义 Hook 管理数据获取逻辑

> 简述：本节的核心思想是将组件内部负责数据获取的状态管理 (`useState`) 和副作用逻辑 (`useEffect`) 封装到一个可复用的自定义 React Hook (`useGames`) 中。这样做能够有效地分离 UI 展示和数据获取的关注点，使得组件代码更加简洁、易读，同时也提高了数据获取逻辑的模块化程度和可维护性。此外，还引入了`AbortController`来实现请求取消机制，以防止在组件卸载后仍尝试更新状态，尤其是在 React 严格模式下。

**知识树**

2. **自定义 Hook (Custom Hook)**：

    - 目的：提取组件逻辑到可复用的函数中。对于数据获取，常用于封装 API 调用、状态管理（数据、加载中、错误）及副作用。
    - 命名约定：以 `use` 开头，例如 `useGames`。
    - 实现：本质上是一个 JavaScript 函数，内部可以调用其他 Hooks（如`useState`, `useEffect`）。

3. **关注点分离 (Separation of Concerns)**：

    - 组件职责：主要负责 UI 的渲染和响应用户交互。
    - Hook 职责：封装特定的逻辑，如数据获取、状态同步等。

4. **创建 `useGames` Hook (`src/hooks/useGames.ts`)**：

    - 将原 `GameGrid` 组件中的 `games` 和 `error` 状态 (使用 `useState`) 迁移到 `useGames` Hook 内部。
    - 将数据获取的 `useEffect` 逻辑也完整迁移到 Hook 内部。
    - `useGames` Hook 返回一个包含 `games` 和 `error` 的对象，供调用的组件使用。
    - 相关的 TypeScript 接口定义（如 `Game`, `WorkspaceGamesResponse`）也应移至 Hook 文件或统一的实体类型文件 (`entities.ts`) 中，并确保被导出。

5. **请求取消机制 (`AbortController`)**：

    - 原因：在 React 严格模式下，`useEffect` (带空依赖数组) 会执行两次挂载-卸载-再挂载的周期，以帮助开发者发现副作用问题。若 HTTP 请求未被妥善取消，在组件卸载后发起的请求回调仍可能尝试更新已卸载组件的状态，导致内存泄漏或错误。
    - 实现步骤： 2. 在 `useEffect` 内部，创建一个 `AbortController` 实例。 3. 将 `controller.signal` 对象作为配置项传递给 `apiClient.get` 方法的 `signal` 属性。 4. `useEffect` 返回一个清理函数，在该函数中调用 `controller.abort()`。这会在组件卸载或 `useEffect` 重新执行前取消关联的 HTTP 请求。 5. 在 `catch` 错误处理逻辑中，需要判断错误是否是由请求取消引起的。如果是，则通常不应将其视为一个需要向用户显示的“真实”错误。可以使用 `err instanceof CanceledError` (从 `axios` 导入) 来判断。

6. **在组件中使用自定义 Hook**：

    - 在 `GameGrid.tsx` 中，移除原有的 `useState` 和 `useEffect`。
    - 导入并调用 `useGames()` Hook。
    - 从 Hook 的返回值中解构出 `games` 和 `error` 状态，用于渲染 UI。

**代码示例**

1. 创建 `useGames.ts` 自定义 Hook (在 `src/hooks/useGames.ts`)

```TypeScript
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios'; // 1. 导入 CanceledError

// 建议将这些接口放到 src/entities.ts 或类似文件中
export interface Game {
  id: number;
  name: string;
  // background_image: string; // 确保已添加
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController(); // 2. 创建AbortController

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal }) // 3. 传递signal
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // 4. 如果是取消错误，则不更新error状态
        setError(err.message);
      });

    // 5. 返回清理函数，用于取消请求
    return () => controller.abort();
  }, []); // 依赖数组保持为空，表示仅在挂载和卸载时运行

  return { games, error }; // 6. 返回数据和错误状态
};

export default useGames;
```

2. 在 `GameGrid.tsx` 中使用 `useGames` Hook (在 `src/components/GameGrid.tsx`)

    ```TypeScript
    import useGames from '../hooks/useGames'; // 1. 导入自定义Hook
    import { Text } from '@chakra-ui/react'; // 假设用于显示错误

    const GameGrid = () => {
      const { games, error } = useGames(); // 2. 调用Hook并解构返回值

      // UI渲染逻辑保持不变
      return (
        <>
          {error && <Text color="red.500">{error}</Text>}
          <ul>
            {games.map((game) => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        </>
      );
    };

    export default GameGrid;
    ```

---

## 11. UI 展示：构建游戏卡片与响应式网格

> 简述：本节介绍如何创建一个专门的`GameCard`组件来美化单个游戏的展示效果，包括游戏封面图片和名称。随后，使用 Chakra UI 的`SimpleGrid`组件取代之前临时的无序列表，以更具吸引力的响应式网格布局来陈列这些游戏卡片。响应式设计确保了在不同屏幕尺寸下网格的列数能自动调整，提供良好的视觉体验。

**知识树**

2. **`GameCard` 组件 (`src/components/GameCard.tsx`)**：

    - 目的：封装单个游戏的视觉表现。
    - Props：接收一个 `game` 对象作为属性，其类型应为之前定义（并可能已更新）的 `Game` 接口。
    - UI 结构：
        - 使用 Chakra UI 的 `<Card>` 作为卡片容器。
        - 使用 `<Image>` 显示游戏封面 (通过 `game.background_image` 属性)。
        - 使用 `<CardBody>` 包裹卡片内容。
        - 使用 `<Heading>` 显示游戏名称 (通过 `game.name`)。
    - 样式调整：
        - `<Card>`: 设置 `borderRadius` (如 `10px`) 使卡片边缘圆润；设置 `overflow="hidden"` 解决图片可能溢出圆角容器的问题。
        - `<Heading>`: 设置 `fontSize` (如 `"2xl"`) 调整标题大小，使其更易读。

3. **`Game` 接口更新**：

    - 为 `Game` 接口添加 `background_image: string` 属性，以对应 RAWG API 返回数据中游戏封面图片的字段名。
    - **重要**：确保此接口在`useGames` Hook 和`GameCard`组件中都得到正确引用和更新。建议将共享的接口定义（如`Game`）统一放置在如 `src/entities.ts` 的文件中，并从那里导入，以避免在 Hook 和组件间“尴尬地”导入接口。

4. **Chakra UI `SimpleGrid` 组件**：

    - 作用：一个便捷的组件，用于快速创建响应式的网格布局。
    - 替换：在 `GameGrid.tsx` 中，用 `<SimpleGrid>` 替换原先的 `<ul>`。
    - 核心 Props：
        - `columns`: 可以是一个数字（固定列数），或一个对象来定义不同断点下的列数。例如：`columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}` 表示在小屏幕(sm)显示 1 列，中等屏幕(md)显示 2 列，以此类推。
        - `spacing`: 定义网格项（游戏卡片）之间的间距 (e.g., `spacing={6}`)。
        - `padding`: 为整个网格容器添加内边距 (e.g., `padding="10px"`)，使得内容不会紧贴屏幕边缘，特别是在小屏幕上。

5. **响应式网格实现**：

    - 通过为 `SimpleGrid` 的 `columns` prop 提供一个包含不同断点和对应列数的对象，轻松实现网格在不同设备尺寸下的自适应调整。
    - 结合浏览器开发者工具的设备模拟功能，可以直观地测试和调整响应式效果。

**代码示例**

2. 更新 `Game` 接口 (例如，在 `src/hooks/useGames.ts` 或更推荐的 `src/entities.ts`)

    ```TypeScript
    export interface Game {
      id: number;
      name: string;
      background_image: string; // 1. 添加 background_image 属性
    }
    ```

3. 创建 `GameCard.tsx` (在 `src/components/GameCard.tsx`)

    ```TypeScript
    import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
    import { Game } from '../hooks/useGames'; // 2. 导入Game接口 (或从entities.ts导入)

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card borderRadius={10} overflow="hidden"> {/* 3. 设置圆角和溢出隐藏 */}
          <Image src={game.background_image} alt={game.name} /> {/* 4. 显示游戏封面 */}
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading> {/* 5. 显示游戏名称 */}
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

4. 在 `GameGrid.tsx` 中使用 `SimpleGrid` 和 `GameCard`

    TypeScript

    ```TypeScript
    import { SimpleGrid, Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames';
    import GameCard from './GameCard'; // 1. 导入GameCard组件

    const GameGrid = () => {
      const { games, error } = useGames();

      if (error) return <Text color="red.500">{error}</Text>; // 错误处理提前返回

      return (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // 2. 配置响应式列数
          padding="10px"                             // 3. 添加内边距
          spacing={6}                                // 4. 设置间距 (字幕中是10，后改为6)
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} /> // 5. 渲染GameCard组件
          ))}
        </SimpleGrid>
      );
    };

    export default GameGrid;
    ```

| 概念       | Vue 方式                  | React（GameHub 项目）方式         |
| ---------- | ------------------------- | --------------------------------- |
| 状态管理   | Vuex 或响应式 data        | Hook + Zustand + 局部 useState    |
| 响应式布局 | Tailwind / media query    | Chakra UI 的断点响应式属性        |
| 模板结构   | 单文件组件，template 为主 | JSX + 函数组件，关注组件函数      |
| 样式管理   | scoped CSS / Tailwind     | style props + 主题系统            |
| 逻辑抽离   | mixins / composables      | 自定义 Hook（业务逻辑与组件解耦） |

## 12. UI 增强：展示平台图标

> 简述：本节介绍如何在游戏卡片上动态显示各个游戏所支持的平台图标（如 Windows, PlayStation, Xbox 等）。这涉及到理解并处理 API 返回的嵌套平台数据结构，安装并使用 `react-icons` 库来获取各种图标，创建一个映射平台标识符（slug）到具体图标组件的查找表（`iconMap`），并封装一个新的 `PlatformIconList` 组件来统一管理和渲染这些图标。display paltform icons

**知识树**

1. **API 数据结构解析 (`parent_platforms`)**：
    - 游戏对象中 `parent_platforms` 属性是一个数组，数组中的每个元素是一个对象，该对象内含一个 `platform` 属性，这个 `platform` 属性才是真正的平台信息对象（包含 id, name, slug）。
    - **设计反思 (Design Smell)**：讲师指出 API 在此处的嵌套设计（对象数组内每个对象再包一个平台对象）略显不直观，更理想的设计是 `parent_platforms` 直接是一个平台对象的数组。
2. **接口更新**：
    - **`Game` 接口**：添加 `parent_platforms: { platform: Platform }[]` 属性。
    - **`Platform` 接口**：定义平台对象的结构，包含 `id: number`, `name: string`, `slug: string`。确保此接口被导出，以便其他模块使用。
3. **`react-icons` 库**：
    - 作用：一个庞大的 SVG 图标库，包含了多种流行图标集的 React 组件。
    - 安装：`npm install react-icons`。
    - 使用：从其特定子目录导入所需图标，例如：
        - `react-icons/fa` (Font Awesome)
        - `react-icons/md` (Material Design)
        - `react-icons/si` (Simple Icons)
        - `react-icons/bs` (Bootstrap Icons)
4. **`PlatformIconList` 组件 (`src/components/PlatformIconList.tsx`)**：
    - 目的：封装显示平台图标列表的逻辑。
    - Props：接收一个 `platforms: Platform[]` 数组作为属性。
    - 内部逻辑：遍历 `platforms` 数组，为每个平台查找并渲染对应的图标。
5. **图标映射表 (`iconMap`)**：
    - 实现：在 `PlatformIconList` 组件内部定义一个对象。
    - 结构：键 (key) 为平台的小写 `slug` (如 `'pc'`, `'playstation'`, `'xbox'`)，值 (value) 为从 `react-icons` 导入的对应图标组件 (如 `FaWindows`, `FaPlaystation`, `FaXbox`)。
    - **TypeScript 类型注解 (Index Signature)**：为 `iconMap` 提供一个索引签名 `[key: string]: IconType`，其中 `IconType` 从 `react-icons/lib` 导入（或者根据实际情况从 `react-icons` 主入口导入，具体看库的导出方式）。这解决了 TypeScript 无法直接通过字符串索引泛型对象的问题，并提供了类型安全。
6. **动态渲染图标**：
    - 使用 Chakra UI 的 `<Icon>` 组件。
    - 将其 `as` prop 动态设置为 `iconMap[platform.slug]`，即根据当前平台的`slug`从映射表中获取对应的图标组件进行渲染。
7. **布局与样式**：
    - 使用 Chakra UI 的 `<HStack>` 组件将多个平台图标水平排列。
    - 图标颜色：通过 `<Icon>` 组件的 `color` prop 设置 (e.g., `'gray.500'`)，使其与文本内容有所区分，降低视觉干扰。
        - 自定义主题颜色： `style system->default theme`
    - 间距：为 `<HStack>` 设置 `marginY` (或 `margin` 在 `GameCard` 中包裹 `PlatformIconList` 的地方)，以调整图标列表与游戏标题之间的垂直间距。
        - marginY={1} 数字是`theme.space`的倍数，例如 Chakra 的默认`theme.space`是 4px
        - marginY={'10px'}
8. **数据转换 (在 `GameCard.tsx` 中)**：
    - 由于 API 返回的 `game.parent_platforms` 结构是 `{ platform: Platform }[]`，而 `PlatformIconList`期望接收 `Platform[]`，因此在传递 props 时需要进行映射转换：
        ```TypeScript
        platforms={game.parent_platforms.map(p => p.platform)}
        ```

**代码示例**

1.  更新接口 (例如在 `src/entities.ts` 或 `src/hooks/useGames.ts`)

    ```TypeScript
    export interface Platform {
      id: number;
      name: string;
      slug: string;
    }

    export interface Game {
      // ...其他属性
      parent_platforms: { platform: Platform }[]; // 更新此属性
    }
    ```

2.  安装 `react-icons`

    ```
    npm install react-icons
    ```

3.  创建 `PlatformIconList.tsx`

    ```TypeScript
    import { HStack, Icon } from '@chakra-ui/react';
    import { Platform } from '../entities'; // 假设 Platform 接口已移至 entities.ts
    import { IconType } from 'react-icons'; // 用于 iconMap 类型
    import {
      FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid,
    } from 'react-icons/fa';
    import { MdPhoneIphone } from 'react-icons/md';
    import { SiNintendo } from 'react-icons/si';
    import { BsGlobe } from 'react-icons/bs';

    interface Props {
      platforms: Platform[];
    }

      // platform-icon-list.tsx
    const iconMap: { [key: string]: IconType } = {
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      nintendo: SiNintendo,
      mac: FaApple,
      linux: FaLinux,
      ios: MdPhoneIphone,
      web: BsGlobe,
      android: FaAndroid,
    };

    return (
    	<HStack marginY={1}> {/* marginY='1' 字幕中是 marginY={1}，通常 Chakra 的单位是 theme.space 的倍数 */}
    	  {platforms.map((platform) => (
    		<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
    	  ))}
    	</HStack>
    );
    ```

};

export default PlatformIconList;

`````

4. 在 `GameCard.tsx` 中使用 `PlatformIconList`

    ```TypeScript
    // ... (其他 GameCard imports)
    import PlatformIconList from './PlatformIconList'; // 导入组件
    import { Game } from '../entities'; // 确保 Game 接口已包含 parent_platforms

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          <Image src={game.background_image} /* ... */ />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            {/* 将 parent_platforms 映射为 Platform[] 再传递 */}
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          </CardBody>
        </Card>
      );
    };
    // ...
    ```

---

## 13. UI 信息：展示游戏评分

> 简述：本节介绍如何在游戏卡片上增加一个显示游戏媒体综合评分（Metacritic score）的徽章。这包括更新`Game`数据接口以包含评分属性，创建一个新的`CriticScore`组件来封装评分的显示逻辑，利用 Chakra UI 的`Badge`组件进行美观展示，并根据评分数值动态调整徽章的颜色方案，从而为用户提供更直观的评价信息。

**知识树**

1. **API 数据点识别**：
    - 游戏对象中包含 `metacritic` 属性，其值为一个数字，代表该游戏的媒体综合评分。
2. **`Game` 接口更新**：
    - 在 `Game` 接口 (通常在 `src/entities.ts`) 中添加 `metacritic: number` 属性。
3. **创建 `CriticScore` 组件 (`src/components/CriticScore.tsx`)**：
    - 目的：专门负责展示评分徽章。
    - Props：接收一个 `score: number` 作为属性。
    - UI 实现：使用 Chakra UI 的 `<Badge>` 组件。
4. **`<Badge>` 组件样式与属性**：
    - `children`: 直接显示传入的 `score` 数字。
    - `fontSize`: 例如设置为 `"14px"`，使文字大小适中。
    - `paddingX`: 例如设置为 `2` (Chakra UI 主题的 spacing 单位，通常是 0.5rem 或 8px，取决于主题配置)，增加徽章内部的水平内边距。
    - `borderRadius`: 例如设置为 `"4px"`，使徽章边角更圆润。
    - `colorScheme`: 动态设置，根据 `score` 的高低变换颜色 (e.g., 绿色代表高分，黄色代表中等分)。
5. **动态颜色方案逻辑**：
    - 在 `CriticScore` 组件内部，根据传入的 `score` 值决定 `colorScheme`：
        - 若 `score > 75`，则 `colorScheme = 'green'`。
        - 若 `score > 60` (且不大于 75)，则 `colorScheme = 'yellow'`。
        - 否则，`colorScheme = ''` (使用 Chakra UI 的默认徽章颜色或不指定特定颜色方案)。
6. **在 `GameCard.tsx` 中集成 `CriticScore`**：
    - 将 `CriticScore` 组件添加到卡片内容区。
    - 使用 `<HStack>` 将游戏标题（或平台图标列表）和 `CriticScore` 组件水平排列。
    - 利用 `<HStack>` 的 `justifyContent="space-between"` 属性，可以使标题和评分徽章分别位于`HStack`容器的两端。
7. **API 设计反思**：
    - 讲师提到 `metacritic` 这个属性名本身可能不够通用（因为"meta"可以指代多种元数据），但作为 API 的消费者，只能接受并使用它。

**代码示例**

1. 更新 `Game` 接口 (在 `src/entities.ts`)

    TypeScript

    ```TypeScript
    export interface Game {
      // ...其他属性
      metacritic: number; // 添加 metacritic 评分属性
    }
    ```

2. 创建 `CriticScore.tsx`

    TypeScript

    ```TypeScript
    import { Badge } from '@chakra-ui/react';

    interface Props {
      score: number;
    }

    const CriticScore = ({ score }: Props) => {
      let colorScheme = '';
      if (score > 75) {
        colorScheme = 'green';
      } else if (score > 60) {
        colorScheme = 'yellow';
      }
      // 如果分数较低，colorScheme 将保持为空字符串，使用 Badge 的默认外观

      return (
        <Badge colorScheme={colorScheme} fontSize="14px" paddingX={2} borderRadius="4px">
          {score}
        </Badge>
      );
    };

    export default CriticScore;
    ```

3. 在 `GameCard.tsx` 中集成 `CriticScore`

    ```TypeScript
    // ... (其他 GameCard imports)
    import CriticScore from './CriticScore'; // 导入 CriticScore
    import PlatformIconList from './PlatformIconList'; // 已有的平台图标列表

    interface Props {
      game: Game; // Game 接口已更新包含 metacritic
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          <Image src={getCroppedImageUrl(game.background_image)} /* ... */ /> {/* 使用优化图片URL的函数 */}
          <CardBody>

	        <Heading fontSize="2xl">{game.name}</Heading>
			<HStack justifyContent="space-between" marginBottom={3}> {/* 新增 HStack 包裹标题和评分 */}

	            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
	            <CriticScore score={game.metacritic} /> {/* 添加 CriticScore 组件 */}
            </HStack>
          </CardBody>
        </Card>
      );
    };
    // ... (getCroppedImageUrl 函数需已定义或导入)
    ```

    - 注意: 字幕中是将 `CriticScore` 放在 `PlatformIconList` 之后，但通常评分会和标题放在一行。上述示例将标题和评分放在了一个新的 `HStack` 中，并用 `justifyContent="space-between"` 分开。如果设计是将评分放在平台图标后，则无需此额外 `HStack`。这里我根据常见的 UI 实践调整了一下，原字幕中是直接在`CardBody`的`Heading`后添加`CriticScore`，再之后是`PlatformIconList`，这意味着评分和平台图标都在标题之下。若要严格按字幕，则 `CriticScore` 应直接放在 `Heading` 下方，`PlatformIconList` 之后。不过，将标题和评分并列更常见。为忠实于字幕可能的顺序，这里也给出另一种集成方式： <!-- end list -->

    TypeScript

    ```TypeScript
    // ...
    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          <Image src={getCroppedImageUrl(game.background_image)} /* ... */ />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} /> {/* 放在 PlatformIconList 之后 */}
          </CardBody>
        </Card>
      );
    };
    // ...
    ```

    考虑到字幕中 `HStack` 的用法通常是为了将元素横向排列并控制间距，且评分常与标题或主要信息块对齐，我将采用将评分与标题放在同一行的 `HStack` 的示例，因为它更符合组件化和常见布局思路。如果字幕中是明确的垂直堆叠，则不需要额外的 `HStack`。字幕中，`CriticScore`是放在`Heading`和`PlatformIconList`之后的，并没有新增一个`HStack`包裹`Heading`和`CriticScore`。不过，之后为了把它推到右边，确实是把`Heading`和`CriticScore`放到了同一个`HStack`里。因此，第一个示例代码中的`HStack`是更符合最终实现的。

---

## 14. 性能优化：获取裁剪后的优化图片

> 简述：本节的核心目标是提升应用的图片加载性能。通过分析发现 RAWG API 提供的原始游戏图片尺寸较大，直接用于卡片展示会造成不必要的带宽浪费和加载延迟。解决方案是创建一个工具函数 `getCroppedImageUrl`，该函数能够根据 API 图片 URL 的特定规律，在 URL 中动态插入裁剪参数（如 `crop/600/400/`），从而请求到尺寸更小、经过服务器端裁剪优化的图片版本。

**知识树**

1. **性能瓶颈分析**：
    - 直接使用 API 返回的原始图片 (`background_image`) 尺寸过大，导致页面加载慢，尤其是在网络连接较差的情况下。
2. **API 图片 URL 特性（探索性发现）**：
    - RAWG API 的图片 URL 结构中，在 `media/` 路径段之后，可以通过插入 `crop/<width>/<height>/` （例如 `crop/600/400/`）参数来获取服务器端裁剪后的、尺寸更小的图片版本。
    - 这并非官方文档明确说明的功能，而是通过观察和尝试发现的。
3. **工具函数 `getCroppedImageUrl` (`src/services/image-url.ts`)**：
    - 目的：封装修改图片 URL 以获取裁剪版本的逻辑，避免在组件中直接操作 URL 字符串。
    - 输入参数：`imageUrl: string` (原始图片 URL)。
    - 输出参数：`string` (添加了裁剪参数的新图片 URL)。
    - 实现逻辑：
        1. 定义目标字符串 `target = 'media/'`。
        2. 查找 `target` 在原始 `imageUrl` 中的索引位置。
        3. 如果未找到 `target`，则直接返回原始 URL（或进行错误处理/返回占位图 URL）。
        4. 如果找到，则使用字符串的 `slice()` 方法将 URL 分割成两部分：`target` 之前的部分（包括`target`本身）和 `target` 之后的部分。
        5. 在两部分之间插入裁剪参数字符串，例如 `'crop/600/400/'`。
        6. 拼接三部分形成新的 URL 并返回。
4. **在 `GameCard.tsx` 中应用**：
    - 导入 `getCroppedImageUrl` 函数。
    - 在渲染 `<Image>` 组件时，将其 `src` 属性设置为调用 `getCroppedImageUrl(game.background_image)` 的结果。
5. **验证效果**：
    - 通过浏览器开发者工具的“Network”标签页，对比优化前后的图片请求，确认下载的图片文件大小是否显著减小，以及图片是否被正确裁剪。

**代码示例**

1. 创建 `image-url.ts` (在 `src/services/image-url.ts`)

    TypeScript

    ```TypeScript
    const getCroppedImageUrl = (url: string) => {
      if (!url) return ''; // 如果URL为空或无效，返回空字符串或占位图URL

      const target = 'media/';
      const index = url.indexOf(target) + target.length; // 找到 'media/' 后面的位置

      // 如果 'media/' 不存在，或者URL过短，可能直接返回原URL或处理
      if (index < target.length) return url;

      // 在 'media/' 之后插入裁剪参数 'crop/600/400/'
      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    };

    export default getCroppedImageUrl;
    ```

    - 注意：字幕中的实现是找到 `media/`，然后截取到 `media/` 结束，在其后添加 `crop/600/400/`，再拼接上 `media/` 之后原 URL 的剩余部分。
    - 字幕中具体实现: `const index = url.indexOf('media/') + 'media/'.length; return url.slice(0, index) + 'crop/600/400/' + url.slice(index);`
    - 这里假设了 `media/` 一定存在。更健壮的实现会检查 `indexOf` 的结果是否为 `-1`。

2. 在 `GameCard.tsx` 中使用该函数

    TypeScript

    ```TypeScript
    // ... (其他 GameCard imports)
    import getCroppedImageUrl from '../services/image-url'; // 1. 导入工具函数
    import { Game } from '../entities';

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          {/* 2. 使用函数处理图片URL */}
          <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
          <CardBody>
            {/* ... 其他内容 ... */}
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

---

## 15. 用户体验：使用加载骨架屏

> 简述：本节旨在通过引入加载骨架屏（Loading Skeletons）来优化数据加载过程中的用户体验。当应用正在从服务器获取游戏列表时，骨架屏会以占位符的形式模拟最终内容的布局和形状，给用户一种应用正在积极加载的反馈，这比显示空白页面或简单的旋转指示器更为友好。实现方式包括在自定义 Hook 中跟踪加载状态，并创建一个与实际游戏卡片结构相似的`GameCardSkeleton`组件。

**知识树**

1. **加载骨架屏 (Loading Skeletons)**：
    - 目的：在真实数据加载完成前，提供一个视觉占位，模拟页面内容的结构，改善用户对加载等待时间的感知。
2. **加载状态管理 (在 `useGames` 或通用的 `useData` Hook 中)**：
    - 添加 `isLoading: boolean` 状态变量，初始值通常设为 `true` (如果页面一加载就开始获取数据) 或 `false` (如果由用户操作触发)。字幕中设为 `false`，在请求前置为 `true`。
    - 在发起 API 请求之前，设置 `isLoading = true`。
    - 在 API 请求完成（无论成功或失败）之后，设置 `isLoading = false`。
        - 字幕中提到，理想情况下这应在 `finally` 块中处理，但由于 React 严格模式 (Strict Mode) 的某些行为，暂时在 `.then()` 和 `.catch()` 回调中分别设置。
    - 确保 `isLoading` 状态从 Hook 中返回，供组件使用。
3. **创建 `GameCardSkeleton` 组件 (`src/components/GameCardSkeleton.tsx`)**：
    - 目的：创建一个视觉上模拟 `GameCard` 结构的占位组件。
    - UI 结构：
        - 使用 Chakra UI 的 `<Card>` 作为容器。
        - 使用 `<Skeleton>` 组件（Chakra UI）替代 `GameCard` 中的 `<Image>`，用于显示图片占位。可以设置其 `height`。
        - 使用 `<CardBody>`。
        - 使用 `<SkeletonText>` 组件（Chakra UI）替代 `GameCard` 中的 `<Heading>` 或其他文本内容，用于显示文本占位。
4. **在 `GameGrid.tsx` 中集成骨架屏**：
    - 从 `useGames` (或 `useData`) Hook 中获取 `isLoading` 状态。
    - 创建一个本地数组 `skeletons` (例如 `[1, 2, 3, 4, 5, 6]`，数量可根据一页显示的卡片数估算)，用于在加载时循环渲染多个骨架屏实例。这个数组本身的值不重要，仅用于 `map` 循环。
    - **条件渲染逻辑**：
        - 若 `isLoading` 为 `true`，则遍历 `skeletons` 数组，为每个元素渲染一个 `<GameCardSkeleton />` 组件（确保为每个骨架屏设置唯一的 `key` prop）。
        - 若 `isLoading` 为 `false`，则遍历 `games` (或 `data`) 数组，渲染实际的 `<GameCard />` 组件。
5. **样式一致性挑战与初步解决**：
    - 问题：骨架屏 (`GameCardSkeleton`) 和实际卡片 (`GameCard`) 的尺寸（特别是宽度和圆角）需要保持一致，否则在加载完成切换时会产生布局跳动。
    - 初步方案：为 `<GameCardSkeleton>` 的 `<Card>` 和 `<GameCard>` 的 `<Card>` 组件分别设置相同的 `width` (e.g., `"300px"`) 和 `borderRadius` (e.g., `10`)。
    - 代码重复：此方案会导致样式值在两个组件中重复，是潜在的重构点。

**代码示例**

1. 更新 `useGames` (或 `useData`) Hook 以包含 `isLoading`状态

    TypeScript

    ```TypeScript
    // In src/hooks/useData.ts (or useGames.ts if not using generic useData)
    // ... (imports)
    const useData = <T>(endpoint: string /*, requestConfig?, deps? */) => { // 假设有 requestConfig 和 deps
      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false); // 1. 添加 isLoading 状态

      useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true); // 2. 请求开始前设置为 true

        apiClient
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, /* ...requestConfig */ })
          .then((res) => {
            setData(res.data.results);
            setIsLoading(false); // 3. 请求成功后设置为 false
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false); // 4. 请求失败后设置为 false
          });
        // ... (return controller.abort)
      } /*, deps ? [...deps] : [] */); // 注意依赖项

      return { data, error, isLoading }; // 5. 返回 isLoading
    };
    // ...
    ```

2. 创建 `GameCardSkeleton.tsx` (在 `src/components/GameCardSkeleton.tsx`)

3 import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

````TypeScript
const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden"> {/* 字幕中是width='300px'，后改为不设固定宽度，由容器决定 */}
      <Skeleton height="200px" /> {/* 图片占位 */}
      <CardBody>
        <SkeletonText /> {/* 文本占位 */}
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
`````

- _Note on width:_ 字幕中一开始为 `GameCardSkeleton` 和 `GameCard` 设置了 `width="300px"`，但后来为了解决响应式布局问题，在第 19 节移除了这个固定宽度，改为由 `GameCardContainer` 配合 `SimpleGrid` 控制。笔记应反映最终的重构结果，或者指出这个演变过程。此处暂时保留字幕中本节的设定，后续笔记会提到移除。

`````

3. 在 `GameGrid.tsx` 中使用骨架屏

    TypeScript

    ```TypeScript
    // ... (imports for useGames, GameCard)
    import GameCardSkeleton from './GameCardSkeleton'; // 1. 导入骨架屏组件
    import { SimpleGrid } from '@chakra-ui/react'; // 假设SimpleGrid已在使用

    const GameGrid = () => {
      const { data: games, error, isLoading } = useGames(); // 2. 获取 isLoading 状态
      const skeletons = [1, 2, 3, 4, 5, 6]; // 3. 创建骨架屏占位数组 (数量可调)

      if (error) return <Text>{error}</Text>;

      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
          {isLoading && // 4. 如果正在加载
            skeletons.map((skeleton) => (
              <GameCardSkeleton key={skeleton} /> // 渲染骨架屏
            ))}
          {!isLoading && // 5. 如果加载完成
            games.map((game) => (
              <GameCard key={game.id} game={game} /> // 渲染实际卡片
            ))}
        </SimpleGrid>
      );
    };
    // ...
    ```

---

## 16. 代码重构：移除重复样式

> 简述：本节通过创建一个新的 UI 容器组件——`GameCardContainer`——来解决在`GameCard`和`GameCardSkeleton`之间存在的重复样式代码问题。这个新组件将统一承载这些共享的卡片基础样式（如边框圆角、溢出隐藏），而实际的卡片内容（无论是真实游戏数据还是骨架占位符）则作为`children`传递给这个容器。这种重构提高了代码的可维护性，并遵循了 DRY (Don't Repeat Yourself) 原则。

**知识树**

1. **识别代码重复**：
    - 在 `GameCard.tsx` 和 `GameCardSkeleton.tsx` 的根 `<Card>` 组件上，存在相同的样式属性，例如 `borderRadius={10}` 和 `overflow="hidden"` (字幕中还提到之前可能存在的 `width` 属性，但在上一节的最终实现中，固定宽度已被移除或将要被移除以适应响应式布局)。
2. **重构策略：创建容器组件**：
    - 新建一个组件 `GameCardContainer.tsx` (在 `src/components` 目录下)。
    - 该组件的作用是提供一个带有共享样式的外壳或容器。
3. **`GameCardContainer` 组件实现**：
    - 使用 Chakra UI 的 `<Box>` 组件作为基础。`<Box>` 是一个非常基础的布局组件，默认渲染为 `div`，可以方便地应用样式。
    - 将原先在 `GameCard` 和 `GameCardSkeleton` 中重复的样式属性（如 `borderRadius`, `overflow`）应用到这个 `<Box>` 组件上。
    - Props：定义 `children: ReactNode` prop，用于接收要包裹的内容。`ReactNode` 是 React 中一个广泛的类型，可以代表任何可渲染的内容。
    - 渲染逻辑：在 `<Box>` 内部渲染 `{children}`。
4. **应用容器组件**：
    - 在 `GameGrid.tsx` 中：
        - 当渲染 `GameCardSkeleton` 时，用 `<GameCardContainer>` 将其包裹。
        - 当渲染 `GameCard` 时，同样用 `<GameCardContainer>` 将其包裹。
    - 在 `GameCard.tsx` 和 `GameCardSkeleton.tsx` 中：
        - 移除之前直接应用在它们根 `<Card>` 组件上的、现已移至 `GameCardContainer` 的那些共享样式属性。它们的根组件（`<Card>`）现在直接作为 `GameCardContainer` 的子元素。
5. **VS Code 快捷方式 (可选)**：
    - `Wrap with abbreviation` 命令 (在 Mac 上按 `Shift + Command + P`，在 Windows 上按 `Shift + Control + P`，然后搜索并选择此命令) 可以快速用指定的组件名（如 `GameCardContainer`）包裹选中的 JSX 代码块。

**代码示例**

1. 创建 `GameCardContainer.tsx` (在 `src/components/GameCardContainer.tsx`)

    TypeScript

    ```TypeScript
    import { Box, BoxProps } from '@chakra-ui/react'; // BoxProps 可选，用于更强的类型约束
    import { ReactNode } from 'react';

    interface Props {
      children: ReactNode;
    }

    const GameCardContainer = ({ children }: Props) => {
      return (
        // 将共享样式应用到 Box 组件
        <Box borderRadius={10} overflow="hidden">
          {children}
        </Box>
      );
    };

    export default GameCardContainer;
    ```

    - _Note:_ 字幕中 `GameCard` 和 `GameCardSkeleton` 的根元素仍然是 `Card`。`GameCardContainer` 包裹的是这些 `Card`。所以 `GameCardContainer` 内部的 `Box` 应用这些样式，然后它的 `children` 就是 `GameCard` 或 `GameCardSkeleton` 本身。

2. 修改 `GameCard.tsx` 和 `GameCardSkeleton.tsx`

    TypeScript

    ```TypeScript
    // In src/components/GameCard.tsx
    import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
    // ...
    const GameCard = ({ game }: Props) => {
      return (
        // 移除 borderRadius 和 overflow，这些由 GameCardContainer 处理
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)} /* ... */ />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            {/* ...其他内容... */}
          </CardBody>
        </Card>
      );
    };
    // ...

    // In src/components/GameCardSkeleton.tsx
    import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
    // ...
    const GameCardSkeleton = () => {
      return (
        // 移除 borderRadius 和 overflow
        <Card>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      );
    };
    // ...
    ```

3. 在 `GameGrid.tsx` 中使用 `GameCardContainer`

    TypeScript

    ```TypeScript
    // ... (imports)
    import GameCardContainer from './GameCardContainer'; // 1. 导入容器组件

    const GameGrid = () => {
      const { data: games, error, isLoading } = useGames();
      const skeletons = [1, 2, 3, 4, 5, 6];

      if (error) return <Text>{error}</Text>;

      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              // 2. 用 GameCardContainer 包裹骨架屏
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {!isLoading &&
            games.map((game) => (
              // 3. 用 GameCardContainer 包裹实际卡片
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      );
    };
    // ...
    ```

---

## 17. 功能扩展：获取游戏类型列表

> 简述：本节开始构建应用的侧边栏功能，第一步是获取并在侧边栏中展示游戏类型（Genres）列表。为此，将创建一个新的 UI 组件 `GenreList` 和一个新的自定义 Hook `useGenres`。`useGenres` Hook 的初始实现将借鉴之前创建的 `useGames` Hook 的结构，负责从 API 获取类型数据、管理相关状态，并定义相应的数据接口。这为后续实现按类型筛选游戏的功能奠定了基础。

**知识树**

1. **新功能需求**：在应用的侧边栏区域显示一个游戏类型列表。
2. **创建 `GenreList` 组件 (`src/components/GenreList.tsx`)**：
    - 目的：负责 UI 展示，将从 Hook 获取到的类型数据渲染成列表。
    - 初始渲染：暂时使用简单的 `<ul>` 和 `<li>` 来显示类型名称，以快速验证数据获取逻辑是否正确。
3. **创建 `useGenres` 自定义 Hook (`src/hooks/useGenres.ts`)**：
    - 目的：封装获取游戏类型数据的逻辑，包括 API 请求、状态管理（类型数据、加载状态、错误状态）。
    - **初期实现策略**：为了快速推进，允许暂时性地复制和修改 `useGames` Hook 的代码结构。讲师明确指出这会引入代码重复，并计划在后续步骤中进行重构。
    - **数据接口定义**：
        - `Genre` 接口：描述单个游戏类型的结构，至少包含 `id: number` 和 `name: string`。后续根据 API 响应可能需要添加 `image_background` 等属性。
        - `WorkspaceGenresResponse` 接口：描述从 `/genres` API 端点获取数据时的响应体结构，通常包含 `count: number` 和 `results: Genre[]`。
    - **状态变量**：使用 `useState` 管理 `genres: Genre[]`, `error: string`, `isLoading: boolean`。
    - **`useEffect` 逻辑**：
        - 使用 `apiClient` (之前创建的 Axios 实例) 向 `/genres` 端点发送 GET 请求。
        - 包含请求取消 (`AbortController`) 和错误处理逻辑，与 `useGames` 类似。
    - **返回值**：返回包含 `genres`, `error`, `isLoading` 的对象。
4. **API 端点**：`/genres` (RAWG API，用于获取游戏类型列表)。
5. **集成到主应用布局 (`App.tsx`)**：
    - 将创建的 `GenreList` 组件放置到 `App.tsx` 的 `Grid` 布局中代表侧边栏的 `GridItem` (标记为 `area="aside"`) 内。
6. **识别代码重复与重构计划**：
    - 讲师强调，在 `useGames` 和 `useGenres` 两个 Hook 之间存在明显的代码重复（数据获取、状态管理、错误处理逻辑几乎一致）。
    - 这为下一阶段通过创建更通用的数据获取 Hook 来消除重复埋下了伏笔。

**代码示例**

1. 定义接口 (建议放在 `src/entities.ts` 或 `src/hooks/useGenres.ts` 初期)

````TypeScript
    export interface Genre {

		id: number;
		name: string;
		// image_background: string; // 后续会添加
		}
		export interface FetchGenresResponse {
		  count: number;
		  results: Genre[];
	}
	```

2. 创建 `useGenres.ts` (在 `src/hooks/useGenres.ts`)ts

```TypeScript
import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';

import { CanceledError } from 'axios';

import { Genre, FetchGenresResponse } from '../entities'; // 假设接口在 entities.ts

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
`````

3. 创建 `GenreList.tsx` (在 `src/components/GenreList.tsx`)

    ```TypeScript
    import useGenres from '../hooks/useGenres';
    import { Text } from '@chakra-ui/react'; // 用于显示错误

    const GenreList = () => {
      const { genres, error, isLoading } = useGenres();

      // 初始简单渲染，后续会美化
      if (error) return <Text color="red.500">{error}</Text>;
      if (isLoading) return <Text>Loading genres...</Text>; // 初始的加载提示

      return (
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      );
    };

    export default GenreList;
    ```

4. 在 `App.tsx` 中集成 `GenreList`

    TypeScript

    ```TypeScript
    // ... (其他 imports)
    import GenreList from './components/GenreList'; // 导入 GenreList

    function App() {
      return (
        <Grid /* ... templateAreas, templateColumns ... */ >
          {/* ... NavBar GridItem ... */}
          <Show above="lg">
            <GridItem area="aside" paddingX={5}> {/* 假设已为aside区域添加padding */}
              <GenreList /> {/* 在侧边栏区域使用 GenreList */}
            </GridItem>
          </Show>
          {/* ... Main (GameGrid) GridItem ... */}
        </Grid>
      );
    }
    // ...
    ```

---

## 18. 代码重构：创建通用数据获取 Hook (`useData`)

> 简述：本节致力于通过创建一个名为 `useData<T>` 的泛型自定义 Hook 来解决 `useGames` 和 `useGenres` 两个 Hook 之间存在的显著代码重复问题。这个通用的 `useData` Hook 能够接收一个 API 端点 URL 作为参数，并利用 TypeScript 的泛型来适应不同类型数据的获取需求（例如游戏数据或类型数据），从而极大地提高了数据获取逻辑的复用性、减少了冗余代码，并提升了项目的整体可维护性。

**知识树**

1. **识别代码重复的痛点**：
    - `useGames` 和 `useGenres` Hooks 在数据获取、状态管理（数据本身、加载中、错误）、请求取消以及错误处理等方面的逻辑几乎完全相同，唯一的显著区别是请求的 API 端点和返回数据的具体类型。
2. **解决方案：泛型自定义 Hook (`useData<T>`)**：
    - 在 `src/hooks` 目录下创建新文件 `useData.ts`。
    - **泛型参数 `<T>`**：这个 `T` 代表了 Hook 将要获取并返回的数据项的类型。例如，当用于获取游戏时，`T` 就是 `Game` 类型；当用于获取类型时，`T` 就是 `Genre` 类型。
    - **输入参数**：
        - `endpoint: string`：必需参数，指定要请求的 API 端点路径 (e.g., `"/games"`, `"/genres"`)。
        - (可选，字幕后续可能添加) `requestConfig?: AxiosRequestConfig`：允许传递额外的 Axios 请求配置。
        - (可选，字幕后续可能添加) `deps?: any[]`：传递给内部 `useEffect` 的依赖项数组，用于在这些依赖变化时重新获取数据。
    - **内部逻辑**：
        - 将之前 `useGenres` (或 `useGames`) 的核心逻辑（`useState` 管理 `data: T[]`, `error`, `isLoading`；`useEffect` 执行 `apiClient.get`，包含 `AbortController`）复制过来。
        - 将所有特定于类型 (genre) 的引用替换为泛型 `T` 或通用名称 `data`。
    - **泛型响应接口 `WorkspaceResponse<T>`**：
        - 定义一个通用的接口来描述 API 列表响应的结构：
          TypeScript
            ```TypeScript
            interface FetchResponse<T> {
              count: number;
              results: T[];
            }
            ```
        - 在 `apiClient.get` 中使用此泛型接口：`apiClient.get<FetchResponse<T>>(endpoint, ...)`。
    - **返回值**：返回一个包含 `data: T[]`, `error: string`, `isLoading: boolean` 的对象。
3. **重构 `useGenres` 和 `useGames` Hooks**：
    - 清空这两个 Hook 原有的重复实现。
    - 在其内部直接调用新创建的 `useData<T>` Hook，并传入相应的具体类型和 API 端点。
        - `useGenres` 实现：`return useData<Genre>('/genres');`
        - `useGames` 实现：`return useData<Game>('/games');`
    - 这样做的好处是，`useGenres` 和 `useGames` 仍然作为应用中特定领域数据获取的接口，隐藏了通用 `useData` Hook 及其端点参数的实现细节，使得组件调用更为简洁和语义化。
    - 清理这两个文件中不再需要的导入语句和特定类型的响应接口（如`WorkspaceGamesResponse`, `WorkspaceGenresResponse`，因为通用逻辑已移至`useData`）。
4. **对调用组件的影响**：
    - `GenreList.tsx` 仍然调用 `useGenres()`，`GameGrid.tsx` 仍然调用 `useGames()`。
    - **关键变化**：由于 `useData` 返回的是一个名为 `data` 的属性来存储获取到的数组，因此之前在组件中通过解构赋值得到的 `genres` 或 `games` 变量，现在需要对应地改为 `data`，或者在 `useGenres` / `useGames` 返回时调整属性名以保持组件代码不变。字幕中选择在组件中将 `const { genres, ... } = useGenres()` 改为 `const { data: genres, ... } = useGenres()` (使用解构赋值重命名)。

**代码示例**

1. 创建通用 `useData.ts` Hook (在 `src/hooks/useData.ts`)

    ```TypeScript
    import { useEffect, useState } from 'react';
    import apiClient from '../services/api-client';
    import { AxiosRequestConfig, CanceledError } from 'axios';

    // 1. 定义通用的响应接口
    interface FetchResponse<T> {
      count: number;
      results: T[];
    }

    // 2. 定义泛型Hook，接收端点和可选的请求配置及依赖项
    const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
          // 3. 使用泛型T和FetchResponse<T>
    		.get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig }).then((res) => {
    			setData(res.data.results);
    			setIsLoading(false);
    		})
    		.catch((err) => {
    			if (err instanceof CanceledError) return;
    			setError(err.message);
    			setIsLoading(false);
    		});
    	return () => controller.abort();
    		  // 4. 使用传入的依赖项，如果没有则默认为空数组，或根据实际情况调整
      }, deps ? [...deps] : []);

      // 5. 返回通用的data属性
      return { data, error, isLoading };
    };

    export default useData;
    ```

````

2. 重构 `useGenres.ts`

    ```TypeScript
    import useData from './useData';
    import { Genre } from '../entities'; // 假设Genre接口在entities.ts

    // Genre接口仍需导出，供GenreList组件使用
    // export interface Genre { id: number; name: string; image_background: string; }

    const useGenres = () => useData<Genre>('/genres'); // 调用useData，传入Genre类型和端点

    export default useGenres;
    ```

3. 重构 `useGames.ts`



    ```TypeScript
    import useData from './useData';
    import { Game } from '../entities'; // 假设Game接口在entities.ts

    // Platform和Game接口仍需导出，供GameCard等组件使用
    // export interface Platform { ... }
    // export interface Game { ... }

    const useGames = () => useData<Game>('/games'); // 调用useData，传入Game类型和端点

    export default useGames;
    ```

4. 调整 `GenreList.tsx` (使用解构重命名 `data` 为 `genres`)

    ```TypeScript
    import useGenres, { Genre } from '../hooks/useGenres'; // Genre可能从entities导入
    // ...
    const GenreList = () => {
      // 将返回的 data 属性重命名为 genres
      const { data: genres, error, isLoading } = useGenres();
      // ... 渲染逻辑使用 genres ...
    };
    // ...
    ```

5. 调整 `GameGrid.tsx` (使用解构重命名 `data` 为 `games`)

    ```TypeScript
    import useGames from '../hooks/useGames';
    // ...
    const GameGrid = () => {
      // 将返回的 data 属性重命名为 games
      const { data: games, error, isLoading } = useGames();
      // ... 渲染逻辑使用 games ...
    };
    // ...
    ```


---

## 19. UI展示：美化类型列表

> 简述：本节重点在于提升侧边栏中游戏类型（Genre）列表的视觉表现。通过为每个类型条目增加背景图片、调整文本样式，并使用Chakra UI的`<List>`, `<ListItem>`, `<HStack>`, `<Image>`, `<Text>`等组件进行精细布局，使类型列表更加美观和用户友好。此外，还对应用主布局中侧边栏和主内容区的宽度分配进行了响应式优化，并解决了因此调整可能引发的游戏卡片宽度问题。

**知识树**

1. **`Genre` 接口更新**：
    - 为 `Genre` 接口 (通常在 `src/entities.ts`) 添加 `image_background: string` 属性，以对应API返回数据中用于展示的图片URL。
2. **`GenreList.tsx` 组件美化**：
    - 使用Chakra UI的 `<List>` 组件作为列表容器，替换之前的 `<ul>`，以获得更好的样式控制和语义化。
    - 使用 `<ListItem>` 组件替换 `<li>`，作为每个类型条目的容器。可为其设置 `paddingY` 来增加垂直方向的上下内边距，改善条目间的视觉分隔。
    - 在每个 `<ListItem>` 内部，使用 `<HStack>` 组件水平排列类型图片和类型名称。
    - **类型图片 (`<Image>`)**：
        - `src`: 调用之前创建的 `getCroppedImageUrl(genre.image_background)` 工具函数，传入类型的背景图片URL，以获取优化后的裁剪图片。
        - `boxSize`: 设置一个较小的固定尺寸 (e.g., `"32px"`)。
        - `borderRadius`: 为图片设置圆角 (e.g., `8`)，使其外观更柔和。
        - `objectFit="cover"` (可选但推荐): 确保图片在保持其宽高比的同时填充整个 `boxSize` 区域，避免图片变形。
    - **类型名称 (`<Text>`)**：
        - 显示 `genre.name`。
        - `fontSize`: 设置合适的字体大小 (e.g., `"lg"` 或 `theme.fontSizes.lg`)。
3. **应用主布局调整 (`App.tsx`)**：
    - **侧边栏 (`GridItem[area="aside"]`)**：为其添加水平内边距 `paddingX` (e.g., `5`)，避免类型列表内容紧贴侧边栏边缘。
    - **`Grid` 的 `templateColumns` 属性**：进行响应式设置，以优化侧边栏和主内容区的宽度分配。
        - `base: "1fr"`：在移动端或小屏幕（基础断点），侧边栏可能被隐藏或堆叠，主内容区占据全部可用宽度（1个弹性因子单位）。
        - `lg: "200px 1fr"`：在大屏幕（`lg`断点及以上），为侧边栏分配一个固定的宽度 (e.g., `200px`)，主内容区则占据剩余的可用空间 (1个弹性因子单位)。这确保了侧边栏宽度稳定，而主内容区可以灵活伸展。
4. **解决游戏卡片 (`GameCardContainer`) 固定宽度引发的布局问题**：
    - **背景**：之前为了在加载骨架屏和实际游戏卡片时保持宽度一致，可能为 `GameCardContainer` 或其内部的卡片设置了固定宽度。但在主内容区宽度根据侧边栏调整而变化后，这些固定宽度的卡片可能无法很好地适应 `SimpleGrid` 的列宽，导致卡片总宽度超出主内容区，或者卡片间距不理想。
    - **解决方案**：移除 `GameCardContainer` (或其内部卡片) 上设置的固定 `width` 属性。让卡片容器（`GameCardContainer`）及其内容（`GameCard`, `GameCardSkeleton`）的宽度由其父级 `SimpleGrid` 的列宽自动决定。`SimpleGrid` 会根据其 `columns` 和 `spacing` 属性，以及可用空间，来均分或按比例分配每列的宽度。
    - **调整 `GameGrid.tsx`**：在移除了卡片的固定宽度后，可能需要重新调整 `SimpleGrid` 组件的 `spacing` 属性，以获得视觉上更和谐的卡片间距。
5. **全面响应式测试**：
    - 使用浏览器开发者工具，在不同设备尺寸（手机、平板、笔记本电脑）下彻底测试应用的布局，包括骨架屏的显示，确保所有元素都按预期排列和响应。

**代码示例**

1. 更新 `Genre` 接口 (在 `src/entities.ts`)

    ```TypeScript
    export interface Genre {
      id: number;
      name: string;
      image_background: string; // 1. 添加图片背景属性
    }
    ```

2. 美化 `GenreList.tsx`

    ```TypeScript
    import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react'; // Spinner用于加载状态
    import useGenres, { Genre } from '../hooks/useGenres'; // 或从entities导入Genre
    import getCroppedImageUrl from '../services/image-url'; // 导入图片裁剪函数

    const GenreList = () => {
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null; // 根据后续课程，错误时不显示内容
      if (isLoading) return <Spinner />; // 显示加载指示器

      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px"> {/* 增加垂直内边距 */}
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover" // 确保图片不变形
                  src={getCroppedImageUrl(genre.image_background)} // 使用裁剪后的图片
                  alt={genre.name}
                />
                <Text fontSize="lg">{genre.name}</Text> {/* 调整字体大小 */}
              </HStack>
            </ListItem>
          ))}
        </List>
      );
    };

    export default GenreList;
    ```

3. 调整 `App.tsx` 中的 `Grid` 布局

    ```TypeScript
    // ... (imports)
    function App() {
      return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          // 1. 调整 templateColumns
          templateColumns={{
            base: '1fr', // 移动端，main占满
            lg: '200px 1fr', // 大屏，aside固定200px，main占剩余
          }}
        >
          <GridItem area="nav" /* ... */ >
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}> {/* 2. 为aside添加水平内边距 */}
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main" /* ... */ >
            <GameGrid />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```

4. 移除 `GameCardContainer.tsx` 中的固定 `width` (如果之前有设置)



    ```TypeScript
    // In src/components/GameCardContainer.tsx
    const GameCardContainer = ({ children }: Props) => {
      return (
        // 确保这里没有固定的 width 属性
        <Box borderRadius={10} overflow="hidden">
          {children}
        </Box>
      );
    };
    ```

5. 调整 `GameGrid.tsx` 中 `SimpleGrid` 的 `spacing` (如果需要)

    TypeScript

    ```TypeScript
    // In src/components/GameGrid.tsx
    // ...
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3} // 字幕中从6调整到3，或根据实际视觉效果调整
      >
        {/* ... */}
      </SimpleGrid>
    );
    // ...
    ```


---

## 20. 用户体验：类型列表加载指示器

> 简述：本节关注于提升在获取游戏类型数据过程中的用户体验。当应用正在从服务器请求类型列表时，在侧边栏对应位置显示一个加载指示器（具体为Chakra UI的`<Spinner />`组件）。这种即时反馈告知用户后台正在处理，避免了因等待数据而产生的空白或静止界面。此外，本节还调整了错误处理策略：当获取类型数据失败时，侧边栏将不显示任何错误信息，而是保持为空（即组件返回`null`），以维持主界面其他部分的可用性，并避免过多的错误提示干扰用户。

**知识树**

1. **加载指示器的选择**：
    - **Spinner (旋转指示器)**：一种简单、通用的加载状态反馈，适用于数据加载时间相对较短或内容结构不固定的场景。本节选择使用Spinner来展示类型列表的加载过程。
    - **Skeleton (骨架屏)**：之前已用于游戏卡片列表的加载。骨架屏更适合模拟最终内容的布局，提供更丰富的加载上下文感知，但实现略复杂。讲师在此处选择Spinner是为了展示不同的加载反馈方式。
2. **在 `GenreList.tsx` 中实现加载指示器**：
    - **获取加载状态**：从 `useGenres` Hook (其内部调用 `useData`) 中解构出 `isLoading` 布尔状态变量。
    - **条件渲染**：
        - 在组件的渲染逻辑中，首先检查 `isLoading` 状态。
        - 如果 `isLoading` 为 `true`，则组件返回Chakra UI的 `<Spinner />` 组件。
        - `<Spinner />` 可以接受一些props来调整其外观，如 `size`, `thickness`, `speed`, `color` 等，但通常默认样式已足够。
3. **错误处理策略调整 (在 `GenreList.tsx`)**：
    - **获取错误状态**：从 `useGenres` Hook中解构出 `error` 状态变量。
    - **条件渲染 (处理错误)**：
        - 在检查完 `isLoading` 之后（或者在渲染主要内容之前），检查 `error` 状态。
        - 如果 `error` 存在 (即 `error` 变量不为空字符串或 `null`/`undefined`)，则 `GenreList` 组件直接返回 `null`。
        - **返回 `null` 的效果**：React组件返回`null`意味着该组件在DOM中不渲染任何内容。
        - **理由**：讲师认为，在页面的不同部分（如侧边栏）都显示详细的错误信息可能会让用户界面显得混乱和“压抑”(confronting)。对于侧边栏的类型列表这类非核心内容，如果加载失败，选择不显示任何内容（即静默失败）可能是一种更优雅的用户体验策略，此时主内容区（游戏列表）如果加载成功仍然可用。
4. **测试**：
    - **测试加载状态**：正常情况下，快速的网络连接可能使Spinner一闪而过。可以通过浏览器开发者工具的网络限流功能（Network Throttling）模拟慢速网络，以清晰观察Spinner的显示效果。
    - **测试错误状态**：临时修改 `useGenres` Hook内部调用 `useData` 时传入的API端点URL (e.g., 将 `'/genres'` 改为 `'/xgenres'`)，使其成为一个无效请求，从而触发错误。观察侧边栏是否如预期般不显示任何内容。

**代码示例**

1. 在 `GenreList.tsx` 中添加 Spinner 和调整错误处理

    TypeScript

    ```TypeScript
    import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react';
    import useGenres, { Genre } from '../hooks/useGenres'; // 或从entities导入Genre
    import getCroppedImageUrl from '../services/image-url';

    const GenreList = () => {
      // 1. 从Hook中获取 isLoading 和 error 状态
      const { data: genres, isLoading, error } = useGenres();

      // 2. 如果发生错误，不渲染任何内容 (返回 null)
      if (error) return null;

      // 3. 如果正在加载，显示 Spinner
      if (isLoading) return <Spinner />;

      // 4. 如果加载完成且无错误，则渲染类型列表
      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      );
    };

    export default GenreList;
    ```



好的，我们继续补全 "GameHub" 项目的学习笔记，涵盖您提供的所有字幕内容。

---

## 20. 用户体验：类型列表加载指示器

> 简述：本节关注于提升在获取游戏类型数据过程中的用户体验。当应用正在从服务器请求类型列表时，在侧边栏对应位置显示一个加载指示器（具体为Chakra UI的`<Spinner />`组件）。这种即时反馈告知用户后台正在处理，避免了因等待数据而产生的空白或静止界面。此外，本节还调整了错误处理策略：当获取类型数据失败时，侧边栏将不显示任何错误信息，而是保持为空（即组件返回`null`），以维持主界面其他部分的可用性，并避免过多的错误提示干扰用户。

**知识树**

1. **加载指示器的选择与目的**：
    - **Spinner (旋转指示器)**：一种简洁的视觉反馈，告知用户正在进行后台操作。适用于数据加载时间相对较短或UI结构较为简单的场景。
    - 对比Skeleton：讲师选择Spinner是为了展示不同于先前骨架屏的加载反馈方式。
2. **实现Spinner显示 (在 `GenreList.tsx`)**：
    - 获取加载状态：从 `useGenres` (或其内部调用的 `useData`) Hook中解构出 `isLoading: boolean` 状态。
    - 条件渲染：
        - 若 `isLoading` 为 `true`，组件返回Chakra UI的 `<Spinner />` 组件。
        - `<Spinner />` 默认样式通常已足够，也可通过props (如 `size`, `thickness`, `color`) 进行定制。
3. **错误处理策略优化 (在 `GenreList.tsx`)**：
    - 获取错误状态：从Hook中解构出 `error` 状态。
    - 静默失败：若 `error` 存在（即数据获取失败），`GenreList` 组件直接返回 `null`。
        - 返回 `null` 意味着该组件在DOM中不渲染任何内容。
    - 设计考量：避免在页面的多个辅助区域（如侧边栏）都显示错误信息，以免用户界面显得混乱或过于“负面”(confronting)。优先保证核心内容（如游戏列表）的展示和错误反馈。
4. **测试方法**：
    - **测试加载状态**：使用浏览器开发者工具的网络限流功能模拟慢速网络，观察Spinner是否按预期显示。
    - **测试错误状态**：临时修改API请求的端点URL（例如，在 `useGenres` Hook中将 `/genres` 改为 `/invalid-genres`），使其成为一个无效请求，从而触发错误。观察侧边栏是否如预期般不渲染任何内容。

**代码示例**

1. 在 `GenreList.tsx` 中添加Spinner和调整错误处理

    TypeScript

    ```TypeScript
    import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react'; // 1. 导入 Spinner
    import useGenres from '../hooks/useGenres';
    import { Genre } from '../entities'; // 假设 Genre 接口在 entities.ts
    import getCroppedImageUrl from '../services/image-url';

    const GenreList = () => {
      const { data: genres, isLoading, error } = useGenres(); // 2. 获取 isLoading 和 error

      // 3. 如果发生错误，不渲染任何内容
      if (error) return null;

      // 4. 如果正在加载，显示 Spinner
      if (isLoading) return <Spinner />;

      // 5. 如果加载完成且无错误，则渲染类型列表
      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
					boxSize="32px"
					borderRadius={8}
					objectFit="cover"
					src={getCroppedImageUrl(genre.image_background)}
					alt={genre.name}
				/>
				<Text fontSize="lg">{genre.name}</Text>
			  </HStack>
			</ListItem>
		  ))}
		</List>
	  );
	};
	export default GenreList;
````

---

## 21. 交互功能：按类型筛选游戏

> 简述：本节介绍如何实现核心的游戏筛选功能——当用户在侧边栏点击某个游戏类型时，主内容区的游戏列表会相应更新，仅显示属于该选定类型的游戏。关键技术点包括状态提升（Lifting State Up），即在共同的父组件 `App.tsx` 中管理“当前选中的类型”状态，并通过 props 和回调函数机制在 `GenreList`（选择器）与 `GameGrid`（展示器）之间共享和更新此状态。最终，选中的类型 ID 将作为查询参数传递给后端 API，以获取筛选后的游戏数据。

**知识树**

1. **UI 交互增强 (`GenreList.tsx`)**：
    - 将原先用于显示类型名称的 `<Text>` 组件替换为 Chakra UI 的 `<Button>` 组件，使其可点击。
    - `<Button>` 样式：设置 `variant="link"`，使其在视觉上类似链接，减少视觉重量。
    - `onClick` 事件处理：为每个类型按钮绑定点击事件。当按钮被点击时，调用一个回调函数，并将当前迭代的 `Genre` 对象作为参数传递出去。
2. **状态管理 - 状态提升 (Lifting State Up)**：
    - **核心问题**：`GenreList` 组件负责产生“选中的类型”这一状态变化，而 `GameGrid` 组件需要消费这个状态来获取和展示相应的游戏。
    - **解决方案**：将“选中的类型” (`selectedGenre`) 状态提升到这两个组件的最近共同父组件——`App.tsx` 中进行统一管理。
    - **`App.tsx` 中定义状态**：
        - 使用 `useState<Genre | null>(null)` 来声明 `selectedGenre` 状态及其更新函数 `setSelectedGenre`。初始值为 `null` 表示没有类型被选中。
        - TypeScript 类型：`Genre | null` 表示该状态可以是一个 `Genre` 对象，或者为 `null`。
3. **组件间通信 (Props Drilling & Callback Functions)**：
    - **`GenreList` 组件**：
        - 新增 Props：`onSelectGenre: (genre: Genre) => void`。这是一个回调函数类型的 prop，由父组件 (`App.tsx`) 提供。
        - 内部逻辑：当用户点击某个类型按钮时，`GenreList` 调用其 `onSelectGenre` prop，并将选中的 `Genre` 对象回传给 `App.tsx`。
    - **`App.tsx` 组件**：
        - 实现传递给 `GenreList` 的 `onSelectGenre` 回调函数。该函数内部调用 `setSelectedGenre(genre)` 来更新 `App` 组件自身的 `selectedGenre` 状态。
        - 将 `selectedGenre` 状态作为 prop 传递给 `GameGrid` 组件。
    - **`GameGrid` 组件**：
        - 新增 Props：`selectedGenre: Genre | null` (字幕中此步骤在后续通过 `GameQuery` 实现，但逻辑上是需要的)。
4. **API 请求参数调整 (在 `useGames` Hook 中，通过 `useData` Hook 实现)**：
    - **`useGames` Hook**：修改其参数，使其能接收 `selectedGenre: Genre | null` (或后续重构为 `gameQuery` 对象包含此信息)。
    - **`useData` Hook 增强**：
        - 允许接收第二个可选参数 `requestConfig?: AxiosRequestConfig`，用于传递额外的 Axios 请求配置。
        - `useGames` 在调用 `useData` 时，如果 `selectedGenre` 存在，则在 `requestConfig.params` 对象中添加 `genres: selectedGenre.id` 属性。
        - 可选链操作符 (`selectedGenre?.id`) 用于安全地访问 `id`，因为 `selectedGenre` 可能为 `null`。若为 `null`，则不发送 `genres` 参数或 API 能处理此情况。
5. **`useEffect` 依赖项更新 (在 `useData` Hook 中)**：
    - **核心问题**：之前 `useData` Hook 的 `useEffect` 依赖数组是固定的（例如空数组或只包含 `endpoint`），导致即使筛选条件（如 `selectedGenre`）变化，也不会重新触发数据获取。
    - **解决方案**：为 `useData` Hook 的 `useEffect` 添加一个动态的依赖项数组。
        - `useData` Hook 增加第三个可选参数 `deps?: any[]`。
        - `useEffect(() => { ... }, deps ? [...deps] : [])`：将 `deps` 数组（如果提供）的内容展开作为 `useEffect` 的依赖项。
        - `useGames` Hook 在调用 `useData` 时，将 `[selectedGenre?.id]` (或后续的 `gameQuery` 对象) 作为 `deps` 参数传递。这样，当 `selectedGenre.id` 改变时，`useData` 的 `useEffect` 会重新执行，从而根据新的类型 ID 获取游戏数据。
6. **解决 React `key` Prop 警告**：
    - 在开发过程中，控制台可能会出现关于列表中子元素缺少唯一 `key` prop 的警告。
    - 确保在使用 `map()` 方法渲染列表（如 `GameGrid` 中渲染 `GameCardContainer`，或 `PlatformIconList` 中渲染图标）时，为每个直接返回的顶级元素提供一个稳定且唯一的 `key` prop (通常是数据项的 `id`)。

**代码示例**

1. 修改 `GenreList.tsx` 以处理点击和传递选中类型

    ```TypeScript
    import { List, ListItem, HStack, Image, Text, Button, Spinner } from '@chakra-ui/react'; // 1. 导入 Button
    import useGenres from '../hooks/useGenres';
    import { Genre } from '../entities';
    import getCroppedImageUrl from '../services/image-url';

    interface Props { // 2. 定义Props接口
      onSelectGenre: (genre: Genre) => void;
      // selectedGenre: Genre | null; // (这个prop在下一节添加用于高亮)
    }

    const GenreList = ({ onSelectGenre }: Props) => { // 3. 接收 onSelectGenre
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null;
      if (isLoading) return <Spinner />;

      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image /* ... */ src={getCroppedImageUrl(genre.image_background)} /* ... */ />
                {/* 4. 将Text改为Button，添加onClick */}
                <Button variant="link" fontSize="lg" onClick={() => onSelectGenre(genre)}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      );
    };

    export default GenreList;
    ```

2. 在 `App.tsx` 中管理 `selectedGenre` 状态并传递

    TypeScript

    ```TypeScript
    import { Grid, GridItem, Show } from '@chakra-ui/react';
    import { useState } from 'react'; // 1. 导入 useState
    import NavBar from './components/NavBar';
    import GameGrid from './components/GameGrid';
    import GenreList from './components/GenreList';
    import { Genre } from './entities'; // 2. 导入 Genre 类型

    function App() {
      // 3. 定义 selectedGenre 状态
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

      return (
        <Grid /* ... */ >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              {/* 4. 传递 onSelectGenre 回调 */}
              <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
            </GridItem>
          </Show>
          <GridItem area="main">
            {/* 5. 传递 selectedGenre 给 GameGrid (字幕中此步骤通过GameQuery对象合并) */}
            <GameGrid selectedGenre={selectedGenre} />
          </GridItem>
        </Grid>
      );
    }

    export default App;
    ```

3. 修改 `useGames.ts` 和 `useData.ts` 以支持按类型筛选

    TypeScript

    ```TypeScript
    // In src/hooks/useData.ts (关键改动)
    // ... (FetchResponse interface)
    const useData = <T>(
      endpoint: string,
      requestConfig?: AxiosRequestConfig, // 1. 添加 requestConfig 参数
      deps?: any[]                       // 2. 添加 deps 参数
    ) => {
      // ... (useState for data, error, isLoading)
      useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
          // 3. 将 requestConfig 展开到 Axios 请求中
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
          .then(/* ... */)
          .catch(/* ... */);
        return () => controller.abort();
      // 4. 使用传入的 deps 作为 useEffect 的依赖项
      }, deps ? [...deps] : []); // 如果没有传入 deps，则依赖项数组为空，表示仅执行一次 (除非 endpoint 等固有依赖变化)
                                 // 字幕中是 ...deps，如果deps是undefined会报错，所以用三元操作符更安全
      return { data, error, isLoading };
    };

    // In src/hooks/useGames.ts
    import useData from './useData';
    import { Game, Genre } from '../entities'; // 假设 Platform 接口也在这里或 entities.ts

    // 1. useGames 接收 selectedGenre 作为参数
    const useGames = (selectedGenre: Genre | null /*, selectedPlatform: Platform | null */) => {
      // 2. 构建 requestConfig 和 deps
      return useData<Game>(
        '/games',
        { params: { genres: selectedGenre?.id /*, platforms: selectedPlatform?.id */ } }, // 3. 在params中传递genres ID
        [selectedGenre?.id /*, selectedPlatform?.id */] // 4. 将 genre ID 作为依赖项
      );
    };
    export default useGames;

    // In src/components/GameGrid.tsx
    // ...
    interface Props {
      selectedGenre: Genre | null; // 1. GameGrid 接收 selectedGenre
      // selectedPlatform: Platform | null;
    }
    const GameGrid = ({ selectedGenre /*, selectedPlatform */ }: Props) => {
      // 2. 将 selectedGenre 传递给 useGames
      const { data: games, error, isLoading } = useGames(selectedGenre /*, selectedPlatform */);
      // ... (渲染逻辑)
    };
    // ...
    ```

    - **注意**：上述代码示例是根据第 21 节字幕的逻辑逐步演进的。在后续的第 25 节 "Refactoring- Extracting a Query Object" 中，`selectedGenre` 和 `selectedPlatform` 会被合并到一个 `gameQuery` 对象中，使得 `useGames` 和 `GameGrid` 的 props 传递更为简洁。此处的示例反映了筛选逻辑引入的初步阶段。

4. 修复 `key` prop 警告 (示例，具体位置根据实际 `map` 调用)

    TypeScript

    ```TypeScript
    // In GameGrid.tsx, if GameCardContainer is mapped
    skeletons.map((skeleton) => (
      <GameCardContainer key={skeleton}> {/* 确保这里的key是唯一的 */}
        <GameCardSkeleton />
      </GameCardContainer>
    ))

    // In PlatformIconList.tsx
    platforms.map((platform) => (
      <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" /> {/* 确保这里的key是唯一的 */}
    ))
    ```

---

## 22. UI 反馈：高亮显示选中类型

> 简述：本节介绍如何在侧边栏的类型列表中，对用户当前选中的游戏类型进行视觉上的高亮显示（例如，将字体加粗）。这是通过将 `App` 组件中管理的 `selectedGenre` 状态向下传递给 `GenreList` 组件，然后在 `GenreList` 内部渲染每个类型按钮时，将其与这个传入的 `selectedGenre` 进行比较，从而动态地应用不同的样式。

**知识树**

1. **状态传递 (Parent to Child)**：
    - `App.tsx` 组件（父组件）：已经持有了 `selectedGenre: Genre | null` 这个状态。
    - 将其作为 prop (`selectedGenre`) 传递给 `GenreList` 组件（子组件）。
2. **`GenreList.tsx` 组件增强**：
    - **Props 定义**：修改 `GenreList` 的 `Props` 接口，增加 `selectedGenre: Genre | null` 属性。
    - **接收 Prop**：在 `GenreList` 组件的函数签名中接收 `selectedGenre`。
    - **动态样式应用**：
        - 在 `map()` 方法中渲染每个类型对应的 `<Button>` 时，获取当前迭代的 `genre` 对象。
        - 比较当前 `genre.id` 和传入的 `selectedGenre?.id` (注意使用可选链 `?.` 因为 `selectedGenre` 可能为 `null`)。
        - 根据比较结果，动态设置 `<Button>` 的 `fontWeight` prop：
            - 如果 `genre.id === selectedGenre?.id` (即当前渲染的类型是已被选中的类型)，则 `fontWeight="bold"`。
            - 否则，`fontWeight="normal"`。
3. **用户体验提升**：
    - 通过视觉高亮，用户可以清晰地知道当前是按哪个类型进行的筛选，改善了交互的明确性和反馈。

**代码示例**

1. 修改 `App.tsx` 以传递 `selectedGenre` 给 `GenreList`

    TypeScript

    ```TypeScript
    // In src/App.tsx
    // ... (useState for selectedGenre is already there)

    function App() {
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
      // ... (other state like selectedPlatform might be here too)

      return (
        <Grid /* ... */ >
          {/* ... NavBar ... */}
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre} // 1. 传递 selectedGenre 给 GenreList
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            {/* 2. selectedGenre is also passed to GameGrid, possibly via GameQuery later */}
            <GameGrid selectedGenre={selectedGenre} /* ...other props... */ />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```

2. 修改 `GenreList.tsx` 以接收 `selectedGenre` 并应用高亮

    TypeScript

    ```TypeScript
    // In src/components/GenreList.tsx
    import { List, ListItem, HStack, Image, Text, Button, Spinner } from '@chakra-ui/react';
    import useGenres from '../hooks/useGenres';
    import { Genre } from '../entities';
    import getCroppedImageUrl from '../services/image-url';

    interface Props {
      onSelectGenre: (genre: Genre) => void;
      selectedGenre: Genre | null; // 1. 新增 selectedGenre prop
    }

    // 2. 接收 selectedGenre
    const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres();
      if (error) return null;
      if (isLoading) return <Spinner />;

      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image /* ... */ src={getCroppedImageUrl(genre.image_background)} /* ... */ />
                <Button
                  variant="link"
                  fontSize="lg"
                  // 3. 根据是否选中来动态设置 fontWeight
                  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                  onClick={() => onSelectGenre(genre)}
            >
                  {genre.name}
                </Button>
    		  </HStack>
    		</ListItem>
    	  ))}
    	</List>
      );
    };
    export default GenreList;
    ```

---

## 23. UI 组件：构建平台选择下拉菜单

> 简述：本节介绍如何创建一个用于选择游戏平台的下拉菜单 (`PlatformSelector`)。该组件使用 Chakra UI 的`<Menu>`系列复合组件（`<Menu>`, `<MenuButton>`, `<MenuList>`, `<MenuItem>`）来实现下拉列表的交互和视觉效果。平台数据从 RAWG API 的一个特定端点 (`/platforms/lists/parents`) 获取，该端点提供了一个相对简洁的父平台列表。为此，将创建一个新的自定义 Hook `usePlatforms` 来封装数据获取逻辑。

**知识树**

1. **创建 `PlatformSelector.tsx` 组件 (在 `src/components`)**：
    - 目的：提供一个用户界面，允许用户从列表中选择一个游戏平台。
2. **Chakra UI `<Menu>` 复合组件**：
    - `<Menu>`：根组件，包裹整个菜单结构。
    - `<MenuButton as={Button}>`：作为触发菜单下拉的按钮。
        - `as={Button}`：使其外观和行为像一个标准的 Chakra UI 按钮。
        - `children`：按钮上显示的文本 (e.g., "Platforms")。
        - `rightIcon`: 可以在按钮右侧添加一个图标，例如向下的小箭头 (e.g., `<BsChevronDown />` from `react-icons/bs`)，以增强可交互性提示。
    - `<MenuList>`：当菜单被触发打开时，显示此列表，包含所有可选项。
    - `<MenuItem>`：列表中的每一个具体选项。
        - `children`：该选项显示的文本。
        - `key`：在动态渲染列表时，需要为每个`<MenuItem>`提供唯一的 key。
3. **获取平台数据 - `usePlatforms` Hook (`src/hooks/usePlatforms.ts`)**：
    - 目的：封装从 API 获取平台列表的逻辑。
    - **API 端点**：RAWG API 的 `/platforms/lists/parents`。这个端点返回的是一个父平台列表，比 `/platforms` 端点更简洁，适合用作筛选器。
    - **`Platform` 接口定义**：如果尚未在 `src/entities.ts` (或类似文件) 中定义，则需定义。包含 `id: number`, `name: string`, `slug: string`。
    - **实现**：内部调用之前创建的通用 `useData<Platform>('/platforms/lists/parents')` Hook。
    - **导出**：确保 `usePlatforms` Hook 和 `Platform` 接口（如果在此文件定义）被导出。
4. **动态渲染菜单项 (在 `PlatformSelector.tsx`)**：
    - 调用 `usePlatforms()` Hook 获取平台数据 (`data: platforms`)、加载状态和错误状态。
    - 遍历 `platforms` 数组。
    - 为每个 `platform` 对象渲染一个 `<MenuItem>` 组件。
        - 设置 `<MenuItem>` 的 `key` 为 `platform.id`。
        - 设置 `<MenuItem>` 的显示文本为 `platform.name`。
5. **错误处理**：
    - 如果在获取平台数据时发生错误（即从 `usePlatforms` Hook 返回的 `error` 状态为真），则 `PlatformSelector` 组件应返回 `null`，不在界面上渲染任何内容，以避免显示错误信息或一个空的、无功能的下拉菜单。
6. **集成到 `App.tsx`**：
    - 将创建的 `PlatformSelector` 组件放置在应用布局中合适的位置，例如在 `GameGrid` 组件的上方，与后续可能添加的排序选择器等并列。

**代码示例**

1. 定义/确保 `Platform` 接口存在 (在 `src/entities.ts`)

    ```TypeScript
    export interface Platform {
      id: number;
      name: string;
      slug: string;
    }
    ```

2. 创建 `usePlatforms.ts` Hook (在 `src/hooks/usePlatforms.ts`)

    TypeScript

    ```TypeScript
    import useData from './useData';
    import { Platform } from '../entities'; // 导入Platform接口

    const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

    export default usePlatforms;
    ```

3. 创建 `PlatformSelector.tsx` (在 `src/components/PlatformSelector.tsx`)

    TypeScript

```TypeScript
    import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
    import { BsChevronDown } from 'react-icons/bs'; // 导入下拉箭头图标
    import usePlatforms from '../hooks/usePlatforms';
    import { Platform } from '../entities';

    // Props接口，为后续选择平台的回调做准备
    // interface Props {
    	// onSelectPlatform: (platform: Platform) => void;
    	// selectedPlatform: Platform | null;
    // }

// 当前版本仅关注渲染列表，所以 Props 暂时为空或不定义

    const PlatformSelector = (/*{ onSelectPlatform, selectedPlatform }: Props*/) => {
      const { data: platforms, error } = usePlatforms();

      if (error) return null;

      return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {/* {selectedPlatform?.name || 'Platforms'} 后续章节修改 */}
            Platforms
          </MenuButton>
          <MenuList>
            {platforms.map((platform) => (
              <MenuItem
                key={platform.id}
                // onClick={() => onSelectPlatform(platform)} 后续章节添加
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };

    export default PlatformSelector;

```

- _Note on Props_: 字幕中此节主要关注渲染，`onSelectPlatform` 和 `selectedPlatform` props 在下一节实现筛选时才会完整加入。

4. 在 `App.tsx` 中集成 `PlatformSelector`

    ```TypeScript
    // In src/App.tsx
    // ... (other imports)
    import PlatformSelector from './components/PlatformSelector'; // 1. 导入PlatformSelector

    function App() {
      // ... (existing state: selectedGenre, etc.)

      return (
        <Grid /* ... */ >
          {/* ... NavBar ... */}
          {/* ... GenreList ... */}
          <GridItem area="main">
            {/* 2. 在GameGrid上方添加PlatformSelector (后续会用HStack布局) */}
            <PlatformSelector /* onSelectPlatform={...} selectedPlatform={...} */ />
            <GameGrid /* selectedGenre={selectedGenre} selectedPlatform={...} */ />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```

---

## 24. 交互功能：按平台筛选游戏

> 简述：本节介绍如何实现按选定平台筛选游戏列表的功能。其核心逻辑与之前实现的按类型筛选相似：首先，在 `App` 组件中引入并管理“当前选中的平台” (`selectedPlatform`) 状态；其次，通过回调函数机制，使得 `PlatformSelector` 组件在用户做出选择时能够通知 `App` 组件更新此状态；然后，将这个 `selectedPlatform` 状态传递给 `GameGrid` (最终是 `useGames` Hook)，以便在 API 请求中加入平台筛选参数；最后，动态更新 `PlatformSelector` 按钮上显示的文本，以清晰反映当前已选定的平台。

**知识树**

1. **状态管理 (`App.tsx`)**：
    - 定义新的状态变量 `selectedPlatform: Platform | null`，并提供其更新函数 `setSelectedPlatform`，初始值设为 `null`。
2. **组件间通信 (`PlatformSelector.tsx`)**：
    - **Props 定义**：为 `PlatformSelector` 的 `Props` 接口添加：
        - `onSelectPlatform: (platform: Platform) => void`：回调函数，当用户选择一个平台时被调用。
        - `selectedPlatform: Platform | null`：用于接收从 `App` 组件传入的当前已选平台对象，以便动态更新按钮文本。
    - **`<MenuItem>` 的 `onClick` 事件**：当用户点击某个平台的 `MenuItem` 时，调用 `onSelectPlatform` prop，并将该 `MenuItem` 对应的 `Platform` 对象作为参数传递出去。
3. **`App.tsx` 组件更新**：
    - 实现传递给 `PlatformSelector` 的 `onSelectPlatform` 回调函数。该函数内部调用 `setSelectedPlatform(platform)` 来更新 `App` 组件自身的 `selectedPlatform` 状态。
    - 将 `selectedPlatform` 状态作为 prop 传递给 `GameGrid` 组件 (用于数据筛选) 和 `PlatformSelector` 组件 (用于更新按钮文本)。
4. **API 请求参数调整 (在 `useGames` Hook 中)**：
    - 修改 `useGames` Hook 的参数，使其能接收 `selectedPlatform: Platform | null` (在后续的 `GameQuery` 重构中，这将是 `gameQuery` 对象的一个属性)。
    - 在 `useGames` 内部调用 `useData` Hook 时，于传递给 `useData` 的第二个参数 `requestConfig` (Axios 请求配置对象) 的 `params` 属性中，添加 `platforms: selectedPlatform?.id`。
        - RAWG API 使用 `platforms` (注意是复数) 作为查询参数名来接收平台 ID 进行筛选。
        - 使用可选链操作符 (`?.id`) 安全地访问 `selectedPlatform` 的 `id` 属性。
    - 更新传递给 `useData` Hook 的第三个参数 `deps` (依赖项数组)，加入 `selectedPlatform?.id`。这样，当 `selectedPlatform` 发生变化时，会触发 `useData` 重新获取游戏数据。
5. **动态更新 `PlatformSelector` 按钮文本**：
    - 在 `PlatformSelector.tsx` 中，根据传入的 `selectedPlatform` prop 的值，动态设置 `<MenuButton>` 的显示文本：
        - 如果 `selectedPlatform` 存在 (即用户已选择一个平台)，则按钮文本显示 `selectedPlatform.name`。
        - 如果 `selectedPlatform` 为 `null` (即没有平台被选中)，则按钮文本显示默认值，如 "Platforms"。
6. **多重筛选能力**：
    - 通过在 API 请求的 `params` 中同时提供 `genres` (来自选中的类型) 和 `platforms` (来自选中的平台) 参数，可以实现按类型和平台的组合筛选。
7. **代码“异味”(Code Smell) 与未来重构**：
    - 讲师指出，随着向 `useGames` Hook 传递的筛选参数增多 (如 `selectedGenre`, `selectedPlatform`)，其函数签名会变得越来越长，这是一个代码“异味”的信号，预示着后续需要进行重构（例如，将所有查询相关的参数封装到一个对象中）。

**代码示例**

1. 在 `App.tsx` 中添加 `selectedPlatform` 状态并传递

    TypeScript

    ```TypeScript
    // In src/App.tsx
    import { useState } from 'react';
    // ... (other imports)
    import PlatformSelector from './components/PlatformSelector';
    import { Platform } from './entities'; // 导入 Platform 类型

    function App() {
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
      // 1. 添加 selectedPlatform 状态
      const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

      return (
        <Grid /* ... */ >
          {/* ... NavBar ... */}
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            {/* 2. 传递 onSelectPlatform 和 selectedPlatform 给 PlatformSelector */}
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            {/* 3. 传递 selectedPlatform 给 GameGrid */}
            <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```

2. 修改 `PlatformSelector.tsx` 以处理 5 选择和动态显示文本

    TypeScript

    ```TypeScript
    // In src/components/PlatformSelector.tsx
    import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
    import { BsChevronDown } from 'react-icons/bs';
    import usePlatforms from '../hooks/usePlatforms';
    import { Platform } from '../entities';

    interface Props { // 1. 定义Props接口
      onSelectPlatform: (platform: Platform) => void;
      selectedPlatform: Platform | null;
    }

    // 2. 接收Props
    const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
      const { data: platforms, error } = usePlatforms();

      if (error) return null;

      return (
        <Menu>
          {/* 3. 动态设置MenuButton的文本 */}
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'Platforms'}
          </MenuButton>
          <MenuList>
            {platforms.map(platform => (
              // 4. MenuItem点击时调用 onSelectPlatform
              <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };

    export default PlatformSelector;
    ```

3. 修改 useGames.ts 以接收 selectedPlatform 并用于筛选

    ```ts

    // In src/hooks/useGames.ts

    import useData from './useData';

    import { Game, Genre, Platform } from '../entities'; // 确保Platform已导入

    // 1. useGames 接收 selectedPlatform 参数

    const useGames = (selectedGenr6e: Genre | null, selectedPlatform: Platform | null) => {

    return useData<Game>(

    '/games',

    {

    params: {

    genres: selectedGenre?.id,

    platforms: selectedPlatform?.id // 2. 在params中添加 platforms ID

    }

    },

    [selectedGenre?.id, selectedPlatform?.id] // 3. 将 platform ID 添加到依赖项

    );

    };

    export default useGames;
    ```

4. 修改 `GameGrid.tsx` 以接收并传递 `selectedPlatform`

    ```TypeScript
    // In src/components/GameGrid.tsx
    // ... (imports)
    import { Platform } from '../entities'; // 确保Platform已导入

    interface Props {
      selectedGenre: Genre | null;
      selectedPlatform: Platform | null; // 1. GameGrid Props 增加 selectedPlatform
    }

    const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => { // 2. 接收 selectedPlatform
      // 3. 将 selectedPlatform 传递给 useGames
      const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
      // ... (渲染逻辑)
    };
    // ...
    ```

    - **重要提示**：字幕中 `GameGrid.tsx` 内部获取 `selectedPlatform` prop 的代码 `let's add it right here, good` 被遗漏了，导致后续控制台报错。上面的示例代码已补全了这一步。

---

## 25. 代码重构：提取查询对象 (`GameQuery`)

> 简述：本节通过引入“查询对象模式” (Query Object Pattern) 来重构应用的状态管理和数据传递方式。核心思想是创建一个名为 `GameQuery` 的接口，将所有与游戏列表查询相关的参数（如选中的类型 `genre`、选中的平台 `platform`，以及未来可能加入的排序方式 `sortOrder`、搜索文本 `searchText` 等）封装到这一个对象中。这样做不仅使 `App` 组件的状态管理更为集中和整洁，也极大地简化了组件之间（特别是从 `App` 到 `GameGrid` 再到 `useGames` Hook）的 props 传递，同时也增强了代码的可扩展性和可维护性。

**知识树**

1. **识别代码“异味” (Code Smell)**：
    - 随着筛选和排序功能的增加，`App` 组件中需要管理的独立状态变量 (`selectedGenre`, `selectedPlatform` 等) 越来越多。
    - 这些状态变量作为单独的 props 逐个传递给子组件 (`GameGrid`)，再传递给自定义 Hook (`useGames`)，导致 props 列表冗长，组件和 Hook 的函数签名复杂。
    - 这种模式使得添加新的查询参数变得繁琐，且容易出错。
2. **查询对象模式 (Query Object Pattern)**：
    - **目的**：将所有相关的查询参数聚合到一个单一的对象中。
    - **实现**：
        - 定义一个新的 TypeScript 接口 `GameQuery` (通常放在 `App.tsx` 中并导出，或放在 `src/entities.ts`)。
        - `GameQuery` 接口包含所有查询条件作为其属性，例如：
            - `genre: Genre | null` (或 `genreId: number | null`)
            - `platform: Platform | null` (或 `platformId: number | null`)
            - (未来可扩展) `sortOrder?: string`
            - (未来可扩展) `searchText?: string`
        - 讲师建议属性名直接用 `genre`, `platform`，而不是 `selectedGenre`, `selectedPlatform`，以避免在对象内部显得重复。
3. **`App.tsx` 状态管理重构**：
    - 将原先多个独立的 `useState` 调用（用于 `selectedGenre`, `selectedPlatform` 等）替换为一个单一的 `useState` 调用，该状态变量的类型为 `GameQuery`。
        ```TypeScript
        const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
        ```
        - 初始值设为 `{}` 并使用类型断言 `as GameQuery`，表示这是一个 `GameQuery` 类型的空对象。所有属性此时都为 `undefined` (或在接口中设为可选)。或者，可以初始化为包含所有可选属性并设为 `null` 或默认值的对象。
    - **更新 `gameQuery` 状态**：当用户选择新的类型或平台时，调用 `setGameQuery`。关键是使用对象扩展运算符 (`...`) 来基于当前的 `gameQuery` 创建一个新的对象，并只更新变化的属性：
      TypeScript
        ```TypeScript
        // 当选择新类型时
        setGameQuery({ ...gameQuery, genre: newGenre });
        // 当选择新平台时
        setGameQuery({ ...gameQuery, platform: newPlatform });
        ```
4. **Props 传递简化**：
    - `App.tsx` 现在只需要向 `GameGrid` 组件传递一个 `gameQuery: GameQuery` prop 即可，而不是多个单独的筛选条件。
    - 向 `GenreList` 和 `PlatformSelector` 传递的 prop 也相应调整，例如，如果它们需要知道当前选中的具体对象以高亮显示，则传递 `gameQuery.genre` 和 `gameQuery.platform`。
5. **`GameGrid.tsx` 和 `useGames.ts` Hook 调整**：
    - **`GameGrid` Props**：修改 `Props` 接口，只接收 `gameQuery: GameQuery`。
    - **`useGames` Hook 参数**：其函数签名从接收多个单独参数 ( `selectedGenre`, `selectedPlatform` ) 修改为接收一个 `gameQuery: GameQuery` 对象。
    - **API 参数构建 (在 `useGames` 中)**：从传入的 `gameQuery` 对象中解构出所需的属性来构建 API 请求的 `params`，例如 `genres: gameQuery.genre?.id` 和 `platforms: gameQuery.platform?.id`。
    - **`useData` Hook 的依赖项 (`deps`)**：现在可以直接将整个 `gameQuery` 对象作为依赖项传递给 `useData` (例如 `[gameQuery]`)。当 `gameQuery` 对象的任何属性发生变化，导致 `setGameQuery` 创建了一个新的 `gameQuery` 对象引用时，`useData` 的 `useEffect` 就会因为依赖项（对象引用）的变化而重新执行，从而触发数据的重新获取。
6. **代码整洁性与可扩展性提升**：
    - 通过封装到 `GameQuery` 对象，代码逻辑更集中，组件接口更清晰。
    - 未来若需添加新的筛选或排序条件，只需修改 `GameQuery` 接口和相关的状态更新逻辑，而不需要大规模修改 props 传递链。

**代码示例**

1. 定义并导出 `GameQuery` 接口 (在 `App.tsx` 或 `src/entities.ts`)

    TypeScript

    ```TypeScript
    // In src/App.tsx or src/entities.ts
    import { Genre, Platform } from './entities'; // 假设 Genre 和 Platform 在 entities.ts

    export interface GameQuery {
      genre: Genre | null;
      platform: Platform | null;
      // sortOrder?: string; // 为后续排序做准备
      // searchText?: string; // 为后续搜索做准备
    }
    ```

2. 重构 `App.tsx` 的状态管理和 Props 传递

    TypeScript

    ```TypeScript
    // In src/App.tsx
    import { useState } from 'react';
    import { GameQuery } from './App'; // 或从 entities 导入
    // ... (other imports: Grid, Show, NavBar, GameGrid, GenreList, PlatformSelector)

    function App() {
      // 1. 使用单一的 gameQuery 状态
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ... */ >
          <GridItem area="nav"> <NavBar /> </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={gameQuery.genre} // 传递 gameQuery 中的 genre
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} // 更新 gameQuery
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <PlatformSelector
              selectedPlatform={gameQuery.platform} // 传递 gameQuery 中的 platform
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} // 更新 gameQuery
            />
            {/* 2. 向 GameGrid 传递整个 gameQuery 对象 */}
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    export default App;
    ```

3. 修改 `GameGrid.tsx` 以接收 `gameQuery`

    TypeScript

    ```TypeScript
    // In src/components/GameGrid.tsx
    // ... (imports)
    import { GameQuery } from '../App'; // 或从 entities 导入

    interface Props {
      gameQuery: GameQuery; // 1. Props 只接收 gameQuery
    }

    const GameGrid = ({ gameQuery }: Props) => { // 2. 解构 gameQuery
      // 3. 将整个 gameQuery 传递给 useGames
      const { data: games, error, isLoading } = useGames(gameQuery);
      // ... (渲染逻辑)
    };
    // ...
    ```

4. 修改 `useGames.ts` Hook 以接收 `gameQuery`

    TypeScript

    ```TypeScript
    // In src/hooks/useGames.ts
    import useData from './useData';
    import { Game } from '../entities';
    import { GameQuery } from '../App'; // 或从 entities 导入

    // 1. useGames 接收单个 gameQuery 对象作为参数
    const useGames = (gameQuery: GameQuery) => {
      return useData<Game>(
        '/games',
        {
          params: {
            genres: gameQuery.genre?.id,         // 2. 从 gameQuery 中获取参数
            platforms: gameQuery.platform?.id,
            // ordering: gameQuery.sortOrder, // 为后续排序做准备
            // search: gameQuery.searchText,  // 为后续搜索做准备
          }
        },
        [gameQuery] // 3. 将整个 gameQuery 对象作为依赖项
      );
    };

    export default useGames;
    ```

---

## 26. UI 组件：构建排序选择器

> 简述：本节介绍如何创建一个用于选择游戏排序方式的下拉菜单组件——`SortSelector`。其 UI 结构与之前创建的`PlatformSelector`相似，同样利用 Chakra UI 的`<Menu>`系列组件实现。关键区别在于，`SortSelector`的菜单项是根据一组预定义的排序标准（如按相关性、添加日期、名称等）静态生成的，每个选项都关联一个特定的值用于后续 API 请求。同时，对`PlatformSelector`和新创建的`SortSelector`在页面上的布局进行了调整，使它们能够水平排列并具有适当的间距。

**知识树**

1. **创建 `SortSelector.tsx` 组件 (在 `src/components`)**：
    - 目的：提供一个用户界面，允许用户选择游戏的排序标准。
    - **UI 结构复用**：其基本 JSX 结构（使用 Chakra UI 的`<Menu>`, `<MenuButton as={Button}>`, `<MenuList>`, `<MenuItem>`）与`PlatformSelector`非常相似，因此可以直接复制粘贴`PlatformSelector`的返回语句作为起点。
    - `<MenuButton>`：
        - 初始按钮文本可以设为一个静态的默认值，例如 "Order by: Relevance"。
        - 通常也会带有一个向下的小箭头图标 (e.g., `BsChevronDown`)。
2. **预定义排序选项 (`sortOrders` 数组)**：
    - 在 `SortSelector` 组件内部（或作为一个可导入的常量）定义一个数组，名为 `sortOrders`。
    - 数组中的每个元素都是一个对象，至少包含两个属性：
        - `value: string`：这个值将用于 API 请求中的 `ordering` 参数。对于默认排序（如按相关性），`value`可以为空字符串或一个 API 不识别的特定值（如果 API 默认行为就是相关性排序）。对于需要反向排序的（如按最新添加日期），`value`通常是字段名前加一个连字符 (`-`)，例如 `'-added'`。
        - `label: string`：这个是显示给用户的、人类可读的排序选项文本 (e.g., "Relevance", "Date added", "Name")。
    - 示例 `sortOrders` 数组内容：
        - `{ value: '', label: 'Relevance' }`
        - `{ value: '-added', label: 'Date added' }` (新的在前)
        - `{ value: 'name', label: 'Name' }`
        - `{ value: '-released', label: 'Release date' }` (新的在前)
        - `{ value: '-metacritic', label: 'Popularity' }` (高分在前)
        - `{ value: '-rating', label: 'Average rating' }` (高分在前)
3. **动态渲染菜单项 (在 `SortSelector.tsx`)**：
    - 移除之前从 `PlatformSelector` 复制过来的静态 `<MenuItem>`。
    - 遍历 `sortOrders` 数组。
    - 为数组中的每个 `order` 对象渲染一个 `<MenuItem>` 组件。
        - 设置 `<MenuItem>` 的 `key` 为 `order.value` (确保唯一性，因为 label 可能重复，但 value 应唯一或有特定处理)。
        - 设置 `<MenuItem>` 的显示文本为 `order.label`。
        - (为后续交互准备) `<MenuItem>` 的 `onClick` 事件将用于触发排序逻辑，并传递 `order.value`。
4. **集成到 `App.tsx` 并调整布局**：
    - 将新创建的 `SortSelector` 组件添加到 `App.tsx` 的主内容区 (`area="main"`)，通常放置在 `PlatformSelector` 旁边，位于 `GameGrid` 之上。
    - **水平布局调整**：
        - 使用 Chakra UI 的 `<HStack>` 组件将 `PlatformSelector` 和 `SortSelector` 包裹起来，使它们水平排列。
        - 为 `<HStack>` 设置 `spacing` prop (e.g., `spacing={5}`) 来控制这两个选择器之间的水平间距。
        - 为了使这两个选择器与下方的游戏卡片网格左侧对齐，可以为 `<HStack>` 设置 `marginLeft` (或 `paddingLeft`)。字幕中是为 `<HStack>` 设置 `paddingX`（如果父级`GridItem`没有 `paddingX`的话）或者直接在父级`GridItem`设置。不过，字幕中是直接为 `HStack` 设置 `marginLeft` (例如 `marginLeft="someValue"` or `paddingLeft`)。
        - 为了在选择器组和下方的游戏卡片网格之间增加一些垂直间距，可以为 `<HStack>` 设置 `marginBottom` prop (e.g., `marginBottom={5}`).

**代码示例**

1. 创建 `SortSelector.tsx` (在 `src/components/SortSelector.tsx`)

    ```tsx
    import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
    import { BsChevronDown } from 'react-icons/bs';

    // interface Props { // 后续章节添加
    //   onSelectSortOrder: (sortOrder: string) => void;
    //   sortOrder: string | null;
    // }

    const SortSelector = (/*{ onSelectSortOrder, sortOrder }: Props*/) => {
      const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
      ];

      // const currentSortOrder = sortOrders.find(order => order.value === sortOrder); // 后续章节添加

      return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {/* Order by: {currentSortOrder?.label || 'Relevance'} 后续章节修改 */}
            Order by: Relevance
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                key={order.value}
                value={order.value} // 可用于 onClick
                // onClick={() => onSelectSortOrder(order.value)} 后续章节添加
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };

    export default SortSelector;
    ```

- _Note on Props and onClick_: 字幕中此节主要关注渲染，`onSelectSortOrder` 和 `currentSortOrder` props 以及 `onClick` 逻辑在下一节实现排序时才会完整加入。

2. 在 `App.tsx` 中集成 `SortSelector` 并调整布局

    ```TypeScript
    // In src/App.tsx
    // ... (other imports)
    import PlatformSelector from './components/PlatformSelector';
    import SortSelector from './components/SortSelector'; // 1. 导入 SortSelector
    import { HStack, Box } from '@chakra-ui/react'; // 2. 导入 HStack (或 Flex) 和 Box

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ... */ >
          {/* ... NavBar ... */}
          {/* ... GenreList (in aside) ... */}
          <GridItem area="main">
            {/* 3. 使用 HStack 包裹选择器们，并设置间距和边距 */}
            {/* 字幕后续改为用Flex和Box处理间距，因为HStack与Menu的spacing有冲突 */}
            <HStack spacing={5} paddingLeft={2} marginBottom={5}> {/* 初始用HStack，后改为Flex */}
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
              />
              <SortSelector
                // onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                // currentSortOrder={gameQuery.sortOrder}
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```

    - **Note on Layout Wrapper**: 字幕中最初使用 `<HStack>`，但在第 29 节中，为了解决一个 Chakra Menu 的控制台警告问题，会将 `<HStack>` 替换为 `<Flex>`，并通过在 `<PlatformSelector>` 外包裹 `<Box>` 并设置其 `marginRight` 来手动控制间距。此处暂时按第 26 节的描述使用 `<HStack>`。

## 27. 交互功能：实现游戏排序

> 简述：本节介绍如何实现游戏列表的排序功能。当用户从`SortSelector`组件中选择一个排序标准（如按名称、发行日期等）时，应用会根据所选标准向后端 API 请求排序后的游戏数据，并更新游戏列表的显示。这涉及到将用户选择的排序值更新到`App`组件的中央`gameQuery`对象中，然后将此排序参数传递给`useGames` Hook，最终影响 API 请求。同时，`SortSelector`按钮上显示的文本也会动态更新，以反映当前应用的排序方式。

**知识树**

1. **API 排序参数 (`ordering`) 理解**：
    - RAWG API 使用名为 `ordering` 的查询参数来控制游戏列表的排序。
    - 参数值可以是 API 支持的排序字段名，例如 `name`, `released` (发行日期), `added` (添加日期), `rating` (评分), `metacritic` (媒体评分)。
    - 在字段名前添加连字符 (`-`) 表示按该字段降序排列。例如，`'-released'` 表示按发行日期降序（最新的在前）。
2. **`GameQuery` 接口扩展**：
    - 在 `GameQuery` 接口 (定义于 `App.tsx` 或 `src/entities.ts`) 中添加一个新的可选属性 `sortOrder?: string`，用于存储当前选中的排序参数值。
3. **`SortSelector.tsx` 组件交互增强**：
    - **Props 定义**：为其 `Props` 接口添加：
        - `onSelectSortOrder: (sortOrder: string) => void`：回调函数，当用户选择一个新的排序方式时被调用，参数为所选排序方式的 `value` (字符串)。
        - `currentSortOrder?: string`：用于接收从 `App` 组件传入的当前已应用的排序参数值，以便动态更新按钮显示的文本。
    - **`<MenuItem>` 的 `onClick` 事件**：为每个动态渲染的 `MenuItem` 绑定 `onClick` 事件。当用户点击某个排序选项时，调用 `onSelectSortOrder` prop，并将该选项对应的 `order.value` (即应传递给 API 的排序字符串) 作为参数传递出去。
4. **`App.tsx` 状态更新与 Props 传递**：

    - **处理回调**：实现传递给 `SortSelector` 的 `onSelectSortOrder` 回调函数。该函数内部调用 `setGameQuery`，基于当前的 `gameQuery` 创建一个新对象，并更新其 `sortOrder` 属性为用户新选择的值：

        ```TypeScript
        setGameQuery({ ...gameQuery, sortOrder: newSortOrderValue })
        ```

    - **传递当前排序状态**：将 `gameQuery.sortOrder` 作为 `currentSortOrder` prop 传递给 `SortSelector` 组件。

5. **API 请求参数调整 (在 `useGames.ts` Hook 中)**：
    - `useGames` Hook 已经接收整个 `gameQuery` 对象作为参数。
    - 在其内部调用通用 `useData` Hook 时，于传递给 `useData` 的 `requestConfig` (Axios 请求配置对象) 的 `params` 属性中，添加 `ordering: gameQuery.sortOrder`。
    - 由于 `gameQuery` 对象本身已是 `useData` Hook 的 `useEffect` 的依赖项，当 `gameQuery.sortOrder` 发生变化（导致 `gameQuery` 对象引用改变）时，会自动触发数据的重新获取。
6. **动态更新 `SortSelector` 按钮文本**：
    - 在 `SortSelector.tsx` 中，根据传入的 `currentSortOrder` prop 的值，查找 `sortOrders` 数组中与之匹配的项。
    - 如果找到匹配项，则 `<MenuButton>` 的显示文本设为该匹配项的 `label`。
    - 如果 `currentSortOrder` 为空或未找到匹配项（例如，对应默认的相关性排序，其`value`可能为空字符串），则按钮文本显示默认值，如 "Order by: Relevance"。
7. **处理游戏数据中图片缺失问题 (临时应急修复)**：
    - **问题引入**：当按某些标准排序后（例如按名称排序），列表中可能会出现一些没有 `background_image` 属性的游戏数据。这会导致之前创建的 `getCroppedImageUrl` 函数在尝试处理 `null` 或 `undefined` 的 URL 时出错，进而可能中断页面渲染。
    - **临时解决方案**：在 `image-url.ts` 文件的 `getCroppedImageUrl` 函数开头增加一个检查：如果传入的 `url` 参数是假值 (falsy)，则直接返回一个空字符串。这可以暂时避免函数因无效 URL 而出错。
    - **记录待办**：讲师指出这是一个临时修复，后续需要更完善地处理图片缺失的情况（例如，显示一个默认的占位图片）。

**代码示例**

1. 扩展 `GameQuery` 接口 (在 `App.tsx` 或 `src/entities.ts`)

    ```TypeScript
    export interface GameQuery {
      genre: Genre | null;
      platform: Platform | null;
      sortOrder?: string; // 1. 添加 sortOrder 属性
    }
    ```

2. 修改 `SortSelector.tsx` 以处理选择和动态显示

    ```TypeScript
    // In src/components/SortSelector.tsx
    // ... (imports, sortOrders array definition)

    interface Props {
      onSelectSortOrder: (sortOrder: string) => void; // 1. 定义 onSelectSortOrder prop
      currentSortOrder?: string;                    // 2. 定义 currentSortOrder prop
    }

    // 3. 接收 props
    const SortSelector = ({ onSelectSortOrder, currentSortOrder }: Props) => {
      const sortOrders = [ /* ... as defined before ... */ ];

      // 4. 查找当前选中的排序选项以获取其label
      const currentSortLabel = sortOrders.find(order => order.value === currentSortOrder)?.label;

      return (
        <Menu>
          {/* 5. 动态显示按钮文本 */}
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortLabel || 'Relevance'}
          </MenuButton>
          <MenuList>
            {sortOrders.map(order => (
              <MenuItem
                key={order.value}
                // 6. 点击时调用 onSelectSortOrder，传递排序值
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };
    export default SortSelector;
    ```

3. 修改 `App.tsx` 以处理排序状态和传递 props

    ```tsx
    export interface GameQuery {
      genre: Genre | null;
      platform: Platform | null;
      sortOrder: string; // 新增 sortOrder，初始可设为空字符串或特定值
    }

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({
        genre: null,
        platform: null,
        sortOrder: '', // 初始化 sortOrder
      } as GameQuery);

      // ...
      return (
        <Grid /* ... */ >
          {/* ... */}
          <GridItem area="main">
            <HStack /* ... */ >
              <PlatformSelector /* ... */ />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    ```

4. 修改 `useGames.ts` Hook 以包含 `ordering` 参数 ts

```ts
/10/ In src/hooks/useGames.ts

// ... (imports, GameQuery type from App or entities)


const useGames = (gameQuery: GameQuery) => { // gameQuery 已经包含 sortOrder
return useData<Game>(
'/games',
{
params: {
genres: gameQuery.genre?.id,
platforms: gameQuery.platform?.id,
ordering: gameQuery.sortOrder // 1. 添加 ordering 参数
}
},
[gameQuery] // gameQuery 对象本身作为依赖项
);
};
export default useGames;

```

5. 临时修复 `image-url.ts` (在 `src/services/image-url.ts`)

    ```TypeScript
    const getCroppedImageUrl = (url: string): string => {
      // 1. 如果URL为假值，返回空字符串 (后续会改进为占位图)
      if (!url) return '';

      const target = 'media/';
      const index = url.indexOf(target) + target.length;
      if (index < target.length) return url; // 如果找不到 'media/' 也返回原url

      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    };

    export default getCroppedImageUrl;
    ```

---

## 28. UI 健壮性：处理无图片游戏

> 简述：本节旨在进一步完善游戏卡片对于图片缺失情况的处理。通过修改 `getCroppedImageUrl` 工具函数，当 API 返回的游戏数据中没有提供有效的封面图片 URL 时，该函数不再返回空字符串，而是返回一个预先准备好的本地占位图的路径。这确保了即时游戏本身没有图片，卡片上也会显示一个统一的、视觉上可接受的默认图像，提升了界面的健壮性和用户体验。

**知识树**

1. **问题回顾**：
    - 某些游戏数据可能缺少 `background_image` 属性（其值为 `null` 或 `undefined`）。
    - 之前的临时修复是在 `getCroppedImageUrl` 中对此类情况返回空字符串，这可能导致 `<Image>` 组件显示一个损坏的图片图标或空白。
2. **解决方案：使用本地占位图片**：
    - **准备资源**：在 `src/assets` 目录下添加一个用作默认占位符的图片文件 (例如，`no-image-placeholder.webp`)。
    - **导入占位图**：在 `src/services/image-url.ts` 文件的顶部，像导入其他 JavaScript 模块一样导入这个本地占位图片。Vite（或其他现代打包工具）会处理这个导入，并使得导入的变量（例如 `noImagePlaceholder`）在运行时指向该图片资源的正确路径或数据 URI。
        ```TypeScript
        import noImagePlaceholder from '../assets/no-image-placeholder.webp';
        ```
3. **修改 `getCroppedImageUrl` 函数逻辑**：
    - 在函数的开头，检查传入的 `url` 参数是否为假值 (falsy: `null`, `undefined`, `''`).
    - 如果 `url` 为假值，则函数不再返回空字符串，而是直接返回之前导入的 `noImagePlaceholder` 变量。
    - 如果 `url` 是一个有效的字符串，则继续执行原有的图片裁剪 URL 构建逻辑。
4. **效果**：
    - 当游戏数据中没有 `background_image` 时，`GameCard` 组件的 `<Image src={...} />` 会接收到占位图片的路径，从而在界面上显示一个统一的默认图像，而不是显示错误或空白。

**代码示例**

1. 在 `src/services/image-url.ts` 中修改 `getCroppedImageUrl` 函数

    TypeScript

    ```TypeScript
    // 1. 导入本地占位图片资源
    import noImagePlaceholder from '../assets/no-image-placeholder.webp';

    const getCroppedImageUrl = (url: string): string => {
      // 2. 如果传入的URL为假值，则返回导入的占位图片路径
      if (!url) return noImagePlaceholder;

      // 如果URL有效，则执行原有的裁剪逻辑
      const target = 'media/';
      const index = url.indexOf(target); // 查找 'media/' 的起始位置
      if (index === -1) return url; // 如果 'media/' 不存在，也可能直接返回原URL或占位图

      // 在 'media/' 之后插入裁剪参数
      const insertionPoint = index + target.length;
      return url.slice(0, insertionPoint) + 'crop/600/400/' + url.slice(insertionPoint);
    };

    export default getCroppedImageUrl;
    ```

    - **注意**：确保 `no-image-placeholder.webp` 文件已放置在 `src/assets` 目录下。此处的裁剪逻辑与字幕演示的 `url.slice(0, index) + 'media/crop/600/400/' + url.slice(index + 'media/'.length)` 略有不同，但核心思想一致：在`media/`后插入`crop/600/400/`。字幕中的精确切片是 `const index = url.indexOf('media/') + 'media/'.length; return url.slice(0, index) + 'crop/600/400/' + url.slice(index);` 此处采用字幕的精确实现。

    <!-- end list -->

    ```TypeScript
    // src/services/image-url.ts (更接近字幕的精确实现)
    import noImagePlaceholder from '../assets/no-image-placeholder.webp';

    const getCroppedImageUrl = (url: string): string => {
      if (!url) return noImagePlaceholder;

      const target = 'media/';
      const indexOfMedia = url.indexOf(target);

      if (indexOfMedia === -1) {
        // 如果URL中不包含 'media/'，可能不是RAWG的CDN图片，
        // 可以选择返回原URL或者也返回占位图，取决于期望行为
        return url; // 或者 return noImagePlaceholder;
      }

      const insertionPoint = indexOfMedia + target.length;
      return url.slice(0, insertionPoint) + 'crop/600/400/' + url.slice(insertionPoint);
    };

    export default getCroppedImageUrl;
    ```

---

## 29. 问题修复：解决 Chakra UI 菜单组件的控制台警告

> 简述：本节专注于解决一个在与 Chakra UI 的`<Menu>`组件（特别是当它们被包裹在带有`spacing`属性的`<HStack>`中时）交互后浏览器控制台出现的特定 CSS 警告问题。该警告信息（"css margin styles cannot be used to apply padding which means a popper and its reference element or boundary"）虽然晦涩，但通过实验发现，将外层的`<HStack>`替换为 Chakra UI 的`<Flex>`组件可以消除此警告。为了恢复选择器之间的间距，采用了在其中一个选择器外部包裹一个`<Box>`组件并为其设置显式`margin`的方法。

**知识树**

1. **问题现象识别**：
    - 当用户与页面上的 Chakra UI `<Menu>`组件（例如 `PlatformSelector` 或 `SortSelector`）进行交互（如从中选择一个选项）后，浏览器的开发者控制台会输出一条关于 CSS `margin` 和 `padding` 使用不当的警告。
    - 讲师发现此问题是在将这两个选择器组件用带有 `spacing` prop 的 `<HStack>` 组件包裹之后出现的。
2. **问题定位与解决方案尝试**：
    - `<HStack>` 组件内部为了实现 `spacing` 效果，可能会对其子元素应用 `margin`。这可能与 `<Menu>` 组件（特别是其依赖的 Popper.js 库用于定位弹出菜单）内部对参考元素或边界的 `padding/margin` 处理方式产生了冲突，从而触发了警告。
    - **解决方案**：将包裹 `PlatformSelector` 和 `SortSelector` 的 `<HStack>` 组件替换为 Chakra UI 的更底层的 `<Flex>` 组件。
        - `<Flex>` 组件提供了灵活的 Flexbox 布局能力，但它自身不像 `<HStack>` 那样直接通过 `spacing` prop 来自动管理子元素间的间距。
3. **效果验证**：
    - 将 `<HStack>` 替换为 `<Flex>` 后，再次与菜单交互，发现控制台的警告信息不再出现。
4. **恢复子元素间距**：

    - 由于 `<Flex>` 没有 `spacing` prop，之前由 `<HStack spacing={5}>` 提供的选择器之间的水平间距会消失。
    - **手动添加间距**：选择其中一个子组件（例如 `PlatformSelector`），用一个 Chakra UI 的 `<Box>` 组件将其包裹起来。然后，为这个 `<Box>` 组件设置 `marginRight` (或 `marginLeft`，取决于希望在哪一侧添加间距) 属性，以重新创建两个选择器之间的视觉间隔。例如：
      TypeScript
        ```TypeScript
        <Flex>
          <Box marginRight={5}> {/* 为 PlatformSelector 的容器添加右边距 */}
            <PlatformSelector /* ...props... */ />
          </Box>
          <SortSelector /* ...props... */ />
        </Flex>
        ```

5. **结论**：
    - 虽然警 11 告信息本身可能难以直接理解，但通过替换布局组件并手动调整间距，成功消除了该警告，同时保持了期望的视觉布局。这体现了在遇到库组件间可能的轻微样式冲突时，采用替代布局方案或更细致地控制样式是一种有效的解决策略。

**代码示例**

1. 在 `App.tsx` 中修改选择器组的布局包裹组件

    TypeScript

    ```TypeScript
    // In src/App.tsx
    // ... (other imports)
    // 1. 导入 Flex 和 Box (如果尚未使用)
    import { Grid, GridItem, Show, Flex, Box, HStack } from '@chakra-ui/react';
    import PlatformSelector from './components/PlatformSelector';
    import SortSelector from './components/SortSelector';
    // ... (GameQuery interface, App component, useState for gameQuery)

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ...templateAreas, templateColumns... */ >
          {/* ... NavBar ... */}
          {/* ... GenreList (in aside) ... */}
          <GridItem area="main">
            {/* 2. 将原来的 HStack 替换为 Flex */}
            <Flex paddingLeft={2} marginBottom={5}> {/* paddingLeft 和 marginBottom 可以保留或调整 */}
              {/* 3. 用 Box 包裹 PlatformSelector 并设置右边距 */}
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                />
              </Box>
              <SortSelector
                currentSortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </Flex>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }

    export default App;
    ```

    - **注意**：原先在 `<HStack>` 上设置的 `spacing={5}` 属性被移除，因为 `<Flex>` 不直接支持这种方式的间距。间距现在通过包裹 `<PlatformSelector>` 的 `<Box>` 的 `marginRight={5}` 来实现。`paddingLeft` 和 `marginBottom` 属性可以从原 `<HStack>` 移到新的 `<Flex>` 组件上，以保持整体布局位置。

## 30. UI 组件：构建游戏搜索输入框

> 简述：本节介绍如何在导航栏中添加一个用于游戏搜索的输入框组件 (`SearchInput`)。该组件基于 Chakra UI 的`<Input>`构建，并通过`<InputGroup>`和`<InputLeftElement>`在其左侧嵌入了一个搜索图标，以增强视觉引导和用户体验。同时，对导航栏内其他元素（如颜色模式切换的文本标签）的布局也进行了微调，以适应新组件的加入。

**知识树**

1. **创建 `SearchInput.tsx` 组件 (在 `src/components` 目录)**：
    - 目的：封装搜索输入框的 UI 和基本交互。
2. **Chakra UI `<Input>` 组件应用**：
    - `borderRadius`：设置合适的圆角值，使输入框外观更柔和。
    - `placeholder`：提供占位文本，如 "Search games..."，引导用户输入。
    - `variant="filled"`：选择 Chakra UI 输入框的预设样式变体之一 (字幕中为 "field"，Chakra UI 通常用 "filled", "outline", "unstyled", "flushed"；假设此处为 "filled" 或一个自定义接近 "filled" 的样式)，以获得特定的视觉效果。
3. **使用 `<InputGroup>` 和 `<InputLeftElement>` 添加输入框图标**：
    - `<InputGroup>`：作为容器，将 `<Input>` 组件和需要在其内部显示的元素（如图标）组合成一个整体。
    - `<InputLeftElement>`：专门用于在输入框内部的左侧放置子元素。其 `children` prop 可以接收一个图标组件。
    - **图标来源**：使用 `react-icons` 库中的图标，例如 `<BsSearch />` (Bootstrap Icons)。
4. **集成到导航栏 (`NavBar.tsx`)**：
    - 将创建好的 `SearchInput` 组件实例添加到 `NavBar` 组件的 JSX 结构中，通常放置在 Logo 图片之后、颜色模式切换开关之前。
5. **导航栏布局微调**：
    - **`ColorModeSwitch.tsx` 文本换行**：为 `ColorModeSwitch` 组件内部用于显示 "Dark Mode" 文本的 `<Text>` 组件添加 `whiteSpace="nowrap"` CSS 属性，以防止在导航栏空间不足时文本发生不期望的换行。
    - **`NavBar.tsx` `<HStack>` 布局**：由于导航栏中现在有三个主要元素（Logo, SearchInput, ColorModeSwitch），之前为两个元素设置的 `justifyContent="space-between"` 可能不再适用或不再需要，可以移除此属性，让元素自然排列或根据 `<HStack>` 的默认 `spacing` 进行分布。
6. **响应式设计检查**：
    - 使用浏览器开发者工具的设备模拟功能，检查搜索输入框及其所在导航栏在不同屏幕尺寸（移动端、平板、桌面）下的显示效果是否依然良好。

**代码示例**

1. 创建 `SearchInput.tsx` (在 `src/components/SearchInput.tsx`)

    ```TypeScript
    import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
    import { BsSearch } from 'react-icons/bs'; // 导入搜索图标

    const SearchInput = () => {
      return (
        <InputGroup>
          <InputLeftElement children={<BsSearch />} /> {/* 在输入框左侧放置搜索图标 */}
          <Input
            borderRadius={20} // 示例圆角值
            placeholder="Search games..."
            variant="filled" // 或其他合适的variant
          />
        </InputGroup>
      );
    };

    export default SearchInput;
    ```

2. 在 `NavBar.tsx` 中集成 `SearchInput` 并调整布局

    TypeScript

    ```TypeScript
    import { HStack, Image } from '@chakra-ui/react';
    import logo from '../assets/logo.webp';
    import ColorModeSwitch from './ColorModeSwitch';
    import SearchInput from './SearchInput'; // 1. 导入SearchInput

    const NavBar = () => {
      return (
        // 2. 移除 HStack 的 justifyContent="space-between" (如果之前有且不适用)
        <HStack padding="10px"> {/* 之前的 padding="6" 被改回或调整 */}
          <Image src={logo} boxSize="60px" />
          <SearchInput /> {/* 3. 添加SearchInput组件 */}
          <ColorModeSwitch />
        </HStack>
      );
    };

    export default NavBar;
    ```

3. 修改 `ColorModeSwitch.tsx` 防止文本换行

    TypeScript

    ```TypeScript
    // In src/components/ColorModeSwitch.tsx
    // ... (imports)
    const ColorModeSwitch = () => {
      // ... (useColorMode hook)
      return (
        <HStack>
          <Switch /* ...props... */ />
          {/* 为Text组件添加 whiteSpace="nowrap" */}
          <Text whiteSpace="nowrap">Dark Mode</Text>
        </HStack>
      );
    };
    // ...
    ```

---

## 31. 交互功能：实现游戏搜索

> 简述：本节介绍如何为游戏发现应用添加实际的搜索功能。当用户在 `SearchInput` 组件中输入搜索关键词并提交（通常通过按 Enter 键）时，应用会捕获这个搜索词，将其更新到全局的 `gameQuery` 状态对象中，并最终作为 API 请求参数发送给后端，以获取与关键词匹配的游戏列表。此过程涉及到使用 React 的 `useRef` Hook 来高效获取输入框的值，并通过回调函数和状态提升机制在组件间传递数据。

**知识树**

1. **表单处理与提交 (`SearchInput.tsx`)**：
    - 使用 HTML 原生的 `<form>` 元素包裹 `<InputGroup>`（或整个输入框部分），以便利用其 `onSubmit` 事件。
    - **`onSubmit` 事件处理**：
        - 为 `<form>` 元素绑定 `onSubmit` 事件处理器函数。
        - 在处理器函数中，首先调用 `event.preventDefault()` 来阻止表单提交导致整个页面刷新的默认行为。
2. **获取输入值 (`useRef` Hook)**：
    - **选择`useRef`的原因**：对于只有一个输入字段的简单表单，使用 `useRef` 来直接访问 DOM 元素以获取其值，通常比为输入框维护一个受控组件的 `useState` 更简洁高效。
    - **实现步骤**：
        1. 在 `SearchInput` 组件中，调用 `useRef<HTMLInputElement>(null)` 创建一个 ref 对象，并指定其泛型类型为 `HTMLInputElement`。
        2. 将这个 `ref` 对象（例如 `searchInputRef`）关联到 Chakra UI 的 `<Input>` 组件的 `ref` prop 上。
        3. 在 `onSubmit` 事件处理器中，通过访问 `searchInputRef.current?.value` 来获取用户在输入框中输入的当前文本值。使用可选链 (`?.`) 是一个好习惯，以防 `ref.current` 意外为 `null`。
3. **组件间通信 (Props Drilling - 明确指出为临时方案，后续课程有更优解)**：
    - **`SearchInput` 组件**：
        - Props 定义：新增 `onSearch: (searchText: string) => void` 回调函数类型的 prop。
        - 内部逻辑：在表单成功提交并获取到搜索文本后，调用 `onSearch` prop，并将搜索文本作为参数传递出去。
    - **`NavBar` 组件**：
        - 由于 `SearchInput` 是 `NavBar` 的子组件，而状态管理在 `App`，`NavBar` 需要充当“中间人”。
        - Props 定义：`NavBar` 也新增 `onSearch: (searchText: string) => void` prop。
        - 内部逻辑：将从 `App` 组件接收到的 `onSearch` 回调直接传递给其子组件 `SearchInput` 的 `onSearch` prop。
    - **`App.tsx` 组件**：
        - 实现传递给 `NavBar` 的 `onSearch` 回调函数。该函数内部调用 `setGameQuery`，基于当前的 `gameQuery` 创建新对象，并更新其 `searchText` 属性。
4. **`GameQuery` 接口扩展**：
    - 在 `GameQuery` 接口 (定义于 `App.tsx` 或 `src/entities.ts`) 中添加一个新的可选属性 `searchText?: string`，用于存储用户输入的搜索关键词。
5. **API 请求参数调整 (在 `useGames` Hook 中)**：
    - `useGames` Hook 已经接收整个 `gameQuery` 对象。
    - 在其内部调用通用 `useData` Hook 时，于传递给 `useData` 的 `requestConfig` 的 `params` 属性中，添加 `search: gameQuery.searchText`。RAWG API 使用 `search` 作为文本搜索的查询参数名。
    - 由于 `gameQuery` 对象本身已是 `useData` Hook 的 `useEffect` 的依赖项，当 `gameQuery.searchText` 发生变化（导致 `gameQuery` 对象引用改变）时，会自动触发数据的重新获取。
6. **修复 `<form>` 元素导致的布局问题 (临时 CSS 方案)**：
    - **问题**：直接在 `SearchInput` 中添加 `<form>` 元素后，可能会因为 `<form>` 的默认显示属性（可能是 `display: block` 并占据一定宽度，或者其他因素）导致输入框的宽度或布局表现异常。字幕中提到输入框可能不再占满可用宽度。
    - **初步尝试 (不推荐)**：为 `<form>` 元素添加内联样式 `style={{ width: '100%' }}`。
    - **讲师采用的方案**：在全局样式表 `src/index.css` 中添加一条规则 `form { width: 100%; }`，使得所有表单元素默认宽度为 100%（这可能过于宽泛，实际项目中应更精确地选择器）。这解决了布局问题，但讲师也指出全局修改可能不是最佳实践。

**代码示例**

1. 修改 `SearchInput.tsx` 以处理表单提交和获取输入值

    TypeScript

    ```TypeScript
    import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
    import { FormEvent, useRef } from 'react'; // 1. 导入 useRef 和 FormEvent
    import { BsSearch } from 'react-icons/bs';

    interface Props { // 2. 定义Props接口
      onSearch: (searchText: string) => void;
    }

    const SearchInput = ({ onSearch }: Props) => { // 3. 接收 onSearch prop
      const searchInputRef = useRef<HTMLInputElement>(null); // 4. 创建 ref

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); // 5. 阻止表单默认提交行为
        if (searchInputRef.current) {
          onSearch(searchInputRef.current.value); // 6. 调用 onSearch 回调
        }
      };

      return (
        // 7. 用 form 元素包裹
        <form onSubmit={handleSubmit} style={{ width: '100%' }}> {/* 字幕中用style, 后改为全局CSS */}
          <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            {/* 8. 将 ref 关联到 Input 组件 */}
            <Input ref={searchInputRef} borderRadius={20} placeholder="Search games..." variant="filled" />
          </InputGroup>
        </form>
      );
    };

    export default SearchInput;
    ```

2. 在 `src/index.css` 添加全局样式 (讲师采用的临时方案)

    CSS

    ```TypeScript
    /* src/index.css */
    /* ... (其他已有样式) ... */
    form {
      width: 100%; /* 使表单宽度适应其容器 */
    }
    ```

3. 修改 `NavBar.tsx` 以中转 `onSearch` prop

    TypeScript

    ```TypeScript
    // In src/components/NavBar.tsx
    // ... (imports for HStack, Image, ColorModeSwitch, SearchInput)
    interface Props { // 1. NavBar Props 增加 onSearch
      onSearch: (searchText: string) => void;
    }

    const NavBar = ({ onSearch }: Props) => { // 2. 接收 onSearch
      return (
        <HStack padding="6px"> {/* 字幕中padding改为6 */}
          <Image src={logo} boxSize="60px" />
          {/* 3. 将 onSearch 传递给 SearchInput */}
          <SearchInput onSearch={onSearch} />
          <ColorModeSwitch />
        </HStack>
      );
    };
    export default NavBar;
    ```

4. 扩展 `GameQuery` 接口并修改 `App.tsx`

    TypeScript

    ```TypeScript
    // In src/App.tsx or src/entities.ts (GameQuery interface definition)
    export interface GameQuery {
      genre: Genre | null;
      platform: Platform | null;
      sortOrder?: string;
      searchText?: string; // 1. 添加 searchText 属性
    }

    // In src/App.tsx (component logic)
    // ... (imports, useState for gameQuery)
    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ... */ >
          <GridItem area="nav">
            {/* 2. 传递 onSearch 回调给 NavBar */}
            <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
          </GridItem>
          {/* ... (GenreList, PlatformSelector, SortSelector, GameGrid as before, GameGrid receives gameQuery) ... */}
        </Grid>
      );
    }
    // ...
    ```

5. 修改 `useGames.ts` Hook 以包含 `search` 参数

```TypeScript

// In src/hooks/useGames.ts

// ... (imports, GameQuery type)

const useGames = (gameQuery: GameQuery) => {

return useData<Game>(

'/games',

{

params: {

genres: gameQuery.genre?.id,

platforms: gameQue1ry.platform?.id,

ordering: gameQuery.sortOrder,

search: gameQuery.searchText // 1. 添加 search 参数

}

},

[gameQuery]

);

};

export default useGames;

```

---

## 32. UI 信息：动态页面标题

> 简述：本节介绍如何在游戏列表页面的主内容区顶部添加一个动态的标题 (`GameHeading`)。这个标题能够根据用户当前应用的筛选条件（如选定的游戏类型和平台）自动更新，从而为用户提供清晰的上下文信息，例如显示 "Action Games" 或 "Xbox Action Games"。该功能通过创建一个新的 `GameHeading` 组件，并接收全局的 `gameQuery` 对象来实现。

**知识树**

1. **创建 `GameHeading.tsx` 组件 (在 `src/components`)**：
    - 目的：专门负责展示和动态更新页面主标题。
    - **Props 定义**：接收一个 `gameQuery: GameQuery` 对象作为属性。这个对象包含了当前所有生效的筛选和查询条件。
    - **UI 实现**：使用 Chakra UI 的 `<Heading>` 组件来渲染标题文本。可以设置其 `as="h1"` prop 来指定 HTML 的标题级别（例如，一级标题），以符合语义和 SEO 要求。
2. **动态标题文本生成逻辑 (在 `GameHeading.tsx`)**：
    - 在组件内部，根据传入的 `gameQuery` 对象中的 `platform` 和 `genre` 属性来构建标题字符串。
    - 使用 JavaScript 的模板字符串 (template literals) 和可选链操作符 (`?.`) 来安全地访问可能为 `null` 的平台或类型对象的 `name` 属性。
    - **标题组合逻辑示例**：
        ```TypeScript
        const platformName = gameQuery.platform?.name || '';
        const genreName = gameQuery.genre?.name || '';
        const headingText = `${platformName} ${genreName} Games`.trim(); // trim() 移除可能多余的空格
        // 如果 platformName 和 genreName都为空，则标题为 "Games"
        // 如果只有一个有值，则为 "PlatformName Games" 或 "GenreName Games"
        // 如果都有值，则为 "PlatformName GenreName Games"
        ```
        字幕中的实现更为直接：`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`，如果某部分为 `null`，`?.name` 会返回 `undefined`，在模板字符串中会转换为空字符串。
    - 将生成的 `headingText` 作为 `<Heading>` 组件的子内容渲染。
3. **集成到 `App.tsx`**：
    - 将新创建的 `GameHeading` 组件放置在 `App.tsx` 的主内容区 (`area="main"`) 中，通常位于所有筛选器/排序器组件（如包裹 `PlatformSelector` 和 `SortSelector` 的 `Flex` 或 `HStack`）的上方，但在 `GameGrid` 之上。
    - 将 `App` 组件中管理的 `gameQuery` 对象作为 prop 传递给 `GameHeading` 组件。
4. **样式与布局调整**：
    - **`GameHeading` 组件内部**：
        - 为 `<Heading>` 组件设置 `marginY` prop (例如 `marginY={5}`) 来调整其与上下方元素的垂直间距。
        - 设置 `fontSize` prop (例如 `fontSize='5xl'`，这是一个 Chakra UI 预设的较大字体尺寸) 来使标题更醒目。
    - **`App.tsx` 布局对齐**：
        - **问题**：`GameHeading` 和下方的筛选/排序器组合（`Flex` 或 `HStack`）可能与更下方的游戏卡片网格 (`GameGrid`) 的左侧边缘不对齐，因为它们可能没有统一的左侧内边距或边距。
        - **解决方案**：用一个 Chakra UI 的 `<Box>` 组件将 `GameHeading` 和包含筛选/排序器的 `Flex` (或 `HStack`) 组件一起包裹起来。然后，将之前可能单独应用于筛选/排序器组合的 `paddingLeft` (或其他左侧对齐样式) 应用到这个新的父级 `<Box>` 上。这样可以确保标题和其下方的控件组作为一个整体，与页面的主要内容区域保持一致的左侧对齐。

**代码示例**

1. 创建 `GameHeading.tsx` (在 `src/components/GameHeading.tsx`)

    TypeScript

    ```TypeScript
    import { Heading } from '@chakra-ui/react';
    import { GameQuery } from '../App'; // 或从 entities 导入

    interface Props {
      gameQuery: GameQuery;
    }

    const GameHeading = ({ gameQuery }: Props) => {
      // 构建动态标题文本
      const platformName = gameQuery.platform?.name || '';
      const genreName = gameQuery.genre?.name || '';
      // trim() 用于移除首尾可能的多余空格，确保 " Games" 不会单独显示
      const heading = `${platformName} ${genreName} Games`.trim();

      return (
        // 使用 as="h1" 指定语义化标签，调整字号和外边距
        <Heading as="h1" marginY={5} fontSize="5xl">
          {heading}
        </Heading>
      );
    };

    export default GameHeading;
    ```

2. 在 `App.tsx` 中集成 `GameHeading` 并调整布局

    TypeScript

    ```TypeScript
    // In src/App.tsx
    import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'; // 1. 导入 Box
    // ... (other imports, GameQuery interface, useState for gameQuery)
    import GameHeading from './components/GameHeading'; // 2. 导入 GameHeading
    import PlatformSelector from './components/PlatformSelector';
    import SortSelector from './components/SortSelector';
    import GameGrid from './components/GameGrid';

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ...templateAreas, templateColumns... */ >
          {/* ... NavBar ... */}
          {/* ... GenreList (in aside) ... */}
          <GridItem area="main">
            {/* 3. 用 Box 包裹 GameHeading 和 Flex(选择器组)，并统一应用 paddingLeft */}
            <Box paddingLeft={2}> {/* 字幕中 paddingLeft={2} 应用在此 */}
              <GameHeading gameQuery={gameQuery} /> {/* 4. 添加 GameHeading 并传递 gameQuery */}
              <Flex marginBottom={5}> {/* 原 HStack/Flex 的 marginBottom 移到此 */}
                <Box marginRight={5}>
                  <PlatformSelector
                    selectedPlatform={gameQuery.platform}
                    onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                  />
                </Box>
                <SortSelector
                  currentSortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                />
              </Flex>
            </Box>
            {/* GameGrid 不应包含在具有 paddingLeft 的 Box 内，以保持其内容宽度，除非设计如此 */}
            {/* 通常 GameGrid 与 Box(Heading + Selectors) 同级，共享 GridItem[area="main"] 的布局约束 */}
            {/* 如果 GameGrid 也需要同样的 paddingLeft，则应在 GameGrid 的父容器或自身设置 */}
            {/* 字幕的意图似乎是 GameHeading 和 Selectors 作为一个块，它们有 paddingLeft。GameGrid 紧随其后。 */}
            {/* 为了准确反映字幕，GameGrid 应该在 Box 外面，但都在同一个 GridItem area="main" 内*/}
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    // 一个更符合字幕对齐的结构可能是：
    // <GridItem area="main">
    //   <Box paddingLeft={2}>
    //     <GameHeading gameQuery={gameQuery} />
    //     <Flex marginBottom={5}>...</Flex>
    //   </Box>
    //   <Box paddingLeft={2}> {/* 如果GameGrid也需要相同的padding */}
    //      <GameGrid gameQuery={gameQuery} />
    //   </Box>
    // </GridItem>
    // 或者，如果整个 main区域都需要paddingLeft，直接在GridItem area="main"上设置
    // <GridItem area="main" paddingLeft={2}>
    //    <GameHeading gameQuery={gameQuery} />
    //    <Flex marginBottom={5}>...</Flex>
    //    <GameGrid gameQuery={gameQuery} />
    // </GridItem>
    // 字幕最终是将 paddingLeft={2} 应用在包含 GameHeading 和 Flex(selectors) 的 Box 上。GameGrid 在此 Box 外部。
    // 所以原代码中的结构是正确的。
    export default App;
    ```

---

## 33. UI 优化：美化类型列表显示

> 简述：本节致力于对侧边栏中展示的游戏类型（Genres）列表进行一系列视觉和布局上的优化，以提升其可读性和整体美感。主要改进包括：解决当类型名称过长时文本可能与类型图片重叠或显示不全的问题；确保类型图片能以正确的宽高比优雅地填充其固定大小的容器；并在类型列表的顶部添加一个清晰的“Genres”标题。

**知识树**

1. **文本溢出与对齐处理 (`GenreList.tsx`)**：
    - **问题**：当游戏类型名称（`genre.name`）较长时，如果其容器 `<Button>`（设置为 `variant="link"`）不允许文本换行，可能会导致文本溢出容器、与旁边的类型图片重叠，或者被截断。
    - **解决方案**：
        - 为渲染类型名称的 `<Button>` 组件设置 `whiteSpace="normal"` CSS 属性。这将覆盖按钮默认的 `white-space: nowrap` 行为，允许文本在必要时自动换行。
        - 同时，为了使换行后的文本保持良好的对齐，设置 `textAlign="left"`，确保文本从左侧开始排列，而不是默认的居中对齐（某些按钮样式可能导致）。
2. **类型图片宽高比与填充 (`GenreList.tsx`)**：
    - **问题**：为类型图片 (`<Image>`) 设置了固定的 `boxSize`（例如 `"32px"`) 后，如果原始图片的宽高比与此方形容器不匹配，图片可能会被不成比例地拉伸或压缩，导致视觉效果不佳。
    - **解决方案**：为 `<Image>` 组件添加 `objectFit="cover"` CSS 属性。
        - `object-fit: cover` 的效果是：图片会在保持其自身固有宽高比的前提下，被缩放至足以完全覆盖其容器的尺寸。如果图片的宽高比与容器不同，那么图片的一部分可能会被裁剪掉，以确保容器被填满且图片不失真。
3. **添加列表标题 (`GenreList.tsx`)**：
    - **目的**：在类型列表的顶部增加一个明确的标题，告知用户这部分内容是什么。
    - **实现**：
        - 在 `<List>` 组件（用于渲染类型条目）之前，添加一个 Chakra UI 的 `<Heading>` 组件。
        - 设置 `<Heading>` 的文本内容为 "Genres"。
    - **JSX 结构**：由于 `<Heading>` 和 `<List>` 是同级返回的多个 JSX 元素，它们需要被一个共同的父元素包裹。可以使用 React 的 Fragment (`<React.Fragment>...</React.Fragment>` 或其简写语法 `<>...</>`)来实现。
4. **标题样式调整 (`GenreList.tsx`)**：
    - 为新添加的 "Genres" `<Heading>` 组件设置合适的样式：
        - `fontSize`: 例如 `"2xl"` (Chakra UI 预设的较大字号)。
        - `marginBottom`: 例如 `3` 或 `4` (Chakra UI 主题的 spacing 单位)，以在标题和下方的类型列表之间增加一些垂直间距。

**代码示例**

1. 在 `GenreList.tsx` 中进行 UI 优化

    TypeScript

    ```TypeScript
    import {
      List, ListItem, HStack, Image, Text, Button, Spinner, Heading, VStack // 或者 Fragment <>
    } from '@chakra-ui/react'; // 1. 导入 Heading (如果用VStack，也导入)
    import useGenres from '../hooks/useGenres';
    import { Genre } from '../entities';
    import getCroppedImageUrl from '../services/image-url';

    interface Props {
      onSelectGenre: (genre: Genre) => void;
      selectedGenre: Genre | null;
    }

    const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null;
      if (isLoading) return <Spinner />;

      return (
        // 2. 使用 Fragment 或 VStack 包裹 Heading 和 List
        <>
          {/* 3. 添加列表标题 */}
          <Heading fontSize="2xl" marginBottom={3}>
            Genres
          </Heading>
          <List>
            {genres.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover" // 4. 设置 objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                  />
                  <Button
                    whiteSpace="normal" // 5. 允许文本换行
                    textAlign="left"    // 6. 文本左对齐
                    variant="link"
                    fontSize="lg"
                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                    onClick={() => onSelectGenre(genre)}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </>
      );
    };

    export default GenreList;
    ```

---

## 34. UI 优化：调整游戏卡片布局与间距

> 简述：本节主要对游戏卡片 (`GameCard`) 内部元素的排列顺序以及游戏卡片网格 (`GameGrid`) 中卡片之间的间距进行微调。目的是优化信息层级，使得平台图标和评分等次要信息先于游戏标题展示，并调整卡片间距和导航栏内边距，以期达到更佳的整体页面视觉平衡和用户浏览舒适度。

**知识树**

1. **游戏卡片内部元素顺序调整 (`GameCard.tsx`)**：
    - **目的**：改变信息展示的优先级或视觉流。将平台图标列表 (`PlatformIconList`) 和媒体评分 (`CriticScore`) 这类元信息显示在游戏主标题 (`Heading` - 即游戏名称) 的上方。
    - **实现**：在 `GameCard.tsx` 的 `CardBody` 组件内部，调整 JSX 元素的排列顺序，将包含 `PlatformIconList` 和 `CriticScore` 的 `<HStack>` 组件移动到渲染游戏名称的 `<Heading>` 组件之前。
    - **间距调整**：为这个包含图标和评分的 `<HStack>` 组件设置 `marginBottom` prop (例如 `marginBottom={3}`), 以在其与下方的游戏标题之间创建适当的垂直间距。
2. **游戏卡片网格间距调整 (`GameGrid.tsx`)**：
    - **目的**：改善游戏卡片在网格布局中的视觉分隔，避免卡片过于密集。
    - **实现**：修改 `GameGrid.tsx` 中 `<SimpleGrid>` 组件的 `spacing` prop 的值。字幕中演示了将此值从之前可能设置的较小值（如 `3`）增加到一个较大的值（如 `6`），以增大卡片之间的水平和垂直间距。
3. **导航栏内边距调整 (`NavBar.tsx`)**：

    - **目的**：微调导航栏 (`NavBar`) 内部内容与导航栏边缘的距离，可能会使导航栏看起来更紧凑或根据整体设计调整其视觉平衡。
    - **实现**：修改 `NavBar.tsx` 中根 `<HStack>` 组件的 `padding` (或 `paddingX`, `paddingY`) prop 的值。字幕中演示了将 `padding` 值从 `"10px"` 减小到 `"6px"` (或对应的主题 spacing 单位)。

**代码示例**

2. 调整 GameCard.tsx 内部元素顺序和间距

    ```tsx

    // In src/components/GameCard.tsx

    import { Card, CardBody, Hea2ding, Image, HStack } from '@chakra-ui/react';

    import PlatformIconList from '3./PlatformIconList';

    import CriticScore from './CriticScore';

    import getCroppedImageUrl from '../services/image-url';

    import { Game } from '../entities';

    // import Emoji from './Emoji'; // Emoji 组件在下一节添加

    interface Props {

    game: Game;

    }

    const GameCard = ({ game }: Props) => {

    return (

    <Card /* borderRadius, overflow from GameCardContainer / >

    <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />

    <CardBody>

    {/ 1. HStack (包含图标和评分) 移到 Heading 上方 /}

    <HStack justifyContent="space-between" marginBottom={3}> {/ 2. 设置 marginBottom /}

    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />

    <CriticScore score={game.metacritic} />

    </HStack>

    {/ 游戏名称 Heading 现在在下方 /}

    <Heading fontSize="2xl">{game.name} {/ <Emoji rating={game.rating_top} /> */}</Heading>

    </CardBody>

    </Card>

    );

    };

    export default GameCard;
    ```

3. 调整 `GameGrid.tsx` 中 `SimpleGrid` 的间距

    ```TypeScript
    // In src/components/GameGrid.tsx
    import { SimpleGrid, Text } from '@chakra-ui/react';
    // ... (other imports: useGames, GameCardContainer, GameCard, GameCardSkeleton)

    const GameGrid = ({ gameQuery }: Props) => { // Props 假设已更新为 gameQuery
      const { data: games, error, isLoading } = useGames(gameQuery);
      const skeletons = [/* ... */];

      if (error) return <Text>{error}</Text>;

      return (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={6} // 1. 调整 spacing 值，例如从 3 改为 6
        >
          {/* ... (loading skeletons and game cards rendering logic) ... */}
        </SimpleGrid>
      );
    };
    // ...
    ```

4. 调整 `NavBar.tsx` 的内边距

    TypeScript

    ```TypeScript
    // In src/components/NavBar.tsx
    import { HStack, Image } from '@chakra-ui/react';
    // ... (other imports: logo, ColorModeSwitch, SearchInput)

    interface Props {
      onSearch: (searchText: string) => void;
    }

    const NavBar = ({ onSearch }: Props) => {
      return (
        // 1. 调整 padding 值，例如从 "10px" 改为 "6px" (或对应主题单位)
        <HStack padding="6px">
          <Image src={logo} boxSize="60px" />
          <SearchInput onSearch={onSearch} />
          <ColorModeSwitch />
        </HStack>
      );
    };

    export default NavBar;
    ```

---

## 35. UI 趣味性：为游戏卡片添加评分 Emoji

> 简述：本节通过在游戏卡片上根据游戏的整数评分 (`rating_top`) 显示不同的 Emoji 表情图片，为用户评价提供一种更生动、有趣的视觉反馈。这涉及到更新`Game`数据接口以包含`rating_top`属性，准备 Emoji 图片资源，创建一个新的`Emoji`组件来封装评分到 Emoji 图片的映射逻辑和显示，并根据不同 Emoji 动态调整其显示大小以求视觉统一。

**知识树**

1. **`Game` 接口更新**：
    - 在 `Game` 接口 (通常在 `src/entities.ts`) 中添加 `rating_top: number` 属性。这个属性代表 API 返回的一个 1 到 5 的整数评分。
    - 移除或忽略之前可能存在的 `rating` (浮点数) 属性，因为本节使用的是 `rating_top`。
2. **Emoji 图片资源准备**：
    - 将课程提供的三种 Emoji 图片（例如 `bulls-eye.webp` 代表高分, `thumbs-up.webp` 代表中高分, `meh.webp` 代表一般）添加到项目的 `src/assets` 目录下。
3. **创建 `Emoji.tsx` 组件 (在 `src/components`)**：
    - **Props 定义**：接收一个 `rating: number` 作为属性，这个值即为 `game.rating_top`。
    - **条件渲染**：如果传入的 `rating` 小于 3，则组件不渲染任何内容 (返回 `null`)，表示不为低分游戏显示 Emoji。
    - **Emoji 图片映射 (`emojiMap`)**：
        - 在组件内部，首先通过 `import` 语句导入之前添加到 `assets` 目录的各个 Emoji 图片模块。
        - 定义一个名为 `emojiMap` 的对象。
        - 该对象的键 (key) 是评分数字 (例如 `3`, `4`, `5`)。
        - 每个键对应的值是一个对象，此对象包含了用于渲染 Chakra UI `<Image>` 组件所需的属性，至少包括：
            - `src: string`：对应导入的 Emoji 图片模块变量 (其值是图片的路径或数据 URI)。
            - `alt: string`：图片的替代文本，用于提高可访问性 (e.g., "meh", "recommended", "exceptional")。
            - `boxSize?: string`：(可选，但本节中使用) 为不同 Emoji 动态设置不同的 `boxSize`，以使其在视觉上大小更协调。例如，靶心(bulls-eye)图标可能比其他图标在视觉上显得小，需要更大的 `boxSize`。
        - **TypeScript 类型注解 (Index Signature)**：为 `emojiMap` 对象添加索引签名，例如：
          TypeScript
            ```
            interface EmojiProps { src: string; alt: string; boxSize?: string; }
            const emojiMap: { [key: number]: EmojiProps } = { /* ... */ };
            ```
            或者，如字幕所示，将值的类型注解为 Chakra UI 的 `ImageProps` (从 `@chakra-ui/react` 导入)，这是一个更宽泛但包含了 `src`, `alt`, `boxSize` 等属性的类型。 `const emojiMap: { [key: number]: ImageProps } = { /* ... */ };`
    - **UI 实现**：返回一个 Chakra UI 的 `<Image>` 组件。
        - 使用对象扩展运算符 (`...`) 将从 `emojiMap[rating]` 中查找到的包含 `src`, `alt`, `boxSize` 等属性的对象直接应用到 `<Image>` 组件上：`<Image {...emojiMap[rating]} />`。
        - 为 `<Image>` 组件设置额外的样式，如 `marginTop`，以调整 Emoji 与其邻近元素（如游戏标题）的间距。
4. **集成到 `GameCard.tsx`**：
    - 在 `GameCard.tsx` 中，导入新创建的 `Emoji` 组件。
    - 在渲染游戏标题 (`<Heading>`) 的旁边（或之后，根据设计），添加 `<Emoji />` 组件实例。
    - 将当前游戏的 `game.rating_top` 值作为 `rating` prop 传递给 `<Emoji />` 组件。

**代码示例**

1. 更新 `Game` 接口 (在 `src/entities.ts`)

    TypeScript

    ```TypeScript
    export interface Game {
      // ...其他属性
      rating_top: number; // 1. 添加 rating_top 属性
    }
    ```

2. 创建 `Emoji.tsx` (在 `src/components/Emoji.tsx`)

    TypeScript

    ```TypeScript
    import { Image, ImageProps } from '@chakra-ui/react'; // 1. 导入 ImageProps
    import bullsEye from '../assets/bulls-eye.webp'; // 2. 导入Emoji图片
    import thumbsUp from '../assets/thumbs-up.webp';
    import meh from '../assets/meh.webp';

    interface Props {
      rating: number;
    }

    const Emoji = ({ rating }: Props) => {
      if (rating < 3) return null; // 3. 低于3分不显示Emoji

      // 4. 定义Emoji映射表
      const emojiMap: { [key: number]: ImageProps } = { // 使用 ImageProps 作为值的类型
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' }, // 靶心用稍大尺寸
      };

      // 5. 返回 Image 组件，并展开 emojiMap 中的属性
      return <Image {...emojiMap[rating]} marginTop={1} />; // 添加 marginTop 调整间距
    };

    export default Emoji;
    ```

3. 在 `GameCard.tsx` 中集成 `Emoji` 组件

    TypeScript

    ```TypeScript
    // In src/components/GameCard.tsx
    // ... (imports for Card, CardBody, Heading, Image, HStack, PlatformIconList, CriticScore)
    import Emoji from './Emoji'; // 1. 导入 Emoji 组件
    import { Game } from '../entities';

    interface Props {
      game: Game; // Game 接口已更新包含 rating_top
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          <Image src={getCroppedImageUrl(game.background_image)} /* ... */ />
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2xl">
              {game.name}
              <Emoji rating={game.rating_top} /> {/* 2. 添加 Emoji 组件并传递 rating_top */}
            </Heading>
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

---

## 36. 性能优化：打包静态类型数据

> 简述：本节介绍一种通过将相对稳定、不常变更的游戏类型（Genres）数据直接作为静态资源打包到应用中，来优化页面初始加载体验和减少不必要 API 请求的策略。通过这种方式，类型列表可以在应用加载时几乎瞬时可用，无需等待网络请求返回，从而移除了相关的加载指示器（Spinner），并提升了用户感知的性能。

**知识树**

1. **优化动机与识别静态数据**：
    - **用户体验**：避免因多部分内容（游戏列表、类型列表等）同时动态加载而导致的加载指示器过多，使用户视线在页面上“跳跃”。
    - **数据特性**：游戏类型（Genres）列表这类数据通常变化频率很低，可以被视为静态或半静态数据。
2. **获取并存储静态数据**：
    - **数据来源**：通过浏览器开发者工具的“Network”标签页，找到之前获取游戏类型列表 (`/genres` 端点) 的 API 请求。
    - **复制数据**：从该请求的响应体 (Response) 中，复制 `results` 数组的值。这通常是一个包含多个类型对象的 JSON 数组。
    - **创建数据文件**：在项目 `src` 目录下新建一个 `data` 文件夹，并在其中创建一个新的 TypeScript 文件，例如 `genres.ts`。
    - **导出数据**：在 `genres.ts` 文件中，将复制的 JSON 数组（或稍作整理的 TypeScript 对象数组）通过 `export default` 语句导出。
      TypeScript
        ```TypeScript
        // src/data/genres.ts
        export default [
          { "id": 4, "name": "Action", /* ...other properties... */ },
          { "id": 51, "name": "Indie", /* ... */ },
          // ... (所有类型数据)
        ];
        ```
3. **修改 `useGenres.ts` Hook 以使用静态数据**：
    - **移除 API 调用**：删除 `useGenres` Hook 中原有的 `useData` 调用以及所有与 API 请求相关的逻辑（如 `apiClient`、`useEffect`、`isLoading`、`error` 状态管理、`AbortController` 等）。
    - **导入静态数据**：在 `useGenres.ts` 文件顶部，`import genresData from '../data/genres';`。
    - **返回静态数据**：修改 `useGenres` Hook，使其直接返回一个包含以下结构的对象：
        - `data: genresData` (导入的静态类型数组)
        - `isLoading: false` (因为数据是静态的，无需加载)
        - `error: null` (因为没有网络请求，不会产生获取错误)
    - **保持接口一致性**：即使数据来源改变，`useGenres` Hook 返回对象的结构（包含 `data`, `isLoading`, `error` 属性）保持不变。这样做是为了最小化此更改对该 Hook 的消费者组件（如 `GenreList.tsx`）的影响，即消费者组件不需要修改其解构和使用 Hook 返回值的方式。
4. **`GenreList.tsx` 组件的潜在简化**：
    - 由于 `useGenres` Hook 现在总是返回 `isLoading: false` 和 `error: null`，理论上 `GenreList` 组件中用于处理加载状态（显示 Spinner）和错误状态（显示错误信息或返回`null`）的条件渲染逻辑可以被移除。
    - **讲师建议**：暂时保留这些条件渲染逻辑。这样做的好处是，如果未来决定改回从 API 动态获取类型数据，只需修改 `useGenres` Hook 的内部实现，而 `GenreList` 组件无需任何改动，保持了代码的灵活性和向后兼容性。
5. **可扩展性思考 (留作练习)**：
    - 同样的技术可以应用于其他相对静态的数据列表，例如游戏平台（Platforms）列表。讲师建议学员可以自行尝试将平台列表也改为静态数据加载。

**代码示例**

1. 创建静态数据文件 `src/data/genres.ts`

    TypeScript

    ```TypeScript
    // src/data/genres.ts
    // (内容为从API /genres 响应的 results 数组复制并格式化的数据)
    // 确保每个对象符合之前定义的 Genre 接口的形状
    export default [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174202, // API返回的其他属性也一并保留
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 51,
        "name": "Indie",
        "slug": "indie",
        "games_count": 55350,
        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
      },
      // ... (其他所有类型对象)
    ];
    ```

2. 修改 `useGenres.ts` Hook

    TypeScript

    ```TypeScript
    // src/hooks/useGenres.ts
    // 1. 移除 useData, apiClient, useEffect, useState, CanceledError 等API相关导入
    import genresData from '../data/genres'; // 2. 导入静态类型数据
    // import { Genre } from '../entities'; // Genre 接口定义可能在 entities.ts

    // Genre 接口的定义（如果之前在这里）现在可以只从 entities.ts 导入，
    // 或者如果 genresData 已经符合 Genre[] 类型，则直接使用。
    // 确保 genresData 的结构与 Genre 接口匹配。

    const useGenres = () => {
      // 3. 直接返回包含静态数据的对象，并模拟原Hook的返回结构
      return { data: genresData, isLoading: false, error: null };
    };

    export default useGenres;
    ```

3. `GenreList.tsx` (可选简化，但讲师建议保留原逻辑)

    TypeScript

    ```TypeScript
    // src/components/GenreList.tsx
    // ... (imports)

    const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres(); // Hook调用不变

      // 以下 isLoading 和 error 的判断逻辑理论上可以移除，
      // 因为它们现在总是 false 和 null。但保留它们可以增加未来改动的灵活性。
      if (error) return null;
      if (isLoading) return <Spinner />; // 这个Spinner将不再显示

      return (
        <>
          <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
          <List>
            {/* ... (map genres to ListItems as before) ... */}
          </List>
        </>
      );
    };

    // ...
    ```

---

## 37. UI 定制：自定义 Chakra 主题颜色

> 简述：本节介绍如何通过修改 Chakra UI 的默认主题配置，来进一步定制应用的视觉风格，特别是将应用在暗色模式下使用的灰色调（grays）替换为一套自定义的、更深更具特定风格（例如模仿 ROG 网站）的灰色系。核心操作是在项目的主题配置文件 (`theme.ts`) 中，扩展 `colors` 对象，并为 `gray` 属性提供一个全新的、包含多个色阶（shade）的颜色调色板。

**知识树**

1. **Chakra UI 主题定制能力回顾**：
    - `extendTheme` 函数：用于在 `theme.ts` 文件中扩展或覆盖 Chakra UI 的默认主题设置。
    - 可定制范围：不仅仅是颜色模式，还包括颜色调色板、字体、间距单位、组件的默认 props 和样式变体等。
2. **颜色系统与调色板 (Color Palette)**：
    - Chakra UI 的颜色通常以调色板的形式组织，每种基础颜色（如 `gray`, `blue`, `green`）都包含一系列从浅到深的色阶（shades），这些色阶通常用数字（如 `50`, `100`, `200`, ..., `900`）来标识。例如，`gray.50` 是最浅的灰色，`gray.900` 是最深的灰色。
    - **一致性原则**：当需要修改一种基础颜色（如灰色）时，推荐替换其整个调色板（即所有相关的色阶），以确保颜色之间的视觉和谐与过渡平滑，而不是只修改个别色阶。
3. **获取/生成自定义调色板**：
    - **工具辅助**：Chakra UI 官方文档或其他设计资源可能会推荐一些在线调色板生成工具（字幕中提到如 `Themera`, `Smart Swatch`）。这些工具可以帮助设计师或开发者根据一个或几个基准颜色生成一套完整且和谐的色阶。
    - **预设方案**：讲师在录制视频前已经准备好了一套自定义的灰色调色板，其颜色值旨在模仿特定网站（如 ROG）的视觉风格。
4. **修改 `theme.ts` 文件以应用自定义颜色**：

    - 在传递给 `extendTheme` 的配置对象中，新增（或修改已有的）`colors` 属性。
    - `colors` 属性本身也是一个对象。
    - 在 `colors` 对象内部，添加一个名为 `gray` 的属性（如果想覆盖默认的灰色系）。`gray` 属性的值是另一个对象，这个对象就是新的灰色调色板。
    - 新的灰色调色板对象包含多个键值对，键是色阶数字（如 `50`, `100`, ..., `900`），值是对应的十六进制颜色代码字符串（如 `'#f9f9f9'`, `'#1a202c'`）。
      TypeScript

        ```TypeScript
        // In src/theme.ts
        import { extendTheme, ThemeConfig } from '@chakra-ui/react';

        const config: ThemeConfig = {
          initialColorMode: 'dark',
          useSystemColorMode: false,
        };

        const theme = extendTheme({
          config, // 保留之前的颜色模式配置
          colors: { // 1. 添加/扩展 colors 对象
            gray: {   // 2. 定义新的 gray 调色板
              50: '#F7FAFC', // 示例：替换为你想要的颜色值
              100: '#EDF2F7',
              200: '#E2E8F0',
              300: '#CBD5E0',
              400: '#A0AEC0',
              500: '#718096', // 中间调
              600: '#4A5568',
              700: '#2D3748',
              800: '#1A202C', // 较深的灰色，常用于暗模式背景
              900: '#171923', // 最深的灰色
              // (确保提供从50到900的完整或所需色阶)
              // 字幕中提供了讲师预设的一套深灰色值
            },
            // 可以按需添加或覆盖其他颜色，如 brand.primary, secondary 等
          },
        });

        export default theme;
        ```

5. **全局效果**：
    - 一旦自定义主题被应用到 `ChakraProvider`，应用中所有通过 Chakra UI 主题系统使用灰色系的地方（例如，组件的 `colorScheme="gray"`，或直接使用 `color="gray.500"`，`bg="gray.800"` 等）都将自动采用这套新的自定义灰色调。
    - 这使得在整个应用中实现统 4 一且特定的视觉风格（如更深的暗色模式背景）变得简单。

**代码示例**

1. 修改 `src/theme.ts` 以自定义灰色调色板

    TypeScript

    ```TypeScript
    import { extendTheme, ThemeConfig } from '@chakra-ui/react';

    const config: ThemeConfig = {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    };

    const customColors = {
      gray: { // 讲师提供的特定深灰色调，用于模仿ROG网站风格
        // 注意：以下颜色值为示例，应替换为字幕中讲师提供的确切十六进制值
        // 通常，暗模式的背景会选用较深的灰色，文本则用较浅的灰色或白色
        50: '#f0f0f0',   // 示例浅灰 (可能用于亮模式的边框或次要元素)
        100: '#dbdbdb',
        200: '#c2c2c2',
        300: '#a8a8a8',
        400: '#8f8f8f',
        500: '#757575',  // 中性灰
        600: '#5c5c5c',
        700: '#424242',  // 暗模式下的次要背景或元素
        800: '#292929',  // 暗模式下的主要背景
        900: '#121212',  // 非常深的灰色，接近黑色
        // 字幕中实际提供的值（按顺序，假设是50到900）：
        // 50: '#f9f9f9', (这是chakra默认浅灰，讲师可能只改深色部分)
        // ...
        // 800: '#1A202C', (这是chakra默认gray.800)
        // 讲师实际提供的用于深色模式的灰色调（示例性，非字幕原话，但表达意图）：
        // gray: {
        //   '50': '#5F5F5F',
        //   '100': '#555555',
        //   '200': '#4B4B4B',
        //   '300': '#414141',
        //   '400': '#373737',
        //   '500': '#2D2D2D', // 中间色调可能用作边框或区分
        //   '600': '#232323',
        //   '700': '#1F1F1F', // 比背景稍浅的组件色
        //   '800': '#1B1B1B', // 主要背景色
        //   '900': '#101010', // 更深的背景或阴影
        // }
        // 确切值应参考字幕中讲师在Smart Swatch工具中选定并粘贴到代码中的值。
        // 假设讲师提供的深色灰色调是（根据字幕中提到的 `1a202c` 等推断并补全）：
        gray: {
           50: '#F7FAFC', // 保持 Chakra 默认的浅色端，暗模式主要用深色
           100: '#EDF2F7',
           200: '#E2E8F0',
           300: '#CBD5E0',
           400: '#A0AEC0',
           500: '#718096', // Chakra 默认的 gray.500
           600: '#4A5568',
           700: '#2D3748', // 常用作暗模式下的卡片背景或次级背景
           800: '#1A202C', // 常用作暗模式下的主背景 (darker shade of gray)
           900: '#171923', // 更深的背景或边框
         }
      },
      // 可以继续添加其他自定义颜色，如 'brand': { 100: ..., 900: ... }
    };

    const theme = extendTheme({
      config,
      colors: customColors, // 应用自定义颜色
    });

    export default theme;
    ```

    - **重要**：上述 `gray` 调色板中的十六进制颜色值是基于 Chakra UI 默认值和讲师意图的示例性填充。学习者应使用字幕中讲师实际从 `Smart Swatch` 工具复制并粘贴到 `theme.ts` 文件中的确切颜色代码。

---

## 38. 代码优化：简化 GameGrid 渲染逻辑

> 简述：本节对 `GameGrid` 组件的渲染逻辑进行了一次小幅度的代码重构。原先的实现中，错误信息（`<Text>{error}</Text>`）和游戏数据网格（`<SimpleGrid>...</SimpleGrid>`）是作为同级元素被包裹在一个 React Fragment (`<>...</>`) 中，并通过条件判断（`{error && ...}`）来决定是否显示错误信息。通过采用“提前返回”（Early Return）或称为“卫语句”（Guard Clause）的模式，如果在数据获取过程中发生错误，组件会直接返回错误文本的 UI，从而使得在没有错误的情况下，返回游戏网格的逻辑更直接、代码结构更清晰，并移除了不必要的 Fragment 包裹。

**知识树**

1. **原始渲染逻辑分析 (`GameGrid.tsx`)**：
    - 使用 React Fragment (`<>...</>`) 包裹两个主要的条件渲染部分：
        1. `{error && <Text>{error}</Text>}`：如果 `error` 状态为真（即有错误信息），则渲染显示错误信息的 `<Text>` 组件。
        2. 主内容区（通常是 `<SimpleGrid>`，包含加载骨架屏或实际游戏卡片的逻辑）：这部分总是在 Fragment 内，其内部可能再有基于 `isLoading` 的条件渲染。
    - 这种结构虽然功能正确，但在 `error` 存在时，Fragment 和其内部的 `SimpleGrid`（即使可能因 `isLoading` 或数据为空而不显示内容）仍然是 JSX 结构的一部分。
2. **重构策略：提前返回 (Early Return / Guard Clause)**：
    - **核心思想**：在函数或组件的渲染逻辑开始时，首先检查是否满足某些“提前退出”的条件（如发生错误）。如果满足，则立即返回对应的 UI（或 `null`），函数不再继续执行后续的主要渲染逻辑。
    - **应用到 `GameGrid`**：
        - 在组件函数的顶部（获取 `error` 状态之后），添加一个判断：`if (error) return <Text color="red.500">{error}</Text>;`
        - 如果 `error` 为真，组件的执行到此结束，只渲染错误信息。
        - 如果 `error` 为假，则代码继续向下执行，渲染正常的游戏网格部分。
3. **重构后的代码结构 (`GameGrid.tsx`)**：

    TypeScript

    ```TypeScript
    // ... (imports, props, hook call to get games, error, isLoading)

    if (error) return <Text color="red.500">{error}</Text>; // 1. 错误处理提前返回

    // 2. 如果没有错误，则继续渲染主要内容 (SimpleGrid)
    //    这里不再需要 React Fragment 包裹
    return (
      <SimpleGrid /* ...props... */ >
        {isLoading && skeletons.map(/* ...render skeletons... */)}
        {!isLoading && games.map(/* ...render game cards... */)}
      </SimpleGrid>
    );
    ```

4. **优点**：

    - **代码清晰度提升**：移除了不必要的 React Fragment 嵌套，使得主要成功路径（渲染 `SimpleGrid`）的 JSX 结构更直接、更扁平。
    - **逻辑关注点分离**：错误处理逻辑被明确地置于组件渲染的开端，使得后续代码可以更专注于正常情况下的 UI 渲染。
    - **可读性增强**：对于阅读代码的人来说，更容易一眼看出在何种条件下会渲染错误，何种条件下会渲染主内容。

**代码示例**

2. 修改 `GameGrid.tsx` 以应用提前返回逻辑

    TypeScript

    ```TypeScript
    // In src/components/GameGrid.tsx
    import { SimpleGrid, Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames';
    import { GameQuery } from '../App'; // or from entities
    import GameCardContainer from './GameCardContainer';
    import GameCardSkeleton from './GameCardSkeleton';
    import GameCard from './GameCard';

    interface Props {
      gameQuery: GameQuery;
    }

    const GameGrid = ({ gameQuery }: Props) => {
      const { data: games, error, isLoading } = useGames(gameQuery);
      const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // 示例骨架数量

      // 1. 如果有错误，则提前返回错误信息UI
      if (error) return <Text color="red.500" paddingX={2}>{error}</Text>; // paddingX={2} 可选，与App内Box对齐

      // 2. 如果没有错误，则渲染游戏网格 (不再需要Fragment)
      return (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // 字幕中 xl 可能有5列
          padding="10px" // 这个padding是SimpleGrid内部的，与App.tsx中Box的paddingLeft={2}不同
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {!isLoading &&
            games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      );
    };

    export default GameGrid;
    ```

    - 注意：`paddingX={2}` 加在 `Text` 组件上是为了让错误信息也大致与内容区的左侧对齐（如果内容区整体有 `paddingLeft={2}`）。 `SimpleGrid` 的 `padding="10px"` 是其自身的内边距，与整体页面布局的 `paddingLeft` 是不同的。

---

## 39. 构建与部署准备：生产环境构建

> 简述：本节主要阐述在将 Web 应用实际部署到服务器之前，进行本地生产环境构建的重要性、步骤和预期结果。通过运行 `npm run build` 命令，可以利用 Vite 和 TypeScript 编译器对项目代码进行优化、打包和类型检查，最终生成一套适合部署的静态资源文件。这个过程有助于在部署前发现并修复潜在的编译错误或类型问题，确保部署质量。

**知识树**

1. **生产环境构建 (Production Build) 的目的**：
    - **代码优化**：对 JavaScript 和 CSS 代码进行压缩 (minification)、混淆 (uglification/mangling)、代码分割 (code splitting)、Tree Shaking (移除未使用代码) 等优化，以减小文件体积，提升加载速度和运行性能。
    - **静态资源生成**：将所有源代码（React 组件、TypeScript、CSS、图片等）转换为浏览器可以直接理解和执行的静态 HTML、CSS 和 JavaScript 文件，以及其他优化后的资源。
    - **错误检查**：在构建过程中执行严格的类型检查（通过 TypeScript 编译器 `tsc`）和代码规范检查（如果配置了 ESLint 等），提前捕获潜在的运行时错误。
    - **部署准备**：生成的构建产物是最终部署到 Web 服务器上的内容。
2. **执行构建命令**：
    - **命令**：在项目的根目录下，通过终端运行 `npm run build`。
    - **`package.json` 配置**：这个命令实际上是执行了 `package.json` 文件中 `scripts` 部分定义的 `build` 脚本。对于 Vite 项目，该脚本通常是 `tsc && vite build`（先进行 TypeScript 类型检查，然后执行 Vite 的构建流程）或直接是 `vite build`（Vite 内部也会调用 tsc 或 esbuild 进行转换和检查）。
3. **构建过程与输出**：
    - **TypeScript 编译**：`tsc`会检查所有 `.ts` 和 `.tsx` 文件是否存在类型错误。如果存在类型错误，构建过程通常会失败并显示错误信息。
    - **Vite 构建**：Vite 会处理模块打包、代码优化、资源处理等任务。
    - **输出目录**：构建成功后，所有优化过的静态资源会被输出到项目根目录下的一个特定文件夹中，对于 Vite 项目，这个文件夹通常是 `dist` (意为 "distributable"，可分发的)。
    - **`dist` 文件夹内容**：包含 `index.html` (应用的入口 HTML 文件)、打包和分割后的 JavaScript 文件 (通常带有哈希值以利于缓存控制)、CSS 文件、以及项目中引用的图片等静态资源。
4. **处理构建警告与错误**：
    - **编译时错误 (Compile-time Errors)**：如果 TypeScript 代码存在类型不匹配、语法错误等问题，`tsc`会报告错误，构建将失败。这是 TypeScript 强类型系统带来的好处，可以在部署前捕获很多潜在 bug。
    - **构建警告 (Build Warnings)**：
        - **包体积警告 (Chunk Size Warning)**：Vite (或其底层使用的 Rollup) 可能会在构建完成后报告某些生成的 JavaScript 代码块（chunk）体积过大（例如，超过 500KB）。这提示开发者可能需要进一步优化代码（如代码分割、懒加载、移除大型依赖）以改善应用的初始加载性能。讲师提到这部分内容将在课程的后续部分（包优化）讨论。
        - 其他警告：可能还会有关于 polyfill、依赖项兼容性等其他类型的警告。
5. **VS Code 集成构建任务 (可选)**：
    - **命令面板**：可以通过 VS Code 的命令面板 (在 Mac 上按 `Shift + Command + P`，在 Windows 上按 `Shift + Control + P`) 搜索并执行 "Tasks: Run Build Task"。
    - **选择任务**：在弹出的任务列表中，选择与项目构建相关的任务，通常是 `npm: build`。
    - **快捷键**：VS Code 允许为常用的任务（如构建）配置快捷键（例如，Mac 上的 `Shift + Command + B`）。
    - **集成终端**：执行构建任务时，VS Code 通常会在其集成的终端面板中显示构建过程的输出和结果。

**代码示例**

1. 执行生产构建的命令 (在项目根目录的终端中)

    ```Bash
    npm run build
    ```

2. `package.json` 中典型的 `build` 脚本 (Vite 项目示例)

    ```JSON
    // package.json
    {
      // ...
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build", // 先类型检查，然后Vite构建
        "preview": "vite preview"
        // ...
      },
      // ...
    }
    ```

    - _Note_: 有些 Vite 项目模板可能只用 `vite build`，因为 `vite build` 内部也会处理 TypeScript。使用 `tsc && vite build` 可以更明确地分离类型检查步骤。

---

## 40. 应用部署：使用 Vercel 进行部署

> 简述：本节介绍如何将完成生产构建的 React 应用部署到 Vercel 这一流行的静态站点和 Serverless 函数托管平台，从而使应用能够通过公共 URL 被外部访问。整个过程包括：首先将项目代码推送到 GitHub 仓库；然后安装并使用 Vercel CLI（命令行工具）进行应用的首次部署；最后，将 Vercel 上创建的项目与 GitHub 仓库进行关联，以实现后续代码变更时的自动持续集成和持续部署 (CI/CD)。

**知识树**

1. **选择部署平台 (Vercel)**：
    - **Vercel 特性**：专为现代前端框架（如 React, Next.js, Vue, Svelte, Vite 构建的项目等）优化，提供简单的部署流程、全球 CDN、Serverless 函数支持、自定义域名、HTTPS 等。
    - **备选平台**：Netlify, GitHub Pages, Firebase Hosting, AWS Amplify, Azure Static Web Apps 等。Vite 官方文档 (vitejs.dev/guide/static-deploy.html) 提供了多种平台的部署指南。
2. **代码版本控制与远程托管 (GitHub)**：
    - **前提**：项目代码应已使用 Git 进行版本控制。
    - **创建 GitHub 仓库**：在 GitHub 上为项目创建一个新的（通常是空的）远程仓库 (e.g., `game-hub`)。
    - **关联本地与远程仓库**：
        - `git remote add origin <github_repository_url.git>`：将本地 Git 仓库与新创建的远程 GitHub 仓库建立连接，并将远程仓库命名为 `origin`。
        - `git branch -M main`：(可选，如果本地主分支不是 `main`) 确保本地主分支名为 `main`，以符合 GitHub 的现代默认设置。
        - `git push -u origin main`：将本地 `main` 分支的所有提交推送到远程 `origin` 仓库的 `main` 分支，并设置上游跟踪关系。
3. **Vercel CLI (Command Line Interface) 安装与使用**：
    - **安装**：通过 npm 全局安装 Vercel CLI：
      Bash
        ```
        npm install -g vercel
        ```
        (在 Mac 或 Linux 系统上，如果遇到权限错误，可能需要在命令前加上 `sudo`)。
    - **首次部署**：
        1. 在项目根目录下，运行 `vercel` (或其简写 `vc`) 命令。
        2. **登录 Vercel**：CLI 会提示进行登录。通常可以选择通过 GitHub 账户授权登录，与在 Vercel 网站注册时使用的方式一致。
        3. **项目配置向导**：CLI 会引导完成一系列配置问题：
            - "Set up and deploy “./&lt;project-folder-name>”?" (确认部署当前项目): 通常按 Enter 接受默认 (Yes)。
            - "Which scope do you want to deploy to?" (选择 Vercel 账户/团队): 选择与注册对应的账户。
            - "Link to an existing project?" (是否链接到 Vercel 上已有的项目): 首次部署通常选 No (默认)。
            - "What’s your project’s name?" (设置在 Vercel 上的项目名): 可以接受根据文件夹名生成的默认项目名，或自定义。
            - "In which directory is your code located?" (代码根目录): 通常直接回车接受默认 (`./`)。
            - Vercel 会自动检测项目类型（如 Vite React 应用）并应用合适的构建命令和输出目录设置。
            - "Want to modify these settings?" (是否修改构建设置): 通常默认设置已足够，可选 No (直接部署)。
    - **部署完成**：部署成功后，Vercel CLI 会输出一个或多个公共 URL（如 Production, Staging/Preview URLs），通过这些 URL 即可访问已部署的应用。由于 Vercel 上项目名需唯一，实际 URL 可能会附加一些随机字符（如字幕中的 `-phi`）。
4. **关联 GitHub 仓库以实现 CI/CD (通过 Vercel Dashboard)**：
    - **登录 Vercel Dashboard**：访问 Vercel.com 并用与 CLI 相同的账户登录。
    - **找到项目**：在 Dashboard 中找到刚刚通过 CLI 部署的项目。
    - **连接 Git 仓库**：
        - 在项目设置中，找到 "Connect Git Repository" (或类似) 的选项。
        - 选择 "GitHub" 作为代码托管平台。
        - 授权 Vercel 访问你的 GitHub 账户及所需的仓库权限。
        - 从列出的 GitHub 仓库中，选择与当前 Vercel 项目对应的那个仓库 (e.g., `your-username/game-hub`)。
    - **配置完成**：关联成功后，Vercel 项目即与 GitHub 仓库建立了连接。
5. **CI/CD (持续集成/持续部署) 流程**：
    - **触发条件**：每当向已关联的 GitHub 仓库的指定分支（通常是 `main` 分支，或在 Vercel 项目设置中配置的其他生产分支）执行 `git push` 操作时。
    - **Vercel 自动化流程**：
        1. Vercel 自动检测到代码变更。
        2. 从 GitHub 拉取最新的代码。
        3. 在 Vercel 的构建环境中执行项目的构建命令 (如 `npm run build`)。
        4. 如果构建成功，则将新的构建产物自动部署到生产环境。
        5. 整个过程通常是自动化的，无需手动干预。
6. **验证 CI/CD 效果**：
    - **本地代码修改**：对项目做一些小的、可见的更改（例如，修改 `public/index.html` 文件中的 `<title>` 标签内容）。
    - **Git 提交与推送**：
      Bash
        ```Bash
        git add .
        git commit -m "Update page title"
        git push origin main
        ```
    - **观察 Vercel Dashboard**：可以看到 Vercel 正在处理新的提交，进行构建和部署。
    - **刷新应用 URL**：待 Vercel 部署完成后，刷新之前部署的应用 URL，确认所做的更改已成功上线。

**代码示例**

1. 将本地 Git 仓库推送到新的 GitHub 远程仓库

    Bash

    ```Bash
    # (假设已在GitHub创建了名为 game-hub 的空仓库，其URL为 <repository_url>)
    # 在本地项目根目录执行：
    git remote add origin <repository_url.git>
    git branch -M main
    git push -u origin main
    ```

2. 全局安装 Vercel CLI

    Bash

    ```Bash
    npm install -g vercel
    ```

    或 (如果需要管理员权限):

    Bash

    ```Bash
    sudo npm install -g vercel
    ```

3. 通过 Vercel CLI 部署项目 (在项目根目录执行)

    Bash

    ```Bash
    vercel
    ```

    (然后根据 CLI 的交互式提示进行操作)

4. 验证 CI/CD 的本地 Git 操作示例

    Bash

    ```Bash
    # (在本地项目中做了一些修改后)
    git status                 # 查看修改
    git add .                  # 暂存所有修改
    git commit -m "feat: Update page title for CI/CD test" # 提交更改
    git push origin main       # 推送到GitHub，触发Vercel自动部署
    ```

---

## 🔧 9. 创建自定义 Hook（Creating a Custom Hook for Fetching Games）

### 抽离数据请求逻辑为 Hook (`useGames.ts`)

- 实现请求、错误处理、取消请求：

```tsx
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err.name !== "CanceledError") setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};
```

---

## 🎴 10. 构建游戏卡片组件（Building Game Cards）

### 创建 `GameCard.tsx`

- 显示游戏封面和名称。

```tsx
import { Card, Image, Heading, CardBody } from '@chakra-ui/react';

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
```

### 响应式网格展示

```tsx
<SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6} padding="10px">
  {games.map(game => <GameCard key={game.id} game={game} />)}
</SimpleGrid>
```

## 第 12 节：展示平台图标

> 简述：将游戏平台（PC、PS、Xbox 等）的标识以图标形式展示在游戏卡片上，以提升用户识别体验，并分离逻辑实现至专用组件中。

**知识树**

1. 接口定义与嵌套数据结构解析

    - `parent_platforms` 是一个对象数组，每项都嵌套有 `platform` 对象
    - 需要定义 `Platform` 与 `ParentPlatform` 接口，并加至 `Game` 接口中

2. 平台图标映射

    - 使用 `react-icons` 库引入平台对应图标
    - 使用 `slug` 字段作为映射键构建 `iconMap`

3. 组件解耦设计

    - 提取平台展示为 `PlatformIconList` 组件，传入 `platforms: Platform[]` 属性
    - 利用 `HStack` 横向排列图标

4. TypeScript 类型问题解决

    - 使用 `Record<string, IconType>` 或 `iconMap: {[key: string]: IconType}` 声明 iconMap 类型，解决 TS 编译报错

**代码示例**

```ts
// Platform.ts
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  ...
  parent_platforms: { platform: Platform }[];
}
```

```tsx
// PlatformIconList.tsx
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

return (
  <HStack marginY={2} color="gray.500">
    {platforms.map(platform => (
      <Icon as={iconMap[platform.slug]} key={platform.id} />
    ))}
  </HStack>
);
```

---

## 第 13 节：展示媒体评分徽章

> 简述：将媒体评分（metacritic 分数）以 Badge 徽章形式展示，并根据分数高低显示不同颜色，提高信息可读性。

**知识树**

1. metacritic 字段的引入

    - 添加 `metacritic: number` 到 `Game` 接口

2. `CriticScore` 组件封装

    - 接收 `score: number` 属性，返回 `<Badge>`

3. 动态样式

    - 根据分值判断颜色：
        - > = 75: 绿色
        - 60~74: 黄色
        - < 60: 无色或红色（可拓展）

4. 样式优化

    - 设置圆角 `borderRadius="4px"`
    - 设置 `px`, `fontSize`, `colorScheme`

**代码示例**

```tsx
const color = score >= 75 ? 'green' : score >= 60 ? 'yellow' : '';

return (
  <Badge fontSize="14px" px={2} borderRadius={4} colorScheme={color}>
    {score}
  </Badge>
);
```

---

## 第 14 节：获取优化后的图片链接

> 简述：通过修改图片链接，在 URL 中插入 `/crop/600/400` 以降低图片加载体积，加速页面展示。

**知识树**

1. API 支持的图片裁剪策略

    - 原始图片尺寸大，需裁剪降低网络负担

2. 工具函数封装

    - 创建 `getCroppedImageUrl(url: string): string`
    - 定位并插入裁剪路径 `/crop/600/400` 到 `media/` 后

3. 服务模块化设计

    - `services/image-url.ts` 单独封装逻辑，保持组件清晰

**代码示例**

```ts
export const getCroppedImageUrl = (url: string) => {
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
```

---

## 第 15 节：加载中状态下使用骨架屏优化用户体验

> 简述：在游戏数据未加载完成前，展示骨架屏代替游戏卡片，提升页面响应感知。

**知识树**

1. 骨架屏设计原则

    - 使用 `Skeleton` + `SkeletonText` 模拟实际卡片布局

2. 状态追踪

    - 在数据获取 hook 中添加 `isLoading` 状态
    - fetch 前设为 true，获取完成后设为 false

3. 复用结构

    - 骨架屏和游戏卡片结构保持一致，避免布局跳动

4. 问题与暂存

    - 初期将 `width`, `borderRadius` 写死以保证一致性
    - 后续通过提取 `GameCardContainer` 组件消除重复

**代码示例**

```tsx
{isLoading
  ? skeletons.map((n) => (
      <GameCardContainer key={n}>
        <GameCardSkeleton />
      </GameCardContainer>
    ))
  : data.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCard game={game} />
      </GameCardContainer>
    ))}
```

---

## 第 16 节：样式复用与组件重构

> 简述：将 `GameCard` 和 `GameCardSkeleton` 共有样式抽离为 `GameCardContainer` 组件，减少样式重复，增强一致性。

**知识树**

1. 提取通用容器组件

    - 使用 `Box` 组件封装卡片外层
    - 统一设置 `borderRadius`, `overflow`, `width`, `boxShadow`

2. 使用 `children` 插槽传递内容

    - 支持插入实际卡片与骨架屏

3. JSX 快捷包裹

    - VSCode 快捷操作：wrap with abbreviation

---

## 第 17 节：获取游戏分类数据（Genres）

> 简述：通过新建 `useGenres` hook 请求游戏分类信息，并渲染为基础列表，预备后续的筛选功能实现。

**知识树**

1. 创建 `useGenres` hook

    - 类似 `useGames`，封装 API 调用逻辑，添加取消控制器

2. 定义 `Genre` 接口

    - 包含 `id`, `name`, `image_background`

3. 创建 `GenreList` 组件

    - 使用 `useGenres()` 获取 genre 列表
    - 使用 `<List>` 渲染类别信息

4. UI 渲染简化

    - 初步只渲染 `<li>{genre.name}</li>`

---

## 第 18 节：创建泛型数据获取 Hook（useData）

> 简述：抽象通用数据请求逻辑为 `useData<T>()` 泛型 hook，实现逻辑复用与接口隔离。

**知识树**

1. 使用泛型提升复用性

    - 定义 `useData<T>(endpoint: string)`
    - 使用 `FetchResponse<T>` 作为响应体泛型结构

2. 将通用逻辑抽离

    - 内部仍使用 `axios` 实例发送请求
    - 提供 `data`, `error`, `isLoading` 三状态

3. 解耦业务组件

    - 在 `useGenres` 和 `useGames` 中调用 `useData<T>()`
    - 隐藏 endpoint 与 HTTP 请求逻辑

4. 类型推断

    - 使用 `T` 替代具体实体类型，例如 `Genre`, `Game`

**代码示例**

```ts
interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  ...
  axios.get<FetchResponse<T>>(endpoint)...
}
```

---

## 第 19 节：展示游戏分类

> 简述：渲染分类名称及图片，展示于页面左侧作为可视化筛选项，提升交互与导航性。

**知识树**

1. 使用 Chakra UI List 组件美化展示

    - 使用 `<List>` 代替 `<ul>`，去除默认样式
    - 使用 `HStack` 水平排列图片和文字

2. 图片优化

    - 使用 `getCroppedImageUrl` 获取裁剪后图片
    - 图片大小统一为 `32px`

3. 布局优化

    - 为每个 `ListItem` 设置 `py=2`
    - 文字设置 `fontSize="lg"`
    - 外层容器设置 `px` 保证左右边距一致

4. Layout grid 优化

    - 设置 `templateColumns` 定义侧边栏固定宽度 + 主内容自适应
    - 移除 `GameCardContainer` 中固定宽度，让卡片根据网格自适应宽度

---

## 第 20 节：加载分类数据时使用 Spinner

> 简述：在 Genre 数据加载时使用 Spinner 进行状态提示，同时隐藏错误信息保持 UI 简洁。

**知识树**

1. 加载状态处理

    - 在 `useGenres` 返回值中解构出 `isLoading`
    - 加载时返回 `<Spinner />`

2. 错误处理

    - 若请求失败，隐藏内容（返回 null），避免弹出干扰用户体验

3. 提示组件

    - 使用 `Spinner` 替代 Skeleton，形成差异化处理

**代码示例**

```tsx
if (isLoading) return <Spinner />;
if (error) return null;
```

---

> ✅ 整体建议：第 12~20 节内容已经搭建出“数据展示 + 状态管理 + 用户反馈”三位一体的基础 UI 架构。随着后续交互逻辑添加，可以考虑引入 Zustand 进行状态提升，提升用户筛选体验和全局状态复用。

好的，以下是 **第 27 ～ 30 节** 的整理笔记，继续使用你指定的「教学型 + 阅读型」风格，逻辑清晰，结构完整，代码说明到位。

---

非常好，我将以“教学型 + 阅读型”的风格，使用你设定的笔记模板，尽可能发挥最大算力与思维深度，整理 GameHub 项目的第 21 ～ 30 节内容。由于篇幅限制与结构清晰性，我将逐节独立整理输出，以下是第 **21 ～ 23 节** 的高质量笔记。其余部分将分批输出，请确认格式与内容是否符合预期后我再继续。

---

## 21. 过滤游戏：根据选中类别筛选

> 简述：实现点击某个游戏类别（Genre）后，游戏列表只显示该类别下的游戏。通过“状态提升”+“父组件共享状态”完成组件通信。

**知识树**

1. **状态提升（State Lifting）**

    - 子组件向父组件上报点击事件（使用 `onSelect` 回调）
    - 父组件 App 中维护 `selectedGenre` 状态

2. **共享状态传递**

    - 将 `selectedGenre` 作为 prop 传给 GameGrid 组件
    - GameGrid 调用 `useGames` 时将该值作为参数

3. **通过 Axios Config 配置请求参数**

    - `params: { genres: selectedGenre?.id }`
    - 由 `useGames` 传给通用 hook `useData`

4. **依赖更新触发 useEffect**

    - `useData` 添加第三个参数 deps 依赖数组：`[selectedGenre?.id]`

**代码示例**

1. App.tsx 状态提升与传递

```ts
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

<GenreList onSelectGenre={genre => setSelectedGenre(genre)} />
<GameGrid selectedGenre={selectedGenre} />
```

2. useGames 与 useData 连接 query 参数

```ts
useData<Game>(
  "/games",
  { params: { genres: selectedGenre?.id } },
  [selectedGenre?.id]
);
```

---

## 22. 高亮选中类别

> 简述：提升用户体验，当点击某个 Genre 后，使用粗体标识当前选中的类别。

**知识树**

1. **组件样式动态渲染**

    - 在 GenreList 中传入 `selectedGenre` 作为 prop
    - 对比当前 genre 与 selectedGenre 是否一致

2. **Chakra UI Button 的动态样式**

    - 设置 `fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}`

**代码示例**

```tsx
<Button
  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
  onClick={() => onSelectGenre(genre)}
>
  {genre.name}
</Button>
```

---

## 23. 构建平台选择器（Platform Selector）

> 简述：通过下拉菜单选择游戏平台（PlayStation、Xbox 等），准备后续实现按平台筛选功能。

**知识树**

1. **下拉菜单结构（Chakra Menu）**

    - Menu > MenuButton > MenuList > MenuItem

2. **使用平台接口**

    - 请求地址：`/platforms/lists/parents`
    - 创建自定义 hook：`usePlatforms`，通过通用 `useData` 实现

3. **渲染平台列表**

    - 遍历平台数据渲染为 MenuItem
    - 使用 `onClick` 处理选择事件

4. **错误处理**

    - 若加载失败则返回 `null` 避免用户看到报错

**代码示例**

1. usePlatforms.ts

```ts
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>("/platforms/lists/parents");
```

2. PlatformSelector.tsx

```tsx
<Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Platforms
  </MenuButton>
  <MenuList>
    {platforms.map((platform) => (
      <MenuItem
        key={platform.id}
        onClick={() => onSelectPlatform(platform)}
      >
        {platform.name}
      </MenuItem>
    ))}
  </MenuList>
</Menu>
```

---

如以上格式符合你期望，我将继续整理第 24 ～ 26 节内容。如果你对结构、代码精度、术语表述或知识点覆盖范围有进一步优化建议，请随时指出。

非常好，以下是 **第 24 ～ 26 节** 的笔记，继续保持「教学型 + 阅读型」风格，突出逻辑结构、状态共享与重构方法，配合高质量代码与简洁叙述。

---

## 24. 过滤游戏：根据选中平台筛选

> 简述：实现通过平台选择器（如 Xbox、PlayStation）筛选游戏。通过“状态提升” + 请求参数组合 + 依赖更新，实现多条件联合筛选。

**知识树**

1. **平台状态提升**

    - App 中新增 `selectedPlatform` 状态
    - `PlatformSelector` 接收 `onSelectPlatform` 回调
    - 用户选择平台时调用回调上报平台信息

2. **传递筛选条件**

    - App 将 `selectedPlatform` 传递至 `GameGrid`
    - `GameGrid` 传递给 `useGames`，作为过滤条件

3. **API 查询参数构造**

    - 参数格式为 `{ platforms: selectedPlatform?.id }`
    - 使用 Axios 的 `params` 字段

4. **依赖数组更新**

    - `useData` 第三个参数为依赖项数组
    - 需包含 `selectedPlatform?.id`

**代码示例**

1. App 中状态提升 + 传递

```ts
const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

<PlatformSelector
  selectedPlatform={selectedPlatform}
  onSelectPlatform={(platform) => setSelectedPlatform(platform)}
/>

<GameGrid selectedPlatform={selectedPlatform} />
```

2. useGames 参数整合

```ts
useData<Game>(
  "/games",
  {
    params: {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id,
    },
  },
  [selectedGenre?.id, selectedPlatform?.id]
);
```

---

## 25. 重构：提取查询对象（Query Object Pattern）

> 简述：使用“查询对象模式”统一管理多个筛选参数，解决状态变量碎片化、代码混乱问题。利于状态统一更新、易于扩展（如排序、搜索等）。

**知识树**

1. **查询对象（Query Object）**

    - 定义 `GameQuery` 接口
    - 封装：`genre`, `platform`, `sortOrder`, `searchText` 等

2. **集中状态管理**

    - App 中用 `useState<GameQuery>` 管理所有筛选条件
    - 每次更新都用 `setGameQuery({ ...prev, prop })` 更新单字段

3. **组件通信更清晰**

    - 所有组件只需接受/传递 `gameQuery`，不再传多个参数

4. **依赖管理简化**

    - `useData` 中只需 `deps: [gameQuery]`，避免数组重复写

**代码示例**

1. 定义查询对象

```ts
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
```

2. 状态集中处理

```ts
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

// 选中平台
onSelectPlatform={(platform) =>
  setGameQuery((prev) => ({ ...prev, platform }))
}
```

3. useGames.ts 使用 gameQuery 对象

```ts
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
```

---

## 26. 构建排序选择器（Sort Selector）

> 简述：创建排序下拉菜单，列出排序规则（如评分、发布日期、名称），为后续实现排序功能做准备。

**知识树**

1. **下拉菜单渲染**

    - 使用 `Menu` + `MenuItem` 渲染排序选项

2. **排序项数据抽象化**

    - 提取为数组：包含 `value` 与 `label`
    - 避免硬编码、方便扩展

3. **点击项时上报排序规则**

    - 使用 `onSelectSortOrder` 回调
    - 传回排序关键字（如 `-rating`）

4. **显示当前排序项**

    - 若存在当前排序项，则显示其 label，否则显示默认 “Relevance”

**代码示例**

1. 排序选项数组

```ts
const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
```

2. 渲染排序菜单

```tsx
<Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {currentSortOrder?.label ?? "Relevance"}
  </MenuButton>
  <MenuList>
    {sortOrders.map(order => (
      <MenuItem
        key={order.value}
        onClick={() => onSelectSortOrder(order.value)}
      >
        {order.label}
      </MenuItem>
    ))}
  </MenuList>
</Menu>
```

3. App 组件中处理排序变更

```ts
onSelectSortOrder={(sortOrder) =>
  setGameQuery((prev) => ({ ...prev, sortOrder }))
}
```

---

接下来我将继续整理第 **27 ～ 30 节** 内容，包括实际的排序请求逻辑、默认图像处理、菜单样式修复和最终组合。请确认本节格式与深度是否满意，是否继续按此风格输出。

## 27. 实现游戏排序功能

> 简述：实现通过下拉菜单控制排序规则（如名称、评分、发布日期），并将排序规则作为参数传入后端，动态更新游戏列表。

**知识树**

1. **排序字段格式**

    - 后端接口支持 `ordering` 查询参数
    - 前缀 `-` 表示降序排序（如 `-added` 表示按添加时间降序）

2. **排序状态管理**

    - 排序规则存入 `gameQuery.sortOrder`
    - 由 App 组件集中管理

3. **动态菜单渲染**

    - 使用 map 渲染 MenuItem，避免重复代码
    - 每项包含 `value` 与 `label`

4. **后端请求更新**

    - 在 `useGames` 中传入 `ordering: gameQuery.sortOrder`
    - 加入 `gameQuery` 到依赖数组以触发刷新

**代码示例**

1. 排序规则传入后端

```ts
useData<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    },
  },
  [gameQuery]
);
```

2. 排序项定义

```ts
const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
```

3. 当前排序项 label 显示逻辑

```tsx
const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
<MenuButton>{currentSortOrder?.label ?? "Relevance"}</MenuButton>
```

---

## 28. 处理没有图像的游戏

> 简述：为没有背景图的游戏提供默认占位图像，防止因 `null` 导致页面崩溃，提升健壮性与用户体验。

**知识树**

1. **问题现象**

    - 部分游戏对象中 `background_image` 为 null
    - 导致 URL 处理函数报错

2. **临时方案：返回空字符串**

    - 若 URL 为 falsy，返回空字符串
    - 解决程序运行错误

3. **正式方案：使用默认图像**

    - 将默认图像存入 `assets` 文件夹
    - 使用 ES6 import 导入静态资源
    - 在 `getCroppedImageUrl()` 中返回默认图

**代码示例**

1. 引入默认图像并处理 null 情况

```ts
import noImage from "../assets/no-image-placeholder.webp";

export const getCroppedImageUrl = (url: string | null) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
```

---

## 29. 修复 Chakra Menu 控制台警告

> 简述：修复因 Chakra UI 的 Menu 被嵌套在 `HStack` 中导致的警告，通过替换为 `Flex` 和 `Box` 组件解决。

**知识树**

1. **问题现象**

    - 控制台报错：Menu 中 margin 样式与 popper 逻辑冲突

2. **问题原因**

    - Chakra 的 `HStack` 在某些嵌套布局中与 `Menu` 的浮动定位系统冲突

3. **解决方案**

    - 替换 `HStack` 为 `Flex`
    - 使用 `Box` 添加 `marginRight` 实现组件间间距

**代码示例**

1. 替换布局容器并添加间距

```tsx
<Flex>
  <Box mr={4}>
    <PlatformSelector ... />
  </Box>
  <SortSelector ... />
</Flex>
```

## 第 27 节：排序游戏列表

> 简述：通过用户选择排序方式（如评分、发布日期等），动态更新游戏列表排序，前端通过封装 `sortOrder` 参数，调用后端的 `/games` 接口并携带 `ordering` 查询参数实现。

**知识树**

1. **排序机制**

    - 使用 `ordering` 查询参数控制排序方式
    - 排序值如 `-rating` 表示按评分降序排列

2. **排序选项结构**

    - `{ value: string, label: string }` 结构表示后台排序值与展示标签的映射
    - 使用数组映射生成 MenuItem，避免重复代码

3. **组件通信流程**

    - 子组件 `SortSelector` 选择排序项
    - 通过 `onSelectSortOrder` 通知 App 父组件
    - 父组件将 `sortOrder` 更新至 `gameQuery` 对象并传入 GameGrid
    - GameGrid 通过 useGames Hook 调用后端

4. **Query 对象优势**

    - 所有查询参数（genre、platform、sortOrder）统一封装在 `gameQuery` 对象中，简化状态管理与传参逻辑

**代码示例**

1. `SortSelector` 的排序项定义与点击事件处理：

```ts
const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date Added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release Date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average Rating' },
];

<MenuList>
  {sortOrders.map(order => (
    <MenuItem
      key={order.value}
      onClick={() => onSelectSortOrder(order.value)}
    >
      {order.label}
    </MenuItem>
  ))}
</MenuList>
```

2. App 中处理排序值并更新 `gameQuery`：

```ts
setGameQuery({ ...gameQuery, sortOrder: sortOrder });
```

3. useGames Hook 中发送排序请求：

```ts
params: {
  ordering: gameQuery.sortOrder,
  ...
}
```

---

## 第 28 节：处理没有图片的游戏

> 简述：有些游戏数据不包含图片字段，此时若直接访问会导致渲染错误。通过添加默认占位图 `no-image.webp` 提高鲁棒性与用户体验。

**知识树**

1. **问题背景**

    - 游戏数据可能没有 `background_image` 字段
    - 若不处理将导致图片请求失败或空白占位

2. **处理策略**

    - 添加本地静态资源图片作为默认图
    - 修改 `getCroppedImageUrl` 工具函数，在缺失图片时返回默认图

3. **图片导入与使用**

    - 默认图片需通过 `import` 模块方式加载，确保在打包时被正确包含

**代码示例**

1. 工具函数 `getCroppedImageUrl.ts`：

```ts
import noImage from '../assets/no-image-placeholder.webp';

export default function getCroppedImageUrl(url: string | null) {
  if (!url) return noImage;
  // ... 处理 crop
}
```

---

## 第 29 节：修复 Chakra 菜单组件警告

> 简述：将菜单组件（PlatformSelector + SortSelector）放入 `HStack` 会导致 Chakra 与 Popper.js 报 CSS 警告，需使用 `Flex + Box` 替代布局解决问题。

**知识树**

1. **报错信息**

    - “css margin styles cannot be used to apply padding...” 出现在控制台
    - 与 Chakra 的 `HStack` 与 Menu 配合使用有关

2. **解决方案**

    - 用 `Flex` 替代 `HStack`，避免 Popper 与 DOM 结构冲突
    - 用 `Box` 包裹一个组件并设置 `marginRight` 实现布局间距

**代码示例**

```tsx
<Flex>
  <Box mr={5}>
    <PlatformSelector ... />
  </Box>
  <SortSelector ... />
</Flex>
```

---

## 第 30 节：构建搜索框组件

> 简述：实现游戏名称搜索框，支持输入关键字并回车提交。通过向 App 父组件传递 `searchText` 更新查询参数，触发后端接口的过滤行为。

**知识树**

1. **表单结构**

    - 使用 `form` 标签包裹输入框，处理 `onSubmit` 事件
    - 使用 `useRef` 获取输入值

2. **图标装饰输入**

    - 使用 `InputGroup + InputLeftElement` 添加搜索图标
    - 图标来自 `react-icons/bs`（Bootstrap 图标库）

3. **组件通信**

    - `SearchInput` 通过 `onSearch` 函数向 `NavBar` → `App` 通知搜索词
    - 父组件更新 `gameQuery.searchText`，传入 `useGames` Hook，自动触发请求

4. **布局优化**

    - 统一设置搜索框外部样式以适配桌面和移动端
    - 避免使用 `inline-style`，推荐使用 `global CSS` 或 Chakra 样式

**代码示例**

1. 获取搜索值并回传：

```ts
const ref = useRef<HTMLInputElement>(null);

<form onSubmit={(event) => {
  event.preventDefault();
  if (ref.current) onSearch(ref.current.value);
}}>
  <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} placeholder="Search games..." variant="filled" />
  </InputGroup>
</form>
```

2. App 接收并更新查询对象：

```ts
setGameQuery({ ...gameQuery, searchText });
```

3. useGames 中传参：

```ts
params: {
  search: gameQuery.searchText,
  ...
}
```

---

如果你希望我继续整理第 31 ～ 34 节，或者希望我为这一部分生成结构图、组件通信图、用词对照表，我也可以继续补充。是否继续？

已为你整理出第 31 ～ 34 节的教学型+阅读型笔记，结构完整，逻辑清晰，贴合你的风格要求：

---

## 第 31 节：实现搜索功能

> 简述：通过输入关键词并按下回车，触发向后端发送搜索请求，实现游戏数据按名称筛选。

**知识树**

1. 表单事件处理

    - `<form onSubmit>` 阻止默认提交，捕获搜索行为
    - 使用 `useRef<HTMLInputElement>()` 获取输入值

2. 搜索逻辑传递

    - SearchInput → NavBar → App（透传 `onSearch`）
    - App 更新 `gameQuery.searchText`，并传入 GameGrid

3. 数据请求接口

    - `searchText` 被传入 `useGames → useData`，最终作为 API 查询参数 `{ search: text }`

**代码示例**

```tsx
<form onSubmit={(e) => {
  e.preventDefault();
  if (ref.current) onSearch(ref.current.value);
}}>
  <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} placeholder="Search games..." />
  </InputGroup>
</form>
```

---

## 第 32 节：添加动态标题组件

> 简述：根据当前选择的 Genre 和 Platform，动态生成页面标题，如“Xbox Action Games”。

**知识树**

1. 文本逻辑

    - 无选择：Games
    - 选 Genre：Action Games
    - 选 Platform：Xbox Games
    - 两者选中：Xbox Action Games

2. 组件设计

    - `GameHeading` 接收 `gameQuery` 生成标题文本

3. 样式优化

    - 字体大小：`2xl`
    - 外边距：`mb=3`
    - 左边距对齐：使用 `<Box pl="...">` 统一样式

**代码示例**

```tsx
<Heading fontSize="2xl" mb={3}>
  {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
</Heading>
```

---

## 第 33 节：优化 Genre 列表样式

> 简述：解决按钮文字折行、图像拉伸、对齐不一致等 UI 问题，使列表排版更清晰。

**知识树**

1. 文本排版优化

    - 设置 `whiteSpace="normal"` 解决文字被截断
    - 设置 `textAlign="left"` 实现左对齐

2. 图像处理

    - 添加 `objectFit="cover"` 保证图片等比例缩放

3. 标题添加

    - 使用 `Heading` 添加 “Genres” 区块标题

4. 结构与间距

    - 使用 `<Fragment>` 包裹标题 + 列表
    - 设置 `mb` 调整标题与内容间距

**代码示例**

```tsx
<Button whiteSpace="normal" textAlign="left">
  {genre.name}
</Button>
<Image src={...} boxSize="32px" objectFit="cover" />
```

---

## 第 34 节：优化游戏卡片信息排布

> 简述：调整评分和平台信息位置，提高视觉清晰度，提升卡片之间间距，增强可读性。

**知识树**

1. 元素重排

    - 将 Icon 和 Score 上移至游戏名之前，形成“信息摘要”块

2. 间距处理

    - 为 Icon+Score 添加 `mb`
    - 增加卡片之间的间距（GameGrid → spacing）

3. 响应式布局

    - 保证各设备下卡片信息展示一致、美观

**代码示例**

```tsx
<HStack mb={3}>
  <PlatformIcons platforms={...} />
  <CriticScore score={...} />
</HStack>
<Heading fontSize="xl">{game.name}</Heading>
```

```tsx
<SimpleGrid spacing={5}>
  {games.map(...)}
</SimpleGrid>
```

## 第 35 节：为游戏评分添加 Emoji

> 简述：根据评分显示不同表情图标（meh/推荐/神作），增强用户体验和视觉趣味性。

**知识树**

1. 评分来源

    - API 属性：`rating_top`（整数，1~5）

2. Emoji 映射

    - `rating_top >= 3` 才展示表情
    - 使用对象映射替代多重 `if`

3. 可访问性与样式

    - `alt` 文本提升可访问性
    - 动态设置 `boxSize` 实现图标尺寸统一

4. 技术点

    - **Index Signature**: 让对象可索引 (`{ [key: number]: ImageProps }`)
    - 使用 Chakra `Image` 组件展示 Emoji

**代码示例**

```ts
const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: 'Meh', boxSize: '25px' },
  4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
  5: { src: bullsEye, alt: 'Exceptional', boxSize: '30px' },
};

return rating < 3 ? null : <Image {...emojiMap[rating]} marginTop={1} />;
```

---

## 第 36 节：将 Genres 作为静态资源内置

> 简述：将 genre 列表内置为静态数据，避免每次加载都请求服务器，提升用户体验和加载速度。

**知识树**

1. 静态数据原则

    - 变化频率极低的数据（如 genre/platform）适合作为内置静态资源

2. 优化用户体验

    - 不再展示 loading spinner
    - 页面加载更快、体验更平滑

3. 保持接口一致性

    - 返回 `{ data, isLoading: false, error: null }`，避免影响消费组件

4. 存储结构

    - `src/data/genres.ts` 中使用 `export default [...]` 暴露数据数组

**代码示例**

```ts
// useGenres.ts
import genres from "../data/genres";
export default () => ({ data: genres, isLoading: false, error: null });
```

---

## 第 37 节：自定义 Chakra 主题灰色调

> 简述：使用 SmartSwatch 工具生成更符合视觉审美的灰色配色，替换默认 `gray` 色板。

**知识树**

1. Chakra 主题扩展

    - 通过 `extendTheme({ colors: { gray: { ... }}})` 自定义颜色

2. 设计工具推荐

    - [SmartSwatch.dev](https://smart-swatch.netlify.app/)：自动生成 Harmony 色调

3. 整体视觉风格统一

    - 将灰阶改为更暗的背景，使应用更具现代感

**代码示例**

```ts
// theme.ts
export default extendTheme({
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020', // 核心深灰色
      800: '#121212',
      900: '#111',
    },
  },
});
```

---

## 第 38 节：优化 GameGrid 渲染逻辑

> 简述：将 error 和正常 UI 拆分处理，避免 fragment 包裹多个条件逻辑，提升可读性。

**知识树**

1. 条件渲染优化

    - 不再使用 fragment 包裹两个 return 分支
    - 明确逻辑分支：有错误 → 直接返回 `<Text>{error}</Text>`

2. 可读性提升

    - 提前返回 (`early return`) 是常见的代码简化技巧

**代码示例**

```tsx
if (error) return <Text>{error}</Text>;

return (
  <SimpleGrid spacing={5}>
    {isLoading ? skeletons.map(...) : games.map(...)}
  </SimpleGrid>
);
```

---

## 第 39 节：构建生产版本

> 简述：使用 `npm run build` 命令本地构建 React 项目，提前发现潜在的编译错误。

**知识树**

1. 构建流程

    - `npm run build` 生成 `dist/` 文件夹，用于部署
    - 提前发现 TypeScript 编译错误（如未定义方法、类型不匹配）

2. VS Code 构建快捷键

    - ⌘ + ⇧ + B（Mac）或 Ctrl + ⇧ + B（Windows）：打开任务执行器 → run build task

3. 常见优化建议

    - 忽略不必要的构建提示（例如 bundle 超限）
    - 真实错误应在构建前解决

---

## 第 40 节：部署到 Vercel

> 简述：将 React 应用部署至 Vercel，并连接 GitHub 仓库实现自动部署。

**知识树**

1. 部署准备

    - 创建 GitHub 仓库
    - 推送本地代码至 GitHub（`git remote add` + `push`）

2. Vercel CLI 安装

    - `npm install -g vercel`，首次登录需验证 GitHub 身份

3. 部署流程（使用 Vercel CLI）

    - 执行 `vercel` 命令 → 逐步确认部署设置
    - 设置项目名称、目录、构建设置（可直接回车默认）

4. 自动部署集成

    - Vercel → Git 集成 → Connect GitHub 仓库
    - 每次 `git push`，Vercel 自动构建并部署最新版代码

5. 预览地址

    - 部署完成后可在 dashboard 查看部署历史和预览地址

---

如需继续整理第 41 节之后内容，或将所有笔记合成为一份终极学习手册（支持搜索、查阅、索引），随时告诉我你需要的结构（Markdown / HTML / PDF / VuePress 等）。

```

```
