// Turns the working tree into what the host runs: the compiled .next folder is
// kept, and "npm run build" becomes a no-op so the host never compiles.
import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
pkg.scripts.build = 'node -e "console.log(\'Prebuilt on GitHub. Nothing to compile.\')"'
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')

const ignore = fs
  .readFileSync('.gitignore', 'utf8')
  .split('\n')
  .filter((line) => line.trim() !== '/.next/')
ignore.push('/.next/cache/', '/.next/dev/')
fs.writeFileSync('.gitignore', ignore.join('\n') + '\n')
fs.rmSync('.next/cache', { recursive: true, force: true })
