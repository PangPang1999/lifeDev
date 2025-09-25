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

7. 语法检查（严格模式）

    - 在 settings.json 文件中最后添加下面代码后，将开启严格模式，演示时暂不开启
        ```json
        "python.languageServer": "Pylance",
        "python.analysis.typeCheckingMode": "strict"
        ```

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

## 数据结构

1. 列表（list）

    - 可变序列，元素类型可混合，支持嵌套（二维列表/矩阵）。
        ```python
        letters = ["a", "b", "c"]
        matrix = [[1, 2], [3, 4]]
        zeros = [0] * 5                 # 重复列表元素
        combined = [0]*5 + letters      # 拼接列表
        numbers = list(range(10))       # 由可迭代对象创建列表
        chars = list(" hello")           # 字符串转列表
        len(chars)                      # 长度
        ```
    - 索引与切片（不改变原列表，返回新 list）：
        ```python
        a = ["a", "b", "c", "d"]
        a[0], a[-1]  # 首尾
        a[0:3], a[:3]  # 切片
        a[::2]  # 步长
        a[::-1]  # 反转
        ```
    - 解构语法
        ```python
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        first, second, *other, last = numbers
        print(first) // 1
        print(second) // 2
        print(other) // [3, 4, 5, 6, 7, 8, 9]
        print(last) // 10
        ```
    - 遍历与下标：
        ```python
        letters = ["a", "b", "c", "d"]
        for ch in letters:
          print(ch)  # prints each letter
        for i, ch in enumerate(letters): # unpacking
          print(i, ch)  # prints index and letter
        ```
    - 新增/删除：
        ```python
        letters = ["a", "b", "c"]
        letters.append("d")  # 末尾添加
        letters.insert(1, "-")  # 指定下标添加
        letters.pop()  # 删除末尾元素
        letters.pop(1)  # 删除指定下标元素
        letters.remove("b")  # 删除首个匹配
        del letters[0:2]  # 删除区间
        letters.clear()  # 清空列表
        ```
    - 查找（`index()`方法若未找到会报错，需要提前预防）：
        ```python
        if "a" in letters: print(letters.index("a"))
        letters.count("a")
        ```
    - 排序：

        ```python
        nums = [3, 1, 4, 2]
        # sort modifies the original list
        nums.sort()  # Sort in default (ascending) order
        nums.sort(reverse=True)  # Sort in descending order

        # sorted returns a new sorted list
        sorted_nums = sorted(nums)
        sorted_nums = sorted(nums, reverse=True)

        # Custom sorting with a key function
        items = [("prod1", 10), ("prod2", 5), ("prod3", 7)]


        def sort_items(items):
          return items[1]  # return a value used for sorting


        items.sort(key=sort_items)  # Sort by second element of tuple
        ```

    - lamda

        - `obj.list(key=lamda parameters:expression)`
            - `key`：
                - 是函数的一个关键字参数名。在 sorted() 里，key 要传一个函数，这个函数定义了“排序依据”。
            - `lambda parameters: expression`：
                - 定义了一个匿名函数（lambda 表达式）。
                - `parameters` 是输入参数（可以有一个或多个）。
                - `expression` 是返回值（只能是一个表达式，而不是多行语句）。
            ```python
            # Lambda function for sorting
            items = [("prod1", 10), ("prod2", 5), ("prod3", 7)]
            items.sort(key=lambda item: item[1])  # Sort by second element of tuple
            ```

    - map with lamda

        - `map(key=lamda parameters:expression, obj)`
            - `lambda parameters: expression`
                - 定义了一个匿名函数，用于对 obj 中的每个元素进行处理。
                - `parameters` 是传入的单个元素（或解构的多个元素）。
                - `expression` 是返回的变换结果。
                - `obj`是一个可迭代对象（如列表、元组、集合等）。`map()` 会对 obj 中的每个元素应用 lambda 函数，并返回一个迭代器。
            ```python
            items = [("prod1", 10), ("prod2", 5), ("prod3", 7)]
            prices = list(map(lambda item: item[1], items))
            print(prices)
            ```

    - filter

        - `filter(key=lamda parameters:expression, obj)`
            ```python
            items = [("prod1", 10), ("prod2", 5), ("prod3", 7)]
            filtered = list(filter(lambda item: item[1] > 5, items))
            print(filtered)
            ```

    - 列表推导式（优先于 map/filter）：

        ```python
        items = [("prod1", 10), ("prod2", 5), ("prod3", 7)]
        prices = list(map(lambda item: item[1], items))
        prices = [item[1] for item in items]  # 映射
        print(prices)  # 输出: [10, 5, 7]

        filtered = list(filter(lambda item: item[1] > 5, items))
        filtered = [item for item in items if item[1] > 5]  # 过滤
        print(filtered)  # 输出: [('prod1', 10), ('prod3', 7)]
        ```

    - Zip 方法

        ```python
        list1 = [1, 2, 3]
        list2 = [10, 20, 30]
        print(list(zip("abc", list1, list2)))
        # 输出: [('a', 1, 10), ('b', 2, 20), ('c', 3, 30)]
        ```

2. 栈与队列

    - 栈（后进先出 LIFO）：列表模拟。

        ```python
        stack = []
        stack.append("site1")
        stack.append("site2")
        top = stack.pop()
        if not stack: pass  # 空栈
        ```

    - 队列（先进先出 FIFO）：用 `collections.deque` 高效头部出队。

        ```python

        ```

3. 元组（tuple）

    - 不可变序列；用圆括号或省略括号创建，单元素需尾随逗号。

        ```python
        point = ()
        point2 = (1,)
        point3 = (1, 2, 3)
        point4 = (1, 2) * 3
        print(point4)
        x, y, z = point3  # unpacking
        print(x, y, z)
        # pint3[0] = 10  # This will raise an error because tuples are immutable
        ```

    - 适用场景：需要只读、避免意外修改的序列。

4. 交换元素

    ```python
    x = 10
    y = 11
    # 原始方式交换
    z = x
    x = y
    y = z
    print("x", x, "y", y)
    # pythonic 方式交换
    x, y = y, x
    print("x", x, "y", y)
    ```

5. 数组（array）

    - 大量同类型数值时更省内存、稍快；否则默认用列表/元组。
    - https://docs.python.org/3/library/array.html
        ```python
        from array import array
        nums = array("i", [1,2,3])  # "i" 表示有符号整型
        nums.append(4)
        # nums.append(1.5) -> TypeError（类型受限）
        ```

6. 集合（set）

    - 无序、元素唯一；支持集合运算。

        ```python
        numbers = [1, 1, 2, 3, 4]
        first = set(numbers)  # {1, 2, 3, 4}
        print("first: ", first)
        second = {1, 5}

        print("并集", first | second)  # 并集
        print("交集", first & second)  # 交集
        print("差集", first - second)  # 差集
        print("对称差集", first ^ second)  # 对称差集
        ```

    - 无索引访问；需索引时使用列表。

7. 字典（dict）

    - 键值对映射；键需不可变类型（常用 str、数值）。
        ```python
        point = {"x": 1, "y": 2}
        point = dict(x=1, y=2)  # 转换为字典
        point["z"] = 3  # 新增键值对
        point["x"] = 10  # 修改键值对
        x = point["x"]  # 通过键获取值
        v = point.get("a", 0)  # 可设置不存在返回默认
        del point["x"]  # 删除键值对
        # 遍历字典
        for k in point:
          print(k, point[k])
        for k, v in point.items():
          print(k, v)
        ```
    - 典型应用：计数、索引、配置等。

8. 列表推导式(comprehension)

    ```python
    value = []
    for x in range(5):
        value.append(x**2)
    print("原始方式：", value)

    value = [x**2 for x in range(5)]
    print("comprehension方式生成 list ", value)

    # 生成字典
    value = {x: x**2 for x in range(5)}
    print("comprehension方式生成字典: ", value)

    # 生成tuple
    value = tuple(x**2 for x in range(5))
    print("comprehension方式生成 tuple: ", value)
    ```

9. Generate 类型

    - 生成器在创建时只占用少量内存，而将其转换为列表后会占用更多内存，因为列表需要存储所有生成的值。与之而来的是，该类型没有长度
        ```python
        from sys import getsizeof
        value = (x**2 for x in range(100000))  # 此时value类型为生成器
        print("generator:", getsizeof(value))  # 输出生成器对象的内存大小
        print("list:", getsizeof(list(value)))  # 将生成器转换为列表后输出其内存大小
        # print(len(value))  # 生成器没有长度，调用len()会报错
        ```

10. Unpacking（解包运算符）：

    ```python
    values = list(range(10))
    values = [*range(10)]
    print("values", values)

    first = [1, 2]
    second = [3]
    combined1 = [*first, "a", *second, *"Hello"]
    print("combined1", combined1)

    dict1 = {"a": 1}
    dict2 = {"a": 10, "b": 2}
    combined2 = {**dict1, **dict2, "c": 3}  # 解构dict需要两个星号
    print("combined2", combined2)
    ```

11. 练习示例：求文本中出现次数最多的字符（计数与排序）

    ```python
    from pprint import pprint

    text = "This is a test sentence."
    freq = {}
    for ch in text:
        freq[ch] = freq.get(ch, 0) + 1

    # 按出现次数降序排序（列表中是 (字符, 次数) 的元组）
    items = sorted(freq.items(), key=lambda kv: kv[1], reverse=True)
    most_char, most_count = items[0]
    pprint(items, width=60)
    print(most_char, most_count)
    ```

## 错误与异常

1. 概念与常见来源

    - 程序运行中出现的不正常情况称为异常（exception），未处理的异常会中止程序。
    - 基本目标：不让程序“崩溃退出”，而是给出清晰、友好的错误信息，并尽可能恢复或安全退出。
    - 举例

        ```python
        numbers = [1, 2]
        print(numbers[2])
        # This will raise an IndexError because there is no index 2 in the list

        age = int(input("Enter your age: "))
        # If the user inputs a non-integer value, this will raise a ValueError
        ```

2. 常见内建异常

    - `IndexError`：下标越界。
    - `ValueError`：值的格式不正确（如把 `"a"` 转为 `int`）。
    - `ZeroDivisionError`：除数为零。
    - `FileNotFoundError`：文件不存在。
    - `TypeError`：类型不匹配。
    - `KeyError`：字典键不存在。
    - 了解这些异常类型，有助于“精准捕获、各个击破”。

3. 处理异常的基本结构：try / except / else / finally

    - `try` 中放可能出错的语句；若抛出异常，转入匹配的 `except` 分支；无异常则执行 `else`；`finally` 总会执行（释放资源的理想位置）。

        ```python
        # 1. 基本捕获
        try:
            numbers = [10, 20]
            print(numbers[2])  # 触发 IndexError
        except IndexError:
            print("访问的列表索引不存在")

        # 2. 处理用户输入
        try:
            age = int(input("Age: "))
        except ValueError as err:                 # 捕获对象以便记录/诊断
            print("请输入合法的数字年龄")
            # print(err)  # 开发阶段可打印或日志记录详细错误
        else:
            print("没有异常，正常继续")
        finally:
            print("无论是否异常，这里都会执行（如关闭资源）")
        ```

4. 多异常与合并捕获

    - 多个 `except` 分支按顺序匹配；也可合并到同一分支，减少重复处理逻辑。

        ```python
        # 单独分支
        try:
            x = int(input("X: "))
            y = int(input("Y: "))
            print(x / y)
        except ValueError:
            print("输入必须为整数")
        except ZeroDivisionError:
            print("除数不能为 0")

        # 合并分支（同样的处理逻辑）
        try:
            x = int(input("X: "))
            y = int(input("Y: "))
            print(x / y)
        except (ValueError, ZeroDivisionError) as e:
            print("输入不合法或除数为 0")
        ```

5. 资源释放：finally 与 with

    - 外部资源（文件、网络、数据库）需要“用后即还”；`finally` 能保证执行清理；`with` 能自动管理资源，语义更简洁。

        ```python
        # 使用 finally 关闭文件
        f = None
        try:
            f = open("data.txt", "r", encoding="utf-8")
            content = f.read()
            print(content)
        except FileNotFoundError:
            print("文件不存在")
        finally:
            if f:
                f.close()

        # 使用 with 自动关闭（推荐）
        try:
            with open("data.txt", "r", encoding="utf-8") as f:
                print(f.read())
        except FileNotFoundError:
            print("文件不存在")

        # with 同时管理多个资源
        # with open("a.txt") as src, open("b.txt", "w") as dst:
        #     dst.write(src.read())
        ```

    - 支持 `with` 的对象实现了上下文管理协议（拥有 `__enter__`/`__exit__` 方法）。`with` 退出时会自动调用 `__exit__` 完成清理。

6. 抛出异常：raise 的用途与规范

    - 当参数/状态不符合函数的前置条件时，使用 `raise` 明确报告错误；选择最贴切的异常类型，附上清晰信息。相较于捕获，raise 消耗较大

        ```python
        def safe_xfactor_raise(age: int):
          if age <= 0:
              raise ValueError("age 必须为正数")
          return 10 / age

        def call_with_raise():
          try:
              x = safe_xfactor_raise(0)
          except ValueError as error:
              print(error)
        ```

    - 何时使用 `raise`：前置条件校验、不可恢复的逻辑错误、调用者必须得知并处理的异常情形。

7. 性能与风格：EAFP 与 LBYL，异常的代价

    - Python 社区常用 EAFP 风格（“宁可道歉，不要许可”）：先尝试做事，出错再捕获；与 LBYL（“先看一看再做”）相比，代码更直接。
    - 但频繁抛出异常在热点路径上可能带来开销。若异常是“常态”而非“例外”，考虑用条件分支替代。

        ```python
        from timeit import timeit

        # 方案 A：以异常为流程
        code1 = """
        def calculate_xfactor(age):
          if age <= 0:
              raise ValueError("Age cannot be negative.")
          return 10 / age

        try:
          calculate_xfactor(-5)
        except ValueError as e:
          print(e)
        """

        # 方案 B：以返回值/None 表示非法
        code2 = """
        def calculate_xfactor(age):
          if age <= 0:
              return None
          return 10 / age


        xfactor = calculate_xfactor(-5)
        if xfactor is None:
          pass
        """

        print("First", timeit(code1, number=100000))  # 0.245735458
        print("Second", timeit(code2, number=100000))  # 0.007577166999999996
        ```

    - 原则：异常用于“异常路径”；常规控制流优先使用条件判断与返回值。

## 类与面向对象

1. 核心概念

    - 类（class）：创建对象的蓝图（如 `int`、`list`、`dict` 都是内建类）。
    - 对象/实例（object/instance）：类的具体“产物”。
    - 方法（method）：定义在类中的函数，作用于对象自身数据。
    - 直觉类比：`Human` 是类；`John`、`Mary` 是对象。类描述“共性”，对象承载“个性”。

2. 定义类与实例化、`self`、类型判断

    - 类中的方法都有至少一个参数
    - `__main__`是 Module，下一节介绍

        ```python
        class Point:
            def draw(self):          # 实例方法的第一个参数惯例命名为 self
                print("draw")

        p = Point()                  # 实例化
        p.draw()

        print(type(p))               # <class '__main__.Point'>
        print(isinstance(p, Point))  # True
        print(isinstance(p, int))    # False
        ```

3. 构造函数与实例/类属性

    - 构造函数：`__init__`，在实例创建时执行，常用来初始化属性。
    - 实例属性：属于每个对象（彼此独立）。
    - 类属性：属于类本身（所有对象共享）。

    ```python
    class Point:
        default_color = "red"     # 类属性（共享）
        def __init__(self, x, y): # 构造函数
            self.x = x            # 实例属性
            self.y = y
        def draw(self):
            print(f"Point({self.x}, {self.y})")

    p1 = Point(1, 2)
    p2 = Point(3, 4)
    print(Point.default_color, p1.default_color)  # red red

    Point.default_color = "yellow"
    print(p1.default_color, p2.default_color)     # yellow yellow
    ```

4. 类方法与工厂方法（`@classmethod`）

    - 当无需现有对象即可完成的逻辑（如标准化地创建对象）可用类方法。
    - `cls`是`class`的简写

    ```python
    class Point:
        def __init__(self, x, y):
            self.x, self.y = x, y

        @classmethod
        def zero(cls):          # 工厂方法，返回“原点”
            return cls(0, 0)

    p0 = Point.zero()
    ```

5. Magic 方法

    - https://rszalski.github.io/magicmethods/
    - 对象创建后，具备很多继承而来的方法（Magic 方法），如`__str__`，这些方法可以按需取进行重写
    - 对象打印
        ```python
        class Point:
            def __init__(self, x, y):
                self.x = x
                self.y = y
            # 重写 __str__ 方法，定义打印对象时的字符串表示
            def __str__(self):
                return f"({self.x}, {self.y})"
        point = Point(1, 2)
        print(point)  # (1, 2)
        ```
    - 对象比较
        - 不同的对象源自不同的引用，默认情况下，即便两个对象属性和值相同，这两个对象也不想等
        - 可以通过自定义方法来判断两个对象的大小，如（Magic 方法）有`__eq__`和`__gt__`
            ```python
            class Point:
                def __init__(self, x, y):
                    self.x = x
                    self.y = y
                def __eq__(self, other):
                    if isinstance(other, Point):
                        return self.x == other.x and self.y == other.y
                    return False
                def __gt__(self, other):
                    if isinstance(other, Point):
                        return self.x > other.x and self.y > other.y
                    return NotImplemented
            p1 = Point(1, 2)
            p2 = Point(1, 2)
            p3 = Point(2, 3)
            print(p1 == p2)  # True
            print(p3 > p1)  # True
            ```
    - 对象相加
        ```python
        class Point:
            def __init__(self, x, y):
                self.x = x
                self.y = y
            def __add__(self, other):
                return Point(self.x + other.x, self.y + other.y)
        p1 = Point(1, 2)
        p2 = Point(3, 4)
        p3 = p1 + p2
        print(p3.x, p3.y)  # Output: 4 6
        ```

6. 自定义容器（示例）

    ```python
    class TagCloud:
        def __init__(self):
            self.tags = {}  # “私有”字段（会重写为 _TagCloud__tags）
        # 定义添加标签的方法
        def add(self, tag):
            tag = tag.lower()
            self.tags[tag] = self.tags.get(tag, 0) + 1
        # 重写magic方法，实现索引访问
        def __getitem__(self, tag):
            return self.tags.get(tag.lower(), 0)
        # 重写magic方法，实现索引赋值
        def __setitem__(self, tag, count):
            self.tags[tag.lower()] = count
        # 重写magic方法，实现len()函数
        def __len__(self):
            return len(self.tags)
        # 重写magic方法，实现迭代
        def __iter__(self):
            return iter(self.tags)

    c = TagCloud()
    c.add("Python")
    c.add("PYTHON")
    print(c.tags)  # {'python': 2}
    print(c["python"])  # 2
    c["python"] = 10
    print(c["python"])  # 10
    print(len(c))  # 1
    ```

7. 封装与“私有”成员（名称改写）

    - 以 `__name` 前缀可触发名称改写（name mangling），用于避免外部/子类误触：
    - 注意这不是“安全机制”，而是约定与防误用；仍可经 `_ClassName__attr` 访问。

    ```python
    class TagCloud:
        def __init__(self):
            self.__tags = {}            # “私有”字段（会重写为 _TagCloud__tags）
        def add(self, tag):
            tag = tag.lower()
            self.__tags[tag] = self.__tags.get(tag, 0) + 1
    c = TagCloud()
    c.add("Python"); c.add("PYTHON")
    # print(c.__tags)         # AttributeError
    print(c.__dict__)         # {'_TagCloud__tags': {'python': 2}}
    ```

8. 属性管理：`@property`（优雅的 getter/setter 与校验）

    - 原始方式（仍可访问`get_price`方法和`set_price`）
    - property 的作用是把 price 变成一个“受管属性”（property/描述符）。外部用 `p.price` 访问时，实际上会调用 `get_price()`；用 `p.price = x` 赋值时，实际上会调用 `set_price(x)`，从而触发你在 `setter` 里写的校验逻辑（禁止负数）。

        ```python
        class Product:
          def __init__(self, price):
              self.__price = price

          def get_price(self):
              return self.__price

          def set_price(self, price):
              if price < 0:
                  raise ValueError("Price cannot be negative")
              self.__price = price

          price = property(get_price, set_price)

        product = Product(100)
        print(product.price)  # Output: 100
        product.price = 150
        print(product.price)  # Output: 150
        ```

    - 用属性包装字段，实现读写拦截与校验，外部用法依旧像访问字段，并隐藏具体方法

        ```python
        class Product:
        	def __init__(self, price):
        		self.price = price  # 走 property 的 setter

        	@property
        	def price(self):
        		return self.__price

        	@price.setter
        	def price(self, value):
        		if value < 0:
        			raise ValueError("price 不能为负数")
        		self.__price = value


        product = Product(100)
        print(product.price)  # Output: 100
        product.price = 150
        print(product.price)  # Output: 150
        ```

9. 继承、方法重写与 `super()`

    - 继承：子类复用父类的属性/方法；必要时重写（override）。
    - 用 `super().__init__()`（或 `super().method()`）调用父类实现。
    - 子类生成的实例，使用`isinstance`方法判断，既是子类，也是父类，并且属于 object 类，这和其他语言相似，创建子类实例时，会依此调用父子的构造方法

        ```python
        class Animal:
          def __init__(self):
              self.age = 1

          def eat(self):
              print("Eat")

        class Mammal(Animal):
          def walk(self):
              print("Walk")

        class Fish(Animal):
          def __init__(self):
              super().__init__()
              self.age = 2  # 重写 age 属性

          def eat(self):
              print("Fish Eat")  # 重写 eat 方法

          def swim(self):
              print("Swim")

        m = Mammal()
        m.eat()  # 从父类继承 eat
        print(m.age)  # 从父类继承 age 属性
        f = Fish()
        f.eat()  # 调用重写的 eat 方法
        print(f.age)  # 访问重写的 age 属性
        ```

10. 多级继承

    - Python 支持多重继承，但如有相同方法，按顺序取第一个实现
    - 合理用法：将共享且小而抽象的能力拆为 Mixin（如 `Flyer`、`Swimmer`），组合到具体类上。

11. 抽象基类（ABC）：强制接口、禁止直接实例化

    - 用 `abc.ABC` 与 `@abstractmethod` 定义**抽象类**与**强制实现的方法**。
    - 典型示例：统一“流”的接口（文件/网络/内存）。

    ```python
    from abc import ABC, abstractmethod


    class InvalidOperationError(Exception):
        pass


    class Stream(ABC):
        def __init__(self):
            self.opened = False

        def open(self):
            if self.opened:
                raise InvalidOperationError("stream 已打开")
            self.opened = True

        def close(self):
            if not self.opened:
                raise InvalidOperationError("stream 已关闭")
            self.opened = False

        @abstractmethod
        def read(self): ...  # 强制子类实现


    class FileStream(Stream):
        def read(self):
            print("read from file")


    class NetworkStream(Stream):
        def read(self):
            print("read from network")


    # Stream()          # TypeError：抽象类不可实例化，严格模式编译时提示
    FileStream().read()
    ```

12. 多态与鸭子类型（Duck Typing）

    - 多态：同一操作作用于不同对象，呈现不同效果。
    - 在 Python 中，即使没有继承关系，只要对象实现了所需方法，也可被接收：

    ```python
    class TextBox:     def draw(self): print("TextBox")
    class DropDown:    def draw(self): print("DropDown")

    def draw_all(controls):      # 只假设每个元素都可 .draw()
        for c in controls:
            c.draw()

    draw_all([TextBox(), DropDown()])
    ```

    - 使用 **ABC 做接口约束** 能在团队/大型项目中**统一约定**与**提前报错**；纯鸭子类型更灵活。

13. 扩展内建类型（继承内建类）

    ```python
    class Text(str):
        def duplicate(self):     # 在字符串上扩展新能力
            return self + self

    class TrackableList(list):
        def append(self, obj):   # 扩展而非替换父类行为
            print("append called")
            super().append(obj)

    print(Text("Python").duplicate())  # PythonPython
    tl = TrackableList([1, 2]); tl.append(3)
    ```

14. 仅含数据的类：`namedtuple`（轻量数据结构）

    - 如果“类只有数据、无行为”，可用 `collections.namedtuple`：自动生成等值比较等能力，且不可变。

    ```python
    from collections import namedtuple
    Point = namedtuple("Point", ["x", "y"])

    a = Point(x=1, y=2); b = Point(1, 2)
    print(a == b)      # True（值相等）
    # a.x = 3          # AttributeError：不可变
    ```

15. 继承 vs 组合（Composition）

    - **DRY（不要重复自己）**：复用共享逻辑可选“继承或组合”。
    - 一般建议：**优先组合**（把可复用能力封装进独立对象并注入），**继承层级 ≤ 2**，避免脆弱的深层结构。

# Module

1.  模块（module）

    - 定义：任意一个以 `.py` 结尾的文件就是一个模块，内部可以放函数、类、变量以及可执行语句。
    - 命名约定：与变量/函数一致，小写+下划线（如 `sales.py`、`calculate_tax`）。
    - 拆分准则：同一模块中只放强相关的对象（函数/类/常量等），避免“大杂烩”。

        ```python
        # sales.py
        def calculate_tax():
          pass


        def calculate_shipping():
          pass
        ```

2.  两种导入方式与各自用法

    - 选择性导入对象
        ```python
        from sales import calculate_tax, calculate_shipping
        calculate_tax()
        calculate_shipping()
        ```
    - 导入整个模块
        ```python
        import sales
        sales.calculate_shipping()
        ```
    - 不要使用 `from sales import *`，会把模块内所有名称无选择地注入当前命名空间，极易产生命名覆盖与维护问题。
    - 性能说明：不管导入一个对象还是整个模块，模块都会完整加载一次；差别只在当前命名空间可见的名字多少。

3.  模块的加载与缓存（`__pycache__`）

    - 第一次导入模块时，Python 会编译为字节码并缓存到 `__pycache__/module.cpython-XY.pyc`，用于下次更快加载。
        - Mac 可能存放在系统目录下，使用命令`~/Library/Caches/com.apple.python/文件路径`可查找到
    - 若源文件更新（修改时间更晚），Python 会自动重新编译。
    - 注意：这只是加速加载，不影响程序运行时性能。

4.  模块搜索路径：`sys.path`

    - 导入时的查找顺序：当前目录 → 标准库目录 → site-packages（第三方库安装位置）等。

    ```python
    import sys
    print(sys.path)  # 打印所有搜索目录
    ```

    - 一般不建议在代码中随意修改 `sys.path`；需要跨包导入请使用规范的包结构与绝对/相对导入。

5.  包（package）与子包（sub-package）

    - 包：包含 `__init__.py` 的目录（Python 3.3+ 中即使没有也可被视为“命名空间包”，但显式文件更清晰）。
    - 作用：把多个相关模块按目录组织起来。
    - 命名：同模块规则（小写+下划线）。
    - 示例结构

        ```
        ecommerce/                    # 顶层包
            __init__.py               # 包初始化代码（可为空）
            shopping/                 # 子包
                __init__.py
                sales.py
            customer/                 # 子包
                __init__.py
                contact.py
        app.py                        # 程序入口
        ```

    - 导入示例

        ```python
        # 方式一：绝对导入
        from ecommerce.shopping import sales
        sales.calculate_tax()

        # 方式二：从模块中选择性导入对象
        from ecommerce.shopping.sales import calculate_shipping
        calculate_shipping()
        ```

    - 需要内部引用时（如 sales 引用 contact），使用相对导入，可减少超长模块路径。

        ```python
        # 在 ecommerce/shopping/sales.py 中，导入兄弟包 ecommerce/customer/contact
        from ..customer import contact   # .. 表示上一级包 ecommerce
        ```

    - 原则：能用绝对导入就用绝对导入；只有在路径过长或包重组频繁时，谨慎使用相对导入简化。

6.  包的初始化与选择性暴露

    - `__init__.py` 会在包首次导入时执行。可放：
        - 轻量初始化逻辑（避免沉重副作用），使用 `print` 进行测试
        - 包级常量、版本号
    - 模块顶层的语句在首次导入时执行一次（之后从缓存读，不再重复执行）。
    - 补充（谨慎使用）
        - `__init__.py`可以辅助显式导出清单 `__all__`（控制 `from package import *` 时暴露的名称）
            ```python
            # ecommerce/__init__.py
            __all__ = ["shopping", "customer"]  # * 导入时只暴露这两个子包
            print("ecommerce initialized")      # 首次导入时输出一次
            ```

7.  模块内置属性与 `dir()`
    - 使用 `dir()`能查看导入 Module 的属性
    ```python
    from ecommerce.shopping import sales
    print(dir(sales))
    # ['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'calculate_shipping', 'calculate_tax']
    ```
    - 常见魔术属性：
        - `__name__`：模块名（被当作脚本直接执行时为 `"__main__"`）
        - `__package__`：所属包名
        - `__file__`：模块文件路径
    - 自检与调试：
    ```python
    from ecommerce.shopping import sales
    print(sales.__name__)  # ecommerce.shopping.sales
    print(sales.__package__)  # ecommerce.shopping
    print(sales.__file__)  # /path/to/ecommerce/shopping/sales.py
    ```
