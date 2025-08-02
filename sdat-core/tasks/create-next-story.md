# 创建下一个 Story 任务

## 目的

根据项目进度和 epic 定义识别下一个逻辑 story，然后使用 `Story Template` 准备一个全面、独立且可操作的 story 文件。此任务确保 story 包含所有必要的技术上下文、需求和验收标准，使其可由 Developer Agent 高效实施，而无需他们自己进行额外的研究或寻找上下文。

## 顺序执行任务（在当前任务完成之前不要继续）

### 0.加载核心配置并检查工作流

- 从 `{root}/core-config.yaml`加载
- 如果文件不存在，请停止并通知用户：“未找到 core-config.yaml。创建 story 需要此文件。您可以：1) 从 GITHUB sdat-core/core-config.yaml 复制并为您的项目配置它，或者 2) 对您的项目运行 SDAT 安装程序以自动升级并添加该文件。请在继续之前添加并配置 core-config.yaml。”
- 提取: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`

### 1.识别要准备的下一个 Story

#### 1.1定位 Epic 文件并审查现有 Story

- Based on `prdSharded` in config,sharded location/pattern or monolithic PRD sections
- 如果 `devStoryLocation` 中存在 story 文件，则加载最高的 `{epicNum}.{storyNum}.story.md` 文件
- **如果最高的 story 存在**：
    - 验证状态是否为“已完成 / Done”。如果不是，请提醒用户：“警告：发现未完成的 story！文件：{lastEpicNum}.{lastStoryNum}.story.md 状态：[current state] 您应该首先修复此 story，但您是否愿意接受风险并覆盖以创建下一个草稿 story？”
    - 如果继续，请选择当前 epic 中的下一个顺序 story
    - 如果 epic 已完成，请提示用户：“Epic {epicNum} 已完成：Epic {epicNum} 中的所有 story 都已完成。您想：1) 从 下一个 Epic {epicNum + 1} 的story 1 开始； 2) 选择一个特定的 story 进行处理； 3) 取消 story 创建”
    - **关键**：切勿自动跳转到另一个 epic。用户必须明确指示要创建哪个 story。
- **如果没有 story 文件**：下一个 story 始终是 1.1（第一个 epic 的第一个 story）
- 向用户宣布已识别的 story：“已识别要准备的下一个 story：{epicNum}.{storyNum} - {Story 标题}”

### 2.收集 Story 要求和上一个 Story 上下文从已识别的 epic 文件中提取 story 要求

- 如果存在上一个 story，请查看 `Dev Agent Record section`以了解：完成说明和调试日志参考实施偏差和技术决策遇到的挑战和经验教训提取相关见解以指导当前 story 的准备工作

### 3.收集架构上下文

#### 3.1确定架构阅读策略

- **如果 `architectureVersion: >= V2` 且 `architectureSharded: true`**：读取 `{architectureShardedLocation}/index.md` 然后遵循下面的结构化阅读顺序
- **否则**：对类似部分使用单体 `architectureFile`

#### 3.2基于 Story 类型读取架构文档

.**对于所有 Story 类型，要读取**：tech-stack.md、unified-project-structure.md、coding-standards.md、testing-strategy.md

**对于后端/API Story，还要读取**：data-models.md、database-schema.md、backend-architecture.md、rest-api-spec.md、external-apis.md

**对于前端/UI Story，则还要读取**：frontend-architecture.md、components.md、core-workflows.md、data-models.md

**对于全栈 Story**：阅读上面的后端和前端部分

#### 3.3提取 Story 特定技术细节

仅提取与实施当前 story 直接相关的信息。只能使用源文档中有的 libs/pattern/standred，不要发明源文档中没有的新库、模式或标准。

提取：

- 特定数据模型、模式或结构
- story 必须实施或使用的 API 端点
- story 中 UI 元素的组件规范新代码的文件路径和命名约定
- 特定于 story 功能的技术要求影响
- story 的安全或性能考虑

始终引用源文档：`[Source: architecture/{filename}.md#{section}]`

### 4.验证项目结构对齐

- 将 story 要求与 `docs/architecture/unified-project-structure.md` 中的项目结构指南进行交叉引用
- 确保文件路径、组件位置或模块名称与定义的结构对齐
- 在 story 草稿的“项目结构说明”部分记录任何结构冲突

### 5.用完整上下文填充 Story 模板

- 使用 Story 模板创建新的 story 文件：`{devStoryLocation}/{epicNum}.{storyNum}.story.md`
- 填写基本的 story 信息：标题、状态（草稿、Story 陈述、来自 Epic 的验收标准）
- **`Dev Notes` 部分（关键**：）
    - **关键**：此部分必须仅包含从架构文档中提取的信息。切勿发明或假设技术细节。
    - 包括步骤 2-3 中的所有相关技术细节，按类别组织：
        - **上一个 Story 的见解**：上一个 story 的关键经验
        - **数据模型**：特定模式、验证规则、关系，需要附带源引用
        - **API 规范**: Endpoint details, request/response formats,with source citation
        - **组件规范**：UI component details, props,with source citation
        - **文件位置**：根据项目结构应创建新代码的确切路径
        - **测试要求**: 来自 testing-strategy.md 的特定测试用例或策略
        - ,**技术约束**：版本要求、性能考虑、安全规则
    - 每个技术细节都必须包含其源引用：`[Source: architecture/{filename}.md#{section}]`
    - 如果在架构文档中找不到某个类别的信息，请明确说明：“在架构文档中未找到具体指导”
- **`Tasks / Subtasks` 部分**：
    - 根据以下内容生成详细的、顺序的技术任务列表：Epic 要求、Story AC、
    - 审查的架构信息每个任务都必须引用相关的架构文档根据测试策略将单元测试作为明确的子任务包括在内e.g., `Task 1 (AC: 1, 3`)
    - 在适用时将任务链接到 AC（例如，`Task 1AC: 1, 3`）
- 添加有关在步骤 4 中发现的项目结构对齐或差异的说明

### 6.Story 草稿完成和审查

审查所有部分的完整性和准确性，验证所有源引用都包含在技术细节中，确保任务与 epic 要求和架构约束都对齐

- 将状态更新为“Draft”并保存 story 文件
- 执行 `{root}/tasks/execute-checklist` `{root}/checklists/story-draft-checklist`
- 向用户提供摘要，包括：
    - 创建的 Story：`{devStoryLocation}/{epicNum}.{storyNum}.story.md`
    - Status:状态：草稿包含在架构文档中的关键技术组件epic 和架构之间注意到的任何偏差或冲突清单结果
    - 下一步：对于复杂的 story，建议用户仔细审查 story 草稿，并可选择让 PO 运行任务 `{root}/tasks/validate-next-story`
