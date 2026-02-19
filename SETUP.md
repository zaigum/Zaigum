# Setup Instructions for Daily JS Learning Automation

## Prerequisites
- Node.js installed on your system
- Git installed and configured
- A GitHub repository for storing daily commits

## Quick Setup (Recommended)

### Option 1: Keep Existing History (Use existing repo)

### 1. Clone the Repository
```bash
git clone https://github.com/qasimmirza96/Daily_improvement_code_JS.git
cd Daily_improvement_code_JS
```

### 2. Run the Setup Script
```bash
node setup-dev.js
```

This will:
- Configure the automation to push to YOUR GitHub repo
- Set up git alias (`git today`)
- Ask if you want automatic daily runs

---

### Option 2: Fresh Start (Recommended for new devs)

### 1. Download or Clone the Repository
```bash
git clone https://github.com/qasimmirza96/Daily_improvement_code_JS.git
cd Daily_improvement_code_JS
```

### 2. Create a NEW empty repository on GitHub
Go to GitHub and create a new empty repository (don't initialize with README)

### 3. Run the Fresh Setup Script
```bash
node setup-fresh.js
```

The script will:
- Remove all old commit history
- Initialize a fresh Git repository in YOUR name
- Connect to YOUR GitHub repository
- Create an initial commit
- Set up git alias
- Ask if you want automatic daily runs
- All future commits will be in YOUR name

---

### Option 3: Manual Schedule Setup (If you skipped it)

If you want to add automatic daily runs later:
```bash
node setup-schedule.js
```

This creates a Windows Task Scheduler task that runs daily at 9:00 AM.

### 3. Run the Automation
```bash
node daily-automation.js
```

---

## Manual Setup (Alternative)

### 1. Clone or Fork the Repository
```bash
git clone https://github.com/qasimmirza96/Daily_improvement_code_JS.git
cd Daily_improvement_code_JS
```

### 2. Update Repository Path
Open `daily-automation.js` and change line 6 to your local path:
```javascript
const repoPath = 'YOUR_PATH_HERE';  // Example: 'c:\\Users\\YourName\\Desktop\\Daily_improvement_code_JS'
```

### 3. Test the Automation
Run from the project directory:
```bash
node daily-automation.js
```

This will create 10 files, make 10 commits, and push them to your repository.

### 4. (Optional) Create Global Command

#### For Windows:
1. Create a batch file at `c:\Users\YourName\run-daily-js.bat`:
```batch
@echo off
cd /d "YOUR_REPO_PATH"
node daily-automation.js
pause
```

2. Add the directory to your PATH or run directly:
```bash
c:\Users\YourName\run-daily-js.bat
```

#### For Mac/Linux:
1. Create a shell script:
```bash
#!/bin/bash
cd YOUR_REPO_PATH
node daily-automation.js
```

2. Make it executable:
```bash
chmod +x run-daily-js.sh
```

3. Add to PATH or create an alias in `.bashrc` or `.zshrc`:
```bash
alias daily-js="bash /path/to/run-daily-js.sh"
```

### 5. (Optional) Setup GitHub Actions for Automatic Daily Runs

The repository includes a GitHub Actions workflow that runs automatically at 9 AM UTC daily.

To enable it:
1. Go to your GitHub repository
2. Click on "Actions" tab
3. Enable workflows if prompted
4. The workflow will run automatically every day

To manually trigger:
1. Go to Actions tab
2. Select "Daily JS Learning" workflow
3. Click "Run workflow"

## What the Automation Does

- Creates 10 JavaScript learning files with unique timestamps
- Each file contains a different JavaScript concept
- Makes 10 separate commits with descriptive messages
- Pushes each commit to GitHub
- Displays detailed progress logs in terminal

## File Naming Convention
```
dayYYYYMMDD_#_HHMMSS.js
```
Example: `day20251231_1_172429.js`

## Customization

### Change Topics
Edit the `jsTopics` and `topicNames` arrays in `daily-automation.js`:
```javascript
const jsTopics = [
  '// Your custom topic 1',
  '// Your custom topic 2',
  // ... add 10 topics
];

const topicNames = [
  'Topic Name 1',
  'Topic Name 2',
  // ... add 10 names
];
```

### Change Number of Commits
Modify the loop in `daily-automation.js`:
```javascript
for (let i = 0; i < 10; i++) {  // Change 10 to your desired number
```

## Troubleshooting

**Error: "Cannot find module"**
- Make sure Node.js is installed: `node --version`

**Error: "git command not found"**
- Install Git and configure it with your credentials

**Error: "Permission denied"**
- Ensure you have write access to the repository
- Check your Git credentials: `git config --list`

**Files not pushing to GitHub**
- Verify remote is set: `git remote -v`
- Check authentication: `git push` manually first

## Support

For issues or questions, open an issue on the GitHub repository.