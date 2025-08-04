# 创建Brownfield Epic任务

## 目的

为不需要完整 PRD 和架构文档流程的较小 brownfield 增强创建单个 epic。此任务适用于可以在专注范围内完成的孤立功能或修改。

## 何时使用此任务

**在以下情况使用此任务**:

- 增强可以在1-3个story中完成
- 不需要重大架构更改
- 增强遵循现有项目模式
- 集成复杂度最小
- 对现有系统的风险较低

** 在以下情况使用完整的 brownfield PRD/架构流程**:

- 增强需要多个协调的story
- 需要架构规划
- 需要重大集成工作
- 需要风险评估和缓解规划

## 指令

### 1.Required项目分析（必需）

在创建epic之前，收集关于现有项目的基本信息：

**现有项目上下文**:

- 项目目的和当前功能已理解
- 现有技术栈已识别
- 当前架构模式已记录
- 与现有系统的集成点已识别

**增强范围**:

- 增强已明确定义和范围
- 对现有功能的影响已评估
- 所需集成点已识别
- 成功标准已建立

### 2.Epic创建

创建专注的epic，遵循以下结构：

#### Epic标题

{{Enhancement Name}} - Brownfield Enhancement

#### Epic目标

{{1-2句话描述epic将完成什么以及为什么它增加价值}}

#### Epic描述

**现有系统上下文**:

- `当前相关功能`: {{brief description}}
- `技术栈`: {{relevant existing technologies}}
- `集成点`: {{where new work connects to existing system}}

**增强详情**:

- `正在添加/更改什么`）`: {{clear description}}
- `如何集成`: {{integration approach}}
- `成功标准`: {{measurable outcomes}}

#### 故事

列出完成epic的1-3个专注story：

1. **Story 1:** {{Story title and brief description}}
2. **Story 2:** {{Story title and brief description}}
3. **Story 3:** {{Story title and brief description}}

#### 兼容性要求 现有API保持不变 数据库模式更改向后兼容 UI更改遵循现有模式 性能影响最小

#### 风险缓解

- **主要风险:** {{main risk to existing system}}
- **缓解:** {{how risk will be addressed}}
- **回滚计划:** {{how to undo changes if needed}}

#### 完成定义

- 所有story完成，验收标准满足
- 通过测试验证现有功能
- 集成点正常工作
- 文档适当更新
- 现有功能无回归问题

### 3.验证检查清单

在最终确定epic之前，确保：

**范围验证**:

- Epic可以在最多1-3个story中完成
- 不需要架构文档
- 增强遵循现有模式
- 集成复杂度可管理

**风险评估**:

- 对现有系统的风险较低
- 回滚计划可行
- 测试方法涵盖现有功能
- 团队对集成点有足够了解

**完整性检查**:

- Epic目标清晰且可实现
- Story适当范围
- 成功标准可衡量
- 依赖关系已识别

### 4.移交给Story Manager

一旦 epic 验证完成，向 Story Manager提供此移交：

---

**Story Manager 移交**:

"请为这个brownfield epic开发详细的用户故事。关键考虑因素:

- 这是对运行{{technology stack}}的现有系统的增强集成点: {{list key integration points}}
- 要遵循的现有模式: {{relevant existing patterns}}
- 关键兼容性要求: {{key requirements}}
- 每个story必须包括验证现有功能保持完整的部分

epic应该在交付{{epic goal}}的同时维护系统完整性."

---

## 成功标准

epic创建成功时：

1. 增强范围明确定义且大小适当
2. 集成方法尊重现有系统架构
3. 对现有功能的风险最小化
4. Story逻辑排序以安全实现
5. 兼容性要求明确指定
6. 回滚计划可行且记录

## 重要说明

- 此任务专门用于SMALL brownfield增强
- 如果范围增长超过3个story，考虑完整的brownfield PRD流程
- 始终优先考虑现有系统完整性而非新功能
- 当对范围或复杂度有疑问时，升级到完整的brownfield规划
