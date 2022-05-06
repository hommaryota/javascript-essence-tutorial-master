function fn(a, b = 1) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(a,b);
}
fn(0, null)
fn(0, undefined)

let c = fn(1, undefined);
console.log(c);

// 引数は書いた順に渡される
// 1つだけ渡すことも可能 その場合bはundefinedになる

// 関数名が重複していた場合は後に書いた関数が適用される
