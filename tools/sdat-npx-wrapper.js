#!/usr/bin/env node

/**
 * SDAT Method CLI - Direct execution wrapper for npx
 * This file ensures proper execution when run via npx from GitHub
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if we're running in an npx temporary directory
const isNpxExecution = __dirname.includes('_npx') || __dirname.includes('.npm');

// If running via npx, we need to handle things differently
if (isNpxExecution) {
  const args = process.argv.slice(2);

  // Use the installer for all commands
  const sdatScriptPath = path.join(__dirname, 'installer', 'bin', 'sdat.js');

  if (!fs.existsSync(sdatScriptPath)) {
    console.error('Error: Could not find sdat.js at', sdatScriptPath);
    console.error('Current directory:', __dirname);
    process.exit(1);
  }

  try {
    execSync(`node "${sdatScriptPath}" ${args.join(' ')}`, {
      stdio: 'inherit',
      cwd: path.dirname(__dirname)
    });
  } catch (error) {
    process.exit(error.status || 1);
  }
} else {
  // Local execution - use installer for all commands
  require('./installer/bin/sdat.js');
}