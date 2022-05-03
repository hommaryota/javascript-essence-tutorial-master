function printTypeAnValue(val) {
  console.log(typeof val,val);
}

let a = 0;
printTypeAnValue(a); // データ型はnumber

let b = '1' + a;
printTypeAnValue(b); // データ型はstringで10 最初に書いてある1に合わせてaのデータ型が決まるため


let c = 15 - b;
printTypeAnValue(c); // -の演算子がnumberの計算しか使わないため、numberとしてデータが決まる

let d = c - null;
printTypeAnValue(d); // numberの5が表示される nullがnumberの0に暗黙的に変換されている

let e = d - true;
printTypeAnValue(e); // trueは真偽を判断するもの 数値の計算で使うと1として扱われる


// parseIntを用いることによって文字列を数値として扱える
console.log(parseInt('1'));
