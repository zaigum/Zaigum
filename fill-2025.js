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
];

const topicNames = [
  'JavaScript Hoisting', 'Event Loop Concepts', 'Closures and Scope',
  'Prototype Chain', 'Promise Handling', 'Arrow Functions',
  'Destructuring Assignment', 'Template Literals', 'Spread Operator', 'Async/Await Pattern',
];

// Generate all days of 2025
function getDaysOf2025() {
  const days = [];
  const start = new Date('2025-01-01');
  const end = new Date('2025-12-31');
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }
  return days;
}

const days = getDaysOf2025();
console.log(`Total days to fill: ${days.length}`);

let total = 0;

for (const day of days) {
  const dateStr = day.toISOString().slice(0, 10).replace(/-/g, '');
  const isoDate = day.toISOString().slice(0, 10);

  // 3 commits per day
  for (let i = 0; i < 3; i++) {
    const topicIndex = (total) % topics.length;
    const filename = `fill2025_${dateStr}_${i}.js`;
    const commitMsg = `Add ${topicNames[topicIndex]} - JS Learning ${isoDate}`;
    const fakeDate = `${isoDate}T0${i + 1}:00:00`;

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
    console.log(`✅ Done: ${isoDate} (total commits: ${total})`);
  }
}

console.log(`\n🎉 Done! Total commits created: ${total}`);
console.log('Now run: git push');
