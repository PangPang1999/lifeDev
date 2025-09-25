# 提示词工程

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
