const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  bright: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkStatus() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('📊 Daily JS Learning - Status Check', 'bright');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');
  
  // Check if scheduled task exists
  try {
    const result = execSync('schtasks /Query /TN DailyJSLearning /FO LIST /V', { encoding: 'utf8' });
    log('✅ Scheduled Task Status:', 'green');
    
    const lines = result.split('\n');
    const taskName = lines.find(l => l.includes('TaskName:'));
    const nextRun = lines.find(l => l.includes('Next Run Time:'));
    const lastRun = lines.find(l => l.includes('Last Run Time:'));
    const lastResult = lines.find(l => l.includes('Last Result:'));
    const status = lines.find(l => l.includes('Status:'));
    
    if (taskName) log(`   ${taskName.trim()}`, 'blue');
    if (status) log(`   ${status.trim()}`, 'blue');
    if (nextRun) log(`   ${nextRun.trim()}`, 'blue');
    if (lastRun) log(`   ${lastRun.trim()}`, 'blue');
    if (lastResult) log(`   ${lastResult.trim()}`, 'blue');
    
  } catch (error) {
    log('❌ Scheduled task not found', 'red');
    log('Run: node setup-schedule.js to create it\n', 'yellow');
    return;
  }
  
  // Check log file
  const logPath = path.join(process.cwd(), 'daily-log.txt');
  log('\n📄 Log File:', 'cyan');
  
  if (fs.existsSync(logPath)) {
    const logContent = fs.readFileSync(logPath, 'utf8');
    const lines = logContent.split('\n');
    const lastLines = lines.slice(-20).join('\n');
    
    log(`   Location: ${logPath}`, 'blue');
    log(`   Size: ${(fs.statSync(logPath).size / 1024).toFixed(2)} KB`, 'blue');
    log('\n   Last 20 lines:', 'yellow');
    console.log(lastLines);
  } else {
    log('   ⚠️  Log file not found (task hasn\'t run yet)', 'yellow');
    log(`   Will be created at: ${logPath}`, 'blue');
  }
  
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('💡 Quick Actions:', 'yellow');
  log('Run task now: node run-task-now.js', 'blue');
  log('View full logs: cat daily-log.txt (Git Bash) or type daily-log.txt (CMD)', 'blue');
  log('Delete task: schtasks /Delete /TN DailyJSLearning /F (CMD)', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');
}

checkStatus();