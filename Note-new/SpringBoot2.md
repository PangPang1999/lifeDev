Introduction to Spring MVC
Building RESTful APls
Validating API Requests
Project: Building the Shopping Cart API
Securing APls with Spring Security
Project: Building the Checkout and Order APls
Payment Processing with Stripe
Deployment

# 待补充

1.

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

## 对象映射 MapStruct

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

    - `@JsonIgnore`：排除字段，不参与序列化和反序列化。
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

## 查询参数与排序

> 简述：查询参数（Query Parameter）使前端可通过 URL 动态传递过滤、排序等条件，后端利用 `@RequestParam` 获取参数，实现接口灵活性和可定制化的数据排序。

**知识树**

1. 查询参数机制

    - 查询参数以 `key=value` 形式追加于 URL 问号（?）之后，支持多个参数（用 & 连接），如 `/users?sort=name&page=1`。
    - 常用于前端自定义筛选、排序、分页等功能。

2. `@RequestParam` 注解

    - 用于 Controller 方法参数，自动映射 URL 查询参数。支持参数类型自动转换。
    - 关键参数说明：
        - `required=false`：非必需参数，接口更健壮。
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
