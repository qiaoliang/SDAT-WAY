# SDAT 知识库

## 概述Breakthrough Method of Agile AI-driven Development is a framework that combines AI agents with Agile development methodologies. The V2 system introduces a modular architecture with improved dependency management, bundle optimization, and support for both web and IDE environments.SDAT-Method（敏捷 AI 驱动开发的突破性方法是一个将 AI agent 与敏捷开发方法相结合的框架。V2 系统引入了模块化架构，改进了依赖管理、包优化，并支持 Web 和 IDE 环境。）

### 主要功能

- **Modular Agent System**:**模块化 Agent 系统**：为每个敏捷角色配备专门的 AI agent
- **Build System**:**构建系统**：自动依赖解析和优化
- **Dual Environment Support**:**双环境支持**：针对 Web UI 和 IDE 进行了优化
- **Reusable Resources**: Portable templates, tasks,**可重用资源**：可移植的模板、task 和清单
- **Slash Command Integration**:**斜杠命令集成**：快速切换和控制 agent

### 何时使用 SDAT

- **Greenfield**:**新项目Greenfield**：完整的端到端开发
- **Brownfield**:**现有项目Brownfield**：功能添加和增强
- **Team Collaboration**:**团队协作**：多个角色协同工作
- **Quality Assurance**:**质量保证**：结构化测试和验证
- **Documentation**: Professional PRDs, architecture docs,**文档**：专业的 PRD、架构文档、用户 story

## SDAT 如何工作

### 核心方法

SDAT transforms you into a "Vibe CEO" - directing a team of specialized AI agents through structured workflows. Here's how:SDAT 将您转变为“氛围 CEO”——通过结构化的工作流程指导一支专业的 AI agent 团队。方法如下：

1. **You Direct, AI Executes**: You provide vision and decisions;**您指导，AI 执行**：您提供愿景和决策；agent 处理实施细节
2. **Specialized Agents**:PM, Developer, Architect, etc.**专业 Agent**：每个 agent 精通一个角色（pm、dev、architect 等）
3. **Structured Workflows**:**结构化工作流**：经过验证的模式指导您从想法到部署代码
4. **Clean Handoffs**:**清晰的交接**：全新的上下文窗口确保 agent 保持专注和高效

### 两阶段方法

#### Phase 1:Web UI - Cost Effective阶段 1：规划Web UI - 经济高效Gemini's 1M tokens使用大的上下文窗口（Gemini 的 1M token）PRD, Architecture生成综合文档PRD, 架构利用多个 agent 进行头脑风暴

- Create once,一次创建，贯穿整个开发过程

#### Phase 2:IDE - Implementation阶段 2：开发IDE - 实施将文档分片成易于管理的部分

- Execute focused SM →执行专注的 sm → dev 周期
- One story at a time,一次一个 story，顺序进行实时文件操作和测试

### 开发循环

```text
1.New Chat → Creates next story from sharded docs
2. You → Review and approve story
3.New Chat → Implements approved story
4.New Chat → Reviews and refactors code
5. You → Verify completion
6. Repeat until epic complete
```

### 为什么这样有效

- **Context Optimization**: Clean chats =**上下文优化**：干净的聊天 = 更好的 AI 性能
- **Role Clarity**: Agents don't context-switch =**角色清晰**：Agent 不进行上下文切换 = 更高的质量
- **Incremental Progress**: Small stories =**增量进展**：小的 story = 可管理的复杂性
- **Human Oversight**: You validate each step =**人工监督**：您验证每一步 = 质量控制
- **Document-Driven**: Specs guide everything =**文档驱动**：规范指导一切 = 一致性

## 入门

### 快速入门选项

#### Option 1:选项 1：Web UI

**Best for**: ChatGPT, Claude,**最适合**：希望立即开始的 ChatGPT、Claude、Gemini 用户

1. Navigate to `dist/teams/`导航到 `dist/teams/`
2. Copy `team-fullstack.txt`复制 `team-fullstack.txt` 内容 3.创建新的 Gemini Gem 或 CustomGPT
3. Upload file with instructions: "Your critical operating instructions are attached, do not break character as directed"上传文件并附上说明：“您的关键操作说明已附上，请勿按指示破坏角色”
4. Type `/help`输入 `/help` 查看可用命令

#### Option 2:选项 2：IDE 集成

**Best for**: Cursor, Claude Code, Windsurf, Trae, Cline, Roo Code,**最适合**：Cursor、Claude Code、Windsurf、Trae、Cline、Roo Code、Github Copilot 用户

```bash
# recommended
npx sdat-method install
```

**Installation Steps**:**安装步骤**：

- Choose "Complete installation"选择“完整安装”
- Select your IDE from supported options:从支持的选项中选择您的 IDE：
    - **Cursor**:**Cursor**：原生 AI 集成
    - **Claude Code**: Anthropic'**Claude Code**：Anthropic 的官方 IDE
    - **Windsurf**:**Windsurf**：内置 AI 功能
    - **Trae**:**Trae**：内置 AI 功能
    - **Cline**:**Cline**：具有 AI 功能的 VS Code 扩展
    - **Roo Code**:**Roo Code**：支持 agent 的基于 Web 的 IDE
    - **GitHub Copilot**:**GitHub Copilot**：具有 AI 同行编程助手的 VS Code 扩展

**Note for VS Code Users**: SDAT-Method assumes when you mention "VS Code" that you're using it with an AI-powered extension like GitHub Copilot, Cline, or Roo. Standard VS Code without AI capabilities cannot run SDAT agents. The installer includes built-in support for Cline and Roo.**VS Code 用户注意事项**：SDAT-Method 假定当您提到“VS Code”时，您正在使用它与像 GitHub Copilot、Cline 或 Roo 这样的 AI 驱动的扩展。没有 AI 功能的标准 VS Code 无法运行 SDAT agent。安装程序包含对 Cline 和 Roo 的内置支持。

**Verify Installation**:**验证安装**：

- `.sdat-core/``.sdat-core/` 文件夹已创建，包含所有 agent已创建特定于 IDE 的集成文件
- All agent commands/rules/所有 agent 命令/规则/模式均可用

**Remember**: At its core, SDAT-Method is about mastering and harnessing prompt engineering.**请记住**：SDAT-Method 的核心是掌握和利用提示工程。任何支持 AI agent 的 IDE 都可以使用 SDAT - 该框架提供了使 AI 开发有效的结构化提示和工作流

### 环境选择指南

**Use Web UI for**:**使用 Web UI 用于**：PRD, architecture初始规划和文档（PRD、架构）especially with Gemini经济高效的文档创建（尤其是在使用 Gemini 时）头脑风暴和分析阶段多 agent 咨询和规划

**Use IDE for**:**使用 IDE 用于**：积极的开发和编码文件操作和项目集成文档分片和 story 管理SM/Dev cycles实施工作流（sm/dev 周期）

**Cost-Saving Tip**:PRDs, architecture in web UI, then copy to `docs/prd.md` and `docs/architecture.md` in your project before switching to IDE for development.**省钱技巧**：在 Web UI 中创建大型文档（PRD、架构，然后在切换到 IDE 进行开发之前将其复制到项目中的 `docs/prd.md` 和 `docs/architecture.md`。）

### 仅 IDE 工作流的注意事项

**Can you do everything in IDE?** Yes, but understand the tradeoffs:**您可以在 IDE 中完成所有事情吗？** 是的，但要了解其中的权衡：

**Pros of IDE-Only**:**仅 IDE 的优点**：单一环境工作流从一开始就直接进行文件操作

- No copy/无需在环境之间复制/粘贴即时项目集成

**Cons of IDE-Only**:**仅 IDE 的缺点**：创建大型文档的 token 成本更高varies by IDE/model较小的上下文窗口（因 IDE/模型而异）在规划阶段可能会达到限制头脑风暴的成本效益较低

**Using Web Agents in IDE**:**在 IDE 中使用 Web Agent**：

- **NOT RECOMMENDED**:PM, Architect**不推荐**：Web agent（pm、architect具有为大型上下文设计的丰富依赖项）
- **Why it matters**:**为什么重要**：dev agent 保持精简以最大化编码上下文
- **The principle**: "Dev agents code, planning agents plan"**原则**：“dev agent 编码，规划 agent 规划”——混合会破坏这种优化

**About sdat-master and sdat-orchestrator**:**关于 sdat-master 和 sdat-orchestrator**：

- **sdat-master**: CAN do any task without switching agents, BUT...**sdat-master**：可以执行任何 task 而无需切换 agent，但是……
- **Still use specialized agents for planning**: PM, Architect,**仍然使用专门的 agent 进行规划**：pm、architect 和 ux-expert 具有经过调整的角色，可以产生更好的结果
- **Why specialization matters**: Each agent'**为什么专业化很重要**：每个 agent 的个性和专注点都能创造出更高质量的产出
- **If using sdat-master/orchestrator**: Fine for planning phases, but...**如果使用 sdat-master/orchestrator**：对于规划阶段来说没问题，但是……

**CRITICAL RULE for Development**:**开发的关键规则**：

- **ALWAYS use SM agent for story creation\*\***始终使用 sm agent 创建 story\*\* - 切勿使用 sdat-master 或 sdat-orchestrator
- **ALWAYS use Dev agent for implementation\*\***始终使用 dev agent 进行实施\*\* - 切勿使用 sdat-master 或 sdat-orchestrator
- **Why this matters**:**为什么重要**：sm 和 dev agent 专门针对开发工作流进行了优化
- **No exceptions**: Even if using sdat-master for everything else, switch to SM →**没有例外**：即使将 sdat-master 用于其他所有事情，也要切换到 sm → dev 进行实施

**Best Practice for IDE-Only**:**仅 IDE 的最佳实践**：

1. Use PM/Architect/better than sdat-master使用 pm/architect/ux agent 进行规划（比 sdat-master 更好）2.直接在项目中创建文档 3.创建后立即分片
2. **MUST switch to SM agent\*\***必须切换到 sm agent\*\* 进行 story 创建
3. **MUST switch to Dev agent\*\***必须切换到 dev agent\*\* 进行实施 6.将规划和编码保留在单独的聊天会话中

## core-config.yaml核心配置core-config.yaml

**New in V2**: The `sdat-core/core-config.yaml` file is a critical innovation that enables SDAT to work seamlessly with any project structure, providing maximum flexibility and backwards compatibility.**V2 新增**：`sdat-core/core-config.yaml` 文件是一项关键创新，使 SDAT 能够与任何项目结构无缝协作，提供最大的灵活性和向后兼容性。

### What is core-config.yaml?什么是 core-config.yaml？

This configuration file acts as a map for SDAT agents, telling them exactly where to find your project documents and how they're structured. It enables:此配置文件充当 SDAT agent 的地图，准确告知它们在哪里可以找到您的项目文档以及它们的结构。它支持：

- **Version Flexibility**: Work with V1, V2,**版本灵活性**：使用 V1、V2 或自定义文档结构
- **Custom Locations**:**自定义位置**：定义您的文档和分片的位置
- **Developer Context**:**开发者上下文**：指定 dev agent 应始终加载哪些文件
- **Debug Support**:**调试支持**：内置日志记录以进行故障排除

### 关键配置领域

#### PRD 配置

- **prdVersion**: Tells agents if PRD follows V1 or V2**prdVersion**：告知 agent PRD 是否遵循 V1 或 V2 约定
- **prdSharded**:falsetrue**prdSharded**：epic 是嵌入式（false还是在单独的文件中（true））
- **prdShardedLocation**:**prdShardedLocation**：在哪里可以找到分片的 epic 文件
- **epicFilePattern**:e.g., `epic-{n}*.md`**epicFilePattern**：epic 文件名的模式（例如 `epic-{n}*.md`）

#### 架构配置

- **architectureVersion**: V1monolithic or V2sharded**architectureVersion**：V1（单体或 V2（分片））
- **architectureSharded**:**architectureSharded**：架构是否拆分为组件
- **architectureShardedLocation**:**architectureShardedLocation**：分片架构文件的存放位置

#### 开发者文件

- **devLoadAlwaysFiles**:**devLoadAlwaysFiles**：dev agent 为每个 task 加载的文件列表
- **devDebugLog**:**devDebugLog**：dev agent 记录重复失败的位置
- **agentCoreDump**:**agentCoreDump**：聊天对话的导出位置

### 为什么重要

1. **No Forced Migrations**:**无强制迁移**：保留您现有的文档结构
2. **Gradual Adoption**: Start with V1 and migrate to V2**逐步采用**：从 V1 开始，按照自己的节奏迁移到 V2
3. **Custom Workflows**: Configure SDAT to match your team'**自定义工作流**：配置 SDAT 以匹配您团队的流程
4. **Intelligent Agents**:**智能 Agent**：Agent 自动适应您的配置

### 通用配置

**Legacy V1 Project**:**旧版 V1 项目**：

```yaml
prdVersion: V1
prdSharded: false
architectureVersion: V1
architectureSharded: false
```

**V2 Optimized Project**:**V2 优化项目**：

```yaml
prdVersion: V2
prdSharded: true
prdShardedLocation: docs/prd
architectureVersion: V2
architectureSharded: true
architectureShardedLocation: docs/architecture
```

## 核心理念

### Vibe CEO'氛围 CEO

You are the "Vibe CEO" - thinking like a CEO with unlimited resources and a singular vision. Your AI agents are your high-powered team, and your role is to:您是“氛围 CEO”——像拥有无限资源和独特愿景的 CEO 一样思考。您的 AI agent 是您的高能团队，您的角色是：

- **Direct**:**指导**：提供明确的指示和目标
- **Refine**:**优化**：迭代输出以达到质量要求
- **Oversee**:**监督**：在所有 agent 之间保持战略一致性

### 核心原则

1. **MAXIMIZE_AI_LEVERAGE**: Push the AI to deliver more. Challenge outputs and iterate.**最大化 AI 杠杆**：推动 AI 交付更多。挑战输出并进行迭代。
2. **QUALITY_CONTROL**: You are the ultimate arbiter of quality. Review all outputs.**质量控制**：您是质量的最终仲裁者。审查所有输出。
3. **STRATEGIC_OVERSIGHT**: Maintain the high-level vision and ensure alignment.**战略监督**：保持高层愿景并确保一致性。
4. **ITERATIVE_REFINEMENT**: Expect to revisit steps. This is not a linear process.**迭代优化**：预计会重新审视步骤。这不是一个线性过程。
5. **CLEAR_INSTRUCTIONS**: Precise requests lead to better outputs.**清晰的指令**：精确的请求会带来更好的输出。
6. **DOCUMENTATION_IS_KEY**:briefs, PRDs lead to good outputs.**文档是关键**：好的输入（简报、PRD会带来好的输出。）
7. **START_SMALL_SCALE_FAST**: Test concepts, then expand.**从小处着手，快速扩展**：测试概念，然后扩展。
8. **EMBRACE_THE_CHAOS**: Adapt and overcome challenges.**拥抱混乱**：适应并克服挑战。

### 关键工作流原则

1. **Agent Specialization**:**Agent 专业化**：每个 agent 都有特定的专业知识和职责
2. **Clean Handoffs**:**清晰的交接**：在 agent 之间切换时始终重新开始
3. **Status Tracking**:Draft → Approved → InProgress → Done**状态跟踪**：维护 story 状态（草稿 → 已批准 → 进行中 → 已完成）
4. **Iterative Development**:**迭代开发**：在开始下一个 story 之前完成一个 story
5. **Documentation First**:**文档优先**：始终从可靠的 PRD 和架构开始

## Agent 系统

### 核心开发团队

| Agent       | Role               | Primary Functions                       | When to Use                            |
| ----------- | ------------------ | --------------------------------------- | -------------------------------------- |
| `analyst`   | Business Analyst   | Market research, requirements gathering | Project planning, competitive analysis |
| `pm`        | Product Manager    | PRD creation, feature prioritization    | Strategic planning, roadmaps           |
| `architect` | Solution Architect | System design, technical architecture   | Complex systems, scalability planning  |
| `dev`       | Developer          | Code implementation, debugging          | All development tasks                  |
| `qa`        | QA Specialist      | Test planning, quality assurance        | Testing strategies, bug validation     |
| `ux-expert` | UX Designer        | UI/UX design, prototypes                | User experience, interface design      |
| `po`        | Product Owner      | Backlog management, story validation    | Story refinement, acceptance criteria  |
| `sm`        | Scrum Master       | Sprint planning, story creation         | Project management, workflow           |

### 元 Agent

| Agent               | Role             | Primary Functions                     | When to Use                       |
| ------------------- | ---------------- | ------------------------------------- | --------------------------------- |
| `sdat-orchestrator` | Team Coordinator | Multi-agent workflows, role switching | Complex multi-role tasks          |
| `sdat-master`       | Universal Expert | All capabilities without switching    | Single-session comprehensive work |

### Agent 交互命令

#### IDE 特定语法

**Agent Loading by IDE**:**通过 IDE 加载 Agent**：

- **Claude Code**: `/agent-name`e.g., `/sdat-master`
- **Cursor**: `@agent-name`e.g., `@sdat-master`
- **Windsurf**: `@agent-name`e.g., `@sdat-master`
- **Trae**: `@agent-name`e.g., `@sdat-master`
- **Roo Code**:e.g., `sdat-master`
- **GitHub Copilot**:`⌃⌘I` on Mac, `Ctrl+Alt+I` on Windows/Linux and select **Agent** from the chat mode selector.

**Chat Management Guidelines**:**聊天管理指南**：

- **Claude Code, Cursor, Windsurf, Trae**:**Claude Code、Cursor、Windsurf、Trae**：切换 agent 时开始新的聊天
- **Roo Code**:**Roo Code**：在同一次对话中切换模式

**Common Task Commands**:**常用 Task 命令**：

- `*help``*help` - 显示可用命令
- `*status` - Show current context/`*status` - 显示当前上下文/进度
- `*exit``*exit` - 退出 agent 模式
- `*shard-doc docs/prd.md prd``*shard-doc docs/prd.md prd` - 将 PRD 分片成易于管理的部分
- `*shard-doc docs/architecture.md architecture``*shard-doc docs/architecture.md architecture` - 分片架构文档
- `*create`SM agent`*create` - 运行sm agent

**In Web UI**:**在 Web UI 中**：

```text
/pm create-doc prd
/architect review system design
/dev implement story 1.2
/help - Show available commands
/if orchestrator available
```

## 团队配置

### 预建团队

#### 所有团队

- **Includes**: All 10 agents +**包括**：所有 10 个 agent + orchestrator
- **Use Case**:**用例**：需要所有角色的完整项目
- **Bundle**: `team-all.txt`

#### 全栈团队

- **Includes**: PM, Architect, Developer, QA,**包括**：pm、architect、dev、qa、ux-expert
- **Use Case**: End-to-end web/**用例**：端到端 Web/移动开发
- **Bundle**: `team-fullstack.txt`

#### 无 UI 团队

- **Includes**: PM, Architect, Developer,no UX Expert**包括**：pm、architect、dev、qa（无 ux-expert）
- **Use Case**: Backend services, APIs,**用例**：后端服务、API、系统开发
- **Bundle**: `team-no-ui.txt`

## 核心架构

### 系统概述

The SDAT-Method is built around a modular architecture centered on the `sdat-core` directory, which serves as the brain of the entire system.like Cursor, VS Codelike ChatGPT, Gemini.SDAT-Method 围绕以 `sdat-core` 目录为中心的模块化架构构建，该目录是整个系统的大脑。这种设计使框架能够在 IDE 环境（如 Cursor、VS Code和基于 Web 的 AI 界面（如 ChatGPT、Gemini）中有效运行。）

### 关键架构组件

#### 1.`sdat-core/agents/`1.`sdat-core/agents/`

- **Purpose**:PM, Dev, Architect, etc.**目的**：每个 markdown 文件都为特定的敏捷角色（pm、dev、architect 等定义了一个专门的 AI agent）
- **Structure**: Contains YAML headers specifying the agent's persona, capabilities,**结构**：包含指定 agent 角色、功能和依赖项的 YAML 标头
- **Dependencies**: Lists of tasks, templates, checklists,**依赖项**：agent 可以使用的 task、模板、清单和数据文件列表
- **Startup Instructions**:**启动说明**：可以加载特定于项目的文档以获得即时上下文

#### 2.`sdat-core/agent-teams/`2. Agent 团队`sdat-core/agent-teams/`

- **Purpose**:**目的**：定义为特定目的捆绑在一起的 agent 集合
- **Examples**: `team-all.yaml`comprehensive bundle, `team-fullstack.yaml`full-stack development**示例**：`team-all.yaml`（综合包、`team-fullstack.yaml`（全栈开发））
- **Usage**:**用法**：为 Web UI 环境创建预打包的上下文

#### 3.`sdat-core/workflows/`3. 工作流`sdat-core/workflows/`

- **Purpose**:**目的**：定义特定项目类型的规定步骤序列的 YAML 文件
- **Types**:new projectsexisting projects for UI, service,**类型**：用于 UI、服务和全栈开发的 greenfield（新项目和现有项目）
- **Structure**: Defines agent interactions, artifacts created,**结构**：定义 agent 交互、创建的工件和转换条件

#### 4.4. 可重用资源

- **Templates**`sdat-core/templates/`: Markdown templates for PRDs, architecture specs,**模板**`sdat-core/templates/`：用于 PRD、架构规范、用户 story 的 Markdown 模板
- **Tasks**`sdat-core/tasks/`: Instructions for specific repeatable actions like "shard-doc" or "create-next-story"**Task**`sdat-core/tasks/`：用于特定可重复操作（如“shard-doc”或“create-next-story”的说明）
- **Checklists**`sdat-core/checklists/`:**清单**`sdat-core/checklists/`：用于验证和审查的质量保证清单
- **Data**`sdat-core/data/`:**数据**`sdat-core/data/`：核心知识库和技术偏好

### 双环境架构

#### IDE 环境用户直接与 agent markdown 文件交互Agent 可以动态访问所有依赖项支持实时文件操作和项目集成针对开发工作流执行进行了优化

#### Web UI 环境

- Uses pre-built bundles from `dist/teams` for stand alone 1使用 `dist/teams` 中的预构建包，为所有 agent 及其资产提供独立的 1 个上传文件，并带有一个编排 agent
- Single text files containing all agent dependencies are in `dist/agents/`包含所有 agent 依赖项的单个文本文件位于 `dist/agents/` 中 - 除非您想创建一个仅为单个 agent 而非团队的 Web agent，否则这些文件是不必要的由 web-builder 工具创建，用于上传到 Web 界面在一个包中提供完整的上下文

### 模板处理系统

SDAT employs a sophisticated template system with three key components:SDAT 采用了一个包含三个关键组件的复杂模板系统：

1. **Template Format**`utils/sdat-doc-template.md`:**模板格式**`utils/sdat-doc-template.md`：定义用于变量替换和来自 yaml 模板的 AI 处理指令的标记语言
2. **Document Creation**`tasks/create-doc.md`:**文档创建**`tasks/create-doc.md`：协调模板选择和用户交互，将 yaml 规范转换为最终的 markdown 输出
3. **Advanced Elicitation**`tasks/advanced-elicitation.md`:**高级启发**`tasks/advanced-elicitation.md`：通过结构化头脑风暴提供交互式优化

### 技术偏好集成

The `technical-preferences.md` file serves as a persistent technical profile that:`technical-preferences.md` 文件充当一个持久的技术配置文件，它：确保所有 agent 和项目的一致性消除重复的技术规范提供与用户偏好一致的个性化推荐随着经验教训的积累而不断发展

### 构建和交付过程

The `web-builder.js` tool creates web-ready bundles by:`web-builder.js` 工具通过以下方式创建可用于 Web 的包：

1.读取 agent 或团队定义文件2.递归解析所有依赖项3.将内容连接成带有清晰分隔符的单个文本文件4.输出可供 Web AI 界面上传的包

This architecture enables seamless operation across environments while maintaining the rich, interconnected agent ecosystem that makes SDAT powerful.这种架构实现了跨环境的无缝操作，同时保持了使 SDAT 强大的丰富、互联的 agent 生态系统。

## 完整的开发工作流

### Web UI Recommended - Especially Gemini!规划阶段（推荐使用 Web UI - 尤其是 Gemini！）

**Ideal for cost efficiency with Gemini's massive context:\*\***利用 Gemini 的海量上下文实现成本效益的理想选择：\*\*

**For Brownfield Projects - Start Here!**:**对于 Brownfield 项目 - 从这里开始！**：

1. **Upload entire project to Gemini Web**GitHub URL, files, or zip**将整个项目上传到 Gemini Web**（GitHub URL、文件或 zip）
2. **Document existing system**: `/analyst` → `*document-project`**记录现有系统**：`/analyst` → `*document-project`
3. **Creates comprehensive docs**从整个代码库分析中**创建综合文档**

**For All Projects**:**对于所有项目**：

1. **Optional Analysis**: `/analyst` - Market research,**可选分析**：`/analyst` - 市场研究、竞争分析
2. **Project Brief**:Analyst or user**项目简报**：创建基础文档（分析师或用户）
3. **PRD Creation**: `/pm create-doc prd`**PRD 创建**：`/pm create-doc prd` - 综合产品需求
4. **Architecture Design**: `/architect create-doc architecture`**架构设计**：`/architect create-doc architecture` - 技术基础
5. **Validation & Alignment**: `/po`**验证与对齐**：`/po` 运行主清单以确保文档一致性
6. **Document Preparation**: Copy final documents to project as `docs/prd.md` and `docs/architecture.md`**文档准备**：将最终文档复制到项目，命名为 `docs/prd.md` 和 `docs/architecture.md`

#### 规划提示示例

**For PRD Creation**:**用于 PRD 创建**：

```text
"typecore purpose.
Help me brainstorm features and create a comprehensive PRD."
```

**For Architecture Design**:**用于架构设计**：

```text
"Based on this PRD,specific requirements."
```

### Critical Transition:关键转换：从 Web UI 到 IDE

**Once planning is complete, you MUST switch to IDE for development:\*\***规划完成后，您必须切换到 IDE 进行开发：\*\*

- **Why**: Development workflow requires file operations, real-time project integration,**原因**：开发工作流需要文件操作、实时项目集成和文档分片
- **Cost Benefit**: Web UI is more cost-effective for large document creation;**成本效益**：Web UI 对于大型文档创建更具成本效益；IDE 针对开发 task 进行了优化
- **Required Files**: Ensure `docs/prd.md` and `docs/architecture.md`**所需文件**：确保 `docs/prd.md` 和 `docs/architecture.md` 存在于您的项目中

### IDE 开发工作流

**Prerequisites**: Planning documents must exist in `docs/`**先决条件**：规划文档必须存在于 `docs/` 文件夹中

1. **Document Sharding**CRITICAL STEP:**文档分片**（关键步骤：）
    - Documents created by PM/in Web or IDE由 pm/architect 创建的文档（在 Web 或 IDE 中必须为开发进行分片）
    - Two methods to shard:两种分片方法：
      a) **Manual**: Drag `shard-doc` task +**手动**：将 `shard-doc` task + 文档文件拖入聊天
      b) **Agent**: Ask `@sdat-master` or `@po`**Agent**：要求 `@sdat-master` 或 `@po` 对文档进行分片
    - Shards `docs/prd.md` → `docs/prd/`将 `docs/prd.md` 分片到 `docs/prd/` 文件夹
    - Shards `docs/architecture.md` → `docs/architecture/`将 `docs/architecture.md` 分片到 `docs/architecture/` 文件夹
    - **WARNING**: Do NOT shard in Web UI - copying many small files is painful!**警告**：不要在 Web UI 中分片 - 复制许多小文件很痛苦！

2. **Verify Sharded Content**:**验证分片内容**：
    - At least one `epic-n.md` file in `docs/prd/``docs/prd/` 中至少有一个 `epic-n.md` 文件，其中包含按开发顺序排列的 story供 dev agent 参考的源树文档和编码标准供 sm agent 创建 story 的分片文档

Resulting Folder Structure:生成的文件夹结构：

- `docs/prd/``docs/prd/` - 分解的 PRD 部分
- `docs/architecture/``docs/architecture/` - 分解的架构部分
- `docs/stories/``docs/stories/` - 生成的用户 story

1. **Development Cycle**Sequential, one story at a time:**开发周期**（顺序进行，一次一个 story：）

    **CRITICAL CONTEXT MANAGEMENT**:**关键上下文管理**：
    - **Context windows matter!** Always use fresh,**上下文窗口很重要！** 始终使用全新的、干净的上下文窗口
    - **Model selection matters!\*\***模型选择很重要！\*\* 使用最强大的思维模型进行 sm story 创建
    - **ALWAYS start new chat between SM, Dev, and QA work\*\***始终在 sm、dev 和 qa 工作之间开始新的聊天\*\*

    **Step 1 - Story Creation**:**步骤 1 - Story 创建**：
    - **NEW CLEAN CHAT** → Select powerful model → `@sm` → `*create`**新的干净聊天** → 选择强大的模型 → `@sm` → `*create`sm 执行 create-next-story task
    - Review generated story in `docs/stories/`在 `docs/stories/` 中查看生成的 story
    - Update status from "Draft" to "Approved"将状态从“草稿”更新为“已批准”

    **Step 2 - Story Implementation**:**步骤 2 - Story 实施**：
    - **NEW CLEAN CHAT** → `@dev`**新的干净聊天** → `@dev`Agent 询问要实施哪个 story包含 story 文件内容以节省 dev agent 查找时间
    - Dev follows tasks/subtasks,dev 遵循 task/subtask，标记完成dev 维护所有更改的文件列表
    - Dev marks story as "Review"dev 在所有测试通过后将 story 标记为“审查”

    **Step 3 - Senior QA Review**:**步骤 3 - 高级 QA 审查**：
    - **NEW CLEAN CHAT** → `@qa` →**新的干净聊天** → `@qa` → 执行 review-story taskqa 执行高级开发人员代码审查qa 可以直接重构和改进代码
    - QA appends results to story'qa 将结果附加到 story 的 QA 结果部分
    - If approved: Status → "Done"如果批准：状态 → “已完成”
    - If changes needed: Status stays "Review"如果需要更改：状态保持“审查”，并为 dev 提供未检查的项目

    **Step 4 - Repeat**: Continue SM → Dev →**步骤 4 - 重复**：继续 sm → dev → qa 周期，直到所有 epic story 完成

**Important**: Only 1 story in progress at a time, worked sequentially until all epic stories complete.**重要提示**：一次只进行 1 个 story，按顺序进行，直到所有 epic story 完成。

### 状态跟踪工作流

Stories progress through defined statuses:Story 通过定义的状态进行：

- **Draft** → **Approved** → **InProgress** → **Done**

Each status change requires user verification and approval before proceeding.每个状态更改都需要用户验证和批准才能继续。

### 工作流类型

#### Greenfield 开发业务分析和市场研究产品需求和功能定义系统架构和设计开发执行测试和部署

#### Existing ProjectsBrownfield 增强（现有项目）

**Key Concept**: Brownfield development requires comprehensive documentation of your existing project for AI agents to understand context, patterns, and constraints.**关键概念**：brownfield 开发需要对您的现有项目进行全面的文档记录，以便 AI agent 了解上下文、模式和约束。

**Complete Brownfield Workflow Options**:**完整的 Brownfield 工作流选项**：

**Option 1:Recommended for Large Codebases/Monorepos**:**选项 1：PRD 优先（推荐用于大型代码库/Monorepo**：）

1. **Upload project to Gemini Web**GitHub URL, files, or zip**将项目上传到 Gemini Web**（GitHub URL、文件或 zip）
2. **Create PRD first**: `@pm` → `*create-doc brownfield-prd`**首先创建 PRD**：`@pm` → `*create-doc brownfield-prd`
3. **Focused documentation**: `@analyst` → `*document-project`**专注文档**：`@analyst` → `*document-project`如果未提供 PRD，分析师会要求提供重点
    - Choose "single document"为 Web UI 选择“单个文档”格式使用 PRD 仅记录相关区域创建一个综合的 markdown 文件避免用未使用的代码使文档臃肿

**Option 2:Good for Smaller Projects**:**选项 2：文档优先（适用于较小的项目**：）

1. **Upload project to Gemini Web\*\***将项目上传到 Gemini Web\*\*
2. **Document everything**: `@analyst` → `*document-project`**记录所有内容**：`@analyst` → `*document-project`
3. **Then create PRD**: `@pm` → `*create-doc brownfield-prd`**然后创建 PRD**：`@pm` → `*create-doc brownfield-prd`更彻底，但可能会产生过多的文档

4. **Requirements Gathering**:**需求收集**：
    - **Brownfield PRD**: Use PM agent with `brownfield-prd-tmpl`**Brownfield PRD**：使用带有 `brownfield-prd-tmpl` 的 pm agent
    - **Analyzes**: Existing system, constraints,**分析**：现有系统、约束、集成点
    - **Defines**: Enhancement scope, compatibility requirements,**定义**：增强范围、兼容性要求、风险评估
    - **Creates**:**创建**：更改的 epic 和 story 结构

5. **Architecture Planning**:**架构规划**：
    - **Brownfield Architecture**: Use Architect agent with `brownfield-architecture-tmpl`**Brownfield 架构**：使用带有 `brownfield-architecture-tmpl` 的 architect agent
    - **Integration Strategy**:**集成策略**：新功能如何与现有系统集成
    - **Migration Planning**:**迁移规划**：逐步推出和向后兼容性
    - **Risk Mitigation**:**风险缓解**：解决潜在的重大变更

**Brownfield-Specific Resources**:**Brownfield 特定资源**：

**Templates**:**模板**：

- `brownfield-prd-tmpl.md`:`brownfield-prd-tmpl.md`：通过现有系统分析进行全面的增强规划
- `brownfield-architecture-tmpl.md`:`brownfield-architecture-tmpl.md`：用于现有系统的以集成为中心的架构

**Tasks**:**Task**：

- `document-project`:`document-project`：从现有代码库生成综合文档
- `brownfield-create-epic`:when full PRD is overkill`brownfield-create-epic`：为专注的增强创建单个 epic（当完整的 PRD 过度时）
- `brownfield-create-story`: Creates individual story for small,`brownfield-create-story`：为小的、孤立的更改创建单个 story

**When to Use Each Approach**:**何时使用每种方法**：

**Full Brownfield Workflow**Recommended for:**完整的 Brownfield 工作流**（推荐用于：）主要功能添加系统现代化复杂集成多个相关更改

**Quick Epic/Story Creation**Use when:**快速 Epic/Story 创建**（使用时：）

- Single,单个、专注的增强孤立的错误修复小的功能添加文档齐全的现有系统

**Critical Success Factors**:**关键成功因素**：

1. **Documentation First**: Always run `document-project` if docs are outdated/**文档优先**：如果文档过时/缺失，请始终运行 `document-project`
2. **Context Matters**:**上下文很重要**：为 agent 提供对相关代码部分的访问权限
3. **Integration Focus**:**集成重点**：强调兼容性和非破坏性更改
4. **Incremental Approach**:**增量方法**：规划逐步推出和测试

**For detailed guide**: See `docs/working-in-the-brownfield.md`**有关详细指南**：请参阅 `docs/working-in-the-brownfield.md`

## 文档创建最佳实践

### 框架集成所需的文件命名

- `docs/prd.md` - Product Requirements Document
- `docs/architecture.md` - System Architecture Document

**Why These Names Matter**:**为什么这些名称很重要**：Agent 在开发过程中自动引用这些文件分片 task 需要这些特定的文件名工作流自动化依赖于标准命名

### 经济高效的文档创建工作流

**PRD, Architecture:\*\***推荐用于大型文档（PRD、架构：\*\*）

1. **Use Web UI**:**使用 Web UI**：在 Web 界面中创建文档以提高成本效益
2. **Copy Final Output**:**复制最终输出**：将完整的 markdown 保存到您的项目
3. **Standard Names**: Save as `docs/prd.md` and `docs/architecture.md`**标准名称**：另存为 `docs/prd.md` 和 `docs/architecture.md`
4. **Switch to IDE**:**切换到 IDE**：使用 IDE agent 进行开发和处理较小的文档

### 文档分片

Templates with Level 2`##` can be automatically sharded:具有 2 级标题`##` 的模板可以自动分片：

**Original PRD**:**原始 PRD**：

```markdown
## Goals and Background Context

## Requirements

## User Interface Design Goals

## Success Metrics
```

**After Sharding**:**分片后**：

- `docs/prd/goals-and-background-context.md`
- `docs/prd/requirements.md`
- `docs/prd/user-interface-design-goals.md`
- `docs/prd/success-metrics.md`

Use the `shard-doc` task or `@kayvan/markdown-tree-parser` tool for automatic sharding.使用 `shard-doc` task 或 `@kayvan/markdown-tree-parser` 工具进行自动分片。

## 使用模式和最佳实践

### 特定于环境的用法

**Web UI Best For**:**Web UI 最适合**：初始规划和文档阶段经济高效的大型文档创建Agent 咨询和头脑风暴与 orchestrator 的多 agent 工作流

**IDE Best For**:**IDE 最适合**：积极的开发和实施文件操作和项目集成Story 管理和开发周期代码审查和调试

### 质量保证为专门的 task 使用适当的 agent遵循敏捷仪式和审查流程与 po agent 保持文档一致性使用清单和模板进行定期验证

### 性能优化

- Use specific agents vs. `sdat-master`为专注的 task 使用特定的 agent 而不是 `sdat-master`根据项目需求选择合适的团队规模利用技术偏好实现一致性定期进行上下文管理和缓存清理

## 成功秘诀

- **Use Gemini for big picture planning\*\***使用 Gemini 进行宏观规划\*\* - team-fullstack 包提供协作专业知识
- **Use sdat-master for document organization\*\***使用 sdat-master 进行文档组织\*\* - 分片创建易于管理的部分
- **Follow the SM → Dev cycle religiously\*\***严格遵循 sm → dev 周期\*\* - 这确保了系统的进展
- **Keep conversations focused** - One agent,**保持对话专注** - 每个对话一个 agent，一个 task
- **Review everything\*\***审查一切\*\* - 在标记完成之前始终审查和批准

## 为 SDAT-Method 做贡献

### 快速贡献指南

For full details, see `CONTRIBUTING.md`. Key points:有关完整详细信息，请参阅 `CONTRIBUTING.md`。关键点：

**Fork Workflow**:**Fork 工作流**：

1.Fork 仓库2.创建功能分支3. Submit PRs to `next`default or `main`仅将 PR 提交到 `next` 分支（默认或 `main` 分支以进行关键修复）4. Keep PRs small: 200-400 lines ideal, 800保持 PR 小：理想情况下 200-400 行，最多 800 行 5. One feature/每个 PR 一个功能/修复

**PR Requirements**:**PR 要求**：max 200 words with What/Why/How/清晰的描述（最多 200 字，包括什么/为什么/如何/测试）feat:, fix:, docs:使用常规提交（feat:、fix:、docs:）原子提交 - 每个提交一个逻辑更改必须符合指导原则

**Core Principles**from docs/GUIDING-PRINCIPLES.md:**核心原则**（来自 docs/GUIDING-PRINCIPLES.md：）

- **Dev Agents Must Be Lean**: Minimize dependencies,**Dev Agent 必须精简**：最小化依赖项，为代码保存上下文
- **Natural Language First**: Everything in markdown,**自然语言优先**：所有内容都在 markdown 中，核心中没有代码
- **Core vs Expansion Packs**: Core for universal needs,**核心与扩展包**：核心满足通用需求，包满足专业领域
- **Design Philosophy**: "Dev agents code, planning agents plan"**设计理念**：“dev agent 编码，规划 agent 规划”

## 扩展包

### What Are Expansion Packs?什么是扩展包？

Expansion packs extend SDAT-Method beyond traditional software development into ANY domain. They provide specialized agent teams, templates, and workflows while keeping the core framework lean and focused on development.扩展包将 SDAT-Method 从传统的软件开发扩展到任何领域。它们提供专门的 agent 团队、模板和工作流，同时保持核心框架精简并专注于开发。

### Why Use Expansion Packs?为什么使用扩展包？

1. **Keep Core Lean**:**保持核心精简**：dev agent 保持最大的编码上下文
2. **Domain Expertise**: Deep,**领域专业知识**：深入、专业的知识，而不会使核心臃肿
3. **Community Innovation**:**社区创新**：任何人都可以创建和共享包
4. **Modular Design**:**模块化设计**：只安装您需要的东西

### 可用的扩展包

**Technical Packs**:**技术包**：

- **Infrastructure/DevOps**: Cloud architects, SRE experts,**基础设施/DevOps**：云架构师、SRE 专家、安全专家
- **Game Development**: Game designers, level designers,**游戏开发**：游戏设计师、关卡设计师、叙事作家
- **Mobile Development**: iOS/Android specialists,**移动开发**：iOS/Android 专家、移动 UX 专家
- **Data Science**: ML engineers, data scientists,**数据科学**：ML 工程师、数据科学家、可视化专家

**Non-Technical Packs**:**非技术包**：

- **Business Strategy**: Consultants, financial analysts,**商业策略**：顾问、财务分析师、营销策略师
- **Creative Writing**: Plot architects, character developers,**创意写作**：情节架构师、角色开发者、世界构建者
- **Health & Wellness**: Fitness trainers, nutritionists,**健康与保健**：健身教练、营养师、习惯工程师
- **Education**: Curriculum designers,**教育**：课程设计师、评估专家
- **Legal Support**: Contract analysts,**法律支持**：合同分析师、合规检查员

**Specialty Packs**:**专业包**：

- **Expansion Creator**:**扩展创建者**：用于构建您自己的扩展包的工具
- **RPG Game Master**:**RPG 游戏大师**：桌面游戏辅助
- **Life Event Planning**: Wedding planners,**生活事件规划**：婚礼策划师、活动协调员
- **Scientific Research**: Literature reviewers,**科学研究**：文献综述员、方法论设计师

### 使用扩展包

1. **Browse Available Packs**: Check `expansion-packs/`**浏览可用包**：查看 `expansion-packs/` 目录
2. **Get Inspiration**: See `docs/expansion-packs.md`**获取灵感**：有关详细示例和想法，请参阅 `docs/expansion-packs.md`
3. **Install via CLI**:**通过 CLI 安装**：

    ```bash
    npx sdat-method install
    # Select "Install expansion pack" option
    ```

4. **Use in Your Workflow**:**在您的工作流中使用**：已安装的包与现有 agent 无缝集成

### 创建自定义扩展包

Use the **expansion-creator** pack to build your own:使用 **expansion-creator** 包构建您自己的：

1. **Define Domain**: What expertise are you capturing?**定义领域**：您正在捕获什么专业知识？
2. **Design Agents**:**设计 Agent**：创建具有明确界限的专门角色
3. **Build Resources**: Tasks, templates,**构建资源**：为您的领域构建 task、模板、清单
4. **Test & Share**: Validate with real use cases,**测试和分享**：通过实际用例进行验证，与社区分享

**Key Principle**: Expansion packs democratize expertise by making specialized knowledge accessible through AI agents.**关键原则**：扩展包通过 AI agent 使专业知识易于获取，从而实现专业知识的民主化。

## 获取帮助

- **Commands**: Use `*/*help`**命令**：在任何环境中使用 `*/*help` 查看可用命令
- **Agent Switching**: Use `*/*switch agent-name`**Agent 切换**：使用 `*/*switch agent-name` 与 orchestrator 进行角色更改
- **Documentation**: Check `docs/`**文档**：查看 `docs/` 文件夹以获取特定于项目的上下文
- **Community**:**社区**：可用于支持的 Discord 和 GitHub 资源
- **Contributing**: See `CONTRIBUTING.md`**贡献**：有关完整指南，请参阅 `CONTRIBUTING.md`
