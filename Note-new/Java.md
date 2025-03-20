## 新特性

- var——JDK10
    - 自动推断变量类型，避免显式声明数据类型，使代码更简洁。
    - 仅用于局部变量（方法内部），不能用于字段、方法参数或返回值。
- List.of()——JDK9
    - 快速创建不可变列表（列表内容不能修改）。
    - 避免 Arrays.asList() 的缺陷（Arrays.asList() 允许修改元素，但不能调整大小）。
    - 比 new ArrayList<>() 代码更简洁。

# 快捷键

    - control+R 运行程序
    - control+D 调试程序
    - Commond+D 复制粘贴所在行
    - psvm 输出语句
    - shift+F6（额外按住左下角的🌍）同步修改多个语句
    - Commond+option+M 提取方法（强👍）： 选取代码——置顶菜单 Refactor——Extract/Introduce——Method

# Note

需要补充：

- ~~字符串池、变量作用域~~

# Start

## 开发环境

> 简述：搭建 Java 开发环境需安装 JDK 和 IDEA，配置环境变量后进行验证。

**知识树**

1. 安装 Java（JDK8/17）课程使用的是 JDK12 `brew install --cask zulu@17`

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

2. Main 方法

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

3. 作用域

    - 变量只能在声明时所在的`{}`（及子括号）内使用

4. 变量值的修改与复制

    - 修改变量值：可重新赋值
    - 变量间赋值：复制变量值

5. 命名规范

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

## Ex: 抵押贷款计算器

> **要求**：  
> 编写一个程序，要求用户输入贷款本金、年利率及贷款年限，然后计算出每月还款金额，并以货币格式显示。计算前了解贷款计算方式：https://www.wikihow.com/Calculate-Mortgage-Payments
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
>
> **扩展建议**
>
> -   添加输入验证，确保用户输入有效数据，防止程序因非法输入崩溃。
> -   在后续章节中介绍条件语句，利用条件判断完善输入验证逻辑。

**代码**

- 代码示例：

    ```js
    final byte MONTHS_IN_YEAR = 12;
    final byte PERCENTAGE = 100;

    Scanner scanner = new Scanner(System.in);

    System.out.print("Principal: ");
    int principal = scanner.nextInt();// 数额

    System.out.print("Annual Interest Rate:");
    float annualInterestRate = scanner.nextFloat() / PERCENTAGE;// 利率
    float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR;
    System.out.print("Period(Years):");
    byte periodYear = scanner.nextByte();// 分期年数
    int periodMonth = periodYear * MONTHS_IN_YEAR;


    double monthlyMortgage = principal
    		* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    		/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);

    System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
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

2. 字符串池

    - Java 自动维护的内存区域，用于存储常量字符串
    - 相同字面量自动共享对象（引用地址）

3. 字符串池使用场景

    - 应用于缓存、日志、数据库查询结果等，降低内存开销
    - 重复字符串可调用 `intern()` 共享对象
    - 注意：过度使用 intern() 可能引起内存不足（**OutOfMemoryError**）

4. `==` 与 `equals()` 区别

    - `==` 检查是否为同一对象引用
    - `equals()` 检查对象内容是否相同

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
    System.out.println(a == b); // true: 同一常量池对象
    System.out.println(a == c); // false: c 为新对象

    String m = "hello" + " world";
    String n = "hello world";
    System.out.println(m == n); // true: 编译器优化，结果为常量

    String s1 = "hello";
    String s2 = " world";
    String s3 = s1 + s2;
    String s4 = "hello world";
    System.out.println(s3 == s4); // false: 动态拼接生成新对象

    String x = "hello";
    String y = new String("hello").intern(); // 手动加入字符串池
    System.out.println(x == y); // true: y 经 intern() 后与 x 相同
    ```

    - 说明：演示字符串池机制及 intern() 方法的作用，使动态生成的字符串共享常量池对象。

## 逻辑运算符

> 简述：逻辑运算符用于组合多个布尔表达式，生成一个整体的布尔结果。它们包括与、或、非，并支持短路求值，常用于条件判断和流程控制。

**知识树**

1. 逻辑运算符概念

    - 用于组合或反转布尔表达式，输出 true 或 false

2. 基本逻辑运算符

    - 与（AND）：`&&`（或 `&`），所有条件为 true 时返回 true‘
    - 或（OR）：`||`（或 `|`），至少一个条件为 true 时返回 true
    - 非（NOT）：`!`，反转布尔值

3. 运算顺序与短路求值

    - 短路求值：
        - `&&`：当第一个表达式为 false 时，不再计算后续条件， `&`计算所有条件
        - `||`：当第一个表达式为 true 时，不再计算后续条件，`|`计算所有条件
    - 使用括号明确运算顺序，避免逻辑混淆

4. 实际应用
    - 用于实现复杂逻辑判断，如权限验证、贷款资格评估等
    - 通过合理命名和组合表达式，提高代码可读性和维护性

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

> 简述：if 语句根据条件判断控制程序流程，支持多分支（`if`、`else if`、`else`）来执行不同代码块，便于处理多种情形。

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

4. 格式与层级
    - `if`、`else if`、`else` 应处于同一缩进层级，保持代码整洁

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

> 简述：通过合理的变量声明与布尔表达式赋值，可以简化 if 语句结构，消除冗余的条件分支，提高代码的清晰度和可维护性。

**知识树**

1. 变量作用域与声明

    - 变量必须在代码块内声明，作用域仅限于其所在块
    - 避免在 if 块中声明临时变量后，试图在外部使用

2. if 语句冗余问题

    - 使用 if-else 分支设置布尔变量往往过于冗长
    - 初始值设定可避免不必要的 else 分支

3. 直接赋值技巧

    - 将布尔表达式直接赋值给变量，简化逻辑
    - 表达式用括号包裹提高可读性

**代码示例**

1. 变量作用域错误示例

    ```java
    // 错误示例：变量在 if 块内声明，外部无法访问
    if (income > 100_000) {
        boolean hasHighIncome = true;
    }
    System.out.println(hasHighIncome); // 编译错误：无法解析符号 hasHighIncome
    ```

    - 说明：展示变量声明在局部代码块内导致的作用域问题。

2. if 语句冗余问题

    ```java
    int income = 120_000;
    boolean hasHighIncome;
    if (income > 100_000)
    	hasHighIncome = true;
    else
    	hasHighIncome = false;
    System.out.println(hasHighIncome);
    ```

3. 简化 if 语句的优化示例

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
>
> **代码**

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

4. 应用场景

    - 用户交互：如持续提示输入直至获得特定响应
    - 初始化操作：在条件判断前需要先执行一次的逻辑

**代码示例**

1. 用户输入示例

    ```java
    Scanner scanner = new Scanner(System.in);  // 在循环外创建 Scanner 对象
    String input = "quit";// 即便input一开始就是quit，也会执行一遍
    do {
    	System.out.print("请输入内容（输入 quit 退出）：");
    	input = scanner.next();  // 读取单个ω token
    	// 输出用户输入（echo）
    	System.out.println("你输入了: " + input);
    } while (!input.toLowerCase().equals("quit"));
    scanner.close();
    ```

    - 说明：通过 `do while` 循环确保用户至少输入一次内容，使用 `toLowerCase()` 和 `trim()` 统一输入格式，直到用户输入 "quit" 时退出。

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

5. 实际应用

    - 常用于数据遍历、集合迭代和简单处理
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

## Ex: 贷款计算-带输入验证

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
    final byte MONTHS_IN_YEAR = 12;
    final byte PERCENTAGE = 100;

    int principal = 0;
    float monthlyInterestRate = 0;
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
    	float annualInterestRate = scanner.nextFloat() / PERCENTAGE;// 利率
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
    		* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    		/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);

    System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
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

    - 访问修饰符：public、private 等决定可见性，pulic 意味着方法可以从 lclass 外部访问，具体用法后续讲解。
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

## 提取方法 1（贷款计算）

> 简述：提取上一节练习中的计算方法

**代码**

- 代码示例

    ```java
    public static void main(String[] args) {

    	int principal = 0;
    	float annualInterestRate = 0;
    	byte periodYear = 0;

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
    		annualInterestRate = scanner.nextFloat();// 利率
    		if (annualInterestRate >= 0 && annualInterestRate <= 30)
    			break;
    		System.out.print("Enter a value between 1 and 30");

    	}

    	while (true) {
    		System.out.print("Period(Years):");
    		periodYear = scanner.nextByte();// 分期年数
    		if (periodYear >= 0 && periodYear <= 30)
    			break;
    		System.out.print("Enter a value between 1 and 30");
    	}

    	double monthlyMortgage = caculateMortgage(principal, annualInterestRate, periodYear);

    	String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);
    	System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
    }

    public static double caculateMortgage(
    		int principal,
    		float annualInterestRate,
    		byte periodYear) {

    	final byte MONTHS_IN_YEAR = 12;
    	final byte PERCENTAGE = 100;

    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double monthlyMortgage = principal
    			* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return monthlyMortgage;
    }
    ```

## 提取方法 2（贷款计算）

> 简述：提取上一节练习中的读取方法

**代码**

- 代码示例

    ```java
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
    		value = scanner.nextFloat();
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

    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double monthlyMortgage = principal
    			* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return monthlyMortgage;
    }
    ```

## Ex: 贷款计算-含还款计划

> **要求**：扩展抵押贷款计算器，实现如下功能：
>
> -   用户输入贷款本金、年利率和贷款年限；
> -   计算并输出月还款额；
> -   输出每个月还款后剩余本金（还款计划）。
> -   计算公式：balance = principal \* ((1 + r)^n - (1 + r)^p) / ((1 + r)^n - 1)
>
> **示例**：
>
> -   输入本金 180000，年利率 4，分期年数 10，最后计算出每月还款金额为 $1,822.41，最后一期还款金额为$1,816.36
>
> **解法**：
>
> 1. **重构计算逻辑**
>
>     - 提取月还款额计算到 `calculateMortgage` 方法；
>     - 提取剩余本金计算到 `calculateBalance` 方法，公式为
>         ```
>         balance = principal * ((1 + r)^n - (1 + r)^p) / ((1 + r)^n - 1)
>         ```
>         其中 r 为月利率，n 为总还款期数，p 为已付款次数。
>
> 2. **优化代码结构**
>     - 将常量（如 MONTHS_IN_YEAR、PERCENT）定义为类级别的静态字段；
>     - 抽取通用输入验证方法 `readNumber`，统一获取合法输入；
>     - 在 main 方法中调用各方法，依次输出月还款额及支付计划。

**代码**

- 代码示例

    ```java
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENTAGE = 100;

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
    	System.out.println("\nMortgage");
    	System.out.println("---------");
    	System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
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
    		value = scanner.nextFloat();
    		if (value >= min && value <= max) break;
    		System.out.print("Enter a value between " + min + " and " + max);
    	}
    	return value;
    }

    public static double caculateMortgage(
    		int principal,
    		float annualInterestRate,
    		byte periodYear) {

    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double monthlyMortgage = principal
    			* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return monthlyMortgage;
    }

    public static double caculateBalance(
    		int principal,
    		float annualInterestRate,
    		byte periodYear,
    		short paymentsMade) {


    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double banlance = principal *
    			(Math.pow((1 + monthlyInterestRate), periodMonth)
    					- Math.pow(1 + monthlyInterestRate, paymentsMade))
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return banlance;
    }
    ```

## 方法提取 Ex

> 简述：使用 IDEA 自带的方法提取工具，进一步优化代码结构
> 方式：Commond+option+M 提取方法：选取代码——置顶菜单 Refactor——Extract/Introduce——Method

**代码**

- 代码示例

    ```java
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENTAGE = 100;

    public static void main(String[] args) {

    	int principal = 0;
    	float annualInterestRate = 0;
    	byte periodYear = 0;

    	Scanner scanner = new Scanner(System.in);

    	principal = (int) readNumber("Principal: ", 1000, 1_000_000);
    	annualInterestRate = (float) readNumber("Annual Interest Rate: ", 1, 30);
    	periodYear = (byte) readNumber("Period Year: ", 1, 30);

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
    		value = scanner.nextFloat();
    		if (value >= min && value <= max) break;
    		System.out.print("Enter a value between " + min + " and " + max);
    	}
    	return value;
    }

    public static double caculateMortgage(
    		int principal,
    		float annualInterestRate,
    		byte periodYear) {

    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double monthlyMortgage = principal
    			* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return monthlyMortgage;
    }

    public static double caculateBalance(
    		int principal,
    		float annualInterestRate,
    		byte periodYear,
    		short paymentsMade) {


    	float monthlyInterestRate = 0;
    	int periodMonth = 0;

    	monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
    	periodMonth = periodYear * MONTHS_IN_YEAR;

    	double banlance = principal *
    			(Math.pow((1 + monthlyInterestRate), periodMonth)
    					- Math.pow(1 + monthlyInterestRate, paymentsMade))
    			/ (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

    	return banlance;
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

    private static void printNumbers(int limit) {
        for (int i = 0; i < limit; i += 2) {
            System.out.println(i);// 观察变量 i 的变化，确认循环执行逻辑
        }
    }
    ```

    - 说明：在 main 方法中设置断点后，当程序运行到断点时暂停，允许检查“Start”已输出，并准备逐步调试 printNumbers 方法。通过在循环内部使用 Step Over，可实时监控变量 i 的值和循环的执行情况，帮助发现只打印偶数或其他逻辑错误。
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

# OOP

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
    - 避免盲目推崇，注重实际问题解决能力。

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
    - 易于维护：对象间解耦，单个对象变化不会影响整体。
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

    - 默认值为 `null`
    - 初始化字段避免 `NullPointerException`导致程序崩溃
    - 对象中的字段存在默认值，而局部变量声明之后必须赋值才能使用

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
    - 未初始化的值调用方法
        ```java
        var textBox1 = new TextBox();// JDK10引入var
        System.out.println(textBox1.text.toUpperCase());// 程序崩溃：NullPointerException
        ```
    - 解决方式，修改 `TextBox.class`，将 `text`初始化为空字符串
        ```java
        public String text = ""; // Field
        ```

3. 多个对象实例的独立性

    ```java
    var textBox1 = new TextBox();
    textBox1.setText("Box 1");
    System.out.println(textBox1.text.toUpperCase());

    var textBox2 = new TextBox();
    textBox2.setText("Box 2");
    System.out.println(textBox2.text);
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

> 简述：本节比较过程式编程与面向对象编程的区别，通过员工工资计算示例展示了过程式代码的缺陷（如方法冗长、参数过多和代码耦合），以及如何通过面向对象技术实现模块化、可维护和易扩展的代码设计。

**知识树**

1. 过程式编程

    - 以过程（函数或方法）为中心，强调顺序执行
    - 代码集中在 main 方法中，易产生臃肿和参数过多的问题

2. 面向对象编程（OOP）

    - 以对象为基本单位，封装数据（状态）和行为（方法）
    - 强调模块化、重用性和可维护性，通过类的抽象管理复杂逻辑

3. 过程式编程的不足

    - Fat Main：主方法中充斥着大量逻辑代码
    - 参数过多：方法调用需要传入大量参数，降低可读性和重用性
    - Spaghetti Code：高度耦合、逻辑分散，维护和扩展困难

4. 面向对象的优势

    - 重构：通过封装将数据与方法绑定，降低耦合
    - 模块化：对象独立管理状态和行为，便于复用和扩展
    - 设计原则：如单一职责和开放封闭原则，提高系统健壮性

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

    private static int calculateWage(
            int baseSalary,
            int extraHours,
            int hourlyRate) {
        return baseSalary + extraHours * hourlyRate;
    }
    ```

    - 描述：
        - 代码本身没有技术错误
        - 功能扩展时 main 方法容易臃肿
        - 抽象出方法后仍可能面临大量参数的问题

## 封装

> 简述：封装（encapsulate）是面向对象编程的核心原则，通过将数据和操作数据的方法整合到同一单元（对象）中。

**知识树**

1. 封装概念

    - 定义：将对象状态（数据）与行为（方法）组合成一个独立单元。这是面向对象编程的第一个准则。

2. 封装实现

    - 将相关变量（字段）定义在类中
    - 将操作这些字段的方法封装在类内部

3. 封装优势

    - 降低耦合：数据与行为集中管理
    - 复用性高：独立类可移植到不同项目中

**代码示例**

4. 继续上一个实例（封装）

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

## 封装与 Getter/Setter

> 简述：利用 getter 和 setter 方法，可以在设置数据时进行验证，确保对象状态合法，同时提高代码的复用性和可维护性。

**知识树**

1. 数据验证与访问控制

    - 将关键字段声明为 private，字段只能在类内部直接访问，防止外部直接访问
    - 通过 setter 方法在赋值前进行数据验证（例如，baseSalary 必须为正数）

2. Getter 和 Setter 方法

    - Getter：用于读取私有字段的值
    - Setter：用于修改私有字段，并在设置时执行验证逻辑
    - 避免重复验证：验证方法写在类中，不必每一次调用类都额外写验证方法

3. 自动生成 Getter/Setter 技巧

    - 快捷 1：利用 IDE 快捷键（如 Command+N）快速生成代码
    - 快捷 2：右键点击你想封装的字段，选择 Refactor -> Encapsulate Fields，或者在主菜单中选择 Refactor -> Encapsulate Fields。

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
            if (hourlyRate <= 0)
                throw new IllegalArgumentException("HourlyRate cannot be 0 or less.");
            return hourlyRate;
        }

        public void setHourlyRate(int hourlyRate) {
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

    - 描述：展示如何在主方法中调用封装后的 Employee 类，通过 setter 设置数据，通过 getter 获取数据，同时调用 `calculateWage` 方法计算工资，体现封装提高了代码复用性和维护性。
