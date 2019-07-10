const fs = require('fs')
const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8')
const commitPattern = /^(feat|fix|docs|style|refactor|chore)\s[\s\S]+$/g

if (!commitPattern.test(commitMsg)) {
  console.info(' 💅 sorry, its a wrong message, please see under example!')
  console.info(' 👉 commit message: feat 提交信息')
  process.exit(1)
}

process.exit(0)
