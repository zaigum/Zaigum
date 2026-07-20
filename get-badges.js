const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

// Read .env
const env = fs.readFileSync('.env', 'utf8');
const TOKEN = env.match(/GITHUB_TOKEN=(.+)/)[1].trim();
const USERNAME = env.match(/GITHUB_USERNAME=(.+)/)[1].trim();
const REPO = env.match(/GITHUB_REPO=(.+)/)[1].trim();

function api(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'Authorization': `token ${TOKEN}`,
        'User-Agent': USERNAME,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      }
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  console.log('🚀 Starting GitHub Badges Automation...\n');

  // ─── 1. Pair Extraordinaire ───
  console.log('1️⃣  Pair Extraordinaire - Co-authored commits...');
  for (let i = 0; i < 10; i++) {
    const filename = `coauthor_${Date.now()}_${i}.js`;
    fs.writeFileSync(`F:\\Zaigum\\${filename}`, `// Co-authored commit ${i}\nconst topic = 'JS Learning ${i}';\n`);
    execSync(`git -C F:\\Zaigum add ${filename}`);
    execSync(`git -C F:\\Zaigum commit -m "Co-authored JS learning ${i}\n\nCo-authored-by: zaiynnn <300540938+zaiynnn@users.noreply.github.com>"`);
    await sleep(500);
  }
  execSync('git -C F:\\Zaigum add .');
  execSync('git -C F:\\Zaigum stash');
  execSync('git -C F:\\Zaigum pull --rebase origin main');
  execSync('git -C F:\\Zaigum stash pop');
  execSync('git -C F:\\Zaigum push');
  console.log('✅ Pair Extraordinaire commits pushed!\n');

  // ─── 2. Quickdraw ───
  console.log('2️⃣  Quickdraw - Open and close issue within 5 min...');
  const issue = await api('POST', `/repos/${USERNAME}/${REPO}/issues`, {
    title: 'Daily JS Learning Tracker',
    body: 'Tracking daily JavaScript learning progress.'
  });
  console.log(`   Issue #${issue.number} created`);
  await sleep(3000);
  await api('PATCH', `/repos/${USERNAME}/${REPO}/issues/${issue.number}`, { state: 'closed' });
  console.log('✅ Quickdraw done - Issue closed!\n');

  // ─── 3. YOLO + Pull Shark ───
  console.log('3️⃣  YOLO + Pull Shark - Creating and merging PRs...');

  for (let pr = 1; pr <= 16; pr++) {
    const branch = `badge-pr-${Date.now()}-${pr}`;

    // Create branch
    const mainRef = await api('GET', `/repos/${USERNAME}/${REPO}/git/ref/heads/main`);
    const sha = mainRef.object.sha;

    await api('POST', `/repos/${USERNAME}/${REPO}/git/refs`, {
      ref: `refs/heads/${branch}`,
      sha
    });

    // Add file to branch
    const filename = `pr_file_${pr}_${Date.now()}.js`;
    const content = Buffer.from(`// PR ${pr} - JS Learning\n`).toString('base64');
    await api('PUT', `/repos/${USERNAME}/${REPO}/contents/${filename}`, {
      message: `Add JS learning file PR ${pr}`,
      content,
      branch
    });

    // Create PR
    const prData = await api('POST', `/repos/${USERNAME}/${REPO}/pulls`, {
      title: `JS Learning Update ${pr}`,
      head: branch,
      base: 'main',
      body: `Daily JS learning commit ${pr}`
    });

    console.log(`   PR #${prData.number} created`);

    // Merge PR (YOLO - no review)
    await sleep(2000);
    await api('PUT', `/repos/${USERNAME}/${REPO}/pulls/${prData.number}/merge`, {
      merge_method: 'squash',
      commit_title: `Merge JS Learning PR ${pr}`
    });

    console.log(`   PR #${prData.number} merged ✅`);
    await sleep(1000);
  }

  console.log('\n🎉 All badges automation complete!');
  console.log('✅ Pair Extraordinaire');
  console.log('✅ Quickdraw');
  console.log('✅ YOLO');
  console.log('✅ Pull Shark (16 PRs merged)');
  console.log('\nGitHub profile check karo - badges show honge! 🏆');
}

run().catch(console.error);
