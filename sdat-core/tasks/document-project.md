# 记录现有项目

## 目的

为现有项目生成针对AI开发agent优化的综合文档。此任务创建结构化参考材料，使AI agent能够理解项目上下文、约定和模式，以有效贡献任何代码库。

## 任务指令

### 1.初始项目分析

**关键：** 首先，检查上下文中是否存在PRD或需求文档。如果存在，使用它来专注于相关领域的文档工作。

**如果PRD存在**:

- 审查PRD以了解计划了什么增强/功能
- 识别哪些模块、服务或领域将受到影响
- 仅专注于这些相关领域
- 跳过代码库的不相关部分以保持文档精简

**如果PRD不存在**:
询问用户：

"I notice you haven't provided a PRD or requirements document. To create more focused and useful documentation,我注意到您没有提供PRD或需求文档。为了创建更专注和有用的文档，我推荐以下选项之一:

1. **首先创建PRD** - Would you like me to help create a brownfield PRD before documenting?您是否希望我在记录之前帮助创建brownfield PRD？这有助于将文档重点放在相关领域.

2. **提供现有需求** - Do you have a requirements document, epic,您是否有可以分享的需求文档、epic或功能描述?

3. **描述重点** - Can you briefly describe what enhancement or feature you're planning?您能否简要描述您计划的是什么增强或功能？例如:
    - '向用户服务添加支付处理'
    - '重构认证模块'
    - '与新的第三方API集成'

4. **记录所有内容** - Or should I proceed with comprehensive documentation of the entire codebase?Note: This may create excessive documentation for large projects或者我应该继续对整个代码库进行综合文档记录？（注意：对于大型项目，这可能会创建过多的文档）

Please let me know your preference,请告诉我您的偏好，或者如果您愿意，我可以继续完整文档记录."

基于他们的回应：

- 如果他们选择选项1-3：使用该上下文来专注文档
- 如果他们选择选项4或拒绝：继续下面的综合分析

开始对现有项目进行分析。使用可用工具：

1. **项目结构发现**: 检查根目录结构，识别主要文件夹，理解整体组织
2. **技术栈识别**: 查找package.json, requirements.txt, Cargo.toml, pom.xml等以识别语言、框架和依赖
3. **构建系统分析**: 查找构建脚本、CI/CD配置和开发命令
4. **现有文档审查**: 检查README文件、docs文件夹和任何现有文档
5. **代码模式分析**: 采样关键文件以理解编码模式、命名约定和架构方法

询问用户这些启发问题以更好地理解他们的需求：

- 这个项目的主要目的是什么？
- 代码库中是否有任何特别复杂或对agent理解重要的特定领域？
- 您期望AI agent在此项目上执行什么类型的任务？（例如，bug修复、功能添加、重构、测试）
- 您是否有任何现有的文档标准或格式偏好？
- 文档应该针对什么级别的技术细节？（初级开发人员、高级开发人员、混合团队）
- 您是否计划了特定功能或增强？（这有助于专注文档）

### 2.深度代码库分析

关键：在生成文档之前，对现有代码库进行广泛分析：

1. **探索关键领域**:
    - 入口点（主文件、索引文件、应用初始化器）
    - 配置文件和环境设置
    - 包依赖和版本
    - 构建和部署配置
    - 测试套件和覆盖率

2. **询问澄清问题**:
    - "I see you'technology X.我看到您在使用[技术X]。是否有我应该记录的任何自定义模式或约定?"
    - "What are the most critical/开发人员难以处理的这个系统中最关键/复杂的部分是什么?"
    - "Are there any undocumented 'tribal knowledge'是否有我应该捕获的任何未记录的'部落知识'领域?"
    - "我应该记录什么技术债务或已知问题?"
    - "代码库的哪些部分变化最频繁?"

3. **映射现实**:
    - 识别实际使用的模式（不是理论最佳实践）
    - 找到关键业务逻辑所在的位置
    - 定位集成点和外部依赖
    - 记录变通方法和技术债务
    - 注意与标准模式不同的领域

**如果提供了PRD**: 还要分析增强需要改变什么

### 3.核心文档生成[LLM: 生成反映代码库实际状态的综合BROWNFIELD架构文档。

**关键**: 这不是一个理想的架构文档。记录存在的内容，包括：

- 技术债务和变通方法
- 不同部分之间的不一致模式
- 无法更改的遗留代码
- 集成约束
- 性能瓶颈

**文档结构**:

# [项目名称 Brownfield架构文档

## 介绍

本文档捕获[项目名称]代码库的当前状态，包括技术债务、变通方法和真实世界模式。它作为AI agent处理增强的参考。

### 文档范围如果提供了PRD："专注于相关领域：{增强描述}"如果没有PRD："整个系统的综合文档"

### 变更日志

| 日期   | 版本 | 描述               | 作者     |
| ------ | ---- | ------------------ | -------- |
|日期 | 1.0  | 初始brownfield分析 |分析师 |

## 快速参考 - 关键文件和入口点

### 理解系统的关键文件

- **主入口**: `src/index.js`或实际入口点
- **配置**: `config/app.config.js`, `.env.example`
- **核心业务逻辑**: `src/services/`, `src/domain/`
- **API定义**: `src/routes/` 或链接到OpenAPI规范
- **数据库模型**: `src/models/` 或链接到模式文件
- **关键算法**:列出具有复杂逻辑的特定文件

### 如果提供了PRD - 增强影响领域突出显示计划增强将影响的文件/模块

## 高级架构

### 技术摘要

### 实际技术栈来自package.json/requirements.txt

| 类别   | 技术       | 版本   | 说明             |
| ------ | ---------- | ------ | ---------------- |
| 运行时 | Node.js    | 16.x   |任何约束       |
| 框架   | Express    | 4.18.2 |自定义中间件？ |
| 数据库 | PostgreSQL | 13     |连接池设置     |

等等...

### 仓库结构现实检查

- 类型:Monorepo/Polyrepo/Hybrid
- 包管理器:npm/yarn/pnpm
- 值得注意:任何不寻常的结构决策

## 源树和模块组织

### 项目结构实际

```text
project-root/
├── src/
│   ├── controllers/     # HTTP请求处理器
│   ├── services/        # 业务逻辑注意: 用户和支付服务之间的不一致模式
│   ├── models/          # 数据库模型Sequelize
│   ├── utils/           # 混合包 - 需要重构
│   └── legacy/          # 请勿修改 - 旧支付系统仍在使用
├── tests/               # Jest测试60%覆盖率
├── scripts/             # 构建和部署脚本
└── config/              # 环境配置
```

### 关键模块及其目的

- **用户管理**: `src/services/userService.js` - 处理所有用户操作
- **认证**: `src/middleware/auth.js` - 基于JWT，自定义实现
- **支付处理**: `src/legacy/payment.js` - 关键: 请勿重构，紧密耦合
- **[列出其他关键模块及其实际文件]**

## 数据模型和API

### 数据模型

而不是重复，引用实际模型文件：

- **用户模型**: 参见 `src/models/User.js`
- **订单模型**: 参见 `src/models/Order.js`
- **相关类型**: TypeScript定义在 `src/types/`

### API规格

- **OpenAPI规范**: `docs/api/openapi.yaml`如果存在
- **Postman集合**: `docs/api/postman-collection.json`
- **手动端点**:列出发现的任何未记录端点

## 技术债务和已知问题

### 关键技术债务

1. **支付服务**: `src/legacy/payment.js` 中的遗留代码 - 紧密耦合，无测试
2. **用户服务**: 与其他服务不同的模式，使用回调而不是promises
3. **数据库迁移**: 手动跟踪，没有适当的迁移工具
4. **[其他重要债务]**

### 变通方法和陷阱

- **环境变量**: 必须设置 `NODE_ENV=production` 即使是历史原因
- **数据库连接**: 连接池硬编码为10，更改会破坏支付服务
- **[开发人员需要知道的其他变通方法]**

## 集成点和外部依赖

### 外部服务

| 服务     | 目的 | 集成类型 | 关键文件                       |
| -------- | ---- | -------- | ------------------------------ |
| Stripe   | 支付 | REST API | `src/integrations/stripe/`     |
| SendGrid | 邮件 | SDK      | `src/services/emailService.js` |

等等...

### 内部集成点

- **前端通信**: 端口3000上的REST API，期望特定头部
- **后台作业**: Redis队列，参见 `src/workers/`
- **[其他集成]**

## 开发和部署

### 本地开发设置

1. 实际有效的步骤不是理想步骤
2. 设置的已知问题
3. 必需的环境变量参见 `.env.example`

### 构建和部署过程

- **构建命令**: `npm run build`webpack配置在 `webpack.config.js`
- **部署**: 通过 `scripts/deploy.sh` 手动部署
- **环境**: Dev, Staging,参见 `config/environments/`

## 测试现实

### 当前测试覆盖率

- 单元测试: 60%覆盖率Jest
- 集成测试: 最少，在 `tests/integration/`
- E2E测试: 无
- 手动测试: 主要QA方法

### 运行测试

```bash
npm test           # 运行单元测试
npm run test:integration  # 运行集成测试需要本地DB
```

## 如果提供了增强PRD - 影响分析

### 需要修改的文件

基于增强要求，这些文件将受到影响：

- `src/services/userService.js` - 添加新用户字段
- `src/models/User.js` - 更新模式
- `src/routes/userRoutes.js` - 新端点等等...

### 需要的新文件/模块

- `src/services/newFeatureService.js` - 新业务逻辑
- `src/models/NewFeature.js` - 新数据模型等等...

### 集成考虑

- 需要与现有认证中间件集成
- 必须遵循 `src/utils/responseFormatter.js` 中的现有响应格式其他集成点

## 附录 - 有用的命令和脚本

### 常用命令

```bash
npm run dev         # 启动开发服务器
npm run build       # 生产构建
npm run migrate     # 运行数据库迁移
npm run seed        # 种子测试数据
```

### 调试和故障排除

- **日志**: 检查 `logs/app.log` 获取应用日志
- **调试模式**: 设置 `DEBUG=app:*` 获取详细日志
- **常见问题**: 参见 `docs/troubleshooting.md`]]

### 4.文档交付

1. **Gemini, ChatGPT, Claude在Web UI中Gemini, ChatGPT, Claude**:
    - 在一个响应中呈现整个文档（如果太长则多个）
    - 告诉用户复制并保存为 `docs/brownfield-architecture.md` 或 `docs/project-architecture.md`
    - 提及如果需要可以在IDE中稍后分片

2. **在IDE环境中**:
    - 将文档创建为 `docs/brownfield-architecture.md`
    - 告知用户此单个文档包含所有架构信息
    - 如果需要可以使用PO agent稍后分片

文档应该足够全面，以便未来的agent能够理解：

- 系统的实际状态（不是理想化的）
- 在哪里找到关键文件和逻辑
- 存在什么技术债务
- 必须尊重什么约束
- 如果提供了PRD：增强需要改变什么]]

### 5.质量保证

关键：在最终确定文档之前：

1. **准确性检查**: 验证所有技术详情与实际代码库匹配
2. **完整性审查**: 确保所有主要系统组件都已记录
3. **重点验证**: 如果用户提供了范围，验证相关领域得到强调
4. **清晰度评估**: 检查解释对AI agent是否清晰
5. **导航**: 确保文档具有清晰的章节结构以便轻松参考

在主要章节后应用高级启发任务以基于用户反馈进行改进。

## 成功标准

- 创建了单个综合brownfield架构文档
- 文档反映现实包括技术债务和变通方法
- 关键文件和模块引用实际路径
- 模型/API引用源文件而不是重复内容
- 如果提供了PRD：显示需要改变什么的清晰影响分析
- 文档使AI agent能够导航和理解实际代码库
- 技术约束和"陷阱"清楚记录

## 说明

- 此任务创建一个捕获系统真实状态的文档
- 在可能时引用实际文件而不是重复内容
- 诚实地记录技术债务、变通方法和约束
- 对于有PRD的brownfield项目：提供清晰的增强影响分析
- 目标是为做实际工作的AI agent提供实用文档
