const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a === b); //同じ値だが、結果はfalseが出る オブジェクトの参照元が異なるから
console.log(a.prop === b.prop); //propの値をみたかったらkeyで確認する
