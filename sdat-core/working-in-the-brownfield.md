# Working in the Brownfield: A Complete Guide （在棕地环境中工作：完整指南）

> **强烈推荐：使用 Gemini Web 或 Gemini CLI 进行棕地文档生成！**
>
> Gemini Web 的 1M+ 上下文（当它工作时）可以分析您的整个代码库，或其关键部分，显然在合理范围内：
>
> - 通过 GitHub URL 上传或在项目文件夹中使用 gemini cli
> - 如果在 Web 中工作：使用 `npx sdat-method flatten` 将您的项目扁平化为单个文件，然后将该文件上传到您的 Web agent。

## 什么是棕地开发？

棕地开发是指在现有软件项目中添加功能、修复错误或现代化改造。与 greenfield 新项目不同，棕地工作需要理解现有代码、尊重约束，并确保新更改无缝集成而不破坏现有功能。

## 何时使用 SDAT 进行棕地开发）

- 为现有应用程序添加重要的新功能
- 现代化遗留代码库
- 集成新技术或服务
- 重构复杂系统
- 修复需要架构理解的错误
- 记录未记录的系统

## 何时不使用棕地工作

如果您刚刚使用 SDAT 完成了 MVP，并且想要继续 post-MVP 工作，更简单的方法是直接与 PM 交谈，要求它与您合作创建一个新的 epic 添加到 PRD 中，分片 epic，与 architect 更新任何架构文档，然后从那里开始。

## 完整的棕地工作流

1. **<ins>用户指南 - 安装</ins>(user-guide.md#installation) 步骤在 Web 中设置您的 agent。**
2. **生成整个代码库的"扁平化"单个文件** 运行：`npx sdat-method flatten`

### 选择您的方法

#### 方法 A：如果添加非常大和复杂的新功能、单个或多个 epic 或大规模更改时推荐

**最适合**：大型代码库、monorepo，或当您确切知道要构建什么时

1. **首先创建 PRD** 来定义需求
2. **仅记录相关区域** 基于 PRD 需求
3. **更高效** - 避免记录未使用的代码

#### 方法 B：适合较小项目

**最适合**：较小的代码库、未知系统或探索性更改

1. **首先记录整个系统**
2. **创建具有完整上下文的 PRD**
3. **更彻底** - 捕获所有内容

### 方法 A：推荐

#### 阶段 1：首先定义需求

**上传您的 flattened-codebase.xml：**

```bash
@pm
*create-brownfield-prd
```

PM 将：

- **询问您的增强** 需求
- **探索代码库** 以了解当前状态
- **识别需要记录的受影响区域**
- **创建具有明确范围的聚焦 PRD**

**关键优势**：PRD 识别您的 monorepo/大型代码库中实际需要记录的部分！

#### 阶段 2：聚焦文档

**仍在 Gemini Web 中，现在具有 PRD 上下文：**

```bash
@architect
*document-project
```

analyst 将：

- **如果没有提供 PRD，询问您的重点**
- **提供选项**：创建 PRD、提供需求或描述增强
- **参考 PRD/描述** 以了解范围
- **专注于 PRD 或您的描述中识别的相关模块**
- **跳过不相关区域** 以保持文档精简
- **为所有环境生成一个架构文档**

analyst 创建：

- **一个综合架构文档** 遵循 fullstack-architecture 模板
- **在单个文件中涵盖所有系统方面**
- **易于复制和保存** 为 `docs/project-architecture.md`
- **如果需要在 IDE 中稍后可以分片**

例如，如果您说"为用户服务添加支付处理"：

- 仅记录：用户服务、API 端点、数据库模式、支付集成
- 创建聚焦的源树，仅显示支付相关代码路径
- 跳过：管理面板、报告模块、不相关的微服务

### 方法 B：文档优先工作流

#### 阶段 1：记录现有系统

**最佳方法 - 具有 1M+ 上下文的 Gemini Web**：

1. **转到 Gemini Web** gemini.google.com
2. **上传您的项目**：
    - **选项 A**：直接粘贴您的 GitHub 仓库 URL
    - **选项 B**：上传您的 flattened-codebase.xml 文件
3. **加载 analyst agent**：上传 `dist/agents/architect.txt`
4. **运行文档记录**：输入 `*document-project`

analyst 将生成所有内容的综合文档。

#### 阶段 2：规划您的增

##### 选项 A：重大更改推荐

**1. 创建棕地 PRD**：

```bash
@pm
*create-brownfield-prd
```

PM agent 将：

- **分析阶段 1 的现有文档**
- **向您请求具体的增强细节**
- **评估复杂性** 并推荐方法
- **为增强创建 epic/story 结构**
- **识别风险和集成点**

**PM Agent 如何获取项目上下文**：

- 在 Gemini Web 中：已经从阶段 1 文档中获得了完整的项目上下文
- 在 IDE 中：将询问"请提供您现有项目文档的路径"

**您将遇到的关键提示**：

- "您想要添加什么具体的增强或功能？"
- "这需要与任何现有系统或 API 集成吗？"
- "我们必须尊重的关键约束是什么？"
- "您的时间线和团队规模是什么？"

**2. 创建棕地架构**：

```bash
@architect
*create-brownfield-architecture
```

architect 将：

- **审查棕地 PRD**
- **设计集成策略**
- **如果需要，规划迁移方法**
- **识别技术风险**
- **定义兼容性要求**

##### 选项 B：聚焦更改

**对于没有完整 PRD 的单个 Epic**：

```bash
@pm
*create-brownfield-epic
```

在以下情况使用：

- 增强定义明确且隔离
- 现有文档全面
- 更改不影响多个系统
- 您需要快速周转

**对于单个 Story**：

```bash
@pm
*create-brownfield-story
```

在以下情况使用：

- 错误修复或小功能
- 非常隔离的更改
- 无架构影响
- 明确的实现路径

### 阶段 3：验证规划工件

```bash
@po
*execute-checklist-po
```

PO 确保：

- 与现有系统兼容
- 没有计划破坏性更改
- 风险缓解策略到位
- 明确的集成方法

### 阶段 4：保存和分片文档

1. 将您的 PRD 和架构保存为：
   docs/brownfield-prd.md
   docs/brownfield-architecture.md
2. 分片您的文档：
   在您的 IDE 中

    ```bash
    @po
    shard docs/brownfield-prd.md
    ```

    ```bash
    @po
    shard docs/brownfield-architecture.md
    ```

### 阶段 5：过渡到开发

**<ins>增强 IDE 开发工作流</ins>(enhanced-ide-development-workflow.md)**

## 棕地最佳实践

### 1. 始终先做文档化

即使您认为您了解代码库：

- 运行 `document-project` 以捕获当前状态
- AI agents 需要这个上下文
- 发现未记录的模式

### 2. 尊重现有模式

棕地模板专门寻找：

- 当前编码约定
- 现有架构模式
- 技术约束
- 团队偏好

### 3. 规划逐步推出

棕地更改应该：

- 支持功能标志
- 规划回滚策略
- 包括迁移脚本
- 保持向后兼容性

### 4. 彻底的做测试集成

专注于测试：回归

- 性能影响
- 数据迁移

### 5. 沟通更改

记录：

- 更改了什么以及为什么
- 迁移说明
- 引入的新模式
- 弃用通知

## 常见棕地场景）

### 场景 1：添加新功能

1. 记录现有系统
2. 创建专注于集成的棕地 PRD
3. 架构强调兼容性
4. Stories 包括集成任务

### 场景 2：现代化遗留代码

1. 广泛的文档阶段
2. PRD 包括迁移策略
3. 架构规划逐步过渡
4. Stories 遵循绞杀无花果模式

### 场景 3：复杂系统中的错误修复

1. 记录相关子系统
2. 使用 `create-brownfield-story` 进行聚焦修复
3. 包括回归测试要求
4. QA 验证无副作用

### 场景 4：API 集成

1. 记录现有 API 模式
2. PRD 定义集成要求
3. 架构确保一致模式
4. Stories 包括 API 文档更新

## 故障排查

### "AI 无法理解我的代码库"

**解决方案**：重新运行 `document-project`，并为关键文件指定更具体的路径

### "生成的方案不符合我们的模式"

**解决方案**：在规划阶段前，先用您的专有规范更新生成的文档

### "小改动也有太多模板代码"

**解决方案**：使用 `create-brownfield-story`，而不是完整工作流

### "集成点不清晰"

**解决方案**：在编写 PRD 时提供更多上下文，特别是明确集成相关的系统

## Quick Reference （快速参考）

### 遗留代码库特有的命令

```bash

@architect → *document-project


@pm → *create-brownfield-prd


@architect → *create-brownfield-architecture


@pm → *create-brownfield-epic


@pm → *create-brownfield-story
```

### Decision Tree （决策树）

```text
Do you have a large codebase or monorepo?
├─ Yes → PRD-First Approach
│   └─ Create PRD → Document only affected areas
└─ No → Is the codebase well-known to you?
    ├─ Yes → PRD-First Approach
    └─ No → Document-First Approach

Is this a major enhancement affecting multiple systems?
├─ Yes → Full Brownfield Workflow
└─ No → Is this more than a simple bug fix?
    ├─ Yes → brownfield-create-epic
    └─ No → brownfield-create-story
```

## Conclusion （结论）

使用 SDAT 方法进行 Brownfield（棕地）开发，在修改现有系统时能够提供结构化和安全性的保障。其核心在于通过完善的文档提供全面的上下文，使用专门针对集成需求设计的模板，并遵循既能尊重现有约束又能推动进展的工作流程。

请记住：**先完善文档，细致规划，安全集成**
