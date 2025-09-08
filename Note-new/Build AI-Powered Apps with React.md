项目链接：https://github.com/PangPang1999/my-app

# Start

## 笔记概述

1. 基础认知

    - 语言模型（LLM）
    - Token 与长度/费用
    - 上下文窗口（Context Window）与截断

2. 模型与提示

    - 模型选择：能力 / 成本 / 延迟
    - 模型参数：温度、Top-p 等
    - Prompt Engineering：角色、约束、示例

3. 项目实战

    - 主题公园问答 Chatbot：快速检索与导航
    - 客户反馈分析：提炼可执行洞察、辅助秒级决策
    - 开源集成：可在任意环境运行的方案

4. 工程与工具

    - Clean Architecture 与最佳实践
    - 现代栈：Bun、Tailwind、shadcn/ui、Prisma、Ollama（字幕原拼：Bunn / Shatian / Olamo）
    - 目标：稳定、可维护、可部署

## 学前要求

1. 现代 JavaScript / TypeScript

    - 箭头函数（arrow functions）、解构赋值（destructuring）
    - Promise、async/await 异步流程
    - 模块化与基础类型（TS）

2. React 入门能力

    - 组件与 JSX
    - 基本状态与副作用：useState、useEffect

3. 可选加分项（非必需）

    - 简单后端与数据库常识

4. 学习方式与预期

    - 逐步讲解、从零起步
    - 目标：把 AI 融入应用，让产品更聪明更好用

## 笔记结构

> 简述：先学清楚原理，再做真实项目；从前后端分离的全栈架构，到 prompt 工程与数据库驱动的复杂功能，再到开源模型的集成，逐层递进，强调动手与理解。

**内容**

1. 学习定位

    - 非“速成/娱乐型”课程
    - 注重理解原理与架构
    - 目标：能独立构建有用的 AI 功能

2. 课程结构

    - Section 1：基础

        - 语言模型原理（LLM 能力与边界）
        - Token、上下文窗口
        - 模型参数（温度等）与调用方式

    - Section 2：全栈环境搭建

        - 前后端分离而非 Next.js 一体化
        - 技术栈：Express + React + Tailwind + shadcn/ui
        - 学习前后端交互逻辑

    - Section 3：Chatbot 项目

        - 问答机器人
        - 从后端开始 → 重构为 Clean Architecture → 再到前端交互
        - 循环迭代功能与 UI

    - Section 4：Prompt Engineering

        - 提供上下文
        - 控制输出格式
        - 使用示例减少幻觉
        - 错误处理与稳定性提升

    - Section 5：产品评论总结器

        - 构建完整系统：数据库 + Prisma migrations
        - 复杂度升级 → 引入更多工程化技巧
        - 技术可迁移至其他 AI 功能（不限于文本总结）

    - Section 6：开源模型集成

        - 为什么重要
        - 如何查找与运行本地模型
        - 集成至应用 → 打破对商业 API 的依赖

## 开发环境准备

1. `Node.js` 版本 `22.19`
2. 编辑器选择 VS Code
3. 其余工具按课程进度再装

# Introduction to AI Models

## AI Engineer 是什么

> 简述：AI Engineer 用现成大模型做功能落地（像用数据库一样调用与集成），而不是训练模型本身。目标是把 AI 变成可靠、可维护的产品能力。

**知识树**

1. 角色定义与边界

    - AI Engineer：集成预训练 LLM，设计数据流与接口，保障质量/成本/延迟。
    - ML Engineer：数据清洗、模型训练与调参、训练管线与研究。

2. 行业趋势与需求

    - 模型/工具/API 快速迭代 → 新岗位与新期望。
    - 企业需要“把 AI 变成实用功能”的工程师。
    - 价值取向：提效、降本、提升体验与转化率。

3. 常见功能范式

    - 摘要：电商评论速览（例：亚马逊）→ 快速决策。
    - 生成：营销邮件/文案（例：ActiveCampaign）→ 减少冷启动。
    - 翻译/本地化：社媒一键翻译 → 自动识别语言与场景。
    - 审核：平台自动识别垃圾/不当内容（例：YouTube/Twitch）。
    - 工单自动化：分类、优先级与路由（例：Freshdesk）。
    - 场景化问答：特定实体助手（例：Redfin 房源问答）。
    - 共同要点：正确性、稳定性、时延、成本、可观测性。

## 什么是大模型

> 简述：大语言模型（LLM）通过海量数据的训练来理解和生成自然语言，预测性强但没有真正的理解力。它们通过数学和概率生成输出，依赖训练数据的质量，影响结果的可靠性与偏见。课程将探讨如何与这些模型互动，以及它们的局限性。

**知识树**

1. 大语言模型的定义

    - 语言模型是一个训练出来理解并生成自然语言的系统。
    - 通过大量文本（书籍、文章、论坛、代码等）学习语言中的统计模式（语法、语调、常识等）。
    - 模型的核心是预测下一个词汇或句子，而不是理解其含义。

2. 模型规模与参数

    - 大型语言模型通常包含数十亿参数，这些参数代表语言模式（如语法、风格等）。
    - 参数的数量和计算能力决定了模型的“规模”和能力。
    - 输出流畅、结构良好，但本质上只是基于数据中的概率计算，不具备理解或意识。

3. 模型的局限性

    - 无理解能力：模型并不“理解”其生成的内容，它基于统计数据生成输出。
    - 输出差异：同样的问题可能会得到不同的回答，因为每次生成的结果都是基于概率的。
    - 训练数据的质量至关重要：偏差、不准确或低质量的数据会影响模型的输出，可能产生误导性的或错误的回答。

4. 训练与应用的挑战

    - 数据质量：模型依赖于清晰、高质量的数据。如果数据不可靠，模型的输出也会出现问题。
    - 代码生成的风险：模型训练于大量公共代码库，代码虽然表面上看起来干净、规范，但可能包含错误、过时的实践或反模式。
    - 训练的成本与资源：训练一个大型模型需要巨大的计算资源，仅有少数公司能够承担这项成本。作为开发者，我们不需要训练模型，只需学会如何与这些模型互动，理解其局限性，并将它们集成到实际应用中。

5. 模型与应用的关系

    - 与数据库类比：开发者不需要构建数据库引擎，只需了解如何使用它。同样，开发者也不需要训练自己的大模型，而是要学会如何通过提示与模型互动，如何利用现有模型来构建智能功能。
    - 应用实践：开发者的任务是利用这些已训练好的大模型，构建更加智能、有效的应用功能。

## 大模型能用来做什么

> 简述：大语言模型（LLM）作为辅助工具，在现代应用中主要负责文本处理任务，如内容生成、分类、翻译、提取信息和构建聊天机器人等。它们通过输入输出交互方式提升用户体验，而通常不作为核心模块。

**知识树**

1. 总结功能

    - 任务：将长文本（如产品评论、文章）浓缩为简短总结，帮助用户快速获取关键信息。
    - 例子：电商平台（如亚马逊）使用 LLM 来快速展示产品评价摘要，提升购买决策效率。

2. 内容生成

    - 任务：根据简短提示生成完整文本内容。
    - 例子：
        - 生成电子邮件：根据关键词或上下文自动生成邮件内容。
        - 产品描述生成：自动为商品生成描述，提升内容创建效率。
        - 社交媒体内容：自动撰写推文、广告文案，提升社交平台的互动与推广效果。

3. 文本分类

    - 任务：基于输入的文本，将其分配到预定类别。
    - 例子：
        - 垃圾邮件识别：判断邮件是否为垃圾邮件。
        - 情感分析：分析评论或文章的情感倾向（如正面或负面）。
        - 支持工单分类：自动将客户支持请求分类并分配给相应的部门（如账单、登录问题等）。

4. 数据结构化提取

    - 任务：从非结构化文本（如 PDF 文件）中提取关键信息，并转换为结构化数据。
    - 例子：提取发票号码、金额、地址等信息，用于自动化文档处理和数据录入。

5. 机器翻译

    - 任务：将文本从一种语言翻译为另一种语言。
    - 例子：Twitter、iOS 提供实时翻译功能，用户看到外语内容时，模型自动翻译成目标语言。

6. 聊天机器人

    - 任务：构建能够回答用户问题的聊天机器人。
    - 例子：根据用户数据或业务文档，提供实时客户支持和信息查询，提升互动体验。

7. 输入输出模式

    - 大语言模型的工作方式：文本输入 → **文本输出**。
    - 输出形式不限于文本，还可以是 JSON 对象、数组、数字，甚至图像等，取决于任务需求。例如，输出结构化数据供后端处理和存储。

## 理解 Tokens 和上下文窗口

> 简述：Tokens 是大语言模型处理文本的基本单位，控制和优化 tokens 使用对于节省成本、避免超出限制非常关键，尤其在处理长文本或多轮对话时，合理管理 tokens 和上下文窗口能有效提升性能和体验。

**知识树**

1. 什么是 Token

    - 定义：Tokens 是语言模型处理文本的基本单位，介于字符和单词之间。它们可以是完整的单词、部分单词、标点符号，甚至空格或 emoji。
    - 例如：“ChatGPT is amazing!” 被分解为多个 tokens，如 "Chat", "GPT", "is", "amazing", "!"。
    - [OpenAI Tokenizer](https://platform.openai.com/tokenizer) 可以帮助分析输入文本的 token 数量。

2. Token 的作用与成本

    - 成本影响：每个 token 的处理都涉及费用。长文本处理时，token 数量直接决定了成本。
    - 模型选择：选择模型时不仅要考虑性能，还要评估与任务需求匹配的 token 成本，避免使用不必要的大模型。
    - 成本管理：生成大量内容（如总结长文档）时，token 使用和成本可能会快速增加。

3. 上下文窗口（Context Window）

    - 定义：上下文窗口是指模型能够处理的最大 token 数量，包括输入提示、模型输出和对话历史。
    - 限制：当输入超出上下文窗口时，模型可能会在未完成句子的情况下停止输出。
    - 模型差异：不同模型的上下文窗口大小不同，选择合适的窗口大小能够确保流畅的用户体验。例如，某些任务可能不需要最大的上下文窗口。

4. 选择模型与需求匹配

    - 合理选择：并非所有应用都需要最强大的模型。根据实际需求选择合适的模型和上下文窗口大小，能够平衡成本和性能。
    - 实例：Mistral 模型对于博客总结或支持工单分类等任务非常适合，而不需要选择更高端的模型。

5. Token 计数与成本管理

    - 下节课将介绍如何编程计数 tokens，以便估算成本并确保请求在上下文窗口限制内。

## 计算 Tokens 的方法

> 简述：通过编程计算 tokens，可以估算与管理模型的使用成本，确保请求不会超出限制。使用 Tiktoken 库，可以轻松计算输入文本的 token 数量。本节介绍一个简单的计算 token 工具 tiktoken

**知识树**

1. 初始化项目与安装依赖

    - 创建一个项目目录并初始化 `package.json` 文件。
    - 安装 `tiktoken` 库：用于分解文本为 tokens。
        ```sh
        mkdir playground # 创建项目目录
        cd playground
        npm init --y # 初始化项目，创建 `package.json` 文件。
        npm i tiktoken # 安装 `tiktoken` 库：用于分解文本为 tokens。
        ```

2. Tiktoken 使用

    - 在 VS Code 中创建 `index.js` 文件
    - 导入并使用 `getEncoding` 函数获取编码器。
    - 编码器将文本转换为 tokens。
    - 使用 `node index.js` 运行代码

3. 处理语法

    - 该初始化方式创建项目后，默认为 CommonJS 模块格式，建议调整为 module 模式，确保代码按预期运行。

**代码示例**

1. 创建 `index.js` 文件并导入 `tiktoken`

    ```javascript
    // index.js
    import { getEncoding } from "tiktoken";

    const encoding = getEncoding("cl100k_base"); // 使用默认编码
    const tokens = encoding.encode(
    	"hello world this is the first test of tiktoken library"
    );
    console.log(tokens);

    // 输出示例
    ╰─ node index.js
    Uint32Array(11) [
      15339, 1917,   420,
        374,  279,  1176,
       1296,  315, 87272,
       5963, 6875
    ]
    ```

    - 通过 `getEncoding` 获取编码器，将输入文本分解为多个 tokens，并输出。

2. 处理模块语法错误：

    如果使用 ES 模块导入时遇到错误，可以调整 `package.json` 配置：

    ```json
    // package.json
    {
    	"name": "playground",
    	"version": "1.0.0",
    	"description": "",
    	"type": "module", // 新增（修改后删除注释）
    	"main": "index.js",
    	"scripts": {
    		"test": "echo \"Error: no test specified\" && exit 1"
    	},
    	"keywords": [],
    	"author": "",
    	"license": "ISC",
    	"dependencies": {
    		"tiktoken": "^1.0.22"
    	}
    }
    ```

    - 设置 `type` 为 `module`，以便使用 ES 模块语法。

## 选择合适的 AI 模型

> 简述：选择合适的 AI 模型要基于多种因素，如任务复杂度、响应速度、输入输出类型、成本、上下文窗口和隐私需求。本节将介绍选择模型时需要考虑的关键标准，帮助开发者做出最合适的决策。

**知识树**

0. openAI 模型比较地址

    - https://platform.openai.com/docs/models/compare

1. 任务复杂度与模型智能

    - 需要解决复杂问题时，选择具有较强推理能力的模型。
    - 对于简单任务，如文本提取、分类或总结，较小的模型也能胜任，且通常更高效。

2. 响应速度

    - 较大的模型通常生成内容较慢，尤其是生成较长的输出时。
    - 如果应用需要实时响应（如自动补全、快速总结或短答），则应选择速度较快的模型。

3. 输入输出类型

    - 文本：大多数模型支持文本输入输出。
    - 多模态模型（LMMs）：处理图像、音频、视频或其组合的模型。如果应用需要处理图像内容（如图像描述），则需选择支持多模态的模型。

4. 成本管理

    - 根据应用需求，选择合适的模型避免超出预算。
    - 处理长文档或生成大量内容时，token 数量较多，成本会快速上升。应评估模型的输入和输出费用，选择性价比高的模型。

5. 上下文窗口（Context Window）

    - 上下文窗口决定了模型一次可以处理的文本量，包括输入、输出和对话历史。
    - 对于长文档总结、大规模代码分析或多轮对话，需要选择具有大上下文窗口的模型。

6. 隐私需求

    - 如果应用处理敏感数据（如医疗记录），使用开源自托管的模型可能更安全，避免将数据发送到外部服务器。
    - 将在课程后面深入讨论自托管模型的使用。

7. 模型选择时的具体考量

    - 多模态 vs 单模态：某些模型支持多模态输入（如文本和图像），但可能仅支持文本输出；而其他模型可能专注于生成图像或其他类型的输出。
    - 模型定价：选择合适的模型时，应比较不同模型的定价结构（输入与输出的费用）来控制成本。
    - 知识截止日期：模型的知识库更新时间影响其对最新信息的掌握，可能有些模型因训练数据的截止日期较早而无法获取最新信息，但可能更适合某些特定任务。

8. 模型比较工具

    - 通过对比不同模型的能力、成本和特点，选择最适合的模型。
    - 可在平台提供的模型比较工具中查看具体模型的上下文窗口、输出 token 数量限制及价格等关键参数。

## 模型设置与输出控制

> 简述：用少量开关，决定模型“产什么”“多随机”“多长”“怎么追踪”。学会这些设置，输出才可解析、可控、可复现。

**知识树**

0. openai 调试说明

    - 地址：https://platform.openai.com/chat/edit?models=gpt-4.1
    - 缺点：付费麻烦，国内充值 openai 存在巨大阻力
    - 优点：相较于 deepseek，openai 更方便在线调试参数进行测试，本节基于 openai 进行调试

1. 输出格式（text / JSON object / JSON schema）

    - text：直接自然语言，读起来顺滑，但不便机器处理。
    - JSON object：要求“结构化回复”，后端易解析。示例提示：`请以JSON返回：{ "benefits": string[] }`。
        - 如：`give me 3 benefit of exercising as a json object`
    - JSON schema：先定义字段与类型（如 exercise.benefits 为 string\[]、required 等），再让模型按此生成，更稳更可控。适合“必须合规”的接口回复。
        - 如：点击 Generate，配合`{"exercise":{"benifits":[]}`，可快速生成标准的格式

2. 随机性与风格（temperature 与 top_p）

    - temperature：数值越高越发散，越低越确定。
        - 总结/事实问答用低值（≈0.2–0.4）
        - 脑暴/文案用高值（≈0.7–1.0）
        - 极端值易胡言乱语，避免接近 0 或 2
    - top_p：按“累积概率”裁剪可选词。低 top_p 只取最可能的词，更保守
    - 通常只调一个旋钮（temperature 或 top_p），不同时大改；拿不准就只调 temperature。

3. 长度与上下文（max output tokens 与 context window）

    - max output tokens：限制“单次回复的最大长度”。值太小会中途截断。
        - 两种缓解：
            - 提高上限；
            - 在提示中明确要求“写完整答案，不要中途截断”。
                - 如：`write a story about a robot in 50 tokens or less. write a complete answer without cutting off mind-sentence`
    - context window：一次请求能承载的总 token 上限＝输入 + 输出 +（对话历史）。做长文档总结/长会话，需选更大的窗口。注意：大窗口 ≠ 无限输出，仍受 max output tokens 约束。

4. 可观测性与成本（日志、价格、速度、模态）

    - 日志（store logs）：默认开启。Dashboard→Logs 可看每次请求的输入/输出、模型、时间、token 用量、温度、响应 ID 等；响应 ID 可用于会话追踪与调试。处理敏感数据时，评估是否需要关闭或做脱敏。
    - 价格：输入与输出分开计费；长文档或长回复成本增长快。先估 token，再定格式与上限。
    - 速度：更强模型常更慢；实时体验（自动补全、短答）优先选快模型并控制输出长度。
    - 模态：有的仅文本输出；有的支持图像输入；需要“生成图像”需选专门图像模型。选型以“需求 → 能力 → 成本/延迟”倒推，而非盲目追新。

## 调用模型（openai）

> 简述：用 OpenAI JS SDK 调用模型，安全保存密钥，设置参数，读取普通响应与流式响应，必要时产出 JSON/JSON Schema，拿到用量与响应 ID 做观测。

**知识树**

1. 基础步骤

    1. 准备 API Key
        - 在控制台创建 API Key，并分配到项目。
        - 一般情况下密钥放环境变量，不写进源码。
    2. 安装 openai 依赖
        - `npm i openai`

2. 基本调用（同步拿整块结果）

    ```js
    import OpenAI from "openai";

    const OPENAI_API_KEY = "";

    // 创建 OpenAI 客户端
    const client = new OpenAI({
    	apiKey: OPENAI_API_KEY,
    });

    const responses = await client.responses.create({
    	model: "gpt-4.1",
    	input: "Write a story about a robot",
    	temperature: 0.7,
    	max_output_tokens: 50,
    });

    console.log(responses);
    ```

3. 基本输出内容

    ```json
    {
    	"id": "resp_68b99853289481908beaa09f6c0e48a40cf02427dc5db744", // 当前响应的唯一 ID
    	"object": "response", // 对象类型，这里是 response（表示一次生成响应）
    	"created_at": 1756993619, // 响应生成的时间戳（Unix 时间）
    	"status": "incomplete", // 响应状态，这里是未完成（因被截断或其他原因）
    	"background": false, // 是否在后台运行
    	"error": null, // 错误信息（如果有错误会在这里体现）
    	"incomplete_details": { "reason": "max_output_tokens" }, // 未完成的原因，这里是达到最大输出 token 限制
    	"instructions": null, // 额外的指令信息（如果有会出现在这里）
    	"max_output_tokens": 50, // 本次生成允许的最大输出 token 数
    	"max_tool_calls": null, // 限制的最大工具调用次数（为 null 表示无限制或未指定）
    	"model": "gpt-4.1-2025-04-14", // 使用的模型名称和版本
    	"output": [
    		// 模型的输出结果（数组形式，因为可能有多个输出单元）
    		{
    			"id": "msg_68b99854caec81909c1784fad33720f60cf02427dc5db744", // 输出消息的唯一 ID
    			"type": "message", // 输出的类型，这里是 message（文本消息）
    			"status": "incomplete", // 该消息的状态，这里是未完成
    			"content": [Array], // 消息的实际内容（这里被省略为 [Array]）
    			"role": "assistant" // 角色，表示这是助手（AI）生成的
    		}
    	],
    	"parallel_tool_calls": true, // 是否支持并行调用工具
    	"previous_response_id": null, // 上一个响应的 ID（用于链式对话时）
    	"prompt_cache_key": null, // 提示词缓存键（若启用缓存可复用）
    	"reasoning": { "effort": null, "summary": null }, // 模型的推理相关信息（如摘要、推理强度）
    	"safety_identifier": null, // 安全过滤相关的标识（如有风险会有值）
    	"service_tier": "default", // 服务等级（可能有 default、premium 等）
    	"store": true, // 是否存储此次响应
    	"temperature": 0.7, // 生成随机性参数，数值越高输出越多样化
    	"text": { "format": { "type": "text" }, "verbosity": "medium" }, // 文本输出的格式和详细程度
    	"tool_choice": "auto", // 工具调用策略（auto 表示自动选择）
    	"tools": [], // 可用的工具列表（为空表示未使用工具）
    	"top_logprobs": 0, // 是否返回 token 的概率分布（0 表示不返回）
    	"top_p": 1, // nucleus sampling 参数，控制采样多样性
    	"truncation": "disabled", // 是否启用截断，这里是禁用
    	"usage": {
    		// token 使用情况
    		"input_tokens": 13, // 输入 token 数量
    		"input_tokens_details": { "cached_tokens": 0 }, // 输入 token 细节（缓存命中数）
    		"output_tokens": 50, // 输出 token 数量
    		"output_tokens_details": { "reasoning_tokens": 0 }, // 输出 token 细节（推理 token 数）
    		"total_tokens": 63 // 总 token 数（输入+输出）
    	},
    	"user": null, // 用户 ID（如果有会出现在这里）
    	"metadata": {}, // 元数据（通常是开发者自定义）
    	"output_text": "Once upon a time, ... Pixel" // 拼接后的完整输出文本
    }
    ```

4. 流式输出（边生成边显示）

    ```js
    import OpenAI from "openai";

    const OPENAI_API_KEY = "";

    const client = new OpenAI({
    	apiKey: OPENAI_API_KEY,
    });

    const stream = await client.responses.create({
    	model: "gpt-4.1",
    	input: "Write a story about a robot",
    	temperature: 0.7,
    	max_output_tokens: 50,
    	stream: true, // 传 `stream: true` 获得异步可迭代对象。
    });

    // Async iterable stream
    for await (const event of stream) {
    	// console.log(event);
    	// 执行后，会发现，需要的内容为每个event的delta属性
    	// 并非每一个event都有delta属性，需要进行判空
    	// 此外为避免按单词输出，需要使用process.stdout.write

    	// 该输出方式接近平时使用的GPT的回复方式，即“边出边看”
    	if (event.delta) process.stdout.write(event.delta);
    }
    ```

5. 两个常见坑与对策

    - 输出被截断：增大 `max_output_tokens`，并在提示里加“请输出完整答案，不要中途截断”。
    - 终端打印出现 `undefined`：只在 `event.delta` 存在时写出，不要对所有事件输出

6. DeepSeek 补充（同样是安装 openai 依赖）

    ```js
    const client = new OpenAI({
    	baseURL: "https://api.deepseek.com/v1",
    	apiKey: DeepSeek_API_Key,
    });

    const stream = await client.chat.completions.create({
    	model: "deepseek-chat",
    	messages: [{ role: "user", content: "写一个关于机器人的故事" }],
    	temperature: 0.7,
    	max_tokens: 250,
    	stream: true, // 开启流式
    });

    // 遍历流式响应
    for await (const chunk of stream) {
    	process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
    ```

# Setting Up a Modern Full-Stack Project

## Tech Intro

1. 将要使用的技术
    - Bun：类似 Node.js
    - Vite：前端构建工具
    - Express：轻量级 Web 框架
    - Tailwind：一个原子化的 CSS 框架
    - shadcn/ui：一个基于 Radix UI + Tailwind 的组件库
    - Prettier：代码格式化工具
    - Husky：Git ho2oks 工具，在 Git 提交或推送时自动执行脚本，常见于提交前运行 Prettier / ESLint / 测试。

## Bun 介绍

> 简述：Bun 是一体化的 JavaScript/TypeScript 运行时与工具链（运行时 + 包管理器 + 任务运行器 + TS 转译）。相比 Node 需要多件工具配合，Bun 开箱即用、更顺手；若偏好 Node，也能完成同样工作。

**知识树**

1. Bun 是什么

    - 现代 JavaScript/TypeScript 运行时工具，兼具集成包管理与构建功能。

2. 对比 Node

    - Node.js：是一个让 JavaScript 能在服务器上跑的环境，它用 V8 引擎，并提供文件、网络等接口。
    - Bun：也是让 JavaScript/TypeScript 能在服务器上跑的环境，但内置了包管理、打包、测试等功能，目标是更快更全。

3. 安装与校验

    - 官网：https://bun.sh/
    - 安装命令（mac）：`curl -fsSL https://bun.sh/install | bash`
        - 安装后根据提示，执行`exec /bin/zsh `
    - 校验：`bun --version`，看到版本号即安装成功。

## 项目结构

> 简述：本节演示一个基础的全栈项目（前端+后端），本节搭建一个基本结构

**知识树**

1. 初始化

    - 创建根目录`my-app`
    - 使用 bun 初始化`bun init`，在选项中 选择 `Blank`
    - 删除`.cursor`目录（由于该项目不用 cursor）

2. 创建工作目录

    - 创建 packages，其内创建`client`、`server`文件夹，分别作为前端和后端的根目录

3. 设置工作目录

    - 在`package.json`中设置工作目录，增加 workspaces 属性，如
        ```json
          "workspaces": [
            "packages/*"
          ]
        ```
    - 作用
        1. 组织多个子项目（包）：
            - 这样 packages/ 下的每个文件夹（如 packages/api、packages/ui）都会被当作一个独立 npm 包。
        2. 依赖统一管理
            - 所有子项目的依赖会被提升（hoist）到根目录的 `node_modules`，避免重复安装。
            - 根目录 `package.json` 可以放公共依赖。
        3. 子项目之间的本地联动
            - 如果 `packages/api` 依赖 `packages/ui`，不用先发布到 npm，workspace 会自动把它们链接在一起。
            - 就像使用本地包，但管理方式和 npm 发布的一样。
        4. 工具支持
            - bun、yarn、pnpm、npm（7+）都支持 `workspaces`。
            - 常见命令如 `yarn install` 会一次性安装整个 Monorepo 的依赖。

## 构建 express 后端

> 简述： 使用 express 搭建简单的后端

**知识树**

1. 初始化

    - 进入`packages/server`
    - 使用 bun 初始化`bun init`，在选项中 选择 `Blank`
    - 删除`.cursor`目录（由于该项目不用 cursor）

2. 安装 `express`

    - `bun add express`

3. 安装 `@types/express`

    - `bun add -d @types/express`
    - `-d` 即 `--dev`，表示安装到 开发依赖（devDependencies），而不是 dependencies。
    - 这是 Express 的 TypeScript 类型定义包。
    - 因为 Express 本身是用 JavaScript 写的，不带 TypeScript 类型。
    - 装上 `@types/express` 后，编辑器和编译器就能识别 Express 的 API，提供 类型检查 和 自动补全。

4. 代码

    - 通过`app.get`定义一个 GET 接口
    - 通过`app.listen`定义监听端口
    - 通过`bun run index.ts`命令启动后端

5. 定义启动命令

    - 在`client`中的`package.json`中，定义`scripts`
    - 设置`start: bun run index.ts`，将启动命令简化为`bun start`，或者`bun run start`
    - 设置`dev: "bun --watch run index.ts"`，设置热部署命令为`bun dev`，或者`bun run dev`

## 用环境变量安全管理 API Key

> 简述：API Key 是敏感信息，不能写进源码。正确做法是交给操作系统的环境变量去保存，在本地开发时用 `dotenv` 或其他工具自动加载，并通过 `.env.example` 告诉团队需要哪些变量。每次修改后都要重启应用，新的值才会生效。

**知识树**

1. 为什么不能写进源码

    - 一旦把 Key 写在代码里，只要代码被共享或上传，任何人都能用这个 Key 调接口，费用算在你头上。
    - 安全起见，Key 应该始终隔离在源码之外。

2. 如何在系统里存 Key

    - Mac/Linux 用 `export`，Windows 用 `set` 或 `$env:`，把 Key 写入环境变量。
    - 例如：`export OPENAI_API_KEY=1234`，在代码里通过 `process.env.OPENAI_API_KEY` 读取即可。

3. 本地开发的简化方案：dotenv

    - 手动每次 export 太麻烦，可以安装 `dotenv` 库，在 server 目录命令`bun add dotenv`
    - 在 server 目录放一个 `.env` 文件，把 Key 写进去，`=`前后不留空格，不使用`""`
        ```
        OPENAI_API_KEY=sk-xxxx
        ```
    - 在入口文件第一行加 `import 'dotenv/config'`，运行时会自动加载变量。
    - `.env` 默认被 gitignore 忽略，不会上传到代码仓库。

4. 最佳实践

    - 用 `.env.example` 列出需要的变量名，不写值。
    - 团队成员复制为 `.env` 并填入各自的 Key。

5. 常见问题

    - 如果之前在终端设置过同名变量，会覆盖 `.env` 的值，需要清掉再运行。
    - 修改 `.env` 后必须重启应用才能生效。

**代码示例**

1. 引入 `dotenv`

    ```js
    // packages/server/index.ts
    import express from "express";
    import type { Request, Response } from "express";
    import dotenv from "dotenv";

    dotenv.config(); // 写在最前面

    const app = express();
    const port = process.env.PORT || 3000;

    app.get("/", (req: Request, res: Response) => {
    	res.send(process.env.OPENAI_API_KEY);
    });

    app.listen(port, () => {
    	console.log(`Server is running at http://localhost:${port}`);
    });
    ```

## Vite 构建 React 前端

> 简述： 使用 Vite 搭建简单的 React 前端

**知识树**

1. Vite

    - 官网：https://vite.dev/
    - 对应 bun 的初始化命令是`bun create vite`，在当前目录中初始化，命令为`bun create vite .`

2. 初始化

    - 进入`packages/client`
    - 使用 vite 初始化`bun create vite .`，在选项中 选择 `React`，之后选择 `TypeScript`
    - 使用`bun install`或者`bun i`初始化项目
    - 启动命令`bun run dev`

3. **坑与解决**

    - 坑
        - 在`packages/client`直接执行`bun install`，仍然会在`client`目录下生成`node_modules`文件夹
    - 解决方式 1（粗暴）
        - 先删除根目录的`bun.lock`（以及`client`目录下生成`node_modules`），之后在`packages/client`直接执行`bun install`，这种方式会在根目录下生成新的`bun.lock`
    - 解决方式 2
        - 理解：使用 vite 初始化后，client 下的 package.json 文件中声明了一些依赖，如果声明的依赖版本，与根目录中 package.json 文件中声明的依赖版本不一致，那么会在`client`目录下生成`node_modules`文件夹
        - 方式：检查`client`目录下生成`node_modules`文件夹中的依赖如 typescript，对比其在 client 下的 package.json 文件声明的版本，和根目录中 package.json 文件中声明的版本，使版本一致，即可避免该问题

## 前后端连接

> 简述：前端要访问后端接口，需要在服务端定义 API，再在客户端调用。由于前端和后端运行在不同端口，需要配置代理，把以 `/api` 开头的请求转发到后端。

**知识树**

1. 服务端定义接口

    - 在 `server/index.ts` 添加新路由，方便前端获取结构化数据。
        - 路径：`/api/hello`
        - 返回 JSON：`{ message: "hello world" }`

2. 客户端调用接口

    - 在 `App.tsx` 中：
        - 用 `useState` 保存响应数据。
        - 用 `useEffect` 在组件挂载时调用 `fetch("/api/hello")`。
        - 把返回的 `data.message` 设置到 state，并渲染到页面

3. 代理配置

    - 因为 Vite 前端项目与后端端口不同，直接请求 `/api/hello` 会失败。
    - 在 `vite.config.ts` 里配置
        ```ts
        server: {
          proxy: {
            "/api": "http://localhost:3000" // 后端地址
          }
        }
        ```
    - 这样前端请求 `/api/...` 会被自动转发到后端。

4. 整体流程

    - 浏览器请求 `/api/hello` → Vite 代理 → 后端返回 JSON → React 组件接收并展示。

5. 其他

    - 删除 `index.css` 中的样式

**代码示例**

1. 服务端接口

    ```js
    // packages/server/index.js
    import express from "express";
    import type { Request, Response } from "express";
    import dotenv from "dotenv";

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000;

    app.get("/api/hello", (req: Request, res: Response) => {
    	res.json({ message: "Hello, World!" }); // 返回json
    });

    app.listen(port, () => {
    	console.log(`Server is running at http://localhost:${port}`);
    });
    ```

2. 客户端调用

    ```tsx
    // packages/client/src/App.tsx
    import { useEffect, useState } from "react";

    function App() {
      const [message, setMessage] = useState("");

      useEffect(() => {
        fetch("/api/hello")
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
      }, []);

      return (
        <>
          <p>{message}</p>
        </>
      );
    }

    export default App;
    ```

3. Vite 代理配置

    ```ts
    // package/client/vite.config.ts
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          "/api": "http://localhost:3000",
        },
      },
    });
    ```

## 一条命令同时启动前后端

> 简述：用 `concurrently` 在项目根目录并行启动 server 和 client，用一个终端完成开发启动，并用前缀颜色区分日志。

**知识树**

1. 安装与位置

    - 在项目根安装开发依赖 concurrently，命令`bun add -d concurrently`
    - 需在根目录执行启动命令，避免开两个终端。

2. 根脚本组织并行任务

    - 在根目录的 `index.ts` 引入 concurrently 并调用。
    - 传入命令数组，每个命令描述一个应用：
    - 细分
        - `name`：任务名（如 `server`、`client`），用于日志前缀。
        - `command`：启动指令（如 `bun run dev`）。
        - `cwd`：工作目录（如 `packages/server`、`packages/client`）。
        - `prefixColor`：前缀颜色（如 `cyan`、`green`）用于区分输出。

3. 封装根级启动脚本

    - 在根 `package.json` 增加脚本：`"dev": "bun run index.ts"`。
    - 后续只需在根目录执行：`bun run dev`，即可同时拉起前后端。

**代码示例**

1. 根目录下`index.ts`

    ```ts
    // index.ts
    import concurrently from "concurrently";

    concurrently([
      {
        name: "server",
        command: "bun run dev",
        cwd: "packages/server",
        prefixColor: "cyan",
      },
      {
        name: "client",
        command: "bun run dev",
        cwd: "packages/client",
        prefixColor: "green",
      },
    ]);
    ```

2. 根目录下`package.json`

    ```json
    // package.json
    {
    	"name": "my-app",
    	"module": "index.ts",
    	"type": "module",
    	"private": true,
    	"scripts": {
    		"dev": "bun run index.ts"
    	},
    	"devDependencies": {
    		"@types/bun": "latest",
    		"concurrently": "^9.2.1"
    	},
    	"peerDependencies": {
    		"typescript": "^5"
    	},
    	"workspaces": ["packages/*"]
    }
    ```

## 集成 Tailwind CSS

> 简述：使用 Tailwind CSS 提供的原子化类名，直接在组件中完成样式定义，避免频繁切换 CSS 文件与 JSX。安装与配置完成后，可以快速应用字体、颜色、间距等常用样式。

**知识树**

0. 删除 `index.css` 中样式

1. 什么是 Tailwind

    - Utility-first 的 CSS 框架，提供大量原子类，通过类名直接组合出所需样式，减少手写 CSS。
    - 官网：https://tailwindcss.com/
    - 安装：https://tailwindcss.com/docs/installation/using-vite
    - 官网是安装指南使用的是 npm，这一节使用 bun 来进行安装，如下

2. 安装依赖

    - 终端进入客户端目录：`cd packages/client`
    - 安装 Tailwind 与相关插件：`bun add tailwindcss @tailwindcss/vite`

3. 配置 Vite

    - 在 `vite.config.ts` 中引入并启用 Tailwind 插件（官网教程）
        - `import tailwindcss from "@tailwindcss/vite";`
        - 在`plugins`数组中增加`tailwindcss()`
    - 在 `index.css` 中导入 Tailwind
        - `@import "tailwindcss";`
    - 在 VSCODE 中安装插件 `Tailwind CSS IntelliSense` 获得自动补全

4. 在组件中使用

    - JSX 元素上添加类名完成样式控制，如
        - `font-bold`：加粗字体。
        - `p-4`：设置 内边距（padding）为 1rem（16px），四个方向都生效。
        - `tsxt-3xl`：设置 字体大小为 1.875rem（30px），行高为 2.25rem（36px）。

**代码示例**

1. Vite 配置

    ```ts
    // packages/client/vite.config.ts
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import tailwindcss from "@tailwindcss/vite";

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react(), tailwindcss()],
      server: {
        proxy: {
          "/api": "http://localhost:3000",
        },
      },
    });
    ```

2. 客户端调用

    ```tsx
    // packages/client/src/index.css
    @import "tailwindcss";
    ```

3. 客户端调用

    ```tsx
    // packages/client/src/App.tsx
    import { useEffect, useState } from "react";

    function App() {
      const [message, setMessage] = useState("");

      useEffect(() => {
        fetch("/api/hello")
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
      }, []);

      return (
        <>
          <p className="font-bold p-4 text-3xl">{message}</p>
        </>
      );
    }

    export default App;
    ```

## 集成 ShadCN UI

> 简述：ShadCN 是基于 Tailwind 的现代组件库，提供可访问、可定制的 UI 组件。通过 CLI 工具可以快速安装并加入项目，组件源码完全开放，可自由修改和个性化。

**知识树**

0. 注意本节安装指令在 client 中执行

1. ShadCN 简介

    - UI 组件库，基于 Tailwind 构建。
    - 特点：现代设计、可访问性、源码开放，可根据项目风格自由定制。
    - 官网：[https://ui.shadcn.com/](https://ui.shadcn.com/)

2. 前置条件

    - 已在项目中集成 Tailwind CSS。
    - 确认 `index.css` 已导入 Tailwind。

3. 配置步骤（根据官网步骤进行安装）

    - 上一节完成了 ShadCN 配置中几步
    - 在 client 中，修改 TypeScript 配置：
        - 在 `tsconfig.json` 添加 `compilerOptions`。
        - 在 `tsconfig.app.json` 增加 `paths` 配置。
    - 安装 Node 类型：`bun add -D @types/node`。
    - 更新 Vite 配置：
        - 引入 `path`。
        - 在 `resolve` 属性中配置路径别名。
    - 使用 ShadCN CLI 初始化：
        - 运行：`bunx --bun shadcn@latest init`
        - 选择基础色（如 neutral、zinc、stone 等）。
        - CLI 会生成 `components.json` 并更新 `index.css`（主题变量等）。

4. 安装与使用组件

    - 在官网组件页选择需要的组件。
    - 例如安装按钮：
        ```bash
        bunx --bun shadcn@latest add button
        ```
    - CLI 会在 `components/ui/` 目录生成源码，包含 Tailwind 类，可直接修改。
    - 之后 React 组件中引入并使用：

**代码示例**

1. `App.tsx`

    ```tsx
    // packages/client/src/App.tsx
    import { useEffect, useState } from "react";
    import { Button } from "./components/ui/button";

    function App() {
      const [message, setMessage] = useState("");

      useEffect(() => {
        fetch("/api/hello")
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
      }, []);

      return (
        <div className="p-4">
          <p className="font-bold text-3xl">{message}</p>
          <Button>Click me</Button>
        </div>
      );
    }

    export default App;
    ```

## 配置 Prettier

> 简述：Prettier 是自动化代码格式化工具，可以统一缩进、分号、引号等规则，减少团队对代码风格的争论，让代码更整洁、一致。

**知识树**

0. 注意本节安装指令在 根目录 中执行

1. 安装与扩展

    - 在 VS Code 安装 Prettier 插件。
    - 设为默认格式化工具，并开启“保存时自动格式化”。

2. 配置规则

    - 在项目根目录新建 `.prettierrc` 文件，定义格式化规则：
        - `singleQuote: true` 使用单引号（JS 代码）。
        - `semi: true` 每行末尾加分号。
        - `trailingComma: "es5"` 表示只在对象和数组等 ES5 合法位置加尾随逗号，不给函数参数加。
        - `printWidth: 80` 每行最大宽度。
        - `tabWidth: 2` 每个缩进 2 空格。

3. 命令行集成

    - 安装 Prettier 作为开发依赖：`bun add -d prettier`
        ```bash
        bun add -d prettier
        ```
    - 在根目录的 `package.json` 中添加脚本
        ```json
        "scripts": {
          "format": "prettier --write ."
        }
        ```
    - **在根目录添加 `.prettierignore`，避免格式化无关文件**
        - `node_modules`
        - `bun.lock`
    - 运行 `bun run format` 一次性格式化整个项目。

## Husky + lint-staged 格式化

> 简述：用 Git 钩子可以在提交前自动运行任务，设置格式化所有文件耗时久，应只格式化暂存区文件，避免忘记执行与无关改动进入提交。

**知识树**

1. 目标与动机

    - 问题：手动运行格式化易遗忘；全量格式化慢且污染提交历史。
    - 方案：Git pre-commit 钩子 + 仅处理 staged 文件。
    - Husky 官网：https://typicode.github.io/husky/

2. 安装与初始化 `Husky`

    - 在项目根安装开发依赖 husky 并进行初始化
        - 执行`bun add --dev husky`安装依赖 husky
        - 执行`bunx husky init`， 初始化 Husky，生成 `.husky/pre-commit`。，在文件中定义执行前自动执行的命令，如`bun run format`（此前自定义）
    - **注意**：需要在根目录安装，并且根目录需要有 git 文件

3. `lint-staged`

    - 官网：https://www.npmjs.com/package/lint-staged/v/12.3.2
    - 在项目根安装开发依赖 `lint-staged` 并进行配置
        - 执行`bun add -d lint-staged`安装依赖 `lint-staged`
        - 在 `.husky/pre-commit` 设置命令 `bunx lint-staged`（存在问题，非人为，系版本问题）
            - 建议使用命令`npx lint-staged`进行替代
        - 配置 `.lintstagedrc` 设置匹配的格式化文件
            - 如：`{"*.{js,jsx,ts,tsx,css}":"prettier --write"}`
    - **注意在根目录添加 `.prettierignore`，避免格式化无关文件**

4. 常见问题与处理

    - 若使用命令 `bunx lint-staged`，VS Code 提交报 “bunx: command not found”
    - 需要改用终端提交，或在钩子中用 `npx`（建议）。
