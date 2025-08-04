# 初学者友好拉取请求指南

## 欢迎！

如果您是GitHub新手或从未创建过拉取请求（PR），这个指南将帮助您开始为SDAT-Method做贡献。我们将一步一步地完成整个过程。

## 什么是拉取请求？

拉取请求是您向项目贡献代码或文档的方式。它就像说"嘿，我做了这些改进，请考虑将它们添加到项目中"。

## 准备工作

### 1. 创建GitHub账户

如果您还没有GitHub账户，请访问[github.com](https://github.com)并创建一个。

### 2. 安装Git

在您的计算机上安装Git：

- **Windows**: 下载[Git for Windows](https://git-scm.com/download/win)
- **Mac**: 安装Xcode命令行工具或下载Git
- **Linux**: 使用包管理器安装（例如，`sudo apt-get install git`）

### 3. 设置Git

打开终端或命令提示符，运行：

```bash
git config --global user.name "您的姓名"
git config --global user.email "您的邮箱@example.com"
```

## 创建您的第一个PR

### 步骤1：Fork仓库

1. 访问[SDAT-Method GitHub页面](https://github.com/sdatcode/sdat-method)
2. 点击右上角的"Fork"按钮
3. 这将创建仓库的副本到您的GitHub账户

### 步骤2：克隆您的Fork

```bash
git clone https://github.com/您的用户名/sdat-method.git
cd sdat-method
```

### 步骤3：创建分支

```bash
git checkout -b my-first-contribution
```

分支名称应该描述您要做什么。例如：

- `fix-typo-in-readme`
- `add-chinese-translation`
- `update-documentation`

### 步骤4：进行更改

现在您可以编辑文件了！一些简单的开始方式：

#### 修复拼写错误

1. 找到有拼写错误的文件
2. 编辑文件并修复错误
3. 保存文件

#### 改进文档

1. 找到可以改进的文档
2. 添加更多细节或澄清
3. 保存文件

#### 添加翻译

1. 找到英文文档
2. 创建中文版本
3. 保存为新文件

### 步骤5：提交您的更改

```bash
git add .
git commit -m "修复README中的拼写错误"
```

提交消息应该：

- 简短且描述性
- 解释您做了什么
- 使用现在时态

### 步骤6：推送您的分支

```bash
git push origin my-first-contribution
```

### 步骤7：创建拉取请求

1. 访问您的GitHub fork页面
2. 您应该看到一个黄色横幅，提示您创建PR
3. 点击"Compare & pull request"
4. 填写PR描述：

```markdown
## 什么描述您做了什么更改

## 为什么解释为什么需要这个更改

## 如何描述您如何实现更改

## 测试描述您如何测试更改
```

5. 点击"Create pull request"

## 常见问题

### "我犯了一个错误，如何修复？"

如果您需要修复PR中的错误：

```bash
# 编辑文件
git add .
git commit -m "修复之前的错误"
git push origin my-first-contribution
```

PR会自动更新！

### "如何添加更多更改？"

如果您想添加更多更改到同一个PR：

```bash
# 编辑文件
git add .
git commit -m "添加更多改进"
git push origin my-first-contribution
```

### "如何取消PR？"

如果您想取消PR：

1. 在PR页面底部点击"Close pull request"
2. 或者删除您的分支

## 最佳实践

### 提交消息格式

使用约定式提交格式：

- `fix:` 修复错误
- `feat:` 新功能
- `docs:` 文档更改
- `style:` 格式更改
- `refactor:` 代码重构
- `test:` 添加测试

示例：

```bash
git commit -m "docs: 添加中文翻译到README"
git commit -m "fix: 修复安装脚本中的路径错误"
```

### 保持PR小且专注

- 每个PR只做一件事
- 保持更改在200-400行以内
- 如果更改很大，考虑分成多个PR

### 测试您的更改

在提交PR之前：

- 确保代码运行正常
- 检查拼写和语法
- 验证链接是否有效

## 获得帮助

如果您遇到问题：

1. **查看现有问题**：搜索GitHub问题，看看是否已经有人报告了类似问题
2. **创建问题**：如果找不到答案，创建一个新的GitHub问题

## 下一步

一旦您的第一个PR被合并：

1. **庆祝！** 🎉 您刚刚为开源项目做出了贡献
2. **寻找更多机会**：查看[贡献指南](../CONTRIBUTING.md)了解更多方式
3. **帮助他人**：回答其他新贡献者的问题
4. **创建扩展包**：考虑为SDAT-Method创建扩展包

## 记住

- 每个贡献都很重要，无论大小
- 不要害怕犯错 - 这是学习过程的一部分
- 社区在这里帮助您成功
- 您的贡献使SDAT-Method对每个人都更好

**准备好开始了吗？选择一个小任务并开始吧！** 🚀
