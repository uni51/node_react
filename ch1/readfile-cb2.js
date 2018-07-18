const fs = require('fs')

// アロー関数は、無名関数をより簡潔に書くための記述
fs.readFile('kakugen.txt', 'utf-8', (err, data) => {
  console.log(data)
})
