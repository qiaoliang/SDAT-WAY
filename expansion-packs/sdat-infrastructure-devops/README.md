# Infrastructure &基础设施与 DevOps 扩展包

## 概述

此扩展包通过全面的基础设施和 DevOps 功能扩展了 SDAT 方法。它专为需要在应用程序开发的同时定义、实现和管理云基础设施的团队而设计。

## 目的

虽然核心 SDAT 流程侧重于从业务需求到开发（analyst → pm → architect → sm → dev），但许多项目需要复杂的基础设施规划和实现。此扩展包增加了：

- 基础设施架构设计能力
- 平台工程实现工作流
- DevOps 自动化和 CI/CD 流水线设计
- 云资源管理与优化
- 安全和合规性验证

## 何时使用此包

当您的项目需要时安装此扩展包：

- 云基础设施设计和实现
- Kubernetes/容器平台设置
- 服务网格和 GitOps 工作流
- IaC基础设施即代码
- IDP 开发平台工程和 DevOps 实践

## 包含内容

### Agent

- `devops.yaml` - DevOps 和平台工程 Agent 的配置

### 角色

- `devops.md` - DevOps 工程师角色 Alex

### IDE Agent

- `devops.ide.md` - 特定于 IDE 的 DevOps agent 配置

### 模板

- `infrastructure-architecture-tmpl.md` - 基础设施架构设计模板
- `infrastructure-platform-from-arch-tmpl.md` - 从架构模板实现平台

### Task

- `infra/validate-infrastructure.md` - 基础设施验证工作流
- `infra/review-infrastructure.md` - 基础设施审查流程

### 清单

- `infrastructure-checklist.md` - Comprehensive 16 中部分基础设施验证清单

## 与核心 SDAT 集成

此扩展包在以下几点与核心 SDAT 流程集成：

1. **架构阶段之后**：架构师可以触发基础设施架构设计
2. **与开发并行**：基础设施实现可以与应用程序开发同时进行
3. **部署之前**：基础设施必须在应用程序部署之前进行验证

## 安装

要安装此扩展包，请运行：

```bash
npm run install:expansion infrastructure
```

或手动：

```bash
node tools/install-expansion-pack.js infrastructure
```

这将：

1. 将所有文件复制到 `.sdat-core/` 中的适当位置
2. 更新任何必要的配置
3. 使 DevOps agent 在团队中可用

## 使用示例

### 1.1. 基础设施架构设计

主架构完成后：

```bash
# Using the Architect agent
*create-infrastructure

# Or directly with DevOps agent
npm run agent devops
```

### 2.2. 平台实现

使用经批准的基础设施架构：

```bash
# DevOps agent implements the platform
*implement-platform
```

### 3.3. 基础设施验证

部署前：

```bash
# Validate infrastructure against checklist
*validate-infra
```

## 团队整合

DevOps agent 可以添加到团队配置中：

- `team-technical.yaml` - 用于技术实现团队
- `team-full-org.yaml` - 用于完整的组织团队

## 依赖

此扩展包在与以下内容一起使用时效果最佳：核心 SDAT agent（尤其是 Architect），技术偏好文档批准的 PRD 和系统架构

## 定制

您可以通过以下方式自定义此扩展包：

1. 为您的云提供商修改基础设施模板
2. 根据您的合规性需求调整清单项目
3. 为您的特定工作流添加自定义 task

## 备注

- 基础设施工作需要真实的云凭证和配置{{variable}}模板使用
- 需要实际值的占位符{{variable}}
- 在生产部署之前始终验证基础设施更改

---

_Version: 1.0_
_Compatible with: SDAT Method V2_
