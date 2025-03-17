# Start

## 开发环境

> 简述：搭建 Java 开发环境需安装 JDK（推荐 JDK8）和 IDEA，配置环境变量后进行验证。

**知识树**

1. 安装 Java（JDK8）
    - 使用 Homebrew 安装 JDK：
        ```bash
        brew install --cask zulu@8
        ```
    2. 配置 Java 环境变量，host 目录下，在`.zprofile` 中添加以下代码
        ```bash
        export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
        export PATH=$JAVA_HOME/bin:$PATH
        ```
    - 刷新环境变量：
        ```bash
        source ~/.zprofile
        ```
    - 验证安装：
        ```bash
        java -version
        javac -version
        ```
2. 安装 IDEA
    - 国内官网：https://www.jetbrains.com.cn

## Java 程序结构

> 简述：Java 程序的基本结构以类和方法为核心。方法是用于执行特定任务的代码块，类是用于组织代码的容器。

**知识树**

2. 方法 (`Method`)
    - 概念：定义特定任务的代码片段，必须存在于类中。
    - 分类：
        - 有返回值：方法必须定义返回类型，方法执行后需返回对应类型的值。
        - 无返回值：方法返回类型声明为`void`，无需返回数据。
    - 结构：
        - 返回类型：指定数据类型或`void`
        - 方法名：camel 命名（如`sendMessage`）
        - 参数列表：定义方法的输入
        - 方法体：实现具体逻辑
3. Main 方法
    - 概念：程序启动的入口，执行程序时首先执行`main`内的代码。
4. 类 (`Class`)
    - 概念：方法的容器，组织代码结构，每个 Java 程序至少需要有一个带有 main 方法的类。
    - 结构：
        - `class` 关键字
        - 类名：Pascal 命名（如`MyClass`）
        - 类体：大括号 `{}` 内定义方法或变量
5. 修饰符 (`Modifier`)
    - 每个类和方法都有自己的修饰符，控制类或方法的访问权限，常用为`public`（公开访问）。
6. 命名规范
    - 类名：Pascal 命名法（如`MyClass`）
    - 方法名：camel 命名法（如`sendMessage`）

**（伪）代码示例**

1. 方法
    - 有返回值类型
        ```java
        ReturnType Name() {
        	...
        }
        ```
    - 无返回类型
        ```java
        void sendMessage() {// 这里参数暂时不展示：如信息内容，收件人...
            ...
        }
        ```
2. `main`方法
    ```java
    void main() {
    	...
    }
    ```
3. 类
    ```java
    Class Main{
    	void main() {
    		...
    	}
    }
    ```
4. 修饰符
    ```java
    public class Main{
    	public void main() {
    		...
    	}
    }
    ```
    - 这是 java 程序的基本构成（伪代码）

## 第一个程序

> 简述：Java 程序通过 类 组织代码，`main` 方法作为程序入口，`System.out.println` 用于输出文本。IDEA 提供高效的开发环境，包 (`package`) 用于管理类。

**知识树**

1. 构建项目
    - 使用 IDEA 新建项目
    - 项目名称：建议设置为 `HelloWorld`
    - 包名：建议设置为 `com.pang`，通常使用公司域名倒序。
    - `src` 目录：存放源代码 (`source`)
2. `Main.java`：
    - `.java`：Java 文件的后缀
    - `package`：每个文件上面都有包地址，代表类属于哪个包。
    - `;`：Java 程序中，每一个声明之后都需要有`;`
    - `static`：后续再学习，这里只需要记住，每一个 `main` 方法都需要使用 `static` 修饰
    - `String[] args`：接收参数。
    - `//`：代表单行注释
3. `System.out.println("Hello World!")`
    - `System`：属于`java.lang` 类
    - `out`：属于`java.lang`类中的 `field`，`field`后续再学习，输入`out`后，可以看到提示栏右侧的 `PrintStream` ，这是另外一个类。
    - `printlin`：属于 `PrintStream` 中的一个方法
    - `" "`：文本数据比如`Hello World`，需要使用`""`将其包裹
4. 快捷键
    - control+R 运行程序
    - psvm 输出语句

**代码示例**

1.  Main.java
    ```java
    package com.pang;
    public class Main {
    	public static void main(String[] args) {
    		System.out.println("Hello World!");
    	}
    }
    ```

## 执行过程

> 简述：Java 程序的执行分为 编译（Compilation） 和 运行（Execution） 两个阶段。Java 代码首先由 Java 编译器 转换为 字节码（Bytecode），然后由 Java 虚拟机（JVM） 解释并转换为底层操作系统可执行的机器码，使 Java 具备跨平台能力。

**知识树**

1. 编译（Compilation）
    - 概念：Java 代码需要转换为 字节码（`.class` 文件） 才能执行。
    - 工具：`javac`（Java 编译器），随 JDK（Java Development Kit） 提供。
    - 过程：
        1. 使用 `javac` 命令编译 `.java` 文件。
        2. 生成 字节码（`.class` 文件），可在任何支持 Java 的环境下运行。
2. 字节码（Bytecode）
    - 概念：Java 代码编译后形成的 中间代码，不是机器码。
    - 特点：
        - 平台无关：可在 Windows、macOS、Linux 等系统运行。
        - 需由 JVM 解析执行。
3. 运行（Execution）
    - 概念：JVM 将 字节码 转换为 本地机器码，执行 Java 程序。
    - Java 虚拟机（JVM）：解释/编译 Java 字节码，使其可在不同操作系统运行。
4. 手动编译与运行 Java 程序
    1. 编译：
        - 右击 `Main.java` 文件，点击在终端中打开
        - 使用 `javac` 编译 Java 文件，生成 `Main.class`（字节码文件）。
            ```sh
            javac Main.java
            ```
        - 终端输入 ls，能看到最初的 `Main.java` 文件以及生成的 `Main.class` 文件
    2. 运行：
        - 终端输入两次`cd ..`来到 com 的父级目录
        - 使用 `java` 命令执行字节码， JVM 解析字节码，转换为机器码并运行。这里的路径与最初的包名有关，这里的 `Main` 指的是编译后生成的 `class` 文件
            ```sh
            java com.pang.Main
            ```
        - 输出 `Hello, World!`。

## Java 历史

> 简述：Java 由 James Gosling 及其团队于 1991 年在 Sun Microsystems 公司开发，最初名为 Oak（橡树），后更名为 Green，最终定名为 Java，灵感来源于 Java 咖啡。Java 于 1995 年正式发布，凭借其 “一次编写，处处运行”（Write Once, Run Anywhere, WORA）的跨平台特性迅速流行。
> 2010 年，Oracle 收购 Sun Microsystems，Java 进入 Oracle 生态。Java 被广泛应用于 Web 开发、企业级系统、移动应用（Android）、云计算、嵌入式系统 等领域，是全球最受欢迎的编程语言之一。

# Type

## 变量与变量命名

> 简述：变量是用于动态存储数据的内存空间标识符，Java 中每个变量必须声明明确的数据类型，并遵循 camelCase 命名规范。

**知识树**

1. 变量基础
    - 变量：内存中存储数据的单元
    - 声明：指定数据类型和名称
    - 初始化：首次赋值
    - 顺序：先声明，再赋值，赋值之后才能使用，可以声明时同时赋值
2. 变量声明和赋值
    - 格式：`数据类型 变量名 = 值;`
3. 变量值的修改与复制
    - 修改变量值：可重新赋值
    - 变量间赋值：复制变量值
4. 命名规范
    - 标识符规则：字母、数字、`_`、`$`，不以数字开头，不用关键字，区分大小写
    - 驼峰命名法：如 `myAge`
    - 推荐单行单变量声明
    - 最佳实践：变量名应具有描述性

**代码示例**

1. 变量赋值与修改
    ```java
    int age = 30;
    age = 35; // 修改
    int newAge = age; // 复制
    ```

## 基本类型

> 简述：Java 中的数据类型分为基本数据类型（primitive types）和引用数据类型（reference types）。基本数据类型用于存储简单的数值，而引用数据类型用于存储复杂对象。
> 这一节先介绍基本类型

**知识树**

1. 基本数据类型分类
    - 整数类型：`byte`(1 字节)、`short`(2 字节)、`int`(4 字节)、`long`(8 字节)
    - 浮点类型：`float`(4 字节，后缀`F`)、`double`(8 字节，默认浮点类型)
    - 字符类型：`char`(2 字节，单字符，使用单引号 `''`)
    - 布尔类型：`boolean`(1 bit，仅存储`true`或`false`)
2. 字节：
    - 1 字节：范围：-128 ~ 127
    - 2 字节：范围：-32,768 ~ 32,767
    - 4 字节：范围：-2³¹ ~ 2³¹-1，约正负 21 亿
3. 数字字面量
    - 支持下划线`_`增加可读性

**代码示例**

1. 各类型声明
    ```java
    int total = 1000;
    long largeNum = 10_000L;
    float pi = 3.14F;
    double precisePi = 3.14159265359;
    char letter = 'A';
    boolean flag = true;
    ```

## 引用类型

> 简述：引用类型存储对象的地址，需用`new`创建对象，内存自动由 JRE 管理。

**知识树**

1. 引用类型定义
    - 除基本类型外的数据类型
2. 内存管理
    - 引用类型：用`new`分配内存，JRE 自动释放
    - JRE：`Java Runtime Environment`，即 Java 运行环境
3. 声明方式
    - 格式：`类名 对象名 = new 类名();`
4. 自动导包
    - IDEA 自动导入包，解决类重名冲突需手动指定完整路径

**代码示例**

1. 引用类型示例

    ```java
    import java.util.Date;

    Date now = new Date();
    System.out.println(now);
    ```

## 基本类型 vs 引用类型

> 简述：基本类型存储实际值，各自独立；引用类型存储地址，多个引用共享对象状态，修改会互相影响。

**知识树**

1. 存储方式对比
    - 基本类型：直接存储值，复制互不影响
    - 引用类型：存储对象地址，复制后共享对象
2. 内存分配
    - 基本类型：自动分配
    - 引用类型：通过`new`分配

**代码示例**

1. 类型复制比较

    ```java
    int x = 10;
    int y = x;
    x = 20;
    System.out.println(y); // 输出10

    Point p1 = new Point(10, 20);
    Point p2 = p1;
    p1.x = 30;
    System.out.println(p2.x); // 输出30
    ```

## 字符串

> 简述：字符串表示字符的序列，是 Java 中常用的引用类型。虽然初始化时可用字面量直接赋值，看似与基本类型类似，但它本质上是一个对象，其方法调用会返回新对象而非修改原字符串。

**知识树**

1. 字符串概念

    - 字符串是由字符组成的序列
    - 本质上是 Java.lang 包下的 String 类的对象

2. 字符串初始化

    - 字面量方式：直接赋值，如 `"Hello World"`
    - 对象方式：使用 `new String("...")`（通常多余）

3. 字符串常用操作

    - 拼接：使用 `+` 运算符将多个字符串合并
    - 判断：使用 `startsWith` 和 `endsWith` 检查字符串前后缀
    - 长度：调用 `length()` 方法获取字符数
    - 查找：利用 `indexOf()` 定位子串或字符首次出现位置（索引从 0 开始）
    - 替换：通过 `replace()` 方法返回替换后的新字符串
    - 大小写转换：使用 `toLowerCase()` 和 `toUpperCase()`
    - 去除空白：用 `trim()` 删除首尾多余空格

4. 字符串不可变性
    - 创建后不可修改，所有改变操作均返回新字符串
    - 有助于线程安全及内存管理

**代码示例**

1. 字符串初始化与赋值

    ```java
    // 字面量方式初始化，推荐用法
    String message = "Hello World";

    // 使用 new 关键字（冗余）
    String message2 = new String("Hello World");
    ```

    - 使用字面量时，不需要手动导入，Java 自动处理

2. 字符串常用方法演示

    ```java
    String message = "  Hello World!";

    // 拼接字符串
    String result = message + " Welcome!";

    // 检查是否以感叹号结尾
    boolean endsWithExclamation = message.endsWith("!");

    // 获取字符串长度
    int len = message.length();

    // 查找字符 'o' 的位置
    int index = message.indexOf("o");

    // 替换感叹号为星号
    String replaced = message.replace("!", "*");

    // 转换为小写
    String lower = message.toLowerCase();

    // 去除首尾空格（假设 message 包含多余空白）
    String trimmed = message.trim();

    System.out.println(result);              // 输出 result
    System.out.println(endsWithExclamation); // 输出 true
    System.out.println(len);                 // 输出字符总数
    System.out.println(index);               // 输出 'o' 的索引
    System.out.println(replaced);            // 输出替换后的字符串
    System.out.println(lower);               // 输出全小写字符串
    System.out.println(trimmed);             // 输出去除前后空白的字符串
    System.out.println(message + "<- origin");
    ```

    - 每个方法调用均返回一个新字符串，原字符串不变
