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
