const fs = require('fs');
const { execSync } = require('child_process');

const repoPath = 'F:\\Zaigum';
process.chdir(repoPath);

const topics = [
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
  'ES6 Modules: Import and export functionality',
  'JavaScript Classes: Syntactic sugar over prototypes',
  'Generator Functions: Functions that can pause execution',
  'Symbol Primitive: Unique and immutable values',
  'Proxy Objects: Intercept object operations',
  'WeakMap and WeakSet: Garbage-collectable collections',
  'Array Methods: map, filter, reduce, forEach',
  'String Methods: split, slice, substring, includes',
  'Object Methods: assign, keys, values, entries',
];

const topicNames = [
  'JavaScript Hoisting', 'Event Loop Concepts', 'Closures and Scope',
  'Prototype Chain', 'Promise Handling', 'Arrow Functions',
  'Destructuring Assignment', 'Template Literals', 'Spread Operator',
  'Async/Await Pattern', 'Map and Set Collections', 'ES6 Modules',
  'JavaScript Classes', 'Generator Functions', 'Symbol Primitive',
  'Proxy Objects', 'WeakMap and WeakSet', 'Array Methods',
  'String Methods', 'Object Methods',
];

function getDaysOf2024() {
  const days = [];
  const start = new Date('2024-01-01');
  const end = new Date('2024-12-31');
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }
  return days;
}

const days = getDaysOf2024();
console.log(`Total days: ${days.length}`);

let total = 0;

for (const day of days) {
  const dateStr = day.toISOString().slice(0, 10).replace(/-/g, '');
  const isoDate = day.toISOString().slice(0, 10);
  const commitCount = Math.floor(Math.random() * 18) + 3; // 3 to 20

  for (let i = 0; i < commitCount; i++) {
    const topicIndex = (total) % topics.length;
    const filename = `fill2024_${dateStr}_${i}.js`;

    // Skip if file already committed
    if (fs.existsSync(filename)) { total++; continue; }
    const commitMsg = `Add ${topicNames[topicIndex]} - JS Learning ${isoDate}`;
    const hour = String(Math.floor((i / commitCount) * 22) + 1).padStart(2, '0');
    const fakeDate = `${isoDate}T${hour}:00:00`;

    fs.writeFileSync(filename, `// ${topics[topicIndex]}\n`);
    execSync(`git add ${filename}`);
    execSync(`git commit -m "${commitMsg}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: fakeDate,
        GIT_COMMITTER_DATE: fakeDate,
      }
    });
    total++;
  }

  if (days.indexOf(day) % 30 === 0) {
    console.log(`✅ Done: ${isoDate} | commits today: ${commitCount} | total: ${total}`);
  }
}

console.log(`\n🎉 Done! Total commits created: ${total}`);
console.log('Now run: git push');
