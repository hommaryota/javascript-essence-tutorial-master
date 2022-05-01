let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function () {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
}

console.log(obj.prop1); // 一般的なオブジェクトの呼び出し方
obj.prop3(); //メソッドの呼び出し方
console.log(obj.prop4.prop5); //連想配列の呼び出し方

obj.prop6 = 'value6'; //propの追加 objオブジェクトのprop6keyにvalue6を追加
console.log(obj.prop6);
