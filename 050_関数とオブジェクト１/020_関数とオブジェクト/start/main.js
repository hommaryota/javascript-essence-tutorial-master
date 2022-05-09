// 関数は実行可能なオブジェクト
function a() {
  console.log('hello');
}

// オブジェクトと同じようにpropを追加できる
a.prop = 0;

// a関数のmethodという値に関数を代入
a.method = function () {
  console.log('method');
}

// 呼び出しも行える
a();
console.log(a.prop);
a.method();
