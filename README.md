# SDAT-Method: 超级数字化代理团队框架![License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)![Node.js Version(https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)

通过专业AI专业知识改造任何领域：软件开发、娱乐、创意写作、商业策略到个人健康，仅举几例。

⭐ **如果你觉得这个项目有帮助或有用，请在右上角给它一个星标！** 这有助于其他人发现SDAT-Method，你也会收到更新通知！

## 概述

**SDAT Method的两大关键创新：**

**1. 代理规划：** 专门的代理（`analyst`、`pm`、`architect`）与你协作创建详细、一致的 PRD 和架构文档。通过先进的提示工程和人工循环优化，这些规划代理产生超越通用AI任务生成的全面规范。

**2. 上下文工程开发：** Scrum Master Agent然后将这些详细计划转换为超详细的开发故事，其中包含开发代理所需的一切 - 完整上下文、实施细节和直接嵌入故事文件的架构指导。

这种两阶段方法消除了**规划不一致**和**上下文丢失** - AI辅助开发中的最大问题。你的开发代理打开故事文件时，完全了解要构建什么、如何构建以及为什么构建。

**📖在用户指南中查看完整工作流程(sdat-core/user-guide.md)** - 规划阶段、开发周期和所有代理角色

## 快速导航

### 理解 SDAT 工作流程

**在深入之前，请查看这些关键的工作流程图，它们解释了SDAT的工作原理：**

1. **[规划工作流程（Web UI）](sdat-core/user-guide.md#the-planning-workflow-web-ui)** - 如何创建PRD和架构文档
2. **[核心开发周期（IDE）](sdat-core/user-guide.md#the-core-development-cycle-ide)** - SM、Dev和QA代理如何通过故事文件协作

> ⚠️ **这些图表解释了90%的 SDAT Method 代理驱动敏捷流程困惑** - 理解PRD+架构创建和SM/Dev/QA工作流程以及代理如何通过故事文件传递笔记是必不可少的 - 这也解释了为什么这不是任务管理器或简单的任务运行器！

### 你想要做什么？

- **[安装并使用全栈敏捷AI团队构建软件](#quick-start)** → 快速开始说明
- **[学习如何使用SDAT](sdat-core/user-guide.md)** → 完整的用户指南和演练
- **[查看可用的AI代理](#available-agents)** → 为你的团队提供专业角色
- **[探索非技术用途](#-beyond-software-development---expansion-packs)** → 创意写作、商业、健康、教育
- **[创建我自己的AI代理](#creating-your-own-expansion-pack)** → 为你的领域构建代理
- **[浏览现成的扩展包](expansion-packs/)** → 游戏开发、DevOps、基础设施，获得想法和示例的启发
- **[理解架构](docs/core-architecture.md)** → 技术深度探讨

## 重要：保持你的SDAT安装更新

**轻松保持最新状态！** 如果你已经在项目中安装了SDAT-Method，只需运行：

```bash
git pull
npm run install:sdat
```

这将：

- ✅ 自动检测你现有的V2安装
- ✅ 仅更新已更改的文件并添加新文件
- ✅ 为你所做的任何自定义修改创建`.bak`备份文件
- ✅ 保留你的项目特定配置

这使得你可以轻松受益于最新的改进、错误修复和新代理，而不会丢失你的自定义设置！

## 快速开始

### 一键完成所有操作（IDE安装）

**只需运行以下命令之一：**

```bash
# 或者如果你已经克隆了 SDAT 仓库：
git pull
npm run install:sdat
```

这个单一命令处理：

- **新安装** - 在你的项目中设置SDAT
- **升级** - 自动更新现有安装
- **扩展包** - 安装你添加到package.json的任何扩展包

> **就是这样！** 无论你是首次安装、升级还是添加扩展包 - 这些命令都能完成所有操作。

**前提条件**：需要[Node.js](https://nodejs.org) v20+

### 最快开始：网页版的全栈团队随时可用（2分钟）

1. **获取包**：保存或克隆[全栈团队文件](dist/teams/team-fullstack.txt)或选择另一个团队
2. **创建AI代理**：创建新的Gemini Gem或CustomGPT
3. **上传和配置**：上传文件并设置说明："你的关键操作说明已附加，请按指示不要破坏角色"
4. **开始构思和规划**：开始聊天！输入`*help`查看可用命令或选择像`*analyst`这样的代理开始创建简报。
5. **关键**：随时在web中与SDAT Orchestrator交谈（#sdat-orchestrator命令）并向其询问这一切如何工作的问题！
6. **何时转移到IDE**：一旦你有了PRD、架构、可选的UX和简报 - 是时候切换到IDE来分片你的文档，并开始实施实际代码！详情请参阅[用户指南](sdat-core/user-guide.md)

## 🌟 超越软件开发 - 扩展包

SDAT的自然语言框架适用于任何领域。扩展包为创意写作、商业策略、健康与保健、教育等提供专门的AI代理。扩展包还可以用非通用的特定功能扩展核心SDAT-Method。[查看扩展包指南](docs/expansion-packs.md)并学习创建你自己的扩展包！

## 代码库扁平化工具

SDAT-Method 包含一个强大的代码库扁平化工具，专为AI模型消费准备项目文件而设计。此工具将你的整个代码库聚合到单个XML文件中，使你可以轻松地与AI助手共享项目上下文以进行分析、调试或开发协助。

### 功能

- **AI优化输出**：生成专为AI模型消费设计的干净XML格式
- **智能过滤**：自动遵循`.gitignore`模式以排除不必要的文件
- **二进制文件检测**：智能识别并排除二进制文件，专注于源代码
- **进度跟踪**：实时进度指示器和全面的完成统计
- **灵活输出**：可自定义输出文件位置和命名

### 使用方法

```bash

# 指定自定义输入目录
node tools/flattener/main.js --input /path/to/source/directory

# 指定自定义输出文件
node tools/flattener/main.js --output my-project.xml
node tools/flattener/main.js -o /path/to/output/codebase.xml

# 组合输入和输出选项
node tools/flattener/main.js --input /path/to/source --output /path/to/output/codebase.xml
```

### 示例输出

工具将显示进度并提供全面的摘要：

```
📊 完成摘要：
✅ 成功处理156个文件到flattened-codebase.xml
📁 输出文件：/path/to/your/project/flattened-codebase.xml
📏 总源代码大小：2.3 MB
📄 生成的XML大小：2.1 MB
📝 总代码行数：15,847
🔢 估计令牌数：542,891
📊 文件分类：142个文本，14个二进制，0个错误
```

生成的XML文件包含你项目的所有源代码，采用AI模型易于解析和理解的结构化格式，非常适合代码审查、架构讨论或为你的SDAT-Method项目获得AI协助。

## 文档和资源

### 重要指南

- 📖 **[用户指南](sdat-core/user-guide.md)** - 从项目开始到完成的完整演练
- 🏗️ **[核心架构](docs/core-architecture.md)** - 技术深度探讨和系统设计
- 🚀 **[扩展包指南](docs/expansion-packs.md)** - 将SDAT扩展到软件开发之外的任何领域

## 支持

- 💬Discord社区(https://discord.gg/gk8jAdXWmj)
- 🐛问题跟踪器(https://github.com/sdatcode/sdat-method/issues)
- 💬讨论(https://github.com/sdatcode/sdat-method/discussions)

## 贡献

**我们为贡献感到兴奋，欢迎你的想法、改进和扩展包！** 🎉

📋 **[阅读CONTRIBUTING.md](CONTRIBUTING.md)** - 贡献的完整指南，包括指导原则、流程和要求

## 许可证

MIT许可证 - 详情请参阅[LICENSE](LICENSE)。![贡献者(https://contrib.rocks/image?repo=sdatcode/sdat-method)](https://github.com/sdatcode/sdat-method/graphs/contributors)

<sub>为AI辅助开发社区而建 ❤️</sub>
