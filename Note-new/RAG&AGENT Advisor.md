tech：Java + rag&agent based on Spring AI
建议：rag 和 agent 相关实现已清晰分开，需要先熟悉 rag，再阅读 agent 相关代码

# 创建项目

1. 方式

    - https://start.spring.io/

2. 架构

    - Java（17 以上） + Maven

3. Dependencies

    1. Spring Web
    2. PGvector Vector Database （Spring ai 支持大部份矢量数据库）
    3. Docker Compose Support
    4. Tika Document Reader
    5. Ollama

4. 额外需求

    - 下载 Ollama，安装 Embedding 与 Chat 模型，模型推荐见文末

# 项目配置

> Github：https://github.com/PangPang1999，Dockerfile和yml配置见项目代码

**配置顺序**

1. 修改 Dockerfile
2. 修改 yml 文件
3. 连接数据库
    - 启动项目后，通过“用户名”，“密码”，”数据库名称 rag_db“，连上对应数据库（PostgreSQL）

# 结构与测试

## rag

rag 读取文件的方式，项目中是在项目启动时自动读取 docs 中的 article.pdf，通过 rag 存储进矢量数据库，通过设置 defaultAdvisors 为矢量数据库，实现管理查询

测试方式为：向 8080 发送 get 请求，可以使用 HTTPie，通过 brew 安装，测试命令可以是`http -v :8080/`

## agent

agent 技术，即在大模型中，模型自己选择是否使用提供给它的工具，也可以指定工具使用。
通过@Component 将工具类注入容器，通过@Tool 将工具方法标记，可以直接取用

# End（后续为记录）

## 创建项目（初始尝试）

1. 方式

    - https://start.spring.io/

2. 架构

    - Java（17 以上） + Maven

3. Dependencies

    1. Spring Web
    2. OpenAI
    3. PDF Document Reader (也可以选择其他 Reader)
    4. PGvector Vector Database （Spring ai 支持大部份矢量数据库）
    5. Docker Compose Support

## 项目配置

1. 修改 Dockerfile

    ```dockerfile
    services:
      pgvector:
        image: 'pgvector/pgvector:pg16'
        environment:
          - 'POSTGRES_DB=markets'
          - 'POSTGRES_PASSWORD=password'
          - 'POSTGRES_USER=user'
        labels:
          - "org.springframework.boot.service-connection=postgres"
        ports:
          - '5432:5432'
    ```

2. 修改启动类名称（可选）

    - 将 RagDemoApplication 改为 Application

## Stuck

### OpenAI

OpenAI 的 apikey，国内无法购买，我花费了一段时间尝试购买，但是没有得到结果

### deepseek

官方文档：https://docs.spring.io/spring-ai/reference/api/chat/deepseek-chat.html
尝试 deepseek 后，发现其没有做 spring ai 相关的 嵌入模型 适配，只提供了 chat 模型，不行

尝试了很多次，不行

### Google Vertex AI

需要引入 Vertex AI Embeddings  和 Vertex AI Gemini，但是同样的无法付款

### Ollama（推荐）

官网：https://ollama.com

模型推荐（个人电脑 M2 Max 32G）

1. Embedding 模型推荐：nomic-embed-text
    - https://ollama.com/library/nomic-embed-text:v1.5
2. Chat 模型推荐：Mixtral 和 Qwen（前面俩我都跑不动）
    1. 通用聊天和推理：mixtral:8x7b
        - https://ollama.com/library/mixtral:8x7b
    2. 更好的中文支持：qwen3:32b
        - https://ollama.com/library/qwen3:32b
    3. 我选择了 qwen3:8b，相对较小，测试方便

查看所有模型命令：`ollama list`
特性：它不会一直运行所有模型。当你有请求（比如通过 API 或聊天）时，Ollama 会动态加载相应的模型到内存中进行处理。当请求结束后，如果一段时间内没有新的请求，Ollama 会自动将模型从内存中卸载，以释放资源。
