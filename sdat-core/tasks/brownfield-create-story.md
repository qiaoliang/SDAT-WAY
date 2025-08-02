# 创建Brownfield Story任务

## 目的

为可以在一个专注开发会话中完成的非常小的brownfield增强创建单个用户story。此任务适用于需要现有系统集成意识的最小添加或bug修复。

## 何时使用此任务

**在以下情况使用此任务**:

- 增强可以在单个story中完成
- 不需要新架构或重大设计
- 更改完全遵循现有模式
- 集成直接且风险最小
- 更改是孤立的，边界清晰

**在以下情况使用brownfield-create-epic**:

- 增强需要2-3个协调的story
- 需要一些设计工作
- 涉及多个集成点

**Use the full brownfield PRD/在以下情况使用完整的brownfield PRD/架构流程**:

- 增强需要多个协调的story
- 需要架构规划
- 需要重大集成工作

## 指令

### 1.快速项目评估

收集关于现有项目的最小但基本上下文：

**当前系统上下文**: 相关现有功能已识别 此区域的技术栈已记录 集成点清晰理解 类似工作的现有模式已识别

**更改范围**: 具体更改明确定义 影响边界已识别 成功标准已建立

### 2.Story创建

创建单个专注的story，遵循以下结构：

#### Story标题

{{Specific Enhancement}} - Brownfield Addition

#### 用户故事

As a {{user type}},
I want {{specific action/capability}},
So that {{clear benefit/value}}.

#### Story上下文

**现有系统集成**:集成到: {{existing component/system}}技术: {{relevant tech stack}}遵循模式: {{existing pattern to follow}}接触点: {{specific integration points}}

#### 验收标准

**功能要求**:

1. {{Primary functional requirement}}
2. {{if any}}
3. {{Integration requirement}}

**集成要求**:

4. Existing {{relevant functionality}} continues to work unchanged
5. New functionality follows existing {{pattern}} pattern
6. Integration with {{system/component}} maintains current behavior

**质量要求**:

7. Change is covered by appropriate tests
8. Documentation is updated if needed
9. No regression in existing functionality verified

#### 技术说明

- **集成方法:** {{how it connects to existing system}}
- **现有模式参考:** {{link or description of pattern to follow}}
- **关键约束:** {{any important limitations or requirements}}

#### 完成定义

- 功能要求满足
- 集成要求验证
- 现有功能回归测试
- 代码遵循现有模式和标准
- 测试通过（现有和新测试)
- 文档适当更新

### 3.风险和兼容性检查

**最小风险评估**:

- **主要风险:** {{main risk to existing system}}
- **缓解:** {{simple mitigation approach}}
- **回滚:** {{how to undo if needed}}

**兼容性验证**: 对现有API无破坏性更改 数据库更改（如果有）仅为添加 UI更改遵循现有设计模式 性能影响可忽略

### 4.验证检查清单

在最终确定story之前，确认：

**范围验证**: Story可以在一个开发会话中完成 集成方法直接 完全遵循现有模式 不需要设计或架构工作

**清晰度检查**: Story要求明确 集成点明确指定 成功标准可测试 回滚方法简单

## 成功标准

story创建成功时：

1. 增强明确定义且适合单会话范围
2. 集成方法直接且低风险
3. 现有系统模式已识别并将遵循
4. 回滚计划简单且可行
5. 验收标准包括现有功能验证

## 重要说明

- 此任务专门用于VERY SMALL brownfield更改
- 如果在分析过程中复杂度增长，升级到brownfield-create-epic
- 始终优先考虑现有系统完整性
- 当对集成复杂度有疑问时，使用brownfield-create-epic
- Story应该不超过4小时的专注开发工作
