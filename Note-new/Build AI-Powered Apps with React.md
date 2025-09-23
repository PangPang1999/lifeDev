项目链接：https://github.com/PangPang1999/my-app

# Start

## 内容概览

1. 基础认知
    - 什么是语言模型（Large Language Model）
        > 理解整体框架，避免将模型当作“黑箱”。
    - Token 的意义与费用计算方式
        > 知道成本来源，才能设计更经济的应用。
    - 上下文窗口（Context Window）及截断机制
        > 掌握输入限制，避免信息丢失或响应异常。
2. 模型与提示
    - 模型选择的考量：能力、成本、延迟
        > 学会权衡不同模型，找到最优解。
    - 常用参数：温度（Temperature）、Top-p 等
        > 调整输出风格，让模型更贴近需求。
    - 提示工程（Prompt Engineering）：角色设定、约束条件、示例引导
        > 好的提示能显著提升结果质量。
3. 三个实战项目
    - 主题问答 Chatbot：支持快速检索与导航
        > 将理论转化为可操作的查询工具。
    - 客户反馈分析：提炼可执行洞察，辅助实时决策
        > 让模型真正服务于业务场景。
    - 开源集成方案：可在多种环境中运行
        > 提升可移植性，降低使用门槛。
4. 技术工具
    - 结构：Clean Architecture
        > 保证系统可扩展、易维护。
    - 技术栈：Bun、Tailwind、shadcn/ui、Prisma、Ollama
        > 借助现代工具快速搭建高质量应用。
    - 目标：稳定性、可维护性、可部署性
        > 确保项目能进入实际使用。

## 学前要求

1. 现代 JavaScript / TypeScript
    - 箭头函数（arrow functions）、解构赋值（destructuring）
        > 简化代码结构，提高可读性。
    - Promise、async/await 异步流程
        > 掌握异步处理，才能与 API 顺畅交互。
    - 模块化与基础类型（TS）
        > 保持代码清晰、可维护，避免类型错误。
2. React 入门能力
    - 组件与 JSX
        > 组件是构建界面的基本单元，JSX 让结构直观。
    - 基本状态与副作用：useState、useEffect
        > 理解状态管理与生命周期，是掌握 React 的核心。
3. 可选加分项（非必需）
    - 简单后端与数据库常识
        > 知道数据从何而来，方便前后端衔接。
4. 学习方式与预期
    - 逐步讲解、从零起步
        > 确保学习过程循序渐进，不会跳步。
    - 目标：把 AI 融入应用，让产品更聪明更好用
        > 学习不仅是掌握技术，更是创造有用的应用。

## 笔记结构

1. 学习定位
    - 非“速成/娱乐型”课程
        > 避免浮于表面，重在扎实理解。
    - 注重理解原理与架构
        > 理解底层逻辑，才能灵活运用。
    - 目标：能独立构建有用的 AI 功能
        > 技术要服务实践，而不是停留在概念。
2. 笔记结构
    - Section 1：基础
        - 语言模型原理（LLM 能力与边界）
            > 明确模型能做什么、不能做什么。
        - Token、上下文窗口
            > 理解限制条件，避免误用。
        - 模型参数（温度等）与调用方式
            > 学会调节输出，让模型更可控。
    - Section 2：全栈环境搭建
        - 前后端分离，而非 Next.js 一体化
            > 提前感受真实生产环境。
        - 技术栈：Express + React + Tailwind + shadcn/ui
            > 使用现代工具快速搭建原型。
        - 学习前后端交互逻辑
            > 掌握数据在系统中的流转方式。
    - Section 3：Chatbot 项目
        - 问答机器人
            > 将理论转化为实际可用的应用。
        - 从后端开始 → 重构为 Clean Architecture → 再到前端交互
            > 练习工程化思维，逐步提升架构质量。
        - 循环迭代功能与 UI
            > 通过迭代改进，贴近真实开发流程。
    - Section 4：Prompt Engineering
        - 提供上下文
            > 让模型输出更贴近需求。
        - 控制输出格式
            > 保证结果可解析、可用。
        - 使用示例减少幻觉
            > 提高可靠性，避免无效答案。
        - 错误处理与稳定性提升
            > 确保应用在异常情况下也能运行。
    - Section 5：产品评论总结器
        - 构建完整系统：数据库 + Prisma migrations
            > 将数据与模型结合，形成端到端流程。
        - 复杂度升级 → 引入更多工程化技巧
            > 学会应对更大规模、更复杂的问题。
        - 技术可迁移至其他 AI 功能（不限于文本总结）
            > 提升技能的通用性，而非局限于一个案例。
    - Section 6：开源模型集成
        - 为什么重要
            > 降低成本与依赖，增强自主性。
        - 如何查找与运行本地模型
            > 学会独立掌控模型资源。
        - 集成至应用 → 打破对商业 API 的依赖
            > 构建可持续的应用生态。

## 开发环境准备

1. `Node.js` 版本 `22.19`（当前 LTS 版本）
    > 使用稳定版本，保证长期支持与兼容性。
2. 编辑器选择 VS Code
    > 提供良好生态和插件支持，提升开发效率。
3. 其余工具（一般为依赖）按进度再装

# S1：介绍和使用大模型

## AI Engineer 是什么

> 简述：AI Engineer 的核心职责是利用现成的大语言模型，将其封装为可靠、可维护的功能模块，像调用数据库一样被系统调用。重点不在于训练模型本身，而在于如何将 AI 转化为能够直接创造业务价值的产品能力。

**知识树**

1. 角色定义与边界

    - AI Engineer：负责集成预训练模型，设计数据流与接口，确保系统在质量、成本与延迟之间取得平衡。
    - ML Engineer：专注于数据处理、模型训练与调优，以及训练管线的研发与维护。

2. 行业趋势与需求

    - 模型、工具与 API 更新迅速，推动了新岗位与新角色的出现。
    - 企业更需要能“把 AI 落地为实用功能”的工程师，而不仅仅是研究人员。
    - 核心价值取向在于提升效率、降低成本、改善用户体验与提高转化率。

3. 常见功能范式

    - 摘要：如电商平台的评论速览，帮助用户快速做出决策。
    - 生成：如营销邮件与文案生成，解决内容创作的冷启动问题。
    - 翻译与本地化：如社交媒体的一键翻译，实现跨语言沟通。
    - 审核：如 YouTube 或 Twitch 自动识别垃圾信息与不当内容。
    - 工单自动化：自动分类、设定优先级并进行路由处理，例如 Freshdesk。
    - 场景化问答：特定领域的智能助手，例如 Redfin 的房源问答。
    - 共同要点：所有功能都必须兼顾正确性、稳定性、响应时延、成本与可观测性。

## 什么是大模型

> 简述：大语言模型（LLM）通过大规模数据训练来学习语言模式，具备强大的预测与生成能力，但缺乏真正的理解力。它们的输出**依赖于概率计算**和训练数据质量，因此既可能展现出高效的语言能力，也可能带来偏差和不可靠的结果。理解其局限性与使用方式，是学习如何在项目中合理集成它们的关键。

**知识树**

1. 大语言模型的定义

    - 语言模型是一种通过训练学习自然语言统计规律的系统。
    - 它依赖大规模文本数据（书籍、文章、论坛、代码等），捕捉语法、语调和常识等模式。
    - 模型的核心任务是预测下一个词或句子，**而非真正理解语义**。

2. 模型规模与参数

    - 大模型通常包含数十亿参数，这些参数编码了语言模式与结构。
    - 参数规模与计算能力决定了模型的表达力和生成质量。
    - 尽管输出流畅，但本质上是概率计算，**并不具备理解或意识**。

3. 模型的局限性

    - 缺乏理解：生成内容基于统计规律，而非真正的语义理解。
    - 结果不确定：同一问题可能得到不同回答，因为输出依赖概率分布。
    - 数据依赖：训练数据的偏差或错误会直接影响结果的准确性与公平性。

4. 训练与应用的挑战

    - 数据质量：训练数据决定了模型输出的可靠性。
    - 代码生成风险：公共代码库中存在错误、过时或不良实践，模型可能无意中继承这些问题。
    - 训练成本：大规模训练需要极高的计算与资金投入，仅少数公司具备能力。开发者的重点不是训练，而是理解如何调用与集成。

5. 模型与应用的关系

    - 类比数据库：开发者无需构建数据库引擎，只需学会调用。同理，大模型不必自行训练，而要学会与之交互。
    - 应用实践：核心任务是利用已训练的模型，构建能创造实际价值的智能功能。

## 大模型能用来做什么

> 简述：大语言模型（LLM）在现代应用中主要承担文本处理相关任务。它们并非应用的核心逻辑，而是作为增强模块，通过自然语言交互提升用户体验。其价值不在于替代系统，而在于为现有功能注入智能化能力。

**知识树**

1. 总结与提炼

    - 任务：将长文本（如产品评论、新闻、学术论文）压缩为简明摘要。
    - 应用价值：帮助用户快速获取关键信息，提升决策效率。
    - 案例：电商平台利用 LLM 自动生成评论摘要，辅助用户做出购买选择。

2. 内容生成

    - 任务：根据简短提示生成完整文本或创意内容。
    - 应用价值：解决冷启动问题，提升内容生产效率。
    - 案例：

        - 邮件助手：根据关键词生成完整邮件。
        - 商品描述：自动生成电商商品描述。
        - 营销推广：为社交媒体生成广告文案或推文。

3. 文本分类

    - 任务：将输入文本归类到预设类别。
    - 应用价值：降低人工分类成本，提高处理效率。
    - 案例：

        - 垃圾邮件过滤。
        - 情感分析（正面、负面、中性）。
        - 工单自动分类并路由到对应部门。

4. 信息提取与结构化

    - 任务：从非结构化文本中抽取关键要素并转化为结构化数据。
    - 应用价值：提升信息检索与自动化处理能力。
    - 案例：从发票或合同中提取金额、日期、编号，用于财务或业务自动化。

5. 机器翻译

    - 任务：跨语言转换，实现多语言内容的即时可读性。
    - 应用价值：降低语言壁垒，扩大用户覆盖。
    - 案例：社交平台的“一键翻译”功能。

6. 对话与交互

    - 任务：构建能够理解并回答问题的智能助手。
    - 应用价值：提升用户互动体验，支持实时问答与客户服务。
    - 案例：基于业务文档和知识库的客服机器人。

7. 输入输出模式

    - 机制：模型以文本作为输入，并生成文本为主要输出。
    - 扩展：输出不限于自然语言，还可以是 JSON、表格、标签、数值，甚至多模态内容（如图像描述）。
    - 实践意义：开发者可以将模型输出直接接入后端逻辑，实现自动化处理与系统集成。

## 理解 Tokens 和上下文窗口

> 简述：Tokens 是大语言模型处理文本的最小单位。合理管理 tokens 的使用，不仅能降低成本，还能避免超出模型的上下文限制。在处理长文本或多轮对话时，优化 tokens 与上下文窗口的分配，是提升性能与用户体验的关键。

**知识树**

1. Token 的基本概念

    - 定义：Token 是介于字符与单词之间的文本片段，可能是完整单词、词的一部分、标点、空格，甚至 emoji。
    - 工具：[OpenAI Tokenizer](https://platform.openai.com/tokenizer) 可用来分析文本的 token 数量。

2. Token 的作用与成本

    - 成本关联：模型的计费单位是 token，输入与输出都会消耗 token，长文本处理时成本会迅速增加。
    - 性能影响：较少的 token 意味着响应更快，较多的 token 则可能增加延迟与费用。
    - 实践意义：在应用中，需要权衡生成内容的长度与价值，避免冗余生成。

3. 上下文窗口（Context Window）

    - 定义：上下文窗口指模型在一次交互中可处理的最大 token 数，包括输入提示、对话历史和模型输出。
    - 限制：一旦超出窗口，模型会截断输入，导致丢失信息或输出不完整。
    - 模型差异：不同模型的窗口大小不同，范围从几千到数十万不等。选择合适的上下文窗口，有助于兼顾性能与用户体验。

4. 模型选择与任务匹配

    - 选择原则：不必一味追求最大上下文或最强模型，应根据任务需求平衡窗口大小、性能和成本。
    - 应用场景：
        - 博客总结、工单分类等任务，可以选择窗口适中、成本低的模型。
        - 涉及长对话或复杂上下文的任务，则需要更大的窗口。
    - 工程意义：在项目实践中，模型选型应优先考虑“足够好”，避免资源浪费。

## Token 计数

> 简述：在调用大语言模型时，tokens 的数量直接决定了成本与请求能否顺利执行。通过编程计算 tokens，可以提前估算费用并避免超出限制。`tiktoken` 库为开发者提供了便捷的工具，将文本拆解为 tokens，从而实现精确管理。

**知识树**

0. Git 地址

    - https://github.com/PangPang1999/playground

1. 项目初始化与依赖安装

    - 创建项目目录并初始化配置文件。
    - 安装 `tiktoken` 库，用于分解文本并计算 token 数量。
    - 示例：
        ```sh
        mkdir playground        # 创建项目目录
        cd playground
        npm init --y            # 初始化项目
        npm i tiktoken          # 安装 tiktoken
        ```

2. 使用 Tiktoken 进行编码

    - 在 VS Code 中创建 `index.js` 文件。
    - 导入 `getEncoding` 方法并获取编码器。
    - 使用编码器将文本转换为 token 数组。
    - 使用 `node index.js` 运行代码查看输出结果。

3. 模块语法与配置调整

    - Node.js 默认使用 CommonJS 语法，如果要使用 ES Module 语法，需要在 `package.json` 中指定`"type": "module"`，设置后即可正常使用 `import` 语法。

**代码示例**

1. 创建 `index.js` 文件并进行编码测试：

    ```javascript
    // index.js
    import { get_encoding } from "tiktoken"; // ES Module 语法

    const encoding = get_encoding("cl100k_base"); // 使用默认编码
    const tokens = encoding.encode(
    	"hello world this is the first test of tiktoken library"
    );
    console.log(tokens);

    // 输出结果（示例），每个数字对应一个 token 的编码值，表示模型的最小处理单元。
    //    Uint32Array(11) [
    //      15339, 1917, 420,
    //        374, 279, 1176,
    //       1296, 315, 87272,
    //       5963, 6875
    //    ]
    ```

2. 处理模块语法错误：

    ```json
    {
    	"name": "playground",
    	"version": "1.0.0",
    	"type": "module", // 新增，指定为 ES Module，替换默认
    	"main": "index.js",
    	"dependencies": {
    		"tiktoken": "^1.0.22"
    	}
    }
    ```

## 选择合适的 AI 模型

> 简述：选择 AI 模型并非单一标准，而是任务复杂度、响应速度、输入输出类型、成本、上下文窗口和隐私需求等多维度的权衡。本节总结关键考量因素，帮助开发者在实际项目中做出合理的模型选型。

**知识树**

0. 模型比较资源

    - 官方对比工具：[https://platform.openai.com/docs/models/compare](https://platform.openai.com/docs/models/compare)

1. 任务复杂度与推理能力

    - 复杂推理：如代码调试、链式思维，需要更强大的模型。
    - 简单任务：如文本分类、信息提取，较小模型即可胜任，成本更低。

2. 响应速度

    - 大模型生成速度较慢，尤其在长文本输出时。
    - 实时交互场景（自动补全、快速问答）更适合轻量模型。

3. 输入输出类型

    - 文本：所有通用模型都支持。
    - 多模态：若涉及图像、音频、视频，需要支持跨模态输入输出的模型。

4. 成本管理

    - Token 成本与输入输出长度直接相关。
    - 应根据应用规模与预算，选择性价比最高的模型，而非盲目追求最强能力。

5. 上下文窗口

    - 窗口大小决定模型可处理的文本量。
    - 长文档总结、大规模代码分析、多轮对话需要更大的窗口。

6. 隐私与部署方式

    - 处理敏感数据（如医疗、金融），可优先考虑自托管模型，避免数据泄露。
    - 公有云模型则更适合对实时性和更新依赖较强的应用。

7. 其他考量

    - 知识截止日期：决定模型是否掌握最新信息。
    - 定价模式：需对比输入与输出的计费差异。
    - 多模态与专用性：部分模型专注于特定输出（如图像生成），需结合场景选择。

## 模型设置与输出控制

> 简述：通过少量核心参数，开发者可以决定模型生成的内容形式、随机程度、输出长度以及可追踪性。掌握这些设置，才能让输出结果既可控又可复现，真正服务于工程实践。

**知识树**

0. 调试工具与环境

    - 在线调试地址：[OpenAI Playground](https://platform.openai.com/chat/edit?models=gpt-4.1)
    - 优点：参数可视化，便于快速试验和对比。
    - 缺点：付费门槛高，国内使用存在限制。

1. 输出格式控制

    - 文本（Text）：自然语言输出，可读性好，适合直接展示，但不便机器解析。
    - JSON 对象（JSON Object）：要求模型以结构化形式返回，便于后端调用与处理。
        - 示例提示：`请以 JSON 返回`
        - 示例任务：`give me 3 benefits of exercising as a JSON object`
    - JSON Schema：先定义字段与类型，模型必须严格遵循。适合接口调用或需要强一致性的场景。
        - 示例：在在线调试中选择 Schema 模式，定义 `{"exercise": {"benefits":[]}}`，即可生成标准化输出。

2. 随机性与风格调节

    - Temperature：控制结果的多样性。
        - 低值（≈0.2–0.4）：答案更稳定，适合总结、事实问答。
        - 高值（≈0.7–1.0）：答案更有创意，适合头脑风暴、文案生成。
        - 极端值可能导致无意义输出，应避免接近 0 或 2。
    - Top_p：基于累积概率筛选候选词。值越低，结果越保守。
    - 实践建议：通常只调整一个参数，优先调节 Temperature。

3. 长度与上下文管理

    - 最大输出长度（max output tokens）：控制单次回复的最大 token 数。
        - 设置过小会导致输出被截断。
        - 缓解方式：提高上限，或在提示中明确要求“完整回答”。
        - 示例：`Write a story about a robot in 50 tokens or less. Write a complete answer without cutting off mid-sentence.`
    - 上下文窗口（context window）：模型单次可处理的 token 上限，包括输入、输出和历史对话。
        - 大窗口适合长文档总结或多轮对话，但并不等于无限制输出。

4. 可观测性与成本权衡

    - 日志追踪：默认开启，可在 Dashboard 查看输入、输出、模型参数、token 使用量和响应 ID。敏感场景需考虑脱敏或关闭日志。
    - 成本管理：输入与输出分别计费。长文档或长输出会快速推高成本，应结合 token 估算与格式约束来控制开销。
    - 响应速度：模型越强大，生成速度往往越慢。实时应用（如自动补全、短答）应选择轻量模型并限制输出长度。
    - 模态选择：部分模型仅支持文本，部分支持图像或语音输入。应先明确需求，再匹配模型能力与预算。

## 调用模型（openai）

> 简述：用 OpenAI JS SDK 调用模型，安全保存密钥，设置参数，读取普通响应与流式响应，必要时产出 JSON/JSON Schema，拿到用量与响应 ID 做观测。

**知识树**

0. Git 地址

    - https://github.com/PangPang1999/playground

1. 基础步骤

    1. 创建并管理 API Key，推荐存放于环境变量中以避免泄露。这里暂在源码中测试
    2. 安装 openai 依赖：`npm i openai`

2. 基本调用（一次性获取完整结果）

    ```js
    // index.js
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
    // index.js
    import OpenAI from "openai";

    const OPENAI_API_KEY = "";

    // 创建 OpenAI 客户端
    const client = new OpenAI({
    	apiKey: OPENAI_API_KEY,
    });

    const stream = await client.responses.create({
    	model: "gpt-4.1",
    	input: "Write a story about a robot",
    	temperature: 0.7,
    	max_output_tokens: 250,
    	stream: true, // 传 `stream: true` 获得异步可迭代对象。
    });

    // Async iterable stream
    for await (const event of stream) {
    	// console.log(event);
    	// 执行后，会发现，需要的内容为每个event的delta属性
    	// 并非每一个event都有delta属性，需要进行判空
    	// 此外为避免按单词输出，需要使用process.stdout.write

    	// 该输出方式接近平时使用的GPT的回复方式，即“边出边看”
    	event.delta && process.stdout.write(event.delta);
    }
    ```

5. 两个常见坑与对策

    - 输出被截断：增大 `max_output_tokens`，并在提示里加“请输出完整答案，不要中途截断”。
    - 终端打印出现 `undefined`：只在 `event.delta` 存在时写出，不要对所有事件输出

6. DeepSeek 补充（同样是安装 openai 依赖）

    ```js
    // indexD.js
    import OpenAI from "openai";

    const DeepSeek_API_Key = "";
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

# S2：搭建全栈框架

## Tech Intro

> 简述：本项目结合前端与后端多类工具，涵盖运行环境、构建体系、界面开发以及代码质量控制。合理选择与组合这些工具，可以显著提升开发效率，保证代码一致性，并为团队协作奠定坚实基础。

**知识树**

1. 运行环境与构建工具

    - Bun：新一代 JavaScript 运行时，启动速度快，内置打包与测试功能，适合快速开发与原型验证。
    - Vite：现代化构建工具，强调快速冷启动与高效热更新，广泛适配 React、Vue 等主流框架。

2. 应用框架与界面层

    - Express：轻量级 Web 框架，用于快速搭建后端 API 与服务端逻辑。
    - Tailwind CSS：原子化 CSS 框架，通过类名组合实现灵活样式，减少手写样式负担。
    - shadcn/ui：基于 Radix UI 与 Tailwind 构建的组件库，提供无障碍、可定制的 UI 组件，加速界面开发。

3. 代码质量与协作工具

    - Prettier：自动化代码格式化工具，确保代码风格统一，降低维护成本。
    - Husky：Git Hooks 管理工具，可在提交或推送前执行预设脚本（如 Prettier、ESLint 或测试），防止低质量代码进入主干。

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

> 简述：本节演示一个基础的全栈项目结构（前端与后端），重点在于如何搭建清晰的目录层级与依赖管理，为后续开发奠定基础。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 初始化

    - 创建根目录 `my-app`。
    - 使用 `bun init` 初始化项目，选择 `Blank` 模板。
    - 删除 `.cursor` 目录（本项目不依赖 cursor）。

2. 创建工作目录

    - 在根目录下新建 `packages` 文件夹。
    - 在其中分别建立 `client` 与 `server`，作为前端与后端的根目录。

3. 配置工作区（workspaces）

    - 在根目录的 `package.json` 中添加 workspaces 配置：
        ```json
        "workspaces": [
          "packages/*"
        ]
        ```
    - 配置的作用：
        1. 多子项目组织：`packages/` 下的每个子目录都会被视为独立的 npm 包。
        2. 依赖统一管理：公共依赖可放在根目录，避免重复安装；所有依赖会被提升到根目录的 `node_modules`。
        3. 本地联动：子项目之间可以直接引用，方便开发与调试。
        4. 工具支持：bun、yarn、pnpm、npm（7+）均支持 workspaces，常见命令如 `yarn install` 会一次性安装整个 Monorepo 的依赖。

## 构建 Express 后端

> 简述：使用 Express 搭建一个最小化的后端服务，通过路由和端口监听实现与客户端的交互。这一过程是理解服务端应用结构与运行机制的基础。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 初始化

    - 进入 `packages/server`。
    - 使用 `bun init` 初始化项目，选择 `Blank` 模板。
    - 删除 `.cursor` 目录（本项目不依赖 cursor）。

2. 安装 Express

    - 执行命令：`bun add express`

3. 安装类型定义

    - 执行命令：`bun add -d @types/express`
    - 说明：

        - `-d` 即 `--dev`，表示安装到开发依赖。
        - Express 本身是 JavaScript 编写的，不包含 TypeScript 类型。
        - 通过安装 `@types/express`，编辑器和编译器能识别 API，提供类型检查与自动补全。

4. 编写服务代码

    - 使用 `app.get` 定义一个 GET 路由。
    - 使用 `app.listen` 定义服务器监听端口。
    - 使用 `bun run index.ts` 启动服务。

5. 定义启动命令

    - 在 `package.json` 中新增 scripts 配置：

        - `start`: `"bun run index.ts"`，简化为 `bun start`。
        - `dev`: `"bun --watch run index.ts"`，实现热部署，简化为 `bun dev`。

**代码示例**

1. `packages/server/index.ts`

    ```ts
    // 导入 express 框架的默认导出。
    // express() 是创建服务器的核心函数。
    import express from "express";

    // 仅导入类型：Request 和 Response。
    // 这些类型为 req 和 res 提供类型提示，便于编译器检查。
    import type { Request, Response } from "express";

    // 调用 express() 创建一个应用实例。
    // 该实例代表我们的服务端应用，后续所有路由和中间件都会挂载在这里。
    const app = express();

    // 定义端口：优先读取环境变量 PORT，若未设置则默认使用 3000。
    // 这样可以保证在不同环境（本地、线上）下灵活配置端口。
    const port = process.env.PORT || 3000;

    // 定义一个 GET 路由。
    // 第一个参数 "/" 表示根路径，例如 http://localhost:3000/。
    // 第二个参数是回调函数：当有请求命中该路由时被调用。
    // req: Request，请求对象，包含 URL、参数、请求头等信息。
    // res: Response，响应对象，用于返回结果给客户端。
    app.get("/", (req: Request, res: Response) => {
      // 向客户端返回一段纯文本响应。
      res.send("Hello from the server!");
    });

    // 启动 HTTP 服务器并监听指定端口。
    // 当客户端（如浏览器）访问该端口时，请求会交给 Express 路由处理。
    app.listen(port, () => {
      // 当服务器启动成功后，在控制台打印可访问的地址。
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

## 用环境变量安全管理 API Key

> 简述：API Key 属于敏感信息，不能直接写入源码。正确做法是交由操作系统的环境变量保存。在本地开发时，可以借助 `dotenv` 等工具自动加载，并通过 `.env.example` 告知团队所需变量。每次修改环境变量后，都需要重启应用，新值才能生效。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么不能写进源码

    - 写在源码里，一旦共享或上传，别人可直接使用，费用由你承担。
    - 如果是加密密钥或私钥，泄漏会导致数据解密或签名伪造等严重风险。
    - 应通过环境变量或密钥管理服务（Vault、AWS KMS、GCP Secret Manager 等）管理。

2. 如何在系统中存放 Key

    - Mac/Linux：使用 `export` 命令。
    - Windows：使用 `set` 或 `$env:`。
    - 示例：`export OPENAI_API_KEY=1234`
    - 在代码中通过 `process.env.OPENAI_API_KEY` 读取。

3. 本地开发的简化方案：dotenv

    - 手动每次输入命令过于繁琐，可以借助 `dotenv` 自动加载。
    - 在 `server` 目录安装依赖：`bun add dotenv`。
    - 在 `server` 目录下创建 `.env` 文件，注意：`=` 前后不留空格，值不加引号。
        ```
        OPENAI_API_KEY=sk-xxxx
        ```
    - `.env` 默认会被 `.gitignore` 忽略，不会上传到代码仓库。
    - 在入口文件最前面加入 `import 'dotenv/config'`，运行时会自动加载变量。

4. 最佳实践

    - 使用 `.env.example` 文件列出所需变量名（不写具体值）。
    - 团队成员将其复制为 `.env`，并填写各自的 Key。

5. 常见问题

    - 如果终端中已存在同名变量，会覆盖 `.env` 中的值，需要清理后再运行，如`unset OPENAI_API_KEY`
    - 修改 `.env` 后必须重启应用，新值才能生效。

**代码示例**

1. `packages/server/index.ts`

    ```js
    // packages/server/index.ts
    import express from "express";
    import type { Request, Response } from "express";
    // 导入 dotenv 库，用于加载环境变量。
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

> 简述：使用 Vite 搭建 React 前端应用，可以获得快速冷启动与高效热更新的开发体验。本节演示如何在 monorepo 结构中初始化 Vite 项目，并解决依赖版本不一致导致的常见问题。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. Vite 简介

    - 官网：[https://vite.dev/](https://vite.dev/)
    - 在 Bun 中的初始化命令：`bun create vite`
    - 如果要在当前目录中初始化，可执行：`bun create vite .`

2. 初始化步骤

    - 进入 `packages/client` 目录。
    - 使用 Vite 初始化：`bun create vite .`，在提示中选择 `React`，再选择 `TypeScript`。
    - 安装依赖：`bun install` 或 `bun i`。
    - 启动项目：`bun run dev`。

3. 常见问题与解决方法

    - 问题：在 `packages/client` 执行 `bun install` 时，可能会在 `client` 目录下额外生成一个 `node_modules` 文件夹。
    - 原因：当 `client/package.json` 中声明的依赖版本与根目录 `package.json` 中的版本不一致时，Bun 会在本地额外安装一份依赖，导致多余的 `node_modules` 出现。
    - 解决方式：
        - 方法一（直接处理）：删除根目录的 `bun.lock` 和 `client` 下的 `node_modules`，再在 `packages/client` 执行 `bun install`，此时 Bun 会在根目录生成新的 `bun.lock`。
        - 方法二（推荐方式）：检查 `client/package.json` 与根目录 `package.json` 中的依赖版本（例如 TypeScript），确保版本一致，从而避免重复安装。

## 前后端连接

> 简述：前端要访问后端接口，需要在服务端定义 API，再由客户端发起调用。由于前端和后端运行在不同端口，必须通过代理将以 `/api` 开头的请求转发到后端，才能实现正常通信。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 服务端定义接口

    - 在 `server/index.ts` 中新增路由，返回结构化数据。
    - 示例路径：`/api/hello`。
    - 示例响应：`{ message: "hello world" }`。
    - 这样前端就能通过 API 获取 JSON，而不是写死数据。

2. 客户端调用接口

    - 在 `App.tsx` 中：
        - 使用 `useState` 保存响应数据。
        - 使用 `useEffect` 在组件挂载时发起 `fetch("/api/hello")` 请求。
        - 将返回的 `data.message` 写入 state 并渲染到页面。
    - 这体现了 React 的“数据驱动视图”机制：后端返回的数据会自动触发前端 UI 更新。

3. 代理配置

    - 问题：前端项目运行在 Vite 默认端口（如 5173），后端在 Express 的 3000 端口，直接请求会因跨域限制失败。
    - 解决方案：在 `vite.config.ts` 中配置代理：
        ```ts
        server: {
          proxy: {
            "/api": "http://localhost:3000"
          }
        }
        ```
    - 配置后，所有以 `/api` 开头的请求都会被转发到后端。前端代码无需关心后端端口，只要调用 `/api/...` 即可。

4. 整体流程

    - 浏览器请求 `/api/hello`。
    - Vite 开发服务器将请求代理到 `http://localhost:3000/api/hello`。
    - Express 服务器返回 JSON 数据。
    - React 组件接收数据并展示在页面上。

5. 其他事项

    - 删除 `index.css` 中默认样式，避免页面展示干扰。

**代码示例**

1. 服务端接口

    ```ts
    // packages/server/index.ts
    import express from "express";
    import type { Request, Response } from "express";
    import dotenv from "dotenv";

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000;

    // 定义一个 GET 接口，路径为 /api/hello
    // 当客户端访问该路径时，返回 JSON 对象
    app.get("/api/hello", (req: Request, res: Response) => {
    	res.json({ message: "Hello, World!" }); // 返回 JSON
    });

    // 启动服务器并监听指定端口
    // 启动成功后在控制台打印可访问的地址
    app.listen(port, () => {
    	console.log(`Server is running at http://localhost:${port}`);
    });
    ```

2. 客户端调用

    ```tsx
    // packages/client/src/App.tsx
    import { useEffect, useState } from "react";

    function App() {
      // 使用 useState 保存后端返回的 message
      const [message, setMessage] = useState("");

      // 使用 useEffect 在组件挂载时发起请求
      useEffect(() => {
        fetch("/api/hello") // 请求会被代理到 http://localhost:3000/api/hello
          .then((response) => response.json()) // 将响应转换为 JSON
          .then((data) => setMessage(data.message)); // 将 message 存入 state
      }, []);

      // 将 message 渲染到页面
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
    // packages/client/vite.config.ts
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          "/api": "http://localhost:3000", // 将 /api 请求代理到后端
        },
      },
    });
    ```

## 一条命令同时启动前后端

> 简述：在开发阶段，前后端往往需要同时运行。通过 `concurrently` 可以在一个终端中并行启动 server 和 client，并用前缀颜色区分日志输出，避免频繁切换窗口。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 安装与使用位置

    - 在项目根目录安装开发依赖：`bun add -d concurrently`。
    - 必须在根目录执行启动命令，避免为 server 和 client 各开一个终端。

2. 组织并行任务

    - 在根目录的 `index.ts` 引入 `concurrently` 并调用。
    - 每个任务需要定义以下信息：
        - `name`：任务名（如 `server`、`client`），作为日志前缀。
        - `command`：启动命令（如 `bun run dev`）。
        - `cwd`：工作目录（如 `packages/server`、`packages/client`）。
        - `prefixColor`：日志前缀的颜色，用于区分不同任务的输出。

3. 封装统一启动脚本

    - 在根目录 `package.json` 增加脚本：`"dev": "bun run index.ts"`。
    - 之后只需在根目录执行 `bun run dev`，即可同时启动前端和后端。

**代码示例**

1. 根目录下 `index.ts`

    ```ts
    // index.ts
    // 引入 concurrently，用于并行执行多个子进程。
    import concurrently from "concurrently";

    // 定义两个并行任务：server 和 client。
    // 每个任务指定名称、启动命令、工作目录和日志前缀颜色。
    // 这样在一个终端里就能同时运行前后端，并区分日志输出。
    concurrently([
      {
        name: "server",
        command: "bun run dev",      // 在 server 目录执行 bun run dev
        cwd: "packages/server",      // 指定工作目录为 packages/server
        prefixColor: "cyan",         // 日志前缀颜色：青色
      },
      {
        name: "client",
        command: "bun run dev",      // 在 client 目录执行 bun run dev
        cwd: "packages/client",      // 指定工作目录为 packages/client
        prefixColor: "green",        // 日志前缀颜色：绿色
      },
    ]);
    ```

2. 根目录下 `package.json`

    ```json
    // package.json
    {
    	"name": "my-app",
    	"module": "index.ts",
    	"type": "module",
    	"private": true,
    	"scripts": {
    		"dev": "bun run index.ts" // 封装统一启动命令
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

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. Tailwind

    - Tailwind 是 Utility-first 的 CSS 框架，提供大量原子类，通过类名组合即可实现常见样式，减少手写 CSS 的需求。
    - 官网：https://tailwindcss.com/
    - 安装文档：https://tailwindcss.com/docs/installation/using-vite
    - 注意：官网示例使用 npm，本项目改用 Bun 进行安装。

2. 安装依赖

    - 终端进入客户端目录：`cd packages/client`
    - 安装 Tailwind 与相关插件：`bun add tailwindcss @tailwindcss/vite`

3. 配置 Vite

    - 在 `vite.config.ts` 中引入并启用 Tailwind 插件（官网教程）
        - 添加 `import tailwindcss from "@tailwindcss/vite";`
        - 在`plugins`数组中增加`tailwindcss()`
    - 在 `index.css` 中导入 Tailwind
        - `@import "tailwindcss";`
    - 在 VSCODE 中安装插件 `Tailwind CSS IntelliSense` 获得自动补全与类名提示。

4. 在组件中使用

    - 通过在 JSX 元素上添加类名控制样式，例如：
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

2. 引入 Tailwind

    ```tsx
    // packages/client/src/index.css
    @import "tailwindcss";
    ```

3. 在组件中使用

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

> 简述：ShadCN 是一个基于 Tailwind 构建的现代组件库，提供可访问、可定制的 UI 组件。通过 CLI 工具可以快速安装并引入项目，组件源码完全开放，允许根据实际需求进行修改和个性化定制。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. ShadCN

    - 定位：基于 Tailwind 的 UI 组件库。
    - 特点：现代化设计、内置可访问性、源码完全开放，适合个性化定制。
    - 官网：[https://ui.shadcn.com/](https://ui.shadcn.com/)

2. 配置步骤（根据官网步骤进行安装）

    - 前置条件：项目已集成 Tailwind CSS。
    - 在 client 中，修改 TypeScript 配置：
        - 在 `tsconfig.json` 添加 `compilerOptions`。
        - 在 `tsconfig.app.json` 增加 `paths` 配置。
    - 安装 Node 类型声明：
        - `bun add -D @types/node`。
    - 更新 Vite 配置：
        - 引入 `path`。
        - 在 `resolve` 中添加路径别名，确保组件引用清晰。
    - 使用 ShadCN CLI 初始化：
        - 运行：`bunx --bun shadcn@latest init`
        - 选择基础色（如 neutral、zinc、stone 等）。
        - CLI 会生成 `components.json` 并更新 `index.css`（主题变量配置）。

3. 使用组件

    - 在官网选择需要的组件，使用 CLI 安装到本地。
    - 例如安装按钮组件：`bunx --bun shadcn@latest add button`
        - CLI 会在 `components/ui/` 目录生成源码，包含 Tailwind 类，之后可在 React 组件中直接引入并使用。

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

> 简述：Prettier 是自动化代码格式化工具，用于统一缩进、分号、引号等规则。它的价值不在于具体的风格，而在于减少团队内部的争论，让代码始终保持整洁、一致，提升协作效率。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 安装与编辑器扩展

    - 在 VS Code 安装 Prettier 插件。
    - 将其设为默认格式化工具。
    - 开启“保存时自动格式化”，保证所有提交的代码自动符合统一规则。

2. 配置规则

    - 在项目根目录新建 `.prettierrc` 文件，定义统一的格式化规则：
        - `singleQuote: true`：在 JavaScript 中使用单引号。
        - `semi: true`：每行末尾加分号。
        - `trailingComma: "es5"`：在对象和数组等 ES5 合法位置添加尾随逗号，不给函数参数加。
        - `printWidth: 80`：限制每行最大宽度为 80 个字符。
        - `tabWidth: 2`：每个缩进为 2 个空格。
    - 这些规则的目的是让代码更简洁、更易读，同时避免不同成员各自定义风格。

3. 命令行集成

    - 安装 Prettier 作为开发依赖：
        ```bash
        bun add -d prettier
        ```
    - 在根目录的 `package.json` 中添加脚本：
        ```json
        "scripts": {
          "format": "prettier --write ."
        }
        ```
    - 在根目录添加 `.prettierignore`，避免格式化无关文件：
        - `node_modules`
        - `bun.lock`
    - 执行 `bun run format`，即可一次性格式化整个项目。

**代码示例**

1. `.prettierrc`

    ```json
    {
    	"singleQuote": true,
    	"semi": true,
    	"trailingComma": "es5",
    	"printWidth": 80,
    	"tabWidth": 2
    }
    ```

## Husky + lint-staged 格式化

> 简述：通过 Git 钩子，可以在提交前自动执行任务。若每次提交都全量格式化整个项目，不仅耗时长，还会在提交历史中引入无关改动。更合理的做法是结合 Husky 与 lint-staged，仅格式化暂存区的文件，确保提交内容始终规范而高效。

**知识树**

1. 目标与动机

    - 问题：手动运行格式化容易遗忘；全量格式化耗时且会影响提交历史。
    - 方案：利用 Git pre-commit 钩子，在提交前仅格式化暂存区文件，保证提交内容干净一致。
    - Husky 官网：[https://typicode.github.io/husky/](https://typicode.github.io/husky/)

2. 安装与初始化 Husky

    - 在项目根目录安装 Husky：
        - 执行 `bun add --dev husky` 安装依赖。
        - 执行 `bunx husky init` 初始化，生成 `.husky/pre-commit` 文件。
    - 在 `.husky/pre-commit` 文件中定义需要自动执行的命令，例如：
        - `bun run format`（在前一节已定义过的脚本）。
    - 注意事项：
        - 必须在项目根目录安装 Husky。
        - 根目录需要存在 `.git`，即项目必须初始化为 Git 仓库。

3. lint-staged 配置

    - 官网：[https://www.npmjs.com/package/lint-staged/v/12.3.2](https://www.npmjs.com/package/lint-staged/v/12.3.2)
    - 在项目根目录安装 lint-staged：
        - 执行 `bun add -d lint-staged` 安装依赖。
    - 在 `.husky/pre-commit` 中添加命令：
        - 推荐使用 `npx lint-staged`，因为部分版本下 `bunx lint-staged` 会出现兼容性问题。
    - 配置 `.lintstagedrc` 文件，定义需要格式化的文件类型，例如：
        ```json
        {
        	"*.{js,jsx,ts,tsx,css}": "prettier --write"
        }
        ```
    - 同时在根目录添加 `.prettierignore`，避免格式化无关文件（如 `node_modules`、`bun.lock`）。

4. 常见问题与处理

    - 问题：使用 `bunx lint-staged` 时，VS Code 内提交报错 “bunx: command not found”。
    - 解决：改用终端提交，或在钩子脚本中统一使用 `npx lint-staged`（推荐做法）。

# S3：搭建聊天机器人

## Backend

### 实现 Chat API 端点

> 简述：本节实现一个简单的 API 端点，接收用户输入并返回 OpenAI 模型生成的回复。核心流程包括：安装 SDK、配置 API key、定义 POST 请求端点、调用 OpenAI API 获取结果，并通过中间件正确解析请求体。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 环境准备

    - 在 `packages/server` 安装 OpenAI SDK，使用命令`bun add openai`
    - 配置环境变量 `OPENAI_API_KEY`

2. 服务器端设置

    - 在 `index.ts` 导入并初始化 OpenAI 客户端
    - 配置 Express 中间件 `express.json()` 解析请求体
        - `express.json` 是 Express 自带的一个内置中间件，用来解析 JSON 格式的请求体。

3. 定义 API 端点

    - 使用 `app.post("/api/chat")` 接收用户请求
    - 从 `request.body` 解构获取 `prompt`

4. 调用 OpenAI

    - 使用 `client.responses.create` 生成回复
    - 选择合适的模型（成本优化型、响应快速的小模型）
        - 性价比 chat 模型：`gpt-4o-mini`
        - [模型比较地址](https://platform.openai.com/docs/models/compare)
    - 设置参数：`model`、`input`、`temperature`、`max_output_tokens`
        - 为给出理智的回答，此处 temperature 需要设置低一些

5. 返回结果

    - 通过 `response.json({ message: ... })` 发送响应

**代码示例**

1. `packages/server/index.ts`

    ```ts
    import express from 'express';
    import type { Request, Response } from 'express';
    import dotenv from 'dotenv';
    import OpenAI from 'openai';

    // 加载环境变量，确保 OPENAI_API_KEY 可用
    dotenv.config();

    // 初始化 OpenAI 客户端，所有请求将使用此实例调用 API
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const app = express();

    // 安装 JSON 解析中间件，使 Express 自动解析 JSON 请求体
    app.use(express.json());

    const port = process.env.PORT || 3000;

    // 测试端点：用于确认服务器正常运行
    app.get('/api/hello', (req: Request, res: Response) => {
      res.json({ message: 'Hello, World!' });
    });

    // Chat 端点：接收用户输入并调用 OpenAI API
    app.post('/api/chat', async (req: Request, res: Response) => {
      const { prompt } = req.body; // 从请求体中获取用户输入

      // 调用 OpenAI API 获取模型回复
      const responses = await client.responses.create({
        model: 'gpt-4o-mini', // 模型选择：快速且成本低
        input: prompt,        // 用户输入
        temperature: 0.2,     // 较低的温度值，保证回答理性稳定
        max_output_tokens: 100, // 限制输出字数，避免冗余
      });

      // 将模型的输出返回给前端
      res.json({ message: responses.output_text });
    });

    // 启动服务器并监听指定端口
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

### 使用 Postman 测试 API 端点

> 简述：使用 Postman 工具测试。通过发送一个 POST 请求并携带 JSON 格式的请求体，我们可以验证端点是否正确调用 OpenAI API 并返回合理的结果。

**知识树**

1. 工具选择

    - 推荐使用扩展，安装 Postman
    - 可通过浏览器扩展或独立应用安装

2. 安装与启动

    - 在编辑器中打开扩展面板，搜索并安装 Postman
    - 通过命令面板启动查找`Show Postman`启动
    - 首次使用需注册并登录，便于保存请求和跨设备共享

3. 创建请求

    - 新建 HTTP 请求
    - 设置请求方法为 `POST`
    - 输入接口地址，例如：`http://localhost:3000/api/chat`
    - 配置请求体
        - 在 **Body** 标签下选择 `raw` 模式
        - 数据类型选择 `JSON`
        - 添加一个 JSON 对象，包含属性 `prompt`，用于传递用户输入

4. 发送与验证

    - 示例请求体：
        ```json
        {
        	"prompt": "What is the capital of France?"
        }
        ```
    - 发送请求后，API 返回结果
    - 响应内容示例：
        ```json
        {
        	"message": "The capital of France is Paris."
        }
        ```
    - 成功返回结果说明 Chat API 工作正常

### 为聊天机器人添加记忆

> 简述：基础版的聊天机器人无法记住上下文，每次问题都被当作独立请求。为了解决这一问题，可以通过保存 `response.id` 来建立会话记忆。初期可用全局变量实现单会话记忆，进一步则使用 Map（或字典）支持多会话管理。在真实应用中，这类状态应存储在数据库中，但本节只实现内存版，以掌握核心原理。

**知识树**

1. 问题背景

    - 默认情况下，模型无法记住之前的对话。
    - 例如：第一次问“法国的首都是哪里？”，得到“巴黎”；紧接着问“我的上一个问题是什么？”，模型会回答“我无法访问之前的问题”。
    - 缺少记忆导致对话无法连续，体验大打折扣。

2. 初步解决：全局变量保存最后响应

    - 在路由处理函数外声明一个全局变量 `lastResponseId`。
    - 类型：可以是字符串（表示有效的响应 ID），或 `null`（初始状态）。
    - 每次调用 OpenAI API 后，更新 `lastResponseId = response.id`。
    - 下次调用时，把 `lastResponseId` 作为 `previous_response_id` 传入，从而建立上下文。
    - 局限：仅支持单会话。

3. 完善方案：使用 Map 管理多会话

    - 问题：真实应用中会有多个用户，每个用户可能有多个对话。
    - 方案：用 Map 代替全局变量，维护会话 ID 与最后响应 ID 的映射。

        - `key`：conversationId（会话 ID，通常由客户端生成 GUID）。
        - `value`：lastResponseId（该会话的最后响应 ID）。

    - 流程：

        1. 客户端在请求中附带 conversationId。
        2. 服务端在调用 API 时，读取该会话的 lastResponseId 并作为 `previous_response_id`。
        3. 得到新响应后，更新 Map 中的 lastResponseId。

    - 效果：同一会话中能正确记住上下文，不同会话互不干扰。

4. 测试流程

    - 在 Postman 中：

        1. 新建会话，提问“法国的首都是哪里？”，得到“巴黎”。
        2. 在同一会话继续问“我的上一个问题是什么？”，得到“你刚才问了法国的首都”。
        3. 开启一个新会话，再问“我的上一个问题是什么？”，得到“我无法访问之前的对话”。

    - 验证：系统能区分不同会话，且在单一会话中维持对话历史。

5. 实际应用扩展

    - 当前实现：数据保存在内存中，重启后丢失。
    - 真正的应用（如 ChatGPT）：会将会话和响应 ID 存入数据库，以支持持久化和多设备同步。
    - 本节目标：掌握对话记忆的基础实现，不涉及数据库操作。

**代码示例**

1. 使用全局变量（单会话记忆）

    ```ts
    // packages/server/index.ts

    import express from 'express';
    import type { Request, Response } from 'express';
    import dotenv from 'dotenv';
    import OpenAI from 'openai';

    dotenv.config();
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const app = express();
    app.use(express.json());
    const port = process.env.PORT || 3000;

    let lastResponseId: string | null = null; // 全局变量，保存最后响应 ID

    app.post('/api/chat', async (req: Request, res: Response) => {
      const { prompt } = req.body;

      const responses = await client.responses.create({
        model: 'gpt-4o-mini',
        input: prompt,
        temperature: 0.2,
        max_output_tokens: 100,
        previous_response_id: lastResponseId,
      });
      lastResponseId = responses.id;
      res.json({ message: responses.output_text });
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

2. 使用 Map（多会话记忆）

    ```ts
    // packages/server/index.ts
    import express from 'express';
    import type { Request, Response } from 'express';
    import dotenv from 'dotenv';
    import OpenAI from 'openai';

    dotenv.config();
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const app = express();
    app.use(express.json());
    const port = process.env.PORT || 3000;

    // 使用 Map 保存 conversationId 与 lastResponseId 的映射
    const conversations = new Map<string, string>();

    app.post('/api/chat', async (req: Request, res: Response) => {
      const { prompt, conversationId } = req.body;

      const responses = await client.responses.create({
        model: 'gpt-4o-mini',
        input: prompt,
        temperature: 0.2,
        max_output_tokens: 100,
        previous_response_id: conversations.get(conversationId),
      });
      conversations.set(conversationId, responses.id);
      res.json({ message: responses.output_text });
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

### 使用 Zod 校验请求数据

> 简述：在真实应用中，不能假设客户端输入总是合法的。缺少必要字段、格式错误或恶意输入都可能导致系统崩溃或资源浪费。通过 Zod 定义数据结构，可以在进入业务逻辑前进行校验，保证系统的安全性和稳定性。

**知识树**

1. 为什么需要校验

    - 客户端可能遗漏必填字段或传递格式错误的数据。
    - 攻击者可能提交超长文本，占用大量 tokens 或拖垮服务。
    - 数据校验是系统安全的第一道防线，可防止无效输入进入业务逻辑。

2. Zod 简介

    - Zod 是一个常用的 TypeScript/JavaScript 数据校验库。
    - 通过声明对象 schema，可以链式定义规则（最小长度、最大长度、类型约束、UUID 校验等）。
    - 安装方式：
        ```bash
        bun add zod
        ```
    - 示例：
        ```ts
        const schema = z.object({
          name: z.string().min(3, { message: "Name must be at least 3 characters." }),
          age: z.number().min(18, { message: "Age must be at least 18." }),
        });
        ```

3. 在路由中应用

    - 调用 `schema.safeParse(req.body)` 对输入数据进行校验。
    - 如果失败：返回 400 状态码，并在响应中附带详细错误信息。
    - 如果成功：解析后的数据可以安全进入后续逻辑。

4. UUID 拓展

    - 测试时推荐使用 VS Code 插件 **UUID Generator**，在命令栏中输入 `uuid` 即可生成并复制 UUID。
    - 使用 UUID 作为键可以保证 Map 中的会话 ID 全局唯一。

**代码示例**

1. 定义 Zod schema

    ```ts
    // packages/server/index.ts
    import express from 'express';
    import type { Request, Response } from 'express';
    import dotenv from 'dotenv';
    import OpenAI from 'openai';
    import z from 'zod';

    dotenv.config();
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const app = express();
    app.use(express.json());
    const port = process.env.PORT || 3000;

    // 使用 Map 保存 conversationId 与 lastResponseId 的映射
    const conversations = new Map<string, string>();

    const schema = z.object({
      prompt: z
        .string()
        .min(1, 'Prompt is required')
        .max(1000, 'Prompt is too long'),
      conversationId: z.string().uuid(),
    });

    app.post('/api/chat', async (req: Request, res: Response) => {
      const parseResult = schema.safeParse(req.body);
      if (!parseResult.success) {
        res.status(400).json(parseResult.error.format());
        return;
      }

      const { prompt, conversationId } = req.body;

      const responses = await client.responses.create({
        model: 'gpt-4o-mini',
        input: prompt,
        temperature: 0.2,
        max_output_tokens: 100,
        previous_response_id: conversations.get(conversationId),
      });
      conversations.set(conversationId, responses.id);
      res.json({ message: responses.output_text });
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

### API 错误处理

> 简述：输入校验只能防止非法数据进入系统，但运行时错误依然可能发生。网络中断、服务端故障、模型不可用或资源超限，都可能导致请求失败。如果没有错误处理，用户会收到不友好的报错或堆栈信息。通过在路由中使用 try-catch，可以捕获并返回清晰的错误信息，让系统更健壮。

**知识树**

1. 为什么需要错误处理

    - 网络波动或 API 服务中断可能导致请求失败。
    - 使用错误模型名称或超出 token 限制会引发异常。
    - 如果不处理，Express 默认返回 HTML 错误页和堆栈信息，不适合暴露给客户端。
    - 正确做法是捕获错误并返回统一的 JSON 格式，便于前端展示。

2. 实现思路

    - 在路由逻辑外层加入 try-catch。
    - try 块中写“正常路径”（输入解析、调用 API、更新会话、返回结果）。
    - catch 块中捕获异常，返回 500 状态码和 JSON 错误信息，例如 `{ error: "Failed to generate response" }`。
    - 这样可以避免堆栈泄漏，并让客户端收到可预期的错误结构。

3. 示例流程

    - 故意传入一个错误的模型名称（如 `gpt-unknown`），触发异常。
    - 在没有错误处理时，服务端会返回 HTML 错误堆栈。
    - 加入 try-catch 后，客户端收到 JSON 错误响应，更利于展示和调试。

**代码示例**

1. 在路由中加入错误处理

    ```ts
    // packages/server/index.ts
    import express from 'express';
    import type { Request, Response } from 'express';
    import dotenv from 'dotenv';
    import OpenAI from 'openai';
    import z from 'zod';

    dotenv.config();
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const app = express();
    app.use(express.json());
    const port = process.env.PORT || 3000;

    // 使用 Map 保存 conversationId 与 lastResponseId 的映射
    const conversations = new Map<string, string>();

    const schema = z.object({
      prompt: z
        .string()
        .min(1, 'Prompt is required')
        .max(1000, 'Prompt is too long'),
      conversationId: z.string().uuid(),
    });

    app.post('/api/chat', async (req: Request, res: Response) => {
      const parseResult = schema.safeParse(req.body);
      if (!parseResult.success) {
        res.status(400).json(parseResult.error.format());
        return;
      }

      try {
        const { prompt, conversationId } = req.body;
        const responses = await client.responses.create({
          model: 'gpt-4o-mini!',
          input: prompt,
          temperature: 0.2,
          max_output_tokens: 100,
          previous_response_id: conversations.get(conversationId),
        });
        conversations.set(conversationId, responses.id);
        res.json({ message: responses.output_text });
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    ```

### 重构与分层架构

> 简述：当前的聊天 API 文件中包含了过多逻辑：会话状态管理、数据校验、与 OpenAI 的调用全部混杂在一起，缺乏关注点分离。这样的结构就像一个凌乱的衣柜，很难找到想要的东西。重构的目标是调整代码结构，而不改变功能，将不同职责拆分到清晰的层级中，从而提升可维护性与可扩展性。

**知识树**

1. 为什么需要重构

    - 职责混乱：数据校验、会话管理、业务逻辑、外部调用都集中在一个文件。
    - 可读性差：逻辑交织，增加理解和维护成本。
    - 扩展性弱：一旦需求变动，很难局部修改，容易牵一发而动全身。
    - 重构的意义：不改变功能，只改善结构，让职责归位。

2. 分层架构的基本思想

    - 每一层只承担单一责任，降低耦合。
    - 不同层之间通过明确接口交互，提升可测试性与可复用性。
    - 当某一部分需要调整时，可以精确定位而不影响整体。

3. 三层结构设计

    1. 控制器（Controllers）
        - 负责接收 HTTP 请求并返回 HTTP 响应。
        - 相当于系统的入口，类似前台接待员。
    2. 服务层（Services）
        - 存放应用逻辑，例如调用 OpenAI 生成回复。
        - 把业务规则从控制器中抽离，保持控制器的简洁。
    3. 仓储层（Repositories）
        - 负责数据的存取，不关心数据存放在哪里。
        - 可以是内存、数据库，或未来扩展的其他存储方案。

4. 分层架构的好处

    - 可维护性：逻辑定位清晰，修改更精准。
    - 可读性：每一层职责单一，便于理解。
    - 可扩展性：不同层可独立测试与复用，支持未来功能扩展。

### 引入 Repository 层

> 简述：在分层架构中，依赖方向始终自上而下：控制器依赖服务，服务依赖仓储，而仓储不依赖上层。仓储（Repository）专注于数据访问，负责存取会话或业务数据。通过引入仓储层，可以隐藏底层实现细节，仅暴露清晰的公共接口，从而提升代码的可维护性与扩展性。

**知识树**

0. 代码细节见 Git

    - [地址](https://github.com/PangPang1999/my-app)

1. Repository 的设计原则

    - 公共接口：只暴露数据操作方法（如 get、set）。
    - 隐藏细节：内部使用何种存储结构（如 Map、数据库表）对外透明。
    - 一致抽象：调用者只关心“做什么”，不关心“怎么做”。

2. 实现步骤

    1. 新建目录与文件：在 `server/repositories` 下创建 `conversation.repository.ts`。
    2. 抽取逻辑：将会话 Map 与相关代码从 `index.ts` 移动到仓储模块。
    3. 定义方法：
        - `getLastResponseId(conversationId: string)`
        - `setLastResponseId(conversationId: string, responseId: string)`
    4. 封装为对象：导出 `conversationRepository`，包含上述两个方法。
    5. 修改调用：在 `index.ts` 中引入仓储，并通过仓储方法访问数据。

3. 效果与意义

    - 调用者不再关心数据是否存储在内存或数据库中。
    - 代码可读性更强，职责划分清晰。
    - 便于后续替换实现（例如将会话数据持久化到数据库）。

### 引入 Service 层

> 简述：Service 层负责承载应用核心逻辑，独立于 HTTP 协议和框架细节。控制器接收并校验请求后，只调用 Service 执行任务；Service 再调用 Repository 处理数据访问。通过这一分层，业务逻辑与外部依赖解耦，系统更清晰、更易维护。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. Service 层职责

    - 独立承载业务逻辑，不直接处理请求或响应。
    - 依赖 Repository 完成数据存取，但对 HTTP 细节保持无感知。
    - 向上提供抽象接口，屏蔽底层 LLM（如 OpenAI）的实现差异。

2. 实现步骤

    3. 新建目录与文件
        - 在 `server/services` 下新建 `chat.service.ts`。
    4. 抽取逻辑
        - 从 `index.ts` 中移出调用 OpenAI 与更新会话 ID 的逻辑。
    5. 定义 Service
        - 导出 `chatService` 对象，包含 `sendMessage` 方法。
        - 参数：`prompt: string`，`conversationId: string`。
    6. 引入 Repository
        - 在 Service 内部调用 `conversationRepository` 存取会话数据。
    7. 封装 OpenAI 调用
        - Service 内部维护 `OpenAI` 客户端，仅在此处依赖具体 LLM。
        - 对外暴露统一的返回类型，避免泄露底层实现。

3. 抽象设计与优化

    - 问题：若直接返回 OpenAI 的 `response` 对象，会暴露平台特有属性（如 `output_text`），形成“泄漏的抽象”。
    - 解决：定义平台无关的类型 `ChatResponse`，仅包含 `id` 和 `message`。
    - 好处：未来切换 LLM（如 Gemini），只需在 Service 内部调整映射逻辑，调用方完全不受影响。

4. 整体效果

    - `index.ts` 不再关心 OpenAI 细节，只需调用 `chatService.sendMessage`。
    - Service 层成为 LLM 与业务逻辑的隔离层，接口简洁，职责单一。
    - 系统更具可维护性、扩展性和可移植性。

### 引入 Controller 层

> 简述：Controller 是应用的入口层，负责接收 HTTP 请求并返回响应。它负责校验输入数据，并调用 Service 执行业务逻辑。Controller 不直接关心数据存取或验证实现细节，而是聚焦在“如何把请求交给应用处理并返回结果”。通过引入 Controller 层，可以实现职责分离，让代码更清晰、更易维护。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. Controller 的角色

    - 请求入口：接收 HTTP 请求，返回 HTTP 响应。
    - 数据校验：调用 schema 检查输入是否合法。
    - 调用 Service：若输入合法，则交由 Service 执行应用逻辑。
    - 隔离实现：不关心底层验证库或业务细节，只提供统一的接口。

2. 实现步骤

    1. 新建目录与文件
        - 在 `server/controllers` 下新建 `chat.controller.ts`。
    2. 抽取逻辑
        - 将 `index.ts` 中的路由处理函数（含 `try-catch` 块与数据校验逻辑）整体迁移至 `chat.controller.ts`。
    3. 定义控制器对象
        - 导出 `chatController`，定义 `sendMessage(req, res)` 方法。
        - 明确类型：从 Express 显式导入 `Request` 与 `Response` 类型。
    4. 引入依赖
        - 在 Controller 内部引入 `chatService` 处理业务逻辑。
        - 引入并应用 `chatSchema` 进行请求数据校验。
    5. 保持接口简洁
        - Controller 仅暴露公共方法 `sendMessage`。
        - 数据校验方式（如使用 Zod）属于实现细节，对外部模块透明。

3. 效果与意义

    - `index.ts` 中的路由定义简化为：`chatController.sendMessage`。
    - 验证逻辑集中在 Controller 内，若未来替换 Zod，只需修改 Controller 文件。
    - Controller 负责协调请求流转，Service 负责业务逻辑，Repository 负责数据访问，分层明确。
    - 代码更具可维护性，避免不同层级之间的逻辑耦合。

### 拆分路由定义

> 简述：最初我们在 `index.ts` 中直接定义所有路由，这种方式在小型项目中尚可，但随着应用规模增长，文件会变得臃肿，维护困难。通过将路由定义抽离到单独模块，可以让代码更加整洁、模块化，并便于后续扩展。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么要拆分路由

    - 单文件过大：随着接口增多，`index.ts` 将变得难以维护。
    - 职责不清：应用初始化逻辑与路由定义混杂。
    - 扩展性差：难以为不同功能模块（如用户、订单、后台管理）分别管理路由。

2. 拆分步骤

    1. 新建路由模块
        - 在 `server` 目录下创建 `routes.ts`。
    2. 移动路由定义
        - 将 `index.ts` 中的路由处理逻辑剪切至 `routes.ts`。
    3. 使用 Router 对象
        - 在 `routes.ts` 中创建 `express.Router()`，替代 `app` 进行路由注册。
        - 使用多光标编辑快捷方式统一替换 `app` 为 `router`。
    4. 引入 Controller
        - 在路由模块中引入 `chatController`，作为具体的处理函数。
    5. 导出路由对象
        - 将 `router` 作为默认导出。

3. 修改 index.ts

    - 删除原有的路由定义与相关导入。
    - 保留应用初始化逻辑：配置环境变量、创建应用、启用中间件、加载路由、监听端口。
    - 通过 `import router from "./routes";` 引入新路由模块，并挂载到应用。

4. 效果与意义

    - `index.ts` 文件只负责应用启动，保持简洁。
    - 路由集中在 `routes.ts`，清晰明了。
    - 后续可为不同功能区块创建独立路由文件，例如：
        - `products.routes.ts`：产品与分类接口。
        - `orders.routes.ts`：订单相关接口。
        - `admin.routes.ts`：后台管理接口。
    - 结合前几步的重构，后端代码已形成清晰分层：
        - Repository：封装数据访问。
        - Service：实现应用逻辑。
        - Controller：处理请求与响应。
        - Routes：集中管理路由定义。

## Frontend

### 构建 Chatbot 输入区组件

> 简述：在前端为 Chatbot 搭建输入区，包括文本输入框与发送按钮。通过 Tailwind CSS 进行布局与样式控制，并使用 React-Icons 添加图标。重点在于如何利用 Flexbox 布局、去除默认样式、增加交互提示，从而实现一个美观且易用的输入区。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 组件设计思路

    - 输入区外层使用一个带边框和圆角的容器。
    - 容器内部包含两个元素：
        - 无边框的 `<textarea>`，用于输入内容。
        - 圆形按钮，带箭头图标，用于提交消息。
    - 使用原生 `<textarea>` 而非 ShadCN 的 `Textarea`，因为后者自带样式需要额外覆盖，反而增加复杂度。

2. 实现步骤

    1. 准备
        - 在 `packages/client/src/components` 下创建 `Chatbot.tsx`。
        - 使用 VSCode 的 `ES7+ React/Redux/React-Native snippets` 插件，通过`rafce` 快捷方式快速生成函数式组件。
        - 安装 react 点 icon 库：`bun add react-icons`
            - 官网：https://react-icons.github.io/react-icons/
    2. 布局容器
        - 使用 `flex flex-col` 让输入框与按钮纵向排列。
        - 使用 `gap-2` 增加元素间距。
        - 使用 `items-end` 将按钮对齐到右侧。
    3. 输入框样式
        - `w-full`：填满容器宽度。
        - `border-0`：去掉默认边框。
        - `focus:outline-0`：移除聚焦时的高亮描边。
        - `resize-none`：禁用拖拽缩放。
        - `placeholder="Ask anything..."`：提供输入提示。
        - 限制输入长度：如 `maxLength={1000}`。
    4. 按钮样式
        - 使用 `react-icons` 库引入 Font Awesome 的上箭头图标。
        - 类名 `rounded-full` 让按钮变圆。
        - 设置固定宽高（如 `w-10 h-10`），保证按钮为正方形，从而渲染为真正的圆形。
    5. 容器样式
        - 添加 `border-2` 显示外框。
        - 添加 `p-4` 内边距，避免内容贴边。
        - 添加 `rounded` 让整体容器更友好。

3. 效果与意义

    - 输入框简洁清晰，避免默认边框与缩放干扰用户体验。
    - 发送按钮直观且美观，圆形设计提升可用性。
    - 通过分离布局与样式逻辑，代码结构清晰，便于扩展（如后续添加快捷键提交、表单验证等功能）。

**代码示例**

1. `packages/client/src/components/Chatbot.tsx`

    ```tsx
    import { FaArrowUp } from 'react-icons/fa';
    import { Button } from './ui/button';

    const ChatBot = () => {
      return (
        <div className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl">
          <textarea
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={1000}
          />
          <Button className="rounded-full w-9 h-9">
            <FaArrowUp />
          </Button>
        </div>
      );
    };

    export default ChatBot;
    ```

### 处理输入与提交

> 简述：在构建好的输入区上，加入表单管理逻辑。通过 React Hook Form 提供的 `useForm`，实现字段注册、校验、提交与重置，从而让输入区具备完整的表单功能，并支持回车快捷提交。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 基本步骤

    1. 安装依赖
        ```bash
        bun add react-hook-form
        ```
    2. 定义表单数据类型
        - 例如：`type FormData = { prompt: string }`。
    3. 使用 `useForm<FormData>()`
        - 提供泛型确保类型安全。
        - 常用解构值：`register`（字段注册）、`handleSubmit`（提交处理）、`reset`（重置表单）、`formState`（校验状态）。
    4. 注册输入字段
        - 在 `<textarea>` 上展开 `register("prompt", { required: true })`。
        - 自动注入校验规则和表单绑定属性。
    5. 提交处理逻辑
        - 使用 `<form onSubmit={handleSubmit(onSubmit)}>` 包裹输入区。
        - `onSubmit` 函数接收表单数据，执行后调用 `reset()` 清空输入框。
    6. 支持回车快捷提交
        - 在 `onKeyDown` 中判断 `e.key === "Enter"` 且 `!e.shiftKey`。
        - 调用 `handleSubmit(onSubmit)()`，并通过 `e.preventDefault()` 阻止默认换行行为。
    7. 动态禁用按钮
        - 使用 `formState.isValid` 控制按钮是否可用。
        - 进一步通过 `validate` 函数排除纯空格输入。

2. 效果与意义

    - 提供标准化的输入管理，避免重复写 `useState`。
    - 提交与校验逻辑集中，代码更简洁。
    - 提升用户体验：回车快捷提交、无效输入禁用按钮。
    - 为后续连接后端 API 打下基础。

**代码示例**

1. `packages/client/src/components/Chatbot.tsx`

    ```tsx
    import { FaArrowUp } from 'react-icons/fa';
    import { Button } from './ui/button';
    import type { KeyboardEvent } from 'react';
    import { useForm } from 'react-hook-form';

    type FormData = {
      prompt: string;
    };

    const ChatBot = () => {
      const { register, handleSubmit, reset, formState } = useForm<FormData>();

      const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
      };

      const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // 阻止默认提交 → 改为手动调用 handleSubmit(onSubmit)()，这样可以走自己定义的表单校验和提交逻辑，而不是浏览器的默认逻辑。
          handleSubmit(onSubmit)();
        }
      };

      return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={onKeyDown}
          className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
    >
          <textarea
            {...register('prompt', {
              required: true,
              validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={1000}
          />
          <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
          </Button>
        </form>
      );
    };

    export default ChatBot;
    ```

### 向服务端提交数据

> 简述：表单提交时需要将用户输入发送到后端 API。相比 `fetch`，Axios 提供了更简洁的语法，并内置了 JSON 解析、请求取消与错误处理等功能，更适合在项目中使用。提交时应立即清空输入框，以保证流畅的用户体验；同时，需要生成并传递会话 ID 来维持上下文。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么选择 Axios

    - 自动处理 JSON 解析，避免手动调用 `.json()`。
    - 内置错误处理和请求取消机制。
    - 语法更直观，代码可读性更高。

2. 实现步骤

    1. 安装依赖
        ```bash
        bun add axios
        ```
    2. 引入 Axios
        - 按照惯例，先导入第三方库，再导入本地模块，保持 import 顺序清晰。
    3. 修改表单提交逻辑
        - 在 `onSubmit` 中使用 `axios.post("/api/chat", { prompt, conversationId })`。
        - 在调用 API 之前立即执行 `reset()`，确保用户输入即时清空，不受网络延迟影响。
    4. 管理会话 ID
        - 使用 `useRef` 创建并保存 `conversationId`：
            - 只在首次渲染时生成 UUID。
            - 使用 `crypto.randomUUID()` 生成唯一标识符。
            - 与 `useState` 不同，`useRef` 的值不会触发重新渲染，适合存放不变的上下文数据。
    5. 处理响应
        - 使用 `await` 等待请求结果。
        - 解构响应对象中的 `data` 字段并打印，验证提交是否成功。

3. 效果与意义

    - 用户输入提交后立即清空输入框，交互体验更流畅。
    - 引入会话 ID，保证多次请求能在同一对话上下文中关联。
    - 将提交逻辑与 UI 状态解耦，代码更清晰、更易维护。

**代码示例**

1. `packages/client/src/components/Chatbot.tsx`

    ```tsx
    import { useRef, type KeyboardEvent } from 'react';
    import axios from 'axios';
    import { FaArrowUp } from 'react-icons/fa';
    import { Button } from './ui/button';
    import { useForm } from 'react-hook-form';

    type FormData = {
      prompt: string;
    };

    const ChatBot = () => {
      const conversationId = useRef(crypto.randomUUID());
      const { register, handleSubmit, reset, formState } = useForm<FormData>();

      const onSubmit = async ({ prompt }: FormData) => {
        reset();

        const { data } = await axios.post('/api/chat', {
          prompt,
          conversationId: conversationId.current,
        });
        console.log(data);
      };

      const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // 阻止默认提交 → 改为手动调用 handleSubmit(onSubmit)()，这样可以走自己定义的表单校验和提交逻辑，而不是浏览器的默认逻辑。
          handleSubmit(onSubmit)();
        }
      };

      return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={onKeyDown}
          className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
    >
          <textarea
            {...register('prompt', {
              required: true,
              validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={1000}
          />
          <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
          </Button>
        </form>
      );
    };

    export default ChatBot;
    ```

### 渲染消息列表

> 简述：在聊天应用中，需要将用户输入和服务端返回的回复依次渲染到页面。通过使用 React 的 `useState` 管理消息数组，并在表单提交和服务端响应时更新消息列表，就能实现基本的对话展示。需要注意避免异步更新时状态被覆盖的问题。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 消息状态管理

    - 使用 `useState<string[]>` 定义 `messages` 状态，初始化为空数组。
    - 在表单提交时：将用户输入（`prompt`）追加到消息数组。
    - 在收到服务端响应时：将 `data.message` 追加到消息数组。

2. 类型提示与接口约束

    - 直接使用 `axios.post` 时，TypeScript 不知道服务端返回的对象结构，导致缺少智能提示。
    - 定义类型 `ChatResponse`：
        ```ts
        type ChatResponse = {
          message: string;
        };
        ```
    - 在调用 `axios.post` 时传入泛型参数：
        ```ts
        const { data } = await axios.post<ChatResponse>("/api/chat", { ... });
        ```
    - 这样可以在 `data.message` 上获得完整的类型提示。

3. 消息渲染逻辑

    - 在 JSX 中使用 `messages.map` 将每条消息渲染为 `<p>` 元素。
    - 每个元素需添加 `key`，此处可使用 `index`。
    - 在布局上，可将 `form` 包裹在一个外层 `div`，并在其上方或下方添加消息列表容器。

4. 避免状态覆盖问题

    - 问题：多次调用 `setMessages([...messages, newMessage])` 时，`messages` 可能还是旧的空数组，导致后一次更新覆盖前一次更新。
    - 解决方案：使用函数式更新，确保 React 始终使用最新的状态：
        ```ts
        setMessages((prev) => [...prev, prompt]);
        setMessages((prev) => [...prev, data.message]);
        ```
    - 这样每次更新都会基于最新的 `messages` 进行累加。

5. 效果与意义

    - 用户输入和服务端回复会依次显示在界面中，形成对话流。
    - 使用函数式更新避免状态竞争，使得用户输入不会被服务端响应覆盖。
    - 为后续添加消息样式（区分用户与 AI 消息）奠定基础。

**代码示例**

1. `packages/client/src/components/Chatbot.tsx`

    ```tsx
    import { useRef, useState, type KeyboardEvent } from 'react';
    import axios from 'axios';
    import { FaArrowUp } from 'react-icons/fa';
    import { Button } from './ui/button';
    import { useForm } from 'react-hook-form';

    type FormData = {
      prompt: string;
    };

    type ChatResponse = {
      message: string;
    };

    const ChatBot = () => {
      const [messages, setMessages] = useState<string[]>([]);
      const conversationId = useRef(crypto.randomUUID());
      const { register, handleSubmit, reset, formState } = useForm<FormData>();

      const onSubmit = async ({ prompt }: FormData) => {
        setMessages((prev) => [...prev, prompt]); // prev 是 React 在调用更新函数时注入的最新 state。函数式更新才是安全的
        // setMessages(([...message, prompt]); // 这里的 messages 可能已经是过时的值，导致“覆盖掉”之前的更新。
        reset();

        const { data } = await axios.post<ChatResponse>('/api/chat', {
          prompt,
          conversationId: conversationId.current,
        });
        setMessages((prev) => [...prev, data.message]);
        // setMessages([...messages, data.message]);
      };

      const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // 阻止默认提交 → 改为手动调用 handleSubmit(onSubmit)()，这样可以走自己定义的表单校验和提交逻辑，而不是浏览器的默认逻辑。
          handleSubmit(onSubmit)();
        }
      };

      return (
        <div>
          <div>
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={onKeyDown}
            className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
            <textarea
              {...register('prompt', {
                required: true,
                validate: (data) => data.trim().length > 0,
              })}
              className="w-full border-0 focus:outline-0 resize-none"
              placeholder="Ask anything"
              maxLength={1000}
            />
            <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
              <FaArrowUp />
            </Button>
          </form>
        </div>
      );
    };

    export default ChatBot;
    ```

### 对话消息样式化

> 简述：消息已经能正常渲染，但要让界面更接近真实的对话，需要区分用户和机器人的消息展示。通过在消息对象中添加角色属性，并结合条件样式，可以让用户消息显示在右侧（蓝色气泡），机器人回复显示在左侧（灰色气泡）。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么要区分消息角色

    - 单纯的文本渲染无法体现对话感。
    - 添加 `role` 属性后，可以根据消息来源应用不同的样式。
    - 角色区分是后续功能扩展（如头像、气泡颜色、对齐方式）的前提。

2. 定义消息结构

    - 定义 `Message` 类型：
        - `content: string`（消息内容）
        - `role: "user" | "bot"`（消息来源）
    - 将消息状态改为 `Message[]`，初始化为空数组。
    - 在更新消息时，存入对象而非纯字符串：
        - 用户输入：`{ content: prompt, role: "user" }`
        - 服务端响应：`{ content: data.message, role: "bot" }`

3. 渲染逻辑与样式控制

    - 使用 `messages.map` 渲染 `<p>` 标签，内容为 `message.content`。
    - 公共样式：圆角（`rounded-xl`）、间距（`gap-3`）、垂直排列（`flex flex-col`）。
    - 条件样式：
        - 用户消息：蓝色背景（`bg-blue-500 text-white`），右对齐（`self-end`）。
        - 机器人消息：灰色背景（`bg-gray-200 text-black`），左对齐（`self-start`）。
    - 利用 Tailwind 的模板字符串语法：
        ```tsx
        className={`px-4 py-2 rounded-xl ${
          message.role === "user"
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-200 text-black self-start"
        }`}
        ```

4. 布局与视觉优化

    - 消息容器设置 `flex flex-col gap-3`，避免消息堆叠在一起。
    - 用户消息靠右，机器人消息靠左，模拟真实对话布局。
    - 最终效果：对话流既有区分度，又保持统一的排版风格。

**代码示例**

1. `packages/client/src/components/Chatbot.tsx`

    ```tsx
    import { useRef, useState, type KeyboardEvent } from 'react';
    import axios from 'axios';
    import { FaArrowUp } from 'react-icons/fa';
    import { Button } from './ui/button';
    import { useForm } from 'react-hook-form';

    type FormData = {
      prompt: string;
    };

    type ChatResponse = {
      message: string;
    };

    type Message = {
      content: string;
      role: 'user' | 'bot';
    };

    const ChatBot = () => {
      const [messages, setMessages] = useState<Message[]>([]);
      const conversationId = useRef(crypto.randomUUID());
      const { register, handleSubmit, reset, formState } = useForm<FormData>();

      const onSubmit = async ({ prompt }: FormData) => {
        setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
        reset();

        const { data } = await axios.post<ChatResponse>('/api/chat', {
          prompt,
          conversationId: conversationId.current,
        });
        setMessages((prev) => [...prev, { content: data.message, role: 'bot' }]);
        // setMessages([...messages, data.message]);
      };

      const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // 阻止默认提交 → 改为手动调用 handleSubmit(onSubmit)()，这样可以走自己定义的表单校验和提交逻辑，而不是浏览器的默认逻辑。
          handleSubmit(onSubmit)();
        }
      };

      return (
        <div>
          <div className="flex flex-col gap-3 mb-10">
            {messages.map((message, index) => (
              <p
                key={index}
                className={`px-3 py-1 rounded-xl ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white self-end'
                    : 'bg-gray-100 text-black self-start'
                }`}
          >
                {message.content}
              </p>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={onKeyDown}
            className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
            <textarea
              {...register('prompt', {
                required: true,
                validate: (data) => data.trim().length > 0,
              })}
              className="w-full border-0 focus:outline-0 resize-none"
              placeholder="Ask anything"
              maxLength={1000}
            />
            <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
              <FaArrowUp />
            </Button>
          </form>
        </div>
      );
    };

    export default ChatBot;
    ```

### 渲染 Markdown 格式消息

> 简述：当前机器人回复只显示为纯文本，若包含 Markdown 格式（如加粗、代码块、列表），无法正确呈现。通过引入 `react-markdown` 库，可以让对话消息支持 Markdown 渲染，使输出更接近真实阅读体验。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么要支持 Markdown

    - 机器人回答中常包含结构化信息（如加粗重点、代码块、列表）。
    - 纯文本渲染会丢失格式，降低可读性。
    - Markdown 渲染能直观展示模型输出，提升用户体验。

2. 引入 `react-markdown`

    - 安装依赖：
        ```bash
        bun add react-markdown
        ```
    - 在组件顶部导入：
        ```tsx
        import ReactMarkdown from "react-markdown";
        ```
    - 第三方依赖应优先放在 import 列表顶部，以保持规范化。

3. 在消息列表中应用 Markdown 渲染

    - 将 `message.content` 包裹在 `ReactMarkdown` 组件中：
        ```tsx
        <ReactMarkdown>{message.content}</ReactMarkdown>
        ```
    - 支持加粗、斜体、列表、代码块等格式。

4. 消息被截断的问题

    - 机器人回复可能在句中被截断，原因是服务端调用 OpenAI API 时设置了 `max_output_tokens` 的限制。
    - 这一参数属于应用逻辑，应在 **chat service** 中调整，如调整`max_output_tokens`至 200。
    - 修改后重新测试：
        - 示例问题：`What are three benefits of exercising?`
        - 输出完整段落，包含 Markdown 格式。

5. 后续优化方向

    - `max_output_tokens` 并非万能，过小会截断回复，过大可能浪费计算资源。
    - 更稳妥的方式是通过 **优化 prompt** 来引导模型输出完整答案。
    - 最终目标是保证回复的完整性和可读性，而不仅仅依赖参数调整。

### 添加打字中指示器

> 简述：当前用户发送问题后，需要等待数秒才能收到回复，期间没有任何视觉反馈，体验显得生硬。为提升交互感，可以在机器人生成回复时显示“正在输入”的动画指示，就像真实聊天应用一样。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么需要打字中指示器

    - 用户在等待响应时若无反馈，会误以为系统无反应。
    - 打字指示器能营造“对话感”，提升交互的真实感和亲和力。
    - 在体验设计上，这是最常见的消息应用模式（如 WhatsApp、Messenger）。

2. 实现步骤

    1. 定义状态变量
        - 使用 `useState` 定义布尔值 `isBotTyping`，初始为 `false`。
        - 在发送消息后立即设为 `true`，收到回复后重置为 `false`。
    2. 在消息列表后添加指示器
        - 判断 `isBotTyping` 是否为真。若是，则渲染一组动画点。
        - 使用 `div` 包裹三个子元素，每个点为一个圆形（`rounded-full` + 背景色）。
    3. 布局与样式
        - 外层容器：`flex` 布局，横向排列三点，设置 `gap` 增加间距。
        - 添加水平内边距和圆角背景（如 `rounded-xl`）增强视觉效果。
        - 为避免在垂直 `flex` 容器中拉伸，占满全宽，需为容器设置 `self-start`。
    4. 动画与延迟效果
        - 使用 `animate-pulse` 让元素 逐渐变亮，变暗，再变亮，循环播放，像“呼吸”效果。
        - 通过 `animation-delay` 为第二、第三个点添加延迟，制造依次跳动的效果。

3. 效果与意义

    - 用户能直观感受到系统正在处理请求，减少等待焦虑。
    - 界面交互更接近真实聊天场景，提升沉浸感。
    - 这种交互模式可扩展为“加载更多消息”、“网络请求中”等其他提示。

### 自动滚动到底部

> 简述：当前消息提交后，新的回复会出现在页面底部。如果屏幕已满，用户需要手动滚动才能看到最新内容。这不符合聊天应用的自然交互习惯。通过 `useRef` 和 `useEffect`，可以让界面在消息更新时自动滚动到底部，使对话体验更顺畅。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么需要自动滚动

    - 聊天应用的核心体验是实时性，用户应始终看到最新消息。
    - 手动滚动会破坏沉浸感，增加操作负担。
    - 自动滚动保证用户焦点始终在对话末尾，是聊天界面设计的基础功能。

2. 实现步骤

    1. 创建引用对象
        - 使用 `useRef` 获取表单（form）的 DOM 引用：
            ```tsx
            const formRef = useRef<HTMLFormElement | null>(null);
            ```
        - 初始值设为 `null`，类型定义为 `HTMLFormElement | null`，避免初始化报错。
    2. 绑定引用到表单
        - 在 JSX 中，将 `formRef` 绑定到 `<form>` 元素：
            ```tsx
            <form ref={formRef} ...>
            ```
    3. 使用 `useEffect` 监听消息更新
        - 当 `messages` 数组发生变化时，执行滚动：
            ```tsx
            useEffect(() => {
              if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }, [messages]);
            ```
        - `scrollIntoView` 保证页面滚动到表单位置。
        - 设置 `{ behavior: "smooth" }` 提供平滑过渡效果。

3. 效果

    - 提交新消息后，界面自动平滑滚动，始终展示最新对话。
    - 提升了交互自然性，符合用户对聊天工具的直觉预期。

### 自定义复制消息文本

> 简述：在浏览器中直接复制聊天消息时，会带上多余的换行符或不可见格式。这是因为浏览器复制的是完整的 HTML，而不仅仅是文本。为保证用户复制到剪贴板的内容干净整洁，需要拦截 `onCopy` 事件，自定义复制逻辑，只保留去除多余空格的纯文本。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 为什么需要自定义复制

    - 默认复制行为包含 HTML 格式，导致额外的换行符或样式信息。
    - 用户预期复制到的应该是纯净的聊天文本。
    - 改造复制逻辑能提升用户体验，使聊天记录更便于粘贴和二次使用。

2. 实现步骤

    1. 在消息渲染处监听 `onCopy` 事件。
    2. 使用 `window.getSelection()` 获取用户选择的文本，并调用 `toString().trim()` 去除空格与换行。
    3. 判断文本是否存在，若存在则：
        - 调用 `e.preventDefault()` 阻止默认复制行为。
        - 使用 `e.clipboardData.setData("text/plain", selection)` 将清理后的纯文本写入剪贴板。
    4. 将逻辑抽取到独立函数，避免在 JSX 中直接写复杂的事件处理。

3. 类型注解与最佳实践

    - 使用 TypeScript 时，事件类型应注解为：
        ```ts
        React.ClipboardEvent<HTMLParagraphElement>
        ```
    - 如果不关心目标元素，可简化为 `React.ClipboardEvent`。
    - 当需要访问 `e.target` 的段落元素特有属性时，指定 `<HTMLParagraphElement>` 更为准确。

**代码示例**

1. 在组件中抽取事件处理函数

    ```tsx
    // onCopyMessage.tsx (同组件内部定义)
    const onCopyMessage = (e: React.ClipboardEvent<HTMLParagraphElement>) => {
      // 获取用户选择的文本
      const selection = window.getSelection()?.toString().trim();

      if (selection) {
        // 阻止默认复制行为（复制 HTML）
        e.preventDefault();

        // 将纯净文本写入剪贴板
        e.clipboardData.setData("text/plain", selection);
      }
    };
    ```

2. 在渲染消息处绑定事件

    ```tsx
    <p onCopy={onCopyMessage}>
      {message.content}
    </p>
    ```

### 优化聊天界面布局与交互

> 简述：在构建聊天应用时，良好的布局和交互体验至关重要。本节优化了聊天组件的高度与宽度管理、滚动逻辑、表单验证和默认焦点，从而提升了整体用户体验。核心思想是避免硬编码尺寸，让组件保持灵活，并确保消息区与输入框行为符合直觉。

**知识树**

0. 代码仓库

    - [地址](https://github.com/PangPang1999/my-app)

1. 布局调整：输入框固定在底部

    - 聊天组件设置为纵向 `flex` 容器，消息区 `flex-1` 占据剩余空间。
    - 高度不要在组件内部硬编码，应由外层页面控制（例如整页或侧边栏）。
    - 使用 `h-full` 让聊天组件随外层容器拉伸，而不是强制 `h-screen`。
    - 宽度同理，应外部控制，保证组件可在不同布局中复用。

2. 滚动行为优化

    - 问题：默认是整个页面滚动，导致输入框可能被顶出视野。
    - 方案：只允许消息区滚动，输入区保持固定。
        - 给消息区添加 `overflow-y-auto`。
    - 自动滚动：
        - 原先绑定表单 `ref`，会错误地滚动到输入框。
        - 修复方法：将 `ref` 绑定到最后一条消息。
        - 渲染时判断 `index === messages.length - 1` 时设置 `ref`，确保每次新消息出现时自动滚动到底部。

3. 表单验证 Bug 修复（粘贴文本时无效）

    - 问题：粘贴后表单未触发验证，导致按钮保持禁用。
    - 原因：`reset()` 时未设置默认值。
    - 解决：`reset({ prompt: "" })`，保证表单始终有初始值。

4. 渲染错误修复（列表嵌套问题）

    - 问题：响应中包含 Markdown 列表，导致 `<ol>` 被渲染在 `<p>` 内，引发控制台警告。
    - 解决：将消息容器由 `<p>` 改为 `<div>`，并更新 `ref` 类型为 `HTMLDivElement`。

5. 用户体验优化

    - 输入框默认聚焦：在 `<textarea>` 上添加 `autoFocus`，避免刷新后需要额外点击。
    - 这样用户打开页面即可直接输入，提高交互效率。

# S4：提示词工程

## 什么是 Prompt Engineering

> 简述：Prompt Engineering（提示词工程）是与大语言模型交互时最核心的技能。它不是编写代码，而是通过自然语言编写指令，引导模型产生更有用的输出。提示的细微差别会极大影响结果质量。

**知识树**

1. 核心思维

    - 与模型交互不是写代码，而是写文字指令（Prompt）。
    - 模型根据 Prompt 预测并生成输出。
    - 结果好坏取决于输入的清晰度和结构化程度。

2. 为什么需要 Prompt Engineering

    - 模型像一个聪明但严格的助理：只会按提示执行，不会自动补充上下文。
    - 模糊的提示 → 模型“猜测”，结果可能偏离预期。
    - 清晰的提示 → 模型更准确地产出目标结果。
    - 本质目标：减少歧义、提高一致性、控制输出质量。

3. 案例对比

    - 模糊 Prompt：
        ```
        Summarize this text.
        ```
        缺点：没有说明总结长度、目标受众、输出格式。
    - 改进 Prompt：
        ```
        Summarize the following product reviews in three short bullet points.
        Focus on common themes and use simple language.
        ```
        优点：结构化，包含数量要求、格式指引和语气控制。

4. 技术意义

    - 不是写程序逻辑，而是写“交互逻辑”。
    - 直接影响应用的可用性与稳定性。
    - 在产品化应用中，Prompt Engineering 是必不可少的工程实践，而不仅仅是语言技巧。

## Prompt 的基本结构

> 简述：一个高质量的 Prompt 通常由三部分组成：清晰的指令（Instruction）、必要的上下文（Context）、明确的输出格式（Format）。这三部分决定了模型的理解方式和生成结果的可控性。小的改动即可显著提升输出质量。

**知识树**

1. Prompt 的三大核心要素

    1. 指令（Instruction）
        - 告诉模型要完成的任务。
        - 不仅说明“做什么”，还要具体化“如何做”。
        - 示例：
            - 模糊指令：`Summarize the following product reviews.`
            - 改进指令：`Summarize the following reviews in three short bullet points using simple language.`
            - 改进点：增加数量要求、输出形式和语言风格，减少歧义。
    2. 上下文（Context）
        - 提供任务背景、角色设定或参考资料。
        - 帮助模型确定语气、侧重点和生成范围。
        - 示例：
            - `You are a senior software engineer. Read the code snippet below and explain it in plain English.`
            - 作用：让模型以工程师身份输出解释，保证技术准确性和合适的语言风格。
        - 原则：背景信息越清晰、细节越充分，输出质量越高。
    3. 输出格式（Format）
        - 指定结果的呈现方式，减少不可控的差异。
        - 适用于开发场景，保证结构化与一致性。
        - 示例：
            - `Label this message as spam or not spam. Return the result as JSON with a single key called "label".`
            - 好处：避免模型返回冗余解释，输出可直接用于程序。

2. 综合示例

    - Prompt：
        ```
        You are a helpful support agent.
        Summarize the following customer reviews in 2–3 bullet points.
        Focus on pain points related to the login experience.
        ```
    - 结构说明：
        - 角色设定：Support agent。
        - 任务说明：总结评论。
        - 执行方式：使用 2–3 个要点，避免专业术语。
        - 输出格式：纯文本，按要点列出。

3. 重要性

    - 指令提供清晰目标，避免模型“猜测”。
    - 上下文引导生成方向，使输出更契合场景。
    - 格式控制保证结果可用，尤其适合直接集成到应用中。
    - 本质：通过 Prompt 设计，把不可控的“生成”变成可预测的“工程”。

## Prompt 的上下文设计

> 简述：在构建真实应用时，提供正确的上下文是 Prompt 工程中最强大的手段之一。上下文能把通用的语言模型转化为专业助手，使其回答更准确、更贴合场景。上下文并不会改变模型的能力，但会深刻影响其语气、重点和表达方式。

**知识树**

1. 为什么需要上下文

    - 通用模型的局限：默认状态下，模型不了解企业、客户或产品，只能提供通用回答。
    - 上下文的作用：通过额外信息，把模型塑造成贴合业务的专属助手。
    - 效果：减少用户在多个页面中寻找答案的时间，提高交互效率和体验。

2. 提供上下文的常见方式

    1. 角色设定（Role Assignment）
        - 让模型扮演特定身份，从而决定语气和思维方式。
        - 示例：
            - `You are a senior backend engineer. Explain the code below to a junior developer.`
            - `You are a customer support agent. Respond politely and empathetically to this customer.`
    2. 背景信息（Background Information）
        - 在 Prompt 中提供与业务相关的规则、事实或文档。
        - 示例：
            - `You are a customer support assistant. Here’s our refund policy. Answer the customer’s question accordingly.`
        - 好处：确保回答贴合产品或场景，避免泛化。
    3. 目标受众（Audience Specification）
        - 指定回答的对象，以调整语言难度和风格。
        - 示例：
            - `Explain this topic to a non-technical user.`
            - `Write a summary for a high school student.`
    4. 语气与风格（Tone Control）
        - 控制语言风格，让交互更自然。
        - 示例：
            - `Respond in a friendly, conversational tone. Avoid sounding formal or robotic.`
            - `Use professional, empathetic language, like a calm support rep helping a frustrated customer.`
    5. 引入参考资料（Reference Material）
        - 在 Prompt 中嵌入产品描述、评论、邮件或对话内容。
        - 原则：清晰分隔说明与数据，避免混淆。
        - 常见做法：使用 `---`、`"""` 或 `<data>…</data>` 作为分隔符。

3. 关键原则

    - 上下文不是冗长的 Prompt，而是提供必要的补充信息。
    - 清晰分隔“指令部分”和“参考资料部分”。
    - 上下文设计决定了输出是否“泛泛而谈”还是“场景专属”。
    - 本质：上下文让 LLM 从“通用助手”转变为“业务专家”。

## 控制模型输出的格式

> 简述：在构建真实应用时，不仅要关心模型“说什么”，还要关心它“怎么说”。输出格式直接影响用户体验、应用的可用性，甚至运行成本。通过合理的 Prompt 设计，可以让模型返回段落、列表或 JSON 等结构化结果，从而更好地融入实际业务逻辑。

**知识树**

1. 为什么要控制输出格式

    - 用户体验：输出过长或杂乱会降低可读性。
    - 成本控制：限制长度可避免超出输出 token 上限，减少费用。
    - 应用集成：结构化输出（如 JSON）能直接供代码使用，而无需额外解析。

2. 常见输出格式与应用场景

    1. **纯文本（Plain Text）**
        - 默认格式，可读性自然。
        - 可控制长度与完整性：
            - `Summarize this text in two short sentences.`
            - `Ensure the summary is complete and does not end mid-sentence.`
    2. **Markdown 格式**
        - 适合生成带格式的摘要、说明文档或展示内容。
        - 支持粗体、斜体、列表等。
        - 示例：
            - `Summarize this review in two bullet points using Markdown. Highlight important details in bold.`
    3. **逗号分隔列表（Comma-Separated List）**
        - 用于提取关键词、标签等轻量级结构化数据。
        - 示例：
            - `Extract three keywords from this article. Return them as a comma-separated list in lowercase.`
    4. **JSON（Structured Data）**
        - 适合数据提取与系统集成。
        - 示例：
            ```text
            From the paragraph below, extract all product names and their prices.
            Return a valid JSON array of objects.
            Each object should include:
            - name: string
            - price: number (without currency symbols)
            ```
        - 提示优化：要求模型只返回 JSON，不要附带解释。
            - `Only return valid JSON, no explanation or extra text.`

3. 关键实践原则

    - 指令必须清晰具体，避免模糊描述。
    - 格式要求写入 Prompt，不依赖模型“猜”。
    - 对于结构化数据，要求“只返回结果，不要额外解释”，确保输出可直接使用。
    - 输出控制是 Prompt 工程的“编程化”一面，让自然语言具备类似 API 规范的效果。

## 常见的 Prompt 策略

> 简述：Prompt 策略决定了模型能否稳定输出我们想要的结果。常见方式包括零样本（Zero-shot）、单样本（One-shot）和少样本（Few-shot）。不同任务需要不同策略，关键是如何通过示例或约束减少歧义，确保模型输出一致且可用。

**知识树**

1. Zero-shot Prompting（零样本提示）

    - 定义：不给模型任何示例，仅依靠清晰的指令完成任务。
    - 优点：简洁直接，适合常见任务（如情感分析）。
    - 关键点：必须明确输出范围，否则模型可能给出模糊或冗长结果。
    - 示例：
        ```text
        Classify the following product review as "positive", "neutral", or "negative".
        ```
        - 如果未限定输出值，模型可能返回“somewhat happy”之类的模糊答案，无法直接用于代码。

2. One-shot Prompting（单样本提示）

    - 定义：提供一个示例，帮助模型理解所需的输出结构或格式。
    - 适用场景：输出需要特定结构（如 JSON），但任务相对简单。
    - 示例：
        ```text
        Turn this review into a JSON object.
        Example:
        {"sentiment": "positive"}
        ```
        - 模型学习示例后，能够稳定返回符合要求的 JSON 格式。

3. Few-shot Prompting（少样本提示）

    - 定义：提供多个示例，让模型学习模式和边界条件。
    - 适用场景：任务复杂，需要模型理解多个维度或字段。
    - 示例任务：分析客服消息并返回结构化数据：
        ```json
        {
        	"intent": "order_status",
        	"urgency": "high",
        	"mentions_order": true
        }
        ```
    - 为什么需要多个示例：
        - 单一示例无法涵盖所有可能的意图、紧急程度或边缘情况。
        - 三到五个高质量、多样化的示例通常足够。
        - 示例必须：清晰、不含歧义、格式统一，并覆盖常见用例和少量边界情况。

4. 原则总结

    - Zero-shot：任务常见、类别直观，指令必须明确。
    - One-shot：需要特定输出结构，用一个示例即可锁定格式。
    - Few-shot：任务复杂、包含多个字段或规则，需用多个示例帮助模型归纳。
    - 示例质量比数量更重要：宁少而精准，不要含糊或不一致。

## Prompt 的边界与异常

> 简述：就像函数需要测试正常路径和异常输入一样，Prompt 也必须在各种边界条件下验证其表现。即便指令在理想情况下有效，如果输入为空、模糊或无效，模型可能仍会“编造”答案。因此，健壮的 Prompt 必须明确约束无效输入的处理方式，并在必要时引导澄清。

**知识树**

1. 为什么要做边界测试

    - 模型默认会尝试生成答案，即使输入毫无意义。
    - 没有约束时，输出可能不可用，甚至会误导应用逻辑。
    - 健壮性测试可以确保在各种异常场景下模型行为可预测。

2. 常见处理策略

    1. 返回错误对象
        - 在输入缺失或不符合要求时，要求模型输出预定义的错误格式。
        - 示例：
            ```text
            Summarize this product review.
            If the input is empty or invalid, return: {"error": "Invalid input"}
            If the input has fewer than 5 words, return: {"error": "Too short"}
            ```
    2. 提出澄清性问题
        - 当输入含糊不清时，要求模型主动提问而非猜测。
        - 适用场景：聊天机器人或需要交互的系统。
        - 示例：
            ```text
            If the user's request is too vague, respond with a clarifying question such as:
            "Could you provide more details about what you mean?"
            ```

3. 测试用例设计

    - 空输入：`""`
    - 仅空格或空白字符
    - 极短输入：1–2 个无关单词
    - 无意义文本：随机字母或符号
    - 超长输入：超过正常任务长度的文本
    - 缺失关键信息的输入
    - 目标：观察模型是否遵循错误处理或澄清机制，而不是返回随意答案。

4. 实践原则

    - Prompt 要求必须包含异常处理逻辑，而不仅是任务指令。
    - 对于需要用户交互的应用，应优先澄清而不是直接报错。
    - 不断用极端输入测试，迭代优化 Prompt，直到模型行为稳定、可预测。

## Prompt 中的幻觉与应对策略

> 简述：大语言模型有时会“编造”内容，这被称为幻觉（Hallucination）。它并非恶意，而是源于模型预测机制的局限。模型并不检索事实，而是基于训练数据推测下一个最可能的词语。当输入模糊或缺乏上下文时，它会“填空式”生成听起来合理但并不真实的答案。为了在应用中提高可靠性，我们必须通过 Prompt 设计减少幻觉的发生，并在必要时对输出进行验证。

**知识树**

1. 幻觉的根源

    - 模型不会查找事实数据库，只会预测文本模式。
    - 输入模糊或缺乏背景时，模型会自行补全。
    - 输出可能自洽、流畅，但与事实不符。

2. 减少幻觉的策略

    1. 提供事实（Grounding）

        - 在 Prompt 中显式提供背景信息，让模型基于真实数据回答。
        - 示例：
            ```text
            Here is our refund policy: ‘具体规则’
            Now, answer the customer's question: ’Can I cancel my ticket for tomorrow?‘
            ```

    2. 指定“不知道”的处理方式
        - 示例：
            ```text
            If you're unsure, or the answer isn’t available, say:
            "Sorry, I don’t have that information."
            Do not guess or invent an answer.
            ```
    3. 限制回答范围（Scope Control）
        - 约束模型仅回答相关问题，避免跑题。
        - 示例：
            ```text
            You are a support assistant for a theme park.
            Only answer questions related to rides, tickets, hours, and policies.
            If the question is unrelated, respond with:
            "I’m here to help with park-related questions. Let me know if there's anything you’d like to know about your visit."
            ```

3. 输出验证与应用防护

    - 即便有良好 Prompt，幻觉仍可能出现，因此需要应用层校验：
        - 对 JSON 输出使用数据校验库（如 Zod）进行验证。
        - 对关键业务数据进行白名单或规则检查。
        - 避免将未经验证的 LLM 输出直接用于关键决策。
        - 日志与监控是必要的手段，用于发现和追踪异常输出。

4. 实践原则

    - 幻觉不代表模型“坏掉”，而是提示我们需要更明确的指令。
    - 通过 Grounding、范围约束和“未知处理”三板斧，可以大幅降低风险。
    - 永远不要过度信任模型，保持“验证—使用”的闭环。

## 构建与迭代主题乐园客服 Prompt

> 简述：Prompt 工程与写代码类似，是一个不断迭代优化的过程。初始 Prompt 往往笼统，需要通过测试与 refinement 来逐步增强，让模型回答更贴合业务需求。以“主题乐园客服”为例，我们通过逐步添加上下文、限制范围、修正输出风格等手段，让模型从“通用助手”变为“业务专属客服”。

**知识树**

1. 初始状态：通用助手

    - 问题：模型回答类似 ChatGPT，无法区分特定业务。
    - 示例：问 “What time does the park close?”
    - 回答： “I would need to know which park you're referring to...”

2. 添加上下文（角色设定 + 业务数据）

    - 设定身份（System message）：
        ```text
        You are a customer support agent for a theme park named Wonder World.
        Park‘s opening hours are:
        Monday - Thursday: 9am - 5pm
        Friday - Sunday: 9am - 9 pm
        ```
    - 提供知识：营业时间、票务规则等。
    - 效果：模型开始回答与 Wonder World 相关的问题。

3. 动态信息插入（解决时间盲点）

    - 问题：LLM 不知道当前日期
    - 示例：问“What time dose the park close today?”
    - 回答 “To help you accurately, could you please tell me what day it is today? ...”。
    - 解决：在 Prompt 中注入当前日期或星期。下面为硬编码示例
        ```text
        You are a customer support agent for a theme park named Wonder World.
        Park‘s opening hours are:
        Monday - Thursday: 9am - 5pm
        Friday - Sunday: 9am - 9 pm
        Today is Monday, September 11.
        Do not repeat today’s date in your response.
        ```
    - 效果：回答自然，不重复提起日期。

4. 限制回答范围（避免跑题）

    - 问题：用户提问 “What is the capital of France?”，模型回答巴黎 → 跑题。
    - 解决：加入范围约束：
        ```text
        You are a customer support agent for a theme park named Wonder World.
        Park‘s opening hours are:
        Monday - Thursday: 9am - 5pm
        Friday - Sunday: 9am - 9 pm
        Today is Monday, September 11.
        Do not repeat today’s date in your response.
        Only answer questions related to Wonder World.
        ```
    - 效果：模型拒绝跑题，返回引导性回复：
      “I'm here to assist you with questions related to Wonder World...”

5. 实践原则

    - 从简单 Prompt 起步，快速测试。
    - 针对用户输入（正常、模糊、无效、跑题）逐步增强指令。
    - Prompt 优化是持续过程，不必追求“一次写对”。
    - 与应用逻辑结合时，可动态注入实时信息，提升自然度。

## 将 Prompt 集成到应用中

> 简述：在应用中直接硬编码长文本 Prompt 不仅冗余，还难以维护。更合理的做法是将 Prompt 与业务知识分离：Prompt 文件负责描述模型的行为规则，而业务知识（如乐园资料）存放在独立 Markdown 文件中。通过占位符替换的方式，在运行时动态注入上下文，既保持代码整洁，又方便后续维护和扩展。

**知识树**

1. 为什么要分离 Prompt 与知识内容

    - Prompt 文件只关注“如何回答”。
    - 业务知识（乐园信息）独立存放，便于更新与维护。
    - 分离后可以迭代 Prompt 策略，而无需改动业务数据。

2. 项目结构设计

    - 在 `server/prompts/` 目录下存放 Prompt 文件和知识文件。
    - 示例结构：
        ```
        server/
          prompts/
            chatbot.txt        # Prompt 模板
            wonderworld.md     # 业务知识（乐园信息）
        ```

3. Prompt 文件内容

    - `chatbot.txt` 中描述模型身份、回答范围、语气风格：
        ```text
        You are a cheerful customer support agent for Wonder World.
        Only answer questions related to Wonder World.
        Avoid making up information.
        Here is some key information about the park:
        {parkInfo}
        ```
    - `{parkInfo}` 是占位符，会在运行时被替换为 `wonderworld.md` 的内容。

4. 服务端读取与替换逻辑

    1. 导入依赖
        ```ts
        import fs from "fs";
        import path from "path";
        ```
    2. 读取业务知识文件
        ```ts
        // 读取 wonderworld.md 内容
        const parkInfo = fs.readFileSync(
          path.join(__dirname, "../prompts/wonderworld.md"),
          "utf-8"
        );
        ```
    3. 读取 Prompt 模板并替换占位符
        ```ts
        // 读取 Prompt 模板
        const template = fs.readFileSync(
          path.join(__dirname, "../prompts/chatbot.txt"),
          "utf-8"
        );
        // 将占位符替换为实际乐园信息
        const instructions = template.replace("{parkInfo}", parkInfo);
        ```
    4. 使用指令调用 OpenAI
        ```ts
        // 在 API 服务中调用
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [{ role: "system", content: instructions }],
        });
        ```

5. 效果验证

    - 问“what time dose the park close” → 返回正确营业时间。
    - 问“do you have a hotel?” → 返回 Wonder World 酒店与价格。
    - 问“what comes after 1?” → 返回提示信息，拒绝跑题。

6. UI 改进

    - 聊天消息过宽可读性差。
    - 在消息容器上添加 `max-w-md` 类，限制单行字数，提高阅读体验。

## 为聊天机器人添加音效反馈

> 简述：在聊天应用中，细节决定体验。通过在消息发送和收到回复时播放简短提示音，可以显著提升交互的沉浸感和专业感。这种微交互虽小，却能让应用更贴近真实聊天工具的体验。

**知识树**

1. 为什么要添加音效

    - 提供即时反馈，让用户确认操作已执行。
    - 增强沉浸感，使聊天体验更自然。
    - 与打字指示器等细节一起提升整体产品质感。

2. 项目结构调整

    - 在前端 `src/assets/sounds/` 下存放音效文件：
        ```
        src/
          assets/
            sounds/
              pop.mp3              # 发送消息音效
              notification.mp3     # 收到回复音效
        ```

3. 在 Chatbot 组件中集成音效

    ```ts
    // 1. 导入音效资源
    import popSound from "@/assets/sounds/pop.mp3";
    import notificationSound from "@/assets/sounds/notification.mp3";

    // 2. 创建音频对象并配置音量
    const popAudio = new Audio(popSound);
    popAudio.volume = 0.5; // 避免声音过大干扰

    const notificationAudio = new Audio(notificationSound);
    notificationAudio.volume = 0.5;

    // 3. 在提交消息时播放发送音效
    const handleSubmit = (data: FormData) => {
      setMessages(prev => [...prev, { role: "user", content: data.prompt }]);
      popAudio.play();
      // 继续调用服务端逻辑…
    };

    // 4. 在接收 Bot 回复时播放提示音效
    const handleBotResponse = (message: string) => {
      setMessages(prev => [...prev, { role: "bot", content: message }]);
      notificationAudio.play();
    };
    ```

4. 实践原则

    - 音效要轻巧、简短，避免分散注意力。
    - 建议允许用户在设置中关闭音效，以兼顾不同场景（如公共场所）。
    - 与视觉提示（如气泡动画、打字指示器）结合使用，构建完整的交互反馈体系。

# S5：搭建评论分析器

## 数据库建立

### 部署 MySQL

**方式 1：docker 一键启动**

```
docker run -d \
  --name my-mysql \
  -e MYSQL_ROOT_PASSWORD='myPssword!' \
  -p 3306:3306 \
  -v $PWD/mysql-data:/var/lib/mysql \
  mysql:8.0
```

**方式 2：官网下载社区版本**

- https://dev.mysql.com/downloads/mysql/

### 集成 Prisma

> 简述：要让应用与数据库交互，需要一个桥梁。Prisma 作为 ORM（对象关系映射工具），能在应用与数据库之间充当“翻译”，既保证类型安全，又提升开发体验。本节将展示如何安装并初始化 Prisma，并配置 MySQL 连接。

**知识树**

1.  Prisma

    - ORM（Object Relational Mapping）工具，简化数据库操作。
    - 提供类型安全，减少运行时错误。
    - 像“翻译器”，让应用以直观方式操作数据库，而无需直接写 SQL。

2.  安装 Prisma

    - 安装 Prisma 拓展插件
    - 在服务 端目录下安装 CLI 工具（开发依赖）：
        ```bash
        bun add -d prisma
        ```
    - 安装 Prisma Client（运行时依赖）：
        ```bash
        bun add @prisma/client
        ```

3.  初始化 Prisma

    - 执行初始化命令，生成 `prisma/` 目录与 `schema.prisma` 文件：
        ```bash
        bunx prisma init
        ```
    - 目录结构示例：
        ```
        server/
          prisma/
            schema.prisma
          .env
        ```

4.  修改 schema 配置

    - 打开 `prisma/schema.prisma`，默认 provider 为 `postgres`，改为 `mysql`：
        ```prisma
        datasource db {
          provider = "mysql"
          url      = env("DATABASE_URL")
        }
        ```

5.  配置数据库连接字符串

    - Prisma 默认会在 `.env` 文件中写入 `DATABASE_URL`，但当前版本存在 bug，需手动修复。
    - `.env` 正确配置示例：
        ```env
        DATABASE_URL="mysql://root:your_password@localhost:3306/review_summarizer"
        ```
        - `root`：MySQL 用户名
        - `your_password`：安装 MySQL 时设置的密码
        - `localhost:3306`：本地服务地址与端口
        - `review_summarizer`：数据库名

6.  验证连接

    - 至此，Prisma 已能连接到本地 MySQL 数据库。
    - 下一步将定义数据库表结构（模型），为后续的业务逻辑奠定基础。

### 定义 Prisma Schema

> 简述：Prisma 通过 Schema 文件描述数据库结构。Schema 就像数据库的蓝图，它定义了表、字段、关系以及默认值。通过代码化建模，我们既能保持清晰结构，又能在应用和数据库之间实现类型安全的交互。

**知识树**

1. 定义 Product 模型

    - 使用 Pascal 命名（首字母大写）。
    - 字段设计：

        ```prisma
        model Product {
          id          Int      @id @default(autoincrement())  // 主键，自增
          name        String                                // 产品名
          description String?                               // 描述，可选
          price       Float                                 // 价格
          reviews     Review[]                              // 一对多关系：产品有多个评论
          summary     Summary?                              // 一对一关系：产品可有一个摘要
        }
        ```

2. 定义 Review 模型

    - 记录用户评论，并与 Product 建立一对多关系。

        ```prisma
        model Review {
          id        Int      @id @default(autoincrement())  // 主键，自增
          author    String                                // 评论作者
          rating    Int                                   // 评分
          content   String                                // 评论内容
          createdAt DateTime @default(now())              // 创建时间，默认当前时间

          productId Int
          product   Product @relation(fields: [productId], references: [id]) // 外键约束
        }
        ```

3. 定义 Summary 模型

    - 用于存储由 LLM 生成的产品摘要，与 Product 建立一对一关系。

        ```prisma
        model Summary {
          id         Int      @id @default(autoincrement())   // 主键，自增
          content    String                                  // 摘要内容
          generatedAt DateTime @default(now())               // 生成时间
          expiresAt  DateTime                                // 过期时间（由应用逻辑决定）

          productId Int  @unique                             // 外键，且唯一，确保一对一
          product   Product @relation(fields: [productId], references: [id])
        }
        ```

4. 建模要点

    - 一对多关系：一个 Product 对应多个 Review。
    - 一对一关系：一个 Product 对应一个 Summary，需在外键上加 `@unique`。
    - 可选字段：用 `?` 表示，例如 Product 的 `description` 和 `summary`。
    - 默认值：使用 `@default()`，例如 `autoincrement()`、`now()`。

5. 实践体会

    - Schema 是数据库与应用的“单一真相源”。
    - 通过关系字段，避免手工管理外键逻辑。
    - 建模时应考虑业务规则：
        - Review 一定属于某个 Product。
        - Summary 可能不存在，但存在时只能有一个。

### Prisma 迁移创建库表

> 简述：定义好 Prisma Schema 后，需要将其转换为实际的数据库表。Prisma 提供的迁移机制（Migration）既能创建表结构，也能在代码与数据库之间保持同步，就像 Git 记录代码变更一样记录数据库的演进。

**知识树**

1. 迁移的作用

    - 将 `schema.prisma` 中的模型定义同步到数据库。
    - 每次修改 Schema，需要生成新的迁移文件，确保数据库结构与代码一致。
    - 类似 Git 提交，迁移文件记录了数据库变更的历史。

2. 创建第一次迁移

    - 在 `server` 目录下运行：
        ```bash
        bunx prisma migrate dev
        ```
    - 流程：

        1. Prisma CLI 自动在 MySQL 创建 `review_summarizer` 数据库。
        2. 要求输入迁移名称（首次迁移通常命名为 `init`）。
        3. 在 `prisma/migrations` 下生成新目录，包含 SQL 脚本文件。

    - 脚本示例：包含 `CREATE TABLE` 语句，为 `Product`、`Review`、`Summary` 三个表建立结构。

3. 迁移管理表

    - Prisma 自动生成一个 `prisma_migrations` 表，用于记录：
        - 迁移 ID
        - 校验和（checksum，用于校验 SQL 文件未被手动篡改）
        - 迁移名称与完成时间
    - 注意：不要手动修改该表，它是 Prisma 的内部追踪机制。

4. 使用 DataGrip 连接 MySQL（可选工具）

    - JetBrains 出品的数据库客户端，适合可视化查看表结构、数据与运行 SQL。
    - 配置步骤：
        1. 新建项目。
        2. 添加数据源 → 选择 MySQL。
        3. 设置 `host=localhost`、`user=root`、`password=安装时设定的密码`。
        4. 首次使用需下载 MySQL 驱动。
        5. 点击 Test Connection 确认连接成功。
    - 选中 `review_summarizer` 数据库后，可看到四个表：
        - `prisma_migrations`（迁移管理表）
        - `product`
        - `review`
        - `summary`

5. 表结构初探

    - `product` 表包含 `id`、`name`、`description`、`price` 等字段。
    - 字符串类型使用 `VARCHAR`，长度策略由 Prisma 针对 MySQL 默认设置。
    - 在实际项目中，可能需要自定义字段长度、命名规则（如复数表名），将在后续通过 Schema 配置实现。

### 修订 Migration

> 简述：在定义好数据库表后，常需要进一步优化 Schema，使其符合实际开发中的命名规范与数据类型约定。这些改动并非应用运行的必需条件，但能提升代码可读性与长期可维护性。

**知识树**

1. 为什么需要优化

    - 默认 Schema 转换结果可能与团队习惯不符（如 PascalCase 表名）。
    - 合理的数据类型选择可以节省存储空间，并避免无意义的冗余。
    - 迁移记录 Schema 的演进，确保数据库与代码保持一致。

2. 表命名规范

    - 使用 `@map` 属性映射表名，遵循小写、复数形式。
    - 示例：
        ```prisma
        model Product {
          id    Int    @id @default(autoincrement())
          name  String
          price Float
          @@map("products")   // 将表名映射为 products
        }
        ```
    - 同理，`Review → reviews`，`Summary → summaries`。

3. 数据类型优化

    - 字符串字段
        - 默认 `String` → `VARCHAR(191)`。
        - 如果需要更长文本，使用 `@db.Text`。
        - 例如 `description` 或 `summary.content` 应存储大量文本。
    - 数值字段
        - 评分（rating）只需 1–5 的范围，不必用 `Int`，可改为 `@db.TinyInt`。
    - 示例：
        ```prisma
        model Review {
          id        Int      @id @default(autoincrement())
          author    String   @db.VarChar(100)
          rating    Int      @db.TinyInt
          content   String   @db.Text
          createdAt DateTime @default(now())
          productId Int
          product   Product  @relation(fields: [productId], references: [id])
          @@map("reviews")
        }
        ```

4. 迁移流程

    - 在 `server` 目录运行：
        ```bash
        bunx prisma migrate dev --name refine-schema
        ```
    - 生成新的迁移目录 `migrations/<timestamp>_refine_schema`，其中包含更新 SQL。
    - 应用后，表名及字段类型在数据库中同步更新。

5. 数据库验证

    - 刷新数据库后可见：
        - `products`、`reviews`、`summaries` 表已改名。
        - 长文本列（如 `description`、`content`）变为 `TEXT`。
        - 评分列改为 `TINYINT`。
    - `prisma_migrations` 表新增一条记录，标记本次迁移。

### 填充数据

> 简述：开发应用时，需要一定量的样例数据来验证功能。手工编写 SQL 插入语句效率低下，而借助 ChatGPT 等 LLM，可以快速生成符合 Schema 的测试数据。这不仅节省时间，还能让数据更贴近真实场景。

**知识树**

1. 为什么需要自动生成测试数据

    - 手动插入数据效率低，难以保持多样性。
    - ChatGPT 能根据 Prisma Schema 生成完整 SQL 脚本，快速填充数据库。
    - 真实感数据有助于发现潜在问题，让应用更贴近生产环境。

2. 生成数据的流程

    1. 提供上下文
        - 将 Prisma Schema 粘贴到提示中，作为结构依据。
    2. 明确指令
        - 指定目标数据库（MySQL，而非 Postgres）。
        - 说明要填充的表（只填充 `products` 与 `reviews`，不包括 `summaries`，因为后者需运行时生成）。
        - 设定数量：如 5 个产品，每个产品生成 5 条评论。
        - 描述质量要求：评论需与产品类型相关，不要生成通用文本。
        - 设定输出格式：只返回 SQL 脚本，不要解释说明。

3. 示例 Prompt

    ```text
    Here is my Prisma schema:

    [schema 内容]

    Generate a complete SQL script to populate the `products` and `reviews` tables in a MySQL database based on the schema above.

    - Create 5 products.
    - For each product, insert 5 realistic customer reviews.
    - Make sure each review is long and tailored to the product type.
    - Do not include data for the `summaries` table.
    - Output only the SQL script, no comments or explanations.
    ```

4. 执行数据导入

    - 在 DataGrip 中右键数据库 → **New Query Console**。
    - 粘贴生成的 SQL 脚本，执行即可完成数据插入。
    - 验证数据表：
        - `products` 表含有 5 个产品。
        - `reviews` 表含有与产品对应的多条评论。

5. 实践启示

    - 通过 LLM 辅助生成测试数据，可快速搭建实验环境。
    - 明确约束条件（数据库类型、表范围、格式要求）可避免生成无效或不兼容的 SQL。
    - 开发初期使用 AI 生成数据，后期可再引入更真实的采样数据集。

## 后端搭建

### 构建评论 API

> 简述：在完成数据库和样例数据准备后，第一步是为应用提供对外查询接口。本节通过 Prisma 构建 `GET /api/products/:id/reviews` 端点，支持根据产品 ID 获取评论，并在输入验证与错误处理上体现健壮性。

**知识树**

1. 为什么要从 API 端点开始

    - 应用需要统一的接口与数据库交互。
    - 提供数据访问能力是后续功能（展示、聚合、推荐等）的基础。
    - 先实现最小可用版本，再逐步重构与优化。

2. 基本步骤

    1. 新增路由
        - 在 `routes.ts` 中注册 `GET /api/products/:id/reviews`。
    2. 初始化 Prisma Client
        - 通过自动生成的 Prisma Client 操作数据库。
        - 每次修改 `schema.prisma` 并迁移后，Prisma Client 会重新生成。
    3. 读取参数并转换
        - 从 `req.params.id` 获取产品 ID。
        - 类型为 `string | undefined`，需转换为 `number`。
    4. 查询数据
        - 使用 `prisma.review.findMany`，按 `productId` 过滤。
        - 设置 `orderBy: { createdAt: 'desc' }`，让最新评论排在最前。
    5. 返回结果
        - 使用 `res.json(reviews)` 直接返回评论数组。

3. 代码说明：

    - `PrismaClient`：负责与数据库交互。
    - `Number(req.params.id)`：转换路径参数为数值。
    - `isNaN(productId)`：拦截非法 ID，返回 400 错误，避免误导前端。
    - `findMany`：自动生成 SQL 查询，简化操作。

4. 输入验证与错误处理

    - 非数字 ID，默认返回是 500，应返回 `400 Bad Request`

5. ORM 与 SQL 的关系

    - Prisma ORM 的优势：减少手写 SQL，语义清晰。
    - 局限性：复杂查询仍需 SQL。
    - 原则：能用 ORM 快速实现时用 ORM，复杂场景下保留手写 SQL 的能力。

### API 代码重构

> 简述：虽然初版 API 可以正常工作，但将所有逻辑写在路由中会导致代码难以维护。本节演示如何按照「控制器 - 服务 - 仓储」三层架构，将代码逐步拆分到各自职责模块中，使系统结构更清晰、扩展更容易。

**知识树**

1. 为什么要模块化

    - 路由只负责注册路径与转发请求。
    - 控制器处理 HTTP 语义（请求与响应）。
    - 服务层处理业务逻辑。
    - 仓储层负责数据库访问。
    - 分层有助于清晰职责、降低耦合、便于扩展和测试。

2. 分层改造步骤

    1. 引入控制器
        - 新建 `controllers/review.controller.ts`。
        - 定义 `reviewController.getReviews(req, res)`，负责请求校验和调用服务。
        - 路由文件替换为：
            ```ts
            router.get("/api/products/:id/reviews", reviewController.getReviews);
            ```
    2. 引入服务层
        - 新建 `services/review.service.ts`。
        - 定义 `reviewService.getReviews(productId)`，处理业务逻辑。
    3. 引入仓储层
        - 新建 `repositories/review.repository.ts`。
        - 只包含数据库操作，使用 Prisma 查询。

3. 测试与验证

    - 有效产品 ID：返回评论数组。
    - 无效 ID：返回空数组。
    - 非数字 ID：返回 `400 Bad Request`，避免误导。
    - 验证结果表明，重构后功能与之前一致，但代码更清晰。

### 构建评论摘要 API

> 简述：在查询评论之后，我们希望为每个产品生成简明的评论摘要。本节实现一个新的 API 端点，负责调用服务层生成摘要，并为后续接入 LLM 打下基础。当前阶段只构建端点流程并返回占位符，下一步再完成实际的总结逻辑。

**知识树**

1. 为什么需要评论摘要

    - 用户不可能逐条阅读所有评论，摘要能快速传递关键信息。
    - 从系统角度看，可以减少数据展示量，提升交互效率。
    - 提前设计好端点和分层，便于后续接入 LLM。

2. 新端点设计

    - 方法：`POST`，因为创建了新的数据（摘要）。
    - 路径：`/api/products/:id/reviews/summarize`，符合 RESTful 规范。
    - 控制器逻辑：
        - 校验 `productId` 是否为数字。
        - 调用服务层生成摘要。
        - 返回 `{ summary: "..." }` 格式的 JSON，而不是裸字符串。

3. 服务层实现

    - 负责业务逻辑：
        - 从仓储层获取评论（只取最新若干条，而不是全部）。
        - 拼接评论内容，作为 LLM 的输入（未来步骤）。
        - 当前先返回占位符，确保端点闭环。

4. 仓储层扩展

    - 增加 `limit` 参数，控制查询条数，避免把所有历史评论送入模型。

5. 测试验证

    - 使用 Postman 发送请求：
        - `POST /api/products/1/reviews/summarize`。
        - 响应：`{ "summary": "This is a placeholder summary." }`。
    - 功能验证通过，端点闭环。

6. 下一步计划

    - 将拼接的评论内容发送到 LLM，由模型生成实际摘要。
    - 增加错误处理（如评论为空）。
    - 缓存摘要结果，避免重复计算。

### 评论摘要接入 LLM

> 简述：在前一节中，我们已将最新评论拼接为一个字符串。本节将这一字符串传递给语言模型，生成简明的评论摘要。实现过程中需要构造合适的 Prompt，并通过 OpenAI 客户端调用模型获取结果。

**知识树**

1. 为什么要用 LLM 生成摘要

    - 评论数量可能非常多，人工阅读成本高。
    - LLM 可以提炼共性主题，突出正面与负面要点。
    - 自动化总结可提升用户体验，减少认知负担。

2. 构造 Prompt 的原则

    - 清晰说明任务：总结评论为简短段落。
    - 指明关注点：突出正负面主题。
    - 保持灵活：后续可根据实际需要调整风格与格式。

    ```ts
    const prompt = `
    Summarize the following customer reviews into a short paragraph,
    highlighting key themes, both positive and negative:
    ${joinedReviews}
    `;
    ```

3. 在服务层调用 OpenAI 客户端

    - 复用已有的客户端初始化逻辑，避免重复配置。
    - 调用 `responses.create`，设置参数：
        - `model`：选择合适的语言模型。
        - `input`：传入构造好的 Prompt。
        - `temperature`：设为 0.2，保证结果确定性。
        - `max_output_tokens`：限制摘要长度，避免过长。

4. 测试结果

    - 使用 Postman 调用 `POST /api/products/:id/reviews/summarize`。
    - 响应返回 `{"summary": "..."}`，内容为 LLM 自动生成的评论摘要。
    - 输出结果需要稍等片刻，因模型调用存在延迟。

5. 后续优化方向

    - Prompt 调整：可增加指定格式（如 Markdown bullet points）。
    - 错误处理：当评论为空时返回提示而非调用 LLM。
    - 缓存机制：避免对同一产品的重复计算，提高性能。
    - 统一客户端封装：在后续重构中将 OpenAI 客户端抽离，避免在多个服务中重复初始化。

### 封装 LLM 客户端

> 简述：当前项目中，`chatService` 和 `reviewService` 都直接依赖 OpenAI 客户端。如果未来切换到其他 LLM 提供商（如 Gemini 或 Claude），需要在多个文件中逐一修改。这种耦合不利于维护。解决方法是抽象出统一的 LLM 客户端模块，隐藏底层平台细节，仅暴露一个简洁的公共接口。

**知识树**

1. 问题背景

    - 多个服务直接依赖 OpenAI API。
    - 如果更换 LLM 提供商，需要大范围修改。
    - API 参数（如 `responses.create`、`outputText`）高度平台绑定，不利于扩展。

2. 抽象方案：LLM 客户端模块

    - 新建 `1. packages/server/llm/client.ts`。
    - 封装底层 OpenAI 客户端，只暴露统一方法：
        ```ts
        export const llmClient = {
          async generateText(options: GenerateTextOptions): Promise<GenerateTextResult> { ... }
        };
        ```
    - 应用层依赖自定义类型，而非 OpenAI SDK。

3. 类型定义

    - 请求参数 `GenerateTextOptions`：
        - `model?: string`（默认值可设为常用模型）
        - `prompt: string`（必填）
        - `temperature?: number`（控制创造性，默认 0）
        - `maxTokens?: number`（限制输出长度）
        - `instructions?: string`（可选，用于系统角色设定）
        - `previousResponseId?: string`（可选，用于对话上下文）
    - 返回结果 `GenerateTextResult`：
        - `id: string`（响应 ID，便于追踪）
        - `text: string`（最终生成的文本）

4. 服务层改造

    - 在 `reviewService` 和 `chatService` 中删除直接依赖 `OpenAI` 的代码。
    - 改为调用 `llmClient.generateText`。

5. 好处

    - 可维护性：未来更换 LLM 提供商，仅需修改 `llmClient` 一处。
    - 解耦：业务逻辑与底层 API 隔离，代码更清晰。
    - 扩展性：可在 `llmClient` 内部增加缓存、日志、监控等功能，而无需修改调用方。

### Prompt 模块化

> 简述：随着 Prompt 复杂度增加，如果直接嵌入在代码中，会导致代码难以维护与复用。更好的方式是将 Prompt 抽取到独立文件中，并通过占位符机制在运行时动态替换内容。这样可以保持代码简洁，同时使 Prompt 更易于迭代和版本管理。

**知识树**

1. 为什么要抽取 Prompt

    - 代码与 Prompt 混杂，降低可读性与可维护性。
    - 难以在多个地方复用或替换。
    - Prompt 作为业务逻辑的一部分，未来可能需要频繁调整。

2. 模块化方案

    1. 在项目中新建 `prompts/` 目录，专门存放 Prompt 文件。
    2. 使用占位符（如 `{{reviews}}`）在模板中标记可替换部分。
    3. 在代码中导入模板并动态替换占位符，生成最终 Prompt。

3. 好处

    - 关注点分离：业务逻辑和 Prompt 模板分离。
    - 便于维护：Prompt 文件可单独编辑、调试、版本控制。
    - 扩展性强：支持多 Prompt 管理（如 chatbot、summarizer、分类器）。
    - 一致性：通过占位符规范，避免硬编码。

### 保存摘要

> 简述：目前，每次调用 API 都会重新生成摘要。这既慢又昂贵，因为每次调用都消耗 Token 并产生费用。改进方案是将摘要存储到数据库中，下次请求时直接返回缓存结果。

**知识树**

1. 实现步骤

    1. 扩展 Repository
        - 在 `reviewRepository` 中新增 `storeReviewSummary` 方法。
        - 使用 `prisma.summary.upsert`：如果记录不存在则插入，存在则更新。
    2. 数据准备
        - 生成 `now`（当前时间）和 `expiresAt`（过期时间），例如设置为 7 天后。
        - 使用 `dayjs` 库处理日期计算。
            - 在 server 下使用`bun add dayjs`安装
    3. 复用数据对象
        - 创建 `data` 对象，包含 `productId`、`content`、`generatedAt`、`expiresAt`。
        - 同时用于 `create` 和 `update`，避免重复代码。
    4. 在 Service 中调用
        - 调用 LLM 生成摘要后，先存入数据库，再返回给客户端。

2. 验证结果

    - 初次调用时生成并存储摘要。
    - 再次调用时记录被更新，生成时间刷新。
    - 通过 `upsert`，数据库始终保持最新摘要。

### 缓存策略

> 简述：之前的实现中，每次调用 API 都会重新生成摘要，导致浪费算力和成本。改进方案是引入缓存逻辑：只有在数据库中不存在摘要，或摘要已过期时，才触发 LLM 生成；否则直接返回已有内容。这使得响应更快，同时避免不必要的 Token 消耗。

**知识树**

1. 为什么要引入过期检查

    - 避免重复调用 LLM，降低成本。
    - 提高响应速度，改善用户体验。
    - 支持数据更新：过期时自动再生成。

2. 实现思路

    1. 新增查询方法
        - 在 `reviewRepository` 中实现 `getReviewSummary`，根据 `productId` 查找已有摘要。
    2. 服务层逻辑
        - 先检查数据库是否已有摘要。
        - 如果存在且未过期，直接返回缓存内容。
        - 否则调用 LLM 生成新摘要，并更新数据库。

3. 验证方式

    - 初次调用时生成并存储摘要。
    - 在过期时间前调用，直接返回数据库缓存，无需调用 LLM。
    - 修改数据库中的 `expiresAt` 为过去时间后，再次调用会触发重新生成。

### 边界检查

> 简述：生成摘要的核心逻辑已经实现，但仅覆盖了“正常路径”。一个健壮的 API 必须考虑异常场景：无效 ID、数据库不存在的产品、或没有评论的产品。通过逐步添加验证和错误处理，我们可以确保服务在各种输入下都能稳定响应，而不会出现崩溃或误导用户的情况。

**知识树**

1. 为什么要覆盖边界场景

    - 避免后端崩溃（非数值 ID 导致服务器错误）。
    - 提供清晰的错误反馈（用户或前端可感知问题）。
    - 防止模型收到空输入后返回“尴尬”响应。

2. 三类主要边界条件

    1. 非数值 ID
        - 用户在 URL 中传入字符串或非法字符。
        - 解决：在控制器中先做 `isNaN` 检查，返回 `400 Bad Request`。
    2. 数值 ID 但产品不存在
        - 数据库中没有对应产品。
        - 解决：新增 `productRepository`，查询是否存在该产品；不存在则返回错误。
    3. 产品存在但没有评论
        - LLM 接收到空评论会返回不自然的提示。
        - 解决：在尝试总结前检查评论数量；若为 0，则返回“没有评论可供总结”的错误。

3. 测试与验证

    - 非数值 ID → 返回 `{ error: "Invalid product ID" }`，状态码 `400`。
    - 不存在的产品 → 返回 `{ error: "Product not found" }`，状态码 `404`。
    - 无评论的产品 → 返回 `{ error: "No reviews to summarize" }`，状态码 `400`。
    - 正常情况 → 返回 `{ summary: "..." }`，摘要缓存或生成逻辑生效。

### 在获取评论接口中集成摘要

> 简述：原本我们通过单独的 API 获取评论摘要，但这要求前端发起多次请求。现在我们优化接口：在获取评论时一并返回摘要。这样既减少了网络开销，也让前端逻辑更简洁。同时，通过将“有效性检查”和“过期判断”下沉到仓储层，我们避免了逻辑重复，保持代码清晰可维护。

**知识树**

1. 为什么要优化接口

    - 减少前端多次请求，提高性能。
    - 提供更简洁的 API 设计（一次返回完整数据）。
    - 避免逻辑分散在不同层级，减少重复代码。

2. 控制器改造

    - 原控制器依赖 `reviewService`，但该服务仅是“传递调用”，没有业务价值。
    - 直接由控制器调用 `reviewRepository`，获取评论与摘要：
        - `getReviews(productId)` → 返回评论列表。
        - `getReviewSummary(productId)` → 返回未过期的摘要或 `null`。
    - 最终响应对象包含 `reviews` 和 `summary` 两个字段。

3. 去除逻辑重复

    - 之前在 服务层 和 控制器 都写过“检查摘要是否过期”的逻辑。
    - 统一下沉到仓储层，在 `getReviewSummary` 方法中处理。
    - 保证全局只在一个地方维护判断逻辑，避免未来维护成本。

4. 测试场景

    - 正常情况：返回 `{ summary: "...", reviews: [...] }`。
    - 摘要过期：`summary = null`，但仍返回评论。
    - 无评论产品：`summary = null, reviews = []`。
    - 无效 ID：返回 `400 Bad Request`。
    - 不存在产品：返回 `404 Not Found`。

## 前端搭建

### 前端集成评论接口

> 简述：这一节的目标是让前端与后端打通，能够通过调用 API 获取指定产品的评论与摘要，并在页面中渲染出来。通过封装组件、定义类型和状态管理，我们让数据请求与渲染逻辑清晰分离，最终得到一个可维护、可扩展的评论展示组件。

**知识树**

1. 组件结构设计

    - 在 `client/src/components` 下新增 `reviews` 目录，用于集中管理评论相关组件。
    - 创建 `ReviewList` 组件作为评论列表的入口，负责：
        - 调用后端 API 获取数据。
        - 管理本地状态。
        - 渲染评论内容。

2. 类型定义

    - 根据 Prisma Schema 和 API 响应，定义前端数据模型：
        - `Review`：评论对象（`id`, `author`, `content`, `rating`, `createdAt`）。
        - `GetReviewsResponse`：接口响应（`summary: string | null`, `reviews: Review[]`）。
    - 明确类型约束，让组件开发更稳健。

3. 状态与副作用

    - 使用 `useState` 存储 `reviewData`（类型为 `GetReviewsResponse`）。
    - 使用 `useEffect` 在组件挂载时触发 API 请求：
        - 调用 `axios.get<GetReviewsResponse>(/api/products/${productId}/reviews)`。
        - 更新 `reviewData`。
    - 注意：必须传递 依赖数组，避免无限循环请求。

4. 渲染逻辑

    - 遍历 `reviewData.reviews` 渲染评论。
    - 使用 `review.id` 作为 `key`。
    - 渲染内容包括：
        - 作者（加粗显示）。
        - 评分（临时以数字展示，后续可替换为星级组件）。
        - 评论内容（段落形式）。

5. 样式与布局

    - 父容器：`flex flex-col gap-5`，保持评论间距整齐。
    - 作者：`font-semibold`。
    - 内容：保持基础排版，后续可增强样式。

### 星级评分组件

> 简述：原本的评论评分是纯数字展示，用户体验较差。本节通过封装一个星级评分组件，将评分渲染为直观的星星图标，并处理不同输入值的情况，使界面更符合现代应用的交互习惯。

**知识树**

1. 技术选型

    - 使用 React Icons 库。
        - 官网：https://react-icons.github.io/react-icons/
    - 引入 Font Awesome 的 实心星（FaStar） 和 空心星（FaRegStar）。
    - 后续可扩展支持半星显示（目前数据库评分为整数，不涉及浮点数）。

2. 组件设计

    - 组件名：`StarRating`。
    - Props：
        - `value: number`，当前评分值。
    - 内部逻辑：
        - 创建固定长度的数组（例如 `[1,2,3,4,5]`）作为占位符。
        - 遍历数组，判断当前值是否小于等于评分：
            - 若是，渲染实心星。
            - 否则，渲染空心星。
    - 样式：
        - 父容器 `flex gap-1`，横向排列星星。
        - 星星颜色统一设置为黄色。

3. 集成到评论列表

    - 在 `ReviewList` 组件中，用 `StarRating` 替换数字评分展示：
        - `value={review.rating}`。
    - 保持其他信息（作者、内容等）不变。

4. 边界测试

    - `value=0` → 全部空心星。
    - `value=1` → 一个实心，其余空心。
    - `value<0` → 防御性逻辑，表现为全部空心。
    - `value>5` → 超过 5 的部分忽略，仅显示 5 个实心星。

5. 收益

    - 更直观的用户体验，数字转为图形化表达。
    - 组件化封装，方便后续复用与扩展。
    - 通过边界测试，确保健壮性。

### 评论加载 Skeleton

> 简述：在等待评论数据加载时，用户看到空白页面会产生不良体验。本节通过 React Loading Skeleton 增加骨架屏，使用户在加载过程中看到结构占位，提升交互感受和产品专业度。

**知识树**

1.  Skeleton 意义

    - 避免“空白等待”，增强用户对加载进度的感知。
    - 模拟最终内容的结构，让界面更流畅。
    - 对比单纯的“Loading…”文字提示，骨架屏更符合现代应用习惯。

2.  技术选型

    - 使用 react-loading-skeleton 库。
        - 在 client 下安装`bun add react-loading-skeleton`
        - 官网：https://www.npmjs.com/package/react-loading-skeleton
        - 需要注意`skeleton.css`直接引入`main.tsx`
    - 需要安装依赖并在入口文件导入其样式。
    - 支持灵活设置宽度、高度和数量，满足不同内容占位需求。

3.  实现步骤

    - 在 `ReviewList` 组件中增加 `isLoading` 状态：
        - 请求发起前 → `setIsLoading(true)`。
        - 请求完成后 → `setIsLoading(false)`。
    - 根据 `isLoading` 渲染：
        - `true` → 渲染骨架屏。
        - `false` → 渲染实际评论数据。

4.  验证与测试

    - 在 Chrome DevTools → Network → Throttling 设置慢速网络。
    - 页面刷新时，应先显示骨架屏，再替换为真实数据。
    - 观察效果：骨架屏与最终渲染的结构一致，用户体验自然。

### 评论加载错误处理

> 简述：目前评论列表只实现了理想路径（Happy Path），假设请求总是成功。但在实际应用中，网络失败或后端错误是常见情况。如果没有错误处理，前端可能一直停留在加载状态，导致用户困惑。通过添加错误状态和提示信息，我们能让应用更健壮、用户体验更可靠。

**知识树**

1. 为什么需要错误处理

    - 网络请求可能失败（超时、404、500 等）。
    - 如果缺少处理逻辑，UI 会卡在加载状态。
    - 清晰的错误提示帮助用户理解问题，而不是困惑。

2. 错误处理模式

    - 使用 `try...catch...finally` 包裹异步请求：
        - try：执行正常请求逻辑。
        - catch：捕获并记录错误，设置错误状态。
        - finally：无论成功失败，都重置 `isLoading`。
    - 日志记录：生产环境推荐使用 Sentry 等监控工具，本课程示例使用 `console.error`。
    - UI 提示：在渲染逻辑中优先检查 `error`，并显示用户可读的错误信息。

3. 实现步骤

    - 增加 `error` 状态，初始为空字符串。
    - 在请求逻辑中：
        - 捕获异常并设置 `error` 提示（如 “无法获取评论，请重试”）。
    - 渲染逻辑中：
        - `isLoading = true` → 显示 Skeleton。
        - `error !== ""` → 显示错误信息。
        - 正常情况 → 渲染评论数据。

### React Query 优化

> 简述：在前端中，直接用 state 与 effect 管理数据请求虽然可行，但存在缺陷：没有自动重试、没有内置缓存，用户每次切换页面都要重新请求数据。React Query（现称 TanStack Query）通过自动重试、缓存和更简洁的 API，极大提升了数据请求的健壮性与开发效率。

**知识树**

1. 传统 useState + useEffect 的问题

    - 无自动重试：请求失败立即显示错误，用户需要手动刷新。
    - 无缓存：页面切换回来必须重新请求，浪费带宽与时间。
    - 手动管理加载与错误状态，代码冗长。

2. React Query

    - client 目录下安装：`bun add @tanstack/react-query`
    - 官网：https://tanstack.com/query/latest/docs/framework/react/installation
    - 优势
        - 自动重试：网络波动时自动尝试请求，减少用户干扰。
        - 内置缓存：数据按 key 缓存，多次访问可直接复用。
        - 简化代码：统一通过 `useQuery` 管理 `data`、`isLoading`、`error`。

3. 集成步骤

    1. 安装依赖：
        ```bash
        bun add @tanstack/react-query
        ```
    2. 在应用入口配置 QueryClient：

        ```tsx
        // client/src/main.tsx
        import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

        const queryClient = new QueryClient();

        root.render(
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        );
        ```

    3. 在组件中使用 `useQuery`：
        - 定义唯一的 `queryKey`，支持动态值（如 productId）。
        - 定义 `queryFn`，只负责返回数据，不再管理 loading/error 状态。
        - 解构 `data`、`isLoading`、`error`，替代手动状态管理。

### 为摘要添加加载 Skeleton

> 简述：在等待摘要生成时，应提供加载反馈以提升用户体验。通过复用 `react-loading-skeleton` 并提取出可重用的组件，我们既能在评论加载时使用 Skeleton，也能在摘要生成时使用，保证界面一致性。同时要处理交互细节：按钮需具有点击提示，并在加载中禁用，避免重复请求。

**知识树**

1. 为什么需要加载 Skeleton

    - 避免“白屏”或空状态带来的不确定感。
    - 提供现代应用常见的骨架屏，改善用户体验。
    - 保持前后端请求期间的界面一致性。

2. 状态管理

    - 定义 `isSummaryLoading` 用于追踪摘要生成过程。
    - 在 API 调用开始时设为 `true`，结束后设为 `false`。
    - 逻辑与状态管理分隔（添加换行），增强代码可读性。

3. 提取可复用 Skeleton 组件

    1. 在 `reviews` 目录下新建 `ReviewSkeleton.tsx`。
    2. 将之前评论列表中的 Skeleton 结构抽取为独立组件。
    3. 在需要的地方（评论加载 / 摘要加载）统一调用。

4. 交互优化

    - 增加 `cursor-pointer` 类，使按钮看起来可点击。
    - 在加载中禁用按钮，避免用户多次点击触发重复请求。
    - 摘要生成后自动替换按钮和 Skeleton，展示最终内容。

5. 实践复盘

    - Skeleton 提升了“等待”时的用户体验。
    - 抽取组件避免重复代码，提升复用性和维护性。
    - 小细节（鼠标样式、禁用按钮）往往决定用户交互的流畅感。

### 为摘要添加错误处理

> 简述：在实现了“快乐路径”后，必须补充错误处理逻辑，确保应用在异常情况下依然表现得可预测、友好。通过 `try...catch...finally` 捕获错误、记录日志，并给用户清晰提示，可以避免应用卡死或表现异常。

**知识树**

1. 为什么需要错误处理

    - 后端调用可能失败（网络错误、API 返回错误等）。
    - 用户需要明确的反馈，而不是“无响应”。
    - 开发者需要日志记录，方便定位问题。

2. 状态管理

    - 定义 `summaryError` 状态变量，存储摘要请求的错误信息。
    - 在每次发起请求时先清空 `summaryError`，避免遗留错误提示。
    - 使用 `isSummaryLoading` 与 `summaryError` 配合，分别管理加载和错误状态。

3. 错误捕获与处理流程

    - 将 `handleSummarize` 函数逻辑包裹在 `try...catch...finally` 中。
    - 在 `catch` 中：
        - 使用 `console.error` 记录错误（生产环境可替换为 Sentry 等日志服务）。
        - 设置用户友好的错误提示，如“无法生成摘要，请重试”。
    - 在 `finally` 中：
        - 确保 `isSummaryLoading` 被重置为 `false`，避免界面卡死在加载状态。

### 用 Mutation Hook 简化摘要逻辑

> 简述：在使用 React Query 的 `query hook` 处理数据获取后，我们同样可以用 `mutation hook` 处理数据创建或更新。它不仅能让代码更简洁，还提供了自动重试、内建错误处理和状态管理。这样，我们不再需要手动维护 loading/error 状态，逻辑更清晰，组件更简洁。

**知识树**

1. 为什么要用 Mutation Hook

    - 替代传统的 `useState + try/catch + isLoading` 状态管理。
    - 内置自动重试，提升健壮性。
    - 自动管理错误状态，减少重复代码。
    - 让函数专注于“调用后端并返回结果”，而非处理事件逻辑。

2. 重构步骤

    1. 移除冗余状态与逻辑
        - 删除 `useState` 定义的 `summary`、`error`、`isLoading`。
        - 移除 `try...catch...finally` 错误处理代码。
    2. 抽取纯函数
        - 将 `handleSummarize` 改名为 `summarizeReviews`，只负责调用后端 API 并返回结果。
    3. 使用 Mutation Hook
        - 调用 `useMutation`，传入 `summarizeReviews` 作为 `mutationFn`。
        - 解构出关键属性：
            - `mutate`（重命名为 `handleSummarize`）
            - `isPending`（重命名为 `isSummaryLoading`）
            - `isError`（重命名为 `isSummaryError`）
            - `data`（重命名为 `summarizeResponse`）
    4. 更新 JSX
        - 点击按钮时调用 `handleSummarize`。
        - 根据 `isSummaryLoading` 渲染 skeleton。
        - 根据 `isSummaryError` 显示错误信息。
        - 从 `summarizeResponse.summary` 渲染摘要。

### 用对象封装替代解构

> 简述：在使用 React Query 时，常见做法是直接解构 hook 返回的对象，例如 `isLoading`、`isError`、`data`。但当我们同时在组件里使用多个 query 和 mutation 时，变量名就会变得冗长、奇怪（如 `isSummaryLoading`、`isSummaryError`）。更简洁的方式是保留返回对象整体，并通过点语法访问属性。这样代码更具语义化，也避免了命名混乱。

**知识树**

1. 问题：解构导致命名混乱

    - `query hook` 和 `mutation hook` 都会返回 `isLoading`、`isError`、`data` 等属性。
    - 当同时存在多个 query/mutation 时，需要人为加前缀，如 `isSummaryLoading`、`isSummaryError`。
    - 命名越来越冗长，破坏了代码的可读性。

2. 改进思路

    - 不解构返回对象，而是给对象整体命名：
        - 如 `summaryMutation` 表示处理摘要的 mutation。
        - 如 `reviewsQuery` 表示获取评论的 query。
    - 在 JSX 和逻辑中使用点语法访问属性：
        - `summaryMutation.isPending`
        - `summaryMutation.error`
        - `reviewsQuery.data`

### 提取 API 层，分离 UI 与数据逻辑

> 简述：组件中混杂了 UI 与数据请求逻辑，既依赖 Axios，又定义了类型与请求函数，职责不清晰。通过提取 API 模块，将所有与后端通信的逻辑集中管理，组件只专注于 UI 渲染。这种重构遵循单一职责原则，使代码更整洁、更易维护。

**知识树**

1. 为什么要提取 API 层

    - 组件不应关心 HTTP 细节，避免与 Axios 或 fetch 强耦合。
    - 集中管理请求逻辑，便于复用和测试。
    - 遵循单一职责原则：组件只负责 UI，API 模块只负责数据请求。

2. 目录与文件设计

    - 如果逻辑仅供某一组件使用，可以放在该组件的目录下，例如 `reviews/reviewsAPI.ts`。
    - 如果逻辑会被多个模块复用，应放在全局 `api/` 或 `services/` 目录。

3. API 模块实现

    - 使用对象组织相关函数，例如 `reviewsAPI`。
    - 在模块中定义并导出类型（Review、GetReviewsResponse、SummarizeResponse），避免组件中散落定义。
    - 提供清晰的方法：`fetchReviews` 与 `summarizeReviews`。

# S6：使用开源模型

## 为什么要使用开源大模型

> 简述：与商业托管模型（如 OpenAI、Anthropic）相比，开源大模型在成本、隐私、灵活性、离线可用性和透明性等方面具备独特优势，尤其适合需要控制预算、保护数据或在特殊环境中运行的场景。

**知识树**

1. 成本优势

    - 商业模型：按 token 计费，调用量大时成本迅速增加。
    - 开源模型：一次性硬件投入后，本地运行几乎零边际成本；可部署在自有服务器，灵活控制支出。

2. 隐私与数据安全

    - 商业模型：请求需经过第三方服务器，数据可能存在泄露风险。
    - 开源模型：完全本地运行，敏感数据不会离开环境，适合医疗、金融、政府等高安全领域。

3. 灵活性与选择自由

    - 商业模型：受限于单一厂商的 API 和产品路线。
    - 开源模型：可从成百上千个模型中选择，包括专为特定任务优化的小模型（Small Language Models, SLMs），在某些任务上甚至优于通用大模型。

4. 离线可用性

    - 商业模型：必须依赖稳定的网络连接。
    - 开源模型：可在离线环境下运行，适合边缘设备、现场作业或弱网场景。

5. 透明性与可审计性

    - 商业模型：内部机制与训练数据通常不公开。
    - 开源模型：部分代码与训练数据透明开放，有助于分析模型偏差与可解释性。

6. 总结

    - 使用开源模型的动机主要是：节省成本、保障隐私、增加灵活性、支持离线运行、增强透明性。
    - 在实际项目中，应根据业务需求权衡：对性能和稳定性要求极高的场景可用商业模型，对安全、成本或可控性敏感的场景则更适合开源方案。

## Hugging Face

> 简述：Hugging Face 是开源模型的核心平台，类似于 GitHub 之于代码。开发者和研究者可以在此发布和探索模型与数据集，并直接在浏览器中试用模型或通过 API 集成到应用中。

**知识树**

1. Hugging Face 平台概览

    - 网址：huggingface.co
    - 模块：Models、Datasets、Spaces
    - 角色：模型与数据集的集中仓库，类似机器学习领域的 GitHub。

2. 模型查找方式

    - 直接搜索：如输入 “Mistral”。
    - 使用过滤器：
        - 任务类别：文本生成、图像到文本、图像到图像等。
        - 模态分类：
            - 多模态（text + image 等）
            - 计算机视觉（图像、视频）
            - 自然语言处理（NLP：分类、翻译、摘要等）
    - 示例：选择 “Summarization” 即可列出可用的文本摘要模型。

3. 模型选择与信息卡片（Model Card）

    - 排序方式：下载量、点赞数、趋势等。
    - 模型详情：
        - 发布者（如 Facebook）
        - 参数规模（模型大小，相当于“大脑”容量）
        - 最近更新日期
        - 下载量与社区反馈
    - 模型卡片包含：用途、架构、训练方式、文件结构、提交历史。

4. 在线试用与代码示例

    - 在线 Playground：在浏览器中输入文本，模型实时返回结果。
    - 代码示例：支持 Python、JavaScript、Curl。
        - Curl：直接调用 HTTP 接口，需附带授权 Token。
        - JavaScript：
            1. 使用 `fetch` 或 `axios` 调用 REST API。
            2. 使用 `huggingface.js` 库，抽象了底层 HTTP 通信，提供更高层的封装。

5. 隐私与安全提示

    - 在线调用 Hugging Face API 时，请求和响应会经过网络传输。
    - 若业务场景涉及隐私或敏感数据，应避免这种方式。
    - 更安全的替代方案是下载模型，在本地或私有服务器上运行（后续课程将讲解）。

## 调用 Hugging Face 模型

> 简述：调用 Hugging Face 模型需要先配置访问令牌（Access Token），再通过 Hugging Face Inference API 或客户端库调用模型。本课示范了如何使用 `huggingface/inference` 库在项目中调用文本摘要模型，并将结果集成到现有服务中。同时强调了令牌管理、安全性、免费版与生产级服务的差异。

**知识树**

1. 访问令牌配置

    - 获取方式：

        - 登录 Hugging Face → Profile → Settings → Access Tokens。
        - 建议为不同环境（开发、测试、生产）分别创建令牌，避免风险。

    - 最佳实践：
        - 使用有描述性的命名，如 `office-mac`。
        - 权限选择：通常仅需 `read` 权限。
    - 项目集成：
        - 在 `.env` 文件中保存令牌，例如：
            ```env
            HF_TOKEN=your_token_here
            ```

2. Hugging Face Inference API

    - 提供托管推理服务，免费版有速率限制和性能不足，不适合生产环境。
    - 生产环境需使用 Dedicated Endpoint（专用推理端点），需额外付费。
    - 入口：Hugging Face 官网 → Pricing → Inference Endpoints。

3. 项目集成步骤

    1. server 目录下安装依赖：
        ```bash
        bun add @huggingface/inference
        ```
    2. 在 LLM 客户端中引入 Hugging Face 支持：
        - 保留 `OpenAIClient`，同时新增 `InferenceClient`，避免破坏现有代码。

4. 服务层调用与集成

    - 在 `reviewService.summarizeReviews` 中替换调用逻辑：
        - 原本使用 `llmClient.generateText`。
        - 改为调用 `summarize` 方法，将拼接后的评论传入。
    - 返回的 `summary_text` 直接存入数据库，无需额外解构。

5. 模型适配性问题

    - 示例模型：`facebook/bart-large-cnn`。
        - 训练语料：CNN Daily Mail 新闻数据。
        - 特点：擅长新闻类文章摘要，但不适合产品评论总结。
    - 现象：生成的结果更像单条评论，而非评论摘要。
    - 结论：必须根据任务场景选择合适的模型。

## 选择合适的开源模型

> 简述：新闻摘要模型（如 BART CNN）不适合总结用户评论，因为训练数据不匹配。我们需要选择更合适的模型：要么使用专门针对评论微调的模型，要么使用通用型大语言模型（如 LLaMA 系列）。在实现中，可以通过 Hugging Face 的 Chat Completion API 集成 LLaMA，并将提示词与调用逻辑集中在 LLM 模块中，以保持职责清晰和代码整洁。

**知识树**

1. 为什么 BART 不适合产品评论

    - 训练数据：CNN Daily Mail 新闻语料。
    - 适合任务：新闻类文章摘要。
    - 不适合任务：产品评论总结，因为模型无法提炼情感主题，只会像是「复述一条评论」。

2. 替代方案

    - 方案一：使用针对产品评论微调的模型。
        - 优点：更契合业务场景。
        - 限制：可能未托管在 Hugging Face，需本地部署或付费专用端点。
    - 方案二：使用通用大模型（如 LLaMA）。
        - 优点：泛化能力强，支持指令和对话。
        - 缺点：可能比专门模型更耗费算力。

3. 集成 LLaMA 的步骤

    1. 在 Hugging Face 上查找 `LLaMA` 模型，获取 Chat Completion 调用示例。
    2. 在 LLM 客户端中新增 `summarizeReviews` 方法：
        - 调用 `inferenceClient.chatCompletion`。
        - 参数包含 `provider`、`model` 和消息数组。
    3. 组织消息格式：
        - system 消息：加载本地 `prompts/summarize-reviews.txt` 模板，作为指令。
        - user 消息：传入待总结的评论文本。

4. 工程化优化

    - 将 `prompts` 目录迁移到 `llm/prompts` 下，与调用逻辑集中管理。
    - 避免在 service 层手动拼接提示词，保持职责单一：
        - LLM 模块：负责调用模型与提示管理。
        - Service 层：负责业务逻辑与数据库交互。

5. 测试结果

    - 调用 LLaMA 后，生成的摘要能准确提炼评论主题，如「整体评价积极，突出产品的舒适性和降噪效果」。
    - 修复导入路径错误（`chatbot.txt`、`summarize-reviews.txt`），确保模块结构一致。

## Ollama 本地运行开源模型

> 简述：调用 Hugging Face API 虽然方便，但请求和响应都需要走网络，不适合对隐私要求极高的场景。Ollama 提供了一种本地化方案，它就像 LLM 领域的 Docker，能够在本地快速拉取、运行和管理模型，实现完全离线、私有化的推理环境。

**知识树**

1. 为什么要本地运行模型

    - 网络调用缺点：提示词和响应会经过外部服务器，存在隐私风险。
    - 本地运行优势：无需依赖网络，保证数据安全，适合金融、医疗等场景。

2. Ollama 简介

    - 跨平台工具（Windows / macOS / Linux）。
    - 类似 Docker 的理念：提供统一的命令行工具，用于拉取、运行和管理模型。
    - 自带模型仓库（registry），也支持运行 Hugging Face 的模型。

3. 安装与验证

    - 下载地址：[ollama.com](https://ollama.com)。
    - 安装后，在终端运行以下命令验证：

    ```bash
    # 确认安装成功
    ollama
    ```

    - 常用命令：
        - `ollama pull <model>` 拉取模型。
        - `ollama run <model>` 运行模型并进入交互 shell。
        - `ollama list` 列出已安装模型。
        - `ollama ps` 查看正在运行的模型及资源占用。
        - `ollama rm <model>` 删除模型以释放空间。

4. 运行 LLaMA 示例

    ```bash
    # 拉取并运行 LLaMA 模型
    ollama run llama2
    ```

    - 首次运行会自动从 Ollama registry 拉取模型，耗时取决于网络速度。
    - 运行后进入交互式 shell，可以直接输入问题：

    ```text
    > What is the capital of France?
    The capital of France is Paris.
    ```

    - 也可用于文本摘要、问答等任务。

5. 模型管理与资源占用

    - `ollama list` 显示已下载的模型（含 ID、大小、修改时间）。
    - `ollama ps` 显示正在运行的模型及内存/CPU 占用。
    - 模型体积通常较大，若不再使用，需运行 `ollama rm <model>` 释放存储空间。

6. 下一步

    - Ollama 不仅能运行自带的模型，还能运行 Hugging Face 上的模型。
    - 这意味着开发者可以结合 Hugging Face 的丰富模型生态和 Ollama 的本地化执行能力，打造灵活又安全的 AI 应用。

## 使用 Ollama 本地运行 Hugging Face 模型

> 简述：Ollama 不仅能运行自带模型，还能运行 Hugging Face 提供的模型。但前提是模型需支持 **GGUF 格式**。通过 Hugging Face 与 Ollama 的结合，可以实现本地化推理，兼顾 Hugging Face 模型生态与 Ollama 的离线、隐私优势。

**知识树**

1. 在 Hugging Face 上查找使用模型

    - 打开 [HuggingFace.co](https://huggingface.co)。
    - 进入 **Models** 页面，左侧过滤条件选择 **GGUF format**。
    - 搜索目标模型（如 LLaMA），并按下载量排序，找到合适版本。
    - 进入模型，右侧使用模型，选择使用 ollama，获取运行命令

2. 验证与资源占用

    - 进入交互式 shell 后，可以直接提问：

    ```text
    > What is the capital of France?
    The capital of France is Paris.
    ```

    - 新建终端查看已安装模型：

    ```bash
    ollama list
    ```

    - 查看运行中的模型及内存占用：

    ```bash
    ollama ps
    ```

    - 说明：
        - Ollama 官方提供的版本较少，Hugging Face 中提供的版本更多

3. 模型清理

    - 不再需要时，删除模型以释放空间：

    ```bash
    ollama rm bartowski/llama-2-7b-chat.gguf
    ```

## 使用 Ollama JavaScript 客户端调用本地模型

> 简述：Ollama 在本地运行时会启动一个 Web 服务，我们可以通过 HTTP 请求与模型交互。但直接发请求过于繁琐，因此官方提供了 JavaScript 客户端库，用于简化调用。本节展示如何使用 **Ollama JavaScript Client** 在应用中集成本地模型，并生成产品评论摘要。

**知识树**

1. 模型准备

    - 前往 [Ollama.com](https://ollama.com)，搜索并下载 **TinyLLaMA**（轻量化版本，适合开发环境）。
    - 在终端运行下载命令，启动模型：
        ```bash
        ollama run tinylama
        ```
    - 确认运行状态：
        ```bash
        ollama ps
        ```

2. 安装 JavaScript 客户端

    - 在项目中安装官方客户端库：
        ```bash
        bun add ollama
        ```
    - 优点：该库封装了 HTTP 通信，简化了与模型的交互。

3. 集成 Ollama 客户端

	- server目录下添加ollama，`bun add ollama`