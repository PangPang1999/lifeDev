## 思路

随着学习的深入，后期各章节所涉及的代码改动日益复杂，已不再是 JavaScript 或 Java 基础阶段那种相对独立的单点修改。特别是在 Spring Boot 项目中，一个类往往涉及多个实体类之间的协作与耦合，使得逐节编写面向初学者、逐行讲解的笔记显得过于理想化，难以全面覆盖实际场景。因此，我认为更可行的方式是构建一套结构化、模块化的笔记体系，类似字典式的大纲索引，按功能或概念组织内容，以便在需要时快速检索并定位相关知识点与用法。

## 快捷键

1. 高级
    - 提取方法/接口： （选取代码）置顶菜单 Refactor——Extract/Introduce——Method/Interface
        - 提取方法默认为 private
2. 进阶

    - command+P 查看构造参数，如在`new User();`的括号内按下此快捷键
    - command+G 选中后查找下一个相同内容
        - command + shift + G 选中后查找上一个相同内容
        - command + control + G 选中后，选中所有相同内容

3. 基础
    - Command+shift+A，搜索 rearrange：调整代码结构
    - `Shift+Command+上下`移动方法
    - `Command+,`设置
    - `Command+shift+O`查找文件
    - `Control+r`运行
    - `Control+D`调试运行

## 待补充

> 在前面阶段不过多的介绍复制的概念是好的学习方案。但是为了避免遗漏，这里记录课程中，我觉得有必要补充的东西

1. Web 应用专用作用域（感觉在 Part2）
2. 数据库没有 Mybatis 以及 Mybatis Plus，本节课程不覆盖，需要单独 Cover
3. 一对多关系单关系
4. 将中间表建模为显式实体类，待理解写入操作后进行编写

# Prerequisites

1. **Java & OOP**

    - Solid understanding of Java
    - Core object-oriented concepts: classes, methods, interfaces

2. **Databases & SQL**

    - Data modeling: tables, primary/foreign keys, relationships
    - Writing basic SQL statements

- **Structure**

    - Core: Fundamentals of SpringBoot
    - Web : Building web applications and APIs

**Part1**

1. Getting Started with Spring Boot
2. Dependency Injection
    1. how Spring Boot manages objects and their dependencies behind scenes
3. Database Integration with Spring Data JPA
    1. bread and butter of part one
    2. cover concepts that are often overlooked
    3. best practices
    4. efficient data access patterns
    5. tools that are essential for building real-world applications

**Part1 Introduction**

Introduction to Spring Boot
Setting up your development environment
Creating a Spring Boot project.
Understanding the project structure
Managing dependencies
Building and running your application
Using Spring Boot DevTools
Configuring your application
Debugging your application

**target:**

- be comfortable setting up and running SpringBoot projects and have the first application up and running.

# Start

## 介绍

> 简述：Spring 是用于构建 Java 应用的模块化框架，提供依赖注入、面向切面编程等功能。Spring Boot 基于 Spring 提供自动配置和默认设置，极大简化应用开发。

**知识树**

1.  Spring Framework:

    - 定义:
        - 用于开发 Java 应用的模块化、开源框架，提供核心基础设施。
    - 核心模块
        - 核心容器 (Core Container)
            - 处理依赖注入 (Dependency Injection - DI) 和对象管理 (Bean Management)。这是框架的基础。将在下一节介绍这部分内容。
        - Web 层 (Web Layer):
            - 构建 Web 应用，处理 HTTP 请求与响应 (JSON、HTML 等格式)。
        - 数据访问层 (Data Access Layer)
            - 数据库交互支持（JDBC、ORM、NoSQL 等）。
            - ORM： Object relationship mapping
        - 面向切面编程 (Aspect-Oriented Programming, AOP)
            - 模块化横切关注点（如日志、安全、事务管理），避免代码重复。
        - 测试支持层 (Testing Layer)
            - 提供组件单元测试与集成测试的能力。
    - 特性 (Characteristics):
        - 模块化 (Modular)：按需组合。
        - 灵活性 (Flexible)：自由配置，满足多样需求。
    - 缺点
        - 手动配置复杂，项目启动速度慢。

2.  Spring Boot:

    - 定义
        - 建立在 Spring 之上的开发框架，专注于自动化配置和默认设置，简化应用创建与运行。
    - 核心机制
        - 自动配置 (Auto-Configuration)
            - 根据项目依赖和环境自动执行配置。
        - 约定优于配置 (Convention over Configuration)
            - 提供合理的默认值，减少明确配置需求。
        - 起步依赖 (Starter Dependencies)
            - 常见功能的预集成依赖库，简化项目依赖管理。
        - 内嵌服务器 (Embedded Servers)
            - 内置 Web 服务器 (Tomcat、Jetty)，直接打包运行，无需部署 WAR。
    - 优势 (Advantages):
        - 快速启动开发过程 (Rapid Development)：几分钟即可启动项目。
        - 降低样板代码 (Reduced Boilerplate)：使开发者专注于业务逻辑。
        - 部署简单 (Easy Deployment)：生成独立可执行的 JAR 包。
    - 与 Spring Framework 的关系
        - 在 Spring 基础上优化使用体验，不取代 Spring，增强易用性。

3.  Spring 生态系统 (Spring Ecosystem):

    - 定义
        - 基于 Spring 核心框架和 Spring Boot，扩展出的用于具体领域开发的工具库集合。
    - 作用
        - 提供特定问题领域的解决方案，扩展框架能力。
    - 常见组件
        - Spring Data
            - 数据库访问抽象，支持 SQL 与 NoSQL 存储。
        - Spring Security
            - 提供身份认证 (Authentication)、权限控制 (Authorization) 等安全功能。
        - Spring Batch
            - 实现大规模批处理任务的开发与运行。
        - Spring Cloud
            - 分布式系统、微服务开发支持，服务发现、配置管理、熔断限流等。
        - Spring Integration
            - 支持企业应用之间的消息传递与整合。

## 环境搭建

> 简述：简述：在 macOS 上安装并配置 JDK 17，安装 IntelliJ IDEA 开发工具，Maven 使用 IDEA 内置，无需额外安装。

1. Java

    1. 使用 Homebrew 安装 JDK
        ```bash
        brew install --cask zulu@17
        ```
    2. 配置 Java 环境变量，终端执行下面代码，添加 Java 环境变量，并刷新
        ```bash
        echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 17)' >> ~/.zprofile
        echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zprofile
        source ~/.zprofile
        ```
        - `Command + Shift + .`显示隐藏文件
    3. 在终端输入`echo $JAVA_HOME`确认 JAVA_HOME 环境变量已经正确设置
        ```sh
        echo $JAVA_HOME
        ```
    4. 验证安装：
        ```bash
        java -version
        javac -version
        ```

2. IntelliJ IDEA

    - 下载 Ultimate 版：访问 `https://www.jetbrains.com/idea/download`
    - 如果使用 InteliJ IDEA 编译器，无需安装 Maven，需要设置私服的时候，在 maven 设置里指定 setting 文件

## 创建项目

1. 方式一：start.spring.io

    - 打开 `https://start.spring.io`
    - 配置：
        - 构建工具：Maven
        - 语言：Java
        - Spring Boot 版本：最新稳定
        - Group：com.codewithmosh
        - Artifact：store
        - Packaging：Jar
        - Java 版本：17
        - 依赖：暂不选择
    - 操作：点击 GENERATE 下载项目
    - 导入：解压后，用 IntelliJ IDEA 打开项目根目录

2. 方式二：IntelliJ IDEA

    - 启动 IDEA → New Project → Spring Boot
        - 名称：store
        - 设置路径，并创建 git 仓库
        - 语言：Java
        - Project Type：Maven
        - Group：com.codewithmosh
        - JDK：17
        - Packaging：Jar
        - 下一步，选择最新稳定版本 SpringBoot
    - 完成：点击 Finish 创建项目

## 项目结构

> 简述：遵循 Maven/Gradle 目录约定，将核心配置、应用代码、资源、测试与构建包装器分离，确保项目结构清晰且构建环境一致。

**知识树**

1. 核心构建配置 (`pom.xml`)

    - 定义：Project Object Model，Maven 构建核心
    - 项目坐标：`groupId`、`artifactId`、`version`
    - 依赖管理：`<dependencies>` 中声明运行与测试依赖
    - 构建插件：`<build><plugins>` 配置编译、打包、测试流程

2. 源代码与资源布局 (`src` 目录)

    - `src/main/java`
        - 包结构：基于 `groupId.artifactId`
        - 启动入口：`*Application.java`
            - `SpringApplication.run(Class<?> primarySource, String... args)`：参数 1 为引导类，参数 2 为命令行参数
    - `src/main/resources`
        - 配置文件：`application.properties` 或 `application.yml`
        - 静态资源：`static/`、`templates/` 等
    - `src/test/java`
        - 结构镜像主代码目录
        - 用途：单元测试与集成测试

3. 构建一致性保障 (Maven Wrapper)

    - Maven Wrapper
        - 嵌入到项目中的脚本，它允许开发者在不全局安装特定版本 Maven 的情况下，使用项目预期的 Maven 版本来构建和运行项目。这确保了构建环境的一致性。
    - 组成
        - `.mvn/wrapper/maven-wrapper.properties`：指定 Maven 精确版本（`distributionUrl`）
        - `mvnw` / `mvnw.cmd`：脚本自动下载并使用该版本
    - 效果：
        - 确保任何环境下都使用统一的 Maven 版本进行构建，即使系统中没有全局安装 Maven 或安装了不同版本。

4. 辅助文件与目录

    - `.idea/`：IDE 配置，无需纳入源码
    - `.gitignore` & `.git/`：版本控制配置
    - `HELP.md`：帮助文件，对项目运行非必需。

## 依赖管理

> 简述：依赖管理定义项目所需外部库，集中声明、统一版本、简化配置，确保构建稳定性与兼容性。

**知识树**

1. 依赖（Dependency）

    - 定义：项目编译或运行时需要的外部组件包，用来实现常见功能，避免重复造轮子。
    - 示例：
        - Tomcat：内置的 HTTP 服务器，用于接收和处理浏览器的请求。
        - Spring MVC：Web 开发框架，简化请求-控制-视图流程的编写。
        - Jackson：将 Java 对象和 JSON 数据相互转换的工具。
        - Logback：记录程序运行日志的框架，帮助定位和分析问题。

2. Starter 依赖（Spring Boot Starters）

    - 定义：Spring Boot 提供的场景化依赖集合，聚合了一系列经过测试、能够协同工作的库，通常以 `spring-boot-starter-*` 命名
    - 特点：
        - 简化配置：聚合依赖，减少配置量。
        - 版本保障：统一版本，确保兼容性。
        - 开箱即用：即插即用，快速开发。
    - 示例：
        - `spring-boot-starter-web`（Web 开发基础套件，包括 Spring MVC、Tomcat、Jackson 等）

3. 依赖声明与获取

    - Maven 项目
        - 在 `pom.xml` 文件中的 `<dependencies>` 部分声明具体依赖
    - Gradle 项目
        - 在 `build.gradle`文件的 `dependencies` 块中声明依赖。
    - 来源：
        - Maven 中央仓库：[https://central.sonatype.com](https://central.sonatype.com)
        - IDE 辅助（IDEA 快捷方式 `Command + N` 添加依赖）
            - 若 IDE 的依赖辅助功能未按预期工作，可以尝试重启或重新安装 IDE
    - 同步：
        - 修改后，IDE 自动提示同步或手动刷新，更新本地依赖。

4. 依赖版本管理 (Dependency Version Management)

    - 机制：
        - 通过 `spring-boot-starter-parent` 父 POM 和 `spring-boot-dependencies` BOM(Bill of Materials) 文件集中控制依赖版本。BOM 内部通过 `<dependencyManagement>` 标签集中声明和管理了大量常用第三方依赖的推荐版本号。
    - 实现原理：
        - `<dependencyManagement>` 标签用于统一声明依赖版本，而不直接将依赖引入项目。当项目中实际声明这些依赖且不指定版本时，会采用定义的版本，从而确保版本一致性和兼容性。
    - 推荐用法：
        - 声明时省略版本，自动继承 Spring Boot 推荐版本
    - 版本查看：
        - 在 pom 文件中，按住 `Command` 点击`<parent>`标签中`<artifactId>`包裹的包名，重复步骤，即来到 `spring-boot-dependencies`文件，搜索`spring-boot-starter-web`可以查看到许多定好版本的依赖，都在`<dependencyManagement>`标签内

## Controller

> 简述：Controller 是 Spring MVC 中**处理用户请求**的组件，它接收客户端请求，与业务逻辑交互后决定返回视图或数据响应给用户，实现数据与界面的有效分离。

**知识树**

1. Spring MVC 架构模式

    - 模型（Model）：封装数据与业务逻辑。
    - 视图（View）：显示数据给用户（如 HTML 页面）。
    - 控制器（Controller）：接收客户端请求，调用模型，确定返回视图或数据。

2. Java 注解（Annotation）

    - 元数据：用于提供代码信息，不改变执行逻辑。
    - Spring 用途：声明组件、自动装配、简化配置（实现“约定优于配置”）。

3. 创建 Controller（Spring MVC 控制器）

    - 类声明：
        - `@Controller` 注解：声明类为请求处理组件，Spring 自动管理生命周期。
    - 方法定义：
        - 请求映射注解（`@RequestMapping`）：
            - `value` (默认)：映射请求路径。
            - `method`：请求方法（如 `GET`、`POST`）。
            - 更便捷注解：`@GetMapping`、`@PostMapping`。
            - 还有其他参数，这里不过多引入
        - 返回值：
            - 字符串视图名，Spring MVC 会自动查找静态资源或直接渲染视图模板。

4. 静态资源与视图管理

    - 存放路径（Spring Boot 默认）：
        - `src/main/resources/static/`（推荐）
        - `src/main/resources/public/`
        - `src/main/resources/resources/`
        - `src/main/resources/META-INF/resources/`
    - 静态文件访问：
        - Controller 方法返回静态资源名（如 `"index.html"`），框架自动加载并返回文件内容作为响应。

**代码实例**

1. StoreApplication 同级目录下创建 HomeController

    ```java
    @Controller
    public class HomeController {
        @RequestMapping("/")
        public String index() {
            return "index.html ";
        }
    }
    ```

    - 说明：接收根路径请求 (`"/"`)，返回视图名 `"index.html"`。

2. resource 目录下创建 static 文件夹，其内创建 index.html

    ```html
    <!DOCTYPE html>
    <html lang="en">
    	<head>
    		<meta charset="UTF-8" />
    		<title>Title</title>
    	</head>
    	<body>
    		<h1>Hello world</h1>
    	</body>
    </html>
    ```

    - 说明：Spring 自动从默认路径加载此文件作为响应。

## 运行

> 简述：Spring Boot 应用作为独立 Java 程序运行，内嵌服务器并支持 IDE 和命令行两种启动方式，简化开发与测试流程。

**知识树**

1. 内嵌服务器与启动入口

    - 内嵌 Web 服务器：默认 Tomcat，可替换为 Jetty/Undertow，打包后生成可执行 JAR/WAR。
    - 启动类：标注 `@SpringBootApplication` 的类中，`public static void main(String[] args)` 调用 `SpringApplication.run(...)` 初始化上下文并启动服务器。

2. IDE 启动

    - 支持主流 IDE：IntelliJ IDEA、Eclipse、VS Code（Java 扩展）。
    - 操作：在启动类或其 `main` 方法上右键 → Run，或使用运行配置/快捷键。
    - 输出：控制台实时显示 Spring Boot 启动横幅、服务器初始化、监听端口（默 8080）。

3. 命令行启动（Maven Wrapper）

    - 打开位置：项目根目录下，`mvnw`同级目录。
    - 验证版本：`./mvnw -v` 确保使用项目指定的 Maven 版本。windows 为 `mvnw.cmd -v`
    - 启动命令：`./mvnw spring-boot:run` 自动编译并运行应用。windows 为 `mvnw.cmd spring-boot:run`
    - 日志：终端显示构建及启动日志，与 IDE 输出一致。

4. 访问与终止

    - 访问：浏览器打开 `http://localhost:<端口>`（默认 `8080`）。
    - 停止：IDE 点击 Stop 图标，或终端按 `Ctrl+C`。

## Debug

> 简述：调试是软件开发中定位并修复程序缺陷（Bugs）的关键过程。

**知识树**

1. 调试方法

    - 断点：在代码行左侧点击设置，运行时程序暂停于此。
    - Step Over：执行当前行，不进入方法内部。
    - Step Into：进入方法内部，逐行调试。
    - Step Out：跳出当前方法，回到调用处。
    - Resume：继续运行至下一个断点或程序结束。

2. 调试技巧

    - 监视变量：添加 Watch 观察变量值变化，对特定类型的值，可以使用该值的方法
    - 条件断点：仅在指定条件满足时暂停
    - 简体调试时也可以使用输出进行调试

**代码示例**

1. Controller 调试示例

    ```java
    @Controller
    public class HomeController {
        @RequestMapping("/")
        public String index() {
            // 在此行设置断点，运行将暂停
            String viewName = getViewName();
            // 使用 Step Into 进入方法内部
            return viewName;
        }

        private String getViewName() {
            return "index";
        }
    }
    ```

    - 说明：在 `String viewName = getViewName();` 处打断点，Step Into 可进入 `getViewName()`。

## DevTools

> 简述：DevTools 是一个用于在代码修改后自动重启应用的工具，能够提升开发效率。然而，其重启速度与手动重启相比并不占优势。

**知识树**

1. 添加步骤

    - 在 `pom.xml` 中添加 `spring-boot-devtools` 依赖，移除版本号，添加 `<optional>true</optional>` 标签；
    - 打开 IDE 设置，搜索 **Compiler**，勾选 `Build project automatically`；
    - 在设置中搜索 **Advanced Settings**，勾选 `Allow auto-make to start even if the developed application is currently running`。

2. 使用效果

    - 每次修改代码后，系统会在短暂延迟后自动重启应用。

3. 使用建议

    - 实际体验中，使用快捷键手动重启应用，在勾选 `Do not show this dialog in the future` 后，其速度与 DevTools 自动重启几乎相同，甚至更快，因此手动重启可能是更高效的选择。

## 配置

> 简述：Spring Boot 通过统一的配置文件（`application.properties`/`application.yml`）集中管理应用参数，无需改动代码即可调整行为。

**知识树**

1. 配置文件类型

    - `properties` vs `yaml`：键值对 vs 层级结构，可按喜好选择，不建议同时使用。
    - 默认为`application.properties`，建议使用 yaml

2. 常见配置项

    - 服务器端口：`server.port`
    - 应用名称：`spring.application.name`

3. 注入与绑定配置示例

    - `@Value("${key}")`：单值注入，适合零散属性。

**代码示例**

1. 使用 `@Value` 注入

    ```java
    @Controller
    public class HomeController {
        @Value("${spring.application.name}")
        private String appName;

        @RequestMapping("/")
        public String index() {
            System.out.println("appName: " + appName);
            return "index.html";
        }
    }
    ```

    - 注释：单个属性注入，`${}` 包裹键名。

# 依赖注入

什么是依赖注入
为什么重要
它怎么让代码更清晰更容易维护

构造器注入
Setter 注入
SpringIOC 容器
使用注解配置 bean
控制 bean 的行为
额外的配置让应用更灵活
配置程序化的 bean
懒初始化
控制 bean 的范围
bean 的生命周期方法

目标：对依赖注入有深刻的理解，以及理解 Spring 怎么有效率的管理 bean

## 耦合与依赖注入

> 简述：依赖注入（Dependency Injection, DI）是一种实现控制反转（IoC）的技术，其核心思想是：将对象所依赖的 其他对象 由外部提供（注入），而不是在对象内部自行创建，从而降低耦合、便于测试和配置。本节先演示高耦合的弊端，再引出 DI 的必要性。

**知识树**

1. 耦合（Coupling）

    - 定义：衡量模块之间依赖的紧密程度
    - 低耦合：通过接口或抽象层交互，修改影响范围可控
    - 高耦合：直接依赖具体实现，修改易引发连锁变化

2. 依赖注入（Dependency Injection, DI）

    - 定义：由外部容器或调用者提供依赖实例
    - 优势：
        - 降低模块间耦合
        - 简化单元测试。
        - 灵活替换实现，无需修改调用者。

3. 耦合举例

    - 类比：餐馆依赖厨师，可随意更换厨师保证运营；依赖特定厨师则风险大
    - 示例：如果类 A 依赖于 B，而 B 又依赖于 C，修改 C 可能影响 B 和 A

4. 问题引入

    - `OrderService` 硬编码依赖 `StripePaymentService`
    - 添加新支付方式时必须修改 `OrderService`，测试与维护成本上升

**代码示例**

1. 定义`StripePaymentService`类，在 store 包中创建

    ```java
    public class StripePaymentService {
        public void processPayment(double amount) {
            System.out.println("STRIPE PAYMENT " + amount);
        }
    }
    ```

2. 定义`OrderService`类，在 store 包中创建

    ```java
    public class OrderService {
        public void placeOrder() {
            var paymentService = new StripePaymentService();
            paymentService.processPayment(10.0);
        }
    }
    ```

    - 问题：`OrderService` 强依赖于 `StripePaymentService`，支付方式改变需修改代码。

3. 在`StoreApplication`中调用`OrderService`

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 暂时注释
            // SpringApplication.run(StoreApplication.class, args);
            var orderService = new OrderService();
            orderService.placeOrder();
        }
    }
    ```

    - 测试困难：测试 `OrderService` 必须包含 `StripePaymentService`。

## 构造函数注入

> 简述：构造函数注入（Constructor Injection）通过构造器参数将依赖对象传入实例，实现控制反转与依赖可替换，提高模块可测试性和扩展性。

**知识树**

1. 构造函数注入

    - 定义：通过构造器参数注入依赖实例
    - 优势：
        - 降低耦合：调用方不负责创建依赖
        - 符合开闭：新增实现无需修改类

2. 接口抽象

    - 定义：通过接口定义依赖契约，隐藏具体实现
    - 使用：
        - 在调用处声明接口类型
        - 将实现类实例传递给接口引用

3. 开闭原则（Open–Closed Principle）

    - 定义：对扩展开放，对修改关闭
    - 示例：新增 `PayPalPaymentService` 无需修改 `OrderService`

**代码示例**

1. 抽象接口

    ```java
    public interface PaymentService {
        void processPayment(double amount);
    }
    ```

    - 描述：定义通用支付契约，各实现类负责具体逻辑。
    - 快捷键：使用快捷键可快捷提取接口，置顶菜单 Refactor——Extract/Introduce——Interface

2. `StripePaymentService`实现接口

    ```java
    public class StripePaymentService implements PaymentService {

        @Override
        public void processPayment(double amount) {
            System.out.println("STRIPE PAYMENT " + amount);
        }
    }
    ```

    - 描述提供 Stripe 支付逻辑

3. `PayPalPaymentService`实现接口

    ```java
    public class PayPalPaymentService implements PaymentService {

        @Override
        public void processPayment(double amount) {
            System.out.println("PayPal PAYMENT " + amount);
        }
    }
    ```

    - 描述：提供 PayPal 支付逻辑提供 PayPal 支付逻辑

4. `OrderService`中使用构造函数注入接口引用

    ```java
    public class OrderService {
        private PaymentService paymentService;

        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
        }

        public void placeOrder() {
            paymentService.processPayment(10.0);
        }
    }
    ```

    - 依赖在实例化时注入，替换实现无需修改类

5. 注入与运行

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 暂时注释
            // SpringApplication.run(StoreApplication.class, args);
            var orderService = new OrderService(new PayPalPaymentService());
            orderService.placeOrder();
        }
    }
    ```

    - 运行时传入不同实现，`OrderService` 无需修改即可支持新支付方式。

## Setter 注入

> 简述：通过公开的 `setXxx(…)` 方法将依赖注入到类中，适用于可选或运行时调整的依赖，但若遗漏注入易引发空指针，通常仅在构造注入不便时使用。

**知识树**

1. 定义

    - 在类中提供公有 setter 方法，由外部容器或调用者调用注入依赖

2. 适用场景

    - 可选依赖：依赖非必需，可赋予默认实现
    - 运行时切换：动态替换依赖实例

3. 风险与建议

    - 空指针异常：调用前未注入导致 `NullPointerException`
    - 隐式依赖：依赖关系不明显，阅读难度增加
    - 缓解：
        - 提供默认实现
        - 框架注解（补充，暂不介绍）

4. 推荐策略

    - 优先构造函数注入，保证依赖不可变且显式
    - 仅在构造注入不适用（如循环依赖、可选参数）时使用

**代码示例**

1. 在 `OrderService` 中添加 Setter 注入

    ```java
    public class OrderService {
        private PaymentService paymentService;

        // 构造注入暂注释或移除
        // public OrderService(PaymentService paymentService) {
        //     this.paymentService = paymentService;
        // }

        public void placeOrder() {
            paymentService.processPayment(10.0);
        }

        public void setPaymentService(PaymentService paymentService) {
            this.paymentService = paymentService;
        }
    }
    ```

    - 描述：通过 `setPaymentService` 注入依赖；未调用时 `paymentService` 为 `null`

2. 在应用入口使用 Setter 注入

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 暂时注释
            // SpringApplication.run(StoreApplication.class, args);
            var orderService = new OrderService();
            orderService.setPaymentService(new PayPalPaymentService());
            orderService.placeOrder();
        }
    }
    ```

    - 描述：在运行时传入不同实现即可，单若省略 `setPaymentService` 调用，将抛出 NPE

## IoC 容器

> 简述：Spring IoC 容器通过控制反转与依赖注入自动管理 Bean 的创建、装配与生命周期，实现模块解耦与灵活扩展。

**知识树**

1. IoC（控制反转）

    - 定义：容器接手对象创建与依赖提供
    - 本质：由“我创建依赖”转为“容器注入依赖”

2. Spring IoC 容器

    - 定义：Spring 提供的对象管理容器，负责创建、注入、销毁对象
    - 类型：ApplicationContext 是常用的 IoC 容器实现
    - 获取方式：通过 `SpringApplication.run(...)` 返回容器实例

3. Bean

    - 定义：容器管理的对象
    - 特性：实例化、依赖注入、生命周期由容器控制
    - 配置：注解或 Java 配置类

4. 注册 Bean

    - 注解扫描：`@Component`、`@Service` 等自动识别，下一节介绍
    - Java 配置：`@Configuration` + `@Bean` 方法，稍后介绍

**代码示例**

1. 获取 IoC 容器并获取 Bean

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 获取 IoC 容器对象
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            // 通过容器获取 Bean 实例
            // 目前还没有往容器中加入bean，所以找不到报错
            OrderService orderService = context.getBean(OrderService.class);
            orderService.setPaymentService(new PayPalPaymentService());
            orderService.placeOrder();
        }
    }
    ```

    - 描述：启动应用返回容器实例，通过 `getBean` 获取已管理的 Bean，目前还没有往容器中加入 bean，所以找不到报错。

## 注解注册 Bean

> 简述：使用 Spring 提供的注解标记类，由容器自动扫描并实例化为 Bean，完成依赖自动注入，避免手动管理对象及其依赖。

**知识树**

1. 注解驱动注册 Bean

    - 定义：类标注特定注解，容器自动实例化并管理生命周期

2. 常用组件注解

    - `@Component`：通用组件，无具体角色
    - `@Service`：业务逻辑层，语义清晰
    - `@Repository`：数据访问层，便于异常转换
    - `@Controller`：Web 控制器，处理 HTTP 请求
    - 派生关系：后三者本质上均为 `@Component` 的特殊化，无行为差异，仅区分用途与语义

3. 自动装配注解

    - `@Autowired`：
        - 用于构造器、Setter 或字段注入
        - **单一构造器无需显式标注**（Spring 4.3+ ）
        - 多构造器场景必须显式标注
    - 使用建议：推荐省略，简洁纯净

4. Bean 优先级

    - 概念：
        - 多个实现同一接口时，容器无法确定默认注入对象，需额外指定（下一节介绍）
    - 注意：
        - 这一节仅在`OrderService`以及`PayPalPaymentService`上标柱`@Service`进行注册，而不理会`StripePaymentService`，因为两者都标准会导致调用时，容器不知道选择哪一个。

**代码示例**

1. 使用 `@Service` 标记业务逻辑类

    ```java
    @Service
    public class OrderService {
        private final PaymentService paymentService;

    	// 单一构造器，无需 @Autowired
        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
        }

        public void placeOrder() {
            paymentService.processPayment(10.0);
        }
    }
    ```

    - 描述：单一构造器无需显式使用 `@Autowired`，容器自动装配

2. 标记实现类为 Bean

    ```java
    @Service
    public class PayPalPaymentService implements PaymentService {
        @Override
        public void processPayment(double amount) {
            System.out.println("PayPal 支付: " + amount);
        }
    }
    ```

    - 描述：提供接口具体实现，自动纳入容器管理

3. 主启动类获取容器管理的 Bean

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 获取 IoC 容器对象
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            // 通过容器获取 Bean 实例，获取时自动调用其构造函数
            OrderService orderService = context.getBean(OrderService.class);
            orderService.placeOrder();
        }
    }
    ```

    - 描述：启动应用自动扫描注解，完成 Bean 实例化与注入

4. 多构造器显式指定注入构造器（示例）

    ```java
    @Service
    public class OrderService {
        private PaymentService paymentService;

        public OrderService() { }

        @Autowired
        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
        }
    }
    ```

    - 描述：不标注时容器优先使用默认构造器，可能导致依赖未注入，标注后指定构造器按需装配

## Bean 优先级

> 简述：当多个 Bean 实现同一接口时，Spring 无法自动确定使用哪个实现。为解决这种歧义，Spring 提供了 `@Primary`（设置默认 Bean）和 `@Qualifier`（指定具体 Bean）注解，以明确告诉容器选择合适的实现

**知识树**

1. Bean 歧义

    - 场景：多个 Bean 实现同一接口，容器无法自动选定

2. `@Primary` 注解

    - 定义：标记默认 Bean，当出现多个同类型 Bean 时优先注入
    - 特性：仅能作用于单个 Bean

3. `@Qualifier` 注解

    - 定义：在注入点显式指定 Bean 名称或 ID
    - 用法：配合构造器、字段或 Setter 使用

4. Bean 命名方式：

    - 默认：类名首字母小写（如 `paypalPaymentService`）。
    - 自定义：通过 `@Service("name")` 明确指定名称。

**代码示例**

1.  使用 `@Primary` 设置默认实现

    ```java
    @Service("stripe")
    @Primary
    public class StripePaymentService implements PaymentService {

        @Override
        public void processPayment(double amount) {
            System.out.println("STRIPE PAYMENT " + amount);
        }
    }
    ```

    - 描述：默认情况下将优先注入 Stripe 实现。

2.  命名实现类

    ```java
    @Service("paypal")
    public class PayPalPaymentService implements PaymentService {

        @Override
        public void processPayment(double amount) {
            System.out.println("PayPal PAYMENT " + amount);
        }
    }
    ```

3.  使用 `@Qualifier` 明确指定实现

    ```java
    @Service
    public class OrderService {
    	private PaymentService paymentService;

    	public OrderService(@Qualifier("paypal") PaymentService paymentService) {
    		this.paymentService = paymentService;
    	}

    	public void placeOrder() {
    		paymentService.processPayment(10.0);
    	}
    }
    ```

    - 描述：在 `OrderService` 特定注入 PayPal 实现，无需耦合具体实现类，仅引用 Bean 名称。

## Ex: 通知系统设计练习

> **要求**：设计一个可扩展的通知系统，支持通过不同渠道，如电子邮件(默认)、短信发送通知，无需修改核心业务逻辑即可切换通知方式。
>
> **解法**：
>
> 1. **定义契约**：创建 `NotificationService` 接口，声明 `send(String message)` 方法。
> 2. **实现渠道**：
>
>     - `EmailNotificationService`：标注 `@Service("email")` 并使用 `@Primary` 作为默认 Bean，`send` 方法打印邮件通知。
>     - `SMSNotificationService`：标注 `@Service("sms")`，`send` 方法打印短信通知。
>
> 3. **管理器注入**：创建 `NotificationManager`（`@Service`），通过构造函数注入 `NotificationService`，在 `sendNotification(String message)` 中委托调用。
> 4. **运行验证**：在启动类中获取 `NotificationManager` Bean 并调用 `sendNotification`，默认走邮件；如需短信，可在构造器参数上使用 `@Qualifier("sms")` 指定。

**代码**

1. 创建 `NotificationService` 接口

    ```java
    public interface NotificationService {
        void send(String message);
    }
    ```

2. 创建实现类`EmailNotificationService`

    ```java
    @Service("email")
    @Primary
    public class EmailNotificationService implements NotificationService {
        @Override
        public void send(String message) {
            System.out.println("Sending email : " + message);
        }
    }
    ```

3. 创建实现类`SMSNotificationService`

    ```java
    @Service("sms")
    public class SMSNotificationService implements NotificationService {
        @Override
        public void send(String message) {
            System.out.println("Sending SMS: " + message);
        }
    }
    ```

4. 创建 `NotificationManager`

    ```java
    @Service
    public class NotifacationManager {
        private final NotificationService notificationService;

        public NotifacationManager(NotificationService notificationService) {
            this.notificationService = notificationService;
        }

        public void sendNotification(String message) {
            notificationService.send(message);
        }
    }
    ```

5. 运行验证

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            var manager = context.getBean(NotifacationManager.class);
            manager.sendNotification("This is a test");
        }
    }
    ```

## 外部化配置属性

> 简述：Spring 支持将配置信息抽离到外部文件中（如 `.properties` 或 `.yaml`），通过注解注入到 Bean 中，避免硬编码，实现配置集中管理与灵活切换。

**知识树**

1. 属性注入方式：`@Value`

    - `${}`：
        - 概念：读取配置项的原始值，只负责提取值，不做逻辑计算
        - 示例：`@Value("${stripe.api-url}")`
        - 支持默认值：`@Value("${stripe.timeout:3000}")`，若配置文件中没有定义值，使用默认值
    - `#{}`：
        - 概念：执行 SpEL（Spring Expression Language）表达式，可在注入时对提取值进行表达式运算（如字符串拆分、类型转换、条件判断）
        - 示例：`@Value("#{'${stripe.supported-currencies}'.split(',')}")`
    - 嵌套能力：
        - `#{}` 可嵌套使用 `${}` 提取配置值再处理
    - 推荐：
        - 仅注入用 `${}`
        - 需运算用 `#{}`

2. 配置文件格式

    - `.properties`：平铺结构，适合简单场景，但键名前缀重复
    - `.yaml`：层级结构，表达清晰，推荐使用

3. 数据类型支持

    - 可注入：`String`、`boolean`、`int`、`double`、`List<T>`、`Map<K,V>` 等

4. 配置优先级

    - YAML 与 properties 可同时存在，若有冲突 YAML 优先
    - 项目中推荐统一使用一种格式（优先 YAML）

**代码示例**

1.  使用 `application.properties` 与 `@Value`

    - `application.properties`

        ```
        spring.application.name=store
        stripe.apiUrl=https://api.stripe.com
        stripe.enabled=true
        stripe.timeout=1000
        stripe.supported-currencies=USD,EUR,GBP
        ```

    - 在`StripePaymentService`读取配置文件中的设置

        ```java
        @Service
        public class StripePaymentService implements PaymentService {
        	  @Value("${stripe.api-url}")
        	  private String apiUrl;

        	  @Value("${stripe.enabled}")
        	  private boolean enabled;

        	  @Value("${stripe.timeout:3000}")
        	  private int timeout;

        	  @Value("#{'${stripe.supported-currencies}'.split(',')}")
        	  private List<String> supportedCurrencies;

        	  public void processPayment(double amount) {
        		  System.out.println("API URL: " + apiUrl);
        		  System.out.println("Enabled: " + enabled);
        		  System.out.println("Timeout: " + timeout);
        		  System.out.println("Currencies: " + supportedCurrencies);
        	  }
        }
        ```

        - 描述：注入基础类型、布尔值、默认值和集合类型

2.  使用 `application.yaml` 结构化配置

    ```yaml
    spring:
      application:
        name: store
    stripe:
      api-url: https://api.stripe.com
      enabled: true
      timeout: 60
      supported-currencies: USD,EUR,GBP
    ```

    - 描述：层级结构更清晰，避免重复前缀，便于维护

## 配置类注册 Bean

> 简述：使用 `@Configuration` 与 `@Bean` 注解，可通过纯 Java 代码方式定义并装配 Bean，提供更细粒度的控制，并支持实现对第三方类的配置。

**知识树**

1. Java 配置类

    - 使用 `@Configuration` 标记
    - 包含一个或多个带 `@Bean` 注解的方法

2. `@Bean` 注解

    - 定义：将方法返回值注册为 Spring 管理的 Bean
    - Bean 名称：默认取方法名，或可通过 `@Bean("name")` 指定
    - 优势：可在方法中添加任意逻辑，比注解扫描更灵活

3. 避免重复注册

    - 问题：
        - 同一个类既被  `@Component` （或  `@Service`  等）扫描，又在  `@Configuration`  里以  `@Bean`  显式注册，会产生两份 `BeanDefinition`。
        - `Bean name` 相同时，纯 Spring 环境最终只有一份 Bean，在 Spring Boot 2.1+中，启动直接抛异常
        - `Bean name` 不同时，容器里会并存 两个同类型 Bean，若按 类型 注入且未标  `@Primary` 或  `@Qualifier`，Spring 在启动阶段抛异常
    - 建议：
        - 避免双重注册：同一个类要么扫描、要么 `@Bean`，选一种即可。

4. 配合`@Primary`

    - 自定义配置类依然可以依赖`@Primary`，自动注入默认实现，支持在配置类中使用`@Qualifier`指定具体 Bean。

5. 引入示例

    - 注释掉`OrderService`、`PayPalPaymentService`、`StripePaymentService`上的注解，使用自定义配置类注入 bean
    - 在`application.yaml`加入`payment-gateway: paypal`，根据配置文件选择支付方式

**代码示例**

1. Java 配置类

    ```java
    @Configuration
    public class AppConfig {

        @Value("$payment-gateway")
        private String paymentGateway;

        @Bean
        public PaymentService stripe() {
            return new StripePaymentService();
        }

        @Bean
        public PaymentService paypal() {
            return new PayPalPaymentService();
        }

        @Bean
        public OrderService orderService() {
            if (paymentGateway.equals("stripe")) return new OrderService(stripe());
            else return new OrderService(paypal());
        }
    }
    ```

    - `@Configuration`：标记配置类
    - `@Bean`：将方法返回值注册为 Bean，名称由方法名或注解指定
    - 使用 `@Value` 读取 `payment.gateway` 配置，条件选择注入实现

2. 主启动类获取 Bean（不变）

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // 获取 IoC 容器对象
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            OrderService orderService = context.getBean(OrderService.class);
            orderService.placeOrder();
        }
    }
    ```

    - 启动时加载配置类，容器自动实例化并注入 `OrderService`，无需修改业务逻辑即可切换通知方式。

3. 配置类中设置默认实现

    ```java
    @Configuration
    public class AppConfig {

        @Value("$payment-gateway")
        private String paymentGateway;

        @Bean
        @Primary
        public PaymentService stripe() {
            return new StripePaymentService();
        }

        @Bean
        public PaymentService paypal() {
            return new PayPalPaymentService();
        }

        // @Bean
        // public OrderService orderService() {
        // if (paymentGateway.equals("stripe")) return new OrderService(stripe());
        // else return new OrderService(paypal());
        // }

        @Bean
        public OrderService orderService(PaymentService paymentService) {
            return new OrderService(paymentService);
        }
    }
    ```

## Bean 初始化时机

> 简述：Spring 默认在容器启动时立即实例化所有单例 Bean（Eager Initialization）；对创建代价高或不常用的 Bean，可通过 `@Lazy` 延迟到首次使用时实例化，以节省资源。

**知识树**

1. Eager Initialization（默认）

    - 定义：容器启动完成前创建所有单例 Bean
    - 特点：及早发现依赖缺失或循环依赖
    - 例子：即使 Bean 没被使用也会被创建

2. Lazy Initialization（延迟加载）

    - 定义：Bean 在首次被注入或检索时才实例化
    - 场景：资源密集型对象、并非每次请求都用到
    - 实现方式：
        - 对类使用 `@Lazy` 注解
        - 对 `@Bean` 方法使用 `@Lazy` 注解

3. 实现方式

    - 在类上标记`@Lazy`注解，如果是在自定义配置类中，在方法上(`@Bean` 上下)添加`@Lazy`注解

4. 注意事项

    - 可能改变生命周期时序，需评估依赖链
    - 避免滥用，仅对确实“重”或“少用” Bean 使用

**代码示例**

1. 创建 `HeavyResource` 模拟代价高的资源

    ```java
    @Component
    public class HeavyResource {
        public HeavyResource() {
            System.out.println("HeavyResource created");
        }
    }
    ```

2. 即时未使用，启动时依然会创建该类的 Bean

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
        }
    }
    ```

3. 在 `HeavyResource` 上标记`@Lazy`

    ```java
    @Component
    @Lazy
    public class HeavyResource {
        public HeavyResource() {
            System.out.println("HeavyResource created");
        }
    }
    ```

    - 描述：容器启动不会创建 HeavyResource，仅当首次请求触发访问时才加载

## Bean 作用域

> 简述：Spring Bean 的作用域（Scope）决定了 Bean 实例的创建频率与生命周期。默认作用域为单例（singleton），也可指定为多例、请求级、会话级等，以满足不同场景的需求。

**知识树**

1. Bean 作用域（Scope）

    - 定义：Bean 的作用范围和生命周期，由容器管理
    - 设置方式：`@Scope("...")` 注解可用于类或 `@Bean` 方法上

2. 常见作用域类型

    - `singleton`（默认）
        - 每个容器中仅创建一个 Bean 实例
        - 适用：无状态、可复用的服务组件
        - 特点：由容器负责创建 + 管理 + 销毁。
    - `prototype`
        - 每次请求 Bean 时创建新实例
        - 适用：有状态、临时对象
        - 特点：容器只负责创建，不会跟踪或管理其生命周期（生命周期在下一节介绍）。

3. Web 应用专用作用域（后续介绍，暂不演示）

    - `request`
        - 每个 HTTP 请求一个实例
        - 生命周期随请求开始与结束
        - 用于：请求级参数封装、临时数据缓存
    - `session`
        - 每个 HTTP 会话一个实例
        - 生命周期等同用户登录状态
        - 用于：用户上下文、状态保持

4. 使用建议与注意事项

    - `singleton` 简洁高效，首选
    - 非单例需考虑线程安全与资源释放
    - Web 作用域需启用 Spring Web 上下文支持

**代码示例**

1. 为查看效果，在 `OrderService` 构造函数中加入输出信息

    ```java
    // @Service
    public class OrderService {
        private PaymentService paymentService;

        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
            System.out.println("OrderService created");
        }

        public void placeOrder() {
            paymentService.processPayment(10.0);
        }
    }
    ```

    - 描述：在在 `OrderService` 类的构造方法中，加入输出信息

2. 未单独设置时，默认为单例作用域

    ```java
    @Bean
    public OrderService orderService() {
        return new OrderService(stripe());
    }
    ```

    - 描述：默认情况下，即使多次调用 `getBean(OrderService.class)`，返回的也是同一个实例。

3. 设置为原型作用域

    ```java
    @Bean
    @Scope("prototype")
    public OrderService orderService() {
        return new OrderService(stripe());
    }
    ```

    - 描述：每次调用容器的 `getBean()` 方法都会返回新的实例。

4. 多次获取 Bean 验证原型`@Scope("prototype")行为

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            OrderService orderService1 = context.getBean(OrderService.class);
            OrderService orderService2 = context.getBean(OrderService.class);
        }
    }
    ```

    - 描述：设置` @Scope("prototype")`后，控制台输出会显示构造器被调用多次，表明每次获取的是新实例

## Bean 生命周期回调

> 简述：Spring Bean 在创建、使用和销毁的整个生命周期中，允许开发者通过特定注解在关键节点插入自定义逻辑，实现资源初始化与清理控制。

**知识树**

1. Bean 生命周期概述

    - 步骤：实例化 → 依赖注入 → 初始化 → 使用 → 销毁
    - 生命周期由容器统一调度管理

2. 初始化回调：`@PostConstruct`

    - 时机：构造函数执行后、依赖注入完成后调用
    - 场景：加载资源、建立连接、执行启动逻辑
    - 限制：方法必须为 `public void` 且无参

3. 销毁回调：`@PreDestroy`

    - 时机：容器销毁 Bean 前调用（限单例）
    - 场景：释放资源、关闭连接、清理线程
    - 需显式关闭容器（如调用 `context.close()`）才会触发

4. 手动关闭上下文

    - 注意：Web 容器会自动管理 Bean，这里为演示而手动操作
    - 类型转换：将 `ApplicationContext` 转为 `ConfigurableApplicationContext`
    - 方法：`close()` 显式触发 `@PreDestroy` 执行

5. 作用域问题

    - `singleton`（默认作用域）：
        - 由容器负责创建 + 管理 + 销毁。
        - 容器关闭时，Spring 调用 `@PreDestroy` 等销毁回调。
    - `prototype`（原型作用域）：
        - 容器只负责创建，不会跟踪或管理其生命周期。
        - 不会自动调用 `@PreDestroy`，即使手动调用 `context.close()`，也无效。
    - 本节示例：需要删除（或者注释）自定义配置类中，`OrderService`上的`@Scope("prototype")`

**代码示例**

1. 使用 `@PostConstruct` 初始化资源，`@PreDestroy` 释放资源

    ```java
    public class OrderService {
        public OrderService(PaymentService paymentService) {
            this.paymentService = paymentService;
            System.out.println("OrderService constructor");
        }

        @PostConstruct
        public void init() {
            System.out.println("OrderService post construct");
        }

        private final PaymentService paymentService;
    }
    ```

    - 构造后自动调用 `init()` 执行初始化逻辑，在容器关闭前调用 `cleanup()`，清理

2. 显式关闭容器触发销毁逻辑

    ```java
    @SpringBootApplication
    public class StoreApplication {
        public static void main(String[] args) {
            ConfigurableApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            OrderService service = context.getBean(OrderService.class);
            service.placeOrder();
            context.close(); // 触发 @PreDestroy
        }
    }
    ```

    - 需使用 `ConfigurableApplicationContext` 才能调用 `close()`

## Ex: 用户注册服务

> **要求**：实现一个用户注册服务，接收用户信息，保存用户数据，并向用户发送通知。邮件服务配置需通过配置文件外部化。重复注册应被拒绝。

> **解法**：

0. 备注：

    - 本节将复用上一个测试使用的几个文件，删除 `NotifacationManager`、`SMSNotificationService`

1. **定义模型与接口**：

    - 创建 `User` 实体类，包含 `name`、`email`、`password` 字段。
    - 创建 `UserRepository` 接口，定义 `save(User)` 与 `findByEmail(String)` 方法。
    - 创建 `NotificationService` 接口，定义 `send(String message, String recipientEmail)` 方法。

2. **实现核心逻辑**：

    - 创建 `InMemoryUserRepository` 类，实现 `UserRepository`，用 `Map<String, User>` 存储用户。
    - 创建 `EmailNotificationService` 类，实现 `NotificationService`，使用 `@Value` 注解注入 `mail.host` 和 `mail.port`。
    - 创建 `UserService` 类，构造器注入上述两个服务，实现 `registerUser(User)` 方法：

        - 若用户已存在，抛出异常
        - 否则保存用户，并发送通知

3. **配置与执行**：

    - 在 `application.yaml` 中配置邮件服务器属性
    - 在 `StoreApplication` 中创建 `UserService`，模拟重复注册行为，验证逻辑正确性

**代码**

1. 创建 `User` 实体类

    ```java
    public class User {
        private Long id;
        private String email;
        private String password;
        private String name;

        public User(Long id, String email, String password, String name) {
            this.id = id;
            this.email = email;
            this.password = password;
            this.name = name;
        }

        public String getEmail() {
            return email;
        }
    }
    ```

2. 创建 `UserRepository` 接口

    ```java
    public interface UserRepository {

        void save(User user);

        User findByEmail(String email);
    }
    ```

3. 创建（修改）`NotificationService` 接口

    ```java
    public interface NotificationService {
        void send(String message, String recipientEmail);
    }
    ```

4. 创建 `InMemoryUserRepository` 类，实现 `UserRepository` 接口

    ```java
    @Repository
    public class InMemoryUserRepository implements UserRepository {
        private final Map<String, User> users = new HashMap<>();

        @Override
        public void save(User user) {
            System.out.println("Saving user: " + user);
            users.put(user.getEmail(), user);
        }

        @Override
        public User findByEmail(String email) {
            return users.getOrDefault(email, null);
        }
    }
    ```

5. 创建（修改） `EmailNotificationService` 类，实现 `NotificationService`

    ```java
    @Service("email")
    public class EmailNotificationService implements NotificationService {
        @Value("${mail.host}")
        private String host;

        @Value("${mail.port}")
        private String port;

        @Override
        public void send(String message, String recipientEmail) {
            System.out.println("Recipient: " + recipientEmail);
            System.out.println("Sending email : " + message);
            System.out.println("Host: " + host);
            System.out.println("Port: " + port);
        }
    }
    ```

6. 配置类中加入定义信息

    ```yaml
    mail:
      host: https://smtp.gmail.com
      port: 5761
    ```

7. 创建 `UserService` 类，构造器注入上述两个服务，实现 `registerUser(User)` 方法

    ```java
    @Service
    public class UserService {
        private final UserRepository userRepository;
        private final NotificationService notificationService;

        public UserService(UserRepository userRepository, NotificationService notificationService) {
            this.userRepository = userRepository;
            this.notificationService = notificationService;
        }

        public void registerUser(User user) {
            if (userRepository.findByEmail(user.getEmail()) != null) {
                throw new IllegalArgumentException("User with email " + user.getEmail() + " already exists");
            }

            userRepository.save(user);
            notificationService.send("You registered successfully!", user.getEmail());
        }
    }
    ```

8. 在启动类中调用

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
            UserService userService = context.getBean(UserService.class);

            User user = new User(1L, "alice@example.com", "123456", "Alice");
            userService.registerUser(user); // 正常注册
            userService.registerUser(user); // 触发重复注册异常
        }
    }
    ```

# Database Integration

1.  **Java 数据访问技术概览**

    - JDBC（Java Database Connectivity）
    - JPA（Java Persistence API）
    - Hibernate（JPA 实现）
    - Spring Data JPA（基于 JPA 的抽象与简化）

2.  **Spring Data JPA 配置**

    - 添加依赖
    - 配置数据源、数据库连接
    - 自动建表与模式同步设置

3.  **数据库建模设计**

    - 为电商项目设计表结构
    - 理解表、主键、外键、关系类型（1 对 1、1 对多、多对多）

4.  **定义领域模型（Domain Model）**

    - 创建实体类（Entity）
    - 字段与列映射（@Entity, @Column, @Id 等）
    - 映射关系（@OneToMany, @ManyToOne, @ManyToMany）
    - 使用 JPA Buddy 工具加速开发

5.  **使用 Repository 操作数据库**

    - 理解 `JpaRepository` 与 `CrudRepository`
    - 自动生成增删改查方法
    - 自定义方法命名查询（Derived Queries）

6.  **实体生命周期与状态管理**

    - Entity 的四种状态：New, Managed, Detached, Removed
    - `EntityManager` 背后的工作原理
    - `persist()` vs `merge()` vs `remove()`

7.  **事务管理（Transaction Management）**

    - @Transactional 注解
    - 事务的传播行为与隔离级别
    - 数据一致性控制

8.  **抓取策略（Fetch Strategies）**

    - `EAGER` vs `LAZY`
    - 性能与内存之间的权衡
    - 实战中选择策略的考量

9.  **优化查询与避免性能陷阱**

    - N + 1 查询问题的成因与解决方案（如使用 JOIN FETCH）
    - 使用 JPQL 和 Native SQL 编写复杂查询
    - 参数绑定与类型安全

10. **动态查询（Dynamic Queries）**

    - 使用 Criteria API 构建动态查询
    - 使用 Specification 构建可组合查询逻辑
    - 基于用户输入灵活过滤数据

11. **排序与分页**

        - 使用 `Pageable` 与 `Sort` 接口
        - 返回分页结果（`Page<T>` 与 `Slice<T>`）
        - 前后端交互中的分页实践

## Java 数据访问技术

> 简述：Java 数据库访问从直接但繁琐的 JDBC 出发，演化为定义了对象关系映射 (ORM) 规范的 JPA，再通过其功能强大的主流实现 Hibernate 得到增强，发展为由 Spring Data JPA 引入了高度简化的声明式数据访问，极大提升了开发效率并减少了样板代码。

**知识树**

1.  JDBC (Java Database Connectivity)

    - 定义：Java 访问关系型数据库的标准 API 规范。
    - 核心：提供一套统一的接口，使 Java 程序能与多种数据库进行交互。
    - 特点：
        - 直接执行 SQL：开发者需手动编写和管理 SQL 语句。
        - 手动资源管理：需显式处理连接 (Connection) 的开启与关闭、语句 (Statement) 的创建与执行、结果集 (ResultSet) 的处理与关闭等。
        - 过程化：操作步骤繁琐，样板代码（Boilerplate Code）较多。
        - 灵活性高：赋予开发者对数据库操作的完全控制权。
    - 问题：开发效率低，代码冗余，易因资源管理不当引发问题（如连接泄漏）。

2.  JPA (Jakarta Persistence API / 原 Java Persistence API)

    - 定义：一套基于 ORM (Object-Relational Mapping) 思想的 Java 持久化规范。
    - 核心：将 Java 对象映射到数据库表，允许开发者通过操作对象来间接操作数据库记录，屏蔽底层 SQL 差异。
    - 特点：
        - 规范而非实现：定义了一系列接口和注解，具体功能由 JPA Provider (实现者) 提供。
        - 面向对象：以对象为中心进行数据操作，更符合 Java 开发者的思维习惯。
        - 减少 SQL 编写：对于标准 CRUD 操作，通常无需编写 SQL。
    - 目标：简化数据持久化层开发，提高可移植性（更换 JPA Provider 或数据库相对容易）。

3.  Hibernate

    - 定义：JPA 规范最流行和功能最强大的开源实现之一，是一个成熟的 ORM 框架。
    - 核心：实现了 JPA 定义的所有接口，并提供了 JPA 规范之外的增强功能。
    - 特点：
        - JPA Provider：作为 JPA 的具体实现，负责将面向对象的操作转换为底层 SQL。
        - 强大功能：HQL、二级缓存、延迟加载、自动 DDL
        - 成熟稳定：广泛应用于企业级开发。
    - 关系：使用 JPA 编程时，通常会选择 Hibernate 作为底层的 JPA 实现。

4.  Spring Data JPA
    - 定义：Spring Framework 体系中的一个项目，旨在进一步简化基于 JPA 的数据访问层 (DAL) 开发。
    - 核心：在 JPA (通常结合 Hibernate) 的基础上提供更高层次的抽象，通过 Repository 模式极大简化数据操作。
    - 特点：
        - Repository 接口抽象：开发者只需定义继承自 Spring Data JPA 特定接口（，框架会自动提供 CRUD、分页、排序等方法的实现。
        - 方法名派生查询：支持根据约定的方法名自动生成查询逻辑
        - 自定义查询：支持通过 `@Query` 注解使用 JPQL 或原生 SQL 编写复杂查询。
        - 与 Spring 生态集成：无缝融入 Spring 事务管理、依赖注入等特性。
    - 目标：将开发者从繁琐的 DAL 样板代码中解放出来，更专注于业务逻辑。

## 安装 MySQL

1. Homebrew

    1. 使用 Homebrew 安装 Mysql
        ```sh
        brew install mysql
        ```
    2. 安装完成后提示

        ```
        We've installed your MySQL database without a root password. To secure it run:
            mysql_secure_installation

        MySQL is configured to only allow connections from localhost by default

        To connect run:
            mysql -u root

        To restart mysql after an upgrade:
          brew services restart mysql
        Or, if you don't want/need a background service you can just run:
          /opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
        ```

    3. 根据提示，输入命令设置每次开机自动启动 mysql，存在后台进程 `mysqld_safe`
        ```
        brew services start mysql
        ```
    4. 根据提示，输入命令进行密码设置（复杂密码）
        ```
        mysql_secure_installation
        ```
    5. 跟进提示 yes/no

2. 手动

    - 官网选择 MySQL Community (GPL) Downloads
        - https://www.mysql.com/downloads/
    - 选择 MySQL Community Server
    - 下载最新版本
    - 在安装过程中设置 root 密码
    - 验证安装命令
        - `mysql -u root -p`

# 分界

由于对下面知识点内容较多（4 小时），我对其结构不够清晰，先简单整理一轮，然后再进行费曼式整理

## 添加 Spring Data JPA 依赖

**知识树**

1. 设置 Spring Data JPA 步骤

    - `pom.xml` 文件中加入 Spring Data JPA 依赖，以及 MySQL 驱动，建议在 pom.xml 文件中点击 Add Starters 方式添加，搜索 `Spring Data JPA`，以及 `MySQL Driver`
    - 在 application.yaml 中配置 datasource 信息
        ```yaml
        spring:
          datasource:
            url: jdbc:mysql://localhost:3306/store?createDatabaseIfNotExist=true
            username: root
            password: Seeyou1!
        ```

## 表关系与驱动方式

> 简述：数据库表之间可建立一对一、一对多、多对多等关系，实体建模可采用“数据库优先”或“模型优先”两种策略，用于同步数据库与 Java 实体类结构。

**知识树**

1. 常见实体关系（MySQL 笔记中逻辑模型章节亦有介绍）

    - 一对一（One-to-One）：每个记录仅对应另一张表中一条记录（如 User 与 Profile）
    - 一对多（One-to-Many）：一个记录关联多条记录（如 User 与 Address）
    - 多对多（Many-to-Many）：双方都可有多个对应项，需借助中间表（如 User 与 Tag）

2. 实体生成方式

    - Database-First：先建表，再通过工具反向生成实体类
    - Model-First：先建实体类，通过注解或工具生成数据库结构

3. 本项目采用方式

    - 当前使用 Database-First 模式：先设计数据库，再建立实体类与其对应
    - 后续将引入 Model-First 以实现双向理解

4. 当前项目中的实体关系结构

    - User
        - 一对一 → Profile
        - 一对多 → Address
        - 多对多 → Tag（中间表 user_tags）
        - 多对多 → Product（如收藏、购买记录等）
    - Product
        - 多对多 ←→ User
        - 多对一 → Category（一个分类对应多个产品，一个产品只归属一个分类）

## 后续内容介绍

DATABASE
DOMAIN MODEL
REPOSITORIES
CUSTOM QUERIES
DYNAMIC QUERIES

## DATABASE

### 创建表（视图方式）

> 简述：在 IntelliJ IDEA 中连接数据库后，可通过图形化视图工具创建数据表，适合初学者，底层为生成并执行 SQL 语句。

**知识树**

1. 创建表的两种方式

    - 直接使用 SQL
        - 适合熟悉语法者，自由度高，可批量执行
    - 使用视图工具
        - 推荐方式：图形界面友好，适合初学者
        - 本质：每一次点击、字段设置、主外键指定，最终都对应生成 SQL

2. 视图工具使用技巧

    - 先添加所有字段（列）
    - 后设置主键、外键等约束关系

3. 表结构设计建议

    - 每张表建议包含主键（如自增 ID）
    - 所有关联关系（如一对多）推荐通过外键明确表达
    - 字段命名保持简洁清晰，与实体类字段一致有助于 ORM 映射

4. IDEA 数据库视图操作路径

    - 右侧 Database 工具栏
    - 右键连接数据库 → New → 先建库后建标
    - 填写字段 → 设置类型 → 配置主键、外键 → 应用保存

**代码实例**

1. 等效 SQL（users 表与 addresses 表）

    ```sql
    create table users
    (
        id       bigint auto_increment
            primary key,
        name     varchar(255) not null,
        email    varchar(255) not null,
        password varchar(255) not null
    );

    create table addresses
    (
        id      bigint auto_increment
            primary key,
        street  varchar(255) not null,
        city    varchar(255) not null,
        zip     varchar(255) not null,
        user_id bigint       not null,
        constraint addresses_users_id_fk
            foreign key (user_id) references users (id)
    );
    ```

    - 描述：先创建数据库 store，手动 SQL 与视图操作结果一致，建议初期使用视图方式辅助理解

### Flyway 版本管理

> 简述：Flyway 是一种数据库迁移工具，可自动执行版本化 SQL 脚本，实现跨环境数据库结构同步与演化控制。

**知识树**

1.  添加方式

    - pom.xml 中添加 Starters，搜索 flyway 添加
    - 在 resource 目录下创建文件夹 db，db 目录下创建 migration 文件夹，这是 flyway 查找 sql 脚本的目录
    - 在 resource/db/migration 下添加脚本

2.  脚本命名规范

    - 格式：`V<版本号>__<描述>.sql`
    - 规则：
        - `V` 开头，后跟递增数字（可带点号，如 `V1.1__desc`）
        - `__` 双下划线分隔版本与描述
        - 描述建议使用小写，单词间用 `_` 分隔
    - 示例：`V1__initial_migration.sql`、`V2__add_state_column.sql`

3.  执行机制

    - 应用启动时自动扫描并执行未运行的 SQL 脚本
    - Flyway 内部维护一张元数据表（如 `flyway_schema_history`），记录已执行脚本的版本、状态等信息
    - 每个 SQL 脚本必须是不可变的，只能新增，不应修改已执行脚本内容

4.  注意事项

    - 脚本等同于数据库的“提交历史”，不可回溯或改写
    - 若脚本写错（如字段加错表），应通过新脚本进行修复而非修改原文件
    - 示例情境：误将 `state` 字段添加至 `users`，应通过新脚本移除并添加到 `addresses`

**代码示例**

1. 错误操作脚本（`V2__add_state_column.sql`）

    ```sql
    alter table users
        add state varchar(255);
    ```

    - 描述：误将 `state` 添加至 `users` 表

2. 修正操作脚本（`V3__move_sate_from_users_to_addresses.sql`）

    ```sql
    alter table users
        drop column state;

    alter table addresses
        add state varchar(255);
    ```

    - 描述：删除 `users` 中的错误字段，改为添加至 `addresses` 表

### Flyway & Maven 插件集成

> 简述：通过集成 Flyway Maven 插件，可在无需重启 Spring Boot 项目的前提下手动执行数据库迁移、校验或清理脚本，提升开发效率与灵活性。

1. 插件添加步骤

    - 在 `pom.xml` 的 `<plugins>` 标签下添加 Flyway 插件配置：
        - `groupId`：`org.flywaydb`
        - `artifactId`：`flyway-maven-plugin`
        - `version`：选择最新版本
    - 添加 `<configuration>` 节点，配置数据库连接信息：
        - `url`：数据库连接地址
        - `user`：用户名
        - `password`：密码
    - 可选配置项：

        - `cleanDisabled`：设置为 `false`，允许执行 `flyway:clean` 命令（默认禁止）

    - 示例：为确保一致性，数据库连接信息可从 `application.yml` 中复制
        ```xml
        <plugin>
        		<groupId>org.flywaydb</groupId>
        		<artifactId>flyway-maven-plugin</artifactId>
        		<version>10.20.0</version>
        		<configuration>
        				<url>jdbc:mysql://localhost:3306/store?createDatabaseIfNotExist=true</url>
        				<user>root</user>
        				<password>Seeyou1!</password>
        				<cleanDisabled>false</cleanDisabled>
        		</configuration>
        </plugin>
        ```

2. 常用命令

    - `flyway:migrate`：执行未执行的版本脚本，生成或更新表结构
    - `flyway:clean`：删除数据库中所有对象（表、视图、索引等）
    - `flyway:validate`：校验脚本是否被修改、执行状态是否一致

3. 使用注意事项

    - `flyway:clean` 会清空整个数据库，仅建议在开发环境中使用
    - 每次执行 `migrate` 前建议先运行 `validate`，确保迁移脚本未被篡改
    - 插件命令可在 IDEA Terminal 中执行：

        ```bash
        ./mvnw flyway:migrate
        ./mvnw flyway:clean
        ./mvnw flyway:validate
        ```

### 其他表

1. `V4__add_profiles_table.sql`

```sql
CREATE TABLE profiles
(
    id             BIGINT PRIMARY KEY,
    bio            TEXT,
    phone_number   VARCHAR(15),
    date_of_birth  DATE,
    loyalty_points INT UNSIGNED DEFAULT 0,
    FOREIGN KEY (id) REFERENCES users(id)
);
```

2. `V5__add_tags_table.sql`

    ```sql
    -- Create the tags table
    CREATE TABLE tags
    (
        id   INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    -- Create the user_tags join table
    CREATE TABLE user_tags
    (
        user_id BIGINT NOT NULL,
        tag_id  INT NOT NULL,
        PRIMARY KEY (user_id, tag_id),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
    );
    ```

## DOMAIN MODEL

定义实体类
使用 lombok
定义实体类之间的关系 （一对多，多对多）
JPA Buddy

Model-first approach

### 定义实体类

> 简述：使用 JPA 注解将 Java 类映射为数据库表，通过标注字段、主键、生成策略等元数据，构建与数据库结构一致的实体模型。

**知识树**

1.  JPA 核心注解

    - `@Entity`：标记该类为 JPA 实体，对应数据库中的一张表
    - `@Table(name = "...")`：指定映射的表名；若类名与表名一致，可省略但不推荐
    - `@Id`：标识主键字段
    - `@GeneratedValue(strategy = GenerationType.IDENTITY)`：主键生成策略为数据库自增
    - `@Column(name = "...")`：指定实体字段对应的数据库列名，可附加如 `nullable`, `unique` 等约束属性。若字段名与列名一致，且未启用命名策略，则可省略 `name` 属性，但为避免未来维护混淆，建议显式声明。

2.  实体类结构规范

    - 所有字段应设为 `private`，通过 Getter/Setter 访问
    - **必须提供无参构造器**（供 JPA 反射使用）
    - 不包含业务逻辑，仅承担数据结构职责

3.  工具与快捷操作

    - 生成 Getter/Setter：使用 IDEA 快捷键（如 `Command + N` 或右键 Generate）
    - 优化代码结构：`Command + Shift + A` → 搜索 `Rearrange Code` 整理字段顺序

4.  实践建议

    - 删除 `store` 包中除 `StoreApplication.java` 外的所有类，集中实体至新建 `entities` 包
    - 实体类专注于数据结构，业务逻辑放在 Service 层（后面介绍）实现

5.  **补充**命名映射策略（暂不使用，而是使用 `name` 指定）

    - 默认行为：JPA 默认大小写敏感且不做命名转换，即 `userName` 映射列名 `userName`（非 `user_name`）
    - 如果希望 Java 使用驼峰命名、数据库使用下划线命名，可在配置文件中启用物理命名策略：
        ```yaml
        spring:
          jpa:
        	hibernate:
        	  naming:
        		physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
        ```
    - 启用命名策略后，可省略 `@Table` 和 `@Column` 的 `name` 参数，Spring Boot 将自动从驼峰转为下划线命名（根据团队进行选择实现方案）

**代码示例**

1.  定义 `User` 实体类

    ```java
    @Entity
    @Table(name = "users")
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "name")
        private String name;

        @Column(name = "email")
        private String email;

        @Column(name = "password")
        private String password;

        // Getter / Setter 省略
    }
    ```

    - 描述：该类对应 `users` 表，字段名称与列一一映射，采用数据库主键自增策略。

### Lombok

> 简述：Lombok 是一款 Java 编译期注解处理工具，可自动生成构造器、Getter/Setter、Builder 等样板代码，提升开发效率、简化实体类定义。

**知识树**

1. 添加方式

    - 在 `pom.xml` 中添加依赖：使用 IDEA 搜索 Starters 并添加 `lombok`
    - 启用注解处理器：IDEA → Preferences → 搜索 `annotation processing`，勾选 `Enable annotation processing`

2. 常用注解说明

    - `@Getter` / `@Setter`：为所有字段自动生成对应方法
    - `@NoArgsConstructor` / `@AllArgsConstructor`：生成无参/全参构造方法
    - `@Builder`：生成链式构建器
    - `@ToString`：生成 `toString()` 方法，可排除字段
    - `@Builder.Default`：指定字段在使用 `@Builder` 构造时保留初始化值，否则将被默认重置（0/null/false）

3. 使用细节与注意事项（后面介绍）

    - 默认值问题：`@Builder` 仅设置显式赋值字段，忽略字段定义时的默认初始化。需使用 `@Builder.Default` 显式标明默认值应保留
    - `@ToString` 的循环依赖问题：当两个实体类互相引用，且都标注了 `@ToString`，可能导致栈溢出，应在其中一方的关联字段上使用 `@ToString.Exclude` 排除该字段

**代码示例**

1. User 实体类定义（使用 Lombok 简化）

    ```java
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "users")
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "name")
        private String name;

        @Column(name = "email")
        private String email;

        @Column(name = "password")
        private String password;
    }
    ```

2. 使用 Builder 构建对象

    ```java
    var user = User.builder()
        .name("Alice")
        .email("alice@example.com")
        .password("password")
        .build();
    ```

### 其他实体类

1. Address 实体类

    ```java
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "addresses")
    public class Address {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "street")
        private String street;

        @Column(name = "city")
        private String city;

        @Column(name = "zip")
        private String zip;

        @Column(name = "state")
        private String state;
    }
    ```

2. Profile 实体类

    ```java
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "profiles")
    public class Profile {
        @Id
        @Column(nullable = false, name = "id")
        private Long id;

        @Column(name = "bio")
        private String bio;

        @Column(name = "phone_number")
        private String phoneNumber;

        @Column(name = "date_of_birth")
        private LocalDate dateOfBirth;

        @Column(name = "loyalty_points")
        private Integer loyaltyPoints;
    }
    ```

3. Tag 实体类

    ```java
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "tags")
    public class Tag {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Integer id;

        @Column(name = "name")
        private String name;
    }
    ```

### 一对多关系（双向）

> 简述：一对多关系用于表示一个实体对应多个关联实体。通过 `@OneToMany` 和 `@ManyToOne` 注解建立映射，支持单向或双向设计。本节使用双向关联，体现主从关系、关系维护权及防止循环引用的技巧。

1. 集合与对象引用

    - 在“一”的一方（如 User）使用 `List<T>` 表示多方集合，集合类型按需求使用
    - 在“多”的一方（如 Address）使用具体对象表示一方引用
    - 需要在集合字段使用 `@Builder.Default` 初始化为空集合，避免 `NullPointerException`
        - 尝试先产生这个错误再修复

2. 注解定义

    - `@OneToMany(mappedBy = "...")`：在“一”的一方声明，表示被拥有方
    - `@ManyToOne + @JoinColumn`：在“多”的一方声明，并通过外键字段维护关系

3. 关系维护方

    - 拥有方（Owning Side）：声明 `@ManyToOne` 的一方，持有外键，负责维护关系
    - 被拥有方（Inverse Side）：使用 `mappedBy` 指定拥有方字段名，不负责更新数据库关系

4. 双向同步与辅助方法

    - 建议通过 `addXxx()` 和 `removeXxx()` 方法显式同步维护双方引用
    - 可设置 `cascade` 与 `orphanRemoval` 进一步控制持久化行为（后续章节介绍）

5. 避免循环引用

    - Lombok 中的 `@ToString` 会导致双向关系无限递归
    - 使用 `@ToString.Exclude` 标注某一方的关联字段打断循环调用链
        - 尝试先产生这个错误再修复

6. 单向 vs 双向（补充）

    - 单双向是指：实体类之间的导航方向（对象引用），而不是数据库中表与表之间的物理关系。
    - 单向关联设计（单向导航）
        - 实体类只在一端定义引用，不能从另一端反向访问。
    - 双向关联设计（双向导航）
        - 实体类在双方都持有对方的引用，并通过 mappedBy 指定关系维护方。

**代码示例**

1. User 实体类（一方）

    ```java
    @ToString
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "users")
    public class User {

    	// 省略其他字段

        @OneToMany(mappedBy = "user")// 指向Address类中的user字段
        @Builder.Default
        private List<Address> addresses = new ArrayList<>();

        public void addAddress(Address address) {
            addresses.add(address);
            address.setUser(this);
        }

        public void removeAddress(Address address) {
            addresses.remove(address);
            address.setUser(null);
        }
    }
    ```

    - 描述：`User` 拥有多个 `Address`，关系由 `Address` 端维护，使用 `mappedBy` 建立反向映射。

2. Address 实体类（多方）

    ```java
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @ToString
    @Entity
    @Table(name = "addresses")
    public class Address {

    	// 省略其他字段

        @ManyToOne
        @JoinColumn(name = "user_id")// 指向数据库中的外键
        @ToString.Exclude
        private User user;
    }
    ```

    - 描述：`Address` 持有 `user_id` 外键，维护关系。`@ToString.Exclude` 防止无限递归。

3. 测试示例

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // SpringApplication.run(StoreApplication.class, args);

            var user = User.builder()
                .name("Alice")
                .email("alice@example.com")
                .password("password")
                .build();

            var address = Address.builder()
                .street("123 Main St")
                .city("Springfield")
                .zip("12345")
                .state("CA")
                .build();

            user.addAddress(address);

            System.out.println(user); // 避免循环引用崩溃
        }
    }
    ```

### 多对多关系（`@ManyToMany`）

> 简述：多对多关系用于描述两个实体之间互相拥有多个对方的场景（如用户和标签）。通过 `@ManyToMany` 和 `@JoinTable` 注解配置中间表。虽然 JPA 支持该注解直接建模，但企业开发更推荐使用显式中间实体以增强灵活性和可维护性。

**知识树**

1. 集合与对象引用

    - 在双方使用 `Set` 而非 `List` 表示多对多集合，以避免重复项
    - 需要在集合字段使用 `@Builder.Default` 初始化为空集合，避免 `NullPointerException`
        - 尝试先产生这个错误再修复

2. 多对多关系结构

    - 每一方都可以关联多个对方实体
    - 需要使用中间表（如 `user_tags`）来维持两者之间的绑定关系
    - JPA 可自动管理中间表，无需手写 SQL 建表（但真实项目中推荐显式建中间实体类）

3. 拥有方与被拥有方

    - 拥有方：通过 `@JoinTable` 定义中间表结构，持有关系更新权
        - `name`：中间表名称
        - `joinColumns`：拥有方在中间表的外键字段
        - `inverseJoinColumns`：被拥有方在中间表的外键字段
    - 被拥有方：使用 `mappedBy` 指定拥有方字段名，不负责关系更新
    - 在两者都有外键的情况下，两者都可以是那个“拥有者”，在本节例子中，使用 User 拥有方

4. 实践建议

    - 提供辅助方法 `addXxx` / `removeXxx` 同步维护双向集合
    - 使用 `@ToString.Exclude` 避免序列化栈溢出
        - 尝试先产生这个错误再修复

5. 企业级建模提示

    - 实际开发中，建议将中间表建模为显式实体类（如 `UserTag`），便于添加时间戳、状态等附加信息
    - `@ManyToMany` 更适用于轻量建模或教学示例
    - 将中间表建模为显式实体类后续介绍

**代码示例**

1. User 实体类（拥有方）

    ```java
    @ToString
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "users")
    public class User {

    	// 省略其他字段、方法

        @ManyToMany
        @JoinTable(
                name = "user_tags",
                joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "tag_id")
        )
        @Builder.Default
        private Set<Tag> tags = new HashSet<>();

        public void addTag(Tag tag) {
            tags.add(tag);
            tag.getUsers().add(this);
        }

        public void removeTag(Tag tag) {
            tags.remove(tag);
            tag.getUsers().remove(this);
        }

    }
    ```

2. Tag 实体类（被拥有方）

    ```java
    @ToString
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "tags")
    public class Tag {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, name = "id")
        private Integer id;

        @Column(nullable = false, name = "name")
        private String name;

        @ManyToMany(mappedBy = "tags")
        @ToString.Exclude
        @Builder.Default
        private Set<User> users = new HashSet<>();
    }
    ```

3. 测试用例：验证多对多绑定

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            // SpringApplication.run(StoreApplication.class, args);

            var user = User.builder()
                    .name("Alice")
                    .email("alice@example.com")
                    .password("password")
                    .build();

            var tag = Tag.builder()
                    .name("tag1")
                    .build();

            user.addTag(tag); // 双向同步绑定
            System.out.println(user);
        }
    }
    ```

### 一对一关系

> 简述：一对一关系表示两个实体之间严格一对一的映射。其核心在于谁维护关系（即外键在哪一方）。常通过共享主键（`@MapsId`）方式实现字段复用，避免数据冗余。典型场景如用户与个人资料的绑定。

**知识树**

1. 关系建模原则

    - 一对一关系通常由从表（拥有方）持有外键，同时复用主键字段
    - 使用 `@OneToOne` 注解建立实体类之间的关系
    - 使用 `@JoinColumn(name = "id")` 指定外键字段（即复用主键）
    - 使用 `@MapsId` 将外键绑定为主键，保持一对一约束

2. 拥有方 vs 被拥有方

    - 拥有方：维护外键关系，使用 `@OneToOne` + `@JoinColumn` + `@MapsId`
    - 被拥有方：使用 `@OneToOne(mappedBy = "...")` 指定引用字段名，不维护外键

3. 注意事项

    - `@MapsId` 只能用于一对一中主键/外键共用的情况
    - 双向关系中避免同时使用 `@ToString`，需使用 `@ToString.Exclude` 防止递归调用
    - 与 `@ManyToOne + unique=true` 实现的一对一关系相比，共享主键方式更常见于关联强耦合场景

**代码示例**

1.  User 实体类（被拥有方）

    ```java

    @ToString
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "users")
    public class User {

        	// 省略其他字段、方法

            @OneToOne(mappedBy = "user")
            private Profile profile;

            public void addProfile(Profile profile) {
                this.profile = profile;
                profile.setUser(this);
            }

            public void removeProfile(Profile profile) {
                this.profile = null;
                profile.setUser(null);
            }
        }
    ```

    - 描述：User 为被拥有方，仅声明反向引用，不维护关系

2.  Profile 实体类（拥有方）

    ```java
    @ToString
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    @Entity
    @Table(name = "profiles")
    public class Profile {
        @Id
        @Column(nullable = false, name = "id")
        private Long id;

        @Column(name = "bio")
        private String bio;

        @Column(name = "phone_number")
        private String phoneNumber;

        @Column(name = "date_of_birth")
        private LocalDate dateOfBirth;

        @Column(name = "loyalty_points")
        private Integer loyaltyPoints;

        @OneToOne
        @JoinColumn(name = "id")
        @MapsId
        @ToString.Exclude
        private User user;
    }
    ```

    - 描述：Profile 使用 `@MapsId` 将主键字段 `id` 绑定为外键，持有并维护 User 的引用关系

3.  测试用例：验证一对一关系绑定

    ```java
    @SpringBootApplication
    public class StoreApplication {

        public static void main(String[] args) {
            var user = User.builder()
                    .name("Alice")
                    .email("alice@example.com")
                    .password("password")
                    .build();

            var profile = Profile.builder()
                    .bio("Senior Developer")
                    .build();

            user.addProfile(profile); // 建立双向关系绑定
            System.out.println(user);
        }
    }
    ```

    - 描述：通过 `addProfile()` 方法同步设置双方引用，构成绑定

### 其他实体类

> 简述：分类与产品实体建模（`Category` ↔ `Product`）

1. `categories`表，以及 `products`表：添加 flyway 文件`V6__add_categories_and_products.sql`

    ```sql
    CREATE TABLE categories
    (
        id   TINYINT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    CREATE TABLE products
    (
        id          BIGINT AUTO_INCREMENT PRIMARY KEY,
        name        VARCHAR(255)   NOT NULL,
        price       DECIMAL(10, 2) NOT NULL,
        category_id TINYINT,
        CONSTRAINT fk_category
            FOREIGN KEY (category_id) REFERENCES categories (id)
                ON DELETE RESTRICT
    );
    ```

2. 实体类`Category.java`

    ```java
    @Setter
    @Entity
    @Table(name = "categories")
    public class Category {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Byte id;

        @Column(name = "name")
        private String name;

        @OneToMany(mappedBy = "category")
        private Set<Product> products = new HashSet<>();
    }
    ```

3. 实体类`Product.java`

    ```java
    @Setter
    @Entity
    @Table(name = "products")
    public class Product {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "name")
        private String name;

        @Column(name = "price")
        private BigDecimal price;

        @ManyToOne
        @JoinColumn(name = "category_id")
        private Category category;
    }
    ```


