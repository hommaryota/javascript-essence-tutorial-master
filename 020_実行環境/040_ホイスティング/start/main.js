// 関数の宣言前でもホイスティングが効いてるから関数の呼び出しができる
a();

function a() {
  console.log('a is called');
}

// 関数式の場合は、変数扱いされているので関数式前での呼び出しができない
const test1 = function () {
  console.log('test');
}

test1()

// varは宣言前に変数を使おうとするとundefinedが表示される
// undefinedとは宣言が未定義と言ってる
console.log(b);
var b = 0;

// let constの場合はエラーが出る
console.log(c);
let c = 0;
