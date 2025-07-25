# 可能补充

为什么线程被打断建议重新唤醒?
CompletableFuture 异常处理？

# 特质

- 在类中进行二次参数校验，不必每一次创建实例都进行数据校验
    - 与之而来的是，在创建构造函数时，不使用传统的`this.prop = prop`，而是直接在构造函数中调用 set 方法

# 新特性

- List.getFirst()——JDK21
    - 获取 List 中的第一个元素
- Stream.toList----JDK16
    - 将 Strean 转为 List
- switch 增强 lambda——JDK12
    - 每个 case 后面的语句块就是一个独立的分支，不再需要 break，不会有 case 穿透
- var——JDK10
    - 自动推断变量类型，避免显式声明数据类型，使代码更简洁。
    - 仅用于局部变量（方法内部），不能用于字段、方法参数或返回值。
    - 按住 control+shift+P 查看具体类型（Mac）
    - control +J 展开右侧 查看具体类型（Mac）
- List.of()——JDK9
    - 快速创建不可变列表（列表内容不能修改）。
    - 避免 Arrays.asList() 的缺陷（Arrays.asList() 支持修改元素，但不能调整大小）。
    - 比 new ArrayList<>() 代码更简洁。
- CompletableFuture.completeOnTimeout——JDK9
    - 处理 CompletableFuture 超时

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
    - `Common+1` 展开/关闭左侧栏
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

# Start

## 开发环境

> 简述：搭建 Java 开发环境需安装 JDK 和 IDEA，配置环境变量后进行验证。这里使用的语言级别是 JDK12，使用的 JDK 版本是 17（持久版本）

**知识树**

1. 安装 Java（JDK17）

    - 使用 Homebrew 安装 JDK
        ```bash
        brew install --cask zulu@17
        ```
    - 配置 Java 环境变量，终端执行下面代码，添加 Java 环境变量，并刷新环境变量
        ```bash
        echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 17)' >> ~/.zprofile
        echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zprofile
        source ~/.zprofile
        ```
        - `Command + Shift + .`显示隐藏文件
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

## Java 执行过程

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

5. 补充

    - 在 Java 12 及以后，switch 支持“增强型 switch 表达式”（有时称为“lambda 风格”或“箭头语法”），用 -> 语法时，每个 case 后面的语句块就是一个独立的分支，不再需要 break，并且也不会有“case 穿透”\*\*的问题。

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

## 变量交换（补充）

**方法 1：通过第三个变量进行交换**：

```java
int a = 1, b = 2;
int temp = a;
a = b;
b = temp;
```

**方法 2：使用加减法**：

```java
a = a + b;  // a = 3
b = a - b;  // b = 1
a = a - b;  // a = 2
```

**方法 3：使用位运算**：对于数组使用时，不能对下标相同的情况使用，否则会变成 0

```java
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

**方法 4：一行完成**

```java
int a = 1, b = 2;
a = a + b - (b = a); // 属于技巧类，可读性
```

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

# Interfaces

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

7. 静态类型与动态类型

    - 假设 B 实现类，实现了 A 接口，使用`A a = new B();`
    - a 只是一个引用变量，它的静态类型（声明类型）是 A，但动态类型（运行时真实类型）是 B。

**代码示例**

1. 未使用接口的情况

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

2. 使用接口

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

> 简述：依赖注入（Dependency Injection, DI）是一种实现控制反转（IoC）的技术，其核心思想是：将对象所依赖的 其他对象 由外部提供（注入），而不是在对象内部自行创建，从而降低耦合、便于测试和配置。

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

# Exceptions

## 异常

> 简述：异常是程序中错误事件的标志，Java 使用异常机制来处理这些错误。在异常发生时，程序会抛出一个异常对象，包含错误信息并帮助开发者定位问题。

**知识树**

1. 异常的基本概念

    - 异常是程序运行过程中发生的错误事件。

2. 异常的堆栈跟踪

    - 异常发生时，Java 会生成堆栈跟踪（stack trace），逆序显示异常发生的调用链。
    - Java 运行时会在当前方法中寻找处理这个异常的异常处理器，如果没有找到，会回到前一个方法继续寻找

**代码示例**

1. **NullPointerException 示例**

    ```java
    public class ExceptionsDemo {
      public static void show() {
    	  sayHello(null);
      }

      public static void sayHello(String name) {
    	  System.out.println(name.toUpperCase());
      }
    }
    ```

    - 描述：创建 exceptions 包，创建 `ExcptionsDemo` 类，并在 Main 中调用 `show()`方法。当`null`传递给`sayHello`方法时，调用`toUpperCase()`会抛出`NullPointerException`。

2. **堆栈跟踪输出示例**

    ```
    Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.toUpperCase()" because "name" is null
    	at com.pang.exceptions.ExceptionsDemo.sayHello(ExceptionsDemo.java:9)
    	at com.pang.exceptions.ExceptionsDemo.show(ExceptionsDemo.java:5)
    	at com.pang.Main.main(Main.java:7)
    ```

    - 描述：堆栈跟踪显示了异常发生的具体位置，帮助开发者快速定位错误。

## 种类

> 简述：Java 异常分三种：受检异常（Checked Exceptions）、非受检异常（Unchecked Exceptions，也称运行时异常）、错误（Errors）。异常是程序运行中发生的异常事件，影响程序的正常流程。

**知识树**

1. 受检异常（Checked Exceptions）

    - 编译时强制检查，开发者必须显式处理
    - 常见于程序外部问题，如文件缺失、网络异常等
    - 代表：`FileNotFoundException`、`IOException`

2. 非受检异常（Unchecked Exceptions / Runtime Exceptions）

    - 编译时不强制检查，程序运行时才暴露
    - 通常为程序员的代码逻辑错误导致
    - 代表：
        - `NullPointerException`（空引用调用方法）
        - `ArithmeticException`（数学运算错误，如除零）
        - `IllegalArgumentException`（非法参数传入方法）
        - `IndexOutOfBoundsException`（访问数组或列表时索引非法）
        - `IllegalStateException`（对象状态错误时调用方法）
    - 处理方式：
        - 通过代码逻辑严密性、代码审查与单元测试预防，而非捕获处理

3. 错误（Errors）

    - 程序无法处理的严重问题，通常源于环境或系统资源问题
    - 代表：
        - `StackOverflowError`（栈空间耗尽）
        - `OutOfMemoryError`（内存不足）
    - 处理方式：
        - 通常不可恢复，应避免捕获，由开发者定位根本原因修复，如代码无限递归或 JVM 配置错误

## 层次结构

> 简述：Java 的异常机制通过一个类层次结构实现，所有异常和错误继承自`Throwable`类，它定义了异常共有特征，如错误信息（message）和堆栈跟踪（stack trace）。

**知识树**

1. 结构图

    ```txt
    Throwable
    ├── Error
    └── Exception
    	└── RuntimeException
    ```

2. **Throwable 类**

    - Java 所有异常和错误的根类
    - 提供异常通用特征：
        - 异常信息（error message）
        - 堆栈跟踪（stack trace）

3. **异常类型判断规则**

    - 从`RuntimeException`继承的为**非受检异常**（运行时异常）
    - 从`Exception`继承但未从`RuntimeException`继承的为**受检异常**
    - 所有从`Error`继承的类均视为程序不可处理的**错误**

4. 示例 `NullPointerException`

    ```txt
    java.lang.Object
    └── java.lang.Throwable
    	└── java.lang.Exception
    	    	└── java.lang.RuntimeException
    	    	    	└── java.lang.NullPointerException
    ```

    - 官方文档：https://docs.oracle.com/javase/8/docs/api/java/lang/NullPointerException.html

## 捕获异常

> 简述：捕获异常是 Java 中处理程序运行时可能出现的异常情况，避免程序崩溃的一种机制。通过使用 `try-catch` 结构，程序可以安全地处理异常，增强程序稳定性。

**知识树**

1. `FileReader`补充

    - `FileReader` 在读取文件时可能抛出受检查异常（`FileNotFoundException`）。
    - 异常原因包括文件不存在、权限不足、路径错误等。
    - 受检查异常必须显式捕获或声明，否则程序无法通过编译。

2. `try-catch` 结构

    - `try` 块：放置可能产生异常的代码。
    - `catch` 块：捕获并处理对应类型的异常。
    - 使用 IDE（如 IntelliJ IDEA、Eclipse）可自动快速生成 `try-catch` 结构。

3. 捕获多个异常

    - 多个独立 `catch` 块：分别捕获处理不同类型的异常。
    - 合并异常捕获：使用竖线 `|` 一次捕获多个异常。
    - 异常类型之间存在继承关系时，应先捕获子类异常，再捕获父类异常，否则编译器报错。

**代码示例**

1. 基本捕获异常

    ```java
    public class ExceptionsDemo {
        public static void show() {
            try {
    			var reader = new FileReader("file.txt");
    			System.out.println("File opened");
            } catch (FileNotFoundException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ```

    - 描述：这里的 `e` 是 `FileNotFoundException` 的实例，执行`new FileReader("file.txt");`后，之间跳转到 `catch` 代码块

2. 多个异常分别捕获

    ```java
    public class ExceptionsDemo {
        public static void show() {
            try {
                var reader = new FileReader("file.txt");
                var value = reader.read();
                new SimpleDateFormat().parse("");
            } catch (FileNotFoundException e) {
                System.out.println(e.getMessage());
            } catch (IOException e) {
                System.out.println(e.getMessage());
            } catch (ParseException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ```

    - 描述：每个异常单独捕获和处理，明确指出每个异常类型的具体原因，便于调试。
    - `FileReader` 需要捕获 `FileNotFoundException`，`FileNotFoundException`是 `IOException`的子类
    - `read()` 方法需要捕获 `IOException`
    - `parse()` 方法需要捕获 `ParseException`

3. 合并捕获多个异常

    ```java
    public class ExceptionsDemo {
        public static void show() {
            try {
                var reader = new FileReader("file.txt");
                var value = reader.read();
                new SimpleDateFormat().parse("");
            }
            catch (IOException| ParseException e){
                e.printStackTrace();
            }
        }
    }
    ```

## Finally 与资源释放

> 简述：异常处理过程中，确保资源（如文件句柄、数据库连接等）始终正确释放的重要方法，避免因异常导致资源泄露。

**知识树**

1. 资源泄露

    - 定义：资源（文件、数据库连接、网络连接）使用后未及时释放，导致资源耗尽。
    - 危害：其他进程或应用无法获取资源，影响系统稳定。

2. finally 块

    - 定义：`try-catch` 结构后额外定义的代码块，用于执行清理操作。
    - 特性：`finally` 块始终执行，无论异常是否发生。
    - finally 块的执行逻辑

        ```java
        try {
            // 执行正常代码
        } catch (Exception e) {
            // 异常处理
        } finally {
            // 无论有无异常，此处代码始终执行
        }
        ```

3. 变量作用域问题

    - 问题：`try` 块内声明的变量无法在 `finally` 块内访问。
    - 解决方案：在 `try` 块外提前声明变量，并初始化为 `null`。

4. close 方法异常处理
    - 问题：资源释放方法本身可能抛出异常（如 IOException）。
    - 解决方案：在 finally 块中嵌套 try-catch 处理 close 方法异常。

**代码示例**

1. 正确资源释放模式

    ```java
    public class ExceptionsDemo {
        public static void show() {
            FileReader reader = null;
            try {
                reader = new FileReader("file.txt");
                var value = reader.read();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (reader != null) {
                    try {
                        reader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
    ```

## try-with-resources 语句

> 简述：try-with-resources 是 Java 中一种简洁安全的资源管理语法，可自动释放外部资源（如文件、数据库连接），无需显式调用 close 方法。

**知识树**

1. 基本概念

    - 自动管理外部资源，避免显式关闭资源
    - 提高代码安全性和简洁性
    - 等同于上面通过 Finally 释放资源的形式，但是更简洁

2. 语法结构

    - 在 `try` 后使用括号声明并初始化资源
    - 资源在 `try` 结束时自动关闭

3. 自动关闭的原理

    - 编译器自动添加 `finally` 块关闭资源
    - 要求资源实现 `AutoCloseable` 接口

4. `AutoCloseable` 接口

    - 定义了 `close()` 方法
    - 所有使用 try-with-resources 的类必须实现此接口

5. 多资源管理

    - 支持在 `try()` 中声明多个资源
    - 多个资源以分号分隔

**代码示例**

1. 单资源管理

    ```java
    public class ExceptionsDemo {
        public static void show() {
            try (
                    var reader = new FileReader("file.txt")
            ) {
                var value = reader.read();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    ```

    - 资源 reader 在 try 结束后自动关闭

2. 多资源管理

    ```java
        try (
                var reader = new FileReader("file.txt");
                var writer = new FileWriter("output.txt")
        ) {
            var value = reader.read();
        } catch (IOException e) {
            e.printStackTrace();
        }

    ```

    - reader 和 writer 均会在 try 结束时自动关闭

## 抛出异常与重新抛出

> 简述：异常抛出（throwing exceptions）指程序主动创建并抛出异常对象，提示调用方发生了意外情况或错误。防御性编程（defensive programming）则是在程序中进行主动的验证输入数据，提前发现并抛出异常，避免潜在严重问题的编程技巧。重新抛出异常可以将异常交由调用者统一处理，进而实现集中异常管理。

**知识树**

1.  异常的抛出（throw）

    - 主动创建并抛出异常对象，用于告知调用者发生了错误
    - 常用语法：`throw new 异常类型(错误描述)`

2.  防御性编程

    - 通过校验参数有效性提前发现问题
    - 避免程序在后续运行中出现更严重的问题
    - 防御性编程适用于库或框架开发；
    - 在应用内部应，代码之间应该保持一定的信任度，只在 应用边界处（接收外部用户或系统输入）需严格校验，避免过度校验

3.  受检异常与非受检异常

    - 非受检异常不需要在方法签名上显式声明，也不强制要求在代码中捕获。
    - 受检异常必须要么在方法中捕获（`try-catch`），要么在方法签名上通过 `throws` 声明传递给调用者。

4.  重新抛出

    - 场景：当前方法无法处理，需要调用方统一处理
    - 方式：在捕获处重新抛出异常

5.  通用异常处理策略：

        - 捕获顶级异常(Throwable或Exception)
        - 统一显示友好的用户提示信息

**代码示例**

1.  非受检异常的抛出

    ```java
    public class Account {
    	public void deposit(float value) {
    		if(value < 0)
    			throw new IllegalArgumentException();
    	}
    }
    ```

    - 描述：创建 `Account` 并在 `ExceptionsDemo` 中调用并传入`-1`

2.  受检异常的声明与抛出

    - 需要在方法签名中声明异常，调用者必须处理或继续声明

        ```java
        public class Account {
            public void deposit(float value) throws IOException {
                if(value < 0)
                    throw new IOException();
            }
        }
        ```

    - 在调用处处理

        ```java
        public class ExceptionsDemo {
            public static void show() {
                var account = new Account();
                try {
                    account.deposit(-1);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        ```

3.  重新抛出异常

    - 在捕获处重新抛出

        ```java
        public class ExceptionsDemo {
            public static void show() throws IOException {
                var account = new Account();
                try {
                    account.deposit(-1);
                } catch (IOException e) {
                    System.out.println("Logging");
                    throw new IOException();
                }
            }
        }
        ```

    - 集中处理异常

        ```java
        public class Main {
          public static void main(String[] args) {
              try {
                  ExceptionsDemo.show();
              } catch (Throwable e) {
                  System.out.println("An unexpected error occurred.");
              }
          }
        }
        ```

## 自定义异常

> 简述：自定义异常（Custom Exceptions）是 Java 开发中针对特定业务场景创建的专用异常类，通常用于明确描述应用程序领域中特殊的问题，使代码逻辑更加清晰、易维护。

**知识树**

1. 自定义异常的命名规范

    - 使用`Exception`作为类名后缀
    - 类名应清晰描述异常原因

2. 自定义异常的分类

    - 检查型异常（Checked Exception）：继承 Exception，必须显式处理，用于需要开发者预期并能恢复的异常场景
    - 非检查型异常（Unchecked Exception）：继承`RuntimeException`，通常表示编程错误，不强制显式处理

3. 创建自定义异常的步骤：

    - 创建异常类继承`Exception`（检查型）或`RuntimeException`（非检查型）
    - 提供构造方法，允许自定义异常信息
    - 可选提供默认异常信息

**代码示例**

1. 创建检查型自定义异常

    ```java
    public class InsufficientFundsException extends Exception {
        // 默认构造方法
        public InsufficientFundsException() {
            super("Insufficient funds in your account");
        }

        // 接受自定义消息的构造方法
        public InsufficientFundsException(String message) {
            super(message);
        }
    }
    ```

2. 抛出自定义异常

    ```java
    public class Account {
        private float balance;

        public void deposit(float value) throws IOException {
            if (value < 0)
                throw new IOException();
        }

    	// 抛出自定义异常
        public void withdraw(float value) throws InsufficientFundsException {
            if (value > balance)
                throw new InsufficientFundsException();
        }
    }
    ```

3. 处理自定义异常

    ```java
    public class ExceptionsDemo {
        public static void show() throws IOException {
            var account = new Account();
            try {
                account.withdraw(10);
            } catch (InsufficientFundsException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ```

    - 描述：异常时，控制台输出`Insufficient funds in your account`

## 异常链

> 简述： 异常链（Chaining Exceptions）是将特定异常包装在更通用异常中的技术，以明确异常发生的根本原因，便于统一管理和排查。

**知识树**

1. 异常链概念

    - 将原始异常包装进更通用的异常中。
    - 用于在异常发生时保留底层原因，便于后续排查。

2. 实现异常链的方法

    - 方式一：使用`initCause(Throwable cause)`方法指定原始异常。
    - 方式二：使用异常构造函数传入原始异常，更简洁，推荐使用。

**代码示例**

1. 使用 initCause 实现异常链

    - 创建异常类（更通用的异常）

        ```java
        // 自定义通用异常
        public class AccountException extends Exception {
        }
        ```

    - 在抛出异常处进行包装

        ```java
        public class Account {
            private float balance;

            public void deposit(float value) throws IOException {
                if (value < 0)
                    throw new IOException();
            }

            public void withdraw(float value) throws AccountException {
                if (value > balance) {
                    var fundsException = new InsufficientFundsException();
                    var accountException = new AccountException(new InsufficientFundsException());
                    accountException.initCause(fundsException);
                    throw accountException;
                }
            }
        }
        ```

    - 处理捕获异常处

        ```java
        public class ExceptionsDemo {
            public static void show() throws IOException {
                var account = new Account();
                try {
                    account.withdraw(10);
                } catch (AccountException e) {
                    System.out.println(e.getMessage());
                }
            }
        }
        ```

2. 使用异常构造函数简化

    - 异常类中创建构造函数

        ```java
        // 自定义通用异常
        public class AccountException extends Exception {
          public AccountException(Exception cause) {
              super(cause);
          }
        }
        ```

    - 通过构造函数简化

        ```java
        public class Account {
            private float balance;

            public void deposit(float value) throws IOException {
                if (value < 0)
                    throw new IOException();
            }

            public void withdraw(float value) throws AccountException {
                if (value > balance) {
        	        // 简化后
                    throw new AccountException(new InsufficientFundsException());
                }
            }
        }
        ```

# Generics

## 需求引入

> 简述：用一个基础 List 类存储整型时，若想存储其他类型（如用户、字符串），会产生代码重复或类型不安全等问题。为了解决这类问题，需要引入泛型。

**知识树**

1. 普通列表的局限

    - 只能固定存储某种类型（如 `int[]`），无法复用。
    - 若要存储其他类型（如 User），需创建新类，代码冗余。

2. 使用 `Object[]` 的问题

    - 存储多类型时需强制类型转换，代码冗余且不安全。
    - 运行期可能出现 `ClassCastException`，**无法在编译期发现错误**。
    - 下一节将使用泛型解决这些问题

3. 创建示例

    - 创建 generics 包，创建 List 类，创建 User 类，UserList 类

** 代码示例**

1. 固定类型的 List（整型示例）

    ```java
    public class List {
        private  int[] items = new int[10];
        private int count;

        public void add(int item) {
            items[count++] = item;
        }

        public int get(int index) {
            return items[index];
        }
    }
    ```

    - 存在局限：只能存储 `int`。

2. 存储 User

    ```java
    public class UserList {
        private User[] users = new User[10];
        private int count;

        public void add(User user) {
            users[count++] = user;
        }

        public User get(int index) {
            return users[index];
        }
    }
    ```

    - 存在局限：代码过于重复，而且只能存储 User

3. 变更固定类型的 List 的 `int[]` 为 `Object[]`

    ```java
    public class List {
        private  Object[] items = new Object[10];
        private int count;

        public void add(Object item) {
            items[count++] = item;
        }

        public Object get(int index) {
            return items[index];
        }
    }
    ```

    - 优点：可存储任意对象类型。
    - 缺点：需要强制类型转换，易出现运行期异常。

4. 使用`Object[]`类型的 List

    ```java
    public class Main {
        public static void main(String[] args) {
            var list = new List();
            list.add(1);// 1 是原始类型，自动转换为引用类型 Integer.valueOf(1)
            list.add("2");
            list.add(new User());

            int number = (int)list.get(0);// list.get(0) 为引用类型，需要强制转换
            // int number2 = (int)list.get(1);// list.get(1) 为String类型，强制转换会报错

        }
    }
    ```

## 泛型

> 简述：通过在类或方法中引入类型参数（如 `<T>`），可在编译期强制类型检查，避免重复编写多种类型的集合，并减少显式类型转换带来的错误。
> 补充：统一方法对返回值涉及多个类型时，可以使用`<?>`提高方法对灵活性

**知识树**

1. 泛型类的定义

    - 在类名后使用 `<T>` 声明类型参数，用于指定要存储或处理的具体类型。
    - 通常用 `T` 表示类型，若是集合类也可用 `E`（代表 Element）。

2. 特点

    - 编译时类型安全，可在编译期检查类型一致性，预防运行时 `ClassCastException`。
    - 省去显式强制转换，令代码更简洁。

3. 补充

    - `private T[] items = (T[]) new Object[10];` 的写法：由于无法直接实例化一个 `T` 类型数组，只能先创建 `Object[]` 并再转换为 `T[]`。

**代码示例**

1.  自定义泛型列表

    ```java
    public class GenericList<T> {
        private T[] items = (T[])new Object[10];
        private int count;

        public void add(T item) {
            items[count++] = item;
        }

        public T get(int index) {
            return items[index];
        }
    }
    ```

    - 通过 `<T>` 声明类型参数，存储任意类型对象。

2.  使用泛型列表

    ```java

    public class Main {
    public static void main(String[] args) {
    // var intList = new GenericList<Integer>();// 可以使用该写法
    GenericList<Integer> intList = new GenericList<>();
    intList.add(1);
    intList.add(2);
    int number = intList.get(0); // 无需强制转换，类型已经确定

            GenericList<User> users = new GenericList<>();
            users.add(new User());
            User user = users.get(0); // 无需强制转换
        }

    }
    ```

    - 无需为不同类型编写不同的列表类。

## 泛型与引用类型

> 简述：在创建泛型实例时，只能使用引用类型作为类型参数。如果需要处理原始类型（如 `int`、`boolean`），必须使用对应的包装类（如 `Integer`、`Boolean` 等），并借助自动装箱与拆箱机制实现原始类型与包装类型的相互转换。

**知识树**

1. 泛型类型参数限制

    - 只能使用引用类型（如 `User`、`String`、`Integer` 等），不能使用原始类型（如 `int`、`boolean`）。

2. 包装类（Wrapper Classes）

    - 原始类型都有对应的包装类，如 `int`→`Integer`、`boolean`→`Boolean`、`float`→`Float` 等。

3. 自动装箱（Boxing）与自动拆箱（Unboxing）

    - 装箱：将原始类型自动转换成其包装类对象，如 `1`→`Integer.valueOf(1)`。
    - 拆箱：将包装类对象的值自动提取回原始类型，如 `Integer.valueOf(1)`→`1`。

4. 使用包装类在泛型中存储原始类型

    - 借助自动装箱与拆箱机制，可像使用原始类型一样对泛型进行读写；其底层实际上是包装类的操作。

**代码示例**

1. 存储整型数字（使用 `Integer` 替代 `int`）

    ```java
    public class Main {
        public static void main(String[] args) {
            GenericList<Integer> numbers = new GenericList<>();
            numbers.add(1);       // 自动装箱：1 -> Integer.valueOf(1)
            numbers.add(2);

            int first = numbers.get(0); // 自动拆箱：Integer.valueOf(1) -> 1
            System.out.println(first);
        }
    }
    ```

    - 对 `numbers.add(1)` 的调用编译后自动转换为 `numbers.add(Integer.valueOf(1))`。

## 泛型约束

> 简述： 在 Java 泛型中，类型参数可以添加约束（限制），以确保泛型类或方法仅适用于满足特定条件的类型，增强类型安全性，避免运行时类型错误。

**知识树**

1. 类型参数约束：

    - 作用：限制泛型类型参数的具体类型，确保安全性、避免类型错误。
    - 语法：`<T extends 约束类型>`

2. 约束的类型：

    - 类约束：
        - 约束为特定类时，类型参数必须为该类或其子类。
        - 语法示例：`<T extends Number>`
    - 接口约束：
        - 约束为接口时，类型参数必须实现指定接口。
        - 语法示例：`<T extends Comparable>`
    - 多重约束：
        - 可以同时限制类型为多个接口或类的组合。
        - 语法示例：`<T extends 接口1 & 接口2>`
        - 注：最多只能有一个类约束，多个接口约束通过`&`连接。

3. `Number`

    - 描述：Number 是 Java 中数字类型的基类

**代码示例**

1. 类约束示例：

    - 添加 Number 约束

        ```java
        public class GenericList<T extends Number> {
            // 仅允许 Number 类及其子类，如Integer、Double等
            private T[] items = (T[])new Object[10];
            private int count;

            public void add(T item) {
                items[count++] = item;
            }

            public T get(int index) {
                return items[index];
            }
        }
        ```

    - 使用

        ```java
        public class Main {
            public static void main(String[] args) {
                GenericList<Integer> integers = new GenericList<>();

                // 编译错误，String不是Number子类
                // GenericList<String> strings = new GenericList<>();
            }
        }
        ```

2. 接口约束与多重约束示例：

    - 添加 Comparable 和 Cloneable 约束

        ```java
        public class GenericList<T extends Comparable & Cloneable> {
            // T必须同时实现Comparable和Cloneable接口
            private T[] items = (T[])new Object[10];
            private int count;

            public void add(T item) {
                items[count++] = item;
            }

            public T get(int index) {
                return items[index];
            }
        }


        // 示例类：
        public class User implements Comparable<User>, Cloneable {
            private String username;

            @Override
            public int compareTo(User other) {
                return username.compareTo(other.username);
            }

            @Override
            protected Object clone() throws CloneNotSupportedException {
                return super.clone();
            }
        }

        // 使用：
        GenericList<User> users = new GenericList<>();
        // 若User未实现两个接口则编译错误
        ```

    - 类必须实现对应接口才能使用，否则编译前报错
        ```java
        public class User implements Comparable ,Cloneable{
            @Override
            public int compareTo(Object o) {
                // 重写逻辑;
            }
        }
        ```
    - 使用

        ```java
        public class Main {
            public static void main(String[] args) {
              GenericList<User> users = new GenericList<>();
            }
        }
        ```

## 泛型擦除

> 简述： 泛型擦除（Type Erasure）是 Java 编译器对泛型的一种实现方式，编译时会将泛型类型参数替换为具体类型或接口，使得运行时并不存在泛型信息，仅在编译期提供类型安全检查。

**知识树**

1. 基本概念

    - 泛型仅在编译时存在，运行时类型参数被擦除。
    - 通过擦除实现类型安全，避免运行时类型错误。

2. 类型擦除机制

    - 无约束类型参数 (`<T>`)
        - 编译后替换为 `Object` 类型。
    - 单一约束类型参数 (`<T extends Number>` 或 `<T extends Comparable>`)
        - 编译后替换为约束指定的类型（如 `Number` 或 `Comparable`）。
    - 多接口约束参数 (`<T extends Comparable & Cloneable>`)
        - 编译后替换为最左侧的接口类型。
        - 注意：若同时存在类和接口约束，类必须放在首位。

3. 擦除效果

    - 字节码中不包含泛型信息。
    - 运行时无法区分具体的泛型类型参数。

4. 项目构建与字节码查看

    - 构建项目：通过菜单 `Build -> Build Project` 或快捷键 Command+F9（Mac）。
    - 查看字节码：在项目中选择目标文件，点击菜单 `View -> Show ByteCode`。

**代码示例**

1.  无约束类型擦除示例：

    ```java
    public class GenericList<T> {
        private T[] items = (T[])new Object[10];
        private int count;

        public void add(T item) {
            items[count++] = item;
        }

        public T get(int index) {
            return items[index];
        }
    }
    ```

    - 描述：（重新）构建后，查看该文件字节码，T 被替换为 Object

2.  单一约束擦除示例：

    ```java
    public class GenericList<T extends Number> {
        private T[] items = (T[])new Object[10];
        private int count;

        public void add(T item) {
            items[count++] = item;
        }

        public T get(int index) {
            return items[index];
        }
    }
    ```

    - 描述：（重新）构建后，查看该文件字节码，T 被替换为 Number

3.  多接口约束擦除示例：

    ```java
    public class GenericList<T extends Comparable & Cloneable> {
        private T[] items = (T[])new Object[10];
        private int count;

        public void add(T item) {
            items[count++] = item;
        }

        public T get(int index) {
            return items[index];
        }
    }
    ```

    - 描述：（重新）构建后，查看该文件字节码，T 被替换为 Comparable

## Comparable 接口

> 简述：`Comparable` 是 Java 提供的泛型接口，用于定义对象的排序规则。实现该接口后，可通过比较对象间的大小，进行排序等操作。类必须实现 Comparable 接口，或者在方法中传入比较器 Comparator，才可以对类的实例进行 sort()排序操作。Comparator 内容在下一节讲解

**知识树**

1. Comparable 接口

    - 用于定义对象之间的**自然排序**（natural ordering）。
    - 适用于排序、搜索和有序集合操作。

2. 核心方法

    - 唯一方法：`compareTo(T o)`
    - 说明：实现后必须重写方法，提供对象间比较逻辑，以确定排序顺序。

3. 泛型实现

    - 实现方式：`implements Comparable<T>`，其中 T 为当前类类型，比如 User
    - 使用泛型：
        - 增强类型安全，避免运行时强制类型转换。
        - 未指定泛型时参数为 Object，存在安全隐患。

4. `compareTo()` 返回值意义

    - 负整数：当前对象小于参数对象。
    - 0：当前对象等于参数对象。
    - 正整数：当前对象大于参数对象。

**代码示例**

1. 未指定泛型类型实现 Comparable 接口

    ```java
    public class User implements Comparable {

    	// 未指定时，compareTo方法中比较Object实例
        @Override
        public int compareTo(Object o) {
            return 0;
        }
    }
    ```

2. 指定泛型类型实现 Comparable 接口

    ```java
    public class User implements Comparable<User> {
        private int points;

        public User(int points) {
            this.points = points;
        }

        @Override
        public int compareTo(User o) {
            // this < o -> -1（负整数即可）
            // this == o -> 0
            // this > o -> 1（正整数即可）
            return points - o.points;
        }
    }
    ```

3. 使用 Comparable 接口进行对象比较：

    ```java
    public class Main {
        public static void main(String[] args) {
            var user1 = new User(10);
            var user2 = new User(20);

            // 只能使用compareTo方法，不能使用运算符
            int result = user1.compareTo(user2);

            if (result < 0)
                System.out.println("user1 < user2");
            else if (result == 0)
                System.out.println("user1 = user2");
            else
                System.out.println("user1 > user2");

        }
    }
    ```

## Comparator 接口

> 简述：`Comparator` 是一个函数式接口，提供自定义排序逻辑，独立于对象的自然顺序。通过实现 `compare(T o1, T o2)` 方法，能够灵活定义不同排序规则，增强代码扩展性和复用性。
> 类必须实现 Comparable 接口，或者在方法中传入比较器 Comparator，才可以对类的实例进行 sort()排序操作。

**知识树**

1. Comparator 接口

    - 类型：泛型接口 (`Comparator<T>`)
    - 功能：定义两个对象的自定义排序规则（独立于自然排序）

2. 核心方法

    - `compare(T o1, T o2)`
        - 返回负数：`o1 < o2`
        - 返回零：`o1 == o2`
        - 返回正数：`o1 > o2`

3. 与 `Comparable` 接口对比

    - `Comparable`
        - 在类内定义排序规则（自然排序）
        - 排序方式单一，不易更改
    - `Comparator`
        - 在类外定义排序规则（自定义排序）
        - 支持多种排序方式，灵活切换

**代码示例**

1. 使用 `Comparable`（自然排序，类内部定义） ，创建 Customer 类

    ```java
    public class Customer implements Comparable<Customer> {
        private String name;

        public Customer(String name) {
            this.name = name;
        }

        @Override
        public int compareTo(Customer other) {
            return name.compareTo(other.name);
        }

        @Override
        public String toString() {
            return "Customer{name='" + name + "'}";
        }
    }
    ```

    - 排序时无需传入额外参数，直接使用集合排序方法即可。

2. 自定义 EmailComparator 实现 Comparator 接口

    - 在 Customer 中加入邮箱字段

        ```java
        package com.pang.generics;

        public class Customer implements Comparable<Customer> {
            private String name;
            private String email;

            public Customer(String name, String email) {
                this.name = name;
                this.email = email;
            }

            public String getEmail() {
                return email;
            }

            @Override
            public String toString() {
                return "Customer{" +
                        "name='" + name + '\'' +
                        ", email='" + email + '\'' +
                        '}';
            }

            @Override
            public int compareTo(Customer o) {
                return name.compareTo(o.name);// 调用String的compareTo方法
            }
        }

        ```

    - 自定义比较器 `EmailComparator`

        ```java
        public class EmailComparator implements Comparator<Customer> {
          @Override
          public int compare(Customer o1, Customer o2) {
        		// 使用 String.compareTo() 比较两个客户的邮箱
              return o1.getEmail().compareTo(o2.getEmail());
          }
        }
        ```

    - 在主类中使用 Comparator 进行排序

        ```java
        public class Main {
        	public static void main(String[] args) {
        		List<Customer> customers = new ArrayList<>();
        		customers.add(new Customer("Alice", "cc@example.com"));
        		customers.add(new Customer("Bob", "bb@example.com"));
        		customers.add(new Customer("Charlie", "aa@example.com"));

        		// 使用 EmailComparator 按邮箱排序
        		Collections.sort(customers, new EmailComparator());
        		System.out.println(customers);
        	}
        }
        ```

## 泛型方法

> 简述：泛型方法允许在普通类中定义带有独立泛型参数的方法，从而以类型安全的方式处理各种数据类型，避免了为不同数据创建多个重载方法的冗余，并在编译时提供类型检查。

**知识树**

1. 泛型方法定义

    - 位置：在方法的修饰符后、返回类型前声明泛型参数。
    - 格式：`public static <T> 返回类型 方法名(参数列表) { ... }`
    - 补充：返回类型有时也为 T

2. 泛型方法的优势

    - 无需创建泛型类即可实现通用方法。
    - 编译期间确定类型，避免显式类型转换和运行时异常。

3. 泛型方法与约束

    - 可使用 `extends` 限定泛型参数，确保类型满足特定条件。
    - 示例：`<T extends Comparable<T>>` 表示 T 类型必须实现 `Comparable` 接口。

4. 创建示例

    - 创建 Utils 方法，使用泛型定义比较方法

**代码示例**

1. 泛型方法定义与实现

    ```java
    public class Utils {
        // 常规 比较方法
        // public static int max(int first, int second) {
        //     return first > second ? first : second;
        // }

        // 泛型 比较方法，使用compareTo
        public static <T extends Comparable<T>> T max(T first, T second) {
            return (first.compareTo(second) > 0) ? first : second;
        }
    }
    ```

2. 泛型方法调用示例：

    ```java
    public class Main {
        public static void main(String[] args) {

            var maxInt = Utils.max(1, 3);
            System.out.println(maxInt);

            var maxUser = Utils.max(new User(10), new User(20));
            System.out.println(maxUser);
        }
    }
    ```

    - 描述：比较对象（User）时，默认得到的是哈希值，需要重写 toString 查看效果

## 多类型参数

> 简述：使用多个泛型参数（如 K 和 V）可以设计灵活且类型安全的工具方法和数据结构，增强代码复用性，并由编译器在编译时确保类型正确性。同时，由于 Java 泛型不支持原始类型，自动装箱机制会在需要时发挥作用。

**知识树**

1. 核心概念:

    - 泛型支持使用多个类型参数，提高复用性与灵活性。
    - 注意：Java 泛型不支持原始类型，必须使用相应的包装类。

2. 方法中的多类型参数

    - 在方法声明中，泛型参数在返回类型前声明，例如 `<K, V>`。
    - 常用约定：`K` 代表键（Key），`V` 代表值（Value），但命名可自定义。

3. 类中的多类型参数

    - 类可以声明多个泛型参数，使得其成员变量和方法能同时处理多种数据类型。
    - 例：设计一个键值对类 `KeyValuePair<K, V>`，利用泛型实现通用的数据结构。

**代码示例**

1. 泛型方法示例：打印键值对

    ```java
    public class Utils {

        public static <K , V> void print(K key, V value) {
            System.out.println(key + ": " + value);
        }
    }
    ```

2. 键值对类

    ```java
    public class KeyValuePair<K,V> {
        public K key;
        public V value;
        public KeyValuePair(K key, V value) {}
    }
    ```

## 泛型通配符与继承

> 简述：泛型通配符解决了泛型不变性问题，使得方法可以接收基类及其子类组成的集合。利用 `? extends Base` 限定只读集合，而 `? super Base` 则允许安全写入，从而在继承体系中灵活且类型安全地处理集合数据。

**知识树**

1. 泛型不变性问题

    - 泛型类不能直接接受其子类的实例。
    - 例如：接受`GenericList<User>`的方法，不能接受`GenericList<Instructor>`，这在编译期会引发类型不匹配错误，即使 Instructor 是 User 的子类。

2. 通配符的作用

    - Wildcards (`?`) 用于表示未知类型，增加类型灵活性。
    - `? extends Base`
        - 限定集合元素为 Base 或其子类型。
        - 只允许读取操作：可以安全地将读取的元素赋值给 Base 类型变量，但禁止添加元素（除 null）。
    - `? super Base`
        - 限定集合元素为 Base 或其父类型。
        - 允许写入操作：可以添加 Base 类型或其子类的实例，但读取时只能取回 Object 类型。

3. 捕获转换

    - 编译器在使用通配符时生成匿名“捕获”类型（capture of ?），以确保内部类型安全。
    - 开发者无法直接操作捕获类型，只能依赖编译器的类型检查。

4. 创建示例

    - 创建 Instructor 类继承 User 类，并实现构造方法
    - 在 Utils 类中，创建 printUsers 方法

**代码示例**

1. 泛型不变性问题

    - 创建 Instructor 类继承 User 类

        ```java
        public class Instructor extends User{
            public Instructor(int points) {
                super(points);
            }
        }
        ```

    - User 方法中创建打印方法

        ```java
        public class Utils {

            // 可以使用子类套入
            public static void printUser(User user) {
                System.out.println(user);
            }

            // 无法使用User的子类
            public static void printUsers(GenericList<User> users) {
                // 打印逻辑
            }
        }
        ```

    - `printUsers()` 方法无法接受 `GenericList<Instructor>`

        ```java
        public class Main {
            public static void main(String[] args) {
                var instructors = new GenericList<Instructor>();
                var users = new GenericList<User>();

                Utils.printUsers(users);
                // Utils.printUsers(instructors); // 报错
            }
        }
        ```

2. 使用通配符解决泛型不变性

    ```java
    public class Utils {

    		// 通配符：？
        public static void printUsers(GenericList<?> users) {
            // 打印逻辑
        }
    }
    ```

    - 描述：此时不限制`GenericList<T>`中 T 的类型

3. 继承与通配符应用实例

    ```java
    public class Utils {

    	// 限制`GenericList<T>`中T的类型为Use或其子类，只可读，extend改为super之后可操作，如add
        public static void printUsers(GenericList<? extends User> users) {

            //extend 时
            User x = users.get(0);//只允许读操作

            //super 时
            // Object x = users.get(0);//读操作只允许返回Object
            // users.add(new User(10));//允许写入操作
    		// users.add(new Instructor(10));//允许写入操作
        }
    }
    ```

# 集合

## 集合概览

**知识树**

> 简述：Java 集合框架提供了一组接口和实现类，允许我们高效地存储、访问和操作数据。集合框架包括多种类型，如`List`、`Set`、`Queue`和`Map`，用于不同的应用场景。这里暂不涉及多线程相关集合，相关内容将在多线程章节中讨论。

1. `Iterable`

    - 类型：接口 (interface)
    - 概念：集合类层次结构的最顶层接口。所有可迭代集合（如`List`、`Set`、`Queue`）的基接口。实现了`Iterable`接口的类可以使用`forEach`方法进行元素遍历。

2. `Collection`

    - 类型：接口 (interface)
    - 概念：扩展了`Iterable`接口，并添加了额外的功能，如元素的添加、删除和查找等。它代表了一种可以包含多个对象的容器。

3. `List`

    - 类型：接口 (interface)
    - 概念：表示一个有序的集合，允许通过索引访问元素。集合中的元素可能重复。常用实现类有`ArrayList`、`LinkedList`等。

4. `Set`

    - 类型：接口 (interface)
    - 概念：表示一个不允许有重复元素的集合。常用实现类有`HashSet`、`LinkedHashSet`、`TreeSet`等。

5. `Queue`

    - 类型：接口 (interface)
    - 概念：扩展了`Collection`接口，提供了额外的操作来处理元素队列。常用实现类有`PriorityQueue`、`LinkedList`等。

6. `Map`

    - 类型：接口 (interface)
    - 概念：表示键值对的映射集合。常用实现类有`HashMap`、`LinkedHashMap`、`TreeMap`等。

**结构**

1.  大致结构

    ```
    Iterable
     ├── Collection
     │    ├── List
     │    │     ├── *ArrayList
     │    │     ├── *LinkedList
     │    │     └── *Stack
     │    ├── Set
     │    │     ├── *HashSet
     │    │     ├── *LinkedHashSet
     │    │     └── *TreeSet
     │    └── Queue
     │          ├── *PriorityQueue
     │          └── *LinkedList
     └── Map
          ├── *HashMap
          ├── *LinkedHashMap
          └── *TreeMap
    ```

    - 描述：未带`*`的是接口，带`*`的是接口的具体实现类

## `Iterable` 基接口

> 简述：`Iterable` 是 Java 中所有可迭代集合的基础接口，提供核心方法 `iterator()`。只有实现了该接口并定义了 `iterator()` 方法的类，才能使用 `for-each` 循环遍历元素。`for-each` 本质是调用 `iterator()` 方法获得一个 `Iterator` 实例，后续调用实例的 `hasNext()` 和 `next()` 方法进行遍历。

**知识树**

1. `Iterable` 接口
    - 核心方法：`iterator()`（必须实现），返回 `Iterator` 接口类型的引用
    - 默认方法：`forEach()`、`spliterator()`（有默认实现，可不重写）
2. `Iterator` 接口
    - 必须实现方法：
        - `hasNext()`：判断是否存在下一个元素，返回布尔值
        - `next()`：获取下一个元素，返回元素值
    - 默认方法：
        - `remove()`：从集合中移除当前元素（可选实现，默认抛异常）
        - `forEachRemaining()`：对剩余元素执行指定操作
3. `for-each` 循环原理
    - 本质为通过 `iterator()` 获得迭代器进行循环遍历
4. 问题与解决方案
    - 问题：自定义集合类未实现 `Iterable` 接口，无法使用 `for-each` 循环。
    - 不良方案：暴露集合底层实现（如数组），造成耦合风险。
    - 正确方案：实现 `Iterable` 接口，通过标准接口遍历集合，确保封装和可扩展性。

**代码示例**

1. GenericList 使用 for-each 问题和初步解决

    - 未实现 `Iterable` 接口的集合类使用 `for-each`（报错）

        ```java
        public class Main {
            public static void main(String[] args) {
                var list = new GenericList<String>();
                list.add("a");
                list.add("b");
        		for(var item: list) // 编译错误：GenericList 未实现 Iterable 接口
                    System.out.println(item);
            }
        }
        ```

    - 暴露底层实现（不推荐）

        ```java
        public class GenericList<T> {
            public T[] items = (T[])new Object[10]; // 暴露为 public，破坏封装
            private int count;

            public void add(T item) {
                items[count++] = item;
            }

            public T get(int index) {
                return items[index];
            }
        }
        ```

    - 访问底层数组，耦合严重，因为数组（底层是 ArrayList）实现了 Iterable 接口

        ```java
        public class Main {
            public static void main(String[] args) {
                var list = new GenericList<String>();
                list.add("a");
                list.add("b");
                for(var item: list.items) // 直接访问底层数组，耦合严重
                    System.out.println(item);
            }
        }
        ```

2. 正确实现 `Iterable` 接口，支持 `for-each` 循环（推荐）

    - 自定义集合类实现 `Iterable` 接口，并重写 `iterator()` 方法。

        ```java
        public class GenericList<T> implements Iterable<T> {
            private T[] items = (T[]) new Object[10];
            private int count;

            public void add(T item) {
                items[count++] = item;
            }

            public T get(int index) {
                return items[index];
            }

            @Override
            public Iterator<T> iterator() {
                return new ListIterator();
            }

            private class ListIterator implements Iterator<T> {
                private int currentIndex;

                @Override
                public boolean hasNext() {
                    return currentIndex < count;
                }

                @Override
                public T next() {
                    return items[currentIndex++];
                }
            }
        }
        ```

    - 使用 `for-each` 遍历自定义集合类

        ```java
        public class Main {
            public static void main(String[] args) {
                var list = new GenericList<String>();
                list.add("a");
                list.add("b");
                for (var item : list)
                    System.out.println(item);
            }
        }
        ```

    - `for-each` 本质（字节码反编译后真实执行流程）

        ```java
        public class Main {
            public static void main(String[] args) {
                var list = new GenericList<String>();
                list.add("a");
                list.add("b");

                Iterator<String> iterator = list.iterator();
                while (iterator.hasNext()) {
                    var current = iterator.next();
                    System.out.println(current);
                }
            }
        }
        ```

## `Collection` 接口

> 简述：`Collection` 是 Java 集合框架的根接口，定义了一组用于存储、访问和操作元素的标准方法。它继承自 `Iterable` 接口，因此所有集合都支持增强型 for 循环遍历。集合接口提供了增删查、判断、清空及转换为数组等基础操作，是各种数据结构（如列表、集合、队列）的通用协议。
> **知识树**

1. Collection

    - 类型：接口（interface）
    - 泛型约定：`E` 表示元素类型
    - 继承关系：继承自 `Iterable<E>`，支持迭代遍历（for-each）

2. 基本操作

    - 添加元素
        - 单个添加：`add(E e)`，添加单一元素，成功返回 `true`
        - 批量添加：`addAll(Collection<? extends E> c)`，添加另一个集合的所有元素
    - 删除元素
        - 单个删除：`remove(Object o)`，删除指定元素首次出现的位置
        - 批量删除：`removeAll(Collection<?> c)`，删除存在于指定集合中的所有元素
    - 查询元素
        - 判断存在：`contains(Object o)`，检查集合中是否包含指定元素
        - 判断包含全部：`containsAll(Collection<?> c)`，检查是否包含指定集合的所有元素
    - 集合状态
        - 获取大小：`size()`，返回元素数量
        - 判空操作：`isEmpty()`，判断集合是否为空
        - 清空操作：`clear()`，移除所有元素
    - 集合转换
        - 转数组：`toArray()` 返回 `Object[]` 数组
        - 转类型数组：`toArray(T[] a)` 返回指定类型数组，如果 `a` 长度不够，会新建一个同类型、足够长的新数组，`list.toArray(new T[0])`为推荐的默认写法。

3. 常见实现类
    - List 类
        - `ArrayList`、`LinkedList`
    - Set 类
        - `HashSet`、`TreeSet`
    - Queue 类
        - `PriorityQueue`
    - 数据结构章节展开

**代码示例**

1. ArrayList 示例，创建 `CollectionsDemo` 类，并在 `Main` 中调用该类的静态方法`show()`

    ```java
    public class CollectionsDemo {
        public static void show() {
            Collection<String> collection = new ArrayList<>();

            // 单个添加元素
            collection.add("a");
            collection.add("b");
            collection.add("c");

            // 批量添加元素
            Collections.addAll(collection, "d", "e");

            // 删除单个元素
            collection.remove("a");

            // 判断元素存在
            boolean hasB = collection.contains("b");

            // 获取集合大小
            int size = collection.size();

            // 转换为 Object[] 数组
            Object[] objectArray = collection.toArray();

            // 转换为指定类型数组
            String[] stringArray = collection.toArray(new String[0]);

            // 遍历集合
            for (var item : collection)
                System.out.println(item);

            // 清空集合
            collection.clear();

            // 判断集合是否为空
            boolean isEmpty = collection.isEmpty();

            Collection<String> other = new ArrayList<String>();
            // 将整个 list 添加到 other
            other.addAll(collection);

            System.out.println("包含'b': " + hasB);
            System.out.println("集合大小: " + size);
            System.out.println("是否为空: " + isEmpty);
            System.out.println("collection == other: " + (collection == other));// false
            System.out.println("collection equals other: " + (collection.equals(other)));//true
        }
    }
    ```

## List 接口

> 简述：`List` 接口继承自 `Collection` 接口，代表一种有序集合（序列），可包含重复元素，支持索引访问和精细的增删改查操作。通过泛型机制提供类型安全。

**知识树**

1. `List` 接口

    - 定义：有序、可重复的元素序列，元素位置通过整数索引标识
    - 特性：允许重复、元素位置固定但可修改

2. 常用方法

    - 添加元素：
        - `add(E e)`：尾部追加元素
        - `add(int index, E e)`：在指定索引位置插入元素
        - `addAll(Collection<? extends E> c)`：尾部追加多个元素
    - 访问与修改：
        - `get(int index)`：返回指定位置元素
        - `set(int index, E e)`：修改指定位置元素，返回旧值
    - 删除元素：
        - `remove(int index)`：删除并返回指定位置元素
        - `remove(Object o)`：删除首个匹配元素，返回是否删除成功
    - 查询元素：
        - `indexOf(Object o)`：首次出现的位置索引，不存在返回 -1
        - `lastIndexOf(Object o)`：最后一次出现的位置索引，不存在返回 -1
    - 子列表操作：
        - `subList(int fromIndex, int toIndex)`：返回指定范围的子列表视图（含头不含尾）

3. 常见实现类

    - `ArrayList`（数组实现，高效随机访问）
    - `LinkedList`（链表实现，高效插入删除）
    - 根据读取需求以及线程安全做取舍，后续讲解

4. 补充

    - 练习前可能需要删除之前自己创建的 List 类，使用`java.util.list`

**代码示例**

1. ArrayList 基本操作示例，创建 `ListDemo` 类，并在 `Main` 中调用该类的静态方法`show()`

    ```java
    public class ListDemo {
        public static void show() {
            List<String> list = new ArrayList<>();

            // 添加元素
            list.add("a");
            list.add("b");
            list.add("c");

            // 指定索引插入元素
            list.add(0, "!");

            // 批量添加元素
            Collections.addAll(list, "d", "e", "a");

            // 修改元素
            list.set(0, "g");

            // 删除元素
            list.remove(0);          // 根据索引删除
            list.remove("c");        // 根据内容删除

            // 查找元素位置
            int firstB = list.indexOf("b");        // 首次出现的位置
            int lastA = list.lastIndexOf("a");     // 最后一次出现的位置

            // 获取子列表（[fromIndex, toIndex)）
            List<String> subList = list.subList(1, 3);

            // 遍历打印结果
            for (String item : list)
                System.out.println(item);

            System.out.println("第一个'b'的位置：" + firstB);
            System.out.println("最后一个'a'的位置：" + lastA);
            System.out.println("子列表：" + subList);
        }
    }
    ```

## Queue 接口

> 简述：`Queue` 接口表示用于存储按特定顺序处理元素的集合，常应用于任务排队、事件处理等场景。继承自 `Collection` 接口，定义了针对队列头尾操作的方法，通常遵循先进先出（FIFO）规则，但特殊实现类可支持优先级排序。

**知识树**

1. Queue 接口概述

    - 继承关系：继承自 `Collection` 接口
    - 特性：一般为 FIFO（先进先出）；某些实现类支持优先级排序

2. 常用方法

    - 添加元素
        - `add(E e)`：插入失败时抛异常
        - `offer(E e)`：插入失败时返回 `false`
    - 检索（不移除）队首元素
        - `element()`：队列空时抛异常
        - `peek()`：队列空时返回 `null`
    - 移除（并返回）队首元素
        - `remove()`：队列空时抛异常
        - `poll()`：队列空时返回 `null`

3. 常用实现类

    - ArrayDeque：双端队列，可从两端添加和删除元素，通常用于普通队列场景
    - PriorityQueue：基于元素优先级排序的队列，适用于需要按照优先级处理任务的场景

**代码示例**

1. 使用 ArrayDeque 实现基本队列操作

    ```java
    public class QueueDemo {
        public static void main(String[] args) {
            Queue<String> queue = new ArrayDeque<>();
            // 添加元素到队尾
            queue.add("C");
            queue.add("A");
            queue.add("B");
            // 使用 offer 方法安全添加元素
            queue.offer("D");

            // 查看队首元素（不移除）
            System.out.println("Queue peek: " + queue.peek());
            // 删除队首元素
            System.out.println("Removed: " + queue.remove());
            // 打印整个队列
            System.out.println("Queue: " + queue);
        }
    }
    ```

    - 描述：通过 ArrayDeque 展示了队列的常用方法：add/offer、peek 与 remove。

2. 使用 PriorityQueue 实现基于优先级的排序

    ```java
    public class PriorityQueueDemo {
        public static void main(String[] args) {
            Queue<String> priorityQueue = new PriorityQueue<>();
            // 根据字符串的自然顺序排序
            priorityQueue.add("D");
            priorityQueue.add("C");
            priorityQueue.add("A");
            priorityQueue.add("B");

            System.out.println("Priority Queue: " + priorityQueue);
            // 删除队首元素观察排序结果
            System.out.println("Removed: " + priorityQueue.poll());
            System.out.println("Priority Queue after poll: " + priorityQueue);
            // 删除队首元素观察排序结果
            System.out.println("Removed: " + priorityQueue.poll());
            System.out.println("Priority Queue after poll: " + priorityQueue);
            // 删除队首元素观察排序结果
            System.out.println("Removed: " + priorityQueue.poll());
            System.out.println("Priority Queue after poll: " + priorityQueue);
        }
    }
    ```

    - 描述：调用 poll() 或 peek() 时，总是能得到优先级最高（或最低）的元素。直接使用迭代器遍历 PriorityQueue 或调用 toString()，得到的顺序仅反映了堆的内部数组结构，并非完全排序。

## Set 接口

> 简述：`Set` 表示无重复元素集合，继承自 `Collection` 接口。不保证元素顺序，具体顺序依赖实现类（如哈希、插入顺序或自然排序）。主要用于确保元素唯一性以及执行集合运算（并集、交集、差集）。

**知识树**

1. Set 接口概述

    - 特性：不允许重复元素
    - 顺序：取决于实现类，可能无序或有序（插入或自然顺序）

2. 常用方法（继承自 Collection）

    - 添加元素：`add(E e)`
    - 删除元素：`remove(Object o)`
    - 查询元素：`contains(Object o)`

3. 集合运算（使用 Collection 方法实现）

    - 并集：`addAll(Collection<?>)` ——（把另一个集合的所有元素加进来）
        - 可以并入 List，也可以并入 Set
    - 交集：`retainAll(Collection<?>)` —— （只保留同时存在于两个集合的元素）
    - 差集：`removeAll(Collection<?>)` —— （从本集合中移除也在另一个集合里的元素）
    - 包含：`containsAll(Collection<?>)` —— 判断本集合是否包含另一个集合的全部元素

4. 常见实现类及特点

    - `HashSet`：无序，哈希表实现，高效查找
    - `LinkedHashSet`：有序（插入顺序），哈希表+链表
    - `TreeSet`：有序（自然排序），红黑树实现，元素必须实现 `Comparable` 或提供 `Comparator`

5. 补充
    - 在 Java 标准库里，Set 只是对 Collection 做了以下“契约”层面的补充，而并未新增方法。
    - 集合运算对于 List 也可以使用，但是 List 支持重复元素，结果集不准确

**代码示例**

1. 基本 Set 操作与集合运算

    ```java
    public class SetDemo {
        public static void show(){
            Set<String> set = new HashSet<>();
            set.add("x");
            set.add("y");
            set.add("z");
            set.add("z");
            System.out.println(set);// z 只有一个

            Collection<String> collection = new ArrayList<>();
            Collections.addAll(collection, "a", "b", "c");
            Set<String> set1 = new HashSet<>(collection);// 并入 List 集合
            System.out.println(set1);

            Set<String> set2 = new HashSet<>(Arrays.asList("b", "c", "d"));// 并入 List 集合
            System.out.println(set2);

            // 并集
            Set<String> union = new HashSet<>(set1);
            union.addAll(set2);
            System.out.println("并集：" + union);

            // 交集
            Set<String> intersection = new HashSet<>(set1);
            intersection.retainAll(set2);
            System.out.println("交集：" + intersection);

            // 差集
            Set<String> difference = new HashSet<>(set1);
            difference.removeAll(set2);
            System.out.println("差集：" + difference);
        }
    }
    ```

2. `TreeSet` 自然排序示例（要求元素实现 Comparable）

    ```java
    public class TreeSetDemo {
        public static void main(String[] args) {
            Set<Integer> treeSet = new TreeSet<>();
            treeSet.add(3);
            treeSet.add(1);
            treeSet.add(2);
            System.out.println(treeSet); // 输出自然排序后的元素 [1, 2, 3]
        }
    }
    ```

## Hash Table

> 简述：哈希表是一种数据结构，通过哈希函数实现键（Key）到索引（Index）的映射，以平均 O(1)的复杂度高效进行插入、查找和删除操作。性能取决于哈希函数质量及冲突处理方法。

**知识树**

1. 哈希表概念

    - 基于哈希函数将键映射到数组索引位置。
    - 平均操作时间复杂度为 O(1)。

2. ArrayList vs Hash Table

    - ArrayList：
        - 按索引访问：O(1)
        - 按值查找：O(n)
    - 哈希表：
        - 按键访问：平均 O(1)，最坏 O(n)

3. 哈希冲突（Collision）处理

    - 后续专门章节详细介绍。

4. Java 中的哈希表选择
    - `Hashtable`：（线程）安全，性能差，已弃用。
    - 推荐使用：`HashMap`（无序高效）、`LinkedHashMap`（有序高效），`HashSet`（基于`HashMap`）

## Map 接口

> 简述：`Map`是以键值对（Key-Value）形式存储数据的接口。键唯一对应值，可实现快速查询、插入、删除等操作。`Map`不属于`Collection`，但提供集合形式的访问方法。

**知识树**

1. Map 概念

    - 定义：将不可重复的键映射到任意值的结构
    - 特性：键唯一、值可重复；支持快速随机访问

2. 核心方法

    - 添加与更新
        - `put(K key, V value)`：插入或更新。
        - `putIfAbsent(K key, V value)`：键不存在时才插入。
    - 查询
        - `get(K key)`：根据键获取值，未找到返回 null。
        - `getOrDefault(K key, V default)`：未找到返回默认值。
        - `containsKey(K key)`：判断键是否存在。
    - 删除与替换
        - `remove(K key)`：删除指定键值对。
        - `replace(K key, V value)`：仅更新已有键的值。
    - 集合视图
        - `keySet()`：所有键集合。
        - `values()`：所有值集合。
        - `entrySet()`：所有键值对集合，便于遍历。

3. 常用实现

    - `HashMap`：基于哈希表，无顺序保证，性能最优
    - `LinkedHashMap`：保留插入顺序
    - `TreeMap`：基于红黑树，键按自然或自定义顺序排序

**代码示例**

1. 基本键值操作，假设需要通过邮箱查找顾客

    - 创建顾客类

        ```java
        public class Customer {
            private String name;
            private String email;

            public Customer(String name, String email) {
                this.name = name;
                this.email = email;
            }

            public String getEmail() {
                return email;
            }

            @Override
            public String toString() {
                return "Customer{" +
                        "name='" + name + '\'' +
                        ", email='" + email + '\'' +
                        '}';
            }
        }
        ```

    - 键值操作

        ```java
        public class MapDemo {
            public static void show() {
                var c1 = new Customer("a","e1");
                var c2 = new Customer("b","e2");

                Map<String,Customer> map = new HashMap<>();
                map.put(c1.getEmail(),c1);
                map.put(c2.getEmail(),c2);

                var customer = map.get("e1");//查询键为e1的值

                var unknow = new Customer("Unknown","");
                var customer2 = map.getOrDefault("e10",unknow);// 若查找不到返回默认值方法

                var ifContainE10 = map.containsKey("e10");// 查找是否存在

                var replace = map.replace("e1", new Customer("a++", "e1"));

                // for(var item: map) Map本身不可遍历，可以通过方法遍历键、值，或者键值对
                for(var item : map.keySet()){}// 遍历键
                for(var item : map.values()){}// 遍历值
                for(var item : map.entrySet()){}// 遍历键值对
            }
        }
        ```

# Lambda

## 函数式接口

> 简述：函数式接口（Functional Interface）是指包含一个抽象方法的接口，作为 Lambda 表达式或方法引用的目标类型。接口可以包含任意数量的 `default` 或 `static` 方法，以及继承自 `Object` 的方法，但这些不计入抽象方法的数量。

**知识树**

1. 函数式接口基础

2. 函数式接口基础

    - SAM（Single Abstract Method）：接口仅包含一个抽象方法。
    - `@FunctionalInterface`：可选的注解，确保接口仅包含一个抽象方法。

3. 演示过程

    - 从函数式接口的引入开始，逐步过渡到使用匿名内部类（Anonymous Inner Classes），然后进一步通过 Lambda 表达式简化代码。

**代码示例**

1. 函数式接口原始方式使用

    - 定义一个接口 `Printer`，包含一个打印方法：

        ```java
        public interface Printer {
            void print(String message);
        }
        ```

    - 创建接口实现类：

        ```java
        public class ConsolePrinter implements Printer{
            @Override
            public void print(String message) {
                System.out.println(message);
            }
        }
        ```

    - 使用实现类的实例调用方法：

        ```java
        public class LambdasDemo {
            public static void show(){
                greet(new ConsolePrinter());
            }

            public static void greet(Printer printer){
                printer.print("Hello World");
            }
        }
        ```

## 匿名内部类

> 简述：匿名内部类是在方法调用时直接创建并实现接口的类，没有类名。它常用于简化代码，避免创建冗长的类。

**知识树**

1. 匿名内部类

    - 语法：通过 `new` 关键字在方法调用时直接创建接口的匿名实现类，并实现唯一的抽象方法。

**代码示例**

1. 匿名内部类的使用

    ```java
    public class LambdasDemo {
        public static void show() {
            // 创建匿名内部类并实现接口的抽象方法
            greet(new Printer() {
                @Override
                public void print(String message) {
                    System.out.println(message);
                }
            });
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

## Lambda 简化匿名内部类

> 简述：Lambda 表达式提供了一种简化匿名内部类的写法，使得代码更加简洁和易读，仅适用于函数式接口，即仅有一个抽象方法的类

**知识树**

1. Lambda 表达式

    - 语法：`(参数列表) -> { 方法体 }`。
        - `参数列表`：指定传入参数的类型和名称。如果参数类型可以通过上下文推断，类型可以省略。
        - `->`：Lambda 表达式的箭头符号，分隔了参数列表和方法体。
        - `方法体`：包含实现的具体逻辑，可以是单行的简洁形式，也可以是多行的复杂逻辑。
    - 概念：
        - 相当于是一个依赖于 JVM 动态生成的实现接口的对象，效率略微提高，这与匿名内部类不同，只需记住优先使用 Lambda 表达式
    - 使用限制：
        - 仅适用于函数式接口，即接口中仅包含一个抽象方法（可以包含多个默认方法和静态方法）。这种限制确保了 Lambda 表达式能够明确地映射到接口的一个方法上。

2. 再次简化

    - 通过 `::` 操作符和方法引用，Lambda 表达式的使用可以进一步简化，将在后续内容中详细介绍。

**代码示例**

1. 使用 Lambda 表达式

    ```java
    public class LambdasDemo {
        public static void show() {

            // 匿名内部类使用
            greet(new Printer() {
                @Override
                public void print(String message) {
                    System.out.println(message);
                }
            });

    		// Lambda 表达式的基本使用，仅适用于函数式接口（只有一个抽象方法的类）
    		greet((String message) -> {
    			System.out.println(message);
    		});

            // 单个参数时可省略括号，单条语句可省略花括号
            greet(message -> System.out.println(message));

            // printer 变量指向了一个 依赖于 JVM 动态生成的实现接口的对象
            Printer printer = message -> System.out.println(message);

            // 传入引用
            greet(printer);
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

## 变量与 this

> 简述：在 Lambda 表达式中，可以访问方法中的局部变量以及类中的成员变量。Lambda 表达式中的 `this` 指向当前类的实例，而匿名内部类中的 `this` 指向匿名内部类的实例。

**知识树**

1. Lambda 表达式

    - 可以访问方法中的局部变量（前提是这些变量是 `final` 或者是有效的）。
    - `this` 指向外部类的实例。

2. 匿名内部类

    - 在匿名内部类中，`this` 指向的是匿名内部类的实例，而不是外部类的实例。

**代码示例**

1. 静态方法中访问变量

    ```java
    public class LambdasDemo {

        public static String prefix = "-";

        public static void show() {
            String suffix = "-";

            greet(message -> System.out.println(prefix + message + suffix));
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

2. 非静态方法中 `this` 的使用

    ```java
    public class LambdasDemo {

        public String prefix = "-";

        public void show() {
            greet(message -> System.out.println(this.prefix + message));
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

## 方法引用

> 简述：方法引用（Method Reference）使用 `::` 运算符，将已有方法或构造器作为函数式接口的实现，进一步简化 Lambda 表达式。引用时不写参数和括号，目标函数签名需与接口抽象方法匹配。

**知识树**

1. 方法引用基础

    - 语法：`持有者::方法名`
    - 持有者可以是类名（静态方法）、特定对象（实例方法）或类名加 `new`（构造器）。
    - 目标类型：函数式接口，抽象方法签名与被引用方法完全一致。

2. 方法引用

    - 实例方法引用（已有对象）
        - 格式：`instance::instanceMethod`
        - 引用某个对象的实例方法，如 `System.out::println`。
    - 实例方法引用（隐式对象）
        - 格式： `ClassName::instanceMethod`
    - 静态方法引用
        - 格式：`ClassName::staticMethod`
        - 将类的静态方法直接作为实现。
    - 构造器引用
        - 格式：`ClassName::new`
        - 将构造器作为函数式接口（如 `Supplier`、`Function`、`Consumer` 等）的实现，用于创建新实例。

**代码示例**

1. 静态方法引用

    ```java
    public class LambdasDemo {

        public static void targetMethod(String x) {
        }

        public static void show() {

            // 匿名内部类使用
            // greet(new Printer() {
            //     @Override
            //     public void print(String message) {
            //         System.out.println(message);
            //     }
            // });

            // Lambdas表达式
            // greet(message -> System.out.println(message));

            // Lambdas方法引用表达式
            // 将 System.out 对象的 println 方法作为 Printer.print 方法的实现，
            // 并将其作为一个 Printer 接口的实例传递给 greet 方法。
            greet(System.out::println);
            // 将 LambdasDemo 类的 targetMethod 方法作为 Printer.print 的实现...
            greet(LambdasDemo::targetMethod);
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

    - 将 `System.out` 对象的 `println` 方法作为 `Printer.print` 方法的实现，并将其作为一个 `Printer` 接口的实例传递给 `greet` 方法。`targetMethod`方法同理。

2. 构造器引用

    ```java
    public class LambdasDemo {

        public LambdasDemo(String msg) {
        }

        public static void show() {
            // 方法引用：将 LambdasDemo 类的 构造函数 方法作为 Printer.print 的实现
            // 并将其作为一个 Printer 接口的实例传递给 greet 方法。
            greet(LambdasDemo::new);
        }

        public static void greet(Printer printer) {
            printer.print("Hello World");
        }
    }
    ```

## 预定义函数式接口概述

> 简述：Java 在`java.util.function`包中预定义了四大核心函数式接口，分别用于数据消费、数据提供、数据转换及条件判断，为 Lambda 表达式提供统一的目标类型。

**知识树**

1. `Consumer<T>` 消费者

    - 方法：`void accept(T t)`
    - 功能：消费一个参数，无返回值。

2. `Supplier<T>` 供应者

    - 方法：`T get()`
    - 功能：提供一个结果，无输入参数。

3. `Function<T, R>` 函数

    - 方法：`R apply(T t)`
    - 功能：将输入参数映射为另一类型输出。

4. `Predicate<T>` 断言
    - 方法：`boolean test(T t)`
    - 功能：判断参数是否满足条件。

## Consumer 接口

> 简述：`Consumer`接口用于消费数据，不返回结果。支持链式调用，通过`andThen`方法组合多个消费动作。
> Link: https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html

**知识树**

1. 核心方法

    - `accept(T t)`：处理单个输入数据，无返回值。
    - `andThen(Consumer<? super T> after)`：链式调用多个`Consumer`。

2. 应用场景

    - 遍历集合，执行统一操作（如打印元素）。
    - 链式组合，顺序执行多个数据处理步骤。

3. `forEach` 方法

    - `Iterable` 中定义，`forEach` 方法接受一个 `Consumer` 引用，遍历集合中的元素，并依次执行该 `Consumer` 引用中的 `accept` 方法。

**代码示例**

1. `Consumer` 基本用法

    ```java
    public class LambdasDemo {
        public static void show() {
            List<Integer> list = List.of(1, 2, 3);

            // 传统方式遍历
            for (var item : list) {
                System.out.println(item);
            }

            // 创建匿名内部类，实现 Consumer 接口的 accept 方法，打印每个传入的值
            Consumer<Integer> consumer = new Consumer<Integer>() {
                @Override
                public void accept(Integer i) {
                    System.out.println(i);
                }
            };

            // 通过 lambda 表达式实例化了一个 Consumer<Integer> 的函数式接口
            Consumer<Integer> c = i -> System.out.println(i);

            // c 引用的是 JVM 在运行时通过 invokedynamic 生成的、实现了 Consumer 接口的函数式对象
            // 调用 Iterable.forEach，内部对列表中的每个元素执行 c.accept(e)，也就是打印该元素
            list.forEach(c);

            // 将前两步的步骤合成一步，也就是下面的代码
            list.forEach(item -> System.out.println(item));

            // 方法引用实现Consumer（更简洁）
            list.forEach(System.out::println);
        }
    }
    ```

    - 展示如何使用匿名内部类和 Lambda 表达式实现 `Consumer` 接口，并通过 `forEach` 方法遍历集合。

2. 链式 `Consumer`

    ```java
    public class LambdasDemo {
        public static void show() {
            List<String> list = List.of("a", "b", "c");

    		// 定义两个 Consumer，实现打印和大写转换
            Consumer<String> print = i -> System.out.println(i);
            Consumer<String> printUpperCase = i -> System.out.println(i.toUpperCase());

    		// 使用 andThen 进行链式调用，依次执行两个 Consumer
            list.forEach(print.andThen(printUpperCase));
    		// 输出：a A b B c C
        }
    }
    ```

    - 通过 `andThen` 方法将多个 `Consumer` 引用串联，确保按顺序执行每个操作。

## Supplier 接口

> 简述：Supplier 是一个无输入、返回类型为 T 的函数式接口，用于延迟生成或提供值。
> Link: https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html

**知识树**

1. 核心方法

    - `T get()`：返回类型为 T 的结果。

2. 懒惰求值

    - Supplier 在声明时不执行计算，只有在调用 `get()` 时才生成并返回值。

3. 原始类型专化

    - 为了避免自动装箱和拆箱的性能损失，Java 提供了接口直接操作原始类型的专用接口，提高了性能，避免包装类的使用。如：`DoubleSupplier`、`IntSupplier`、`LongSupplier` 和 `BooleanSupplier`

4. 应用场景

    - 延迟生成随机数、时间戳、配置读取或其他耗时/依赖外部状态的值。

**代码示例**

1. Supplier 示例

    ```java
    public class LambdasDemo {

        public static void show() {

            // 使用匿名类实现 Supplier 接口的 get 方法，使用Math类的random方法
            Supplier<Double> supplier = new Supplier<Double>() {
                @Override
                public Double get() {
                    return Math.random();
                }
            };

            // 将 Math 类的 random 方法绑定到接口引用 s 的get方法上
            // 只有当s调用get方法时，xxxxx，xxx懒加载
            Supplier<Double> s = Math::random;

            System.out.println(s.get());
        }
    }
    ```

    - `s.get()` 只有在显式调用时才会返回新的随机值，体现了懒惰求值的特性。

## Function 接口

> 简述：`Function` 接口用于接收一个参数并返回一个结果的函数操作。通过`andThen`或 `compose()`方法组合多个消费动作。
> Link: https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html

**知识树**

1. 核心方法

    - `apply(T t)`：唯一的抽象方法，接收类型为 `T` 的参数并返回类型为 `R` 的结果。
    - `andThen()`：将当前函数的结果作为输入，应用另一个函数（返回新结果）。
    - `compose()`：先应用另一个函数，再应用当前函数。
    - `identity()`：直接返回输入的参数，不做任何处理。

2. 链式操作

    - 可以使用 `andThen()` 或 `compose()` 组合多个 `Function` 接口，支持函数的链式调用。

3. 原始类型专化

    - 为了避免自动装箱和拆箱的性能损失，Java 提供了接口直接操作原始类型的专用接口。如：`IntFunction<R>`、`LongFunction<R>`、`DoubleFunction<R>`
    - 例如，`IntFunction<R>` 接受一个 `int` 类型的参数并返回一个类型为 `R` 的结果。

**代码示例**

1. 使用 `Function` 接口进行字符串长度计算

    ```java
    public class LambdasDemo {
        public static void show() {
            // 使用匿名类实现 Function 接口的 apply 方法，拿到字符串，返回字符串的长度
            Function<String, Integer> function = new Function<String, Integer>() {
                @Override
                public Integer apply(String str) {
                    return str.length();
                }
            };

            // 使用 lambda 简化实现
            Function<String, Integer> f = str -> str.length();

            var length = f.apply("abc");
            System.out.println(length);  // 输出: 3
        }
    }
    ```

    - 描述：使用了 `Function<String, Integer>` 接口，接受一个 `String` 类型的参数，返回其长度作为 `Integer`。

2. 使用 `Function` 接口链式调用

    ```java
    public class LambdasDemo {

        public static void show() {
            // "key:value"
            // first: "key=value"
            // second: "{key=value}"
            Function<String, String> replaceColon = str -> str.replace(":","=");
            Function<String, String> addBraces = str -> "{" + str + "}";

            // andThen: 先replaceColon，再addBraces
            var result = replaceColon.andThen(addBraces).apply("key:value");
            // compose：在addBraces之前，先replaceColon
            var result2 = addBraces.compose(replaceColon).apply("key:value");

            System.out.println(result2);

            // 另外一种方式
            var compose = replaceColon.andThen(addBraces);
            System.out.println(compose.apply("key:value"));
        }
    }
    ```

## Predicate 接口

> 简述：`Predicate` 接口接收一个输入参数并返回一个布尔值，常用于数据筛选、验证等场景。
> Link: https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html

**知识树**

1. 核心方法

    - `test(T t)`：唯一的抽象方法，用于检查给定的对象是否满足某些条件，返回 `true` 或 `false`。
    - `and()`：组合多个 `Predicate`，执行逻辑与操作（`&&`）。
    - `or()`：组合多个 `Predicate`，执行逻辑或操作（`||`）。
    - `negate()`：返回一个新 `Predicate`，对原条件进行取反操作。
    - `isEqual()`：用于比较两个对象是否相等。

2. 链式操作

    - `and()`、`or()`、`negate()` 可链式组合，允许构建复杂的布尔判断。

3. 原始类型专化

    - 为了避免自动装箱和拆箱的性能损失，Java 提供了接口直接操作原始类型的专用接口，如 `IntPredicate`、`LongPredicate`、`DoublePredicate`。

**代码示例**

1. 使用 `Predicate` 检查字符串长度是否大于五

    ```java
    import java.util.function.Predicate;

    public class LambdasDemo {
        public static void show() {
            // 定义 Predicate，用于检查字符串长度是否大于五
            Predicate<String> isLongerThanFive = str -> str.length() > 5;

            // 使用 test 方法验证
            var result = isLongerThanFive.test("sky");
            System.out.println(result);  // 输出: false
        }
    }
    ```

    - 描述：定义一个 `Predicate<String>`，通过 `test()` 方法检查字符串的长度是否大于五。

2. 组合多个 `Predicate` 进行逻辑操作

    ```java
    public class LambdasDemo {
        public static void show() {
            // 定义两个 Predicate
            Predicate<String> hasLeftBrace = str -> str.startsWith("{");
            Predicate<String> hasRightBrace = str -> str.endsWith("}");

            // 使用 and() 组合两个 Predicate，表示同时满足左右大括号的条件
            Predicate<String> hasLeftAndRightBraces = hasLeftBrace.and(hasRightBrace);

            // 使用 or() 组合两个 Predicate，表示满足任一条件
            Predicate<String> hasLeftOrRightBraces = hasLeftBrace.or(hasRightBrace);

            // 使用 negate() 取反操作
            Predicate<String> doesNotHaveLeftBrace = hasLeftBrace.negate();

            System.out.println(hasLeftAndRightBraces.test("{key:value}"));  // 输出: true
            System.out.println(hasLeftOrRightBraces.test("key:value"));    // 输出: false
            System.out.println(doesNotHaveLeftBrace.test("{key:value}")); // 输出: false
        }
    }
    ```

    - 描述：演示如何使用 `and()`、`or()` 和 `negate()` 方法组合 `Predicate`，构建复杂的布尔条件。

## BinaryOperator 接口

> 简述：`BinaryOperator` 接口专门用于处理两个相同类型的输入参数并返回一个相同类型的结果。它是 `BiFunction` 接口的特化版本，常用于二元操作（如加法、乘法等）。

**知识树**

1. 核心方法

    - `maxBy()`&`minBy()`
        - 根据传入的 `Comparator` 比较两个参数，返回“较大”/较小的那个
    - 继承自父类方法
        - `apply(T t, T u)`：唯一的抽象方法，接收两个参数并返回一个结果，执行特定的二元操作。
        - `andThen()`可将另一个操作应用于结果，进行组合操作。

2. 原始类型专化

    - 为了避免自动装箱和拆箱的性能损失，Java 提供了接口直接操作原始类型的专用接口如：`IntBinaryOperator`、`LongBinaryOperator`、`DoubleBinaryOperator`。

**代码示例**

1. 使用 `BinaryOperator` 进行加法操作

    ```java
    public class LambdasDemo {

        public static void show() {
            // 定义 BinaryOperator，用于加法
            BinaryOperator<Integer> add = (a, b) -> a + b;

            // 使用 apply 方法进行加法运算
            int result = add.apply(3, 4);
            System.out.println(result);  // 输出: 7

            // 定义 Function，用于平方
            Function<Integer, Integer> square = a -> a * a;

            // 组合操作：先加法后平方
            int result2 = add.andThen(square).apply(3, 4);
            System.out.println(result2);  // 输出: 49
        }
    }
    ```

    - 描述：定义一个 `BinaryOperator<Integer>`，使用 `apply()` 方法进行两个整数的加法运算。并通过 `andThen()` 方法，将 `BinaryOperator` 与 `Function` 组合，先进行加法操作，再对结果进行平方处理。

## UnaryOperator 接口

> 简述：`UnaryOperator` 接口用于处理单一类型的输入参数并返回同一类型的结果。它是 `Function<T, T>` 接口的特化版本，适用于执行对单一输入值的操作，如增量、平方等。

**知识树**

1. 核心方法

    - `identity()`：返回一个始终返回相同输入的操作，常用于表示默认操作。
    - 继承自父类方法
        - `apply(T t, T u)`：唯一的抽象方法，接收两个参数并返回一个结果，执行特定的二元操作。
        - `andThen()`\`compose()`可将另一个操作应用于结果，进行组合操作。

2. 专用化版本

    - 为了避免自动装箱和拆箱的性能损失，Java 提供了接口直接操作原始类型的专用接口如：`IntUnaryOperator`、`LongUnaryOperator`、`DoubleUnaryOperator`

3. 组合与应用

    - `andThen()`：可以将其他操作链接到当前操作后，以便在执行时组合多个函数。

**代码示例**

1. 使用 `UnaryOperator` 进行增量并平方操作

    ```java
    import java.util.function.UnaryOperator;

    public class UnaryOperatorExample {
        public static void main(String[] args) {
            // 定义 UnaryOperator，用于增量
            UnaryOperator<Integer> increment = n -> n + 1;

            // 定义 UnaryOperator，用于平方
            UnaryOperator<Integer> square = x -> x * x;

            // 将增量和平方操作链式组合
            UnaryOperator<Integer> incrementAndSquare = increment.andThen(square);

            // 使用 apply 方法进行增量后平方操作
            int result = incrementAndSquare.apply(1);
            System.out.println(result);  // 输出: 4
        }
    }
    ```

    - 描述：通过 `andThen()` 方法，首先对数值进行增量操作，再对结果进行平方操作。

# Streams

## 命令式&函数式编程

> 简述：命令式编程通过显式步骤和可变状态实现“如何做”；函数式编程则用表达式和组合操作描述“做了什么”。

**知识树**

1. 编程范式

    - 命令式（Imperative）：
        - 通过循环、条件和可变变量显式控制执行流程，聚焦“How”。
    - 声明式/函数式（Declarative/Functional）：
        - 用函数（Lambda）描述数据转换和过滤，不关心内部状态的变化，描述“What”。

2. `Stream` 流

    - 来源：集合、数组等调用创建方法
    - 概念：
        - 通过集合或数组等创建 Stream 流，即 Stream 接口的引用，流 表示一系列的元素
        - Stream 流的目的在于处理数据，而不是存储数据，这与集合不同，。
    - 方法示例：
        - `filter()`: 接收一个 `Predicate` 对象，让流中的每一个元素执行`Predicate` 对象中的 `test()`方法，筛选符合条件的元素。
        - `count()`: 统计 Stream 中当前的元素数量。

3. 示例引入

    - 创建 `Movie` 类，创建 `StreamsDemo` 类，通过数组 list 调用`stream()`方法创建 stream 对象，结合 `Stream` API 进行声明式编程，统计喜欢超过 10 个的电影个数。

**代码示例**

1. 统计喜欢超过 10 个的电影个数

    - 创建 `Movie` 类

        ```java
        public class Movie {

            private String title;
            private int likes;

            public Movie(String title, int likes) {
                this.title = title;
                this.likes = likes;
            }

            public int getLikes() {
                return likes;
            }
        }
        ```

    - 创建 `StreamsDemo` 类，使用命令式和声明式方式统计喜欢超过 10 个的电影数量

        ```java
        public class StreamsDemo {
            public static void show() {
                List<Movie> movies = List.of(
                        new Movie("a", 10),
                        new Movie("b", 15),
                        new Movie("c", 20)
                );

                // Imperative Programming
                int count = 0;
                for (var movie : movies)
                    if (movie.getLikes() > 10)
                        count++;

        		// Declarative (Functional) Programming
        		// 通过数组list调用`stream()`方法创建stream对象
        		var count1 = movies.stream()
        			.filter(movie -> movie.getLikes() > 10)
        			.count();
            }
        }
        ```

## Stream 的创建与操作

> 简述： Java 中的 Stream 提供了一种声明式的数据处理方式，允许通过流的方式对数据进行处理。Stream 支持从集合、数组及任意数量的对象创建流，并可以生成有限流或无限流。通过流操作，可以进行数据转换、过滤、映射等操作，并且支持惰性求值，这意味着流的元素只有在实际消费时才会被生成，从而提高性能。

**知识树**

1. 创建流

    - 集合方式
        - `.stream()`：集合对象的引用，调用`.stream()`方法，创建 Stream 对象。
    - 数组方式
        - `Arrays.stream()`：传入数组，创建 Stream 对象。
    - 任意对象创建
        - `Stream.of()`：传入任意类型、数量多对象，创建 Stream 对象。

2. 无限流

    - `Stream.generate()`
        - 传入一个 Supplier，并无限调用这个生产者，创建无限流，支持惰性加载。
    - `Stream.iterate()`
        - 传入初始值和一个操作单一值的函数，通过初始值和变换操作生成无限流。
    - 限制长度
        - 通过 `limit()` 方法限制生成的流的大小。

3. 中间&终端操作：

    - 中间操作（Intermediate）
        - 不改变源，返回新的流，调用时才执行返回结果（惰性）。
    - 终端操作（Terminal）
        - 触发执行并返回结果，在流的最后执行。其中一部份方法细分为 Reducer 类型。
    - 中间操作方法：
        - `map()`/`flatMap()`
        - `filter()`
        - `limit()`/`ship()`
        - `sorted()`
        - `distinct()`
        - `peek()`
    - 终端操作方法
        - `forEach()`
        - `count()`
        - `anyMatch(predicate)`
        - `allMatch(predicate)`
        - `noneMatch(predicate)`
        - `findFirst()`
        - `findAny()`
        - `max(comparator)`
        - `min(comparator)`
    - 将在后续章节依次介绍这些方法。

**代码示例**

1. 从集合创建流

    ```java
    // list.stream() 返回一个Stream对象
    var list = new ArrayList<>();
    list.stream();
    ```

    - 通过 `stream()` 方法从集合创建流。

2. 从数组创建流

    ```java
    //  Arrays.stream(numbers) 返回一个Stream对象
    int[] numbers = {1, 2, 3};
    Arrays.stream(numbers);
    ```

    - 使用 `Arrays.stream()` 方法从数组创建流。

3. 从任意数量的对象创建流

    ```java
    // 使用任意参数和对象创建 Stream对象
    Stream.of(1, 2, 3, false, numbers);
    ```

    - 通过 `Stream.of()` 方法从多个对象创建流。

4. `Stream.generate()` 生成无限流与限制

    ```java
    var streams = Stream.generate(() -> Math.random());

    // 无限流
    // streams.forEach(System.out::println);
    // 限制10次
    streams
    		.limit(10)
    		.forEach(System.out::println);
    ```

    - 使用 `Stream.generate()` 方法生成无限流，并使用 `limit()` 限制流的大小。

5. `Stream.iterate()` 生成无限流与限制

    ```java
        //无限流
        // Stream.iterate(1,n->n+1).forEach(System.out::println);
        // 限制10次
        Stream.iterate(1,n->n+1)
                .limit(10)
                .forEach(System.out::println);
    ```

    - 使用`Stream.iterate()` 方法生成无限流，并使用 `limit()` 限制流的大小。

## Map

> 简述：`map` 和 `flatMap` 常用于对集合元素进行转换和扁平化处理。`map` 用于将元素转换为另一种类型，而 `flatMap` 则用于将元素转换为多个元素并展平流中的嵌套结构。

**知识树**

1. `map` 方法

    - 作用：接收一个 `Function` 接口的引用，流中的每一个元素执行引用中的 `apply()` 方法。将流中的每个元素应用给定的函数，转换为另一个对象，返回一个新的流，元素类型是应用函数后的结果。

2. `flatMap` 方法

    - 用途：将流中的每个元素映射为多个元素，并将这些元素“扁平化”成一个单一的流。
    - 返回类型：返回一个扁平化的流，元素类型是从多个流中提取的元素。

3. 专用化版本

    `mapToInt`、`mapToDouble` 和 `mapToLong`

**代码示例**

1. 使用 `map` 方法将对象转换为属性值

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20)
            );

            movies.stream()
                    .map(movie -> movie.getTitle())
                    .forEach(System.out::println);
        }
    }
    ```

    - 描述：通过 `map` 方法，从电影对象的流中提取每个电影的标题，返回一个包含标题的字符串流。

2. 使用 `flatMap` 方法将嵌套的流展平

    ```java
    public class StreamsDemo {
        public static void show() {
            // 使用两个list创建stream
            var stream = Stream.of(List.of(1, 2, 3), List.of(4, 5, 6));
            // 将stream中的list转为流并返回，合成一个stream
            stream
                    .flatMap(list -> list.stream())
                    .forEach(System.out::println);
        }
    }
    ```

    - 描述：通过 `flatMap`，将包含多个列表的流展平为单一的整数流。

## Filter

> 简述：在 Java 中，Stream API 提供了流式处理数据的能力。filter 方法用于从流中筛选符合条件的元素

**知识树**

1. 过滤（filter 方法）

    - 作用：接收一个 Predicate 接口的引用，流中的每一个元素执行引用中的 test 方法，返回一个新的流，包含符合条件的元素。

**代码示例**

1. 筛选

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20)
            );

            movies.stream()
                    .filter(movie -> movie.getLikes() > 10)
                    .forEach(m -> System.out.println(m.getTitle()));
        }
    }
    ```

## Slicing

> 简述：常用的操作和切片流数据方法有四种， `limit`、`skip`、`takeWhile` 和 `dropWhile`，它们可以用于实现数据的分页、过滤和条件性处理。通过这些方法，我们能够精确地控制流中的元素处理。

**知识树**

1. `limit` 方法

    - 用途：限制流中的元素个数。
    - 使用场景：常用于获取流中的前 N 个元素。

2. `skip` 方法

    - 用途：跳过流中的前 N 个元素。
    - 使用场景：常用于数据分页，跳过已展示的数据。

3. 分页操作

    - 使用 `skip` 和 `limit` 配合能实现分页功能。
    - 例如，`skip(page-1 * pageSize)` 配合 `limit(pageSize)`。

4. `takeWhile` 方法

    - 用途：基于给定的条件（Predicate），连续获取流中的元素，直到条件不再满足。
    - 使用场景：常用于基于条件筛选流中前续元素。

5. `dropWhile` 方法

    - 用途：跳过流中连续满足条件的元素，直到条件不再满足。
    - 使用场景：常用于基于条件丢弃流中前续元素。

**代码示例**

1. 使用 方法

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // limit 截取前两个
            // movies.stream().limit(2).forEach(System.out::println);

            // skip 跳过前两个
            // movies.stream().skip(2).forEach(System.out::println);

            // takeWhile 不满足时停止，即使后续有元素满足条件也不会被筛选
            // movies.stream().takeWhile(movie -> movie.getLikes() < 20).forEach(System.out::println);

            // dropWhile 不满足时开始筛选，即使后续有元素满足条件也不会被筛选，即使后续有元素满足条件也会被筛选
            movies.stream().dropWhile(movie -> movie.getLikes() < 20).forEach(System.out::println);
        }
    }
    ```

## Sort

> 简述：`sorted`  是  `Stream`  的惰性中间操作，依据自然顺序或指定  `Comparator`  重新排列元素，返回有序新流且不改动源数据。

**知识树**

1. 自然顺序

    - 元素实现  `Comparable`  后，可直接  `stream.sorted()`。

2. 自定义顺序（`Comparator`）

    - `stream.sorted(Comparator)`  按比较器规则升序。
    - 匿名内部类创建比较器，例如：
        ```java
        .sorted(new Comparator<Movie>() {
        	@Override
        	public int compare(Movie a, Movie b) {
        		return a.getTitle().compareTo(b.getTitle());
        	}
        })
        ```
    - Lambda 表达式创建比较器。例如：
        ```java
        .sorted((a,b)->a.getTitle().compareTo(b.getTitle()))
        ```
    - 反序：`.reversed()`

3. 方法引用

    - comparing 方法
        - Comparator 中存在一个静态方法 comparing，它接收一个提取 key 的函数，然后返回一个按该字段排序的 Comparator。
    - 使用 comparing 简化 Lambda 表达式
        ```java
        .sorted(Comparator.comparing(Movie::getTitle))
        ```

4. 多级排序

    - 链式：`.thenComparing(...)`，实现主键‑次键排序

**代码示例**

1. 实现排序

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );



            // 自然排序方式，需要Movies类实现Comparable接口
            // movies.stream()
            //         .sorted()
            //         .forEach(System.out::println);

            // 传入比较器方式：匿名内部类
            // movies.stream()
            //         .sorted(new Comparator<Movie>() {
            //             @Override
            //             public int compare(Movie a, Movie b) {
            //                 return a.getTitle().compareTo(b.getTitle());
            //             }
            //         })
            //         .forEach(System.out::println);

            // 传入比较器方式：Lambda表达式方法引用
            movies.stream()
                    .sorted(Comparator.comparing(Movie::getTitle))
                    .forEach(System.out::println);
        }
    }
    ```

## Distinct

> 简述： `distinct()`，是 `Stream` 的中间操作，用于去除重复元素；它依据元素的  `equals`/`hashCode`  实现判断唯一性，最终得到不重复的数据序列。

**知识树**

1. 去重 `distinct()`

    - 基于对象的  `equals` / `hashCode`  判定；在无序流中常用，若元素很多应关注内存压力。
    - 位置：常置于所有映射后、终端操作前。

**代码示例**

1. 收集唯一喜欢数量的列表

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            movies.stream()
                    .map(Movie::getLikes)
                    .distinct()
                    .forEach(System.out::println);
        }
    }
    ```

## Peek

> 简述：`peek` 是 `Stream` 的中间操作，用于在流水线中窥视（打印、日志）元素，便于调试，不改变流本身。

**知识树**

1. 定义

    - `peek()` 是一个中间操作，接受一个 `Consumer` 对象，对流中的每个元素执行操作，并返回一个新流。它用于调试或查看元素，且不会修改流的内容或影响最终结果。

2. 应用场景

    - 调试流中数据、记录日志、性能监控。

3. 链式使用

    - 可与 `filter`、`map` 等中间操作无缝组合。

**代码示例**

1. 在管道中调试数据流

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            movies.stream()
                    .filter(m -> m.getLikes() > 10)
                    .peek(m -> System.out.println("filter+: " + m.getTitle()))
                    .map(Movie::getTitle)
                    .peek(title -> System.out.println("mapped: " + title))
                    .forEach(System.out::println);
        }
    }
    ```

    - `peek` 不改变元素，仅在终端操作前观察中间结果。

## Reducer

> 简述：`Reducer` 操作是 Stream API 中的终端操作，它将流中的元素归约为单个结果。这些操作通常用于聚合、查找、计数等功能，能够从一个数据流中提取特定的结果。`Reducer` 操作包括 `count`、`match`、`find`、`max`、`min` 等，都是通过特定的规则或条件对流进行处理并生成最终结果。

**知识树**

1. `count()`

    - 计算流中元素的数量。
    - 返回：`long` 类型。

2. `match` 操作

    - `anyMatch(Predicate)`：判断流中是否有任何元素满足给定条件。
    - `allMatch(Predicate)`：判断流中是否所有元素都满足给定条件。
    - `noneMatch(Predicate)`：判断流中是否没有任何元素满足给定条件。
    - 返回：布尔值。

3. `Optional` 类型

    - `Optional` 为`find` 操作中避免空指针异常使用，将在后续学习
    - `Optional`是容器类型，表示可能包含或不包含值
    - 使用 `get` 方获取容器中的值。

4. `find` 操作

    - `findFirst()`：返回流中的第一个元素。
    - `findAny()`：返回流中的任意元素。
    - 返回：`Optional<T>`。

5. `max` 和 `min` 操作

    - `max(Comparator)`：返回流中最大的元素。
    - `min(Comparator)`：返回流中最小的元素。
    - 返回：`Optional<T>`，其中 `T` 是流中元素的类型。

**代码示例**

1. 基本操作

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 计数
            var result1 = movies.stream()
                    .count();

            // match
            var result2 = movies.stream()
                    .allMatch(movie -> movie.getLikes() > 20);

            // find
            var result3 = movies.stream()
                    .findFirst()
                    .get();

            // max
            movies.stream()
                    .max(Comparator.comparing(Movie::getLikes))
                    .get();
        }
    }
    ```

## `Reduce`

> 简述：`reduce` 通过指定的二元运算符将流中的多个元素合并为一个结果，如求和、求最大值等。它是 Stream API 中的终端操作
> 补充：和 JS 的 `reduce()` 方法相似

**知识树**

1. `BinaryOperator`

    - 专门用于处理两个相同类型的输入参数并返回一个相同类型的结果，在 Lambda 章节已介绍

2. `reduce` 方法

    - `reuduce(binaryOperator)：
        - 直接提供计算方法
        - 返回类型：`Optional<T>`，因为流可能为空。
    - `reuduce(identity, binaryOperator)：`
        - 提供初始值和计算方法，这种情况，则即使流为空，也会返回该初始值
        - 返回类型：同初始值

3. `Optional` 类型

    - `Optional`是容器类型，表示可能包含或不包含值，如果流为空，`reduce` 返回一个空的 `Optional`。
    - 使用 `get` 方获取容器中的值。
    - 使用 `orElse` 方法提供默认值，避免空值错误。

**代码示例**

1. 基本归约操作（求和）

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 统计所有喜欢
            Optional<Integer> sum = movies.stream()
                    .map(movie -> movie.getLikes())
                    .reduce(Integer::sum); // 使用方法引用简化
                    // .reduce((a, b) -> a + b);

            System.out.println(sum.orElse(0));
        }
    }
    ```

    - 描述：使用 `map` 将每个电影的喜欢数提取出来，得到一个 `Integer` 类型的流。使用 `reduce` 对流中的数字进行累加。

2. 带有初始值的 `reduce` 操作

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 统计所有喜欢
            int sum = movies.stream()
                    .map(movie -> movie.getLikes())
                    .reduce(0, Integer::sum); // 使用方法引用简化
                     // .reduce((a, b) -> a + b);

            System.out.println(sum);
        }
    }
    ```

    - 描述：使用 `0` 作为初始值，流中的每个元素将与该初始值进行累加。因为使用了初始值，所以 `reduce` 直接返回一个 `int` 类型的结果。

## Collectors

> 简述：`Collectors` 提供了多种用于将流的元素收集到不同数据结构中的方法。通过 `collect` 方法，流中的元素可以被汇总到集合、映射、求和等常见数据结构中。

**知识树**

1. `collect()` 方法

    - `collect()` 是 Stream API 的终端操作，用于将流的元素收集到指定的数据结构中。它通过接收一个`Collector` 对象来完成操作。

2. `Collector` 类

    - `Collector` 接口与 `Stream`
        - `Collector` 接口有许多方法可以返回一个 `Collector` 对象，这些对象作为流的终端操作工具，用于将流的元素累积到某种数据结构或进行聚合操作。
    - 方法示例
        - `Collectors.toList()`：将流的元素收集到 `List` 中。
        - `Collectors.toSet()`：将流的元素收集到 `Set` 中。
        - `Collectors.toMap()`：将流的元素收集到 `Map` 中。
        - `Collectors.summingInt()`：对流中的整数进行求和。
        - `Collectors.summingDouble()`：对流中的小数进行求和。
        - `Collectors.averagingInt()`：计算流中整数的平均值。
        - `Collectors.joining()`：将流中的字符串连接起来。
        - `Collectors.summarizingInt()`：统计流中整数的最大值、最小值、总和、平均值等。

**代码示例**

1. 将流收集到 `List` 中

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 将流收集到 List/Set/Map 中
            var result = movies.stream()
                    .filter(movie -> movie.getLikes()>10)
                    .collect(Collectors.toList());
                    // .collect(Collectors.toSet());
                    //.collect(Collectors.toMap(Movie::getTitle, Movie::getLikes));

            System.out.println(result);
        }
    }
    ```

2. `Function.identity()` 补充

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 将流收集到 Map 中
            var result = movies.stream()
                    .filter(movie -> movie.getLikes() > 10)
                    .collect(Collectors.toMap(Movie::getTitle, Function.identity()));

            System.out.println(result);
        }
    }
    ```

    - 描述：这里`toMap()`的第二个参数为对象本身，`filter()`后流中为 `Movie` 对象，这里`Function.identity()`的意思是将每个 `Movie` 对象本身作为 `Map` 中的值

3. 求值/拼接

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10),
                    new Movie("b", 15),
                    new Movie("c", 20),
                    new Movie("d", 10)
            );

            // 求整数和/统计各个值
            var result1 = movies.stream()
                    .filter(movie -> movie.getLikes() > 10)
                    .collect(Collectors.summingInt(Movie::getLikes));
                    // .collect(Collectors.summarizingInt(Movie::getLikes));


            // 拼接
            var result2 = movies.stream()
                    .map(Movie::getTitle)
                    .collect(Collectors.joining("-"));
        }
    }
    ```

## Group

> 简述：`groupingBy`用于根据某个属性或条件对数据进行分组，它将流中的元素按照分组的条件分类，并将结果收集到一个 `Map` 中，键为分组依据，值为该分组中的元素集合。

**知识树**

1. `groupingBy` 方法

    - `groupingBy(Function<T, K>)`：
        - 按某一属性将流中的元素分组，返回一个 `Map<K, List<T>>`，其中 `K` 是分组的依据，`List<T>` 是每个分组中的元素。
    - `groupingBy(Function<T, K>, Collector<T, A, D>)`：
        - 除了分组外，还可以对每个分组中的元素进行汇总操作，如求和、计数等。使用第二个参数指定 `Collector`，可以对每个分组执行操作（如：`map()`、`count()`）。

2. 引入示例

    - 创建“类型”枚举类，并在 Movie 类中加入“类型”参数，使用 Stream 根据类型进行分组

**代码示例**

1. **按 `genre` 对电影进行分组**

    - 创建“类型”枚举类

        ```java
        public enum Genre {
            COMEDY,
            ACTION,
            THRILLER,
        }
        ```

    - Movie 中加入“类型”参数

        ```java
        package com.pang.streams;

        import java.io.Serializable;
        import java.util.Iterator;

        public class Movie{

            private String title;
            private int likes;
            private Genre genre;

            public Movie(String title, int likes, Genre genre) {
                this.title = title;
                this.likes = likes;
                this.genre = genre;
            }

            public Genre getGenre() {
                return genre;
            }
            public int getLikes() {
                return likes;
            }

            public String getTitle() {
                return title;
            }

            @Override
            public String toString() {
                return "Movie{" +
                        "title='" + title + '\'' +
                        ", likes=" + likes +
                        '}';
            }
        }
        ```

    - 根据类型进行分组

        ```java
        public class StreamsDemo {
          public static void show() {
        	  List<Movie> movies = List.of(
        			  new Movie("a", 10, Genre.THRILLER),
        			  new Movie("b", 15, Genre.ACTION),
        			  new Movie("c", 20, Genre.ACTION),
        			  new Movie("d", 10, Genre.COMEDY)
        	  );

        	  // 根据类型分组
        	  Map<Genre, List<Movie>> collect = movies.stream()
        			  .collect(Collectors.groupingBy(Movie::getGenre));


        	  // 根据类型分组，并对结果进行处理
        	  var collect2 = movies.stream()
        			  .collect(Collectors.groupingBy(
        					  Movie::getGenre,
        					  Collectors.mapping(
        							  Movie::getTitle,
        							  Collectors.joining(","))));

        	  System.out.println(collect2);
          }
        }
        ```

## Partition

> 简述：`partitioningBy`用于将流中的元素根据给定的条件（一个 `Predicate`）分为两个组，返回一个 `Map<Boolean, List<T>>`，其中键是布尔值，值是满足条件或不满足条件的元素集合。

**知识树**

1. `partitioningBy` 方法

    - `partitioningBy(Predicate<T>)`：
        - 基于给定的条件将流中的元素分为两个组，返回一个 `Map<Boolean, List<T>>`，其中 `true` 键对应满足条件的元素，`false` 键对应不满足条件的元素。
    - `partitioningBy(Predicate<T>, Collector<T, A, D>)`：
        - 除了分组外，还可以对每个分组中的元素进行汇总操作，如求和、计数等。使用第二个参数指定 `Collector`，可以对每个分组执行操作（如：`map()`、`count()`）。

**代码示例**

1. 按条件分区电影

    ```java
    public class StreamsDemo {
        public static void show() {
            List<Movie> movies = List.of(
                    new Movie("a", 10, Genre.THRILLER),
                    new Movie("b", 15, Genre.ACTION),
                    new Movie("c", 20, Genre.ACTION),
                    new Movie("d", 10, Genre.COMEDY)
            );


            // 按条件分区电影
            var result = movies.stream()
                    .collect(Collectors.partitioningBy(m -> m.getLikes() > 20));

            // 按条件分区电影，并对结果进行处理
            var result2 = movies.stream()
                    .collect(Collectors.groupingBy(
                            m -> m.getLikes() > 20,
                            Collectors.mapping(
                                    Movie::getTitle,
                                    Collectors.joining(","))));
        }
    }
    ```

    - 描述：使用 `partitioningBy` 根据电影喜欢数是否大于 10 进行分区

## 基本类型流

> 简述：Java 提供了针对基本数据类型的基本类型流（primitive type stream） ，这些流类型在处理原始类型数据时更加高效，并且提供了专属的操作方法，优化了流处理性能。

**知识树**

1. 专用流类型

    - 如 IntStream、LongStream 和 DoubleStream

2. 专用方法

    - `IntStream.range(int startInclusive, int endExclusive)`：
        - 创建一个从 `startInclusive` 到 `endExclusive`（不包括 `endExclusive`）的整数流。
    - `IntStream.rangeClosed(int startInclusive, int endInclusive)`：
        - 创建一个从 `startInclusive` 到 `endInclusive`（包括 `endInclusive`）的整数流。

**代码示例**

1. IntStream 创建流

    ```java
    public class StreamsDemo {
        public static void show() {
            // 使用of创建
            // IntStream.of(1, 2, 3, 4, 5).forEach(System.out::println);

            // range 创建（不含最后一位）-专用方法
            // IntStream.range(1, 10).forEach(System.out::println);//输出1-9

            // rangeClosed 创建（含最后一位）-专用方法
            IntStream.rangeClosed(1, 10).forEach(System.out::println);//输出1-10
        }
    }
    ```

# 并发多线程

## 进程&线程基础

> 简述：进程是操作系统分配和管理资源的最小单位，进程之间相互隔离；而线程是进程内的执行单元，线程之间共享资源。JVM 本质上是一个进程。本节主要介绍进程与线程的基本定义，并从 JVM 的角度理解二者的关系。

**知识树**

1.  进程 (Process):

    - 定义：
        - 进程是操作系统分配和管理资源的最小单位，代表正在内存中运行的程序实例。每个进程拥有独立的资源（如内存、文件句柄等）。——文件句柄是操作系统分配给已打开文件的唯一标识符。
    - 本质：
        - 进程不仅是程序执行的容器，还是操作系统资源管理和隔离的基本单元。操作系统通过进程调度实现多任务并发，确保有限硬件资源的最大化利用。
    - 举例：
        - 启动应用程序时，操作系统将其加载为一个进程，并为其分配独立的虚拟内存。多个进程可以并行执行，如同时播放音乐和运行杀毒软件。
    - 进程间通信
        - 由于资源隔离，进程之间不能直接共享内存。为实现进程间的通信，操作系统提供了进程间通信（IPC）机制。

2.  线程 (Thread):

    - 定义：
        - 线程是进程内部的执行单元，负责执行具体指令。每个进程至少包含一个线程，称为主线程。多个线程共享进程资源（如内存、文件句柄等）。
    - 本质：
        - 线程是操作系统调度的基本单位，多个线程在同一内存空间中并发执行任务，提供了高效的资源利用和程序响应能力。
    - 举例：
        - 线程就是执行任务的基本单位。一个 Web 服务器可以为每个客户端创建一个独立线程来并发处理请求。多线程应用程序通过同时执行多个任务提高效率。
    - 线程的资源共享
        - 线程共享进程的内存资源，使得线程间的通信比进程间通信更为高效。但也因此需要小心竞争条件和数据一致性问题。

3.  JVM 角度理解进程与线程

    - 进程：
        - 在 JVM 中，进程指的是运行 Java 程序的整体环境，JVM 本身也是一个进程。
    - 线程
        - 在 JVM 中，线程是执行代码的基本单元。JVM 为每个线程分配独立的栈空间，但多个线程共享堆内存和方法区，JVM 使用操作系统的线程调度机制来管理线程。

4.  堆、栈、方法区（补充）

    - 堆（Heap）
        - 存储对象实例（通过`new`创建）
    - 栈（Stack）
        - 存储基本类型变量、引用变量、方法调用栈帧
    - 方法区：
        - 属于所有线程共享的内存区域，存储类的元数据、常量池、静态变量等。
        - 元数据：
            - 描述类结构的信息，包括类的定义、方法、字段、注解、父类、接口等。这些信息帮助 JVM 在运行时加载和操作类。
        - 常量池
            - 存储类常量和符号引用的区域，主要用于提高性能，减少内存使用。
            - 字面量常量：如字符串常量（例如 "Hello"）、数值常量（例如 100）、布尔常量（例如 true 或 false）。
            - 符号引用：例如类名、字段名、方法名等，在类加载时会解析为实际的内存地址。

5.  `Thread.activeCount()`

    - 作用：返回当前活动线程的数量。

6.  `Runtime.getRuntime().availableProcessors()`

    - 作用：返回当前机器的可用处理器核心数。

**代码示例**

1.  查看当前活动线程数和可用处理器核心数

    ```java
    public class Main {
        public static void main(String[] args) {
            System.out.println(Thread.activeCount());
            System.out.println(Runtime.getRuntime().availableProcessors());
        }
    }
    ```

    - 描述：显示有 2 个线程正在使用，一个是 Main 主线程，一个是垃圾回收线程，可用线程随机器不同所有所不同

## 创建&开启线程

> 简述：Java 中的多线程编程通过 `Thread` 类和 `Runnable` 接口来实现。`Thread` 类提供了多种构造器用于创建线程，`Runnable` 接口则通过实现任务的方式让线程执行具体操作。

**知识树**

1. Thread 类

    - `Thread` 类是 Java 中用于创建和控制线程的主要类。它可以直接继承并重写其 `run()` 方法，或者传入一个实现了 `Runnable` 接口的对象作为参数，然后在内部的 `run()` 方法中调用该对象的 `run()` 方法。

2. Thread 构造器

    - `Thread()` 构造器：
        - 创建一个新的线程对象，但不指定线程执行的任务。
    - `Thread(Runnable target)` 构造器：
        - 创建一个新的线程对象，并指定一个 `Runnable` 对象来定义线程执行的任务。
    - `Thread(String name)` 构造器：
        - 创建一个新的线程对象，并指定线程的名称。
    - `Thread(Runnable target, String name)` 构造器：
        - 创建一个新的线程对象，并指定线程执行的任务（通过 `Runnable` 对象），同时指定线程名称。
    - 其他构造器：如带有“指定线程组”参数的构造器等。

3. Runnable 接口

    - `Runnable` 是一个函数式接口，其 `run()` 方法定义了线程执行的具体任务。通过实现 `Runnable` 接口可以将任务与线程分离。**本节以该方式为主**。

4. 创建与启动线程：

    - 通过传入 `Runnable` 对象来创建线程：可以通过实现 `Runnable` 接口（包括匿名内部类或 Lambda 表达式），并将其传递给 `Thread` 构造器。然后调用 `Thread` 对象的 `start()` 方法来启动线程，`start()` 方法会调用 `Thread` 类的 `run()` 方法，进而调用 `Runnable` 对象的 `run()` 方法。

    - 创建自定义类继承 `Thread` 类并重写 `run()` 方法：通过继承 `Thread` 类并重写 `run()` 方法，实例化自定义类对象并调用 `start()` 方法启动线程，`start()` 方法会调用重写的 `run()` 方法。

5. 多线程

    - 线程之间是并发执行的，不保证执行顺序，操作系统调度决定了各个线程的执行时机和切换。

**代码示例**

1. 实现 `Runnable` 接口创建线程（本节以该方式为主）

    - 创建 `DownloadFileTask` 类实现 `Runnable` 接口：

        ```java
        public class DownloadFileTask implements Runnable {
            @Override
            public void run() {
                System.out.println("Download a file" + Thread.currentThread().getName());
            }
        }
        ```

    - 创建线程并启动：

        ```java
        public class Main {
            public static void main(String[] args) {
                System.out.println(Thread.currentThread().getName());

        		Thread thread = new Thread(new DownloadFileTask());
        		thread.start();
            }
        }
        ```

        - 描述：程序输出两个线程名称，一个是 `main` 主线程，一个是由 `DownloadFileTask` 创建的子线程（如 `Thread-0`）。

2. Lambda 表达式创建（`Runnable`）

    ```java
    public class Main {
    	public static void main(String[] args) {
    		System.out.println(Thread.currentThread().getName());
    		Thread thread = new Thread(
    				() -> System.out.println(
    						"Download a file" + Thread.currentThread().getName()));
    		thread.start();
    	}
    }
    ```

3. 多线程

    ```java
    public class Main {
        public static void main(String[] args) {
            System.out.println(Thread.currentThread().getName());
            for (int i = 0; i < 10; i++) {
                Thread thread = new Thread(() -> System.out.println("Download a file" + Thread.currentThread().getName()));
                thread.start();
            }
        }
    }
    ```

    - 描述：通过 `for` 循环创建 10 个线程，并发执行。每个线程输出下载文件的操作，体现了多线程并发执行的特点。

4. 自定义类继承 Thread 创建线程

    - 创建自定义类

        ```java
        public class MyThread extends Thread {
            @Override
            public void run() {
                System.out.println("MyThread.run"+Thread.currentThread().getName());
            }
        }
        ```

    - 使用自定义类创建线程

        ```java
        public class Main {
            public static void main(String[] args) {
                System.out.println(Thread.currentThread().getName());

                for (int i = 0; i < 10; i++) {
                    MyThread myThread = new MyThread();
                    myThread.start();
                }
            }
        }
        ```

## 暂停线程

> 简述：Java 提供了`Thread.sleep()`方法来使当前线程暂停执行，用于模拟长时间运行的操作（如下载文件）。通过暂停线程，操作系统可以将 CPU 资源分配给其他线程。

**知识树**

1. `Thread.sleep()` 方法：

    - `Thread.sleep()` 方法可以使当前线程暂停指定的时间，这在模拟长时间任务或延迟执行时非常有用。
    - 调用时可能会抛出 `InterruptedException`，若当前线程被中断则会抛出该异常，需要使用 try/catch 捕捉
    - 线程休眠期间，操作系统将允许其他线程使用 CPU 时间。

2. 线程调度：

    - Java 虚拟机的线程调度器负责决定哪些线程在什么时间运行。如果任务数多于可用的线程，调度器会为每个任务分配 CPU 时间片，从而模拟并行执行，尽管这些任务实际上是在不同的时间依次执行的。

**代码示例**

1. 使用 `Thread.sleep()` 模拟下载任务

    - `DownloadFileTask` 中修改 `run()` 方法，加入 `sleep()`

        ```java
        public class DownloadFileTask implements Runnable {
            @Override
            public void run() {
                System.out.println("Download a file" + Thread.currentThread().getName());
                try {
                    // 模拟下载花费5秒
                    Thread.sleep(5000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Download completed" + Thread.currentThread().getName());
            }
        }
        ```

    - Main 中启用线程

        ```java
        public class Main {
            public static void main(String[] args) {
                for (int i = 0; i < 10; i++) {
                    Thread thread = new Thread(new DownloadFileTask());
                    thread.start();
                }
            }
        }
        ```

2. Lambda 表达式方式

    ```java
    public class Main {
        public static void main(String[] args) {
            for (int i = 0; i < 10; i++) {
                Thread thread = new Thread(() ->
                {
                    System.out.println("Download a file" + Thread.currentThread().getName());
                    try {
                        Thread.sleep(5000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println("Download completed" + Thread.currentThread().getName());
                });
                thread.start();
            }
        }
    }
    ```

    - 描述：启动后线程并发执行，并在 5 秒后几乎一同执行完。

## Join 方法

> 简述：通过使用 `Thread.join()` 方法，可以使当前线程等待另一个线程完成任务。假设有两个线程 `ThreadA` 和 `ThreadB`，其中 `ThreadA` 调用了 `ThreadB.join()`，那么 `ThreadA` 会等待 `ThreadB` 完成执行后，才会继续执行。

**知识树**

1. `Thread.join()` 方法：

    - `join()` 方法使当前线程等待另一个线程完成后再继续执行。它会阻塞当前线程，直到被调用的线程执行完毕。
    - `join()` 会抛出 `InterruptedException`，需要捕获并处理。

2. 线程同步问题：

    - 使用 `join()` 方法时，当前线程会被阻塞，这意味着它无法执行其他操作，直到目标线程完成。这在某些应用中（如 UI 应用）可能导致界面冻结。稍后介绍解决方案。

**代码示例**

1. 下载结束后使用 `join()` 方法插入检查操作

    - `DownloadFileTask` 中修改 `run()` 方法

        ```java
        public class DownloadFileTask implements Runnable {
          @Override
          public void run() {
              System.out.println("Download a music" + Thread.currentThread().getName());
              try {
                  // 模拟下载时间
                  Thread.sleep(3000);
              } catch (InterruptedException e) {
                  throw new RuntimeException(e);
              }
              System.out.println("Download completed" + Thread.currentThread().getName());

              // 创建线程2：下载后进行检查
              Thread checkThread = new Thread(() -> {
                  System.out.println("Checking " + Thread.currentThread().getName());
                  try {
                      // 模拟检查时间
                      Thread.sleep(3000);
                  } catch (InterruptedException e) {
                      e.printStackTrace();
                  }
                  System.out.println("Checked " + Thread.currentThread().getName());
              });

              // 启动检查线程
              checkThread.start();

              try {
                  // 等待检查线程完成，确保下载后进行检查
                  checkThread.join();
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }

              // 检查完成后播放音乐
              System.out.println("Playing " + Thread.currentThread().getName());
          }
        }
        ```

    - Main 中启用线程

        ```java
        public class Main {
          public static void main(String[] args) {
              Thread thread = new Thread(new DownloadFileTask());
              thread.start();
          }
        }
        ```

        - 描述：线程 1 为下载后自动播放音乐，线程 2 在下载完成后创建并阻塞线程 1，执行完检查操作后，线程 1 继续执行。

2. Lambda 表达式方式

    ```java
    public class Main {
        public static void main(String[] args) {

            // 创建线程1：下载并自动播放音乐
            Thread thread = new Thread(() -> {
                System.out.println("Download a music" + Thread.currentThread().getName());
                try {
                    // 模拟下载时间
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Download completed" + Thread.currentThread().getName());

                // 创建线程2：下载后进行检查
                Thread checkThread = new Thread(() -> {
                    System.out.println("Checking " + Thread.currentThread().getName());
                    try {
                        // 模拟检查时间
                        Thread.sleep(3000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println("Checked " + Thread.currentThread().getName());
                });

                // 启动检查线程
                checkThread.start();

                try {
                    // 等待检查线程完成，确保下载后进行检查
                    checkThread.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                // 检查完成后播放音乐
                System.out.println("Playing " + Thread.currentThread().getName());
            });

            thread.start();
        }
    }
    ```

## Interrupt 方法

> 简述：在多线程编程中，有时需要提供取消任务的能力，尤其是在处理长时间运行的任务时。通过 `Thread.interrupt()` 方法，主线程可以请求子线程中断其执行，但中断并不会立即强制终止线程的操作。子线程需要定期检查中断标志，并根据需要响应该请求。

**知识树**

1. `Thread.interrupt()` 方法：

    - `interrupt()` 方法用于向线程发送中断请求。调用该方法后，线程并不会立刻停止执行，而是设置一个中断标志，线程需要定期检查该标志并作出相应的处理。
    - 中断请求对正在执行的线程没有直接的停止作用，它仅通知线程是否应该中止当前操作。

2. 响应中断请求：

    - 线程必须定期检查是否接收到中断请求，常通过 `Thread.currentThread().isInterrupted()` 方法来判断。
    - 如果线程正在执行一个循环任务，可以在每次循环中检查中断标志，并在收到中断请求时终止循环或退出任务。

3. 中断与异常处理：

    - 如果线程正在执行 `sleep()`、`wait()` 或 `join()` 等阻塞操作，调用 `interrupt()` 方法会抛出 `InterruptedException`。
    - 需要在这些操作的代码块中捕获并处理 `InterruptedException`，确保线程能够响应中断请求，及时退出。

**代码示例**

1.  使用 `Thread.interrupt()` 请求中断下载任务

    - `DownloadFileTask` 中修改 `run()` 方法

        ```java
        public class DownloadFileTask implements Runnable {
            @Override
            public void run() {
                System.out.println("Download a music" + Thread.currentThread().getName());
                for (int i = 0; i < Integer.MAX_VALUE; i++) {
                    // 监控 打断标志 的状态
                    if(Thread.interrupted()) return;

                    System.out.println("Downloading byte " + i);
                }
                System.out.println("Download completed" + Thread.currentThread().getName());
            }
        }
        ```

    - Main 中启用线程

        ```java
        public class Main {
            public static void main(String[] args) {
                Thread thread = new Thread(new DownloadFileTask());
                thread.start();

                // 假设开始下载1秒后取消下载
                try {
                    // 主线程休眠
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }

                // 发送打断请求，非强制停止
                thread.interrupt();
            }
        }
        ```

2.  Lambda 表达式方式

    ```java
    public class Main {
        public static void main(String[] args) {
            // 创建线程：下载文件
            Thread thread = new Thread(() -> {
                System.out.println("Download a music" + Thread.currentThread().getName());

                for (int i = 0; i < Integer.MAX_VALUE; i++) {

                    // 监控 打断标志 的状态
                    if(Thread.interrupted()) return;

                    System.out.println("Downloading byte " + i);
                }

                System.out.println("Download completed" + Thread.currentThread().getName());
            });

            thread.start();

            // 假设开始下载1秒后取消下载
            try {
                // 主线程休眠
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            // 发送打断请求，非强制停止
            thread.interrupt();
        }
    }
    ```

## 并发问题

> 简述：在并发编程中，多个线程共享资源时，可能会出现一些问题，主要包括竞态条件和可见性问题。竞态条件发生在多个线程竞争修改共享数据时，可能导致错误结果或应用崩溃。可见性问题则是在某个线程对共享数据进行修改时，其他线程无法及时看到这些修改，导致它们对数据的视图不一致。

**知识树**

1. 竞态条件

    - 多个线程同时访问共享资源时，若没有适当的同步机制，可能导致数据不一致或程序崩溃。
    - 示例：多个线程同时修改一个共享变量，无法预测最终的结果。

2. 可见性问题

    - 一个线程修改了共享数据，但其他线程未能及时看到该修改，导致不同线程对数据的视图不一致。
    - 示例：比如线程 1 读取了一个值 X，如果线程 2 修改了这个值，线程 1 并不能感知到，因为它将这个值读取到了自己的缓存中，线程 1 并不会持续尝试读取这个值。

3. 线程安全

    - 线程安全指多个线程可以并发执行代码而不会导致数据不一致或程序崩溃。

## 竞态条件

> 简述：多个线程同时访问共享资源时，若没有适当的同步机制，可能导致数据不一致或程序崩溃。

**知识树**

1. `++`操作

    - `++` 操作符是一个非原子操作。虽然语法上是简单的递增运算，实际上它由三个步骤组成：读取当前值、递增、将新值写回内存。由于多个线程可能同时执行这些步骤，导致数据不一致。

2. 原子操作

    - 原子操作是指不可分解的操作，所有步骤在执行过程中不可中断。原子操作确保了在多线程环境中，线程之间不会出现数据冲突或不一致的问题。

3. 示例引入

    - 背景：在多线程环境下，没有适当的同步机制时，多个线程同时修改共享变量可能会导致数据错误。通过演示 totalBytes++ 这个非原子操作，我们可以清楚地看到并发下的数据修改错误。
    - `totalBytes++`：在示例中，`totalBytes++` 看似只有一行代码，但实际上它包含了三个步骤。首先，字段的值会从主内存读取并加载到 CPU 中。接着，CPU 对这个值进行递增，最后，更新后的值被写回到内存。由于这个操作涉及多个步骤，因此我们将其称为非原子操作。

**代码示例**

1.  创建用于统计的状态类

    ```java
    public class DownloadStatus {
    	private int totalBytes;

    	public int getTotalBytes() {
    		return totalBytes;
    	}

    	public void increaseTotalBytes() {
    		totalBytes++;
    	}
    }
    ```

2.  `DownloadFileTask` 中修改 `run()` 方法，假设美国文字 10_000 字节，最后需要统计总字节数量

    ```java
    public class DownloadFileTask implements Runnable {
        private DownloadStatus status;

        public DownloadFileTask(DownloadStatus status) {
            this.status = status;
        }

        @Override
        public void run() {
                System.out.println("Downloading a file: " + Thread.currentThread().getName());

                for (int j = 0; j < 10_000; j++) {
                    if (Thread.currentThread().isInterrupted()) return;
                    // System.out.println("Downloading byte " + j);
                    status.increaseTotalBytes();
                }

                System.out.println("Download complete: "+Thread.currentThread().getName());
        }
    }
    ```

    - 补充：是否每次都输出当前 j 的值，会对结果产生较大影响，因为 `System.out.println()` 是一个相对较慢的操作。如果不进行输出，程序的执行效率会更高，竞争会更激烈，因此在没有适当的安全处理的情况下，程序更容易出错。

3.  创建 ThreadDemo，与 `show` 方法，就像前面几节一样，`Main` 中调用`ThreadDemo.show()`

    ```java
    public class ThreadDemo {
        public static void show() {
            var status = new DownloadStatus();
            List<Thread> threads = new ArrayList<>();

            for (int i = 0; i < 10; i++) {
                var thread = new Thread(new DownloadFileTask(status));
                thread.start();
                threads.add(thread);
            }

            for (var thread : threads) {
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }

            System.out.println(status.getTotalBytes());
        }
    }
    ```

    - 描述：设置初始状态为 0，使用 10 线程，每个线程并发执行，给初始状态增加 1，次数一万次，统计线程 10 个线程执行结束后，最后的状态值是多少，往往不是期望的 100_000

4.  Lambda 表达式方式

    ```java
    public class ThreadDemo {
    	public static void show() {
    		var status = new DownloadStatus();

    		List<Thread> threads = new ArrayList<>();

    		for (int i = 0; i < 10; i++) {
    			var thread = new Thread(() -> {
    				System.out.println("Downloading a file: " + Thread.currentThread().getName());

    				for (int j = 0; j < 10_000; j++) {
    					if (Thread.currentThread().isInterrupted()) return;
    					// System.out.println("Downloading byte " + j);
    					status.increaseTotalBytes();
    				}

    				System.out.println("Download complete: "+Thread.currentThread().getName());
    			});
    			thread.start();
    			threads.add(thread);
    		}

    		for (var thread : threads) {
    			try {
    				thread.join();
    			} catch (InterruptedException e) {
    				throw new RuntimeException(e);
    			}
    		}

    		System.out.println(status.getTotalBytes());
    	}
    }
    ```

## 线程安全策略

> 简述：在并发编程中，线程安全是指程序能够正确地在多个线程之间并发执行，而不会导致数据不一致或程序崩溃。有几种常见的编写线程安全代码的策略。每种策略有其适用场景和优缺点。

**知识树**

1. 数据隔离（Confinement）

    - 定义：避免线程间共享数据。每个线程都有独立的数据，线程之间不直接访问共享资源。通过将每个线程的工作数据封闭在其内部，可以确保线程安全。
    - 应用：例如，避免将下载状态对象在多个下载任务中共享，每个任务持有自己的下载状态对象，最后将结果合并。这样可以避免竞争条件和可见性问题。

2. 不可变对象（Immutable Objects）

    - 定义：不可变对象指的是其数据在创建后不能修改的对象。不可变对象天生是线程安全的，因为它们的状态在对象创建之后不可更改。
    - 示例：Java 中的 `String` 类是不可变的。比如调用 `toUpperCase()` 方法不会改变原字符串，而是返回一个新的字符串对象。线程可以共享不可变对象而无需担心数据竞争。

3. 同步（Synchronization）

    - 定义：通过使用锁机制，确保同一时刻只有一个线程可以访问共享资源。同步可以防止数据的并发修改，但它会使程序的执行变得顺序化，降低并发性能。
    - 缺点：同步会强制线程按顺序执行，限制了并发性，且可能导致死锁（即两个线程互相等待对方释放资源，导致程序无法继续执行）。因此，同步的使用需要谨慎。
    - 策略：**尽量减少同步的使用**，避免锁的粒度过大或过小，设计合理的同步方案。

4. 原子类（Atomic Classes）

    - 定义：原子类提供了无需使用显式锁机制的线程安全操作。这些类通过原子操作（如 `AtomicInteger`）确保操作的不可分割性。
    - 优点：不使用锁，性能较高，适用于简单的计数、标志等操作。

5. 数据分区（Partitioning）

    - 定义：数据分区是将大规模数据拆分成多个独立的段，每个线程只能操作其中一个段，从而减少线程间的竞争。
    - 应用：Java 提供了一些并发集合类（如 `ConcurrentHashMap`），它通过分区实现多个线程并发访问集合中的不同部分，而不需要全局锁定。

## 数据隔离

> 简述：数据隔离（Confinement）是通过将每个线程的工作数据独立开来，避免多个线程共享数据，从而减少竞态条件的风险。每个线程拥有自己的数据副本，确保线程间互不干扰。这种方式简单而有效，尤其适用于不需要共享数据的任务。

**知识树**

1. 概念

    - 定义：数据隔离是指通过将每个线程的工作数据封闭在该线程内，避免多个线程间共享资源。每个线程在执行任务时，使用自己的数据副本，减少竞争条件和数据冲突的发生。
    - 优点：无需复杂的同步机制，能够显著简化并发编程的复杂度，提升性能。

**代码示例**

1. 修改 `DownloadFileTask`，每个下载线程的状态独立

    ```java
    public class DownloadFileTask implements Runnable {
        private DownloadStatus status;

        public DownloadFileTask() {
            this.status = new DownloadStatus();
        }

        @Override
        public void run() {
            System.out.println("Downloading a file: " + Thread.currentThread().getName());

            for (int j = 0; j < 10_000; j++) {
                if (Thread.currentThread().isInterrupted()) return;
                // System.out.println("Downloading byte " + j);
                status.increaseTotalBytes();
            }

            System.out.println("Download complete: " + Thread.currentThread().getName());
        }

        public DownloadStatus getStatus() {
            return status;
        }
    }
    ```

    - 描述：每个 `DownloadFileTask` 都持有独立的 `DownloadStatus` 对象，而不再共享全局的状态对象。这确保了每个线程有自己的数据副本，避免了竞态条件。

2. 将每个下载的状态分离后汇总

    ```java
    public class ThreadDemo {
        public static void show() {
            List<Thread> threads = new ArrayList<>();
            List<DownloadFileTask> tasks = new ArrayList<>();

            for (int i = 0; i < 10; i++) {
                var task = new DownloadFileTask();
                tasks.add(task);

                var thread = new Thread(task);
                thread.start();
                threads.add(thread);
            }

            for (var thread : threads) {
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }

            var totalBytes = tasks.stream()
                    .map(t -> t.getStatus().getTotalBytes())
                    .reduce(Integer::sum);

            System.out.println(totalBytes);
        }
    }
    ```

## Locks

> 简述：通过使用锁（Lock），可以确保在同一时刻只有一个线程能够安全地访问共享资源。锁机制用于保护临界区，保证对共享资源的访问是互斥的，从而避免多个线程同时修改数据而导致的不一致性。临界区是指访问共享资源的代码块，需要通过锁机制来控制并发访问。

**知识树**

1.  锁（Lock）

    - 定义：锁是一种**同步机制**，它允许一个线程独占性地访问共享资源，阻止其他线程的并发访问。Java 提供了多种锁实现，`ReentrantLock` 是一种常用的实现，它支持更灵活的锁控制。
    - 实现：
        - 通过 `lock()` 方法获取锁，进入临界区；
        - 通过 `unlock()` 方法释放锁，允许其他线程尝试获取。
        - 使用锁可以确保在 `lock()` 和 `unlock()` 之间的代码块（即临界区）在同一时刻只有一个线程执行，从而避免竞争条件。
    - 注意事项：锁的使用必须小心，尤其要避免死锁和保证锁在异常发生时能够被释放。

2.  临界区 (Critical Section)

    - 概念：指的是一段访问共享资源的代码。在多线程环境下，如果不加以保护，并发执行的临界区代码可能导致数据不一致或其他并发问题。临界区是需要被同步机制（如锁）保护的对象。

3.  最佳实践：`try-finally` 块

    - 为了确保即使在临界区代码执行过程中发生异常，锁也能被正确释放，推荐将临界区代码放在 `try` 块中，并在对应的 `finally` 块中调用 `unlock()` 方法。这可以保证锁在任何情况下都能够被解锁，从而避免死锁。

**代码示例**

1.  将代码回退至 竞态条件 一节
2.  使用 `ReentrantLock` 保护共享状态，并重写运行

    ```java
    public class DownloadStatus {
        private int totalBytes;
        private Lock lock = new ReentrantLock();

        public int getTotalBytes() {
            return totalBytes;
        }

        public void increaseTotalBytes() {
            lock.lock();
            try {
                totalBytes++;
            } finally {
                lock.unlock();
            }
        }
    }
    ```

    - 描述：在 `DownloadStatus` 类中引入 `ReentrantLock`。`increaseTotalBytes` 方法在修改 `totalBytes` 前获取锁，并在 `finally` 块中释放锁，确保了对 `totalBytes` 的递增操作同一时间只有一个线程在进行（线程串行）。

## Synchronized

> 简述：`synchronized` 是 Java 内建的**同步机制**，它通过获取和释放对象内置的监视器锁来保证代码块或方法的原子性访问，是比 `Lock` 接口更简洁的同步实现方式。

**知识树**

1. 内建锁

    - Java 中的每个对象都有一个内建的锁。

2. `synchronized` 关键字:

    - 定义：Java 语言层面提供的用于实现线程同步的关键字，依赖于对象内部的锁（称为监视器或 monitor lock）。
    - 作用：
        - 内存可见性：当一个线程对共享变量进行修改时，所有其他线程都能及时看到这个修改。
        - 原子性和互斥性：同一个时刻只有一个线程可以执行被 `synchronized` 修饰的代码块。
    - 方式：进入 `synchronized` 区域时自动获取监视器锁，退出时自动释放。

3. `synchronized` 语法

    - 语法：`synchronized(monitorObject) { /* 临界区代码 */ }`：
        - 需要显式指定一个对象作为监视器（锁定的目标）。灵活性高，可以精确控制同步范围。
    - 语法：`public synchronized void methodName() { /* 方法体 */ }`：
        - 隐式使用当前实例对象 (`this`) 作为监视器锁。对于静态同步方法，则使用类对象 (`ClassName.class`) 作为锁。写法简洁，但锁定了整个方法。

4. 使用 `this` 作为锁的风险:

    - 问题：当一个类中有多个 `synchronized` 方法或显式使用 `synchronized(this)` 的代码块时，它们会竞争同一个对象的锁。
    - 影响：一个线程持有该锁执行任一同步区域时，会阻止其他线程进入该对象上任何其他由 `this` 锁保护的同步区域，即使这些区域操作的是完全不相关的数据（如 `totalBytes` 和 `totalFiles`），这会造成不必要的阻塞，显著降低并发性能和吞吐量。

5. 推荐实践：专用监视器对象 (Dedicated Monitor Objects):

    - 方法：为不同的、需要独立保护的共享资源或逻辑单元，分别创建独立的、`private final` 的 `Object` 实例作为锁。可以实现更细粒度的锁定。只锁定必要的代码段和相关的资源，减少锁冲突。
    - 约定：使用 `Object` 类型作为专用锁对象是常见约定，因为它简单且无业务含义，仅用于提供锁机制。

6. 缺点与建议:
    - 缺点：
        - 性能：强制串行执行，降低并发度；可能引入锁竞争和上下文切换开销。
        - 死锁：不当使用可能导致死锁。
        - 调试困难：并发问题通常难以复现和修复。
    - 建议：**避免在新的代码中使用同步（包括 `synchronized` 和 `Lock`）**，除非绝对必要。理解 `synchronized` 主要是为了维护使用了该技术的旧代码库。

**代码示例**

1.  将代码回退至 竞态条件 一节
2.  同步方法 (隐式使用 `this` 作为锁)

    ```java
    public class DownloadStatus {
        private int totalBytes;
        private int totalFiles;

        public int getTotalBytes() {
            return totalBytes;
        }
        // 这个方法隐式地锁在 'this' 对象上
        public synchronized void increaseTotalBytes() {
                totalBytes++;
        }

        // 这个方法也隐式地锁在同一个 'this' 对象上
        public synchronized void incrementTotalFiles() {
            totalFiles++;
        }
    }
    ```

    - 描述：`increaseTotalBytes` 和 `incrementTotalFiles` 两个方法都使用了 `synchronized` 修饰，它们共享当前 `DownloadStatus` 实例 (`this`) 的锁。这意味着，如果一个线程正在执行 `increaseTotalBytes`，那么另一个线程不仅不能同时执行 `increaseTotalBytes`，也不能执行 `incrementTotalFiles`，反之亦然。即使这两个操作是逻辑独立的，它们也会互相阻塞，降低了并发性。

3.  同步代码块与专用监视器 (推荐方式 - 更优的并发性)

    ```java
    public class DownloadStatus {
        private int totalBytes;
        private int totalFiles;

        // 1. 为不同的共享数据创建独立的、final的锁对象
        private final Object totalBytesLock = new Object();
        private final Object totalFilesLock = new Object();

        public int getTotalBytes() {
            return totalBytes;
        }

        // 2. 使用锁对象保护 totalBytes
        public void increaseTotalBytes() {
            synchronized (totalBytesLock) {
                totalBytes++;
            }
        }

        // 3. 使用不同的锁对象保护 totalFiles
        public synchronized void incrementTotalFiles() {
            synchronized (totalFilesLock) {
                totalFiles++;
            }
        }
    }
    ```

    - 描述：通过为 `totalBytes` 和 `totalFiles` 分别创建 `totalBytesLock` 和 `totalFilesLock` 两个独立的 `Object` 实例作为锁。`increaseTotalBytes` 方法仅在 `totalBytesLock` 上同步，而 `incrementTotalFiles` 方法仅在 `totalFilesLock` 上同步。这样，不同的线程可以同时执行这两个方法（一个增加字节数，一个增加文件数），因为它们获取的是不同的锁，从而实现了更细粒度的控制，提高了程序的并发性能。

## Volatile

> 简述：`volatile` 是 Java 提供的一种轻量级变量同步机制，用于确保共享变量的修改对所有线程立即可见，从而解决内存可见性问题。但请注意，`volatile` 不保证复合操作的原子性（不能解决竞态条件）

**知识树**

1. 可见性问题

    - 定义：由于 Java 内存模型 (JMM) 允许线程将共享变量缓存到本地工作内存（如 CPU 缓存），一个线程对变量的修改可能无法及时反映到主内存，同时其他线程也可能未能及时从主内存更新该变量的值，导致不同线程读取到过时（stale）的数据。
    - 示例：比如线程 1 读取了一个值 X，如果线程 2 修改了这个值，线程 1 并不能感知到，因为它将这个值读取到了自己的缓存中，线程 1 并不会持续尝试读取这个值。

2. `volatile` 关键字

    - 定义：
        - 用于修饰共享的成员变量或静态成员变量。，解决多线程环境下的可见性问题。
    - 写操作（写屏障 Write Barrier）：
        - 强制将对 `volatile` 变量的写入操作立即刷新回主内存。
    - 读操作（读屏障 Read Barrier）：
        - 强制在读取 `volatile` 变量时，使当前处理器缓存无效，并必须从主内存重新加载最新值。
    - 效果：
        - 通过内存屏障技术，确保了 `volatile` 变量在多线程间的立即可见性。

3. 局限性：不保证原子性 (Does Not Guarantee Atomicity):

    - `volatile` 仅保证对变量的单次读或单次写的操作具有可见性。
    - 不保证复合操作（例如 `count++`，它至少包含“读取当前值”、“增加值”、“写回新值”三个步骤）的原子性。在多线程环境下，这些步骤之间可能被其他线程中断并修改变量值，导致竞态条件（Race Condition）和最终结果错误。

4. 补充

    - 由于 `synchronize` 关键字支持当一个线程对共享变量进行修改时，所有其他线程都能及时看到这个修改，在修改和读取 isDone 的 set、get 方法中加上该关键字也能解决代码示例中的问题，但是不推荐在新代码中使用 `synchronize`

**代码示例**

1. 可见性问题示例

    - `DownloadStatus` 类 (包含非 `volatile` 的 `isDone` 标志)

        ```java
        public class DownloadStatus {
            private  boolean isDone;
            private int totalBytes;
            private final Object totalBytesLock = new Object();

            public int getTotalBytes() {
                return totalBytes;
            }

            public void increaseTotalBytes() {
                synchronized (totalBytesLock) {
                    totalBytes++;
                }
            }

            public boolean isDone() {
                return isDone;
            }

            public void done() {
                isDone = true;
            }
        }
        ```

    - `DownloadFileTask` (模拟下载并设置状态)

        ```java
        public class DownloadFileTask implements Runnable {
          private DownloadStatus status;

          public DownloadFileTask(DownloadStatus status) {
              this.status = status;
          }

          @Override
          public void run() {
              System.out.println("Downloading a file: " + Thread.currentThread().getName());

              for (int j = 0; j < 1_000_000; j++) {
                  if (Thread.currentThread().isInterrupted()) return;
                  status.increaseTotalBytes();
              }

              status.done();

              System.out.println("Download complete: " + Thread.currentThread().getName());
          }
        }
        ```

    - `ThreadDemo` (启动下载线程和等待线程)

        ```java
        public class ThreadDemo {
          public static void show() {
              var status = new DownloadStatus();

              var downloader = new Thread(new DownloadFileTask(status));
              var waiter = new Thread(() -> {
                  while (!status.isDone()) {
                  }
                  System.out.println(status.getTotalBytes());
              });
              downloader.start();
              waiter.start();
          }
        }
        ```

        - 描述：启动两个线程。`Downloader` 线程模拟下载完成后调用 `status.done()` 将 `isDone` 设为 `true`。`Waiter` 线程在一个 `while` 循环中检查 `status.isDone()`。由于 `isDone` 不是 `volatile`，`Waiter` 线程可能由于 CPU 缓存而无法看到 `Downloader` 线程对 isDone 的修改，导致其陷入无限循环。

2. 使用`volatile`解决可见性问题

    ```java
    public class DownloadStatus {
        private volatile boolean isDone;
        private int totalBytes;
        private final Object totalBytesLock = new Object();

        public int getTotalBytes() {
            return totalBytes;
        }

        public void increaseTotalBytes() {
            synchronized (totalBytesLock) {
                totalBytes++;
            }
        }

        public boolean isDone() {
            return isDone;
        }

        public void done() {
            isDone = true;
        }
    }
    ```

## 线程通信

> 简述：Java 的 `Object` 类提供 `wait()`, `notify()`, 和 `notifyAll()` 方法，用于实现线程间的协作与同步。它们允许一个线程暂停执行并释放锁，等待特定条件满足后由其他线程唤醒，从而避免消耗 CPU 资源的忙等待。虽然功能强大，但使用相对复杂，需谨慎处理。

**知识树**

1. 核心方法 (定义于 `Object`)

    - `wait()`: 使当前线程释放所持有的对象锁（监视器锁），并进入该对象的等待集 (Wait Set)，暂停执行，直到被唤醒或中断。
        - `wait(long timeout)`: 带超时的等待，超时后若未被唤醒也会自动返回。
        - `wait(long timeout, int nanos)`: 更精确的超时等待。
    - `notify()`: 从对象的等待集中**随机唤醒一个**线程。被唤醒的线程需**重新竞争**获取对象锁后才能从 `wait()` 处继续执行。
    - `notifyAll()`: 唤醒对象等待集中的**所有**线程。所有被唤醒的线程都需**重新竞争**获取对象锁。通常是更安全、更推荐的选择，以避免信号丢失。

2. 解决的问题

    - 避免忙等待 (Busy-Waiting): 替代 `while(condition) {}` 循环检查，后者持续占用 CPU，效率低下。
    - 实现条件等待: `wait()` 使线程在条件不满足时休眠并释放锁，不消耗 CPU；`notify()` / `notifyAll()` 在条件满足时唤醒等待线程。

3. 使用前提

    - 必须持有锁 (Monitor Lock): 调用 `wait()`, `notify()`, `notifyAll()` 的线程必须先获得该对象的监视器锁（即必须在以该对象为锁的 `synchronized` 块或方法内）。否则抛出异常。
    - 处理中断异常: `wait()` 方法会响应线程中断请求（`Thread.interrupt()`），并抛出 `InterruptedException`。调用者必须捕获并处理此受检异常（或直接抛出）。

4. 虚假唤醒（补充）

    - 定义：一个正在调用 Object.wait() 方法而阻塞等待的线程，在没有被其他线程显式调用 `notify()`、`notifyAll()` 或 `interrupt()` 的情况下，意外地、无缘无故地被唤醒。线程醒来时，它原本等待的那个条件很可能并未满足。这是 JVM 规范允许发生的底层行为，与操作系统交互、调度等因素有关。
    - 解决：二次校验。

**代码示例**

1.  低效的忙等待 (回顾)

    ```java
    // (之前 Waiter 线程中的代码片段)
    // while (!status.isDone()) {
    //     // 此处持续空转，浪费 CPU 资源
    // }
    // System.out.println("Download finished! Total bytes: " + status.getTotalBytes());
    ```

    - 描述：回顾之前的忙等待实现，指出其在条件不满足时持续执行循环检查，导致不必要的 CPU 消耗。

2.  使用 `wait()` / `notifyAll()` 实现高效等待

    - 修改 Waiter 线程 (例如在 `ThreadDemo` 中):

        ```java
        public class ThreadDemo {
          public static void show() {
              var status = new DownloadStatus();

              var downloader = new Thread(new DownloadFileTask(status));
              var waiter = new Thread(() -> {
                  while (!status.isDone()) {
                      synchronized (status) {
                          try {
                              // 通知等待，使用try/catch包裹，以及synchronized包裹
                              status.wait();
                          } catch (InterruptedException e) {
                              throw new RuntimeException(e);
                          }
                      }
                  }
                  System.out.println(status.getTotalBytes());
              });
              downloader.start();
              waiter.start();
          }
        }
        ```

    - 修改 Downloader 任务 (例如在 `DownloadFileTask.run()` ):

        ```java
        public class DownloadFileTask implements Runnable {
          private DownloadStatus status;

          public DownloadFileTask(DownloadStatus status) {
              this.status = status;
          }

          @Override
          public void run() {
              System.out.println("Downloading a file: " + Thread.currentThread().getName());

              for (int j = 0; j < 1_000_000; j++) {
                  if (Thread.currentThread().isInterrupted()) return;
                  status.increaseTotalBytes();
              }

              status.done();
              // 通知结束等待，使用synchronized包裹
              synchronized (status) {
                  status.notifyAll();
              }

              System.out.println("Download complete: " + Thread.currentThread().getName());
          }
        }
        ```

    - 描述：`Waiter` 线程在获取 `status` 对象的锁后，于 `while` 循环内检查条件 `!status.isDone()`。若条件为 `true`（即尚未完成），则调用 `status.wait()`，此时 `Waiter` 线程释放 `status` 锁并进入等待状态。`Downloader` 线程完成任务后，获取同一个 `status` 对象的锁，更新状态（调用 `status.done()`），然后调用 `status.notifyAll()` 唤醒所有等待 `status` 的线程（包括 `Waiter`）。`Waiter` 被唤醒后，需要重新竞争获取 `status` 锁，成功后从 `wait()` 返回，再次进入 `while` 循环检查条件。如果条件满足 (`isDone()` 返回 `true`)，则退出循环执行后续操作。这种方式使得 `Waiter` 线程在条件不满足时不会消耗 CPU。

## Atomic Object

> 简述：原子类提供了一种无需显式锁即可对单个变量执行原子操作（如原子性地增减、比较和设置）的机制，有效解决了简单场景下的竞态条件问题，通常比锁具有更好的性能。

**知识树**

1.  原子类定义

    - 概念：`java.util.concurrent.atomic` 包下提供的一系列类，用于封装基本数据类型（如 `AtomicInteger`, `AtomicLong`, `AtomicBoolean`）或对象引用（`AtomicReference`），并为其提供线程安全的原子操作方法。
    - 目的：在多线程环境下，对这些封装的变量进行修改时，无需使用 `synchronized` 或 `Lock` 也能保证操作的原子性。
    - 背景：`count++` 包含“读-改-写”三步，可能被线程切换打断，导致数据不一致。
    - 解决：原子方法（如 `incrementAndGet()`）将整个过程作为一个不可分割的单位执行。

2.  常用方法示例 (`AtomicInteger`):

    - `AtomicInteger()` / `AtomicInteger(int initialValue)`: 构造器，创建 `AtomicInteger` 实例，初始值默认为 0 或指定值。
    - `int get()`: 原子性地读取并返回当前整数值。
    - `int incrementAndGet()`: 原子性地将当前值加 1，并返回更新后的值 (等效于 `++i`)。
    - `int getAndIncrement()`: 原子性地将当前值加 1，并返回原始值 (等效于 `i++`)。
    - `boolean compareAndSet(int expect, int update)`: 核心 CAS 操作。原子性地比较当前内部值是否等于 `expect`，如果相等，则将内部值设置为 `update` 并返回 `true`；如果不相等，则不修改内部值并返回 `false`。
    - `int addAndGet(int delta)`: 原子性地将当前值增加 `delta`，并返回更新后的值。

3.  核心机制：CAS (Compare-and-Swap):

    - 可见性：首先用 volatile 语义读取最新值，保证读到的旧值对所有线程可见。
    - 比较与交换：调用一次硬件原子指令 CAS(old, new)：比较内存中当前值是否等于 old ，若相等，原子地将其更新为 new；否则失败
    - 自旋重试：若 CAS 失败，循环再读（volatile 读最新值）→ 计算新值 → 再试，直到成功为止。
    - 无锁无阻塞：整个操作不依赖任何锁，也不会挂起线程，只会在 CPU 层面自旋，适合更新单个变量。

**代码示例**

1.  竞态条件回顾 (Race Condition Review)

    ```java
    // // 回顾：使用普通 int 和 ++ 操作的代码（如之前的 DownloadStatus）
    // public class DownloadStatus {
    //     private int totalBytes;
    //     public void increaseTotalBytes() {
    //         totalBytes++; // 非原子操作，多线程并发下会导致计数不准确
    //     }
    //     public int getTotalBytes() { return totalBytes; }
    // }
    ```

    - 描述：回顾之前使用普通 `int` 类型和 `++` 操作符时，由于 `++` 并非原子操作，在多线程并发调用 `increaseTotalBytes` 方法时会产生竞态条件，导致最终 `totalBytes` 的计数值小于预期。

2.  使用 `AtomicInteger` 解决竞态条件（代码先恢复为竞态条件章节）

    ```java
    public class DownloadStatus {
        private AtomicInteger totalBytes = new AtomicInteger();

        public int getTotalBytes() {
            return totalBytes.get();
        }

        public void increaseTotalBytes() {
            totalBytes.incrementAndGet();
        }
    }
    ```

    - 描述：通过将 `DownloadStatus` 类中的 `totalBytes` 字段类型从 `int` 更改为 `AtomicInteger`，并使用其提供的 `incrementAndGet()` 原子方法来执行递增操作。这确保了每次递增都是一个不可分割的原子单元，从而消除了竞态条件。多线程并发调用 `increaseTotalBytes` 时，能够安全、准确地完成计数，且无需使用任何 `synchronized` 或 `Lock` 显式锁。

## Adder

> 简述：累加器类（如 `LongAdder`, `DoubleAdder`）是 Java 并发包中专为高并发更新场景设计的原子计数器。它们通过分散热点（将更新分布到内部单元格数组）来显著提高吞吐量，性能通常优于在高争用下的 `AtomicLong` 或 `AtomicInteger`。

**知识树**

1.  累加器类定义 (Definition):

    - 概念：`java.util.concurrent.atomic` 包下的 `LongAdder` 和 `DoubleAdder` 类，是专门用于在多线程高并发环境下进行高效数值累加（加法）操作的工具。
    - 目的：解决 `AtomicLong`/`AtomicInteger` 在极端高并发更新时可能遇到的性能瓶颈。

2.  常用方法示例 (`LongAdder`):

    - `LongAdder()`: 构造函数，创建一个初始值为 0 的 `LongAdder` 实例。
    - `void increment()`: 原子性地将计数器的值加 1。在高并发下，此操作会将更新分散到内部 `Cell`。
    - `void add(long x)`: 原子性地将计数器的值加上 `x`。同样会分散竞争。
    - `void decrement()`: 原子性地将计数器的值减 1。
    - `long sum()`: 返回当前计数器的总和。
    - `void reset()`: 将计数器重置为 0（将 `base` 和所有 `Cell` 的值都清零）。
    - `long sumThenReset()`: 原子性地获取当前总和，并将计数器重置为 0。
    - `int intValue()`, `long longValue()`, `float floatValue()`, `double doubleValue()`: 调用 `sum()` 方法获取总和，然后将结果转换为对应的基本类型。

3.  原理：分片计数器

    - 理解：想象你和九个小伙伴都要往一个大罐子里投糖，每人要投一万颗，大家轮流往同一个口子投那就跟排长龙似的，既慢又容易撞；LongAdder 则聪明地先给你们分好若干小罐子（随着人多罐少时不断增多罐数），每个人都往自己小罐里投，绝大多数时候无需排队、几乎不冲突，等所有人投完再把每个小罐的糖一并倒回大罐，正好是一万颗 × 十人，既准确又大幅提升并发性能。
    - 原理：累加器基于“条带化计数（Striped Counter）”策略：在低冲突场景下，线程通过一次对 volatile long base 的 CAS 更新完成累加；一旦检测到 CAS 失败，即进入 Striped64 的 longAccumulate 路径——首次冲突时懒初始化一个 Cell[] 数组，利用每线程的 ThreadLocal 哈希将写操作映射到不同槽位上的 Cell.value，再对该槽位执行 CAS；若槽位争用依旧严重，则通过自旋锁扩容 cells（2→4→8…），进一步分散热点；最终调用 sum() 时，将 base 与所有非空 Cell 的值聚合返回，从而在“最终一致”语义下以极低的 CAS 重试率实现高吞吐量的并发累加。

4.  适用场景与建议

    - 场景：非常适合用于统计聚合数据，如 Web 服务器的请求总数、实时系统中的事件发生次数、并行计算中各任务的完成量等，特点是**写操作非常频繁，读操作（获取总和）相对较少**。
    - 建议：当数值累加操作预期会面临高并发争用（大量线程同时更新）时，应优先考虑使用 `LongAdder` (或 `DoubleAdder`)。 如果读操作频率远高于写操作，或者并发程度不高，`AtomicLong` (或 `AtomicInteger`) 可能因其读取路径更简单而表现相当甚至略好。

**代码示例**

1.  `AtomicInteger` 瓶颈说明

    ```java
    // import java.util.concurrent.atomic.AtomicInteger;
    // // AtomicInteger 保证了原子性，解决了正确性问题。
    // // 但在高并发更新下，所有线程竞争同一个变量的 CAS 操作，
    // // 可能导致大量失败和自旋，影响性能。
    // private AtomicInteger totalBytes = new AtomicInteger();
    // public void increaseTotalBytes() { totalBytes.incrementAndGet(); }
    ```

    - 描述：指出 `AtomicInteger` 虽解决了数据竞争的正确性问题，但在高并发更新场景下，其依赖单一变量 CAS 的机制可能成为性能瓶颈。

2.  使用 `LongAdder` 优化高并发计数

    ```java
    public class DownloadStatus {
        private LongAdder totalBytes = new LongAdder();

        public int getTotalBytes() {
            return totalBytes.intValue();
        }

        public void increaseTotalBytes() {
            totalBytes.increment();
        }
    }
    ```

    - 描述：将 `DownloadStatus` 中的计数器 `totalBytes` 从 `AtomicInteger` (或 `int`) 替换为 `LongAdder`。读取总和使用 `intValue()`（内部调用 `sum()`），递增操作使用 `increment()`。`LongAdder` 通过其内部的 `Cell` 数组机制，有效地分散了高并发更新时的竞争，使得在大量线程同时调用 `increaseTotalBytes` 时，系统能够维持更高的吞吐量。（见原理的理解部分）

## 同步集合

> 简述：`java.util.Collections` 类提供了一系列静态 `synchronizedXXX()` 方法，用于将非线程安全的标准集合（如 `ArrayList`, `HashMap`）包装成线程安全的版本。这种包装通过对每个方法调用进行同步（使用内部锁）来实现基本的线程安全。

**知识树**

1.  非线程安全的集合

    - 标准集合：Java 核心集合框架中的大部分实现（如 `ArrayList`, `LinkedList`, `HashSet`, `HashMap`, `TreeMap` 等）在设计时并未考虑多线程并发访问，它们是非线程安全的。
    - 并发风险：若无外部同步措施，多个线程同时读取和修改这些集合，极易导致数据损坏、内部状态不一致、抛出 `ConcurrentModificationException` 或产生其他不可预测的行为。

2.  同步包装器

    - 工具类：`java.util.Collections` 提供了一组静态工厂方法。
    - 功能：这些方法接收一个非线程安全的集合实例作为输入，返回一个实现了相同集合接口的线程安全包装器实例。

3.  补充-工作机制 (Mechanism):

    - 内部锁定：包装器对象对所有可变操作（增、删、改）内置 `synchronized`，默认锁定在包装器自身的监视器（即 `this`）。
    - 方法代理：包装器实现与原集合相同的接口，所有方法都委托给内部的“原始”集合实例，但在委托前后加锁和解锁。
    - 可选锁定对象：部分方法允许传入自定义锁对象（如 `Collections.synchronizedMap(map, mutex)`），以便与其它同步块共享同一锁，避免不必要的锁竞争。
    - 迭代器处理：调用 `iterator(`) 方法时，返回的迭代器并不自动加锁；若需在迭代过程中保持线程安全，调用方必须手动在外部同步块中使用 `synchronized(wrapper) { … iterator … }`。

4.  缺点与注意事项 (Drawbacks & Considerations):

    - 性能开销：所有操作都采用单一全局锁，严重影响高并发环境下的吞吐量；对于读多写少的场景，容易成为瓶颈。
    - 死锁风险：若多个线程以不同顺序同时锁定多个同步集合，可能导致死锁；使用统一的锁对象或避开嵌套锁定可缓解此问题。
    - 迭代不安全：包装器未对迭代器自身加锁，调用者必须自行在同步块中遍历，否则仍会抛出 `ConcurrentModificationException`。
    - 功能局限：仅能保证单次方法调用的原子性，多步组合操作（如“先检查再插入”）仍需外部同步；它不支持细粒度或锁分段。

**代码示例**

1.  非线程安全集合并发修改问题

    ```java
    public class ThreadDemo {
        public static void show() {
            Collection<Integer> collection = new ArrayList<>();

            var thread1 = new Thread(() -> {
                collection.addAll(Arrays.asList(1, 2, 3));
            });
            var thread2 = new Thread(() -> {
                collection.addAll(Arrays.asList(4, 5, 6));
            });

            thread1.start();
            thread2.start();

            try {
                thread1.join();
                thread2.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println(collection);
        }
    }
    ```

    - 描述：两个线程并发地向同一个 `ArrayList` 添加元素。由于 `ArrayList` 的 `add` 方法及其内部的数组扩容逻辑非线程安全，概率出现数据丢失（多次执行尝试）。

2.  使用同步集合包装器解决

    ```java
    public class ThreadDemo {
        public static void show() {
            Collection<Integer> collection
                    = Collections.synchronizedCollection(new ArrayList<Integer>());

            var thread1 = new Thread(() -> {
                collection.addAll(Arrays.asList(1, 2, 3));
            });
            var thread2 = new Thread(() -> {
                collection.addAll(Arrays.asList(4, 5, 6));
            });

            thread1.start();
            thread2.start();

            try {
                thread1.join();
                thread2.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println(collection);
        }
    }
    ```

    - 描述：首先创建了一个 `ArrayList`，然后通过 `Collections.synchronizedCollection()` 方法将其包装成一个线程安全的 `syncCollection`。后续的多线程任务操作的是这个包装后的集合。由于 `syncCollection` 的 `add` 方法内部使用了 `synchronized` 锁，保证了每次只有一个线程能够执行添加操作，从而避免了并发冲突，使得最终集合的大小能够准确地达到预期值。

## 并发集合

> 简述： Java 提供了多种多线程环境下安全的集合，如 ConcurrentHashMap，在多线程环境下提供高吞吐且线程安全的数据结构。

**知识树**

1. 常见实现

    - ConcurrentHashMap：线程安全的 HashMap 集合。虽然与 Map 拼写相似，但两者属于两个不同的类，功能和实现不同，效果也不同

2. 性能对比

    - 读多写少 → CopyOnWriteList/Set：写时复制
    - 高并发读写 → ConcurrentHashMap：节点数组 + CAS
    - 需排序/范围查询 → ConcurrentSkipListMap/Set：跳表；天然有序，支持范围检索

3. 原理补充

    - 内部锁：`synchronized` / `ReentrantLock`
    - 无锁：CAS + 自旋
    - 分段锁：缩小锁粒度
    - 内存可见性：`volatile`

**代码示例**

1. 普通集合，多线程下数据出现问题

    ```java
    public class ThreadDemo {
        public static void show() {
            Map<Integer,String> map = new HashMap<>();
            map.put(1,"a");
            map.get(1);
            map.remove(1);
        }
    }
    ```

2. 并发集合，多线程下安全

    ```java
    public class ThreadDemo {
        public static void show() {
            Map<Integer,String> map = new ConcurrentHashMap<>();
            map.put(1,"a");
            map.get(1);
            map.remove(1);
        }
    }
    ```

# 执行框架

## 线程池

> 简述：线程池（Thread Pool）是用于高效管理和复用线程的一种机制，可避免频繁创建和销毁线程带来的性能开销，防止因线程过多导致内存溢出，简化线程管理。

**知识树**

1. 线程池概念

    - 工作线程（worker threads）组成线程池，可重复执行多个任务。
    - 线程执行完任务后返回线程池，不会销毁，可再次复用。

2. 为什么使用线程池

    - 创建和销毁线程成本高，线程池可显著降低系统资源消耗。
    - 防止创建过多线程导致内存溢出（OutOfMemoryError）。

## Executor 家族

> 简述：`Executor` 家族是 Java 并发框架的核心，用于解耦任务提交与执行策略，并提供强大的线程池管理能力，实现高效的异步任务处理。该体系围绕 `Executor` 和 `ExecutorService` 接口构建。

1. `Executor` 接口

    - 概念
        - `Executor` 是 Java 并发框架中用于任务执行的顶层接口，由于功能较为基础，主要用于执行不带返回值的任务，仅支持接收并执行 `Runnable` 任务，实际开发常使用功能更强的子接口 `ExecutorService`。
    - 核心方法：`void execute(Runnable command)`
        - 接收一个 `Runnable` 任务作为参数，任务的执行方式（例如直接创建线程、交由线程池调度等）由具体实现类决定。

2. `ExecutorService` 接口

    - 概念：
        - `ExecutorService` 接口扩展`Executor` 接口，允许提交实现了 `Callable<T>` 接口的任务。提交的`Callable` 任务会返回一个 `Future<T>` 对象，用于异步获取执行结果（下一节介绍）。
    - 常用方法：
        - `submit(Callable)` / `(Runnable)` ：提交任务
        - `invokeAll(Collection)` ：批量提交多个任务，返回所有结果
        - `invokeAny(Collection)` ： 提交多个任务，返回第一个完成的结果
        - `shutdown()` ：优雅关闭，不接受新任务，等待现有任务执行完。
        - `shutdownNow()` ：尝试立即关闭线程池，停止正在执行的任务，返回未执行的任务列表。可能抛出异常。
        - `isShutdown()` / `isTerminated()` ：判断线程池状态
        - `awaitTermination(time, timeUnit)`：如果线程池在超时时间内终止，返回 `true`，否则返回 `false`。

3. `ExecutorService` 的实现（四个“顶级”类）

    1. `AbstractExecutorService`（抽象类）

        - 实现了 `ExecutorService` 接口中绝大多数方法（`submit`、`invokeAll`、`invokeAny` 等），只留下 `execute(Runnable)`、生命周期管理（`shutdown`、`isTerminated` 等）这几组核心抽象方法；

    2. **`ThreadPoolExecutor`（具体实现）：主要**

        - 继承自 `AbstractExecutorService`，重写并实现了：
            - `execute(Runnable)`：线程复用、队列管理、拒绝策略；
            - 生命周期方法：`shutdown`、`shutdownNow`、`isShutdown`、`awaitTermination` 等；
        - 优势：
            - 提供了最通用也最可配置的线程池实现（构造函数复杂），安全，避免了资源耗尽风险。**适合在生产环境中使用，能更精准地管理线程池行为。**

    3. `ScheduledThreadPoolExecutor`（调度线程池）

        - 又继承自 `ThreadPoolExecutor`，并实现 `ScheduledExecutorService` 接口；
        - 在 `ThreadPoolExecutor` 的基础上增加了定时/周期任务的管理（内部用延迟队列、定期重新入队等机制）。

    4. `ForkJoinPool`（分治并行池）

        - 直接继承自 `AbstractExecutorService`，并实现 `ExecutorService`；
        - 引入了 `ForkJoinTask`、双端队列与“工作窃取”算法，不同于 `ThreadPoolExecutor` 的集中队列，更适合大量细粒度、递归拆分的并行计算场景。
        - “工作窃取”算法：每个工作线程都有自己的任务队列。空闲线程会“窃取”其他线程队列中的任务，避免线程长时间空转，提高吞吐量。

4. `Executors` 类

    - 概念：
        - `Executors` 是 Java 提供的一个线程池工厂类。它为创建常用线程池提供了便捷的静态方法，简化了 `ThreadPoolExecutor` 的使用。
    - 常见方法：
        - `newFixedThreadPool(n)`：（常用）
            - 创建固定大小的线程池，适合负载稳定的场景。使用无界队列，若任务积累速度大于消耗速度，可能引发 OOM，返回 `ThreadPoolExecutor`实例，方法签名声明的是`ExecutorService`
        - `newSingleThreadExecutor()`：
            - 创建单线程线程池，任务按顺序执行，适合串行任务，返回 `ThreadPoolExecutor`实例，方法签名声明的是`ExecutorService`
        - `newCachedThreadPool()`：
            - 创建可缓存的线程池，线程可复用，适合短任务、高并发场景。线程数几乎无限制，风险较高，返回 `ThreadPoolExecutor`实例，方法签名声明的是`ExecutorService`
        - `newScheduledThreadPool(n)`：
            - 创建支持定时任务和周期任务的线程池，类似于 Timer，返回`ScheduledThreadPoolExecutor`实例，方法签名声明的是`ExecutorService`
        - `newWorkStealingPool()`：
            - 创建基于工作窃取算法的线程池，适合 CPU 密集型任务（JDK 8+）。返回`ForkJoinPool`实例，方法签名声明的是`ExecutorService`
    - 缺陷
        - 默认策略可能导致资源耗尽（如无限队列），**在生产环境中建议使用 `ThreadPoolExecutor` 显式配置线程池参数**。

5. 引入示例

    - 使用 Executors 的工厂方法创建静态线程池进行演示，创建 ExecutorsDemo 与 show 方法，并在 Main 中调用 show 方法

6. 最佳实践

    - 推荐显式使用`ThreadPoolExecutor`，避免资源耗尽风险
    - 必须使用`try-finally`块管理线程池关闭

**代码示例**

1. `Executors` 工厂方法创建并使用固定大小的线程池

    ```java
    public class ExecutorsDemo {
        public static void show() {
            // new ThreadPoolExecutor()
            ExecutorService executorService = Executors.newFixedThreadPool(2);
            for (int i = 0; i < 10; i++) {
                executorService.submit(() -> {
                    System.out.println(Thread.currentThread().getName());
                });
            }
        }
    }
    ```

    - 描述：两个线程并发执行，执行完后并没有结束，线程等待新任务。

2. 返回`Future<T>` 对象

    ```java
    public class ExecutorsDemo {
        public static void show() {
            // new ThreadPoolExecutor()
            ExecutorService executorService = Executors.newFixedThreadPool(2);

            // 提交带返回值的任务，会返回一个Future对象
            Future<Integer> future = executorService.submit(() -> {
                System.out.println(Thread.currentThread().getName());
                return 1;
            };
        }
    }
    ```

3. 推荐的关闭方式（`try-finally`）：

    ```java
    public class ExecutorsDemo {
        public static void show() {
            // new ThreadPoolExecutor()
            ExecutorService executorService = Executors.newFixedThreadPool(2);
            try {
                executorService.submit(() -> {
                    System.out.println(Thread.currentThread().getName());
                });
            } finally {
                executorService.shutdown();
            }
        }
    }
    ```

## Callable 与 Future

> 简述：`Callable` 是 Java 中用于定义具有返回值并可抛出异常的异步任务的接口，`Future` 是代表异步任务结果的占位符，提供阻塞式获取结果的方法。

**知识树**

1. `Callable` 接口

    - 概念：`java.util.concurrent.Callable<V>` 是一个支持返回结果和抛出异常的函数式接口，用于定义可以返回值的任务。
    - 核心方法：`V call() throws Exception`
        - 执行任务并返回结果或抛出异常。
        - 任务提交给线程池后，其返回值会被封装为 `Future<V>` 对象，以支持异步获取结果。

2. `Callable` 接口与 `Supplier`接口

    - 共同点：两者都提供值
    - 不同点：异常处理：
        - `Callable` 接口对异常进行了抛出，并在线程池内部进行捕获，存放在返回的 `Future` 实例内，实例调用 `get()` 方法时会触发
        - `Supplier`接口并没有抛出异常，在使用时，如果存在需要处理异常的步骤，需要显式的捕获或者抛出

3. Future 接口

    - 概念：异步任务的结果占位符，表示尚未完成的计算的对象，也就是一个“未来”会有结果的任务，用于后续获取任务执行结果。
    - 通常由 `ExecutorService` 提交 `Callable` 或 `Runnable` 任务获得 (`Runnable` 可指定返回值)。

4. Future 常用方法

    - `V get()`
        - 阻塞直至任务完成并返回结果。
    - `V get(long timeout, TimeUnit unit)`
        - 限时等待任务结果，超时则抛出 `TimeoutException`。
    - `boolean cancel(boolean mayInterruptIfRunning)`
        - 尝试取消任务；参数为是否中断运行中的任务。
    - `boolean isDone()`
        - 检查任务是否完成（正常完成、异常或取消）。
    - `boolean isCancelled()`
        - 检查任务是否被取消。

5. Future 的缺点（本质问题）

    1. 不可主动完成
        - 无法主动设定任务结果，只能被动等待任务执行完成。
    2. 只能阻塞获取结果
        - `Future.get()` 方法强制阻塞，异步任务调用方失去了非阻塞优势。
    3. 缺乏链式组合能力
        - Future 本身不支持任务完成后的进一步组合或转换操作，无法实现任务链式调用。
    4. 错误处理机制不足
        - 异常统一封装在 `ExecutionException` 中，丢失异常原有类型信息和语义。
        - 需要重复且冗长的 try-catch 解包异常，代码可读性差。
        - 缺乏在异常发生时自动触发的、非阻塞的回调处理机制。
        - 无法组合或统一处理多个 Future 中的异常，异常处理的复杂性随任务数量增加而显著增加。

**代码示例**

1. 创建一个模拟任务耗时的类

    ```java
    public class LongTask {
        public static void simulate(int seconds) {
            try {
                Thread.sleep(seconds * 1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

2. Future 方法演示

    ```java
    public class ExecutorsDemo {
        public static void show() {
            ExecutorService executorService = Executors.newFixedThreadPool(2);
            try {
                // 提交带返回值的任务，会返回一个Future对象
                Future<String> future = executorService.submit(() -> {
    	            // 模拟任务执行消耗2秒
                    LongTask.simulate(2);
                    return "Done";
                });


                try {
                    var result = future.get();
                    System.out.println(result);
                } catch (InterruptedException | ExecutionException e) {
                    throw new RuntimeException(e);
                }

            } finally {
                executorService.shutdown();
            }
        }
    }
    ```

    - 描述：一开始 `result` 并不会输出，阻塞两秒后，输出 Done

## CompletableFuture

> 简述：`CompletableFuture<T>` 是 Java 中用于异步编程的增强型 `Future`。它不仅代表了异步计算的未来结果，还实现了 `CompletionStage` 接口，允许将多个异步步骤（阶段）以声明式、非阻塞的方式组合和链接起来，极大地简化了复杂异步工作流的构建与管理。同时，它支持被外部显式地完成。

**知识树**

1.  核心概念

    - 实现了 `Future<T>` 接口：
        - 每个 `CompletableFuture` 也是一个 `Future`。
        - 继承了 `Future` 的基本能力，如通过 `get()` 阻塞式 获取结果、检查完成状态 (`isDone()`) 等。
    - 实现了 `CompletionStage<T>` 接口：
        - 核心：定义了异步操作中的“阶段 (Stage)”。
        - 提供了丰富的组合与链接方法，允许以声明式 (declarative)、非阻塞的方式构建多步骤的异步流程，类似 Stream API 的链式调用。
    - 可显式完成 (Completable)：
        - 与 `Future` 不同，`CompletableFuture` 可以被外部代码主动设置结果 (`complete(T value)`) 或异常 (`completeExceptionally(Throwable ex)`) 来完成。

2.  `CompletableFuture` 方法

    - 介绍：
        - 这个类是 Java 并发编程的核心工具之一，后续内容主要介绍该类的部份方法。
        - `CompletableFuture` 类中存在大量的方法，除去部分用于调试或者工具功能的，调用 `CompletableFuture.method` 后，大部份方法都会返回一个`CompletableFuture`实例。
    - 静态非静态划分：
        - 静态方法不依赖对象状态，比如创建方法
        - 非静态方法依赖具体`CompletableFuture`实例的状态

3.  创建异步任务方法

    - `runAsync(Runnable runnable)` / `runAsync(Runnable runnable, Executor executor)`：
        - 用途：异步执行一个不返回任何结果的任务 (`Runnable`)。
        - 返回：`CompletableFuture<Void>`。
        - 执行器：若未指定 `executor`，默认使用 `ForkJoinPool.commonPool()`。
    - `supplyAsync(Supplier<U> supplier)` / `supplyAsync(Supplier<U> supplier, Executor executor)`：
        - 用途：异步执行一个返回结果的任务 (`Supplier<U>`)。
        - 返回：`CompletableFuture<U>`，`U` 是 `Supplier` 提供的结果类型。
        - 执行器：若未指定 `executor`，默认使用 `ForkJoinPool.commonPool()`。

4.  默认执行器 (Executor)

    - `ForkJoinPool.commonPool()`：
        - 是 `runAsync`/`supplyAsync` 等不带 `Executor` 参数的异步方法默认使用的公共线程池。
        - 该池的大小通常基于可用 CPU 核心数 (`Runtime.getRuntime().availableProcessors()`)

**代码示例**

1.  使用 `runAsync` 执行无返回值的异步任务（下一节介绍异步效果）

    ```java
    public class ExecutorsDemo {
        public static void show() {
            Runnable task1 = () -> System.out.println("a");
            CompletableFuture<Void> future1 = CompletableFuture.runAsync(task1);
        }
    }
    ```

2.  使用 `supplyAsync` 执行有返回值的异步任务并获取结果

    ```java
    public class ExecutorsDemo {
        public static void show() {
            Supplier<Integer> task2 = () -> 1;
            CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(task2);

            try {
                Integer result = future2.get();
                System.out.println(result);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：`CompletableFuture` 继承自 `Future` 可以使用`get()` ，这节仅创建的初步演示。

3.  异常补充

    ```java
    public class ExecutorsDemo {
        public static void show() {
            Supplier task1 = () -> 1 / 0;
            CompletableFuture<Void> future = CompletableFuture.supplyAsync(task1);

            // try {
            //     future.get();
            // } catch (InterruptedException e) {
            //     throw new RuntimeException(e);
            // } catch (ExecutionException e) {
            //     throw new RuntimeException(e);
            // }
        }
    }
    ```

    - 描述：直接执行不会报错

## CompletableFuture 异步

> 简述：利用 `CompletableFuture` 能将耗时的同步阻塞操作（如网络请求、数据库查询、文件读写等）封装成异步非阻塞的 API。

**知识树**

1. 同步操作的问题

    - 定义：执行时会阻塞调用线程，直到操作完成才能继续执行后续代码的方法（例如，直接进行网络、磁盘 I/O）
    - 影响：若在关键线程（如 UI 线程或请求处理线程）上执行，会导致应用程序无响应、吞吐量下降。

2. 异步 API 设计目标

    - 核心：执行可能耗时的操作，但不阻塞调用方线程。
    - 实现：调用立即返回，操作在后台（通常是独立的线程）执行，结果或完成状态通过返回的 CompletableFuture 来传递和管理。

3. 转换步骤

    - 识别耗时操作：定位代码中执行阻塞 I/O 或长时间计算的同步方法。
    - 定义异步方法签名
        - 返回类型：将原方法的返回类型 `T` 更改为 `CompletableFuture<T>`。如果原方法返回 `void`，则更改为 `CompletableFuture<Void>`。
        - 命名约定：在原方法名后添加 `Async` 后缀（例如 `sendMail` 变为 `sendMailAsync`），作为清晰的标识。
    - 核心转换
        - 使用 `CompletableFuture` 的静态工厂方法**包装**对**原同步方法**的调用。

4. 调用与效果

    - 非阻塞调用：调用 `...Async` 方法会立即返回一个 `CompletableFuture` 对象，调用线程不会被阻塞。
    - 后台执行：实际的耗时操作会在 `CompletableFuture` 内部管理的线程上执行。
    - 提升响应性：调用线程可以继续执行其他任务，尤其对于 UI 或服务器应用，可以更快地响应用户或其他请求。
    - 并发利用：允许同时发起多个异步操作，更好地利用多核 CPU 和 I/O 并行能力。

5. 演示注意事项

    - 在生命周期短暂的程序（如 `main` 方法直接运行结束的命令行程序）中演示 `...Async` 回调时，主线程可能会在异步回调任务执行并打印输出之前就已退出。若异步线程任务没有完成，主线程结束时，异步线程也会一起结束
    - 为了观察到异步回调的效果，有两种方法。
        1. 延迟主线程时间：在主线程中加入适当的等待（如 `Thread.sleep()` ），但这并非异步编程本身的通用要求。
        2. 使用 `join` 方法

**代码示例**

1. 同步阻塞的邮件发送示例

    - 创建 `MailService` 模拟邮件发送
        ```java
        public class MailService {
            public void send() {
        	    System.out.println("Sending mail...");
        	    // 模拟邮件发送
                LongTask.simulate(5);
                System.out.println("Mail was sent.");
            }
        }
        ```
    - 模拟邮件发送
        ```java
        public class ExecutorsDemo {
          public static void show() {
              var service = new MailService();
              service.send();
          }
        }
        ```
    - 描述：先输出`Sending mail...`，阻塞主线程 5 秒后，输出`Mail was sent.`

2. 异步的邮件发送示例

    - 将同步操作转换为异步 API

        ```java
        public class MailService {
          public void sendMail() {
              System.out.println("Sending mail...");
              // 模拟邮件发送
              LongTask.simulate(5);
              System.out.println("Mail was sent.");
          }

          public CompletableFuture<Void> sendMailAsync() {
              return CompletableFuture.runAsync(() -> sendMail());
          }
        }
        ```

    - Main 中调用

        ```java
        public class ExecutorsDemo {
          public static void show() {
              var service = new MailService();
              CompletableFuture<Void> future = service.sendMailAsync();

              // 主线程中插入该线程，该线程结束，主线程才能继续执行（结束）
              future.join();
          }
        }
        ```

## `thenRun`&`thenAccept`

> 简述：`CompletableFuture` 提供了一系列非阻塞的回调方法，允许你在异步任务成功完成后自动执行指定的代码。这些方法使得处理结果、触发后续逻辑或简单地标记完成状态变得流畅而高效，无需依赖阻塞的 `get()` 调用。

**知识树**

1.  核心机制：注册完成回调 (Registering Completion Callbacks)

    - 目的：当一个 `CompletableFuture` 代表的异步任务成功完成时，自动执行后续操作。
    - 实现：通过 `CompletionStage` 接口提供的、通常以 `then...` 开头的方法来注册回调函数 (Lambda 表达式或方法引用)。

2.  执行无需结果的回调

    - `thenRun(Runnable action)`：
        - 动作：当 `CompletableFuture` 成功完成时，执行传入的 `Runnable` 任务。`Runnable` 不接收前一阶段的结果。
        - 执行线程：回调可能在完成前一阶段任务的线程上执行，或者在注册回调的线程上执行（如果 Future 已完成）。**不保证异步执行**。
    - `thenRunAsync(Runnable action)` / `thenRunAsync(Runnable action, Executor executor)`：
        - 动作：同 `thenRun`，执行 `Runnable`。
        - 执行线程：**保证**将 `Runnable` 提交到线程池（默认 `ForkJoinPool.commonPool()` 或指定的 `Executor`）中**异步执行**。

3.  执行消费结果的回调

    - `thenAccept(Consumer<? super T> action)`：
        - 动作：当 `CompletableFuture` 成功完成时，执行传入的 `Consumer`，并将前一阶段的结果 `T` 作为参数传递给 `Consumer`。
        - 执行线程：与 `thenRun` 类似，回调执行线程不保证是异步的。
    - `thenAcceptAsync(Consumer<? super T> action)` / `thenAcceptAsync(Consumer<? super T> action, Executor executor)`：
        - 动作：同 `thenAccept`，执行 `Consumer` 并传入结果 `T`。
        - 执行线程：**保证**将 `Consumer` 提交到线程池（默认 `ForkJoinPool.commonPool()` 或指定的 `Executor`）中**异步执行**。

4.  执行线程辨析 (`sync` vs `async` 变体)

    - 非 `Async` 版本 (`thenRun`, `thenAccept`):
        - 优点：对于非常简短、非阻塞的回调，可能减少线程切换开销。
        - 缺点：回调执行的线程不确定。如果回调本身耗时或阻塞，可能会阻塞关键线程（如完成计算的线程或调用者线程）。
    - `Async` 版本 (`thenRunAsync`, `thenAcceptAsync`):
        - 优点：明确将回调任务交给线程池处理，**保证了异步性**，避免阻塞关键线程，适合执行任何可能耗时或需要隔离的操作。
        - 推荐：通常是**更安全、更推荐**的选择，除非能确保回调极其轻量且非阻塞。

5.  演示注意事项 (Demo Considerations)

    - 在生命周期短暂的程序（如 `main` 方法直接运行结束的命令行程序）中演示 `...Async` 回调时，主线程可能会在异步回调任务执行并打印输出之前就已退出。为了观察到异步回调的效果，可能需要在主线程中加入适当的等待（如 `Thread.sleep()` ），但这并非异步编程本身的通用要求。

**代码示例**

1.  `thenRun` vs `thenRunAsync` 对比

    ```java
    public class ExecutorsDemo {
        public static void show() {

            Supplier<String> supplier = () -> {
                LongTask.simulate(2);
                return "Done";
            };

            var future = CompletableFuture.supplyAsync(supplier);

            // 此处更换 thenRun/thenRunAsync 测试 耗时/非耗时 任务
            future.thenRun(() -> {
                System.out.println(Thread.currentThread().getName());
            });


            future.join();
        }
    }
    ```

    - 描述：对比 `thenRun` 和 `thenRunAsync`。`thenRun` 执行耗时任务时，回调线程来自 `ForkJoinPool`，执行非耗时任务时，回调线程来自 `main` 线程（初始任务的线程），而 `thenRunAsync` 的回调线程明确来自 `ForkJoinPool`。

2.  `thenAccept` vs `thenAcceptAsync` 对比

    ```java
    public class ExecutorsDemo {
        public static void show() {

            Supplier<String> supplier = () -> {
                LongTask.simulate(2);
                return "Done";
            };

            var future = CompletableFuture.supplyAsync(supplier);

            // 此处更换 thenAccept/thenAcceptAsync 测试 耗时/非耗时 任务
            future.thenAcceptAsync(result -> {
                System.out.println(result);
                System.out.println(Thread.currentThread().getName());
            });


            future.join();
        }
    }
    ```

    - 描述：对比 `thenAccept` 和 `thenAcceptAsync`。两者都能接收到上一步的结果 (100)。与对比 `thenRun` 和 `thenRunAsync`的对比类似， `thenAcceptAsync` 保证了回调的异步执行环境。

## `exceptionally`

> 简述：`CompletableFuture` 不仅能执行异步任务，还能有效处理任务执行过程中可能出现的异常。它提供了非阻塞的异常恢复机制（如 `exceptionally` 方法），允许开发者定义在发生错误时的替代逻辑或默认值，从而构建更健壮、容错的异步应用。

**知识树**

1.  异常的捕获与传递 (Exception Capture and Propagation)

    - 自动捕获：当 `CompletableFuture` 关联的异步任务（在 `runAsync`, `supplyAsync` 等方法中执行的代码）抛出异常时，该异常会被 `CompletableFuture` 内部自动捕获。
    - 阻塞获取 (`get()`):
        - 如果直接对一个已异常完成的 `CompletableFuture` 调用 `get()` 方法，它会抛出 `ExecutionException`。
        - 原始的异常被包装在 `ExecutionException` 内部，可通过 `ex.getCause()` 获取。
        - 这种方式需要传统的 `try-catch` 块，并且是阻塞的。

2.  非阻塞异常恢复: `exceptionally()` 方法

    - 目的：提供一种非阻塞的方式来处理异步链中发生的异常，并允许从中恢复，通常是通过提供一个默认值或替代结果。
    - 签名：`CompletableFuture<T> exceptionally(Function<Throwable, ? extends T> fn)`
    - 工作机制：
        - 输入: 接收一个函数 `fn`，该函数以捕获到的 `Throwable` (异常) 作为输入参数。
        - 处理: 函数 `fn` 的逻辑定义了如何根据异常来产生一个类型为 `T` 的替代结果。
        - 触发条件: 仅当调用 `exceptionally` 的 `CompletableFuture` (即前一阶段) 异常完成时，函数 `fn` 才会被执行。
        - 跳过条件: 如果前一阶段成功完成，`exceptionally` 及其函数 `fn` 会被完全跳过。
    - 返回值: `exceptionally` 方法总是返回一个新的 `CompletableFuture<T>` 实例。
        - 如果原始 Future 成功：新 Future 持有原始的成功结果。
        - 如果原始 Future 失败：新 Future 持有由 `fn` 函数计算出的恢复值，并且这个新 Future 被标记为成功完成。

**代码示例**

1.  默认异常处理方式 (使用 `get()` 和 `try-catch`)

    ```java
    public class ExecutorsDemo {
        public static void show() {

            var future = CompletableFuture.supplyAsync(() -> {
                System.out.println("Getting the current temperature");
                // 模拟操作失败
                throw new IllegalStateException();
                // return 80; // 这行不会执行
            });

            try {
                // 调用时才会抛异常，不调用时存放在返回的future中
                var temperature = future.get();
                System.out.println(temperature);
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：异常存放在返回的 `future` 中，调用 `get()` 会导致 `ExecutionException`

2.  使用 `exceptionally()` 进行非阻塞恢复

    ```java
    public class ExecutorsDemo {
        public static void show() {

            var future = CompletableFuture.supplyAsync(() -> {
                System.out.println("Getting the current temperature");
                // 模拟操作失败
                throw new IllegalStateException();
                // return 80; // 这行不会执行
            });

            try {
                // 使用 exceptionally 处理，只有在异常时才会处理
                var temperature = future.exceptionally(ex -> -1).get();
                System.out.println(temperature);
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：当 `supplyAsync` 抛出异常时，`exceptionally` 中的 Lambda 表达式被执行，对`exceptionally` 返回的新对象调用 `get()` 会成功获得这个默认值，而不是抛出异常。强调了 `exceptionally` 返回的是一个新的 `CompletableFuture`。

## thenApply

> 简述：`CompletableFuture` 允许你在异步任务成功完成后，对其结果应用一个函数进行转换或映射，生成一个新的结果，这通常用于改变数据类型、格式或进行单位换算等操作。这种转换通过 `thenApply` 等方法以非阻塞、链式的方式集成到异步流程中。

**知识树**

1.  核心需求：结果转换

    - 场景：异步获取数据后，需要将其从原始形式（如复杂对象、特定单位）转换为更适合后续处理或展示的形式（如提取特定字段、转换为不同单位）。

2.  主要转换方法：`thenApply()`

    - 签名：`CompletableFuture<U> thenApply(Function<? super T, ? extends U> fn)`
    - 目的：当 `CompletableFuture<T>` 成功完成时，将其结果 `T` 应用于给定的函数 `fn`，该函数返回一个新的结果 `U`。
    - 输入函数 (`fn`): 定义了从类型 `T` 到类型 `U` 的映射/转换逻辑。
    - 执行线程：与 `thenRun`/`thenAccept` 类似，转换函数 `fn` 的执行线程不保证是异步的，可能在完成前序任务的线程或调用线程上执行。

3.  异步转换方法：`thenApplyAsync()`

    - 签名：`thenApplyAsync(Function<? super T, ? extends U> fn)` / `thenApplyAsync(Function<? super T, ? extends U> fn, Executor executor)`
    - 目的：与 `thenApply` 相同，对成功结果 `T` 应用函数 `fn` 得到 `U`。
    - 执行线程：保证转换函数 `fn` 在线程池（默认 `ForkJoinPool.commonPool()` 或指定 `Executor`）中异步执行。
    - 适用场景：当转换函数 `fn` 本身计算量较大或可能阻塞时，推荐使用 `Async` 版本以避免阻塞关键线程。

4.  返回值与链式调用

    - 新的 Future：`thenApply` 和 `thenApplyAsync` 都返回一个新的 `CompletableFuture<U>` 实例，它将持有转换后的结果 `U`。原始的 `CompletableFuture<T>` 保持不变。
    - 构建流水线：这种返回新 Future 的特性使得可以流畅地链接多个操作，形成声明式的异步处理流水线（例如：`supplyAsync` 获取数据 -> `thenApply` 转换单位 -> `thenAccept` 消费结果）。

5.  结合其他回调

    - 消费转换结果：转换后的结果（`U`）可以通过链式调用后续的 `thenAccept(Consumer<U>)` 或 `thenRun(Runnable)` 等方法进行处理或触发进一步操作，而无需使用阻塞的 `get()`。

**代码示例**

1.  使用 `thenApply` 转换结果并链式处理

    ```java
    public class ExecutorsDemo {
        public static void show() {

            // 返回20摄氏度
            var future = CompletableFuture.supplyAsync(() -> 20);

            try {
                var result = future.
                        thenApply(celsius -> (celsius * 1.8) + 32).get();
                System.out.println(result);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：首先异步获取摄氏温度 (20)，然后使用 `thenApply` 将其转换为华氏温度

2.  同样 使用 `thenApply`，优化为链式调用

    ```java
    public class ExecutorsDemo {
        public static double toFahrenheit(double celsius) {
            return (celsius * 1.8) + 32;
        }

        public static void show() {

            // 返回20摄氏度
            var future = CompletableFuture.supplyAsync(() -> 20);

            future
                    .thenApply(ExecutorsDemo::toFahrenheit)
                    .thenAccept(f -> System.out.println(f));

        }
    }
    ```

    - 描述：与上一个示例功能相同，但将转换逻辑提取到了 `toFahrenheit` 静态方法中，并在 `thenApply` 中通过方法引用 `ThenApplyMethodRefDemo::convertToFahrenheit` 来调用，使用 `thenAccept` 打印转换后的结果。整个过程通过链式调用完成，使代码更清晰。

## thenCompose

> 简述：`CompletableFuture` 提供了 `thenCompose` 方法，用于优雅地编排有依赖关系的异步任务序列。当一个异步任务的启动需要依赖前一个异步任务的结果时，`thenCompose` 可以将这两个异步步骤平滑地链接起来，形成一个单一的、代表最终结果的 `CompletableFuture`，避免了回调地狱，也就是嵌套 Future 的复杂性。

**知识树**

1.  核心场景：依赖型异步任务

    - 定义：后续的异步操作 B 必须等待异步操作 A 完成，并使用 A 的结果作为输入来启动 B (例如：异步获取用户 ID -> 使用该 ID 异步获取用户详情)。
    - `thenApply` 的局限：如果传递给 `thenApply` 的函数本身返回一个 `CompletableFuture`（代表异步操作 B），会导致结果嵌套，如 `CompletableFuture<CompletableFuture<ResultB>>`，处理起来不方便。

2.  解决方案：`thenCompose()` 方法

    - 目的：专门用于链接结果依赖且后续步骤本身也是异步的操作，并“扁平化”结果。
    - 签名：`CompletableFuture<U> thenCompose(Function<? super T, ? extends CompletionStage<U>> fn)`
    - 工作机制：
        - 输入函数 (`fn`): 接收前一阶段 `CompletableFuture<T>` 的成功结果 `T`。
        - 函数返回值: `fn` 的核心任务是根据输入 `T` 来启动下一个异步操作，并返回代表这个新异步操作的 `CompletionStage<U>` (通常是 `CompletableFuture<U>`)。
        - 执行流程: 当 `CompletableFuture<T>` 成功完成时，其结果 `T` 被传递给 `fn`。`fn` 执行后返回 `CompletionStage<U>` (通常是 `CompletableFuture<U>`)。
        - 结果扁平化: `thenCompose` 不会直接返回 `CompletionStage<U>`，而是返回一个新的 `CompletableFuture<U>`，这个新的 Future 会在 `fn` 返回的 `CompletionStage<U>` 完成时，以其结果或异常来完成。

3.  `thenCompose` vs `thenApply`

    - `thenApply(Function<T, U> fn)`: 用于**同步**转换。当 `fn` 返回一个普通值 `U` 时使用。
    - `thenCompose(Function<T, CompletionStage<U>> fn)`: 用于**异步**链接。当 `fn` 返回一个 `CompletionStage<U>` (即下一个异步操作) 时使用。

4.  构建声明式异步流 (Declarative Asynchronous Flow)

    - 链式调用：`thenCompose` 使得可以像编写同步代码一样，清晰地表达异步任务间的顺序依赖关系。
    - 避免嵌套：有效防止 `CompletableFuture` 嵌套，保持代码结构扁平易读。
    - 返回新 Future：同样返回一个新的 `CompletableFuture`，代表整个组合操作链的最终结果，可以继续链接其他操作（如 `thenApply`, `thenAccept`, `exceptionally`）。

5.  最佳实践：封装与引用 (Encapsulation & Method References)
    - 封装异步逻辑：将独立的异步步骤封装成返回 `CompletableFuture` 的方法（遵循 `...Async` 命名约定）。
    - 使用方法引用：在 `thenCompose` 中使用方法引用（如 `this::getNextAsyncTaskAsync`）可以显著提高代码的简洁性和可读性。

**代码示例**

1.  使用 `thenCompose` 和 Lambda 表达式链接依赖任务

    ```java
    public class ExecutorsDemo {
        // Step1：模拟远程/数据库调用，返回 userId
        private static CompletableFuture<String> fetchUserId() {
            return CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(1);
                System.out.println("[fetchUserId] got id = 001");
                return "001";
            });
        }

        // Step2：根据 userId 再查邮箱
        private static CompletableFuture<String> fetchEmailById(String id) {
            return CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(2);
                String email = id + "@example.com";
                System.out.println("[fetchEmailById] id = " + id + ", email = " + email);
                return email;
            });
        }

        public static void show() {

            CompletableFuture<Void> pipeline = fetchUserId()
                    .thenCompose(ExecutorsDemo::fetchEmailById)
                    .thenAccept(email -> System.out.println("[show] id = " + email))
                    .exceptionally(ex -> {                   // 统一兜底
                        System.err.println("Pipeline failed: " + ex);
                        return null;
                    });

            pipeline.join();
        }
    }
    ```

    - 描述：首先异步获取用户 `id`，然后使用 `thenCompose`，在其 Lambda 表达式中接收到 id 后，调用 `CompletableFuture` 来启动第二个依赖的异步任务。`thenCompose` 返回代表 `Email` 结果的 `Future`，通过 `thenAccept` 消费最终结果。

## thenCombine

> 简述：`CompletableFuture` 允许并发地执行多个相互独立的异步任务，并在它们全部成功完成后，将各自的结果合并成一个最终结果。核心方法 `thenCombine` 提供了一种非阻塞的方式来协调这种并行执行和结果汇总。

**知识树**

1.  核心场景：并行任务与结果合并

    - 定义：需要同时启动多个不互相依赖（启动时）的异步操作，并等待所有这些操作都成功完成后，利用它们的各自结果来计算一个汇总值。（例如：并行获取产品价格和汇率，然后计算最终价格）。
    - 区别于 `thenCompose`：
        - `thenCombine`的任务是独立的，可以并发启动；
        - `thenCompose` 处理的是依赖任务，后一个任务依赖前一个的结果才能启动。

2.  主要合并方法：`thenCombine()`

    - 签名：`CompletableFuture<V> thenCombine(CompletionStage<? extends U> other, BiFunction<? super T,? super U,? extends V> fn)`
    - 目的：将当前 `CompletableFuture<T>` 的成功结果 `T` 与另一个独立的 `CompletionStage<U>` (即 `other` Future) 的成功结果 `U` 进行合并。
    - 输入参数：
        - `other`: 代表第二个独立异步任务的 `CompletionStage`。
        - `fn`: 一个 `BiFunction`。当两个 Future 都成功完成时，该函数会接收第一个 Future 的结果 `T` 和第二个 Future (`other`) 的结果 `U` 作为输入，并计算返回一个合并后的结果 `V`。
    - 执行流程：
        - `thenCombine` 非阻塞地等待调用它的 Future (`this`) 和传入的 `other` Future 都成功完成。这两个 Future 的执行是并发的（如果线程池资源允许）。
        - 一旦两者都成功完成，将它们各自的结果 (`T` 和 `U`) 传递给 `BiFunction fn`。
        - `fn` 执行计算，其返回值 `V` 成为 `thenCombine` 返回的新 Future 的成功结果。

**代码示例**

1.  使用 `thenCombine` 合并两个简单的异步结果

    ```java
    public class ExecutorsDemo {
        public static void show() {
            // 第一个任务：拿到美元数额
            var getCount = CompletableFuture
                    .supplyAsync(() -> {
                        LongTask.simulate(2);
                        return 20;
                    });
            // 第二个任务：拿到汇率
            var second = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(3);
                return 0.9;
            });

            CompletableFuture<Void> calc = getCount
                    .thenCombine(second, (price, exchange) -> price * exchange)
                    .thenAccept(System.out::println)
                    .exceptionally(ex -> {                   // 统一兜底
                        System.err.println("calc failed: " + ex);
                        return null;
                    });

            // 为了演示创建的 future
            calc.join();
        }
    }
    ```

    - 描述：并发启动获取价格和汇率两个异步任务。使用 `thenCombine` 等待两者都完成后，通过 `BiFunction` 将两个数字结果相乘，得到最终的欧元价格，并通过 `thenAccept` 打印。

## allOf

> 简述：`CompletableFuture.allOf` 是一个静态辅助方法，用于创建一个聚合的 `CompletableFuture`，该 Future 会在所有指定的一组独立 `CompletableFuture` 任务都执行完毕（无论是成功还是出现异常）之后才标记为完成。这提供了一种协调机制，以确保一组并行任务全部结束后再执行特定逻辑。

**知识树**

1.  核心场景：等待一组任务全部结束

    - 需求：需要确保多个并行、独立的异步操作都已经执行完成，然后才能进行下一步的操作（例如：并行下载多个文件后，进行文件合并或状态更新）。

2.  解决方案：`CompletableFuture.allOf()` 静态方法

    - 签名：`public static CompletableFuture<Void> allOf(CompletableFuture<?>... cfs)`
    - 输入：接收一个或多个 `CompletableFuture` 对象作为可变参数 (`varargs`)。
    - 行为：
        - 并发执行：传入的多个 `CompletableFuture` 任务会并发执行（受限于线程池资源）。
        - 聚合完成状态：`allOf` 方法返回一个新的 `CompletableFuture<Void>`。这个新的 Future 只有在所有传入的 `cfs` 参数代表的 Future 都进入完成状态（包括成功完成或异常完成）时，它才会完成。

3.  返回类型 `CompletableFuture<Void>` 解析

    - 原因：传入 `allOf` 的各个 `CompletableFuture` 可能具有不同的泛型结果类型（例如，一个返回 `String`，一个返回 `Integer`）。`allOf` 本身不负责合并或提供这些异构结果，它的核心职责是同步这一组任务的整体完成事件。因此，其自身的逻辑结果是 `Void`（无特定值）。

4.  获取原始任务结果

    - 时机保证：当 `allOf` 返回的 `CompletableFuture<Void>` 完成时（即 `thenRun` 的回调被触发时），可以确信所有传递给 `allOf` 的原始 `CompletableFuture` 也都已经完成了。
    - 非阻塞获取：此时，在 `thenRun` 的回调内部，调用原始 Future（例如 `firstFuture`, `secondFuture`）的 `get()` 或 `join()` 方法来获取它们各自的结果，将不会阻塞，因为结果已经就绪。
    - 异常处理：尽管 `get()` 此时不阻塞等待，但仍需使用 `try-catch` 包裹，因为它仍然可能抛出 `ExecutionException`（如果对应的原始 Future 是异常完成的）或 `InterruptedException`。

**代码示例**

1.  使用 `allOf` 等待多个任务完成并执行后续动作

    ```java
    public class ExecutorsDemo {
        public static void show() {
            System.out.println("Starting multiple async tasks...");

            CompletableFuture<Integer> task1 = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(1);
                return 1;
            });

            CompletableFuture<String> task2 = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(2);
                return "Task2 Result";
            });

            CompletableFuture<Void> task3 = CompletableFuture.runAsync(() -> {
                LongTask.simulate(3);
                System.out.println("Task 3 finished.");
            });

            // 等待 task1, task2, task3 全部完成
            CompletableFuture<Void> allDoneFuture = CompletableFuture.allOf(task1, task2, task3);

            // 当 allDoneFuture 完成时 (即所有任务都完成时)，执行 thenRun 中的代码
            allDoneFuture.thenRun(() -> {
                try {
                    var result1 = task1.get();
                    System.out.println(result1);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                } catch (ExecutionException e) {
                    throw new RuntimeException(e);
                }

                System.out.println(">>> All tasks completed successfully (or exceptionally). Subsequent action triggered.");
            });


            allDoneFuture.join();
        }
    }
    ```

    - 描述：创建了三个不同类型的异步任务。`CompletableFuture.allOf` 用于等待（3 秒）这三个任务全部结束。当它们都结束后，`thenRun` 中的消息被打印出来。

## anyOf

> 简述：`CompletableFuture.anyOf` 是一个静态辅助方法，用于处理一组并发执行的异步任务，并获取其中最先成功完成的那个任务的结果。这适用于需要从多个来源获取信息（如调用多个不同的服务）并希望采用最快响应结果的场景。

**知识树**

1.  核心场景：竞速任务与最快响应

    - 需求：同时启动多个异步操作（通常它们的目标相似或可互换），并希望在**任何一个**操作成功完成后立即获得其结果，而无需等待其他可能较慢的操作。
    - 例子：调用两个不同的天气服务 API，使用先返回结果的那个。

2.  解决方案：`CompletableFuture.anyOf()` 静态方法

    - 签名：`public static CompletableFuture<Object> anyOf(CompletableFuture<?>... cfs)`
    - 输入：接收一个或多个 `CompletableFuture` 对象作为可变参数 (`varargs`)。
    - 行为：
        - 并发启动：所有传入的 `CompletableFuture` 会并发开始执行（受限于线程池资源）。
        - 等待首个成功：`anyOf` 方法返回一个新的 `CompletableFuture<Object>`。这个新的 Future 会在传入的 `cfs` 中任何一个 Future 首次成功完成时，也立即成功完成。
        - 结果传递：`anyOf` 返回的 Future 的结果值与那个最先成功完成的原始 Future 的结果值相同。
        - 异常情况：如果第一个完成的 Future 是异常完成，`anyOf` 通常会继续等待下一个完成的 Future。只有当所有传入的 Future 都异常完成时，`anyOf` 返回的 Future 才会异常完成。（主要关注成功路径）

3.  返回类型 `CompletableFuture<Object>` 解析

    - 原因：由于传入 `anyOf` 的多个 `CompletableFuture` 可能具有不同的泛型结果类型，并且在编译时无法确定哪一个会最先成功完成，因此 `anyOf` 返回的 Future 的结果类型被泛化为 `Object`。
    - 后续处理：在消费 `anyOf` 的结果时（例如在 `thenAccept` 中），可能需要根据预期的结果类型进行类型转换 (cast)。

**代码示例**

1.  使用 `anyOf` 获取两个竞速任务中较快的结果

    ```java
    public class ExecutorsDemo {
        public static void show() {
            var first = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(10);
                return 19;
            });

            var second = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate(1);
                return 20;
            });

            CompletableFuture
                    .anyOf(first, second)
                    .thenAccept(temp -> System.out.println(temp))
                    .join();


        }
    }
    ```

    - 描述：创建了两个模拟不同响应时间的异步服务。`CompletableFuture.anyOf` 用于同时监听这两个服务。由于 `second` 会先完成，`anyOf` 返回的 Future 会以 `second` 的结果来完成，并触发 `thenAccept` 打印该结果，而无需等待 `first` 完成。

## CompletableFuture 超时

> 简述：`CompletableFuture` 提供了内置方法来为异步操作设置超时限制。这使得开发者可以优雅地处理任务执行时间过长的情况，可以选择在超时后让任务失败并抛出异常 (`orTimeout`)，或者让任务成功完成并返回一个预设的默认值 (`completeOnTimeout`)。Java 9 及以上版本可用。

**知识树**

1.  核心需求：限制异步操作时长

    - 场景：调用外部服务、执行复杂计算或其他可能耗时不确定的异步任务时，需要设定一个最大等待时间，避免无限期等待。

2.  超时即异常：`orTimeout()` 方法

    - 签名：`public CompletableFuture<T> orTimeout(long timeout, TimeUnit unit)`
    - **可用性**: Java 9 及以上版本。
    - 目的：为 `CompletableFuture` 设置一个超时时间。如果在指定时间内未能完成（无论是成功还是异常），则强制使其**异常完成**。
    - 行为：
        - **未超时**: 如果原始 Future 在 `timeout` 内完成，则 `orTimeout` 返回的 Future 以相同的结果或异常完成。
        - **超时**: 如果在 `timeout` 到期时原始 Future 仍未完成，则 `orTimeout` 返回的 Future 会以 `TimeoutException` **异常完成**。后续若调用 `get()`，会抛出 `ExecutionException`，其 `cause` 为 `TimeoutException`。
    - 返回值：返回一个新的 `CompletableFuture` 实例。
    - 适用：适用于超时后应视为操作失败的场景。

3.  **超时即默认值：`completeOnTimeout()` 方法**

    - 签名：`public CompletableFuture<T> completeOnTimeout(T value, long timeout, TimeUnit unit)`
    - **可用性**: Java 9 及以上版本。
    - 目的：为 `CompletableFuture` 设置一个超时时间。如果在指定时间内未能完成，则强制使其**成功完成**并使用提供的**默认值**。
    - 行为：
        - **未超时**: 如果原始 Future 在 `timeout` 内完成，则 `completeOnTimeout` 返回的 Future 以相同的结果或异常完成。
        - **超时**: 如果在 `timeout` 到期时原始 Future 仍未完成，则 `completeOnTimeout` 返回的 Future 会以给定的 `value` **成功完成**。后续调用 `get()` 会直接返回这个 `value`。
    - 返回值：返回一个新的 `CompletableFuture` 实例。
    - 适用：适用于超时后希望提供一个后备（fallback）或默认结果，以维持程序流程或提供更平滑用户体验的场景。

4.  **选择考量 (Choosing Between Methods)**

    - `orTimeout`: 当超时必须被视为错误处理时使用。
    - `completeOnTimeout`: 当超时后提供默认值是可接受的、更友好的处理方式时使用。

**代码示例**

1.  使用 `orTimeout` 在超时后触发异常

    ```java
    public class ExecutorsDemo {
        public static void show() {
            var slowTask = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate();
                return 1;
            });
            try {
                var result = future
                        .orTimeout(1, TimeUnit.SECONDS)
                        .get();
    			System.out.println(result);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：`slowTask` 需要 3 秒完成，但 `orTimeout` 设置了 1 秒的限制。因此，在调用 `get()` 时，会因为超时而捕获到 `ExecutionException`，其内部原因 (`cause`) 是 `TimeoutException`。

2.  使用 `completeOnTimeout` 在超时后返回默认值

    ```java
    public class ExecutorsDemo {
        public static void show() {
            var future = CompletableFuture.supplyAsync(() -> {
                LongTask.simulate();
                return 1;
            });
            try {
                var result = future
                        .completeOnTimeout(-1, 1, TimeUnit.SECONDS)
                        .get();
                System.out.println(result);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
    }
    ```

    - 描述：同样是 3 秒的任务和 1 秒的超时。这次使用 `completeOnTimeout` 并指定默认值为 -1。因为任务超时，`futureWithTimeout` 会在 1 秒后成功完成，并且 `get()` 调用会返回预设的默认值 -1，而不是抛出异常。

## Ex: 同步查找最便宜航班

> **要求**：
> 编写一个程序，异步向多个航班代理网站查询报价，实时打印各网站返回的报价，并在所有查询完成后打印总耗时。

> **解法**：
>
> 1. 定义 `Quote` 类，包含不可变的 `site` 和 `price` 两个字段，通过构造器初始化，并重写 `toString()` 便于打印。
> 2. 在 `FlightService` 中：
>
>     - 实现 `CompletableFuture<Quote> getQuote(String site)`，使用 `CompletableFuture.supplyAsync` 进行异步调用，内部模拟 1–3 秒随机延迟，然后返回一个 `Quote` 对象。
>     - 实现 `Stream<CompletableFuture<Quote>> getQuotes()`，通过一个站点列表 `.stream()` 调用 `getQuote` 并返回未来对象流。
>
> 3. 在 `Demo` 类中：
>
>     1. 记录查询开始时间。
>     2. 调用 `getQuotes()`，收集为 `List<CompletableFuture<Quote>>`，并对每个未来对象注册 `thenAccept(System.out::println)`，以在结果到达时实时打印。
>     3. 使用 `CompletableFuture.allOf(...)` 等待所有查询完成 (`join()`)，然后记录结束时间、计算 `Duration` 并打印总耗时。

**代码**

1. 定义 `Quote` 类

```java
public class Quote {
    private final String siteName;
    private final int price;

    public Quote(String siteName, int price) {
        this.siteName = siteName;
        this.price = price;
    }

    public String getSiteName() {
        return siteName;
    }

    public int getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Quote{" +
                "siteName='" + siteName + '\'' +
                ", price=" + price +
                '}';
    }
}
```

2. 定义 `FlightService` 类

```java
public class FlightService {

    public Stream<CompletableFuture<Quote>> getQuotes(List<String> sites) {
        return sites.stream().map(this::getQuote);
    }

    public CompletableFuture<Quote> getQuote(String siteName) {
        return CompletableFuture.supplyAsync(() -> {
            System.out.println("Getting a quote from " + siteName);

            var random = new Random();
            // 模拟任务耗时
            LongTask.simulate(random.nextInt(3));
            // 模拟获取到的价格
            var price = 100 + random.nextInt(10);
            return new Quote(siteName, price);
        });
    }
}

```

3. 在 `ExecutorsDemo` 中调用 `FlightService`

```java
public class ExecutorsDemo {
    public static void show() {

        var sites = List.of("site1", "site2", "site3");

        var start = LocalTime.now();
        var service = new FlightService();
        var futures = service.getQuotes(sites)
                .map(future -> future.thenAccept(System.out::println))
                .collect(Collectors.toList());

        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                .thenRun(() -> {
                    var end = LocalTime.now();
                    var duration = Duration.between(start, end);
                    System.out.println("Retrieved all quotes in " + duration.toMillis() + " ms");
                });

        try {
            Thread.sleep(5_000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
```
