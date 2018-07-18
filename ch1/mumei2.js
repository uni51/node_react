// 小文字を大文字に変換する例
const s = 'Keep On Asking, and It Will Be Given You.'
const r = s.replace(/[a-z]+/g, function (m) {
  return m.toUpperCase()
})
console.log(r)

// 配列の数値を降順に並び替える
const ar = [100, 1, 20, 43, 30, 11, 4]
// 関数の戻り値が負の時 → 引数bを引数aの前に並べ替え。
ar.sort((a, b) => { return b - a })
console.log(ar)
