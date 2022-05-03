let a = 'hello';
let b = a;
b = 'bye'; //bの値をbyeに変更しても、aはhelloのまま

console.log(a,b);




let c = {
  prop: 'hello'
}

let d = c;
d.prop = 'bye'
console.log(c,d); //オブジェクトの場合は、dの値を変更するとコピー元のcの値も変わる
