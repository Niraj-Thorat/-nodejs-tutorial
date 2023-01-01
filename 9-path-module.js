const path = require('path')

console.log(path.sep)

const filepath = path.join('/folder','subfolder','file.txt')
console.log(filepath)


const base = path.basename(filepath)
console.log(base)