# basic

> ```bash
> 
> find "/Users/fang/Desktop/React" -type f -name "*.srt" -exec sh -c '
> for file; do
>  output="${file%.srt}.txt"
>  sed -n "/^[^0-9]*$/p" "$file" > "$output"
> done
> ' sh {} +
> ```
>
> https://codewithmosh.com/p/the-ultimate-full-stack-javascript-developer-bundle-2024-edition
>  按照mosh的课程顺序学习



### 1. **Getting Started (2分钟)**

1. 欢迎
2. 学习前提

### 2. **Getting Started with React (18分钟)**

1. 什么是React
2. 设置开发环境
3. 创建React应用
4. 项目结构
5. 创建React组件
6. React的工作原理

### 3. **Building Components (1小时)**

1. 介绍
2. 创建ListGroup组件
3. 使用Fragments
4. 渲染列表
5. 条件渲染
6. 处理事件
7. 管理状态
8. 通过Props传递数据
9. 通过Props传递函数
10. 状态 vs Props
11. 传递Children
12. 使用React Dev Tools检查组件
13. 练习：构建按钮组件
14. 练习：显示警告框

### 4. **Styling Components (32分钟)**

1. 介绍
2. 使用Vanilla CSS（传统CSS）
3. 使用CSS Modules
4. 使用CSS-in-JS
5. 关注点分离（Separation of Concerns）
6. 内联样式
7. 流行的UI库
8. 添加图标
9. 练习：使用CSS Modules
10. 构建Like组件

### 5. **Managing Component State (42分钟)**

1. 介绍
2. 理解State Hook
3. 选择State结构
4. 理解严格模式（Strict Mode）
5. 更新数组对象
6. 更新数组
7. 使用Immer简化更新逻辑
8. 更新嵌套对象
9. 保持组件的纯粹性
10. 共享State between 组件
11. 更新对象
12. 练习：构建一个可展开的文本组件

### 6. **Building Forms (71分钟)**

1. 介绍
2. 构建表单
3. 受控组件
4. 访问输入字段
5. 提交表单
6. 使用React Hook Form管理表单
7. 应用表单验证
8. 使用Zod进行基于模式的验证
9. 禁用提交按钮
10. 构建ExpenseForm（费用表单）
11. 构建ExpenseFilter（费用过滤器）
12. 构建ExpenseList（费用列表）
13. 添加费用
14. 集成React Hook Form和Zod

### 7. **Connecting to the Backend (69分钟)**

1. 介绍
2. 理解Effect Hook
3. 理解HTTP请求
4. 使用Async/Await
5. 取消Fetch请求
6. 显示加载指示器
7. 提取可重用的API客户端
8. 创建数据
9. 更新数据
10. 删除数据
11. 处理错误
12. 创建自定义数据获取Hook
13. 提取用户服务（User Service）
14. 提取通用HTTP服务
15. 更新数据
16. 清理Effect
17. Effect依赖关系

### 8. **Project - Building a Video Game Discovery App (3小时)**

1. 我们要构建什么
2. 设置项目
3. 安装Chakra UI
4. 构建导航栏
5. 构建颜色模式切换
6. 实现暗黑模式
7. 创建响应式布局
8. 创建自定义的游戏数据获取Hook
9. 获取游戏数据
10. 获取平台信息
11. 获取游戏的类型（Genres）
12. 显示平台图标
13. 创建游戏卡片
14. 获取优化的图片
15. 改进用户体验，使用加载骨架屏
16. 显示评论分数（Critic Score）
17. 重构：去除重复样式
18. 显示游戏类型（Genres）
19. 按类型过滤游戏
20. 显示加载中的spinner
21. 修复Chakra菜单的问题
22. 按平台过滤游戏
23. 构建排序选择器
24. 构建平台选择器
25. 处理没有图片的游戏
26. 排序游戏
27. 高亮显示所选类型
28. 重构：提取查询对象
29. 自定义Chakra主题
30. 添加表情符号（Emojis）
31. 清理游戏卡片
32. 添加动态标题
33. 提交静态数据
34. 搜索游戏
35. 构建搜索输入框
36. 清理游戏类型
37. 重构游戏网格
38. 部署到Vercel
39. 课程总结
40. 接下来的步骤