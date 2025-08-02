# SDAT-Method SDAT 代码用户指南

This guide will help you understand and effectively use the SDAT Method for agile AI driven planning and development.本指南将帮助您理解并有效使用 SDAT 方法进行敏捷 AI 驱动的规划和开发。

## SDAT 计划和执行工作流

首先，这里是完整的标准 greenfield 规划 + 执行工作流。brownfield 与之非常相似，但建议先了解 greenfield，即使是在一个简单的项目上，然后再处理 brownfield 项目。SDAT 方法需要安装到新项目文件夹的根目录。在规划阶段，您可以选择使用强大的 Web agent 来执行，与在某些 Agentic 工具中提供自己的 API 密钥或积分相比，这可能会以一小部分成本获得更高质量的结果。对于规划，强大的思维模型和更大的上下文 - 以及与 agent 作为合作伙伴一起工作将获得最佳结果。an existing project, review **[Working in the Brownfield](./working-in-the-brownfield.md)**.如果您打算在 brownfield 项目（现有项目中使用 SDAT 方法，请查看 **[在 Brownfield 中工作](./working-in-the-brownfield.md)**。）

如果您没有看到下面呈现的图表，您可以安装 Markdown All in One 以及 Markdown Preview Mermaid Support 插件到 VSCode（或其派生克隆版之一。使用这些插件后，如果您在打开的选项卡上右键单击，应该会有一个“打开预览”选项，或者查看 IDE 文档。）

### Web UI or Powerful IDE Agents规划工作流Web UI 或强大的 IDE Agent

在开发开始之前，SDAT 遵循一个结构化的规划工作流，为了成本效益，最好在 Web UI 中完成：

```"Start: Project Idea" --> B{"Optional: Analyst Research"}
    B -->|Yes|"Analyst:Optional"
    B -->|No| G{"Project Brief Available?"}
    C --> C2["Analyst:Optional"]
    C2 --> C3["Analyst:Optional"]
    C3 -->"Analyst: Create Project Brief"
    D --> G
    G -->|Yes|"PM:Fast Track"
    G -->|No| E2["PM:More Questions"]
    E -->"PRD Created with FRs, NFRs, Epics & Stories"
    E2 --> F
    F --> F2{"UX Required?"}
    F2 -->|Yes| F3["UX Expert: Create Front End Spec"]
    F2 -->|No|"Architect: Create Architecture from PRD"
    F3 --> F4["UX Expert: Generate UI Prompt for Lovable/V0Optional"]
    F4 --> H2["Architect: Create Architecture from PRD + UX Spec"]
    H -->"PO: Run Master Checklist"
    H2 --> I
    I --> J{"Documents Aligned?"}
    J -->|Yes|"Planning Complete"
    J -->|No|"PO: Update Epics & Stories"
    L -->"Update PRD/Architecture as needed"
    M --> I
    K -->"📁If in a Web Agent Platform"
    N -->"PO: Shard Documents"
    O -->"Ready for SM/Dev Cycle"

    style A fill:#f5f5f5,color:#000
    style B fill:#e3f2fd,color:#000
    style C fill:#e8f5e9,color:#000
    style C2 fill:#e8f5e9,color:#000
    style C3 fill:#e8f5e9,color:#000
    style D fill:#e8f5e9,color:#000
    style E fill:#fff3e0,color:#000
    style E2 fill:#fff3e0,color:#000
    style F fill:#fff3e0,color:#000
    style F2 fill:#e3f2fd,color:#000
    style F3 fill:#e1f5fe,color:#000
    style F4 fill:#e1f5fe,color:#000
    style G fill:#e3f2fd,color:#000
    style H fill:#f3e5f5,color:#000
    style H2 fill:#f3e5f5,color:#000
    style I fill:#f9ab00,color:#fff
    style J fill:#e3f2fd,color:#000
    style K fill:#34a853,color:#fff
    style L fill:#f9ab00,color:#fff
    style M fill:#fff3e0,color:#000
    style N fill:#1a73e8,color:#fff
    style O fill:#f9ab00,color:#fff
    style P fill:#34a853,color:#fff
```

#### Web UI 到 IDE 的转换

**关键转换点**：一旦 PO 确认文档一致，您必须从 Web UI 切换到 IDE 以开始开发工作流：

1. **将文档复制到项目**：确保 `docs/prd.md` 和 `docs/architecture.md` 在您项目的 docs 文件夹中（或您在安装过程中可以指定的自定义位置）
2. **切换到 IDE**：在您首选的 Agentic IDE 中打开您的项目
3. **文档分片**：使用 PO agent 对 PRD 和架构进行分片
4. **开始开发**：开始接下来的核心开发周期

### IDE核心开发周期IDE

一旦规划完成并且文档被分片，SDAT 将遵循一个结构化的开发工作流：

```"Development Phase Start" -->"SM: Reviews Previous Story Dev/QA Notes"
    B --> B2["SM: Drafts Next Story from Sharded Epic + Architecture"]
    B2 --> B3{"QA:Optional"}
    B3 -->|Review Requested| B4["QA: Review Story Against Artifacts"]
    B3 -->|Skip Review| C{"User Approval"}
    B4 --> C
    C -->|Approved|"Dev: Sequential Task Execution"
    C -->|Needs Changes| B2
    D -->"Dev: Implement Tasks + Tests"
    E -->"Dev: Run All Validations"
    F -->"Dev: Mark Ready for Review + Add Notes"
    G --> H{"User Verification"}
    H -->|Request QA Review|"QA: Senior Dev Review + Active Refactoring"
    H -->|Approve Without QA|"IMPORTANT: Verify All Regression Tests and Linting are Passing"
    I -->"QA: Review, Refactor Code, Add Tests, Document Notes"
    J --> L{"QA Decision"}
    L -->|Needs Dev Work| D
    L -->|Approved| M
    H -->|Needs Fixes| D
    M -->"IMPORTANT: COMMIT YOUR CHANGES BEFORE PROCEEDING!"
    N -->"Mark Story as Done"
    K --> B

    style A fill:#f5f5f5,color:#000
    style B fill:#e8f5e9,color:#000
    style B2 fill:#e8f5e9,color:#000
    style B3 fill:#e3f2fd,color:#000
    style B4 fill:#fce4ec,color:#000
    style C fill:#e3f2fd,color:#000
    style D fill:#e3f2fd,color:#000
    style E fill:#e3f2fd,color:#000
    style F fill:#e3f2fd,color:#000
    style G fill:#e3f2fd,color:#000
    style H fill:#e3f2fd,color:#000
    style I fill:#f9ab00,color:#fff
    style J fill:#ffd54f,color:#000
    style K fill:#34a853,color:#fff
    style L fill:#e3f2fd,color:#000
    style M fill:#ff5722,color:#fff
    style N fill:#d32f2f,color:#fff
```

## 安装

### 可选Sonnet 4 or Opus,2.5 Pro, or Custom GPT's:如果您想在 Web 上使用Sonnet 4 或 Opus、2.5 Pro 或自定义 GPT 进行规划：

1. Navigate to `dist/teams/`导航到 `dist/teams/`
2. Copy `team-fullstack.txt`复制 `team-fullstack.txt` 3.创建新的 Gemini Gem 或 CustomGPT
3. Upload file with instructions: "Your critical operating instructions are attached, do not break character as directed"上传文件并附上说明：“您的关键操作说明已附上，请勿按指示破坏角色”
4. Type `/help`输入 `/help` 查看可用命令

### IDE 项目设置

```bash
# recommended
npx sdat-method install
```

## 特殊 Agent

有两个 sdat agent - 将来它们将被整合到单个 sdat-master 中。

### SDAT-Master

该 agent 可以执行所有其他 agent 可以执行的任何 task 或 command，但实际的 story 实现除外。此外，该 agent 可以在 Web 中通过访问知识库来帮助解释 SDAT 方法，并向您解释有关该过程的任何内容。

如果您不想在 dev 之外的不同 agent 之间切换，那么这个 agent 就适合您。请记住，随着上下文的增长，agent 的性能会下降，因此指示 agent 压缩对话并使用压缩后的对话作为初始消息开始新的对话非常重要。请经常这样做，最好在每个 story 实现之后。

### SDAT-Orchestrator

此 agent 不应在 IDE 中使用，它是一个重量级的专用 agent，利用大量上下文并可以变形为任何其他 agent。它的存在完全是为了促进 Web 包中的团队。如果您使用 Web 包，您将会看到 SDAT Orchestrator。

### Agent 如何工作

#### 依赖系统

每个 agent 都有一个 YAML 部分来定义其依赖项：

```yaml
dependencies:
    templates:
        - prd-template.md
        - user-story-template.md
    tasks:
        - create-doc.md
        - shard-doc.md
    data:
        - sdat-kb.md
```

**关键点：**Agent 只加载它们需要的资源（精简上下文）依赖项,在捆绑过程中自动解析资源,在 agent 之间共享以保持一致性

#### Agent 交互

**In IDE**:

```bash
# 一些 IDE（例如 Cursor 或 Windsurf）使用手动规则，因此交互时需使用 '@' 符号
@pm Create a PRD for a task management app
@architect Design the system architecture
@dev Implement the user authentication

# 有些（如 Claude Code）则使用斜杠命令（slash commands）
/pm Create user stories
/dev Fix the login bug
```

#### 交互模式

- **增量模式**：通过用户输入逐步进行
- **YOLO 模式**：以最少的交互快速生成

## IDE 集成

### IDE 最佳实践

- **上下文管理**：仅将相关文件保留在上下文中，保持文件尽可能精简和集中
- **Agent 选择**：为 task 使用适当的 agent
- **迭代开发**：在小而集中的 task 中工作
- **文件组织**：保持清晰的项目结构
- **定期提交**：经常保存您的工作

## 技术偏好系统

SDAT 通过位于 `.sdat-core/data/` 中的 `technical-preferences.md` 文件包含一个个性化系统 - 这可以帮助影响 PM 和 Architect 推荐您在设计模式、技术选择或您想在此处放置的任何其他内容方面的偏好。

### 与 Web 包一起使用

在创建自定义 Web 包或上传到 AI 平台时，请包含您的 `technical-preferences.md` 内容，以确保 agent 从任何对话开始就拥有您的偏好。

## 核心配置

`sdat-core/core-config.yaml` 文件是一个关键配置，它使 SDAT 能够与不同的项目结构无缝协作，将来会提供更多选项。目前最重要的是 yaml 中的 devLoadAlwaysFiles 列表部分。

### 开发者上下文文件

定义 dev agent 应始终加载哪些文件：

```yaml
devLoadAlwaysFiles:
    - docs/architecture/coding-standards.md
    - docs/architecture/tech-stack.md
    - docs/architecture/project-structure.md
```

您需要从您的架构分片中验证这些文档是否存在，它们是否尽可能精简，并准确包含您希望 dev agent 始终加载到其上下文中的信息。这些是 agent 将遵循的规则。

随着您的项目不断发展，代码开始形成一致的模式，编码标准应减少到仅包括 agent 仍然遵循的标准。agent 将查看文件中的周围代码，以推断与当前 task 相关的编码标准。

## 获取帮助

- **文档**：[浏览文档](https://github.com/sdatcode/sdat-method/docs)

## 结论

请记住：SDAT 旨在增强您的开发流程，而不是取代您的专业知识。将其用作加速项目同时保持对设计决策和实施细节控制的强大工具。
