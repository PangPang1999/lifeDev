> PangPang2024 年 5 月 15 日起开始整理

# 基础

## 1.什么是程序

模拟现实世界，解决实际问题，而使用计算机编写的一系列有序的指令集合

## 2.Java 历史

Java 之父--詹姆斯·高斯林

## 3.Java 语言特点

1. 面向对象：贴近人类思维模式，模拟现实世界，解决实际问题
2. 简单性：自动内存管理机制，不容易造成内存溢出，简化流程处理，语意清晰
3. 跨平台：操作系统，服务器等，跨操作系统，用 windows 写的代码，可以在 linux 下执行

## 4.计算机执行机制

1. 方式一
   编译执行：将原文件编译成平台相关的机器码文件，一次编译，多次执行。
   特点概括：执行效率高，不可跨平台。
   源文件——>编译——>适用于不同平台的机器码文件——>在不同的操作系统运行
2. 方式二
   编译执行：将原文件交给不同的平台独有的解释器。
   特点概括：执行效率低，可以跨平台。
3. 方式三（Java）
   先编译，再解释：
   `.java`-->编译-->`.class`-->在不同的操作系统运行

## 5.jdk 名词解释

- JDK：开发工具箱（包含运行环境及相关类库）
- JRE：Java 运行环境（包含 JVM 及解释器）
- JVM：Java 虚拟机-用于执行代码的工具

## 6.类的阐述

1. 同一个源文件中可以写多个类，编译后，每个类都会产生独立的 class 文件
2. 一个类中只有一个主方法，每个类都可以有一个主方法
3. public 修饰的类叫公开类，要求类名必须与文件名要完全一致，一个源文件中只能有一个公开类

## 7.package 包

类似于文件夹，用于管理 java 文件及 class 文件

## 8.注释

单行注释：`//`
多行注释：`/*  */`
文档注释：`/** */`

## 9.标识符命名

**概念**：

1. 什么是标识符：在程序中可以自己命名的单词；（类名、变量名，方法名，包名）
2. 标识符组成：由字母，数字，`_`和`$`组成；但不能以数字开头，但不能是关键字和保留字(`const`,`goto`)
3. 关键字：在 java 程序中代表特定含义的单词；例如：`public`,`class`,`static`等
4. 保留字：系统保留下来的，现在没有使用，可能以后会使用的单词

的单词

**Java 标识符命名规则**：

1. 由字母、数字、下划线(`_`)和美元符号(`$`)组成。
2. 不能以数字开头。
3. 区分大小。
4. 长度无限制。
5. 不能是 Java 中的关键字和保留关键字。
6. 最好不用中文

**写法规范**：

1. 见名知意
2. 类名首字母大写，有多个单词组成，那么每个单词首字母也大写---大驼峰
3. 变量名和方法名单词全小写，有多个单词组成，那么后面的单词首字母大写---小驼峰
4. **包名全小写，可以使用`.`特殊符号拼接**
5. 常量全大写，且多个单词用`_`连接

## 10.变量

### 1.什么是变量？

**变量**是用于存储数据的命名内存区域。在程序运行过程中，变量的值可以改变。变量就像是一个“容器”，用于存放不同类型的数据。

### 2.变量的分类

#### 2.1 按照数据类型分类：

1. **基本数据类型变量**：存储基本类型的数据，如整数、浮点数、布尔值和字符。
2. **引用数据类型变量**：存储对象或数组的引用（类似于对象的“地址”）。

#### 2.2 按照变量声明的位置分类：

1. **局部变量**：在方法或代码块内声明，作用范围仅限于声明它的代码块或方法中。
2. **成员变量**：在类中声明，可以在整个类中使用。分为：
   - **实例变量**：不带`static`关键字，属于对象，每个对象有自己独立的实例变量。
   - **类变量**：带有`static`关键字，属于类本身，所有对象共享一个类变量。

### 3.变量的声明与初始化

在 Java 中，变量的初始化规则根据变量的类型有所不同：

- **局部变量**：在声明后，必须显式初始化后才能使用，否则编译器会报错。
- **成员变量（实例变量和类变量）**：即使没有显式初始化，Java 也会为其分配默认值，因此可以直接使用。

#### 声明格式

1. **声明变量**（声明后再赋值）：

   ```java
   double productPrice;  // 声明一个名为productPrice的浮点类型变量，表示商品价格
   productPrice = 99.99;  // 给变量productPrice赋值为99.99元
   ```

2. **声明并初始化**（声明的同时赋值）：

   ```java
   int stock = 500;  // 声明并赋值变量stock，表示商品库存数量
   ```

3. **同时声明多个变量**：

   ```java
   String productName = "Laptop", category = "Electronics";  // 同时声明并赋值商品名称和类别
   ```

### 4.变量的作用域

作用域指变量在程序中的可见范围。

- **局部变量的作用域**：仅在方法或代码块中有效。方法结束后，局部变量不再存在。

  ```java
  public void calculateTotalPrice() {
      double discount = 0.1;  // 局部变量，只能在calculateTotalPrice方法中使用
      double totalPrice = productPrice * (1 - discount);  // 计算折后价格
      System.out.println("Total Price: " + totalPrice);  // 可以访问discount和totalPrice
  }
  ```

- **实例变量的作用域**：可以在类的所有方法中使用，每个对象有独立的实例变量。

  ```java
  public class Product {
      String productName;  // 实例变量，属于对象

      public void displayProductName() {
          System.out.println(productName);  // 可以访问实例变量productName
      }
  }
  ```

- **类变量的作用域**：在类的所有方法中都有效，且通过类名可以直接访问，无需实例化对象。

  ```java
  public class Product {
      static int totalStock = 1000;  // 类变量，表示所有产品的总库存

      public static void displayTotalStock() {
          System.out.println("Total Stock: " + totalStock);  // 可以访问类变量totalStock
      }
  }
  ```

### 5.对象与实例变量

**对象**是从类创建的一个实例。每个对象有自己独立的实例变量。创建对象时，实例变量会被初始化，使用对象可以访问这些变量。

```java
public class Product {
    String productName;  // 实例变量

    // 构造方法，用于初始化对象
    public Product(String productName) {
        this.productName = productName;  // 给实例变量赋值
    }

    public void displayProductName() {
        System.out.println("Product Name: " + productName);  // 打印该对象的productName
    }

    public static void main(String[] args) {
        // 创建两个不同的Product对象
        Product product1 = new Product("Laptop");
        Product product2 = new Product("Smartphone");

        // 每个对象都有自己的productName值
        product1.displayProductName();  // 输出: Product Name: Laptop
        product2.displayProductName();  // 输出: Product Name: Smartphone
    }
}
```

### 6.变量的生命周期

- **局部变量**：在方法执行时创建，方法结束后销毁。
- **实例变量**：在对象创建时分配内存，垃圾回收器在对象不再使用时销毁实例变量。
- **类变量**：在类加载时初始化，类卸载时销毁。

### 7.变量命名规则与建议

#### 7.1 命名规则

1. 变量名必须以字母、下划线`_`或美元符号`$`开头，不能以数字开头。
2. 变量名不能使用 Java 的关键字（如`int`、`public`等）。
3. 变量名区分大小写，`myVar`和`myvar`是两个不同的变量。

#### 7.2 命名建议

1. **见名知意**：变量名应清晰反映变量的含义，例如`age`表示年龄，`height`表示高度。
2. **小驼峰命名法**：变量名遵循小驼峰命名法，第一个单词小写，后续单词首字母大写，如`studentName`。
3. **常量命名**：常量使用全大写字母，单词之间用下划线连接，例如`MAX_SIZE`。

### 8.变量的默认值

在 Java 中，不同类型的成员变量（实例变量和类变量）在没有被显式初始化时，会自动赋予默认值。局部变量没有默认值，必须在使用前手动初始化。

#### 8.1 基本数据类型的默认值：

- `byte`: `0`
- `short`: `0`
- `int`: `0`
- `long`: `0L`
- `float`: `0.0f`
- `double`: `0.0d`
- `char`: `'\u0000'`（字符类型的默认值是空字符，即 Unicode 码的 0）
- `boolean`: `false`

#### 8.2 引用数据类型的默认值：

- 所有引用类型（如数组、类、接口等）的默认值是`null`。

**示例代码**：

```java
public class DefaultValueDemo {
    // 实例变量
    byte byteVar;
    int intVar;
    double doubleVar;
    char charVar;
    boolean booleanVar;
    String strVar;  // 引用类型

    public void printDefaults() {
        System.out.println("byte默认值: " + byteVar);
        System.out.println("int默认值: " + intVar);
        System.out.println("double默认值: " + doubleVar);
        System.out.println("char默认值: " + charVar + " (空字符)");
        System.out.println("boolean默认值: " + booleanVar);
        System.out.println("String默认值: " + strVar);  // null
    }

    public static void main(String[] args) {
        DefaultValueDemo demo = new DefaultValueDemo();
        demo.printDefaults();  // 打印默认值
    }
}
```

输出结果：

```
byte默认值: 0
int默认值: 0
double默认值: 0.0
char默认值:  (空字符)
boolean默认值: false
String默认值: null
```

### 9.示例代码

```java
public class Demo {
    // 类变量
    static int classVar = 100;

    // 实例变量
    int instanceVar;

    // 构造方法：初始化实例变量
    public Demo(int value) {
        this.instanceVar = value;
    }

    public void printVars() {
        // 局部变量
        int localVar = 50;
        System.out.println("局部变量: " + localVar);
        System.out.println("实例变量: " + instanceVar);
        System.out.println("类变量: " + classVar);
    }

    public static void main(String[] args) {
        Demo demo1 = new Demo(200);  // 创建第一个对象，实例变量为200
        Demo demo2 = new Demo(300);  // 创建第二个对象，实例变量为300

        demo1.printVars();  // 输出：局部变量: 50，实例变量: 200，类变量: 100
        demo2.printVars();  // 输出：局部变量: 50，实例变量: 300，类变量: 100
    }
}
```

### 10.总结

1. **变量**是程序中用于存储数据的“容器”，可以在程序中存储和改变数据。
2. 根据不同的作用范围，变量可以分为局部变量、实例变量和类变量。
3. **实例变量**属于对象，每个对象有自己独立的实例变量，使用对象来访问这些变量。
4. **类变量**属于类，所有对象共享同一个类变量，且可以通过类名直接访问。
5. 变量的默认值与其数据类型有关，成员变量有默认值，而局部变量必须显式初始化。
6. 变量的声明、初始化、作用域和命名规则需要严格遵守，确保代码的可读性和可维护性。

## 11.数据类型

Java 是一种强类型语言，不同类型的数据在变量声明时要根据相应的数据类型进行约束。Java 的数据类型分为两类：基本数据类型和引用数据类型。以下详细介绍 Java 的四类基本数据类型：**整数类型**、**小数类型**、**布尔类型**、**字符类型**。

### 1.整数类型

整数类型用于存储不带小数点的数值。Java 中的整数类型有`byte`、`short`、`int`和`long`四种，它们分别占用不同的内存空间和表示不同范围的整数。

- **`byte`**：占用 1 个字节，取值范围是`-128`到`127`。
- **`short`**：占用 2 个字节，取值范围是`-32768`到`32767`。
- **`int`**：占用 4 个字节，取值范围是`-2147483648`到`2147483647`。
- **`long`**：占用 8 个字节，取值范围是`-9223372036854775808`到`9223372036854775807`。长整型数值需要在后面加上`L`或`l`作为后缀。

> **整数类型案例**：

```java
byte a = 5;  // 正确
byte b = 130;  // 错误：值超出了byte类型的范围，需要转为int类型
short c = 32768;  // 错误：值超出了short类型的范围，需要转为int类型
// int d = 2147483648;  // 错误：值超出int类型范围
long d = 2147483648L;  // 正确：加上L后缀，使其成为long类型
```

### 2.小数类型

小数类型用于表示带小数点的数值。在 Java 中，小数类型有`float`和`double`两种，区别在于精度的不同：

- **`float`**：单精度浮点数，占用 4 个字节。默认情况下，小数会被当作`double`类型，需要加上`F`或`f`作为后缀来标识为`float`类型。
- **`double`**：双精度浮点数，占用 8 个字节，是默认的小数类型。

> **小数类型案例**：

```java
// int a = 3.14;  // 错误：int类型不能接收小数值
float f = 3.14F;  // 正确：加上F后缀，将值标识为float类型
double d = 2e3;  // 科学计数法，表示2*10^3 = 2000.0
System.out.println(d);  // 输出：2000.0
```

### 3.布尔类型

布尔类型只有两个取值：`true`和`false`。它用于判断逻辑条件或布尔表达式的结果。

- **`boolean`**：占用 1 个字节，只有`true`和`false`两个值。

> **布尔类型案例**：

```java
boolean b = true;
System.out.println(b);  // 输出：true

boolean c = false;
System.out.println(c);  // 输出：false
```

### 4.字符类型

字符类型用于存储单个字符，Java 中字符类型使用`char`，它占用 2 个字节。字符类型基于 Unicode 编码，每个字符在字符集中有对应的整数值。

- **`char`**：表示单个字符，占用 2 个字节。字符需用单引号包围，如`'a'`、`'9'`等。
- 字符和整数之间可以相互转换，基于字符在 Unicode 编码中的位置。

> **字符类型案例**：

```java
char c = 'b';
System.out.println(c);  // 输出：b

char cc = 97;
System.out.println(cc);  // 输出：a，ASCII码97对应字符'a'

int g = 'a';
System.out.println(g);  // 输出：97，字符'a'对应的ASCII码

int o = '国';
System.out.println(o);  // 输出：22269，字符'国'的Unicode码

char r = '哟';
int p = r;
System.out.println(p);  // 输出：21720，字符'哟'的Unicode码

char x = 21720;
System.out.println(x);  // 输出：哟，Unicode码21720对应的字符

// 注意：'u4f01'是一个编码而非字符本身，无法直接赋值给char
```

### 5.总结

- **整数类型**有四种，分别为`byte`、`short`、`int`和`long`，它们占用的内存空间和数值范围不同。
- **小数类型**包括`float`和`double`，表示有小数点的数值。
- **布尔类型**表示逻辑值，只能为`true`或`false`。
- **字符类型**存储单个字符，基于 Unicode 编码，每个字符和对应的整数值可以互相转换。

这些数据类型构成了 Java 程序的基础，可以用来处理和表示各种不同类型的数据。

好的，以下是结合你的要求重新整理后的内容，新增了第 12 节关于转义字符的介绍，同时将原有的 12 节转为 13 节。

---

## 12.转义字符

### 1.什么是转义字符？

在程序中，有些字符具有特殊的含义，例如换行符、双引号等。如果我们需要在字符串中直接使用这些特殊字符，就需要借助转义字符。转义字符以反斜杠(`\`)开头，紧跟一个表示特殊含义的字符，表示对该字符进行转义操作，使其具有特定功能。

### 2.常见的转义字符

以下是常见的转义字符及其功能：

- **`\n`**：换行，将当前位置移到下一行的开头。
- **`\r`**：回车，将当前位置移到本行的开头。
- **`\t`**：水平制表符（Tab），相当于按下 Tab 键，通常用于增加缩进。
- **`\'`**：单引号，在字符或字符串中表示单引号，避免与字符串的引号冲突。
- **`\"`**：双引号，在字符串中表示双引号，避免与字符串本身的双引号冲突。
- **`\\`**：反斜杠，表示反斜杠字符本身。

### 3.转义字符的使用示例

通过以下代码示例，可以更清晰地理解转义字符的使用：

```java
public class ZhuanYi {
    public static void main(String[] args) {
        System.out.println("Name:\"PP\",\n\tAge:30\\");
    }
}
```

**输出结果为**：

```
Name:"PP",
    Age:30\
```

**解释**：

- `\"`：表示输出双引号`"`，在输出时不会将其视为字符串的结束符。
- `\n`：换行，使得“Age:30\”输出到下一行。
- `\t`：插入一个水平制表符，将“Age:30\”的输出向右缩进。
- `\\`：输出反斜杠`\`，因为一个反斜杠本身是转义符，需要通过两个反斜杠来表示一个实际的反斜杠字符。

### 4.其他常用转义字符

除了上述常见的转义字符外，Java 还支持以下特殊字符的转义：

- **`\b`**：退格符，将光标向左移动一格，但不会删除已有字符（在控制台输出中效果有限）。
- **`\f`**：换页符，将光标移到下一页开头（通常在打印输出中使用）。
- **`\uXXXX`**：表示一个 Unicode 字符，其中`XXXX`是一个四位的 16 进制数。例如，`\u4F60`表示 Unicode 字符“你”。

**示例**：

```java
public class UnicodeExample {
    public static void main(String[] args) {
        System.out.println("Hello, \u4F60\u597D!");  // 输出：Hello, 你好!
    }
}
```

**输出**：

```
Hello, 你好!
```

### 5.转义字符的使用注意事项

- 转义字符仅在字符串或字符常量中使用。单独使用或用于非字符串上下文时，转义字符可能会产生语法错误。
- 在处理文件路径时，反斜杠`\\`常用于 Windows 系统的路径表示，需要小心处理。例如，`C:\\Users\\Name`。

## 13.进制与转换

### 1.什么是进制？

进制是表示数值的一种方式，是人为设定的进位方式。常见的进制有：

- **二进制**：逢二进一，即只有`0`和`1`两个符号。
- **八进制**：逢八进一，用数字`0-7`表示。
- **十进制**：逢十进一，用数字`0-9`表示，是我们日常使用的进制。
- **十六进制**：逢十六进一，用数字`0-9`和字母`A-F`表示，其中`A=10`, `B=11`, ..., `F=15`。

### 2.基本单位

- **位 (Bit)**：表示二进制的一个数字（0 或 1），是计算机存储和处理信息的最小单位。
- **字节 (Byte)**：一个字节由 8 个位组成，是计算机存储信息的基本单位。

### 3.常见进制的使用

- **二进制**：计算机内部数据以二进制形式存储。  
   例如，十进制的`10`在二进制中表示为`1010`。
- **八进制**：虽然现在很少使用，但在一些早期系统中八进制较为流行。在 Java 中，八进制以`0`开头表示。  
   例如：`0123`表示八进制。

- **十六进制**：由于二进制表示过于冗长，十六进制常用于缩短表示。在 Java 中，十六进制以`0x`或`0X`开头。  
   例如：`0x23D`表示十六进制。

### 4.进制转换

**八进制和二进制的转换**

- **八进制转换为二进制**：将每个八进制数字替换为相应的三个二进制位。  
  例如：  
  八进制 `574` 转换为二进制：`101_111_100`。

**十六进制和二进制的转换**

- **十六进制转换为二进制**：将每个十六进制数字替换为相应的四个二进制位。  
  例如：  
  十六进制 `23D` 转换为二进制：`0010_0011_1101`。

### 5.补码

在计算机中，负数通常使用补码来表示。

- **正数的补码**：与原码相同。
- **负数的补码**：取原数的绝对值，按位取反，再加 1。

##### 负数的补码示例：

```java
十进制 -10 转换为二进制补码：
10 的原码：  00000000 00000000 00000000 00001010
取反：      11111111 11111111 11111111 11110101
加一：      11111111 11111111 11111111 11110110  // -10 的补码
```

**补码的用途**：

- 可以统一符号位和数值位的处理，使加减法运算更加简单。
- 当两个补码相加时，若产生进位，符号位的进位会被舍弃。

### 6.十进制转换为二进制

##### 整数部分转换方法：“除 2 取余，逆序排列”

将十进制整数反复除以 2，记录每次的余数，最后将余数逆序排列得到二进制数。

**示例 1**：将十进制数`89`转换为二进制：

```java
2 | 89  ->  1
2 | 44  ->  0
2 | 22  ->  0
2 | 11  ->  1
2 | 5   ->  1
2 | 2   ->  0
2 | 1   ->  1
      ->  1011001  // 89的二进制表示
```

**示例 2**：将十进制数`27`转换为二进制：

```java
2 | 27  ->  1
2 | 13  ->  1
2 | 6   ->  0
2 | 3   ->  1
2 | 1   ->  1
      ->  11011  // 27的二进制表示
```

##### 小数部分转换方法：“乘 2 取整，顺序排列”

将小数部分反复乘以 2，记录每次结果的整数部分，最后将整数部分顺序排列得到二进制数。

**示例 1**：将十进制小数`0.625`转换为二进制：

```java
0.625 * 2 = 1.25 -> 1
0.25  * 2 = 0.5  -> 0
0.5   * 2 = 1.0  -> 1
      ->  0.101  // 0.625的二进制表示
```

**示例 2**：将十进制小数`0.09`转换为二进制（约）：

```java
0.09  * 2 = 0.18 -> 0
0.18  * 2 = 0.36 -> 0
0.36  * 2 = 0.72 -> 0
0.72  * 2 = 1.44 -> 1
0.44  * 2 = 0.88 -> 0
0.88  * 2 = 1.76 -> 1
0.76  * 2 = 1.52 -> 1
0.52  * 2 = 1.04 -> 1
0.04  * 2 = 0.08 -> 0
      ->  0.000101110（约） // 0.09的二进制表示
```

### 7.小结

- 进制是计算机存储与处理信息的重要概念，常见进制包括二进制、八进制、十进制和十六进制。

- 进制之间的转换规则明确，二进制与其他进制的转换是计算机数据处理中非常基础且常用的操作。

- 在计算机内部，补码是表示负数的重要方式，它简化了加减法操作，特别是在符号位的处理上。

以下是整理后的 14 节内容，结合了类型转换的知识点，阐述了自动类型转换与强制类型转换，并配有示例代码：

---

## 14.类型转换

在 Java 中，不同的数据类型之间可以进行转换，根据数据类型的容量大小，可以分为**自动类型转换**和**强制类型转换**。

### 1.自动类型转换

自动类型转换是指将容量较小的数据类型自动提升为容量较大的数据类型。这种转换是安全的，不会导致数据的丢失。

- **自动转换的规则**：当目标类型的存储容量大于原类型时，自动进行类型转换。

  **示例**：

  ```java
  byte -> short -> int -> long -> float -> double
  char -> int
  ```

  **代码示例**：

  ```java
  byte b = 10;
  short s = b;  // 自动转换：byte 转换为 short
  int i = s;    // 自动转换：short 转换为 int
  long lon = i; // 自动转换：int 转换为 long

  // char -> int 自动转换
  char sex = '男';
  int sexCode = sex; // 将字符 '男' 自动转换为 Unicode 码值
  System.out.println(sexCode);  // 输出: 30007，汉字“男”的 Unicode 编码

  float f = 20f;
  double d = f;  // 自动转换：float 转换为 double
  System.out.println(d);  // 输出：20.0
  ```

### 2.强制类型转换

强制类型转换是指将容量大的数据类型转换为容量小的数据类型。这种转换可能会导致**精度损失**或**数据溢出**，因此需要加上强制转换符来显式地告诉编译器进行转换。

- **强制转换的规则**：当目标类型的存储容量小于原类型时，必须进行强制类型转换，并可能导致数据截断或精度损失。

  **代码示例**：

  ```java
  int num = 2147483000;
  float num2 = num;  // 强制转换：int 转换为 float
  System.out.println(num2);  // 输出：2.14748301E9，可能存在精度损失

  // 强制转换示例
  byte cc = (byte) 257;  // 强制转换 int 类型的 257 为 byte 类型
  System.out.println(cc);  // 输出：1（超出 byte 范围，被截断）

  long ll = (long) 3.5;  // 强制转换 double 类型的 3.5 为 long 类型，小数部分截断
  System.out.println(ll);  // 输出：3
  ```

  > **注意**：`byte`、`short`、`int`在进行计算时会**自动转换为 `int` 类型**。

  **示例**：

  ```java
  short s1 = 10;
  // s1 = s1 + 1; // 错误：s1 + 1 自动转换为 int 类型，不能直接赋值给 short 类型
  s1 = (short)(s1 + 1); // 需要强制类型转换
  System.out.println(s1);  // 输出：11
  ```

### 3.类型转换中的特殊情况

- **float 和 double 是近似值**：浮点数（`float` 和 `double`）是近似值，表示精度有限，进行计算时可能会导致结果不够精确。
- **byte、short、int、long 属于精确值**：这些类型在计算中属于精确值，精确值转为近似值时，可能会出现精度丢失的问题。

  **代码示例**：

  ```java
  int num = 2147483000;
  float num2 = num;  // int 转换为 float，存在精度损失
  System.out.println(num2);  // 输出：2.14748301E9
  ```

- **boolean 类型不能转换成其他数据类型**：`boolean` 类型表示布尔值，只能是 `true` 或 `false`，无法与其他数据类型相互转换。

### 4.类型转换注意事项

1. **自动类型转换**是指容量小的数据类型自动转换为容量大的数据类型，这是安全的转换。
2. **强制类型转换**可能会导致数据的截断或精度丢失，使用时需特别小心。
3. 在进行**运算**时，`byte`、`short`、`char` 等类型会自动转换为 `int` 类型，因此在赋值时可能需要进行**强制类型转换**。
4. 如果需要处理**货币值**等高精度数据，建议不要使用 `float` 或 `double`，应使用 `BigDecimal` 类进行计算。

## 15.运算符

运算符用于在程序中对数据进行操作，不同的运算符有不同的作用。在 Java 中，运算符可以分为多种类型，如算术运算符、赋值运算符、关系运算符、逻辑运算符、位运算符等。以下是详细的运算符分类与使用说明。

### 1.算术运算符

算术运算符用于执行基本的数学操作，例如加法、减法、乘法、除法和取余。

**常见算术运算符**：

- `+`：加法
- `-`：减法
- `*`：乘法
- `/`：除法（整数除法会取整）
- `%`：取余运算

**运算顺序**：从左到右

**示例代码**：

```java
double a = 2 + 3.5; // 两数和的类型等于最高操作数的类型
System.out.println(a); // 输出：5.5

int b = 7 / 2;  // 两个整数相除，结果取整
System.out.println(b);  // 输出：3
System.out.println((double) 7 / 2);  // 输出：3.5

System.out.println(7 % 2);  // 输出：1（余数）
```

### 2.自增自减运算符

- `i++`：后置自增，**先执行当前代码，再进行自增**。
- `++i`：前置自增，**先进行自增，再执行当前代码**。
- `i--`：后置自减，**先执行当前代码，再进行自减**。
- `--i`：前置自减，**先进行自减，再执行当前代码**。

**示例代码**：

```java
int i = 5;
System.out.println(i++); // 输出：5，i的值变为6
System.out.println(++i); // 输出：7，i的值先加1，再输出
```

### 3.赋值运算符

赋值运算符用于将右边的值赋给左边的变量。

- **基本赋值运算符**：`=`
- **复合赋值运算符**：`+=`、`-=`、`*=`、`/=`、`%=`

**运算顺序**：从右到左

**示例代码**：

```java
int a = 3;  // 基本赋值
a += 1; // 等价于 a = a + 1
System.out.println(a);  // 输出：4
```

### 4.关系运算符

关系运算符用于比较两个值，返回一个布尔类型的结果（`true`或`false`）。

**常见关系运算符**：

- `>`：大于
- `>=`：大于等于
- `<`：小于
- `<=`：小于等于
- `==`：等于
- `!=`：不等于

**示例代码**：

```java
System.out.println(5 > 3);  // 输出：true
System.out.println(5 >= 3); // 输出：true
System.out.println(5 < 3);  // 输出：false
System.out.println(5 == 3); // 输出：false
System.out.println(5 != 3); // 输出：true
```

### 5.逻辑运算符

逻辑运算符用于对布尔表达式进行逻辑运算。

- **&**：与运算，两个都为 `true` 才为 `true`
- **|**：或运算，只要有一个为 `true` 即为 `true`
- **^**：异或运算，两边相同为 `false`，不同为 `true`
- **!**：非运算，取反
- **&&**：短路与运算，如果左侧为 `false`，右侧不再计算
- **||**：短路或运算，如果左侧为 `true`，右侧不再计算

**示例代码**：

```java
boolean a = true;
boolean b = false;
System.out.println(a & b);  // 输出：false
System.out.println(a | b);  // 输出：true
System.out.println(a ^ b);  // 输出：true
System.out.println(!a);     // 输出：false
System.out.println(a && b); // 输出：false
```

**短路与 `&&` 和与 `&` 的区别**：

- `&` 会计算表达式两边的值，而 `&&` 如果左边为 `false`，则不会计算右边的表达式。

### 6.位运算符

位运算符用于操作数据的二进制位。

- **按位取反 `~`**：每个二进制位取反
- **按位与 `&`**：对应位都为 `1` 则为 `1`
- **按位或 `|`**：只要有一位为 `1` 则为 `1`
- **按位异或 `^`**：对应位不同则为 `1`
- **左移 `<<`**：将二进制位左移，低位补 `0`
- **右移 `>>`**：将二进制位右移，高位补符号位
- **无符号右移 `>>>`**：将二进制位右移，高位补 `0`

**示例代码**：

```java
int result = 8 << 2; // 相当于 8 * 2^2 = 32
System.out.println(result);  // 输出：32
```

### 7.三目运算符

三目运算符是一种简洁的条件判断方式。

**格式**：`条件表达式 ? 表达式1 : 表达式2`

- 当条件表达式为 `true` 时，返回表达式 1，否则返回表达式 2。

**示例代码**：

```java
int score = 80;
String result = (score >= 60) ? "及格" : "不及格";
System.out.println(result);  // 输出：及格
```

### 8.数据类型自动提升

在算术运算中，如果操作数为不同的数据类型，最终的结果会提升为操作数中**最高的数据类型**。

- **示例 1**：`byte` 和 `short` 的运算结果自动提升为 `int` 类型。

  **示例代码**：

  ```java
  byte a = 1;
  short b = 2;
  int c = a + b;  // 结果为 int 类型
  ```

- **示例 2**：字符串与任何类型拼接，结果都会转换为 `String`。

  **示例代码**：

  ```java
  System.out.println("6" + 6);  // 输出：66
  ```

### 9.变量交换

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

**方法 3：使用位运算**：

```java
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

以下是结合我的知识并参考你提供的文本，整理出的第 16 节内容，关于“控制台录入”的补充与拓展：

---

## 16.控制台录入

在 Java 中，控制台录入是指通过命令行或终端获取用户输入的数据。这种功能通常在开发交互式程序时很有用，如获取用户输入的数值、字符串等。

### 1.`Scanner` 类的使用

在 Java 中，`Scanner` 类提供了从控制台获取输入的功能。使用 `Scanner` 时需要导入 `java.util.Scanner` 包，然后实例化 `Scanner` 对象。该对象提供了多种方法用于接收不同类型的数据，如 `nextInt()` 接收整数，`nextDouble()` 接收小数，`next()` 接收字符串等。

#### 控制台录入的步骤：

1. **创建 `Scanner` 对象**：使用 `Scanner` 类从控制台输入数据。

   ```java
   Scanner sc = new Scanner(System.in);
   ```

2. **调用相应方法获取输入**：`nextInt()`、`nextDouble()`、`next()` 等。
3. **关闭 `Scanner`**：输入结束后，调用 `sc.close()` 关闭输入流。

### 2.常用的 `Scanner` 方法

- **`nextInt()`**：用于获取整数输入。
- **`nextDouble()`**：用于获取浮点数输入。
- **`next()`**：用于获取单个单词（不包含空格的字符串）。
- **`nextLine()`**：用于获取整行字符串（包含空格）。

### 3.接收不同类型的输入

#### 3.1 整数输入

通过 `nextInt()` 获取从控制台输入的整数。

**示例代码**：

```java
import java.util.Scanner;

public class ConsoleInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  // 创建Scanner对象
        System.out.print("请输入一个整数：");
        int num = sc.nextInt();  // 获取整数输入
        System.out.println("您输入的整数是：" + num);
        sc.close();  // 关闭Scanner对象
    }
}
```

**运行示例**：

```
请输入一个整数：5
您输入的整数是：5
```

#### 3.2 字符串输入

通过 `next()` 或 `nextLine()` 接收字符串输入。

**示例代码**：

```java
import java.util.Scanner;

public class StringInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入一个字符串：");
        String s = sc.next();  // 获取字符串输入（不包括空格）
        System.out.println("您输入的字符串是：" + s);

        sc.nextLine();  // 清除输入缓冲区

        System.out.print("请输入一句话：");
        String line = sc.nextLine();  // 获取包含空格的整行输入
        System.out.println("您输入的句子是：" + line);

        sc.close();
    }
}
```

**运行示例**：

```
请输入一个字符串：Hello
您输入的字符串是：Hello
请输入一句话：Java is awesome!
您输入的句子是：Java is awesome!
```

#### 3.3 浮点数输入

通过 `nextDouble()` 接收浮点数输入。

**示例代码**：

```java
import java.util.Scanner;

public class DoubleInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入一个小数：");
        double d = sc.nextDouble();  // 获取浮点数输入
        System.out.println("您输入的小数是：" + d);
        sc.close();
    }
}
```

**运行示例**：

```
请输入一个小数：3.14
您输入的小数是：3.14
```

### 4.获取字符串的特定字符

通过 `charAt(int index)` 方法可以获取字符串中某个特定位置的字符。通常，我们可以用 `next().charAt(0)` 获取字符串的第一个字符。

**示例代码**：

```java
import java.util.Scanner;

public class CharInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入一个字符串：");
        char c = sc.next().charAt(0);  // 获取字符串的第一个字符
        System.out.println("字符串的第一个字符是：" + c);
        sc.close();
    }
}
```

**运行示例**：

```
请输入一个字符串：Hello
字符串的第一个字符是：H
```

### 5.输入时的异常处理

当使用 `Scanner` 输入数据时，输入的值必须与期望的数据类型一致，否则会抛出 `InputMismatchException`。为避免程序崩溃，通常需要进行异常处理。

**示例代码**：

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class InputException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("请输入一个整数：");
            int num = sc.nextInt();
            System.out.println("您输入的整数是：" + num);
        } catch (InputMismatchException e) {
            System.out.println("输入错误，请输入一个整数！");
        } finally {
            sc.close();
        }
    }
}
```

**运行示例**：

```
请输入一个整数：abc
输入错误，请输入一个整数！
```

### 6.注意事项

1. **`next()` 与 `nextLine()` 的区别**：`next()` 方法会忽略空格，只获取单个单词；`nextLine()` 方法可以获取整行字符串，包括空格。
2. **关闭 `Scanner` 对象**：为了避免资源泄漏，使用完 `Scanner` 对象后，必须调用 `sc.close()` 关闭输入流。
3. **输入时的异常处理**：需要确保用户输入的数据类型与程序期望的一致，尤其是处理数值类型时，注意异常捕获。

## 17.分支语句

分支语句允许程序根据条件的不同执行不同的代码。Java 中常见的分支语句包括 `if-else` 和 `switch` 语句。通过分支结构，程序能够实现条件判断，从而做出不同的逻辑选择。

### 1.if-else 语句

#### 1.1 单分支结构

**格式**：

```java
if (条件表达式) {
    // 条件为true时执行的代码
}
```

**执行流程**：当条件为 `true` 时，执行 `if` 块中的代码，否则跳过。

**场景示例**：

```java
double productPrice = 150.0;
if (productPrice > 100) {
    System.out.println("此商品价格超过100元，赠送优惠券");
}
```

#### 1.2 双分支结构

**格式**：

```java
if (条件表达式) {
    // 条件为true时执行
} else {
    // 条件为false时执行
}
```

**执行流程**：如果条件成立，执行 `if` 块中的代码；否则，执行 `else` 块中的代码。

**场景示例**：

```java
int stock = 10;
if (stock > 0) {
    System.out.println("商品有库存，可以购买");
} else {
    System.out.println("商品库存不足，无法购买");
}
```

#### 1.3 多分支结构

**格式**：

```java
if (条件表达式1) {
    // 条件1为true时执行
} else if (条件表达式2) {
    // 条件2为true时执行
} else {
    // 以上条件均不满足时执行
}
```

**场景示例**：

```java
int discount = 15;
if (discount >= 50) {
    System.out.println("大额优惠券");
} else if (discount >= 20) {
    System.out.println("中额优惠券");
} else {
    System.out.println("小额优惠券");
}
```

#### 1.4 嵌套的 if 结构

`if` 语句可以嵌套使用，以实现更复杂的判断逻辑。

**场景示例**：

```java
double totalAmount = 1200.0;
boolean isVip = true;
if (totalAmount > 1000) {
    if (isVip) {
        System.out.println("VIP客户享受额外折扣");
    } else {
        System.out.println("普通客户不享受额外折扣");
    }
} else {
    System.out.println("订单金额不足1000元，不享受优惠");
}
```

### 2.switch 语句

`switch` 语句适用于多值判断，当变量符合某个特定的值时执行对应的代码块。

#### 2.1 switch 语句格式

**格式**：

```java
switch (变量) {
    case 值1:
        // 代码块1
        break;
    case 值2:
        // 代码块2
        break;
    default:
        // 当所有 case 都不匹配时执行
}
```

#### 2.2 执行流程

- `switch` 语句会根据变量的值选择相应的 `case` 执行。
- 如果不添加 `break`，程序将继续执行后续的 `case` 代码，直到遇到 `break` 或 `switch` 结束。
- `default` 是可选的，用于处理没有匹配到任何 `case` 的情况。

**场景示例**：

```java
String paymentMethod = "Credit Card";
switch (paymentMethod) {
    case "Credit Card":
        System.out.println("使用信用卡支付");
        break;
    case "PayPal":
        System.out.println("使用PayPal支付");
        break;
    case "Alipay":
        System.out.println("使用支付宝支付");
        break;
    default:
        System.out.println("请选择支付方式");
        break;
}
```

### 3.if-else 与 switch 的对比

- `if-else` 适用于范围判断，如判断订单金额是否达到某个优惠条件。
- `switch` 适用于具体值判断，如用户选择的支付方式、配送方式等。
- `switch` 支持的数据类型包括：`int`、`char`、`byte`、`short` 和 `String`（Java 7 之后支持 `String`）。

## 18.循环语句

循环语句用于重复执行某些代码。常见的循环结构有 `for`、`while` 和 `do-while`。

### 1.while 循环

`while` 循环是一种前测试循环结构，只有条件为 `true` 时，才执行循环体。

#### 1.1 格式

```java
while (条件表达式) {
    // 循环体
}
```

#### 1.2 执行流程

1. 先判断条件是否成立，若成立，进入循环体执行代码；
2. 执行完循环体后，再次判断条件；
3. 若条件仍成立，继续执行循环体；否则跳出循环。

**示例**：

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

### 2.do-while 循环

`do-while` 是后测试循环结构，循环体至少会执行一次，然后再进行条件判断。

#### 2.1 格式

```java
do {
    // 循环体
} while (条件表达式);
```

#### 2.2 执行流程

1. 先执行一次循环体代码；
2. 然后判断条件表达式是否成立；
3. 若条件成立，继续执行循环体；否则跳出循环。

**示例**：

```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

### 3.for 循环

`for` 循环是一种结构化的循环，适合处理确定次数的循环任务。

#### 3.1 格式

```java
for (初始化; 条件判断; 增量) {
    // 循环体
}
```

#### 3.2 执行流程

1. 执行初始化语句；
2. 判断条件是否成立，若成立则进入循环体；
3. 执行循环体后，执行增量语句；
4. 返回第二步，继续判断条件。

**示例**：

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

### 4.循环嵌套

循环嵌套是指在一个循环体内再嵌套一个或多个循环。

**示例**：打印乘法表

```java
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i + "*" + j + "=" + (i * j) + "\t");
    }
    System.out.println();
}
```

### 5.循环控制语句

#### 5.1 break 语句

`break` 用于立即终止循环。

**示例**：

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
```

输出：

```
1
2
3
4
```

#### 5.2 continue 语句

`continue` 用于跳过当前循环的剩余部分，继续下一次循环。

**示例**：

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println(i);
}
```

输出：

```
1
2
3
4
6
7
8
9
10
```

### 6.死循环

死循环是指条件永远为 `true`，循环永远不会结束。

**常见死循环**：

```java
while (true) {
    System.out.println("死循环");
}
```

### 7.总结：选择合适的循环结构

- 使用 `for` 循环时，适合知道具体循环次数的场景。
- 使用 `while` 循环时，适合在不确定循环次数但需要先判断条件的场景。
- 使用 `do-while` 循环时，适合需要至少执行一次循环的场景。

## 19.方法、参数及递归

在 Java 编程中，方法是执行某一特定功能的代码块。通过方法，可以让代码更加简洁、复用、易维护。方法可以接收参数并返回结果。递归是一种特殊的方法调用形式，允许方法调用自身，通常用于解决循环性问题。

---

### 1.方法概述

**方法**是指一段可以复用的代码块，具备明确的功能和作用。方法通过传递参数和返回值来与外部交互。

#### 方法的好处：

- 提高代码的**可读性**和**复用性**。
- 减少代码的冗余，维护更加方便。
- 让代码结构更加清晰明了。

#### 方法的组成：

1. **方法声明**：方法的名称、参数列表、返回值类型等。
2. **方法体**：方法执行的具体逻辑代码。
3. **方法调用**：通过调用方法名称来执行该方法。

---

### 2.无参数无返回值方法

这类方法不接收任何输入，也不会返回结果。常用于执行固定的功能。

**示例**：打印商品类别菜单

```java
public class CategoryMenu {
    public static void main(String[] args) {
        printCategoryMenu();  // 调用无参数无返回值的方法
    }

    public static void printCategoryMenu() {
        System.out.println("1.电子产品");
        System.out.println("2.家用电器");
        System.out.println("3.服装");
        System.out.println("4.美妆护肤");
        System.out.println("5.日用百货");
    }
}
```

**特点**：

- 没有参数，行为固定。
- 没有返回值，只执行代码而不反馈数据。

---

### 3.有参数无返回值方法

有参数无返回值的方法需要外部传递参数，方法执行后不返回结果。这类方法适合根据输入执行不同的操作。

**示例**：计算订单折后金额

```java
public class Order {
    public static void main(String[] args) {
        calculateFinalPrice(1000, 0.15);  // 调用时传入订单金额和折扣比例
    }

    public static void calculateFinalPrice(double originalPrice, double discount) {
        double finalPrice = originalPrice * (1 - discount);
        System.out.println("折后总价: " + finalPrice + "元");
    }
}
```

**特点**：

- 方法通过参数传递外部信息。
- 无返回值，方法执行后结束，不反馈任何值。

---

### 4.有参数有返回值方法

这类方法既接收参数，又返回一个值。常用于执行某种计算，并返回结果。

**示例**：计算购物车中所有商品的总金额

```java
public class ShoppingCart {
    public static void main(String[] args) {
        double total = calculateTotal(299.99, 199.50, 99.90);  // 调用方法并接收返回值
        System.out.println("购物车总金额: " + total + "元");
    }

    public static double calculateTotal(double price1, double price2, double price3) {
        return price1 + price2 + price3;  // 返回三件商品的总金额
    }
}
```

**特点**：

- 方法通过参数传递数据。
- 返回计算结果，调用方法时可以使用该结果。

---

### 5.`return` 的使用

`return` 语句用于在方法中返回一个值或结束方法的执行。

#### 使用规则：

1. **返回值类型匹配**：`return` 返回的值类型必须和方法声明中的返回类型一致。
2. **终止方法**：`return` 在 `void` 方法中仅用于结束方法，不返回值。
3. **多出口返回**：在有多个出口的分支结构中，每条路径都必须有 `return`。

**示例**：判断是否免运费

```java
public class ShippingChecker {
    public static void main(String[] args) {
        boolean isFreeShipping = checkFreeShipping(120.0);
        System.out.println(isFreeShipping ? "免运费" : "不免运费");
    }

    public static boolean checkFreeShipping(double orderAmount) {
        if (orderAmount >= 100.0) {
            return true;  // 订单金额 >= 100元 免运费
        } else {
            return false;  // 订单金额 < 100元 不免运费
        }
    }
}
```

---

### 6.方法的重载（Overloading）

**方法重载**是指在一个类中可以定义多个方法，方法名相同，但参数不同（参数数量、类型不同）。重载可以让同名方法处理不同类型或数量的参数，增加代码灵活性。

**示例**：计算商品折扣方法

```java
public class DiscountCalculator {
    public static void main(String[] args) {
        System.out.println(calculateDiscount(100, 0.2));       // 调用带有折扣率的计算方法
        System.out.println(calculateDiscount(100, 20));       // 调用折扣金额计算方法
    }

    // 根据折扣率计算折后价格
    public static double calculateDiscount(double price, double discountRate) {
        return price * (1 - discountRate);
    }

    // 根据折扣金额计算折后价格
    public static double calculateDiscount(double price, int discountAmount) {
        return price - discountAmount;
    }
}
```

**注意**：返回值不同不能作为重载的依据，方法名相同但仅改变返回值类型是不允许的。

---

### 7.方法的重写（Override）

**方法重写**是子类对父类中的方法进行重新实现。子类可以根据自己的需求，修改父类提供的功能。重写允许子类继承并修改父类的方法，使得代码更加灵活。

#### 方法重写的特点：

1. 子类重写的方法名称、参数列表必须与父类方法一致。
2. 重写的方法返回值类型必须与父类相同，或是父类返回值类型的子类型。
3. 重写的方法访问权限不能比父类的更严格。
4. 在子类方法前使用 `@Override` 注解，可以明确标识这是一个重写的方法，帮助编译器检查是否符合重写规则。

**示例**：方法重写，显示不同商品的描述

```java
class Product {
    public void displayDescription() {
        System.out.println("这是一个商品");
    }
}

class ElectronicProduct extends Product {
    @Override
    public void displayDescription() {
        System.out.println("这是一个电子产品");
    }
}

public class OverrideExample {
    public static void main(String[] args) {
        Product product = new ElectronicProduct();
        product.displayDescription();  // 调用子类的重写方法
    }
}
```

**输出**：

```
这是一个电子产品
```

在这个例子中，`ElectronicProduct` 类重写了 `Product` 类的 `displayDescription` 方法，体现了多态性。当调用 `product.displayDescription()` 时，执行的是 `ElectronicProduct` 类中的重写方法，而不是 `Product` 类中的方法。

---

### 8.多级调用

在编程中，一个方法可以调用另一个方法，这种行为称为多级调用。多级调用使得代码执行变得更加灵活。

**示例**：处理订单的多级调用

```java
public class OrderProcessor {
    public static void main(String[] args) {
        processOrder();  // 调用 processOrder 方法
    }

    public static void processOrder() {
        System.out.println("订单处理开始");
        verifyUser();  // 调用 verifyUser 方法进行用户验证
        calculateDiscount();  // 调用 calculateDiscount 方法计算折扣
        generateInvoice();  // 调用 generateInvoice 方法生成发票
        System.out.println("订单处理结束");
    }

    public static void verifyUser() {
        System.out.println("用户已验证");
    }

    public static void calculateDiscount() {
        System.out.println("折扣已计算");
    }

    public static void generateInvoice() {
        System.out.println("发票已生成");
    }
}
```

**输出**：

```
复制代码
订单处理开始
用户已验证
折扣已计算
发票已生成
订单处理结束
```

通过这种多级调用的方式，电商系统可以逐步处理复杂的订单操作，保证每个步骤都被按顺序执行。

### 9.递归方法

**递归** 是指方法自己调用自己。递归通常用于解决可以分解为相同子问题的问题，例如阶乘、斐波那契数列等。

#### 使用递归需要注意：

1. **基准情况**：递归必须有一个终止条件，否则会出现死递归，导致程序崩溃。
2. **递归效率**：递归相较于循环，效率通常较低，容易导致栈溢出，因此需要谨慎使用。

#### 递归求阶乘

**示例**：计算 4 的阶乘

```java
public class Factorial {
    public static void main(String[] args) {
        int result = factorial(4);  // 计算4的阶乘
        System.out.println("4的阶乘为: " + result);
    }

    public static int factorial(int n) {
        if (n == 1) {
            return 1;  // 基准情况：1的阶乘为1
        } else {
            return n * factorial(n - 1);  // 递归调用自身
        }
    }
}
```

---

### 10.递归与斐波那契数列

斐波那契数列是典型的递归问题

。每一项等于前两项之和，第一项为 0，第二项为 1。

**示例**：递归实现斐波那契数列

```java
public class Fibonacci {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }

    public static int fibonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);  // 递归调用自身
        }
    }
}
```

---

### 11.总结

1. **方法**是代码复用的基本单位，可以接收参数和返回值，提供灵活的功能。
2. **重载**允许同名方法处理不同类型和数量的参数，**重写**允许子类根据需要修改父类的方法。
3. **递归**是解决自相似问题的有力工具，但需要谨慎使用以避免性能问题。

## 20.栈内存与堆内存

在 Java 中，内存管理是自动进行的，主要分为 **栈内存（Stack Memory）** 和 **堆内存（Heap Memory）**。理解这两者有助于深入了解 Java 程序的内存分配、对象生命周期、垃圾回收等机制。

---

### 1.栈内存（Stack Memory）

**栈内存** 是一种用于存储局部变量、方法调用、方法参数的内存区域，具有以下特性：

#### 1.1 特点

- **快速分配和释放**：栈是一种后进先出（LIFO，Last In First Out）结构，当方法调用结束时，栈帧会立即被销毁。
- **局部性**：栈只存储局部变量、方法调用和方法参数（包括基本类型和对象引用）。
- **线程私有**：每个线程都有独立的栈，不同线程的栈互不干扰。
- **存储范围有限**：栈的空间有限，不能存储太大的数据结构。当递归太深或栈空间超出限制时，会引发 `StackOverflowError`。

#### 1.2 栈的生命周期

- 栈内存中的变量生命周期很短，当方法结束时，栈帧就会被释放，所有局部变量也随之销毁。

#### 1.3 示例代码

```java
public class TestStack {
    public static void main(String[] args) {
        int a = 10;  // 基本类型的局部变量，存储在栈内存中
        int b = 20;  // 基本类型的局部变量，存储在栈内存中
        Object obj = new Object();  // 引用类型的局部变量，引用存储在栈内存中，实际对象在堆中
        testMethod(a, b);  // 方法调用时，参数 a 和 b 会复制到新的栈帧中
    }

    public static void testMethod(int x, int y) {
        int result = x + y;  // 在 testMethod 的栈帧中创建局部变量
        System.out.println(result);
    }
}
```

在这个例子中：

- `a` 和 `b` 是基本数据类型，它们直接存储在栈内存中。
- `obj` 是引用类型的局部变量，引用存储在栈内存中，而 `new Object()` 创建的对象存储在堆内存中。
- 当 `testMethod` 调用结束后，`x` 和 `y` 以及 `result` 被销毁。

---

### 2.堆内存（Heap Memory）

**堆内存** 是用于存储所有对象实例和数组的内存区域，具有以下特性：

#### 2.1 特点

- **动态内存分配**：对象和数组在运行时通过 `new` 关键字动态分配，存储在堆中。
- **共享性**：堆是全局共享的内存区域，所有线程都可以访问堆中的对象。
- **生命周期长**：对象的生命周期比栈中的局部变量更长，它们不会因为方法结束而销毁，垃圾回收机制（GC）负责回收不再被引用的对象。
- **空间较大**：堆内存的容量通常比栈内存大得多，可以存储更多的数据。
- **垃圾回收机制**：堆中的对象由垃圾回收机制自动回收，当对象不再被引用时，GC 会自动清理这些对象。

#### 2.2 堆的生命周期

- 堆中的对象只有当不再有任何引用指向它时，才会被垃圾回收（由 GC 自动管理），对象可能会存在比栈变量更长的时间。
- 即使创建对象的栈帧销毁，堆中的对象仍然存在，直到 GC 认为它是垃圾对象。

#### 2.3 示例代码

```java
public class TestHeap {
    public static void main(String[] args) {
        String str = new String("Hello");  // 字符串对象存储在堆中
        int[] numbers = new int[5];        // 数组对象存储在堆中
    }
}
```

在这个例子中：

- `str` 和 `numbers` 是对堆内存中对象的引用，它们存储在栈中，实际对象（`new String("Hello")` 和 `new int[5]`）存储在堆中。
- 当程序运行结束时，GC 会负责清理堆中不再被引用的对象。

---

### 3.栈与堆的配合

栈和堆的配合是 Java 内存管理的核心机制。方法调用时会在栈中创建栈帧存储局部变量，而对象和数组则存储在堆中。

**示例代码分析**：

```java
public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) {
        Student student1 = new Student("Alice", 20);  // 创建Student对象，student1引用存储在栈中，对象存储在堆中
        Student student2 = new Student("Bob", 22);    // 创建另一个Student对象
    }
}
```

**执行流程**：

1. `main` 方法开始执行时，在栈中为其创建栈帧，局部变量 `student1` 和 `student2` 存储在栈中。
2. 当 `new Student("Alice", 20)` 执行时，堆内存中分配空间创建 `Student` 对象，`student1` 引用该对象。
3. 当 `main` 方法结束时，`student1` 和 `student2` 的引用被销毁，但堆内存中的 `Student` 对象仍然存在，直到 GC 回收它们。

---

### 4.栈和堆的生命周期

**栈的生命周期**：

- 栈中的局部变量的生命周期短暂，只在当前方法执行期间存在。
- 方法调用结束，栈帧销毁，栈中的局部变量和方法参数也被销毁。

**堆的生命周期**：

- 堆中的对象生命周期较长，它们的生命周期由引用来决定，只有当所有引用指向堆中的对象都消失时，GC 才会回收这些对象。
- 对象的销毁由 Java 的垃圾回收机制（GC）自动管理，程序员无需手动释放内存。

---

### 5.垃圾回收机制（GC）

**垃圾回收（Garbage Collection）** 是 JVM 自动管理堆内存的机制。它的工作原理是通过标记和清理未被引用的对象，从而释放内存空间。Java 程序员无需手动释放堆内存，但需要理解以下几点：

1. **不可达对象**：当对象不再有任何引用时，称为不可达对象，它将成为 GC 的回收目标。
2. **GC 的触发**：垃圾回收并不会随时发生，JVM 会在内存不足或达到某个阈值时，自动触发垃圾回收。
3. **GC 的优点**：避免了程序员手动管理内存的复杂性，减少了内存泄漏的发生。

---

### 6.栈和堆的区别总结

| **特性**       | **栈内存（Stack Memory）**           | **堆内存（Heap Memory）**              |
| -------------- | ------------------------------------ | -------------------------------------- |
| **存储内容**   | 局部变量、方法的参数、方法调用栈     | 所有对象实例和数组                     |
| **存储结构**   | 后进先出（LIFO）                     | 动态内存分配，非结构化                 |
| **访问速度**   | 快速（因为栈空间小，管理简单）       | 慢（因为堆空间大，管理复杂）           |
| **生命周期**   | 方法调用结束，栈帧立即销毁           | 对象的生命周期由 GC 机制决定           |
| **管理方式**   | 系统自动管理，方法调用结束时自动销毁 | 程序员通过 `new` 手动分配，GC 自动回收 |
| **空间大小**   | 较小，通常为固定大小                 | 较大，通常可以动态扩展                 |
| **线程共享性** | 线程私有，无法被其他线程访问         | 全局共享，所有线程都可以访问           |

---

### 7.常见问题和错误

- **栈溢出（StackOverflowError）**：当栈内存中的栈帧过多，例如递归过深时，栈的容量不够，导致栈溢出错误。
- **堆内存溢出（OutOfMemoryError）**：当创建过多对象

，堆内存空间耗尽时，JVM 会抛出 `OutOfMemoryError`，通常需要通过优化代码、增加堆内存大小来解决。

## 21.数组

### 1.数组概述

> 概述：数组是一组**连续的内存空间**，用于存储**相同类型的多个元素**。
>
> 特点：
>
> 1. **相同类型**：数组中的所有元素必须是相同的数据类型。
> 2. **长度固定**：一旦数组的大小确定，不能更改。

### 2.数组引入

> **场景**：如果想存储全班所有学生的姓名，如何实现？
>
> 如果使用`String`类型声明多个变量，代码会非常冗余且难以管理。

```java
String name1 = "张宗周";
String name2 = "杜文纤";
// 多个变量存储同样的数据类型，不便于管理和操作
```

> 如果给每个同学的年龄加 1，会非常不便。

```java
age1 += 1;
age2 += 1;
// ...
```

### 3.数组的创建

1. **声明数组，再分配空间**：

```java
int[] a;  // 声明一个数组变量
a = new int[3];  // 分配空间，存储三个整数
```

2. **声明数组并同时定义空间（常用）**：

```java
int[] b = new int[3];  // 创建长度为3的数组
b[0] = 1;
b[1] = 2;
b[2] = 3;
```

3. **定义空间的同时赋值**：

```java
int[] c = new int[]{3, 5, 6};  // 直接赋值，数组长度为3
```

4. **简化版直接赋值（常用）**：

```java
int[] d = {1, 3, 5};  // 简化写法，适用于简单场景
```

### 4.数组下标

数组通过**下标**操作元素，范围从 **0** 到 **长度 - 1**。

```java
int[] a = new int[3];  // 创建长度为3的数组
a[0] = 1;
a[1] = 2;
a[2] = 3;
// a[3] = 4;  // 错误：数组下标越界
System.out.println(a[0]);  // 输出 1
```

### 5.数组的默认值

当数组声明时，未赋值的元素会自动赋予默认值：

- **整型数组**：默认值为 `0`
- **浮点型数组**：默认值为 `0.0`
- **布尔数组**：默认值为 `false`
- **字符数组**：默认值为 `'\u0000'`（空字符）
- **引用类型数组**：默认值为 `null`

```java
int[] a = new int[3];
System.out.println(a[0]);  // 输出 0
String[] b = new String[3];
System.out.println(b[0]);  // 输出 null
```

### 6.数组的循环遍历

数组的长度通过 `数组名.length` 获取。

#### 方式 1：普通 `for` 循环

```java
int[] a = {1, 2, 3};
for (int i = 0; i < a.length; i++) {
    System.out.println(a[i]);  // 输出数组每个元素
}
```

#### 方式 2：增强 `for` 循环

```java
int[] a = {1, 2, 3};
for (int x : a) {
    System.out.println(x);  // 依次输出 1 2 3
}
```

#### 方式 3：调用方法遍历

```java
public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
}

int[] a = {1, 2, 3};
printArray(a);
```

### 7.数组异常

#### 1.空指针异常

```java
int[] arr = null;
System.out.println(arr.length);  // 会抛出 NullPointerException
```

#### 2.数组下标越界异常

```java
int[] a = {1, 2, 3};
System.out.println(a[3]);  // 会抛出 ArrayIndexOutOfBoundsException
```

### 8.数组内存：栈与堆

> 数组是**引用类型**，存储在**堆内存**中，而数组的引用（即指向数组的变量）存储在**栈内存**中。

- **栈内存**：存放局部变量和引用类型的变量名（例如数组的引用）。
- **堆内存**：存放对象本身，数组内容保存在堆中。

```java
int[] a = {1, 2, 3};
// 栈内存：保存数组的引用 a
// 堆内存：保存数组内容 {1, 2, 3}
```

### 9.数组操作案例

#### 案例 1：求数组的平均值

```java
int[] a = {3, 4, 5};
double sum = 0;
for (int num : a) {
    sum += num;
}
System.out.println("平均值：" + sum / a.length);
```

#### 案例 2：查找数组中元素的下标

```java
int[] a = {3, 2, 8, 9};
int num = 8;  // 要查找的数
int index = -1;
for (int i = 0; i < a.length; i++) {
    if (a[i] == num) {
        index = i;
        break;
    }
}
System.out.println("下标：" + index);  // 输出 2
```

### 10.数组扩容

#### 自定义扩容

```java
int[] a = {1, 3, 5};
int[] b = new int[a.length + 1];
for (int i = 0; i < a.length; i++) {
    b[i] = a[i];
}
System.out.println(Arrays.toString(b));  // 输出 [1, 3, 5, 0]
```

#### 使用 `System.arraycopy`

```java
int[] a = {1, 3, 5};
int[] b = new int[a.length + 1];
System.arraycopy(a, 0, b, 0, a.length);
System.out.println(Arrays.toString(b));  // 输出 [1, 3, 5, 0]
```

### 11.二维数组

Java 中的二维数组是数组的数组。

#### 方式 1：声明并分配空间

```java
int[][] arr = new int[2][3];  // 2行3列
arr[0][0] = 1;
arr[1][2] = 9;
System.out.println(arr[0][0]);  // 输出 1
```

#### 方式 2：直接赋值

```java
int[][] arr = {{1, 2, 3}, {4, 5, 6}};
System.out.println(arr[1][1]);  // 输出 5
```

### 12.不规则二维数组

```java
int[][] arr = new int[2][];
arr[0] = new int[]{1, 2, 3};
arr[1] = new int[]{4, 5};
```

### 13.数组作为方法参数

数组作为方法的参数时，会将**数组的地址**传递给方法。

```java
public static void modifyArray(int[] arr) {
    arr[0] = 10;
}

int[] a = {1, 2, 3};
modifyArray(a);
System.out.println(a[0]);  // 输出 10
```

### 14.数组作为返回值

方法可以返回数组：

```java
public static int[] createArray(int size) {
    return new int[size];
}

int[] a = createArray(5);
System.out.println(Arrays.toString(a));  // 输出 [0, 0, 0, 0, 0]
```

### 15.可变参数

可变参数允许传入任意数量的参数，底层是数组。

```java
public static void printNumbers(int...nums) {
    for (int num : nums) {
        System.out.println(num);
    }
}

printNumbers(1, 2, 3);  // 输出 1 2 3
```

### 16.思考：

数组和基本类型作为参数的区别：

- **数组传递的是引用**，即形参对数组的操作会影响到实参。
- **基本类型传递的是值**，形参的修改不会影响实参。

在 Java 中，参数传递分为两种情况：**值传递**（基本数据类型）和**引用传递**（引用数据类型，如数组）。这两种传递方式的不同之处在于，传递的内容是**值**还是**地址**，而这直接影响了方法中对参数的修改效果。

#### 1.基本类型参数传递：值传递

对于基本类型（如 `int`, `double`, `char` 等），传递给方法的是**实际的值**的副本。这意味着在方法内部对参数的修改，不会影响到原本的变量。

**示例：**

```java
public class Test {
    public static void main(String[] args) {
        int x = 10;
        modifyValue(x);
        System.out.println(x);  // 输出仍然是 10
    }

    public static void modifyValue(int a) {
        a = 20;  // 修改的是副本的值，不会影响原本的 x
    }
}
```

**解释**：

- 这里 `modifyValue(x)` 传递的是 `x` 的副本，在方法中改变 `a` 的值并不会影响 `x` 的值，因为 `a` 是 `x` 的拷贝。
- `x` 在主程序中的值依然保持不变，即 `10`。

#### 2.引用类型参数传递：引用传递

对于引用类型（如数组，类对象等），传递给方法的是**内存地址**，也就是引用。因此，方法中对数组或对象内容的修改，会影响到原本的数组或对象。

**示例：**

```java
public class Test {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        modifyArray(arr);
        System.out.println(arr[0]);  // 输出 10
    }

    public static void modifyArray(int[] a) {
        a[0] = 10;  // 修改的是数组的第一个元素，影响到原数组
    }
}
```

**解释**：

- 这里 `modifyArray(arr)` 传递的是数组 `arr` 的引用，也就是指向数组的内存地址。
- 在方法内部修改数组中的元素时，实际操作的还是主程序中的那个数组，因为方法中 `a` 引用的是同一个数组。

**总结：**

- **基本类型的值传递**：传递的是变量的值，方法中的修改不会影响原变量。
- **引用类型的引用传递**：传递的是对象或数组的地址，方法中的修改会影响到原对象或数组。

**关键点：**

- **值传递**：对基本类型的操作只是在方法内部修改其副本，方法结束后副本被销毁，不影响原值。
- **引用传递**：对引用类型的操作会修改其内容，实参和形参指向相同的内存地址，修改操作对原对象或数组产生影响。

## 22.面向对象的概念

### 1.面向对象的思想

面向对象（Object-Oriented Programming，简称 OOP）是一种编程范式，它通过类和对象来组织代码。OOP 的核心思想是将现实世界中的事物抽象成“对象”，并通过这些对象来完成特定的功能。

- **面向过程**：编程中的面向过程思想可以理解为通过一系列的步骤和操作来解决问题。比如，在电商系统中，面向过程的方式会专注于“如何实现添加商品到购物车”这件事情。
- **面向对象**：而面向对象更关注的是“谁”去完成这个操作。在电商场景中，关注的不是“如何添加商品到购物车”，而是“购物车对象”负责管理商品的添加、删除等操作。这样通过购物车这个对象，可以封装一系列与之相关的行为。

### 2.类和对象

- **类**：类是对一类事物的抽象描述，它定义了该类事物的属性和行为。例如，电商系统中的`Product`类就可以代表所有的商品，定义商品的属性如名称、价格、库存量等，还可以定义一些行为如计算折扣价格、检查库存等。
- **对象**：对象是类的实例化，是类的具体表现。比如“iPhone 14”这个商品就是`Product`类的一个对象，它有特定的名称、价格、库存。

```java
// 商品类
class Product {
    String name;
    double price;
    int stock;

    public void displayProductInfo() {
        System.out.println("商品名称：" + name + "，价格：" + price + "，库存：" + stock);
    }
}

// 测试类
public class ECommerceApp {
    public static void main(String[] args) {
        // 创建对象，实例化商品
        Product iphone = new Product();
        iphone.name = "iPhone 14";
        iphone.price = 9999.99;
        iphone.stock = 50;

        iphone.displayProductInfo();
    }
}
```

输出结果：

```
商品名称：iPhone 14，价格：9999.99，库存：50
```

### 3.对象的特征和行为

- **特征**：对象的特征由属性（成员变量）来描述。比如商品的名称、价格、库存等都是它的特征。
- **行为**：对象的行为通过方法来表现。商品的行为可能包括展示信息、添加到购物车、检查库存等。

### 4.面向对象编程设计

在面向对象的编程设计中，一般遵循以下步骤：

1. **创建类**：在类中定义属性（特征）和方法（行为）。
2. **实例化对象**：通过类创建对象。
3. **操作对象的属性和方法**：调用对象的方法，操作对象的属性。

#### 示例：电商系统的购物车

1. 类：`Cart`类代表购物车。
2. 对象：具体的购物车对象。
3. 属性：购物车中的商品列表。
4. 方法：添加商品、移除商品、查看购物车内容等。

```java
// 购物车类
class Cart {
    // 属性：购物车中的商品列表
    List<Product> productList = new ArrayList<>();

    // 方法：添加商品
    public void addProduct(Product product) {
        productList.add(product);
        System.out.println(product.name + " 已添加到购物车");
    }

    // 方法：显示购物车内容
    public void displayCart() {
        System.out.println("购物车内容：");
        for (Product product : productList) {
            product.displayProductInfo();
        }
    }
}

// 测试类
public class ECommerceApp {
    public static void main(String[] args) {
        Product iphone = new Product();
        iphone.name = "iPhone 14";
        iphone.price = 9999.99;
        iphone.stock = 50;

        Product laptop = new Product();
        laptop.name = "MacBook Pro";
        laptop.price = 15999.99;
        laptop.stock = 30;

        // 创建购物车对象
        Cart myCart = new Cart();
        myCart.addProduct(iphone);
        myCart.addProduct(laptop);

        // 查看购物车内容
        myCart.displayCart();
    }
}
```

输出结果：

```
iPhone 14 已添加到购物车
MacBook Pro 已添加到购物车
购物车内容：
商品名称：iPhone 14，价格：9999.99，库存：50
商品名称：MacBook Pro，价格：15999.99，库存：30
```

### 5.多个对象的实例化

在面向对象编程中，可以实例化多个对象，每个对象都有独立的属性，互不干扰。例如在一个电商平台上，可以有多个购物车对象，每个购物车对象包含的商品列表都是独立的。

#### 示例：两个用户的购物车

```java
// 测试类
public class ECommerceApp {
    public static void main(String[] args) {
        Product iphone = new Product();
        iphone.name = "iPhone 14";
        iphone.price = 9999.99;
        iphone.stock = 50;

        Product laptop = new Product();
        laptop.name = "MacBook Pro";
        laptop.price = 15999.99;
        laptop.stock = 30;

        // 用户1的购物车
        Cart cartUser1 = new Cart();
        cartUser1.addProduct(iphone);

        // 用户2的购物车
        Cart cartUser2 = new Cart();
        cartUser2.addProduct(laptop);

        // 查看用户1和用户2的购物车内容
        System.out.println("用户1的购物车：");
        cartUser1.displayCart();

        System.out.println("用户2的购物车：");
        cartUser2.displayCart();
    }
}
```

输出结果：

```
iPhone 14 已添加到购物车
MacBook Pro 已添加到购物车
用户1的购物车：
购物车内容：
商品名称：iPhone 14，价格：9999.99，库存：50
用户2的购物车：
购物车内容：
商品名称：MacBook Pro，价格：15999.99，库存：30
```

### 6.局部变量与成员变量

- **成员变量**：在类内部定义的变量，它属于类的对象，每个对象都有自己的成员变量。成员变量存在于堆内存中。
- **局部变量**：在方法中定义的变量，它的作用范围仅限于方法内部，存在于栈内存中。局部变量必须在使用前初始化。

#### 示例：局部变量与成员变量的区别

```java
class Order {
    String orderId;  // 成员变量

    public void placeOrder() {
        String paymentMethod = "Credit Card";  // 局部变量
        System.out.println("订单号：" + orderId + "，支付方式：" + paymentMethod);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Order order = new Order();
        order.orderId = "1001";
        order.placeOrder();
    }
}
```

### 7.引用类型传参

在面向对象编程中，对象作为方法的参数时，传递的是对象的引用，因此方法内对对象属性的修改会影响到原对象。

#### 示例：电商中的商品更新

```java
class Product {
    String name;
    double price;

    public void updatePrice(double newPrice) {
        this.price = newPrice;
        System.out.println("商品价格更新为：" + newPrice);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Product product = new Product();
        product.name = "iPhone 14";
        product.price = 9999.99;

        // 调用方法，修改商品价格
        updateProductPrice(product, 8999.99);

        // 检查商品价格是否被修改
        System.out.println("修改后商品价格：" + product.price);
    }

    public static void updateProductPrice(Product product, double newPrice) {
        product.updatePrice(newPrice);
    }
}
```

输出结果：

```
商品价格更新为：8999.99
修改后商品价格：8999.99
```

### 8.总结

通过类和对象的概念，面向对象编程能够将复杂的系统分解为多个具有独立功能的模块，这样代码不仅更易于维护，还能提高代码的复用性。

## 23. 封装，继承和多态

面向对象编程（OOP）的三大核心特性是封装、继承和多态。这三大特性让代码更加模块化、可维护和扩展性更好。

### 1. 封装

#### 1.1 封装的概念

封装是将对象的属性和行为放在一起，使得这些数据和行为可以以某种方式被隐藏或保护，防止外部直接访问或修改。封装通过将类的属性设为`private`，然后通过`public`的`get`和`set`方法来访问或修改这些属性。

#### 1.2 封装的作用

封装的主要作用是：

1. **保护数据安全**：防止数据被随意修改。
2. **隐藏实现细节**：外部不需要知道对象内部是如何实现的，只需要通过公共接口访问。
3. **提高代码的可维护性**：将代码的复杂性隐藏起来，减少错误的发生。

#### 1.3 封装的实现

封装通常通过`private`来隐藏类的属性，然后使用`public`的`get`和`set`方法控制对属性的访问。

#### 示例：电商系统中的商品封装

在电商系统中，一个商品的价格、库存等属性可能需要保护，不能直接被修改。通过封装，可以控制这些属性的修改方式。

```java
class Product {
    private String name;
    private double price;
    private int stock;

    // Getter 和 Setter 方法
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        } else {
            System.out.println("价格必须大于0！");
        }
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        if (stock >= 0) {
            this.stock = stock;
        } else {
            System.out.println("库存不能为负！");
        }
    }

    public void displayProductInfo() {
        System.out.println("商品名称：" + name + "，价格：" + price + "，库存：" + stock);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Product product = new Product();
        product.setName("iPhone 14");
        product.setPrice(8999.99);
        product.setStock(100);

        product.displayProductInfo();
    }
}
```

#### 输出：

```
商品名称：iPhone 14，价格：8999.99，库存：100
```

### 2. 继承

#### 2.1 继承的概念

继承是指一个类可以继承另一个类的属性和方法，从而复用父类的代码。子类可以扩展父类的功能，也可以重写父类的方法。

#### 2.2 继承的作用

- **代码复用**：子类可以继承父类的属性和方法，避免重复代码。
- **代码扩展**：子类可以在继承的基础上，添加新的功能。
- **增强可维护性**：父类的修改会自动反映到子类中，减少维护成本。

#### 2.3 继承的规则

1. 使用`extends`关键字表示继承关系。
2. 子类继承父类的非私有属性和方法。
3. Java 只支持**单继承**，但一个类可以实现多个接口。
4. 继承可以传递，子类可以继续被继承。

#### 示例：电商系统中的用户继承关系

假设电商系统中有多个类型的用户，如普通用户和 VIP 用户，VIP 用户享有额外的折扣。可以通过继承来实现用户类型的区分。

```java
// 用户类
class User {
    String name;
    String email;

    public void displayUserInfo() {
        System.out.println("用户名：" + name + "，邮箱：" + email);
    }
}

// VIP用户类继承用户类
class VIPUser extends User {
    double discountRate;

    public void displayVIPInfo() {
        System.out.println("VIP用户名：" + name + "，折扣率：" + discountRate);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        VIPUser vipUser = new VIPUser();
        vipUser.name = "张三";
        vipUser.email = "zhangsan@example.com";
        vipUser.discountRate = 0.8;

        vipUser.displayUserInfo();
        vipUser.displayVIPInfo();
    }
}
```

#### 输出：

```
用户名：张三，邮箱：zhangsan@example.com
VIP用户名：张三，折扣率：0.8
```

### 3. 多态

#### 3.1 多态的概念

多态是指同一个方法在不同对象上的表现不同。即父类的引用可以指向子类对象，方法调用时会根据对象的实际类型调用相应的方法。

#### 3.2 多态的作用

- **统一接口**：可以通过父类接口调用子类的不同实现。
- **代码灵活性**：增加代码的扩展性，可以轻松地添加新的子类，而无需修改现有的代码。

#### 3.3 多态的实现方式

多态通常通过**方法重写**实现。子类重写父类的方法后，通过父类引用调用时，实际执行的是子类的方法。

#### 示例：电商系统中的多态应用

电商系统中有多种支付方式，例如信用卡支付和支付宝支付。每种支付方式都实现`Payment`类的`pay()`方法，但具体实现不同。

```java
// 支付类
class Payment {
    public void pay(double amount) {
        System.out.println("支付金额：" + amount);
    }
}

// 信用卡支付类
class CreditCardPayment extends Payment {
    @Override
    public void pay(double amount) {
        System.out.println("使用信用卡支付：" + amount);
    }
}

// 支付宝支付类
class AlipayPayment extends Payment {
    @Override
    public void pay(double amount) {
        System.out.println("使用支付宝支付：" + amount);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        // 父类引用指向子类对象
        Payment payment1 = new CreditCardPayment();
        Payment payment2 = new AlipayPayment();

        payment1.pay(100.0);  // 实际调用CreditCardPayment类的pay方法
        payment2.pay(200.0);  // 实际调用AlipayPayment类的pay方法
    }
}
```

#### 输出：

```
使用信用卡支付：100.0
使用支付宝支付：200.0
```

### 4. 总结

- **封装**：保护对象的属性，提供公共访问接口，防止外部直接操作属性。
- **继承**：子类继承父类的属性和方法，避免代码重复，实现代码复用和扩展。
- **多态**：通过父类引用调用子类方法，增强代码的灵活性和可扩展性。

## 24. 重要关键字

在 Java 编程中，有一些关键字对于编写高效、可扩展的代码至关重要，本文将详细探讨这些关键字：`static`(静态)、`abstract`(抽象)、`implements`(接口实现)、`final`(终态)。我们将以电商相关的实例来说明这些关键字的应用。

### 1. `static` (静态)

#### 1.1 `static` 概念

- `static` 是 Java 中的关键字，用于修饰成员（包括变量和方法）。
- 它标识成员属于类而不是某个对象，因此被称为类级别的成员。

#### 1.2 `static` 特点

- `static` 修饰的成员是**静态成员**，与类相关，属于类本身，而不是某个实例。
- 静态成员随着类的加载而加载，优先于对象进行加载。
- 静态成员可以通过类名直接访问，不需要实例化类对象。
- 静态成员在内存中只有一份，多个实例共享这一份资源。
- 静态成员只能访问静态成员，不能访问非静态成员。
- 静态方法内不能使用`this`和`super`关键字。

#### 1.3 静态属性与方法

静态属性常用于定义常量或状态值，静态方法常用于工具类或工厂方法。

#### 示例：电商系统中的静态属性与方法

在电商系统中，我们可以使用静态属性和方法来定义系统中的一些全局常量或计算工具。例如，定义电商平台的订单状态和用于价格计算的工具类。

```java
class OrderStatus {
    public static final String PENDING = "Pending";
    public static final String SHIPPED = "Shipped";
    public static final String DELIVERED = "Delivered";
}

class PriceCalculator {
    public static double calculateFinalPrice(double price, double discount) {
        return price - (price * discount);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        String status = OrderStatus.PENDING;  // 使用静态常量
        System.out.println("订单状态：" + status);

        double price = 100.0;
        double discount = 0.1;
        double finalPrice = PriceCalculator.calculateFinalPrice(price, discount);  // 调用静态方法
        System.out.println("最终价格：" + finalPrice);
    }
}
```

#### 输出：

```
订单状态：Pending
最终价格：90.0
```

### 2. `abstract` (抽象)

#### 2.1 `abstract` 概念

- `abstract` 关键字用于声明抽象类和抽象方法。
- 抽象类不能被实例化，必须被子类继承，子类需要实现抽象类中的抽象方法。
- 抽象方法是没有具体实现的方法，子类必须提供具体的实现。

#### 2.2 `abstract` 特点

- 抽象类可以包含抽象方法和普通方法。
- 抽象方法没有方法体，具体实现由子类提供。
- 抽象类不能实例化，但可以作为多态的引用类型。

#### 示例：电商系统中的抽象类

在电商系统中，可以使用抽象类来表示产品的通用特性，而具体的产品如电子产品、服装等则可以继承该抽象类并实现具体的行为。

```java
abstract class Product {
    protected String name;
    protected double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public abstract void displayDetails();  // 抽象方法

    public void applyDiscount(double discount) {
        this.price -= this.price * discount;
    }
}

class Electronics extends Product {
    public Electronics(String name, double price) {
        super(name, price);
    }

    @Override
    public void displayDetails() {
        System.out.println("电子产品: " + name + "，价格: " + price);
    }
}

class Clothing extends Product {
    public Clothing(String name, double price) {
        super(name, price);
    }

    @Override
    public void displayDetails() {
        System.out.println("服装: " + name + "，价格: " + price);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Product laptop = new Electronics("MacBook Pro", 15000);
        Product tShirt = new Clothing("Nike T-shirt", 500);

        laptop.displayDetails();
        tShirt.displayDetails();

        laptop.applyDiscount(0.1);  // 打折
        laptop.displayDetails();  // 更新后的价格
    }
}
```

#### 输出：

```
电子产品: MacBook Pro，价格: 15000.0
服装: Nike T-shirt，价格: 500.0
电子产品: MacBook Pro，价格: 13500.0
```

### 3. `implements` (接口实现)

#### 3.1 `implements` 概念

- 接口是 Java 中的一种特殊类型，它定义了类必须实现的一组方法。
- 接口中的方法都是抽象方法，类通过`implements`关键字来实现接口。

#### 3.2 `implements` 特点

- 接口中的方法默认是`public`和`abstract`。
- 接口只能声明方法，不能包含实现。
- 类可以实现多个接口，接口弥补了 Java 单继承的限制。

#### 示例：电商系统中的接口实现

在电商系统中，我们可以定义多个接口来实现不同的功能，比如定义一个支付接口，供不同的支付方式来实现。

```java
interface PaymentMethod {
    void pay(double amount);
}

class CreditCardPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("使用信用卡支付: " + amount + " 元");
    }
}

class PayPalPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("使用PayPal支付: " + amount + " 元");
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        PaymentMethod payment1 = new CreditCardPayment();
        PaymentMethod payment2 = new PayPalPayment();

        payment1.pay(200.0);  // 调用信用卡支付
        payment2.pay(150.0);  // 调用PayPal支付
    }
}
```

#### 输出：

```
使用信用卡支付: 200.0 元
使用PayPal支付: 150.0 元
```

### 4. `final` (终态)

#### 4.1 `final` 概念

- `final` 是一个修饰符，表示最终状态，可以用于类、方法和变量。
- `final` 类不能被继承，`final` 方法不能被重写，`final` 变量的值不能被改变。

#### 4.2 `final` 特点

- `final` 修饰类：该类不能被继承。
- `final` 修饰方法：该方法不能被子类重写。
- `final` 修饰变量：该变量是常量，赋值后不能再修改。

#### 示例：电商系统中的`final`关键字

在电商系统中，`final` 关键字可以用来定义不可更改的订单号，或者定义不能被继承的类，例如物流系统中的快递公司类。

```java
final class ShippingCompany {
    private final String companyName;

    public ShippingCompany(String companyName) {
        this.companyName = companyName;
    }

    public final void printDetails() {
        System.out.println("快递公司: " + companyName);
    }
}

// 不能继承 ShippingCompany
// class FastShipping extends ShippingCompany {}  // 编译报错

public class ECommerceApp {
    public static void main(String[] args) {
        ShippingCompany company = new ShippingCompany("顺丰速递");
        company.printDetails();
    }
}
```

#### 输出：

```
快递公司: 顺丰速递
```

### 5. 总结

- **`static`**：用于定义类级别的成员，适用于常量、状态值或工具类方法。
- **`abstract`**：用于定义抽象类和抽象方法，作为模板，子类必须实现抽象方法。
- **`implements`**：用于实现接口，适用于定义通用行为和标准。
- **`final`**：用于防止继承或修改，适用于常量、不可重写的方法和不可继承的类。

## 25. 代码块与内部类

### 1. 代码块

Java 代码块是一种特殊的语法结构，用于在特定时机执行一段代码。在电商系统中，代码块可以用于执行资源的初始化、对象的创建等。

#### 1.1 代码块种类

Java 代码块主要分为三种：**静态代码块**、**构造代码块**、**局部代码块**。

1. **静态代码块**：

   - **位置**：在类中使用 `static {}`。
   - **执行时机**：静态代码块在类加载时执行一次，且只执行一次，通常用于初始化静态资源。
   - **作用**：可以用于资源的加载或初始化工作，如加载数据库驱动、配置文件等。

2. **构造代码块**：

   - **位置**：在类中使用 `{}`。
   - **执行时机**：构造代码块在每次创建对象时执行，优先于构造方法执行。可用于对象的初始化。
   - **作用**：提取构造方法的共性代码，每次创建对象时都会执行。

3. **局部代码块**：
   - **位置**：在方法或代码块内部。
   - **作用**：限制变量的作用范围，提高代码可读性和资源的释放效率。

#### 1.2 代码块执行顺序

实例化对象的顺序如下：

1. 静态属性
2. 静态代码块（只执行一次）
3. 成员属性
4. 构造代码块
5. 构造方法

#### 示例：电商系统中的代码块

```java
class ECommercePlatform {
    // 静态代码块 - 初始化静态资源
    static {
        System.out.println("加载数据库驱动...");
    }

    // 构造代码块 - 每次创建对象时都会执行
    {
        System.out.println("初始化电商平台配置...");
    }

    public ECommercePlatform() {
        System.out.println("创建电商平台实例...");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("第一次创建电商平台实例：");
        ECommercePlatform platform1 = new ECommercePlatform();

        System.out.println("\n第二次创建电商平台实例：");
        ECommercePlatform platform2 = new ECommercePlatform();
    }
}
```

#### 输出：

```
加载数据库驱动...
第一次创建电商平台实例：
初始化电商平台配置...
创建电商平台实例...

第二次创建电商平台实例：
初始化电商平台配置...
创建电商平台实例...
```

### 2. 内部类

内部类是定义在另一个类内部的类。Java 内部类可以访问外部类的成员，并且是封装性和简化代码的一种方式。

#### 2.1 内部类种类

1. **成员内部类**：

   - 成员内部类是定义在类中的成员位置，和普通成员一样可以被外部类访问，也可以访问外部类的成员（包括私有成员）。

2. **局部内部类**：

   - 局部内部类是在方法或者代码块中定义的类。它只能在定义它的方法或代码块内使用。

3. **匿名内部类**：
   - 匿名内部类是没有名字的类，通常用于简化代码，尤其是用于接口的实现。常见于回调函数和事件监听中。

#### 2.2 示例：电商系统中的内部类

##### 2.2.1 成员内部类

在电商系统中，订单可能会有一些特定的内部功能，可以通过成员内部类来实现这些功能。

```java
class Order {
    private String orderId;
    private double totalAmount;

    public Order(String orderId, double totalAmount) {
        this.orderId = orderId;
        this.totalAmount = totalAmount;
    }

    // 成员内部类：支付类
    class Payment {
        public void processPayment() {
            System.out.println("处理订单 " + orderId + " 的支付，总金额为：" + totalAmount);
        }
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Order order = new Order("1001", 150.50);
        Order.Payment payment = order.new Payment();  // 创建内部类对象
        payment.processPayment();
    }
}
```

#### 输出：

```
处理订单 1001 的支付，总金额为：150.5
```

##### 2.2.2 局部内部类

局部内部类可以用来实现一些临时性的功能，例如在电商系统中处理订单的临时操作。

```java
class Product {
    public void applyDiscount(double discount) {
        class DiscountCalculator {  // 局部内部类
            public double calculate(double price) {
                return price * (1 - discount);
            }
        }
        DiscountCalculator calculator = new DiscountCalculator();
        double discountedPrice = calculator.calculate(200);
        System.out.println("折扣后的价格为：" + discountedPrice);
    }
}

public class ECommerceApp {
    public static void main(String[] args) {
        Product product = new Product();
        product.applyDiscount(0.2);  // 使用局部内部类
    }
}
```

#### 输出：

```
折扣后的价格为：160.0
```

##### 2.2.3 匿名内部类

匿名内部类可以在电商系统中处理一次性的操作，比如使用不同的支付方式来支付订单。

```java
interface PaymentMethod {
    void pay(double amount);
}

public class ECommerceApp {
    public static void main(String[] args) {
        // 使用匿名内部类进行信用卡支付
        PaymentMethod creditCardPayment = new PaymentMethod() {
            @Override
            public void pay(double amount) {
                System.out.println("使用信用卡支付: " + amount);
            }
        };
        creditCardPayment.pay(300.00);

        // 使用匿名内部类进行 PayPal 支付
        PaymentMethod payPalPayment = new PaymentMethod() {
            @Override
            public void pay(double amount) {
                System.out.println("使用 PayPal 支付: " + amount);
            }
        };
        payPalPayment.pay(150.00);
    }
}
```

#### 输出：

```
使用信用卡支付: 300.0
使用 PayPal 支付: 150.0
```

### 3. 匿名内部类与多态

匿名内部类经常与多态结合使用，尤其是在实现回调接口、处理事件等方面。它们的优势在于简化代码，无需创建具体的类。

#### 示例：电商系统中的匿名内部类与多态结合

在电商系统中，当用户选择支付方式时，可以使用匿名内部类来动态选择不同的支付手段：

```java
interface ShippingMethod {
    void ship();
}

public class ECommerceApp {
    public static void main(String[] args) {
        selectShippingMethod("Express").ship();
    }

    public static ShippingMethod selectShippingMethod(String type) {
        if ("Express".equals(type)) {
            return new ShippingMethod() {  // 使用匿名内部类返回具体实现
                @Override
                public void ship() {
                    System.out.println("使用快递配送");
                }
            };
        } else {
            return new ShippingMethod() {
                @Override
                public void ship() {
                    System.out.println("使用普通配送");
                }
            };
        }
    }
}
```

#### 输出：

```
使用快递配送
```

### 4.总结

- **代码块**：用于在类加载或对象创建时初始化数据，主要包括静态代码块、构造代码块和局部代码块。
- **内部类**：包括成员内部类、局部内部类和匿名内部类，适用于封装类内部的逻辑或实现多态。
- **匿名内部类**：多用于一次性实现接口或抽象类的方法，常与多态结合使用，简化代码。

## 26. Object 与包装类

### 1. Object 类

#### 1.1 概念

`Object` 类是 Java 中所有类的祖先，所有类都直接或间接继承自 `Object`。`Object` 提供了一些所有对象都可以使用的方法，如 `toString()`、`equals()`、`hashCode()` 等。

#### 1.2 Object 的创建方式

`Object` 是 Java 中所有类的祖先类，因此创建对象的方式也具有多样性。以下是几种常见的创建方式：

1. **直接创建对象**：使用 `new` 关键字创建一个 `Object` 实例。

   ```java
   Object obj = new Object();
   ```

2. **传参方式创建对象**：将对象作为参数传递给方法。

   ```java
   public void createObject(Object obj) {
       // 对象操作
   }
   createObject(new Object());
   ```

3. **返回值方式创建对象**：将对象作为方法的返回值。
   ```java
   public Object getObject() {
       return new Object();
   }
   Object obj = getObject();
   ```

#### 1.3 Object 的常用方法

##### 1.3.1 getClass() 与 hashCode() 方法

`Object` 类提供了 `getClass()` 方法用于获取对象的类类型，`hashCode()` 方法用于获取对象的哈希码。

```java
public class TestObject {
    public static void main(String[] args) {
        Object obj = new Object();
        System.out.println("对象的类类型: " + obj.getClass()); // 输出对象的类类型
        System.out.println("对象的哈希码: " + obj.hashCode()); // 输出对象的哈希码
    }
}
```

**输出示例：**

```
对象的类类型: class java.lang.Object
对象的哈希码: 366712642
```

##### 1.3.2 toString() 方法

`toString()` 方法返回对象的字符串表示，默认情况下返回的是类名加上对象的哈希码。

```java
public class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{name='" + name + "', price=" + price + "}";
    }

    public static void main(String[] args) {
        Product product = new Product("Laptop", 1200.00);
        System.out.println(product);  // 自动调用 toString() 方法
    }
}
```

**输出示例：**

```
Product{name='Laptop', price=1200.0}
```

#### 1.4 equals() 方法

`equals()` 方法用于比较两个对象的内容是否相同。默认情况下，`Object` 类的 `equals()` 方法是比较对象的地址，可以通过重写该方法来比较对象的属性。

```java
public class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Product product = (Product) obj;
        return Double.compare(product.price, price) == 0 &&
                Objects.equals(name, product.name);
    }

    public static void main(String[] args) {
        Product product1 = new Product("Laptop", 1200.00);
        Product product2 = new Product("Laptop", 1200.00);
        System.out.println(product1.equals(product2));  // true
    }
}
```

**输出示例：**

```
true
```

#### 1.5 finalize() 方法

`finalize()` 方法是在垃圾回收器将对象从内存中删除之前调用的，用于清理资源。但是，现在已经不推荐使用 `finalize()`，因为垃圾回收是不可预测的，且它的使用影响性能。

```java
public class Product {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    @Override
    protected void finalize() throws Throwable {
        System.out.println(name + " 对象被销毁");
    }

    public static void main(String[] args) {
        Product product = new Product("Laptop");
        product = null;
        System.gc(); // 请求垃圾回收
    }
}
```

**输出示例：**

```
Laptop 对象被销毁
```

#### 1.6 Object 类练习

```java
import java.util.Objects;

public class TestObject {
    public static void main(String[] args) {
        Student s1 = new Student("Alice", 20);
        Student s2 = new Student("Alice", 20);

        // hashCode
        System.out.println(s1.hashCode()); // HashCode based on attributes
        System.out.println(s2.hashCode()); // Same hashCode as s1

        // toString
        System.out.println(s1);  // 调用重写的 toString 方法

        // equals
        System.out.println(s1.equals(s2));  // true
    }
}

class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + "}";
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }
}
```

**输出示例：**

```
633627076
633627076
Student{name='Alice', age=20}
true
```

### 2. 包装类

#### 2.1 概念

Java 是一种面向对象的编程语言，基本数据类型（如 `int`、`char` 等）破坏了面向对象的纯粹性。为了解决这个问题，Java 提供了包装类来将基本数据类型封装成对象。包装类提供了丰富的操作功能，并且与基本数据类型相对应。

#### 2.2 基本类型与包装类的对应关系

| 基本类型  | 包装类      |
| --------- | ----------- |
| `byte`    | `Byte`      |
| `short`   | `Short`     |
| `int`     | `Integer`   |
| `long`    | `Long`      |
| `float`   | `Float`     |
| `double`  | `Double`    |
| `char`    | `Character` |
| `boolean` | `Boolean`   |

#### 2.3 Number 类

`Number` 是数字包装类的抽象父类，提供了将数值转换为不同类型的方法，如 `intValue()`、`doubleValue()` 等。

```java
public class TestNumber {
    public static void main(String[] args) {
        Integer intValue = 42;
        Double doubleValue = 3.14;

        System.out.println("intValue as double: " + intValue.doubleValue());
        System.out.println("doubleValue as int: " + doubleValue.intValue());
    }
}
```

**输出示例：**

```
intValue as double: 42.0
doubleValue as int: 3
```

#### 2.4 Integer 类和缓冲区

`Integer` 类是 `int` 的包装类，`Integer` 缓存了从 `-128` 到 `127` 之间的整数对象。这意味着在这个范围内的相同整数，使用 `Integer.valueOf()` 方法创建时，会返回相同的对象。

```java
public class TestInteger {
    public static void main(String[] args) {
        Integer a = Integer.valueOf(127);
        Integer b = Integer.valueOf(127);
        Integer c = Integer.valueOf(128);
        Integer d = Integer.valueOf(128);

        System.out.println(a == b); // true
        System.out.println(c == d); // false
    }
}
```

**输出示例：**

```
true
false
```

#### 2.5 Double 类

`Double` 类是 `double` 的包装类，常用于处理浮点数的包装。

```java
public class TestDouble {
    public static void main(String[] args) {
        Double d1 = Double.valueOf(3.14);
        Double d2 = Double.parseDouble("2.71");

        System.out.println(d1 + d2);  // 5.85
    }
}
```

**输出示例：**

```
5.85
```

#### 2.6 自动装箱与自动拆箱

从 JDK 1.5 开始，Java 支持自动装箱和拆箱，自动装箱是指将基本数据类型自动转换为对应的包装类型，而自动拆箱则是将包装类型自动转换为基本数据类型。

```java
public class TestAutoBoxing {
    public static void

 main(String[] args) {
        Integer a = 10;  // 自动装箱，相当于 Integer a = Integer.valueOf(10);
        int b = a;       // 自动拆箱，相当于 int b = a.intValue();

        System.out.println(a + b);  // 20
    }
}
```

**输出示例：**

```
20
```

### 3.总结

- `Object` 是所有类的祖先类，提供了通用的方法，如 `toString()`、`equals()`、`hashCode()` 等。
- 包装类将基本数据类型封装为对象，提供了更丰富的操作功能。
- `Integer` 类支持从 `-128` 到 `127` 的整数缓存，节省内存和提高性能。
- Java 支持自动装箱和拆箱，简化了基本类型与包装类型之间的转换。

## 27. 字符串

### 1. 字符串的创建

在 Java 中，字符串是一种引用类型，表示字符序列。`String` 类用于表示字符串，且字符串一旦创建，内容不可更改，即字符串是**不可变的**。

#### 字符串的创建方式

1. **通过字符数组创建**：
   使用 `new String(char[])` 构造函数通过字符数组创建字符串。

   ```java
   char[] chars = {'a', 'b', 'c'};
   String s1 = new String(chars);
   ```

2. **直接赋值创建**：
   使用双引号直接赋值是一种常见的创建字符串的方式。

   ```java
   String s2 = "abc";
   ```

3. **不同创建方式的内存表现**：

   - **直接赋值创建字符串**：当使用字面量的方式创建字符串时，例如 `String s = "abc";`，JVM 会首先检查字符串常量池中是否存在值为 `"abc"` 的字符串。如果存在，直接返回引用；如果不存在，则在常量池中创建一个新的 `"abc"` 字符串对象，并返回其引用。
   - **使用 `new` 关键字创建字符串**：当使用 `new` 关键字创建字符串时，例如 `String s = new String("abc");`，JVM 会在堆内存中创建一个新的字符串对象，即使常量池中已经存在 `"abc"` 字符串，该对象也会有不同的内存地址。因此，通过 `new` 关键字创建的字符串对象与常量池中的字符串对象不同。
   - **字符串常量池**：字符串常量池位于 JVM 的方法区中（在 JDK 8 及之后的版本中，方法区被称为元空间），用于存储程序中所有以字面值（例如 `"abc"`）方式声明的字符串。常量池中的字符串是唯一的且共享的。

#### 例子：

```java
public class TestStringPool {
    public static void main(String[] args) {
        // 直接赋值，字符串常量池中存储 "abc"
        String s1 = "abc";
        String s2 = "abc";

        // 使用 new 关键字创建，堆中创建新的字符串对象
        String s3 = new String("abc");
        String s4 = new String("abc");

        // 比较字符串引用
        System.out.println(s1 == s2);  // true, s1 和 s2 指向常量池中的同一对象
        System.out.println(s1 == s3);  // false, s1 指向常量池中的对象，s3 指向堆中的对象
        System.out.println(s3 == s4);  // false, s3 和 s4 是堆中不同的对象

        // 使用 intern() 方法，将堆中的字符串引用加入常量池
        String s5 = s3.intern();
        System.out.println(s1 == s5);  // true, s5 是常量池中的对象，与 s1 相同
    }
}
```

**输出：**

```
true
false
false
true
```

### 2. 字符串的常用方法

`String` 类提供了丰富的方法用于字符串操作，常见方法如下：

1. `int length()`：返回字符串的长度。
2. `char charAt(int index)`：返回指定索引处的字符。
3. `boolean equals(Object anObject)`：比较字符串的内容是否相同。
4. `boolean startsWith(String prefix)`：判断字符串是否以指定的前缀开始。
5. `boolean endsWith(String suffix)`：判断字符串是否以指定的后缀结束。
6. `int indexOf(String str)`：返回指定子字符串在字符串中第一次出现的索引位置。
7. `String substring(int beginIndex)`：返回从指定索引开始到字符串末尾的子字符串。
8. `String concat(String str)`：将指定的字符串连接到此字符串的末尾。
9. `String replace(CharSequence target, CharSequence replacement)`：替换字符串中的子字符串。
10. `String[] split(String regex)`：根据正则表达式拆分字符串为数组。
11. `String trim()`：去除字符串两端的空格。
12. `String toUpperCase()`：将字符串转换为大写。
13. `String toLowerCase()`：将字符串转换为小写。

#### 例子：

```java
public class TestStringMethods {
    public static void main(String[] args) {
        String str = " Hello, Java! ";

        // 去除首尾空格
        System.out.println("Trimmed: " + str.trim());  // "Hello, Java!"

        // 长度
        System.out.println("Length: " + str.length());  // 14

        // 大写转换
        System.out.println("Upper case: " + str.toUpperCase());  // " HELLO, JAVA! "

        // 字符查找
        System.out.println("Char at index 1: " + str.charAt(1));  // 'H'

        // 子字符串
        System.out.println("Substring (7, 11): " + str.substring(7, 11));  // "Java"

        // 字符串替换
        System.out.println("Replace 'Java' with 'World': " + str.replace("Java", "World"));  // " Hello, World! "

        // 字符串分割
        String[] parts = str.split(",");
        for (String part : parts) {
            System.out.println(part);  // " Hello"  and  " Java! "
        }
    }
}
```

**输出：**

```
Trimmed: Hello, Java!
Length: 14
Upper case:  HELLO, JAVA!
Char at index 1: H
Substring (7, 11): Java
Replace 'Java' with 'World':  Hello, World!
 Hello
 Java!
```

### 3. StringBuilder 和 StringBuffer

`StringBuilder` 和 `StringBuffer` 都是可变字符串，允许对字符串进行修改，区别在于：

- `StringBuilder` 是非线程安全的，性能较高。
- `StringBuffer` 是线程安全的，适合在多线程环境下使用。

#### 常用方法

1. `append()`：在字符串末尾追加内容。
2. `insert()`：在指定位置插入内容。
3. `reverse()`：将字符串反转。
4. `delete()`：删除指定位置的字符。

#### 例子：

```java
public class TestStringBuilder {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        // 追加
        sb.append(" World");
        System.out.println(sb);  // "Hello World"

        // 插入
        sb.insert(5, ",");
        System.out.println(sb);  // "Hello, World"

        // 反转
        sb.reverse();
        System.out.println(sb);  // "dlroW ,olleH"

        // 删除
        sb.delete(0, 6);
        System.out.println(sb);  // "olleH"
    }
}
```

**输出：**

```
Hello World
Hello, World
dlroW ,olleH
olleH
```

### 4. `==` 和 `equals` 的区别

- `==` 比较的是引用的内存地址，只有当两个引用指向同一对象时才返回 `true`。
- `equals()` 比较的是对象的内容。`String` 类已经重写了 `equals()` 方法，用于比较字符串的值是否相同。

#### 例子：

```java
public class TestEquals {
    public static void main(String[] args) {
        String s1 = new String("hello");
        String s2 = new String("hello");

        System.out.println(s1 == s2);  // false, 比较的是内存地址
        System.out.println(s1.equals(s2));  // true, 比较的是内容
    }
}
```

**输出：**

```
false
true
```

### 5. BigDecimal 类

`BigDecimal` 是一种用于处理**高精度浮点数**的类，特别适用于金融、电商等对数值精度要求极高的场景。

#### 创建方式：

1. 使用 `BigDecimal(double val)`，但存在精度问题，容易产生不精确的结果。
2. 使用 `BigDecimal(String val)` 是推荐的方式，确保精确度。

#### 常用方法：

1. `add(BigDecimal bd)`：加法。
2. `subtract(BigDecimal bd)`：减法。
3. `multiply(BigDecimal bd)`：乘法。
4. `divide(BigDecimal bd, int scale, RoundingMode roundingMode)`：除法，带精度和舍入模式。
5. `setScale(int scale, RoundingMode roundingMode)`：设置小数位数和舍入模式。

#### 例子：

```java
import java.math.BigDecimal;
import java.math.RoundingMode;

public class TestBigDecimal {
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("10.05");
        BigDecimal num2 = new BigDecimal("3.14");

        // 加法
        BigDecimal sum = num1.add(num2);
        System.out.println("Sum: " + sum);  // 13.19

        // 减法
        BigDecimal diff = num1.subtract(num2);
        System.out.println("Difference: " + diff);  // 6.91

        // 乘法
        BigDecimal product = num1.multiply(num2);
        System.out.println("Product: " + product);  // 31.3570

        // 除法 (保留两位小数，四舍五入)
        BigDecimal quotient = num1.divide(num2, 2, RoundingMode.HALF_UP);
        System.out.println("Quotient: " + quotient);  // 3.20
    }
}
```

**输出：**

```
Sum: 13.19
Difference: 6.91
Product: 31.3570
Quotient: 3.20
```

### 6.总结

- `String` 是不可变的字符串类型，而 `StringBuilder` 和 `StringBuffer` 是可变的字符串，

后者适合用于频繁修改字符串的场景。

- `BigDecimal` 用于高精度浮点数运算，避免了 `double` 类型无法精确表示的计算问题。
- `==` 比较内存地址，而 `equals()` 比较内容。

好的，我会根据假设的当前时间“中国 2024 年 8 月 17 日 20:00”补充输出并重新整理。

---

## 28. 日期类

Java 中的日期和时间类用于处理各种与时间相关的功能，包括获取当前时间、计算时间差、格式化日期、解析日期等。常用的日期类包括旧版本的 `Date`、`Calendar` 和 `SimpleDateFormat`，以及 Java 8 引入的全新日期和时间 API `java.time`。这些类在不同场景下有各自的优缺点和使用方式。

### 1. **Date 类**

`Date` 类是 Java 最早的日期类，用于表示一个瞬时的时间点，精确到毫秒。虽然功能简单，但由于其设计上的缺陷，比如操作复杂、线程不安全、可变性强，在 Java 8 之后逐渐被新的时间 API 取代。

#### 1.1 Date 的构造函数：

- `Date()`：表示当前时间的 Date 对象。
- `Date(long date)`：表示自 1970 年 1 月 1 日 00:00:00 以来的指定时间（毫秒）。

#### 1.2 常用方法：

- `getTime()`：返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
- `setTime(long time)`：设置 Date 对象的时间。

#### 1.3 Date 示例：

```java
import java.util.Date;

public class TestDate {
    public static void main(String[] args) {
        Date now = new Date(); // 当前时间
        System.out.println("当前时间：" + now);

        // 设置时间
        Date specificTime = new Date(1000 * 60 * 60); // 从1970-01-01起的1小时后
        System.out.println("1小时后的时间：" + specificTime);
    }
}
```

### 2. **SimpleDateFormat 类**

`SimpleDateFormat` 类用于格式化和解析日期，将日期转换为指定格式的字符串，或将字符串解析为日期对象。

#### 2.1 常用构造函数：

- `SimpleDateFormat(String pattern)`：使用指定的模式来构造日期格式化器。

#### 2.2 常用方法：

- `format(Date date)`：将 `Date` 对象格式化为字符串。
- `parse(String source)`：将字符串解析为 `Date` 对象。

#### 2.3 SimpleDateFormat 示例：

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestSimpleDateFormat {
    public static void main(String[] args) {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formattedDate = sdf.format(now); // 格式化日期
        System.out.println("格式化后的日期：" + formattedDate);
    }
}
```

### 3. **Calendar 类**

`Calendar` 类是一个抽象类，用于对日期进行复杂的操作，如加减年份、月份等。可以通过 `Calendar.getInstance()` 方法获取 `Calendar` 对象。

#### 3.1 常用方法：

- `get(int field)`：获取指定时间字段的值（如年、月、日）。
- `add(int field, int amount)`：对指定的时间字段进行加减操作。
- `set(int year, int month, int date)`：设置指定日期。

#### 3.2 Calendar 示例：

```java
import java.util.Calendar;

public class TestCalendar {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance(); // 获取当前时间
        int year = calendar.get(Calendar.YEAR); // 获取年份
        int month = calendar.get(Calendar.MONTH) + 1; // 获取月份（从0开始）
        int day = calendar.get(Calendar.DAY_OF_MONTH); // 获取日

        System.out.println("当前日期：" + year + "年" + month + "月" + day + "日");

        // 日期加1年
        calendar.add(Calendar.YEAR, 1);
        System.out.println("一年后：" + calendar.get(Calendar.YEAR) + "年" + (calendar.get(Calendar.MONTH) + 1) + "月" + calendar.get(Calendar.DAY_OF_MONTH) + "日");
    }
}
```

### 4. **Java 8 时间 API (`java.time`)**

Java 8 引入了全新的时间 API 位于 `java.time` 包下，设计简单直观、线程安全且不可变，解决了 `Date` 和 `Calendar` 的缺陷。

#### 4.1 常用类和方法：

1. **LocalDate**：表示日期，不含时间。

   - `LocalDate.now()`：获取当前日期。
   - `LocalDate.of(int year, int month, int dayOfMonth)`：创建指定日期。
   - `plusDays(int days)`：加上指定天数。

   **示例**：

   ```java
   import java.time.LocalDate;

   public class TestLocalDate {
       public static void main(String[] args) {
           LocalDate currentDate = LocalDate.now(); // 当前日期
           System.out.println("当前日期：" + currentDate);
       }
   }
   ```

2. **LocalTime**：表示时间，不含日期。

   - `LocalTime.now()`：获取当前时间。
   - `LocalTime.of(int hour, int minute, int second)`：创建指定时间。

   **示例**：

   ```java
   import java.time.LocalTime;

   public class TestLocalTime {
       public static void main(String[] args) {
           LocalTime currentTime = LocalTime.now(); // 当前时间
           System.out.println("当前时间：" + currentTime);
       }
   }
   ```

3. **LocalDateTime**：表示日期和时间。

   - `LocalDateTime.now()`：获取当前日期时间。
   - `LocalDateTime.of(int year, int month, int dayOfMonth, int hour, int minute)`：创建指定日期时间。

   **示例**：

   ```java
   import java.time.LocalDateTime;

   public class TestLocalDateTime {
       public static void main(String[] args) {
           LocalDateTime currentDateTime = LocalDateTime.now(); // 当前日期和时间
           System.out.println("当前日期和时间：" + currentDateTime);
       }
   }
   ```

4. **Instant**：表示时间戳。

   - `Instant.now()`：获取当前时间戳。

   **示例**：

   ```java
   import java.time.Instant;

   public class TestInstant {
       public static void main(String[] args) {
           Instant now = Instant.now(); // 当前时间戳
           System.out.println("当前时间戳：" + now);
       }
   }
   ```

5. **DateTimeFormatter**：用于格式化和解析日期时间。

   - `DateTimeFormatter.ofPattern(String pattern)`：指定日期时间格式。

   **示例**：

   ```java
   import java.time.LocalDateTime;
   import java.time.format.DateTimeFormatter;

   public class TestDateTimeFormatter {
       public static void main(String[] args) {
           LocalDateTime now = LocalDateTime.now(); // 当前日期时间
           DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
           String formattedDate = now.format(formatter); // 格式化日期时间
           System.out.println("格式化后的日期时间：" + formattedDate);
       }
   }
   ```

### 5. **电商应用场景中的选择建议**

1. **订单时间管理**：使用 `Instant` 或 `LocalDateTime` 来记录订单的创建时间、支付时间等，方便进行后续的订单处理和统计。
2. **促销活动的时间管理**：使用 `LocalDateTime` 设置活动的开始和结束时间，并使用 `Period` 计算活动的剩余时间。

3. **日志记录与追踪**：使用 `Instant` 记录每个操作的时间戳，方便进行日志审查和故障排查。

### 6. **Java 8 时间 API 的优势**

- **线程安全**：Java 8 时间 API 中的所有类都是不可变的，线程安全，非常适合高并发的电商系统。
- **易用性**：API 设计直观，易于使用，避免了 `Date` 和 `Calendar` 的复杂性。
- **性能优化**：相比旧的日期类，`java.time` 包中的类具有更好的性能和线程安全性，适合高性能、高并发的场景。

### 7. **总结**

- 在现代 Java 开发中，建议使用 Java 8 的时间 API (`java.time`) 来处理日期和时间，尤其是在电商系统中。
- 旧的 `Date`、`SimpleDateFormat` 和 `Calendar` 类可以在简单场景下使用，但其缺陷在多线程和复杂操作中可能会导致性能问题和数据错误。

## 29. Random 类、Math 类与 System 类

### 1. Random 类

1. **概念**：`Random` 类用于生成随机数。
2. **常用方法**：
   - `nextInt(int bound)`：生成 `0` 到 `bound-1` 之间的随机整数。
   - `nextDouble()`：生成 `0.0` 到 `1.0` 之间的随机浮点数。

> **Random 类的示例**：

```java
import java.util.Random;

public class TestRandom {
    public static void main(String[] args) {
        Random random = new Random();

        // 生成 0~9 之间的随机整数
        for (int i = 0; i < 5; i++) {
            System.out.print(random.nextInt(10) + " ");
        }

        // 假设输出: 3 8 1 6 4

        // 生成 75~100 之间的随机整数
        int randomNum = random.nextInt(26) + 75;
        System.out.println("\n随机数：" + randomNum);

        // 假设输出: 随机数：87
    }
}
```

### 2. Math 类

1. **概念**：`Math` 类提供数学运算的工具方法，如计算平方根、四舍五入等。
2. **常用方法**：
   - `random()`：生成 `0.0` 到 `1.0` 之间的随机数。
   - `ceil(double a)`：向上取整。
   - `floor(double a)`：向下取整。
   - `round(double a)`：四舍五入。

> **Math 类的示例**：

```java
public class TestMath {
    public static void main(String[] args) {
        // 生成 0.0 到 1.0 之间的随机数
        double randomDouble = Math.random();
        System.out.println("随机小数：" + randomDouble);

        // 假设输出: 随机小数：0.345678

        // 四舍五入、向上取整、向下取整
        System.out.println("四舍五入：" + Math.round(1.5));  // 输出: 2
        System.out.println("向上取整：" + Math.ceil(1.2));  // 输出: 2.0
        System.out.println("向下取整：" + Math.floor(1.8));  // 输出: 1.0
    }
}
```

### 3. System 类

1. **概念**：`System` 类提供一些与系统相关的工具方法。
2. **常用方法**：
   - `arraycopy(Object src, int srcPos, Object dest, int destPos, int length)`：数组拷贝。
   - `currentTimeMillis()`：返回当前时间的毫秒数。
   - `gc()`：提示 JVM 执行垃圾回收。
   - `exit(int status)`：终止当前运行的 Java 虚拟机。

> **System 类的示例**：

```java
public class TestSystem {
    public static void main(String[] args) {
        // 获取当前时间的毫秒数
        long currentTime = System.currentTimeMillis();
        System.out.println("当前时间毫秒数：" + currentTime);

        // 假设输出: 当前时间毫秒数：1723440000000（假设的毫秒数）

        // 数组拷贝
        int[] src = {1, 2, 3, 4, 5};
        int[] dest = new int[5];
        System.arraycopy(src, 0, dest, 0, src.length);
        System.out.print("数组拷贝结果：");
        for (int num : dest) {
            System.out.print(num + " ");
        }

        // 输出: 数组拷贝结果：1 2 3 4 5

        // 手动调用垃圾回收
        System.gc();
    }
}
```

## 30. 集合

### 1. **前言**

在 Java 编程中，集合框架提供了一个统一的架构来存储和操作不同类型的数据。集合是动态的，可调整大小的，不像数组那样固定长度。Java 集合框架包括 `List`、`Set` 和 `Map` 等重要接口，它们有不同的实现类，以适应不同的需求和场景，如 `ArrayList`、`HashSet`、`HashMap` 等。在电商场景中，集合的灵活性和高效性可以帮助管理商品信息、用户数据和订单处理等操作。

### 2. **Collection**

`Collection` 是集合框架的顶层接口，它被 `List` 和 `Set` 接口继承，定义了集合最基础的操作方法。所有 `Collection` 的子接口和实现类，如 `ArrayList`、`LinkedList`、`HashSet`，都继承了这些方法。

### 3. **List**

`List` 接口提供了一种有序集合，可以包含重复的元素。常见的实现类有 `ArrayList` 和 `LinkedList`，它们都有各自的应用场景。

#### **ArrayList**

`ArrayList` 是基于动态数组的实现，适合频繁查询和读取数据的场景。对于电商平台，商品的展示和检索操作通常可以使用 `ArrayList`。

```java
ArrayList<String> products = new ArrayList<>();
products.add("Laptop");
products.add("Smartphone");
```

#### **LinkedList**

`LinkedList` 是基于双向链表实现，适合频繁插入和删除数据的场景。可以用于订单队列或用户访问日志的存储。

```java
LinkedList<Order> orderQueue = new LinkedList<>();
orderQueue.addFirst(new Order("1001"));
```

### 4. **Set**

`Set` 接口代表一组不允许重复的集合。它主要有两个常见实现类：`HashSet` 和 `TreeSet`。

#### **HashSet**

`HashSet` 通过哈希表存储元素，不保证顺序。适用于去重操作，例如电商系统中存储独特的用户 ID。

```java
HashSet<String> userIds = new HashSet<>();
userIds.add("user1");
userIds.add("user2");
```

#### **TreeSet**

`TreeSet` 通过红黑树结构实现，保证元素的排序。可以用于存储有序的商品分类或用户活动记录。

```java
TreeSet<String> categories = new TreeSet<>();
categories.add("Electronics");
categories.add("Fashion");
```

### 5. **Map**

`Map` 接口代表键值对的映射集合。它的常见实现类有 `HashMap` 和 `TreeMap`。

#### **HashMap**

`HashMap` 是基于哈希表的实现，允许键为 `null`，不保证顺序。它适用于存储用户信息、订单编号和详细信息等场景。

```java
HashMap<String, String> productDetails = new HashMap<>();
productDetails.put("ProductID", "12345");
productDetails.put("Name", "Laptop");
```

#### **TreeMap**

`TreeMap` 通过红黑树实现，键值对按键排序。适用于需要有序的数据存储场景，例如按时间戳排序的用户活动记录。

```java
TreeMap<Long, String> userActivity = new TreeMap<>();
userActivity.put(1692200200000L, "Login");
userActivity.put(1692200300000L, "Purchase");
```

### 6. **集合的性能对比与应用场景**

#### **性能对比**

1. **ArrayList**：适合**频繁读取**操作，因为它基于数组实现，支持随机访问。插入和删除操作在**中间位置**时性能较差，因为需要移动元素。尾部插入性能较好。
2. **LinkedList**：适合**频繁插入和删除**操作，尤其是在**头部或尾部**，性能优越。基于链表的实现使得随机访问性能较差，查找元素的时间复杂度为 O(n)。
3. **HashSet**：基于哈希表实现，插入、删除和查找操作都具有**常数时间复杂度 O(1)**，但不保证元素的顺序，适合处理**去重**需求，但无法维护插入顺序或排序。

4. **TreeSet**：基于红黑树（平衡二叉搜索树）实现，提供了**自动排序**功能，插入、删除和查找操作的时间复杂度为 **O(log n)**。适合需要有序数据的场景，但性能较 `HashSet` 稍差。

5. **HashMap**：基于哈希表实现，具有**常数时间复杂度 O(1)** 的插入、删除和查找操作，适合处理大规模数据的**键值对映射**，特别是当不需要数据顺序时。

6. **TreeMap**：基于红黑树实现，提供**按键有序**的键值对存储。所有操作的时间复杂度为 **O(log n)**，适合需要按键排序的数据，但性能不如 `HashMap`。

#### **电商场景应用**

- **商品展示与检索**：如果商品信息不需要频繁插入或删除，`ArrayList` 可以用于存储商品列表，方便用户快速浏览和随机检索商品数据。`ArrayList` 在检索时表现优秀，但如果涉及频繁的修改或排序，`TreeMap` 或 `TreeSet` 可能更合适。

- **用户数据管理**：`HashSet` 非常适合存储不重复的用户数据（如用户 ID 或电子邮件地址），确保数据的唯一性，同时能够快速查询。需要注意的是，`HashSet` 不能保证插入顺序。如果需要顺序保证或排序，可以使用 `LinkedHashSet` 或 `TreeSet`。

- **订单处理**：`LinkedList` 是一个双向链表，适合处理订单队列，因为订单的插入和删除操作可以非常高效地在队列的头部或尾部进行。但是，在实际应用中，如果要处理大量订单并确保高性能，使用阻塞队列（如 `ConcurrentLinkedQueue` 或 `ArrayBlockingQueue`）更合适，因为它们专为并发场景设计。

- **分类管理**：`TreeSet` 非常适合用于商品分类或品牌的管理，提供自动排序的功能，这样分类或品牌可以按字母顺序或其他顺序自动排列，用户体验较好。

- **订单映射与用户信息存储**：`HashMap` 是存储订单编号与用户信息之间关系的理想选择，能够提供常数时间的快速查找。如果需要按订单日期、价格等排序，`TreeMap` 会更合适，因为它可以按键有序存储并按要求排序订单数据。

### 优化的建议：

- **商品展示与检索**：如果商品需要**动态排序**，`TreeSet` 或 `TreeMap` 会比 `ArrayList` 更适合。
- **用户数据管理**：当需要顺序时，`LinkedHashSet` 比 `HashSet` 更合适，因为它能够保留插入顺序。
- **订单处理**：如果涉及并发环境下的订单处理，**并发队列**更为合适，如 `ConcurrentLinkedQueue`。
- **订单映射与用户信息存储**：如果只是快速检索订单，`HashMap` 是更好的选择，但需要排序时，`TreeMap` 提供了按键排序的能力。

### 7. **总结**

在选择集合时，需要根据操作的频率和类型做出合理选择：

- 如果需要频繁插入和删除：选择 `LinkedList` 或 `TreeSet`。
- 如果需要频繁读取：选择 `ArrayList` 或 `HashMap`。
- 如果需要排序：选择 `TreeSet` 或 `TreeMap`。
- 如果需要去重：选择 `HashSet`。

在电商场景中，商品的展示、用户管理和订单处理等操作都可以根据场景灵活选择合适的集合类型，以提高系统的性能和效率。

### 8. 高并发场景下的集合使用

在高并发场景中，传统的集合类（如 `ArrayList`、`HashMap` 等）在多线程操作时存在线程安全问题，容易引发数据竞争和不一致性。因此，Java 提供了多种并发集合类，它们设计用来在多线程环境下提供安全的集合操作，同时尽量保证性能。

#### 1. `Collections.synchronizedXXX()`

Java 的 `Collections` 类提供了一些同步集合的包装方法，如 `Collections.synchronizedList()` 和 `Collections.synchronizedMap()`，可以将非线程安全的集合（如 `ArrayList`、`HashMap`）变为线程安全。

示例：

```java
List<String> synchronizedList = Collections.synchronizedList(new ArrayList<>());
Map<String, Integer> synchronizedMap = Collections.synchronizedMap(new HashMap<>());
```

**优点**：实现简单，能够快速将现有的集合类转换为线程安全。

**缺点**：由于对整个集合加锁，多个线程无法并发操作，性能较低，尤其是在读操作较多时效率欠佳。

#### 2. `CopyOnWriteArrayList` 和 `CopyOnWriteArraySet`

`CopyOnWriteArrayList` 和 `CopyOnWriteArraySet` 是线程安全的 `ArrayList` 和 `ArraySet` 实现，使用 **写时复制** 的方式来处理并发修改。每次写操作时都会将底层数组复制一份，以保证写操作的线程安全性，而读操作则不会加锁。

示例：

```java
List<String> concurrentList = new CopyOnWriteArrayList<>();
Set<String> concurrentSet = new CopyOnWriteArraySet<>();
```

**优点**：

- **读写分离**：读操作无锁，写操作复制新数组，因此读操作性能高，适合读多写少的场景。
- **线程安全**：多个线程可以同时安全地进行读操作，写操作也不会影响读操作。

**缺点**：

- **写操作开销大**：写时复制的过程较为昂贵，适合读多写少的场景，写操作频繁时性能较低。

#### 3. `ConcurrentHashMap`

`ConcurrentHashMap` 是线程安全的哈希表实现，内部采用 **锁分段（Segmented Locking）** 技术，能够在多线程环境下高效操作。

示例：

```java
Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();
```

**优点**：

- **高并发**：采用分段锁机制，多个线程可以并发访问不同的部分，不会像 `Hashtable` 那样对整个表加锁，性能优于 `Collections.synchronizedMap()`。
- **读写并发**：对大多数读操作不需要加锁，支持高效的并发读。

**缺点**：适合读多写少的场景，过多的写操作也可能导致性能下降。

#### 4. `BlockingQueue` 系列

`BlockingQueue` 是一种线程安全的队列，适用于生产者-消费者模型的高并发场景。常见的实现类有 `LinkedBlockingQueue`、`ArrayBlockingQueue` 和 `PriorityBlockingQueue` 等。

示例：

```java
BlockingQueue<String> blockingQueue = new LinkedBlockingQueue<>();
```

**优点**：

- **阻塞特性**：当队列为空时，取元素的线程会阻塞，直到队列中有元素；当队列满时，放元素的线程会阻塞，直到有空间可用。
- **线程安全**：无需额外的锁机制即可安全使用。

**缺点**：需要合理设置队列容量，否则容易出现阻塞性能问题。

#### 5. `ConcurrentSkipListMap` 和 `ConcurrentSkipListSet`

`ConcurrentSkipListMap` 和 `ConcurrentSkipListSet` 是基于跳表的并发集合，提供了一个有序的 `Map` 和 `Set`，线程安全且支持并发操作。

示例：

```java
ConcurrentSkipListMap<String, Integer> concurrentSkipListMap = new ConcurrentSkipListMap<>();
ConcurrentSkipListSet<String> concurrentSkipListSet = new ConcurrentSkipListSet<>();
```

**优点**：

- **有序**：支持自然顺序或者自定义排序。
- **线程安全**：使用细粒度锁，保证线程安全。

**缺点**：相比于 `ConcurrentHashMap`，在高并发场景下性能可能稍逊，适用于需要排序的场景。

#### 6. 使用选择

- **读多写少**：选择 `CopyOnWriteArrayList` 或 `CopyOnWriteArraySet`，适合大量并发读取、较少修改的场景，如商品列表展示。
- **高并发读写**：选择 `ConcurrentHashMap`，适合频繁读写操作，如商品库存管理系统。
- **阻塞队列**：使用 `BlockingQueue`，适合生产者-消费者模式，如订单队列、任务队列。
- **有序需求**：使用 `ConcurrentSkipListMap` 或 `ConcurrentSkipListSet`，适合需要排序的高并发场景，如价格排行的商品列表。

#### 7. 总结

在高并发场景下，传统集合类无法保证线程安全，因此需要使用 Java 提供的并发集合类来解决线程安全问题。合理选择并发集合类不仅能确保数据一致性，还能提升系统性能。在电商系统中，可以根据业务场景的具体需求，选择适合的并发集合类来优化系统的并发处理能力。

## 31. 异常

在编写代码时，异常是一种用于捕捉和处理意外情况的机制，帮助程序从错误状态中恢复或进行适当处理。异常机制对于开发人员来说至关重要，因为它们可以提高代码的健壮性和可维护性。

### 1. 什么是异常

异常是程序在运行时出现的不符合正常逻辑的状态或错误。通过使用异常，程序可以捕捉这些错误并进行处理，避免程序直接崩溃。异常通常封装了错误信息，并通过一定的结构让开发者可以追踪到问题的根源。异常的组成包括以下部分：

1. 异常类型：指明异常的种类，如 `NullPointerException` 或 `ArithmeticException`。
2. 提示信息：为开发人员或用户提供有关异常的详细描述。
3. 报错的行号提示：指出异常发生的具体代码行号，帮助快速定位问题。

### 2. 异常的继承结构

在 Java 中，所有异常都继承自 `Throwable` 类，Java 将异常分为两大类：`Error` 和 `Exception`。

#### 2.1 `Throwable`

`Throwable` 是所有异常类的父类。它有两个子类：`Error` 和 `Exception`。

#### 2.2 `Error`

`Error` 表示严重的系统错误，通常无法通过程序进行恢复。常见的 `Error` 类型包括：

- `VirtualMachineError`：表示虚拟机中的错误，如：
  - `StackOverflowError`：栈内存溢出错误。
  - `OutOfMemoryError`：堆内存溢出错误。

#### 2.3 `Exception`

`Exception` 表示程序运行过程中可以被处理的错误。常见的 `Exception` 类型包括：

- `RunTimeException`：运行时异常，通常由编程错误引发，如：
  - `ArithmeticException`：算术运算异常，通常由除以零引发。
  - `InputMismatchException`：输入不匹配异常。
- `IOException`：输入输出异常，通常与文件或网络操作相关，如：
  - `FileNotFoundException`：文件未找到异常。

### 3. 异常处理方式

当程序遇到异常时，通常有两种处理方式：捕获异常或抛出异常。这两种处理方式可以确保程序在出现异常时不会直接崩溃，并允许进行适当的后续操作。

#### 3.1 捕获异常

捕获异常是通过 `try-catch` 代码块处理异常的过程。通过捕获异常，可以对特定的错误类型进行处理，确保程序能够继续执行。

```java
try {
    // 可能会产生异常的代码
} catch (Exception e) {
    // 异常处理代码
    System.out.println("异常发生：" + e.getMessage());
}
```

示例：

```java
public class Test1 {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("算数异常: 除数不能为0");
        }
        System.out.println("程序继续执行...");
    }
}
```

#### 3.2 抛出异常

当一个方法不想处理异常时，可以选择抛出异常。使用 `throws` 关键字声明方法可能抛出的异常，调用该方法的代码需要处理这些异常。

```java
public void method() throws IOException {
    // 可能抛出 IOException 的代码
}
```

示例：

```java
public class Test2 {
    public static void main(String[] args) throws Exception {
        Class.forName("SomeClass");  // 类加载可能抛出异常
        System.out.println("类加载成功");
    }
}
```

### 4. 综合案例

电商系统常见的异常处理场景：在电商系统中，处理用户订单的过程中可能会遇到多种异常，例如库存不足、价格错误、支付失败等。对于这些异常，可以进行捕获和抛出，确保用户体验不会因为错误而受损。

```java
public class OrderProcessing {
    public static void main(String[] args) {
        try {
            processOrder(0);
        } catch (OutOfStockException e) {
            System.out.println("订单处理失败：" + e.getMessage());
        }
    }

    // 模拟订单处理，库存不足抛出异常
    public static void processOrder(int stock) throws OutOfStockException {
        if (stock == 0) {
            throw new OutOfStockException("商品库存不足");
        }
        System.out.println("订单处理成功");
    }
}

class OutOfStockException extends Exception {
    public OutOfStockException(String message) {
        super(message);
    }
}
```

### 5. finally 的使用

`finally` 块用于在 `try-catch` 语句后执行清理操作。无论是否发生异常，`finally` 块中的代码都会被执行，常用于关闭文件流、释放数据库连接等资源。

```java
try {
    // 可能抛出异常的代码
} catch (Exception e) {
    // 异常处理代码
} finally {
    // 一定会执行的代码
    System.out.println("资源释放");
}
```

示例：

```java
public class Test3 {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("异常: " + e.getMessage());
        } finally {
            System.out.println("无论是否异常，都执行finally");
        }
    }
}
```

### 6. 自定义异常

在实际开发中，针对业务逻辑需求，可以创建自定义异常。例如，在电商系统中，若用户输入了无效的支付信息，可以抛出自定义的支付异常。

```java
class InvalidPaymentException extends Exception {
    public InvalidPaymentException(String message) {
        super(message);
    }
}

public class PaymentProcessor {
    public static void main(String[] args) {
        try {
            processPayment(null);
        } catch (InvalidPaymentException e) {
            System.out.println("支付异常：" + e.getMessage());
        }
    }

    public static void processPayment(String paymentInfo) throws InvalidPaymentException {
        if (paymentInfo == null) {
            throw new InvalidPaymentException("支付信息无效");
        }
        System.out.println("支付成功");
    }
}
```

### 7. 异常在电商系统中的应用

电商系统的订单处理、库存管理、支付处理等环节都可能会抛出异常。通过合理的异常捕获与抛出，系统可以在发生错误时及时处理，提升系统稳定性和用户体验。例如，当用户下单时，系统可以捕获库存不足或支付失败的异常，并返回相应的提示信息，指导用户进行正确操作。

### 8. 总结

异常处理是提高程序健壮性的重要手段。通过合理使用 `try-catch` 块、抛出异常和自定义异常，开发者可以有效地捕捉错误并采取相应措施，保证程序的稳定运行。在复杂的业务场景中，良好的异常处理策略是实现高质量软件系统的关键。

## 32. 线程

线程是计算机操作系统中的基本执行单位，它允许程序并发执行多个任务。在电商系统中，使用多线程可以提升系统的性能和响应速度，比如同时处理多个用户的订单、支付和查询请求等。本文将详细介绍线程的概念、特性以及如何在电商系统中使用多线程。

### 1. 线程的概念

线程是操作系统中调度的最小执行单位，进程是操作系统资源分配的单位。一个进程可以包含多个线程，这些线程共享进程的资源，如内存、文件句柄等。

**电商应用示例**：电商后台服务是一个进程，每个用户的请求（如下单、支付）可以通过一个线程来处理，多个线程并发运行可以让系统同时响应多个用户的请求。

### 2. 线程与进程的关系

- **进程**：进程是系统资源分配的单位，具有独立的地址空间，可以包含多个线程。
- **线程**：线程是进程中的执行单位，多个线程共享进程的资源。

**电商应用示例**：一个电商服务进程中可能会包含多个线程来处理用户订单、查询库存等操作，每个线程可以独立完成特定的任务。

### 3. 多线程的特性

多线程的主要特性是可以让多个任务同时并发执行，这样可以大大提升程序的执行效率。但是多线程环境中需要特别注意资源的共享与线程同步问题。

#### 3.1 随机性

线程的执行顺序是不确定的，由操作系统的调度器随机决定，线程的调度由 CPU 时间片决定。

**电商应用示例**：当多个用户同时提交订单时，系统中负责处理订单的多个线程会被随机调度，无法预先确定哪个订单会被最先处理。

#### 3.2 CPU 分时调度

CPU 分时调度是指操作系统通过将 CPU 时间片分配给多个线程，每个线程在时间片内执行，时间片用完后，CPU 会切换到另一个线程。

**电商应用示例**：电商系统中的多个线程会同时处理订单、支付和查询库存等操作，CPU 会通过分时调度机制来决定哪个线程在某一时刻执行。

#### 3.3 线程状态

线程的状态主要有以下几种：

- **新建（New）**：线程对象被创建，尚未调用 `start()`。
- **就绪（Runnable）**：线程已经准备好，等待 CPU 调度。
- **运行（Running）**：线程获得 CPU 正在执行。
- **阻塞（Blocked）**：线程在等待某个资源（如 I/O 或锁）。
- **死亡（Dead）**：线程执行完毕或者因异常退出。

**电商应用示例**：一个负责处理支付的线程在发起支付请求时，会因为等待外部支付服务返回结果而进入阻塞状态。

### 4. 多线程的实现方式

#### 4.1 继承 `Thread` 类

Java 提供了两种方式创建线程，其中一种是继承 `Thread` 类，重写其 `run()` 方法。

**示例**：处理电商订单的多线程实现

```java
class OrderThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 100; i++) {
            // 模拟处理100个订单
            System.out.println("Processing order " + i);
        }
    }
}

public class TestOrderThread {
    public static void main(String[] args) {
        // 创建并启动多个线程来处理订单
        OrderThread orderThread1 = new OrderThread();
        OrderThread orderThread2 = new OrderThread();
        orderThread1.start();  // 启动第一个线程
        orderThread2.start();  // 启动第二个线程
    }
}
```

在电商系统中，我们可以为每个用户的订单创建一个 `OrderThread` 来并发处理多个订单。

#### 4.2 实现 `Runnable` 接口

另一种方式是实现 `Runnable` 接口，这种方式更灵活，适合类已经继承了其他类的情况。

**示例**：多线程处理支付操作

```java
class PaymentRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 50; i++) {
            // 模拟处理50笔支付
            System.out.println("Processing payment for order " + i);
        }
    }
}

public class TestPaymentRunnable {
    public static void main(String[] args) {
        // 创建并启动线程来处理支付
        Thread paymentThread1 = new Thread(new PaymentRunnable());
        Thread paymentThread2 = new Thread(new PaymentRunnable());
        paymentThread1.start();  // 启动第一个支付线程
        paymentThread2.start();  // 启动第二个支付线程
    }
}
```

在电商系统中，通过实现 `Runnable` 接口，可以为每个支付操作创建一个独立的线程来处理支付事务。

### 5. 线程的优先级

线程的优先级可以影响线程抢占 CPU 资源的概率，优先级高的线程更有机会获得 CPU 时间片。Java 提供了三种优先级：

- `MIN_PRIORITY = 1`
- `NORM_PRIORITY = 5`（默认值）
- `MAX_PRIORITY = 10`

**示例**：为订单处理线程设置优先级

```java
class HighPriorityOrderThread extends Thread {
    public HighPriorityOrderThread(String name) {
        super(name);
    }

    @Override
    public void run() {
        for (int i = 1; i <= 100; i++) {
            // 模拟处理100个订单
            System.out.println(getName() + " processing order " + i);
        }
    }
}

public class TestPriority {
    public static void main(String[] args) {
        // 创建两个线程，并设置不同的优先级
        HighPriorityOrderThread thread1 = new HighPriorityOrderThread("OrderThread-A");
        HighPriorityOrderThread thread2 = new HighPriorityOrderThread("OrderThread-B");

        thread1.setPriority(Thread.MAX_PRIORITY); // 设置最高优先级
        thread2.setPriority(Thread.MIN_PRIORITY); // 设置最低优先级

        thread1.start();
        thread2.start();
    }
}
```

在电商系统中，优先级较高的线程可以用于处理关键任务，如高并发时的订单支付。

### 6. 线程同步与线程安全

在多线程环境中，多个线程可能会同时访问共享资源，这会导致线程安全问题。为避免这种情况，可以使用同步机制（如 `synchronized` 关键字）来确保同一时刻只有一个线程可以访问共享资源。

#### 6.1 同步代码块

通过 `synchronized` 关键字来锁定共享资源，确保线程安全。

**示例**：同步操作库存，避免超卖

```java
class Inventory {
    private int stock = 100; // 初始化库存数量

    // 同步方法，保证每次只有一个线程能修改库存
    public synchronized void sellItem() {
        if (stock > 0) {
            System.out.println(Thread.currentThread().getName() + " sold item, stock: " + stock--);
        } else {
            System.out.println("Stock is empty");
        }
    }
}

class SalesRunnable implements Runnable {
    private Inventory inventory;

    public SalesRunnable(Inventory inventory) {
        this.inventory = inventory;
    }

    @Override
    public void run() {
        for (int i = 0; i < 30; i++) {
            inventory.sellItem();  // 每个线程售卖30个商品
        }
    }
}

public class TestSyncInventory {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();  // 创建库存对象
        // 启动两个销售线程，共享库存
        Thread t1 = new Thread(new SalesRunnable(inventory), "SalesThread-1");
        Thread t2 = new Thread(new SalesRunnable(inventory), "SalesThread-2");

        t1.start();  // 启动第一个销售线程
        t2.start();  // 启动第二个销售线程
    }
}
```

在电商系统中，多个线程可能同时修改库存，通过 `synchronized` 确保每次只有一个线程可以减少库存，避免超卖。

### 7. 线程池

线程池可以有效管理线程的创建和销毁，避免频繁创建和销毁线程带来的开销。Java 提供了 `ExecutorService` 来管理线程池。

#### 7.1 使用线程池

通过 `Executors` 类创建线程池来执行任务。

**示例**：使用线程池处理订单

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class OrderProcessingTask implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " is processing order");
    }
}

public class TestThreadPool {
    public static void main(String[] args) {
        // 创建一个固定大小为3的线程池
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        for (int

 i = 0; i < 10; i++) {
            // 提交订单处理任务到线程池
            executorService.execute(new OrderProcessingTask());
        }
        executorService.shutdown();  // 关闭线程池
    }
}
```

在电商系统中，线程池可以管理多个线程任务，例如在促销期间处理大量订单时，可以通过线程池来并发处理订单和支付操作。

### 8. 线程安全的集合

Java 提供了线程安全的集合类，如 `CopyOnWriteArrayList` 和 `ConcurrentHashMap`，它们能够在高并发场景下保持线程安全，适用于电商系统中的购物车、商品列表等功能。

### 9. 总结

线程和多线程编程是电商系统中提高系统性能、响应速度和处理并发的重要手段。通过合理的线程管理和线程池技术，可以有效提高电商系统的效率，确保系统在高并发场景下的稳定性和高效运行。同时，线程同步技术和线程安全集合类的使用可以确保在多线程环境中共享资源的安全性。

## 33. IO（输入输出）

Java 的 IO 是电商系统中处理用户交互、文件操作、网络通信等的重要工具。本文详细介绍了 Java IO 的基础概念、分类、应用场景以及代码示例，注重注释和多线程的处理。

### 1. IO 概念

IO（Input/Output）即输入输出，表示应用程序与外部设备（如文件、网络等）之间进行数据传递的过程。在 Java 中，IO 通过流（Stream）来完成，流是数据的通道，可以输入或输出数据。

#### 1.1 流（Stream）的概念

流是指从数据源到程序或从程序到目标设备的有序数据传输通道。在程序中，流通过读取或写入数据来实现与外部设备的数据交互。

- **输入流**：从外部设备读取数据到程序中。
- **输出流**：将数据从程序输出到外部设备。

#### 1.2 流的分类

Java 的流根据操作方式和数据类型分类：

- **按数据类型分类**：字节流处理字节数据，字符流处理字符数据。
- **按操作方向分类**：输入流读取数据，输出流写入数据。
- **按功能分类**：节点流直接处理数据源，处理流对节点流进行包装提供额外功能。

### 2. IO 流的分类

#### 2.1 按数据类型分类

- **字节流**：处理二进制数据，主要类有 `InputStream` 和 `OutputStream`。用于图片、视频、音频等数据处理。
- **字符流**：处理文本数据，主要类有 `Reader` 和 `Writer`。用于处理文本文件，如商品描述等。

**示例**：使用字节流读取和写入用户头像文件。

```java
// 示例：读取和写入用户头像文件
public class UserAvatarIO {
    public static void main(String[] args) throws IOException {
        // 源文件：用户上传的头像
        File inputFile = new File("/path/to/user/avatar.png");
        // 目标文件：保存头像的位置
        File outputFile = new File("/path/to/save/avatar.png");
        // 调用文件复制方法
        copyFile(inputFile, outputFile);
    }

    // 文件复制方法
    public static void copyFile(File inputFile, File outputFile) throws IOException {
        // 使用 try-with-resources 自动关闭资源
        try (InputStream in = new FileInputStream(inputFile);
             OutputStream out = new FileOutputStream(outputFile)) {
            byte[] buffer = new byte[1024]; // 定义缓冲区，大小为1024字节
            int bytesRead; // 用于存储每次读取的字节数
            // 循环读取直到文件末尾
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead); // 将读取的数据写入目标文件
            }
        }
    }
}
```

#### 2.2 按操作方式分类

- **节点流**：直接与数据源（文件、网络等）交互，例如 `FileInputStream`、`FileOutputStream`。
- **处理流**：包装节点流提供更高效或附加功能的流，例如 `BufferedInputStream`、`BufferedOutputStream`，可以提高读写效率。

**示例**：在高并发的电商系统中，使用缓冲流来提高文件读写效率。

```java
// 示例：使用缓冲流提升文件操作效率
public class BufferedFileCopy {
    public static void main(String[] args) throws IOException {
        // 文件路径：输入文件
        File inputFile = new File("/path/to/large/data.txt");
        // 输出文件
        File outputFile = new File("/path/to/copy/data.txt");
        // 调用文件复制方法
        bufferedCopy(inputFile, outputFile);
    }

    // 使用缓冲流进行文件复制
    public static void bufferedCopy(File inputFile, File outputFile) throws IOException {
        try (BufferedInputStream in = new BufferedInputStream(new FileInputStream(inputFile));
             BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(outputFile))) {
            byte[] buffer = new byte[8192]; // 定义8K大小的缓冲区
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
        }
    }
}
```

### 3. 字节流与字符流

字节流处理二进制数据，字符流处理文本数据。在电商系统中，字节流通常用于处理图片、音频等文件，字符流用于处理文本数据，如商品描述或用户评论。

#### 3.1 字节流

字节流可以处理所有类型的文件，适合处理二进制文件，如图片、音频和视频。

**示例**：电商系统中使用字节流保存用户上传的图片。

```java
// 示例：保存用户上传的图片
public class ProductImageIO {
    public static void main(String[] args) throws IOException {
        // 读取图片文件
        File inputImage = new File("/path/to/input/image.png");
        // 输出图片文件
        File outputImage = new File("/path/to/output/image.png");
        saveImage(inputImage, outputImage);
    }

    // 保存图片文件
    public static void saveImage(File inputFile, File outputFile) throws IOException {
        try (InputStream in = new FileInputStream(inputFile);
             OutputStream out = new FileOutputStream(outputFile)) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead); // 将图片字节数据写入目标文件
            }
        }
    }
}
```

#### 3.2 字符流

字符流适用于文本文件，尤其是在多语言系统中处理字符时非常有用。

**示例**：保存电商系统中的商品描述。

```java
// 示例：保存商品描述
public class ProductDescriptionIO {
    public static void main(String[] args) throws IOException {
        // 商品描述文件
        File descriptionFile = new File("/path/to/product/description.txt");
        // 保存商品描述
        saveDescription(descriptionFile, "This is a great product!");
    }

    // 保存商品描述的方法
    public static void saveDescription(File file, String description) throws IOException {
        try (Writer writer = new FileWriter(file)) {
            writer.write(description); // 写入商品描述
        }
    }
}
```

### 4. 缓冲流

缓冲流用于提高 IO 操作的效率，减少 IO 设备的访问次数，尤其适合处理大数据量文件时使用。

#### 4.1 缓冲字节流

`BufferedInputStream` 和 `BufferedOutputStream` 用于对字节流的缓冲，减少频繁的 IO 操作。

**示例**：使用缓冲字节流提高大文件复制的效率。

```java
// 示例：使用缓冲字节流复制大文件
public class BufferedImageCopy {
    public static void main(String[] args) throws IOException {
        File inputFile = new File("/path/to/large/image.png");
        File outputFile = new File("/path/to/copy/image.png");
        bufferedCopy(inputFile, outputFile);
    }

    // 使用缓冲字节流进行文件复制
    public static void bufferedCopy(File inputFile, File outputFile) throws IOException {
        try (BufferedInputStream in = new BufferedInputStream(new FileInputStream(inputFile));
             BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(outputFile))) {
            byte[] buffer = new byte[8192]; // 8KB 缓冲区
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead); // 将缓冲区中的数据写入文件
            }
        }
    }
}
```

#### 4.2 缓冲字符流

`BufferedReader` 和 `BufferedWriter` 提供字符流的缓冲处理，适合文本数据的处理。

**示例**：使用缓冲字符流读取商品描述文件。

```java
// 示例：使用缓冲字符流读取商品描述
public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        File descriptionFile = new File("/path/to/product/description.txt");
        readDescription(descriptionFile);
    }

    // 使用缓冲字符流读取文件内容
    public static void readDescription(File file) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) { // 按行读取文件
                System.out.println(line); // 输出每一行
            }
        }
    }
}
```

### 5. 多线程与 IO 操作

在电商系统中，通常需要处理高并发的用户请求，这时多线程 IO 变得非常重要。多线程可以通过并发处理来提高文件读写、网络通信的效率。

**示例**：在电商系统中使用多线程下载多个文件。

```java
// 示例：多线程下载文件


public class MultiThreadedFileDownloader {
    public static void main(String[] args) {
        String[] fileUrls = {
            "http://example.com/file1.png",
            "http://example.com/file2.png",
            "http://example.com/file3.png"
        };

        for (String url : fileUrls) {
            // 创建并启动下载线程
            new Thread(() -> downloadFile(url)).start();
        }
    }

    // 下载文件方法
    public static void downloadFile(String fileUrl) {
        try {
            // 模拟文件下载（实际应用中可使用网络流下载）
            System.out.println("Downloading file from: " + fileUrl);
            Thread.sleep(2000); // 模拟网络延迟
            System.out.println("Downloaded: " + fileUrl);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

## 34. 网络编程

在电商系统中，网络编程是实现客户端与服务器端之间数据传输的核心技术。常用的网络编程模型有 TCP 和 UDP，其中 TCP 是一种面向连接的可靠协议，适用于电商系统中需要保障数据传输准确性的场景。

### 1. 网络环境查看

网络编程通常需要首先查看网络环境配置，确保本地和远程网络连接正常。

#### 1.1 查看 IP 地址

- **Windows**：使用命令 `ipconfig` 查看本机 IP 地址。
- **Mac/Linux**：使用命令 `ifconfig` 查看本机 IP 地址。

#### 1.2 测试网络连通性

使用 `ping` 命令测试到目标服务器的网络连通性。例如：

```bash
ping www.example.com
```

#### 1.3 本地回环测试

使用本地回环 IP 地址 `127.0.0.1` 进行本机测试，确保网络服务正常运行。

### 2. IP 地址对象

Java 提供了 `InetAddress` 类用于处理 IP 地址信息，通常用于获取本地 IP 地址或根据域名获取远程服务器 IP 地址。

**示例**：在电商系统中获取服务器的 IP 地址。

```java
import java.net.InetAddress;
import java.util.Arrays;

public class IPAddressExample {
    public static void main(String[] args) throws Exception {
        // 根据域名获取服务器 IP 地址
        InetAddress serverAddress = InetAddress.getByName("www.example.com");
        System.out.println("服务器地址: " + serverAddress);

        // 获取本地 IP 地址
        InetAddress localAddress = InetAddress.getLocalHost();
        System.out.println("本地地址: " + localAddress);

        // 获取多个 IP 地址（如负载均衡服务器）
        InetAddress[] addresses = InetAddress.getAllByName("www.example.com");
        System.out.println("所有服务器地址: " + Arrays.toString(addresses));
    }
}
```

### 3. Socket 概述

Socket 编程是一种在网络中进行数据传输的常用方式，应用程序可以通过 Socket 发送和接收数据。Socket 编程分为服务器端和客户端，通常使用 TCP 协议保证数据传输的可靠性。

#### 3.1 Socket 通信机制

Socket 通信就是客户端和服务器之间通过网络传输数据，服务器通过 `ServerSocket` 监听客户端请求，客户端通过 `Socket` 与服务器建立连接。

### 4. 服务器端 ServerSocket

在服务器端，`ServerSocket` 负责监听指定端口上的连接请求，一旦接收到客户端的请求，服务器会与客户端建立通信通道。

**示例**：在电商系统中实现一个简单的服务器，接收客户端的连接并响应数据。

```java
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class SimpleServer {
    public static void main(String[] args) throws Exception {
        // 创建服务器套接字，监听端口 8888
        ServerSocket serverSocket = new ServerSocket(8888);
        System.out.println("服务器已启动，等待客户端连接...");

        // 接受客户端连接，阻塞直到有连接
        Socket clientSocket = serverSocket.accept();
        System.out.println("客户端已连接");

        // 接收客户端数据
        InputStream inputStream = clientSocket.getInputStream();
        byte[] buffer = new byte[1024];
        int bytesRead = inputStream.read(buffer);
        System.out.println("收到客户端消息: " + new String(buffer, 0, bytesRead));

        // 向客户端发送响应
        OutputStream outputStream = clientSocket.getOutputStream();
        outputStream.write("欢迎使用电商系统".getBytes());
        outputStream.flush();

        // 关闭资源
        inputStream.close();
        outputStream.close();
        clientSocket.close();
        serverSocket.close();
    }
}
```

### 5. 客户端 Socket

客户端通过 `Socket` 连接到服务器，指定服务器的 IP 地址和端口号。一旦连接成功，客户端可以向服务器发送数据或接收服务器的响应。

**示例**：在电商系统中实现一个简单的客户端，连接到服务器并发送数据。

```java
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class SimpleClient {
    public static void main(String[] args) throws Exception {
        // 连接服务器，指定 IP 地址和端口号
        Socket socket = new Socket("127.0.0.1", 8888);
        System.out.println("已连接到服务器");

        // 向服务器发送数据
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("客户端发送数据".getBytes());
        outputStream.flush();

        // 接收服务器响应
        InputStream inputStream = socket.getInputStream();
        byte[] buffer = new byte[1024];
        int bytesRead = inputStream.read(buffer);
        System.out.println("收到服务器消息: " + new String(buffer, 0, bytesRead));

        // 关闭资源
        inputStream.close();
        outputStream.close();
        socket.close();
    }
}
```

### 6. 多线程服务器

在实际电商系统中，服务器通常需要同时处理多个客户端的请求，因此需要采用多线程服务器模型。每当有一个客户端连接时，服务器为每个客户端分配一个独立的线程进行处理。

**示例**：在电商系统中实现一个多线程服务器，处理多个客户端的连接。

```java
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class MultiThreadedServer {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8888);
        System.out.println("服务器已启动，等待客户端连接...");

        while (true) {
            // 接受客户端连接
            Socket clientSocket = serverSocket.accept();
            System.out.println("客户端已连接");

            // 为每个客户端启动一个线程
            new ClientHandler(clientSocket).start();
        }
    }
}

// 客户端处理线程
class ClientHandler extends Thread {
    private Socket clientSocket;

    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }

    @Override
    public void run() {
        try {
            InputStream inputStream = clientSocket.getInputStream();
            OutputStream outputStream = clientSocket.getOutputStream();

            // 接收客户端数据
            byte[] buffer = new byte[1024];
            int bytesRead = inputStream.read(buffer);
            System.out.println("收到客户端消息: " + new String(buffer, 0, bytesRead));

            // 向客户端发送响应
            outputStream.write("服务器响应数据".getBytes());
            outputStream.flush();

            // 关闭资源
            inputStream.close();
            outputStream.close();
            clientSocket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 7. 客户端与服务器的文件传输

在电商系统中，图片、商品资料等文件的传输是常见需求。通过 TCP 可以方便地实现文件的上传和下载。

**示例**：客户端上传图片文件到服务器。

#### 7.1 服务器端

```java
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class FileUploadServer {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(9000);
        System.out.println("文件上传服务器已启动，等待客户端连接...");

        Socket clientSocket = serverSocket.accept();
        InputStream inputStream = clientSocket.getInputStream();

        // 保存上传的文件
        FileOutputStream fileOutputStream = new FileOutputStream("uploaded_image.jpg");
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            fileOutputStream.write(buffer, 0, bytesRead);
        }

        fileOutputStream.close();
        inputStream.close();
        clientSocket.close();
        serverSocket.close();
        System.out.println("文件上传完成");
    }
}
```

#### 7.2 客户端

```java
import java.io.FileInputStream;
import java.io.OutputStream;
import java.net.Socket;

public class FileUploadClient {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("127.0.0.1", 9000);
        FileInputStream fileInputStream = new FileInputStream("image.jpg");
        OutputStream outputStream = socket.getOutputStream();

        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = fileInputStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }

        fileInputStream.close();
        outputStream.close();
        socket.close();
        System.out.println("文件上传成功");
    }
}
```

### 8. 网络通信中的多客户端聊天

在电商系统中，支持多个用户实时聊天或者客服系统是常见需求。通过 Socket 编程，可以实现一个简单的多客户端聊天系统。

**示例**：在电商系统中实现一个多客户端聊天服务器。

#### 8.1 服务器端

```java
import java.io.BufferedReader;
import java.io

.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

public class ChatServer {
    private static List<Socket> clientSockets = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(7000);
        System.out.println("聊天服务器已启动");

        while (true) {
            Socket clientSocket = serverSocket.accept();
            clientSockets.add(clientSocket);
            new ChatHandler(clientSocket).start();
        }
    }

    // 处理客户端消息的线程
    static class ChatHandler extends Thread {
        private Socket socket;

        public ChatHandler(Socket socket) {
            this.socket = socket;
        }

        @Override
        public void run() {
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                String message;
                while ((message = reader.readLine()) != null) {
                    // 广播消息给所有客户端
                    for (Socket client : clientSockets) {
                        PrintWriter writer = new PrintWriter(client.getOutputStream(), true);
                        writer.println("用户 " + socket.getRemoteSocketAddress() + " 说: " + message);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

#### 8.2 客户端

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class ChatClient {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("127.0.0.1", 7000);
        Scanner scanner = new Scanner(System.in);

        // 读取服务器消息的线程
        new Thread(() -> {
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                String message;
                while ((message = reader.readLine()) != null) {
                    System.out.println(message);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();

        // 发送消息到服务器
        OutputStream outputStream = socket.getOutputStream();
        PrintWriter writer = new PrintWriter(outputStream, true);
        while (true) {
            String message = scanner.nextLine();
            writer.println(message);
        }
    }
}
```

### 9.总结

本文通过示例详细介绍了 Java 网络编程中的基础概念，包括 IP 地址获取、Socket 通信、多线程服务器、文件传输和多客户端聊天系统。在电商系统中，网络编程的应用场景广泛，从客户端与服务器之间的数据传输到用户间的实时互动，都可以通过网络编程实现。

## 35. 设计模式

### 1 设计模式概述

**设计模式** 是一套简单且有效的框架结构，提供解决常见软件开发问题的最佳实践，经过长期的开发经验总结而来。它能帮助我们提高代码的复用性、可读性和可维护性。设计模式通常被分为三类：

- **创建型模式**：用于对象的创建，确保创建的对象符合某些标准（如单例模式、工厂模式）。
- **结构型模式**：用于组织结构，通常通过组合或包装对象来实现复杂结构（如装饰者模式）。
- **行为型模式**：用于对象间的交互和职责分配（如策略模式）。

在电商系统中，设计模式可用于优化商品管理、订单处理和支付功能等多个模块，使代码更灵活、易扩展。

---

### 2 单例模式（Singleton Pattern）

**问题**：在电商系统中，某些资源（如订单队列管理器、库存管理器）需要全局唯一的实例。如果多个对象同时管理订单或库存，可能导致资源浪费、数据不一致等问题。

**解决方案**：使用**单例模式**，保证类在整个应用程序中只有一个实例，所有模块共享此实例。

**案例**：订单队列管理器和库存管理器

```java
class OrderQueueManager {
    private static OrderQueueManager instance;

    private OrderQueueManager() {}

    public static synchronized OrderQueueManager getInstance() {
        if (instance == null) {
            instance = new OrderQueueManager();
        }
        return instance;
    }
}
```

- **为什么使用单例模式**：
  - **唯一性**：在整个系统中确保有且仅有一个订单队列管理器实例，避免多个实例管理不同的订单队列。
  - **全局访问**：提供全局访问点，任何模块都可以访问同一个实例，保证订单处理的一致性。
  - **资源共享**：减少系统资源消耗，避免不必要的实例化操作。

---

### 3 工厂模式（Factory Pattern）

**问题**：电商系统中，不同类型的商品（如电子产品、书籍）和支付方式（如支付宝、微信支付）需要不同的处理逻辑。如果在代码中硬编码对象创建，将增加系统的耦合度，降低可维护性。

**解决方案**：使用**工厂模式**，将对象的创建逻辑集中在工厂类中，根据条件动态生成不同的对象。

**案例**：商品工厂和支付处理工厂

```java
class ProductFactory {
    public static Product createProduct(String type) {
        if (type.equals("electronics")) {
            return new ElectronicsProduct();
        } else if (type.equals("book")) {
            return new BookProduct();
        }
        return null;
    }
}
```

- **为什么使用工厂模式**：
  - **解耦对象创建和业务逻辑**：客户端不直接依赖具体类，减少了耦合性。例如，在电商系统中，用户选择不同类型的商品时，系统可以通过工厂模式动态创建商品对象。
  - **易于扩展**：如果未来新增其他商品类型，只需增加相应的工厂方法，不需修改原有的代码逻辑。
  - **灵活性**：客户端无需关心具体商品的创建细节，只需传递类型参数，由工厂类动态返回相应的商品对象。

---

### 4 策略模式（Strategy Pattern）

**问题**：电商平台通常会有多种折扣策略（如满减、打折），这些策略可能根据促销活动的不同而变化。如果在代码中使用 `if-else` 来处理各种折扣策略，将导致代码的复杂度大幅提高。

**解决方案**：使用**策略模式**，将每个折扣算法封装在独立的类中，允许在运行时根据需求动态选择不同的折扣策略。

**案例**：折扣计算

```java
interface DiscountStrategy {
    double applyDiscount(double price);
}

class FullReductionDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price - 10; // 满减
    }
}

class PercentageDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.9; // 90%折扣
    }
}
```

- **为什么使用策略模式**：
  - **算法封装与互换**：不同折扣策略封装为不同的类，用户可以在不修改现有代码的前提下，动态选择或更换策略。例如，电商平台可根据促销活动，灵活切换 "满减" 或 "打折" 策略。
  - **代码简洁**：避免了大量的条件判断，折扣计算逻辑更加简洁清晰。
  - **易于扩展**：新增折扣算法只需实现新的策略类，无需修改现有代码。

---

### 5 装饰者模式（Decorator Pattern）

**问题**：电商系统中的订单处理可能涉及到附加功能（如包邮、延长保修等）。如果直接在订单类中实现这些功能，将导致类职责混乱、代码难以维护。

**解决方案**：使用**装饰者模式**，动态为订单类添加额外的功能，而无需修改订单类的代码。

**案例**：订单服务扩展

```java
class Order {
    public void process() {
        System.out.println("Processing order...");
    }
}

class FreeShippingDecorator extends Order {
    private Order order;

    public FreeShippingDecorator(Order order) {
        this.order = order;
    }

    @Override
    public void process() {
        order.process();
        System.out.println("Applying free shipping...");
    }
}
```

- **为什么使用装饰者模式**：
  - **动态扩展功能**：装饰者模式允许在不修改原有订单类的情况下，动态地为订单对象添加额外的功能（如包邮、延保）。每个功能是独立的，可以灵活组合。
  - **职责单一**：每个装饰者类只负责一个功能，避免在订单类中集成所有功能，保持类的职责单一。
  - **灵活组合**：装饰者模式允许不同的功能组合使用。例如，可以同时为订单添加包邮和延保服务，保持代码简洁、灵活。

---

### 6 总结

通过以上几种设计模式，电商系统的模块变得更灵活、可扩展，减少了代码耦合，提升了系统的可维护性和可读性。

- **单例模式**：适用于需要全局唯一实例的场景，如订单队列管理器和库存管理器，确保同一个类只有一个实例。
- **工厂模式**：适用于动态创建对象的场景，如商品对象和支付处理器，解耦对象创建和业务逻辑。
- **策略模式**：适用于不同算法需要动态选择的场景，如折扣计算，封装不同的折扣策略，避免复杂的条件判断。
- **装饰者模式**：适用于动态扩展对象功能的场景，如订单的附加功能（包邮、延保），通过装饰者模式可以动态为对象添加新功能。

## 36. 枚举

### 1. 枚举概述

在 Java 编程中，枚举类用于表示一组固定的常量。它可以用来解决需要一组预定义的、有限个的值来描述状态、类别或某些特定情况的场景。

**为什么使用枚举？**

- **固定常量集合**：可以用来表示固定的常量值，如电商系统中的支付方式、订单状态、商品分类等。
- **类型安全**：相比使用整数或字符串常量，枚举更安全，避免了不必要的非法值。
- **易于维护**：可以在需要的时候灵活地添加新的枚举值，而不影响现有代码逻辑。

### 2. 自定义枚举类

在 Java 5 之前，没有`enum`关键字，开发者只能通过自定义类来模拟枚举。我们可以手动定义枚举的属性和方法，确保类的实例是有限的。

**案例**：电商系统中的支付方式

```java
package com.ecommerce.payment;

/**
 * 自定义枚举类用于表示支付方式
 */
public class PaymentMethod {
    // 私有属性，表示支付方式的名称
    private final String paymentName;

    // 构造方法私有化，防止外部通过构造器创建新实例
    private PaymentMethod(String paymentName) {
        this.paymentName = paymentName;
    }

    // 定义本类的多个静态枚举常量，表示不同支付方式
    public static final PaymentMethod WECHAT_PAY = new PaymentMethod("微信支付");
    public static final PaymentMethod ALI_PAY = new PaymentMethod("支付宝");
    public static final PaymentMethod CREDIT_CARD = new PaymentMethod("信用卡");
    public static final PaymentMethod BANK_TRANSFER = new PaymentMethod("银行转账");

    // 获取支付方式名称
    public String getPaymentName() {
        return paymentName;
    }

    // 重写toString方法，便于直接输出枚举值
    @Override
    public String toString() {
        return paymentName;
    }
}

public class PaymentTest {
    public static void main(String[] args) {
        // 使用自定义枚举类获取不同的支付方式
        PaymentMethod payment = PaymentMethod.WECHAT_PAY;
        System.out.println("选择的支付方式是：" + payment.getPaymentName());
    }
}
```

**为什么使用自定义枚举？**

- 自定义枚举类允许我们控制哪些实例可以被创建，避免非法的支付方式出现。
- 通过私有构造器，确保支付方式的实例只有指定的几个常量。

---

### 3. 使用 `enum` 关键字定义枚举

从 Java 5 开始，可以使用`enum`关键字轻松地定义枚举。相比自定义类，`enum`具有更简洁的语法，且自动继承自`java.lang.Enum`类，提供了更多内置方法。

**案例**：电商中的订单状态

```java
package com.ecommerce.order;

/**
 * 使用 enum 关键字定义订单状态
 */
public enum OrderStatus {
    // 定义订单状态枚举常量，并赋值给每个状态的描述
    NON_PAYMENT("未付款"),
    PAID("已付款"),
    SHIPPED("已发货"),
    COMPLETED("已完成"),
    RETURNED("退货");

    // 定义私有属性，用于描述订单状态
    private final String description;

    // 枚举构造函数，用于初始化每个枚举对象的状态描述
    private OrderStatus(String description) {
        this.description = description;
    }

    // 提供获取状态描述的方法
    public String getDescription() {
        return description;
    }
}

public class OrderTest {
    public static void main(String[] args) {
        // 获取并输出枚举常量
        OrderStatus status = OrderStatus.PAID;
        System.out.println("当前订单状态：" + status.getDescription());

        // 遍历所有枚举值
        for (OrderStatus os : OrderStatus.values()) {
            System.out.println(os + ": " + os.getDescription());
        }
    }
}
```

**为什么使用 `enum`？**

- **简洁**：`enum` 关键字简化了枚举类的定义，不需要手动创建每个对象。
- **类型安全**：使用枚举类型可以防止错误传入无效的值，例如避免订单状态中传入非预定义的状态。
- **易于扩展**：如果需要增加新的订单状态，只需在枚举类中添加新的常量。

---

### 4. 枚举类实现接口

枚举类不仅可以表示常量集合，还可以实现接口，赋予不同的枚举常量以行为。在电商系统中，不同的支付方式可能有不同的支付处理逻辑，我们可以通过实现接口来为每个枚举常量提供不同的实现。

**案例**：电商系统中的支付处理

```java
package com.ecommerce.payment;

// 定义支付接口，声明一个支付处理方法
interface Payable {
    void processPayment(double amount);
}

/**
 * 使用 enum 实现接口，每个枚举对象都有各自的支付处理逻辑
 */
public enum PaymentMethod implements Payable {
    WECHAT_PAY {
        @Override
        public void processPayment(double amount) {
            System.out.println("通过微信支付：" + amount + " 元");
        }
    },
    ALI_PAY {
        @Override
        public void processPayment(double amount) {
            System.out.println("通过支付宝支付：" + amount + " 元");
        }
    },
    CREDIT_CARD {
        @Override
        public void processPayment(double amount) {
            System.out.println("通过信用卡支付：" + amount + " 元");
        }
    };

    // 可以在公共方法中扩展其他功能
}

public class PaymentInterfaceTest {
    public static void main(String[] args) {
        // 使用枚举对象调用各自的支付逻辑
        PaymentMethod paymentMethod = PaymentMethod.WECHAT_PAY;
        paymentMethod.processPayment(200.0);
    }
}
```

**为什么使用枚举实现接口？**

- **行为的多样化**：不同的支付方式有不同的支付逻辑，可以通过实现接口的方法来为每个枚举常量定制特定的行为。
- **代码复用**：将通用接口方法抽象化，让不同的枚举对象根据需要实现。

---

### 5. Enum 类的常用方法

`Enum` 类为枚举提供了一些常用的方法，帮助开发者更高效地处理枚举对象：

1. **name()**：返回枚举常量的名称。
2. **ordinal()**：返回枚举常量的顺序（从 0 开始）。
3. **valueOf()**：将字符串转换为对应的枚举常量。
4. **values()**：返回一个包含枚举常量的数组。

**案例**：订单状态的操作

```java
package com.ecommerce.order;

import java.util.Arrays;

public class OrderStatusTest {
    public static void main(String[] args) {
        // 获取并输出订单状态的名称和序号
        OrderStatus status = OrderStatus.SHIPPED;
        System.out.println("订单状态名称：" + status.name());
        System.out.println("订单状态序号：" + status.ordinal());

        // 将字符串转换为对应的枚举对象
        String statusName = "PAID";
        OrderStatus statusFromString = OrderStatus.valueOf(statusName);
        System.out.println("从字符串转换得到的状态：" + statusFromString.getDescription());

        // 遍历所有订单状态
        System.out.println("所有订单状态：");
        Arrays.stream(OrderStatus.values())
                .forEach(os -> System.out.println(os + ": " + os.getDescription()));
    }
}
```

**为什么使用 `Enum` 的常用方法？**

- **便于操作**：`name()` 和 `ordinal()` 方法可以直接获取枚举的名称和序号，方便进行比较、存储等操作。
- **安全转换**：`valueOf()` 可以将字符串安全地转换为枚举对象，避免硬编码字符串。

---

### 6. 电商中的枚举应用场景

枚举在电商系统中有广泛的应用，以下是常见的场景：

1. **订单状态**：不同阶段的订单状态（未付款、已发货、已完成等）可以用枚举定义，确保订单的状态流转是合法的。
2. **支付方式**：枚举支付方式有助于确保客户只能选择系统支持的支付方式。
3. **用户角色**：电商系统中可能存在不同的用户角色（普通用户、管理员、商家等），可以使用枚举来区分权限和功能。
4. **商品分类**：商品可以按类别划分（电子产品、服装、图书等），使用枚举有助于统一管理商品类别。

---

### 7. 总结

枚举是一种非常有用的工具，尤其在需要定义一组固定的常量时。通过枚举，不仅可以确保常量的有限性，还能提升代码的可读性和安全性。在电商系统中，订单状态、支付方式、商品分类等场景都可以使用枚举来增强代码的逻辑清晰度和可维护性。

## 37. 注解

### 1. 注解概述

注解（Annotation）是 Java 语言中的一种元数据形式，常用于为代码提供额外的信息，或标记某些行为。通过注解，程序可以以更简洁的方式实现一些复杂功能，比如代码的自动生成、依赖注入、编译期检查等。

注解主要用于：

- **减少重复代码**：注解通过声明的方式减少配置和代码冗余。
- **自动化生成代码**：框架（如 Spring）利用注解自动生成配置和代码。
- **动态处理**：利用反射，注解在运行时能让程序读取、分析、处理元数据，从而增强程序的灵活性。

### 2. 注解的分类

注解可以分为三大类：

1. **JDK 自带注解**：Java 内置的常用注解。
2. **元注解**：用于定义其他注解的注解。
3. **自定义注解**：用户自己定义并使用的注解。

---

#### 2.1 JDK 自带注解

JDK 为开发者提供了一些常用的内置注解：

- **`@Override`**：用于标识重写父类方法。
- **`@Deprecated`**：标记某个方法或类已经过时，不推荐使用。
- **`@SuppressWarnings`**：用于抑制编译器的特定警告信息。
- **`@SafeVarargs`**：用于避免泛型数组创建产生的警告。
- **`@FunctionalInterface`**：标识某个接口为函数式接口（Java 8 引入，用于 Lambda 表达式）。

---

#### 2.2 元注解

元注解是用于定义其他注解的注解。主要有以下几种：

1. **`@Target`**：指定注解的使用位置。

   - **`ElementType.TYPE`**：注解应用于类、接口。
   - **`ElementType.METHOD`**：注解应用于方法。
   - **`ElementType.FIELD`**：注解应用于字段。
   - **`ElementType.PARAMETER`**：注解应用于方法参数。
   - **`ElementType.CONSTRUCTOR`**：注解应用于构造器。

2. **`@Retention`**：指定注解的生命周期。

   - **`RetentionPolicy.SOURCE`**：注解只存在于源文件中，编译时丢弃。
   - **`RetentionPolicy.CLASS`**：注解在字节码文件中保留，但 JVM 不读取。
   - **`RetentionPolicy.RUNTIME`**：注解在运行时保留，可以通过反射访问。

3. **`@Inherited`**：允许子类继承父类的注解。
4. **`@Documented`**：在生成 Javadoc 时包含注解内容。
5. **`@Repeatable`**：允许在同一个位置重复使用同一个注解。

---

### 3. 自定义注解

**自定义注解**：可以为类、方法、字段等元素添加自定义的元数据，并通过反射技术在运行时读取这些注解信息，执行相应的逻辑。

##### 案例：定义注解来标识电商系统中的商品信息

```java
package com.ecommerce.product;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 自定义注解，用于标识商品信息
 */
@Target({ElementType.TYPE, ElementType.FIELD}) // 注解可用于类和字段
@Retention(RetentionPolicy.RUNTIME) // 在运行时可通过反射读取
public @interface ProductInfo {
    String category() default "未分类";  // 商品类别，默认为“未分类”
    String supplier();  // 商品供应商
    double price() default 0.0;  // 商品价格，默认为0
}

// 测试类，使用自定义注解
@ProductInfo(supplier = "京东", category = "电子产品", price = 3999.99)
public class Laptop {
    @ProductInfo(supplier = "京东", category = "配件", price = 199.99)
    private String mouse;

    public static void main(String[] args) {
        // 反射读取注解信息
        if (Laptop.class.isAnnotationPresent(ProductInfo.class)) {
            ProductInfo productInfo = Laptop.class.getAnnotation(ProductInfo.class);
            System.out.println("商品类别: " + productInfo.category());
            System.out.println("供应商: " + productInfo.supplier());
            System.out.println("价格: " + productInfo.price());
        }
    }
}
```

**说明：**

- `@Target` 指定了注解可以应用于类和字段上。
- `@Retention` 指定注解在运行时依然有效，因此可以通过反射获取注解的信息。
- 注解中定义了`category`、`supplier`、`price`等属性，用于标识商品的类别、供应商和价格。

**为什么使用注解？**

- **简洁易读**：通过注解，可以在代码中直观地标识商品的各种元数据，而不需要在代码中显式地定义这些属性。
- **增强灵活性**：可以通过反射技术，动态地处理不同商品的注解信息，从而实现自动化的业务逻辑。

---

### 4. 注解在电商系统中的应用

在电商系统中，注解具有广泛的应用场景，帮助我们更高效地管理数据、简化业务逻辑。以下是常见的几个场景：

1. **商品验证注解**：使用注解来标识某个商品的属性是否有效，是否符合某些条件（如库存量、价格范围等）。

   ```java
   @Retention(RetentionPolicy.RUNTIME)
   @Target(ElementType.FIELD)
   public @interface ValidPrice {
       double min() default 0.0; // 最低价格
       double max() default Double.MAX_VALUE; // 最高价格
   }

   public class Product {
       @ValidPrice(min = 10, max = 1000) // 价格范围为10-1000之间
       private double price;
   }
   ```

2. **控制层注解**：注解用于简化控制层（如 RESTful API）的映射关系，定义路径和请求方式。

   ```java
   @Retention(RetentionPolicy.RUNTIME)
   @Target(ElementType.METHOD)
   public @interface RequestMapping {
       String path();
       String method() default "GET";
   }

   public class OrderController {
       @RequestMapping(path = "/orders", method = "POST")
       public void createOrder() {
           // 创建订单逻辑
       }
   }
   ```

3. **自动依赖注入**：Spring 框架中的`@Autowired`注解可以用于自动注入服务、依赖等，减少手动实例化和注入的代码。
   ```java
   @Autowired
   private OrderService orderService; // 自动注入订单服务
   ```

---

### 5. 注解的处理机制

注解本身不具备任何功能，它们只是提供了一些标记或元数据。为了实现注解的功能，通常需要结合**反射**机制，手动读取注解并根据注解中的元数据执行相应的逻辑。

**如何通过反射处理注解？**

- 可以通过反射获取类、方法、字段等元素的注解信息。
- 根据注解的值，动态执行某些行为或逻辑。

##### 案例：反射读取注解并执行逻辑

```java
package com.ecommerce.reflection;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.reflect.Method;

// 自定义注解
@Retention(RetentionPolicy.RUNTIME)
@interface ProcessOrder {
    String status();
}

public class OrderProcessor {
    @ProcessOrder(status = "PAID") // 标记订单已支付
    public void processPaidOrder() {
        System.out.println("处理已支付的订单...");
    }

    @ProcessOrder(status = "SHIPPED") // 标记订单已发货
    public void processShippedOrder() {
        System.out.println("处理已发货的订单...");
    }

    public static void main(String[] args) throws Exception {
        // 通过反射获取注解信息并执行相应逻辑
        Method[] methods = OrderProcessor.class.getDeclaredMethods();
        for (Method method : methods) {
            if (method.isAnnotationPresent(ProcessOrder.class)) {
                ProcessOrder order = method.getAnnotation(ProcessOrder.class);
                if ("PAID".equals(order.status())) {
                    method.invoke(new OrderProcessor());
                }
            }
        }
    }
}
```

**为什么结合反射使用注解？**

- **动态行为**：注解可以让程序根据运行时的元数据动态执行某些逻辑，提升程序的灵活性。
- **扩展性**：通过反射，程序可以在运行时加载和处理新添加的注解，而不需要修改已有代码。

---

### 6. 总结

注解是 Java 中非常强大且灵活的工具，广泛应用于各种框架中（如 Spring、Hibernate、JUnit）。它能够帮助开发者通过声明式编

程，减少代码量，提升可读性和维护性。在电商系统中，注解可用于商品验证、API 映射、依赖注入等多种场景，极大简化了开发工作。

## 38. 反射

### 1. 什么是反射？

反射（Reflection）是 Java 语言的一大特性，允许程序在运行时检查或操作自身。通过反射，程序可以动态地获取类的属性、方法、构造器，甚至可以对这些内容进行操作。这打破了传统面向对象编程中的封装概念，允许访问私有属性和方法。

反射的功能包括：

- 获取类的字节码对象。
- 动态创建类的实例。
- 操作类的成员变量、方法和构造函数。

反射的强大之处在于它允许程序在运行时动态地操作类的结构，这在动态框架（如 Spring）中非常有用。

---

### 2. 为什么需要反射？

在开发框架时，反射技术非常重要。例如，在电商平台中，如果你想动态获取和处理订单对象，可以通过反射获取订单类的信息，而无需事先知道具体的类定义。

- **动态创建对象**：通过反射，可以根据类名动态创建对象，无需在代码中显式使用`new`关键字。
- **增强灵活性**：当类或方法名在编译时不可知时，反射提供了操作类和对象的方法。
- **访问私有成员**：反射能访问私有字段和方法，使得程序更加灵活。

在 Spring 框架中，Bean 的创建、依赖注入等功能，都是通过反射技术来实现的。反射是面向对象编程的反面，它不需要通过类的实例或接口进行操作，而是直接通过类加载器获得类信息并进行处理。

---

### 3. 反射常用 API

反射需要用到的核心类是`java.lang.Class`，它代表类的字节码对象。通过 Class 对象，可以获取类的构造器、方法、字段等信息。以下是反射常用的 API：

#### 3.1 获取字节码对象的三种方式

1. `Class.forName("全路径类名")`：最常用，通过类的全路径名获取类的字节码对象。
2. `类名.class`：通过类名直接获取字节码对象。
3. `对象.getClass()`：通过对象实例获取类的字节码对象。

#### 3.2 获取类信息的方法

- **获取包名和类名**：

  - `clazz.getPackage().getName()`：获取类的包名。
  - `clazz.getSimpleName()`：获取类的简单名称。
  - `clazz.getName()`：获取类的完整名称。

- **获取类的成员变量**：

  - `getFields()`：获取所有公开的成员变量。
  - `getDeclaredFields()`：获取类中声明的所有成员变量（包括私有变量）。
  - `getField(String name)`：获取指定的公共成员变量。
  - `getDeclaredField(String name)`：获取指定的成员变量，包括私有变量。

- **获取类的构造方法**：

  - `getConstructor(Class... parameterTypes)`：获取指定参数类型的构造方法。
  - `getConstructors()`：获取所有公开的构造方法。
  - `getDeclaredConstructors()`：获取所有的构造方法，包括私有构造方法。

- **获取类的方法**：
  - `getMethods()`：获取所有可见的方法，包括继承的方法。
  - `getDeclaredMethods()`：获取类中声明的所有方法，包括私有方法。

---

### 4. 反射的应用

#### 4.1 动态创建对象

通过反射，可以动态地创建对象，无需在代码中使用`new`关键字。以下是一个通过反射动态创建`Student`类对象的例子：

```java
// 示例：动态创建 Student 对象
public class Student {
    private String name;
    private int age;

    // 构造器
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 打印学生信息
    public void printInfo() {
        System.out.println("姓名：" + name + ", 年龄：" + age);
    }
}

// 通过反射创建 Student 对象
Class<?> clazz = Class.forName("com.ecommerce.Student");
Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
Student student = (Student) constructor.newInstance("张三", 20);
student.printInfo(); // 输出: 姓名：张三, 年龄：20
```

通过这个例子，我们可以看到反射是如何动态创建对象并调用方法的。

#### 4.2 访问私有属性和方法

反射还可以用于访问类的私有属性和方法。以下例子展示了如何通过反射访问私有字段：

```java
// 示例：通过反射访问私有字段
public class Product {
    private String name;
    private double price;

    // 构造器
    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

// 通过反射修改私有属性
Class<?> clazz = Product.class;
Object product = clazz.getConstructor(String.class, double.class).newInstance("笔记本", 4999.99);
Field fieldName = clazz.getDeclaredField("name");
fieldName.setAccessible(true); // 允许访问私有字段
fieldName.set(product, "智能手机"); // 修改字段值
System.out.println(fieldName.get(product)); // 输出: 智能手机
```

---

### 5. 反射的实际应用场景

#### 5.1 动态调用方法

在电商平台中，可能需要动态调用不同商品的处理方法。例如，根据商品类型动态调用不同的折扣计算方法。通过反射，可以根据方法名动态调用不同的方法。

```java
// 示例：通过反射动态调用方法
public class DiscountService {
    public double calculateDiscount(String productType, double price) {
        if (productType.equals("电子产品")) {
            return price * 0.9; // 电子产品打9折
        }
        return price;
    }
}

Class<?> clazz = DiscountService.class;
Method method = clazz.getMethod("calculateDiscount", String.class, double.class);
Object service = clazz.newInstance();
double result = (double) method.invoke(service, "电子产品", 5000);
System.out.println("折扣后价格: " + result); // 输出: 折扣后价格: 4500.0
```

#### 5.2 在框架中的应用

在 Spring 框架中，反射被广泛用于依赖注入和 Bean 的管理。比如，当我们使用`@Autowired`注解时，Spring 底层通过反射动态地为字段注入依赖的 Bean。

```java
// 示例：Spring 中的依赖注入
public class OrderService {
    @Autowired
    private ProductService productService;

    public void processOrder(String productId) {
        productService.findProductById(productId);
    }
}
```

Spring 通过反射找到`productService`字段并为其注入一个`ProductService`的实例，这种动态注入的实现也是基于反射技术。

---

### 6. 暴力反射

暴力反射是指使用反射技术绕过 Java 的访问控制机制，访问私有成员或方法。需要调用`setAccessible(true)`方法来获取私有字段或方法的访问权限。

```java
// 示例：使用暴力反射访问私有方法
public class User {
    private void printSecret() {
        System.out.println("这是一个秘密方法");
    }
}

Class<?> clazz = User.class;
Method method = clazz.getDeclaredMethod("printSecret");
method.setAccessible(true); // 允许访问私有方法
method.invoke(clazz.newInstance()); // 输出: 这是一个秘密方法
```

暴力反射在实际应用中需要谨慎使用，尤其在涉及敏感数据时，可能会带来安全隐患。

---

### 7. 总结

反射是一种非常强大的技术，它能够让程序在运行时获取类的结构信息并对其进行操作。在电商系统中，反射可以用于动态创建商品对象、动态调用方法以及框架的依赖注入等场景。然而，反射带来的灵活性也伴随着一定的性能开销，因此在实际开发中要合理使用。
