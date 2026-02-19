const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

// Change to the correct directory
const repoPath = 'C:\\Users\\theza\\Daily_improvement_code_JS';
process.chdir(repoPath);

const allTopics = [
  'Hoisting: var declarations are moved to top of scope',
  'Event Loop: Handles async operations in JavaScript',
  'Closures: Inner functions access outer function variables',
  'Prototypes: Objects inherit properties from prototype chain',
  'Promises: Handle asynchronous operations with .then()',
  'Arrow Functions: Shorter syntax, lexical this binding',
  'Destructuring: Extract values from arrays/objects easily',
  'Template Literals: Use backticks for string interpolation',
  'Spread Operator: ...array expands elements',
  'Async/Await: Cleaner syntax for promise-based code',
  'Map and Set: New data structures in ES6',
  'Modules: Import and export functionality',
  'Classes: Syntactic sugar over prototypes',
  'Generators: Functions that can pause execution',
  'Symbols: Unique and immutable primitive values',
  'Proxy: Intercept and customize object operations',
  'Reflect API: Built-in object for interceptable operations',
  'WeakMap and WeakSet: Garbage-collectable collections',
  'Array Methods: map, filter, reduce, forEach',
  'String Methods: split, slice, substring, includes',
  'Object Methods: assign, keys, values, entries',
  'Error Handling: try, catch, finally blocks',
  'Strict Mode: Enforces stricter parsing and error handling',
  'This Keyword: Context-dependent reference',
  'Call, Apply, Bind: Function context manipulation',
  'IIFE: Immediately Invoked Function Expression',
  'Callback Functions: Functions passed as arguments',
  'Higher Order Functions: Functions that operate on functions',
  'Currying: Transforming multi-argument functions',
  'Memoization: Caching function results',
  'Debouncing: Limiting function execution rate',
  'Throttling: Controlling function execution frequency',
  'Event Delegation: Handling events on parent elements',
  'DOM Manipulation: Modifying HTML structure',
  'Local Storage: Browser data persistence',
  'Session Storage: Temporary browser storage',
  'Cookies: Small data stored in browser',
  'Fetch API: Modern way to make HTTP requests',
  'XMLHttpRequest: Traditional AJAX method',
  'JSON: JavaScript Object Notation',
  'Regular Expressions: Pattern matching in strings',
  'Date Object: Working with dates and times',
  'Math Object: Mathematical operations',
  'Type Coercion: Implicit type conversion',
  'Truthy and Falsy: Boolean evaluation',
  'Nullish Coalescing: ?? operator',
  'Optional Chaining: ?. operator',
  'Rest Parameters: Collecting function arguments',
  'Default Parameters: Function parameter defaults',
  'Ternary Operator: Conditional expression'
];

const allTopicNames = [
  'JavaScript Hoisting',
  'Event Loop Concepts',
  'Closures and Scope',
  'Prototype Chain',
  'Promise Handling',
  'Arrow Functions',
  'Destructuring Assignment',
  'Template Literals',
  'Spread Operator',
  'Async/Await Pattern',
  'Map and Set Collections',
  'ES6 Modules',
  'JavaScript Classes',
  'Generator Functions',
  'Symbol Primitive',
  'Proxy Objects',
  'Reflect API',
  'WeakMap and WeakSet',
  'Array Methods',
  'String Methods',
  'Object Methods',
  'Error Handling',
  'Strict Mode',
  'This Keyword',
  'Call Apply Bind',
  'IIFE Pattern',
  'Callback Functions',
  'Higher Order Functions',
  'Function Currying',
  'Memoization',
  'Debouncing',
  'Throttling',
  'Event Delegation',
  'DOM Manipulation',
  'Local Storage',
  'Session Storage',
  'Browser Cookies',
  'Fetch API',
  'XMLHttpRequest',
  'JSON Parsing',
  'Regular Expressions',
  'Date Object',
  'Math Object',
  'Type Coercion',
  'Truthy Falsy Values',
  'Nullish Coalescing',
  'Optional Chaining',
  'Rest Parameters',
  'Default Parameters',
  'Ternary Operator'
];

const DEFAULT_COMMIT_COUNT = 50;

function getVersions() {
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
    return { nodeVersion, npmVersion, gitVersion };
  } catch (error) {
    return { nodeVersion: 'N/A', npmVersion: 'N/A', gitVersion: 'N/A' };
  }
}

function createDailyFiles() {
  const { nodeVersion, npmVersion, gitVersion } = getVersions();
  
  console.log(`${colors.cyan}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.magenta}🚀 Daily JS Learning Automation${colors.reset}`);
  console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.green}📦 Node.js: ${nodeVersion}${colors.reset}`);
  console.log(`${colors.green}📦 NPM: ${npmVersion}${colors.reset}`);
  console.log(`${colors.green}📦 Git: ${gitVersion}${colors.reset}`);
  console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
  
  const requestedCount = Number.parseInt(process.argv[2], 10);
  const commitCount = Number.isFinite(requestedCount) && requestedCount > 0
    ? requestedCount
    : DEFAULT_COMMIT_COUNT;
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const baseTime = new Date();
  
  console.log(`${colors.yellow}📅 Date: ${date}${colors.reset}`);
  console.log(`${colors.yellow}📁 Repository: ${repoPath}${colors.reset}`);
  console.log(`${colors.yellow}📊 Commits to create: ${commitCount}${colors.reset}\n`);
  
  for (let i = 0; i < commitCount; i++) {
    const topicIndex = i % allTopics.length;
    const topicLine = `// ${allTopics[topicIndex]}`;
    const topicName = allTopicNames[topicIndex];
    const time = new Date(baseTime.getTime() + i * 1000).toTimeString().slice(0, 8).replace(/:/g, '');
    const filename = `day${date}_${i + 1}_${time}.js`;
    
    // Create file with topic
    fs.writeFileSync(filename, topicLine);
    
    // Git operations
    execSync(`git add ${filename}`);
    const commitMsg = `Add ${topicName} - Daily JS Learning Day ${date} Topic ${i + 1}`;
    execSync(`git commit -m "${commitMsg}"`);
    
    console.log(`${colors.green}✅ Commit ${i + 1}/${commitCount}: ${filename}${colors.reset}`);
    console.log(`${colors.blue}   📝 Topic: ${topicName}${colors.reset}`);
    console.log(`${colors.cyan}   💬 Message: ${commitMsg}${colors.reset}`);
    
    // Push each commit
    execSync('git push');
    console.log(`${colors.magenta}   🚀 Pushed to remote${colors.reset}\n`);
    
    // Small delay to ensure unique timestamps
    if (i < commitCount - 1) {
      const start = Date.now();
      while (Date.now() - start < 1000) {
        // Wait 1 second
      }
    }
  }
  
  console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.green}🎉 Successfully created and pushed ${commitCount} commits!${colors.reset}`);
  console.log(`${colors.green}📊 Total files created: ${commitCount}${colors.reset}`);
  console.log(`${colors.green}📤 Total commits pushed: ${commitCount}${colors.reset}`);
  console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
}

createDailyFiles();