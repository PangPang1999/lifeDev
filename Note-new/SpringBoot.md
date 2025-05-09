## 快捷键

1. 高级
    - 提取方法/接口： （选取代码）置顶菜单 Refactor——Extract/Introduce——Method/Interface
        - 提取方法默认为 private
2. 基础
    - `Command+,`设置
    - `Command+shift+O`查找文件
    - `Control+r`运行
    - `Control+D`调试运行

## 待补充

> 在前面阶段不过多的介绍复制的概念是好的学习方案。但是为了避免遗漏，这里记录课程中，我觉得有必要补充的东西

1. SpringBoot 中的各类注解

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

> 简述：Controller 是 Spring MVC 中处理用户请求的组件，它接收客户端请求，与业务逻辑交互后决定返回视图或数据响应给用户，实现数据与界面的有效分离。

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
    - 启动命令：`./mvnw spring-boot:run` 自动编译并运行应用。。windows 为 `mvnw.cmd spring-boot:run`
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

    - `properties` vs `yaml`：键值对 vs 层级结构，可按喜好选择。
    - 默认为`application.properties`

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

4. `OrderService`中使用构造函数注入

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
