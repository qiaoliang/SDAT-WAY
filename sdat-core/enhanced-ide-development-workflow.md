# Enhanced Development Workflow

这是一个简单的分步指南，帮助你使用 SDAT 方法高效管理开发工作流。如遇未涵盖的场景，请参考**[<ins>用户指南</ins>](user-guide.md)**。

## Create new Branch

1. **Start new branch**

## Scrum Master

1. **开始新的对话**
2. **加载 SM agent**
3. **执行**：`*draft`，运行 create-next-story 任务
4. **在 `docs/stories/` 中审查生成的 story**
5. **更新状态**：将 "Draft" 改为 "Approved"

## Developer

1. **开始新的对话**
2. **加载开发者代理（Dev agent）**
3. **执行**：`*develop-story {selected-story}`，运行 execute-checklist 任务
4. \*\*在 `{selected-story}` 中审查生成的报告

## Quality Assurance

1. **开始新的对话**
2. **加载 QA 代理**
3. **执行**：`*review {selected-story}`，运行 review-story 任务
4. **在 `{selected-story}` 中审查生成的报告**

## Commit Changes and Push

1. **提交更改**
2. **推送到远程仓库**

## Repeat Until Complete

- **SM**：创建下一个 story → 审查 → 批准
- **Dev**：实现 story → 完成 → 标记为待评审
- **QA**：评审 story → 标记为已完成
- **commit**：所有更改
- **publish**：到远程仓库
- **continue**：直到所有功能实现完毕
