const fs = require('fs')

// --- 非同期でファイルを読み込む --- (※2)
fs.readFile('kakugen.txt', 'utf-8', function (err, data){
// 読み込みが完了したときの処理
  console.log(data)
})
