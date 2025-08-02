# 创建AI前端提示任务

## 目的

生成一个精通、全面和优化的提示，可用于任何AI驱动的前端开发工具（例如，Vercel v0、Lovable.ai或类似工具）来搭建或生成前端应用程序的重要部分。

## 输入

- 完成的UI/UX规格`front-end-spec.md`
- 完成的前端架构文档`front-end-architecture` 或完整堆栈组合架构如 `architecture.md`
- 主系统架构文档`architecture` - 用于API合同和技术栈以提供进一步上下文

## Key Activities &关键活动和指令

### 1.核心提示原则

在生成提示之前，您必须理解与生成AI代码交互的这些核心原则。

- **明确和详细**: AI无法读懂您的想法。提供尽可能多的细节和上下文。模糊的请求会导致通用或不正确的输出。
- **Iterate, Don'迭代，不要期望完美**: 一次性生成整个复杂应用程序是罕见的。最有效的方法是每次提示一个组件或一个章节，然后基于结果构建。
- **首先提供上下文**: 始终通过向AI提供必要的上下文开始，如技术栈、现有代码片段和整体项目目标。
- **移动优先方法**: 用移动优先设计思维框架所有UI生成请求。首先描述移动布局，然后提供关于如何适应平板和桌面的单独指令。

### 2.结构化提示框架

为了确保最高质量的输出，您必须使用以下四部分框架构建每个提示。

1. **高级目标**: 从整体目标的清晰、简洁摘要开始。这使AI专注于主要任务。
    - _示例: "Create a responsive user registration form with client-side validation and API integration."_
2. **Detailed,详细、逐步指令**: 提供AI应该采取的详细、编号操作列表。将复杂任务分解为更小、顺序的步骤。这是提示中最关键的部分。
    - _示例: "1. Create a new file named `RegistrationForm.js`. 2. Use React hooks for state management. 3. Add styled input fields for 'Name', 'Email', and 'Password'. 4. For the email field, ensure it is a valid email format. 5. On submission, call the API endpoint defined below."_
3. **Code Examples, Data Structures &代码示例、数据结构和约束**: 包括任何相关的现有代码片段、数据结构或API合同。这为AI提供了具体的工作示例。关键的是，您还必须说明不要做什么。
    - _示例: "Use this API endpoint: `POST /api/register`. The expected JSON payload is `{ "name": "string", "email": "string", "password": "string" }`. Do NOT include a 'confirm password' field. Use Tailwind CSS for all styling."_
4. **定义严格范围**: 明确定义任务的边界。告诉AI它可以修改哪些文件，更重要的是，哪些文件要保持不变以防止在代码库中意外更改。
    - _示例: "You should only create the `RegistrationForm.js` component and add it to the `pages/register.js` file. Do NOT alter the `Navbar.js` component or any other existing page or component."_

### 3.组装主提示

您现在将综合输入和上述原则到最终、全面的提示中。

1. **收集基础上下文**:
    - 以描述整体项目目的、完整技术栈（例如，Next.js、TypeScript、Tailwind CSS）和正在使用的主要UI组件库的前言开始提示。
2. **描述视觉效果**:
    - 如果用户有设计文件（Figma等），指示他们提供链接或截图。
    - 如果没有，描述视觉风格：调色板、排版、间距和整体美学（例如，"极简主义"、"企业"、"有趣"）。
3. **使用结构化框架构建提示**:
    - 遵循第2节的四部分框架来构建核心请求，无论是单个组件还是完整页面。
4. **呈现和改进**:
    - 以清晰、可复制粘贴的格式输出完整、生成的提示（例如，大代码块）。
    - 解释提示的结构以及为什么包含某些信息，参考上述原则。
    - <important_note>最后提醒用户，所有AI生成的代码都需要仔细的人工审查、测试和改进才能被认为是生产就绪的。</important_note>
