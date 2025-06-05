Introduction to Spring MVC
Building RESTful APls
Validating API Requests
Project: Building the Shopping Cart API
Securing APls with Spring Security
Project: Building the Checkout and Order APls
Payment Processing with Stripe
Deployment

## 误区

1. 外键约束 vs 实体类关联

    - 外键约束（数据库层）
        - 定义：数据库表字段间的参照关系，强制保证数据一致性，如订单表 `customer_id` 引用用户表 `id`。
        - 作用：防止脏数据、孤儿记录，提供底层数据安全保障。
    - 实体类关联（对象层）
        - 定义：ORM（如 JPA）中实体类的对象引用，通过注解（如 `@ManyToOne`、`@OneToMany`）描述业务对象间关系。
        - 作用：支持对象导航、懒加载/饿加载、级联操作等编程便利，提升开发效率与代码可读性。
    - 关系与区别
        - 两者功能互补，互不依赖：
            - 外键约束约束数据层，实体类关联作用于代码层。
            - ORM 的关联、懒加载、级联操作等功能不依赖数据库外键是否存在。
            - 只有数据库外键能兜底数据一致性，只有实体类关联能实现对象间便捷访问。
    - 最佳实践
        - 推荐同时实现：数据库层加外键约束，实体类加关联注解。
        - 这样既保证数据安全，又兼顾编程便利，形成双重保护。

## 技巧

### 雪花算法

1. 对比 UUID

    - UUID：128 位、长度长、无序、不适合做数据库主键。
    - 雪花算法：生成 64 位长整型 ID，短、递增、排序高效，适合分布式唯一主键。

2. 构成

    - 一般为 64 位整数，常见结构：

        - 1 位符号位（总为 0）
        - 41 位时间戳（毫秒）
        - 10 位机器/数据中心 ID
        - 12 位自增序列（同毫秒内生成多个 ID）

3. 使用方式

    - 在分布式系统中，每台机器独立生成全局唯一、趋势递增的 ID，无需数据库协调。

4. 使用场景

    - 分布式系统主键（如订单号、用户 ID）
    - 高并发写入场景
    - 需要全局唯一、可排序 ID 的业务

### 查询加速

1. UUID 主键设计后优化（可提升查询性能 20-50%）

    1. 存储类型优化
        - 推荐使用 `BINARY(16)` 类型存储 UUID，相比 `VARCHAR(36)` 更节省空间，能显著提升索引与查询性能。
    2. MySQL 支持说明
        - MySQL 本身不直接支持 UUID 类型，`UUID()` 函数生成的是 `VARCHAR` 字符串，不能直接插入二进制字段。
    3. 主键生成方式对比
        - 数据库端生成：可通过 `UUID_TO_BIN(UUID())` 将字符串 UUID 转换为二进制，作为字段默认值。注意，表达式需用括号包裹，否则会报错。示例：
            ```sql
            id BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()))
            ```
        - 应用层生成（推荐）：在实体类主键字段上使用 `@GeneratedValue(strategy = GenerationType.UUID)`，由框架（如 Hibernate 6+）自动生成 UUID 并存储为二进制。
    4. 最佳实践建议
        - 生产环境下建议选用一种方式，避免混用，以免主键生成冲突或失效。
        - 更推荐在应用层由框架生成 UUID，即采用 `@GeneratedValue(strategy = GenerationType.UUID)`，便于分布式扩展和业务灵活性；而数据库自动生成仅适用于特定场景。
    5. 补充
        - BIGINT 本身就是二进制存储

2. 存储引擎（可提升查询性能 20%~40%）

    1. InnoDB：支持事务、行级锁、外键，写入安全，但每条记录有更多的事务和索引维护开销。
    2. MyISAM（或类似不支持事务的引擎）：只支持表级锁，结构简单，读取速度快，写入简单，但不支持事务和外键。
    3. 效率说明：
        1. 1000 万条数据、简单索引、只做 SELECT，MyISAM 通常比 InnoDB 快 20%~40%（有些场景能快到 50%），但这个差距是“理论最大值”。
        2. 如果涉及并发读写、表锁等待、写入操作，InnoDB 反而更优。

3. 一般实际提升区间

    - 真实测试下，BINARY(16) + MyISAM，查询性能可提升 40%~70%，极端理想场景甚至略高。
    - 性能提升的上限受限于表结构、索引设计、硬件条件、SQL 查询方式等。多数情况下，50%左右的提升是很现实的。

# 补充

1. 购物车项目
    1. 在设计表和实体类时，都为主键设置了 UUID 生成，实体类上设置的`@GeneratedValue(strategy = GenerationType.UUID)`将由框架生成 UUID，数据库设置的`(uuid_to_bin(uuid()))`将在没有给 UUID 值时自动生成 UUID，两者混用可能导致问题

# 准备

> 简述：依旧之前的项目，但项目中存在许多演示用代码，这里重新建一个项目

1. Moth 仓库

    - https://github.com/mosh-hamedani/spring-api-starter

2. 修改

    - 修改 `pom.xml` 中的 JDK 版本，SpringBoot 版本，与先前一致（建议）
    - 修改 `pom.xml`、`application.yaml` 中的数据库配置
    - 修改 `V1__initial_migration.sql`，将两个 `TINYINT` 修改为 `BIGINT`
    - 修改 `User.java`，注释掉 `Profile` 字段
    - 修改`Category.java`，将 Byte 修改为 Long
    - 修改`CategoryRepository.java`，将 Byte 修改为 Long

3. 数据库

    - 通过 flyway 插件运行脚本
    - 连接数据库

4. 测试数据 SQL

    ```sql
    -- Insert users
    insert into users (id, name, email, password) values
    	  (2, 'Alice', 'alice@example.com', 'password1'),
    	  (3, 'Bob', 'bob@example.com', 'password2'),
    	  (1, 'Charlie', 'charlie@example.com', 'password3'),
    	  (5, 'David', 'david@example.com', 'password4'),
    	  (4, 'Eva', 'eva@example.com', 'password5');

    -- Insert categories
    insert into categories (id, name) values
    (1, 'Electronics'),
    (2, 'Books');

    -- Insert products
    insert into products (id, name, price, description, category_id) values
    (1, 'iPhone 15 Pro', 1199.00, 'Apple flagship smartphone with advanced camera and A17 chip.', 1),
    (2, 'Sony Alpha 7 IV', 2499.00, 'Sony full-frame mirrorless camera with fast autofocus.', 1),
    (3, 'MacBook Air M3', 1499.00, 'Apple ultra-thin laptop powered by M3 chip.', 1),
    (4, 'Kindle Paperwhite', 139.00, 'Amazon e-reader with high-resolution display.', 1),
    (5, 'Samsung Galaxy S24', 1099.00, 'Samsung flagship smartphone with dynamic AMOLED screen.', 1),
    (6, 'Bose QuietComfort Earbuds', 299.00, 'Noise-cancelling wireless earbuds by Bose.', 1),
    (7, 'Java: The Complete Reference', 69.00, 'Comprehensive book on Java programming language.', 2),
    (8, 'Effective Java', 89.00, 'Best practices for Java programming by Joshua Bloch.', 2),
    (9, 'The Art of Computer Programming', 159.00, 'Classic work on algorithms by Donald Knuth.', 2),
    (10, 'Fu Sheng Liu Ji', 12.00, 'Autobiographical work by Shen Fu, a classic of Chinese literature.', 2),
    (11, 'To Kill a Mockingbird', 18.00, 'Harper Lee’s classic novel about justice and race.', 2),
    (12, 'Clean Code', 79.00, 'A Handbook of Agile Software Craftsmanship by Robert C. Martin.', 2);


    ```

# Spring MVC

## Web 基本工作原理

> 简述：Web 应用本质是客户端（如浏览器）与服务器间通过 HTTP 协议完成请求与响应的数据交互，支撑现代互联网的所有信息传递。

**知识树**

1. 请求-响应机制

    - 客户端发起 HTTP 请求（request）。
    - 服务器处理后返回 HTTP 响应（response）。
    - 通信过程均基于标准 HTTP 协议。

2. HTTP 通信结构

    - 请求（Request）
        - Method：请求方法，如 GET（获取数据）、POST（提交数据）、PUT、DELETE 等。
        - URL：统一资源定位符，标识目标资源地址。
        - Headers：请求头，包含客户端信息、认证信息等元数据。
        - Body（可选）：请求体，承载提交到服务器的数据（如表单、JSON 数据等）。
    - 响应（Response）
        - 状态码：服务器处理结果，如 200（成功）、404（未找到）、500（服务器错误）等。
        - Headers：响应头，描述返回内容类型、缓存策略等。
        - Body：响应主体，内容可为 HTML、JSON、文件等，取决于应用和接口设计。

3. 网页渲染模式

    - 服务器端渲染（SSR, Server-Side Rendering）
        - 服务端生成完整 HTML 页面并返回，首屏加载快，对 SEO 友好。
        - 传统多页面应用。
    - 客户端渲染（CSR, Client-Side Rendering）
        - 服务器只返回原始数据（如 JSON），前端用 JS 框架（React/Vue 等）在浏览器中渲染页面。
        - 适合单页应用（SPA）和高交互体验。
    - JSON（JavaScript Object Notation）
        - 轻量、易读的通用数据交换格式，现代 Web 开发的数据通信主流选择。

4. API 通信

    - 定义：API（应用程序接口）定义了前端、后端、移动端等系统间的数据交互规则，常用 RESTful 风格。
    - 过程：
        - 后端暴露 API，负责数据处理和安全控制。
        - 前端通过 API 发送/获取 JSON 数据，并据此渲染页面。

## Spring MVC 基本原理

> 简述：Spring MVC 是基于 MVC 架构的 Web 框架，简化了 HTTP 请求的分发、业务逻辑处理与结果展示，实现了数据、视图和控制逻辑的高内聚低耦合。Spring Boot 进一步提升了其易用性与开发效率。

**知识树**

1. MVC 设计模式

    - Model（模型）：负责业务数据与逻辑处理，如实体类、服务、数据库操作等。
    - View（视图）：负责界面展示，常见为 HTML、模板页面等。
    - Controller（控制器）：中介者，接收请求、调用模型、选择视图、生成响应。

2. 请求处理流程

    - 客户端（如浏览器）向特定 URL 发起 HTTP 请求。
    - Spring MVC 通过 DispatcherServlet 分发请求，定位匹配的 Controller。
    - Controller 处理请求，执行业务逻辑，与 Model 交互，准备数据。
    - Controller 返回结果，由 View 层渲染页面，或直接以 JSON 等格式返回数据。

3. 结果响应模式

    - 视图渲染：返回页面（如 Thymeleaf、Freemarker 等模板引擎渲染 HTML）。
    - 数据响应：返回数据（如 JSON），适用于前后端分离或 RESTful API。

4. Spring Boot 集成

    - 自动配置：
        - 自动完成大量底层组件（如 MVC、数据源、JSON 序列化等）的初始化和装配。开发者无需手动配置繁琐的 XML 或 Java 配置类，常见功能即装即用。
    - 内嵌服务器，零配置启动
        - Spring Boot 内置 Tomcat、Jetty、Undertow 等 Web 服务器，无需独立安装和配置应用服务器，开发/测试只需运行主类即可启动完整 Web 应用。
    - 约定优于配置
        - Spring Boot 预置了最佳实践和合理默认值，大部分常用配置无需关注，只有极少数个性化需求才需自定义。
        - 示例：静态资源自动映射到 /static、模板页面自动放在 /templates。
    - 简化依赖管理
        - Starter 依赖（如 `spring-boot-starter-web`）一次性引入所需全部依赖，避免手动管理各种版本冲突和兼容性问题。
    - Spring Boot 简化的是整个 Spring 开发生态，而不只是 MVC 本身

## Controller 基础使用

> 简述：Spring MVC 的控制器（Controller）负责接收和处理 HTTP 请求，并返回页面视图或数据响应，是 Web 应用的核心入口。通过注解和方法映射，简化请求路由和结果处理。

**知识树**

1. 控制器定义与职责

    - 使用 `@Controller` 注解标识，由 Spring 容器托管。
    - 主要负责映射 HTTP 路径、处理请求、准备响应（如页面或 JSON）。

2. 基本用法与流程

    - 创建 Controller 类（建议放在 controllers 包）。
    - 在方法上使用 `@RequestMapping`、`@GetMapping` 等注解，指定 URL 路径和请求类型。
    - 控制器方法返回视图名（模板页面）、静态页面，或直接返回数据（如 JSON）。

3. 补充说明

    - 一个控制器可包含多个方法，映射不同路径。
    - 视图页面通常放置于 `resources/templates`（用于模板引擎）或 `resources/static`（用于静态页面）。
    - 使用`html:5`快捷输入，能快速创建 html 模版页面

**代码示例**

1. 基础 Controller 示例

    ```java
    @Controller
    public class HomeController {
        @RequestMapping("/")
        public String index() {
            return "index.html";
        }

        @RequestMapping("/hello")
        public String hello() {
            return "index.html";
        }
    }
    ```

    - 描述：
        - `store` 包下创建 `controllers` 包，创建 `HomeController` 控制器
        - 上述代码定义了两个路由，`/` 和 `/hello`，均返回 index.html 页面，实现首页和 hello 页面访问。

2. 静态 HTML 示例（resources/static/index.html）

    ```html
    <!DOCTYPE html>
    <html lang="en">
    	<head>
    		<meta charset="UTF-8" />
    		<meta
    			name="viewport"
    			content="width=device-width, initial-scale=1"
    		/>
    		<title>Document</title>
    	</head>
    	<body>
    		<h1>Hello World</h1>
    	</body>
    </html>
    ```

    - 说明：该 HTML 文件作为静态首页，随 Controller 返回至客户端。返回的方式是 SSR，稍后介绍动态 HTML。

## 模板引擎基础使用

> 简述：模板引擎（如 Thymeleaf）让 Spring MVC 能在 HTML 页面中嵌入变量和逻辑，实现数据驱动的动态渲染。通过模板与控制器的数据绑定，实现灵活的内容展示。

**知识树**

1. 模板引擎概念

    - 作用：将后端数据与 HTML 模板结合，动态生成最终页面。
    - 常见实现：Thymeleaf（主流）、Freemarker、Mustache、JSP（已过时）。

2. Thymeleaf 基本用法

    - 依赖引入：在 `pom.xml` 添加 `spring-boot-starter-thymeleaf` 依赖。
        - 通过 Add starter 的方式添加，搜索 `thymeleaf`
    - 目录规范：模板文件需放于 `resources/templates`。
    - 模板声明：在 `<html>` 标签中声明 Thymeleaf，如 `xmlns:th="http://www.thymeleaf.org"`。
    - 动态语法：通过 `th:*` 属性（如 `th:text`）配合 `${}` 变量语法插值。

3. 动态数据绑定与渲染

    - 控制器通过 `Model` 传递数据至视图。
        - 在控制器方法（如 `index(Model model)`）中声明参数为 Model，Spring MVC 在处理 HTTP 请求并调用该方法时，会自动创建一个 Model 对象并作为参数传入。
    - 使用 `model.addAttribute("key", value)` 绑定变量。
    - 模板内通过 `${key}` 读取后端变量。
    - 控制器返回模板名（不带 `.html` 后缀），Spring 自动定位模板并渲染生成最终页面。

**代码示例**

1. Thymeleaf 动态页面示例（resources/templates/index.html）

    ```html
    <!DOCTYPE html>
    <html lang="en" xmlns:th="http://www.thymeleaf.org">
    	<head>
    		<meta charset="UTF-8" />
    		<meta
    			name="viewport"
    			content="width=device-width, initial-scale=1"
    		/>
    		<title>Document</title>
    	</head>
    	<body>
    		<h1 th:text="'Hello, ' + ${name}"></h1>
    	</body>
    </html>
    ```

    - 说明：
        - 创建 `templates`包，将 `index.html` 转移至其中
        - 通过 `th:text` 动态渲染 `name` 变量，实现页面内容个性化。

2. 控制器传递动态变量

    ```java
    @Controller
    public class HomeController {
        @RequestMapping("/")
        public String index(Model model) {
            model.addAttribute("name", "Mosh");
            return "index";
        }
    }
    ```

    - 说明：
        - `Model` 选择 `org.springframework.ui.Model;`
        - 控制器通过 Model 传递数据，返回 `index`，自动渲染 `resources/templates/index.html`。

## RESTful API 基础

> 简述：RESTful API 是一种基于 HTTP 协议、强调资源和统一接口的 Web 服务设计风格，常用于系统间、前后端分离的高效数据通信。Spring Boot 提供 `@RestController` 注解，简化返回 JSON 的 API 开发。

**知识树**

1. RESTful API 概念

    - REST（Representational State Transfer）：以资源为中心的无状态通信规范。
    - API（应用编程接口）：定义应用之间的数据交换规则。
    - RESTful API：遵循 REST 原则，基于 HTTP 进行资源操作（如 GET、POST、PUT、DELETE），数据常用 JSON 格式传递。

2. `@RestController` 注解

    - 标记类为 REST 控制器，所有方法默认返回 JSON 数据。
    - 区别于 `@Controller`，后者用于返回 HTML 页面视图。

3. API 方法定义

    - 创建 Controller 类（如 `MessageController`），加上 `@RestController` 注解。
    - 方法使用 `@RequestMapping` 等注解，定义接口路径和请求方式。
    - 方法返回 Java 对象、字符串或集合，Spring Boot 自动序列化为 JSON。

4. 典型应用场景

    - 前后端分离的 Web 项目
    - 移动端/小程序的数据服务
    - 第三方系统集成、自动化服务、AI Agent 等

5. JSON 辅助工具

    - Chrome 建议安装 JSON Formatter 插件
    - Safari 建议在 App store 免费下载 JSON Peep 插件

**代码示例**

1. REST 控制器基础用法

    ```java
    @RestController
    public class MessageController {
        @RequestMapping("/hello")
        public String sayHello() {
            return "Hello World!";
        }
    }
    ```

    - 描述：访问 `/hello` 返回纯文本内容，无 HTML 包裹。

2. 返回对象并自动转为 JSON

    - entities 包下创建 Message 对象

        ```java
          @AllArgsConstructor
          @Getter
          public class Message {
              private String text;
          }
        ```

    - 将返回类型更改为 Message 对象

        ```java
        @RestController
        public class MessageController {
            @RequestMapping("/hello")
            public Message sayHello() {
                return new Message("hello world");
            }
        }
        ```

        - 描述：访问 `/hello` 返回 `{"text":"hello world"}`，Spring Boot 自动将 Java 对象序列化为 JSON。

    - 返回内容

        ```JSON
        {
          "text": "hello world"
        }
        ```

# RESTful APIs

## 创建 RESTful API

> 简述：通过 Spring Boot 构建 RESTful API，可以高效地暴露后端数据与业务逻辑，自动将数据库实体转换为 JSON 格式响应，实现与前端的标准化数据通信。

**知识树**

1. 核心注解

    - `@RestController`：标记控制器为 REST API，所有方法默认返回 JSON。
    - `@RequestMapping`：通用的请求映射注解，可指定类或方法级别的 URL 路径、HTTP 方法等。
    - `@GetMapping`、`@PostMapping` 等：`@RequestMapping` 的语法糖，分别对应具体的 HTTP 方法（GET、POST、PUT、DELETE 等），简化常用请求的声明，推荐优先使用，语义更清晰。

2. 返回值处理

    - 使用 `CrudRepository` 时，`findAll()` 默认返回 `Iterable<T>`，可直接作为接口返回值，提升代码简洁性。
    - `JpaRepository`的`findAll()` 默认返回 `List<T>`，可以调用 Stream 方法。

3. API 开发基础流程

    - 创建控制器类（如 `UserController`），用 `@RestController` 注解声明。
    - 注入对应的 Repository（如 `UserRepository`），通过方法访问数据。
    - 使用 `@GetMapping("/users")` 等注解映射 URL 到具体方法。
    - 方法返回数据库实体集合，Spring Boot 自动序列化为 JSON。
    - 此流程为简略演示

4. 安全与数据暴露

    - 直接返回实体对象会暴露所有属性（如密码等敏感信息）。
    - 实际开发需谨慎处理敏感字段，后面将介绍解决方案。

**代码示例**

1. 基础 RESTful 用户查询接口

    ```java
    @RestController
    @AllArgsConstructor
    public class UserController {

        private final UserRepository userRepository;

        @GetMapping("/users")
        public Iterable<User> getAllUsers() {
            return userRepository.findAll();
        }
    }
    ```

    - 描述：控制器注入仓库，`getAllUsers` 方法返回全部用户，自动转为 JSON。

## Postman 基础

> 简述：Postman 是一款功能强大的 API 调试与测试工具，广泛应用于前后端开发、接口联调及自动化测试，极大提升 API 开发与协作效率。

**知识树**

1. Postman 工具简介

    - 免费跨平台桌面应用，用于发送 HTTP 请求、管理 API 集合、调试接口、保存请求历史等。
    - 支持多种请求类型（GET、POST、PUT、PATCH、DELETE 等）及批量管理和自动化测试。
    - 地址：https://www.postman.com/downloads/

2. 基本操作与界面

    - 新建请求：点击“+”号，创建新的请求标签页。
    - 选择方法：左侧下拉选择请求类型（如 GET、POST）。
    - 输入 URL：直接填写目标接口地址。
    - 参数设置：
        - Params：添加 URL 查询参数（key-value 形式）。
        - Authorization：内置多种认证方式（如 Bearer Token、API Key、Basic Auth）。
        - Headers：自定义或查看请求头（如 Content-Type、Authorization）。
        - Body：配置请求体，支持多种格式（raw JSON、表单、文件等）。

3. 响应查看与分析

    - Response 面板：展示接口响应体、状态码、响应时间与体积等信息。
    - Preview 视图：支持美化（Pretty）、原始（Raw）、预览（Preview）等多种视图，便于读取 JSON、HTML、图片等不同格式数据。
    - Headers 视图：详细查看响应头信息。

4. 实践建议

    - 推荐使用 Postman 进行日常接口开发调试、自动化测试与接口文档管理。
    - 后续使用 postman 访问接口测试

## 动态参数查询

> 简述：通过 RESTful API，可以根据请求参数动态检索资源，实现按需查询和灵活的数据访问。

**知识树**

1. 动态参数绑定

    - 路径参数（Path Variable）：通过 URL 直接传递变量，如 `/users/{id}`。
    - 参数映射：用 `@PathVariable` 注解将 URL 参数绑定到方法参数，类型需与主键一致（如 Long）。

2. 查询与返回机制

    - 根据主键动态检索实体，常用 `findById` 等方法。
    - 查找成功返回实体对象，未找到返回 `null` 或空响应。
    - 建议后续统一异常处理和状态码返回（如资源未找到返回 404）。

3. RESTful 设计规范

    - API 路径应清晰表达资源层级和操作语义。
    - 建议所有接口保持一致的参数风格和异常处理逻辑。

**代码示例**

1. 动态路径参数查询用户

    ```java
    @RestController
    @AllArgsConstructor
    public class UserController {

        private final UserRepository userRepository;

        @GetMapping("/users")
        public List<User> getAllUsers() {
            return userRepository.findAll();
        }

        @GetMapping("/users/{id}")
        public User getUserById(@PathVariable Long id) {
            return userRepository.findById(id).orElse(null);
        }
    }
    ```

    - 描述：`/users/{id}` 路径中的 `{id}` 通过 `@PathVariable` 绑定为方法参数，实现动态查询；未找到返回 `null`，后续可优化为异常映射 404。

## 路由前缀

> 简述：通过在控制器类上统一设置路由前缀，可以避免方法级路径的重复书写，使 API 路径结构清晰

**知识树**

1. 路由前缀的定义

    - 在控制器类上使用 `@RequestMapping("/前缀")` 统一指定基础路径，如 `/users`。
    - 避免每个方法重复书写通用部分，提高一致性和可维护性。

**代码示例**

1. 路由前缀

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;

        @GetMapping
        public List<User> getAllUsers() {
            return userRepository.findAll();
        }

        @GetMapping("/{id}")
        public User getUserById(@PathVariable Long id) {
            return userRepository.findById(id).orElse(null);
        }
    }
    ```

    - 描述：类级 `@RequestMapping("/users")` 统一前缀，方法级 `@GetMapping` 实现不同子路由，无需每次重复 `/users`。

## ResponseEntity

> 简述：`ResponseEntity` 是 Spring Web 提供的通用响应封装类型，可灵活设置响应体、状态码和 HTTP 头，支持细粒度控制 API 的返回内容和行为。

**知识树**

1. ResponseEntity 概念

    - 封装 HTTP 响应内容，允许开发者自定义响应体、状态码和响应头。
    - 适合需要灵活处理响应结果的场景，如异常处理、多分支返回等。

2. 创建方式

    - 构造方法：`new ResponseEntity<>(body, status)` 或仅指定状态。
    - 工厂方法（推荐）：如 `ResponseEntity.ok(body)`、`ResponseEntity.notFound().build()`，语义清晰、简洁。

3. 常用应用场景

    - 查询不到资源时返回 404（Not Found）。
    - 正常返回数据时使用 200（OK）。
    - 可扩展链式设置自定义 HTTP 头，或返回其他状态码（如 201、204、400、500）。

**代码示例**

1. 根据查询结果返回不同响应

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	// 省略部分代码

        @GetMapping("/{id}")
        public ResponseEntity<User> getUserById(@PathVariable Long id) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                // return new ResponseEntity<>(HttpStatus.NOT_FOUND);
                return ResponseEntity.notFound().build();
            }
            // return new ResponseEntity<>(user, HttpStatus.OK);
            return ResponseEntity.ok(user);
        }
    }
    ```

    - 说明：未查到用户返回 404，无响应体；查到用户返回 200 和用户数据。

## DTO 与实体解耦

> 简述：DTO（数据传输对象）用于在不同应用层之间传递数据。通过在 API 层使用 DTO，可以隔离底层实体结构，防止敏感信息暴露，提升接口的安全性和稳定性。

**知识树**

1. 实体泄露与 API 设计风险

    - 直接返回实体对象，容易暴露敏感字段（如密码、权限等）。
    - 实体结构变动会影响外部接口，降低 API 稳定性和可维护性。

2. DTO（数据传输对象）原理

    - DTO 只包含对外需要暴露的字段，是专用于接口通信的数据结构。
    - 典型用法是在 Controller 层将实体对象映射为 DTO，API 层仅暴露 DTO。

3. DTO 映射实践

    - Repository 层返回实体对象，无需变更接口定义。
    - Controller 层负责将实体对象流式（stream）转换为 DTO。
    - API 方法返回值类型改为 DTO，如 `List<UserDto>`，避免实体结构泄露。

4. 规范与命名

    - DTO 命名采用 PascalCase（如 `UserDto`）。
    - 仅包含对外字段，隐藏内部实现细节与敏感属性。
    - 建议在 `dtos` 包下定义。

5. 性能与进阶思考

    - 对于大表全量查询再流式映射 DTO，可能存在性能损耗。若表结构稳定，可在 Repository 层直接返回 DTO，进一步提升效率。
    - 更优解：直接在 Repository 层返回 DTO

**代码示例**

1. 定义 DTO 类型

    ```java
    @AllArgsConstructor
    @Getter
    public class UserDto {
        private Long id;
        private String name;
        private String email;
    }
    ```

    - 描述：只包含安全对外的字段。store 下创建创建 dtos 包，其内创建 UserDto

2. 控制器中实体到 DTO 的映射

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;

        @GetMapping
        public List<UserDto> getAllUsers() {
            return userRepository.findAll()
                    .stream()
                    .map(user -> new UserDto(user.getId(), user.getName(), user.getEmail()))
                    .toList();
        }

        @GetMapping("/{id}")
        public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            var userDto = new UserDto(user.getId(), user.getName(), user.getEmail());
            return ResponseEntity.ok(userDto);
        }
    }
    ```

    - 说明：控制器输出为 UserDto，屏蔽实体结构和敏感信息。实体结构变更时，只需调整映射逻辑，API 输出保持稳定。

## MapStruct 对象映射

> 简述：对象映射工具用于在实体类与 DTO 之间自动转换，减少重复代码、提升开发效率，并避免手动映射易错和难维护的问题。

**知识树**

1. 手动映射的不足

    - 每次手写转换逻辑易出错且代码冗余。
    - 随着实体和 DTO 增长，维护难度加大。

2. 主流对象映射工具

    - ModelMapper：基于反射，使用简单但运行效率低，调试不便，适合快速原型。
    - MapStruct（主要介绍）：编译期自动生成类型安全的转换代码，性能优异，推荐生产环境使用。

3. MapStruct 快速入门

    - 依赖引入

        - 在 `pom.xml` 添加 `mapstruct` 和 `mapstruct-processor` 依赖。
        - 建议选择与 Spring Boot 版本兼容的最新版本。

    - 映射接口定义

        - 在 `mappers` 包中创建映射接口（如 `UserMapper`）。
        - 使用 `@Mapper(componentModel = "spring")` 标注，实现由 Spring 管理。
        - 在接口中声明转换方法，如 `UserDto toDto(User user);`，无需手写实现。

    - 使用方式

        - 在 Controller 或 Service 层注入映射器，直接通过方法或方法引用（如 `userMapper::toDto`）完成实体到 DTO 转换。

4. 自动生成与维护

    - 映射实现自动生成于 `target/generated-sources` 目录，开发者无需手动维护。
    - 实体或 DTO 字段变动后，重新编译项目即可同步映射逻辑。

5. `@Mapping`注解

    - `source`
        - 含义：源对象的字段名（即你要从哪个属性取值）
        - 用法：`source = "userName"`
    - `target`
        - 含义：目标对象的字段名（即你要把值赋给哪个属性）
        - 用法：`target = "name"`
    - （可选）`expression`
        - 含义：自定义表达式，用 Java 代码返回目标字段值，适合复杂场景（如动态赋值、类型转换等）如下
            ```java
            @Mapping(target = "createdAt", expression = "java(java.time.LocalDateTime.now())")
            ```
    - （可选）`constant`
        - 含义：为目标字段赋固定值（字符串）
        - 用法：`constant = "ACTIVE"`
    - （可选）`**ignore**`\*\*
        - 含义：是否忽略该字段（不映射），布尔值
        - 用法：`ignore = true`

**代码示例**

1. 映射接口定义

    ```java
    @Mapper(componentModel = "spring")
    public interface UserMapper {
        UserDto toDto(User user);
    }
    ```

    - 说明：声明映射方法，MapStruct 会自动实现。

2. Controller 层使用

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @GetMapping
        public List<UserDto> getAllUsers() {
            return userRepository.findAll()
                    .stream()
                    .map(userMapper::toDto)
                    .toList();
        }

        @GetMapping("/{id}")
        public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(userMapper.toDto(user));
        }
    }
    ```

    - 说明：无需手写映射逻辑，提升类型安全，保证代码简洁。

## JSON 序列化控制

> 简述：Spring Boot 默认使用 Jackson 进行 Java 对象与 JSON 间的转换。通过 Jackson 注解，可精准控制序列化/反序列化的行为，实现字段过滤、重命名、格式化输出等，提升 API 安全性与前后端兼容性。

**知识树**

1. 序列化与反序列化

    - 序列化：Java 对象转为 JSON 字符串，供前端/客户端消费。
    - 反序列化：JSON 字符串转为 Java 对象，便于后端处理。

2. 核心 Jackson 注解

    - `@JsonIgnore`：排除字段，不参与**序列化和反序列化**。
    - `@JsonProperty`：自定义 JSON 字段名，实现后端字段与前端字段解耦。
    - `@JsonInclude`：按规则排除字段（如 null/空值）。
        - 例如 `@JsonInclude(JsonInclude.Include.NON_NULL)`，字段为 null 时不输出。
    - `@JsonFormat`：指定序列化格式，常用于日期时间字段。
        - 如 `@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")`。

3. 典型场景与用法

    - 避免暴露敏感字段（如 id、密码）。
    - 适配前端字段命名习惯或第三方接口要求。
    - 精简输出，避免无效字段，提升网络传输效率。
    - 格式化时间、金额等特殊类型。

4. 配合对象映射工具

    - 结合 MapStruct 的 `@Mapping` 注解测试，对 DTO 字段赋值和格式转换。

**代码示例**

1. DTO 序列化控制示例

    ```java
    @AllArgsConstructor
    @Getter
    public class UserDto {
        // 设置JSON不包含用户id
        @JsonIgnore
        private Long id;

        // 设置JSON中name改为user_name
        @JsonProperty("user_name")
        private String name;

        private String email;

        // 设置JSON中phoneNumber为空时不包含
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private String phoneNumber;

        // 设置时间转换为标准格式
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime createdAt;
    }
    ```

    - 说明：示例演示字段排除、重命名、非空输出及日期格式化。，测试完毕后恢复原代码

2. 配合 MapStruct 映射动态赋值

    ```java
    @Mapper(componentModel = "spring")
    public interface UserMapper {
        @Mapping(target = "createdAt", expression = "java(java.time.LocalDateTime.now())")
        UserDto toDto(User user);
    }
    ```

    - 说明：自动映射实体到 DTO，并动态赋值时间戳。测试完毕后恢复原代码

## 提取查询参数

> 简述：查询参数（Query Parameter）使前端可通过 URL 动态传递过滤、排序等条件，后端利用 `@RequestParam` 获取参数，实现接口灵活性和可定制化的数据排序。

**知识树**

1. 查询参数机制

    - 查询参数以 `key=value` 形式，追加于 URL 问号（?）之后，支持多个参数（用 & 连接），如 `/users?sort=name&page=1`。
    - 常用于前端自定义筛选、排序、分页等功能。

2. `@RequestParam` 注解

    - 用于 Controller 方法参数，自动映射 URL 查询参数。支持参数类型自动转换。
    - 参数说明：
        - `required`：默认 true，若缺失则抛 400 错误。
        - `defaultValue`：设置默认值，避免参数缺失导致异常。
        - `name`：指定参数名，避免前后端字段不一致引发问题。

3. 参数校验与容错

    - 可通过集合（如 `Set.of(...)`）校验合法字段，非法输入回退默认值，提升健壮性。
    - 推荐将 `defaultValue` 设为空字符串，通过代码后置判断，灵活适配字段变化。
    - 参数名如变更，应同步修改 `@RequestParam(name = "...")`，确保接口兼容。

4. 动态排序实现

    - 将前端传入的排序字段，校验并传递给 Spring Data JPA 的 `Sort.by()`，实现后端数据动态排序。

**代码示例**

1. 基于查询参数的动态排序实现

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @GetMapping
        public List<UserDto> getAllUsers(
                @RequestParam(required = false, defaultValue = "", name = "sort") String sortBy
        ) {
            if (!Set.of("name", "email").contains(sortBy)) {
                sortBy = "name";
            }

            return userRepository.findAll(Sort.by(sortBy).descending())
                    .stream()
                    .map(userMapper::toDto)
                    .toList();
        }


    	// 省略

    }
    ```

    - 说明：通过 `@RequestParam` 动态获取排序字段，验证有效性后传递给 `Sort.by()`，实现可扩展的数据排序。

## Ex: 构建产品列表与详情 API

> **要求**：
>
> 1. 创建两个产品相关 API：
>     - 获取产品列表接口（支持按 categoryId 查询筛选，未指定则返回全部产品）
>     - 获取单个产品详情接口（按 产品 id 查询，不存在返回 404）
> 2. 返回值为 ProductDto，仅包含 id、name、description、price、categoryId 字段，不暴露完整实体。
> 3. ProductDto 的 categoryId 字段通过自定义映射，将实体的 `category.id` 转为 dto 字段。
> 4. 优化查询，避免 N+1 问题（如使用 join fetch 或 entity graph）。

> **要点**：

1. `ProductMapper`中处理`category.id`映射
2. 通过 join fetch 或 entity graph 避免多个 SQL 查询

**代码**

1. `ProductDto`

    ```java
    @Data
    public class ProductDto {
        private Long id;
        private String name;
        private BigDecimal price;
        private String description;
        private Long categoryId;
    }
    ```

2. `ProductMapper`

    ```java
    @Mapper(componentModel = "spring")
    public interface ProductMapper {
        @Mapping(target = "categoryId", source = "category.id")
        ProductDto toDto(Product product);
    }
    ```

3. `ProductRepository`

    ```java
    public interface ProductRepository extends JpaRepository<Product, Long> {
        @EntityGraph(attributePaths = "category")
        List<Product> findByCategoryId(Long categoryId);

        @EntityGraph(attributePaths = "category")
        @Query("SELECT p FROM Product p")
        List<Product> findAllWithCategory();
    }
    ```

4. `ProductController`

    ```java
    public class ProductController {
        private final ProductRepository productRepository;
        private final ProductMapper productMapper;

        @GetMapping
        public List<ProductDto> getAllProducts(
                @RequestParam(name = "categoryId", required = false) Long categoryId
        ) {
            List<Product> products;
            if (categoryId != null) {
                products = productRepository.findByCategoryId(categoryId);
            } else {
                products = productRepository.findAllWithCategory();
            }

            return products
                    .stream()
                    .map(productMapper::toDto)
                    .toList();
        }

        @GetMapping("/{id}")
        public ResponseEntity<ProductDto> getProduct(@PathVariable Long id) {
            var product = productRepository.findById(id).orElse(null);
            if (product == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(productMapper.toDto(product));
        }
    }
    ```

## 提取请求头参数

> 简述：请求头（HTTP Header）允许客户端在请求中附加元数据（如认证、缓存等）。在 Spring Boot 控制器中，可通过 `@RequestHeader` 注解读取特定头部，实现认证、追踪等功能。

**知识树**

1. 请求头基本概念

    - Header 以 `key-value` 形式，随每个 HTTP 请求/响应一起发送。
    - 常用于携带元数据（如认证 token、内容类型、缓存控制等）。
    - 可分为标准头部和自定义头部（自定义建议以 `x-` 前缀，如`x-auth-token`）。

2. `@RequestHeader` 注解

    - 用于将 HTTP 请求头的值绑定到控制器方法参数上。支持设置参数名、是否必填、默认值。且大小写不敏感。
    - 参数说明：
        - `required`：是否必填（默认 true），，若缺失则抛 400 错误。
        - `name`：指定请求头名称，大小写不敏感。
        - `defaultValue`：未传递时使用默认值。

3. 调试与实践

    - 推荐仅在需要时读取特定头部，避免滥用增加系统复杂度。
    - Postman 等工具可添加自定义请求头进行测试。

**代码示例**

1. PostMan 测试

    - 在 Postman 中设置 `Header`，添加参数`x-auth-token`，并设置值为 `1234`，并访问`http://localhost:8080/users?sort=name`

2. 提取请求头参数

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @GetMapping
        public List<UserDto> getAllUsers(
                @RequestHeader(name = "x-auth-token") String authToken,
                @RequestParam(required = false, defaultValue = "", name = "sort") String sortBy
        ) {

            System.out.println(authToken);

    		// 省略
        }

    	// 省略
    }
    ```

    - 描述：`@RequestHeader` 读取名为 `x-auth-token` 的请求头，未携带时报错。测试完后去除参数复原代码

## 提取请求体数据

> 简述：请求体用于在 HTTP 请求中传递结构化数据（如 JSON），常见于数据新增、更新等操作。Spring Boot 通过 `@RequestBody` 注解，自动将 JSON 转为 Java 对象，实现前后端的数据直连

**知识树**

1. 请求体的作用与原理

    - 请求体（body）在 HTTP 请求中承载主要数据，适用于 POST、PUT 等写操作。
    - `@RequestBody` 注解可自动将 JSON、XML、表单等内容反序列化为方法参数对象。
    - 要求参数对象字段名与 JSON 字段一致，否则无法正确映射。

2. 使用方式

    - 方法参数加 `@RequestBody`，Spring 自动完成反序列化。
    - 常与 DTO 结合，解耦前后端数据结构。
    - 若省略 `@RequestBody`，参数不会自动绑定 JSON，结果为 null。

3. 序列化与反序列化

    - 反序列化：前端 JSON → Java 对象（服务端参数）
    - 序列化：Java 对象 → JSON（服务端响应）

**代码示例**

1. 接收 JSON 请求体

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	// 省略

        @PostMapping
        public UserDto registerUser(@RequestBody UserDto data) {
            // 实际业务省略，此处直接返回接收到的数据
            return data;
        }
    }
    ```

    - 描述：POST `/users` 自动将请求体中的 JSON 转为 UserDto 实例。后续介绍存储与更新。

2. 前端发送请求示例（JSON）

    ```json
    {
    	"name": "Pang",
    	"email": "ppp_melody@163.com"
    }
    ```

    - 说明：通过 Postman ，设置 POST 请求，在 Body 中提交 JSON 数据，请求地址`http://localhost:8080/users`

## 创建资源&201 状态码

> 简述：RESTful API 中创建资源的标准是通过 POST 请求提交数据，响应时需返回 HTTP 状态码 `201 Created`，并在响应体提供新资源内容，同时通过响应头 `Location` 指定资源的唯一地址。

**知识树**

1. 创建资源流程

    - 客户端通过 POST 请求提交数据（通常为 JSON）。
    - 控制器用 `@PostMapping` 处理请求，`@RequestBody` 接收数据。
    - 利用映射工具（如 MapStruct）将输入 DTO 转为实体，保存到数据库。

2. DTO 明确职责划分

    - 输入 DTO：仅含创建所需字段，不含主键或业务无关数据。
    - 输出 DTO：仅含对外暴露字段，隐藏敏感信息。

3. 标准 REST 响应

    - 状态码：
        - 使用 `201 Created` 表示成功创建新资源。
    - 响应体： q
        - 包含新资源的 DTO，客户端可直接使用。
    - 响应头：
        - `Location` 指明新资源访问地址，供客户端后续使用。
        - 使用 Spring 提供的 `UriComponentsBuilder` 构建资源 URI。
    - 流程：
        - 控制器方法返回值类型为 `ResponseEntity`。
        - 调用 `UriComponentsBuilder` 生成新资源的 URI，作为 `Location` 响应头。
        - 同时将输出 DTO 作为响应体返回，设置状态码、响应头与内容。

4. 最佳实践

    - 严格区分输入、输出 DTO，避免使用 `@JsonIgnore` 控制序列化。
    - 避免暴露敏感数据，保持接口安全与稳定。

**代码示例**

1. 输入 DTO 定义

    ```java
    @Data
    public class RegisterUserRequest {
        private String name;
        private String email;
        private String password;
    }
    ```

    - 描述：仅包含注册必需字段。

2. DTO 映射定义（MapStruct）

    ```java
    @Mapper(componentModel = "spring")
    public interface UserMapper {
        UserDto toDto(User user);// 输出DTO
        User toEntity(RegisterUserRequest request);//输入DTO
    }
    ```

3. 控制器中创建资源并响应 `201`

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

    	// 省略部分

        @GetMapping("/{id}")
        public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(userMapper.toDto(user));
        }

        @PostMapping
        public ResponseEntity<UserDto> registerUser(
                @RequestBody RegisterUserRequest request,
                UriComponentsBuilder uriBuilder
        ) {

            User user = userMapper.toEntity(request);
            userRepository.save(user);

            var userDto = userMapper.toDto(user);
            var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
            return ResponseEntity.created(uri).body(userDto);
        }
    }
    ```

    - 描述：实现创建资源，规范返回 `201 Created` 状态码及响应头 `Location`。

4. 前端发送请求示例（JSON）

    ```json
    {
    	"name": "Pang",
    	"email": "ppp_melody@163.com",
    	"password": "1234"
    }
    ```

    - 说明：通过 Postman ，设置 POST 请求，在 Body 中提交 JSON 数据，请求地址`http://localhost:8080/users`

## 更新资源

> 简述：RESTful API 通常使用 `PUT` 或 `PATCH` 方法更新资源，一般常用 `PUT`。`PUT` 用于整体替换资源，`PATCH` 适用于部分更新。更新操作通常需校验目标资源是否存在，并按需返回响应结果。

**知识树**

1.  更新操作流程（PUT）

    - 客户端发送 `PUT` 请求，携带 JSON 数据。
    - 控制器用 `@PutMapping` 处理，`@PathVariable` 绑定资源主键，`@RequestBody` 接收更新 DTO。
    - 先查找目标资源，未找到返回 404；存在则进行字段更新和保存。

2.  输入 DTO 设计

    - 专为更新操作定义 DTO（如 `UpdateUserRequest`），仅包含可修改字段。
    - 不包含主键、敏感或只读字段，确保接口安全和语义明确。

3.  字段映射与更新（MapStruct）

    - 使用映射工具（如 MapStruct）将更新 DTO 字段批量赋值到已存在实体。
    - `@MappingTarget` 标记目标实体，实现字段覆盖，无需手动赋值。

4.  响应规范

    - 成功更新返回 200 状态和最新资源数据。
    - 资源不存在返回 404 Not Found。

**代码示例**

1.  更新请求 DTO

    ```java
    @Data
    public class UpdateUserRequest {
        public String name;
        public String email;
    }
    ```

    - 描述：仅定义可变更字段，不包含主键、敏感或只读字段

2.  MapStruct 映射方法

    ```java
    @Mapper(componentModel = "spring")
    public interface UserMapper {
        UserDto toDto(User user);
        User toEntity(RegisterUserRequest request);

    	// 映射更新
        void updateUser(UpdateUserRequest request, @MappingTarget User user);
    }
    ```

    - 描述：`updateUser` 方法自动将 DTO 字段赋值到目标实体，`@MappingTarget` 指定更新目标，省略会报错无法启动。

3.  控制器实现 PUT 更新

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	//省略

        @PutMapping("{id}")
        public ResponseEntity<UserDto> updateUser(
                @PathVariable(name = "id") Long id,
                @RequestBody UpdateUserRequest request
        ) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }

            userMapper.updateUser(request, user);
            userRepository.save(user);

            return ResponseEntity.ok(userMapper.toDto(user));
        }
    }
    ```

    - 描述：查找目标 → 映射字段 → 保存 → 返回最新数据。

4.  更新资源 JSON

    ```json
    {
    	"name": "Melody",
    	"email": "ppp_melody@163.com"
    }
    ```

    - 描述：Postman 设置 body，访问 http://localhost:8080/users/6 ，修改之前添加到用户

## 删除资源&204 状态码

> 简述：RESTful API 使用 `DELETE` 方法删除资源。只需指定资源标识，无需请求体，通常采用“逻辑删除”（标记无效）而非物理删除。删除需校验资源是否存在，并规范返回 HTTP 状态码。

**知识树**

1. 删除操作流程

    - 客户端发送 `DELETE` 请求，URL 指定主键，无需请求体。
    - 控制器用 `@DeleteMapping` 处理，`@PathVariable` 绑定 ID。
    - 先查找资源是否存在，未找到返回 404，存在则执行删除

2. 响应状态设计

    - 成功删除返回 204 No Content，无响应体。
    - 未找到目标返回 404 Not Found，表明资源不存在或已删除。

3. 实际开发补充

    - 实际业务中多采用“逻辑删除”（如设置 `isActive` 为 false），避免直接物理删除数据。
    - 需结合具体需求决定删除方式。

**代码示例**

1. 控制器实现 DELETE 删除

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	// 省略

        @DeleteMapping("{id}")
        public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            userRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
    }
    ```

    - 逻辑：查找用户，未找到返回 404，找到则删除并返回 204。

## 动作接口&401 状态码

> 简述：RESTful API 中，业务动作（如修改密码、提交审核）通常不直接归属于资源本身的更新，而应作为“动作”通过 POST 单独建接口。未授权请求需返回 401 状态码，明确鉴权失败。

**知识树**

1. 动作型接口定义

    - 适用场景：涉及业务流程或操作（如修改密码、审核、重置），而非单纯字段更新。
    - 动作接口语义：用 POST 创建一项“动作”请求，区别于 PUT/PATCH 直接资源变更。

2. 流程设计（以修改密码为例）

    - 客户端发起 POST 请求，URL 通常为 `/资源/{id}/action`。
    - 请求体包含业务所需参数（如旧密码、新密码）。
    - 控制器用 `@PostMapping`，`@PathVariable` 绑定资源主键，`@RequestBody` 接收 DTO。
    - 步骤：
        - 查找目标资源，未找到返回 404。
        - 校验业务逻辑（如旧密码是否正确），不符返回 401 Unauthorized。
        - 通过校验则执行操作并保存。

3. 鉴权与响应规范

    - 目标不存在，返回 404 Not Found。
    - 认证或校验失败，返回 401 Unauthorized（鉴权不足）。
    - 操作成功，不返回实体内容，返回 204 No Content。

4. 最佳实践

    - 将业务动作接口与通用 CRUD 分离，保证 API 语义清晰、易扩展。
    - 保持响应状态与 REST 规范一致，提高前后端协作效率与安全性。
    - 当前密码为明文存储，Security 章节介绍解决方案。

**代码示例**

1. 动作请求 DTO（以修改密码为例）

    ```java
    @Data
    public class ChangePasswordRequest {
        private String oldPassword;
        private String newPassword;
    }
    ```

2. 控制器实现动作接口

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	// 省略

        @PostMapping("/{id}/change-password")
        public ResponseEntity<Void> changePassword(
                @PathVariable Long id,
                @RequestBody ChangePasswordRequest request
        ) {
            var user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            if (!user.getPassword().equals(request.getOldPassword())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            user.setPassword(request.getNewPassword());
            userRepository.save(user);

            return ResponseEntity.noContent().build();

        }
    }
    ```

    - 说明：POST `/users/{id}/change-password`，查找用户，校验旧密码，失败返回 401，成功修改密码并返回 204。

3. Postman 测试

    ```json
    {
    	"oldPassword": "password3",
    	"newPassword": "2345"
    }
    ```

    - 描述：Postman 在 body 中添加新旧密码，访问 http://localhost:8080/users/1/change-password 进行测试

## Ex: 产品的 CUD

> **要求**：实现产品的创建、更新和删除接口。创建与更新均使用同一个 ProductDTO，包含 id、name、description、price、categoryId 字段。创建和更新需正确关联分类，校验分类存在性，并返回规范响应。删除产品需校验资源存在，并返回合适状态码。

> **解法**：

1. 创建产品

    - 接收 ProductDTO（无 id 字段）。
    - 校验 categoryId 是否存在，若不存在，为请求格式/参数有误，返回 400 Bad Request。
    - 将 DTO 转为实体，设置分类，保存。
    - 保存后拿到 DTO 的 id 字段，返回 201 Created，响应头带 Location，响应体返回 ProductDTO。

2. 更新产品

    - 路径参数传 id，请求体为 ProductDTO。
    - 校验产品是否存在，若不存在返回 404。
    - 校验 categoryId 是否存在，若不存在返回 400。
    - 用 Mapper 将 DTO 数据复制到实体（忽略 id 字段），设置分类。
    - 保存实体，更新 DTO 的 id 字段，返回 200 OK，响应体为 ProductDTO。

3. 删除产品

    - 路径参数传 id。
    - 校验产品是否存在，若不存在返回 404。
    - 存在则删除，返回 204 No Content。

4. 注意点

    - DTO 中设置的是 categoryId，实体类中是 Category 类，需要先判断 categoryId 是否有效
    - 对象映射时，若 DTO 映射给实体类对象，ID 通过查询参数设置，DTO 没有设置 ID，那么实体类对象的 ID 将被映射为 null，需要在 Mapper 使用 `@JsonIgnore`

**代码**

1. DTO

    ```java
    @Data
    public class ProductDto {
        private Long id;
        private String name;
        private BigDecimal price;
        private String description;
        private Long categoryId;
    }
    ```

2. Mapper

    ```java
    @Mapper(componentModel = "spring")
    public interface ProductMapper {
        @Mapping(target = "categoryId", source = "category.id")
        ProductDto toDto(Product product);

        Product toEntity(ProductDto productDto);

        @Mapping(target = "id", ignore = true)
        void update(ProductDto productDto, @MappingTarget Product product);
    }
    ```

3. Controller

    ```java

    @AllArgsConstructor
    @RestController
    @RequestMapping("/products")
    public class ProductController {
        private final ProductRepository productRepository;
        private final ProductMapper productMapper;
        private final CategoryRepository categoryRepository;

    	// 省略

        @PostMapping
        public ResponseEntity<ProductDto> createProduct(
                @RequestBody ProductDto productDto,
                UriComponentsBuilder uriBuilder) {
            var category = categoryRepository.findById(productDto.getCategoryId()).orElse(null);
            if (category == null) {
                return ResponseEntity.badRequest().build();
            }

            var product = productMapper.toEntity(productDto);
            product.setCategory(category);
            productRepository.save(product);
            productDto.setId(product.getId());

            var uri = uriBuilder.path("/products/{id}").buildAndExpand(productDto.getId()).toUri();

            return ResponseEntity.created(uri).body(productDto);
        }

        @PutMapping("/{id}")
        public ResponseEntity<ProductDto> updateProduct(
                @PathVariable Long id,
                @RequestBody ProductDto productDto) {
            var category = categoryRepository.findById(productDto.getCategoryId()).orElse(null);
            if (category == null) {
                return ResponseEntity.badRequest().build();
            }

            var product = productRepository.findById(id).orElse(null);
            if (product == null) {
                return ResponseEntity.notFound().build();
            }

            productMapper.update(productDto, product);
            product.setCategory(category);
            productRepository.save(product);
            productDto.setId(product.getId());

            return ResponseEntity.ok(productDto);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
            var product = productRepository.findById(id).orElse(null);
            if (product == null) {
                return ResponseEntity.notFound().build();
            }

            productRepository.delete(product);

            return ResponseEntity.noContent().build();
        }
    }

    ```

**示例**

1. 创建操作：POST 访问 http://localhost:8080/products ，返回值 ID 为 13 的，添加成功

    ```json
    {
    	"name": "Test Product",
    	"price": "999",
    	"description": "description",
    	"categoryId": "1"
    }
    ```

2. 更新操作：PUT 访问 http://localhost:8080/products/13 。返回值显示价格修改为 1，更新成功

    ```json
    {
    	"name": "Test Product",
    	"price": "1",
    	"description": "description",
    	"categoryId": "1"
    }
    ```

3. 删除操作：DELETE 访问 http://localhost:8080/products/13 ，查询数据库，再执行 GET 访问 http://localhost:8080/products/13 ，或者直接访问数据库，查询不到数据，删除成功

## REST &常用响应码

**风格设计**

1. 层级明确

    - 采用查询参数区分层级
    - 如`/carts/{catId}/items/{productId}`

**响应码**

1. 200 OK

    - 含义：请求成功，常用于 GET、PUT、DELETE 等操作。响应体通常包含所请求的数据（如资源详情、查询结果等）。
    - 默认行为：未显式设置响应码时，成功响应默认为 200。

2. 201 Created

    - 含义：资源创建成功，常用于 POST 操作。响应体应包含新建资源内容，`Location` 响应头指定新资源的 URL。
    - 返回方式示例：
        ```java
        var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
        return ResponseEntity.created(uri).body(userDto);
        ```
    - 简化方式（不返回 Location）：
        ```java
        return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
        ```

3. 204 No Content

    - 含义：请求成功，但无响应内容。常用于 DELETE 或部分 PUT、POST 操作，仅表示操作已完成。
    - 返回方式示例：

        ```java
        // 简单返回
        return ResponseEntity.noContent().build();
        // 带内容返回
        return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
        ```

4. 400 Bad Request

    - 含义：请求参数有误或格式不正确，服务器无法处理该请求。常见于参数校验失败或格式错误等。
    - 示例：如购物车添加商品时，商品 ID 不存在或格式错误。
    - 返回方式示例：

        ```java
        // 简单返回
        return ResponseEntity.badRequest().build();
        // 带内容返回
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(userDto);
        ```

5. 404 Not Found

    - 含义：请求资源不存在，常用于路径错误或指定资源 ID 不存在等场景。
    - 返回方式示例：
        ```java
        // 简单返回
        return ResponseEntity.notFound().build();
        // 带内容返回
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(userDto);
        ```

6. 401 Unauthorized

    - 含义：未认证。请求缺少有效身份认证（如未登录或 token 失效），需先进行认证。
    - 返回方式示例：
        ```java
        // 简单返回，可带body
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        ```

7. 403 No Permission

# Validating API Requests

## 数据校验基础

> 简述：通过 Jakarta Validation 提供的注解，可对请求数据自动进行格式和内容校验，无需手写校验逻辑，大幅提升 API 输入安全性与开发效率。

**知识树**

1. Jakarta Validation 概念

    - 基于注解的声明式校验，无需手动实现逻辑。
    - 集成于 `spring-boot-starter-validation`，即装即用。
        - 通过 Add Starters，搜索 `Validation` 添加， 引入 `spring-boot-starter-validation` 依赖，自动集成 Jakarta Validation。
    - 支持多注解组合，灵活定制规则与提示信息。

2. 常用校验注解

    - 字符串校验
        - `@NotBlank`：非空且非空白字符（如姓名）。
        - `@NotEmpty`：非空（字符串/集合）。
        - `@Size`：限制长度（min/max）。
        - `@Pattern`：正则表达式校验。
        - `@Email`：校验邮箱格式。
        - `@CreditCardNumber`：校验信用卡格式，适用于电商/支付业务
    - 数值校验
        - `@Min`、`@Max`：取值范围
        - `@Positive`、`@PositiveOrZero`：大于/大于等于 0
        - `@Negative`、`@NegativeOrZero`：小于/小于等于 0
    - 日期/时间校验
        - `@Past`、`@PastOrPresent`：早于当前时间/现在
        - `@Future`、`@FutureOrPresent`：晚于当前时间/现在
    - 通用校验
        - `@NotNull`：字段不为 null。

3. 使用方式

    - 在对应字段上加上常用校验注解后，在接受请求体参数前加上`@Valid`注解

4. 校验触发与响应

    - 请求数据不合规时自动阻断，响应 400 错误，后续介绍提示语意化的错误提示。
    - 适用于所有请求体、表单及参数校验场景。

**代码示例**

1. DTO 字段校验注解

    ```java
    @Data
    public class RegisterUserRequest {
        @NotBlank(message = "Name is required")
        @Size(max = 255, message = "Name must be less than 255 characters")
        private String name;

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        private String email;

        @NotBlank(message = "Password is required")
        @Size(min = 6, max = 25, message = "Password must be between 6 to 25 characters long")
        private String password;
    }
    ```

2. 控制器方法加 `@Valid`

    ```java
    @PostMapping
    public ResponseEntity<UserDto> registerUser(
            @Valid @RequestBody RegisterUserRequest request,
            UriComponentsBuilder uriBuilder
    ) {

        User user = userMapper.toEntity(request);
        userRepository.save(user);

        var userDto = userMapper.toDto(user);
        var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
        return ResponseEntity.created(uri).body(userDto);
    }
    ```

    - 描述：数据不合规时自动返回 400，无需手动校验逻辑。

## 处理校验错误

> 简述：通过异常处理机制，将校验错误自动转换为结构化 JSON 响应，让客户端获得清晰的字段级提示，提升 API 友好性和可用性。

**知识树**

1. 校验错误的触发

    - 控制器参数添加 `@Valid` 后，Spring 在方法执行前自动校验数据。
    - 校验失败时抛出 `MethodArgumentNotValidException`，不会进入原方法体。

2. 异常捕获与处理

    - 可用 `@ExceptionHandler(MethodArgumentNotValidException.class)` 注解自定义处理逻辑。
    - 方法接收异常对象，提取错误信息。

3. 结构化响应设计

    - 建议返回 `Map<字段名, 错误提示>`，便于前端逐字段定位和展示错误。
    - 相比直接返回字符串，结构化响应更规范、可用性更高。

4. 实现建议

    - 可在单个控制器内处理，也可抽取为全局异常处理类（后续介绍）。

**代码示例**

1. 控制器内校验异常处理

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

    	// 省略

        // 返回String，显示杂乱，语义不明
        // @ExceptionHandler(MethodArgumentNotValidException.class)
        // public ResponseEntity<String> handleValidationErrors(MethodArgumentNotValidException exception) {
        //     return ResponseEntity.badRequest().body(exception.getMessage());
        // }

        // 返回键值对
        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<Map<String, String>> handleValidationErrors(
                MethodArgumentNotValidException exception
        ) {
            var errors = new HashMap<String, String>();

            exception.getBindingResult().getFieldErrors().forEach(error -> {
                errors.put(error.getField(), error.getDefaultMessage());
            });

            return ResponseEntity.badRequest().body(errors);
        }
    }
    ```

    - 描述：自动捕获并转化所有字段校验错误，以 JSON 格式返回前端。

2. 响应形式

    ```json
    {
    	"password": "Password is required",
    	"name": "Name is required",
    	"email": "Email is required"
    }
    ```

    - 描述：Postman 使用 POST 访问 http://localhost:8080/users ，设置请求体为`{}`时，得到上面回应

## 全局异常处理

> 简述：全局异常处理将所有控制器的异常集中管理，避免重复代码，实现统一的错误响应格式和更好的可维护性。

**知识树**

1. 设计动机

    - 局部异常处理易造成逻辑分散、冗余，不利于维护和扩展。
    - 通过集中异常处理，可对常见错误（如数据校验、参数非法、权限不足等）统一响应格式和语义。

2. `@ControllerAdvice` 注解

    - 标记全局异常处理类，Spring 自动扫描并拦截所有控制器抛出的异常。
    - 适用于所有被 `@RestController` 或 `@Controller` 标记的控制器。

3. 全局异常处理方法

    - 在全局处理类中，通过 `@ExceptionHandler` 注解针对不同异常类型编写处理方法。
    - 可自定义结构化错误响应，并支持扩展多种异常场景。

4. 实践建议

    - 建议将所有与 API 相关的异常统一处理，保证错误输出结构化、语义清晰，方便前端消费和用户体验。

**代码示例**

1. 定义全局异常处理类

    ```java
    @ControllerAdvice
    public class GlobalExceptionHandler {

        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<Map<String, String>> handleValidationErrors(
                MethodArgumentNotValidException exception
        ) {
            var errors = new HashMap<String, String>();

            exception.getBindingResult().getFieldErrors().forEach(error -> {
                errors.put(error.getField(), error.getDefaultMessage());
            });

            return ResponseEntity.badRequest().body(errors);
        }
    }
    ```

    - 描述：`controller` 包下创建 `GlobalExceptionHandler`，剪切原有校验逻辑存放到该类。当前`GlobalExceptionHandler` 统一处理所有控制器的参数校验异常，与之前控制器内校验异常处理功能相同。

## 自定义校验注解

> 简述：自定义校验注解用于实现内置注解无法覆盖的业务规则，增强数据校验的灵活性和代码的可读性。开发者需分别定义注解本身及对应的校验器实现类。本节以实现一个注解校验字段值必须为小写字母为例，实现过程主要为样板代码（boilerplate code）。

**知识树**

1. 自定义注解原理

    - 可将通用或特殊的业务校验逻辑封装为注解，便于复用和解耦。
    - 注解需配合校验器实现，实现规则自动校验。

2. 注解创建

    - 创建注解类，使用元注解定义作用范围、生命周期及关联校验器：
        - `@Target`：指定注解适用位置（如字段、方法等）。
        - `@Retention`：定义注解在运行时有效。
        - `@Constraint`：关联具体的校验逻辑类。
    - 包含通用属性：
        - `message`：校验失败时的错误提示信息。
        - `groups`、`payload`：可选，用于分组校验和元数据传递。

3. 校验器创建

    - 新建校验器类， - 实现接口`ConstraintValidator<A, T>`，A 为自定义注解，T 为校验目标类型。
    - 必须实现`isValid(value, context)`方法，编写具体校验逻辑（如判断字符串是否为小写）。
    - 校验逻辑建议：空值（null）直接返回 true，避免与 @NotNull 重复。

4. 注解与校验器关联

    - 在自定义注解上使用`@Constraint(validatedBy = Validator.class)`明确指定实现类。

5. 使用

    - 在 DTO 字段上标注自定义注解，可配合 message 属性自定义错误提示。
    - 支持与标准注解混合使用，校验失败时自动提示具体字段错误。

**代码示例**

1. 自定义注解创建

    ```java
    @Target(ElementType.FIELD)
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = LowercaseValidator.class)
    public @interface Lowercase {
        String message() default "must be lowercase";
        Class<?>[] groups() default {};
        Class<? extends Payload>[] payload() default {};
    }
    ```

    - 描述：注解声明基础结构及必要元注解

2. 校验器创建

    ```java
    public class LowercaseValidator implements ConstraintValidator<Lowercase, String> {
        @Override
        public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
            if (value == null) return true;
            return value.equals(value.toLowerCase());
        }
    }
    ```

    - 描述：实现具体业务逻辑，确保字符串为小写，空值视为合法。

3. 在 DTO 字段使用自定义注解

    ```java
    @Data
    public class RegisterUserRequest {
    	// 省略

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        @Lowercase(message = "Email must be in lowercase")
        private String email;

    	// 省略
    }
    ```

    - 说明：DTO 中，在 email 字段上同时应用内置注解和自定义注解，确保邮箱有效并为小写，错误时返回自定义提示。

4. 前端发送请求示例（JSON）

    ```json
    {
    	"name": "Pang",
    	"email": "ppp_melody@163.com",
    	"password": "123456"
    }
    ```

    - 说明：通过 Postman ，设置 POST 请求，在 Body 中提交 JSON 数据，请求地址`http://localhost:8080/users` ，测试时修改邮箱格式。

## 业务规则校验

> 简述：校验注解只是为了避免服务器对无效数据进行查询。业务规则校验是指在输入数据通过基本格式校验后，进一步检查数据是否满足具体的业务需求。这类校验通常涉及数据库查询，不适合用简单的字段注解完成，应单独处理，例如邮箱是否已被注册。

**知识树**

1. 实现业务校验的步骤：

    - 在仓库（Repository）新增特定查询方法，返回结果用于校验。
    - 控制器或服务层调用此方法，校验不通过则返回特定响应（如 400 状态码及详细错误信息）。

2. 常见业务校验场景：

    - 用户邮箱是否唯一
    - 用户名是否存在
    - 商品库存是否充足

**代码示例**

1. 控制器实现业务规则校验逻辑

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @PostMapping
        public ResponseEntity<?> registerUser(
                @Valid @RequestBody RegisterUserRequest request,
                UriComponentsBuilder uriBuilder
        ) {
            if (userRepository.existsByEmail(request.getEmail())) {
                return ResponseEntity.badRequest().body(
                    Map.of("email", "Email is already registered")
                );
            }

            User user = userMapper.toEntity(request);
            userRepository.save(user);

            var userDto = userMapper.toDto(user);
            var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
            return ResponseEntity.created(uri).body(userDto);
        }
    }
    ```

    - 描述：控制器先调用仓库方法校验邮箱唯一性，不通过则返回明确错误信息，通过则继续创建用户。

2. 在仓库定义邮箱存在性校验方法（IDEA 自动生成带 message 方法）

    ```java
    public interface UserRepository extends JpaRepository<User, Long> {
        boolean existsByEmail(@NotBlank(message = "Email is required") @Email(message = "Email must be valid") String email);
    }
    ```

    - 描述：定义通过邮箱检查用户是否存在的方法。

3. 前端发送请求示例（JSON）

    ```json
    {
    	"name": "Pang",
    	"email": "ppp_melody@163.com",
    	"password": "123456"
    }
    ```

    - 说明：通过 Postman ，设置 POST 请求，在 Body 中提交 JSON 数据，请求地址`http://localhost:8080/users`，提示邮箱重复。

# Project 购物车 API

> 结合当前的内容，逐步创建购物车 API

## 创建购物车表结构

> 简述：设计购物车 (`carts`) 与购物车物品 (`cart_items`) 两张数据表，并设置 UUID 主键、默认值、外键关系及唯一性约束。

**知识树**

1. 主键 UUID 存储优化

    - 存储类型
        - MySQL 不直接支持 UUID 类型
        - 推荐 `BINARY(16)` 存储 UUID，提升索引性能，占用空间少。
    - UUID 默认值设置
        - `UUID` 生成函数返回 `VARCHAR`，不能直接用于二进制字段。
        - 通过 `UUID_TO_BIN()` 函数将 `UUID()` 生成的字符串转换为二进制。
        - 注意必须用括号 `()` 包裹表达式，否则 MySQL 报错。
        - 使用方式见下方代码示例

2. 字段默认值定义

    - 定义方式
        - 通过 `DEFAULT` 关键字或内置函数为字段设置默认值。
    - 常见场景
        - UUID 主键默认值
            - `BINARY(16) DEFAULT (UUID_TO_BIN(UUID()))`
        - 日期字段默认当前日期
            - `DATE DEFAULT (CURDATE())`
        - 数字字段默认值
            - `INT DEFAULT 1`

3. 表关系设计

    - 级联删除
        - 当购物车或商品被删除时，购物车条目自动级联删除（`ON DELETE CASCADE`）。
    - 唯一约束
        - 同一购物车内，不能重复添加同一商品。
        - 应对购物车与商品的关联设置唯一约束（`UNIQUE`）。

**代码示例**

1. 创建购物车和购物车物品表结构 (`V2__create_cart_tables.sql`)

    ```sql
    create table carts
    (
        id           binary(16) default (uuid_to_bin(uuid())) not null
            primary key,
        date_created date default (curdate()) not null
    );

    create table cart_items
    (
        id         bigint auto_increment
            primary key,
        cart_id    binary(16)    not null,
        product_id bigint        not null,
        quantity   int default 1 not null,
        constraint cart_items_cart_product_unique
            unique (cart_id, product_id),
        constraint cart_items_carts_id_fk
            foreign key (cart_id) references carts (id)
                on delete cascade,
        constraint cart_items_products_id_fk
            foreign key (product_id) references products (id)
                on delete cascade
    );
    ```

## 创建购物车实体

> 简述：使用数据库优先（Database-first）开发方式，基于已有的数据表结构，快速生成 JPA 实体类，并优化实体代码，保持实体定义的简洁性与明确性。

**知识树**

1.  JPA Buddy 快速生成实体：

    - 选择需要生成实体的数据表（如 `carts` 和 `cart_items`）,勾选创建关系映射。
    - 生成实体过程中明确指定字段类型（如将主键类型从 `String` 改为 `UUID`）。

2.  实体注解修改：

    - 概念：由于采用的是 Data-first，为了让实体类更加简洁，需要去除一部份仅用与 Model-first 的注解，此外还需要更改一部份生成后存在问题的代码
    - 简化：
        - `@Table`：保留表名即可，去除`schema`属性
        - `@Id`：主键标识
        - `@GeneratedValue()`：主键生成策略，仅主键可用，按需调整
            - 设置为`strategy = GenerationType.IDENTITY`时，使用数据库自增策略
            - 设置为`strategy = GenerationType.UUID`时，主键由框架自动生成 UUID
        - `@Size`：如果设置了自动生成，则无需该注解，去除，校验在 DTO 层处理
        - `@NotNull`：如果数据库设置了非空，去除，校验在 DTO 层处理
        - `@Column`：仅保留 `name` 属性用于字段名映射，其余属性如无特殊需求可省略。
            - 如果数据库字段由数据库自动生成（如时间戳/创建日期），可设置 `insertable = false, updatable = false`，让 JPA 在插入和更新时忽略该字段，实际值由数据库自动维护。
        - `@ManyToOne`：根据条件修改或者删除加载策略（存在默认加载策略），optional 属性建议保留
            - `optional = false`表示 JPA 这个多对一关联“必须有值”
        - `@OnDelete`：如数据库已设置外键级联（如 `ON DELETE CASCADE`），则该注解可省略。
        - `@ColumnDefault`：如果数据库已设置默认值，去除

3.  `@Data` 使用注意

    - 不建议在 JPA 实体类（Entity）上直接使用 `@Data`，因为它包含 `@ToString`，可能导致懒加载关联属性时出现性能问题或异常。
    - 推荐仅在 DTO、VO 等简单数据载体类上使用 `@Data`，避免在有复杂关系或业务逻辑的类中使用。

4.  UUID 主键设计

    1. 存储类型优化
        - 推荐使用 `BINARY(16)` 类型存储 UUID，相比 `VARCHAR(36)` 更节省空间，能显著提升索引与查询性能。
    2. MySQL 支持说明
        - MySQL 本身不直接支持 UUID 类型，`UUID()` 函数生成的是 `VARCHAR` 字符串，不能直接插入二进制字段。
    3. 主键生成方式对比
        - 数据库端生成：可通过 `UUID_TO_BIN(UUID())` 将字符串 UUID 转换为二进制，作为字段默认值。注意，表达式需用括号包裹，否则会报错。示例：
            ```sql
            id BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()))
            ```
        - 应用层生成（推荐）：在实体类主键字段上使用 `@GeneratedValue(strategy = GenerationType.UUID)`，由框架（如 Hibernate 6+）自动生成 UUID 并存储为二进制。
    4. 最佳实践建议
        - 生产环境下建议选用一种方式，避免混用，以免主键生成冲突或失效。
        - 更推荐在应用层由框架生成 UUID，即采用 `@GeneratedValue(strategy = GenerationType.UUID)`，便于分布式扩展和业务灵活性；而数据库自动生成仅适用于特定场景。
    5. 由于当前学习需求，暂采用两者并行

5.  导入与代码清理

    - 生成实体后需删除冗余 import，保持代码简洁、结构明晰。

**代码示例**

1. `Cart` 实体优化示例

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "carts")
    public class Cart {
        @Id
        @GeneratedValue(strategy = GenerationType.UUID)
        @Column(name = "id")
        private UUID id;

        @Column(name = "date_created", insertable = false, updatable = false)
        private LocalDate dateCreated;

        @OneToMany(mappedBy = "cart")
        private Set<CartItem> items = new LinkedHashSet<>();
    }
    ```

    - 描述：UUID 主键由框架自动生成，日期由数据库自动填充。

2. `CartItem` 实体优化示例

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "cart_items", schema = "store_api")
    public class CartItem {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @ManyToOne(optional = false)
        @JoinColumn(name = "cart_id")
        private Cart cart;

        @ManyToOne(optional = false)
        @JoinColumn(name = "product_id")
        private Product product;

        @Column(name = "quantity")
        private Integer quantity;
    }
    ```

    - 描述：去除非必要属性，定义明确的关系映射与字段。

## 创建购物车 API

> 简述：实现购物车的创建接口，标准化返回新购物车的结构，包括唯一 ID、购物项和总价。

**API**

1. Request Example

    ```
    POST /carts
    ```

2. Response Example

    ```json
    // 201 CREATED
    // Location header contains the URI of the newly created resource

    {
    	"id": "45d901fc-bc68-4211-b126-6160d6010946",
    	"items": [],
    	"totalPrice": 0
    }
    ```

**知识树**

1. DTO 设计

    - 响应 DTO：`CartDto`，包含 `id: UUID`、`items: List<CartItemDto>`、`totalPrice: BigDecimal`。
    - `items` 字段初始化为空列表，`totalPrice` 初始化为 `BigDecimal.ZERO`，防止返回 null。

2. 接口与响应设计

    - 使用 `POST /carts` 创建购物车。
    - 成功返回 201 状态码，响应体为 `CartDto`，响应头 Location 指向新资源 URI。

3. 控制器实现要点

    - `@RestController` + `@PostMapping("/carts")` 声明接口。
    - 调用 JPA 仓库保存新购物车对象。
    - 使用 Mapper（如 MapStruct）将实体转为 DTO。
    - 返回 `ResponseEntity.created(uri).body(cartDto)`，标准化 REST 响应。

4. 实体到 DTO 的映射

    - 使用 MapStruct 自动映射，保持类型安全。
    - DTO 字段类型需与实体一致，尤其是主键类型。

5. 代码开发流程

    - 推荐自顶向下开发，从 Controller 出发，缺失部分按需新建类或接口。
    - 每一步以响应体结构和接口行为为核心驱动开发。

**代码示例**

1. CartDTO 定义及初始化

    ```java
    @Data
    public class CartDto {
        private UUID id;
        public List<CartItemDto> items = new ArrayList<>();
        private BigDecimal totalPrice = BigDecimal.ZERO;
    }
    ```

    - 描述：初始化 items 和 totalPrice，避免响应体为 null。`CartItemDto` 暂时设置为空类，后面继续介绍。

2. CartMapper 映射接口

    ```java
    @Mapper(componentModel = "spring")
    public interface CartMapper {
        CartDto toDto(Cart cart);
    }
    ```

    - 说明：自动实现实体到 DTO 的转换。

3. 创建购物车 Controller

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

        private final CartRepository cartRepository;
        private final CartMapper cartMapper;

        @PostMapping
        public ResponseEntity<CartDto> createCart(
                UriComponentsBuilder uriBuilder
        ) {
            var cart = new Cart();
            cartRepository.save(cart);

            var cartDto = cartMapper.toDto(cart);
            var uri = uriBuilder.path("/carts/{id}").buildAndExpand(cartDto.getId()).toUri();

            return ResponseEntity.created(uri).body(cartDto);
        }
    }
    ```

    - 描述：保存新购物车并返回 201 状态码，Location 响应头包含新资源 URI。

## 添加商品到购物车

> 简述：实现向购物车中添加商品的接口。要求校验购物车和商品的有效性，支持商品数量累加，并用专用 DTO 返回购物车项的详细信息。强调聚合根（Aggregate Root）设计与领域建模思想。

**API**

1. Request Example

    ```json
    // POST /carts/{catId}/items

    {
    	"productId": 1
    }
    ```

2. Response Example

    ```json
    // 201 CREATED

    {
    	"productId": {
    		"id": 1,
    		"name": "Product 1",
    		"price": 10
    	},
    	"quantity": 5,
    	"totalPrice": 50
    }
    ```

**知识树**

1. DTO 设计

    - 添加商品请求 DTO：`AddItemToCartRequest`，用 `@NotNull` 确保 `productId` 必填。
    - 响应 DTO：`CartItemDto`，包含 `product`（嵌套 `CartProductDto`），`quantity`，`totalPrice`。
    - 商品信息抽象为 `CartProductDto`，避免直接复用 `ProductDto`，保持解耦。

2. 核心业务流程

    1. 校验购物车是否存在，未找到返回 404。
    2. 校验商品是否存在，未找到返回 400。
    3. 检查购物车是否已包含该商品：
        - 若已存在，数量累加。
        - 若不存在，创建新购物车项并加入购物车。
    4. 持久化更新后的购物车（统一由聚合根 Cart 管理）。
    5. 返回添加或更新后的购物车项信息。

3. 领域建模与聚合根

    - 购物车项的生命周期由购物车（Cart）聚合根统一管理。
    - 持久化时通过购物车整体 save，实现级联保存。
    - Cart 与 CartItem 的关系设置为 `CascadeType.MERGE`。

4. 实体与 DTO 映射

    - 在 `CartItem` 实体中实现 `getTotalPrice` 方法，返回总价。
    - 使用 MapStruct 配置映射方法，通过表达式映射总价。
    - 示例`@Mapping(target = "totalPrice", expression = "java(cartItem.getTotalPrice())")`

5. 数据加载与性能优化

    - 由于需要通过 Stream 便利商品进行判断，建议采用 JPQL + `@EntityGraph`，一次性加载购物车、全部商品项及对应商品信息，避免多次数据库查询（此处非 N+1）。
    - 说明：JPA 规范下，只有外键拥有方的 fetch 策略有效，`mappedBy` 侧的 `fetch` 无实际作用，聚合查询需用 `@EntityGraph` 或自定义查询优化。

**代码示例**

1. DTO

    1. 添加商品请求 DTO

        ```java
        @Data
        public class AddItemToCartRequest {
            @NotNull
            private Long productId;
        }
        ```

    2. 购物车单商品 DTO

        ```java
        @Data
        public class CartItemDto {
            private CartProductDto product;
            private int quantity;
            private BigDecimal totalPrice;
        }
        ```

    3. 商品简介 DTO（配合上一 DTO 创建）

        ```java
        @Data
        public class CartItemDto {
            private CartProductDto product;
            private int quantity;
            private BigDecimal totalPrice;
        }
        ```

2. CartItem 实体添加计算总价方法

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "cart_items", schema = "store_api")
    public class CartItem {

    	// 省略

        public BigDecimal getTotalPrice() {
            return product.getPrice().multiply(new BigDecimal(quantity));
        }
    }
    ```

3. CartMapper 映射方法

    ```java
    @Mapper(componentModel = "spring")
    public interface CartMapper {
        CartDto toDto(Cart cart);

        @Mapping(target = "totalPrice", expression = "java(cartItem.getTotalPrice())")
        CartItemDto toDto(CartItem cartItem);
    }
    ```

4. Controller 逻辑

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

    	// 省略

        @PostMapping("/{cartId}/items")
        public ResponseEntity<CartItemDto> addItemToCart(
                @PathVariable(name = "cartId") UUID cartId,
                @RequestBody AddItemToCartRequest request
        ) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);

            if (cart == null) {
                return ResponseEntity.notFound().build();
            }

            var product = productRepository.findById(request.getProductId()).orElse(null);
            if (product == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            var cartItem = cart.getItems()
                    .stream().
                    filter(item -> item.getProduct().getId().equals(product.getId()))
                    .findFirst().orElse(null);

            if (cartItem == null) {
                cartItem = new CartItem();
                cartItem.setProduct(product);
                cartItem.setQuantity(1);
                cartItem.setCart(cart);
                cart.getItems().add(cartItem);
            } else {
                cartItem.setQuantity(cartItem.getQuantity() + 1);
            }

            cartRepository.save(cart);

            var cartItemDto = cartMapper.toDto(cartItem);

            return ResponseEntity.status(HttpStatus.CREATED).body(cartItemDto);
        }
    }
    ```

    - 说明：先校验购物车和商品存在性，重复商品数量累加，否则新建购物车项。全部持久化由 Cart 聚合根统一管理。响应只包含必要的商品信息和总价。

5. CartRepository 优化查询方法

    ```java
    public interface CartRepository extends JpaRepository<Cart, UUID> {
        @EntityGraph(attributePaths = "items.product")
        @Query("SELECT c FROM Cart c WHERE c.id = :cartId")
        Optional<Cart> getCartWithItems(@Param("cartId") UUID cartId);
    }
    ```

    - 说明：通过 @EntityGraph 实现聚合加载，提升接口性能。

6. PostMan 测试

    ```json
    {
    	"productId": "7"
    }
    ```

    - 描述：查询数据库，拷贝购物车 UUID，POST 访问 http://localhost:8080/carts/uuid/items 尝试添加购物车

## 查询购物车详情接口

> 简述：实现根据购物车 ID 查询购物车详情的 API，返回购物车基本信息、所有商品项及总价。重点关注高效加载聚合数据、标准化响应建模、DTO 映射和性能优化。

**API**

1. Request Example

    ```
    POST /carts/{id}
    ```

**知识树**

1. 查询流程与响应结构

    - 根据购物车 ID 查询，返回标准化的 `CartDto`，包含购物车 ID、商品项列表 (`List<CartItemDto>`) 及总价 (`totalPrice`)。
    - 未找到购物车返回 404 Not Found。

2. 总价聚合计算

    - 在 `Cart` 实体实现 `getTotalPrice()`，按购物车内所有商品项实时聚合总价，确保金额准确一致。
    - MapStruct DTO 映射时通过表达式同步映射总价，保持控制层零重复。

3. 数据加载与性能优化

    - 采用 JPQL + `@EntityGraph`，一次性加载购物车、全部商品项及对应商品信息，避免多次数据库查询（此处非 N+1），使用上一节创建的`getCartWithItems`方法。

**代码示例**

1. Controller 层实现

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

    	// 省略

        @GetMapping("/{cartId}")
        public ResponseEntity<CartDto> getCart(@PathVariable UUID cartId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(cartMapper.toDto(cart));
        }
    }
    ```

    - 说明：通过定制查询一次性加载购物车、全部商品项及商品信息，高效响应。

2. Cart 实体添加总价计算方法

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "carts")
    public class Cart {

    	// 省略

        public BigDecimal getTotalPrice() {
            return items.stream()
                    .map(CartItem::getTotalPrice)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
        }
    }
    ```

    - 说明：通过流式 API 聚合所有项的总价。

3. MapStruct 映射接口

    ```java
    @Mapper(componentModel = "spring")
    public interface CartMapper {
        @Mapping(target = "totalPrice", expression = "java(cart.getTotalPrice())")
        CartDto toDto(Cart cart);

    	// 省略
    }
    ```

    - 说明：通过表达式直接映射总价，无需在控制器中计算。

## 更新购物车商品数量

> 简述：实现将购物车内某商品数量更新的 RESTful API。关注资源层级建模、参数校验、错误响应标准化、以及通过聚合根统一变更和持久化。

**API**

1. Request Example

    ```json
    // PUT /carts/{catId}/items/{productId}

    {
    	"quantity": 1
    }
    ```

2. Response Example

    ```json
    // 200

    {
    	"productId": {
    		"id": 1,
    		"name": "Product 1",
    		"price": 10
    	},
    	"quantity": 5,
    	"totalPrice": 50
    }
    ```

**知识树**

1. DTO 设计

    - 请求 DTO：`UpdateCartItemRequest`，包含 `quantity`，并设置合适注解与提示友好型 message
    - 响应 DTO：使用之前创建的`CartItemDto`

2. 核心业务流程

    1. 查询购物车，未找到返回 404，以及标准化错误响应
    2. 在购物车内查找指定商品项，未找到同样返回 404，以及标准化错误响应
    3. 校验通过后，更新对应商品项的数量
    4. 返回最新的购物车项 DTO，包含商品信息、最新数量与总价。

3. 错误处理与响应规范

    - 错误体为 JSON 键值对，将返回值类型改为`ResponseEntity<?>`以便提供灵活返回值（成功时 DTO，失败时 Map）。

**代码示例**

1. 更新请求 DTO

    ```java
    @Data
    public class UpdateCartItemRequest {
        @NotNull(message = "Quantity must be provided.")
        @Min(value = 1, message = "Quantity must be greater than zero.")
        @Max(value = 1000, message = "Quantity must be less than or equal to 100.")
        private Integer quantity;
    }
    ```

    - 说明：用 Integer 便于区分“缺失”与“非法值”，结合注解精确提示错误。

2. Controller 层实现

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

        private final CartRepository cartRepository;
        private final CartMapper cartMapper;

        @PutMapping("/{cartId}/items/{productId}")
        public ResponseEntity<?> updateItem(
                @PathVariable UUID cartId,
                @PathVariable Long productId,
                @Valid @RequestBody UpdateCartItemRequest request
        ) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("error", "cart not found"));
            }

            var cartItem = cart.getItems().stream()
                    .filter(item -> item.getProduct().getId().equals(productId))
                    .findFirst().orElse(null);

            if (cartItem == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("error", "product was not found in the cart"));
            }

            cartItem.setQuantity(request.getQuantity());
            cartRepository.save(cart);

            return ResponseEntity.ok(cartMapper.toDto(cartItem));
        }
    }
    ```

    - 说明：多层次资源查找，严格错误分流，响应体格式标准化。

## 信息专家原则

> 简述：信息专家原则（Information Expert Principle）的核心思想是将某个职责赋予拥有该职责所需信息最多的类。这样可以提升系统内聚性，减少重复代码，让业务逻辑更靠近数据本身。

**知识树**

1. 信息专家原则核心

    - 定义：将操作分配给最有数据和行为能力的对象，由“最懂得如何做”者承担职责。
    - En：we should assign the responsibility to the class that has the necessary data to do the job
    - 优势：提升内聚性、简化控制层、减少业务重复、增强模型表达力。

2. 行为下沉到领域模型

    - 查找商品项
        - 通过 `Cart#getItem(Long productId)` 在购物车内部查找商品项，避免外部冗余遍历。
    - 添加商品逻辑
        - `Cart#addItem(Product product)` 内部判断商品是否已存在，自动处理数量累加或新建
    - 计算总价（之前已添加）
        - `Cart#getTotalPrice()` 聚合计算所有商品项总价。
        - `CartItem#getTotalPrice()` 商品项自行负责总价计算。

3. 贫血模型 vs. 充血模型

    - 贫血模型（Anemic Model）：对象仅有字段和 getter/setter，业务全在服务或控制器，违背面向对象设计。
    - 充血模型（Rich Model）：领域对象既有数据也有核心行为，主导自身状态与逻辑变更，代码健壮且易扩展。

4. 责任分离与协作

    - 控制器：仅作为协调者，负责请求参数校验、调用领域行为、转换响应，不承担核心业务。
    - 领域模型：主导业务状态变更和一致性维护。
    - 服务层：承载领域的复杂业务流程（稍后介绍）。

**代码示例**

1. 在 Cart 实体中添加查找商品项方法，以及添加商品方法

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "carts")
    public class Cart {

    	// 省略

        public CartItem getItem(Long productId) {
            return items.stream()
                    .filter(item -> item.getProduct().getId().equals(productId))
                    .findFirst()
                    .orElse(null);
        }

        public CartItem addItem(Product product) {
            var cartItem = getItem(product.getId());
            if (cartItem != null) {
                cartItem.setQuantity(cartItem.getQuantity() + 1);
            } else {
                cartItem = new CartItem();
                cartItem.setProduct(product);
                cartItem.setQuantity(1);
                cartItem.setCart(this);
                items.add(cartItem);
            }
            return cartItem;
        }
    }
    ```

    - 描述：购物车负责管理和查找其内部的商品项。

2. 简化后的控制器，仅调用领域方法（影响方法 `addItemToCart`、`updateItem`）

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

    	// 省略

        @PostMapping("/{cartId}/items")
        public ResponseEntity<CartItemDto> addItemToCart(
                @PathVariable(name = "cartId") UUID cartId,
                @RequestBody AddItemToCartRequest request
        ) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);

            if (cart == null) {
                return ResponseEntity.notFound().build();
            }

            var product = productRepository.findById(request.getProductId()).orElse(null);
            if (product == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            var cartItem = cart.addItem(product);
            cartRepository.save(cart);

            var cartItemDto = cartMapper.toDto(cartItem);

            return ResponseEntity.status(HttpStatus.CREATED).body(cartItemDto);
        }

    	// 省略

        @PutMapping("/{cartId}/items/{productId}")
        public ResponseEntity<?> updateItem(
                @PathVariable("cartId") UUID cartId,
                @PathVariable("productId") Long productId,
                @Valid @RequestBody UpdateCartItemRequest request
        ) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        Map.of("error", "Cart not found.")
                );
            }

            var cartItem = cart.getItem(productId);
            if (cartItem == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        Map.of("error", "Product was not found in the cart.")
                );
            }

            cartItem.setQuantity(request.getQuantity());
            cartRepository.save(cart);

            return ResponseEntity.ok(cartMapper.toDto(cartItem));
        }
    }
    ```

## 购物车移除商品接口

> 简述：实现从购物车中删除指定商品项的 RESTful API。接口需保证幂等性和健壮性，通过领域模型封装移除逻辑，结合 JPA `orphanRemoval`，自动维护数据库一致性。

**API**

1. Request Example

    ```
    DELETE /carts/{cartId}/items/{productId}
    ```

2. Response Example

    ```
    204
    ```

**知识树**

1. 业务流程设计

    - 查询购物车，若不存在返回 404，并返回标准化错误响应。
    - 在购物车中查找目标商品项，若存在则移除，不存在则直接返回。
    - 仅在商品被移除时持久化购物车，无需额外处理不存在的情况。
    - 返回 204，无响应体，保证幂等性。

2. RESTful 设计与幂等性

    - 通过购物车 ID 和商品 ID 唯一定位目标商品项。
    - 无需请求体，接口操作幂等：无论商品项是否存在，调用多次效果一致且返回成功。

3. 信息专家原则

    - 在 `Cart` 实体中封装 `removeItem(Long productId)` 方法，由实体自身负责管理集合。

4. 数据一致性 与 orphanRemoval

    - 配置`@OneToMany(mappedBy = "cart", orphanRemoval = true)`，保证商品项被从购物车移除且无其他父对象时，自动在数据库中物理删除，防止 `cart_id` 变为 `null` 破坏外键约束。

**代码示例**

1. Cart 实体中实现移除商品方法

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "carts")
    public class Cart {

    	//省略

        @OneToMany(mappedBy = "cart", cascade = CascadeType.MERGE, orphanRemoval = true)
        private Set<CartItem> items = new LinkedHashSet<>();

    	//省略

        public Boolean removeItem(Long productId) {
            var cartItem = getItem(productId);
            if (cartItem != null) {
                items.remove(cartItem);
                cartItem.setCart(null);
                return true;
            }
            return false;
        }
    }
    ```

    - 描述：购物车负责商品项的删除，`orphanRemoval` 自动物理删除孤儿对象，防止 `cart_id` 为 `null`。

2. 控制器实现

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

    	// 省略

        @DeleteMapping("/{cartId}/items/{productId}")
        public ResponseEntity<?> removeItem(
                @PathVariable("cartId") UUID cartId,
                @PathVariable("productId") Long productId
        ) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        Map.of("error", "Cart was not found.")
                );
            }

            if (cart.removeItem(productId)) {
                cartRepository.save(cart);
            }

            return ResponseEntity.noContent().build();
        }
    }
    ```

    - 描述：先查找购物车，不存在则 404。无论商品项是否存在，都直接执行移除，如商品项存在，持久化，如不存在，返回 204，无需响应体。

## 清空购物车接口

> 简述：实现将购物车中的所有商品项一次性移除的接口。该操作不删除购物车本身，仅清空其内容。

**API**

1. Request Example

    ```
    DELETE /carts/{cartId}/items
    ```

2. Response Example

    ```
    204
    ```

**知识树**

1. 功能定位

    - 仅移除购物车内所有商品项，保留购物车实体本身。
    - 避免因误删购物车带来的用户体验问题。

2. 核心业务流程

    - 查询购物车，若不存在返回 404 并。
    - 若存在，移除所有商品项（无论原本是否为空）。
    - 返回 204，无响应体。

3. 领域模型封装与幂等性

    - 在 `Cart` 实体内实现 `clear()` 方法，由实体负责维护集合一致性。
    - 接口幂等：多次清空操作结果一致，始终返回 204。

4. 数据一致性与 JPA 管理

    - 利用 `orphanRemoval`，移除集合元素时自动级联物理删除，保证数据库和实体状态一致。

**代码示例**

1. Cart 实体实现清空方法

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "carts")
    public class Cart {

    	// 省略

        public void clear() {
            items.clear();
        }
    }
    ```

    - 描述：通过断开所有商品项关联并清空集合，JPA 会认为这些元素是“孤儿”，会在事务提交时自动物理删除这些 CartItem 对象。

2. 控制器实现

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

    	// 省略

        @DeleteMapping("/{cartId}/items")
        public ResponseEntity<Void> clearCart(@PathVariable UUID cartId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            cart.clear();

            cartRepository.save(cart);

            return ResponseEntity.noContent().build();
        }
    }
    ```

    - 描述：查找购物车，若不存在返回 404，否则清空商品项并保存，始终返回 204。

## 服务层与职责分离

> 简述：服务层（Service Layer）专注业务逻辑处理，实现控制器与领域模型解耦。所有流程、校验与异常均下沉服务层，控制器仅负责 HTTP 协议与响应组装，保障系统低耦合、易维护。

**知识树**

1. 服务层定位

    - 作为业务逻辑中心，承接所有复杂操作、数据流转和状态变更。
    - 解耦 Controller 与 Entity，避免控制器承担业务细节。

2. 控制器职责简化

    - 只处理 HTTP 参数接收、调用服务、组装响应。
    - 所有数据操作、校验、异常由 Service 负责，Controller 无业务判断逻辑。
    - Controller 仅依赖 Service，不直接操作 Repository、Mapper 或 Entity。

3. 业务异常传递与统一处理

    - Service 层遇到错误通过自定义异常（继承 RuntimeException）上抛，避免返回 null 或混乱的状态码。
    - Controller 通过 `@ExceptionHandler` 统一捕获，转换为规范化 HTTP 响应。
    - 可进一步抽象为全局异常处理器实现所有接口异常响应一致性。

4. URI 组装与响应设计

    - Controller 层负责 uri 组装与响应体封装，Service 层仅返回业务对象/结果，避免与 HTTP 协议耦合，保证各层职责单一、清晰。
    - 对于返回 200 的接口可直接返回数据类型，无需 ResponseEntity 包装。

**代码示例**

1. 修改后的服务层

    ```java
    @Service
    @AllArgsConstructor
    public class CartService {
        private CartRepository cartRepository;
        private CartMapper cartMapper;
        private ProductRepository productRepository;

        public CartDto createCart() {
            var cart = new Cart();
            cartRepository.save(cart);

            return cartMapper.toDto(cart);
        }

        public CartItemDto addToCart(UUID cartId, Long productId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                throw new CartNotFoundException();
            }

            var product = productRepository.findById(productId).orElse(null);
            if (product == null) {
                throw new ProductNotFoundException();
            }

            var cartItem = cart.addItem(product);

            cartRepository.save(cart);

            return cartMapper.toDto(cartItem);
        }

        public CartDto getCart(UUID cartId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                throw new CartNotFoundException();
            }

            return cartMapper.toDto(cart);
        }

        public CartItemDto updateItem(UUID cartId, Long productId, Integer quantity) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                throw new CartNotFoundException();
            }

            var cartItem = cart.getItem(productId);
            if (cartItem == null) {
                throw new ProductNotFoundException();
            }

            cartItem.setQuantity(quantity);
            cartRepository.save(cart);

            return cartMapper.toDto(cartItem);
        }

        public void removeItem(UUID cartId, Long productId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                throw new CartNotFoundException();
            }

            if (cart.removeItem(productId)) {
                cartRepository.save(cart);
            }
        }

        public void clearCart(UUID cartId) {
            var cart = cartRepository.getCartWithItems(cartId).orElse(null);
            if (cart == null) {
                throw new CartNotFoundException();
            }

            cart.clear();

            cartRepository.save(cart);
        }
    }
    ```

    - 描述：所有业务逻辑下沉服务层，异常交由统一机制处理。

2. 修改后的控制层（含统一异常处理）

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    public class CartController {

        private final CartService cartService;

        @PostMapping
        public ResponseEntity<CartDto> createCart(
                UriComponentsBuilder uriBuilder
        ) {
            var cartDto = cartService.createCart();
            var uri = uriBuilder.path("/cart/{id}").buildAndExpand(cartDto.getId()).toUri();

            return ResponseEntity.created(uri).body(cartDto);
        }

        @PostMapping("/{cartId}/items")
        public ResponseEntity<CartItemDto> addItemToCart(
                @PathVariable(name = "cartId") UUID cartId,
                @RequestBody AddItemToCartRequest request
        ) {
            var cartItemDto = cartService.addToCart(cartId, request.getProductId());

            return ResponseEntity.status(HttpStatus.CREATED).body(cartItemDto);
        }

        @GetMapping("/{cartId}")
        public CartDto getCart(@PathVariable UUID cartId) {
            return cartService.getCart(cartId);
        }

        @PutMapping("/{cartId}/items/{productId}")
        public CartItemDto updateItem(
                @PathVariable("cartId") UUID cartId,
                @PathVariable("productId") Long productId,
                @Valid @RequestBody UpdateCartItemRequest request
        ) {
            return cartService.updateItem(cartId, productId, request.getQuantity());
        }

        @DeleteMapping("/{cartId}/items/{productId}")
        public ResponseEntity<?> removeItem(
                @PathVariable("cartId") UUID cartId,
                @PathVariable("productId") Long productId
        ) {
            cartService.removeItem(cartId, productId);

            return ResponseEntity.noContent().build();
        }

        @DeleteMapping("/{cartId}/items")
        public ResponseEntity<Void> clearCart(@PathVariable UUID cartId) {
            cartService.clearCart(cartId);

            return ResponseEntity.noContent().build();
        }

        @ExceptionHandler(CartNotFoundException.class)
        public ResponseEntity<Map<String, String>> handleCartNotFound() {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Cart not found."));
        }

        @ExceptionHandler(ProductNotFoundException.class)
        public ResponseEntity<Map<String, String>> handleProductNotFound() {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Product not found."));
        }
    }
    ```

    - 描述：控制器极简，只聚焦请求/响应和响应码，所有业务处理全部交由 Service 层，异常用统一机制转为标准响应。

3. 异常类（exceptions 包内）

    - `CartNotFoundException`

    ```java
    public class CartNotFoundException extends RuntimeException {
    }
    ```

    - ProductNotFoundException

    ```java
    public class ProductNotFoundException extends RuntimeException {
    }
    ```

## Swagger

> 简述：Swagger 是自动生成 REST API 交互式文档的工具，能实时展示所有接口，便于前后端协作、测试。

**知识树**

1. Swagger 基本概念

    - 网站：
        - https://springdoc.org
    - Swagger（OpenAPI）用于自动生成 REST API 的交互式文档页面，便于开发、测试与接口对接。
    - 提供端点一览、参数/响应说明、在线调试（如 Swagger UI）。

2. 集成步骤

    - 引入依赖：在 `pom.xml` 添加 Springdoc OpenAPI（官网 Getting Started 章节查看）
    - 启动项目后访问 `/swagger-ui/index.html`（具体根据官网）获取文档页面。
    - 所有被 `@RestController` 注解的接口将自动被收录展示。

3. 文档页面使用

    - 按 Controller 分组展示所有接口。
    - 支持点选查看参数说明、请求体、响应体示例，并可在线发起调试请求。

4. 定制与扩展

    - `@Tag` 注解可为 Controller 自定义分组名和描述（如将 CartController 分组名设为 “Carts”）。
    - `@Operation` 注解可为方法添加摘要、详细说明。
    - `@Parameter` 注解用于描述参数用途、限制等。
    - 可排除特定接口，修改页面风格，嵌入自定义说明，实现企业级文档标准化。

**代码示例**

1. 引入 Swagger 依赖（pom.xml）

    ```xml
    <dependency>
         <groupId>org.springdoc</groupId>
         <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
         <version>2.8.8</version>
    </dependency>
    ```

    - 描述：引入官方 Springdoc OpenAPI UI 依赖，无需手动配置，开箱即用。

2. Controller 分组与接口描述定制

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/carts")
    @Tag(name = "Carts")
    public class CartController {

    	// 省略

        @PostMapping("/{cartId}/items")
        @Operation(summary = "Add a product to the cart")
        public ResponseEntity<CartItemDto> addItemToCart(
                @Parameter(description = "The ID of the cart")
                @PathVariable(name = "cartId") UUID cartId,
                @RequestBody AddItemToCartRequest request
        ) {
            var cartItemDto = cartService.addToCart(cartId, request.getProductId());

            return ResponseEntity.status(HttpStatus.CREATED).body(cartItemDto);
        }

    	// 省略

    }
    ```

    - 描述：`@Tag` 控制分组显示名与描述，`@Operation` 为接口提供摘要说明，`@Parameter` 注解参数细节。

# Security

## 认证方式&JWT

> 简述：常见用户认证模式包括基于会话（Session-based）和基于令牌（Token-based，如 JWT）。Session 依赖服务端状态，而 Token 自包含用户身份，更适合 REST API 和分布式架构。

**知识树**

**知识树**

1. 基于会话认证（Session-based Authentication）

    - 流程
        - 用户登录后，服务端生成 Session，并将 Session ID 存入 Cookie 返回给客户端。
        - 客户端后续请求自动携带 Cookie，服务端通过 Session ID 识别用户。
    - 特点
        - 服务器端有状态，需维护所有用户会话。
        - 内存消耗随用户数增长，扩展性较差。

2. 基于令牌认证（Token-based Authentication）

    - 流程
        - 用户登录后，服务端生成 Token（如 JWT），返回给客户端。
        - Token 自包含用户信息，客户端每次请求都在 Header 中携带 Token。
        - 服务端仅通过 Token 验证用户身份，无需维护会话状态。
    - 特点
        - 服务端无状态，天然适用于 REST API、分布式和前后端分离架构。

3. JWT（JSON Web Token）原理与结构

    - 结构
        - Header：指定签名算法与类型（如 HS256/JWT）。
        - Payload：存储用户公开信息（如用户 ID、角色、签发时间），不应包含敏感数据。
        - Signature：服务端用 secret 和算法对 Header+Payload 签名，防止篡改。
    - 验证流程
        - 服务端解析 Token，重算签名并对比，确保未被伪造。
        - 客户端每次请求都带上 JWT，服务端仅验签与解析，无需存储任何会话状态。

4. JWT 生成与验证示例

    - 生成

        ```java
        // 编码 header 和 payload
        String base64Header = base64UrlEncode(headerJson);
        String base64Payload = base64UrlEncode(payloadJson);
        String signature = HMAC_SHA256(secret, base64Header + "." + base64Payload);
        String jwt = base64Header + "." + base64Payload + "." + signature;
        ```

    - 验证

        ```java
        // 拆分 JWT
        String[] parts = jwt.split("\\.");
        // 重算签名并比对
        String expectedSignature = HMAC_SHA256(secret, parts[0] + "." + parts[1]);
        if (expectedSignature.equals(parts[2])) {
            // 验证通过
        }
        ```

## Spring Security 依赖

> 简述：Spring Security 是 Spring 生态下的主流安全框架，提供认证和授权机制。只需添加依赖即可为所有 API 加入默认登录保护，无需手写配置即可拦截请求，保障系统安全。

**知识树**

1. Spring Security 依赖添加

    - 方式
        - 在项目 `pom.xml` 引入 `spring-boot-starter-security` 依赖。
        - 通过 Add Starters，搜索 security 即可查找到
    - 作用
        - 应用启动后自动启用所有端点保护，无需手动编写配置类。

2. 默认登录机制

    - 默认拦截所有 HTTP 请求，自动跳转到内置登录页。
    - 默认用户名为 `user`，密码为随机生成，启动日志打印在控制台。

3. 实践与扩展

    - 默认所有接口均需登录，实际项目常需开放部分接口（如商品浏览、购物车等），稍后介绍

## 配置与开放接口

> 简述：通过编写自定义配置类，可以灵活控制 API 的访问权限，实现对特定接口的开放或保护。

**知识树**

1. 安全配置核心

    - 在 `config` 包中创建 `SecurityConfig` 类。
    - 用 `@Configuration` 和 `@EnableWebSecurity` 标记为安全配置入口。
    - 通过定义 `SecurityFilterChain` Bean，集中配置所有安全策略。

2. RESTful 场景下的安全最佳实践

    - 无状态：使用 `SessionCreationPolicy.STATELESS`，每个请求独立，无需服务端保存登录状态。
    - 关闭 CSRF：REST API 通常用 Token 鉴权，无需防护 CSRF（主要针对基于 Cookie 的认证场景）。
    - 显式声明开放与保护的路由：

        - 公开路由如 `/carts/**`（购物车）、`POST /users`（用户注册）。
        - 其余接口默认需要认证。

3. 路由权限粒度控制

    - 可按 HTTP 方法、路径模式进行细粒度授权。
    - 支持 `.permitAll()`（允许匿名访问）、`.authenticated()`（需要认证）。

**知识树**

1. Spring Security 配置示例

    ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .sessionManagement(c ->
                            c.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(c -> c
                            .requestMatchers("/carts/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/users").permitAll()
                            .anyRequest().authenticated()
                    );

            return http.build();
        }
    }
    ```

    - 说明：此配置关闭 Session 和 CSRF，仅对指定接口开放匿名访问，其他接口需登录或携带 Token。

## 密码加密与安全存储

> 简述：安全系统绝不能以明文存储用户密码，应采用哈希算法（如 BCrypt）将密码加密存储，实现不可逆防护，保障用户隐私和数据安全。

**知识树**

1. 密码哈希（Hashing）原理

    - 哈希是单向加密，将原密码变为固定长度的随机字符，无法还原为明文。

2. 密码存储与验证流程

    - 注册时：先对明文密码 `encode`，保存哈希值到数据库。
    - 登录时：将用户输入密码 `encode` 后与数据库中哈希值比对，不存明文。

3. Spring Security 中密码加密实现

    1. 将 `PasswordEncoder` 接口实现通过`@Bean` 注入容器，全局自动注入。推荐使用主流的 `BCryptPasswordEncoder`，生产环境使用。
    2. 在需要处调用 `PasswordEncoder` 实现，处理加密操作

4. 代码最佳实践

    - 任何涉及密码处理的场景（注册、修改密码），都必须显式加密。
    - 用户表中永远只保存加密后的密码，不存明文，不暴露原始密码。

**代码示例**

1. 注册 BCryptPasswordEncoder Bean

    ```java
    @Configuration
    @EnableWebSecurity// 仅配置密码时非必须
    public class SecurityConfig {
        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

    // 省略

    }
    ```

    - 说明：全局提供 BCrypt 加密器，供所有组件依赖注入。

2. 注册用户时加密密码

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {

        private final PasswordEncoder passwordEncoder;

    	// 省略

        @PostMapping
        public ResponseEntity<?> registerUser(
                @Valid @RequestBody RegisterUserRequest request,
                UriComponentsBuilder uriBuilder
        ) {

            if (userRepository.existsByEmail(request.getEmail())) {
                return ResponseEntity.badRequest().body(
                        Map.of("email", "Email is already registered.")
                );
            }

            User user = userMapper.toEntity(request);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);

            var userDto = userMapper.toDto(user);
            var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
            return ResponseEntity.created(uri).body(userDto);
        }

    	// 省略

    }
    ```

    - 说明：保存前加密原始密码，数据库永远不留明文。

3. PostMan 测试

    ```json
    {
    	"name": "Pang",
    	"email": "pang@example.com",
    	"password": "123456"
    }
    ```

    - 描述：删除之前创建的用户，发送 POST 请求访问 http://localhost:8080/users 注册用户，访问数据库，查看 hash 加密的密码，如`$2a$10$qOOmP77r3xM4WY2HaJHGq`

## Ex: 用户登录接口实现

> 简述：实现基础用户登录接口，接收邮箱和密码，校验用户身份，正确返回 200，错误返回 401。本节关注身份认证流程及响应规范，暂不涉及令牌生成。

**API**

1. Request Example

    ```
    POST /auth/login
    {
        "email": "user1@domain.com",
        "password": "12345"
    }
    ```

**知识树**

1. 登录 API 设计

    - POST `/auth/login`，请求体包含邮箱和密码。
    - 认证通过返回 200，无内容；失败统一返回 401。

2. 参数校验与 DTO 设计

    - `LoginRequest` DTO：包含 `email` 和 `password` 字段。
    - 使用 `@NotBlank`、`@Email` 注解保证输入有效，避免空值和格式不符。

3. 用户身份校验

    - 通过 `UserRepository.findByEmail(email)` 查询用户。
    - 使用 `PasswordEncoder.matches(明文, 密文)` 校验密码，防止明文对比。
    - 未找到用户或密码不匹配，均返回 401，不泄露具体原因。

4. 安全配置与接口开放

    - 在 `SecurityConfig` 配置 `/auth/login` 为公开接口，支持未登录用户访问。

5. 实践与注意点

    - 控制器临时承担部分业务逻辑，实际生产应下沉至 Service 层。
    - 认证功能建议最终由 Spring Security 统一管理，后续会介绍如何使用。

**代码示例**

1. 登录请求 DTO

    ```java
    @Data
    public class LoginRequest {
        @NotBlank(message = "Email is required")
        @Email
        private String email;

        @NotBlank(message = "Password is required")
        private String password;
    }
    ```

2. 登录 Controller 实现

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;

        @PostMapping("/login")
        public ResponseEntity<Void> login(
                @Valid @RequestBody LoginRequest request) {
            var user = userRepository.findByEmail(request.getEmail()).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            return ResponseEntity.ok().build();
        }
    }
    ```

    - 说明：查询不到用户或密码错误都统一返回 401，避免信息泄露。

3. 仓库接口添加对应方法

    ```java
    public interface UserRepository extends JpaRepository<User, Long> {
        boolean existsByEmail(@NotBlank(message = "Email is required") @Email(message = "Email must be valid") String email);

        Optional<User> findByEmail(String email);
    }
    ```

4. 安全配置添加登录接口开放

    ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {

    	// 省略

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .sessionManagement(c ->
                            c.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(c -> c
                            .requestMatchers("/carts/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/users").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                            .anyRequest().authenticated()
                    );

            return http.build();
        }
    }
    ```

    - 说明：允许未登录用户调用 `/auth/login` 接口。

5. Postman 测试

    ```json
    {
    	"email": "pang@example.com",
    	"password": "123456"
    }
    ```

    - 描述：post 访问 http://localhost:8080/auth/login

## AuthenticationManager

> 简述：使用 Spring Security 提供的标准认证组件（`AuthenticationManager`、`AuthenticationProvider`），能实现用户身份认证流程，由框架统一处理用户数据查询与密码验证，避免手写冗余逻辑。

**知识树**

1. 认证流程概览（当一个（登录）认证请求发生时，Spring Security 内部大致会经历以下步骤）

    1. 接收凭证与发起认证：

        - 通常，在一个负责处理登录请求的 Controller 中，会注入 `AuthenticationManager`。
        - Controller 根据用户提交的用户名和密码，创建一个 `Authentication` 对象（常为 `UsernamePasswordAuthenticationToken`）。
        - 随后，调用 `authenticationManager.authenticate(authenticationToken)` 方法，正式发起认证请求。

    2. 认证管理器委派：

        - `AuthenticationManager` 的具体实现（通常是 `ProviderManager`）接收到这个 `Authentication` 对象。
        - `ProviderManager` 内部维护着一个 `AuthenticationProvider` 列表。这些 `Provider` 是在应用启动时配置并被 Spring Security 收集起来的。

    3. 认证提供者尝试认证：

        - `ProviderManager` 会遍历这个 `AuthenticationProvider` 列表。
        - 它会询问每个 `AuthenticationProvider` 是否支持处理当前传入的 `Authentication` 对象类型。
        - 如果某个 `AuthenticationProvider` 表示支持，则 `ProviderManager` 会调用该 `Provider` 的 `authenticate()` 方法。

    4. 执行具体认证逻辑：

        - 被选中的 `AuthenticationProvider` 执行具体的认证逻辑。
        - 这通常包括：
            - 使用其配置的 `UserDetailsService` 根据用户名加载用户信息。
            - 使用其配置的 `PasswordEncoder` 将用户提交的密码与存储的密码进行比较。
        - 如果凭证有效，`AuthenticationProvider` 返回一个填充了用户信息（包括权限）并标记为“已认证”的 `Authentication` 对象。
        - 如果凭证无效，则抛出相应的认证异常。

    5. 返回认证结果：

        - `ProviderManager` 将 `AuthenticationProvider` 的认证结果（成功或异常）返回给最初调用 `authenticationManager.authenticate()` 的地方（即 Controller）。

2. AuthenticationManager

    - 概念
        - `AuthenticationManager` 是 Spring Security 中负责**统一调度认证流程**的核心接口，是整个认证体系的入口。
    - 职责与机制
        1. 认证请求分发
            - 接收外部传入的 `Authentication` 对象（如用户名密码、Token 等），调用其 `authenticate()` 方法启动认证。
        2. 认证链管理
            - 典型实现 `ProviderManager` 持有一个 `AuthenticationProvider` 列表，按顺序逐个调用 `supports()` 判断和 `authenticate()` 执行认证，直至有一个 Provider 成功认证或全部失败。
        3. 结果与异常传递
            - 成功：返回已认证的 `Authentication`（包含权限、身份等上下文信息）。
            - 失败：抛出认证相关异常（如 `AuthenticationException`）。
        4. 灵活注入
            - 通常通过 Spring 容器自动配置，可直接注入到 Controller 或 Service 中统一发起认证请求。
    - 核心优势
        1. 统一入口、简化调用
            - 控制器或服务层仅需依赖 `AuthenticationManager`，无需感知底层认证细节，解耦业务与认证实现。
        2. 策略链支持、可扩展性强
            - 支持多种认证机制并存（如表单、JWT、LDAP），通过 Provider 链灵活扩展和定制。
        3. 全局一致性与安全
            - 所有认证逻辑集中管理，易于全局控制、统一异常处理和日志审计。

3. AuthenticationProvider

    - 概念
        - `AuthenticationProvider` 是 Spring Security 中专门负责**执行认证逻辑**的核心接口。
    - 职责与机制
        1. 认证执行者
            - 接收一个包含用户凭证的 `Authentication` 对象（如 `UsernamePasswordAuthenticationToken`），校验其合法性。
        2. 类型判断
            - 通过 `supports(Class<?> authentication)` 声明自身能处理的认证类型，实现多认证机制并行。
        3. 认证结果返回
            - 认证通过：返回已认证且包含用户权限的 `Authentication` 对象。
            - 认证失败：抛出 `AuthenticationException`（如 `BadCredentialsException`）。
        4. 可扩展性
            - 支持自定义实现，可集成数据库、LDAP、OAuth2、JWT、短信验证码等多种认证来源。
        5. 内置实现
            - 最常用为 `DaoAuthenticationProvider`，结合 `UserDetailsService` 和 `PasswordEncoder` 完成用户信息加载与密码校验。
    - 自动收集与统一管理
        1. 启动时收集
            - Spring Security 启动时，会自动扫描并收集所有注册到 Spring 容器的 `AuthenticationProvider`，形成一个 Provider 列表。
        2. 统一调度
            - 这些 Provider 被 `ProviderManager` 统一管理。在认证请求时，`ProviderManager` 会根据 `supports()` 判断，自动选用合适的 Provider 处理认证流程。
    - 核心优势
        1. 多认证机制并行
            - 可同时配置多个 `AuthenticationProvider`，如表单登录、JWT、LDAP、OAuth2 等，`ProviderManager` 会自动根据 `Authentication` 类型路由到对应 Provider。
        2. 易于扩展
            - 新认证方式只需实现并注册新的 Provider，无需侵入原有认证逻辑，扩展灵活。
        3. 职责分离、模块化
            - 各认证方式独立实现，逻辑清晰，便于维护与单元测试。

4. PasswordEncoder

    - 概念
      Spring Security 用于密码加密与校验的核心接口。
    - 职责与机制
        1. 密码加密
            - 提供如 `encode(rawPassword)` 方法，将明文密码转为不可逆的哈希值，数据库只存哈希，防止泄露。
        2. 密码校验
            - 提供 `matches(rawPassword, encodedPassword)`，将用户输入的明文与存储的密文比对，确保安全认证。
        3. 主流实现
            - 推荐 `BCryptPasswordEncoder`，具备加盐机制与强抗破解能力。
        4. 自动注入与统一使用
            - 通过在配置类中注册 `@Bean`，即可全局自动注入，无需手动传递。
    - 核心优势
        - 标准化密码加密与校验，避免明文存储，提升安全性。
        - 支持多算法切换，便于升级和兼容历史数据。

5. UserDetailsService

    - 概念
      用户信息加载的标准接口，是自定义用户认证的入口。
    - 职责与机制
        1. 用户查找
            - 定义 `loadUserByUsername(String username)` 方法，通常用邮箱或用户名查找用户。
        2. 集成业务模型
            - 通常结合 Repository 查询数据库，将业务用户对象包装为 Spring Security 的 `UserDetails` 实例（含用户名、加密密码、权限等）。
        3. 自动装配与认证集成
            - 注入到 `DaoAuthenticationProvider` 中，配合 PasswordEncoder 完成认证流程。
    - 核心优势
        - 彻底解耦用户表结构与认证框架，支持任意数据来源（数据库、LDAP、远程服务等）。
        - 便于扩展业务属性，如账户状态、角色权限等。

6. 全局异常处理

    - 场景说明
        - Spring Security 默认认证失败（如账号或密码错误）时返回 403 Forbidden。若希望所有认证失败统一返回 401 Unauthorized，可自定义异常处理。
    - 实现方式
        - 在控制器中添加 `@ExceptionHandler(BadCredentialsException.class)`，统一捕获认证失败异常，并返回 401 状态码，隐藏具体失败原因，提升安全性。

**代码示例**

1. 自定义 UserDetailsService

    ```java
    @AllArgsConstructor
    @Service
    public class UserService implements UserDetailsService {

        private final UserRepository userRepository;

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            var user = userRepository.findByEmail(email).orElseThrow(
                    () -> new UsernameNotFoundException("User not found"));

            return new User(
                    user.getEmail(),
                    user.getPassword(),
                    Collections.emptyList()
            );
        }
    }
    ```

    - 描述：通过邮箱查找用户，未找到抛异常，返回 Spring Security 用户对象。

2. 配置 DaoAuthenticationProvider 和 AuthenticationManager

    ```java
    @Configuration
    @EnableWebSecurity
    @AllArgsConstructor
    public class SecurityConfig {

        private final UserDetailsService userDetailsService;

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

        // 将 AuthenticationProvider（DaoAuthenticationProvider） 注入容器
        @Bean
        public AuthenticationProvider authenticationProvider() {
            var provider = new DaoAuthenticationProvider();
            provider.setPasswordEncoder(passwordEncoder());
            provider.setUserDetailsService(userDetailsService);
            return provider;
        }

        // 将 AuthenticationManager 注入容器，AuthenticationConfiguration 为自动注入
        @Bean
        public AuthenticationManager authenticationManager(
                AuthenticationConfiguration config) throws Exception {
            return config.getAuthenticationManager();
        }

    	// 省略

    }
    ```

    - 描述：注册自定义 Provider 和全局认证管理器。

3. 控制器中调用认证

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;

        @PostMapping("/login")
        public ResponseEntity<Void> login(
                @Valid @RequestBody LoginRequest request) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            return ResponseEntity.ok().build();
        }

        @ExceptionHandler(BadCredentialsException.class)
        public ResponseEntity<Void> handleBadCredentialsException() {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    ```

    - 描述：认证失败由全局异常捕获，控制器逻辑极简。

## 集成 JWT

> 简述：通过集成 JWT（JSON Web Token），实现无状态认证，登录成功后返回包含用户身份的安全令牌。

**知识树**

1. 实现步骤

    - 添加 JWT 相关依赖（`jjwt-impl`、`jjwt-api`、`jjwt-jackson`）。
        - `jjwt-impl`：实现库，处理签名与解析。
        - `jjwt-api`：标准接口。
        - `jjwt-jackson`：支持 JSON 序列化与反序列化。
    - 定义 JWT 返回 DTO，仅包含 Token 字符串字段。
    - 编写 JwtService，负责生成签名令牌。
    - 在认证 Controller 中注入 JwtService，登录成功后生成并返回 JWT。

2. JWT 依赖引入方式

    - 在 `pom.xml` 中添加以下三个依赖项（见代码示例）：
        - `io.jsonwebtoken:jjwt-api`
        - `io.jsonwebtoken:jjwt-impl`
        - `io.jsonwebtoken:jjwt-jackson`
    - 版本号建议使用最新版本：在 `<version>` 标签中按 `Ctrl + Space` 可自动弹出可选版本列表。

3. 密钥安全（下节介绍）

    - JJWT 推荐密钥长度不少于 256bit。
    - 密钥应外部安全存储，避免硬编码泄露。
    - 当前由于密匙设置问题（过短）无法访问，下节介绍

**代码示例**

1. 引入依赖

    ```xml
    <dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-impl</artifactId>
    		<version>0.12.6</version>
    </dependency>
    <dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-jackson</artifactId>
    		<version>0.12.5</version>
    </dependency>
    <dependency>
    		<groupId>io.jsonwebtoken</groupId>
    		<artifactId>jjwt-api</artifactId>
    		<version>0.12.3</version>
    </dependency>
    ```

2. 创建 JWT 返回 Dto

    ```java
    @Data
    @AllArgsConstructor
    public class JwtResponse {
        private String token;
    }
    ```

3. 创建生成 JWTService 类，实现生成 Token 方法

    ```java
    @Service
    public class JwtService {
        public String generateToken(String email) {
            final long tokenExpiration = 86400; // 1 day

            return Jwts.builder()
                    .subject(email)
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(Keys.hmacShaKeyFor("secret".getBytes()))
                    .compact();
        }
    }
    ```

4. 返回令牌

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;

        @PostMapping("/login")
        public ResponseEntity<JwtResponse> login(
                @Valid @RequestBody LoginRequest request) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            var token = jwtService.generateToken(request.getEmail());

            return ResponseEntity.ok(new JwtResponse(token));
        }

        @ExceptionHandler(BadCredentialsException.class)
        public ResponseEntity<Void> handleBadCredentialsException() {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    ```

    - 描述：注入 JwtService，使用用户信息生成 token 令牌返回，并将返回值修改为`ResponseEntity<JwtResponse>`

## JWT 密钥安全

> 简述：JWT 签名密钥（secret）是系统安全的核心，应严格外部化管理，避免硬编码，确保密钥足够强度并正确配置。

**知识树**

1. 密钥管理原则

    - 密钥必须脱离源码，避免暴露在版本控制中。
    - 推荐使用不短于 256-bit 的密钥。
    - 所有敏感密钥应通过环境变量、配置文件等外部方式注入。

2. 配置外部化工具：Spring Dotenv

    - 说明：支持在 `application.yaml` 中通过 `${}` 读取 `.env` 文件的配置项。
    - 依赖库：[spring-dotenv](https://github.com/paulschwarz/spring-dotenv)
    - 说明：仅限于中小型项目，大型企业有其他实现方式

3. 密钥管理方式（基于 `.env`）

    - 引入 `spring-dotenv` 依赖以支持 `.env` 文件加载。
    - 将密钥配置存放在 `.env` 文件中，并通过 `.gitignore` 排除上传至版本控制。
    - 在 `application.yaml` 中定义密钥字段，引用 `.env` 中的值作为默认值。
    - 在需要使用密钥的地方（如 `AuthController`），通过 `@Value` 注解注入配置，间接读取 `.env` 中的密钥。

4. 团队协作实践

    - 提供 `.env.example` 文件，列出必填字段但不包含敏感值，保障项目可配置性与安全性。

5. 密钥生成建议

    - 使用 OpenSSL 或安全随机工具生成高强度密钥。
        - 示例：`openssl rand -base64 64`
        - 其他工具：[https://generate-random.org/](https://generate-random.org/)
    - 弱密钥将触发 `WeakKeyException`，必须确保合规长度与安全性。

**代码示例**

1. 引入 spring detonv 依赖

    ```xml
    <dependency>
    		<groupId>me.paulschwarz</groupId>
    		<artifactId>spring-dotenv</artifactId>
    		<version>4.0.0</version>
    </dependency>
    ```

2. 外部文件配置密匙（本地开发/部署，不提交仓库）

    ```
    JWT_SECRET=your-long-random-256bit-secret-key-here
    ```

    - 说明：只保存于本地，协作时使用 .env.example 说明需设置变量。

3. application.yaml 引用环境变量

    ```yaml
    spring:
      jwt:
        secret: ${JWT_SECRET}
    ```

4. 读取配置的 JwtService 实现

    ```java
    @Service
    public class JwtService {
        @Value("${spring.jwt.secret}")
        private String secretKey;

        public String generateToken(String email) {
            final long tokenExpiration = 86400; // 1 day

            return Jwts.builder()
                    .subject(email)
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .compact();
        }
    }
    ```

    - 说明：密钥与过期时长都来源于外部配置。

5. .gitignore 排除敏感配置

    ```
    .env
    ```

    - 说明：防止密钥意外提交。

6. .env.example（团队协作模板）

    ```
    JWT_SECRET=
    ```

    - 说明：不包含实际密钥，仅做说明。

7. Postman 请求验证（Header 示例）

    ```
    {
        "email": "pang@example.com",
        "password": "123456"
    }
    ```

    - 描述：POST 访问 http://localhost:8080/auth/login ，返回 token

## JWT 令牌校验演示

> 简述：服务端需对客户端每次请求携带的 JWT 进行验证，确保其签名有效、未被篡改且未过期。此节通过手动接口演示完整校验流程，实际应由 Spring Security 自动完成。

**知识树**

1. 令牌校验包含以下三方面：

    1. 结构合法性：确保 token 格式正确、能正常解析出 Header / Payload / Signature。
    2. 签名验证：确保 token 未被篡改，来源可信。
    3. 业务规则校验：例如是否已过期、是否具备权限等。

2. 临时验证方案（演示）

    - 提供 `/auth/validate` POST 接口用于演示。
    - 控制器从请求头提取 JWT，传入服务方法校验。
    - 返回布尔值表示是否有效。
    - 实际项目中应使用过滤器链完成自动校验。

3. JWTService 中的校验逻辑

    - 使用 JJWT 工具库对 token 进行解析与验证。
    - 若签名错误、格式非法或已过期，捕获 `JwtException` 并返回 `false`。
    - 否则返回 `true` 表示校验成功。

4. Authorization Header 解析方式

    - 标准格式：`Authorization: Bearer <token>`。
    - 提取方式：使用 `.replace("Bearer ", "")`，避免使用硬编码的 `substring(7)`。

5. 安全配置：开放验证端点

    - 默认情况下 `/auth/validate` 会被拦截。
    - 应在 `SecurityFilterChain` 中对该路径显式放行。

**代码示例**

1. JWTService 中实现校验方法

    ```java
    @Service
    public class JwtService {
        @Value("${spring.jwt.secret}")
        private String secretKey;

    	// 省略生成方法

        public boolean validateToken(String token) {
            try {
                var claims = Jwts.parser()
                        .verifyWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                        .build()
                        .parseSignedClaims(token)
                        .getPayload();

                return claims.getExpiration().after(new Date());
            } catch (JwtException ex) {
                return false;
            }
        }
    }
    ```

    - 描述：若解析失败或过期，返回 `false`，否则返回 `true`。结构和签名校验都包含在`parseSignedClaims(token)`方法中了。

2. AuthController 添加验证端点

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;

    	// 省略

        @PostMapping("/validate")
        public boolean validate(@RequestHeader("Authorization") String authHeader) {
            var token = authHeader.replace("Bearer ", "");

            return jwtService.validateToken(token);
        }

    	// 省略

    }
    ```

    - 描述：从请求头中提取 token，传入 service 校验。

3. SecurityConfig 放行验证端点

    ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                .authorizeHttpRequests(auth -> auth
                    .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                    .requestMatchers(HttpMethod.POST, "/auth/validate").permitAll()
                    .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(c -> c.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
            return http.build();
        }
    }
    ```

    - 描述：显式允许 `/auth/validate` 接口公开访问。

4. Postman 请求示例（验证过程）

    1. 使用正确的帐号密码登录获取 Token（上一节已经展示）：

        - 请求：`POST /auth/login`
        - 响应：`{ "token": "xxxxx" }`

    2. 验证 Token：

        - 请求：`POST /auth/validate`
        - Header：在 Header 手动添加键值对 `Authorization: Bearer xxxxx`，`Bearer `为标准 REST API 要求
        - 验证成功返回 `true`，若令牌错误、过期、伪造则返回 `false`。

## Filter 基础

> 简述：Filter 是基于 Servlet 规范的组件，用于在请求进入 Controller 前或响应返回客户端前执行拦截逻辑。Spring Security 基于过滤器链构建身份认证与授权的核心流程，实现安全处理的模块化与统一管理。

**知识树**

1. 定义与职责

    - 定义：Filter 是用于请求前置/后置处理的拦截器，可用于日志记录、请求包装、身份认证、权限控制等场景。
    - 职责：既可在请求进入 Controller 之前修改或验证请求内容，也可在响应返回之前修改响应内容。

2. 执行流程与控制机制

    - 所有请求会依序通过多个 Filter 构成的 FilterChain。
    - 每个 Filter 通过调用 `filterChain.doFilter()` 放行请求，否则中断处理。
    - 如果未调用 `doFilter()`，请求将被终止，返回空 200 响应，也可以手动设置响应。

3. 自定义 Filter 的方式

    - 继承 `OncePerRequestFilter`：保证每个请求仅执行一次（避免重复拦截）。
    - 实现核心逻辑于 `doFilterInternal()` 方法。
    - 注册方式：
        - 标注 `@Component` 自动注入（或手动添加到安全过滤链中以控制顺序）。
    - 参数说明：
        - `HttpServletRequest`：请求体。
        - `HttpServletResponse`：响应体。
        - `FilterChain`：控制请求继续执行。

**代码示例**

1. 创建自定义日志 Filter

    ```java
    @Component
    public class LoggingFilter extends OncePerRequestFilter {
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
            System.out.println("Request: " + request.getRequestURI());

            filterChain.doFilter(request, response);

            System.out.println("Response: " + response.getStatus());
        }
    }
    ```

    - 描述：记录所有进入系统的请求路径和对应响应状态码。

2. 控制器中添加方法观察请求流向

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;

    	// 省略

        @PostMapping("/validate")
        public boolean validate(@RequestHeader("Authorization") String authHeader) {
            System.out.println("Validate called.");

            var token = authHeader.replace("Bearer ", "");

            return jwtService.validateToken(token);
        }

    	// 省略

    }
    ```

    - 描述：验证 JWT 请求是否到达 Controller，可结合日志 Filter 观察执行顺序。

3. Postman 测试

    ```
    Incoming request: /auth/validate
    Validate called.
    Response status: 200
    ```

    - 描述：重复上一节的验证登陆，观察控制台输出，验证请求先被 Filter 拦截，再进入 Controller，最后输出响应状态。

## 自定义 JWT 认证过滤器

> 简述：通过在请求进入 Controller 之前执行 JWT 校验逻辑，实现无状态用户认证。过滤器自动解析请求中的令牌，校验合法性并注入用户信息至 Spring Security 上下文，构建统一的认证机制。

**知识树**

1. 核心职责

    - 校验：拦截请求，检查 JWT 是否存在、格式正确、签名有效、未过期。
    - 注入：认证通过后，将用户身份写入 SecurityContext，用于后续授权判断。

2. 实现流程（过滤器内）

    1. 提取 Authorization 请求头。
    2. 验证格式、提取 Bearer token。
    3. 调用 JwtService 验证 token 合法性。
    4. 提取用户信息（如 email）并创建认证对象。
    5. 设置认证元信息（IP 等）。
    6. 写入 `SecurityContextHolder`。
    7. 在 SecurityConfig 中设置过滤器优先级

3. 请求放行与权限控制关系

    - 无 token 或无效 token：放行为匿名用户，由 Spring Security 判断权限。
    - 有效 token：视为已登录用户，可以访问受保护资源。

4. 性能与扩展性设计

    - 鉴权数据来源：避免每次从数据库加载用户，优先从 JWT 提取基本身份（如 email）。
    - 权限系统预留：当前设置为 null，后续可基于角色集成权限控制（如 authorities 字段）。

**代码示例**

1. 自定义 JWT 过滤器

    ```java
    @AllArgsConstructor
    @Component
    // 继承 Spring 的 OncePerRequestFilter，确保每个请求只执行一次
    public class JwtAuthenticationFilter extends OncePerRequestFilter {

        // 注入自定义的 JWT 工具服务，用于 token 校验与解析
        private final JwtService jwtService;

        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            // 1. 从请求头获取 Authorization 字段
            var authHeader = request.getHeader("Authorization");

            // 2. 如果请求头没有 Authorization，或格式不是 Bearer Token，则直接放行（代表匿名用户）
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            // 3. 截取 JWT 部分（去除 Bearer 前缀）
            var token = authHeader.replace("Bearer ", "");

            // 4. 校验 token 是否有效（签名、过期等）
            if (!jwtService.validateToken(token)) {
                // 如果无效，也直接放行，不设置用户身份
                filterChain.doFilter(request, response);
                return;
            }

            // 5. 从 token 中提取用户身份信息（如 email），创建认证对象
            var authentication = new UsernamePasswordAuthenticationToken(
                    jwtService.getEmailFromToken(token), // principal（用户名/用户标识）
                    null,                                // credentials（此处无需密码）
                    null                                 // authorities（权限列表，实际项目中可扩展）
            );
            // 6. 绑定请求的附加信息（如 IP、Session 等），样板代码
            authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
            );

            // 7. 将认证信息写入 Spring Security 上下文，标记本次请求为已认证用户
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // 8. 放行请求，进入后续过滤器或控制器
            filterChain.doFilter(request, response);
        }
    }
    ```

    - 描述：成功验证后将 email 写入认证对象，并设置到当前线程的安全上下文。

2. JwtService 提取 email 方法（补充）

    ```java
    @Service
    public class JwtService {
        @Value("${spring.jwt.secret}")
        private String secretKey;

        public String generateToken(String email) {
            final long tokenExpiration = 86400; // 1 day

    	// 省略

        private Claims getClaims(String token) {
            return Jwts.parser()
                    .verifyWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        }

        public String getEmailFromToken(String token) {
            return getClaims(token).getSubject();
        }
    }
    ```

    - 描述：避免重复解析逻辑，提取为通用 `getClaims()` 方法，提高复用性。

3. 注册过滤器到 Spring Security

    ```java
    @Configuration
    @EnableWebSecurity
    @AllArgsConstructor
    public class SecurityConfig {

        private final UserDetailsService userDetailsService;
        private final JwtAuthenticationFilter jwtAuthenticationFilter;

    	// 省略

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .sessionManagement(c ->
                            c.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(c -> c
                            .requestMatchers("/carts/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/users").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                            .anyRequest().authenticated()
                    )
                    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

            return http.build();
        }
    }
    ```

    - 描述：将 JWT 认证过滤器插入到 UsernamePasswordAuthenticationFilter 之前，确保其最早生效。并将`/auth/validate`取消，加入保护以作验证

4. 运行验证（Postman 测试流程）

    1. 使用 `POST /auth/login` 登录，获取 JWT。
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问受保护的接口，如： `POST /auth/validate`、`GET /users/{id}`
    4. 观察返回结果与控制台输出，验证是否完成自动认证。
    5. 描述：若未传 Authorization 头，则 403；传入合法 token 后，系统认为用户已登录。

## 登录用户认证信息

> 简述：通过 Spring Security 提供的 `SecurityContext`，我们可以在控制器中获取当前已认证用户的身份标识。

**知识树**

1. `SecurityContext` 与认证对象

    - `SecurityContextHolder.getContext().getAuthentication()`
      获取当前线程上下文中的 `Authentication` 对象。
    - `authentication.getPrincipal()`
      返回认证主体信息，类型为 `Object`，需根据实际情况强制转换。
      例如：若主体为邮箱（String），则可直接强转为 `String` 类型。

2. 查询用户并封装响应

    - 本节实现 `/auth/me` 接口，通过 `UserRepository.findByEmail()` 查询当前登录用户的信息。
    - 查询结果经 Mapper 转换为 DTO，并作为标准 HTTP 响应返回前端。
    - 该接口无需显式添加权限校验注解，因已集成全局鉴权与过滤器，只有携带有效 token 的已登录用户才能访问。

**代码示例**

1. 获取当前用户信息接口

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {

        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @GetMapping("/me")
        public ResponseEntity<UserDto> getCurrentUser() {
            // 提取当前身份信息
            var authentication = SecurityContextHolder.getContext().getAuthentication();
            var email = (String) authentication.getPrincipal();

            // 查询用户实体
            var user = userRepository.findByEmail(email)
                    .orElse(null);

            if (user == null)
                return ResponseEntity.notFound().build();

            // 映射为 DTO 并返回
            var userDto = userMapper.toDto(user);
            return ResponseEntity.ok(userDto);
        }
    }
    ```

    - 描述：从认证上下文提取当前登录用户的 email，查询用户详情并以 DTO 返回。若用户不存在，返回 404。

2. 运行验证（Postman 测试流程）

    ```json
    {
    	"id": 8,
    	"name": "Pang",
    	"email": "pang@example.com"
    }
    ```

    1. 登录获取 JWT， `POST /auth/login` → 获取 token
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问受保护的接口，如： `GET /auth/me`
    4. 返回示例如上
    5. 若不带 Authorization 头或 token 非法，Spring Security 自动拦截，返回 403。

## Ex: JWT 加入用户信息

> **要求**：优化 JWT 的 Payload：
>
> 1. 使用用户 ID 作为 subject（原为 email）
> 2. 添加用户 email 和 name 为 claims，以便前端无需额外请求即可展示用户身份信息

> **解法**：
> **核心目的**：通过用户 ID 替代 email，提升索引效率；通过添加 claims 减少额外请求
>
> 1. 修改 `generateToken()` 方法的入参为 `User` 对象，subject 改为 `user.getId()`，并添加 `email` 和 `name` claims
> 2. 登录成功后，将完整的 User 对象传入生成 token 的方法
> 3. JWT 验证过滤器中，principal 改为 `userId`，`getEmailFromToken()` 改为 `getUserIdFromToken()`，返回类型为 `Long`
> 4. `/auth/me` 控制器中，用 userId 查询数据库，而非 email

**小结**

- 将 email 替换为 ID 可提升数据库检索效率；
- 添加 claims（如 name、email）允许前端直接展示用户信息；
- token payload 不应过大，应仅保留常用公开信息。

**问题引入**

- 登录请求时会触发两次用户信息查询 SQL，虽对性能影响不大，但仍有优化空间。
- 常见优化方式包括：
    - 让实体类直接实现 `UserDetails`（适合初学者，简便易用）；
    - 封装自定义 `CustomUserDetails` 类（更适合大型项目，便于扩展）。
- 本节暂不做优化处理，仅做问题提示。

**代码**

1. JwtService

    ```java
    @Service
    public class JwtService {
        @Value("${spring.jwt.secret}")
        private String secretKey;

        public String generateToken(User user) {
            final long tokenExpiration = 86400; // 1 day

            return Jwts.builder()
                    .subject(user.getId().toString())
                    .claim("email", user.getEmail())
                    .claim("name", user.getName())
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .compact();
        }

    	// 省略

        public Long getUserIdFromToken(String token) {
            return Long.valueOf(getClaims(token).getSubject());
        }
    }
    ```

    - 描述：生成 JWT 的 payload 改为 ID + Claims

2. AuthController

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;
        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @PostMapping("/login")
        public ResponseEntity<JwtResponse> login(
                @Valid @RequestBody LoginRequest request) {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            // 从 authentication 中提取已加载的用户信息（避免再次查询数据库）
            var user = (User) authenticate.getPrincipal();
            // var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            var token = jwtService.generateToken(user);

            return ResponseEntity.ok(new JwtResponse(token));
        }

    	// 省略

        @GetMapping("/me")
        public ResponseEntity<UserDto> me() {
            var authentication = SecurityContextHolder.getContext().getAuthentication();
            var userId = (Long) authentication.getPrincipal();

            var user = userRepository.findById(userId).orElse(null);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }

            var userDto = userMapper.toDto(user);

            return ResponseEntity.ok(userDto);
        }

    	// 省略
    }
    ```

    - 描述：修改令牌生成逻辑，根据 user 对象生成令牌，而非 email，并补充修改 me 接口，根据 userId 返回而非 email

3. 修改过滤器中的校验逻辑

    ```java
    @AllArgsConstructor
    @Component
    public class JwtAuthenticationFilter extends OncePerRequestFilter {

    // 省略

            // 5. 从 token 中提取用户身份信息（如 email），创建认证对象
            var authentication = new UsernamePasswordAuthenticationToken(
                    jwtService.getUserIdFromToken(token),
                    null,
                    null
            );

    // 省略

    }
    ```

    - 描述：更换获取 email 方法为获取 user 方法

4. 运行验证（Postman 测试流程）

    ```json
    {
    	"id": 8,
    	"name": "Pang",
    	"email": "pang@example.com"
    }
    ```

    1. 登录获取 JWT， `POST /auth/login` → 获取 token（token 变长了）
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问受保护的接口，如： `GET /auth/me`
    4. 返回示例如上

## Refresh Token 基础

> 简述：刷新令牌机制通过“短效访问令牌 + 长效刷新令牌”双令牌设计，实现安全的无缝登录续期，降低敏感令牌被盗风险，提升用户体验。

**知识树**

1. 令牌类型与作用

    - 访问令牌（Access Token）

        - 作用：用于访问受保护 API，生命周期短（如几分钟\~一小时）。
        - 特点：被盗风险低，暴露损失有限。
        - 缺点：localStorage 可被 XSS 攻击窃取，因而必须短效。

    - 刷新令牌（Refresh Token）

        - 作用：用于续期获取新的访问令牌，生命周期长（如 7 天或更久）。
        - 特点：严格保护，仅服务端可读取，攻击面更小。
        - 注意点：不能保存在 localStorage，以 HTTP-Only Cookie 方式返回，浏览器无法通过 JS 读取，仅随请求自动携带。

2. 刷新令牌常用设置

    - `cookie.setHttpOnly(true)`
        - 只允许后端（服务端）访问此 Cookie，前端 JavaScript 代码无法读取或操作。
        - 防止 XSS 攻击盗取 refresh token。即使黑客注入恶意 JS，也无法获取 cookie 内容
    - `cookie.setPath("/auth/refresh")`
        - 只有访问 /auth/refresh 路径及其子路径时，浏览器才自动携带这个 Cookie。
        - 最小化作用范围，避免刷新令牌被其它接口误用。只有刷新接口能收到 refresh token。
    - `cookie.setMaxAge(604800)`
        - 设置 Cookie 的有效期，单位是秒。这里 604800 是 7 天，超过 7 天自动失效，降低长期暴露风险。
        - 稍后介绍使用配置值替换
    - `cookie.setSecure(true)`
        - 仅 HTTPS 协议下才会携带此 Cookie，HTTP 不会带。
        - 防止明文传输被中间人窃取，保证刷新令牌只在加密通道中传递。

3. 续期流程

    - 访问令牌到期后，前端用 refresh token（自动随 cookie 发送）请求新的 access token。
    - 稍后介绍

**代码示例**

1. 创建访问令牌与创建刷新令牌方法

    ```java
    @Service
    public class JwtService {
        @Value("${spring.jwt.secret}")
        private String secretKey;

        public String generateAccessToken(User user) {
            final long tokenExpiration = 300; // 5mAdd commentMore actions

            return generateAccessToken(user, tokenExpiration);
        }

        public String generateRefreshToken(User user) {
            final long tokenExpiration = 604800; // 7d

            return generateAccessToken(user, tokenExpiration);
        }

        private String generateAccessToken(User user, long tokenExpiration) {
            return Jwts.builder()
                    .subject(user.getId().toString())
                    .claim("email", user.getEmail())
                    .claim("name", user.getName())
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .compact();
        }

    	// 省略
    }
    ```

    - 描述：将之前的 `generateToken()` 方法 修改为 `generateAccessToken()`，抽取生成 token 方法，并创建生成刷新令牌方法，两种令牌创建方式相同

2. 登陆控制器中返回两款令牌

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;
        private final UserRepository userRepository;
        private final UserMapper userMapper;

        @PostMapping("/login")
        public ResponseEntity<JwtResponse> login(
                @Valid @RequestBody LoginRequest request,
                HttpServletResponse response) {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

            var accessToken = jwtService.generateAccessToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);

            var cookie = new Cookie("refreshToken", refreshToken);
            cookie.setHttpOnly(true);
            cookie.setPath("/auth/refresh");
            cookie.setMaxAge(604800); // 7d(魔法数字问题稍后介绍解决方案)
            cookie.setSecure(true);
            response.addCookie(cookie);

            return ResponseEntity.ok(new JwtResponse(accessToken));
        }

    	// 省略
    }
    ```

    - 描述：刷新令牌通过 Cookie 安全下发，前端仅能获取访问令牌，前后端职责分离。此外删除原有的 validate 冗余接口（已由过滤实现）

3. 运行验证（Postman 测试流程）

    1. 登录获取 JWT， `POST /auth/login` → 获取 token
        1. 此处 Body 处为临时令牌 token，cookie 处为长期令牌 token，若 cookie 处因为未知原因未显示，查看 `Header` 中 `Set-Cookie`参数
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问受保护的接口，如： `GET /auth/me`
    4. 在过期时间结束后，再次访问，返回 401（未授权）

## 配置外部化

> 简述：将应用中的敏感参数与魔法数字（如 JWT 密钥、过期时长等）统一移入配置文件，通过配置类注入实现集中管理，能提升安全性、可维护性与灵活性。

**知识树**

1. 配置参数声明方式

    - 在 `application.yaml` 中集中声明密钥、过期时间等配置项，避免硬编码，便于环境切换与管理。

2. 配置注入方式

    - 单个参数：使用 `@Value` 注解直接注入配置项。
    - 批量参数：使用 `@ConfigurationProperties` 注解将一组参数绑定到专用配置类，实现统一访问和复用。

3. 配置类的使用

    - 配置类负责持有密钥、过期时长等参数，并可封装通用方法（如生成 SecretKey），为服务层和控制层提供标准接口。

**代码示例**

1. 配置文件中声明参数

    ```yaml
    spring:

      jwt:
        secret: ${JWT_SECRET}
        accessTokenExpiration: 300 # 5m
        refreshTokenExpiration: 604800 # 7d
    ```

2. 配置类注入并绑定参数

    ```java
    @Configuration
    @ConfigurationProperties(prefix = "spring.jwt")
    @Data
    public class JwtConfig {
        private String secret;
        private int accessTokenExpiration;
        private int refreshTokenExpiration;

        public SecretKey getSecretKey() {
            return Keys.hmacShaKeyFor(secret.getBytes());
        }
    }
    ```

    - 描述：将所有 JWT 相关配置统一绑定到配置类，提供密钥生成工具方法。

3. 控制器中替换魔法数字为配置参数

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
        private final JwtConfig jwtConfig;

    	 // 省略

            cookie.setMaxAge(jwtConfig.getRefreshTokenExpiration());

    	// 省略
    }
    ```

4. 服务层通过配置类统一参数

    ```java
    @Service
    @AllArgsConstructor
    public class JwtService {
        private final JwtConfig jwtConfig;

        public String generateAccessToken(User user) {

            return generateAccessToken(user, jwtConfig.getAccessTokenExpiration());
        }

        public String generateRefreshToken(User user) {

            return generateAccessToken(user, jwtConfig.getRefreshTokenExpiration());
        }

        private String generateAccessToken(User user, long tokenExpiration) {
            return Jwts.builder()
                    .subject(user.getId().toString())
                    .claim("email", user.getEmail())
                    .claim("name", user.getName())
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(jwtConfig.getSecretKey())
                    .compact();
        }

        public boolean validateToken(String token) {
            try {
                var claims = getClaims(token);

                return claims.getExpiration().after(new Date());
            } catch (JwtException ex) {
                return false;
            }
        }

        private Claims getClaims(String token) {
            return Jwts.parser()
                    .verifyWith(jwtConfig.getSecretKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        }

        public Long getUserIdFromToken(String token) {
            return Long.valueOf(getClaims(token).getSubject());
        }
    }
    ```

    - 描述：统一使用配置类参数，彻底消除硬编码和重复代码，方便未来维护与扩展。

## Refresh Token 实现

> 简述：通过独立的刷新令牌接口，可以实现基于 HTTP-Only Cookie 的安全访问令牌续期，提升会话安全性与用户体验，并对未认证请求返回标准化 401 状态。

**知识树**

1. 刷新令牌（Refresh Token）接口实现

    - 流程：
        - 提供 `/auth/refresh` POST 接口，允许客户端通过 HTTP-Only Cookie 携带的 Refresh Token 换取新的 Access Token。
    - 具体步骤：
        - 提取 Cookie 中的 `refreshToken`。
        - 校验 Refresh Token 合法性（签名、有效期）。
        - 提取 Token 内的用户 ID。
        - 查询数据库确认用户存在。
        - 生成新的短效访问令牌并返回。

2. 安全与异常处理

    - 若 Refresh Token 无效或用户不存在，返回 401 Unauthorized，禁止未认证续期。
    - Spring Security 默认 403 Forbidden，需配置全局 EntryPoint 强制响应 401。

3. 开放接口配置

    - 显式允许 `/auth/refresh` 匿名访问，否则会被全局认证保护拦截。

**代码示例**

1. 刷新令牌接口实现

    ```java

    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {

    	// 省略

        @PostMapping("/refresh")
        public ResponseEntity<JwtResponse> refresh(
                @CookieValue(value = "refreshToken") String refreshToken
        ) {
    		// 校验 Refresh Token
            if (!jwtService.validateToken(refreshToken)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
    		// 提取用户 ID 并查找用户
            var userId = jwtService.getUserIdFromToken(refreshToken);
            var user = userRepository.findById(userId).orElseThrow();


            // 生成新的访问令牌
            var accessToken = jwtService.generateAccessToken(user);
            return ResponseEntity.ok(new JwtResponse(accessToken));
        }

    	// 省略

    }
    ```

    - 描述：刷新令牌接口返回新的访问令牌。

2. 放行请求与异常处理

    ```java
    @Configuration
    @EnableWebSecurity
    @AllArgsConstructor
    public class SecurityConfig {

    	// 省略

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .sessionManagement(c ->
                            c.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(c -> c
                            .requestMatchers("/carts/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/users").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/refresh").permitAll()
                            .anyRequest().authenticated()
                    )
                    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                    .exceptionHandling(c ->
                            c.authenticationEntryPoint(
                                    new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));

            return http.build();
        }
    }

    ```

    - 描述：放行`/auth/login`请求，并将异常处理设置为返回 UNAUTHORIZED

3. 运行验证（Postman 测试流程）

    1. 登录获取 JWT， `POST /auth/login` → 获取 token
        1. 此处 Body 处为临时令牌 token，cookie 处为长期令牌 token，若 cookie 处因为未知原因未显示，查看 `Header` 中 `Set-Cookie`参数
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问受保护的接口，如： `GET /auth/me`
    4. 在过期时间结束后，再次访问，返回 401（未授权）
    5. 新建访问，`POST /auth/refresh`，获取新访问令牌
        1. 发送请求时 postman 会自动携带登陆时获取的长期令牌
        2. 若未知原因没有获取，查看登陆请求页面的蓝色 cookie 标识，拷贝信息到新访问窗口

## 基于角色的访问控制

> 简述：RBAC 通过角色来集中控制用户访问权限。每个用户被赋予特定角色，系统基于角色决定接口访问权限，结构清晰，便于管理。

**知识树**

1. 基于角色的访问控制（RBAC，Role-Based Access Control）

    - 核心思想：用户被赋予一个或多个角色（如 USER、ADMIN），系统根据角色授予访问权限。
    - 适用场景：如普通用户只能操作自己的数据，管理员拥有更高权限。
    - 优点：实现简单、易维护、扩展性强。
    - 应用广泛：绝大多数企业管理系统、后台管理、SaaS 平台接口均采用 RBAC。

2. 给予角色实现

    - 数据库表结构调整
        - 在 `users` 表新增 `role` 字段，存储用户角色。使用数据库迁移工具（如 Flyway）添加该字段，并设置默认值为 `USER`。
    - 角色枚举定义
        - 创建 `Role` 枚举类型（如 `USER`、`ADMIN`），用于类型安全地管理权限。
    - 用户实体拓展
        - 在 `User` 实体类中添加 `private Role role;` 字段，并通过 `@Enumerated(EnumType.STRING)` 注解确保以字符串形式持久化角色。
    - 注册逻辑完善
        - 在用户注册流程中显式设置初始角色（如 `user.setRole(Role.USER)`），避免隐式赋值导致的逻辑错误。
    - JWT 令牌扩展
        - 生成 JWT 时，将用户角色作为 claim 写入令牌 payload，实现无状态权限校验，减少后续数据库查询。

3. 角色实现的检验

    - 新增 `/admin/hello` 接口，设置仅允许 `ADMIN` 角色访问，并处理权限不足时的异常响应。
    - 过滤器中校验 JWT 令牌中的角色信息，确保接口安全性。

**代码示例**

1. Flyway 数据库迁移文件`V3__add_role_to_users.sql`

    ```sql
    alter table users
    add role varchar(20) default 'USER' not null;
    ```

2. Role 枚举定义

    ```java
    public enum Role {
        USER,
        ADMIN
    }
    ```

3. User 实体中角色字段

    ```java
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Entity
    @Table(name = "users")
    public class User {
    	// 省略

        @Column(name = "role")
        @Enumerated(EnumType.STRING)
        private Role role;

        // 省略
    }
    ```

4. 用户控制器设置注册时分配角色

    ```java
    @RestController
    @AllArgsConstructor
    @RequestMapping("/users")
    public class UserController {
    	// 省略

        @PostMapping
        public ResponseEntity<?> registerUser(
                @Valid @RequestBody RegisterUserRequest request,
                UriComponentsBuilder uriBuilder
        ) {

            if (userRepository.existsByEmail(request.getEmail())) {
                return ResponseEntity.badRequest().body(
                        Map.of("email", "Email is already registered.")
                );
            }

            User user = userMapper.toEntity(request);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            user.setRole(Role.USER); // 明确赋予初始角色

            var userDto = userMapper.toDto(user);
            var uri = uriBuilder.path("/users/{id}").buildAndExpand(userDto.getId()).toUri();
            return ResponseEntity.created(uri).body(userDto);
        }

    	// 省略
    }
    ```

5. 令牌加入角色信息

    ```java
    @Service
    @AllArgsConstructor
    public class JwtService {
    	// 省略

        private String generateAccessToken(User user, long tokenExpiration) {
            return Jwts.builder()
                    .subject(user.getId().toString())
                    .claim("email", user.getEmail())
                    .claim("name", user.getName())
                    .claim("role", user.getRole())//
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .signWith(jwtConfig.getSecretKey())
                    .compact();
        }

    	// 省略
    }
    ```

    - 说明：用户的角色已写入 JWT，前后端均可用来进行权限判断，无需额外数据库查询。

6. 给予角色实现运行验证（Postman 测试流程）

    1. 登录获取 JWT， `POST /auth/login` → 获取 token
    2. 复制 token，访问https://jwt.io/ 解析，可以看到 token 中包含 role 信息

7. 新增`/admin/hello`接口

    ```java
    @RestController
    @RequestMapping("/admin")
    public class AdminController {
        @GetMapping("/hello")
        public String sayHello() {
            return "Hello Admin!";
        }
    }
    ```

8. 允许 ADMIN 用户访问，并处理异常响应码

    ```java
    @Configuration
    @EnableWebSecurity
    @AllArgsConstructor
    public class SecurityConfig {

    	// 省略

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .sessionManagement(c ->
                            c.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(c -> c
                            .requestMatchers("/carts/**").permitAll()
                            .requestMatchers("/admin/**").hasRole(Role.ADMIN.name())
                            .requestMatchers(HttpMethod.POST, "/users").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                            .requestMatchers(HttpMethod.POST, "/auth/refresh").permitAll()
                            .anyRequest().authenticated()
                    )
                    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                    .exceptionHandling(c -> {
                        c.authenticationEntryPoint(
                                new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
                        c.accessDeniedHandler(((request, response, accessDeniedException) ->
                                response.setStatus(HttpStatus.FORBIDDEN.value())));
                    });
            return http.build();
        }
    }
    ```

9. 过滤器检验角色信息

    ```java
    @AllArgsConstructor
    @Component
    public class JwtAuthenticationFilter extends OncePerRequestFilter {

    	// 省略

            // 5. 从 token 中提取用户身份信息（如 email），创建认证对象
            var role = jwtService.getRoleFromToken(token);
            var userId = jwtService.getUserIdFromToken(token);
            var authentication = new UsernamePasswordAuthenticationToken(
                    userId,
                    null,
                    List.of(new SimpleGrantedAuthority("ROLE_" + role))
            );

    	// 省略
        }
    }
    ```

10. 提取 token 中角色方法

    ```java
    @Service
    @AllArgsConstructor
    public class JwtService {
    	// 省略

        public Role getRoleFromToken(String token) {
            return Role.valueOf(getClaims(token).get("role", String.class));
        }
    }
    ```

11. 给予角色实现运行验证（Postman 测试流程）

    1. 登录获取 JWT， `POST /auth/login` → 获取 token
    2. 新建访问，设置 Header：`Authorization`: `Bearer {token}`
    3. 访问只有 ADMIN 可以访问的接口，如： `GET /admin/hello`，显示 403 无权限
    4. 数据库修改当前之前用户的权限为 ADMIN，重新登录获取 JWT
    5. 设置新访问窗口为新 token，访问只有 ADMIN 可以访问的接口，访问成功

## Ex: JWT 服务层简化

> **要求**：将 JWT 相关的所有 token 解析和属性提取逻辑，从“工具方法堆叠”重构为高内聚的领域对象。以信息专家原则（Information Expert Principle）为指导，将 token 行为与状态封装到专属类中，提升代码的可维护性和表达力。

> **解法**：

1. 新建 JWT 领域类

    - 定义不可变属性：`Claims claims` 和 `SecretKey key`
    - 定义构造函数
    - 封装所有与 token 相关的方法，如 `isExpired()`、`getUserId()`、`getRole()`、`toString()`。

2. 精简 JWTService

    - JWTService 只负责 token 的生成和解析。
    - 生成方法返回 JWT 对象，而不是 String。
    - 解析方法 `parseToken()` 返回 JWT 对象（或 null，表示无效）。

3. 依赖方重构

    - 过滤器、控制器等所有依赖点均通过 JWT 对象访问属性和校验状态。
    - 严格遵循单一职责，职责清晰。

**代码**

1. JWT 领域对象

    ```java
    public class Jwt {
        private final Claims claims;
        private final SecretKey secretKey;

        public Jwt(Claims claims, SecretKey secretKey) {
            this.claims = claims;
            this.secretKey = secretKey;
        }

        public boolean isExpired() {
            return claims.getExpiration().before(new Date());
        }

        public Long getUserId() {
            return Long.valueOf(claims.getSubject());
        }

        public Role getRole() {
            return Role.valueOf(claims.get("role", String.class));
        }

        public String toString() {
            return Jwts.builder().claims(claims).signWith(secretKey).compact();
        }
    }
    ```

    - 描述：封装方法，并添加 toString 方法将对象转为 token

2. JwtService 简化

    ```java
    @Service
    @AllArgsConstructor
    public class JwtService {
        private final JwtConfig jwtConfig;

        public Jwt generateAccessToken(User user) {

            return generateAccessToken(user, jwtConfig.getAccessTokenExpiration());
        }

        public Jwt generateRefreshToken(User user) {

            return generateAccessToken(user, jwtConfig.getRefreshTokenExpiration());
        }

        private Jwt generateAccessToken(User user, long tokenExpiration) {
            var claims = Jwts.claims()
                    .subject(user.getId().toString())
                    .add("email", user.getEmail())
                    .add("name", user.getName())
                    .add("role", user.getRole())
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                    .build();

            return new Jwt(claims, jwtConfig.getSecretKey());
        }

        public Jwt parseToken(String token) {
            try {
                var claims = getClaims(token);

                return new Jwt(claims, jwtConfig.getSecretKey());
            } catch (JwtException e) {
                return null;
            }
        }

        private Claims getClaims(String token) {
            return Jwts.parser()
                    .verifyWith(jwtConfig.getSecretKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        }
    }
    ```

3. AuthController 基于 Jwt 重构

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/auth")
    public class AuthController {
    	// 省略

        @PostMapping("/login")
        public ResponseEntity<JwtResponse> login(
                @Valid @RequestBody LoginRequest request,
                HttpServletResponse response) {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

            var accessToken = jwtService.generateAccessToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);

            var cookie = new Cookie("refreshToken", refreshToken.toString());
            cookie.setHttpOnly(true);
            cookie.setPath("/auth/refresh");

            cookie.setMaxAge(jwtConfig.getRefreshTokenExpiration());

            cookie.setSecure(true);
            response.addCookie(cookie);

            return ResponseEntity.ok(new JwtResponse(accessToken.toString()));
        }

        @PostMapping("/refresh")
        public ResponseEntity<JwtResponse> refresh(
                @CookieValue(value = "refreshToken") String refreshToken
        ) {
            // 校验 Refresh Token
            var jwt = jwtService.parseToken(refreshToken);
            if (jwt == null || jwt.isExpired()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            // 提取用户 ID 并查找用户
            var user = userRepository.findById(jwt.getUserId()).orElseThrow();


            // 生成新的访问令牌
            var accessToken = jwtService.generateAccessToken(user);
            return ResponseEntity.ok(new JwtResponse(accessToken.toString()));
        }

    	// 省略
    }
    ```

4. JwtAuthenticationFilter 基于 Jwt 重构

    ```java
    @AllArgsConstructor
    @Component
    // 继承 Spring 的 OncePerRequestFilter，确保每个请求只执行一次
    public class JwtAuthenticationFilter extends OncePerRequestFilter {
    	// 省略

            // 4. 校验 token 是否有效（签名、过期等）
            var jwt = jwtService.parseToken(token);
            if (jwt == null || jwt.isExpired()) {
                // 如果无效，也直接放行，不设置用户身份
                filterChain.doFilter(request, response);
                return;
            }

            // 5. 从 token 中提取用户身份信息（如 email），创建认证对象
            var authentication = new UsernamePasswordAuthenticationToken(
                    jwt.getUserId(),
                    null,
                    List.of(new SimpleGrantedAuthority("ROLE_" + jwt.getRole()))
            );

    	// 省略
    }
    ```

## 退出（Logout）机制

> 简述：JWT 登出可分为前端自清理和后端令牌失效。两者权衡安全性与复杂度，场景不同选择不同策略。

**知识树**

1. 客户端登出（前端主导）

    - 实现：
        - 前端主动清除本地 access token（如从内存或 localStorage）。
        - 清空 HTTP-Only Cookie ，使 refresh token 失效。
    - 特点：
        - 实现简单，无需后端配合。
        - 退出后，token 仍在有效期内可被利用，若泄漏有风险。
    - 适用：
        - 低风险或短生命周期场景。

2. 服务端登出（Token 黑名单/白名单）

    - 实现：
        - 服务端维护 token 黑名单或有效 token 列表（数据库、缓存）。
        - 用户登出时，将 token 标记为无效。
        - 每次认证时检查 token 是否已注销。
    - 特点：
        - 支持即时失效，提升安全。
        - 需存储和校验，增加系统复杂度与性能消耗。
    - 适用：
        - 高安全要求场景（如金融、医疗、后台管理）。

3. 实践建议

    - 普通业务推荐：前端清理 + 短生命周期 access token。
    - 高安全需求推荐：黑名单或“最新 token 校验”。

4. 单点登录与被动退出（补充）

    - 目的：
        - 同一账号在另一设备/浏览器重新登录后，本设备的 token 自动失效，被动退出到登录页。
    - 实现：
        1. 用户登录生成新 token，后端存储最新 token 标记（如 Redis）。
        2. 新设备登录时覆盖旧 token，旧 token 立即失效。
        3. 每次认证后，再查存储校验 token 是否为“最新”。
        4. 检查不通过则返回 401，前端自动退出到登录页。
    - 优点：
        - 保证同一账号仅允许一个有效 session。
        - 实现异地登录被动踢出，增强安全。

## 认证架构选择

> 简述：实际项目中，可以选择认证系统自研，或者选择托管认证服务，两者各有优劣。

**知识树**

1. 认证系统自研的难度与复杂性

    - 需要实现与维护密码哈希、JWT、刷新令牌、角色权限、邮件验证、密码找回、账号锁定、社交登录、多端会话、暴力破解防护等一系列安全细节。
    - 每个环节都需关注安全漏洞和合规要求，开发测试成本高。

2. 托管认证服务的优势

    - 常用产品如 AWS Cognito、Firebase Authentication、Auth0 等，专业团队维护，功能完备且经过安全审计。
    - 支持注册、登录、登出、社交登录、邮箱验证、密码重置等全套流程，极大缩短开发周期。
    - 适合初创团队、MVP（ Minimum Viable Product ）、重速度和上线周期的项目，可专注于核心业务。

3. 托管服务的局限

    - 按用户量或认证次数计费，规模扩大后成本上升明显。
    - 定制化和极致权限控制需求难以满足。
    - 部分场景（如合规、本地部署、特殊安全策略）仍需自研方案。

4. 选型建议

    - 启动阶段、MVP、资源有限、追求快：优先选用托管认证服务。
    - 大型项目、定制化安全、成本可控、需全局掌控：可自研完整认证体系。
    - 掌握底层实现原理，有助于做出正确选型、评估第三方方案安全性与合理性。

# Project 订单 API

## 创建订单表结构

> 简述：初步设计订单 (`orders`) 与订单物品 (`order_items`) 两张数据表，并设置 UUID 主键、默认值、外键关系及唯一性约束。

**流程**

- 与创建购物车表结构类似，这里简单处理主键为自增
- 未设置管理删除，考虑后续历史表拓展
- 未加订单状态考虑后续拓展

**代码示例**

1. 创建订单和订单物品表结构 (`V4__add_order_tables.sql`)

    ```mysql
    create table orders
    (
        id          bigint auto_increment
            primary key,
        customer_id bigint                             not null,
        status      varchar(20)                        not null,
        created_at  datetime default current_timestamp not null,
        total_price decimal(10, 2)                     not null,
        constraint orders_users_id_fk
            foreign key (customer_id) references users (id)
    );

    create table order_items
    (
        id          bigint auto_increment
            primary key,
        order_id    bigint         not null,
        product_id  bigint         not null,
        unit_price  decimal(10, 2) not null,
        quantity    int            not null,
        total_price decimal(10, 2) not null,
        constraint order_items_orders_id_fk
            foreign key (order_id) references orders (id),
        constraint order_items_products_id_fk
            foreign key (product_id) references products (id)
    );
    ```

## 创建订单实体

> 简述：使用数据库优先（Database-first）开发方式，基于已有的数据表结构，快速生成 JPA 实体类，并优化实体代码，具体过程参考创建购物车实体

**代码示例**

1. `Order` 实体优化示例

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "orders")
    public class Order {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @ManyToOne
        @JoinColumn(name = "customer_id")
        private User customer;

        @Column(name = "status")
        @Enumerated(EnumType.STRING)
        private OrderStatus status;

        @Column(name = "created_at", insertable = false, updatable = false)
        private LocalDateTime createdAt;

        @Column(name = "total_price")
        private BigDecimal totalPrice;

        @OneToMany(mappedBy = "order")
        private Set<OrderItem> items = new LinkedHashSet<>();
    }
    ```

2. `OrderItem` 实体优化示例

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "order_items")
    public class OrderItem {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @ManyToOne
        @JoinColumn(name = "order_id")
        private Order order;

        @ManyToOne
        @JoinColumn(name = "product_id")
        private Product product;

        @Column(name = "unit_price")
        private BigDecimal unitPrice;

        @Column(name = "quantity")
        private Integer quantity;

        @Column(name = "total_price")
        private BigDecimal totalPrice;
    }
    ```

3. 订单状态枚举

    ```java
    public enum OrderStatus {
        PENDING,
        PAID,
        FAILED,
        CANCELED
    }
    ```

## 实现结账接口

> 简述：结账接口根据购物车生成订单，校验数据合法性，自动映射购物车项为订单项，保存后清空购物车，实现从购物到下单的完整流程。

**API**

1. Request Example

    ```json
    // POST /checkout

    {
    	"cartId": "45d901fc-bc68-4211-b126-6160d6010946"
    }
    ```

2. Response Example

    ```json
    // 200 OK

    {
    	"orderId": 100
    }
    ```

**知识树**

1. DTO 设计

    - 请求 DTO：`CheckoutRequest`（含非空校验的 `cartId`）。
    - 响应 DTO：`CheckoutResponse`（返回新订单主键）。

2. 核心业务流程

    1. 校验购物车是否存在、是否为空，否则返回 400（bad request）。
    2. 构造订单实体，包含当前用户、订单总价、订单状态、创建时间等。
    3. 遍历购物车项，手动转换为订单项，并补充字段（如单价）。
    4. 订单与订单项一体化持久化，利用级联和 `CascadeType.PERSIST`。
    5. 下单成功后清空购物车，防止重复下单。

3. 关联数据获取与服务抽象

    - 当前用户信息操作抽取为 AuthService 公共方法。
    - CartService、OrderRepository、UserRepository 分工清晰，解耦业务层。

4. 异常提示稍后处理

**代码示例**

1. CheckoutRequest 定义

    ```java
    @Data
    public class CheckoutRequest {
        @NotNull(message = "Cart ID is required.")
        private UUID cartId;
    }
    ```

2. CheckoutResponse 定义

    ```java
    @Data
    public class CheckoutResponse {
        private Long orderId;

        public CheckoutResponse(Long orderId) {
            this.orderId = orderId;
        }
    }
    ```

3. CheckoutController

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/checkout")
    public class CheckoutController {
        private final CartRepository cartRepository;
        private final AuthService authService;
        private final OrderRepository orderRepository;
        private final CartService cartService;

        @PostMapping
        public ResponseEntity<?> checkout(
                @Valid @RequestBody CheckoutRequest request
        ) {
            var cart = cartRepository.getCartWithItems(request.getCartId()).orElse(null);
            if (cart == null) {
                return ResponseEntity.badRequest().body(
                        Map.of("error", "Cart not found")
                );
            }

            if (cart.getItems().isEmpty()) {
                return ResponseEntity.badRequest().body(
                        Map.of("error", "Cart is empty")
                );
            }

            var order = new Order();
            order.setTotalPrice(cart.getTotalPrice());
            order.setStatus(OrderStatus.PENDING);
            order.setCustomer(authService.getCurrentUser());

            cart.getItems().forEach(item -> {
                var orderItem = new OrderItem();
                orderItem.setOrder(order);
                orderItem.setProduct(item.getProduct());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setTotalPrice(item.getTotalPrice());
                orderItem.setUnitPrice(item.getProduct().getPrice());
                order.getItems().add(orderItem);
            });

            orderRepository.save(order);

            cartService.clearCart(cart.getId());

            return ResponseEntity.ok(new CheckoutResponse(order.getId()));
        }
    }
    ```

4. OrderRepository

    ```java
    public interface OrderRepository extends JpaRepository<Order, Long> {
    }
    ```

5. AuthService

    ```java
    @AllArgsConstructor
    @Service
    public class AuthService {
        private final UserRepository userRepository;

        public User getCurrentUser() {
            var authentication = SecurityContextHolder.getContext().getAuthentication();
            var userId = (Long) authentication.getPrincipal();

            return userRepository.findById(userId).orElse(null);
        }
    }
    ```

6. 级联关系设置（持久化）

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "orders")
    public class Order {
    	// 省略

        @OneToMany(mappedBy = "order", cascade = CascadeType.PERSIST)
        private Set<OrderItem> items = new LinkedHashSet<>();
    }
    ```

    - 描述：设置 `cascade = CascadeType.PERSIST`，保证保存订单时，相关订单项一同持久化。

7. Postman 测试流程

    1. 登录获取 JWT，`POST /auth/login`

        ```json
        {
        	"email": "pang@example.com",
        	"password": "123456"
        }
        ```

        - 获取 token

    2. 新建购物车，`POST /carts`，设置 Header：`Authorization`: `Bearer {token}`
        - 拿到购物车 id
    3. 购物车添加商品，`POST /carts/购物车 UUID/items

        ```json
        {
        	"productId": "3"
        }
        ```

    4. 结算购物车，`POST /checkout`
    5. 查看数据库数据状态

## 使用 Postman 组织 API 测试

> 简述：Postman Collections 通过分组、变量和脚本自动化请求，提升接口测试效率，支持流程化用例复现、数据传递与大规模自动化测试。

**知识树**

1. 分组

    - 使用 Collection 功能对接口请求进行分组保存，便于管理和复用。
    - 需要按业务模块（如 Auth、Cart、Order）细分为不同文件夹，保持逻辑清晰。

2. 变量自动注入

    - 通过脚本自动提取响应数据并设置变量（如登录后自动保存 token）。
    - 使用 Collection Variables 统一维护 accessToken、cartId 等关键参数，实现请求间数据共享。
    - 使用`{{变量}}`在 url、请求体，请求头等各个位置替魔法字符串

3. 脚本与参数化

    - 支持用数据文件（JSON/CSV）实现批量参数化测试，如批量添加商品到购物车。
    - 入口：点击 Collections 定义的集合名称，点金 RUN 按钮进入

4. 批量执行与流程串联

    - 利用 Collection Runner 或 Flow 等高级功能，实现接口的串联批量测试和自动化用例执行。

**代码示例**

1. 登录响应后自动保存 token 到变量

    ```javascript
    var json = pm.response.json();
    // console.log(json);
    pm.collectionVariables.set("accessToken", json.token);
    // console.log(pm.collectionVariables.get("accessToken"))
    ```

    - 描述：在 `/auth/login` 登陆请求，`Script`栏，`Post-response`处，写入代码，将 `token`存储到`accessToken`变量中

2. 创建购物车响应后保存 cartId

    ```javascript
    var json = pm.response.json();
    // console.log(json);
    pm.collectionVariables.set("cartId", json.id);
    ```

    - 描述：在 `/carts` 创建购物车请求，`Script`栏，`Post-response`处，写入代码，将 购物车的 UUID 存储到 `cartId`变量中

3. 添加商品到购物车，自动引用 cartId

    ```
    http://localhost:8080/carts/{{cartId}}/items
    ```

    - 描述：通过`{{}}`使用变量

4. 结账接口，自动使用 accessToken，cartId

    ```json
    // Header设置
    // Authorization Bearer {{accessToken}}

    {
    	"cartId": "{{cartId}}"
    }
    ```

    - 描述：通过`{{}}`使用变量，json 中输入时不会自动补全需要手动输入

5. 变量自动注入测试

    ```json
    // src/test/data/products.json
    [
    	{ "productId": 1 },
    	{ "productId": 2 },
    	{ "productId": 2 },
    	{ "productId": 3 }
    ]

    // http://localhost:8080/carts/{{cartId}}/items 下 Body
    {
        "productId":"{{productId}}"
    }
    ```

    - 描述：创建`src/test/data/products.json`，设置` "productId":"{{productId}}"`。点击集合选择 Run 按钮，勾选需要使用的 API，选择循环次数和文件，使用 `Use locally` 即可，通过 Collection Runner 批量添加多商品，实现自动化用例回放。

6. 检索购物车内容并验证结果

    ```
    // GET /carts/{{cartId}}
    ```

    - 可配合变量自动串联请求，便于断言购物车商品数量。

## 全局异常处理与统一错误响应

> 简述：通过全局异常处理器规范 API 错误响应格式，实现错误信息的结构化和统一，提升前后端协作体验与接口可维护性。

**知识树**

1. 问题背景

    - 请求体为空或参数格式错误（如 `cartId` 非法）时，系统抛出 `HttpMessageNotReadableException`，默认响应 401/500，不符合语义，应返回 400 Bad Request。
    - 系统对错误响应字段命名进行了硬编码，可能会出现不一致（如 `error`、`errors`）的情况，易导致前端解析混乱与拼写错误。

2. 全局异常处理机制

    - 使用 `@RestControllerAdvice` 实现全局异常捕获 `HttpMessageNotReadableException`，返回标准化响应。

3. 标准错误 DTO

    - 新建 ErrorDto，统一封装错误信息，避免到处硬编码 `Map.of("error", ...)`，减少重复与潜在拼写错误。

**代码示例**

1. 错误响应 DTO

    ```java
    @AllArgsConstructor
    @Data
    public class ErrorDto {
        private String error;
    }
    ```

2. 全局异常处理

    ```java
    @ControllerAdvice
    public class GlobalExceptionHandler {
        @ExceptionHandler(HttpMessageNotReadableException.class)
        public ResponseEntity<ErrorDto> handleUnreadableMessage() {
            return ResponseEntity.badRequest().body(
                    new ErrorDto("Invalid request body")
            );
        }

    	// 省略
    }
    ```

3. 控制器中统一返回错误 DTO

    ```java
    @AllArgsConstructor
    @RestController
    @RequestMapping("/checkout")
    public class CheckoutController {
    	// 省略

        @PostMapping
        public ResponseEntity<?> checkout(
                @Valid @RequestBody CheckoutRequest request
        ) {
            var cart = cartRepository.getCartWithItems(request.getCartId()).orElse(null);
            if (cart == null) {
                return ResponseEntity.badRequest().body(
                        new ErrorDto("Cart not found")
                );
            }

            if (cart.getItems().isEmpty()) {
                return ResponseEntity.badRequest().body(
                        new ErrorDto("Cart is empty")
                );
            }

    		// 省略
    	}
    }
    ```

## 信息专家原则

> 简述：将复杂业务逻辑下沉到领域实体，由实体本身负责数据聚合和不变性约束，控制器只负责请求校验与流程编排，提升系统的可维护性和一致性。

**知识树**

1. 信息专家原则（Information Expert Principle）

    - 业务逻辑应由最了解数据的对象负责，实现高内聚、低耦合。
    - 领域模型（如 Order）应聚合与自身强相关的行为和规则。

2. 控制器职责单一化

    - 控制器仅负责协议转换、请求校验、调用领域服务或实体，无需承载对象映射与业务细节。
    - 业务流程的原子性和约束交由实体层封装。

3. 静态工厂方法模式

    - 通过 `Order.fromCart(Cart cart, User customer)` 工厂方法，将购物车转换为订单，实现构建过程的封装与约束。
    - 保证领域对象的完整性与一致性。

4. 构造器注入与对象聚合

    - `OrderItem` 通过带参构造方法完成字段赋值，确保对象创建的原子性和语义清晰。
    - 领域实体不依赖 Controller/Service，参数通过方法入参传递，保证代码方向自上而下。

**代码示例**

1. 控制器简化流程，聚焦数据流转

    ```java
    @RestController
    @RequestMapping("/checkout")
    public class CheckoutController {
        private final CartRepository cartRepository;
        private final AuthService authService;
        private final OrderRepository orderRepository;
        private final CartService cartService;

        @PostMapping
        public ResponseEntity<?> checkout(
                @Valid @RequestBody CheckoutRequest request
        ) {
            var cart = cartRepository.getCartWithItems(request.getCartId()).orElse(null);
            if (cart == null) {
                return ResponseEntity.badRequest().body(
                        new ErrorDto("Cart not found")
                );
            }

            if (cart.getItems().isEmpty()) {
                return ResponseEntity.badRequest().body(
                        new ErrorDto("Cart is empty")
                );
            }

            // 去掉了复杂的订单构造过程，将其封装进对象实体本身
            var order = Order.fromCart(cart, authService.getCurrentUser());

            orderRepository.save(order);

            cartService.clearCart(cart.getId());

            return ResponseEntity.ok(new CheckoutResponse(order.getId()));
        }
    }
    ```

    - 描述：所有对象聚合与映射已转移至领域模型，控制器仅处理校验和数据流转。

2. Order 工厂方法与对象聚合

    ```java
    @Getter
    @Setter
    @Entity
    @Table(name = "orders")
    public class Order {
    	// 省略

        public static Order fromCart(Cart cart, User customer) {
            var order = new Order();
            order.setCustomer(customer);
            order.setStatus(OrderStatus.PENDING);
            order.setTotalPrice(cart.getTotalPrice());

            cart.getItems().forEach(item -> {
                var orderItem = new OrderItem(order, item.getProduct(), item.getQuantity());
                order.items.add(orderItem);
            });

            return order;
        }
    }
    ```

3. OrderItem 构造函数与字段注入

    ```java
    @NoArgsConstructor
    @Getter
    @Setter
    @Entity
    @Table(name = "order_items")
    public class OrderItem {
    	// 省略

        public OrderItem(Order order, Product product, Integer quantity) {
            this.order = order;
            this.product = product;
            this.quantity = quantity;
            this.unitPrice = product.getPrice();
            this.totalPrice = unitPrice.multiply(BigDecimal.valueOf(quantity));
        }
    }
    ```
