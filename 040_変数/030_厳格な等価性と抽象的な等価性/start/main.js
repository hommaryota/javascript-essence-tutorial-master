function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

let c = true;

// cはbooleanだが、Numberを使用してnumber型に変換している
console.log(b === Number(c));
printEquality(b, c);


let e = '';
let f = 0;

printEquality(e, f);
