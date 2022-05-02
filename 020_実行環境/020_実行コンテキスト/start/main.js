// グローバルコンテキストとは、main.js内全てが範囲
let a = 0;
function b() { // 関数コンテキストとは、関数の中が範囲 外部変数も範囲 このページでいう変数aのこと
  console.log(a);
  console.log(this,arguments,a);
}
b();
