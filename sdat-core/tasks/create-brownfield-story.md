# 创建 Brownfield Story 任务

## 目的

为具有非标准文档的 brownfield 项目创建详细、可实现的 story。此 task 弥合了各种文档格式（`document-project` 输出、brownfield PRD、epic 或用户文档与 Dev agent 可执行的 story 之间的差距。）

## 何时使用此任务

**在以下情况下使用此任务**：处理具有非标准文档的 brownfield 项目

- 需要从 `document-project` 输出创建 story
- 在没有完整 PRD/architecture 的情况下处理 brownfield epic
- 现有项目文档不遵循 SDAT V2+ 结构在 story 创建期间需要从用户那里收集额外的上下文

**在以下情况下使用 `create-next-story`**：

- 使用正确分片的 PRD 和 V2 架构文档遵循标准的 greenfield 或文档齐全的 brownfield 工作流所有技术上下文都以结构化格式提供

## 任务执行指令

### 0.文档上下文

按此顺序检查可用文档：

1. \*\*对 PRD/ architeture 进行 sharding （`docs/prd/`, `docs/architecture/`
    - 如果找到`create-next-story`，建议使用 `create-next-story` 任务

2. **Brownfield Architecture Document**`docs/brownfield-architecture.md` or 或类似文件
    - 由 `document-project` 任务创建
    - 包含实际系统状态、技术债务、变通方法

3. **Brownfield PRD**`docs/prd.md`可能包含嵌入的技术细节

4. **Epic 文件**`docs/epics/` 或类似文件
    - 由 `brownfield-create-epic` 任务创建

5. 如何使用**用户提供的文档**， 要求用户指定位置和格式

### 1.Story 识别和上下文收集

#### 1.1识别 Story 来源

基于可用文档：

- **来自 Brownfield PRD**：从 epic 部分提取 story
- **来自 Epic 文件**：读取 epic 定义和 story 列表
- **来自用户指导**：询问用户要实现哪个具体增强
- **无明确来源**：与用户合作定义 story 范围

#### 1.2收集基本上下文

**关键**：对于 brownfield story，您必须收集足够的上下文以安全实现。如果信息缺失，请准备好询问用户。

**必需信息清单**：

- 哪些现有功能可能会受到影响？
- 与当前代码的集成点是什么？
- 应该遵循哪些模式（附带示例？）
- 存在哪些技术约束？
- 是否有任何需要注意的“陷阱”或变通方法？

如果缺少任何必需信息，请列出缺少的内容并要求用户提供。

### 2.从可用来源提取技术上下文

#### 2.1来自 Document-Project 输出

如果从 `document-project`任务来使用 `brownfield-architecture.md`：

- **技术债务部分**：注意影响此 story 的任何变通方法
- **关键文件部分**：识别需要修改的文件
- **集成点**：寻找现有的集成模式
- **已知问题**：检查 story 是否触及问题区域
- **实际技术栈**：验证版本和约束

#### 2.2来自 Brownfield PRD

如果使用 brownfield PRD：

- **技术约束部分**：提取所有相关约束
- **集成要求**：注意兼容性要求
- **代码组织**：遵循指定的模式
- **风险评估**：了解潜在影响

#### 2.3来自用户文档

要求用户帮助识别：相关技术规范要遵循的现有代码示例集成要求项目中使用的测试方法

### 3.通过渐进式细节收集创建 Story

#### 3.1创建初始 Story 结构

从 story 模板开始，填写已知内容：

```markdown
# Story {{Enhancement Title}}

## Status: Draft

## Story

As a {{user_type}},
I want {{enhancement_capability}},
so that {{value_delivered}}.

## Context Source

- Source Document: {{document name/type}}
- Enhancement Type: {{single feature/bug fix/integration/etc}}
- Existing System Impact: {{brief assessment}}
```

#### 3.2制定验收标准

**关键注意事项**：对于 brownfield，始终包括有关维护现有功能的标准。

将结构化的验收标准为：

1. 新功能按要求工作
2. Existing {{affected feature}} 可以正常工作
3. 与 {{existing systems}} 的集成保持当前行为
4. 在{{related area }} 没有回归问题
5. 性能保持在可接受的范围内

#### 3.3收集技术指导

**关键注意事项**: 如果信息缺失，这里需要用户交互。

使用可用信息创建 `Dev Technical Guidance` section：

```markdown
## Dev Technical Guidance

### Extract from available documentation

### Based on found patterns or ask user

### From documentation or user input

### Missing Information

关键注意事项: 列出所有 Dev 可能需要，但是你还找不到的信息，并且向用户询问这些信息在哪里可以找到。
```

### 4.带安全检查的任务生成

#### 4.1生成实现任务

根据收集的上下文创建任务：如果系统理解不完整，则包括探索任务为现有功能添加验证任务包括回滚考虑

- Reference specific files/pattern:

brownfield 的任务结构示例：

```markdown
## Tasks

Task 1:

- Analyze existing {{component/feature}}
- Review {{specific files}}

Task 2:

- Implement {{new functionality}}
- Follow pattern from {{example file}}
- Integrate with {{existing component}}
- Maintain compatibility with {{constraint}}

Task 3:

- Test {{existing feature 1}}
- Verify {{integration point}}
- Task 4: Unit tests following {{project test pattern}}
- Integration test for {{integration point}}
- Update existing tests if needed
```

### 5.风险评估和缓解

**关键注意事项**：对于 brownfield - 始终包括风险评估。

为 brownfield 的风险项专门增加一个章节：

```markdown
## Risk Assessment

### Implementation Risks

- **Primary Risk**: {{main risk to existing system}}
- **Mitigation**: {{how to address}}
- **Verification**: {{how to confirm safety}}

### Rollback Plan

- {{Simple steps to undo changes if needed}}

### Existing {{feature}} Rollback procedure documented
```

### 6.最终 Story 验证

在最终确定之前：

1. **完整性检查**：Story 有明确的范围和验收标准技术上下文足以实现集成方法已定义风险已识别并缓解

2. **安全检查**：包括对现有功能的保护回滚计划是可行的测试涵盖新功能和现有功能

3. **信息差距**：所有关键缺失信息都已从用户那里收集剩余的未知数已为 dev agent 记录在需要时添加探索任务

### 7.Story 输出格式

使用适当的名称保存 story：

- 如果来自某个 epic，则：`docs/stories/epic-{n}-story-{m}.md`
- 如果是一个 standalone，则：`docs/stories/brownfield-{feature-name}.md`
- 如果是有顺序的，则：遵循现有的 story 编号

包括一个记录上下文的标题：

```markdown
# Story: {{Title}}

<!-- Source: {{documentation type used}} -->
<!-- Context: Brownfield enhancement to {{existing system}} -->

## Status:Rest of story content...
```

### 8.移交沟通

向用户提供清晰的移交：

```text
Brownfield story created: {{story title}}

Source Documentation: {{what was used}}
Story Location: {{file path}}

Key Integration Points Identified:
- {{integration point 1}}
- {{integration point 2}}

Risks Noted:
- {{primary risk}}

{{If missing info}}:
Note: Some technical details were unclear. The story includes exploration tasks to gather needed information during implementation.

Next Steps:
1. Review story for accuracy
2. Verify integration approach aligns with your system
3. Approve story or request adjustments
4. Dev agent can then implement with safety checks
```

## 成功标准

当 brownfield story 创建成功时：

1. 可以在不要求 dev 搜索多个文档的情况下实现 story
2. 集成方法清晰且对现有系统安全
3. 所有可用的技术上下文都已提取和组织
4. 缺失的信息已识别和解决
5. 风险已记录并制定了缓解策略
6. story 包括对现有功能的验证
7. 已定义回滚方法

## 重要说明此任务专门用于具有非标准文档的 brownfield 项目始终将现有系统的稳定性置于新功能之上

- 如有疑问，请添加探索和验证用的任务
- 向用户寻求澄清比做出假设要好。
- 每个 story 对于 dev agent 都应该是自包含的在可用时包括对现有代码模式的引用
