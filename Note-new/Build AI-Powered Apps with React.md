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
