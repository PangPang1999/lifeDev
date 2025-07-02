> Prerequisites
>
> -   基本前后端、API 观念
> -   Git 基本用法

# 指令记录

## Linux

**记录一些快捷方式**

- `control+W`：删除一整个单词

## Docker

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

# Linux 基础

## Linux distributions

> 简述：Linux 发行版（distributions）是 Linux 系统的不同版本，由不同的社区或个人基于 Linux 开源核心，按特定需求定制而成。

**知识树**

1. 概念定义

    - Linux 是开源软件，任何人可自由修改和发布自己的版本，即“发行版”。

2. 发行版用途分类

    - 服务器用途：CentOS、Debian
    - 桌面用途：Ubuntu、Fedora
    - 轻量级用途（适合容器）：Alpine
    - 移动设备用途：Android

3. 常见发行版示例：

    - Ubuntu：最流行，适合初学者与日常桌面使用。
    - Debian：稳定性著称，广泛用于服务器。
    - Alpine：极简精巧，常用于容器环境（如 Docker）。
    - Fedora、CentOS：企业级应用广泛使用，尤其适用于服务器环境。

4. 注意事项

    - 大部分发行版共享核心命令，但个别命令可能存在细微差异。
    - 本节从流行的发行版 Ubuntu 开始入门。

5. 系统包管理器差异（补充）

    - 不同 Linux 发行版包管理器不同
        - Debian/Ubuntu: `apt` 或 `apt-get`
        - Alpine: `apk`

## Running Linux

> 简述：演示如何使用 Docker 快速运行 Ubuntu 系统，并通过 Shell 进行命令交互，以便用户理解容器、Shell 命令以及基本 Linux 操作。

**知识树**

1. 拉取并启动 Ubuntu 容器

    - 明确拉取镜像
        - `docker pull ubuntu`
    - 快速运行，若无镜像则自动拉取（推荐）
        - `docker run ubuntu`

2. 容器运行状态管理

    - 查看运行中容器
        - `docker ps`
    - 查看所有（含停止）容器
        - `docker ps -a`
        - 容器启动后无交互指令即停止运行。

3. 交互式运行容器

    - 使用交互模式启动 Ubuntu 容器：

        ```bash
        docker run -it ubuntu
        ```

    - 参数说明：
        - `-i`：交互模式（interactive），保持容器输入流打开。
        - `-t`：分配终端（terminal），允许命令交互。

4. 理解 Linux Shell 环境

    - Shell：命令解释器，负责传递命令到内核执行。
    - Shell 提示符含义解析：
        - 示例提示符：`root@容器ID:/#`
            - `root`：当前登录用户。
            - `@容器ID`：容器的唯一标识（Docker 自动生成）。
            - `/`：当前所在目录（根目录）。
            - `#`：超级用户（root）的权限标识，普通用户为 `$`。
    - 常用基本命令演示：

        ```bash
        # 输出文本
        echo hello

        # 查看当前用户
        whoami

        # 查看当前Shell程序位置
        echo $0  # 输出：/bin/bash，bash 即“Bourne Again Shell”
        ```

    - Linux 与 Windows 差异：
        - 路径分隔符：Linux 用 `/`，Windows 用 `\`。
        - 大小写敏感：命令、文件名、用户名区分大小写。
    - Shell 使用技巧：
        - 上下箭头键翻阅历史命令。
        - 查看历史命令：
            ```bash
            history
            ```
        - 使用历史命令编号快速执行命令：
            ```bash
            !编号
            ```

## Managing Packages

> 简述：APT 是 Linux（如 Ubuntu）上的高级包管理工具，用于安装、更新、卸载及管理软件包。

**知识树**

1. APT 基础知识

    - APT (`Advanced Package Tool`) 是 Ubuntu 默认的包管理器。
    - 常见类似工具：npm、yarn（Node.js），pip（Python）。

2. APT 常用命令

    - 显示包管理器帮助：
        - `apt`或者`apt-get`
    - 列出包数据库中所有包：
        - `apt list`
        - 并非每一个包都已经安装在本地
    - 更新包数据库（下载最新包列表）：
        - `apt update`
        - 当安装包时，需要先更新包数据库，再进行安装（需要网络环境良好）
    - 搜索特定包：
        - `apt search <package_name>`

3. 安装/卸载软件包流程

    ```bash
    apt update  # 必须在安装前执行，确保最新包信息
    apt install nano
    nano  # 启动nano文本编辑器，并根据提示退出
    apt remove nano
    nano  # 验证是否被成功卸载
    ```

4. 关键注意点：

    - 安装前总需执行 `apt update`。
    - Linux 包管理工具依赖包数据库，非实时同步，需主动更新。
    - 包数据库包含软件包列表，但并非所有包默认安装。

## Linux File System

> 简述：Linux 文件系统采用树形（分层）结构，一切皆文件。每个目录和文件都有明确的功能分区，便于管理和扩展。

**知识树**

1. 层次化结构

    - 所有文件和目录以“根目录 `/`”为顶点，形成树状结构。

2. 常见目录及功能

    - `/bin`：存放常用二进制程序（命令/工具）。
    - `/boot`：系统启动相关文件（如内核）。
    - `/dev`：设备文件（所有硬件以“文件”方式表示）。
    - `/etc`：系统配置文件（多为文本，可编辑）。
    - `/home`：普通用户的主目录（个人数据存放处）。
    - `/root`：超级用户（root）的主目录，仅 root 可访问。
    - `/lib`：库文件，程序运行依赖的共享库。
    - `/var`：内容经常变化的文件（如日志、缓存）。
    - `/proc`：内核和进程信息的伪文件系统（动态生成，非真实存储）。

3. 一切皆文件

    - 普通文件、目录、设备、进程、网络连接等，都以文件形式存在。
    - 不同目录有严格分工，便于系统管理和维护。
    - 不必死记各目录名，理解其功能和整体结构即可快速上手。

## Navigating the File System

> 简述：Linux 文件系统采用树状结构。掌握常用命令，可以在不同目录间高效切换、查看内容，是一切 Linux 操作的基础。

**知识树**

1. 根目录与路径

    - `/` 表示根目录，所有文件和文件夹都从这里开始。
    - 路径分为绝对路径（从 `/` 开始，如 `/etc`）和相对路径（相对于当前目录，如 `../`）。

2. 基础命令

    - `pwd`：显示当前工作目录（print working directory）。
    - `ls`：列出当前目录内容（list）。
        - `ls -1`：长格式
        - `ls -l`：长格式，显示权限、拥有者、大小、时间等信息。
        - `ls -a`：查看目录所有内容，包含隐藏文件。
        - `ls 路径`：显示指定目录内容，可用绝对或相对路径，如`ls /home `查看所有用户目录。
    - `cd`：切换目录（change directory）。
        - `cd 路径`：进入指定目录，如`cd /etc/apt/`。
        - `cd ~`：切换到当前用户主目录，root 用户将会切换到 root 目录。
        - `cd ..`：返回上一级目录。
    - Tab 补全：输入目录/文件名前几位，按 `Tab` 键自动补全，加速输入。

## Manipulating Files and Directories

> 简述：本节讲解如何在终端中创建、移动、重命名和删除文件与目录。终端是与系统交互的命令界面，通过命令行输入指令管理文件和文件夹。

**知识树**

1. 创建目录 (`mkdir`，建议在 root 目录下)

    - `mkdir test`： 创建名为`test`的目录

2. 创建文件 (`touch`)

    - `touch file`：创建单个文件，如`touch hello.txt`
    - `touch file1 file2 file3`：同时创建多个文件，如`touch file1.txt file2.txt file3.txt`

3. 移动与重命名 (`mv`)

    - `mv oldname newname`：重命名目录，如`mv test docker`
    - `mv oldfile newfile`：重命名文件：如`mv hello.txt hello-docker.txt`
    - `mv file.txt /path/to/destination`：移动文件到指定目录，如`mv hello.txt /etc`（仅演示，不用执行）

4. 删除文件与目录 (`rm`)

    - `rm file`：删除单个文件，如`rm hello-docker.txt`
    - `rm file1 file2 file3`：删除多个文件：`rm file1.txt file2.txt file3.txt`
    - `rm file*`：使用通配符删除：
    - `rm -r directory`：删除目录及其内容（递归），如`rm -r docker/`

## Editing and Viewing Files

> 简述：学习如何使用 Linux 命令行中的编辑器和文件查看工具，包括 nano 编辑器、cat、more、less、head 和 tail 命令，帮助初学者熟悉基本的文件操作。

**知识树**

1. 文本编辑器 nano

    - nano 是一款简单易用的 Linux 文本编辑器。
    - 使用示例：
        - 打开或创建文件：`nano filename`，如`nano hello.txt`
        - 退出保存：`Ctrl + X` → 输入`Y`保存 → 回车确认文件名。

2. 查看文件内容

    - Cat
        - 显示文件内容或拼接多个文件（短文件推荐，无需额外安装）。
        - 使用示例：`cat hello.txt`
    - more 命令
        - 分页显示长文件内容，但只能向下滚动（无需额外安装）。
        - 使用示例：`more /etc/debconf.conf`（若无效可以尝试自行找一个长文件）
        - 按`空格键`翻页，`回车键`逐行滚动，退出按`q`。
    - less 命令
        - 功能强于 more，可上下滚动（需额外安装，`apt install less`）。
        - 使用示例：`less /etc/debconf.conf`
        - 使用上下箭头滚动，空格翻页，`q`退出。
    - head 命令
        - 查看文件前几行。
        - 使用示例：`head -n 5 /etc/debconf.conf`，查看前 5 行
    - tail 命令
        - 查看文件后几行。
        - 使用示例：`tail -n 5 /etc/debconf.conf`，查看最后 5 行

## Redirection

> 简述：标准输入（stdin）代表键盘输入，标准输出（stdout）代表屏幕输出。重定向（Redirection）允许改变命令输入源或输出目标，实现数据灵活操作。

**知识树**

1. 标准输入输出定义

    - 标准输入（stdin）：默认从键盘获取数据。
    - 标准输出（stdout）：默认输出到屏幕。

2. 输出重定向（`>`）

    - 用于将命令的输出结果从默认的终端（屏幕）保存到文件中。
    - 例如，可用 echo 输出一行文本到文件，或用 cat 重定向多个文件内容到新文件。

    ```bash
    # 将文件内容输出到屏幕
    cat file.txt

    # 重定向输出到另一个文件（覆盖写入）
    cat file.txt > newfile.txt

    # 合并多个文件到新文件
    cat file1.txt file2.txt > combined.txt

    # 覆盖文本到已有文件（若没有则自动创建）
    echo "Hello" > file.txt
    ```

3. 追加输出重定向（`>>`）

    - 将输出追加到文件末尾，不覆盖已有内容。

    ```bash
    # 追加文本到已有文件
    echo "Hello again" >> file.txt
    ```

4. 输入重定向（`<`）

    - 改变命令输入来源，从文件读取数据而非键盘。
    - 较少使用，但在某些脚本和程序场景中有用。

    ```bash
    # 使用文件内容作为命令输入
    sort < unsorted.txt
    ```

5. 常用实例：列出目录内容并保存到文件

    ```bash
    ls -l /etc > files.txt  # 将/etc目录详细列表保存至files.txt
    ```

6. 注意事项

    - `>` 会覆盖文件内容，使用前需谨慎。
    - 使用 `>>` 追加避免误覆盖。
    - 输入重定向 `<` 较为罕见，但了解其功能，掌握全面。

## Searching for Text

> 简述：`grep`（Global Regular Expression Print）命令用于在文件中查找并显示符合特定文本模式的内容，支持多文件、递归搜索及不区分大小写等灵活选项。

**知识树**

1. grep 命令基础

    ```bash
    # 默认区分大小写搜索文本。
    grep "hello" file.txt  # 搜索file.txt中包含"hello"的行

    # 不区分大小写搜索 (`-i`)
    grep -i "hello" file.txt  # 不区分大小写地搜索"hello"

    # 在特定文件中搜索
    grep "root" /etc/passwd  # 搜索passwd文件中包含"root"的行

    # 递归搜索 (`-r`)
    grep -r "hello" .  # 递归搜索当前目录中所有文件内含"hello"的内容

    # 多个选项可以合并使用。
    grep -ri "hello" .  # 不区分大小写，递归搜索当前目录

    # 文件名通配符搜索
    grep "hello" file*  # 在以"file"开头的所有文件中搜索"hello"
    ```

## Finding Files and Directories

> 简述：`find`命令用于在 Linux 系统中递归地搜索文件或目录，支持按路径、类型、名称（区分大小写或忽略大小写）等多种方式过滤结果。

**知识树**

1. `find`命令基础

    ```bash
    # 默认递归列出当前目录所有文件和目录，包括隐藏项。
    find

    # 明确搜索的起始目录。
    find /etc   # 从/etc目录开始，递归搜索所有文件和目录

    # 只搜索目录或文件。
    find . -type d   # 仅搜索当前目录下所有子目录
    find . -type f   # 仅搜索当前目录下所有文件

    # 按名称模式过滤结果，区分大小写。
    find . -name "F*"   # 查找当前目录下名称以F开头的文件或目录（区分大小写）
    # 忽略大小写使用`-iname`。
    find . -iname "f*"  # 查找当前目录下名称以f或F开头的文件或目录（不区分大小写）
    ```

2. 使用示例

    ```bash
    # 查找系统中所有Python文件并保存至python_files.txt
    find / -type f -name "*.py" > python_files.txt
    ```

3. 常见应用场景：

    - 定位特定扩展名文件（如`.log`、`.py`）。
    - 管理和清理旧文件。
    - 文件备份和批量操作。

4. 注意事项：

    - 默认搜索区分大小写。
    - 从根目录开始搜索耗时长，建议精确指定搜索范围或过滤条件。

## Chaining Commands

> 简述：在 Linux 中，可以使用特殊符号将多个命令链接起来依次或有条件地执行，也可以使用管道将一个命令的输出作为另一个命令的输入。

**知识树**

1. 命令顺序执行 (`;`)

    - 多个命令依次运行，不受前后成功或失败影响。

    ```bash
    # 创建test目录，进入test，打印done
    mkdir test; cd test; echo "done"
    ```

2. 条件执行：AND 逻辑 (`&&`)

    - 前一命令成功，才执行下一命令。

    ```bash
    # 若mkdir成功，则继续执行后续命令，否则停止
    mkdir test && cd test && echo "done"
    ```

3. 条件执行：OR 逻辑 (`||`)

    - 前一命令失败，才执行下一命令。

    ```bash
    # mkdir失败（目录已存在），打印提示
    mkdir test || echo "directory exists"
    ```

4. 管道（Pipe `|`）：输出转输入

    - 将命令的标准输出（stdout）直接作为另一个命令的标准输入（stdin）。
    - 管道常用示例：

    ```bash
    # 将/bin目录的内容用less分页显示
    ls /bin | less

    # 限制输出行数（`head`、`tail`）：
    ls /bin | head -n 5 # 显示/bin目录下前5个文件


    # 搜索输出内容（`grep`）：
    ls /bin | grep "bash"# 查找/bin目录下包含bash的文件名
    ```

5. 长命令换行（`\`）

    - 提高长命令可读性，将单个长命令分行书写。

    ```bash
    mkdir hello; \
    cd hello; \
    echo "done"
    # 创建hello目录，进入目录，打印done，分多行书写
    ```

## Environment Variables

> 简述：环境变量是 Linux 系统用于保存配置信息的变量，应用程序可通过读取这些变量实现动态配置。变量作用域分临时（当前会话）和持久（跨会话）。

**知识树**

1. 环境变量基础：

    - 存储应用配置的键值对（`key=value`）。
    - `printenv`：显示所有变量。
    - 常用环境变量：
        - `PATH`：定义系统查找可执行程序的目录，多个路径以冒号`:`分隔。
        - `HOME`：当前用户的主目录。
        - `PWD`：当前所在目录路径。

2. 查看单个变量：

    - 使用`printenv`，或`echo`查看变量值（变量名前需加`$`）。

    ```bash
    printenv PATH  # 显示PATH变量
    echo $PATH     # 等效方式，显示PATH变量
    ```

3. 设置临时变量：

    - 当前终端会话有效，关闭终端后消失。
    - 使用`export`命令。
        ```bash
        export DB_USER=mosh     # 设置环境变量DB_USER
        echo $DB_USER           # 验证变量值
        ```

4. 设置持久变量：

    - 跨会话生效，需写入用户启动文件（如`.bashrc`）。
    - 推荐使用追加方式（`>>`），防止覆盖原有内容。
        ```bash
        echo "export DB_USER=mosh" >> ~/.bashrc   # 添加持久环境变量
        source ~/.bashrc                          # 立即生效，无需重启终端
        ```

5. 安全注意事项：

    - 环境变量以明文形式存储于文件，禁止存储敏感信息（如密码、密钥等）。

## Managing Processes

> 简述：进程（Process）是程序在 Linux 中的运行实例，系统中每个运行的程序对应一个进程，拥有独立的进程 ID（PID）。用户可查看、管理、终止进程。

**知识树**

1. 进程基本概念

    - 进程是程序执行时的实例。
    - 每个进程有唯一标识：进程 ID（PID）。
    - 使用`ps`命令查看当前运行的进程。

2. `ps`命令常见输出说明：

    - PID：进程标识符。
    - TTY（终端类型）：如`pts/0`（第一个伪终端窗口）。
    - TIME：进程占用的累计 CPU 时间。
    - CMD：运行的命令或程序名称。

    ```bash
    ps
    # 输出示例：
    # PID   TTY      TIME   CMD
    # 1     pts/0    00:00  bash
    # 12    pts/0    00:00  ps
    ```

3. 后台运行进程：

    - 在命令末尾使用`&`，进程进入后台运行，不占用当前终端。

    ```bash
    sleep 300 &  # 后台运行sleep命令，持续300秒
    ```

4. 终止进程（`kill`命令）：

    - 根据进程 ID 终止进程，释放资源。

    ```bash
    kill <PID>  # 终止指定PID的进程
    ```

5. 完整演示示例：

    ```bash
    sleep 500 &      # 启动后台进程
    ps               # 查看进程，找到PID，如1234
    kill 1234        # 终止该进程
    ps               # 验证进程是否被终止
    ```

6. 注意事项：

    - 谨慎使用`kill`命令，避免意外终止关键系统进程。
    - `ps`仅显示当前终端进程，查看系统所有进程需使用`ps aux`。

7. 扩展常用`ps`命令选项

    ```bash
    ps aux       # 显示所有用户的进程详细信息
    ps aux | grep bash  # 查找包含bash的进程
    ```

## Managing Users

> 简述：Linux 用户管理涉及创建、修改、删除系统用户，每个用户拥有独立权限、主目录和默认 Shell，以实现资源隔离与权限控制。

**知识树**

1. 用户管理基本命令：

    - `useradd`：创建用户（非交互式）。
        - 输入 `useradd` 后，会提示许多帮助信息，最普通的创建方式为`useradd -m username`，如`useradd -m pang`。`-m`为`--create-home`，即为用户创建一个主目录（home directory），若不设置会出问题。
    - `usermod`：修改用户信息。
        - 示例：新用户默认交互为 Shell，使用`usermod -s /bin/bash username`命令可以修改默认为 bash（增强型 Shell）
    - `userdel`：删除用户。
        - 如`userdel pang`

2. 用户信息存储文件：

    - `/etc/passwd`
        - 存储用户名、用户 ID（UID）、主目录和默认 Shell 等信息（非密码）。
        - 查看方式如`cat /etc/passwd`
    - `/etc/shadow`：
        - 存储用户密码的加密形式，仅 root 可读，非 root 用户执行时显示权限拒绝错误。
        - 查看方式如：`cat /etc/shadow`

3. 用户登录与切换：

    - `docker run ubuntu`： 创建并启动一个全新的容器，运行 Ubuntu 镜像。
    - `docker exec -it <容器ID> bash`：进入**已启动**容器的 shell，默认是 root 用户
    - `docker exec -u otherUser -it <容器ID> bash`：指定其他用户，这取决于容器中是否有这个用户。普通用户提示符为 `$`，root 用户提示符为 `#`。

4. 主目录与默认 Shell：

    - 用户创建时可设置主目录（`-m`）与默认 Shell（`-s`）。
    - 常用 Shell：
        - `/bin/sh`（传统 Shell）
        - `/bin/bash`（增强型 Shell）
    - 创建时指定 bash
        - 如：`useradd -m -s /bin/bash john`，`-s`指定用户的默认登录 shell
    - 修改用户默认 shell 为 bash
        - 如：`usermod -s /bin/bash pang`

5. 交互式用户创建（`adduser`）：

    - 更易用、交互式地创建用户，自动完成创建主目录、分配用户组并提示输入密码等信息。

    ```bash
    # 交互式创建用户bob，提示密码、全名、电话等信息
    adduser bob
    ```

    - 实际部署或自动化脚本环境建议使用非交互式的`useradd`。

6. 演示

    ```bash
    # 启动容器（若容器已停止）
    docker start -ai <CONTAINER ID>


    # 创建Pang，并设置目录
    useradd -m pang

    # 检查用户是否存在（最后一行）
    cat /etc/passwd

    # 修改用户默认shell为bash，并再次检查
    usermod -s /bin/bash pang
    cat /etc/passwd

    # 新开一个终端，以用户 pang 登录容器并进入交互式Shell，表示为 $
    docker exec -it -u pang <容器ID> bash

    # 普通用户查看/etc/shadow，提示Permission denied
    cat /etc/shadow

    # 前往普通用户home，并查看地址，为/home/pang
    cd ~
    pwd

    # 删除命令，只有root有权限（暂不执行）
    userdel pang
    ```

## Managing Groups

> 简述：用户组（group）是 Linux 中用于统一管理多个用户权限的方式。每个用户拥有一个主组（primary group）和若干辅助组（supplementary groups），便于统一权限控制。组相关命令必须通过 root 执行。

**知识树**

1. 主组与附加组

    - 主组
        - 创建文件默认组属：用户创建的文件/目录默认属于主组
        - 组权限继承：文件权限中间部分是“组权限”，主组决定你默认在哪个组享受权限
        - 默认用户组（系统自动生成）：若不指定主组，Linux 通常自动为每个用户创建与用户名同名的主组
    - 附加组理解
        - 想象你是公司员工 pang，你的主组是 devteam（开发团队，但你还被加入了：
            - docker：允许你运行容器（如 docker ps）
            - video：允许你访问摄像头（在某些系统中）
            - sudo：允许你使用管理员命令（比如 sudo apt install）
        - 这些组就是你的 附加组，不改变你默认的文件归属，但赋予你更多能力和权限。

2. 组管理基本命令：

    - 创建组（`groupadd`）：

        ```bash
        groupadd developers  # 创建名为developers的组
        ```

    - 修改组（`groupmod`）：修改已有组名或组 ID。

    - 删除组（`groupdel`）：

        ```bash
        groupdel developers  # 删除developers组，暂不执行
        ```

3. 组信息存储文件：

    - `/etc/group`
        - 存储组名、组 ID 和组内成员。
        - 访问方式
            - `cat /etc/group`
            - 或通过筛选查询
                - `cat /etc/group | grep developers`
                - `grep developers /etc/group`

4. 添加用户到组：

    - 修改辅助组（`usermod -G`）
        - 如：`usermod -G developers pang`，将 pang 加入 developers 辅助组
    - 修改主组（`usermod -g`）

5. 查看用户组信息：

    - 查看用户的所属组：
        - 如`groups john`，查看 john 所属的所有组（主组和辅助组），输出为`pang : pang developers`，即主组为`pang`，附加组为`developers`
        - 还可以访问`/etc/passwd`查看用户主组与附加组的编号
            - `grep pang /etc/passwd`
            - `cat /etc/passwd | grep pang`

6. 注意事项：

    - 用户创建时自动生成主组，与用户名相同。
    - 添加辅助组时，注意使用大写`-G`选项，小写`-g`为修改主组。
    - 删除组前，需确认组内无成员，避免权限问题。

## File Permissions

> 简述：Linux 使用文件权限控制用户访问文件和目录的方式，权限分为读、写、执行三类，对象分为文件所有者（user）、所属组（group）和其他用户（others）。

**知识树**

1. 文件权限基础：

    - 理解：
        - 用户权限为 10 个字符，第一个为`-`或者`d`，表示其为文件或者目录，另外 9 个字符分为三组，三组代表三类对象，每组由`rwx`顺序排列以及可能的`-`四类字符组成，`rwx`代表不同的权限，`-`代表无权限
    - 三种权限：读（`r`）、写（`w`）、执行（`x`）。

        - 文件权限：
            - `r`：读取文件内容。
            - `w`：修改文件内容。
            - `x`：执行文件（如脚本）。
        - 目录权限：
            - `r`：列出目录内容。
            - `w`：修改目录内文件（创建/删除文件）。
            - `x`：进入目录（`cd`）。

    - 三类对象：

        - 用户（owner）：文件所有者。
        - 用户组（group）：文件所属用户组。
        - 其他用户（others）：不属于以上两者的其他用户。

    - 通过`ls -l`查看权限：

        - 权限以 9 个字符表示，每 3 个一组分别对应 owner、group、others。

2. 演示查询文件权限

    ```bash
    # 选择目录
    cd /home

    # 创建测试文件，包含代码 echo hello
    echo echo hello > deploy.sh

    # 查看权限
    ls -l deploy.sh
    # 输出示例：-rw-r--r--
    # 表示：所有者rw-，组r--，其他r--

    # 查看所有文件权限，包含文件 deploy.sh 以及 文件夹 pang
    ls -l

    # 执行 deploy.sh，提示 Permission denied
    ./deploy.sh
    ```

3. 修改权限（`chmod`）：

    - 格式：`chmod [对象][操作][权限] 文件名`
        - 对象：`u` (owner)，`g` (group)，`o` (others)
        - 操作：`+`增加权限，`-`移除权限
    - 操作示例

        ```bash
        # 如
        chmod u+x deploy.sh    # 给文件所有者增加执行权限
        chmod o+x deploy.sh    # 给其他用户增加执行权限
        chmod og+rx deploy.sh  # 给组与其他用户增加读、执行权限
        chmod u-r deploy.sh    # 移除所有者读权限
        chmod og+x+w-r *.sh    # 不可以写成 chmod og+xw-r ，表达式混乱，没有明确的分隔操作

        # 执行操作赋予执行权限
        chmod u+x deploy.sh # 执行之后，可以执行 deploy.sh 了
        chmod o+x deploy.sh # 执行之后，其他用户比如 pang，也可以执行 deploy.sh 了

        ```

# Building Images

## Images and Containers

> 简述：Docker 镜像（image）是应用运行所需文件、库和环境配置的静态快照；容器（container）则是镜像启动后的动态实例，为应用提供独立、隔离的运行环境。

**知识树**

1. 镜像（Image）：

    - 包含运行应用所需的一切资源：
        - 基础操作系统（如 Ubuntu、Alpine）
        - 应用程序文件
        - 第三方依赖库
        - 环境变量与配置
    - 不可变（静态），作为模板启动容器。
    - 查看命令： `docker ps -a`

2. 容器（Container）：

    - 镜像启动后的运行实例，本质为宿主系统的特殊进程。
    - 提供隔离环境，有独立的文件系统（源自镜像）。
    - 动态可变，每个容器之间的数据互相隔离（可以通过技术实现相互访问，后续介绍）。
    - 查看命令： `docker images`

3. 镜像与容器的关系：

    - 一张镜像可启动多个容器。
    - 每个容器拥有独立的写入层，互不影响。

    ```bash
    docker run -it ubuntu  # 从ubuntu镜像启动交互式容器
    ```

4. 容器隔离性示例：

    - 同一镜像启动多个容器，数据不共享。

    ```bash
    # 容器A：创建文件
    docker run -it ubuntu bash
    touch /home/fileA.txt

    # 容器B：看不到容器A创建的文件
    docker run -it ubuntu bash
    ls /home  # 输出为空
    ```

## Sample Web Application

> 简述：引入一个示例 React 项目 `react-app`，稍后使用这个项目进行 Docker 演示

**知识树**

1. app 地址：./Docker/react-app

2. 使用

    - 下载 Node16
    - 下载依赖：`npm install`或`npm i`
    - 启动： `npm start`
    - 访问：前往 http://localhost:3000 查看示例项目效果

## Dockerfile Instructions

> 简述：Dockerfile 是用于定义如何构建 Docker 镜像的指令文件，指定镜像内容、工作目录、文件拷贝、命令执行、环境变量及容器启动行为。

**知识树**

1. 指令基本介绍

    1. FROM：指定基础镜像，构建镜像时以此镜像为起点，包含基础文件和目录
    2. WORKDIR：设置工作目录，后续指令在此目录执行
    3. COPY：复制本地文件或目录到镜像内
    4. ADD：复制本地文件或目录到镜像内，支持自动解压本地 tar 包；也可下载远程文件（仅支持 HTTP/HTTPS）。
    5. RUN：构建镜像时执行操作系统命令（如 shell 命令）。
    6. ENV：设置环境变量
    7. EXPOSE：声明容器对外暴露的端口，供文档和运行时端口映射使用。
    8. USER：设置执行应用的用户，通常使用权限受限用户
    9. 容器启动指令
    10. CMD：指定容器启动时默认执行的命令或参数（可被 docker run 覆盖）。
    11. ENTRYPOINT：指定容器启动时的主命令（一般不会被 docker run 覆盖，但可以追加参数）。

## Choosing the Right Base Image

> 简述：Dockerfile 必须以 FROM 指令开始，该指令决定了构建镜像时所使用的基础环境（操作系统或运行时）。选择合适的基础镜像可显著影响镜像大小、构建效率和运行性能。

**知识树**

1. 镜像来源地址

    - 官方默认：[https://hub.docker.com](https://hub.docker.com)

2. 镜像选择注意事项

    - 默认使用 Docker Hub 镜像，如选择其他仓库（如微软的 MCR），需明确输入完整镜像地址
    - 推荐使用明确的版本标签（如 `node:16-alpine`），避免使用`latest`，防止更新带来的兼容性问题
    - 测试环境优先选择体积小的 `alpine` 版本镜像，通常只有常规镜像的约十分之一大小

3. 查找合适镜像（示例流程）

    - 访问 Docker Hub，搜索目标镜像，例如输入 `node`
    - 使用过滤器筛选合适版本，如版本号 `16`，再进一步选择体积更小的 `alpine` 版本

4. Dockerfile 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    ```

    - 构建镜像命令：

    ```bash
    docker build -t react-app .
    ```

    - 启动容器并进入交互式 shell：

    ```bash
    docker run -it react-app sh
    ```

    - 默认执行 `docker run -it react-app` 时进入 Node 环境，而非 Shell
    - Alpine 版本不包含 `bash`，需使用内置的简易 `sh` Shell
    - 后续需使用 Dockerfile 中的 `COPY` 指令将应用文件添加至镜像

## Copying Files and Directories

> 简述：Dockerfile 通过使用 COPY 于 ADD，将文件加入镜像。一般使用 COPY，有特性需求时使用 ADD

**知识树**

1. COPY 与 ADD 指令：

    - COPY
        - 般用于本地文件、目录的复制，简单、安全，推荐优先用。
    - ADD
        - 可以做的事情更多，比如自动解压 tar 文件、支持从 URL 下载文件，但通常不建议滥用。
    - 备注
        - 命令大小写敏感
        - 一个文件可以多次使用 COPY 和 ADD

2. COPY 示例

    ```Dockerfile
    # 添加单个文件示例：将文件加入/app/目录下
    COPY package.json /app/
    # 通配符添加
    COPY package*.json /app/
    # 添加多个文件
    COPY package.json README.md /app/
    # 处理带空格的文件名
    COPY ["hello world.txt", "/app/"]

    # 添加所有文件示例：将所有文件加入/app/目录下
    COPY . /app/
    ```

3. ADD 示例

    ```Dockerfile
    # 添加所有文件示例：将所有文件加入/app/目录下
    ADD . /app/
    # 从网址下载资源添加进容器/app/目录下
    ADD http://...//file.json /app/
    # 将文件解压添加进容器/app/目录下
    ADD file.zip
    ```

4. WORKDIR 指令：

    - 功能：
        - 设置工作目录，后续指令默认基于此目录执行。
    - 示例
        ```Dockerfile
        WORKDIR /app
        COPY . .  # 将当前目录内容复制到/app目录
        ```

5. 当前 Dockerfle 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    WORKDIR /app
    COPY . .
    ```

6. 再次测试演示

    ```bash
    # 重新构建镜像
    docker build -t react-app .
    # 打开交互式sh
    docker run -it react-app sh
    # 检查文件
    ls
    ```

    - 打开交互式 sh 后，将自动处于工作目录`/app`

## Excluding Files and Directories

> 简述：构建镜像时 Docker 客户端默认传输当前目录（构建上下文，build context）下的所有文件给 Docker 引擎。如果构建上下文较大，将导致传输缓慢。为避免此问题，应使用 `.dockerignore` 文件排除无需传输的文件与目录。

**知识树**

1. 构建问题

    - 当使用`COPY . .`，Docker 构建镜像时默认会将 Dockerfile 所在目录全部文件（包括子目录）发送到 Docker 引擎的工作目录，称为 构建上下文。上下文过大会导致网络传输量大，以及镜像构建速度慢
    - 典型的 Node 项目存在大量依赖，`node_modules` 目录巨大，无需传输，可排除。

2. 排除文件与目录的方式

    - 创建一个 `.dockerignore` 文件，位于构建上下文根目录，与 Dockerfile 同级。
    - 格式和 `.gitignore` 相同，指定需要排除的文件和目录。
    - 文件示例
        ```.dockerignore
        node_modules/
        ```

3. 测试演示

    ```bash
    # 重新构建镜像，速度非常快，大小非常小
    docker build -t react-app .
    # 打开交互式sh
    docker run -it react-app sh
    # 检查文件，不再存在node_modules
    ls
    ```

## Running Commands

> 简述：利用 `RUN` 指令在 Docker 镜像构建过程中执行命令（如安装依赖）。常见用例为在 Node.js 项目中执行 `npm install`，以安装所需依赖包到镜像内。

**知识树**

1. `RUN` 指令作用

    - 在镜像构建阶段执行任意终端命令（如 shell、npm、系统包管理器命令）。
    - 常用于安装依赖、构建项目、创建目录等。

2. 当前 Dockerfle 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    WORKDIR /app
    COPY . .
    # 安装项目依赖
    RUN npm install
    ```

    - 不同 Linux 发行版包管理器不同，需根据基础镜像类型选择正确命令，如 Alpine 不支持 `apt`，支持 `apk`

3. 测试演示

    ```bash
    # 重新构建镜像，
    docker build -t react-app .
    # 打开交互式sh
    docker run -it react-app sh
    # 检查文件，存在node_modules
    ls
    ```

    - 构建镜像变久了，由于下载依赖，将在后面介绍优化方式

## Setting Environment Variables

> 简述：环境变量用于为容器中的应用配置动态参数（如 API 地址、密钥等），使镜像更加灵活、可配置。通过 `ENV` 指令可在 Dockerfile 中声明环境变量，启动容器后自动生效。

**知识树**

1. 环境变量概念

    - 提供运行时参数，无需硬编码进代码
    - 适用于配置 API 地址、端口、密钥等
    - 前端/后端应用常用来动态配置后端接口、数据库等
    - 不要将敏感信息硬编码于 Dockerfile，可通过运行时覆盖（如 `docker run -e KEY=VALUE`）

2. `ENV` 指令用法

    - 用法一（推荐）：

        ```Dockerfile
        ENV KEY=VALUE
        ```

    - 用法二（支持多个变量）：

        ```Dockerfile
        ENV KEY VALUE
        ENV KEY1=VALUE1 KEY2=VALUE2
        ```

    - ENV 指令可以在 Dockerfile 的任意位置定义，从它被定义开始，之后的所有 Dockerfile 指令以及最终容器启动时，环境变量都能读取到。

3. 当前 Dockerfle 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    WORKDIR /app
    COPY . .
    RUN npm install
    ENV API_URL=http://api.myapp.com
    ```

4. 测试演示

    ```bash
    # 重新构建镜像，
    docker build -t react-app .
    # 打开交互式sh
    docker run -it react-app sh
    # 查看全部环境变量
    printenv
    # 查看指定变量
    echo $API_URL
    ```

## Exposing Ports

> 简述：容器中运行的应用默认只在容器内部监听端口。`EXPOSE` 指令用于声明容器对外开放的端口，是对镜像使用者的文档提示，并不自动映射到主机端口。

**知识树**

1. 容器端口与主机端口的隔离

    - 容器中的服务仅在容器内监听端口
    - 主机无法直接访问，需端口映射

2. `EXPOSE` 指令作用

    - 在 Dockerfile 中声明容器将使用的端口，并不会自动把容器的端口映射到宿主机上
    - 主要作为文档和参考，便于团队协作和自动化工具识别

    ```Dockerfile
    # 声明容器将监听 3000 端口
    EXPOSE 3000
    ```

3. 稍后介绍具体打开端口

## Setting the User

> 简述：Docker 容器默认以 root 用户运行，具有最高权限，存在安全隐患。推荐为应用创建专用低权限用户并切换运行身份，降低安全风险。

**知识树**

1. 容器默认用户

    - 默认使用 root 用户（UID=0），拥有系统全部权限
    - 不安全，若应用被攻破，攻击者可控制整个容器乃至宿主机

2. 创建并使用普通用户

    - 通过系统命令（如 `addgroup`、`adduser`）创建新组与新用户
    - 推荐为每个应用创建同名用户和组，且用户类型为系统用户（非交互登录用户）
    - 示例命令（Alpine Linux）：

3. 当前 Dockerfle 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    # 创建组和系统用户app，并将其添加到该组
    RUN addgroup app && adduser -S -G app app
    # 切换后续命令默认用户为app
    USER app
    WORKDIR /app
    # 建议使用--chown=app:app选项来设置文件的所有者
    # 这样可以避免在容器中运行时出现权限问题
    # 如果不使用--chown选项，可能会导致npm install时出现权限错误
    # 这会导致npm无法正确安装依赖包
    # 以及在运行时无法访问某些文件或目录
    RUN chown app:app /app
    COPY . .
    RUN npm install
    RUN chown -R app:app /app

    ENV API_URL=http://api.myapp.com
    ```

    - 需要设置工作目录之前，否则切换用户之后会有问题

4. 用户切换效果

    - 之后所有 Dockerfile 指令及应用进程都以新建用户运行
    - 提高安全性：限制对文件系统和系统资源的写权限

5. 测试演示

    ```bash
    # 重新构建镜像，
    docker build -t react-app .
    # 打开交互式sh
    docker run -it react-app sh
    # 查看当前用户
    whoami  # 输出: app
    # 查看文件属主及权限
    ls -l # 文件属主通常为 root，app 用户无写权限
    ```

## Defining Entrypoints

> 简述：容器启动时需指定应用进程命令。`CMD` 与 `ENTRYPOINT` 用于设置默认启动命令，提升容器自动化和易用性。

**知识树**

1. 容器默认命令的必要性

    - 启动容器需指定进程，否则容器立即退出
    - 不希望每次手动指定命令，需在 Dockerfile 内预设

2. `CMD` 指令

    - 设置容器默认启动命令或参数，可被 `docker run ... <command>` 覆盖
    - 推荐使用“exec form”写法（数组形式），避免额外 shell 进程、提升可靠性
    - 对比：
        - `CMD ["npm", "start"]`：实际等价于在容器里执行：`/bin/sh -c "npm start"`，会启动一个 shell（sh 或 cmd）作为父进程，npm 是子进程
        - `CMD npm start`：直接将 npm 作为主进程（PID 1）运行，没有额外的 shell 包裹，更加“原生”和直接

3. `ENTRYPOINT` 指令

    - 固定启动主程序，通常不被 docker run 命令覆盖（需加 `--entrypoint` 才能更换）
    - 适合无条件始终只执行一个主程序的场景
    - 同理：推荐使用“exec form”写法，如`ENTRYPOINT ["npm", "start"]`

4. `RUN` 指令与 CMD/ENTRYPOINT 的区别

    - `RUN`：构建镜像时执行（如安装依赖），结果写入镜像
    - `CMD`/`ENTRYPOINT`：运行容器时执行（作为主进程），不会改变镜像内容

5. 常见误区与最佳实践

    - 多个 `CMD`/`ENTRYPOINT` 只生效最后一个
    - 推荐用 `CMD` 提供灵活的默认命令，便于覆盖
    - 推荐使用“exec form”（数组）语法

6. 当前 Dockerfle 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    RUN addgroup app && adduser -S -G app app
    USER app
    WORKDIR /app
    RUN chown app:app /app
    COPY . .
    RUN npm install
    RUN chown -R app:app /app

    ENV API_URL=http://api.myapp.com
    CMD ["npm", "start"]
    ```

7. 启动补充

    - 通过`docker run -it react-app sh`启动容器后，即便使用`npm start`启动了项目，提示了地址与端口，本地依旧无法访问，因为其启动的是容器的端口，而非是本地的端口

## Speeding Up Builds

> 简述：Docker 镜像由多层（layer）组成。每条 Dockerfile 指令生成新层，Docker 通过缓存机制加速构建。合理组织指令，可极大提升构建效率，避免重复耗时步骤。

**知识树**

1. 镜像层（Layer）与缓存原理

    - 每条 Dockerfile 指令（FROM、RUN、COPY 等）创建一个新层
    - 层只记录这一层指令导致的变化内容，镜像本质为多层叠加
    - 构建时 Docker 通过复用旧层（缓存），能加速无变更部分

2. 缓存命中规则

    - 自顶向下逐条指令比较，完全一致且内容无变则命中缓存，复用已存在层
    - 某一层变更后，该层及其下方所有层均需重建

3. COPY 与缓存失效

    - `COPY . .` 或 `ADD . .` 会监控所有源文件，只要有任何文件变动，此层及其后续层都被重建，导致如依赖安装（npm install）等耗时操作被重复执行

4. 构建优化最佳实践

    - 优先 COPY 变更不频繁的依赖声明文件（如 `package.json`、`package-lock.json`），再安装依赖
    - 最后 COPY 代码与资源文件，将高频改动内容下置，最大限度利用依赖安装层的缓存

    ```Dockerfile
    FROM node:16.0-alpine3.13
    RUN addgroup app && adduser -S -G app app
    USER app
    WORKDIR /app
    # 仅拷贝依赖声明文件，变化少
    COPY --chown=app:app package*.json .
    # 安装依赖，缓存命中率高
    RUN npm install
    # 拷贝剩余源代码，变化多
    COPY --chown=app:app . .
    ENV API_URL=http://api.myapp.com
    CMD ["npm", "start"]
    ```

5. 实际效果与验证

    - 首次构建，所有层需重建
    - 仅改动应用代码/文档时，依赖安装层命中缓存，构建极快
    - 可用 `docker history <image>` 查看层及各层大小、来源指令
    - 测试过程
        - 修改 react-app 部分文件如 readme 后，重新构建

6. 总结原则

    - 频繁变动的内容放在 Dockerfile 末尾，静态内容放在开头
    - 利用层缓存，极大缩短日常开发构建时间

## Removing Images

> 简述：随着镜像反复构建与测试，系统中会积累无用的悬空镜像（dangling images）与停止容器，需定期清理以释放磁盘空间。

**知识树**

1. 悬空镜像（Dangling Images）&停止容器

    - 悬空镜像
        - 无标签（无 name/tag）的镜像层，源自旧构建，已与任何有效镜像无关
        - 常见于反复构建、变更 Dockerfile 过程中
    - 停止容器
        - 一个镜像可以创建多个容器，在测试的过程中，积累了许多停止的容器，通过`docker ps -a`查看

2. 清理悬空镜像&状态的容器

    - 使用 `docker image prune` 自动删除所有悬空镜像，需要进行确认
    - 使用 `docker container prune` 一键清理全部已停止容器

3. 删除指定镜像

    - 查看本地镜像`docker images`
    - 通过名称或 ID 删除`docker image rm <镜像名或ID>`
        - rm 默认删除为 `latest`，即`docker image rm <镜像名或ID>:latest`，也可以手动指定版本号
    - 支持一次删除多个镜像，用空格分隔

## Tagging Images

> 简述：镜像标签用于标识镜像的不同版本，有助于环境隔离、回滚和运维可追溯。默认标签为`latest`，但实际生产应使用显式版本号。

**知识树**

1. 标签（Tag）基本概念

    - 同一个 tag（比如 latest），任何时刻只能指向一个镜像 ID。但你可以有多个不同的 tag，指向同一个镜像 ID。
    - 标签是镜像的标识，形式为 `<镜像名>:<标签>`，如 `myapp:1.0`
    - `latest` 仅为默认标签，无特殊含义，不等价于“最新版本”

2. 设置标签

    - 构建时设置：
        - 通过 `-t` 参数指定镜像名与标签，如`docker build -t react-app:1.0 .`
    - 删除单个标签（不影响镜像本体）：
        - `docker image rm react-app:1.0`
    - 后期打标签与更新标签
        - 镜像构建后可随时追加，使用`tag`，如`docker image tag react-app:1.0 react-app:latest`（给`react-app:1.0`额外加上`latest`标签）

3. 最新标签（latest）误区

    - `latest` 不一定指向“最新”镜像，需手动指定
    - 生产环境建议显式指定版本标签，避免运维混乱

## Sharing Images\*

> 简述：Docker Hub 是镜像托管和分发平台。将本地镜像推送到仓库后，任何人可在任意主机上拉取与运行该镜像，实现跨团队、跨环境的应用交付。

**知识树**

1. Docker Hub 账户与仓库

    - 地址：https://app.docker.com
    - 免费注册账户，支持公开/私有仓库
    - 每个仓库可保存多版本标签（tags）

2. 镜像重命名与标记

    - 镜像推送需包含用户名前缀（如 `username/image:tag`）
    - 本地重命名示例（打 tag）：
        ```bash
        docker image tag react-app:1.0 username/react-app:1.0
        ```

3. 登录与推送镜像

    - 登录 Docker Hub
        ```bash
        docker login
        ```
    - 推送镜像到远程仓库示例
        ```bash
        docker push username/react-app:1.0
        ```

4. 镜像层与增量推送

    - 首次推送会上传全部镜像层
    - 后续如未变动底层依赖，仅上传新变更部分，推送更快

5. 镜像分发与拉取

    - 镜像一经推送，全球任何 Docker 主机均可拉取
        ```bash
        docker pull username/react-app:v2
        ```

6. 测试

    - 修改项目部分文件，以新标签重新构建`docker build -t username/react-app:2.0 .`，推送`docker push username/react-app:2.0`

## Saving and Loading Images

> 简述：可将本地镜像导出为压缩文件，实现离线迁移、备份或跨主机传输，无需依赖 Docker Hub。

**知识树**

1. 镜像保存（导出为文件）

    - 使用 `docker image save` 将镜像打包为 `.tar` 文件（包含全部层和元数据），使用`docker image save --help`可查看帮助
    - 适合在局域网、无公网环境下迁移镜像
    - 示例：
        ```bash
        # 导出镜像到本地文件
        docker image save -o react-app.tar react-app:1.0
        ```

2. 镜像结构

    - `.tar` 文件内含多层，每层为一目录，含 layer tar 包和 metadata
    - 可解压查看具体层内容

3. 镜像加载（从文件导入）

    - 使用 `docker image load` 从 `.tar` 文件导入镜像到本地 Docker，导入后镜像 ID 和先前一致
    - 示例：
        ```bash
        # 加载本地镜像文件
        docker image load -i react-app.tar
        ```

4. 典型用例

    - 跨主机物理拷贝镜像（如 U 盘/内网）
    - 镜像冷备份与归档
    - 离线分发环境

# Working with Containers

## Starting Containers

> 简述：Docker 提供一系列命令用于启动、管理和查看容器状态。容器本质上是特殊的进程，拥有独立的文件系统，由镜像提供。

**知识树**

1. 容器状态查看：

    - 查看运行中的容器：` docker ps`
        - ps 即 process
    - 查看所有容器（包括已停止的）：`docker ps -a`

2. 容器运行模式：

    - 前台运行（默认模式）：`docker run react-app`
        - 此时终端窗口被占用，按 `Ctrl+C` 终止容器
    - 后台运行（分离模式）：`docker run -d react-app`
        - 容器在后台运行，终端可继续执行其它命令

3. 容器命名：

    - 默认：Docker 自动分配随机容器名，可用 `docker ps` 最右列查看
    - 自定义名称，便于后续管理：`docker run -d --name blue-sky react-app`

## Viewing the Logs

> 简述：容器后台运行时，无法直接在终端看到输出。Docker 提供日志命令，帮助实时或历史查看容器内应用的输出，便于故障排查与监控。

**知识树**

1. 查看容器日志：

    - 查看指定容器日志：`docker logs <容器ID或名称>`

        - 可只输入容器 ID 前几位
        - 输出内容等同于前台运行时看到的标准输出

2. 日志常用参数：

    - 实时追踪日志（持续输出）：`docker logs -f <容器ID或名称>`
        - `-f --follow`，类似 Linux `tail -f`
        - 按 `Ctrl+C` 结束实时查看
    - 仅查看最新若干行：`docker logs -n 20 <容器ID或名称>`
        - 显示最近 20 行日志
        - 也可以使用`docker logs --tail 20 <容器ID或名称>`
    - 显示时间戳：`docker logs -t <容器ID或名称>`
        - 每行前自动带上日志时间

3. 场景与建议：

    - 容器服务出错或需监控时，第一步应查看日志输出
    - 可结合 `-f` 和 `--tail` 实时观测最新日志

## Publishing Ports

> 简述：容器内服务默认仅监听容器内部端口，主机无法直接访问。通过端口映射（publish），可将主机端口与容器端口绑定，实现外部访问容器服务。

**知识树**

1. 端口映射原理：

    - 容器进程监听的是容器内部端口（如 3000），主机上并不自动开放此端口
    - 需用 `-p <主机端口>:<容器端口>` 将主机端口与容器端口关联
    - 端口映射（`-p <主机端口>:<容器端口>`）只能在容器启动时指定，已运行的容器无法动态修改或追加端口映射。

2. 端口映射命令用法：

    - 后台运行并发布端口：
        ```bash
        docker run -d -p 80:3000 --name c1 react-app
        ```
        - 访问本机 `http://localhost:80`，请求将转发到容器内 3000 端口
    - 主机端口与容器端口可不同：
        - 如 `-p 8080:3000`，左为主机端口，右为容器端口
    - 同一镜像可多次运行容器，主机需为每个容器指定不同主机端口

3. 端口映射状态查看：

    - `docker ps` 输出的 PORTS 列显示主机与容器的端口对应关系

4. 实用建议：

    - 服务型容器（如 Web 应用）必须发布端口，外部才可访问
    - 生产环境建议仅映射需要暴露的端口，提升安全性

## Executing Commands in Running Containers

> 简述：容器启动后，可用 `docker exec` 命令在其中执行任意命令（如 ls、shell），实现在线调试、排查和临时操作。不会中断原有容器进程。

**知识树**

1. `docker exec` 基本用法

    - 语法：`docker exec <选项> <容器名或ID> <命令>`
    - 用于在**已运行容器**内执行命令，而**不重启或中断主进程**

2. 典型场景

    - 查看容器内文件、目录等（如 `ls`、`cat`）
    - 进入容器内部，进行交互式操作（如 `sh`、`bash`）
    - 排查、调试应用问题，无需停止服务

3. 常用选项与示例

    - 执行一次命令（如 ls）：` docker exec react-app ls`
    - 进入交互式 shell（推荐加 `-it`）：`docker exec -it react-app sh`

4. 与 `docker run` 区别

    - `docker run`：新建并启动一个容器，执行指定命令
    - `docker exec`：在已运行的容器中，临时执行额外命令

## Stopping and Starting Containers

> 简述：容器类似于轻量级虚拟机，可随时停止与重启。停止后容器进程暂停，但文件系统和状态保留，重启可迅速恢复服务。

**知识树**

1. 停止容器

    - 命令：`docker stop <容器名或ID>`

        - 优雅终止容器进程
        - 停止后服务不可用，但数据与文件系统保留

2. 重启/启动已停止容器

    - 命令：`docker start <容器名或ID>`

        - 重新启动已停止的容器（保持原有状态和文件）
        - 不会新建容器，也不会重新执行 build
        - 适合短时维护、调试后恢复服务

3. `docker run` vs `docker start`

    - `docker run`：创建并启动**新**容器，通常会产生新 ID
    - `docker start`：仅重启**已存在**、已停止的容器，不会产生新容器

4. 实用场景

    - 日常维护、升级、调试或资源释放时可安全 stop/start
    - 停止状态下，容器数据不会丢失，可随时恢复

## Removing Containers

> 简述：Docker 支持随时删除不需要的容器，以释放系统资源和保持环境整洁。可删除单个或批量清理停止状态的容器。

**知识树**

1. 删除单个容器

    - 命令一：`docker rm <容器名或ID>`
        - **仅可删除已停止的容器**
    - 命令二：`docker container rm <容器名或ID>`
        - 与 `docker rm` 等价

2. 强制删除正在运行的容器

    - 加 `-f` 选项强制终止并删除容器：`docker rm -f <容器名或ID>`

3. 批量清理所有已停止容器

    - 一键清理：`docker container prune`
        - 自动删除所有已停止容器，释放磁盘空间
        - 执行前会提示确认

4. 查看容器列表与筛选

    - 查看所有容器（包含已停止）：`docker ps -a`
    - 可结合 Linux 命令行工具筛选显示：`docker ps -a | grep <容器名或ID>`

## Containers File System

> 简述：每个容器拥有独立的文件系统，互不影响，数据默认仅存在于各自容器内部。容器删除后，其内部文件也会丢失。

**知识树**

1. 文件系统隔离特性

    - 每个容器启动时，都会基于镜像分配独立文件系统
    - 容器间文件系统互不可见

2. 实验演示

    - 在容器 A 内创建文件

        ```bash
        docker exec -it containerA sh
        echo "data" > data.txt
        exit
        ```

    - 在容器 B 内查找文件

        ```bash
        docker exec -it containerB sh
        ls | grep data
        # 输出为空，文件不存在
        ```

3. 容器数据生命周期

    - 容器文件系统随容器销毁一并删除
    - 不可用于持久化和共享重要数据

4. 持久化需求

    - 应用需保存或共享数据时，应使用 Docker 卷（volumes）

## Persisting Data using Volumes

> 简述：卷（Volume）是容器外部的持久化存储，独立于容器生命周期，可跨容器共享和复用。用卷可安全保存数据，防止容器销毁导致数据丢失。

**知识树**

1. 卷（Volume）基本概念

    - 卷是由 Docker 管理的独立存储，物理上位于主机或云端
    - 卷可被一个或多个容器挂载，实现数据共享与持久化

2. 卷的创建与管理

    - 创建卷（可选，运行时自动创建更常用）：`docker volume create app-data`
    - 查看卷列表：`docker volume ls`
    - 检查卷的信息：`docker volume inspect app-data`
        - 如创建时间、Driver、地址等，可以使用云 Driver，这里的地址是在虚拟机器上，而非本机

3. 卷的挂载与使用

    - 挂载卷到容器目录：`-v <卷名>:<容器内目录>`
        - 如：`docker run -d -v app-data:/app/data react-app`
        - 卷如果不存在会自动创建
        - 地址如果不存在，也会自动创建，如果挂载目录由 Docker 自动创建，属主为 root，普通用户（如 app 用户）无写权限，应该在 Dockerfile 中预先用应用用户创建目标目录，确保权限正确
    - 容器内对 `/app/data` 的所有操作实际写入卷，主机和其它容器可复用

4. 卷的生命周期与数据持久化

    - 删除容器不会删除卷，数据不会丢失
    - 重建容器并挂载同一卷，历史数据自动复用
    - 可被多个容器同时挂载，实现共享存储

5. 当前 Dockerfile 示例

    ```Dockerfile
    FROM node:16.0-alpine3.13
    RUN addgroup app && adduser -S -G app app
    USER app
    WORKDIR /app
    RUN mkdir data
    COPY --chown=app:app package*.json .
    RUN npm install
    COPY --chown=app:app . .
    ENV API_URL=http://api.myapp.com
    CMD ["npm", "start"]
    ```

6. 演示步骤

    ```bash
    # 创建卷（可选）
    docker volume create app-data
    # 检查卷的信息（可选）
    docker volume inspect app-data

    # 启动容器并挂载卷
    docker run -d -p 66:3000 -v app-data:/app/data --name react-app react-app

    # 容器内写入数据
    docker exec -it react-app sh
    echo "data" > /app/data/data.txt
    exit

    # 删除并重建容器，数据依然存在
    docker rm -f react-app
    docker run -d -p 66:3000 -v app-data:/app/data --name react-app react-app
    docker exec -it react-app ls /app/data  # 仍可看到 data.txt
    ```

## Copying Files between the Host and Containers

> 简述：通过 `docker cp` 命令，可在主机与容器间直接复制文件或目录，实现日志导出、手动数据注入等操作，无需重建镜像。

**知识树**

1. 从容器复制到主机

    - 语法：`docker cp <容器名或ID>:<容器内路径> <主机路径>`
    - 示例：
        - 将容器内 `/app/log.txt` 拷贝到主机当前目录（创建命令`echo hello > log.txt`）
        - `docker cp react-app:/app/log.txt .`

2. 从主机复制到容器

    - 语法：`docker cp <主机路径> <容器名或ID>:<容器内路径>`
    - 示例：
        - 将主机 `secret.txt` 拷贝到容器 `/app` 目录（创建命令`echo hello > secret.txt`）
        - `docker cp secret.txt react-app:/app`

3. 场景与注意事项

    - 适用于导出容器日志、配置或结果文件
    - 可手动向容器内注入文件（如密钥、临时数据）
    - 不会影响镜像本身，仅对目标容器生效

4. 其它细节

    - 路径可为文件或目录，目录复制会保留层级结构
    - 目标路径需有写权限（受容器用户和目录权限影响）
    - 支持 Linux、macOS，Windows 下命令格式类似

## Sharing the Source Code with a Container

> 简述：开发环境中可将主机目录直接映射到容器，实现代码热更新。主机改动立即反映到容器，省去重建镜像或手动复制，极大提升前端和后端开发效率。

**知识树**

1. 代码改动后

    - 对于生产环境，需要构建新的镜像，打上标签，之后部署...稍后介绍
    - 对于开发环境，可以通过映射实现代码热更新
        - 注意：仅适合开发环境，生产环境应以镜像为准避免源代码泄露

2. 目录挂载与绑定（Bind Mount）

    - 通过 `-v <主机路径>:<容器路径>` 将主机目录直接映射进容器
    - 容器实时读取主机目录内容，适合代码开发与调试

3. 典型用法与示例

    - 挂载当前项目目录到容器 `/app`

        ```bash
        docker run -d -p 8080:3000 -v $(pwd):/app --name react-dev react-app

        # 或者使用 \ 进行换行增加可读性
        docker run -d -p 8080:3000 \
          -v $(pwd):/app \
          --name react-dev react-app
        ```

        - `$(pwd)` 为当前目录完整路径（Linux/macOS），Windows 下用 `%cd%` 或绝对路径
        - 修改主机代码后，容器内应用立即生效（如 React 热重载）

4. `Bind Mount` & `Named Volume`

    - Bind Mount（绑定挂载）：挂载主机指定目录，内容实时同步，适合开发
    - Named Volume（命名卷）：由 Docker 管理，适合持久化数据和生产环境

5. Compose

    - 相比用 docker run 手动输入复杂命令，Compose 更高效、易用，特别适合实际开发和多服务场景。下一节介绍

# Running Multi-container Applications

## Installing Docker Compose

> 简述：Docker Compose 是基于 Docker Engine 的多容器编排工具。可一条命令同时启动多个服务，是实际开发、测试和部署多服务项目的标准工具。**大多数平台已默认集成**。

**知识树**

1. Docker Compose 基本概念

    - Docker Compose 让你用一份配置文件（`docker-compose.yml`）描述多容器应用，极简一键启动、停止、管理所有服务。
    - 属于 Docker 官方维护，兼容所有主流平台。

2. 安装与集成情况

    - Mac / Windows（桌面版）：
        - Docker Desktop 已自带 Compose，无需手动安装。
    - Linux / Windows Server：
        - 需单独安装 Compose，官方文档有各自安装指令。
        - 推荐直接参考 [官方安装文档](https://docs.docker.com/compose/install/)。
    - 版本要求：
        - 推荐使用最新版 Docker Engine，自带最新 Compose。
    - 检查 Docker Compose 是否可用
        - 在终端执行，检查版本号：`docker-compose --version`

3. 补充说明

    - 帮助信息：
        - 使用`docker compose`查看
    - 旧版
        - 使用`docker-compose 命名`
    - 新版
        - 使用`docker compose 命令`

## Cleaning Up our Workspace

> 简述：开发或实验环境中，频繁操作容器与镜像会产生大量遗留数据。彻底清理所有容器与镜像，能保持环境整洁，避免资源浪费和操作干扰。

**知识树**

1. 批量删除所有容器

    - 查看所有容器 ID（包含已停止）：
        ```bash
        docker container ls -aq
        # -a 显示所有（含已停止），-q 仅输出 ID
        ```
    - 强制删除全部容器（包括运行中）：
        ```bash
        docker container rm -f $(docker container ls -aq)
        # -f 强制，防止因运行中容器导致失败
        ```

2. 批量删除所有镜像

    - 查看所有镜像 ID：
        ```bash
        docker image ls -q
        ```
    - 删除全部镜像：
        ```bash
        docker image rm -f $(docker image ls -q)
        # -f 强制，跳过依赖/运行中的报错（前提：容器已清空）
        ```

3. Docker Desktop 图形化清理（仅限桌面版）

    - Mac：状态栏 Docker 图标 → Preferences → Troubleshoot（故障排查）→ Clean / Purge data
    - Windows：通知区 Docker 图标 → Settings → Troubleshoot → Clean / Purge data
    - 作用：一键清理全部镜像、容器、卷、网络等，会重启 Docker 引擎
    - 注意：清理后短时间内 Docker 命令不可用，需等待引擎重启完成

## The Sample Web Application

> 简述：引入一个示例项目 `vidly`，包含 `react` 前端项目，`node` 后端项目，以及，稍后使用这个项目进行 Docker 演示

**知识树**

1. 标准流程描述（无需操作）

    - 分布在前后端中 `npm i` 下载依赖，此外还需要下载安装 mongodb

2. 使用 Docker

    - 使用 Docker，仅需输入`docker compose up`（设置好配置文件的情况下），即可让项目内的各个部分挨个创建镜像，并启动，并自动下载需要的镜像，非常方便。
    - 可能会由于网络原因，导致下载速度极慢

3. `docker compose up`命令（其他命令后续说明）

    - 功能：
        - 用于一键启动并编排项目中的所有服务（容器），按照 `docker-compose.yml` 文件中的定义完成以下操作：
    - 过程
        1. 拉取镜像
            - 自动下载所有未本地存在的镜像。
        2. 构建镜像
            - 对带有 `build` 配置的服务自动 build。
        3. 创建网络和卷
            - 按需自动创建服务间通信网络和挂载卷。
        4. 按依赖顺序启动所有服务容器
            - 参考 `depends_on`，按顺序启动所有服务。
        5. 输出日志流
            - 实时输出所有容器日志，便于调试和观察服务状态。
        6. 持续保持前台（默认）
            - 容器正常运行，终端会持续显示日志，直到 Ctrl+C 停止（或加 `-d` 参数后台运行）。

## JSON and YAML Formats

> 简述：JSON 和 YAML 都是常用的结构化数据描述语言，广泛用于配置、数据交换等场景。两者语法各有特点，适合不同应用场景。

**知识树**

1. JSON 基本语法与特性

    - 以对象（`{}`）或数组（`[]`）为顶层结构
    - key 必须使用双引号包裹；值支持字符串、数值、布尔、数组、对象
    - 逗号分隔多个键值对
    - 严格、易于机器解析，广泛用于前后端数据交换

    **示例**

    ```json
    {
    	"name": "The Ultimate Docker Course",
    	"price": 99,
    	"isPublished": true,
    	"tags": ["software", "devops"],
    	"author": {
    		"firstName": "Mosh",
    		"lastName": "Hamadani"
    	}
    }
    ```

2. YAML 基本语法与特性

    - 以缩进表示层级关系（类似 Python，无需花括号/方括号）
    - key 不需引号（除特殊字符），值直接跟在冒号后
    - 列表用 `-` 标识，元素同级缩进
    - 通常以 `---` 开头（表示文档开始，可选）
    - 可读性高、书写简洁，常用于配置文件

    **示例**

    ```yaml
    name: The Ultimate Docker Course
    price: 99
    isPublished: true
    tags:
      - software
      - devops
    author:
      firstName: Mosh
      lastName: Hamadani
    ```

3. 主要对比与适用场景

    - JSON：
        - 优点：结构严格、解析快、跨语言兼容性极强
        - 主要用于服务间数据交换（如 API、前后端通信）
    - YAML：

        - 优点：可读性强、便于手写和维护
        - 常用于配置文件（如 Kubernetes、Docker Compose 等）

    - 缺点对比：YAML 解析速度慢于 JSON，因其类型推断依赖上下文

4. 语法易错点与建议

    - YAML 缩进务必统一（建议 2 空格），否则解析失败
    - JSON 键必须用双引号，YAML 可省略
    - JSON 需用逗号分隔每组 key-value，YAML 不需逗号
    - YAML 不推荐用于大规模数据传输，仅适合配置描述
    - YAML 列表使用 `-`，对象用缩进表示归属关系

## Creating a Compose File

> 简述：Docker Compose 通过 `docker-compose.yml` 文件，用声明式语法统一管理多服务应用。支持自定义服务、网络、卷，实现一条命令启动、停止、配置整个应用环境。

**知识树**

1. 顶级结构与基本字段

    - `version`：指定 Compose 文件格式版本（省略）
        - 以前（Compose 2.x、3.x 时代），docker-compose.yml 文件必须声明 version 字段，如`version: "3"`
        - 现在（Compose Specification/V2），大多数情况下可以省略 version 字段
    - `services`：定义全部服务（如前端、后端、数据库），每个服务对应一个子对象，名称自定义
    - `volumes`：声明全局可复用卷，便于持久化或多服务共享

2. Service（服务）常用配置

    - `depends_on`
        - 用于声明服务间的“启动顺序依赖关系”。但是！它 不保证 B 已经真正“可用”（比如端口已开放、数据库可接受连接等），只保证容器启动流程的顺序。
    - `build`：指定构建上下文目录，自动查找其中的 Dockerfile 构建镜像
    - `ports`：端口映射，数组格式，`"主机端口:容器端口"`
    - `environment`：环境变量，可用数组或字典（推荐后者，结构更清晰）
    - `volumes`：卷挂载，数组格式，`"卷名:容器路径"`
    - `image`：指定直接拉取使用的镜像（如官方数据库镜像）

3. 典型 Compose 文件示例（多服务协作）

    ```yaml
    services:               # 前端服务（可自定义命名）
      frontend:
        depends_on:
          - backend
        build: ./frontend   # 指定 Dockerfile 路径（前端目录）
        ports:
          - 3000:3000

      backend:              # 后端服务
        depends_on:
          - db
        build: ./backend
        ports:
          - 3001:3001
        environment:        # 环境变量推荐用对象格式
          DB_URL: mongodb://db/vidly
        command: ./docker-entrypoint.sh

      db:                   # 数据库服务
        image: mongo:6-jammy
        ports:
          - 27017:27017     # 数据库端口
        volumes:
          - vidly:/data/db  # 将数据目录持久化到名为vitli的卷

    volumes:
      vidly:                # 声明全局卷，供db服务使用
    ```

    - 说明：
        - 各服务可用 `build`（本地代码）或 `image`（公共镜像）
        - 卷需先声明再使用，可跨服务挂载
        - 端口、环境变量、依赖关系均可灵活配置

## Building Images

> 简述：`docker-compose build` 只负责构建本地镜像，不启动容器。用于提前打包镜像，优化启动速度和控制构建流程。

**知识树**

1. `docker-copose build`命令

    - 只会针对 `build`: 字段定义的服务执行构建（等同于 `docker build` 命令，但可一次性对多个服务操作）。
    - 会读取对应 Dockerfile，将源码和依赖打包生成本地镜像。
    - 镜像构建完成后，后续执行 docker compose up 时会直接用已构建好的本地镜像（如果没有代码或 Dockerfile 变化，不会重新构建）。

2. 缓存问题

    - 使用 `docker-copose build`，如果存在缓存，会直接使用缓存
    - 使用 `docker-copose build --no-cache`，为不使用缓存构建镜像

3. 常用场景

    - 只想提前构建镜像，不启动服务。
    - `CI/CD` 场景下，先 `build`，后 `up`。
    - 代码/Dockerfile 更新后，需重新 `build`。

## Starting and Stopping the Application

> 简述：Docker Compose 允许一条命令自动编排并启动多个服务容器，极大简化开发、测试和部署多容器应用的运维流程。

**知识树**

1. 启动全部服务

    - 命令：`docker compose up`
    - 核心流程：
        1. 拉取所需镜像（自动下载缺失镜像）
        2. 构建本地镜像（针对 `build` 配置服务自动 build）
        3. 创建网络与数据卷（自动配置服务间通信与数据持久化）
        4. 按依赖顺序启动所有服务容器（参考 `depends_on`，保证启动顺序）
        5. 输出实时日志流（默认前台持续输出全部容器日志，便于调试观察）
    - 常用参数：
        - `-d`：后台运行，释放终端（如 `docker compose up -d`）
        - `--build`：强制每次启动前重建镜像（如 `docker compose up --build`）
        - 参数可组合使用（如 `docker compose up --build -d`）

2. 停止与移除服务

    - 命令：`docker compose down`
    - 作用：
        - 一键停止并移除所有 Compose 管理的容器和网络
        - 默认保留镜像与卷，便于下次快速启动
        - 持久化数据（如数据库卷）不会丢失
        - 如需连同数据卷彻底清理，加 `-v` 参数（如 `docker compose down -v`）

3. 查看服务状态

    - 仅显示当前 Compose 应用的容器状态：`docker compose ps`
    - 查看全局所有容器：`docker ps`
    - 输出包含容器名、启动命令、端口映射、运行状态等，便于监控和故障排查

4. 多实例与高可用

    - 支持同一服务启动多个副本，提高可用性与扩展性
    - 命令示例：`docker compose up -d --scale web=3`
        - 启动 web 服务的 3 个副本，适用于负载均衡与弹性扩容

## Docker Networking

> 简述：Docker Compose 自动为每组服务创建独立网络，使同组容器可通过“服务名直连”安全通信。理解网络隔离与端口映射，有助于正确设计微服务间调用与外部访问。

**知识树**

1. 网络自动创建与结构

    - 自动创建
        - `docker compose up` 时，自动生成独立网络（默认名：`<项目名>_default`）
    - 查看当前所有网络
        - 命令：`docker network ls`
        - 查看某网络下的容器与连接详情，使用`docker network inspect <网络名>`

2. 查看网络含义

    - `NETWORK ID`：网络的唯一标识符（内部 ID）
    - `NAME`：网络的名称。Docker 内置的有 `bridge`、`host`、`none`。
        - `bridge`：容器默认的虚拟局域网，即“桥接网络”。
        - `host`：容器直接用宿主机的网络协议栈，无网络隔离。
        - `none`：容器没有任何网络功能，完全隔离。
        - 自定义的（如 `vidly_default`）一般由 compose 项目名+“`_default`”组成。Compose 管理的所有服务容器均加入同一网络，隔离于全局 bridge。通过`docker network inspect <网络名/ID>`可以查看自定义下的 container。
    - `DRIVER`：网络驱动类型
        - `bridge`：最常用的桥接网络，容器间虚拟交换机（默认自带）
        - `host`：使用主机网络，没有隔离
        - `null`：无网络，完全隔离
        - 还有 overlay、macvlan 等高级用法
    - `SCOPE`：作用范围，通常单机下都是 local
        - `local`：只在本地 Docker 主机有效
        - `swarm`：Docker Swarm 集群网络
    - 网络类型补充
        - Linux 默认 driver：`bridge`
        - Windows 默认 driver：`nat`

3. 容器间通信机制

    - 容器之间通信
        - 同个 compose 内， 互相可用服务名直接访问，无需硬编码 IP。容器之间通信可以通过 `ping 服务名`进行测试，一般情况是否 root 用户不影响网络互通，容器里普通用户执行 ping 提示 permission denied，是因为 ping 需要 root 权限或 SUID 权限。在 Alpine 这类系统默认没加 SUID，需用 root 或手动授权。
    - DNS
        - Docker 内置 DNS SERVER 实现容器名到 IP 的动态解析
        - 每个容器启动时注册主机名到 Docker 内嵌 DNS
        - 容器内的 DNS RESOLVER 会询问 DNS SERVER，服务器代表的 IP 是什么，然后 DNS SERVER 将 IP 传递给对应容器的 DNS RESOLVER。
    - 端口映射与访问范围
        - 容器互联：容器间通过服务名直连，无需端口暴露
        - 主机/外部访问：必须在 Compose 文件用 `ports` 显式映射，如`- "27017:27017"`（主机端口:容器端口）
        - 主机访问容器服务需通过端口映射后的主机地址（如 `localhost:27017`）
            - 多 Compose 项目默认各自独立网络，容器跨项目间不可见
    - 应用举例
        - 由于 mongodb 将端口映射到了主机，可以通过连接工具（MongoDB Compass）进行访问

4. 容器互 ping 实验

    ```bash
    # 进入容器（默认普通用户）
    docker exec -it <容器名> sh
    # 容器内 ping 另一个服务名
    ping api
    # ping提示permission denied，退出
    exit

    # root身份进入容器
    docker exec -it -u root <容器名> sh
    # 容器内 ping 另一个服务名，查看后control+C退出
    ping backend

    # 查看容器内 IP 地址，可见 eth0/eth1 为网络接口
    ifconfig
    ```

## Viewing Logs

> 简述：Docker Compose 支持统一查看多容器日志，也能单独跟踪某个服务输出，方便快速定位和监控多服务应用运行状态。

**知识树**

1. 查看所有日志

    - 命令：`docker compose logs`
    - 功能：
        - 查看所有服务日志
        - 集中输出当前 Compose 项目下全部服务日志，自动按容器区分并着色
    - 常用参数：
        - `--help`：帮助命令，查看可选项
        - `-f` / `--follow`：实时追踪新增日志（持续输出，类似 `tail -f`）
        - `-t` / `--timestamps`：显示日志时间戳
        - `--tail N`：仅显示最近 N 行日志（如 `--tail 100`）

2. 查看指定服务日志

    - 命令：`docker compose logs <服务名>`，服务名为 compose 文件中的 service 名（如 `frontend`, `backend`, `db`）
    - 功能：
        - 输出指定服务的日志，便于聚焦问题服务

3. 单独查看某容器日志

    - 命令：`docker logs <容器ID或名称>`

## Publishing Changes

> 简述：开发时可将主机源码目录映射进容器，实现代码修改实时生效（热更新），无需频繁重建镜像，极大提升开发效率。此前已经介绍过，这一节介绍 compose 环境如何实现。

**知识树**

0. 备注

    - 为复现情景，本地需要使用 node14（14.16.0）

1. 源码挂载原理

    - 通过 volumes（卷）将主机项目目录直接映射到容器内工作目录
    - 主机的代码变动，容器内应用实时感知，适合本地开发调试
    - Compose 支持直接写相对路径，无需手动拼接绝对路径

2. Compose 文件写法

    ```Dockerfile
    services:
      frontend:
        depends_on:
          - backend
        build: ./frontend
        ports:
          - 3000:3000
        volumes:
          - ./frontend:/app # 相对路径：主机目录:容器目录

      backend:
        depends_on:
          - db
        build: ./backend
        ports:
          - 3001:3001
        environment:
          DB_URL: mongodb://db/vidly
        volumes:
          - ./backend:/app # 相对路径：主机目录:容器目录
        command: ./docker-entrypoint.sh

      db:
        image: mongo:6-jammy
        ports:
          - 27017:27017
        volumes:
          - vidly:/data/db

    volumes:
      vidly:
    ```

3. 挂载常见问题与解决

    - 依赖丢失/命令报错（如 nodemon not found）

        - 挂载后，容器 `/app` 目录与主机内容保持一致，主机若无 `node_modules`，容器也看不到，会导致依赖丢失
        - 解决：在主机对于目录先执行依赖安装`npm install`，再次启动后，容器可访问到完整依赖

4. 热更新流程与验证

    - 启动开发环境`docker compose up`
    - 修改主机代码后保存
        - 后端：如 `backend/routes/index.js`
        - 前端：如`frontend/public/index.html`
    - 容器中监听工具（如 nodemon）自动检测到变动，自动重启服务
    - 刷新页面即可看到最新效果，无需重建镜像
        - 后端：`http://localhost:3001/api`
        - 前端：`http://localhost:3000`

## Migrating the Database

> 简述：生产级部署需确保数据库结构、基础数据一致。迁移工具+容器启动顺序管理，实现应用自动化初始化和并发启动问题。

**知识树**

1. 数据库迁移工具原理

    - 迁移工具（如 migrate-mongo、Flyway、Liquibase 等）用于管理数据库结构/数据演变
    - 支持“脚本不可重复执行”：每次 up 只执行未运行的脚本
    - 典型脚本结构：`up`（升级）/`down`（回滚）；自动生成 changelog 追踪历史
    - 示例 migrate-mongo 脚本：`vidly/backend/migrations/20210208213312-populate-movies.js`

2. 在容器启动时自动迁移

    - 具体服务内部启动命令往往是`CMD ["npm", "start"]`，可以在 Compose 文件中用 `command` 字段重写默认启动命令，用于启动数据迁移文件。
    - 问题于解决方式：

        - 可能出现执行迁移脚本时，数据库还未启动的状态，这时需要用到 `wait` ，有多种实现 `wait` 的方式，本节使用 `wait for it`依赖
        - 传统的 command 命令过于繁琐，如 `./wait-for db:27017 && migrate-mongo up && npm start`，使用额外的 sh 文件，将这些命令写入，然后将文件地址写在 `command :` 后，可以解决这个问题

    - 文件见：`vidly/backend/docker-entrypoint.sh`

3. 卷与数据持久化

    - Docker Compose 默认**不会自动删除卷**，重启/重建容器不会清空数据
    - 如需完全重置数据库，需手动删除对应卷

        ```bash
        docker volume ls                   # 查看卷
        docker volume rm <卷名>            # 删除卷，清空数据库
        ```

## Running Tests

> 简述：自动化测试保障代码质量，可在主机本地快速运行，也可通过 Docker Compose 编排在容器中批量执行，适配不同开发与 CI/CD 流程。

**知识树**

1. `npm test`

    - `npm test` = `npm run test`
    - 功能
        - 当你在项目目录下运行 `npm test`，`npm` 会自动尝试运行你在 `package.json` 里的 `"scripts"` 部分定义的 `test` 命令。
    - 如果 `package.json` 里没有写 `scripts.test`
        - `npm` 会使用默认命令：`node test.js`
        - npm test 会尝试执行 `node test.js`（即执行项目根目录下的 `test.js` 文件，如果存在）。
        - 如果没有 `test.js` 文件，`npm` 会提示`“missing script: test”`。

2. 本地运行测试（推荐开发模式）

    - 在已经准备好了测试命令后，直接在主机项目目录下运行测试命令，速度快、反馈及时
    - 优势：无容器开销，热重载开发体验最佳，便于本地调试

3. 在容器中运行测试（适合集成/自动化场景）

    - 通过 Compose 定义专用测试服务，自动拉取/复用构建产物镜像，运行测试命令
    - 示例：

        ```yaml
        services:
        frontend:
          depends_on:
            - backend
          build: ./frontend
          ports:
            - 3000:3000
          volumes:
            - ./frontend:/app

        frontend-test:
          image: vidly-frontend
          volumes:
            - ./frontend:/app
          command: npm test

        # 省略其他
        ```

    - 优点：
        - 一条命令可统一启动服务和测试，适合 CI/CD 全流程、跨平台一致性
        - 可为每个服务（如 web、api）都定义专用测试服务
    - 缺点：
        - 测试启动和反馈相对较慢

# Deploying Applications

## Deployment Options

> 简述：Docker 支持将应用部署到单台主机或集群（多台服务器）。单机部署简单高效，适合个人和中小项目。集群部署实现高可用与弹性扩展，但需引入专门编排工具（如 Kubernetes）。

**知识树**

1. 单主机部署（Single Host Deployment）

    - 简单易用，适合开发、测试、小型生产环境
    - 通过 `docker compose` 或单独命令即可完成全部服务编排
    - 局限：
        - 单点故障：主机宕机应用不可用
        - 资源有限：难以承载大规模高并发
    - 适用场景：原型、个人项目、中小团队内部工具

2. 集群部署（Cluster Deployment）

    - 优势
        - 多主机协作，自动分配容器，实现高可用与横向扩展
        - 可应对主机故障、流量激增
    - 主流容器编排工具
        - Docker Swarm（Docker 官方自带）
            - 内置于 Docker Engine，命令简单。年社区热度较低，实际生产较少采用
        - Kubernetes（业界主流，Google 主推）
            - 强大生态，支持弹性伸缩、故障自愈、滚动升级等高级能力，学习曲线陡峭
        - 其他方案：如 AWS ECS、Nomad、OpenShift 等

3. 选型与扩展建议

    - 小型项目优先采用单主机部署，便于快速上线与维护（本节选择）
    - 随应用成长，可平滑迁移到 Kubernetes 等编排平台
    - 切勿一开始“过度设计”，以业务需求驱动技术选型

## Getting a Virtual Private Server

> 简述：部署 Docker 应用需先准备一台云服务器（VPS），主流平台众多，推荐从易用性高的平台入手。

**知识树**

1. 常见 VPS 提供商

    - 国内：腾讯云、阿里云？
    - Amazon Web Services（AWS）
        - EC2：一年免费，累计仅 100G 免费流量
    - Digital Ocean（了解到 60 天免费，200$额度）
    - Google Cloud Platform
    - Microsoft Azure

2. 开通 VPS 的准备

    - 所有平台都需绑定信用卡或借记卡用于注册
    - 仅需一台 VPS 即可完成后续全部部署演示

## Installing Docker Machine

> 简述：Docker Machine 用于在本地远程管理云服务器上的 Docker 引擎，让本地 Docker 命令可以直接控制云端主机。当前已经不再流行，稍后介绍 Docker Context

**知识树**

1. Docker Machine 作用

    - 远程操作 VPS 上的 Docker（本地发命令，云端执行）

2. 安装步骤（安装在本机）

    - 访问 [github.com/docker/machine/releases](https://github.com/docker/machine/releases)
    - 按操作系统选择安装命令，复制粘贴到终端即可完成安装
    - Mac（M 芯片，默认使用 Rosetta2 兼容）
        ```bash
        curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-Darwin-x86_64 | sudo tee /usr/local/bin/docker-machine > /dev/null
        sudo chmod +x /usr/local/bin/docker-machine
        ```

3. 验证安装

    - 运行 `docker-machine --version` 检查是否安装成功

## Provisioning a Host（EC2）

> 简述：Docker Machine 可一条命令自动创建云端服务器（Droplet）、远程安装 Docker，并便于后续直接本地远程管理。

**知识树**

1. 驱动选择与 Access Token

    - Docker Machine 支持多平台，需指定 `--driver`，如 AWS、Digital Ocean、Azure 等
    - 使用云平台需提前生成 API Access Token
    - AWS
        - 控制台 > 右上角“账户名” → “安全凭证” > 创建 Access Key（包含 Access Key ID 和 Secret Access Key），注意保存 Secret Access Key
    - Digital Ocean （补充）
        - 控制台 > Account > API > Generate Token
    - 文档（目前只找到日文文档）：
        - https://docs.docker.jp/machine/drivers/aws.html

2. 创建服务器完整命令（以 EC2 为例）

    ```bash
    docker-machine create \
      --driver amazonec2 \
      --amazonec2-access-key <AWS_ACCESS_KEY_ID> \
      --amazonec2-secret-key <AWS_SECRET_ACCESS_KEY> \
      --amazonec2-region <区域名, 如 us-east-1> \
      --amazonec2-instance-type <实例类型, 如 t3.micro> \
      --amazonec2-ami <AMI ID, 可选，默认使用 Ubuntu> \
      <server-name>

    # 如
    docker-machine create \
      --driver amazonec2 \
      --amazonec2-access-key xxx \
      --amazonec2-secret-key xxx \
      --amazonec2-region ap-southeast-1 \
      --amazonec2-instance-type t2.micro \
      --amazonec2-ami ami-01bc5d00223e71e41 \
      --engine-install-url "https://releases.rancher.com/install-docker/20.10.sh" \
      docker-vidly
    ```

    - `driver`：
        - 指定不同的驱动，比如 amazonec2、 digital-ocean 等，不同 driver 的后续配置不同
    - `access-key`/`secret-key`：
        - 创建密匙时生成这一对，需要及时保存到安全的地方，否则关闭之后无法再次查看
        - 示例中两个 key 均为演示，无法使用
    - `region`：
        - 区域，如`ap-southeast-1`，请勿带上 `a`，`ap-southeast-1a`的`a1 为可选的意思
    - `instance-type`：
        - 默认选择 `t2.micro` 免费，否则可能产生额外费用
    - `amazonec2-ami`：非常重要
        - 需要使用新版本的 ubuntu 系统，系统默认使用的是老版本 AMI（Amazon Machine Image），需要前往地址查询新版或者较新的 LTS 版本，另外由于 ec2 默认使用 x86，需要选择 amd 版本的 ubuntu。示例中为可用类型
        - 查询网址：
            - https://cloud-images.ubuntu.com/locator/ec2/
    - `engine-install-url`：
        - `docker-machine`仅支持到了 docker20，当前最新已经 28
    - `<server-name>`：自定义服务器名称（如 `docker-vidly`）

3. 后续操作

    - 新服务器上线但未部署应用，浏览器访问公网 IP 暂无内容
    - 可直接通过 Docker Machine 或 SSH 管理和部署应用

## Connecting to the Host

- 使用`docker-machine ls`查看管理的 docker 服务器
- 使用`docker-machine ssh <name>`通过 ssh 连接服务器
    - 测试 `ls`、`cd /`等命令

## Defining the Production Configuration

> 简述：生产环境与开发环境需求不同，应单独维护专用 Compose 配置，去除开发特有配置并加强服务健壮性。

**知识树**

1. 生产环境 Compose 文件

    - 开发与生产环境配置需求不同，通常命名为 `docker-compose.prod.yml`（或其它约定名）

2. 修改生产 Compose 文件

    1. 将测试文件拷贝一份，重命名为`docker-compose.prod.yml`
    2. 去除开发特有配置
        - 不再需要源代码挂载卷（volumes）
            - 仅开发时挂载本地代码便于热更新，生产环境无需此功能，应移除 `volumes` 配置
        - 移除测试服务容器
            - 生产环境不运行单元/集成测试服务，避免浪费资源
    3. 修改端口（可选）
        - 将前端映射修改为`80:80`，前一个 80 为 http 的默认端口，后一个 80 为 nginx 默认监听端点
    4. 设置 restart 策略（可选）

        - 默认为 no，崩溃后不会有其他行为
        - 其他选择
            - `always`（总是自动重启）
            - `on-failure`（只有容器异常退出时才自动重启，正常退出不会重启）
            - `unless-stopped`（容器异常退出时自动重启，除非被手动停止）
        - 推荐策略： `restart: unless-stopped`

3. `docker-compose.prod.yml`示例

    ```yml
    services:
      frontend:
    	depends_on:
    	  - backend
    	build: ./frontend
    	ports:
    	  - 80:80
    	restart: unless-stopped

      backend:
    	depends_on:
    	  - db
    	build: ./backend
    	ports:
    	  - 3001:3001
    	environment:
    	  DB_URL: mongodb://db/vidly
    	command: ./docker-entrypoint.sh
    	restart: unless-stopped

      db:
    	image: mongo:6-jammy
    	ports:
    	  - 27017:27017
    	volumes:
    	  - vidly:/data/db
    	restart: unless-stopped

    volumes:
      vidly:
    ```

4. 多环境文件扩展

    - 可为测试、预发布等环境分别维护不同 Compose 文件（如 `docker-compose.test.yml`, `docker-compose.staging.yml`）

## Reducing the Image Size

> 简述：生产部署镜像应只包含最终可运行产物及其最小运行时环境，无需开发依赖、构建工具和源码。通过多阶段构建，可极大压缩镜像体积、提升安全性和启动性能，适用于前后端及各种主流开发栈。本节以前端做一个演示。

**知识树**

1.  生产环境 Dockerfile 文件

    - 开发与生产环境构建需求不同，通常命名为 `Dockerfile.prod`（或其它约定名），并在`docker-compose.prod.yml`指定服务执行该脚本，而非默认的 Dockerfile 文件。

2.  前端生产构建原理

    - 大多数现代前端框架（如 React、Vue、Angular）都支持“构建”生成优化静态资源（`npm run build`）
    - 产物通常位于 build 或 dist 目录，仅需部署此目录

3.  修改生产 Dockerfile 文件

    1. 将测试文件拷贝一份，重命名为`Dockerfile.prod`
    2. `Dockerfile.prod`示例

        ```yml
        FROM node:14.16.0-alpine3.13 AS build-stage
        WORKDIR /app
        COPY package*.json ./
        RUN npm install
        COPY . .
        RUN npm run build

        FROM nginx:1.24-alpine
        RUN addgroup app && adduser -S -G app app
        USER app
        COPY --from=build-stage /app/build /usr/share/nginx/html
        EXPOSE 80
        ENTRYPOINT [ "nginx","-g", "daemon off;" ]
        ```

    3. `docker-compose.prod.yml`对应配置

        ```yaml
        services:
          frontend:
            depends_on:
              - backend
            # 指定 Dockerfile.prod 作为生产环境的 Dockerfile
            build:
              context: ./frontend
              dockerfile: Dockerfile.prod
            ports:
              - 80:3000
            restart: unless-stopped

        # 后续省略
        ```

4.  测试执行

    - 使用生产 compose 文件构建
        - `docker compose -f docker-compose.prod.yml build`
    - 查看镜像大小，前端镜像大幅度缩小了
        - `docker images`

## Deploying the Application

1. 使用`docker-machine ls`查看管理的机器
2. 使用`docker-machine env <name>`，提示 Run this command to configure your shell
3. 本地 shell 打开，运行`eval $(docker-machine env <name>)`
    - 设置完成后，每个本地命令，将发送至远程 Docker
4. 使用`docker compose -f docker-compose.prod.yml up -d`
    - 通过这个操作，本地会将当前目录及 Dockerfile 所需内容打包，然后通过 Docker API 传输到远程服务器，在远程服务器上执行镜像构建（运行 Dockerfile），容器也会在远程服务器上启动。
    - 通过访问`http://<购买服务器到地址>:3001/api`，可以访问到后端
    - 可能需要设置开放安全组入站端口 3001
5. 使用 `docker ps` ，可以看到远程服务器中，前端正在重启，这时因为重启策略，下一节介绍解决

## Troubleshooting Deployment Issues

1. 使用 `docker logs <ID/名称>` 查看前端问题，提示 nginx 权限问题
2. 比较简单的解决方案（仅供演示）
    1. 删掉 nginx 的用户设置，使用 root 运行
    2. 使用`docker compose -f docker-compose.prod.yml up --build -d` 重新构建
    3. 使用 `docker ps` ，可以看到远程服务器中，各个服务运行良好
3. 其他方式需要学习 nginx 相关内容

## Publishing Changes

1. 生产中，镜像应明确标注版本号，通过 `image` 标签实现，如下

    ```docker-compose.prod
    services:
      frontend:
        depends_on:
          - backend
        # 指定 Dockerfile.prod 作为生产环境的 Dockerfile
        build:
          context: ./frontend
          dockerfile: Dockerfile.prod
        image: vidly-frontend:2.0
        ports:
          - 80:80
        restart: unless-stopped

      backend:
        depends_on:
          - db
        build: ./backend
        image: vidly-backend:1.0
        ports:
          - 3001:3001
        environment:
          DB_URL: mongodb://db/vidly
        command: ./docker-entrypoint.sh
        restart: unless-stopped

      db:
        image: mongo:6-jammy
        ports:
          - 27017:27017
        volumes:
          - vidly:/data/db
        restart: unless-stopped

    volumes:
      vidly:
    ```

# 分别部署服务而非 compose

> 需求：假如需要部署后端服务 spring-store-api，需要一个 mysql 服务

**步骤**

1. 创建自定义网络

    ```sh
    docker network create spring-store-net
    ```

2. 启动 MySQL 容器

    ```sh
    docker run -d \
      --name mysql \
      --network spring-store-net \
      -e MYSQL_ROOT_PASSWORD=myPassword! \
      -e MYSQL_DATABASE=spring_store \
      -v ~/mysql_data:/var/lib/mysql \
      mysql:8.0
    ```

3. 构建后端镜像

    ```sh
    # m系芯片默认构建 arm64 架构镜像
    docker build -t spring-store-api:1.0 .
    # 构建 amd64 需要使用 buildx
    ## 切换并启用 buildx 构建器
    docker buildx create --use
    ## 本地构建 amd64 镜像
    docker buildx build --platform linux/amd64 -t zilu1/spring-store-api:1.0-amd64 --load .
    ```

4. 启动后端服务容器

    ```sh
    docker run -d \
      --name spring-store-api \
      --network spring-store-net \
      -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/spring_store \
      -e SPRING_DATASOURCE_USERNAME=root \
      -e SPRING_DATASOURCE_PASSWORD=myPassword! \
      -e JWT_SECRET=xxxx\
      -e STRIPE_SECRET_KEY=xxxx \
      -e STRIPE_WEBHOOK_SECRET_KEY=xxxx \
      -p 8080:8080 \
      spring-store-api:1.0
    ```

    - `.env`文件中的内容需要使用`-e`指定

5. 参照 Building Images——Sharing Images，进行发布及版本管理

    ```bash
    # 登录 Docker Hub
    docker login
    # 推送镜像到远程仓库示例
    docker push zilu1/spring-store-api:1.0
    # 对于ec2默认版本，仅需推送 amd64 架构镜像
    docker push zilu1/spring-store-api:1.0-amd64
    ```

6. ec2 部署

    ```bash
    sudo apt update
    sudo apt install -y docker.io
    sudo systemctl enable docker
    sudo systemctl start docker
    # 推荐让当前用户支持无 sudo（可选，重连后生效）
    sudo usermod -aG docker $USER

    # 重启后
    docker pull zilu1/spring-store-api:1.0-amd64

    # 创建自定义网络
    docker network create spring-store-net

    # 创建卷
    docker volume create mysql_data

    # 启动 MySQL 容器
	docker run -d \
	  --name mysql \
	  --network spring-store-net \
	  -e MYSQL_ROOT_PASSWORD=myPassword! \
	  -e MYSQL_DATABASE=spring_store \
	  -v mysql_data:/var/lib/mysql \
	  mysql:8.0

    # 启动 Spring Boot 服务
docker run -d \
  --name spring-store-api \
  --network spring-store-net \
  -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/spring_store \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=myPassword! \
  -e JWT_SECRET=xxx \
  -e STRIPE_SECRET_KEY=xxx \
  -e STRIPE_WEBHOOK_SECRET_KEY=xxx \
  -p 8080:8080 \
  zilu1/spring-store-api:1.0-amd64

    # 检查容器运行状态
    docker ps -a
    docker logs spring-store-api
    ```

    - 注意：开放 AWS 安全组端口，确保 8080 端口允许外部访问。
    - 访问服务：`http://你的 EC2 公网 IP:8080/`
