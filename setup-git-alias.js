const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function setupGitAlias() {
  log('\n⚙️  Setting up Git alias for daily automation...\n', 'cyan');
  
  const repoPath = process.cwd();
  const scriptPath = path.join(repoPath, 'daily-automation.js');
  
  // Check if daily-automation.js exists
  if (!fs.existsSync(scriptPath)) {
    log('❌ Error: daily-automation.js not found in current directory', 'red');
    log('Please run this script from the repository root directory.', 'yellow');
    process.exit(1);
  }
  
  try {
    // Create git alias that runs the node script
    const aliasCommand = `!node "${scriptPath}"`;
    execSync(`git config --global alias.today "${aliasCommand}"`);
    
    log('✅ Git alias created successfully!', 'green');
    log('\n📋 You can now use:', 'cyan');
    log('  git today          - Creates 50 commits (default)', 'blue');
    log('  git today 10       - Creates 10 commits', 'blue');
    log('  git today 100      - Creates 100 commits', 'blue');
    log('\n💡 Tip: Run "git today" from anywhere to create daily commits!\n', 'yellow');
    
  } catch (error) {
    log('❌ Failed to create Git alias: ' + error.message, 'red');
    log('\nYou can manually add the alias by running:', 'yellow');
    log(`git config --global alias.today "!node \\"${scriptPath}\\""`, 'blue');
    process.exit(1);
  }
}

setupGitAlias();