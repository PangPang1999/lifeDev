## MySQL 慢查询日志查看方法

1. 确认慢查询日志是否开启

    ```sql
    SHOW VARIABLES LIKE 'slow_query_log%';
    ```

    - 描述：输出中 `slow_query_log` 为 `ON` 表示已开启，默认为 OFF。**该指令会同步输出慢查询日志位置**

2.开启慢查询日志 ，用以下命令（root 权限）

    ```sql
    SET GLOBAL slow_query_log = 'ON';
    SET GLOBAL long_query_time = 1;  -- 超过1秒的SQL被记录
    ```

3. 慢查询测试指令（新 Query 执行）

    ```sql
    SELECT SLEEP(3);
    ```

4. 查询慢查询日志文件路径指令

    ```sql
    SHOW VARIABLES LIKE 'slow_query_log_file';
    ```

    - 描述：返回值如 `/usr/local/mysql/data/host-slow.log`，该路径普通用户（如 mac 登陆用户）无法通过文件夹访问，需要通过指令。

5. 获取慢查询日志内容

    1. 通过指令（命令行工具）查看

        ```bash
        sudo less /usr/local/mysql/data/host-slow.log
        ```

    2. 拷贝一份到本地（如桌面）自由查看

        ```bash
        sudo cp /usr/local/mysql/data/host-slow.log ~/Desktop/host-slow.log
        sudo chown $USER ~/Desktop/host-slow.log
        ```

    3. 内容示例（包括`SLEEP(2)`、`SLEEP(3)`两条）

        ```log
        /usr/local/mysql/bin/mysqld, Version: 8.0.42 (MySQL Community Server - GPL). started with:
        Tcp port: 3306  Unix socket: /tmp/mysql.sock
        Time                 Id Command    Argument
        # Time: 2025-06-16T03:34:35.518723Z
        # User@Host: root[root] @ localhost [127.0.0.1]  Id:   379
        # Query_time: 2.000524  Lock_time: 0.000000 Rows_sent: 1  Rows_examined: 1
        use store_api;
        SET timestamp=1750044873;
        /* ApplicationName=IntelliJ IDEA 2025.1.1 */ SELECT SLEEP(2);
        # Time: 2025-06-16T03:36:16.885966Z
        # User@Host: root[root] @ localhost [127.0.0.1]  Id:   379
        # Query_time: 3.005356  Lock_time: 0.000000 Rows_sent: 1  Rows_examined: 1
        SET timestamp=1750044973;
        /* ApplicationName=IntelliJ IDEA 2025.1.1 */ SELECT SLEEP(3);
        ```

        - Query_time：本条 SQL 执行耗时（秒），包括等待、执行、处理总时间。
        - Lock_time：执行该 SQL 时等待获取表锁、行锁所消耗的时间（秒）。
        - Rows_sent：返回给客户端的行数。即该 SQL 实际给前端、应用返回多少行结果。
        - Rows_examined：MySQL 为完成本条 SQL 实际扫描或检查的数据行数。如果远大于 Rows_sent，说明全表扫描或索引未生效
        - SET timestamp=：SQL 执行的时间戳，以秒为单位（Unix 时间戳）。
        - `/* ApplicationName=`：SQL 注释，标记 SQL 是哪个客户端/应用发起的，便于快速定位是哪个应用、哪个环境产生问题 SQL
        - 注释中的 SQL 语句：你实际执行的慢 SQL 语句。

    4. 分析慢查询日志（除了人工阅读，还可以使用 MySQL 自带的 `mysqldumpslow` 工具解析）

        ```bash
        sudo mysqldumpslow -s t -t 10 /usr/local/mysql/data/host-slow.log
        ```

        - 描述：终端执行该指令，而非 Query，`-s t`表示按时间排序，`-t 10`表示显示前 10 条最慢的 SQL

    5. 进一步分析可疑 SQL

        ```sql
        EXPLAIN SELECT ...;
        ```

        - 描述：把慢日志里的 SQL 拿出来，放到 MySQL 命令行或可视化工具里用 `EXPLAIN` 分析，查看各表的访问类型、索引使用情况、扫描行数等。
