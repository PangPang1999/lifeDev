# 快捷键

    - control+R 运行程序
    - psvm 输出语句
    - shift+F6（额外按住左下角的🌍）同步修改多个语句

# Start

## 开发环境

> 简述：搭建 Java 开发环境需安装 JDK（推荐 JDK8）和 IDEA，配置环境变量后进行验证。

**知识树**

1. 安装 Java（JDK8）
    - 使用 Homebrew 安装 JDK：
        ```bash
        brew install --cask zulu@8
        ```
    - 配置 Java 环境变量，host 目录下，在`.zprofile` 中添加以下代码
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
        - Windows 路径含有`\`，需用`\\`表示。
    - 字符串内引号：
        - 双引号需用`\"`表示。

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
    - 固定长度，创建后不能动态增减，若需要动态增减，则使用 Collection 集合（后续将讲到）
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
    - 说明：说明数组变量保存的是数组对象的地址，相同赋值时地址一致。
3. 数组打印
    ```java
    int[] numbers = new int[10]; // 声明一个长度为 10 的数组
    numbers[0] = 1;
    numbers[1] = 2;
    // 使用 Arrays.toString 打印实际内容，未赋值的元素默认值为0
    System.out.println(Arrays.toString(numbers));
    ```
    - 说明：直接打印数组对象只会显示内存地址，使用 Arrays.toString 才能直观显示数组内容。
4. 数组的基本方法
    ```java
    int[] numbers = {8, 3, 5, 1, 9};
    System.out.println("原数组: " + Arrays.toString(numbers));
    Arrays.sort(numbers); // 对数组排序，方法重载适用于不同类型的数组
    System.out.println("排序后: " + Arrays.toString(numbers));
    // 获取数组长度
    System.out.println("数组长度: " + numbers.length);
    ```
    - 说明：展示直接初始化、数组排序、以及使用 length 属性获取数组长度的示例。

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
    - 一经赋值，不允许后续修改
    - 修改常量会产生编译错误，确保数据一致性
4. 实际应用
    - 用于数学常数、配置参数等场景
    - 提高代码可读性和维护性

**代码示例**

1. 常量声明与使用

    ```java
    final float PI = 3.14F;
    // PI = 3.1415F; // 编译错误：无法修改 final 常量
    float area = PI * 2 * 2; // 使用常量 PI 计算圆面积
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
    - 括号具有最高优先级，可强制先计算括号内表达式
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
    - 适用于从较小类型转换到较大类型（如 short → int、int → long、int → double）
    - 原因：不会丢失数据或精度

2. 显式转换

    - 手动指定转换，使用括号语法，如 `(目标类型)变量`
    - 用于可能丢失数据或精度的转换（例如 double → int）
    - 程序员必须确认转换安全，否则可能出现数据截断

3. 数字与字符串转换

    - 字符串转换为数字：利用包装类方法，如 `Integer.parseInt(字符串)`、`Double.parseDouble(字符串)`
    - 数字转换为字符串：使用 `String.valueOf(数字)` 或 `"" + 数字`
    - 注意：直接转换不兼容类型会抛出异常

4. 转换原则

    - 自动转换在不引起数据损失时优先使用
    - 强制转换需明确风险，确保类型兼容性（只适用于数值类型之间）
    - 对于用户输入数据，经常需要将字符串解析为数值类型进行运算

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
    System.out.println(y);// 3.1

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
    - 静态方法：无需实例化，直接调用

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

1. NumberFormat 类概述

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
    result = currencyPercent.format(0.1);
    System.out.println(result);// 10%

    // 链式编程
    result = NumberFormat.getPercentInstance().format(0.99);
    System.out.println(result);
    ```

## 用户输入与 Scanner

> 简述：Scanner 类用于读取用户输入数据，可指定输入源（如终端、文件等），并提供多种读取方法（如 next()、nextLine()、nextInt() 等）来获取不同类型的数据，同时可利用 trim() 方法清理多余空白。

**知识树**

1. Scanner 类概述

    - 定义在 java.util 包中
    - 用于从各种输入源（如 System.in、文件）读取数据

2. 输入源的指定

    - 构造方法中传入输入流（如 System.in）
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
