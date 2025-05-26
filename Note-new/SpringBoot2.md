Introduction to Spring MVC
Building RESTful APls
Validating API Requests
Project: Building the Shopping Cart API
Securing APls with Spring Security
Project: Building the Checkout and Order APls
Payment Processing with Stripe
Deployment

## 技巧

### 查询加速

1. UUID 主键设计（可提升查询性能 20-50%）

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
        return ResponseEntity.noContent().build();
        ```

4. 400 Bad Request

    - 含义：请求参数有误或格式不正确，服务器无法处理该请求。常见于参数校验失败或格式错误等。
    - 示例：如购物车添加商品时，商品 ID 不存在或格式错误。
    - 返回方式示例：

        ```java
        return ResponseEntity.badRequest().build();
        ```

5. 404 Not Found

    - 含义：请求资源不存在，常用于路径错误或指定资源 ID 不存在等场景。
    - 返回方式示例：
        ```java
        return ResponseEntity.notFound().build();
        ```

6. 401 Unauthorized

    - 含义：未认证。请求缺少有效身份认证（如未登录或 token 失效），需先进行认证。
    - 返回方式示例：
        ```java
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        ```

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

3. 校验触发与响应

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
        private Set<CartItem> cartItems = new LinkedHashSet<>();
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

1. DTO 设计与初始化

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

1. DTO 设计与响应建模

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
            var cart = cartRepository.findById(cartId).orElse(null);

            if (cart == null) {
                return ResponseEntity.notFound().build();
            }

            var product = productRepository.findById(request.getProductId()).orElse(null);
            if (product == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            var cartItem = cart.getCartItems()
                    .stream().
                    filter(item -> item.getProduct().getId().equals(product.getId()))
                    .findFirst().orElse(null);

            if (cartItem == null) {
                cartItem = new CartItem();
                cartItem.setProduct(product);
                cartItem.setQuantity(1);
                cartItem.setCart(cart);
                cart.getCartItems().add(cartItem);
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

5. PostMan 测试

    ```json
    {
    	"productId": "7"
    }
    ```

    - 描述：查询数据库，拷贝购物车 UUID，访问 http://localhost:8080/carts/uuid/items 尝试添加购物车
