Introduction to Spring MVC
Building RESTful APls
Validating API Requests
Project: Building the Shopping Cart API
Securing APls with Spring Security
Project: Building the Checkout and Order APls
Payment Processing with Stripe
Deployment

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
