# Introduction

## Docker 基础概念

> 简述：Docker 是一种用于一致地构建、运行和发布应用的平台，它将应用与其依赖项打包进一个隔离环境（容器），确保应用跨不同环境表现一致。

**知识树**

1. Docker 本质

    - 平台：构建（build）、运行（run）、发布（ship）应用
    - 一致性：确保跨环境的一致表现（开发机、测试机、生产机）

2. Docker 出现原因

    - 应用缺少部署文件或资源（文件缺失）
    - 环境差异（软件版本不一致，如 Node、MongoDB）
    - 配置不一致（环境变量差异）

3. Docker 的核心机制：容器（Container）

    - 隔离环境：应用与依赖项的完整封装
    - 同机多版本并存，互不干扰

4. Docker 的价值体现

    - 部署便利：
        - 一键启动应用及其依赖
        - 新人入职无需繁琐环境配置
    - 环境清洁：
        - 应用删除即彻底清除依赖
        - 避免开发环境臃肿混乱

5. Docker 技能的行业价值

    - 软件开发与 DevOps 工程师必备技能
    - 促进应用交付效率与质量，提高市场竞争力

## 容器与虚拟机

> 简述：容器（Container）和虚拟机（Virtual Machine, VM）均提供应用隔离环境，但容器更轻量高效，共享宿主操作系统，而虚拟机则独占完整操作系统。

**知识树**

1. 虚拟机（VM）本质

    - 模拟物理硬件环境的软件抽象
    - 依赖于 Hypervisor 管理（如 VirtualBox、VMware、Hyper-V）

2. 虚拟机的优缺点

    - 优点：
        - 完整隔离应用及依赖环境
        - 支持多种操作系统（如 Windows 与 Linux 并存）
    - 缺点：
        - 启动缓慢（加载完整操作系统）
        - 资源消耗大（CPU、内存、磁盘专属分配）
        - 维护成本高（需单独授权、更新和监控各虚拟机系统）

3. 容器本质

    - 应用级别的隔离环境，共享宿主操作系统内核
    - 无需独立完整的操作系统镜像

4. 容器的优缺点

    - 优点：
        - 启动快速（秒级启动）
        - 轻量高效（无专属硬件资源分配，宿主资源弹性共享）
        - 运维成本低（仅维护单一宿主操作系统）
    - 缺点：
        - 共享内核，安全隔离程度略低于虚拟机

## Docker Architecture

> 简述：Docker 采用客户端-服务器架构，通过共享宿主内核实现容器轻量化，本质上容器即特殊进程，依赖于宿主内核提供运行环境。

**知识树**

1. Docker 架构模式

    - 客户端-服务器模型（Client-Server）
    - Docker 客户端通过 RESTful API 与 Docker 引擎（服务器）通信

2. Docker 引擎（Docker Engine）

    - 后台运行，负责容器的创建、管理、运行
    - 容器本质是宿主机上的特殊进程

3. 内核（Kernel）共享机制：

    - 容器不含完整操作系统，仅共享宿主内核
    - 内核核心功能：
        - 管理硬件资源（CPU、内存）
        - 管理进程运行环境与应用调用接口（API）
    - 不同操作系统内核差异明显，导致容器运行环境限制：
        - Linux 宿主机：仅支持 Linux 容器
        - Windows 宿主机：
            - 自带 Windows 内核（运行 Windows 容器）
            - 集成 Linux 内核（额外支持 Linux 容器）
        - macOS 宿主机：
            - 无容器原生支持，Docker 使用轻量 Linux 虚拟机运行容器

4. 核心架构特点：

    - 跨平台容器运行环境差异（Linux/Windows/macOS）
    - 通过宿主内核共享机制显著提升启动速度与资源效率

## Installing Docker

> 简述：Docker 的安装需根据操作系统选择合适版本，并确保系统环境满足要求。启动 Docker 后，通过命令验证服务正常运行。

**知识树**

1. 获取与安装 Docker

    - 官方地址：[docs.docker.com](https://docs.docker.com)
    - Windows/macOS/Linux：下载 Docker Desktop（集成引擎及工具）

2. 安装前准备

    - 核查系统要求（如内存、CPU、虚拟化支持等）
    - 如 Windows 需启用 Hyper-V 与 Containers 功能

3. 正确启动 Docker

    - Windows/macOS/Linux：安装后手动启动 Docker Desktop（如 Mac 需要确认状态栏有 Docker 图标）

4. 验证 Docker 是否可用

    - 打开终端，执行 `docker version` 查看 client/server 版本
    - 若 server 信息未显示，说明 Docker Engine 未启动

## Development Workflow

> 简述：Docker 开发流程指将任意应用程序封装为独立、可移植的容器镜像，以便在任意环境中一致地运行和管理。

**知识树**

1. Dockerize 应用程序

    - 含义：对任意应用进行小改动，使之能被 Docker 运行。
    - 方法：通过添加 Dockerfile（文本文件，含镜像构建指令）。

2. Dockerfile

    - 本质：纯文本指令文件，用于构建镜像。
    - 内容：基础操作系统、运行时环境（如 Node、Python）、应用文件、依赖库、环境变量。

3. 镜像（Image）

    - 包含：
        - A cut-down OS
        - A runtime environment (eg Node)
        - Application files
        - Third-party libraries
        - Environment variables
    - 特性：
        - 包含应用程序所有运行必需的文件。
        - 可移植，一次构建，多处运行。
    - 用途：发布至 Docker Registry（如 Docker Hub），实现镜像共享与分发。

4. 容器（Container）

    - 本质：由镜像启动的进程，提供独立的文件系统与隔离环境。
    - 优势：
        - 环境一致性，避免配置差异问题。
        - 无需复杂的发布文档，实现“随处运行”。

## Docker in Action

> 简述：通过创建最小化项目，直观展示 Docker 使用流程，从构建到部署的完整链路。

**知识树**

1. 构建 Node 示例项目

    - 在桌面新建目录 `hello-docker`，并使用 VS Code 打开。

    - 创建文件 `app.js`，内容如下：

        ```javascript
        // 在终端输出信息
        console.log("hello docker");
        ```

    - 使用命令启动项目（需安装 Node 环境，未安装则运行 `brew install node`）：

        ```bash
        node app.js
        ```

2. 明确项目构建步骤

    - 该简单项目的部署流程如下：

        1. 选择基础操作系统（如 Linux）
        2. 安装运行环境（Node）
        3. 拷贝应用程序代码到指定目录
        4. 执行命令运行程序：`node app.js`

    - 实际生产环境中的复杂项目通常涉及更多文件和操作步骤。

3. 使用 Docker 的优势

    - Docker 将上述构建和部署流程标准化并写入 Dockerfile 文件，以镜像方式统一管理和运行，极大简化发布和运行过程。

4. Docker 操作实操

    - 创建 Dockerfile 文件（建议安装 VS Code Docker 扩展）：

        ```Dockerfile
        # 使用精简版 Node 基础镜像（alpine）
        FROM node:alpine

        # 将当前目录的全部文件拷贝到镜像的 /app 目录下
        COPY . /app

        # 设置容器内的工作目录为 /app
        WORKDIR /app

        # 指定启动容器时运行的命令
        CMD node app.js
        ```

    - 构建 Docker 镜像（`-t`是 `--tag` 的缩写，最后的`.`是构建镜像时的工作目录，Docker 会在这个目录中寻找 `Dockerfile`）：

        ```bash
        docker build -t hello-docker .
        ```

    - 查看本地 Docker 镜像列表：

        ```bash
        docker image ls
        ```

    - 启动 Docker 容器：

        ```bash
        docker run hello-docker
        ```

5. Docker 下拉镜像演示

    - 测试网址（包哈一个 Linux 系统以及 Docker）
        - https://labs.play-with-docker.com/#
    - 指令
        - `docker version`
        - `docker pull codewithmosh/hello-docker`
        - `docker image ls`
        - `docker run codewithmosh/hello-docker`

## Docker 容器镜像操作

1. `docker ps`

    - 查看启动的容器，加`-a`查看所有容器

2. `docker images`

    - 查看所有的镜像，有的镜像只是创建或下载了，并未分配容器

3. `docker run <镜像>`

    - 创建并启动一个新容器，部分服务会因为没有使用交互式启动而直接停止，比如 `ubuntu`，交互式启动方式为`docker run -it <镜像>`，或者`docker run -i -t <镜像>`。
        - `i`为 `interactive`，让容器的 标准输入 (STDIN) 保持打开状态。
        - `t`为伪终端（TTY），让你获得类似普通终端的体验，让输出变得更人类友好（比如你在 bash 中看到的颜色、高亮等）允许你使用清屏、方向键、命令补全等交互功能
        - 补充
            - `docker run -i ubuntu`：允许输入，但无格式化终端
            - `docker run -t ubuntu`：分配终端，但无法交互输入
            - `docker run -it ubuntu`：完整交互终端，常用于 shell

4. `docker start <容器 ID 或 NAME>`

    - 启动一个已存在但停止的容器，同样的，部分服务会因为没有使用交互式启动而直接停止，比如 `ubuntu`，交互式启动方式为`docker start -ai <容器 ID 或 NAME>`
        - `a`：attach，附加当前终端到容器的 stdout/stderr（可以看到输出）
        - `i`：interactive，保持标准输入开启（允许你输入命令）
        - `start`的`ai`等价于`run`的`it`

5. `docker exec -it <容器 ID> bash/sh`

    - 进入**已启动**容器的 shell，默认是 root 用户，也可以指定其他用户`docker exec -u otherUser -it <容器ID> bash`，这取决于容器中是否有这个用户。
    - ubuntu 中，root 用户为`#`，普通用户为`$`

6. `docker stop <容器 ID>`

    - 停止一个正在运行的容器

7. `docker rm <容器 ID>`

    - 删除一个容器（需要先停止）
