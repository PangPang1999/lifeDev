# 特质

- 在类中进行二次参数校验，不必每一次创建实例都进行数据校验
    - 与之而来的是，在创建构造函数时，不使用传统的`this.prop = prop`，而是直接在构造函数中调用 set 方法

# 新特性

- var——JDK10
    - 自动推断变量类型，避免显式声明数据类型，使代码更简洁。
    - 仅用于局部变量（方法内部），不能用于字段、方法参数或返回值。
- List.of()——JDK9
    - 快速创建不可变列表（列表内容不能修改）。
    - 避免 Arrays.asList() 的缺陷（Arrays.asList() 支持修改元素，但不能调整大小）。
    - 比 new ArrayList<>() 代码更简洁。

# 快捷键

- 高级

    - 提取方法到类: Control + T
        1. 方式一：光标放在在方法名上，Control + T，输入包名和类名并设置好修饰符回车
        2. 方式二：选取代码，Control + T，相较于方式一，默认为统计目录下包名
        3. 方式三：选取代码——置顶菜单 Refactor——Refactor This——Refactor De..... ——输入新类名，调整修饰符——OK（这种方式会自动修改关联代码，安全）
    - 实例成员转静态成员： Control + T ，选择变量，control+t——Introduce Field...——回车
    - 静态方法转实例方法：选中方法——置顶菜单 Refactor——Convert To Instance Method
    - 安全修改参数：Control + T ，选择方法，control+t——Change Signature...——修改参数——确认

    - 提取方法: Commond+option+M （强 👍）： 选取代码——置顶菜单 Refactor——Extract/Introduce——Method，提取方法默认为 private

    - 类中批量管理字段: 选中类的字段，右键 Refactor——Encapsulate Field，该方式生成的 set/get 也为 public

- 基础

    - `Common+B` 快速跳转
    - 同步修改多个语句: shift+F6（额外按住左下角的 🌍）
    - 切换文件：control+tab
    - 上下移动代码：option+shift+上下
    - 运行程序: control+R
    - 调试程序: control+D
    - 复制粘贴所在行: Commond+D
    - 生成 set/get 等: Commond+N，，默认为 public
    - 输出语句: psvm
    - 注释：command+/

# Note

需要补充：

- ~~字符串池、变量作用域~~
- 构造函数的 super
    1.  **自动调用父类构造函数**  
        如果你的构造函数中没有显式调用父类构造函数（即用 super(...)），编译器会在构造函数的第一行自动插入一个 super()调用，这个调用会调用父类的无参构造函数。如果父类没有无参构造函数，就必须手动调用父类的其他构造函数，否则会报错。
    2.  **初始化成员变量**  
        默认构造函数有时会在成员变量声明时使用初始化表达式进行初始化，而你自己写的带参数构造函数如果没有做额外的初始化，成员变量就会保持它们的默认值。确保你在构造函数中对必要的变量进行了正确的初始化。

# 异常

## 异常处理概述

> 简述：异常是程序中错误事件的标志，Java 使用异常机制来处理这些错误。在异常发生时，程序会抛出一个异常对象，包含错误信息并帮助开发者定位问题。通过适当的异常处理，我们能够更好地控制程序的流程和错误。

**知识树**

1. 异常的基本概念

    - 异常是程序运行过程中发生的错误事件。
    - 异常在 Java 中是通过`Throwable`类及其子类（如`Exception`和`Error`）来表示的。

2. 异常的种类

    - **检查异常（Checked Exception）**：编译时必须处理的异常，通常是程序外部原因导致的错误，例如`IOException`。
    - **非检查异常（Unchecked Exception）**：运行时错误，通常由程序内部逻辑错误导致，例如`NullPointerException`、`ArrayIndexOutOfBoundsException`。
    - **Error**：表示严重问题，通常不能恢复的错误，如`OutOfMemoryError`。

3. 异常的堆栈跟踪

    - 异常发生时，Java 会生成堆栈跟踪（stack trace），显示异常发生的调用链。
    - 堆栈跟踪帮助开发者定位代码中的错误来源。

4. 异常处理机制
    - **throwing**：当异常发生时，方法会抛出异常，告知调用者发生了什么问题。
    - **handling**：调用者通过`try-catch`块捕获并处理异常，防止程序崩溃。

**代码示例**

1. **NullPointerException 示例**

    ```java
    package exceptions;

    public class ExceptionsDemo {
        public static void show() {
            sayHello(null);  // 传递 null，触发 NullPointerException
        }

        public static void sayHello(String name) {
            System.out.println(name.toUpperCase());  // 抛出异常
        }

        public static void main(String[] args) {
            ExceptionsDemo.show();  // 调用示例方法
        }
    }
    ```

    - 描述：当`null`传递给`sayHello`方法时，调用`toUpperCase()`会抛出`NullPointerException`。

2. **堆栈跟踪输出示例**

    ```
    Exception in thread "main" java.lang.NullPointerException
        at exceptions.ExceptionsDemo.sayHello(ExceptionsDemo.java:9)
        at exceptions.ExceptionsDemo.show(ExceptionsDemo.java:5)
        at exceptions.ExceptionsDemo.main(ExceptionsDemo.java:13)
    ```

    - 描述：堆栈跟踪显示了异常发生的具体位置，帮助开发者快速定位错误。

3. **处理异常示例**

    ```java
    package exceptions;

    public class ExceptionsDemo {
        public static void show() {
            try {
                sayHello(null);  // 捕获 NullPointerException
            } catch (NullPointerException e) {
                System.out.println("Caught exception: " + e.getMessage());
            }
        }

        public static void sayHello(String name) {
            if (name == null) {
                throw new NullPointerException("Name cannot be null");
            }
            System.out.println(name.toUpperCase());
        }

        public static void main(String[] args) {
            ExceptionsDemo.show();  // 调用示例方法，处理异常
        }
    }
    ```

    - 描述：使用`try-catch`块捕获并处理`NullPointerException`，防止程序崩溃，并打印自定义错误信息。

# Start

## 开发环境

> 简述：搭建 Java 开发环境需安装 JDK 和 IDEA，配置环境变量后进行验证。这里使用的语言级别是 JDK12，使用的 JDK 版本是 17（持久版本）

**知识树**

1. 安装 Java（JDK17）

    - 使用 Homebrew 安装 JDK
        ```bash
        brew install --cask zulu@17
        ```
    - 配置 Java 环境变量，host 目录下，在`.zprofile` 中添加以下代码
        ```bash
        export JAVA_HOME=$(/usr/libexec/java_home -v 17)
        export PATH=$JAVA_HOME/bin:$PATH
        ```
        - `Command + Shift + .`显示隐藏文件
    - 刷新环境变量：
        ```bash
        source ~/.zprofile
        ```
    - 验证安装：
        ```bash
        java -version
        javac -version
        ```
    - 若使用 JDK8
        - 将按照命令中的`@17`替换为`@8`，将配置环境变量命令中的`17`替换为 `1.8`（Java 8 在内部版本号上仍然用 `1.8` 来表示）

2. 安装 IDEA

    - 国内官网：https://www.jetbrains.com.cn

## Java 程序结构

> 简述：Java 程序的基本结构以类和方法为核心。方法是用于执行特定任务的代码块，类是用于组织代码的容器。

**知识树**

1. 方法 (`Method`)

    - 概念：定义特定任务的代码片段，必须存在于类中。
    - 分类：
        - 有返回值：方法必须定义返回类型，方法执行后需返回对应类型的值。
        - 无返回值：方法返回类型声明为`void`，无需返回数据。
    - 结构：
        - 返回类型：指定数据类型或`void`
        - 方法名：camel 命名（如`sendMessage`）
        - 参数列表：定义方法的输入
        - 方法体：实现具体逻辑

2. `main` 方法

    - 概念：程序启动的入口，执行程序时首先执行`main`内的代码。

3. 类 (`Class`)

    - 概念：方法的容器，组织代码结构，每个 Java 程序至少需要有一个带有 main 方法的类。
    - 结构：
        - `class` 关键字
        - 类名：Pascal 命名（如`MyClass`）
        - 类体：大括号 `{}` 内定义方法或变量

4. 修饰符 (`Modifier`)

    - 每个类和方法都有自己的修饰符，控制类或方法的访问权限，常用为`public`（公开访问）。

5. 命名规范

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

> 简述：Java 程序通过 类 组织代码，`main` 方法作为程序入口。IDEA 提供高效的开发环境，使用包 (`package`) 管理类。

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
    - `String[] args`：用于接收在命令行中运行程序时传递的参数。将在下一节讲述。
    - `//`：代表单行注释

3. `System.out.println("Hello World!")`

    - `System`：属于`java.lang` 类
    - `out`：属于`java.lang`类中的 `field`，`field`后续再学习，输入`out`后，可以看到提示栏右侧的 `PrintStream` ，这是另外一个类。
    - `printlin`：属于 `PrintStream` 中的一个方法
    - `" "`：文本数据比如`Hello World`，需要使用`""`将其包裹

4. 启动按钮

    - 在编译器中的启动，其实是一个编译加执行的步骤，将在下一节讲述

5. 快捷键

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

> 简述：Java 程序运行分为两大阶段：编译（Compilation）和运行（Execution）。在编译阶段，源代码被转换为平台无关的字节码（Bytecode）；在运行阶段，Java 虚拟机（JVM） 将字节码转换为当前平台的机器码执行程序，从而实现跨平台特性。

**知识树**

1. 编译（Compilation）

    - 概念：将 Java 源代码转换为字节码（`.class` 文件）。
    - 工具：`javac`（Java 编译器），随 JDK（Java Development Kit） 提供。
    - 过程：
        1. 使用 `javac` 编译 `.java` 文件。
        2. 生成字节码文件，可在任何支持 JVM 的平台上运行。

2. 字节码（Bytecode）

    - 概念：Java 编译后生成的中间代码，不是直接的机器码。
    - 特点：
        - 平台无关：可在 Windows、macOS、Linux 等系统运行。
        - 需由 JVM 解释

3. 运行（Execution）

    - 概念：JVM 将字节码转换为本地机器码，并执行程序。
    - 机制：逐条翻译字节码为机器指令。

4. 手动编译与运行 Java 程序

    1. 编译 `Main.java`：
        - 复制文件路径（如：`src/main/java/com/pang/Main.java`）。
        - 执行命令：
            ```sh
            javac src/main/java/com/pang/Main.java
            ```
        - 验证：使用命令检查生成的 `Main.class` 文件。
            ```sh
            ls src/main/java/com/pang/
            ```
    2. 运行 `Main.java`：
        - 在 `com` 目录的父级目录打开终端。
        - 执行命令：
            ```sh
            java com.pang.Main
            ```
        - 注意：使用完整包路径的类全限定名运行，不要在命令中添加 `.class` 后缀。
        - 示例输出：`Hello, World!`

5. 全项目编译与运行

    - 说明
        - 启动按钮背后的操作本质上是命令行操作，不仅仅编译单个 `Main.java` 文件，而是对整个项目重新编译，并指定输出目录。
    - 步骤：
        1. 编译
            - 执行以下命令，将所有 Java 文件编译到指定目录：
                ```sh
                javac -d target/classes $(find src/main/java -name "*.java")
                ```
            - 参数说明：`-d` 用于指定输出路径，将生成的字节码文件存放于 `target/classes` 目录。
        2. 运行
            - 执行以下命令，通过指定类路径来运行主类：
                ```sh
                java -cp target/classes com.pang.Main
                ```
            - 参数说明：`-cp` 用于指定类路径，确保 JVM 能找到所需的类文件。
    - 参数传递示例：
        - 如果需要传递参数（例如 `hello` 和 `World`），可按如下方式操作：
            ```sh
            javac -d target/classes $(find src/main/java -name "*.java")
            java -cp target/classes com.pang.Main hello World
            ```
        - 示例代码（在 `Main.java` 中）：
            ```java
            System.out.println(args[0] + args[1]);
            ```
        - 预期输出：`helloWorld`

## Java 历史

> 简述：Java 由 James Gosling 及其团队于 1991 年在 Sun Microsystems 公司开发，最初名为 Oak（橡树），后更名为 Green，最终定名为 Java，灵感来源于 Java 咖啡。Java 于 1995 年正式发布，凭借其 “一次编写，处处运行”（Write Once, Run Anywhere, WORA）的跨平台特性迅速流行。
> 2010 年，Oracle 收购 Sun Microsystems，Java 进入 Oracle 生态。Java 被广泛应用于 Web 开发、企业级系统、移动应用（Android）、云计算、嵌入式系统 等领域，是全球最受欢迎的编程语言之一。

# Type

## 变量与变量命名

> 简述：变量是用于动态存储数据的内存空间标识符，Java 中每个变量必须声明准确的数据类型，并遵循 camelCase 命名规范。

**知识树**

1. 变量基础

    - 变量：内存中存储数据的单元
    - 声明：指定数据类型和名称
    - 初始化：首次赋值
    - 顺序：先声明，再赋值，赋值之后才能使用，可以声明时同时赋值

2. 变量声明和赋值

    - 格式：`数据类型 变量名 = 值;`

3. 作用域

    - 变量只能在声明时所在的`{}`（及子括号）内使用

4. 变量值的修改与复制

    - 修改变量值：通过赋予新值来更新变量
    - 变量间赋值：将一个变量的值复制给另一个变量

5. 命名规范

    - 标识符规则：字母、数字、`_`、`$`，不以数字开头，不用关键字，区分大小写
    - 驼峰命名法：如 `myAge`
    - 推荐单行单变量声明
    - 最佳实践：变量名应具有描述性

6. 最佳实践

    - 可以在一行声明多个变量，但为了更清晰，建议分开声明。

**代码示例**

1. 变量赋值与修改

    ```java
    int age = 30;
    age = 35; // 修改
    int newAge = age; // 复制
    ```

2. 作用域

    ```java
    {
    	int age = 30;
    }
    System.out.println(age);// 无法获取
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

1.  引用类型定义

    - 除基本类型外的数据类型

2.  内存管理

    - 引用类型：用`new`分配内存，JRE 自动释放（垃圾回收机制，后续讲）
    - JRE：`Java Runtime Environment`，即 Java 运行环境

3.  声明方式

    - 格式：`类名 对象名 = new 类名();`
    - 包引入：
        - java.lang 包中的所有类（如 `Object`、`String`、`Integer`、`Double`、`Math`、`System` 等）默认自动导入，无需手动引入，这些类后续讲解。
        - 其他包中的类，例如 `java.util.Date`，需手动导入（IDEA 通常会自动提示并导入）。

4.  引用类型输出

    - 默认调用 `Object` 的 `toString` 方法，输出格式为“类全限定名@内存地址”，内存地址即哈希码
    - 部分类（如 `Date`、`String`）重写了 `toString` 方法，输出更具语义

**代码示例**

1.  引用类型示例

    ```java
    Object obj = new Object();
    System.out.println(obj);// java.lang.Object@1be6f5c3

    Date now = new Date();
    System.out.println(now);// 输出当前时间
    ```

    - IDEA 会自动提示并导入 `Date` 包
    - `Object` 类未重写 `toString` 方法，因此输出默认格式
    - `Date` 类重写了 `toString` 方法，显示具体日期信息

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
    - 大小写转换：使用 `toLowerCase()` 和 `toUpperCase()`返回转换后的新字符串
    - 去除空白：用 `trim()` 删除首尾多余空格返回转换后的新字符串

4. 字符串不可变性

    - **创建后不可修改**，所有改变操作均返回新字符串

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

## 转义字符

> 简述：转义字符（Escape Characters）用于在字符串中表示特殊字符，如换行、制表符、引号、反斜杠等。

**知识树**

1. 转义字符概念：

    - 使用反斜杠 `\` 表示后面的字符是特殊字符。
    - 解决字符与语法冲突的问题。

2. 常见转义字符：

    - `\"`：表示双引号 `" `
    - `\\`：表示反斜杠 `\ `
    - `\n`：表示换行符（newline）
    - `\t`：表示制表符（tab）

3. 转义字符的作用：

    - 确保字符串内容与编程语言的语法明确区分。
    - 在显示字符串时控制格式（如换行、缩进）。

4. 字符串中常见问题及解决方法：

    - 路径字符串：
        - Windows 路径含有 `\` ，需用 `\\` 表示。
    - 字符串内引号：
        - 双引号需用 `\"` 表示。

**代码示例**

1. 使用转义字符表示双引号：

    ```java
    String message = "Hello \"Mosh\"";
    System.out.println(message);
    ```

    - 输出：`Hello "Mosh"`

2. 使用转义字符表示路径：

    ```java
    String path = "c:\\Windows\\System32";
    System.out.println(path);
    ```

    - 输出：`c:\Windows\System32`

3. 使用`\n`换行符：

    ```java
    String multiline = "c:\\Windows\nSystem32";
    System.out.println(multiline);
    ```

    - 输出：
        ```
        c:\Windows
        System32
        ```

4. 使用`\t`制表符：

    ```java
    String tabbed = "c:\\Windows\tSystem32";
    System.out.println(tabbed);
    ```

    - 输出：`c:\Windows System32`

## 数组

> 简述：数组用于存储同一类型的多个数据元素，支持按索引访问，但长度固定，适合管理有限数量的数据。

**知识树**

1. 数组概念

    - 存储相同数据类型的连续内存区域
    - **固定长度，创建后不能动态增减**，若需要动态增减，则使用 Collection 集合（后续将讲到）

2. 数组地址

    - 数组通过存储地址来访问数据，多个变量可引用同一数组对象

3. 声明与初始化

    - 声明格式：`数据类型[] 数组名;`
    - 初始化方式：
        - 使用 new：例如 `new int[5]`（指定长度）
        - 直接赋值：使用大括号，如：`{1, 2, 3}`

4. 数组访问与操作

    - 通过索引访问，索引从 0 开始
    - 默认值：
        - 数值类型：0
        - 布尔类型：false
        - 引用类型：null

5. 常用方法与特性

    - 打印数组：使用 `Arrays.toString(数组)` 得到实际内容
    - 获取长度：通过 `数组.length` 属性
    - 排序：使用 `Arrays.sort(数组)`
    - 方法重载：Arrays 类中方法根据参数类型有不同实现

**代码示例**

1. 声明、初始化数组

    ```java
    int[] numbers = new int[10]; // 使用 new 初始化，数组长度为 10
    numbers[0] = 1;
    numbers[1] = 2;
    // numbers[10] = 3; // 索引超界：长度为 10，最大索引为 9，会报错
    int values[] = {1, 2, 3}; // 直接赋值初始化数组
    ```

    - 说明：展示两种数组初始化方式及数组下标使用的注意事项。

2. 数组地址

    ```java
    int[] items1 = new int[10];
    int[] items2 = new int[10];
    int[] items3 = items2; // 将 items2 的地址赋给 items3
    System.out.println(items1); // 输出 items1 的内存地址
    System.out.println(items2); // 输出 items2 的内存地址，与 items1 不同
    System.out.println(items3); // 输出 items3 的内存地址，与 items2 相同
    ```

    - 说明：输出数组默认输出其内存地址，相同赋值时地址一致。

3. 数组打印

    ```java
    int[] numbers = new int[10]; // 声明一个长度为 10 的数组
    numbers[0] = 1;
    numbers[1] = 2;
    // 使用 Arrays.toString 打印实际内容，未赋值的元素默认值为0
    System.out.println(Arrays.toString(numbers));
    ```

    - 说明：直接打印数组对象只会显示内存地址，使用 `Arrays.toString()` 才能直观显示数组内容。

4. 数组的基本方法

    ```java
    int[] numbers = {8, 3, 5, 1, 9};
    System.out.println("原数组: " + Arrays.toString(numbers));
    Arrays.sort(numbers); // 对数组排序，方法重载适用于不同类型的数组
    System.out.println("排序后: " + Arrays.toString(numbers));
    // 获取数组长度
    System.out.println("数组长度: " + numbers.length);
    ```

    - 说明：展示直接初始化、数组排序、以及使用 `length` 属性获取数组长度的示例。

## 多维数组

> 简述：多维数组是数组的数组，用于存储表格、矩阵等多维数据结构。相比单维数组，多维数组的打印和访问需要特殊处理。

**知识树**

1. 多维数组概念

    - 数组的数组，常见的是二维数组
    - 适用于存储矩阵、表格及科学计算数据

2. 声明与初始化

    - 声明格式：`数据类型[][] 数组名;`
    - 初始化方式：
        - 使用 new：如 `new int[行数][列数]`
        - 直接赋值：如 `{{1, 2, 3}, {3, 4, 5}}`

3. 数组访问与操作

    - 通过连续索引访问，例如：`matrix[i][j]`
    - 第一维表示行，第二维表示列

4. 数组打印与常用方法

    - 单维数组打印：使用 `Arrays.toString(数组)`
    - 多维数组打印：使用 `Arrays.deepToString(数组)`
    - 获取行数：`数组.length`；获取列数：`数组[0].length`（假设所有行列数相同）

**代码示例**

1.  声明、初始化与打印二维数组

    ```java
    int[][] matrix = new int[2][3]; // 声明一个 2 行 3 列的二维数组
    matrix[0][0] = 1;
    // 直接打印仅显示第一维地址
    System.out.println(Arrays.toString(matrix));
    // 使用 deepToString() 打印完整二维数组内容
    System.out.println(Arrays.deepToString(matrix));
    ```

2.  使用大括号直接初始化多维数组

    ```java
    int[][] matrix = {
    		{1, 2, 3},
    		{4, 5, 6}
    };
    System.out.println("二维数组: " + Arrays.deepToString(matrix));
    ```

## 常量

> 简述：常量是在程序中声明后其值不可改变的变量，通过使用 final 关键字确保数据安全，适合存储那些在程序运行期间保持不变的数据（如圆周率）。

**知识树**

1. 常量概念

    - 定义：初始化后值不可修改的变量
    - 用途：防止误改数据，确保重要值保持不变

2. 声明与初始化

    - 关键字：使用 final 声明
    - 格式：`final 数据类型 常量名 = 值;`
    - 命名规范：常量名使用全大写（如 PI），可用下划线分隔

3. 常量特性

    - 一经赋值，不支持后续修改
    - 修改常量会产生编译错误，确保数据一致性

4. 实际应用

    - 用于数学常数、配置参数等场景
    - 提高代码可读性和维护性

**代码示例**

1. 常量声明与使用

    ```java
    final float PI = 3.14F;
    // PI = 3.1415F; // 编译错误：无法修改 final 常量
    ```

2. 常量命名规范

    ```java
    final int MAX_COUNT = 100;
    // 常量命名采用全大写字母，单词间使用下划线分隔
    ```

## 算术表达式

> 简述：算术表达式用于执行数学运算，生成数值结果，包括加、减、乘、除、取余以及自增自减操作；重点在于理解整数运算与类型转换之间的差异。

**知识树**

1. 算术运算符

    - 包括加（`+`）、减（`-`）、乘（`*`）、除（`/`）、取余（`%`）

2. 运算数与数据类型

    - 运算数可以是整数或浮点数
    - 整数运算（如整数除法）默认舍去小数部分，需转换才能得到浮点结果

3. 强制类型转换

    - 使用 `(double)` 或 `(float)` 将整数转换为浮点数
    - 确保参与运算的数据类型一致，避免编译错误

4. 自增、自减与复合赋值

    - 自增（`++`）和自减（`--`）：
        - 前缀形式：先运算再赋值
        - 后缀形式：先赋值再运算
    - 复合赋值运算符（如 `+=`、`/=`）：简化运算并提高代码可读性

**代码示例**

1. 基本算术运算与类型转换

    ```java
    int a = 10;
    int b = 3;
    int resultInt = a / b;              // 整数除法：10 / 3 = 3
    double resultDouble = (double) a / b; // 强制转换：10 / 3 ≈ 3.3333333333333335
    System.out.println(resultInt);
    System.out.println(resultDouble);
    ```

    - 说明：第四行，先将 a 转换为 double 类型，再进行计算，int 类型的 b 计算时，会进行自动类型提升

2. 自增、自减及复合赋值

    ```java
    int x = 5;
    int y = x++;  // 后缀自增：先赋值 y = 5，再 x 变为 6
    int z = ++x;  // 前缀自增：先 x 变为 7，再赋值 z = 7
    x += 3;       // 复合赋值：等同于 x = x + 3，即 x = 10
    System.out.println("x = " + x);
    System.out.println("y = " + y);
    System.out.println("z = " + z);
    ```

## 运算符优先级

> 简述：运算符优先级决定表达式中各运算符的计算顺序。括号具有最高优先级，用于改变默认顺序，确保表达式按预期求值。

**知识树**

1. 运算符优先级概念

    - 定义：决定在没有括号干预的情况下，表达式中各运算符的计算顺序

2. 基本优先级顺序

    - 乘法（`*`）、除法（`/`）和取余（`%`）高于加法（`+`）和减法（`-`）

3. 括号的作用

    - 括号具有最高优先级，强制先计算括号内表达式
    - 示例：`(a + b) * c` 与 `a + (b * c)` 的结果不同

4. 实际应用

    - 理解运算符优先级有助于编写正确、易读的数学表达式
    - 合理使用括号可以避免歧义和逻辑错误

**代码示例**

1. 默认优先级

    ```java
    int a = 2;
    int b = 3;
    int c = 4;
    int result = a + b * c; // 先计算 b * c，即 3 * 4 = 12，再加上 a，result = 2 + 12 = 14
    System.out.println(result);
    ```

2. 使用括号改变顺序

    ```java
    int a = 2;
    int b = 3;
    int c = 4;
    int result = (a + b) * c; // 先计算 a + b，即 2 + 3 = 5，再乘以 c，result = 5 * 4 = 20
    System.out.println(result);
    ```

## 类型转换与强制转换

> 简述：类型转换是将一种数据类型的值转换为另一种数据类型的过程。隐式转换在无需数据丢失时自动进行，而显式转换需要程序员手动指定，特别适用于可能丢失精度或格式不兼容的场景。

**知识树**

1. 隐式转换（Implicit casting）

    - 自动进行，不需要额外标记
    - 适用于从较小或低精度类型转换为较大或高精度类型（如 int → long、float → double）
    - 会导致数据丢失

2. 显式转换（Explicit casting）

    - 程序员使用 `(目标类型)` 强制指定转换
    - 常用于将较大或高精度类型转换为较小或低精度类型（如 double → int），可能会丢失精度或截断数据（字节数量不同）
    - 需谨慎使用，确保数据范围符合预期

3. 数字与字符串转换

    - 数字转字符串：使用 String.valueOf(数字) 或通过字符串拼接实现
    - 字符串转数字：利用包装类提供的解析方法，如 `Integer.parseInt(字符串)` 或 `Double.parseDouble(字符串)`
    - 注意：直接转换不兼容类型会抛出异常

4. 转换原则

    - 在安全的前提下，优先采用隐式转换，保持代码简洁
    - 显式转换要明确风险，确保类型兼容和数据正确

**代码示例**

1. 隐式转换示例

    ```java
    short x = 1;
    // 这里未声明的 2，默认为 int 类型，x自动隐式转换为 int 类型之后再进行计算
    int y = x + 2;
    System.out.println(y);

    short a = 1;
    int i = a;// 同理
    System.out.println(i);

    int m = 10;
    double n = m;// 同理
    System.out.println(n);// 输出10.0
    ```

    - 说明：隐式转换自动进行，无需额外语法标记。

2. 显式转换与字符串转换示例

    ```java
    double x = 1.1;
    int y = (int) x + 2;
    System.out.println(y);// 3

    String s = "1.1";
    double m = Double.parseDouble(s);
    double n = m + 2;
    System.out.println(n);// 3.1

    // 数字转字符串
    String s2 = String.valueOf(n);// 方式1
    String s3 = "" + n;// 方式2
    ```

## Math 类与数学运算

> 简述：Math 类提供一系列方法，用于执行常见的数学运算，如取整、比较和随机数生成。它简化了数学计算操作，并确保代码简洁、易于维护。

**知识树**

1. Math 类概述

    - 定义：位于 java.lang 包的工具类，提供数学计算功能
    - 调用：不能实例化（实例化方法被设为了私有），直接调用

2. 常用方法

    - round：四舍五入，重载支持 float（返回 int）和 double（返回 long）
    - ceil：向上取整，返回大于或等于给定值的最小整数
    - floor：向下取整，返回小于或等于给定值的最大整数
    - max/min：返回两个数中的较大或较小值，方法重载支持不同数值类型
    - random：生成 0.0 至 1.0 之间的随机 double 数，每次调用可能不同

3. 类型转换注意

    - 返回值匹配：确保变量类型与方法返回类型一致，必要时进行显式转换
    - 表达式顺序：使用括号确保运算顺序正确，避免隐式转换错误

**代码示例**

1. 取整示例

    ```java
    double d = 3.7;
    int roundResult = (int) Math.round(d); // 四舍五入：3.7 → 4
    int ceilResult = (int) Math.ceil(d);     // 向上取整：3.7 → 4
    int floorResult = (int) Math.floor(d);   // 向下取整：3.7 → 3
    System.out.println(roundResult);
    System.out.println(ceilResult);
    System.out.println(floorResult);
    ```

2. 比较与随机数示例

    ```java
    int a = 10, b = 20;
    int maxVal = Math.max(a, b);   // 返回较大值：20
    int minVal = Math.min(a, b);   // 返回较小值：10
    double randomVal = Math.random(); // 生成 0.0 ~ 1.0 的随机数
    System.out.println(maxVal);
    System.out.println(minVal);
    System.out.println(randomVal);
    ```

3. 生成 0-100 随机数

    ```java
    // int randomVal = (int) Math.round(Math.random() * 100);
    int randomVal = (int) (Math.random() * 100);
    System.out.println(randomVal);
    ```

## 数字格式化

> 简述：数字格式化用于将数值转换为符合特定格式的字符串，如货币和百分比显示。通过 NumberFormat 类的工厂方法，可以轻松获取相应实例并调用格式化方法，满足不同场景的显示需求。

**知识树**

1. `NumberFormat` 类概述

    - 定义：位于 java.text 包的抽象类，用于格式化和解析数字
    - 特点：抽象类不能直接实例化，需要通过它的工厂方法获取实例
    - 抽象将在后续课程讲解，这里只需记住，抽象类不能直接创建实例

2. 货币格式化

    - 工厂方法：`getCurrencyInstance()` 返回货币格式化实例
    - 格式化方法：`format(数字)` 将数值转换为带货币符号和分隔符的字符串

3. 百分比格式化

    - 工厂方法：`getPercentInstance()` 返回百分比格式化实例
    - 格式化方法：`format(数字)` 将数值转换为带百分号的字符串

4. 方法链
    - 方法链：可直接调用工厂方法后链式调用 `format()`，简化代码

**代码示例**

1. 货币格式化示例

    ```java
    // 获取货币格式化实例并格式化数字
    NumberFormat currency = NumberFormat.getCurrencyInstance();
    String result = currency.format(1234567.891);
    System.out.println(result);// $1,234,567.89（依区域而定）
    ```

2. 百分比格式化与方法链

    ```java
    NumberFormat currencyPercent = NumberFormat.getPercentInstance();
    String result2 = currencyPercent.format(0.1);
    System.out.println(result2);// 10%

    // 链式编程
    String result3 = NumberFormat.getPercentInstance().format(0.99);
    System.out.println(result3);
    ```

## 用户输入与 Scanner

> 简述：`Scanner` 类用于读取用户输入数据，可指定输入源（如终端、文件等），并提供多种读取方法（如 `next()`、`nextLine()`、`nextInt()` 等）来获取不同类型的数据，同时可利用 `trim()` 方法清理多余空白。

**知识树**

1. `Scanner` 类概述

    - 定义在 `java.util` 包中
    - 用于从各种输入源（如 System.in、文件）读取数据

2. 输入源的指定

    - 构造方法中传入输入流（如 `System.in`）
    - 可根据需求读取键盘输入或文件数据

3. 常用读取方法

    - `next()`：读取下一个 token（以空格分隔）
    - `nextLine()`：读取整行输入，包含空格
    - `nextInt()/nextByte()/nextDouble()`：读取对应类型的数值
    - `trim()`：去除字符串前后多余空白

**代码示例**

1. 常用读取方法

    ```java
    Scanner scanner = new Scanner(System.in);

    // 输入整数
    System.out.print("请输入一个整数：");
    int x = scanner.nextInt();
    System.out.println("你输入的整数是：" + x);

    // 输入小数
    System.out.print("\n请输入一个小数：");
    double y = scanner.nextDouble();
    System.out.println("你输入的小数是：" + y);

    // 清除换行符
    scanner.nextLine();  // 处理 nextInt() / nextDouble() 后残留的换行符

    // 输入单个单词（不包括空格）
    System.out.print("\n请输入一个单词（遇到空格停止）：");
    String s = scanner.next();
    System.out.println("你输入的单词是：" + s);
    scanner.nextLine();  // 处理 next() 后的换行符

    // 输入整行字符串
    System.out.print("\n请输入一整行文本：");
    String s2 = scanner.nextLine();
    System.out.println("你输入的整行文本是：" + s2);

    // 输入整行文本（去除首尾空格）
    System.out.print("\n请输入一整行文本（自动去除前后空格）：");
    String s3 = scanner.nextLine().trim();
    System.out.println("去除空格后的文本是：" + s3);

    scanner.close(); // 关闭 Scanner
    ```

    - 说明： `next()` 只读取单个单词，`nextLine()` 可读取整行，用 `trim()` 可清除多余空格。

## Ex: 贷款计算

> **要求**：  
> 编写一个程序，要求用户输入贷款本金、年利率及贷款年限，然后计算出每月还款金额，并以货币格式显示。此计算前了解贷款计算方式：https://www.wikihow.com/Calculate-Mortgage-Payments
>
> **示例**：
>
> -   输入本金 100000，年利率 3.92，分期年数 30，最后计算出每月还款金额为 $472.81
>
> **解法**：获取输入，处理得到的值，计算结果，格式化结果输出，其中指数运算使用 Math.pow 方法。
>
> **最佳实践**
>
> -   使用适合的基本类型：小数用小字节描述，大数用大字节描述
> -   避免魔法数字：将固定值（如 12、100）定义为常量（如 MONTHS_IN_YEAR、PERCENT）。
> -   有意义的变量命名：使用描述性变量名，使代码直观易懂。
> -   分步处理复杂表达式：将计算过程拆解成多个步骤，便于维护与调试。
> -   代码可读性：适当拆分长表达式，增加中间变量，使代码逻辑更清晰。

**代码**

- 代码示例：

    ```java
    public class Main {
      public static void main(String[] args) {
          final byte MONTHS_IN_YEAR = 12;
          final byte PERCENTAGE = 100;

          Scanner scanner = new Scanner(System.in);

          System.out.print("Principal: ");
          int principal = scanner.nextInt();// 数额

          System.out.print("Annual Interest Rate:");
          double annualInterestRate = scanner.nextDouble() / PERCENTAGE;// 利率
          double monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR;
          System.out.print("Period(Years):");
          byte periodYear = scanner.nextByte();// 分期年数
          int periodMonth = periodYear * MONTHS_IN_YEAR;


          double monthlyMortgage = principal
                  - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);

          System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
      }
    }
    ```

# Control Flow

## 比较运算符

> 简述：比较运算符用于比较基本数据类型的值，生成布尔值（`true` 或 `false`），从而判断两个值是否相等或满足某种大小关系，常用于条件判断和流程控制。

**知识树**

1. 比较运算符概念

    - 判断两个数据是否满足特定关系（相等、不等、大小比较）

2. 基本比较运算符

    - 等于：`==`（注意与赋值符 `=` 区分）
    - 不等于：`!=`

3. 大小比较运算符

    - 大于：`>`
    - 大于等于：`>=`
    - 小于：`<`
    - 小于等于：`<=`

4. 布尔表达式与应用

    - 比较运算返回布尔值，构成条件表达式
    - 用于 if、while 等控制结构，驱动程序逻辑

**代码示例**

1. 基本相等和不等判断

    ```java
    int x = 5;
    int y = 5;
    System.out.println(x == y); // 输出 true，因为 x 与 y 相等
    System.out.println(x != y); // 输出 false，因为 x 与 y 相等
    ```

2. 大小比较示例

    ```java
    int a = 7;
    int b = 10;
    System.out.println(a > b);  // 输出 false，因为 7 不大于 10
    System.out.println(a >= b); // 输出 false，因为 7 既不大于也不等于 10
    System.out.println(a < b);  // 输出 true，因为 7 小于 10
    System.out.println(a <= b); // 输出 true，因为 7 小于 10
    ```

## 字符串比较

> 简述：字符串比较用于判断两个字符串内容是否一致，需区分使用 `==`（比较引用）与 `equals()`（比较内容）。字符串池优化内存管理，`intern()` 方法可将字符串手动加入池中，实现对象共享。

**知识树**

1. `equals()` 方法

    - 比较字符串内容，而非引用地址

2. `==` 与 `equals()` 区别

    - `==` 检查是否为同一对象引用
    - `equals()` 检查对象内容是否相同

3. 字符串池

    - Java 自动维护的内存区域，用于存储常量字符串
    - 相同字面量自动共享对象（引用地址）

4. 字符串池使用场景

    - 应用于缓存、日志、数据库查询结果等，降低内存开销
    - 重复字符串可调用 `intern()` 共享对象
    - 注意：过度使用 `intern()` 可能引起内存不足（**OutOfMemoryError**）

**代码示例**

1. 字符串比较

    ```java
    String a = new String("Str");
    String b = new String("Str");
    System.out.println(a == b);      // false: 不同对象引用
    System.out.println(a.equals(b)); // true: 内容相等
    ```

    - 说明：展示如何使用 `==` 与 `equals()` 比较字符串。

2. 字符串池

    ```java
    String a = "hello";
    String b = "hello";
    String c = new String("hello");
    System.out.println(a == b); // true: a 和 b 都指向常量池中相同的 "hello" 对象
    System.out.println(a == c); // false: new String() 在堆中创建了新对象，与常量池中的 "hello" 不同

    String m = "hello" + " world";
    String n = "hello world";
    System.out.println(m == n); // true: 编译期优化将 m 直接转换为常量 "hello world"，与 n 引用同一对象

    String s1 = "hello";
    String s2 = " world";
    String s3 = s1 + s2;
    String s4 = "hello world";
    System.out.println(s3 == s4); // false: s3 是运行时动态拼接生成的新对象，不在常量池中，与 s4 不同

    String x = "hello";
    String y = new String("hello").intern(); // intern() 方法将堆中的 "hello" 加入常量池，并返回该常量池中的对象
    System.out.println(x == y); // true: x 和 y 都引用常量池中的 "hello" 对象
    ```

    - 说明：演示字符串池机制及 `intern()` 方法的作用，使动态生成的字符串共享常量池对象。

## 逻辑运算符

> 简述：逻辑运算符用于组合或反转布尔表达式，从而生成一个综合的布尔结果（`true` 或 `false`），常用于条件判断和流程控制。

**知识树**

1. 逻辑运算符概念

    - 用于组合多个布尔表达式或反转其逻辑值，最终返回 `true` 或 `false`。

2. 基本逻辑运算符

    - 与（AND）
        - 符号：`&&`（短路求值）或 `&`（全量求值）
        - 规则：仅当所有参与表达式均为 `true` 时，结果为 `true`。
            - `&&`：采用短路求值，一旦遇到 false，后续表达式将不再计算。
            - `&`：不进行短路处理，会计算所有表达式。
    - 或（OR）
        - 符号：`||`（短路求值）或 `|`（全量求值）
        - 规则：只要至少有一个表达式为 `true`，结果即为 `true`。
            - `||`：采用短路求值，一旦遇到 `true`，后续表达式将不再计算。
            - `|`：不进行短路处理，会计算所有表达式。
    - 非（NOT）
        - 符号：`!`
        - 规则：将布尔值取反，即 `true` 变 `false`，`false` 变 `true`。

3. 运算顺序与短路求值

    - 运算顺序：
        - 通常情况下，非运算符的优先级最高，其次是与运算符，最后是或运算符。
        - 为避免歧义和确保代码可读性，建议使用括号明确表达式的计算顺序。
    - 短路求值：
        - 短路求值不仅提升了运行效率，还可防止某些情况下可能发生的错误（例如，避免在第一个表达式判断失败后继续执行可能导致异常的操作）。

**代码示例**

1. 与运算符示例

    ```java
    int temperature = 22;
    // 判断温度是否处于 20 到 30 之间
    boolean isWarm = (temperature > 20) && (temperature < 30);
    System.out.println(isWarm);  // 输出 true
    ```

2. 或与非运算符组合示例

    ```java
    boolean hasHighIncome = true;
    boolean hasGoodCredit = false;
    // 满足任一条件则可贷款
    boolean isEligible = hasHighIncome || hasGoodCredit;

    boolean hasCriminalRecord = false;
    // 仅当无犯罪记录时，资格有效
    isEligible = isEligible && (!hasCriminalRecord);
    System.out.println(isEligible);  // 输出 true
    ```

## if 语句

> 简述：`if` 语句根据条件判断控制程序流程，支持多分支（`if`、`else if`、`else`）来执行不同代码块，便于处理多种情形。

**知识树**

1. `if` 语句概念

    - 根据布尔表达式的真假执行相应代码

2. 分支结构

    - `if`：当条件为 `true` 时执行
    - `else if`：提供额外条件判断
    - `else`：所有条件均不满足时执行

3. 代码块与单行语句

    - 多条语句须用花括号 `{}` 包裹
    - 单条语句可省略花括号

**代码示例**

1. 基本 `if-else` 结构

    ```java
    int temperature = 30;
    if (temperature >= 30) {
    	System.out.println("It's a hot day.");
    	System.out.println("Drink plenty of water.");
    } else if (temperature >= 20 && temperature < 30) {
    	System.out.println("Beautiful day");
    } else {
    	System.out.println("It's a cold day.");
    }
    ```

    - 说明：这里的第二个条件中，`temperature < 30`可以省略

2. 单行语句省略花括号，优化判断

    ```java
        int temperature = 30;
        if (temperature >= 30) {
            System.out.println("It's a hot day.");
            System.out.println("Drink plenty of water.");
        } else if (temperature >= 20)
            System.out.println("Beautiful day");
        else
            System.out.println("It's a cold day.");
    ```

    - 说明：单条语句时可省略花括号，但注意格式对齐以保证可读性。

## if 与布尔值的优化

> 简述：通过恰当的变量声明和直接赋值布尔表达式，可精简 `if` 语句结构，消除冗余分支，从而提高代码的清晰度和可维护性。

**知识树**

1. if 语句冗余问题

    - 使用 if-else 分支设置布尔变量往往过于冗长
    - 初始值设定可避免不必要的 else 分支

2. 直接赋值技巧

    - 将布尔表达式直接赋值给变量，简化逻辑
    - 表达式用括号包裹提高可读性

**代码示例**

1. if 语句冗余问题

    ```java
    int income = 120_000;
    boolean hasHighIncome;
    if (income > 100_000)
    	hasHighIncome = true;
    else
    	hasHighIncome = false;
    System.out.println(hasHighIncome);
    ```

2. 简化 if 语句的优化示例

    ```java
    // 优化示例：直接将布尔表达式赋值给变量
    int income = 120_000;
    boolean hasHighIncome = (income > 100_000);
    System.out.println(hasHighIncome);
    ```

    - 说明：通过直接赋值布尔表达式，省去了 if-else 分支，使代码更简洁、易读。

## 三元运算符

> 简述：三元运算符（Ternary operator）是一种简洁的条件表达式，根据一个布尔条件返回两个表达式中的一个值，常用于替代简单的 if-else 赋值操作，使代码更紧凑、可读。

**知识树**

1. 概念

    - 条件表达式返回两个值之一
    - 用于直接赋值或作为表达式的一部分

2. 语法结构

    - 格式：`条件 ? 表达式1 : 表达式2`
    - 优先级较低，建议使用括号明确运算顺序

3. 应用场景

    - 替代简单 `if-else` 语句
    - 快速根据条件确定变量值

4. 注意事项

    - 两个分支返回值类型需兼容
    - 适用于简单条件，复杂条件应考虑可读性

**代码示例**

1. 原始代码

    ```java
    int income = 120_000;
    String className;
    if (income > 100_000)
    	className = "First";
    else
    	className = "Economy";
    System.out.println(className);
    ```

2. 使用默认值简化

    ```java
    int income = 120_000;
    String className = "Economy";
    if (income > 100_000)
    	className = "First";
    System.out.println(className);
    ```

3. 三元运算符

    ```java
    int income = 120_000;
    String className = (income > 100_000) ? "First" : "Economy";
    System.out.println(className);
    ```

## switch 语句

> 简述：switch 语句用于基于表达式的值选择执行不同的代码块，是 `if-else` 的一种更清晰、结构化的替代方案，适合处理离散值的多分支判断。

**知识树**

1. `switch` 语句概念

    - 根据表达式值匹配不同的 `case` 分支
    - 替代多个 `if-else` 判断，提高代码整洁度

2. 基本语法

    - 语法格式：
        ```java
        switch(表达式) {
            case 值1:
                // 代码块
                break;
            case 值2:
                // 代码块
                break;
            default:
                // 默认代码块
                break;
        }
        ```
    - 表达式类型：可为整数、字符、字符串等。

3. 流程控制

    - 每个 `case` 后用冒号跟随相应代码
    - `break` 语句用于中断 `switch`，防止贯穿执行
    - `default` 分支在所有 `case` 不匹配时执行，可选但推荐

4. 应用场景与注意事项

    - 适用于枚举型条件的判断，如用户角色、状态码等
    - 注意数据类型匹配，避免编译错误
    - 与 `if-else` 比较：当分支较多时，switch 更简洁明了

**代码示例**

1. 基于字符串的 switch 示例

    ```java
    String role = "admin";
    switch(role) {
        case "admin":
            System.out.println("You are an admin.");
            break;
        case "moderator":
            System.out.println("You are a moderator.");
            break;
        default:
            System.out.println("You are a guest.");
            break;
    }
    ```

    - 说明：根据 role 值输出对应提示，用 break 避免代码贯穿。

2. 基于整数的 switch 示例

    ```java
    int roleCode = 1; // 1代表admin，2代表moderator，其它代表guest
    switch(roleCode) {
        case 1:
            System.out.println("You are an admin.");
            break;
        case 2:
            System.out.println("You are a moderator.");
            break;
        default:
            System.out.println("You are a guest.");
            break;
    }
    ```

    - 说明：展示如何使用整数作为条件进行分支选择，default 用于处理非预期值。

## Ex: FizzBuzz 练习

> **要求**：编写一个程序，要求用户输入一个整数。若该整数同时能被 3 和 5 整除，则输出 "fizz buzz"；若仅能被 3 整除，输出 "fizz"；若仅能被 5 整除，输出 "buzz"；否则输出该数字本身。
>
> **解法**：
>
> 1. **输入处理**
>
>     - 使用 Scanner 读取用户输入的整数。
>
> 2. **条件判断**
>
>     - **顺序判断**：首先检查是否同时被 3 和 5 整除，满足则输出 "FizzBuzz"；
>     - 否则检查是否仅被 3 整除，满足则输出 "Buzz"；
>     - 否则检查是否仅被 5 整除，满足则输出 "Fizz"；
>     - 如果以上条件均不满足，则输出数字本身。
>
> 3. **代码设计讨论**
>     - **判断顺序**：必须将复合条件放在前面，避免先判断单条件导致复合情况被提前捕捉，从而遗漏 "fizz buzz" 的输出。
>     - **DRY 原则与可读性**：虽然可通过嵌套 if-else 结构减少重复条件判断，但会增加代码嵌套层次，使得代码难以阅读。因此，采用平铺结构虽然有轻微重复，但更直观易懂。

**代码**

- 代码示例

    ```java
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int number = scanner.nextInt();

    // 优先判断复合条件
    if (number % 3 == 0 && number % 5 == 0)
    	System.out.println("FizzBuzz");
    else if (number % 3 == 0)
    	System.out.println("Buzz");
    else if (number % 5 == 0)
    	System.out.println("Fizz");
    else
    	System.out.println(number);
    ```

## for 循环

> 简述：for 循环用于重复执行一段代码，其结构由初始化、条件判断和更新三部分组成，适用于当循环次数已知或可确定时使用。

**知识树**

1. for 循环概念

    - 重复执行特定代码块
    - 常用于已知次数的循环

2. for 循环基本结构

    - 初始化：设置循环计数器，如 `int i = 0`
    - 条件判断：布尔表达式决定循环是否继续，如 `i < 5`
    - 更新表达式：每次迭代后更新计数器，如 `i++`

3. 代码块与单行语句

    - 单条语句可省略大括号
    - 多条语句必须用 `{}` 包裹形成完整循环体

4. 实际应用与输出

    - 常用于打印、计数、数组遍历等任务
    - 可通过拼接变量实现动态输出，增强交互性

**代码示例**

1. 基本 for 循环示例

    ```java
    for (int i = 0; i < 5; i++) {
        System.out.println("Hello World");
    }
    ```

    - 说明：此循环将 "Hello World" 打印五次。

2. 更新表达式 `--` 示例

    ```java
    for (int i = 5; i > 0; i--) {
        System.out.println("Iteration " + i + ": Hello World");
    }
    ```

    - 说明：在每次迭代中输出当前计数器值，便于追踪循环进度。

## while 循环

> 简述：`while` 循环用于在循环条件为真时重复执行代码块，适合处理未知迭代次数的场景，如根据用户输入持续执行操作，直到满足终止条件。

**知识树**

1. 循环条件

    - 使用 `while(条件)` 结构重复执行代码
    - 条件表达式返回布尔值，决定是否继续循环

2. 变量作用与范围

    - 循环外声明的变量可在循环内更新
    - 避免在循环内部重复创建对象以防内存浪费

3. 用户输入格式

    - 利用 `Scanner` 读取用户输入
    - 可用 `toLowerCase()` 统一格式，避免大小写问题

4. 实际应用
    - 适用于不确定循环次数的场景，如连续读取用户输入直到特定关键字（如 "quit"）出现
    - 结合逻辑与输入校验，确保循环正确终止

**代码示例**

1. 基本计数型 while 循环

    ```java
    int i = 0;
    while (i < 5) {
        System.out.println("Iteration " + i);
        i++;  // 更新计数器
    }
    ```

    - 说明：循环从 i=0 开始，每次迭代后递增，直到 i 不小于 5 时结束。

2. 用户输入终止条件示例

    ```java
    Scanner scanner = new Scanner(System.in);  // 在循环外创建 Scanner 对象
    String input = "";
    // 循环条件：用户输入不等于 "quit"（忽略大小写）
    while (!input.toLowerCase().equals("quit")) {
    	System.out.print("请输入内容（输入 quit 退出）：");
    	input = scanner.next();  // 读取单个 token
    	// 输出用户输入（echo）
    	System.out.println("你输入了: " + input);
    }
    scanner.close();
    ```

    - 说明：该示例不断读取用户输入，使用 toLowerCase() 标准化输入，再用 equals 比较终止条件，实现用户在输入 "quit" 后退出循环。

## do while 循环

> 简述：do while 循环先执行循环体，再判断条件，保证循环体至少执行一次，适用于需要在条件检查前必执行操作的场景。

**知识树**

1. 循环机制

    - 与 while 循环类似，但条件判断在循环体执行后进行

2. 执行保障

    - 无论条件初始是否满足，循环体总至少执行一次

3. 语法结构

    - 格式：
        ```java
        do {
            // 循环体
        } while (条件);
        ```
    - 循环体后必须以分号结束

**代码示例**

1. 计数示例

    ```java
    int count = 100;
    do {
    	System.out.println("Count is: " + count);
    	count++;
    } while (count <= 5);
    ```

    - 即便 `count` 为 100，仍然执行一次

## for-each 循环

> 简述：for-each 循环用于遍历数组或集合，无需使用显式计数器，代码更简洁，但只能正向访问元素，且无法直接获取索引。集合相关内容将在后续讲到。

**知识树**

1. 基本概念

    - 用于遍历数组或集合中的每个元素
    - 简化遍历操作，提高代码可读性

2. 语法结构

    - 格式：`for (类型 变量 : 数组或集合) { … }`
    - 变量在每次迭代中自动持有当前元素的值

3. 代码块与单行语句

    - 多条语句须用花括号 `{}` 包裹
    - 单条语句可省略花括号

4. 限制与对比

    - 仅支持正向遍历，无法获取当前元素的索引
    - 与传统 for 循环相比，适合只需元素值的场景
    - 当需要索引或反向遍历时，仍需使用 for 循环

**代码示例**

1. 使用传统 for 循环遍历数组

    ```java
    String[] fruits = {"apple", "mango", "orange"};
    for (int i = 0; i < fruits.length; i++)
    	System.out.println("Fruit at index " + i + ": " + fruits[i]);
    ```

    - 说明：展示如何通过索引访问数组元素，适用于需要索引信息的情况。

2. 使用 for-each 循环遍历数组

    ```java
    String[] fruits = {"apple", "mango", "orange"};
    for (String fruit : fruits)
    	System.out.println("Fruit: " + fruit);
    ```

    - 说明：演示增强的 for 循环，直接遍历数组元素，无需索引管理，代码更简洁。

## Ex: 贷款计算补充输入验证

> **要求**：扩展抵押贷款计算器，要求用户输入贷款本金、年利率及贷款年限。对每个输入添加基本的错误处理和验证，若输入不合法则持续提示，直到用户输入有效数据为止。
>
> **解法**：
>
> 1.  **输入处理与验证**
>
>     -   在循环外声明 principal、annualInterest 和 years 变量，保证其作用域在整个方法中有效。
>     -   对每个输入使用无限循环（while true）进行验证：
>         -   贷款本金需大于或等于设定的最小值（例如 1000）；
>         -   年利率必须大于 0；
>         -   贷款年限必须大于 0。
>     -   若输入无效，则打印错误提示并重复输入，直到输入合法。
>
> 2.  **计算处理**
>
>     -   其中指数运算使用 Math.pow 方法。

**代码**

- 代码示例

    ```java
    public class Main {
      public static void main(String[] args) {
          final byte MONTHS_IN_YEAR = 12;
          final byte PERCENTAGE = 100;

          int principal = 0;
          double monthlyInterestRate = 0;
          int periodMonth = 0;

          Scanner scanner = new Scanner(System.in);

          while (true) {
              System.out.print("Principal: ");
              principal = scanner.nextInt();// 数额
              if (principal >= 1000 || principal <= 1_000_000) {
                  break;
              }
              System.out.print("Enter a value between 1000 and 1_000_000");
          }
          while (true) {
              System.out.print("Annual Interest Rate:");
              double annualInterestRate = scanner.nextDouble() / PERCENTAGE;// 利率
              if (annualInterestRate >= 0 && annualInterestRate <= 30) {
                  monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR;
                  break;
              }
              System.out.print("Enter a value between 1 and 30");

          }

          while (true) {
              System.out.print("Period(Years):");
              byte periodYear = scanner.nextByte();// 分期年数
              if (periodYear >= 0 && periodYear <= 30) {
                  periodMonth = periodYear * MONTHS_IN_YEAR;
                  break;
              }
              System.out.print("Enter a value between 1 and 30");
          }

          double monthlyMortgage = principal
                  - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);

          System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
      }
    }
    ```

# Clean Coding

## Clean Code

> 简述：通过整洁编码，将程序拆分成独立小块，利用方法提取实现模块化。这样代码就像整洁的房间，每个物品都有归处，提高了可读性、可维护性和重用性。

**知识树**

1. 代码整洁概念

    - 每个人都可以写计算机能理解的代码，优秀的程序员，可以写出普通人就能理解的代码
    - 类比整理房间：井然有序的代码便于查找与维护

2. 模块化与方法提取

    - 将重复或复杂代码封装为独立方法，减少冗余
    - 方法名称应语义明确，便于理解

3. 整洁编码的好处

    - 提高代码可读性与扩展性
    - 降低错误率，便于团队协作与调试

## 创建与调用方法

> 简述：方法将代码拆分成独立模块，使复杂逻辑易于维护和重用。通过定义方法，可将重复或复杂操作封装，提升代码清晰度和可读性。

**知识树**

1. 方法的基本概念

    - 独立代码块：封装特定任务
    - 定义在类中，与类或对象关联

2. 方法的定义

    - 访问修饰符：决定可见性，当前默认声明为 public 便可，具体用法后续讲解。
    - static 关键字：声明方法属于类，具体用法后续讲解。
    - 返回类型：void 或具体数据类型，声明方法返回的数据
    - 方法名：使用 camelCase 命名，描述其功能

3. 参数与返回

    - 参数列表：放在圆括号中，用逗号分隔，作为输入
    - 方法体：用花括号包裹，包含局部变量和逻辑
    - return 语句：返回值（必须与返回类型一致），若无返回则使用 void

4. 方法调用与重用

    - 在 main 方法中调用，传递所需参数
    - 重用方法避免代码冗余，实现模块化

**代码示例**

1. 简单问候方法（无返回值）

    ```java
    public static void main(String[] args) {
        greetUser("Nancy");
    }

    public static void greetUser(String name) {
        System.out.println("Hello " + name + "!");
    }
    ```

    - 说明：定义一个静态方法 greetUser，接受一个字符串参数，并打印问候信息。

2. 带参数与返回值的方法

    ```java
    public static void main(String[] args) {
        String message = greetUser("Yi", "Miao");
        System.out.println(message);
    }

    public static String greetUser(String firstName, String lastName) {
        return "Hello " + firstName + " " + lastName + "!";
    }
    ```

    - 说明：展示如何定义和调用一个带两个参数且返回字符串的问候方法，实现参数传递和返回值处理。

## Ex 贷款计算提取方法

> **要求**：将代码根据职责划分，拆分成方法
> 2
> **解法**： - 思路 - 可以拆分出`caculateMortgage`计算方法，`readNumber`读取数据的方法，使用 control+T 可辅助拆分方法，但是不是所有方法都适用。 - 先读取`principal`，`annualInterestRate`，`periodYear`，保证用户输入不变 - 处理`monthlyInterestRate`和`periodMonth`的逻辑放在计算方法内

**代码**

- 代码示例

**代码**

- 代码示例

    ```java
    public class Main {
      public static void main(String[] args) {

          int principal = 0;
          float annualInterestRate = 0;
          byte periodYear = 0;

          Scanner scanner = new Scanner(System.in);

          principal = (int) readNumber("Principal: ", 1000, 1_000_000);
          annualInterestRate = (float) readNumber("Annual Interest Rate: ", 1, 30);
          periodYear = (byte) readNumber("Period Year: ", 1, 30);

          double monthlyMortgage = caculateMortgage(principal, annualInterestRate, periodYear);

          String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);
          System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
      }

      public static double readNumber(String prompt, double min, double max) {
          Scanner scanner = new Scanner(System.in);
          double value;
          while (true) {
              System.out.print(prompt);
              value = scanner.nextDouble();
              if (value >= min && value <= max) break;
              System.out.print("Enter a value between " + min + " and " + max);
          }
          return value;
      }

      public static double caculateMortgage(
              int principal,
              float annualInterestRate,
              byte periodYear) {

          final byte MONTHS_IN_YEAR = 12;
          final byte PERCENTAGE = 100;

          float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
          int periodMonth = periodYear * MONTHS_IN_YEAR;

          double monthlyMortgage = principal
                  - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          return monthlyMortgage;
      }
    }
    ```

## Ex: 贷款计算补充还款计划

> **要求**：扩展抵押贷款计算器，实现如下功能：
>
> -   用户输入贷款本金、年利率和贷款年限；
> -   计算并输出月还款额；
> -   输出每个月还款后剩余本金（还款计划）。
> -   计算公式：`balance = principal \* ((1 + r)^n - (1 + r)^p) / ((1 + r)^n - 1)`，其中 r 为月利率，n 为总还款期数，p 为已付款次数。
>
> **示例**：
>
> -   输入本金 180000，年利率 4，分期年数 10，最后计算出每月还款金额为 $1,822.41，最后一期还款金额为$1,816.36
>
> **解法**：
>
> 1. **计算逻辑**
>     - 提取月还款额计算到 `calculateMortgage` 方法；
>     - 提取剩余本金计算到 `calculateBalance` 方法

> 2. **优化代码结构**
>     - 将常量（如 MONTHS_IN_YEAR、PERCENT）定义为类级别的静态字段；
>     - 将输出每月款款金额和输出支付计划的代码拆分成两个方法，在 main 方法中调用各方法，依次输出月还款额及支付计划。

**代码**

- 代码示例：使用 IDEA 工具提取方法，默认修饰符为 private

    ```java
    public class Main {
      final static byte MONTHS_IN_YEAR = 12;
      final static byte PERCENTAGE = 100;

      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);

          int principal = (int) readNumber("Principal: ", 1000, 1_000_000);
          float annualInterestRate = (float) readNumber("Annual Interest Rate: ", 1, 30);
          byte periodYear = (byte) readNumber("Period Year: ", 1, 30);

          printMortgage(principal, annualInterestRate, periodYear);
          printPaymentsSchedule(periodYear, principal, annualInterestRate);
      }

      private static void printMortgage(int principal, float annualInterestRate, byte periodYear) {
          double monthlyMortgage = caculateMortgage(principal, annualInterestRate, periodYear);

          String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);
          System.out.println("\nMortgage");
          System.out.println("---------");
          System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
      }

      private static void printPaymentsSchedule(byte periodYear, int principal, float annualInterestRate) {
          System.out.println("\nPayment Schedule");
          System.out.println("----------------");
          for (short month = 1; month <= periodYear * MONTHS_IN_YEAR; month++) {
              double balance = caculateBalance(principal, annualInterestRate, periodYear, month);
              System.out.println(NumberFormat.getCurrencyInstance().format(balance));

          }
      }

      public static double readNumber(String prompt, double min, double max) {
          Scanner scanner = new Scanner(System.in);
          double value;
          while (true) {
              System.out.print(prompt);
              value = scanner.nextDouble();
              if (value >= min && value <= max) break;
              System.out.print("Enter a value between " + min + " and " + max);
          }
          return value;
      }

      public static double caculateMortgage(
              int principal,
              float annualInterestRate,
              byte periodYear) {

          float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
          int periodMonth = periodYear * MONTHS_IN_YEAR;

          double monthlyMortgage = principal
                  - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          return monthlyMortgage;
      }

      public static double caculateBalance(
              int principal,
              float annualInterestRate,
              byte periodYear,
              short paymentsMade) {

          float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
          int periodMonth = periodYear * MONTHS_IN_YEAR;

          double banlance = principal *
                  (Math.pow((1 + monthlyInterestRate), periodMonth)
                          - Math.pow(1 + monthlyInterestRate, paymentsMade))
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          return banlance;
      }
    }
    ```

# Debugging and Deploying

## 错误种类

> 简述：Java 程序中的错误分为编译时错误和运行时错误。编译时错误由语法问题引起，阻止代码编译；运行时错误则在程序执行时出现。使用代码编辑器提示、Google/Stack Overflow 以及调试器（如 IntelliJ 的 Debugger）可以有效定位并修正错误。

**知识树**

1. 错误类型

    - 编译时错误（Syntax Error）：因不符合 Java 语法而导致编译失败
    - 运行时错误（Runtime Error）：编译通过，但执行过程中出现异常

2. 编译时错误

    - 特征：在编译阶段出现，常见于语法错误、类型不匹配等
    - 修正方法：利用 IDE 提示和错误信息，查阅文档或搜索 Stack Overflow

3. 运行时错误

    - 特征：程序在运行时抛出异常，如 NullPointerException、数组越界等
    - 调试方法：使用调试器逐步跟踪代码、检查变量状态、设置断点

4. 调试工具与技巧

    - IntelliJ Debugger：断点、单步执行、变量监控
    - 日志记录与异常处理：使用 try-catch 捕获异常，打印日志辅助分析

## 常见编译时错误

> 简述：本节介绍 Java 编译时常见错误，帮助初学者理解如何避免语法和标识符错误，从而提高代码质量与开发效率。

**知识树**

1. 变量声明错误

    - 忘记指定数据类型
    - 常见于习惯动态语言的开发者

2. 语句终止符错误

    - 忘记在语句末尾加分号
    - 仅对普通语句有效，代码块无需终止符

3. 方法调用错误

    - 忘记添加圆括号，导致无法识别为方法调用

4. 字符串书写错误

    - 忘记使用双引号包裹字符串
    - 单引号仅用于字符

5. 标识符拼写与大小写错误

    - Java 为大小写敏感，错误拼写或不一致会引发错误

6. 保留关键字使用错误

    - 不能将保留关键字（如 class）用作标识符

7. 比较运算错误

    - 使用单等号（`=`）进行比较，需使用双等号（`==`）生成布尔表达式

**代码示例**

1. 变量声明错误

    ```java
    // 错误示例：未指定数据类型
    name = "Mosh";  // 编译错误：找不到符号 name
    ```

    - 说明：必须先声明数据类型，如：`String name = "Mosh";`

2. 语句终止符错误

    ```java
    System.out.println("Hello World")  // 编译错误：缺少分号
    ```

    - 说明：每个语句后应加分号，正确写法为：`System.out.println("Hello World");`

3. 方法调用错误

    ```java
    System.out.println;  // 编译错误：方法调用缺少圆括号
    ```

    - 说明：正确调用方法应为：`System.out.println("Hello World");`

4. 字符串书写错误

    ```java
    String greeting = 'Hello World';  // 编译错误：应使用双引号
    ```

    - 说明：字符串需用双引号包裹，正确写法为：`String greeting = "Hello World";`

5. 标识符拼写与大小写错误

    ```java
    String name = "Mosh";
    System.out.println(Name);  // 编译错误：Name 与 name 不一致（区分大小写）
    ```

    - 说明：保持标识符一致性，建议统一使用 camelCase，如 `String name = "Mosh";`

6. 保留关键字使用错误

    ```java
    int class = 5;  // 编译错误：class 为保留关键字
    ```

    - 说明：不可使用保留关键字，需使用其他合法名称，如 `int classNum = 5;`

7. 比较运算错误

    ```java
    if (a = b) {  // 编译错误：单等号用于赋值，不产生布尔值
        // ...
    }
    ```

    - 说明：应使用双等号进行比较，如：`if (a == b) { ... }`

## 调试 Debug

> 简述：调试是发现和修复程序错误的过程。利用断点、单步执行、变量监控、调用堆栈和监视表达式等工具，可以逐行检查代码，定位问题并验证修复，从而提高代码质量和开发效率。

**知识树**

1. 调试

    - 定义：在程序运行中查找并修正错误
    - 错误类型：编译时错误与运行时错误
    - 开始调试按钮：运行键右边的甲壳虫按钮
    - 快捷键：conrol+D

2. 断点设置

    - 作用：暂停程序执行以检查代码状态和变量值
    - 插入方式：点击 IDE 边栏或使用快捷键（如 IntelliJ 中的 toggle line breakpoint）

3. 单步调试工具

    - Step Over：跳过当前语句，执行下一语句
    - Step Into：进入被调用的方法内部逐行调试
    - Step Out：退出当前方法，返回调用者上下文
    - 变量窗口：实时显示当前作用域中变量的值
    - Watch（监视）：添加表达式跟踪关键变量

4. 调试流程与技巧
    - 定位疑似错误区域：在关键代码处设置断点
    - 使用调试器单步执行，观察变量变化
    - 重启调试会话，调整断点以缩小错误范围

**代码示例**

1. 断点调试示例，目标希望输出 0-4

    ```java
    public static void main(String[] args) {
        System.out.println("Start");// 在此处设置断点
        printNumbers(4);// 使用 Step Into 可进入此方法调试内部逻辑
        System.out.println("Finish");
    }

    public static void printNumbers(int limit) {
        for (int i = 0; i < limit; i += 2) {
            System.out.println(i);// 观察变量 i 的变化，确认循环执行逻辑
        }
    }
    ```

    - 说明：在 main 方法中设置断点后，当程序运行到断点时暂停，支持检查“Start”已输出，并准备逐步调试 printNumbers 方法。通过在循环内部使用 Step Over，可实时监控变量 i 的值和循环的执行情况，帮助发现只打印偶数或其他逻辑错误。
    - 纠正：`i += 2`修改为`i++`，`i < limit`修改为`i <= limit`

## 打包 Package

> 简述：部署 Java 应用程序是将编译后的代码及资源打包成 jar 文件，供用户在安装了 Java 运行环境的系统上独立运行。这一过程确保代码分发、跨平台执行和维护的便捷性。

**知识树**

1. Jar 文件概念

    - Java Archive 格式，包含 .class 文件和资源
    - 便于分发和跨平台执行

2. 构建与打包

    - 在 IntelliJ 中配置 Artifact（File——Project Structure——Artifact）
    - 选择项目模块 Jar（JarFx 是桌面应用）、主类及依赖项（选择 From modules with dependencies...，随后选择 Main class ），生成 jar 文件
    - 使用 “Build Artifact” 完成打包（Build ——Build Artifact——Build）
    - 在生成的 out 目录最后的层级下，可以看到生成的 jar 文件

3. 部署与执行

    - 目标机器必须安装 Java 运行环境
    - 通过命令行执行，在该文件所在路径打开终端，输入：`java -jar HelloWorld.jar`
    - 注意文件路径及大小写敏感性（特别在 Linux/Mac）

**代码示例**

1. 代码文件示例

    ```java
    package com.pang;

    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");// 在此处设置断点
        }
    }
    ```

2. 运行 jar 文件示例

    ```bash
    java -jar HelloWorld.jar
    ```

    - 输入：Hello World

# Classes

## 编程范式

> 简述：编程范式（Programming Paradigms）是组织和设计代码结构的基本思想与风格，不局限于具体语言，而是通过特定的模式和原则管理代码，以提高代码的可读性、维护性和扩展性。

**知识树**

1. 常见编程范式：

    - 过程式（Procedural）：以过程（函数或方法）为中心，强调顺序执行。
    - 面向对象（Object-Oriented）：以对象为核心，强调数据与行为的封装。
    - 函数式（Functional）：以纯函数为核心，强调数据的不可变性和函数的组合。
    - 事件驱动（Event-Driven）：以事件为中心，程序流由事件驱动。
    - 逻辑式（Logic）：基于形式逻辑规则进行推理和决策。
    - 面向切面（Aspect-Oriented）：强调横切关注点（如日志、安全性）的分离。

2. 编程语言对范式的支持：

    - 单范式语言：仅支持一种编程模式，如 Smalltalk（纯面向对象）。
    - 多范式语言：同时支持多种模式，如 Python、Ruby、Java、JavaScript 等。

3. 面向对象编程（OOP）的核心思想

    - 以对象为基础单元，将数据（状态）和方法（行为）封装。
    - 强调对象间的协作与交互，通过消息传递实现功能。

4. 函数式编程（FP）的核心思想

    - 以纯函数为核心，不改变外部状态，无副作用。
    - 数据与函数分离，通过函数链进行数据变换。

5. 编程范式选择原则

    - 不同范式适用于不同场景。
    - 面向对象适用于复杂状态管理（如 GUI、游戏）。
    - 函数式适用于高并发、数据流处理场景。

6. 范式认知的误区与建议

    - 不存在万能的范式，强调场景与需求导向。

## 面向对象编程（OOP）

> 简述：面向对象编程是一种通过对象来组织代码的编程模式，对象封装了数据和行为，便于管理复杂的程序结构。

**知识树**

1. 类（Class）定义：

    - 概念：类是对象的模板或蓝图。
    - 组成： 包含属性（字段）和方法（操作）
        - 属性（Fields）：描述对象状态的变量，如汽车的当前速度、档位等。
        - 方法（Methods）：改变或操作对象状态的函数，如启动汽车、更换档位等。

2. 对象（Object）定义：

    - 对象是类的具体实例。
    - 每个对象有独立的内存空间与状态。

3. 类与对象的关系：

    - 类定义对象的结构；对象是类的实例。
    - 一个类可生成多个对象实例，各实例独立。

4. 面向对象的优势

    - 降低复杂性：问题分解为多个对象，便于理解。
    - 易于维护：单个对象变化不会影响整体。
    - 提高复用性：对象和方法可重复使用。

5. 对象示例

    - 汽车类
        - 属性：启动状态，当前速度，剩余燃油量等
        - 方法：启动，停车，消耗燃油等
    - 灯类（Lamp Class）
        - 属性：明暗状态
        - 方法：开灯，关灯
    - 文本框（TextBox）对象：
        - 属性：文本内容、字符限制、焦点状态、启用状态。
        - 方法：设置文本、清空、启用、禁用、获取焦点等。

## 创建类

> 简述：类定义对象的共同特征，是对象创建的模板；对象是类的具体实现，每个对象具有独立状态和行为。类包含字段（用于存储数据）和方法（定义对象的行为）。

**知识树**

1. 类的创建

    - 使用 Pascal 命名法
    - 在`Main.class`同级目录下，创建`TextBox.class`文件，供学习练习

2. 类的成员：

    - 字段（Field）：存储类的数据状态
    - 方法（Method）：定义类的行为

3. 关键字与命名约定

    - Pascal 命名法（用于类名，每个单词首字母大写）
    - camel 命名法（用于字段与方法名，第一个单词小写，后续单词首字母大写）

4. 访问修饰符

    - `public`：其他类可见
    - （更多访问修饰符后续学习）

5. 特殊关键字

    - `this`：当前对象的引用

6. 继承（后续讲解）

    - 输入`this.`后，能看到当前方法所拥有的`filed`和`method`，除此之外，还能看到一些没有定义的方法，比如`clone()`、`equals()`，这些方法是继承而来，所有的 class 都会自动从其他类继承一些方法，继承相关内容将在后续讲解。

**代码示例**

1. 创建类与字段、方法

    ```java
    public class TextBox {
        public String text; // Field

        public void setText(String text) {
            this.text = text;
        }

        public void clear() {
            this.text = "";
        }
    }
    ```

    - 这里一共有三个成员：一个 字段（`Field`），两个方法（`Method`）

## 创建&使用对象

> 简述：对象是类的实例，拥有类定义的结构（字段）和行为（方法）。在 Java 中，通过 `new` 运算符创建对象，每个对象都是独立的实例，有自己的状态。

**知识树**

1. 对象实例化

    - 使用 `new` 运算符创建类的实例

2. `var` 关键字

    - 自动推断变量类型
    - 简化代码，减少重复

3. 引用类型的初始值

    - 对象是引用类型，默认值为 `null`
    - 初始化字段避免 `NullPointerException`导致程序崩溃
    - 对象中的字段存在默认值，而局部变量声明之后必须赋值才能使用
        - 数值类型默认值为 `0`，布尔类型默认值为 `false`，引用类型默认值为 `null`

4. 对象的独立性

    - 每个对象独立维护自己的状态

5. 注意

    - 若测试失败，检测 JDK 版本，建议使用 JDK17 重新创建项目

**代码示例**

1. 创建对象并设置文本

    ```java
    public static void main(String[] args) {
        // TextBox textBox = new TextBox();// 原始方式
        var textBox1 = new TextBox();// JDK10引入var
        textBox1.setText("Box One");
        System.out.println(textBox1.text);
    }
    ```

    - 在 `Main.class` 中创建 `TextBox类` 的实例

2. 空指针异常

    - 输出 null
        ```java
        var textBox1 = new TextBox();// JDK10引入var
        System.out.println(textBox1.text);// 输出null，并不会导致程序崩溃
        ```
    - 未初始化的 `null` 调用方法
        ```java
        var textBox1 = new TextBox();// JDK10引入var
        System.out.println(textBox1.text.toUpperCase());// 程序崩溃：NullPointerException
        ```
    - 解决方式，修改 `TextBox.class`，将 `text`初始化为空字符串，避免 `null`
        ```java
        public String text = ""; // Field
        ```

3. 多个对象实例的独立性

    ```java
    var textBox1 = new TextBox();
    textBox1.setText("Box 1");
    System.out.println(textBox1.text.toUpperCase());// BOX 1

    var textBox2 = new TextBox();
    textBox2.setText("Box 2");
    System.out.println(textBox2.text);// Box 2
    ```

    - 不同对象实例之间数据互不干扰，各自维护状态。

## 堆和栈

> 简述：堆和栈是程序运行时的内存区域。堆负责存储对象实例，栈负责存储局部变量与引用地址。当堆中的对象失去引用时，Java 的垃圾回收机制会自动释放内存。

**知识树**

1. 内存区域

    - 堆（Heap）
        - 存储对象实例（通过`new`创建）
        - 动态分配，大小运行时可变
        - 垃圾回收机制自动释放无引用对象
    - 栈（Stack）
        - 存储基本类型变量、引用变量、方法调用栈帧
        - 按方法调用顺序先进后出（LIFO）
        - 方法结束后自动释放栈空间
    - 栈帧
        - 栈帧是每次方法调用时在调用栈（stack）中创建的一块内存区域
        - 每次方法调用创建一个栈帧，保存局部变量（相关概念后续讲解）

2. 对象创建与引用

    - 创建对象实例，存储于堆内存，`new`返回实例的堆内存地址
    - 将堆地址赋值给栈上的引用变量
    - 一个对象实例可被多个引用变量指向，任何引用的修改对所有引用可见

3. 内存释放机制

    - 栈内存释放：方法执行结束后立即清除栈帧及其中的变量与引用
    - 堆内存释放：对象实例无引用变量指向时，等待垃圾回收器自动释放

4. 实践建议

    - 合理管理引用变量，避免不必要的引用导致内存泄露
    - 了解 JVM 垃圾回收机制，优化代码结构提升程序性能与内存使用效率

**代码示例**

1. 内存区域

    ```java
    public static void main(String[] args) {
        var textBox1 = new TextBox();
    }
    ```

    - 描述：
        - 代码运行时，`new TextBox()`实例创建并存储于堆内存区域。
        - 堆中实例地址赋给栈上的引用变量`textBox1`。
        - 当`main`方法执行完成，栈内的引用变量被立即释放，堆中对象失去引用，随后被垃圾回收机制清理。

2. 多个引用

    ```java
    var textBox1 = new TextBox();
    var textBox2 = textBox1;

    textBox2.setText("Hello World");
    System.out.println(textBox1.text);
    System.out.println(textBox2.text);
    ```

    - 描述：
        - 堆中只创建了一个`TextBox`实例，栈中的两个引用变量均指向该实例。
        - 任意引用变量修改实例属性，对所有引用可见。

## 面向对象与过程式编程比较

> 简述：通过工资计算示例，比较过程式与面向对象编程的本质区别，展示过程式编程在可扩展性、维护性等方面存在问题。体现面向对象方式的优势。

**知识树**

1. 过程式编程

    - 特点：以方法（函数）为中心，强调程序流程。
    - 问题：
        - Fat Main：主方法逻辑冗长。
        - 参数过多：方法调用时参数臃肿，降低可读性。

2. 面向对象编程（OOP）

    - 特点：以对象为中心，封装数据与行为。
    - 优势：
        - 封装重构：强调面向对象编程将数据和行为封装在一起，减少了模块之间的依赖关系，使得系统的修改和重构更为容易。
        - 模块复用：强调类的定义独立性，可以轻松地在不同项目中复用，并且扩展新的功能时可以保持系统的稳定性。

**代码示例**

1. 过程式编程示例

    ```java
    public static void main(String[] args) {
        int baseSalary = 30_000;
        int extraHours = 10;
        int hourlyRate = 20;
        int totalWage = calculateWage(baseSalary, extraHours, hourlyRate);
        System.out.println("Total Wage: " + totalWage);
    }

    public static int calculateWage(
            int baseSalary,
            int extraHours,
            int hourlyRate) {
        return baseSalary + extraHours * hourlyRate;
    }
    ```

    - 描述：
        - 功能正常，但扩展后易产生参数过多、主方法臃肿的问题。

2. 面向对象编程示例见下一节

## 封装

> 简述：封装（encapsulate）是面向对象编程的基础原则，将数据和操作数据的方法整合到同一单元（对象）中。

**知识树**

1. 封装概念

    - 定义：将对象状态（数据）与行为（方法）组合成一个独立单元。

2. 封装实现

    - 将相关变量（字段）定义在类中
    - 将操作这些字段的方法封装在类内部

3. 封装优势

    - 降低模块之间关联（耦合）：数据和方法集中管理。
    - 增强复用性：独立类方便复用和维护。

**代码示例**

4. 继续上一个示例（封装）

    ```java
    public class Employee {
        public int baseSalary;
        public int hourlyRate;

    	public int calculateSalary(int extraHours) {
    		return baseSalary + (hourlyRate * extraHours);
    	}
    }
    ```

5. 调用示例

    ```java
    public class Main {
        public static void main(String[] args) {
            var employee = new Employee();
            employee.baseSalary = 30_000;
            employee.hourlyRate = 20;
            int totalWage = employee.calculateSalary(10);
            System.out.println(totalWage);
        }
    }
    ```

## Getter/Setter

> 简述：利用 getter 和 setter 方法，可以在设置数据时进行验证，提升系统健壮性。

**知识树**

1. Getter 与 Setter 本质

    - Getter：获取私有字段的值。
    - Setter：修改私有字段的值并可以进行合法性校验。

2. 数据验证与访问控制

    - 字段私有化（private）：禁止外部直接访问，保证数据安全。
    - 统一验证逻辑：避免每次访问重复验证，降低维护成本。

3. 自动生成 Getter/Setter 技巧

    - 快捷键（IDEA：Cmd+N ）：快速生成 getter/setter 方法。
    - Refactor 菜单：点击字段，按下 Control+T -> Encapsulate Fields。
    - 默认生成带 public 修饰符的 setter/getter

**代码示例**

1. 自定义 setter 方法实现数据验证

    ```java
    public class Employee {
        private int baseSalary;
        private int hourlyRate;

        public int calculateSalary(int extraHours) {
            return getBaseSalary() + (getHourlyRate() * extraHours);
        }

        public void setBaseSalary(int baseSalary) {
            if (baseSalary <= 0)
                throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
            this.baseSalary = baseSalary;
        }

        public int getBaseSalary() {
            return baseSalary;
        }

        public int getHourlyRate() {
            return hourlyRate;
        }

        public void setHourlyRate(int hourlyRate) {
            if (hourlyRate < 0)
                throw new IllegalArgumentException("Hourly Rate cannot be negative.");
            this.hourlyRate = hourlyRate;
        }
    }
    ```

    - 描述：通过将 `baseSalary` 、`baseSalary`设为私有，并在 setter 中进行验证，防止无效数据；同时提供 getter 方法读取该字段，避免直接访问。

2. 在 Main 类中使用封装后的 Employee 对象

    ```java
    public static void main(String[] args) {
        var employee = new Employee();
        employee.setBaseSalary(30_000);
        employee.setHourlyRate(20);
        int totalWage = employee.calculateSalary(10);
        System.out.println(totalWage);
    }
    ```

    - 描述：
        - 外部调用 setter 设置值，通过 getter 获取值，setter 确保数据的合法性。

## 抽象

> 简述：抽象（abstraction）是面向对象编程的基础原则，隐藏复杂实现细节，仅暴露必需的功能接口，聚焦对象“做什么”而非“如何做”，简化系统设计。

**知识树**

1. 核心概念

    - 隐藏内部细节
    - 暴露精简接口
    - 降低系统复杂度和模块之间关联（耦合）

2. 实现方式

    - 私有字段（private）：隐藏数据
    - 公共方法（public）：暴露外部接口，提供数据访问与行为控制
        - Getter/Setter 方法：访问或修改私有数据并验证有效性
        - 业务方法：定义对象外部可用的功能

3. 价值与优势

    - 简化调用：调用者只需了解接口，不用关心实现
    - 提高灵活性：修改实现细节，不影响接口调用

4. 举例

    - 我们使用遥控器，不需要关心里面的电路板，二极管，只需要开关调频道即可，即便遥控器更新换代，里面的设计结构等进行的跳槽，我们需要关心的依旧只有开关调频道这些功能。

## 耦合

> 简述：类或模块之间相互依赖的程度。低耦合设计减少模块间依赖，提高系统的独立性、可维护性和可扩展性。

**知识树**

1. 耦合的概念

    - 定义：衡量类或模块之间相互依赖的程度。
    - 低耦合：模块间通过简洁的接口交互，改动影响局限于少数模块。
    - 高耦合：模块间紧密依赖，修改一个模块可能引发连锁变更。

2. 耦合举例

    - 类比：人过度依赖手机及多个应用，失去手机会带来生活困扰
    - 示例：如果类 A 依赖于 B，而 B 又依赖于 C，修改 C 可能影响 B 和 A

3. 补充（需要后续学习理解）

    - 解耦（Decoupling）
        - 解耦的本质是减少直接依赖关系，使模块之间通过抽象或中介沟通，从而让系统更具灵活性和可维护性
    - 紧耦合（Tight Coupling）
        - 紧耦合本质上是模块之间强依赖的表现，系统的每个部分都紧密绑定，无法独立演化和变化。
    - 松耦合（Loose Coupling）
        - 松耦合的本质是模块间适度的依赖，保证模块能够相对独立工作，但又能在需要时进行交互和协作。

4. 降低耦合的策略（见示例 1）

    - 隐藏实现：将辅助方法设为 `private`，避免外部直接调用。
    - 简化接口：外部只调用核心公共方法。
    - 接口稳定：修改内部实现不影响外部调用（涉及构造函数传参数，后续学习）。

5. 耦合的实例与改进 1

    - 示例：`Main` 类直接使用 `Employee` 类的公共字段和冗余接口。
    - 改进：
        - 将数据设为 `private`，暴露必要的公共方法。
        - `Employee` 类中的不必要公开方法设为 `private`，减少外部依赖。

6. 示例演示

    - 通过 `Browser` 类展示公开与私有方法的区别。
    - 创建 `Browser.java` 文件，展示模块之间的交互与耦合控制。

**代码示例**

1. 降低耦合的改进示例 1（对比封装与 Set&Get 章节）

    ```java
    public class Employee {
        private int baseSalary;
        private int hourlyRate;

        public int calculateSalary(int extraHours) {
            return getBaseSalary() + (getHourlyRate() * extraHours);
        }

        public void setBaseSalary(int baseSalary) {
            if (baseSalary <= 0)
                throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
            this.baseSalary = baseSalary;
        }

        // 设置为 private
        private int getBaseSalary() {
            return baseSalary;
        }

        // 设置为 private
        private int getHourlyRate() {
            return hourlyRate;
        }

        public void setHourlyRate(int hourlyRate) {
    		if (hourlyRate < 0)
    		   throw new IllegalArgumentException("Hourly Rate cannot be negative.");
            this.hourlyRate = hourlyRate;
        }
    }
    ```

    - 描述：
        - Employee 类中，字段均设为 private，仅通过公共 setter 和业务方法（calculateSalary）暴露必要功能。
        - 私有 getter 方法隐藏内部数据结构，降低了 Main 类对 Employee 内部实现的依赖
        - Main 类中调用 Employee 类的实例对象时，仅能使用暴露的方法

2. `Browser.java`初版示例，方法均公开

    ```java
    package com.pang;

    public class Browser {
        public void navigate(String address) {
            String ip = findIpAdress(address);
            String html = sendHtttpRequest(ip);
            System.out.println(html);
        }

        public String sendHtttpRequest(String ip) {
            return "<html></html>" ;
        }

        public String findIpAdress(String address) {
            return "127.0.0.1";
        }
    }
    ```

    - 描述：Browser 类公开了辅助方法，使得外部模块可能直接调用 `findIpAdress()` 或 `sendHtttpRequest()`，导致高耦合和维护风险。

3. 低耦合改进示例

    ```java
    package com.pang;

    public class Browser {
        public void navigate(String address) {
            String ip = findIpAdress(address);
            String html = sendHtttpRequest(ip);
            System.out.println(html);
        }

        // 使用private隐藏
        private String sendHtttpRequest(String ip) {
            return "<html></html>" ;
        }

        // 使用private隐藏
        private String findIpAdress(String address) {
            return "127.0.0.1";
        }
    }
    ```

    - 描述：改进后，Browser 类仅公开核心方法 navigate()。内部辅助方法均设为 private，外部无需关注其实现，降低耦合风险。

4. 耦合风险示例（参数变更）

    ```java
    public class Browser {
        public void navigate(String address) {
            String ip = findIpAdress(address);
            String html = sendHtttpRequest(ip);
            System.out.println(html);
        }

        private String sendHtttpRequest(String ip) {
            return "<html></html>" ;
        }

        // 新增 cache 参数
        private String findIpAdress(String address, boolean cache) {
            return "127.0.0.1";
        }
    }
    ```

    - 描述：如果内部方法 findIpAdress 新增 cache 参数，导致内部逻辑调整，若外部（前提 public）调用该方法，必须更新调用参数。增加了代码的耦合性和维护难度

## 构造函数

> 简述：构造函数（Constructor）是在创建对象时自动调用的一种特殊方法，负责初始化对象状态，保证新建对象始终处于有效的、明确的初始状态，避免对象状态无效或模糊。

**知识树**

1. 构造函数定义

    - 定义
        - 方法名与类同名，无返回值；对象创建时自动调用
    - 作用
        - 初始化各个字段，确保对象状态有效
        - 隐式调用父类的无参构造函数（涉及继承关系，后续讲解）。
    - 默认与自定义的区别
        - 无显式构造函数时，编译器自动生成默认无参构造函数，隐式存在。
        - 一旦定义带参构造函数，默认构造函数失效，需无参构造函数时重新手动声明
    - 误区澄清
        - JVM 在内存分配时已为字段赋默认值（如数字 0、布尔 false、引用 null），构造函数若没有显式赋值，不会重复这一默认初始化

2. 默认构造函数

    - 定义：
        ```java
        public 类名() {}
        ```
    - 作用：
        - 隐式调用父类的无参构造函数（涉及继承关系，后续讲解）。
        - 初始化对象字段为默认值（若显式赋值才会执行）

3. 自定义构造函数（Parameterized Constructor，推荐）

    - 定义：
        ```java
        public 类名(参数列表) {
            // 初始化逻辑
        }
        ```
    - 作用：
        - 显式接收外部参数初始化对象状态
        - 父类构造函数的调用责任隐式转移到自定义构造函数（涉及继承关系，后续讲解）。
        - 建议：利用 setter 方法进行参数校验，提升安全性

4. 最佳实践

    - 保证状态一致：构造函数应一次性完成所有必要的初始化
    - 强制合法状态：对传入参数进行严格校验，防止非法数据
    - 封装与抽象：隐藏内部实现，仅暴露安全、明确的初始化接口

5. 示例

    - 依旧使用 Employee 类，最终创建的 Employee 示例中，只有一个计算方法，非常优雅

**代码示例**

1. 自定义构造函数（推荐实现方式）

    ```java
    public class Employee {
        private int baseSalary;
        private int hourlyRate;

        public Employee(int baseSalary, int hourlyRate) {
            setBaseSalary(baseSalary);
            setHourlyRate(hourlyRate);
        }

        public int calculateSalary(int extraHours) {
            return getBaseSalary() + (getHourlyRate() * extraHours);
        }

        public void setBaseSalary(int baseSalary) {
            if (baseSalary <= 0)
                throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
            this.baseSalary = baseSalary;
        }

        private int getBaseSalary() {
            return baseSalary;
        }

        private int getHourlyRate() {
            return hourlyRate;
        }

        public void setHourlyRate(int hourlyRate) {
            if (hourlyRate < 0)
                throw new IllegalArgumentException("Hourly Rate cannot be negative.");
            this.hourlyRate = hourlyRate;
        }
    }
    ```

2. 进一步优化，减少暴露接口

    ```java
    public class Employee {
        private int baseSalary;
        private int hourlyRate;

        public Employee(int baseSalary, int hourlyRate) {
            setBaseSalary(baseSalary);
            setHourlyRate(hourlyRate);
        }

        public int calculateSalary(int extraHours) {
            return getBaseSalary() + (getHourlyRate() * extraHours);
        }

    	// 隐藏内部实现
        private void setBaseSalary(int baseSalary) {
            if (baseSalary <= 0)
                throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
            this.baseSalary = baseSalary;
        }

        private int getBaseSalary() {
            return baseSalary;
        }

        private int getHourlyRate() {
            return hourlyRate;
        }

    	// 隐藏内部实现
        private void setHourlyRate(int hourlyRate) {
            if (hourlyRate < 0)
                throw new IllegalArgumentException("Hourly Rate cannot be negative.");
            this.hourlyRate = hourlyRate;
        }
    }
    ```

3. 创建实例并调用

    ```java
    public class Main {
        public static void main(String[] args) {
            var employee = new Employee(1,1);
            // 当输入 `employee.`后，你会发现，仅暴露了一个接口，没有冗余的get、set
            int totalWage = employee.calculateSalary(10);
            System.out.println(totalWage);
        }
    }
    ```

## 方法重载

> 简述：方法重载支持在同一类中定义多个同名方法，它们通过不同的参数列表来区分，从而为不同情形提供不同实现。

**知识树**

1. 方法重载概念

    - 定义：同一类中方法名相同，但参数数量、类型或顺序不同，返回值类型不作为重载依据
    - 作用：根据传入参数调用合适的实现，增强代码灵活性

2. 实现与应用

    - 通过重载提供不同输入的专用实现
    - 过度重载会降低代码可维护性，需合理设计接口

**代码示例**

1. 计算工资方法重载示例（Employee）

    ```java
    public int calculateSalary(int extraHours) {
        return getBaseSalary() + (getHourlyRate() * extraHours);
    }

    public int calculateSalary() {
        return calculateSalary(0);// 可以在方法内调用其他方法
    }
    ```

    - 描述：根据是否有额外工时调用不同版本的 calculateWage 方法，从而避免传递不必要的参数。

2. 主类调用重载方法示例

    ```java
    public static void main(String[] args) {
        var employee = new Employee(1,1);
        int totalWage = employee.calculateSalary();//调用新增的无参计算方法
        System.out.println(totalWage);
    }
    ```

    - 描述：展示如何根据实际需求选择调用合适的 calculateWage 重载版本，实现代码接口的简洁与灵活，这种形式的优化程度有限，仅用于作演示。

## 构造函数重载

> 简述：构造函数本身也是方法，可以进行重载操作。构造函数重载支持一个类定义多个构造函数，通过不同的参数组合初始化对象。

**知识树**

1. 构造函数重载概念

    - 定义：同一类中存在多个构造函数，区分依据为参数数量、类型或顺序
    - 目的：满足不同情景下的初始化需求

2. 重载策略与复用

    - 利用 `this(...)` 可以调用其他构造函数，复用初始化代码

3. 优势与注意事项

    - 优势：提高代码复用性、灵活性及对象状态一致性
    - 注意：自定义构造函数后默认构造函数不再自动生成；重载过多可能导致接口混乱

**代码示例**

1. 构造函数重载示例

    ```java
    // 构造函数：只初始化基本工资
    public Employee(int baseSalary) {
        // 调用另一构造函数，复用初始化逻辑；默认时薪设为 0
        this(baseSalary, 0);// 复用
    }

    // 构造函数：初始化基本工资和时薪
    public Employee(int baseSalary, int hourlyRate) {
        setBaseSalary(baseSalary);
        setHourlyRate(hourlyRate);
    }
    ```

    - 描述：Employee 类提供两个构造函数，一个只传入基本工资，另一个同时传入基本工资和时薪。通过 `this(...)` 可以复用初始化和验证逻辑。

2. 主类调用示例

    ```java
    public static void main(String[] args) {
        var employee = new Employee(20_000);
    }
    ```

    - 描述：将鼠标放在`new Employee(20_000)`中的`()`上时，可以看到其调用了两次构造函数

## 实例成员与静态成员

> 简述：Java 类中包含两种成员类型：实例成员（属于具体对象，每个对象独立拥有）与静态成员（属于类本身，所有该类的实例对象共享）。实例成员依赖具体对象创建后才能使用，描述对象的具体状态或行为；静态成员与类关联，在类加载时初始化，为类的公共数据。

**知识树**

1. 类成员概述

    - 实例成员：属于对象实例，只在对象创建后分配内存，表示各个实例独有的状态和行为。
    - 静态成员：属于类本身，类加载时分配内存，由所有实例共享，无需实例化即可访问。

2. 实例成员（Instance Members）

    - 定义：不含`static`关键字的字段和方法。
    - 特征：
        - 每个对象独立拥有各自的实例字段。
        - 实例方法内可自由访问实例字段和静态成员。
        - 需通过对象引用访问。

3. 静态成员（Static Members）

    - 定义：由`static`关键字修饰的字段和方法。
    - 特征：
        - 类加载时即创建，内存中仅存一份，由所有实例共享。
        - 直接通过类名访问，无需创建对象。
        - 静态方法无法访问实例成员（因实例成员在对象创建后才存在）。
    - 用途：
        - 静态字段：存储共享数据（如对象计数、配置信息）。
        - 静态方法：提供工具性、全局性功能，不依赖于特定对象状态。

4. 静态成员应用场景举例

    - 系统工具类方法（`Math.random()`、`Arrays.sort()`）。
    - 常用全局常量（`Math.PI`）。
    - 统计类或记录对象创建数量。

5. 特殊的静态方法`main`

    - `main` 方法必须为静态，便于 JVM 直接调用（无需实例化类即可启动程序）。

6. 常见静态成员举例

    - `System.out.println()`中`out`为静态字段（源码中显示的 null 是因为未被静态方法初始）
    - `Integer.parseInt()`为静态工具方法（字符串转整数）。

**代码示例**

1.  静态成员示例

    ```java
    public class Employee {
        private int baseSalary;
        private int hourlyRate;

        // 创建实例字段
        public static int numberOfEmployees;

        public Employee(int baseSalary) {
            this(baseSalary, 0);
        }

        public Employee(int baseSalary, int hourlyRate) {
            setBaseSalary(baseSalary);
            setHourlyRate(hourlyRate);
            numberOfEmployees++;
        }

        public static int getNumberOfEmployees() {
            // 在静态方法中，只能调用静态字段
            return numberOfEmployees;
        }

    	...

    }
    ```

    - 描述：
        - 实例字段`baseSalary`、`hourlyRate` 描述具体员工状态，每个员工独立拥有。
        - 静态字段`numberOfEmployees` 用于记录创建的对象总数，所有对象共享。
        - 静态方法`getNumberOfEmployees` 只能访问静态字段

2.  静态字段&方法调用

    ```java
    public class Main {
    	public static void main(String[] args) {
    		var employee1 = new Employee(20_000);
    		var employee2 = new Employee(30_000);
    		var employee3 = new Employee(50_000);
    		// 通过类名访问静态字段
    		System.out.println(Employee.numberOfEmployees);// 输出 3

    		var employee4 = new Employee(20_000);
    		var employee5 = new Employee(30_000);
    		var employee6 = new Employee(50_000);
    		// 通过类名访问静态方法
    		System.out.println(Employee.getNumberOfEmployees());// 输出6

    		// 通过对象调用实例方法
            System.out.println(emp2.calculateWage(10)); // 输出: 41000
    	}
    }
    ```

    - 描述：
        - 静态字段和方法可直接使用类名调用，无需创建额外对象。
        - 实例方法需通过对象引用调用，操作具体对象状态。

# Ex 贷款计算

## 过程式编程

> 简述：使用之前到贷款计算方法，所有的代码都在一个主类中，是典型的过程式编程。下面使用面向对象编程，将其拆分成一个个类。

- 原代码：

    ```java
    public class Main {
      final static byte MONTHS_IN_YEAR = 12;
      final static byte PERCENTAGE = 100;

      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);

          int principal = (int) readNumber("Principal: ", 1000, 1_000_000);
          float annualInterestRate = (float) readNumber("Annual Interest Rate: ", 1, 30);
          byte periodYear = (byte) readNumber("Period Year: ", 1, 30);

          printMortgage(principal, annualInterestRate, periodYear);
          printPaymentsSchedule(periodYear, principal, annualInterestRate);
      }

      private static void printMortgage(int principal, float annualInterestRate, byte periodYear) {
          double monthlyMortgage = caculateMortgage(principal, annualInterestRate, periodYear);

          String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);
          System.out.println("\nMortgage");
          System.out.println("---------");
          System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
      }

      private static void printPaymentsSchedule(byte periodYear, int principal, float annualInterestRate) {
          System.out.println("\nPayment Schedule");
          System.out.println("----------------");
          for (short month = 1; month <= periodYear * MONTHS_IN_YEAR; month++) {
              double balance = caculateBalance(principal, annualInterestRate, periodYear, month);
              System.out.println(NumberFormat.getCurrencyInstance().format(balance));

          }
      }

      public static double readNumber(String prompt, double min, double max) {
          Scanner scanner = new Scanner(System.in);
          double value;
          while (true) {
              System.out.print(prompt);
              value = scanner.nextDouble();
              if (value >= min && value <= max) break;
              System.out.print("Enter a value between " + min + " and " + max);
          }
          return value;
      }

      public static double caculateMortgage(
              int principal,
              float annualInterestRate,
              byte periodYear) {

          float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
          int periodMonth = periodYear * MONTHS_IN_YEAR;

          double monthlyMortgage = principal
                  - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          return monthlyMortgage;
      }

      public static double caculateBalance(
              int principal,
              float annualInterestRate,
              byte periodYear,
              short paymentsMade) {

          float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
          int periodMonth = periodYear * MONTHS_IN_YEAR;

          double banlance = principal *
                  (Math.pow((1 + monthlyInterestRate), periodMonth)
                          - Math.pow(1 + monthlyInterestRate, paymentsMade))
                  / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

          return banlance;
      }
    }
    ```

## 面向对象编程

**修改思路**

1. 存在几个方法，将其提取到新的类中（Control+T，快捷键操作见置顶章节）
    1. `readNumber`——`Console.java`
    2. `printMortgage`——`MortgageReport.java`
    3. `printPaymentsSchedule`——`MortgageReport.java`
    4. `caculateMortgage`——`MortgageCalculate.java`
    5. `caculateBalance`——`MortgageCalculate.java`
2. `Console.java`
    - 将方法`readNumber`抽取到`Console.java`（Command+T，Move Members）
    - 重写`readNumber`方法，考虑只有 Prompt 的情况，并提取 `scanner`
3. `MortgageReport.java`
    - 将方法 `printMortgage`，`printPaymentsSchedule`抽取到`MortgageReport.java`
4. `MortgageCalculate.java`
    - 将方法`caculateMortgage`，`caculateBalance`抽取到`MortgageCalculate.java`
    - 创建常用的实例参数 `principal`，`annualInterestRate`，`periodYear` 并使用 `private` 修饰，创建对应的构造函数 contructor（Command+N）
    - 取消方法的`principal`，`annualInterestRate`，`periodYear` 参数，方法中使用定义的实例字段，使用 Command+T 快捷键的 Change Signature 功能实现
    - 取消方法的 static，避免无法使用实例字段
5. `MortgageReport.java`
    - 引入`MortgageCalculate`实例 `mortgageCalculate`
    - 并将两个方法转为实例方法
    - 取消方法的三个参数
    - 将`printPaymentsSchedule`中的`periodYear`替换为`mortgageCalculate.getPeriodYear()`并使用快捷键生成只读方法
    - 为 `mortgageCalculate` 创建构造函数（使用快捷键）
6. `Main.java`
    - 在 main 方法中，使用读取到的三个方法，构建 MortgageCalculate 实例 mortgageCalculate
    - 使用 mortgageCalculate 构建 MortgageReport 实例 mortgageReport
    - 将常量转移到`MortgageCalculate`（这个类使用的最多）
7. `MortgageCalculate.java`
    - 将使用常量的两个计算提取成 get 方法，用 private 修饰
8. `MortgageReport.java`
    - 将 `MortgageReport.java` 中的循环计算方法提取到`MortgageCalculate.java`
    - 用增强 for 循环替换之前到循环方法
9. `MortgageCalculate.java`
    - 将`getPeriodYear()`删除（无引用）
    - 将两个常量设置为 `private`
10. `MortgageReport.java`
    - 将`NumberFormat.getCurrencyInstance()`提取成字段

**修改后代码**

- `Console.java`

    ```java
    public class Console {

    	private static Scanner scanner = new Scanner(System.in);

    	public static double readNumber(String prompt) {
    		return scanner.nextDouble();
    	}
    	public static double readNumber(String prompt, double min, double max) {
    		double value;
    		while (true) {
    			System.out.print(prompt);
    			value = scanner.nextDouble();
    			if (value >= min && value <= max) break;
    			System.out.print("Enter a value between " + min + " and " + max);
    		}
    		return value;
    	}
    }
    ```

- `MortgageReport.java`

    ```java
    package com.pang;

    import java.text.NumberFormat;

    public class MortgageReport {

        private final NumberFormat currencyInstance;
        private  MortgageCalculate mortgageCalculate;

        public MortgageReport(MortgageCalculate mortgageCalculate) {
            this.mortgageCalculate = mortgageCalculate;
            currencyInstance = NumberFormat.getCurrencyInstance();
        }

        public void printMortgage() {
            double monthlyMortgage = mortgageCalculate.caculateMortgage();

            String monthlyMortgageFormatted = currencyInstance.format(monthlyMortgage);
            System.out.println("\nMortgage");
            System.out.println("---------");
            System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
        }

        public void printPaymentsSchedule() {
            System.out.println("\nPayment Schedule");
            System.out.println("----------------");
            for(double balance : mortgageCalculate.getRemainingBanlance())
                System.out.println(currencyInstance.format(balance));
        }
    }
    ```

- `MortgageCalculate.java`

    ```java
    package com.pang;

    public class MortgageCalculate {

        private final static byte MONTHS_IN_YEAR = 12;
        private final static byte PERCENTAGE = 100;
        private int principal;
        private float annualInterestRate;
        private byte periodYear;

        public MortgageCalculate(int principal, float annualInterestRate, byte periodYear) {
            this.principal = principal;
            this.annualInterestRate = annualInterestRate;
            this.periodYear = periodYear;
        }

        public  double caculateMortgage() {

            float monthlyInterestRate = getMonthlyInterestRate();
            int periodMonth = getPeriodMonth();

            double monthlyMortgage = principal
                    - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                    / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

            return monthlyMortgage;
        }

        public  double caculateBalance(
                short paymentsMade) {

            float monthlyInterestRate = getMonthlyInterestRate();
            int periodMonth = getPeriodMonth();

            double banlance = principal *
                    (Math.pow((1 + monthlyInterestRate), periodMonth)
                            - Math.pow(1 + monthlyInterestRate, paymentsMade))
                    / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

            return banlance;
        }

        public double[] getRemainingBanlance() {
            var balances = new double[getPeriodMonth()];
            for (short month = 1; month <= balances.length * MortgageCalculate.MONTHS_IN_YEAR; month++) {
                balances[month - 1] = caculateBalance(month);
            }
            return balances;
        }

        private int getPeriodMonth() {
            int periodMonth = periodYear * MONTHS_IN_YEAR;
            return periodMonth;
        }

        private float getMonthlyInterestRate() {
            float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
            return monthlyInterestRate;
        }
    }
    ```

- `Main.java`

    ```java
    package com.pang;

    import java.util.Scanner;

    public class Main {

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            int principal = (int) Console.readNumber("Principal: ", 1000, 1_000_000);
            float annualInterestRate = (float) Console.readNumber("Annual Interest Rate: ", 1, 30);
            byte periodYear = (byte) Console.readNumber("Period Year: ", 1, 30);

            var mortgageCalculate = new MortgageCalculate(principal, annualInterestRate, periodYear);
            var mortgageReport = new MortgageReport(mortgageCalculate);

            mortgageReport.printMortgage();
            mortgageReport.printPaymentsSchedule();
        }

    }
    ```

# Inheritance

## 继承

> 简述：继承（Inheritance）是一种面向对象的设计方法，使子类自动具备父类的属性和行为，从而实现代码复用，避免代码重复，简化维护。

**知识树**

1. 继承定义与目的

    - 定义：子类（Subclass）通过扩展（`extends`）父类（Superclass）继承公共字段与方法
    - 目的：
        - 代码复用，避免重复编写相同功能
        - 增强类之间逻辑关系，方便统一维护

2. 继承的基本规则

    - 子类自动继承所有祖先类中声明为  public 或 protected 的成员。（修饰符在后续讲解）
    - 子类不能直接访问父类的 private 成员（需通过公共方法访问）。
    - 子类可新增独有成员以扩展父类功能。
    - 每个类仅可通过 extends 直接继承一个父类，但该父类可能自身有父类，从而构成一条继承链。

3. 继承实现示例

    - 父类定义公共功能，（如`启用控件`、`禁用控件`），被多个子类复用。
    - 子类通过 `extends` 自动继承父类功能，并可增加独有功能，如`设置文本内容`

4. 最佳实践

    - 只有存在显著共性的对象，才应设计继承结构。
    - 父类聚焦于公共抽象特征与方法，避免过于具体，降低修改父类的频率。
    - 继承关系必须满足"子类是父类的一种具体类型"的语义逻辑，避免概念上的误用。

5. 应用示例

    - 定义 `UIControl` 类，封装`启用`、`禁用`功能
    - `TextBox` 类通过 `extends UIControl` 继承这些功能，无需重复实现

**代码示例**

1. 父类 UIControl 示例

    ```java
    public class UIControl {
        private boolean isEnabled = true;

        public void enable() {
            isEnabled = true;
        }

        public void disable() {
            isEnabled = false;
        }

        public boolean isEnabled() {
            return isEnabled;
        }
    }
    ```

    - 描述：定义所有控件共有的状态管理方法（启用、禁用与状态查询）

2. 子类 TextBox 示例

    ```java
    // 使用 extend 关键字实现继承
    public class TextBox extends UIControl{
        private String text = ""; // Field

        public void setText(String text) {
            this.text = text;
        }

        public void clear() {
            this.text = "";
        }
    }
    ```

    - 描述：TextBox 自动拥有 UIControl 中的启用与禁用方法，同时额外定义了设置与清空文本的方法

3. TextBox 使用父类方法

    ```java
    public class Main {
        public static void main(String[] args) {
            var textBox = new TextBox();
            textBox.disable();
            System.out.println(textBox.isEnabled());// false
        }
    }
    ```

    - 描述：TextBox 实例自动继承并可使用父类定义的公共方法（如 disable 和 isEnabled）

## Object 类

> 简述：Object 类是 Java 中所有类的根类，任何类都会自动继承自 Object。Object 提供了一系列基础方法，这些方法支持对象的基本操作（如类型获取、相等性比较、哈希码计算和字符串表示），并允许用户通过重写自定义对象行为。

**知识树**

1. Object 类概述

    - Java 中所有类的直接或间接父类
    - 无需显式声明继承，编译器自动添加 `extends Object`

2. 常用方法

    - `getClass()`：
        - 获取对象运行时类型信息
    - `equals(Object obj)`：
        - 默认比较引用地址，可重写为内容比较
    - `hashCode()`：
        - 返回基于内存地址计算的整数哈希值
    - `toString()`：
        - 返回类全名加 "@" 和对象哈希码（十六进制）

3. 对象引用与哈希码关系

    - 引用相同对象时，`hashCode()` 返回值相同
    - 不同实例即使内容相同，默认实现下哈希码也不同

4. 方法重写建议
    - 对内容敏感的类（如 `Point` 坐标类），应重写 `equals()` 和 `hashCode()` 方法，以内容为基础进行比较

**代码示例**

1. 默认方法演示（未重写）

    ```java
    package com.pang;

    public class Main {
        public static void main(String[] args) {
            var box1 = new TextBox();
            System.out.println(box1.getClass());   // class com.pang.TextBox
            System.out.println(box1.hashCode());   // 哈希码，如：1159190947
            System.out.println(box1.toString());   // com.pang.TextBox@4517d9a3

            var box2 = box1;
            var box3 = new TextBox();
            System.out.println(box2.hashCode());   // 与 box1 相同，如：1159190947
            System.out.println(box3.hashCode());   // 与 box1 不同，如：925858445
            System.out.println(box2.equals(box1)); // true，同一引用
            System.out.println(box3.equals(box1)); // false，不同实例
        }
    }
    ```

    - 描述：展示 Object 类默认实现的几个核心方法的效果。默认情况下，对象比较和哈希码均基于内存引用，而非对象内容。

## 构造函数继承

> 简述：构造函数在对象创建时自动调用，子类构造函数会自动调用父类构造函数。若父构造函数中存在参数，需要在子构造函数中显式使用 `super()` 进行继承。

**知识树**

1. 继承中的构造函数调用

    - 默认行为
        - 子类构造函数若未显式调用父类构造函数，则自动隐式调用父类的无参构造函数
    - 父类只有带参数构造函数时
        - 子类必须通过 `super(...)` 显式调用父类构造函数，并传入所需参数
        - `super(...)` 调用必须位于子类构造函数的首行。
    - 父类同时定义无参和带参数构造函数时
        - 子类默认调用无参构造函数
        - 如需调用带参数构造函数，则在子类构造函数中显式使用 `super(...)`。

**代码示例**

1. 父类 UIControl 示例

    ```java
    public class UIControl {
        // 封装控件状态，默认启用
        private boolean isEnabled = true;

        public UIControl() {
            System.out.println("UIControl with no parameters");
        }

        public UIControl(boolean isEnabled) {
            this.isEnabled = isEnabled;
            System.out.println("UIControl with parameter");
        }

        // 启用控件
        public void enable() {
            isEnabled = true;
        }

        // 禁用控件
        public void disable() {
            isEnabled = false;
        }

        // 返回控件状态
        public boolean isEnabled() {
            return isEnabled;
        }
    }
    ```

2. 子类 TextBox 调用父类构造函数

    ```java
    // 使用 extend 关键字实现继承
    public class TextBox extends UIControl {
        public TextBox() {
            super(true); // 使用super后调用父类带参构造函数
            System.out.println("TextBox");
        }

        private String text = ""; // Field

        public void setText(String text) {
            this.text = text;
        }

        public void clear() {
            this.text = "";
        }
    }
    ```

3. Main.java

    ```java
    public class Main {
        public static void main(String[] args) {
            var box1 = new TextBox();// 观察输出内容
        }
    }
    ```

## 访问修饰符

> 简述：访问修饰符控制类成员的可见性，决定哪些成员可以被外部访问。常用修饰符包括 public（完全公开）、private（仅限类内部使用）和 protected（在同一包及子类中可见）。默认（包级私有）则仅在同一包内有效。

**知识树**

1. Public

    - 定义：对所有类公开，无访问限制
    - 适用：需要跨包使用的公共 API

2. Private

    - 定义：仅在声明它的类内部可见
    - 目的：隐藏实现细节，保护内部数据

3. Protected

    - 定义：在同一包内和子类中可访问
    - 注意：容易混淆，建议谨慎使用

4. 默认（包级私有）

    - 定义：无修饰符时，仅在同一包内可见
    - 建议：避免使用，以免引起混淆

5. 修饰符使用建议

    - 大部份情况下，只使用 public 或 private

## 方法重写

> 简述：方法重写允许子类重新定义从父类继承的方法，实现定制化行为。通过使用 @Override 注解，编译器能确保方法签名一致。
>
> -   “签名”指的是方法的名称和参数列表（包括参数的类型、数量及顺序）

**知识树**

1. 方法重写概念

    - 定义：子类中提供与父类相同方法名、参数列表及返回类型的全新实现
    - 区别：与方法重载不同，重写不改变方法签名，只改变实现

2. `@Override` 注解

    - 功能：告诉编译器该方法意图重写父类方法
    - 校验：确保方法签名完全匹配父类声明，防止误写

3. 应用实例

    - 例如：重写 `toString()` 方法以提供自定义的对象描述

**代码示例**

1.  重写 `toString()` 方法示例

    ```java
    public class TextBox extends UIControl {

        private String text = ""; // Field

        public void setText(String text) {
            this.text = text;
        }

        public void clear() {
            this.text = "";
        }

        @Override
        public String toString() {
            return "TextBox{" +
                    "text='" + text + '\'' +
                    '}';
        }
    }
    ```

    - 描述：`TextBox` 类重写了 `Object` 类中的 `toString()` 方法，使其返回文本框内容而非默认的类信息。

2.  主类调用重写方法示例

    ```java
    public class Main {
    	public static void main(String[] args) {
    		var box1 = new TextBox();
    		box1.setText("Hello World");
    		System.out.println(box1.toString());
    	}
    }
    ```

    - 描述：在 `Main` 类中打印 `TextBox` 对象时，自动调用重写后的 `toString()` 方法，输出 `Hello World`。

## 向上转型与向下转型

> 简述：向上转型（Upcasting）指子类对象转换为父类类型，安全且自动完成；向下转型（Downcasting）指父类引用转换回子类类型，需显式转换，存在类型安全风险，应结合 `instanceof` 关键字进行判断。

**知识树**

1. 向上转型（Upcasting）

    - 概念：将子类实例赋给父类引用，对象本质依然为子类，只是按父类接口使用。
    - 限制：无法直接访问子类专有成员（方法和变量），除非进行强制类型转换（向下转型）。
    - 特点：自动完成且安全；方法调用采用动态绑定，即运行时根据实际对象类型调用重写方法。

2. 向下转型（Downcasting）

    - 概念：将父类引用转换为子类引用，以访问子类特有成员。
    - 特点：需显式声明，存在运行时风险（可能引发 `ClassCastException`）。
    - 前提：只有当父类引用实际指向目标子类时，转换才是安全的。

3. 使用 `instanceof` 关键字进行类型检查

    - 功能：判断对象是否为指定类或其子类的实例。
    - 作用：确保向下转型前的类型安全，防止因类型不匹配而抛出异常。

4. 动态绑定（多态）

    - 概念：即使引用类型为父类，调用的方法也会根据对象的实际类型而执行子类的实现。
    - 说明：编译时确定引用类型，但运行时依据实际对象调用对应重写方法。

**代码示例**

1. 向上转型示例（自动完成、安全）

    ```java
    public class Main {
        public static void main(String[] args) {
            var control = new UIControl();
            var textBox = new TextBox();
            show(textBox);
        }

        private static void show(UIControl control) {// 自动完成转型：UIControl 接收 textBox
            System.out.println(control);// 仍然使用子类的toString方法 TextBox{text=''}
        }
    }
    ```

    - 说明：直接转换，子类实例 textBox 拥有父类 UIControl 的所有成员

2. 向下转型示例（显式、需谨慎）

    ```java
    public class Main {
        public static void main(String[] args) {
            var control = new UIControl();
            var textBox = new TextBox();
            show(control);
        }

        private static void show(UIControl control) {
            TextBox textBox = (TextBox) control; // ClassCastException 异常
            System.out.println(control);
        }
    }
    ```

    - 描述：由于类型不匹配，发生`ClassCastException`异常。

3. 向下转型条件

    ```java
    public class Main {
        public static void main(String[] args) {
            var control = new UIControl();
            var textBox = new TextBox();
            show(textBox);
        }

        private static void show(UIControl control) {
            TextBox textBox = (TextBox) control;// control原本是TextBox类型
            System.out.println(control);// TextBox{text=''}
        }
    }
    ```

    - 描述：control 原本就是 TextBox 类型，转为 UIControl 后，又重新转为 TextBox，不会发生异常

4. 向上转型时使用子类独有成员

    ```java
    public class Main {
        public static void main(String[] args) {
            var control = new UIControl();
            var textBox = new TextBox();
            show(textBox);
        }

        private static void show(UIControl control) {
            TextBox textBox = (TextBox) control;
            textBox.setText("Hello World");
            System.out.println(control);// 使用了子类的toString方法 TextBox{text='Hello World'}
        }
    }
    ```

    - Upcasting 时，转为父类后无法直接使用子类的成员，需要重新转为为子类，才能使用子类成员

5. 使用 instanceof 关键字

    ```java
    public class Main {
        public static void main(String[] args) {
            var control = new UIControl();
            var textBox = new TextBox();
            show(control);
        }

        private static void show(UIControl control) {
            if (control instanceof TextBox) {// 进行判断，避免异常
                TextBox textBox = (TextBox) control;
                textBox.setText("Hello World");
            }
            System.out.println(control);
        }
    }
    ```

    - 描述：在调用 TextBox 特有方法前，使用 instanceof 检查确保对象类型，然后进行 downcasting，从而安全地访问子类方法，避免 ClassCastException。

## 对象比较与哈希值

> 简述：通过重写 `equals` 与 `hashCode` 方法，可实现对象基于内容的比较与哈希值生成，确保对象相等逻辑与哈希集合（如`HashSet`、`HashMap`）行为一致，避免意外错误。集合相关内容在后续讲解。

**知识树**

1. 默认比较机制

    - 对象默认使用内存地址比较引用
    - `equals()` 默认与 `==` 等效，仅判断引用是否指向相同对象
    - `hashCode()` 默认使用内存地址计算，内容相同但地址不同则哈希值不同

2. 重写 `equals()` 方法（基于内容比较）

    - 目的：
        - 实现基于对象内部数据的相等性判断，满足业务逻辑需求
    - 步骤：
        - 判断引用是否完全相同（优化性能）
        - 判断类型是否一致（`instanceof` 或 `getClass()`）
        - 进行向下转型并比较具体字段值
    - 注意：
        - 参数必须为`Object`类型，否则为方法重载非重写
        - 必须先进行类型检查以防止`ClassCastException`
        - 重写`equals()`时必须同时重写`hashCode()`确保一致性

3. 重写 `hashCode()` 方法（基于内容计算哈希）

    - 目的：
        - 保证在哈希结构（如哈希表）中的对象行为一致
        - 满足约定：若对象`equals()`相等，则哈希值必须相同
    - 常见用途：
        - 使用`Objects.hash()`组合字段计算哈希

4. IntelliJ 自动生成 equals 和 hashCode

    - 推荐使用 IDE 工具自动生成，减少手写代码导致的错误风险，快捷键 Command+N

**代码示例**

1. 创建 `Point` 类，手动重写 `equals` 与 `hashCode`

    ```java
    public class Point {
        private int x;
        private int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj)
                return true;

            if (!(obj instanceof Point p))
                return false;

            var other = (Point) obj;
            return x == other.x && y == other.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }
    ```

2. IntelliJ 自动生成 `equals` 与 `hashCode` 方法（Command + N）

    ```java
    public class Point {
        private int x;
        private int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            if (o == null || getClass() != o.getClass()) return false;
            Point point = (Point) o;
            return x == point.x && y == point.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }
    ```

    - 描述：不同 JDK 版本代码可能略有差异，以实际生成代码为准。

## 多态

> 简述：多态（Polymorphism）使得同一接口在不同对象上具有不同实现。通过继承和方法重写，程序可以在运行时动态决定调用哪个具体方法，从而简化条件判断，增强系统的灵活性和可扩展性。

**知识树**

1. 多态的定义

    - 来源：希腊语“poly”（多）与“morph”（形态）
    - 定义：允许同一方法在不同对象中有不同表现；父类引用调用子类重写的方法。

2. 多态的优势

    - 统一接口管理不同子类对象
    - 运行时动态绑定，减少冗长条件判断

3. 重载与重写

    - 区分：两者都体现多态，但实现机制不同
    - 重载（Overloading）：
        - 同一类中定义多个同名但参数不同的方法
        - 编译时根据参数类型和数量进行方法选择（静态多态）
    - 重写（Overriding）：
        - 子类重新实现父类中已定义的方法
        - 运行时根据对象的实际类型决定调用哪个版本（动态多态）

**代码示例**

1. 定义父类 UIControl 及子类重写示例

    - UIControl.java 创建基础 render()方法

        ```java
        public class UIControl {

        	private boolean isEnabled = true;

            public void render() {
                // 空实现，由子类实现具体逻辑
            }

        	...

        }
        ```

    - 创建 CheckBox.java，继承 UIControl 并重写 render()方法

        ```java
        public class CheckBox extends UIControl {
          @Override
          public void render() {
              System.out.println("Rendering CheckBox");
          }
        }
        ```

    - 修改 TextBox.java，重写父类 render()方法

        ```java
        public class TextBox extends UIControl {

          private String text = ""; // Field

          @Override
          public void render() {
              System.out.println("Render TextBox");
          }

        	...

        }
        ```

    - 描述：TextBox 和 CheckBox 继承 UIControl 并分别重写了 render 方法，实现各自的渲染逻辑。

2. 多态调用示例

    ```java
    public class Main {
        public static void main(String[] args) {
            UIControl[] controls = {new TextBox(), new CheckBox()};
            for (UIControl control : controls)
                control.render(); // 根据实际对象类型动态调用各自的 render 方法，避免IF判断
        }
    }
    ```

    - 描述：通过父类引用数组管理不同控件，实现多态调用，无需额外的条件判断即可执行正确的渲染行为。

## 抽象类与抽象方法

> 简述：抽象类定义了一个概念性的基类，不能被实例化，能被继承，仅用于封装共有行为并强制子类实现特定方法。抽象方法仅声明不提供实现，子类必须重写这些方法以提供具体行为。

**知识树**

1. 抽象类的定义与作用

    - 定义：用 `abstract` 修饰的类，不能直接实例化
    - 作用：提供公共代码，作为子类的基类，通过抽象方法来规定子类必须提供的行为。

2. 抽象方法

    - 定义：在抽象类中声明但不实现的方法，以分号结束
    - 要求：所有非抽象子类必须实现所有父类抽象方法，否则子类也必须声明为 abstract

3. 使用场景

    - 适用于定义一组相关类的公共行为，同时允许各子类有不同实现
    - 示例：UI 控件类（UIControl）定义抽象的 render() 方法，具体控件（如 TextBox、CheckBox）实现自己的渲染逻辑

**代码示例**

1. 案例引入，`UIControl` 作为抽象概念，不应直接实例化，只能用其子类（如 `TextBox`、`CheckBox`）的实例替代。

    ```java
    public class Main {
        public static void main(String[] args) {
            UIControl[] controls = {new UIControl(), new TextBox(), new CheckBox()};
            for (UIControl control : controls)
                control.render(); // 根据实际对象类型动态调用各自的 render 方法，避免IF判断
        }
    }
    ```

2. 将 `UIControl` 修改为抽象类， `render()` 修改为抽象方法

    ```java
    public abstract class UIControl {

    	private boolean isEnabled = true;

        public abstract void render();

    	...

    }
    ```

    - 描述：`UIControl` 类声明为 `abstract`，包含抽象方法 `render()` 用于强制子类提供渲染实现

3. 子类实现抽象方法

    ```java
    public class CheckBox extends UIControl {
        @Override
        public void render() {
            // 实现 CheckBox 的渲染逻辑
            System.out.println("Rendering CheckBox...");
        }
    }
    ```

    - 描述：`CheckBox` 类继承 `UIControl` 并实现抽象方法 `render()`，满足编译要求；如果未实现 `render()`，则 `CheckBox` 必须声明为 `abstract`。

## Final

> 简述：`final` 关键字用于声明不可修改的类、方法或常量。`final` 类无法被继承，`final` 方法无法被重写。它们通常用于确保类的实现不被改变，保证类的行为不被意外修改。`final` 还可以用于声明常量。

**知识树**

1. final 类

    - 定义：声明为 `final` 的类不能被继承。
    - 作用：防止其他类对该类进行继承，确保该类的行为和实现不被修改。
    - 使用场景：通常用于防止类的扩展，尤其是在类的设计已非常具体，无法被进一步修改时。

2. final 方法

    - 定义：声明为 `final` 的方法不能在子类中被重写。
    - 作用：确保某些方法的实现不被子类修改，保证方法的行为一致。
    - 使用场景：适用于方法的实现涉及特定逻辑，改变该逻辑会导致不可预知的行为时。

3. 设计考虑

    - `final` 类和方法的使用应谨慎，因为它们限制了继承和多态的使用，但在某些情况下（如类的行为已完全确定），可以避免被继承或修改。

**代码示例**

1. final 类示例

    ```java
    public final class CheckBox {
        private boolean isChecked = false;

        public void toggle() {
            isChecked = !isChecked;
        }

        public boolean isChecked() {
            return isChecked;
        }
    }

    // 下面的代码会导致编译错误，因为 CheckBox 类是 final
    // public class MyCheckBox extends CheckBox {} // 编译错误
    ```

    - 描述：`CheckBox` 类被声明为 `final`，因此无法继承，确保该类的实现不被修改。

2. final 方法示例

    ```java
    public class UIControl {
        public final void enable() {
            // 启用控制逻辑
            System.out.println("Control enabled.");
        }
    }

    public class CheckBox extends UIControl {
        // 下面的代码会导致编译错误，因为 enable() 方法是 final
        // @Override
        // public void enable() { } // 编译错误
    }
    ```

    - 描述：`UIControl` 类中的 `enable()` 方法被声明为 `final`，因此不能在 `CheckBox` 类中重写，保证了该方法的实现不可修改。

## 避免过度继承

> 简述：继承提供了代码复用和多态行为，但过度使用继承可能导致紧密耦合和复杂的类层级，增加代码维护和重构的难度。应当谨慎使用继承，避免创建过深的继承层次。

**知识树**

1. 继承的优点

    - 代码复用：通过继承可以重用父类的属性和方法，避免重复代码。
    - 多态：子类可以继承父类的行为，并根据需要进行修改。

2. 继承的风险

    - 深层次继承：深层继承会导致类之间紧密耦合，修改一个类可能导致许多相关类的修改或重编译。
    - 不必要的继承：如果某些属性或行为不适合继承，可能会污染类层次结构，导致不必要的复杂性。
    - 不灵活性：当类层级复杂时，修改父类会影响到大量子类，降低代码的灵活性和可维护性。

3. 避免过度继承的策略

    - 合理设计类层级，避免不必要的深层继承。
    - 简化继承关系：避免冗余的子类，通过添加必要的字段或方法来实现所需功能。
    - 使用组合替代继承（Java 中存在组合的概念，这里不过多引入）。

**代码示例**

1. 错误的继承设计（过深的继承层次）

    ```java
    Entity
        ├── User
        │     ├──Instructor
        │     │       ├──RegularInstructor
        │     │       └──PremiumInstructor
        │     └─Student
        └── Course
    ```

    - 描述：在该设计中，`User` 类和 `Course` 类与 `Entity` 类紧密耦合。如果 `Entity` 类发生变化（例如构造函数的变动），所有继承了该类的子类都需要修改和重新部署。这增加了系统的复杂度和维护成本。

2. 简化继承设计

    - 若 Instructor 和 Student 的重复代码不多，将其单独定义避免耦合
    - PremiumInstructor 和 RegularInstructor 使用字段区分，只保留 Instructor
    - 最后只剩下 Instructor、Student、Course 三个类

## 多重继承

> 简述：Java 设计选择不支持类的多重继承，以避免多重继承带来的复杂性。多重继承可能导致不明确的行为和复杂的类关系，这种设计决策旨在保持语言的简洁性和健壮性。

**知识树**

1. 多重继承的定义

    - 多重继承指的是一个类可以同时继承多个父类，继承多个父类的属性和方法。
    - C++和 Python 等语言支持多重继承，但 Java 设计者选择不支持这一特性。

2. 多重继承的复杂性

    - 当多个父类定义了相同签名但不同实现的方法时，不清楚应该继承哪一个实现。例如，类 A 和类 B 都定义了一个相同的方法`toString()`，但实现不同，类 C 继承时无法决定使用哪一实现。
    - 类 A 和类 B 如果都有一个名为`game`的字段，类 C 应该继承哪个字段也是不明确的。

3. Java 的设计决策

    - Java 选择不支持多重继承，以避免这些复杂性和潜在的模糊性。
    - Java 中，所有类都直接或间接继承自`Object`类。即使是复杂的类层次结构，最终也会从`Object`类继承，而`Object`类本身并没有多重继承问题。
    - Java 采用接口来弥补多重继承的需求，一个类可以实现多个接口，但只能继承一个类，避免了多重继承带来的问题。

# Implement

## 接口

> 简述：接口（Interface）是一种面向对象的设计机制，它定义了一组行为契约，规定了实现者必须提供哪些方法，而不涉及具体的实现细节。接口关注的是“做什么”，而非“怎么做”，通过这种抽象层次的隔离，实现了解耦、多态和灵活扩展

**知识树**

1. 接口定义与目的

    - 定义：接口通过关键字 interface 定义，实现类通过 implements 接口，实现其声明的方法。
    - 概念：一种纯抽象类型，仅包含方法签名和常量（默认均为 public static final）。
    - 扩展：从 Java 8 起，可包含默认方法和静态方法（不推荐使用）。

2. 设计目的

    - 统一规范：为不同类提供一致的行为标准，确保相同接口实现能一致调用。
    - 解耦替换：依赖于抽象而非具体实现，增强模块之间的解耦性和灵活替换能力。

3. 继承与实现规则

    - 类与接口：类仅支持单继承，但可实现多个接口；接口之间允许多重继承。
    - 无实现冲突：接口只定义行为，不涉及实现细节，避免多实现冲突。

4. 接口与现实生活的类比

    - 充电器示例：任何符合接口规范的充电器都可通用，无需关注品牌或内部构造。
    - 餐厅与厨师：只关心厨师是否具备烹饪能力（接口），而非其具体身份（实现）。

5. 接口实现示例

    - 创建创建 TaxCalculator2024 类、TaxCalculator2025 类，用于计算这两年的税收标准
    - 创建 TaxReport 类，用于输出结果
    - 版本迭代问题：
        - 若 TaxReport 中直接引用 TaxCalculator2024，当税收标准迭代（如更新到 2025）时，需修改 TaxReport，增加维护成本。
    - 解决方案：
        - 创建税收接口 TaxCalculator，写下计算方法
        - 让 TaxCalculator2024/2025 实现（Implement）TaxCalculator
        - 在 TaxReport 中，使用最常见的构造函数进行依赖注入，当税收标准迭代时，不再影响 TaxReport

6. 快捷键

    - 勾选接口名，control+T，提取接口

**代码示例**

7. 未使用接口的情况

    - TaxCalculator2024 类

        ```java
        public class TaxCalculator2024 {

        	private double taxableIncome;

        	public TaxCalculator2024(double taxableIncome) {
        		this.taxableIncome = taxableIncome;
        	}

        	public double calculateTax() {
        		return taxableIncome * 0.3;
        	}
        }
        ```

    - TaxCalculator2025 类

        ```java
        public class TaxCalculator2025 {

        	private double taxableIncome;

        	public TaxCalculator2025(double taxableIncome) {
        		this.taxableIncome = taxableIncome;
        	}

        	public double calculateTax() {
        		return taxableIncome * 0.5;
        	}
        }
        ```

    - TaxReport 类

        ```java
        public class TaxReport {

            private TaxCalculator2024 calculator;

            public TaxReport(double taxableIncome) {
                // 传统方式，类负责创建自身所依赖的对象
                this.calculator = new TaxCalculator2024(taxableIncome);
            }

            public void show() {
                var tax = calculator.calculateTax();
                System.out.println("Tax: " + tax);
            }
        }
        ```

8. 使用接口

    - 创建接口 TaxCalculator

        ```java
        public interface TaxCalculator {
            double calculateTax();
        }
        ```

    - TaxCalculator2024 类 实现接口 TaxCalculator

        ```java
        public class TaxCalculator2024 implements TaxCalculator {

            private double taxableIncome;

            public TaxCalculator2024(double taxableIncome) {
                this.taxableIncome = taxableIncome;
            }

            @Override
            public double calculateTax() {
                return taxableIncome * 0.3;
            }
        }
        ```

    - TaxCalculator2025 类 实现接口 TaxCalculator

        ```java
        public class TaxCalculator2025 implements TaxCalculator {

        	private double taxableIncome;

        	public TaxCalculator2025(double taxableIncome) {
        		this.taxableIncome = taxableIncome;
        	}

        	public double calculateTax() {
        		return taxableIncome * 0.5;
        	}
        }
        ```

    - TaxReport 类在迭代时不再需要更改

        ```java
        public class TaxReport {

            private TaxCalculator calculator;

            public TaxReport(TaxCalculator calculator) {
                this.calculator = calculator;
            }

            public void show() {
                var tax = calculator.calculateTax();
                System.out.println("Tax: " + tax);
            }
        }
        ```

## 依赖注入

> 简述：依赖注入（DI）是一种软件设计模式，其核心思想是将对象所依赖的资源由外部传入，而非在内部自行创建。这样不仅降低了模块间的耦合度，也大幅提升了代码的可测试性和可维护性。

**知识树**

1. 依赖注入基本概念

    - 定义：通过外部提供依赖对象，实现模块间的解耦。
    - 目的：使得类不再负责依赖对象的创建，从而降低耦合度和增强模块的独立性。

2. 控制反转（IoC）原理

    - 概念：传统编程中，类负责创建自身所依赖的对象；而在 IoC 中，这一责任交给外部容器或调用者。
    - 关系：依赖注入是实现 IoC 的一种常见方式，二者共同推动了松耦合设计的实现。

3. DI 实现方式

    - 构造器注入（主要）：
        - 通过构造函数传递依赖，保证对象在创建时即拥有所有必需依赖。
    - Setter 方法注入：
        - 通过公开的 setter 方法提供依赖，适用于依赖可选或需要在对象生命周期中变更的场景。
    - Method 注入：
        - 通过在具体方法中直接使用构造函数，本质和 setter 注入一样
    - 接口注入（补充）：
        - 通过实现特定接口，由调用者注入依赖，较为少见。
        - 通俗来说，就是在实现接口的过程中，额外套一层接口

4. 懒汉式
    - 下面具体使用对象的过程为“简单懒汉式”，即在需要时才实例化，但有时候需要使用某个类的对象很多次，这时候需要使用到框架比如 Spring，Spring 框架默认采用的是”饿汉式单例模式“，即在容器启动时就初始化所有单例 bean，而不是在第一次使用时才创建它们。

**代码示例**

1. 构造器注入

    - TaxReport 类中 造器注入 TaxCalculator

        ```java
          public class TaxReport {

              private TaxCalculator calculator;

        	// 构造器注入
              public TaxReport(TaxCalculator calculator) {
                  this.calculator = calculator;
              }

              public void show() {
                  var tax = calculator.calculateTax();
                  System.out.println("Tax: " + tax);
              }
          }
        ```

    - Main 中具体使用（懒汉式使用）

        ```java
        public class Main {
            public static void main(String[] args) {
                var calculator = new TaxCalculator2024(200_000);
                var taxReport = new TaxReport(calculator);
                taxReport.show();
            }
        }
        ```

2. Setter 方法注入

    - TaxReport 类中 Setter 方法注入 TaxCalculator

        ```java
        public class TaxReport {

            private TaxCalculator calculator;

            public void show() {
                var tax = calculator.calculateTax();
                System.out.println("Tax: " + tax);
            }

        	//  Setter 方法注入
            public void setCalculator(TaxCalculator calculator) {
                this.calculator = calculator;
            }
        }
        ```

    - Main 中具体使用（懒汉式使用）

        ```java
        public class Main {
            public static void main(String[] args) {
                var calculator1 = new TaxCalculator2024(200_000);
                var calculator2 = new TaxCalculator2025(200_000);

                // var taxReport = new TaxReport(calculator);
                var taxReport = new TaxReport();
                taxReport.setCalculator(calculator1);
                taxReport.show();

                taxReport.setCalculator(calculator2);
                taxReport.show();
            }
        }
        ```

3. Method 注入（直接在具体方法中使用构造器）

    - TaxReport 类 具体方法中 注入 TaxCalculator

        ```java
        public class TaxReport {

            private TaxCalculator calculator;

        	//  Method 注入
            public void show(TaxCalculator calculator) {
                var tax = calculator.calculateTax();
                System.out.println("Tax: " + tax);
            }
        }
        ```

    - Main 中具体使用（懒汉式使用）

        ```java
        public class Main {
            public static void main(String[] args) {
                var calculator1 = new TaxCalculator2024(200_000);
                var calculator2 = new TaxCalculator2025(200_000);

                var taxReport = new TaxReport();
                taxReport.show(calculator1);

                taxReport.show(calculator2);
            }
        }
        ```

## 接口分离法则

> 简述：接口分离法则（ISP：Interface Segregation Principle）是面向对象设计中 SOLID 原则的其中之一，它强调客户端不应被强迫依赖于它不使用的方法。换句话说，应当将臃肿的大接口拆分成多个更小、更具体的接口，使每个接口只对特定的客户端暴露它真正需要的方法，以提升系统的灵活性和可维护性。

**知识树**

1. 本质

    - 接口的职责应单一且明确
    - 客户端与接口之间的契约越简洁越好
    - 避免"胖接口"（Fat Interface）现象
    - 客户端：依赖接口进行功能调用的模块或类。

2. 为什么需要接口分离法则

    - 降低系统耦合度
    - 提高接口复用性
    - 提升代码可读性与可维护性
    - 减少客户端冗余代码和实现负担

3. 如何正确实施接口分离法则

    - 根据使用者视角设计接口，而非实现视角
    - 在接口膨胀时，拆分接口为更小更明确的接口
    - 提取公共方法至独立接口以提高复用性

4. 接口分离示例
    - 创建一个接口 UIWidget，里面定义 3 个方法 render，drag，resize
    - 创建一个类 Dragger，实现 UIWidget
    - 问题：
        - Dragger 必须实现 UIWidget 中所有方法，但 Dragger 仅需使用 drag 相关的方法
        - 如果修改了 Dragger 使用不到的方法，Dragger 也需要跟着更改，增加了维护成本

**代码示例**

1. 未拆分接口的情况（UIWidget 接口）

    ```java
    public interface UIWidget {

    	void render();

    	void drag();

    	void resize();
    }
    ```

    - 如果增加方法`drag(int x, int y)`，那么所有 UIWidget 实现类中必须添加这个方法的实现

2. 拆分接口（使用 control+T 拆分）

    - Draggable 接口

        ```java
        public interface Draggable {

            void drag();

            void drag(int x, int y);
        }
        ```

    - Resizable 接口

        ```java
        public interface Resizable {

          void resize();
        }
        ```

    - UIWidget 接口

        ```java
        public interface UIWidget extends Draggable, Resizable {

          void render();
        }
        ```

## 接口特性

> 简述：接口从 JDK1.0 起仅定义行为契约，但随着 Java 版本升级引入了常量字段、静态方法和私有方法，这些新增特性虽提供了便利和复用，但也引发了对接口应保持纯抽象性的争议。

**知识树**

1. 常量字段（JDK1.0）

    - 定义：接口中声明的常量自动为 public static final
    - 缺点：将常量与接口绑定，可能限制设计的灵活性

2. 静态方法（JDK8.0）

    - 定义：允许在接口中定义具体实现的静态方法
    - 缺点：静态方法属于接口自身，可能在未来更改，违背“只定义契约”的初衷

3. 私有方法（JDK9.0）

    - 定义：接口可包含私有方法以封装默认方法中共用的辅助逻辑
    - 缺点：暴露具体实现细节，可能增加维护复杂度

4. 设计争议与最佳实践
    - 争议：新增实现细节使接口从纯抽象“契约”转变为混合类型
    - 建议：谨慎使用静态和私有方法，确保接口主要用于定义行为，而非承担过多实现责任

## 接口与抽象类

> 简述：接口和抽象类都是定义行为契约的工具，但它们各有侧重。接口强调纯粹的行为声明和松耦合，而抽象类则允许部分实现以便代码复用。随着 Java 版本的演进，接口也引入了静态和私有方法，这虽然增加了灵活性，但也引发了设计上的争议。

**知识树**

1. 基本定义

    - 接口：只包含方法声明和常量，不提供实现（早期 Java）；用于定义行为契约。
    - 抽象类：可包含抽象方法和具体实现，用于代码复用和部分实现共享。

2. 设计目的

    - 接口：建立松耦合、可扩展和易于测试的系统，强调“做什么”。
    - 抽象类：提供基础实现，简化多个子类的共同代码，强调“如何做”。

3. Java 新特性对接口的影响

    - 静态方法：允许在接口中定义具体实现，但改变了接口的纯契约特性。
    - 私有方法：用于封装默认方法中的共用逻辑，同样引入实现细节。
    - 争议：滥用这些特性可能导致接口变得臃肿，不再纯粹。

4. 使用场景与建议
    - 当仅需定义行为而无实现时，使用接口；当需要共享部分实现时，使用抽象类。
    - 避免用接口实现多重继承，保持设计清晰、耦合低。

# ---

## 引入示例

> 简述：引入一个税收示例，此示例展示了紧耦合的情况，当 TaxCalculator 的计算逻辑发生变化时，依赖它的 TaxReport 类也需要同步修改，带来维护上的困难。

**代码引入**

1. 创建 TaxCalculator 类，用于计算税收
2. 创建 TaxReport ，用于输出结果，TaxReport 中使用了 TaxCalculator，即 TaxReport 依赖于 TaxCalculator
3. 如果 TaxCalculator 的计算过程发生改变，比如额外加上 exemption 参数，TaxReport 将会出现异常，需要同步修改它，此外每年的税收规则都可能会变化，如果依赖于 TaxCalculator 的类过多，修改计算规则时，需要修改的地方将越来越多

**代码示例**

1. 创建 TaxCalculator 类，用于计算税收

    ```java
    public class TaxCalculator {

        private double taxableIncome;

        public TaxCalculator(double taxableIncome) {
            this.taxableIncome = taxableIncome;
        }

        public double calculateTax() {
            return taxableIncome * 0.3;
        }
    }
    ```

2. 创建 TaxReport ，用于输出结果

    ```java
    public class TaxReport {

        private TaxCalculator calculator;

        public TaxReport(double taxableIncome) {
            this.calculator = new TaxCalculator(taxableIncome);
        }

        public void show() {
            var tax = calculator.calculateTax();
            System.out.println("Tax: " + tax);
        }
    }
    ```

3. 调用示例

    ```java
    public class Main {
        public static void main(String[] args) {
            var report = new TaxReport(200_000);
            // var report = new TaxReport();
            report.show();
        }
    }
    ```

## 使用接口

> 简述：在税收示例的基础上改变，若税收规则改变，同时希望保留之前的税收类，这时可以创建一个税收计算接口，每年的税收类都引用这个接口并实现接口中的方法。

**知识树**

1. 接口中的方法默认为 public 和 abstract
2. 接口不能有具体实现，这一点与抽象类相似
3. 类可以实现多个接口，只能继承一个类，这两者可以同步进行

**修改思路**

1. 将之前的税收类改为 TaxCalculator2024
2. 创建税收接口 TaxCalculator，写下计算方法
3. 让 TaxCalculator2024 实现（Implement）TaxCalculator，并重写接口中的方法，若方法名相同，需要加上@Override
4. 此时 TaxReport 中，依旧使用了实例化了 TaxCalculator2024，这仍然有些耦合

代码示例

1. 修改后的 TaxCalculator2024

    ```java
    public class TaxCalculator2024 implements TaxCalculator {

        private double taxableIncome;

        public TaxCalculator2024(double taxableIncome) {
            this.taxableIncome = taxableIncome;
        }

        @Override
        public double calculateTax() {
            return taxableIncome * 0.3;
        }
    }
    ```

2. 创建的的 TaxCalculator 接口

    ```java
    public interface TaxCalculator {
        double calculateTax();
    }
    ```

3. 同步修改后的 TaxReport

    ```java
    public class TaxReport {

        private TaxCalculator2024 calculator;

        public TaxReport(double taxableIncome) {
            this.calculator = new TaxCalculator2024(taxableIncome);
        }

        public void show() {
            var tax = calculator.calculateTax();
            System.out.println("Tax: " + tax);
        }
    }
    ```

## 依赖注入

> 简述：在 TaxReport 中，依旧创建了 TaxCalculator2024 对象，使用 TaxCalculator2024 和创建 TaxCalculator2024 的对象，是两种概念，我们应该只使用它，而不是创建它的对象。我们希望将创建这个依赖项的责任从 Report 类中移除，并将它交给另一个类。我们将有这个类来为 Report 类提供 Calculator 对象。这就是我们所说的依赖注入（Dependency injection）。其他类将通过注入依赖来传递这个对象。

**知识树**

1. 依赖注入的三种方式
    - 构造器注入（Constructor Injection）
    - Setter Injection
    - Method Injection

## 构造器注入

> 简述：在 TaxReport 中，修改构造器，将私有字段从“类引用”更改为将参数修改为“接口引用”。修改计算规则时，无需再更改 TaxReport。本节使用单独调用方式为简单懒汉式，即在需要时才实例化，但有时候需要使用某个类的对象很多次，这时候需要使用到框架比如 Spring，Spring 框架默认采用的是饿汉式单例模式，即在容器启动时就初始化所有单例 bean，而不是在第一次使用时才创建它们。

**代码示例**

1. 修改过的 TaxReport

    ```java
    public class TaxReport {

        private TaxCalculator calculator;

        public TaxReport(TaxCalculator calculator) {
            this.calculator = calculator;
        }

        public void show() {
            var tax = calculator.calculateTax();
            System.out.println("Tax: " + tax);
        }
    }
    ```

2. 懒汉式使用

    ```java
    public class Main {
        public static void main(String[] args) {
            var calculator = new TaxCalculator2024(200_000);
            var taxReport = new TaxReport(calculator);
            taxReport.show();
        }
    }
    ```

## Setter 注入

> 简述：除了构造器注入，还有 setter 注入的方式，setter 注入的好处是可以在程序运行时修改依赖，创建 TaxCalculator2025

**代码示例**

1. 修改后的 TaxReport

    ```java
    public class TaxReport {

        private TaxCalculator calculator;

        public void show() {
            var tax = calculator.calculateTax();
            System.out.println("Tax: " + tax);
        }

        public void setCalculator(TaxCalculator calculator) {
            this.calculator = calculator;
        }
    }
    ```

2. 新创建的 TaxCalculator2025

    ```java
    public class TaxCalculator2025 implements TaxCalculator {

        private double taxableIncome;
        private double exemptTax = 60000;

        public TaxCalculator2025(double taxableIncome) {
            this.taxableIncome = taxableIncome - exemptTax;
        }

        @Override
        public double calculateTax() {
            return taxableIncome * 0.3;
        }
    }
    ```

3. 使用 setter

    ```java
    public class Main {
        public static void main(String[] args) {
            var calculator1 = new TaxCalculator2024(200_000);
            var calculator2 = new TaxCalculator2025(200_000);

            // var taxReport = new TaxReport(calculator);
            var taxReport = new TaxReport();
            taxReport.setCalculator(calculator1);
            taxReport.show();

            taxReport.setCalculator(calculator2);
            taxReport.show();
        }
    }
    ```

## Method 注入

简述：直接在具体方法中使用构造器，而非构造函数和 setter 中

**代码示例**

1. 修改后的 TaxReport

    ```java
    public class TaxReport {

        private TaxCalculator calculator;

        public void show(TaxCalculator calculator) {
            var tax = calculator.calculateTax();
            System.out.println("Tax: " + tax);
        }
    }
    ```

2. 使用 方法注入

    ```java
    public class Main {
        public static void main(String[] args) {
            var calculator1 = new TaxCalculator2024(200_000);
            var calculator2 = new TaxCalculator2025(200_000);

            var taxReport = new TaxReport();
            taxReport.show(calculator1);

            taxReport.show(calculator2);
        }
    }
    ```

## 接口分离法则

简述：接口当一个存在过多的方法时，修改其中一个方法比如参数，引用这个接口的类都需要改动。正确的做法是将接口文件切分成一个个职责清晰的小文件。

## EX

## 接口分离法则详解

> 简述：接口分离法则是一项设计原则，其核心思想是将大而全的接口拆分成多个小而专一的接口，使客户端只需依赖于它实际需要的接口。这不仅降低了系统耦合度，还提升了代码的灵活性与可维护性，对初学者来说，它提醒我们设计时要精简职责，避免强制实现无关的方法。

**知识树**

1. 定义与基本概念

    - 接口：定义一组方法的规范，用于描述类应实现的功能。
    - 客户端：依赖接口进行功能调用的模块或类。

2. 原则核心

    - 不强迫客户端依赖不需要的方法。
    - 倡导使用多个细粒度、专一化的接口替代一个庞大接口。

3. 设计动机与优势：

    - 降低耦合性：客户端只与自己需要的接口发生依赖，减少无关依赖带来的风险。
    - 提高灵活性：系统更容易扩展与维护，修改小接口对其他模块的影响较小。

4. 实现方式与应用场景
    - 接口拆分：将功能复杂的接口按职责划分成多个小接口。
    - 角色接口设计：根据不同角色或使用场景，提供相应的接口实现，满足各自的需求。

**代码示例**

1. 未遵循接口分离法则（大而全的接口）

    ```java
    public interface MultifunctionDevice {
        void print();
        void scan();
        void fax();
    }

    public class OldPrinter implements MultifunctionDevice {
        public void print() {
            System.out.println("打印文件...");
        }
        public void scan() {
            // 不支持扫描，可能抛出异常或留空
            throw new UnsupportedOperationException("扫描功能未实现");
        }
        public void fax() {
            // 不支持传真，同上
            throw new UnsupportedOperationException("传真功能未实现");
        }
    }
    ```

    - 描述：在这个示例中，`MultifunctionDevice` 定义了打印、扫描和传真三个功能，但对于只需要打印功能的 `OldPrinter` 类来说，实现扫描和传真方法既多余又容易引起问题。

2. 遵循接口分离法则（细化后的接口）

    ```java
    public interface Printer {
        void print();
    }

    public interface Scanner {
        void scan();
    }

    public interface Fax {
        void fax();
    }

    public class BasicPrinter implements Printer {
        public void print() {
            System.out.println("打印文件...");
        }
    }
    ```

    - 描述：此处将原有接口拆分为 `Printer`、`Scanner` 和 `Fax` 三个独立接口，`BasicPrinter` 类仅实现 `Printer` 接口，专注于打印功能，不需要关心其他无关功能，从而符合接口分离法则。

## 接口分离法则（ISP：Interface Segregation Principle）

> 简述：  
> 接口分离法则（ISP）是面向对象设计中 SOLID 原则的其中之一，它强调客户端不应被强迫依赖于它不使用的方法。换句话说，应当将臃肿的大接口拆分成多个更小、更具体的接口，使每个接口只对特定的客户端暴露它真正需要的方法，以提升系统的灵活性和可维护性。

**知识树**

1. 接口分离法则的本质
    - 接口的职责应单一且明确
    - 客户端与接口之间的契约越简洁越好
    - 避免"胖接口"（Fat Interface）现象
2. 为什么需要接口分离法则
    - 降低系统耦合度
    - 提高接口复用性
    - 提升代码可读性与可维护性
    - 减少客户端冗余代码和实现负担
3. 如何正确实施接口分离法则
    - 根据使用者视角设计接口，而非实现视角
    - 在接口膨胀时，拆分接口为更小更明确的接口
    - 提取公共方法至独立接口以提高复用性
4. 常见误区与注意点：
    - 接口过于细碎，导致接口数量爆炸
    - 未考虑未来需求，接口抽象不合理
    - 未及时重构臃肿接口，产生历史负担

**代码示例**

1. 违背接口分离法则的案例（胖接口）

```java
// 胖接口示例，不同的客户端使用时都需要实现不需要的方法
public interface Device {
    void print();
    void scan();
    void fax();
}

public class OldPrinter implements Device {

    @Override
    public void print() {
        System.out.println("打印功能");
    }

    @Override
    public void scan() {
        // 此打印机没有扫描功能，却被迫实现空方法
        throw new UnsupportedOperationException("扫描功能不支持");
    }

    @Override
    public void fax() {
        // 此打印机没有传真功能，却被迫实现空方法
        throw new UnsupportedOperationException("传真功能不支持");
    }
}
```

- 上述代码的问题在于：客户端`OldPrinter`被迫实现了不需要的接口方法，导致冗余代码和违反职责单一原则。

2. 符合接口分离法则的案例（接口职责明确细分）

```java
// 将大接口拆分为多个职责明确的小接口
public interface Printer {
    void print();
}

public interface Scanner {
    void scan();
}

public interface Fax {
    void fax();
}

// 客户端根据实际需要灵活实现接口
public class SimplePrinter implements Printer {
    @Override
    public void print() {
        System.out.println("打印功能实现");
    }
}

// 支持扫描与打印的设备
public class MultiFunctionPrinter implements Printer, Scanner {

    @Override
    public void print() {
        System.out.println("打印功能实现");
    }

    @Override
    public void scan() {
        System.out.println("扫描功能实现");
    }
}
```

- 上述示例清晰地体现了 ISP 的精髓，通过接口拆分，使客户端只依赖必要的方法，实现接口职责明确，显著提高了代码的可维护性和灵活性。

**对接口分离法则的本质洞察与深度理解**

- **核心思想的哲学本质**  
     接口分离法则本质上是关注“接口与客户端关系”的哲学思考。它鼓励从“接口提供者”的视角转变为“接口消费者”的视角，避免单纯追求接口实现的便利性，而忽略接口使用时的成本。  
     接口的作用在于“屏蔽细节”，但接口设计过于粗粒度，就会导致接口的“实现负担”被转嫁到客户端，增加了理解成本、使用成本和维护成本。

- **技术设计与架构决策层面的思考**  
     ISP 强调接口设计时应当从实际需求与使用场景出发，而非想象或推测未来可能的需求。这避免了过度抽象和不切实际的设计，使接口定义更贴合实际业务与真实需求。同时，它在代码规模增大时，推动开发者主动拆分庞大接口，从而主动推动架构的演进与优化。

- **对设计模式与原则相互关系的深度理解**  
     ISP 不仅独立发挥作用，也与单一职责原则（SRP）紧密相连，两个原则相辅相成。SRP 强调一个类应当只有一个变化原因，而 ISP 则强调接口应只暴露给客户端真正需要的功能，两者都是通过职责分离实现低耦合和高内聚。

- **批判性与创造性思考**  
     实际开发中，接口分离法则的落地常遇到过犹不及的难题：

    1. 接口过于细碎，导致接口数量爆炸，增加复杂性。
    2. 接口抽象程度过高或过低，都可能使未来维护成本提高。

    要避免这种情况，我们必须批判性地审视当前需求，并进行创造性思考：

    - **适度聚合**：在接口过于碎片化时，思考是否有必要重新聚合，使接口保持适当粒度。
    - **前瞻性抽象**：在接口设计时，适度考虑未来潜在变化，通过高质量的抽象平衡现在和未来需求。
    - **阶段性重构**：允许接口的渐进式演化，在不同阶段灵活进行接口拆分或聚合。

- **最佳实践建议**  
     在实际项目中，推荐以下步骤保证接口设计合适：
    1. **以使用者为中心进行接口设计**：明确接口使用场景、目标和客户端真正需求。
    2. **实施阶段性接口重构**：接口膨胀时及时进行接口拆分。
    3. **平衡抽象和细节**：避免接口抽象过度或过于具体，保持弹性，允许未来可扩展。
    4. **定期接口评审**：审视接口粒度、使用频率与职责划分，持续改进接口设计。

---

接口分离法则并非简单的“接口切割”，而是一种深度的思想转变和设计哲学，它驱动着程序设计从实现导向转向需求导向，真正实现系统的高度解耦与灵活扩展。
