> Quick Learn（具备其他编程基础）

## 基础

1. 安装

    - Windows：从 Python 官网下载安装包。
    - macOS：系统自带 Python3，可在终端输入 `python3` 验证版本。新版默认不再包含 `python` 命令。

2. 编译器与插件

    - 推荐使用 VS Code。
    - 常用插件：
        - Python：语法支持插件。
        - Black Formatter：统一代码风格。
        - Code Runner（黄色图标）：需要进入配置文件，将默认的 `python -u` 修改为 `python3`。

3. 文件格式

    - Python 源代码文件后缀为 `.py`。

4. 程序执行

    - 在终端运行：
        ```bash
        python3 fileName.py
        ```

5. 基础语法

    - `print()`：输出函数。
    - 使用 `*` 运算符可以实现字符串重复输出，例如：
        ```python
        print("Hi" * 3)   # 输出 HiHiHi
        ```

6. Python 组成

    - 语言层面：语法规则。
    - 实现层面：不同的解释器。
        - CPython：默认且最常用的官方实现。
        - Jython：运行在 JVM 上，与 Java 交互。
        - IronPython：运行在 .NET 平台上。
        - PyPy：高性能实现，内置 JIT 编译器。

## 原始类型

1. 基本类型

    - Python 区分大小写。
    - 常见基本类型：
        - 数字（包含整数、浮点数、复数）。
        - 布尔值（True / False）。
        - 字符串（使用引号包裹的文本）。

2. 字符串

    - 常见操作方式：
        - `"""`：多行字符串。
        - `len(str)`：获取字符串长度。
        - `str[0:9]`：切片操作，前闭后开（包含 start，不包含 end）。
        - 转义字符：如 `\'` 表示引号，`\n` 表示换行。
        - f-string：`f"{str1} {str2}"` 实现字符串插值。
    - 常用方法：
        - `str.upper()`：返回全大写的新字符串。
        - `str.title()`：返回首字母大写的新字符串。
        - `str.strip()`：返回去除首尾空白的新字符串。
        - 成员运算：`in`、`not in` 用于判断子串是否存在。

3. 数字

    - 常见运算符：
        - `+`、`-`、`*`、`/`：基本运算。
        - `//`：整除，取结果的整数部分。
        - `%`：取余数。
        - `**`：指数运算。
    - 复合赋值：
        - `+=`、`-=` 等，用于在原值基础上更新。
    - 内置方法举例：

        - `round(num)`：四舍五入。
        - `abs(num)`：绝对值。

    - math 模块方法：
        - `math.ceil(num)`：向上取整。

4. 类型转换

    - `input()` 输入的内容默认为字符串类型。
    - 使用内置函数进行类型转换：
        - `int()`：转为整数。
        - `float()`：转为浮点数。
        - `bool()`：转为布尔值。
        - `str()`：转为字符串。
    - 特殊情况：布尔转换时，空字符串 `""`、数字 `0`、`None` 等会被视为 False。

## 比较与逻辑

1. 比较运算符

    - 表达式结果为布尔值（True/False）。
    - 常用运算符：
        - `==` 等于
        - `!=` 不等于
        - `>`、`<`、`>=`、`<=`
    - 注意：不同类型比较结果为 False。

2. 字符串比较

    - 字符串按字典序比较。
        ```python
        print("bag" > "apple")   # True
        print("bag" == "Bag")    # False
        ```
    - 每个字符都有对应的 Unicode 数值，可用 `ord()` 查看。

3. 条件语句

    - 使用 `if`、`elif`、`else`。缩进决定代码块归属。`elif`指`else if`
        ```python
        temperature = 30
        if temperature > 30:
          print("It's warm")
          print("Drink water")
        elif temperature > 20:
          print("It's nice")
        else:
          print("It's cold")
        print("Done")
        ```

4. 三元写法

    ```python
    age = 12
    message = "Eligible" if age >= 18 else "Not Eligible"
    print(message)
    ```

5. 逻辑运算符

    - `and`：两个条件都为真才成立。
    - `or`：只要一个条件为真即可。
    - `not`：布尔值取反。
    - 表达式具备短路特性，遇到结果已确定时不再继续计算。
        ```python
        high_income = False
        good_credit = True
        student = False
        if (high_income or good_credit) and not student:
            print("Eligible for loan")
        else:
            print("Not eligible for loan")
        ```

6. 比较运算符链式写法

    - 可直接书写数学式风格：
        ```python
        age = 22
        if 18 <= age < 65:
            print("Eligible")
        ```

## 循环与迭代

1. for 循环

    - 用于遍历可迭代对象（range、字符串、列表）。
        ```python
        for x in range(3):
            print("Attempt", x + 1)
        ```
    - `range(start, stop, step)` 返回可迭代对象，常与循环结合。
    - 其他可迭代对象如`[1, 2, 3, 4]`

2. 嵌套循环

    - 内层循环在外层每次迭代中都会完整执行。
        ```python
        for x in range(2):
            for y in range(3):
                print(f"({x},{y})")
        ```

3. while 循环

    - 根据条件重复执行。
        ```python
        command = ""
        while command.lower() != "exit":
          command = input("Enter a command (type 'exit' to quit): ")
          if command.lower() != "exit":
              print(f"You entered: {command}")
        ```

4. break 与 else

    - `break`：提前结束循环。
    - `for...else`：当循环未被 `break` 打断时执行 else。
        ```python
        successful = False
        for i in range(3):
            print("Attempt", i + 1)
            if successful:
                print("Success")
                break
        else:
            print("Failed after 3 attempts")
        ```

5. 无限循环

    ```python
    while True:
        print("Hello, World!")
    ```

## 函数

1. 函数

    - 将大程序拆分为小而清晰、可维护、可复用的代码块。
    - 降低复杂度，便于测试与调试。

2. 定义与调用

    - 使用 `def` 定义；函数体由缩进确定。
        ```python
        def greet():
            print("Hi there")
            print("Welcome aboard")
        greet()  # 调用
        ```

3. 参数与实参

    - 参数（parameter）：定义函数时列出的输入名。
    - 实参（argument）：调用函数时传入的具体值。
    - 定义参数但未提供实参时会报错
        ```python
        def greet(first_name, last_name):
            print(f"Hi {first_name} {last_name}")
        greet("Mosh", "Hammadani")
        greet("John", "Smith")
        ```

4. 函数类型

    - 执行任务：只产生副作用（如打印），默认若未显式 `return`，函数默认返回 `None`。
    - 计算并返回：使用 `return` 返回值，更通用。

5. 关键字实参与可读性

    - 当位置实参含义不直观时，用关键字实参提升可读性。
        ```python
        def increment(number, by):
            return number + by
        print(increment(2, by=1))  # 可读性更好
        ```

6. 可选参数（默认值）

    - 为参数设置默认值，使其成为可选项；可选参数必须位于必选参数之后。
        ```python
        def increment(number, by=1):
            return number + by
        print(increment(2))      # 3
        print(increment(2, 5))   # 7
        ```

7. 可变数量位置参数：`*args`

    - 聚合为元组，可迭代计算。
        ```python
        def multiply(*numbers):
            total = 1
            for number in numbers:
                total *= number
            return total
        print(multiply(2, 3, 4))  # 24
        ```

8. 可变数量关键字参数：`**kwargs`

    - 聚合为字典，适合接收任意键值信息。

        ```python
        def save_user(**user):
            print(user)            # {'id': 1, 'name': 'John'}
            print(user["id"])      # 1
            print(user["name"])    # John
        save_user(id=1, name="John")
        ```

9. 作用域（scope）

    - 局部变量：只在函数内部可见，生命周期随调用结束而结束。
    - 全局变量：在文件内任意位置可见；应尽量少用，避免在函数中修改全局状态。
        ```python
        message = "a"  # 全局
        def greet():
            message = "b"  # 局部，遮蔽全局
            print(message) # b
        greet()
        print(message)     # a
        # 不推荐的做法（可能产生副作用）：
        # def greet():
        #     global message
        #     message = "b"
        ```
