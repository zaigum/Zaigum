# Daily JS Learning Automation

Automatic daily JavaScript learning through Git commits. Creates 50 unique JavaScript topic files and commits them to your GitHub repository daily.

## ✨ Features

✅ **50 Unique JavaScript Topics** - No repeating content
✅ **Automatic Daily Runs** - Set it once, runs every day at 9 AM
✅ **Missed Task Handling** - Runs when you turn on your computer if missed
✅ **Colorful Terminal Output** - Beautiful progress display
✅ **Version Display** - Shows Node.js, NPM, and Git versions
✅ **Individual Commits** - Each topic gets its own commit
✅ **Git Alias Support** - Use `git today` command
✅ **Cross-Platform** - Works on Windows

## 🚀 Quick Setup for New Developers

### Step 1: Prerequisites
- Node.js installed
- Git installed and configured
- GitHub account with a repository

### Step 2: Clone the Repository
```bash
git clone https://github.com/qasimmirza96/Daily_improvement_code_JS.git
cd Daily_improvement_code_JS
```

### Step 3: Run Setup (Choose One)

**Option A: Fresh Start (Recommended)**
```bash
node setup-fresh.js
```
- Removes old commit history
- Creates YOUR own repository
- All commits in YOUR name

**Option B: Keep History**
```bash
node setup-dev.js
```
- Keeps original commit history
- Configures for your repository

### Step 4: Answer Setup Questions

The setup will ask:
1. **GitHub repository URL** - Your repo URL
2. **Local path** - Where to store files
3. **Git username** - Your name
4. **Git email** - Your email
5. **Automatic daily runs?** - Type `y` for yes

### Step 5: Done! 🎉

Your automation is now set up and will run automatically every day at 9 AM.

## 📋 Usage

### Run Manually
```bash
# Default: 50 commits
node daily-automation.js

# Custom count
node daily-automation.js 10
node daily-automation.js 100
```

### Using Git Alias
```bash
git today          # 50 commits
git today 10       # 10 commits
git today 100      # 100 commits
```

### Test Automation
```bash
node run-task-now.js
```

### Check Status
```bash
node check-status.js
```
Shows:
- Scheduled task status
- Next run time
- Last run time
- Recent logs

## 📊 What It Creates

### File Naming
```
day20251231_1_090000.js
day20251231_2_090001.js
...
day20251231_50_090049.js
```

### File Content (50 Unique Topics)
- JavaScript Hoisting
- Event Loop Concepts
- Closures and Scope
- Prototype Chain
- Promise Handling
- Arrow Functions
- Destructuring Assignment
- Template Literals
- Spread Operator
- Async/Await Pattern
- Map and Set Collections
- ES6 Modules
- JavaScript Classes
- Generator Functions
- Symbol Primitive
- Proxy Objects
- Reflect API
- WeakMap and WeakSet
- Array Methods
- String Methods
- Object Methods
- Error Handling
- Strict Mode
- This Keyword
- Call Apply Bind
- IIFE Pattern
- Callback Functions
- Higher Order Functions
- Function Currying
- Memoization
- Debouncing
- Throttling
- Event Delegation
- DOM Manipulation
- Local Storage
- Session Storage
- Browser Cookies
- Fetch API
- XMLHttpRequest
- JSON Parsing
- Regular Expressions
- Date Object
- Math Object
- Type Coercion
- Truthy Falsy Values
- Nullish Coalescing
- Optional Chaining
- Rest Parameters
- Default Parameters
- Ternary Operator

## ⏰ Automatic Scheduling

### How It Works
- Runs daily at 9:00 AM automatically
- If computer is off, runs when you turn it on
- Creates 50 commits and pushes to GitHub
- Logs everything to `daily-log.txt`

### Manual Schedule Setup (If Skipped)
```bash
node setup-schedule.js
```

### Remove Scheduled Task
```bash
schtasks /Delete /TN DailyJSLearning /F
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `setup-fresh.js` | Fresh setup with no history |
| `setup-dev.js` | Setup keeping history |
| `setup-schedule.js` | Set up automatic daily runs |
| `setup-git-alias.js` | Set up `git today` command |
| `daily-automation.js` | Main automation script |
| `run-task-now.js` | Run automation immediately |
| `check-status.js` | Check task status and logs |

## 📁 Project Structure

```
Daily_improvement_code_JS/
├── daily-automation.js      # Main automation script
├── setup-fresh.js           # Fresh setup for new devs
├── setup-dev.js             # Setup keeping history
├── setup-schedule.js        # Schedule automation
├── setup-git-alias.js       # Git alias setup
├── run-task-now.js          # Manual run
├── check-status.js          # Status checker
├── README.md                # This file
├── SETUP.md                 # Detailed setup guide
└── .github/workflows/       # GitHub Actions (optional)
```

## 🎯 What Happens Daily

1. **9:00 AM** - Task triggers automatically
2. **Creates 50 files** - Each with unique JS topic
3. **Makes 50 commits** - Individual commit per file
4. **Pushes to GitHub** - Each commit pushed separately
5. **Logs output** - Saved to `daily-log.txt`

## 💡 Tips

- **View logs**: `cat daily-log.txt` (Git Bash) or `type daily-log.txt` (CMD)
- **Test first**: Run `node run-task-now.js` to test before scheduling
- **Check status**: Run `node check-status.js` anytime
- **Custom topics**: Edit `allTopics` array in `daily-automation.js`
- **Change time**: Edit XML in `setup-schedule.js` (default 9 AM)

## 🔧 Troubleshooting

**Task not running?**
```bash
node check-status.js
```

**Git push fails?**
- Check internet connection
- Verify Git credentials
- Check repository permissions

**Want to change schedule time?**
- Edit `setup-schedule.js` line with `09:00:00`
- Run `node setup-schedule.js` again

## 📚 Documentation

- [SETUP.md](SETUP.md) - Detailed setup instructions
- [GitHub Repository](https://github.com/qasimmirza96/Daily_improvement_code_JS)

## 🎉 Success!

Once set up, you'll have:
- ✅ Automatic daily commits to GitHub
- ✅ Growing JavaScript knowledge base
- ✅ Consistent green squares on GitHub profile
- ✅ 50 unique topics cycling through

## 🤝 Contributing

Feel free to:
- Add more JavaScript topics
- Improve the automation
- Share with other developers

## 📄 License

Free to use and modify for your learning journey!

