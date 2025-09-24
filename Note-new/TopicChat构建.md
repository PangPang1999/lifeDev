# Demo 演示

- http://54.238.57.23
- 未来可能失效

# 操作手册

## 环境与版本要求

- Node.js ≥ 22.19.0
- Bun = 1.2.21
- （可选）Docker ≥ 27 + Docker Compose v2
- 有效的 `OPENAI_API_KEY`

## 快速开始

1. 克隆并安装依赖

    ```bash
    git clone <repo>
    cd TopicChat
    bun install
    ```

2. 配置环境变量

    ```bash
    cp packages/server/.env.example packages/server/.env
    # 编辑 packages/server/.env 并填入 OPENAI_API_KEY 等值
    ```

3. 本地开发启动

    ```bash
    bun run dev
    ```

    - 同时启动前端 (Vite, 默认 5173) 与后端 (Express, 默认 3000)。
    - 前端默认代理 `/api/*` 到后端，无需额外配置。

## Docker 运行

### 本地预览

```bash
export OPENAI_API_KEY=sk-xxx   # 或写入 .env
docker compose build
docker compose up -d
# 前端: http://localhost:80
# 后端: http://localhost:3000
```

```bash
docker compose logs -f server   # 查看后端日志
docker compose down             # 停止并移除容器
```

### 部署到服务器

1. 安装 Docker Engine 与 Compose 插件（参照官方文档）。
2. 将仓库同步到服务器，设置 `.env` 或导出 `OPENAI_API_KEY`。
3. （内存 <1G 建议先开启 swap，示例见下文“部署问题”）。
4. 在仓库根目录执行：
    ```bash
    docker compose build
    docker compose up -d
    docker compose ps
    ```
5. 默认映射：
    - 前端 `http://<服务器IP>:80`
    - 后端 `http://<服务器IP>:3000`

# 0-1 搭建手册

> 快速构建
> 准备：VScode、API key
> Node 22.19.0
> bun 1.2.21

## 基础结构搭建

1. 桌面终端执行命令创建根目录，并进行初始化

    ```bash
    # 创建项目目录
    mkdir TopicChat
    cd TopicChat
    # 初始化
    bun init # 选 Blank
    # 使用 vs code 打开
    code .
    ```

2. 配置工作区（workspaces）

    - 在根目录的 `package.json` 中添加 workspaces 配置：
        ```json
        "workspaces": [
          "packages/*"
        ]
        ```

3. 创建基本目录结构

    ```bash
    # 创建工作目录
    mkdir packages
    cd packages
    # 创建后端
    mkdir server
    # 创建前端
    mkdir client
    cd .. # 返回根目录
    ```

4. 初始化前后端

    ```bash
    # 初始化后端
    cd packages/server
    bun init # 选 Blank
    bun add express
    bun add -d @types/express

    # 返回根目录
    cd ../..

    # 初始化前端
    cd packages/client
    bun create vite . # React Ts N N
    bun i

    # 返回根目录
    cd ../..
    ```

5. 定义启动命令

    - 在 `packages/server/package.json` 中新增 scripts 配置，将后端默认启动命令简化为 `bun start`，热部署命令简化为 `bun dev`。

    ```JSON
      "scripts": {
        "start": "bun run index.ts",
        "dev": "bun run --watch index.ts"
      },
    ```

    - 安装 concurrently，使前后端可以一起启动

    ```bash
    bun add -d concurrently
    ```

    - 在根目录下的 index.ts 写入内容

    ```ts
    import concurrently from "concurrently";

    concurrently([
      {
        name: "server",
        command: "bun run dev",
        cwd: "packages/server",
        prefixColor: "cyan",
      },
      {
        name: "client",
        command: "bun run dev",
        cwd: "packages/client",
        prefixColor: "green",
      },
    ]);
    ```

    - 修改`package.json` 增加脚本，根目录下`npm run dev`同时启动前后端

    ```json
      "scripts": {
    	"dev": "bun run index.ts"
      },
    ```

6. 集成 Tailwind CSS

    - 官方安装文档：https://tailwindcss.com/docs/installation/using-vite
        ```bash
        cd packages/client
        bun add tailwindcss @tailwindcss/vite
        # 返回根目录
        cd ../..
        ```
    - 在 `packages/client/vite.config.ts` 中引入并启用 Tailwind 插件（官网教程）
        - 添加 `import tailwindcss from "@tailwindcss/vite";`
        - 在`plugins`数组中增加`tailwindcss()`
            ```ts
            import { defineConfig } from "vite";
            import react from "@vitejs/plugin-react";
            import tailwindcss from "@tailwindcss/vite";
            // https://vite.dev/config/
            export default defineConfig({
              plugins: [react(), tailwindcss()],
            });
            ```
    - 在 `packages/client/src/index.css` 中导入 Tailwind，如初始化配置可将其删完
        - `@import "tailwindcss";`
    - 在 VSCODE 中安装插件 `Tailwind CSS IntelliSense` 获得自动补全与类名提示。

7. 集成 ShadCN UI

    - 官网：[https://ui.shadcn.com/](https://ui.shadcn.com/)
    - 前置条件：项目已集成 Tailwind CSS。
    - 在 client 中，修改 TypeScript 配置：
        - 在 `packages/client/tsconfig.json` 添加 `compilerOptions`。
            ```json
            "compilerOptions": {
              "baseUrl": ".",
              "paths": {
                "@/*": ["./src/*"]
              }
            },
            ```
        - 在 `packages/client/tsconfig.app.json` 增加 `paths` 配置。
            ```json
            "baseUrl": ".",
            "paths": {
              "@/*": ["./src/*"]
            },
            ```
    - 安装 Node 类型声明：
        ```bash
        cd packages/client
        bun add -D @types/node
        # 返回根目录
        cd ../..
        ```
    - 更新 `packages/client/vite.config.ts` 配置：
        - 引入 `path`。
        - 在 `resolve` 中添加路径别名，确保组件引用清晰。
            ```vite.config.ts
            import { defineConfig } from "vite";
            import react from "@vitejs/plugin-react";
            import tailwindcss from "@tailwindcss/vite";
            import path from "path";
            // https://vite.dev/config/
            export default defineConfig({
              plugins: [react(), tailwindcss()],
              resolve: {
                alias: {
                  "@": path.resolve(__dirname, "./src"),
                },
              },
            });
            ```
    - 使用 ShadCN CLI 初始化：
        ```bash
        cd packages/client
        bunx --bun shadcn@latest init # 选择基础色（如 neutral、zinc、stone 等）。CLI 会生成 `components.json` 并更新 `index.css`（主题变量配置）。
        bunx --bun shadcn@latest add button # 安装基本Button
        # 返回根目录
        cd ../..
        ```

8. 配置 Prettier

    1. 安装与编辑器扩展
        - 在 VS Code 安装 Prettier 插件。
        - 将其设为默认格式化工具。
        - 开启“保存时自动格式化”，保证所有提交的代码自动符合统一规则。
            - 简要开启自动保存，自动保存时不会触发格式化，command+S 触发格式化
    2. 配置规则
        - 在项目根目录新建 `.prettierrc` 文件，定义统一的格式化规则：
            ```json
            {
            	"singleQuote": true,
            	"semi": true,
            	"trailingComma": "es5",
            	"printWidth": 80,
            	"tabWidth": 2
            }
            ```
        - 在根目录添加 `.prettierignore`，避免格式化无关文件：
            ```
            node_modules
            bun.lock
            ```
    3. 命令行集成
        - 安装 Prettier 作为开发依赖：
            ```bash
            bun add -d prettier
            ```
        - 在根目录的 `package.json` 中添加脚本：
            ```json
            "scripts": {
              "format": "prettier --write ."
            }
            ```
        - 在根目录添加 `.prettierignore`，避免格式化无关文件：
            - `node_modules`
            - `bun.lock`
        - 执行 `bun run format`，即可一次性格式化整个项目。

9. Git 提交时自动格式化 staged 中的代码(Husky + lint-staged)
    - 在项目根目录安装 Husky（提交时自动格式所有代码），和 lint-staged（让格式化范围限制在 stage 中） ：
        ```bash
        bun add --dev husky # 安装husky
        bunx husky init # 初始化，生成 `.husky/pre-commit` 文件
        bun add -d lint-staged # 安装依赖lint-staged
        ```
    - 在 `.husky/pre-commit` 文件中定义需要自动执行的命令
        ```bash
        npx lint-staged # 因部分版本下`bunx lint-staged`会出现兼容性问题，使用npx
        ```
    - 配置 `.lintstagedrc` 文件，定义需要格式化的文件类型，例如：
        ```json
        {
        	"*.{js,jsx,ts,tsx,css}": "prettier --write"
        }
        ```

## 前后端联通

1. 基础

    - 后端配置路由，返回数据
    - 前端使用 `useEffect` 在组件挂载时发起请求，拿到返回的 `data`
    - 代理配置
        - 前端项目运行在 Vite 默认端口（如 5173），后端在 Express 的 3000 端口，直接请求会因跨域限制失败。需要在 `vite.config.ts` 中配置代理进行转发如
            ```ts
            server: {
              proxy: {
            	"/api": "http://localhost:3000"
              }
            }
            ```
        - 配置后，所有以 `/api` 开头的请求都会被转发到后端。前端代码无需关心后端端口，只要调用 `/api/...` 即可。

2. 整体流程

    - 浏览器请求 `/api/hello`。
    - Vite 开发服务器将请求代理到 `http://localhost:3000/api/hello`。
    - Express 服务器返回 JSON 数据。
    - React 组件接收数据并展示在页面上。

3. 前端基础代码`packages/client/src/App.tsx`

    ```tsx
    import { useEffect, useState } from 'react';

    function App() {
      const [message, setMessage] = useState('');

      useEffect(() => {
        fetch('/api/hello')
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
      }, []);

      return (
        <>
          <p>{message}</p>
        </>
      );
    }

    export default App;
    ```

4. 后端基础代码`packages/server/index.ts`

    ```tsx
    import express from 'express';
    import type { Request, Response } from 'express';

    const app = express();

    const port = process.env.PORT || 3000;

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });

    app.get('/api/hello', (req: Request, res: Response) => {
      res.json({ message: 'Hello, World!' });
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

## env

- 在 `server` 目录安装依赖
    ```bash
    cd packages/server
    bun add dotenv
    # 返回根目录
    cd ../..
    ```
- 在 `server` 目录下创建 `.env`和`.env.example` 文件，注意：`=` 前后不留空格，值不加引号。
- 使用 `.env.example` 文件列出所需变量名（不写具体值）。
    ```
    OPENAI_API_KEY=;
    DeepSeek_API_Key=;
    ```

## chatBox 前后端构建

1. 安装依赖

```bash
cd packages/server
bun add openai
bun add zod
cd ../..

cd packages/client
bun add react-icons
bun add react-hook-form
bun add axios
bun add react-markdown
bun add uuid
bun add @types/uuid
cd ../..
```

2. 代码构建
    - https://github.com/PangPang1999/TopicChat/commit/6fc33b7bdbc5248e34c927c5e8c06d7cdc5c1e0d

## Docker 配置

- 配置代码
    - https://github.com/PangPang1999/TopicChat/commit/94399d5f7d1e293fc7b3fac9b18cc04ac5907e13
- 启动

```bash
docker compose build

export OPENAI_API_KEY=

sudo docker compose up -d
```

## 部署问题

1. 物理内存不足（Lightsail 轻量服务器运存 0.5G）

    - 使用 swap 提供额外的虚拟内存，避免 dpkg 等进程在解压大包时被 OOM 杀掉。小内存实例（如 AWS t2.micro）安装 Docker 组件时常用。
    - 使用方式

        ```bash
        # 创建 2G swap 文件
        sudo fallocate -l 2G /swapfile
        sudo chmod 600 /swapfile
        sudo mkswap /swapfile
        sudo swapon /swapfile

        # 验证是否启用
        free -h

        # （可选）开机自动挂载
        echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
        ```

2. UUID 生成在 HTTP 环境下失效

    - 浏览器将 `crypto.randomUUID()` 视为“仅限安全上下文（HTTPS/localhost）”的 API，在正式服务器以纯 HTTP 暴露时直接返回 undefined，导致 React 启动阶段抛出 TypeError 并整页白屏。
    - 解决：引入成熟的 uuid 库（同时安装 @types/uuid），改为 useRef(uuid()) 生成会话 ID。uuid 会自动选择最合适的随机源，兼容所有主流浏览器，即便在非安全上下文也能稳定运行。
