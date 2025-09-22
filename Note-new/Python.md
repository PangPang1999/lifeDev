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
