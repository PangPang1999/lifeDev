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

    - 修改 pom.xml 中的 JDK 版本，SpringBoot 版本，与先前一致（建议）
    - 修改 pom.xml、application.yaml 中的数据库配置
    - 修改 V1\_\_initial_migration.sql，将两个 TINYINT 修改为 BIGINT

3. 数据库

    - 通过 flyway 插件运行脚本
    - 连接数据库

# Spring MVC

## Web 工作原理

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
