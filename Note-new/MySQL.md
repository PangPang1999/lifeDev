# MySQL 快速参考手册

## 1. 数据库管理概述 (DBMS Overview)

### 1.1 什么是数据库管理系统 (What is DBMS?)

数据库管理系统（Database Management System, DBMS）是用于创建、管理和操作数据库的软件。它提供了一种与数据进行交互的方式，使用户能够存储、检索、更新和删除数据。常见的 DBMS 包括 MySQL、PostgreSQL、Oracle 和 SQL Server。

在一个典型的电商系统中，DBMS 负责管理用户信息、商品信息、订单信息等数据。例如，当用户浏览网站时，DBMS 会查询商品表并返回相关的商品数据；当用户下订单时，DBMS 会插入新订单的数据到订单表中。

### 1.2 数据检索 (Retrieving Data)

数据检索是指从数据库中提取特定信息的过程。在电商系统中，常见的数据检索场景包括查询商品列表、查看订单详情、搜索用户购买记录等。

**示例**：

```sql
-- 查询特定商品的信息
SELECT * FROM products WHERE product_id = 123;
```

例如，当用户浏览特定商品时，系统会执行类似的 SQL 查询，从数据库中检索商品的详细信息，并展示给用户。

### 1.3 数据插入 (Inserting Data)

数据插入是将新数据写入数据库的操作。在电商系统中，数据插入的典型场景包括用户注册、添加新商品、生成订单等。

**示例**：

```sql
-- 插入新订单数据
INSERT INTO orders (order_id, user_id, product_id, order_date)
VALUES (456, 789, 123, NOW());
```

当用户下单时，系统会将订单数据插入到订单表中，生成新的记录。

### 1.4 数据更新 (Updating Data)

数据更新是指修改数据库中现有数据的操作。在电商系统中，数据更新的常见场景包括修改用户地址、更新商品库存、修改订单状态等。

**示例**：

```sql
-- 更新订单状态为“已发货”
UPDATE orders
SET order_status = 'shipped'
WHERE order_id = 456;
```

当订单从“待发货”更新为“已发货”时，系统会执行类似的 SQL 更新操作。

### 1.5 数据删除 (Deleting Data)

数据删除是指从数据库中移除特定记录的操作。然而，在大多数电商系统中，出于安全和审计的考虑，很少直接删除数据，更多情况下会使用**逻辑删除**。逻辑删除通过添加一个标记字段（如`is_deleted`），表明该记录已被删除，但实际上数据仍然保留在数据库中。

**示例**：

```sql
-- 逻辑删除用户
UPDATE users
SET is_deleted = 1
WHERE user_id = 789;
```

在这种方式下，虽然数据在用户界面不可见，但仍可在后台进行恢复和审查。

### 1.6 数据汇总 (Summarizing Data)

数据汇总用于对数据库中的数据进行统计和分析。在电商系统中，常见的数据汇总操作包括计算某段时间内的销售总额、统计热门商品销量等。

**示例**：

```sql
-- 计算某月的总销售额
SELECT SUM(order_total) AS monthly_sales
FROM orders
WHERE MONTH(order_date) = 8 AND YEAR(order_date) = 2023;
```

此查询可用于统计 2023 年 8 月的总销售额，为电商平台提供运营决策支持。

### 1.7 复杂查询 (Writing Complex Queries)

复杂查询通常涉及多表联合查询、嵌套查询或高级条件筛选。在电商系统中，复杂查询的应用场景包括：查询某用户在特定时间段内的订单详情，筛选出高价值订单，或分析用户行为数据等。

**示例**：

```sql
-- 查询用户在2023年购买金额超过500元的订单详情
SELECT o.order_id, o.order_total, p.product_name
FROM orders o
JOIN products p ON o.product_id = p.product_id
WHERE o.user_id = 789 AND o.order_total > 500
AND YEAR(o.order_date) = 2023;
```

这种复杂查询可帮助电商平台分析用户购买习惯，进而优化商品推荐和促销策略。

## 2. SQL 语法基础 (SQL Basics)

### 2.1 SQL 执行顺序 (SQL Execution Order)

SQL 的执行顺序指的是在处理 SQL 语句时，数据库系统按特定顺序执行各个部分的流程。通常情况下，SQL 的执行顺序如下：

1. **FROM**：指定要查询的表。
2. **WHERE**：筛选符合条件的行。
3. **GROUP BY**：将数据按某一列进行分组。
4. **HAVING**：进一步筛选分组后的数据。
5. **SELECT**：选择要返回的列。
6. **ORDER BY**：对结果进行排序。
7. **LIMIT**：限制返回的行数。

**示例**：

```sql
SELECT product_name, SUM(order_total)
FROM orders
WHERE order_status = 'shipped'
GROUP BY product_name
HAVING SUM(order_total) > 5000
ORDER BY SUM(order_total) DESC
LIMIT 10;
```

这个查询从电商订单中筛选出已发货状态的订单，按商品名称进行分组，返回销售额超过 5000 元的商品，并按销售额降序排列，最后限制返回 10 个结果。

### 2.2 基本命令 (Basic Commands)

#### 2.2.1 USE (选择数据库)

`USE`命令用于指定当前操作的数据库。

**示例**：

```sql
USE ecommerce_db;
```

选择电商数据库 `ecommerce_db` 进行操作。

#### 2.2.2 FROM (选择表)

`FROM`指定要查询的表，支持一次查询多张表。多张表之间可以使用逗号或其他方式进行连接查询，但需要确保查询逻辑正确。

**示例**1：查询单张表

```sql
SELECT *
FROM products;
```

从 `products` 表中选择所有列。

**示例**2：查询多张表

```sql
SELECT *
FROM products, orders
WHERE products.product_id = orders.product_id;
```

从 `products` 和 `orders` 表中选择所有列，查询商品与订单中匹配的记录。通过 `products.product_id = orders.product_id` 建立表之间的连接。

#### 2.2.3 SELECT (选择列)

`SELECT` 用于从表中选择指定的列。合理使用 `SELECT` 可以提高查询性能，并减少不必要的数据传输。

**示例**1：选择具体的列

```sql
SELECT customer_id, first_name
FROM customers;
```

从 `customers` 表中选择 `customer_id` 和 `first_name` 列。只选择需要的列可以减少服务器负担。

**示例**2：使用 `*` 选择所有列

```sql
SELECT *
FROM orders;
```

从 `orders` 表中选择所有列。虽然方便，但不建议在大表中使用，因为返回多余数据可能增加服务器负荷。

**示例**3：选择具体数值

```sql
USE sql_store;

SELECT 1, 2;
```

直接返回数值 `1` 和 `2`，并非从表中查询。这种方式通常用于测试或临时查询。

**示例**4：指定列并进行计算

```sql
SELECT first_name, last_name, points, points * 10 AS total_points
FROM customers;
```

选择 `first_name`, `last_name` 和 `points` 列。这可以帮助只返回需要的数据，提升查询效率。

**示例**5：纵向排列列，提升可读性
当选择的列较多时，可以纵向排列列名来提升代码的可读性：

```sql
SELECT
    first_name,
    last_name,
    points,
    points * 10 + 100
FROM customers;
```

这里选择的列包括运算表达式 `points * 10 + 100`，为积分计算定义了一个新的值。

**示例**6：使用 `AS` 为列定义别名
`AS` 关键字允许为列或计算结果指定别名，尤其当列名需要包含空格时，必须使用单引号或双引号包裹别名。

```sql
SELECT
    first_name,
    last_name,
    points,
    points * 10 + 100 AS "discount factor"
FROM customers;
```

这里通过 `AS` 关键字为计算结果 `points * 10 + 100` 定义了别名 `"discount factor"`，别名包含空格时，必须使用引号。

**示例**7：简化列的别名
若不需要空格，别名可以直接跟在 `AS` 后面，无需使用引号：

```sql
SELECT
    first_name,
    last_name,
    points * 10 AS discountFactor
FROM customers;
```

这样定义的别名 `discountFactor` 不含空格，简洁且易于使用。

使用 `AS` 为列和计算结果命名可以使查询结果更具可读性，并且在查询中简化数据操作和解释。

#### 2.2.4 ORDER BY (排序)

`ORDER BY` 用于对查询结果进行排序。默认情况下，排序是升序（ASC），如果需要降序排序，可以使用 `DESC`。

**示例**1：按单个列降序排序

```sql
SELECT *
FROM customers
ORDER BY first_name DESC;
```

在这个查询中，按 `first_name` 进行降序排序。即先显示字母 Z 开头的名字。

**示例**2：按多个列排序

```sql
SELECT *
FROM customers
ORDER BY state, first_name;
```

这里首先按 `state` 列排序，其次按 `first_name` 排序。如果在某些客户的 `state` 相同，那么会按他们的 `first_name` 升序排列。

**示例**3：按未选择的列进行排序

```sql
SELECT first_name, last_name
FROM customers
ORDER BY birth_date;
```

虽然查询中只返回 `first_name` 和 `last_name`，但我们仍可以根据 `birth_date` 进行排序。注意：此功能在 MySQL 中可用，其他数据库系统中可能会导致错误。

**示例**4：基于计算结果进行排序

```sql
SELECT first_name, last_name, points * 10 AS total_points
FROM customers
ORDER BY total_points;
```

在这个例子中，创建了一个名为 `total_points` 的计算列，用于对查询结果进行排序。

**示例**5：按列的位置进行排序

```sql
SELECT first_name, last_name, points
FROM customers
ORDER BY 1, 2;
```

在这里，`ORDER BY 1, 2` 表示根据第一列 (`first_name`) 和第二列 (`last_name`) 排序。尽量避免这种用法，因为它减少了可读性，不如直接指定列名。

#### 2.2.5 WHERE (筛选条件)

`WHERE` 子句用于指定查询的筛选条件，以返回符合条件的记录。可以结合比较运算符和修饰符进行更复杂的筛选操作。

##### 比较运算符

**常用的运算符**：

- 大于：`>`，大于等于：`>=`
- 小于：`<`，小于等于：`<=`
- 等于：`=`
- 不等于：`!=` 或者 `<>`

**示例**1：按客户 ID 筛选

```sql
USE sql_store;

SELECT *
FROM customers
WHERE customer_id = 1;
```

在这里，我们选择 `customer_id` 为 1 的客户。

##### 字符串匹配

使用 `=` 比较字符串时，需要使用 `"` 或者 `'` 包裹字符串，同时 MySQL 默认不区分大小写。

**示例**2：按州筛选

```sql
SELECT *
FROM customers
WHERE state = "VA";
```

筛选出 `state` 为 "VA" 的客户。

##### 日期条件

日期比较时，日期必须用 `"` 或 `'` 包裹，格式为 `'YYYY-MM-DD'`。

**示例**3：按出生日期筛选

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01';
```

筛选出生日期在 1990 年 1 月 1 日之后的客户。

##### BETWEEN——区间筛选

`BETWEEN` 用于筛选范围，通常与 `AND` 一起使用。

**示例**4：按积分范围筛选

```sql
SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000;
```

筛选出 `points` 在 1000 和 3000 之间的客户。

##### AND & OR——逻辑运算符

- `AND` 用于同时满足多个条件，优先级高于 `OR`。
- `OR` 用于满足其中一个条件。

**示例**5：按出生日期和积分筛选

```sql
SELECT *
FROM customers
WHERE birth_date > '1985-01-01' OR points > 1000 AND state = 'VA';
```

这里首先执行 `AND` 条件，随后与 `OR` 条件配合使用。

##### NOT——取反

`NOT` 用于获取不符合条件的数据。

**示例**6：按条件取反筛选

```sql
SELECT *
FROM customers
WHERE NOT (birth_date > '1985-01-01' OR points > 1000 AND state = 'VA');
```

筛选不满足条件的客户。

##### LIKE——模式匹配

`LIKE` 用于字符串匹配，支持两种通配符：

- `%`：任意长度的任意字符
- `_`：单个任意字符

**示例**7：匹配姓氏开头为 'b' 的客户

```sql
SELECT *
FROM customers
WHERE last_name LIKE 'b%';
```

**示例**8：匹配五个字符的姓氏，且以 'y' 结尾

```sql
SELECT *
FROM customers
WHERE last_name LIKE '_____y';
```

##### REGEXP——正则表达式

`REGEXP` 提供更复杂的匹配规则，可以使用 `^` 和 `$` 来指定开头或结尾。

**示例**9：匹配姓氏以 'field' 结尾的客户

```sql
SELECT *
FROM customers
WHERE last_name REGEXP 'field$';
```

##### IS NULL——空值判断

使用 `IS NULL` 来筛选字段值为空的记录。

**示例**10：筛选手机号为空的客户

```sql
SELECT *
FROM customers
WHERE phone IS NULL;
```

##### LIMIT——限制返回记录数量

`LIMIT` 用于限制查询结果的行数，常见于 MySQL，`LIMIT` 后加上数字表示返回的行数。

**示例**11：限制返回 3 条记录，跳过前 6 条

```sql
SELECT *
FROM customers
LIMIT 6, 3;
```

##### IN——多值匹配

`IN` 用于匹配一组给定值，支持字符串和数字。

**示例**12：按州筛选，多个州匹配

```sql
SELECT *
FROM customers
WHERE state IN ('VA', 'GA', 'FL');
```

**示例**13：取反匹配

```sql
SELECT *
FROM customers
WHERE state NOT IN ('VA', 'GA', 'FL');
```

##### 案例分析

**示例**14：从 `products` 中筛选未出现在 `order_items` 中的产品

```sql
SELECT *
FROM products
WHERE product_id NOT IN (
    SELECT DISTINCT product_id
    FROM order_items
);
```

#### 2.2.6 DISTINCT (去重)

`DISTINCT`用于去除查询结果中的重复值。

**示例**：

```sql
SELECT DISTINCT category
FROM products;
```

查询商品类别，并去除重复类别。

#### 2.2.7 LIMIT (限制行数)

`LIMIT`用于限制查询结果的行数。

**示例**：

```sql
SELECT *
FROM products
LIMIT 5;
```

查询前 5 个商品数据。

### 2.3 子查询与连接 (Subqueries and Joins)

#### 2.3.1 子查询 (Subqueries)

子查询是指嵌套在另一个查询中的查询，通常用于提供数据给外部查询。子查询可以位于 `SELECT`、`FROM` 或 `WHERE` 子句中，并且可以返回单个值、一行或多行。

##### 1. 基本(`WHERE`)子查询示例

子查询可以用于筛选条件，例如查询特定用户的订单对应的商品信息。

**示例**：查询用户 ID 为 789 的所有订单中的商品信息。

```sql
SELECT *
FROM products
WHERE product_id IN (
  SELECT product_id
  FROM orders
  WHERE user_id = 789
);
```

##### 2. 相关子查询

相关子查询是指子查询依赖于外部查询中的某些值，每次执行外部查询时，子查询都会重新运行。例如，返回部门中薪资高于部门平均薪资的员工。

**案例**：查询薪资高于其所在部门平均薪资的员工信息。

```sql
SELECT *
FROM employees e
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
  WHERE office_id = e.office_id
);
```

在这个查询中，子查询根据每个员工的 `office_id` 计算部门的平均薪资，然后将结果与该员工的薪资进行比较。

##### 3. **`SELECT` 语句中的子查询**

子查询可以嵌入到 `SELECT` 语句中，用于计算额外的数据字段。

**案例 1：查询每个发票的金额，并显示发票总额与平均值的差异**

```sql
SELECT
	invoice_id,
    invoice_total,
    (SELECT AVG(invoice_total)
     FROM invoices) AS invoice_average,
	invoice_total - (SELECT AVG(invoice_total) FROM invoices) AS difference
FROM invoices;
```

**案例 2：按客户查询总销售额，并计算其销售额与平均值的差异**

```sql
SELECT
	client_id,
    name,
    (SELECT SUM(invoice_total)
     FROM invoices
     WHERE client_id = c.client_id) AS total_sales,
    (SELECT AVG(invoice_total)
     FROM invoices) AS average_sales,
    (SELECT SUM(invoice_total)
     FROM invoices
     WHERE client_id = c.client_id) - (SELECT AVG(invoice_total)
                                        FROM invoices) AS difference
FROM clients c;
```

##### 4. `FROM` 子句中的子查询

`FROM` 子句中的子查询用于生成一个临时表供外部查询使用，但通常建议子查询尽量保持简单。对于复杂的逻辑，推荐使用视图（`VIEW`）来优化查询的结构。

**示例：使用子查询计算每个客户的总销售额及与平均销售额的差异**

```sql
SELECT *
FROM (
	SELECT
		client_id,
		name,
		(SELECT SUM(invoice_total)
		 FROM invoices
		 WHERE client_id = c.client_id) AS total_sales,
		(SELECT AVG(invoice_total)
		 FROM invoices) AS average_sales,
		(SELECT SUM(invoice_total)
		 FROM invoices
		 WHERE client_id = c.client_id) - (SELECT AVG(invoice_total)
                                            FROM invoices) AS difference
	FROM clients c
) AS sales_summary
WHERE total_sales IS NOT NULL;
```

#### 2.3.2 JOIN (表连接)

表连接 (`JOIN`) 是 SQL 中用于从多个表中合并数据的关键操作。根据不同的需求，连接方式可以是内连接、外连接、自连接等。

##### INNER JOIN (内连接)

`INNER JOIN` 是最常见的连接类型，它只返回两个表中满足连接条件的记录。当我们使用 `JOIN` 关键字时，默认是 `INNER JOIN`，即使省略 `INNER`，SQL 也会将其理解为 `INNER JOIN`。它用于从两个表中根据指定的条件匹配数据，并只返回两张表中符合条件的记录。

**示例**1：根据客户 ID 连接订单和客户表

```sql
SELECT order_id, first_name, last_name, orders.customer_id
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id;
```

在这个示例中，`orders` 表和 `customers` 表根据 `customer_id` 进行连接，并且返回匹配的记录。如果两个表中的 `customer_id` 不匹配，这些记录将不会出现在结果中。

##### 多条件连接

`JOIN` 后可以跟随多个条件，连接条件使用 `AND` 进行组合。

**示例**2：基于多个条件连接表

```sql
SELECT *
FROM order_items oi
JOIN order_item_notes oin
    ON oi.order_id = oin.order_id
    AND oi.product_id = oin.product_id;
```

##### 跨数据库连接

当需要连接不同数据库中的表时，可以通过在表名前加上数据库名称来指定。

**示例**3：跨数据库连接订单项和产品表

```sql
SELECT *
FROM order_items oi
JOIN sql_inventory.products p
    ON oi.product_id = p.product_id;
```

##### 自连接

自连接是指在同一个表中进行连接，通常用于表示表内的层级关系。

**示例**4：在员工表中进行自连接来查找每个员工的经理

```sql
SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
JOIN employees m
    ON e.reports_to = m.employee_id;
```

##### LEFT JOIN (左连接) 和 RIGHT JOIN (右连接)

`LEFT JOIN` 返回左表中的所有记录，即使右表中没有匹配的记录；`RIGHT JOIN` 则相反，返回右表中的所有记录，即使左表中没有匹配的记录。

**示例**5：左连接客户表和订单表，返回所有客户，即使他们没有订单

```sql
SELECT
    c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id;
```

##### 多表连接

多表连接涉及多个表的连接，通过多个 `JOIN` 语句实现，通常结合 `LEFT JOIN` 和 `INNER JOIN` 以适应具体业务需求。

**示例**6：连接订单、客户、货运公司和订单状态表

```sql
SELECT
    o.order_id,
    o.order_date,
    c.first_name AS customer,
    sh.name AS shipper,
    os.name AS status
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
LEFT JOIN shippers sh
    ON o.shipper_id = sh.shipper_id
JOIN order_statuses os
    ON o.status = os.order_status_id;
```

##### 自外连接

当使用自连接时，如果希望返回所有记录（包括没有匹配的记录），可以使用自外连接。

**示例**7：在员工表中进行自外连接以显示所有员工及其上级

```sql
SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
LEFT JOIN employees m
    ON e.reports_to = m.employee_id;
```

##### USING 关键字

当连接条件的字段名在两个表中相同时，可以使用 `USING` 关键字来简化 `ON` 子句。

**示例**8：使用 `USING` 关键字简化连接

```sql
SELECT
    o.order_id,
    c.first_name AS customer,
    sh.name AS shipper
FROM orders o
JOIN customers c
    USING (customer_id)
LEFT JOIN shippers sh
    USING (shipper_id);
```

##### CROSS JOIN (交叉连接)

`CROSS JOIN` 返回两个表之间的笛卡尔积，即每一行与另一表的每一行组合。

**示例**9：列出所有客户与产品的组合

```sql
SELECT
    c.first_name,
    p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY c.first_name;
```

##### NATURAL JOIN (自然连接)

`NATURAL JOIN` 是一种基于两个表中同名列自动进行连接的连接方式。系统会自动检测两个表中相同名称的列，并以这些列为基础连接表。

**示例 1：自然连接订单和客户表**

```sql
SELECT
    o.order_id,
    c.first_name
FROM orders o
NATURAL JOIN customers c;
```

在这个示例中，系统会自动根据 `orders` 和 `customers` 表中相同的列（例如 `customer_id`）进行连接，不需要明确指出连接条件。

**注意**：`NATURAL JOIN` 具有一定风险，因为系统自动检测的列名可能不符合预期，导致查询结果错误。因此，通常不建议使用这种连接方式，建议明确使用 `ON` 或 `USING` 指定连接条件。

---

##### 隐式交叉连接 (隐式 CROSS JOIN)

隐式交叉连接是一种较旧的 SQL 语法，它通过在 `FROM` 子句中同时列出多个表来实现连接效果，而不使用显式的 `JOIN` 关键字。它的作用与 `CROSS JOIN` 相同，生成两个表的笛卡尔积，即每一行与另一表的每一行组合。

**示例**2：隐式交叉连接列出所有货运公司与产品的组合

```sql
SELECT
    sh.name AS shipper,
    p.name AS product
FROM shippers sh, products p
ORDER BY sh.name;
```

这个查询会返回 `shippers` 和 `products` 表中每个货运公司与每个产品的组合。

**隐式连接的注意事项**：

- 这种隐式连接方式虽然在 MySQL 等数据库中依然有效，但不建议使用，特别是在复杂查询中，因为容易导致大量不必要的数据组合。
- 隐式连接和显式 `CROSS JOIN` 的效果是相同的，但显式语法更清晰、易读，能够避免潜在的错误。

#### 2.3.3 UNION (行连接)

`UNION` 是用于将两个或多个 `SELECT` 查询的结果组合在一起的操作符。通过 `UNION`，可以将不同表或相同表的查询结果纵向连接，合并在一起。默认情况下，`UNION` 会自动去重，如果不希望去重，可以使用 `UNION ALL` 来保留重复的记录。

**注意**：

- 两个 `SELECT` 查询的列数和数据类型必须相同。
- 查询结果会依次按照查询顺序合并。

**示例：**

```sql
USE sql_store;

SELECT
    order_id,
    order_date,
    'Active' AS status
FROM orders
WHERE order_date >= '2019-01-01'
UNION
SELECT
    order_id,
    order_date,
    'Archived' AS status
FROM orders
WHERE order_date < '2019-01-01';
```

在这个例子中，我们从 `orders` 表中提取数据，将 2019 年 1 月 1 日及以后的订单标记为 "Active"，之前的订单标记为 "Archived"。`UNION` 将两个查询的结果合并，并且去除了重复的订单。

**`UNION ALL`：不去重的示例**

```sql
USE sql_store;

SELECT
    customer_id,
    first_name,
    last_name
FROM customers
WHERE state = 'CA'
UNION ALL
SELECT
    customer_id,
    first_name,
    last_name
FROM customers
WHERE state = 'CA';
```

在这个示例中，`UNION ALL` 将两个相同的查询结果连接，由于查询条件是完全相同的，因此 `UNION ALL` 会返回重复的记录，而 `UNION` 会去掉这些重复的记录。

### 2.4 数据操作 (DML - Data Manipulation)

#### 2.4.1 INSERT (插入数据)

`INSERT` 语句用于向数据库表中插入新的数据行。以下是几种常见的 `INSERT` 使用方式，结合电商相关的案例。

##### 1. 插入单行

**方式** 1：直接插入所有列

在插入数据时，如果你想为表中的所有列提供值，可以使用如下的方式。如果某些列允许 `NULL` 或有默认值，可以用 `NULL` 或 `DEFAULT` 替代。

```sql
INSERT INTO customers
VALUES (
    DEFAULT, -- customer_id (自增)
    'John', -- first_name
    'Smith', -- last_name
    '1999-01-01', -- birth_date
    NULL, -- phone (用NULL表示没有电话号码)
    '123 Main St', -- address
    'New York', -- city
    'NY', -- state
    DEFAULT -- points (用默认值 0)
);
```

此方法中，所有列必须提供一个值，即使列允许为 `NULL` 或有默认值。

**方式** 2：按需插入特定列

如果不需要为表的所有列提供值，你可以指定列名，并插入值。只需插入必要的列。

```sql
INSERT INTO customers (
    first_name,
    last_name,
    birth_date,
    address,
    city,
    state
)
VALUES (
    'John',
    'Smith',
    '1999-01-01',
    '123 Main St',
    'New York',
    'NY'
);
```

在这种情况下，你只需为特定的列提供值，其余的列将使用默认值或允许 `NULL` 的列将为空。

##### 2. 插入多行

你可以一次插入多行数据，用逗号分隔不同的行。以下示例中，向 `products` 表中添加多个产品记录。

```sql
INSERT INTO products (name, quantity_in_stock, unit_price)
VALUES
    ('Product1', 10, 1.95),
    ('Product2', 11, 2.50),
    ('Product3', 15, 3.75);
```

##### 3. 插入有从属结构关系的行

有时插入数据需要涉及多张表。例如，在电商系统中，插入订单后，还需要插入订单的详细项目。在这种情况下，我们可以使用 `last_insert_id()` 获取上一条插入记录的自增 ID，用以关联订单和订单项表。

```sql
-- 插入订单信息
INSERT INTO orders (customer_id, order_date, status)
VALUES (1, '2023-08-15', 1);

-- 插入订单项目（使用上一步插入的订单ID）
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES
    (LAST_INSERT_ID(), 1, 2, 29.99),
    (LAST_INSERT_ID(), 2, 1, 49.99);
```

##### 4. 从一个表插入到另一个表

你还可以将现有表中的数据插入到另一个表中。比如，将订单信息存档到 `orders_archived` 表中。

```sql
INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date < '2023-01-01';
```

这个查询将把所有在 2023 年 1 月 1 日之前的订单记录从 `orders` 表中复制到 `orders_archived` 表中。

#### 2.4.2 UPDATE (更新数据)

`UPDATE` 语句用于修改表中的现有数据。以下是几种常见的 `UPDATE` 使用方式，结合电商相关的案例。

##### 1. 更新单行

可以通过 `UPDATE` 语句来修改特定记录的值。下面的示例修改了发票 ID 为 1 的记录的支付总额和支付日期。

```sql
UPDATE invoices
SET
    payment_total = 10,
    payment_date = '2019-03-01'
WHERE invoice_id = 1;
```

##### 2. 更新多行

如果想一次性更新多条记录，可以通过 `WHERE` 子句来指定需要修改的条件。在 MySQLWorkbench 等工具中，修改多行时，可能需要调整设置取消“安全更新”（`Safe Updates`）模式，以允许批量更新操作。

```sql
UPDATE invoices
SET
    payment_total = invoice_total * 0.5,
    payment_date = due_date
WHERE client_id IN (3, 4);
```

##### 3. 在更新中使用查询语句

在某些情况下，你可以使用嵌套的查询语句来确定要修改的行。这样可以根据其他表的内容来更新数据。

**案例** 1：修改单行

使用子查询获取某个客户的 `client_id`，并根据该客户的 ID 更新相应的发票。

```sql
UPDATE invoices
SET
    payment_total = invoice_total * 0.5,
    payment_date = due_date
WHERE client_id = (
    SELECT client_id
    FROM clients
    WHERE name = 'Mywork'
);
```

**案例** 2：修改多行

根据多个客户所在的州来更新这些客户的发票记录。

```sql
UPDATE invoices
SET
    payment_total = invoice_total * 0.5,
    payment_date = due_date
WHERE client_id IN (
    SELECT client_id
    FROM clients
    WHERE state IN ('CA', 'NY')
);
```

**案例** 3：在更新前检查符合条件的数据

在执行更新操作之前，可以通过 `SELECT` 语句预览需要修改的数据，确保结果符合预期。

```sql
UPDATE invoices
SET
    payment_total = invoice_total * 0.5,
    payment_date = due_date
-- SELECT *
-- FROM invoices
WHERE payment_date IS NULL;
```

**案例** 4：批量更新多个记录

你可以通过嵌套查询来筛选出符合条件的客户，并更新这些客户的订单记录。例如，给积分超过 3000 的客户添加备注。

```sql
UPDATE orders
SET comments = 'Gold customer'
WHERE customer_id IN (
    SELECT customer_id
    FROM customers
    WHERE points > 3000
);
```

#### 2.4.3 DELETE (删除数据)

`DELETE`用于从表中删除指定的记录。通常，电商系统中不使用直接删除，而是使用**逻辑删除**，即标记记录为已删除而不是物理删除。

**示例**：

```sql
DELETE FROM orders
WHERE order_id = 456;
```

删除订单 ID 为 456 的订单记录，但在实际电商系统中，一般会使用逻辑删除而非物理删除。

### 2.5 表管理 (DDL - Data Definition Language)

`DDL` 主要用于定义和管理数据库中的表结构。常见的操作包括创建表、修改表结构以及删除表。

#### 2.5.1 CREATE (创建表单)

`CREATE TABLE` 用于在数据库中创建新表。在电商系统中，我们可能需要创建新的订单表、客户表或产品表等。

**示例：创建一个订单表**

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL
);
```

这将创建一个名为 `orders` 的表，包含订单 ID、客户 ID、订单日期和状态等信息。

**创建表并从现有表复制全部数据**
如果需要从现有的表中创建一份表结构完全相同的表并复制其数据，可以使用 `CREATE TABLE AS` 语法。

```sql
CREATE TABLE orders_archived AS
SELECT * FROM orders;
```

该语句将创建一个 `orders_archived` 表，并复制 `orders` 表中的所有数据。

**按需选择字段复制到新表**
有时我们不需要复制全部数据，可以选择特定字段并创建新表。

```sql
CREATE TABLE invoices_archived AS
SELECT
    i.invoice_id,
    i.number,
    c.name AS client,
    i.invoice_total,
    i.payment_total,
    i.invoice_date,
    i.payment_date,
    i.due_date
FROM invoices i
JOIN clients c
    USING (client_id)
WHERE i.payment_date IS NOT NULL;
```

这个示例创建了一个 `invoices_archived` 表，并仅复制已支付的发票记录。

#### 2.5.2 ALTER (修改表单)

`ALTER TABLE` 用于修改已存在的表结构。例如，在电商业务中，随着需求变化，可能需要向表中添加新的列或修改现有列。

**示例：添加新列**

```sql
ALTER TABLE customers
ADD email VARCHAR(255) NOT NULL;
```

这会在 `customers` 表中新增一个 `email` 列。

**修改列的数据类型**

```sql
ALTER TABLE orders
MODIFY COLUMN status VARCHAR(100);
```

此语句将 `orders` 表中的 `status` 列的数据类型修改为 `VARCHAR(100)`。

**删除列**

```sql
ALTER TABLE customers
DROP COLUMN email;
```

这会将 `customers` 表中的 `email` 列删除。

#### 2.5.3 DROP (删除表单)

`DROP TABLE` 用于永久删除表及其数据，是一个**不可逆的操作**。执行此操作会直接从数据库中移除表结构和表中所有记录，无法通过简单的方式恢复。因此，在执行 `DROP TABLE` 时需要格外谨慎，尤其在生产环境中使用时，要确保备份数据，以避免重要信息的丢失。

**示例：删除表单**

```sql
DROP TABLE orders_archived;
```

此语句会将 `orders_archived` 表从数据库中删除。

**为了安全起见，可以使用 `IF EXISTS` 来避免删除不存在的表引发错误**：

```sql
DROP TABLE IF EXISTS orders_archived;
```

这会在确认表存在的情况下执行删除操作。

**删除表的注意事项**：

1. **不可逆性**：删除表后，所有数据和表结构将永久消失，不可恢复。建议在执行此操作前先做好备份。
2. **业务影响**：表的删除可能会影响系统中依赖该表的业务逻辑或查询操作，务必确保此操作不会中断关键功能。

3. **测试环境中操作**：在执行 `DROP TABLE` 前，建议先在测试环境中模拟操作，确保其不会造成意外的后果。

4. **日志记录**：在实际环境中删除表时，务必记录相关操作，以便将来审查操作历史。

因此，删除表操作需要特别谨慎，并应遵循数据库管理的最佳实践，以确保数据安全和系统稳定。

## 3.进阶 SQL 操作(Advanced SQL Operations)

### 3.1 聚合函数(Aggregate Functions)

聚合函数用于对一组数据执行计算，并返回一个单一值。常用的聚合函数有：`MAX()`、`MIN()`、`AVG()`、`SUM()` 和 `COUNT()`。

#### 1. MAX() 和 MIN()

`MAX()` 返回指定列中最大的值，`MIN()` 返回最小值。适合用来获取订单金额的最大或最小值。

**示例：获取最高和最低订单总金额**

```sql
SELECT
	MAX(order_total) AS highest_order,
	MIN(order_total) AS lowest_order
FROM orders
WHERE order_date > '2023-01-01';
```

#### 2. AVG()

`AVG()` 计算指定列的平均值。常用于计算某段时间内的平均订单金额。

**示例：获取平均订单总金额**

```sql
SELECT
	AVG(order_total) AS average_order
FROM orders
WHERE order_date > '2023-01-01';
```

#### 3. SUM()

`SUM()` 用于计算指定列的总和。常用于计算所有订单的总金额或销量的汇总。

**示例：获取订单总金额和总销售量**

```sql
SELECT
	SUM(order_total) AS total_sales,
	SUM(quantity) AS total_quantity
FROM order_items
WHERE order_date > '2023-01-01';
```

#### 4. COUNT()

`COUNT()` 用于统计记录的数量，`COUNT(*)` 计算总行数，`COUNT(column_name)` 则只统计该列不为 NULL 的记录数。如果想统计不重复的值，可以使用 `COUNT(DISTINCT)`。

**示例：获取订单数量和付款数量**

```sql
SELECT
	COUNT(order_id) AS total_orders,
	COUNT(payment_date) AS total_payments,
	COUNT(DISTINCT customer_id) AS unique_customers
FROM orders
WHERE order_date > '2023-01-01';
```

#### 5. 综合使用

你可以在同一个查询中使用多个聚合函数，并通过 `AS` 为结果起别名，方便阅读。

**示例：获取多个聚合结果**

```sql
SELECT
	MAX(order_total) AS max_order,
	MIN(order_total) AS min_order,
	AVG(order_total) AS avg_order,
	SUM(order_total) AS total_sales,
	COUNT(order_id) AS total_orders,
	COUNT(DISTINCT customer_id) AS total_customers
FROM orders
WHERE order_date > '2023-01-01';
```

这些聚合函数能帮助分析电商业务中的订单数据、客户购买习惯、销售趋势等。

### 3.2 分组与统计(GROUP BY and Aggregation)

分组与统计常用于将数据根据特定规则进行分组，进而计算每组的统计信息。主要通过 `GROUP BY` 实现分组，通过 `HAVING` 和 `WITH ROLLUP` 等进一步进行条件过滤或汇总分析。

#### 1. GROUP BY

`GROUP BY` 用于根据一个或多个列对结果集进行分组，然后对每组数据执行聚合操作。它通常与聚合函数（如 `SUM()`、`COUNT()` 等）一起使用。

**示例 1：按客户分组，统计每个客户的总销售额**

```sql
SELECT
	client_id,
    SUM(invoice_total) AS total_sales
FROM invoices
GROUP BY client_id
ORDER BY total_sales DESC;
```

**示例 2：按州和城市分组，统计每个地区的总销售额**

```sql
SELECT
	state,
    city,
    SUM(invoice_total) AS total_sales
FROM invoices i
JOIN clients c USING (client_id)
GROUP BY state, city;
```

**示例 3：按日期和付款方式分组，统计每天每种付款方式的总金额**

```sql
SELECT
	date,
    pm.name AS payment_method,
    SUM(amount) AS total_amount
FROM payments p
JOIN payment_methods pm
	ON p.payment_method = pm.payment_method_id
GROUP BY date, payment_method
ORDER BY date;
```

#### 2. HAVING

`HAVING` 用于在分组之后对分组结果进行过滤，它通常配合 `GROUP BY` 使用，因为 `WHERE` 不能用于聚合后的结果。

**示例 1：只返回总销售额大于 500 的客户**

```sql
SELECT
	client_id,
    SUM(invoice_total) AS total_sales,
    COUNT(*) AS number_of_invoices
FROM invoices
GROUP BY client_id
HAVING total_sales > 500;
```

**示例 2：按客户分组，筛选出订单数量大于 5 且总销售额大于 500 的客户**

```sql
SELECT
	client_id,
    SUM(invoice_total) AS total_sales,
    COUNT(*) AS number_of_invoices
FROM invoices
GROUP BY client_id
HAVING total_sales > 500 AND number_of_invoices > 5;
```

**示例 3：结合 `HAVING` 和 `JOIN` 筛选出特定条件的客户**

```sql
SELECT
	c.customer_id,
    c.first_name,
    c.last_name,
    SUM(oi.quantity * oi.unit_price) AS total_sales
FROM customers c
JOIN orders o USING (customer_id)
JOIN order_items oi USING (order_id)
WHERE state = 'VA'
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING total_sales > 100;
```

#### 3. WITH ROLLUP

`WITH ROLLUP` 是在 `GROUP BY` 中使用的一个扩展功能，用于在分组结果后生成额外的小计和总计行，帮助更全面地查看每个分组的汇总信息以及所有分组的总和。

**示例 1：按客户分组，并在结果中生成每个客户的总和及所有客户的总和**

```sql
SELECT
	client_id,
    SUM(invoice_total) AS total_sales
FROM invoices
GROUP BY client_id WITH ROLLUP;
```

**示例 2：按州和城市分组，生成每个州、城市及所有地区的总销售额**

```sql
SELECT
    state, city, SUM(invoice_total) AS total_sales
FROM invoices i
JOIN clients c USING (client_id)
GROUP BY state, city WITH ROLLUP;
```

`GROUP BY`、`HAVING` 和 `WITH ROLLUP` 的结合可以灵活地对数据进行分组和筛选，帮助用户更好地分析电商平台上的销售数据及客户行为。

### 3.3 高级条件 (Advanced Conditions)

高级条件语句允许我们在查询中使用更复杂的逻辑来筛选数据。常见的高级条件包括 `ALL`、`ANY` 和 `EXISTS`，它们为数据库查询提供了强大的功能。以下是常见高级条件的用法和示例。

#### 1. ALL

`ALL` 通常与运算符（如 `>`、`<` 等）一起使用，用于将一个值与子查询返回的所有值进行比较。

**示例：使用 `ALL` 与 `>` 比较**
以下两个案例中，`ALL` 和 `MAX()` 实际上实现了相同的功能，即返回发票总金额大于某客户最高发票金额的所有发票：

**案例 1：使用 `MAX()`**

```sql
SELECT *
FROM invoices
WHERE invoice_total > (
	SELECT MAX(invoice_total)
    FROM invoices
    WHERE client_id = 3
);
```

**案例 2：使用 `ALL`**

```sql
SELECT *
FROM invoices
WHERE invoice_total > ALL(
	SELECT invoice_total
    FROM invoices
    WHERE client_id = 3
);
```

#### 2. ANY

`ANY` 通常与 `=`、`>` 等运算符一起使用，只要满足子查询中的任意条件，查询就会返回结果。`ANY` 和 `IN` 在某些情况下效果相似。

**示例：使用 `ANY` 与 `IN` 比较**
以下两个案例展示了 `ANY` 和 `IN` 的相似性，均查询出拥有超过两个发票的客户：

**案例 1：使用 `IN`**

```sql
SELECT *
FROM clients
WHERE client_id IN (
	SELECT client_id
    FROM invoices
    GROUP BY client_id
    HAVING COUNT(*) > 2
);
```

**案例 2：使用 `ANY`**

```sql
SELECT *
FROM clients
WHERE client_id = ANY (
	SELECT client_id
    FROM invoices
    GROUP BY client_id
    HAVING COUNT(*) > 2
);
```

#### 3. EXISTS

`EXISTS` 用于检查子查询中是否返回了任何记录。与 `IN` 不同，`EXISTS` 不会返回完整的表，而是直接返回是否有符合条件的记录，因此在某些情况下效率更高。`EXISTS` 通常与 `WHERE` 子句一起使用，但也可以用作其他查询结构的条件判断。

**示例：基本用法**
以下示例使用 `EXISTS` 来检查某个客户是否存在至少一条发票记录：

**案例 1：使用 `EXISTS`**

```sql
SELECT *
FROM clients c
WHERE EXISTS (
	SELECT client_id
    FROM invoices
    WHERE client_id = c.client_id
);
```

该查询返回所有至少有一张发票的客户。如果客户没有发票记录，`EXISTS` 子查询将返回 `FALSE`，客户记录将不会出现在结果集中。

**示例：使用 `EXISTS` 与 `NOT EXISTS`**
`NOT EXISTS` 用于查询不符合某个条件的记录。例如，查询所有没有下过订单的产品：

**案例 2：使用 `NOT EXISTS`**

```sql
SELECT *
FROM products p
WHERE NOT EXISTS (
	SELECT product_id
	FROM order_items
	WHERE product_id = p.product_id
);
```

该查询返回所有没有出现在 `order_items` 表中的产品，即那些从未被购买的产品。

**示例：EXISTS 在复杂查询中的使用**
`EXISTS` 可以放在查询的句首，以作为是否执行查询的条件。这种用法通常用于控制流结构中，比如在存储过程或函数中使用：

**案例 3：在控制流中使用 `EXISTS`**

```sql
IF EXISTS (
    SELECT *
    FROM orders
    WHERE order_date > '2023-01-01'
)
BEGIN
    PRINT 'There are recent orders';
END
ELSE
BEGIN
    PRINT 'No recent orders';
END
```

在此例中，`EXISTS` 通过检查是否存在 2023 年后的订单来决定是否执行某个逻辑分支。

**示例：带有相关子查询的 `EXISTS`**
当 `EXISTS` 子查询依赖于外部查询中的某些列时，称之为相关子查询。这种结构在特定情况下非常强大，例如，根据客户的发票记录进行筛选：

**案例 4：使用相关子查询**

```sql
SELECT c.client_id, c.name
FROM clients c
WHERE EXISTS (
    SELECT 1
    FROM invoices i
    WHERE i.client_id = c.client_id
    AND i.invoice_total > 1000
);
```

该查询返回所有拥有总金额超过 1000 的发票的客户。此处 `EXISTS` 的子查询使用了外部查询中的 `client_id`，因此被称为相关子查询。

通过使用 `EXISTS`，可以实现比 `IN` 更高效的查询，尤其是在处理大数据集时，因其只检查记录是否存在，而不要求返回完整的数据集。

## 4.函数与表达式

### 4.1 数值函数 (Numeric Functions)

数值函数用于在 SQL 中处理数值数据。它们能够执行各种数学运算，如取余数、四舍五入、截断小数等，广泛用于电商系统的价格、库存等数值数据的处理。以下是常见的数值函数及其使用方法。

#### 1. MOD (取余函数)

`MOD(a, b)` 函数返回 a 除以 b 的余数。这个函数在需要判断某个字段的奇偶性时特别有用。

**示例：获取订单 ID 为偶数的订单**

```sql
SELECT *
FROM orders
WHERE MOD(order_id, 2) = 0;
```

此查询将返回订单 ID 为偶数的所有订单。

**示例：获取产品库存为奇数的商品**

```sql
SELECT *
FROM products
WHERE MOD(quantity_in_stock, 2) = 1;
```

此查询将返回库存为奇数的所有产品。

#### 2. ROUND (四舍五入)

`ROUND(number, decimal_places)` 函数对数字进行四舍五入处理。`number` 是需要处理的数字，`decimal_places` 是保留的小数位数。

**示例：四舍五入处理价格数据**

```sql
SELECT product_id, name, ROUND(unit_price, 2) AS rounded_price
FROM products;
```

该查询将返回每个商品的价格，并将其四舍五入到小数点后两位。

#### 3. TRUNCATE (截断小数)

`TRUNCATE(number, decimal_places)` 函数截断数字的小数部分，不进行四舍五入。`number` 是需要处理的数字，`decimal_places` 是要保留的小数位数。

**示例：截断价格的小数**

```sql
SELECT product_id, name, TRUNCATE(unit_price, 1) AS truncated_price
FROM products;
```

该查询将返回每个商品的价格，并将其截断到小数点后 1 位。

#### 4. CEILING (向上取整)

`CEILING(number)` 函数返回大于或等于该数字的最小整数。

**示例：计算折扣后的价格并向上取整**

```sql
SELECT product_id, name, CEILING(unit_price * 0.9) AS discounted_price
FROM products;
```

该查询计算每个商品打 9 折后的价格，并返回向上取整的结果。

#### 5. FLOOR (向下取整)

`FLOOR(number)` 函数返回小于或等于该数字的最大整数。

**示例：计算折扣后的价格并向下取整**

```sql
SELECT product_id, name, FLOOR(unit_price * 0.9) AS discounted_price
FROM products;
```

此查询返回打 9 折后的商品价格，并将结果向下取整。

这些数值函数可以大大简化电商平台上的价格计算、库存处理等常见的数值操作。在实际业务中，合理使用这些函数能够提高数据处理的效率和准确性。

### 4.2 字符串函数 (String Functions)

字符串函数用于处理和操作文本数据。在电商应用中，字符串函数常用于处理商品名称、客户信息等字段。以下是一些常用的字符串函数及其用法示例。

#### 1. LOWER (转换为小写)

`LOWER` 函数将字符串中的所有字符转换为小写。

**示例：**

```sql
SELECT LOWER('Sky') AS lower_case_string;
-- 返回: sky
```

#### 2. LTRIM (左侧修整)

`LTRIM` 函数移除字符串左侧的空白字符或自定义字符。

**示例：**

```sql
SELECT LTRIM('     Sky') AS trimmed_string;
-- 返回: Sky
```

#### 3. RTRIM (右侧修整)

`RTRIM` 函数移除字符串右侧的空白字符或自定义字符，与 `LTRIM` 类似。

**示例：**

```sql
SELECT RTRIM('Sky      ') AS trimmed_string;
-- 返回: Sky
```

#### 4. LEFT (从左截取)

`LEFT` 函数从字符串的左侧截取指定长度的字符。

**示例：**

```sql
SELECT LEFT('Kindergarten', 4) AS left_part;
-- 返回: Kind
```

#### 5. RIGHT (从右截取)

`RIGHT` 函数从字符串的右侧截取指定长度的字符，与 `LEFT` 类似。

**示例：**

```sql
SELECT RIGHT('Kindergarten', 6) AS right_part;
-- 返回: garten
```

#### 6. SUBSTRING (子字符串)

`SUBSTRING` 函数截取字符串中的部分字符，第二个参数为起始位置，第三个参数为截取长度。

**示例：**

```sql
SELECT SUBSTRING('Kindergarten', 3, 5) AS sub_string;
-- 返回: nderg
```

#### 7. LOCATE (定位)

`LOCATE` 函数返回子字符串首次出现的位置。第一个参数是要查找的子字符串，第二个参数是目标字符串。

**示例：**

```sql
SELECT LOCATE('garten', 'Kindergarten') AS position;
-- 返回: 7
```

#### 8. REPLACE (替换)

`REPLACE` 函数将字符串中的某些部分替换为指定的字符串。

**示例：**

```sql
SELECT REPLACE('Kindergarten', 'garten', 'garden') AS replaced_string;
-- 返回: Kindergarden
```

#### 9. CONCAT (字符串连接)

`CONCAT` 函数用于将多个字符串连接为一个字符串。

**示例：**

```sql
SELECT CONCAT('first', ' ', 'last') AS full_name;
-- 返回: first last
```

**案例：**

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customers;
```

#### 10. GROUP_CONCAT (分组拼接)

`GROUP_CONCAT` 函数将多个行的值拼接成一个字符串，常用于在分组查询中合并文本。

**示例：**

```sql
SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    GROUP_CONCAT(DISTINCT product ORDER BY product ASC SEPARATOR ', ') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;
```

此查询将按销售日期分组，统计销售产品数量，并将产品名称拼接在一起。

#### 11. 综合案例

将客户的名字格式化为首字母大写，其他字母小写：

```sql
SELECT
    user_id,
    CONCAT(
        UPPER(LEFT(name, 1)),
        LOWER(SUBSTRING(name, 2))
    ) AS formatted_name
FROM users
ORDER BY user_id;
```

这些字符串函数在处理文本数据时非常有用，可以帮助我们有效地操作客户信息、商品名称等数据。

### 4.3 日期与时间函数 (Date and Time Functions)

日期和时间函数在处理电商数据时非常有用，特别是在分析订单、库存更新和其他时间敏感的数据时。以下是一些常用的日期和时间函数及其应用示例。

#### 1. NOW

`NOW` 函数返回当前的日期和时间。`CURDATE` 返回当前日期，而不包含时间部分，`CURTIME` 返回当前时间，不包含日期部分。

**示例：**

```sql
SELECT NOW() AS current_datetime, CURDATE() AS current_date, CURTIME() AS current_time;
```

#### 2. YEAR

`YEAR` 函数用于提取日期中的年份。

**示例：**

```sql
SELECT YEAR(NOW()) AS current_year;
```

#### 3. MONTH

`MONTH` 函数用于提取日期中的月份。

**示例：**

```sql
SELECT MONTH(NOW()) AS current_month;
```

#### 4. DAY

`DAY` 函数用于提取日期中的天数部分。

**示例：**

```sql
SELECT DAY(NOW()) AS current_day;
```

#### 5. HOUR

`HOUR` 函数用于提取时间中的小时部分。

**示例：**

```sql
SELECT HOUR(NOW()) AS current_hour;
```

#### 6. MINUTE

`MINUTE` 函数用于提取时间中的分钟部分。

**示例：**

```sql
SELECT MINUTE(NOW()) AS current_minute;
```

#### 7. SECOND

`SECOND` 函数用于提取时间中的秒数部分。

**示例：**

```sql
SELECT SECOND(NOW()) AS current_second;
```

#### 8. DAYNAME

`DAYNAME` 函数返回日期对应的星期名称。

**示例：**

```sql
SELECT DAYNAME(NOW()) AS day_of_week;
```

#### 9. MONTHNAME

`MONTHNAME` 函数返回日期对应的月份名称。

**示例：**

```sql
SELECT MONTHNAME(NOW()) AS month_name;
```

#### 10. EXTRACT

`EXTRACT` 函数用于从日期或时间中提取特定部分，如年、月、日等。

**示例：**

```sql
SELECT EXTRACT(DAY FROM NOW()) AS day_of_month;
```

#### 11. DATE_FORMAT

`DATE_FORMAT` 函数用于格式化日期和时间，根据指定的格式字符串返回结果。常用格式包括：`%Y`（四位数年份）、`%y`（两位数年份）、`%m`（数字月份）、`%M`（月份名称）、`%d`（天数）。

**示例：**

```sql
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d') AS formatted_date;
```

**案例：**

```sql
SELECT
    DATE_FORMAT(trans_date ,'%Y-%m') AS month,
    country,
    COUNT(id) AS trans_count,
    SUM(IF(state='approved',1,0)) AS approved_count,
    SUM(amount) AS trans_total_amount,
    SUM(IF(state='approved',amount,0)) AS approved_total_amount
FROM Transactions
GROUP BY month, country;
```

#### 12. DATE_ADD / DATE_SUB

`DATE_ADD` 和 `DATE_SUB` 函数用于对日期进行加减操作，通常配合 `INTERVAL` 使用。

`INTERVAL` 的作用是定义要增加或减少的时间间隔。它允许我们指定单位，如年、月、天、小时、分钟等，以便灵活调整日期和时间。`INTERVAL` 后面跟随一个时间量和单位，比如 `1 YEAR` 表示一年，`10 DAY` 表示 10 天。该功能使日期操作更加直观易懂。

**DATE_ADD 示例：** 增加一年

```sql
SELECT DATE_ADD(NOW(), INTERVAL 1 YEAR) AS next_year_date;
```

此语句返回当前日期加上一年的日期。

**DATE_SUB 示例：** 减少一年

```sql
SELECT DATE_SUB(NOW(), INTERVAL 1 YEAR) AS last_year_date;
```

此语句返回当前日期减去一年的日期。

**常见 INTERVAL 单位：**

- YEAR：年
- MONTH：月
- DAY：日
- HOUR：小时
- MINUTE：分钟
- SECOND：秒

**其他使用示例：**

- 增加 6 个月：

```sql
SELECT DATE_ADD(NOW(), INTERVAL 6 MONTH) AS next_half_year_date;
```

- 减少 10 天：

```sql
SELECT DATE_SUB(NOW(), INTERVAL 10 DAY) AS last_10_days;
```

#### 13. DATEDIFF

`DATEDIFF` 函数用于计算两个日期之间的天数差。即使包含时间部分，它也只返回天数差。

**示例：**

```sql
SELECT DATEDIFF('2024-08-19', '2023-08-19') AS days_difference;
```

#### 14. TIME_TO_SEC

`TIME_TO_SEC` 函数将时间转换为自午夜起的秒数。可以用来计算时间差。

**示例：**

```sql
SELECT TIME_TO_SEC('09:00:00') AS seconds_from_midnight;
```

**计算时间差：**

```sql
SELECT TIME_TO_SEC('09:00:00') - TIME_TO_SEC('09:02:00') AS seconds_difference;
```

### 4.4 判断表达式

在 SQL 中，判断表达式能够帮助处理不同的条件和值。以下是几种常见的判断表达式，用于电商相关操作中，特别是当我们需要处理空值或者根据条件分类时。

#### 1. IFNULL——替换空值

`IFNULL` 用于判断某个值是否为空，如果为空则用另一个指定的值替代。

**语法：**

- 第一个参数是被判断是否为空的字段或表达式。
- 第二个参数是用于替代空值的内容。

**示例：** 这里我们查询订单的发货人，如果没有发货人，则显示为 "Not assigned"。

```sql
USE sql_store;

SELECT
	order_id,
    IFNULL(shipper_id,'Not assigned') AS shipper
FROM orders;
```

#### 2. COALESCE——替换空值

`COALESCE` 与 `IFNULL` 类似，但它可以接受多个参数，并返回第一个非空值。如果所有值都为空，返回最后一个默认值。

**语法：**

- 多个参数中，返回第一个非空的值。

**示例：** 如果 `shipper_id` 和 `comments` 都为空，则返回 "Not assigned"。

```sql
USE sql_store;

SELECT
	order_id,
    COALESCE(shipper_id, comments, 'Not assigned') AS shipper
FROM orders;
```

#### 3. IF——条件表达式

`IF` 函数用于执行简单的条件判断。它有三个参数：

- 第一个参数是判断条件。
- 第二个参数是当条件成立时返回的值。
- 第三个参数是当条件不成立时返回的值。

**示例：** 如果订单日期为今年的订单，则显示为 "Active"，否则为 "Archived"。

```sql
USE sql_store;

SELECT
	order_id,
    order_date,
    IF(
		YEAR(order_date) = YEAR(NOW()),
        'Active',
        'Archived') AS category
FROM orders;
```

#### 4. CASE——复杂条件表达式

`CASE` 表达式用于处理多个条件。它类似于编程语言中的 `switch` 语句，能够根据不同的条件返回不同的值。可以处理多个 `WHEN` 条件，配合 `THEN` 返回值，`ELSE` 则用于处理所有条件不满足的情况，最后以 `END` 结束。

**示例：** 根据订单日期的年份，将订单分类为 "Active"、"Last Year"、"Archived" 或 "Future"。

```sql
USE sql_store;

SELECT
	order_id,
    CASE
		WHEN YEAR(order_date) = YEAR(NOW()) THEN 'Active'
        WHEN YEAR(order_date) = YEAR(NOW()) - 1 THEN 'Last Year'
        WHEN YEAR(order_date) < YEAR(NOW()) - 1 THEN 'Archived'
	ELSE 'Future'
	END AS category
FROM orders;
```

这些判断表达式在处理电商系统中的订单、客户、产品等数据时非常有用，尤其是在需要根据条件筛选数据或处理空值时。

## 5. 视图 (Views)

### 5.1 CREATE VIEW——创建视图

`CREATE VIEW` 用于创建一个虚拟表，该虚拟表是基于其他表的查询结果。视图不存储数据，它动态地从底层表中获取数据。

```sql
CREATE VIEW sales_by_client AS
SELECT
    c.client_id,
    c.name,
    SUM(invoice_total) AS total_sales
FROM clients c
JOIN invoices i USING (client_id)
GROUP BY i.client_id;
```

**解释**：此视图基于 `clients` 和 `invoices` 两个表，展示每个客户的总销售额。视图可以像表一样使用，比如执行 `SELECT` 查询、过滤等操作。

```sql
SELECT *
FROM sales_by_client
WHERE total_sales > 500
ORDER BY total_sales DESC;
```

### 5.2 DROP/REPLACE VIEW——删除/替换视图

- **删除视图**：使用 `DROP VIEW` 语句删除视图。

  ```sql
  DROP VIEW sales_by_client;
  ```

- **替换视图**：使用 `CREATE OR REPLACE VIEW` 来更新现有视图的定义。
  ```sql
  CREATE OR REPLACE VIEW client_balance AS
  SELECT
      c.client_id,
      c.name,
      SUM(invoice_total - payment_total) AS balance
  FROM clients c
  JOIN invoices i USING (client_id)
  GROUP BY i.client_id;
  ```

### 5.3 可更新视图

视图在某些情况下是**可更新的**，即你可以在视图上执行 `UPDATE`、`DELETE` 或 `INSERT` 操作。但视图必须满足一定条件，如不包含以下内容：

- 聚合函数（如 `SUM`, `COUNT`）
- `DISTINCT`
- `GROUP BY` 或 `HAVING`
- `UNION`
- 复杂的 `JOIN`

**可更新视图示例**：

```sql
CREATE VIEW client_orders AS
SELECT
    order_id,
    client_id,
    order_total
FROM orders;
```

此视图允许在其上进行更新操作：

```sql
UPDATE client_orders
SET order_total = order_total + 100
WHERE order_id = 1;
```

这条语句将更新 `orders` 表中的 `order_total` 字段，因为 `client_orders` 是直接从 `orders` 表派生出来的。

**不可更新视图示例**：

```sql
CREATE VIEW sales_summary AS
SELECT
    client_id,
    SUM(order_total) AS total_sales
FROM orders
GROUP BY client_id;
```

由于这个视图包含 `SUM` 聚合函数和 `GROUP BY`，因此无法直接对其进行更新操作。

### 5.4 WITH CHECK OPTION——视图数据约束

在创建视图时，可以使用 `WITH CHECK OPTION` 来确保通过视图进行的更新不会使数据违反视图的定义。此选项防止某些更新操作导致数据“消失”出视图的范围。

```sql
CREATE OR REPLACE VIEW invoices_with_balance AS
SELECT
    invoice_id,
    client_id,
    invoice_total,
    payment_total,
    invoice_total - payment_total AS balance
FROM invoices
WHERE (invoice_total - payment_total) > 0
WITH CHECK OPTION;
```

**解释**：在该视图中，只有余额大于 0 的发票才能显示。如果你试图通过此视图将某个发票的 `balance` 更新为 0 或负值，`WITH CHECK OPTION` 会阻止该操作，因为更新后的数据将不再满足视图的条件。

### 5.5 视图的优点

1. **简化查询**：视图通过隐藏复杂的查询逻辑，简化了对数据的访问。
2. **数据抽象**：视图为基础表提供了一层抽象，避免了表结构变动对用户的影响。
3. **安全性**：通过视图可以限制对基础表中敏感数据的访问。例如，可以创建一个不包含某些敏感字段的视图，而不暴露整个表。
4. **增强可读性**：通过视图可以简化复杂的查询，使代码更具可读性。

### 5.6 使用建议

- **视图管理**：建议将视图定义保存在本地文件系统或版本控制系统（如 Git）中，以便管理和共享。
- **谨慎使用复杂视图**：避免在视图中使用过于复杂的查询，尤其是含有聚合函数和 `GROUP BY` 的视图，否则可能会影响性能或无法进行更新操作。

## 6. 存储过程(PROCEDURE)

### 6.1 存储过程简介

1. **存储过程** 是一段经过封装的 SQL 代码，能够实现特定的业务逻辑，并存储在数据库中。
2. 存储过程可以通过预编译和优化，减少代码重复并提高执行效率。
3. 存储过程可以用于增强数据库安全性，例如通过限制直接访问表，将操作集中到存储过程上。

### 6.2 CREATE PROCEDURE——创建存储过程

MySQL 中使用 `CREATE PROCEDURE` 语句创建存储过程，命名时通常采用小写字母，单词之间用下划线分隔。

#### 示例 1：创建简单的存储过程

在 MySQL 中，我们可以通过 `DELIMITER` 来更改默认的分隔符，以避免过程定义中的分号与语句结束的分号混淆。创建后可以通过 `CALL` 调用。

```sql
DELIMITER $$

CREATE PROCEDURE get_clients()
BEGIN
    SELECT * FROM clients;
END$$

DELIMITER ;
```

调用方式：

```sql
CALL get_clients();
```

#### 示例 2：存储过程中的查询逻辑

在存储过程中可以嵌入复杂的查询逻辑，比如结合视图来实现数据筛选。

```sql
DELIMITER $$

CREATE PROCEDURE get_invoice_with_balance()
BEGIN
    SELECT *
    FROM invoices_with_balance
    WHERE balance > 0;
END$$

DELIMITER ;
```

### 6.3 DROP PROCEDURE——删除存储过程

删除存储过程时使用 `DROP PROCEDURE`。为了防止删除不存在的存储过程报错，可以加上 `IF EXISTS`。

```sql
DROP PROCEDURE IF EXISTS get_clients;
```

### 6.4 存储过程中的参数 (Parameter)

存储过程可以接受输入参数并使用它们进行查询。可以定义不同类型的参数，包括带默认值的参数和多个参数。

#### 示例 1：使用输入参数

```sql
DELIMITER $$

CREATE PROCEDURE get_clients_by_state(state CHAR(2))
BEGIN
    SELECT *
    FROM clients c
    WHERE c.state = state;
END$$

DELIMITER ;
```

#### 示例 2：带默认值的参数

通过 `IF` 和 `SET` 语句来设置参数的默认值，避免传递空值的情况下导致查询出错。

```sql
DELIMITER $$

CREATE PROCEDURE get_clients_by_state(state CHAR(2))
BEGIN
    IF state IS NULL THEN
        SET state = 'CA';
    END IF;

    SELECT *
    FROM clients c
    WHERE c.state = state;
END$$

DELIMITER ;
```

#### 示例 3：多个输入参数

存储过程可以接收多个输入参数，查询时利用 `IFNULL` 来处理空参数值。

```sql
DELIMITER $$

CREATE PROCEDURE get_payments(client_id INT, payment_method_id TINYINT)
BEGIN
    SELECT *
    FROM payments p
    WHERE p.client_id = IFNULL(client_id, p.client_id)
    AND p.payment_method = IFNULL(payment_method_id, p.payment_method);
END$$

DELIMITER ;
```

### 6.5 参数验证

为了保证传递的参数合法性，可以使用 `SIGNAL` 语句进行参数验证，当参数不符合要求时抛出错误。

```sql
DELIMITER $$

CREATE PROCEDURE make_payment(invoice_id INT, payment_amount DECIMAL(9,2), payment_date DATE)
BEGIN
    IF payment_amount < 0 THEN
        SIGNAL SQLSTATE '22003' SET MESSAGE_TEXT = 'Invalid payment amount';
    END IF;

    UPDATE invoices i
    SET i.payment_total = payment_amount, i.payment_date = payment_date
    WHERE i.invoice_id = invoice_id;
END$$

DELIMITER ;
```

### 6.6 输出参数 (OUT Parameters)

输出参数用于返回存储过程中的计算结果，可以在参数前添加 `OUT` 关键字，然后在过程内部通过 `INTO` 来存储返回值。

#### 示例：使用输出参数

```sql
DELIMITER $$

CREATE PROCEDURE get_unpaid_invoices_for_client(client_id INT, OUT invoices_count INT, OUT invoices_total DECIMAL(9,2))
BEGIN
    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices i
    WHERE i.client_id = client_id
    AND payment_total = 0;
END$$

DELIMITER ;
```

调用方式：

```sql
SET @invoices_count = 0;
SET @invoices_total = 0;
CALL get_unpaid_invoices_for_client(3, @invoices_count, @invoices_total);
SELECT @invoices_count, @invoices_total;
```

### 6.7 变量的使用

#### 本地变量

存储过程中可以定义本地变量，用于存储计算结果。这些变量只在存储过程执行时存在，存储过程结束后自动销毁。

```sql
DELIMITER $$

CREATE PROCEDURE get_risk_factor()
BEGIN
    DECLARE risk_factor DECIMAL(9, 2) DEFAULT 0;
    DECLARE invoices_total DECIMAL(9, 2);
    DECLARE invoices_count INT;

    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices;

    SET risk_factor = invoices_total / invoices_count * 5;

    SELECT risk_factor;
END$$

DELIMITER ;
```

#### 会话变量

会话变量在整个会话期间存在，可以用于存储过程中输出参数的传递。

```sql
SET @invoices_count = 0;
SET @invoices_total = 0;
```

### 6.8 存储过程的优点

1. **提高效率**：预编译的 SQL 代码提高执行速度，减少重复代码的编写。
2. **增强安全性**：通过存储过程对敏感表进行封装，减少对表的直接访问。
3. **简化管理**：复杂的业务逻辑可以封装在存储过程内，便于维护和管理。
4. **参数化查询**：支持灵活的参数传递和查询逻辑，满足不同的业务需求。

### 6.9 存储过程的管理建议

- 将存储过程的定义保存在本地文件夹，并定期上传至版本控制系统如 Git 进行管理和共享。
- 定期优化和清理不再使用的存储过程，保持数据库清洁和高效。

## 7. 函数 (Functions)

### 7.1 函数的概述

SQL 函数是为了封装一段逻辑并返回一个值，通常用于简化重复操作。与存储过程不同，函数必须返回一个值，且函数可以在 `SELECT` 语句中直接调用。函数的命名通常不严格统一，但最好遵循项目已有的命名规则。

### 7.2 函数属性

- **DETERMINISTIC**: 确定性函数，表示对于相同的输入参数，函数总是返回相同的输出。
- **READS SQL DATA**: 函数会读取 SQL 数据，即函数内部可能有 `SELECT` 查询。
- **MODIFIES SQL DATA**: 函数可以修改 SQL 数据，意味着函数中可能包含 `INSERT`、`UPDATE` 或 `DELETE` 语句。

### 7.3 函数示例

#### 1. 创建函数

在 MySQL 中，创建函数与存储过程类似，但函数需要使用 `RETURNS` 关键字来指定返回类型。以下是一个创建用于计算客户风险系数的函数示例：

```sql
DELIMITER $$

CREATE FUNCTION get_risk_factor_for_client
(
    client_id INT
)
RETURNS DECIMAL(9, 2)
READS SQL DATA
BEGIN
    DECLARE risk_factor DECIMAL(9,  2) DEFAULT 0;
    DECLARE invoices_total DECIMAL(9, 2);
    DECLARE invoices_count INT;

    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices i
    WHERE i.client_id = client_id;

    SET risk_factor = invoices_total / invoices_count * 5;

    RETURN IFNULL(risk_factor, 0);
END$$

DELIMITER ;
```

**函数说明**：

- `client_id` 是输入参数，用于指定客户。
- 函数返回该客户的风险系数，计算方式为客户所有订单的总金额除以订单数量，再乘以一个系数。
- 使用了 `READS SQL DATA`，因为函数中有 `SELECT` 语句。

#### 2. 调用函数

创建的函数可以在 `SELECT` 查询中直接调用。比如我们要查询所有客户的风险系数，可以这样写：

```sql
SELECT
    client_id,
    name,
    get_risk_factor_for_client(client_id) AS risk_factor
FROM clients;
```

#### 3. 删除函数

删除已经存在的函数可以使用 `DROP FUNCTION` 语句。为避免删除不存在的函数报错，通常使用 `IF EXISTS`。

```sql
DROP FUNCTION IF EXISTS get_risk_factor_for_client;
```

### 7.4 函数管理建议

1. **文件管理**: 将函数文件保存在本地文件夹，并使用 Git 等版本控制工具进行管理和共享，以便团队协作。
2. **规范命名**: 函数命名没有固定的规则，但应尽量遵循项目中的命名惯例，例如：
   - 前缀 `fn_` 表示函数
   - 驼峰式命名 `getRiskFactorForClient`
   - 或直接简洁命名 `get_risk_factor`

### 7.5 函数的优点

- **可重用性**: 函数封装了常用的业务逻辑，减少了重复的代码。
- **性能优化**: 大部分 DBMS 可以对函数进行优化，加快执行速度。
- **数据封装**: 函数可以封装复杂的逻辑，只返回所需的结果，提高代码的简洁性。

### 7.6 函数与存储过程的区别

- **函数必须返回值**，而存储过程可以选择返回或不返回值。
- **函数可以在 SQL 语句中直接调用**（如 `SELECT` 中），而存储过程通常通过 `CALL` 调用。
- **函数不能直接修改数据库数据**，而存储过程可以通过 `INSERT`、`UPDATE`、`DELETE` 等修改数据。

### 7.7 约定与建议

- **命名规则**: 函数的命名规则各异，但需要根据项目已有的惯例进行统一管理。例如，有人喜欢加 `fn_` 前缀，有人则喜欢保持简洁命名。关键是要做到 "入乡随俗"。
- **优化与维护**: 定期检查、优化函数逻辑，尤其是当数据库或业务需求变更时，确保函数的性能和正确性。

## 8. 触发器 (Triggers)

### 8.1 什么是触发器？

触发器（Trigger）是在执行 `INSERT`、`UPDATE` 或 `DELETE` 操作时，自动执行的 SQL 代码块。触发器通常用于确保数据一致性，自动化执行某些任务，如更新关联表、记录日志等。

在电商系统中，触发器通常用于自动化数据一致性检查、维护日志或执行特定的业务逻辑。然而，在高并发的电商系统中，使用触发器需要非常谨慎，因其潜在的性能开销、死锁风险和维护难度。

### 8.2 常用命名规范

命名规则通常为：`表名_触发器类型_前后`。例如，`orders_before_insert` 表示在 `orders` 表中插入数据之前执行的触发器。

### 8.3 触发器的限制

- 触发器不能直接修改它所在的表，否则会导致无限循环。
- `NEW` 用于访问刚插入的新行，`OLD` 用于访问修改或删除之前的旧行。

### 8.4 插入后触发器 (AFTER INSERT)

该触发器会在 `payments` 表中插入一条新记录后，自动更新 `invoices` 表中对应订单的总支付金额。

```sql
DELIMITER $$

CREATE TRIGGER payments_after_insert
    AFTER INSERT ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total + NEW.amount
    WHERE invoice_id = NEW.invoice_id;
END$$

DELIMITER ;
```

插入一条记录时触发：

```sql
INSERT INTO payments
VALUES (DEFAULT, 5, 3, '2019-01-01', 10, 1);
```

### 8.5 删除后触发器 (AFTER DELETE)

该触发器会在 `payments` 表中删除一条记录后，自动更新 `invoices` 表中对应订单的支付总金额。

```sql
DELIMITER $$

CREATE TRIGGER payments_after_delete
    AFTER DELETE ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total - OLD.amount
    WHERE invoice_id = OLD.invoice_id;
END$$

DELIMITER ;
```

删除一条记录时触发：

```sql
DELETE FROM payments
WHERE payment_id = 9;
```

### 8.6 查看触发器 (SHOW TRIGGERS)

可以使用 `SHOW TRIGGERS` 命令查看当前表的触发器：

```sql
SHOW TRIGGERS LIKE 'payment%';
```

### 8.7 删除触发器 (DROP TRIGGER)

要删除触发器，可以使用以下命令：

```sql
DROP TRIGGER IF EXISTS payments_after_insert;
```

### 8.8 触发器的常见用途：审计

触发器可以用于审计目的，即记录对数据库的操作。例如，可以在插入或删除时记录每笔支付操作的细节。

1. 创建审计表 `payments_audit`，记录过去的支付操作：

```sql
CREATE TABLE payments_audit
(
    client_id      INT            NOT NULL,
    date           DATE           NOT NULL,
    amount         DECIMAL(9, 2)  NOT NULL,
    action_type    VARCHAR(50)    NOT NULL,
    action_date    DATETIME       NOT NULL
);
```

2. 在触发器中插入审计记录：

**插入后审计触发器：**

```sql
DELIMITER $$

CREATE TRIGGER payments_after_insert
    AFTER INSERT ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total + NEW.amount
    WHERE invoice_id = NEW.invoice_id;

    INSERT INTO payments_audit
    VALUES (NEW.client_id, NEW.date, NEW.amount, 'Insert', NOW());
END$$

DELIMITER ;
```

**删除后审计触发器：**

```sql
DELIMITER $$

CREATE TRIGGER payments_after_delete
    AFTER DELETE ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total - OLD.amount
    WHERE invoice_id = OLD.invoice_id;

    INSERT INTO payments_audit
    VALUES (OLD.client_id, OLD.date, OLD.amount, 'Delete', NOW());
END$$

DELIMITER ;
```

### 8.9 触发器记录操作用户

你可以使用 `USER()` 或 `CURRENT_USER()` 函数来记录执行操作的数据库用户，方便追溯执行者：

```sql
INSERT INTO payments_audit
VALUES (NEW.client_id, NEW.date, NEW.amount, 'Insert', NOW(), USER());
```

### 8.10 触发器的优点与缺点

**优点：**

1. **自动化执行**：触发器自动在指定的数据库操作前或后执行，减少了人工干预。
2. **数据一致性**：可以确保在某些数据修改后自动进行相关更新，维护数据的一致性。
3. **审计和日志记录**：能够记录数据库中的操作日志，方便追踪和审计。

**缺点：**

1. **性能开销**：触发器同步执行，可能会增加数据库的处理时间，特别是在高并发的电商系统中。
2. **调试和维护难度**：由于触发器是隐式执行的，调试问题可能较为复杂。
3. **死锁和并发冲突**：在高并发环境中，触发器可能增加死锁和事务冲突的风险。

### 8.11 总结与建议

在高并发的电商系统中，尽量避免使用复杂的触发器逻辑。可以考虑将业务逻辑转移到应用层，或者通过消息队列进行异步处理，以减少数据库的负担和提高性能。如果必须使用触发器，建议将其设计得尽量简洁，并仅用于一些低频操作。

## 9. 事件 (Events)

### 9.1 事件概述

事件是根据计划执行的任务，类似于操作系统中的定时任务，可以用于定期执行一组 SQL 代码。事件可以是一次性执行的，也可以是周期性执行的任务。在电商系统中，事件可以用于清理日志、生成报表、自动归档等。

### 9.2 MySQL 事件调度器

事件调度器是一个后台程序，持续运行以执行计划中的事件。如果事件调度器关闭，则事件不会执行。

#### 查看系统变量和事件管理器状态

```sql
SHOW VARIABLES; -- 展示所有SQL的系统变量
SHOW VARIABLES LIKE 'event%'; -- 展示事件管理器代码
```

#### 打开事件调度器

要使用事件，必须首先启用事件调度器：

```sql
SET GLOBAL event_scheduler = ON;
```

#### 关闭事件调度器

```sql
SET GLOBAL event_scheduler = OFF;
```

### 9.3 创建事件

事件可以通过两种方式执行：

- **一次性事件**：在指定的时间执行一次。
- **周期性事件**：在指定的时间段内定期执行。

#### 创建一次性事件

一次性事件将在指定的日期时间执行一次。

```sql
DELIMITER $$

CREATE EVENT delete_old_audit_rows
ON SCHEDULE AT '2024-07-05 00:00:00'
DO BEGIN
    DELETE FROM payments_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END$$

DELIMITER ;
```

#### 创建周期性事件

周期性事件会在指定的周期内重复执行。例如，每年清理一次过期的审计记录。

```sql
DELIMITER $$

CREATE EVENT yearly_delete_stale_audit_rows
ON SCHEDULE
    EVERY 1 YEAR STARTS '2024-07-05' ENDS '2032-07-05'
DO BEGIN
    DELETE FROM payments_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END$$

DELIMITER ;
```

### 9.4 查看、删除和修改事件

#### 查看事件

可以使用以下命令查看当前数据库中所有已创建的事件：

```sql
SHOW EVENTS;
```

使用 `LIKE` 筛选特定名称的事件：

```sql
SHOW EVENTS LIKE 'yearly%';
```

#### 删除事件

删除不再需要的事件：

```sql
DROP EVENT IF EXISTS yearly_delete_stale_audit_rows;
```

#### 修改事件

可以使用 `ALTER EVENT` 来修改现有事件，而不需要删除再重建。

```sql
DELIMITER $$

ALTER EVENT yearly_delete_stale_audit_rows
ON SCHEDULE
    EVERY 1 YEAR STARTS '2024-07-05' ENDS '2032-07-05'
DO BEGIN
    DELETE FROM payments_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END$$

DELIMITER ;
```

#### 暂时禁用或启用事件

事件可以通过 `ALTER EVENT` 命令来禁用或启用：

```sql
-- 禁用事件
ALTER EVENT yearly_delete_stale_audit_rows DISABLE;

-- 启用事件
ALTER EVENT yearly_delete_stale_audit_rows ENABLE;
```

### 9.5 事件的常见用途

在电商系统中，事件可以用于：

1. **自动清理数据**：例如定期删除一年前的审计日志或未支付的订单。
2. **定期生成报表**：按月或按年汇总销售数据。
3. **自动归档数据**：将过期的订单或用户数据归档到历史表中。

#### 示例：定期归档订单

每年将超过一年的订单数据从 `orders` 表移到 `orders_archived` 表。

```sql
DELIMITER $$

CREATE EVENT yearly_archive_orders
ON SCHEDULE EVERY 1 YEAR STARTS '2024-07-05'
DO BEGIN
    INSERT INTO orders_archived
    SELECT * FROM orders
    WHERE order_date < NOW() - INTERVAL 1 YEAR;

    DELETE FROM orders
    WHERE order_date < NOW() - INTERVAL 1 YEAR;
END$$

DELIMITER ;
```

### 9.6 事件的优点与缺点

**优点**：

- 自动化处理重复性任务，减少人工操作。
- 提高数据管理的效率，如定期清理日志或归档数据。
- 在后台自动执行，不需要人工干预。

**缺点**：

- **性能影响**：频繁执行的事件可能会对数据库性能造成影响，尤其是在数据量大的情况下。
- **监控和管理**：事件调度的失败或中断不易被察觉，需要设置额外的监控措施。

### 9.7 总结

MySQL 事件允许开发者自动化执行重复的 SQL 操作，在电商系统中，事件可以帮助定期清理数据、归档信息和生成报表。但要注意使用频率和对系统性能的影响，并确保有适当的监控。

## 10.并发控制与事务处理

### 10.1 事务 (Transactions)

事务是一组 SQL 语句，它们要么全部执行成功，要么在出现错误时全部撤销，以保持数据的一致性。例如在电商系统中，处理订单支付和库存扣减就是一个典型的事务操作。如果支付成功但库存未扣减，会造成系统数据不一致。

如银行转账，A 向 B 转账 10 块钱，B 的账户收到 10 块钱的时候，A 的账号会减少 10 块钱，这里有两个操作，这两个操作一起就是一个工作单元，但凡一个操作失败，需要重新开始，我们在需要对数据库进行多次更改的情况下使用事务
如果 A 转账完成，A 扣了钱，但是这是时候服务器崩了，B 没收到，为了避免这种情况，我们使用事务

### 10.2 事务的四大特性 (ACID)

1. **原子性 (Atomicity)**：事务中的所有操作要么全部成功，要么全部失败。
2. **一致性 (Consistency)**：事务执行后，数据库从一个一致状态转换到另一个一致状态。不会出现有订单没有项目的情况。
3. **隔离性 (Isolation)**：并发执行的事务不会互相干扰，事务之间的数据修改是相互隔离的。如果多个事务想要更新相同的数据，受影响的行将会被锁定，一次只有一个事务可以更新行，其他事务比心等那个事务完成。
4. **持久性 (Durability)**：一旦事务提交，它所做的修改将永久保存，即使系统崩溃也不会丢失。

### 10.3 创建事务

我们可以通过以下命令创建和管理事务：

- `START TRANSACTION`：开始事务。
- `COMMIT`：提交事务，保存所有修改。
- `ROLLBACK`：撤销事务，恢复到事务开始前的状态。

```sql
START TRANSACTION;

INSERT INTO orders (customer_id, order_date, status)
VALUES (1, '2023-08-01', 1);

INSERT INTO order_items
VALUES (LAST_INSERT_ID(), 1, 1, 100);

COMMIT;
```

如果在 `COMMIT` 之前出现错误，我们可以使用 `ROLLBACK` 来撤销该事务。

### 10.4 测试事务的撤回功能

先执行`START TRANSACTION;`
再执行`INSERT INTO orders(customer_id,order_date,status) VALUES(1,'2019-01-01',1) ;`
随后断开数据看连接模拟服务器断开
重新打开数据看查看，发现数据并未插入

```sql
USE sql_store;

START TRANSACTION;

INSERT INTO orders(customer_id,order_date,status)
VALUES(1,'2019-01-01',1) ;

INSERT INTO order_items
VALUES (LAST_INSERT_ID(),1,1,1);

COMMIT;
```

### 10.5 自动提交的系统管控

MySQL 会装好我们写在事务里的每一条语句，如果没有返回错误，它就会提交，所以每当我们有 INSERT，UPDATE，或 DELETE 语句时，MySQL 会先把它们装在事务里，然后自动提交，它由一个自动提交的系统管控。

```sql
SHOW VARIABLES LIKE 'autocommit';
```

### 10.6 并发与锁定 (Concurrency and Locking)

在高并发系统中，多个用户可能同时修改或读取同一条数据。为了避免并发问题，MySQL 引入了锁机制。

#### 1.锁的作用

当一个事务修改数据时，MySQL 会为该数据行加锁，防止其他事务同时修改相同的数据，直到当前事务完成并提交。

**示例：**创建一个用户，在两个用户下分别写在如下代码不执行

```sql
1 USE sql_store;
2 START TRANSACTION;
3 UPDATE customers
4 SET points = points +10
5 WHERE customer_id = 1;
6 COMMIT;
```

1. 在第一个用户下先依次执行 123 行代码
2. 在第二个用户下依次执行 123 行代码
3. 在第二个用户执行第三行代码的时候，卡住了，最后报错
4. 因为第一个事务正在操作的数据，第二个用户没有权限操作
5. 我们先将第一个用户的事务提交，随后第二个用户的事务可以操作了
   一个事务试图修改一行或者多行时，它给这些行上了锁，这个锁防止其他事务修改这些行，直到第一个事务完成，被提交或者被退回，所以由于 MySQL 默认状态下的锁定行为，大多数时候不必担心并发问题，但是某些特殊情况下，默认行为不足以满足应用里的特定场景，这种情况下可以改写默认行为

#### 2.并发问题

**示例**：`John,NY,10`

John 的地址在 New York，账户内有 10 积分，事务 A 修改了 John 的地址，事务 B 修改了 John 的积分，这两个事务同时发生，这是俩事务都能读取到的客户记录，假设事务 A 更新了州的信息，但还没有提交，与此同时事务 B 更新了积分，较晚提交的事务会覆盖先前做的修改，我们可以使用锁来避免这些问题。
常见并发问题

1. **脏读 (Dirty Read)**：脏读就是当一个事务读取了尚未被提交的数据。

   例如*：*事务 A 修改了某用户的积分，在事务 A 提交之前，事务 B 读取到了该用户未提交的积分数据，并给予该数据做出了某个决定，而 A 事务最后并没有提交，ROLLBACK 撤回了，事务 B 就会拿到本就不存在的数据，为了解决这个问题，我们需要为事务建立隔离级别，这样事务修改的数据不会立马被其他事务读取，除非它提交了更新，**标准的 SQL 定义了 4 个事务隔离级别**，**其中一个是`READ COMMITTED`读已提交的**，当我们对事务使用这个隔离级别时，那个事务只能读取已提交的数据，这样就避免了脏读（如果在事务完成之后数据被修改也不重要，重要的是我们读取到的任何数据，至少在读取的时候都是已经提交的数据，数据后面也是可以变的，但这就和事务没有什么关系了）

2. **不可重复读 (Non-repeatable Read)**：事务 A 在同一个事务中多次读取同一行数据，却得到不同的结果。

   当我们在事务中添加更多隔离时，我们可以保证事务只能读取已提交的数据，但如果在事务过程中，我们读取了某个数据两次，并得到了不同的结果怎么办？**例如**：事务 A 读取了我们的客户积分，客户积分为 10 分，所以他会根据这个数值做出商业决策，在事务 A 完成之前，另一个事务，比如事物 B 把这个顾客的积分更新成 0，现在回到事务 A，我们再次读取了这个客户的积分，也许因为它在子查询里面，现在在这个事务中，我们已经读了两遍积分，而且每次都看到了不同数值，这就是不可重复读或不一致读，我们怎么来处理这种情况，我们可以说在任何时候，我们应该根据最新信息做决定，在商务场景里，我们不必担心这一点，我们还可以说，在事务开始的那一刻，这个客户有 10 分，所以我们应该给他 10 刀折扣，如果积分在事务过程中发生变化，我们也无法看到变化，我们能看到的应该是初始快照才对，如果那是我们想要的，我们就需要增加事务隔离级别，我们要将它与其他事务隔离，确保数据更改对事务不可见，**SQL 标准定义了另一个隔离级别，叫做`REPEATABLE READ`可重复读**，这个级别上，我们读取的数据是可重读和一致的，就算有其他事务更改了数据，我们也会 看到首次读取创建的快照

3. **幻读 (Phantom Read)**：事务 A 查询的记录集，在事务进行过程中，事务 B 插入了一条符合事务 A 查询条件的记录，导致事务 A 在同一查询中得到了不同的结果。

   **例如**：有一个事务 A，我们要查询积分超过 10 的所有顾客，因为我们想要送他们一个特别折扣码，事务 B 为另外一位顾客更新了积分，且还没被查询返回，所以这个客户现在是有资格使用这个折扣码的，但当我们查询这张顾客表时，并没有看到这位客户，所以事务 A 完成后，仍有一个符合条件的 客户没有收到折扣码，这就是我们说的幻读，**为此，我们有另一个隔离级别称为序列化**，这是我们可以应用于一个事务的最高隔离级别。我们拥有的用户和并发事务越多，我们就要等越久，我们的系统也会变慢，隔离级别会损害性能和可拓展性，出于这个原因，我们应该只在针对有必要防止幻读的情况下才保留此项。

### 10.7 隔离级别（Isolation Levels）

在事务处理中，**隔离级别**定义了事务之间如何相互隔离，以防止并发问题。常见的并发问题包括丢失更新、脏读、不可重复读和幻读。通过调整隔离级别，可以在数据一致性与系统性能之间取得平衡。SQL 标准定义了四个隔离级别，每个级别处理并发问题的方式有所不同。

#### 1.常见并发问题

1. **丢失更新（Lost Update）**：当两个事务同时更新同一行数据，最后提交的事务覆盖了先前的更新，导致数据丢失。

   - 示例：事务 A 和事务 B 同时更新 John 的账户余额。事务 A 成功将余额更新为 100 元，而事务 B 随后提交，覆盖了事务 A 的更改，导致最终余额错误。

2. **脏读（Dirty Read）**：一个事务读取了另一个未提交的事务所修改的数据。

   - 示例：事务 A 修改 John 的积分为 20，但尚未提交。此时事务 B 读取了未提交的 20 积分，如果事务 A 随后回滚，事务 B 的读取数据将是错误的。

3. **不可重复读（Non-repeatable Read）**：同一事务内，重复读取同一数据时，前后读取结果不一致。

   - 示例：事务 A 第一次读取 John 的积分为 10，再 A 还未完成时，事务 B 随后将积分更新为 0，事务 A 再次读取时发现积分发生了变化。

4. **幻读（Phantom Read）**：事务在一次查询中读取到的行数与随后查询的行数不同，因为另一个事务插入或删除了数据。
   - 示例：事务 A 查询积分大于 10 的所有客户，事务 B 随后插入一个积分为 15 的客户，事务 A 的查询结果发生变化。

#### 2.四个事务隔离级别

1. **READ UNCOMMITTED**（未提交读）：

   - **特点**：最低级别，允许读取其他事务未提交的数据。
   - **解决问题**：无。
   - **并发问题**：可能发生所有并发问题，包括脏读、不可重复读和幻读。
   - **适用场景**：适用于需要尽可能提高系统并发性和性能，而不太关注数据一致性的场景。

2. **READ COMMITTED**（已提交读）：

   - **特点**：只允许读取已提交的数据，防止脏读。
   - **解决问题**：脏读。
   - **并发问题**：仍可能发生不可重复读和幻读。
   - **适用场景**：适用于大多数读写操作场景，数据一致性要求相对较高，但对不可重复读和幻读容忍度较高。

3. **REPEATABLE READ**（可重复读）：

   - **特点**：事务在开始后，多次读取同一数据时保证读取结果一致，防止不可重复读。MySQL 的默认隔离级别。
   - **解决问题**：脏读、不可重复读。
   - **并发问题**：仍可能发生幻读。
   - **适用场景**：适合需要保证读取一致性的应用，如电商的订单处理，确保读取到的数据在整个事务过程中不变。

4. **SERIALIZABLE**（可串行化）：
   - **特点**：最高级别，通过将事务序列化，确保事务按顺序执行，防止所有并发问题，包括幻读。
   - **解决问题**：解决脏读、不可重复读和幻读等所有并发问题。
   - **代价**：由于事务必须按顺序执行，性能损耗较大，可能导致系统响应变慢。
   - **适用场景**：适合对数据一致性要求极高、并发性相对较低的场景，如金融系统中的账户资金变动。

#### 3.选择隔离级别的建议

隔离级别越高，会存在越严重的性能和可拓展性问题 ，因为它会需要用到更堵隔离事务的锁。更低的隔离级别会更容易并发，会有更多的用户可以在同时接触到同一数据，但是更多的并发也意味着更多并发问题，反过来说，有着更高的性能，因为我们需要用以隔离事务的 锁也更少了，较高的隔离级别限制了并发，那意味着更少的并发问题，但是会以降低性能和可拓展性为代价，因为我们会需要更多的锁定和资源，因此最快的隔离级别是 READ UNCOMMITTED，因为它不设置任何锁，并且忽略了其他事务设置的锁，出于这个原因，我们可能会遇到所有的并发问题，这个表越往下，我们可以更好的阻止并发问题，但那也意味着我们要用更多的锁，而且这需要更多的资源，可能会损害性能和可拓展性，在 MySQL 中，默认的事务隔离级别是 REPEATABLE READ，这在大多数场景下都很好使，他比可序化更快，并且防止了除幻读外的大多数并发问题，所以我们可以优先选择这一级别，除非必须对某一事物防止幻读，那种情况下，我们可以针对那个事务设定可序化级别，至于前两个级别，我们可以在不需要精确的一致性的批量报告或者数据不怎么更新的情况下使用并且基于想要获得更好性能的前提下，当然大多数情况下我们选择默认设定，只有在必要的时候更改隔离级别

|                  | Lost Update | Dirty Read | Non-repeatable Read | Phantom Read |
| ---------------- | ----------- | ---------- | ------------------- | ------------ |
| READ UNCOMMITTED |             |            |                     |              |
| READ COMMITTED   |             | ✅         |                     |              |
| REPEATABLE READ  | ✅          | ✅         | ✅                  |              |
| SERIALIZABLE     | ✅          | ✅         | ✅                  | ✅           |

- **READ UNCOMMITTED** 和 **READ COMMITTED** 隔离级别适合并发较高的应用场景，如电商中大量的读操作，优先考虑性能。
- **REPEATABLE READ** 是大多数场景的默认选择，尤其适合对读取一致性要求较高的场景，如订单和库存管理。
- **SERIALIZABLE** 适合少量高精度的关键业务操作，比如金融交易中避免资金计算误差的场景，但应尽量避免全局使用，以减少性能瓶颈。

通过选择适当的事务隔离级别，可以有效防止并发问题，同时兼顾系统的性能需求。

#### 4.设置事务隔离级别

查看当前事务隔离级别代码

```sql
SHOW VARIABLES LIKE 'transaction_isolation';
```

为下一个事务设置隔离级别

```sql
-- SET TRANSACTION ISOLATION LEVEL 加上隔离级别
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

我们还可以为当前会话中或未来事务设定隔离级别
加`SESSION`，只要这里写了绘会话或者连接，未来的事务都会是这个隔离级别

```sql
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

加`GLOBAL`为所有回话中的所有新事物设置全局隔离级别

```sql
 SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

#### 5.READ UNCOMMITTED

**示例**：测试读取事务没有提交之前操作的数据

会话 A

```sql
1 USE sql_store;
2 SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
3 SELECT points
4 FROM customers
5 WHERE customer_id = 1;
```

会话 B

```sql
1 USE sql_store;
2 START  TRANSACTION;
3 UPDATE customers
4 SET points  = 20
5 WHERE customer_id = 1;
6 COMMIT;
7 -- ROLLBACK；
```

我们先依次执行会话 A 的 1，2 行代码，来修改隔离级别，随后我们依次运行会话 B 的第 1、2、3 行代码，不提交，此时数据被修改但是事务并没有提交，我们再执行会话 A 的第 3 行代码(等效于选中 345 执行)，发现被修改的数据被读取到了，但此时事务并未提交，若最后服务器崩溃或者我们 ROLLBACK，我们则使用了一个从未在数据库中存在的值，这就是**脏读**的问题

#### 6.READ COMMITTED

**示例 1**：`READ COMMITTED`可以避免脏读，即避免读取未提交的数据
会话 A

```sql
1 USE sql_store;
2 SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
3 SELECT points FROM customers WHERE customer_id = 1;
```

会话 B

```sql
1 USE sql_store;
2 START  TRANSACTION;
3 UPDATE customers
4 SET points  = 20
5 WHERE customer_id = 1;

6 COMMIT;
7 ROLLBACK;
```

先依次执行会话 A 的 1，2 行代码，修改隔离级别为`READ COMMITTED`，再依次执行会话 B 的 1、2、3 行代码，不提交，然后我们执行会话 A 的第 3 行代码，我们读取到的数据为 2273，而不是 20，我们返回会话 B，执行第 6 行代码提交，再次返回会话 A 执行第 3 行代码，我们现在读取到了 20，该例子说明了这一隔离级别下不存在脏读，但是可能存在其他问题，比如还会存在不可重读读问题，所以再一个事务中，我们可能会两次读取同一内容时，每次都得到不同的值，演示例子如下

**示例**2:

会话 A

```sql
1 USE sql_store;
2 SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
3 START TRANSACTION;
4 SELECT points FROM customers WHERE customer_id = 1;
5 SELECT points FROM customers WHERE customer_id = 1;
6 COMMIT;
```

会话 B

```sql
1 USE sql_store;
2 START  TRANSACTION;
3 UPDATE customers
4 SET points  = 30
5 WHERE customer_id = 1;
6 COMMIT;
7 ROLLBACK;
```

我们先执行会话 A 的第 1，2 行代码，之所以再次执行第 2 行代码，是因为该语句只对下一次执行第事务生效，我们再执行会话 A 的 3、4 行代码，读取到 20，随后我们执行会话 B 的所有代码，再返回会话 A 执行第 5 行代码，我们读取到了不同的值 30。

#### 7.REPEATABLE READ

在每次进行新的测试之前，我们应该提交(结束)上一个事务，这样才可以回来更改下一个事务的隔离级别
**示例**：
会话 A

```sql
1 USE sql_store;
2 SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
3 START TRANSACTION;
4 SELECT points FROM customers WHERE customer_id = 1;
5 SELECT points FROM customers WHERE customer_id = 1;
6 COMMIT;
```

会话 B

```sql
1 USE sql_store;
2 START  TRANSACTION;
3 UPDATE customers
4 SET points  = 40
5 WHERE customer_id = 1;
6 COMMIT;
```

执行会话 A 的 1、2、3、4 行代码，读取到 30，再执行会话 B 的所有代码，然后执行会话 A 的第 5 行代码，读取到的还是 30，这就是该隔离级别的优点，但在这个级别还有一个问题，就是幻读

#### 8.幻读示例

我们模拟的场景是：一位客户想要读取位于 Virginia 地区的顾客信息，同时，另一个客户正在更新数据，让顾客 1 能被包括在这个客户 1 执行的查询中，
我们在会话 B 中，开始事务，更新客户但不提交，从技术上讲，它还没有写入数据库
因此，当我们回到会话 A 并读取顾客，我们看不到更新的顾客，
当第二个会话提交更改之后，重新在会话 A 的事务中再次读取这名顾客，我们还是找不到，因为在`REPEATABLE READ Isolation Level`的条件下，我们的读取会保持一致性，所以我们不得不提交这个事件，只有当重新读取，才能看见新增的顾客
会话 A

```sql
USE sql_store;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT * FROM customers WHERE state  = 'VA';
COMMIT;
```

会话 B

```sql
USE sql_store;
START  TRANSACTION;
UPDATE customers
SET state = 'VA'
WHERE customer_id = 1;
COMMIT;
```

#### 9.REPEATABLE READ

提供最高级别的隔离，解决所有的并发问题
这一级别在，我们的事务是按顺序依次执行的，因此可以真正消除并发问题，这样的体验就像是一个单用户系统，一位用户对数据库执行不同的命令，而且这些命令按顺序执行
**示例**：
会话 A

```sql
1 USE sql_store;
2 SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
3 START TRANSACTION;
4 SELECT * FROM customers WHERE state  = 'VA';
5 COMMIT;
```

会话 B

```sql
1 USE sql_store;
2 START  TRANSACTION;
3 UPDATE customers
4 SET state = 'VA'
5 WHERE customer_id = 3;
6 COMMIT;
```

执行会话 A 的第 1、2、3 行代码，然后进入会话 B，再添加一个位于 Virginia 的顾客，执行会话 B 的第 1、2、3 行代码，更新顾客，此时不提交 ，所以当第一个会话 A 试图读取 Virginia 的客户时，另一个会话 B 正在更新顾客 3，这个顾客应该被算进查询里，否则会出现幻读
当我们执行会话 A 的第四行代码时，系统一直显示正在运行但不会读取结果，此时事务正等待另外一个事务完成，这就是`REPEATABLE READ Isolation Level`序列化隔离级别的结果，所以一旦我们提交会话 B 中的事务，会话 A 中的事务即可执行，
所以通过序列化隔离级别，我们解决了所有的并发问题，没有幻读，没有丢失更新或者脏读，所有的并发问题得到解决，因为我们的事务是一个接一个按顺序执行的，用户越多，发生在同时的请求越多，就需要漫长的等待，
只在想防止幻读的情况下使用这一隔离级别，而不是系统中的每一个事务，默认的隔离级别，对大多数场景都有效。

### 10.8 死锁 (Deadlocks)

死锁是指当两个或多个事务在试图访问相同资源时相互等待对方释放资源，导致所有事务都无法继续执行的情况。在这种情况下，事务将永远等待，直到系统自动检测到死锁并采取措施终止其中一个事务。

#### 示例：

假设在电商系统中，我们有两个事务在更新 `customers` 和 `orders` 表：

会话 A：

```sql
USE sql_store;
START TRANSACTION;
UPDATE customers SET state = 'VA' WHERE customer_id = 1;
UPDATE orders SET status = 1 WHERE order_id = 1;
COMMIT;
```

会话 B：

```sql
USE sql_store;
START TRANSACTION;
UPDATE orders SET status = 1 WHERE order_id = 1;
UPDATE customers SET state = 'VA' WHERE customer_id = 1;
COMMIT;
```

会话 A 执行第 3 行代码时，会更新顾客 1，这个事务将锁定此记录，所以其他事务无法更新此记录，在执行第 4 行代码前，另外一个用户（会话 B）开始了 一个新事务，这名用户要更新这张表的一笔订单，即订单 1，事务会锁定这个记录，然而，会话 B 中当该事务准备指定第 4 行代码时，因为我们是在更新会话 A 中事务正在更新的同一个客户，所以事务 1 已经锁定了此记录，因此我们无法完成这个事务，必须等会话 A 中的那个事务完成，现在我们返回会话 A 中执行第 4 行代码，此时我们试图更新订单 1，但是会话 B 中事务已经锁定了这条记录，所以我们必须等到那个交易完成。这就是问题所在，两个事务都在等待对方 ，它们永远无法完成

#### 死锁的解决方案：

- **系统自动处理：** MySQL 等数据库管理系统会自动检测到死锁情况，并选择一个事务进行回滚（通常是消耗资源较少的事务）。用户可以在应用程序中捕获这个错误，提示用户操作失败，并让用户重新尝试。
- **优化事务顺序：** 在应用程序中，确保所有事务按相同的顺序访问资源。例如，先更新 `customers` 表，再更新 `orders` 表。这样可以避免事务之间的锁冲突，从而减少死锁发生的可能性。

- **简化事务：** 尽量简化事务的逻辑，减少在事务中处理过多表的操作，缩短事务执行的时间。这样可以减少事务之间锁定资源的机会，降低死锁风险。

- **避免长时间锁定：** 如果某些查询涉及大表或复杂的计算，尽量避免在事务中长时间锁定记录，可以考虑将这些复杂的操作移到非事务中进行处理。

- **安排事务在非高峰期运行：** 如果系统存在大量并发操作，尤其是在高峰时段，可能会增加死锁的发生率。可以通过安排一些批量操作在非高峰期运行，来减轻并发事务的压力。

#### 总结：

应用程序开发者的角度，我们应该以这样的方式编写应用程序：如果事务因为死锁而被返回，可以重新恢复，或者我们可以选择告诉用户，这个操作失败了再试试，但是我们也可以做一些努力来最小化死锁，我们永远无法真正消除它们，只能减少可能性。如果经常在两个事务中检测到死锁，关注事务中的语句顺序，如果这些事务以相反的顺序更新数据，就可能出现死锁，还可以做的就是尽量简化事务，缩短事务运行时长，减少冲突的可能。如果查询基于很大的表，有些事务可能需要很长的时间来运行，就会有冲突的风险，这样的话，我们可以把这些事务安排在非高峰时段运行

## 11.数据类型 (Data Types)

1. String Types 字符串类型
2. Numeric Types 数值类型
3. Date and Time Types 日期时间类型
4. Blob Types 存储二进制数据的 Blob 类型
5. Spatial Types 存储几何或者地区值的空间类型

### 11.1 字符串类型 (String Types)

在数据库设计中，字符串类型用于存储文本或字符数据。在电商系统中，常见的字符串类型包括用户名、密码、地址、产品描述等字段。

**建议**用户名和密码这类短字符使用`VARCHAR(50)`，对于地址这类更长的字符串使用`VARCHAR(255)`，这种一致性简化了数据库的维护，不必经常检查每列的长度

以下是常见的字符串类型及其应用场景：

1. **`CHAR(x)`**:
   - **描述**: 固定长度的字符串类型。如果输入的字符串长度不足指定长度，系统会自动在末尾填充空格。这种类型适合存储固定长度的数据，例如州的缩写或国家代码。
   - **应用场景**: 用于存储固定长度的字段，如州的缩写 ("CA", "TX")。
   - **示例**:

     ```sql
     CREATE TABLE states (
       state_code CHAR(2)
     );
     ```
2. **`VARCHAR(x)`**:

   - **描述**: 可变长度的字符串类型，最大长度为 65535 字符（约 64KB）。适合用于存储长度不确定的字符串，如用户名、电子邮箱、产品名称等。比`CHAR`更节省空间，因为只会为实际存储的字符占用空间。
   - **应用场景**: 存储用户名、产品描述、邮箱、电话号码等。
   - **示例**:
     ```sql
     CREATE TABLE customers (
       email VARCHAR(255),
       username VARCHAR(50)
     );
     ```

3. **`TINYTEXT`**:

   - **描述**: 存储较短文本的类型，最大可以存储 255 个字符。常用于存储简短的描述或备注信息。
   - **应用场景**: 存储简短备注或评论。
   - **示例**:
     ```sql
     CREATE TABLE reviews (
       short_review TINYTEXT
     );
     ```

4. **`TEXT`**:

   - **描述**: 可以存储至多 65535 个字符，与 `VARCHAR` 类似，但不适合索引。这种类型常用于存储较长的文本数据，如文章、产品详情等。
   - **应用场景**: 存储长文本数据，如商品详情、产品评论等。
   - **示例**:
     ```sql
     CREATE TABLE products (
       description TEXT
     );
     ```

5. **`MEDIUMTEXT`**:

   - **描述**: 可以存储更长的文本数据，最大长度为 16MB。适合存储大量文本，如商品的长篇评论、历史订单数据等。
   - **应用场景**: 用于存储产品的详细说明、商品评价、历史记录等中等长度的数据。
   - **示例**:
     ```sql
     CREATE TABLE product_reviews (
       detailed_review MEDIUMTEXT
     );
     ```

6. **`LONGTEXT`**:
   - **描述**: 支持存储至多 4GB 的文本数据，非常适合存储大量文本或日志数据。适用于存储像脚本、日志文件等大型文本内容。
   - **应用场景**: 存储大型日志文件、大规模产品说明或用户生成内容等。
   - **示例**:
     ```sql
     CREATE TABLE logs (
       log_data LONGTEXT
     );
     ```

**字符串类型的使用建议**：

- **`VARCHAR` vs `TEXT`**: `VARCHAR`适合索引字段，查询时效率更高；`TEXT`适用于不需要经常查询的长文本内容。
- **字符存储**: 字符的存储空间依赖于字符集。英文字符占用 1 字节，欧洲、中东字符占用 2 字节，中文、日文等亚洲字符占用 3 字节。
- **一致性**: 为简化数据库维护，可以对常用字段采用统一的`VARCHAR`长度，如用户名和密码使用`VARCHAR(50)`，地址等较长字段使用`VARCHAR(255)`。

### 11.2 整数类型 (Integer Types)

在数据库中，整数类型用于存储不带小数点的数字，如年龄、数量等。MySQL 提供了多种整数类型，每种类型占用的字节数和可以存储的值范围不同。根据需求选择合适的整数类型可以优化存储和查询性能。

```sql
TINYINT      -- 1字节，[-128, 127]
UNSIGNED TINYINT   -- 1字节，[0, 255]
SMALLINT     -- 2字节，[-32,768, 32,767]
MEDIUMINT    -- 3字节，[-8,388,608, 8,388,607]
INT (INTEGER) -- 4字节，[-2,147,483,648, 2,147,483,647]
BIGINT       -- 8字节，[-9,223,372,036,854,775,808, 9,223,372,036,854,775,807]
```

#### 1.TINYINT

- 占用 1 个字节
- 有符号范围：-128 到 127
- 无符号范围：0 到 255
- **适用场景**：如年龄、状态标志等只需要存储小范围正整数的字段。

**示例：**

```sql
CREATE TABLE customers (
    customer_id TINYINT UNSIGNED,
    age TINYINT
);
```

#### 2.SMALLINT

- 占用 2 个字节
- 有符号范围：-32,768 到 32,767
- 无符号范围：0 到 65,535
- **适用场景**：如较小的计数字段，存储数量少的库存或小范围编号。

**示例：**

```sql
CREATE TABLE orders (
    order_id SMALLINT UNSIGNED,
    quantity SMALLINT
);
```

#### 3.MEDIUMINT

- 占用 3 个字节
- 有符号范围：-8,388,608 到 8,388,607
- 无符号范围：0 到 16,777,215
- **适用场景**：适合需要中等范围整数的字段。

**示例：**

```sql
CREATE TABLE products (
    product_id MEDIUMINT UNSIGNED,
    stock MEDIUMINT
);
```

#### 4.INT

- 占用 4 个字节
- 有符号范围：-2,147,483,648 到 2,147,483,647
- 无符号范围：0 到 4,294,967,295
- **适用场景**：最常用的整数类型，适合大多数需要存储正负整数的场景，如用户 ID、订单编号等。

**示例：**

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT
);
```

#### 5.BIGINT

- 占用 8 个字节
- 有符号范围：-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807
- 无符号范围：0 到 18,446,744,073,709,551,615
- **适用场景**：适合需要存储极大数值的场景，如金融数据、交易日志等。

**示例：**

```sql
CREATE TABLE transactions (
    transaction_id BIGINT UNSIGNED,
    transaction_amount BIGINT
);
```

#### 6.无符号 (UNSIGNED)

- 在定义整数类型时，可以使用 `UNSIGNED` 来表示无符号整数。无符号整数只存储正值，因此可以在相同字节数下存储更大的正整数。
- **适用场景**：如年龄、数量等字段，只需要正数时，使用 `UNSIGNED` 来避免存储负值，并增加最大可存储范围。

#### 7.显示大小 (Display Width) 和补零 (ZEROFILL)

- 当定义整数类型时，可以指定显示的宽度，例如 `INT(4)`。这并不会影响实际存储的数值，而只影响数据显示时的格式。为了使数值符合指定长度，可以使用 `ZEROFILL` 补齐位数。

#### 8.整数类型选择的建议

- **最小化存储空间**：选择满足需求的最小数据类型，减少数据存储空间，从而提高数据库的性能。例如，使用 `TINYINT` 来存储年龄，而不是 `INT`。
- **防止溢出**：选择合适的类型范围，确保不会存储超出范围的值。如果数据超出范围，MySQL 会报错，导致插入或更新失败。

### 11.3 浮点类型 (Floating-point Types)

在 MySQL 中，浮点类型用于存储带小数点的数字。根据精度和存储需求，不同类型的数据可以使用不同的浮点类型。MySQL 主要提供了定点类型（`DECIMAL`）和浮点类型（`FLOAT` 和 `DOUBLE`），适合处理不同场景的数据，如货币、科学计算等。

#### 1.定点类型 (Fixed-point Types)

定点类型主要用于存储需要精确表示的小数，如货币数据。这类数据类型在存储时不会发生精度丢失。常见的定点类型为 `DECIMAL`。

- **DECIMAL(p, s)**

  - **p**：精度，表示总共的有效数字个数（包含小数点两边）。范围为 1 到 65。
  - **s**：标度，表示小数点后的位数。范围为 0 到 30，且不能超过精度。
  - **适用场景**：用于精确存储的数值，如货币、财务数据等。

  **示例**：

  ```sql
  CREATE TABLE products (
      product_id INT PRIMARY KEY,
      price DECIMAL(10,2)  -- 存储最多10位数，保留2位小数
  );
  ```

- **同义词**：

  - `DEC`、`NUMERIC` 和 `FIXED` 这几个词是 `DECIMAL` 的同义词，它们的功能完全相同。

  **示例**：

  ```sql
  CREATE TABLE products (
      price NUMERIC(10, 2)
  );
  ```

#### 2.浮点类型 (Floating-point Types)

浮点类型用于存储近似值，可以处理非常大或非常小的数字，常用于科学计算、统计等场景。浮点数由于使用近似值存储，不能保证百分之百的精度，因此不适合用于需要精确计算的场景（如货币）。

- **FLOAT**

  - 占用 4 个字节
  - **适用场景**：需要存储精度不高、范围大的浮点数。常用于科学计算或存储较大数据时，如商品的重量或科学测量中的数据。

  **示例：**

  ```sql
  CREATE TABLE measurements (
      height FLOAT
  );
  ```

- **DOUBLE**

  - 占用 8 个字节

  - **适用场景**：比 `FLOAT` 精度更高，适合需要更大范围浮点数的数据，如处理高精度的科学计算。

  **示例**：

  ```sql
  CREATE TABLE scientific_data (
      large_value DOUBLE
  );
  ```

#### 3. 如何选择合适的类型？

- **精确数据**（如货币）：使用 `DECIMAL`。它能保证数据的精度，非常适合用于财务计算或任何需要高精度的场景。
- **大范围、非精确数据**（如科学计算）：使用 `FLOAT` 或 `DOUBLE`。这类数据类型适合处理科学计算、传感器数据等，不需要百分之百精确的场景。

#### 4.总结

- **`DECIMAL`**：用于存储带小数的精确数值，如价格、货币等。
- **`FLOAT` 和 `DOUBLE`**：用于存储不需要高精度的大范围浮点数，如科学计算中的数据。

### 11.4 布尔类型 (Boolean Types)

在 MySQL 中，布尔类型 (`Boolean`) 用于表示是非（真/假）值，例如判断某个产品是否上架、某个订单是否已完成等。虽然 MySQL 没有专门的布尔类型，但提供了两种同义词：`BOOL` 和 `BOOLEAN`，它们实际上是 `TINYINT(1)` 的别名。

#### 布尔类型定义

布尔类型可以用来存储 `TRUE` 或 `FALSE`。在 MySQL 中：

- `TRUE` 实际上是数值 `1`
- `FALSE` 实际上是数值 `0`

#### 使用布尔类型的示例

例如，我们在处理电商系统中的商品发布状态时，可以使用布尔类型来表示商品是否已发布。

1. 定义 `BOOLEAN` 类型的列：

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_published BOOLEAN DEFAULT FALSE
);
```

2. 使用布尔值更新列：

```sql
-- 将商品状态更新为已发布
UPDATE products
SET is_published = TRUE
WHERE product_id = 1;
```

3. 也可以直接使用数值 `1` 和 `0` 来表示 `TRUE` 和 `FALSE`：

```sql
-- 将商品状态更新为未发布
UPDATE products
SET is_published = 0
WHERE product_id = 1;
```

#### 布尔类型的实际表现

由于 `BOOLEAN` 实际上是 `TINYINT(1)` 的别名，MySQL 会将布尔值 `TRUE` 和 `FALSE` 解释为数值 `1` 和 `0`。因此，我们可以在查询时对布尔列使用数值运算，例如：

```sql
-- 查询所有已发布的商品
SELECT *
FROM products
WHERE is_published = 1;

-- 查询所有未发布的商品
SELECT *
FROM products
WHERE is_published = 0;
```

#### 总结

虽然 MySQL 支持 `BOOL` 和 `BOOLEAN` 关键字，但它们只是 `TINYINT(1)` 的别名，`TRUE` 和 `FALSE` 分别表示 `1` 和 `0`。在电商系统等场景中，可以使用布尔类型来存储状态标志，例如商品是否上架、订单是否完成等。

### 11.5 枚举和集合类型(Enum and Set Types)

在电商系统中，我们经常会遇到需要将某些列的值限制在特定选项内的情况。例如，产品的“规格”字段可能只允许“small”、“medium”、“large”三种值。在这种情况下，可以使用 `Enum` 或 `Set` 类型。

#### 1.Enum 枚举类型

`Enum` 是一种列类型，它允许在有限的字符串列表中选择一个值。适合用于只允许一个值的情况。例如，在 `products` 表中，我们可以使用 `Enum` 来限制产品尺寸为“small”、“medium”或“large”。

**示例：**

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    size ENUM('small', 'medium', 'large')
);
```

在该示例中，`size` 列仅允许填写 `'small'`, `'medium'`, `'large'` 三种值。**若插入不在此列表中的值，MySQL 将返回错误**。

**优缺点：**

- **优点**: 可以确保列中的数据仅在规定的范围内，避免数据错误。
- **缺点**:
  - 改变枚举项较为麻烦。例如，如果需要新增一个选项，MySQL 需要重新构建整个表，这在数据量较大的情况下会导致性能问题。
  - 枚举值无法复用。如果有多张表需要类似的枚举项，必须在每张表中单独定义。
  - 枚举项无法附加其他属性（如产品规格的实际尺寸），这限制了它的灵活性。

**推荐做法：**
相比使用 `Enum`，通常更推荐将这些限定值存储在一个单独的表中。例如，创建一个 `sizes` 表来存储所有的可能规格，便于维护和扩展。这不仅能提高可扩展性，还能通过外键关联实现数据完整性。

**示例：**

```sql
CREATE TABLE sizes (
    size_id INT AUTO_INCREMENT PRIMARY KEY,
    size_name VARCHAR(50) NOT NULL
);

INSERT INTO sizes (size_name) VALUES ('small'), ('medium'), ('large');
```

#### 2.Set 集合类型

`Set` 是另一个与 `Enum` 类似的类型，不同的是，`Set` 允许在一个列中存储多个值。例如，如果某个产品有多个颜色选项，可以使用 `Set` 存储多个颜色值。

**示例：**

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    colors SET('red', 'green', 'blue', 'black', 'white')
);
```

在 `colors` 列中，可以同时存储多个颜色值，例如 `'red,green'` 或 `'blue,white'`。

**优缺点：**

- **优点**: 允许在一个列中存储多个值，适合多选情况。
- **缺点**:
  - 与 `Enum` 类似，修改 `Set` 类型的选项非常困难。
  - 查询和操作 `Set` 类型的数据较为复杂，且容易出现维护问题。

**推荐做法：**
尽量避免使用 `Set` 类型。相同的效果可以通过创建一个关联表来实现。例如，使用产品表和颜色表之间的多对多关系来存储多个颜色值。

**示例：**

```sql
CREATE TABLE colors (
    color_id INT AUTO_INCREMENT PRIMARY KEY,
    color_name VARCHAR(50) NOT NULL
);

CREATE TABLE product_colors (
    product_id INT,
    color_id INT,
    PRIMARY KEY (product_id, color_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (color_id) REFERENCES colors(color_id)
);
```

#### 3.总结

虽然 MySQL 支持 `Enum` 和 `Set` 类型，但它们在实践中存在维护困难、无法扩展的问题。更推荐的做法是创建单独的查询表来存储这些限定值。通过这种方式，可以更灵活地管理数据，尤其是当数据规模变大或业务需求发生变化时。

### 11.6 日期与时间类型 (Date & Time Types)

在电商系统中，处理订单、支付、发货等操作时，日期和时间是非常重要的数据类型。MySQL 提供了多种用于存储日期和时间的数据类型，以满足不同场景的需求。以下是 MySQL 中常用的日期与时间类型：

#### 1. `DATE`

`DATE` 类型用于存储没有时间成分的日期，格式为 `YYYY-MM-DD`，例如 `2024-08-19`。它适合用于记录生日、纪念日等只关心日期而不关心具体时间的场景。

**示例**：

```sql
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE
);
```

在这个示例中，`order_date` 用来记录订单的日期，不包括时间。

#### 2. `TIME`

`TIME` 类型用于存储一天中的时间，格式为 `HH:MM:SS`，例如 `14:30:00`。它适合用于记录特定时间点，比如某活动的开始时间。

**示例**：

```sql
CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_time TIME
);
```

在这个示例中，`event_time` 用来记录活动的具体时间，不包括日期。

#### 3. `DATETIME`

`DATETIME` 类型用于同时存储日期和时间，格式为 `YYYY-MM-DD HH:MM:SS`，例如 `2024-08-19 14:30:00`。它占用 8 个字节，适合用于记录精确的事件时间，如订单创建时间、支付时间等。

**示例**：

```sql
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    payment_date DATETIME
);
```

在这个示例中，`payment_date` 用来记录支付的具体日期和时间。

#### 4. `TIMESTAMP`

`TIMESTAMP` 类型类似于 `DATETIME`，但它是专门用于记录某行数据的插入时间或最近的更新时间。`TIMESTAMP` 类型占用 4 个字节，存储的是从 `1970-01-01 00:00:01 UTC` 到 `2038-01-19 03:14:07 UTC` 之间的时间。如果你需要记录和处理 UTC 时间戳或者数据库中的自动更新时间，`TIMESTAMP` 是个不错的选择。

**示例**：

```sql
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

在这个示例中，`created_at` 用来记录用户的创建时间，而 `updated_at` 会自动更新为最后一次更新记录的时间。

#### 5. `YEAR`

`YEAR` 类型用于存储四位数年份，格式为 `YYYY`，例如 `2024`。它非常适合用于记录年份，比如记录产品的生产年份、年度销售数据等。

**示例**：

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    manufacture_year YEAR
);
```

在这个示例中，`manufacture_year` 用来记录产品的生产年份。

#### 6.选择合适的日期与时间类型

- 如果只需要记录日期或时间，选择 `DATE` 或 `TIME`。
- 如果需要记录精确的日期和时间，并且需要处理超出 2038 年的日期，选择 `DATETIME`。
- 如果需要记录行的创建或更新时间，选择 `TIMESTAMP`。
- 如果只需要记录年份，选择 `YEAR`。

这些日期与时间类型可以帮助你更好地管理和组织电商系统中的时间相关数据。根据具体业务需求选择合适的类型，可以提高数据的存储效率和查询性能。

### 11.7 Blob 类型 (Blob Types)

在电商系统中，有时候我们需要存储图片、视频、PDF 等二进制文件，这时就会用到 `Blob`（Binary Large Object，二进制大对象）类型。`Blob`类型专门用于存储大量二进制数据。MySQL 提供了四种 `Blob` 类型，分别根据能够存储的最大数据量有所不同。

#### 1. Blob 类型及其区别

1. **`TINYBLOB`**

   - 存储容量：最大 255 字节
   - 用于存储非常小的二进制文件，如缩略图、非常短的音频片段等。

2. **`BLOB`**

   - 存储容量：最大 65KB
   - 适合存储中小型文件，如小型图片或简单文档。

3. **`MEDIUMBLOB`**

   - 存储容量：最大 16MB
   - 用于存储较大的文件，如较高质量的图片、短视频文件等。

4. **`LONGBLOB`**
   - 存储容量：最大 4GB
   - 适合存储超大文件，如高清视频、完整的 PDF 书籍或大型数据库备份文件。

**示例**：

```sql
CREATE TABLE product_images (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    image LONGBLOB
);
```

在这个例子中，`image` 列被定义为 `LONGBLOB`，可以用于存储与产品相关的大尺寸图像。

#### 2.是否应将二进制文件存储在数据库中？

尽管 `Blob` 类型可以存储二进制文件，但通常并不建议将文件直接存储在数据库中，原因如下：

1. **数据库性能问题**：存储大量二进制文件会导致数据库的大小迅速膨胀，进而影响查询和处理速度。
2. **备份复杂性**：备份和恢复大型二进制文件会使数据库操作更加复杂和耗时。
3. **额外的代码维护**：将文件存储在数据库中需要编写额外的代码来处理文件的读取和写入，增加了系统的复杂性。

#### 3.推荐方案

- **文件存储系统**：更好的做法是将文件存储在文件系统或云存储服务中，并在数据库中保存这些文件的路径或链接。这样既能保持数据库的高效性，又能更方便地管理和扩展文件存储。

例如，在电商系统中，可以将产品图片、视频等文件存储在云存储（如阿里云 OSS、亚马逊 S3 等）中，而数据库只需要存储文件的访问路径：

```sql
CREATE TABLE product_files (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    file_path VARCHAR(255) -- 存储文件路径
);
```

这样做既能保持数据库的高效，也能方便管理大量二进制文件。

### 11.8 JSON 类型 (JSON Type)

在现代电商系统中，产品往往具有多种属性，例如尺寸、颜色、重量等。这些属性有时因产品而异，使用传统的数据库表结构难以灵活地存储这些动态属性。此时，MySQL 的 `JSON` 类型提供了一种解决方案。

`JSON`（JavaScript Object Notation）是一种轻量级的数据交换格式，广泛应用于网络和移动应用中。MySQL 支持 `JSON` 数据类型，使得在数据库中存储和查询 JSON 数据变得更加简便。

#### 1. JSON 数据结构

`JSON` 对象使用大括号 `{}` 来表示，包含键值对的集合。键是字符串，必须用引号括起来，值可以是字符串、数字、布尔值、数组或其他 JSON 对象。

```json
{
  "key": "value"
}
```

#### 2. 在 MySQL 中使用 JSON

假设我们有一个产品表 `products`，需要存储一些额外的属性，比如尺寸、重量、制造商等。我们可以在表中添加一个 JSON 列来存储这些信息。

**示例：创建 JSON 对象并更新表**

- **方法 1：直接插入 JSON 数据**

  ```sql
  UPDATE products
  SET properties = '
  {
      "dimensions": [1, 2, 3],
      "weight": 10,
      "manufacturer": {
          "name": "sony"
      }
  }'
  WHERE product_id = 1;
  ```

- **方法 2：使用 MySQL 的 JSON 函数**
  ```sql
  UPDATE products
  SET properties = JSON_OBJECT(
      'weight', 10,
      'dimensions', JSON_ARRAY(1, 2, 3),
      'manufacturer', JSON_OBJECT('name', 'sony')
  )
  WHERE product_id = 1;
  ```

#### 3. 从 JSON 对象中提取数据

MySQL 提供了多种方式来提取 JSON 对象中的数据：

- **使用 `JSON_EXTRACT` 函数**

  ```sql
  SELECT product_id, JSON_EXTRACT(properties, '$.weight') AS weight
  FROM products
  WHERE product_id = 1;
  ```

- **使用简化语法**

  ```sql
  SELECT product_id, properties -> '$.weight' AS weight
  FROM products
  WHERE product_id = 1;
  ```

- **访问嵌套属性**
  ```sql
  SELECT product_id, properties ->> '$.manufacturer.name' AS manufacturer_name
  FROM products
  WHERE product_id = 1;
  ```

#### 4. 更新 JSON 对象中的值

MySQL 提供了 `JSON_SET` 函数，可以在 JSON 对象中添加或更新键值对：

```sql
UPDATE products
SET properties = JSON_SET(
    properties,
    '$.weight', 20,
    '$.age', 10
)
WHERE product_id = 1;
```

#### 5. 删除 JSON 对象中的键值对

如果需要删除 JSON 对象中的某个属性，可以使用 `JSON_REMOVE` 函数：

```sql
UPDATE products
SET properties = JSON_REMOVE(properties, '$.age')
WHERE product_id = 1;
```

#### 6. JSON 类型的应用场景

在电商系统中，`JSON` 类型特别适用于存储动态且多变的产品属性，例如：

- 存储不同类别产品的特定属性，如服装的尺寸和颜色，电子产品的规格和重量等。
- 存储复杂的嵌套结构数据，如产品的多级分类、属性集等。

#### 7. 优点与建议

- **灵活性**：使用 `JSON` 类型可以灵活存储多变的属性，避免在数据库中频繁添加新列。
- **简化查询**：可以直接查询和操作 JSON 数据，减少代码的复杂度。
- **注意性能**：虽然 `JSON` 提供了很大的灵活性，但在查询和更新大量 JSON 数据时，可能会影响性能。因此，在需要频繁操作的情况下，考虑是否应将 JSON 数据结构化。

总结来说，MySQL 的 `JSON` 类型提供了强大的功能，使得处理复杂、动态的数据变得更加简单和灵活，在电商系统等需要灵活数据结构的应用中，JSON 是一个非常有用的工具。

## 9.数据库设计 (Database Design)

有时我们需要从头开始设计一个数据库，或者向现有数据库添加新表，我们要学会如何设计结构良好的数据库，一个设计良好的数据库需要在开始进行一些规划，并且这可能需要一些时间，但是这对能否成功设计应用程序起到关键作用，如果能合理设计数据库，我们就可以轻松的围绕它进行开发，来支持新的业务需求，方便轻松的查询提取有用的信息，并且我们的查询会快速的进行
反而言之，一个糟糕的数据库需要大量的维护，并且维护成本会随着时间的推移增加，最终让我们无法展开新的业务需求

### 9.1 数据建模(Data Modelling)

#### 1.数据库的构建过程

数据建模，就是为了要存储在数据库中的数据创建模型的过程，它包括四个步骤

**分析理解和业务需求(Understand the requirements)**

> 最重要的一步
>
> 不幸的是，很多开发人鱼会跳过第一步，直接在数据库中建表，但这一步恰恰是数据建模中最重要的一步，这是一个漫长的需要话时间的过程，但是，我们越是了解业务问题，就越能更好的找到解决方案，也就是我们的数据库

在考虑表和列的问题之前，我们需要充分了解业务需求，我们需要多和业务参与方、领域专家，甚至终端用户谈谈，查看现有的表单、文档、应用程序、电子表格、数据库，和几乎一切关于我们要解决的问题领域的内容。
一旦收集了所有这些信息，下一步就是构建业务的概念模型。

**构建业务的概念模型(Build a Conceptual Model)**

其包括识别业务中的实体、事物或概念以及它们之间的关系，概念模型只是我们所用概念的一种视觉表示，用于与共事的人交流，用来确保进度一致，一旦我们建立了概念模型，就要再完善它，以生成一个数据 模型或数据结构用以存储数据，这就是我们所说的逻辑模型

**构建逻辑模型(Build a Logical Model)**

逻辑模型是独立于数据技术的抽象数据模型，它只显示我们需要的表和列，接下来，我们要改进这个逻辑模型

**构建实体模型(Build a Physical Model)**

第四步，我们需要为特定的数据库管理系统构建一个实体模型，实体模型是围绕特定数据库技术的逻辑模型的实现，在这个模型中，我们需要具备由数据库技术支持的确切的数据，列默认值（不管他们是不是允许空值），表主键，以及其他对象，如视图、存储过程，触发器等等，所以实体数据模型对于 MySQL 这样的数据库来说是非常特殊的

#### 2.概念模型(Conceptual Models)

**示例**：如果我们想建立一个销售在线课程的网站，让人们可以注册登记一个或多个课程，一个课程可以有多个标签，如前端或后端。

为了给这个网站构建数据库，我们首先要创建一个概念模型，来表示业务中的实体、事物或概念，以及它们之间的关系，通常这些实体包括人、事物、位置等等，那我们这个案例有什么概念或实体呢，首先咋一看我们可以随便 选几个实体，学生和课程，这是这个领域里需要了解的概念

我们还要找一种可视化的方式观察这些实体及他们之间的关系，通常有两种方法

我们可以使用 Enitity Relationship(ER)实体关系图或者 UML 图(标准建模语言图)，这两种方法都可以视觉直观的展示概念，实体关系图常用于数据建模 UML 是`unified modeling languages(标准建模语言)`的缩写，它使用的范围远远超出的数据建模，有些人更喜欢 UML 图，有些人更喜欢实体图，在构建和逻辑数据模型时，它们都很优秀

**这里我们使用 ER**，有各种各样的工具可以用于创建实体关系图，win 有 Visio，还有一些流行的在线工具，如 draw.io 或 LucidCharts

**这里我们使用 draw.io**，mac 端可下载开源 app

我们在实体关系栏下选出实体，双击 Entity 更改名称为 student，并在框中列出姓名、邮箱、注册日期，也就是需要知道的关于每个学生的属性

```scss
+------------------+
|    [Student]     |
|    name          |
|    email         |
|    dateRegistere |
+------------------+
```

这只是一个我们用来和业务参与人交接的概念模型，命名格式统一即可，同时，我们需要明白，数据建模是一个迭代的过程，我们很难在第一次尝试中就找到完美的设计，所以我们会不断在业务需求和模型之间来回切换，并不断改进它，就如同上面这三个属性 ，后面我们可能会新增属性，或者重命名或者删除一些属性

我们再添加一个课程属性

- **课程**：课程名、价格、导师、标签

```scss
+-----------------+
|     [Course]    |
|     title       |
|     price       |
|     instructor  |
|     tags        |
+-----------------+
```

接下来我们需要定义这两个实体之间的关系 。

我们选择 Many to Many 的 Line 来链接两个标签页，同时给这段关系起标签为 enroll。

```scss
+------------------+                     +-----------------+
|    [Student]     | \                 / |     [Course]    |
|    name          | -------enroll------ |     title       |
|    email         | /                 \ |     price       |
|    dateRegistere |                     |     instructor  |
+------------------+                     |     tags        |
                                         +-----------------+
```

我们从左到右查看这段关系，意为学生注册课程。

这就是一个概念模型，它能让我们对业务领悟和领域涉及内容有一个高度概览。至此，我们还没有对每个属性类型的细节做出说明，我们既不知道也不关系未来会使用什么数据库管理系统来完成这个模型，现在仅仅是一个模型，我们用它来和商业参与方交接，让我们能处于同一个层次，也能让对方理解自己的表达内容，这些是概念模型的好处，接下来 我们会使用这个概念模型来构建一个逻辑模型

#### 3.逻辑模型(Logic Model)

为了生成一个数据模型或数据结构来存储我们的数据，现在我们对这个概念模型进行改进。

**逻辑模型**基于独立数据库技术，所以我们称之为逻辑数据库模型，它只是一个抽象数据模型，能清楚的显示我们实体及关系架构，但是它比**概念模型**更细节，以后当我们选择一个 MySQL 这样的数据管理系统时，我们会为了操作这个特定数据库管理系统，改进这个逻辑模型。

在逻辑模型中，首先我们要指定每个属性的类型，就像字符串 、整数、浮点型，日期等等，例如学生的名字是字符串，所以我们在这里的括号内输入字符串，而不是 varchar，因为 varchar 是 一种实现细节，它是 MySQL 的一种数据类型，但是这个逻辑模型独立于数据技术，所以我们 不用 varchar，同样的，电子邮件是一种字符串，所以我们在这里也输入字符串，而注册日期是日期类型。通常，把一个属性(比如姓名)分为多个属性 (比如名字和姓氏)是很有帮助的，这样我们可以很容易的根据学生 的名字或者姓氏进行查询或排序，相反，如果单一属性存储全名，之后不得不经历提取名字或者姓氏这一麻烦的过程，我们的查询会因此变得复杂和费事，当我们有一个地址属性时也是同理，你应该把它拆分成更小的部分，如街道、城市、邮政编码、国家 等等，这样我们就可以在这些单独的属性上进行查询。那么我们把名字属性拆分为名字和姓氏。

```scss
+---------------------------+
|        [Student]          |
|   firstName (string)      |
|   lastName (string)       |
|   email (string)          |
|   dateRegistere (string)  |
+---------------------------+
```

接下来，我们要指定实体之间关系的类型，我们有三种主要的关系
　　分别是一对一 ，一对多 和多对多，其他类型都可以算作这三种类型的变体

```scss

------------------- Ono-to-one


                  /
------------------- One-to-many
                  \

\                 /
------------------- Many-to-many
/                 \
```

当前的案例中，学生和课程之间是一种多对多的关系，因为一个学生可以注册多门课程，一门课程也可以容纳很多下学生。

如果我们像改变这种关系类型，可以选择它，在右侧下拉列表选择关系类型，这里有很多不同的形状，因为 draw.ox 至此很多种不同的可视化语言，其中有些图标来源于 UML(统一建模语言)，如果我们搞不清楚，可以把鼠标悬停在左侧的每种关系上查看。

在这个逻辑模型中，我们应该清楚地明确实体之间的关系类型，而在概念层面这一点不重要，在概念层面，我们只需要在实体之间安置一条直线，类型并不重要。

现在我们的逻辑模型图中还少了某样东西，即学生注册课程的日期，我们不能(我感觉可以)把它放在学生那里，因为一个学生可能会选修好几门课程，那样我们就需要为没门课程设置一个不同属性，我们无法提前知道每个学生要注册多少门课，我们也不能把它置于课程实体，因为每个学生的注册日期不尽相同，所以注册日期不能算是课程的一种属性，而是注册的一种属性，它是一种学生和课程之间关系的属性，这是一个现实世界中很常见的情况，而很多数据建模人员都不能很好的 get 到。

所以我们要用一种新实体，来代表学生和课程之间的关系，我们再加一个图标，并命名为注册。在这个实体中，要有一个属性叫做日期，它的类型是时间类型。

```scss
+----------------------+
|     [Enrollment]     |
|    date (dateTime)   |
+----------------------+
```

然后我们重建这些图表之间的关系，但是每项注册都是针对某一特定学生所以学生和注册之间是一种一对多关系，因为 一个学生可以有多门注册课程，所以我们用一对多的连接线将两者连接，类似的，一门课程也可以被注册很多次，但每次注册都是针对某一特定课程，所以要再添加一个一对多关系。

```scss
+---------------------------+                 +-----------------+
|        [Student]          |                 |     [Course]    |
|   firstName (String)      |                 |     title       |
|   lastName (String)       |                 |     price       |
|   email (String)          |                 |     instructor  |
|   dateRegistere (String)  |                 |     tags        |
+---------------------------+                 +-----------------+
          |                                           |
          |                                           |
          |                                           |
          |     +---------------------------+         |
          |   / |      [Enrollment]         | \       |
          +---- |    date (dateTime)        | --------+
              \ |                           | /
                +---------------------------+

```

之前的多对多关系变成了两个一对多的关系

注册实体，清楚的表明了一个学生对某门课的注册情况，同时课程定价也会随时间变动，所以每个学生可能会以不同的价格购入一门课，这时，我们把价格属性放在注册实体中，记录学生在注册一门课程时的价格，它的类型是 float，在当前层面，我们不用在意他在 MySQL 或者任何其他的 DBMS，所以我们添加上 float，而在 MySQL 中，我们会使用 decimal 类型，再别的 DBMS 中可能会有其他类型，而逻辑模型中并不在意这些，逻辑模型只是一个抽象的数据结构

对比概念模型和逻辑模型，概念模型并不能真正为我们提供存储数据的结构，它只代表业务实体及其关系，我们用它来帮助解决问题域，以便和域专家交流。逻辑模型为我们的概念模型增加了更多细节，这样我们几乎了解大抵结构或什么表需要用来存储数据，这里用到的实体，最终会以表格的形式出现在我们的数据库中

```scss
+--------------------------+            +------------------------+
|       [Student]          |            |       [Course]         |
|  firstName (string)      |            |  title (string)        |
|  lastName (string)       |            |  price (float)         |
|  email (string)          |            |  instructor (string)   |
|  dateRegistere (string)  |            |  tags (string)         |
+--------------------------+            +------------------------+
          |                                             |
          |                                             |
          |                                             |
          |     +--------------------------+            |
          |   / |       [Enrollment]       | \          |
          +---- |  date (dateTime)         | -----------+
              \ |  price (float)           | /
                +--------------------------+
```

#### 4.实体模型 Physical Models

##### 1.基础准备

这一节，我们使用逻辑数据模型，并在 MySQL 中创建一个实体数据模型，在 MySQL 工作台上，点击 File，选择 New Model

这里的 EER 是`enchance entity relationship`增强实体关系的缩写

默认情况下 ，这个模型假设了一个名为 mydb 的数据库，我们可以右键单击转到编辑模式来重命名，我们把这个数据库的名字改为`school`，这里我们并没有创建数据库，这里只是一个模型，或者那个数据库的实体模型

然后我们在上面添加一个新图，点击 EER 下方的 Add Diagram，找到添加新表的图表，拖出来一个，将其重命名为`students`，关于命名规则，建议使用复数名称，因为表是多个实体容器，单数也可以，保持前后一致即可。同时，优先遵守工作环境的约定，否则很容易增加开发和维护的成本，我们必须一直记得一个表面到底是单数还是复数。在这里，我们用单数名称命名实体，在实体模型中，我们用复数名称命名表格

我们根据之前创建的逻辑模型，添加属性`first_name`，这里我们遵循 MySQL 的惯例，即用下划线分隔不同的单词，这里我们设置 Datatype 为`VARCHAR(50)`，这里我们对字符串设定标准长度，而对于较短的字符串，比如用户名，密码，名字，设置成 50，对于中等长度的字符串，设置成 255

默认情况下，MySQL 将我们第一次添加的`first_name`标记成了`PK(primary key)`主键，我们在后面会讲到主键，在这里，我们取消`PK`，同时它被标记成了`NN`非空，意思是这列不能允许空值

然后我们添加第二列`last_name`，数据类型也是`VARCHAR(50)`，我们把这列标记为`NN`，然后添加`email`，数据类型`VARCHAR(255)`，同时标记`NN`，最后加上`date_registered`注册日期，数据类型为`DATETIME`，这样可以存储这名学生注册的日期和时间，标记为`NN`

在当前层面在这个实体模型上，我们确定了 MySQL 里的确切类型，我们也知道某列是否允许空值，我们还可以设置默认值，这就是实体模型和逻辑模型之间的区别，逻辑模型是与数据库技术无关的

如下就是学生表的最终结果

```scss
+------------------------------+
|          [students]          |
|   first_name VARCHAR(50)     |
|   last_name  VARCHAR(50)     |
|   email      VARCHAR(255)    |
|   date_registere DATETIME    |
+------------------------------+
```

在这个实体模型中添加我们在之前逻辑模型中定义好的其他实体，暂时不处理它们的关系，只用添加它们的表和列

```SCSS
+-----------------------------+
|          [courses]          |
|   title       VARCHAR(255)  |
|   price       DECIMAL(5,2)  |
|   instructor  VARCHAR(50)   |
|   tags        VARCHAR(255)  |
+-----------------------------+

+-----------------------------+
|        [enrollments]        |
|   date        DATETIME      |
|   price       DECIMAL(5,2)  |
+-----------------------------+
```

这里我们把注册实体中的注册日期换成了日期，因为那样会有点重复和多余，很多数据建模人员为列名添加表名的前缀，比如注册日期，注册价格，这样做 没必要，而且会让代码看起来不清爽，日期是注册的一种属性 ，而不是注册日期，这列的类型是日期时间型，所以某人注册这门课的日期和时间都能存储，这里未来保持一致性，两个`price`我们都是用了`DECIMAL(5,2)`。**接下来我们要为每张表添加一个主键，然后定义这些表之间的关系。**

##### 2. 主键(Primary Keys/PK)

现在我们要为每张表添加一个主键，正如我们所知道的，主键，是唯一标识给定表里每条记录的列。

那么我们用什么来表示学生呢，首先我们不能用名字，因为有许多人可以有同一个名字，姓氏也是如此，如果我们使用名字和姓氏的组合当作主键，这就是我们 所说的复合主键，复合主键包含多个列，这里也不能依赖名字和姓氏的组合，因为两个人可以有相同的全名。
　　如果我们使用电子邮件当作主键，确实可以唯一标识每一个学生，但是电子邮件的问题是，它的字符长度可能过长了，而且当我们在这两张表添加关系时，这张表的电子邮件，会在注册表中重读出现，所以每次有学生注册课程，电子邮件会在注册表中反复出现，这不够优化 ，因为那样就是在重复好几个字符，此外，理想状态下主键不能更改，因此它的值应该永远不变，所以电子邮箱不是主键的好选择，因为学生以后是可以更改它们的电子邮件的。

像这样的情况，我们引入一个新列 ，称为 id 列 ，并将其作为主键，这里，我们添加一个新列`student_id`，数据类型为 INT 整数类型，它最多允许十亿条记录，能够应付大部分情况，但是也得看具体情况，不是硬性规定，我们将该属性标记为`PK`主键，勾选上`PK`主键时，系统会默认帮我们勾选上`NN`非空，因为主键必须有一个唯一识别每条记录值，同时为其勾选`AI`自动递增列，让 MySQL 自动为这列生成值，这会方便我们往这张表中插入记录，不用担心值的唯一性，按照惯例，我们应该先写主键，这会让我们更容易理解自己的设计架构，我们将其移动到最上方。

```scss
+------------------------------+
|        [students]            |
|(PK) student_id   INT         |
|    first_name    VARCHAR(50) |
|    last_name     VARCHAR(50) |
|    email         VARCHAR(255)|
|    date_registere DATETIME   |
+------------------------------+
```

现在我们需要为课程表添加主键，同样的，我们不能依赖这里的任何属性或列，因此要添加一个名为`course_id`的新列，类型为整数，将它标记为主键，同时为其勾选`AI`自动递增列，让 MySQL 自动为这列生成值，这会方便我们往这张表中插入记录，不用担心值的唯一性，最后将其移动到最上方。

```scss
+-----------------------------+
|         [courses]           |
|(PK) course_id   INT         |
|    title        VARCHAR(255)|
|    price        DECIMAL(5,2)|
|    instructor   VARCHAR(50) |
|    tags         VARCHAR(255)|
+-----------------------------+
```

##### 3.Foreign Keys 外键

注册表添加主键有两个选项，在没给注册表添加主键之前，我们先了解学生和注册表之间的关系。

在这里，学生表和注册表，两者之间是一对多关系，意思是一个学生可以注册很多次，在左侧，我可以找到一对多的`line`图表，当我们在两个表之间添加关系时，关系的一端成为父表或主键表，另一端称为子表或外键表，这种情况下，学生表是父表或者主键表，因为我们不能在没有学生的情况下进行注册，现在添加关系时，**这里我们需要先选择外键表**，如果忘记了只需要看状态栏，状态栏写了，选择一张表获取外键。

步骤：先选中右侧`1：n`，然后点`enrollments`表，再点`students`表

> 1.Select the Table to receive the Foreign Key.
>
> 2.'enrollments' selected. Please select the Referenced Table.

```SCSS
+------------------------------+      +-----------------------------+
|        [students]            |      |         [courses]           |
|(PK) student_id   INT         |      |(PK) course_id   INT         |
|    first_name    VARCHAR(50) |      |    title        VARCHAR(255)|
|    last_name     VARCHAR(50) |      |    price        DECIMAL(5,2)|
|    email         VARCHAR(255)|      |    instructor   VARCHAR(50) |
|    date_registere DATETIME   |      |    tags         VARCHAR(255)|
+------------------------------+      +-----------------------------+
          |                                             |
          |                                             |
          |     +-------------------------+             |
          |   / |      [Enrollment]       | \           |
          +---- |    date DATETIME        | ------------+
              \ |    price DECIMAL(5,2)   | /
                |(FK) student_id   INT    |
                +-------------------------+
```

现在，这两张表之间是一对多关系，在我们添加这层关系的时候，MySQL 在`enrollments`添加了新的一列`student_id`，这大抵告诉了我们，这列引用了学生表的学生 id 列，这样我们就知道是谁注册的，每次我们在这个表中插入记录，我们在这列中存储了那位学生的 id，该属性的标记为红色，因为它是注册表中的外键，所以外键是在一张表中引用了另一张表主键的那列

我们需要重复上一个添加一对多的步骤，为`courses`和`enrollments`添加一层关系，于是，`enrollments`内多了一个`couse_id`的属性。

```scss
+------------------------------+      +-----------------------------+
|        [students]            |      |         [courses]           |
|(PK) student_id   INT         |      |(PK) course_id   INT         |
|    first_name    VARCHAR(50) |      |    title        VARCHAR(255)|
|    last_name     VARCHAR(50) |      |    price        DECIMAL(5,2)|
|    email         VARCHAR(255)|      |    instructor   VARCHAR(50) |
|    date_registere DATETIME   |      |    tags         VARCHAR(255)|
+------------------------------+      +-----------------------------+
          |                                             |
          |                                             |
          |     +-------------------------+             |
          |   / |      [Enrollment]       | \           |
          +---- |    date DATETIME        | ------------+
              \ |    price DECIMAL(5,2)   | /
                |(FK) student_id   INT    |
                |(FK) course_id   INT     |
                +-------------------------+
```

我们可以看到，实体模型比逻辑模型多了更多的细节，在逻辑层中，我们并不需要管主键、外键问题，因为这些是实现的细节

现在我们就可以在注册表中添加一个主键了，这里有两个选择，第一种方法是使用学生 id 和课程 id 的组合，来唯一标识每次的注册，这样使用了复合主键，另一种方法是引入一个名为注册 id 的新列，如同学生 id 和课程 id 一样，我们可以把它设置为自动递增。我们得看情况来判断那种方法更好，没有硬性的规定，复合主键的好处是，它可以防止我们意外为同一个学生重复注册同一门课，因为表的主键不能重复，它们必须是唯一的，每个主键唯一识别了给定表中的每条记录，所以如果我们在这里使用复合主键，我们可以防止不良数据被插入这个表格，这是它的优点，缺点是，如果未来出现别的表了，注册表和那张新表之间会存在一种关系，而这两个键需要在那个表中作为外键重复出现，就如同这张表的`student_id`一样，所以当我们在学生表和注册表添加一个关系时，MySQL 自动将学生 id 列添加为了外键，所以如果我们以后再在这添加了另一张表，并在这两张表之间建立的父子关系，那么这两个键就必须在那张表中重复，根据不同的情况，这可能并不是一件坏事，它取决于数据量，以及那张表是否还有另一张子表。另一方面，如果我们引入了一个新列，比如注册 id，就不会有那个问题，所以如果未来再出现了另一张表，而注册表和那张表之间也存在父子关系，我们只需要重复注册 id，这样我们就只重复了一个值，重复了一个整数，而不是两个数

不过，目前我们的设计中没有这样的表，所以没有必要设计未来永远不会发生的假设场景，所以在这个例子中，我们使用复合主键，因为我们可以获得这个直接好处即保护这张表不受不良数据的影响，并且我们这里没有子表，不用担心这两个键在别的地方重复，如果以后有了 ，我们可以随时回来重新审计这套设计，我们可以写变更脚本来更新设计。

所以我们双击注册表，将`student_id`和`course_id`添加主键并上移，注意这里虚线变为了实线。

```scss
+------------------------------+      +-----------------------------+
|        [students]            |      |         [courses]           |
|(PK) student_id   INT         |      |(PK) course_id   INT         |
|    first_name    VARCHAR(50) |      |    title        VARCHAR(255)|
|    last_name     VARCHAR(50) |      |    price        DECIMAL(5,2)|
|    email         VARCHAR(255)|      |    instructor   VARCHAR(50) |
|    date_registere DATETIME   |      |    tags         VARCHAR(255)|
+------------------------------+      +-----------------------------+
          |                                             |
          |                                             |
          |     +-------------------------+             |
          |   / |      [Enrollment]       | \           |
          +---- |(FK) course_id   INT     | ------------+
              \ |(FK) student_id   INT    | /
                |    date DATETIME        |
                |    price DECIMAL(5,2)   |
                +-------------------------+
```

##### 4.Foreign Key Constraints 外键约束

每当我们的表中有外键，我们需要为外键设置约束，它本质上可以保护你的数据不受损坏。

我们打开注册表，里面有两个外键，一个是学生 id，它引用了学生表中的学生 id，另一个是课程 id，它引用了课程表中的课程 id，这两列的结合构成了这张表的主键，这辆列的结构构成了这张表的主键。

我们看最下面，可以找到这个外键标签页(`Foreign Keys`)，打开，我们能看到这里有两个外键，每个外键都有名称，默认命名为`fk_外键表_主键表`，所以第一个外键基于的是注册表和学生表的关系，我们这里也可以看到外键引用的表单`Referenced Table`，第二个为键是`fk_enrollments_courses1`，因为有时候 MySQL 会自动在结尾加上 1 或者 2，防止名字与数据库中的另外一个外键出现在冲突，因为所有的外键都有这个名字，而这个名字必须是我们数据库中唯一的，目前我们还没有真的生成任何内容，只是在处理三张简单的表，我们明确知道没有另一个同名的外键，所以我们重命名它删除后方的 1

在中间一栏，我们看到第一个外键此表的学生 id 列。右边一栏有两个下拉列表，是关于父表中对应的记录被更新或者删除时的操作，例如当学生 id 从 1 变为 2 时需要什么操作，虽然改变主键一种陋习，但是万一某张表的主键变了，我们像要确保外键也随之更新，所以如果一个学生的 id 从 1 变为 2，我们想要确保那位学生的所有注册记录都被更新 ，引用学生 2，所以在第一个下拉列表中，选择`CASCADE`级联，这样，如果主键更改，MySQL 会自动更新子表中的记录，这里还有其他选项，第一个是`RESTRICT`限制，它会拒绝更新，另一种选择是`SET NULL`设为空值，如果学生 id 改变，外键会被设置为空值，这样会导致一条子记录，也就是这里的注册表失去了父表，我们称之为孤儿记录，我们不希望数据库中有任何孤儿记录，因为孤儿记录是不良数据，我们不知道这个注册时谁的，所以多数情况不用选择`SET NULL`这个选项，除非在非常特殊的情况下，最后一个是`NO ACTION`无操作，它和`RESTRICT`限制完全一样

我们把`On Delete`“删除时”的值设置为限制或者无操作，它们俩都会拒绝删除操作，所以只要我们有外键，就需要设置这两个约束，从而告诉 MySQL，当主键被更新或者删除时应该进行什么操作

一般来说，更新时设置为级联，删除的话得看情况，大多数我们还是想要拒绝删除操作 ，因为我们不想丢失数据，但在某些情况下这并不重要，是可以级联删除的。举个例子，假设我们有一个让人们为自己设置提醒的应用程序，所以它们注册，创建账户，并设置提醒，如果有人删除了它们的账户，我们可能并不在意它们设置的提醒，并删除它们，不用将其当作一条硬性规定，我们应该看业务情况决定，这就是为什么我们说了解业务序曲非常重要，可能我们的业务反馈来说不写删除任何提醒信息，因为想用历史数据生成报告，所以一定要记得确认业务要求

现在我们要为另一个外键`course_id`应用约束，我们把更新时设置为`CASCADE`“级联”，删除时设置为`NO ACTION`“无操作”，这样如果一门课程至少有一条注册记录，除非先删除注册，否则我们不能删除这门课程

### 9.2 标准化

目前我们为这个实体模型做了很多工作，但是在我们继续生成数据库表格之前，我们需要确保我们的设计是最优的，不允许存在冗余或重复的数据，因为冗余增加了数据库的大小，而且会使插入、更新和删除操作复杂化
　　例如 ，如果某个人的名字在许多不同的地方重复，然后他决定改名，那么我们需要更新几个不同的地方，否则数据会不一致，并且，它会生成无效报告，这就是标准化的意义所在
　　标准化是审查我们的设计，并确保它遵循一些防止数据重复的预定义规则的这一过程，基本上有七条规则，也被称为七范式，每条都假设我们已经采用了前面几条规则，对于 99%的应用场景，我们只需要应用前三条范式，这就本质要学的内容。

#### 1.First Normal Form(1NF)第一范式

**第一范式要求每一行的每个单元格都应该有单一值，且不能出现重复列**
　　课程里的标签列就违反了这个规则，因为我们会在这列中存储多个标记，并用逗号分隔它们，所以这个单元格属性中会存在多个值，如果我们用标签 1，标签 2，标签 3 这样的列，问题是我们无法提前知道每门课有多少标签，如果将来我们想再课程中添加第四个标签，就必须回到这里修改设计，另外，我们也不能保证这种情况不会再次发生，所以这张方法不具有拓展性，这就是为什么第一范式要求我们不能有重复列，要解决这个问题，我们需要把标签列从这张表中拎出来，并将其以一个名为标签的单独表建模，然后我们为标签课程添加多对多的关系。

我们新添加一个名为`tag`的表，将主键命名为`tag_id`，数据类型取决于我们在数据库中有多少标签，这是我们在做业务时需要搞清楚的问题。还有这些标签由终端用户还是管理员创建，如果它们由终端用户创建，就可能会迅速增加，但是这个案例中，让我们假设这些标签会由管理员创建，并且最多只有 50 到 60 个标签，这样的话，我们可以把这列设置为`TINYINT`微整属性，然后我们添加名称列，类型设为`VARCHAR(50)`，为了保持前后一致，数据类型为`NN`。

接下来我们需要在课程和标签表间添加一个多对多关系。

```scss
+---------------------------+
|        [tags]             |
|(PK) tag_id     TINYINT    |
|   name         VARCHAR(50)|
+---------------------------+

+-----------------------------+
|        [courses]            |
|(PK) course_id   INT         |
|    title        VARCHAR(255)|
|    price        DECIMAL(5,2)|
|    instructor   VARCHAR(50) |
|    tags         VARCHAR(255)|
+-----------------------------+
```

**Link Tables 链接表**

我们开始在课程和标签表之间添加“多对多”关系，然而在关系型数据库中，并没有“多对多”关系，只有“一对一”和“一对多”关系，所以为了实现两张表的多对多关系，我们需要引入一张新的表，称为链接表，那张表会有两段“一对多”关系，和这里的注册表完全一样

所以我们新加一张表，称为`course_tags`课程-标签，这张表确定了每门课程的标记，这样的话，课程表中只有课程，标签表中只有标签，在这张新表中，我们知道每门课程的标签

构建连结并重命名，因为课程和标签 id 的组合是唯一的，我们将他俩都标记为主键，链接表在关系型数据库中是很常见的，有时候它们只有两列，其他情况下 ，它们由额外列，就像我们的注册表，我们在这里引入来这张新表，于是，我们可以从课程表中删除标签列了

做了这些改动，我们的数据库就满足了第一范式

因为熟悉我们没有标签 1、标签 2、标签 3 这样的重复列，然后在一列里也没有多个值，我们所有的标签都存在了一个地方，如果我们需要重命名标签 ，这是我们唯一需要更新的地方 ，只有标签表中的一条记录，反之，之前的设计中，因为我们将标签作为字符串重复了，在课程表中，每个标签都出现好多次，这样标签比如“前端”就会在很多不同的地方出现，我们如果想为标签“前端”改名，比如说中间加一个连字符，就必须更新好几条课程记录，我们每次进行更新或删除操作时，MySQL 会锁定一行或者多行，如果套用之前的设计，我们的行会白白被锁定，如果是想用重命名一个标签 ，何必去锁定一门课程呢，如果我们想重命名一个标签，标签行 应该是唯一需要锁定的行

```scss
+---------------------------+
|        [tags]             |-----------------+
|(PK) tag_id     TINYINT    |                 |
|   name         VARCHAR(50)|                /|\
+---------------------------+        +---------------------------+
                                     |        [coutse_tags]      |
                                     |(FK) tag_id     TINYINT    |
+-----------------------------+      |(FK) course_id   INT       |
|        [courses]            |      +---------------------------+
|(PK) course_id   INT         |                \|/
|    title        VARCHAR(255)|                 |
|    price        DECIMAL(5,2)|                 |
|    instructor   VARCHAR(50) |-----------------+
|    tags         VARCHAR(255)|
+-----------------------------+
```

#### 2.Second Normal Form(2NF)第二范式

规则：要符合第一范式，并且它不能有任何取决于这组关系任何候选键的任何真子集的非空属性

第二范式要求**每张表都应该有一个单一目的**，即它只能代表且仅有一种实体类型 ，而那种表的每一列都应该用来描述那个实体

举个例子：我们的课程有这些列，课程 id，课程名和价格，所以它的单一目的是存储课程记录，此表中的每一列都是课程的一种属性，所以这些列描述了一门课程，但是如果有一列叫做注册日期，它并不是课程属性或者课程性质 ，因为一门课可以容纳多名学生，而每名学生可能会有不同的注册日期，所以 这列不属于这张表，它不是一门课的属性，而是注册的属性，这就是为什么早些时候，我们引入了注册实体，并在其中添加了日期属性
所以，第二范式要求，一张表中的每一列都应该在描述该表代表的实体，如果有一列描述了其他东西，我们应该拿掉它，并放入一张单独表

例如：下面 这张表存储的是我们的订单，但是顾客名描述了 一名顾客，而非订单

```scss
+----------------------------------+
|           [ORDERS]               |
+----------------------------------+
| order_id | date  | customer_name |
+----------------------------------+
|    1     |  -    |   PangPang    |
+----------------------------------+
```

这种情况下，如果一个顾客有多个订单，他的名字会重复出现，注意会产生两个问题，第一个问题是浪费时间，第二个问题是我们会更新的很痛苦，如果我们想更新一个客户名，就必须在好几个地方更改

我们将其拿出放入顾客表，如果我们将来需要改这个名字，只需更新一条记录

```scss
+----------------------------------+
|           [ORDERS]               |
+----------------------------------+
| order_id  | date  | customer_id  |
+----------------------------------+
|    1      |   -   |      1       |
+----------------------------------+

+----------------------------------+
|           [CUSTOMERS]            |
+----------------------------------+
| customer_id  |   name            |
+----------------------------------+
|      1       |  PangPang         |
+----------------------------------+
```

在我们自己的模型中，我们的课程表违反了第二范式，因为这里的讲师不属于这张表，就如同一门讲师教多门课，他们的名字会在这张表中重复，所以我们也必须在好几个地方更改，所以我们添加一张讲师表，讲师 id 到类型我们选择小整形，它可以存 30000 个数据，具体类型结合业务，设为自增，由于出现了新的外键，我们需要再次设置外键约束。这里不展示。

#### 3.Third Normal Form(3NF)第三范式

规则：符合第二范式，并且，表中所有的属性只能有那组关系的候选键决定，而不是任何非主属性.

举个例子 ：

```scss
+-----------------------------------------+
|               [INVOICES]                |
+-----------------------------------------+
| invoice_total | payment_total | balance |
+-----------------------------------------+
|      100      |      20       |   80    |
+-----------------------------------------+
```

这张发票表有三列，发票总计，付款总计和结余，而结余可以通过发票总计和付款总计这两列计算出来，也就是说，他取决于这两列，这意味着前面两列的值改变了，就必须重新计算结余，如果我们改变了其中一个值，但是忘记更新结余，那么我们的数据就不一致了，这条数据便失去了价值

**因此，第三范式表示，表中的列不应该派生自其他的列**

这个例子中，我们应该删除结余列，我们不需要它，类似的违反第三范式的例子如下

```SCSS
+-----------------------------------------+
|               [CUSTOMERS]               |
+-----------------------------------------+
| first_name | last_name |   full_name    |
+-----------------------------------------+
|  PangPang  |    M      |  PangPang M    |
+-----------------------------------------+
```

第三范式就跟其他范式一样，能够帮助我们减少重复，并提高数据完整性

#### 4.建议

不用担心要记住这些标准化规则，比如什么是第一条什么是第二条？他们的区别是啥？除非是考试，这些问题再现实世界没有应用机会，和别人合作实际项目时，只需要专注消除冗余就可以了，不需要对每张表和每个应用逐个应用标准化，没有人会和我们争论给定表是第一还是第二范式，所以，每当我们看到重复值，而且这些值不像是 1、2、3、4 这样的外键时，这就意味着我们的设计没有标准化，至少它违反了第几范式并不重要，没有人会在意，去想着如何消除重复即可

例如：顾客列表有三列，顾客 id，名字和收货地址，如果有要求，要支持多个收货地址，设计就会出问题，我们必须重复他们的名字来添加多个收货地址

```scss
+-----------------------------------------------+
|                  [CUSTOMERS]                  |
+-----------------------------------------------+
| customer_id |    name    |  shipping_address  |
+-----------------------------------------------+
|      1      |  PangPang  |  XXX XXXXXXXXX     |
+-----------------------------------------------+
```

这仅仅是 一张简化的表格，但如果这里还有两列(比如电子邮箱和生日)，为这名顾客 存储多个收货地址，就必须要重复所有其他值，我们若想要解决这个问题，就得思考逻辑实体和这里的关系：这里有两个实体，顾客和地址，这两个实体是一对多的关系，一个顾客可以有很多的收货地址，但是一个地址仅针对一名顾客，将其转化为实体模型后，我们得到两张表

```scss
+--------------------------+
|       [CUSTOMERS]        |
+--------------------------+
| customer_id |    name    |
+--------------------------+
|      1      |  PangPang  |
+--------------------------+


+--------------------------+
|        [ADDRESSES]       |
+--------------------------+
| customer_id |  address   |
+--------------------------+
|      1      |  XXX XXX.  |
+--------------------------+
```

没有考虑任何标准化的规则 以及如何通过到处移动列来应用他们，我们只考虑来逻辑实体和他们之间的关系，所以，如果我们遵循同样的过程，真的就不用考虑标准化规则，我们要先从逻辑或概念模型开始，不要之间掉过这些去创建表。

**Don’t jump into creating tables(不要之间跳到去创建表)**

否则总是会以一个糟糕而混乱的设计告终

另外我们还需要强调业务需求的重要性，这个例子中，我们假设有需要多个收货地址的需求，基于这个需求 ，该表最初的设计就违反了第三范式，但是如果我们没有这个需求，这样的设计就是完全合理的，所以**不要盲目标准化规则**，这就引出了下一个观点，**不要给什么都建模**。

许多数据建模人员犯的一个错误是，他们总是试图泛化他们的模型，以便支持未来的需求，大多数时候，这些人想象的未来的需求仅仅只存在于他们的脑中，而这些可能永远不会发生，所以他们最终创建了一个过于复杂，且没有用的模型告终。

总之，我们有三张表，分别是`Entities`实体，`Attributes`属性，`Values`值，有了这三张表就可以为任何概念建模，因为所有的事物都是实体，所以我们可以把它存在实体表中，而所有的东西都有属性，我们可以把它的属性和值存储在属性表和值表。

其实实际的模型还有其他几张表，如关系、关系类型等等，所以我们的本质就是再关系型数据库上又建立了一个关系型数据库，这个设计被称为第六范式，理论上它确实有优势，但是现实中，它制造了一个几乎没人能收拾的巨大混乱。

**我们只需要为现有的问题制定最佳解决方案就行，而不是永远不会发生的未来的问题**，就好比现实世界中，人们可能会更改他们的法定名字，那么就不用在顾客表中增加“过去的名字”列，除非这个问题域真的很重要，人们会搬家，所以只需要知道顾客当前住址，就不用想着支持多个地址。

现实世界建模，**为我们的问题域建模就好了，建立在当下的需求之上，而不是复杂的现实世界**，不用做有的没的假设，比如这个发生了怎么办，如果那个发生了怎么办，这样做我们最终获得设计，负担很重而且还要拖很长一段时间，这会让我们跑不快，这样再到我们的应用中添加新特色也会更难

所以，**Simplicity is the Ultimate Sophistication 一切从简**，如果未来有变化，我们总是可以写查询修改我们的数据库，并在必要时迁移数据

#### 5.一个模型的正向工程

> Forward Engineering a Model

我们已经建立了这个实体模型，但这也只是个模型，不是一个数据库，我们将结束如何把这个模型转化为真正的物理数据库

我们打开 MySQL workbench，在顶端打开`Database`数据库菜单，选择`Forward Engineer...`正向工程 ，在`Stored Connection`这个对话框选择我们的连接，默认情况下，我们的连接就是在 MySQL 工作台主页的那个，如果没有我们可以打开下拉框选择，保持所有默认设置不变，如果密码没有存储，我们还需要存储密码

进入下一个页面`Option`，我们可以设置这个向导要生成的脚本的选项，大多数时候，保持默认设置就可以了，除非我们知道自己在做什么

随后我们进入下一步`Select Objects`，这时我们可以选择要编写脚本的对象类型，目前为止，我们只在实体模型中创建了表，但我们也可以创建视图，存储过程(如存储过程和函数)以及触发器和用户对象，不过现在先不用考虑这些对象，另外这里我们可以选择“现实过滤器”，从编写对象中排出一张或多张表

默认情况下，所有的表都会选中，但我们也可以排出一张或多张表，只用选中它们并移动到排除对象列表中

进入下一步`Review SQL Script`，映入眼帘的就是这个向导为创建数据库生成的脚本了，现在不用担心这些语言的细节，我们会在后面的内容了解到他们，下方还有两个按钮，我们可以保存脚本文件，并录入我们的圆满控制资源库，也可以复制粘贴到剪切板，然后返回到 MySQL 工作台，粘贴到查询窗口中，这个演示中，我们就行下一页

进入下一页后，等待完成然后关闭

之后返回本地，刷新导航板，我们见到了学习数据库和我们早些时候设计的表

#### 6.数据库同步模型

> Synchronizing Model

现在我们已经建好了数据库模型，若我们想要更改，比如添加一张新表或修改一张现有表，我们可以回到这里，在设计模式下打开这些表，然后做任何必要的修改，我们可以添加一个新列，或者重命名一个列 ，或者删除它们，这些在我们是唯一使用这个数据库的人时都完全没问题

但在中大型架构中，通常有好多个服务器，模拟了实际的生成环境，生成环境是我们的用户访问我们的应用程序或数据库的地方，除了生产环境，我们还有阶段环境，它非常接近生产环境，另外还有测试环境，仅仅为测试使用，当然还有开发环境，每个环境都有一个或多个服务器，所以任何时候我们开发人员想要对这些数据库进行任何更改，我们需要能够在其他数据库上复制相同的更改，所以**我们在不同环境里的这些数据库应该具有一致性**

这里有同步更改的操作，在 Ulysses 的初始笔记上，图片过多不方便以纯文本形式展示，这里省略

## 10. 创建 (CREATE)

在 MySQL 中，`CREATE` 语句用于创建数据库、表以及其他数据库对象，如视图、存储过程等。以下是创建数据库和表的基本语法及示例，特别针对电商系统的数据需求。

### 10.1 创建数据库

#### 1.CREATE DATABASE

`CREATE DATABASE` 语句用于创建一个空数据库，数据库中最初不会包含任何表。

**示例：**

```sql
CREATE DATABASE sql_store2;
```

为了避免多次执行时报错，推荐使用以下语句：

```sql
CREATE DATABASE IF NOT EXISTS sql_store2;
```

#### 2. DROP DATABASE

`DROP DATABASE` 语句用于删除一个数据库。

**示例：**

```sql
DROP DATABASE sql_store2;
```

同样地，为了避免多次执行时报错，推荐使用以下语句：

```sql
DROP DATABASE IF EXISTS sql_store2;
```

### 10.2 创建表

#### 1.CREATE TABLE

在创建数据库后，我们可以在该数据库下创建表。表的列定义非常灵活，列名后直接跟上数据类型即可。

**示例：**

```sql
CREATE DATABASE IF NOT EXISTS sql_store2;
USE sql_store2;

CREATE TABLE customers(
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    points INT NOT NULL DEFAULT 0,
    email VARCHAR(255) NOT NULL UNIQUE
);
```

为了避免多次执行时报错，可以在 `CREATE` 之前或之后加上 `DROP TABLE IF EXISTS` 和 `CREATE TABLE IF NOT EXISTS`：

```sql
CREATE DATABASE IF NOT EXISTS sql_store2;
USE sql_store2;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers(
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    points INT NOT NULL DEFAULT 0,
    email VARCHAR(255) NOT NULL UNIQUE
);
# 也可以将上述的两条语句都加上 ，我这里没加
```

#### 2.ALTER TABLE

当表结构需要修改时，使用 `ALTER TABLE` 语句。**注意**：不要在生产环境下直接更改表结构，应先在测试环境中验证。

- **添加新列：**

  ```sql
  ALTER TABLE customers
      ADD last_name VARCHAR(50) NOT NULL AFTER first_name;
  ```

- **修改列数据类型或属性：**

  ```sql
  ALTER TABLE customers
      MODIFY COLUMN first_name VARCHAR(55) DEFAULT '';
  ```

- **删除列：**
  ```sql
  ALTER TABLE customers
      DROP COLUMN points;
  ```

### 10.3 创建关系

#### 1.添加外键

外键用于在表之间创建关联。通常外键命名规则是以 `fk_` 开头，然后加上子表名和外键表名的组合。

**示例：**我们相对顾客 id 列应用 外键约束 ，使用`FOREIGN KEY`
外键命名规则可以使用`fk_`然后添加子表名和外键表名，即`orders`，下一步，在括弧里，列出我们想要添加这个外键的列，同时我们要告诉 MySQL，这一列引用了顾客表中的顾客 id 列，我们键入`REFERENCES customers()`，并在括号里输入`customer_id`
下一步我们要指定的是 UPDATE 更新和 DELETE 删除行为，是 CASCADE 联机核酸 RETRIEVE 拒绝，我们键入`ON UPDATE`和`ON DELETE`，使用“级联”或“设为空值”或“无操作”

```sql
CREATE DATABASE IF NOT EXISTS sql_store2;

USE sql_store2;

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers(
	  customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    points INT NOT NULL DEFAULT 0,
    email VARCHAR(255) NOT NULL UNIQUE
);
-- 设置PRIMARY KEY 后会默认NOT NULL
-- 在我们列出所有列之后，键入“外键”
CREATE TABLE orders(
	  order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    FOREIGN KEY fk_orders_customers(customer_id)
		REFERENCES  customers(customer_id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
```

#### 2.更改主键/外键

使用 `ALTER TABLE` 可以删除或添加主键和外键。

**示例：**

- **删除和添加外键：**

  ```sql
  ALTER TABLE orders
      DROP FOREIGN KEY fk_orders_customers,
      ADD FOREIGN KEY fk_orders_customers(customer_id)
          REFERENCES customers(customer_id)
          ON UPDATE CASCADE
          ON DELETE NO ACTION;
  ```

- **删除和添加主键：**
  ```sql
  ALTER TABLE orders
      DROP PRIMARY KEY,
      ADD PRIMARY KEY(order_id);
  ```

通过这些基本操作，可以创建和管理数据库中的各种对象，以适应不断变化的业务需求，特别是在电商系统中，合理设计和管理数据库结构至关重要。

## 11. 字符集和排序规则 (Character Sets and Collations)

在 MySQL 中，字符集决定了数据如何存储，而排序规则决定了数据如何排序和比较。在电商系统中，字符集和排序规则可以影响存储的数据类型及其处理方式，尤其是在处理国际化的字符串时。

### 11.1 字符集 (Character Sets)

字符集将每个字符映射到相应的数值表示，MySQL 支持多种字符集，每个字符集都适合不同语言的字符表示需求。常见的字符集包括：

- `utf8`：支持大多数国际语言，是 MySQL 的默认字符集。
- `latin1`：主要用于西欧语言。

要查看 MySQL 支持的所有字符集，使用以下命令：

```sql
SHOW CHARSET;

# 查询出的数据中，列`Default collation`决定了某类语言的字符如何排序
```

### 11.2 排序规则 (Collations)

排序规则定义了如何比较和排序字符。MySQL 的默认排序规则 `utf8_general_ci` 是不区分大小写的 (`ci` 表示 case-insensitive)，意思是 MySQL 在排序的时候，给予大小写同等优先级。**在大多数情况下，不需要修改默认的排序规则。**

### 11.3 字符集的最大字节长度

不同字符集占用的字节数不同：

- `latin1`：每个字符占 1 个字节。
- `utf8`：每个字符最多占 3 个字节。

例如，如果列的类型是 `CHAR(10)`，使用 `utf8` 字符集，MySQL 为每个单元格分配 `10*3=30` 个字节。

若表里有 100 万条记录，MySQL 就会为这张表配置三千万个字节的空间

如果不需要国际语言支持，比如只需要支持拉丁语，可以选择使用 `latin1` 字符集，减少存储空间，减少到一千万字节。

### 11.4 更改字符集和排序规则

尽管大多数情况下可以保持默认字符集和排序规则，但在某些特殊情况下，可以选择更改字符集以优化存储或性能。

> 鼠标操作：在导航面板中，右键单击一个数据库，转到`Schema Inperctor`模式检查器，在第一个标签页中可以看到这个数据库的默认字符集手 utf8，在这里我们可以看到数据库的大小。
>
> 不过我们无法用鼠标点击更改整个数据库的字符集，必须使用 SQL，但我们可以更改表或者列级别的字符集。
>
> 我们在设计模式下打开一张表，这里有一个 VARCHAR 列，选中，在底下有这个下拉列表，可以选择字符集和排序规则，另外，在右上方有一个 V 形线条，点击它的时候，可以看到这张的表的字符集和排序规则

#### 1.数据库级别更改字符集

在创建数据库时设置字符集：

```sql
CREATE DATABASE db_name
CHARACTER SET latin1;
```

更改现有数据库的字符集：

```sql
ALTER DATABASE db_name
CHARACTER SET latin1;
```

#### 2.表级别更改字符集

创建表时指定字符集：

```sql
CREATE TABLE table1(
    column_name VARCHAR(255)
)
CHARACTER SET latin1;
```

更改现有表的字符集：

```sql
ALTER TABLE table1
CHARACTER SET latin1;
```

#### 3.列级别更改字符集

为某一列指定字符集：

```sql
CREATE TABLE customers(
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) CHARACTER SET latin1 NOT NULL,
    points INT NOT NULL DEFAULT 0,
    email VARCHAR(255) NOT NULL UNIQUE
);
```

### 11.5 实践建议

- **保持默认字符集**：如果你的数据需要支持多语言文本，保持使用 `utf8` 或 `utf8mb4` 是最佳选择。
- **仅在必要时优化字符集**：如果你确定只需要支持拉丁字符集，可以选择 `latin1` 来减少存储空间。

通过合理使用字符集和排序规则，可以确保电商系统的数据库能够高效地处理不同语言的数据，并有效地优化存储和性能。

## 12.存储引擎 (Storage Engines)

> 了解即可

在 MySQL 中，**存储引擎**决定了数据的存储方式、读取机制以及支持的功能。不同的存储引擎适用于不同的场景。常见的两大存储引擎是 **InnoDB** 和 **MyISAM**。

### 12.1 查看可用存储引擎

使用以下命令可以查看当前 MySQL 版本支持的所有存储引擎：

```sql
SHOW ENGINES;
```

这将显示支持的存储引擎及其描述，包括它们是否支持事务、锁定机制等。

### 12.2 常用存储引擎

- **InnoDB**：目前最常用的存储引擎，它支持**事务 (Transactions)**、**外键 (Foreign Keys)** 和**行级锁定**。适用于大多数现代应用，尤其是在数据完整性和事务处理至关重要的场景中，比如电商系统。
- **MyISAM**：较早期的存储引擎，不支持事务和外键。它的设计更简单，占用资源少，因此适用于只读应用或日志系统。然而，由于不支持事务和外键，数据完整性管理较差，且在高并发场景下性能较差。

### 12.3 选择合适的存储引擎

**InnoDB** 是电商系统的首选存储引擎，因为它支持：

1. **事务**：在复杂的数据操作中，保证多个步骤的原子性，如订单付款和库存更新等操作。
2. **外键约束**：确保数据库中相关联的数据完整性，避免无效的外键引用。
3. **行级锁定**：比 MyISAM 的表级锁定更适合高并发操作，尤其是在多用户同时下单或查询时能提高性能。

**MyISAM** 可能适用于一些特殊场景，如历史数据备份、日志记录等，因为它的查询性能较好，且占用空间较小，但不适合实时业务。

### 12.4 更换存储引擎

如果某张表基于较旧的 MySQL 版本构建且使用了 MyISAM，或者出于其他原因需要切换存储引擎，可以通过以下方式更改表的存储引擎：

- 使用图形化工具：

  - 在数据库管理工具（如 MySQL Workbench）中打开表，选择需要的存储引擎（如 InnoDB）。

- 使用 SQL 语句：
  ```sql
  ALTER TABLE customers
  ENGINE = InnoDB;
  ```
  **注意**：更改存储引擎可能会触发 MySQL 重新构建表，这个过程可能耗时且会锁定表，建议在低峰期或定期维护时执行。

### 12.5 小结

在大多数情况下，**InnoDB** 是 MySQL 中的首选存储引擎，特别适用于事务密集型应用如电商系统。而 **MyISAM** 可以用于只读场景或日志系统。如果需要更改存储引擎，一定要考虑数据安全性和系统性能，避免在生产环境中进行不必要的更改。

## 13.高效的索引(Indexing for High Performance)

使用索引来获得高性能，这在大型数据库和高流量网站中，索引非常重要，因为它可以显著提高查询的性能。

### 13.1 索引 (Indexes)

**索引**是数据库中用于加快数据检索的数据结构，其作用类似于书籍的目录，帮助我们快速找到所需的信息。在数据库中，索引是一种数据结构，用来提高查询性能，尤其是在大型数据库和高流量的电商网站中，索引对于加速数据查找至关重要。

**索引的基本原理**：

- 可以将索引类比为电话簿（目录）。假设我们需要找到一个住在加利福尼亚州的顾客，数据库在没有索引的情况下必须扫描整个顾客表，逐条检索所有记录，这在小型表（如几百到几千条记录）中尚可接受，但在数据量较大的表中，性能会急剧下降。
- 通过在`state`列上创建索引，数据库就像拥有了一本按州排序的“顾客目录”。MySQL 可以通过该索引快速定位目标记录并返回查询结果，而不必遍历整张表。
- **索引**记录了特定字段的值以及该值在数据表中的引用位置，这样数据库可以先通过索引找到匹配的数据，再通过引用位置快速从表中读取数据。

**索引的优点**：

- **加速查询**：索引可以显著加快数据查询速度，尤其是当查询条件涉及到大量数据时。索引的数据结构通常非常紧凑，可以存放在内存中，数据读取速度比从磁盘上逐行扫描快得多。

**索引的代价**：

- **写操作的性能影响**：使用索引并不是免费的，每次对表的数据进行插入、更新或删除操作时，MySQL 都需要同步更新索引，这会导致写入性能下降。**这会影响我们正常操作的性能**。
- **占用存储空间**：索引会占用额外的存储空间，因此在设计数据库时需要权衡查询速度和存储成本。

因此，**我们应该为性能关键的查询保留索引`Reserve indexes for performance critical queries`**

**索引的设计**应基于查询需求，而不是基于表的结构。盲目地为每个列都创建索引不仅会增加数据库大小，还会影响数据库的写入性能。

许多开发人员犯的一个常见错误是，他们在设计时就添加了索引，**我们不应该基于表来创建你索引，而是基于查询创建索引`Design indexes based on your queries ,not your table`**

因为使用索引的终极目的就是为了加快较慢的查询，基于表的设计添加索引，就像是在解决一个根本不存在的问题，所以不建议盲目的在表上添加索引，因为这会增加数据库的大小，并降低正常运行的速度

**索引的底层结构**：

- **B-tree（B-树）**：MySQL 中的大多数索引使用 B-tree 数据结构。这种树状结构允许数据库在进行查询时快速遍历数据并找到目标记录。虽然了解 B-tree 的细节对数据库使用者不是必需的，但知道它作为索引的一部分有助于理解数据库如何优化数据检索。

总结：**索引可以加快查询速度，但同时也会增加数据库的写入成本和占用存储空间。因此，在数据库设计时，应根据查询的需求合理设计索引，而不是为每个字段都创建索引。**

### 13.2 创建索引 (Creating Indexes)

在数据库中，**索引**的作用是加快数据查询的速度，特别是在处理大量数据时。通过在表的某些列上创建索引，MySQL 能够更快地检索所需的记录，而不是扫描整个表。

#### 1.示例：查询加利福尼亚的顾客

假设我们想查询位于加利福尼亚的顾客。如果没有索引，MySQL 必须扫描整个`customers`表：

```sql
SELECT customer_id
FROM customers
WHERE state = 'CA';
```

为了优化查询性能，我们可以通过索引来加速查询。使用`EXPLAIN`关键字可以查看 MySQL 如何执行该查询。

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE state = 'CA';
```

查询结果

```scss
+---------------------------------------------------------------------+
|   id   |   table     |   type   | possible_keys |  key  |   rows    |
+---------------------------------------------------------------------+
|   1    |  customers  |   ALL    |      NULL     |  NULL |   1010    |
+---------------------------------------------------------------------+
```

**查询结果的部分解释**：

- **type**：表示查询的类型。这里显示为"ALL"，表示 MySQL 执行了全表扫描，即扫描表中的每一行数据。
- **rows**：表示 MySQL 扫描的行数。如果没有索引，MySQL 需要扫描表中的所有记录。

示例中显示了表有 1010 条记录，当数据量大时，查询会变得非常缓慢。

#### 2.创建索引

为了解决全表扫描带来的性能问题，我们可以在`state`列上创建索引。

我们来写一个`INDEX`索引，通常用`idx`或者`ix`为名字的前缀，然后添加下划线，再指定 要放置索引的列名称，也是这里的“州”，实践中，一定要给索引一个便于理解的名称，不要使用`idx1`、`idx2`这样的。

```sql
CREATE INDEX idx_state ON customers(state);
```

创建完索引后，再次运行查询并查看`EXPLAIN`输出：

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE state = 'CA';
```

查询结果

```scss
+---------------------------------------------------------------------+
|   id   |   table     |   type   | possible_keys |  key       | rows |
+---------------------------------------------------------------------+
|   1    |  customers  |   ref    |  idx_state    |  idx_state |  112 |
+---------------------------------------------------------------------+
```

**查询结果的部分解释**

`type`中明显不再显示去全部，意味着我们没有再做全表扫描，然后在“行数”列中，我们得到 112，也就是说，我们把 MySQL 要扫描的记录从 1010 减少到了 112，这便得快很多。

`possible key`下方的`idx_state`是 MySQL 为了执行这个查询可能会考虑的几个索引，可能会存在多个索引，然后 MySQL 会挑选执行性能最佳的索引，所以这是索引的可能的键或索引，然后在“`key`键”列，我们可以看到实际使用的索引或者键，这就是索引如何加快我们的查询

#### 3.删除索引

如果我们不再需要某个索引，可以使用`DROP INDEX`语句删除它。例如，删除`idx_points`索引：

```sql
DROP INDEX idx_points ON customers;
```

#### 4.查看索引

要查看某张表上的所有索引，可以使用`SHOW INDEXES`语句：

```sql
SHOW INDEXES IN customers;
```

查询结果

```scss
+--------------------------------------------------------------------------+
|   Table      | Non_unique |  Key_name    |   Column_name   | Cardinality |
+--------------------------------------------------------------------------+
|  customers   |     0      |   PRIMARY    |  customer_id    |     10      |
|  customers   |     1      |   idx_state  |     state       |     48      |
|  customers   |     1      |   idx_point  |    points       |    788      |
+--------------------------------------------------------------------------+
```

**查询结果的部分解释**

第一条是主键，它称为“聚集索引”，每张表最多有一个聚焦索引，每当我们在表中添加主键时，MySQL 会自动创建一个索引，这样我们就可以根据它们的 id 快速查找记录，这里我们可以看到这个索引放在了顾客 id 列上

另外还有两个索引，它们被称为“二级索引”，严格意义上来说 ，每当我们创建二级索引时，MySQL 自动将 id 或主键纳入到二级索引中。例如，在这里我们的“积分”列上有一个二级索引，**在这个索引里面，每条记录里都有两个值**：每位顾客的积分和 id，从这里我们看不到 id，但其实它被存储在了索引里。

这里的`Index_type`索引类型全是`BTREE`（这里未展示），就是二进制的缩写，MySQL 中的大多数索引都以二进制数存储。用表来可视化的代替它们，因为表更易于理解和了解。

`Collation`排序规则表示的是数据在索引中的排序方式（这里未展示），A 的意思是升序，另外 D 的意思是降序。

`Cardinality`基数表示索引中唯一值的估计数量，所以这个主键的索引的基数是 1010，因为这个列中有 1010 个唯一值，但要注意这个数字是一个估量，而不是真实的值，想要获取个更精确的值，我们可以使用`ANALYZE TABLE`语句，它会为这张表重新生成关于表的统计信息

```sql
ANALYZE TABLE customers;
```

我们重新查看这张表的索引，我们会得到更精确的数值 .

```scss
+--------------------------------------------------------------------------+
|   Table      | Non_unique |  Key_name    |   Column_name   | Cardinality |
+--------------------------------------------------------------------------+
|  customers   |     0      |   PRIMARY    |  customer_id    |   1010      |
|  customers   |     1      |   idx_state  |     state       |     48      |
|  customers   |     1      |   idx_point  |    points       |    788      |
+--------------------------------------------------------------------------+
```

我们查看 order 中的索引，这张表有四个索引，第一个是主键，另外 3 个索引是放在外键上的二级索引，所以每当我们为两张表创建一组关系的时候，MYSQL 会自动为外键创建索引，这样我们就可以快速连接表

```SQL
SHOW INDEXES IN orders;
```

查询结果

```scss
+----------------------------------------------------------------------------+
|  Table |Non_unique|       Key_name             |  Column_name | Cardinality|
+----------------------------------------------------------------------------+
| orders |    0     |       PRIMARY              | order_id     |     10     |
| orders |    1     | fk_orders_customers_idx    | customer_id  |      6     |
| orders |    1     | fk_orders_shipper_idx      | shipper_id   |      5     |
| orders |    1     | fk_orders_order_statues_idx| status       |      2     |
+----------------------------------------------------------------------------+
```

以上就是如何查看表的索引，我们也可以在导航面板查看，当我们点击一个索引时，可以查看到那个索引的各种属性

### 13.3 前缀索引 (Prefix Indexes)

在数据库中，索引能够极大地提升查询性能。然而，当我们为字符串类型的列（如 `CHAR`、`VARCHAR`、`TEXT` 或 `BLOB`）创建索引时，索引可能会占用大量空间，并且影响性能。这时候我们可以使用**前缀索引**，只对字符串的前几个字符进行索引，从而减少索引的大小并提高性能。

#### 1. 创建前缀索引

前缀索引允许我们指定字符串列中前多少个字符来进行索引，而不是索引整个字符串列。通过这种方式，可以有效减小索引的大小，从而提高数据库的查询速度。

例如，假设我们有一个客户表（`customers`），想要对客户的姓氏列（`last_name`）进行索引：

```sql
CREATE INDEX idx_lastname ON customers(last_name);
```

这个索引会对整个 `last_name` 列进行索引。如果客户的姓氏特别长，索引的体积会比较大。为了优化，我们可以只索引姓氏的前 20 个字符，创建一个前缀索引：

```sql
CREATE INDEX idx_lastname ON customers(last_name(20));
```

这样，索引只会包含姓氏的前 20 个字符。这种索引通常足以唯一识别大部分客户，同时节省了存储空间和查询时间。

**对于`CHAR`和`VARCHAR`括号中的内容是可选的，但`TEXT`和`BLOB`列就必须要写了**

#### 2. 如何找到最佳的前缀长度

要确定前缀索引的最佳长度，需要通过观察数据的分布情况来确定。我们想要包含足够的字符，以便能够唯一标识大多数记录。如果前缀长度太短，可能会有大量重复值，从而降低索引的效果。

##### 示例步骤：

1. **获取表中的记录总数**：

   先查询表中一共有多少条记录。例如，假设 `customers` 表有 1010 条记录：

   ```sql
   SELECT COUNT(*) FROM customers; -- 1010
   ```

2. **尝试不同的前缀长度**：

   使用不同的前缀长度来查看能唯一标识多少条记录。假设我们想尝试 `last_name` 列的首字母：

   ```sql
   SELECT COUNT(DISTINCT LEFT(last_name, 1)) FROM customers; -- 25
   ```

   在这段查询中，我们使用 `LEFT(last_name, 1)` 来只选取姓氏的第一个字符，并统计有多少个唯一值。结果显示 25，说明如果只使用一个字符作为前缀，MySQL 只能区分出 25 个唯一值，这显然不够。

3. **对比不同长度的前缀**：

   我们继续增加前缀的长度，并查看结果。例如：

   ```sql
   SELECT COUNT(DISTINCT LEFT(last_name, 5)) FROM customers;
   ```

   通过对比不同的前缀长度和唯一值的数量，我们可以判断前缀长度为多少时，能够有效区分绝大部分记录。

##### 前缀长度对比表（假设）：

| 前缀长度 | 唯一值数目 |
| -------- | ---------- |
| 1        | 25         |
| 5        | 966        |
| 10       | 997        |

前缀长度为 10 的情况只比上一个多了 30 个唯一值，我们囊括了两倍的字符数，却只增加了一点点值，这种情况下 ，5 是最佳的前缀长度，只要包含前面 5 个字符，我们就已经可以唯一识别表中的大多数姓氏

### 13.4 全文索引 (Full-text Indexes)

**全文索引 (Full-text Indexes)** 是一种特殊的索引类型，用于在文本数据中创建强大的搜索功能，适合应用程序中需要对长文本字段（如博客文章、产品描述等）进行高效搜索的场景。

#### 1. 创建全文索引

假设我们正在构建一个博客网站，用户可以搜索博客文章。

我们做一个 搜索示例：

```sql
USE sal_blog;

SELECT *
FROM posts
WHERE title LIKE '%react redux%' OR
       body LIKE '%react redux%'
```

这个查询首先是它无法查到任何内容 ，因为这种查询很死板，它只会返回完全按照这两个单词顺序排序的关键字的文章，不会返回只有`React`，`Redux`或`Redux React`的文章，我们应该返回任何有这俩关键词的记录，顺序随意，而且这俩词不是必须紧挨着，中间可能会夹杂其他词。

主要原因还是没有索引，这种方式这会导致随着我们的文章越来越大。查询会越来越慢，我们之前学习了为字符串添加索引时使用前缀索引，我们也可以在这里添加前缀索引，但是这个索引只能包含标题或者正文列的前几个字符，如果这个搜索短语在列前缀的后面，这样我们的索引不会包含搜索短语，那么 MySQL 就得做全表扫描。

所以上面这个查询对搭建搜索引擎来说没啥用，这种情况下，我们可以使用全文索引。

全文索引可以在应用程序里打造快速强大的搜索引擎，这类索引和一般的索引不同，它们包括整个字符串，而不只是存储前缀，他们会忽略任何停止词，比如`in`、`on`、`the`之类，本质上，它们存储了一套单词列表，对于每个单词，它们又存储了一列这些单词会出现的行或记录。

为了提高搜索性能和灵活性，我们为博客文章的标题和正文创建全文索引。这类索引会存储所有词的列表，并对每个词进行跟踪，从而实现快速查询。

示例：

```sql
CREATE FULLTEXT INDEX idx_title_body ON posts(title, body);
```

该命令在 `posts` 表的 `title` 和 `body` 列上创建一个全文索引，帮助我们在这些文本字段中进行高效的全文搜索。

#### 2. 使用全文索引查询

我们可以使用 `MATCH` 和 `AGAINST` 语句进行全文搜索。`WHERE`后面跟上了我们在全文索引中包含的列，**如果我们的索引有 3 列，就必须把这 3 列都包括在内，否则报错**。在 `MATCH()` 中列出我们需要搜索的列，并在 `AGAINST()` 中指定我们要搜索的关键词。它会返回包含这些关键词的所有行，无论关键词的顺序和位置如何。

示例：

```sql
SELECT *
FROM posts
WHERE MATCH(title, body) AGAINST('react redux');
```

这将返回所有在 `title` 或 `body` 列中包含 "react" 或 "redux" 的博客文章。

#### 3. 相关性得分

全文搜索的一个优点是，它包含了“相关性得分”，MySQL 会基于若干因素，为包含搜索短语的每一行计算相关性得分，相关性得分是一个介于 0 到 1 点浮点数，0 表示没有相关性，为了在结果中展示相关性得分，在星号后面加上表达式。为了获取相关性得分，我们可以将 `MATCH()` 和 `AGAINST()` 语句用作选择字段，返回匹配结果的同时，还会返回相关性得分，并按得分降序排列。

示例：

```sql
SELECT *, MATCH(title, body) AGAINST('react redux') AS relevance
FROM posts
WHERE MATCH(title, body) AGAINST('react redux')
ORDER BY relevance DESC;
```

#### 4. 使用布尔模式 (Boolean Mode)

全文搜索有两种模，一种是自然语言模式，即默认情况的模式

另外一种是布尔模式，这个模式可以保护或排除某些单词，使我们可以更精确地控制查询结果。布尔模式允许我们使用特殊符号来要求某些单词的存在或排除。

- `+` 表示必须包含的词
- `-` 表示必须排除的词
- `" "` 表示完全匹配某个短语

示例：

- 要求包含 "form" 但排除 "redux"：

```sql
SELECT *, MATCH(title, body) AGAINST('react -redux +form' IN BOOLEAN MODE) AS relevance
FROM posts;
```

- 精确匹配短语 "handling a form"：

```sql
SELECT *, MATCH(title, body) AGAINST('"handling a form"' IN BOOLEAN MODE) AS relevance
FROM posts;
```

#### 5. 自然语言模式 vs 布尔模式

全文索引有两种模式：

1. **自然语言模式 (Natural Language Mode)**：这是默认模式，自动基于关键词的相关性返回结果。
2. **布尔模式 (Boolean Mode)**：允许更加灵活的搜索，控制关键词的存在或排除。

#### 6. 使用场景

全文索引非常强大，如果我们想要在应用程序中搭建搜索引擎的话可以使用它们，尤其当你在篇幅很长的字符串中搜索，像报纸文章或博客的正文，或产品描述，否则，对于“名字”和“地址”这样较短的字符串 列，使用前缀索引就好

### 13.5 复合索引 (Composite Indexes)

#### 1. 使用复合索引

复合索引是一种包含多个列的索引，用于加速查询中涉及多个条件的检索操作。它能显著减少表扫描的行数，提高查询效率。在 MySQL 中，创建复合索引时，MySQL 会选择最优的索引列顺序来加速查询。

**示例：**

我们想要查询位于加州且积分大于 1000 的顾客。

简单查询

```sql
SELECT customer_id
FROM customers
WHERE state = 'CA' AND points > 1000;
```

使用`EXPLAIN`观察执行过程，这里有两个可能的键或索引，一个是“州”列上的索引，一个上“积分”列上的索引，从结果可以看到，MySQL 在这俩中间最终采用了“州”列上的索引，所以不管有多少索引，MySQL 最多只会选择 一个索引。

本次搜索只扫描了 112 行，通过使用该索引，我们可以把搜索范围缩小到位于加州的顾客，当 MySQL 执行这个查询时，它会使用“州 ”的索引，来快速找到顾客。但随后它必须扫描所有加州的顾客，并查看他们的积分，这部分的查询需要表扫描，因为“州”索引中并没有每位顾客的积分点，如果加州有一千万顾客，我们的索引虽然加快了查询速度，但是它只做了一半的工作，它只让我们快速定位到位于加州的顾客而已，这个查询的后半部分就要做表扫描了，此外，因我们时从磁盘中读取数据，随着顾客表变大，速度会变慢，这种时候，我们可以使用复合索引

我们可以在“州”列和“积分”列上创建复合索引，有了这个索引，我们可以快速找到位于任何州，拥有任何积分的顾客

```sql
CREATE INDEX idx_state_points ON customers(state, points);
```

这样我们就为这两列创建了复合索引，将 112 缩减到 58，在 possible key 中我们也可以看到有三个选择，最后 MySQL 选择了`idx_state_points`

```sql
EXPLAIN SELECT customer_id
FROM customers
WHERE state = 'CA' AND points > 1000;
```

**许多初学者常犯的错误**：为每列单独创建索引，性能有限，并且占用不必要的空间。同时 MySQL 会自动将表的主键包含在每个二级索引中，这些个单个列的索引会浪费很多时间，因此复合索引更好

现实中的多数情况，我们应该用到复合索引，因为一个查询可以有多个筛选器，一个索引最多可以包含 16 列，通常这个数字太多 ，Mosh 觉得 4 到 6 列之间能达到很好的性能，我们应该根据我们的查询和拥有的数据量进行实验

#### 2. 复合索引中的列顺序

在创建复合索引时，列的顺序至关重要。良好的列顺序可以显著提高查询效率。下面是一些在选择复合索引列顺序时的关键规则：

1. **频繁使用的列放在前面**：我们应该对列进行排序，让更频繁使用的列排在最前面，这很符合逻辑，如果我们有 5 个查询，大多数或全表的查询都按“州”查找顾客，那么把“州”放在最前面就很合理，因为这有助于缩小搜索范围。
2. **基数较高的列优先放置**：我们应该把记述更高的列排在最前面，基数（cardinality）表示索引中唯一值的数量，例如，在主键中的基数是 1010(customers)，也就是说这个列有 1010 个唯一值，如果基础 100 万，把性别(2 种)放在最前面，这列可以把搜索范围从 100W 缩到 50W，如果把州(约 48 个)放在最前面, 这列可以把搜索范围从 100W 缩到 2W。所以如果把州列在最前面，可以把我们的搜索范围缩小为更少的记录，所以基本规则是吧基数较高的列放在第一位，但这不是一条硬性规定，而是最基本的，我们还应充分考虑查询和数据。

**例子：**

假设我们需要创建一个复合索引，用于查询位于加州且姓氏以 “A” 开头的顾客。

我们先看这两列的基数，计算每列有多少唯一值：

```sql
SELECT
	COUNT(DISTINCT state), -- 48
	COUNT(DISTINCT last_name)  -- 997
FROM customers;
```

如果不去管查询本身 ，`last_name`更适合排在前面，因为它可以把我们的表分成更小的部分，但是这条基数原则并不总是最佳做法，**我们始终需要考虑我们的查询**

我们先创建索引

```sql
CREATE INDEX idx_state_lastname ON customers(state, last_name);
```

当查询如下执行时，MySQL 会首先根据 `state` 列快速筛选出加州的顾客，然后再通过 `last_name` 列进一步过滤出姓氏以“A”开头的顾客。

```sql
SELECT customer_id
FROM customers
WHERE state = 'CA' AND last_name LIKE 'A%';
```

**总结**：

- **频繁使用的列放在前面**。
- **基数较高的列放在前面**，但需要结合查询逻辑做实际优化。
- **查询模式优先**：选择列顺序时应结合查询中的筛选条件来决定。

### 13.6 当索引无效时

在某些情况下，尽管存在索引，MySQL 仍然无法有效利用它们，从而导致性能不佳。了解这些情况并采取相应措施，可以帮助优化查询性能。以下是索引失效的一些常见场景以及解决方法。

#### 1. 使用 `OR` 操作符时

```sql
EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA' OR points > 1000;
```

查询结果

```scss
+----------------------------------------------------------------------------+
|   id   |   table     |   type   | possible_keys |        key        | rows |
+----------------------------------------------------------------------------+
|   1    |  customers  |  index   |  ...省略...    |  idx_state_points | 1010 |
+----------------------------------------------------------------------------+
```

在这里，我们可以看到 MySQL 使用了一个索引来满足这个查询，但是行数有 1010 行，就像做了一个全表扫描，但其实没有，这里的类型是 index，显示做了一个全索引扫描，它比扫描快，因为它不涉及从磁盘读取每个记录，但是我们还是得扫描 1010 条记录，若我们想要优化这个查询，我们就必须重写这个查询，以尽可能最好的方式利用索引。

这里我们可以把这个查询拆分成两段更小的查询，使用 `UNION` 操作符来提高效率

##### 解决方法：

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE state = 'CA'
UNION
SELECT customer_id
FROM customers
WHERE points > 1000;
```

这样，MySQL 可以利用两个子查询中的索引来分别处理 `state` 和 `points`，从而避免全表扫描，提升查询效率。

```scss
+----------------------------------------------------------------------------+
|   id   |   table     |   type   | possible_keys |        key        | rows |
+----------------------------------------------------------------------------+
|   1    |  customers  |  ref     |  ...省略...    |  idx_state_points |  112 |
|   2    |  customers  |  range   |  ...省略...    |  idx_state_points |  336 |
+----------------------------------------------------------------------------+
```

#### 2. 在表达式中使用列

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE points + 10 > 2010;
```

同样，我们做了全索引扫描，即便我们在“积分”列上有一个索引，为了满足这个查询，MySQL 读取列索引中的每条记录，如果数据过多，就算扫描索引中的每条记录也会很慢。

这里我们扫描了全部的索引，是因为上面的`points +  10`，由于索引只能用于对列进行直接比较（例如 `points > 2000`），MySQL 无法对已经参与计算的列（如 `points + 10`）使用索引，MySQL 就无法以最优 的方式利用索引了。

为了解决这个问题，我们要把这个列单独放一边，并重写这个表达式。

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE points > 2000;
```

在这种情况下，MySQL 可以直接使用 `points` 列上的索引，快速查找符合条件的记录。

### 13.7 使用索引排序

在查询结果时，常常需要对数据进行排序。如果能有效地利用索引进行排序，将大幅提高查询性能。MySQL 中，当对某些列进行排序时，如果这些列已经存在索引，MySQL 可以直接利用索引中的排序信息，而无需额外的操作。

#### 1. 基于索引的排序

之前我们有提到，当我们在列上添加索引时，MySQL 会获取该列中的所有值，对其排序，并将它们存储在索引中，所以我们这里的这个符合索引，已经对这些顾客按州排序过了。

当我们对存在索引的列进行排序时，MySQL 可以利用这些索引进行优化。比如，如果我们按 `state` 列排序，而 `state` 列已经存在索引，MySQL 可以直接扫描索引，并按照索引中排序后的顺序返回结果。

**示例：**写一个查询，并按顾客所在的州对其进行排序，我们只选取顾客 id 列。

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY state;
```

查询结果

```scss
+-------------------------------------------------------------------------------+
| id| table   |   type   | possible_keys |        key        | rows |   Extra   |
+-------------------------------------------------------------------------------+
| 1 |customers|   index  |      NULL     |  idx_state_points | 1010 |Using index|
+-------------------------------------------------------------------------------+
```

这里，MySQL 按顺序读取了记录，并扫描了整个索引，在`Extra`中我们可以看到它使用了这个索引，MySQL 不需要执行全表扫描或者外部排序，因为 `state` 列上已经有索引，查询代价较低。

#### 2. 未使用索引的排序

如果不用索引中的列进行排序

**示例：**

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY first_name;
```

查询结果

```scss
+----------------------------------------------------------------------------------+
| id| table   |   type   | possible_keys |        key        | rows |     Extra    |
+----------------------------------------------------------------------------------+
| 1 |customers|    ALL   |      NULL     |        NULL       | 1010 |Using filesort|
+----------------------------------------------------------------------------------+
```

类型更改为“全部”，意味着这里做了一个全部扫描，在`Extra`中可以看到使用了`filesort`“外部排序”。

这个“`filesort`外部排序”和文件没什么关系，它只是 MySQL 用以在表中为数据排序的一种算法的名称，我们需要明白的是，外部排序是很耗费时间的一种操作，通常来说，**除非真的必要，不要给数据排序**

我们可以使用`SHOW STATUS`语句来查看服务器变量，可以看到很多 MySQL 服务器使用的变量，这里有一个称为`last query cost`(上一次查询的成本)变量，他会返回上一次查询的成本，所以我们可以用 LIKE 运算符筛选它

```sql
SHOW STATUS LIKE 'last_query_cost';
```

为使用索引时，value 为 1112，但如果我们使用索引中的列排序，成本仅有 102

我们可以看到，外部排序操作非常昂贵，几乎比从索引中获取数据要贵 10 倍

因此，如果可以，最好设计我们的索引，这样它们可以用于筛选和排序数据，但是这可能并不像案例那样简单，因为这取决于我们的查询中的`WHERE子句`、`ORDER BY子句`的难度，也取决于我们的列和顺序

#### 3. 利用复合索引进行排序

**基本规则是，ORDER BY 子句中的列的顺序，应该与索引中的列的顺序相同**

在这里我们可以按州和积分排序（效果和上面一样 102）

```sql
-- 已存在索引
-- CREATE INDEX idx_state_points ON customers(state, points);

SELECT customer_id
FROM customers
ORDER BY state,points;
SHOW STATUS LIKE 'last_query_cost';
```

但是如果我们在中间加一个一列，且该列不再索引中，我们就会再次得到一个全部扫描，value1112

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY state, first_name, points;
SHOW STATUS LIKE 'last_query_cost';
```

如果复合索引中的列顺序与查询中的排序列一致，MySQL 将使用索引进行排序，查询性能较高。否则，MySQL 可能无法利用索引，需要额外执行外部排序。

#### 4. 混合排序方向

MySQL 对于混合排序方向（即对部分列升序排序，另一部分列降序排序）的查询，通常无法充分利用现有的索引。

**示例：**既使用了索引，也使用列外部排序操作

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY state, points DESC;
SHOW STATUS LIKE 'last_query_cost'; -- value1112
```

因为给予这两列的符合索引，是先基于州，然后按积分升序排列的，这样的话 MySQL 没法利用这个索引来完成查询，因为排序方向不一致。

如果按州和积分降序，这里我们使用了“反向索引间隙”，不再是“外部排序”

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY state DESC, points DESC;
SHOW STATUS LIKE 'last_query_cost'; -- value102
```

**所以基本的规则是，如果是基于两列的索引，比如 A 列和 B 列，我们可以按 A 和 B 排序，可以按同样的降序排序，但我们不能混淆方向，另外，我们也不能在中间添加一列**

如果我们按第一个索引的第二列排序，它既使用索引，也使用外部排序，这也是一个浪费资源的索引，因为在我们面前的索引中，我们的顾客是先按他们的州排序的，然后，在每个州下，再按他们的积分排序

```sql
EXPLAIN
SELECT customer_id
FROM customers
ORDER BY points;
SHOW STATUS LIKE 'last_query_cost'; -- value1112
```

所以 MySQL 不能依赖于索引中的记录顺序，为顾客按积分排序。

话虽如此，这个规则有一个例外，我们可以来到一个特定的分区，或者说特定的州，然后将顾客按积分排序，如下

```sql
EXPLAIN
SELECT customer_id
FROM customers
WHERE state = 'CA'
ORDER BY points;
SHOW STATUS LIKE 'last_query_cost'; -- value11
```

通过它，MySQL 就不会做“外部索引”，因为它会定位到这个州，而这个州里的顾客已经按照积分排序过了，因此也就没有“外部排序”的操作了，这个查询成本要低很多，因为我们缩小了搜索范围到指定的某个州（**当我们在列上添加索引时，MySQL 会获取该列中的所有值，对其排序，并将它们存储在索引中**）

#### 5. 规则总结

如果有一个基于`(a ,b)`的复合索引，可以使用`a`、`a, b`、`a DESC, b DESC`三种方法

---

## 13.8 覆盖索引 (Covering Indexes)

之前我们所进行的查询，我们都只`SELECT`了`customer_id`

例如下面的案例

```sql
EXPLAIN SELECT customer_id FROM customers
ORDER BY points;

SHOW STATUS LIKE 'last_query_cost';
```

查看附加项，可以看到 MySQL 只是用了我们索引来执行这个查询，但如果选择所有列，我们会得到全表扫描

我们放在州和积分列上的复合索引`idx_state_points`包含了 关于每个顾客的三条信息，他们的 id，所在州，他们的积分。

> **当我们创建一个二级索引，MySQL 会自动将主键包含在第二索引中**

所以，如果我们在这里选择任何一个列，比如顾客 id 和州，MySQL 可以完整使用我们的索引来满足查询，这就叫“覆盖索引”

**覆盖索引：一个包含所有查询需要的数据的索引，通过这个索引，MySQL 可以在不读取表的情况下就执行查询，这个操作是最快的**

所以当我们设计索引时，可以先看我们的 WHERE 子句，看看最常用的列，包含在索引中的列，这样我们可以缩小搜索范围，然后查看 ORDER BY 子句中的列，看是否可以在索引中包含这些列，最后查看 SELECT 子句中使用的列，如果包括列这些列，我们就会得到一个覆盖索引，那么 MySQL 就可以用索引来满足查询，无需接触表

## 13.9 维护索引

索引可以极大地提高查询的性能，然而物极必反，当我们处理索引时，我们也需要注意**重读索引**和**多余索引**

### 1.重复索引

**重复索引**是指在同一列或同一组列上创建了完全相同的索引，顺序也一致。MySQL 不会自动阻止我们创建重复索引，这可能会导致系统负担增加，因为 MySQL 会分别维护每一个索引，消耗不必要的存储和资源。

**重复索引示例**：

```sql
CREATE INDEX idx_state_points ON customers(state, points);
CREATE INDEX idx_state_points_dup ON customers(state, points);
```

在这个例子中，两个索引 `idx_state_points` 和 `idx_state_points_dup` 是完全相同的重复索引，这种情况非常常见，尤其是当开发人员在不检查现有索引的情况下创建新索引时。MySQL 会保留这两个索引并分别维护它们，导致资源浪费。

**解决方法**：

- 在创建索引前检查现有索引：可以通过 `SHOW INDEX`语句查看当前表的所有索引，以避免重复创建索引。

  ```sql
  SHOW INDEX FROM customers;
  ```

- 定期检查和删除重复索引：如果发现存在重复索引，可以通过 `DROP INDEX`语句来删除不必要的索引。

  ```sql
  DROP INDEX idx_state_points_dup ON customers;
  ```

### 2.多余索引

**多余索引**指的是那些部分被其他索引覆盖或不再必要的索引。例如，假设我们已经在两列 `A` 和 `B` 上创建了复合索引（`idx_a_b`），如果我们又为列 `A` 创建了单独的索引（`idx_a`），那么 `idx_a` 索引就是多余的，因为 `idx_a_b` 已经可以处理列 `A` 的查询。

**多余索引示例**：

```sql
CREATE INDEX idx_a_b ON customers(a, b);
CREATE INDEX idx_a ON customers(a);  -- 多余索引
```

`idx_a` 是多余的，因为 `idx_a_b` 已经可以优化任何基于列 `a` 的查询。

### 3.索引维护的重要性

索引的维护对于数据库性能的优化至关重要。在实际开发中，开发人员往往忽略了对现有索引的检查，导致重复和多余索引的出现。定期的索引清理和优化可以帮助保持数据库的高效性。以下是索引维护的几个关键点：

- **检查未使用的索引**：通过 `performance_schema` 或 `information_schema` 中的表可以查看索引的使用情况，删除那些长期未被使用的索引。
- **定期优化数据库**：对数据库进行定期的索引检查和维护，如删除不再使用的索引、合并多余的索引等，可以减少不必要的系统开销。
- **查询优化**：在编写查询时，尽可能利用已有的索引，并避免创建多个针对同一列的索引。

## 14. 保护数据库

在数据库管理中，安全性至关重要。确保数据库免受未经授权的访问和滥用是保障系统稳定和数据完整性的关键。通过合理管理用户账户和权限，我们可以有效控制对数据库的访问。本章节将介绍如何创建用户、管理权限以及其他安全措施，以确保数据库的安全。

### 1. 创建用户

**例如**：假设我们正在创建一个网络或桌面应用程序，我们的应用程序需要访问 MySQL 数据库的数据，因此我们需要为应用程序创建一个用户账户，授予它阅读，并将数据写入应用程序数据库的权限，仅此而已，这个用户账户不能更数据库的结构，它也不应该能够创建新表或删除现有表。

**例如**：假设有人以数据库管理员的身份新加入了我们的机构，我们需要为这个人创建一个账户，以便他可以管理一个或多个司机开或整个 MySQL 服务器。

**创建新用户**

```sql
CREATE USER john
```

**限制用户的连接位置**，我们可以使用@，然后渐入计算机的 IP 地址如 127.0.0.1(本机)，也就是说这个用户只能从一台 安装了 MySQL 的计算机连接，如果他们试图从另外一台计算机连接，MySQL 会拒绝连接，这在云环境中非常有用。

通常我们会有一个网络服务器和一个数据库服务器，在数据库服务器上，当我们为应用程序创建新用户账户时，我们需要确保那个用户账户只能从网络服务器连接，所以这里要指定网络服务器的 IP 地址。

```sql
CREATE USER john@127.0.0.1
```

这里也可以指定一个主机名如 localhost，它代表了当前安装 MysQL 的这台计算机

```sql
CREATE USER john@localhost
```

我们还可以指定域名，比如 codewithmosh.com，现在这名用户可以从该域中的任何计算机连接，但是却无法从 codewithmosh.com 的子网域连接，

```sql
CREATE USER john@codewithmosh.com
```

若我们想要解决这个问题，我们需要在这里添加一个通配符，加上`%.`代表任何子网域，同时加上引号 (单双均)，这样 john 就可以从这个域的任何叫司机或任何子网域连接了

```sql
CREATE USER john@'%.codewithmosh.com'
```

如果 John 后面不加条件，就是说 John 可以从任何地方连接，没有限制

```sql
CREATE USER john
```

使用 IDENTIFIED BY 设置密码，一定要使用强密码 ，而不是图中的 1234

```sql
CREATE USER john IDENTIFIED BY '1234'
```

### 2. 查看用户

查看 MySQL 服务器的用户列表，一般有两种方法

我们有一个数据库`mysql`，里面有一张表`user`

```sql
SELECT * FROM mysql.user;
```

查询结果

```scss
+-------------------------------------------------------------------------+
|   Host |   User | Select_priv | Insert_priv | Update_priv | Delete_priv |
+-------------------------------------------------------------------------+
|    %   |   john |      N      |      N      |      N      |      N      |
+-------------------------------------------------------------------------+

```

主机表示了用户的连接点，我们创建了 John 但是没有指定主机，这里的主机被设置为`%`，它表示任何地方，John 可以从任何计算机连接 ，没有限制，我们还有中间三个账户，供 MySQL 自行使用，最后我们有根用户，这是我们在安装 M 有 SQL 时创建的用户账户，后面这些账户的主机都是 localhost，所以如果我想以根用户身份登陆，为必用这台计算机，不能原创连接并以根目录身份登陆，我们还有几个列来决定每个用户的权限

我们也可以在导航面板看到我们的用户

#### 3. 删除用户

当某个用户不再需要访问数据库时，我们需要删除它们的用户账户，这样它们就无法再访问我们的 MySQL 服务器

**示例：**
创建可以从 codewithmosh.com 连接的新用户 Bob，设置密码为 1234，假如他离职了，我们回数据库指定主机删除它即可

```sql
CREATE USER bob@codewithmosh.comm IDENTIFIED BY '1234';
DROP USER bob@codewithmosh.com;
```

通过删除不再使用的账户，可以减少潜在的安全风险。

#### 4. 更改密码

作为数据库管理员，我们会需要更别人的代码，又或自己的密码，这很简单，一般有两种方法

我们可以使用`SET  PASSWORD`语句

```sql
SET PASSWORD FOR john = '1234';
```

如果我们想更改自己的密码，使用如下代码 ，意思是修改当前用户的密码，不管是根用户还是其他人

```sql
SET PASSWORD = '1234';
```

另一种修改密码的方法要通过导航面板，在这里，我们可以更改用户的密码，也可以让密码失效，这会强制这名用户在下次登陆时更改密码，只要记住，每次我们在这里更改密码，还需要点击右下角的应用按钮

#### 5. 授予权限

创建用户之后 ，我们需要分配一些特权，有有两种常见情况

**第一种情况**，比如：假设我们有一个网络或桌面应用程序，并且像允许这个应用程序在数据中读写数据，仅此而已，我们不想让这个应用程序拥有创建新表或修改现有表的权限，这些只有管理员能做

让我们想象一个叫 moon 的应用程序，这个应用程序需要能带`sql_store`数据库中读写数据，首先我们需要为这个应用程序创建一个用户如`moon_app`，这样就清楚的说明了这个用户账户是要用于应用程序，我们给它一个密码，实际过程操作过程中，我们一定要使用强密码，这样我们就创建好了这个用户账户

```sql
CREATE USER moon_app IDENTIFIED BY '1234';
```

然后我们使用 GRANT 语句给这个用户一些特权，我们希望这么用户能够选择、插入、更新和删除数据，以及执行存储过程，这些是我们通常会授予应用程序账户的一些典型权限

```sql
CREATE USER moon_app IDENTIFIED BY '1234';

GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE
```

我们通过 ON 子句，来指定数据库，如`sql_store.*`代表`sql_store`下的所有表，我们也可以单独指定一张表如`sql_store.customers`

```sql
CREATE USER moon_app IDENTIFIED BY '1234';

GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE
ON sql_store.*
```

最后我们使用 TO 子句来指定用户账户，如果这个用户账户有主机、IP 地址或域名，也需要在这里明确

```sql
CREATE USER moon_app IDENTIFIED BY '1234';

GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE
ON sql_store.*
TO moon_app;
```

创建之后 ，我们用这个账户来连接到我们的服务器，来到主页创建新连接

我们把连接取名为`moon_app_connection`，输入用户名，点击 Store in Keychain…存储密码，随后测试连接，进入之后只看到一张表，这里我们可以使用`sql_store`并读取所有数据，当我们试着读取其他数据时，MySQL 会报错，拒绝`moon_app`的访问，也就是说我们不能访问任何其他的数据库

**第二种情况**，针对我们的管理员，假设有新人加入了我们的团队，而你想给予他们一个或者多个数据库，甚至整个 MySQL 服务器的管理权限

比如：早些时候我们创建了名为 John 的用户账户，假设 john 要成为管理员，我们再次使用 GRANT 语句给这个用户一些特权，这些特权不仅仅是读写数据，我们还想让这个用户能够创建表，创建触发器，修改现有表

[MySQL 权限表](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html)：在该页面，我们可以查看 MySQL 支持的所有权限，比如有 CREATE ROUTINE，它允许某人创建存储过程或函数，这里有很多特权，其中这一章只讨论 ALL，这是我们能给予某人的最高权限，通常对于管理员来说 ，我们要给他们所有特权

```sql
GRANT ALL
```

这里我们可以指定一个数据库，比如`sql_store.*`

```sql
GRANT ALL
ON sql_store.*
```

现在这个用户就拥有了这个数据库中所有表的最高级别权限，我们也可以让他能够访问我们服务器上所有的数据库`*.*`，这代表所有数据库中的所有表

```sql
GRANT ALL
ON *.*
```

最后，我们属于权限授予人

```sql
GRANT ALL
ON *.*
TO john;
```

### 6. 查看权限

有时，我们会想查看分配给一个用户账户的权限或者特权，一般有两种做法，使用导航面板或者使用 SQL

**SQL 示例**：

```sql
SHOW GRANTS FOR john
```

如果删掉 FOR 子句，我们可以看到当前用户的权限

```sql
SHOW GRANTS
```

我们也可以在导航面板找到这些信息，在 Administrative Roles，我们可以看到这名用户被分配的角色和权限

然后在一个“Schema Privileges”(模式权限)下，我们可以看到不同数据库的特定权限，因为 John 是个管理员，这里没什么特别的，因为他可以访问所有数据库

但是我们看之前创建的`moon_app`，在这块可以看到这个账户 只能访问`sql_store`数据库，这些是该数据库下分配给这位用户的权限，如果我们需要修改，只需点击 Schema 下这一栏，做出必要更改，然后点击应用即可

#### 7. 撤销权限

和授予类似，非常简单

先查看此前`moon_app`的权限

```sql
SHOW GRANTS FOR moon_app
```

举例子，我们先给`moon_app`授予一个权限

```sql
GRANT CREATE VIEW
ON sql_store.*
TO moon_app;
```

此前，这个账户只能读写数据和执行存储过程，所以他不能创建视图，现在我们 给予了它创建视图的特权，现在想要撤销这个特权，所以只需要把`GRANT`改成`REVOKE`

```sql
REVOKE CREATE VIEW
ON sql_store.*
FROM moon_app;
```

#### 8. 最小权限原则

在数据库安全中，始终应遵循 **最小权限原则**。即给用户分配的权限应严格限制在他们执行必要任务所需的范围内，避免授予不必要的高权限。例如，应用程序用户通常只需要 SELECT、INSERT、UPDATE、DELETE 权限，而管理员可能需要更多的权限，如 CREATE、DROP、GRANT 等。

通过合理分配权限，可以避免因用户操作失误或恶意行为导致的数据损坏或泄漏。

#### 9. 备份数据库

定期备份数据库是保障数据安全的另一个重要措施。通过备份，管理员可以在数据库发生故障或受到攻击时迅速恢复数据。MySQL 提供了多种备份方式。

### 总结

数据库的安全不仅仅是防止外部攻击，合理管理用户和权限同样至关重要。通过严格控制用户账户、最小化权限、定期更改密码和删除不必要的用户账户，可以有效降低数据库被滥用的风险。同时，定期备份数据也是保障数据安全的关键措施。
