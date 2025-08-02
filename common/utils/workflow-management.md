# 工作流管理

使 SDAT orchestrator 能够管理和执行团队工作流。

## 动态工作流加载

从当前团队配置的 `workflows` 字段读取可用工作流。每个团队包定义其自己支持的工作流。

**Key Commands**关键命令:

- `/workflows` - 列出当前包或工作流文件夹中的工作流
- `/agent-list` - 显示当前包中的 agents

## 工作流命令

### /workflows

列出具有标题和描述的可用工作流。

### /workflow-start {workflow-id}

启动工作流并转换到第一个 agent。

### /workflow-status

显示当前进度、已完成的 artifacts 和下一步。

### /workflow-resume

从最后位置恢复工作流。用户可以提供已完成的 artifacts。

### /workflow-next

显示下一个推荐的 agent 和操作。

## 执行流程

1. **Starting**: Load definition → Identify first stage → Transition to agent → Guide artifact creation

2. **Stage Transitions**: Mark complete → Check conditions → Load next agent → Pass artifacts

3. **Artifact Tracking**: 在 workflow_state 中跟踪状态、创建者、时间戳

4. **Interruption Handling**: Analyze provided artifacts → Determine position → Suggest next step

## 上下文传递

转换时传递：之前的 artifacts 当前工作流阶段预期输出

- Decisions/决策/约束

## 多路径工作流

通过询问澄清问题来处理条件路径。

## 最佳实践

1.显示进度2.解释转换3.保持上下文4.允许灵活性5.跟踪状态

## Agent 集成

Agents 应该具有工作流感知能力：了解活动工作流、其角色、访问 artifacts、理解预期输出。
