# Start

## 开发环境

> **简述**：在开始学习 Java 之前，需要搭建一个合适的开发环境。安装 JDK8 版本，IDEA 最新版本

**知识树**

1. 安装 Java
    1. 安装 `homebrew`
        ```bash
        brew install --cask zulu@8
        ```
    2. 配置 Java 环境变量，host 目录下，在`.zprofile` 中添加以下代码
        ```bash
        export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
        export PATH=$JAVA_HOME/bin:$PATH
        ```
    3. 刷新
        ```bash
        source ~/.zprofile
        ```
    4. 验证
        ```bash
        java -version
        javac -version
        ```
2. 安装 IDEA
    - 官网：https://code.visualstudio.com/Download

## Java 程序结构

> **简述**：Java 程序的基本结构以类和方法为核心。方法是用于执行特定任务的代码块，类是用于组织代码的容器。

**知识树**

1. 方法
    - 概念：属于类内的函数，执行特定任务
    - 种类：
        - 有返回值：...
        - 无返回值：`void`关键字声明
    - 构成：返回类型、方法名、参数列表、方法体
2. Main 方法
    - 概念：Java 程序的入口点，执行程序时，其内的代码自动执行
3. 类
    - 概念：方法的容器，能容纳一个或者多个方法，每个 Java 程序至少需要有一个带有 Main 方法的 Class

**（伪）代码示例**

1. 方法

    - 有返回值类型
        ```java
        ReturnType Name() {
        	...
        }
        ```

2. **类 (Class)**
    - 使用关键字 `class` 声明
    - 一个类包含多个相关的方法
    - 命名遵循帕斯卡命名法（每个单词首字母大写）
3. **方法 (Method)**
    - 属于类内的函数，执行特定任务
    - 由返回类型、方法名、参数列表、方法体组成
    - 命名遵循驼峰命名法（首单词首字母小写，其余单词首字母大写）
4. **main 方法**
    - Java 程序的入口点，执行程序时自动调用
    - 固定写法：`public static void main(String[] args)`
    - `void`表示无返回值，`static`表示无需实例化类即可调用
5. **访问修饰符 (Access Modifier)**
    - 控制类与方法的访问权限
    - 常见类型：
        - `public`：公开访问
        - `private`：仅在类内部访问
6. **方法返回类型**
    - 方法执行后返回的值的数据类型
    - 若无返回值，使用关键字 `void`
7. **方法参数 (Parameters)**
    - 方法执行时传入的值，用于方法内部逻辑
    - 定义在方法名后的括号中

**代码示例**

1. 类定义与 main 方法

```java
public class Main {
    public static void main(String[] args) {
    }
}
```

2. 普通方法示例

```java
public class EmailSender {
    // 发送邮件的方法
    public void sendEmail(String receiver, String subject, String content) {
    }
}
```

- 方法清晰地描述功能并使用合适的参数
