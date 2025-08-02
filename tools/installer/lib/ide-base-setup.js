/**
 * Base IDE Setup - Common functionality for all IDE setups
 * Reduces duplication and provides shared methods
 */

const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");
const chalk = require("chalk");
const fileManager = require("./file-manager");
const resourceLocator = require("./resource-locator");
const { extractYamlFromAgent } = require("../../lib/yaml-utils");

class BaseIdeSetup {
  constructor() {
    this._agentCache = new Map();
    this._pathCache = new Map();
  }

  /**
   * Get all agent IDs with caching
   */
  async getAllAgentIds(installDir) {
    const cacheKey = `all-agents:${installDir}`;
    if (this._agentCache.has(cacheKey)) {
      return this._agentCache.get(cacheKey);
    }

    const allAgents = new Set();

    // Get core agents
    const coreAgents = await this.getCoreAgentIds(installDir);
    coreAgents.forEach(id => allAgents.add(id));

    // Get expansion pack agents
    const expansionPacks = await this.getInstalledExpansionPacks(installDir);
    for (const pack of expansionPacks) {
      const packAgents = await this.getExpansionPackAgents(pack.path);
      packAgents.forEach(id => allAgents.add(id));
    }

    const result = Array.from(allAgents);
    this._agentCache.set(cacheKey, result);
    return result;
  }

  /**
   * Get core agent IDs
   */
  async getCoreAgentIds(installDir) {
    const coreAgents = [];
    const corePaths = [
      path.join(installDir, ".sdat-core", "agents"),
      path.join(installDir, "sdat-core", "agents")
    ];

    for (const agentsDir of corePaths) {
      if (await fileManager.pathExists(agentsDir)) {
        const files = await resourceLocator.findFiles("*.md", { cwd: agentsDir });
        coreAgents.push(...files.map(file => path.basename(file, ".md")));
        break; // Use first found
      }
    }

    return coreAgents;
  }

  /**
   * Find agent path with caching
   */
  async findAgentPath(agentId, installDir) {
    const cacheKey = `agent-path:${agentId}:${installDir}`;
    if (this._pathCache.has(cacheKey)) {
      return this._pathCache.get(cacheKey);
    }

    // Use resource locator for efficient path finding
    let agentPath = await resourceLocator.getAgentPath(agentId);

    if (!agentPath) {
      // Check installation-specific paths
      const possiblePaths = [
        path.join(installDir, ".sdat-core", "agents", `${agentId}.md`),
        path.join(installDir, "sdat-core", "agents", `${agentId}.md`),
        path.join(installDir, "common", "agents", `${agentId}.md`)
      ];

      for (const testPath of possiblePaths) {
        if (await fileManager.pathExists(testPath)) {
          agentPath = testPath;
          break;
        }
      }
    }

    if (agentPath) {
      this._pathCache.set(cacheKey, agentPath);
    }
    return agentPath;
  }

  /**
   * Get agent title from metadata
   */
  async getAgentTitle(agentId, installDir) {
    const agentPath = await this.findAgentPath(agentId, installDir);
    if (!agentPath) return agentId;

    try {
      const content = await fileManager.readFile(agentPath);
      const yamlContent = extractYamlFromAgent(content);
      if (yamlContent) {
        const metadata = yaml.load(yamlContent);
        return metadata.agent_name || agentId;
      }
    } catch (error) {
      // Fallback to agent ID
    }
    return agentId;
  }

  /**
   * Get installed expansion packs
   */
  async getInstalledExpansionPacks(installDir) {
    const cacheKey = `expansion-packs:${installDir}`;
    if (this._pathCache.has(cacheKey)) {
      return this._pathCache.get(cacheKey);
    }

    const expansionPacks = [];

    // Check for dot-prefixed expansion packs
    const dotExpansions = await resourceLocator.findFiles(".sdat-*", { cwd: installDir });

    for (const dotExpansion of dotExpansions) {
      if (dotExpansion !== ".sdat-core") {
        const packPath = path.join(installDir, dotExpansion);
        const packName = dotExpansion.substring(1); // remove the dot
        expansionPacks.push({
          name: packName,
          path: packPath
        });
      }
    }

    // Check other dot folders that have config.yaml
    const allDotFolders = await resourceLocator.findFiles(".*", { cwd: installDir });
    for (const folder of allDotFolders) {
      if (!folder.startsWith(".sdat-") && folder !== ".sdat-core") {
        const packPath = path.join(installDir, folder);
        const configPath = path.join(packPath, "config.yaml");
        if (await fileManager.pathExists(configPath)) {
          expansionPacks.push({
            name: folder.substring(1), // remove the dot
            path: packPath
          });
        }
      }
    }

    this._pathCache.set(cacheKey, expansionPacks);
    return expansionPacks;
  }

  /**
   * Get expansion pack agents
   */
  async getExpansionPackAgents(packPath) {
    const agentsDir = path.join(packPath, "agents");
    if (!(await fileManager.pathExists(agentsDir))) {
      return [];
    }

    const agentFiles = await resourceLocator.findFiles("*.md", { cwd: agentsDir });
    return agentFiles.map(file => path.basename(file, ".md"));
  }

  /**
   * Create agent rule content (shared logic)
   */
  async createAgentRuleContent(agentId, agentPath, installDir, format = 'mdc') {
    const agentContent = await fileManager.readFile(agentPath);
    const agentTitle = await this.getAgentTitle(agentId, installDir);
    const yamlContent = extractYamlFromAgent(agentContent);

    let content = "";

    if (format === 'mdc') {
      // MDC format for Cursor
      content = "---\n";
      content += "description: \n";
      content += "globs: []\n";
      content += "alwaysApply: false\n";
      content += "---\n\n";
      content += `# ${agentId.toUpperCase()} Agent Rule\n\n`;
      content += `当用户输入 \`@${agentId}\` 时，此规则将被触发并激活 ${agentTitle} 代理角色。\n\n`;
      content += "## Agent 激活\n\n";
      content += "关键提示：阅读完整的YAML，开始激活以改变你的状态，遵循启动部分的指示，保持这种状态直到被告知退出此模式：\n\n";

      content += "```yaml\n";
      content += yamlContent || agentContent.replace(/^#.*$/m, "").trim();
      content += "\n```\n\n";
      content += "## File Reference\n\n";
      const relativePath = path.relative(installDir, agentPath).replace(/\\/g, '/');
      content += `完整理的 agent 定义在 [${relativePath}](mdc:${relativePath}) 中.\n\n`;
      content += "## 使用方法\n\n";
      content += `当用户输入 \`@${agentId}\`, 会激活 ${agentTitle} 角色，并会遵守上面 yaml 文件定义的规则.\n`;
    } else if (format === 'claude') {
      // Claude Code format
      content = `# /${agentId} Command\n\n`;
      content += `当这个命令被使用时, 会使用下面的 agent 角色:\n\n`;
      content += agentContent;
    }

    return content;
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this._agentCache.clear();
    this._pathCache.clear();
  }
}

module.exports = BaseIdeSetup;