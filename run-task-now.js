const { execSync } = require('child_process');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

log('\n🚀 Running daily automation directly...\n', 'cyan');

try {
  // Run the automation script directly
  require('./daily-automation.js');
} catch (error) {
  log('\n❌ Failed to run automation: ' + error.message, 'red');
  process.exit(1);
}