## 1- 我们将构建什么

> 简述：项目介绍：一个视频游戏发现应用。功能包括亮色/暗色模式切换、游戏搜索、按类型和平台筛选、排序以及加载骨架屏 UI。开发遵循实用主义、代码优先、迭代优化的方法。

**知识树**

1.  项目范围：视频游戏发现应用，RAWG 网站的迷你版。
2.  核心功能：
    - 暗色/亮色模式切换。
    - 游戏搜索功能。
    - 按类型筛选。
    - 按平台筛选。
    - 游戏排序选项。
    - 数据获取期间的加载骨架屏 UI。
3.  开发方法论：
    - 实践性、实用主义编码。
    - 代码驱动设计。
    - 迭代开发与重构。

**代码示例**

（本节无代码）

## 3- 设置项目

> 简述：使用 Vite 结合 React 和 TypeScript 搭建项目基础。涵盖用于项目创建、依赖安装和启动开发服务器的 NPM 命令。初始化 Git 仓库进行版本控制。

**知识树**

1.  项目脚手架 (Vite): `npm create vite@latest game-hub -- --template react-ts`
2.  目录导航: `cd game-hub`
3.  依赖安装: `npm install`
4.  开发服务器: `npm run dev`
5.  Git 版本控制:
    - 初始化仓库: `git init`
    - 暂存文件: `git add .`
    - 初始提交: `git commit -m "initial commit"`

**代码示例**

1.  Vite 项目创建与设置:
    ```bash
    npm create vite@latest game-hub -- --template react-ts
    cd game-hub
    npm install
    npm run dev
    ```
2.  Git 初始化:
    ```bash
    git init
    git add .
    git commit -m "initial commit"
    ```

## 4- 安装 Chakra UI

> 简述：集成 Chakra UI，一个 React 组件库，用于样式化。涉及安装包、在主应用文件中配置 `ChakraProvider`、移除默认样式，并通过测试组件验证安装。

**知识树**

1.  Chakra UI: 用于在 React 中构建用户界面的组件库。
2.  安装命令: `npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`
3.  Provider 配置 (`main.tsx`):
    - 从 `@chakra-ui/react` 导入 `ChakraProvider`。
    - 用 `<ChakraProvider>` 包裹根 `App` 组件。
4.  Import 语句组织：推荐顺序：React、第三方库、本地模块。
5.  安装验证：在 `App.tsx` 中添加一个 Chakra UI `Button`。
6.  CSS 重置：从 `index.css` 中移除 Vite 的默认样式以防止冲突。
7.  Git 提交：记录 Chakra UI 设置。
    - 使用 VS Code 源代码管理面板或 `git diff`审查更改。
    - 查看提交历史：`git log --oneline`。

**代码示例**

1.  Chakra UI 依赖安装:
    ```bash
    npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
    ```
2.  `main.tsx` - ChakraProvider 设置:

    ```tsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { ChakraProvider } from '@chakra-ui/react' // 导入
    import App from './App.tsx'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ChakraProvider> {/* 包裹 App */}
          <App />
        </ChakraProvider>
      </React.StrictMode>,
    )
    ```

3.  `App.tsx` - 测试按钮:

    ```tsx
    import { Button } from '@chakra-ui/react' // 导入 Button

    function App() {
      return (
        <Button colorScheme='blue'>Button</Button> // 使用 Button
      )
    }

    export default App
    ```

4.  `index.css` - 移除默认样式:
    ```css
    /* 删除所有内容 */
    ```
5.  Git 提交:
    ```bash
    git add .
    git commit -m "Install Chakra UI"
    ```

## 5- 创建响应式布局

> 简述：使用 Chakra UI 的 `Grid` 和 `GridItem` 组件构建响应式布局。定义模板区域以实现不同屏幕尺寸下的导航栏、侧边栏和主内容区布局。使用 `Show` 组件控制元素在特定断点下的可见性。

**知识树**

1.  Chakra UI `Grid` 组件: 类似于 HTML Grid，用于二维布局。
2.  `templateAreas` 属性:
    - 使用字符串定义网格布局的区域名称。
    - 支持对象形式，为不同断点（如 `base`, `lg`）定义不同的 `templateAreas`。
3.  Chakra UI `GridItem` 组件: 网格布局中的子项，通过 `area` 属性指定其在 `templateAreas` 中定义的位置。
4.  响应式断点: Chakra UI 预设的断点（`sm`, `md`, `lg`, `xl` 等）用于响应式设计。
5.  Chakra UI `Show` 组件:
    - 根据断点控制其子组件的渲染。
    - `above` 属性: 仅在指定断点或更大屏幕上渲染子组件 (例如 `above="lg"`）。
6.  Chrome DevTools: 用于测试不同设备尺寸下的响应式布局。

**代码示例**

1.  `App.tsx` - 响应式网格布局:

    ```tsx
    import { Grid, GridItem, Show } from '@chakra-ui/react'

    function App() {
      return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`, // 移动端：导航栏在上，主内容在下
            lg: `"nav nav" "aside main"`, // 大屏幕：导航栏横跨两列，下方是侧边栏和主内容
          }}
        >
          <GridItem area="nav" bg="coral">
            Nav
          </GridItem>
          <Show above="lg"> {/*仅在大屏幕显示侧边栏*/}
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      )
    }

    export default App
    ```

    - `templateAreas` 使用对象语法为 `base` (默认/移动端) 和 `lg` (大屏幕) 定义了不同的布局。
    - `Show` 组件包裹了 `aside` `GridItem`，使其仅在 `lg` 断点及以上显示。

## 6- 构建导航栏

> 简述：创建导航栏组件 (`Navbar`)。使用 Chakra UI 的 `HStack` (水平堆栈) 组件横向排列导航栏元素，如 Logo 图片。学习如何导入和使用静态资源 (图片)。

**知识树**

1.  组件化：创建独立的 `Navbar.tsx` 组件。
2.  Chakra UI `HStack` 组件: 用于水平方向上均匀排列子元素。
3.  Chakra UI `Image` 组件: 用于显示图片。
    - `src` 属性：指定图片源。
    - `boxSize` 属性：控制图片尺寸。
4.  静态资源导入 (图片):
    - 将图片文件 (如 `logo.webp`) 放置在 `assets` 文件夹。
    - 在组件中通过 `import logoSrc from '../assets/logo.webp'` 导入图片路径。
5.  组件嵌套：在 `App.tsx` 的 `nav` `GridItem` 中使用 `Navbar` 组件。
6.  关注点分离：本节仅关注导航栏基本布局，搜索框和模式选择器后续实现。

**代码示例**

1.  `src/components/Navbar.tsx`:

    ```tsx
    import { HStack, Image } from '@chakra-ui/react';
    import logo from '../assets/logo.webp'; // 导入图片

    const Navbar = () => {
      return (
        <HStack>
          <Image src={logo} boxSize="60px" /> {/* 使用图片和设置尺寸 */}
          {/* 后续会添加搜索框和颜色模式切换器 */}
        </HStack>
      );
    };

    export default Navbar;
    ```

2.  `src/App.tsx` - 使用 Navbar:

    ```tsx
    import { Grid, GridItem, Show } from '@chakra-ui/react';
    import Navbar from './components/Navbar'; // 导入 Navbar

    function App() {
      return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav"> {/* 移除背景色 bg="coral" */}
            <Navbar /> {/* 使用 Navbar 组件 */}
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      );
    }

    export default App;
    ```

## 7- 实现暗色模式

> 简述：为应用实现暗色/亮色模式切换功能。通过创建自定义主题配置文件 (`theme.ts`)，设置初始颜色模式，并在 `ChakraProvider` 和 `ColorModeScript` 中应用该主题。

**知识树**

1.  Chakra UI 颜色模式: 内建支持暗色和亮色主题。
2.  自定义主题 (`theme.ts`):
    - `extendTheme` 函数: 用于扩展或覆盖 Chakra UI 的默认主题。
    - `ThemeConfig` 接口: 定义主题配置对象的结构。
    - `initialColorMode` 属性: 设置应用的初始颜色模式 (如 `'dark'` 或 `'light'`)。
    - `useSystemColorMode` 属性: (可选) 是否使用系统偏好设置。
3.  `main.tsx` 配置:
    - `ChakraProvider` 的 `theme` 属性: 应用自定义主题。
    - `ColorModeScript` 组件:
        - 从 `@chakra-ui/react` 导入。
        - 放置在 `App` 组件之前。
        - `initialColorMode` 属性: 设置初始颜色模式，应与主题配置一致，以防止闪烁。
4.  本地存储 (Local Storage): Chakra UI 使用本地存储记住用户选择的颜色模式。清除本地存储中的 `chakra-ui-color-mode` 键可以重置模式。

**代码示例**

1.  `src/theme.ts`:

    ```ts
    import { extendTheme, ThemeConfig } from '@chakra-ui/react';

    const config: ThemeConfig = {
      initialColorMode: 'dark', // 设置初始颜色模式为暗色
      useSystemColorMode: false, // 不使用系统颜色模式
    };

    const theme = extendTheme({ config });

    export default theme;
    ```

2.  `src/main.tsx` - 应用主题和 ColorModeScript:

    ```tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'; // 导入 ColorModeScript
    import App from './App.tsx';
    import theme from './theme'; // 导入自定义主题
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ChakraProvider theme={theme}> {/* 应用自定义主题 */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {/* 添加 ColorModeScript */}
          <App />
        </ChakraProvider>
      </React.StrictMode>,
    );
    ```

## 8- 构建颜色模式切换器

> 简述：创建一个颜色模式切换组件 (`ColorModeSwitch`)。使用 Chakra UI 的 `Switch` 组件和 `useColorMode` 钩子来切换和反映当前的颜色模式。

**知识树**

1.  Chakra UI `Switch` 组件: 用于提供开关切换功能。
    - `isChecked` 属性: 控制开关是否选中。
    - `onChange` 属性: 处理开关状态改变事件。
    - `colorScheme` 属性: 设置开关的颜色主题。
2.  Chakra UI `useColorMode` 钩子:
    - 返回一个对象，包含：
        - `colorMode`: 当前颜色模式 (`'light'` 或 `'dark'`)。
        - `toggleColorMode`: 切换颜色模式的函数。
3.  Chakra UI `Text` 组件: 用于显示文本标签。
4.  Chakra UI `HStack` 组件: 用于水平排列 `Switch` 和 `Text`。
5.  布局调整 (`Navbar.tsx`):
    - `justifyContent="space-between"`: 在 `HStack` 中使子元素两端对齐，将切换器推到右侧。
    - `paddingX`: 为导航栏添加水平内边距。

**代码示例**

1.  `src/components/ColorModeSwitch.tsx`:

    ```tsx
    import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

    const ColorModeSwitch = () => {
      const { toggleColorMode, colorMode } = useColorMode(); // 使用 useColorMode 钩子

      return (
        <HStack>
          <Switch
            colorScheme="green" // 设置颜色
            isChecked={colorMode === 'dark'} // 根据当前模式设置选中状态
            onChange={toggleColorMode} // 切换模式
          />
          <Text>Dark Mode</Text>
        </HStack>
      );
    };

    export default ColorModeSwitch;
    ```

2.  `src/components/Navbar.tsx` - 集成切换器并调整布局:

    ```tsx
    import { HStack, Image } from '@chakra-ui/react';
    import logo from '../assets/logo.webp';
    import ColorModeSwitch from './ColorModeSwitch'; // 导入切换器

    const Navbar = () => {
      return (
        <HStack justifyContent="space-between" paddingX="10px"> {/* 调整布局和内边距 */}
          <Image src={logo} boxSize="60px" />
          <ColorModeSwitch /> {/* 使用切换器 */}
        </HStack>
      );
    };

    export default Navbar;
    ```

3.  `src/App.tsx` - 移除临时背景色:
    ```tsx
    // ...
    <Show above="lg">
      <GridItem area="aside"> {/* 移除 bg="gold" */}
        Aside
      </GridItem>
    </Show>
    <GridItem area="main"> {/* 移除 bg="dodgerblue" */}
      Main
    </GridItem>
    // ...
    ```

## 9- 获取游戏数据

> 简述：从 RAWG API 获取视频游戏列表。安装并配置 Axios 用于发送 HTTP 请求，定义数据接口，使用 `useState` 和 `useEffect` 钩子管理和获取数据，并在组件中展示。

**知识树**

1.  RAWG API: 提供视频游戏数据的外部服务。需要注册获取 API 密钥。https://rawg.io/apidocs
2.  Axios: 基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js。
    - 安装: `npm install axios`
    - 创建实例 (`axios.create`): 配置基础 URL 和全局参数 (如 API 密钥)。
3.  API Client 模块 (`src/services/api-client.ts`): 封装 Axios 实例，便于复用和管理。
    - `baseURL`: API 的基础路径。
    - `params`: 附加到每个请求的查询参数 (例如 `key` API 密钥)。
4.  TypeScript 接口: 定义 API 响应和游戏对象的结构。
    - `FetchGamesResponse`: 描述 `/games` 端点响应的顶层结构 (包含 `count`, `results` 等)。
    - `Game`: 描述单个游戏对象的属性 (如 `id`, `name`)。
5.  React Hooks:
    - `useState`: 管理游戏列表 (`games`) 和错误信息 (`error`) 的状态。
    - `useEffect`: 在组件挂载后执行数据获取操作。依赖项数组为空 (`[]`)，确保只执行一次。
6.  数据获取逻辑:
    - 使用 `apiClient.get<FetchGamesResponse>('/games')` 发送请求。
    - `.then(response => setGames(response.data.results))` 处理成功响应。
    - `.catch(error => setError(error.message))` 处理错误。
7.  条件渲染: 根据 `error` 状态显示错误信息，使用 `games` 状态渲染游戏列表。
8.  组件 (`GameGrid.tsx`): 负责获取和展示游戏数据。

**代码示例**

1.  `src/services/api-client.ts`:

    ```ts
    import axios from 'axios';

    export default axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: 'YOUR_API_KEY', // 替换为你的 API 密钥
      },
    });
    ```

2.  `src/components/GameGrid.tsx` (部分):

    ```tsx
    import { useEffect, useState } from 'react';
    import apiClient from '../services/api-client';
    import { Text } from '@chakra-ui/react';

    // 定义接口
    interface Game {
      id: number;
      name: string;
    }

    interface FetchGamesResponse {
      count: number;
      results: Game[];
    }

    const GameGrid = () => {
      const [games, setGames] = useState<Game[]>([]); // 游戏状态
      const [error, setError] = useState('');       // 错误状态

      useEffect(() => {
        apiClient
          .get<FetchGamesResponse>('/games') // 发送 GET 请求
          .then((res) => setGames(res.data.results)) // 更新游戏数据
          .catch((err) => setError(err.message));    // 更新错误信息
      }, []); // 空依赖数组，仅执行一次

      return (
        <>
          {error && <Text>{error}</Text>} {/* 条件渲染错误信息 */}
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

3.  `src/App.tsx` - 使用 GameGrid:

    ```tsx
    // ...
    import GameGrid from './components/GameGrid'; // 导入 GameGrid

    // ...
    <GridItem area="main">
      <GameGrid /> {/* 在主区域使用 GameGrid */}
    </GridItem>
    // ...
    ```

## 10- 创建自定义钩子用于获取游戏数据

> 简述：将 `GameGrid` 组件中的数据获取逻辑 (状态变量、`useEffect`、API 调用) 提取到一个自定义 React 钩子 (`useGames`) 中。这有助于分离关注点，使组件更简洁，并使数据获取逻辑可复用。同时处理请求取消。

**知识树**

1.  自定义钩子 (Custom Hooks): 以 `use` 开头的 JavaScript 函数，允许在不同组件间共享有状态逻辑。
2.  关注点分离: 将数据获取逻辑从表现层组件中移出。
3.  代码模块化与可复用性: 自定义钩子可以在多个组件中使用。
4.  `AbortController`: 用于取消异步操作 (如 HTTP 请求)。
    - 创建 `AbortController` 实例。
    - 将其 `signal` 传递给 Axios 请求配置。
    - 在 `useEffect` 的清理函数中调用 `controller.abort()` 来取消请求。
5.  错误处理 (`CanceledError`): Axios 在请求被取消时会抛出 `CanceledError`。需要检查此错误类型并相应处理，避免将取消操作视为普通错误。
6.  `useEffect` 依赖项: 确保 `useEffect` 在其依赖项变化时正确执行和清理。
7.  接口移动: 将与数据获取相关的接口 (如 `Game`, `FetchGamesResponse`) 移至自定义钩子模块，或更通用的类型定义文件。

**代码示例**

1.  `src/hooks/useGames.ts`:

    ```ts
    import { useEffect, useState } from 'react';
    import apiClient from '../services/api-client';
    import { CanceledError } from 'axios'; // 导入 CanceledError

    // 接口定义 (可以从 GameGrid 移到这里或共享类型文件)
    export interface Game { // 导出接口以便 GameCard 使用
      id: number;
      name: string;
      background_image: string; // 为 GameCard 添加 background_image
    }

    interface FetchGamesResponse {
      count: number;
      results: Game[];
    }

    const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState('');

      useEffect(() => {
        const controller = new AbortController(); // 创建 AbortController

        apiClient
          .get<FetchGamesResponse>('/games', { signal: controller.signal }) // 传递 signal
          .then((res) => setGames(res.data.results))
          .catch((err) => {
            if (err instanceof CanceledError) return; // 如果是取消错误，则返回
            setError(err.message);
          });

        return () => controller.abort(); // 清理函数中取消请求
      }, []); // 依赖项数组

      return { games, error }; // 返回状态和错误
    };

    export default useGames;
    ```

2.  `src/components/GameGrid.tsx` - 使用自定义钩子:

    ```tsx
    import { Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames'; // 导入自定义钩子

    const GameGrid = () => {
      const { games, error } = useGames(); // 使用钩子获取数据

      return (
        <>
          {error && <Text>{error}</Text>}
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

    - 组件变得更简洁，只负责展示数据。

## 11- 构建游戏卡片

> 简述：创建 `GameCard` 组件以更美观地展示单个游戏信息，替换原有的列表项。使用 Chakra UI 的 `Card`, `CardBody`, `Image`, 和 `Heading` 组件构建卡片布局。实现响应式的列布局和卡片样式。

**知识树**

1.  `GameCard` 组件: 接收 `game` 对象作为 prop，展示游戏名称和背景图片。
2.  Chakra UI 组件:
    - `Card`: 卡片容器。
        - `borderRadius`: 设置边框圆角。
        - `overflow="hidden"`: 配合 `borderRadius` 确保图片圆角生效。
    - `Image`: 显示游戏背景图。
    - `CardBody`: 卡片内容区域。
    - `Heading`: 显示游戏名称，使用 `fontSize` 调整大小。
3.  接口扩展 (`Game`): 在 `Game` 接口中添加 `background_image` 属性。
4.  Chakra UI `SimpleGrid` 组件 (`GameGrid.tsx`):
    - 用于创建简单的响应式网格布局。
    - `columns`: 定义不同断点下的列数 (例如 `columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}` )。
    - `spacing`: 设置网格项之间的间距。
    - `padding`: 设置网格容器的内边距。
5.  Props 传递: 将 `game` 对象从 `GameGrid` 传递到 `GameCard`。
6.  响应式设计: `SimpleGrid` 的 `columns` 属性允许根据屏幕宽度自动调整每行显示的卡片数量。

**代码示例**

1.  `src/hooks/useGames.ts` - 更新 `Game` 接口 (已在上一节示例中包含):
    ```ts
    export interface Game {
      id: number;
      name: string;
      background_image: string; // 确保此属性存在
    }
    ```
2.  `src/components/GameCard.tsx`:

    ```tsx
    import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
    import { Game } from '../hooks/useGames'; // 导入 Game 接口

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card borderRadius="10px" overflow="hidden"> {/* 圆角和溢出隐藏 */}
          <Image src={game.background_image} />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading> {/* 调整标题大小 */}
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

3.  `src/components/GameGrid.tsx` - 使用 `SimpleGrid` 和 `GameCard`:

    ```tsx
    import { SimpleGrid, Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames';
    import GameCard from './GameCard'; // 导入 GameCard

    const GameGrid = () => {
      const { games, error } = useGames();

      return (
        <>
          {error && <Text>{error}</Text>}
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // 响应式列数
            padding="10px" // 内边距
            spacing={6}      // 间距
          >
            {games.map((game) => (
              <GameCard key={game.id} game={game} /> // 使用 GameCard
            ))}
          </SimpleGrid>
        </>
      );
    };

    export default GameGrid;
    ```

## 12- 显示平台图标

> 简述：在游戏卡片上显示游戏支持的平台图标。涉及解析 API 返回的 `parent_platforms` 数据结构，更新 `Game` 接口，创建 `PlatformIconList` 组件，并将平台标识符 (slug) 映射到具体的 React 图标。

**知识树**

1.  API 数据结构 (`parent_platforms`):
    - `parent_platforms` 是一个数组。
    - 数组中的每个对象包含一个 `platform` 属性，该属性的值才是一个实际的平台对象 (包含 `id`, `name`, `slug`)。
2.  接口更新:
    - `Game` 接口: 添加 `parent_platforms` 属性。
    - `Platform` 接口: 新建，定义平台对象的结构 (`id: number`, `name: string`, `slug: string`)。
3.  组件创建 (`PlatformIconList.tsx`):
    - 目的：封装显示平台图标列表的逻辑。
    - Props：接收一个 `platforms: Platform[]` 数组作为属性。
    - 内部逻辑：遍历 `platforms` 数组，为每个平台查找并渲染对应的图标。
4.  数据映射 (在 `GameCard.tsx` 中):
    - 将 `game.parent_platforms` (原始结构) 映射转换为 `Platform[]` 结构，再传递给 `PlatformIconList`。
    - 转换逻辑: `game.parent_platforms.map(p => p.platform)`。
5.  React Icons 库 (`react-icons`):
    - 安装: `npm i react-icons`。
    - 导入特定图标集中的图标 ，例如：
        - `react-icons/fa` (Font Awesome)
        - `react-icons/md` (Material Design)
        - `react-icons/si` (Simple Icons)
        - `react-icons/bs` (Bootstrap Icons)
6.  图标映射 (`iconMap`):
    - 在 `PlatformIconList.tsx` 中创建一个对象。
    - 键 (key): 平台的 `slug` (小写文本标识符，如 `pc`, `playstation`)。
    - 值 (value): 对应的 React Icon 组件 (如 `FaWindows`, `FaPlaystation`)。
7.  **TypeScript 类型注解 (Index Signature)**：
    - 索引签名 `[key: string]: IconType`
        - 这意味着 `iconMap` 是一个对象，它的键是字符串类型` ( string )`，值是 `IconType` 类型（来自 `react-icons` 库，代表一个图标组件）
    - 键 (Key) :
        - 键是明确的字符串，如 `"pc"` , `"playstation"` , `"xbox"` 等。
        - 这些字符串是平台的` "slug"`（一种简短、URL 友好的标识符）。
    - 值 (Value) :
        - 值是 `IconType` 类型的图标组件本身，例如 `FaWindows` , `FaPlaystation` 等。
        - 这些是直接可以渲染的 React 组件。
    - 用法 :
        - `iconMap[p.slug] `：通过平台对象的 `slug` 属性 (一个字符串) 来查找对应的图标组件 ( `IconType` )。
        - <Icon key={p.id} as={iconMap[p.slug]} color="gray.500"></Icon>` <Icon key={p.id} as={iconMap[p.slug]} color="gray.500"></Icon>`：将查找到的图标组件 ( `IconType` ) 传递给 Chakra UI `Icon` 组件的 `as` 属性。 `as` 属性允许你指定 `Icon` 组件应该渲染成哪种底层 HTML 元素或哪个 React 组件。
    - 语法: `[key: string]: IconType`。
8.  Chakra UI 组件应用:
    - `Icon` 组件: 将其 `as` prop 动态设置为 `iconMap[platform.slug]`，即根据当前平台的`slug`从映射表中获取对应的图标组件进行渲染。
    - `HStack`: 水平排列图标。
    - 样式: `color` (如 `gray.500`) 使图标颜色变暗，`marginY` 调整与标题的间距。

**代码示例**

1.  接口更新 (`src/hooks/useGames.ts` 或共享类型文件):

    ```ts
    export interface Platform {
      id: number;
      name: string;
      slug: string;
    }

    export interface Game {
      // ... 其他属性
      parent_platforms: { platform: Platform }[]; // 注意这里的结构
    }
    ```

2.  `src/components/PlatformIconList.tsx`:

    ```tsx
    import { HStack, Icon, Text } from '@chakra-ui/react';
    import { Platform } from '../hooks/useGames'; // 假设 Platform 接口在此
    import {
      FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid,
    } from 'react-icons/fa';
    import { MdPhoneIphone } from 'react-icons/md';
    import { SiNintendo } from 'react-icons/si';
    import { BsGlobe } from 'react-icons/bs';
    import { IconType } from 'react-icons'; // 导入 IconType

    interface Props {
      platforms: Platform[];
    }

    const PlatformIconList = ({ platforms }: Props) => {
      // slug 到图标组件的映射
      const iconMap: { [key: string]: IconType } = { // 使用索引签名
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
      };

      return (
        <HStack marginY={1}> {/* 调整垂直间距 */}
          {platforms.map((platform) => (
            <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" /> {/* 动态渲染图标并设置颜色 */}
          ))}
        </HStack>
      );
    };

    export default PlatformIconList;
    ```

3.  `src/components/GameCard.tsx` - 使用 `PlatformIconList`:

    ```tsx
    // ... 其他 imports
    import PlatformIconList from './PlatformIconList';
    import { Game } from '../hooks/useGames';

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card /* ... */ >
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            {/* 传递转换后的 platforms 数组 */}
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          </CardBody>
        </Card>
      );
    };
    ```

## 13- 显示评分

> 简述：在游戏卡片上添加一个徽章 (Badge) 来显示游戏的媒体评分 (`metacritic`)。创建一个 `CriticScore` 组件，并根据分数值动态改变徽章的颜色。

**知识树**

1.  API 数据: 游戏对象中的 `metacritic` 属性，表示媒体评分。
2.  接口更新 (`Game` 接口): 添加 `metacritic: number` 属性。
3.  组件创建 (`CriticScore.tsx`):
    - 专门用于显示评分徽章。
    - Props: 接收 `score: number`。
4.  条件化样式:
    - 在 `CriticScore` 组件内部，根据传入的 `score` 值决定 `colorScheme`：
        - 若 `score > 75`，则 `colorScheme = 'green'`。
        - 若 `score > 60` (且不大于 75)，则 `colorScheme = 'yellow'`。
        - 否则，`colorScheme = ''`
5.  Chakra UI 组件:
    - `Badge`: 用于显示评分。
    - `HStack` (在 `GameCard.tsx` 中): 用于将平台图标列表和评分徽章水平排列，并使评分徽章靠右。
        - `justifyContent="space-between"`: 实现两端对齐。
6.  `Badge` 样式:
    - `fontSize`: 调整字体大小。
    - `paddingX`: 设置水平内边距。
    - `borderRadius`: 设置边框圆角。

**代码示例**

1.  `Game` 接口更新 (`src/hooks/useGames.ts`):
    ```ts
    export interface Game {
      // ... 其他属性
      metacritic: number;
    }
    ```
2.  `src/components/CriticScore.tsx`:

    ```tsx
    import { Badge } from '@chakra-ui/react';

    interface Props {
      score: number;
    }

    const CriticScore = ({ score }: Props) => {
      let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''; // 根据分数决定颜色

      return (
        <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
          {score}
        </Badge>
      );
    };

    export default CriticScore;
    ```

3.  `src/components/GameCard.tsx` - 使用 `CriticScore` 并调整布局:

    ```tsx
    // ... 其他 imports
    import PlatformIconList from './PlatformIconList';
    import CriticScore from './CriticScore'; // 导入 CriticScore
    import { HStack } from '@chakra-ui/react'; // 导入 HStack
    // ... Game 接口应包含 metacritic ...

    const GameCard = ({ game }: Props) => {
      return (
        <Card>
          {/* ... Image ... */}
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}> {/* 新增 HStack */}
              <Heading fontSize="2xl">{game.name}</Heading>
              <CriticScore score={game.metacritic} />
            </HStack>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          </CardBody>
        </Card>
      );
    };
    ```

## 14- 获取优化图像

> 简述：通过修改从 API 获取的图片 URL 来请求裁剪过的、更小的图片版本，以优化页面加载速度。为此创建一个工具函数。

**知识树**

1.  1. **性能瓶颈分析**：
    - 直接使用 API 返回的原始图片 (`background_image`) 尺寸过大，导致页面加载慢，尤其是在网络连接较差的情况下。
2.  API 图像裁剪:
    - RAWG API 的图片 URL 结构中，在 `media/` 路径段之后，可以通过插入 `crop/<width>/<height>/` （例如 `crop/600/400/`）参数来获取服务器端裁剪后的、尺寸更小的图片版本。
3.  **工具函数 `getCroppedImageUrl` (`src/services/image-url.ts`)**：
    - 目的：封装修改图片 URL 以获取裁剪版本的逻辑，避免在组件中直接操作 URL 字符串。
    - 思路：建一个 ts 文件，里面写写一个工具函数，包含接受和返回的参数，并导出 ，然后在需要用到的时候直接调用这个函数并传参
    - 输入参数：`imageUrl: string` (原始图片 URL)。
    - 输出参数：`string` (添加了裁剪参数的新图片 URL)。
    - 实现逻辑：
        1. 定义目标字符串 `target = 'media/'`。
        2. 查找 `target` 在原始 `imageUrl` 中的索引位置。
        3. 如果未找到 `target`，则直接返回原始 URL（或进行错误处理/返回占位图 URL）。
        4. 如果找到，则使用字符串的 `slice()` 方法将 URL 分割成两部分：`target` 之前的部分（包括`target`本身）和 `target` 之后的部分。
        5. 在两部分之间插入裁剪参数字符串，例如 `'crop/600/400/'`。
        6. 拼接三部分形成新的 URL 并返回。
4.  字符串操作:
    - `url.indexOf('media/')`: 查找 `media/` 的起始位置。
    - `url.slice()`: 用于截取 URL 的不同部分。
    - 字符串拼接: 组合 URL 的各部分及裁剪参数。
5.  模块化: 将该工具函数放在 `services` 目录下，便于管理和复用。
6.  应用: 在渲染游戏背景图`(game.background_image)`时，调用  `getCroppedImageUrl`  函数处理 URL。

**代码示例**

1.  `src/services/image-url.ts`:

    ```ts
    const getCroppedImageUrl = (url: string) => {
      if (!url) return ''; // 处理url可能为空的情况
      const target = 'media/';
      const index = url.indexOf(target) + target.length;
      // 在 'media/' 后插入 'crop/600/400/'
      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    };

    export default getCroppedImageUrl;
    ```

2.  `src/components/GameCard.tsx` - 使用工具函数:

    ```tsx
    import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
    import { Game } from '../hooks/useGames';
    import PlatformIconList from './PlatformIconList';
    import CriticScore from './CriticScore';
    import getCroppedImageUrl from '../services/image-url'; // 导入工具函数

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card borderRadius="10px" overflow="hidden">
          <Image src={getCroppedImageUrl(game.background_image)} /> {/* 应用工具函数 */}
          <CardBody>
            <Heading fontSize="2xl" marginBottom={3}>{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

## 15- 使用加载骨架屏改善用户体验

> 简述：为游戏卡片实现加载骨架屏 (Loading Skeletons)，以在数据获取期间改善感知性能。这包括在 `useGames` 钩子中跟踪加载状态，并创建一个 `GameCardSkeleton` 组件。

**知识树**

1. 思路：
    1. 跟踪 hook 中的 Loading state（定义 isLoading 的 useState）
    2. 创建一个组件，看起来像 gameCard， 在没有 game object 的情况下，建一个骨架屏组件
        1. skeleton：被加载的图像的占位符
        2. CardBody:模仿 CardBody 的结构
    3. 渲染骨架层，需要一个数组 skeleton，6 个 skeleton，不随时间变化的局部变量或常量
        1. 处于加载状态时，我们将数组中得每个项映射到一个骨架组件
        2. `{isLoading &&skeletons.map((skeletons) => <GameCardSkeleton key={skeletons} />)}`
        3. 调整骨架层的样式:给骨架层和真实层的 Card 设置相同的样式属性
2. 加载状态跟踪  `(useGames.ts)`:
    - 在 `useGames` (或其底层的 `useData`) 钩子中添加 `isLoading`布尔状态变量。
    - 在 API 调用开始前设为 `true`，在数据返回或发生错误后设为 `false`。
    - 从钩子中返回 `isLoading`状态。
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
5. 样式一致性:
    - 确保骨架屏卡片和实际游戏卡片具有相似的尺寸和圆角，以避免加载完成时布局跳动。
    - 初始实现可能涉及在两个组件中复制宽度和圆角值，后续会进行重构。

**代码示例**

1.  `src/hooks/useData.ts` (或 `useGames.ts` 如果未重构到 `useData`) - 添加 `isLoading`:

    ```ts
    // ...
    const useData = <T>(endpoint: string, /* ...其他参数 */) => {
      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setLoading] = useState(false); //1. 添加 isLoading 状态

      useEffect(() => {
        const controller = new AbortController();
        setLoading(true); // 2.开始加载
        apiClient
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, /* ...其他配置 */ })
          .then((res) => {
            setData(res.data.results);
            setLoading(false); // 3.加载完成
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false); // 4.加载出错
          });

        return () => controller.abort();
      }, [/* 依赖项 */]);

      return { data, error, isLoading }; // 5.返回 isLoading
    };
    // ...
    ```

2.  `src/components/GameCardSkeleton.tsx`:

    ```tsx
    import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

    const GameCardSkeleton = () => {
      return (
        <Card width="300px" borderRadius="10px" overflow="hidden"> {/* 临时宽度和圆角 */}
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      );
    };

    export default GameCardSkeleton;
    ```

3.  `src/components/GameGrid.tsx` - 条件渲染骨架屏:

    ```tsx
    import { SimpleGrid, Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames';
    import GameCard from './GameCard';
    import GameCardSkeleton from './GameCardSkeleton'; // 1.导入骨架屏组件

    const GameGrid = () => {
      const { data: games, error, isLoading } = useGames(); // 2.获取 isLoading
      const skeletons = [1, 2, 3, 4, 5, 6]; //3. 创建骨架屏占位数组 (数量可调)

      if (error) return <Text>{error}</Text>;

      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
          {isLoading && // 4. 如果正在加载
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
          {!isLoading && games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      );
    };

    export default GameGrid;
    ```

4.  `src/components/GameCard.tsx` - 添加临时宽度 (与 `GameCardSkeleton` 保持一致):
    ```tsx
    // ...
    const GameCard = ({ game }: Props) => {
      return (
        <Card width="300px" borderRadius="10px" overflow="hidden"> {/* 临时宽度 */}
          {/* ... */}
        </Card>
      );
    };
    // ...
    ```

## 16- 重构 - 移除重复样式

> 简述：通过创建一个 `GameCardContainer` 组件来封装 `GameCard` 和 `GameCardSkeleton` 的共享样式 (如宽度、边框圆角)，以消除代码重复。

**知识树**

1.  问题识别: `GameCard.tsx` 和 `GameCardSkeleton.tsx` 中的 `Card` 组件应用了相同的 `borderRadius` 和 `overflow="hidden"` 样式，导致代码重复。
2.  解决方案: 创建一个专门的容器组件 `GameCardContainer.tsx`。
3.  VS Code 命令面板快捷方式:
    - `Shift + Command + P` (Mac) 或 `Shift + Control + P` (Windows) 打开命令面板。
    - 搜索 "Wrap with abbreviation" (Emmet 功能)，输入组件名 (如 `GameCardContainer`) 快速包裹选中内容。

**代码示例**

1.  `src/components/GameCardContainer.tsx`:

    ```tsx
    import { Box } from '@chakra-ui/react';
    import { ReactNode } from 'react';

    interface Props {
      children: ReactNode;
    }

    const GameCardContainer = ({ children }: Props) => {
      return (
        <Box width="300px" borderRadius="10px" overflow="hidden"> {/* 共享样式 */}
          {children}
        </Box>
      );
    };

    export default GameCardContainer;
    ```

2.  `src/components/GameCard.tsx` - 移除重复样式:

    ```tsx
    import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
    // ...其他导入

    const GameCard = ({ game }: Props) => {
      return (
        // <Card width="300px" borderRadius="10px" overflow="hidden"> 移除这些样式
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <Heading fontSize="2xl" marginBottom={3}>{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      );
    };

    export default GameCard;
    ```

3.  `src/components/GameCardSkeleton.tsx` - 移除重复样式:

4.  `src/components/GameGrid.tsx` - 使用 `GameCardContainer`:

    ```tsx

    import GameCardContainer from './GameCardContainer'; // 导入容器组件



      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
          {isLoading &&
            skeletons.map(skeleton => (
              <GameCardContainer key={skeleton}> {/* 包裹骨架屏 */}
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {!isLoading &&
            games.map((game) => (
              <GameCardContainer key={game.id}> {/* 包裹游戏卡片 */}
                <GameCard game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      );
    };

    export default GameGrid;
    ```

## 17- 获取类型数据

> 简述：开始构建侧边栏，首先从 API 获取游戏类型 (Genres) 数据。创建一个 `GenreList` 组件和一个 `useGenres` 自定义钩子 (初始版本与 `useGames` 类似，存在代码重复)。

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

1.  接口定义 (可放在 `src/hooks/useGenres.ts` 或共享类型文件):

    ```ts
    export interface Genre {
      id: number;
      name: string;
      // 后续会添加 image_background 等
    }

    interface FetchGenresResponse {
      count: number;
      results: Genre[];
    }
    ```

2.  `src/hooks/useGenres.ts` (初始版本，与 `useGames` 类似):

    ```ts
    import { useEffect, useState } from 'react';
    import apiClient from '../services/api-client';
    import { CanceledError } from 'axios';

    // (在此处或导入 Genre 和 FetchGenresResponse 接口)
    // export interface Genre { ... }
    // interface FetchGenresResponse { ... }


    const useGenres = () => {
      const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setLoading] = useState(false);

      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<FetchGenresResponse>('/genres', { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });

        return () => controller.abort();
      }, []);

      return { genres, error, isLoading };
    };

    export default useGenres;
    ```

3.  `src/components/GenreList.tsx` (初始版本):

    ```tsx
    import useGenres, { Genre } from '../hooks/useGenres';

    const GenreList = () => {
      const { genres } = useGenres();

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

4.  `src/App.tsx` - 集成 `GenreList`:

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

## 18- 创建通用的数据获取钩子

> 简述：将 `useGames` 和 `useGenres` 两个功能相似的自定义钩子重构为一个通用的、可复用的数据获取钩子 `useData`，以消除代码重复并提高代码的模块化程度。

**知识树**

1.  泛型 (Generics) 在 TypeScript 中的应用:
    - 使用 `<T>` 定义泛型类型参数，使钩子能够处理不同类型的数据。
    - `useData<T>(...)`：`T` 代表期望获取的数据项的类型 (如 `Game` 或 `Genre`)。
2.  参数化钩子:
    - `useData` 接收 `endpoint: string` 作为参数，指定 API 请求的路径。
    - 可以接收其他通用参数，如请求配置对象。
    - 将所有特定于类型 (genre) 的引用替换为泛型 `T` 或通用名称 `data`。
3.  通用响应接口:
    - 创建 `FetchResponse<T>` 泛型接口，描述 API 响应的通用结构 (如 `{ count: number; results: T[] }`)。
4.  重构现有钩子:
    - 修改 `useGames` 和 `useGenres`，使其内部调用通用的 `useData` 钩子。
    - `useGames` 调用 `useData<Game>('/games', ...)`。
    - `useGenres` 调用 `useData<Genre>('/genres', ...)`。
    -
5.  封装实现细节:
    - 通过这种方式，`useGames` 和 `useGenres` 成为特定于领域数据的薄封装层，隐藏了具体的端点和数据获取逻辑。
    - 组件 (如 `GameGrid`, `GenreList`) 仍然使用 `useGames` 或 `useGenres`，无需关心底层的 `useData`。
6.  组件解耦: 组件不直接依赖于具体的 API 端点字符串，而是依赖于更抽象的数据获取钩子。
7.  清理未使用的导入和代码。

**代码示例**

1.  `src/hooks/useData.ts` (通用数据获取钩子):

    ```ts
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
      const [isLoading, setLoading] = useState(false);

      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
    	  // 3. 使用泛型T和FetchResponse<T>
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });

        return () => controller.abort();
      }, deps ? [...deps] : []); // 允许传入依赖项数组
    // 5. 返回通用的data属性
      return { data, error, isLoading };
    };

    export default useData;
    ```

2.  `src/hooks/useGenres.ts` (重构后):

    ```ts
    import useData from './useData';

    export interface Genre { // 确保 Genre 接口已定义并导出
      id: number;
      name: string;
      image_background: string; // 为下一节准备
    }

    // FetchGenresResponse 接口不再需要在此定义，因为 useData 使用了通用的 FetchResponse<T>

    const useGenres = () => useData<Genre>('/genres'); // 调用 useData

    export default useGenres;
    ```

3.  `src/hooks/useGames.ts` (重构后):

    ```ts
    import useData from './useData';
    import { Platform } from './useGames'; // 假设 Platform 接口定义在此或被导入

    export interface Game { // 确保 Game 接口已定义并导出
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[];
      metacritic: number;
    }

    // FetchGamesResponse 接口不再需要在此定义

    const useGames = () => useData<Game>('/games'); // 调用 useData，传入Game类型和端点

    export default useGames;
    ```

4.  `src/components/GenreList.tsx` (调整以适应 `useData` 返回的 `data` 属性):

    ```tsx
    import useGenres, { Genre } from '../hooks/useGenres';

    const GenreList = () => {
      const { data: genres, error, isLoading } = useGenres(); // 将 genres 重命名为 data

      // ... (其余部分不变，但使用 genres 变量)
    ```

5.  `src/components/GameGrid.tsx` (已在 `useGames` 返回 `data` 时调整过，无需额外修改)。

## 19- 美化类型列表

> 简述：改进 `GenreList` 组件，使其能够显示每个游戏类型的图片和名称，并优化侧边栏和主内容区域的布局，确保响应式设计的正确性。

**知识树**

1.  API 数据 (`Genre`):
    - 游戏类型对象包含 `image_background` 属性，用于显示类型图片。
    - 更新 `Genre` 接口以包含此属性。
2.  Chakra UI 组件 (`GenreList.tsx`):
    - `List`: 替换 `ul`，用于渲染无项目符号的列表。
    - `ListItem`: 替换 `li`。
    - `HStack`: 水平排列类型图片和名称。
    - `Image`: 显示类型图片。
        - `boxSize`: 控制图片大小 (例如 `32px`)。
        - `borderRadius`: 设置图片圆角 (例如 `8px`)。
        - `objectFit="cover"`: (视频中未明确提及，但通常用于确保图片填充容器且不变形)
    - `Text`: 显示类型名称。
        - `fontSize`: 调整字体大小 (例如 `lg`)。
3.  图片优化:
    - 对类型图片使用之前创建的 `getCroppedImageUrl` 工具函数。
4.  布局调整 (`App.tsx`):
    - 侧边栏 (`aside` `GridItem`):
        - 添加 `paddingX` (例如 `10px`)，使内容与边缘有间距。
    - 主网格 (`Grid`):
        - `templateColumns`: 定义列宽。
            - `base: "1fr"`: 移动端单列，占满可用空间。
            - `lg: "200px 1fr"`: 大屏幕两列，侧边栏固定宽度 (例如 `200px`)，主内容区域占据剩余空间 (`1fr`)。
5.  响应式布局问题修复:
    - 移除 `GameCardContainer` 中的固定宽度 (`width="300px"`)。
        - 原因：当侧边栏有固定宽度后，主内容区域的宽度是动态的。如果卡片容器有固定宽度，可能导致在较窄的主内容区域内无法正确排列或溢出。移除固定宽度后，卡片容器将自适应其在 `SimpleGrid` 列中的可用空间。
    - 调整 `GameGrid.tsx` 中 `SimpleGrid` 的 `spacing` 属性，以获得更合适的卡片间距。
6.  全面响应式测试: 在不同设备尺寸下检查布局和骨架屏的显示效果。

**代码示例**

1.  `src/hooks/useGenres.ts` - 更新 `Genre` 接口:
    ```ts
    // ...
    export interface Genre {
      id: number;
      name: string;
      image_background: string; // 添加图片背景属性
    }
    // ...
    ```
2.  `src/components/GenreList.tsx` - 显示图片和文本:

    ```tsx
    import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
    import useGenres, { Genre } from '../hooks/useGenres';
    import getCroppedImageUrl from '../services/image-url'; // 导入图片裁剪工具

    const GenreList = () => {
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null;
      if (isLoading) return <p>Loading...</p>; // 或者使用 Spinner

      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px"> {/* 为列表项添加垂直内边距 */}
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover" // 确保图片不变形
                  src={getCroppedImageUrl(genre.image_background)}
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

3.  `src/App.tsx` - 调整布局:
    ```tsx
    // ...
    function App() {
      return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{ // 定义列宽
            base: '1fr',
            lg: '200px 1fr', // 侧边栏 200px，主内容区域占满剩余
          }}
        >
          <GridItem area="nav">
            <Navbar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}> {/* 为侧边栏添加水平内边距 */}
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
        </Grid>
      );
    }
    // ...
    ```
4.  `src/components/GameCardContainer.tsx` - 移除固定宽度:

    ```tsx
    import { Box } from '@chakra-ui/react';
    import { ReactNode } from 'react';

    interface Props {
      children: ReactNode;
    }

    const GameCardContainer = ({ children }: Props) => {
      return (
        // <Box width="300px" borderRadius="10px" overflow="hidden"> 移除 width
        <Box borderRadius="10px" overflow="hidden">
          {children}
        </Box>
      );
    };

    export default GameCardContainer;
    ```

5.  `src/components/GameGrid.tsx` - 调整 `SimpleGrid` 间距:
    ```tsx
    // ...
    <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // 根据实际情况调整 xl 列数
        padding="10px"
        spacing={3} // 调整间距，例如从 6 改为 3
    >
    {/* ... */}
    </SimpleGrid>
    // ...
    ```

## 20- 显示加载指示器 (Spinner)

> 简述：在 `GenreList` 组件中，当游戏类型数据正在获取时，显示一个加载指示器 (Spinner)，而不是简单的文本提示。同时，处理错误状态，使其在发生错误时不渲染任何内容。

**知识树**

1.  加载状态利用:
    - 从 `useGenres` (最终来自 `useData`) 钩子中获取 `isLoading` 状态。
2.  Chakra UI `Spinner` 组件:
    - 一个简单、美观的加载动画组件。
    - 直接在 `isLoading` 为 `true` 时渲染此组件。
3.  条件渲染:
    - `if (isLoading) return <Spinner />;`
4.  错误处理改进:
    - 从钩子中获取 `error` 状态。
    - `if (error) return null;`：如果发生错误，组件返回 `null`，意味着在侧边栏的该区域不渲染任何内容，避免在页面多处显示分散的错误信息。
5.  错误模拟:
    - 通过临时修改 `useGenres` 钩子内部的 API 端点 (例如，将 `/genres` 改为 `/xgenres`) 来手动触发错误，以测试错误处理逻辑。

**代码示例**

1.  `src/components/GenreList.tsx` - 添加 Spinner 和改进错误处理:

    ```tsx
    import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'; // 导入 Spinner
    import useGenres, { Genre } from '../hooks/useGenres';
    import getCroppedImageUrl from '../services/image-url';

    const GenreList = () => {
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null; // 如果有错误，不渲染任何内容

      if (isLoading) return <Spinner />; // 如果正在加载，显示 Spinner

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

2.  模拟错误 (临时修改 `src/hooks/useGenres.ts` 或 `src/hooks/useData.ts`):

    ```ts
    // 在 useGenres.ts 中
    // const useGenres = () => useData<Genre>('/genres');
    // 改为:
    // const useGenres = () => useData<Genre>('/xgenres'); // 错误的端点

    // 或者在 useData.ts 中临时修改 endpoint 参数的用法
    ```

## 21- 按类型筛选游戏

> 简述：实现基于用户所选游戏类型动态筛选游戏列表的功能。此机制涉及状态提升、组件间回调通信以及 API 请求参数的动态构建。

**知识树**

1.  状态提升:
    - `selectedGenre` 状态 (类型为 `Genre | null`) 提升至父组件 `App.tsx` 进行管理，以便在 `GenreList` 和 `GameGrid` 之间共享。
2.  组件通信:
    - `GenreList.tsx`:
        - 接收 `onSelectGenre: (genre: Genre) => void` 回调 prop。
        - 将类型按钮从 `Text` 改为 `Button` (Chakra UI)，设置 `variant="link"`。
        - 点击类型按钮时，调用 `onSelectGenre` 并传入所选 `genre` 对象。
    - `App.tsx`:
        - 向 `GenreList` 传递更新 `selectedGenre` 状态的回调函数。
        - 将 `selectedGenre` 状态作为 prop 传递给 `GameGrid.tsx`。
3.  数据获取逻辑调整 (`hooks/useGames.ts` 及 `hooks/useData.ts`):
    - `useGames.ts`:
        - 接收 `selectedGenre: Genre | null` 作为参数。
        - 将 `selectedGenre.id` (如果存在) 作为查询参数传递给 `useData.ts`。
    - `hooks/useData.ts`:
        - 修改以接受第二个可选参数 `requestConfig: AxiosRequestConfig`，用于传递查询参数 (如 `params: { genres: selectedGenre.id }`)。
            - 使用`requestConfig`：在 get 请求接受的第二个对象中使用拓展运算符将`requestConfig`展开并作为参数传递
        - 修改以接受第三个可选参数 `deps: any[]`，作为 `useEffect` 的依赖项数组，确保当筛选条件变化时重新获取数据。
        - `useEffect` 依赖项数组包含 `requestConfig` 中的相关值 (例如 `selectedGenre.id`) 或整个 `deps` 数组。
4.  API 参数: RAWG API `/games` 端点接受 `genres` 查询参数 (可为类型 ID 或 slug) 进行筛选。
    - 因为这里查看接口文档，可以传递的查询参数有：genres:string，例如 4,51

**代码示例**

1.  `App.tsx` - 状态管理与传递:

    ```tsx
    // import { Genre } from './hooks/useGenres'; // 假设 Genre 接口已定义
    // import { useState } from 'react';

    function App() {
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

      return (
        <Grid
          // ...
        >
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre} // 后续章节添加此 prop 用于高亮
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid selectedGenre={selectedGenre} />
          </GridItem>
        </Grid>
      );
    }
    ```

2.  `components/GenreList.tsx` - 回调与按钮:

    ```tsx
    // import { Genre } from '../hooks/useGenres';
    // import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';

    interface Props {
      onSelectGenre: (genre: Genre) => void;
      // selectedGenre: Genre | null; // 后续章节添加
    }

    const GenreList = ({ onSelectGenre /*, selectedGenre */ }: Props) => {
      const { data: genres, isLoading, error } = useGenres();
      // ... isLoading, error handling ...
      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image /* ... */ />
                <Button variant="link" fontSize="lg" onClick={() => onSelectGenre(genre)}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      );
    };
    ```

3.  `hooks/useData.ts` - 扩展参数:

    ```ts
    // import { AxiosRequestConfig } from 'axios';

    const useData = <T>(
      endpoint: string,
      requestConfig?: AxiosRequestConfig, // 新增: Axios 请求配置
      deps?: any[]                        // 新增: useEffect 依赖项
    ) => {
      // ...
      useEffect(() => {
        // ...
        apiClient
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig }) // 应用 requestConfig
        // ...
      }, deps ? [...deps] : []); // 使用 deps 作为依赖项
      // ...
    };
    ```

4.  `hooks/useGames.ts` - 应用筛选参数:

    ```ts
    // import { Genre } from './useGenres'; // 或 GameQuery 对象

    const useGames = (selectedGenre: Genre | null /* , selectedPlatform: Platform | null */) => { // 或 gameQuery: GameQuery
      return useData<Game>(
        '/games',
        {
          params: {
            genres: selectedGenre?.id,
            // platforms: selectedPlatform?.id, // 后续章节添加
          },
        },
        [selectedGenre?.id /* , selectedPlatform?.id */] // 依赖项
      );
    };
    ```

## 22- 高亮显示所选类型

> 简述：在类型列表中，通过视觉样式（如加粗字体）明确指示当前已被用户选中的游戏类型，以增强用户界面的反馈清晰度。

**知识树**

1.  状态传递:
    - `App.tsx` 组件将当前选中的 `selectedGenre` 对象 (或 `null`) 作为 prop 传递给 `GenreList.tsx` 组件。
2.  `GenreList.tsx` 组件逻辑:
    - 接收 `selectedGenre: Genre | null` prop。
    - 在渲染每个类型按钮时，比较当前正在渲染的 `genre.id` 与 `selectedGenre?.id`。
    - 动态设置按钮的 `fontWeight` 属性：如果 ID 匹配，则设为 `'bold'`，否则设为 `'normal'`。
    - 使用可选链操作符 (`?.`) 安全访问 `selectedGenre.id`，因为 `selectedGenre` 可能为 `null`。

**代码示例**

1.  `App.tsx` - 传递 `selectedGenre` 给 `GenreList`:

    ```tsx
    function App() {
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
      // ...
      return (
        <Grid /* ... */ >
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre} // 传递 selectedGenre
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Show>
          {/* ... */}
        </Grid>
      );
    }
    ```

2.  `components/GenreList.tsx` - 接收 `selectedGenre` 并应用动态样式:

    ```tsx
    // import { Genre } from '../hooks/useGenres';
    // import { Button } from '@chakra-ui/react';

    interface Props {
      onSelectGenre: (genre: Genre) => void;
      selectedGenre: Genre | null; // 新增 prop
    }

    const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres();
      // ... isLoading, error handling ...
      return (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image /* ... */ />
                <Button
                  variant="link"
                  fontSize="lg"
                  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} // 动态设置 fontWeight
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
    ```

## 23- 构建平台选择器

> 简述：创建一个下拉菜单组件，允许用户选择游戏平台。此组件从特定 API 端点获取平台列表并动态渲染菜单项。

**知识树**

1.  组件创建 (`PlatformSelector.tsx`):
    - 使用 Chakra UI 的 `Menu`, `MenuButton`, `Button`, `MenuList`, `MenuItem` 复合组件构建下拉菜单。
    - `MenuButton` 内嵌一个 `Button`，并可使用 `rightIcon` (如 `BsChevronDown` from `react-icons/bs`)。
2.  数据获取:
    - 创建新的自定义钩子 `hooks/usePlatforms.ts`。
    - `usePlatforms` 内部调用通用的 `useData<Platform>('/platforms/lists/parents')` 来获取父平台列表。
    - 定义 `Platform` 接口: `{ id: number; name: string; slug: string; }`。
3.  动态渲染菜单项:
    - 在 `PlatformSelector.tsx` 中使用 `usePlatforms` 钩子获取平台数据。
    - 遍历获取到的平台数据，为每个平台渲染一个 `MenuItem`。
    - `MenuItem` 的 `key` 设为 `platform.id`，显示的文本为 `platform.name`。
4.  错误处理:
    - 如果 `usePlatforms` 返回错误，`PlatformSelector` 组件应返回 `null`，不在界面上渲染该选择器。
5.  集成到主应用 (`App.tsx`):
    - 将 `PlatformSelector` 组件放置在主布局中合适的位置（例如，游戏网格上方）。
6.  API 端点: RAWG API `/platforms/lists/parents` 提供一个简化的父平台列表。

**代码示例**

1.  `hooks/usePlatforms.ts` (及 `Platform` 接口定义):

    ```ts
    import useData from './useData';

    export interface Platform { // 确保 Platform 接口已定义或导入
      id: number;
      name: string;
      slug: string;
    }

    const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

    export default usePlatforms;
    ```

2.  `components/PlatformSelector.tsx`:

    ```tsx
    import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
    import { BsChevronDown } from 'react-icons/bs';
    import usePlatforms, { Platform } from '../hooks/usePlatforms';

    // interface Props { // 后续章节添加
    //   onSelectPlatform: (platform: Platform) => void;
    //   selectedPlatform: Platform | null;
    // }

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

3.  `App.tsx` - 集成 `PlatformSelector`:

    ```tsx
    // ... imports ...
    // import PlatformSelector from './components/PlatformSelector';

    function App() {
      // ...
      return (
        <Grid /* ... */ >
          {/* ... */}
          <GridItem area="main">
            {/* <PlatformSelector onSelectPlatform={...} selectedPlatform={...} /> 后续章节添加 */}
            <GameGrid /* ... */ />
          </GridItem>
        </Grid>
      );
    }
    ```

## 24- 按平台筛选游戏

> 简述：实现基于用户所选游戏平台动态筛选游戏列表的功能。此机制与按类型筛选类似，涉及状态提升、回调通信和 API 参数调整。

**知识树**

1.  状态提升:
    - `selectedPlatform` 状态 (类型为 `Platform | null`) 提升至父组件 `App.tsx`。
2.  组件通信:
    - `PlatformSelector.tsx`:
        - 接收 `onSelectPlatform: (platform: Platform) => void` 回调 prop。
        - 接收 `selectedPlatform: Platform | null` prop 用于更新按钮标签。
        - 点击 `MenuItem` 时，调用 `onSelectPlatform` 并传入所选 `platform` 对象。
        - `MenuButton` 的文本动态显示为 `selectedPlatform?.name` 或默认 "Platforms"。
    - `App.tsx`:
        - 向 `PlatformSelector` 传递更新 `selectedPlatform` 状态的回调函数和 `selectedPlatform` 本身。
        - 将 `selectedPlatform` 状态作为 prop 传递给 `GameGrid.tsx`。
3.  数据获取逻辑调整 (`hooks/useGames.ts`):
    - 接收 `selectedPlatform: Platform | null` 作为参数 (与 `selectedGenre` 一同传入)。
    - 将 `selectedPlatform.id` (如果存在) 作为查询参数 `platforms` 传递给 `useData.ts` (通过 `requestConfig.params`)。
    - 更新 `useData` 的 `deps` 数组，使其包含 `selectedPlatform?.id`，以在平台选择变化时重新获取数据。
4.  API 参数: RAWG API `/games` 端点接受 `platforms` 查询参数 (可为平台 ID) 进行筛选。

**代码示例**

1.  `App.tsx` - 状态管理与传递:

    ```tsx
    // import { Platform } from './hooks/usePlatforms'; // 假设 Platform 接口已定义
    // import { useState } from 'react';

    function App() {
      const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
      const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null); // 新增状态

      return (
        <Grid /* ... */ >
          {/* ... GenreList ... */}
          <GridItem area="main">
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          </GridItem>
        </Grid>
      );
    }
    ```

2.  `components/PlatformSelector.tsx` - 回调与动态标签:

    ```tsx
    // import { Platform } from '../hooks/usePlatforms';

    interface Props {
      onSelectPlatform: (platform: Platform) => void;
      selectedPlatform: Platform | null;
    }

    const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
      const { data: platforms, error } = usePlatforms();
      if (error) return null;

      return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'Platforms'} {/* 动态标签 */}
          </MenuButton>
          <MenuList>
            {platforms.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform)} // 调用回调
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };
    ```

3.  `hooks/useGames.ts` - 应用平台筛选参数:

    ```tsx
    // import { Genre } from './useGenres';
    // import { Platform } from './usePlatforms';

    const useGames = (
      selectedGenre: Genre | null,
      selectedPlatform: Platform | null
    ) => {
      return useData<Game>(
        '/games',
        {
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id, // 新增平台参数
          },
        },
        [selectedGenre?.id, selectedPlatform?.id] // 新增平台依赖
      );
    };
    ```

4.  `components/GameGrid.tsx` - 接收 `selectedPlatform`:

    ```tsx
    // import { Genre } from '../hooks/useGenres';
    // import { Platform } from '../hooks/usePlatforms';

    interface Props {
      selectedGenre: Genre | null;
      selectedPlatform: Platform | null; // 新增 prop
    }

    const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
      // 将 selectedGenre 和 selectedPlatform 传递给 useGames 钩子
      const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
      // ...
    };
    ```

## 25- 重构-提取查询对象

> 简述：将`App`组件中用于游戏查询的多个独立状态变量（如`selectedGenre`, `selectedPlatform`）整合到一个单一的`GameQuery`对象中，以简化状态管理和属性传递，提高代码的整洁度和可维护性。

**知识树**

1.  问题识别: `App.tsx` 中存在多个独立的查询相关状态变量，导致属性传递和状态更新逻辑分散。
2.  解决方案: 引入查询对象模式 (Query Object Pattern)。
    - 定义 `GameQuery` 接口: 包含所有查询参数，如 `genre: Genre | null`, `platform: Platform | null` (后续可扩展 `sortOrder`, `searchText` 等)。
3.  `App.tsx` 重构:
    - 用单个 `gameQuery: GameQuery` 状态替换原有的 `selectedGenre` 和 `selectedPlatform` 状态。
    - 初始化 `gameQuery` 为 `{}` (并使用类型断言 `as GameQuery` 以满足 TypeScript，或确保初始对象符合接口定义，例如所有可选属性设为 `null` 或 `undefined`)。
    - 更新状态逻辑: 当选择类型或平台时，使用扩展运算符创建新的 `gameQuery` 对象: `setGameQuery({ ...prevGameQuery, genre: newGenre })`。
    - 将整个 `gameQuery` 对象作为单个 prop 传递给 `GameGrid.tsx`。
    - 向 `GenreList` 和 `PlatformSelector` 传递 `gameQuery.genre` 和 `gameQuery.platform` 以维持其现有功能 (如高亮显示、按钮标签)。
4.  `GameGrid.tsx` 重构:
    - 接收单个 `gameQuery: GameQuery` prop。
    - 将整个 `gameQuery` 对象传递给 `useGames.ts` 钩子。
5.  `hooks/useGames.ts` 重构:
    - 接收单个 `gameQuery: GameQuery` 参数。
    - 从 `gameQuery` 对象中解构出需要的属性 (如 `gameQuery.genre?.id`, `gameQuery.platform?.id`) 用于构建 API 请求参数。
    - `useEffect` 的依赖项数组 (传递给 `useData`) 可以直接使用 `gameQuery` 对象本身。当 `gameQuery` 对象的任何相关属性变化导致对象引用变化时，会触发数据重新获取。

**代码示例**

1.  `App.tsx` - 定义 `GameQuery` 接口并使用 `gameQuery` 状态:

    ```tsx
    // import { Genre } from './hooks/useGenres';
    // import { Platform } from './hooks/usePlatforms';
    // import { useState } from 'react';

    export interface GameQuery { // 导出接口
      genre: Genre | null;
      platform: Platform | null;
      // sortOrder: string | null; // 后续章节添加
      // searchText: string | null; // 后续章节添加
    }

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({
        genre: null,
        platform: null,
      } as GameQuery); // 初始化

      return (
        <Grid /* ... */ >
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <GameGrid gameQuery={gameQuery} /> {/* 传递整个 gameQuery 对象 */}
          </GridItem>
        </Grid>
      );
    }
    ```

2.  `components/GameGrid.tsx` - 接收 `gameQuery`:

    ```tsx
    import { GameQuery } from '../App'; // 导入 GameQuery 接口

    interface Props {
      gameQuery: GameQuery; // 接收 gameQuery 对象
    }

    const GameGrid = ({ gameQuery }: Props) => {
      const { data: games, error, isLoading } = useGames(gameQuery); // 传递 gameQuery
      // ...
    };
    ```

3.  `hooks/useGames.ts` - 使用 `gameQuery`:

    ```tsx
    import { GameQuery } from '../App'; // 导入 GameQuery 接口

    const useGames = (gameQuery: GameQuery) => {
      return useData<Game>(
        '/games',
        {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            // ordering: gameQuery.sortOrder, // 后续章节添加
            // search: gameQuery.searchText, // 后续章节添加
          },
        },
        [gameQuery] // 依赖整个 gameQuery 对象
      );
    };
    ```

## 26- 构建排序选择器

> 简述：创建一个下拉菜单组件，允许用户选择游戏的排序方式。此组件包含预定义的排序选项，并为后续实现实际排序功能做准备。

**知识树**

1.  组件创建 (`SortSelector.tsx`):
    - 结构与 `PlatformSelector.tsx` 类似，使用 Chakra UI 的 `Menu`, `MenuButton`, `Button`, `MenuList`, `MenuItem`。
    - `MenuButton` 初始标签可设为静态文本，如 "Order by: Relevance"。
2.  排序选项定义:
    - 在 `SortSelector.tsx` 内部定义一个 `sortOrders` 数组。
    - 每个数组成员是一个对象，包含：
        - `value: string`: 发送给后端的排序参数值 (例如 `""` for relevance, `"-added"` for newest, `"name"`, `"-released"`, `"-metacritic"`, `"-rating"`)。
        - `label: string`: 在下拉菜单中向用户显示的文本 (例如 "Relevance", "Date added", "Name")。
3.  动态渲染菜单项:
    - 遍历 `sortOrders` 数组，为每个排序选项渲染一个 `MenuItem`。
    - `MenuItem` 的 `key` 和 `value` (自定义属性，或直接在 onClick 中使用) 可设为 `order.value`，显示的文本为 `order.label`。
4.  集成与布局 (`App.tsx`):
    - 将 `SortSelector` 组件添加到主布局中，通常与 `PlatformSelector` 相邻。
    - 使用 Chakra UI `HStack` (或 `Flex`，见后续章节修复) 包裹 `PlatformSelector` 和 `SortSelector`，并设置 `spacing` 以添加它们之间的间距。
    - 为 `HStack` (或其父容器) 添加 `paddingLeft` 和 `marginBottom` 以调整其与页面其他元素的对齐和间距。

**代码示例**

1.  `components/SortSelector.tsx`:

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

2.  `App.tsx` - 集成 `SortSelector` 并调整布局:

    ```tsx
    // import SortSelector from './components/SortSelector';
    // import { HStack, Box } from '@chakra-ui/react'; // Box 用于后续章节的 Flex 布局调整

    function App() {
      // ... gameQuery state ...
      return (
        <Grid /* ... */ >
          {/* ... */}
          <GridItem area="main">
            <HStack spacing={5} paddingLeft={2} marginBottom={5}> {/* 使用 HStack 包裹 */}
              <PlatformSelector /* ... */ />
              <SortSelector
                // onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} 后续章节添加
                // sortOrder={gameQuery.sortOrder} 后续章节添加
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    ```

## 27- 游戏排序

> 简述：实现基于用户所选排序条件动态排列游戏列表的功能。此机制将排序逻辑整合到现有的`GameQuery`对象和数据获取流程中。

**知识树**

1.  `GameQuery` 扩展:
    - 在 `App.tsx` 中定义的 `GameQuery` 接口中添加 `sortOrder: string` 属性 (或 `string | null` 如果允许未排序状态)。
2.  组件通信 (`SortSelector.tsx` -> `App.tsx`):
    - `SortSelector.tsx`:
        - 接收 `onSelectSortOrder: (sortOrder: string) => void` 回调 prop。
        - 接收 `sortOrder: string` (或 `string | null`) prop 用于更新按钮标签。
        - 当用户点击 `MenuItem` 时，调用 `onSelectSortOrder` 并传入所选排序选项的 `value`。
        - `MenuButton` 的文本动态显示为当前选中排序选项的 `label` 或默认 "Relevance"。
    - `App.tsx`:
        - 向 `SortSelector` 传递更新 `gameQuery.sortOrder` 的回调函数和 `gameQuery.sortOrder` 本身。
        - `setGameQuery({ ...gameQuery, sortOrder: newSortOrder })`。
3.  数据获取逻辑调整 (`hooks/useGames.ts`):
    - 从 `gameQuery` 对象中获取 `sortOrder`。
    - 将 `gameQuery.sortOrder` 作为查询参数 `ordering` 传递给 `useData.ts` (通过 `requestConfig.params`)。
    - 由于 `useGames` 的 `useEffect` 依赖项已是整个 `gameQuery` 对象，当 `sortOrder` 变化导致 `gameQuery` 引用变化时，会自动触发数据重新获取。
4.  API 参数: RAWG API `/games` 端点接受 `ordering` 查询参数。值可以是字段名 (如 `name`, `released`, `added`, `metacritic`, `rating`)。前缀 `-` 表示降序排列 (例如 `-added` 表示按添加日期降序，即最新添加的在前)。
5.  临时错误处理 (`services/image-url.ts`):
    - 在 `getCroppedImageUrl` 函数中增加对 `url` 参数为假值 (falsy) 的检查。如果 `url` 无效，则返回空字符串，以临时避免因某些游戏缺少图像数据而导致的渲染错误。此问题将在后续章节专门处理。

**代码示例**

1.  `App.tsx` - 更新 `GameQuery` 及与 `SortSelector` 的交互:

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

2.  `components/SortSelector.tsx` - 回调与动态标签:

    ```tsx
    interface Props {
      onSelectSortOrder: (sortOrder: string) => void;
      sortOrder: string; // 接收当前排序值
    }

    const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
      const sortOrders = [ /* ... */ ];
      const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

      return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortOrder?.label || 'Relevance'} {/* 动态标签 */}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                key={order.value}
                onClick={() => onSelectSortOrder(order.value)} // 调用回调
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    };
    ```

3.  `hooks/useGames.ts` - 应用排序参数:

    ```tsx
    const useGames = (gameQuery: GameQuery) => {
      return useData<Game>(
        '/games',
        {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder, // 新增排序参数
          },
        },
        [gameQuery]
      );
    };
    ```

4.  `services/image-url.ts` - 临时修复无图像 URL 问题:

    ```ts
    const getCroppedImageUrl = (url: string) => {
      if (!url) return ''; // 如果 URL 为假值，返回空字符串

      const target = 'media/';
      const index = url.indexOf(target) + target.length;
      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    };
    ```

## 28- 处理无图像游戏

> 简述：为那些 API 未提供背景图像的游戏，在游戏卡片中显示一个预设的占位符图像，以改善用户界面的视觉一致性和完整性。

**知识树**

1.  占位符图像资源:
    - 准备一个占位符图像文件 (例如 `no-image-placeholder.webp`)。
    - 将此图像文件放置在项目的 `src/assets` 文件夹中。
2.  图像 URL 处理逻辑更新 (`services/image-url.ts`):
    - 在 `getCroppedImageUrl` 函数的顶部，像导入模块一样导入占位符图像：
        `import noImagePlaceholder from '../assets/no-image-placeholder.webp';`
    - 修改函数逻辑：当传入的 `url` 参数为假值 (falsy, 例如 `null`, `undefined`, 或空字符串) 时，函数不再返回空字符串，而是返回导入的 `noImagePlaceholder` 图像路径。
3.  应用效果:
    - 当 `GameCard.tsx` 尝试为没有 `background_image` 的游戏渲染图像时，`getCroppedImageUrl` 将提供占位符图像的路径，从而在卡片上显示该占位符。

**代码示例**

1.  `services/image-url.ts` - 使用占位符图像:

    ```ts
    import noImagePlaceholder from '../assets/no-image-placeholder.webp'; // 导入占位符图像

    const getCroppedImageUrl = (url: string) => {
      if (!url) return noImagePlaceholder; // 如果 URL 为假值，返回占位符图像路径

      const target = 'media/';
      const index = url.indexOf(target) + target.length;
      // 确保裁剪逻辑只在有效 URL 上执行
      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    };

    export default getCroppedImageUrl;
    ```

    - 确保 `no-image-placeholder.webp` 文件存在于 `src/assets/` 目录下。

## 29- 修复 Chakra 菜单问题

> 简述：解决在 Chakra UI 的`Menu`组件（用于平台选择器和排序选择器）被`HStack`组件（带有`spacing`属性）包裹时，浏览器控制台出现的特定 CSS 警告。通过替换布局组件并手动调整间距来修复此问题。

**知识树**

1.  问题识别:
    - 当 `PlatformSelector` 和 `SortSelector` (均使用 Chakra UI `Menu`) 被一个设置了 `spacing` 属性的 `HStack` 包裹时，控制台输出警告："CSS margin styles cannot be used to apply padding..."。
    - 此警告与 `Menu` 组件内部使用的 Popper.js 定位机制和 `HStack` 通过 `margin` 实现 `spacing` 的方式冲突有关。
2.  解决方案:
    - 在 `App.tsx` 中，将包裹 `PlatformSelector` 和 `SortSelector` 的 `HStack` 组件替换为 Chakra UI 的 `Flex` 组件。
    - `Flex` 组件本身不通过 `margin` 自动添加子元素间距。
    - 移除原 `HStack` 的 `spacing` 属性。
3.  手动调整间距:
    - 为了恢复选择器之间的间距，可以将其中一个选择器 (例如 `PlatformSelector`) 用 Chakra UI 的 `Box` 组件包裹。
    - 为该 `Box` 组件设置 `marginRight` (或 `marginLeft`，取决于包裹的是哪个选择器和期望的间距方向) 来创建所需的空间。例如，`marginRight={5}`。
4.  效果:
    - 保持了选择器水平排列的布局。
    - 消除了控制台的 CSS 警告。

**代码示例**

1.  `App.tsx` - 使用 `Flex` 和 `Box` 替代 `HStack` 进行布局:

    ```tsx
    import { Flex, Box } from '@chakra-ui/react'; // 导入 Flex 和 Box

    function App() {
      // ... gameQuery state ...
      return (
        <Grid /* ... */ >
          {/* ... */}
          <GridItem area="main">
            {/* 将 HStack 替换为 Flex */}
            <Flex paddingLeft={2} marginBottom={5}>
              <Box marginRight={5}> {/* 包裹 PlatformSelector 并添加右边距 */}
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </Flex>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    ```

## 30- 构建搜索输入框

> 简述：在导航栏中添加一个用于游戏搜索的输入框组件 (`SearchInput`)。使用 Chakra UI 的`Input`, `InputGroup`, 和 `InputLeftElement` 构建 UI，并集成搜索图标。

**知识树**

1.  组件创建 (`SearchInput.tsx`):
    - 使用 Chakra UI `Input` 组件。
        - `borderRadius`: 设置圆角 (例如 `"20px"`)。
        - `placeholder`: 设置占位文本 (例如 "Search games...")。
        - `variant="filled"`: 使用填充样式，使输入框外观更佳。
2.  图标集成:
    - 使用 Chakra UI `InputGroup` 包裹 `Input` 组件。
    - 使用 Chakra UI `InputLeftElement` 在输入框左侧添加图标。
        - `children`: 设置为图标组件，例如 `BsSearch` (来自 `react-icons/bs`)。
3.  集成到导航栏 (`Navbar.tsx`):
    - 将 `SearchInput` 组件添加到 `Navbar` 的 `HStack` 中，通常位于 Logo 之后。
4.  布局调整 (`ColorModeSwitch.tsx`):
    - 为 `ColorModeSwitch` 中的 `Text` 组件设置 `whiteSpace="nowrap"`，防止因空间不足导致文本换行。
5.  导航栏布局 (`Navbar.tsx`):
    - 移除之前为两个元素设置的 `HStack` 的 `justifyContent="space-between"`，因为现在有三个或更多元素，默认的水平排列即可。
6.  响应式检查: 确保搜索输入框在不同设备尺寸下显示正常。

**代码示例**

1.  `components/SearchInput.tsx`:

    ```tsx
    import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
    import { BsSearch } from 'react-icons/bs'; // 导入搜索图标

    const SearchInput = () => {
      return (
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
      );
    };

    export default SearchInput;
    ```

2.  `components/Navbar.tsx` (集成 `SearchInput`):

    ```tsx
    // ... imports ...
    import SearchInput from './SearchInput'; // 导入 SearchInput

    const Navbar = () => {
      return (
        // 移除了 justifyContent="space-between"
        <HStack paddingX="10px">
          <Image src={logo} boxSize="60px" />
          <SearchInput /> {/* 添加搜索输入框 */}
          <ColorModeSwitch />
        </HStack>
      );
    };
    ```

3.  `components/ColorModeSwitch.tsx` (防止文本换行):
    ```tsx
    // ... imports ...
    const ColorModeSwitch = () => {
      // ... useColorMode ...
      return (
        <HStack>
          <Switch /* ... */ />
          <Text whiteSpace="nowrap">Dark Mode</Text> {/* 添加 whiteSpace */}
        </HStack>
      );
    };
    ```

## 31- 搜索游戏

> 简述：实现游戏搜索功能。用户在`SearchInput`中输入文本并提交（按 Enter 键）后，应用会根据搜索词筛选游戏。涉及使用`useRef`获取输入值，通过 prop 回调传递搜索词，更新`GameQuery`，并修改`useGames`钩子以包含搜索参数。

**知识树**

1.  表单处理 (`SearchInput.tsx`):
    - 将 `InputGroup` 包裹在 HTML `<form>` 元素内。
    - 处理表单的 `onSubmit` 事件。
        - 调用 `event.preventDefault()` 阻止表单默认提交行为。
2.  获取输入值 (`useRef`):
    - 使用 `useRef<HTMLInputElement>(null)` 创建一个 ref 对象，用于引用`Input`组件底层的 HTML 输入元素。
    - 将此 ref 对象赋给 Chakra UI `Input` 组件的 `ref` prop。
    - 在 `onSubmit` 处理函数中，通过 `ref.current?.value` 获取输入框的值。
3.  回调传递搜索词:
    - `SearchInput` 组件:
        - 添加 `onSearch: (searchText: string) => void` prop。
        - 在表单提交时，如果 `ref.current?.value` 存在，则调用 `onSearch(ref.current.value)`。
    - Prop 逐级传递:
        - `App.tsx` -> `Navbar.tsx` -> `SearchInput.tsx`。
        - `Navbar.tsx` 需要添加 `onSearch` prop 并将其透传给 `SearchInput`。
        - （视频中提到这种深层 prop 传递不理想，高级主题中会介绍更优雅的解决方案，如状态管理库或 Context API）。
4.  `GameQuery` 更新 (`App.tsx`):
    - 为 `GameQuery` 接口添加 `searchText?: string` 属性。
    - 在 `App` 组件中，当 `onSearch` 回调被触发时，使用 `setGameQuery({ ...gameQuery, searchText })` 更新查询对象。
5.  `useGames.ts` 钩子修改:
    - 从 `gameQuery` 对象中获取 `searchText`。
    - 在 `useData` 的 `requestConfig.params` 中添加 `search: gameQuery.searchText`。API 使用 `search` 参数进行文本搜索。
    - `gameQuery` 整体已是 `useData` 的依赖项，`searchText` 的变化会自动触发数据重新获取。
6.  全局样式修复 (`index.css`):
    - 视频中提到，在 `SearchInput` 外层添加 `<form>` 后可能导致布局问题（宽度未占满）。
    - 通过在 `index.css` 中为 `form` 元素添加 `width: 100%;` 规则来解决。

**代码示例**

1.  `components/SearchInput.tsx` (表单处理与回调):

    ```tsx
    import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
    import { FormEvent, useRef } from 'react'; // 导入 useRef 和 FormEvent
    import { BsSearch } from 'react-icons/bs';

    interface Props {
      onSearch: (searchText: string) => void;
    }

    const SearchInput = ({ onSearch }: Props) => {
      const ref = useRef<HTMLInputElement>(null);

      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      };

      return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}> {/* 临时内联样式，后改为全局 */}
          <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input
              ref={ref} // 关联 ref
              borderRadius={20}
              placeholder="Search games..."
              variant="filled"
            />
          </InputGroup>
        </form>
      );
    };

    export default SearchInput;
    ```

2.  `index.css` (全局样式):

    ```css
    /* ... 其他样式 ... */
    form {
      width: 100%;
    }
    ```

3.  `components/Navbar.tsx` (透传 `onSearch` prop):

    ```tsx
    // ... imports ...
    interface Props { // Navbar 现在也需要 Props
      onSearch: (searchText: string) => void;
    }

    const Navbar = ({ onSearch }: Props) => { // 接收 onSearch
      return (
        <HStack paddingX="10px">
          <Image src={logo} boxSize="60px" />
          <SearchInput onSearch={onSearch} /> {/* 传递 onSearch */}
          <ColorModeSwitch />
        </HStack>
      );
    };
    ```

4.  `App.tsx` (更新 `GameQuery` 和传递回调):

    ```tsx
    export interface GameQuery {
      // ... genre, platform, sortOrder ...
      searchText?: string; // 添加 searchText
    }

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ... */ >
          <GridItem area="nav">
            <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} /> {/* 传递回调 */}
          </GridItem>
          {/* ... Aside ... */}
          <GridItem area="main">
            {/* ... PlatformSelector, SortSelector ... */}
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    ```

5.  `hooks/useGames.ts` (添加 `search` 参数):
    ```tsx
    // ... GameQuery 导入 ...
    const useGames = (gameQuery: GameQuery) => {
      return useData<Game>(
        '/games',
        {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText, // 添加搜索参数
          },
        },
        [gameQuery]
      );
    };
    ```

## 32- 添加动态标题

> 简述：在游戏列表上方添加一个动态标题 (`GameHeading`)，该标题能根据当前应用的筛选条件（如选中的类型、平台）自动更新，以反映当前显示的游戏内容。

**知识树**

1.  组件创建 (`GameHeading.tsx`):
    - 使用 Chakra UI `Heading` 组件显示标题文本。
        - `as="h1"`: 指定渲染为 `<h1>` 标签，符合语义。
        - `marginY`, `fontSize`: 调整标题的垂直外边距和字体大小。
2.  Props 接收:
    - 接收 `gameQuery: GameQuery` 对象作为 prop，以便访问当前的筛选条件。
3.  动态标题逻辑:
    - 根据 `gameQuery` 中的 `platform` 和 `genre` 属性构建标题字符串。
    - 基本格式: `[平台名称] [类型名称] Games`。
    - 使用模板字符串和可选链 (`?.`) 处理平台或类型未选中的情况 (此时其值为 `null`)，避免渲染 "undefined"。
        - 例如: `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`.
        - `|| ''` 确保如果名称不存在，则插入空字符串。
4.  集成到主应用 (`App.tsx`):
    - 将 `GameHeading` 组件放置在主内容区 (`GridItem area="main"`) 的选择器组 (`Flex` 或 `HStack`) 上方。
    - 将当前的 `gameQuery` 对象作为 prop 传递给 `GameHeading`。
5.  布局对齐:
    - 问题：`GameHeading` 的左侧可能与下方的筛选器和游戏卡片不对齐。
    - 解决方案：将 `GameHeading` 和包含筛选器的 `Flex` (或 `HStack`) 组件一起包裹在一个新的 `Box` 组件中。然后，将原先应用于 `Flex` 的 `paddingLeft` 样式移至这个外层 `Box` 上，从而使标题和筛选器组共享相同的左内边距。

**代码示例**

1.  `components/GameHeading.tsx`:

    ```tsx
    import { Heading } from '@chakra-ui/react';
    import { GameQuery } from '../App'; // 导入 GameQuery 接口

    interface Props {
      gameQuery: GameQuery;
    }

    const GameHeading = ({ gameQuery }: Props) => {
      const platformName = gameQuery.platform?.name || '';
      const genreName = gameQuery.genre?.name || '';

      // 构建标题，确保在只有平台或只有类型时，或两者都没有时，文本仍然合理
      // 例如，避免出现 " Platform Games" 或 " Genre Games" 或 "  Games"
      let headingText = '';
      if (platformName) headingText += platformName + ' ';
      if (genreName) headingText += genreName + ' ';
      headingText += 'Games';


      return (
        <Heading as="h1" marginY={5} fontSize="5xl">
          {headingText.trim()} {/* trim() 移除可能的前后多余空格 */}
        </Heading>
      );
    };

    export default GameHeading;
    ```

    _视频中的简单模板字符串 `${platformName} ${genreName} Games` 在只有一方或双方都为空时，可能会产生多余空格。上述代码做了简单优化。_

2.  `App.tsx` (集成 `GameHeading` 并调整布局):

    ```tsx
    // ... imports ...
    import GameHeading from './components/GameHeading';
    import { Box } from '@chakra-ui/react'; // 导入 Box

    function App() {
      const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

      return (
        <Grid /* ... */ >
          {/* ... Nav, Aside GridItems ... */}
          <GridItem area="main">
            <Box paddingLeft={2}> {/* 外层 Box 应用 paddingLeft */}
              <GameHeading gameQuery={gameQuery} /> {/* 添加动态标题 */}
              <Flex marginBottom={5}> {/* 移除 Flex 上的 paddingLeft */}
                <Box marginRight={5}>
                  <PlatformSelector /* ... */ />
                </Box>
                <SortSelector /* ... */ />
              </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      );
    }
    ```

## 33- 清理类型列表样式

> 简述：改进侧边栏中游戏类型列表的视觉表现和可读性。包括处理长文本换行、文本对齐、图像宽高比以及添加列表标题。

**知识树**

1.  文本换行与对齐 (`GenreList.tsx` - 类型按钮):
    - 问题：长类型名称（如 "Massively Multiplayer"）在按钮中可能不换行或与图像重叠。按钮内文本默认可能居中对齐。
    - `Button` 组件样式:
        - `whiteSpace="normal"`: 允许文本在按钮内正常换行 (覆盖按钮默认的 `nowrap`)。
        - `textAlign="left"`: 使按钮内文本左对齐，与列表项中的图像对齐。
2.  图像宽高比 (`GenreList.tsx` - 类型图像):
    - 问题：不同类型的图像可能有不同的原始宽高比，导致在固定尺寸 (`boxSize`) 的 `Image` 组件中显示时被拉伸或压缩。
    - `Image` 组件样式:
        - `objectFit="cover"`: 缩放图像以保持其宽高比，同时填充元素的整个内容框。如果对象的宽高比与内容框不匹配，则对象将被裁剪以适应。
3.  列表标题 (`GenreList.tsx`):
    - 在类型列表 (`List`) 的上方添加一个 Chakra UI `Heading` 组件作为列表标题 (例如，文本为 "Genres")。
    - `Heading` 样式:
        - `fontSize` (例如 `"2xl"`) 调整标题大小。
        - `marginBottom` (例如 `3`) 在标题和列表之间添加垂直间距。
    - 由于现在 `GenreList` 返回多个顶级元素 (`Heading` 和 `List`)，需要用 React Fragment (`<>...</>`) 或一个共同的父元素 (如 `Box`) 包裹它们。

**代码示例**

1.  `components/GenreList.tsx` (样式改进):

    ```tsx
    import {
      Button, Heading, HStack, Image, List, ListItem, Spinner, Text,
    } from '@chakra-ui/react';
    // ... 其他导入 ...

    const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres();

      if (error) return null;
      if (isLoading && genres.length === 0) return <Spinner />; // 仅当没有缓存数据时显示 Spinner

      return (
        <> {/* 使用 Fragment 包裹 */}
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
                    objectFit="cover" // 保持宽高比并填充
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                  />
                  <Button
                    whiteSpace="normal" // 允许文本换行
                    textAlign="left"    // 文本左对齐
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
    ```

    _注意：视频中 `isLoading` 的判断条件是 `isLoading`，但考虑到后续可能实现静态数据加载，此处修改为 `isLoading && genres.length === 0`，即仅在真正加载且无数据显示时才显示 Spinner。如果类型列表是静态数据，则 `isLoading` 始终为 `false`。_

## 34- 清理游戏卡片样式

> 简述：调整游戏卡片 (`GameCard`) 内部元素的布局顺序和间距，以及游戏网格 (`GameGrid`) 中卡片之间的间距，以优化视觉效果和信息层级。

**知识树**

1.  卡片内部元素顺序 (`GameCard.tsx`):
    - 将游戏名称 (`Heading`) 移动到平台图标和评价分数 (`HStack`) 之后。
    - 原顺序：名称 -> (图标 + 分数)。
    - 新顺序：(图标 + 分数) -> 名称。
2.  卡片内间距 (`GameCard.tsx`):
    - 为包含平台图标和评价分数的 `HStack` 组件添加 `marginBottom` (例如 `3`)，使其与下方的游戏名称之间有适当的垂直间距。
3.  游戏网格间距 (`GameGrid.tsx`):
    - 增加 `SimpleGrid` 组件的 `spacing` 属性值 (例如从 `3` 改为 `6`)，以增大游戏卡片之间的水平和垂直间距，使页面布局更疏朗。
4.  导航栏内边距调整 (`Navbar.tsx` - 视频中提及的次要调整):
    - 减少导航栏 `HStack` 的 `paddingX` (例如从 `"10px"` 改为 `"0"` 或较小值)，如果之前的内边距显得过大或与其他元素不对齐。视频中似乎是减少了内边距，以使内容更贴近边缘或与其他全局内边距协调。

**代码示例**

1.  `components/GameCard.tsx` (调整元素顺序和间距):

    ```tsx
    // ... imports ...
    // Emoji 组件 (下一节内容) 暂不包含

    const GameCard = ({ game }: Props) => {
      return (
        <CardContainer>
          <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
              <HStack justifyContent="space-between" marginBottom={3}> {/* HStack 现在有 marginBottom */}
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />
              </HStack>
              <Heading fontSize="2xl">{game.name}</Heading> {/* Heading 移到 HStack 之后 */}
              {/* Emoji (下一节) */}
            </CardBody>
          </Card>
        </CardContainer>
      );
    };
    ```

2.  `components/GameGrid.tsx` (调整卡片间距):

    ```tsx
    // ... imports ...
    const GameGrid = ({ gameQuery }: Props) => {
      // ... useGames ...
      return (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6} // 增加 spacing 值
          padding="10px" // padding 保持或按需调整
        >
          {/* ... 卡片渲染逻辑 ... */}
        </SimpleGrid>
      );
    };
    ```

3.  `components/Navbar.tsx` (可选的内边距调整):
    ```tsx
    const Navbar = ({ onSearch }: Props) => {
      return (
        <HStack paddingX={0}> {/* 示例：减少或移除 paddingX */}
          {/* ... Logo, SearchInput, ColorModeSwitch ... */}
        </HStack>
      );
    };
    ```

## 35- 添加表情符号

> 简述：根据游戏的顶级评分 (`rating_top`) 在游戏卡片上显示不同的表情符号（Emoji），为用户界面增添趣味性和直观的评价反馈。

**知识树**

1.  API 数据: 游戏对象包含 `rating_top` 属性，这是一个整数，通常范围是 1 到 5，代表游戏的顶级评分。
2.  接口更新 (`Game` 接口):
    - 为 `Game` 接口添加 `rating_top: number` 属性。
3.  表情符号图像资源:
    - 准备代表不同评分等级的表情符号图像 (例如：差评 `meh.webp`, 一般/推荐 `thumbs-up.webp`, 优秀 `bulls-eye.webp`)。
    - 将这些图像放置在 `src/assets` 文件夹中。
4.  组件创建 (`Emoji.tsx`):
    - Props: `rating: number` (对应 `game.rating_top`)。
    - 静态资源导入: 像导入模块一样导入表情符号图像。
5.  Emoji 映射对象 (`emojiMap`):
    - 索引签名 :` { [key: string]: ImageProps }`:这意味着 emojiMap 是一个对象，它的键是字符串类型（ string ），值是 ImageProps 类型（Chakra UI 的 Image 组件的属性类型）。
        - 键: 评分数字 (例如 `3`, `4`, `5`)。实际上是字符创
        - 值: 一个对象，包含 Chakra UI `Image` 组件所需的 props，如 `src` (导入的图像变量), `alt` (可访问性文本), 和 `boxSize` (动态调整不同表情符号的显示大小，以求视觉均衡)。
        - `emojiMap` 类型注解: `[key: number]: ImageProps` (其中 `ImageProps` 从 `@chakra-ui/react` 导入)，以解决 TypeScript 索引签名问题。
    - 渲染逻辑:
        - 如果 `rating < 3` (或某个阈值)，则不渲染任何内容 (返回 `null`)。
        - 否则，使用 `rating` 作为键从 `emojiMap` 中查找对应的图像属性对象。
        - 渲染 Chakra UI `Image` 组件，并使用扩展运算符 (`...`) 将从 `emojiMap` 中获取的属性对象应用到 `Image` 上。
        - 为 `Image` 组件添加 `marginTop` (例如 `1` 或 `2`)，使其与上方的游戏名称有间距。
6.  集成到游戏卡片 (`GameCard.tsx`):
    - 在游戏名称 (`Heading`) 之后渲染 `Emoji` 组件。
    - 将 `game.rating_top` 作为 `rating` prop 传递给 `Emoji` 组件。

**代码示例**

1.  `hooks/useGames.ts` (或相关类型文件) - 更新 `Game` 接口:

    ```ts
    export interface Game {
      // ...其他属性...
      rating_top: number; // 添加 rating_top
    }
    ```

2.  `components/Emoji.tsx`:

    ```tsx
    import { Image, ImageProps } from '@chakra-ui/react'; // 导入 ImageProps
    import bullsEye from '../assets/bulls-eye.webp';
    import thumbsUp from '../assets/thumbs-up.webp';
    import meh from '../assets/meh.webp';

    interface Props {
      rating: number;
    }

    const Emoji = ({ rating }: Props) => {
      if (rating < 3) return null; // 低于3分不显示表情

      const emojiMap: { [key: number]: ImageProps } = { // key 是数字
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' }, // bullseye 可能需要更大尺寸
      };

      return <Image {...emojiMap[rating]} marginTop={1} />; // marginTop 添加间距
    };

    export default Emoji;
    ```

    _确保图像文件已放置在 `src/assets` 目录下。_

3.  `components/GameCard.tsx` (集成 `Emoji` 组件):

    ```tsx
    // ... imports ...
    import Emoji from './Emoji'; // 导入 Emoji 组件

    const GameCard = ({ game }: Props) => {
      return (
        <CardContainer>
          <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
              <HStack justifyContent="space-between" marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />
              </HStack>
              <Heading fontSize="2xl">
                {game.name}
                <Emoji rating={game.rating_top} /> {/* 添加 Emoji 组件 */}
              </Heading>
            </CardBody>
          </Card>
        </CardContainer>
      );
    };
    ```

## 35.1- 拓展-as 的用法

> 在 React 生态中，`as` prop 是一个常见的模式，尤其在使用了 CSS-in-JS 库（如 Styled Components, Emotion）或组件库（如 Chakra UI, Material-UI）时。它提供了一种灵活的方式来改变一个组件最终渲染的底层 HTML 元素或另一个 React 组件，同时保留该组件原有的样式和行为。

**核心作用：多态组件 (Polymorphic Components)**

`as` prop 的核心作用是创建“多态组件”。这意味着一个组件可以“扮演”不同的角色或渲染成不同的标签，而不需要为每种可能性都创建一个全新的组件。

**常见用法和场景：**

1.  **改变底层 HTML 标签：**
    这是最常见的用法。假设你有一个自定义的 `Button` 组件，它默认可能渲染为一个 `<button>` HTML 元素。但有时你可能希望它在语义上是一个链接 (`<a>`)，同时保持按钮的样式和行为。

    ```jsx
    // 假设 Button 组件支持 as prop
    <Button as="a" href="/some-link">
    	Click me (I'm a link styled as a button)
    </Button>

    // 渲染结果可能类似于：
    // <a class="button-styles" href="/some-link">Click me...</a>
    ```

    在这个例子中，<mcfile name="PlatformIconList.tsx" path="/Users/fang/Desktop/lifeDev/React/game-hub/src/components/PlatformIconList.tsx"></mcfile> 中的 `<Icon as={iconMap[p.slug]} />` 就是一个很好的例子。Chakra UI 的 `Icon` 组件本身可能是一个通用的图标容器，通过 `as` prop，你告诉它具体要渲染成 `react-icons` 库中的哪个特定图标组件（如 `FaWindows`, `FaPlaystation` 等）。

2.  **渲染成另一个 React 组件：**
    `as` prop 不仅限于 HTML 标签，它也可以接受另一个 React 组件作为值。这在你想要用一个组件的样式和行为来包装另一个组件时非常有用。

    ```jsx
    import { Link as RouterLink } from "react-router-dom";

    // 假设 MyStyledComponent 支持 as prop
    <MyStyledComponent as={RouterLink} to="/profile">
    	View Profile
    </MyStyledComponent>;

    // 渲染结果会是 React Router 的 Link 组件，但应用了 MyStyledComponent 的样式
    ```

    这在集成路由库时特别常见，你希望你的自定义按钮或链接组件能够利用路由库的导航功能。

3.  **在 UI 组件库中的应用 (如 Chakra UI)：**
    像 Chakra UI 这样的库广泛使用 `as` prop 来提供极大的灵活性。几乎所有的 Chakra UI 组件都支持 `as` prop。

    - **`Box` 组件**：`Box` 是 Chakra UI 中最基础的布局组件，默认渲染为 `div`。你可以用 `as` 改变它：

        ```jsx
        <Box as="nav"> {/* 渲染为 <nav> 元素 */}
          {/* Navigation items */}
        </Box>
        <Box as="main"> {/* 渲染为 <main> 元素 */}
          {/* Page content */}
        </Box>
        ```

    - **`Text` 组件**：默认渲染为 `<p>`，但可以改为 `<span>`, `<h1>`, `<h2>` 等。

        ```jsx
        <Text as="h1" fontSize="2xl">Page Title</Text>
        <Text as="span" color="gray.500">Helper text</Text>
        ```

    - **`Button` 组件**：如前所述，可以渲染为 `<a>` 或与其他路由链接组件集成。

**`as` prop 的优势：**

- **代码复用性**：避免为细微的 HTML 标签或组件差异创建大量相似的组件。一个组件可以通过 `as` prop 适应多种场景。
- **语义化 HTML**：允许你使用最符合内容语义的 HTML 标签，同时保持一致的视觉样式。
- **灵活性和可组合性**：使得组件更容易与其他库或自定义组件集成。
- **保持 Props 传递**：通常，当使用 `as` prop 时，传递给原组件的 props（除了 `as` 本身）会被智能地传递给最终渲染的元素或组件。例如，如果 `<Button as="a" href="...">`，`href` 属性会被正确应用到 `<a>` 标签上。

**实现 `as` prop (简要概念)：**

在自定义组件中实现 `as` prop 通常涉及以下步骤：

1.  接收 `as` prop，并给它一个默认值（例如，组件通常渲染的标签）。
2.  将 `as` prop 的值用作 `React.createElement` 的第一个参数，或者在 JSX 中直接使用它作为标签名。
3.  将其他所有 props 传递给这个动态创建的元素/组件。

```jsx
// 极简化的自定义组件示例
const MyComponent = ({ as: Component = 'div', children, ...restProps }) => {
  return <Component {...restProps}>{children}</Component>;
};

// 用法
<MyComponent>Hello</MyComponent> // 渲染为 <div>Hello</div>
<MyComponent as="span">World</MyComponent> // 渲染为 <span>World</span>
```

**TypeScript 中的 `as` prop：**

在 TypeScript 中正确地为支持 `as` prop 的多态组件定义类型会比较复杂，因为它需要处理动态的元素类型和相应的属性。通常会用到泛型和一些高级类型技巧来确保类型安全。

**总结：**

`as` prop 是 React 组件设计中一个强大且灵活的模式，它允许开发者在不牺牲代码复用性和一致性的前提下，控制组件最终渲染的形态。它在现代 UI 库中被广泛采用，以提供更强的语义化和组合能力。在你提供的 <mcfile name="PlatformIconList.tsx" path="/Users/fang/Desktop/lifeDev/React/game-hub/src/components/PlatformIconList.tsx"></mcfile> 例子中，`as={iconMap[p.slug]}` 正是利用了这个特性，让通用的 `Icon` 组件能够根据数据动态地渲染出不同的具体图标组件。

## 36- 打包静态数据

> 简述：将不常变化的游戏类型数据（Genres）直接包含在应用代码中作为静态数据，而不是每次都从 API 获取。这样可以减少 API 请求，加快类型列表的显示速度，并移除相关的加载指示器（Spinner）。

**知识树**

1.  数据识别: 游戏类型列表变化频率低，适合作为静态数据。
2.  获取静态数据:
    - 通过浏览器开发者工具的网络(Network)标签，找到获取 `/genres` 的 API 请求。
    - 复制响应体中 `results` 数组的值。
3.  创建数据文件:
    - 在 `src` 目录下创建 `data` 文件夹。
    - 在 `src/data` 中创建 `genres.ts` 文件。
    - 在 `genres.ts` 中，`export default` 粘贴的类型数据数组。
4.  修改数据获取钩子 (`hooks/useGenres.ts`):
    - 移除原先使用 `useData` (或 `apiClient`) 从 API 获取类型的逻辑。
    - 直接导入 `src/data/genres.ts` 中的静态数据。
    - 为了保持钩子对消费组件的接口一致性（即仍然返回 `{ data, isLoading, error }` 结构），手动构造这个返回对象：
        - `data`: 设置为导入的静态类型数据。
        - `isLoading`: 设置为 `false`，因为数据是即时可用的。
        - `error`: 设置为 `null` (或空字符串)，因为没有 API 请求，不会发生获取错误。
5.  消费组件 (`GenreList.tsx`) 的影响:
    - 由于 `useGenres` 钩子的返回结构保持不变，`GenreList` 组件理论上不需要修改其数据解构和使用方式。
    - 可以移除 `GenreList` 中处理 `isLoading` 和 `error` 的逻辑（例如显示 Spinner 或错误信息），因为这些状态现在是固定的 (`false` 和 `null`)。但视频中建议保留这些逻辑，以防未来改回动态获取。
6.  平台列表的类似处理 (可选练习): 平台列表数据同样不常变化，也可以用此方法处理。

**代码示例**

1.  `src/data/genres.ts`:

    ```ts
    // 示例数据结构，实际应从API响应复制
    export default [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174179,
        "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
      },
      {
        "id": 51,
        "name": "Indie",
        "slug": "indie",
        // ...更多属性和类型对象...
      },
      // ... 更多类型对象
    ];
    ```

2.  `hooks/useGenres.ts` (使用静态数据):

    ```ts
    // import useData from './useData'; // 不再需要 useData
    import staticGenres from '../data/genres'; // 导入静态数据
    import { Genre } from './useGames'; // 假设 Genre 接口定义在 useGames 或共享文件

    const useGenres = () => {
      return {
        data: staticGenres as Genre[], // 类型断言，确保符合 Genre[]
        isLoading: false,
        error: null,
      };
    };

    export default useGenres;
    // Genre 接口定义 (如果之前在此文件，现在可能移至共享类型文件或从 useGames 导入)
    // export interface Genre { id: number; name: string; image_background: string; /* ... */ }
    ```

3.  `components/GenreList.tsx` (可以简化，但视频建议保留):

    ```tsx
    // ... imports ...
    const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
      const { data: genres, isLoading, error } = useGenres(); // 钩子返回结构不变

      // 下面的 isLoading 和 error 判断理论上可以移除，因为它们现在是固定值
      // 但保留它们可以使得未来切换回动态获取时无需修改此组件
      if (error) return null;
      // if (isLoading) return <Spinner />; // Spinner 不再显示，因为 isLoading 总是 false

      return (
        <>
          <Heading fontSize="2xl" marginBottom={3}>
            Genres
          </Heading>
          <List>
            {/* ... genres.map(...) 逻辑不变 ... */}
          </List>
        </>
      );
    };
    ```

## 37- 自定义 Chakra 主题

> 简述：通过扩展 Chakra UI 的默认主题，特别是修改颜色调色板中的灰色系，来使应用的暗色模式与 RAWG 网站的深灰色调更加接近，以提升视觉一致性和美感。

**知识树**

1.  Chakra UI 主题定制:
    - 通过 `extendTheme` 函数扩展或覆盖默认主题配置。
    - 自定义配置在 `src/theme.ts` 文件中进行。
2.  颜色调色板:
    - Chakra UI 的默认主题包含多种颜色，每种颜色有不同的色阶 (shades)，通常从 `50` (最浅) 到 `900` (最深)。
    - 可以针对特定颜色 (如 `gray`) 提供一个全新的色阶对象来完全替换它。
3.  获取颜色值:
    - 可以使用颜色拾取工具 (如浏览器开发者工具的吸管) 从目标网站 (如 RAWG) 获取特定颜色的十六进制代码。
    - 可以使用在线调色板生成工具 (视频中提到 Smart Swatch) 基于一个基准颜色生成一套和谐的色阶。
4.  修改 `theme.ts`:
    - 在 `extendTheme` 的参数对象中，添加 `colors` 属性。
    - 在 `colors` 对象中，添加 `gray` 属性，其值为一个新的对象，该对象包含从 `50` 到 `900` 的所有灰色色阶及其对应的十六进制颜色值。
    - 例如:
        ```javascript
        const theme = extendTheme({
        	config, // 原有的 initialColorMode 等配置
        	colors: {
        		gray: {
        			50: "#f9f9f9", // 示例值
        			100: "#ededed",
        			// ...
        			800: "#1a202c", // 示例深灰色
        			900: "#121212", // 示例更深的灰色
        		},
        	},
        });
        ```
5.  影响范围: 修改主题中的颜色调色板会影响所有使用该颜色（及其色阶）的 Chakra UI 组件，以及通过主题系统（如 `color="gray.800"`）引用的自定义样式。

**代码示例**

1.  `src/theme.ts` (自定义灰色调色板):

    ```ts
    import { extendTheme, ThemeConfig } from '@chakra-ui/react';

    const config: ThemeConfig = {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    };

    const theme = extendTheme({
      config,
      colors: { // 添加自定义颜色
        gray: { // 覆盖默认的灰色系
          50: '#f9f9f9',  // 示例：非常浅的灰色 (亮色模式下可能用到)
          100: '#ededed',
          200: '#d3d3d3',
          300: '#b3b3b3',
          400: '#a0a0a0',
          500: '#898989',
          600: '#6c6c6c',
          700: '#202020', // 示例：开始变深的灰色 (暗色模式背景)
          800: '#121212', // 示例：更深的灰色 (暗色模式卡片等)
          900: '#080808', // 示例：最深的灰色
        },
        // 可以添加或覆盖其他颜色
      },
    });

    export default theme;
    ```

    _注意：上述颜色值为示例，实际应替换为从 RAWG 网站或调色板工具获取的期望颜色值。_

## 38- 重构游戏网格

> 简述：优化`GameGrid`组件的返回逻辑，当存在错误时直接返回错误信息，否则返回游戏网格。这样可以移除不必要的 React Fragment，使代码结构更清晰。

**知识树**

1.  条件返回 (Early Return):
    - 在组件函数体的早期，检查是否存在错误状态 (`error` prop 或从钩子获取的 `error` 状态)。
    - 如果存在错误，立即 `return` 一个显示错误信息的组件 (例如 Chakra UI `Text` 组件)。
2.  主内容渲染:
    - 如果错误检查未导致提前返回，则继续执行并 `return` 正常的游戏网格内容 (Chakra UI `SimpleGrid` 及其子组件)。
3.  移除 Fragment:
    - 由于现在错误情况和正常情况分别通过独立的 `return` 语句处理，它们不再是同一个 `return` 语句中的兄弟元素。
    - 因此，之前可能用于包裹错误文本和 `SimpleGrid` 的 React Fragment (`<>...</>`) 不再需要，可以移除。

**代码示例**

1.  `components/GameGrid.tsx` (重构后):

    ```tsx
    import { SimpleGrid, Text } from '@chakra-ui/react';
    import useGames from '../hooks/useGames'; // 或 useData
    import { GameQuery } from '../App';
    import GameCard from './GameCard';
    import GameCardSkeleton from './GameCardSkeleton';
    import GameCardContainer from './GameCardContainer';

    interface Props {
      gameQuery: GameQuery;
    }

    const GameGrid = ({ gameQuery }: Props) => {
      const { data: games, error, isLoading } = useGames(gameQuery);
      const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // 示例骨架数量

      if (error) { // 如果有错误，直接返回错误文本
        return <Text>{error}</Text>;
      }

      // 如果没有错误，返回游戏网格
      return (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // 响应式列数
          spacing={6}
          padding="10px"
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

## 39- 为生产环境构建

> 简述：执行应用的生产构建过程，检查构建时可能出现的 TypeScript 编译错误，并了解构建输出（`dist`文件夹）的含义。

**知识树**

1.  生产构建命令:
    - `npm run build` (通常由 Vite 或 Create React App 等脚手架工具在 `package.json` 的 `scripts` 中定义)。
2.  构建目的:
    - 将开发环境中的源代码（包括 TypeScript、JSX、CSS 预处理器文件等）转换为优化过的、可在浏览器中直接运行的静态资源（主要是 JavaScript、CSS 和 HTML 文件）。
    - 优化包括：代码压缩（minification）、代码分割（code splitting）、tree shaking（移除未使用代码）、TypeScript 编译为 JavaScript 等。
3.  构建时错误检查:
    - TypeScript 编译器 (`tsc`) 会在构建过程中检查类型错误。如果存在编译错误，构建会失败并报告错误信息。
    - 在部署前进行本地构建有助于及早发现并修复这些错误。
4.  VS Code 构建任务:
    - 可以通过 VS Code 的命令面板 (Mac: `Shift+Command+P`, Windows: `Shift+Control+P`) 运行构建任务。
    - 搜索 "Run Build Task" 并选择 `npm: build`。
    - 快捷键 (Mac: `Shift+Command+B`) 通常也配置为运行默认构建任务。
5.  构建输出 (`dist` 文件夹):
    - 构建成功后，会生成一个 `dist` (distributable 的缩写) 文件夹。
    - 此文件夹包含所有部署到生产服务器所需的静态文件。
    - 内容通常包括：
        - `index.html`: 应用的入口 HTML 文件。
        - JavaScript bundles (通常带有哈希值以利于缓存控制)。
        - CSS bundles (同样可能带有哈希值)。
        - 图像、字体等其他静态资源。
6.  Bundle 大小警告:
    - 构建过程可能会报告关于 bundle 大小的警告，尤其是当某些 chunk 超过预设阈值时。
    - 视频中提到，即使是简单应用，由于依赖（如 Chakra UI），bundle 大小也可能触发警告。Bundle 优化是更高级的主题。

**代码示例**

1.  执行构建命令 (在项目根目录的终端中):

    ```bash
    npm run build
    ```

2.  模拟编译错误 (示例，非实际操作):
    - 在任一 `.ts` 或 `.tsx` 文件中引入一个明显的类型错误，例如：
        ```typescript
        // 在 SortSelector.tsx 中
        // const onSelectSortOrder: (sortOrder: string) => void = () => {};
        // onSelectSortOrder(123); // 类型错误：期望 string，得到 number
        ```
    - 再次运行 `npm run build`，将会看到 TypeScript 编译错误导致构建失败。

## 40- 部署到 Vercel

> 简述：将构建好的 React 应用部署到 Vercel 平台，并配置与 GitHub 仓库的持续集成/持续部署 (CI/CD)，使得每次推送到 GitHub 时，Vercel 能自动构建和部署最新代码。

**知识树**

1.  Vercel 平台: 一个流行的用于部署前端应用和无服务器函数的平台，以其易用性和与现代前端框架的良好集成而闻名。
2.  部署选项:
    - Vite 文档 (`vitejs.dev/guide/static-deploy.html`) 列出了多种静态站点部署平台，如 Netlify, Vercel, GitHub Pages, Firebase 等。
3.  GitHub 仓库准备:
    - 为项目创建一个 GitHub 仓库。
    - 将本地 Git 仓库与远程 GitHub 仓库关联，并推送代码。
        - `git remote add origin <repository_url>`
        - `git branch -M main` (或 `master`)
        - `git push -u origin main` (或 `master`)
4.  Vercel CLI (命令行工具):
    - 安装: `npm install -g vercel` (全局安装)。
    - 在 Mac/Linux 上，如果遇到权限错误，使用 `sudo npm install -g vercel`。
5.  通过 Vercel CLI 部署:
    - 在项目根目录运行 `vercel` 命令。
    - 首次运行时，会要求登录 (例如通过 GitHub 账户)。
    - 按照 CLI 提示进行项目设置：
        - 确认项目名称。
        - 选择部署范围 (scope/账户)。
        - 链接到现有 Vercel 项目 (首次部署选 No)。
        - 确认代码所在目录 (通常是当前目录，直接回车)。
        - Vercel 会自动检测项目类型 (如 Vite) 并使用合适的构建设置。通常默认设置即可。
6.  Vercel Dashboard (网页控制台):
    - 登录 Vercel 账户后，可以在 Dashboard 中看到已部署的项目。
7.  连接 GitHub 仓库实现 CI/CD:
    - 在 Vercel Dashboard 中，找到已部署的项目。
    - 选择 "Connect Git Repository"。
    - 选择 GitHub，并授权 Vercel 访问你的 GitHub 仓库。
    - 从列表中选择对应的项目仓库进行连接。
8.  CI/CD 验证:
    - 连接成功后，每当向已连接的 GitHub 仓库的主分支 (通常是 `main` 或 `master`) 推送新的 commit 时，Vercel 会自动触发新的构建和部署流程。
    - 可以修改项目中的一些小内容 (如 `index.html` 的标题)，提交并推送到 GitHub，然后在 Vercel Dashboard 观察部署状态，并验证线上应用的更新。

**代码示例**

1.  GitHub 仓库关联与推送 (在本地项目终端):

    ```bash
    # 假设已 git init, git add ., git commit
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    git branch -M main
    git push -u origin main
    ```

2.  Vercel CLI 安装与部署 (在本地项目终端):

    ```bash
    npm install -g vercel  # 或 sudo npm install -g vercel
    vercel                 # 启动部署流程，按提示操作
    ```

3.  验证 CI/CD (示例):
    - 修改 `public/index.html` (Vite 项目) 或 `index.html` (Create React App 项目) 的 `<title>` 标签。
    - 在本地项目终端:
        ```bash
        git add .
        git commit -m "Update page title for Vercel CI/CD test"
        git push origin main
        ```
    - 访问 Vercel Dashboard 查看部署进度，部署完成后刷新线上应用 URL 查看标题是否更新。
